# AI 开源趋势日报 2026-11-19

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-19 03:48 UTC

---

<think>The user wants me to translate the entire English technical report into Simplified Chinese. Let me go through it carefully and translate while following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths in their original form
5. Use natural technical Chinese register

Let me translate section by section:

Title: "AI Open Source Trends Report — 2026-11-19" → "AI 开源趋势报告 — 2026-11-19"

Section 1: Today's Highlights
- "The AI open-source ecosystem is experiencing a **multi-agent orchestration surge**" → "AI 开源生态正在经历一场**多智能体编排热潮**"
- "with PaperOrchestra (1,524★ today) demonstrating Google's commitment to automated research pipelines" → "PaperOrchestra（今日 1,524★）展示了 Google 对自动化研究流水线的投入"
- "and NVIDIA's SkillEvaluator (312★ today) establishing quality gates for agent skill evaluation." → "NVIDIA 的 SkillEvaluator（今日 312★）为智能体技能评估建立了质量门禁"
- Continue translating...

Let me be careful with technical terms:
- agent → 智能体 (or keep as "agent" in technical context)
- framework → 框架
- library → 库
- pipeline → 流水线
- evaluation → 评估
- inference → 推理
- orchestration → 编排
- deployment → 部署
- retrieval → 检索
- memory → 记忆/记忆系统
- tool calling → 工具调用
- RAG → RAG (keep as is, widely used in Chinese)
- workflow → 工作流
- benchmark → 基准测试

For tables, I need to keep the structure with column separators. The stars notation (★) should be kept.


Now I'll translate the full report, maintaining the markdown formatting and technical terminology throughout. The report covers trending projects across multiple categories including AI infrastructure, agents, applications, and LLMs, along with trend analysis and community highlights. I'll preserve all the technical terms, project names, and URL references while converting to natural Chinese technical language. Now I'm looking at the rest of the AI applications and tools, including workflow platforms like Dify, memory management systems, and various specialized tools for different domains like finance and video generation. Then there's the foundation model infrastructure with local inference options and training frameworks.

Continuing through the knowledge and retrieval systems—vector databases, RAG engines, and semantic search tools that handle everything from production-scale deployments to lightweight embedded solutions. I'm noticing there are three distinct patterns emerging in how these systems are evolving.
</think>


# AI 开源趋势报告 — 2026-11-19

## 1. 今日要点

AI 开源生态正在经历一场**多智能体编排热潮**，PaperOrchestra（今日 1,524★）展示了 Google 对自动化研究流水线的投入，NVIDIA 的 SkillEvaluator（今日 312★）则为智能体技能评估建立了质量门禁。智能体技能标准正在快速统一——Google 的 Stitch-Skills、obra 的 Superpowers 和 Cursor 的插件生态正在收敛于一套可跨编码智能体互操作的技能定义规范。**智能体性能优化**正成为一门独立学科，ECC（总计 306k，今日 1,108★）提供了完整的智能体 harness 系统，涵盖记忆、安全和研究优先的开发模式。CLI 到智能体的迁移仍在继续（HKUDS/CLI-Anything），而 n8n 的原生 AI 能力（今日 325★）则模糊了自动化与自主智能体之间的界限。

---

## 2. 各分类重点项目

### 🔧 AI 基础设施

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [ECC](https://github.com/affaan-m/ECC) | JavaScript | 306,639（今日 1,108） | 面向 Claude Code、Codex、Opencode 和 Cursor 的智能体性能优化 harness 系统，集成了技能、本能、记忆和安全层。代表了智能体性能工程这一新兴学科。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,197 | 业界领先的 ML 模型定义框架，涵盖文本、视觉、音频和多模态领域的 SOTA 模型。是开源生态中推理和训练的核心基础设施。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,421 | 面向 LLM 应用的 Java 语言库，提供统一的 Provider API、含 MCP 支持的工具调用能力，并原生集成 Quarkus/Spring Boot——将智能体化能力带入 JVM 生态。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,602 | 全面的 LLM 评估平台，覆盖 100+ 数据集，涵盖知识、推理、编程和安全维度——正成为评测 OpenAI、Anthropic、Qwen、DeepSeek 等模型的事实标准。 |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | — | 53 | MCP 服务器精选集合，正在形成 Model Context Protocol 生态的骨干——是智能体与工具间标准化通信的关键基础设施。 |

### 🤖 AI 智能体 / 工作流

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | Python | 今日 1,524 | 多智能体框架，用于自动化 AI 研究论文写作——Google 对多智能体协作式研究流水线的具体押注，通过协调多个专业化智能体完成论文创作全流程。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 今日 822 | 智能体技能框架，搭配完整的软件开发方法论；定义了智能体应如何组织能力、调用工具以完成真实开发任务。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 今日 365 | 基于开放标准构建的智能体技能库，专为 Stitch MCP 服务器设计，兼容 Antigravity、Gemini CLI、Claude Code 和 Cursor——推动技能跨智能体生态的互操作性。 |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | TypeScript | 今日 325 | 公平源码工作流自动化平台，原生支持 AI 能力，集成 400+ 服务，支持可视化编排与自定义代码——正成为非技术团队编排智能体的主流层。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 今日 1,059 | 任意主题研究智能体技能，覆盖 Reddit、X、YouTube、HN、Polymarket 和全网，并合成基于事实的摘要——多源研究智能体的生产级范例。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,811 | 面向智能体和生成式 UI 的前端技术栈，推出了 AG-UI 协议——桥接自主智能体推理与用户侧应用体验。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 121,456 | 面向 AI 浏览器智能体的开源库，提供支持隐身浏览器的托管 API——智能体通过浏览器与真实网络交互的首选方案。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 73,390 | 基于 LLM 的多市场股票分析，整合实时新闻和决策仪表盘，支持定时免费运行——展示领域特定智能体应用的真实实用价值。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 159,057 | 易用的 AI 界面，支持 Ollama、OpenAI API 和本地模型——159k stars 的自托管 AI 界面事实标准，社区活跃度强劲。 |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,461 | 在协作工作空间中构建智能体化工作流和 RAG 流水线；支持云端、VPC 或自托管部署——帮助团队从原型快速过渡到生产环境。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 203,292 | 通过统一搜索、爬取和 550+ 数据源让智能体更智能的知识基础设施——任何知识密集型智能体应用的关键上游基础设施。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,214 | 面向 AI 智能体的可嵌入记忆基础设施，提供跨会话持久化上下文——解决长期智能体记忆这一根本性挑战。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,405 | 面向智能体的 RAG 引擎，已演进为生产级上下文基础设施——提供深度文档理解和智能语义分块检索。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,541 | 开源 AI 原生网页爬虫与提取器，Apache-2.0 许可，支持自托管——需要新鲜网页数据的智能体的首选解决方案。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 80,116 | Token 压缩库，为编程智能体减少 20%、JSON 工具输出减少 60-95% 的上下文量——直接解决生产智能体部署中的成本和上下文窗口挑战。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 144,532 | 从主题自动生成 HD 短视频的 AI 工作流——展示 LLM 编排用于多媒体内容创作的消费级应用。 |

### 🧠 大语言模型 / 训练

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 187,565 | 快速运行 Kimi、GLM、MiniMax、DeepSeek、Qwen、Gemma 等 100+ 模型——本地 LLM 推理的主导方案，部署简单、模型覆盖广泛。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 66,521 | 2 小时从零训练自己的 64M LLM——以最小但完整的训练流程民主化模型训练，降低 AI 开发门槛。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,180 | 用 Rust 构建模块化、可扩展的 LLM 应用——以内存安全和性能为生产级 LLM 系统提供类型安全、可组合的架构。 |
| [OpenSPG/KAG](https://github.com/OpenSPG/KAG) | Python | 9,178 | 面向专业领域知识库的形式化推理与检索框架——超越向量相似性，采用符号推理实现更高准确率。 |

### 🔍 RAG / 知识检索

| 项目 | 语言 | Stars（总计 / 今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,859 | 智能体工程平台——尽管面临专业化解决方案的竞争，仍是构建 RAG、智能体和 LLM 应用的主导框架。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,948 | 面向 AI 的文档处理平台——构建 RAG 流水线的主要工具包，提供先进的索引、检索和综合能力。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,688 | 为可扩展近似最近邻搜索构建的高性能、云原生向量数据库——大规模嵌入存储和相似性搜索的生产级标准。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,633 | 面向下一代 AI 的高性能向量数据库，提供云服务——以速度和混合过滤能力著称。 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | Rust | 11,940 | 面向多模态 AI 的开发者友好型嵌入式检索库——设计简洁，无需独立服务器，适合边缘和移动端部署。 |
| [neuml/txtai](https://github.com/neuml/txtai) | Python | 13,642 | 一站式 AI 框架，集语义搜索、LLM 编排和语言模型工作流于一体——RAG 和语义搜索场景的全套解决方案。 |

---

## 3. 趋势信号分析

今日数据显示 AI 开源生态呈现**三个明显的加速向量**：

**第一，智能体评估正在成熟。** NVIDIA 的 SkillEvaluator（今日 312★）代表这一长期缺失的关键环节终于得到解决——社区现在有了可以量化评估智能体技能是否真正改善任务结果的框架。这标志着从"建造智能体"向"建造可靠智能体"的成熟转型。其多层级方法（质量门禁、语义重叠检测、合成数据集生成、实时评估）与企业级 MLOps 实践一脉相承。

**第二，智能体技能标准正在收敛。** Google 的 PaperOrchestra 和 Stitch-Skills、obra 的 Superpowers 以及 Cursor 的插件生态都使用相似的词汇来描述其能力——"技能"、"工具"、"本能"。这是社区在隐性标准化技能作为智能体能力的基本单元——类似于包（package）成为软件重用的基本单元。构建于这些模式之上或扩展它们的项目（ECC、last30days-skill）正在借势这波浪潮。

**第三，Token 效率是当务之急。** Headroom（80k★）将工具输出压缩 60-95%、Caveman 追求更短的智能体回答、n8n 以可视化方式减少开发冗余——这些都指向一个实际的工程关注点：**LLM 上下文是昂贵的且缓慢的**。生态正在通过压缩、更好的工具设计和工作流抽象来应对——随着更多智能体触及生产成本天花板，这一趋势将加速。

---

## 4. 社区热点

- **[ECC](https://github.com/affaan-m/ECC)** — 规模最全面的智能体 harness 系统，306k stars，今日 1,108★；以其对安全性和记忆层的显式关注，为生产智能体开发建立了模板。

- **[open-webui](https://github.com/open-webui/open-webui) + [ollama](https://github.com/ollama/ollama)** — 本地 AI 技术栈已经过实战检验；这两个仓库构成了完全离线运行智能体的基线基础设施，也是企业和隐私敏感型部署的重要选择。

- **[browser-use](https://github.com/browser-use/browser-use)** — 连接自主智能体与真实网络的桥梁；121k stars 正在使其成为需要与现有 Web 应用交互的智能体的默认方案。

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — 生产智能体的 Token 压缩是一个被低估的优化方向；宣称的 JSON 工具输出压缩 60-95% 直接针对真实世界智能体部署中的成本和延迟瓶颈。

- **[Dify](https://github.com/langgenius/dify)** — 弥合原型与生产差距的工作流平台，服务于构建 RAG 和智能体化应用的团队；161k stars 且企业采用率强劲，表明它正在赢得"生产级 LangChain"的定位。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*