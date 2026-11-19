# AI Open Source Trends 2026-11-19

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-19 03:48 UTC

---

<think>Let me analyze this GitHub AI-related data and create a structured report.

First, let me filter for AI-relevant projects from the trending list:

From the Trending List (19 repos):
1. cursor/plugins - Cursor plugin specification - AI adjacent (AI IDE)
2. HKUDS/CLI-Anything - CLI for AI agents - AI AGENT
3. mvanhorn/last30days-skill - AI agent skill for research - AI AGENT
4. getarcaneapp/arcane - Docker management - NOT AI
5. NVIDIA/SkillEvaluator - AI agent evaluation framework - AI INFRA
6. nvm-sh/nvm - Node version manager - NOT AI
7. astral-sh/uv - Python package manager - NOT AI
8. google-research/paper-orchestra - Multi-agent research paper writing - AI AGENT
9. google-labs-code/stitch-skills - Agent Skills library - AI AGENT
10. sveltejs/svelte - Web framework - NOT AI
11. jquery/jquery - JavaScript library - NOT AI
12. appwrite/appwrite - Backend cloud platform - NOT AI (though mentions "for agents")
13. openvinotoolkit/openvino - AI inference toolkit - AI INFRA
14. obra/superpowers - Agentic skills framework - AI AGENT
15. affaan-m/ECC - Agent harness optimization - AI AGENT
16. DeanChensj/jiangshan-map - Historical map - NOT AI
17. n8n-io/n8n - Workflow automation with AI - AI AGENT/WORKFLOW
18. solidjs/solid - UI library - NOT AI
19. punkpeye/awesome-mcp-servers - MCP servers collection - AI INFRA

From Topic Search (81 repos), I have a lot of data. Let me categorize:

AI Infrastructure:


- NVIDIA/SkillEvaluator
- openvinotoolkit/openvino
- punkpeye/awesome-mcp-servers
- langchain4j/langchain4j (Java LLM library)
- 0xPlaygrounds/rig (Rust LLM)
- open-compass/opencompass (LLM evaluation)
- samchon/nestia (NestJS + AI)

AI Agents / Workflows:
- HKUDS/CLI-Anything
- mvanhorn/last30days-skill
- google-research/paper-orchestra
- google-labs-code/stitch-skills
- obra/superpowers
- affaan-m/ECC
- n8n-io/n8n
- NousResearch/hermes-agent
- CopilotKit/CopilotKit

I'm organizing these into three main buckets: infrastructure tools that support AI development, agent frameworks for building autonomous workflows, and agent-based applications that solve specific problems. The infrastructure layer includes evaluation tools, inference runtimes, and SDKs across different languages. The agent layer has multiple frameworks emerging for orchestrating AI tasks and workflows, with some focused on research automation and others on general-purpose agent systems.

Looking at applications, there are domain-specific solutions emerging—career assistance, document generation, financial analysis, and productivity tools—alongside agent harnesses that provide scaffolding for building new agents. There's also significant activity in memory and knowledge systems for agents, ranging from vector databases to graph-based approaches for structuring information. Vector databases are emerging as critical infrastructure for agent memory and retrieval systems. Notable projects include AnythingLLM for local deployment, Meilisearch combining search with vector capabilities, and LlamaIndex as the leading document processing framework. Milvus offers high-performance vector operations at scale, while OpenViking and PageIndex represent newer approaches to context management and reasoning-based retrieval.

LangChain remains the dominant orchestration layer despite recent competition, with specialized implementations like LangChain4j for Java environments. txtai provides an integrated AI workflow platform, and OceanBase is expanding its database capabilities to support vector operations alongside traditional data management.

The LLM ecosystem shows significant momentum with Hermes-agent leading adoption at 264k stars, followed by foundational models like transformers and platforms such as ollama enabling local deployment. Agentscope, Codewhale, and openclaude represent emerging frameworks for building autonomous agents, while AutoGPT continues driving the broader agent framework movement.

Additional notable projects include Firecrawl for knowledge extraction, Dify for workflow orchestration, browser-use for web automation, and specialized tools like MoneyPrinterTurbo for content generation and TradingAgents for financial applications. Smaller but significant entries like minimind for lightweight training and rig for Rust-based LLM applications round out the ecosystem.

The AI infrastructure layer spans NVIDIA's evaluation tools, OpenVINO for model deployment, and various MCP server implementations. Now organizing these by category and relevance to identify which projects warrant highlighting in today's report. The data shows several projects with significant traction today. PaperOrchestra demonstrates strong momentum with 1,524 stars, while ECC is gaining substantial attention at 1,108 stars. The research skill tool shows exceptional growth at 1,059 stars. Several projects are also seeing meaningful traction including superpowers (822), Arcane (547), and stitch-skills (365), alongside CLI-Anything (389) and the SkillEvaluator (312). For topic-based repos, I'm tracking hermes-agent at 264,532 stars, ECC leading with 306,639, and firecrawl at 203,292.

Now I need to verify which repos are genuinely AI-focused and identify their primary categories before structuring the output. My approach will be to first determine primary category assignments for the most significant repos, then organize the response into key highlights, category breakdowns, trend analysis, and community priorities.

Looking at the AI Infrastructure category, I'm seeing several repos that fit: NVIDIA/SkillEvaluator for evaluation frameworks, openvinotoolkit/openvino for inference engines, punkpeye/awesome-mcp-servers for dev tools, langchain4j/langchain4j as a Java SDK, open-compass/opencompass for evaluation platforms, 0xPlaygrounds/rig for Rust development, and nestia for NestJS integration. For AI Agents and Workflows, the list includes HKUDS/CLI-Anything, mvanhorn/last30days-skill, and google-research/paper-orch.

Continuing with the agent category, I have google-labs-code/stitch-skills, obra/superpowers, affaan-m/ECC, n8n-io/n8n, NousResearch/hermes-agent, CopilotKit/CopilotKit, siyuan-note/siyuan, career-ops-hq/career-ops, shareAI-lab/learn-claude-code, hugohe3/ppt-master, ZhuLinsen/daily_stock_analysis, HKUDS/nanobot, zhayujie/CowAgent, and codewhale-hq/Codewhale. I also need to include agentscope-ai/QwenPaw, Twigpine/openclaude, trycua/cua, and browser-use/browser-use in this group.

For AI Applications, I'm looking at mem0ai/mem0, crawl4ai/crawl4ai, datawhalechina/hello-agents, open-webui/open-webui, Graphify-Labs/graphify, langchain-ai/langchain, Shubhamsaboo/awesome-llm-apps, thedotmack/claude-mem, infiniflow/ragflow, headroomlabs-ai/headroom, CherryHQ/cherry-studio, HKUDS/DeepTutor, HKUDS/Vibe-Trading, firecrawl/firecrawl, Significant-Gravitas/AutoGPT, ollama/ollama, f/prompts.chat, and huggingface/transformers.

Adding to the AI Applications list: langgenius/dify, harry0703/MoneyPrinterTurbo, TauricResearch/TradingAgents, and juliusbrussee/caveman. For LLMs and Training, I'm tracking jingyaogong/minimind, OpenSPG/KAG, Eigenwise/atomic-agents, skyzh/tiny-llm, and EgoAlpha/prompt-in-context-learning. There's also the embodied AI and robotics section with zchoi/Awesome-Embodied-Robotics-and-Agent, plus agents meet RL with thinkwee/AgentsMeetRL and DATAGEN for research automation.

I'm noticing a lot of overlap here—ECC could fit into AI agents, applications, or training since it's really an agent harness optimization system. OpenViking seems positioned as memory infrastructure for AI agents, which pushes it toward that category despite its topic tag. For RAG and knowledge, PageIndex has the "vectorless" approach but still falls under the RAG umbrella, while OpenViking's self-evolving context database could sit in either RAG or agents depending on how it's framed.

Now I need to pull the strongest candidates from the full dataset—ones with solid engagement numbers. From today's trending, PaperOrchestra stands out with over 1,500 stars, and there's a cluster of tools around 300-1,100 stars that are worth examining. The topic search reveals some massive repositories like hermes-agent with 264k stars and ECC with 306k stars, along with several others in the 100k+ range that I should prioritize in the final selection. . Agent harness for coding
11. [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) - 60,548 ⭐ - Personalized tutoring
12. [ollama/ollama](https://github.com/ollama/ollama) - 187,565 ⭐ - Local LLM
13. [open-webui/open-webui](https://github.com/open-webui/open-webui) - 159,057 ⭐ - AI interface
14. [langgenius/dify](https://github.com/langgenius/dify) - 161,461 ⭐ - Workflow/RAG
15. [browser-use/browser-use](https://github.com/browser-use/browser-use) - 121,456 ⭐ - Browser agent
16. [mem0ai/mem0](https://github.com/mem0ai/mem0) - 69

,214 ⭐ - Agent memory
17. [crawl4ai/crawl4ai](https://github.com/unclecode/crawl4ai) - 87,541 ⭐ - Web scraping for agents
18. [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) - 80,116 ⭐ - Token compression
19. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) - 94,405 ⭐ - RAG engine
20. [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) - 203,292 ⭐ - Knowledge infrastructure
21. [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) - 145

,040 ⭐ - LLM app collection
22. [langchain-ai/langchain](https://github.com/langchain-ai/langchain) - 149,859 ⭐ - Agent framework
23. [huggingface/transformers](https://github.com/huggingface/transformers) - 169,197 ⭐ - ML models

Now I'm organizing these into thematic groups. AI infrastructure includes tools like SkillEvaluator, OpenVINO, MCP servers, LangChain4j, OpenCompass, Rig, and txtai. For agents and workflows, I have CLI-Anything, research and paper automation tools like last30days-skill and paper-orchestra, plus various coding and development tools like stitch-skills and superpowers.

The broader agent ecosystem spans from harness systems like ECC and Hermes Agent to platforms like n8n, CopilotKit, and specialized tools for career assistance, document generation, stock analysis, and personal agents. There are also standalone agents like CowAgent, CodeWhale, and openclaude, along with browser-based agents and application frameworks.

For AI applications and interfaces, I'm looking at memory systems like mem0, web scraping tools like crawl4ai, open web interfaces, workflow platforms like Dify, and specialized tools for knowledge management, code graph analysis, AI app collections, trading agents, content generation, and research platforms.

The foundation models and training layer includes lightweight models like minimind, evaluation frameworks like opencompass, modular agent systems, inference tools like tiny-llm, and knowledge integration approaches like KAG. There's also a focus on in-context learning and prompt engineering techniques.

The knowledge and retrieval layer encompasses vector databases for similarity search, document processing pipelines, comprehensive memory platforms, and cloud-hosted search capabilities across the ecosystem.

I'm noticing significant overlap—ECC could sit in multiple categories, OpenViking bridges memory and agent systems, and txtai spans multiple functions. I should be selective and pick the most representative examples for each section rather than listing everything. The trending list will be my primary source, supplemented by the strongest topic repositories to create a balanced view of the current landscape. - Tool calling (including MCP support), agents and RAG easy. Integrates with Quarkus and Spring Boot.

The open-source ecosystem around AI agents is expanding rapidly. Key infrastructure includes NVIDIA's SkillEvaluator framework for multi-tier agent assessment, OpenVINO for inference deployment, and the growing MCP server ecosystem. LangChain4j demonstrates strong enterprise adoption with its Java/JVM integration, while OpenCompass provides standardized LLM benchmarking across major providers. Rust-based solutions like Rig are emerging as modern alternatives for building production-grade applications.

The agent development space shows particular momentum—Google's PaperOrchestra enables automated research workflows, while tools like Stitch-Skills and Superpowers provide reusable primitives for building autonomous agents. Cursor's plugin ecosystem and platforms like Hermes-Agent indicate the community is converging on standard patterns for agent tool use and memory management.

Specialized agent frameworks are emerging for vertical domains: Career-Ops automates job searching workflows, DeepTutor personalizes learning, and Vibe-Trading handles financial decision-making. Meanwhile, ECC and CodeWhale represent the broader trend of customizable agent architectures—ECC optimizing performance with memory and security layers, while CodeWhale brings Rust's reliability to coding agents.

For applications, Open-WebUI is establishing itself as the dominant interface layer for local AI deployments with 159k stars, and Dify is becoming the standard workflow orchestration platform for teams moving from prototype to production. Firecrawl is emerging as a critical component for knowledge-intensive applications, providing the web scraping infrastructure that feeds data into retrieval systems.

Browser-use is enabling a new class of autonomous web agents that can navigate and interact with real interfaces. The ecosystem also includes memory management tools like mem0, collaborative platforms like Cherry-Studio, and specialized RAG engines like RAGFlow for enterprise-grade context infrastructure. Crawl4AI addresses the fundamental bottleneck of acquiring fresh training data for agents.

LLMs and Training: Several projects focus on training and inference optimization. MiniMind can train a 64M model in 2 hours, making AI development accessible. OpenCompass provides comprehensive evaluation across 100+ datasets and multiple providers. Atomic-agents promotes composable agent design principles.

Knowledge and Retrieval: The vector database landscape shows mature solutions—AnythingLLM, LlamaIndex, and Milvus are battle-tested for production RAG systems. Qdrant and Weaviate offer cloud-native approaches with hybrid search capabilities. txtai functions as an all-in-one semantic search and LLM orchestration platform, while PageIndex explores vectorless reasoning-based approaches.

RAG and memory are central themes emerging across multiple projects. Tools like Cognee provide explicit memory management for agents, and new frameworks are addressing the challenge of integrating retrieval with reasoning. The ecosystem shows strong interest in evaluation infrastructure and agent frameworks, with emerging patterns around browser automation and token efficiency. Recent trends include multi-agent orchestration systems, agent evaluation frameworks, and open standards for agent capabilities. The momentum is particularly strong in tools that enable agents to operate across different interfaces—web, CLI, IDE—suggesting a push toward more versatile autonomous systems.
</think>


# AI Open Source Trends Report — 2026-11-19

## 1. Today's Highlights

The AI open-source ecosystem is experiencing a **multi-agent orchestration surge**, with PaperOrchestra (1,524★ today) demonstrating Google's commitment to automated research pipelines and NVIDIA's SkillEvaluator (312★ today) establishing quality gates for agent skill evaluation. The Agent Skills standard is rapidly consolidating — Google's Stitch-Skills, obra's Superpowers, and Cursor's plugin ecosystem are converging on interoperable skill definitions that work across coding agents. **Agent performance optimization** is emerging as a distinct discipline, with ECC (306k total, 1,108★ today) offering a full harness system for memory, security, and research-first development. The CLI-to-agent migration continues via HKUDS/CLI-Anything, while n8n's native AI workflow capabilities (325★ today) blur the line between automation and autonomous agents.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ECC](https://github.com/affaan-m/ECC) | JavaScript | 306,639 (1,108 today) | Agent harness performance optimization system with skills, instincts, memory, and security layers for Claude Code, Codex, Opencode, and Cursor. Represents the emerging discipline of agent performance engineering. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 169,197 | The definitive model-definition framework for state-of-the-art ML in text, vision, audio, and multimodal domains. Core infrastructure for both inference and training across the open-source ecosystem. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,421 | Idiomatic Java library for LLM applications offering unified APIs over providers, tool calling with MCP support, and native Quarkus/Spring Boot integration — bringing agentic capabilities to the JVM ecosystem. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,602 | Comprehensive LLM evaluation platform supporting 100+ datasets across knowledge, reasoning, coding, and safety — the emerging standard for benchmarking models from OpenAI, Anthropic, Gemini, Qwen, DeepSeek, and more. |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | — | 53 | Curated collection of MCP servers forming the backbone of the Model Context Protocol ecosystem — critical infrastructure for standardized agent-tool communication. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | Python | 1,524 today | Multi-agent framework for automated AI research paper writing — Google's concrete bet on autonomous research pipelines that coordinate multiple specialized agents through the paper creation lifecycle. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 822 today | Agentic skills framework with a complete software development methodology; defines how agents should structure capabilities and invoke tools for real-world development tasks. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 365 today | Library of Agent Skills following the open standard, designed for Stitch MCP server compatibility with Antigravity, Gemini CLI, Claude Code, and Cursor — pushing skill interoperability across the agent ecosystem. |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | TypeScript | 325 today | Fair-code workflow automation platform with native AI capabilities, 400+ integrations, and visual building combined with custom code — increasingly used as an agent orchestration layer for non-technical teams. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 1,059 today | AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web, then synthesizes grounded summaries — a production-grade example of multi-source research agents. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 38,811 | The frontend stack for agents and generative UI, makers of the AG-UI Protocol — bridging the gap between autonomous agent reasoning and user-facing applications. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 121,456 | Open-source library for AI browser agents with hosted API offering stealth browsers — the leading solution for agents that need to interact with the live web through a browser interface. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 73,390 | LLM-powered multi-market stock analysis with real-time news, decision dashboards, and cost-free scheduled runs — a showcase for domain-specific agent applications with real utility. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Svelte | 159,057 | User-friendly AI interface supporting Ollama, OpenAI API, and local models — the de facto standard for self-hosted AI interfaces with 159k stars and strong community momentum. |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,461 | Build Agentic workflows and RAG pipelines on a collaborative workspace; deploy on cloud, VPC, or self-hosted — enabling teams to move from prototype to production without rebuilding the stack. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 203,292 | Knowledge infrastructure making agents smarter through unified search, scrape, and 550+ data providers — critical upstream infrastructure for any knowledge-intensive agent application. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,214 | Drop-in memory infrastructure for AI agents providing persistent context that persists across sessions — addressing the fundamental challenge of long-term agent memory. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,405 | Agent-native RAG engine that evolved into context infrastructure for production deployments — offering deep document understanding with semantic chunking and intelligent retrieval. |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,541 | Open-source AI-native web crawler and extractor, Apache-2.0 licensed with self-hosting capability — the go-to solution for agents needing fresh web data. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 80,116 | Token compression library reducing LLM context by 20% for coding agents and 60-95% for JSON — directly addressing the cost and context window challenges in production agent deployments. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 144,532 | Generate HD short videos from topics with automated AI workflows — a consumer-facing application demonstrating LLM orchestration for multimedia content creation. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 187,565 | Get up and running with Kimi, GLM, MiniMax, DeepSeek, Qwen, Gemma and 100+ models — the dominant solution for local LLM inference with simple deployment and broad model support. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 66,521 | Train your own 64M LLM from scratch in 2 hours — democratizing model training with a minimal but complete training pipeline that demystifies the process. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,180 | Build modular and scalable LLM applications in Rust — bringing memory safety and performance to production LLM systems with a type-safe, composable architecture. |
| [OpenSPG/KAG](https://github.com/OpenSPG/KAG) | Python | 9,178 | Logical form-guided reasoning and retrieval framework for professional domain knowledge bases — moves beyond vector similarity to symbolic reasoning for higher accuracy. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 149,859 | The agent engineering platform — still the dominant framework for building RAG, agents, and LLM applications despite increased competition from specialized solutions. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,948 | Document processing platform for AI — the primary toolkit for building RAG pipelines with sophisticated indexing, retrieval, and synthesis capabilities. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,688 | High-performance, cloud-native vector database built for scalable ANN search — the production standard for large-scale embedding storage and similarity search. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,633 | High-performance vector database for the next generation of AI with cloud offering — known for speed and hybrid filtering capabilities. |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | Rust | 11,940 | Developer-friendly embedded retrieval library for multimodal AI — designed for simplicity with no separate server required, ideal for edge and mobile deployments. |
| [neuml/txtai](https://github.com/neuml/txtai) | Python | 13,642 | All-in-one AI framework for semantic search, LLM orchestration, and language model workflows — a batteries-included solution for RAG and semantic search use cases. |

---

## 3. Trend Signal Analysis

Today's data reveals **three distinct acceleration vectors** in the AI open-source ecosystem:

**First, Agent Evaluation is Maturing.** NVIDIA's SkillEvaluator (312★ today) represents a critical missing piece finally being addressed — the community now has frameworks to quantitatively measure whether agent skills actually improve task outcomes. This signals a maturation beyond "build agents" toward "build reliable agents." The multi-tier approach (quality gates, semantic overlap detection, synthetic dataset generation, live evaluation) mirrors enterprise MLOps practices now being adapted for agents.

**Second, the Agent Skills Standard is Converging.** Google's PaperOrchestra and Stitch-Skills, obra's Superpowers, and Cursor's plugin ecosystem all describe their capabilities using overlapping vocabulary around "skills," "tools," and "instincts." This is the community implicitly standardizing on skill as the atomic unit of agent capability — analogous to how packages became the atomic unit of software reuse. Projects that build on or extend these patterns (ECC, last30days-skill) are riding this momentum.

**Third, Token Efficiency is a Priority.** Headroom (80k★) compressing tool outputs by 60-95%, Caveman's proxy for shorter agent answers, and n8n's visual approach to reducing development verbosity all point to a practical engineering concern: **LLM context is expensive and slow**. The ecosystem is responding with compression, better tool design, and workflow abstraction — this will accelerate as more agents hit production cost ceilings.

---

## 4. Community Hot Spots

- **[ECC](https://github.com/affaan-m/ECC)** — The most comprehensive agent harness system with 306k stars and 1,108★ today; sets the template for production agent development with explicit attention to security and memory layers.

- **[open-webui](https://github.com/open-webui/open-webui) + [ollama](https://github.com/ollama/ollama)** — The local AI stack is now battle-tested; these two repos represent the baseline infrastructure for running agents entirely offline, a priority for enterprise and privacy-sensitive deployments.

- **[browser-use](https://github.com/browser-use/browser-use)** — The bridge between autonomous agents and the real web; at 121k stars, it's becoming the default for agents that need to interact with existing web applications.

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — Token compression for production agents is an underappreciated optimization; the claimed 60-95% reduction for JSON tool outputs directly addresses the cost and latency bottlenecks in real-world agent deployments.

- **[Dify](https://github.com/langgenius/dify)** — The workflow platform bridging prototyping and production for teams building RAG and agentic applications; 161k stars with strong enterprise adoption signal it's winning the "LangChain but for production" positioning.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*