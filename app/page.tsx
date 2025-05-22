"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneratedArticle } from "@/types/generated-article";
import { Copy, Loader2, RefreshCw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { startGeneratedArticle } from "./action";

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    theme: "",
    targetAudience: "",
    toneAndManner: "",
    sectionCount: "4",
  });

  const [generatedArticle, setGeneratedArticle] =
    useState<GeneratedArticle | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateArticle = async () => {
    // Validate inputs
    if (!formData.theme.trim()) {
      setStatusMessage("記事のテーマを入力してください。");
      toast.error("記事のテーマを入力してください。");
      return;
    }

    setIsGenerating(true);
    setStatusMessage("記事を生成中です...");

    // Simulate API call to AI service
    try {
      const data = await startGeneratedArticle({
        theme: formData.theme,
        targetAudience: formData.targetAudience,
        toneAndManner: formData.toneAndManner,
        sectionCount: Number(formData.sectionCount),
      });

      setGeneratedArticle(data as GeneratedArticle);
      setStatusMessage("記事が正常に生成されました！");
      toast.success("記事が正常に生成されました！");
    } catch (error: unknown) {
      console.error(error);
      setStatusMessage("エラーが発生しました。もう一度お試しください。");
      toast.error("記事の生成中にエラーが発生しました。");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!generatedArticle) return;

    const markdownContent = `${generatedArticle.title}

${generatedArticle.introduction}

${generatedArticle.sections
  .map(
    (section) => `${section.sectionTitle}
${section.sectionContent}
`
  )
  .join("\n")}

まとめ
${generatedArticle.conclusion}

${generatedArticle.hashtags.join(" ")}
`;

    navigator.clipboard.writeText(markdownContent);
    toast.success("記事をクリップボードにコピーしました。");
  };

  const resetForm = () => {
    setFormData({
      theme: "",
      targetAudience: "",
      toneAndManner: "",
      sectionCount: "4",
    });
    setGeneratedArticle(null);
    setStatusMessage("");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          One-Click AI Note Article Generator
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Control Panel */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col">
            {/* Section 1: Basic Article Settings */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">
                1. 記事の情報を入力
              </h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="theme">記事のテーマ</Label>
                  <Input
                    id="theme"
                    name="theme"
                    placeholder="AIを使ったアイデア発想術"
                    value={formData.theme}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="targetAudience">ターゲット読者</Label>
                  <Input
                    id="targetAudience"
                    name="targetAudience"
                    placeholder="プログラミング初心者の学生"
                    value={formData.targetAudience}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="toneAndManner">トーン＆マナー</Label>
                  <Input
                    id="toneAndManner"
                    name="toneAndManner"
                    placeholder="親しみやすく、専門用語は控えめに"
                    value={formData.toneAndManner}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="sectionCount">おおよそのセクション数</Label>
                  <select
                    id="sectionCount"
                    name="sectionCount"
                    value={formData.sectionCount}
                    onChange={(e) =>
                      handleInputChange(
                        e as unknown as React.ChangeEvent<HTMLInputElement>
                      )
                    }
                    className="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Article Generation Action */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">
                2. AIで記事を自動生成
              </h2>

              <Button
                onClick={generateArticle}
                disabled={isGenerating}
                className="w-full py-6 text-lg font-medium"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    生成中...
                  </>
                ) : (
                  "記事全体をAIで一括生成する"
                )}
              </Button>
            </div>

            {/* Status Display Area */}
            <div className="mt-auto">
              <h3 className="text-sm font-medium mb-2">ステータス表示エリア</h3>
              <div className="bg-white p-3 rounded border border-gray-200 min-h-[60px]">
                {statusMessage}
              </div>
            </div>
          </div>

          {/* Right Column - Article Preview & Output */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="preview" className="flex-1">
                  プレビュー
                </TabsTrigger>
                <TabsTrigger value="markdown" className="flex-1">
                  Markdown
                </TabsTrigger>
              </TabsList>

              <TabsContent value="preview" className="flex-1 overflow-auto">
                {generatedArticle ? (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">
                      {generatedArticle.title}
                    </h2>

                    <div className="whitespace-pre-wrap">
                      {generatedArticle.introduction}
                    </div>

                    {/* <h3 className="text-xl font-semibold mt-6">本文</h3> */}

                    {generatedArticle.sections.map((section, index) => (
                      <div key={index} className="mt-4">
                        {/* <h4 className="text-lg font-medium">
                          {section.sectionTitle}
                        </h4> */}
                        <div className="whitespace-pre-wrap mt-2">
                          {section.sectionContent}
                        </div>
                      </div>
                    ))}

                    {/* <h3 className="text-xl font-semibold mt-6">まとめ</h3> */}
                    <div className="whitespace-pre-wrap">
                      {generatedArticle.conclusion}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {generatedArticle.hashtags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 italic">
                    記事を生成すると、ここにプレビューが表示されます。
                  </div>
                )}
              </TabsContent>

              <TabsContent value="markdown" className="flex-1 overflow-auto">
                {generatedArticle ? (
                  <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm font-mono overflow-auto h-full">
                    {`# ${generatedArticle.title}

${generatedArticle.introduction}

${generatedArticle.sections
  .map(
    (section) => `${section.sectionContent}`
  )
  .join("\n")}

${generatedArticle.conclusion}

${generatedArticle.hashtags.join(" ")}`}
                  </pre>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 italic">
                    記事を生成すると、ここにMarkdownが表示されます。
                  </div>
                )}
              </TabsContent>
            </Tabs>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={copyToClipboard}
                disabled={!generatedArticle}
              >
                <Copy className="mr-2 h-4 w-4" />
                記事全体をクリップボードにコピー (Markdown)
              </Button>

              <Button variant="outline" className="flex-1" onClick={resetForm}>
                <RefreshCw className="mr-2 h-4 w-4" />
                リセット/クリア
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
