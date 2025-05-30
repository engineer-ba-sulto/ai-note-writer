import { auth } from "@/auth";
import { userProfiles } from "@/drizzle/schema";
import { stripe } from "@/lib/stripe";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "edge";

export async function POST() {
  const headersList = await headers();
  const origin = headersList.get("origin");

  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  const userEmail = session.user.email; // Stripe Customer作成に利用

  const { env } = getRequestContext();
  const db = drizzle(env.DB);
  try {
    const profile = await db
      .select()
      .from(userProfiles)
      .where(eq(userProfiles.userId, userId));

    if (!profile) {
      // 通常は作成されているはずだが、念のため作成
      await db.insert(userProfiles).values({
        userId: userId,
        plan: "free",
        articleGenerationsRemaining: 5,
      });
      const profile = await db
        .select()
        .from(userProfiles)
        .where(eq(userProfiles.userId, userId));
      if (!profile) throw new Error("Failed to create or find user profile");
    }

    let stripeCustomerId = profile[0].stripeCustomerId;

    // Stripe Customer IDがなければ作成
    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: userEmail!,
        metadata: {
          userId: userId,
        },
      });
      stripeCustomerId = customer.id;
      await db
        .update(userProfiles)
        .set({ stripeCustomerId: stripeCustomerId })
        .where(eq(userProfiles.userId, userId));
    }

    const priceId = process.env.STRIPE_PAID_PLAN_PRICE_ID;
    if (!priceId) {
      return NextResponse.json(
        { error: "Stripe Price ID not configured" },
        { status: 500 }
      );
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription", // サブスクリプションの場合
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      metadata: {
        userId: userId, // Webhookでユーザーを特定するために重要
      },
    });

    if (!checkoutSession.url) {
      return NextResponse.json(
        { error: "Could not create Stripe Checkout session" },
        { status: 500 }
      );
    }

    return NextResponse.redirect(checkoutSession.url!, 303);
  } catch (error) {
    console.error("Error creating Stripe Checkout session:", error);
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
