---
layout: post
title: "代理式 AI 開始把執行路徑、推論路由與安全判定壓成同一套工程控制面"
date: 2026-04-17 21:30:00 +0800
categories: [tech]
tags: [ai, agents, backend, inference, cloudflare, github, deno, security]
description: "4/17 的幾條 AI / Backend / HN 訊號可以收成一句話：模型只是入口，真正決定能不能進 production 的，是執行路徑、推論路由、狀態管理與安全判定能不能被收斂成同一套控制面。"
lang: zh-TW
---

今天最值得記住的一句話，是 **代理式 AI 已經不只是模型能力競賽，而是整條執行路徑、推論路由與安全判定，正在一起被壓成同一套工程控制面。**

這件事不是單看某一篇文章才成立，而是今天幾條線剛好都在說同一件事。

- SAP LeanIX 談的是：把使用者程式碼執行服務做到每日數百萬次後，先爆的通常不是 runtime，而是 process lifecycle、資料庫連線占用、log/index 寫入。
- GitHub 談的是：production 出事時，deploy script 不能再偷偷依賴正在故障的外部服務，這種限制不能只寫在文件裡，要直接做進 runtime guardrail。
- Cloudflare 談的是：agent 時代真正值錢的可能不是「你接了哪顆模型」，而是 routing、cache、stream reconnect、KV cache 與 GPU 排程怎麼被做成基礎設施。
- Hacker News 上最有價值的討論，也不再只是 benchmark，而是長任務穩定性、repo 狀態底座、漏洞驗證深度與 false positive 控制。

把這些放在一起看，方向很清楚：大家已經從「怎麼接模型 API」走到「模型真的開始動手做事後，整個系統怎麼穩、怎麼便宜、怎麼不出事」。

## 使用者程式碼執行的第一個瓶頸，常常不在 sandbox

LeanIX 這篇很值得 backend 團隊反覆看，因為它把一個很常見的誤判拆得很乾淨。

很多產品現在都會碰到這種需求：

- 讓使用者塞 JavaScript 或 callback
- 讓 workflow engine 執行客製腳本
- 讓 LLM 先生一段程式，再回頭交給系統執行

表面上看，大家最常討論的是 sandbox：要用 Node、Deno、microVM 還是別的隔離方式。

但 LeanIX 撐到高流量後看到的現實是，真正把延遲從 200ms 拉到 30 秒的，往往不是腳本本身，而是 orchestration path：

- 每次請求都重新啟一個 `deno run`
- execution log 與 telemetry 同步寫回資料庫
- log table 上的索引維護把寫入放大
- 連線池被請求長時間占住

他們的修法也很有代表性。

第一步不是換 runtime，而是改成「每份程式碼綁一個長壽命 process」，讓 Kotlin 端用 `stdin/stdout` 跟它溝通，把 process 啟動成本攤掉。第二步才是把寫 log 的路徑改短：先寫進無索引 buffer table，再由背景工作批次搬回正式 log table 與 outbox。

這裡最值得學的，不是某一個技巧，而是看問題的方法。

- **背景脈絡**：高流量下，腳本執行服務會同時受到 process 啟動成本、DB 連線占用與索引寫入壓力影響。
- **機制**：請求越長時間握住連線，pending connections 就越容易一起上升；索引越重，寫入延遲越容易把整條路徑拖長。
- **取捨**：把 log 改成非同步批次後，請求變快了，但 audit 資料不再在 response 當下完整可查。
- **實作影響**：做 agent tool execution、plugin runtime、server-side script hosting 的團隊，不能只盯 sandbox，得先把 orchestration path 畫出來。
- **下一步**：先用 trace 找出哪一段真的在拖 latency，不要一開始就把鍋丟給 runtime。

這也是今天一整批內容裡最容易被忽略，但其實最務實的一個提醒。

## 部署安全開始從文件規範，下沉到 kernel 與 network path

GitHub 用 eBPF 改部署安全，談的不是一般防火牆問題，而是更麻煩的 circular dependency。

最典型的事故場景是：production 出事了，工程師要靠 deploy script 修 production，但這支 script 自己可能還會偷偷依賴 GitHub、某個內部 DNS、某個會自動檢查更新的工具，甚至呼叫另一個內部服務，而那個服務又反過來依賴正在故障的系統。

這種依賴平常很難完全靠 code review 看出來，因為很多不是直接寫在主流程裡，而是藏在 CLI 預設行為、套件更新檢查或 downstream service call。

GitHub 的做法是把 deploy script 放進專屬 cgroup，用 eBPF 攔 egress，再把 DNS query 轉給本地 proxy，以 domain policy 判斷哪些請求該被擋下。更重要的是，它不是只記錄「有封鎖」，而是能追回是哪個 PID、哪個命令列在 deploy 過程中嘗試打到不該依賴的服務。

這個方向很值得注意，因為它反映出一個更大的變化：**安全控制不再只靠文件規範與人工審查，而是開始往 runtime path 收斂。**

- **背景脈絡**：incident 時最怕的不是單一 bug，而是修復工具自己也被故障面拖住。
- **機制**：把 deploy process 拉進專屬 cgroup，再在 network path 上直接做限制與可追查性。
- **取捨**：粒度很細，不會一刀切斷整台機器的正常流量；但維護成本更高，DNS policy、proxy 與 eBPF map 都要一起顧。
- **實作影響**：部署安全、agent 安全、工具權限邊界，很可能會逐步走向同一套執行期約束。
- **下一步**：平台團隊可以先盤點最關鍵的自動化流程，看看哪些外部依賴現在其實只存在默契裡。

這跟 prompt guardrail 是不同層級的問題。前者是告訴模型不要做什麼，後者是系統直接讓某些事做不到。

## Cloudflare 正在把模型供應商，往「可路由的基礎設施」方向推

Cloudflare 今天兩篇文章可以一起看。

第一篇在談 AI Platform。重點不只是多接了幾家模型，而是把 AI Gateway 做成 agent 時代的 inference control plane：同一個 API 入口、同一套 billing / observability / failover，底下可以路由到 70+ 模型與 12+ provider，還能支援長任務 agent 很需要的串流續接。

第二篇則是把更底層的事講白：真正決定大型模型能不能跑得動、能不能賺錢的，往往不是模型名字，而是 prefill / decode 分拆、KV cache 搬移、cache hit、speculative decoding、多 GPU 排程與 cold start 管理。

這兩篇合在一起看，意思很大。

以前很多 AI 產品的故事是「我接了某顆強模型」。現在那個價值還在，但正在被往下稀釋。當 agent workflow 一次會拆成分類、規劃、工具調用、檢查、重試多段推論時，真正會被放大的變數變成：

- 供應商切換成本高不高
- stream 中斷後能不能續接
- cache hit 高不高
- TTFT 穩不穩
- tail latency 能不能壓住
- 每條 workflow 的 token 成本能不能被歸因

也就是說，模型供應商越來越像雲端供應商，而 inference layer 越來越像你真正掌握產品體驗的地方。

- **背景脈絡**：agent 不只打一個 model call，任何延遲與故障都會沿整條 call graph 被放大。
- **機制**：上層用 AI Gateway 統一路由、失敗補償與成本歸因；下層用 cache、資料搬移與 GPU 排程把 token factory 調順。
- **取捨**：抽象層越完整，切模型越方便；但平台本身也會變成新的依賴與故障面。
- **實作影響**：未來 AI 產品團隊需要把 TTFT、cache hit、fallback 次數、stream reconnect 成功率當成正式 KPI。
- **下一步**：如果你在做 agent 產品，最值得先補的是最小觀測面板，而不是急著再接一顆新模型。

很多團隊現在還把 infra 指標看成平台內部細節，但這一波趨勢很可能會讓它們直接變成產品指標。

## HN 開始在意的，不是模型多會寫，而是長任務、狀態與驗證能不能撐住

今天 Hacker News 上幾個重點放在一起看，也很有意思。

### Claude Opus 4.7：競爭點從「會不會寫」轉成「能不能把長任務做完」

討論焦點已經不太是單次 benchmark，而是：

- 長任務會不會漂掉
- 工具調用成功率夠不夠高
- 回報前會不會自己驗證
- 能不能放心交辦

這代表 coding agent 的評估方法也要跟著改。只跑單題測試，很難反映真實工作流的成功率。

### Artifacts：agent 會逼你重做狀態儲存層

Cloudflare 的 Artifacts 最值得看的，不是「又一個 Git 服務」，而是它明白在回應一個問題：當 agent 同時平行處理很多任務時，repo、branch、fork、session state 與 prompt 版本會一起暴增。

這不是把檔案丟到 object storage 就能解的事。你需要的是一個能 time-travel、可 rollback、可 diff、可分享的狀態底座。

### AI cybersecurity is not proof of work

antirez 這篇短文提醒得很準：漏洞發現不是 token 跑越多就一定越強。真正的瓶頸在模型理解深度、false positive 控制，以及能不能把發現驗證成 exploit chain。

把這三件事放在一起，其實會看到同一個核心：**未來真正有價值的 agent，不只是會產東西，而是能在長路徑裡維持正確、保存狀態、完成驗證。**

- **背景脈絡**：production 任務不是一題一答，而是一段會跨工具、跨檔案、跨狀態的長工作流。
- **機制**：你需要更穩的長任務模型、更好的狀態底座、更嚴格的驗證框架。
- **取捨**：系統設計會變難，但你才有機會把 agent 放進真實工作。
- **實作影響**：評估 coding agent 或安全 agent 時，不能只看 throughput，要看長任務成功率與驗證成本。
- **下一步**：把自己的代理式工作流拆成三張圖：任務怎麼開始、狀態怎麼保存、成功怎麼判定。

## 幾個現在就能做的實作建議

### 1. 把模型會動手做事的功能，當成執行系統設計

不要再把它寫成一段模糊的「這裡呼叫 AI」。請拆成：

- 請求進入
- 模型推論
- 工具執行
- 狀態保存
- side effect 提交
- 完成判定

只要這六段沒有拆清楚，問題最後一定會回到你身上。

### 2. 把 inference routing 指標正式拉進產品討論

至少要定期看：

- TTFT
- total latency
- cache hit
- fallback 次數
- stream reconnect 成功率
- 每條 workflow 的平均成本

看這些數字，比討論「最近哪顆模型比較強」更接近真實經營問題。

### 3. 補 completion contract

很多 agent workflow 失敗，不是因為模型太笨，而是因為系統根本沒有清楚定義什麼叫「完成」。

部署完成要看什麼？
修補成功要看什麼？
漏洞發現成立要看什麼？

這些如果還停在「人看 log 覺得差不多」，那 agent 只會把模糊放大。

### 4. 提早投資狀態底座

當任務一多，repo、artifact、session state、prompt 版本、回滾點都會一起暴增。越早把這些東西當成平台能力，之後就越不容易被工作流碎片化反咬。

## 我的結論

今天這批內容最重要的共識是：**代理式 AI 其實正在長成新的分散式系統。**

它有執行路徑、資料路徑、推論路徑與安全路徑，而且每一條都會互相放大。

所以接下來真正穩的團隊，不會只是最早接到新模型的團隊，而是最早把下面這幾件事說成同一種工程語言的團隊：

- 執行怎麼跑
- 狀態怎麼存
- 模型怎麼切
- 成功怎麼驗
- side effect 怎麼管

如果你現在只做一件事，我會建議先去畫出自己最重要那條 agent workflow 的控制面。只要這張圖還畫不清楚，再強的模型都只是在一條模糊流程裡加速而已。

## 參考連結

- [SAP LeanIX：Scaling Managed Code Execution](https://engineering.leanix.net/blog/scaling-managed-code-execution/)
- [GitHub：How GitHub uses eBPF to improve deployment safety](https://github.blog/engineering/infrastructure/how-github-uses-ebpf-to-improve-deployment-safety/)
- [Cloudflare：Cloudflare’s AI Platform: an inference layer designed for agents](https://blog.cloudflare.com/ai-platform/)
- [Cloudflare：Building the foundation for running extra-large language models](https://blog.cloudflare.com/high-performance-llms/)
- [Cloudflare：Artifacts: versioned storage that speaks Git](https://blog.cloudflare.com/artifacts-git-for-agents-beta/)
- [antirez：AI cybersecurity is not proof of work](https://antirez.com/news/163)

---

*整理時間：2026-04-17 21:30（Asia/Taipei）。本文依當下公開文章與 HN 討論整理，後續產品細節與數據可能持續更新。*
