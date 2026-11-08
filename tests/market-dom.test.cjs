// DOM unit test only: does not execute TradingView or claim browser rendering QA.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { parseHTML } = require(process.env.ISAAC_DOM_MODULE || 'linkedom');
const html = fs.readFileSync(process.argv[2] || '_site/index.html', 'utf8');
const { window } = parseHTML(html);
const { document } = window;
const code = fs.readFileSync('assets/js/market-dashboard.js', 'utf8');
vm.runInNewContext(code, {document, Date, Number, JSON, Promise, Array, Math, String, console});
assert.match(document.querySelector('#market-widget').textContent, /92\.50/);
assert.match(document.querySelector('#market-widget-status').textContent, /2026-11-06/);
assert.match(document.querySelector('#market-monthly-value').textContent, /8,342\.97/);
assert.ok(document.querySelector('#market-monthly-chart svg'));
assert.equal(document.querySelectorAll('#market-monthly-chart table tr').length, 61);
document.querySelector('[data-months="0"]').click();
assert.equal(document.querySelectorAll('#market-monthly-chart table tr').length, 333);
for (const ticker of ['QQQ','VT','VTI','VGIT']) {
  document.querySelector(`[data-symbol="${ticker}"]`).click();
  const config = JSON.parse(document.querySelector('#market-widget script').textContent);
  assert.equal(config.symbol.split(':')[1], ticker);
  assert.deepEqual(Array.from(config.studies, x=>x.inputs.length), [5,20,120,240]);
  assert.equal(document.querySelector(`[data-symbol="${ticker}"]`).getAttribute('aria-pressed'), 'true');
}
document.querySelector('[data-symbol="0050"]').click();
assert.equal(document.querySelector('#market-widget script'), null);
assert.match(document.querySelector('#market-widget').textContent, /92\.50/);
console.log('PASS: DOM snapshot, monthly SVG/period switch, all ETF controls/configuration; external iframe rendering not tested.');
