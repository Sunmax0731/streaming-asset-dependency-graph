# 配信アセット依存グラフ

streaming-asset-dependency-graph は、AssetPipeline 領域の NON PICKUP Rank 6 アイデアをクローズドアルファとして実装したローカルファーストの検証ツールです。

## 目的

配信素材は依存や重複が見えにくく、ビルドサイズやロード失敗につながる。

このリポジトリでは、Addressables、AssetBundle、Unreal Primary Assetの参照、容量、重複、ラベルを可視化する。 ための入力正規化、代表シナリオ検証、レビュー判断、レポート出力、導入・手動テスト手順、QCDS 証跡を一式で管理します。

## クローズドアルファ範囲

- 中核ロジック: `src/core`
- 入力検証: `src/validators`
- レポート生成: `src/report`
- 判断モデル: `src/review-model`
- CLI: `src/cli`
- ホスト/UI adapter: `public/index.html`
- 代表サンプル: `samples/representative-suite.json`

## 実行

```powershell
npm test
npm run validate
npm run build
```

## 公開位置づけ

- Version: v0.1.0-alpha.1
- GitHub prerelease: closed alpha
- 手動テスト: Codex 側では未実施。ユーザー実施用の手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記録。
- 主な公開先: GitHub Release / BOOTH

## 差別化

DCC由来の元ファイルから配信単位までを同じグラフで追う。
