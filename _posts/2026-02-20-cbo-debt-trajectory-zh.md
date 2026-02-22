---
layout: post
title: "CBO 利率假設的致命盲點：3.6% 與 4.1% 之間藏著每年兩千億美元的誤差"
date: 2026-02-20 09:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, fed, bonds]
macro_kind: long
description: "CBO 基準預測假設 10 年期殖利率將於 2027 年降至 3.6%，但市場定價停在 4.1%。這 50 bps 的落差意味著十年利息支出可能被低估 1.5–2 兆美元，而若 TCJA 延長，債務路徑比報告數字再高出 4.6 兆。"
lang: zh-TW
---

## 總經快照

聯準會 (Fed) 利率維持在 3.5%–3.75%，10 年期公債殖利率報 [4.075%](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/)。國會預算辦公室 (CBO) 於 2026 年 1 月發布的《預算與經濟展望》([Budget and Economic Outlook](https://www.cbo.gov/publication/61882)) 預測聯邦債務占 GDP 比率將從 2025 年的 100% 攀升至 2035 年的 118%，FY2025 淨利息支出達 [9,510 億美元](https://www.cbo.gov/publication/61882)。多數報導到此為止——但真正值得投資人深究的不是這些標題數字，而是藏在報告 Table 2-3 經濟假設中的利率與生產力預測。

## 數據解讀

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart2"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart2'), {
  type: 'bar',
  data: {
    labels: ['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035'],
    datasets: [
      {
        label: 'CBO 基準利息支出',
        data: [951, 1028, 1080, 1134, 1207, 1282, 1354, 1418, 1493, 1563, 1644],
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1
      },
      {
        label: '利率維持 4.1% 情境 (估算)',
        data: [951, 1080, 1200, 1330, 1430, 1530, 1620, 1720, 1810, 1900, 2000],
        backgroundColor: 'rgba(239, 68, 68, 0.6)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'CBO 基準 vs 利率不降情境：淨利息支出（十億美元）',
        color: '#e2e8f0',
        font: { size: 13 }
      },
      legend: { labels: { color: '#94a3b8' } }
    },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.1)' } },
      y: {
        ticks: { color: '#94a3b8', callback: function(v) { return '$' + v + 'B'; } },
        grid: { color: 'rgba(255,255,255,0.1)' },
        min: 800,
        title: { display: true, text: '淨利息支出（十億美元）', color: '#94a3b8' }
      }
    }
  }
});
</script>

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>期限溢價 (term premium)</strong>：投資人持有長天期債券所要求的額外補償，反映對未來利率與通膨的不確定性。<br><br>
<strong>TCJA</strong>：2017 年《減稅與就業法案》(Tax Cuts and Jobs Act)，個人所得稅條款原定 2025 年底到期。
</aside>

CBO 報告 Table 2-3 的經濟假設顯示，基準預測假設 10 年期國債殖利率將從 2025 年的 4.1% 逐步下降至 2027 年的約 3.8%、2030 年的 3.6%，並在 2030 年代維持在 3.6–3.7% 區間 ([CBO Economic Projections](https://www.cbo.gov/data/budget-economic-data#4))。這個假設暗含兩個前提：通膨順利回到 2% 目標，且聯準會在 2026–2027 年繼續降息至中性利率附近。然而截至 2 月 20 日，10 年期殖利率仍在 4.08%，期限溢價 (term premium) 處於十年高點，核心個人消費支出 (Core PCE) 仍在 [2.8%](https://www.bea.gov/news/2026/personal-income-and-outlays-december-2025) 附近掙扎。若利率無法如 CBO 預期般下降，每多 50 個基點就意味著每年 1,500–2,000 億美元的額外利息支出，十年累計可達 1.5–2 兆美元——這筆錢完全沒有出現在 CBO 的基準赤字預測中。

CBO 的另一個容易被忽略的假設是生產力成長率。報告假設勞動生產力成長將從近年的約 1.5% 逐步回升至 1.8%，這是支撐稅收成長預測的核心依據。若 AI 帶動的生產力提升不如預期——例如停滯在 1.2–1.3%——GDP 成長與稅收都會低於預測，赤字將進一步惡化。反之，若 AI 真正帶來生產力躍升至 2.0% 以上，CBO 的赤字預測可能過度悲觀。生產力假設本質上是對 AI 經濟影響的隱性押注。

### 「現行法律」框架的虛構性

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>替代財政情境 (alternative fiscal scenario)</strong>：CBO 另行估算的「政策延續」情境，假設即將到期的減稅措施全部延長，更貼近實際政治可能性。
</aside>

CBO 基準預測依法只能假設「現行法律不變」——但所有市場參與者都知道 TCJA 個人稅率條款幾乎必然延長。CBO 在替代財政情境 ([Alternative Fiscal Scenario](https://www.cbo.gov/publication/59711)) 中估算，若 TCJA 完全延長且不伴隨抵銷性加稅或削減支出，十年累計赤字將額外增加 [4.6 兆美元](https://www.cbo.gov/publication/59711)，債務占 GDP 比率到 2035 年將突破 130% 而非基準的 118%。這才是國會目前實際辯論的財政路徑，而非報告標題數字。此外，Medicare 支出在報告中被假設以每年 5.4–5.8% 的速度成長，但歷史經驗顯示醫療成本通膨往往超出預測——若實際成長率達到 7%，光這一項就會讓十年赤字額外擴大數千億美元。

### 利息的數學：超越國防、逼近社安

把 FY2025 的 9,510 億美元利息放入更大的財政脈絡：這筆支出已占聯邦總收入的約 [18%](https://www.cbo.gov/publication/61882)，且按目前軌跡，到 2028 年前後淨利息將超過國防支出（FY2025 國防約 8,740 億），成為僅次於社會安全 (Social Security) 和 Medicare 的第三大支出項。到 2030 年代中期，若利率居高不下，利息支出甚至可能挑戰社會安全的支出規模。聯邦可自由裁量支出 (discretionary spending) 總額約 1.8 兆美元——利息支出已經相當於其一半以上，這意味著財政空間正以肉眼可見的速度被壓縮。

### 海外買家撤退的量化現實

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>TIC 數據</strong>：美國財政部的國際資本流動報告 (Treasury International Capital)，追蹤外國投資人持有美國證券的變化。
</aside>

財政部 TIC 數據 ([Treasury International Capital](https://home.treasury.gov/data/treasury-international-capital-tic-system)) 顯示結構性轉變正在發生。日本持有美債約 1.06 兆美元，中國持有約 7,590 億美元——兩國合計從 2020 年高點的約 2.3 兆降至目前約 1.8 兆。中國的減持尤其穩定，已連續多年以每月數十億美元的節奏賣出。誰在接手？主要是國內買家（美國貨幣市場基金、退休基金）和部分歐洲與中東主權基金。但隨著每年淨發行量持續擴大至 2 兆以上，能否持續找到願意鎖定 4% 殖利率十年以上的買家，是長端利率能否穩定的核心問題。

### 反面觀點：債務或許沒有標題暗示的那麼危險

國際貨幣基金 (IMF) 前首席經濟學家 Olivier Blanchard 多年來主張，只要長期實質利率 (r) 低於經濟成長率 (g)，政府債務的動態就是可持續的——債務占 GDP 比率會因分母成長而自然收斂，不需要透過財政緊縮來削減 ([Blanchard, "Public Debt and Low Interest Rates," AER 2019](https://www.aeaweb.org/articles?id=10.1257/aer.109.4.1197))。在過去十年的低利率環境中，美國恰好處於 r < g 狀態。即便目前實質利率回升，Blanchard 認為關鍵指標不是債務/GDP 比率本身，而是利息支出/GDP 比率是否超過財政可承受的閾值（他估算約 5–6%），以及美元作為全球主要儲備貨幣所帶來的融資優勢——沒有任何其他國家能以本國貨幣、以如此低的信用溢價借到如此大量的債務。日本債務/GDP 超過 250%，但因為日本央行 (BOJ) 持有過半國債且利率長期接近零，財政壓力與數字不成正比。這個框架的風險在於：一旦通膨結構性走高導致 r 長期超過 g，債務動態就會從良性翻轉為惡性。

## 筆記

CBO 這份報告真正值得注意的不是「債務在增加」這個所有人都知道的結論，而是基準預測的利率假設與市場現實之間的落差。報告假設殖利率降至 3.6%，市場卻定價在 4.1%——光這個差距就可能讓十年利息支出被低估 1.5 兆美元以上。再加上 TCJA 延長的 4.6 兆，實際財政路徑比報告標題悲觀得多。

配置上，這個分析指向期限溢價中樞難以回落的結構性力量：短端用 `SHY` 鎖定收益避免久期風險，長端僅保留少量 `TLT` 作為經濟衰退的保險選擇權，`TIPS` 對沖利率假設錯誤造成的通膨超預期情境，`GLD` 作為財政信用風險的尾端保護。若核心 PCE 在未來兩季穩定降至 2.3% 以下、且國會通過 TCJA 延長同時附帶可信的赤字抵銷方案，可以考慮增加長債配置；反之，若通膨黏滯且赤字路徑持續擴大，進一步縮減久期暴露。

## 後續觀察

1. **3–4 月國會預算決議**：TCJA 延長方案的最終規模與是否附帶支出削減或加稅條款，將直接決定未來十年的實際赤字路徑——這比任何單一經濟數據都重要
2. **5 月 Treasury 季度再融資公告 (QRA)**：長天期發行占比是否進一步提高，將直接影響期限溢價與長端殖利率
3. **TIC 月度報告 (3/15)**：觀察日本、中國持倉變化是否加速，以及國內買家是否足以消化擴大的發行量
4. **Q1 GDP 與核心 PCE 軌跡**：若經濟減速且通膨同步回落，CBO 的利率假設或許有實現空間；若出現停滯性通膨 (stagflation)，利率假設將徹底失效

---

*資料來源：[CBO 2026 年 1 月預算展望](https://www.cbo.gov/publication/61882)、[CBO 經濟預測數據](https://www.cbo.gov/data/budget-economic-data#4)、[CBO 替代財政情境](https://www.cbo.gov/publication/59711)、[US Treasury](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/)、[Treasury International Capital](https://home.treasury.gov/data/treasury-international-capital-tic-system)、[BEA](https://www.bea.gov/news/2026/personal-income-and-outlays-december-2025)、[Blanchard (2019) AER](https://www.aeaweb.org/articles?id=10.1257/aer.109.4.1197)*
*市場數據截至：2026-02-20*
*本文僅供參考，不構成投資建議。*
