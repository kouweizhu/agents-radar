# AI 开源趋势日报 2026-11-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-13 02:51 UTC

---

<think>The user wants me to translate an English technical report into Simplified Chinese. Let me carefully translate this following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, project names, slugs, etc. verbatim
4. Use natural technical Chinese, register of a Chinese developer newsletter

Let me translate section by section carefully.

Key translations to be careful about:
- "Trending List" - 趋势榜单 / 热门列表
- "topic-search" - 主题搜索
- "AI-related" - AI 相关
- "inference engine" - 推理引擎
- "agent harness" - Agent 编排框架 / Agent 运行框架
- "agent skills" - Agent 技能
- "browser-use" - 不翻译 project name
- "RAG" - RAG (保持英文，因为是通用术语)
- "LLM" - LLM (保持英文)
- "MCP" - MCP (保持英文)
- "ANN search" - ANN 搜索 / 近邻搜索
- "token" - Token (保持)
- "star" - star (GitHub 术语，可以保持 "stars" 或用 "星标数")
- "context layer" - 上下文层
- "hot list" - 热门榜单
- "trend signals" - 趋势信号

Let me translate the title and content:

Title: "AI 开源趋势报告 — 2026 年 11 月 13 日"

Let me go through each section:

**Step 1 — Filtering**
- "Filtering" - 筛选
- "trending repositories" - 趋势仓库


- "retained" - 保留
- "excluded" - 排除
- "non-AI projects" - 非 AI 项目
- "web tooling" - Web 工具
- "Node.js infrastructure" - Node.js 基础设施
- "Apple Watch customization" - Apple Watch 定制
- "Ruby finance app" - Ruby 理财应用
- "design system" - 设计系统
- "Node.js runtime" - Node.js 运行时
- "topic-search repositories" - 主题搜索仓库
- "AI-adjacent by construction" - 按设计即为 AI 相关
- "considered for categorization" - 纳入分类范围

现在需要将这些内容翻译成中文，同时保持 Markdown 格式和项目名称的完整性。

在表格和分类部分，需要将技术术语准确对应：llama.cpp 作为 C++ 项目标记为推理优化工具，codex-security 和 qwen-code 分别用 TypeScript 和 Zig 表示安全和编码方向，agent-skills 和 OpenBot 突出 JavaScript 框架的角色，transformers 和 ollama 作为 Python 和 Go 的核心项目需要明确标注其基础地位。

hermes-agent 和 AutoGPT 作为 Python 自主代理框架占据 Agent 类别的主导地位，而 langchain 则提供编排能力。browser-use、Agent-Reach、paperclip 等项目展示了从浏览器自动化到多平台集成的应用范围，C 端产品则涵盖从文档处理到知识管理的多个垂直领域。

在 RAG 和知识检索领域，ragflow 和 crawl4ai 等 Python 项目与 llama_index、milvus 等向量数据库和检索框架形成互补，cognee 和 claude-context 则专注于 AI 记忆和上下文管理。ECC 作为顶级项目继续领跑整个 AI 开源生态。

LLMs 从零开始构建、opencompass 评估框架、tiny-llm 精简实现，以及日文 LLM 资源集合等工具链也在持续发展。现在进入趋势分析阶段，编码代理项目正在经历爆发式增长，推理引擎领域也开始向 C++ 以外的方向扩展。

内存和上下文管理正在成为新的关键方向，社区对 agent-skills 和 free-claude-code 这两个项目的日增关注度最高，都在处理同一个核心挑战：缺乏可靠的生产级工具来支撑 agent 的编排和执行。

free-claude-code 通过大量免费 token 的方式（1.3B+）来吸引用户，这表明免费层级的访问正在成为 agent 工具市场的竞争焦点。同时，推理引擎领域也在突破传统的 C/C++ 限制。

TensorFold 这类项目采用了 Zig 这样的非主流系统语言来进行 GPU 加速的 LLM 推理，而 llama.cpp 继续保持增长，加上 Rust 生态中的 Codewhale 和 Meilisearch 等项目的强劲表现，整个生态正在向成熟的 C/C++ 基础和新一代内存安全语言两个方向分化。

还有一个关键趋势是 agent 记忆和上下文层的独立性正在显现。

cognee、Claude 上下文集成和 headroom 这些项目都在解决同一个根本问题：LLM 本质上是无状态的，缺乏足够的上下文信息。

通过快速增长的星标数可以看出，"上下文管道"这一层——而非模型本身——正在成为最紧迫的工程挑战。

ECC 项目拥有 302K 星标，是数据集中规模最大的 AI 项目。其核心方向是让现有的 agent 框架达到生产级别的安全性，这反映出社区的关注点正在从从头构建新框架，转变为优化和保护已有的 agent 系统。

browser-use 和 crawl4ai 这两个项目形成了强大的开源组合，一个负责数据采集，一个负责执行层，共同构成了商业网页自动化工具的开源替代方案。

OpenBot 通过为每个 AI agent 配备独立的浏览器和文件系统，带来了质的新范式。

这个概念很可能成为长期自主 agent 任务的标准基础。

LEANN 作为 2026 年 MLsys 最佳论文的开源实现，展示了存储高效的 RAG 算法进展在论文发表后几个月内就能被推向社区。对于资源受限或对隐私敏感的应用场景，这个项目值得工程师们密切关注。

MCP 作为 Agent 工具生态的互操作标准正在快速获得认可。

Claude Code 的集成加上更广泛的 MCP 采用表明，工具互操作性的标准化正在加速，这将进一步降低整个 Agent 工具领域的集成难度。

现在翻译整个报告...
</think>


## AI 开源趋势报告 — 2026 年 11 月 13 日

---

### 第一步 — 筛选

在 13 个趋势仓库中，**保留 7 个 AI 相关项目**；**排除 6 个非 AI 项目**（Web 工具、Node.js 基础设施、Apple Watch 定制、Ruby 理财应用、设计系统、Node.js 运行时）。在 80 个主题搜索仓库中，按设计均为 AI 相关，全部纳入分类考量。

---

### 第二步 — 分类与表格

#### 🔧 AI 基础设施

| 项目 | 语言 | Stars（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | C++ | 0 / +176 | 纯 C/C++ 高效 LLM 推理的事实标准；持续作为各主流平台量化本地部署的底层支柱。 |
| [openai/codex-security](https://github.com/openai/codex-security) | TypeScript | 0 / +643 | OpenAI 官方 Codex SDK，用于自动化安全漏洞检测与修复；标志着 AI 编程 Agent 与企业安全工具的交叉正在深化。 |
| [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | TypeScript | 0 / +151 | Qwen 开源的终端驻留式 AI 编程 Agent，无需 IDE 依赖即可在开发者终端中提供前沿级代码智能。 |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Zig | 0 / +54 | 面向 Metal、CUDA、Vulkan 的 LLM 推理引擎，使用 Zig 编写；作为推理引擎领域罕见的非 C/C++/Rust 作品引人注目，借 Zig 的性能优势。 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 / +816 | AI 编程 Agent 的生产级工程技能库——今日 AI 基础设施分类中星标数最高，反映社区对成熟 Agent 工具的强烈需求。 |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 0 / +298 | 开源框架，为 AI Agent 配置专用浏览器、文件系统和工具访问权限；是实现自主长时 Agent 执行的重要一步。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 168,933 | 文本、视觉、音频和多模态架构的标准化模型定义库；横跨推理与训练两端，是整个生态系统的根基。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,824 | 支持数十种开放权重模型的本地模型运行时；其庞大的星标数反映了行业向自托管、隐私优先 LLM 部署的迁移趋势。 |

#### 🤖 AI Agent / 工作流

| 项目 | 语言 | Stars（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [ NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 262,992 | 具备记忆与技能累积能力的自进化 Agent 框架；作为星标数最高的 Agent 项目之一，表明社区对随使用成长、可自主改进的 Agent 有强烈需求。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 188,011 | 引发现代 AI Agent 浪潮的初代自主 Agent 项目；持续吸引贡献者，仍是 Agent 研究领域的基准。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,422 | Agent 工程平台——提供 LLM、工具与记忆链接的抽象层；仍是 Agent 应用开发的主导框架。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 120,860 | 让 AI Agent 能够自主操控浏览器的开源库；弥合 LLM 推理与真实网络交互任务之间的鸿沟。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 111,375 | 多平台社交媒体数据提取 CLI，支持 Twitter、Reddit、YouTube、GitHub 及中国平台；零 API 费用意味着 Agent 工具领域的价格套利策略。 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | TypeScript | 113,431 | 企业团队 Agent 管理平台；高星标数反映了组织对多个 AI Agent 治理与编排的日益增长的需求。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,673 | Agent 与生成式 UI 的前端技术栈，包含 AG-UI Protocol；将 Agent 后端与 React/Angular/Slack 等精致前端桥接起来。 |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | Rust | 41,178 | 纯 Rust 编写的终端原生编程 Agent，支持多 Agent 任务分解；Rust 在此领域的出现标志着 Agent 运行时正向高性能、安全优先的方向演进。 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 47,207 | 隐私优先、自托管的知识工作空间，原生支持 AI Agent 协作；以本地优先架构强调人与 AI 协同工作，是一大亮点。 |

#### 📦 AI 应用

| 项目 | 语言 | Stars（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Python | 0 / +415 | 零成本多框架访问 Claude Code、Codex 等编程 Agent，附赠 1.3B+ 免费 Token；单日 415 星标的爆发式增长，反映开发者对零成本 Agent 访问的迫切需求。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 142,968 | 基于 AI 工作流从主题自动生成高清短视频；展示了面向消费者规模的内容自动化实用方案，在东亚社区有强劲 adoption。 |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 58,677 | 终身个性化 AI 辅导系统；连接学术 AI 研究与大众化教育工具，是高影响力的垂直应用方向。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 71,101 | LLM 驱动的多市场股票分析，集成实时新闻与自动化预警；利用免费模型 API 实现零成本定时执行值得关注。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 38,116 | 个人 AI 交易 Agent——继 HKUDS 研究组在自主金融 Agent 领域的又一发力，表明该垂直领域正在走向成熟。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 82,238 | 开源 AI 求职 Agent，可对岗位评分、定制简历、追踪申请进度；将 Agent 能力落地到具体、高频的真实工作场景。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 76,335 | 从文档 AI 生成 PPT，支持原生形状、图表和语音旁白；是 LLM 到结构化输出应用的优秀案例，在社区中获得广泛认可。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 68,230 | 本地优先 AI 知识助手，支持全文摄入与 RAG；面向从云端 AI 工具迁移的用户群，在隐私意识开发者中增长势头明显。 |

#### 🧠 LLM / 训练

| 项目 | 语言 | Stars（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 302,057 | 数据集中星标数最高的 AI 项目——具备技能、本能、记忆和安全原语的 Agent 编排性能优化系统；标志着社区的下一个前沿是让*已有* Agent 框架达到生产级水准，而非从零构建。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,317 | 从零开始逐步实现类 ChatGPT LLM 的 PyTorch 教程；仍是理解 Transformer 架构第一性原理的首选学习资源。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,589 | 覆盖 100+ 基准的全面 LLM 评测平台，涵盖知识、推理、编程和安全维度；随着模型数量激增，系统性评测已成关键基础设施。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,728 | 在 Apple Silicon 上构建精简版 vLLM + Qwen 推理系统的教学项目；满足 ML 工程师对系统级 LLM 认知的需求。 |
| [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) | TypeScript | 1,447 | 日语大语言模型精选概览；反映了 LLM 生态持续向英语中心以外的多语言扩展本地化趋势。 |

#### 🔍 RAG / 知识

| 项目 | 语言 | Stars（总计 / 今日） | 概述 |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,097 | 原生支持 Agent 的 RAG 引擎，已演进为上下文基础设施；瞄准企业级大规模文档检索的高精度需求。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,286 | AI 原生网页爬虫，提供托管云服务；定位为 Agentic RAG 流程的数据摄入层，与商业爬取 API 形成竞争。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,884 | AI 应用文档处理与检索平台；仍是开发者在 LLM 之上构建 RAG 系统的标准选择。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,650 | 云原生高性能向量数据库，面向规模化 ANN 检索；大规模嵌入存储与相似性搜索的生产级标准选择。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,287 | 使用小模型实现持久化长期 Agent 记忆的开源 AI 记忆平台；解决了"Agent 会遗忘"这一关键痛点，以轻量免费方案替代商业记忆服务。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | Python | 13,796 | MLsys 2026 最佳论文——通过学习型密集表征实现 97% 存储空间节省的 RAG 方案；代表了向量近邻检索优化领域的新算法方向。 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | TypeScript | 12,690 | 面向 Claude Code 的代码搜索 MCP（Model Context Protocol）集成，支持全代码库上下文注入；标志着 MCP 正成为 Agent 工具互操作层的标准。 |
| [pathwaycom/serviette](https://github.com/pathwaycom/serviette) | Python | 58,707 | 无代码 RAG 服务器，支持八种向量数据库与自动文档同步；面向不具备工程背景但希望零门槛部署 RAG 的用户。 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 59,849 | 闪电级搜索引擎，支持 AI 驱动的混合搜索（关键词 + 语义）；Rust 赋能的极致性能使其成为实时搜索场景中极具竞争力的向量近邻替代方案。 |

---

### 第三步 — 趋势信号分析

今日热榜揭示三大主导潮流。

**一、AI 编程 Agent 在开发者心智中爆发式增长。** 今日按日增星标排名前两位的 AI 项目——`agent-skills`（+816）和 `free-claude-code`（+415）——均瞄准编程 Agent 场景，且均剑指同一个痛点：Agent 编排框架缺乏可靠的生产级原语。`free-claude-code` 以其激进的 Token 补贴模式（1.3B+ 免费 Token）尤其值得关注，表明免费层访问正在成为 Agent 工具市场的竞争利器。

**二、推理引擎领域正在超越 C/C++ 的传统疆域。** `TensorFold`（+54）以 Zig 编写是首次出现的信号，表明非传统系统语言正在被引入 GPU 加速的 LLM 推理赛道。加上 `llama.cpp` 的持续主导（+176）以及 Rust 系项目 `Codewhale`、`Meilisearch` 的强劲表现，生态系统正在向成熟稳固的 C/C++ 基座与面向性能敏感型 AI 工作负载的新一代内存安全语言两个方向分化。

**三、Agent 记忆与上下文层正在形成为一个独立赛道。** `cognee`（33K 星标）专注 Agent 记忆、`zilliztech/claude-context` 专注 MCP 代码上下文、`headroom`（79.5K 星标）专注 Token 压缩，三者共同解决一个根本性问题：LLM 是无状态的，上下文永远不足。跨项目星标的快速积累表明，**"上下文管道"层**——而非模型本身——才是当前最紧迫的工程战场。

---

### 第四步 — 社区热点

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — 302K 星标，数据集中体量最大的 AI 项目。其聚焦 Agent 编排性能优化（技能、本能、记忆、安全），标志着社区的下一个前沿是让*已有* Agent 框架达到生产级安全，而非从零构建新框架。

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)**（120K 星标）和 **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)**（87K 星标）—— 这两个项目构成了一个强大的开源组合。`crawl4ai` 负责数据摄入，`browser-use` 负责执行，共同构成了商业 Web 自动化 AI 服务最具竞争力的开源替代方案。

- **[CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot)**（+298 今日） — 为每个 AI Agent 配置专属浏览器和文件系统的理念，是 Agent 架构范式上的质的飞跃。密切关注其成熟度，有望成为长时自主 Agent 任务的标准底座。

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — 2026 年 MLsys 最佳论文的开源实现，展示了存储高效 RAG 的算法进展在论文发表后数月内即向社区开放。对于在资源受限或隐私敏感场景中构建 RAG 系统的工程师，此项目值得关注。

- **[zilliztech/claude-context](https://github.com/zilliztech/claude-context)** — MCP（Model Context Protocol）正在快速成为 AI Agent 工具生态的 USB-C。这一 Claude Code 集成配合更广泛的 MCP 采用浪潮，表明工具互操作性的标准化正在加速，将全面降低整个 Agent 工具生态的集成摩擦。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*