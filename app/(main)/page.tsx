import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TopPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl font-bold">TOP PAGE</h1>
      <Button asChild>
        <Link href="/generators">AI Note Article Generator</Link>
      </Button>
    </main>
  );
}
