import { Hono } from "hono";
import { handle } from "hono/vercel";
export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/health", (c) => c.json({ message: "OK" }));

export const GET = handle(app);
