# 1分記事作成AI（旧AI Note Article Generator）

- 覚えてもらいやすい名前に変更
- Noto記事を生成するアプリです

## ドメイン

1-minute-article-ai.com

## 技術スタック

- Bun（パッケージマネージャー/ランタイム）
- TypeScript（言語）
- Next.js (v15.3.2)（フレームワーク）
- React (v19.0.0)（UIライブラリ）
- TailwindCSS (v4.0.0)（スタイリング）
- shadcn/ui（UIコンポーネント）
- React Icons（アイコン）
- NextAuth.js (v5.0.0-beta.28)（認証システム）
- Drizzle ORM（データベース操作） 
- Google AI SDK（`@google/genai`）（AI機能）
- Cloudflare Pages（デプロイプラットフォーム）
- Cloudflare D1（データベース）

## 環境変数

### Google AI API

`GEMINI_API_KEY=`

### NextAuth

- `AUTH_SECRET=`
  - `npx auth secret` を実行して、発行する

### GitHub

- `AUTH_GITHUB_ID=`
- `AUTH_GITHUB_SECRET=`

### Google

- `AUTH_GOOGLE_ID=`
- `AUTH_GOOGLE_SECRET=`

### Stripe

- `STRIPE_SECRET_KEY=`
- `STRIPE_WEBHOOK_SECRET=`
  - `stripe listen` を実行して、取得する
- `STRIPE_PAID_PLAN_PRICE_ID=`

## デプロイ環境

### テスト

- developブランチでデプロイ
- URL：https://develop.ai-note-writer.pages.dev/

### 本番

- mainブランチでデプロイ
- URL：https://ai-note-writer.pages.dev/

## データベース

### データベース名

- ai-note-writer-db

### テーブル一覧

#### NextAuth関連

- account
- authenticator
- session
- user
- verificationToken

## ユーザー管理

