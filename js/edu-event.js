const DATA = [
  { id:'cert', name:'자격증', groups:[
    { name:'IT', items:[{ n:'빅데이터분석기사', d:'빅데이터분석기사 필기·실기 자격 취득 대비' }] },
    { name:'OA', items:[{ n:'ITQ(엑셀)', d:'ITQ 엑셀 자격 취득 대비 (2024 개정)' },{ n:'ITQ(워드)', d:'ITQ 워드 자격 취득 대비 (2024 개정)' },{ n:'ITQ(파워포인트)', d:'ITQ 파워포인트 자격 취득 대비 (2024 개정)' },{ n:'사무자동화산업기사', d:'사무자동화산업기사 필기·실기 대비 (2026)' }] },
    { name:'디자인', items:[{ n:'GTQ(포토샵) 1급', d:'GTQ 포토샵 1급 기출문제 대비 (2025)' },{ n:'GTQ(포토샵) 2급', d:'GTQ 포토샵 2급(3급 포함) 기출문제 대비 (2025)' },{ n:'GTQ(포토샵) 3급', d:'GTQ 포토샵 3급 기출문제 대비 (2025)' },{ n:'GTQi(일러스트레이터) 1급', d:'GTQi 일러스트레이터 1급 기출문제 대비 (2025)' },{ n:'GTQi(일러스트레이터) 2급', d:'GTQi 일러스트레이터 2급(3급 포함) 기출 대비 (2025)' },{ n:'GTQi(일러스트레이터) 3급', d:'GTQi 일러스트레이터 3급 기출문제 대비 (2025)' },{ n:'GTQid(인디자인) 1급', d:'GTQid 인디자인 1급 기출문제 대비 (2025)' },{ n:'GTQid(인디자인) 2급', d:'GTQid 인디자인 2급 기출문제 대비 (2025)' }] },
    { name:'서비스', items:[{ n:'SMAT 모듈A', d:'SMAT(서비스경영능력) 모듈A 1주 완성 핵심요약·해설' },{ n:'SMAT 모듈B', d:'SMAT 모듈B 1주 완성 핵심요약·해설' },{ n:'SMAT 모듈C', d:'SMAT 모듈C 1주 완성 핵심요약·해설' }] }
  ]},
  { id:'job', name:'취업 전략', groups:[
    { name:'공공기관', items:[{ n:'자기소개서·이력서', d:'NCS 기반 공공기관 자소서·면접 대비' },{ n:'필기시험(NCS)', d:'NCS 통합기본서 주요영역·기출유형 문제풀이' },{ n:'필기시험(일반상식)', d:'공기업 일반상식 최신 기출 대비 (2026)' }] },
    { name:'공통', items:[{ n:'면접(답변 전략)', d:'실전 면접 답변·태도·전략과 면접 역량 강화' },{ n:'면접(태도)', d:'매력적인 목소리 등 면접 태도·전달력 강화' },{ n:'자기소개서·이력서', d:'자기소개서·이력서·경력기술서 작성 가이드' },{ n:'채용 트렌드', d:'최신 채용 트렌드와 취업 성공 전략' },{ n:'필기시험(인적성)', d:'인·적성 검사 핵심 유형을 한 번에 정리' }] },
    { name:'대기업', items:[{ n:'자기소개서·이력서(LG)', d:'LG 온라인 인적성 자기소개서 작성법 특강' },{ n:'자기소개서·이력서(삼성)', d:'삼성 GSAT 자기소개서 특강' },{ n:'필기시험(LG)', d:'LG 온라인 인적성 기출복원·수리·추리 대비' },{ n:'필기시험(SK)', d:'SKCT 기출복원 문제풀이·반도체 취업 특강' },{ n:'필기시험(대기업 공통)', d:'대기업 인·적성 유형을 한 번에 이해' },{ n:'필기시험(삼성)', d:'삼성 GSAT 유형 연습문제 풀이 특강' }] }
  ]},
  { id:'work', name:'직장 실무', groups:[
    { name:'OA', items:[{ n:'노션', d:'노션(Notion)으로 일·생활을 편하게 관리하는 활용법' },{ n:'엑셀', d:'실무 엑셀 팁과 기본 활용을 익히는 과정' },{ n:'워드', d:'실무 워드(MS Word) 팁과 기본 활용을 익히는 과정' },{ n:'파워포인트', d:'실무 파워포인트 팁과 기본 활용을 익히는 과정' },{ n:'한글', d:'실무 한글(HWP) 팁과 기본 활용을 익히는 과정' }] },
    { name:'구글 워크스페이스', items:[{ n:'독스', d:'구글 독스(Docs) 기본과 실무 활용' },{ n:'스프레드시트', d:'구글 스프레드시트(Sheets) 기본과 실무 활용' },{ n:'슬라이드', d:'구글 슬라이드(Slides) 기본과 발표 문서 활용' },{ n:'지메일', d:'구글 지메일(Gmail) 기본과 업무 활용' }] }
  ]},
  { id:'ai', name:'AI', groups:[
    { name:'AI 기초', items:[{ n:'AI 알고리즘', d:'초보자를 위한 AI 기본 개념·원리를 빠르게 익히는 입문 과정' },{ n:'빅데이터', d:'빅데이터 개념을 기본·심화로 쉽게 이해하는 과정' }] },
    { name:'대학생활', items:[{ n:'Claude', d:'대학 생활·공부에 클로드(Claude) AI를 100% 활용하는 방법' },{ n:'Gemini', d:'대학 생활·학습에 구글 제미나이(Gemini)를 활용하는 방법' },{ n:'공통', d:'대학생을 위한 AI 학습·수업 활용 전반' }] },
    { name:'바이브 코딩', items:[{ n:'게시판 구축', d:'AI 바이브 코딩으로 게시판을 하루 만에 제작' },{ n:'게임 개발', d:'AI 바이브 코딩으로 간단한 게임을 하루 만에 개발' },{ n:'웹사이트 구축', d:'캡처 이미지만으로 AI 바이브 코딩을 활용해 웹사이트 제작' }] },
    { name:'직장 실무', items:[{ n:'ChatGPT', d:'ChatGPT로 사업계획서 작성 등 직장 실무에 활용' },{ n:'Claude', d:'직장 업무에 클로드(Claude) AI를 활용하는 실무 노하우' },{ n:'Gemini', d:'제미나이(Gemini)로 협업·문서·업무 자동화 등 직장 실무 전반' },{ n:'Genspark', d:'올인원 AI 작업공간 젠스파크(Genspark) 활용법' },{ n:'MS Copilot', d:'MS 코파일럿으로 오피스 업무 효율을 높이는 방법' },{ n:'한컴 AI', d:'한컴오피스·한컴독스 AI 어시스턴트로 빠른 문서 작성' }] }
  ]},
  { id:'design', name:'디자인', groups:[
    { name:'AI 영상 편집', items:[{ n:'RunwayML', d:'ChatGPT·RunwayML로 실무 영상을 제작·편집' }] },
    { name:'AI 이미지 생성', items:[{ n:'Gemini', d:'구글 제미나이(Gemini)로 이미지를 생성·활용' },{ n:'Ilustrator', d:'AI를 활용한 일러스트레이터 이미지 생성·실무 디자인' },{ n:'Photoshop', d:'AI를 활용한 포토샵 이미지 생성·편집·실무 디자인' },{ n:'캔바', d:'캔바(Canva)로 누구나 쉽게 전문 디자인 제작' }] }
  ]},
];
const ITEM_INDEX={};
DATA.forEach(cat=>{ let n=0; cat.count=0;
  cat.groups.forEach(g=>{ g.items=g.items.map(o=>{ n++;cat.count++; const id=cat.id+'-'+n;
    ITEM_INDEX[id]={id,catId:cat.id,catName:cat.name,group:g.name,name:o.n,desc:o.d}; return {id,name:o.n,desc:o.d}; }); });
});
/* ===== 구글시트(Apps Script Web App) 연동 설정 =====
   배포 후 발급되는 Apps Script Web App URL을 아래에 붙여넣으세요.
   비워두면 로컬(localStorage)로만 동작(PoC 폴백).
   대상 시트: 1-HBMpIWb66CLE6H3Pdx2KMNtxsHGzufvMuEm7VQ1M2o */
const JBB_SHEET_ENDPOINT='https://script.google.com/macros/s/AKfycbyJT-4UUgC5hlrD2u9W0WLgL10U1e7xrT4ZJNwSU1I5SlGSdht9kf6XsLhCUVJXgCWk/exec';
const JBB_LIMIT=5, JBB_STORE='JBB_SURVEY_V2';

function jbbUuid(){ return 'dev-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,10); }
let jbbDevice=localStorage.getItem('JBB_DEVICE');
if(!jbbDevice){ jbbDevice=jbbUuid(); localStorage.setItem('JBB_DEVICE',jbbDevice); }

function jbbLoad(){ try{return JSON.parse(localStorage.getItem(JBB_STORE))||{submissions:{},pending:{date:'',items:[]}}}catch(e){return{submissions:{},pending:{date:'',items:[]}}} }
function jbbSave(){ localStorage.setItem(JBB_STORE, JSON.stringify(jbbState)); }
let jbbState=jbbLoad();
if(!jbbState.submissions) jbbState.submissions={};
if(!jbbState.pending) jbbState.pending={date:'',items:[]};
let jbbShowAll=false, jbbRemoteRank=null, jbbRemoteTotals=null;

function jbbToday(){ const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function jbbPending(){ if(jbbState.pending.date!==jbbToday()){ jbbState.pending={date:jbbToday(),items:[]}; } return jbbState.pending.items; }
function jbbSubmittedItems(date){ return jbbState.submissions[date]||[]; }
function jbbSubmittedToday(){ return !!jbbState.submissions[jbbToday()]; }
function jbbIsSelected(id){ return jbbPending().includes(id) || (jbbSubmittedToday() && jbbSubmittedItems(jbbToday()).includes(id)); }
function jbbTodayCount(){ return jbbSubmittedToday()? jbbSubmittedItems(jbbToday()).length : jbbPending().length; }
function jbbLocalAgg(){ const c={}; Object.values(jbbState.submissions).forEach(l=>l.forEach(id=>{c[id]=(c[id]||0)+1;})); return c; }
function jbbAgg(){ if(jbbRemoteRank){ const c={}; jbbRemoteRank.forEach(r=>{c[r.itemId]=r.count;}); return c; } return jbbLocalAgg(); }

let jbbToastT;
function jbbToast(m){ const el=document.getElementById('jbb-toast'); el.textContent=m; el.classList.add('jbb-show'); clearTimeout(jbbToastT); jbbToastT=setTimeout(()=>el.classList.remove('jbb-show'),1900); }
function jbbShowLimit(){ document.getElementById('jbb-limitOverlay').classList.add('jbb-show'); }
function jbbHideLimit(){ document.getElementById('jbb-limitOverlay').classList.remove('jbb-show'); }
function jbbShowSticker(){ document.getElementById('jbb-overlay').classList.add('jbb-show'); }
function jbbHideSticker(){ document.getElementById('jbb-overlay').classList.remove('jbb-show'); }

function jbbToggle(id){
  if(jbbSubmittedToday()){ jbbToast('오늘은 이미 제출을 완료했습니다. 내일 다시 참여해 주세요.'); return; }
  const items=jbbPending(), i=items.indexOf(id);
  if(i>=0){ items.splice(i,1); jbbSave(); jbbRenderAll(); jbbToast('선택을 해제했습니다'); return; }
  if(items.length>=JBB_LIMIT){ jbbShowLimit(); return; }
  items.push(id); jbbSave();
  const card=document.getElementById('jbb-card-'+id); if(card){ card.classList.add('jbb-pop'); setTimeout(()=>card.classList.remove('jbb-pop'),360); }
  jbbRenderAll();
}
function jbbSubmit(){
  if(jbbSubmittedToday()){ jbbToast('오늘은 이미 제출을 완료했습니다.'); return; }
  const items=jbbPending().slice();
  if(items.length===0){ jbbToast('선택된 항목이 없습니다. 먼저 강의를 선택해 주세요.'); return; }
  jbbState.submissions[jbbToday()]=items;
  jbbState.pending={date:jbbToday(),items:[]};
  jbbSave();
  jbbPost(items);
  jbbShowSticker();
  jbbRenderAll();
  jbbRefreshRank();
}
function jbbPost(items){
  if(!JBB_SHEET_ENDPOINT) return;
  const payload={ action:'submit', deviceToken:jbbDevice, date:jbbToday(), ts:Date.now(),
    items: items.map(id=>{ const it=ITEM_INDEX[id]||{}; return {itemId:id, cat:it.catName, group:it.group, name:it.name}; }) };
  try{ fetch(JBB_SHEET_ENDPOINT,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload)}); }catch(e){}
}
function jbbRefreshRank(){
  if(!JBB_SHEET_ENDPOINT) return;
  const cb='__jbbRank'+Date.now();
  const s=document.createElement('script');
  window[cb]=function(data){ jbbRemoteRank=(data&&data.ranking)||null; jbbRemoteTotals=(data&&data.totals)||null; jbbRenderAll(); try{delete window[cb];}catch(e){} s.remove(); };
  s.src=JBB_SHEET_ENDPOINT+(JBB_SHEET_ENDPOINT.includes('?')?'&':'?')+'action=ranking&callback='+cb+'&_='+Date.now();
  s.onerror=function(){ try{delete window[cb];}catch(e){} s.remove(); };
  document.body.appendChild(s);
}

function jbbRenderQuota(){
  const submitted=jbbSubmittedToday(), used=jbbTodayCount();
  document.getElementById('jbb-remainNum').textContent = submitted? 0 : (JBB_LIMIT-used);
  const dots=document.getElementById('jbb-dots'); dots.innerHTML='';
  for(let i=0;i<JBB_LIMIT;i++){ const d=document.createElement('div'); d.className='jbb-dot'+(i<used?' jbb-used':''); dots.appendChild(d); }
}
function jbbBuildTabs(){
  const tabs=document.getElementById('jbb-tabs'), panels=document.getElementById('jbb-panels');
  tabs.innerHTML=''; panels.innerHTML='';
  DATA.forEach((cat,i)=>{
    const b=document.createElement('button'); b.className='jbb-tab'+(i===0?' jbb-on':''); b.dataset.tab=cat.id;
    b.innerHTML=cat.name+'<span class="jbb-cnt jbb-hide" id="jbb-cnt-'+cat.id+'"></span>'; b.onclick=()=>jbbSwitchTab(cat.id); tabs.appendChild(b);
    const p=document.createElement('div'); p.className='jbb-panel'+(i===0?' jbb-on':''); p.id='jbb-panel-'+cat.id;
    cat.groups.forEach(g=>{
      const gd=document.createElement('div'); gd.className='jbb-group';
      if(g.name){ const h=document.createElement('h3'); h.textContent=g.name; gd.appendChild(h); }
      const grid=document.createElement('div'); grid.className='jbb-grid';
      g.items.forEach(it=>{
        const card=document.createElement('div'); card.className='jbb-item'; card.id='jbb-card-'+it.id;
        card.innerHTML='<div class="jbb-nmwrap"><div class="jbb-nm">'+it.name+'</div>'+(it.desc?'<div class="jbb-desc">'+it.desc+'</div>':'')+'</div>'+
          '<button class="jbb-selbtn" id="jbb-btn-'+it.id+'"><span class="jbb-lb">선택</span></button>';
        card.querySelector('.jbb-selbtn').onclick=()=>jbbToggle(it.id);
        grid.appendChild(card);
      });
      gd.appendChild(grid); p.appendChild(gd);
    });
    panels.appendChild(p);
  });
}
function jbbSwitchTab(id){
  document.querySelectorAll('.jbb-tab').forEach(t=>t.classList.toggle('jbb-on',t.dataset.tab===id));
  document.querySelectorAll('.jbb-panel').forEach(p=>p.classList.remove('jbb-on'));
  document.getElementById('jbb-panel-'+id).classList.add('jbb-on');
  window.scrollTo({top:document.querySelector('.jbb-tabs').offsetTop-70,behavior:'smooth'});
}
function jbbRenderItems(){
  const submitted=jbbSubmittedToday(), full=jbbPending().length>=JBB_LIMIT;
  Object.values(ITEM_INDEX).forEach(it=>{
    const card=document.getElementById('jbb-card-'+it.id), btn=document.getElementById('jbb-btn-'+it.id);
    const sel=jbbIsSelected(it.id), locked= submitted? true : (!sel && full);
    card.classList.toggle('jbb-sel',!!sel); card.classList.toggle('jbb-locked',!!locked);
    const lb=btn.querySelector('.jbb-lb');
    if(submitted){ lb.textContent=sel?'선택됨':'마감'; btn.disabled=true; }
    else if(sel){ lb.textContent='취소'; btn.disabled=false; }
    else if(full){ lb.textContent='마감'; btn.disabled=true; }
    else{ lb.textContent='선택'; btn.disabled=false; }
  });
}
function jbbRenderResult(){
  const body=document.getElementById('jbb-resultBody');
  const agg=jbbAgg();
  const arr=Object.values(ITEM_INDEX).map(it=>({...it,v:agg[it.id]||0})).sort((a,b)=>b.v-a.v);
  const max=Math.max(1,...arr.map(r=>r.v));
  const list=jbbShowAll?arr:arr.slice(0,10);
  let html='<div class="jbb-resnote">🏆 실시간 누적 집계 · '+(jbbShowAll?'전체 58개':'상위 10개')+' 강의 순위입니다.</div>';
  list.forEach((r,i)=>{
    html+='<div class="jbb-rrow'+(i<3?' jbb-top':'')+'"><div class="jbb-rk">'+(i+1)+'</div>'+
      '<div><div class="jbb-nm2">'+r.name+'</div><div class="jbb-cat">'+r.catName+(r.group?' · '+r.group:'')+'</div>'+
      '<div class="jbb-track"><div class="jbb-fill" style="width:'+(r.v/max*100)+'%"></div></div></div>'+
      '<div class="jbb-v">'+r.v+'</div></div>';
  });
  html+='<button class="jbb-moreBtn" id="jbb-moreBtn">'+(jbbShowAll?'▲ 접기':'▼ 전체 강의 더보기 (58개)')+'</button>';
  body.innerHTML=html;
  document.getElementById('jbb-moreBtn').onclick=()=>{ jbbShowAll=!jbbShowAll; jbbRenderResult(); };
}
function jbbRenderFooter(){
  const submitted=jbbSubmittedToday();
  document.getElementById('jbb-footToday').textContent=jbbTodayCount();
  document.getElementById('jbb-footTotal').textContent=Object.values(jbbState.submissions).reduce((s,l)=>s+l.length,0);
  const sb=document.getElementById('jbb-submitBtn');
  if(sb){ if(submitted){ sb.disabled=true; sb.textContent='오늘 제출 완료'; }
    else { const n=jbbPending().length; sb.disabled=n===0; sb.textContent='선택완료 ('+n+'/5)'; } }
}
function jbbOpenResult(){ jbbRefreshRank(); jbbRenderResult(); const m=document.getElementById('jbb-resultModal'); m.classList.add('jbb-show'); m.setAttribute('aria-hidden','false'); }
function jbbCloseResult(){ const m=document.getElementById('jbb-resultModal'); m.classList.remove('jbb-show'); m.setAttribute('aria-hidden','true'); }
function jbbRenderBadges(){
  DATA.forEach(cat=>{ const el=document.getElementById('jbb-cnt-'+cat.id); if(!el) return;
    let c=0; cat.groups.forEach(g=>g.items.forEach(it=>{ if(jbbIsSelected(it.id)) c++; }));
    el.textContent=c||''; el.classList.toggle('jbb-hide', c===0); });
}
function jbbRenderAll(){ jbbRenderQuota(); jbbRenderItems(); jbbRenderBadges(); jbbRenderFooter(); jbbRenderResult(); }

document.getElementById('jbb-goResult').onclick=jbbOpenResult;
document.getElementById('jbb-resultModalClose').onclick=jbbCloseResult;
document.getElementById('jbb-resultModal').onclick=e=>{ if(e.target.id==='jbb-resultModal')jbbCloseResult(); };
document.getElementById('jbb-submitBtn').onclick=jbbSubmit;
document.getElementById('jbb-stickerClose').onclick=jbbHideSticker;
document.getElementById('jbb-overlay').onclick=e=>{ if(e.target.id==='jbb-overlay')jbbHideSticker(); };
document.getElementById('jbb-limitClose').onclick=jbbHideLimit;
document.getElementById('jbb-limitOverlay').onclick=e=>{ if(e.target.id==='jbb-limitOverlay')jbbHideLimit(); };

jbbBuildTabs(); jbbRenderAll(); jbbRefreshRank();


