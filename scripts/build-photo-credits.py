#!/usr/bin/env python3
"""把 plantcon-photos.zip 解压出的照片与署名放进网站。

用法：
    python3 scripts/build-photo-credits.py ~/Downloads/plantcon-photos.zip

做三件事：
  1. 校验 zip，把 photos/*.jpg 复制到 docs/photos/
  2. 把 photos/credits.json 另存为 data/photo-credits-raw.json
  3. 生成 docs/data-photos.js（网页读取的署名数据，含“近缘种/同类代表”说明）
"""
import html
import json
import shutil
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# 照片不是该条目本种时，在详情页显示的说明
NOTES = {
    "ant-hyb": "图为同类丝绒花烛 Anthurium crystallinum，杂交种外观与之相近",
    "hoy-kro": "图为近缘种 Hoya lacunosa 的花",
    "hoy-car": "图为锦球兰原种（Hoya carnosa）的花",
    "hoy-rare": "图为球兰花序特写",
    "phi-hyb": "图为同类自立型杂交品种 'Imperial Red'",
    "agl": "图为红叶粗肋草品种",
    "til": "图为开花中的空气凤梨",
    "eri": "图为同属的 Ceratostema rauhii",
    "orc-pap": "图为兜兰 Paphiopedilum henryanum",
    "orc-van": "图为蓝色万代兰 Vanda coerulea",
    "orc-bul": "图为石豆兰 Bulbophyllum tingabarinum",
    "orc-ctst": "图为 Catasetum saccatum 的花",
    "hel": "图为太阳瓶子草 Heliamphora nutans",
    "orc-jew": "图为血叶兰 Ludisia discolor（开花中）",
    "hoy-ker": "图为心叶球兰的花与叶",
}


def main(zip_path: str) -> None:
    z = zipfile.ZipFile(zip_path)
    bad = z.testzip()
    if bad:
        sys.exit(f"zip 损坏：{bad}")
    names = z.namelist()
    if any(not n.startswith("photos/") or ".." in n for n in names):
        sys.exit("zip 里有意外的路径，已停止")

    out_dir = ROOT / "docs" / "photos"
    out_dir.mkdir(parents=True, exist_ok=True)
    for n in names:
        if n.endswith(".jpg"):
            with z.open(n) as src, open(out_dir / Path(n).name, "wb") as dst:
                shutil.copyfileobj(src, dst)

    credits = json.loads(z.read("photos/credits.json"))
    (ROOT / "data").mkdir(exist_ok=True)
    (ROOT / "data" / "photo-credits-raw.json").write_text(json.dumps(credits, ensure_ascii=False), encoding="utf-8")

    out = {}
    for k, v in credits.items():
        artist = html.unescape(v.get("artist") or "").replace("(talk)", "").strip()
        out[k] = {
            "a": artist or "未署名",
            "l": v.get("lic") or "见原页面",
            "lu": v.get("licurl") or "",
            "p": v.get("page"),
            "f": v.get("file"),
            "n": NOTES.get(k, ""),
        }
    js = "/* 照片署名：全部来自 Wikimedia Commons，已缩放为 640px 宽并压缩 */\nwindow.PHOTOS=" + json.dumps(out, ensure_ascii=False, indent=0) + ";\n"
    (ROOT / "docs" / "data-photos.js").write_text(js, encoding="utf-8")
    print(f"照片 {sum(n.endswith('.jpg') for n in names)} 张，署名 {len(out)} 条，已写入 docs/")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
