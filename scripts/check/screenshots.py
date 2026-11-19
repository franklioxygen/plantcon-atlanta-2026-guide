#!/usr/bin/env python3
"""用无头浏览器打开 docs/index.html，截几张图并报告控制台错误。

用法：
    pip install playwright && playwright install chromium
    python3 scripts/check/screenshots.py            # 截图保存到 scripts/check/out/
    python3 scripts/check/screenshots.py --mobile   # 额外检查 390px 手机宽度是否横向溢出
"""
import asyncio
import sys
from pathlib import Path

from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[2]
PAGE = (ROOT / "docs" / "index.html").as_uri()
OUT = Path(__file__).resolve().parent / "out"


async def desktop(p):
    b = await p.chromium.launch()
    pg = await b.new_page(viewport={"width": 1320, "height": 900})
    errs = []
    pg.on("console", lambda m: errs.append(f"{m.type}: {m.text}") if m.type == "error" else None)
    pg.on("pageerror", lambda e: errs.append(f"PAGEERR: {e}"))
    await pg.goto(PAGE)
    await pg.wait_for_timeout(800)
    await pg.screenshot(path=OUT / "1-hero.png")
    await pg.evaluate("window.scrollTo(0, document.querySelector('#views').offsetTop-60)")
    await pg.wait_for_timeout(300)
    await pg.screenshot(path=OUT / "2-atlas.png")
    print("图鉴卡片数：", await pg.evaluate("document.querySelectorAll('#grid .card').length"))
    await pg.click("[data-sp='ant-hyb']")
    await pg.wait_for_timeout(300)
    await pg.screenshot(path=OUT / "3-detail.png")
    await pg.keyboard.press("Escape")
    for i, view in enumerate(["vendors", "lessons", "plan", "terms"], start=4):
        await pg.click(f".tab[data-view='{view}']")
        await pg.wait_for_timeout(300)
        await pg.screenshot(path=OUT / f"{i}-{view}.png", full_page=(view == "plan"))
    await b.close()
    print("\n".join(errs) or "没有控制台错误")


async def mobile(p):
    b = await p.chromium.launch()
    pg = await b.new_page(viewport={"width": 390, "height": 844})
    await pg.goto(PAGE)
    await pg.wait_for_timeout(600)
    await pg.screenshot(path=OUT / "m1-mobile.png")
    sw = await pg.evaluate("document.documentElement.scrollWidth")
    print("手机宽度 scrollWidth：", sw, "（应为 390，大于则有横向溢出）")
    await b.close()


async def main():
    OUT.mkdir(exist_ok=True)
    async with async_playwright() as p:
        await desktop(p)
        if "--mobile" in sys.argv:
            await mobile(p)


asyncio.run(main())
