import { getRequestContext } from "@cloudflare/next-on-pages";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { userProfiles } from "./schema";

export async function getUserProfile(userId: string) {
  const { env } = getRequestContext();
  const db = drizzle(env.DB);
  const res = await db
    .select()
    .from(userProfiles)
    .where(eq(userProfiles.userId, userId));
  return res[0];
}

export async function updateUserProfile(
  userId: string,
  remaining: number,
  plan: "free" | "paid"
) {
  const { env } = getRequestContext();
  const db = drizzle(env.DB);
  await db
    .update(userProfiles)
    .set({
      plan,
      articleGenerationsRemaining: remaining,
    })
    .where(eq(userProfiles.userId, userId));
}
