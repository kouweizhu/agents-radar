# ArXiv AI Research Digest 2026-09-18

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-18 00:44 UTC

---

<think>Let me analyze these 50 papers from ArXiv (cs.AI, cs.CL, cs.LG) published on 2026-09-16 and create a structured research digest.

First, I need to identify the most significant research directions and select 8-15 important papers organized by theme.

Looking at the papers:

**Major themes I can identify:**

1. **Large Language Models** - multiple papers on tokenization, preference alignment, scaling laws, MoE, model collapse, etc.
2. **Agents & Reasoning** - tool use, multi-agent systems, cognitive extensions, agent benchmarking
3. **Methods & Frameworks** - benchmarks, new techniques, kernel methods, reinforcement learning frameworks
4. **Applications** - scientific code, healthcare, legal, education, robotics, scientific figure reconstruction

Let me select the most important papers:

1. **Objective vs. Search: Decomposing What Makes a Good Tokeniser** - important for understanding tokenization
2. **A Zeroth-Order Paradigm for LLM Preference Alignment** - alignment methods
3. **How Model Growth, Recursion, and Boundary Operators Influence Scaling Exponents** - scaling laws
4. **Preventing Model Collapse: A Fisher-Rao Perspective on the Dynamics of Training with Synthetic Data** - important for LLM training
5. **Infinite-Parameter LLMs: Generating and Adapting Weights from Live Data** - MoE innovations
6. **Cognitive Extensions for Dual-Process Language Agents** - agent reasoning
7. **PANORAMA: Panoptic Grounded Captioning** - multimodal
8. **ScienceIDE: Turning World's Scientific Codebase into Agent Learnable Environments** - scientific AI
9. **MUSE: Benchmarking Large Vision-Language Models on Multi-Modal Understanding in Situated Education** - education benchmarking
10. **Flag Game: A Toy Model for Mechanistic Swarm Interpretability** - safety/interpretab


11. **ASLEval: Measuring Privacy Exposure Displacement in LLM Agent Sessions** - privacy
12. **EviGen: Predictive Evidence Scaffolding for Verifiable Clinical Rationale Generation** - healthcare
13. **ReFigBench: Benchmarking Scientific Figure Reconstruction** - scientific applications
14. **Taming the Agentic RAN** - agentic systems in networking

Now I'll organize these into the four themes:

**🧠 Large Language Models:**
- Tokenization paper
- Preference alignment
- Scaling exponents
- Model collapse
- Infinite-parameter LLMs

**🤖 Agents & Reasoning:**
- Cognitive extensions
- Agentic RAN
- Flag Game

**🔧 Methods & Benchmarks:**
- MUSE benchmark
- ASLEval
- ScienceIDE

**📊 Applications:**
- EviGen (healthcare)
- ReFigBench (scientific figures)
- PANORAMA (multimodal)

I need to narrow down to 8-15 papers across these themes, focusing on the most impactful work in each category.</think>

# ArXiv AI Research Digest — September 18, 2026

## 1. Today's Highlights

Today's ArXiv submissions reveal several convergent research trajectories. A major theme emerges around **synthetic data and model collapse** — researchers are rigorously examining the dynamics of training on synthetic data, with the Fisher-Rao perspective offering a principled framework to prevent degenerative feedback loops. Simultaneously, **mixture-of-experts architectures** continue to evolve, with "infinite-parameter" approaches suggesting live data adaptation during inference. In agentic systems, dual-process cognitive architectures and memory mechanisms are advancing rapidly, while new benchmarks in education, scientific figure reconstruction, and privacy evaluation signal growing emphasis on practical, domain-specific VLM/LLM deployment. The O-RAN agentic control plane work exemplifies emerging safety concerns in autonomous multi-agent environments.

---

## 2. Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Objective vs. Search: Decomposing What Makes a Good Tokeniser](http://arxiv.org/abs/2609.19145v1) | Ahmetcan Yavuz, Clara Meister et al. | Decomposes tokenisation into orthogonal optimisation objectives (compression vs. log-likelihood) and search procedures (bottom-up merging vs. top-down pruning), providing a unified framework to understand why BPE and UnigramLM perform differently. |
| [A Zeroth-Order Paradigm for LLM Preference Alignment](http://arxiv.org/abs/2609.19144v1) | Peter Chen, Xi Chen et al. | Proposes zeroth-order methods for preference alignment that extract information from preference pairs with small likelihood margin, addressing limitations of likelihood displacement in direct alignment approaches. |
| [How Model Growth, Recursion, and Boundary Operators Influence Scaling Exponents](http://arxiv.org/abs/2609.19107v1) | Zixi Chen, Akshay Vegesna et al. | Demonstrates that architectural interventions can modify scaling exponents in pre-training, achieving exponential improvements in performance with increased computation—challenging conventional wisdom. |
| [Preventing Model Collapse: A Fisher-Rao Perspective on the Dynamics of Training with Synthetic Data](http://arxiv.org/abs/2609.18878v1) | Matteo Marchi, João Pedro Silvestre et al. | Uses Fisher-Rao geometry to analyse and prevent model collapse when training LLMs recursively on synthetic data, providing theoretical grounding for mitigating degenerative feedback loops. |
| [Infinite-Parameter LLMs: Generating and Adapting Weights from Live Data](http://arxiv.org/abs/2609.18842v1) | Jinli Hu, Ross M. Clarke et al. | Introduces frameworks for generating and adapting Mixture-of-Experts weights during inference from live data, extending MoE architectures toward truly dynamic parameter pools. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Cognitive Extensions for Dual-Process Language Agents: Memory and Self-Reflection in Interactive Environments](http://arxiv.org/abs/2609.19128v1) | João Meneses dos Santos, Arlindo L. Oliveira | Extends SwiftSage with modular cognitive extensions for memory and self-reflection, addressing brittleness in long-horizon interactive tasks. |
| [Flag Game: A Toy Model for Mechanistic Swarm Interpretability](http://arxiv.org/abs/2609.19124v1) | Elizabeth Pavlova, Hidenori Tanaka | Introduces a minimal environment to study emergent coordinated behaviours and belief formation in AI agents, providing a tractable setting for collective alignment research. |
| [Taming the Agentic RAN: Stability-Guaranteed Arbitration of Autonomous AI Agents in O-RAN](http://arxiv.org/abs/2609.18857v1) | Seyed Bagher Hashemi Natanzi, Bo Tang | Demonstrates safety failures in agentic O-RAN control planes and proposes arbitration mechanisms with stability guarantees for multi-vendor rApps. |
| [Beyond Outcomes: Dual-View Relational Learning for Efficient Agent Benchmarking](http://arxiv.org/abs/2609.18909v1) | Xinshuai Guo, Junjie Wu et al. | Addresses benchmark compression by modelling redundancy in task-model final-score distributions, enabling efficient agentic evaluation. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ScienceIDE: Turning World's Scientific Codebase into Agent Learnable Environments](http://arxiv.org/abs/2609.19134v1) | Hejia Geng, Zesen Huang et al. | Converts scientific code repositories into agent learnable environments, addressing fragmented toolchains and implicit domain conventions for reliable learning. |
| [MUSE: Benchmarking Large Vision-Language Models on Multi-Modal Understanding in Situated Education](http://arxiv.org/abs/2609.19088v1) | Luyao Zhu, Xun Wei Yee et al. | Evaluates VLMs in educational settings, requiring interpretation of artistic imagery and semantic/affective/cultural context for AI-assisted language learning. |
| [ASLEval: Measuring Privacy Exposure Displacement in LLM Agent Sessions](http://arxiv.org/abs/2609.18864v1) | Guosen Wu, Huizhen Huang et al. | Introduces privacy exposure displacement metrics to capture unauthorized data exposure across multi-step agentic sessions, beyond single-action evaluation. |
| [ReFigBench: Benchmarking Scientific Figure Reconstruction as Editable PowerPoint Artifacts](http://arxiv.org/abs/2609.18844v1) | Liyang Fan, Chi Wei et al. | Evaluates multimodal coding agents on reconstructing scientific figures as editable PowerPoint, assessing visual understanding plus artifact generation. |
| [Double descent is the principle of least action](http://arxiv.org/abs/2609.19076v1) | Congzhou M Sha | Explains double descent phenomena through statistical mechanics, characterising training trajectories of stochastic gradient-based methods. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [PANORAMA: Panoptic Grounded Captioning via Mask Proposal Selection](http://arxiv.org/abs/2609.19143v1) | Sara Pieri, Evangelos Kazakos et al. | Enables comprehensive and spatially grounded image captions by associating generated text with image pixels through mask proposal selection. |
| [EviGen: Predictive Evidence Scaffolding for Verifiable Clinical Rationale Generation](http://arxiv.org/abs/2609.18852v1) | Fengnan Li, Heman Burre et al. | Provides evidence scaffolding for verifiable clinical rationale generation from longitudinal EHRs, reducing clinician review burden while ensuring traceability. |
| [GrainSpeech: Less Context, More Detail for Compact Speech Synthesis](http://arxiv.org/abs/2609.18856v1) | Zitao Liang, Chang Gao | Investigates encoder context and Mel-spectrogram supervision trade-offs in compact acoustic models for speech synthesis. |
| [PersonaPath: Towards Knowledge-Centric Personalized Learning Path Planning](http://arxiv.org/abs/2609.18861v1) | Yu Liu, Zeming Liu et al. | Moves beyond exercise-centric recommendation toward goal-oriented learning path planning with explicit learner prerequisites. |

---

## 3. Research Trend Signal

A clear **dual-axis shift** emerges from today's submissions. First, **agentic architectures** are maturing beyond simple tool-use toward dual-process cognitive models with explicit memory and self-reflection, as evidenced by extensions to SwiftSage and new benchmarks for multi-agent coordination. Second, **foundational training dynamics** are receiving renewed theoretical attention—particularly around synthetic data (model collapse) and scaling laws—suggesting the field is consolidating lessons from the race toward larger models. The emergence of "infinite-parameter" MoE systems and Fisher-Rao analyses indicates a pivot toward **adaptive, geometry-informed** approaches that move beyond static pre-training. Domain-specific benchmarks in healthcare education, scientific figure reconstruction, and agentic telecommunications also signal that VLM/LLM evaluation is becoming more granular and application-aware.

---

## 4. Worth Deep Reading

1. **["Preventing Model Collapse: A Fisher-Rao Perspective on the Dynamics of Training with Synthetic Data"](http://arxiv.org/abs/2609.18878v1)** — This paper provides a principled theoretical framework for one of the most pressing practical challenges in LLM development: training on synthetic data without degradation. The Fisher-Rao geometry offers a unifying perspective that could reshape how practitioners approach data curation.

2. **["Infinite-Parameter LLMs: Generating and Adapting Weights from Live Data"](http://arxiv.org/abs/2609.18842v1)** — A conceptually ambitious paper that extends MoE paradigms toward runtime weight adaptation. If reproducible, this represents a fundamental shift from static model deployment toward truly dynamic inference-time computation.

3. **["Cognitive Extensions for Dual-Process Language Agents: Memory and Self-Reflection in Interactive Environments"](http://arxiv.org/abs/2609.19128v1)** — As language agents move into production, this work addresses real brittleness in interactive settings. The modular cognitive architecture provides a concrete design pattern for practitioners building autonomous agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*