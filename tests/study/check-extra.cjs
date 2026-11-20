'use strict';
const assert = require('node:assert/strict');
require('../../study/extra.js');

// Treat a question as rendered text, not as generator parameters. Parse each
// wording, solve it independently, and compare every visible answer option.
const n = x => Number(x);
const integer = s => /^[-−]?\d+$/.test(s) ? BigInt(s.replace('−', '-')) : null;
const equalInteger = k => s => integer(s) === BigInt(k);
function leastPair(x, y) {
  let i = x, j = y;
  while (j) [i, j] = [j, i % j];
  return [x / i, y / i];
}
function reducedPair(x, y, separator) {
  const target = leastPair(x, y);
  return s => {
    const parts = s.split(separator);
    return parts.length === 2 &&
      parts.every((v, k) => /^\d+$/.test(v) && n(v) === target[k]);
  };
}
const expNum = s => n([...s].map(c => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)).join(''));
function samplePower(s, variable, point) {
  if (/^-?\d+$/.test(s)) return BigInt(s);
  if (s === variable) return point;
  const m = s.match(/^([ax])([⁰¹²³⁴⁵⁶⁷⁸⁹]+)$/u);
  if (!m || m[1] !== variable) return null;
  return point ** BigInt(expNum(m[2]));
}
const powerMatch = (v, evalAt) => s =>
  [2n, 3n].every(point => samplePower(s, v, point) === evalAt(point));
function solve(stem) {
  let m;
  if ((m = stem.match(/^(\d+) × (\d+) = ？$/))) return equalInteger(n(m[1]) * n(m[2]));
  if ((m = stem.match(/^有 (\d+) (盤餅乾|盒鉛筆)，每([盤盒]) (\d+) ([片枝])。一共有幾\5？$/))) {
    assert.ok((m[2] === '盤餅乾' && m[3] === '盤' && m[5] === '片') ||
      (m[2] === '盒鉛筆' && m[3] === '盒' && m[5] === '枝'), stem);
    return equalInteger(n(m[1]) * n(m[4]));
  }
  if ((m = stem.match(/^(\d+) × □ = (\d+)，□ 是多少？$/))) return equalInteger(n(m[2]) / n(m[1]));
  if ((m = stem.match(/^把 (\d+)：(\d+) 化成最簡整數比。$/))) return reducedPair(n(m[1]), n(m[2]), '：');
  if ((m = stem.match(/^(\d+)：(\d+) = (\d+)：□，□ 是多少？$/))) return equalInteger(n(m[2]) * n(m[3]) / n(m[1]));
  if ((m = stem.match(/^(\d+)：(\d+) 的比值用最簡分數表示是多少？$/))) return reducedPair(n(m[1]), n(m[2]), '/');
  if ((m = stem.match(/^(\d+) \+ \(−(\d+)\) = ？$/))) return equalInteger(n(m[1]) + (-n(m[2])));
  if ((m = stem.match(/^\(−(\d+)\) − \(−(\d+)\) = ？$/))) return equalInteger(-n(m[1]) - (-n(m[2])));
  if ((m = stem.match(/^\(−(\d+)\) × \(−(\d+)\) = ？$/))) return equalInteger((-n(m[1])) * (-n(m[2])));
  if ((m = stem.match(/^\(−(\d+)\) ÷ (\d+) = ？$/))) return equalInteger(-n(m[1]) / n(m[2]));
  const p = '([⁰¹²³⁴⁵⁶⁷⁸⁹]+)';
  if ((m = stem.match(new RegExp('^化簡 ([ax])' + p + ' × \\1' + p + '。$', 'u')))) {
    return powerMatch(m[1], x => samplePower(m[1] + m[2], m[1], x) * samplePower(m[1] + m[3], m[1], x));
  }
  if ((m = stem.match(new RegExp('^已知 ([ax]) ≠ 0，化簡 \\1' + p + ' ÷ \\1' + p + '。$', 'u')))) {
    return powerMatch(m[1], x => {
      const left = samplePower(m[1] + m[2], m[1], x);
      const right = samplePower(m[1] + m[3], m[1], x);
      assert.equal(left % right, 0n, stem);
      return left / right;
    });
  }
  if ((m = stem.match(new RegExp('^化簡 \\(([ax])' + p + '\\)' + p + '。$', 'u')))) {
    return powerMatch(m[1], x => samplePower(m[1] + m[2], m[1], x) ** BigInt(expNum(m[3])));
  }
  assert.fail('No independent solver for: ' + stem);
}

const counts = new Map();
const seeds = [...Array.from({length: 1000}, (_, i) => i), -1, 1.25, '', '分數', 'mobile-abc'];
assert.deepEqual(globalThis.StudyExtra.map(u => u.id).sort(),
  ['exponent-laws', 'integer-ops', 'ratio', 'times-table']);
for (const u of globalThis.StudyExtra) {
  for (const seed of seeds) {
    const round = u.make(seed);
    assert.deepEqual(u.make(seed), round, u.id + ': seed must be deterministic');
    assert.equal(round.length, 10);
    assert.equal(new Set(round.map(q => q.stem)).size, 10);
    assert.equal(new Set(round.map(q => q.id)).size, 10);
    for (const q of round) {
      assert.equal(q.options.length, 4, q.id);
      assert.equal(new Set(q.options).size, 4, q.id);
      const accepts = solve(q.stem);
      const correct = q.options.flatMap((option, i) => accepts(option) ? [i] : []);
      assert.equal(correct.length, 1, q.id + ' ' + q.stem + ' ' + q.options.join(', '));
      assert.equal(q.answer, correct[0], q.id + ' ' + q.stem);
      assert.ok(typeof q.explanation === 'string' && q.explanation.trim(), q.id);
      counts.set(u.id + '/' + q.concept, (counts.get(u.id + '/' + q.concept) || 0) + 1);
    }
  }
}
assert.equal(counts.size, 14, 'All current concepts must be covered');
console.log('Verified ' + seeds.length * 10 * StudyExtra.length +
  ' generated questions across ' + counts.size + ' concepts (' +
  seeds.length + ' seeds/unit). Each has exactly one independently solved answer.');
