import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";

export const runtime = "edge";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/generators" });
        }}
      >
        <Button type="submit" variant={"outline"} className="gap-2">
          <FaGithub size={20} />
          Sign in
        </Button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/generators" });
        }}
      >
        <Button type="submit" variant={"outline"} className="gap-2">
          <FaGoogle size={20} />
          Sign in
        </Button>
      </form>
    </div>
  );
}
