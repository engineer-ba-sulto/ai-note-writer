import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event: Stripe.Event;
  console.log("webhook start");

  try {
    if (!signature || !webhookSecret) {
      console.log("Webhook secret or signature not found.");
      return NextResponse.json(
        { error: "Webhook secret not configured." },
        { status: 400 }
      );
    }
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
    const { data, type } = event;
    console.log("data:", JSON.stringify(data, null, 2), "type:", type);
  } catch (err) {
    console.error("Webhook signature verification failed.", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed." },
      { status: 400 }
    );
  }

  // switch (event.type) {
  //   case "customer.subscription.updated":
  //   case "customer.subscription.deleted":
  //     const subscription = event.data.object as Stripe.Subscription;
  //     await handleSubscriptionChange(subscription);
  //     break;
  //   default:
  //     console.log(`Unhandled event type ${event.type}`);
  // }

  return NextResponse.json({ received: true });
}
