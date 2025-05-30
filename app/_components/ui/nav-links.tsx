"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const isGeneratePage = pathname === "/generators";
  return (
    <>
      {!isGeneratePage && (
        <>
          <Button asChild variant="ghost" className="text-lg text-gray-600">
            <Link href="#price">価格</Link>
          </Button>
          <Button asChild variant="ghost" className="text-lg text-gray-600">
            <Link href="#faq">よくある質問</Link>
          </Button>
        </>
      )}
    </>
  );
}
