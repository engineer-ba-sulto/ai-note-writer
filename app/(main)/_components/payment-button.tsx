import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { getUserProfile } from "@/drizzle/query";

export default async function PaymentButton() {
  const session = await auth();
  if (!session?.user?.id) {
    return null;
  }
  const { stripeCustomerId } = await getUserProfile(session.user.id);
  return (
    <form action="/api/stripe/checkout" method="POST">
      <section>
        <Button
          disabled={stripeCustomerId ? true : false}
          type="submit"
          role="link"
          className="w-full bg-blue-600 hover:bg-blue-700 text-xl text-white px-10 py-6"
        >
          {stripeCustomerId ? "購入済" : "プランを選ぶ"}
        </Button>
      </section>
    </form>
  );
}
