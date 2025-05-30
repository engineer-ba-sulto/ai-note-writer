import { userProfiles } from "@/drizzle/schema";
import { stripe } from "@/lib/stripe";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "edge";

// Stripe.Subscriptionに current_period_end が含まれていることを明示するためのインターフェース
interface SubscriptionWithPeriodEnd extends Stripe.Subscription {
  current_period_end: number;
}

// Invoiceにsubscriptionプロパティがあることを明示するためのインターフェース
interface InvoiceWithSubscription extends Stripe.Invoice {
  subscription: string | Stripe.Subscription | null;
}

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event: Stripe.Event;

  try {
    if (!signature || !webhookSecret) {
      console.log("Webhook secret or signature not found.");
      return NextResponse.json(
        { error: "Webhook secret not configured." },
        { status: 400 }
      );
    }
    event = await stripe.webhooks.constructEventAsync(
      payload,
      signature,
      webhookSecret
    );
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        const stripeCustomerId = session.customer as string;
        const stripeSubscriptionId = session.subscription as string;
        // StripeからPrice IDを取得 (session.line_items.data[0].price.id など、データ構造を確認)
        // const stripePriceId = session.line_items?.data[0]?.price?.id;

        if (!userId) {
          console.error(
            "Webhook Error: userId not found in checkout session metadata."
          );
          break;
        }

        // subscription変数はStripe.Subscription型であると明示
        const subscription: Stripe.Subscription =
          await stripe.subscriptions.retrieve(stripeSubscriptionId);

        const { env } = getRequestContext();
        const db = drizzle(env.DB);
        await db
          .update(userProfiles)
          .set({
            plan: "paid",
            articleGenerationsRemaining: 50, // 有料プランの回数
            stripeCustomerId: stripeCustomerId,
            stripeSubscriptionId: stripeSubscriptionId,
            stripePriceId: subscription.items.data[0].price.id, // Price IDをサブスクリプションから取得
            // 型アサーションを使用して current_period_end にアクセス
            stripeCurrentPeriodEnd: new Date(
              (subscription as SubscriptionWithPeriodEnd).current_period_end *
                1000
            ), // Unixタイムスタンプ(秒)をDateオブジェクトに変換
          })
          .where(eq(userProfiles.userId, userId));
        console.log(`User ${userId} upgraded to paid plan.`);
        break;
      }
      case "invoice.paid": {
        const invoice = event.data.object as InvoiceWithSubscription; // 新しいインターフェースにアサーション
        const stripeSubscriptionId = invoice.subscription as string;

        if (
          !stripeSubscriptionId ||
          invoice.billing_reason !== "subscription_cycle"
        ) {
          // 初回支払い (checkout.session.completedで処理) や手動請求などは除外
          break;
        }

        const subscription = await stripe.subscriptions.retrieve(
          stripeSubscriptionId
        );
        const userId = subscription.metadata.userId; // Stripe Customer作成時にmetadataにuserIdを設定していれば取得可能
        // または、stripeSubscriptionIdからuserProfilesを検索
        const { env } = getRequestContext();
        const db = drizzle(env.DB);
        if (!userId) {
          const profile = await db
            .select()
            .from(userProfiles)
            .where(eq(userProfiles.stripeSubscriptionId, stripeSubscriptionId))
            .limit(1);
          if (!profile) {
            console.error(
              `Webhook Error: User not found for subscription ${stripeSubscriptionId}`
            );
            break;
          }
          // userId = profile.userId; // この場合、userIdは取得できる
        }
        // もしuserIdがCustomer metadataにもSubscription metadataにもない場合、
        // customer ID (invoice.customer) から userProfiles を検索する
        const customerId = invoice.customer as string;
        const userToUpdate = await db
          .select()
          .from(userProfiles)
          .where(eq(userProfiles.stripeCustomerId, customerId))
          .limit(1);
        if (!userToUpdate) {
          console.error(
            `Webhook Error: User not found for customer ${customerId}`
          );
          break;
        }
        await db
          .update(userProfiles)
          .set({
            articleGenerationsRemaining: 50, // 期間更新時に回数をリセット
            stripeCurrentPeriodEnd: new Date(
              // Response<Subscription> を unknown 経由で SubscriptionWithPeriodEnd に変換
              (subscription as unknown as SubscriptionWithPeriodEnd)
                .current_period_end * 1000
            ),
          })
          .where(eq(userProfiles.userId, userToUpdate[0].userId)); // userIdで更新
        console.log(
          `Subscription renewed for user with customer ID ${customerId}. Generations reset.`
        );
        break;
      }
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata.userId; // metadataから
        // または
        const { env } = getRequestContext();
        const db = drizzle(env.DB);
        const profile = await db
          .select()
          .from(userProfiles)
          .where(eq(userProfiles.stripeSubscriptionId, subscription.id))
          .limit(1);
        if (!profile && !userId) {
          console.error(
            `Webhook Error: User not found for subscription update ${subscription.id}`
          );
          break;
        }
        const targetUserId = userId || profile![0].userId;

        if (
          subscription.cancel_at_period_end ||
          subscription.status === "canceled"
        ) {
          // 期間終了時にキャンセルされる、または即時キャンセルされた場合
          // 必要に応じて status が 'active' でなくなるまで待つか、
          // cancel_at_period_end が設定された時点で UI に通知を表示するなどの処理
          await db
            .update(userProfiles)
            .set({
              // plan: 'free', // すぐにfreeにするか、期間終了まで待つかは仕様による
              // stripeCurrentPeriodEnd の日付を見て判断
              stripeCurrentPeriodEnd: new Date(
                (subscription as unknown as SubscriptionWithPeriodEnd)
                  .current_period_end * 1000
              ), // 更新された期間終了日
              // 必要なら articleGenerationsRemaining も変更
            })
            .where(eq(userProfiles.userId, targetUserId));
          console.log(
            `Subscription for user ${targetUserId} will be canceled at period end or is canceled.`
          );
        } else if (subscription.status === "active") {
          // プラン変更 (アップグレード/ダウングレード) などで active のまま更新された場合
          await db
            .update(userProfiles)
            .set({
              stripePriceId: subscription.items.data[0].price.id,
              stripeCurrentPeriodEnd: new Date(
                (subscription as unknown as SubscriptionWithPeriodEnd)
                  .current_period_end * 1000
              ),
              // articleGenerationsRemaining はプラン変更のロジックに応じて設定
            })
            .where(eq(userProfiles.userId, targetUserId));
          console.log(
            `Subscription for user ${targetUserId} updated. New price: ${subscription.items.data[0].price.id}`
          );
        }
        break;
      }
      case "customer.subscription.deleted": {
        // サブスクリプションが完全に削除された場合 (期間終了時など)
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata.userId; // metadataから
        // または
        const { env } = getRequestContext();
        const db = drizzle(env.DB);
        const profile = await db
          .select()
          .from(userProfiles)
          .where(eq(userProfiles.stripeSubscriptionId, subscription.id))
          .limit(1);

        if (!profile && !userId) {
          console.error(
            `Webhook Error: User not found for subscription deletion ${subscription.id}`
          );
          break;
        }
        const targetUserId = userId || profile[0]!.userId;

        await db
          .update(userProfiles)
          .set({
            plan: "free",
            articleGenerationsRemaining: 5, // 無料プランの回数に戻す
            stripeSubscriptionId: null, // サブスクリプションIDをクリア
            stripePriceId: null,
            // stripeCustomerId は残しておいても良い（再契約時に利用できるため）
          })
          .where(eq(userProfiles.userId, targetUserId));
        console.log(
          `Subscription deleted for user ${targetUserId}. Plan set to free.`
        );
        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook signature verification failed.", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed." },
      { status: 400 }
    );
  }
}
