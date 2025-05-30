import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { getUserProfile } from "@/drizzle/query";
import Link from "next/link";

export default async function PaymentButton() {
	const session = await auth();
	// サインインしていない時
  if (!session?.user?.id) {
    return (
      <Button
        asChild
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-xl text-white px-10 py-6"
      >
        <Link href="/generators">サインイン</Link>
      </Button>
    );
  }
  // サインインしている時
  const { stripeSubscriptionId } = await getUserProfile(session.user.id);
  // サブスクリプション購入済みの時
  if (stripeSubscriptionId) {
    return (
      <Button
        asChild
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-xl text-white px-10 py-6"
      >
        <Link href="/generators">記事生成する</Link>
      </Button>
    );
  }
  // 購入していない時
  return (
    <form action="/api/stripe/checkout" method="POST">
      <section>
        <Button
          type="submit"
          role="link"
          className="w-full bg-blue-600 hover:bg-blue-700 text-xl text-white px-10 py-6"
        >
          プランを選ぶ
        </Button>
      </section>
    </form>
  );
}
