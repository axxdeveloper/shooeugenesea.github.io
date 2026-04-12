---
layout: post
title: "GitHub 高星專案這週往上堆 agent 產品層：runtime 補穩之後，skills 與 brains 開始搶主角"
date: 2026-04-12 10:30:00 +0800
categories: [tech]
tags: [github, ai, agents, developer tools, skills, memory, context engineering]
description: "用 GitHub API 看高星專案近況：成熟 agent runtime 正把背景任務、授權、工具型別與記憶介面補齊；近 7 天暴衝的新專案則把差異化往 skills、persona 蒸餾、私人 brain 與 token 包裝層推進。"
lang: zh-TW
---

- 這週 GitHub 高星動態最值得記的一句話是：**agent 的底層 runtime 正在收斂，真正開始爆量創新的地方，往上移到 skills、brains 與可安裝的方法論層。**
- 成熟專案這幾天補的不是花俏 UI，而是背景執行、授權流程、typed tool output、記憶介面、subagent 紀錄與資源回收。
- 同一時間，近 7 天衝上來的新專案沒有再重做一次聊天框，而是在回答更直接的問題：**怎麼把一個人的思考方式、你的長期脈絡、你的 token 預算，包成 agent 真能拿來工作的資產。**
- 這代表開發者社群對 agent 的期待又往前走了一步：從「它會不會做事」進到「它靠什麼持續做事，而且能不能被安裝、被轉移、被治理」。

## 背景脈絡

我這次用 GitHub API 看兩組訊號。

- **既有高星更新**：已經很大的 agent / 開發工具專案，近幾天仍持續發版或大量更新。
- **近 7 天新高星**：建立時間落在 4/5 之後，卻快速衝出 star velocity 的新案。

把兩組放在一起看，輪廓很清楚。

成熟專案這邊，幾個代表案都在補 runtime 的穩定性與治理能力：

- [openclaw/openclaw](https://github.com/openclaw/openclaw) 約 **355k stars**，4/12 釋出 [`v2026.4.11`](https://github.com/openclaw/openclaw/releases/tag/v2026.4.11)
- [anomalyco/opencode](https://github.com/anomalyco/opencode) 約 **141k stars**，4/10 釋出 [`v1.4.3`](https://github.com/anomalyco/opencode/releases/tag/v1.4.3)
- [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) 約 **101k stars**，4/11 夜間版持續更新 [`v0.39.0-nightly.20260411.0957f7d3e`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.39.0-nightly.20260411.0957f7d3e)
- [openai/codex](https://github.com/openai/codex) 約 **74.7k stars**，4/11 釋出 [`0.120.0`](https://github.com/openai/codex/releases/tag/rust-v0.120.0)

新案這邊，爆紅方向就更有意思了：

- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) 建於 4/4，約 **18.7k stars**
- [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill) 建於 4/5，約 **7.5k stars**
- [garrytan/gbrain](https://github.com/garrytan/gbrain) 建於 4/5，約 **4.9k stars**
- [xixu-me/awesome-persona-distill-skills](https://github.com/xixu-me/awesome-persona-distill-skills) 建於 4/6，約 **3.2k stars**

這些新案放在一起，不像一個單一產品類別，反而像同一波需求從不同方向冒出來：

- 有人想把**表達與思考風格**做成 skill
- 有人想把**個人長期脈絡**做成 brain
- 有人想把**回覆成本**直接壓成一種可切換模式
- 有人開始收錄整個 persona distill skill 生態

也就是說，底層 agent runtime 還在快速進化，但上層產品化已經開始分化成更可安裝、更可搬運、更像資產的形狀。

## 技術重點

### 1. 成熟 runtime 正在補「長任務能活下來」需要的細節

如果只看 `codex`、`gemini-cli`、`opencode`、`openclaw` 這幾天的更新，會看到很一致的方向。

`openai/codex` 的 `0.120.0` 補了幾個很關鍵的 runtime 訊號：

- Realtime V2 可以在背景 agent 還在跑時持續串流進度
- 後續回應可以先排隊，等 active response 結束後接續
- MCP tool declaration 帶入 `outputSchema`，工具結果開始更明確型別化
- hook 活動在 TUI 裡更容易掃描
- app-server MCP disconnect cleanup 與 remote websocket 問題被補齊

這些不是「多一個功能」而已，這是在把 agent 從單輪互動拉向真正的任務執行器。背景作業、排隊、typed output、cleanup，都是系統成熟的訊號。

`google-gemini/gemini-cli` 的 4/11 nightly 也很有代表性：

- subagent `agentId` 會被寫進 tool call records
- 加了 large memory regression test
- 修掉 PTY exhaustion 與 orphan MCP subprocess leaks
- interactive shell execution 會保留 session id
- `/settings` 被標成不適合同時並行執行

這一串更新說明它現在面對的不是「能不能接模型」，而是 **session lifecycle、子代理追蹤、資源外洩、記憶回歸、並發邊界**。這已經是 runtime 工程，不是純 prompt engineering。

`anomalyco/opencode` 的 `v1.4.3` 比較像小版號，但補的點都很實戰：

- OpenAI OAuth 帳號的 `agent create` 修正
- Bash 被中斷後仍保留最終輸出與 truncation 細節
- fast mode 變成正式變體
- remote MCP server 可設定 OAuth redirect URI

一個 coding agent 到了這個階段，差異就不在「會不會下指令」，而在 **指令斷掉後還剩多少證據、授權路徑穩不穩、不同速度檔位怎麼切、遠端工具接法會不會卡死。**

`openclaw/openclaw` 的 `v2026.4.11` 則很像另一條更完整的控制面路線：

- Dreaming / memory wiki 加入 ChatGPT import ingestion
- `Imported Insights`、`Memory Palace` diary subtabs，讓匯入記憶可直接在 UI 內追
- plugin manifest 可以宣告 activation 與 setup descriptors
- Codex OAuth `invalid_scope` 問題被修掉
- Teams reaction、Feishu 文件留言、webchat rich output 都在往結構化互動靠攏

這版最有意思的地方是它把 **匯入記憶、插件安裝敘述、跨通道互動結構化** 擺進同一個產品面。這代表 agent 不只是在回答，而是開始管理來源、插件、授權與歷史脈絡。

### 2. 新高星專案把差異化推向「可安裝的 cognition」

成熟 runtime 越做越像底座後，新案開始往更上層的封裝長。

`alchaincyf/nuwa-skill` 這波暴衝很能代表這件事。它的定位不是再做一個 agent app，而是把「蒸餾任何人的思維方式」變成一個可安裝 skill。README 直接把心智模型、決策啟發式、表達 DNA 當成可提煉、可呼叫的單位。

這件事的產品含義很大。

以前大家說「prompt 像人格」。現在變成：**人格、方法論、視角本身就是可發佈的 artifact。**

這會讓 agent 的差異化從模型選型，往下列資產移動：

- 你安裝了哪些 skills
- 這些 skills 代表哪些方法論
- 哪些人設或決策框架值得被重複調用
- skill 之間如何組合、切換、治理

`JuliusBrussee/caveman` 則是另一種更務實的 skill 產品化。它不是賣人格，而是賣 **token economy**。它把輸出壓縮語氣做成一個明確模式，還在 `v1.5.1` 把 SKILL.md 改成 runtime 載入，讓規則來源跟著技能檔同步，不再硬編碼。

這代表連「說話方式」都開始被視為一種獨立能力層，而不是只能寫進 system prompt 的隱性設定。

`garrytan/gbrain` 又再往前一步。它不是單一 skill，而是想把 agent 前後文、會議、郵件、行程、語音、想法流進同一個 searchable knowledge base，讓 agent 每次回答前先讀、每次對話後再寫。更有意思的是它主打：**讓 agent 自己完成 brain 的安裝與遷移。**

這說明兩件事：

- 長期脈絡管理正在從「加一個 memory feature」變成「建一個個人知識底座」
- agent 生態的交付單位，正從 prompt 轉向 schema、repo、sync job、brain operations

`xixu-me/awesome-persona-distill-skills` 的爆紅也很關鍵。當一個領域開始有 curated list，通常代表它不是一時迷因，而是開始變成有分類、有命名、有流派的生態。

### 3. 底層收斂之後，上層會先爆的是 distribution 與 packaging

這一波我覺得最值得看的，不是哪一個專案單獨多強，而是整體堆疊正在分層。

底層是 runtime：

- 背景任務
- subagent
- session continuity
- MCP / OAuth
- typed tool output
- 資源清理與安全邊界

中層是 context substrate：

- memory import
- personal brain
- repo context generator
- token compression
- usage dashboard

上層才是可分發的 skill 與方法論包：

- persona distill skills
- workflow skillpacks
- specific tone / output-mode plugins
- curated skill directories

當底層還不穩時，上層很難流通。現在上層開始大量爆出來，反而是在證明底層已經穩到足以承接這些封裝。

## 關鍵取捨

### 1. 把方法論做成 skill，擴散速度會很快，驗證難度也會一起上升

`nuwa-skill` 類專案很吸引人，因為它讓使用者很快得到「某種視角」。

問題也很直接：

- 蒸餾資料來源是否足夠
- 產出的其實是方法論，還是表演性的模仿
- 如果 skill 被拿去做高風險決策，誰來負責品質邊界
- 不同版本的 skill 之間怎麼追溯變化

這類 skill 很可能會變紅，但也會很快逼出 **版本管理、驗證資料、適用範圍聲明、風險標記** 這些治理需求。

### 2. 個人 brain 很強，但 ingestion 與刪除權會變成硬問題

`gbrain` 類系統最迷人的地方，是它把 agent 從「這輪知道什麼」升級成「長期知道你是誰、最近在做什麼」。

代價同樣很真實：

- 資料匯入管線很長
- schema 一旦先決定，未來要改會痛
- 私人資料、郵件、行程、通話紀錄都碰到強隱私邊界
- 如果沒有 provenance，回頭很難知道某段記憶從哪裡來
- 如果沒有 deletion story，brain 會越來越像黑箱倉庫

所以 brain 產品最後比的不會只是 recall，而是 **可查來源、可修正、可刪除、可搬遷**。

### 3. token 壓縮很有效，但壓縮會改變互動品質

`caveman` 這種模式之所以爆，是因為它非常實際：省 token，立刻有感。

但壓縮語氣一定有代價：

- 某些任務需要精細語感與上下文鋪陳
- 某些跨角色協作需要禮貌、完整、可交接的敘述
- 壓太短會讓模糊處被吞掉

這表示未來的 token 策略不會只有一個「省電模式」，而會像編碼 profile：

- 哪種任務可以極度壓縮
- 哪種任務要保留完整 reasoning 痕跡
- 哪些通道適合短句，哪些通道需要正式交接格式

### 4. runtime 越成熟，授權與資源管理越像主產品

從 `codex`、`gemini-cli`、`opencode`、`openclaw` 這幾天的更新看，很明顯一件事：

**真正吃工程量的，已經不是接模型，而是把 session、hook、MCP、OAuth、subprocess、memory import、plugin setup 做到不失控。**

功能看起來都很小，但每一個都是使用者是否能把 agent 放進日常工作的分水嶺。

## 對開發者影響

如果你正在做 AI 工具，我覺得這週 GitHub 動態給了很實際的優先順序。

- **先把底層 runtime 做成可靠 substrate。**
  - 背景執行、續跑、typed output、資源清理、授權邊界，這些比再加一個華麗介面更值錢。

- **把可安裝能力當成正式產品單位。**
  - 不管你叫 skill、plugin、brain pack、workflow pack，本質都是可分發的 agent 行為資產。
  - 要有版本、來源、說明、依賴、風險標示。

- **記憶不要只做成 summary feature。**
  - 使用者真正需要的是可追來源、可搬遷、可刪、可校正的長期脈絡層。
  - 只會記一句偏好，通常撐不起長任務。

- **把 token economics 顯性化。**
  - `caveman`、usage dashboard、context generator 這類案子會紅，代表成本不是後台指標，已經是前台體驗。

- **決定你做的是 runtime、context layer，還是 skill marketplace。**
  - 三層都能做，但產品節奏完全不同。
  - 最怕的是三層都想碰，最後每層都只做半套。

- **從第一天就設計 provenance。**
  - skill 來自哪裡、brain 吃了哪些資料、哪段記憶怎麼進來、哪個 subagent 寫了什麼，這些都要能回查。

## 後續觀察

接下來我會特別盯五個訊號。

### 1. skill / persona 蒸餾會不會從爆紅變成標準發佈格式

如果接下來更多案子開始收斂到一致的 `SKILL.md`、manifest、安裝與版本模式，代表 skill 真的會變成 agent 生態的套件層。

### 2. personal brain 會不會長出通用 schema 與遷移標準

`gbrain` 類案子如果持續被 fork、被接到不同 agent 上，下一步很可能是 brain repo 結構、同步規則、記憶 provenance 的事實標準化。

### 3. runtime 會不會繼續把 background work 做成第一級介面

`codex` 的背景進度串流、`gemini-cli` 的 subagent 記錄、`openclaw` 的 plugin setup 與記憶介面，都是在往同一件事收斂：**agent 不只是回答，而是在跑一個能被看見的流程。**

### 4. token mode 會不會像模型切換一樣變成標配

如果 `caveman` 這類模式繼續漲，未來 agent 很可能內建多種輸出檔位：深度版、交接版、超省 token 版、正式文件版，而不是只有一種預設口吻。

### 5. curated skill lists 會不會催生新的信任層

一旦 ecosystem 夠大，大家很快會遇到一樣的問題：

- 哪些 skill 值得裝
- 哪些 skill 有驗證資料
- 哪些 skill 只是模仿口氣
- 哪些 skill 真能穩定提升決策品質

那時候真正有價值的，不一定是 skill 本身，而是 **評測、審核、排名與 provenance 層**。

## 我的結論

- 這週 GitHub 高星動態最值得看的，不是「又多一個 agent」，而是 **agent 產品堆疊開始分層了**。
- 成熟專案在補底座：背景執行、session continuity、typed tools、授權與記憶介面。
- 新案在補上層：skills、persona distill、personal brain、token 模式、skill 收錄生態。
- 這代表下一輪競爭，未必是誰模型接得最多，而是誰能把下面這些東西做成真產品：
  - 可續跑的 runtime
  - 可治理的記憶與上下文
  - 可安裝的技能資產
  - 可計價的 token 體驗
  - 可追溯的來源與版本

真正留下來的 agent 工具，會越來越像一套作業系統：底層穩，上層可插拔，中間的記憶與脈絡能被長期維護。

## 參考連結

- [GitHub Search API](https://docs.github.com/en/rest/search/search)
- [OpenClaw `v2026.4.11` release](https://github.com/openclaw/openclaw/releases/tag/v2026.4.11)
- [OpenAI Codex `0.120.0` release](https://github.com/openai/codex/releases/tag/rust-v0.120.0)
- [Gemini CLI `v0.39.0-nightly.20260411.0957f7d3e`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.39.0-nightly.20260411.0957f7d3e)
- [OpenCode `v1.4.3` release](https://github.com/anomalyco/opencode/releases/tag/v1.4.3)
- [女媧.skill repository](https://github.com/alchaincyf/nuwa-skill)
- [GBrain repository](https://github.com/garrytan/gbrain)
- [caveman repository](https://github.com/JuliusBrussee/caveman)
- [Awesome Persona Distill Skills repository](https://github.com/xixu-me/awesome-persona-distill-skills)

---

*GitHub API 資料截點：2026-04-12 10:30（Asia/Taipei）。星數、release 與 commit 活動會持續變動，本文採撰寫當下觀察值。*
