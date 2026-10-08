# ArXiv AI Research Digest 2026-10-08

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-08 02:13 UTC

---

<think>Let me analyze today's ArXiv submissions and create a comprehensive research digest.

Looking at the papers, I can identify several key themes:

1. **Large Language Models** - Several papers on LLM training, evaluation, and personalization
2. **Agents & Reasoning** - Multiple papers on LLM agents, reasoning, tool use
3. **Methods & Frameworks** - Various technical approaches including compression, optimization, benchmarks
4. **Applications** - Domain-specific applications like traffic, weather, medical, etc.

Let me identify the most significant papers:

**High-impact papers:**
- "AgentTime: Can Agents Estimate and Control Their Own Runtime?" - interesting on agent time awareness
- "Many Ways to Succeed: Diversity-Driven RL Fine-Tuning for VLA Generalization" - RL for VLA
- "BoT-GRPO: Efficient Process-Reward RL for Reasoning" - important for LLM reasoning
- "A Deafening Silence: Catastrophic Forgetting Lives in the Output Embeddings" - important for continual learning
- "MIRROR: From Imitation to Internalization in LLM Personalization" - LLM personalization
- "Think Before You Paint: Recursive Latent Reasoning for Diffusion Models" - reasoning in diffusion
- "Dual-QK: Sharp Queries and Flat Keys for Prunable 2-bit KV Caches" - efficiency
- "ORCA: Hunting Compositional Failures in Text-to-Image Diffusion" - compositionality
- "SkillForge: Co-Evolving Skills and Agents" - agent skills
- "LiveMACE: Process-Aware Evaluation of LLM Agent Capabilities" - agent evaluation
- "Training Advisors for LLM Agents from Task Outcomes" - agent training


- "Self-Evolve With a Reference" - agent training

I'll continue organizing the research digest, focusing on the most innovative and promising papers that demonstrate significant advancements in AI research. The selected papers represent cutting-edge developments across multiple domains, from agent training to reasoning and model efficiency.</think>

# ArXiv AI Research Digest — October 8, 2026

## Today's Highlights

Today's submissions reveal strong momentum in **agentic AI**—with multiple papers addressing runtime estimation, skill evolution, and process-aware evaluation. Simultaneously, **reasoning enhancement** remains a central theme, spanning process-reward RL for LLMs to recursive latent reasoning for diffusion models. Notably, **model efficiency** continues to attract attention, with work on KV cache quantization, catastrophic forgetting in output embeddings, and minimal interpretable transformers. The convergence of multimodal generation and compositional reasoning also stands out, alongside growing interest in **personalization** and **data-efficient learning** for real-world deployment.

---

## Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [BoT-GRPO: Efficient Process-Reward RL for Reasoning via Bag-of-Token Aggregation](http://arxiv.org/abs/2610.09804v1) | Yingxiang Yang et al. | Introduces BoT-GRPO, which aggregates token-level advantages using bag-of-token grouping to accelerate convergence in process-supervision RL for LLM reasoning. This addresses the inefficiency of uniform advantage assignment in GRPO. |
| [A Deafening Silence: Catastrophic Forgetting Lives in the Output Embeddings of Tokens the Data Never Speaks](http://arxiv.org/abs/2610.09835v1) | Jonghyun Han et al. | Reveals that catastrophic forgetting in LLMs disproportionately affects output embeddings of tokens absent from training data, proposing parameter freezing as a mitigation strategy. Critical for continual pre-training scenarios. |
| [MIRROR: From Imitation to Internalization in LLM Personalization](http://arxiv.org/abs/2610.09795v1) | Huayi Lai et al. | Proposes a meta-personalization framework that bridges style imitation and content quality through self-distillation, enabling LLMs to internalize reference profiles without explicit tuning. |
| [Fully Interpretable Minimal Transformers: From Geometry to Algorithm](http://arxiv.org/abs/2610.09838v1) | Raneem Mahajne et al. | Builds minimal 2D transformer models with constrained embedding dimensions, enabling full visualization of internal representations and attention mechanisms for interpretability research. |
| [Reproducible LLM Inference Benchmarking: A Sequential Isolation Protocol](http://arxiv.org/abs/2610.09778v1) | Arnold Olympio et al. | Presents a Sequential Isolation Methodology to reduce variance in LLM inference benchmarking, addressing reproducibility challenges in measurement across runs. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AgentTime: Can Agents Estimate and Control Their Own Runtime?](http://arxiv.org/abs/2610.09944v1) | Michael Ofengenden et al. | Introduces time-awareness capabilities for AI agents to predict and control their own wall-clock runtime, addressing a critical gap in native agent harnesses. |
| [LiveMACE: Process-Aware Evaluation of LLM Agent Capabilities in Evolving Markets](http://arxiv.org/abs/2610.09872v1) | Jun Zhao et al. | Proposes LiveMACEBench, a process-aware benchmark that evaluates agents on their reasoning capabilities rather than just outcomes in closed-loop market environments. |
| [SkillForge: Co-Evolving Skills and Agents via Dynamic Skill Lifecycles](http://arxiv.org/abs/2610.09832v1) | Yuyao Ge et al. | Introduces dynamic skill lifecycle management for memory-augmented LLM agents, enabling co-evolution of skills and policies to prevent retention of obsolete skills. |
| [Training Advisors for LLM Agents from Task Outcomes](http://arxiv.org/abs/2610.09858v1) | Sergei Polezhaev et al. | Presents Caddie, a method for training critic agents that provide natural-language feedback to improve agent decision-making from task outcomes alone. |
| [Self-Evolve With a Reference: Anchored Training of Tool-Integrated Agents](http://arxiv.org/abs/2610.09856v1) | Wenjie Lia et al. | Proposes curriculum and executor agents with reference-anchored training to improve self-consistency signals in tool-integrated agent learning loops. |
| [Think Before You Paint: Recursive Latent Reasoning for Diffusion Models](http://arxiv.org/abs/2610.09876v1) | Paweł Skierś et al. | Combines discrete symbolic reasoning with diffusion models via recursive latent reasoning (TRM), solving visual reasoning tasks like Sudoku and mazes that diffusion models typically fail on. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Dual-QK: Sharp Queries and Flat Keys for Prunable 2-bit KV Caches](http://arxiv.org/abs/2610.09827v1) | Sunjoo Whang et al. | Proposes rotation-based quantization with query-key decoupling for 2-bit KV cache pruning, redistributing energy of key outliers to improve compression efficiency. |
| [Layerwise Error Attribution for Fast and Robust Mixed-Precision Post-Training Quantization](http://arxiv.org/abs/2610.09877v1) | Samy Houache et al. | Introduces layerwise error attribution to manage sensitivity in mixed-precision PTQ, addressing combinatorial allocation under memory budgets. |
| [ORCA: Hunting Compositional Failures in Text-to-Image Diffusion](http://arxiv.org/abs/2610.09841v1) | Arshia Hemmat et al. | Systematically analyzes and addresses compositional failures in text-to-image diffusion models, where attributes bind incorrectly and spatial relations invert. |
| [UltraText Bench: A Comprehensive Bilingual Benchmark for Evaluating Visual Text Rendering](http://arxiv.org/abs/2610.09823v1) | Deyuan Liu et al. | Introduces a bilingual benchmark for evaluating visual text rendering in image generation, testing sustained performance across demanding scenes. |
| [Global Average Precision for Representation Learning](http://arxiv.org/abs/2610.09863v1) | Bill Psomas et al. | Proposes a global mAP metric that evaluates representation learning across all queries simultaneously, rather than averaging per-query metrics. |
| [Decoupling Logic from Persona: Structural Immunity of Edge LLM Agents to Context Pollution](http://arxiv.org/abs/2610.09772v1) | Masaaki Nakatsu et al. | Investigates how edge LLM agents maintain logical reasoning when context windows are polluted with persona-heavy conversational history. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Learning Traffic Flow Dynamics with Stochastic Physics-Informed Neural Cellular Automata](http://arxiv.org/abs/2610.09946v1) | Federica Bragone et al. | Combines cellular automata with physics-informed neural networks for interpretable traffic flow modeling, capturing local interaction rules and emergent dynamics. |
| [Learning joint probabilistic weather forecasts from station observations alone](http://arxiv.org/abs/2610.09898v1) | Chaeyeon Yi et al. | Presents CLARA, which learns joint Gaussian predictive distributions of surface weather variables from station data without numerical weather prediction models. |
| [Many Ways to Succeed: Diversity-Driven RL Fine-Tuning for VLA Generalization](http://arxiv.org/abs/2610.09943v1) | Haoru Li et al. | Uses diversity-driven RL fine-tuning to improve vision-language-action policy generalization beyond the training distribution by reshaping exploration selectively. |
| [Itgan at NADI 2026: Parameter-Efficient Whisper Adaptation for Robust Arabic ASR](http://arxiv.org/abs/2610.09934v1) | Ibrahim Almajai et al. | Adapts Whisper with LoRA for robust Arabic ASR across dialects and code-switched speech, achieving strong results with consumer GPUs. |
| [KGATE: a Knowledge Graph Embedding Training Environment](http://arxiv.org/abs/2610.09927v1) | Benjamin Loire et al. | Provides a comprehensive training environment for knowledge graph embedding models, supporting autoencoder architectures for link prediction and classification. |

---

## Research Trend Signal

Today's submissions paint a clear picture of where the field is heading. **Agentic systems** dominate the landscape—the community is grappling with how to make agents that can estimate their own runtime, evolve their skills dynamically, and be evaluated rigorously beyond outcome metrics. The rise of **process-supervision RL** (BoT-GRPO) signals a shift from outcome-based reward modeling to granular, token-level reasoning supervision.

On the **efficiency front**,KV cache compression and mixed-precision quantization are becoming increasingly sophisticated, with structural approaches (Dual-QK) replacing naive methods. The work on **catastrophic forgetting in output embeddings** is particularly noteworthy—it reframes the forgetting problem around token-level sparsity in the training distribution.

Meanwhile, **multimodal reasoning** is evolving beyond simple generation toward compositional robustness (ORCA), recursive latent reasoning (Think Before You Paint), and rigorous benchmarking (UltraText Bench). The convergence of discrete reasoning with generative models suggests a promising hybrid paradigm.

---

## Worth Deep Reading

1. **[BoT-GRPO: Efficient Process-Reward RL for Reasoning via Bag-of-Token Aggregation](http://arxiv.org/abs/2610.09804v1)** — This paper directly addresses a fundamental limitation in how RL currently trains reasoning LLMs. The bag-of-token aggregation approach offers a principled way to provide process supervision without incurring excessive computational overhead. Given the central role of RL in eliciting emergent reasoning, this method could become a standard component of reasoning model training pipelines.

2. **[AgentTime: Can Agents Estimate and Control Their Own Runtime?](http://arxiv.org/abs/2610.09944v1)** — Runtime control is an underexplored but practically critical aspect of autonomous agents. This work opens a new dimension of agentic capability—temporal self-awareness—that will be essential for deploying agents in real-world systems with strict latency budgets. The framing as a "sense of time" is conceptually rich and likely to inspire follow-up work.

3. **[A Deafening Silence: Catastrophic Forgetting Lives in the Output Embeddings of Tokens the Data Never Speaks](http://arxiv.org/abs/2610.09835v1)** — The finding that forgetting concentrates in output embeddings for unseen tokens is both surprising and actionable. The proposed parameter-freezing mitigation is simple yet effective. This paper fundamentally reframes how we think about catastrophic forgetting in LLMs and has direct implications for continual learning protocols.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*