# ドメイン代だけでWebアプリを公開

## 技術スタック

| カテゴリ                  | 技術要素             | 説明                                                                       |
| :------------------------ | :------------------- | :------------------------------------------------------------------------- |
| ランタイム                | Bun                  | JavaScript/TypeScriptランタイム・パッケージマネージャー・バンドラーなど。 |
| 言語                      | TypeScript           | 静的型付けを可能にするJavaScriptのスーパーセット。                       |
| フレームワーク            | Next.js v15          | React フレームワーク。サーバーサイドレンダリングや静的サイト生成。         |
| UI ライブラリ             | React v19            | UI構築のためのJavaScriptライブラリ。                                    |
| UI/CSS                    | Tailwind CSS v4      | ユーティリティファーストのCSSフレームワーク。                            |
|                           | shadcn/ui            | UIコンポーネントライブラリ。                                              |
| バックエンド/デプロイ環境 | Cloudflare Pages     | サーバーレス実行環境。                                                     |
| データベース関連          | Cloudflare D1        | Cloudflareが提供するサーバーレスのSQLite互換データベース。              |
|                           | Drizzle ORM          | TypeScript/JavaScript向けのORM。CloudflareD1と組み合わせて使用。       |
| 認証                      | NextAuth.js v5       | 認証ライブラリ。Drizzleアダプターを使用。                                 |
| 決済                      | Stripe               | 決済処理サービス。                                                         |
| AI                        | Google Generative AI | Googleの Generative AIモデルを利用するためのライブラリ。                 |
| その他                    | Lucide React         | アイコンライブラリ。                                                       |

## メモ

- honoを導入したが、Stripeの実装がうまくいかず、Next.jsのルートハンドラーを使った
- honoを削除してしまったが、記事作成のAPIでは使えたので、そのまま採用すればよかった
- フロントエンドはv0を使って作成
- 記事作成APIはGoogle AI Studioを使って作成

## 課題

- 記事作成APIのコードが冗長なので、Cloudflare Workflowsを使ってリファクタリングしたい（再利用可能なコードにしたい）
- 記事作成APIのプロンプトのアップデート
