# AI Note Article Generator

Noto記事を生成するアプリです

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

