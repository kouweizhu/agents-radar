# AI Open Source Trends 2026-11-26

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-26 04:19 UTC

---

<think>Let me analyze this data carefully to create a comprehensive AI Open Source Trends Report.

First, let me filter for AI-related projects from both data sources:

**From Trending (Today's Stars):**
1. elementalsouls/Claude-BugHunter - AI red-team/bug hunting
2. obra/superpowers - Agentic skills framework
3. HKUDS/CLI-Anything - AI agent-native software
4. jingyaogong/minimind - LLM training
5. cursor/plugins - AI coding tool plugins
6. firecrawl/firecrawl - Knowledge infrastructure for AI agents
7. openvinotoolkit/openvino - AI inference optimization
8. cathrynlavery/diagram-design - AI diagrams for coding agents
9. mvanhorn/last30days-skill - AI agent research skill
10. google-labs-code/stitch-skills - Agent skills library
11. mjmirza/app-store-compliance - AI coding agent skill
12. Tracer-Cloud/opensre - CI/CD agent
13. toeverything/AFFiNE - Knowledge base with AI (partial)
14. zhouxiaoka/autoclip - AI video clipping

Non-AI to exclude:
- nginx/nginx - Web server (NOT AI)
- XiaoYouChR/Ghost-Downloader-3 - Downloader (NOT AI)

**From AI Topic Search (80 repos):**
Many are clearly AI/ML related. Let me categorize them:

Infrastructure:
- openvinotoolkit/openvino
- tensorflow/tensorflow
- pytorch/pytorch
- keras-team/keras
- Cursor plugins / Stitch skills
- langchain4j/langchain4j
- ollama/ollama

AI Agents/Workflows:
- NousResearch/hermes-agent


- langchain-ai/langchain
- langchain-ai/langgraph
- CopilotKit/CopilotKit
- codewhale-hq/Codewhale
- can1357/oh-my-pi
- HKUDS/nanobot
- zh

AI Applications:
- open-webui/open-webui
- CherryHQ/cherry-studio
- Mintplex-Labs/anything-llm
- siyuan-note/siyuan
- HKUDS/Vibe-Trading
- daily_stock_analysis
- hugohe3/ppt-master
- career-ops-hq/career-ops
- Agent-Reach
- MoneyPrinterTurbo
- TradingAgents

LLMs/Training:
- jingyaogong/minimind
- rasbt/LLMs-from-scratch
- ultralytics/ultralytics
- transformers/huggingface
- open-compass/opencompass
- skyzh/tiny-llm

RAG/Knowledge:
- meilisearch/meilisearch
- volcengine/OpenViking
- milvus-io/milvus
- qdrant/qdrant
- lancedb/lancedb
- Graphify-Labs/graphify
- InfiniteFlow/ragflow
- crawl4ai
- headroom
- mem0ai/mem0
- run-llama/llama_index
- thedotmack/claude-mem
- topoteretes/cognee
- langgenius/dify
- zilliztech/claude-context

Now I'm organizing the most compelling projects across different categories. The Infrastructure section includes OpenVINO for deployment optimization and Firecrawl for web scraping capabilities, both showing significant activity.

For AI Agents and Workflows, there are several active projects worth highlighting: Claude-BugHunter for security testing, Superpowers as an agentic framework, CLI-Anything enabling agent-native CLI tools, and Stitch-Skills providing extensible agent capabilities. These tools represent different approaches to building and enhancing autonomous agents.

In the Applications space, AFFiNE stands out as a knowledge base combining notes and wikis with AI features, while AutoClip offers automated video editing functionality. Both have attracted substantial developer interest with hundreds of new stars in recent days.

For training and model development, MiniMind enables rapid 64M model creation from scratch, with significant community engagement showing over 800 new stars.

RAG and knowledge systems are well-represented with Firecrawl handling web scraping for agent contexts, and tools like Graphify and InfiniteFlow providing knowledge graph and retrieval capabilities. 3. **Trend Signal Analysis** (200-300 words)

4. **Community Hot Spots** (bullet list)

Now I'm ready to write the actual report in English with professional, concise language and GitHub links for each project. The report should be 200-300 words for the trend analysis and include a bullet list of community hot spots.
</think>


# AI Open Source Trends Report — 2026-11-26

---

## 1. Today's Highlights

The AI open-source ecosystem is experiencing a decisive shift toward **agent-native tooling**. Three major trends dominate today's activity: First, specialized agent *skills* and *frameworks* are proliferating rapidly — projects like Superpowers, CLI-Anything, and Stitch-Skills define how autonomous agents execute complex, multi-step tasks. Second, **knowledge infrastructure for agents** is a breakout category, with Firecrawl (1,135★ today) and Graphify (153K★ total) addressing the fundamental need for agents to access, crawl, and reason over external data. Third, **democratized LLM training** continues gaining momentum; MiniMind's "train a 64M model in 2 hours" narrative has resonated strongly (826★ today), reflecting developer appetite for accessible, from-scratch training resources. Meanwhile, the explosion of AI coding agent plugins (Cursor, Claude Code, Codex) and compliance/workflow automation tools signals that the ecosystem is maturing beyond experimentation into production-oriented tooling.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | 0 (191 today) | Intel's open-source toolkit for optimizing and deploying AI inference across CPU, GPU, and edge devices; critical for production deployment pipelines. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 210,196 (1,135 today) | Unified API aggregating 550+ data providers for AI agent knowledge retrieval; transforms the web into agent-accessible structured data. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 188,149 | Local LLM runtime enabling one-command deployment of models including DeepSeek, Qwen, and Gemma; foundational for local-first AI development. |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 45,431 | Build resilient, stateful multi-actor applications atop LLMs; addresses agent reliability in production — a top priority for the community. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 0 (1,652 today) | 85-skills bundle for Claude Code covering red-team work, 24 vulnerability classes, and enterprise attack matrices; today's #1 star gainer. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (903 today) | Agentic skills framework and software development methodology; formalizes how agents should plan, execute, and chain capabilities. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0 (1,106 today) | Makes all software "agent-native" — enables AI agents to interact natively with any CLI tool; strong momentum at 1,106★ today. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (355 today) | Standardized skill library for the Stitch MCP server; compatible with Claude Code, Cursor, and Gemini CLI — signals cross-platform skill interoperability. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,982 | The frontend stack for agents and generative UI, including the AG-UI protocol; bridges agent backends with React/Angular/Slack frontends. |
| [ NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 266,148 | The highest-starred AI agent repo in today's dataset; positioned as an agent that grows with the user, reflecting adaptive agent architectures. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 50,341 | Lightweight open-source personal agent from HKUDS; designed for easy deployment and extensibility. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | TypeScript | 0 (574 today) | Privacy-first knowledge base merging planning, sorting, and creating — direct Notion/Miro competitor with AI collaboration features. |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 0 (880 today) | AI-powered video clipping tool that auto-generates short-form content for TikTok, YouTube Shorts, and Instagram Reels from long videos. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | TypeScript | 123,786 | Agentic finance research platform; combines multi-agent orchestration with financial data for automated investment analysis. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 80,257 | AI-driven PowerPoint generation from documents — native shapes, charts, animations, and audio narration; targets enterprise productivity. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 84,901 | Open-source AI job search agent that scores roles against CVs, generates ATS-friendly resumes, and tracks applications — runs locally in coding agents. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 71,125 (826 today) | Train a 64M LLM from scratch in 2 hours; has become the definitive entry point for developers learning LLM training mechanics. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 109,062 | Step-by-step ChatGPT-like LLM implementation in PyTorch; one of the most-starred ML educational resources, widely referenced in the community. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,340 | The standard model-definition framework for state-of-the-art ML across text, vision, audio, and multimodal tasks; the backbone of open-source AI. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,644 | Comprehensive LLM evaluation platform supporting 100+ datasets and models from OpenAI, Anthropic, DeepSeek, and Qwen; essential for benchmarking. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 63,757 | YOLO object detection, segmentation, and classification; maintains the strongest momentum in computer vision tooling. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 153,450 | Transforms codebases, docs, SQL schemas, and PDFs into queryable knowledge graphs; offers AST-based parsing with fully explained edges — no vector store required. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,730 | Agent-native RAG engine evolved into context infrastructure; supports deep document understanding and structured retrieval pipelines. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,484 | The memory layer for AI agents — persistent, production-ready context that adapts across sessions; addresses long-standing agent memory challenges. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,743 | Cloud-native vector database built for massive-scale ANN search; the most deployed open-source vector database in production environments. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,622 | Open-source AI memory platform enabling persistent long-term memory using small models; reduces token costs while maintaining agent continuity. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,714 | High-performance, massive-scale vector database in Rust; known for speed and cloud-native scalability for next-generation AI applications. |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,925 | Build Agentic workflows and RAG pipelines with rich model/tool support; bridges prototype to production with collaborative workspace features. |

---

## 3. Trend Signal Analysis

Today's GitHub activity reveals three interconnected macro-trends reshaping the AI open-source landscape:

**Agent Skills as a First-Class Primitive.** The most striking signal is the emergence of *agent skills* as a dominant architectural pattern. Projects like Superpowers, CLI-Anything, Stitch-Skills, and Claude-BugHunter are not monolithic agents — they are modular skill bundles that agents compose at runtime. This mirrors the shift from monolithic apps to microservices: agents are becoming orchestration platforms, and skills are the deployable units. The community is rapidly standardizing skill formats (e.g., the Agent Skills open standard referenced in Stitch-Skills), which suggests a future where skills are pip-installed into agents the way npm packages are installed into applications.

**Knowledge Infrastructure Convergence.** RAG and knowledge management tools are consolidating around *agent-native* paradigms. Firecrawl's "knowledge infrastructure to make your agents smarter" positioning — coupled with its 1,135★ single-day gain — signals that raw web crawling is giving way to structured, multi-provider knowledge APIs. Graphify's knowledge graph approach (153K★) and RAGFlow's "context infrastructure" evolution indicate the community is moving beyond simple vector retrieval toward richer, graph-structured, and deterministic knowledge representations.

**Democratization of Foundation Model Training.** MiniMind's viral "2-hour LLM training" narrative (71K★ total, 826★ today) combined with rasbt/LLMs-from-scratch (109K★) shows that educational tooling for training LLMs from scratch is a major community need. This aligns with the broader trend of making AI more accessible — not just consuming APIs, but understanding and modifying the underlying models.

---

## 4. Community Hot Spots

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — Today's fastest-growing AI project (1,652★). Its 85-skill red-team bundle signals that *AI security tooling* is transitioning from research to open-source community tooling; developers building agents should monitor this space closely for vulnerability patterns.

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** — With 1,106★ in a single day, this project codifies a critical pattern: making existing CLI software agent-native. Watch for this to become the standard approach for agent-to-tool integration across the ecosystem.

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 153K★ and growing, this project represents the most mature open-source approach to replacing vector-based RAG with deterministic AST-parsed knowledge graphs. If you are building RAG systems, this is the direction to evaluate for production reliability.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Solving the persistent memory problem for agents with 69K★. As multi-session agent applications scale, memory infrastructure becomes the linchpin; this project is the reference implementation to watch.

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — The entry point for developers who want to understand LLM training end-to-end. Its 2-hour training narrative has made it a community touchstone; expect it to spawn a wave of derivative training tutorials and fine-tuning tools.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*