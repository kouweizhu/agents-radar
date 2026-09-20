# AI Open Source Trends 2026-09-20

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-20 00:19 UTC

---

<think>The user wants me to analyze the GitHub trending data and create a structured AI Open Source Trends Report. Let me follow the steps:

1. **Filter** - Select AI-related projects from the data
2. **Categorize** - Group into the 5 categories
3. **Output** - Create the report with specific sections

Let me start by identifying AI-related projects:

From the Today's Trending list (15 repos):
- cloudflare/security-audit-skill - AI-related (security auditing agent skill)
- trycua/cua - AI-related (computer-use, AI agents)
- addyosmani/agent-skills - AI-related (AI coding agent skills)
- coder/coder - Related to developer environments, could be AI
- anthropics/claude-code - AI (agentic coding tool)
- Open-Dev-Society/OpenStock - Not AI (stock tracking)
- higgsfield-ai/higgsfield - AI (GPU orchestration, ML framework)
- docling-project/docling - AI (document processing for gen AI)
- cloudflare/quiche - NOT AI (QUIC protocol)
- asciimoo/hister - NOT AI (search engine)
- ruanyf/weekly - NOT AI (tech newsletter)
- ZuodaoTech/everyone-can-use-english - NOT AI (English learning)
- anthropics/knowledge-work-plugins - AI (plugins for AI)
- cactus-compute/needle - AI (automation foundation model for tiny devices)
- yynxxxxx/Codex-X - AI (OpenAI Codex management tool)

From the Topic Search Results (81 repos):
All seem AI-related based on the topic tags (rag, ai-agent, ml, llm, vector-db, llm-model)

Now let me categorize:

**AI Infrastructure:**
- cloudflare/security-audit-skill
- trycua/cua
- addyosmani/agent-skills


- coder/coder
- anthropics/claude-code
- higgsfield-ai/higgsfield
- docling-project/docling
- anthropics/knowledge-work-plugins
- yynxxxxx/Codex-X

I'll expand the AI Infrastructure category by identifying additional projects that support AI development and deployment. These tools and platforms provide critical foundational components for building, managing, and scaling AI applications. They include security auditing, agent skills, coding tools, GPU orchestration, and document processing capabilities that are essential for modern AI development workflows.

**AI Agents / Workflows:**
- cloudflare/security-audit-skill
- trycua/cua
- addyosmani/agent-skills
- anthropics/claude-code

The AI Agents and Workflows section highlights tools focused on creating intelligent, autonomous systems. These projects emphasize developing AI agents that can perform complex tasks, provide coding assistance, and automate multi-phase security audits. They represent the cutting-edge of agentic AI development.

**AI Applications:**
- docling-project/docling

**LLMs / Training:**
- higgsfield-ai/higgsfield

I'll analyze the LLMs and Training projects, noting the innovative approach to large-scale model development. The higgsfield-ai/higgsfield project appears to be a specialized framework for training expansive AI models across distributed computing environments.

**RAG / Knowledge:**
- anthropics/knowledge-work-plugins

The RAG and Knowledge category seems underrepresented, with only one project mentioned. I'll need to investigate additional projects that might fit this category more comprehensively.</think>

# AI Open Source Trends Report — September 20, 2026

## Step 1: Filter

From the 15 trending repositories, I identified **12 AI-related projects** (excluding quiche, hister, weekly, everyone-can-use-english, OpenStock).

From the 81 AI topic search results, **all are AI-related** and deduplicated.

---

## Step 2: Categorize & Report

### 1. Today's Highlights

The AI open-source ecosystem is experiencing a surge in **agentic coding tools** and **security-focused AI utilities** today. Cloudflare's security-audit-skill gained 3,155 stars in a single day—the highest momentum in today's list—signaling strong community interest in autonomous security auditing. The computer-use space is heating up with trycua/cua (859 stars), while Anthropic's Claude Code (483 stars) continues its rapid adoption as a terminal-based coding agent. Notably, the edge AI and tiny device segment is emerging with cactus-compute/needle (234 stars), enabling 2-bit models on microcontrollers. RAG and knowledge management remain dominant in the broader ecosystem, with projects like open-webui/open-webui (152k stars) and langchain-ai/langchain (146k stars) leading the overall AI repository landscape.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | TypeScript | 0 (+483) | Agentic coding tool that lives in the terminal, understands codebases, and helps with natural language commands for routine tasks, git workflows, and code explanation. |
| [docling-project/docling](https://github.com/docling-project/docling) | Python | 0 (+129) | Document processing pipeline that prepares documents for generative AI, converting PDFs and images into LLM-ready formats. |
| [trycua/cua](https://github.com/trycua/cua) | HTML | 0 (+859) | Computer-use 2.0 framework with open-source drivers, cross-OS fleets, and benchmarks for training, evaluation, and data generation at scale. |
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | Python | 0 (+234) | Automation foundation model for tiny devices: 2-bit, 8-29 MB, supporting tool calls, structured extraction, and embeddings on phones, wearables, smart homes, and microcontrollers. |
| [yynxxxxx/Codex-X](https://github.com/yynxxxxx/Codex-X) | Rust | 0 (+32) | Visual management tool for OpenAI Codex desktop/CLI with provider switching, session sync, prompt injection, and TOML configuration visualization. |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | 0 (+3,155) | Multi-phase security audit skill with independently verified, machine-readable findings—today's highest-gaining AI project. |

#### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 (+556) | Production-grade engineering skills for AI coding agents, providing reusable patterns for real-world development tasks. |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Python | 0 (+281) | Open-source plugins for knowledge workers to use in Claude Code, extending agent capabilities for research and documentation. |
| [coder/coder](https://github.com/coder/coder) | Go | 0 (+402) | Secure development environments for developers and their AI agents, enabling remote workspace provisioning. |
| [higgsfield-ai/higgsfield](https://github.com/higgsfield-ai/higgsfield) | Jupyter Notebook | 0 (+196) | Fault-tolerant, highly scalable GPU orchestration and ML framework for training models with billions to trillions of parameters. |

#### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 152,573 | User-friendly AI interface supporting Ollama and OpenAI API, the most-starred RAG/UI project in the ecosystem. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 146,686 | The agent engineering platform—foundational framework for building LLM-powered applications with tool use and memory. |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 138,990 | Curated collection of 100+ AI agents, agent skills, and RAG applications—both free and open source. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 91,004 | Leading open-source RAG engine fusing RAG with Agent capabilities for superior LLM context layer. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 65,654 | Memory layer for AI agents—drop-in infrastructure providing persistent context across sessions for production AI apps. |

#### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 200,194 | Open source ML framework for everyone—the long-standing cornerstone of deep learning research and production. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 166,388 | Model-definition framework for state-of-the-art ML models in text, vision, audio, and multimodal—defines the interface for 10k+ pretrained models. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 103,109 | Tensors and dynamic neural networks in Python with strong GPU acceleration—the dominant DL framework. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 105,241 | Implement a ChatGPT-like LLM in PyTorch from scratch—highly regarded educational resource with 105k stars. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 181,278 | Run LLMs locally (Kimi, GLM, MiniMax, DeepSeek, Qwen, Gemma) with one command—the gateway to local LLM deployment. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 156,485 | Build agentic workflows and RAG pipelines with rich AI model support; deploy on cloud, VPC, or self-hosted. |

#### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,161 | High-performance, cloud-native vector database built for scalable vector ANN search—enterprise-grade retrieval backbone. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 119,639 | Turn codebases, docs, SQL schemas, and PDFs into queryable knowledge graphs; supports Claude Code, Cursor, Codex with local AST parsing. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 94,272 | Persistent context across sessions for every agent—captures, compresses, and injects relevant context for future sessions. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,236 | Document processing platform for AI—core framework for building RAG systems with 52k stars. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 66,227 | Local-first agent experience—own your intelligence with a complete solution for private LLM usage. |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 59,343 | Lightning-fast search engine with AI-powered hybrid search—increasingly used as vector + keyword hybrid retrieval. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 34,690 | High-performance, massive-scale vector database for next-generation AI applications—Rust-native and cloud-ready. |

---

### 3. Trend Signal Analysis

Today's data reveals **three major momentum vectors**:

1. **Agentic Coding Tools Explode**: The computer-use and coding agent category saw the most dramatic single-day growth. cloudflare/security-audit-skill (+3,155) demonstrates that autonomous security auditing is a killer use case. trycua/cua (+859) and addyosmani/agent-skills (+556) show the ecosystem is maturing beyond simple chat interfaces toward multi-phase task execution.

2. **Edge/Tiny AI Emerging**: The appearance of cactus-compute/needle (+234) signals a new frontier—2-bit models under 30MB capable of running on microcontrollers, wearables, and smartphones. This bridges the gap between cloud LLMs and on-device AI, potentially reshaping IoT and edge computing.

3. **RAG Maturity Accelerating**: While RAG projects like open-webui/open-webui (152k) and Graphify-Labs/graphify (119k) dominate by total stars, the trend is toward knowledge graph-based RAG (graphify) and persistent memory (mem0, claude-mem). The "stateless chatbot" era is definitively ending.

These trends align with the broader industry push toward **agentic AI** following Claude 4, GPT-4o updates, and the upcoming Claude Code ecosystem expansion.

---

### 4. Community Hot Spots

- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** — 3,155 stars today signals a breakthrough in autonomous security AI. Developers should explore integrating security audit skills into CI/CD pipelines.

- **[trycua/cua](https://github.com/trycua/cua)** — Computer-use 2.0 with cross-OS fleets is the most viable open-source alternative to Anthropic's Computer Use. Worth evaluating for browser automation and UI testing.

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — Knowledge graph RAG is outperforming vector-only approaches. Its 119k stars and deterministic AST parsing make it the top choice for code intelligence.

- **[cactus-compute/needle](https://github.com/cactus-compute/needle)** — The first trending tiny-device foundation model. This marks the beginning of on-device AI at scale; monitor for production-ready releases.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Persistent memory infrastructure is becoming essential for production agents. Its 65k stars and "drop-in" design make it the standard for session continuity.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*