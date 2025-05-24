"use client";

import { signIn } from "next-auth/react";

export default function SignIn({
  children,
  oauth,
}: {
  children: React.ReactNode;
  oauth: string;
}) {
  return (
    <button onClick={() => signIn(oauth, { redirectTo: "/generators" })}>
      {children}
    </button>
  );
}
