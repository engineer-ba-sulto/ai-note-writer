import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { faqText } from "@/contants/faq-text";
import CTAButton from "./_components/cta-button";
import PaymentButton from "./_components/payment-button";

export const runtime = "edge";

export default async function TopPage({
  searchParams,
}: {
  searchParams: Promise<{ canceled: boolean }>;
}) {
  const { canceled } = await searchParams;
  if (canceled) {
    console.log(
      "Order canceled -- continue to shop around and checkout when you’re ready."
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="hidden text-5xl md:text-7xl leading-22 font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
              ブログやnoteの記事が書けない… <br />
              そのお悩み、
              <br />
              AIと一緒に解決しませんか？
            </h1>
            {/* <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              まずは動画で、開発の想いとツールの全貌をご覧ください。
            </p> */}

            {/* YouTube動画埋め込み（主役） */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl mx-auto mb-8">
              <iframe
                src="https://www.youtube.com/embed/OBN1lmiM0ic"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <CTAButton>はい、無料で始めます！</CTAButton>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto leading-relaxed">
              <span className="text-black font-semibold">
                面倒なプロンプトを入力することなく、1日仕事の記事作成が1分で終わります
              </span>
              <br />
              <span className="text-blue-600 font-semibold">1分記事作成AI</span>
              で創作の新時代を体験しよう！！
            </p>
          </div>
        </div>
      </section>

      {/* 2. 共感セクション */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ブログを始めたものの、こんなことで悩んでいませんか？
            </h2>
          </div>
          <div className="max-w-2xl mx-auto bg-blue-50 p-8 rounded-lg shadow-xl border border-blue-200">
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-center">
                <span className="text-blue-600 mr-3 text-2xl">✓</span>
                文章を書こうとすると、頭が真っ白になる
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3 text-2xl">✓</span>
                家事や仕事が忙しくて、ブログに割く時間がない
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3 text-2xl">✓</span>
                とにかく、ブログ更新の「面倒くささ」から解放されたい！
              </li>
            </ul>
            <p className="text-center text-xl font-semibold text-gray-800 mt-8">
              一つでも当てはまったなら、
              <br />
              このツールはきっとあなたのお役に立てます。
            </p>
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
                  3、4、5セクションから記事の構成を選択（プロプランのみ）。
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
                  すぐに投稿して読者と繋がりましょう。
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
      <section className="py-20 bg-gray-50" id="price">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              シンプルで分かりやすい料金プラン
            </h2>
            <p className="text-xl text-gray-600">
              あなたのニーズに合わせて選べる2つのプラン
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative border-2 border-gray-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  フリープラン
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
                <CTAButton className="w-full">はい、無料で始めます！</CTAButton>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-blue-500 shadow-xl transform scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  おすすめ
                </span>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  プロプラン
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  <div>
                    <span>¥490</span>
                    <span className="text-lg text-gray-600">
                      /月(先着100名)
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
                <PaymentButton />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              よくある質問
            </h2>
            <p className="text-xl text-gray-600">
              お客様からよく寄せられる質問にお答えします
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqText.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-xl font-bold text-gray-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
            <CTAButton>はい、無料で始めます！</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
