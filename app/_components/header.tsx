import { auth } from "@/auth";
import Link from "next/link";

export default async function Header() {
  const session = await auth();
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">AI Note Article Generator</Link>
        </h1>
        <div className="flex items-center gap-4">
          {session ? (
            <Link href="/generators">記事を作成する</Link>
          ) : (
            <Link href="/signin">サインイン</Link>
          )}
        </div>
      </div>
    </header>
  );
}
