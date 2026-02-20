---
description: Generate a macro/investing blog post in Traditional Chinese using financial-graphs data and live web search
---

# /macro-post

Generate a macro-economic blog post connecting current market data to ETF implications.

## Usage

- `/macro-post` — auto-select topic based on current data
- `/macro-post "tariff impact on bonds"` — user-specified topic

## Execution Steps

### Step 1: Read Financial-Graphs Data

Read ALL of the following files from `/Users/isaac.l/projects/financial-graphs/data/`. Use parallel reads where possible.

**Required files:**

| File | What to extract |
|------|----------------|
| `overview.json` | VIX value/status, top/worst performers (TW + US), fed_rate, cpi |
| `item_reports.json` | All ETF entries — price (current, 52w high/low, 1d change), recommendation, category, summary, sources |
| `insights.json` | market_regime, summary, individual insights with sentiment/ETFs/sources |

**Per-symbol analysis** — read these directories and process each JSON file:

| Directory | What to extract |
|-----------|----------------|
| `data/research/latest/analysis/*.json` | economic_context (policy_rate, inflation), technical_summary, key_insights, recommendation, risk_factors |
| `data/research/latest/news/*.json` | news_items with title, source, url, date, summary, relevance |
| `data/research/latest/verified/*.json` | verified bilingual summaries and detailed reports |

**Important data notes:**
- `fed_rate` and `cpi` in overview.json may be `"N/A"` — if so, get values from analysis files' `economic_context` fields or from web search
- Ticker keys in item_reports.json use underscores: `0050_TW`, `006208_TW` (not dots)
- The `price` object contains: `current`, `change_1d_pct`, `high_52w`, `low_52w`
- The `insights.json` market_regime is one of: `risk-on`, `neutral`, `risk-off`

### Step 1.5: Check Data Freshness

Check the `updated_at` field in item_reports.json entries. If the data is **more than 3 days old**, treat all prices and percentages from financial-graphs as background context only — not as current market data. Web search results (Step 2) override stale local data for prices and breaking developments.

### Step 2: Web Search for Fresh Information

**CRITICAL**: The financial-graphs data can be days or weeks old. Web search is not optional — it is the primary source for current prices, breaking news, and geopolitical developments. Always run ALL of the following searches in parallel:

#### A. Standard Macro Data
1. **US CPI / inflation** — query: `"US CPI latest data {current_year}"`
2. **Fed Funds Rate / FOMC** — query: `"Federal Reserve interest rate decision {current_year}"`
3. **US unemployment / jobs** — query: `"US unemployment rate nonfarm payrolls latest"`
4. **10Y Treasury yield** — query: `"US 10 year treasury yield today"`

#### B. Geopolitical & Breaking News
5. **Breaking geopolitical risks** — query: `"geopolitical risk markets this week {current_year}"`
6. **Military conflicts / war risk** — query: `"military conflict impact oil gold stock market {current_year}"`
7. **Trade / tariff developments** — query: `"tariff trade war impact markets latest {current_year}"`

#### C. Asset-Specific Live Prices
8. **Gold price today** — query: `"gold price today {current_year}"`
9. **Oil price today** — query: `"oil price Brent WTI today {current_year}"`
10. **Bitcoin price today** — query: `"bitcoin price today {current_year}"`
11. **S&P 500 today** — query: `"S&P 500 stock market today {current_year}"`

#### D. Government & Institutional Reports
12. **Government economic reports** — query: `"CBO Treasury economic outlook report {current_year}"`
13. **Fed speeches this week** — query: `"Federal Reserve speech this week {current_year}"`

#### E. Major Publisher Analysis
14. **Institutional outlooks** — query: `"JPMorgan Goldman Sachs market outlook {current_month} {current_year}"`

If a user-specified topic was given, add a targeted search for that topic.

**After gathering results**: Compare web search prices against financial-graphs data. If any asset has moved more than 2% since the local data's `updated_at` date, flag this in the post and use the web search price instead. Geopolitical developments that post-date the local data must be incorporated as primary drivers — not afterthoughts.

### Step 3: Select Topic

Apply this decision tree using the data gathered. **If the user provided a topic argument, skip this tree and use their topic.**

```
IF active military conflict, war risk, or major geopolitical crisis found in web search:
  → Topic: geopolitical risk and asset implications (oil, gold, defense, safe havens)
ELSE IF VIX value > 25 OR MOVE index value > 120:
  → Topic: volatility regime analysis
ELSE IF a major macro release (CPI, FOMC, jobs report) occurred in the past 3 days (check news dates):
  → Topic: that release's market impact
ELSE IF oil price spiked >5% in the past week (check web search):
  → Topic: energy shock and inflation transmission
ELSE IF spread between best and worst monthly performer > 5%:
  → Topic: sector/asset rotation theme
ELSE:
  → Topic: general macro outlook and ETF positioning
```

**Geopolitical events take priority.** Wars, sanctions, trade escalations, and energy supply disruptions move markets faster and harder than scheduled data releases. If web search reveals a major geopolitical story, it should dominate the post even if the financial-graphs data looks calm — the local data may simply be stale.

### Step 4: Generate Blog Post

Create **one file** in Traditional Chinese in `/Users/isaac.l/projects/shooeugenesea.github.io/_posts/`:

**File naming:** `YYYY-MM-DD-{slug}-zh.md`
- Use today's date
- Slug should be lowercase, hyphenated, 3-6 words (e.g., `fed-holds-rates-etf-impact`)

#### Post Template

```markdown
---
layout: post
title: "{Chinese title}"
date: YYYY-MM-DD HH:MM:SS +0800
categories: [ai-generated]
tags: [macro, etf, investing]
lang: zh-TW
---

## 總經快照

[2-3句話涵蓋：聯準會利率、最新CPI、就業狀況、VIX水平。英文縮寫首次使用時附註，例如「消費者物價指數 (CPI)」]

## 重點發展

[3-5段落分析主要總經主題。使用具體數據，引用來源。]

## ETF 影響分析

### 股票型
[股票類ETF分析，包含價格與52週區間]

### 債券型
[債券ETF在利率環境下的分析]

### 另類資產
[黃金、加密貨幣等]

## 後續觀察重點

- [即將到來的事件1]
- [即將到來的事件2]
- [即將到來的事件3]

---

*資料來源：[列出關鍵來源連結]*
*市場數據截至：YYYY-MM-DD*
*本文僅供參考，不構成投資建議。*
```

### Content Rules

1. **Take a clear position** — the post must have a thesis the author is willing to be wrong about. "The bond market is right and equities are wrong" is a viewpoint. "Markets are rotating" is a description. Avoid hedged non-positions like "investors should watch carefully" or "this could go either way." Pick a side and defend it with evidence.
2. **Argue with logic chains, not adjectives** — adding "striking" or "unusual" to a data point is not an insight. An insight is a causal argument: "The 898K payroll revision means 2025's labor market was materially weaker than real-time data showed → the soft landing may already be a slow landing → bonds are pricing this in but equities aren't." Each paragraph should follow: claim → evidence → implication.
3. **Quantify the risk/reward** — for every ETF discussed, frame the upside vs downside scenario with approximate numbers. "SPY needs earnings growth to justify 21x at 3.5%+ risk-free rate. Miss by 5% and you have 10-15% downside. Meet expectations and you get maybe 5%." This replaces vague "hold" or "buy" labels with actual reasoning.
4. **Challenge the obvious narrative** — if everyone sees a rotation into international markets, ask whether VEA at 99% of its 52-week range is actually diversification or just spreading momentum risk geographically. If gold is rallying, distinguish between cyclical (inflation hedge) and structural (fiscal hedge) drivers — this determines whether you're late or early.
5. **Name what would prove you wrong** — every thesis needs a falsification condition. "The one scenario where both gold and bonds sell off is a hawkish Fed chair repricing terminal rates higher." This builds credibility and gives the reader a monitoring framework.
5. **No AI mentions** — do not reference AI, automation, or auto-generation in the post content
6. **Cite everything** — every factual claim needs a source (URL from financial-graphs data or web search)
7. **Use real numbers** — never write "inflation is rising" when you can write "CPI rose to 2.8% YoY." Numbers are supporting evidence, but the sentence must lead with the insight.
8. **Word count** — target 700-900 words per post
9. **Traditional Chinese only** — write in Traditional Chinese throughout. Parenthetically gloss English abbreviations on first use only, e.g.「消費者物價指數 (CPI)」. The writing should be native Chinese, not translated from English.
10. **Tags** — always include `[macro, etf, investing]`. Add topical tags as appropriate:
    - `fed` — if Fed policy is a focus
    - `bonds` — if fixed income is discussed prominently
    - `gold` — if gold/commodities are a focus
    - `volatility` — if VIX/MOVE driven
    - `taiwan` — if Taiwan market ETFs are discussed
11. **Disclaimer** — always include at the bottom in the appropriate language

### Step 5: Verify Output

After generating the post:

1. Confirm the file exists in `_posts/` with correct filename
2. Read back the file and verify:
   - Front matter has `layout: post`, correct `date` with `+0800`, `tags` as array, `lang: zh-TW`
   - All sections from the template are present
   - Actual numbers/data points appear throughout (not vague language)
   - Sources are cited as hyperlinks
   - Disclaimer is present
3. Report to user: filename created, topic chosen, key data points used
