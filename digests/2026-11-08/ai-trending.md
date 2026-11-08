# AI 开源趋势日报 2026-11-08

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-08 01:45 UTC

---

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me carefully translate it while maintaining all the formatting, tables, links, and technical accuracy.

Let me go through this systematically:

1. Title and sections
2. Tables - need to keep the structure
3. All project names and URLs stay as-is
4. Technical terminology should use natural Chinese technical terms
5. Preserve emoji
6. Keep all formatting

Let me translate section by section:

**Title:** AI开源趋势报告 — 2026年11月8日

**Step 1: AI Relevance Filter**

The following non-AI projects have been excluded from today's analysis:
- prometheus/prometheus — monitoring/time-series DB
- sherlock-project/sherlock — OSINT username lookup
- astral-sh/ruff — Python linter/formatter
- tailwindlabs/tailwindcss — CSS framework
- mbillow/localthings — Home Assistant integration
- zed-industries/zed — code editor

All remaining repositories demonstrate direct AI/ML relevance through agent frameworks, LLM tooling, RAG pipelines, or AI application layers.

---

**Step 2: Categorized Project Overview**

### 🔧 AI Infrastructure

Let me translate all the project summaries and descriptions:

- ollama/ollama: Local LLM inference engine with native support for Kimi, GLM, MiniMax, DeepSeek, Qwen, and Gemma. Remains the dominant choice for self-hosted model serving with a lightweight, zero-config footprint.
→ 本地LLM推理引擎，原生支持Kimi、GLM、MiniMax、DeepSeek、Qwen和Gemma。以轻量级、零配置的特性，成为自托管模型服务的首选方案。

- huggingface/transformers: The canonical model-definition framework for state-of-the-art models across text, vision, audio, and multimodal domains. Still the foundational library for both inference and training in the open-source ML ecosystem.


→ 文本、视觉、音频及多模态领域最先进模型的标准模型定义框架，仍是开源ML生态中推理和训练的基础库。

- run-llama/llama_index: Document processing and retrieval-augmented generation platform purpose-built for LLM applications. Provides the data ingestion and query pipeline backbone for thousands of production deployments.
→ 专为LLM应用设计的文档处理与检索增强生成平台，为数千个生产部署提供数据摄取和查询管道的基础架构。

- langchain-ai/langchain: The agent engineering platform offering composable primitives for chaining LLMs, tools, and memory. Today's second-highest starred repo in the AI topic corpus, demonstrating sustained developer investment in agentic application patterns.
→ 智能体工程平台，提供可组合的LLM、工具和记忆链接原语。该项目在AI主题星标榜中排名第二，体现了开发者对智能体应用模式的持续投入。

- langchain4j/langchain4j: Idiomatic Java/JVM library for LLM-powered applications, offering unified API over providers and vector stores with native MCP tool-calling support. Bridges the enterprise Java ecosystem (Quarkus, Spring Boot) into the AI tooling landscape.
→ 面向LLM应用的原生Java/JVM库，提供跨提供商和向量存储的统一API，支持MCP工具调用原生特性，将企业Java生态（Quarkus、Spring Boot）与AI工具链连接起来。

- 0xPlaygrounds/rig: Build modular and scalable LLM applications in Rust, targeting systems-level performance and memory safety for production-grade AI pipelines.
→ 用Rust构建模块化、可扩展的LLM应用，聚焦系统级性能和内存安全，适用于生产级AI管道。

- dsx-ai-factory/nvke: NVIDIA Kubernetes Engine — a management plane for GPU Kubernetes on bare metal, addressing the infrastructure gap for large-scale AI training and inference clusters.
→ NVIDIA Kubernetes Engine — 针对裸金属GPU Kubernetes的管理平面，解决了大规模AI训练和推理集群的基础设施缺口。

- affaan-m/ECC: The agent harness performance optimization system providing skills, instincts, memory, security, and research-first tooling for Claude Code, Codex, Opencode, and Cursor. Today's top-starred AI project in the corpus.
→ 面向Claude Code、Codex、Opencode和Cursor的智能体性能优化系统，集成技能、本能、记忆、安全和研究工具，是当前热度最高的AI项目。

- NousResearch/hermes-agent: An adaptive agent that grows with user interaction patterns, representing a shift toward personalized agent behavior learning without explicit fine-tuning.
→ 随用户交互模式自适应成长的智能体，体现了无需显式微调即可实现个性化智能体行为学习的方向转变。

- Significant-Gravitas/AutoGPT: The foundational autonomous AI agent project that sparked the agent framework wave; now evolving toward accessible building blocks for end-user AI deployment.
→ 引发智能体框架浪潮的自主AI智能体先驱项目，现正演进为面向终端用户的易用AI部署构建模块。

- browser-use/browser-use: Open-source library for AI browser agents with a hosted cloud offering stealth browsers and agent APIs. Bridges the gap between LLM reasoning and real-world web interaction at scale.
→ 面向AI浏览器智能体的开源库，提供托管云服务和隐身浏览器及智能体API，弥合LLM推理与大规模现实网络交互之间的鸿沟。

- vercel-labs/agent-browser: Browser automation CLI purpose-built for AI agents, bringing deterministic, scripted web interaction to the Rust-based agent tooling ecosystem.
→ 专为AI智能体设计的浏览器自动化CLI，为基于Rust的智能体工具生态带来确定性、可脚本化的网络交互能力。

- cloudflare/security-audit-skill: Multi-phase security audit skill for coding agents with independently verified, machine-readable findings. Today's highest growth rate (+2,085 stars) signals strong community demand for agent-native security tooling.
→ 面向编码智能体的多阶段安全审计技能，具备独立可验证、机器可读的审计结果。今日增长率最高（+2,085 stars），反映出社区对智能体原生安全工具的强烈需求。

- google/skills: Official Agent Skills library for Google products and technologies, establishing a vendor-backed skill ecosystem for agent interoperability.
→ Google产品和技术的官方智能体技能库，构建了供应商背书的技能生态系统，实现智能体间的互操作性。

- anthropics/skills: Public repository for Anthropic's Agent Skills, codifying best-practice tool use patterns for Claude-powered agents.
→ Anthropic智能体技能的公开代码库，将Claude驱动智能体的最佳工具使用模式进行标准化。

- mattpocock/skills: Curated skills extracted from a practitioner's .agents directory — a grassroots signal that developers are actively sharing reusable agent behaviors.
→ 从业者.agents目录中精选的技能合集——反映开发者正积极分享可复用智能体行为的草根级信号。

- meta/astryx: Open-source design system that's fully agent-ready, suggesting a new category of UI tooling designed for AI-native interfaces rather than human-first paradigms.
→ 完全面向智能体的开源设计系统，预示着面向AI原生而非人类优先范式的UI工具新类别。

- CopilotKit/CopilotKit: The frontend stack for agents and generative UI, driving the AG-UI protocol standard for agent-to-frontend communication across React, Angular, and mobile.
→ 面向智能体和生成式UI的前端技术栈，推动跨React、Angular和移动端的AG-UI协议标准实现智能体与前端的通信。

- Panniantong/Agent-Reach: Gives AI agents visual access to the entire internet — Twitter, Reddit, YouTube, GitHub, Bilibili, Xiaohongshu — via a single CLI with zero API fees.
→ 通过单一CLI为零费用，让AI智能体能够直观访问整个互联网——Twitter、Reddit、YouTube、GitHub、Bilibili、小红书。

- career-ops-hq/career-ops: Open-source AI job search agent that scores roles against CVs, generates ATS-optimized materials, and tracks applications. A concrete vertical agent application gaining traction.
→ 开源AI求职智能体，可根据简历对职位进行评分、生成ATS优化材料并追踪申请进度。一款正在获得关注的垂直智能体应用。

- siyuan-note/siyuan: Privacy-first, self-hosted knowledge workspace where humans and AI agents collaborate — an emerging pattern of human-AI co-working environments.
→ 以隐私为首要考量、支持自托管的知识工作空间，人类与AI智能体协同工作——人机协作环境的新兴模式。

- can1357/oh-my-pi: Coding agent with the IDE wired in, built by Stencil Labs — a signal that agent-IDE integration is becoming a product category itself.
→ 内置IDE的编码智能体，由Stencil Labs构建——表明智能体与IDE的融合正在成为一个独立的产品方向。

- esengine/DeepSeek-Reasonix: A reliable coding agent for complex software engineering tasks, targeting production-grade code quality assurance beyond simple autocomplete.
→ 面向复杂软件工程任务的高可靠性编码智能体，聚焦于超越简单自动补全的生产级代码质量保障。

- milind-soni/OpenMausBot: Open-source Grok Bot alternative with a virtual machine that bots can use — notable for its agent-environment virtualization approach to bot development.
→ 开源Grok Bot替代方案，配备可供机器人使用的虚拟机——以其智能体-环境虚拟化的机器人开发方式引人注目。

- open-webui/open-webui: User-friendly AI interface supporting Ollama, OpenAI API, and beyond. The top-starred application-layer project, functioning as the go-to self-hosted chat UI for local model deployments.
→ 面向Ollama、OpenAI API等的多功能用户友好型AI界面，是应用层星标最高项目，也是本地模型部署的首选自托管聊天界面。

- Mintplex-Labs/anything-llm: Local-first agent experience platform enabling users to own their AI infrastructure without renting cloud intelligence — directly addresses data sovereignty concerns.
→ 本地优先的智能体体验平台，让用户无需租用云端智能即可掌控AI基础设施——直击数据主权诉求。

- HKUDS/DeepTutor: Lifelong personalized tutoring system using deep learning for adaptive learning pathways. A high-impact educational AI application demonstrating real-world LLM deployment beyond chat.
→ 基于深度学习的终身个性化辅导系统，提供自适应学习路径。一款展示LLM在聊天之外实际部署的高影响力教育AI应用。

- harry0703/MoneyPrinterTurbo: Automated HD short video generation from topics or keywords using AI model-driven workflows. A creative AI application showing strong community interest in multimodal content automation.
→ 基于AI模型驱动的工作流，从主题或关键词自动生成高清短视频。一款展现社区对多模态内容自动化强烈兴趣的创意AI应用。

- TauricResearch/TradingAgents: Multi-agent LLM framework for financial trading — combines agent orchestration with domain-specific decision-making, a benchmark for vertical agent applications.
→ 面向金融交易的多智能体LLM框架——将智能体编排与领域特定决策相结合，是垂直智能体应用的标杆。

- hugohe3/ppt-master: AI-powered PowerPoint generation from documents with native shapes, transitions, charts, and audio narration — a practical productivity tool gaining significant adoption.
→ 从文档智能生成PowerPoint，支持原生形状、切换效果、图表和语音讲解——正在获得广泛采用的实用生产力工具。

- ZhuLinsen/daily_stock_analysis: LLM-powered multi-market stock analysis with real-time news, decision dashboards, and automated notifications supporting zero-cost scheduled runs.
→ 面向多市场的LLM股票分析，集成实时新闻、决策仪表盘和自动化通知，支持零成本定时运行。

- HKUDS/Vibe-Trading: Personal trading agent for automated market engagement — another indicator that financial AI agents are a maturing application vertical.
→ 面向自动化市场参与的个人交易智能体——金融AI智能体正在走向成熟的又一个标志。

- acon96/home-llm: Home Assistant integration with a local LLM for smart home control — bridging on-device AI with IoT automation in a privacy-preserving manner.
→ 将本地LLM集成至Home Assistant实现智能家居控制——以隐私保护的方式将端侧AI与IoT自动化相连接。

- rasbt/LLMs-from-scratch: Step-by-step implementation of a ChatGPT-like LLM in PyTorch from scratch — the definitive educational resource for understanding transformer architecture internals.
→ 用PyTorch从零逐步实现类ChatGPT LLM——深入理解Transformer架构内部原理的权威学习资源。

- open-compass/opencompass: Comprehensive LLM evaluation platform supporting 100+ datasets across reasoning, coding, science, and safety for models from OpenAI, Anthropic, Google, DeepSeek, and Qwen.
→ 全面支持OpenAI、Anthropic、Google、DeepSeek和Qwen模型的LLM评估平台，涵盖推理、编码、科学和安全领域100余个数据集。

- skyzh/tiny-llm: Learn LLM inference systems on Apple Silicon, building a minimal vLLM + Qwen stack — targeting developers who need to optimize inference on consumer hardware.
→ 在Apple Silicon上学习LLM推理系统，构建精简的vLLM + Qwen技术栈——面向需要在消费级硬件上优化推理的开发者。

- Mirrowel/LLM-API-Key-Proxy: Universal LLM gateway with OpenAI/Anthropic-compatible endpoints, multi-provider translation, and intelligent load balancing — addressing the operational complexity of multi-model deployments.
→ 支持OpenAI/Anthropic兼容端点的通用LLM网关，具备多提供商转译和智能负载均衡——解决多模型部署的运维复杂性。

- Picovoice/picollm: On-device LLM inference using X-Bit quantization for edge deployment — targeting the growing demand for fully offline, privacy-preserving AI on constrained hardware.
→ 使用X-Bit量化在设备端执行LLM推理，面向边缘部署——针对约束硬件上对完全离线、隐私保护AI的日益增长需求。

- datamllab/OpenEBFM: Open-source energy-based foundation model training and scaling framework — an emerging research direction in self-supervised learning.
→ 基于能量的基础模型训练与扩展的开源框架——自监督学习的新兴研究方向。

- EgoAlpha/prompt-in-context-learning: Curated resources for in-context learning and prompt engineering, covering ChatGPT, GPT-3, and FlanT5 with cutting-edge updates.
→ 精选的上下文学习和提示工程资源，涵盖ChatGPT、GPT-3和FlanT5，并持续更新最新进展。

- milvus-io/milvus: High-performance, cloud-native vector database for scalable ANN search — the most starred dedicated vector database, trusted for production RAG workloads.
→ 面向大规模ANN搜索的高性能云原生向量数据库——星标最多的专用向量数据库，深受生产级RAG工作负载信赖。

- meilisearch/meilisearch: Lightning-fast search engine with AI-powered hybrid search capabilities — increasingly used as a lightweight alternative for semantic search in AI pipelines.
→ 极速搜索引擎，具备AI驱动的混合搜索能力——日益广泛地作为AI管道语义搜索的轻量级替代方案。

- qdrant/qdrant: High-performance vector database and search engine for the next generation of AI, with cloud deployment options.
→ 面向下一代AI的高性能向量数据库和搜索引擎，支持云端部署。

- infiniflow/ragflow: Agent-native RAG engine that evolved into context infrastructure, supporting complex document understanding for enterprise knowledge retrieval.
→ 面向智能体的RAG引擎，现已演化为上下文基础设施，支持企业知识检索的复杂文档理解。

- Graphify-Labs/graphify: Turn codebases, docs, SQL schemas, and PDFs into queryable knowledge graphs with deterministic AST parsing — a novel approach to RAG that replaces vector stores with graph traversal.
→ 将代码库、文档、SQL模式和多模态数据转换为可查询知识图谱，通过确定性AST解析实现——一种用图遍历替代向量存储的创新RAG方法。

- thedotmack/claude-mem: Persistent context across sessions for every agent — captures agent actions, compresses with AI, and reinjects relevant context into future sessions across Claude Code, Codex, Gemini, and more.
→ 跨会话为每个智能体保持持久上下文——记录智能体行为、AI压缩并在后续会话中重新注入相关上下文，支持Claude Code、Codex、Gemini等多平台。

- mem0ai/mem0: The memory layer for AI agents — drop-in infrastructure providing persistent, production-ready context management for agentic applications.
→ AI智能体的记忆层——即插即用的基础设施，为智能体应用提供持久化、生产就绪的上下文管理能力。

- unclecode/crawl4ai: Open-source AI-native web crawler and extraction API, self-hostable under Apache 2.0 — a critical data ingestion component for RAG pipelines.
→ 开源的AI原生网页爬虫和提取API，支持Apache 2.0协议自托管——RAG管道中的关键数据摄取组件。

- headroomlabs-ai/headroom: Token compression for tool outputs, logs, files, and RAG chunks before they reach the LLM — achieves 20% fewer tokens for coding agents, 60–95% fewer for JSON.
→ 在LLM接收前对工具输出、日志、文件和RAG分块进行令牌压缩——编码智能体减少20%令牌，JSON场景减少60–95%。

- pathwaycom/serviette: No-code RAG server that keeps answers synchronized with source documents, supporting 8 vector databases — targets non-technical users deploying knowledge bases.
→ 零代码RAG服务器，保持答案与源文档同步，支持8种向量数据库——面向部署知识库的非技术用户。

- topoteretes/cognee: Open-source AI memory platform providing persistent long-term memory for agents using small models — a cost-efficient approach to agentic memory.
→ 开源AI记忆平台，使用小模型为智能体提供持久长期记忆——一种高成本效益的智能体记忆方案。

- NirDiamant/RAG_Techniques: Comprehensive collection of advanced RAG techniques with detailed notebook tutorials — the go-to reference for practitioners advancing beyond naive retrieval.
→ 高级RAG技术综合合集，配有详细Notebook教程——从业者进阶超越基础检索的首选参考资料。

- weaviate/weaviate: Open-source vector database combining object storage with vector search and structured filtering, built for cloud-native scalability.
→ 将对象存储与向量搜索、结构化过滤相结合的开源向量数据库，为云原生可扩展性而构建。

- neuml/txtai: All-in-one AI framework for semantic search, LLM orchestration, and language model workflows — a unified entry point for RAG and embedding pipelines.
→ 集语义搜索、LLM编排和语言模型工作流于一体的全栈AI框架——RAG和Embedding管道的统一入口。

- volcengine/OpenViking: Self-evolving context database for AI agents unifying memory, knowledge RAG, and skills — an ambitious attempt to consolidate agent memory layers.
→ AI智能体的自演化上下文数据库，统一记忆、知识RAG和技能——整合智能体记忆层的雄心之作。

- VectifyAI/PageIndex: Document indexing for reasoning-based RAG without vector stores — challenging the assumption that embedding + ANN search is the only path to retrieval.
→ 面向基于推理RAG的文档索引，无需向量数据库——对"Embedding + ANN搜索是检索唯一路径"这一假设发起挑战。

- StarTrail-org/LEANN: [MLsys2026 Best Paper] RAG on Everything with 97% storage savings while maintaining fast, accurate, and fully private local execution — a breakthrough in storage-efficient retrieval.
→ [MLsys2026最佳论文] 万物皆可RAG，在保持快速、准确和完全本地私密执行的同时实现97%存储节省——存储高效检索的突破性进展。

- ranxianglei/billion-context: Context compression plugin for month-long sessions achieving 5× token savings with only 100K context window needed — a direct response to the context window cost problem.
→ 月度会话的上下文压缩插件，实现5倍令牌节省，仅需100K上下文窗口——直击上下文窗口成本痛点。

- JuliusBrussee/caveman: Viral skill + proxy for coding agents that cuts 65% of tokens by using terse natural language — an unconventional but highly effective prompt compression technique.
→ 面向编码智能体的病毒式技能+代理，通过简洁自然语言减少65%令牌——非常规但高效的提示压缩技术。

- alibaba/zvec: Lightweight, lightning-fast in-process vector database targeting ultra-low-latency retrieval requirements.
→ 面向超低延迟检索需求的轻量级、极速进程内向量数据库。

- Shubhamsaboo/awesome-llm-apps: Curated collection of 100+ AI agents, skills, and RAG applications — the largest aggregated reference for production LLM app patterns.
→ 精选100余个AI智能体、技能和RAG应用合集——生产级LLM应用模式的最大聚合参考。

- f/prompts.chat: Community-driven prompt sharing platform (formerly Awesome ChatGPT Prompts) with self-hosting support for organizational privacy.
→ 社区驱动的提示共享平台（原Awesome ChatGPT Prompts），支持自托管以满足组织隐私需求。

---

## Step 3: Trend Signal Analysis

The current data highlights three key momentum shifts in AI open-source development:

**Agent Skills as a First-Class Primitive.** The "Skills" pattern has exploded — five independent skills repositories appeared on today's trending list (Cloudflare, Google, Anthropic, and two community efforts). This signals a maturation of the agent framework model: rather than hardcoding tool use, developers are now packaging reusable, composable skill modules that can be shared and versioned. The Cloudflare security-audit-skill's explosive +2,085 daily stars and the grassroots sharing of `.agents` directories suggest skills are becoming the new "npm packages" for AI agents.

技能正成为一等公民。 Skills模式呈现爆发式增长——今日趋势榜单上出现了5个独立的技能仓库（Cloudflare、Google、Anthropic及两个社区项目）。这标志着智能体框架模式的成熟：开发者不再硬编码工具调用，而是将可复用、可组合的技能模块打包发布。Cloudflare的security-audit-skill以单日+2,085颗星的惊人增长，以及社区自发分享`.agents`目录的举动，都在印证一个信号——技能正在成为AI智能体的"npm包"。

**Context and Memory Optimization as a Critical Bottleneck.** Three separate projects target context compression and agent memory — `billion-context` (5× token savings, TypeScript, trending), `caveman` (65% token reduction, Go, 118K stars), and `headroom` (20–95% token compression, Python, 79K stars). This cluster reflects real production pain: as agents handle longer tasks, context window economics and memory persistence have become the dominant engineering challenge. The emergence of graph-based retrieval (Graphify at 144K stars) and vectorless RAG (PageIndex) alongside traditional vector DBs indicates the community is actively rethinking retrieval architectures.

上下文与记忆优化已成为关键瓶颈。三个项目同时瞄准上下文压缩和智能体记忆——`billion-context`（5倍令牌节省，TypeScript，趋势上升）、`caveman`（65%令牌削减，Go，118K星标）和`headroom`（20–95%令牌压缩，Python，79K星标）。这一聚焦反映出生

产实践中的真实痛点：随着智能体承接更长周期的任务，上下文窗口的成本效益和记忆持久化已上升为核心工程挑战。社区在传统向量数据库之外，正在积极探索图检索（Graphify，144K星标）和无向量RAG（PageIndex），表明检索架构正在经历根本性反思。

**Infrastructure for Agent-Grade Reliability.** The rise of specialized tools like `DeepSeek-Reasonix` (reliable coding agents), `nvke` (GPU Kubernetes management), and `ECC` (agent harness with security primitives) points to a shift from proof-of-concept agents toward production-grade, measurable agent systems. The CopilotKit AG-UI protocol and IDE-wired agents like `oh-my-pi` further suggest that the developer tooling layer for building and debugging agents is becoming a distinct, investable category.

面向智能体级可靠性的基础设施正在崛起。`DeepSeek-Reasonix`（可靠编码智能体）、`nvke`（GPU Kubernetes管理）和`ECC`（带安全原语的智能体测试框架）等专业化工具的兴起，表明行业正从概念验证转向生产级、可量化的智能体系统。CopilotKit的AG-UI协议以及`oh-my-pi`等IDE深度集成的智能体进一步表明，智能体构建和调试的开发者工具层正在成为一个独立且值得投入的赛道。

---

## Step 4: Community Hot Spots

- **[cloudflare/security-audit-skill](https://github.com/Cloudflare/security-audit-skill)** — The single highest growth rate today (+2,085 stars) for an AI tool. Signals a massive, unmet demand for agent-native security tooling that can audit codebases autonomously with verifiable, machine-readable findings.

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 144K stars with a fundamentally different approach to RAG: replacing vector similarity search with deterministic AST-parsed knowledge graphs. If graph-based retrieval proves reliable at scale, it could displace chunk-based embedding approaches for code-heavy use cases.

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — MLsys 2026 Best Paper winner with 97% storage savings for RAG. A landmark efficiency improvement that could make private, on-device RAG viable on consumer hardware at scale.

- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)** + **[browser-use/browser-use](https://github.com/browser-use/browser-use)** — The pairing of Vercel's CLI-focused browser automation (Rust) with Browser Use's full library + cloud API (Python) represents two complementary approaches to the same problem: giving agents reliable, scriptable web interaction. Together they cover the spectrum from developer tooling to hosted production services.

- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** — As the open-source ecosystem fragments across dozens of LLM providers (DeepSeek, Qwen, GLM, Kimi, MiniMax, Gemma), a standardized evaluation framework becomes critical for community trust. Its support for 100+ datasets across safety, reasoning, and long-context makes it the most comprehensive benchmarking tool available.

Now I'm translating this section while maintaining natural technical Chinese register and preserving all the formatting.
</think>


# AI开源趋势报告 — 2026年11月8日

## 第一步：AI相关性筛选

以下非AI项目已从今日分析中排除：
- `prometheus/prometheus` — 监控/时序数据库
- `sherlock-project/sherlock` — 开源情报用户名查询
- `astral-sh/ruff` — Python代码检查/格式化工具
- `tailwindlabs/tailwindcss` — CSS框架
- `mbillow/localthings` — Home Assistant集成
- `zed-industries/zed` — 代码编辑器

其余所有仓库均通过智能体框架、LLM工具、RAG管道或AI应用层展示了直接的AI/ML相关性。

---

## 第二步：分类项目总览

### 🔧 AI基础设施

| 项目 | 语言 | 星标（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,288 | 本地LLM推理引擎，原生支持Kimi、GLM、MiniMax、DeepSeek、Qwen和Gemma。以轻量级、零配置的特性，成为自托管模型服务的首选方案。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 168,636 | 文本、视觉、音频及多模态领域最先进模型的标准模型定义框架，仍是开源ML生态中推理和训练的基础库。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,840 | 专为LLM应用设计的文档处理与检索增强生成平台，为数千个生产部署提供数据摄取和查询管道的基础架构。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,177 | 智能体工程平台，提供可组合的LLM、工具和记忆链原语。今日AI主题中星标第二高的仓库，展示了开发者对智能体应用模式的持续投入。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,371 | 面向LLM应用的原生Java/JVM库，提供跨提供商和向量存储的统一API，支持MCP工具调用原生特性，将企业Java生态（Quarkus、Spring Boot）与AI工具链连接起来。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,086 | 用Rust构建模块化、可扩展的LLM应用，聚焦系统级性能和内存安全，适用于生产级AI管道。 |
| [dsx-ai-factory/nvke](https://github.com/dsx-ai-factory/nvke) | Go | 0 (+123) | NVIDIA Kubernetes Engine — 针对裸金属GPU Kubernetes的管理平面，解决了大规模AI训练和推理集群的基础设施缺口。 |

---

### 🤖 AI智能体 / 工作流

| 项目 | 语言 | 星标（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 299,204 | 智能体性能优化系统，为Claude Code、Codex、Opencode和Cursor提供技能、本能、记忆、安全和研究工具。今日语料库中星标最高的AI项目。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 261,524 | 随用户交互模式自适应成长的智能体，代表了一种无需显式微调即可实现个性化智能体行为学习的范式转变。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 187,936 | 引发智能体框架浪潮的自主AI智能体先驱项目，现正演进为面向终端用户的易用AI部署构建模块。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 120,270 | 面向AI浏览器智能体的开源库，提供托管云服务和隐身浏览器及智能体API，弥合LLM推理与大规模现实网络交互之间的鸿沟。 |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Rust | 0 (+190) | 专为AI智能体设计的浏览器自动化CLI，为基于Rust的智能体工具生态带来确定性、可脚本化的网络交互能力。 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | 0 (+2,085) | 面向编码智能体的多阶段安全审计技能，具备独立可验证、机器可读的审计结果。今日增长率最高（+2,085星），反映出社区对智能体原生安全工具的强烈需求。 |
| [google/skills](https://github.com/google/skills) | Python | 0 (+443) | Google产品和技术的官方智能体技能库，构建了供应商背书的技能生态系统，实现智能体间的互操作性。 |
| [anthropics/skills](https://github.com/anthropics/skills) | Python | 0 (+390) | Anthropic智能体技能的公开代码库，将Claude驱动智能体的最佳工具使用模式进行标准化。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0 (+1,100) | 从业者`.agents`目录中精选的技能合集——反映开发者正积极分享可复用智能体行为的草根级信号。 |
| [meta/astryx](https://github.com/meta/astryx) | TypeScript | 0 (+96) | 完全面向智能体的开源设计系统，预示着面向AI原生而非人类优先范式的UI工具新类别。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,557 | 面向智能体和生成式UI的前端技术栈，推动跨React、Angular和移动端的AG-UI协议标准实现智能体与前端的通信。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 110,020 | 通过单一CLI为零费用，让AI智能体能够直观访问整个互联网——Twitter、Reddit、YouTube、GitHub、Bilibili、小红书。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 80,948 | 开源AI求职智能体，可根据简历对职位进行评分、生成ATS优化材料并追踪申请进度。一款正在获得关注的垂直智能体应用。 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 47,119 | 以隐私为首要考量、支持自托管的知识工作空间，人类与AI智能体协同工作——人机协作环境的新兴模式。 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | TypeScript | 38,156 | 内置IDE的编码智能体，由Stencil Labs构建——表明智能体与IDE的融合正在成为一个独立的产品方向。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 36,132 | 面向复杂软件工程任务的高可靠性编码智能体，聚焦于超越简单自动补全的生产级代码质量保障。 |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | TypeScript | 0 (+1,955) | 开源Grok Bot替代方案，配备可供机器人使用的虚拟机——以其智能体-环境虚拟化的机器人开发方式引人注目。 |

---

### 📦 AI应用

| 项目 | 语言 | 星标（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 158,045 | 支持Ollama、OpenAI API等多种后端、面向用户友好的AI界面。应用层星标最高项目，是本地模型部署的首选自托管聊天UI。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 68,047 | 本地优先的智能体体验平台，让用户无需租用云端智能即可掌控AI基础设施——直击数据主权诉求。 |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 56,386 | 基于深度学习的终身个性化辅导系统，提供自适应学习路径。一款展示LLM在聊天之外实际部署的高影响力教育AI应用。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 140,775 | 基于AI模型驱动的工作流，从主题或关键词自动生成高清短视频。一款展现社区对多模态内容自动化强烈兴趣的创意AI应用。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 121,191 | 面向金融交易的多智能体LLM框架——将智能体编排与领域特定决策相结合，是垂直智能体应用的标杆。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 74,546 | 从文档智能生成PowerPoint，支持原生形状、切换效果、图表和语音讲解——正在获得广泛采用的实用生产力工具。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 67,764 | 面向多市场的LLM股票分析，集成实时新闻、决策仪表盘和自动化通知，支持零成本定时运行。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 37,843 | 面向自动化市场参与的个人交易智能体——金融AI智能体正在走向成熟的又一个标志。 |
| [acon96/home-llm](https://github.com/acon96/home-llm) | Python | 1,490 | 将本地LLM集成至Home Assistant实现智能家居控制——以隐私保护的方式将端侧AI与IoT自动化相连接。 |

---

### 🧠 LLMs / 训练

| 项目 | 语言 | 星标（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 107,978 | 用PyTorch从零逐步实现类ChatGPT LLM——深入理解Transformer架构内部原理的权威学习资源。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,572 | 全面的LLM评估平台，支持OpenAI、Anthropic、Google、DeepSeek、Qwen等模型在推理、编码、科学和安全领域100余个数据集的评测。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,689 | 在Apple Silicon上学习LLM推理系统，构建精简的vLLM + Qwen技术栈——面向需要在消费级硬件上优化推理的开发者。 |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | Python | 559 | 通用LLM网关，支持OpenAI/Anthropic兼容端点，具备多提供商转译和智能负载均衡——解决多模型部署的运维复杂性。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 319 | 使用X-Bit量化在设备端执行LLM推理，面向边缘部署——针对约束硬件上对完全离线、隐私保护AI的日益增长需求。 |
| [datamllab/OpenEBFM](https://github.com/datamllab/OpenEBFM) | Python | 291 | 基于能量的基础模型训练与扩展的开源框架——自监督学习的新兴研究方向。 |
| [

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*