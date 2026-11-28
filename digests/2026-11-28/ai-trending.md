# AI 开源趋势日报 2026-11-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-28 04:09 UTC

---

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to translate it naturally while preserving all Markdown structure, URLs, project names, code, etc.

Let me translate this carefully, maintaining the technical register of a Chinese developer newsletter.

Let me go through it section by section:

1. Title and date
2. Section 1: Today's Highlights
3. Section 2: Top Projects by Category (with tables)
4. Section 3: Trend Signal Analysis
5. Section 4: Community Hot Spots

I need to be careful about:
- Technical terms that are commonly used in Chinese (RAG, LLM, MCP, etc.)
- Preserving all markdown formatting
- Keeping all URLs and project names intact


- Using natural Chinese technical language
- Maintaining the table structure exactly

Now I'm ready to translate the report, working through each section methodically to ensure accuracy and natural flow in Chinese.
</think>


# AI 开源趋势报告 — 2026-11-28

## 1. 今日要闻

开源 AI 生态正经历一次向 **Agent 原生基础设施** 的决定性转变。今天，以 AI Agent 技能、框架和调度系统为中心的一批项目正占据最大的单日 star 增长——由 **Claude-BugHunter**（+1,608）和 **superpowers**（+922）领衔，两者均明确面向 AI 编程 Agent（Claude Code、Codex、Cursor）提供技能包和 Agentic 开发方法论。**CLI-Anything** 范式（HKUDS/CLI-Anything，+666）的出现标志着一股新浪潮——"让所有软件都具备 Agent 原生能力"，正式规范了 Agent 与现有 CLI 工具的交互方式。与此同时，**minimind**（2 小时训练 64M 模型）延续了话题搜索中的势头，反映了社区对可及性强、从零开始训练 LLM 的强烈需求。**OpenVINO** 持续增长（+151）表明，随着前沿模型被大规模部署，推理优化仍是业界关注的焦点。在今天追踪的 80+ 个 AI 相关仓库中，Agent 技能标准化、Token 高效推理和领域专用 Agent 应用是三个主导方向。

---

## 2. 各类别顶尖项目

### 🔧 AI 基础设施

| 项目 | 语言 | Stars（总计 / 今日）| 概述 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 159,700 | 一款对用户友好的 Web UI，支持自托管 AI 推理，对接 Ollama 和 OpenAI API 后端——是开发者运行私有模型的事实标准本地 AI 前端。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 211,766 (+822) | 知识基础设施，通过统一 API 接入 550+ 数据源，为 AI Agent 提供网页抓取、搜索和结构化数据提取的一体化管道。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 188,338 | 主导性的本地 LLM 运行时，一行命令即可部署开源模型（Qwen、DeepSeek、Gemma、MiniMax 等）——本地优先 AI 运动的基础设施支柱。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 150,089 | 基础的 Agent 工程平台，提供 LLM Chain、工具调用和记忆的抽象层——仍是构建 AI 应用采用最广泛的框架。 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 45,521 | LangChain 基于状态机的框架，用于构建具有循环和记忆能力的多步骤 AI Agent——作为生产级选择，正逐渐取代原生 LangChain Chain。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,652 | 全面的 LLM 评测平台，在推理、代码、安全和长上下文等 100+ 评测集上对模型进行基准测试——对社区客观比较开源模型至关重要。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 88,054 | Apache-2.0 许可的网页爬虫，专为 AI Agent 设计，提供结构化提取和 Markdown 输出——使 Agent 能够可靠地获取实时网页内容。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 81,015 | Token 压缩代理和 MCP Server，为编程 Agent 降低 20%、为 JSON 密集型工作负载降低 60–95% 的 LLM 上下文量——直击生产 Agent 部署的成本和上下文窗口限制。 |

### 🤖 AI Agent / 工作流

| 项目 | 语言 | Stars（总计 / 今日）| 概述 |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 0 (+1,608) | 面向 Claude Code 的技能包，内含 85 项技能和 16 个斜杠命令，覆盖 24 类漏洞、企业身份攻击和 681 个已披露报告模式——今日 star 增长量最大的 AI 项目。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+922) | 一种 Agentic 技能框架和软件开发方法论，将编程 Agent 处理复杂工程任务的方式加以编纂——将"Agentic 开发模式"正式确立为一门学科。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0 (+666) | "让所有软件都具备 Agent 原生能力"——一个将现有 CLI 工具封装为 Agent 可消费接口的中心项目，使 Agent 能够原生访问完整的 Linux 软件生态。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (+311) | 遵循开放 Agent Skills 标准的技能库，兼容 Stitch MCP Server、Antigravity、Gemini CLI、Claude Code 和 Cursor——Google 在技能互操作性上的押注。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 0 (+675) | 一项 AI Agent 技能，可跨 Reddit、X、YouTube、HN、Polymarket 和全网研究任意话题，并合成一份有据可查的摘要——生产就绪的社交情报 Agent 技能。 |
| [copilotkit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 39,019 | AI Agent 和生成式 UI 的前端技术栈，包含 AG-UI 协议——弥合 Agent 推理与最终用户界面之间鸿沟的 React/Angular/Mobile 框架。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 311,943 | Agent 调度性能优化系统，具备技能、本能、记忆、安全和研究优先开发模式——为 Claude Code、Codex 和 Cursor 量身打造。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 85,242 | 开源 AI 求职 Agent，依据简历为职位打分，生成 ATS 友好简历和求职信，并追踪申请进度——一款势头强劲的领域专用 Agent 应用。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 39,019 | 构建 Agent 驱动 UI 的前端框架，包含 AG-UI 协议标准——鲜有的系统性地解决"Agent 到最终用户界面"问题的项目。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总计 / 今日）| 概述 |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 0 (+718) | 开源 AI 视频剪辑工具，可自动生成短视频内容（字幕、封面、文案）用于 TikTok、YouTube Shorts 和 Reels——以零订阅本地优先的方式直接对标 OpusClip。 |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Shell | 0 (+530) | AI 编程 Agent 技能，涵盖 125 个已记录驳回模式、隐私清单检查以及追踪重要法规截止日期（EU AI Act、DSA、COPPA）——将 AI 应用于每月阻止数千应用上架的合规瓶颈。 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | 0 (+328) | 面向 CI/CD 可靠性的开源 AI Agent，主动识别并修复流水线故障——将自主运营引入 DevOps 工作流。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 75,038 | 多市场 LLM 驱动股票分析系统，整合实时新闻、决策仪表盘和自动化通知——依托免费 LLM 层实现零成本运行。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 146,028 | 根据主题自动生成高清短视频的 AI 工作流——AI 内容创作工具中 star 数最多的项目之一，验证了端到端 AI 媒体管线的强劲需求。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 39,096 | 利用 LLM 进行市场分析和决策支持的个人交易 Agent——是金融 AI Agent 浪潮中一支不断积蓄社区影响力的力量。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 80,815 | AI 从文档生成原生 PowerPoint 演示文稿，支持形状、切换效果、图表和语音旁白——以 AI 原生方式解决企业界广泛存在的痛点。 |

### 🧠 大语言模型 / 训练

| 项目 | 语言 | Stars（总计 / 今日）| 概述 |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 72,268 (+660) | 2 小时从零训练 64M 参数 LLM——开发者理解从数据预处理到模型收敛全流程最平易近人的切入点。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 109,164 | 手把手实现类 ChatGPT LLM 的权威 PyTorch 教程——凭借 109K stars，始终是社区理解 Transformer 语言模型的首选教育资料。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,311 | 覆盖文本、视觉、语音和多模态领域 SOTA 模型的标准建模框架——支撑大多数开源 AI 工作的基础库。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,293 | 用 Rust 构建模块化、可扩展的 LLM 应用——作为 Python 主导生态的替代方案，押注内存安全、高性能的 LLM 基础设施，正逐步兴起。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,815 | 在 Apple Silicon 上学习 LLM 推理系统实现，构建精简版 vLLM + Qwen 技术栈——面向希望深入理解推理细节而非仅使用 API 的系统工程师。 |
| [acon96/home-llm](https://github.com/acon96/home-llm) | Python | 1,505 | 将本地 LLM 集成到 Home Assistant 以控制智能家居设备——本地设备端 LLM 在 IoT 领域的实用应用，展示隐私优先的本地 AI 控制可行性。 |

### 🔍 RAG / 知识管理

| 项目 | 语言 | Stars（总计 / 今日）| 概述 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 154,312 | 将代码库、文档、SQL schema 和 PDF 转化为可查询知识图谱——通过确定性 AST 解析构建每条边，提供一种区别于嵌入式 RAG 的结构化替代方案。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 120,241 | AI Agent 会话间的持久化上下文，用 AI 压缩会话数据并在后续会话中注入相关记忆——直接解决 LLM 交互的无状态问题。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,563 | AI Agent 的记忆层基础设施——提供跨交互持久化的生产级记忆，是 Agent 应用技术栈中日益关键的基础组件。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,840 | Agent 原生 RAG 引擎，已演化为上下文基础设施——提供深度文档理解和智能分块策略。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,752 | 为大规模近似最近邻搜索打造的高性能、云原生向量数据库——大规模 RAG 系统的存储层支柱。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,678 | 开源 AI Agent 记忆平台，利用小模型实现免费持久化长期记忆——以轻量模型替代昂贵的 LLM 调用，使 Agent 记忆在经济上切实可行。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,746 | 性能卓越、大规模可扩展的向量数据库和搜索引擎，以 Rust 编写——作为快速可靠的生产 RAG 部署替代方案，日益获得采用。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | Python | 13,844 | MLsys 2026 最佳论文奖得主：在个人设备上实现 RAG 97% 存储节省且完全保持精度——检索增强生成领域的一项突破性进展。 |
| [neuml/txtai](https://github.com/neuml/txtai) | Python | 13,740 | 一站式 AI 框架，整合语义搜索、LLM 编排和语言模型工作流——提供从嵌入向量到完整 RAG 管线的集成化路径。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,453 | 面向 Java/JVM 构建 LLM 应用的习惯性库，统一封装 LLM 提供商和向量存储 API，并支持 MCP 工具调用——将 Agentic AI 带入企业 Java 生态。 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | Rust | 11,998 | 面向多模态 AI 的开发者友好型嵌入式检索库，针对检索密集型工作负载优化——边缘和嵌入式 AI 应用（需要向量搜索但不需要独立数据库服务）的首选新方案。 |

---

## 3. 趋势信号分析

今日数据中最具定义性的单一信号是 **Agent Skills 架构在社区中的爆炸性趋同**。今日 star 单日增量前 5 中有三个项目——**Claude-BugHunter**（+1,608）、**superpowers**（+922）和 **CLI-Anything**（+666）——共同传递了一个核心论点：AI 编程 Agent 需要结构化、可组合的技能包才能在生产环境中可靠运行。这不是一个细分领域的小众需求；Agent Skills 开放标准、superpowers 方法论、Claude Code 技能包等多个技能框架同时涌现，表明社区正在通过模块化手段共同解决"Agent 可靠性"问题——这是对 Agent 在复杂任务上出现幻觉、循环或静默失败等问题挫败感的直接回应。

第二个重要信号是 **Token 效率军备竞赛**。**headroom**（降低 20–95% Token）、**caveman**（更简短的 Agent 回复，附可恢复原文）以及更广泛推进的 MCP Server 工具链都指向一个成熟的关切：**LLM 上下文窗口和 API 成本是 Agentic 系统的核心制约因素**。社区正大力投入压缩、摘要和有选择性上下文注入，而非假定无限上下文是可接受的。

第三个信号是 **为 Agent 重新定义一切 CLI**。CLI-Anything 项目及其"Agent 原生软件"理念代表了一种新范式：不是从头构建新的 Agent 原生 UI，而是在现有 Linux 软件生态（编译器、CLI、API）上套上一层 Agent 可消费的工具接口。这是一种务实的转向——无需等待新基础设施，就能让 Agent 触达更广阔的软件世界。

最后，**多模态内容生成**（autoclip、MoneyPrinterTurbo）和**合规自动化**（app-store-compliance）表明，开发者正在围绕高摩擦的现实工作流构建 Agent 化包装——"AI Agent + 现有工具链 + 领域知识 = 解决问题"这一模式正在成为主流应用模板。

---

## 4. 社区热点

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — 单日 star 增量最高，表明开发者对 AI 安全工具（面向 Agent）的关注度极高。随着编程 Agent 的普及，攻击面不断扩大；BugHunter 涵盖 24 类漏洞的 85 项技能包，是领域专用 Agent 技能开发的蓝图。

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** — "Agent 原生软件"概念新颖且影响深远：如果每个 CLI 工具都能被封装为 MCP 兼容的 Agent 工具，那么整个 Unix 软件生态无需重写即可被 Agent 访问。值得密切跟进其成熟过程。

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — 72K+ stars，今日又获 660 stars，让 LLM 训练知识走向普惠。随着硬件成本下降和小模型在边缘部署的可行性提升，人人都能从零训练模型的趋势将加速。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0) / [topoteretes/cognee](https://github.com/topoteretes/cognee)** — Agent 记忆基础设施是一个新兴但至关重要的类别。当 Agent 从演示走向生产，无状态特性是排名第一的痛点；这些项目正在构建整个生态迫切需要的"持久大脑"层。

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — MLsys 2026 最佳论文奖的认可验证了 RAG 的一个新方向：在完全保持精度的前提下实现 97% 存储节省，使得在消费级硬件上进行真正的私有化、设备端 RAG 成为可能。这个方向——高效设备端检索——可能定义下一波 RAG 创新。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*