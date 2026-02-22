---
description: Generate macro/investing blog posts in Traditional Chinese — default 2-4 balanced posts (quality over quantity) or 1 deep-dive on a user-specified topic
---

# /macro-post

Generate blog posts in Traditional Chinese anchored to economic and market impact. Supports two modes:

- **Default mode** — 2-4 posts (quality over quantity) covering macro commentary, government data deep-dive, politics, and AI/technology. Style A (觀點文) is the portfolio anchor with full ETF analysis; other styles focus on deep analysis with lightweight 筆記 conclusions.
- **Topic mode** — 1 deep-research post on a user-specified topic

## Usage

- `/macro-post` — default mode: auto-select topics, produce 2-4 posts (A/B/C/D styles, quality over quantity)
- `/macro-post "tariff impact on bonds"` — default mode with topic hint (2-4 posts)
- `/macro-post 我想要一篇關於「商業不動產 CMBS 到期牆」的深度研究` — topic mode: 1 deep-research post

**Mode detection rule:** If the user's message explicitly requests a specific topic for a single article (e.g., "我想要一篇關於…", "幫我研究…", "寫一篇…關於…", "深度分析…"), enter **topic mode**. Otherwise, use **default mode**.

## Editorial Objective (Default)

Default output should prioritize **neutral, evidence-weighted analysis** for **medium/long-term investors**, not short-term fear/greed trading narratives.

- Present both upside and downside mechanisms, not only risk escalation
- Prefer measurable allocation/rebalancing guidance over aggressive directional calls
- Use restrained language; avoid sensational framing unless explicitly quoting a source

## Post Styles

Default mode produces **2-4 posts** (from styles A/B/C/D, skipping styles without quality topics). Style A is always included as the portfolio anchor. Topic mode produces **one post** (Style E).

### Style A: Commentary (觀點文) — Portfolio Anchor

The **only** style that includes full ETF analysis and scenario framework. This post serves as the portfolio-level synthesis: it connects the themes from Style B/C/D posts into a unified investment view. Other styles focus on deep analysis; Style A translates analysis into allocation.

**Structure:**
- **總經快照** — 2-3 sentences: Fed rate, key data, market backdrop
- **重點發展** — 3-5 paragraphs building the thesis across multiple data points. Each paragraph: claim → evidence → implication
- **市場數據圖表** — Chart.js chart (market data or gov data)
- **三種情境** — Base / Upside / Downside with probabilities summing to 100%, each with a named invalidation trigger
- **ETF 影響分析** — Equities, Bonds, Alternatives — each with qualitative risk/reward assessment and the conditions under which the position works or fails (no short-term price targets)
- **後續觀察重點** — 2-3 upcoming catalysts

**Word count:** 1000-1400 words.

### Style B: Deep-Dive (數據文)

One government data chart as the centerpiece. Everything explains what the chart shows and why it matters. **No full ETF analysis or scenario framework** — investment implications are handled solely via the 筆記 section.

**Structure:**
- **總經快照** — 2-3 sentences: Fed rate, the specific data release, market context
- **數據解讀** — Chart.js chart first, then 3-5 paragraphs analyzing the data. Each paragraph: 事實 → 推論
- **筆記** — Natural prose (NOT bold-label template). Must contain: a concise takeaway, allocation direction with reasoning, and specific triggers that would change the call — but written as flowing analyst commentary, not fill-in-the-blank fields.
- **後續觀察** — Next data releases, what would change the thesis

**Word count:** 700-900 words.

### Style C: Geopolitics (國際政經文)

International and domestic political events that directly affect the global economy and markets. Scope includes **US domestic policy, US-China relations, Middle East tensions, EU/UK trade policy, central bank actions worldwide (ECB, BOJ, PBoC), Taiwan Strait, energy geopolitics, and sanctions regimes.** Must connect politics → economic mechanism → market impact. **No full ETF analysis or scenario framework** — investment implications are handled solely via the 筆記 section.

**Structure:**
- **國際政經背景** — 2-3 sentences: what happened, which countries/actors are involved, current status
- **經濟傳導機制** — Chart.js chart showing the economic data affected, then 3-5 paragraphs. Each paragraph: 事實 → 推論. Must cover:
  - What is the political event? Which countries are involved?
  - Through what channel does it affect the global economy? (tariffs → import prices → CPI, sanctions → oil supply → energy prices, geopolitics → supply chain → semiconductor shortage, capital flows → FX → emerging markets, etc.)
  - How big is the impact? Quantify with data.
  - What is the market pricing in vs. what could actually happen?
- **筆記** — Natural prose (NOT bold-label template). Must contain: a concise takeaway, allocation direction with reasoning, and specific triggers that would change the call — but written as flowing analyst commentary, not fill-in-the-blank fields.
- **後續觀察** — Next political milestones: summits, votes, court rulings, military deadlines, elections

**Word count:** 700-900 words.

### Style D: AI & Technology (科技文)

AI and technology developments that have significant economic impact — capex cycles, labor market disruption, productivity gains, energy demand, sector rotation. Must connect tech → economic impact → market implications. **No full ETF analysis or scenario framework** — investment implications are handled solely via the 筆記 section.

**Structure:**
- **科技動態** — 2-3 sentences: the key AI/tech development, who's involved, scale of impact
- **經濟影響分析** — Chart.js chart showing economic data related to the tech story, then 3-5 paragraphs. Each paragraph: 事實 → 推論. Must cover:
  - What is the technology development? (earnings, capex plans, product launches, adoption data)
  - How does it affect the real economy? (jobs, productivity, energy demand, capital allocation)
  - Which sectors are being disrupted and which are benefiting?
  - How are valuations reflecting (or not) the AI impact?
- **筆記** — Natural prose (NOT bold-label template). Must contain: a concise takeaway, allocation direction with reasoning, and specific triggers that would change the call — but written as flowing analyst commentary, not fill-in-the-blank fields.
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

### Step 0.5: Publication Frequency & Quality Gate (MANDATORY)

Before generating any new posts, assess whether it's the right time to publish. This step prevents quality degradation from over-publishing.

**1. Check publishing cadence.** Count how many macro posts were published in the last 3 days (read `_posts/` filenames). Apply these rules:
- **≤ 4 posts in last 3 days** → proceed normally
- **5-8 posts in last 3 days** → proceed only if there's a genuine breaking event or materially new data. On quiet days, skip entirely and tell the user: "最近 3 天已發 N 篇，建議等待新數據或事件再發文。"
- **> 8 posts in last 3 days** → STOP. Tell the user: "最近 3 天已發 N 篇，密集發文會稀釋品質與讀者注意力。建議下次發文至少間隔 1 天，除非有重大突發事件。" Only proceed if the user explicitly confirms a breaking event justifies it.

**2. Spot-check existing post quality.** Read the 2-3 most recent posts' 筆記 sections. Check for these quality red flags:
- **Template voice** — bold labels like "**事實：**", "**推論：**", "**一句話結論：**" appearing as fill-in-the-blank fields instead of natural prose
- **Mechanical ETF lists** — every ETF discussed with identical "持有邏輯是…失效條件是…" structure
- **Conclusion convergence** — multiple recent posts reaching the same takeaway (e.g., "be cautious, buy GLD")
- **Generic analysis** — statements an experienced investor would consider obvious (e.g., "SPY faces valuation compression if growth slows")

If 2+ red flags are found in recent posts, report them to the user and ask whether to fix existing posts before generating new ones. Quality of existing content should take priority over volume of new content.

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

**Source quality hierarchy (applies to ALL research agents):**
1. **Primary sources first** — official reports (.gov), earnings transcripts, court filings, treaty text, central bank statements, regulatory filings (SEC EDGAR, BOJ minutes). These are the foundation.
2. **Expert analysis second** — research notes from named analysts (Goldman, JPMorgan, SemiAnalysis, Brookings, CSIS), academic papers, specialized industry data providers (Trepp, FactSet, TrendForce).
3. **News wire last** — Reuters, Bloomberg, CNBC are useful for context and quotes, but a post built entirely on wire service summaries will lack depth. Wire services summarize; this blog must analyze.

Each agent must return **at least 2 primary sources** in its results. If an agent cannot find primary sources, it must flag this — the topic may not be ready for a post.

**Agent output format (mandatory):**
Each agent must structure its output with two clearly labeled sections:
1. **Primary source findings** (minimum 2 per agent) — For each primary source, include: source name + URL, and one sentence starting with "**Insight beyond wire coverage:**" describing the specific finding not available in Reuters/Bloomberg summaries. Example: "CBO Budget Outlook Table 1-3 ([URL]) — **Insight beyond wire coverage:** CBO assumes 10Y yield declines to 3.6% by 2027; if rates stay at current 4.1%, net interest projections are understated by ~$200B/year."
2. **Supporting context** — Wire-level data points and quotes for background.

If an agent's output contains zero substantive entries under "Primary source findings," the topic's research depth is insufficient — either send the agent back for deeper searches or flag the topic for potential skipping.

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

**Aggressively skip styles without quality topics.** Default output is 2-4 posts, not always 4. Apply these skip triggers:
- **No quality topic:** If there's no meaningful news with economic impact for a style this week, skip it.
- **Conclusion convergence:** After picking topics, check if multiple styles would arrive at the same investment conclusion (e.g., all four say "buy GLD, sell tech"). If 3+ styles converge on the same takeaway, keep only the one with the strongest evidence and skip or merge the others.
- **Quiet day default:** On quiet days (Step 1.5), default to 2-3 posts. Only produce 4 if there are genuinely 4 differentiated topics.
- Never force a weak topic — 2 excellent posts beat 4 mediocre ones.

### Step 3: Deep Investigation & Post Generation (Parallel Agents)

Launch **one agent per chosen topic** (2-4 agents) in parallel using the Task tool (subagent_type: `general-purpose`). Each agent independently **researches deeply** then **writes the post**.

Each agent receives:
- The **broad research context** from Step 1 (relevant bullet points for its topic)
- Its **assigned style** (A/B/C/D) with the full structure template from this skill
- The **Content Rules** and **Chart Guidelines** sections below
- The **target filename** and front matter template

Each agent must:
1. **Deep research** — run 5-8 additional web searches focused specifically on its topic. The goal is NOT more data points — it's **deeper data points** that wire services don't cover. Specifically:

   **Mandatory research layers (every post must hit at least 3 of 5):**
   - **Primary source** — find and read the actual document, not a summary of it (the Fed statement itself, the CBO table, the treaty text, the earnings transcript quote, the court ruling). Cite page/section numbers when possible.
   - **Fine print & hidden mechanics** — what do most articles skip? Sunset clauses, enforcement mechanisms, methodology changes, carve-outs, phase-in schedules, conditionality. This is where the real story often lives.
   - **The math behind the headline** — does the number actually add up? Put it in context: as % of GDP, per capita, vs historical average, vs peer countries, vs market expectations. A "$840B trade deal" means nothing without knowing current trade volume, tariff baselines, and implementation timeline.
   - **Second-order effects** — who loses? What breaks downstream? What unintended consequences does the headline gloss over? Every policy creates winners and losers; most coverage only covers the winners.
   - **Credible opposing view** — find a **named** expert or institution (full name + affiliation) with a **specific reasoning chain backed by data**. Example: "BCA Research 首席策略師 Peter Berezin argues stagflation risk is overblown because services PCE is driven by lagging shelter costs, which leading indicators (Zillow Observed Rent Index down 1.2% YoY) show will decelerate by Q2." Generic hedges ("部分分析師持保守看法") and unnamed sources ("some analysts disagree") do NOT count. Either find a real contrarian with real reasoning, or explicitly state that consensus is unusually unified and explain why that itself is a signal worth noting.

   **Per-style deep research examples:**
   - Commentary agent: cross-asset correlations, historical parallels with specific date/magnitude comparisons, institutional positioning data (CFTC, fund flows)
   - Deep-dive agent: actual government report tables (not news summaries), revisions to prior data, methodology notes, expert commentary on what the headline number misses
   - Geopolitics agent: diplomatic statements (actual quotes, not paraphrased), trade flow data from UN Comtrade / WTO / bilateral statistics, legal text of agreements, historical precedents with outcome comparisons
   - AI/Tech agent: earnings call transcript quotes (exact words, not summaries), capex breakdowns by category, adoption survey methodology, energy consumption data from EIA / IEA

2. **Synthesize a thesis** — form a clear, falsifiable, and balanced take. The thesis must pass the **"Bloomberg terminal test"**: would someone with a Bloomberg terminal and 10 years of market experience learn something new from this post? If the answer is no, the research isn't deep enough — go back and search for another layer.

   **Research depth gate (mandatory checkpoint before writing):**
   Before beginning to write, the agent must output a brief checklist:
   ```
   ✓/✗ Primary source: [document name + specific finding]
   ✓/✗ Fine print: [hidden mechanic or overlooked detail]
   ✓/✗ Math in context: [key calculation that reframes the headline]
   ✓/✗ Second-order effect: [who loses / what breaks downstream]
   ✓/✗ Named contrarian: [Name at Institution — their specific argument]
   ```
   **Gate rule:** If fewer than 3 of 5 are marked ✓ with substantive content, the agent must run additional targeted searches before writing. Writing on thin research is the single most common quality failure — deeper research upfront prevents rewrites later.
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
4. **Balanced scenario requirement** — **Style A and Style E only.** These posts must include three named scenarios (base/upside/downside) with rough probabilities summing to 100% and one invalidation trigger for each. **Style B/C/D do NOT include scenario sections** — they convey risk awareness through the 筆記 section written as natural prose.
5. **Do not force directional calls** — if confidence is low or evidence is mixed, explicitly state neutral/uncertain stance and focus on monitoring signals instead of hard bullish/bearish calls.
6. **Tone neutrality requirement** — avoid emotionally loaded or absolutist wording (e.g., "末日", "崩塌", "四面楚歌", "必然", "完全沒有", "歷史性的錯誤定價"), unless it is a direct quote with source attribution.
7. **Separate facts vs inference** — clearly distinguish verifiable facts from interpretation through sentence structure and context, NOT through bold labels like "**事實：**" or "**推論：**". The intellectual discipline matters; the formatting template does not. Good examples: "CBO 預測債務比率將升至 120%——這意味著期限溢價中樞很難回到超低區間" (fact flows naturally into inference). Bad examples: "**事實：** CBO 預測… **推論：** 期限溢價…" (mechanical label soup that reads like a form, not an analyst note).
8. **Reader-actionable takeaways must be long-horizon usable** — each 筆記 section must contain a concise takeaway, allocation direction with reasoning, and specific triggers that would change the call. **But these must be written as natural analyst prose, not as a fill-in-the-blank template.** Do NOT use bold labels like "**一句話結論：**", "**資產配置框架（3-12 個月）：**", "**再平衡觸發條件（1-3 年）：**". Instead, weave these elements into flowing paragraphs that read like a research note a human analyst would write. The same intellectual content, but authored voice instead of template voice.
9. **Argue with logic chains, not adjectives** — each paragraph: claim → evidence → implication.
10. **Qualitative risk/reward framing** — **Style A/E:** for ETFs discussed, describe the conditions under which the position works or fails, rather than short-term percentage price targets (e.g., "若消費數據連續兩季惡化，下行風險主導" rather than "上行 $700（+2%），下行 $660（-3%）"). Include current price for context but focus on what-changes-your-mind, not point estimates. **Style B/C/D:** mention ETFs only in the 筆記 section with allocation direction (偏多/中立/偏空/觀察) and the trigger that would change that direction. No price forecasts.
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

### Step 3.4: Cross-Post Deduplication (MANDATORY)

After all posts are written and before fact-check, launch **1** agent (subagent_type: `general-purpose`) to read all generated posts and check for cross-post redundancy:

1. **ETF overlap check** — list every ETF mentioned across all posts. If any ETF appears in 3+ posts' 筆記 sections with the same directional call, keep it only in Style A's ETF analysis and the post with the strongest supporting evidence. Remove or reduce mentions in others.
2. **Data point overlap check** — list key data points (GDP, CPI, PCE, etc.) cited across posts. If the same number appears in 3+ posts, flag it. The number should be cited in the post where it's most relevant and only briefly referenced (not re-analyzed) elsewhere.
3. **Conclusion convergence check** — if 3+ posts reach the same investment conclusion (e.g., "偏空科技, 偏多防禦"), this is a signal that some posts should be merged or cut. Report to the user before proceeding.
4. **Cross-reference insertion** — where posts share related themes, add brief inline references (e.g., "詳見今日[半導體地緣分析]") instead of duplicating analysis.

The agent should return a dedup report and make the necessary edits to the post files.

### Step 3.6: Bias & Tone QA (MANDATORY)

Before finalizing each post, run a short editorial QA pass:

1. **Stance balance check** — confirm at least one credible opposing view is presented and not straw-manned.
2. **Language check** — remove fear-inducing or certainty-inducing wording unless directly quoted from sources.
3. **Horizon check** — verify takeaways include both near-term (3-12 months) and long-term (1-3 years) utility.
4. **Reader impact check** — ensure the post does not push reactive overtrading; prefer risk-budgeting and rebalancing logic.
5. **Logical coherence check (CRITICAL)** — for every data point, ETF, or index cited as evidence for an argument, verify the evidence actually supports the stated conclusion:
   - **Composition check**: Before using any ETF/index as evidence, identify its top holdings and sector weights. An ETF's performance must be attributed to its actual drivers, not assumed from its label. Example: 0050 is ~50% TSMC — its gains are AI-driven and cannot be cited as evidence of "non-AI rotation." EEM has heavy Taiwan/Korea weighting — its performance may reflect AI supply chain strength, not broad EM recovery.
   - **Causal chain tracing**: Do NOT stop at sector labels or top holdings. Trace the actual demand driver behind each piece of evidence back to its root cause. Many assets that appear "non-AI" on the surface are indirectly driven by AI-related demand channels. Examples: Korean memory stocks rising → because HBM demand → because AI training; copper prices surging → partially because data center construction → because AI infrastructure buildout; XLU (utilities) outperforming → partially because power demand → because AI data centers; IYT (transport) rising → partially because logistics for hardware shipments → because AI supply chain. When an asset has mixed drivers (both AI-adjacent and genuinely independent forces like fiscal spending or monetary policy), explicitly acknowledge both rather than attributing performance to only one. The key question is always: "What is the actual demand driver, and does it support or undermine my argument?"
   - **Internal consistency**: The same asset must not be described with contradictory attributions in different sections of the same post (e.g., using 0050 as evidence of broad rotation in one section, then correctly calling it AI-driven in another).
   - **Argument direction**: Each piece of evidence must logically point in the direction the argument claims. If evidence actually supports the opposite thesis, it must be removed or reframed with explicit acknowledgment.
   - **Thesis re-evaluation**: If removing flawed evidence weakens the thesis significantly, do not just patch the evidence — re-evaluate whether the core thesis needs reframing. A thesis built on misattributed evidence may itself be wrong or need a different angle. It is better to rewrite a thesis than to prop up a weak one with fewer data points.

### Step 3.65: Automated Pattern Scan (MANDATORY)

Before launching quality review agents, run a **deterministic grep scan** across ALL generated post files to catch known anti-patterns. This is a programmatic check, not an LLM judgment call — it catches issues that subjective review will miss.

**Run Grep for each pattern across all generated post files:**

| Pattern to grep | Action if found |
|-----------------|-----------------|
| `**事實：**` | Remove — rewrite as natural prose transition |
| `**推論：**` | Remove — rewrite as natural prose transition |
| `**一句話結論：**` | Remove — merge into 筆記 prose |
| `**資產配置框架` | Remove — merge into 筆記 prose |
| `**再平衡觸發條件` | Remove — merge into 筆記 prose |
| `### 股票類` or `### 債券類` or `### 替代資產` | Rewrite parent section as flowing prose — these subheaders create mechanical template feel |

**Also verify structural rules:**
- Style B/C/D posts must NOT have a standalone `## ETF 影響分析` section (allocation guidance belongs in 筆記)
- Style E posts must NOT have `### 股票類` / `### 債券類` / `### 替代資產` subheaders — rewrite as natural prose paragraphs
- Check for any ETF discussed with identical sentence structure repeated 3+ times (e.g., "持有邏輯是…失效條件是…" pattern) — rewrite each with a unique observation

**Why this step exists:** LLM-based quality review agents can overlook mechanical patterns because they focus on content quality, not surface-level formatting. A simple grep catches 100% of known anti-patterns that agents miss. Fix all flagged issues before proceeding to Step 3.7.

### Step 3.7: Multi-Angle Quality Review (MANDATORY)

After all QA passes, launch **2** agents in parallel (subagent_type: `general-purpose`) to evaluate ALL generated posts from different perspectives. This multi-angle approach catches blind spots that a single-perspective review misses.

**Agent 1: Reader & Investor Perspective.** The agent reads all post files as a whole and answers:

1. **Value test** — "If I'm a busy investor who reads this blog weekly, what do I take away from today's batch? Can I articulate the key investment thesis in one sentence after reading all posts?" If the answer is unclear or fragmented, the posts need a stronger unifying thread or Style A needs to better synthesize the themes.
2. **Noise test** — "Is any post telling me something I could get from reading Reuters or Bloomberg headlines?" If yes, that post needs a deeper angle or should be cut.
3. **Durability test** — "Will this post still be worth reading in 3 months?" Posts that are purely event-reactive (a court ruling, a single earnings report) with no structural insight should be flagged for cutting or reframing.
4. **Repetition test** — "Am I reading the same conclusion wrapped in different data?" After the cross-post dedup in Step 3.4, this is a final human-perspective check. Even if the specific ETFs and numbers are different, if the emotional takeaway is identical across posts (e.g., "everything is uncertain, be cautious"), flag it.
5. **Actionability test** — "Do the 筆記 sections give me a clear framework for what to do and when to change my mind?" The 筆記 is the core value delivery — it must be specific, falsifiable, and distinct across posts.
6. **Research depth test** — For each post, answer three specific questions:
   - (a) **"What specific finding came from reading a primary source that wire services didn't report?"** The answer must cite a specific document, table, clause, or transcript quote. If the answer is vague ("used CBO data") or absent, the post fails.
   - (b) **"Is the contrarian view named, specific, and falsifiable?"** The contrarian must have a name, an institution, and a data-backed argument. "Some analysts are cautious" or "risks exist on both sides" fails this test.
   - (c) **"What second-order effect is quantified?"** At least one downstream consequence must have a number attached (e.g., "退稅成本 $1,335–1,750 億將使 FY2026 赤字額外增加 7–9%"). Vague "ripple effects" without quantification fail.
   A post that fails 2+ of these 3 tests should be flagged for rewrite or cutting — it's adding noise, not signal, to the reader's information diet.

**Agent 2: Writing Quality & Voice Perspective.** The agent reads all post files and evaluates:

1. **Template detection** — Scan the ENTIRE post (analysis body, ETF sections, AND 筆記) for any residual bold-label templates or mechanical formatting. Step 3.65 should have caught these programmatically, but this is the human-judgment backstop. Every section should read like a human analyst wrote it, not like a form was filled in.
2. **Mechanical pattern detection** — Flag any section where multiple ETFs are discussed with identical sentence structure (e.g., "持有邏輯是…失效條件是…" repeated for each ETF). Each ETF discussion should have a unique observation tied to the post's specific thesis.
3. **Voice consistency** — Does each post sound like it was written by the same thoughtful analyst? Or do some posts feel like they were generated from a template while others feel authored? Flag inconsistencies.
4. **Insight density** — For each paragraph in the 筆記 and ETF sections, ask: "Does this sentence tell the reader something they didn't already know or couldn't have guessed?" Flag generic statements that an experienced investor would find obvious (e.g., "黃金在通膨環境中受惠" without any post-specific context).
5. **Structural redundancy** — Within each post, check if the 筆記 section merely summarizes what was already said in the analysis sections. The 筆記 should add NEW synthesis or a unique angle, not just compress earlier paragraphs.

**Output from each agent:** A brief report (5-10 sentences) with:
- Overall assessment
- Specific posts to cut, merge, or rewrite (if any)
- Suggested edits to strengthen weak posts

**Action:** If either agent recommends cutting or merging posts, do so before proceeding. If they recommend rewrites, make the edits. If both agents pass the batch, proceed to Step 4. Prioritize Agent 2's template/voice findings — template-feel is the most common quality failure mode.

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

Each agent should run 3-5 web searches and return a concise bullet-point summary. The same **source quality hierarchy** from default mode Step 1 applies: primary sources first, expert analysis second, wire services last. Each agent must return at least 2 primary sources.

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

#### Topic Step 3.65: Automated Pattern Scan

Same as default mode Step 3.65 but for the single generated post file. Run Grep for all known anti-patterns and fix before proceeding.

#### Topic Step 3.7: Multi-Angle Quality Review

Same as default mode Step 3.7 but for a single post. Launch **1** agent (instead of 2) that covers both the reader/investor perspective and the writing quality perspective. The agent evaluates:
- Does this post provide a structural insight that a reader would still find valuable in 3 months?
- Is the 筆記 section specific, actionable, and written as natural prose (not template)?
- Could the reader get equivalent value from a Reuters summary? If yes, the post needs more depth.
- Are there any template-feel patterns (bold labels, mechanical ETF lists, generic statements)?

#### Topic Step 4: Retrospective

Same as default mode Step 4.

#### Topic Step 5: Verify Output

Same as default mode Step 5 but for 1 post. Print a summary table:

```
| # | File | Style | Topic | Chart ID |
|---|------|-------|-------|----------|
| 1 | `YYYY-MM-DD-slug-zh.md` | E: Topic Research | {user's topic} | macroChartN |
```
