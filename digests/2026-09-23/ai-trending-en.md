# AI Open Source Trends 2026-09-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-23 00:53 UTC

---

<think>The user wants me to analyze GitHub trending repositories data from 2026-09-23 and produce a structured AI Open Source Trends Report. Let me follow the steps:

1. **Filter**: Select AI/ML related projects
2. **Categorize**: Group into categories (AI Infrastructure, AI Agents/Workflows, AI Applications, LLMs/Training, RAG/Knowledge)
3. **Output Report**: With specific sections

Let me first filter the trending list (8 repos) for AI relevance:

From the 8 trending repos:
- anthropics/financial-services - AI related (Anthropic, financial services AI)
- agent-substrate/substrate - AI related (Agent Substrate)
- dream-num/univer - AI related (Office harness for AI Agents)
- davila7/claude-code-templates - AI related (Claude Code CLI tool)
- google/ax - AI related (Google's agentic orchestration runtime)
- mvt-project/mvt - NOT AI (Mobile forensics toolkit, not AI/ML focused)
- superdesigndev/treg - AI related (OpenRouter for agent tools)
- browser-use/video-use - AI related (Edit videos with coding agents)

Now let me categorize these:

**AI Infrastructure:**
- google/ax - Google's open agentic orchestration runtime
- davila7/claude-code-templates - CLI tool for configuring and monitoring Claude Code
- agent-substrate/substrate - Agent Substrate core system

**AI Agents / Workflows:**
- dream-num/univer - The Office Harness for AI Agents
- browser-use/video-use - Edit videos with coding agents
- superdesigndev/treg - OpenRouter for agent tools

**AI Applications:**
- anthropics/financial-services - Financial services AI

Now from the topic search results, I need to select the top projects and categorize them. 

From the AI topic search results, I'll identify the most significant repositories by star count and categorize them accordingly. The leading projects span multiple AI domains: agent platforms like langchain and langgraph, specialized agents including AutoGPT and browser-use, infrastructure tools such as Ollama and transformers, and knowledge management solutions like Open WebUI and LlamaIndex.

Additional notable mentions include vector databases (Milvus, Qdrant, Weaviate), retrieval systems (RAGFlow, AnythingLLM, mem0), and specific applications—financial tools like TradingAgents, coding utilities like Claude Code templates, and video editing frameworks. There's also strong representation from foundational ML libraries including TensorFlow, PyTorch, and scikit-learn.</think>

# AI Open Source Trends Report — September 23, 2026

## 1. Today's Highlights

Today's GitHub trending reveals a surge in **agentic infrastructure** and **agent tooling**. Google's release of **AX** (agentic orchestration runtime) has exploded with +2,305 stars — the highest single-day gain in today's list. The Office-for-AI-agent category is heating up with **Univer** (+255 stars), positioning itself as a unified runtime for spreadsheets, docs, slides, and PDFs powered by AI agents. Meanwhile, the **browser-use** ecosystem is expanding from web automation into video editing (**video-use**, +191 stars), signaling agents moving into multimedia workflows. RAG and memory-layer projects continue their steady momentum, with **mem0** (memory infrastructure for agents) and **headroom** (token compression for agents) gaining strong traction.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [google/ax](https://github.com/google/ax) | Go | ⭐0 (+2,305) | Google's open agentic orchestration runtime — a foundational layer for building, orchestrating, and scaling autonomous agents. Today's biggest mover signals Google's push into agent infrastructure. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | ⭐181,493 | Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models. The leading local LLM inference runtime. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | ⭐166,539 | 🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio, and multimodal models. The foundational library for model loading and inference. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | ⭐200,260 | An Open Source Machine Learning Framework for Everyone. Still the most-starred ML framework overall. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | ⭐103,182 | Tensors and Dynamic neural networks in Python with strong GPU acceleration. Deep learning standard-bearer. |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | Python | ⭐0 (+64) | CLI tool for configuring and monitoring Claude Code — essential tooling for developers building with Anthropic's agent. |
| [agent-substrate/substrate](https://github.com/agent-substrate/substrate) | Go | ⭐0 (+245) | Agent Substrate: the core system — provides a substrate layer for agent deployment and lifecycle management. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | ⭐42,152 | Build resilient agents. LangChain's workflow orchestration framework for multi-step agentic applications. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | ⭐187,503 | AutoGPT is the vision of accessible AI for everyone, to use and to build on. The pioneering autonomous agent project. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | ⭐115,949 | Agents that use the browser. The dominant framework for browser automation via LLM agents. |
| [browser-use/video-use](https://github.com/browser-use/video-use) | Python | ⭐0 (+191) | Edit videos with coding agents — extends the browser-use paradigm to video editing, signaling agent expansion into multimedia. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | ⭐156,888 | Build Agentic workflows, RAG pipelines, with rich AI model and tool support on one collaborative workspace. The leading no-code/low-code agent platform. |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | ⭐0 (+255) | The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime. Unifies productivity software for agentic workflows. |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | Python | ⭐0 (+230) | OpenRouter for agent tools — a marketplace/registry for agent-executable tools, akin to OpenRouter for LLMs. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | ⭐37,479 | The Frontend Stack for Agents & Generative UI. Makers of the AG-UI Protocol — embedding agents into applications. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | ⭐48,491 | Ultra-lightweight, open-source, self-hosted personal AI agent framework in Python with WebUI, tools, memory, MCP, multi-agent workflows. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | ⭐35,679 | DeepSeek-native AI coding agent for your terminal. Engineered around prefix-cache stability — leave it running. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | Python | ⭐0 (+438) | Anthropic's financial services reference implementation — demonstrates safe AI deployment in regulated industries. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | ⭐108,143 | TradingAgents: Multi-Agents LLM Financial Trading Framework — multi-agent system for quantitative trading. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | ⭐125,168 | 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。AI-powered video generation from topics. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | ⭐65,505 | LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送。Multi-market AI stock analysis. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | ⭐55,981 | AI turns documents or topics into real, native PowerPoint decks. Agentic presentation generation. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | ⭐72,446 | Open-source AI job search: scan job portals, evaluate listings, tailor CV, track applications. Vertical AI agent for recruitment. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | ⭐62,192 | 🧠 Train a 64M-parameter LLM from scratch in just 2h! — educational project demonstrating accessible LLM training. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | ⭐105,402 | Implement a ChatGPT-like LLM in PyTorch from scratch, step by step. The definitive learning resource. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | ⭐7,468 | OpenCompass is an LLM evaluation platform, supporting 100+ datasets covering knowledge, reasoning, coding, science, language, long-context, and safety. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | ⭐8,700 | ⚙️🦀 Build modular and scalable LLM Applications in Rust — memory-safe LLM application framework. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | ⭐152,847 | User-friendly AI Interface (Supports Ollama, OpenAI API, ...) — the leading WebUI for local LLM+RAG deployment. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | ⭐146,896 | The agent engineering platform. The most-starred LLM app framework. |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | ⭐139,456 | 100+ AI Agents, Agent Skills and RAG Apps - Free and Open Source. Curated collection driving adoption. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | ⭐120,572 | Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. Codebase RAG with graph structure. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | ⭐94,486 | Persistent Context Across Sessions for Every Agent — captures agent sessions, compresses with AI, injects context into future sessions. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | ⭐91,174 | RAGFlow is a leading open-source Retrieval-Augmented Generation engine that fuses cutting-edge RAG with Agent capabilities. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | ⭐65,844 | The Memory Layer for AI Agents - Drop-in memory infrastructure for AI agents and apps. Context that persists. Built for production. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | ⭐73,532 | Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20% fewer tokens for coding agents, 60-95% fewer tokens for JSON. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | ⭐52,285 | LlamaIndex is the document processing platform for AI — core RAG data indexing framework. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | ⭐46,220 | Milvus is a high-performance, cloud-native vector database built for scalable vector ANN search. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | ⭐34,758 | Qdrant - High-performance, massive-scale Vector Database and Vector Search Engine for the next generation of AI. |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | Go | ⭐16,839 | Weaviate is an open-source vector database that stores both objects and vectors, allowing for the combination of vector search with structured filtering. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | ⭐30,921 | Cognee is the open-source AI memory platform for agents. Give your AI agents persistent long-term memory with a self-hosted knowledge graph engine. |

---

## 3. Trend Signal Analysis

The dominant signal today is **agentic infrastructure reaching production maturity**. Google's **AX** (+2,305 stars) marks a watershed moment — a major tech company releasing a production-grade agent orchestration runtime as open source. This signals the shift from experimental agent demos to deployable agentic systems.

Two emerging directions stand out:

1. **Office-as-Agent-Runtime**: **Univer** (+255 stars) represents a new category — embedding agents directly into productivity software (spreadsheets, docs, slides). This mirrors Microsoft's Copilot strategy but as open-source, suggesting agents will soon be deeply integrated into everyday knowledge work.

2. **Agent Tooling Marketplace**: **Treg** (+230 stars) positions as "OpenRouter for agent tools," indicating the emergence of a tool/plugin ecosystem for agents, analogous to the LLM API marketplace explosion.

RAG continues its consolidation — the category maintains 10+ repos with 30K+ stars each, showing sustained developer investment. Memory layers for agents (**mem0**, **cognee**, **claude-mem**) are gaining traction as agents become stateful and long-running.

---

## 4. Community Hot Spots

- **[google/ax](https://github.com/google/ax)** — Google's agentic orchestration runtime is the project to watch. It could become the Kubernetes of AI agents. Early momentum suggests strong community interest in standardized agent deployment.

- **[dream-num/univer](https://github.com/dream-num/univer)** — The "Office for AI Agents" concept is novel; if agents can reliably interact with spreadsheets, docs, and PDFs, it unlocks massive workflow automation potential.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Memory infrastructure is critical for production agents. The 65K star milestone and "built for production" positioning make it a key enabler for real-world agent deployments.

- **[browser-use/video-use](https://github.com/browser-use/video-use)** — Extending browser automation to video editing signals agents moving into creative workflows. Watch for multimedia agent expansion.

- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** / **[milvus-io/milvus](https://github.com/milvus-io/milvus)** — Vector databases remain foundational. Qdrant's Rust-based high-performance engine and Milvus' cloud-native scaling are both solid choices for RAG at scale.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*