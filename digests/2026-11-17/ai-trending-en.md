# AI Open Source Trends 2026-11-17

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-17 04:44 UTC

---

<think>Let me analyze the data provided and create a structured AI Open Source Trends Report.

First, let me filter for AI/ML-related projects:

**Today's Trending (15 repos) - Filtering for AI relevance:**

1. **ag-ui-protocol/ag-ui** - AI Infrastructure - AG-UI protocol for agent-user interaction
2. **backnotprop/plannotator** - AI Agents - Agent workspace
3. **dream-num/univer** - AI Applications - AI office SDK
4. **tradermonty/claude-trading-skills** - AI Applications - Claude Code trading skills
5. **elementalsouls/Claude-BugHunter** - AI Applications - Bug hunting skills
6. **getarcaneapp/arcane** - NOT AI (Docker management)
7. **DeanChensj/jiangshan-map** - NOT AI (Historical map)
8. **google-labs-code/stitch-skills** - AI Infrastructure - Agent skills library
9. **mvanhorn/last30days-skill** - AI Agents - AI skill for research
10. **NVIDIA/SkillEvaluator** - AI Infrastructure - Evaluating AI agent skills
11. **alibaba/open-code-review** - AI Applications - Code review tool
12. **google-research/paper-orchestra** - AI Agents - Multi-agent research paper writing
13. **ChromeDevTools/chrome-devtools-mcp** - AI Infrastructure - Chrome DevTools MCP
14. **sveltejs/svelte** - NOT AI (web framework)
15. **kajisho5/ffmpeg-skill** - AI Infrastructure - FFmpeg tools for agents

**AI Topic Search Results (82 repos) - All seem AI-related, but let me categorize:**

Let me now organize by category:

### 🔧 AI Infrastructure:


The ecosystem includes several orchestration and agent development frameworks like LangChain, LangChain4j, and LangGenius Dify for building AI workflows, plus tools like LlamaIndex and txtai for document processing. Open WebUI provides user interfaces for model interaction, while frameworks like Rig and OpenCompass support LLM application development and evaluation. There are also specialized tools like Nestia for chatbot development and crawl4ai for data ingestion.

The agent framework landscape spans multiple projects including Hermes Agent, AutoGPT, and OpenClaude for autonomous task execution. Browser-use enables web automation through AI agents, while tools like CopilotKit and AG-UI focus on frontend integration and protocol standardization. Career automation, Claude Code learning resources, and productivity-focused agents like Claude Mem address specific use cases from job search to session memory management.

Open-source personal agents like CowAgent and Nanobot provide lightweight alternatives to commercial solutions. Productivity tools include PPT Master for presentations, Daily Stock Analysis for financial data, and CodeWhale for coding assistance. Vibe-Trading targets algorithmic trading while DeepSeek-Reasonix emphasizes reliability in coding tasks.

Infrastructure layer includes web scraping capabilities through Firecrawl and OpenBB, Docker container management, observability platforms like Netdata, and specialized skills like the FFmpeg MCP server for video processing and Chrome DevTools integration for browser automation.

The vector database ecosystem is particularly robust with solutions like Milvus, Qdrant, Weaviate, and LanceDB offering high-performance storage and retrieval. OpenViking provides a self-evolving context database, while PageIndex and Cognee address specific RAG optimization needs. Lightweight alternatives like ZVec and txtai enable semantic search and language model orchestration.

For large language models, Ollama dominates with broad model support, while Hugging Face Transformers remains the standard for model definitions. Dify enables workflow-based LLM orchestration, and Claude Context enhances code search capabilities for development teams. The memory layer for AI Agents is emerging as a critical component, with mem0 providing persistent context management across interactions. Browser automation tools like browser-use extend agent capabilities into web interactions.

Additional tools support specialized agent functions: crawl4ai handles web scraping for agent contexts, headroom compresses tool outputs and RAG chunks to optimize token usage, and graphify transforms codebases into queryable knowledge graphs. For coding agents specifically, tools like caveman reduce token consumption through optimized prompting strategies.

Memory and context management for agents includes solutions like claude-mem for persistent session context and siyuan for privacy-focused knowledge workspaces. Open-compass provides evaluation capabilities across diverse model types and datasets. On-device inference platforms like picollm enable local model execution, while home-llm brings LLM capabilities into smart home automation. Academic tooling like paper-orchestra facilitates multi-agent research paper generation, and tools like last30days-skill aggregate research across social platforms. Trading-specific agents include Vibe-Trading and TradingAgents for financial market applications.

Additional specialized agents handle career operations with job application support, PPT generation, stock analysis pipelines, bug hunting, trading skill development, and FFmpeg-based video editing capabilities. Infrastructure tools round out the ecosystem with Chrome DevTools integration, NVIDIA's skill evaluation framework, Stitch's agent skills library, and open-source code review systems.

The most significant projects gaining traction today are univer with substantial momentum, followed by NVIDIA's skill evaluation tool, alibaba's code review solution, Chrome DevTools MCP integration, and claude-trading-skills for specialized agent capabilities.

Looking at the broader landscape, browser-use maintains the highest adoption with deep investor interest, while firecrawl, langchain, and dify represent established infrastructure. Hermes-agent, ecc, autogen, and open-webui form the core agent framework ecosystem, with memory management tools like mem0 gaining increasing importance for agent reliability.

The momentum analysis reveals agent skills as the dominant pattern emerging across all major players—Anthropic's Claude Code, OpenAI's Codex, Google's Gemini CLI, and Cursor are all converging on this architectural approach. The MCP protocol standardization continues accelerating, with Chrome DevTools and FFmpeg implementations signaling broader tool integration. The distinction between "Agentic RAG" and traditional knowledge retrieval is becoming clearer as agents require more sophisticated context management, while evaluation frameworks for agent performance are gaining serious investment from major vendors.
</think>


# AI Open Source Trends Report — 2026-11-17

---

## Step 1: Filtered AI/ML Projects

From 15 trending repos and 82 topic-tagged repos, I filtered out non-AI projects (Docker management, historical maps, web frameworks) and retained **72 AI-relevant repositories** for analysis.

---

## Step 2: Categorized Tables

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,732 | The agent engineering platform providing abstractions for building LLM-powered applications with chains, tools, and memory. Remains the dominant orchestration framework despite fragmented ecosystem competition. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 187,290 | Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models. The local inference standard for developers self-hosting LLMs without cloud dependencies. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,096 | Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio, and multimodal models. The foundational library for model loading and inference across the open-source ML ecosystem. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,597 | LLM evaluation platform supporting 100+ datasets across knowledge, reasoning, coding, science, language, long-context, and safety. Critical for benchmark-driven model selection as evaluation rigor increases. |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Python | 873 (+873) | Multi-tier framework for evaluating AI agent skills with quality gates, semantic overlap detection, and live agent evaluation. Signals growing need for standardized skill quality assessment as agent marketplaces emerge. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 841 (+841) | Chrome DevTools for coding agents — brings browser debugging into agent toolchains. Extends MCP protocol into frontend development workflows, a previously underserved agent capability gap. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 529 (+529) | Agent Skills library designed for Stitch MCP server compatibility with Claude Code, Cursor, and Gemini CLI. Demonstrates cross-platform agent skill portability beyond vendor lock-in. |
| [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Python | 367 (+367) | 42 FFmpeg tools with machine-readable contracts and an MCP server for coding agents. No cloud, no API keys — local video processing capability for agents that need multimodal content generation. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,412 | Idiomatic Java library for LLM applications with unified API over providers, tool calling, MCP support, and RAG. Targets the enterprise JVM ecosystem largely underserved by Python-centric AI tooling. |

---

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 263,974 | "The agent that grows with you" — Nous Research's flagship agent framework with adaptive learning capabilities. The highest-starred pure agent framework, indicating strong community investment in autonomous agent paradigms. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 304,744 | Agent harness performance optimization system with skills, instincts, memory, and security for Claude Code, Codex, and Cursor. The #1 starred project in this dataset — signals massive developer investment in agent reliability engineering. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 188,068 | The original autonomous AI agent project, now evolved into accessible building blocks for everyone. Pioneer project that defined the modern agent framework category and maintains strong community momentum. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 121,251 | Open-source Python library for AI browser agents with stealth browsers and hosted API. Bridges the gap between agent reasoning and real-world web interaction at scale. |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,313 | Build Agentic workflows, RAG pipelines with rich AI model and tool support on a collaborative workspace. The leading open-source alternative to commercial workflow orchestration platforms. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,749 | The Frontend Stack for Agents & Generative UI, makers of the AG-UI Protocol. Positioned as the standard for integrating generative AI into user-facing applications. |
| [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | Python | 313 (+313) | Multi-agent framework for automated AI research paper writing — orchestrates multiple agents for literature review, hypothesis generation, and manuscript drafting. A novel application of multi-agent systems to scientific discovery. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 135 (+135) | AI agent skill that researches topics across Reddit, X, YouTube, HN, Polymarket, and web — synthesizes grounded summaries. Represents the emerging "agent-as-analyst" pattern for real-time market and sentiment intelligence. |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | 696 (+696) | Agent workspace for shaping, deciding, planning, annotating, reviewing code, and sharing team feedback with agents. Bridges human collaboration and agent execution in a unified interface. |

---

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 1,828 (+1,828) | Build your own AI office with Univer Office SDK — editing, calculation, collaboration, and file processing for people and AI agents. Today's highest star-gaining project signals strong demand for AI-integrated productivity suites. |
| [elementalsourcel/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 1,094 (+1,094) | Claude Code skill bundle for bug hunting and red-team work — 82 skills, 15 slash commands, 681 vulnerability patterns across 24 core vulnerability classes. A specialized agent application for security engineering. |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 837 (+837) | Claude Code skills for equity investors — market analysis, technical charting, economic calendars, screeners, and strategy development. Democratizes quantitative finance capabilities for retail investors via agent tools. |
| [alibaba/open-code-review](https://github.com/alibaba/alibaba/open-code-review) | Go | 951 (+951) | Battle-tested code review tool at Alibaba scale: deterministic pipelines + LLM Agent with line-level comments and multi-language security rules (NPE, thread-safety, XSS, SQL injection). Demonstrates enterprise-grade agent security tooling. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 83,145 | Open-source AI job search agent — scans boards, scores jobs against CV, tailors resumes, covers letters, and tracks applications. The highest-starred vertical AI application in this dataset. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 77,617 | AI turns documents or topics into native PowerPoint decks with shapes, transitions, charts, and audio narration. Bridges document understanding and presentation generation for business users. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 72,871 | LLM-powered multi-market stock analysis with real-time news, decision dashboard, and cost-free scheduled runs. Brings AI-driven financial intelligence to individual traders without expensive data subscriptions. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 144,065 | Generate HD short videos from a topic or keyword with automated AI workflow. High star count reflects strong developer interest in AI content generation pipelines. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 122,875 | Multi-Agent LLM Financial Trading Framework — combines multiple specialized agents for market analysis, decision-making, and execution. The most sophisticated open-source trading agent framework available. |

---

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 187,290 | Already listed under Infrastructure — critical for local model inference serving as the foundation for training and fine-tuning experimentation. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,597 | LLM evaluation platform supporting 100+ datasets across knowledge, reasoning, coding, and safety benchmarks. Essential for model selection and training quality assessment. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,747 | Learn LLM inference system on Apple Silicon — build a tiny vLLM + Qwen. Educational project demystifying inference optimization for systems engineers entering ML infrastructure. |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 320 | On-device LLM inference powered by X-Bit quantization. Represents the edge AI trend of running capable models on resource-constrained devices without cloud dependency. |
| [acon96/home-llm](https://github.com/acon96/home-llm) | Python | 1,498 | Home Assistant integration using local LLM to control smart home. Bridges the gap between capable open LLMs and practical IoT automation for privacy-conscious users. |

---

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 158,869 | User-friendly AI Interface supporting Ollama, OpenAI API, and local models with RAG capabilities. The leading open-source ChatGPT alternative with full local deployment privacy. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,925 | Document processing platform for AI — the standard framework for building RAG pipelines with LlamaIndex data structures and query engines. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 149,138 | Turn any codebase, docs, SQL schemas, and PDFs into a queryable knowledge graph. A skill for Claude Code, Cursor, Codex, and Gemini CLI with local deterministic AST parsing — no vector store required. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 117,754 | Persistent Context Across Sessions for Every Agent — captures agent actions, compresses with AI, injects relevant context into future sessions. Works with Claude Code, Codex, Gemini, and more. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,275 | Agent-native RAG engine grown into context infrastructure — deep document understanding with configurable chunking strategies. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,088 | The Memory Layer for AI Agents — drop-in memory infrastructure with persistent context for production AI applications. 69K stars in a new category signals critical need for agent state management. |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,458 | Apache-2.0 web crawler for AI agents — extracts structured data for RAG pipelines. Powers both cloud API and self-hosted deployment options. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,676 | High-performance, cloud-native vector database for scalable ANN search. The most starred dedicated vector database in the ecosystem. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,598 | High-performance vector database for the next generation of AI with cloud offering. Known for speed and hybrid search capabilities. |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | Rust | 11,913 | Developer-friendly embedded retrieval library for multimodal AI — designed for simplicity with embedded deployment. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 40,452 | Document Index for Vectorless, Reasoning-based RAG — challenges the assumption that vector databases are always necessary for retrieval. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,356 | Open-source AI memory platform for agents with persistent long-term memory using small models for free. Competes with mem0 in the agent memory category. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,859 | Compress tool outputs, logs, and RAG chunks before reaching the LLM — 20% fewer tokens for coding agents, 60-95% fewer tokens for JSON. Essential for cost optimization in production RAG pipelines. |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | TypeScript | 12,694 | Code search MCP for Claude Code — makes entire codebase the context for any coding agent. Demonstrates RAG principles applied to software development workflows. |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 47,266 | Privacy-first, self-hosted knowledge workspace where humans and AI agents collaborate. Growing star count reflects demand for private AI knowledge management. |

---

## 3. Trend Signal Analysis

**The dominant signal from today's data is the explosive proliferation of Agent Skills frameworks.** Across trending repos, we see a convergence: Claude Code (Anthropic), Codex (OpenAI), Cursor, and Gemini CLI are all being extended through standardized skill packages — trading strategies, bug hunting, FFmpeg operations, research synthesis, Chrome DevTools. This "skills marketplace" pattern signals that the AI agent ecosystem is maturing from monolithic agents toward composable, specialized tools that developers can mix-and-match.

**The MCP (Model Context Protocol) is becoming infrastructure.** Chrome DevTools MCP and the FFmpeg MCP server are not isolated experiments — they represent a growing ecosystem of tools exposing standardized interfaces for agents. This mirrors the early evolution of package managers: just as npm democratized JavaScript libraries, MCP is poised to democratize agent capabilities.

**Memory infrastructure has emerged as a distinct, high-growth category.** Projects like mem0, cognite, claude-mem, and headroom occupy a specific niche: managing what agents remember across sessions. This category barely existed 18 months ago and now commands 300K+ combined stars — indicating that persistent agent memory is transitioning from novelty to production requirement.

**Vertical AI applications are gaining disproportionate traction.** Trading agents (TradingAgents, Vibe-Trading, daily_stock_analysis), career automation (career-ops), and productivity suites (univer) all show strong momentum. This suggests developers are moving beyond "building agents" to "deploying agents" in specific professional contexts.

---

## 4. Community Hot Spots

- **[ECC](https://github.com/affaan-m/ECC)** — Highest-starred project in the dataset; the agent harness optimization system is becoming the de facto baseline for reliable coding agent deployments. Watch for its architecture to influence enterprise agent standards.

- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** — With skills frameworks multiplying, quality evaluation is the unglamorous but essential infrastructure this ecosystem needs. NVIDIA's backing signals institutional confidence in the skills paradigm.

- **[univer](https://github.com/dream-num/univer)** — Today's fastest-rising AI project; signals that "AI-native office suites" are transitioning from concept to community adoption. Its extensible SDK approach could become the basis for vertical AI office solutions.

- **Agent Memory Stack (mem0 + cognite + claude-mem)** — The battle for agent memory supremacy is underway. Each takes a different approach: external API (mem0), local small models (cognee), session persistence (claude-mem). Developers should evaluate all three for production use cases.

- **[browser-use](https://github.com/browser-use/browser-use) + MCP expansion** — The combination of browser automation and standardized tool protocols (MCP) is creating a new category of "web-capable agents" that can interact with real-world interfaces. This bridges the gap between agent reasoning and live web environments.

---

*Report generated from GitHub trending data — 2026-11-17*

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*