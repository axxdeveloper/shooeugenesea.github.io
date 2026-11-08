const assert = require('node:assert/strict');
const {sma,verifiedRows,combined} = require('../assets/js/market-dashboard.js');
const rows=Array.from({length:240},(_,i)=>({date:new Date(Date.UTC(2025,0,i+1)).toISOString().slice(0,10),amountTwd:i+1}));
for(const n of [5,20,120,240]){const avg=sma(rows,n);assert.equal(avg[n-2],null);assert.equal(avg[n-1],(n+1)/2);assert.equal(avg[239],(240+241-n)/2);}
const market={verified:true,license:'Test fixture only',source:'https://example.org',observations:rows};
assert.equal(verifiedRows(market).length,240);
for(const bad of [{...market,verified:false},{...market,license:'pending'},{...market,observations:[rows[1],rows[0]]},{...market,observations:[rows[0],rows[0]]},{...market,observations:[{date:'2025-02-30',amountTwd:1}]},{...market,observations:[{date:'2025-01-01',amountTwd:null}]},{...market,observations:[{date:'2025-01-01',amountTwd:-1}]},{...market,observations:[{date:'2099-01-01',amountTwd:1}]}]) assert.deepEqual(verifiedRows(bad),[]);
assert.equal(combined([],rows),null);assert.equal(combined(rows.slice(0,-1),rows),null);assert.deepEqual(combined(rows,rows),{date:rows[239].date,amountTwd:480});
console.log('PASS: complete-window SMA; invalid, duplicate, unordered, future and unverified data; same-date totals.');
