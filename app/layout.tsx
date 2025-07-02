import GoogleAdsense from "@/components/google-adsense";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "1分記事作成AI",
  description: "記事を生成するアプリです",
  keywords: [
    "note",
    "記事",
    "記事作成",
    "1分",
    "AI",
    "生成",
    "自動化",
    "クリエイティブ",
    "プロ品質",
    "高クオリティ",
    "時間節約",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
        <Toaster />
      </body>
      <GoogleAdsense pId={process.env.PID!} />
      <GoogleAnalytics gaId={process.env.GA_ID!} />
    </html>
  );
}
