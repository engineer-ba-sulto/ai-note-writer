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
