import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SigninButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      type="submit"
      variant={"outline"}
      asChild
      className={cn(
        "text-xl text-white px-10 py-6 shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-blue-800 transform hover:scale-105 transition-all duration-200",
        className
      )}
    >
      <Link href="/generators">{children}</Link>
    </Button>
  );
}
