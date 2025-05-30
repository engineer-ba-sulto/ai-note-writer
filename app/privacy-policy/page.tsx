import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="outline" className="mb-12">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeftIcon className="w-6 h-6" />
          戻る
        </Link>
      </Button>
      <h1 className="text-3xl text-center font-bold mb-12">
        プライバシーポリシー
      </h1>
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 p-8">
        <div className="prose prose-blue dark:prose-invert max-w-none">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            最終更新日: 2025年6月1日
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. はじめに</h2>
            <p>
              本ウェブサイト（以下「当サイト」）は、個人情報の重要性を認識し、個人情報の保護に関する法律を遵守するとともに、以下のプライバシーポリシーに従って個人情報を適切に取り扱います。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. 収集する情報</h2>
            <p>当サイトでは、以下の情報を収集することがあります：</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>
                お問い合わせフォームから提供される情報（お名前、メールアドレス、お問い合わせ内容など）
              </li>
              <li>
                アクセス解析ツールによって自動的に収集される情報（IPアドレス、ブラウザの種類、参照元ページ、閲覧したページ、訪問日時など）
              </li>
              <li>Cookieやローカルストレージを通じて収集される情報</li>
              <li>広告配信事業者を通じて収集される情報</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. 情報の利用目的</h2>
            <p>収集した情報は、以下の目的で利用します：</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>お問い合わせへの回答</li>
              <li>サービスの提供と改善</li>
              <li>ウェブサイトの利用状況の分析</li>
              <li>広告の配信および効果測定</li>
              <li>セキュリティの確保</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. 個人情報の第三者提供</h2>
            <p>
              当サイトでは、以下の場合を除き、収集した個人情報を第三者に提供することはありません：
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>
                公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合
              </li>
              <li>
                国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
              </li>
              <li>ご本人の同意がある場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Cookieの使用</h2>
            <p>
              当サイトでは、ユーザー体験の向上やウェブサイトの利用状況の分析のためにCookieを使用しています。Cookieは、ブラウザの設定から無効にすることができます。ただし、Cookieを無効にすると、当サイトの一部の機能が正常に動作しなくなる可能性があります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. アクセス解析ツール</h2>
            <p>
              当サイトでは、Googleが提供するアクセス解析ツール「Googleアナリティクス」を使用しています。Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p className="mt-2">
              Googleアナリティクスの詳細については、
              <a
                href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Googleアナリティクス利用規約
              </a>
              および
              <a
                href="https://policies.google.com/privacy?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Googleプライバシーポリシー
              </a>
              をご確認ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. Google AdSenseの利用</h2>
            <p>
              当サイトでは、第三者配信の広告サービス「Google
              AdSense」を利用しています。Google
              AdSenseは、Cookieを使用して、当サイトへの過去のアクセス情報に基づいて広告を配信します。
            </p>
            <p className="mt-2">
              Google
              AdSenseによるCookieの使用により、当サイトやその他のサイトへのアクセス情報に基づいた広告が表示されることがあります。この情報には個人を特定する情報は含まれません。
            </p>
            <p className="mt-2">
              Google AdSenseの詳細やCookieを無効にする方法については、
              <a
                href="https://policies.google.com/technologies/ads?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Googleの広告とプライバシー
              </a>
              をご確認ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              8. アフィリエイトプログラムの利用
            </h2>
            <p>
              当サイトでは、以下のアフィリエイト・サービス・プロバイダ（ASP）を通じて商品やサービスの紹介を行っています：
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Amazonアソシエイト</li>
              <li>楽天アフィリエイト</li>
              <li>A8.net</li>
              <li>もしもアフィリエイト</li>
              <li>バリューコマース</li>
            </ul>
            <p className="mt-2">
              これらのアフィリエイトプログラムでは、当サイトからリンクされた商品が購入された場合、当サイトに報酬が支払われることがあります。アフィリエイトリンクには、ユーザーを追跡するためのCookieが使用されることがありますが、これらのCookieによってユーザーの個人情報が当サイト運営者に提供されることはありません。
            </p>
            <p className="mt-2">
              各アフィリエイトプログラムのプライバシーポリシーについては、各サービスのウェブサイトをご確認ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              9. 行動ターゲティング広告
            </h2>
            <p>
              当サイトでは、ユーザーの興味関心に基づいた広告を表示するために、行動ターゲティング広告を利用することがあります。行動ターゲティング広告では、ユーザーのウェブサイト閲覧履歴などに基づいて、ユーザーの興味関心に合わせた広告が表示されます。
            </p>
            <p className="mt-2">
              行動ターゲティング広告のオプトアウト（無効化）をご希望の場合は、
              <a
                href="https://optout.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Digital Advertising Alliance（DAA）のオプトアウトページ
              </a>
              または
              <a
                href="https://www.networkadvertising.org/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Network Advertising Initiative（NAI）のオプトアウトページ
              </a>
              をご利用ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">10. 個人情報の安全管理</h2>
            <p>
              当サイトでは、収集した個人情報の漏えい、滅失、き損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              11. 個人情報の開示・訂正・削除
            </h2>
            <p>
              ご本人からの個人情報の開示、訂正、削除、利用停止のご要望があった場合には、ご本人であることを確認の上、速やかに対応いたします。お問い合わせフォームよりご連絡ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              12. プライバシーポリシーの変更
            </h2>
            <p>
              当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合には、当ページにて公表します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">13. お問い合わせ</h2>
            <p>
              本プライバシーポリシーに関するお問い合わせは、
              <Link
                href="mailto:info@engineer-ba-sulto.com"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                info@engineer-ba-sulto.com
              </Link>
              よりお願いいたします。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
