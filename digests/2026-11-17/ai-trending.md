# AI 开源趋势日报 2026-11-17

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-17 04:44 UTC

---

<think>The user wants me to translate an English technical report about AI Open Source Trends into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, project names, slugs, numbers, dates verbatim
4. Use natural technical Chinese appropriate for a Chinese developer newsletter

Let me translate section by section carefully:

Title: "AI Open Source Trends Report — 2026-11-17"
→ "AI 开源趋势报告 — 2026-11-17"

Introduction paragraph:
"From 15 trending repos and 82 topic-tagged repos, I filtered out non-AI projects (Docker management, historical maps, web frameworks) and retained 72 AI-relevant repositories for analysis."
→ "从 15 个热门仓库和 82 个话题标签仓库中，筛选掉非 AI 项目（Docker 管理、历史地图、Web 框架），保留 72 个 AI 相关仓库进行分析。"

Section headers need to be translated naturally.

Let me work through each section carefully:

**🔧 AI Infrastructure** → **🔧 AI 基础设施**

Table headers:
- Project → 项目
- Lang → 语言
- Stars (total / today) → Star（总计 / 今日）
- Summary → 摘要

Now let me translate each summary:

langchain-ai/langchain: "The agent engineering platform providing abstractions for building LLM-powered applications with chains, tools, and memory. Remains the dominant orchestration framework despite fragmented ecosystem competition."
→ "Agent 工程平台，为构建 LLM 应用提供 Chains、Tools 和 Memory 抽象层。尽管生态竞争碎片化，它仍是占主导地位的业务编排框架。"

ollama/ollama: "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models. 

The local inference standard for developers self-hosting LLMs without cloud dependencies."
→ "快速运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型。本地推理的行业标准，让开发者无需依赖云端即可自托管 LLM。"

huggingface/transformers: "Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio, and multimodal models. The foundational library for model loading and inference across the open-source ML ecosystem."
→ "Transformers：前沿机器学习模型的模型定义框架，覆盖文本、视觉、音频及多模态模型。作为开源机器学习生态系统中模型加载与推理的基础库，Hugging Face 提供了统一的标准接口。"

open-compass/opencompass: "LLM evaluation platform supporting 100+ datasets across knowledge, reasoning, coding, science, language, long-context, and safety. Critical for benchmark-driven model selection as evaluation rigor increases."
→ "LLM 评估平台，支持知识、推理、编码、科学、语言、长上下文和安全等领域 100+ 数据集。随着评估标准的日趋严格，对标驱动的模型选择变得尤为关键。"

NVIDIA/SkillEvaluator: "Multi-tier framework for evaluating AI agent skills with quality gates, semantic overlap detection, and live agent evaluation. Signals growing need for standardized skill quality assessment as agent marketplaces emerge."
→ "多层级 AI Agent 技能评估框架，涵盖质量门禁、语义重叠检测和实时 Agent 评估。随着 Agent 市场的兴起，这表明对技能质量评估标准化的需求正在增长。"

ChromeDevTools/chrome-devtools-mcp: "Chrome DevTools for coding agents — brings browser debugging into agent toolchains. Extends MCP protocol into frontend development workflows, a previously underserved agent capability gap."
→ "面向编码 Agent 的 Chrome 开发者工具 — 将浏览器调试能力集成到 Agent 工具链中，拓展了 MCP 协议在前端开发工作流中的应用，填补了此前 Agent 在该领域的能力空白。"

google-labs-code/stitch-skills: "Agent Skills library designed for Stitch MCP server compatibility with Claude Code, Cursor, and Gemini CLI. Demonstrates cross-platform agent skill portability beyond vendor lock-in."
→ "Agent 技能库，为 Stitch MCP 服务器与 Claude Code、Cursor、Codex 和 Gemini CLI 的兼容性而设计。展示了跨平台 Agent 技能的可移植性，打破供应商锁定。"

kajisho5/ffmpeg-skill: "42 FFmpeg tools with machine-readable contracts and an MCP server for coding agents. No cloud, no API keys — local video processing capability for agents that need multimodal content generation."
→ "42 个 FFmpeg 工具，配备机器可读契约和 MCP 服务器，为编码 Agent 提供本地视频处理能力，无需云端或 API 密钥，满足多模态内容生成需求。"

langchain4j/langchain4j: "Idiomatic Java library for LLM applications with unified API over providers, tool calling, MCP support, and RAG. Targets the enterprise JVM ecosystem largely underserved by Python-centric AI tooling."
→ "面向 LLM 应用的原生 Java 库，提供跨提供商统一 API、工具调用、MCP 支持和 RAG 能力。瞄准了以 Python 为中心的 AI 工具生态所忽视的企业级 JVM 市场。"

---

**🤖 AI Agents / Workflows** → **🤖 AI Agent / 工作流**

NousResearch/hermes-agent: "The agent that grows with you" — Nous Research's flagship agent framework with adaptive learning capabilities. The highest-starred pure agent framework, indicating strong community investment in autonomous agent paradigms.
→ "与你共同成长的 Agent" — Nous Research 的旗舰级 Agent 框架，具备自适应学习能力。纯 Agent 框架中 Star 数最高，表明社区对自主 Agent 范式的大力投入。

affaan-m/ECC: Agent harness performance optimization system with skills, instincts, memory, and security for Claude Code, Codex, and Cursor. The #1 starred project in this dataset — signals massive developer investment in agent reliability engineering.
→ 面向 Claude Code、Codex 和 Cursor 的 Agent 性能优化系统，具备技能、本能、记忆和安全机制。该数据集 Star 数第一，反映出开发者对 Agent 可靠性工程的大量投入。

Significant-Gravitas/AutoGPT: The original autonomous AI agent project, now evolved into accessible building blocks for everyone. Pioneer project that defined the modern agent framework category and maintains strong community momentum.
→ 最早的自主 AI Agent 项目，现已演变为面向所有人的开源构建模块。作为定义现代 Agent 框架类别的先驱项目，仍保持着强劲的社区发展势头。

browser-use/browser-use: Open-source Python library for AI browser agents with stealth browsers and hosted API. Bridges the gap between agent reasoning and real-world web interaction at scale.
→ 开源 Python 库，用于构建 AI 浏览器 Agent，支持隐身浏览器和托管 API。弥合了 Agent 推理与大规模真实网络交互之间的鸿沟。

langgenius/dify: Build Agentic workflows, RAG pipelines with rich AI model and tool support on a collaborative workspace. The leading open-source alternative to commercial workflow orchestration platforms.
→ 在协作工作空间中构建 Agentic 工作流和 RAG 管道，支持丰富的 AI 模型和工具。作为商业工作流编排平台的开源替代方案，领先于同类项目。

CopilotKit/CopilotKit: The Frontend Stack for Agents & Generative UI, makers of the AG-UI Protocol. Positioned as the standard for integrating generative AI into user-facing applications.
→ Agent 和生成式 UI 的前端技术栈，AG-UI 协议的制定者。定位为将生成式 AI 集成到用户面向应用中的标准方案。

google-research/paper-orchestra: Multi-agent framework for automated AI research paper writing — orchestrates multiple agents for literature review, hypothesis generation, and manuscript drafting. A novel application of multi-agent systems to scientific discovery.
→ 用于自动撰写 AI 研究论文的多 Agent 框架 — 协调多个 Agent 完成文献综述、假设生成和论文撰写。多 Agent 系统在科学发现中的创新应用。

mvanhorn/last30days-skill: AI agent skill that researches topics across Reddit, X, YouTube, HN, Polymarket, and web — synthesizes grounded summaries. Represents the emerging "agent-as-analyst" pattern for real-time market and sentiment intelligence.
→ 跨 Reddit、X、YouTube、HN、Polymarket 和全网研究主题的 AI Agent 技能，生成有据可查的摘要。代表了实时市场和情绪情报中新兴的"Agent 即分析师"模式。

backnotprop/plannotator: Agent workspace for shaping, deciding, planning, annotating, reviewing code, and sharing team feedback with agents. Bridges human collaboration and agent execution in a unified interface.
→ 用于塑造、决策、规划、注释、审查代码并与 Agent 共享团队反馈的 Agent 工作空间。在统一界面中桥接人类协作与 Agent 执行。

---

**📦 AI Applications** → **📦 AI 应用**

dream-num/univer: Build your own AI office with Univer Office SDK — editing, calculation, collaboration, and file processing for people and AI agents. Today's highest star-gaining project signals strong demand for AI-integrated productivity suites.
→ 使用 Univer Office SDK 构建自己的 AI 办公套件 — 支持人类和 AI Agent 的编辑、计算、协作和文件处理。今日 Star 增长最快的项目，表明市场对 AI 集成办公套件的强烈需求。

elementalsouls/Claude-BugHunter: Claude Code skill bundle for bug hunting and red-team work — 82 skills, 15 slash commands, 681 vulnerability patterns across 24 core vulnerability classes. A specialized agent application for security engineering.
→ 面向 bug 挖掘和红队工作的 Claude Code 技能包 — 82 项技能、15 个斜杠命令、681 个漏洞模式覆盖 24 个核心漏洞类别。面向安全工程的垂直 Agent 应用。

tradermonty/claude-trading-skills: Claude Code skills for equity investors — market analysis, technical charting, economic calendars, screeners, and strategy development. Democratizes quantitative finance capabilities for retail investors via agent tools.
→ 面向股票投资者的 Claude Code 技能 — 市场分析、技术图表、经济日历、筛选器和策略开发。通过 Agent 工具将量化金融能力民主化，让散户投资者也能使用。

alibaba/open-code-review: Battle-tested code review tool at Alibaba scale: deterministic pipelines + LLM Agent with line-level comments and multi-language security rules (NPE, thread-safety, XSS, SQL injection). Demonstrates enterprise-grade agent security tooling.
→ 阿里巴巴规模的实战代码审查工具：确定性流水线 + LLM Agent，提供逐行注释和多语言安全规则（空指针、线程安全、XSS、SQL 注入）。展示企业级 Agent 安全工具。

career-ops-hq/career-ops: Open-source AI job search agent — scans boards, scores jobs against CV, tailors resumes, covers letters, and tracks applications. The highest-starred vertical AI application in this dataset.
→ 开源 AI 求职 Agent — 扫描招聘平台、根据简历评分职位、定制简历和求职信、追踪申请状态。该数据集中 Star 数最高的垂直 AI 应用。

hugohe3/ppt-master: AI turns documents or topics into native PowerPoint decks with shapes, transitions, charts, and audio narration. Bridges document understanding and presentation generation for business users.
→ AI 将文档或主题转换为原生 PowerPoint 演示文稿，支持形状、过渡、图表和语音旁白。为商务用户架起文档理解与演示文稿生成的桥梁。

ZhuLinsen/daily_stock_analysis: LLM-powered multi-market stock analysis with real-time news, decision dashboard, and cost-free scheduled runs. Brings AI-driven financial intelligence to individual traders without expensive data subscriptions.
→ LLM 驱动的多市场股票分析，集成实时新闻、决策仪表盘和免费定时运行。为个人交易者带来 AI 驱动的金融智能，无需昂贵的数据订阅。

harry0703/MoneyPrinterTurbo: Generate HD short videos from a topic or keyword with automated AI workflow. High star count reflects strong developer interest in AI content generation pipelines.
→ 基于主题或关键词，通过自动化 AI 工作流生成高清短视频。高 Star 数反映了开发者对 AI 内容生成管道的浓厚兴趣。

TauricResearch/TradingAgents: Multi-Agent LLM Financial Trading Framework — combines multiple specialized agents for market analysis, decision-making, and execution. The most sophisticated open-source trading agent framework available.
→ 多 Agent LLM 金融交易框架 — 整合多个专业 Agent 进行市场分析、决策和执行。目前可用的最复杂的开源交易 Agent 框架。

---

**🧠 LLMs / Training** → **🧠 大语言模型 / 训练**

ollama/ollama and open-compass/opencompass appear in multiple sections but are essential for local model inference and evaluation, serving as foundational infrastructure for training and fine-tuning experimentation.

The next thinking covers additional AI resources: a tiny LLM project that teaches inference on Apple Silicon, an on-device LLM with X-Bit quantization, and a Home Assistant integration using local LLMs for smart home control.

**🔍 RAG / Knowledge** → **🔍 RAG / 知识**

open-webui/open-webui serves as the leading open-source ChatGPT alternative, offering a user-friendly AI interface that supports Ollama, OpenAI API, and local models with RAG capabilities while enabling full local deployment for privacy.

run-llama/llama_index provides document processing for AI applications, functioning as the standard framework for building RAG pipelines through its data structures and query engines. Graphify-Labs/graphify transforms codebases, docs, SQL schemas, and PDFs into queryable knowledge graphs, serving as a skill for multiple coding agents with deterministic AST parsing that requires no vector store. thedotmack/claude-mem enables persistent context across agent sessions by capturing actions, compressing them with AI, and injecting relevant history into future interactions. infiniflow/ragflow has evolved from an Agent-native RAG engine into broader context infrastructure, leveraging deep document understanding with configurable chunking strategies. mem0ai/mem0 provides drop-in memory infrastructure for AI agents with persistent context management in production applications. unclecode/crawl4ai serves as an Apache-licensed web crawler designed specifically for AI agents to extract structured data.

The ecosystem continues with milvus-io/milvus offering high-performance, cloud-native vector database capabilities for scalable approximate nearest neighbor search. qdrant/qdrant provides another vector database option optimized for the next generation of AI applications with cloud deployment support. lancedb/lancedb delivers an embedded retrieval library built for multimodal AI applications with a developer-friendly approach. VectifyAI/PageIndex challenges the vector database assumption by offering document indexing for reasoning-based RAG without traditional vector storage. topoteretes/cognee provides an open-source AI memory platform with persistent long-term capabilities.

headroomlabs-ai/headroom compresses tool outputs, logs, and RAG chunks before they reach the language model, reducing token usage by 20% for coding agents and 60-95% for JSON data. zilliztech/claude-context functions as a code search tool for Claude Code, making the entire codebase available as context for coding agents. siyuan-note/siyuan offers a privacy-first, self-hosted knowledge workspace enabling human and AI agent collaboration.

**3. Trend Signal Analysis** reveals a dominant pattern: the explosive growth of Agent Skills frameworks shows convergence across Claude Code, Codex, Cursor, and Gemini CLI, each being extended through standardized skill packages. This "skills marketplace" pattern signals the AI agent ecosystem is maturing from monolithic agents toward composable, specialized tools developers can mix-and-match.

The MCP (Model Context Protocol) is becoming infrastructure, not isolated experiments—the Chrome DevTools MCP and FFmpeg MCP server represent a growing ecosystem of tools exposing standardized interfaces for agents, mirroring how npm democratized JavaScript libraries.

Memory infrastructure has emerged as a distinct high-growth category with mem0, cognite, claude-mem, and headroom occupying a specific niche around managing what agents remember. This category barely existed 18 months ago and now commands 300K+ combined stars, indicating that persistent agent memory is transitioning from novelty to production requirement.

Vertical AI applications are gaining disproportionate traction with trading agents, career automation, and productivity suites showing strong momentum, suggesting developers are moving beyond "building agents" to "deploying agents" in specific professional contexts.

The community is converging around key projects: ECC has emerged as the highest-starred project and is becoming the de facto baseline for reliable coding agent deployments, likely influencing enterprise agent standards. NVIDIA/SkillEvaluator signals institutional confidence in the skills paradigm—quality evaluation is the unglamorous but essential infrastructure this ecosystem needs. univer is today's fastest-rising AI project, signaling that "AI-native office suites" are moving from concept to community adoption, with its extensible SDK potentially becoming the foundation for vertical AI office solutions. The agent memory stack battle is underway among mem0, cognite, and claude-mem, each taking different approaches that developers should evaluate for production use cases.

The convergence of browser-use and MCP expansion is creating a new category of "web-capable agents" that bridges agent reasoning with live web interfaces through browser automation and standardized tool protocols.
</think>


# AI 开源趋势报告 — 2026-11-17

---

## Step 1: 筛选后的 AI/ML 项目

从 15 个热门仓库和 82 个话题标签仓库中，筛选掉非 AI 项目（Docker 管理、历史地图、Web 框架），保留 **72 个 AI 相关仓库**进行分析。

---

## Step 2: 分类表格

### 🔧 AI 基础设施

| 项目 | 语言 | Star（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,732 | 为构建 LLM 应用提供 Chains、Tools 和 Memory 抽象层的 Agent 工程平台。尽管生态竞争碎片化，它仍是占主导地位的业务编排框架。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 187,290 | 快速运行 Llama、Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型。本地推理的行业标准，让开发者无需依赖云端即可自托管 LLM。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,096 | Transformers：前沿机器学习模型的模型定义框架，覆盖文本、视觉、音频及多模态模型。开源 ML 生态中模型加载和推理的基础库。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,597 | LLM 评估平台，支持知识、推理、编码、科学、语言、长上下文和安全等领域 100+ 数据集。随着评估标准日趋严格，对标驱动的模型选择变得尤为关键。 |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Python | 873 (+873) | 多层级 AI Agent 技能评估框架，涵盖质量门禁、语义重叠检测和实时 Agent 评估。随着 Agent 市场兴起，对技能质量标准化评估的需求日益增长。 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 841 (+841) | 面向编码 Agent 的 Chrome 开发者工具 — 将浏览器调试能力集成到 Agent 工具链中。将 MCP 协议延伸至前端开发工作流，填补了此前 Agent 在该领域的能力空白。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 529 (+529) | Agent 技能库，为 Stitch MCP 服务器与 Claude Code、Cursor 和 Gemini CLI 的兼容性而设计。展示了跨平台 Agent 技能的可移植性，突破供应商锁定。 |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 367 (+367) | 42 个 FFmpeg 工具，配备机器可读契约和 MCP 服务器，面向编码 Agent。不依赖云端、无需 API Key — 为需要多模态内容生成的 Agent 提供本地视频处理能力。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,412 | 面向 LLM 应用的原生 Java 库，提供跨提供商统一 API、工具调用、MCP 支持和 RAG。瞄准了以 Python 为中心的 AI 工具生态所忽视的企业级 JVM 市场。 |

---

### 🤖 AI Agent / 工作流

| 项目 | 语言 | Star（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 263,974 | "与你共同成长的 Agent" — Nous Research 的旗舰级 Agent 框架，具备自适应学习能力。纯 Agent 框架中 Star 数最高，表明社区对自主 Agent 范式的大力投入。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 304,744 | 面向 Claude Code、Codex 和 Cursor 的 Agent 性能优化系统，具备技能、本能、记忆和安全机制。该数据集 Star 数第一 — 表明开发者正大力投入 Agent 可靠性工程。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 188,068 | 最早的自主 AI Agent 项目，现已演变为面向所有人的可组合构建模块。作为定义现代 Agent 框架类别的先驱项目，仍保持着强劲的社区发展势头。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 121,251 | 面向 AI 浏览器 Agent 的开源 Python 库，支持隐身浏览器和托管 API。弥合了 Agent 推理与大规模真实网络交互之间的鸿沟。 |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,313 | 在协作工作空间中构建 Agentic 工作流和 RAG 管道，支持丰富的 AI 模型和工具。作为商业工作流编排平台的开源替代方案，居于领先地位。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,749 | Agent 和生成式 UI 的前端技术栈，AG-UI 协议的制定者。定位为将生成式 AI 集成到用户面向应用中的标准方案。 |
| [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | Python | 313 (+313) | 用于自动撰写 AI 研究论文的多 Agent 框架 — 协调多个 Agent 完成文献综述、假设生成和论文撰写。多 Agent 系统在科学发现中的创新应用。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 135 (+135) | 跨 Reddit、X、YouTube、HN、Polymarket 和全网研究主题的 AI Agent 技能，生成有据可查的摘要。代表了实时市场和情绪情报中新兴的"Agent 即分析师"模式。 |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | 696 (+696) | 用于塑造、决策、规划、注释、审查代码并与 Agent 共享团队反馈的 Agent 工作空间。在统一界面中桥接人类协作与 Agent 执行。 |

---

### 📦 AI 应用

| 项目 | 语言 | Star（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 1,828 (+1,828) | 使用 Univer Office SDK 构建自己的 AI 办公套件 — 支持人类和 AI Agent 的编辑、计算、协作和文件处理。今日 Star 增长最快的项目，表明市场对 AI 集成办公套件的强烈需求。 |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 1,094 (+1,094) | 面向 bug 挖掘和红队工作的 Claude Code 技能包 — 82 项技能、15 个斜杠命令、681 个漏洞模式覆盖 24 个核心漏洞类别。面向安全工程的垂直 Agent 应用。 |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 837 (+837) | 面向股票投资者的 Claude Code 技能 — 市场分析、技术图表、经济日历、筛选器和策略开发。通过 Agent 工具将量化金融能力民主化，让散户投资者也能使用。 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 951 (+951) | 阿里巴巴规模的实战代码审查工具：确定性流水线 + LLM Agent，提供逐行注释和多语言安全规则（空指针、线程安全、XSS、SQL 注入）。展示企业级 Agent 安全工具。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 83,145 | 开源 AI 求职 Agent — 扫描招聘平台、根据简历评分职位、定制简历和求职信、追踪申请状态。该数据集中 Star 数最高的垂直 AI 应用。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 77,617 | AI 将文档或主题转换为原生 PowerPoint 演示文稿，支持形状、过渡、图表和语音旁白。为商务用户架起文档理解与演示文稿生成的桥梁。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 72,871 | LLM 驱动的多市场股票分析，集成实时新闻、决策仪表盘和免费定时运行。为个人交易者带来 AI 驱动的金融智能，无需昂贵的数据订阅。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 144,065 | 基于主题或关键词，通过自动化 AI 工作流生成高清短视频。高 Star 数反映了开发者对 AI 内容生成管道的浓厚兴趣。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 122,875 | 多 Agent LLM 金融交易框架 — 整合多个专业 Agent 进行市场分析、决策和执行。目前可用的最复杂的开源交易 Agent 框架。 |

---

### 🧠 大语言模型 / 训练

| 项目 | 语言 | Star（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 187,290 | 已在基础设施分类下列出 — 对本地模型推理至关重要，作为训练和微调实验的基础设施。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,597 | LLM 评估平台，支持知识、推理、编码和安全等领域 100+ 数据集。对模型选择和训练质量评估不可或缺。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,747 | 在 Apple Silicon 上学习 LLM 推理系统 — 从零构建一个精简版 vLLM + Qwen。教育项目，向系统工程师普及 ML 基础设施中的推理优化知识。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 320 | 基于 X-Bit 量化技术的端侧 LLM 推理。代表边缘 AI 趋势：在资源受限设备上运行有能力的模型，无需云端依赖。 |
| [acon96/home-llm](https://github.com/acon96/home-llm) | Python | 1,498 | Home Assistant 与本地 LLM 的集成，控制智能家居设备。弥合了有能力的开源 LLM 与注重隐私的 IoT 自动化之间的鸿沟。 |

---

### 🔍 RAG / 知识

| 项目 | 语言 | Star（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 158,869 | 面向 Ollama、OpenAI API 和本地模型的易用 AI 界面，支持 RAG 能力。作为支持完全本地部署隐私的开源 ChatGPT 替代方案，居于领先地位。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,925 | 面向 AI 的文档处理平台 — 构建 RAG 管道的标准框架，提供 LlamaIndex 数据结构和查询引擎。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 149,138 | 将代码库、文档、SQL 结构定义和 PDF 转换为可查询的知识图谱。面向 Claude Code、Cursor、Codex 和 Gemini CLI 的技能，通过本地确定性 AST 解析实现 — 无需向量数据库。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 117,754 | 跨会话持久化上下文 — 捕获 Agent 行为、AI 压缩、注入相关上下文到后续会话。兼容 Claude Code、Codex、Gemini 等多平台。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,275 | 从 Agent 原生 RAG 引擎成长为上下文基础设施 — 具备深度文档理解能力，支持可配置的 Chunk 策略。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,088 | AI Agent 的记忆层 — 为生产级 AI 应用提供即插即用的持久化上下文基础设施。69K Star 的新兴分类，表明 Agent 状态管理正在从尝鲜走向生产必需。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,458 | Apache-2.0 许可的 AI Agent 网页爬虫 — 提取 RAG 管道的结构化数据。支持云端 API 和自托管部署两种模式。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,676 | 高性能、云原生的向量数据库，支持可扩展的近似最近邻搜索。该生态中 Star 数最高的专用向量数据库。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,598 | 面向下一代 AI 的高性能向量数据库，提供云端服务。以速度和混合搜索能力著称。 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | Rust | 11,913 | 面向多模态 AI 的开发者友好型嵌入式检索库 — 嵌入式部署设计，强调简洁性。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 40,452 | 面向无向量、推理式 RAG 的文档索引 — 挑战"向量数据库是检索必需"这一假设。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,356 | 面向 Agent 的开源 AI 记忆平台，使用小模型实现持久化长期记忆。与 mem0 在 Agent 记忆领域形成竞争。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,859 | 在到达 LLM 前压缩工具输出、日志和 RAG 块 — 编码 Agent 节省 20% Token，JSON 数据节省 60-95%。生产级 RAG 管道的成本优化利器。 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | TypeScript | 12,694 | 面向 Claude Code 的代码搜索 MCP — 将整个代码库作为任意编码 Agent 的上下文。将 RAG 原则应用于软件开发工作流。 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 47,266 | 隐私优先、本地部署的知识工作空间，人类和 AI Agent 在此协作。不断增长的 Star 数反映了市场对私有化 AI 知识管理的需求。 |

---

## 3. 趋势信号分析

**今日数据中最主要的信号是 Agent Skills 框架的爆发式增长。** 从热门仓库中可以观察到一个趋同现象：Claude Code（Anthropic）、Codex（OpenAI）、Cursor 和 Gemini CLI 都在通过标准化的技能包进行扩展 — 交易策略、bug 挖掘、FFmpeg 操作、研究综述、Chrome DevTools。这种"技能市场"模式表明 AI Agent 生态正在从单体式 Agent 向可组合的专业化工具演进，开发者可以自由混搭。

**MCP（Model Context Protocol）正在成为基础设施。** Chrome DevTools MCP 和 FFmpeg MCP 服务器并非孤立的实验 — 它们代表着一个不断壮大的工具生态系统，为 Agent 提供标准化接口。这让人想起包管理器的早期演进：正如 npm 让 JavaScript 库民主化，MCP 也有望让 Agent 能力民主化。

**记忆基础设施已崛起为一个独立的高增长分类。** mem0、cognee、claude-mem 和 headroom 占据了一个明确的细分领域：管理 Agent 跨会话记住的内容。这个分类在 18 个月前几乎不存在，如今已积累了 30 万+ 的总 Star 数 — 表明持久化 Agent 记忆正在从尝鲜走向生产必需。

**垂直 AI 应用正在获得超比例的发展动力。** 交易 Agent（TradingAgents、Vibe-Trading、daily_stock_analysis）、职业自动化（career-ops）和办公套件（univer）都展现出强劲势头。这表明开发者正从"构建 Agent"转向"在特定专业场景中部署 Agent"。

---

## 4. 社区热点

- **[ECC](https://github.com/affaan-m/ECC)** — 数据集中 Star 数最高的项目；其 Agent 性能优化系统正在成为可靠编码 Agent 部署的事实基准。关注其架构对企业 Agent 标准的潜在影响。

- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** — 随着 Skills 框架数量激增，质量评估是这个生态系统中不起眼但至关重要的基础设施。NVIDIA 的背书表明业界对 Skills 范式充满信心。

- **[univer](https://github.com/dream-num/univer)** — 今日涨势最快的 AI 项目；表明"AI 原生办公套件"正从概念走向社区采用。其可扩展 SDK 方案有望成为垂直 AI 办公解决方案的基础。

- **Agent Memory 技术栈（mem0 + cognite + claude-mem）** — Agent 记忆主导权之争正在进行。每家采取不同策略：外部 API（mem0）、本地小模型（cognee）、会话持久化（claude-mem）。开发者应为生产场景评估这三者。

- **[browser-use](https://github.com/browser-use/browser-use) + MCP 扩展** — 浏览器自动化与标准化工具协议（MCP）的结合正在催生一个新类别：具备网络能力的 Agent。这弥合了 Agent 推理与真实网络环境之间的鸿沟。

---

*报告基于 GitHub Trending 数据生成 — 2026-11-17*

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*