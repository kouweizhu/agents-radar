# AI Open Source Trends 2026-11-03

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-03 03:40 UTC

---

<think>Let me analyze the data provided and create a structured AI Open Source Trends Report.

First, I need to filter for AI-related projects, then categorize them.

Looking at the trending list (15 repos):
1. vercel-labs/agent-desktop - AI agent CLI (AI)
2. thedotmack/claude-mem - Agent memory/context (AI)
3. D4Vinci/Scrapling - Web scraping framework (Not AI)
4. hyprwm/Hyprland - Wayland compositor (Not AI)
5. Donchitos/Claude-Code-Game-Studios - AI game dev (AI)
6. FlashML-org/FreeToken - Model serving (AI)
7. pingdotgg/t3code - Unknown (need to check)
8. shiyu-coder/Kronos - Financial markets LLM (AI)
9. kornia/kornia - Geometric computer vision (AI)
10. JustVugg/colibri - MoE model running (AI)
11. mattpocock/skills - Agent skills (AI)
12. max-sixty/worktrunk - Git worktree management (Not AI)
13. paperclipai/paperclip - Agent management (AI)
14. karpathy/nanochat - ChatGPT alternative (AI)
15. p-e-w/heretic - LLM modification (AI)

From Topic Search (81 repos) - all seem AI-related based on topic tags.

Now let me categorize:

**AI Infrastructure:**
- vercel-labs/agent-desktop
- FlashML-org/FreeToken
- JustVugg/colibri
- 0xPlaygrounds/rig (Rust LLM framework)
- open-compass/opencompass (LLM evaluation)
- kornia/kornia (computer vision)
- max-sixty/worktrunk (maybe - but it's git worktree, not really AI)


- 

I'll continue categorizing the remaining AI-related projects, focusing on agents, applications, and LLM-specific tools. The agent and workflow projects show interesting developments in AI automation and multi-agent systems. I'm seeing a strong trend towards specialized AI tools for development, gaming, and skill management. The financial and chat applications demonstrate the expanding versatility of AI technologies across different domains.

The next category highlights advanced AI agent frameworks like OpenAI's agent platform, emphasizing open-source AI agent development with impressive star counts and community engagement. These projects represent the cutting edge of AI workflow and automation technologies.

RAG and knowledge projects reveal sophisticated approaches to data retrieval and knowledge management. Vector databases like Anything-LLM and Milvus are enabling advanced information processing, while RAG-specific tools like LangChain and Open WebUI are pushing boundaries in AI interaction and knowledge extraction.

The emerging trend showcases innovative memory solutions like Claude-mem, indicating a shift towards persistent, context-aware AI systems that can maintain and leverage information across interactions.</think>

# AI Open Source Trends Report — 2026-11-03

## 1. Today's Highlights

Today's trending AI repos reveal two major themes: **AI agent infrastructure** and **local/lightweight AI deployment**. The standout is Vercel's `agent-desktop` (Rust-based computer use CLI) earning 2,275 stars in a single day, signaling strong developer appetite for production-grade agent tooling. Meanwhile, memory/persistence solutions like `claude-mem` (1,803 stars) and `colibri` (675 stars, pure C MoE engine) underscore the industry's push toward stateless-to-stateful agent architectures. The emergence of financial domain LLMs (`Kronos`) and game-studio automation frameworks (`Claude-Code-Game-Studios`) highlights vertical specialization accelerating.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Rust | 0 (+2,275) | Vercel's computer use CLI for AI agents —首个生产级 agent 桌面交互框架，Rust 性能 + Vercel 生态加持 |
| [FlashML-org/FreeToken](https://github.com/FlashML-org/FreeToken) | Python | 0 (+653) | Desktop-scale model serving for massive local models —数据中心级推理能力下沉至消费硬件 |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | 0 (+675) | Pure C, zero-dependency MoE model runner with on-demand expert streaming —极致轻量化的边缘推理引擎 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,052 | Modular LLM application framework in Rust —类型安全 + 零成本抽象的下一代 AI 基础设施 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,563 | LLM evaluation platform supporting 100+ datasets —全维度模型评测事实标准 |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Shell | 0 (+1,379) | 49 AI agents + 72 workflow skills for game development —首个完整游戏工作室层级化 agent 编排系统 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | TypeScript | 0 (+412) | Open-source agent management platform —工作流编排 + 团队协作一体化 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0 (+858) | Real engineer skills for AI agents —来自 .agents 目录的实战技能库 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 259,915 | 自主成长的 AI agent 框架 —社区最大体量的单体 agent 项目 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,478 | Frontend stack for agents + AG-UI Protocol —前端 agent 集成的事实标准 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 119,883 | AI browser agents + cloud stealth browsing —网页自动化 agent 基础设施 |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | 0 (+857) | Financial markets foundation model —首个专注于金融语言的 LLM 基座 |
| [karpathy/nanochat](https://github.com/karpathy/nanochat) | Python | 0 (+321) | Budget ChatGPT implementation (~$100 hardware) — Andrej Karpathy 的极致性价比方案 |
| [kornia/kornia](https://github.com/kornia/kornia) | Python | 0 (+412) | Geometric computer vision for spatial AI —CV 领域的 PyTorch Geometric |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | Python | 0 (+420) | Training-free LLM modification (remove censorship, reduce slop) —无需重训练的行为对齐工具 |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 168,460 | Model-definition framework for SOTA ML models —行业基石项目 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 185,728 | Local LLM running (Kimi, GLM, DeepSeek, Qwen, Gemma) —本地推理标准栈 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter | 107,719 | Implement ChatGPT-like LLM in PyTorch from scratch —学习 LLM 内部原理的最佳教程 |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 160,273 | Build agentic workflows & RAG pipelines —LLM 应用开发平台 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 201,276 | Open source ML framework —老牌框架仍具影响力 |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 110,889 (+1,803) | Persistent context across agent sessions with AI compression —跨会话记忆的事实标准 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 157,592 | User-friendly AI interface (Ollama, OpenAI API) —本地 LLM UI 首选 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,303 | Memory layer for AI agents —生产级 agent 记忆基础设施 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,568 | Cloud-native vector database —大规模向量检索工业标准 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,398 | High-performance vector search engine —Rust 向量库性能标杆 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 141,287 | Codebase → queryable knowledge graph —代码理解 + RAG 新范式 |

---

## 3. Trend Signal Analysis

Today's data reveals **three intersecting waves**:

1. **Agent Desktop & CLI Tools** — Vercel's `agent-desktop` (2,275 stars) and `worktrunk` (77 stars, git worktree for parallel agent workflows) indicate a shift from "agent in browser" to "agent as CLI/terminal citizen." This aligns with the productionization trend: agents are moving from experimental demos to developer workflows.

2. **Memory & State Persistence** — The 1,803-star surge in `claude-mem` and strong vector DB activity (Milvus, Qdrant, LanceDB) confirm that **stateless → stateful agent** transition is the #1 infra challenge. Projects solving context window limitations via external memory are capturing outsized attention.

3. **Local/Small-Scale Inference** — `colibri` (pure C MoE), `FreeToken` (desktop model serving), and `nanochat` (~$100 hardware) form a cluster around **edge/consumer-grade AI deployment**. This suggests democratization pressure as API costs rise.

No entirely new tech stacks appeared, but the **Rust + AI agent** combination (agent-desktop, rig) represents a notable acceleration — previously Python-dominated.

---

## 4. Community Hot Spots

- **[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)** — Watch Vercel's entry into agent infrastructure; likely to become the standard for CLI-based computer use agents.
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — Memory persistence is the bottleneck; this project bridges short-context LLMs to unlimited-session agents.
- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** — First trending financial LLM in recent months; signals domain-specific fine-tuning momentum.
- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** — Pure C implementation of MoE streaming is a architectural pattern worth tracking for edge AI.
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — AST-based code knowledge graph bypasses vector RAG limitations; could redefine code-understanding tooling.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*