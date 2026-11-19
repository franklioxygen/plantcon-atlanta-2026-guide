# 资料来源与调研记录

调研时间：2026 年 11 月 19 日。

## 展会官方信息

| 页面 | 用途 |
|---|---|
| https://www.plantcon.org/atlanta | 日期（12 月 5–6 日，10:00–18:00）、场馆（AmericasMart 3 号楼 1 层，250 Ted Turner Dr NW）、特邀嘉宾、停车建议 |
| https://www.plantcon.org/atlanta/exhibitors | 参展商名单（Shadow DOM 渲染，用 `scripts/browser/extract-exhibitors.js` 提取；页面标注 2026-11-13 更新，共 152 家） |
| https://www.plantcon.org/atlanta/programming | 讲座、工作坊、比赛与颁奖时间（页面未标明具体哪一天） |
| https://www.plantcon.org/atlanta/tickets | 票种、价格、入场时间、植物寄存柜收费 |
| https://www.plantcon.org/experience | 展会活动形式（市场、比赛、无声拍卖、儿童区） |

## 参展商官网查证

`data-vendors.js` 中来源标记为 `s`（官网查证）的条目，来自下列官网首页列出的品类与标价：

- 天南星科与综合观叶：anavrinbotanicals.com、aroidgreenhouses.com、anthuriumsbypiyush.com、artgardenflowers.us、thaiexoticgreenery.com、thebasements.com、toltecplants.com、rareleaftropics.com、dandiplants.com、greenroomexotics.com、mysecretplantshop.com、propandgrow.com、wallofplantsshop.com、plantsbyvc.com、plantopiabotanicals.com、cozycornerplants.com、ctplantdads.com、brandtsrxplants.com、pinkpetiole.com、joyousroots.com、luxuryverdehtx.com
- 兰花：ecuagenera.com、floridaorchidhouse.com、tropicalexotique.com
- 食虫植物：carnivero.com、trappednursery.com、rootsandrarities.com
- 多肉与其他：brbnursery.com、deserttotropics.com、nycitysucculents.com、thegardenplantco.com、paradiseplantsandpalms.com、viacitrus.com、isleofgaia.com、heatherlyfarms.com、bluemoontropicals.com、ruthsgardenindy.com、molterbv.nl（Paraverde 的官网链接）

无法查证或需注意的：

- succulantes.com、greenercovens.com、guntersgreenhousenc.com、royalrootsplantco.com、teanurserygarden.com：网站禁止抓取（robots），品类未查证
- mundiflora.com：无法打开
- cultivar-tx.com：域名待售，官网失效
- mycrazyplantlife.com：域名跳转到无关网站，图鉴里只保留 Instagram
- sproutandsprigplants.com、pottedupparadise.com、floravibe.com、topcutplants.com、leafynookal.com、olivegrows.com、tropicalsplants.com：首页未列出具体品类

其余没有官网或官网未列品类的卖家，标为“据店名推断”或“未知”。

## 行情与背景

- Palmstreet 2025 年度回顾（花烛热度、$26,000 成交记录、观音莲热度上升、组培苗成为新玩家入口）：https://palmstreet.app/blog/palmstreets-2025-takeaways
- Ecuagenera 是厄瓜多尔最大的兰花出口商：https://cuencahighlife.com/?p=130367
- 2026 观叶趋势（红粉色调、秋海棠）：https://diggermagazine.com/consumer-fascination-with-hues-of-red-pink-and-burgundy-is-fueling-a-growing-tropical-plant-trend/
- 宠物安全核对参考：ASPCA 有毒/无毒植物数据库 https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants

## 照片

全部来自 Wikimedia Commons，逐张署名见 `data/photo-credits-raw.json` 与网站页脚。挑选与打包方法见 `scripts/browser/fetch-wikimedia-photos.js`。
