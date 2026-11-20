(() => {
  "use strict";
  const range = n => Array.from({ length: n }, (_, i) => i);
  function build(grade, id, unit, draft) {
    return {
      grade, id, unit,
      make(seed = 0) {
        // FNV-1a followed by an independent PRNG per unit / round.
        let state = 2166136261;
        for (const c of id + ":" + String(seed)) state = Math.imul(state ^ c.charCodeAt(0), 16777619) >>> 0;
        const tag = state.toString(36);
        const rnd = () => {
          state = (state + 0x6D2B79F5) | 0;
          let t = Math.imul(state ^ (state >>> 15), state | 1);
          t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
          return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
        const pick = (min, max) => min + Math.floor(rnd() * (max - min + 1));
        const shuffle = a => {
          a = a.slice();
          for (let i = a.length - 1; i > 0; i--) {
            const j = pick(0, i);
            [a[i], a[j]] = [a[j], a[i]];
          }
          return a;
        };
        const questions = [];
        const seen = new Set();
        for (const i of range(10)) {
          let q;
          for (let tries = 0; tries < 150; tries++) {
            q = draft(pick, i, tries);
            if (!seen.has(q.stem)) break;
          }
          seen.add(q.stem);
          const correct = String(q.correct);
          const choices = [...new Set([correct, ...q.distractors.map(String)])].slice(0, 4);
          for (let offset = 1; choices.length < 4; offset++) {
            if (!/^-?\d+$/.test(correct)) throw new Error("Too few choices for " + q.stem);
            const next = String(Number(correct) + offset);
            if (!choices.includes(next)) choices.push(next);
          }
          const options = shuffle(choices);
          questions.push({
            id: id + "-" + tag + "-" + (i + 1),
            stem: q.stem,
            options,
            answer: options.indexOf(correct),
            concept: q.concept,
            explanation: q.explanation
          });
        }
        return shuffle(questions);
      }
    };
  }

  const multiplication = build(3, "times-table", "九九乘法", (pick, i) => {
    const a = pick(2, 9), b = pick(2, 9), ab = a * b;
    if (i % 3 === 0) {
      return {
        stem: `${a} × ${b} = ？`, correct: ab,
        distractors: [ab + a, ab - a, ab + b, ab - b, a + b],
        concept: "乘法算式",
        explanation: `${a} × ${b} 表示有 ${b} 個 ${a}，合起來是 ${ab}。`
      };
    }
    if (i % 3 === 1) {
      const setting = i % 2 === 0 ? ["盤", "餅乾", "片"] : ["盒", "鉛筆", "枝"];
      return {
        stem: `有 ${b} ${setting[0]}${setting[1]}，每${setting[0]} ${a} ${setting[2]}。一共有幾${setting[2]}？`, correct: ab,
        distractors: [a + b, ab + a, ab - a, ab + b, ab + 1],
        concept: "等量分組",
        explanation: `每${setting[0]}有 ${a} ${setting[2]}，有 ${b} ${setting[0]}，所以用 ${a} × ${b} = ${ab}。`
      };
    }
    return {
      stem: `${a} × □ = ${ab}，□ 是多少？`, correct: b,
      distractors: [b + 1, b - 1, b + 2, b - 2, a],
      concept: "未知乘數",
      explanation: `用 ${a} 的九九乘法找答案：${a} 乘以 ${b} 正好等於 ${ab}。`
    };
  });

  const ratios = [[2,3], [3,4], [3,5], [4,5], [4,7], [5,6], [5,8], [7,9], [2,7], [3,8]];
  const ratio = build(6, "ratio", "比與比值", (pick, i) => {
    const [a, b] = ratios[pick(0, ratios.length - 1)];
    const k = pick(2, 7), x = a * k, y = b * k;
    if (i % 3 === 0) {
      return {
        stem: `把 ${x}：${y} 化成最簡整數比。`, correct: `${a}：${b}`,
        distractors: [`${b}：${a}`, `${x}：${b}`, `${a}：${y}`, `${a+1}：${b+1}`],
        concept: "最簡整數比",
        explanation: `比的前項和後項同除以最大公因數 ${k}，得到 ${a}：${b}。`
      };
    }
    if (i % 3 === 1) {
      return {
        stem: `${a}：${b} = ${x}：□，□ 是多少？`, correct: y,
        distractors: [b, x, y + k, y - k, y + 1],
        concept: "相等的比",
        explanation: `前項由 ${a} 變成 ${x}，是乘以 ${k}；後項也要乘以 ${k}，所以是 ${b} × ${k} = ${y}。`
      };
    }
    return {
      stem: `${x}：${y} 的比值用最簡分數表示是多少？`, correct: `${a}/${b}`,
      distractors: [`${b}/${a}`, `${a}/${a+b}`, `${b}/${a+b}`, `${b-a}/${b}`],
      concept: "比值",
      explanation: `比值是前項除以後項。\n${x} ÷ ${y} = ${x}/${y}，約分得 ${a}/${b}。`
    };
  });

  const integers = build(7, "integer-ops", "正負數的四則運算", (pick, i) => {
    const a = pick(2, 16), b = a + pick(1, 12), c = pick(2, 9);
    if (i % 4 === 0) {
      return {
        stem: `${a} + (−${b}) = ？`, correct: a-b,
        distractors: [b-a, a+b, -(a+b), a-b-1],
        concept: "異號相加",
        explanation: `異號相加，先用較大的絕對值 ${b} 減較小的 ${a}，得 ${b-a}；絕對值較大的數是負數，答案是 ${a-b}。`
      };
    }
    if (i % 4 === 1) {
      return {
        stem: `(−${a}) − (−${b}) = ？`, correct: b-a,
        distractors: [a-b, -(a+b), a+b, b-a+1],
        concept: "減去負數",
        explanation: `減去負數等於加上它的相反數，所以 (−${a}) + ${b} = ${b-a}。`
      };
    }
    if (i % 4 === 3) {
      return {
        stem: `(−${a*c}) ÷ ${c} = ？`, correct: -a,
        distractors: [a, -a*c, -(a+c), -a-1],
        concept: "異號相除",
        explanation: `異號相除的商是負數，先算絕對值：${a*c} ÷ ${c} = ${a}，所以答案是 −${a}。`
      };
    }
    return {
      stem: `(−${a}) × (−${c}) = ？`, correct: a*c,
      distractors: [-a*c, a+c, -a-c, a*c+1],
      concept: "負數相乘",
      explanation: `同號相乘的積是正數，絕對值相乘 ${a} × ${c} = ${a*c}。`
    };
  });

  const superscript = n => String(n).replace(/[0-9]/g, d => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(d)]);
  const power = (varName, n) => varName + superscript(n);
  const exponents = build(10, "exponent-laws", "整數指數律", (pick, i) => {
    // Min bound 3 for each exponent keeps key operations and distractors distinct.
    const a = pick(3, 11), b = pick(3, 9), v = i % 2 ? "x" : "a";
    const P = n => power(v, n);
    if (i % 4 === 0) {
      return {
        stem: `化簡 ${P(a)} × ${P(b)}。`, correct: P(a+b),
        distractors: [P(a*b), P(Math.abs(a-b)), P(a+b+1), P(a+b+2)],
        concept: "同底數相乘",
        explanation: `同底數的冪相乘，底數不變、指數相加：${a} + ${b} = ${a+b}，所以是 ${P(a+b)}。`
      };
    }
    if (i % 4 === 1) {
      return {
        stem: `已知 ${v} ≠ 0，化簡 ${P(a+b)} ÷ ${P(b)}。`, correct: P(a),
        distractors: [P(a+2*b), P(a*b), P(a+b), P(a+1)],
        concept: "同底數相除",
        explanation: `同底數的冪相除，底數不變、用被除數的指數減去除數的指數：${a+b} − ${b} = ${a}。`
      };
    }
    if (i % 4 === 2) {
      return {
        stem: `化簡 (${P(a)})${superscript(b)}。`, correct: P(a*b),
        distractors: [P(a+b), P(Math.abs(a-b)), P(a*b+1), P(a*b+2)],
        concept: "冪的乘方",
        explanation: `(${P(a)})${superscript(b)} 表示把 ${P(a)} 相乘 ${b} 次，指數為 ${a} × ${b} = ${a*b}。`
      };
    }
    return {
      stem: `已知 ${v} ≠ 0，化簡 ${P(a)} ÷ ${P(a)}。`, correct: "1",
      distractors: ["0", v, P(a), P(2*a)],
      concept: "零指數",
      explanation: `非零的數除以自己等於 1；指數相減也得到 ${P(0)}，所以 ${P(0)} = 1。`
    };
  });

  globalThis.StudyExtra = [multiplication, ratio, integers, exponents];
})();
