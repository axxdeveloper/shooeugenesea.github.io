---
layout: post
title: "CBO 最新預測：美國國債占 GDP 比率將從 101% 飆升至 120%"
date: 2026-02-20 09:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, fed, bonds]
description: "CBO 最新報告預測美國國債占 GDP 比率從 101% 飆升至 120%，利息支出膨脹至 2.1 兆美元。分析債務螺旋對 TLT、TIPS、黃金的投資影響。"
lang: zh-TW
---

## 總經快照

聯準會 (Fed) 利率維持在 3.5%–3.75%，10 年期公債殖利率 [4.075%](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/)。國會預算辦公室 (CBO) 於 2026 年 1 月發布最新《預算與經濟展望》報告，預測聯邦債務占 GDP 比率將從目前的 101% 在十年內攀升至 [120%](https://www.cbo.gov/publication/60870)，而聯邦淨利息支出已在 FY2025 達到 [9,700 億美元](https://www.cbo.gov/publication/62050)，並將持續膨脹至 2036 年的 2.1 兆美元——這意味著到 2036 年，光是利息就將超過國防支出。

## 數據解讀

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart2"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart2'), {
  type: 'line',
  data: {
    labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036'],
    datasets: [
      {
        label: '債務占 GDP 比率 (%)',
        data: [99, 100, 101, 103, 105, 107, 110, 112, 115, 117, 118, 119, 120],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 4
      },
      {
        label: '淨利息支出（千億美元）',
        data: [8.8, 9.3, 9.7, 10.5, 11.5, 12.5, 14.0, 15.0, 16.5, 17.5, 18.5, 19.5, 21.0],
        borderColor: 'rgba(251, 191, 36, 1)',
        backgroundColor: 'rgba(251, 191, 36, 0.1)',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        yAxisID: 'y1'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'CBO 聯邦債務與利息支出預測（資料來源：CBO 2026 年 1 月報告）',
        color: '#e2e8f0',
        font: { size: 13 }
      },
      legend: { labels: { color: '#94a3b8' } }
    },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.1)' } },
      y: {
        position: 'left',
        ticks: { color: '#94a3b8', callback: function(v) { return v + '%'; } },
        grid: { color: 'rgba(255,255,255,0.1)' },
        min: 90,
        max: 125,
        title: { display: true, text: '債務/GDP (%)', color: '#94a3b8' }
      },
      y1: {
        position: 'right',
        ticks: { color: '#94a3b8', callback: function(v) { return '$' + v + '千億'; } },
        grid: { drawOnChartArea: false },
        min: 5,
        max: 25,
        title: { display: true, text: '淨利息（千億美元）', color: '#94a3b8' }
      }
    }
  }
});
</script>

### 債務螺旋的數學

CBO 預測的核心問題不是赤字本身，而是利息支出的複利效應。FY2026 聯邦赤字預計為 [1.9 兆美元](https://www.cbo.gov/publication/60870)，其中淨利息預計超過 1 兆美元——超過赤字的一半。到 FY2036，赤字擴大至 3.1 兆，而利息支出膨脹至 2.1 兆。換句話說，美國政府每借的 3 美元中，有 2 美元是為了還舊債的利息。

### 為何比看起來更糟

這些預測還是基於「目前法律不變」的基準情境。若 2025 年減稅法案 (TCJA) 的個人所得稅條款被延長（政治上幾乎確定），CBO 估計十年赤字將額外增加 [4–5 兆美元](https://www.cbo.gov/publication/60870)，債務占 GDP 比率可能在 2036 年逼近 130% 而非 120%。此外，CBO 假設利率將從目前水平逐步下降——但如果通膨持續頑固（核心 PCE 最新數據已升至 [3.0%](https://www.bea.gov/news/2026/personal-income-and-outlays-december-2025)），利率下降的幅度可能遠小於預期，利息負擔將更加沉重。

### 全球背景下的美債風險

美國並非唯一面臨債務壓力的國家。日本國債占 GDP 比率超過 250%，但日本央行 (BOJ) 仍是最大買家；歐元區整體約 88%，但義大利超過 140%。差異在於——美元作為全球儲備貨幣，美國國債的買家結構正在改變。中國與日本持續減持美債，從 2020 年合計持有約 2.3 兆降至目前約 [1.8 兆美元](https://home.treasury.gov/data/treasury-international-capital-tic-system)。如果最大的海外買家持續退場，誰來吸收每年 1.9 兆的新發債？

### 筆記

市場目前對美國財政軌跡的定價令人困惑。10 年期殖利率 4.075% 隱含的實質利率約 1.7%——這個水平假設通膨能回到 2% 目標、且財政風險溢價極低。但 CBO 的數據告訴我們，即使在最樂觀的情境下，利息支出都將吞噬越來越多的財政空間。我認為期限溢價 (term premium) 被嚴重壓縮，10Y 殖利率在年底前有重回 4.5%+ 的風險。持續觀察：如果國會意外通過重大財政緊縮法案，或通膨迅速回落讓聯準會激進降息至 2.5% 以下——這兩者的政治現實機率都極低。

## 投資影響

- **TLT**（20 年以上國債 ETF）：現價 [$89.55](https://finance.yahoo.com/quote/TLT/)，52 週範圍 $82–$100。若期限溢價擴大，TLT 將承壓至 $84–86（-4% 至 -6%）。但若經濟衰退迫使聯準會緊急降息，上行至 $95–100（+6% 至 +12%）。目前風險報酬比對稱偏空。
- **SHY**（1-3 年短期國債 ETF）：在殖利率曲線可能趨陡的環境中，短天期債券的利率風險較低。穩定收息首選。
- **TIPS**（抗通膨債券 ETF）：CBO 的赤字軌跡暗示長期通膨風險偏上。TIPS 相對名目公債有保護價值。
- **GLD**（黃金 ETF）：財政紀律喪失是黃金長期上漲的結構性動力。金價 $5,061 已反映部分風險，但若債務軌跡持續惡化，黃金的天花板可能比想像中更高。
- **UUP**（美元指數 ETF）：財政惡化長期利空美元，但短期內高利率差仍支撐美元。觀望。

## 後續觀察

1. **3–4 月國會預算談判**：TCJA 延長方案的規模將決定實際赤字路徑——比 CBO 基準好或更糟
2. **Treasury 季度再融資公告 (QRA)**：5 月的 QRA 將揭示財政部如何應對不斷擴大的發債需求，長天期發行比例是關鍵
3. **中國/日本美債持倉數據**：TIC 月度報告將顯示海外買家是否持續撤退

---

*資料來源：[CBO 2026 年 1 月預算展望](https://www.cbo.gov/publication/60870)、[US Treasury](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/)、[Treasury International Capital](https://home.treasury.gov/data/treasury-international-capital-tic-system)、[Yahoo Finance](https://finance.yahoo.com/)*
*市場數據截至：2026-02-20*
*本文僅供參考，不構成投資建議。*
