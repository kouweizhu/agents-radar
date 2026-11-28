# AI Open Source Trends 2026-11-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-28 04:09 UTC

---

<think>Let me analyze this data systematically to create a comprehensive AI Open Source Trends Report.

**Step 1: Filter AI/ML Related Projects**

From the trending list (16 repos), I need to identify AI-related ones:
1. elementalsouls/Claude-BugHunter - AI security/red-team, AI related ✓
2. obra/superpowers - Agentic skills framework, AI related ✓
3. HKUDS/CLI-Anything - CLI for AI agents, AI related ✓
4. jingyaogong/minimind - LLM training, AI related ✓
5. cursor/plugins - Cursor IDE plugins, partially AI related (AI coding)


6. firecrawl/firecrawl - Web scraping for AI agents, AI related ✓
7. nginx/nginx - Web server, NOT AI ✗
8. openvinotoolkit/openvino - AI inference optimization, AI related ✓
9. cathrynlavery/diagram-design - Diagrams for AI tools, partially AI ✓
10. mvanhorn/last30days-skill - AI research skill, AI related ✓
11. google-labs-code/stitch-skills - Agent skills library, AI related ✓
12. mjmirza/app-store-compliance - Compliance automation, partially AI ✓
13. Tracer-Cloud/opensre - CI/CD agent, partially AI ✓
14. toeverything/AFFiNE - Knowledge base with AI, AI related ✓
15. XiaoYouChR/Ghost-Downloader-3 - Downloader, NOT AI ✗
16. zhouxiaoka/autoclip - AI video clipping, AI related ✓

From the topic search results, I'm identifying the AI infrastructure and foundation model projects: open-webui and graphify for RAG systems, langchain as an agent engineering platform, and then the larger foundational models like thedotmack/claude-mem, ragflow, crawl4ai, headroom, mem0ai, anything-llm, DeepTutor, ai-agent-book, cherry-studio, and llama_index.

Now I'm looking at the model infrastructure layer with llama_index, milvus as a vector database, langgraph for building agents, and minimind for lightweight model training, alongside evaluation and development frameworks like opencompass and rig in Rust, plus specialized applications like atomic-agents, tiny-llm for Apple Silicon inference, and resources like awesome-japanese-llm and Awesome-Story-Generation.

I'm also cataloging agent frameworks and platforms—hermes-agent, Agent-Reach, career-ops, ppt-master, nanobot, CowAgent, siyuan, Codewhale, and Vibe-Trading—alongside agent tooling and integration layers like CopilotKit, QwenPaw, and openclaude. The list is extensive and covers everything from memory systems and vector databases to autonomous agents and specialized AI applications.

Now I'm seeing the foundational ML and LLM ecosystem layers—core frameworks like TensorFlow, Transformers, PyTorch, and Keras alongside high-level tooling for prompts, training from scratch, and specialized libraries like Ultralytics for vision and supervision for computer vision utilities. There are also data infrastructure projects like OpenBB and paperless-ngx for document management, plus a significant collection of LLM-specific projects including AutoGPT, Ollama, Dify, and various specialized agents for coding, trading, and creative work.

I'm now organizing these into major categories—AI infrastructure covering the frameworks and dev tools, AI agents and workflows for autonomous systems, AI applications for specific use cases like video and document processing, LLMs and training for foundational model work, and RAG with knowledge management for retrieval-augmented generation systems.

Looking at the trending data, Claude-BugHunter is gaining significant traction with over 1,600 stars today, signaling strong interest in AI security tooling, while minimind stands out by demonstrating how to train a 64M model from scratch in just two hours. I'm also tracking which repositories are appearing across both the trending list and topic searches to identify the most impactful projects. I'm finishing the list with open-source AI projects covering code analysis, web scraping, workflow automation, and video processing. Now I'm analyzing the data to understand what trends are emerging—particularly the surge in AI agent frameworks, skills-based architectures, and how developers are building specialized tools for different use cases.

The most striking development is how rapidly the ecosystem is consolidating around Agent Skills as the standard architectural pattern, with multiple competing frameworks all converging on this approach. There's also a clear focus on practical deployment concerns like token optimization and security tooling, plus the emergence of agent-specific infrastructure like CLI frameworks and skill stores. The community is actively solving real problems—compliance automation, video creation, CI/CD reliability—which suggests we're moving beyond experimentation toward production-ready agentic systems. I'm seeing a strong emphasis on modularity and extensibility across these projects. The most compelling opportunities seem to be around building specialized AI skills and plugins for coding agents, setting up local inference with platforms like Ollama, and creating agent-native applications with proper MCP integration. There's also potential in developing lightweight training pipelines for small models, leveraging vector databases for knowledge-intensive agents, and building agent harnesses that can orchestrate multiple specialized agents together.
</think>


# AI Open Source Trends Report — 2026-11-28

## 1. Today's Highlights

The open-source AI ecosystem is experiencing a decisive shift toward **Agent-native infrastructure** today. A cluster of projects centered on AI agent skills, frameworks, and harnesses are commanding the largest single-day star surges — led by **Claude-BugHunter** (+1,608) and **superpowers** (+922), both explicitly targeting AI coding agents (Claude Code, Codex, Cursor) with skill bundles and agentic development methodologies. The emergence of the **CLI-Anything** paradigm (HKUDS/CLI-Anything, +666) signals a new wave of "making ALL software agent-native," formalizing how agents interact with existing CLI tooling. Meanwhile, **minimind** (64M model trained in 2 hours) continues its momentum from topic searches, reflecting community appetite for accessible, from-scratch LLM training. **OpenVINO**'s continued growth (+151) underscores that inference optimization is a live concern as frontier models get deployed at scale. Across 80+ AI-tagged repositories tracked today, agent skills standardization, token-efficient inference, and domain-specific agent applications are the three dominant vectors.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 159,700 | A user-friendly web UI for self-hosted AI inference, supporting Ollama and OpenAI API backends — the de facto local AI frontend for developers running private models. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 211,766 (+822) | Knowledge infrastructure providing unified API access to 550+ data providers for AI agents, combining web scraping, search, and structured data extraction in one pipeline. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 188,338 | The dominant local LLM runtime, enabling one-command deployment of open models (Qwen, DeepSeek, Gemma, MiniMax, etc.) — the infrastructure backbone for the local-first AI movement. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 150,089 | The foundational agent engineering platform providing abstractions for LLM chains, tool calling, and memory — still the most widely adopted framework for building AI applications. |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 45,521 | LangChain's state-machine-based framework for building resilient, multi-step AI agents with cycles and memory — increasingly the production-grade choice over vanilla LangChain chains. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,652 | A comprehensive LLM evaluation platform benchmarking 100+ datasets across reasoning, coding, safety, and long-context — critical for the community's ability to objectively compare open models. |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 88,054 | Apache-2.0 web crawler purpose-built for AI agents, providing structured extraction and markdown output — enabling agents to ingest live web content reliably. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 81,015 | Token compression proxy and MCP server that reduces LLM context by 20% for coding agents and 60–95% for JSON-heavy workloads — directly addressing the cost and context-window constraints of production agent deployments. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 0 (+1,608) | A Claude Code skill bundle with 85 skills and 16 slash commands covering 24 vulnerability classes, enterprise identity attacks, and 681 disclosed report patterns — the most starred single-day AI project today. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+922) | An agentic skills framework and software development methodology that codifies how coding agents should approach complex engineering tasks — formalizing "agentic development patterns" as a discipline. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0 (+666) | "Making ALL Software Agent-Native" — a hub for wrapping existing CLI tools as agent-consumable interfaces, enabling agents to interact with the full Linux software ecosystem natively. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (+311) | A library of Agent Skills following the open Agent Skills standard, compatible with Stitch MCP server, Antigravity, Gemini CLI, Claude Code, and Cursor — Google's bet on skills interoperability. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 0 (+675) | An AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web, then synthesizes a grounded summary — a production-ready social intelligence agent skill. |
| [copilotkit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 39,019 | The frontend stack for AI agents and generative UI, makers of the AG-UI Protocol — bridging the gap between agent reasoning and end-user interfaces in React/Angular/Mobile apps. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 311,943 | An agent harness performance optimization system with skills, instincts, memory, security, and research-first development patterns for Claude Code, Codex, and Cursor. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 85,242 | An open-source AI job search agent that scores jobs against your CV, generates ATS-friendly resumes and cover letters, and tracks applications — a domain-specific agent application gaining strong traction. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 39,019 | The frontend framework for building agent-powered UIs, including the AG-UI protocol standard — one of the few projects tackling the "agent-to-end-user-interface" problem systematically. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 0 (+718) | An open-source AI video clipping tool that auto-generates short-form content (subtitles, covers, post copy) for TikTok, YouTube Shorts, and Reels — directly competing with OpusClip in a zero-subscription local-first package. |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Shell | 0 (+530) | An AI coding agent skill with 125 documented rejection patterns, privacy manifest checks, and tracked deadlines (EU AI Act, DSA, COPPA) — applying AI to the compliance bottleneck that blocks thousands of app releases monthly. |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | Python | 0 (+328) | An open-source AI agent for CI/CD reliability, proactively identifying and fixing pipeline failures — bringing autonomous operations into the DevOps workflow. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 75,038 | A multi-market LLM-powered stock analysis system with real-time news, decision dashboards, and automated notifications — running on zero cost via free LLM tiers. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 146,028 | Automated HD short-video generation from topics using AI workflows — one of the most starred AI content creation tools, demonstrating strong demand for end-to-end AI media pipelines. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 39,096 | A personal trading agent leveraging LLMs for market analysis and decision support — part of a broader wave of financial AI agents gaining community momentum. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 80,815 | AI that generates native PowerPoint decks with shapes, transitions, charts, and audio narration from documents — addressing a widespread enterprise pain point with an AI-native approach. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 72,268 (+660) | Train a 64M parameter LLM from scratch in 2 hours — the most accessible entry point for developers to understand the full training pipeline from data preprocessing to model convergence. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 109,164 | The definitive step-by-step PyTorch implementation of a ChatGPT-like LLM — with 109K stars, it remains the community's primary educational resource for understanding transformer-based language models. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,311 | The standard model-definition framework for state-of-the-art ML in text, vision, audio, and multimodal domains — the foundational library powering the majority of open-source AI work. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,293 | Build modular and scalable LLM applications in Rust — a growing bet on memory-safe, high-performance LLM infrastructure as an alternative to the Python-dominated ecosystem. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,815 | Learn LLM inference system implementation on Apple Silicon, building a minimal vLLM + Qwen stack — targeted at systems engineers who want to understand inference internals rather than just use APIs. |
| [acon96/home-llm](https://github.com/acon96/home-llm) | Python | 1,505 | A Home Assistant integration using local LLMs to control smart home devices — a practical application of on-device LLMs for IoT, demonstrating the viability of privacy-preserving local AI control. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 154,312 | Transform codebases, docs, SQL schemas, and PDFs into queryable knowledge graphs — using deterministic AST parsing to build every edge, offering a structural alternative to embedding-based RAG. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 120,241 | Persistent context across AI agent sessions, compressing session data with AI and injecting relevant memories into future sessions — directly solving the statelessness problem of LLM interactions. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,563 | The memory layer infrastructure for AI agents — providing persistent, production-ready memory that agents can build on across interactions, emerging as a key component in agentic application stacks. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,840 | An agent-native RAG engine that has grown into context infrastructure — offering deep document understanding with structured extraction and intelligent chunking strategies. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,752 | The high-performance, cloud-native vector database built for scalable approximate nearest neighbor search — the backbone storage layer for RAG systems at scale. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,678 | An open-source AI memory platform for agents using small models for free persistent long-term memory — making agent memory economically viable by replacing expensive LLM calls with lightweight models. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,746 | A high-performance, massive-scale vector database and search engine written in Rust — gaining adoption as a fast, reliable alternative for production RAG deployments. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | Python | 13,844 | MLsys 2026 Best Paper winner: 97% storage savings for RAG with full accuracy preservation on personal devices — a breakthrough in efficient on-device retrieval-augmented generation. |
| [neuml/txtai](https://github.com/neuml/txtai) | Python | 13,740 | An all-in-one AI framework combining semantic search, LLM orchestration, and language model workflows — providing an integrated path from embeddings to full RAG pipelines. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,453 | An idiomatic Java/JVM library for building LLM-powered applications with unified API over LLM providers and vector stores, including MCP tool calling support — bringing agentic AI into the enterprise Java ecosystem. |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | Rust | 11,998 | A developer-friendly embedded retrieval library for multimodal AI, optimized for search-heavy workloads — the emerging choice for edge and embedded AI applications requiring vector search without a separate database service. |

---

## 3. Trend Signal Analysis

The single most defining signal from today's data is the **explosive community convergence on Agent Skills architectures**. Three projects in today's top-5 by daily stars — **Claude-BugHunter** (+1,608), **superpowers** (+922), and **CLI-Anything** (+666) — share a common thesis: AI coding agents need structured, composable skill bundles to operate reliably in production. This is not a niche interest; the simultaneous emergence of competing skill frameworks (Agent Skills open standard, superpowers methodology, Claude Code skill bundles) suggests the community is collectively solving the "agent reliability" problem through modularization — a direct response to the frustration of agents that hallucinate, loop, or fail silently on complex tasks.

A second major signal is the **token efficiency arms race**. Projects like **headroom** (20–95% token reduction), **caveman** (shorter agent answers with recoverable originals), and the broader push toward MCP server tooling all point to a mature concern: **LLM context windows and API costs are the binding constraint** on agentic systems. The community is investing heavily in compression, summarization, and selective context injection rather than assuming infinite context is acceptable.

A third signal is the **CLI-ization of everything for agents**. The CLI-Anything project and its philosophy of "agent-native software" represents a new paradigm: rather than building new agent-native UIs from scratch, the community is retrofitting the existing Linux software ecosystem (compilers, CLIs, APIs) as consumable tool interfaces for agents. This is a pragmatic shift that could dramatically expand what agents can do today without waiting for new infrastructure.

Finally, **multimodal content generation** (autoclip, MoneyPrinterTurbo) and **compliance automation** (app-store-compliance) show that developers are building agentic wrappers around high-friction real-world workflows — the pattern of "AI agent + existing toolchain + domain knowledge = solved problem" is becoming the dominant application template.

---

## 4. Community Hot Spots

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — The highest single-day star gain signals massive developer interest in AI security tooling for agents. As coding agents proliferate, the attack surface expands; BugHunter's 85-skill bundle across 24 vulnerability classes is a blueprint for domain-specific agent skill development.

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** — The "agent-native software" concept is novel and consequential: if every CLI tool can be wrapped as an MCP-compatible agent tool, the entire Unix software ecosystem becomes agent-accessible without rewriting. Worth watching closely as it matures.

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — With 72K+ stars and 660 new stars today, it democratizes LLM training understanding. The trend toward accessible from-scratch training will accelerate as hardware costs drop and small models become viable for edge deployment.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0) / [topoteretes/cognee](https://github.com/topoteretes/cognee)** — Agent memory infrastructure is a nascent but critical category. As agents move from demos to production, statelessness is the #1 complaint; these projects are building the "persistent brain" layer the ecosystem desperately needs.

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — The MLsys 2026 Best Paper recognition validates a new approach to RAG: 97% storage savings while maintaining accuracy enables truly private, on-device RAG on consumer hardware. This direction — efficient on-device retrieval — may define the next wave of RAG innovation.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*