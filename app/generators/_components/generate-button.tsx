import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function GenerateButton({
  onClick,
  isGenerating,
}: {
  onClick: () => void;
  isGenerating: boolean;
}) {
  return (
    <Button
      onClick={onClick}
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
  );
}
