import { Hono } from "hono";
import { handle } from "hono/vercel";
import generateArticle from "./generate-article";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/health", (c) => c.json({ message: "OK" }));
app.route("/generate-article", generateArticle);

export const GET = handle(app);
