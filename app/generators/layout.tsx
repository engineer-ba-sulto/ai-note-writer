import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Header from "../_components/header";

export default async function GeneratorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
  return (
    <main>
      <Header />
      <div className="container mt-4 mx-auto">{children}</div>
    </main>
  );
}
