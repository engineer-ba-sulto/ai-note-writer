import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function CTAButton({ className }: { className?: string }) {
  const session = await auth();
  if (!session || !session.user) {
    return (
      <Button
        type="submit"
        variant={"outline"}
        asChild
        className={cn(
          "text-xl text-white px-10 py-6 shadow-lg hover:shadow-xl bg-gradient-to-r from-green-600 to-green-800 transform hover:scale-105 transition-all duration-200",
          className
        )}
      >
        <Link href="/generators">無料で始める</Link>
      </Button>
    );
  }
  return (
    <Button
      type="submit"
      variant={"outline"}
      asChild
      className={cn(
        "text-xl text-white px-10 py-6 shadow-lg hover:shadow-xl bg-gradient-to-r from-green-600 to-green-800 transform hover:scale-105 transition-all duration-200",
        className
      )}
    >
      <Link href="/generators">購入済</Link>
    </Button>
  );
}
