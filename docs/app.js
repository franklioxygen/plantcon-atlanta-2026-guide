(function(){
const $=(s,r)=>(r||document).querySelector(s), $$=(s,r)=>Array.from((r||document).querySelectorAll(s));
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const store={get(k,d){try{const v=localStorage.getItem("pc26-"+k);return v==null?d:JSON.parse(v);}catch(e){return d;}},set(k,v){try{localStorage.setItem("pc26-"+k,JSON.stringify(v));}catch(e){}}};

const G=window.GROUPS, SP=window.SPECIES, CATS=window.VENDOR_CATS, TAGN=window.VENDOR_TAGS;
const GENERAL=new Set(["Orc","Carn","Suc","Aroid","Trop","Bro","Fern"]);
const V=window.VENDORS.map((a,i)=>({i,c:a[0],n:a[1],b:a[2],l:a[3],w:a[4],ig:a[5],tags:a[6]?a[6].split(" "):[],src:a[7],note:a[8]}));
V.forEach(v=>{v.ga=/,\s*(GA|Ga|Georgia)\b/.test(v.l);v.row=(v.b.match(/^[A-Z]+/)||["?"])[0];v.first=v.b.split(",")[0].trim();});
const VBYNAME={};V.forEach(v=>VBYNAME[v.n]=v);
SP.forEach((s,i)=>{s.no=i+1;const m=(s.m||[]).filter(t=>t!=="Var"&&t!=="TC");const ex=[],gen=[];
  V.forEach(v=>{if(v.c!=="P")return;const hit=m.filter(t=>v.tags.includes(t));if(!hit.length)return;(hit.some(t=>!GENERAL.has(t))?ex:gen).push(v);});
  s.vx=ex;s.vg=gen;s.vcount=ex.length+gen.length;
  s.hay=(s.zh+" "+s.la+" "+s.en+" "+(s.tags||[]).join(" ")+" "+G[s.g].zh+" "+G[s.g].la).toLowerCase();});
V.forEach(v=>{v.sp=SP.filter(s=>s.vx.includes(v)).map(s=>s.id);v.hay=(v.n+" "+v.l+" "+v.b+" "+v.note+" "+v.tags.map(t=>TAGN[t]||t).join(" ")).toLowerCase();});
const SPI={};SP.forEach(s=>SPI[s.id]=s);
const DIFF=["","入门","容易","进阶","挑战","专家"], LIGHT=["","耐阴","明亮散射光","强光"], CATL={safe:"对猫友好",caution:"需留意",toxic:"对猫有毒"};
const acc=n=>"PC26-"+String(n).padStart(3,"0");
const dots=d=>`<span class="dots" aria-label="难度 ${d}/5">${[1,2,3,4,5].map(i=>`<i class="${i<=d?"on":""}"></i>`).join("")}</span>`;
const lightIcon=L=>`<svg class="sun" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="3.2" fill="${L>=2?"currentColor":"none"}" stroke="currentColor" stroke-width="1.4"/>${L>=3?[0,45,90,135,180,225,270,315].map(a=>`<path d="M${(8+Math.cos(a*Math.PI/180)*5.2).toFixed(1)} ${(8+Math.sin(a*Math.PI/180)*5.2).toFixed(1)}L${(8+Math.cos(a*Math.PI/180)*7).toFixed(1)} ${(8+Math.sin(a*Math.PI/180)*7).toFixed(1)}" stroke="currentColor" stroke-width="1.3"/>`).join(""):""}</svg>`;
const ART={};const art=s=>ART[s.id]||(ART[s.id]=window.drawSpecimen(s));
const PH=window.PHOTOS||{};
const pic=(s,eager)=>PH[s.id]?`<img src="photos/${s.id}.jpg" alt="${esc(s.zh)}（${esc(s.la)}）照片" ${eager?"":"loading=\"lazy\" "}decoding="async">`:art(s);
const credit=s=>{const p=PH[s.id];if(!p)return "";return `${p.n?`<span class="pnote">${esc(p.n)}</span>`:""}照片：${esc(p.a)} · ${p.lu?`<a href="${esc(p.lu)}" target="_blank" rel="noopener">${esc(p.l)}</a>`:esc(p.l)} · <a href="${esc(p.p)}" target="_blank" rel="noopener">Wikimedia Commons</a>`;};

/* ───────── state ───────── */
const st={view:"atlas",grp:"all",lvl:"all",cat:false,sort:"group",tag:"",q:"",vq:"",vcat:"P",vtag:"",vga:false,vrow:false,lesson:store.get("lesson",1)};
let done=store.get("done",[]), checks=store.get("checks",[]);

/* ───────── atlas ───────── */
function filtered(){
  let a=SP.filter(s=>(st.grp==="all"||s.g===st.grp)&&(!st.cat||s.cat==="safe")&&(!st.tag||(s.tags||[]).includes(st.tag))
    &&(st.lvl==="all"||(st.lvl==="1"&&s.d<=1)||(st.lvl==="2"&&s.d>=2&&s.d<=3)||(st.lvl==="3"&&s.d>=4))
    &&(!st.q||s.hay.includes(st.q.toLowerCase())));
  const order=Object.keys(G);
  if(st.sort==="diff")a.sort((x,y)=>x.d-y.d||x.p-y.p);
  else if(st.sort==="price")a.sort((x,y)=>x.p-y.p||x.d-y.d);
  else if(st.sort==="booths")a.sort((x,y)=>y.vcount-x.vcount);
  else a.sort((x,y)=>order.indexOf(x.g)-order.indexOf(y.g)||x.no-y.no);
  return a;
}
function renderAtlasControls(){
  const counts={};SP.forEach(s=>counts[s.g]=(counts[s.g]||0)+1);
  $("#grp").innerHTML=[`<button class="chip ${st.grp==="all"?"on":""}" data-grp="all">全部 <b>${SP.length}</b></button>`].concat(Object.keys(G).map(k=>`<button class="chip ${st.grp===k?"on":""}" data-grp="${k}"><i class="dot" style="background:${G[k].hue}"></i>${G[k].zh} <b>${counts[k]}</b></button>`)).join("");
  const tags=["新手友好","斑锦","收藏级","开花","垂吊","攀爬","耐阴","玻璃柜","冬季休眠","户外可种","食虫"];
  $("#tagsel").innerHTML=`<option value="">任意特征</option>`+tags.map(t=>`<option ${st.tag===t?"selected":""}>${t}</option>`).join("");
  $$("#lvl button").forEach(b=>b.classList.toggle("on",b.dataset.lvl===st.lvl));
  $("#catsafe").setAttribute("aria-pressed",st.cat?"true":"false");
  $("#sortsel").value=st.sort;
}
function card(s){
  const g=G[s.g];
  return `<article class="card" style="--gh:${g.hue}"><button class="card-btn" data-sp="${s.id}" aria-label="查看 ${esc(s.zh)} 详情">
  <div class="sheet">${pic(s)}<span class="acc">${acc(s.no)}</span><span class="fam">${esc(g.la.split(" ·")[0].split(" ")[0])}</span></div>
  <div class="cb"><h3>${esc(s.zh)}</h3><p class="latin">${esc(s.la)}</p>
  <div class="meta">${dots(s.d)}<span class="lv">${DIFF[s.d]}</span><span class="pr" title="价格档">${"$".repeat(s.p)}<s>${"$".repeat(5-s.p)}</s></span><span class="li" title="${LIGHT[s.L]}">${lightIcon(s.L)}${["","耐阴","散射光","强光"][s.L]}</span><span class="cat ${s.cat}">${CATL[s.cat]}</span></div>
  <p class="hook">${esc(s.id_)}</p>
  <p class="where">${s.vcount?`相关卖家 <b>${s.vcount}</b> 家${s.vx.length?` · 如展位 <span class="mono">${esc(s.vx[0].first)}</span>`:""}`:"综合观叶摊位现场找"}</p></div></button></article>`;
}
function renderAtlas(){
  renderAtlasControls();
  const a=filtered();
  const gi=st.grp!=="all"?G[st.grp]:null;
  $("#ginfo").innerHTML=gi?`<div class="ginfo" style="--gh:${gi.hue}"><div><p class="eyebrow">${esc(gi.la)}</p><h2>${esc(gi.zh)}</h2><p>${esc(gi.intro)}</p></div><ul>${gi.keys.map(k=>`<li>${esc(k)}</li>`).join("")}</ul></div>`:"";
  $("#acount").textContent=`显示 ${a.length} / ${SP.length} 个物种`+(st.q?`（搜索“${st.q}”）`:"");
  $("#grid").innerHTML=a.length?a.map(card).join(""):`<p class="empty">没有符合条件的物种。试试清除筛选，或换个关键词（中文名、学名、英文名都可以）。<button class="btn" id="clearf">清除筛选</button></p>`;
}

/* ───────── species detail ───────── */
let curList=[],curIdx=-1;
function openSp(id){
  const s=SPI[id];if(!s)return;curList=filtered().map(x=>x.id);if(!curList.includes(id))curList=SP.map(x=>x.id);curIdx=curList.indexOf(id);
  const g=G[s.g];
  const vchip=(v,gen)=>`<button class="vchip ${gen?"gen":""}" data-v="${v.i}"><span class="mono">${esc(v.first)}</span>${esc(v.n)}${v.ga?`<em>GA</em>`:""}</button>`;
  $("#dlg-body").innerHTML=`<div class="d-grid" style="--gh:${g.hue}">
  <div class="d-sheet"><figure class="photo"><div class="sheet big">${pic(s,1)}</div><figcaption>${credit(s)}</figcaption></figure>
   <div class="label"><p class="lh">PLANTCON ATLANTA 2026 · 展会植物图鉴</p>
   <dl><dt>编号</dt><dd class="mono">${acc(s.no)}</dd><dt>类群</dt><dd>${esc(g.zh)} · <i>${esc(g.la)}</i></dd><dt>学名</dt><dd><i>${esc(s.la)}</i></dd><dt>英文/俗名</dt><dd>${esc(s.en)}</dd></dl></div></div>
  <div class="d-text"><p class="eyebrow">${esc(g.zh)}</p><h2 id="dlg-title">${esc(s.zh)}</h2><p class="latin big">${esc(s.la)}</p>
   <div class="facts">
    <div><span>难度</span><b>${dots(s.d)} ${DIFF[s.d]}</b></div>
    <div><span>参考价</span><b>${"$".repeat(s.p)}</b><small>${esc(s.pt)}</small></div>
    <div><span>光照</span><b>${lightIcon(s.L)} ${LIGHT[s.L]}</b></div>
    <div><span>浇水</span><b>${esc(s.W)}</b></div>
    <div><span>湿度</span><b>${esc(s.H)}</b></div>
    <div><span>温度</span><b>${esc(s.T)}</b></div>
    <div class="catbox ${s.cat}"><span>对猫</span><b>${CATL[s.cat]}</b></div>
   </div>
   <section><h4><span class="n">1</span>怎么认</h4><p>${esc(s.id_)}</p></section>
   <section><h4><span class="n">2</span>怎么养</h4><p>${esc(s.care)}</p></section>
   <section><h4><span class="n">3</span>怎么挑</h4><p>${esc(s.buy)}</p></section>
   <section class="adv"><h4><span class="n">+</span>进阶一点</h4><p>${esc(s.adv)}</p></section>
   ${(s.tags||[]).length?`<p class="tagrow">${s.tags.map(t=>`<span class="tg">${esc(t)}</span>`).join("")}</p>`:""}
   <section class="where2"><h4>在哪个展位找</h4>${s.vcount?`${s.vx.length?`<p class="sub">官网或店名明确列出该类植物：</p><div class="vchips">${s.vx.map(v=>vchip(v)).join("")}</div>`:""}${s.vg.length?`<p class="sub">综合卖家（卖“兰花/多肉/稀有天南星”等大类，不保证有这一种）：</p><div class="vchips">${s.vg.map(v=>vchip(v,1)).join("")}</div>`:""}`:`<p class="sub">没有卖家在官网明确列出它，综合观叶摊位常能遇到，现场问一句学名。</p>`}</section>
  </div></div>`;
  $("#dlg-pos").textContent=`${curIdx+1} / ${curList.length}`;
  const d=$("#dlg");d.hidden=false;document.body.classList.add("noscroll");$("#dlg-close").focus();
  if(location.hash!=="#sp-"+id)history.replaceState(null,"","#sp-"+id);
}
function closeDlg(){const d=$("#dlg");if(d.hidden)return;d.hidden=true;document.body.classList.remove("noscroll");if(location.hash.startsWith("#sp-"))history.replaceState(null,"","#atlas");}
function step(k){if(curIdx<0)return;curIdx=(curIdx+k+curList.length)%curList.length;openSp(curList[curIdx]);}

/* ───────── vendors ───────── */
function vfilter(){
  let a=V.filter(v=>(st.vcat==="all"||v.c===st.vcat)&&(!st.vtag||v.tags.includes(st.vtag))&&(!st.vga||v.ga)&&(!st.vq||v.hay.includes(st.vq.toLowerCase())));
  const key=b=>{const m=b.match(/^([A-Z]+)(\d+)/);return m?[m[1],+m[2]]:["~",0];};
  if(st.vrow)a.sort((x,y)=>{const p=key(x.first),q=key(y.first);return p[0]<q[0]?-1:p[0]>q[0]?1:p[1]-q[1];});
  return a;
}
function vcard(v){
  const links=[v.w?`<a href="https://${esc(v.w)}" target="_blank" rel="noopener">网站</a>`:"",v.ig?`<a href="https://www.instagram.com/${esc(v.ig)}" target="_blank" rel="noopener">Instagram</a>`:""].filter(Boolean).join("");
  const sp=v.sp.slice(0,6).map(id=>`<button class="spl" data-sp="${id}">${esc(SPI[id].zh)}</button>`).join("");
  return `<article class="vcard" id="v-${v.i}"><div class="vtop"><span class="booth mono">${esc(v.b)}</span>${v.ga?`<span class="ga">佐治亚本地</span>`:""}<span class="src ${v.src||"none"}">${v.src==="s"?"官网查证":v.src==="n"?"据店名推断":"未知"}</span></div>
  <h3>${esc(v.n)}</h3><p class="loc">${esc(v.l)} · ${CATS[v.c].zh}</p><p class="note">${esc(v.note)}</p>
  ${v.tags.length?`<p class="vtags">${v.tags.map(t=>`<button class="vt" data-vt="${t}">${esc(TAGN[t]||t)}</button>`).join("")}</p>`:""}
  ${sp?`<p class="vsp"><span>图鉴：</span>${sp}${v.sp.length>6?`<em>+${v.sp.length-6}</em>`:""}</p>`:""}
  ${links?`<p class="links">${links}</p>`:""}</article>`;
}
function renderVendors(){
  const cc={all:V.length};V.forEach(v=>cc[v.c]=(cc[v.c]||0)+1);
  $("#vcat").innerHTML=["all","P","S","T","C","N","O"].map(k=>`<button class="chip ${st.vcat===k?"on":""}" data-vcat="${k}">${k==="all"?"全部":CATS[k].zh} <b>${cc[k]||0}</b></button>`).join("");
  const used={};V.forEach(v=>v.tags.forEach(t=>used[t]=(used[t]||0)+1));
  $("#vtagsel").innerHTML=`<option value="">任意主营</option>`+Object.keys(TAGN).filter(t=>used[t]).map(t=>`<option value="${t}" ${st.vtag===t?"selected":""}>${TAGN[t]}（${used[t]}）</option>`).join("");
  $("#vga").setAttribute("aria-pressed",st.vga?"true":"false");$("#vrow").setAttribute("aria-pressed",st.vrow?"true":"false");
  const a=vfilter();
  $("#vcount").textContent=`显示 ${a.length} / ${V.length} 家参展商`;
  let html="";
  if(st.vrow){let cur="";a.forEach(v=>{if(v.row!==cur){if(cur)html+="</div>";cur=v.row;html+=`<h3 class="rowh"><span class="mono">${cur}</span> 排</h3><div class="vgrid">`;}html+=vcard(v);});if(cur)html+="</div>";}
  else html=`<div class="vgrid">${a.map(vcard).join("")}</div>`;
  $("#vlist").innerHTML=a.length?html:`<p class="empty">没有符合条件的参展商。<button class="btn" id="vclear">清除筛选</button></p>`;
}
function gotoVendor(i){
  st.vcat="all";st.vtag="";st.vga=false;st.vq="";$("#vq").value="";closeDlg();show("vendors");
  requestAnimationFrame(()=>{const el=$("#v-"+i);if(el){el.scrollIntoView({block:"center"});el.classList.add("flash");setTimeout(()=>el.classList.remove("flash"),1800);}});
}

/* ───────── lessons ───────── */
function renderLessons(){
  const L=window.LESSONS;
  $("#lnav").innerHTML=L.map(l=>`<button class="lbtn ${st.lesson===l.n?"on":""}" data-l="${l.n}"><span class="ln ${done.includes(l.n)?"ok":""}">${done.includes(l.n)?"✓":l.n}</span><span><b>${esc(l.t)}</b><small>${esc(l.s)}</small></span></button>`).join("")+`<button class="lbtn ${st.lesson===99?"on":""}" data-l="99"><span class="ln">?</span><span><b>小测验</b><small>${window.QUIZ.length} 题，检验一下</small></span></button>`;
  $("#lprog").style.setProperty("--p",(done.length/L.length*100)+"%");$("#lprogt").textContent=`已读 ${done.length}/${L.length}`;
  if(st.lesson===99){renderQuiz();return;}
  const l=L.find(x=>x.n===st.lesson)||L[0];
  $("#lbody").innerHTML=`<p class="eyebrow">第 ${l.n} 课 · ${esc(l.s)}</p><h2>${esc(l.t)}</h2><div class="prose">${l.b}</div>
  <div class="lfoot"><button class="btn ${done.includes(l.n)?"ghost":""}" id="ldone">${done.includes(l.n)?"已读 ✓":"标记为已读"}</button>${l.n<L.length?`<button class="btn" data-l="${l.n+1}">下一课：${esc(L[l.n].t)} →</button>`:`<button class="btn" data-l="99">去做小测验 →</button>`}</div>`;
}
let qa={};
function renderQuiz(){
  const Q=window.QUIZ;const score=Object.keys(qa).filter(k=>qa[k]===Q[k].a).length;
  $("#lbody").innerHTML=`<p class="eyebrow">学完 ${window.LESSONS.length} 课后</p><h2>小测验</h2><p class="sub">点选答案会立即显示解析。全部答对，说明你已经具备逛展所需的中级认知。</p>
  <ol class="quiz">${Q.map((q,i)=>`<li><p class="qq">${esc(q.q)}</p><div class="opts">${q.o.map((o,j)=>{const picked=qa[i]===j,ans=qa[i]!=null;return `<button class="opt ${ans&&j===q.a?"right":""} ${picked&&j!==q.a?"wrong":""}" data-q="${i}" data-o="${j}" ${ans?"disabled":""}>${esc(o)}</button>`;}).join("")}</div>${qa[i]!=null?`<p class="qe ${qa[i]===q.a?"ok":"no"}">${qa[i]===q.a?"答对了。":"再想想："}${esc(q.e)}</p>`:""}</li>`).join("")}</ol>
  <div class="qscore"><b>${score}</b> / ${Q.length} 正确 · 已答 ${Object.keys(qa).length} 题 <button class="btn ghost" id="qreset">重新作答</button></div>`;
}

/* ───────── plan ───────── */
function renderPlan(){
  const P=window.PLAN;
  $("#tickets").innerHTML=P.tickets.map(t=>`<tr><th>${esc(t[0])}</th><td class="num">${esc(t[1])}</td><td>${esc(t[2])}</td><td>${esc(t[3])}</td></tr>`).join("");
  $("#talks").innerHTML=P.talks.map(t=>`<tr><td class="mono">${esc(t[0])}</td><th>${esc(t[1])}</th><td>${esc(t[2])}</td><td>${esc(t[3])}</td></tr>`).join("");
  $("#routes").innerHTML=P.routes.map(r=>`<div class="route"><h4>${esc(r.t)}</h4><p>${esc(r.d)}</p><div class="vchips">${r.v.map(n=>{const v=VBYNAME[n];return v?`<button class="vchip" data-v="${v.i}"><span class="mono">${esc(v.first)}</span>${esc(v.n)}</button>`:"";}).join("")}</div></div>`).join("");
  $("#checklist").innerHTML=P.checklist.map((c,i)=>`<li><label><input type="checkbox" id="ck${i}" data-ck="${i}" ${checks.includes(i)?"checked":""}> <span>${esc(c)}</span></label></li>`).join("");
  const firsts=["hoy-car","mar-leu","orc-pha","til","haw","dro","pep","pil"];
  $("#firsts").innerHTML=firsts.map(id=>{const s=SPI[id];return `<button class="mini" data-sp="${id}"><span class="ms">${pic(s)}</span><span><b>${esc(s.zh)}</b><small>${esc(s.pt.split("（")[0])}</small></span></button>`;}).join("");
}

/* ───────── terms ───────── */
function renderTerms(){
  const q=($("#tq").value||"").toLowerCase();
  const T=window.TERMS.filter(t=>!q||(t.join(" ").toLowerCase().includes(q)));
  $("#tlist").innerHTML=T.length?T.map(t=>`<div class="term"><dt><span class="en">${esc(t[0])}</span><span class="zh">${esc(t[1])}</span></dt><dd>${esc(t[2])}</dd></div>`).join(""):`<p class="empty">没找到这个词。可以试试中文或英文的一部分。</p>`;
  $("#tcount").textContent=`${T.length} 个词条`;
}

/* ───────── global search ───────── */
function gsearch(q){
  const box=$("#gres");q=q.trim().toLowerCase();if(!q){box.hidden=true;return;}
  const sp=SP.filter(s=>s.hay.includes(q)).slice(0,6),vs=V.filter(v=>v.hay.includes(q)).slice(0,5),ts=window.TERMS.filter(t=>t.join(" ").toLowerCase().includes(q)).slice(0,4);
  if(!sp.length&&!vs.length&&!ts.length){box.innerHTML=`<p class="none">没有结果。试试中文名、学名、英文名或展位号（如 C11）。</p>`;box.hidden=false;return;}
  box.innerHTML=(sp.length?`<p class="gh">图鉴</p>`+sp.map(s=>`<button class="gr" data-sp="${s.id}"><span class="ms">${pic(s)}</span><span><b>${esc(s.zh)}</b><i>${esc(s.la)}</i></span></button>`).join(""):"")
   +(vs.length?`<p class="gh">参展商</p>`+vs.map(v=>`<button class="gr" data-v="${v.i}"><span class="mono bx">${esc(v.first)}</span><span><b>${esc(v.n)}</b><i>${esc(v.note)}</i></span></button>`).join(""):"")
   +(ts.length?`<p class="gh">术语</p>`+ts.map(t=>`<button class="gr" data-term="${esc(t[0])}"><span class="mono bx">Aa</span><span><b>${esc(t[0])} · ${esc(t[1])}</b><i>${esc(t[2])}</i></span></button>`).join(""):"")
   +`<button class="gr all" data-allsp="${esc(q)}">在图鉴中筛选“${esc(q)}” →</button>`;
  box.hidden=false;
}

/* ───────── routing ───────── */
const VIEWS=["atlas","lessons","vendors","plan","terms"];
function show(v){
  st.view=v;VIEWS.forEach(x=>{$("#view-"+x).hidden=x!==v;});$$(".tab").forEach(t=>t.setAttribute("aria-current",t.dataset.view===v?"page":"false"));
  if(v==="atlas")renderAtlas();if(v==="vendors")renderVendors();if(v==="lessons")renderLessons();if(v==="plan")renderPlan();if(v==="terms")renderTerms();
  if(location.hash!=="#"+v&&!location.hash.startsWith("#sp-"))history.replaceState(null,"","#"+v);
}
function route(){
  const h=location.hash.slice(1);
  if(h.startsWith("sp-")&&SPI[h.slice(3)]){show("atlas");openSp(h.slice(3));return;}
  show(VIEWS.includes(h)?h:"atlas");
}

/* ───────── events ───────── */
document.addEventListener("click",e=>{
  const t=e.target.closest("button,a");if(!t)return;
  if(t.dataset.view){e.preventDefault();closeDlg();show(t.dataset.view);window.scrollTo({top:$("#views").offsetTop-70});return;}
  if(t.dataset.sp){$("#gres").hidden=true;if(st.view!=="atlas")show("atlas");openSp(t.dataset.sp);return;}
  if(t.dataset.v!=null&&t.dataset.v!==""){$("#gres").hidden=true;gotoVendor(+t.dataset.v);return;}
  if(t.dataset.term){$("#gres").hidden=true;show("terms");$("#tq").value=t.dataset.term;renderTerms();return;}
  if(t.dataset.allsp!=null){$("#gres").hidden=true;st.q=t.dataset.allsp;$("#aq").value=st.q;show("atlas");return;}
  if(t.dataset.grp){st.grp=t.dataset.grp;renderAtlas();return;}
  if(t.dataset.gogrp){Object.assign(st,{grp:t.dataset.gogrp,lvl:"all",cat:false,tag:"",q:""});$("#aq").value="";show("atlas");window.scrollTo({top:$("#views").offsetTop-70});return;}
  if(t.dataset.lvl){st.lvl=t.dataset.lvl;renderAtlas();return;}
  if(t.id==="catsafe"){st.cat=!st.cat;renderAtlas();return;}
  if(t.id==="clearf"){Object.assign(st,{grp:"all",lvl:"all",cat:false,tag:"",q:""});$("#aq").value="";renderAtlas();return;}
  if(t.dataset.vcat){st.vcat=t.dataset.vcat;renderVendors();return;}
  if(t.dataset.vt){st.vtag=t.dataset.vt;st.vcat="all";renderVendors();return;}
  if(t.id==="vga"){st.vga=!st.vga;renderVendors();return;}
  if(t.id==="vrow"){st.vrow=!st.vrow;renderVendors();return;}
  if(t.id==="vclear"){Object.assign(st,{vcat:"all",vtag:"",vga:false,vq:""});$("#vq").value="";renderVendors();return;}
  if(t.dataset.l){st.lesson=+t.dataset.l;store.set("lesson",st.lesson);renderLessons();$("#lbody").scrollIntoView({block:"start"});return;}
  if(t.id==="ldone"){if(!done.includes(st.lesson))done.push(st.lesson);else done=done.filter(x=>x!==st.lesson);store.set("done",done);renderLessons();return;}
  if(t.dataset.q!=null){qa[+t.dataset.q]=+t.dataset.o;renderQuiz();return;}
  if(t.id==="qreset"){qa={};renderQuiz();return;}
  if(t.id==="dlg-close"||t.id==="dlg-bg"){closeDlg();return;}
  if(t.id==="dlg-prev"){step(-1);return;}if(t.id==="dlg-next"){step(1);return;}
});
$("#dlg-bg").addEventListener("click",closeDlg);
document.addEventListener("keydown",e=>{if(!$("#dlg").hidden){if(e.key==="Escape")closeDlg();if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1);}else if(e.key==="Escape")$("#gres").hidden=true;
  if(e.key==="/"&&document.activeElement.tagName!=="INPUT"){e.preventDefault();$("#gq").focus();}});
document.addEventListener("change",e=>{const t=e.target;
  if(t.id==="tagsel"){st.tag=t.value;renderAtlas();}if(t.id==="sortsel"){st.sort=t.value;renderAtlas();}if(t.id==="vtagsel"){st.vtag=t.value;if(t.value)st.vcat="all";renderVendors();}
  if(t.dataset.ck!=null){const i=+t.dataset.ck;checks=t.checked?[...new Set([...checks,i])]:checks.filter(x=>x!==i);store.set("checks",checks);}});
let tm;$("#gq").addEventListener("input",e=>{clearTimeout(tm);tm=setTimeout(()=>gsearch(e.target.value),90);});
$("#gq").addEventListener("keydown",e=>{if(e.key==="Enter"){const q=e.target.value.trim();if(q){st.q=q;$("#aq").value=q;$("#gres").hidden=true;show("atlas");}}});
document.addEventListener("click",e=>{if(!e.target.closest(".gsearch"))$("#gres").hidden=true;},true);
$("#aq").addEventListener("input",e=>{st.q=e.target.value.trim();renderAtlas();});
$("#vq").addEventListener("input",e=>{st.vq=e.target.value.trim();renderVendors();});
$("#tq").addEventListener("input",renderTerms);
window.addEventListener("hashchange",route);

/* hero specimens */
$("#hero-strip").innerHTML=["mon-thai","nep","orc-ple","hoy-car","sar"].map(id=>{const s=SPI[id];return `<button class="hs" data-sp="${id}" aria-label="${esc(s.zh)}"><span class="sheet">${pic(s,1)}</span><span class="hl"><span class="mono">${acc(s.no)}</span>${esc(s.zh)}</span></button>`;}).join("");
$("#stat-sp").textContent=SP.length;$("#stat-v").textContent=V.length;$("#stat-p").textContent=V.filter(v=>v.c==="P").length;$("#stat-ga").textContent=V.filter(v=>v.ga).length;
const cr=$("#credits");if(cr)cr.innerHTML=SP.filter(s=>PH[s.id]).map(s=>{const p=PH[s.id];return `<li><button class="spl" data-sp="${s.id}">${esc(s.zh)}</button> <a href="${esc(p.p)}" target="_blank" rel="noopener">${esc(p.f)}</a> · ${esc(p.a)} · ${p.lu?`<a href="${esc(p.lu)}" target="_blank" rel="noopener">${esc(p.l)}</a>`:esc(p.l)}</li>`;}).join("");
route();
})();
