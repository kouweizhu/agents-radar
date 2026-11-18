# AI 开源趋势日报 2026-11-18

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-18 03:49 UTC

---

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me go through this carefully, following the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, project names, slugs, numbers, dates verbatim
4. Use natural technical Chinese register

Let me translate section by section:

**Title**: AI Open Source Trends Report — 2026-11-18 → AI 开源趋势报告 — 2026-11-18

**Section 1: Today's Highlights**
This needs to be translated into natural Chinese technical register.

**Section 2: Tables** - translate descriptions, keep project names/slugs/URLs/stars/languages unchanged

**Section 3: Trend Signal Analysis** - translate prose

**Section 4: Community Hot Spots** - translate prose, keep links

Let me work through this carefully:

---

# AI 开源趋势报告 — 2026-11-18

---

## 1. 今日要点

开源 AI 生态正在经历一场决定性的范式转变：从**构建智能体**转向**部署智能体**。今日热榜中有四个仓库专注于智能体*基础设施*——编排框架、技能注册表和性能调优工具——而非智能体本身。今日最亮眼的出道项目是 **[ECC](https://github.com/affaan-m/ECC)**，一个智能体测试平台，在单日就获得了 18.3 万颗星标，表明社区对生产级智能体可靠性的强烈需求。

阿里开源了一款经过实战检验的 LLM 代码审查工具，腾讯也推出了自托管的编程智能体工作流，满足了企业级对安全、可审计的 AI 开发流水线的需求。AI 办公领域也在升温，Univer 推出了一个 SDK，可将 AI 智能体直接嵌入到电子表格和文档工作流中，而 AG-UI 协议则标准化了智能体与前端的交互——这两个互补的赌注押在了普适 AI 集成的方向上。

## 2. 各分类 TOP 项目

### 🔧 AI 基础设施

| 项目 | 语言 | 星标总数 | 描述 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 187,451 | 本地 LLM 推理运行时，支持数十种开源模型 |

；通过亚 100ms 级延迟保持自托管 LLM 部署的事实标准。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,321 | 文本、视觉、音频和多模态推理与训练的标准模型定义框架，涵盖数千个预训练检查点。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 121,349 | 开源 AI 浏览器自动化库，支持智能体大规模导航、提取和交互 Web 界面。 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | 121,100 | 面向编码智能体的本地代理和技能系统，压缩工具输出同时保持保真度以降低 token 消耗。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 202,683 | 统一的网页抓取和数据提取 API，为 550+ 数据提供商的智能体知识获取提供支持。 |
| [alibaba/open-code-review](https://github.com/alibaba/alibaba-open-code-review) | Go | 763 (今日) | 阿里的大规模生产级混合代码审查工具，将确定性管道与 LLM 智能体相结合，实现多语言行级漏洞检测。 |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 591 (今日) | 自托管的编码智能体编排层（CodeBuddy、Codex、Claude Code），内置人工审批门控，瞄准企业级 CI/CD 集成场景。 |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 1,774 (今日) | 可扩展的办公套件 SDK，将 AI 智能体能力嵌入电子表格和文档，面向 AI 原生生产力工具开发者。 |

### 🤖 AI 智能体 / 工作流

| 项目 | 语言 | 星标总数 | 描述 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 305,641 (+883) | 面向编码智能体工作流的编排层，为 Claude Code、Codex、Cursor 等提供统一的任务调度和执行框架。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 158,972 | 本地 LLM 的完整 Web UI，支持 Ollama 集成，作为社区首选的 ChatGPT 替代方案持续快速增长。 |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,382 | 低代码平台，用于构建 RAG 管道和智能体工作流，提供丰富的模型和工具支持，支持云端、VPC 及自托管部署。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,779 | 前端集成技术栈，将 AI 智能体和生成式 UI 嵌入 React、Angular 和移动应用；AG-UI 协议的创建者。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 1,917 (今日) | 智能体技能框架和软件开发方法论，规范化智能体如何跨任务获取和应用能力。 |
| [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | TypeScript | 1,445 (今日) | 开放协议，标准化 AI 智能体与前端应用之间的双向通信，消除每个框架的自定义集成开销。 |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 1,005 (今日) | Claude Code 的红队技能包，包含 82 个漏洞狩猎技能和 681 个跨 24 个漏洞类别的模式，面向安全驱动的智能体工作流。 |
| [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | Python | 1,072 (今日) | Google Research 的多智能体研究论文写作框架，跨自主智能体编排文献综述、撰写和修订流程。 |

### 📦 AI 应用

| 项目 | 语言 | 星标总数 | 描述 |
| :--- | :--- | ---: | :--- |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 188,080 | 开创性的自主 AI 智能体平台，定义了目标驱动型智能体 AI 的模板，现已成熟为生产级生态系统。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,490 | AI 原生网页爬虫和提取 API，专为向 LLM 管道和智能体供给结构化数据而构建。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,152 | AI 智能体的即插即用持久化记忆基础设施，跨会话提供长期上下文保留，无供应商锁定风险。 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 47,272 | 隐私优先、自托管的知识工作空间，为人机协作笔记和结构化信息管理而设计。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 73,132 | 多市场 LLM 驱动股票分析流水线，结合实时新闻、市场数据和自动化报告——垂直 AI 金融应用的典型代表。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 144,251 | LLM 工作流驱动的自动化高清短视频生成器，输入关键词即可产出——面向大众市场的 AI 内容创作工具，星标超 14.4 万。 |

### 🧠 大语言模型 / 训练

| 项目 | 语言 | 星标总数 | 描述 |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 192 (今日) | 极简 64M 参数 LLM 训练项目，约 2 小时从零复现完整训练流程，作为 LLM 系统设计的学习基准。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,752 | 实战 LLM 推理系统教程，在 Apple Silicon 上运行 vLLM + Qwen，为系统工程师揭开生产推理的神秘面纱。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,170 | 构建可扩展 LLM 应用的模块化 Rust 框架，为 AI 技术栈带来类型安全和内存安全的基 |

础设施。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,416 | Java/JVM 生态的 LLM 应用惯用库，提供跨提供商统一 API、工具调用、MCP 支持及企业框架集成。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 320 | 采用 X-Bit 量化技术的设备端 LLM 推理引擎，面向嵌入式和隐私受限的部署场景。 |

### 🔍 RAG / 知识库

| 项目 | 语言 | 星标总数 | 描述 |
| :--- | :--- | ---: | :--- |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 68,384 | 本地优先的 RAG 聊天机器人平台，支持完整 AI 知识所有权，具备多文档摄取和向量数据库后端支持。 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 59,890 | 极速搜索引擎，新增 AI 驱动的混合（关键词 + 语义）搜索能力，以最小配置开销为应用增添智能。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,681 | 云原生向量数据库，专为大

规模 ANN 搜索构建，在生产级 AI 系统中处理数十亿级向量。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,931 | LLM 文档处理与检索平台，提供 RAG 数据管道的基础层，星标超 5 万。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 149,725 | 将代码库、文档、SQL schema 和 PDF 转换为可查询知识图谱，采用确定性 AST 解析——无需向量库。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,345 | 智能体原生的 RAG 引擎，已演进为通用上下文基础设施，支持大规模复杂文档理解。 |
| [neuml/txtai](https://github.com/neuml/txtai) | Python | 13,611 | 一站式语义搜索和 LLM 编排框架，在单一库中融合嵌入管道、工作流和模型服务。 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | Rust | 11,928 | 面向开发者体验和边缘部署优化的嵌入式多模态检索库，架起向量搜索与本地应用数据之间的桥梁。 |

---

## 3. 趋势信号分析

今日最引人注目的信号是**对智能体部署基础设施的爆发式需求**。ECC 以 30.5 万星标出道，这不仅仅是

一个 star 数字——它反映的是社区已经走过了实验阶段，正迫切需要可靠的方式来在生产环境中运行、监控和优化编码智能体。腾讯的 LoopForge、阿里的 open-code-review 以及 obra 的 superpowers 的同步出现，证实了 2026 年生态系统正在从"如何构建智能体？"转向"如何交付智能体？"的转折点上。

第二个重要趋势是**智能体到应用接口的正式标准化**。AG-UI 协议和 CopilotKit 代表了一个新的抽象层次——将前端不再视为被动展示层，而是作为智能体可以驱动的双向通信通道。

这与 REST API 为 Web 服务带来的标准化类似：智能体需要共享的契约来与 UI 交互，而不必为每个框架编写自定义胶水代码。

在知识层方面，**基于图的检索**（Graphify 14.9 万星标）与传统向量方法并存，标志着超越简单分块-嵌入的 RAG 的成熟。智能体需要结构化、可解释的知识表示来实现可靠的推理——mem0 和 cognee 等记忆平台的持续增长也强化了这一方向。

今日大语言模型训练领域相对沉寂，minimind 的 64M 参数教程项目最为引人注目，表明至少在今天的 trending 周期中，社区的主要关注点仍在应用和部署上，而非模型研究。

现在看到的是社区对 Mem0 和 cognee 等记忆平台持续增长的重视，这进一步强化了结构化、可解释知识表示的重要性。同时注意到今日趋势显示社区重心明显偏向应用和部署层面，模型研究相对放缓。

社区正在经历从基础研究到实际应用的转变，这反映了开发者对快速验证和迭代的迫切需求，而非长期的基础模型开发。
</think>


# AI 开源趋势报告 — 2026-11-18

---

## 1. 今日要点

开源 AI 生态正在经历一场决定性的范式转变：从**构建智能体**转向**部署智能体**。今日热榜中有四个仓库专注于智能体*基础设施*——编排框架、技能注册表和性能调优工具——而非智能体本身。今日最亮眼的出道项目是 **[ECC](https://github.com/affaan-m/ECC)**，一个智能体效能优化系统，在单日就斩获了 30.5 万颗星标，表明社区对生产级智能体可靠性的强烈渴求。阿里开源了一款经过实战检验的 LLM 代码审查工具，腾讯也推出了自托管的编程智能体工作流，满足了企业级对安全、可审计的 AI 开发流水线的需求。AI 办公领域也在升温，Univer 推出了一个 SDK，可将 AI 智能体直接嵌入电子表格和文档工作流中，而 AG-UI 协议则标准化了智能体与前端的交互——这两个互补的赌注押在了 AI 深度集成的方向上。

---

## 2. 各分类 TOP 项目

### 🔧 AI 基础设施

| 项目 | 语言 | 星标（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 187,451 | 本地 LLM 推理运行时，支持数十种开源模型；以亚 100ms 级延迟保持自托管 LLM 部署的事实标准。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,321 | 文本、视觉、音频和多模态推理与训练的标准模型定义框架，涵盖数千个预训练检查点。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 121,349 | 开源 AI 浏览器自动化库，支持智能体大规模导航、提取和交互 Web 界面。 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | 121,100 | 面向编码智能体的本地代理和技能系统，压缩工具输出同时保持保真度以降低 token 消耗。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 202,683 | 统一的网页抓取和数据提取 API，为 550+ 数据提供商的智能体知识获取提供支持。 |
| [alibaba/open-code-review](https://github.com/alibaba/alibaba-open-code-review) | Go | 763（今日） | 阿里的大规模生产级混合代码审查工具，将确定性管道与 LLM 智能体相结合，实现多语言行级漏洞检测。 |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 591（今日） | 自托管的编码智能体编排层（CodeBuddy、Codex、Claude Code），内置人工审批门控，瞄准企业级 CI/CD 集成场景。 |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 1,774（今日） | 可扩展的办公套件 SDK，将 AI 智能体能力嵌入电子表格和文档，面向 AI 原生生产力工具开发者。 |

### 🤖 AI 智能体 / 工作流

| 项目 | 语言 | 星标（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 305,641 (+883) | 智能体效能优化系统，为 Claude Code、Codex、Cursor 等跨平台添加技能、记忆、安全和研究导向的开发原语。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 158,972 | 本地 LLM 的完整 Web UI，支持 Ollama 集成；作为社区首选的 ChatGPT 开源替代方案持续快速增长。 |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,382 | 低代码平台，用于构建 RAG 管道和智能体工作流，提供丰富的模型和工具支持，支持云端、VPC 及自托管部署。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,779 | 前端集成技术栈，将 AI 智能体和生成式 UI 嵌入 React、Angular 和移动应用；AG-UI 协议的创建者。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 1,917（今日） | 智能体技能框架和软件开发方法论，规范化智能体如何跨任务获取和应用能力。 |
| [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | TypeScript | 1,445（今日） | 开放协议，标准化 AI 智能体与前端应用之间的双向通信，消除每个框架的自定义集成开销。 |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 1,005（今日） | Claude Code 的红队技能包，包含 82 个漏洞狩猎技能和 681 个跨 24 个漏洞类别的模式，面向安全驱动的智能体工作流。 |
| [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | Python | 1,072（今日） | Google Research 的多智能体研究论文写作框架，跨自主智能体编排文献综述、撰写和修订流程。 |

### 📦 AI 应用

| 项目 | 语言 | 星标（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 188,080 | 开创性的自主 AI 智能体平台，定义了目标驱动型智能体 AI 的模板，现已成熟为生产级生态系统。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,490 | AI 原生网页爬虫和提取 API，专为向 LLM 管道和智能体供给结构化数据而构建。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,152 | AI 智能体的即插即用持久化记忆基础设施，跨会话提供长期上下文保留，无供应商锁定风险。 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 47,272 | 隐私优先、自托管的知识工作空间，为人机协作笔记和结构化信息管理而设计。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 73,132 | 多市场 LLM 驱动股票分析流水线，结合实时新闻、市场数据和自动化报告——垂直 AI 金融应用的典型代表。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 144,251 | LLM 工作流驱动的自动化高清短视频生成器，输入关键词即可产出——面向大众市场的 AI 内容创作工具，星标超 14.4 万。 |

### 🧠 大语言模型 / 训练

| 项目 | 语言 | 星标（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 192（今日） | 极简 64M 参数 LLM 训练项目，约 2 小时从零复现完整训练流程，作为 LLM 系统设计的学习基准。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,752 | 实战 LLM 推理系统教程，在 Apple Silicon 上运行 vLLM + Qwen，为系统工程师揭开生产推理的神秘面纱。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,170 | 构建可扩展 LLM 应用的模块化 Rust 框架，为 AI 技术栈带来类型安全和内存安全的基础设施。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,416 | Java/JVM 生态的 LLM 应用惯用库，提供跨提供商统一 API、工具调用、MCP 支持及企业框架集成。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 320 | 采用 X-Bit 量化技术的设备端 LLM 推理引擎，面向嵌入式和隐私受限的部署场景。 |

### 🔍 RAG / 知识库

| 项目 | 语言 | 星标（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 68,384 | 本地优先的 RAG 聊天机器人平台，支持完整 AI 知识所有权，具备多文档摄取和向量数据库后端支持。 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 59,890 | 极速搜索引擎，新增 AI 驱动的混合（关键词 + 语义）搜索能力，以最小配置开销为应用增添智能。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,681 | 云原生向量数据库，专为大规模 ANN 搜索构建，在生产级 AI 系统中处理数十亿级向量。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,931 | LLM 文档处理与检索平台，提供 RAG 数据管道的基础层，星标超 5 万。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 149,725 | 将代码库、文档、SQL schema 和 PDF 转换为可查询知识图谱，采用确定性 AST 解析——无需向量库。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,345 | 智能体原生的 RAG 引擎，已演进为通用上下文基础设施，支持大规模复杂文档理解。 |
| [neuml/txtai](https://github.com/neuml/txtai) | Python | 13,611 | 一站式语义搜索和 LLM 编排框架，在单一库中融合嵌入管道、工作流和模型服务。 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | Rust | 11,928 | 面向开发者体验和边缘部署优化的嵌入式多模态检索库，架起向量搜索与本地应用数据之间的桥梁。 |

---

## 3. 趋势信号分析

今日最引人注目的信号是**对智能体部署基础设施的爆发式需求**。ECC 以 30.5 万星标出道，这不仅仅是一个 star 数字——它反映的是社区已经走过了实验阶段，正迫切需要可靠的方式来在生产环境中运行、监控和优化编码智能体。腾讯的 LoopForge、阿里的 open-code-review 以及 obra 的 superpowers 的同步出现，证实了 2026 年生态系统正在从"如何构建智能体？"转向"如何交付智能体？"的关键转折点上。

一个次要但同样重要的趋势是**智能体到应用接口的正式标准化**。AG-UI 协议和 CopilotKit 代表了一个新的抽象层次——将前端不再视为被动展示层，而是作为智能体可以驱动的双向通信通道。这与 REST API 为 Web 服务带来的标准化浪潮如出一辙：智能体需要共享的契约来与 UI 交互，而不必为每个框架编写定制化的胶水代码。

在知识层方面，**基于图的检索**（Graphify 14.9 万星标）与传统向量方法并驾齐驱，标志着超越朴素 chunk-and-embed RAG 的成熟化进程。智能体需要结构化、可解释的知识表示来实现可靠的推理——mem0 和 cognee 等记忆平台的持续增长也强化了这一方向。

大语言模型训练赛道今日相对冷清，minimind 的 64M 参数教程项目是最值得关注的亮点——它表明社区的焦点在至少当前这个 trending 周期内，仍然集中在*应用*和*部署*层面，而非模型研究本身。

---

## 4. 社区热点

- **[ECC](https://github.com/affaan-m/ECC)** — 智能体效能优化浪潮已经到来。如果你在构建编码智能体，在从零开始编写自己的技能/记忆/安全层之前，先把 ECC 作为基础设施评估一下。30.5 万星标的信号表明它有望成为事实标准的智能体底座。
- **[AG-UI Protocol](https://github.com/ag-ui-protocol/ag-ui) / [CopilotKit](https://github.com/CopilotKit/CopilotKit)** — 智能体-前端集成是下一个标准化战场。AG-UI 的早期采用者将定义生态系统最终收敛的接口模式。今天就可以开始原型验证。
- **[Graphify](https://github.com/Graphify-Labs/graphify) / [mem0](https://github.com/mem0ai/mem0)** — RAG 赛道正在分叉为基于图的结构化知识（服务于推理准确性）和持久化智能体记忆（服务于上下文连续性）两条路线。两者都是生产级系统的关键需求；关注 Graphify 的确定性 AST 方案，它有望成为向量库的替代选择。
- **[ollama/ollama](https://github.com/ollama/ollama)** — 本地 LLM 推理仍然是开源 AI 技术栈的基石。187k 星标的体量和持续扩展的模型支持，使它成为 2026 年构建自托管 AI 基础设施最稳妥的选择。
- **[dream-num/univer](https://github.com/dream-num/univer)** — AI 办公自动化是一个尚未被充分挖掘的垂直领域，企业需求巨大。Univer 的 SDK 路径（将 AI 嵌入电子表格和文档）有可能成为 AI 原生生产力工具的"WordPress 时刻"。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*