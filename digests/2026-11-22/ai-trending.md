# AI 开源趋势日报 2026-11-22

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-22 02:35 UTC

---

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me translate it carefully, maintaining the markdown structure and using natural technical Chinese.
</think>


# AI 开源趋势报告 — 2026-11-22

## 1. 今日要闻

AI 开源生态正在经历一场深刻变革，从通用型框架全面转向 **Agent 原生工具链**。今日热榜由大量围绕 AI 编程 Agent（Claude Code、Cursor、Codex）的项目主导——结构化技能包、合规守卫、攻防矩阵，应有尽有——这表明社区已开始在为自主 Agent 打造"操作系统层"。与此同时，垂直 AI 应用如 AI 视频剪辑（AutoClip）和 Agent 原生 CLI 基础设施（CLI-Anything）正以惊人的日星量攀升，说明开发者不再满足于实验性 Demo，而是迫不及待地将 AI Agent 投入日常生产工作流。基础设施老将如 OpenVINO 和 MiniMind 从零训练演示依然热度不减，印证了业界对高效推理和模型训练入门资源的持续渴望。

---

## 2. 各类别重点项目

### 🔧 AI 基础设施

| 项目 | 语言 | Stars（总计 / 今日新增） | 概述 |
| :--- | :--- | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 206,266 (+1,006) | 面向 AI Agent 的统一数据接入层——通过单一 API 聚合 550+ 数据源，支持搜索、抓取和结构化抽取。每日 1,000+ 的新增 Stars 反映出业界对可靠 Agent 数据管道的迫切需求。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 159,229 | 面向 AI 的用户对话界面，天然支持 Ollama 和 OpenAI API，无需供应商绑定即可自托管 LLM。 |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | 260 (+260) | Cursor AI IDE 的官方插件规范及实现，为增长最快的 AI 编程助手建立插件生态标准。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,611 | 全方位 LLM 评测平台，覆盖推理、编程、长上下文、安全等 100+ 评测集——社区评估模型质量的首选工具。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 80,266 | 面向 AI Agent 的 Token 压缩代理，编程任务上下文缩减 20%，JSON 密集型输出缩减 60–95%，直击成本与上下文窗口限制。 |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | 200 (+200) | 英特尔推理优化与部署工具链，支持 CPU、GPU 和边缘设备，随着边缘 AI 部署加速再次受到关注。 |

### 🤖 AI Agent / 工作流

| 项目 | 语言 | Stars（总计 / 今日新增） | 概述 |
| :--- | :--- | ---: | :--- |
| [ NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 265,214 | 自适应 Agent 框架，能力随用户需求增长而扩展，专为长期交互会话中的技能积累和记忆管理而设计。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 188,125 | 引发 Agent 框架浪潮的初代自主 AI Agent 项目，至今仍是构建自导向 AI 系统的参考架构。 |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,633 | RAG 管线与 Agent 工作流协作构建平台，模型与工具支持丰富，帮助团队打通从原型到生产的全链路。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,957 | Agent 工程领域的主导框架，提供 Chain、Tool、Memory 抽象——LangChain 生态的标准底座。 |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 1,803 (+1,803) | 面向 Claude Code 的安全技能包，含 82 项漏洞挖掘技能、15 条斜杠命令和 681 个漏洞模式，覆盖 24 个攻击类别——AI 编程 Agent 领域的首个红队工具链。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 883 (+883) | Agent 技能框架，围绕 AI Agent 能力将软件开发方法论固化为可复用技能原语。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 769 (+769) | 将任意现有 CLI 工具通过标准化 Hub 转化为 Agent 可调用工具，以极低摩擦将 AI Agent 能力拓展到完整的 Unix 软件生态。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 326 (+326) | 遵循开放 Agent Skills 规范的技能库，兼容 Antigravity、Gemini CLI、Claude Code 和 Cursor——来自 Google 实验性代码实验室。 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | 450 (+450) | 开源 CI/CD 可靠性 Agent，自主监控告警并修复流水线故障——将 Agent 智能直接注入 DevOps 工作流。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,865 | 用于在 React/Angular/移动端构建 Agent 驱动生成式 UI 的前端技术栈，包含 Agent 到前端的 AG-UI 通信协议。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总计 / 今日新增） | 概述 |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 144,997 | 输入关键词自动生成高清短视频，融合 AI 模型和结构化工作流——当前最具人气的开源病毒内容创作工具。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 84,070 | 开源 AI 求职 Agent，根据简历评分岗位、定制简历并追踪申请进度——将 Agent 自动化引入求职全流程。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 73,641 | 多市场 AI 股票分析系统，集成实时新闻、决策看板和自动告警——借助免费 LLM API 实现零成本定时执行。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 50,255 | 香港大学数据科学团队出品的轻量级个人 AI Agent，专为低资源自托管场景优化。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 38,654 | 同研究团队的多 Agent 编排个人 AI 交易系统，应用于投资组合管理。 |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 683 (+683) | 开源 AI 视频剪辑工具，自动将长播客和访谈转化为 TikTok、Reels、YouTube Shorts 短片，自动加字幕和文案。 |

### 🧠 大语言模型 / 训练

| 项目 | 语言 | Stars（总计 / 今日新增） | 概述 |
| :--- | :--- | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,313 | 覆盖文本、视觉、语音、多模态等 SOTA 模型的标准定义框架——开源模型生态的基石。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 187,798 | 本地 LLM 运行时，一句命令即可自托管 Kimi、GLM、MiniMax、DeepSeek、Qwen、Gemma 等开源模型，已成为事实标准。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 105,733 | 动态神经网络框架，支持 GPU 加速——开源 AI 研究社区首选的训练底座。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,780 | 里程碑式学习资源，全程用 PyTorch 从零构建类 ChatGPT LLM——GitHub 上最具星数的 AI 学习资料之一。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 68,186 (+488) | 仅用 2 小时从零训练 64M 参数 LLM——模型训练普及化的一座里程碑。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,214 | 面向可扩展 LLM 应用的模块化 Rust 框架——瞄准内存安全、高性能的 Agent 基础设施。 |
| [RiccardoBiosas/awesome-MLSecOps](https://github.com/RiccardoBiosas/awesome-MLSecOps) | Astro | 494 | 精选安全资源列表，覆盖对抗机器学习防御、LLM 安全、AI 红队和 MLOps 流水线防护——社区关注度正在快速上升。 |

### 🔍 RAG / 知识管理

| 项目 | 语言 | Stars（总计 / 今日新增） | 概述 |
| :--- | :--- | ---: | :--- |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 145,316 | 收录 100+ AI Agent 与 RAG 应用的精选合集——社区获取 LLM 应用范式与实现的主要参考库。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 118,866 | AI Agent 持久化上下文系统，捕获会话、AI 压缩并回注相关记忆——支持 Claude Code、Codex、Gemini 等多端。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,513 | Agent 原生 RAG 引擎，已演化为上下文基础设施，提供深度文档理解能力，服务企业级知识检索。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,643 | 专为 AI Agent 定制的开源网页爬虫，Apache-2.0 协议可自托管，提供云服务版本，将结构化数据注入 RAG 管线。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,315 | 面向 AI Agent 的即插即用记忆基础设施，跨会话和多 Agent 部署提供持久化、生产级的上下文能力。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,973 | 文档处理与检索平台，专为构建 RAG 系统设计——LLM 应用的标准数据索引层。 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 59,952 | 极速搜索引擎，具备 AI 混合搜索能力——轻量级、支持向量检索，是生产级搜索的有力替代选择。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,450 | 开源 AI 记忆平台，基于小模型实现 Agent 持久长期记忆——面向隐私优先的端侧部署场景。 |

---

## 3. 趋势信号分析

今日热榜揭示了一个明确的 **Agent 工具化拐点**。增速最高的三款项目——Claude-BugHunter（+1,803）、Superpowers（+883）和 CLI-Anything（+769）——有一个共同内核：AI Agent 需要结构化、领域特定的技能原语才能在生产环境中可靠运行。社区不再执着于打造更大的模型，而是大力投入 *操作系统层* 的建设：技能包、斜杠命令、合规守卫、标准接口——让 Agent 可组合、可信赖。

还有两个额外信号值得注意。其一，**传统软件的 Agent 化**正在真正起势——CLI-Anything 明确立志将整个现有 Unix 软件生态包装为 Agent 可调用函数；Stitch Skills（Google Labs）和更广泛的 Agent Skills 开放标准运动则表明，工具互操作性正在成为一等一的工程议题。其二，**垂直 AI 应用已进入主流采纳阶段**，AutoClip 的快速攀升（+683）和 MoneyPrinterTurbo 持续稳定的 144k Stars 就是明证——开发者对概念验证早已厌倦，正在将 AI Agent 部署到视频创作、求职、股票分析等真实商业场景。

基础设施层依然稳健（OpenVINO、headroom 压缩、OpenCompass），但叙事重心已从"如何跑模型"转向"如何让 Agent 有用"。Agent Skills 规范和多 Agent 编排框架将是下一个生态主导权的争夺战场。

---

## 4. 社区关注热点

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** — 今日最具战略野心的项目：它要让所有现有 Unix 软件对 AI Agent 可调用，等于构建一个万能适配层。盯紧 HKUDS 研究组之外的采用情况。
- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — AI 编程 Agent 领域首个专用红队技能工具链，为合规、隐私、治理等领域的 Agent 扩展树立了模板，极可能快速蔓延。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Agent 记忆层问题在大规模场景下尚未解决；mem0 以 69k Stars 和生产级架构，正成为社区公认的实现参考。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — Token 压缩作为一等一的基础设施原语（20–95% 缩减），直接攻克 Agent 大规模部署中最头疼的成本与上下文瓶颈；对任何 Agent 规模化运营团队都有高回报。
- **[ollama/ollama](https://github.com/ollama/ollama)** — 187k Stars 的本地 LLM 运行时仍是自托管 AI 的基石；持续增长表明企业和开发者正在加速私有化部署战略，减少对 API 的依赖。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*