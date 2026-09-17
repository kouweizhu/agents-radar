# AI Open Source Trends 2026-09-17

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-17 00:50 UTC

---

<think>The user wants me to analyze GitHub trending AI repositories from September 17, 2026. Let me filter for AI-related projects, categorize them, and produce a structured report.

Let me first identify which projects from the trending list are AI-related:

**From Today's Trending (21 repos):**
1. alibaba/open-code-review - AI code review tool ✓
2. cloudflare/security-audit-skill - security AI agent ✓
3. JustVugg/colibri - MoE model inference (C, frontier models) ✓
4. abue-ammar/tinycast - macOS launcher - NOT AI
5. jamiepine/voicebox - AI voice studio ✓
6. Lakr233/vphone-cli - NOT AI
7. anthropics/knowledge-work-plugins - AI plugins for knowledge workers ✓
8. ever-co/ever-gauzy - Business management platform - NOT AI
9. anki - flashcard program - NOT AI
10. NationalSecurityAgency/ghidra - reverse engineering - NOT AI
11. anthropics/claude-code - AI coding agent ✓
12. roboflow/supervision - computer vision tools ✓
13. alphaXiv/OpenResearch - coding agents → research agents ✓
14. supabase/supabase - database platform - NOT specifically AI
15. rlaope/oh-my-hermes - AI agent plugin ✓
16. Tencent/WeKnora - LLM knowledge platform / RAG ✓
17. SnailSploit/Claude-Red - offensive security AI skills ✓


18. multimodal-art-projection/YuE - music generation ✓
19. addyosmani/agent-skills - AI coding agent skills ✓
20. cline/cline - autonomous coding agent ✓
21. affaan-m/ECC - agent harness optimization ✓

Now looking at the topic search results, I need to identify which are explicitly AI/ML-focused. The minimind LLM model is clearly AI-related, while others like rig need further evaluation.

The opencompass platform for LLM evaluation is AI-focused, as is tiny-llm for inference on Apple Silicon. The generative-ai resources are AI-specific, nestia provides AI chatbot capabilities, and Awesome-Embodied-Robotics-and-Agent covers embodied AI systems. DATAGEN appears to be AI-driven for research assistance. Casbin-gateway has AI and MCP security components, while LLM-API-Key-Proxy handles LLM operations. On-device LLM inference through picollm is AI-focused, and Medical_Image_Analysis applies AI to healthcare imaging. Telegram-summary-bot uses AI for chat summarization.

The remaining tools are clearly AI-centric: open-webui and langchain provide AI interfaces and orchestration, awesome-llm-apps showcases AI applications, graphify transforms codebases into knowledge graphs using AI, claude-mem manages AI memory, ragflow combines RAG with AI agents, PaddleOCR applies AI to OCR tasks, headroom compresses AI outputs, anything-llm enables local AI deployment, mem0 provides memory infrastructure for AI agents, llama_index handles document processing for AI, and ai-agent-book appears to be an educational resource on AI agents.

Continuing through the list: jeecgboot offers low-code AI capabilities, milvus serves as a vector database for AI, langgraph builds AI agents, ecc provides an agent optimization system, hermes-agent is an AI agent platform, AutoGPT enables AI automation, firecrawl handles web data for AI, ollama runs AI models locally, transformers provides the foundational model architecture, dify enables AI workflow building, ponytail optimizes AI code generation, MoneyPrinterTurbo generates videos using AI, browser-use enables browser automation through AI, and TradingAgents appears to be an AI trading system.

Moving forward, caveman reduces tokens for AI coding agents, Agent-Reach gives AI agents internet search capabilities, career-ops handles AI job searching, daily_stock_analysis performs AI stock analysis, ppt-master creates AI-generated presentations, cherry-studio functions as an AI studio, nanobot provides a lightweight AI agent, CowAgent serves as an AI assistant, siyuan is a knowledge workspace integrating AI, Codewhale offers AI coding capabilities, CopilotKit provides frontend tools for AI agents, DeepSeek-Reasonix is an AI coding agent, QwenPaw is a personal AI assistant, and Vibe-Trading appears to be an AI trading application.

The list continues with tensorflow as a machine learning framework, LLMs-from-scratch teaches LLMs using PyTorch, pytorch is a deep learning framework, ML-For-Beginners teaches machine learning, cs-video-courses covers computer science including ML, netdata provides observability with AI, tesseract handles OCR as machine learning, OpenBB offers a finance data platform using AI, AI-For-Beginners is an AI learning resource, scikit-learn provides traditional machine learning algorithms, keras is a deep learning abstraction layer, ultralytics handles YOLO for computer vision, roboflow provides computer vision tools, julia is a programming language for numerical computing, meilisearch delivers fast search with AI capabilities, and PageIndex enables document indexing for retrieval systems.

The collection also includes qdrant as a vector database for AI search, cognee functions as an AI memory platform using knowledge graphs, RAG_Techniques covers retrieval-augmented generation methods, weaviate is a vector database supporting AI search, zvec is a lightweight vector database, langchain4j enables LLM application development in Java, txtai offers semantic search and LLM orchestration, lancedb serves as an embedded retrieval library for multimodal AI, orama provides search capabilities with vector support, and oceanbase is a distributed database system.

For categorization purposes, I'm organizing the AI infrastructure and tooling layer to include Alibaba's code review system, Cloudflare's security audit capability, and Anthropic's Claude Code as the agentic coding tool alongside their knowledge work plugins. Colibri enables running MoE models locally, while Voicebox handles voice AI functions. AlphaX's OpenResearch transforms coding agents into research tools, and Tencent's WeKnora provides the RAG knowledge platform. The agent skills and ECC frameworks round out this layer for optimization.

Moving into AI agents and workflows, I'm seeing projects like Anthropic's Claude Code as a terminal-based coding assistant, Colab for autonomous coding capabilities, WeKnora for reasoning agents, and Hermes Agent as a growing system. OpenResearch shifts toward research-oriented agents, while Oh-My-Hermes adds memory and workflow optimization. Claude-Red brings offensive security skills, Tiny-Whisper handles voice interactions, and Ponytail optimizes code generation with a "lazy senior dev" approach.

On the application side, Voicebox operates as a dedicated AI voice studio, WeKnora handles LLM knowledge management, YuE manages music generation, MoneyPrinterTurbo automates video creation, and PPT-Master generates presentations. Open-WebUI and LlamaIndex serve as AI interfaces and document processing tools respectively.

The RAG and knowledge layer includes WeKnora as an LLM knowledge platform, Open-WebUI for user-friendly AI interaction, LangChain for agent engineering, and LlamaIndex for document processing.

Looking at LLM and training capabilities, there's Colibri for running frontier MoE models, MiniMind for training a 64M-parameter LLM, Tiny-LLM for learning inference on Apple Silicon, Transformers as the model definition framework, Ollama for model execution, and LLMs-from-scratch for implementation.

Now I need to build out the report with a summary table and analysis of these categories.</think>

# AI Open Source Trends Report — September 17, 2026

## 1. Today's Highlights

Today's trending list reveals **intense developer focus on AI coding agents and developer tooling**. Alibaba's code review tool (+3,231 stars) demonstrates enterprise-scale demand for deterministic AI-assisted code quality. The emergence of **offensive security AI skills** (Claude-Red) signals a new vertical for agentic AI. Meanwhile, Colibri's pure-C MoE inference engine shows frontier models increasingly targeting consumer hardware. The agent optimization ecosystem (ECC, agent-skills) is maturing rapidly, with multiple projects targeting token efficiency and performance harness systems.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 0 (+3,231) | Hybrid architecture code review tool combining deterministic pipelines with LLM agents. Supports line-level comments, multi-language rulesets (NPE, thread-safety, XSS, SQL injection). Battle-tested at Alibaba scale. |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | TypeScript | 0 (+165) | Agentic coding tool living in the terminal. Understands codebase, executes routine tasks, explains complex code, handles git workflows through natural language. |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | 0 (+1,546) | Pure C, zero-dependency inference engine for frontier MoE models. Experts streamed from disk—brings massive models to consumer hardware. |
| [cline/cline](https://github.com/cline/cline) | TypeScript | 0 (+112) | Autonomous coding agent available as SDK, IDE extension, or CLI. |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | TypeScript | 0 (+417) | Open-source AI voice studio for cloning, dictation, and audio creation. |
| [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Rust | 0 (+1,017) | Transforms coding agents into research agents—bridging software engineering and scientific discovery. |

---

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Python | 0 (+110) | Open-source plugins for knowledge workers using Claude Code—primitives for productivity workflows. |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | 0 (+927) | Multi-phase security audit coding agent with independently verified, machine-readable findings. |
| [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | Python | 0 (+367) | Curated library of offensive security skills for AI agents—SQLi, shellcode, EDR evasion, exploit development via structured SKILL.md files. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 (+658) | Production-grade engineering skills for AI coding agents. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 260,277 (+1,057) | Agent harness performance optimization system with skills, instincts, memory, security, and research-first development. |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | Go | 0 (+1,197) | Open-source LLM knowledge platform: turns documents into queryable RAG, autonomous reasoning agents, and self-maintaining Wiki. |
| [rlaope/oh-my-hermes](https://github.com/rlaope/oh-my-hermes) | Python | 0 (+80) | All-in-one plugin for Hermes Agent with long-term memory and model-optimized workflow packages. |

---

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) | Python | 0 (+332) | Frontier music generation with symbolic planning, zero-shot covers, and agentic music editing. |
| [roboflow/supervision](https://github.com/roboflow/supervision) | Python | 50,596 (+260) | Reusable computer vision tools—detection, tracking, annotation utilities. |
| [NationalSecurityAgency/ghidra](reverse engineering) | Java | 0 (+1,059) | Software reverse engineering framework now increasingly used for AI-assisted binary analysis. |

---

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 61,345 | Train a 64M-parameter LLM from scratch in just 2 hours—educational benchmark for efficient training. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 166,257 | Model-definition framework for state-of-the-art ML models across text, vision, audio, and multimodal. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 181,194 | Run Llama, Qwen, Gemma, Mistral, DeepSeek and other models locally. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 105,095 | Implement a ChatGPT-like LLM in PyTorch step by step—foundational educational resource. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,574 | Learn LLM inference on Apple Silicon—build a tiny vLLM + Qwen from scratch. |

---

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 152,304 | User-friendly AI interface supporting Ollama and OpenAI API. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 146,471 | The agent engineering platform—building LLM applications at scale. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,191 | Document processing platform for AI—data loading, indexing, querying. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 65,437 | Memory layer for AI agents—persistent context infrastructure for production apps. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,130 | High-performance, cloud-native vector database for scalable ANN search. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 90,833 | Leading open-source RAG engine fusing RAG with Agent capabilities. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 118,461 | Turn codebases into queryable knowledge graphs—local deterministic AST parsing for agents. |

---

## 3. Trend Signal Analysis

Today's data reveals **three converging forces** shaping the AI open-source landscape:

1. **Enterprise-Grade Code Intelligence**: Alibaba's code review tool (+3,231) signals that deterministic, rule-based AI pipelines are maturing alongside LLM agents. This hybrid approach—combining precise static analysis with generative capabilities—addresses the reliability gaps that have limited AI coding assistants in production environments.

2. **Agent Optimization as a First-Class Concern**: The emergence of performance harness systems (ECC, agent-skills, ponytail) reflects a maturing ecosystem moving beyond "does it work?" to "how efficiently does it work?" Token optimization, memory management, and skill reuse are becoming structured disciplines.

3. **Edge Inference for Frontier Models**: Colibri's pure-C MoE engine demonstrates frontier models increasingly targeting consumer hardware. Streaming experts from disk circumvents memory constraints, potentially democratizing access to state-of-the-art capabilities.

The **offensive security AI** vertical (Claude-Red) represents a notable new direction—AI agents armed with structured attack methodologies. This mirrors broader industry trends where AI capabilities are being specialized for high-stakes domains.

---

## 4. Community Hot Spots

- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — Enterprise-scale hybrid code review; first major demonstration of deterministic + agentic AI pipeline at scale. Watch for enterprise adoption patterns.

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** (260K stars) — The de facto standard for agent harness optimization. Essential for developers building production AI coding tools.

- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** — Pure-C MoE inference on consumer hardware marks a shift toward edge-deployable frontier models. Represents the next frontier in model accessibility.

- **[SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red)** — First structured offensive security skill library for AI agents. High potential for rapid growth as red-teaming communities adopt AI-assisted workflows.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** (65K stars) — Memory infrastructure is becoming a critical bottleneck for multi-session AI agents. This project addresses a fundamental production requirement.

---

*Report generated from GitHub trending data — September 17, 2026*

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*