# ArXiv AI Research Digest 2026-10-28

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-28 01:37 UTC

---

<think>Let me analyze these 50 papers to create a comprehensive research digest. I need to identify the most significant research directions and select 8-15 important papers organized by theme.

Let me first categorize the papers by theme:

**Large Language Models:**
1. Dense Representation Learning and Differentiable Shape Modeling for Spine Landmark Detection - cs.CV, cs.AI
2. DCKV: Learned Transform Coding of the Prompt KV Cache - cs.LG, cs.AI
3. Self-Keyed In-Parameter Memorization for External Memory-Free Dialogue Recall - cs.CL, cs.AI
4. Developing a Speech Language Model for Basque - cs.CL, cs.AI, eess.AS
5. Natural Hard-Negative Mining from Positives for Instruction-Following Retrieval - cs.AI
6. Conservative Dueling Bandits: Preference Learning under Baseline Constraints - cs.LG, cs.AI
7. An Algebra of Transformers - cs.LO, cs.AI
8. Select-TTT: Query-Conditioned Selective Fast Weight Updates - cs.LG, cs.AI, cs.CL
9. The Vocabulary Is Already Here: Adapting Pretrained Interpretable Features for Generative Recommendation - cs.IR, cs.AI
10. Robust LLM Data Selection via Content-Invariant Gradient Attribution - cs.LG, cs.AI
11. Conservative Dueling Bandits (already listed)
12. Specialization, Diversity, and Scaling in Child-Scale Language Models - cs.CL, cs.AI, cs.LG
13. Balanced State Subspaces for Mamba-2 State Compression - cs.LG, cs.AI, cs.CL
14. A Quantitative Approach to Asch Conformity in Frontier Large Language Models - cs.CL, cs.AI


15. Learning to Formalize: Bridging Open-Ended Workloads and Fast Decision Models - cs.AI

I'll continue categorizing the remaining papers, focusing on emerging research trends in AI agents, reasoning, and methodological innovations. The agents and reasoning category reveals promising developments in autonomous systems, multi-step planning, and adaptive learning strategies. Key papers explore complex agent behaviors, from software engineering applications to policy improvement in challenging reasoning scenarios.

The next set of papers highlights advanced techniques in agent design, including self-evolving systems, collaborative multi-agent approaches, and innovative decision-making frameworks. Researchers are pushing boundaries in agent adaptability, with papers addressing policy optimization, joint decoding strategies, and dynamic team evolution in complex problem-solving environments.

Methodological papers demonstrate significant computational and algorithmic advances. Researchers are developing novel approaches in gradient attribution, evidence selection, and knowledge representation. Emerging areas like knowledge-graph learning, video model adaptation, and physics-inspired computational methods show the field's multidisciplinary nature.

The research landscape reveals sophisticated techniques for improving AI system performance, including generative recommendation, data selection, and specialized learning methods across diverse domains like robotics, mathematical reasoning, and scientific machine learning.

These applications span critical areas such as healthcare imaging, wind energy optimization, autonomous systems, financial analysis, and audio processing. The breadth of research highlights AI's transformative potential across multiple technological and scientific domains.</think>

# ArXiv AI Research Digest — October 28, 2026

## 1. Today's Highlights

Today's submissions reveal several converging research frontiers. **Agentic systems** continue their rapid advancement, with multiple works tackling self-improvement mechanisms (co-evolving rubrics, population-centered evolution, harness refinement) and multi-agent collaboration (evolving teams, memory management in multi-agent systems). **Test-time training and adaptation** emerges as a major theme, with in-place TTT now made practical for large language models and selective approaches enabling query-conditioned adaptation. In multimodal domains, **vision-language agents** are gaining latent world models, while **speech LLMs** for low-resource languages (Basque) demonstrate the push toward inclusive AI. Notably, **batch invariance in LLM serving** and **KV cache compression** signal growing attention to practical deployment challenges.

---

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [DCKV: Learned Transform Coding of the Prompt KV Cache in Hybrid Language Models](http://arxiv.org/abs/2610.36950v1) | Egor Maximov et al. | Introduces a differentiable codec for KV cache compression in hybrid language models, addressing the bottleneck of prompt state storage and movement. Enables efficient reuse of long-prompt contexts. |
| [Select-TTT: Query-Conditioned Selective Fast Weight Updates for In-Place Test-Time Training](http://arxiv.org/abs/2610.36794v1) | Yue Wu et al. | Makes in-place test-time training practical for LLMs by repurposing existing layers as fast-weight parameters, allowing models to internalize context on-the-fly without full fine-tuning. |
| [Balanced State Subspaces for Mamba-2 State Compression](http://arxiv.org/abs/2610.36617v1) | Shang Tingyu et al. | Analyzes energy distribution in Mamba-2's recurrent states and proposes subspace-based compression beyond independent channel pruning, improving memory efficiency for long-context decoding. |
| [Robust LLM Data Selection via Content-Invariant Gradient Attribution](http://arxiv.org/abs/2610.36755v1) | Jia Gu et al. | Addresses gradient-based data attribution's sensitivity to content variations, enabling more reliable selection of high-quality training examples for instruction fine-tuning. |
| [An Algebra of Transformers](http://arxiv.org/abs/2610.36795v1) | Yong Wang et al. | Provides theoretical analysis of transformer computability, including Turing-completeness and parallelizability, advancing understanding of transformer expressive power. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [When All Rollouts Fail: Policy-Compatible Joint Decoding for Hard-Problem Reasoning](http://arxiv.org/abs/2610.36849v1) | Zehao Wang et al. | Addresses the "learning cliff" in RLVR where models fail on problems beyond their ability by introducing policy-compatible joint decoding to improve exploration. |
| [Evolving Agent Teams](http://arxiv.org/abs/2610.36848v1) | Shiyi Cao et al. | Tackles GPU kernel optimization via evolving teams of agents that escape local optima in expert-written codebases, surpassing single-agent approaches. |
| [When the Critic Falls Behind: Co-Evolving Rubrics and Harnesses for Continual Agent Self-Improvement](http://arxiv.org/abs/2610.36826v1) | Hao Chen et al. | Enables harnesses (interaction frameworks around LLMs) to evolve from execution experience while co-evolving supervision rubrics, addressing static supervision limitations. |
| [The View from Nowhere: Population-Centered Agent Evolution](http://arxiv.org/abs/2610.36660v1) | Shuo Yan et al. | Proposes population-centered improvement that leverages broader agent populations rather than selected parents, addressing coverage gaps in self-improving AI systems. |
| [Remembering Is Not Enough: Refining Memories and Learning When to Use Them in Multi-Agent Systems](http://arxiv.org/abs/2610.36652v1) | Yipeng Hao et al. | Introduces DiscernMem, a framework for LLM multi-agents to determine when stored memories are flawed or misapplied, improving memory reliability. |
| [Vision-Language Agents Can Learn in Their Own Latent Worlds](http://arxiv.org/abs/2610.36925v1) | Haoxi Li et al. | Enables pretrained VLMs to drive policy improvement through online interaction, leveraging internalized world knowledge for learning from experience. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [GUI-JEPA: Candidate-Conditioned JEPA Latents as a Fast Action Policy for Mobile GUI Agents](http://arxiv.org/abs/2610.36877v1) | Bingchao Wang et al. | Uses JEPA latent representations to evaluate candidate actions without full VLM decoding, dramatically improving speed and reducing memory for mobile GUI agents. |
| [RubricAtlas: Mining Type-Level Rubrics from Expert Reports to Evaluate Deep Research Agents](http://arxiv.org/abs/2610.36878v1) | Delin Wang et al. | Extracts type-level rubrics from expert reports for evaluating multi-step research agents, going beyond query-specific binary rubrics. |
| [Batching the Reflective Optimization Loop: Parallel Proposals Make GEPA Faster and Better](http://arxiv.org/abs/2610.36774v1) | Jialin Zhang et al. | Extends GEPA optimizer to batch candidate proposals and evaluations, addressing sequential bottlenecks in reflective text optimization. |
| [God Does Not Play Dice: Enforcing Batch Invariance in Agentic Kernel Generation](http://arxiv.org/abs/2610.36623v1) | Youwei Bao et al. | Identifies and addresses batch invariance failures in LLM serving, where numerical outputs vary with batch composition—a critical deployment issue. |
| [TAPESTRY: A Single Backbone for Video Generation and Robot Control](http://arxiv.org/abs/2610.36823v1) | Jeremy A. Collins et al. | Unifies video generation and robot control on a single pretrained backbone, leveraging video priors without resource-intensive test-time generation. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Developing a Speech Language Model for Basque](http://arxiv.org/abs/2610.36911v1) | Andoni Sudupe et al. | Presents the first open Speech LLM for Basque (low-resource language) based on LLaMA-Omni, enabling low-latency end-to-end spoken interaction. |
| [Noise Steering: Exploiting Wake Steering and Acoustic Directivity for Noise-Constrained Wind Farm Control via RL](http://arxiv.org/abs/2610.36888v1) | Martín de Frutos et al. | Uses reinforcement learning to jointly optimize turbine yaw for power and noise constraints, accounting for wake interactions and acoustic directivity. |
| [Beyond the Evidence Coherence Trap: Agent-Driven Evidence Selection for Temporally Disordered Fake News Detection](http://arxiv.org/abs/2610.36764v1) | Chi Wang et al. | Addresses temporally disordered fake news by using agents to select evidence across reordered events, beyond simple coherence checking. |
| [Look Only When Needed: Certificate-Guided Visual Routing for Efficient Diffusion VLMs](http://arxiv.org/abs/2610.36671v1) | Donghyeon Cho et al. | Prunes visual tokens in diffusion VLMs using certificates, reducing the 89-97% visual token burden that dominates computation. |
| [An Incremental Knowledge-Graph Learner Digital Twin for Evidence-Grounded Early Warning](http://arxiv.org/abs/2610.36820v1) | Ngoc Luyen Le et al. | Connects early warning in learning analytics to inspectable evidence via knowledge-graph digital twins, improving intervention transparency. |

---

## 3. Research Trend Signal

A clear trend toward **self-improving and autonomous agents** dominates today's lineup—multiple papers address agent evolution (population-centered, co-evolving harnesses, team evolution) and memory/reflection mechanisms. **Test-time adaptation** is maturing rapidly: in-place TTT for LLMs and selective query-conditioned updates signal a shift from static deployment toward dynamic on-the-fly learning. In multimodal, **vision-language agents** are moving beyond passive perception toward active latent world modeling. On the infrastructure side, **batch invariance** and **KV cache compression** reveal growing deployment-consciousness. The push toward **low-resource language support** (Basque speech LLM) and **domain-specific agents** (scientific, software engineering, wind farm control) shows the field's applied maturation.

---

## 4. Worth Deep Reading

1. **[Evolving Agent Teams](http://arxiv.org/abs/2610.36848v1)** — Demonstrates that multi-agent collaboration can escape local optima where single agents fail, applied to real-world GPU kernel optimization (FlashInfer). This represents a practical advance in applying LLMs to complex engineering problems.

2. **[Select-TTT: Query-Conditioned Selective Fast Weight Updates for In-Place Test-Time Training](http://arxiv.org/abs/2610.36794v1)** — Makes test-time training practical for large LLMs by repurposing existing layers, opening a viable path for models to adapt to incoming context without full fine-tuning or excessive compute.

3. **[God Does Not Play Dice: Enforcing Batch Invariance in Agentic Kernel Generation](http://arxiv.org.abs/2610.36623v1)** — Identifies a critical but underexplored deployment issue: numerical output variation due to dynamic batching in LLM serving. The solution has immediate practical impact for production systems.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*