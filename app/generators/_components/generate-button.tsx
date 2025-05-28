import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function GenerateButton({
  isGenerating,
  clickCount,
  onGenerateClick,
}: {
  isGenerating: boolean;
  clickCount: number;
  onGenerateClick: () => Promise<void>;
}) {
  return (
    <>
      <Button
        onClick={onGenerateClick}
        disabled={isGenerating || clickCount >= 5}
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
      <p className="text-end text-gray-500 dark:text-gray-400">
        生成回数: {clickCount}/5
      </p>
    </>
  );
}
