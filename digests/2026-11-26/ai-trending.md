# AI 开源趋势日报 2026-11-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-26 04:19 UTC

---

<think>The user wants me to translate an English technical report about AI Open Source Trends into Simplified Chinese. Let me translate it carefully, following all the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, code spans, numbers, dates verbatim
4. Keep project names, slugs, etc. in original form
5. Use natural technical Chinese register

Let me translate section by section:

# AI Open Source Trends Report — 2026-11-26

# AI 开源趋势报告 — 2026-11-26

---

## 1. Today's Highlights

## 1. 今日亮点

The AI open-source ecosystem is experiencing a decisive shift toward **agent-native tooling**. Three major trends dominate today's activity: First, specialized agent *skills* and *frameworks* are proliferating rapidly — projects like Superpowers, CLI-Anything, and Stitch-Skills define how autonomous agents execute complex, multi-step tasks. Second, **knowledge infrastructure for agents** is a breakout category, with Firecrawl (1,135★ today) and Graphify (153K★ total) addressing the fundamental need for agents to access, crawl, and reason over external data. Third, **democratized LLM training** continues gaining momentum; MiniMind's "train a 64M model in 2 hours" narrative has resonated strongly (826★ today), reflecting developer appetite for accessible, from-scratch training resources. Meanwhile, the explosion of AI coding agent plugins (Cursor, Claude Code, Codex) and compliance/workflow automation tools signals that the ecosystem is maturing beyond experimentation into production-oriented tooling.

AI 开源生态正在经历一场决定性的转变，向 **Agent 原生工具** 方向演进。今日活动由三大主流趋势主导：其一，专业化的 Agent *技能* 和 *框架* 正在快速涌现——Superpowers、CLI-Anything、Stitch-Skills 等项目定义了自主 Agent 如何执行复杂的多步骤任务。

其次，**Agent 知识基础设施** 是一个突破性品类，Firecrawl（今日 1,135★）和 Graphify（总计 153K★）解决了 Agent 访问、抓取和推理外部数据的根本需求。其三，**LLM 训练平民化** 持续积蓄势能；MiniMind 的"2 小时训练 64M 模型"叙事引发了强烈共鸣（今日 826★），反映出开发者对可及性强的从零训练资源的渴求。与此同时，AI 编程 Agent 插件（Cursor、Claude Code、Codex）和合规/工作流自动化工具的爆发式增长表明，生态正在从实验阶段迈向生产导向的成熟阶段。 AI 开源生态系统正在经历一个决定性的转变，向 **Agent 原生工具** 方向演进。今日活动由三大主流趋势主导：专业化 Agent *技能* 和 *框架* 正在快速涌现，如 Superpowers、CLI-Anything 和 Stitch-Skills 等项目定义了自主 Agent 如何执行复杂的多步骤任务；同时，**Agent 知识基础设施** 成为一个突破性品类，Firecrawl（今日 1,135★）和 Graphify（总计 153K★）满足了 Agent 访问外部知识的关键需求。

**LLM 训练平民化** 也在加速推进，MiniMind 的"2 小时训练 64M 模型"方案引发了强烈共鸣（今日 826★），反映出开发者对从零开始训练资源的需求。AI 编程 Agent 插件和工作流自动化工具的爆发式增长则表明，整个生态正在从实验阶段向生产级工具转型。 The ecosystem is clearly moving beyond experimentation toward production-grade tools, with the surge in AI coding agents, workflow automation, and compliance solutions all pointing to this maturation. | openvinotoolkit/openvino | C++ | 0 (191 today) | Intel's open-source toolkit for optimizing and deploying AI inference across CPU, GPU, and edge devices; critical for production deployment pipelines. |

| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | 0 (191 today) | Intel 的开源工具包，用于在 CPU、GPU 和边缘设备上优化和部署 AI 推理，对生产部署流水线至关重要。 |
| firecrawl/firecrawl | TypeScript | 210,196 (1,135 today) | Unified API aggregating 550+ data providers for AI agent knowledge retrieval; transforms the web into agent-accessible structured data. |

| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 210,196 (1,135 today) | 统一 API，整合 550+ 数据提供商，为 AI Agent 提供知识检索能力；将网络转化为 Agent 可访问的结构化数据。 |
| ollama/ollama | Go | 188,149 | Local LLM runtime enabling one-command deployment of models including DeepSeek, Qwen, and Gemma; foundational for local-first AI development. |

| [ollama/ollama](https://github.com/ollama/ollama) | Go | 188,149 | 本地 LLM 运行时，一键部署 DeepSeek、Qwen、Gemma 等模型；是本地优先 AI 开发的基础设施。 |
| langchain-ai/langgraph | Python | 45,431 | Build resilient, stateful multi-actor applications atop LLMs; addresses agent reliability in production — a top priority for the community. |

| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 45,431 | 基于 LLM 构建弹性、有状态的多角色应用；解决生产环境中 Agent 可靠性的核心问题——这是社区的首要关注点。 |

### 🤖 AI Agents / Workflows

### 🤖 AI Agent / 工作流

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| elementalsouls/Claude-BugHunter | Python | 0 (1,652 today) | 85-skills bundle for Claude Code covering red-team work, 24 vulnerability classes, and enterprise attack matrices; today's #1 star gainer. |

| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 0 (1,652 today) | 面向 Claude Code 的 85 个技能包，涵盖红队工作、24 个漏洞类别和企业攻击矩阵；今日 Star 增长量第一。 |
| obra/superpowers | Shell | 0 (903 today) | Agentic skills framework and software development methodology; formalizes how agents should plan, execute, and chain capabilities. |

| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (903 today) | Agent 技能框架和软件开发方法论；将 Agent 的规划、执行和能力串联进行了形式化定义。 |
| HKUDS/CLI-Anything | Python | 0 (1,106 today) | Makes all software "agent-native" — enables AI agents to interact natively with any CLI tool; strong momentum at 1,106★ today. |

| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0 (1,106 today) | 让所有软件都具备"Agent 原生"能力——使 AI Agent 能够原生交互任意 CLI 工具；今日增长强劲，达到 1,106★。 |
| google-labs-code/stitch-skills | TypeScript | 0 (355 today) | Standardized skill library for the Stitch MCP server; compatible with Claude Code, Cursor, and Gemini CLI — signals cross-platform skill interoperability. |

| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (355 today) | Stitch MCP 服务器的标准化技能库；兼容 Claude Code、Cursor 和 Gemini CLI——预示着跨平台技能互操作性的发展方向。 |
| CopilotKit/CopilotKit | TypeScript | 38,982 | The frontend stack for agents and generative UI, including the AG-UI protocol; bridges agent backends with React/Angular/Slack frontends. |

| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,982 | Agent 和生成式 UI 的前端技术栈，包含 AG-UI 协议；桥接 Agent 后端与 React/Angular/Slack 前端。 |
| NousResearch/hermes-agent | Python | 266,148 | The highest-starred AI agent repo in today's dataset; positioned as an agent that grows with the user, reflecting adaptive agent architectures. |

| [ NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 266,148 | 今日数据集中 Star 最多的 AI Agent 仓库；定位为随用户成长而进化的 Agent，映射出自适应 Agent 架构的演进方向。 |
| HKUDS/nanobot | Python | 50,341 | Lightweight open-source personal agent from HKUDS; designed for easy deployment and extensibility. |

| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 50,341 | 香港大学数据科学实验室开发的轻量级开源个人 Agent；设计目标是易于部署和高度可扩展。 |

### 📦 AI Applications

### 📦 AI 应用

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | --- | :--- |
| toeverything/AFFiNE | TypeScript | 0 (574 today) | Privacy-first knowledge base merging planning, sorting, and creating — direct Notion/Miro competitor with AI collaboration features. |

| [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | TypeScript | 0 (574 today) | 隐私优先的知识库，融合规划、整理和创作功能——Notion/Miro 的直接竞争对手，并具备 AI 协作特性。 |
| zhouxiaoka/autoclip | Python | 0 (880 today) | AI-powered video clipping tool that auto-generates short-form content for TikTok, YouTube Shorts, and Instagram Reels from long videos. |

| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 0 (880 today) | AI 驱动的视频剪辑工具，能够从长视频自动生成 TikTok、YouTube Shorts 和 Instagram Reels 的短视频内容。 |
| TauricResearch/TradingAgents | TypeScript | 123,786 | Agentic finance research platform; combines multi-agent orchestration with financial data for automated investment analysis. |

| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TypeScript | 123,786 | Agent 化金融研究平台；将多 Agent 编排与金融数据结合，实现自动化投资分析。 |
| hugohe3/ppt-master | Python | 80,257 | AI-driven PowerPoint generation from documents — native shapes, charts, animations, and audio narration; targets enterprise productivity. |

| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 80,257 | AI 驱动的文档转 PPT 生成——支持原生形状、图表、动画和语音旁白；面向企业办公场景。 |
| career-ops-hq/career-ops | JavaScript | 84,901 | Open-source AI job search agent that scores roles against CVs, generates ATS-friendly resumes, and tracks applications — runs locally in coding agents. |

| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 84,901 | 开源 AI 求职 Agent，根据简历评估职位匹配度，生成 ATS 友好简历并追踪申请进度——可在编码 Agent 环境中本地运行。 |

### 🧠 LLMs / Training

### 🧠 大语言模型 / 训练

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| jingyaogong/minimind | Python | 71,125 (826 today) | Train a 64M LLM from scratch in 2 hours; has become the definitive entry point for developers learning LLM training mechanics. |

| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 71,125 (826 today) | 2 小时从零训练 64M LLM；已成为开发者学习 LLM 训练机制的首选入门资源。 |
| rasbt/LLMs-from-scratch | Jupyter Notebook | 109,062 | Step-by-step ChatGPT-like LLM implementation in PyTorch; one of the most-starred ML educational resources, widely referenced in the community. |

| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 109,062 | PyTorch 从零实现类 ChatGPT LLM 的逐步教程；Star 最多的 ML 教育资源之一，在社区中被广泛引用。 |
| huggingface/transformers | Python | 169,340 | The standard model-definition framework for state-of-the-art ML across text, vision, audio, and multimodal tasks; the backbone of open-source AI. |

| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,340 | 涵盖文本、视觉、音频和多模态任务的最前沿 ML 标准模型定义框架；是开源 AI 的基石。 |
| open-compass/opencompass | Python | 7,644 | Comprehensive LLM evaluation platform supporting 100+ datasets and models from OpenAI, Anthropic, DeepSeek, and Qwen; essential for benchmarking. |

| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,644 | 全面的 LLM 评测平台，支持 100+ 数据集和 OpenAI、Anthropic、DeepSeek、Qwen 等模型；是基准评测的必备工具。 |
| ultralytics/ultralytics | Python | 63,757 | YOLO object detection, segmentation, and classification; maintains the strongest momentum in computer vision tooling. |

| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 63,757 | YOLO 目标检测、分割和分类；在计算机视觉工具领域保持着最强的发展势能。 |

### 🔍 RAG / Knowledge

### 🔍 RAG / 知识

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| Graphify-Labs/graphify | Python | 153,450 | Transforms codebases, docs, SQL schemas, and PDFs into queryable knowledge graphs; offers AST-based parsing with fully explained edges — no vector store required. |

| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 153,450 | 将代码库、文档、SQL schema 和 PDF 转化为可查询的知识图谱；提供基于 AST 的解析，全链路可解释——无需向量数据库。 |
| infiniflow/ragflow | Go | 94,730 | Agent-native RAG engine evolved into context infrastructure; supports deep document understanding and structured retrieval pipelines. |

| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,730 | Agent 原生 RAG 引擎，已演化为上下文基础设施；支持深度文档理解和结构化检索流水线。 |
| mem0ai/mem0 | Python | 69,484 | The memory layer for AI agents — persistent, production-ready context that adapts across sessions; addresses long-standing agent memory challenges. |

| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,484 | AI Agent 的记忆层——持久化、可投入生产的上下文，跨会话自适应；直击 Agent 记忆难题。 |
| milvus-io/milvus | Go | 46,743 | Cloud-native vector database built for massive-scale ANN search; the most deployed open-source vector database in production environments. |

| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,743 | 云原生向量数据库，专为大规模 ANN 检索构建；生产环境中部署最广泛的开源向量数据库。 |
| topoteretes/cognee | Python | 33,622 | Open-source AI memory platform enabling persistent long-term memory using small models; reduces token costs while maintaining agent continuity. |

| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,622 | 开源 AI 记忆平台，通过小模型实现持久化长期记忆；在保持 Agent 连续性的同时降低 Token 成本。 |
| qdrant/qdrant | Rust | 35,714 | High-performance, massive-scale vector database in Rust; known for speed and cloud-native scalability for next-generation AI applications. |

| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,714 | Rust 编写的高性能、大规模向量数据库；以速度和云原生可扩展性著称，适用于下一代 AI 应用。 |
| langgenius/dify | Python | 161,925 | Build Agentic workflows and RAG pipelines with rich model/tool support; bridges prototype to production with collaborative workspace features. |

| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,925 | 构建 Agent 工作流和 RAG 流水线，支持丰富的模型和工具；通过协作工作区特性连接原型到生产的全流程。 |

---

## 3. Trend Signal Analysis

## 3. 趋势信号分析

Today's GitHub activity reveals three interconnected macro-trends reshaping the AI open-source landscape:

今日 GitHub 活动揭示了重塑 AI 开源格局的三个相互关联的宏观趋势：

**Agent Skills as a First-Class Primitive.** The most striking signal is the emergence of *agent skills* as a dominant architectural pattern. Projects like Superpowers, CLI-Anything, Stitch-Skills, and Claude-BugHunter are not monolithic agents — they are modular skill bundles that agents compose at runtime. This mirrors the shift from monolithic apps to microservices: agents are becoming orchestration platforms, and skills are the deployable units. The community is rapidly standardizing skill formats (e.g., the Agent Skills open standard referenced in Stitch-Skills), which suggests a future where skills are pip-installed into agents the way npm packages are installed into applications.

**Agent 技能成为一等公民。** 最引人注目的信号是 *Agent 技能* 作为主导架构模式的崛起。Superpowers、CLI-Anything、Stitch-Skills、Claude-BugHunter 等项目并非单体 Agent，而是 Agent 运行时组合调用的模块化技能包。这与单体应用向微服务演进的轨迹如出一辙：Agent 正在成为编排平台，技能成为可部署单元。社区正在快速推进技能格式的标准化（如 Stitch-Skills 中提到的 Agent Skills 开放标准），这预示着一个技能像 npm 包安装进应用一样 pip 安装进 Agent 的未来。

**Knowledge Infrastructure Convergence.** RAG and knowledge management tools are consolidating around *agent-native* paradigms. Firecrawl's "knowledge infrastructure to make your agents smarter" positioning — coupled with its 1,135★ single-day gain — signals that raw web crawling is giving way to structured, multi-provider knowledge APIs. Graphify's knowledge graph approach (153K★) and RAGFlow's "context infrastructure" evolution indicate the community is moving beyond simple vector retrieval toward richer, graph-structured, and deterministic knowledge representations.

**知识基础设施加速收敛。** RAG 和知识管理工具正在向 *Agent 原生* 范式聚合。Firecrawl "让 Agent 更智能的知识基础设施" 的定位——加上单日 1,135★ 的增长——预示着原始网页抓取正在让位于结构化、多提供商的知识 API。Graphify 的知识图谱方案（153K★）和 RAGFlow 向"上下文基础设施"的演进表明，社区正在从简单向量检索走向更丰富的图结构化和确定性知识表示。

**Democratization of Foundation Model Training.** MiniMind's viral "2-hour LLM training" narrative (71K★ total, 826★ today) combined with rasbt/LLMs-from-scratch (109K★) shows that educational tooling for training LLMs from scratch is a major community need. This aligns with the broader trend of making AI more accessible — not just consuming APIs, but understanding and modifying the underlying models.

**基础模型训练走向平民化。** MiniMind 的刷屏级"2 小时 LLM 训练"叙事（总计 71K★，今日 826★）结合 rasbt/LLMs-from-scratch（109K★），表明面向从零训练 LLMs 的教育工具是社区的核心需求。这与 AI 普惠化的大趋势一致——不仅仅是消费 API，而是深入理解并改造底层模型。

---

## 4. Community Hot Spots

## 4. 社区热点

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — Today's fastest-growing AI project (1,652★). Its 85-skill red-team bundle signals that *AI security tooling* is transitioning from research to open-source community tooling; developers building agents should monitor this space closely for vulnerability patterns.

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — 今日增长最快的 AI 项目（1,652★）。其 85 个技能的红队工具包表明，*AI 安全工具* 正在从学术研究走向开源社区化开发；构建 Agent 的开发者应密切关注其中的漏洞模式。

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** — With 1,106★ in a single day, this project codifies a critical pattern: making existing CLI software agent-native. Watch for this to become the standard approach for agent-to-tool integration across the ecosystem.

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** — 单日 1,106★ 的增长，该项目确立了一个关键模式：将现有 CLI 软件 Agent 原生化。关注它成为生态系统中 Agent-工具集成标准方案的可能性。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 153K★ and growing, this project represents the most mature open-source approach to replacing vector-based RAG with deterministic AST-parsed knowledge graphs. If you are building RAG systems, this is the direction to evaluate for production reliability.

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 153K★ 且持续增长，该项目代表了用确定性 AST 解析知识图谱替代向量 RAG 的最成熟开源方案。如果你在构建 RAG 系统，这是评估生产可靠性的方向。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Solving the persistent memory problem for agents with 69K★. As multi-session agent applications scale, memory infrastructure becomes the linchpin; this project is the reference implementation to watch.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — 69K★，解决 Agent 持久记忆难题。随着多会话 Agent 应用规模扩大，记忆基础设施成为关键支点；该项目是值得跟踪的参考实现。

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — The entry point for developers who want to understand LLM training end-to-end. Its 2-hour training narrative has made it a community touchstone; expect it to spawn a wave of derivative training tutorials and fine-tuning tools.

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — 面向希望端到端理解 LLM 训练的开发者入门资源。其 2 小时训练叙事已成为社区标杆；预计将催生大量衍生训练教程和微调工具。</think>



---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*