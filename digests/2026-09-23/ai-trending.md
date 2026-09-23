# AI 开源趋势日报 2026-09-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-23 00:53 UTC

---

<think>The user wants me to translate this AI Open Source Trends Report from English to Chinese. I need to:

1. Translate all the headings, descriptions, and text
2. Keep the Markdown structure (tables, lists, code blocks, links, etc.) exactly as-is
3. Keep technical terms, project names, URLs, and identifiers in their original form
4. Use natural technical Chinese register

Let me go through and translate while preserving the structure:

- Headings need translation
- Table headers need translation (but keep the format)
- Project descriptions need translation
- The trend analysis section needs translation
- The community hotspots section needs translation

I need to be careful to:
- Not translate project names, slugs, URLs
- Not translate technical terms like "RAG", "LLM", "agentic" unless there's an established Chinese term
- Keep the table structure exactly the same
- Use natural Chinese technical writing style

Let me start translating:</think>

# AI 开源热点周报 — 2026年9月23日

## 1. 今日焦点

今日 GitHub 趋势榜显示，**智能体基础设施**和**智能体工具**领域迎来爆发。Google 发布的 **AX**（智能体编排运行时）以 +2,305 stars 的单日增长强势登顶，成为今日热度最高的项目。"面向 AI 智能体的办公套件"赛道持续升温，**Univer**（+255 stars）定位为统一运行Spreadsheets、Docs、Slides、Canvas、关系型表格和 PDF 的平台，为 AI 智能体赋能办公场景。与此同时，**browser-use** 生态正在从网页自动化扩展到视频编辑领域（**video-use**，+191 stars），释放出智能体进军多媒体工作流的信号。RAG 与记忆层项目保持稳健增长，**mem0**（智能体记忆基础设施）和 **headroom**（智能体 Token 压缩工具）表现亮眼。

---

## 2. 分类热门项目

### 🔧 AI 基础设施

| 项目 | 语言 | Stars（总计/今日）| 简介 |
| :--- | :--- | ---: | :--- |
| [google/ax](https://github.com/google/ax) | Go | ⭐0 (+2,305) | Google 开源的智能体编排运行时 —— 用于构建、编排和扩展自主智能体的基础层。今日最大黑马，释放出 Google 进军智能体基础设施的信号。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | ⭐181,493 | 快速部署运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型。本地 LLM 推理运行时领军者。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | ⭐166,539 | 🤗 Transformers：用于文本、视觉、音频和多模态模型的前沿机器学习模型定义框架。模型加载与推理的基础库。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | ⭐200,260 | 为所有人打造的开源机器学习框架。总体 Stars 最多的 ML 框架。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | ⭐103,182 | Python 中的张量与动态神经网络，GPU 加速表现出色。深度学习事实标准。 |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | Python | ⭐0 (+64) | Claude Code 配置与监控 CLI 工具 —— 为基于 Anthropic 智能体开发的工程师提供必备工具链。 |
| [agent-substrate/substrate](https://github.com/agent-substrate/substrate) | Go | ⭐0 (+245) | Agent Substrate：核心系统 —— 为智能体部署与生命周期管理提供底层基座。 |

### 🤖 AI 智能体 / 工作流

| 项目 | 语言 | Stars（总计/今日）| 简介 |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | ⭐42,152 | 构建弹性智能体。LangChain 的工作流编排框架，用于多步骤智能体应用开发。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | ⭐187,503 | AutoGPT 致力于让 AI 为所有人可及可用。开创性的自主智能体项目。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | ⭐115,949 | 使用浏览器的智能体。LLM 智能体网页自动化领域的主导框架。 |
| [browser-use/video-use](https://github.com/browser-use/video-use) | Python | ⭐0 (+191) | 用编程智能体编辑视频 —— 将 browser-use 范式扩展到视频编辑领域，标志着智能体进入多媒体创作。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | ⭐156,888 | 构建智能体工作流与 RAG 流程，在协作工作空间中支持丰富的 AI 模型与工具。低代码/无代码智能体平台领导者。 |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | ⭐0 (+255) | 面向 AI 智能体的办公套件 —— 在统一运行时中集成 Spreadsheets、Docs、Slides、Canvas、关系型表格与 PDF。为智能体化工作流统一生产力软件。 |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | Python | ⭐0 (+230) | 面向智能体工具的 OpenRouter —— 智能体可执行工具的市场与注册中心，类比 LLM 领域的 OpenRouter。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | ⭐37,479 | 智能体与生成式 UI 的前端技术栈。AG-UI 协议缔造者 —— 将智能体嵌入应用程序。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | ⭐48,491 | 超轻量级开源自托管个人 AI 智能体框架，Python 编写，支持 WebUI、工具调用、记忆系统、MCP 与多智能体工作流。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | ⭐35,679 | 终端 DeepSeek 原生 AI 编程智能体。基于前缀缓存稳定性设计 —— 可持续运行。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总计/今日）| 简介 |
| :--- | :--- | ---: | :--- |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | Python | ⭐0 (+438) | Anthropic 金融服务参考实现 —— 展示 AI 在受监管行业的安全部署。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | ⭐108,143 | TradingAgents：多智能体 LLM 金融交易框架 —— 用于量化交易的多智能体系统。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | ⭐125,168 | 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。AI 驱动的视频主题生成。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | ⭐65,505 | LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送。多市场 AI 股票分析。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | ⭐55,981 | AI 将文档或主题转化为原生 PowerPoint 幻灯片。智能体驱动的演示文稿生成。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | ⭐72,446 | 开源 AI 求职工具：扫描招聘平台、评估职位、定制简历、追踪申请。垂直领域智能体赋能招聘。 |

### 🧠 大模型 / 训练

| 项目 | 语言 | Stars（总计/今日）| 简介 |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | ⭐62,192 | 🧠 仅用 2 小时从零训练 64M 参数 LLM！—— 展示低门槛 LLM 训练的教育项目。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | ⭐105,402 | 用 PyTorch 从零实现类 ChatGPT LLM，循序渐进。权威学习资源。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | ⭐7,468 | OpenCompass：大模型评估平台，支持 100+ 数据集，覆盖知识、推理、编程、科学、语言、长上下文与安全等维度。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | ⭐8,700 | ⚙️🦀 用 Rust 构建模块化可扩展 LLM 应用。内存安全的 LLM 应用框架。 |

### 🔍 RAG / 知识库

| 项目 | 语言 | Stars（总计/今日）| 简介 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | ⭐152,847 | 用户友好的 AI 界面（支持 Ollama、OpenAI API 等）。本地 LLM+RAG 部署的领军 WebUI。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | ⭐146,896 | 智能体工程平台。Stars 最多的大模型应用开发框架。 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | ⭐139,456 | 100+ AI 智能体、智能体技能与 RAG 应用 —— 免费开源。推动采用的开源精选集。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | ⭐120,572 | 将代码库、文档、SQL Schema、配置文件和 PDF 转化为可查询知识图谱。基于图结构的代码库 RAG。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | ⭐94,486 | 跨会话持久化上下文，为每个智能体保留记忆 —— 捕获智能体会话，用 AI 压缩后注入未来会话上下文。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | ⭐91,174 | RAGFlow：领先的开源检索增强生成引擎，深度融合前沿 RAG 与智能体能力。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | ⭐65,844 | AI 智能体的记忆层 —— 即插即用的智能体与应用记忆基础设施。持久化上下文。为生产环境构建。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | ⭐73,532 | 在工具输出、日志、文件和 RAG 块到达 LLM 前进行压缩。编程智能体减少 20% Token，JSON 场景减少 60-95%。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | ⭐52,285 | LlamaIndex：AI 文档处理平台。核心 RAG 数据索引框架。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | ⭐46,220 | Milvus：为大规模向量近似最近邻搜索打造的高性能云原生向量数据库。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | ⭐34,758 | Qdrant —— 面向下一代 AI 的高性能大规模向量数据库与向量搜索引擎。 |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | Go | ⭐16,839 | Weaviate：开源向量数据库，同时存储对象与向量，支持向量搜索与结构化过滤的组合查询。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | ⭐30,921 | Cognee：面向智能体的开源 AI 记忆平台。赋予 AI 智能体持久长期记忆，基于自托管知识图谱引擎。 |

---

## 3. 趋势信号分析

今日的主导信号是**智能体基础设施走向生产成熟度**。Google 的 **AX**（+2,305 stars）标志着一个分水岭 —— 头部科技公司以开源方式发布生产级智能体编排运行时。这标志着从实验性智能体演示向可部署智能体系统的范式转移。

两个新兴方向值得重点关注：

1. **办公套件即智能体运行时**：**Univer**（+255 stars）代表了一个新品类 —— 将智能体直接嵌入办公软件（表格、文档、幻灯片）。这与微软 Copilot 策略不谋而合，但以开源形式实现，预示着智能体将深度融入日常知识工作。

2. **智能体工具市场**：**Treg**（+230 stars）定位为"面向智能体工具的 OpenRouter"，表明智能体插件/工具生态系统正在兴起，类比当年 LLM API 市场的爆发。

RAG 领域持续整合 —— 该类别保持 10+ 个项目各有 30K+ Stars，显示开发者持续投入。智能体记忆层（**mem0**、**cognee**、**claude-mem**）热度上升，呼应智能体向有状态、长周期运行演进的趋势。

---

## 4. 社区热点聚焦

- **[google/ax](https://github.com/google/ax)** — Google 的智能体编排运行时是本周最值得关注的项目。有望成为 AI 智能体领域的"Kubernetes"。早期增长势头强劲，社区兴趣浓厚。

- **[dream-num/univer](https://github.com/dream-num/univer)** — "面向 AI 智能体的办公套件"概念颇具新意；若智能体能可靠地与表格、文档、PDF 交互，将释放巨大的工作流自动化潜力。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — 记忆基础设施是生产级智能体的关键。65K Stars 里程碑与"为生产环境构建"的定位，使其成为现实世界智能体部署的重要使能者。

- **[browser-use/video-use](https://github.com/browser-use/video-use)** — 将浏览器自动化扩展到视频编辑，标志着智能体进入创意工作流。多媒体智能体赛道值得持续关注。

- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** / **[milvus-io/milvus](https://github.com/milvus-io/milvus)** — 向量数据库仍是基础设施层关键组件。Qdrant 的 Rust 高性能引擎与 Milvus 的云原生水平扩展能力，都是大规模 RAG 的可靠选择。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*