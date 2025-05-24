import { getRequestContext } from "@cloudflare/next-on-pages";
import { drizzle } from "drizzle-orm/d1";

export function getDb() {
  const context = getRequestContext();
  return drizzle(context.env.DB);
}

export function safeGetDb() {
  try {
    return getDb();
  } catch (error) {
    // Development環境では代替のDB設定を使用
    console.warn("Failed to get Cloudflare DB context, using fallback", error);
    return null;
  }
}
