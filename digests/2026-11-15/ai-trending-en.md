# AI Open Source Trends 2026-11-15

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-15 02:05 UTC

---

<think>Let me analyze this data carefully and create a structured report.

First, let me filter AI-related projects from the trending list:

From today's trending (15 repos):
1. backnotprop/plannotator - AI workspace for agents - AI Agents
2. GoogleChrome/modern-web-guidance-src - Web guidance for coding agents - AI Infrastructure
3. tradermonty/claude-trading-skills - Trading skills for Claude Code - AI Applications
4. ChromeDevTools/chrome-devtools-mcp - DevTools for coding agents - AI Infrastructure
5. alibaba/open-code-review - Code review tool with LLM - AI Infrastructure
6. QwenLM/qwen-code - AI coding agent - AI Agents
7. dream-num/univer - AI office SDK - AI Applications
8. ag-ui-protocol/ag-ui - Agent-User Interaction Protocol - AI Infrastructure
9. ashhart/TensorFold - LLM inference engine - AI Infrastructure
10. JuliusBrussee/caveman - Token optimization for coding agents - AI Infrastructure
11. louislam/uptime-kuma - NOT AI - monitoring tool
12. we-promise/sure - NOT AI - finance app
13. Tencent/LoopForge - Workflows for coding agents - AI Infrastructure
14. Likely7/Veyra-NRVideo - NOT AI - video player
15. martin-olivier/airgorah - NOT AI - WiFi security

Non-AI trending: uptime-kuma, sure, Veyra-NRVideo, airgorah

Now let me categorize:

**Today's Trending AI Projects:**
1. backnotprop/plannotator - AI Agents
2. GoogleChrome/modern-web-guidance-src - AI Infrastructure
3. tradermonty/claude-trading-skills - AI Applications
4. ChromeDevTools/chrome-devtools-mcp - AI Infrastructure


5. alibaba/open-code-review - AI Infrastructure
6. QwenLM/qwen-code - AI Agents
7. dream-num/univer - AI Applications
8. ag-ui-protocol/ag-ui - AI Infrastructure
9. ashhart/TensorFold - AI Infrastructure
10. JuliusBrussee/caveman - AI Infrastructure
11. Tencent/LoopForge - AI Infrastructure

I'll focus on the key AI infrastructure and application projects that are gaining traction. The list reveals a strong emphasis on developer tools, coding agents, and infrastructure solutions that streamline AI development processes. Companies like Google, Alibaba, and Tencent are actively contributing to this ecosystem, indicating significant industry interest in AI tooling and platform development.

The projects span multiple categories, with AI Agents and Infrastructure taking center stage. Noteworthy projects like browser-use and caveman demonstrate innovative approaches to agent interactions and optimization techniques.

Key infrastructure projects like Firecrawl, Ollama, and Open WebUI highlight the diverse tooling emerging around large language models. These projects focus on web data processing, local model execution, and user interface development.

The landscape shows a robust ecosystem of AI applications, including agents for job searching, stock analysis, and productivity enhancement. Projects like Dify and LangChain underscore the growing complexity of AI agent development and integration.

Notable categories include AI agents for job hunting, stock analysis, and knowledge management. Platforms like Graphify, MoneyPrinterTurbo, and siyuan demonstrate versatile AI applications across different domains.

The trending topics reveal significant interest in AI agents, with a focus on practical implementations. Projects like Claude Mem and Crawl4AI showcase advanced AI technologies in memory management and web crawling.

Core machine learning and model infrastructure projects like TensorFlow, PyTorch, and Hugging Face Transformers continue to drive innovation in the AI landscape, providing foundational tools for developers and researchers.
</think>


# AI Open Source Trends Report — November 15, 2026

## Step 1: Filtering

**Excluded from Today's Trending (non-AI):**

- `louislam/uptime-kuma` — self-hosted monitoring tool
- `we-promise/sure` — personal finance app
- `Likely7/Veyra-NRVideo` — Windows video player/DLSS tool
- `martin-olivier/airgorah` — WiFi security auditing software

**Retained for analysis:** 11 AI-relevant projects from today's trending + 80 from AI topic searches.

---

## Step 2: Categorization & Analysis

### 1. Today's Highlights

Today's GitHub trending reveals a decisive shift toward **coding agent infrastructure**. Chrome DevTools now ships an official MCP server, Alibaba open-sources a production-grade code review agent pipeline, and the "caveman" proxy—which compresses token usage by ~65% through prompt optimization—went viral with 120K+ stars. The AG-UI protocol formalizing agent-frontend interaction is also gaining traction, signaling a maturing ecosystem for embedding AI agents into real products. Meanwhile, QwenLM's terminal-based coding agent and Tencent's LoopForge for orchestrating Claude Code/Codex workflows underscore that the "AI coding assistant" market is fragmenting into specialized tooling layers.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,981 | Self-hosted LLM runtime supporting Kimi, GLM, MiniMax, DeepSeek, Qwen, Gemma, and more—becoming the de facto local inference layer for developers. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 168,987 | The canonical model-definition framework for state-of-the-art ML in text, vision, audio, and multimodal inference/training. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,521 | The agent engineering platform providing abstractions for chaining LLMs, tools, and memory—still the dominant framework for AI app development. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 201,831 | Web scraping and data extraction library purpose-built for AI agents, enabling real-time knowledge retrieval from the live web. |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | 120,095 (+227) | Token-compression proxy for coding agents that slashes token usage by ~65% through prompt optimization—viral momentum this week. |
| [alibaba/open-code-review](https://github.com/alibaba/alibaba) | Go | 0 (+893) | Alibaba's battle-tested code review tool combining deterministic pipelines with LLM agents for precise line-level commenting across 8 languages. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0 (+664) | Official Chrome DevTools MCP server enabling coding agents to interact with browser contexts—bridging web development and agent tooling. |
| [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | TypeScript | 0 (+9) | Protocol standardizing agent-frontend interactions; adopted by CopilotKit as the foundational spec for embedding agents in UI apps. |
| [TensorFold](https://github.com/ashhart/TensorFold) | Zig | 0 (+37) | Multi-backend LLM inference engine supporting Metal, CUDA, and Vulkan—notable for choosing Zig as the implementation language. |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 0 (+33) | Self-hosted workflow orchestrator for Claude Code, Codex, and CodeBuddy with human approval gates—enterprise-grade agent delivery. |

#### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 188,027 | The foundational autonomous AI agent project that sparked the agent framework wave—still the most-starred agent repo. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 263,423 | The highest-starred agent harness for Claude Code, Codex, OpenCode, and Cursor with skills, memory, and security primitives. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 121,039 | Open-source library for AI browser agents with hosted stealth browsers and API—bringing autonomous web interaction to production. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,704 | The frontend stack for agents and generative UI supporting React, Angular, Mobile, and Slack—makers of the AG-UI protocol. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 303,123 | Agent harness performance system with skills, instincts, memory, and security optimizations for Claude Code, Codex, and Cursor. |
| [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | TypeScript | 0 (+64) | Qwen's open-source terminal-based AI coding agent—extending the Qwen ecosystem from chat to developer tooling. |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | 0 (+408) | Unified workspace for shaping, reviewing, and sharing feedback with coding agents—collaborative agent management gaining momentum. |

#### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+495) | Open-source AI office SDK enabling editing, calculation, collaboration, and file processing for both humans and AI agents. |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 0 (+553) | Claude Code skills for equity trading: market analysis, technical charting, screeners, and strategy development—vertical AI specialization. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 143,598 | Automated HD short-video generator from topics using AI workflows—high star count indicates strong consumer AI demand. |
| [feder-cr/Jobs_Applier_AI_Agent](https://github.com/feder-cr/Jobs_Applier_AI_Agent) | Python | 32,528 | AIHawk: autonomous job application bot that scores jobs against resumes, generates cover letters, and auto-applies at scale. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 38,245 | Personal trading agent combining multi-source market data, real-time news, and automated notifications. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 76,851 | AI-driven PowerPoint generator with native shapes, charts, animations, and audio narration from any document or topic. |

#### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 201,609 | Google's universal ML framework—still the 2nd most-starred ML repo, now incorporating AI agent integrations. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 105,504 | Dynamic neural network framework with GPU acceleration—foundational for training and fine-tuning virtually all open LLMs. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,417 | Step-by-step PyTorch implementation of a ChatGPT-like LLM—educational de facto standard for understanding transformer architecture. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,594 | LLM evaluation platform covering 100+ datasets for reasoning, coding, science, and safety—critical for model benchmarking. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,147 | Modular LLM application framework in Rust—representing the emerging trend of systems-language performance for AI infra. |

#### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 144,646 | Curated collection of 100+ AI agent and RAG apps—most-starred resource for RAG implementation patterns. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,161 | Agent-native RAG engine grown into context infrastructure—supporting production-scale retrieval workflows. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,665 | Cloud-native vector database for scalable ANN search—the backbone storage layer for most production RAG systems. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,904 | Document processing platform for AI—provides the data ingestion and indexing layer feeding LLMs in RAG pipelines. |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 59,864 | Lightning-fast search engine with AI-powered hybrid search—increasingly used as a lightweight RAG retrieval backend. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,321 | Open-source memory platform for agents using small models for persistent long-term memory—cutting RAG costs significantly. |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,363 | Open-source web crawler optimized for AI agents with free hosted API and self-hosting options—RAG data pipeline tooling. |

---

### 3. Trend Signal Analysis

The most explosive signal today is **token efficiency tooling for coding agents**. The `caveman` project (120K+ stars, +227 today) exemplifies a new wave of optimization-layer projects that sit between the LLM and the agent, compressing context to reduce API costs and latency. This complements the infrastructure layer—`LoopForge`, `open-code-review`, and `chrome-devtools-mcp` are all enterprise-grade tools designed to deploy coding agents in controlled, auditable pipelines rather than raw API calls.

The **agent-frontend protocol** space is also maturing. AG-UI (from CopilotKit) and similar standardization efforts signal that the ecosystem is moving beyond "chat with an agent" toward embedding agents natively inside product UIs—similar to how APIs commoditized integrations in the 2010s.

A notable technical direction is **multi-backend inference portability**—`TensorFold` targeting Metal/CUDA/Vulkan simultaneously, and `ollama` abstracting across dozens of model families. The trend is toward eliminating vendor lock-in at the inference layer.

The absence of new model weight releases in today's trending is notable; momentum is flowing into tooling layers, which typically indicates a consolidation phase post-release cycle—developers are building products on existing model capabilities rather than chasing new architectures.

---

### 4. Community Hot Spots

- **[caveman](https://github.com/JuliusBrussee/caveman)** — Token compression is the lowest-hanging fruit for cost-sensitive deployments; watch for similar proxy/injection-layer projects proliferating.
- **[ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui)** — Agent-frontend integration standards are nascent but strategically important; early adopters will define the UX patterns for AI-native products.
- **[LoopForge](https://github.com/Tencent/LoopForge)** — Enterprise agent orchestration is an underserved market; Tencent's open-source move signals that corporations are ready to deploy coding agents with governance controls.
- **[open-compass](https://github.com/open-compass/opencompass)** — As dozens of open-source models compete, evaluation frameworks become critical infrastructure—model selection decisions increasingly depend on standardized benchmarks.
- **[cognee](https://github.com/topoteretes/cognee)** — Memory management for agents using small models instead of full RAG is an emerging pattern that could drastically reduce operational costs for long-running agent deployments.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*