import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 flex items-center justify-around gap-4">
      <div className="px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold mb-4">1分記事作成AI</h3>
        <p className="text-gray-400">
          AIの力で、あなたの創作活動をサポートします
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/term-of-service" className="text-gray-400">
          利用規約
        </Link>
        <Link href="/privacy-policy" className="text-gray-400">
          プライバシーポリシー
        </Link>
      </div>
    </footer>
  );
}
