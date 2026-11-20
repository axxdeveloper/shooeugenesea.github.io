(() => {
"use strict";
const $ = s => document.querySelector(s);
const screen = $("#screen");
const key = "isaacnote-study-v1";
const grades = StudyBank.grades;
const units = grades.flatMap(g => [{id:"math-"+g.id,grade:g.id,unit:g.unit,make:g.make},...StudyExtra.filter(u=>u.grade===g.id)]);
const gradeLabel = n => grades.find(g=>g.id===n)?.label || "";
const conceptLabel = id => StudyBank.concepts[id] || id;
const byUnit = id => units.find(u=>u.id===id);
let state={grade:0,round:null,wrong:[],history:[]}, storageOK=true;
try { const saved=JSON.parse(localStorage.getItem(key)||"null"); if(saved && Array.isArray(saved.history) && Array.isArray(saved.wrong)) state={...state,...saved}; }
catch { storageOK=false; }
if(!gradeLabel(state.grade)) state.grade=0;
if(state.round && (!byUnit(state.round.unit) || !Array.isArray(state.round.qs) || !state.round.qs.length)) state.round=null;
const persist=()=>{try { localStorage.setItem(key,JSON.stringify(state));storageOK=true; } catch { storageOK=false; }};
let view=state.round&&!state.round.done?"quiz":"home", paperFilter="all", printDraft=null;
const esc = s => String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const archive=[
 ["elementary","校內段考","臺中大墩國小","依學年、學期和期中／期末排列；可查 114 學年度等公開卷。","https://sites.google.com/ddes.tc.edu.tw/testpaper"],
 ["elementary","校內段考","新北桃子腳國小部","學校近年評量試題目錄，可查 114 學年度等。","https://www.tykjh.ntpc.edu.tw/p/426-1000-57.php"],
 ["junior","校內段考","新北桃子腳國中部","學校近年評量試題目錄，可查 113–115 學年度。","https://www.tykjh.ntpc.edu.tw/p/426-1000-56.php"],
 ["junior","校內段考","高雄鼓山高中國中部","可查 115 學年度上學期第 1 次與 114 學年度多次段考。","https://www.kusjh.kh.edu.tw/sidelist/68"],
 ["junior","升學考試","國中教育會考","在官方網站選擇年度，開啟各科歷屆試題。","https://cap.rcpet.edu.tw/examination.html"],
 ["senior","校內段考","高雄鼓山高中部","可查 115 學年度上學期第 1 次與 114 學年度多次段考。","https://www.kusjh.kh.edu.tw/sidelist/67"],
 ["senior","升學考試","大學學測","大考中心歷年一般試題，依學年度和考科查找。","https://www.ceec.edu.tw/xmfile?xsmsid=0J052424829869345634"],
 ["senior","升學考試","大學分科測驗／舊指考","大考中心一般試題：111 年起為分科，較早為舊指考。","https://www.ceec.edu.tw/xmfile?xsmsid=0J052427633128416650"]
];
const filters=[["all","全部"],["elementary","國小"],["junior","國中"],["senior","高中"]];
const label = i => "ABCD"[i];
const seed = () => globalThis.crypto?.getRandomValues(new Uint32Array(1))[0] ?? Date.now()%4294967296;
const formatDate=s=>new Intl.DateTimeFormat("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(s));
function getSessionQs(unit, focus, avoid=[]) {
 const sig=q=>q.stem.replace(/\s+/g,"");
 if(!focus){
   for(let i=0;i<16;i++){const qs=unit.make(seed());if(!qs.some(q=>avoid.includes(sig(q))))return qs;}
   return unit.make(seed());
 }
 const pack=[],seen=new Set(avoid);
 for(let i=0;i<100&&pack.length<10;i++){
  for(const q of unit.make(seed())){
   if(focus.includes(q.concept)&&!seen.has(sig(q))){seen.add(sig(q));pack.push(q);}
   if(pack.length===10)break;
  }
 }
 return pack;
}
function start(id, focus=null, avoid=[]) {
 const unit=byUnit(id); if(!unit)return;
 const old=state.round;
 if(old&&!old.done&&old.picks.length&&!window.confirm("改開新一輪會放棄這輪尚未做完的進度。要繼續嗎？"))return;
 const qs=getSessionQs(unit,focus,avoid);
 if(!qs.length)return;
 state.round={unit:id,qs,picks:[],index:0,done:false,focus:!!focus};state.grade=unit.grade;
 persist(); go("quiz");
}
function go(next, focus=true) {
 view=next; render();
 if(focus)screen.querySelector("h2")?.focus();
}
function heading(s){return '<h2 tabindex="-1">'+esc(s)+'</h2>'}
function act(name,title,cls="",attrs=""){return '<button type="button" data-act="'+name+'" class="'+cls+'" '+attrs+'>'+title+'</button>'}
function chooser(){
 const selected=gradeLabel(state.grade);
 let h='<section class="card" aria-labelledby="grade-head"><h2 id="grade-head" tabindex="-1">1. 選你的年級</h2>';
 for(const [stage,start,end] of [["國小",1,6],["國中",7,9],["高中",10,12]]){
   h+='<div class="stage"><div class="stage-label">'+stage+'</div><div class="grid">';
   h+=grades.filter(g=>g.id>=start&&g.id<=end).map(g=>act("grade",esc(g.label),"",'data-id="'+g.id+'" aria-pressed="'+(g.id===state.grade)+'"')).join("");
   h+='</div></div>';
 }
 h+='</section><section id="unit-list" class="card">'+heading(selected?"2. 選想練的單元":"2. 選單元");
 if(!selected)h+='<p class="muted">先選一個年級，這裡就會出現能練的單元。</p>';
 else h+='<p class="muted">'+esc(selected)+' · 數學｜目前試用範圍，不是全年教材</p><div class="units">'+units.filter(u=>u.grade===state.grade).map(u=>'<div>'+act("start",esc(u.unit)+'<small>開始 10 題</small>',"unit primary",'data-id="'+esc(u.id)+'"')+'<div style="margin-top:.4rem">'+act("make-print","列印練習卷","",'data-id="'+esc(u.id)+'" aria-label="列印 '+esc(u.unit)+' 練習卷"')+'</div></div>').join("")+'</div>';
 h+='</section>'; if(state.round&&!state.round.done)h+='<section class="card"><p>上次還有一輪沒做完。</p>'+act("resume","繼續上次練習","primary")+'</section>';
 return h;
}
function quiz(){
 const r=state.round;
 if(!r)return chooser();
 if(r.done)return result(r);
 const q=r.qs[r.index], a=r.picks[r.index], answered=Number.isInteger(a), u=byUnit(r.unit);
 return '<section class="card"><div class="flex between"><span class="badge">'+esc(gradeLabel(u.grade)+" · "+u.unit+(r.focus?" · 錯題加練":""))+'</span>'+act("home","回單元","plain")+'</div><p class="muted" style="margin-top:.7rem">第 '+(r.index+1)+' / '+r.qs.length+' 題</p><div aria-hidden="true" class="progress"><span style="width:'+100*(r.index+1)/r.qs.length+'%"></span></div><h2 class="question" tabindex="-1">'+esc(q.stem)+'</h2><div class="options">'+q.options.map((o,i)=>act("answer",label(i)+'. '+esc(o),"option "+(answered?(i===q.answer?"correct":i===a?"incorrect":""):""),'data-id="'+i+'"'+(answered?' aria-disabled="true"':'')+(answered&&i===a?' aria-pressed="true"':""))).join("")+'</div>'+
 (answered?'<section class="feedback" id="answer-feedback" tabindex="-1" role="status"><strong>'+(a===q.answer?'答對了！':'這題答錯了。正解是 '+label(q.answer)+'。')+'</strong>'+(a!==q.answer&&q.feedback?.[a]?'<p>'+esc(q.feedback[a])+'</p>':'')+'<p style="white-space:pre-line">'+esc(q.explanation)+'</p></section>'+act("next",r.index+1===r.qs.length?"看這輪結果":"下一題","primary"):'<p class="muted">點選一個答案。</p>')+'</section>';
}
function result(r) {
 const wrong=r.qs.filter((q,i)=>q.answer!==r.picks[i]),u=byUnit(r.unit), n=r.qs.length-wrong.length;
 const byConcept=[...new Set(wrong.map(q=>q.concept))];
 return '<section class="card">'+heading("這輪練完了")+'<p class="score">'+n+' / '+r.qs.length+'</p><p class="muted">'+esc(gradeLabel(u.grade)+' · '+u.unit)+'</p>'+
 (wrong.length?'<p>可以先看看這些地方：'+esc(byConcept.map(conceptLabel).join("、"))+'。</p>':'<p>這輪都答對了。可以換一輪，或挑下一個單元。</p>')+
 '<div class="flex">'+(wrong.length?act("target","換題練剛剛錯的觀念","primary"):'')+act("restart","同單元再練 10 題",wrong.length?"":"primary")+act("home","選別的單元")+act("same-print","列印這一輪")+'</div></section>'+
 (wrong.length?'<section class="card">'+heading("這輪錯題")+wrong.map(q=>review(q,r.picks[r.qs.indexOf(q)])).join("")+'</section>':"");
}
function review(q,pick) {
 return '<details><summary>'+esc(q.stem)+'</summary><p>你的答案：'+esc(q.options[pick])+'<br>正解：'+esc(q.options[q.answer])+'</p>'+(q.feedback?.[pick]?'<p>'+esc(q.feedback[pick])+'</p>':'')+'<p style="white-space:pre-line">'+esc(q.explanation)+'</p></details>';
}
function history(){
 const rounds=state.history.slice(0,20), errors=state.wrong.slice(0,40);
 return '<section class="card">'+heading("練習紀錄")+(storageOK?'<p class="muted">只在這個瀏覽器保留最近 20 輪。</p>':'<p class="danger">這個瀏覽器暫時無法保存，離開後紀錄可能消失。</p>')+
 (rounds.length?rounds.map((r,n)=>'<details><summary>'+esc(formatDate(r.at)+' · '+r.title+' · '+r.score+'/'+r.qs.length)+'</summary><div>'+r.qs.map((q,i)=>'<p>'+esc((i+1)+'. '+q.stem)+'<br>'+esc((r.picks[i]===q.answer?'答對':'答錯')+'｜你選：'+q.options[r.picks[i]]+'｜正解：'+q.options[q.answer])+'</p>').join("")+'</div>'+act("history-print","列印這一輪","",'data-id="'+n+'"')+'</details>').join(""):'<p>還沒有完成的練習。</p>')+
 '</section><section class="card">'+heading("錯題本")+'<p class="muted">保留最近 40 道錯題。點進去看原題，也可以換題練同一個觀念。</p>'+
 (errors.length?errors.map((e,i)=>'<div><span class="badge">'+esc(e.title)+'</span>'+review(e.q,e.pick)+act("target-history","換題練這個觀念","",'data-id="'+i+'"')+'</div>').join(""):'<p>還沒有錯題。</p>')+
 (rounds.length||errors.length?'<div style="margin-top:1rem">'+act("clear","清除這台裝置的紀錄","danger")+'</div>':'')+'</section>';
}
function papers(){
 const filtered=archive.filter(a=>paperFilter==="all"||a[0]===paperFilter);
 return '<section class="card">'+heading("找考古題")+'<p>校內段考和全國升學考試分開列。點原站可看年度、科目與可列印的試卷。</p><div class="flex" aria-label="依學段篩選">'+filters.map(([id,title])=>act("filter",title,"",'data-id="'+id+'" aria-pressed="'+(paperFilter===id)+'"')).join("")+'</div><div class="archive">'+filtered.map(([,kind,name,desc,url])=>'<article><span class="badge">'+kind+'</span><h3>'+name+'</h3><p class="muted">'+desc+'</p><a class="paperlink" href="'+url+'" target="_blank" rel="noopener noreferrer">開啟原站試題</a></article>').join("")+'</div><p class="source-note muted" style="margin-top:1rem">本區是公開來源索引，不是全台各校、各科的完整題庫；試卷與答案以原站為準。</p></section>';
}
function printable(){
 const p=printDraft;if(!p)return chooser();
 return '<section class="card print-controls">'+heading("列印練習卷")+'<p>題目與答案分頁。也可以在列印視窗選「另存為 PDF」。</p><label><input type="checkbox" id="include-key" checked> 附上答案頁</label><div class="flex" style="margin-top:.7rem">'+act("print","列印／存成 PDF","primary")+(p.fresh?act("refresh-print","換一份題目"):"")+act("close-print","返回")+'</div></section><section class="card worksheet"><h2>'+esc(p.title)+'｜練習卷</h2><p class="worksheet-lines">姓名：________________　日期：________________</p><ol class="worksheet-questions">'+p.qs.map(q=>'<li><strong>'+esc(q.stem)+'</strong><div class="paper-options">'+q.options.map((o,i)=>'<span>'+label(i)+'. '+esc(o)+'</span>').join("")+'</div></li>').join("")+'</ol><section class="answer-sheet"><h2>'+esc(p.title)+'｜答案</h2><ol>'+p.qs.map(q=>'<li>'+label(q.answer)+'. '+esc(q.options[q.answer])+'</li>').join("")+'</ol></section></section>';
}
function openPrint(id,existing=null) {const u=byUnit(id);if(!u&&!existing)return;printDraft={unit:id,title:existing?.title??gradeLabel(u.grade)+" · "+u.unit,qs:existing?.qs??u.make(seed()),fresh:!existing,back:view};go("print");}
function render(){
 document.querySelectorAll("[data-view]").forEach(b=>{const current=(view==="quiz"||view==="print"?"home":view)===b.dataset.view;if(current)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current");});
 screen.innerHTML=({home:chooser,quiz,papers,history,print:printable}[view]||chooser)();
}
document.addEventListener("click",e=>{
 const b=e.target.closest("button");if(!b)return;
 if(b.dataset.view){go(b.dataset.view);return;}
 const id=b.dataset.id, r=state.round;
 switch(b.dataset.act){
 case "grade":state.grade=Number(id);persist();render();screen.querySelector("#unit-list h2")?.focus();break;
 case "start":start(id);break;
 case "resume":go("quiz");break;
 case "home":go("home");break;
 case "filter":paperFilter=id;render();screen.querySelector('button[data-act="filter"][aria-pressed="true"]')?.focus();break;
 case "answer":{
   if(!r||r.done||Number.isInteger(r.picks[r.index]))return;
   const q=r.qs[r.index],i=Number(id);if(i<0||i>=q.options.length||!Number.isInteger(i))return;
   r.picks[r.index]=i;
   if(i!==q.answer){
    const u=byUnit(r.unit),title=gradeLabel(u.grade)+" · "+u.unit;
    state.wrong=[{unit:u.id,title,q,pick:i},...state.wrong.filter(e=>e.unit!==u.id||e.q.stem!==q.stem)].slice(0,40);
   }
   persist();render();$("#answer-feedback")?.focus();break;
 }
 case "next":{
   if(!r||r.done||!Number.isInteger(r.picks[r.index]))return;
   if(r.index+1===r.qs.length){
     r.done=true;const u=byUnit(r.unit);
     const score=r.qs.reduce((n,q,i)=>n+(q.answer===r.picks[i]?1:0),0);
     state.history=[{unit:r.unit,title:gradeLabel(u.grade)+" · "+u.unit,at:Date.now(),score,qs:r.qs,picks:r.picks},...state.history].slice(0,20);
   } else r.index++;
   persist();go("quiz");break;
 }
 case "restart":if(r)start(r.unit,null,r.qs.map(q=>q.stem.replace(/\s+/g,"")));break;
 case "target":if(r){const w=r.qs.filter((q,i)=>q.answer!==r.picks[i]);if(w.length)start(r.unit,[...new Set(w.map(q=>q.concept))],r.qs.map(q=>q.stem.replace(/\s+/g,"")));}break;
 case "target-history":{const e=state.wrong[Number(id)];if(e)start(e.unit,[e.q.concept],[e.q.stem.replace(/\s+/g,"")]);break;}
 case "make-print":openPrint(id);break;
 case "same-print":if(r){const u=byUnit(r.unit);openPrint(r.unit,{title:gradeLabel(u.grade)+" · "+u.unit,qs:r.qs});}break;
 case "history-print":{const h=state.history[Number(id)];if(h)openPrint(h.unit,h);break;}
 case "refresh-print":if(printDraft?.fresh){const u=byUnit(printDraft.unit);if(u){printDraft.qs=u.make(seed());go("print");}}break;
 case "close-print":go(printDraft?.back||"home");break;
 case "print":if(view==="print"){document.body.classList.toggle("omit-key",!$("#include-key").checked);window.print();}break;
 case "clear":if(window.confirm("只清除這個瀏覽器的練習紀錄、錯題和進度。確定清除？")){state={grade:state.grade,round:null,wrong:[],history:[]};persist();go("history");}break;
 }
});
render();
})();
