import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="outline" className="mb-12">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeftIcon className="w-6 h-6" />
          戻る
        </Link>
      </Button>
      <h1 className="text-3xl text-center font-bold mb-12">
        特定商取引法に基づく表記
      </h1>
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8">
        <div className="prose prose-blue dark:prose-invert max-w-none">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            最終更新日: 2025年6月1日
          </p>
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">販売事業者</h2>
            <p>Engineer BA-Sulto（個人事業主）</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">運営統括責任者</h2>
            <p>千代田浩樹</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">所在地</h2>
            <p className="text-sm text-gray-600 mt-2">
              ※請求があったら遅滞なく開示します
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">連絡先</h2>
            <p>メールアドレス：info@engineer-ba-sulto.com</p>
            <p className="text-sm text-gray-600 mt-2">
              ※電話番号は請求があったら遅滞なく開示します
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">販売価格</h2>
            <p>各商品ページに表示される価格に準じます</p>
            <p className="text-sm text-gray-600 mt-2">
              ※表示価格は全て税込みです
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">商品代金以外の必要料金</h2>
            <p>決済手数料：無料</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">支払方法</h2>
            <p>クレジットカード決済（Stripe）</p>
            <p>対応カード：Visa, Mastercard, American Express, JCB</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">支払時期</h2>
            <p>クレジットカード決済の場合、ご注文時に即時決済されます</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">商品の引渡時期</h2>
            <p>お支払い完了後、即時にサービスが提供されます</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">返品・キャンセルについて</h2>
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">
                お客様都合による返金の場合
              </h3>
              <p>ご購入後14日以内であれば、全額返金に対応いたします</p>
              <p className="text-sm text-gray-600 mt-2">
                ※返金をご希望の場合は、メールにてご連絡ください
              </p>
              <p className="text-sm text-gray-600 mt-2">
                ※返金手続きには3-5営業日程度かかる場合があります
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">
                サービスに不具合があった場合
              </h3>
              <p>
                当社の責任において速やかに不具合を修正、もしくは全額返金いたします
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">特記事項</h2>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>本サービスはデジタルコンテンツの提供です</li>
              <li>
                サービスの性質上、提供開始後の返品には応じかねる場合があります
              </li>
              <li>商品の詳細については、各商品ページをご確認ください</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
