# AI 开源趋势日报 2026-11-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-14 02:38 UTC

---

<think>The user wants me to translate the AI Open Source Trends Report from English to Simplified Chinese. I need to:

1. Translate all text content to natural technical Chinese
2. Preserve all Markdown structure exactly
3. Keep URLs, code spans, numbers, dates, project names, repository slugs, usernames, version tags, file paths, API/config identifiers as-is
4. Keep issue/PR references as-is
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me carefully translate this report section by section.

**Heading**: AI Open Source Trends Report — 2026-11-14
→ AI 开源趋势报告 — 2026-11-14

**Section 1: Today's Highlights**
- "production-grade agent tooling" → 生产级智能体工具
- "coding agents" → 编程智能体
- "browser-context awareness" → 浏览器上下文感知
- "multi-agent trading systems" → 多智能体交易系统
- "financial-vertical agent wave" → 金融垂直领域智能体浪潮
- "agent harnesses" → 智能体 Harness
- "RAG infrastructure" → RAG 基础设施
- "local LLM runtimes" → 本地 LLM 运行时
- "Rust-based tooling" → Rust 生态工具

Let me work through this systematically...

**Tables**: I need to translate table headers, summaries, but keep project names, URLs, language tags, and star counts as-is.


Now I'm going through each section of the report to identify all translatable content while preserving technical terms, repository identifiers, and numerical data. I'll maintain the markdown structure including tables, lists, and formatting throughout the translation.
</think>


# AI 开源趋势报告 — 2026-11-14

## 1. 今日要点

今日 AI 开源生态呈现出向 **生产级智能体工具** 的显著转向：阿里巴巴开源了一款融合确定性流水线与 LLM 智能体的代码评审方案，OpenAI 则发布了官方 Codex Security CLI 用于漏洞检测。Google 的 Chrome DevTools MCP 将浏览器上下文感知能力直接引入编程智能体工作流，同时多智能体交易系统（daily_stock_analysis、claude-trading-skills、Vibe-Trading）的集中涌现，标志金融垂直领域智能体浪潮已经到来。更大范围的主题搜索语料进一步印证，生态正围绕三大支柱走向成熟——智能体 Harness、RAG 基础设施和本地 LLM 运行时，其中 Rust 生态工具（rig、Qdrant）正与 Python 主导的技术栈形成有力竞争。

---

## 2. 各类别 Top 项目

### 🔧 AI 基础设施

| 项目 | 语言 | Stars（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langgenius/dify) | Python | 149,470 | 构建智能体工程的标准框架，提供 Chain、Tool、Memory 的抽象层，是大多数生产级 RAG 和智能体流水线的基础底层。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,903 | 当前最主流的本地 LLM 运行时，现已原生支持 Kimi、GLM、MiniMax、DeepSeek、Qwen 和 Gemma，开箱即用，自托管推理零配置。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,894 | RAG 流水线的文档处理核心，负责结构化和非结构化数据的摄取、索引与查询，以生产级规模支撑检索链路。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 120,962 | 需要执行网页交互的 AI 智能体的事实标准库，提供隐身浏览和托管智能体 API 访问的云端服务。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,401 | 将 LangChain 编程模型引入 JVM 生态，原生集成 Quarkus 和 Spring Boot，全面支持 MCP 工具调用协议。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,655 | 面向大规模 ANN 检索的高性能云原生向量数据库，已被数十家财富 500 强企业的检索流水线采用。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,142 | 面向构建模块化、可扩展 LLM 应用的 Rust 优先框架，为高吞吐生产智能体提供内存安全保证。 |

### 🤖 智能体 / 工作流

| 项目 | 语言 | Stars（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 263,234 | 今日智能体类目 Star 榜首——自适应智能体框架，随使用场景不断演进，以显著优势领先开源智能体类目。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,695 | 面向智能体和生成式 UI 的前端技术栈，支持 React、Angular、Mobile 和 Slack，遵循 AG-UI Protocol，架起智能体后端与用户交互体验的桥梁。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 302,498 | 今日 AI 相关类目 Star 总榜第一——智能体 Harness 优化系统，为 Claude Code、Codex 和 Cursor 叠加技能、本能、记忆和安全层。 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 0（+215 今日） | 阿里巴巴融合确定性流水线与 LLM 智能体的混合代码评审工具，内置多语言安全规则（NPE、线程安全、XSS、SQL 注入），已在超大规模场景下实战验证。 |
| [openai/codex-security](https://github.com/openai/codex-security) | TypeScript | 0（+751 今日） | OpenAI 官方安全专项 Codex CLI 及 TypeScript SDK，用于自动化漏洞发现、验证与修复——安全-DevEx 领域的一次里程碑式布局。 |
| [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | TypeScript | 0（+1,925 今日） | Google 整理的 Web 最佳实践知识库，专为保持编程智能体知识时效性而设计；今日 Star 增量第一，反映社区对智能体训练数据的高度渴求。 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0（+67 今日） | 将 Chrome DevTools 暴露为智能体工具的 MCP 服务器，使编程智能体可直接进行浏览器感知调试和性能分析。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 71,676 | 基于 LLM 的多市场股票分析，集成实时新闻和决策看板，支持零成本定时任务；金融智能体垂直浪潮的标杆案例。 |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 0（+69 今日） | 面向股票投资者的 Claude Code 技能包，覆盖市场分析、技术图表、经济日历、筛选器和策略开发。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 38,172 | "你的个人交易智能体"——专注于自动化股票交易工作流编排的开源智能体。 |
| [Likely7/Veyra-NRVideo](https://github.com/Likely7/Veyra-NRVideo) | C++ | 0（+256 今日） | DLSS 5 与 AI 超分辨率视频播放器，瞄准 PS5 版 GTA6 达到 120 FPS；作为开源项目明确瞄准下一代主机增强，算是一枝独秀。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 143,319 | 基于 AI 工作流编排，仅凭一个主题或关键词即可自动生成高清短视频；高 Star 内容自动化工具，社区传播力极强。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 158,593 | Star 数最高的面向用户的 AI 交互界面，支持 Ollama、OpenAI API 和多模型后端；自托管 ChatGPT 替代方案的不二之选。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 76,606 | 将文档或主题转化为原生 PowerPoint 文件的 AI，支持图表、动画和语音旁白；高实用价值的生产力 AI 应用。 |

### 🧠 大语言模型 / 训练

| 项目 | 语言 | Stars（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 188,020 | 开创自主 AI 智能体赛道的先驱项目，点燃了智能体框架运动；至今仍是顶级参考实现和社区枢纽。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 168,952 | 覆盖文本、视觉、语音和多模态任务的最权威模型定义库；开源模型生态的基石。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,369 | 从零开始手写类 ChatGPT LLM 的权威教程，以 PyTorch 实现；AI 工程学习路径的必修参考。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,595 | 最全面的开源 LLM 评测平台，覆盖 100+ 模型的知识、推理、代码、安全和长上下文评测维度。 |
| [acon96/home-llm](https://github.com/acon96/home-llm) | Python | 1,497 | 将本地 LLM 能力集成进 Home Assistant 实现智能家居控制，展示了私有化、端侧 AI 部署的持续增长趋势。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 319 | 使用 X-bit 量化实现端侧 LLM 推理，代表了边缘 AI 模型压缩技术的最前沿探索。 |

### 🔍 RAG / 知识管理

| 项目 | 语言 | Stars（总计 / 今日新增） | 摘要 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 147,317 | 将代码库、文档、SQL Schema 和 PDF 转化为可查询知识图谱，通过确定性 AST 解析实现；代码理解智能体的首选 RAG 周边项目。 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 144,586 | 精心策划的 100+ 开源 AI 智能体、技能和 RAG 应用合集；AI 应用生态最全面的参考手册。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,131 | 原生面向智能体的 RAG 引擎，已演进为上下文基础设施，支持深度文档理解，兼顾结构化和非结构化数据。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,327 | 面向智能体的 AI 原生网页爬虫的事实标准；采用 Apache-2.0 许可证，提供每月 1,000 免费额度的托管云服务。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,613 | Token 压缩代理和 MCP 服务器，为编程智能体降低 20%、为 JSON 载荷降低 60–95% 的 LLM 输入量，精度零损失。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 68,251 | 本地优先、数据主权归用户的 AI 工作空间，支持多文档 RAG 和智能体工作流，直面"租用 AI 智能"模式的挑战。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,543 | 为新一代 AI 打造的高性能 Rust 向量数据库，提供超大规模 ANN 检索能力，支持云原生部署。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 33,299 | 面向智能体的开源 AI 记忆平台，以低成本小模型提供持久化长期记忆，是生产级智能体部署的关键使能组件。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | Python | 13,797 | MLSys 2026 最佳论文奖得主：在保持快速、准确且 100% 私密的前提下，实现 97% 存储节省的 RAG 方案。 |

---

## 3. 趋势信号分析

今日数据呈现三个鲜明信号：

**1. 安全与 DevEx 的融合交汇。** 阿里巴巴和 OpenAI 在同一天各自发布了代码安全工具——这不是巧合，而是社区与头部实验室共同认定"安全内建智能体工具"是当务之急的确定性信号。阿里巴巴的工具以规则引擎保障企业级代码评审质量、辅以 LLM 推理；OpenAI 的 Codex Security CLI 则直击开发者工作流安全缺口。两者共同揭示了一个新叙事：智能体写生产代码的时代，安全必须成为默认配置。

**2. 智能体训练数据成为新赛道。** Google 的 modern-web-guidance 仓库单日斩获 +1,925 Stars，这一增幅史无前例，验证了一个快速崛起但尚处早期的赛道：为编程智能体定向构建或整理知识库。这与模型权重或提示词库截然不同——它瞄准的是智能体世界模型中的最佳实践知识。

**3. 金融垂直智能体集中爆发。** 三款独立股票/交易智能体项目同时出现在今日Trending榜和主题搜索语料中（daily_stock_analysis、claude-trading-skills、Vibe-Trading）。这绝非偶然——它反映了开发者正在围绕结构化金融数据（行情、新闻、图表）构建 LLM 推理链路，打造开箱即用的投资智能体的广泛趋势。daily_stock_analysis 中的零成本定时任务设计说明这些工具的目标用户是散户投资者，而非机构交易部门。

从更宏观的主题搜索语料来看，Rust 生态基础设施（rig、Qdrant）正在 Python 主导的技术栈中获得可信度，记忆与压缩工具（headroom、cognee）正在成为一个独立的子生态，直指上下文窗口瓶颈这一核心痛点。

---

## 4. 社区热点追踪

- **[GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src)** — 构建面向智能体的训练数据。单日 +1,925 Stars 的增幅史无前例，预计本周将迎来大量 Fork 和贡献。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — 作为自适应智能体框架持续领跑，其 263K Stars 的领先优势使其成为新智能体项目的默认选择。

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — 随着智能体规模扩大，Token 压缩正成为一等公民。60–95% JSON Token 节省这一数字颇为激进，值得独立验证。

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — MLSys 2026 最佳论文。在消费级硬件上实现 97% 存储节省的端侧 RAG，改变了隐私优先 AI 应用的部署经济学。

- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** — Rust 生态 LLM 基础设施正在走向成熟。对于追求内存安全和高吞吐的生产级智能体团队而言，rig 是最有可信度的新入局者。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*