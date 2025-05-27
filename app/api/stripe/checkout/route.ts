import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "../../../../lib/stripe";

export const runtime = "edge";

export async function POST() {
  const headersList = await headers();
  const origin = headersList.get("origin");
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1RSsv9AmDSQJ0iJl5KrqkaZi",
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/?canceled=true`,
  });
  return NextResponse.redirect(session.url!, 303);
}
