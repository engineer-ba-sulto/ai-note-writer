import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { drizzle } from "drizzle-orm/d1";
import NextAuth, { User } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import {
  accounts,
  sessions,
  userProfiles,
  users,
  verificationTokens,
} from "./drizzle/schema";

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
  const { env } = getRequestContext();
  const db = drizzle(env.DB);

  return {
    adapter: DrizzleAdapter(db, {
      usersTable: users,
      accountsTable: accounts,
      sessionsTable: sessions,
      verificationTokensTable: verificationTokens,
    }),
    providers: [GitHub, Google],
    events: {
      async createUser({ user }: { user: User }) {
        if (!user.id) return;
        try {
          await db.insert(userProfiles).values({
            userId: user.id,
            plan: "free",
            articleGenerationsRemaining: 5, // 無料ユーザーの初期生成回数
          });
          console.log(`User profile created for ${user.id}`);
        } catch (error) {
          console.error("Error creating user profile:", error);
        }
      },
    },
  };
});
