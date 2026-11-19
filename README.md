# PlantCon Atlanta 2026 植物图鉴

为零基础观众准备的中文逛展手册：87 个物种条目、152 家参展商索引、8 节入门课、术语表和逛展攻略。

**在线查看：https://franklioxygen.github.io/plantcon-atlanta-2026-guide/**

> PlantCon Atlanta 2026 · 12 月 5–6 日 · Atlanta Convention Center at AmericasMart（3 号楼 1 层）
> 本项目为个人逛展参考，非 PlantCon 官方出品。

## 内容

| 板块 | 说明 |
|---|---|
| 物种图鉴 | 天南星科、球兰、秋海棠、竹芋、兰花、食虫植物、多肉、凤梨、蕨类等 87 条；每条有照片、怎么认/怎么养/怎么挑、难度、参考价、对猫安全等级，以及相关卖家的展位 |
| 入门课 | 植物命名、植物结构、斑锦、规格与繁殖、养护四要素、病虫害、价格、宠物安全，附 10 题小测验 |
| 参展商 | 官网名单（2026-11-13 更新）全部 152 家，可按类别、主营、佐治亚本地、展位排号筛选 |
| 逛展攻略 | 票务、讲座与工作坊、7 条主题路线、选购检查清单、零基础首购清单、12 月带植物回家 |
| 术语表 | 70 多个摊位上常见的英文行话 |

## 目录结构

```
docs/                     GitHub Pages 发布的网站（纯静态，无需构建）
  index.html              页面结构与样式
  app.js                  筛选、搜索、详情、路由
  data-species.js         物种条目与类群
  data-vendors.js         参展商、主营标签、来源标记
  data-learn.js           入门课、小测验、术语表、逛展信息
  data-photos.js          照片署名（由脚本生成）
  illo.js                 标本风格插图引擎（无照片时的备用）
  photos/                 87 张照片（640px 宽 JPEG）
data/
  exhibitors-2026-11-13.tsv   参展商名单（含主营与来源）
  photo-credits-raw.json      照片原始署名数据
scripts/
  browser/extract-exhibitors.js     在官网参展商页的浏览器控制台运行，提取名单
  browser/fetch-wikimedia-photos.js 在 commons.wikimedia.org 的浏览器控制台运行，搜索、压缩、打包照片
  build-photo-credits.py            把照片包放进 docs/ 并生成署名
  check/screenshots.py              无头浏览器截图与错误检查
  check/illustrations-contact-sheet.html  插图引擎总览
research/
  sources.md              资料来源与卖家官网查证记录
  process.md              制作过程与已知局限
```

## 本地预览

```bash
cd docs && python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 更新照片

1. 用浏览器打开 commons.wikimedia.org，在开发者工具 Console 粘贴 `scripts/browser/fetch-wikimedia-photos.js`，运行 `await buildZip()`
2. `python3 scripts/build-photo-credits.py ~/Downloads/plantcon-photos.zip`

## 授权

- 照片来自 Wikimedia Commons，各自遵循原作者选择的协议（CC BY、CC BY-SA、CC0 或公有领域），已缩放并压缩；CC BY-SA 照片的改动版本沿用相同协议。逐张署名见网站页脚与 `data/photo-credits-raw.json`。
- 展会信息与参展商名单来自 [PlantCon 官网](https://www.plantcon.org/atlanta)；卖家品类与标价来自各自官网，可能随时变化。
- 宠物安全等级为常见资料汇总，以 [ASPCA 数据库](https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants) 为准。
