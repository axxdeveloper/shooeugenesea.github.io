// DOM unit test only: does not execute TradingView or claim browser rendering QA.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { parseHTML } = require(process.env.ISAAC_DOM_MODULE || 'linkedom');
const html = fs.readFileSync(process.argv[2] || '_site/index.html', 'utf8');
const { window } = parseHTML(html);
const { document } = window;
const data = JSON.parse(document.getElementById('market-extra-data').textContent);
const price = data.price0050.observations.at(-1);
const monthly = data.creditMonthly.observations;
assert.equal(document.querySelector('[data-market="listed"]'), null);
assert.equal(document.querySelector('[data-market="otc"]'), null);
assert.ok(document.querySelector('#market-taiwan-data #market-monthly-chart'));
assert.match(document.querySelector('#market-taiwan-data').textContent, /並非 0050 專屬/);
const code = fs.readFileSync('assets/js/market-dashboard.js', 'utf8');
vm.runInNewContext(code, {document, Date, Number, JSON, Promise, Array, Math, String, console});
assert.ok(document.querySelector('#market-widget').textContent.includes(price.close.toFixed(2)));
assert.equal(document.querySelector('#market-taiwan-data').hidden, false);
assert.equal(document.querySelector('#market-us-method').hidden, true);
assert.ok(document.querySelector('#market-widget-status').textContent.includes(price.date));
assert.ok(document.querySelector('#market-monthly-value').textContent.includes((monthly.at(-1).amountTwd/1e8).toLocaleString('zh-TW',{minimumFractionDigits:2,maximumFractionDigits:2})));
assert.match(document.querySelector('#market-day-values').textContent, /加權指數：/);
assert.match(document.querySelector('#market-day-values').textContent, /市場成交金額：/);
assert.equal(document.querySelector('#market-taiwan-data #market-day-title').textContent, '台股每日市場觀察');
assert.ok(document.querySelector('#market-monthly-chart svg'));
assert.equal(document.querySelectorAll('#market-monthly-chart table tr').length, 61);
document.querySelector('[data-months="0"]').click();
assert.equal(document.querySelectorAll('#market-monthly-chart table tr').length, monthly.length + 1);
for (const ticker of ['QQQ','VT','VTI','VGIT']) {
  document.querySelector(`[data-symbol="${ticker}"]`).click();
  assert.equal(document.querySelector('#market-taiwan-data').hidden, true);
  assert.equal(document.querySelector('#market-us-method').hidden, false);
  assert.equal(document.querySelector('#market-source').href.includes('twse'), false);
  const config = JSON.parse(document.querySelector('#market-widget script').textContent);
  assert.equal(config.symbol.split(':')[1], ticker);
  assert.deepEqual(Array.from(config.studies, x=>x.inputs.length), [5,20,120,240]);
  assert.equal(document.querySelector(`[data-symbol="${ticker}"]`).getAttribute('aria-pressed'), 'true');
}
document.querySelector('[data-symbol="0050"]').click();
assert.equal(document.querySelector('#market-widget script'), null);
assert.ok(document.querySelector('#market-widget').textContent.includes(price.close.toFixed(2)));
assert.equal(document.querySelector('#market-taiwan-data').hidden, false);
assert.equal(document.querySelector('#market-us-method').hidden, true);
assert.equal(document.querySelectorAll('#market-monthly-chart table tr').length, monthly.length + 1, 'return to 0050 preserves chosen monthly range');
console.log('PASS: DOM snapshot, monthly SVG/range retained, Taiwan region visible only for 0050, all ETF controls/configuration; external iframe rendering not tested.');

// A failed source check retains its actual data date and displays a warning.
const failedDoc = parseHTML(html).window.document;
const failedData = JSON.parse(failedDoc.getElementById('market-extra-data').textContent);
failedData.price0050.update = {status:'error', checkedAt:'2026-11-13T00:00:00Z', errorCode:'http_403'};
failedData.taiwanMarket.update = {status:'error', checkedAt:'2026-11-13T00:00:00Z', errorCode:'invalid_data'};
failedDoc.getElementById('market-extra-data').textContent = JSON.stringify(failedData);
vm.runInNewContext(code, {document:failedDoc, Date, Number, JSON, Promise, Array, Math, String, console});
assert.match(failedDoc.querySelector('#market-price-update').textContent, /來源拒絕存取/);
assert.match(failedDoc.querySelector('#market-day-update').textContent, /資料未通過檢查/);
assert.ok(failedDoc.querySelector('#market-widget-status').textContent.includes(price.date));
console.log('PASS: failure warnings distinguish check time from unchanged data date.');
