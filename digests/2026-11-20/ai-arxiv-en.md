# ArXiv AI Research Digest 2026-11-20

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-20 03:41 UTC

---

<think>The user wants me to generate a structured ArXiv AI Research Digest based on the 50 papers provided. Let me analyze the papers and organize them into the requested format.

First, let me identify the key themes and select the most important papers:

**🧠 Large Language Models (architecture, training, alignment, evaluation)**
- Paper 14: Energy estimates of open-weight LLMs
- Paper 19: Many Solutions, One Answer (search order shapes defaults)
- Paper 38: Anchor and Check (reconciliation for LLM decisions)
- Paper 48: PosteriorBench (behavior posterior sampling)

**🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)**
- Paper 5: Global-Workspace Computation verification
- Paper 6: Localizing Human-Agent Behavioral Divergence
- Paper 7: System-One RSI (interactive agents)
- Paper 42: Duopra (Full-duplex Agency)
- Paper 32: Decoupled Knowledge Retrieval and Compact Memory
- Paper 33: HabitusMem (Belief Memory over evolving preferences)
- Paper 39: Inject Where It Matters (Rectified-Flow Image Editing)

**🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)**
- Paper 9: Fiber-Orientation Prediction in Crash CAE
- Paper 17: Fast-JEPA (latent world models)
- Paper 18: ROAM-GRPO (reasoning diversity)
- Paper 24: Adaptive Inference Schedules for Diffusion Language Models
- Paper 27: Trustworthy Geospatial AI Workflows
- Paper 34: LINEAGE benchmark
- Paper 43: Closing Performance Gap for Diffusion Language Models
- Paper 45: ADAPT (service routing)
- Paper 49: Relational Risks in AI Companionship

**📊 Applications (domain-specific, multimodal, code generation)**


I'll focus on specialized papers that demonstrate innovative applications across various domains. These papers showcase AI's potential in complex, real-world scenarios, from medical diagnostics to engineering design and autonomous systems. They represent cutting-edge research that pushes the boundaries of AI's practical implementation, addressing nuanced challenges in specific professional fields.

The selected papers highlight AI's versatility, demonstrating how machine learning techniques can be tailored to solve intricate problems in healthcare, engineering, robotics, and computational domains. Each paper represents a unique approach to applying AI technologies in specialized contexts.

I'll synthesize insights about the emerging AI research landscape, emphasizing its expansion beyond traditional computational boundaries into more nuanced, application-specific domains. The trend reveals a sophisticated approach to developing AI systems that can navigate complex, real-world challenges with increased precision and contextual understanding.

The research signals point toward a future where AI becomes more adaptive, context-aware, and capable of addressing intricate problem-solving scenarios across multiple disciplines.

Key developments highlight the need for intelligent agents that can dynamically adjust to evolving requirements, manage limited computational resources, and maintain robust decision-making frameworks in complex environments. This involves creating systems that can interpret subtle contextual cues, reason across diverse scenarios, and provide reliable, verifiable outputs.

The emerging research trajectory suggests a significant shift towards developing more nuanced, flexible AI systems that can seamlessly integrate into specialized professional workflows, demonstrating enhanced capabilities in reasoning, adaptation, and targeted problem resolution.
</think>


# ArXiv AI Research Digest

## November 20, 2026

---

## 1. Today's Highlights

Today's submissions reveal a significant pivot toward **practical deployment challenges** across the AI ecosystem. Several papers address the gap between laboratory performance and real-world reliability: methods for verifiable reasoning in medical LLMs (23, 29), trust evaluation for AI agents (20, 28), and frameworks for continuous model editing without catastrophic forgetting (32). There's also notable emphasis on **reasoning diversity**—a growing concern as RLVR fine-tuning collapses policy distributions (18, 19). The AI Act's regulatory pressure is materializing in empirical studies on compliance (1, 35), while autonomous agents increasingly need to handle long-horizon tasks with unreliable memory systems (44). Finally, diffusion language models are maturing toward practical deployment, with new work on adaptive inference schedules and low-budget generation (24, 43).

---

## 2. Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Many Solutions, One Answer: Search Order Shapes the Default Solutions of Language Models](http://arxiv.org/abs/2611.25916v1) | Qinhan Hou, Jing Tang et al. | Demonstrates that language models exhibit systematic default biases toward particular solutions when multiple valid answers exist, suggesting that training dynamics and sampling order shape outputs beyond mere capability. This has implications for evaluation protocols and fairness in reasoning benchmarks. |
| [Verifiable Logic in Medical LLMs: A Critical Review of Agentic Clinical Reasoning Optimization and Neuro-Symbolic Grounding](http://arxiv.org/abs/2611.25898v1) | Youssef ElNahas, Adel Ammar et al. | Exposes a critical failure mode where medical LLMs produce fluent, plausible outputs through logically invalid reasoning that static benchmarks fail to detect, advocating for neuro-symbolic grounding in clinical deployment. |
| [The Price of an Explanation: What Demanding Verifiable Artifacts Costs, and What It Buys Back](http://arxiv.org/abs/2611.25896v1) | Edgar A. Duéñez-Guzmán et al. | Quantifies the trade-off between requiring executable verification artifacts versus raw generation quality, providing empirical guidance on when verification overhead is justified by reliability gains. |
| [PosteriorBench: Evaluating Behavior Posterior Sampling in Language Models](http://arxiv.org/abs/2611.25735v1) | Zhiyang Xun, Daniel D. Johnson et al. | Introduces a formal framework for efficiently sampling rare but targeted behaviors from language models, addressing a fundamental challenge in studying low-probability model outputs. |
| [Anchor and Check: Deterministic Cross-Prompt, Cross-Model Reconciliation for Auditable LLM Decisions](http://arxiv.org/abs/2611.25818v1) | Sivakameswara Reddy Chejarla | Proposes a reconciliation contract using anchor-and-check verification to produce auditable, deterministic records of LLM decision-making pipelines. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [System-One RSI: Building Muscle Memory for Interactive Agents through Guided Practice](http://arxiv.org/abs/2611.26007v1) | Qingxu Fu, Xuanfa Jin et al. | Addresses the latency-accuracy tradeoff in real-time agent control by training fast "muscle memory" policies that complement slower deliberative reasoning systems. |
| [Decoupled Knowledge Retrieval and Compact Memory Enable Reliable Lifelong Model Editing](http://arxiv.org/abs/2611.25861v1) | Yue Che, Jingze Wang et al. | Presents a memory-based model editing architecture that separates retrieval from modification, enabling continuous knowledge updates without retraining or compromising existing capabilities. |
| [HabitusMem: Belief Memory over Evolving User Preferences for LLM Agents](http://arxiv.org/abs/2611.25855v1) | Yifan Lu, Gaoyang Guo et al. | Introduces a preference-tracking memory system that maintains beliefs about user preferences across interactions, enabling personalized agent behavior that adapts to evolving user states. |
| [Duopra: From Full-Duplex Conversation to Full-Duplex Agency](http://arxiv.org/abs/2611.25773v1) | Chiyu Chen, Pengzhou Cheng et al. | Extends full-duplex conversational models to full-duplex task agency, enabling agents to proactively invoke tools and revise arguments during user interactions. |
| [Does the Workspace Do the Work? A Causal Protocol for Verifying Global-Workspace Computation in a Language Model](http://arxiv.org/abs/2611.26018v1) | Diaoxuan He, Linqian Wu | Proposes a causal verification protocol for testing whether trained networks implement Global Workspace Theory, connecting consciousness theory to mechanistic interpretability. |
| [When Agents Play Differently: Localizing Human--Agent Behavioral Divergence with Conditional Distributional Testing](http://arxiv.org/abs/2611.26012v1) | Oleg Smirnov, John Pertoft et al. | Develops nonparametric discrepancy statistics to discover behavioral subgroups where AI agents systematically diverge from human performance patterns. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ROAM-GRPO: Enforcing Reasoning Diversity in GRPO via Routed Off-mode Approach Mining](http://arxiv.org/abs/2611.25926v1) | Jeff Duan, Matt Thomson | Addresses policy collapse in RLVR fine-tuning by explicitly mining diverse reasoning approaches, improving pass@k metrics without sacrificing average performance. |
| [One Schedule Does Not Fit All: Adaptive Inference Schedules for Diffusion Language Models](http://arxiv.org/abs/2611.25895v1) | Rabimba Karanjai, Linsey Pang et al. | Shows that optimal denoising schedules vary by task, model, and sampler, introducing TCDA with provable error guarantees for adaptive deployment. |
| [Fast-JEPA: Advancing the Success-Latency Frontier for Latent World Models](http://arxiv.org/abs/2611.25927v1) | Yao Zhang, Bin Yu et al. | Redesigns latent world model planning to improve the success-latency Pareto frontier for predictive search in robotics applications. |
| [LINEAGE: A Benchmark for Empirical Lineage Retrieval in AI Scientific Literature](http://arxiv.org/abs/2611.25845v1) | Pangjing Wu, Xu Yuan et al. | Addresses a critical gap in research agent workflows by providing a benchmark specifically for scientific literature retrieval with lineage tracking. |
| [Closing Performance Gap for Diffusion Language Models under Low Inference Budgets](http://arxiv.org/abs/2611.25763v1) | Hao Wu, Sipeng Chen et al. | Enables diffusion language models to maintain generation quality under tight computational budgets, addressing a key barrier to practical deployment. |
| [Meta-RTL: Evolving Agent Harnesses for RTL Optimization](http://arxiv.org/abs/2611.25891v1) | Xinzhuang Xiong, Yonghao Wang et al. | Uses evolutionary search to automatically generate RTL optimization harnesses, reducing human engineering effort in LLM-based EDA agents. |
| [Validation-driven Deployment of LLM Inference Platforms for Agentic Workloads](http://arxiv.org/abs/2611.25905v1) | Shai Gretz, Alon Halfon et al. | Provides a systematic validation framework for transitioning agentic workloads from closed APIs to self-deployed open-weight models. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AI agents can redesign engineering parts with more than a thousand CAD parameters and nonlinear simulations](http://arxiv.org/abs/2611.26003v1) | Alexandra Starostina, Alexander Hermann et al. | Demonstrates that AI agents can navigate extremely high-dimensional design spaces with expensive black-box simulations, enabling automated engineering optimization. |
| [From AI Surrogate to Engineering Tool: Toward Production Use of Fiber-Orientation Prediction in Crash CAE](http://arxiv.org/abs/2611.25991v1) | Osamu Ito, Yoshikazu Nakagawa et al. | Bridges the gap between ML surrogate models and production engineering tools, reducing glass-fiber part analysis time from 25 hours to minutes. |
| [Generalist Meets Specialists: An Evolving Multimodal Agent with Persistent Tool Orchestration for Traffic Scenario Understanding](http://arxiv.org/abs/2611.25868v1) | Linjia Kang, Binhan Jiang et al. | Combines generalist VLMs with specialist perception tools for robust traffic scenario understanding across diverse visual conditions. |
| [Collision-Free Is Not Enough: Passage-Conditioned Navigation for Wheeled-Legged Robots](http://arxiv.org/abs/2611.25788v1) | Wai Ka Sun, Waiyiu Pong et al. | Addresses the gap between collision-free pathfinding and successful robot navigation through environment-conditioned locomotion skill selection. |
| [Harnessing Medical Visual-Language Models with Agentic Evidence Management](http://arxiv.org/abs/2611.25840v1) | Qiming Huang, Hanze Dong et al. | Evaluates how medical VLM agents utilize segmentation evidence, proposing benchmarks that separate mask quality from downstream reasoning effectiveness. |
| [From Reliance to Overreliance: Taxonomizing and Detecting Relational Risks in AI Companionship](http://arxiv.org/abs/2611.25734v1) | Viet Cuong Nguyen, Fiona Li et al. | Introduces a taxonomy of emotional overreliance risks in companion AI, operationalizing behavioral indicators for responsible deployment. |
| [Auto-Alpha: A Framework for Autonomous Factor Research](http://arxiv.org/abs/2611.25732v1) | Hui Cai, Kangcheng Deng et al. | Connects economic hypothesis generation with test-driven implementation for autonomous quantitative finance research. |

---

## 3. Research Trend Signal

Today's submissions reveal **four converging trajectories**:

1. **Reasoning diversity as a first-class concern**: With RLVR becoming standard for post-training, papers 18 and 19 document and address the collapse problem—models converging on identical reasoning paths despite multiple valid approaches. This will drive demand for diversity metrics and training interventions.

2. **Memory and knowledge currency in deployed agents**: Papers 32, 33, and 44 collectively signal that the field is moving beyond pure capability benchmarks toward **operational reliability**—how agents maintain accurate beliefs about the world and users over time without hallucination or interference.

3. **Verifiable reasoning over fluent outputs**: The medical LLMs paper (23) exemplifies a broader shift from evaluating final answer accuracy to evaluating **reasoning integrity**. Demand for neuro-symbolic grounding and executable artifacts will grow as AI moves into regulated domains.

4. **Low-budget deployment for diffusion language models**: With papers 24 and 43 addressing inference efficiency, diffusion LLMs are maturing from architecture novelty to practical consideration. Expect convergence with deployment infrastructure research (paper 20) as enterprises evaluate alternatives to autoregressive models.

---

## 4. Worth Deep Reading

1. **[Many Solutions, One Answer: Search Order Shapes the Default Solutions of Language Models](http://arxiv.org/abs/2611.25916v1)**  
   *Why read it*: This paper reveals a subtle but fundamental bias in how LLMs handle multi-solution problems—systematic default preferences shaped by training dynamics rather than problem structure. For practitioners building evaluation pipelines or deploying LLMs in high-stakes settings, understanding these biases is essential. The methodology (controlled puzzle experiments with known solution sets) is particularly elegant and reproducible.

2. **[Verifiable Logic in Medical LLMs: A Critical Review of Agentic Clinical Reasoning Optimization and Neuro-Symbolic Grounding](http://arxiv.org/abs/2611.25898v1)**  
   *Why read it*: As LLMs move into clinical decision support, this paper exposes a dangerous failure mode that standard benchmarks miss: fluent, confident outputs from logically invalid reasoning. The call for neuro-symbolic grounding provides a concrete direction for the field, and the critique of current evaluation practices has implications beyond medicine.

3. **[ROAM-GRPO: Enforcing Reasoning Diversity in GRPO via Routed Off-mode Approach Mining](http://arxiv.org/abs/2611.25926v1)**  
   *Why read it*: RLVR fine-tuning is now ubiquitous, but policy collapse degrades the very diversity that makes LLMs useful. This paper provides a principled solution that doesn't sacrifice average performance—a practical contribution with immediate relevance for anyone doing post-training. The off-mode approach mining concept is novel and likely applicable beyond the specific benchmark tested.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*