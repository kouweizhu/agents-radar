# AI 开源趋势日报 2026-11-27

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-27 04:29 UTC

---

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, project names, repo slugs, numbers, dates as-is
4. Use natural technical Chinese register

Let me translate this carefully, section by section.

Key things to remember:
- Keep all URLs, project names, repo slugs in original form
- Keep numbers and dates
- Preserve markdown formatting (tables, headings, lists, etc.)
- Use Chinese punctuation where appropriate
- Natural technical Chinese register

Let me translate this now.
</think>


# AI 开源趋势报告 — 2026-11-27

## 1. 今日要点

开源 AI 生态正在经历一场显著的范式转变，核心驱动力是 **AI 原生开发者工具**。今日呈现三大信号：（1）**Agent 技能框架**——面向编码 Agent 的可组合、标准化技能库（Stitch Skills、Superpowers、CLI-Anything）正以前所未有的速度涌现，表明社区已就"通过技能实现可扩展性"作为 Agent UX 的主流范式达成共识；（2）**Agent 基础设施**（记忆、知识检索、上下文压缩）正在吸引海量关注，`firecrawl`（今日 +1,046 ★）和 `mem0`/`cognee` 等项目证明，持久化记忆与 Web 级知识获取已成为生产级 Agent 的标配；（3）**LLM 民主化工具**风头正劲，`minimind`（在消费级硬件上 2 小时训练 64M 模型）和 `opencompass`（100+ 评估数据集）说明社区不只是在消费模型，而是在围绕模型构建完整的工具链。

---

## 2. 各分类重点项目

### 🔧 AI 基础设施

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 211,084 | 统一的网页抓取与数据提取 API，整合 550+ 数据源，为 AI Agent 提供可靠的结构化实时互联网数据访问能力。 |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | — | 英特尔开源工具包，跨 CPU、GPU、边缘设备优化和部署 AI 推理，是生产级模型服务的关键基础设施。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | — | Stitch MCP 服务器的开源 Agent 技能标准库，设计目标为跨 Agent 兼容性（Claude Code、Cursor、Gemini CLI、Antigravity）。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | — | 将任意 CLI 工具转化为 Agent 原生接口，使 AI Agent 能通过统一入口与整个软件生态交互。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | — | Agent 技能框架与软件开发方法论，为扩展编码 Agent 能力提供结构化路径。 |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | — | 面向 Claude Code 的安全红队技能包，涵盖 24 类漏洞和 企业级基础设施攻击矩阵的 85 项技能。 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | — | 面向 AI 编码 Agent 的出版级图表库（52 种类型），以干净的 SVG 图表替代 Mermaid 类输出，提升 Agent 生成文档的可读性。 |

### 🤖 AI Agent / 工作流

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 45,487 | 在 LangChain 之上构建弹性、有状态的多 Agent 工作流，是 15 万星规模的 LangChain 生态系统的编排层。 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | — | CI/CD 可靠性 Agent——监控流水线、检测故障，并自主提出或直接应用修复方案。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | — | 研究技能，从 Reddit、X、YouTube、HN、Polymarket 及全网聚合近 30 天信号，输出基于事实的主题摘要供 Agent 参考。 |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Shell | — | App Store 与 Google Play 提交前审查守卫，内置 125 条驳回模式、欧盟 AI 法案截止日期和 Agent 可读的合规规范。 |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | — | 本地优先 AI 视频剪辑工具，支持 MCP 服务器集成——将播客和长视频自动剪为带字幕的短片段，适合 TikTok、YouTube Shorts 等平台。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 150,049 | Agent 工程平台——提供 Chain、Tool、Agent 抽象原语，是更广泛的 LangChain 生态的基石。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 39,005 | 前端 Agent 与生成式 UI 技术栈——实现 AG-UI 协议，将 Agent 能力嵌入 React、Angular 和移动端应用。 |
| [trycua/cua](https://github.com/trycua/cua) | Rust | 33,032 | 面向规模化计算机使用 Agent 的开源驱动与沙箱套件，包含训练、评估和合成数据生成的基准测试。 |

### 🧠 LLM / 训练

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 71,795 | 在消费级硬件上 2 小时从零训练一个可用 64M 参数 LLM——社区当前最落地的 LLM 训练实战教程。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,646 | 全方位 LLM 评估平台，覆盖知识、推理、代码、长上下文、安全等 100+ 数据集，评测对象涵盖 OpenAI、Anthropic、Gemini、Qwen、DeepSeek 等主流模型。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,815 | 在 Apple Silicon 上讲解 LLM 推理系统设计——构建最小化 vLLM + Qwen 栈，帮助系统工程师理解推理内核原理。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 109,104 | 黄金标准 PyTorch 实现：从零手写 ChatGPT 类 LLM，引导开发者理解每一个架构细节与训练环节。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,282 | 在 Rust 中构建模块化、可扩展的 LLM 应用——为 LLM 应用栈引入类型安全和性能优势。 |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | Python | 6,349 | 极简 Python 框架，以原子化、可复用构件组合 AI Agent，拥有清晰可预测的执行模型。 |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | Python | 565 | 通用 LLM 网关，提供 OpenAI/Anthropic 兼容端点，支持多提供商翻译和智能负载均衡。 |

### 🔍 RAG / 知识

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 53,021 | AI 文档处理平台——构建 RAG 管道的首选框架，与主流 LLM 提供商和向量存储深度集成。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,734 | 高性能、云原生的向量数据库，专为下一代 AI 工作负载设计，提供混合稀疏+稠密检索和生产级可靠性。 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | Rust | 11,994 | 面向多模态 AI 的开发者友好嵌入式向量数据库，优化低延迟检索，运维成本极低。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,659 | 开源 AI 记忆平台，利用小模型实现 Agent 持久化长期记忆——大幅降低上下文 token 成本。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Python | 42,888 | 自演进上下文数据库，将 Agent 记忆、RAG 知识和技能统一为单一检索层。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 40,798 | 无向量的推理式 RAG——用 LLM 推理替代向量相似度匹配，声称在复杂查询场景下准确率显著提升。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,520 | Agent 与应用的即插即用记忆基础设施——提供跨会话持久化上下文，使 Agent 重启后仍保持记忆连贯性。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 88,010 | 面向 LLM 消费优化的开源 AI 原生网页爬虫——结构化提取，每月 1,000 次免费 API 调用，支持完整私有化部署。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 80,953 | Token 压缩库、代理服务器和 MCP 服务器——为编码 Agent 降低 20%、为 JSON 重负载降低 60–95% 的上下文长度。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,790 | Agent 原生 RAG 引擎，已演进为上下文基础设施——处理复杂多跳查询的深度文档理解。 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | TypeScript | 12,735 | 让 Claude Code 能够以语义检索代替关键词搜索、在整个代码库中检索上下文的 MCP 服务器。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 153,913 | 将代码库、文档、SQL schema 和 PDF 转化为可查询知识图谱——使用确定性 AST 解析而非向量匹配，实现精确、可解释的代码推理。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,973 | 协作式 Agent 工作流与 RAG 流水线构建平台——丰富的模型和工具支持使其成为从原型到生产的有力桥梁。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 159,654 | 面向 Ollama、OpenAI API 等多种后端的易用 AI 界面——运行本地模型的首选自托管 UI。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 115,111 | 赋予 AI Agent 互联网全视野——通过单一 CLI 读写搜索 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书，零 API 费用。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 50,373 | 轻量级开源个人 AI Agent——面向资源受限环境设计，同时保持完整 Agent 能力。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 39,017 | 个人交易 Agent——监控市场、分析信号、通过 vibe-coded 自然语言界面自主执行交易。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 145,888 | 自动高清短视频生成器——输入主题或关键词，通过 AI 工作流流水线输出 TikTok/YouTube Shorts 内容。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TypeScript | 123,861 | Agent 化金融研究平台——编排多 Agent 系统分析市场、财报、新闻，辅助投资决策。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 74,880 | LLM 驱动的多市场股票分析，整合实时新闻与决策看板，支持跨交易所免费定时运行。 |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 63,446 | 终身个性化 AI 辅导系统——随学习者进度持续调整，实现真正的因材施教。 |

---

## 3. 趋势信号分析

今日数据显示，AI 开源生态正呈现三波明显的 momentum：

**第一波 — Agent 技能标准化。** 最爆炸性的趋势是 **技能框架作为 Agent 可扩展性主流模式的崛起**。`stitch-skills`、`superpowers`、`CLI-Anything` 以及更广泛的 MCP（Model Context Protocol）生态表明，社区已围绕可组合、标准化的技能而非单体式 Agent 设计达成共识。这一范式与 web2 的插件架构模式一脉相承，标志着 Agent 可扩展性的成熟。Google Labs（`stitch-skills`）与独立开发者的共同参与，说明这已是跨机构的广泛共识。

**第二波 — Agent 记忆与知识基础设施走向成熟。** 向量数据库和记忆系统现在是仓库数量最多、星总量最大的话题分类之一。从纯向量检索（Qdrant、LanceDB）向 **推理式检索**（PageIndex）、**知识图谱**（Graphify，153k ★）和 **持久化 Agent 记忆**（mem0、cognee、headroom）的演进表明，社区已认识到无状态的 RAG 无法满足生产级 Agent 的需求。`headroom` 等 Token 压缩工具（JSON 负载降低 60–95%）则直接回应了上下文成本高企这一核心瓶颈。

**第三波 — LLM 民主化与评测体系完善。** `minimind`（消费级硬件 2 小时训练模型）和 `opencompass`（100+ 评估数据集）共同勾勒出一个正在壮大的趋势：社区正在构建 **完全独立于大厂管控的模型训练、评测和部署工具链**。`LLMs-from-scratch`（109k ★）、`tiny-llm` 等教育导向项目的高人气说明，生态正在大力降低门槛，为下一代 AI 建设者铺路。

---

## 4. 社区热点

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — 今日 momentum 最高的 AI 基础设施项目（+1,046 ★）。其 550+ 数据提供商整合使其成为给 Agent 提供实时 Web 访问的事实标准。任何 Agent 框架都应考虑与其集成。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0) + [topoteretes/cognee](https://github.com/topoteretes/cognee)** — Agent 持久化记忆正从"加分项"变为"必备项"。这些项目提供生产就绪的记忆层，在低开销条件下显著提升 Agent 的跨会话连贯性。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 知识图谱驱动的代码理解正在获得关注（153k ★）。其确定性 AST 解析方法为需要精确、可解释推理的编码 Agent 提供了向量检索的有力替代方案。

- **[trycua/cua](https://github.com/trycua/cua)** — 计算机使用 Agent 基础设施尚处早期但至关重要。`cua` 提供了业界所需的开放沙箱和基准测试层，以推动社区从专有计算机使用实现中走出来。

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — LLM 训练民主化浪潮正在加速。让模型训练变得触手可及（数小时、消费级硬件即可完成）的项目具有重大战略意义——社区正在寻求摆脱 API 受控模型访问的依赖。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*