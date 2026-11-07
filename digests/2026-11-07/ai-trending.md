# AI 开源趋势日报 2026-11-07

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-07 02:18 UTC

---

<think>The user wants me to translate an English technical report into Simplified Chinese. Let me carefully translate it while following all the rules:

1. Output ONLY the translation, no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, project names, repo slugs, numbers, dates verbatim
4. Use natural technical Chinese register

Let me translate section by section:

Title: "AI Open Source Trends Report — 2026-11-07"
→ "AI 开源趋势报告 — 2026-11-07"

"Step 1 — Filtering"
→ "第 1 步 — 筛选"

"From the 17-item trending list, **4 projects** qualify as AI-relevant..." — translate naturally
"From the 80-item topic search, all 80 are pre-filtered to AI-adjacent topics and are retained for categorization."

Section 2 tables - translate descriptions, keep all identifiers as-is

Section 3 - "Trend Signal Analysis"
- "Agent Skills and Tooling Dominate Today's Momentum" → "今日最强劲趋势信号：Agent 技能与工具链"
- etc.

Section 4 - "Community Hot Spots"
- translate descriptions naturally

Let me do the full translation now, being careful with technical terms and natural Chinese phrasing.
</think>


# AI 开源趋势报告 — 2026-11-07

## 第 1 步 — 筛选

在 17 条 trending 列表中，**4 个项目**符合 AI 相关定义：`NVIDIA/auto-ontology`、`google/skills`、`mattpocock/skills` 和 `cloudflare/security-audit-skill`。其余项目（Rust 工具链、Ruby/PHP/JS 框架、媒体播放器、监控数据库）均因与 AI 无关而排除。在 80 条 topic 搜索结果中，所有条目均已预筛至 AI 相关 topic，全部保留用于分类。

---

## 2. 各分类下的头部项目

### 🔧 AI 基础设施

| 项目 | 语言 | Stars（总计 / 今日）| 概述 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,153 | 本地化 LLM 推理运行时，原生支持 Kimi、GLM、MiniMax、DeepSeek、Qwen、Gemma 等模型。本地模型部署领域的不二之选，社区模型生态极为活跃。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 168,607 | 文本、视觉、音频及多模态领域 SOTA 模型的标准定义库，是整个开源 AI 生态系统的底层基石。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,138 | Agent 工程平台，提供跨数十个 LLM 提供商的链式编排、工具调用和记忆组件。尽管竞争日益激烈，仍是采用最广泛的编排层。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,836 | 文档处理与 RAG 框架，架设于数据源与 LLM 之间。构建知识密集型 AI 应用的关键组件。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,081 | 基于 Rust 构建的模块化、可扩展 LLM 应用框架。反映了 Rust 在 AI 基础设施领域日益增长的影响力，有望突破 Python 一统天下的局面。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,570 | 综合 LLM 评测平台，覆盖知识、推理、代码、安全等 100+ 评测集。随着模型质量评估成为开发流程的关键环节，其重要性持续上升。 |

### 🤖 AI Agent / 工作流

| 项目 | 语言 | Stars（总计 / 今日）| 概述 |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 261,224 | 自适应 Agent 框架，可随用户需求持续演进，支持无缝扩展与真实任务自动化。Star 数最高的 Agent 项目之一，印证了社区对 Agent 基础组件的强烈需求。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 187,928 | 开创性的自主 AI Agent 项目，让普通用户也能使用 Agent 技术。目前已知度最高的开源 Agent 品牌，已成为该领域的参考架构。 |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 160,579 | Agentic 工作流与 RAG 可视化构建平台，支持云端、VPC 及私有化部署。为没有专职 MLOps 团队的中小型团队打通了原型到生产的最后一公里。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 120,218 | 开源库，使 LLM 能够自主控制网页浏览器，另提供隐身浏览器托管 API。是需要与实时网络交互的 Agent 的关键技术解锁。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,548 | 将 AI Agent 和生成式 UI 集成到 React、Angular 及移动应用的前端框架。主导制定了 AG-UI 协议，有望成为 Agent-UI 集成的行业标准。 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | Rust | 41,158 | 基于 Rust 的开源终端 AI Agent，支持任意模型或提供商。瞄准 CLI 优先开发者及 DevOps 工作流这一快速增长的用户群体。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总计 / 今日）| 概述 |
| :--- | :--- | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 199,274 | 专为 AI Agent 打造的网页抓取与数据提取平台，覆盖全网规模。为需要最新网络知识的 Agent 提供了关键的数据供给管道。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 157,955 | 易用的对话界面，同时支持 Ollama、OpenAI API 及数十种其他后端。作为闭源 AI 网页界面的开源替代方案，社区支持力度强劲。 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 144,049 | 精选 100+ 可直接使用的 LLM 应用合集，覆盖多个领域。既是最佳实践展示，也是开发者快速启动的参考模板库。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 140,278 | 基于 LLM 与工作流流水线驱动的自动化高清短视频生成器，用户只需输入主题或关键词。是 AI 规模化内容创作能力的高热度标杆案例。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 93,699 | RAG 引擎，已演进为面向 Agent 原生应用的完整上下文基础设施。面向对文档检索精度和规模有高要求的企业级场景。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 74,278 | AI Agent，从文档或主题一键生成包含真实图形、动画、图表及 AI 旁白演示稿的原生 PPT。精准切入高价值的商务办公提效场景。 |

### 🧠 LLM / 训练

| 项目 | 语言 | Stars（总计 / 今日）| 概述 |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 201,367 | Google 开源的 ML 框架，在全球范围内支撑大规模生产级 AI 系统。虽然 PyTorch 在研究人员中的影响力更大，但 TensorFlow 在已部署模型的推理服务侧仍占据主导。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 105,219 | 研究领域采用最广泛的深度学习框架，以动态计算图和强大的 GPU 加速能力见长。训练与实验新模型架构的事实标准。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 107,934 | 手把手教你用 PyTorch 从零实现类 ChatGPT LLM，是理解 Transformer 架构内在原理的权威学习资源。 |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,418 | 深度学习框架，以快速实验为核心目标，可运行在 TensorFlow、JAX 或 PyTorch 之上。对于 ML 初学者仍是首选入门工具。 |

### 🔍 RAG / 知识管理

| 项目 | 语言 | Stars（总计 / 今日）| 概述 |
| :--- | :--- | ---: | :--- |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,608 | 云原生、高性能向量数据库，专为大规模 ANN 检索设计。支持万亿级向量索引，是大型 RAG 部署的企业首选。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,452 | 高性能向量搜索引擎，以 Rust 编写，支持混合过滤与托管云服务。凭借速度、可靠性和友好的 API 正快速获得采用。 |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | Go | 16,940 | 融合对象存储与结构化过滤的向量数据库，支持云原生水平扩展。其混合检索能力在需要精确元数据过滤的 RAG 场景中表现突出。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 143,579 | 将代码库、文档、SQL schema 和 PDF 转化为可查询知识图谱，基于确定性 AST 解析。无需向量存储即可实现代码智能任务，完全可解释。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,531 | AI Agent 的持久化记忆基础设施，跨会话保持上下文连贯，无需重复加载。正在成为长周期 Agent 任务的标准构建块。 |
| [pathwaycom/serviette](https://github.com/pathwaycom/serviette) | Python | 58,725 | 无代码 RAG 服务器，支持文档变更同步回答，原生对接 8 种向量数据库。面向需要生产级 RAG 而无需定制工程投入的团队。 |

---

## 3. 趋势信号分析

**Agent 技能与工具链把控今日增长势能。** 最显著的信号来自 trending 列表中对 **agent 技能仓库** 的高度关注——`cloudflare/security-audit-skill`（+2,548 stars）、`mattpocock/skills`（+2,070）、`google/skills`（+534）均代表了一种新范式：可复用、可组合的技能包，用于扩展编码 Agent 的能力边界。这呼应了更宏观的行业转向——从"从零构建 Agent"到"从精选技能模块组装 Agent"。技能即复用单元的兴起是一个重要的架构转折点。

**语义推理层蓄势待发。** `NVIDIA/auto-ontology`（+2,015 stars）是今日最具 AI 特色的 trending 仓库，引入了基于图的确定性推理层——这与当前主流的概率性 token 级方法截然不同。社区对 **混合 AI 架构** 的兴趣正在升温，即在 LLM 之上叠加结构化知识表示层，以换取更高的精确性和可解释性。

**基础设施多元化加速。** `rig`（Rust，9,081 stars）与 `codewhale-hq/Codewhale`（Rust，41,158 stars）的出现，叠加 Python 主导的生态系统，代表了一个已经记录在案的成熟趋势：开发者正越来越多地选用 Rust 构建生产级 AI 基础设施，以获得性能和安全性优势。这不再是实验性质，而是有据可查的技术方向。

**RAG 从概念热潮走向基础设施化。** 向量数据库与 RAG 框架（milvus、qdrant、weaviate、ragflow、txtai）在两份列表中持续保持强劲，但关注重心正在向 **基于知识图谱的检索**（graphify、OpenViking）和 **持久化 Agent 记忆**（mem0、cognee）转移——这标志着行业正在从简单的 chunk-and-embed 方案迈向更有结构、可更新的知识表示方案。

---

## 4. 社区热点

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** — 网页交互是自主 Agent 的杀手级能力；开源库与托管隐身浏览器 API 的组合，是开发者构建需要浏览、搜索或抓取实时网页数据的 Agent 的最便捷入口。
- **[ollama/ollama](https://github.com/ollama/ollama)** — 运行 DeepSeek、Qwen、Gemma、MiniMax 等 SOTA 开源模型的最简路径；社区模型仓库持续扩张，是本地 AI 运动的中坚力量。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — 跨会话记忆正成为生产级 Agent 的刚性需求；mem0 的即插即用 API 让持久化上下文管理变得前所未有的简单，有望成为标配依赖。
- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) / [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale)** — Rust AI 工具链正在跨越早期采用阶段；构建对性能敏感的 AI 基础设施的开发者应密切关注这一技术栈。
- **[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)** — 基于图的语义推理层是一种新兴范式，有望重塑 LLM 工作流在结构化检索、可解释性和确定性查询生成方面的实现方式；即便尚未完全成熟，也值得进行实验性评估。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*