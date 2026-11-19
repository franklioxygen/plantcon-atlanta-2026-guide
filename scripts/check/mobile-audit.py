"""手机宽度（390px）检查：逐个板块截图，并报告是否有横向溢出。
用法：python3 scripts/check/mobile-audit.py  （截图保存在 scripts/check/out/）"""
import asyncio, sys
from pathlib import Path
from playwright.async_api import async_playwright
ROOT=Path(__file__).resolve().parents[2]
SRC=sys.argv[1] if len(sys.argv)>1 else (ROOT/"docs"/"index.html").as_uri()
(Path(__file__).resolve().parent/"out").mkdir(exist_ok=True)
OUT=str(Path(__file__).resolve().parent/"out"/"mob_")
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        ctx=await b.new_context(viewport={"width":390,"height":844},device_scale_factor=1,is_mobile=True,has_touch=True)
        pg=await ctx.new_page()
        errs=[]; pg.on("pageerror",lambda e: errs.append(str(e)))
        await pg.goto(SRC); await pg.wait_for_timeout(700)
        async def sw(tag): print(tag,"scrollWidth",await pg.evaluate("document.documentElement.scrollWidth"))
        await pg.screenshot(path=OUT+"1_top.png"); await sw("top")
        await pg.evaluate("document.querySelector('#views').scrollIntoView({block:'start'})"); await pg.wait_for_timeout(300)
        await pg.screenshot(path=OUT+"2_atlas.png")
        await pg.evaluate("(document.querySelector('#scroller').scrollHeight>document.querySelector('#scroller').clientHeight?document.querySelector('#scroller'):window).scrollBy(0,700)"); await pg.wait_for_timeout(300)
        await pg.screenshot(path=OUT+"3_cards.png")
        await pg.evaluate("document.querySelector('[data-sp=\"phi-glo\"]').click()"); await pg.wait_for_timeout(400)
        await pg.screenshot(path=OUT+"4_detail.png"); await sw("detail")
        await pg.evaluate("document.querySelector('.dlg-panel').scrollTo(0,700)"); await pg.wait_for_timeout(200)
        await pg.screenshot(path=OUT+"5_detail2.png")
        await pg.keyboard.press("Escape")
        for v in ["lessons","vendors","plan","terms"]:
            await pg.evaluate(f"document.querySelector('.tab[data-view=\"{v}\"]').click()"); await pg.wait_for_timeout(400)
            await pg.screenshot(path=OUT+f"6_{v}.png"); await sw(v)
        await pg.evaluate("(document.querySelector('#scroller').scrollHeight>document.querySelector('#scroller').clientHeight?document.querySelector('#scroller'):window).scrollBy(0,900)"); await pg.wait_for_timeout(200)
        await pg.evaluate("document.querySelector('.tab[data-view=\"plan\"]').click()"); await pg.wait_for_timeout(300)
        await pg.evaluate("document.querySelector('#tickets').scrollIntoView({block:'start'})"); await pg.wait_for_timeout(200)
        await pg.screenshot(path=OUT+"7_plan_tables.png")
        # 手机上整页不应滚动（只有 #scroller 滚动），底栏应贴住视口底部
        print("document scrolls:", await pg.evaluate("document.scrollingElement.scrollHeight>innerHeight+1"), "| nav bottom:", await pg.evaluate("Math.round(document.querySelector('.tabs').getBoundingClientRect().bottom)"), "/", await pg.evaluate("innerHeight"))
        print(errs or "no errors")
        await b.close()
asyncio.run(main())
