# AI 开源趋势日报 2026-11-03

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-03 03:40 UTC

---

<think>The user wants me to translate this entire report from English to Chinese. I need to:

1. Keep all the Markdown structure exactly as-is
2. Keep all project names, URLs, usernames, etc. in their original form
3. Translate the narrative parts into natural technical Chinese
4. Preserve all formatting including tables, headings, lists, etc.

Let me go through and translate:

- Title: "AI Open Source Trends Report — 2026-11-03" → "AI 开源趋势报告 — 2026-11-03"

- Section 1: Today's Highlights
- Section 2: Top Projects by Category
- Section 3: Trend Signal Analysis
- Section 4: Community Hot Spots

I need to translate the explanatory text while keeping all the technical terms, project names, URLs, and data intact.</think>

# AI 开源趋势报告 — 2026-11-03

## 1. 今日要点

今日Trending的AI仓库揭示了两大主题：**AI Agent基础设施**和**本地化/轻量级AI部署**。其中最亮眼的是Vercel的`agent-desktop`（基于Rust的computer use CLI），单日收获2,275颗星，显示出开发者对生产级Agent工具的强烈需求。同时，记忆/持久化解决方案如`claude-mem`（1,803颗星）和`colibri`（675颗星，纯C MoE引擎）印证了行业从无状态Agent向有状态Agent架构的推进。金融领域LLM（`Kronos`）和游戏工作室自动化框架（`Claude-Code-Game-Studios`）的出现则凸显了垂直领域专业化的加速。

---

## 2. 各分类重点项目

### 🔧 AI 基础设施

| 项目 | 语言 | Stars（总计/今日）| 简介 |
| :--- | :--- | ---: | :--- |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Rust | 0 (+2,275) | Vercel的computer use CLI，用于AI Agent —首个生产级agent桌面交互框架，Rust性能 + Vercel生态加持 |
| [FlashML-org/FreeToken](https://github.com/FlashML-org/FreeToken) | Python | 0 (+653) | 面向大规模本地模型的桌面级模型服务 —数据中心级推理能力下沉至消费硬件 |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | 0 (+675) | 纯C、零依赖的MoE模型运行器，支持按需专家流式处理 —极致轻量化的边缘推理引擎 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,052 | Rust版模块化LLM应用框架 —类型安全 + 零成本抽象的下一代AI基础设施 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,563 | 支持100+数据集的LLM评测平台 —全维度模型评测事实标准 |

### 🤖 AI Agent / 工作流

| 项目 | 语言 | Stars（总计/今日）| 简介 |
| :--- | :--- | ---: | :--- |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Shell | 0 (+1,379) | 49个AI Agent + 72个工作流技能，专攻游戏开发 —首个完整游戏工作室层级化agent编排系统 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | TypeScript | 0 (+412) | 开源Agent管理平台 —工作流编排 + 团队协作一体化 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0 (+858) | 面向AI Agent的真实工程师技能 —来自.agents目录的实战技能库 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 259,915 | 自主成长的AI agent框架 —社区最大体量的单体agent项目 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,478 | 前端Agent栈 + AG-UI协议 —前端agent集成的事实标准 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 119,883 | AI浏览器Agent + 云端隐身浏览 —网页自动化agent基础设施 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总计/今日）| 简介 |
| :--- | :--- | ---: | :--- |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | 0 (+857) | 金融市场基础模型 —首个专注于金融语言的LLM基座 |
| [karpathy/nanochat](https://github.com/karpathy/nanochat) | Python | 0 (+321) | 预算版ChatGPT实现（硬件成本约$100） —Andrej Karpathy的极致性价比方案 |
| [kornia/kornia](https://github.com/kornia/kornia) | Python | 0 (+412) | 面向空间AI的几何计算机视觉 —CV领域的PyTorch Geometric |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | Python | 0 (+420) | 无需训练即可修改LLM（移除审查、减少slop） —无需重训练的行为对齐工具 |

### 🧠 大语言模型 / 训练

| 项目 | 语言 | Stars（总计/今日）| 简介 |
| :--- | :--- | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 168,460 | SOTA ML模型的定义框架 —行业基石项目 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 185,728 | 本地LLM运行支持（Kimi、GLM、DeepSeek、Qwen、Gemma） —本地推理标准栈 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter | 107,719 | 用PyTorch从零实现类ChatGPT的LLM —学习LLM内部原理的最佳教程 |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 160,273 | 构建Agent工作流 & RAG流水线 —LLM应用开发平台 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 201,276 | 开源ML框架 —老牌框架仍具影响力 |

### 🔍 RAG / 知识库

| 项目 | 语言 | Stars（总计/今日）| 简介 |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 110,889 (+1,803) | 跨Agent会话的持久化上下文，支持AI压缩 —跨会话记忆的事实标准 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 157,592 | 用户友好的AI界面（支持Ollama、OpenAI API） —本地LLM UI首选 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,303 | AI Agent的记忆层 —生产级agent记忆基础设施 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,568 | 云原生向量数据库 —大规模向量检索工业标准 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,398 | 高性能向量搜索引擎 —Rust向量库性能标杆 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 141,287 | 代码库→可查询知识图谱 —代码理解 + RAG新范式 |

---

## 3. 趋势信号分析

今日数据揭示了**三个相互交织的浪潮**：

1. **Agent桌面与CLI工具** — Vercel的`agent-desktop`（2,275颗星）和`worktrunk`（77颗星，面向并行Agent工作流的git worktree）表明"浏览器中的Agent"正在向"CLI/终端公民Agent"转变。这与生产化趋势一致：Agent正从实验性演示转向开发者工作流。

2. **记忆与状态持久化** — `claude-mem`的1,803颗星激增，以及向量数据库的活跃度（Milvus、Qdrant、LanceDB）确认了**从无状态到有状态Agent**的转变是头号基础设施挑战。通过外部记忆解决上下文窗口限制的项目正在获得超额关注。

3. **本地化/小规模推理** — `colibri`（纯C MoE）、`FreeToken`（桌面模型服务）和`nanochat`（约$100硬件成本）围绕**边缘/消费级AI部署**形成了一个集群。这暗示着随着API成本上升，民主化需求正在推动这一方向。

没有出现全新的技术栈，但**Rust + AI Agent**组合（agent-desktop、rig）的加速值得注意——此前这一领域由Python主导。

---

## 4. 社区热点追踪

- **[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)** — 关注Vercel进入Agent基础设施领域；有望成为CLI-based computer use Agent的事实标准。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 记忆持久化是核心瓶颈；该项目将短上下文LLM与无限会话Agent连接起来。
- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** — 近几个月首个Trending的金融LLM；标志着领域特定微调的热潮。
- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** — 纯C实现的MoE流式处理是一种值得关注的边缘AI架构模式。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 基于AST的代码知识图谱绕过了向量RAG的局限；可能重新定义代码理解工具链。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*