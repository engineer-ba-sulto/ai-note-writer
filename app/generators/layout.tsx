import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function GeneratorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }

  return <div className="container mt-4 mx-auto">{children}</div>;
}
