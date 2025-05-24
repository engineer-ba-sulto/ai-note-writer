import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { safeGetDb } from "./drizzle/db";
import { accounts, sessions, users, verificationTokens } from "./drizzle/schema";

const createConfig = () => {
  const db = safeGetDb();

  const baseConfig = {
    providers: [GitHub, Google],
  };

  if (db) {
    return {
      ...baseConfig,
      adapter: DrizzleAdapter(db, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
        verificationTokensTable: verificationTokens,
      }),
    };
  }

  return baseConfig;
};

export const { handlers, signIn, signOut, auth } = NextAuth(createConfig());
