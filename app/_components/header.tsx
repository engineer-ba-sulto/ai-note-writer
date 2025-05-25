import { auth } from "@/auth";
import Link from "next/link";
import UserAvatar from "../(main)/_components/auth/user-avatar";

export default async function Header() {
  const session = await auth();
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">1分記事作成AI</Link>
        </h1>
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <UserAvatar />
            </>
          ) : (
            <Link href="/signin">サインイン</Link>
          )}
        </div>
      </div>
    </header>
  );
}
