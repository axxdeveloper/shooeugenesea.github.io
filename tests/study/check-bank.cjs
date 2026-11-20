#!/usr/bin/env node
"use strict";
const assert=require('node:assert/strict');
require('../../study/questions.js');
const rational=s=>{const [a,b=1]=s.split('/').map(Number);return a/b};
const eq=(a,b)=>Math.abs(a-b)<1e-10;
const signed=s=>s.replace(/[−－]/g,'-').replace(/＋/g,'+');
function judge(g, raw, option) {
  const s=signed(raw), p=s.replace(/([+-])\s+(?=\d)/g,'$1');
  const ns=[...p.matchAll(/[-+]?\d+/g)].map(x=>Number(x[0]));
  const [a,b,c,d,e]=ns, n=Number(signed(option));
  const ask=(sub)=>s.includes(signed(sub));
  const formulas={
    1:()=>ask('又放入')?n===a+b:ask('還剩')?n===a-b:ask('會等於')?n===b-a:ask('多幾枝')?n===a-b:ask('往左走')?n===a-b:null,
    2:()=>ask('加法算式')?signed(option).split('+').every(x=>Number(x)===b)&&signed(option).split('+').length===a:
      ask('多拿')?n===(a+1)*b:ask('每次跳')?n===a*b:ask('玩具車')?n===a*b:ask('餅乾')?n===a*b:null,
    3:()=>ask('最多裝滿')?n*b<=a&&(n+1)*b>a:ask('最後剩')?n>=0&&n<b&&(a-n)%b===0:ask('至少要')?n*b>=a&&(n-1)*b<a:
      ask('剛好裝完')?n*b===a:ask('還要幾個')?n>0&&n<b&&(a+n)%b===0:null,
    4:()=>ask('面積增加')?n===(a+c)*b-a*b:ask('面積是')?n===a*b:ask('周長是')?n===2*a+2*b:ask('長多少')?n*b===a:ask('寬多少')?2*(n+b)===a:null,
    5:()=>{const x=rational(option);return ask('計算：')? eq(x,ask(' - ')? a/b-Math.abs(c)/d:a/b+c/d):ask('剩下幾瓶')?eq(x+a/b+c/d,1):ask('會等於')?eq(x+a/b,c/d):ask('相差')?eq(x+c/d,a/b):null;},
    6:()=>{
      if(ask('改寫為乘法')){const [l,r]=option.split(' × '); return eq(rational(l),a/b)&&eq(rational(r)*c/d,1);}
      if(ask('不做筆算')){const x=a/b,y=c/d,z=x/y;return option==='變大，而且仍小於 1'?z>x&&z<1:option==='變大，而且一定大於 1'?z>x&&z>1:option==='變小'?z<x:option==='不變'?z===x:null;}
      if(ask('完整的'))return n*b/c<=a&&(n+1)*b/c>a;
      if(ask('每瓶'))return eq(rational(option)*b/c,a);
      if(ask('全長'))return eq(rational(option)*c/d,a/b);
      return null;
    },
    7:()=>ask('氣溫')?n===a+b-c:ask('÷')?n*b===a:ask('×')?n===a*b:ask(' - (')?n===a-b:ask(' + ')?n===a+b:null,
    8:()=>ask('某數')?a*n+b===c:ask('x/')?eq(n/a+b,c):ask('(x-')?a*(n+b)===c:ask('x+')&&ask('＝')?
      (ns.length===4?a*n+b===c*n+d:a*n+b===c):null,
    9:()=>{if(ask('哪組')){const t=option.split(',').map(Number).sort((a,b)=>a-b); return t[0]>0&&t[0]**2+t[1]**2===t[2]**2;}return ask('一股')?n*n+b*b===a*a:n*n===a*a+b*b;},
    10:()=>{
      if(ask('頂點為何')){const [x,y]=[...option.matchAll(/-?\d+/g)].map(z=>+z[0]);return x===-b&&y===c;}
      if(ask('最大值'))return a<0&&n===c;
      if(ask('對稱軸'))return option.startsWith('x＝')&&Number(option.slice(2))===-b;
      if(ask('最小值'))return n===b-a*a/4;
      if(ask('時 y 多少'))return n===a*(d+b)**2+c;
      return null;
    },
    11:()=>ask('總和')?n===a*(b+c)/2:ask('第幾項')?a+(n-1)*b===c:ask('首項多少')?n+(a-1)*c===b:ask('公差是多少')?b+(c-a)*n===d:ask('項是多少')?n===a+(c-1)*b:null,
    12:()=>{
      if(ask('f′(x) 是什麼')){const [coef,exp]=[...option.matchAll(/\d+/g)].map(z=>+z[0]);return coef===a*b&&exp===b-1;}
      if(ask('哪個 x 使'))return 2*a*(n+b)===0;
      if(ask('f′(0)'))return n===b;
      const x=ask('斜率')?c:d;
      // Centered secant slope is exact for a quadratic. Substitute actual points instead of using the generator's formula.
      const f=t=>a*t*t+b*t;
      return n===(f(x+1)-f(x-1))/2;
    }
  };
  return formulas[g]();
}
function checkDivisionExplanation(q, message) {
  const [a,b,c,d]=[...q.stem.matchAll(/\d+/g)].map(m=>Number(m[0]));
  assert.equal(Object.keys(q.feedback).length,3,message);
  for(let i=0;i<4;i++) {
    if(i===q.answer) assert.equal(q.feedback[i],undefined,message);
    else assert.ok(typeof q.feedback[i]==="string"&&q.feedback[i].length>10,message);
  }
  if(q.stem.includes('改寫為乘法')){
    assert.ok(q.explanation.includes(`被除數 ${a}/${b} 不變`) && q.explanation.includes(`除數 ${c}/${d} 倒過來`),message);
    const [,r]=q.options[q.answer].split(' × ');
    assert.ok(eq(rational(r),d/c),message);
    return;
  }
  if(q.stem.includes('不做筆算')){
    assert.ok(a/b<c/d&&c/d<1&&q.explanation.includes('商仍小於 1'),message);
    return;
  }
  const reported=q.explanation.match(/＝(\d+(?:\/\d+)?)(?=[；。])/);
  assert.ok(reported,message);
  const worked=rational(reported[1]);
  if(q.stem.includes('全長')) assert.ok(eq(worked*c/d,a/b),message);
  else assert.ok(eq(worked*b/c,a),message);
  if(q.stem.includes('完整的')){
    assert.ok(q.explanation.includes('最大整數')&&Math.floor(worked)===Number(q.options[q.answer]),message);
  } else {
    assert.ok(eq(worked,rational(q.options[q.answer])),message);
  }
}
let checks=0;const count=Number(process.argv[2]??500);
for(const grade of StudyBank.grades){
  for(let si=0;si<count;si++){
    const seed=[si,String(si),`review:${si}`,`複習 ${si}`][si%4];
    const qs=grade.make(seed); assert.equal(qs.length,10);
    assert.equal(new Set(qs.map(q=>q.id)).size,10);
    assert.equal(new Set(qs.map(q=>q.stem)).size,10);
    for(const q of qs){
      const message=`${grade.label} ${q.id}: ${q.stem} | ${q.options.join('; ')} | key index=${q.answer}`;
      assert.equal(q.options.length,4,message);
      assert.equal(new Set(q.options).size,4,message);
      assert.ok(StudyBank.concepts[q.concept]&&q.explanation,message);
      assert.ok(q.options.every(o=>judge(grade.id,q.stem,o)!==null), 'Unrecognized question: '+message);
      const matches=q.options.map(o=>judge(grade.id,q.stem,o)).flatMap((good,i)=>good?[i]:[]);
      assert.deepEqual(matches,[q.answer],message);
      if(grade.id===6) checkDivisionExplanation(q,message);
      checks++;
    }
  }
}
console.log(`Solved and checked all four options for ${checks} questions across ${StudyBank.grades.length} grades × ${count} seeds.`);
