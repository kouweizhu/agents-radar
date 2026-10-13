# AI 开源趋势日报 2026-10-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-10-13 03:08 UTC

---

<think>The user wants me to translate this AI Open Source Trends Report into Chinese (Simplified Chinese - 简体中文). I need to:

1. Translate all the content while preserving the exact Markdown structure
2. Keep all URLs, project names, usernames, version tags, numbers, dates, etc. exactly as they are
3. Use natural technical Chinese, the register of a Chinese developer newsletter
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section, maintaining the tables and formatting:

## 1. Today's Highlights

The open-source AI ecosystem is experiencing a surge in **agentic infrastructure** and **memory/persistence layers** for AI systems. Microsoft's release of the BitNet 1-bit LLM inference framework signals continued momentum toward efficient, quantized model deployment. Meanwhile, the trending list is dominated by tools that extend AI agent capabilities—ranging from reverse engineering (REA with +45K stars) to context window optimization and free harness access. The RAG space remains robust with projects like Graphify (turning codebases into knowledge graphs) gaining significant traction, while vertical AI applications like AI-powered stock analysis and trading agents are proliferating rapidly.

开源AI生态系统正在经历**智能体基础设施**和AI系统**记忆/持久化层**的爆发式增长。微软发布的BitNet 1位LLM推理框架标志着高效量化模型部署的持续势头。与此同时，热门榜单被各种扩展AI智能体能力的工具所主导——从逆向工程（REA，+45K星）到上下文窗口优化和免费harness访问。RAG领域依然强劲，Graphify（将代码库转化为知识图谱）等项目获得了显著关注，而AI驱动的股票分析和交易智能体等垂直AI应用正在迅速涌现。

---

## 2. Top Projects by Category

按类别划分的顶级项目

### 🤖 AI Agents / Workflows

AI智能体/工作流

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 253,180 | An adaptive agent framework that grows with user needs. Stands as the highest-starred agent project in the ecosystem, reflecting strong community adoption. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 96,634 (+1,851) | Gives AI agents the ability to read and search Twitter, Reddit, YouTube, GitHub, and Chinese platforms via CLI—zero API fees. A notable entrant in today's trending list. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 37,975 | The frontend stack for building agents and generative UI. Makers of the AG-UI Protocol, enabling agent integration across React, Angular, mobile, and Slack. |
| [es

-engine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 35,767 | A reliable coding agent for complex software engineering tasks, built on DeepSeek models. Demonstrates the trend of specialized coding agents.
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 35,336 | Personal trading agent that automates market analysis and execution. Reflects the growing verticalization of AI agents in finance.
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Python | 626 (+626) | Enables free access to Claude Code, Codex, and other harnesses with 1.3B+ free tokens. A trending tool lowering barriers to agent experimentation. |

Hermes-agent from NousResearch provides a flexible framework that adapts as user needs evolve, making it the most widely adopted agent project in the ecosystem. Agent-Reach stands out as today's trending entry, granting AI agents the capability to read and search across Twitter, Reddit, YouTube, GitHub, and Chinese platforms through CLI without any API costs. CopilotKit offers the frontend foundation for constructing agents and generative UI, including the AG-UI Protocol that enables integration across React, Angular, mobile platforms, and Slack. DeepSeek-Reasonix builds on DeepSeek models to deliver reliable coding assistance for complex software engineering challenges, highlighting the shift toward domain-specific coding agents. Vibe-Trading emerges as a personal trading assistant automating market analysis and execution, illustrating how AI agents are becoming more specialized in finance. Free-claude-code reduces experimentation barriers by providing free access to Claude Code, Codex, and other tools with over 1.3 billion available tokens.

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/BitNet](https://github.com/microsoft/BitNet) | C++ | 97 (+97) | Official inference framework for 1-bit LLMs. Microsoft's push toward extreme quantization enables running large models on consumer hardware. |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | Jupyter Notebook | 879 (+879) | Supports 2.8T LLM inference with a single 4GB GPU. A notable trending project enabling efficient inference on minimal hardware. |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | TypeScript | 246 (+246) | Context window optimization for AI coding agents—sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,507 | LLM evaluation platform supporting 100+ datasets across knowledge, reasoning, coding, science, and safety. Essential for model benchmarking. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,866 | Build modular and scalable LLM applications in Rust. A niche but growing option for performance-critical agent infrastructure. |
| [microsoft/multilspy](https://github.com/microsoft/multilspy) | Python | 612 | LSP client library in Python for building applications around language servers—enabling deeper IDE integration for AI coding agents. |

Microsoft's BitNet delivers an official inference framework for 1-bit LLMs, pushing extreme quantization to run large models on consumer hardware. Lyogavin's airllm project enables efficient inference of 2.8T models on a single 4GB GPU, demonstrating how minimal hardware constraints can still support substantial language model workloads. Context-mode optimizes context windows for AI coding agents by sandboxing tool output with 98% reduction, maintaining session memory, and routing across 17 platforms through MCP. Open-compass serves as an evaluation platform supporting over 100 datasets spanning knowledge, reasoning, coding, science, and safety benchmarks. Rig provides Rust-based infrastructure for building modular, scalable LLM applications in a performance-critical niche that's expanding. Microsoft's multilspy offers a Python LSP client library enabling deeper IDE integration for AI coding agents.

### 📦 AI Applications

AI应用

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 155,143 (+157) | User-friendly AI interface supporting Ollama, OpenAI API, and more. The most starred project in the RAG category and a cornerstone of local AI deployment. |
| [morluto/rea](https://github.com/morluto/rea) | TypeScript | 164,283 (+45,327) | Reverse engineer anything with agents, from app behavior to native binaries. Today's top-trending project with explosive 45K star growth. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 61,186 | AI-powered PowerPoint generation from documents—with native shapes, transitions, charts, and audio narration. A strong vertical application. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 66,249 | LLM-driven multi-market stock analysis with real-time news, decision dashboards, and automated notifications. Zero-cost scheduled execution. |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 46,738 | Open-source, privacy-first, self-hosted knowledge workspace where humans and AI agents collaborate. Bridges personal knowledge management with agentic workflows. |

Open-webui provides a user-friendly AI interface supporting Ollama, OpenAI API, and other backends, serving as the most-starred RAG project and foundational to local AI deployment. Morluto's rea enables reverse engineering across app behavior to native binaries, experiencing explosive 45K star growth as today's top-trending entry. Hugohe3's ppt-master generates AI-powered PowerPoint presentations with native shapes, transitions, charts, and audio narration as a strong vertical solution. ZhuLinsen's daily_stock_analysis delivers multi-market stock analysis through LLMs with real-time news, decision dashboards, and automated notifications at no cost. Siyuan-note's siyuan creates an open-source, privacy-first, self-hosted knowledge workspace enabling human and AI agent collaboration.

### 🔍 RAG / Knowledge

RAG/知识

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: :--- | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 125,915 | Transform codebases, documentation, SQL schemas, and PDFs into queryable knowledge graphs. Provides Claude Code and Cursor with a /graphify skill using local deterministic AST parsing. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 100,131 | Persistent context across sessions for every agent—captures agent activity, compresses with AI, and injects relevant context into future sessions. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 92,085 | Leading open-source RAG engine combining RAG with Agent capabilities to create a superior context layer for LLMs. |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 85,400 | Open-source web crawler and scraper for LLMs—converts any website into clean, LLM-ready Markdown. Also available as a cloud service. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 67,067 | The memory layer for AI agents—drop-in memory infrastructure that persists context. Built for production agent deployments. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 75,150 | Compresses tool outputs, logs, files, and RAG chunks before they reach the LLM. Claims 20% fewer tokens for coding agents, 60-95% fewer for JSON. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,366 | High-performance, cloud-native vector database built for scalable vector ANN search. A foundational RAG infrastructure component. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,051 | High-performance, massive-scale vector database for next-generation AI applications. Available as cloud service. |

Graphify-Labs converts codebases, documentation, SQL schemas, and PDFs into queryable knowledge graphs, offering Claude Code and Cursor users a /graphify skill through deterministic local AST parsing. Claude-mem maintains persistent context across all agent sessions by capturing activity, compressing it with AI, and injecting relevant details into subsequent sessions. RAGFlow from Infiniflow leads the open-source RAG engine space by merging RAG with Agent capabilities to establish superior context for LLMs. Crawl4ai provides open-source web crawling and scraping optimized for LLMs, transforming any website into clean Markdown. Mem0 functions as the memory infrastructure layer for AI agents, persisting context in production deployments. Headroom reduces token consumption by compressing tool outputs, logs, files, and RAG chunks before reaching the LLM—achieving 20% fewer tokens for coding agents and 60-95% reduction for JSON. Milvus delivers high-performance, cloud-native vector database capabilities built for scalable approximate nearest neighbor search, forming essential RAG infrastructure. Qdrant offers high-performance, large-scale vector database solutions for next-generation AI applications, also accessible as a cloud service.

---

## 3. Trend Signal Analysis

Today's data reveals **three dominant trends**:

1. **Agent Memory & Persistence Are Maturing**: Projects like `mem0ai/mem0`, `thedotmack/claude-mem`, and `headroomlabs-ai/headroom` are addressing the critical challenge of maintaining context across agent sessions. The 98% tool output reduction achieved by `mksglu/context-mode` demonstrates active optimization of token economics in agent workflows.

2. **Vertical AI Applications Are Exploding**: From stock analysis (`daily_stock_analysis`, `Vibe-Trading`) to PowerPoint generation (`ppt-master`) and job search automation (`career-ops`), the ecosystem is shifting toward ready-to-deploy vertical solutions. These combine RAG, agents, and domain-specific tools into polished products.

3. **Efficient Inference Gains Momentum**: Microsoft's `BitNet` for 1-bit LLM inference and `airllm` enabling 2.8T model inference on a single 4GB GPU reflect the industry's push toward deploying large models on constrained hardware—critical for widespread agent deployment.

The explosive growth of `morluto/rea` (+45K stars today) as a reverse-engineering agent suggests a new category: **AI-driven security and analysis tools** that operate at the binary level.

## 4. Community Hot Spots

- **[morluto/rea](https://github.com/morluto/rea)** — Reverse engineering with agents is a novel direction; watch for expansion into binary analysis and security applications.

- **[microsoft/BitNet](https://github.com/microsoft/BitNet)** — 1-bit LLM inference is a paradigm shift for edge deployment; Microsoft's official framework lends credibility to extreme quantization.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** & **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — Memory infrastructure is becoming a must-have for production agents; these projects are positioned as the "memory layer" for the agent ecosystem.

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — Turning entire codebases into queryable knowledge graphs represents a major advancement in code understanding and RAG quality.

- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** — The convergence of local LLM deployment (Ollama), RAG, and agent capabilities in a user-friendly interface makes this a central hub for self-hosted AI stacks.

---

## 3. 趋势信号分析

今日数据显示**三大主导趋势**：

1. **智能体记忆与持久化日趋成熟**：`mem0ai/mem0`、`thedotmack/claude-mem` 和 `headroomlabs-ai/headroom` 等项目正在解决跨智能体会话维护上下文的关键挑战。`mksglu/context-mode` 实现的98%工具输出压缩展示了智能体工作流中代币经济的积极优化。

2. **垂直AI应用正在爆发**：从股票分析（`daily_stock_analysis`、`Vibe-Trading`）到PPT生成（`ppt-master`）和求职自动化（`career-ops`），生态系统正在转向开箱即用的垂直解决方案。这些将RAG、智能体和领域特定工具整合为成熟产品。

3. **高效推理势头正劲**：微软的 `BitNet` 实现1位LLM推理，以及 `airllm` 支持在单张4GB显卡上推理2.8T模型，反映了行业在受限硬件上部署大型模型的努力——这对于智能体的广泛部署至关重要。

`morluto/rea`（今日+45K星）作为逆向工程智能体的爆发式增长揭示了一个新类别：**在二进制层面运行的AI驱动安全与分析工具**。

---

## 4. 社区热点

- **[morluto/rea](https://github.com/morluto/rea)** — 智能体逆向工程是一个新方向；关注其向二进制分析和安全应用的扩展。

- **[microsoft/BitNet](https://github.com/microsoft/BitNet)** — 1位LLM推理是边缘部署的范式转变；微软官方框架为极端量化提供了可信度。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** 和 **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 记忆基础设施正在成为生产级智能体的必备组件；这些项目定位为智能体生态系统的"记忆层"。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 将整个代码库转化为可查询的知识图谱代表了代码理解和RAG质量的重大进步。

- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** — 本地LLM部署（Ollama）、RAG和智能体能力在友好界面中的融合使其成为自托管AI栈的中心枢纽。</think>

# AI 开源趋势报告 — 2025年10月13日

## 1. 今日要点

开源AI生态系统正在经历**智能体基础设施**和AI系统**记忆/持久化层**的爆发式增长。微软发布的BitNet 1位LLM推理框架标志着高效量化模型部署的持续势头。与此同时，热门榜单被各种扩展AI智能体能力的工具所主导——从逆向工程（REA，+45K星）到上下文窗口优化和免费harness访问。RAG领域依然强劲，Graphify（将代码库转化为知识图谱）等项目获得了显著关注，而AI驱动的股票分析和交易智能体等垂直AI应用正在迅速涌现。

---

## 2. 各类别顶级项目

### 🤖 AI 智能体 / 工作流

| 项目 | 语言 | 星标（总计/今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 253,180 | 随用户需求成长的自适应智能体框架。作为生态系统中星标最高的智能体项目，反映了强劲的社区采用。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 96,634 (+1,851) | 让AI智能体能够通过CLI读取和搜索Twitter、Reddit、YouTube、GitHub及中国平台——零API费用。今日热门榜单的亮眼新秀。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 37,975 | 构建智能体和生成式UI的前端技术栈。AG-UI协议的创造者，支持跨React、Angular、移动端和Slack的智能体集成。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 35,767 | 基于DeepSeek模型的可靠编程智能体，用于复杂软件工程任务。展现了专业化编程智能体的趋势。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 35,336 | 自动化市场分析和执行的个人交易智能体。反映了AI智能体在金融领域的垂直化趋势。 |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Python | 626 (+626) | 免费使用Claude Code、Codex及其他harness，超1.3B免费token。降低智能体实验门槛的热门工具。 |

### 🔧 AI 基础设施

| 项目 | 语言 | 星标（总计/今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [microsoft/BitNet](https://github.com/microsoft/BitNet) | C++ | 97 (+97) | 1位LLM的官方推理框架。微软推动极端量化，使大型模型能在消费级硬件上运行。 |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | Jupyter Notebook | 879 (+879) | 单张4GB显卡支持2.8T LLM推理。实现在minimal硬件上进行高效推理的热门项目。 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | TypeScript | 246 (+246) | AI编程智能体的上下文窗口优化——沙箱工具输出（压缩98%）、持久化会话记忆、跨17个平台通过MCP强制路由。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,507 | 支持100+数据集的LLM评估平台，涵盖知识、推理、编程、科学和安全领域。模型基准测试的必备工具。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,866 | 用Rust构建模块化、可扩展的LLM应用。面向性能关键型智能体基础设施的小众但增长中的选择。 |
| [microsoft/multilspy](https://github.com/microsoft/multilspy) | Python | 612 | Python中的LSP客户端库，用于构建围绕语言服务器的应用程序——实现AI编程智能体更深入的IDE集成。 |

### 📦 AI 应用

| 项目 | 语言 | 星标（总计/今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 155,143 (+157) | 用户友好的AI界面，支持Ollama、OpenAI API等。RAG类别星标最高的项目，本地AI部署的基石。 |
| [morluto/rea](https://github.com/morluto/rea) | TypeScript | 164,283 (+45,327) | 用智能体逆向工程一切，从应用到原生二进制。今日热门榜首，星标爆发式增长45K。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 61,186 | AI从文档生成PowerPoint——支持原生形状、过渡、图表和音频旁白。强势垂直应用。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 66,249 | LLM驱动的多市场股票分析，实时新闻、决策仪表盘和自动化通知。零成本定时执行。 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 46,738 | 开源、隐私优先、自托管的知识工作空间，人类与AI智能体协同工作。连接个人知识管理与智能体工作流。 |

### 🔍 RAG / 知识

| 项目 | 语言 | 星标（总计/今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 125,915 | 将代码库、文档、SQL模式和PDF转化为可查询的知识图谱。为Claude Code和Cursor提供/graphify技能——基于本地确定性AST解析。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 100,131 | 跨会话持久化每个智能体的上下文——捕获智能体活动、AI压缩并注入相关上下文到未来会话。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 92,085 | 领先的开放源码RAG引擎，融合RAG与智能体能力，为LLM打造更优上下文层。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 85,400 | 面向LLM的开源网页爬虫和抓取器——将任意网站转化为干净的LLM可用Markdown。亦提供云服务。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 67,067 | AI智能体的记忆层——即插即用的记忆基础设施，持久化上下文。为生产级智能体部署而构建。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 75,150 | 在工具输出、日志、文件和RAG块到达LLM前进行压缩。声称编程智能体减少20% token，JSON减少60-95%。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,366 | 高性能、云原生的向量数据库，为规模化向量ANN搜索构建。RAG基础设施的核心组件。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,051 | 面向下一代AI应用的高性能、大规模向量数据库。提供云服务。 |

---

## 3. 趋势信号分析

今日数据显示**三大主导趋势**：

1. **智能体记忆与持久化日趋成熟**：`mem0ai/mem0`、`thedotmack/claude-mem` 和 `headroomlabs-ai/headroom` 等项目正在解决跨智能体会话维护上下文的关键挑战。`mksglu/context-mode` 实现的98%工具输出压缩展示了智能体工作流中token经济的积极优化。

2. **垂直AI应用正在爆发**：从股票分析（`daily_stock_analysis`、`Vibe-Trading`）到PPT生成（`ppt-master`）和求职自动化（`career-ops`），生态系统正在转向开箱即用的垂直解决方案。这些将RAG、智能体和领域特定工具整合为成熟产品。

3. **高效推理势头正劲**：微软的 `BitNet` 实现1位LLM推理，以及 `airllm` 支持在单张4GB显卡上推理2.8T模型，反映了行业在受限硬件上部署大型模型的努力——这对于智能体的广泛部署至关重要。

`morluto/rea`（今日+45K星）作为逆向工程智能体的爆发式增长揭示了一个新类别：**在二进制层面运行的AI驱动安全与分析工具**。

---

## 4. 社区热点

- **[morluto/rea](https://github.com/morluto/rea)** — 智能体逆向工程是一个新方向；关注其向二进制分析和安全应用的扩展。

- **[microsoft/BitNet](https://github.com/microsoft/BitNet)** — 1位LLM推理是边缘部署的范式转变；微软官方框架为极端量化提供了可信度。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** 和 **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 记忆基础设施正在成为生产级智能体的必备组件；这些项目定位为智能体生态系统的"记忆层"。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 将整个代码库转化为可查询的知识图谱代表了代码理解和RAG质量的重大进步。

- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** — 本地LLM部署（Ollama）、RAG和智能体能力在友好界面中的融合使其成为自托管AI栈的中心枢纽。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*