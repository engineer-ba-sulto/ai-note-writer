import { GeneratedArticle } from "@/types/generated-article";
import { RequestBody } from "@/types/request-body";
import {
  GoogleGenAI,
  HarmBlockThreshold,
  HarmCategory,
  Type,
} from "@google/genai";

export const runtime = "edge";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error(
    "FATAL ERROR: 環境変数 'GEMINI_API_KEY' が設定されていません。アプリケーションを起動できません。"
  );
}
const ai = new GoogleGenAI({ apiKey: apiKey });

const model = "gemini-2.0-flash";

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export async function GET() {
  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "こんにちは",
    });
    const result = { message: response.text };

    return Response.json(result);
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!apiKey) {
    return Response.json(
      { error: "サーバー設定エラー: APIキーが利用できません。" },
      { status: 500 }
    );
  }
  try {
    const body = await request.json<RequestBody>();
    const { theme, targetAudience, toneAndManner, numSections = 3 } = body;

    if (!theme || !targetAudience || !toneAndManner) {
      return Response.json(
        {
          error:
            "必要なパラメータ (theme, targetAudience, toneAndManner) が不足しています。",
        },
        { status: 400 }
      );
    }

    console.log(
      `Hono API: Geminiフル記事生成リクエスト: テーマ="${theme}", 読者="${targetAudience}", トーン="${toneAndManner}", セクション数目安=${numSections}`
    );

    // ステップ1: 記事全体の骨子と各セクションのタイトルをAIに考えさせる (Gemini Tool use)
    const outlineTool = {
      name: "generate_article_outline_v2", // ツール名はAPI内でユニークであればOK
      description: `与えられたテーマ、ターゲット読者、トーン＆マナーに基づいて、note記事の骨子（記事タイトル、導入部の主要テーマ、${numSections}個の本文セクションタイトル、まとめの主要テーマ）を提案します。`,
      parameters: {
        type: Type.OBJECT,
        properties: {
          suggestedArticleTitle: {
            type: Type.STRING,
            description: "提案された記事のタイトル。",
          },
          introductionTheme: {
            type: Type.STRING,
            description: "導入部の主要なテーマや方向性。",
          },
          sectionTitles: {
            type: Type.ARRAY,
            description: `本文の${numSections}個のセクションタイトル。`,
            items: { type: Type.STRING },
          },
          conclusionTheme: {
            type: Type.STRING,
            description: "まとめの主要なテーマや読者へのメッセージ。",
          },
        },
        required: [
          "suggestedArticleTitle",
          "introductionTheme",
          "sectionTitles",
          "conclusionTheme",
        ],
      },
    };
    const outlinePromptForToolUse = `提供された情報に基づいて、読者が魅力を感じ、最後まで読み進めたくなるようなnote記事の骨子を考案してください。特に、ターゲット読者とトーン＆マナーを強く意識した提案をお願いします。必ず、指定された '${outlineTool.name}' ツールを使用して、提案された骨子を返してください。\n\n記事のテーマ: ${theme}\nターゲット読者: ${targetAudience}\nトーン＆マナー: ${toneAndManner}\n期待する本文セクション数: ${numSections}`;
    const config = {
      tools: [{ functionDeclarations: [outlineTool] }],
    };
    const outlineResult = await ai.models.generateContent({
      model: model,
      contents: [{ role: "user", parts: [{ text: outlinePromptForToolUse }] }],
      config: config,
    });

    const outlineFunctionCall = outlineResult.functionCalls?.[0];

    let parsedOutline: Record<string, unknown>; // any型は避けるべきだが、Toolの引数型を厳密に定義するのが望ましい
    if (
      outlineFunctionCall &&
      outlineFunctionCall.name === outlineTool.name &&
      outlineFunctionCall.args
    ) {
      parsedOutline = outlineFunctionCall.args;
    } else {
      console.warn(
        "Geminiから期待する骨子生成のFunction Callが得られませんでした。テキスト応答を試みます。レスポンス:",
        outlineResult.text
      );
      const textResponse = outlineResult.text;
      if (textResponse) {
        try {
          const cleanedJsonString = textResponse
            .replace(/```json\n?/, "")
            .replace(/```$/, "")
            .trim();
          const fallbackParsed = JSON.parse(cleanedJsonString);
          if (
            fallbackParsed.suggestedArticleTitle &&
            fallbackParsed.introductionTheme &&
            fallbackParsed.sectionTitles &&
            Array.isArray(fallbackParsed.sectionTitles) &&
            fallbackParsed.conclusionTheme
          ) {
            parsedOutline = fallbackParsed;
            console.warn(
              "Function Callは失敗しましたが、テキスト応答からのJSONパースに成功しました。"
            );
          } else {
            throw new Error("テキスト応答からのJSONパース結果も不正です。");
          }
        } catch (parseError: unknown) {
          const error = parseError as Error;
          console.error(
            "テキスト応答からのJSONパースにも失敗しました。",
            error.message
          );
          throw new Error(
            "記事骨子の生成でGeminiから期待するFunction Callも有効なテキストJSONも得られませんでした。"
          );
        }
      } else {
        throw new Error(
          "記事骨子の生成でGeminiから期待するFunction Callもテキスト応答も得られませんでした。"
        );
      }
    }

    // parsedOutline のバリデーション
    if (
      !parsedOutline ||
      !parsedOutline.suggestedArticleTitle ||
      !parsedOutline.introductionTheme ||
      !parsedOutline.sectionTitles ||
      !Array.isArray(parsedOutline.sectionTitles) ||
      parsedOutline.sectionTitles.length === 0 ||
      !parsedOutline.conclusionTheme
    ) {
      console.error("AIが返した骨子のデータ構造が不正です:", parsedOutline);
      throw new Error(
        "AIが返した骨子のデータ構造が不正です。必要なフィールドが不足しているか、形式が間違っています。"
      );
    }
    if (parsedOutline.sectionTitles.length !== numSections) {
      console.warn(
        `AIが提案したセクション数 (${parsedOutline.sectionTitles.length}) が期待 (${numSections}) と異なります。AIの提案を優先します。`
      );
    }

    const articleTitle = parsedOutline.suggestedArticleTitle;
    const introductionTheme = parsedOutline.introductionTheme;
    const sectionTitles = parsedOutline.sectionTitles;
    const conclusionTheme = parsedOutline.conclusionTheme;

    const generatedArticle: GeneratedArticle = {
      title: articleTitle as string,
      introduction: "",
      sections: [],
      conclusion: "",
      hashtags: [],
    };

    const commonSystemInstructionForParts = `あなたはプロのnoteライターです。与えられた指示に従い、読者にとって魅力的で分かりやすい文章を作成してください。ターゲット読者: 「${targetAudience}」、全体のトーン＆マナー: 「${toneAndManner}」を常に意識してください。`;

    // ステップ2: 導入部を生成
    const introPrompt = `以下の情報に基づいて、読者が記事を読み進めたくなるような魅力的な導入文を作成してください。\n記事タイトル: ${articleTitle}\nこの記事全体の主要テーマ: ${theme}\n導入部で焦点を当てるべき内容・方向性: ${introductionTheme}\n期待する文字数: 300～400字程度\n\n導入文:`;
    generatedArticle.introduction =
      (
        await ai.models.generateContent({
          model: model,
          contents: [{ role: "user", parts: [{ text: introPrompt }] }],
          config: {
            safetySettings: safetySettings,
          },
        })
      ).text || "導入部の生成に失敗しました。";

    // ステップ3: 各本文セクションを生成
    for (const currentSectionTitle of sectionTitles) {
      const sectionPrompt = `以下の情報に基づいて、note記事の本文セクションを作成してください。\nこのセクションのタイトル: ${currentSectionTitle}\n記事全体の主要テーマ: ${theme}\n記事全体のタイトル: ${articleTitle}\nこのセクションで読者に伝えるべき主要な情報やアイデアを具体的に記述してください。\n期待する文字数: 各セクション600～1000字程度\n\n本文:`;
      const sectionBody =
        (
          await ai.models.generateContent({
            model: model,
            contents: [{ role: "user", parts: [{ text: sectionPrompt }] }],
            config: {
              safetySettings: safetySettings,
            },
          })
        ).text ||
        `セクション「${currentSectionTitle}」の本文生成に失敗しました。`;
      generatedArticle.sections.push({
        sectionTitle: currentSectionTitle,
        sectionBody,
      });
    }

    // ステップ4: まとめを生成
    let contextForConclusion = `記事タイトル: ${articleTitle}\n導入部テーマ: ${introductionTheme}\n`;
    contextForConclusion += sectionTitles
      .map(
        (st, i) =>
          `本文セクション${i + 1}「${st}」では、関連する内容を解説しました。`
      )
      .join("\n");
    const conclusionPrompt = `以下の情報と、これまでの記事の流れを踏まえて、読者に記事全体の重要なポイントを再確認させ、行動を促すような力強いまとめを作成してください。\n${contextForConclusion}\nまとめ部分で焦点を当てるべき内容・方向性: ${conclusionTheme}\n記事全体の主要テーマ: ${theme}\n期待する文字数: 300字程度\n\nまとめ:`;
    generatedArticle.conclusion =
      (
        await ai.models.generateContent({
          model: model,
          contents: [
            {
              role: "user",
              parts: [
                { text: conclusionPrompt + commonSystemInstructionForParts },
              ],
            },
          ],
          config: {
            safetySettings: safetySettings,
          },
        })
      ).text || "まとめの生成に失敗しました。";

    // ステップ5: ハッシュタグを提案
    const fullArticleTextForHashtags = [
      articleTitle,
      generatedArticle.introduction,
      ...generatedArticle.sections.map(
        (s) => `${s.sectionTitle}\n${s.sectionBody}`
      ),
      generatedArticle.conclusion,
    ].join("\n\n");
    const hashtagSystemInstruction = `あなたはnoteのSEOとトレンドに詳しい専門家です。記事内容に基づいて最適なハッシュタグを提案してください。`;
    const hashtagPrompt = `以下の記事内容に基づいて、noteで読者に発見されやすく、記事のテーマ性を的確に表すハッシュタグを5つ提案してください。各ハッシュタグは「#」から始めて、スペースやカンマ区切りでリストアップしてください。\n\n記事内容の要約 (記事が長すぎる場合は、AIが要点を把握していると仮定して省略可):\n---\n${fullArticleTextForHashtags.substring(
      0,
      4000
    )}\n---\n\n提案ハッシュタグ:`;
    const hashtagText = await ai.models.generateContent({
      model: model,
      contents: [
        {
          role: "user",
          parts: [{ text: hashtagPrompt + hashtagSystemInstruction }],
        },
      ],
      config: {
        safetySettings: safetySettings,
      },
    });
    if (hashtagText) {
      generatedArticle.hashtags =
        hashtagText
          .text!.match(/#\S+/g)
          ?.map((tag) => tag.trim())
          .filter((tag) => tag.length > 1) || [];
    } else {
      generatedArticle.hashtags = [];
      console.warn("ハッシュタグの生成に失敗しました。");
    }

    return Response.json(generatedArticle);
  } catch (error: unknown) {
    const apiError = error as Error;
    console.error("Hono APIルートでの致命的エラー:", apiError);

    // エラーレスポンスを返す前にcontextを確実に終了
    return Response.json({
      error:
        apiError.message || "記事生成中に予期せぬ致命的エラーが発生しました。",
    });
  }
}
