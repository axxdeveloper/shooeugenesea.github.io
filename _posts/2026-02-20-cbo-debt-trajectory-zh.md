---
layout: post
title: "CBO 財政路徑更新：美國債務比率上行與期限溢價再定價風險"
date: 2026-02-20 09:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, fed, bonds]
description: "CBO 2026 年展望顯示，美國聯邦債務占 GDP 可能由 101% 走向 120%，淨利息支出趨勢持續抬升。本文用基準/上行/下行情境評估 TLT、SHY、TIPS、GLD 的配置邏輯。"
lang: zh-TW
---

## 總經快照

聯準會 (Fed) 利率維持在 3.5%–3.75%，10 年期公債殖利率 [4.075%](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/)。國會預算辦公室 (CBO) 於 2026 年 2 月發布最新《預算與經濟展望》報告，預測聯邦債務占 GDP 比率將從目前的 101% 在十年內攀升至 [120%](https://www.cbo.gov/publication/61882)，而聯邦淨利息支出已在 FY2025 達到 [9,700 億美元](https://www.cbo.gov/publication/62050)，並將持續膨脹至 2036 年的 2.1 兆美元——這意味著到 2036 年，利息支出可能超過國防支出。

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

### 債務擴張的複利效應

CBO 預測的核心問題不是赤字本身，而是利息支出的複利效應。FY2026 聯邦赤字預計為 [1.9 兆美元](https://www.cbo.gov/publication/61882)，其中淨利息預計超過 1 兆美元。到 FY2036，赤字擴大至 3.1 兆，而利息支出膨脹至 2.1 兆。這代表未來新增舉債中，利息再融資的比重將持續提高。

### 基準預測的保守假設

這些預測仍基於「目前法律不變」的基準情境。若 2025 年減稅法案 (TCJA) 的個人所得稅條款被延長，CBO 估算十年赤字可能額外增加數兆美元（參考 [CBO 基準與替代情境](https://www.cbo.gov/publication/61882)），債務比率路徑可能高於 120%。此外，CBO 假設利率將從目前水平逐步下降；若核心 PCE 維持在 [3.0%](https://www.bea.gov/news/2026/personal-income-and-outlays-december-2025) 附近，利率下行幅度將受限，利息負擔可能更高。

### 全球背景下的美債風險

美國並非唯一面臨債務壓力的國家。日本國債占 GDP 比率超過 250%，但日本央行 (BOJ) 仍是最大買家；歐元區整體約 88%，但義大利超過 140%。差異在於——美元作為全球儲備貨幣，美國國債的買家結構正在改變。中國與日本持續減持美債，從 2020 年合計持有約 2.3 兆降至目前約 [1.8 兆美元](https://home.treasury.gov/data/treasury-international-capital-tic-system)。如果最大的海外買家持續退場，誰來吸收每年 1.9 兆的新發債？

### 筆記

CBO 基準路徑顯示的核心問題不是「美國會不會破產」（不會），而是利息的複利效應正在改變折現率的中樞。當淨利息占赤字比重持續擴大、海外買家持續撤退，長端殖利率的期限溢價就很難回到 2010 年代那種超低水準。

這不是短期崩盤敘事，而是一個持續 3–5 年的配置變數：債券端採槓鈴配置（`SHY` 避免久期風險 + 部分 `TLT` 保留降息選擇權），`TIPS` 與 `GLD` 管理通膨與財政不確定性。若核心通膨穩定回落至 2.2% 以下且赤字/GDP 連兩年改善，可以增加長債配置；若赤字擴張且長端殖利率突破 4.75%，降低長天期部位。

## 後續觀察

1. **3–4 月國會預算談判**：TCJA 延長方案的規模將決定實際赤字路徑——比 CBO 基準好或更糟
2. **Treasury 季度再融資公告 (QRA)**：5 月的 QRA 將揭示財政部如何應對不斷擴大的發債需求，長天期發行比例是關鍵
3. **中國/日本美債持倉數據**：TIC 月度報告將顯示海外買家是否持續撤退

---

*資料來源：[CBO 2026 年 2 月預算展望](https://www.cbo.gov/publication/61882)、[US Treasury](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/)、[Treasury International Capital](https://home.treasury.gov/data/treasury-international-capital-tic-system)、[Yahoo Finance](https://finance.yahoo.com/)*
*市場數據截至：2026-02-20*
*本文僅供參考，不構成投資建議。*
