export const productConfig = {
  "product": {
    "rank": 6,
    "tier": "P0",
    "score": 70,
    "domain": "AssetPipeline",
    "ideaNo": 7,
    "ideaName": "配信アセット依存グラフ",
    "repository": "streaming-asset-dependency-graph",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "Addressablesや配信素材の依存可視化はUnity/Unreal制作で再利用性が高い。",
    "surface": "アセットパイプライン向け CLI、検証モデル、静的 HTML レビュー画面",
    "integration": "Unity Editor / Unreal Editor",
    "overview": "Addressables、AssetBundle、Unreal Primary Assetの参照、容量、重複、ラベルを可視化する。",
    "problem": "配信素材は依存や重複が見えにくく、ビルドサイズやロード失敗につながる。",
    "differentiation": "DCC由来の元ファイルから配信単位までを同じグラフで追う。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
