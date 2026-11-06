# AI Open Source Trends 2026-11-06

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-06 02:46 UTC

---

<think>Let me analyze the GitHub data provided and create a structured AI Open Source Trends Report.

First, let me filter for AI-relevant projects:

**From Today's Trending (14 repos):**
1. NVIDIA/auto-ontology - AI framework for semantic, graph-based reasoning - AI ✓
2. mattpocock/skills - Skills for engineers, seems general but could be AI-adjacent
3. garrytan/gstack - Claude Code setup tools - AI ✓ (AI agent tools)
4. Usagi-org/ai-goofish-monitor - AI/Playwright for Xianyu monitoring - AI ✓


5. D4Vinci/Scrapling - Web scraping framework - Not AI primary
6. vercel-labs/agent-desktop - Computer use CLI for AI agents - AI ✓
7. max-sixty/worktrunk - Git worktree management for AI agents - AI-adjacent
8. google/skills - Agent Skills for Google products - AI ✓
9. vercel-labs/agent-browser - Browser automation CLI for AI agents - AI ✓
10. scenario-labs/skills - AI image/video/audio generation skills - AI ✓

Continuing through the remaining trending repos to identify all AI-related projects and categorize them by relevance and impact.

Now I'm moving into the Topic Search Results section to analyze the top repositories across different categories, starting with the LLM models, AI agents, RAG systems, machine learning frameworks, and large language model repositories.

I'm continuing through the list and noting that several projects should be filtered out since they're not directly AI-focused—like the frontend checklist, note-taking application, and observability tools. That brings me to around 15 AI-related projects from today's trending repos that I need to categorize and include in the report. I'm compiling the repository list with today's star counts, though I notice some entries are missing star data so I'll note those as they appear. I'm working through the data discrepancies—the total star counts seem unreliable for newer repos since many show 0 stars, so I should focus on today's star gains instead. For agent-desktop, I can see it gained 2,173 stars today, but I need to figure out how to handle repos where the total isn't available or doesn't match what I'd expect based on the growth rate. Looking at the rest of the repository list, I can see most of these are showing zero total stars, which doesn't align with their recent activity numbers—these are likely newly created or renamed projects that haven't accumulated historical stars yet. I'll compile the full list with today's star counts where available, noting the ones with missing total star data.

Now I'm organizing everything into the report structure, starting with today's most significant developments: NVIDIA's semantic graph reasoning framework, Vercel's agent tools, the emerging "skills" pattern for agent capabilities, and some practical AI applications like stock analysis and monitoring tools.

For the AI infrastructure section, I'm identifying the core frameworks and toolchains—Rust-based LLM applications, evaluation platforms, inference engines, and developer tools like NVIDIA's ontology framework and Vercel's browser automation CLI.

Now I'm looking at the AI agents and workflows category, which is seeing explosive growth with projects like the agent harness system, AutoGPT, and multi-agent frameworks for trading and coding tasks.

In the applications space, I'm seeing strong momentum around knowledge management and productivity tools—open-source web interfaces, agent development platforms like Dify, code analysis systems, and content generation tools that are all gaining significant traction with thousands of new stars in the past day. I'm noticing the star counts seem inconsistent with the growth numbers—some repositories show thousands of daily stars but relatively low total counts, which suggests either these are newly created or the data might be mixed up. I'll rely on the provided data as-is and list the projects with whatever star information is available.

Now I'm organizing the AI Applications category by total stars to see which tools are gaining the most traction. The list shows a mix of platforms—from browser automation and web crawling tools to code analysis and content generation utilities, with several of them showing significant daily growth alongside their total star counts.

I'm also noting there are more projects to include like the VibeVoice speech processing tool, which is gaining 223 stars today but lacks a total count, and the stock analysis system with massive growth at 67,619 stars total. For the infrastructure side, I'm seeing the foundation models like TensorFlow, Hugging Face Transformers, and PyTorch dominating with hundreds of thousands of stars, while smaller specialized tools like tiny-llm and OpenCompass are also gaining attention despite lower overall numbers.

On the RAG and knowledge side, I'm tracking the retrieval-augmented generation and knowledge management projects—OpenWebUI leads with 157,878 stars and 2,849 today, followed by LangChain at 149,100 stars with 1,267 today, and then various graph-based and semantic search tools like Graphify, crawl4ai, and LlamaIndex all showing solid momentum with their daily growth rates. Now I'm organizing these into a structured format with today's star counts and formatting everything as markdown tables with proper links.
</think>


# AI Open Source Trends Report — 2026-11-06

---

## 1. Today's Highlights

The AI open-source ecosystem is experiencing a sharp pivot toward **agent-native tooling** today. NVIDIA released **auto-ontology**, a semantic graph-reasoning framework that enables deterministic, explainable LLM inference — a notable departure from probabilistic-only approaches and a signal that production-grade agent reliability is becoming a first-class engineering concern. Vercel Labs launched two Rust-based CLI tools (**agent-desktop** and **agent-browser**) that codify the "computer use" pattern for AI agents, accumulating ~2,300 combined stars within hours. In parallel, the "**skills**" abstraction — reusable, composable capabilities callable by AI agents — has emerged as a dominant theme, with at least five independent implementations launched or spotlighted today across Google, Matt Pocock, Scenario Labs, and others. On the application layer, vertical AI tools (stock trading agents, voice AI, multimedia generation) continue to draw massive community interest, signaling that the ecosystem is maturing from infrastructure-building into production deployment.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 201,318 | The foundational ML framework for everyone, covering training and inference across text, vision, audio, and multimodal domains. Remains the most-starred ML repo and a dependency for countless downstream AI projects. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 168,578 | The standard model-definition library for state-of-the-art models across all modalities, both for inference and fine-tuning. Its ecosystem depth makes it the de facto entry point for any new model release. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 105,160 | Dynamic neural network framework with GPU acceleration; its eager-execution model remains the preferred backend for research prototyping and production training alike. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,043 | Local inference engine that has dramatically lowered the barrier to running frontier models (DeepSeek, Qwen, Gemma) on commodity hardware. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,606 | Cloud-native vector database purpose-built for high-performance ANN search at scale, serving as the backbone storage layer for numerous RAG pipelines. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,073 | Rust-native framework for building modular, scalable LLM applications with compile-time safety guarantees — a strategic bet on Rust's growing role in AI systems programming. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,566 | LLM evaluation platform supporting 100+ datasets and models from OpenAI, Anthropic, DeepSeek, and others, covering reasoning, safety, and long-context benchmarks. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,636 | A from-scratch LLM inference system tutorial built on Apple Silicon, teaching vLLM-style optimizations through a Qwen implementation — the clearest systems-level learning resource for LLM internals. |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | Python | 0 (+2,679) | A graph-based semantic reasoning layer over LLM workflows that delivers deterministic query generation and explainable AI — a significant advance for production agent reliability. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 297,913 | Agent harness performance optimization system for Claude Code and Codex, adding skills, memory, security, and research-first development primitives. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 187,913 | The original autonomous agent framework that defined accessible AI for builders; still the reference architecture for agent prototyping. |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 160,493 | Collaborative workspace for building agentic workflows and RAG pipelines with rich model and tool support, deployable from prototype to production. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 120,148 | Open-source library and cloud API for AI browser agents with stealth browser infrastructure, enabling autonomous web navigation at scale. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,100 (+1,267) | The agent engineering platform providing abstractions for chains, tools, and memory — still the most broadly adopted framework for LLM application development. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,533 | The frontend stack for agents and generative UI, including the AG-UI protocol, targeting React, Angular, mobile, and Slack integrations. |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Rust | 0 (+2,173) | Vercel's computer use CLI for AI agents — a Rust-based tool codifying the desktop-as-agent-environment pattern with rapid adoption. |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Rust | 0 (+150) | Companion browser automation CLI from Vercel targeting the same agent-native workflow, signaling a committed platform bet. |
| [garrytan/gstack](https://github.com/garrytan/gstack) | TypeScript | 0 (+612) | A curated 23-tool Claude Code setup encompassing CEO, designer, eng manager, and QA roles — an opinionated "full-stack agent" configuration gaining rapid attention. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 198,992 | AI-powered web data extraction platform with hosted API and self-host option, serving as the data ingestion layer for agents. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 139,826 | Automated HD short-video generation from keywords using LLM-driven workflows — a concrete demonstration of multimodal agent orchestration. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 120,849 | Multi-agent LLM framework for financial trading, combining research, analysis, and execution agents in a production-aligned architecture. |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 86,960 (+1,267) | Apache-2.0 web crawler purpose-built for AI agents with structured extraction, free hosted API, and self-hosting support. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 143,033 | Turns codebases, docs, and schemas into queryable knowledge graphs via deterministic AST parsing — eliminates vector store dependency for code search. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 67,619 | Multi-market AI stock analysis with real-time news, decision dashboards, and zero-cost scheduling — a practical demonstration of LLM-driven finance automation. |
| [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | Python | 0 (+223) | Open-source frontier voice AI from Microsoft targeting real-time speech interaction — a notable addition to the open voice agent landscape. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 107,878 | Step-by-step PyTorch implementation of a ChatGPT-like LLM; the definitive educational resource for understanding transformer architecture from first principles. |
| [EgoAlpha/prompt-in-context-learning](https://github.com/EgoAlpha/prompt-in-context-learning) | Jupyter Notebook | 2,250 | Curated resources for in-context learning and prompt engineering with cutting-edge updates — a living survey of the most impactful LLM usability technique. |
| [datamllab/OpenEBFM](https://github.com/datamllab/OpenEBFM) | Python | 273 | Open-source training and scaling code for energy-based foundation models — representing an emerging alternative paradigm to autoregressive transformers. |
| [AIDASLab/Awesome-Diffusion-LLM](https://github.com/AIDASLab/Awesome-Diffusion-LLM) | Python | 111 | Comprehensive paper collection at the intersection of diffusion models and LLMs — tracks a nascent but rapidly growing research direction. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 157,878 (+2,849) | User-friendly AI interface supporting Ollama and OpenAI APIs, consistently leading daily RAG-topic star growth as the go-to self-hosted frontend. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,483 | The memory layer for AI agents — persistent, production-ready context infrastructure that solves the session-memory problem for autonomous agents. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,822 | Document processing platform for AI with deep indexing, retrieval, and query abstractions — the standard framework for building RAG pipelines. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,096 | Open-source AI memory platform enabling persistent long-term memory for agents using small models at zero cost — a practical memory architecture for production agents. |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | Jupyter Notebook | 30,243 | Tutorial notebooks covering advanced RAG techniques — the community's go-to reference for evolving beyond naive retrieval. |
| [Volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Python | 41,645 | Self-evolving context database unifying agent memory, knowledge RAG, and skills — a broad "context infrastructure" play from ByteDance's cloud division. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | Python | 13,775 | MLsys 2026 Best Paper winner: 97% storage savings for RAG by running compressed索引 on personal devices — a major efficiency breakthrough. |
| [pathwaycom/serviette](https://github.com/pathwaycom/serviette) | Python | 58,727 | No-code RAG server keeping answers in sync with live documents across 8 vector databases — the lowest-friction path to production RAG. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 78,947 | Token compression proxy and MCP server cutting 20–95% of tokens for agent workflows — addresses the cost and context-window bottlenecks directly. |

---

## 3. Trend Signal Analysis

Three interconnected signals dominate today's data, each carrying strategic implications for the ecosystem.

**Signal 1: The "Skills" Abstraction Goes Mainstream.** At least five independent **skills** repositories launched or trended today (NVIDIA, Google, Matt Pocock, Scenario Labs, ConardLi), all encoding the same conceptual pattern: reusable, composable capability units callable by AI agents. This convergence is not coincidental — it reflects a community consensus that agents need a standardized skill interface analogous to how npm standardized JavaScript packages. The implications are significant: if skills become a portable unit of agent capability, the ecosystem will soon need skill registries, versioning, and discovery — creating an entirely new open-source market segment.

**Signal 2: Rust as the Language of Agent Infrastructure.** Both of Vercel's new agent tools (**agent-desktop** and **agent-browser**) are written in Rust, joining the ranks of established Rust AI projects like Ollama and Qdrant. Rust's combination of memory safety, performance, and low-level systems control makes it uniquely suited for the "computer use" paradigm where agents interact with operating system resources. This signals a coming wave of Rust-based agent tooling replacing Python prototypes in performance-critical agent loops.

**Signal 3: Context Infrastructure as a First-Class Concern.** The simultaneous strength of memory platforms (mem0, cognee, headroom, OpenViking) and graph-based knowledge tools (auto-ontology, graphify, pathway) reveals a critical bottleneck the community is actively solving: **how agents maintain coherent, long-horizon context**. The MLsys 2026 Best Paper (LEANN) winning for a 97% storage-reduction RAG technique underscores that efficiency in context management is now a publishable research contribution — not merely an engineering detail.

---

## 4. Community Hot Spots

- **[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) + [agent-browser](https://github.com/vercel-labs/agent-browser)** — Vercel's dual Rust-based CLI tools codify the "AI-as-desktop-user" paradigm. Watch for rapid ecosystem expansion around these as they define the de facto interface for autonomous computer use.

- **[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)** — Graph-based semantic reasoning over LLM workflows is a novel approach to explainability and reliability. If deterministic outputs can be guaranteed alongside probabilistic generation, this pattern could become standard for regulated-industry AI deployments.

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** (297K stars) — The agent harness optimization system with 297K stars is the highest-starred new entry in today's data. Its "skills + instincts + memory" architecture for Claude Code and Codex is setting the benchmark for what a production agent harness looks like.

- **Skills-based ecosystem** (multiple repos) — The convergence on the "skills" abstraction across vendors is the most actionable trend for developers today. Building or packaging skills for agent consumption (as Scenario Labs does for multimedia, or Google does for its product suite) is a low-friction, high-visibility entry point into the ecosystem.

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — The MLsys 2026 Best Paper demonstrates that on-device RAG with 97% storage reduction is both achievable and academically validated. Developers building privacy-first or cost-sensitive AI applications should evaluate this technique as an alternative to cloud-hosted vector search.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*