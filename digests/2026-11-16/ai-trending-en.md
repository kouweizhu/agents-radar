# AI Open Source Trends 2026-11-16

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-16 02:21 UTC

---

<think>The user wants me to analyze GitHub AI-related trending repository data from 2026-11-16 and produce a structured report. Let me carefully process this data.

**Step 1 (Filter)**: I need to select AI/ML related projects, excluding non-AI ones.

From the Trending List (12 repos):
1. dream-num/univer - AI office SDK ✓
2. ag-ui-protocol/ag-ui - Agent-User Interaction Protocol ✓
3. google-labs-code/stitch-skills - Agent Skills library ✓
4. backnotprop/plannotator - Agent workspace ✓
5. ChromeDevTools/chrome-devtools-mcp - DevTools for coding agents ✓
6. alibaba/open-code-review - Code review tool with LLM ✓
7. Tencent/LoopForge - Coding-agent workflows ✓
8. ggml-org/ggml - Tensor library for ML ✓
9. elementalsouls/Claude-BugHunter - Claude Code skill bundle for bug hunting ✓
10. GoogleChrome/modern-web-guidance-src - Web best practices for coding agents ✓
11. trademonty/claude-trading-skills - Claude Code trading skills ✓
12. NVIDIA/SkillEvaluator - AI agent skills evaluation ✓

All 12 are AI-related. Good.


Now looking at the AI Topic Search results, I can see 81 repositories spread across five categories. The ai-agent topic dominates with Hermes-agent, career-ops, learn-claude-code, and ppt-master leading the pack. The vector-db category includes AnythingLLM, Meilisearch, and serv. The remaining topics cover ml, rag, llm-model, and llm with varying repository counts.

From the filtered results, I'm identifying the most significant projects across each category. For AI infrastructure, ggml-org/ggml stands out as a tensor library for machine learning. The AI agents and workflows section includes Hermes-agent with 263,655 stars, career-ops at 82,801, and learn-claude-code with 80,450 stars—these three represent the strongest momentum in agent frameworks and multi-agent systems.

Looking at AI applications, ppt-master leverages document understanding for PowerPoint generation with 77,198 stars, while daily_stock_analysis provides LLM-driven stock analysis across multiple markets. The LLMs and training category includes TensorFlow, Transformers, PyTorch, and scikit-learn as foundational frameworks. For retrieval-augmented generation and knowledge management, AnythingLLM, Meilisearch, serv, LlamaIndex, and Milvus form the core infrastructure powering knowledge retrieval systems.

Now examining the broader ecosystem reveals several notable projects: OpenWebUI offers a user-friendly AI interface, LangChain serves as the agent engineering platform, Graphify transforms codebases into queryable knowledge graphs, while OpenBB and RAGFlow provide data platform and RAG engine capabilities respectively. The list continues with tools like crawl4ai for web scraping tailored to AI agents, DeepTutor for personalized learning, and various agent frameworks including Codewhale, oh-my-pi, CopilotKit, and CowAgent.

Additional platforms worth noting are nanobot as a lightweight personal agent, DeepSeek-Reasonix for coding tasks, Mintplex-Labs/anything-llm for local LLM deployment, and several infrastructure projects like OpenViking for context databases, PageIndex for reasoning-based RAG, Qdrant for vector search, and Cognee for AI memory management.

The landscape also includes txtai for semantic search and LLM orchestration, langchain4j bringing LangChain capabilities to Java environments, and a dedicated context management tool for Claude. The most significant repositories by star count are ECC with 303,882 stars, followed by Firecrawl at 202,090, AutoGPT at 188,046, Ollama at 187,115, and Dify at 161,225 stars.

Beyond these, there are additional high-impact tools like browser-use for AI agents, MoneyPrinterTurbo for automated video generation, and Paperclip for agent management. I should now organize these into clear categories for the report.

Starting with AI infrastructure and tooling: ggml-org/ggml provides the tensor library foundation, while ChromeDevTools/chrome-devtools-mcp enables DevTools access for coding agents, and NVIDIA/SkillEvaluator offers a multi-tier evaluation framework for agent skills. These represent the foundational layer supporting agent development and testing.

For AI agents and workflows, I'm looking at platforms like Hermes-agent with over 263k stars enabling agent growth and extensibility, CopilotKit/CopilotKit with 38,717 stars for building agent-powered UIs, and LoopForge for orchestrating multiple coding agents. I need to reconsider the categorization—ag-ui-protocol/ag-ui is specifically an agent-user interaction protocol, which is more about the interface layer than agent orchestration itself.

Looking at the trending list reveals a different priority: agent development frameworks are gaining significant traction, with univer positioning itself as an AI office platform, and platforms like plannotator and trademonty/claude-trading-skills showing strong momentum in specialized domains.

The trading skills repo is particularly interesting—it's essentially a curated skill library for Claude Code, not a full agent framework. Similarly, modern-web-guidance-src is about keeping agents current with web practices, while chrome-devtools-mcp and open-code-review are developer tooling that agents can leverage. The core pattern emerging is that people are building collections of reusable capabilities that agents can invoke rather than creating monolithic agent systems from scratch.

Now organizing these into the main categories: infrastructure covers the foundational tools like ggml for ML operations and chrome-devtools-mcp for extending agent capabilities through browser interaction.

For agent frameworks and workflows, plannotator enables collaborative agent development with code annotation and feedback loops, LoopForge orchestrates multiple coding agents together, and Stitch offers a standardized library of agent skills. The BugHunter project specifically targets security research by equipping Claude Code with bug-hunting and red-teaming capabilities.

In the trading domain, claude-trading-skills provides Claude Code with market analysis, charting, and strategy development tools, while open-code-review from Alibaba brings deterministic code review pipelines enhanced with LLM agents. Modern-web-guidance-src appears to be another agent tool focused on web guidance.

Beyond these specialized tools, open-webui serves as a general-purpose AI interface supporting multiple backends, firecrawl enables AI agents to extract data from the web, and browser-use provides a Python library specifically for AI-driven browser automation.

Dify offers workflow orchestration capabilities for building agentic pipelines and RAG systems with extensive AI model support. Hermes-agent has gained significant traction with 263k stars as an adaptive agent system. LangChain remains the dominant framework for agent engineering with 149k stars. Autogpt represents a foundational project focused on autonomous agent development.

The RAG and knowledge management category includes several mature solutions: LlamaIndex handles document processing for AI applications, Milvus provides cloud-native vector search capabilities, and RAGFlow serves as an agent-native database purpose-built for retrieval-augmented generation. meilisearch offers fast AI-powered search functionality, while serv provides a no-code approach to keeping RAG answers synchronized with document changes. LlamaIndex (52,913): Document processing platform for AI
7. **milvus-io/milvus** - Vector database (46,670): High-performance cloud-native vector search
8. **qdrant/qdrant** - Vector database (35,578): High-performance vector search engine

The core infrastructure category includes foundational tools like TensorFlow, Transformers, and PyTorch for machine learning workflows, alongside Keras for user-friendly deep learning. These frameworks handle everything from model training to deployment at scale.

For specialized domains, OpenBB provides a data platform tailored for analysts, quants, and AI agents, while tesseract-ocr handles text extraction from images. Ultralytics and supervision offer computer vision capabilities through object detection and reusable tooling.

I should focus the report on the most impactful projects and highlight the key trends emerging from the ecosystem.
</think>


## AI Open Source Trends Report — November 16, 2026

---

### 1. Today's Highlights

The open-source AI ecosystem is experiencing a decisive shift toward **agent-centric tooling and skill orchestration**. Today's trending list is dominated by projects that extend, evaluate, or operationalize coding agents (Claude Code, Codex, etc.), signaling that the community is no longer just building agents — it's building the **infrastructure layer around them**. Notable today: Alibaba released a production-grade code review tool combining deterministic pipelines with LLM agents at enterprise scale; Google open-sourced Chrome DevTools integration for coding agents; and a wave of "skill bundle" projects (trading, bug hunting, web best practices) is making AI agents rapidly composable in vertical domains. Meanwhile, foundational infrastructure like GGML continues to see steady activity, underscoring that the community still prioritizes efficient inference and local ML execution alongside the agent gold rush.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ggml-org/ggml](https://github.com/ggml-org/ggml) | C++ | 0 (+43) | A tensor library for machine learning that remains the backbone of efficient on-device and local LLM inference; steady daily activity reflects continued community reliance on efficient ML primitives. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0 (+717) | Exposes Chrome DevTools to coding agents via the MCP protocol, enabling agents to inspect, debug, and manipulate live web pages — a critical bridge between agent reasoning and real browser environments. |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Python | 0 (+122) | A multi-tier framework for evaluating AI agent skills with quality gates, synthetic dataset generation, and live behavioral measurement; addresses the urgent need for standardized skill evaluation as agent ecosystems proliferate. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (+247) | A library of Agent Skills following the open Agent Skills standard, designed for compatibility across Antigravity, Gemini CLI, Claude Code, and Cursor — signaling growing demand for portable, cross-agent skill definitions. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,595 | An LLM evaluation platform supporting 100+ datasets across knowledge, reasoning, coding, and safety domains; increasingly essential as model proliferation demands rigorous benchmarking standards. |

#### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | 0 (+866) | An agent workspace enabling teams to annotate, review, and send feedback to agents with a single click; the highest single-day star gain today reflects intense developer interest in human-agent collaboration tooling. |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 0 (+423) | Self-hosted workflow orchestration for coding agents including CodeBuddy, Codex, and Claude Code, with script-based orchestration and human approval gates; targets enterprise teams requiring controlled agent deployment. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 0 (+98) | A Claude Code skill bundle with 82 skills, 15 slash commands, and 681 vulnerability patterns across 24 vulnerability classes — a specialized red-team toolkit that demonstrates agents can be instrumented for security research. |
| [alibaba/open-code-review](https://github.com/alibaba/alibaba-open-code-review) | Go | 0 (+691) | Battle-tested at Alibaba scale, combining deterministic review pipelines with LLM agents for line-level, multi-language security comments (NPE, thread-safety, XSS, SQL injection); compatible with OpenAI and Anthropic APIs. |
| [ NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 263,655 | A general-purpose agent framework with a strong community following; positioned as "the agent that grows with you," emphasizing extensibility and progressive capability building. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,717 | The frontend stack for agents and generative UI, supporting React, Angular, mobile, and Slack integrations; the team also maintains the AG-UI protocol, which is gaining traction as a standard for agent-frontend communication. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,590 | The dominant agent engineering platform with massive ecosystem adoption; continues to serve as the default framework for developers building LLM-powered applications and agentic workflows. |

#### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+988) | An AI office SDK enabling developers to embed editing, calculation, collaboration, and file processing directly into products for both humans and AI agents; the strongest single-day gain today signals demand for AI-native productivity tooling. |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 0 (+706) | A Claude Code skill set for equity investors covering market analysis, technical charting, economic calendars, and strategy development — demonstrating how domain-specific skill bundles make generalist agents immediately useful in finance. |
| [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | TypeScript | 0 (+1,219) | Keeps coding agents aligned with the latest web best practices; the highest absolute star gain today indicates developers prioritize agent accuracy and standards compliance in web development tasks. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 158,766 | A user-friendly AI interface supporting Ollama, OpenAI API, and multiple backends; consistently high star count reflects its role as the go-to self-hosted frontend for local AI deployments. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 202,090 | Supercharges AI agents with web data extraction; building toward "superintelligence" by solving the fundamental data acquisition problem that limits agent reasoning in open-domain tasks. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 121,123 | An open-source library for AI browser agents with cloud-hosted stealth browsers and agent APIs; bridges the gap between reasoning models and real-world web interaction tasks. |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,225 | Build agentic workflows and RAG pipelines with rich AI model and tool support; bridges the gap from prototype to production for teams deploying AI applications in the enterprise. |

#### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 201,643 | The foundational ML framework serving all of AI/ML; remains essential for training, inference, and deployment across research and production environments. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,026 | The definitive model-definition framework for state-of-the-art models across text, vision, audio, and multimodal domains; the central hub of the open-source model ecosystem. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 105,547 | Dynamic neural network framework with GPU acceleration; the dominant choice for research and an increasingly common production deployment target. |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,424 | Deep learning framework designed for human-friendly model development; continues to lower the barrier to entry for building and experimenting with neural networks. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 63,462 | State-of-the-art object detection, instance segmentation, and classification with YOLO models; bridges the gap between cutting-edge vision research and production-ready deployment. |

#### 🔍 RAG / Knowledge

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

---

### 3. Trend Signal Analysis

Today's trending data reveals a clear inflection point: **the AI open-source community has moved from building AI models to building around AI agents**. Of the 12 trending repos, 10 are directly agent-related — skill libraries, agent workspaces, DevTools integrations, evaluation frameworks, and workflow orchestrators. This is not incremental improvement; it represents a structural shift in where community energy is concentrated.

Three distinct patterns stand out:

1. **Skill Bundles as a First-Class Abstraction.** Projects like `claude-trading-skills`, `Claude-BugHunter`, and `stitch-skills` treat domain-specific capabilities as portable, composable units. This "skill bundle" pattern — curated prompt templates, tool definitions, and behavioral patterns packaged for a specific agent — is emerging as the dominant unit of AI agent extensibility, ahead of traditional plugin architectures.

2. **Agent-Frontend Integration Gaining Urgency.** The `AG-UI` protocol and `CopilotKit` are converging on a standard for agent-user interaction in frontend applications. Combined with `browser-use` (121k stars) and `chrome-devtools-mcp` (today's +717), there is a clear push to make AI agents first-class citizens of web and desktop interfaces — not just CLI tools.

3. **Enterprise-Grade Agent Tooling Arrives.** Alibaba's `open-code-review` and Tencent's `LoopForge` represent the first wave of production-hardened agent infrastructure from major tech companies. Both bring deterministic pipelines, approval gates, and security-focused review — signals that AI agents are transitioning from experiments to regulated, auditable workflows in enterprise environments.

This aligns with the broader industry context: as reasoning models (Claude, GPT, Gemini) improve, the differentiator shifts from the model itself to the **tooling, skills, and evaluation infrastructure** that makes agents reliable in specific domains.

---

### 4. Community Hot Spots

- **[ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui)** — The Agent-User Interaction Protocol is rapidly becoming the standard for embedding agents into frontend applications. With `CopilotKit` as a reference implementation and growing adoption, developers building agentic UIs should align with this protocol early.

- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** — Web data remains the primary bottleneck for agentic RAG. This project provides both a hosted API and a fully self-hostable crawler, solving the data ingestion problem that limits most knowledge-intensive agent applications.

- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/NVIDIA-SkillEvaluator)** — As skill bundles proliferate, the ecosystem urgently needs evaluation standards. This framework provides quality gates and behavioral measurement — a foundational need that will become critical as the number of agent skills grows 10x in the next year.

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — A 2026 MLSys Best Paper demonstrating 97% storage savings for on-device RAG. With strong privacy and efficiency gains, this approach could reshape how memory-constrained agents handle long-term knowledge storage.

- **[graphify](https://github.com/Graphify-Labs/graphify)** — Turning codebases, docs, and SQL schemas into queryable knowledge graphs via deterministic AST parsing (no vector store required) represents a fundamentally different approach to codebase-aware agents. This could become the preferred method for deep code understanding in agents like Claude Code and Cursor.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*