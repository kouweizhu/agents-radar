# AI Open Source Trends 2026-09-18

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-18 00:44 UTC

---

<think>The user wants me to analyze GitHub AI-related trending repository data from 2026-09-18. Let me follow the steps:

1. **Filter**: Select AI/ML-related projects from the 20 trending repos and 81 topic search results
2. **Categorize**: Group into AI Infrastructure, AI Agents/Workflows, AI Applications, LLMs/Training, RAG/Knowledge
3. **Output Report**: Structured with Today's Highlights, Top Projects by Category tables, Trend Signal Analysis, and Community Hot Spots

Let me start by filtering the trending repos:

From the 20 trending repos, these are AI-related:
1. alibaba/open-code-review - AI code review tool ✓
2. cloudflare/security-audit-skill - Security audit AI agent ✓
3. addyosmani/agent-skills - AI coding agent skills ✓
4. Tencent/BrowserSkill - Browser automation for AI agents ✓
5. alphaXiv/OpenResearch - Research agents ✓
6. anthropics/claude-code - Agentic coding tool ✓
7. anthropics/knowledge-work-plugins - Knowledge work plugins ✓
8. Tencent/WeKnora - LLM knowledge platform/RAG ✓
9. jamiepine/voicebox - AI voice studio ✓
10. affaan-m/ECC - Agent harness optimization ✓
11. roboflow/supervision - Computer vision tools ✓
12. JustVugg/colibri - MoE model inference engine ✓
13. TencentCloud/Octop - AI assistant/multi-agent ✓
14. cline/cline - Autonomous coding agent ✓
15. n8n-io/n8n - Workflow automation with AI ✓

Non-AI:
- NationalSecurityAgency/ghidra - Reverse engineering framework (not AI)
- abue-ammar/tinycast - macOS launcher (not AI)


- cilium/cilium - eBPF networking (not AI)
- ever-co/ever-gauzy - Business management platform (not AI)
- coder/coder - Developer environments (could be AI-related but more devops)

Now for topic search results - they're all AI-related based on topics like llm-model, vector-db, ml, llm, rag, ai-agent.

Now let me categorize:

**AI Infrastructure** (frameworks, SDKs, inference engines, dev tools, CLI):
- alibaba/open-code-review
- anthropics/claude-code
- cline/cline
- n8n-io/n8n
- Tencent/BrowserSkill
- addyosmani/agent-skills
- JustVugg/colibri

**AI Agents / Workflows**:
- cloudflare/security-audit-skill
- alphaXiv/OpenResearch
- anthropics/knowledge-work-plugins
- Tencent/WeKnora (could be RAG too)
- TencentCloud/Octop
- affaan-m/ECC

**AI Applications**:
- jamiepine/voicebox
- roboflow/supervision

**LLMs / Training**:
- jingyaogong/minimind
- 0xPlaygrounds/rig
- open-compass/opencompass
- skyzh/tiny-llm
- ultralytics/ultralytics
- tensorflow/pytorch/etc

**RAG / Knowledge**:
- Mintplex-Labs/anything-llm
- meilisearch/meilisearch
- run-llama/llama_index
- milvus-io/milvus
- qdrant/qdrant
- topoteretes/cognee
- NirDiamant/RAG_Techniques
- weaviate/weaviate
- langchain4j/langchain4j
- lancedb/lancedb
- Shubhamsaboo/awesome-llm-apps
- infiniflow/ragflow
- mem0ai/mem0
- headroom

Now I'm compiling the most compelling projects to showcase, prioritizing those with significant momentum and engagement across the different categories.

From today's trending list, these projects stand out with their recent activity: alibaba/open-code-review leading at 3,286 stars, followed by cloudflare/security-audit-skill at 3,607, Tencent/BrowserSkill at 1,302, and Tencent/WeKnora at 1,125. The complete ranking shows affaan-m/ECC at 1,171, JustVugg/colibri at 873, alphaXiv/OpenResearch at 939, NationalSecurityAgency/ghidra at 912, anthropics/claude-code at 538, and cline/cline at 380, with several others in the 200-367 range.

I should structure the analysis to highlight the top performers across each category, focusing on the projects with the strongest recent growth.</think>

# AI Open Source Trends Report — September 18, 2026

## 1. Today's Highlights

The GitHub trending landscape today reveals a **massive surge in AI agent tooling**, with security-focused and coding-specific agents dominating the hot list. Cloudflare's security-audit-skill leads with +3,607 stars, followed by Alibaba's hybrid code review system at +3,286 — signaling enterprise demand for specialized, deterministic AI coding assistants. Notably, **browser automation for AI agents** (Tencent/BrowserSkill) and **research-oriented agents** (alphaXiv/OpenResearch) represent emerging niches gaining rapid traction. The continued high velocity of agent-related projects underscores the industry's pivot from pure LLM APIs toward full-fledged autonomous systems.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | TypeScript | ⭐0 (+538) | Agentic coding tool living in the terminal that understands codebases, executes routine tasks, handles git workflows via natural language. Direct from Anthropic — the most authoritative signal of where coding agents are heading. |
| [cline/cline](https://github.com/cline/cline) | TypeScript | ⭐0 (+380) | Autonomous coding agent available as SDK, IDE extension, or CLI. Differentiates by offering multiple deployment modes for different developer workflows. |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | TypeScript | ⭐0 (+1,302) | Enables AI agents to use real, logged-in browsers without interrupting user work. CLI + extension for cross-agent browser automation — critical infrastructure for web-capable agents. |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | ⭐0 (+873) | Pure C, zero-dependency inference engine for MoE models that streams experts from disk. Targets developers running frontier models on consumer hardware — a notable efficiency play. |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | TypeScript | ⭐0 (+281) | Fair-code workflow automation platform with native AI capabilities. 400+ integrations combined with visual building and custom code — bridges traditional automation with AI agents. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | ⭐0 (+3,607) | Multi-phase security audit coding agent with independently verified, machine-readable findings. The highest-gaining project today — security-specific agents are clearly in demand. |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | ⭐0 (+3,286) | Battle-tested hybrid architecture code review: deterministic pipelines + LLM Agent with line-level comments and multi-language rulesets (NPE, thread-safety, XSS, SQL injection). Enterprise-grade validation. |
| [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Rust | ⭐0 (+939) | Transforms coding agents into research agents — a nascent but strategic category targeting academic and R&D workflows. |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | Go | ⭐0 (+1,125) | Open-source LLM knowledge platform combining raw documents → queryable RAG → autonomous reasoning agent → self-maintaining Wiki. Full-stack knowledge agent in a single repo. |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | Python | ⭐0 (+367) | Self-hosted AI assistant supporting multi-user, multi-agent architectures. Positions as a smarter alternative to basic chatbots for team environments. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | ⭐261,165 (+1,171) | Agent harness performance optimization system with skills, instincts, memory, security, and research-first development patterns for Claude Code, Codex, Cursor and beyond. Massive existing community (261k stars). |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | TypeScript | ⭐0 (+667) | Open-source AI voice studio for cloning, dictation, and audio creation. Democratizes voice AI with a self-hosted alternative to proprietary voice APIs. |
| [roboflow/supervision](https://github.com/roboflow/supervision) | Python | ⭐50,802 (+329) | Reusable computer vision tools — the highest-momentum computer vision library in the ecosystem. Used widely for detection, tracking, and annotation pipelines. |
| [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Rust | ⭐0 (+939) | Turns coding agents into research agents — a vertical application targeting the academic/R&D segment. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | ⭐61,486 | Train a 64M-parameter LLM from scratch in just 2 hours — the standout educational project making LLMs accessible to individual developers. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | ⭐8,656 | Build modular and scalable LLM applications in Rust — the only major Rust-based LLM framework, targeting systems-level AI engineering. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | ⭐7,451 | LLM evaluation platform supporting 100+ datasets and models including Llama3, Mistral, GPT-4, Claude, Qwen, GLM. Essential for benchmarking in the era of model proliferation. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | ⭐4,576 | Learn LLM inference on Apple Silicon — builds a tiny vLLM + Qwen for systems engineers. Educational focus on inference optimization. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | ⭐61,729 | YOLO27/26/11/8 for detection, segmentation, classification, pose estimation. The most starred computer vision model library — now expanding into multimodal. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | ⭐105,157 | Implement a ChatGPT-like LLM in PyTorch step by step — the definitive educational resource for understanding transformer architecture. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | ⭐66,143 | Local-first agent experience with full document handling — positions as the anti-rental alternative to closed AI services. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | ⭐52,204 | Document processing platform for AI — the foundational framework for building RAG systems, now deeply integrated with the broader langchain ecosystem. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | ⭐34,643 | High-performance vector database for next-gen AI — Rust-based for performance, cloud-available, and increasingly the default for production RAG. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | ⭐30,790 | Open-source AI memory platform for agents — gives persistent long-term memory across sessions with a self-hosted knowledge graph engine. Addresses the memory bottleneck in agentic systems. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | ⭐65,521 | Memory layer for AI agents — drop-in infrastructure for persistent context. One of the fastest-growing RAG-adjacent projects, critical for multi-turn agent conversations. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | ⭐90,896 | Leading open-source RAG engine fusing RAG with Agent capabilities — positions as the "superior context layer" for LLMs. |

---

## 3. Trend Signal Analysis

Today's data reveals **three distinct waves of momentum** in the AI open-source ecosystem:

**Wave 1: Specialized AI Agents** — The most explosive growth is in domain-specific agents rather than general-purpose assistants. Cloudflare's security-audit-skill (+3,607) and Alibaba's code-review tool (+3,286) demonstrate that enterprises value deterministic, rule-backed AI systems over pure stochastic models. This aligns with the industry trend toward "agentic AI" with guardrails.

**Wave 2: Agent Infrastructure** — Browser automation (BrowserSkill), research agents (OpenResearch), and multi-agent orchestration (Octop) represent the **tooling layer** maturing around core LLMs. The emergence of Rust-based agent frameworks (rig, OpenResearch) signals a performance-conscious shift away from Python-only ecosystems.

**Wave 3: Memory & Knowledge** — The RAG/Knowledge category shows sustained high engagement (anything-llm at 66k stars, cognee at 30k). Notably, **agent memory** (mem0, cognee) is emerging as a distinct sub-category — reflecting the practical challenge of maintaining context across long-running agentic workflows.

The **Colibri** project (pure C MoE inference) is a standout outlier: it signals growing interest in **edge/local inference** as a counterweight to cloud API dependency.

---

## 4. Community Hot Spots

- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** — Security-specific agents are having a moment. This project validates that the market wants AI that audits, not just generates code. Worth watching for similar vertical agents (compliance, testing, DevOps).

- **[Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill)** — Web-capable agents are the next frontier. If you're building agentic systems, browser automation infrastructure is becoming essential. The CLI + extension approach is developer-friendly.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Memory infrastructure for agents is the most underappreciated category. As agents become more autonomous, persistent memory across sessions becomes a fundamental requirement.

- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** — Pure C, zero-dep MoE inference is a bold technical direction. If successful, it could enable local deployment of frontier models on consumer hardware — a major unlock for the ecosystem.

- **[anthropics/claude-code](https://github.com/anthropics/claude-code)** — Direct from the model provider, this is the canonical reference for how coding agents should behave. Its feature set (terminal-based, git-aware, codebase-understanding) defines the target state for the industry.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*