import { Hono } from "hono";

const generateArticle = new Hono();

generateArticle.get("/", (c) => c.json({ message: "Generate Article OK" }));

export default generateArticle;
