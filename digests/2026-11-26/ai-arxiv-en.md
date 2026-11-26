# ArXiv AI Research Digest 2026-11-26

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-26 04:19 UTC

---

<think>The user wants me to generate a structured ArXiv AI Research Digest based on the 50 papers provided. Let me analyze the papers and organize them into the required format.

First, let me categorize the papers by theme:

**🧠 Large Language Models (architecture, training, alignment, evaluation):**
- Diverse Alternative Reasoning Traces for Hard Math Problems (2611.34928)
- Knowledge-Base Gradient Descent: Self-Structuring Learning through Question Answering (2611.34841)
- Repairing the Trustworthiness of Distilled Language Models (2611.34831)
- Not all world models can doubt: how training objective and architecture shape epistemic uncertainty (2611.34830)
- Transferring Architecture as an Optimization Prior (2611.34816)
- PersonaFactory: Stylistic User Prompt Augmentation with Synthetic Persona Bank (2611.34785)
- One Model, Many Modes: Evolving System Prompt Ensembles for Creative Generation (2611.34760)
- What Is a Theory Worth to an LLM Solver? (2611.34751)
- DRBench Pro: A Knowledge-Centric Benchmark for Professional Deep Research Agents (2611.34852)
- ZeroHero: Training Small Language Agents from Scratch (2611.34635)
- Do We Really Need an LLM for Weight-Space Programming? (2611.34612)
- REE: A Scientific Research Entrance Exam for AI Agents (2611.34646)

**🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought):**
- Attack Policy Selection can Mislead Monitor Evaluators (2611.34934)
- RePace: Reasoning about Demonstration Speedup for Faster Vision-Language-Action Policies (2611.34864)


- When Every Rollout Fails: Splicing Learner-Conditioned Options into Long-Horizon Agent RL (2611.34777)
- Make the Adversary Spend More: Stateful Deception as a Cost-Exchange Primitive (2611.34770)
- TASK Memory: Beyond Text-Only Memory with Activation Steering and Knowledge Editing (2611.34762)
- Reading Fine-Tuning Diffs Through Lenses: Model Diffing for Backdoor Detection (2611.34758)
- Collect for Coverage, Replay with Evidence: Adaptive and Efficient On-Policy Distillation (2611.34756)
- How Well Do Vision-Language Scene Graphs Serve as Memory for Embodied Question Answering? (2611.34745)
- From Shared Patterns to Individual Evidence: Two-Stage Reasoning for Emerging Entities (2611.34708)
- Maco-RL: Scaling Agent Capabilities with Mixed-Task Reinforcement Learning (2611.34703)
- RoboEvo²: Recursive Robot Self-Improvement via Harness-Policy Co-Evolution (2611.34675)
- Solve Vision with Code: Coding Agents Are Stronger Visual Reasoners Than Video Models (2611.34813)
- VisualMontage: Manipulating the Beliefs of Vision-Language Agents (2611.34603)

**🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements):**
- μ-Bench: Benchmarking Multi-User Task Completion in Shared Interaction Voice Agents (2611.34920)
- Interpretable and Accurate Hybrid Decision Trees with Selective Case-Based Splits (2611.34887)
- BOP-Refer: Benchmark for Monocular 3D and 2D Object Grounding (2611.34862)
- From Prediction to Decision: Decision-Focused Fine-Tuning of Autoregressive Tabular Transformers (2611.34858)
- HOG-WAM: Improving Visual Robustness through Future Gradient Prediction (2611.34811)
- HoMe: Toward Practical Harness Optimization of Memory Systems for AI Assistants (2611.34624)
- DecisionReplay: A Corpus and Offline Simulator for Ensembling Decision Models (2611.34627)
- LatentRL-QAS: Transfer via Latent Reinforcement Learning for Quantum Architecture Search (2611.34634)
- Carrying Feature Ablations Across Sparse Autoencoder Seeds (2611.34637)
- When the Proxy Is Wrong: Mismatch-Corrected Bandits for Adaptive Data Sampling (2611.34707)
- A Failure-Driven Data Flywheel for Post-Training Vision-Language-Action Models (2611.34698)

**📊 Applications (domain-specific, multimodal, code generation):**
- Spectrum Adaptation of AI-Native Autoencoder Communications with Transfer Learning (2611.34942)
- Enhancing Maritime Domain Awareness using Latent Space Representations (2611.34899)
- How Much Do Coding Agents Over-Edit, and Why? An Empirical Study (2611.34875)
- Shape-Aware Three-Way Merge for RDF Knowledge Graphs (2611.34870)
- A Survey of Security, Privacy, and Ethics of Large Language Models in Telecom (2611.34868)
- Probing Visual Idiosyncrasies in Text-to-Image Models (2611.34843)
- Evacuation Traffic Prediction for Dynamic Transportation Networks (2611.34687)
- Find the Clue, Not the Scene: Rethinking Reasoning for Entity Recognition in Vision-Language Models (2611.34681)
- DemoFoundry: Toward Scalable Photorealistic Robot Data with Coding Agents and Generative Rendering (2611.34671)
- Multi-Party Authorization of Maintenance Prescriptions on a Permissioned Blockchain (2611.34662)
- Do We Still Need Reinforcement Learning When We Can Read the World Model? (2611.34656)
- From Models to Services: Systematizing Security Assurance for Model-as-a-Service (2611.34623)
- Motion Beyond Pixels: Learning Future Visual Representations for Object-Centric Dynamics (2611.34644)
- InterConRank: Joint Node Centrality in Interconnected Heterogeneous Networks (2611.34763)
- Probing Visual Idiosyncrasies in Text-to-Image Models (2611.34843)
- From Models to Services: Systematizing Security Assurance for Model-as-a-Service (2611.34623)

Now I'll select the most important papers and prepare a structured digest with today's highlights, organized themes, key papers in table format, research trend signals, and worth deep reading papers.
</think>


# ArXiv AI Research Digest

## Today's Highlights

Today's submissions reveal a significant push toward **evaluating and improving AI agents** in complex, real-world scenarios. Notable breakthroughs include a new benchmark for scientific research agents (REE) that measures improvement on open-ended problems, and evidence that coding agents outperform video models as visual reasoners. The community is also addressing critical challenges in **memory and trustworthiness**: several papers tackle memory hallucinations in LLM agents and repairing distilled models. Meanwhile, efficiency-focused research on small language agents trained from scratch and weight-space programming without LLMs suggests a move toward leaner, more accessible AI systems.

---

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [REE: A Scientific Research Entrance Exam for AI Agents](http://arxiv.org/abs/2611.34646v1) | Zeqi Zhou, Minghao Liu et al. | Introduces a benchmark for autonomous research agents with open-ended scientific problems, measuring improvement through repeated experiments. Establishes a rigorous evaluation framework for AI-driven scientific discovery. |
| [ZeroHero: Training Small Language Agents from Scratch](http://arxiv.org/abs/2611.34635v1) | Nikita Sorokin, Zoya Volovikova et al. | Proposes a framework for training specialized small language agents from scratch using LLM teachers. Demonstrates that specialized agents can be created with minimal model capacity. |
| [What Is a Theory Worth to an LLM Solver?](http://arxiv.org/abs/2611.34751v1) | Jun Gao, Shuchao Bi | Investigates how providing mathematical theories affects LLM problem-solving, showing significant accuracy gains when the right theory is included. Highlights the value of structured domain knowledge in prompting. |
| [Repairing the Trustworthiness of Distilled Language Models](http://arxiv.org/abs/2611.34831v1) | Kumar Shubham, Devendra Vyas et al. | Addresses trustworthiness regressions in distilled models that preserve downstream performance. Proposes methods to repair these failures without original distillation corpora. |
| [One Model, Many Modes: Evolving System Prompt Ensembles for Creative Generation](http://arxiv.org/abs/2611.34760v1) | Daiwei Chen, Anda He et al. | Tackles mode collapse in preference-aligned LLMs that limits creative diversity. Introduces ensemble approaches that maintain quality while improving novelty. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Solve Vision with Code: Coding Agents Are Stronger Visual Reasoners Than Video Models](http://arxiv.org/abs/2611.34813v1) | Dezhi Luo, Fengyuan Yu et al. | Demonstrates that coding agents outperform video generation models on visual reasoning tasks by programmatically analyzing frames. Proposes a paradigm shift toward code-based visual understanding. |
| [TASK Memory: Beyond Text-Only Memory with Activation Steering and Knowledge Editing](http://arxiv.org/abs/2611.34762v1) | Jinkun Zhao, Wenjun Wu | Identifies and addresses memory hallucinations where correct information is retrieved but not applied correctly. Introduces activation steering to improve memory utilization in LLM agents. |
| [When Every Rollout Fails: Splicing Learner-Conditioned Options into Long-Horizon Agent RL](http://arxiv.org/abs/2611.34777v1) | Haowen Hou, Yicheng Liu et al. | Handles scenarios where all sampled trajectories receive zero reward in long-horizon RL. Splices options from stronger models to enable learning despite complete failure states. |
| [RoboEvo²: Recursive Robot Self-Improvement via Harness-Policy Co-Evolution](http://arxiv.org/abs/2611.34675v1) | Chenzhi Liu, Jiehong Lin et al. | Enables robots to adapt to unfamiliar environments through co-evolution of harness and policy. Reasoning agents generate skill adaptations that are refined via practice. |
| [VisualMontage: Manipulating the Beliefs of Vision-Language Agents](http://arxiv.org/abs/2611.34603v1) | Jinwei Hu, Lai Wei et al. | Studies visual cognitive collusion where coordinated authentic images influence VLM-based agent beliefs. Important for understanding misinformation spread through AI agents. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [μ-Bench: Benchmarking Multi-User Task Completion in Shared Interaction Voice Agents](http://arxiv.org/abs/2611.34920v1) | Qihao Lin, Guanxu Chen et al. | Introduces a benchmark for voice agents handling interdependent multi-user requests in shared spaces, with dynamic participant reactions. Addresses gaps in evaluating collaborative AI assistants. |
| [BOP-Refer: Benchmark for Monocular 3D and 2D Object Grounding](http://arxiv.org/abs/2611.34862v1) | Tomas Hodan, Vineet Bhat et al. | First benchmark for monocular 3D and 2D object grounding using VLM-generated referring expressions. Provides comprehensive evaluation across diverse everyday and industrial objects. |
| [Carrying Feature Ablations Across Sparse Autoencoder Seeds](http://arxiv.org/abs/2611.34637v1) | Karl Li | Studies feature generalization across different SAE initializations for interpretability research. Enables more robust feature ablation studies in vision encoders. |
| [A Failure-Driven Data Flywheel for Post-Training Vision-Language-Action Models](http://arxiv.org/abs/2611.34698v1) | Yuhao Luo, Zihao Sheng et al. | Constructs target scenarios from failure cases for post-training VLA models without requiring a large deployed fleet. Enables continuous improvement for specialized platforms. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [How Much Do Coding Agents Over-Edit, and Why?](http://arxiv.org/abs/2611.34875v1) | Aakash Goel, Benjamin Steenhoek et al. | Analyzes why agent patches are larger than developer patches through Delta Residue Attribution. Reveals patterns of unnecessary edits in agent-generated code. |
| [A Survey of Security, Privacy, and Ethics of Large Language Models in Telecom](http://arxiv.org/abs/2611.34868v1) | Joy Bose, Srinivas Adyapak | Comprehensive survey of LLM deployment challenges in telecommunications, covering privacy, security, and ethical concerns unique to sensitive network environments. |
| [DemoFoundry: Toward Scalable Photorealistic Robot Data](http://arxiv.org/abs/2611.34671v1) | Ruixiang Wang, Xinyue Yao et al. | Combines coding agents with generative rendering to produce scalable photorealistic robot demonstrations. Bridges the sim-to-real gap with physically consistent action supervision. |
| [Spectrum Adaptation of AI-Native Autoencoder Communications](http://arxiv.org/abs/2611.34942v1) | Yalin E. Sagduyu, Tugba Erpek | Applies transfer learning to AI-native communication autoencoders for spectrum adaptation. Demonstrates robustness across channel conditions without retraining from scratch. |

---

## Research Trend Signal

Today's submissions reveal several emerging directions. **Agent evaluation is maturing**—benchmarks like REE and μ-Bench move beyond simple task completion to measure improvement, collaboration, and open-ended reasoning. There's a clear push toward **leaner, specialized AI**: ZeroHero trains small agents from scratch, while Do We Really Need an LLM? questions the necessity of large models for weight-space programming. **Memory and trustworthiness** remain critical, with multiple papers addressing hallucinations in agent memory systems and distilled models. The **coding-as-reasoning** paradigm is gaining traction, with evidence that programmatic analysis outperforms end-to-end generation for visual understanding. Finally, **safety and security** research is expanding beyond model vulnerabilities to system-level concerns, including cyber deception and Model-as-a-Service security assurance.

---

## Worth Deep Reading

1. [**REE: A Scientific Research Entrance Exam for AI Agents**](http://arxiv.org/abs/2611.34646v1) — This benchmark represents a fundamental shift in how we evaluate autonomous AI, measuring improvement over repeated experiments rather than single-task accuracy. Given the push toward AI for scientific discovery, understanding this evaluation paradigm is essential.

2. [**TASK Memory: Beyond Text-Only Memory with Activation Steering and Knowledge Editing**](http://arxiv.org/abs/2611.34762v1) — Memory hallucinations represent a subtle but critical failure mode in deployed agents. This paper both diagnoses the problem and provides a solution through activation steering, offering practical insights for production systems.

3. [**Solve Vision with Code: Coding Agents Are Stronger Visual Reasoners Than Video Models**](http://arxiv.org/abs/2611.34813v1) — This work challenges the prevailing video-generation paradigm for visual reasoning, presenting compelling evidence for a fundamentally different approach. It could reshape how we think about visual understanding in agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*