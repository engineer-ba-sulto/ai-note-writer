import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginForm } from "./_components/signin-form";

export const runtime = "edge";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <LoginForm />
      <Button asChild>
        <Link href="/">TOPページに戻る</Link>
      </Button>
    </div>
  );
}
