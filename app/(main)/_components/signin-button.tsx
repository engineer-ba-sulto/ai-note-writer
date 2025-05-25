import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SigninButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Button
      type="submit"
      variant={"outline"}
      asChild
      className="text-xl text-white px-10 py-6 shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-blue-800 transform hover:scale-105 transition-all duration-200"
    >
      <Link href="/generators">{children}</Link>
    </Button>
  );
}
