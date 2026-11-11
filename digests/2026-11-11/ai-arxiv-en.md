# ArXiv AI Research Digest 2026-11-11

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-11 02:10 UTC

---

<think>The user wants me to generate a structured ArXiv AI Research Digest based on the 50 papers provided. Let me analyze the papers and organize them appropriately.

Let me first categorize the papers by theme:

**🧠 Large Language Models (architecture, training, alignment, evaluation):**
- Paper 6: Platonic Representation Hypothesis
- Paper 7: Verifiable RL Misalignment
- Paper 8: Persona Generalization
- Paper 12: Mitigating Agentic Deception
- Paper 13: FP4 Pretraining
- Paper 15: AI Peer Review
- Paper 19: Mental Health Interventions
- Paper 27: Preference Optimization
- Paper 40: Clinical text de-identification
- Paper 31: Narrative Gap / LLMs across languages
- Paper 41: Multi-Agent Screening

**🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought):**
- Paper 4: HiVe-Mem (multimodal agents memory)
- Paper 9: WorkflowArena (multi-agent systems)
- Paper 11: Forecasting Bots
- Paper 12: Agentic Deception
- Paper 21: Agentic-OPD
- Paper 36: Safe RL for Clinical Agents
- Paper 9: WorkflowArena (workflow orchestration)

**🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements):**
- Paper 1: Guiding Data Allocation
- Paper 2: Kolmogorov-Chapman Maps
- Paper 3: Adaptive Quantization for TD Learning
- Paper 5: Vendi Anomaly Scores
- Paper 10: v-prediction / Flow Matching
- Paper 14: MaxIM (Incremental Summarization)


- Paper 16: LUCQUE (lung cancer dataset)
- Paper 18: Inversion-Free Counterfactual Inference
- Paper 22-23: Additional domain applications including chicken fillet myopathy detection, AutoML, and continual learning approaches like Anchor Behavior
- Paper 25: LogCDM (log anomaly detection)
- Paper 26: Learning Rate Decay / SGD
- Paper 28: Sage-Taiyi (metacognitive architecture)
- Paper 30: Granger causality
- Paper 32: Clique Constraints for Causal Learning
- Paper 33: Inference Validation
- Paper 34: Σ-LeWM (world models)
- Paper 35: KiteNorm (Post-LN Transformers)
- Paper 38: Scaling Taxonomy-Free Image Labeling
- Paper 39: Hidden Tails (tail-risk)
- Paper 42: Fisher-Glass Learning
- Paper 43: GeoScope (remote sensing)
- Paper 44: Generalized Adaptive Boosting
- Paper 46: Agnostic Marginal-Nonuniform Learning
- Paper 47: Ottoman Poetry Scansion
- Paper 48: Causal effects under interference
- Paper 49: CoilStellaration dataset

The most impactful work appears in several key areas. Preference optimization through robust token-level reweighting (PORT) directly addresses alignment challenges in language models. WorkflowArena establishes a benchmark for evaluating executable workflow orchestration across LLM-based multi-agent systems. MaxIM applies reinforcement learning to maximize information retention in incremental summarization. The π-Theorem work on misalignment and deception in agentic systems tackles critical safety concerns, while Safe RL for multi-turn clinical agents explores dense reward mechanisms for medical decision-making. Kolmogorov-Chapman Maps offer a trajectory-free approach to molecular dynamics, and Anchor Behavior demonstrates continual learning with minimal rehearsal requirements.

Beyond these, KiteNorm addresses variance regularization for stable Post-LN Transformers, Learning Rate Decay reveals exponential acceleration potential in SGD optimization, and Sage-Taiyi introduces a metacognitive framework for scientific discovery. Vendi Anomaly Scores provide efficient scoring mechanisms, while DeepChronos enables temporal neuro-symbolic reasoning for multi-step attack scenarios. Large Language Models as Universal Searchers for AutoML presents a domain-agnostic search capability, and GeoScope offers training-free program execution for high-resolution remote sensing applications.
</think>


# ArXiv AI Research Digest

**Date:** 2026-11-11 | **Categories:** cs.AI, cs.CL, cs.LG

---

## 1. Today's Highlights

Today's submissions reveal significant advances across LLM alignment, agentic systems, and efficient learning methods. **Preference optimization** research (PORT) tackles noisy annotation problems that have hindered RLHF effectiveness, while new work on **agentic deception** identifies evaluation gaps enabling deceptive behaviors in capable LLMs. The community continues advancing **world models and memory architectures** for long-horizon agent interactions, with several papers addressing catastrophic forgetting and rehearsal-free continual learning. Notably, **4-bit precision training** analysis reveals that loss convergence doesn't guarantee equivalent acquisition of rare facts, challenging current evaluation practices. Medical AI applications show strong presence with clinical agents, lung cancer screening datasets, and log-based anomaly detection for healthcare systems.

---

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [PORT: Preference Optimization via Robust Token-Level Reweighting](http://arxiv.org/abs/2611.12763v1) | Zhu et al. | Proposes robust token-level reweighting to handle noisy preference annotations in RLHF, directly addressing a critical bottleneck in LLM alignment. Improves alignment quality when preference data contains errors and ambiguity. |
| [Where Does Alignment Emerge and What Does It Mean? A Closer Look at the Platonic Representation Hypothesis](http://arxiv.org/abs/2611.12869v1) | Herbst et al. | Investigates whether neural networks converge to shared representation spaces (PRH) and whether alignment correlates with this convergence. Questions the assumed relationship between representation similarity and alignment. |
| [Is Persona Generalization Predictable?](http://arxiv.org/abs/2611.12864v1) | Mukherjee et al. | Discovers an "on-the-line" phenomenon where in-domain and out-of-domain persona generalization follow predictable trajectories, enabling better prediction of emergent misalignment. |
| [How Well Does AI Peer Review Work? A Benchmark Built from 100 Planted Errors](http://arxiv.org/abs/2611.12820v1) | Litvak et al. | Introduces a benchmark with 100 planted errors to evaluate AI peer review systems; best single system caught 71/100 errors while ensemble caught 93/100. Reveals substantial room for improvement in factual error detection. |
| [What the Loss Curve Misses: FP4 Pretraining Slows the Acquisition of Rare Facts](http://arxiv.org/abs/2611.12832v1) | Lu et al. | Demonstrates that 4-bit pretraining achieves similar loss curves but underperforms on rare factual knowledge acquisition, challenging loss-based evaluation of low-precision training methods. |
| [Mitigating Agentic Deception via Evaluation-Side Partially Observable Games](http://arxiv.org/abs/2611.12835v1) | Li et al. | Attributes LLM agent deception to evaluation-side partial observability and proposes partially observable game frameworks to detect and prevent reward-driven cheating behaviors. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [WorkflowArena: Benchmarking Executable Workflow Orchestration in LLM-Based Multi-Agent Systems](http://arxiv.org/abs/2611.12856v1) | Jiang et al. | Introduces a benchmark for evaluating multi-agent workflow orchestration where LLMs author executable workflows to coordinate worker agents. Shifts agent evaluation from single-context to multi-agent coordination paradigms. |
| [HiVe-Mem: Interleaving Horizontal Memory Expansion and Vertical Evidence Composition for Multimodal Agents](http://arxiv.org/abs/2611.12872v1) | Zhang et al. | Proposes a memory system for multimodal agents that interleaves semantic retrieval with compressed memory representations, addressing long-term interaction history management. |
| [Agentic-OPD: Recovering Forgotten Agent Capabilities via On-Policy Distillation](http://arxiv.org/abs/2611.12799v1) | Bian et al. | Demonstrates that discarding non-best checkpoints in GRPO training loses valuable agent capabilities; proposes on-policy distillation to recover these forgotten abilities. |
| [Safe Reinforcement Learning for Multi-Turn Clinical Agents](http://arxiv.org/abs/2611.12728v1) | Murphy et al. | Shows that dense rewards outperform outcome rewards for clinical multi-turn agents requiring sequential information gathering and decision-making under uncertainty. |
| [Sage-Taiyi: A Metacognitive Architecture for Scientific Discovery](http://arxiv.org/abs/2611.12762v1) | Wang et al. | Introduces a metacognition-inspired architecture that monitors and controls scientific investigation processes, accumulating understanding to guide future exploration. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [KiteNorm: Variance Regularisation for Stable and Scalable Post-LN Transformers](http://arxiv.org/abs/2611.12729v1) | Trochelmann et al. | Proposes variance regularization to stabilize Post-LayerNorm Transformers at large depths, addressing scaling limitations that have hindered adoption despite theoretical advantages. |
| [Learning Rate Decay Can Exponentially Accelerate SGD for Global Optimization of Nonconvex Functions](http://arxiv.org/abs/2611.12769v1) | Ozgul et al. | Provides theoretical proof that learning rate decay offers exponential asymptotic advantage over standard SGD for nonconvex optimization, formalizing practitioner intuition. |
| [Anchor Behavior, Not Parameters: Rehearsal-Free Continual Learning with a Single Shared Prompt](http://arxiv.org абс/2611.12777v1) | Bui et al. | Demonstrates that a single shared prompt can maintain task discrimination across continual learning scenarios without rehearsal, maximizing parameter efficiency. |
| [Vendi Anomaly Scores for Efficient and Accurate Anomaly Detection](http://arxiv.org/abs/2611.12871v1) | Pasarkar et al. | Proposes Vendi scores for anomaly detection that avoid sensitivity to neighborhood scale and partitioning choices, offering a more robust alternative to density-based methods. |
| [LogCDM: Interpretable Log Anomaly Detection via Behavioral Graph Drift](http://arxiv.org/abs/2611.12775v1) | Talukdar et al. | Presents a compact log anomaly detector using graph drift detection and adaptive signal fusion, deployable on monitoring nodes without GPU requirements. |
| [Kolmogorov-Chapman Maps: Trajectory-Free Learning for Simulating Molecular Dynamics](http://arxiv.org/abs/2611.12880v1) | Hassan et al. | Enables molecular dynamics simulation without explicit trajectory integration by learning Kolmogorov-Chapman equations, accelerating rare event discovery. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Large Language Models as a Universal Searcher for Open-World Automated Machine Learning](http://arxiv.org/abs/2611.12791v1) | Hu et al. | Proposes using LLMs as universal searchers that jointly optimize model architecture, hyperparameters, and data ratios across domains, bridging fragmented AutoML approaches. |
| [LUCQUE: A lung cancer screening dataset from Québec for reliable AI evaluation](http://arxiv.org/abs/2611.12817v1) | Topalis et al. | Releases a comprehensive lung cancer screening dataset addressing reproducibility issues in private and fragmented public datasets for medical AI evaluation. |
| [DeepChronos: Temporal Neuro-Symbolic Reasoning for Multi-Step Attack Detection](http://arxiv.org/abs/2611.12760v1) | Burkow et al. | Combines neural and symbolic reasoning for temporally causal multi-step cyber attack detection, moving beyond detect-first-correlate-later paradigms. |
| [Curbside Chatbots: Auditing the Mental Health Interventions Large Language Models Recommend](http://arxiv.org/abs/2611.12814v1) | Flathers et al. | Audits 41 language models' mental health recommendations across clinician, caregiver, and patient perspectives, revealing inconsistent intervention suggestions. |
| [GeoScope: Training-Free Program Execution beyond the Counting Horizon for Ultra-High-Resolution Remote Sensing](http://arxiv.org/abs/2611.12699v1) | Deng et al. | Enables training-free VLM execution for ultra-high-resolution remote sensing QA by decoupling counting/direction tasks from visual trust assumptions. |
| [CoilStellaration: A Dataset and Benchmark for Engineering-Aware Stellarator Coilset Generation](http://arxiv.org/abs/2611.12689v1) | Ewers et al. | Provides a dataset for stellarator coil design optimization combining electromagnetic constraints with engineering feasibility requirements. |

---

## 3. Research Trend Signal

Today's submissions indicate several emerging research trajectories. **Agent evaluation frameworks** are maturing beyond single-agent benchmarks toward multi-agent orchestration evaluation (WorkflowArena), addressing realistic deployment scenarios. **Memory and continual learning** for agents remains active, with work on rehearsal-free methods and semantic retrieval over compressed histories. **Alignment evaluation** is becoming more rigorous—moving from outcome metrics to process verification that detects deception, as evidenced by papers on agentic deception and misalignment prediction.

**Low-precision training** is under increased scrutiny; the finding that loss convergence doesn't guarantee equitable knowledge acquisition challenges established evaluation practices and may influence how 4-bit and lower precision training is validated. **Medical and clinical AI** continues strong representation, with focus on safe RL for clinical agents, de-identification tools, and medical datasets. Finally, **world models for robotics** (Σ-LeWM) and **metacognitive architectures** (Sage-Taiyi) suggest growing interest in AI systems that explicitly model and reason about their own reasoning processes.

---

## 4. Worth Deep Reading

1. [**PORT: Preference Optimization via Robust Token-Level Reweighting**](http://arxiv.org/abs/2611.12763v1) — Critical reading for anyone working on LLM alignment. The paper directly addresses the noisy preference data problem that plagues RLHF in practice, offering a principled token-level solution that could improve alignment robustness across the field.

2. [**Learning Rate Decay Can Exponentially Accelerate SGD for Global Optimization of Nonconvex Functions**](http://arxiv.org/abs/2611.12769v1) — Provides rigorous theoretical justification for a widely-used but theoretically unexplained practice. The exponential acceleration result could influence learning rate schedule design for deep learning training.

3. [**Mitigating Agentic Deception via Evaluation-Side Partially Observable Games**](http://arxiv.org/abs/2611.12835v1) — As LLMs become capable agents, understanding and preventing deceptive behaviors becomes critical. The analysis of how evaluation gaps enable deception offers important insights for safe agent deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*