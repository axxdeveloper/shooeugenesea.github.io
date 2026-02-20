---
description: Generate a macro/investing blog post in Traditional Chinese using live web search
---

# /macro-post

Generate a macro-economic blog post connecting current market data to ETF implications.

## Usage

- `/macro-post` — auto-select topic based on current data
- `/macro-post "tariff impact on bonds"` — user-specified topic

## Execution Steps

### Step 1: Parallel Research via Agents

All market data comes from live web search. No local data files are used.

**Launch the following research agents in parallel using the Task tool** (subagent_type: `general-purpose`). Each agent focuses on one domain and returns a structured summary. Running them in parallel saves significant time.

| Agent | Task | What to return |
|-------|------|----------------|
| **Macro Data Agent** | Search for latest CPI, Fed rate, unemployment, 10Y yield, Core PCE | Actual numbers with dates and source URLs |
| **Geopolitical Agent** | Search for active conflicts, military tensions, sanctions, trade wars | Top 2-3 stories ranked by market impact, with source URLs |
| **Asset Price Agent** | Search for today's gold, oil (Brent+WTI), bitcoin, S&P 500 prices | Current price, daily change %, and source URLs for each |
| **Institutional Agent** | Search for latest Fed speeches, CBO/Treasury reports, JPMorgan/Goldman outlooks | Key quotes, forecasts, and source URLs |

Each agent should run 2-4 web searches within its domain and return a concise bullet-point summary (not raw search results). After all agents return, combine their findings into a unified picture before proceeding to Step 3.

**Search queries per agent:**

#### Macro Data Agent (queries 1-4)
1. `"US CPI latest data {current_year}"`
2. `"Federal Reserve interest rate decision {current_year}"`
3. `"US unemployment rate nonfarm payrolls latest"`
4. `"US 10 year treasury yield today"`

#### Geopolitical Agent (queries 5-7)
5. `"geopolitical risk markets this week {current_year}"`
6. `"military conflict impact oil gold stock market {current_year}"`
7. `"tariff trade war impact markets latest {current_year}"`
8. `"biggest market moving news this week {current_year}"` — to catch stories beyond geopolitics (earnings misses, data releases, policy changes)

#### Asset Price Agent (queries 9-12)
9. `"gold price today {current_year}"`
10. `"oil price Brent WTI today {current_year}"`
11. `"bitcoin price today {current_year}"`
12. `"S&P 500 stock market today {current_year}"`

#### Institutional Agent (queries 13-15)
13. `"CBO Treasury economic outlook report {current_year}"`
14. `"Federal Reserve speech this week {current_year}"`
15. `"JPMorgan Goldman Sachs market outlook {current_month} {current_year}"`

If a user-specified topic was given, add a targeted search to the most relevant agent.

**After gathering results**: Combine all agent findings into a unified picture before proceeding to Step 2.

### Step 2: Select Topic

**If the user provided a topic argument, use their topic.** Otherwise, select the topic where the research agents returned the most complete, concrete, and actionable data.

**Selection criteria — pick the topic that scores highest:**

1. **Data completeness** — Do you have specific numbers, dates, and source URLs? A topic with "CPI rose 2.4% YoY, released Feb 13" beats one with vague "inflation concerns persist."
2. **Causal chain strength** — Can you build a logical argument from data → thesis → ETF implication? Prefer topics where you can connect at least 3 data points into one coherent story.
3. **Actionable ETF implications** — Does the topic directly affect asset prices you can quantify? A Fed rate decision with known yield impacts beats a general geopolitical worry without price data.
4. **Freshness** — Prefer developments from the past 3 days over older stories.

**Priority signals** (in order, but only if data is sufficient to write a well-supported post):

```
1. Active military conflict or geopolitical crisis WITH concrete price impacts (oil, gold moves with numbers)
2. Major macro release (CPI, FOMC, jobs, PCE) in the past 3 days WITH actual data points
3. VIX > 25 or MOVE > 120 WITH context on what's driving it
4. Oil spike >5% in a week WITH supply/demand explanation
5. Notable sector/asset divergence WITH performance numbers
6. General macro outlook (fallback)
```

**Key rule: Never write about a topic where you lack the data to support a clear thesis with specific numbers.** If the top-priority signal has weak data, move to the next one that has strong data. A well-supported post on a #3 priority topic is better than a vague post on a #1 priority topic.

### Step 3: Generate Blog Post

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
categories: [macro]
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

## 市場數據圖表

[Insert Chart.js chart here — see Chart Guidelines below]

**[圖表標題：用一句話描述圖表顯示的重點]**

[2-3句話解讀圖表：這個數據模式意味著什麼？根據近期新聞和政府報告，接下來可能發生什麼？]

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
6. **Cite everything** — every factual claim needs a source URL from web search
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
12. **Chart** — every post must include one Chart.js chart with real data. Follow the Chart Guidelines below.

### Chart Guidelines

Embed one interactive chart per post using [Chart.js](https://www.chartjs.org/) loaded from CDN. The chart must use **real numbers** from the research agents — never placeholder or made-up data.

**Chart type selection** — pick the type that best supports the post's thesis:

| When the post focuses on... | Use this chart type |
|---|---|
| Comparing asset/ETF returns | Horizontal bar chart (weekly or YTD % change) |
| Showing where assets sit vs their range | Horizontal bar chart (% position in 52-week range) |
| Rate/yield/inflation trend | Line chart (with labeled data points) |
| Sector or category breakdown | Doughnut or bar chart |

**Implementation template:**

```html
<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart'), {
  type: 'bar',  // or 'line', 'doughnut', etc.
  data: {
    labels: ['SPY', 'QQQ', 'GLD', 'TLT', 'BTC'],
    datasets: [{
      label: '週漲跌幅 (%)',
      data: [-0.63, -0.56, 10.06, 1.2, -14.3],  // USE REAL NUMBERS
      backgroundColor: [
        // Green for positive, red for negative
      ]
    }]
  },
  options: {
    indexAxis: 'y',  // horizontal bars
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: '本週主要資產表現' }
    }
  }
});
</script>
```

**Chart rules:**
- Use `max-width: 600px` and `margin: 2em auto` for the container
- Color coding: green (`rgba(34,197,94,0.7)`) for positive values, red (`rgba(239,68,68,0.7)`) for negative
- Chart title in Traditional Chinese
- All data points must come from research agent results — never fabricate numbers
- Place the chart in the 「市場數據圖表」 section of the post
- Below the chart, write a **bolded one-line caption** explaining the key takeaway, followed by 2-3 sentences interpreting the pattern and its implications

### Step 4: Verify Output

After generating the post:

1. Confirm the file exists in `_posts/` with correct filename
2. Read back the file and verify:
   - Front matter has `layout: post`, correct `date` with `+0800`, `tags` as array, `lang: zh-TW`
   - All sections from the template are present (including 市場數據圖表)
   - Chart.js chart is present with real data, CDN script loaded, canvas element has unique id
   - Actual numbers/data points appear throughout (not vague language)
   - Sources are cited as hyperlinks
   - Disclaimer is present
3. Report to user: filename created, topic chosen, key data points used
