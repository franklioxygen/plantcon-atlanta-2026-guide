/* 入门课 · 小测验 · 术语表 · 逛展信息 */
window.LESSONS = [
{n:1,t:"看懂植物的名字",s:"学名、品种名、杂交符号",b:`
<p>展会标签上几乎全是拉丁学名。看懂它，你就能在不同摊位之间比价，也不会把“俗名相同、植物不同”的东西买错。</p>
<div class="spec"><div class="spec-row"><span class="k">学名</span><span><i>Monstera deliciosa</i></span><span class="note">属名（首字母大写）+ 种加词（小写），斜体</span></div>
<div class="spec-row"><span class="k">品种名</span><span><i>Philodendron erubescens</i> 'Pink Princess'</span><span class="note">单引号、正体，人工选育的品种</span></div>
<div class="spec-row"><span class="k">杂交</span><span><i>Anthurium</i> Dark Boy × Self</span><span class="note">× 或 x：前面母本、后面父本；Self 表示自交</span></div>
<div class="spec-row"><span class="k">未定种</span><span><i>Anthurium</i> sp. nov. 'DF'</span><span class="note">sp. = 未鉴定到种；sp. nov. = 新种尚未正式发表</span></div>
<div class="spec-row"><span class="k">近似种</span><span><i>Alocasia</i> aff. <i>cuprea</i></span><span class="note">aff. = 和某个种很像，但不确定</span></div></div>
<h4>实战：拆解一张真实标签</h4>
<p>Anthuriums By Piyush（A5）官网有一个组合：<b>Anthurium (Kunayalense x SP Nov Df) x Dark Boy</b>。读法：先用 kunayalense 和一个未发表新种 “DF” 杂交，再用得到的后代与 'Dark Boy' 杂交。这种多代杂交的种子苗，每一株长相都可能不同。</p>
<h4>商品名 ≠ 学名</h4>
<p>“Mini Monstera” 是崖角藤属 <i>Rhaphidophora tetrasperma</i>，根本不是龟背竹。看到俗名，先问一句学名。</p>
<h4>学名会“搬家”</h4>
<p>分类学研究会把物种移到别的属，但市场改口很慢：Calathea → <i>Goeppertia</i>，Sansevieria → <i>Dracaena</i>，非洲堇 Saintpaulia → <i>Streptocarpus</i>。新旧名字都认识，就不会被搞糊涂。</p>`},
{n:2,t:"植物大类是怎么分的",s:"科、属与“生活方式”",b:`
<p>图鉴里的大类看起来是并列的，其实不在同一个层级。天南星科、竹芋科、兰科、凤梨科是<b>科</b>；球兰、秋海棠是<b>属</b>；食虫植物和多肉则根本不是分类单位，而是一种<b>生活方式</b>，由好几个互不相干的科各自演化出来。弄清这一点，很多“为什么”就说得通了。</p>
<h4>分类的阶梯</h4>
<p>现代植物分类主要依据 DNA 比对，而不只是看长相；开花植物目前采用 2016 年发布的 APG IV 系统。以黑金喜林芋为例，从大到小：</p>
<div class="ladder">
 <div style="--i:0"><span class="k">界</span><b>植物界</b></div>
 <div style="--i:1"><span class="k">大类群</span><b>被子植物（开花植物）› 单子叶植物</b></div>
 <div style="--i:2"><span class="k">目 · -ales</span><b>泽泻目 Alismatales</b></div>
 <div style="--i:3"><span class="k">科 · -aceae</span><b>天南星科 Araceae</b></div>
 <div style="--i:4"><span class="k">属</span><b>喜林芋属 <i>Philodendron</i></b></div>
 <div style="--i:5"><span class="k">种</span><b>黑金喜林芋 <i>Philodendron melanochrysum</i></b></div>
</div>
<p class="tip">看词尾就能判断层级：以 <b>-aceae</b> 结尾的是科（Araceae、Orchidaceae），以 <b>-ales</b> 结尾的是目。单独出现、首字母大写的斜体词是属，比如 <i>Hoya</i>、<i>Begonia</i>。</p>

<h4>展会植物的家谱</h4>
<p>把图鉴里的植物放回植物的家谱，同一个分支上的亲缘更近：</p>
<div class="tree">
 <div class="tb fern-b"><p class="tn">蕨类<em>不开花、不结种子，用孢子繁殖</em></p><p class="tl">水龙骨科：鹿角蕨、泰国蓝蕨 · 铁角蕨科：鸟巢蕨 · 肾蕨科：波士顿蕨</p></div>
 <div class="tb mag-b"><p class="tn">被子植物 · 木兰类<em>既不属于单子叶，也不属于真双子叶</em></p><p class="tl">胡椒目 › 胡椒科：椒草（和黑胡椒同科）</p></div>
 <div class="tb mono-b"><p class="tn">被子植物 · 单子叶植物</p><ul>
  <li><b>泽泻目</b> › <b>天南星科</b>：龟背竹、喜林芋、花烛、观音莲、合果芋、绿萝、粗肋草、金钱树、彩叶芋、魔芋</li>
  <li><b>天门冬目</b> › <b>兰科</b>：所有兰花 · 天门冬科：虎尾兰、龙舌兰、朱蕉 · 阿福花科：芦荟、十二卷</li>
  <li><b>禾本目</b> › <b>凤梨科</b>：空气凤梨、积水凤梨（和菠萝同科）</li>
  <li><b>姜目</b> › <b>竹芋科</b>：竹芋、肖竹芋 · 鹤望兰科：天堂鸟（香蕉、生姜也在这个目）</li>
  <li><b>棕榈目</b> › 棕榈科 · <b>鸭跖草目</b> › 鸭跖草科：吊竹梅</li></ul></div>
 <div class="tb di-b"><p class="tn">被子植物 · 真双子叶植物</p><ul>
  <li><b>石竹目</b> › 仙人掌科 · 茅膏菜科：捕蝇草、茅膏菜 · 猪笼草科：猪笼草</li>
  <li><b>杜鹃花目</b> › 瓶子草科：瓶子草、太阳瓶子草 · 杜鹃花科：云雾林越橘（蓝莓、茶树也在这个目）</li>
  <li><b>唇形目</b> › 狸藻科：捕虫堇、狸藻 · 苦苣苔科：非洲堇、喜荫花</li>
  <li><b>龙胆目</b> › 夹竹桃科：<b>球兰属</b>、爱之蔓、鸡蛋花</li>
  <li><b>葫芦目</b> › 秋海棠科：<b>秋海棠属</b>（和黄瓜、南瓜同一个目）</li>
  <li><b>虎耳草目</b> › 景天科：石莲花 · <b>酢浆草目</b> › 土瓶草科：土瓶草</li>
  <li><b>无患子目</b> › 芸香科：柑橘 · <b>蔷薇目</b> › 荨麻科：镜面草 · <b>锦葵目</b> › 锦葵科：发财树</li></ul></div>
</div>
<p class="tip">几个反直觉的亲戚：捕蝇草和仙人掌同属一个目；瓶子草和蓝莓、茶树同属一个目；球兰、爱之蔓、鸡蛋花同属一个科，折断都会流白色乳汁；天堂鸟是竹芋的远亲。</p>

<h4>单子叶和真双子叶怎么一眼分</h4>
<table class="tbl"><thead><tr><th>看哪里</th><th>单子叶植物</th><th>真双子叶植物</th></tr></thead><tbody>
<tr><td>叶脉</td><td>多为平行脉（竹芋、兰花、凤梨）</td><td>多为网状脉（秋海棠、球兰）</td></tr>
<tr><td>花的部件</td><td>多为 3 或 3 的倍数（兰花：3 萼片 + 3 花瓣）</td><td>多为 4 或 5 的倍数（非洲堇：5 瓣）</td></tr>
<tr><td>种子发芽</td><td>1 片子叶</td><td>2 片子叶</td></tr>
<tr><td>茎</td><td>不形成年轮，很少逐年增粗</td><td>很多能长成木本（柑橘、发财树）</td></tr>
<tr><td>例外</td><td>天南星科大多是网状叶脉，别被叶脉骗了</td><td>椒草属于木兰类，两边都不算</td></tr>
</tbody></table>

<h4>各大类的特点</h4>
<div class="gcards">
<div class="gc" style="--gh:#2F6B45"><h5>天南星科 Araceae</h5><p class="lvl">科 · 泽泻目 · 约 140 属、3,000 多种</p><ul>
 <li>“花”是一片佛焰苞包着一根肉穗花序</li>
 <li>汁液含草酸钙针晶：对猫狗有毒，皮肤敏感的人修剪时戴手套</li>
 <li>属于单子叶植物，但多数是网状叶脉</li>
 <li>多为附生或半附生藤本，靠气根攀爬，根要透气</li></ul>
 <p class="mini-h">认属小抄</p><div class="genus">
 <b>龟背竹属</b><span>成熟叶开窗或羽裂</span>
 <b>喜林芋属</b><span>新叶由鞘叶包着长出</span>
 <b>花烛属</b><span>叶柄顶端有明显的“膝”，叶多为天鹅绒或厚革质</span>
 <b>观音莲属</b><span>箭形或盾形叶，叶脉对比强；有块茎或根茎，冬季可能休眠</span>
 <b>合果芋属</b><span>幼叶箭形，成熟后掌状分裂</span>
 <b>绿萝属 · 藤芋属</b><span>心形叶藤本；藤芋属（缎叶藤）叶面哑光带银斑</span></div>
 <p class="care">养护共性：颗粒介质、明亮散射光、忌积水</p>
 <button class="btn ghost sm" data-gogrp="aroid">在图鉴里看这一类 →</button></div>
<div class="gc" style="--gh:#7A4B8C"><h5>球兰属 <i>Hoya</i></h5><p class="lvl">属 · 夹竹桃科（萝藦亚科）· 数百种</p><ul>
 <li>蜡质、偏肉质的叶，多为藤本</li>
 <li>折断流白色乳汁，这是夹竹桃科的共同特征</li>
 <li>星形花：外层花冠加中央一个小“皇冠”（副花冠）；花粉聚成花粉块，和兰花一样</li>
 <li>花开在可以反复开花的短花梗上</li></ul>
 <p class="care">养护共性：偏干养、明亮光；对猫一般认为无毒</p>
 <button class="btn ghost sm" data-gogrp="hoya">在图鉴里看这一类 →</button></div>
<div class="gc" style="--gh:#A23B5B"><h5>秋海棠属 <i>Begonia</i></h5><p class="lvl">属 · 秋海棠科（全科只有 2 个属）· 约 2,000 种</p><ul>
 <li>开花植物中种数最多的属之一</li>
 <li>叶片两侧不对称，一边大一边小</li>
 <li>同一株上分别开雄花和雌花，果实常带三条翅</li>
 <li>园艺上按长法分四类：竹节型（斑点秋海棠）、根茎型（蟆叶秋海棠）、球根型、须根型（花坛里的四季秋海棠）</li></ul>
 <p class="care">养护共性：微湿不积水，茎叶脆；对猫有毒</p>
 <button class="btn ghost sm" data-gogrp="begonia">在图鉴里看这一类 →</button></div>
<div class="gc" style="--gh:#5B7A2E"><h5>竹芋科 Marantaceae</h5><p class="lvl">科 · 姜目 · 约 30 属、500 多种</p><ul>
 <li>叶柄顶端有一个关节“叶枕”，让叶片昼开夜合（睡眠运动）</li>
 <li>叶脉从中脉向两侧平行斜出，像香蕉叶</li>
 <li>新叶卷成筒状抽出，再慢慢展开</li>
 <li>大部分 Calathea 已在 2012 年改归 Goeppertia 属</li></ul>
 <p class="care">养护共性：用过滤水、保持湿润与高湿度；对猫无毒</p>
 <button class="btn ghost sm" data-gogrp="maranta">在图鉴里看这一类 →</button></div>
<div class="gc" style="--gh:#B0427A"><h5>兰科 Orchidaceae</h5><p class="lvl">科 · 天门冬目 · 约 2.8 万种，与菊科并列最大的植物科</p><ul>
 <li>花两侧对称：3 片萼片 + 3 片花瓣，其中一片特化为唇瓣</li>
 <li>雄蕊和雌蕊合生成一根“合蕊柱”，花粉聚成花粉块</li>
 <li>种子细如尘土、没有养料储备，野外要靠共生真菌才能发芽，所以兰花苗多在实验室的瓶子里培育</li>
 <li>附生兰的气根外面包着一层白色海绵状根被，用来吸水</li></ul>
 <p class="care">养护共性：根要透气；先问清楚喜冷还是喜热</p>
 <button class="btn ghost sm" data-gogrp="orchid">在图鉴里看这一类 →</button></div>
<div class="gc" style="--gh:#3E7C8C"><h5>凤梨科 Bromeliaceae</h5><p class="lvl">科 · 禾本目 · 3,000 多种</p><ul>
 <li>叶片莲座状，很多种围成储水的“杯”</li>
 <li>叶面的鳞片（毛状体）能直接吸水，空气凤梨全靠它</li>
 <li>几乎全部原产美洲，只有 1 种原生于西非</li>
 <li>很多种夜里才打开气孔吸收二氧化碳（CAM 光合），所以耐旱</li></ul>
 <p class="care">养护共性：亮光、通风；对猫一般认为无毒</p>
 <button class="btn ghost sm" data-gogrp="brom">在图鉴里看这一类 →</button></div>
<div class="gc" style="--gh:#A33A2A"><h5>食虫植物</h5><p class="lvl">不是分类单位 · 在不同的科里至少独立演化了 9 次</p><ul>
 <li>共同点：生长在贫瘠、酸性的湿地或岩壁，靠捕虫补充氮和磷，所以不能施肥</li>
 <li>本届展会的食虫植物分属 5 个科：茅膏菜科、猪笼草科（石竹目）、瓶子草科（杜鹃花目）、狸藻科（唇形目）、土瓶草科（酢浆草目）</li>
 <li>四种陷阱：夹子（捕蝇草）、黏液（茅膏菜、捕虫堇）、陷阱瓶（猪笼草、瓶子草、土瓶草）、吸囊（狸藻）</li>
 <li>猪笼草和瓶子草长得像却是远亲，这叫趋同演化</li></ul>
 <p class="care">养护共性：纯水、强光；温带种冬季要休眠</p>
 <button class="btn ghost sm" data-gogrp="carni">在图鉴里看这一类 →</button></div>
<div class="gc" style="--gh:#8A7A2E"><h5>多肉与仙人掌</h5><p class="lvl">不是分类单位 · 分布在几十个科里</p><ul>
 <li>共同点：在叶、茎或根里储水，耐旱怕涝</li>
 <li>仙人掌科的标志是“刺座”：刺和花从一个个毛茸茸的小垫子里长出；大戟科的“像仙人掌”没有刺座，折断会流有毒的白色乳汁</li>
 <li>芦荟、十二卷、龙舌兰、虎尾兰是单子叶植物，石莲花和仙人掌是真双子叶植物：外形相似，祖先完全不同</li>
 <li>仙人掌科几乎全部原产美洲</li></ul>
 <p class="care">养护共性：强光、颗粒土、干透浇透</p>
 <button class="btn ghost sm" data-gogrp="succ">在图鉴里看这一类 →</button></div>
<div class="gc" style="--gh:#2E7A6A"><h5>蕨类</h5><p class="lvl">独立的一大支系 · 约 1 万种</p><ul>
 <li>不开花、不结种子，用叶背的孢子繁殖</li>
 <li>新叶像问号一样卷着展开（拳卷幼叶）</li>
 <li>鹿角蕨有两种叶：贴板的营养叶和分叉的孢子叶</li>
 <li>文竹、天门冬“蕨”不是蕨类，而是天门冬科的开花植物，而且对猫有毒</li></ul>
 <p class="care">养护共性：保持湿润、中低光</p>
 <button class="btn ghost sm" data-gogrp="fern">在图鉴里看这一类 →</button></div>
</div>

<h4>知道“谁和谁是一家”有什么用</h4>
<ul>
<li><b>养法相通</b>：同科同属的植物环境需求接近，学会一种就能类推一片。</li>
<li><b>毒性相通</b>：天南星科几乎都含草酸钙针晶，夹竹桃科多有乳汁。</li>
<li><b>能不能杂交</b>：一般只有同属的种之间才能杂交；兰花是例外，跨属杂交很常见，所以才有 Rlc. 这样的人工属名。</li>
<li><b>名字会变</b>：DNA 研究会重新划分属和科，这就是第 1 课说的“学名搬家”。</li>
</ul>`},
{n:3,t:"读懂一株植物的身体",s:"节、气根、鞘叶、生长习性",b:`
<p>判断一棵植物（尤其是插穗）能不能活、会不会长，靠的是认得这几个部位：</p>
<ul class="parts">
<li><b>节 node</b>：茎上长叶和气根的位置。新芽只会从节上长出来，没有节的插穗不会长成新株（心叶球兰的单叶插就是反例）。</li>
<li><b>节间</b>：两个节之间的茎段。光线不足时节间会被拉长，叫“徒长”。</li>
<li><b>叶柄 petiole</b>：连接叶片和茎的柄。比利喜林的橙色叶柄就是它的身份证。</li>
<li><b>鞘叶 cataphyll</b>：喜林芋新叶外面包着的一片薄叶，新叶展开后鞘叶会干枯脱落，属正常现象。</li>
<li><b>气根</b>：从节上长出、伸向空中的根，用来攀附和吸水。插穗有气根，生根更快。</li>
<li><b>佛焰苞与肉穗花序</b>：天南星科的“花”。红掌鲜红的部分是佛焰苞，中间那根才是真正的花序。</li>
<li><b>假鳞茎</b>：很多兰花茎基部膨大的储水器官（石斛、卡特兰、石豆兰）。蝴蝶兰和万代兰没有。</li>
</ul>
<h4>三种生长习性</h4>
<p><b>攀爬型</b>（黑金喜林、龟背竹）：给苔藓柱，叶越爬越大。<b>匍匐型</b>（荣耀喜林）：茎贴地横走，用浅宽盆。<b>自立型</b>（刚果系喜林）：叶从中心长成一丛，不需要支撑。买之前问清楚它是哪一型，决定你家要准备什么。</p>
<h4>幼叶 ≠ 成熟叶</h4>
<p>合果芋、龟背竹、绿萝的幼叶和成熟叶长得完全不同（异形叶）。展会上的小苗和社交媒体上的大株照片不一样，是正常的。</p>`},
{n:4,t:"斑锦全解",s:"为什么同一种植物价格差十倍",b:`
<p>斑锦就是叶片上缺少叶绿素的白、黄、粉色区域。它是收藏级植物定价的头号因素。分清这几类，你就不会花冤枉钱：</p>
<div class="cols">
<div><h4>嵌合斑（不稳定）</h4><p>植物组织中有一层失去了叶绿素，如白锦龟背 'Albo'、黄锦 'Aurea'、粉公主的粉斑。会<b>返绿</b>，也会出<b>全白叶</b>（不能光合，最终枯死）。</p><p class="tip">选购：看茎。茎上有斑，后面的叶才可能继续有斑。</p></div>
<div><h4>稳定斑</h4><p>能稳定遗传或稳定复制的斑锦：Thai Constellation、三色竹芋、绿萝 'Marble Queen'、心叶喜林 'Brasil'。价格低、风险小，适合新手。</p></div>
<div><h4>假斑与问题斑</h4><p>化学处理的“假粉”（如当年的 'Pink Congo'）几周后褪色；病毒造成的花叶斑、缺素造成的黄化都不是斑锦。</p></div>
</div>
<h4>行话速查</h4>
<p><b>Albo</b> 白斑 · <b>Aurea</b> 黄斑 · <b>Mint</b> 薄荷绿斑 · <b>Marble</b> 大理石碎斑 · <b>Half-moon</b> 半月叶（一半白一半绿）· <b>Sectoral</b> 扇区斑 · <b>Reverted</b> 已返绿 · <b>Splash</b> 银斑（球兰、缎叶藤，不是缺叶绿素，是反光）。</p>
<h4>为什么斑锦贵</h4>
<p>斑锦区域不能光合，植物长得慢；嵌合斑又不能靠组培稳定量产。“长得慢 + 难繁殖”就是贵的原因。反过来，一旦某个斑锦能稳定组培（如 Thai Constellation），价格就会快速下跌。</p>`},
{n:5,t:"规格与繁殖方式",s:"种子苗、组培苗、插穗、盆径",b:`
<table class="tbl"><thead><tr><th>你会看到</th><th>是什么</th><th>优点</th><th>注意</th></tr></thead><tbody>
<tr><td><b>Seedling</b> 种子苗</td><td>播种长出的小苗</td><td>便宜，可能开出惊喜</td><td>“开盲盒”，长相不确定</td></tr>
<tr><td><b>TC</b> 组培苗</td><td>实验室无菌繁殖的克隆苗</td><td>最便宜、无病虫、和母株一样</td><td>刚出瓶需要驯化 1–2 周</td></tr>
<tr><td><b>Plug</b> 穴盘苗</td><td>小格子里的小苗</td><td>价格低</td><td>根系小，别马上换大盆</td></tr>
<tr><td><b>Cutting</b> 插穗</td><td>剪下的一段茎（带节）</td><td>能买到稀有品种</td><td>问清楚 rooted（已生根）还是 unrooted</td></tr>
<tr><td><b>Wet stick</b></td><td>只有节、没有叶的茎段</td><td>最便宜的稀有入门</td><td>需要耐心和高湿环境</td></tr>
<tr><td><b>4" / 6"</b></td><td>盆口直径（英寸）</td><td>4 吋 ≈ 10 cm</td><td>同一品种，盆越大越贵</td></tr>
<tr><td><b>Grower's choice</b></td><td>卖家帮你挑</td><td>通常更便宜</td><td>你挑不了个体</td></tr>
</tbody></table>
<h4>组培苗驯化三步</h4>
<p>① 种进透气介质，套透明袋或盖子保湿；② 每天打开一点通风，持续 1–2 周；③ 看到新叶长出，就完全打开。Green Room Exotics 官网专门卖“驯化套装”。</p>
<h4>到家后别急着换盆</h4>
<p>换环境本身就是压力。先放 1–2 周适应，确认没虫，再换盆。</p>`},
{n:6,t:"养护四件事",s:"光、水、湿度、介质",b:`
<div class="cols">
<div><h4>光</h4><p>决定植物能长多快的最大因素。<b>耐阴</b>：北窗或离窗 2 米；<b>明亮散射光</b>：东窗，或离南窗 1 米；<b>强光</b>：南窗直射、户外或补光灯。看不准时，用手机测光 App 测一下照度（1 英尺烛光 ≈ 10.76 lux）。</p></div>
<div><h4>水</h4><p>原则是<b>浇透，然后等它干到该干的程度</b>。手指插进土里 3–5 cm 判断，或用竹签、掂盆重。冬天植物长得慢，浇水频率要减少。食虫植物例外：坐水盘，只用纯水。</p></div>
<div><h4>湿度</h4><p>冬季开暖气，室内湿度可能降到 30% 以下。天鹅绒花烛、竹芋、孔雀秋海棠会卷叶焦边。加湿器、玻璃柜或把植物放在一起都有效；喷雾只能维持几分钟。</p></div>
<div><h4>介质</h4><p><b>天南星</b>：树皮 + 珍珠岩 + 椰糠/泥炭（颗粒土）；<b>兰花</b>：树皮或水苔；<b>食虫</b>：泥炭 + 珍珠岩，不能有肥；<b>多肉</b>：颗粒占一半以上；<b>半水培</b>：LECA 或无土颗粒（H2old/Hydrorooted 摊位，A4）。</p></div>
</div>
<p class="tip">施肥：稀释、少量多次，冬季减量。想深入了解，可以听 Grow Queen 的 Daniel Mills 讲《Synthetic vs Organic》。</p>`},
{n:7,t:"病虫害与检疫",s:"买回家第一件事",b:`
<table class="tbl"><thead><tr><th>害虫</th><th>怎么认</th><th>最爱谁</th></tr></thead><tbody>
<tr><td><b>蓟马</b> thrips</td><td>叶面银色划痕、黑色小点（粪便）、新叶畸形</td><td>花烛、龟背、喜林</td></tr>
<tr><td><b>红蜘蛛</b> spider mites</td><td>叶背细网、密集黄色小点</td><td>观音莲、竹芋</td></tr>
<tr><td><b>粉介壳虫</b> mealybugs</td><td>叶腋、根部的白色棉团</td><td>球兰、多肉</td></tr>
<tr><td><b>介壳虫</b> scale</td><td>茎叶上褐色的小鼓包，摸起来黏</td><td>柑橘、球兰、兰花</td></tr>
<tr><td><b>小黑飞</b> fungus gnats</td><td>盆土上方乱飞的小黑虫</td><td>介质长期太湿的盆</td></tr>
</tbody></table>
<h4>展会选购 10 秒检查</h4>
<p>① 翻叶背 ② 看叶腋和新叶 ③ 看盆土表面 ④ 轻按茎基，不应松动或软烂 ⑤ 有疑问就问卖家“最近处理过虫吗”。</p>
<h4>到家隔离 2–4 周</h4>
<p>新植物先单独放一个房间，确认没虫再和老植物放一起。综合防治的顺序：物理清洗 → 益虫或捕食螨（DMV Beneficials，G23）→ 杀虫皂、苦楝油 → 系统性药剂。有猫的家庭用药前先查清楚对宠物是否安全。</p>`},
{n:8,t:"价格是怎么来的",s:"看懂行情，花对钱",b:`
<p>决定价格的五个因素：<b>稀有度</b>、<b>斑锦</b>、<b>成熟度与大小</b>、<b>繁殖难度</b>、<b>社交媒体热度</b>。组培会让一个品种在两三年内从几百美元降到几十美元。</p>
<div class="tiers">
<div><span class="pr">$</span><b>入门</b><span>$5–20</span><em>绿萝、合果芋、组培观音莲、捕蝇草、空气凤梨</em></div>
<div><span class="pr">$$</span><b>进阶</b><span>$20–80</span><em>明脉花烛、黑金喜林、原生种兰花、猪笼草</em></div>
<div><span class="pr">$$$</span><b>收藏</b><span>$80–250</span><em>Thai Constellation、稀有球兰、太阳瓶子草</em></div>
<div><span class="pr">$$$$</span><b>高端</b><span>$250–800</span><em>白锦龟背、斑锦杂交花烛</em></div>
<div><span class="pr">$$$$$</span><b>顶级</b><span>$800+</span><em>2025 年一株斑锦花烛在 Palmstreet 成交 $26,000</em></div>
</div>
<h4>展会砍价礼仪</h4>
<p>先逛一圈再买（除非是“一眼爱上”的唯一一株）；买多株时可以问“能不能给个打包价”；很多卖家周日下午会降价清货，但好东西周六上午就没了。官网没有说明现场付款方式，现金和银行卡都带上。</p>`},
{n:9,t:"家里有猫？",s:"宠物安全速查",b:`
<p>本图鉴每个物种都标了对猫的安全等级：<span class="cat safe">一般认为无毒</span> <span class="cat caution">轻度/资料有限</span> <span class="cat toxic">有毒</span>。图鉴页可以一键只看“对猫友好”的植物。</p>
<div class="cols">
<div><h4>要远离的</h4><p><b>整个天南星科</b>（龟背、喜林、花烛、观音莲、绿萝、金钱树）：草酸钙针晶，会造成口腔刺痛、流涎、呕吐。<b>苏铁</b>：剧毒。<b>真百合与萱草</b>：对猫可致肾衰竭，节日花束里常见，千万注意。秋海棠、虎尾兰、芦荟、柑橘、朱蕉也有毒。</p></div>
<div><h4>相对放心的</h4><p>球兰、竹芋、椒草、蝴蝶兰等多数兰花、空气凤梨与积水凤梨、多数食虫植物、鸟巢蕨与波士顿蕨、鹿角蕨、镜面草、发财树、非洲堇、石莲花、十二卷、爱之蔓。</p></div>
</div>
<p class="tip">“无毒”不代表可以随便啃：大量啃食任何植物都可能引起肠胃不适，也要防止猫打翻花盆。毒性资料以 ASPCA 数据库为准；疑似误食请立即联系兽医或 ASPCA 动物中毒热线 (888) 426-4435。</p>`}
];

window.QUIZ = [
{q:"学名词尾是 -aceae 的词，表示哪一级分类？",o:["属","科","目","品种"],a:1,e:"-aceae 结尾是科，如 Araceae（天南星科）；-ales 结尾是目。"},
{q:"球兰和下面哪种植物是同一个科？",o:["爱之蔓","斑点秋海棠","龟背竹","蝴蝶兰"],a:0,e:"球兰、爱之蔓、鸡蛋花都属夹竹桃科，折断都会流白色乳汁。"},
{q:"“食虫植物”在分类上是什么？",o:["一个科","一个属","多个科各自演化出的生活方式","一个目"],a:2,e:"食虫习性在不同的科里至少独立演化了 9 次，所以猪笼草和瓶子草是远亲。"},
{q:"一段插穗要能长成新株，最关键的是有什么？",o:["一片大叶子","至少一个节","很长的茎","花苞"],a:1,e:"新芽只从节上长出。只有叶没有节的“单叶插”可以活很久，但永远不会长大。"},
{q:"标签写着 Philodendron 'Florida Ghost'，买回家新叶白、老叶绿。这说明？",o:["返绿了","嵌合斑锦不稳定","这是它的正常新叶颜色","缺肥"],a:2,e:"Ghost 的白是新叶颜色，会自然转绿，不是斑锦。"},
{q:"同样是白锦龟背，你该优先选哪一株？",o:["叶片全白最漂亮的","茎上也有白斑的","叶最大的","最便宜的"],a:1,e:"嵌合斑看茎：茎上有斑，后代才可能继续有斑；全白叶不能光合。"},
{q:"“TC” 在标签上表示？",o:["热带品种","组织培养苗","泰国原产","两个克隆"],a:1,e:"Tissue Culture，组培苗：便宜、无病虫，出瓶后要驯化。"},
{q:"给捕蝇草浇水应该用？",o:["自来水","加了肥的水","雨水、蒸馏水或 RO 水","矿泉水"],a:2,e:"食虫植物对水中矿物质非常敏感，只用纯水。"},
{q:"12 月在展会买到的 Catasetum 只剩光秃秃的假鳞茎，应该？",o:["马上大量浇水催芽","断水休眠，等春天新根长出再浇","扔掉","施肥"],a:1,e:"瓢唇兰类冬季落叶休眠，此时浇水容易烂。"},
{q:"下面哪种植物对猫一般认为无毒？",o:["粉公主喜林芋","金钱树","锦球兰","斑点秋海棠"],a:2,e:"球兰对猫一般认为无毒；喜林芋、金钱树（天南星科）和秋海棠都有毒。"},
{q:"“Anthurium Dark Boy x Self” 中的 x Self 表示？",o:["自交","斑锦","野生采集","组培"],a:0,e:"x Self = 用同一株自交得到的后代。"},
{q:"国王花烛（veitchii）和女王花烛（warocqueanum）最快的区分方法是？",o:["看价格","国王叶面有横向波纹且有光泽，女王是平整天鹅绒","看花的颜色","看盆的大小"],a:1,e:"一个“搓衣板 + 反光”，一个“平整天鹅绒”。"},
{q:"观音莲叶背出现细网和密集黄点，最可能是？",o:["蓟马","红蜘蛛","缺水","晒伤"],a:1,e:"红蜘蛛最爱观音莲，可冲洗叶背或用捕食螨。"}
];

window.TERMS = [
["Aroid","天南星科植物","龟背、喜林、花烛、观音莲等的统称，展会最大类群。"],
["Albo / Aurea / Mint","白斑 / 黄斑 / 薄荷斑","嵌合斑锦的颜色描述。"],
["Variegated (var.)","斑锦","叶片有缺叶绿素的白、黄、粉色区域。"],
["Chimera","嵌合体","组织中混有不同基因型的细胞层，嵌合斑不稳定。"],
["Half-moon","半月叶","叶片一半白一半绿，好看但多半不稳定。"],
["Reverted","返绿","斑锦消失，长回全绿叶。"],
["Splash","银斑","球兰、缎叶藤的银色斑点，是反光，不是缺叶绿素。"],
["TC (Tissue Culture)","组培苗","实验室无菌克隆繁殖的小苗。"],
["Plug","穴盘苗","种在小格子里的小苗。"],
["Grade A / B","品相等级","组培苗按大小和品相分级。"],
["Acclimation","驯化","让植物逐步适应较低湿度的新环境。"],
["Node","节","茎上长叶与根的位置，新芽只从节长出。"],
["Internode","节间","两节之间的茎，徒长时会变长。"],
["Petiole","叶柄","连接叶片和茎的柄。"],
["Cataphyll","鞘叶","包着喜林芋新叶的薄叶，会自然干枯。"],
["Aerial root","气根","伸向空中的根，用于攀附和吸水。"],
["Fenestration","窗孔","龟背竹叶上的裂口和洞。"],
["Velvet","天鹅绒质感","叶表微小乳突散射光线形成的质感。"],
["Crystalline","结晶感","丝绒叶上细小的闪光点。"],
["Climber / Crawler / Self-heading","攀爬 / 匍匐 / 自立","三种生长习性。"],
["Cutting","插穗","剪下的一段带节的茎。"],
["Rooted / Unrooted","已生根 / 未生根","买插穗一定要问清楚。"],
["Wet stick","湿棍","只有节没有叶的茎段。"],
["Seedling","种子苗","播种长成，个体长相不一。"],
["S1 / F1 / F2","自交一代 / 杂交一代 / 杂交二代","杂交种的世代。"],
["x / ×","杂交","前母本、后父本。"],
["x Self","自交","同一株自己授粉。"],
["sp. / sp. nov.","未定种 / 新种","sp. nov. 指尚未正式发表的新种。"],
["aff.","近似","和某个种很像但不确定。"],
["Clone / OG","无性系 / 原始株","同一株繁殖出的后代；Original Clone 指原始无性系。"],
["Mother plant","母株","用来繁殖的成熟植株。"],
["Grower's choice","卖家挑","由卖家挑个体，通常更便宜。"],
["NOID","无标签","No ID，不知道具体品种。"],
["Unicorn plant","独角兽","极其稀有、可遇不可求的植株。"],
["Chunky mix / Aroid mix","颗粒土","树皮、珍珠岩、椰糠等配成的透气介质。"],
["Sphagnum","水苔","保湿性强的苔藓介质，常用于兰花和生根。"],
["Perlite / Pumice","珍珠岩 / 浮石","增加透气的颗粒。"],
["LECA / Pon","陶粒 / 无土颗粒","半水培常用介质。"],
["Semi-hydro","半水培","植物种在颗粒中，底部保留一层营养液。"],
["Moss pole","苔藓柱","给攀爬型天南星的支撑柱。"],
["Humidity dome","保湿罩","驯化或扦插时用的透明罩。"],
["Grow light","补光灯","室内光照不足时的人工光源。"],
["PPFD","光合光子通量密度","植物实际可用的光量，单位 μmol/m²/s。"],
["Foot-candle (fc)","英尺烛光","照度单位，1 fc ≈ 10.76 lux。"],
["Bright indirect light","明亮散射光","明亮但不直晒，大多数观叶植物的最佳光照。"],
["Dormancy","休眠","冬季停止生长的阶段，食虫、彩叶芋、瓢唇兰都有。"],
["Thrips","蓟马","造成银色划痕的小虫。"],
["Spider mites","红蜘蛛","叶背结细网的螨虫。"],
["Mealybugs","粉介壳虫","白色棉团状的虫。"],
["Scale","介壳虫","褐色小鼓包，分泌黏液。"],
["Fungus gnats","小黑飞","在潮湿盆土中繁殖的小飞虫。"],
["IPM","综合防治","物理、生物、化学结合的病虫害管理。"],
["Beneficials","益虫","捕食害虫的昆虫或螨。"],
["Systemic","系统性药剂","被植物吸收、全株起效的杀虫剂。"],
["Quarantine","隔离","新植物单独放 2–4 周观察。"],
["Pseudobulb","假鳞茎","兰花茎基部膨大的储水器官。"],
["Monopodial / Sympodial","单轴 / 合轴","兰花的两种生长方式。"],
["Keiki","高芽","兰花茎上长出的小植株。"],
["Spike","花梗","兰花抽出的花茎。"],
["Peduncle","花梗（球兰）","球兰的开花短枝，花谢后不要剪。"],
["Spathe / Spadix","佛焰苞 / 肉穗花序","天南星科的“花”。"],
["Mounted","上板","把植物固定在木板或树皮上种植。"],
["Highland / Lowland","高地种 / 低地种","猪笼草按原生海拔区分温度需求。"],
["Bare root","裸根","不带土出售或运输。"],
["Phyto (phytosanitary)","植物检疫证书","国际运输植物需要的证明。"],
["CITES","濒危野生动植物国际贸易公约","兜兰全部列入附录 I。"],
["Whatnot / Palmstreet","直播拍卖平台","很多参展商平时在这两个 App 上卖植物。"],
["Plant locker","植物寄存柜","展会提供的寄存服务，VIP 免费。"]
];

window.PLAN = {
 tickets:[
  ["GA 2-Day Pass","$49 + 税（活动周末涨到 $55）","两天 10:00 入场","可重复进出；周五开幕酒会 1 张饮料券；T 恤（送完即止）；工作坊提前一周线上报名"],
  ["Sunday Single Day","$39 + 税（活动周末涨到 $45）","仅周日 10:00","不可重复进出，不含 T 恤"],
  ["Early Entry","$84 + 税","两天 9:00","GA 全部权益 + 提前 1 小时入场"],
  ["VIP","$249 + 税","两天 8:00","提前 2 小时入场；免费植物寄存柜；工作坊提前三周报名 + $25 工作坊额度；讲座前排座位；托特包与 T 恤"],
  ["Children","$5","单日","14 岁及以下，需随成人票购买"]
 ],
 talks:[
  ["11:00","Kokedama Workshop（苔玉）","Britt Parrish · Botanically Be","90 分钟，收费；12:30 加开一场"],
  ["11:30","Plant Care 101: Yes, You Can Keep It Alive!","Katura Barnes · Terracotta Hotties","零基础最推荐：选植物、选盆、选土、光、水，以及救活病株"],
  ["13:00","Deck the Vines: Holiday Tree Trellis","Zeba Parker · Treleaf","60 分钟，收费，名额有限：攀援植物支撑"],
  ["13:00","Find Your Plant People","The Plant Papi (@theplantpapi)","植物同好社交“速配”"],
  ["13:00","From Plant Lover to Plant Pro","Seed Your Future","园艺职业座谈"],
  ["14:00","植物比赛截止报名","PlantCon","周日 16:00 颁奖"],
  ["14:30","From Surviving to Thriving: The Orchid Reset","Terry Richardson · The Blk Thumb","90 分钟，收费：兰花选择、环境、修剪、介质、换盆"],
  ["14:30","Plant Medicine for Everyday Life","Holly Rodriguez · Suga's Urban Farm","入门草本，收费"],
  ["15:00","Special Guest Panel + Meet & Greet","Atlanta Special Guests","90 分钟"],
  ["16:00","颁奖典礼","PlantCon","植物比赛、参展商奖、Atlanta Local Hero"],
  ["16:30","Plant BINGO","PlantCon staff","25 轮植物知识宾果"],
  ["17:00","Plant Trivia","The Plant Papi (@theplantpapi)","植物知识竞赛，有奖品"],
  ["时间待定","Synthetic vs Organic: The Dirt on Plant Nutrition","Daniel Mills · Grow Queen","肥料与介质，适合想进阶的人"],
  ["时间待定","Winter Botanicals Tea Blending Bar","Karmen Johnson · This Flower Grows","冬季花草茶调配，收费"]
 ],
 routes:[
  {t:"零基础平价线",d:"先买 2–3 株便宜好养的练手",v:["Cozy Corner Plants","Green Room Exotics","Ct plant dads","Luxury Verde","Take a plant; Leave a plant","Georgia Plant Trade and Sales"]},
  {t:"天南星收藏线",d:"斑锦龟背、丝绒花烛、稀有喜林",v:["Thai Exotic Greenery","Toltecplantsllc","The Basements LLC","Art Garden Flowers","Anavrin Botanicals","AROID GREENHOUSES","Dandi plants LLC","Anthuriums By Piyush LLC","Rare Leaf Tropics","Wall of Plants","Plants by Victoria Crystal"]},
  {t:"兰花线",d:"原生种、名种，再加一场兰花工作坊",v:["Ecuagenera","Florida Orchid House","TropicalExotique Asiatic Flora LLC","MUNDIFLORA FARM","Orchid & Willow"]},
  {t:"食虫植物线",d:"本地苗圃 + 专门店",v:["Trapped Nursery","Carnivero","Roots & Rarities","Plantopia Botanicals","My Secret Plant Shop"]},
  {t:"多肉仙人掌线",d:"强光植物，先想好家里有没有南窗",v:["Bare Root Botanicals","Desert to Tropics Nursery","NY City Succulents Inc","Succulantes","The prickly plant lady","Not Your Average Sansevieria","The Succulent Mamiii"]},
  {t:"工具与介质线",d:"买对土和工具，比多买一株植物更值",v:["Grow Queen","H2old LLC","DMV Beneficials","Treleaf.shop","Ruths Garden","Rousseau Plant Care LTD","Propagation Diaries"]},
  {t:"猫友好线",d:"球兰、竹芋、兰花、凤梨、食虫",v:["HerHoyas LLC","Joyous Roots","Luxury Verde","Ecuagenera","The Garden Plant Co","Trapped Nursery","Carnivero"]}
 ],
 checklist:[
  "翻看叶背：有无细网、黄点、白色棉团",
  "看新叶和叶腋：有无畸形、银色划痕",
  "轻按茎基：应坚实，不松动、不软烂",
  "插穗问清楚：rooted 还是 unrooted，有几个节",
  "斑锦看茎：茎上有斑才有延续性",
  "问一句：它在你那里是什么光照和湿度",
  "问一句：最近有没有虫害处理",
  "记下学名和展位号，拍一张标签照片",
  "确认怎么包装：12 月要防冻",
  "到家隔离 2–4 周，1–2 周后再换盆"
 ]
};
