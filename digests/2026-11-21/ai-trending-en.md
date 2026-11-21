# AI Open Source Trends 2026-11-21

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-21 03:24 UTC

---

<think>Let me analyze this data carefully and create a structured AI Open Source Trends Report.

First, let me filter the AI-related projects from the data:

**From Trending (16 repos):**
1. elementalsouls/Claude-BugHunter - AI (bug hunting/red-team skills)
2. obra/superpowers - AI (agentic skills framework)
3. HKUDS/CLI-Anything - AI (CLI for agents)
4. jingyaogong/minimind - AI (LLM training in 2 hours)
5. cursor/plugins - AI-related (Cursor AI plugins)
6. firecrawl/firecrawl - AI (knowledge infrastructure for agents)
7. openvinotoolkit/openvino - AI (inference optimization)
8. cathrynlavery/diagram-design - AI (diagrams for AI coding agents)
9. mvanhorn/last30days-skill - AI (agent skill for research)
10. google-labs-code/stitch-skills - AI (agent skills)
11. mjmirza/app-store-compliance - partially AI (AI coding agent skill)
12. Tracer-Cloud/opensre - CI/CD (not primarily AI)
13. toeverything/AFFiNE - productivity (has AI features but not primary)
14. XiaoYouChR/Ghost-Downloader-3 - downloader (not AI)
15. zhouxiaoka/autoclip - AI (video clipping)

Non-AI:
- nginx/nginx - web server
- Tracer-Cloud/opensre - CI/CD reliability
- toeverything/AFFiNE - knowledge base (has AI but not primary focus today)

**From Topic Search (81 repos):**
These are all AI-related based on topic tags (rag, llm, vector-db, ml, llm-model, ai-agent)

Now let me categorize:

**🔧 AI Infrastructure:**


I'll highlight the core infrastructure projects that enable AI development. OpenVINO provides optimization and deployment capabilities, Firecrawl offers knowledge infrastructure, and MiniMind demonstrates rapid LLM training techniques. Open WebUI creates user-friendly AI interfaces, while Ollama and Hugging Face Transformers provide essential model deployment and transformation tools. LangChain and LangGraph offer robust frameworks for building complex AI applications, with Dify emerging as another workflow development platform.

**🤖 AI Agents / Workflows:**
The agent ecosystem is expanding with innovative approaches. Claude-BugHunter showcases specialized AI skills for bug hunting, while Superpowers represents an emerging agentic skills framework. Tools like CLI-Anything and Stitch-Skills demonstrate increasing CLI and skill-based agent development. Agent platforms such as AutoGPT, Browser-use, and Nanobot are pushing boundaries in autonomous task execution.

The agent development landscape reveals diverse strategies: Hermes-agent emphasizes growth-oriented agent design, OpenClaude offers flexible execution environments, CowAgent introduces multi-agent and memory-based approaches, and career-ops presents specialized job search agents. OpenCode provides terminal-based coding solutions, with CopilotKit focusing on frontend generative UI experiences.

**📦 AI Applications:**
Practical AI applications are emerging across multiple domains. DeepTutor offers personalized lifelong learning, MoneyPrinterTurbo enables automated video content generation, and TradingAgents explores financial trading applications. AutoClip demonstrates video processing capabilities, while siyuan-note provides a privacy-first knowledge workspace combining human and AI interactions.

**🧠 LLMs / Training:**
Large language model development continues to advance rapidly. Notable projects include minimind enabling rapid model training, LLMs-from-scratch providing educational resources, and OpenCompass offering comprehensive model evaluation platforms. Specialized approaches like tiny-llm for inference systems and DATAGEN for AI-driven research assistance highlight the ecosystem's diversity.

**🔍 RAG / Knowledge:**
Retrieval-augmented generation and knowledge management tools are gaining prominence. Projects like open-webui, graphify, and langchain provide robust frameworks for knowledge processing. Mem0 offers memory infrastructure, AnythingLLM enables local AI experiences, and RAGFlow introduces agent-native database approaches. Crawl4ai supports web scraping for AI contexts, with headroom focusing on output compression. Vector databases such as Milvus, Qdrant, Weaviate, and LanceDB provide essential infrastructure for semantic search and retrieval systems.

txtai emerges as an all-in-one AI framework for semantic search, while langchain4j brings these capabilities to the Java ecosystem. OpenViking introduces an innovative self-evolving context database specifically designed for AI agents.

Trending analysis highlights significant momentum in several key areas. Agent development is experiencing explosive growth, with specialized frameworks like Superpowers and Stitch-Skills gaining rapid traction. Tools like Claude-BugHunter demonstrate the community's focus on AI safety through sophisticated red-teaming skills. The trend suggests a maturation of agentic systems, with increasing emphasis on specialized, production-ready agent frameworks.

Rapid LLM training is becoming a democratizing force, exemplified by projects like MiniMind that enable training substantial models in just two hours. This signals a shift towards making AI development more accessible to individual developers and smaller teams.

The agent skills ecosystem is rapidly expanding, with tools like CLI-Anything, Stitch-Skills, and Cursor plugins indicating a move towards standardized skill definitions. This standardization will likely facilitate more interoperable and modular AI agent development.

Vector databases remain critically important, with established players like Milvus, Qdrant, and Weaviate maintaining high engagement. Emerging technologies like txtai and langchain4j are pushing the boundaries of semantic search and cross-platform capabilities.

Emerging patterns suggest a trend towards agent-native design, open agent standards, and knowledge infrastructure optimization for AI systems.

1. firecrawl/firecrawl
2. HKUDS/CLI-Anything
3. elementalsouls/Claude-BugHunter
4. mem0ai/mem0
5. browser-use/browser-use

I'll proceed with structuring the comprehensive report, focusing on these key insights.
</think>


# AI Open Source Trends Report

**Date:** November 21, 2026  
**Data Sources:** GitHub Trending + AI Topic Search (81 repos analyzed)

---

## 1. Today's Highlights

The AI open-source ecosystem is experiencing a significant shift toward **agent-native infrastructure** and **standardized skill frameworks**. Projects like Superpowers and Stitch-Skills are redefining how developers build AI agents by providing structured methodologies rather than ad-hoc toolchains. Meanwhile, the democratization of LLM training continues with MiniMind enabling developers to train a functional 64M model from scratch in just 2 hours—a powerful signal that frontier AI capabilities are becoming accessible to individual contributors. Firecrawl's explosive growth (1,241 stars today) underscores the critical need for knowledge infrastructure that can feed AI agents with real-time, multi-source data. Security-focused AI tools like Claude-BugHunter (1,622 stars today) are also gaining traction, reflecting the community's growing emphasis on safe and responsible AI deployment.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 159,182 | User-friendly AI interface supporting Ollama, OpenAI API, and multiple backends—becoming the de facto local AI frontend for self-hosted deployments. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 205,382 (+1,241) | Knowledge infrastructure providing unified API access to 550+ data providers through search and scraping—essential for grounding AI agents with current information. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 187,776 | Local LLM runtime with native support for Kimi, GLM, MiniMax, DeepSeek, Qwen, and Gemma—continues to dominate local inference deployment. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,332 | The definitive model-definition framework for state-of-the-art ML in text, vision, audio, and multimodal—foundational infrastructure for the entire ecosystem. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | — (+217) | Intel's open-source toolkit for optimizing and deploying AI inference across CPU, GPU, and specialized accelerators. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 67,740 (+847) | Enables training a 64M parameter LLM from scratch in 2 hours—representing the cutting edge of accessible, rapid model development. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | — (+1,622) | Claude Code skill bundle for bug hunting and red-team work with 82 skills, 15 slash commands, and 681 vulnerability patterns across 24 core classes. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | — (+890) | Agentic skills framework and software development methodology—introduces structured patterns for building reliable autonomous agents. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | — (+773) | "Making ALL Software Agent-Native"—provides CLI wrappers that expose any software as tool-calling interfaces for AI agents. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | — (+315) | Library of Agent Skills following the open standard, compatible with Antigravity, Gemini CLI, Claude Code, and Cursor. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 188,120 | Pioneering autonomous AI agent framework with mission to make AI accessible for everyone to use and build on. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 121,626 | Open-source library for AI browser agents with cloud hosting for stealth browsers and hosted agent APIs. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,853 | The frontend stack for agents and generative UI—makers of the AG-UI Protocol enabling rich agent interactions. |
| [trycua/cua](https://github.com/trycua/cua) | Rust | 32,720 | Open-source drivers and sandboxes for scaling computer-use 2.0 with cross-OS benchmarks for training and evaluation. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | — (+979) | Open-source AI video clipping tool that auto-generates short-form content with subtitles, covers, and platform-specific copy for TikTok, Reels, and YouTube Shorts. |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 61,135 | Lifelong personalized tutoring system leveraging deep learning for adaptive, individualized education at scale. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 144,845 | Automated HD short video generation from topics or keywords using AI models and workflow automation. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 73,577 | LLM-powered multi-market stock analysis with real-time news, decision dashboards, and automated notifications supporting zero-cost scheduled runs. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 78,885 | AI that transforms documents or topics into native PowerPoint decks with shapes, animations, charts, and audio narration. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 67,740 (+847) | Train your own 64M LLM from scratch in 2 hours—the fastest path from zero to functional language model. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,723 | Step-by-step PyTorch implementation of a ChatGPT-like LLM—arguably the best educational resource for understanding transformer-based language models. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,609 | Comprehensive LLM evaluation platform supporting 100+ datasets across knowledge, reasoning, coding, science, and safety domains. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 265,015 | An agent framework designed to grow with user needs—emphasizes iterative improvement and learning. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,798 | Learn LLM inference systems on Apple Silicon—builds a minimal vLLM + Qwen stack for systems engineers. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,986 | The agent engineering platform—provides abstractions for building LLM applications with chains, tools, and memory. |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 45,209 | Build resilient agents with LangGraph—enables complex multi-step reasoning graphs with state management. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,288 | The memory layer for AI agents—provides persistent context that compresses and retrieves relevant history across sessions. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,709 | High-performance, cloud-native vector database built for scalable approximate nearest neighbor search at scale. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,488 | Agent-native RAG engine that evolved into context infrastructure—offers deep document understanding for complex RAG pipelines. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,437 | Open-source AI memory platform for agents—provides persistent long-term memory using small models at zero cost. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 80,221 | Compress tool outputs, logs, and RAG chunks before they reach the LLM—achieves 20-95% token reduction depending on content type. |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,612 | Apache-2.0 web crawler purpose-built for AI agents with semantic extraction and self-hosting capabilities. |

---

## 3. Trend Signal Analysis

The most striking signal from today's data is the **maturation of the agent skills ecosystem**. We see converging momentum around standardized skill definitions—Stitch-Skills, Superpowers, and CLI-Anything all represent different facets of the same thesis: AI agents need well-defined, composable building blocks rather than ad-hoc tool integrations. This standardization push mirrors the evolution of package management in traditional software, suggesting we're approaching a tipping point where "agentic npm" becomes a reality.

**Red-teaming and security tooling** is emerging as a distinct category with significant community interest. Claude-BugHunter's explosive growth (1,622 stars) within hours of publication indicates developers are increasingly treating AI security as a first-class concern rather than an afterthought. This aligns with broader industry discussions around AI safety and the need for systematic vulnerability assessment.

The **knowledge infrastructure layer** continues to attract investment, as evidenced by Firecrawl's sustained momentum. Projects that can reliably ground AI agents in current, accurate information are becoming critical infrastructure. We're seeing a bifurcation between pure retrieval (vector DBs) and intelligent extraction (Firecrawl, Crawl4ai) approaches.

Finally, **local-first AI** remains a strong theme—Ollama, open-webui, and anything-llm collectively represent a significant community movement toward owning AI infrastructure rather than relying on closed APIs.

---

## 4. Community Hot Spots

- **[obra/superpowers](https://github.com/obra/superpowers)** — The agentic skills framework represents a new methodology for building reliable agents; watch for it to influence how the community approaches agent reliability and composability.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Memory infrastructure is becoming essential for production agents; Mem0's approach to persistent, compressed context could become the standard for agent memory management.

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** — Computer-use agents are rapidly advancing; Browser-use's open-source library + cloud offering positions it as a key enabler for browser-based agent applications.

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — AI security red-teaming is moving from theoretical to practical; this project's comprehensive vulnerability pattern library could catalyze a new category of AI security tooling.

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — Rapid LLM training demos are democratizing model development; developers should explore similar techniques for fine-tuning and domain adaptation on constrained hardware.

---

*Report generated from GitHub Trending + AI Topic Search data. Stars and engagement metrics reflect real-time community signals as of 2026-11-21.*

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*