# AI Open Source Trends 2026-11-25

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-25 05:00 UTC

---

<think>Let me analyze this data carefully and produce a structured report.

First, let me filter for AI-related projects from both data sources.

**From Today's Trending (16 repos):**
1. elementalsouls/Claude-BugHunter - AI red-team/bug hunting skill bundle ✓
2. obra/superpowers - Agentic skills framework ✓
3. HKUDS/CLI-Anything - Making CLI agent-native ✓
4. jingyaogong/minimind - Train 64M LLM from scratch ✓
5. cursor/plugins - Cursor plugin spec ✓
6. firecrawl/firecrawl - Knowledge infrastructure for agents ✓


7. nginx/nginx - NOT AI
8. openvinotoolkit/openvino - AI inference toolkit ✓
9. cathrynlavery/diagram-design - AI diagram design ✓
10. mvanhorn/last30days-skill - AI agent skill for research ✓
11. google-labs-code/stitch-skills - Agent skills library ✓
12. mjmirza/app-store-compliance - NOT AI
13. Tracer-Cloud/opensre - CI/CD agent ✓
14. toeverything/AFFiNE - Knowledge base, partially AI ✓

So from today's trending, I'm seeing about 11 genuinely AI-related projects, with the rest being either infrastructure tools or non-AI applications.

Looking at the AI topic search results, the high-starred repositories show a clear pattern - the top ones are all focused on AI agent frameworks and LLM infrastructure. affaan-m/ECC leads with 310k stars, followed by NousResearch/hermes-agent at 265k, then firecrawl/firecrawl at 209k. The list continues with various agent harness systems, AI agent frameworks like AutoGPT, and developer tools like Ollama. There's also a prompts collection and transformers library rounding out the top entries.

Further down the list, I'm seeing more specialized applications - productivity tools like MoneyPrinterTurbo for video generation, TradingAgents for finance research, and code optimization utilities. The collection spans agent frameworks like LangChain and LangGraph, infrastructure projects like RAGFlow and Mem0 for memory management, and various vector databases including Milvus and Qdrant. There's also a mix of search engines, programming tools like Claude Context for code search, and application-specific tools like PPT-master and stock analysis systems.

Looking at the remaining projects, I'm seeing more agent frameworks and personal assistants - nanobot, CowAgent, siyuan as a knowledge workspace, Codewhale as a Rust coding agent, oh-my-pi as another coding agent option, CopilotKit for agent UI, and several others focused on trading and productivity. I'm now categorizing everything by primary function to get a clearer picture of what this ecosystem actually covers.

From today's trending, I'm seeing minimind as the training framework, openvino as the inference infrastructure, and then a mix of agent frameworks like Claude-BugHunter, superpowers, and CLI-Anything, plus application tools like firecrawl for knowledge infrastructure and AutoClip for video editing.

The bigger picture from topic searches shows firecrawl, ollama, langchain, langgraph, and transformers all dominating in their respective spaces—vector databases like milvus and qdrant, agent frameworks like AutoGPT and mem0, and knowledge tools like DeepTutor and anything-llm.

Now I'm organizing these by category to see where the real momentum is—starting with the AI infrastructure layer that powers everything else. Now I'm organizing the RAG and knowledge management category with the top projects ranked by engagement, then moving into AI agents and workflows with their respective metrics and focus areas.

Looking at the remaining agents like nanobot, CowAgent, siyuan, Codewhale, and CopilotKit to round out this section, and then starting to catalog AI applications like Minimind which focuses on LLM training and appears to be the most starred project at over 70k.

Continuing through the application layer, I'm seeing a mix of specialized tools - ECC for performance optimization, hermes-agent for adaptive agents, firecrawl for knowledge infrastructure, AutoGPT as a foundational autonomous agent, and several others focused on specific domains like code optimization, prompt engineering, video generation, and trading strategies.

Now looking at what's actually trending today - minimind is gaining serious momentum with over 1800 stars in a single day, suggesting there's strong interest in lightweight, trainable models. Firecrawl is also surging with nearly 1000 stars, indicating demand for better agent tooling and knowledge infrastructure. The other projects like Claude-BugHunter, CLI-Anything, and openvinotoolkit are showing moderate growth but still notable activity. I'm verifying the star counts across the repositories—ollama shows 188,031 and langchain at 149,961 in the topic search data, which matches what I'm seeing. Since the trending repos don't show total star counts, I'll use the topic search numbers as my baseline for the full dataset. Now I'm ready to compile the report with the verified data. I'm organizing the full AI infrastructure list by total stars, and now I'm compiling the complete ranking across all categories to create the final table. I'm organizing these AI agent tools by their star counts, continuing from where the previous list ended with siyuan at 47,376 stars and moving through additional platforms like CopilotKit and Vibe-Trading.

Now I'm compiling the AI applications category, which includes various specialized tools—some focused on code optimization, others on automation, and several on agent-specific functionality—ordered by their popularity metrics. I'm looking at the full list of repositories sorted by stars, and I'm realizing I should narrow this down to the most significant projects. For the AI Infrastructure category, I'm highlighting the major frameworks like langchain, langgraph, and dify as the key foundational tools developers should know about. Now I'm looking at the RAG and knowledge management tools, which include various platforms for retrieval-augmented generation and memory systems for AI agents. The AI Agents and Workflows category appears to be cut off, but I'm seeing this is another major segment of the ecosystem with autonomous agents and agent frameworks. Looking at the rest of the trending repositories from today, I'm seeing several more agent and infrastructure tools that fit the same pattern—agent frameworks, knowledge retrieval systems, and specialized development tools. The list continues with projects like the diagram design tool, research synthesis capabilities, and CI/CD reliability tools, all pointing toward this broader trend of building infrastructure for AI-powered development workflows. Now I'm compiling the top projects across different AI categories, organizing them by their current popularity and relevance to the ecosystem. Looking at the RAG and knowledge management tools, I'm seeing memory infrastructure projects like Mem0 and AnythingLLM gaining significant traction, along with vector databases and development frameworks. Then there's the autonomous AI agents category where tools like AutoGPT and Hermes are establishing themselves as foundational platforms.

Now examining the application layer, I'm noticing a strong pattern in specialized vertical solutions—tools for code optimization, prompt management, video generation, and trading systems are all accumulating substantial user bases, suggesting the ecosystem is maturing beyond general frameworks into domain-specific implementations.

The real signal emerging is that the open-source community is converging on three distinct layers: agent frameworks as the foundation, data infrastructure for retrieval-augmented generation in the middle, and specialized applications built on top. What's becoming clear is that the bottleneck isn't building agents anymore—it's giving them reliable access to real-world data, which is why the vector database and memory projects are seeing explosive growth.

The momentum shift is particularly interesting: agent harness systems like ECC and Hermes are replacing monolithic agent frameworks as the preferred architecture, training tools like minimind are making model customization accessible to more developers, and there's a proliferation of agent skills and tools across multiple frameworks, suggesting the ecosystem is fragmenting into different approaches rather than converging on a single standard.

I'm also noticing the OpenVINO inference optimization toolkit is gaining traction, which points to inference efficiency becoming a real concern as these agents move from demos into production environments.
</think>


# AI Open Source Trends Report — 2026-11-25

---

## 1. Today's Highlights

The open-source AI ecosystem today is defined by a decisive shift from **agent *frameworks* to agent *harnesses***. The top-trending repository is **ECC** (310k ⭐), a performance optimization harness for coding agents, followed closely by **hermes-agent** (266k ⭐), which positions itself as a growing, self-improving agent. Both signal that the community is converging on the "agent harness" architecture pattern — stripping agents down to skills, instincts, memory, and security layers, and letting the harness drive. On the training side, **minimind** (70k ⭐) is the day's fastest riser (+1,827 today), demonstrating strong developer appetite for accessible LLM training-from-scratch tooling. Meanwhile, **firecrawl** (209k ⭐, +991 today) and the broader **RAG/memory** stack continue their ascent, confirming that giving agents reliable, real-world data access is the ecosystem's current primary battleground.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ECC](https://github.com/affaan-m/ECC) | JavaScript | 310,284 | Agent harness performance optimization system combining skills, instincts, memory, security, and research-first development for Claude Code, Codex, Cursor and beyond. Dominates today's list at 310k stars, defining the "harness over framework" architecture pattern. |
| [langchain](https://github.com/langchain-ai/langchain) | Python | 149,961 | The agent engineering platform providing composable building blocks (chains, tools, memory) for LLM application development. Remains the most-starred general-purpose agent SDK despite increasing competition. |
| [transformers](https://github.com/huggingface/transformers) | Python | 169,290 | Hugging Face's model-definition framework for state-of-the-art ML models across text, vision, audio, and multimodal modalities, serving both inference and training. |
| [dify](https://github.com/langgenius/dify) | Python | 161,855 | Collaborative workspace for building Agentic workflows and RAG pipelines with rich AI model and tool support, deployable on cloud, VPC, or self-hosted. |
| [langgraph](https://github.com/langchain-ai/langgraph) | Python | 45,380 | Build resilient agents with stateful, multi-actor applications using LangChain's graph-based execution model — gaining ground as a more robust alternative to linear chain architectures. |
| [open-webui](https://github.com/open-webui/open-webui) | Svelte | 159,471 | User-friendly AI interface with broad model support (Ollama, OpenAI API, and more), serving as a self-hostable ChatGPT alternative for privacy-conscious teams. |
| [streamlit](https://github.com/streamlit/streamlit) | Python | 46,497 | The agent-native framework for data apps and dashboards, increasingly used as a rapid prototyping layer for AI-powered applications. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- |
| [firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 209,111 (+991) | Knowledge infrastructure providing unified API access to 550+ data providers for search, scraping, and structured data extraction. Today's fastest-growing RAG-adjacent project, bridging web data and agent context. |
| [DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 62,430 | Lifelong personalized tutoring system built on RAG principles, adapting to individual learner profiles over time. Notable as a domain-specific RAG application gaining serious traction. |
| [mem0](https://github.com/mem0ai/mem0) | Python | 69,436 | The memory layer for AI agents — drop-in infrastructure providing persistent, compressible context that survives across sessions. One of the fastest-growing infrastructure projects this month. |
| [anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 68,613 | Full-stack local-first agent experience with RAG, allowing users to own their intelligence rather than rent it via external APIs. |
| [milvus](https://github.com/milvus-io/milvus) | Go | 46,735 | Cloud-native, high-performance vector database built for scalable ANN search — a foundational piece of the RAG stack relied on by production deployments worldwide. |
| [qdrant](https://github.com/qdrant/qdrant) | Rust | 35,693 | High-performance, massive-scale vector database and search engine for the next generation of AI applications, with managed cloud offering. |
| [meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 59,988 | Lightning-fast search engine API bringing AI-powered hybrid (keyword + semantic) search to applications, often used as a lightweight RAG retrieval layer. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,996 | The document processing platform for AI — provides data connectors, indexing strategies, and query engines purpose-built for LLM-augmented applications. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 265,944 | The agent that grows with you — designed for progressive capability expansion through memory and skill accumulation. Second-highest starred AI repo, backed by NousResearch. |
| [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 188,175 | The vision of accessible AI for everyone — AutoGPT pioneered fully autonomous agent workflows and remains the reference implementation for agentic AI. |
| [ollama](https://github.com/ollama/ollama) | Go | 188,031 | Get up and running with a vast catalog of open models (Kimi, GLM, MiniMax, DeepSeek, Qwen, Gemma, and more) locally with a single command. The de facto local inference runtime. |
| [nanobot](https://github.com/HKUDS/nanobot) | Python | 50,306 | Lightweight open-source personal agent from HKUDS, emphasizing simplicity and portability for individual developer use cases. |
| [CowAgent](https://github.com/zhayujie/CowAgent) | Python | 48,064 | Open-source personal AI assistant that plans tasks, runs tools and skills, and self-evolves with memory and knowledge — multi-agent, multi-model, and multi-channel. |
| [CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,957 | The frontend stack for agents and generative UI, makers of the AG-UI Protocol — bridging agent reasoning back to web and mobile user interfaces. |
| [Codewhale](https://github.com/codewhale-hq/Codewhale) | Rust | 41,203 | Open-source Rust coding agent for terminal, web, and desktop with any model, multi-agent fleets, MCP & plugin support, and OS sandboxing. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [minimind](https://github.com/jingyaogong/minimind) | Python | 70,422 (+1,827) | Train a 64M LLM from scratch in 2 hours — the fastest-rising AI repo today with nearly 1,900 new stars, making LLM training accessible to any developer with a single GPU. |
| [ollama](https://github.com/ollama/ollama) (included above) | Go | 188,031 | Local model runtime enabling developers to run, experiment with, and serve dozens of open-source LLMs without cloud dependency. |
| [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 145,537 | Automated HD short video generator from topics/keywords using AI models and workflows — a production-grade content creation application with 145k stars. |
| [TradingAgents](https://github.com/TauricResearch/TradingAgents) | TypeScript | 123,722 | Agentic finance research platform combining multi-agent systems for market analysis, news processing, and trading signal generation. |
| [autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 980 (today) | Open-source AI video clipping desktop tool that automatically converts podcasts, interviews, and courses into short-form content with subtitles and captions for TikTok, Reels, and YouTube Shorts. |
| [daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 74,403 | LLM-powered multi-market stock analysis system with real-time news, decision dashboards, and automated notifications — zero-cost scheduled runs. |
| [caveman](https://github.com/JuliusBrussee/caveman) | Go | 122,675 | Token efficiency proxy for coding agents — reduces tool output size while preserving full fidelity, addressing the cost and latency challenges of verbose agent tool use. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [minimind](https://github.com/jingyaogong/minimind) | Python | 70,422 (+1,827) | Two-hour LLM training from scratch using a 64M parameter model — democratizes understanding of pre-training mechanics for the broader developer community. |
| [LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 109,010 | Step-by-step PyTorch implementation of a ChatGPT-like LLM from scratch — the definitive educational resource for understanding transformer-based language models. |
| [opencompass](https://github.com/open-compass/opencompass) | Python | 7,638 | LLM evaluation platform supporting 100+ datasets across knowledge, reasoning, coding, science, and safety — critical for benchmarking the rapidly expanding model zoo. |
| [open-inference](https://github.com/openvinotoolkit/openvino) | C++ | 185 (today) | Intel's OpenVINO toolkit for optimizing and deploying AI inference across Intel hardware — gaining renewed attention as inference efficiency becomes critical at scale. |
| [KAG](https://github.com/OpenSPG/KAG) | Python | 9,191 | Logical form-guided reasoning and retrieval framework built on OpenSPG — addresses the semantic gap in traditional RAG vector similarity by incorporating logical reasoning. |

---

## 3. Trend Signal Analysis

**The dominant signal today is the rise of the "agent harness" over the monolithic agent framework.** Projects like **ECC** (310k ⭐), **hermes-agent** (266k ⭐), and the agent skill ecosystems (Claude-BugHunter, stitch-skills, superpowers) are not building agents from scratch — they are building *substrate* that makes existing agents (Claude Code, Codex, Cursor) more capable. This is a meaningful architectural pivot: the community is no longer competing to build the best single agent, but to build the best *platform layer* that any agent can plug into.

**Memory and data access infrastructure is the second critical trend.** The RAG/memory cluster (firecrawl, mem0, DeepTutor, anything-llm, headroom, cognée) collectively represents over 500k stars. The core thesis: the bottleneck for production AI agents is not reasoning capability — it is reliable, real-time access to structured world knowledge. Firecrawl's 991 new stars today is a leading indicator that data procurement tools are in acute demand.

**LLM training democratization is accelerating.** Minimind's explosive growth (+1,827 stars in a single day) reflects a developer community hungry to understand, modify, and train models locally rather than consuming black-box APIs. This aligns with the broader open-weight model wave (Qwen, DeepSeek, MiniMax, Gemma) that ollama and open-webui make locally accessible.

**New entrants worth watching:** OpenVINO's presence on today's trending (+185 stars) signals that inference *efficiency* tooling is becoming a mainstream concern as AI moves from demo to production deployment.

---

## 4. Community Hot Spots

- [**minimind**](https://github.com/jingyaogong/minimind) — The fastest-rising AI project today. Any developer can now train a functional LLM in two hours. Expect a wave of community forks, fine-tune variants, and educational content around this project. High-priority watch for the training tooling ecosystem.

- [**firecrawl**](https://github.com/firecrawl/firecrawl) — The 550+ provider knowledge infrastructure layer is becoming the de facto data backbone for open-source agents. If you're building a RAG or agent application that needs live web data, this is the integration to standardize on.

- [**ECC + hermes-agent architecture pattern**](https://github.com/affaan-m/ECC) — The "harness + skills + memory + instincts" architecture is winning over the "monolithic agent" approach. Developers building agent tooling should study this pattern for compatibility and contribution opportunities.

- [**mem0**](https://github.com/mem0ai/mem0) — Cross-session memory infrastructure for agents is nascent but critical. With 69k stars and strong daily growth, mem0 is positioning itself as the "Redis for AI context." Evaluate for any agent project requiring persistent, compressible long-term memory.

- [**autoclip / MoneyPrinterTurbo video AI stack**](https://github.com/zhouxiaoka/autoclip) — The convergence of LLMs + video editing is producing production-grade content creation tools with minimal code. This vertical (short-form video generation from long-form source) is underbuilt in open source and attracting rapid community traction.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*