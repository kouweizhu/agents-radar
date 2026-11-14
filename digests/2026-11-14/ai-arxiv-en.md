# ArXiv AI Research Digest 2026-11-14

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-14 02:38 UTC

---

<think>Let me analyze these 50 papers and organize them into the requested ArXiv AI Research Digest format.

First, let me categorize the papers by theme:

**🧠 Large Language Models (architecture, training, alignment, evaluation)**
1. Unbundling Multimodal Vision Encoding - vision encoders in multimodal LMs
2. ArchSpace - LLM architecture research documentation
3. Goal Encoding in LLMs
4. Linear Regression with Self-Selection Bias - not really LLM focused
5. Two mathematical models of knowledge distillation
6. Parsed, Plausible, Wrong - small-model semantic parsing
7. Actor, Judge, or Teacher? - decision models in agents
8. Symmetry in Time - SSMs as alternative to Transformers
9. Parameter-Efficient Conciseness Adaptation - smaller LMs for clinical reasoning
10. Cited but Unused - parametric provenance in RAG

**🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)**
1. AgentSSL - MLE agents leveraging unlabeled data
2. CoReMem - memory for coding agents
3. Classical Energies Learn to Reason 1000x Faster
4. LiveGeo - geographic agents
5. Ballad - LLM routing for heuristic discovery
6. When Both Sides Adapt - evaluating interactive LLM systems
7. Metal Sandbox - GPU coding agents on Apple Silicon
8. Cortex-FL - agent-mediated federated learning
9. Actor, Judge, or Teacher? - decision models in long-horizon agents
10. Designing Institutions for Autonomous AI

**🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)**
1. Learning When Diffusion Language Models Should Regenerate
2. Linking Rapid Learning to Compositional Structure - meta-learning
3. Sketching Language Models for Context Attribution


4. Consistent Video-to-Video Translation - explores advanced video transformation techniques
5. Negative-Only Policy Optimization - investigates reinforcement learning with constrained verification
6. Scalable Conversational Assessment - develops chat-based exam methodologies
7. Introducing Feedback Delays to AMDPs - analyzes decision-making under delayed information
8. Theoretical and Empirical Analysis of Sparse Convolution - advances neural network architectural efficiency
9. Maximizing Capacity Utilization of LoRA Adapters - optimizes fine-tuning strategies for language models
10. Bellman Contraction under MMD - provides unified theoretical framework for distributional reinforcement learning
11. ISLA - introduces coordinate-free transformer approach for partial differential equations
12. FLEX-LBP - presents novel texture classification technique

Focuses on specialized computational methods and learning frameworks across various domains. Highlights innovative approaches in reinforcement learning, neural network optimization, and theoretical machine learning insights.

Emerging techniques span financial modeling, quantum computing, and advanced computational intelligence. Researchers are developing sophisticated approaches to tackle complex decision-making, optimization, and learning challenges across multiple scientific disciplines.

Key developments include neurosymbolic reinforcement learning for investment strategies, quantum circuit parameter generation, and meta-learning frameworks that explore rapid neural network adaptation. These approaches demonstrate innovative intersections between computational theory and practical problem-solving.

Theoretical advances like the learnability debate framework and novel policy optimization methods reveal deeper insights into machine learning's fundamental mechanisms, pushing the boundaries of how intelligent systems can learn and adapt.

Practical innovations such as the geometric agent environments and prompt injection defense strategies show the field's commitment to developing robust, context-aware computational solutions that can operate effectively in complex, real-world scenarios.

The computational landscape is expanding with specialized approaches targeting specific domains like aerodynamic modeling, fiber-optic sensing compression, and scientific federated learning, indicating a trend toward highly targeted, efficient machine learning implementations.
</think>


## ArXiv AI Research Digest — November 12, 2026

### 1. Today's Highlights

Today's submissions reveal a strong focus on **agent architectures and memory systems**, with multiple papers addressing how LLMs can better retain, select, and utilize information across extended interactions. The emergence of **energy-based reasoning** as a faster alternative to looped models signals a potential shift in how complex reasoning tasks are approached. Additionally, **domain-specific optimizations** dominate the application layer—from financial portfolio management to quantum circuit generation—reflecting the field's maturation beyond general-purpose models toward specialized, deployable solutions.

---

### 2. Key Papers

#### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Goal Encoding in LLMs](http://arxiv.org/abs/2611.17297v1) | Sharma, Todd, Feucht et al. | Investigates whether LLMs encode internal goal representations that guide flexible action; provides a coding benchmark to evaluate goal-seeking behavior beyond fixed execution paths. |
| [Symmetry in Time: A Representation Theory of Linear Recurrent Memory](http://arxiv.org/abs/2611.17162v1) | Shikder, Dey, Minac et al. | Develops a representation-theoretic framework for state-space models, showing how coordinate-free structures improve SSM expressivity compared to diagonal recurrences. |
| [Two mathematical models of knowledge distillation](http://arxiv.org/abs/2611.17230v1) | Xie, Schmidt, Duchi | Proposes formal models suggesting distillation improves optimization landscapes rather than model quality, with analysis extending to generalized distillation settings. |
| [Unbundling Multimodal Vision Encoding](http://arxiv.org/abs/2611.17334v1) | Brown, Hoang, Qian et al. | Decomposes vision encoders into three design choices (visual prior, compression, architecture) and evaluates unbundled alternatives for multimodal LMs. |
| [Parameter-Efficient Conciseness Adaptation](http://arxiv.org/abs/2611.17128v1) | Abbas, Malik, Qamar et al. | Introduces differentiable length control for smaller clinical language models, enabling adjustable output verbosity without retraining. |
| [Parsed, Plausible, Wrong](http://arxiv.org/abs/2611.17169v1) | Ahmed, Dunaev, Al Awad et al. | Demonstrates that output format choices in small semantic parsers directly control silent error rates on structured prediction tasks. |

#### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Classical Energies Learn to Reason 1,000x Faster than Looped Models](http://arxiv.org/abs/2611.17309v1) | Hoover, Blayney, Whittington | Proposes descent on energy functions as a stable, parameter-efficient alternative to looped reasoning models for puzzles like Sudoku-Extreme. |
| [CoReMem: Cost-Internalizing Memory for Successive Coding Tasks](http://arxiv.org/abs/2611.17316v1) | Li, Verma, Zhou et al. | Introduces prospective valuation for coding agents, balancing memory write/read costs against future task utility in evolving repositories. |
| [Metal Sandbox: Isolated Execution for GPU Coding Agents on Apple Silicon](http://arxiv.org/abs/2611.17294v1) | Wang, Chen, Wan et al. | Enables concurrent agent sessions for generating Metal kernels with native macOS tooling and isolated execution environments. |
| [Designing Institutions for Autonomous AI](http://arxiv.org/abs/2611.17114v1) | Törnberg | Argues that collective AI alignment depends on governing institutions, shifting focus from individual agent alignment to population-level governance. |
| [Actor, Judge, or Teacher?](http://arxiv.org/abs/2611.17167v1) | Liu, Zhu, Wang et al. | Categorizes decision models by function (action, evaluation, training) and analyzes trade-offs in long-horizon agent architectures. |

#### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Sketching Language Models for Context Attribution](http://arxiv.org/abs/2611.17313v1) | Liaw, Mehta, Velegkas et al. | Reduces leave-one-out attribution from O(n) to sublinear model evaluations under a stability assumption, enabling efficient prompt analysis. |
| [ISLA: A Coordinate-Free Transformer for Boundary-Driven PDEs](http://arxiv.org/abs/2611.17141v1) | Sharpe | Enforces coordinate invariance in neural PDE surrogates, ensuring predictions are independent of mesh, units, or frame orientation. |
| [Bellman Contraction under MMD](http://arxiv.org/abs/2611.17116v1) | Debes, Tuytelaars | Unifies distributional RL analysis under MMD by identifying conditional positive definiteness of the Bellman difference kernel as the contraction criterion. |
| [Linear Regression with Self-Selection Bias in Polynomial Time](http://arxiv.org/abs/2611.17228v1) | Zhou | Achieves poly(n, k, 1/ε) runtime for k-regressor estimation with self-selection bias, improving on prior exponential dependencies. |

#### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Internalizing Investment Mandates: Neurosymbolic RL for Portfolio Allocation](http://arxiv.org/abs/2611.17329v1) | Yıldız, Chatterji, Atam et al. | Combines symbolic constraint enforcement with RL for institutional portfolios that must satisfy investment policy statements. |
| [Programming Quantum Circuit Parameters with LLMs](http://arxiv.org/abs/2611.17246v1) | de Souza Farias, Porto, da Silva Fonseca et al. | Investigates frozen general-purpose LLMs generating variational quantum circuit parameters without conventional optimization. |
| [AeroZoo: Aerodynamics Benchmark for Foundation Models](http://arxiv.org/abs/2611.17152v1) | Sharpe, Gonzales, Adams et al. | Evaluates aerodynamic foundation models on cross-domain flow prediction, revealing current datasets are insufficiently general. |
| [CapLite: Prompt-Injection Defense for Small Language Model Agents](http://arxiv.org/abs/2611.17115v1) | Xu, Liu, Nakayama | Achieves prompt injection defense without requiring models to write security artifacts, enabling deployment on resource-constrained SLMs. |

---

### 3. Research Trend Signal

Today's papers signal several emerging directions. **Agent memory systems** are evolving from passive context windows toward active, cost-aware mechanisms that selectively retain information (CoReMem). **Energy-based models** are reemerging as viable reasoning substrates, offering efficiency gains over iterative transformer approaches. The **institutional AI** perspective (Designing Institutions for Autonomous AI) marks a conceptual shift from individual alignment to governance of multi-agent populations—a largely underexplored frontier. Finally, **domain-specific specialization** continues accelerating, with papers targeting quantum circuits, medical imaging, aerodynamic flows, and financial compliance, suggesting the field is transitioning from general benchmarks to deployment-ready solutions.

---

### 4. Worth Deep Reading

1. [**Classical Energies Learn to Reason 1,000x Faster than Looped Models**](http://arxiv.org/abs/2611.17309v1) — This paper directly challenges the dominant looped-reasoning paradigm by demonstrating that principled energy descent achieves comparable or superior results with orders-of-magnitude efficiency gains. The implications for deploying reasoning-capable models in production are substantial.

2. [**Designing Institutions for Autonomous AI**](http://arxiv.org/abs/2611.17114v1) — As autonomous agents proliferate, this perspective piece articulates a critical research gap: how institutions shape collective AI behavior. It provides a framework for a research agenda that the field has largely neglected.

3. [**Two mathematical models of knowledge distillation**](http://arxiv.org/abs/2611.17230v1) — This work offers rare theoretical clarity on *why* distillation works, moving beyond empirical observation to formal characterizations of optimization landscape benefits. The insights are likely to influence both understanding and practice of model compression.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*