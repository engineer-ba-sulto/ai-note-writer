import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SigninButton() {
  return (
    <Button type="submit" variant={"outline"} asChild>
      <Link href="/signin">Sign in</Link>
    </Button>
  );
}
