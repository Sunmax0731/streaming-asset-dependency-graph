# 実装計画

## 完了済みフェーズ

1. 要件定義、仕様、設計を NON PICKUP Rank 6 と ZIP metadata から再構成。
2. `src/core`、`src/validators`、`src/report`、`src/review-model`、`src/cli` を分割。
3. `samples/representative-suite.json` に happy-path、missing-required、warning、mixed-batch を作成。
4. 自動テストで代表シナリオの期待結果と実測を照合。
5. docs、QCDS、manual test、release checklist、source idea pack、release evidence を整備。
6. `dist/streaming-asset-dependency-graph-docs.zip` を生成。

## 次フェーズ

- 実ユーザーの手動テスト結果を反映する。
- アセットパイプライン向け CLI、検証モデル、静的 HTML レビュー画面 を実データで拡張する。
- 配布先 GitHub Release / BOOTH 向けの説明画像、サンプルデータ、FAQ を追加する。
