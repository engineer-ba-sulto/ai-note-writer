import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function GenerateButton({
  onClick,
  isGenerating,
}: {
  onClick: () => void;
  isGenerating: boolean;
}) {
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(clickCount + 1);
    onClick();
  };
  return (
    <>
      <Button
        onClick={handleClick}
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
