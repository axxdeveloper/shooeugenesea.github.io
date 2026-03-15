# macro-post topic 深度研究報告（2026-03-15）

- 產出時間（Asia/Taipei）：2026-03-15
- 模式：`macro-post` topic mode
- 題目：**美伊戰爭若持續，一週／一個月／三個月／半年／一年，分別對總經與市場會有什麼影響**
- 建議文章檔名：`_posts/2026-03-15-us-iran-war-duration-scenarios-zh.md`
- 建議 primary topic tag：`geopolitics`

---

## 0) 發文門檻快檢

### A. 近 7 日發文密度（2026-03-09 ~ 2026-03-15）

近 7 日 `categories: [macro]` 共 **1 篇**：

1. `2026-03-15-twd-risk-premium-correction-zh.md`

結論：**低於 14 篇門檻，可正常發文。**

### B. Same-day duplicate 檢查

- 2026-03-15 已有一篇 `correction`，主題是 `taiwan`，不是今天的 `geopolitics`。
- **無同日同 primary topic 衝突。**

### C. Crisis gate

| 檢查項 | 最新值 | 危機門檻 | 判定 |
|---|---:|---:|---|
| VIX（FRED `VIXCLS`）[ACTUAL] | 27.29（2026-03-12） | >30 且連 2 日 | 未觸發 |
| S&P 500 單日跌幅（FRED `SP500`）[ACTUAL] | 2026-03-13 收 6632.19，較前日 6672.62 約 -0.61% | <-3% | 未觸發 |

結論：**topic mode 可照常進行，不需改寫成危機文。**

### D. 與既有文章的差異化

最近兩篇相近文章是：

1. `2026-02-28-iran-hormuz-pricing-framework-zh.md`：重點是荷莫茲海峽算術與油價初步定價。
2. `2026-03-03-war-stock-gold-same-drop-framework-zh.md`：重點是股金同跌、美元與利率如何壓過避險敘事。

今天這篇的差異在於：

- 不再問「這次油價會不會上去」。
- 改問「**如果戰事拖成不同時間長度，主導變數會怎麼換手**」。
- 主軸從單一價格反應，升級到 `油價 → 通膨 → 利率 → 成長 → 信用 → 供應鏈 → 財政` 的時間階梯。

---

## 1) Topic Step 1：Focused Research via Agents

> 標註規則：  
> `[ACTUAL]` 已公布資料或已發生市場價格  
> `[ESTIMATE]` 官方或機構預估 / 籌資估算  
> `[PROJECTED]` 機構前瞻或本文依明確規則做的條件式推導

### 1.1 Core Data Agent

1. **荷莫茲海峽的物理約束** [ACTUAL]  
   - EIA 指出 2022 年約有 **2,100 萬桶/日**石油液體通過荷莫茲海峽，約當全球石油液體消費 **21%**；有效可繞行管線能力僅約 **350 萬桶/日**。  
   - **Insight beyond wire coverage：** 這不是單純「油價可能漲」；真正重要的是，市場能接受短期驚嚇，但很難吸收一條只剩 350 萬桶/日替代容量的主動脈長期失靈。  
   - Source: https://www.eia.gov/todayinenergy/detail.php?id=61002

2. **亞洲曝險比美國高得多** [ACTUAL]  
   - EIA 估計，2022 年通過荷莫茲海峽的原油與凝析油中，約 **82%** 流向亞洲市場。  
   - **Insight beyond wire coverage：** 對台灣讀者最重要的不是「美國會不會缺油」，而是亞洲製造、航運、化工與電力成本鏈更容易被先打到。  
   - Source: https://www.eia.gov/todayinenergy/detail.php?id=61002

3. **現況已不是純假設題** [ACTUAL]  
   - EIA 3 月 10 日 STEO 指出，Brent 已在 3 月 9 日收於 **94 美元/桶**，較年初高約 **50%**；原因是荷莫茲石油運輸下降與中東部分產量停擺。  
   - **Insight beyond wire coverage：** 這代表市場已經從「事件 headline」走到「實體供應 / 航運 / 產量」三條線一起重估。  
   - Source: https://www.eia.gov/outlooks/steo/

4. **美國通膨底座仍不乾淨** [ACTUAL]  
   - BEA 1 月個人所得與支出顯示，PCE 年增 **2.8%**、核心 PCE 年增 **3.1%**，月增分別 **0.3%** 與 **0.4%**。  
   - **Insight beyond wire coverage：** 即使 headline CPI 沒有立刻再衝，Fed 更在乎的核心 PCE 仍高於舒適區，油價 shock 的政策容錯空間比 2024 年更小。  
   - Source: https://www.bea.gov/news/2026/personal-income-and-outlays-january-2026

5. **美國財政底座已經很重** [ACTUAL] / [ESTIMATE]  
   - Treasury Debt to the Penny 顯示 2026-03-12 未償公債總額已達 **$38.90T**。[ACTUAL]  
   - Treasury 2 月估計 2026Q1 淨市場化借款 **$574B**、2026Q2 **$109B**。[ESTIMATE]  
   - **Insight beyond wire coverage：** 半年以上的戰爭不只會推油價，也會把新增國防、護航、保費擔保疊到原本就偏高的發債底座上。  
   - Sources:
     - https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?sort=-record_date&page%5Bsize%5D=1
     - https://home.treasury.gov/news/press-releases/sb0377

### 1.2 Context & History Agent

1. **IMF 對目前衝突的宏觀量化** [ACTUAL]  
   - IMF 中東與中亞部門主管 Jihad Azour 3 月 9 日指出，2026 年全球成長基準仍約 **3.3%**，但油價自 2025 年 12 月以來已漲近 **50%**、荷莫茲航運流量下滑 **90%**、全球航運成本上升 **50%**。  
   - IMF 同時給出一條可操作規則：**油價每上升 10%，隔年全球 headline inflation 約多 0.4 個百分點，global output 約少 0.1%。**  
   - **Insight beyond wire coverage：** 這條規則讓「三個月以上的戰爭」可以從敘事題變成可驗證的宏觀推算題。  
   - Source: https://www.imf.org/en/News/Articles/2026/02/24/sp-cj-geoeconomic-fragmentation-in-the-middle-east-and-central-asia

2. **World Bank 的歷史情境尺規** [PROJECTED]  
   - World Bank 在 2023 年中東衝突情境分析中估計：若供給中斷屬中度，油價可升至 **$102-$121**；若屬大型中斷，油價可升至 **$140-$157**。  
   - **Insight beyond wire coverage：** 以 3 月 9 日 Brent **$94** 來看，市場已經離「中度 disruption 區間」不遠；時間若拉長，後面不需要新增 headline，也會自己往成長 / 通膨層擴散。  
   - Source: https://www.worldbank.org/en/news/press-release/2023/10/30/commodity-markets-outlook-under-the-shadow-of-geopolitical-risks

3. **供應鏈不只看原油，還要看肥料與乾散貨** [ACTUAL]  
   - UNCTAD《Review of Maritime Transport 2025》指出，若荷莫茲衝擊外溢，將波及約 **三分之一全球海運肥料貿易** 與約 **5% 乾散貨 ton-miles**。  
   - **Insight beyond wire coverage：** 三個月以上的衝擊開始變成食物、化工、農業成本問題；半年以上就不再只是能源新聞。  
   - Source: https://unctad.org/publication/review-maritime-transport-2025

4. **Qatar LNG 是長尾變數** [ACTUAL] / [PROJECTED]  
   - CSIS 指出，卡達 LNG 擴產時程本就已延後，若海灣安全情勢長期惡化，再延 **6-12 個月** 就可能把 2027-2028 原本預期增加的 LNG 供給往後推。  
   - **Insight beyond wire coverage：** 一個月以內看的是運價與保費；半年以上看的是新產能與設備交付是否被拖慢。  
   - Source: https://www.csis.org/analysis/what-does-iran-war-mean-global-energy-markets

### 1.3 Market Impact Agent

1. **開戰後第一輪跨資產重定價** [ACTUAL]  
   - Brent：**71.32 → 94.35**（2026-02-27 至 2026-03-09，**+32.29%**）  
   - 美國 10Y：**3.97% → 4.27%**（至 2026-03-12，**+30 bps**）  
   - 美國 2Y：**3.38% → 3.76%**（至 2026-03-12，**+38 bps**）  
   - S&P 500：**6878.88 → 6632.19**（至 2026-03-13，**-3.59%**）  
   - VIX：**19.86 → 27.29**（至 2026-03-12，**+37.41%**）  
   - HY OAS：**3.10 → 3.17**（至 2026-03-12，**+7 bps**）  
   - 黃金：**5322.165 → 5019.83**（至 2026-03-13，**-5.68%**）  
   - USD/TWD：**31.5504 → 32.0402**（至 2026-03-13，**+1.55%**）  
   - 台股加權：**35095.09 → 33400.32**（至 2026-03-13，**-4.83%**）  
   - Sources:
     - https://fred.stlouisfed.org/graph/fredgraph.csv?id=DCOILBRENTEU&cosd=2025-12-01
     - https://fred.stlouisfed.org/graph/fredgraph.csv?id=DGS10&cosd=2025-12-01
     - https://fred.stlouisfed.org/graph/fredgraph.csv?id=DGS2&cosd=2025-12-01
     - https://fred.stlouisfed.org/graph/fredgraph.csv?id=SP500&cosd=2025-12-01
     - https://fred.stlouisfed.org/graph/fredgraph.csv?id=VIXCLS&cosd=2025-12-01
     - https://fred.stlouisfed.org/graph/fredgraph.csv?id=BAMLH0A0HYM2&cosd=2025-12-01
     - https://stooq.com/q/d/l/?s=xauusd&i=d
     - https://stooq.com/q/d/l/?s=usdtwd&i=d
     - https://stooq.com/q/d/l/?s=%5Etwse&i=d

2. **EIA 的短期基準路徑** [PROJECTED]  
   - EIA 3 月 STEO 預估 Brent 接下來兩個月仍將維持在 **$95 上方**，之後若衝突影響未擴大，2026Q3 可回到 **$80 以下**，2026 全年均價約 **$79**。  
   - **Insight beyond wire coverage：** 這給了本文一個重要分界：`一個月` 是 EIA 仍可用短期高油價處理的區間；`三個月以上` 則代表實際結果偏離官方基準。  
   - Source: https://www.eia.gov/outlooks/steo/

3. **歐洲研究機構的保守基準** [PROJECTED]  
   - Oxford Economics 3 月 3 日假設未來一季平均有 **4 mbpd** 供給受擾，預估 Q2 Brent 平均 **$79**，較 2 月基準高 **$15**；同時判斷「會擾亂市場，但未必會擊穿市場」。  
   - **Insight beyond wire coverage：** 這是很有用的反方錨點。若實際情勢拖過一季仍比這更差，就不能再用「短期供給擾動」語言帶過。  
   - Source: https://www.oxfordeconomics.com/resource/iran-conflict-will-rile-energy-markets-not-break-them/

### 1.4 Contrarian & Risk Agent

1. **最重要的反方論述：這是運輸安全問題，不一定是長期缺油問題** [ACTUAL] / [PROJECTED]  
   - CSIS 的 **Adi Imsirovic** 認為，油市目前的核心問題是「安全運輸能力」，不是全球沒有油；OECD 緊急庫存仍約 **90 天**，美國 SPR 仍有 **4 億桶以上**，因此不必直接跳到全年油荒。  
   - **為何重要：** 這意味著 `一週` 到 `一個月` 的情境，仍有機會停在前端油價與保費 shock，而不必自動推導到一年期 stagflation。  
   - Source: https://www.csis.org/analysis/what-does-iran-war-mean-global-energy-markets

2. **另一個反方：衝突強度可能難以長期維持** [PROJECTED]  
   - CSIS 的 **Sarah Emerson** 認為，目前打擊強度未必可長期延續，且伊朗本身也需要對中國等買家保持出口與航運可行性。  
   - **為何重要：** 這讓「半年／一年」不是基準假設，而是只有在 `航運受阻 + 油價高位 + 產能延宕` 同時成立時才該採用的框架。  
   - Source: https://www.csis.org/analysis/what-does-iran-war-mean-global-energy-markets

3. **本文最大的推導風險**  
   - IMF 的「油價每漲 10% → 通膨 +0.4pp、產出 -0.1%」是全球平均規則，不能機械套到單一經濟體。  
   - 因此本文會把三個月以上的數字都標為 `[PROJECTED]`，且在文中直接說明「這是依 IMF rule-of-thumb 做的線性外推，不是已發生事實」。  

---

## 2) Deep Synthesis：時間一拉長，主導變數就會換手

### 2.1 核心判斷

這個題目最容易犯的錯，是把 `一週` 到 `一年` 都當成同一個故事。

其實不是。

- **一週**：市場先交易 `油價、保費、美元、短端利率`。  
- **一個月到三個月**：開始交易 `headline inflation、央行延後寬鬆、企業毛利與庫存`。  
- **半年到一年**：重點換成 `信用、財政、LNG/化工/肥料供應鏈、能源安全資本支出`。

也就是說，**時間本身就是 transmission channel。**

### 2.2 時間矩陣（總經 × 市場）

| 時間 | 油價 | 通膨 / 利率 | 成長 / 信用利差 | 供應鏈 / 財政 | 市場最像什麼 |
|---|---|---|---|---|---|
| **一週** | `[ACTUAL]` Brent 已較 2/27 漲 32%；市場先加進戰爭險與運費風險。 | `[PROJECTED]` 還看不到正式 CPI/PCE 傳導，但 2Y/10Y 已先反映「降息要延後」。 | `[PROJECTED]` 對 GDP 幾乎還是 nowcast 衝擊；HY OAS 只由 3.10 升到 3.17，代表還不是信用事故。 | `[PROJECTED]` 先看到護航、保費、航班與船期調整；財政幾乎還沒上桌。 | **事件 shock + 前端油價重定價** |
| **一個月** | `[PROJECTED]` 若 Brent 仍在 90-100，汽柴油、航空、化工與肥料成本開始外溢。 | `[PROJECTED]` 央行更難先救成長，因為核心 PCE 目前已在 3.1%；短端利率與長端殖利率都偏高。 | `[PROJECTED]` 能源進口國實質所得受壓，運輸、航空、化工先出現利差擴大。 | `[PROJECTED]` 保費與繞航變成常態性成本；進口國開始討論補貼。 | **能源 shock + 延後寬鬆** |
| **三個月** | `[PROJECTED]` 若油價較基準高 20-30%，依 IMF 規則線性外推，隔年全球 headline inflation 可能多 **0.8-1.2pp**，global output 少 **0.2-0.3%**。 | `[PROJECTED]` 題目從 headline 油價，升級為 stagflation 壓力。 | `[PROJECTED]` PMI、企業指引、庫存與訂單開始下修；HY OAS 往 3.5% 以上擴散的風險上升。 | `[PROJECTED]` UNCTAD 所示肥料 / 乾散貨鏈條開始傳到食物與工業品成本。 | **通膨與成長同時惡化的 re-rating** |
| **半年** | `[PROJECTED]` 若仍未恢復，市場不再只看現貨，而會看 2027 LNG / 煤炭 / 替代供給。 | `[PROJECTED]` 央行陷入「不能太快降、又不能忽視成長疲弱」的雙難。 | `[PROJECTED]` 高耗能與高槓桿企業毛利承壓，違約率與降評壓力上升。 | `[PROJECTED]` 補貼、軍費、護航與保費擔保開始進財政表；Qatar LNG 時程延宕風險上升。 | **從事件波動變成政策與資產負債表問題** |
| **一年** | `[PROJECTED]` 戰爭已從油價題，變成能源安全與庫存制度題。 | `[PROJECTED]` 全球通膨中樞與利率中樞都可能高於原基準。 | `[PROJECTED]` 世界不是單純衰退，而是更像「高成本、低能見度、低估值」的新均衡。 | `[PROJECTED]` 美國承受更高財政與長端利率壓力；亞洲與歐洲承受更深的輸入型成本與供應鏈重排。 | **體制成本永久化** |

### 2.3 最有價值的一句話

> **核心判斷：** 美伊戰爭拖得越久，市場主軸就越不會停留在戰爭 headline；一週看油價與保費，一個季度看通膨與利率，半年到一年看信用、供應鏈與財政。

### 2.4 named contrarian（必留）

本文不能寫成「只要戰爭拖久，世界就必然油荒」。

最值得保留的反方，是 **Adi Imsirovic（CSIS）** 與 **Oxford Economics** 的保守基準：

- Imsirovic 認為目前更像 `secure transportation problem`，不是全球沒有油；只要保險與護航恢復，前端油價 shock 不一定自動變成全年危機。  
- Oxford Economics 甚至只假設未來一季平均 **4 mbpd** 供給受擾，Q2 Brent 平均 **$79**，結論是「會擾亂市場，但未必會擊穿市場」。  

這兩個反方都很重要，因為它們共同提醒：**真正需要升級到三個月、半年、一年的，不是 headline 本身，而是「高油價 + 航運受阻 + 供應延宕 + 信用擴散」是否同時持續。**

---

## 3) 建議成稿論點與骨架

### 建議標題

1. **美伊戰爭若拖成時間題：一週、一個月、三個月、半年、一年，市場各自在定價什麼？**
2. **戰爭拖多久，市場就換哪一套語言：從油價、通膨到信用與財政**

### 建議核心問題

**如果美伊戰爭不是幾天，而是拖成一週、一個月、三個月、半年、一年，總經與市場主導變數會怎麼換手？**

### 建議主論點

1. **短於一個月**：先是油價、戰爭險與降息延後，不必過度誇大成全年衰退。  
2. **三個月左右**：真正開始從「能源事件」變成「通膨與成長都受壓」的 stagflation 題。  
3. **半年到一年**：重點換成信用、供應鏈與財政，這時市場不是看 headline，而是看哪個資產負債表先扛不住。  

### 建議 Chart.js

- 圖型：bar
- 主題：`2026-02-27` 以來第一輪跨資產重定價（相對變動 %）
- 目的：讓讀者先看懂目前市場到底已經先定價了什麼

建議資料：

| 資產 | 變動 |
|---|---:|
| Brent 原油 | +32.3% |
| VIX | +37.4% |
| USD/TWD | +1.6% |
| S&P 500 | -3.6% |
| 台股加權 | -4.8% |
| 現貨金 | -5.7% |

### 建議分水嶺

1. 如果荷莫茲航運恢復、Brent 回到 **85 美元以下並連 5 個交易日**，→ 長到三個月以上的 stagflation / 財政劇本要降權。  
2. 如果 Brent 維持 **95 美元以上連 20 個交易日**，且 4 月 9 日 BEA 公布的 2 月核心 PCE 仍 **>=3.0%**，→ 題目正式從能源 shock 升級成政策兩難。  
3. 如果 HY OAS 升破 **3.50** 並連續 **2 週**、VIX 再站上 **30** 且連 **2 日**，→ 要把「市場波動」改寫成「信用條件收緊」。  

---

## 4) Fact-check 摘要表

| Claim | Blog Value | Actual / Basis | Source | Verdict |
|---|---|---|---|---|
| 開戰後 Brent 漲幅 | +32.3% | 71.32 → 94.35 | FRED Brent | correct |
| 美國 10Y 變化 | 3.97% → 4.27% | +30 bps | FRED DGS10 | correct |
| 美國 2Y 變化 | 3.38% → 3.76% | +38 bps | FRED DGS2 | correct |
| HY OAS 現況 | 3.17 | 3.10 → 3.17 | FRED BAMLH0A0HYM2 | correct |
| 荷莫茲流量 | 21 mbpd / 21% | EIA 2022 estimate | EIA Today in Energy | correct |
| 可繞行容量 | 3.5 mbpd | EIA estimate | EIA Today in Energy | correct |
| 核心 PCE | 3.1% YoY | Jan 2026 | BEA PIO Jan 2026 | correct |
| 美國未償公債 | $38.90T | 2026-03-12 | Treasury Debt API | correct |
| Treasury 借款估算 | Q1 $574B / Q2 $109B | Feb 2026 estimate | Treasury sb0377 | correct |
| IMF 規則 | 油價 +10% → headline inflation +0.4pp / output -0.1% | IMF speech summary | IMF 2026-02-24/03-09 materials | correct as rule-of-thumb |

---

## 5) 來源註冊表（按區域）

### Americas

1. EIA Strait of Hormuz: https://www.eia.gov/todayinenergy/detail.php?id=61002  
2. EIA STEO (2026-03-10): https://www.eia.gov/outlooks/steo/  
3. Treasury Debt API: https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?sort=-record_date&page%5Bsize%5D=1  
4. Treasury borrowing estimate: https://home.treasury.gov/news/press-releases/sb0377  
5. BEA PIO January 2026: https://www.bea.gov/news/2026/personal-income-and-outlays-january-2026  
6. FRED DGS10 / DGS2 / SP500 / VIXCLS / BAMLH0A0HYM2 / DCOILBRENTEU  

### Europe

1. Oxford Economics: https://www.oxfordeconomics.com/resource/iran-conflict-will-rile-energy-markets-not-break-them/  
2. UNCTAD Review of Maritime Transport 2025: https://unctad.org/publication/review-maritime-transport-2025  

### Global / Multilateral

1. IMF speech on geoeconomic fragmentation in the Middle East and Central Asia: https://www.imf.org/en/News/Articles/2026/02/24/sp-cj-geoeconomic-fragmentation-in-the-middle-east-and-central-asia  
2. World Bank Commodity Markets Outlook note: https://www.worldbank.org/en/news/press-release/2023/10/30/commodity-markets-outlook-under-the-shadow-of-geopolitical-risks  

### Asia / Taiwan

1. Stooq USD/TWD / XAUUSD / TAIEX:
   - https://stooq.com/q/d/l/?s=usdtwd&i=d
   - https://stooq.com/q/d/l/?s=xauusd&i=d
   - https://stooq.com/q/d/l/?s=%5Etwse&i=d
2. 財經皓角 aboutus（風格研究必查）: https://yutinghao.finance/aboutus/

---

## 6) 寫作時必留的口徑提醒

1. 不要把 IMF rule-of-thumb 寫成已發生事實。  
2. 不要把「一個月」和「一年」寫成同一個宏觀 regime。  
3. 不要把美國與亞洲的受傷方式混成同一條線。美國偏 `財政 / 長端利率`，亞洲偏 `輸入型成本 / 供應鏈`。  
4. 不要用投資建議語氣；只能寫資產如何受變數暴露。  

---

## 7) macro-post 改進建議（風格/來源/結構）

### 建議 1：topic mode 遇到「時間長度題」時，直接要求 horizon matrix

- **問題**：現行 skill 很強調因果拆解，但沒有明寫「時間尺度本身可以是主體結構」，容易把一週和一年混成一段敘事。
- **建議改動**：在 `.codex/skills/macro-post/SKILL.md` 的 topic mode 段加入規則：若使用者問題本身是 `一週/一月/一年` 類型，主體允許用 `時間 × 傳導線` 矩陣作為 section 2 的主要呈現方式。
- **可驗證標準**：未來同類題材的 section 2 至少有一張表，且每列都同時含 `主導 channel + macro effect + market effect`。
- **成本/風險**：表格會吃篇幅；若文章過短，需壓縮周邊段落。

### 建議 2：地緣能源文必須在前 300 字放入「亞洲曝險統計」

- **問題**：目前 opening 常從美國市場價格切入，但台灣讀者更需要知道亞洲為何比較痛。
- **建議改動**：在 `開場` 規則加入：若題材為 `geopolitics/energy`，前 300 字必須放入至少一個亞洲曝險數字，例如 `82% Hormuz crude to Asia` 或 `台幣 / 台股 / LNG` 連動。
- **可驗證標準**：未來 5 篇地緣能源文中，開場 300 字內至少 1 個亞洲曝險統計。
- **成本/風險**：研究時間增加；若官方亞洲統計不足，可退回區域 ETF / 匯率作次佳替代。

### 建議 3：scenario 文要強制放入 named contrarian

- **問題**：情境文最容易寫成單一路徑，特別是戰爭題材容易滑向確定性口氣。
- **建議改動**：在 topic mode 的 Step 2 或 Step 3 加一條 hard gate：scenario 類文章必須寫入一位具名反方（例如 Adi Imsirovic / Oxford Economics），並說明其成立條件。
- **可驗證標準**：未來 scenario 文都有 `具名反方 + 成立條件`，而不是模糊的「也有分析師認為」。
- **成本/風險**：資料搜尋時間變長；若找不到可信反方，必須明講「目前共識高度一致」而非硬湊。

### 可執行評分卡（0-2 分）

| 項目 | 分數 | 理由 |
|---|---:|---|
| 來源多樣性 | 2 | Americas / Europe / Asia / multilateral 都有 |
| 可驗證性 | 2 | 核心數字均有時間口徑與來源 |
| 框架清晰度 | 2 | 已轉成 `時間 × 傳導線` 矩陣 |
| 反例完整度 | 2 | 有 CSIS / Oxford 的反方與成立條件 |
| 可讀性 | 1 | 若表格塞太滿，成稿需再壓一次語氣 |

**總分：9 / 10**

結論：**維持現行 skill 主骨架，只做小幅 topic-mode 規則補強，不需要大改。**

---

## 8) style research inputs（供改稿時參照）

1. 財經皓角 aboutus：https://yutinghao.finance/aboutus/  
2. 游庭皓的財經皓角（2026-03-12）：https://www.youtube.com/watch?v=rR7ciI7M0pw  
3. 游庭皓的財經皓角（2026-03-13）：https://www.youtube.com/watch?v=nEMF7SQvU8s  

用途：**不是拿來做事實來源，而是觀察台灣讀者更容易吃進去的 opening 節奏與標題結構。**
