import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <>
      <h1 className="text-2xl text-center font-bold">利用規約</h1>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              最終更新日: 2025年5月7日
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">1. はじめに</h2>
              <p>
                この利用規約（以下「本規約」）は、当サイトが提供するすべてのサービス（以下「本サービス」）の利用条件を定めるものです。ユーザーの皆様には、本規約に同意いただいた上で、本サービスをご利用いただきます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">2. 定義</h2>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>
                  「ユーザー」とは、本サービスを利用するすべての方を指します。
                </li>
                <li>
                  「コンテンツ」とは、文章、画像、動画、プログラムその他の情報を指します。
                </li>
                <li>
                  「投稿データ」とは、ユーザーが本サービスに投稿、送信するコンテンツを指します。
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">3. 規約の変更</h2>
              <p>
                当サイトは、必要に応じて本規約を変更することができるものとします。変更後の利用規約は、当サイトが別途定める場合を除いて、当サイト上に表示した時点より効力を生じるものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">4. 禁止事項</h2>
              <p>
                ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません：
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>
                  当サイトのサーバーまたはネットワークの機能を破壊、妨害する行為
                </li>
                <li>当サイトのサービスの運営を妨害する行為</li>
                <li>他のユーザーに迷惑をかける行為</li>
                <li>他のユーザーの情報を収集する行為</li>
                <li>反社会的勢力に関与する行為</li>
                <li>当サイトの信用を毀損する行為</li>
                <li>その他、当サイトが不適切と判断する行為</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">5. 知的財産権</h2>
              <p>
                当サイトに掲載されているコンテンツの著作権、商標権、その他の知的財産権は、当サイトまたは正当な権利者に帰属します。ユーザーは、法令で認められた範囲を超えて、これらの知的財産を使用することはできません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">6. 免責事項</h2>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>
                  当サイトは、本サービスの内容の正確性、完全性、有用性を保証するものではありません。
                </li>
                <li>
                  当サイトは、本サービスの中断、停止、終了、利用不能または変更によって生じたいかなる損害についても、一切の責任を負いません。
                </li>
                <li>
                  当サイトは、ユーザー間またはユーザーと第三者との間で生じた紛争等について、一切の責任を負いません。
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">
                7. サービスの変更・停止
              </h2>
              <p>
                当サイトは、以下の場合には、事前の通知なく本サービスの全部または一部の提供を停止または中断することができるものとします：
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>システムの保守点検または更新を行う場合</li>
                <li>
                  地震、落雷、火災、停電、天災などの不可抗力により、本サービスの提供が困難となった場合
                </li>
                <li>コンピューターまたは通信回線等が事故により停止した場合</li>
                <li>その他、当サイトが本サービスの提供が困難と判断した場合</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">8. 準拠法・管轄裁判所</h2>
              <p>
                本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当サイトの本店所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">9. お問い合わせ</h2>
              <p>
                本規約に関するお問い合わせは、
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  お問い合わせフォーム
                </Link>
                よりお願いいたします。
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
