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
              <span className="text-blue-600 font-semibold">1分記事作成AI</span>
              で創作の新時代を体験しよう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <SigninButton>無料で始める</SigninButton>
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
              なぜ1分記事作成AIが選ばれるのか
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

      {/* Price Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              シンプルで分かりやすい料金プラン
            </h2>
            <p className="text-xl text-gray-600">
              あなたのニーズに合わせて選べる3つのプラン
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="relative border-2 border-gray-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  フリー
                </h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  ¥0<span className="text-lg text-gray-600">/月</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    月5記事まで生成
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    3セクション構成
                  </li>
                </ul>
                <SigninButton className="w-full">無料で始める</SigninButton>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative border-2 border-blue-500 shadow-xl transform scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  おすすめ
                </span>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">プロ</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  <div>
                    <span>¥490</span>
                    <span className="text-lg text-gray-600">/月(先着100名)
										</span>
                  </div>
                  <span className="line-through">¥980</span>
                  <span className="text-lg text-gray-600">/月</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    月50記事まで生成
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    3〜5セクション構成
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-xl text-white px-10 py-6">
                  プロプランを選ぶ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              よくある質問
            </h2>
            <p className="text-xl text-gray-600">
              お客様からよく寄せられる質問にお答えします
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q. 生成された記事の品質はどの程度ですか？
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  最新のAI技術を使用して、プロのライターが書いたような高品質な記事を生成します。ターゲット読者に合わせた文体やトーンで、読みやすく魅力的な内容を提供します。
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q. 生成した記事は商用利用できますか？
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  はい、生成された記事は完全にあなたのものとなり、商用利用も可能です。noteでの投稿、ブログ記事、マーケティング資料など、自由にご活用いただけます。
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q. 無料プランから有料プランへの変更はいつでもできますか？
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  はい、いつでもプランの変更が可能です。アップグレードは即座に反映され、ダウングレードは次回請求サイクルから適用されます。
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q. 記事の内容が気に入らない場合、再生成できますか？
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  はい、何度でも再生成が可能です。テーマやターゲット設定を調整して、理想的な記事が完成するまでお試しいただけます。
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q. サポートはどのように受けられますか？
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  メールサポートを提供しており、プロプラン以上では優先サポートをご利用いただけます。ビジネスプランでは専用サポートチームが対応いたします。
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q. 解約はいつでもできますか？
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  はい、いつでも解約可能です。解約手続きは管理画面から簡単に行え、解約後も現在の請求期間終了まではサービスをご利用いただけます。
                </p>
              </CardContent>
            </Card>
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
            <SigninButton>無料で始める</SigninButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">1分記事作成AI</h3>
          <p className="text-gray-400">
            AIの力で、あなたの創作活動をサポートします
          </p>
        </div>
      </footer>
    </div>
  );
}
