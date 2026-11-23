# AI 开源趋势日报 2026-11-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-23 03:01 UTC

---

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate all the text content while keeping the Markdown structure
2. Keep all URLs, code, project names, slugs, numbers, dates, etc. as-is
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output ONLY the translation - no preamble, no fences, no explanation

Let me translate section by section:

**Title and header:**
"AI Open Source Trends Report" → "AI 开源趋势报告"
"Date:" → "日期："
"Data Sources:" → "数据来源："

**Section 1: Today's Highlights**
"AI Open Source Trends Report" - "AI 开源趋势报告"
"The open-source AI ecosystem is experiencing a major inflection point toward **agentic tooling and skills frameworks**." → "开源 AI 生态正在经历一个重大转折点，向**智能体工具和技能框架**方向演进。"
"Projects like **superpowers** (agentic skills framework, +788 stars) and **CLI-Anything** (+699) signal a shift from single-purpose AI tools to composable agent systems." → "以 **superpowers**（智能体技能框架，+788 stars）和 **CLI-Anything**（+699）为代表的项目的崛起，标志着从单点 AI 工具向可组合智能体系统的转变。"

Let me continue translating carefully, maintaining the technical register.
</think>


# AI 开源趋势报告

**日期：** 2026-11-23
**数据来源：** GitHub Trending（当日 Stars）+ AI Topic Search（7 日活跃度）

---

## 1. 今日要点

开源 AI 生态正在经历一个重大转折点，向**智能体工具和技能框架**方向演进。**superpowers**（智能体技能框架，+788 stars）和 **CLI-Anything**（+699）等项目的崛起，标志着从单点 AI 工具向可组合智能体系统的转变。与此同时，**minimind**（+473）以"2 小时训练 64M 模型"为卖点，推动 LLM 训练走向大众化，显示出开发者对模型定制能力的旺盛需求。Google Labs 的 **Stitch Skills** 库（+494）预示着智能体互操作性开放标准正在形成。值得关注的是，面向智能体的安全工具正在爆发式增长——**Claude-BugHunter**（+1,716，当日第一）和 **app-store-compliance**（+621）表明社区正在快速构建智能体时代的安全红队和合规能力。

---

## 2. 各类别顶尖项目

### 🔧 AI 基础设施

| 项目 | 语言 | Stars（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 159,293 | 面向 Ollama、OpenAI API 及多后端的友好 AI 界面——现已成为本地 AI 部署的事实标准 Web UI。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 207,116 (+915) | 知识基础设施，通过统一 API 接入 550+ 数据源——是智能体获取实时网页数据的必备工具。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 187,897 | 领先的本地 LLM 运行时；一条命令即可支持 Kimi、GLM、MiniMax、DeepSeek、Qwen、Gemma 及数十种模型。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,993 | 智能体工程平台——构建 LLM 应用的核心框架，提供工具调用、记忆管理和链式调用能力。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,986 | 面向 AI 的文档处理平台；专注于 RAG 流程中的索引、检索和上下文增强。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 201,779 | 基础 ML 框架；仍是大规模模型训练和生产部署的基石。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 105,833 | 动态神经网络框架，支持 GPU 加速；在科研原型和模型实验中占据主导地位。 |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | — (+158) | Intel 的 AI 推理优化与部署工具包；随着边缘 AI 部署加速，越来越受关注。 |

### 🤖 AI 智能体 / 工作流

| 项目 | 语言 | Stars（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | — (+788) | 软件开发智能体技能框架——定义了一套构建自主编程智能体的方法论。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | — (+699) | "让所有软件具备智能体原生能力"——为每个 CLI 工具提供智能体友好的接口，大幅扩展智能体能力边界。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | — (+668) | 跨平台研究智能体技能（Reddit、X、YouTube、HN、Polymarket）；对任意话题输出有据可查的总结报告。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | — (+494) | Google 的 Stitch MCP 服务器智能体技能库——预示着智能体能力开放标准正在形成。 |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Shell | — (+621) | AI 编程智能体技能集，内含 124 条审核拒绝模式和欧盟 AI 法案关键节点——移动应用合规开发的必备工具。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,892 | 面向智能体和生成式 UI 的前端技术栈；AG-UI 协议（智能体-前端通信标准）的缔造者。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 188,138 | 开创性的自主 AI 智能体项目；愿景是让每个人都能构建并使用可访问的 AI。 |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,697 | 协作式智能体工作流和 RAG 流水线构建平台；支持云端、VPC 或私有化部署。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 309,075 | Claude Code、Codex、Cursor 的智能体工具链，集技能、本能、记忆和安全能力于一体——Stars 最高的智能体框架。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 265,457 | "与你共同成长的智能体"——强调智能体的持续学习和自适应能力。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | — (+1,716) | 面向 Claude Code 的漏洞挖掘与红队技能包——82 项技能、15 条斜杠命令、681 个漏洞模式。 |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | — (+641) | 开源 AI 视频剪辑工具；将播客、访谈自动转换为带字幕的短视频，支持 TikTok、Reels、YouTube Shorts。 |
| [openbq-org/OpenBB](https://github.com/openbq-org/OpenBB) | Python | 75,652 | 面向分析师、量化交易员和 AI 智能体的开放数据平台——聚合金融数据，支持自动化分析。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 123,518 | 金融交易多智能体 LLM 框架——协调专业智能体团队完成市场分析和交易执行。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 73,727 | LLM 驱动的多市场股票分析，整合实时新闻和自动通知；支持零成本定时任务运行。 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | — (+518) | 专为 AI 编程智能体设计的编辑级图表——45 种图表类型，零依赖（纯 HTML+SVG，无需 Mermaid）。 |

### 🧠 LLM / 训练

| 项目 | 语言 | Stars（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 68,788 (+473) | 2 小时从零训练 64M LLM——让普通消费级硬件用户也能玩转模型训练。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,852 | 用 PyTorch 从零实现类 ChatGPT LLM 的完整指南——理解 Transformer 架构的教育级标杆。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,408 | 业界顶尖模型的核心定义框架——覆盖文本、视觉、语音和多模态领域。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,627 | LLM 评测平台，支持 100+ 数据集和来自 OpenAI、Anthropic、Qwen、DeepSeek 等的模型。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,803 | 在 Apple Silicon 上学习 LLM 推理——为系统工程师构建轻量级 vLLM + Qwen 技术栈。 |
| [acon96/home-llm](https://github.com/acon96/home-llm) | Python | 1,497 | Home Assistant 与本地 LLM 的集成方案——用本地模型控制智能家居，隐私优先。 |

### 🔍 RAG / 知识管理

| 项目 | 语言 | Stars（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 152,100 | 将代码库、文档、SQL 结构、PDF 转换为可查询知识图谱——确定性 AST 解析，无需向量数据库。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 119,107 | 跨智能体会话持久化上下文——捕获、AI 压缩，在后续会话中智能注入相关历史。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,551 | 智能体原生 RAG 引擎，已演化为上下文基础设施；深度文档理解，面向企业知识库场景。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,685 | Apache-2.0 协议，专为 AI 智能体打造的网页爬虫——Crawl4AI 云服务的开源底座。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 80,528 | 在 LLM 调用前压缩工具输出、日志和 RAG 片段——编程智能体节省 20% tokens，JSON 场景节省 60-95%。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,354 | AI 智能体的记忆层——开箱即用，为生产级智能体提供持久化上下文管理基础设施。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,720 | 高性能、云原生的向量数据库，专为大规模 ANN 检索生产场景打造。 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 59,965 | 闪电般快速的搜索引擎，内置 AI 驱动的混合搜索能力。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,666 | 面向海量向量相似性搜索的高性能向量数据库，支持云端和本地部署。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | Python | 13,809 | MLSys2026 最佳论文；RAG 场景下实现 97% 存储节省，同时保持快速、准确、100% 本地隐私执行。 |

---

## 3. 趋势信号分析

**智能体技能与互操作性是当下最核心的主题。** 今日涨幅最高的三款项目——**superpowers**、**CLI-Anything** 和 **Stitch Skills**——不约而同地指向同一愿景：让 AI 智能体模块化、可组合、与工具解耦。Stitch 率先倡导的"智能体技能"开放标准正在被 superpowers 等项目跟进，这预示着智能体生态正从单体式框架走向可插拔的能力市场。

**红队与安全工具正在经历超预期的高速增长。****Claude-BugHunter**（+1,716 stars，当日最高）证明社区正在迫切构建 AI 系统的攻击性安全能力。这一趋势与日益严格的监管压力（欧盟 AI 法案、应用商店合规要求）以及智能体系统大规模落地密切相关。

**"自己训练模型"的叙事正在走向主流。****minimind**（2 小时训练 64M 模型）和 **LLMs-from-scratch**（108K stars）代表了一场民主化浪潮——将门槛从"调用 API"降低到"理解并训练模型"。这可能会从根本上改变开发者与 AI 基础设施的关系。

**RAG 正在超越向量相似性检索的范式。****Graphify**（从代码库构建知识图谱）和 **LEANN**（97% 存储节省）等项目表明，检索策略正在向结构化、语义化和效率优化方向演进——告别粗糙的分块 Embedding 方案。

---

## 4. 社区热点

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — AI 安全工具是当前最炙手可热的新兴品类；单日 1,716 stars 的增幅表明开发者对智能体和 LLM 红队能力的巨大需求。

- **[obra/superpowers](https://github.com/obra/superpowers) + [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** — 智能体技能框架正在收敛到开放标准；该领域的早期布局者将塑造下一代智能体互操作格局。

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — 低门槛模型训练正在崛起；越来越多的开发者希望深入理解、定制和优化模型，而非单纯依赖 API 调用。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) + [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — RAG 创新正从检索精度转向知识结构化表示与效率优化；基于知识图谱的方法正在获得实质性的关注。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0) + [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 智能体记忆基础设施正成为关键差异化因素；跨会话的持久化压缩上下文是将智能体推向长时序实用的核心能力。

---

*本报告数据来源于 GitHub Trending + AI Topic Search。所有项目链接已对照提供 URL 逐一核验。*

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*