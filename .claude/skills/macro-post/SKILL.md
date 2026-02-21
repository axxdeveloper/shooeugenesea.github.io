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

### Step 1.5: Classify the News Day & Read Previous Posts

Before picking topics, do two things:

**1. Read previous posts.** Read the titles, descriptions, and first paragraphs of the most recent 1-3 days of posts in `_posts/`. Build a list of topics and key data points already covered. For example:

```
Previous posts (2026-02-20):
- A: Stagflation signal (GDP 1.4%, Core PCE 3.0%, Fed dilemma)
- B: CBO debt trajectory (debt/GDP 101%→120%)
- C: Four geopolitical risks (Hormuz, BOJ, EU gas, Taiwan)
- D: AI capex $6,350B + SaaS disruption
```

**2. Classify the news day:**

- **Breaking news day**: A major event happened TODAY or YESTERDAY that wasn't covered in previous posts (e.g., surprise rate decision, military action, earnings shock, SCOTUS ruling, unexpected data release). In this case, cover the breaking news — overlap with adjacent topics is acceptable because it's genuinely new.
- **Quiet day**: No major new events since the last post batch. The same stories from yesterday are still dominating headlines with no material updates. In this case, switch to **discovery mode** — actively seek under-the-radar topics that provide reader value beyond rehashing yesterday's takes.

### Step 2: Pick Four Topics

From all agent results, pick **four different topics** — one for each style. The selection strategy depends on the day type from Step 1.5.

#### For breaking news days:

Cover the breaking event in the most fitting style. Other styles should find angles NOT covered by previous posts — even if they reference the same event, the thesis and primary data must be different.

#### For quiet days (discovery mode):

Apply a priority hierarchy for each style to find topics that provide genuine new value to readers:

1. **New data releases** not yet covered (e.g., a BLS/BEA/Fed report dropped today that wasn't in previous posts)
2. **Emerging risks** the market is underpricing — things NOT in current headlines (e.g., commercial real estate stress, consumer credit delinquencies rising, a country's bond auction failing, corporate debt refinancing wall)
3. **Structural/social trends** with economic consequences (e.g., aging demographics impact on labor, student debt burden on consumption, housing affordability crisis, healthcare cost spiral, insurance market stress)
4. **Contrarian re-evaluation** of a consensus view (e.g., "everyone says stagflation, but here's why the data doesn't support it yet" — only if the contrarian case has real data behind it)
5. **Cross-market connections** others aren't making (e.g., how Japan's rate hike is affecting EM carry trades, how DOGE spending cuts flow through to specific state economies)

Per-style guidance:
1. **Commentary**: The broadest macro story with genuine new insight — either a breaking event or a discovery-mode angle
2. **Deep-dive**: The government report with the most complete, chartable numbers (5+ data points from BLS, BEA, Fed, Treasury, or CBO). On quiet days, look for reports that dropped recently but were overshadowed by bigger news
3. **Geopolitics**: The political development with the clearest economic transmission mechanism. On quiet days, look for slow-burn geopolitical shifts (trade negotiations, sanctions regime changes, election dynamics) rather than rehashing yesterday's hot takes
4. **AI/Tech**: The technology story with the largest real-economy footprint. On quiet days, explore structural angles (labor displacement data, energy grid constraints, semiconductor supply chain, regulatory developments) rather than repeating capex headlines

**All four topics must be different.** They can be related but each post must stand alone with its own unique thesis.

**Deduplication rule:** Compare each candidate topic against the previous-posts list from Step 1.5. A topic is **too similar** if it shares >50% of its data points with a post from the last 3 days:
- **Same data, same angle = skip it.** (e.g., yesterday wrote about GDP 1.4% + Core PCE stagflation → don't write another stagflation post using the same numbers)
- **Same event, deeper zoom = OK only if the thesis is fundamentally different.** (e.g., yesterday covered Hormuz as 1 of 4 risks → today can deep-dive Hormuz ONLY if the thesis is different, like scenario-based oil price modeling vs. broad risk overview). When building on a previous post, reference it: "上期分析了 AI capex 的 SaaS 衝擊面，本期從現金流角度切入"
- **Same sector, different story = OK.** (e.g., yesterday wrote AI capex + SaaS disruption → today can write AI labor displacement data, since the thesis and data are entirely different)
- If a style's best topic overlaps with yesterday, pick the **second-best** topic for that style, or skip the style entirely.

**Skip a style if there's no quality topic.** If there's no meaningful political news with economic impact this week, generate 3 posts instead of 4. Never force a weak topic — quality over quantity.

### Step 3: Deep Investigation & Post Generation (4 Parallel Agents)

Launch **four** parallel agents using the Task tool (subagent_type: `general-purpose`), one for each chosen topic. Each agent independently **researches deeply** then **writes the post**.

Each agent receives:
- The **broad research context** from Step 1 (relevant bullet points for its topic)
- Its **assigned style** (A/B/C/D) with the full structure template from this skill
- The **Content Rules** and **Chart Guidelines** sections below
- The **target filename** and front matter template

Each agent must:
1. **Deep research** — run 5-8 additional web searches focused specifically on its topic. Go deeper than Step 1: find primary sources, historical context, contrarian views, specific numbers that Step 1 missed. For example:
   - Commentary agent: search for analyst reactions, cross-asset correlations, historical parallels
   - Deep-dive agent: pull the actual government report tables, find revisions to prior data, search for expert commentary on the release
   - Geopolitics agent: find diplomatic statements, trade flow data, historical precedents for similar political events
   - AI/Tech agent: find earnings call transcripts, capex breakdowns, adoption surveys, energy consumption data
2. **Synthesize a thesis** — form a clear, opinionated take based on the deep research
3. **Write the full post** in Traditional Chinese, following the style template exactly
4. **Write the file** to `/Users/isaac.l/projects/shooeugenesea.github.io/_posts/` with filename `YYYY-MM-DD-{slug}-zh.md`

**File naming:** `YYYY-MM-DD-{slug}-zh.md`

**Front matter:**
```yaml
---
layout: post
title: "{Chinese title}"
date: YYYY-MM-DD HH:MM:SS +0800
categories: [macro]
tags: [macro, etf, investing]
description: "{1-2 sentence Chinese summary with key numbers and ETF tickers — this controls the Google search snippet}"
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
2. **Take a clear position with reader-actionable takeaways** — each post must have a thesis the author is willing to be wrong about. The 筆記 section is the most important part of every post — it's what the reader walks away with. It must go beyond "I think the market is mispricing X" and answer: **"So what should the reader actually do with this information?"** Structure every 筆記 as:
   - **一句話結論** — A single memorable sentence the reader can take away (e.g., "這份協定是買 EWT 的理由，但不是追高的理由" or "在 Q1 GDP 出爐前，防禦配置優於進攻")
   - **情境決策框架** — Give readers a concrete if/then framework tied to portfolio actions, not just thesis invalidation. Example: "如果 Q1 GDP 反彈超過 3.0%，可考慮減碼 TLT、加碼 XLI；如果低於 2.0%，衰退交易將主導市場，SPY 下行風險 5-8%"
   - **持續觀察** — Name the specific data points, dates, and events to watch, with WHY each matters (not just a list of conditions)
2. **Argue with logic chains, not adjectives** — each paragraph: claim → evidence → implication.
3. **Quantify the risk/reward** — for every ETF discussed, frame the upside vs downside with approximate numbers.
4. **No AI-generation mentions** — do not reference that the post was auto-generated or written by AI.
5. **Cite everything** — every factual claim needs a source URL as an inline markdown link.
6. **Use real numbers** — never write "inflation is rising" when you can write "CPI rose to 2.4% YoY".
7. **Traditional Chinese only** — parenthetically gloss English abbreviations on first use, e.g.「消費者物價指數 (CPI)」
8. **Date every event** — when referencing a policy decision, data release, ruling, or any event that didn't happen on the post's publication date, include the specific date (e.g., "聯準會 1 月 28 日以 10:2 投票維持利率不變" not "聯準會以 10:2 投票維持利率不變"). Readers should never have to guess *when* something happened.
9. **No abstract references** — never refer to scenarios, sections, or items by number/letter alone (e.g., "情境 3", "第二點"). Readers don't memorize numbering. Always use descriptive names inline: "有限軍事打擊情境" not "情境 3", "海峽封鎖情境" not "情境 4". Charts may label axes with numbers/letters for space, but prose must always be self-explanatory without cross-referencing.
10. **Jargon glossary** — when a post uses domain-specific terms that a general reader would not immediately understand (e.g., CMBS, NOI, carry trade, REIT, credit spread), add a small inline aside box near where the term **first appears**. Float it to the right of the paragraph so it sits alongside the relevant text. Each term is explained only once per post. Group terms that first appear in the same section into one box.
   ```html
   <aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
   <strong>TERM</strong>：一句話白話解釋。
   </aside>
   ```
   Rules:
   - Place the `<aside>` immediately before the paragraph where the term is first used in detail
   - Keep each definition to one sentence
   - Common terms like ETF, Fed, GDP, CPI do NOT need entries — only terms a casual reader would not know
   - Descriptive Chinese phrases (e.g., 到期牆、品質遷移) that are already self-explanatory in context do NOT need entries — only true jargon and acronyms
10. **Disclaimer** — always include at the bottom:
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

### Step 3.5: Fact-Check Key Claims (MANDATORY — NEVER SKIP)

**This step is non-negotiable.** Every post must pass fact-check before it can be considered complete. Do not skip this step due to time pressure, context limits, or any other reason. A post that has not been fact-checked is not a finished post.

Launch **four** fact-check agents in parallel (subagent_type: `general-purpose`) to verify the most important data points across all posts:

| Agent | What to verify |
|-------|----------------|
| **Market Data Checker** | Verify all ETF prices, gold, oil, bitcoin, VIX against current market data. Flag any number that's off by more than 1%. |
| **Gov Data Checker** | Verify all government statistics (GDP, CPI, PCE, unemployment, CBO projections) against official sources (.gov domains). Flag outdated figures (e.g., using last month's data when a new release exists). |
| **Geopolitics Checker** | Verify all geopolitical claims: who did what, who issued ultimatums, correct dates, correct characterizations. Flag any reversed attribution or overstated claims. |
| **Tech/Industry Checker** | Verify all tech/industry claims: capex numbers, market cap changes (single day vs multi-day), adoption stats. Flag timeframe errors. |

Each agent should return a table: `Claim | Blog Value | Actual Value | Source | Verdict (correct/wrong/outdated)`.

**Chart Data Verification (CRITICAL):** Each fact-check agent must also verify the Chart.js data in its domain:
- Extract every number from the chart's `data` array and `labels`
- Cross-reference each number against the cited source
- Check that the chart type matches the data story (e.g., don't use a line chart for categorical comparisons)
- Verify axis labels, units, and scale are correct
- Flag any chart where data is fabricated, rounded beyond reason (>5% deviation), or uses a misleading scale

**After fact-check — Rejection Protocol:**
- **Minor errors** (1-2 wrong numbers, fixable): Fix the specific numbers in the post and chart. Document what was changed.
- **Major errors** (3+ wrong data points, chart data largely fabricated, wrong thesis based on incorrect data): **REJECT the post entirely.** Delete the file and re-launch the Step 3 agent for that post with corrected research data. The regenerated post must pass fact-check again.
- **Unverifiable claims**: Either remove the claim or clearly attribute it (e.g., "according to analyst estimates"). If >30% of a post's key claims are unverifiable, REJECT and regenerate.
- A post that fails fact-check twice should be skipped entirely — report to the user that the topic lacked reliable data.

### Step 4: Retrospective — Review Past Posts & Skill

Before finalizing, review the most recent past posts (previous 1-2 dates) in `_posts/` for errors or outdated claims that were not caught at the time:

1. **Scan recent posts** — Read the last batch of macro posts. For each factual claim, check whether subsequent data releases or events have proven it wrong or outdated.
2. **Reflect corrections in new posts** — If a past post made a prediction or claim that turned out wrong, acknowledge or correct it in today's posts where relevant (e.g., "上期我們提到 Core PCE 為 2.8%，但 12 月數據已修正至 3.0%"). This builds credibility and continuity.
3. **Update the skill if needed** — If the errors reveal a systematic gap (e.g., agents consistently miss a data source, a chart type doesn't work well, a section is redundant), update this SKILL.md to prevent recurrence. Report any skill changes to the user.

### Step 5: Verify Output & List Posts

1. Confirm all files exist with correct filenames
2. Verify each: front matter correct, chart with unique canvas id, sourced data, all claims cited, disclaimer present
3. **Print a summary table** listing every generated post:

```
| # | File | Style | Topic | Chart ID |
|---|------|-------|-------|----------|
| 1 | `YYYY-MM-DD-slug-zh.md` | A: Commentary | ... | macroChartN |
| ...
```

4. List any fact-check corrections applied and any past-post fixes
5. List any skill updates made
