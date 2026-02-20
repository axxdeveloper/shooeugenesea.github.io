---
description: Generate 4 macro/investing blog posts in Traditional Chinese using live web search
---

# /macro-post

Generate **four** blog posts in Traditional Chinese — covering macro commentary, government data deep-dive, politics, and AI/technology — each anchored to their economic and market impact.

## Usage

- `/macro-post` — auto-select topics based on current data
- `/macro-post "tariff impact on bonds"` — user-specified topic hint (agents still research broadly)

## Post Styles

Every invocation produces **four posts**:

### Style A: Commentary (觀點文)

Broad market analysis with a strong opinionated thesis. Covers multiple data points and ETFs.

**Structure:**
- **總經快照** — 2-3 sentences: Fed rate, key data, market backdrop
- **重點發展** — 3-5 paragraphs building the thesis across multiple data points. Each paragraph: claim → evidence → implication
- **市場數據圖表** — Chart.js chart (market data or gov data)
- **ETF 影響分析** — Equities, Bonds, Alternatives — each with price, 52-week context, risk/reward
- **後續觀察重點** — 2-3 upcoming catalysts

**Word count:** 1000-1400 words.

### Style B: Deep-Dive (數據文)

One government data chart as the centerpiece. Everything explains what the chart shows and why it matters.

**Structure:**
- **總經快照** — 2-3 sentences: Fed rate, the specific data release, market context
- **數據解讀** — Chart.js chart first, then 3-5 paragraphs analyzing the data
- **投資影響** — ETF implications tied directly to the chart data
- **後續觀察** — Next data releases, what would change the thesis

**Word count:** 700-900 words.

### Style C: Geopolitics (國際政經文)

International and domestic political events that directly affect the global economy and markets. Scope includes **US domestic policy, US-China relations, Middle East tensions, EU/UK trade policy, central bank actions worldwide (ECB, BOJ, PBoC), Taiwan Strait, energy geopolitics, and sanctions regimes.** Must connect politics → economic mechanism → market/ETF impact.

**Structure:**
- **國際政經背景** — 2-3 sentences: what happened, which countries/actors are involved, current status
- **經濟傳導機制** — Chart.js chart showing the economic data affected, then 3-5 paragraphs:
  - What is the political event? Which countries are involved?
  - Through what channel does it affect the global economy? (tariffs → import prices → CPI, sanctions → oil supply → energy prices, geopolitics → supply chain → semiconductor shortage, capital flows → FX → emerging markets, etc.)
  - How big is the impact? Quantify with data.
  - What is the market pricing in vs. what could actually happen?
  - 筆記 (your take): is the political risk over- or under-priced?
- **投資影響** — ETF implications: which sectors/assets/regions win or lose
- **後續觀察** — Next political milestones: summits, votes, court rulings, military deadlines, elections

**Word count:** 700-900 words.

### Style D: AI & Technology (科技文)

AI and technology developments that have significant economic impact — capex cycles, labor market disruption, productivity gains, energy demand, sector rotation. Must connect tech → economic impact → market/ETF implications.

**Structure:**
- **科技動態** — 2-3 sentences: the key AI/tech development, who's involved, scale of impact
- **經濟影響分析** — Chart.js chart showing economic data related to the tech story, then 3-5 paragraphs:
  - What is the technology development? (earnings, capex plans, product launches, adoption data)
  - How does it affect the real economy? (jobs, productivity, energy demand, capital allocation)
  - Which sectors are being disrupted and which are benefiting?
  - How are valuations reflecting (or not) the AI impact?
  - 筆記 (your take): is the market over- or under-estimating the economic impact?
- **投資影響** — ETF implications: tech ETFs (QQQ, SMH, SOXX), beneficiary sectors, and losers
- **後續觀察** — Upcoming earnings, product launches, regulatory decisions

**Word count:** 700-900 words.

## Execution Steps

### Step 1: Research via Agents

Launch **six** research agents in parallel using the Task tool (subagent_type: `general-purpose`):

| Agent | Task | What to return |
|-------|------|----------------|
| **Macro Data Agent** | Search for latest CPI, Fed rate, unemployment, 10Y yield, Core PCE, GDP | Actual numbers with dates, source URLs, beat/miss expectations |
| **Gov Reports Agent** | Search for latest CBO, BEA, BLS, Treasury, Fed reports and speeches | Key data tables, projections, quotes, report URLs |
| **Market Context Agent** | Search for today's S&P 500, gold, oil, bitcoin, VIX, bond yields + biggest market-moving news this week | Current prices, daily/weekly changes, source URLs |
| **Geopolitics Agent** | Search for international political developments affecting global markets: US-China trade/tech war, Middle East tensions (Iran, Israel), EU/UK economic policy, Japan/BOJ policy, China PBoC stimulus, Taiwan Strait, Russia-Ukraine, OPEC+ decisions, US domestic policy (tariffs, fiscal, Supreme Court, DOGE). Cover at least 3 different regions. | What happened, which countries involved, economic transmission channels, quantified impact, source URLs |
| **AI/Tech Agent** | Search for latest AI and technology news with economic impact: big tech earnings/capex, AI adoption data, semiconductor supply, energy demand from data centers, tech layoffs or hiring, major product launches | Key numbers (capex $, revenue growth, job impact), affected sectors, source URLs |
| **Sector Rotation Agent** | Search for this week's sector ETF performance (XLK, XLF, XLE, XLV, etc.), earnings surprises, and analyst upgrades/downgrades | Sector returns, notable earnings, analyst calls with source URLs |

Each agent should run 3-5 web searches and return a concise bullet-point summary.

### Step 2: Pick Four Topics

From all agent results, pick **four different topics** — one for each style:

1. **Commentary**: The broadest, most market-moving macro story that connects multiple data points
2. **Deep-dive**: The single government report with the most complete, chartable numbers (5+ data points from BLS, BEA, Fed, Treasury, or CBO)
3. **Geopolitics**: The international or domestic political development with the clearest economic transmission mechanism and quantifiable market impact. Prefer stories that span multiple countries or have cross-border economic effects.
4. **AI/Tech**: The technology story with the largest real-economy footprint (capex, jobs, energy, productivity)

**All four topics must be different.** They can be related but each post must stand alone with its own unique thesis.

**Skip a style if there's no quality topic.** If there's no meaningful political news with economic impact this week, generate 3 posts instead of 4. Never force a weak topic — quality over quantity.

### Step 3: Generate Blog Posts

Create files in Traditional Chinese in `/Users/isaac.l/projects/shooeugenesea.github.io/_posts/`:

**File naming:** `YYYY-MM-DD-{slug}-zh.md`

**Front matter:**
```yaml
---
layout: post
title: "{Chinese title}"
date: YYYY-MM-DD HH:MM:SS +0800
categories: [macro]
tags: [macro, etf, investing]
lang: zh-TW
---
```

**Tags per style:**
- Commentary: `[macro, etf, investing]` + topical (`fed`, `bonds`, `gold`, `volatility`)
- Deep-dive: `[macro, etf, investing]` + data source (`fed`, `bonds`, `employment`)
- Geopolitics: `[macro, etf, investing, geopolitics]` + topical (`tariff`, `fiscal`, `china`, `middleeast`, `europe`, `taiwan`)
- AI/Tech: `[macro, etf, investing, ai, technology]` + topical (`semiconductor`, `cloud`, `energy`)

### Content Rules

1. **Consider the global picture** — every post should account for international context, not just US data in isolation. How do ECB/BOJ/PBoC policies, geopolitical tensions, global supply chains, and cross-border capital flows affect the thesis? A US CPI post should mention tariff impacts; a tech post should mention TSMC/Taiwan risk; a commentary should weave in global macro.
2. **Take a clear position** — each post must have a thesis the author is willing to be wrong about. Name what would prove you wrong.
2. **Argue with logic chains, not adjectives** — each paragraph: claim → evidence → implication.
3. **Quantify the risk/reward** — for every ETF discussed, frame the upside vs downside with approximate numbers.
4. **No AI-generation mentions** — do not reference that the post was auto-generated or written by AI.
5. **Cite everything** — every factual claim needs a source URL as an inline markdown link.
6. **Use real numbers** — never write "inflation is rising" when you can write "CPI rose to 2.4% YoY".
7. **Traditional Chinese only** — parenthetically gloss English abbreviations on first use, e.g.「消費者物價指數 (CPI)」
8. **Disclaimer** — always include at the bottom:
   ```
   *資料來源：[列出來源連結]*
   *市場數據截至：YYYY-MM-DD*
   *本文僅供參考，不構成投資建議。*
   ```

### Chart Guidelines

Every post includes one Chart.js chart. Each post's `<canvas>` must use a **unique id** (e.g., `macroChart1`, `macroChart2`, `macroChart3`, `macroChart4`).

**For deep-dive posts:** Data must come from official government sources:

| Source | Data | URL |
|---|---|---|
| BLS | CPI, unemployment, nonfarm payrolls | bls.gov |
| BEA | PCE, GDP | bea.gov |
| Federal Reserve | Fed funds rate, FOMC projections | federalreserve.gov |
| US Treasury | Yield curve, treasury rates | home.treasury.gov |
| CBO | Deficit/debt projections, economic outlook | cbo.gov |

**For commentary/politics/tech posts:** Can use market data, industry data, or gov data. Must cite sources.

**Chart type selection:**

| Data story | Chart type |
|---|---|
| Inflation trend or CPI vs PCE divergence | Bar or line chart |
| Rate/yield environment | Line chart with reference lines |
| Fiscal deficit/debt trajectory | Bar chart |
| Employment trend | Line or bar chart |
| Asset/sector comparison | Horizontal bar chart |
| Capex/revenue trends | Line or grouped bar chart |
| Policy impact (before/after or with/without) | Grouped bar chart |

**Implementation:**

```html
<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChartN"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChartN'), {
  // Chart config with REAL NUMBERS from cited sources
});
</script>
```

**Chart rules:**
- `max-width: 600px`, `margin: 2em auto`
- Title must include data source attribution
- Highlight the key data point that supports the thesis
- All numbers traceable to a specific source — never fabricate

### Step 3.5: Fact-Check Key Claims

Before finalizing, launch **four** fact-check agents in parallel (subagent_type: `general-purpose`) to verify the most important data points across all posts:

| Agent | What to verify |
|-------|----------------|
| **Market Data Checker** | Verify all ETF prices, gold, oil, bitcoin, VIX against current market data. Flag any number that's off by more than 1%. |
| **Gov Data Checker** | Verify all government statistics (GDP, CPI, PCE, unemployment, CBO projections) against official sources (.gov domains). Flag outdated figures (e.g., using last month's data when a new release exists). |
| **Geopolitics Checker** | Verify all geopolitical claims: who did what, who issued ultimatums, correct dates, correct characterizations. Flag any reversed attribution or overstated claims. |
| **Tech/Industry Checker** | Verify all tech/industry claims: capex numbers, market cap changes (single day vs multi-day), adoption stats. Flag timeframe errors. |

Each agent should return a table: `Claim | Blog Value | Actual Value | Source | Verdict (correct/wrong/outdated)`.

**After fact-check:** Fix any wrong or outdated data before proceeding. If a claim is unverifiable from reliable sources, either remove it or clearly attribute it (e.g., "according to analyst estimates").

### Step 4: Verify Output

1. Confirm all files exist with correct filenames
2. Verify each: front matter correct, chart with unique canvas id, sourced data, all claims cited, disclaimer present
3. Report to user: all filenames, style + topic for each, chart data sources
