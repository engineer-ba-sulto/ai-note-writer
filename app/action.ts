"use server";

export async function startGeneratedArticle({
  theme,
  targetAudience,
  toneAndManner,
  sectionCount,
}: {
  theme: string;
  targetAudience: string;
  toneAndManner: string;
  sectionCount: number;
}) {
  const response = await fetch("http://localhost:3000/api/generate-article", {
    method: "POST",
    body: JSON.stringify({
      theme,
      targetAudience,
      toneAndManner,
      sectionCount,
    }),
  });

  const data = await response.json();
  return data;
}
