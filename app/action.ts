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
  const response = await fetch("/api/generate-article", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
