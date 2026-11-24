# AI 开源趋势日报 2026-11-24

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-24 06:18 UTC

---

<think>The user wants me to translate the AI Open Source Trends Report from English to Simplified Chinese. I need to:

1. Translate all the English content to natural, technical Simplified Chinese
2. Preserve all Markdown structure exactly (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
3. Keep URLs, project names, repository slugs, usernames, version tags, file paths, API/config identifiers, issue/PR references in their original form
4. Use natural technical Chinese register - like a Chinese developer newsletter
5. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output

Let me translate this carefully, section by section.

Key technical terms I need to handle:
- "AI Open Source Trends Report" - AI 开源趋势报告
- "Trending" - 热门 / 趋势
- "Today" / "today's" - 今日 / 今天
- "Stars" - 星标数 / stars (keeping the term "stars" in Chinese dev community is common)
- "Highlights" - 今日焦点
- "Category" - 分类
- "Project" - 项目
- "Summary" - 简介
- "Trend Signal Analysis" - 趋势信号分析
- "Community Hot Spots" - 社区热点
- "Skill bundle" - 技能包
- "Agent" - Agent（保持英文，中文社区普遍用这个词）
- "RAG" - RAG（保持英文）
- "LLM" - LLM（保持英文）
- "MCP" - MCP（保持英文）
- "token" - token（保持英文）
- "framework" - 框架


- "inference" - 推理
- "fine-tuning" - 微调
- "embedding" - 向量化
- "vector database" - 向量数据库
- "knowledge graph" - 知识图谱
- "agentic" - Agentic（保持英文，中文常用"Agent化"）
- "skill pack" - 技能包
- "open standard" - 开放标准
- "interoperability" - 互操作性
- "deployment" - 部署
- "production" - 生产环境
- "infrastructure" - 基础设施

现在开始逐段翻译。
</think>


# AI 开源趋势报告 — 2026-11-24

---

## 1. 今日焦点

今天的 AI 开源生态呈现出明显的转向：**专业化、可组合的基础构建块**正在取代单体式 Agent 框架。最强劲的势头来自 **Claude-BugHunter**（+2,029 stars），这是一款面向 Claude Code 的红队技能包，印证了市场对生产级 Agent 工具的强烈需求。**MiniMind**（2 小时从零训练 64M LLM）反映了 LLM 训练民主化的浪潮，而 **autoclip**（+907）和 **MoneyPrinterTurbo**（145K+ stars）则揭示了 AI 原生视频内容创作是一个高增速赛道。一个值得关注的结构性趋势是 **Agent Skills 作为开放标准** 的崛起：Google 的 Stitch Skills 和社区项目正在发布可复用、跨平台兼容的技能包，覆盖 Claude Code、Cursor、Codex、Gemini CLI 等——这意味着生态正在围绕可组合的 Agent 组件而非封闭框架展开整合。

---

## 2. 分类榜单

### 🔧 AI 基础设施

| 项目 | 语言 | 星标数（总计 / 今日新增） | 简介 |
| :--- | :--- | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,274 | 文本、视觉、音频及多模态模型的标准化定义框架，涵盖推理与训练两大能力，是整个开源 ML 生态的基石。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 187,942 | 本地模型运行时，原生支持 Kimi、GLM、MiniMax、DeepSeek、Qwen、Gemma 等模型。以极简体验持续主导本地推理部署场景。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,954 | Agent 工程平台，提供 Chain、Tool、Memory 等抽象层，是 LLM 应用编排的事实标准实现。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 159,383 | 为 Ollama 和 OpenAI 兼容 API 提供友好 Web UI 的开源界面工具，是自托管 AI 部署领域增速最快的项目之一。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,634 | LLM 评测平台，覆盖 100+ 数据集，涵盖知识、推理、编程、安全等维度，支持 OpenAI、Anthropic、Gemini、Qwen、GLM、DeepSeek 等主流模型。 |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | N/A（+184 今日） | Intel 开源工具包，用于在 CPU、GPU、NPU 上优化和部署 AI 推理，是视觉和语言模型生产部署的关键基础设施。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 121,882 | 开源 AI 浏览器 Agent 库，提供云端托管隐匿浏览器及托管 Agent API，是连接 LLM 与真实网络交互的关键桥梁。 |

### 🤖 AI Agent / 工作流

| 项目 | 语言 | 星标数（总计 / 今日新增） | 简介 |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | N/A（+2,029 今日） | 面向 Claude Code 的漏洞挖掘与外部红队技能包——84 个技能、15 条斜杠命令、681 个已披露漏洞报告模板，覆盖 24 个漏洞类别。今日 AI 榜第一。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | N/A（+790 今日） | 通过统一 CLI-Hub 接口让所有软件具备 Agent 能力。代表了一种将现有工具改造为 AI Agent 可消费形式的新兴模式。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | N/A（+840 今日） | 一套 Agentic 技能框架与软件开发方法论，以实操性见长，正作为重型 Agent 脚手架的轻量替代方案获得关注。 |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | N/A（+397 今日） | Cursor IDE 官方插件规范与插件库。标志着 Cursor 致力于打造可扩展的开放 Agent 开发环境的决心。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | N/A（+422 今日） | Google 面向 Stitch MCP 服务器的 Agent Skills 库，遵循开放 Agent Skills 标准，实现跨 Agent 平台兼容（Claude Code、Cursor、Codex、Gemini CLI）。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 114,327 | 赋予 AI Agent "眼睛"以读取和搜索 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书——零 API 费用，单一 CLI 即用。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,922 | 面向 Agent 与生成式 UI 的前端技术栈——支持 React、Angular、移动端、Slack，并主导推进 AG-UI Protocol 作为 Agent 与前端通信的标准。 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 145,549 | 收录 100+ AI Agent、Agent 技能、RAG 应用的精选合集，是 Agent 领域星标数最高的资源聚合项目。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | N/A（+797 今日） | 面向 AI Agent 的技能工具，可对任意主题在 Reddit、X、YouTube、HN、Polymarket 及全网范围内展开研究，并输出有据可查的综述摘要。 |

### 📦 AI 应用

| 项目 | 语言 | 星标数（总计 / 今日新增） | 简介 |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 69,679（+828 今日） | 2 小时从零训练 64M LLM——最具象的 LLM 训练普及化实践，同时在 Topic 搜索中亦获得大量社区关注。 |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | N/A（+907 今日） | 开源 AI 视频剪辑工具，可自动将播客、访谈、课程等长视频转化为 TikTok、Reels、YouTube Shorts、小红书适用的短内容。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 145,293 | 输入主题或关键词即可自动生成高清短视频。生态中星标数最高的 AI 内容生成工具之一。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 79,661 | 基于 AI 的 PPT 生成工具，支持从文档或主题自动生成原生形状、过渡动效、动画、图表以及基于演讲备注的配音旁白。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 74,084 | LLM 驱动多市场股票分析，集成实时新闻、决策仪表盘，支持零成本定时运行——无需 API 费用。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 208,137（+924 今日） | 知识基础设施，通过单一 API 提供搜索、爬取及 550+ 数据提供方的接入能力——是 AI Agent 不可或缺的数据供给层。 |

### 🧠 LLM / 训练

| 项目 | 语言 | 星标数（总计 / 今日新增） | 简介 |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,941 | 从零实现类 ChatGPT LLM 的逐步 PyTorch 指南——理解 Transformer 架构全貌的权威学习资源。 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | Python | 354 | 面向基础模型与世界模型预训练的最简可扩展库，可靠性为其首要设计目标。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,805 | 在 Apple Silicon 上学习 LLM 推理系统——构建基于 vLLM + Qwen 的极简技术栈，面向系统工程师的实操教程。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,634 | 全维度 LLM 评测平台，覆盖 100+ 数据集。（同时列于基础设施分类；兼具评测工具与训练辅助的双重角色。） |

### 🔍 RAG / 知识

| 项目 | 语言 | 星标数（总计 / 今日新增） | 简介 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 152,614 | 将任意代码库、文档、SQL Schema、PDF 转化为可查询知识图谱——并提供 Claude Code/Cursor/Codex 技能包，支持确定性 AST 解析。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,399 | AI Agent 的记忆层——即插即用的持久化上下文基础设施，专为生产环境设计。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,617 | Agent 原生 RAG 引擎，已演进为上下文基础设施，提供深度文档理解与结构化检索能力。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,736 | 面向 AI Agent 的开源 AI 原生网页爬取与提取 API——支持自托管或使用托管云服务（每月 1,000 免费额度）。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,537 | 开源 AI Agent 记忆平台——基于小模型实现持久化长期记忆，让 Agent 获得免费且持久的上下文。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 80,689 | 将 Tool 输出、日志、文件、RAG 片段在到达 LLM 前进行压缩——编程 Agent 减少 20% token，JSON 场景减少 60–95%。 |

---

## 3. 趋势信号分析

今日社区关注度最集中的领域是 **专业化 AI Agent 技能与工具包**，而非通用 Agent 框架。排名前两位的趋势项目 **Claude-BugHunter**（+2,029）和 **superpowers**（+840）均为技能包，通过向现有 AI 编程 Agent（Claude Code、Codex）叠加领域专用能力来实现价值。这释放出一个信号：社区已大体接受了基础 Agent 平台的存在，现在正竞相围绕它们构建"技能经济"。

第二个明确的信号是 **开放 Agent Skills 标准的浮现**。Google 的 Stitch Skills 仓库和 Agent-Reach 等社区项目均明确标注了跨 Agent 平台兼容性。Agent Skills 开放标准与 MCP（Model Context Protocol）正在汇聚为事实上的互操作层——这与 SaaS 时代 REST API 标准化的路径如出一辙，仅仅是将战场换到了 AI 工具链。

第三个信号是 **垂直 AI 应用的大规模涌现**，覆盖高价值场景：视频生成（autoclip、MoneyPrinterTurbo）、职业自动化（career-ops）、股票分析（daily_stock_analysis）、应用市场合规（mjmirza/app-store-compliance）。这些并非新概念，但眼下正获得大量开源社区投入，意味着"以 Agent 为产品"的商业模式正在走向成熟。

最后，**LLM 训练民主化**正在加速。MiniMind"64M 模型 2 小时完成"的宣传语获得了巨大关注，与大趋势一致——随着推理成本下降和 DeepSeek、Qwen、MiniMax 等开放权重模型能力持续提升，模型实验的门槛正在被不断压低。

---

## 4. 社区热点

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — 面向 Claude Code 的红队/安全技能包是今日最强增长信号。以可组合 Agent 技能形式打造的安全工具，是一个高价值、供给严重不足的细分赛道，企业需求清晰。针对 Claude Code、Cursor 或任何兼容 Agent Skills 的平台进行开发的人员，都应重点研究其技能打包模式。

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) + [Agent-Reach](https://github.com/Panniantong/Agent-Reach)** — "让一切具备 Agent 能力"的运动是真实的且在提速。将现有 CLI 和 API 改造成 Agent 可消费的接口，催生了一个全新的基础设施类别。请密切关注 CLI-Hub（clianything.cc）生态的演进。

- **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) + [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** — AI 原生视频内容创作工具的增速超过了大多数 Agent 框架。短视频市场由创作者经济平台主导，能自动化视频制作与再创作的开源工具蕴含着可观的商业化空间。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0) + [topoteretes/cognee](https://github.com/topoteretes/cognee)** — 随着 Agent 从 Demo 走向生产环境，面向 Agent 的持久记忆基础设施是一个关键且此前缺失的层级。两个项目均提供生产级记忆原语；集成长期运行 Agent 的开发者应尽早引入记忆层，而非事后补救。

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — Token 压缩作为一等基础设施问题正在获得正当性。在答题质量相当的前提下实现 20–95% 的 token 削减，这类工具在上下文窗口成本持续高企的当下，将成为 Agent 部署中的必备环节。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*