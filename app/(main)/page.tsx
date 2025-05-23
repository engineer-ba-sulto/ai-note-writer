import { SignOut } from "./_components/auth/signout-button";
import SigninButton from "./_components/signin-button";

export default function TopPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl font-bold">TOP PAGE</h1>
      <SigninButton />
      <SignOut />
    </main>
  );
}
