/*
 * 从 PlantCon Atlanta 官网参展商页提取完整名单
 * 用法：在浏览器打开 https://www.plantcon.org/atlanta/exhibitors ，等列表加载完，
 *      把本文件全部内容粘贴到开发者工具 Console 运行。输出为制表符分隔（TSV）文本。
 *
 * 说明：名单由 <plantcon-directory> 自定义元素在 Shadow DOM 里渲染，
 *      普通的“抓网页文字”拿不到，所以需要进入 shadowRoot 读取。
 *      输出列：类别代码、名称、展位、所在地、网站（去掉协议与参数）、Instagram 账号
 *      类别代码：P 植物卖家 · S 养护用品 · T 植物主题商品 · C 食品饮品 · N 非植物商品 · O 社群与组织
 */
(() => {
  const host = document.querySelector("plantcon-directory");
  if (!host || !host.shadowRoot) return "没有找到参展商列表，请等页面加载完再运行";
  const root = host.shadowRoot;
  const catMap = {
    "Plant Sellers": "P", "Plant Supply Products": "S", "Plant Themed Products": "T",
    "Consumables": "C", "Non-Plant Themed Products": "N", "Non-Profit or Plant Organization": "O"
  };
  const lines = [];
  root.querySelectorAll("section.category-section").forEach(sec => {
    const cat = (sec.querySelector("h2,h3,.category-title") || sec.firstElementChild).textContent.trim();
    sec.querySelectorAll(".exhibitor-item").forEach(it => {
      let web = "", ig = "";
      it.querySelectorAll("a.social-link").forEach(a => {
        const type = a.title.split(": ").pop();
        const href = a.href.split("?")[0];
        if (type === "website" && !href.includes("instagram.com") && !href.includes("facebook.com"))
          web = href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
        if (type === "instagram") { const m = href.match(/instagram\.com\/([^\/]+)/); if (m) ig = m[1]; }
      });
      lines.push([
        catMap[cat] || cat,
        it.querySelector(".exhibitor-name").textContent.trim(),
        (it.querySelector(".exhibitor-booth")?.textContent || "").replace("Booth ", "").trim(),
        it.querySelector(".exhibitor-location").textContent.trim(),
        web, ig
      ].join("\t"));
    });
  });
  const updated = (root.textContent.match(/Last updated:[^P]+(AM|PM)/) || [""])[0];
  console.log(updated);
  return lines.join("\n");
})();
