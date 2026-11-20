(() => {
  const concepts = {
    add:"加減與數量變化", place:"乘法與倍數", share:"整除與餘數", area:"長方形面積與周長", fraction:"同分母分數加減", fd:"除以分數：單位量",
    fm:"除以分數：倒數", fs:"分數除法：大小估計", neg:"整數的正負號", linear:"一次方程式", pyth:"畢氏定理", quad:"二次函數的頂點", seq:"等差數列", poly:"多項式微分"
  };
  const labels = ["小一","小二","小三","小四","小五","小六","國一","國二","國三","高一","高二","高三"];
  const units = ["20 以內加減","乘法與倍數","除法與餘數","面積與周長","同分母分數加減","分數除法","正負整數運算","一元一次方程式","畢氏定理","二次函數","等差數列","多項式微分"];
  function rng(seed) {
    let n=2166136261; for (const c of String(seed ?? 0)) n=Math.imul(n^c.charCodeAt(0),16777619);
    return max => { n=(Math.imul(n,1664525)+1013904223)>>>0; return Math.floor(n/4294967296*max); };
  }
  function frac(n,d) { const g=(a,b)=>b?g(b,a%b):a; const k=g(Math.abs(n),d); return d===k?String(n/k):n/k+"/"+d/k; }
  const val=(stem,x,ds,concept,explanation,feedback={})=>({stem,x,ds,concept,explanation,feedback});
  const cleanSign=(x)=>x<0?"− "+(-x):"+ "+x;
  function bank(g,i,r) {
    const k=i%5, j=Math.floor(i/5), a=2+r(5)+j,b=2+r(4),c=1+r(5),x=(2+r(6))*(j?1:-1);
    switch (g) {
      case 1: {
        const v=[
          [`盒裡有 ${a} 顆球，又放入 ${b} 顆。共有幾顆？`,a+b,`放入代表增加，所以用 ${a}＋${b}。`],
          [`有 ${a+b} 張貼紙，送出 ${b} 張。還剩幾張？`,a,`剩下是原有減去送出：${a+b}－${b}。`],
          [`${a} 加上多少會等於 ${a+b}？`,b,`用總數 ${a+b} 減去已知的 ${a}。`],
          [`甲有 ${a+b} 枝筆，乙有 ${b} 枝。甲比乙多幾枝？`,a,`求相差多少，用較大的 ${a+b} 減去 ${b}。`],
          [`數線上從 ${a+b} 往左走 ${a} 格，會到哪個數？`,b,`往左走一格少 1，所以 ${a+b}－${a}。`]
        ][k];
        return val(v[0],v[1],[v[1]-1,v[1]+1,v[1]+2], "add",v[2]);
      }
      case 2: {
        const n=a*b;
        return [
          val(`${a} 盤餅乾，每盤 ${b} 片。共有幾片？`,n,[a+b,n-b,n+b],"place",`有 ${a} 組，每組 ${b} 片，所以用 ${a}×${b}＝${n}。`),
          val(`一輛玩具車有 ${b} 個輪子（含備輪），${a} 輛有幾個？`,n,[n-1,n+b,a+b],"place",`把 ${b} 重複加 ${a} 次，得到 ${n}。`),
          val(`每次跳 ${a} 格，跳 ${b} 次。總共跳幾格？`,n,[a+b,n-a,n+a],"place",`每次 ${a} 格，跳 ${b} 次就是 ${a}×${b}。`),
          val(`有 ${a} 組，每組 ${b} 個。哪個加法算式正確？`,Array(a).fill(b).join("＋"),[Array(a+1).fill(b).join("＋"),`${a}＋${b}`,Array(a).fill(b+1).join("＋")],"place",`每組 ${b} 個，所以把 ${b} 重複加 ${a} 次。`),
          val(`有 ${b} 盒筆，每盒 ${a} 枝。多拿一盒後，一共有幾枝？`,n+a,[n,n+b,n+1],"place",`盒數變成 ${b+1}，每盒仍是 ${a} 枝。`)
        ][k];
      }
      case 3: {
        const t=1+r(b-1), n=a*b+t;
        return [
          val(`${n} 顆糖，每袋裝 ${b} 顆。最多裝滿幾袋？`,a,[a+1,a-1,t],"share",`${n}＝${a}×${b}＋${t}，只有 ${a} 袋能裝滿。`),
          val(`${n} 個積木分給 ${b} 人，每人一樣多且盡量分。最後剩幾個？`,t,[a,b,t+1],"share",`${n} 除以 ${b}，商 ${a}，餘數 ${t}。`),
          val(`${n} 人搭小車，每台最多 ${b} 人。至少要幾台？`,a+1,[a,a+2,b],"share",`先坐滿 ${a} 台，還有 ${t} 人，需要再加一台。`),
          val(`有 ${a*b} 本書，每箱 ${b} 本剛好裝完。共幾箱？`,a,[a+1,b,a-1],"share",`${a*b}÷${b}＝${a}，沒有餘數。`),
          val(`${n} 個杯子，每盒裝 ${b} 個。還要幾個杯子才能把最後一盒裝滿？`,b-t,[t,b,b+1],"share",`最後一盒已裝 ${t} 個，還差 ${b}－${t} 個。`)
        ][k];
      }
      case 4: {
        const l=a+b,w=b,A=l*w,P=2*(l+w);
        return [
          val(`長 ${l} 公分、寬 ${w} 公分的長方形，面積是多少平方公分？`,A,[P,l+w,A+w],"area",`面積＝長×寬＝${l}×${w}。`),
          val(`長 ${l} 公分、寬 ${w} 公分的長方形，周長是多少公分？`,P,[A,l+w,P-2],"area",`有兩條長、兩條寬，周長為 2×(${l}＋${w})。`),
          val(`長方形面積 ${A} 平方公分，寬 ${w} 公分。長多少公分？`,l,[w,l+1,A-w],"area",`用面積除以寬：${A}÷${w}＝${l}。`),
          val(`長方形周長 ${P} 公分，長 ${l} 公分。寬多少公分？`,w,[l,P-l,w+1],"area",`周長的一半是長加寬，因此用 ${P}÷2－${l}。`),
          val(`長 ${l}、寬 ${w} 的長方形，長增加 2、寬不變。面積增加多少？`,2*w,[2,2*l,A],"area",`多了一條長 2、寬 ${w} 的長方形，增加 2×${w}。`)
        ][k];
      }
      case 5: {
        const d=a+b+c+2, f=n=>frac(n,d);
        return [
          val(`計算：${a}/${d} ＋ ${b}/${d}`,f(a+b),[frac(a+b,2*d),f(Math.abs(a-b)),f(a+b+1)],"fraction",`兩個分數的單位都是 1/${d}，分子相加、分母不變。`),
          val(`計算：${a+b}/${d} － ${b}/${d}`,f(a),[f(b),f(a+b),f(a-1)],"fraction",`從 ${a+b} 個 1/${d} 拿走 ${b} 個，剩 ${a} 個。`),
          val(`一瓶果汁喝掉 ${a}/${d} 瓶，後來又喝 ${b}/${d} 瓶。剩下幾瓶？`,f(d-a-b),[f(a+b),f(d-a),f(d-b)],"fraction",`把整瓶寫成 ${d}/${d}，分子減去 ${a} 再減去 ${b}。`),
          val(`${a}/${d} 加上多少會等於 ${a+b}/${d}？`,f(b),[f(a),f(a+b),f(b+1)],"fraction",`目標減掉起始量，分子是 ${a+b}－${a}。`),
          val(`兩段繩長為 ${a+b}/${d} 公尺與 ${a}/${d} 公尺，長度相差多少？`,f(b),[f(a+b),f(a),f(b-1)],"fraction",`單位同為 1/${d} 公尺，兩個分子相減即可。`)
        ][k];
      }
      case 6: {
        const d=b+2, e=a+b+3, bv=b+1, q=frac(a*d,bv), z=frac(a*bv,d), rev=frac(bv,a*d);
        if(k===0) return val(`有 ${a} 公升水，每瓶裝 ${bv}/${d} 公升。水量等於幾瓶的容量？`,q,[z,rev,frac(a*d-bv,d)],"fd",
          `問「總量裡有幾個每瓶容量」，所以是 ${a}÷(${bv}/${d})＝${a}×${d}/${bv}＝${q}。可以是部分瓶的容量。`,{
          [z]:"你用乘法算的是把總量取一個分數，不是在數總量包含幾個瓶子的容量。",
          [rev]:"你把「總量 ÷ 每瓶容量」的順序反過來了。",
          [frac(a*d-bv,d)]:"減法只算裝掉一瓶後的剩餘水量，不能回答一共有幾瓶的容量。"});
        if(k===1) {
          const correct=`${a}/${e} × ${d}/${bv}`, direct=`${a}/${e} × ${bv}/${d}`, invert=`${e}/${a} × ${bv}/${d}`, both=`${e}/${a} × ${d}/${bv}`;
          return val(`把 ${a}/${e} ÷ ${bv}/${d} 改寫為乘法，哪個正確？`,correct,[direct,invert,both],"fm",`被除數 ${a}/${e} 不變，只把除數 ${bv}/${d} 倒過來。`,{
            [direct]:"把除法改成乘法時，不能直接保留除數。",
            [invert]:"倒過來的是第二個分數，也就是除數，不是被除數。",
            [both]:"只需把除數倒過來，被除數必須保持原樣。"});
        }
        if(k===2) return val(`不做筆算：${a}/${e} ÷ (${bv}/${d}) 的結果和原本的 ${a}/${e} 比，哪個對？`,"變大，而且仍小於 1",["變小","不變","變大，而且一定大於 1"],"fs",`除以小於 1 的正數會變大，但本題兩個分數一比可知 ${a}/${e} 小於 ${bv}/${d}，所以商仍小於 1。`,{
          "變小":"除法不一定越除越小；除以不到 1 的量，可以數到比原本更多的份。",
          "不變":"只有除以 1 才會保持原量；這裡的除數比 1 小。",
          "變大，而且一定大於 1":"變大是跟原本的被除數比較，不是跟 1 比；被除數小於除數時，商小於 1。"});
        if(k===3) return val(`長 ${a} 公尺的繩子，每 ${bv}/${d} 公尺剪一段。可以剪出幾段完整的？`,Math.floor(a*d/bv),[Math.ceil(a*d/bv),a-1,a+2],"fd",`先算 ${a}÷(${bv}/${d})＝${q}；只算完整段，所以取不超過商的最大整數。`,{
          [Math.ceil(a*d/bv)]:"剩下不足一整段的繩子不能再算成一段，不能無條件進位。",
          [a-1]:"每段比 1 公尺短，至少能剪出和原本公尺數同樣多的完整段。",[a+2]:"不能固定比公尺數多兩段；要看總長除以每段長後能取幾個完整段。"});
        const q2=frac(a*d,e*bv), wrong2=frac(a*bv,e*d), rev2=frac(e*bv,a*d), invert2=frac(e*d,a*bv);
        return val(`一條步道長 ${a}/${e} 公里，等於某路線全長的 ${bv}/${d}。該路線全長幾公里？`,q2,[wrong2,rev2,invert2],"fm",
          `已知部分和比例，求全長要用「部分 ÷ 比例」：${a}/${e} ÷ ${bv}/${d}＝${q2}。`,{
          [wrong2]:"乘上這個比例，得到的是更小的一部分；這題要反推全長。",
          [rev2]:"比例不是總公里數；應用已知長度除以比例，不要把順序顛倒。",
          [invert2]:"倒數只用在除數（比例），不能把已知的步道長度也倒過來。"});
      }
      case 7: {
        const p=a+b;
        return [
          val(`計算：(${-p}) ＋ ${b}`,-a,[a,-p-b,p-b],"neg",`從負數往右走 ${b}，仍在 0 左邊 ${a} 格。`),
          val(`計算：${a} － (${-b})`,p,[a-b,-p,-a+b],"neg",`減去負數等於加上其相反數：${a}＋${b}。`),
          val(`計算：(${-a})×(${-b})`,a*b,[-a*b,p,-p],"neg",`兩個負數相乘得正數，絕對值相乘。`),
          val(`計算：(${-a*b})÷${b}`,-a,[a,-b,-a*b],"neg",`一正一負相除得負，絕對值為 ${a*b}÷${b}。`),
          val(`氣溫原本 ${-a}°C，先升 ${p}°C，再降 ${b+2}°C，最後幾度？`,-2,[2,b,-b-2],"neg",`先到 ${-a}＋${p}＝${b}°C，再降 ${b+2}°C。`)
        ][k];
      }
      case 8: {
        const m=a*x+b;
        return [
          val(`解方程式：${a}x＋${b}＝${m}`,x,[m-b,-x,x+1],"linear",`兩邊減 ${b}，再同除以 ${a}。`),
          val(`解方程式：${a}(x－${b})＝${a*(x-b)}`,x,[x-b,x+b,-x],"linear",`先同除以 ${a}，兩邊再加上 ${b}。`),
          val(`解方程式：x/${a}＋${b}＝${x+b}`,a*x,[x,-a*x,x+b],"linear",`先減 ${b}，得 x/${a}＝${x}；兩邊同乘 ${a}。`),
          val(`解方程式：${a+1}x＋${b}＝${a}x ${cleanSign(x+b)}`,x,[x+b,x-b,-x],"linear",`兩邊減 ${a}x，剩 x＋${b}＝${x+b}；再減 ${b}。`),
          val(`某數的 ${a} 倍加 ${b} 等於 ${m}。原來的數是多少？`,x,[m/a,-x,m-b],"linear",`令原數為 x，列 ${a}x＋${b}＝${m}，然後逆向解出 x。`)
        ][k];
      }
      case 9: {
        const t=1+r(5)+j,l=3*t,w=4*t,h=5*t;
        return [
          val(`直角三角形兩股長 ${l}、${w}，斜邊長多少？`,h,[l+w,w-l,h+1],"pyth",`斜邊平方是 ${l}²＋${w}²，開根號得 ${h}。`),
          val(`直角三角形斜邊 ${h}，一股 ${w}。另一股長多少？`,l,[h-w,h+w,l+1],"pyth",`另一股平方為 ${h}²－${w}²，開根號得 ${l}。`),
          val(`長方形長 ${w}、寬 ${l}。對角線長多少？`,h,[l+w,w,h-1],"pyth",`長、寬與對角線構成直角三角形；對角線是斜邊。`),
          val(`從原點向右 ${l} 單位、向下 ${w} 單位，終點離原點多少單位？`,h,[l+w,w-l,h+2],"pyth",`水平和垂直位移互相垂直，距離是 √(${l}²＋${w}²)。`),
          val(`哪組邊長能組成直角三角形？`,`${l}, ${w}, ${h}`,[`${l}, ${w}, ${h+1}`,`${l}, ${w}, ${h-1}`,`${l}, ${w}, ${h+2}`],"pyth",`用最大邊當候選斜邊；只有 ${l}²＋${w}²＝${h}²。`)
        ][k];
      }
      case 10: {
        const h=x,v=b+c;
        return [
          val(`y＝${a}(x ${cleanSign(-h)})²＋${v} 的頂點為何？`,`(${h}, ${v})`,[`(${-h}, ${v})`,`(${h}, ${-v})`,`(${-h}, ${-v})`],"quad",`令平方項為 0：x＝${h}，此時 y＝${v}。`),
          val(`y＝−${a}(x ${cleanSign(-h)})²＋${v} 的最大值是多少？`,v,[h,-v,0],"quad",`係數為負，平方項為 0 時函數最大，為 ${v}。`),
          val(`y＝${a}(x ${cleanSign(-h)})²－${v} 的對稱軸？`,`x＝${h}`,[`x＝${-h}`,`y＝${h}`,`y＝${-v}`],"quad",`頂點的 x 座標是 ${h}，對稱軸為通過頂點的垂直線。`),
          val(`y＝x² ${cleanSign(-2*h)}x＋${h*h+v} 的最小值？`,v,[h,h*h+v,-v],"quad",`配方得 (x ${cleanSign(-h)})²＋${v}，最小值為 ${v}。`),
          val(`y＝${a}(x ${cleanSign(-h)})²＋${v}，當 x＝${h+2} 時 y 多少？`,4*a+v,[2*a+v,4*a,v],"quad",`與頂點 x 座標相差 2，平方後為 4，所以 y＝4×${a}＋${v}。`)
        ][k];
      }
      case 11: {
        const first=a, d=j?-b:b, n=c+4, last=first+(n-1)*d, sum=n*(first+last)/2;
        return [
          val(`等差數列首項 ${first}、公差 ${d}。第 ${n} 項是多少？`,last,[last+d,last-d,first+n],"seq",`從首項到第 ${n} 項跨了 ${n-1} 個公差。`),
          val(`等差數列第 1 項 ${first}，第 ${n} 項 ${last}。公差是多少？`,d,[-d,d+1,last-first],"seq",`兩項的差 ${last-first}，除以 ${n-1} 個間隔。`),
          val(`等差數列共有 ${n} 項，首項 ${first}、末項 ${last}。總和多少？`,sum,[first+last,n*last,n*first],"seq",`用項數乘上首末平均：${n}×(${first}＋(${last}))/2。`),
          val(`等差數列第 ${n} 項 ${last}、公差 ${d}。首項多少？`,first,[last-d,last-(n*d),last+(n-1)*d],"seq",`從第 ${n} 項退回 ${n-1} 個公差。`),
          val(`等差數列首項 ${first}、公差 ${d}。第幾項是 ${last}？`,n,[n-1,n+1,Math.abs(d)],"seq",`先算變化量除以公差得 ${n-1} 個間隔，再加 1 轉成項次。`)
        ][k];
      }
      case 12: {
        const n=c+2, f=y=>a*y*y+b*y;
        return [
          val(`f(x)＝${a}x^${n}，f′(x) 是什麼？`,`${a*n}x^${n-1}`,[`${a}x^${n-1}`,`${a*n}x^${n}`,`${a+n}x^${n+1}`],"poly",`冪次法則：係數乘上指數 ${n}，指數減 1。`),
          val(`f(x)＝${a}x²＋${b}x＋${c}，f′(${x}) 多少？`,2*a*x+b,[2*a*x+b+c,a*x+b,2*a*x],"poly",`先微分成 2×${a}x＋${b}，常數項導數是 0，再代入 x＝${x}。`),
          val(`曲線 y＝${a}x²＋${b}x 的 x＝${x} 處切線斜率是多少？`,2*a*x+b,[f(x),2*a+b,a*x+b],"poly",`切線斜率是該點的導數值，不是原函數高度。代入 f′(x)＝${2*a}x＋${b}。`),
          val(`f(x)＝${a}(x ${cleanSign(-x)})²＋${b}，哪個 x 使 f′(x)＝0？`,x,[-x,b,x+1],"poly",`導數為 ${2*a}(x ${cleanSign(-x)})，令括號等於 0。`),
          val(`f(x)＝${a}x³＋${b}x＋${c}，f′(0) 多少？`,b,[c,a,b+c],"poly",`f′(x)＝${3*a}x²＋${b}，代 0 後只剩 ${b}。`)
        ][k];
      }
    }
  }
  function generate(gradeId,seed=0) {
    const g=Number(gradeId);
    if (!Number.isInteger(g)||g<1||g>12) throw new RangeError("Unknown grade: "+gradeId);
    const r=rng(g+":"+String(seed)); const seen=new Set(); const result=[];
    for(let i=0;i<10;i++) {
      let q;
      for(let tries=0; tries<80; tries++){
        q=bank(g,i,r);
        const options=new Set([q.x,...q.ds].map(String));
        if(!seen.has(q.stem) && q.ds.length===3 && options.size===4) break;
        q=null;
      }
      if(!q) { // Rare collisions: choose another template before using a generic numeric distractor.
        for(let tries=0;tries<500&&!q;tries++){
          const candidate=bank(g,i+5+r(5),r);
          if(!seen.has(candidate.stem)&&new Set([candidate.x,...candidate.ds].map(String)).size===4) q=candidate;
        }
      }
      if(!q) throw Error("Cannot produce unique question for grade "+g+" slot "+i);
      seen.add(q.stem);
      const options=[String(q.x),...q.ds.map(String)];
      for(let p=options.length-1;p>0;p--){const idx=r(p+1); [options[p],options[idx]]=[options[idx],options[p]];}
      const answer=options.indexOf(String(q.x));
      const feedback={};
      options.forEach((o,index)=>{if(index!==answer&&Object.hasOwn(q.feedback,o)) feedback[index]=q.feedback[o];});
      result.push({id:`g${g}-${encodeURIComponent(String(seed))}-${i+1}`,stem:q.stem,options,answer,concept:q.concept,explanation:q.explanation,...(Object.keys(feedback).length?{feedback}:{})});
    }
    return result;
  }
  const grades=labels.map((label,i)=>({id:i+1,label,unit:units[i],make:seed=>generate(i+1,seed)}));
  globalThis.StudyBank={grades,generate,concepts};
})();
