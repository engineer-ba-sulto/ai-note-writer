import GoogleAdsense from "@/components/google-adsense";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./_components/header";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "AI Article Generator",
  description: "記事を生成するアプリです",
  keywords: [
    "note",
    "記事",
    "生成",
    "AI",
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
        <Header />
        {children}
        <Toaster />
      </body>
      <GoogleAdsense pId={process.env.PID!} />
    </html>
  );
}
