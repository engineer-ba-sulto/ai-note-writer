import { GoogleGenAI } from "@google/genai";
import { Hono } from "hono";

const generateArticle = new Hono();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error(
    "FATAL ERROR: 環境変数 'GEMINI_API_KEY' が設定されていません。アプリケーションを起動できません。"
  );
}

generateArticle.get("/", (c) => c.json({ message: "Generate Article OK" }));
generateArticle.get("/test", async (c) => {
  const ai = new GoogleGenAI({ apiKey: apiKey });
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "こんにちは",
  });
  return c.json({ message: response.text });
});

export default generateArticle;
