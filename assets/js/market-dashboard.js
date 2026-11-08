/* Standalone helpers are exported for data-integrity checks without a browser. */
(function () {
  'use strict';
  const periods = [5, 20, 120, 240];
  function sma(rows, period) {
    return rows.map((row, i) => i + 1 < period ? null :
      rows.slice(i + 1 - period, i + 1).reduce((sum, item) => sum + item.amountTwd, 0) / period);
  }
  function verifiedRows(market) {
    if (!market || market.verified !== true || !market.license || market.license === 'pending' ||
        !/^https:\/\//.test(market.source || '') || !Array.isArray(market.observations)) return [];
    let last = '';
    for (const row of market.observations) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(row.date) || !Number.isFinite(Date.parse(row.date)) ||
          new Date(row.date).toISOString().slice(0, 10) !== row.date || row.date <= last ||
          row.date > new Date().toISOString().slice(0, 10) ||
          !Number.isSafeInteger(row.amountTwd) || row.amountTwd < 0) return [];
      last = row.date;
    }
    return market.observations;
  }
  function combined(a, b) {
    if (!a.length || !b.length || a[a.length - 1].date !== b[b.length - 1].date) return null;
    return {date:a[a.length - 1].date, amountTwd:a[a.length - 1].amountTwd + b[b.length - 1].amountTwd};
  }
  if (typeof module !== 'undefined') module.exports = {sma, verifiedRows, combined};
  if (typeof document === 'undefined') return;
  const root = document.querySelector('.market-dashboard');
  if (!root) return;
  const symbols = {
    '0050': {symbol:'TWSE:0050', name:'台灣大型股', currency:'TWD'},
    QQQ: {symbol:'NASDAQ:QQQ', name:'Nasdaq 100', currency:'USD'},
    VT: {symbol:'AMEX:VT', name:'全球股票', currency:'USD'},
    VTI: {symbol:'AMEX:VTI', name:'美國全市場', currency:'USD'},
    VGIT: {symbol:'NASDAQ:VGIT', name:'美國中期公債', currency:'USD'}
  };
  const embedded = id => JSON.parse(document.getElementById(id).textContent);
  let extra = {};
  try { extra = embedded('market-extra-data'); } catch (_) { /* preserve explicit missing-data states */ }
  const host = root.querySelector('#market-widget');
  const status = root.querySelector('#market-widget-status');
  function select(ticker) {
    const item = symbols[ticker];
    root.querySelectorAll('[data-symbol]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.symbol === ticker)));
    root.querySelector('#market-chart-title').textContent = ticker + ' · ' + item.name;
    root.querySelector('#market-currency').textContent = item.currency;
    const source = root.querySelector('#market-source');
    source.href = 'https://www.tradingview.com/symbols/' + item.symbol.replace(':', '-') + '/';
    source.textContent = '在 TradingView 查看 ' + ticker + ' ↗';
    host.replaceChildren();
    if (ticker === '0050') {
      source.href = 'https://data.gov.tw/dataset/11549';
      source.textContent = '查看 0050 官方開放資料 ↗';
      root.querySelector('#market-ma-caption').textContent = '0050 官方每日收盤快照；完整日歷史尚未接通，目前不計算均線。價格未還原除息與分割。';
      const box = document.createElement('div'); box.className = 'market-price-snapshot';
      const price = extra.price0050;
      const rows = price && price.observations;
      if (!Array.isArray(rows) || !rows.length || !Number.isFinite(rows[rows.length - 1].close)) {
        box.textContent = '0050 資料無法讀取，請查看官方來源。';
        status.textContent = '資料日期：未取得。';
      } else {
        const last = rows[rows.length - 1];
        const label = document.createElement('p'); label.textContent = '0050 · 元大台灣50 · 最新已取得收盤價';
        const value = document.createElement('strong'); value.textContent = last.close.toFixed(2);
        const unit = document.createElement('small'); unit.textContent = '新台幣 / 每受益權單位';
        const note = document.createElement('p'); note.textContent = `已累積 ${rows.length} 筆官方每日快照；尚無完整歷史序列，不繪製推估走勢，也不以追蹤指數替代 ETF。`;
        const credit = document.createElement('p'); credit.textContent = '臺灣證券交易所／金融監督管理委員會證券期貨局 2026「盤後資訊 > 個股日成交資訊」，政府資料開放授權條款第 1 版。';
        box.append(label, value, unit, note, credit);
        const age = Math.floor((Date.now() - Date.parse(last.date + 'T00:00:00+08:00')) / 86400000);
        status.textContent = '資料日期：' + last.date + ' · 官方收盤快照，非即時行情' + (age > 7 ? ' · 已超過 7 天未更新' : '');
      }
      host.append(box);
      return;
    }
    root.querySelector('#market-ma-caption').textContent = '預設日線及 MA 5／20／120／240；供應商參數尚待瀏覽器驗證。可在圖表內調整移動平均線長度，切換週線後單位也會改變。';
    status.textContent = '資料日期、價格與延遲狀態以圖表內標示為準；若圖表空白或顯示不支援，請使用下方來源連結。';
    const container = document.createElement('div');
    container.className = 'tradingview-widget-container';
    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container__widget';
    const credit = document.createElement('div');
    credit.className = 'tradingview-widget-copyright';
    const link = document.createElement('a');
    link.href = source.href; link.target = '_blank'; link.rel = 'noopener nofollow'; link.textContent = ticker + ' chart';
    credit.append(link, document.createTextNode(' by TradingView'));
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.textContent = JSON.stringify({autosize:true,symbol:item.symbol,interval:'D',timezone:'exchange',theme:'dark',style:'1',locale:'zh_TW',withdateranges:true,allow_symbol_change:false,hide_side_toolbar:true,save_image:false,calendar:false,support_host:'https://www.tradingview.com',studies:periods.map(length => ({id:'MASimple@tv-basicstudies',inputs:{length}}))});
    script.onerror = () => { if (container.isConnected) status.textContent = '圖表載入失敗，請稍後切換重試，或開啟下方 TradingView 來源。'; };
    container.append(widget, credit, script); host.append(container);
  }
  root.querySelectorAll('[data-symbol]').forEach(button => button.addEventListener('click', () => select(button.dataset.symbol)));
  select('0050');
  const number = amount => (amount / 1e8).toLocaleString('zh-TW', {minimumFractionDigits:2, maximumFractionDigits:2});
  const colors = ['#9ee3cc', '#ffd180', '#84b5ff', '#dc9dea', '#f49292'];
  function chart(panel, rows, options = {}) {
    const target = panel.querySelector('.market-margin-chart');
    target.replaceChildren();
    const chartPeriods = options.monthly ? [] : periods;
    if (rows.length < 2) { target.textContent = '累積至少兩個交易日後顯示走勢。'; return; }
    const visible = options.limit === 0 ? rows : rows.slice(-(options.limit || 240)), offset = rows.length - visible.length;
    const series = [visible.map(r => r.amountTwd), ...chartPeriods.map(p => sma(rows, p).slice(offset))];
    const values = series.flat().filter(n => n !== null);
    const min = Math.min(...values), max = Math.max(...values), range = max - min || 1;
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg'); svg.setAttribute('viewBox', '0 0 580 240'); svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', `融資餘額走勢，${visible[0].date} 至 ${visible[visible.length - 1].date}；單位億元`);
    function label(x,y,text){const t=document.createElementNS(ns,'text');t.setAttribute('x',x);t.setAttribute('y',y);t.setAttribute('fill','#aab7c3');t.setAttribute('font-size','11');t.textContent=text;svg.append(t);}
    label(2,20,number(max));label(2,204,number(min));
    series.forEach((data,i)=>{const points=data.map((v,j)=>v===null?null:`${65+j/(visible.length-1)*495},${200-(v-min)/range*175}`).filter(Boolean);if(points.length<2)return;const line=document.createElementNS(ns,'polyline');line.setAttribute('points',points.join(' '));line.setAttribute('stroke',colors[i]);line.setAttribute('stroke-width',i?1.6:2.5);line.setAttribute('fill','none');svg.append(line);});
    label(65,228,visible[0].date);label(480,228,visible[visible.length-1].date);target.append(svg);
    const legend=document.createElement('p');legend.className='market-caption';legend.textContent=options.monthly ? '月資料融資餘額（綠）；單位億元，不計日均線。' : '餘額（綠） · MA5（黃） · MA20（藍） · MA120（紫） · MA240（紅）；樣本不足不畫均線。';target.append(legend);
    const details=document.createElement('details'),summary=document.createElement('summary');summary.textContent='查看日期與金額';details.append(summary);
    const table=document.createElement('table');const header=document.createElement('tr');for(const name of ['日期','餘額（億元）']){const th=document.createElement('th');th.scope='col';th.textContent=name;header.append(th);}table.append(header);
    visible.slice().reverse().forEach(row=>{const tr=document.createElement('tr');[row.date,number(row.amountTwd)].forEach(value=>{const td=document.createElement('td');td.textContent=value;tr.append(td);});table.append(tr);});details.append(table);target.append(details);
  }
  const monthly = extra.creditMonthly;
  if (monthly && Array.isArray(monthly.observations) && monthly.observations.length) {
    const rows = monthly.observations;
    const last = rows[rows.length - 1];
    root.querySelector('#market-monthly-value').textContent = number(last.amountTwd) + ' 億元';
    const currentMonth = new Date().getUTCFullYear() * 12 + new Date().getUTCMonth();
    const reportedMonth = Number(last.date.slice(0, 4)) * 12 + Number(last.date.slice(5)) - 1;
    root.querySelector('#market-monthly-date').textContent = '資料月份：' + last.date + ' · 完整資料區間：' + rows[0].date + ' 至 ' + last.date + (currentMonth - reportedMonth > 3 ? ' · 超過 3 個月未更新' : '');
    const panel = root.querySelector('.market-monthly');
    const drawMonthly = limit => chart(panel, rows, {monthly:true, limit});
    root.querySelectorAll('[data-months]').forEach(button => button.addEventListener('click', () => {
      root.querySelectorAll('[data-months]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      drawMonthly(Number(button.dataset.months));
    }));
    drawMonthly(60);
  } else {
    root.querySelector('#market-monthly-date').textContent = '月資料無法讀取，請查看央行來源。';
  }
  Promise.resolve().then(() => embedded('market-margin-data')).then(data=>{
    if(data.schemaVersion!==1)throw Error('schema');
    const markets={};
    for(const key of ['listed','otc']) {
      const rows=verifiedRows(data.markets[key]);markets[key]=rows;
      if(!rows.length)continue;
      const panel=root.querySelector(`[data-market="${key}"]`),last=rows[rows.length-1];
      panel.querySelector('.market-value').textContent=number(last.amountTwd);
      const age=Math.floor((Date.now()-Date.parse(last.date+'T00:00:00+08:00'))/86400000);
      const change=rows.length>1? ' · 較前筆 '+number(last.amountTwd-rows[rows.length-2].amountTwd)+' 億元':'';
      panel.querySelector('.market-margin-status').textContent='資料日期：'+last.date+change+(age>7?' · 資料超過 7 天未更新':'');
      panel.querySelector('.market-caption').textContent='經核實每日融資金額；來源與授權：'+data.markets[key].license;
      panel.querySelector('a').href=data.markets[key].source;
      chart(panel,rows);
    }
    const total=combined(markets.listed,markets.otc);
    if(total)root.querySelector('#market-total').textContent='上市櫃合計：'+number(total.amountTwd)+' 億元 · 資料日期 '+total.date;
  }).catch(()=>{root.querySelector('#market-total').textContent='融資資料檔讀取失敗；請使用各市場官方來源。未計算合計。';});
})();
