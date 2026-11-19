/*
 * 从 Wikimedia Commons 获取图鉴照片并打包成 plantcon-photos.zip
 *
 * 为什么在浏览器里跑：生成图鉴的云端环境无法访问 Wikimedia，发布的网页也不能引用外部图片，
 * 所以在本地浏览器打开 commons.wikimedia.org 的任意页面，把本文件粘贴进开发者工具 Console 运行。
 * （upload.wikimedia.org 的图片允许跨域读取，所以可以在页面里压缩并打包。）
 *
 * 两个步骤：
 *   1. await searchCandidates()  —— 按 QUERIES 自动搜索候选照片，返回列表供人工核对
 *                                   （wp: 先取英文维基百科条目首图；cs: 直接搜索 Commons 文件）
 *   2. await buildZip()          —— 按 FINAL 中人工确认过的文件名下载、缩放到 ≤640×820、
 *                                   JPEG 质量 0.8，连同 credits.json 打成 zip 并触发下载
 * 第 1 步的自动结果里有一些不合适（古籍插画、只有芽苗、错物种、纪念币），已在 FINAL 中替换。
 */

/* ── 第 1 步：搜索词（wp = 维基百科条目首图，cs = Commons 搜索） ── */
const QUERIES = {
  "mon-del":"wp:Monstera deliciosa","mon-thai":"cs:Monstera Thai Constellation","mon-albo":"cs:Monstera deliciosa variegata albo","mon-ada":"wp:Monstera adansonii","rha-tet":"wp:Rhaphidophora tetrasperma",
  "phi-pp":"cs:Philodendron Pink Princess","phi-glo":"wp:Philodendron gloriosum","phi-mel":"wp:Philodendron melanochrysum","phi-bil":"cs:Philodendron billietiae","phi-fb":"cs:Philodendron Florida Beauty",
  "phi-hed":"wp:Philodendron hederaceum","phi-hyb":"cs:Philodendron Imperial Red","ant-cla":"wp:Anthurium clarinervium","ant-war":"cs:Anthurium warocqueanum leaves","ant-vei":"wp:Anthurium veitchii",
  "ant-hyb":"wp:Anthurium crystallinum","ant-and":"wp:Anthurium andraeanum","alo-pol":"cs:Alocasia amazonica Polly","alo-dra":"cs:Alocasia baginda","alo-cup":"wp:Alocasia cuprea",
  "alo-bv":"cs:Alocasia reginula","alo-fry":"cs:Alocasia micholitziana","alo-tc":"cs:Alocasia Jacklyn","syn-pod":"cs:Syngonium podophyllum leaves","syn-wen":"cs:Syngonium wendlandii",
  "epi-aur":"wp:Epipremnum aureum","sci-pic":"wp:Scindapsus pictus","agl":"cs:Aglaonema leaves","zz":"wp:Zamioculcas","xan-lin":"cs:Caladium lindenii",
  "cal":"wp:Caladium bicolor","amo":"cs:Amorphophallus konjac","hoy-car":"cs:Hoya carnosa variegata","hoy-ker":"wp:Hoya kerrii","hoy-lin":"cs:Hoya linearis",
  "hoy-cau":"cs:Hoya caudata","hoy-kro":"cs:Hoya lacunosa","hoy-rare":"cs:Hoya flowers umbel","beg-mac":"wp:Begonia maculata","beg-rex":"cs:Begonia rex leaves",
  "beg-pav":"cs:Begonia pavonina","cal-lan":"cs:Calathea lancifolia","cal-orb":"cs:Calathea orbifolia","mar-leu":"wp:Maranta leuconeura","str-tri":"cs:Stromanthe Triostar",
  "orc-pha":"wp:Phalaenopsis schilleriana","orc-den":"wp:Dendrobium nobile","orc-cat":"wp:Cattleya maxima","orc-pap":"wp:Paphiopedilum","orc-van":"cs:Vanda coerulea",
  "orc-onc":"cs:Oncidium flowers","orc-ple":"wp:Dracula simia","orc-jew":"wp:Ludisia","orc-bul":"wp:Bulbophyllum","orc-ctst":"wp:Catasetum",
  "dio":"wp:Venus flytrap","sar":"wp:Sarracenia leucophylla","nep":"wp:Nepenthes veitchii","dro":"wp:Drosera capensis","pin":"wp:Pinguicula moranensis",
  "cep":"wp:Cephalotus","hel":"wp:Heliamphora","utr":"wp:Utricularia sandersonii","ech":"wp:Echeveria gibbiflora","haw":"wp:Haworthiopsis attenuata",
  "agv":"wp:Agave parryi","san":"wp:Dracaena trifasciata","myr":"cs:Myrtillocactus geometrizans fukurokuryuzinboku","gym":"cs:moon cactus grafted Gymnocalycium","cer":"wp:Ceropegia woodii",
  "til":"wp:Tillandsia ionantha","brom-tank":"wp:Guzmania","pla":"wp:Platycerium bifurcatum","fern-blue":"cs:Microsorum thailandicum","fern-nest":"wp:Asplenium nidus",
  "pep":"wp:Peperomia argyreia","cit":"wp:Meyer lemon","palm":"wp:Chamaedorea elegans","plu":"wp:Plumeria rubra","epc":"wp:Episcia cupreata",
  "sai":"wp:African violet","strel":"wp:Strelitzia reginae","pil":"wp:Pilea peperomioides","pac":"cs:Pachira aquatica potted","trad":"wp:Tradescantia zebrina",
  "cor":"wp:Cordyline fruticosa","eri":"cs:Ceratostema"
};

/* ── 第 2 步：人工核对后的最终文件（与 data/photo-credits-raw.json 一致） ── */
const FINAL = {
  "rha-tet": "File:Rhaphidophora tetrasperma.jpg",
  "mon-ada": "File:Monstera adansonii 79319231.jpg",
  "mon-del": "File:Monstera deliciosa2.jpg",
  "mon-thai": "File:201016 117 San Diego Botanic Garden - Dickinson Family Conseratory, Monstera deliciosa 'Thai Constellation' Variegated Mexican Breadfruit, Aglaomorpha coronans Santa Rosa Fern.jpg",
  "mon-albo": "File:Fruit Salad Plant (Monstera deliciosa 'Albo-Variegata') 1.jpg",
  "phi-glo": "File:Philodendron gloriosum (29587099650).jpg",
  "phi-pp": "File:Pink princess philodendron.jpg",
  "phi-mel": "File:PhilodendronMelanochrysum.jpg",
  "phi-fb": "File:Philodendron Florida Beauty-3-Vishuddhi garden-bengaluru-India.jpg",
  "phi-bil": "File:Araceae (Philodendron billietiae) (40051211101).jpg",
  "phi-hed": "File:Philodendron scandens subsp oxycardium2.jpg",
  "ant-vei": "File:Anthurium veitchii 03.jpg",
  "phi-hyb": "File:紅帝王蔓綠絨 Philodendron Imperial Red -香港公園 Hong Kong Park- (9219893149).jpg",
  "ant-cla": "File:Anthurium clarinervium.jpg",
  "ant-war": "File:Anthurium warocqueanum at Conservatory of Flowers.jpg",
  "ant-hyb": "File:Alismatales - Anthurium crystallinum 2.jpg",
  "alo-pol": "File:Alocasia x amazonica 'Polly'.jpg",
  "ant-and": "File:AnthuriumAndraenum.jpg",
  "alo-dra": "File:PXL 20220721 201128151.jpg",
  "alo-cup": "File:Alocasia cuprea - Victoriahuset, Bergianska trädgården - Stockholm, Sweden - DSC00282.JPG",
  "alo-bv": "File:Starr 080117-1732 Alocasia reginula.jpg",
  "alo-fry": "File:Alocasia micholitziana.JPG",
  "alo-tc": "File:Alocasia Jacklyn Plant.jpg",
  "syn-wen": "File:Syngonium wendlandii - Talcott Greenhouse - Mount Holyoke College - DSC04520.JPG",
  "syn-pod": "File:Starr 080103-1366 Syngonium podophyllum.jpg",
  "epi-aur": "File:Money Plant (Epipremnum aureum) 4.jpg",
  "agl": "File:Aglaonema sp (red leaves).jpg",
  "zz": "File:Zamioculcas zamiifolia 1.jpg",
  "sci-pic": "File:Scindapsus pictus 01.jpg",
  "xan-lin": "File:CaladiumLindenii.jpg",
  "hoy-ker": "File:Hoya-kerrii flowers op.jpg",
  "amo": "File:Amorphophallus konjac 101769201.jpg",
  "cal": "File:Caladium bicolor 2.jpg",
  "hoy-car": "File:Hoya FR 2013.jpg",
  "hoy-lin": "File:Hoya linearis 33506.JPG",
  "beg-mac": "File:Begonia maculata3073316230.jpg",
  "hoy-rare": "File:Hoya carnosa - umbel with nectar droplets.jpg",
  "hoy-kro": "File:Hoya lacunosa.JPG",
  "beg-rex": "File:Begonia rex 5zz.jpg",
  "hoy-cau": "File:Hoya caudata.jpg",
  "mar-leu": "File:Maranta leuconeura3.jpg",
  "str-tri": "File:Stromanthe sanguinea 'Triostar'.jpg",
  "beg-pav": "File:PXL 20220925 225608966.jpg",
  "cal-orb": "File:Calathea orbifolia 2zz.jpg",
  "cal-lan": "File:Goeppertia insignis.jpg",
  "orc-pha": "File:Phalaenopsis schilleriana toapel.jpg",
  "orc-den": "File:Dendrobium nobile - flower view 01.jpg",
  "orc-pap": "File:Paphiopedilum henryanum Orchi 001.jpg",
  "orc-cat": "File:Cattleya maxima Orchi 01.jpg",
  "orc-van": "File:Vanda coerulea orchid blooms from manipur.jpg",
  "orc-bul": "File:Bulbophyllum tingabarinum.jpg",
  "orc-ctst": "File:Catasetum-saccatum.jpg",
  "orc-ple": "File:15.Dracula simia, the Monkey Face Orchid (10957423336).jpg",
  "orc-jew": "File:Ludisia discolor kz01.jpg",
  "orc-onc": "File:Oncidium cultivars flowers in sunshine.jpg",
  "dro": "File:Drosera capensis bend.JPG",
  "dio": "File:Venus Flytrap showing trigger hairs.jpg",
  "pin": "File:Pinguicula moranensis.jpg",
  "sar": "File:Sarracenia leucophylla at the Brooklyn Botanic Garden (81396)b.jpg",
  "nep": "File:Pitcher Plant (Nepenthaceae) Nepenthes Veitchii Pink (49359429783).jpg",
  "hel": "File:Roraima Heliamphora nutans1.JPG",
  "utr": "File:Utricularia sandersonii flower.jpg",
  "haw": "File:Winterbourne - Haworthia attenuata (6120983526).jpg",
  "ech": "File:Echeveria gibbiflora 001.JPG",
  "cep": "File:Cephalotus follicularis 0001.JPG",
  "san": "File:Snake Plant (Sansevieria trifasciata 'Laurentii').jpg",
  "agv": "File:Mezcal (Agave parryi), Conservatorio botánico, Fort Wayne, Indiana, Estados Unidos, 2012-11-12, DD 01.jpg",
  "cer": "File:Ceropegia woodii Ceropegia Wooda 2024-04-26 01.jpg",
  "gym": "File:Pink moon cactus overview.jpg",
  "myr": "File:Myrtillocactus geometrizans variety Fukurokuryuzinboku.jpg",
  "brom-tank": "File:DirkvdM red-white-stripe flower.jpg",
  "fern-nest": "File:Asplenium nidus (Bukidnon, Philippines) 02.jpg",
  "fern-blue": "File:Microsorum thailandicum kz01.jpg",
  "til": "File:Purple sky plant - Andrey Zharkikh.jpg",
  "pla": "File:Platycerium bifurcatum 612351086.jpg",
  "epc": "File:Episcia cupreata (9631125202).jpg",
  "palm": "File:Chamaedorea elegans Mart.JPG",
  "cit": "File:Meyer Lemon.jpg",
  "pep": "File:Peperomia argyreia.jpg",
  "plu": "File:Champa tree with pink flowers in Islamabad, Pakistan.jpg",
  "trad": "File:Zebrina pendula 20060521 2 closer.jpg",
  "pil": "File:Pilea peperomioides Chinese money plant.jpg",
  "strel": "File:Ave-do-paraíso, Strelitzia reginae, em Bagé, Rio Grande do Sul, Brasil - 55211233712.jpg",
  "sai": "File:Saintpaulia ionantha.jpg",
  "pac": "File:A potted Pachira aquatica.jpg",
  "cor": "File:Cordyline fruticosa (20262433874).jpg",
  "eri": "File:Ceratostema rauhii, Ericaceae (6089050764).jpg"
};

const API = "https://commons.wikimedia.org/w/api.php?format=json&origin=*&action=query";
const IIP = "&prop=imageinfo&iiprop=url|extmetadata|size|mime&iiurlwidth=720";
const SKIP = /Curtis|Illustration|Flore des|plate|Botanical Magazine|pl\.|Fitch|Hooker|Lemaire|\.png$|drawing|sprout|coin|Miss Joaquim/i;
const strip = h => (h || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

function pick(pages) {
  const arr = Object.values(pages || {}).filter(p => p.imageinfo).sort((a, b) => (a.index || 0) - (b.index || 0));
  for (const p of arr) {
    const ii = p.imageinfo[0];
    if (SKIP.test(p.title)) continue;
    if (/jpeg|png|webp/.test(ii.mime) && ii.width >= 480 && ii.height >= 360 && ii.width / ii.height < 2.2 && ii.height / ii.width < 2.2) return { p, ii };
  }
  return null;
}
function record(id, p, ii) {
  const m = ii.extmetadata || {};
  return { id, file: p.title, thumb: ii.thumburl, w: ii.width, h: ii.height,
    lic: strip(m.LicenseShortName && m.LicenseShortName.value), licurl: (m.LicenseUrl && m.LicenseUrl.value) || "",
    artist: strip(m.Artist && m.Artist.value).slice(0, 60), page: ii.descriptionurl };
}
async function findOne(id, q) {
  const kind = q.slice(0, 2), term = q.slice(3);
  if (kind === "wp") {
    const r = await (await fetch("https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=pageimages&piprop=name&redirects=1&titles=" + encodeURIComponent(term))).json();
    const name = Object.values(r.query.pages)[0]?.pageimage;
    if (name) {
      const r2 = await (await fetch(API + "&titles=" + encodeURIComponent("File:" + name) + IIP)).json();
      const pk = pick(r2.query && r2.query.pages); if (pk) return record(id, pk.p, pk.ii);
    }
  }
  const r3 = await (await fetch(API + "&generator=search&gsrnamespace=6&gsrlimit=15&gsrsearch=" + encodeURIComponent(term) + IIP)).json();
  const pk = pick(r3.query && r3.query.pages);
  return pk ? record(id, pk.p, pk.ii) : { id, miss: true };
}
async function searchCandidates() {
  const out = {}; const ids = Object.keys(QUERIES);
  for (let i = 0; i < ids.length; i += 6)
    await Promise.all(ids.slice(i, i + 6).map(async id => { try { out[id] = await findOne(id, QUERIES[id]); } catch (e) { out[id] = { id, err: String(e) }; } }));
  window.CANDIDATES = out;
  return ids.map(id => { const r = out[id]; return r.miss || r.err ? `${id} | MISS` : [id, r.file, r.w + "x" + r.h, r.lic, r.artist].join(" | "); }).join("\n");
}

/* 压缩与打包 */
function sourceUrl(x) {
  // Wikimedia 现在只提供标准宽度的缩略图（如 500、960）；原图较小时直接用原图
  if (!/\/thumb\//.test(x.thumb)) return x.thumb;
  if (x.w >= 960) return x.thumb.replace(/\/\d+px-/, "/960px-");
  return x.thumb.replace("/thumb/", "/").replace(/\/[^\/]+$/, "");
}
async function toJpeg(url) {
  const blob = await (await fetch(url)).blob();
  const bmp = await createImageBitmap(blob);
  const s = Math.min(1, 640 / bmp.width, 820 / bmp.height);
  const cv = new OffscreenCanvas(Math.round(bmp.width * s), Math.round(bmp.height * s));
  cv.getContext("2d").drawImage(bmp, 0, 0, cv.width, cv.height);
  const out = await cv.convertToBlob({ type: "image/jpeg", quality: 0.8 });
  return { bytes: new Uint8Array(await out.arrayBuffer()), w: cv.width, h: cv.height };
}
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc32 = b => { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
function zipStore(files) {
  // 最简 zip：不压缩（JPEG 本身已压缩）
  const enc = new TextEncoder(), parts = [], central = []; let off = 0;
  const u16 = v => [v & 255, (v >> 8) & 255], u32 = v => [v & 255, (v >> 8) & 255, (v >> 16) & 255, (v >>> 24) & 255];
  for (const f of files) {
    const nm = enc.encode(f.name), c = crc32(f.data), sz = f.data.length;
    const lh = new Uint8Array([...u32(0x04034b50), ...u16(20), ...u16(0), ...u16(0), ...u16(0), ...u16(0x21), ...u32(c), ...u32(sz), ...u32(sz), ...u16(nm.length), ...u16(0)]);
    parts.push(lh, nm, f.data);
    central.push(new Uint8Array([...u32(0x02014b50), ...u16(20), ...u16(20), ...u16(0), ...u16(0), ...u16(0), ...u16(0x21), ...u32(c), ...u32(sz), ...u32(sz), ...u16(nm.length), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(off)]), nm);
    off += lh.length + nm.length + sz;
  }
  const csz = central.reduce((a, b) => a + b.length, 0);
  const end = new Uint8Array([...u32(0x06054b50), ...u16(0), ...u16(0), ...u16(files.length), ...u16(files.length), ...u32(csz), ...u32(off), ...u16(0)]);
  return new Blob([...parts, ...central, end], { type: "application/zip" });
}
async function buildZip() {
  const files = [], credits = {}, fails = []; const ids = Object.keys(FINAL);
  for (let i = 0; i < ids.length; i += 5)
    await Promise.all(ids.slice(i, i + 5).map(async id => {
      try {
        const r = await (await fetch(API + "&titles=" + encodeURIComponent(FINAL[id]) + IIP)).json();
        const p = Object.values(r.query.pages)[0], x = record(id, p, p.imageinfo[0]);
        const j = await toJpeg(sourceUrl(x));
        files.push({ name: "photos/" + id + ".jpg", data: j.bytes });
        credits[id] = { file: x.file.replace("File:", ""), artist: x.artist, lic: x.lic, licurl: x.licurl, page: x.page, w: j.w, h: j.h };
      } catch (e) { fails.push(id + ": " + e); }
    }));
  files.push({ name: "photos/credits.json", data: new TextEncoder().encode(JSON.stringify(credits)) });
  const blob = zipStore(files);
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "plantcon-photos.zip"; document.body.appendChild(a); a.click();
  return { files: files.length, MB: (blob.size / 1048576).toFixed(2), fails };
}
"已载入：先运行 await searchCandidates() 核对候选，或直接 await buildZip() 下载最终照片包";
