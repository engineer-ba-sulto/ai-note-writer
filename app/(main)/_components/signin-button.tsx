import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SigninButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Button type="submit" variant={"outline"} asChild>
      <Link href="/generators">{children}</Link>
    </Button>
  );
}
