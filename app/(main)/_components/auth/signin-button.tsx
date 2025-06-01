"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignIn({
  children,
  oauth,
}: {
  children: React.ReactNode;
  oauth: string;
}) {
  return (
    <Button
      onClick={() => signIn(oauth, { redirectTo: "/generators" })}
      variant="outline"
      className="cursor-pointer"
    >
      {children}
    </Button>
  );
}
