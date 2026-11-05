# AI 开源趋势日报 2026-11-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-05 02:43 UTC

---

<think>The user wants me to translate the AI Open Source Trends Report from English to Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, project names, slugs, numbers, etc. verbatim
4. Use natural technical Chinese register

Let me translate section by section carefully.

**Title:**
# AI 开源趋势报告 — 2026-11-05

**Step 1 — Filtering:**
从今日热榜的 16 个仓库中，筛选出 **10** 个与 AI 相关的项目；**6** 个排除（Git worktree CLI、AWS 本地模拟器、SDD 工具集、磁盘镜像工具、DevOps 课程、网页爬虫）。从 80 个话题搜索结果中，所有 **80** 个均带有 AI/ML 话题标签，全部纳入。

**Step 2 — Categorization & Tables:**

**Section 1: Today's Highlights:**
今天最引人注目的信号是 **Agent 记忆与上下文管理** 作为核心需求的崛起：两个独立项目（NVIDIA/auto-ontology 和 thedotmack/claude-mem）均面向 LLM/Agent 工作流中确定性的、跨会话的上下文注入，在 **单日内** 就获得了超过 **3,200 个新 star**。与此同时，**Vercel 的 agent-desktop**（今日 2,470 ★）标志着 AI Agent 正从 CLI 工具向具备原生计算机操作能力的持久化桌面体验演进。

在模型层面，**Kimi K3 仅凭单 CPU 和 8.24 GB 内存运行 C 语言推理**，充分说明前沿级模型正快速走向本地化部署——这预示着开源生态中推理效率的浪潮正在加速。而 **技能共享基础设施** 的兴起（mattpocock/skills 达 1,379 ★、scenario-labs/skills）则反映了社区正从单体框架转向可组合、可复用的 Agent 基础模块构建。

现在看各个类别的顶尖项目。AI 基础设施层面，Ollama 和 Hugging Face Transformers 分别以 Go 和 Python 实现，在开源社区中获得了极高的认可度，分别拥有超过 185k 和 168k 的星标数。

Dify 和 LangChain 作为 Python 工具，分别达到了 160k 和 149k 的星标数，它们分别专注于 AI 工作流编排和 Agent 构建。Firecrawl 和 Rig 则分别用 TypeScript 和 Rust 来增强 web 数据提取和 LLM 应用构建的能力。

现在我看到了更多的开源项目——OpenCompass 提供 LLM 评估支持，LangChain4j 用 Java/JVM 实现了类似的链式调用功能。接下来是 AI Agents 和工作流部分，包括 Vercel Labs 的 agent-desktop、RIDA 的 auto-ontology 等几个新兴项目。

继续看到更多有趣的项目——claude-mem 提供持久化上下文管理，NousResearch 的 hermes-agent 有超过 260k 的星标数，还有 skills、pr-agent、CopilotKit、browser-use 和 CowAgent 这些工具，覆盖了从技能管理到网页浏览再到个人助手的各个应用场景。

现在看应用层的项目，MoneyPrinterTurbo 能自动化视频生成，ppt-master 专门做 PPT 创建，daily_stock_analysis 用于股票分析，career-ops 处理求职自动化，还有 ECC 和 Vibe-Trading 这些更具体的应用工具。LLM 和训练部分包括 FareedKhan-dev 的 kimi-k3-in-c 项目用纯 C 实现了高性能推理，tensorflow 和 pytorch 作为深度学习框架各有特色。

继续看 RAG 和知识库相关的项目，open-webui 是最流行的开源 AI 界面，ragflow 提供检索增强生成能力，crawl4ai 是网页爬取工具，mem0 和 headroom 分别处理记忆管理和 token 压缩，还有 milvus 和 meilisearch 这两个向量和全文搜索数据库，以及 cognee 和 RAG_Techniques 这样的知识库构建工具。

现在进入趋势信号分析部分，今天的热榜揭示了三个相互交织的浪潮。第一个是 Agent 记忆和上下文层，这个领域两年前几乎不存在，但现在已经有多个高增长项目了。

NVIDIA 的 auto-ontology 和 thedotmack 的 claude-mem 都在单日内获得了数千个星标，说明社区已经认识到上下文质量是 Agent 可靠性的主要瓶颈，这正好呼应了最近行业对"Agentic RAG"和长上下文窗口方案的关注。

第二个浪潮是边缘推理的无障碍化，FareedKhan-dev 的 kimi-k3-in-c 展示了 2.78T 参数模型可以在消费级 CPU 上用 8GB 内存运行，这延续了 llama.cpp 和 vLLM 所开创的效率优化路线。

但它把边界推得更远了：如果单文件 C 实现就能本地部署接近前沿水平的模型，那么对于个人和小型团队来说，自托管 AI 的经济学就完全不同了。

第三个信号是 AI Agent 的桌面化趋势，Vercel 的 agent-desktop 项目单日获得 2,470 颗星，加上技能复用基础设施的普及，说明生态系统正在从"终端里的聊天机器人"转向持久化的多会话 Agent 环境。

现在看到社区热点，包括 NVIDIA 的 auto-ontology、kimi-k3-in-c、headroom 和 mattpocock 的 skills 等项目，这些都反映了 Agent 记忆层作为优先需求、多会话能力作为关键特性，以及开源社区对这两个方向的强烈认可。

继续看更多社区关注的热点项目，比如 ecc 这个 Agent 框架在生态系统中最受欢迎，它展示的技能、本能、记忆和安全原语已经成为编码 Agent 的最佳实践。总体来看，Agent 记忆和上下文层确实是当下的核心需求，其次是多会话 Agent 的发展，这表明开源社区对这两个方向都有很强的认可。

现在我需要确保表格格式完全一致，保持原文的列对齐方式和所有符号，然后开始用中文输出。
</think>


# AI 开源趋势报告 — 2026-11-05

## 步骤一 — 筛选

从今日热榜的 16 个仓库中，**10** 个与 AI 相关的项目被保留；**6** 个被排除（Git worktree CLI、AWS 本地模拟器、SDD 工具包、磁盘镜像工具、DevOps 学习课程、网页爬虫）。在 80 个话题搜索结果中，**全部 80** 个均带有 AI/ML 话题标签，全部纳入。

---

## 步骤二 — 分类与数据表

### 一、今日亮点

今天最引人注目的信号是 **Agent 记忆与上下文管理** 作为核心需求的崛起：两个独立项目（NVIDIA/auto-ontology 和 thedotmack/claude-mem）均面向 LLM/Agent 工作流中确定性的、跨会话上下文注入，在 **单日内** 就获得了超过 **3,200 个新 star**。与此同时，**Vercel 的 agent-desktop**（今日 2,470 ★）标志着 AI Agent 正从 CLI 工具向具备原生计算机操作能力的持久化桌面体验演进。在模型侧，**Kimi K3 仅凭单 CPU 和 8.24 GB 内存运行 C 语言推理**这一事实表明，前沿级模型正在快速走向本地化——这是开源生态中推理效率浪潮加速的强烈信号。最后，**技能共享基础设施**（mattpocock/skills 今日 1,379 ★、scenario-labs/skills）反映了社区正从单体框架转向可组合、可复用的 Agent 原子化能力这一趋势。

---

### 二、各类别代表性项目

#### 🔧 AI 基础设施

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 185,942 | 本地 LLM 推理引擎，原生支持 DeepSeek、Qwen、Kimi 等数十个开源模型；自托管模型服务的行业标配。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 168,553 | 文本、视觉、音频和多模态模型的定义库，兼顾推理与训练；开源 ML 生态的基石。 |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 160,423 | 协作式 Agent 工作流与 RAG 流水线构建平台，支持云端、VPC 或私有化部署；打通 AI 原型到生产的全链路。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,039 | Agent 工程化平台，提供 LLM 编排、工具调用和记忆管理的可组合原语，集成 50+ 供应商。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 198,683 (+247) | 专为 AI Agent 打造的网页数据抓取基础设施，支持大规模实时内容采集，可私有部署或使用云服务。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,065 | 用 Rust 构建模块化、可扩展的 LLM 应用——系统级语言路线带来内存安全和面向生产的高吞吐。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,564 | LLM 评测平台，覆盖 OpenAI、Anthropic、Gemini、Qwen、DeepSeek 等 100+ 数据集和模型；后 GPT-4 时代的基准测试必备工具。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,356 | Java/JVM 生态的 LLM 应用库，提供跨供应商和向量存储的统一 API，支持 MCP 工具调用及 Spring Boot / Quarkus 原生集成。 |

#### 🤖 AI Agent / 工作流

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Rust | — (+2,470) | AI Agent 的计算机操作 CLI——Vercel Labs 推出的首个桌面级持久化 Agent 环境，支持 Agent 在完整 GUI 会话中跨轮次操作，而非单轮 Prompt 响应。 |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | Python | — (+2,050) | 基于语义图谱的推理层，对原始数据进行结构化建模，生成确定性查询并实现可解释 AI——NVIDIA 在向量检索之外押注结构化知识图谱作为 Agent RAG 的新架构。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 112,934 (+1,172) | 持久化上下文基础设施，捕获每个 Agent 操作并压缩后重注入相关上下文到后续会话——支持 Claude Code、Codex、Gemini CLI 等 8+ Agent 运行时。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 260,585 | 自适应用户工作流的 Agent 框架；26 万+ star 是本数据集中纯 Agent 框架的最高纪录。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | — (+1,379) | 从资深工程师 `.agents` 目录中提炼的生产级技能定义集；代表了一种新兴模式——将技能以代码形式跨 Agent 运行时复用。 |
| [The-PR-Agent/pr-agent](https://github.com/The-PR-Agent/pr-agent) | Python | — (+280) | 开源自动化 PR 评审工具，支持多模型、内联代码建议和 CI/CD 集成；开源领域最早且经过最多实战检验的 PR Agent。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,521 | Agent 与生成式 UI 的前端技术栈，提供 React/Angular/Mobile 组件及 AG-UI 协议，可将 Agent 能力嵌入现有应用。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 120,052 | 让 AI Agent 能够自主导航和操作浏览器的开源库，另提供生产级隐身浏览器 API 服务。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | Python | 47,790 | 轻量级多 Agent、多模型、多渠道个人 AI 助手，具备记忆、工具执行和自我演进能力；以其一行命令安装理念著称。 |

#### 📦 AI 应用

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 139,087 (+617) | 端到端自动化视频流水线：输入主题或关键词，即可生成带 AI 解说、画面和剪辑的高清短视频——139k star 表明创作者经济需求旺盛。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 73,551 | AI 驱动的 PowerPoint 生成器，从文档或主题生成含图形、动画、数据图表和 AI 配音演讲稿的原生 `.pptx` 文件；打通了 AI 内容生成与企业办公工具。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 67,570 | 多市场 AI 股票分析系统，整合实时行情、新闻摄入和 LLM 决策看板，支持自动化推送通知；零成本定时运行。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 80,226 | AI 求职 Agent，扫描招聘平台、按简历评分匹配岗位、生成 ATS 友好的定制简历和求职信，并提供面试准备——多 Agent 编排在垂直场景落地的典型案例。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 297,292 | Agent 能力优化系统，为 Claude Code、Codex、Opencode 和 Cursor 提供技能、本能、记忆和安全原语——本数据集中 star 最高的 AI 应用项目（29.7 万）。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 37,663 | 个人 AI 交易 Agent，将市场数据、情绪分析和自动化下单整合为单一 Agent 工作流，面向散户交易者。 |

#### 🧠 LLM / 训练

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | — (+351) | 2.78 万亿参数 Kimi K3 模型，在单 CPU 上以 8.24 GB 内存运行推理，无 BLAS、无框架、无 GPU——纯 C99 单文件实现，重新定义了本地推理的能力边界。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 201,315 | 成熟的开源 ML 框架，覆盖训练、服务和推理，跨 CPU/GPU/TPU 部署；大规模模型训练和生产部署的主流选择。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 105,148 | 动态图神经网络框架，具备 GPU 加速；学术界和工业界研究与训练的首选框架。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 107,828 | 从零开始一步步用 PyTorch 实现类 ChatGPT LLM；理解 Transformer 架构内部原理最受认可的公开学习资源。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 318 | 面向边缘设备的 LLM 推理方案，使用 X-bit 量化在资源受限硬件上实现本地化部署；满足隐私保护和离线 AI 的需求。 |
| [datamllab/OpenEBFM](https://github.com/datamllab/OpenEBFM) | Python | 261 | 基于能量的基础模型训练与扩展框架——基础模型研究领域的一个小众但新兴的方向。 |

#### 🔍 RAG / 知识管理

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 157,805 | 面向 Ollama 和 OpenAI API 的用户友好型 AI 界面；本地 LLM 部署领域 star 最高的开源 Web UI，也是本数据集中 RAG 标签项目 star 最高者。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 93,515 | Agent 原生的 RAG 引擎，已演进为上下文基础设施；融合深度文档理解与结构化检索，服务企业知识管理场景。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 86,914 | 专为 AI Agent 打造的开源网页爬虫，支持结构化抽取，提供免费托管 API 层；使 RAG 流水线能够大规模接入实时网页内容。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,421 | 即插即用的 AI Agent 记忆基础设施，跨会话提供持久化、生产级的上下文能力；定位为 Agentic Web 的"记忆层"。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 78,872 | Token 压缩库，编码 Agent 输入体积减少 20%，JSON 密集任务减少 60–95%，且不损失精度；同时解决成本和上下文窗口限制。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,597 | 云原生向量数据库，专为生产级大规模 ANN 检索设计；RAG 系统存储层的行业标配。 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 59,786 | 极速搜索引擎，具备 AI 驱动的混合搜索能力；正逐渐成为中小规模 RAG 部署中轻量级向量数据库的替代选择。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,077 | 开源 AI 记忆平台，使用小模型实现 Agent 持久化长期记忆；与 mem0 在 Agent 记忆赛道直接竞争。 |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | Jupyter Notebook | 30,230 | 精选高级 RAG 技术合集，提供可运行的 Notebook 教程；RAG 从业者最全面的开源学习资源。 |

---

### 三、趋势信号解读

今日热榜揭示了三条相互交织的浪潮。**第一条，也是最显著的，是 Agent 记忆与上下文层**——这一类别两年前几乎不存在，但如今已拥有多个高速增长的项目。NVIDIA/auto-ontology（图谱语义推理）和 thedotmack/claude-mem（会话跨上下文压缩）均在单日内斩获数千 star，昭示社区已认识到上下文质量是 Agent 可靠性的首要瓶颈。这与近期行业聚焦"Agentic RAG"和长上下文窗口替代方案的动向高度一致。

**第二条是边缘推理的普惠化**。FareedKhan-dev/kimi-k3-in-c 展示了一款 2.78T 参数模型在消费级 CPU 上以 8 GB 内存运行，纯 C99 实现、零外部依赖。这是 llama.cpp 和 vLLM 开创的效率优先路线的延续，但将边界推得更远：若单文件 C 实现即可本地运行近前沿级模型，对个人和小型团队而言，自托管 AI 的经济学将被彻底改写。

**第三条信号是 AI Agent 的桌面化**。Vercel 的 agent-desktop 项目（单日 2,470 ★）和技能复用基础设施的激增（mattpocock/skills、scenario-labs/skills）表明，生态正在从"终端里的聊天机器人"范式向具备可组合技能图的持久化多会话 Agent 环境演进。这与 Anthropic 的 Computer Use API 及 OpenAI 近几周发布的 Agent 模式方向一致。

---

### 四、社区热点追踪

- **[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)** — 来自 AI 头部实验室的图谱推理方案，预示着从嵌入向量相似度检索向结构化知识图谱作为 Agentic RAG 基座的范式转移；生产级 Agent 流水线值得集成以获取可解释性。
- **[FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c)** — 纯 C、零依赖在笔记本上运行 2.78T 模型，是一个概念验证：前沿模型可被完全商品化；后续的衍生实现与性能优化值得重点关注。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — Token 压缩在结构化数据上实现 60–95% 缩减，对任何受困于上下文窗口限制或 API 成本压力的团队都是高杠杆工具；可作为库、代理或 MCP 服务器部署。
- **[mattpocock/skills](https://github.com/mattpocock/skills)** — 技能即代码的模式（将可复用的 `.agents` 目录发布为开源包）尚处于早期但影响力极高；预计将成长为 Agent 能力分发的标准机制，类似于 JavaScript 生态中的 npm。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — 29.7 万 star，是本生态系统中采纳度最高的 AI 应用；其架构模式（技能、本能、记忆、安全原语）代表了编码 Agent 的新兴最佳实践。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*