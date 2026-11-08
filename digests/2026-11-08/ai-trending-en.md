# AI Open Source Trends 2026-11-08

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-08 01:45 UTC

---

<think>Let me analyze the data provided and create a structured AI Open Source Trends Report.

**Step 1: Filter AI-related projects**

From the Trending List (15 repos), let me identify AI-related ones:
1. vercel-labs/agent-browser - AI-related (browser automation for AI agents)
2. cloudflare/security-audit-skill - AI-related (coding-agent skill for security audits)
3. google/skills - AI-related (Agent Skills)
4. mattpocock/skills - AI-related (skills for engineers, .agents directory)
5. anthropics/skills - AI-related (Agent Skills)
6. meta/astryx - AI-related (agent-ready design system)
7. prometheus/prometheus - NOT AI-related (monitoring system)
8. sherlock-project/sherlock - NOT AI-related (social media hunting)
9. milind-soni/OpenMausBot - AI-related (Grok Bot alternative)
10. astral-sh/ruff - NOT AI-related (Python linter)
11. tailwindlabs/tailwindcss - NOT AI-related (CSS framework)
12. mbillow/localthings - NOT AI-related (Home Assistant integration)
13. zed-industries/zed - NOT AI-related (code editor)
14. ranxianglei/billion-context - AI-related (context compression for LLMs)


15. dsx-ai-factory/nvke - AI-related (NVIDIA Kubernetes Engine for GPU)

From the Topic Search Results (80 repos), I'll need to filter similarly to identify which ones are genuinely AI-focused versus general-purpose tools.

The most significant AI infrastructure projects emerging are browser automation frameworks like agent-browser and browser-use, security audit capabilities tied to agent workflows, skills-based systems from multiple vendors, agent-ready design tools, context optimization solutions, and GPU orchestration platforms. These represent the foundational layer enabling AI agents to interact with real-world systems and environments.

Beyond the core infrastructure, there are also emerging application layers worth monitoring—personalized tutoring platforms, video generation tools, trading systems, and productivity applications like PowerPoint creation that directly leverage AI capabilities.

The ecosystem also shows strong activity in foundational model development with transformers, training-from-scratch guides, and inference optimization, alongside retrieval-augmented generation tools that enable more contextual responses from models.
</think>


# AI Open Source Trends Report — November 8, 2026

## Step 1: AI Relevance Filter

The following non-AI projects have been excluded from today's analysis:
- `prometheus/prometheus` — monitoring/time-series DB
- `sherlock-project/sherlock` — OSINT username lookup
- `astral-sh/ruff` — Python linter/formatter
- `tailwindlabs/tailwindcss` — CSS framework
- `mbillow/localthings` — Home Assistant integration
- `zed-industries/zed` — code editor

All remaining repositories demonstrate direct AI/ML relevance through agent frameworks, LLM tooling, RAG pipelines, or AI application layers.

---

## Step 2: Categorized Project Overview

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,288 | Local LLM inference engine with native support for Kimi, GLM, MiniMax, DeepSeek, Qwen, and Gemma. Remains the dominant choice for self-hosted model serving with a lightweight, zero-config footprint. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 168,636 | The canonical model-definition framework for state-of-the-art models across text, vision, audio, and multimodal domains. Still the foundational library for both inference and training in the open-source ML ecosystem. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,840 | Document processing and retrieval-augmented generation platform purpose-built for LLM applications. Provides the data ingestion and query pipeline backbone for thousands of production deployments. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,177 | The agent engineering platform offering composable primitives for chaining LLMs, tools, and memory. Today's second-highest starred repo in the AI topic corpus, demonstrating sustained developer investment in agentic application patterns. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,371 | Idiomatic Java/JVM library for LLM-powered applications, offering unified API over providers and vector stores with native MCP tool-calling support. Bridges the enterprise Java ecosystem (Quarkus, Spring Boot) into the AI tooling landscape. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,086 | Build modular and scalable LLM applications in Rust, targeting systems-level performance and memory safety for production-grade AI pipelines. |
| [dsx-ai-factory/nvke](https://github.com/dsx-ai-factory/nvke) | Go | 0 (+123) | NVIDIA Kubernetes Engine — a management plane for GPU Kubernetes on bare metal, addressing the infrastructure gap for large-scale AI training and inference clusters. |

---

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 299,204 | The agent harness performance optimization system providing skills, instincts, memory, security, and research-first tooling for Claude Code, Codex, Opencode, and Cursor. Today's top-starred AI project in the corpus. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 261,524 | An adaptive agent that grows with user interaction patterns, representing a shift toward personalized agent behavior learning without explicit fine-tuning. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 187,936 | The foundational autonomous AI agent project that sparked the agent framework wave; now evolving toward accessible building blocks for end-user AI deployment. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 120,270 | Open-source library for AI browser agents with a hosted cloud offering stealth browsers and agent APIs. Bridges the gap between LLM reasoning and real-world web interaction at scale. |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Rust | 0 (+190) | Browser automation CLI purpose-built for AI agents, bringing deterministic, scripted web interaction to the Rust-based agent tooling ecosystem. |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | 0 (+2,085) | Multi-phase security audit skill for coding agents with independently verified, machine-readable findings. Today's highest growth rate (+2,085 stars) signals strong community demand for agent-native security tooling. |
| [google/skills](https://github.com/google/skills) | Python | 0 (+443) | Official Agent Skills library for Google products and technologies, establishing a vendor-backed skill ecosystem for agent interoperability. |
| [anthropics/skills](https://github.com/anthropics/skills) | Python | 0 (+390) | Public repository for Anthropic's Agent Skills, codifying best-practice tool use patterns for Claude-powered agents. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0 (+1,100) | Curated skills extracted from a practitioner's `.agents` directory — a grassroots signal that developers are actively sharing reusable agent behaviors. |
| [meta/astryx](https://github.com/meta/astryx) | TypeScript | 0 (+96) | Open-source design system that's fully agent-ready, suggesting a new category of UI tooling designed for AI-native interfaces rather than human-first paradigms. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,557 | The frontend stack for agents and generative UI, driving the AG-UI protocol standard for agent-to-frontend communication across React, Angular, and mobile. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 110,020 | Gives AI agents visual access to the entire internet — Twitter, Reddit, YouTube, GitHub, Bilibili, Xiaohongshu — via a single CLI with zero API fees. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 80,948 | Open-source AI job search agent that scores roles against CVs, generates ATS-optimized materials, and tracks applications. A concrete vertical agent application gaining traction. |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 47,119 | Privacy-first, self-hosted knowledge workspace where humans and AI agents collaborate — an emerging pattern of human-AI co-working environments. |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | TypeScript | 38,156 | Coding agent with the IDE wired in, built by Stencil Labs — a signal that agent-IDE integration is becoming a product category itself. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 36,132 | A reliable coding agent for complex software engineering tasks, targeting production-grade code quality assurance beyond simple autocomplete. |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | TypeScript | 0 (+1,955) | Open-source Grok Bot alternative with a virtual machine that bots can use — notable for its agent-environment virtualization approach to bot development. |

---

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 158,045 | User-friendly AI interface supporting Ollama, OpenAI API, and beyond. The top-starred application-layer project, functioning as the go-to self-hosted chat UI for local model deployments. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 68,047 | Local-first agent experience platform enabling users to own their AI infrastructure without renting cloud intelligence — directly addresses data sovereignty concerns. |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 56,386 | Lifelong personalized tutoring system using deep learning for adaptive learning pathways. A high-impact educational AI application demonstrating real-world LLM deployment beyond chat. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 140,775 | Automated HD short video generation from topics or keywords using AI model-driven workflows. A creative AI application showing strong community interest in multimodal content automation. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 121,191 | Multi-agent LLM framework for financial trading — combines agent orchestration with domain-specific decision-making, a benchmark for vertical agent applications. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 74,546 | AI-powered PowerPoint generation from documents with native shapes, transitions, charts, and audio narration — a practical productivity tool gaining significant adoption. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 67,764 | LLM-powered multi-market stock analysis with real-time news, decision dashboards, and automated notifications supporting zero-cost scheduled runs. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 37,843 | Personal trading agent for automated market engagement — another indicator that financial AI agents are a maturing application vertical. |
| [acon96/home-llm](https://github.com/acon96/home-llm) | Python | 1,490 | Home Assistant integration with a local LLM for smart home control — bridging on-device AI with IoT automation in a privacy-preserving manner. |

---

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 107,978 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch from scratch — the definitive educational resource for understanding transformer architecture internals. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,572 | Comprehensive LLM evaluation platform supporting 100+ datasets across reasoning, coding, science, and safety for models from OpenAI, Anthropic, Google, DeepSeek, and Qwen. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,689 | Learn LLM inference systems on Apple Silicon, building a minimal vLLM + Qwen stack — targeting developers who need to optimize inference on consumer hardware. |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | Python | 559 | Universal LLM gateway with OpenAI/Anthropic-compatible endpoints, multi-provider translation, and intelligent load balancing — addressing the operational complexity of multi-model deployments. |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 319 | On-device LLM inference using X-Bit quantization for edge deployment — targeting the growing demand for fully offline, privacy-preserving AI on constrained hardware. |
| [datamllab/OpenEBFM](https://github.com/datamllab/OpenEBFM) | Python | 291 | Open-source energy-based foundation model training and scaling framework — an emerging research direction in self-supervised learning. |
| [EgoAlpha/prompt-in-context-learning](https://github.com/EgoAlpha/prompt-in-context-learning) | Jupyter Notebook | 2,250 | Curated resources for in-context learning and prompt engineering, covering ChatGPT, GPT-3, and FlanT5 with cutting-edge updates. |

---

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,612 | High-performance, cloud-native vector database for scalable ANN search — the most starred dedicated vector database, trusted for production RAG workloads. |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 59,806 | Lightning-fast search engine with AI-powered hybrid search capabilities — increasingly used as a lightweight alternative for semantic search in AI pipelines. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,464 | High-performance vector database and search engine for the next generation of AI, with cloud deployment options. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 93,735 | Agent-native RAG engine that evolved into context infrastructure, supporting complex document understanding for enterprise knowledge retrieval. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 144,013 | Turn codebases, docs, SQL schemas, and PDFs into queryable knowledge graphs with deterministic AST parsing — a novel approach to RAG that replaces vector stores with graph traversal. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 114,512 | Persistent context across sessions for every agent — captures agent actions, compresses with AI, and reinjects relevant context into future sessions across Claude Code, Codex, Gemini, and more. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,584 | The memory layer for AI agents — drop-in infrastructure providing persistent, production-ready context management for agentic applications. |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,065 | Open-source AI-native web crawler and extraction API, self-hostable under Apache 2.0 — a critical data ingestion component for RAG pipelines. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,087 | Token compression for tool outputs, logs, files, and RAG chunks before they reach the LLM — achieves 20% fewer tokens for coding agents, 60–95% fewer for JSON. |
| [pathwaycom/serviette](https://github.com/pathwaycom/serviette) | Python | 58,722 | No-code RAG server that keeps answers synchronized with source documents, supporting 8 vector databases — targets non-technical users deploying knowledge bases. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,128 | Open-source AI memory platform providing persistent long-term memory for agents using small models — a cost-efficient approach to agentic memory. |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | Jupyter Notebook | 30,262 | Comprehensive collection of advanced RAG techniques with detailed notebook tutorials — the go-to reference for practitioners advancing beyond naive retrieval. |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | Go | 16,942 | Open-source vector database combining object storage with vector search and structured filtering, built for cloud-native scalability. |
| [neuml/txtai](https://github.com/neuml/txtai) | Python | 13,099 | All-in-one AI framework for semantic search, LLM orchestration, and language model workflows — a unified entry point for RAG and embedding pipelines. |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Python | 41,751 | Self-evolving context database for AI agents unifying memory, knowledge RAG, and skills — an ambitious attempt to consolidate agent memory layers. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 40,171 | Document indexing for reasoning-based RAG without vector stores — challenging the assumption that embedding + ANN search is the only path to retrieval. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | Python | 13,779 | [MLsys2026 Best Paper] RAG on Everything with 97% storage savings while maintaining fast, accurate, and fully private local execution — a breakthrough in storage-efficient retrieval. |
| [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | TypeScript | 0 (+191) | Context compression plugin for month-long sessions achieving 5× token savings with only 100K context window needed — a direct response to the context window cost problem. |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | 118,177 | Viral skill + proxy for coding agents that cuts 65% of tokens by using terse natural language — an unconventional but highly effective prompt compression technique. |
| [alibaba/zvec](https://github.com/alibaba/zvec) | C++ | 16,213 | Lightweight, lightning-fast in-process vector database targeting ultra-low-latency retrieval requirements. |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 144,124 | Curated collection of 100+ AI agents, skills, and RAG applications — the largest aggregated reference for production LLM app patterns. |
| [f/prompts.chat](https://github.com/f/prompts.chat) | MDX | 176,247 | Community-driven prompt sharing platform (formerly Awesome ChatGPT Prompts) with self-hosting support for organizational privacy. |

---

## Step 3: Trend Signal Analysis

Today's trending data reveals three distinct momentum vectors in the AI open-source ecosystem:

**Agent Skills as a First-Class Primitive.** The "Skills" pattern has exploded — five independent skills repositories appeared on today's trending list (Cloudflare, Google, Anthropic, and two community efforts). This signals a maturation of the agent framework model: rather than hardcoding tool use, developers are now packaging reusable, composable skill modules that can be shared and versioned. The Cloudflare security-audit-skill's explosive +2,085 daily stars and the grassroots sharing of `.agents` directories suggest skills are becoming the new "npm packages" for AI agents.

**Context and Memory Optimization as a Critical Bottleneck.** Three separate projects target context compression and agent memory — `billion-context` (5× token savings, TypeScript, trending), `caveman` (65% token reduction, Go, 118K stars), and `headroom` (20–95% token compression, Python, 79K stars). This cluster reflects real production pain: as agents handle longer tasks, context window economics and memory persistence have become the dominant engineering challenge. The emergence of graph-based retrieval (Graphify at 144K stars) and vectorless RAG (PageIndex) alongside traditional vector DBs indicates the community is actively rethinking retrieval architectures.

**Infrastructure for Agent-Grade Reliability.** The rise of specialized tools like `DeepSeek-Reasonix` (reliable coding agents), `nvke` (GPU Kubernetes management), and `ECC` (agent harness with security primitives) points to a shift from proof-of-concept agents toward production-grade, measurable agent systems. The CopilotKit AG-UI protocol and IDE-wired agents like `oh-my-pi` further suggest that the developer tooling layer for building and debugging agents is becoming a distinct, investable category.

---

## Step 4: Community Hot Spots

- **[cloudflare/security-audit-skill](https://github.com/Cloudflare/security-audit-skill)** — The single highest growth rate today (+2,085 stars) for an AI tool. Signals a massive, unmet demand for agent-native security tooling that can audit codebases autonomously with verifiable, machine-readable findings.

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 144K stars with a fundamentally different approach to RAG: replacing vector similarity search with deterministic AST-parsed knowledge graphs. If graph-based retrieval proves reliable at scale, it could displace chunk-based embedding approaches for code-heavy use cases.

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — MLsys 2026 Best Paper winner with 97% storage savings for RAG. A landmark efficiency improvement that could make private, on-device RAG viable on consumer hardware at scale.

- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)** + **[browser-use/browser-use](https://github.com/browser-use/browser-use)** — The pairing of Vercel's CLI-focused browser automation (Rust) with Browser Use's full library + cloud API (Python) represents two complementary approaches to the same problem: giving agents reliable, scriptable web interaction. Together they cover the spectrum from developer tooling to hosted production services.

- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** — As the open-source ecosystem fragments across dozens of LLM providers (DeepSeek, Qwen, GLM, Kimi, MiniMax, Gemma), a standardized evaluation framework becomes critical for community trust. Its support for 100+ datasets across safety, reasoning, and long-context makes it the most comprehensive benchmarking tool available.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*