import { auth, signOut } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            src={session.user.image!}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{session.user.name}</DropdownMenuItem>
          <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="https://billing.stripe.com/p/login/test_6oEdUCaCd3WP8X6cMM">
              Manage Subscription
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button type="submit" className="w-full text-left cursor-pointer">
                Sign Out
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
