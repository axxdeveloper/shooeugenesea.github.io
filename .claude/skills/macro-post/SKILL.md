---
description: Generate macro/investing blog posts in Traditional Chinese — default 4 balanced posts or 1 deep-dive on a user-specified topic
---

# /macro-post

Generate blog posts in Traditional Chinese anchored to economic and market impact. Supports two modes:

- **Default mode** — 4 posts covering macro commentary, government data deep-dive, politics, and AI/technology
- **Topic mode** — 1 deep-research post on a user-specified topic

## Usage

- `/macro-post` — default mode: auto-select topics, produce 4 posts (A/B/C/D styles)
- `/macro-post "tariff impact on bonds"` — default mode with topic hint (still 4 posts)
- `/macro-post 我想要一篇關於「商業不動產 CMBS 到期牆」的深度研究` — topic mode: 1 deep-research post

**Mode detection rule:** If the user's message explicitly requests a specific topic for a single article (e.g., "我想要一篇關於…", "幫我研究…", "寫一篇…關於…", "深度分析…"), enter **topic mode**. Otherwise, use **default mode**.

## Editorial Objective (Default)

Default output should prioritize **neutral, evidence-weighted analysis** for **medium/long-term investors**, not short-term fear/greed trading narratives.

- Present both upside and downside mechanisms, not only risk escalation
- Prefer measurable allocation/rebalancing guidance over aggressive directional calls
- Use restrained language; avoid sensational framing unless explicitly quoting a source

## Post Styles

Default mode produces **four posts** (A/B/C/D). Topic mode produces **one post** (Style E).

### Style A: Commentary (觀點文)

Broad market analysis with an evidence-weighted thesis. Covers multiple data points and ETFs, and must include base/bull/bear interpretation rather than a single directional narrative.

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

### Style E: Topic Research (主題研究文) — Topic Mode Only

General-purpose deep-research style, not constrained to any single category (A/B/C/D). Used when the user specifies a topic for a single deep-dive post.

**Structure:**
- **主題背景** — 2-3 sentences: what the topic is, why it matters now, what triggered the investigation
- **深度分析** — Chart.js chart + 4-6 paragraphs covering:
  - Current state with quantified data
  - Historical context or trajectory
  - Key drivers and mechanisms
  - Risks and opposing views
  - Cross-market / cross-asset implications
  - 筆記 (your take): synthesize facts vs inference, balanced assessment of whether the market is over- or under-pricing the thesis
- **投資影響** — ETF/asset implications with scenario framework (base/upside/downside)
- **後續觀察** — Monitoring signals and upcoming catalysts

**Word count:** 1000-1400 words.

**Tags:** `[macro, etf, investing]` + topical tags based on the subject.

## Execution Steps

### Step 0: Mode Detection

Parse the user's input to determine which mode to use:

- If the user explicitly requests a specific topic for a single article (keywords: "我想要一篇關於…", "幫我研究…", "寫一篇…關於…", "深度分析…", or similar phrasing indicating a single deep-dive), enter **Topic Mode** → skip to **Topic Mode Steps** below.
- Otherwise → **Default Mode** → proceed with Steps 1-5 below.

### Default Mode Steps

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

#### Anti-Red-Ocean Rule (Headline Differentiation)

Before finalizing any topic, assess whether the topic is **saturated** — i.e., dozens of news outlets are already running near-identical headlines. Signs of saturation:
- Multiple major outlets (Reuters, Bloomberg, CNBC, 聯合報, 自由時報) all published articles with overlapping titles in the past 48 hours
- The story has a single dominant narrative frame that everyone is repeating (e.g., "歷史性突破", "里程碑", "重大進展")

**When a topic is saturated, you MUST go deeper and differentiate on angle AND title.** This is NOT about being contrarian or singing a different tune — it's about providing analysis that mainstream coverage doesn't have time or depth to deliver.

1. **Launch a dedicated deep-research agent** (subagent_type: `general-purpose`) to investigate the saturated topic more thoroughly. The agent should:
   - Search for **primary sources** (official text of the agreement/ruling/report, not just news summaries)
   - Find **fine print and hidden clauses** that most coverage ignores (sunset provisions, enforcement mechanisms, poison pills, carve-outs)
   - Quantify **the math behind the headlines** — does the deal actually add up? What do the numbers look like in context?
   - Identify **implementation gaps** — what has to happen for the headline promise to become reality (legislative hurdles, infrastructure bottlenecks, timeline risks, who has to approve what)
   - Research **second-order effects** — who loses, what breaks, what downstream consequences does the headline gloss over
   - Look for **expert/analyst commentary** that goes beyond the wire service narrative

2. **Title must NOT overlap with mainstream headlines:**
   - Never use the same framing as wire services (avoid: "歷史性突破", "里程碑協定", "重大進展")
   - Lead with the deeper insight, not the event itself. Compare:
     - Bad (red ocean): "歷史性突破：美台簽署對等貿易協定"
     - Good (blue ocean): "台美協定的隱藏條款：840 億數字背後的地緣鎖定與農業代價"
     - Good: "840 億買到什麼？拆解台美貿易協定五個沒人提的條件"
   - Test: if your title could be a Reuters headline, it's too generic. Your title should read like an analyst deep-dive, not a news wire
   - Also avoid fear-driven or certainty-driven wording in titles (e.g., "末日", "崩盤", "必然") unless it's a direct quote from a cited source

3. **If no deeper angle can be found even after dedicated research, skip the topic** — it's better to write nothing than to add to the noise. Pick the next-best topic instead.

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
2. **Synthesize a thesis** — form a clear, falsifiable, and balanced take based on deep research (include at least one credible opposing interpretation)
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

1. **Use 0050 instead of EWT** — When discussing Taiwan equity ETFs, always use **元大台灣50 (0050)** instead of EWT (iShares MSCI Taiwan ETF). The blog's audience is Taiwanese investors who trade on TWSE; 0050 is the most liquid and well-known Taiwan large-cap ETF they can buy directly. Prices are in NT$, not USD.
2. **Taiwan stance** — This blog treats Taiwan as an independent, sovereign country. When covering Taiwan-related topics (trade, geopolitics, semiconductor, cross-strait), never adopt framing that implies Taiwan is part of China or that China has legitimate authority over Taiwan. Use "台灣" and "中國" as parallel entities, not "中國大陸" vs "台灣地區". Avoid Beijing's preferred language (e.g., "統一", "台灣問題", "分裂勢力"). This does not mean ignoring China's perspective — analyzing what Beijing might do (military, economic coercion, diplomatic pressure) is essential for investment analysis — but the analytical frame must be from Taiwan's standpoint as an independent actor making sovereign decisions.
3. **Consider the global picture** — every post should account for international context, not just US data in isolation. How do ECB/BOJ/PBoC policies, geopolitical tensions, global supply chains, and cross-border capital flows affect the thesis? A US CPI post should mention tariff impacts; a tech post should mention TSMC/Taiwan risk; a commentary should weave in global macro.
4. **Balanced scenario requirement** — every post must include at least three scenarios: `base case`, `upside case`, and `downside case`, with rough probabilities summing to 100% and one invalidation trigger for each.
5. **Do not force directional calls** — if confidence is low or evidence is mixed, explicitly state neutral/uncertain stance and focus on monitoring signals instead of hard bullish/bearish calls.
6. **Tone neutrality requirement** — avoid emotionally loaded or absolutist wording (e.g., "末日", "崩塌", "四面楚歌", "必然", "完全沒有", "歷史性的錯誤定價"), unless it is a direct quote with source attribution.
7. **Separate facts vs inference** — clearly distinguish verifiable facts from interpretation. A simple marker is enough (e.g., "事實：" / "推論：").
8. **Reader-actionable takeaways must be long-horizon usable** — each 筆記 section must include:
   - **一句話結論** — a concise takeaway
   - **資產配置框架（3-12 個月）** — what to overweight/underweight and why
   - **再平衡觸發條件（1-3 年）** — specific data/event thresholds that change allocation
9. **Argue with logic chains, not adjectives** — each paragraph: claim → evidence → implication.
10. **Quantify risk/reward with assumptions** — for every ETF discussed, provide upside/downside ranges and the key assumption behind each range.
11. **No AI-generation mentions** — do not reference that the post was auto-generated or written by AI.
12. **Cite everything** — every factual claim needs a source URL as an inline markdown link.
13. **Use real numbers** — never write "inflation is rising" when you can write "CPI rose to 2.4% YoY".
14. **Traditional Chinese only** — parenthetically gloss English abbreviations on first use, e.g.「消費者物價指數 (CPI)」
15. **Date every event** — when referencing a policy decision, data release, ruling, or any event that didn't happen on the post's publication date, include the specific date (e.g., "聯準會 1 月 28 日以 10:2 投票維持利率不變" not "聯準會以 10:2 投票維持利率不變"). Readers should never have to guess *when* something happened.
16. **No abstract references** — never refer to scenarios, sections, or items by number/letter alone (e.g., "情境 3", "第二點"). Readers don't memorize numbering. Always use descriptive names inline: "有限軍事打擊情境" not "情境 3", "海峽封鎖情境" not "情境 4". Charts may label axes with numbers/letters for space, but prose must always be self-explanatory without cross-referencing.
17. **Jargon glossary** — when a post uses domain-specific terms that a general reader would not immediately understand (e.g., CMBS, NOI, carry trade, REIT, credit spread), add a small inline aside box near where the term **first appears**. Float it to the right of the paragraph so it sits alongside the relevant text. Each term is explained only once per post. Group terms that first appear in the same section into one box.
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
18. **Cross-post consistency** — when referencing an event, ruling, data point, or policy already covered in a recent post (past 3 days), read that post first and match its terminology and characterization exactly. Do not paraphrase legal or technical distinctions (e.g., a court ruling described as「違法」in one post must not become「違憲」in another — these are different legal concepts). If the new post needs a different framing, explicitly explain why.
19. **Disclaimer** — always include at the bottom:
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

### Step 3.6: Bias & Tone QA (MANDATORY)

Before finalizing each post, run a short editorial QA pass:

1. **Stance balance check** — confirm at least one credible opposing view is presented and not straw-manned.
2. **Language check** — remove fear-inducing or certainty-inducing wording unless directly quoted from sources.
3. **Horizon check** — verify takeaways include both near-term (3-12 months) and long-term (1-3 years) utility.
4. **Reader impact check** — ensure the post does not push reactive overtrading; prefer risk-budgeting and rebalancing logic.

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

### Topic Mode Steps

When **topic mode** is detected in Step 0, use the following steps instead of the default mode Steps 1-5.

#### Topic Step 1: Focused Research via Agents

Launch **four** parallel research agents (subagent_type: `general-purpose`), all focused on the user's specified topic:

| Agent | Task |
|-------|------|
| **Core Data Agent** | Search for quantified data directly related to the topic (gov data, industry data, market data). Return actual numbers with dates and source URLs. |
| **Context & History Agent** | Search for historical context, precedents, trajectory, structural factors related to the topic. Return timeline, key events, and source URLs. |
| **Market Impact Agent** | Search for market/ETF reactions, analyst commentary, cross-asset implications tied to the topic. Return prices, analyst quotes, and source URLs. |
| **Contrarian & Risk Agent** | Search for opposing views, risks, implementation gaps, what could go wrong with the consensus view on the topic. Return counterarguments with evidence and source URLs. |

Each agent should run 3-5 web searches and return a concise bullet-point summary.

#### Topic Step 1.5: Read Previous Posts

Same as default mode — read recent posts in `_posts/` to check for overlap. If the topic was recently covered, the new post must offer a substantially different angle or deeper analysis.

#### Topic Step 2: Synthesize Thesis

No topic selection needed (user already specified the topic). Synthesize research from all four agents into:
- A clear thesis statement
- Base / upside / downside scenarios with rough probabilities
- Key data points to anchor the analysis
- At least one credible opposing interpretation

#### Topic Step 3: Deep Investigation & Post Generation

Launch **1** agent (subagent_type: `general-purpose`) to:
1. **Deep research** — run 5-8 additional web searches going deeper than Step 1: primary sources, fine print, historical parallels, expert commentary
2. **Write the post** using **Style E** structure, following all Content Rules and Chart Guidelines
3. **Save** to `_posts/YYYY-MM-DD-{slug}-zh.md`

The agent receives:
- All research context from Topic Step 1
- The synthesized thesis from Topic Step 2
- The Style E template, Content Rules, and Chart Guidelines
- The target filename and front matter template

**Front matter** is the same as default mode. Tags: `[macro, etf, investing]` + topical tags based on the subject.

#### Topic Step 3.5: Fact-Check (MANDATORY)

Launch **1** fact-check agent (subagent_type: `general-purpose`) covering all domains (market data, gov data, geopolitics, tech/industry) for the single post. The agent should:
- Verify all key data points, ETF prices, and statistics against primary sources
- Verify all Chart.js data against cited sources
- Return a table: `Claim | Blog Value | Actual Value | Source | Verdict (correct/wrong/outdated)`

Apply the same rejection protocol as default mode Step 3.5.

#### Topic Step 3.6: Bias & Tone QA

Same as default mode Step 3.6.

#### Topic Step 4: Retrospective

Same as default mode Step 4.

#### Topic Step 5: Verify Output

Same as default mode Step 5 but for 1 post. Print a summary table:

```
| # | File | Style | Topic | Chart ID |
|---|------|-------|-------|----------|
| 1 | `YYYY-MM-DD-slug-zh.md` | E: Topic Research | {user's topic} | macroChartN |
```
