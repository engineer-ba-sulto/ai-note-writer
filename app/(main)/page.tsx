import type { NextPage } from "next";
import Head from "next/head";
import { FaTwitter, FaYoutube } from "react-icons/fa";

export const runtime = "edge";

const ComingSoonPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>準備中 | 新しいAIブログアシスタント</title>
        <meta
          name="description"
          content="新しいAIブログアシスタントがまもなく登場します。最新情報は公式SNSで。"
        />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 font-sans">
        <div className="text-center p-8 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-2">
            ただいま、新しいサービス公開に向けて準備中です。
          </p>

          <p className="text-xl md:text-2xl font-semibold text-blue-600 mb-8">
            まったく新しいAIブログアシスタントが、
            <br />
            まもなく登場します。
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <p className="text-md text-gray-700 mb-4">
              最新情報は、開発者の公式SNSで発信しています。
              <br />
              ぜひフォローしてお待ちください。
            </p>

            <div className="flex justify-center space-x-6">
              {/* YouTubeへのリンク */}
              <a
                href="https://www.youtube.com/" // あなたのYouTubeチャンネルURLに書き換えてください
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-600 transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={40} />
              </a>

              {/* X (Twitter)へのリンク */}
              <a
                href="https://x.com/" // あなたのXアカウントURLに書き換えてください
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <FaTwitter size={40} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ComingSoonPage;
