# ArXiv AI Research Digest 2026-11-18

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-18 03:49 UTC

---

<think>The user wants me to generate a structured ArXiv AI Research Digest based on the 50 papers provided. Let me analyze the papers and organize them according to the specified format.

Let me first categorize the papers by theme:

**🧠 Large Language Models (architecture, training, alignment, evaluation)**
- Paper 8: Worldviews in Large Language Models
- Paper 22: COTTI: Contrastive Training and Time-Aware Inference for Robust Industrial Recommendation
- Paper 41: Right Labels, Wrong Reasons: Signed Feature Attribution for Multi-Label Explainability
- Paper 25: PACT: Plan-Action Consistency Training
- Paper 18: EvoSkill-S1: Evolving Reusable Skills with Genetic-Inspired Operators
- Paper 4: Remembered as Brief: Stored Preferences Silently Remove Decision-Critical Information
- Paper 29: Do LLMs Understand Network Traces?

**🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)**
- Paper 40: When Agent Skills Go Stale
- Paper 27: Evolution Under Fire: Evolving Agent Safety Harnesses
- Paper 26: Adaptive LLM-Driven Honeypots vs. LLM-Driven Attackers
- Paper 25: PACT: Plan-Action Consistency Training
- Paper 18: EvoSkill-S1: Evolving Reusable Skills
- Paper 37: JET: Just-Enough Exploration Tuning
- Paper 30: MillBill: A Machining Agent with Geometric Feedback
- Paper 38: Testing World Models on Actions
- Paper 9: The Between-Round Decision in Autonomous Research
- Paper 42: LMLineage: Content Lineage and Context Governance for LLM Agents
- Paper 19: Task Convergent Flow Matching for Generative Robotics


- Paper 31: CADMAGEDDON: High-Fidelity CAD Reconstruction
- Paper 6: CULypso: A Clustered Federated Unlearning paradigm

**🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)**
- Paper 1: Know When to Zoom
- Paper 3: Social Signal Bench
- Paper 7: FVScore: Specification-Driven Neuro-Symbolic Video Evaluation
- Paper 10: AlignedHPO: Efficient Surrogate-Guided Loss Hyperparameter Optimization
- Paper 11: EDA: Observe, Verify, and Assess for Evidence-Grounded Multimodal Depression Analysis
- Paper 12: The Price of Hard Coverage Constraints in Online Conformal Prediction
- Paper 13: Hierarchical Control of Antiphase Synchronization
- Paper 14: Sub-Meter Canopy Height Synthesis
- Paper 15: A Quantum Support Vector Regression Framework
- Paper 16: Right Diagnosis, Unsafe Route: Auditing Clinical AI Decision Trajectories
- Paper 17: DAQ: Decision-Aligned Post-Training Quantization
- Paper 20: DLS: Dual-Logic Graph Neural Networks
- Paper 21: Simplicity Goes Far: Auditing Prompt Optimizers
- Paper 23: Propose with the Gradient, Accept with the Loss
- Paper 24: Lost in the Funnel: Selection-Induced Miscalibration
- Paper 28: ReMaRL: Learning to Unmask and Remask
- Paper 32: Balancing Exploration and Exploitation with U(1)-Symmetric Tensor Trains
- Paper 33: Physically Admissible Generative Flow Matching
- Paper 34: Temporal Diffusion Models for Joint Signal-Channel Estimation
- Paper 36: From Perception to Simulation: Unveiling Mental Spatial Dynamics in MLLMs
- Paper 39: DGF-Asym: Adaptive Peer Weighting for Collective Estimation
- Paper 43: Efficient Self-Supervised Adaptation of 3D Abdominal Vision-Language Model
- Paper 44: Towards Data-Efficient, Real-Time World Models
- Paper 45: DARWIN: a Geospatial Foundation Model for Marine Intelligence
- Paper 46: Motion-Aware Reward Modeling for Instruction-Guided Video Editing
- Paper 47: SciWorkBench: A Benchmark for Real Scientific Workflows
- Paper 48: Manufacturing Differential Sparsity: Planner-Hardware Co-Design
- Paper 49: LeViT-UNet++: Towards Balanced Fine-Grained Details and Context
- Paper 50: RehearsalBench: Can AI Predict What Happens When You Change a Company?

**📊 Applications (domain-specific, multimodal, code generation)**
- Paper 2: Cross-cultural Adaptation of Recipes for Low-Resource Languages
- Paper 5: Making the World React Realistically: A Closed-Loop Interactive World Model
- Paper 14: Sub-Meter Canopy Height Synthesis from Sentinel-2
- Paper 15: A Quantum Support Vector Regression Framework for Missing Data Imputation in Ship Performance Data
- Paper 31: CADMAGEDDON: High-Fidelity CAD Reconstruction
- Paper 35: JointGV: Structure-Aware Correction of Visual World Models
- Paper 36: From Perception to Simulation: Unveiling Mental Spatial Dynamics in MLLMs
- Paper 43: Efficient Self-Supervised Adaptation of 3D Abdominal Vision-Language Model
- Paper 45: DARWIN: a Geospatial Foundation Model for Marine Intelligence
- Paper 46: Motion-Aware Reward Modeling for Instruction-Guided Video Editing
- Paper 49: LeViT-UNet++: Towards Balanced Fine-Grained Details and Context

I need to identify the most significant papers. Papers on vision-language models like paper 1 and paper 36, world model development in papers 5 and 35, agent design in papers 18 and 40, evaluation frameworks in papers 3 and 47, and agent safety in paper 27 seem particularly important. I should also include the decision-making paper 4 and the quantum machine learning work in paper 15.
</think>


# ArXiv AI Research Digest

**Date:** November 18, 2026  
**Categories:** cs.AI, cs.CL, cs.LG (50 papers)

---

## 1. Today's Highlights

Today's submissions reveal a strong focus on **agent reliability and safety**, with multiple papers addressing the gap between planning and execution in LLM-based agents. **World models** continue to gain traction—particularly for robotics and autonomous systems—with new work on correcting visual drift and real-time inference. There's notable attention to **evaluation methodology**: new benchmarks target scientific workflows, depression analysis evidence-grounding, and real-world decision-making. The emergence of **quantum machine learning** for ship performance data and **geospatial foundation models** for marine domains signals expanding AI applications beyond terrestrial settings. Meanwhile, **prompt optimization auditing** and **conformal prediction** under constraints highlight growing concerns about methodology rigor and uncertainty quantification in deployment.

---

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Worldviews in Large Language Models](http://arxiv.org/abs/2611.22670v1) | Edmundo Lopez-Sola, Shamil Chandaria, et al. | Introduces the concept of "worldviews" as deeper descriptors of LLM agents than personas, arguing that an agent's beliefs about reality shape alignment behavior. This reframing offers a new theoretical lens for alignment research. |
| [The Between-Round Decision in Autonomous Research: An LLM Controller That Reads the Whole Trajectory](http://arxiv.org/abs/2611.22661v1) | Caoxin Wang, Shengkai Gan, Xiang Hu, et al. | Proposes an LLM controller that evaluates entire experimental trajectories to decide whether to refine or pivot research directions, rather than relying on static proposals. Improves autonomous research efficiency by grounding decisions in actual results. |
| [Simplicity Goes Far: Auditing Prompt Optimizers with Demonstration-Conditioned Prompt Search](http://arxiv.org/abs/2611.22605v1) | Bohe Chen | Audits automatic prompt optimization methods by controlling for the generate-and-select step, revealing that reported gains may conflate optimizer contributions with larger demonstration sets. Highlights the need for rigorous evaluation baselines. |
| [Right Labels, Wrong Reasons: Signed Feature Attribution for Multi-Label Explainability](http://arxiv.org/abs/2611.22515v1) | Kenton White | Proposes FLEX, a global surrogate using Fisher LDA for multi-label explainability that identifies when classifiers assign correct labels for incorrect reasons. Addresses the problem of diffuse feature combinations lacking dominant features. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [PACT: Plan-Action Consistency Training by Preserving Correct Plans and Repairing Actions in GUI Agents](http://arxiv.org/abs/2611.22591v1) | Zhuohan Cai, Zhangxuan Gu, Runze Li, et al. | Addresses the execution gap in GUI agents where correct plans fail due to mismatched actions, using outcome-supervised RL to preserve correct reasoning while repairing action sequences. Critical for reliable multi-step workflow automation. |
| [EvoSkill-S1: Evolving Reusable Skills with Genetic-Inspired Operators](http://arxiv.org/abs/2611.22610v1) | Yujun Wang, Jiqiang Li, Yinuo Lu, et al. | Introduces genetic-inspired operators for directly improving skill banks in language-model agents, moving beyond indirect rollout-driven accumulation. Enables deeper, more controlled skill refinement for accumulated problem-solving experience. |
| [When Agent Skills Go Stale: Runtime Behavior and Selective Maintenance in Evolving Environments](http://arxiv.org/abs/2611.22525v1) | Ömer Faruk Akgül, Shuli Jiang, Yuting Zhang, et al. | Investigates how skill state becomes outdated when environments change and proposes selective maintenance strategies to preserve relevant experience while discarding stale components. Essential for long-term agent deployment. |
| [JET: Just-Enough Exploration Tuning for Efficient Tool-Calling Agents in Repository-Level Question Answering](http://arxiv.org/abs/2611.22539v1) | Yoonho Choi, Taehyeon Han, Seonghyeon Lee | Identifies and corrects over-exploration behavior in LLM agents that continue invoking tools after sufficient information is gathered. Reduces unnecessary computation while maintaining answer quality. |
| [Evolution Under Fire: Evolving Agent Safety Harnesses with Adaptive Injection Stressors](http://arxiv.org/abs/2611.22583v1) | Yujun Wang, Yilun Liu, Jinhe Bi, et al. | Evolves safety harnesses for tool-using agents through adaptive injection of malicious instructions, moving beyond hand-designed defenses. Addresses the central security challenge of mixed legitimate and adversarial inputs through the same channel. |
| [LMLineage: Content Lineage and Context Governance for LLM Agents](http://arxiv.org/abs/2611.22511v1) | Wei Hou, Jingxin Geng, Xin Chen, et al. | Proposes an out-of-band system attributing every output sentence to its source context in agent sessions, extending interpretability beyond internal weights to cover reasoning and decision-making over multi-source context. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Know When to Zoom: How Small Is Too Small for Vision-Language Models?](http://arxiv.org/abs/2611.22709v1) | Siddharth Vohra, Min Xu | Quantifies how image resizing by vision-language services degrades small detail recognition (e.g., cars reduced to 6 pixels in drone photos) and measures the practical limits of current VLMs. Reveals a critical but overlooked failure mode in deployed systems. |
| [FVScore: Specification-Driven Neuro-Symbolic Video Evaluation](http://arxiv.org/abs/2611.22673v1) | Do Xuan Long, Long T. Le, Yiwen Song, et al. | Introduces a neuro-symbolic framework for aligning video generation evaluation with human judgments by tracing scores to specific temporal violations against specifications. Improves interpretability of automatic video assessment. |
| [DAQ: Decision-Aligned Post-Training Quantization for Spiking Transformers](http://arxiv.org/abs/2611.22611v1) | Jialin Chen, Xiaochen Zhao, Aili Wang | Proposes decision-aligned PTQ for spiking transformers that preserves task-relevant information during quantization, addressing the unique challenge of maintaining spike-based temporal dynamics under reduced precision. |
| [EDA: Observe, Verify, and Assess for Evidence-Grounded Multimodal Depression Analysis](http://arxiv.org/abs/2611.22648v1) | Changzeng Fu, Ming Shang, Xinyi Zhang, et al. | Presents an evidence-grounded framework for depression assessment that makes individual observations and their relevance to decisions inspectable, addressing the opacity of global behavioral summarization in existing methods. |
| [AlignedHPO: Efficient Surrogate-Guided Loss Hyperparameter Optimization](http://arxiv.org/abs/2611.22658v1) | Ivan Karpukhin, Andrey Savchenko | Enables efficient tuning of differentiable loss hyperparameters (weights, scales, margins) through surrogate-guided optimization, replacing expensive black-box search with gradient-aware methods. Reduces manual tuning effort for complex loss functions. |
| [The Price of Hard Coverage Constraints in Online Conformal Prediction](http://arxiv.org/abs/2611.22646v1) | Mingrui Liu | Analyzes how hard coverage constraints in sequential conformal prediction affect miscoverage fluctuations over time, providing theoretical bounds for deployment scenarios requiring stable uncertainty quantification. |
| [Social Signal Bench: Evidence-Weighted Evaluation of Co-occurring Social Signals in Video and Audio](http://arxiv.org/abs/2611.22704v1) | Siddharth Ravi, Anders R. Bargum, Hugo Anselme, et al. | Introduces a benchmark for evaluating recognition of co-occurring social signals (interest, hesitation) in conversations, addressing the limitation of multi-label F1 that overlooks semantic relationships between signals. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Making the World React Realistically: A Closed-Loop Interactive World Model for Autonomous Driving](http://arxiv.org/abs/2611.22691v1) | Jia Hu, Yang Chang, Panqu Wang, et al. | Proposes a world model for autonomous driving that ensures both behavioral realism and visual fidelity by modeling vehicle interactions, enabling training and evaluation beyond recorded logs. |
| [Right Diagnosis, Unsafe Route: Auditing Clinical AI Decision Trajectories and Corrective Oversight](http://arxiv.org/abs/2611.22612v1) | Guanqiao Chen, Wei Jiang, Shu Zhang, et al. | Audits clinical AI systems that reach correct diagnoses through potentially harmful intermediate steps, revealing that final-score evaluations miss critical safety issues in decision trajectories. |
| [SciWorkBench: A Benchmark for Real Scientific Workflows](http://arxiv.org/abs/2611.22490v1) | Yuchen Zhang, Taolin Han, Jinghang Wang, et al. | Evaluates whether current LLM agents can complete projects like real scientists, introducing benchmarks for planning, execution, and refinement in authentic scientific workflows. Sets a new standard for agent capability assessment. |
| [DARWIN: a Geospatial Foundation Model for Marine Intelligence](http://arxiv.org/abs/2611.22496v1) | Coen van den Elsen, Laurens Geffert | Presents the first geospatial foundation model for marine domains, addressing challenges unique to ocean environments: missingness, multi-modal physical variables, sparse labels, and dynamic biogeochemical processes. |
| [MillBill: A Machining Agent with Geometric Feedback](http://arxiv.org/abs/2611.22565v1) | Gennadii Savrasov, Artem Slavin, Soslan Kabisov, et al. | Introduces an agent that separates geometry from process knowledge in CNC machining program generation, using geometric feedback to validate and correct toolpaths rather than requiring the model to handle numerical execution. |
| [RehearsalBench: Can AI Predict What Happens When You Change a Company?](http://arxiv.org/abs/2611.22480v1) | Mika Siddiqui, Tharaka Perera | Benchmarks AI models' ability to diagnose operations, choose interventions, and predict outcomes when companies change their processes—addressing the growing demand for AI-driven organizational decision support. |

---

## 3. Research Trend Signal

Today's submissions reveal several emerging directions. **Agent skill lifecycle management** is gaining attention, with work on staled skills, honeypot deception coherence, and safety harness evolution suggesting a maturation from building agents to maintaining them. **Evaluation rigor** is increasingly prioritized—papers auditing prompt optimizers, conformal prediction constraints, and clinical decision trajectories indicate the community is systematically addressing credibility gaps. **World models for embodied AI** are expanding beyond gaming into machining, marine environments, and surgical applications, with new focus on correcting long-horizon drift and achieving real-time inference. The **quantum-classical boundary** for ML is being tested in ship performance domains, while **geospatial foundation models** signal a shift toward domain-specific pretrained representations. Finally, **multi-source context governance** (LMLineage) and **evidence-grounded analysis** (EDA, FVScore) point to growing demand for interpretable, auditable AI systems.

---

## 4. Worth Deep Reading

1. **[PACT: Plan-Action Consistency Training by Preserving Correct Plans and Repairing Actions in GUI Agents](http://arxiv.org/abs/2611.22591v1)**  
   *Why:* The execution gap between planning and action is a fundamental reliability problem for deployed agents. This paper provides a clear problem definition, a theoretically motivated solution (outcome-supervised RL with plan preservation), and empirical validation that addresses a bottleneck currently limiting real-world agent adoption.

2. **[SciWorkBench: A Benchmark for Real Scientific Workflows](http://arxiv.org/abs/2611.22490v1)**  
   *Why:* As AI agents are increasingly deployed for scientific research, understanding their actual project-level capability is critical. This benchmark defines a rigorous evaluation framework that moves beyond task-level metrics to assess end-to-end scientific workflow completion—a timely contribution with significant implications for AI-assisted discovery.

3. **[Know When to Zoom: How Small Is Too Small for Vision-Language Models?](http://arxiv.org/abs/2611.22709v1)**  
   *Why:* This paper uncovers a practical, widely-relevant failure mode in deployed VLMs caused by image preprocessing, with concrete quantitative analysis of resolution degradation across commercial services. The methodology and findings are immediately applicable to anyone building or deploying vision-language systems.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*