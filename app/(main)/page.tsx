import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SigninButton from "./_components/signin-button";

export const runtime = "edge";

export default function TopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
              AIが記事を自動生成
              <br />
              <span className="text-4xl md:text-6xl">あなたの想いを文章に</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              テーマとターゲットを入力するだけで、プロ品質の記事が瞬時に完成。
              <br />
              <span className="text-blue-600 font-semibold">
                AI Article Generator
              </span>
              で創作の新時代を体験しよう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <SigninButton>記事を作成する</SigninButton>
              <Button
                variant="outline"
                className="text-gray-600 border-gray-300 hover:bg-gray-50 text-xl px-10 py-6 transform hover:scale-105 transition-all duration-200"
              >
                機能を詳しく見る
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              3つのステップで完璧な記事が完成
            </h2>
            <p className="text-xl text-gray-600">
              複雑な設定は一切不要。直感的な操作で誰でも簡単に使えます。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  テーマを入力
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  記事のテーマ、ターゲット読者、トーン&マナーを入力。
                  あなたの想いを具体的に伝えてください。
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-blue-100 to-blue-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  構成を選択
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  3、4、5セクションから記事の構成を選択。
                  内容に応じて最適な構成を選べます。
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-blue-200 to-blue-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  記事完成
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  AIが生成した記事をワンクリックでコピー。
                  すぐにnoteに投稿して読者と繋がりましょう。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              なぜAI Article Generatorが選ばれるのか
            </h2>
            <p className="text-xl text-blue-100">
              時間を節約し、クオリティの高い記事を継続的に投稿できます
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">高速生成</h3>
              <p className="text-blue-100">1分で記事が完成</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                ターゲット対応
              </h3>
              <p className="text-blue-100">読者に響く文章</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">高品質</h3>
              <p className="text-blue-100">プロレベルの仕上がり</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">簡単コピー</h3>
              <p className="text-blue-100">ワンクリックで完了</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            今すぐ始めて、記事執筆を革新しよう
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            アカウント作成は無料。すぐに高品質な記事作成を体験できます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SigninButton>記事を作成する</SigninButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">AI Article Generator</h3>
          <p className="text-gray-400">
            AIの力で、あなたの創作活動をサポートします
          </p>
        </div>
      </footer>
    </div>
  );
}
