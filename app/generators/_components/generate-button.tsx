import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function GenerateButton({
  isGenerating,
  articleGenerationsRemaining,
  userPlan,
  onGenerateClick,
}: {
  isGenerating: boolean;
  articleGenerationsRemaining: number;
  userPlan: string;
  onGenerateClick: () => Promise<void>;
}) {
  const maxGenerations = userPlan === "paid" ? 50 : 5;

  return (
    <>
      <Button
        onClick={onGenerateClick}
        disabled={isGenerating || articleGenerationsRemaining <= 0}
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
        生成回数：残{articleGenerationsRemaining}/{maxGenerations}回
      </p>
    </>
  );
}
