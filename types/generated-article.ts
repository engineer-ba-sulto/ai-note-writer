import { ArticleSection } from "./article-section";

export type GeneratedArticle = {
  title: string;
  introduction: string;
  sections: ArticleSection[];
  conclusion: string;
  hashtags: string[];
};
