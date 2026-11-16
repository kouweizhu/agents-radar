# AI 开源趋势日报 2026-11-16

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-16 02:21 UTC

---

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me translate this carefully, following all the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, etc. verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

---

## AI Open Source Trends Report — November 16, 2026

## AI 开源趋势报告 — 2026年11月16日

---

### 1. Today's Highlights

### 一、今日要点

The open-source AI ecosystem is experiencing a decisive shift toward **agent-centric tooling and skill orchestration**. Today's trending list is dominated by projects that extend, evaluate, or operationalize coding agents (Claude Code, Codex, etc.), signaling that the community is no longer just building agents — it's building the **infrastructure layer around them**. Notable today: Alibaba released a production-grade code review tool combining deterministic pipelines with LLM agents at enterprise scale; Google open-sourced Chrome DevTools integration for coding agents; and a wave of "skill bundle" projects (trading, bug hunting, web best practices) is making AI agents rapidly composable in vertical domains. Meanwhile, foundational infrastructure like GGML continues to see steady activity, underscoring that the community still prioritizes efficient inference and local ML execution alongside the agent gold rush.

开源 AI 生态正在经历一场决定性的转变——从模型本身转向 **Agent 中心化的工具链和技能编排**。今日热榜被大量围绕代码 Agent（Claude Code、Codex 等）的扩展、评测和运维工具所占据，释放出一个明确信号：社区不再只是构建 Agent，而是在构建 **围绕 Agent 的基础设施层**。今日亮点：阿里巴巴发布了生产级别的代码审查工具，将确定性流水线与 LLM Agent 深度结合；Google 开源了面向代码 Agent 的 Chrome DevTools 集成方案；与此同时，一波"技能包"项目（交易、漏洞挖掘、Web 最佳实践）正在快速让 AI Agent 在垂直领域实现可组合化。在这场 Agent 热潮之外，以 GGML 为代表的底层基础设施依然保持稳健增长，说明社区在追逐 Agent 热潮的同时，仍然重视高效推理和本地 ML 执行能力。

---

### 2. Top Projects by Category

### 二、各分类精选项目

#### 🔧 AI Infrastructure

#### 🔧 AI 基础设施

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ggml-org/ggml](https://github.com/ggml-org/ggml) | C++ | 0 (+43) | A tensor library for machine learning that remains the backbone of efficient on-device and local LLM inference; steady daily activity reflects continued community reliance on efficient ML primitives. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0 (+717) | Exposes Chrome DevTools to coding agents via the MCP protocol, enabling agents to inspect, debug, and manipulate live web pages — a critical bridge between agent reasoning and real browser environments. |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Python | 0 (+122) | A multi-tier framework for evaluating AI agent skills with quality gates, synthetic dataset generation, and live behavioral measurement; addresses the urgent need for standardized skill evaluation as agent ecosystems proliferate. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (+247) | A library of Agent Skills following the open Agent Skills standard, designed for compatibility across Antigravity, Gemini CLI, Claude Code, and Cursor — signaling growing demand for portable, cross-agent skill definitions. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,595 | An LLM evaluation platform supporting 100+ datasets across knowledge, reasoning, coding, and safety domains; increasingly essential as model proliferation demands rigorous benchmarking standards. |

| 项目 | 语言 | Stars（总计/今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [ggml-org/ggml](https://github.com/ggml-org/ggml) | C++ | 0 (+43) | 面向机器学习的张量库，是高效端侧和本地 LLM 推理的基石；每日稳健的增量反映出社区对高效 ML 原语的持续依赖。 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0 (+717) | 通过 MCP 协议向代码 Agent 暴露 Chrome DevTools，使 Agent 能够检查、调试和操控真实浏览器页面——这是在 Agent 推理与真实浏览器环境之间架起的一座关键桥梁。 |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Python | 0 (+122) | 多层级 Agent 技能评测框架，支持质量门禁、合成数据集生成和实时行为度量；在 Agent 生态系统快速扩张的背景下，直击行业对标准化技能评测能力的迫切需求。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (+247) | 基于开放 Agent Skills 标准构建的技能库，兼容 Antigravity、Gemini CLI、Claude Code 和 Cursor ——反映出市场对跨 Agent 可移植技能定义的强劲需求。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,595 | LLM 评测平台，覆盖知识、推理、编程、安全等 100+ 评测集；随着模型数量激增，对标准化评测基准的需求日益迫切，该项目的重要性持续上升。 |

#### 🤖 AI Agents / Workflows

#### 🤖 AI Agent / 工作流

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | 0 (+866) | An agent workspace enabling teams to annotate, review, and send feedback to agents with a single click; the highest single-day star gain today reflects intense developer interest in human-agent collaboration tooling. |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 0 (+423) | Self-hosted workflow orchestration for coding agents including CodeBuddy, Codex, and Claude Code, with script-based orchestration and human approval gates; targets enterprise teams requiring controlled agent deployment. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 0 (+98) | A Claude Code skill bundle with 82 skills, 15 slash commands, and 681 vulnerability patterns across 24 vulnerability classes — a specialized red-team toolkit that demonstrates agents can be instrumented for security research. |
| [alibaba/open-code-review](https://github.com/alibaba/alibaba-open-code-review) | Go | 0 (+691) | Battle-tested at Alibaba scale, combining deterministic review pipelines with LLM agents for line-level, multi-language security comments (NPE, thread-safety, XSS, SQL injection); compatible with OpenAI and Anthropic APIs. |
| [ NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 263,655 | A general-purpose agent framework with a strong community following; positioned as "the agent that grows with you," emphasizing extensibility and progressive capability building. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,717 | The frontend stack for agents and generative UI, supporting React, Angular, mobile, and Slack integrations; the team also maintains the AG-UI protocol, which is gaining traction as a standard for agent-frontend communication. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,590 | The dominant agent engineering platform with massive ecosystem adoption; continues to serve as the default framework for developers building LLM-powered applications and agentic workflows. |

| 项目 | 语言 | Stars（总计/今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | 0 (+866) | 面向 Agent 的协作工作空间，团队成员可一键对 Agent 输出进行标注、评审和反馈；今日最高单日 star 增量充分说明开发者对人机协同工具的强烈需求。 |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 0 (+423) | 支持 CodeBuddy、Codex、Claude Code 等代码 Agent 的自托管工作流编排平台，内置脚本化编排和人工审批门禁；面向需要对 Agent 部署拥有管控能力的企业团队。 |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 0 (+98) | 面向 Claude Code 的技能包，包含 82 项技能、15 个斜杠命令和覆盖 24 个漏洞类别的 681 种漏洞模式 ——一款专业的红队工具包，展示了如何将 Agent 能力注入安全研究场景。 |
| [alibaba/open-code-review](https://github.com/alibaba/alibaba-open-code-review) | Go | 0 (+691) | 经阿里巴巴大规模生产验证的代码审查方案，将确定性流水线与 LLM Agent 结合，提供多语言逐行安全审查（NPE、线程安全、XSS、SQL 注入等）；兼容 OpenAI 和 Anthropic API。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 263,655 | 通用型 Agent 框架，社区基础雄厚；定位为"与你共同成长的 Agent"，强调可扩展性和渐进式能力建设。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,717 | 面向 Agent 和生成式 UI 的前端技术栈，支持 React、Angular、移动端和 Slack 集成；该团队同时维护 AG-UI 协议，该协议正逐步成为 Agent 与前端通信的行业标准。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,590 | 占据主导地位的 Agent 工程平台，生态系统庞大；持续作为开发者构建 LLM 应用和 Agent 工作流的默认选择。 |

#### 📦 AI Applications

#### 📦 AI 应用

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+988) | An AI office SDK enabling developers to embed editing, calculation, collaboration, and file processing directly into products for both humans and AI agents; the strongest single-day gain today signals demand for AI-native productivity tooling. |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 0 (+706) | A Claude Code skill set for equity investors covering market analysis, technical charting, economic calendars, and strategy development — demonstrating how domain-specific skill bundles make generalist agents immediately useful in finance. |
| [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | TypeScript | 0 (+1,219) | Keeps coding agents aligned with the latest web best practices; the highest absolute star gain today indicates developers prioritize agent accuracy and standards compliance in web development tasks. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 158,766 | A user-friendly AI interface supporting Ollama, OpenAI API, and multiple backends; consistently high star count reflects its role as the go-to self-hosted frontend for local AI deployments. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 202,090 | Supercharges AI agents with web data extraction; building toward "superintelligence" by solving the fundamental data acquisition problem that limits agent reasoning in open-domain tasks. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 121,123 | An open-source library for AI browser agents with cloud-hosted stealth browsers and agent APIs; bridges the gap between reasoning models and real-world web interaction tasks. |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,225 | Build agentic workflows and RAG pipelines with rich AI model and tool support; bridges the gap from prototype to production for teams deploying AI applications in the enterprise. |

| 项目 | 语言 | Stars（总计/今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+988) | AI 办公 SDK，支持开发者将文档编辑、表格计算、协作和文件处理能力直接嵌入产品中，兼容人类用户和 AI Agent；今日最高单日 star 增量表明，市场对 AI 原生办公生产力工具的需求正在爆发。 |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 0 (+706) | 面向股票投资者的 Claude Code 技能集，覆盖市场分析、技术图表、经济日历和策略开发 ——展示了领域特定的技能包如何让通用型 Agent 在金融场景中即刻发挥价值。 |
| [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | TypeScript | 0 (+1,219) | 保持代码 Agent 与最新 Web 最佳实践的同步；今日绝对 star 增量最高，说明开发者在 Web 开发任务中将 Agent 的准确性和标准合规性放在首位。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 158,766 | 面向 Ollama、OpenAI API 及多种后端的友好型 AI 界面；持续的高 star 数量确立了其作为本地 AI 部署首选自托管前端的地位。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 202,090 | 通过网页数据抓取为 AI Agent 注入超能力；通过解决 Agent 在开放域任务中的数据获取瓶颈，向"超级智能"目标迈进。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 121,123 | 面向 AI 浏览器 Agent 的开源库，提供云端隐形浏览器和 Agent API；弥合了推理模型与真实 Web 交互任务之间的鸿沟。 |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,225 | 构建 Agentic 工作流和 RAG 流水线，支持丰富的 AI 模型和工具生态；帮助团队将 AI 应用从原型快速推进到生产环境。 |

#### 🧠 LLMs / Training

#### 🧠 大模型 / 训练

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 201,643 | The foundational ML framework serving all of AI/ML; remains essential for training, inference, and deployment across research and production environments. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,026 | The definitive model-definition framework for state-of-the-art models across text, vision, audio, and multimodal domains; the central hub of the open-source model ecosystem. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 105,547 | Dynamic neural network framework with GPU acceleration; the dominant choice for research and an increasingly common production deployment target. |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,424 | Deep learning framework designed for human-friendly model development; continues to lower the barrier to entry for building and experimenting with neural networks. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 63,462 | State-of-the-art object detection, instance segmentation, and classification with YOLO models; bridges the gap between cutting-edge vision research and production-ready deployment. |

| 项目 | 语言 | Stars（总计/今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 201,643 | 支撑整个 AI/ML 领域的基础框架；在研究与生产环境中的训练、推理和部署环节依然不可或缺。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,026 | 涵盖文本、视觉、语音和多模态领域 SOTA 模型的标准模型定义框架；是开源模型生态系统的核心枢纽。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 105,547 | 具备 GPU 加速能力的动态神经网络框架；是研究领域的首选方案，同时在生产环境中的采用率也在持续攀升。 |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,424 | 以友好的模型开发体验为设计目标深度学习框架；持续降低神经网络构建与实验的入门门槛。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 63,462 | 基于 YOLO 模型的 SOTA 目标检测、实例分割和图像分类能力；将前沿视觉研究成果与生产级部署之间的距离缩短为零。 |

#### 🔍 RAG / Knowledge

#### 🔍 RAG / 知识管理

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 68,320 | A local-first agent experience platform enabling users to own their AI intelligence; combines vector storage with conversational memory for persistent agentic workflows. |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 59,868 | Lightning-fast search engine with AI-powered hybrid search; increasingly adopted as a lightweight alternative to dedicated vector databases for AI application search features. |
| [pathwaycom/serviette](https://github.com/pathwaycom/serviette) | Python | 58,704 | A no-code RAG server that keeps answers synchronized with documents across 8 vector databases; targets enterprise users needing reliable, low-maintenance knowledge retrieval. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,913 | The document processing platform for AI; remains the standard framework for building RAG pipelines and connecting LLMs to structured and unstructured data sources. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,670 | High-performance, cloud-native vector database built for scalable ANN search; the enterprise standard for large-scale semantic search in AI applications. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,578 | A high-performance, massive-scale vector database and search engine for the next generation of AI; gaining share in the vector DB space with its Rust-based performance focus. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,205 | An agent-native database that evolved from a RAG engine into context infrastructure; serves teams requiring sophisticated document understanding and retrieval beyond simple embedding-based search. |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,406 | An open-source web crawler purpose-built for AI agents; provides structured data extraction that feeds directly into RAG pipelines, solving the data ingestion problem at scale. |

| 项目 | 语言 | Stars（总计/今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 68,320 | 以本地优先为核心理念的 Agent 体验平台，让用户真正拥有自己的 AI 智能；将向量存储与对话记忆相结合，为 Agent 工作流提供持久化能力。 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 59,868 | 极速搜索引擎，具备 AI 驱动的混合搜索能力；作为专用向量数据库的轻量替代方案，在 AI 应用搜索场景中的采用率持续上升。 |
| [pathwaycom/serviette](https://github.com/pathwaycom/serviette) | Python | 58,704 | 零代码 RAG 服务器，支持跨 8 种向量数据库的答案与文档同步；面向需要可靠、低维护知识检索能力的企业用户。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,913 | 面向 AI 的文档处理平台；作为构建 RAG 流水线以及连接 LLM 与结构化/非结构化数据源的标准框架持续发挥价值。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,670 | 面向大规模 ANN 检索的高性能云原生向量数据库；是大规模语义搜索在 AI 应用中的企业级标准。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,578 | 为下一代 AI 打造的高性能海量向量数据库和搜索引擎；以 Rust 为核心的性能优势，正在向量数据库领域抢占更多市场份额。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,205 | 从 RAG 引擎演进而来的 Agent 原生数据库，现已定位为上下文基础设施；服务于需要对文档有深层理解和高阶检索能力的团队，超越简单的 embedding 搜索。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,406 | 专为 AI Agent 打造的开源网页抓取工具；提供可直接馈入 RAG 流水线的结构化数据提取能力，从根本上解决了大规模数据摄取难题。 |

---

### 3. Trend Signal Analysis

### 三、趋势信号分析

Today's trending data reveals a clear inflection point: **the AI open-source community has moved from building AI models to building around AI agents**. Of the 12 trending repos, 10 are directly agent-related — skill libraries, agent workspaces, DevTools integrations, evaluation frameworks, and workflow orchestrators. This is not incremental improvement; it represents a structural shift in where community energy is concentrated.

今日热榜数据揭示了一个明确的拐点：**开源 AI 社区已从构建 AI 模型转向围绕 AI Agent 构建周边生态**。在 12 个热榜仓库中，有 10 个与 Agent 直接相关——涵盖技能库、Agent 工作空间、DevTools 集成、评测框架和工作流编排器。这不是增量式的改进，而是社区资源集中方向的结构性转变。

Three distinct patterns stand out:

三个显著模式值得关注：

1. **Skill Bundles as a First-Class Abstraction.** Projects like `claude-trading-skills`, `Claude-BugHunter`, and `stitch-skills` treat domain-specific capabilities as portable, composable units. This "skill bundle" pattern — curated prompt templates, tool definitions, and behavioral patterns packaged for a specific agent — is emerging as the dominant unit of AI agent extensibility, ahead of traditional plugin architectures.

1. **技能包作为一等公民抽象**。以 `claude-trading-skills`、`Claude-BugHunter` 和 `stitch-skills` 为代表的项目，将领域特定能力视为可移植、可组合的单位。这种"技能包"模式——针对特定 Agent 精心编排的提示模板、工具定义和行为模式——正在超越传统插件架构，成为 AI Agent 扩展性的主导单元。

2. **Agent-Frontend Integration Gaining Urgency.** The `AG-UI` protocol and `CopilotKit` are converging on a standard for agent-user interaction in frontend applications. Combined with `browser-use` (121k stars) and `chrome-devtools-mcp` (today's +717), there is a clear push to make AI agents first-class citizens of web and desktop interfaces — not just CLI tools.

2. **Agent-前端集成迫在眉睫**。AG-UI 协议与 CopilotKit 正在收敛为一个面向前端应用的标准协议，用于定义 Agent 与用户的交互方式。结合 `browser-use`（121k stars）和 `chrome-devtools-mcp`（今日 +717），行业正在强力推动将 AI Agent 打造成 Web 和桌面界面的头等公民——而不仅仅是命令行工具。

3. **Enterprise-Grade Agent Tooling Arrives.** Alibaba's `open-code-review` and Tencent's `LoopForge` represent the first wave of production-hardened agent infrastructure from major tech companies. Both bring deterministic pipelines, approval gates, and security-focused review — signals that AI agents are transitioning from experiments to regulated, auditable workflows in enterprise environments.

3. **企业级 Agent 工具链登场**。阿里巴巴的 `open-code-review` 和腾讯的 `LoopForge` 代表了大型科技公司推出的第一批生产级 Agent 基础设施。两者都具备确定性流水线、人工审批门禁和安全审查能力——这标志着 AI Agent 正在从实验阶段过渡到企业环境中的规范化、可审计工作流。

This aligns with the broader industry context: as reasoning models (Claude, GPT, Gemini) improve, the differentiator shifts from the model itself to the **tooling, skills, and evaluation infrastructure** that makes agents reliable in specific domains.

这与更广泛的行业背景相吻合：随着推理模型（Claude、GPT、Gemini）能力的不断提升，差异化竞争已从模型本身转向让 Agent 在特定领域可靠运行的**工具链、技能和评测基础设施**。

---

### 4. Community Hot Spots

### 四、社区热点项目

- **[ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui)** — The Agent-User Interaction Protocol is rapidly becoming the standard for embedding agents into frontend applications. With `CopilotKit` as a reference implementation and growing adoption, developers building agentic UIs should align with this protocol early.

- **[ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui)** — Agent-用户交互协议正在快速成为将 Agent 嵌入前端应用的标准。CopilotKit 作为参考实现已被广泛采用，建议开发者在构建 Agentic UI 时尽早对该协议进行适配。

- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** — Web data remains the primary bottleneck for agentic RAG. This project provides both a hosted API and a fully self-hostable crawler, solving the data ingestion problem that limits most knowledge-intensive agent applications.

- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** — 网页数据始终是 Agentic RAG 的主要瓶颈。该项目同时提供托管 API 和全自托管爬虫方案，解决了大多数知识密集型 Agent 应用所面临的数据摄取难题。

- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/NVIDIA-SkillEvaluator)** — As skill bundles proliferate, the ecosystem urgently needs evaluation standards. This framework provides quality gates and behavioral measurement — a foundational need that will become critical as the number of agent skills grows 10x in the next year.

- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** — 随着技能包数量激增，生态系统中对评测标准的需求已变得迫切。该框架提供质量门禁和行为度量能力——在 Agent 技能数量预计未来一年增长 10 倍的背景下，这一基础设施需求将变得至关重要。

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — A 2026 MLSys Best Paper demonstrating 97% storage savings for on-device RAG. With strong privacy and efficiency gains, this approach could reshape how memory-constrained agents handle long-term knowledge storage.

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — 2026 年 MLSys 最佳论文，展示了端侧 RAG 可实现 97% 的存储节省。凭借显著的隐私保护和效率优势，这一方案有望重塑内存受限 Agent 处理长期知识存储的方式。

- **[graphify](https://github.com/Graphify-Labs/graphify)** — Turning codebases, docs, and SQL schemas into queryable knowledge graphs via deterministic AST parsing (no vector store required) represents a fundamentally different approach to codebase-aware agents. This could become the preferred method for deep code understanding in agents like Claude Code and Cursor.

- **[graphify](https://github.com/Graphify-Labs/graphify)** — 通过确定性 AST 解析（无需向量数据库）将代码库、文档和 SQL schema 转换为可查询知识图谱，代表了一种从根本上不同的代码感知 Agent 构建路径。这有望成为 Claude Code 和 Cursor 等 Agent 实现深层代码理解的首选方案。

---

I'm verifying the URL structure — NVIDIA/SkillEvaluator is the correct path, and I'll maintain all original formatting while converting to natural Simplified Chinese with proper technical terminology. I need to be careful preserving the markdown structure, tables, code blocks, and ensuring all translated content maintains readability and technical accuracy.
</think>


## AI 开源趋势报告 — 2026年11月16日

---

### 一、今日要点

开源 AI 生态正在经历一场决定性的转变——从模型本身转向 **Agent 中心化的工具链和技能编排**。今日热榜被大量围绕代码 Agent（Claude Code、Codex 等）的扩展、评测和运维工具所占据，释放出一个明确信号：社区不再只是构建 Agent，而是在构建 **围绕 Agent 的基础设施层**。今日亮点：阿里巴巴发布了生产级别的代码审查工具，将确定性流水线与 LLM Agent 深度结合；Google 开源了面向代码 Agent 的 Chrome DevTools 集成方案；与此同时，一波"技能包"项目（交易、漏洞挖掘、Web 最佳实践）正在快速让 AI Agent 在垂直领域实现可组合化。在这场 Agent 热潮之外，以 GGML 为代表的底层基础设施依然保持稳健增长，说明社区在追逐 Agent 热潮的同时，仍然重视高效推理和本地 ML 执行能力。

---

### 二、各分类精选项目

#### 🔧 AI 基础设施

| 项目 | 语言 | Stars（总计/今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [ggml-org/ggml](https://github.com/ggml-org/ggml) | C++ | 0 (+43) | 面向机器学习的张量库，是高效端侧和本地 LLM 推理的基石；每日稳健的增量反映出社区对高效 ML 原语的持续依赖。 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0 (+717) | 通过 MCP 协议向代码 Agent 暴露 Chrome DevTools，使 Agent 能够检查、调试和操控真实浏览器页面——这是在 Agent 推理与真实浏览器环境之间架起的一座关键桥梁。 |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Python | 0 (+122) | 多层级 Agent 技能评测框架，支持质量门禁、合成数据集生成和实时行为度量；在 Agent 生态系统快速扩张的背景下，直击行业对标准化技能评测能力的迫切需求。 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (+247) | 基于开放 Agent Skills 标准构建的技能库，兼容 Antigravity、Gemini CLI、Claude Code 和 Cursor ——反映出市场对跨 Agent 可移植技能定义的强劲需求。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,595 | LLM 评测平台，覆盖知识、推理、编程、安全等 100+ 评测集；随着模型数量激增，对标准化评测基准的需求日益迫切，该项目的重要性持续上升。 |

#### 🤖 AI Agent / 工作流

| 项目 | 语言 | Stars（总计/今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | 0 (+866) | 面向 Agent 的协作工作空间，团队成员可一键对 Agent 输出进行标注、评审和反馈；今日最高单日 star 增量充分说明开发者对人机协同工具的强烈需求。 |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 0 (+423) | 支持 CodeBuddy、Codex、Claude Code 等代码 Agent 的自托管工作流编排平台，内置脚本化编排和人工审批门禁；面向需要对 Agent 部署拥有管控能力的企业团队。 |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 0 (+98) | 面向 Claude Code 的技能包，包含 82 项技能、15 个斜杠命令和覆盖 24 个漏洞类别的 681 种漏洞模式 ——一款专业的红队工具包，展示了如何将 Agent 能力注入安全研究场景。 |
| [alibaba/open-code-review](https://github.com/alibaba/alibaba-open-code-review) | Go | 0 (+691) | 经阿里巴巴大规模生产验证的代码审查方案，将确定性流水线与 LLM Agent 结合，提供多语言逐行安全审查（NPE、线程安全、XSS、SQL 注入等）；兼容 OpenAI 和 Anthropic API。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 263,655 | 通用型 Agent 框架，社区基础雄厚；定位为"与你共同成长的 Agent"，强调可扩展性和渐进式能力建设。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,717 | 面向 Agent 和生成式 UI 的前端技术栈，支持 React、Angular、移动端和 Slack 集成；该团队同时维护 AG-UI 协议，该协议正逐步成为 Agent 与前端通信的行业标准。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,590 | 占据主导地位的 Agent 工程平台，生态系统庞大；持续作为开发者构建 LLM 应用和 Agent 工作流的默认选择。 |

#### 📦 AI 应用

| 项目 | 语言 | Stars（总计/今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+988) | AI 办公 SDK，支持开发者将文档编辑、表格计算、协作和文件处理能力直接嵌入产品中，兼容人类用户和 AI Agent；今日最高单日 star 增量表明，市场对 AI 原生办公生产力工具的需求正在爆发。 |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 0 (+706) | 面向股票投资者的 Claude Code 技能集，覆盖市场分析、技术图表、经济日历和策略开发 ——展示了领域特定的技能包如何让通用型 Agent 在金融场景中即刻发挥价值。 |
| [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | TypeScript | 0 (+1,219) | 保持代码 Agent 与最新 Web 最佳实践的同步；今日绝对 star 增量最高，说明开发者在 Web 开发任务中将 Agent 的准确性和标准合规性放在首位。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 158,766 | 面向 Ollama、OpenAI API 及多种后端的友好型 AI 界面；持续的高 star 数量确立了其作为本地 AI 部署首选自托管前端的地位。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 202,090 | 通过网页数据抓取为 AI Agent 注入超能力；通过解决 Agent 在开放域任务中的数据获取瓶颈，向"超级智能"目标迈进。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 121,123 | 面向 AI 浏览器 Agent 的开源库，提供云端隐形浏览器和 Agent API；弥合了推理模型与真实 Web 交互任务之间的鸿沟。 |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,225 | 构建 Agentic 工作流和 RAG 流水线，支持丰富的 AI 模型和工具生态；帮助团队将 AI 应用从原型快速推进到生产环境。 |

#### 🧠 大模型 / 训练

| 项目 | 语言 | Stars（总计/今日） | 简介 |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 201,643 | 支撑整个 AI/ML 领域的基础框架；在研究与生产环境中的训练、推理和部署环节依然不可或缺。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,026 | 涵盖文本

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*