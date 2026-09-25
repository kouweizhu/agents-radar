# AI 开源趋势日报 2026-09-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-25 00:44 UTC

---

<think>The user wants me to translate this AI Open Source Trends Report from English to Chinese (Simplified Chinese based on the context). I need to:

1. Translate all the text content
2. Keep the Markdown structure exactly as-is
3. Keep all technical identifiers, URLs, code, numbers, project names, etc. in their original form
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate while preserving the structure:

The document has:
- A title
- 4 sections with numbered headings
- Tables
- Lists (bulleted)
- Bold text
- URLs
- Code spans
- Emoji

I need to translate everything but keep the structure and technical terms intact.</think>

# AI 开源热点趋势报告 — 2025年9月25日

## 1. 今日焦点

今天的 AI 开源生态正在经历一个显著的转变，热点从单纯的模型改进转向 **agent 记忆与编排框架**。最引人注目的是 **vectorize-io/hindsight**（可学习的 Agent 记忆系统），单日增长 1,668 星——这是今日 trending 榜单上最高的单日增长。Google 推出的 [google/ax](https://github.com/google/ax)（1,373 星）标志着主流厂商开始进入 agent 编排领域，这是一个重要的基础设施层面的竞争信号。与此同时，"AI 办公"范式正在浮现——通过 [dream-num/univer](https://github.com/dream-num/univer)（1,082 星），让 AI agent 能够原生操作电子表格、文档和幻灯片。这些进展表明，开源生态正在从孤立的 agent 工具向集成化运行时环境演进，agent 可以在其中自主操作办公软件。

---

## 2. 分类热门项目

### 🔧 AI 基础设施

| 项目 | 语言 | 星标（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [google/ax](https://github.com/google/ax) | Go | 0 (+1,373) | Google 开源的 agent 编排运行时 —— 用于构建、部署和管理大规模自主 agent 工作流的基础层。 |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | Python | 0 (+44) | SOTA 模型优化统一库（量化、蒸馏、剪枝、NAS、投机解码），支持部署到 TensorRT-LLM、TensorRT 和 vLLM。 |
| [strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk) | Python | 0 (+455) | 开源 SDK，用于使用 Python 和 TypeScript 构建生产级 AI agent —— 支持任意模型、任意云端，提供端到端控制能力。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,472 | LLM 评估平台，支持知识、推理、编程、科学、语言、长上下文和安全等 100+ 基准数据集。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 181,642 | 本地 LLM 运行时 —— 轻松运行 Kimi、GLM、MiniMax、DeepSeek、Qwen、Gemma 等模型。 |

### 🤖 AI Agent / 工作流

| 项目 | 语言 | 星标（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+611) | Agent 技能框架与软件开发方法论 —— 使 agent 能够在不同任务中积累和复用能力。 |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | Python | 0 (+468) | OpenRouter 的 Agent 工具替代方案 —— 为 AI agent 提供统一的工具访问能力，带有社区驱动的工具市场。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0 (+413) | "让所有软件原生支持 Agent" —— 将 CLI 工具桥接到 agent 框架，使 agent 能够与任意命令行软件交互。 |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | Python | 0 (+509) | Anthropic 金融服务 AI agent 参考实现 —— 展示受监管领域的 agent 工作流。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 157,124 | 构建 agent 工作流和 RAG 流程，支持丰富的 AI 模型和工具 —— 支持云端、VPC 或私有化部署。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 147,016 | Agent 工程平台 —— 构建 LLM 驱动的应用的全栈框架，支持工具调用和 agent。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 37,540 | Agent 和生成式 UI 的前端技术栈 —— AG-UI 协议的创建者，支持 React、Angular、Mobile、Slack。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 48,553 | 超轻量级、自托管的个人 AI agent 框架，带有 WebUI、工具、记忆、MCP 和多 agent 工作流。 |

### 📦 AI 应用

| 项目 | 语言 | 星标（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+1,082) | "AI Agent 的办公套件" —— 电子表格、文档、幻灯片、画布、关系型表格和 PDF 集于一身。 |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Python | 0 (+1,668) | 可学习的 Agent 记忆系统 —— 为 AI agent 提供跨会话持久化、自适应积累知识的能力。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 184,319 | 规模化网页数据 API，支持搜索、抓取和交互 —— AI agent 必备的数据获取层。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 125,536 | 根据主题/关键词自动生成 HD 短视频的 AI 工作流 —— 垂直 AI 内容自动化应用。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 108,478 | 多 agent LLM 金融交易框架 —— 展示量化金融领域的复杂 agent 协作。 |

### 🧠 LLM / 训练

| 项目 | 语言 | 星标（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 166,616 | SOTA ML 模型的定义框架，覆盖文本、视觉、音频和多模态 —— 开源 AI 的基石。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 200,293 | 开源 ML 框架，为所有人服务 —— 在模型训练和部署领域仍是主导力量。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 103,263 | 带有强大 GPU 加速的张量和动态神经网络库 —— 研究社区的主要框架。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 61,989 | YOLO27、YOLO26、YOLO11、YOLOv8 —— SOTA 目标检测、分割和跟踪。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 105,514 | 从零实现 PyTorch 版类 ChatGPT LLM —— LLM 内部机制的权威学习资源。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 62,484 | 仅用 2 小时从零训练 64M 参数 LLM —— 展示核心 LLM 机制的精简训练流程。 |

### 🔍 RAG / 知识

| 项目 | 语言 | 星标（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,309 | AI 文档处理平台 —— 构建 RAG 流程的标准框架。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,248 | 高性能、云原生的向量数据库，支持大规模向量 ANN 检索 —— 生产级检索基础设施。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 34,800 | 高性能、超大规模向量数据库和搜索引擎，为下一代 AI 设计 —— 以速度和可靠性著称。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 65,953 | AI agent 的记忆层 —— 即插即用的记忆基础设施，支持跨会话持久化上下文。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 91,277 | 领先的开源 RAG 引擎，融合 RAG 与 Agent 能力，提供更优的上下文层。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 30,969 | 开源 AI 记忆平台 —— 通过自托管知识图谱引擎为 agent 提供持久化的长期记忆。 |

---

## 3. 趋势信号分析

今日的 trending 数据揭示了一个清晰的转向：**以 agent 为中心的基础设施**而非单纯的模型改进。最突出的信号是 **agent 记忆系统**——[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)（1,668 星）和 [topoteretes/cognee](https://github.com/topoteretes/cognee) 等项目正在解决自主 agent 持久化记忆的关键缺口。这标志着 agent 范式从无状态的聊天进化为有状态的、能够积累知识的助手。

**编排运行时**也正在成为战场。Google 通过 [google/ax](https://github.com/google/ax) 入局，标志着主流厂商将 agent 编排视为战略性基础设施。结合现有的 LangChain 和 Dify 等玩家，生态正在分裂为相互竞争的框架。

[dream-num/univer](https://github.com/dream-num/univer) 提出的 **"AI 原生办公"** 概念预示着一个新的应用层——agent 可以端到端地操作生产力软件——这是一个显著区别于人类在环范式的转变。

**工具无关框架** 正在获得关注：[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) 和 [superdesigndev/treg](https://github.com/superdesigndev/treg) 都旨在抽象工具访问，表明生态已经认识到互操作性是一个瓶颈。

这些信号共同指向：2026-2027 年将是 **agent 运行时和记忆基础设施** 的时代，而非模型架构突破的时代。

---

## 4. 社区热点

- **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** — 今日 momentum 最高；agent 记忆是生产级 agent 的缺失环节。开发者应评估其记忆架构，用于长时间运行的 agent 部署。

- **[google/ax](https://github.com/google/ax)** — Google 的 agent 编排运行时标志着企业级对 agent 框架的验证。关注 TensorFlow 生态集成和企业采纳模式。

- **[dream-num/univer](https://github.com/dream-num/univer)** — "AI 办公" 范式虽处于早期但引人注目。这可能成为需要自主操作电子表格、文档和演示文稿的 agent 的标准运行时。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — 生产就绪的记忆层，星标 65,953。对于构建持久化 agent 的开发者来说，这是目前最成熟的即插即用记忆解决方案。

- **[qdrant/qdrant](https://github.com/qdrant/qdrant) / [milvus-io/milvus](https://github.com/milvus-io/milvus)** — 向量数据库仍是关键的 RAG 基础设施。两者都经过大规模生产验证；选择取决于性能与功能的权衡（基于 Rust 的 Qdrant 追求速度，基于 Go 的 Milvus 更适合云原生可扩展性）。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*