// 環境変数を使用して環境を判断する関数
function getApiBaseUrl() {
  // ブラウザ環境でのみ実行される
  if (typeof window !== "undefined") {
    // 開発環境（localhost）
    if (window.location.hostname === "localhost") {
      return `${window.location.protocol}//${window.location.host}`;
    }
  }

  // 本番環境の場合はNEXT_PUBLIC_API_URLを使用
  // 設定されていない場合は相対パスを使用
  return process.env.NEXT_PUBLIC_API_URL || "";
}

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
  // API基本URLを取得
  const baseUrl = getApiBaseUrl();

  // API完全URLを構築
  const apiUrl = `${baseUrl}/api/generate-article`;

  console.log(`Calling API at: ${apiUrl}`);

  const response = await fetch(apiUrl, {
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
