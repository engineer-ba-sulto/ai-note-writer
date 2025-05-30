# Stripe Webhook イベント一覧 (カテゴリ別)

## アカウント関連

| イベントタイプ                     | 解説                                                                                 |
| :--------------------------------- | :----------------------------------------------------------------------------------- |
| `account.application.authorized`   | Connect アプリケーションがアカウントに認可されたとき。                               |
| `account.application.deauthorized` | Connect アプリケーションがアカウントから認可解除されたとき。                         |
| `account.external_account.created` | 銀行口座やデビットカードなどの外部アカウントがアカウントに追加されたとき。           |
| `account.external_account.deleted` | 外部アカウントがアカウントから削除されたとき。                                       |
| `account.external_account.updated` | 外部アカウントの情報が更新されたとき。                                               |
| `account.updated`                  | アカウント情報（ビジネス情報、設定など）が更新されたとき。                           |
| `capability.updated`               | アカウントの機能（例: カード支払い、Bacs Direct Debit など）の状態が更新されたとき。 |
| `person.created`                   | アカウントに関連付けられた人物（所有者、役員など）が作成されたとき。                 |
| `person.deleted`                   | アカウントに関連付けられた人物が削除されたとき。                                     |
| `person.updated`                   | アカウントに関連付けられた人物の情報が更新されたとき。                               |

---

## アプリケーションフィー関連 (Connect)

| イベントタイプ                   | 解説                                               |
| :------------------------------- | :------------------------------------------------- |
| `application_fee.created`        | アプリケーションフィーが作成されたとき。           |
| `application_fee.refund.updated` | アプリケーションフィーの返金情報が更新されたとき。 |
| `application_fee.refunded`       | アプリケーションフィーが返金されたとき。           |

---

## 残高関連

| イベントタイプ                 | 解説                                         |
| :----------------------------- | :------------------------------------------- |
| `balance.available`            | 新しい資金が残高で使用可能になったとき。     |
| `cash_balance.funds_available` | キャッシュ残高で資金が利用可能になったとき。 |

---

## 請求および課金関連

| イベントタイプ                                 | 解説                                                                                                       |
| :--------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `billing_portal.configuration.created`         | 顧客ポータルの設定が作成されたとき。                                                                       |
| `billing_portal.configuration.updated`         | 顧客ポータルの設定が更新されたとき。                                                                       |
| `billing_portal.session.created`               | 顧客ポータルのセッションが作成されたとき。                                                                 |
| `billing.alert.triggered`                      | 課金に関するアラートがトリガーされたとき。                                                                 |
| `billing.credit_balance_transaction.created`   | クレジット残高のトランザクション（調整など）が作成されたとき。                                             |
| `billing.credit_grant.created`                 | 顧客にクレジットが付与されたとき。                                                                         |
| `billing.credit_grant.updated`                 | 顧客に付与されたクレジットが更新されたとき。                                                               |
| `billing.meter.created`                        | メーターが作成されたとき。                                                                                 |
| `billing.meter.deactivated`                    | メーターが停止されたとき。                                                                                 |
| `billing.meter.reactivated`                    | メーターが再開されたとき。                                                                                 |
| `billing.meter.updated`                        | メーターが更新されたとき。                                                                                 |
| `charge.captured`                              | オーソリされた支払いが確定（キャプチャ）されたとき。                                                       |
| `charge.dispute.closed`                        | 支払いに関するチャージバック（不審請求の申請）がクローズされたとき。                                       |
| `charge.dispute.created`                       | 支払いに関するチャージバックが作成されたとき。                                                             |
| `charge.dispute.funds_reinstated`              | チャージバックに関連して差し引かれた資金がアカウントに戻されたとき。                                       |
| `charge.dispute.funds_withdrawn`               | チャージバックに関連して資金がアカウントから引き落とされたとき。                                           |
| `charge.dispute.updated`                       | チャージバックの情報が更新されたとき。                                                                     |
| `charge.expired`                               | オーソリされた支払いが期限切れになったとき。                                                               |
| `charge.failed`                                | 支払いが失敗したとき。                                                                                     |
| `charge.pending`                               | 支払いが保留中のとき。                                                                                     |
| `charge.refund.updated`                        | 支払いの返金情報が更新されたとき。                                                                         |
| `charge.refunded`                              | 支払いが返金されたとき。                                                                                   |
| `charge.succeeded`                             | 支払いが成功したとき。                                                                                     |
| `charge.updated`                               | 支払い情報が更新されたとき。                                                                               |
| `checkout.session.async_payment_failed`        | Checkout セッションでの非同期支払いが失敗したとき。                                                        |
| `checkout.session.async_payment_succeeded`     | Checkout セッションでの非同期支払いが成功したとき。                                                        |
| `checkout.session.completed`                   | 顧客が Checkout セッションを完了し、支払いが成功したとき。                                                 |
| `checkout.session.expired`                     | Checkout セッションが期限切れになったとき。                                                                |
| `credit_note.created`                          | クレジットノートが作成されたとき。                                                                         |
| `credit_note.updated`                          | クレジットノートが更新されたとき。                                                                         |
| `credit_note.voided`                           | クレジットノートが無効にされたとき。                                                                       |
| `customer_cash_balance_transaction.created`    | 顧客のキャッシュ残高のトランザクションが作成されたとき。                                                   |
| `customer.created`                             | 新しい顧客が作成されたとき。                                                                               |
| `customer.deleted`                             | 顧客が削除されたとき。                                                                                     |
| `customer.discount.created`                    | 顧客に割引（クーポンまたはプロモーションコード）が適用されたとき。                                         |
| `customer.discount.deleted`                    | 顧客から割引が削除されたとき。                                                                             |
| `customer.discount.updated`                    | 顧客に適用されている割引が更新されたとき。                                                                 |
| `customer.updated`                             | 顧客情報が更新されたとき。                                                                                 |
| `invoice_payment.paid`                         | インボイスの支払いが完了したとき（非推奨、`invoice.paid` を推奨）。                                        |
| `invoice.created`                              | 新しいインボイスが作成されたとき。                                                                         |
| `invoice.deleted`                              | インボイスが削除されたとき。                                                                               |
| `invoice.finalization_failed`                  | インボイスの確定処理が失敗したとき。                                                                       |
| `invoice.finalized`                            | インボイスが確定し、支払いの準備ができたとき。                                                             |
| `invoice.marked_uncollectible`                 | インボイスが回収不能とマークされたとき。                                                                   |
| `invoice.overdue`                              | インボイスが支払い期日を過ぎたとき。                                                                       |
| `invoice.overpaid`                             | インボイスが超過して支払われたとき。                                                                       |
| `invoice.paid`                                 | インボイスの支払いが成功したとき。                                                                         |
| `invoice.payment_action_required`              | インボイスの支払いに顧客のアクションが必要なとき。                                                         |
| `invoice.payment_failed`                       | インボイスの支払いが失敗したとき。                                                                         |
| `invoice.payment_succeeded`                    | インボイスの支払いが成功したとき。                                                                         |
| `invoice.sent`                                 | インボイスが顧客に送信されたとき。                                                                         |
| `invoice.upcoming`                             | 次のインボイスが間もなく作成される予定のとき。                                                             |
| `invoice.updated`                              | インボイス情報が更新されたとき。                                                                           |
| `invoice.voided`                               | インボイスが無効にされたとき。                                                                             |
| `invoice.will_be_due`                          | インボイスの支払い期日が間もなく到来する予定のとき。                                                       |
| `invoiceitem.created`                          | インボイスアイテムが作成されたとき。                                                                       |
| `invoiceitem.deleted`                          | インボイスアイテムが削除されたとき。                                                                       |
| `invoiceitem.updated`                          | インボイスアイテムが更新されたとき。                                                                       |
| `mandate.updated`                              | マンダート（支払い承諾）が更新されたとき。                                                                 |
| `payment_intent.amount_capturable_updated`     | Payment Intent でキャプチャ可能な金額が更新されたとき。                                                    |
| `payment_intent.canceled`                      | Payment Intent がキャンセルされたとき。                                                                    |
| `payment_intent.created`                       | 新しい Payment Intent が作成されたとき。                                                                   |
| `payment_intent.partially_funded`              | Payment Intent が部分的に資金提供されたとき（遅延通知）。                                                  |
| `payment_intent.payment_failed`                | Payment Intent での支払いが失敗したとき。                                                                  |
| `payment_intent.processing`                    | Payment Intent が処理中のとき。                                                                            |
| `payment_intent.requires_action`               | Payment Intent の完了に追加のアクションが必要なとき。                                                      |
| `payment_intent.succeeded`                     | Payment Intent での支払いが成功したとき。                                                                  |
| `payment_link.created`                         | 支払いリンクが作成されたとき。                                                                             |
| `payment_link.updated`                         | 支払いリンクが更新されたとき。                                                                             |
| `payment_method.attached`                      | Payment Method が顧客または Setup Intent にアタッチされたとき。                                            |
| `payment_method.automatically_updated`         | Payment Method の情報が Stripe によって自動的に更新されたとき。                                            |
| `payment_method.detached`                      | Payment Method が顧客または Setup Intent からデタッチされたとき。                                          |
| `payment_method.updated`                       | Payment Method 情報が更新されたとき。                                                                      |
| `payout.canceled`                              | ペイアウト（売上の振込）がキャンセルされたとき。                                                           |
| `payout.created`                               | 新しいペイアウトが作成されたとき。                                                                         |
| `payout.failed`                                | ペイアウトが失敗したとき。                                                                                 |
| `payout.paid`                                  | ペイアウトが外部口座に送金されたとき。                                                                     |
| `payout.reconciliation_completed`              | ペイアウトの照合が完了したとき。                                                                           |
| `payout.updated`                               | ペイアウト情報が更新されたとき。                                                                           |
| `quote.accepted`                               | 見積もり（Quote）が顧客に承認されたとき。                                                                  |
| `quote.canceled`                               | 見積もりがキャンセルされたとき。                                                                           |
| `quote.created`                                | 新しい見積もりが作成されたとき。                                                                           |
| `quote.finalized`                              | 見積もりが確定されたとき。                                                                                 |
| `quote.will_expire`                            | 見積もりが間もなく期限切れになる予定のとき。                                                               |
| `refund.created`                               | 新しい返金が作成されたとき。                                                                               |
| `refund.failed`                                | 返金が失敗したとき。                                                                                       |
| `refund.updated`                               | 返金情報が更新されたとき。                                                                                 |
| `setup_intent.canceled`                        | Setup Intent がキャンセルされたとき。                                                                      |
| `setup_intent.created`                         | 新しい Setup Intent が作成されたとき。                                                                     |
| `setup_intent.requires_action`                 | Setup Intent の完了に追加のアクションが必要なとき。                                                        |
| `setup_intent.setup_failed`                    | Setup Intent のセットアップが失敗したとき。                                                                |
| `setup_intent.succeeded`                       | Setup Intent のセットアップが成功し、Payment Method が設定されたとき。                                     |
| `subscription_schedule.aborted`                | サブスクリプションスケジュールが中断されたとき。                                                           |
| `subscription_schedule.canceled`               | サブスクリプションスケジュールがキャンセルされたとき。                                                     |
| `subscription_schedule.completed`              | サブスクリプションスケジュールが完了したとき。                                                             |
| `subscription_schedule.created`                | 新しいサブスクリプションスケジュールが作成されたとき。                                                     |
| `subscription_schedule.expiring`               | サブスクリプションスケジュールが間もなく期限切れになる予定のとき。                                         |
| `subscription_schedule.released`               | サブスクリプションスケジュールがリリースされ、関連するサブスクリプションが直接管理されるようになったとき。 |
| `subscription_schedule.updated`                | サブスクリプションスケジュールが更新されたとき。                                                           |
| `customer.subscription.created`                | 新しい顧客サブスクリプションが作成されたとき。                                                             |
| `customer.subscription.deleted`                | 顧客サブスクリプションが削除またはキャンセルされたとき。                                                   |
| `customer.subscription.paused`                 | 顧客サブスクリプションが一時停止されたとき。                                                               |
| `customer.subscription.pending_update_applied` | サブスクリプションの保留中の更新が適用されたとき。                                                         |
| `customer.subscription.pending_update_expired` | サブスクリプションの保留中の更新が期限切れになったとき。                                                   |
| `customer.subscription.resumed`                | 顧客サブスクリプションが再開されたとき。                                                                   |
| `customer.subscription.trial_will_end`         | サブスクリプションのトライアル期間が間もなく終了する予定のとき。                                           |
| `customer.subscription.updated`                | 顧客サブスクリプション情報が更新されたとき（プラン変更、期間変更など）。                                   |
| `subscription_item.created`                    | サブスクリプションアイテムが作成されたとき。                                                               |
| `subscription_item.deleted`                    | サブスクリプションアイテムが削除されたとき。                                                               |
| `subscription_item.updated`                    | サブスクリプションアイテムが更新されたとき。                                                               |
| `topup.canceled`                               | トップアップがキャンセルされたとき。                                                                       |
| `topup.created`                                | 新しいトップアップが作成されたとき。                                                                       |
| `topup.failed`                                 | トップアップが失敗したとき。                                                                               |
| `topup.reversed`                               | トップアップがリバースされたとき。                                                                         |
| `topup.succeeded`                              | トップアップが成功したとき。                                                                               |
| `transfer.created`                             | 新しい送金（Transfer）が作成されたとき。                                                                   |
| `transfer.reversed`                            | 送金がリバースされたとき。                                                                                 |
| `transfer.updated`                             | 送金情報が更新されたとき。                                                                                 |

---

## 不正検知関連 (Radar)

| イベントタイプ                      | 解説                                                                   |
| :---------------------------------- | :--------------------------------------------------------------------- |
| `radar.early_fraud_warning.created` | 不正利用の早期警告が作成されたとき。                                   |
| `radar.early_fraud_warning.updated` | 不正利用の早期警告が更新されたとき。                                   |
| `review.closed`                     | レビュー（不正の可能性のある支払いに対する審査）がクローズされたとき。 |
| `review.opened`                     | レビューが開始されたとき。                                             |

---

## Tax 関連

| イベントタイプ            | 解説                             |
| :------------------------ | :------------------------------- |
| `customer.tax_id.created` | 顧客の Tax ID が作成されたとき。 |
| `customer.tax_id.deleted` | 顧客の Tax ID が削除されたとき。 |
| `customer.tax_id.updated` | 顧客の Tax ID が更新されたとき。 |
| `tax_rate.created`        | 税率が作成されたとき。           |
| `tax_rate.updated`        | 税率が更新されたとき。           |
| `tax.settings.updated`    | 税務設定が更新されたとき。       |

---

## Issuing 関連

| イベントタイプ                                         | 解説                                                                           |
| :----------------------------------------------------- | :----------------------------------------------------------------------------- |
| `issuing_authorization.created`                        | Issuing のオーソリ（カード利用承認）が作成されたとき。                         |
| `issuing_authorization.request`                        | Issuing のオーソリ要求があったとき（このイベントを受信するには設定が必要）。   |
| `issuing_authorization.updated`                        | Issuing のオーソリが更新されたとき。                                           |
| `issuing_card.created`                                 | Issuing カードが作成されたとき。                                               |
| `issuing_card.updated`                                 | Issuing カード情報が更新されたとき。                                           |
| `issuing_cardholder.created`                           | Issuing カードホルダーが作成されたとき。                                       |
| `issuing_cardholder.updated`                           | Issuing カードホルダー情報が更新されたとき。                                   |
| `issuing_dispute.closed`                               | Issuing の不審請求の申請がクローズされたとき。                                 |
| `issuing_dispute.created`                              | Issuing の不審請求の申請が作成されたとき。                                     |
| `issuing_dispute.funds_reinstated`                     | Issuing の不審請求の申請に関連して差し引かれた資金がアカウントに戻されたとき。 |
| `issuing_dispute.funds_rescinded`                      | Issuing の不審請求の申請に関連して資金がアカウントから引き落とされたとき。     |
| `issuing_dispute.submitted`                            | Issuing の不審請求の申請が提出されたとき。                                     |
| `issuing_dispute.updated`                              | Issuing の不審請求の申請情報が更新されたとき。                                 |
| `issuing_personalization_design.activated`             | パーソナライゼーションデザインが有効化されたとき。                             |
| `issuing_personalization_design.deactivated`           | パーソナライゼーションデザインが無効化されたとき。                             |
| `issuing_personalization_design.rejected`              | パーソナライゼーションデザインが却下されたとき。                               |
| `issuing_personalization_design.updated`               | パーソナライゼーションデザインが更新されたとき。                               |
| `issuing_token.created`                                | Issuing トークンが作成されたとき。                                             |
| `issuing_token.updated`                                | Issuing トークンが更新されたとき。                                             |
| `issuing_transaction.created`                          | Issuing トランザクションが作成されたとき。                                     |
| `issuing_transaction.purchase_details_receipt_updated` | Issuing トランザクションの購入明細レシート情報が更新されたとき。               |
| `issuing_transaction.updated`                          | Issuing トランザクション情報が更新されたとき。                                 |

---

## Terminal 関連

| イベントタイプ                     | 解説                                            |
| :--------------------------------- | :---------------------------------------------- |
| `terminal.reader.action_failed`    | Terminal リーダーでのアクションが失敗したとき。 |
| `terminal.reader.action_succeeded` | Terminal リーダーでのアクションが成功したとき。 |

---

## Treasury 関連

| イベントタイプ                                             | 解説                                                   |
| :--------------------------------------------------------- | :----------------------------------------------------- |
| `treasury.credit_reversal.created`                         | クレジットリバーサルが作成されたとき。                 |
| `treasury.credit_reversal.posted`                          | クレジットリバーサルが記帳されたとき。                 |
| `treasury.debit_reversal.completed`                        | デビットリバーサルが完了したとき。                     |
| `treasury.debit_reversal.created`                          | デビットリバーサルが作成されたとき。                   |
| `treasury.debit_reversal.initial_credit_granted`           | デビットリバーサルで最初のクレジットが付与されたとき。 |
| `treasury.financial_account.closed`                        | Financial Account がクローズされたとき。               |
| `treasury.financial_account.created`                       | Financial Account が作成されたとき。                   |
| `treasury.financial_account.features_status_updated`       | Financial Account の機能ステータスが更新されたとき。   |
| `treasury.inbound_transfer.canceled`                       | インバウンド転送がキャンセルされたとき。               |
| `treasury.inbound_transfer.created`                        | インバウンド転送が作成されたとき。                     |
| `treasury.inbound_transfer.failed`                         | インバウンド転送が失敗したとき。                       |
| `treasury.inbound_transfer.succeeded`                      | インバウンド転送が成功したとき。                       |
| `treasury.outbound_payment.canceled`                       | アウトバウンド支払いがキャンセルされたとき。           |
| `treasury.outbound_payment.created`                        | アウトバウンド支払いが作成されたとき。                 |
| `treasury.outbound_payment.expected_arrival_date_updated`  | アウトバウンド支払いの到着予定日が更新されたとき。     |
| `treasury.outbound_payment.failed`                         | アウトバウンド支払いが失敗したとき。                   |
| `treasury.outbound_payment.posted`                         | アウトバウンド支払いが記帳されたとき。                 |
| `treasury.outbound_payment.returned`                       | アウトバウンド支払いが返金されたとき。                 |
| `treasury.outbound_transfer.canceled`                      | アウトバウンド転送がキャンセルされたとき。             |
| `treasury.outbound_transfer.created`                       | アウトバウンド転送が作成されたとき。                   |
| `treasury.outbound_transfer.expected_arrival_date_updated` | アウトバウンド転送の到着予定日が更新されたとき。       |
| `treasury.outbound_transfer.failed`                        | アウトバウンド転送が失敗したとき。                     |
| `treasury.outbound_transfer.posted`                        | アウトバウンド転送が記帳されたとき。                   |
| `treasury.outbound_transfer.returned`                      | アウトバウンド転送が返金されたとき。                   |
| `treasury.received_credit.created`                         | 受領したクレジットが作成されたとき。                   |
| `treasury.received_credit.failed`                          | 受領したクレジットが失敗したとき。                     |
| `treasury.received_credit.succeeded`                       | 受領したクレジットが成功したとき。                     |
| `treasury.received_debit.created`                          | 受領したデビットが作成されたとき。                     |

---

## その他のイベント

| イベントタイプ                                         | 解説                                                                                                     |
| :----------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| `climate.order.canceled`                               | Climate 注文がキャンセルされたとき。                                                                     |
| `climate.order.created`                                | Climate 注文が作成されたとき。                                                                           |
| `climate.order.delayed`                                | Climate 注文が遅延したとき。                                                                             |
| `climate.order.delivered`                              | Climate 注文が配送されたとき。                                                                           |
| `climate.order.product_substituted`                    | Climate 注文でプロダクトが代替されたとき。                                                               |
| `climate.product.created`                              | Climate プロダクトが作成されたとき。                                                                     |
| `climate.product.pricing_updated`                      | Climate プロダクトの価格が更新されたとき。                                                               |
| `coupon.created`                                       | クーポンが作成されたとき。                                                                               |
| `coupon.deleted`                                       | クーポンが削除されたとき。                                                                               |
| `coupon.updated`                                       | クーポンが更新されたとき。                                                                               |
| `customer.source.created`                              | 顧客に支払い元（カード情報など）が追加されたとき。                                                       |
| `customer.source.deleted`                              | 顧客の支払い元が削除されたとき。                                                                         |
| `customer.source.expiring`                             | 顧客の支払い元（カード）が間もなく有効期限切れになる予定のとき。                                         |
| `customer.source.updated`                              | 顧客の支払い元情報が更新されたとき。                                                                     |
| `entitlements.active_entitlement_summary.updated`      | 有効な Entitlement のサマリーが更新されたとき。                                                          |
| `file.created`                                         | ファイルが作成されたとき。                                                                               |
| `financial_connections.account.created`                | Financial Connections アカウントが作成されたとき。                                                       |
| `financial_connections.account.deactivated`            | Financial Connections アカウントが無効化されたとき。                                                     |
| `financial_connections.account.disconnected`           | Financial Connections アカウントが切断されたとき。                                                       |
| `financial_connections.account.reactivated`            | Financial Connections アカウントが再度有効化されたとき。                                                 |
| `financial_connections.account.refreshed_balance`      | Financial Connections アカウントの残高が更新されたとき。                                                 |
| `financial_connections.account.refreshed_ownership`    | Financial Connections アカウントの所有者情報が更新されたとき。                                           |
| `financial_connections.account.refreshed_transactions` | Financial Connections アカウントのトランザクションが更新されたとき。                                     |
| `identity.verification_session.canceled`               | Identity Verification セッションがキャンセルされたとき。                                                 |
| `identity.verification_session.created`                | Identity Verification セッションが作成されたとき。                                                       |
| `identity.verification_session.processing`             | Identity Verification セッションが処理中のとき。                                                         |
| `identity.verification_session.redacted`               | Identity Verification セッションの個人情報がリダクトされたとき（このイベントを受信するには設定が必要）。 |
| `identity.verification_session.requires_input`         | Identity Verification セッションに追加の入力が必要なとき。                                               |
| `identity.verification_session.verified`               | Identity Verification セッションで本人確認が完了したとき。                                               |
| `plan.created`                                         | プランが作成されたとき。                                                                                 |
| `plan.deleted`                                         | プランが削除されたとき。                                                                                 |
| `plan.updated`                                         | プランが更新されたとき。                                                                                 |
| `price.created`                                        | Price が作成されたとき。                                                                                 |
| `price.deleted`                                        | Price が削除されたとき。                                                                                 |
| `price.updated`                                        | Price が更新されたとき。                                                                                 |
| `product.created`                                      | プロダクトが作成されたとき。                                                                             |
| `product.deleted`                                      | プロダクトが削除されたとき。                                                                             |
| `product.updated`                                      | プロダクトが更新されたとき。                                                                             |
| `promotion_code.created`                               | プロモーションコードが作成されたとき。                                                                   |
| `promotion_code.updated`                               | プロモーションコードが更新されたとき。                                                                   |
| `reporting.report_run.failed`                          | レポート実行が失敗したとき。                                                                             |
| `reporting.report_run.succeeded`                       | レポート実行が成功したとき。                                                                             |
| `reporting.report_type.updated`                        | レポートタイプが更新されたとき（このイベントを受信するには設定が必要）。                                 |
| `sigma.scheduled_query_run.created`                    | Sigma のスケジュールされたクエリ実行が作成されたとき。                                                   |
| `source.canceled`                                      | Source がキャンセルされたとき。                                                                          |
| `source.chargeable`                                    | Source が支払いに使用可能になったとき。                                                                  |
| `source.failed`                                        | Source 処理が失敗したとき。                                                                              |
| `source.mandate_notification`                          | Source に関連するマンダート通知があったとき。                                                            |
| `source.refund_attributes_required`                    | Source に関連する返金属性が必要なとき。                                                                  |
| `source.transaction.created`                           | Source トランザクションが作成されたとき。                                                                |
| `source.transaction.updated`                           | Source トランザクション情報が更新されたとき。                                                            |
| `test_helpers.test_clock.advancing`                    | テストクロックが進行中のとき。                                                                           |
| `test_helpers.test_clock.created`                      | テストクロックが作成されたとき。                                                                         |
| `test_helpers.test_clock.deleted`                      | テストクロックが削除されたとき。                                                                         |
| `test_helpers.test_clock.internal_failure`             | テストクロックで内部エラーが発生したとき。                                                               |
| `test_helpers.test_clock.ready`                        | テストクロックの準備ができたとき。                                                                       |

---

各カテゴリのイベントと解説を分けて表にしました。Webhook を設定する際のご参考になれば幸いです。
