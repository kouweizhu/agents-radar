# AI Open Source Trends 2026-11-05

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-05 02:43 UTC

---

<think>Let me analyze this data carefully to create a structured AI Open Source Trends Report.

First, let me filter AI-related projects from the trending list and topic search results.

**From Today's Trending (16 repos):**
1. NVIDIA/auto-ontology - AI related (semantic reasoning for LLM/agent workflows)
2. max-sixty/worktrunk - CLI for Git, not AI-specific
3. mattpocock/skills - Agent skills, AI related
4. floci-io/floci - AWS emulator, not AI
5. thedotmack/claude-mem - AI memory for agents


6. vercel-labs/agent-desktop - AI agent desktop, definitely AI related
7. github/spec-kit - Not AI
8. The-PR-Agent/pr-agent - AI PR reviewer, AI related
9. harry0703/MoneyPrinterTurbo - AI video generation, AI related
10. garrytan/gstack - Claude Code setup, AI related
11. FareedKhan-dev/kimi-k3-in-c - LLM inference, AI related
12. JiaFeiMiao-K-Cat/DiscImageStudio - Not AI
13. MichaelCade/90DaysOfDevOps - DevOps learning, not AI
14. D4Vinci/Scrapling - Web scraping, borderline but scrapers can be used for AI

Continuing through the rest of the trending repos to identify which ones are actually AI-focused versus general developer tools or unrelated projects. Now I'm organizing these projects by their primary function—grouping them into categories like AI infrastructure for the foundational tools, agents and workflows for automation frameworks, and applications for specific use cases. I'm also tracking which ones span multiple categories to get a clearer picture of the ecosystem. I'm organizing the top projects by category now—pulling out the most relevant ones from both trending and topic search results to highlight AI agents and frameworks, along with infrastructure tools like inference engines and development platforms.

Continuing through the list to capture the remaining projects across agents, infrastructure, and application layers. Now I'm looking at the top projects across different categories—AI agents and applications like Claude Code, AutoGPT, and specialized tools for coding and job searching, along with infrastructure options like Ollama and Dify for deployment.

Looking at the major trends emerging today, there are a few distinct patterns worth noting. Agentic tooling is exploding in popularity, with frameworks like Vercel's agent-desktop and NVIDIA's auto-ontology gaining serious traction. Memory systems for agents are becoming a hot category too, with tools like claude-mem accumulating significant stars and multiple competing solutions in the space. I'm also seeing some interesting moves toward bringing AI capabilities to the edge, like running a massive model like Kimi K3 on minimal hardware. And there are practical applications emerging—like generating PowerPoint presentations or videos automatically—which suggests the ecosystem is maturing beyond pure infrastructure work into real-world use cases.
</think>


# AI Open Source Trends Report — 2026-11-05

## Step 1 — Filtering

From the 16 trending repositories, **10** were retained as AI-relevant; **6** were excluded (Git worktree CLI, AWS local emulator, SDD toolkit, disc image tool, DevOps curriculum, web scraping). From the 80 topic-search repositories, **all 80** carry AI/ML topic tags and are included.

---

## Step 2 — Categorization & Tables

### 1. Today's Highlights

The most striking signal today is the **convergence of agent memory and context management** as a first-class concern: two independent projects (NVIDIA/auto-ontology and thedotmack/claude-mem) both target deterministic, session-spanning context injection for LLM/agent workflows, together earning over **3,200 new stars in a single day**. Simultaneously, **Vercel's agent-desktop** (2,470 ★ today) signals that AI agents are graduating from CLI tools to persistent desktop experiences with native computer-use capabilities. On the model side, **Kimi K3 running inference in plain C on a single CPU with 8.24 GB RAM** demonstrates that frontier-scale models are becoming commodity to run locally — a strong indicator of the inference-efficiency wave accelerating in the open-source ecosystem. Finally, **skill-sharing infrastructure** (mattpocock/skills at 1,379 ★, scenario-labs/skills) reflects a community shift toward composable, reusable agent primitives rather than monolithic frameworks.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 185,942 | Local LLM inference engine with native support for DeepSeek, Qwen, Kimi, and dozens of other open models; the de-facto standard for self-hosted model serving. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 168,553 | Definitive model-definition library for text, vision, audio, and multimodal models in both inference and training modes; backbone of the open-source ML ecosystem. |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 160,423 | Collaborative workspace for building Agentic workflows and RAG pipelines, deployable on cloud, VPC, or self-hosted; bridges prototype-to-production for AI engineering teams. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,039 | The agent engineering platform providing composable primitives for LLM orchestration, tool calling, and memory management across 50+ provider integrations. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 198,683 (+247) | Web data extraction infrastructure purpose-built for AI agents, enabling real-time web content ingestion at scale with self-hosting and cloud options. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,065 | Build modular and scalable LLM applications in Rust — a systems-language approach to LLM infrastructure offering memory safety and high throughput for production deployments. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,564 | LLM evaluation platform supporting 100+ datasets and models from OpenAI, Anthropic, Gemini, Qwen, DeepSeek, and others; essential for benchmarking in the post-GPT-4 era. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,356 | Idiomatic Java/JVM library for LLM-powered applications with unified APIs over providers and vector stores, including MCP tool-calling and native Spring Boot / Quarkus integration. |

#### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Rust | — (+2,470) | Computer-use CLI for AI agents — the first desktop-grade, persistent agent environment from Vercel Labs, enabling agents to operate across a full GUI session rather than single-turn prompts. |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | Python | — (+2,050) | Semantic, graph-based reasoning layer over raw data that enables deterministic query generation and explainable AI for LLM and agent workflows; a major architectural bet by NVIDIA on structured knowledge over vector retrieval. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 112,934 (+1,172) | Persistent context infrastructure capturing every agent action, compressing with AI, and reinjecting relevant context into future sessions — supports Claude Code, Codex, Gemini CLI, and 8+ other agent runtimes. |
| [ NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 260,585 | An agent framework that adapts and grows with user workflows; notable for its 260k+ star count making it the highest-starred pure agent framework in the ecosystem. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | — (+1,379) | Production-ready skill definitions extracted from a senior engineer's `.agents` directory; represents the emerging pattern of skill-as-code reuse across agent runtimes. |
| [The-PR-Agent/pr-agent](https://github.com/The-PR-Agent/pr-agent) | Python | — (+280) | Open-source automated PR reviewer with multi-model support, inline code suggestions, and CI/CD integration; the original and most battle-tested PR agent in open source. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,521 | The frontend stack for agents and generative UI, providing React/Angular/Mobile components and the AG-UI Protocol for embedding agentic experiences into existing applications. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 120,052 | Open-source library for AI agents to autonomously navigate and interact with web browsers, plus a hosted stealth-browser API for production agent deployments. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | Python | 47,790 | Lightweight multi-agent, multi-model, multi-channel personal AI assistant with memory, skill execution, and self-evolution capabilities; notable for its single-line install philosophy. |

#### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 139,087 (+617) | End-to-end automated video pipeline: given a topic or keyword, it generates a high-definition short video with AI narration, imagery, and editing — now at 139k stars showing strong creator-economy demand. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 73,551 | AI-driven PowerPoint generator producing native `.pptx` decks with shapes, transitions, data charts, and AI-narrated speaker notes from documents or topics; bridges AI content generation and enterprise tooling. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 67,570 | Multi-market AI stock analysis system combining real-time quotes, news ingestion, and LLM-driven decision dashboards with automated push notifications; runs on a zero-cost scheduled basis. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 80,226 | AI job-search agent that scans boards, scores roles against a CV, tailors ATS-friendly resumes and cover letters, and provides interview prep — a concrete vertical application of multi-agent orchestration. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 297,292 | Agent harness optimization system providing skills, instincts, memory, and security primitives for Claude Code, Codex, Opencode, and Cursor — the single highest-starred AI application in this dataset. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 37,663 | Personal AI trading agent integrating market data, sentiment analysis, and automated order execution into a single agentic workflow for retail traders. |

#### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | — (+351) | A 2.78-trillion-parameter Kimi K3 model running inference on a single CPU in 8.24 GB of RAM with no BLAS, no framework, and no GPU — portable C99 implementation that redefines expectations for local inference capability. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 201,315 | Mature open-source ML framework spanning training, serving, and inference across CPUs, GPUs, and TPUs; remains a top choice for large-scale model training and production deployment. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 105,148 | Dynamic neural network framework with GPU acceleration; the dominant framework for research prototyping and training across academia and industry. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 107,828 | Step-by-step PyTorch implementation of a ChatGPT-like LLM; the most-starred educational resource for understanding transformer architecture internals. |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 318 | On-device LLM inference using X-bit quantization for edge deployment; addresses the growing demand for private, offline-capable AI on resource-constrained hardware. |
| [datamllab/OpenEBFM](https://github.com/datamllab/OpenEBFM) | Python | 261 | Open-source energy-based foundation model training and scaling framework — a niche but emerging direction in foundation model research. |

#### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 157,805 | User-friendly AI interface with native Ollama and OpenAI API support; the most-starred open web UI for local LLM deployment and the top RAG-tagged project. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 93,515 | Agent-native RAG engine that evolved into context infrastructure; combines deep document understanding with structured retrieval for enterprise knowledge management. |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 86,914 | Open-source web crawler purpose-built for AI agents with structured extraction and a free hosted API tier; enables RAG pipelines to ingest live web content at scale. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,421 | Drop-in memory infrastructure for AI agents providing persistent, production-grade context across sessions; positions itself as the "memory layer" for the agentic web. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 78,872 | Token compression library that reduces LLM input size by 20% for coding agents and 60–95% for JSON-heavy tasks without accuracy loss; addresses cost and context-window constraints simultaneously. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,597 | Cloud-native vector database built for scalable ANN search at production scale; widely used as the storage backbone for RAG systems across the industry. |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 59,786 | Lightning-fast search engine with AI-powered hybrid search capabilities; increasingly used as a lightweight alternative to dedicated vector databases for smaller-scale RAG deployments. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,077 | Open-source AI memory platform enabling persistent long-term memory for agents using small models; competes directly with mem0 in the agent-memory space. |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | Jupyter Notebook | 30,230 | Curated collection of advanced RAG techniques with executable notebook tutorials; the most comprehensive open educational resource for RAG practitioners. |

---

### 3. Trend Signal Analysis

Today's hot list reveals three intersecting waves of momentum. The first and most pronounced is the **agent memory and context layer** — a category that barely existed two years ago but now commands multiple high-velocity projects. NVIDIA/auto-ontology (graph-based semantic reasoning) and thedotmack/claude-mem (session-spanning context compression) both earned thousands of stars in a single day, signaling that the community recognizes context quality as the primary bottleneck in agent reliability. This aligns with recent industry focus on "agentic RAG" and long-context window alternatives.

The second wave is **inference accessibility at the edge**. FareedKhan-dev/kimi-k3-in-c demonstrates a 2.78T parameter model running on a consumer-grade CPU with 8 GB RAM, in pure C99 with no external dependencies. This is a direct extension of the efficiency-first trajectory established by llama.cpp and vLLM, but pushes the boundary further: if a single-file C implementation can serve a near-frontier model locally, the economics of self-hosted AI change dramatically for individuals and small teams.

The third signal is the **desktop-ification of AI agents**. Vercel's agent-desktop project (2,470 ★ today) and the proliferation of skill-reuse infrastructure (mattpocock/skills, scenario-labs/skills) suggest that the ecosystem is moving past the "chatbot in a terminal" paradigm toward persistent, multi-session agent environments with composable skill graphs. This is consistent with Anthropic's Computer Use API and OpenAI's agent mode announcements from recent weeks.

---

### 4. Community Hot Spots

- **[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)** — The graph-based reasoning approach from a major AI lab signals a shift from embedding-vector similarity toward structured knowledge graphs as the backbone for agentic RAG; worth integrating for any production agent pipeline requiring explainability.
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — Pure C, zero-dependency inference of a 2.78T model on a laptop is a proof-of-concept that frontier models can be fully commoditized; watch this space for derivative implementations and performance optimization.
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — Token compression at 60–95% reduction for structured data is a high-leverage tool for any team hitting context-window limits or API cost ceilings; deployable as a library, proxy, or MCP server.
- **[mattpocock/skills](https://github.com/mattpocock/skills)** — The skill-as-code pattern (publishing reusable `.agents` directories as open-source packages) is nascent but highly impactful; expect this to become a standard distribution mechanism for agent capabilities analogous to npm for JavaScript.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — At 297k stars, this agent harness optimization framework is the most widely adopted AI application in the ecosystem; its patterns (skills, instincts, memory, security primitives) represent the emerging best-practice architecture for coding agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*