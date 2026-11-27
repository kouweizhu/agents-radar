# AI Open Source Trends 2026-11-27

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-27 04:29 UTC

---

<think>Let me analyze this data and create a structured AI Open Source Trends Report.

First, let me filter the AI-related projects from the trending list and topic search results.

**From Trending List (16 repos):**
1. elementalsouls/Claude-BugHunter - AI security/red-team tool
2. obra/superpowers - Agentic skills framework
3. HKUDS/CLI-Anything - CLI for AI agents
4. jingyaogong/minimind - LLM training in 2 hours
5. cursor/plugins - Cursor IDE plugins
6. firecrawl/firecrawl - Knowledge infrastructure for AI agents


7. openvinotoolkit/openvino - AI inference optimization
8. cathrynlavery/diagram-design - Design diagrams for AI coding agents
9. mvanhorn/last30days-skill - AI agent skill for research
10. google-labs-code/stitch-skills - Agent Skills library
11. mjmirza/app-store-compliance - App store compliance for AI coding agents
12. Tracer-Cloud/opensre - CI/CD reliability agent
13. toeverything/AFFiNE - Knowledge base
14. XiaoYouChR/Ghost-Downloader-3 - Downloader (NOT AI)
15. zhouxiaoka/autoclip - AI video clipping tool
16. nginx/nginx - NOT AI

The nginx repo doesn't fit the AI criteria, so I'll exclude it. Ghost-Downloader-3 is a general utility tool, not AI-specific. AFFiNE is a productivity tool without strong AI focus. That leaves me with 12 relevant AI projects from the trending list.

Now I'm organizing these by category—AI Infrastructure includes Claude-BugHunter for security testing, superpowers for agent frameworks, CLI-Anything for command-line interfaces, Cursor plugins, OpenVINO for inference optimization, diagram-design for developer tools, and the Stitch skills library.

The AI Agents & Workflows category covers research capabilities like last30days-skill, compliance tools like app-store-compliance, and reliability monitoring through opensre, while specialized applications like autoclip handle video clipping.

For LLMs and training, minimind stands out as an educational project that trains a 64M model in just two hours, and firecrawl provides knowledge infrastructure as a data source.

Now I'm cross-referencing against the topic search results to identify the most prominent projects—anything-llm, meilisearch, and llama_index are all established vector database solutions, with Milvus, OpenViking, and PageIndex offering similar capabilities at different scales.

For LLM frameworks and agents, I'm seeing ECC, hermes-agent, firecrawl, ponytail, and ollama as the current leaders, alongside AutoGPT and the prompts collection.

I'm noticing the LangChain ecosystem is particularly strong with langchain itself at 150k stars and langgraph at 45k, while Dify and open-webui are popular alternatives for building LLM applications and interfaces.

Looking at RAG and knowledge management specifically, I'm seeing tools like Claude-mem for persistent context, RAGFlow as a specialized RAG engine, crawl4ai for web scraping, headroom for token compression, and mem0 as a dedicated memory layer for agents—these are all gaining significant traction in the space.

Now I'm categorizing by use case: DeepTutor for education, the AI agent book as a learning resource, cherry-studio as an all-in-one workspace, and langgraph for building agentic systems. Then there are AI agent frameworks like Agent-Reach for web scraping across multiple platforms, career-ops for job searching, daily_stock_analysis for financial applications, nanobot as a lightweight agent, CowAgent as an open-source assistant, and siyuan-note positioned as a privacy-focused knowledge workspace.

Continuing through the agent ecosystem, I'm seeing Codewhale as a Rust-based coding agent, oh-my-pi as another coding-focused option, Vibe-Trading for financial agents, CopilotKit for frontend integration, QwenPaw as a personal assistant, openclaude as an open alternative, and cua for scaling computer use. On the training side, there's minimind which is already trending with 71,795 stars, plus rig for Rust-based LLM applications, opencompass for evaluation, atomic-agents for atomic AI building blocks, and tiny-llm as an educational reference.

Now I'm moving into foundational resources and reference implementations—generative-ai learning materials, prompt engineering guides, nestia as a NestJS helper with chatbot capabilities, embodied robotics research, reinforcement learning for agents, data generation tools, Japanese LLM resources, story generation research, and a universal LLM gateway. The foundational machine learning infrastructure includes TensorFlow, PyTorch, scikit-learn, Keras, Ultralytics for vision, and supervision for computer vision utilities.

I'm realizing I need to narrow my focus to what's most relevant right now rather than listing everything. From the topic search data, the high-starred vector databases and LLM frameworks are clearly the most significant players, along with the trending tools that are gaining momentum today. I'm seeing a strong signal around AI agents and coding assistance—projects like Cursor plugins, Stitch Skills, and the Agent Skills framework are all gaining traction. There's also interest in AI application compliance and development practices, plus specialized tools like video clipping and CI/CD reliability monitoring. I should focus my report on these AI infrastructure patterns and the specific tools that are emerging to support AI-native development.

Now I'm organizing the key projects by category to structure the findings clearly.

For AI infrastructure, I'm highlighting tools like Firecrawl for web scraping, OpenVINO for inference optimization, and several agent-focused frameworks including Stitch Skills, CLI-Anything, Superpowers, and Claude-BugHunter for security testing. Each has specific capabilities around agentic workflows, skill management, and specialized task execution.

Now looking at AI agents and workflows—projects like Open SRE for CI/CD reliability, last30days-skill for research synthesis, and app-store-compliance for regulatory guidance are emerging as specialized agent applications. The landscape is expanding from general-purpose frameworks toward task-specific agents that handle everything from video clipping to market analysis, with frameworks like LangGraph enabling more complex orchestration.

For the LLM and training side, I'm seeing tools like Minimind making model training accessible with modest hardware, OpenCompass providing comprehensive evaluation across hundreds of benchmarks, and several projects focused on building agents and RAG systems from scratch. The community is also creating valuable reference implementations in Rust and Python for developers learning these concepts.

On the knowledge retrieval side, the ecosystem has matured significantly—established databases like Qdrant and LanceDB are popular, while newer approaches like OpenViking and PageIndex are pushing boundaries with self-evolving context and reasoning-based retrieval without vectors. Tools like crawl4ai are making web data extraction more accessible for these systems.

For application frameworks, Dify leads the pack for building LLM workflows, followed by Open WebUI as a lightweight Ollama interface and LangGraph for orchestrating complex agent behaviors. The community is also creating specialized tooling like Graphify for converting codebases into queryable knowledge graphs, which shows the diverse ways developers are integrating these capabilities.

The AI agent space is where I'm seeing the most activity—tools like Agent-Reach for web scraping, Nanobot as a lightweight agent, CopilotKit for UI integration, and various personal assistants are all gaining traction. The momentum seems strongest around three main themes: coding agents with skill frameworks that extend what models can do, infrastructure for agents like memory and retrieval systems, and specialized applications built on top of these capabilities.
</think>


# AI Open Source Trends Report — 2026-11-27

## 1. Today's Highlights

The open-source AI ecosystem is experiencing a pronounced shift toward **AI-native developer tooling**. Three major signals stand out today: (1) Agent skill frameworks — libraries of composable, standardized skills for coding agents (Stitch Skills, Superpowers, CLI-Anything) — are proliferating rapidly, reflecting community consensus that extensibility via skills is the preferred paradigm for agent UX; (2) **AI infrastructure for agents** (memory, knowledge retrieval, context compression) is attracting massive engagement, with projects like `firecrawl` (+1,046 ★ today) and `mem0` / `cognee` demonstrating that persistent memory and web-scale knowledge access are now table stakes for production agents; and (3) **LLM democratization tooling** is surging, exemplified by `minimind` (train a 64M model from scratch in 2 hours) and `opencompass` (100+ evaluation datasets), signaling that the community is not just consuming models but building the entire tooling chain around them.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 211,084 | Unified web scraping and data extraction API with 550+ providers, giving AI agents reliable, structured access to live internet data at scale. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | — | Intel's open-source toolkit for optimizing and deploying AI inference across CPU, GPU, and edge devices, critical for production model serving. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | — | Open standard library of Agent Skills for the Stitch MCP server, designed for cross-agent compatibility (Claude Code, Cursor, Gemini CLI, Antigravity). |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | — | Transforms any CLI tool into an agent-native interface, enabling AI agents to interact with the full software ecosystem through a unified hub. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | — | Agentic skills framework and software development methodology that provides a structured way to extend coding agent capabilities. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | — | Security red-team skill bundle for Claude Code with 85 skills covering 24 vulnerability classes and enterprise infrastructure attack matrices. |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | — | Editorial-quality diagram library for AI coding agents (52 types), eliminating Mermaid-style outputs in favor of clean SVG diagrams. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 45,487 | Builds resilient, stateful multi-agent workflows on top of LangChain, the de facto standard agent orchestration framework with 150k stars. |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | — | Open-source agent for CI/CD reliability — monitors pipelines, detects failures, and autonomously suggests or applies fixes. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | — | Research skill that synthesizes signals from Reddit, X, YouTube, HN, Polymarket, and the web into grounded topic summaries for agents. |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Shell | — | Pre-submission guard for App Store and Google Play with 125 rejection patterns, EU AI Act deadlines, and AI agent–readable compliance specs. |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | — | Local-first AI video clipping tool with MCP server integration — turns podcasts and long-form content into short clips with subtitles for TikTok, YouTube Shorts, and more. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 150,049 | The agent engineering platform — provides primitives for chains, tools, and agents, serving as the foundation for the broader LangChain ecosystem. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 39,005 | Frontend stack for agents and generative UI — ships the AG-UI protocol for embedding agent capabilities into React, Angular, and mobile apps. |
| [trycua/cua](https://github.com/trycua/cua) | Rust | 33,032 | Open-source drivers and sandboxes for scaling computer-use agents, including benchmarks for training, evaluation, and synthetic data generation. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 71,795 | Trains a functional 64M-parameter LLM from scratch in 2 hours on consumer hardware — the most concrete LLM training walkthrough in the community today. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,646 | Comprehensive LLM evaluation platform covering 100+ datasets for knowledge, reasoning, coding, long-context, and safety across OpenAI, Anthropic, Gemini, Qwen, DeepSeek models. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,815 | Teaches LLM inference system design on Apple Silicon — builds a minimal vLLM + Qwen stack for systems engineers to understand inference internals. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 109,104 | Gold-standard PyTorch implementation of a ChatGPT-like LLM from scratch, guiding developers through every architectural and training detail. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,282 | Build modular, scalable LLM applications in Rust — brings type safety and performance to the LLM app stack. |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | Python | 6,349 | Minimalist Python framework for composing AI agents from atomic, reusable building blocks with a clean, predictable execution model. |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | Python | 565 | Universal LLM gateway with OpenAI/Anthropic-compatible endpoints, multi-provider translation, and intelligent load balancing. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 53,021 | Document processing platform for AI — the primary framework for building RAG pipelines, with deep integration across LLM providers and vector stores. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,734 | High-performance, cloud-native vector database designed for next-gen AI workloads, offering hybrid sparse+dense search and production-grade reliability. |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | Rust | 11,994 | Developer-friendly embedded vector database for multimodal AI, optimized for low-latency retrieval with minimal operational overhead. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,659 | Open-source AI memory platform enabling persistent long-term memory for agents using small models — dramatically reduces token costs for context. |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Python | 42,888 | Self-evolving context database unifying agent memory, RAG knowledge, and skills into a single retrieval layer for AI agents. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 40,798 | Vectorless, reasoning-based RAG that uses LLM reasoning instead of embedding similarity — claims significant accuracy improvements for complex queries. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,520 | Drop-in memory infrastructure for AI agents and apps — provides persistent, cross-session context that survives model restarts. |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 88,010 | Open-source AI-native web crawler optimized for LLM consumption — structured extraction with 1,000 free API credits/month and full self-hosting support. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 80,953 | Token compression library, proxy, and MCP server that reduces LLM context by 20% for coding agents and 60–95% for JSON-heavy workloads. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,790 | Agent-native RAG engine that evolved into context infrastructure — handles deep document understanding for complex, multi-hop queries. |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | TypeScript | 12,735 | MCP server enabling Claude Code to search entire codebases as context — transforms code search from keyword to semantic, agent-native retrieval. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 153,913 | Converts codebases, docs, SQL schemas, and PDFs into queryable knowledge graphs — uses deterministic AST parsing rather than vectors for precise code reasoning. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,973 | Collaborative workspace for building Agentic workflows and RAG pipelines — bridges the gap from prototype to production with rich model and tool support. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 159,654 | User-friendly AI interface supporting Ollama, OpenAI API, and more — the go-to self-hosted UI for running local models. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 115,111 | Gives AI agents eyes across the internet — reads and searches Twitter, Reddit, YouTube, GitHub, Bilibili, and Xiaohongshu via a single CLI with zero API fees. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 50,373 | Lightweight open-source personal AI agent — designed for resource-constrained environments while maintaining full agent capability. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 39,017 | Personal trading agent that monitors markets, analyzes signals, and executes trades autonomously via a vibe-coded natural language interface. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 145,888 | Automated HD short-video generator — takes a topic or keyword and produces TikTok/YouTube Shorts content via an AI workflow pipeline. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TypeScript | 123,861 | Agentic finance research platform — orchestrates multi-agent systems to analyze markets, earnings, and news for investment decisions. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 74,880 | LLM-powered multi-market stock analysis with real-time news, decision dashboards, and cost-free scheduled runs across exchanges. |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 63,446 | Lifelong personalized AI tutoring system — adapts to learner progress over time for individualized educational outcomes. |

---

## 3. Trend Signal Analysis

Today's data reveals three distinct waves of momentum in the AI open-source ecosystem:

**Wave 1 — Agent Skill Standardization.** The most explosive trend is the emergence of **skill frameworks as the dominant agent extensibility model**. Projects like `stitch-skills`, `superpowers`, `CLI-Anything`, and the broader MCP (Model Context Protocol) ecosystem signal that the community has coalesced around composable, standardized skills rather than monolithic agent designs. This mirrors the plugin architecture pattern from web2 and represents a maturation of how agents are extended. The involvement of Google Labs (`stitch-skills`) alongside independent developers signals broad institutional buy-in.

**Wave 2 — Agent Memory & Knowledge Infrastructure Maturing.** Vector databases and memory systems now represent the most active topic category by repository count and star volume. The shift from pure vector retrieval (Qdrant, LanceDB) toward **reasoning-based retrieval** (PageIndex), **knowledge graphs** (Graphify, 153k ★), and **persistent agent memory** (mem0, cognge, headroom) indicates the community recognizes that stateless RAG is insufficient for production agents. Token compression tools like `headroom` (60–95% JSON reduction) respond to the economic reality that context costs are a primary bottleneck.

**Wave 3 — LLM Democratization and Evaluation.** The `minimind` project (train a 64M model in 2 hours) and `opencompass` (100+ evaluation datasets) bookend a growing trend: the community is building **complete toolchains for model training, evaluation, and deployment** outside of major lab control. The prominence of education-oriented projects (`LLMs-from-scratch`, 109k ★; `tiny-llm`) suggests the ecosystem is investing in reducing barriers to entry for the next generation of AI builders.

---

## 4. Community Hot Spots

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — The highest-momentum AI infrastructure project today (+1,046 ★). Its 550+ data provider integrations make it the de facto standard for giving agents live web access. Any agent framework should integrate with it.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0) + [topoteretes/cognee](https://github.com/topoteretes/cognee)** — Persistent memory for agents is transitioning from nice-to-have to required. These projects offer production-ready memory layers that dramatically improve agent continuity across sessions at low cost.

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — Knowledge graph–based code understanding is gaining traction (153k ★). Its deterministic AST parsing approach offers a compelling alternative to vector-based code search for coding agents that need precise, explainable reasoning.

- **[trycua/cua](https://github.com/trycua/cua)** — Computer-use agent infrastructure is nascent but critical. `cua` provides the open-source sandboxing and benchmarking layer that the field needs to move beyond proprietary computer-use implementations.

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — The LLM training democratization wave is accelerating. Projects that make model training accessible (hours, consumer hardware) are strategically important as the community seeks independence from API-gated model access.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*