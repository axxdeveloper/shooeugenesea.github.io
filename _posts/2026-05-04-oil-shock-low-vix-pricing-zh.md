---
layout: post
title: "16.99 VIX 留低位，13 mb/d 出口缺口留實體：油市衝擊先進現金流表"
date: 2026-05-04 12:50:00 +0800
categories: [macro]
tags: [macro, energy, geopolitics, inflation, fed, taiwan]
macro_kind: long
description: "StreetStats 把 5 月 1 日 VIX 寫成 16.99，IEA 4 月油市報告卻把中東油品出口缺口寫成超過 13 mb/d。這代表金融市場先用政策緩衝與企業獲利吸收能源衝擊，實體成本仍會透過柴油、肥料與家庭現金流延後出現。"
lang: zh-TW
---

## 16.99 VIX 低位，13 mb/d 缺口留在實體油市

StreetStats 把 `2026-05-01` 的 VIX 寫成 **16.99**，IEA 4 月油市報告同時把中東油品出口缺口寫成 **超過 13 mb/d**。[StreetStats](https://streetstats.finance/markets/volatility)、[IEA Oil Market Report](https://www.iea.org/reports/oil-market-report-april-2026)

**當 VIX 只有 16.99、IEA 又寫出超過 13 mb/d 的出口缺口時，市場是在吸收能源衝擊，還是在延後定價實體成本？**

這個框架把油價衝擊拆成實體流量、政策緩衝與金融定價三條線。`2026-05-12` 的 EIA STEO、`2026-05-13` 的 IEA 月報與美國 5 月通膨預期會決定低波動的續航力，也會把成本壓力重新推回利率與企業現金流。[EIA STEO](https://www.eia.gov/outlooks/steo/report/index.php)、[Federal Reserve transcript](https://www.federalreserve.gov/mediacenter/files/FOMCpresconf20260429.pdf)

## 實體缺口仍大，金融市場先給政策緩衝時間

目前最被資料支持的解釋，是金融市場先相信政策緩衝與企業獲利可以爭取時間，實體油市仍維持高壓。IEA 把早 4 月荷莫茲流量寫成 **3.8 mb/d**，2 月危機前則超過 **20 mb/d**；替代出口路線升到 **7.2 mb/d**，整體出口缺口仍超過 **13 mb/d**。[IEA Oil Market Report](https://www.iea.org/reports/oil-market-report-april-2026) 這組數字說明期貨價格與 VIX 先穩住，實體市場的船流、庫存與煉廠原料仍在消耗緩衝。

<aside style="float: right; width: 230px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>mb/d</strong>：每日百萬桶，能源市場衡量供給、需求與運輸流量的常用單位。<br>
<strong>VIX</strong>：S&P 500 30 天預期波動率指數，常用來觀察股票市場風險定價。
</aside>

口徑聲明先把分母固定。油市流量都寫成 `mb/d`，油價寫成美元/桶，零售燃料寫成美元/加侖，金融波動寫成 VIX 與 MOVE 指數。流量、價格與波動率各自回答專屬問題，本文只比較相同單位內的變化。

| Equation | Unit | Source | 用途 |
|---|---|---|---|
| `>20 - 3.8 = >16.2` | mb/d | IEA OMR April | 衡量荷莫茲流量壓縮 |
| `13.0 - 7.2 = 5.8` | mb/d | IEA OMR April | 衡量替代路線後仍存在的出口缺口 |
| `115 - 81 = 34` | USD/bbl | EIA STEO | 衡量 Brent 由 Q1 均價到 Q2 高點的預估抬升 |
| `4.30 - 3.10 = 1.20` | USD/gal | EIA STEO | 衡量美國汽油峰值相對 2025 年均價的家庭燃料抬升 |

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260504OilVix"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260504OilVix'), {
  type: 'bar',
  data: {
    labels: ['危機前荷莫茲流量下限', '早 4 月荷莫茲流量', '替代出口路線', '整體出口缺口下限'],
    datasets: [{
      label: 'mb/d',
      data: [20.0, 3.8, 7.2, 13.0],
      backgroundColor: [
        'rgba(37, 99, 235, 0.78)',
        'rgba(220, 38, 38, 0.82)',
        'rgba(8, 145, 178, 0.78)',
        'rgba(249, 115, 22, 0.82)'
      ],
      borderColor: [
        'rgba(37, 99, 235, 1)',
        'rgba(220, 38, 38, 1)',
        'rgba(8, 145, 178, 1)',
        'rgba(249, 115, 22, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '荷莫茲流量壓縮後，替代路線仍低於出口缺口（資料來源：IEA OMR April 2026）'
      },
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) { return value + ' mb/d'; }
        }
      }
    }
  }
});
</script>

EIA 的 4 月 STEO 把這個缺口翻成價格路徑。EIA 估計 March shut-ins 為 **7.5 mb/d**，April 會升到 **9.1 mb/d**；同一份報告把 Brent 從 Q1 均價 **81 美元/桶**拉到 Q2 高點 **115 美元/桶**，並把 April 美國汽油高點寫成接近 **4.30 美元/加侖**、柴油寫成超過 **5.80 美元/加侖**。[EIA global oil](https://www.eia.gov/outlooks/steo/report/global_oil.php)、[EIA petroleum products](https://www.eia.gov/outlooks/steo/report/petro_prod.php) EIA 的底層假設是衝突在 4 月後逐步緩和，船流到 2026 年底接近危機前水準。這個假設給金融市場一條緩和路徑，也讓下一份 STEO 的修正具有高資訊量。

政策緩衝解釋 VIX 為何留低。EIA 寫出美國戰略石油儲備釋出與 Jones Act waiver，同時指出美國原油庫存高於平均，這會降低 WTI 相對 Brent 的上行壓力。[EIA petroleum products](https://www.eia.gov/outlooks/steo/report/petro_prod.php) Powell 在 `2026-04-29` 記者會也把美國的能源出口地位與較低 oil intensity 放進政策判斷，並把政策利率維持在 **3.50%-3.75%**。[Federal Reserve transcript](https://www.federalreserve.gov/mediacenter/files/FOMCpresconf20260429.pdf) 這條線支持金融市場的第一層定價：美國比歐洲與亞洲更有緩衝，股市先把能源衝擊放進成本與利率停留期。

金融市場也把獲利韌性放進價格。LPL 的 `2026-05-01` 週報顯示 S&P 500 連五週上漲，能源板塊週漲 **3.53%**，通信服務週漲 **4.42%**，資訊科技一個月漲 **17.89%**；同一份報告也寫出 WTI 與 Brent 回到近期高位，且全球買家轉向美國原油出口。[LPL Weekly Market Performance](https://www.lpl.com/research/blog/weekly-market-performance-may-1-2026.html) 這代表股市把高油價先切成兩類：能源供給商受益，AI 與平台公司靠獲利與資本支出承接估值，運輸、家庭與進口國的成本則延後進入數據。

歐洲央行提供更嚴格的另一種讀法。ECB 在 `2026-04-30` 把 deposit facility 留在 **2.00%**，同時把 April 通膨寫成 **3.0%**、能源通膨寫成 **10.9%**、Q1 GDP 寫成 **0.1%**；聲明把能源價格的間接效果與二階效果列為通膨上行來源，也把實質所得與投資意願放進成長下行風險。[ECB statement](https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/shared/pdf/ecb.ds260430~1c397fa90c.en.pdf) 這個歐洲版本說明 VIX 低位只代表美國資產先得到緩衝，全球風險仍留在燃料、電力與運輸壓力。

World Bank 把二階成本推得更遠。`2026-04-28` 的 Commodity Markets Outlook 把 2026 energy prices 預估寫成 **+24%**，overall commodities 寫成 **+16%**，並把 Brent 嚴重情境寫成 **115 美元/桶**；報告還指出地緣政治造成的 `1%` 油產量下降，平均會推高油價 **11.5%**。[World Bank](https://www.worldbank.org/en/news/press-release/2026/04/28/commodity-markets-outlook-april-2026-press-release) 這條線把風險放到肥料、食品與債務成本。金融市場可以先看見 VIX 低位，家庭與政府預算會在更晚的數據裡看見燃料與食品壓力。

台灣的框架也需要兩層。中華經濟研究院 `2026-04-17` 預測台灣 2026 GDP 為 **7.22%**，CPI 為 **1.98%**，並把油價補貼與電價凍漲放進通膨緩衝；同一份報告把內需貢獻寫成 **2.72** 個百分點，國外淨需求貢獻寫成 **4.50** 個百分點。[CIER Q2 forecast](https://www.cier.edu.tw/wp-content/uploads/2026/04/2026Q2-NEWS.pdf) 這代表 0050 受益於 AI 外需與台積電權重，家庭端則靠政策緩衝吸收能源成本。台灣投資人看見美股低 VIX 時，仍需要把油價傳導拆成出口獲利、政府補貼與家戶燃料三條線。

## 5 月油市月報與美國通膨預期會決定低波動的厚度

如果 `2026-05-12` EIA STEO 把 2Q26 Brent 高點維持在 **115 美元/桶**附近，且 `2026-05-13` IEA 月報仍把荷莫茲流量留在 **10 mb/d**以下，→ 低 VIX 會更像金融市場給政策緩衝的時間，實體成本仍會進入柴油、航空燃料與企業運輸費。

如果 `2026-05-12` CPI 與 5 月消費者通膨預期同時升高，且 `2026-05-28` PIO 把 real PCE 壓在 **0.1%**附近，→ 油價衝擊會由能源項目推進到家庭現金流，Fed 的停留期會變成消費框架的主要限制。

如果下一份 IEA 與 EIA 同時把出口缺口降到 **5 mb/d**以下，且 Brent 連續 **10** 個交易日留在 **95 美元/桶**以下，→ 金融市場的低波動會取得實體流量確認，能源衝擊會由宏觀主線降成燃料價格正常化題。

## 結語

> **核心判斷：** 低 VIX 代表金融市場先相信政策緩衝與企業獲利，油市實體缺口仍會透過燃料、肥料與家庭現金流延後驗證。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Hormuz flows + Brent | Hormuz loadings 連續 `2` 份月報 `<10 mb/d`，且 Brent 連續 `10` 個交易日 `>=110/bbl` | `2026-05-13` IEA OMR 至 `2026-06-12` IEA OMR | 低波動框架降權，實體缺口重新主導金融定價 |
| U.S. inflation expectations + real PCE | 1 年通膨預期連續 `2` 次上升，且 real PCE 月增連續 `2` 次 `<=0.1%` | `2026-05` SCE / Michigan survey 至 `2026-06-26` PIO | 油價壓力由能源項目進入家庭現金流 |
| EIA fuel path | gasoline 年均價連續 `2` 份 STEO `>=3.70/gal`，且 diesel 年均價連續 `2` 份 `>=4.80/gal` | `2026-05-12` 與 `2026-06-09` STEO | 運輸與服務成本保持高位，企業利潤表承壓框架升權 |
| VIX + MOVE | VIX 連續 `5` 個交易日 `>25`，且 MOVE 連續 `5` 個交易日 `>95` | 每日觀察至 `2026-06-14` | 能源 shock 從實體成本轉成跨資產風險定價 |

三個觀察變數最有訊號。第一是 IEA 與 EIA 的船流、shut-ins、Brent forecast，這會驗證實體缺口的縮小速度。第二是美國與歐洲的短端通膨預期，這會驗證央行延續能源衝擊短期化口徑的空間。第三是柴油與航空燃料，這條線會比 headline CPI 更早把供應鏈成本寫進企業現金流。

---

*資料來源：[StreetStats VIX/MOVE](https://streetstats.finance/markets/volatility)、[IEA Oil Market Report April 2026](https://www.iea.org/reports/oil-market-report-april-2026)、[EIA STEO](https://www.eia.gov/outlooks/steo/report/index.php)、[EIA global oil](https://www.eia.gov/outlooks/steo/report/global_oil.php)、[EIA petroleum products](https://www.eia.gov/outlooks/steo/report/petro_prod.php)、[Federal Reserve press conference transcript](https://www.federalreserve.gov/mediacenter/files/FOMCpresconf20260429.pdf)、[ECB monetary policy statement](https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/shared/pdf/ecb.ds260430~1c397fa90c.en.pdf)、[World Bank Commodity Markets Outlook press release](https://www.worldbank.org/en/news/press-release/2026/04/28/commodity-markets-outlook-april-2026-press-release)、[LPL Weekly Market Performance](https://www.lpl.com/research/blog/weekly-market-performance-may-1-2026.html)、[CIER Q2 forecast](https://www.cier.edu.tw/wp-content/uploads/2026/04/2026Q2-NEWS.pdf)*
*市場數據截至：2026-05-01；官方資料截至：2026-04-30。*
*本文僅供參考，不構成投資建議。*
