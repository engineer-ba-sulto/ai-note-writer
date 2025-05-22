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

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    console.error(
      `API request failed with status ${response.status}`,
      errorText
    );
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data = await response.json();
  return data;
}
