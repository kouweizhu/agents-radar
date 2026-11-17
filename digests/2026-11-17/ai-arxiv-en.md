# ArXiv AI Research Digest 2026-11-17

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 31 papers | Generated: 2026-11-17 04:44 UTC

---

<think>The user wants me to create a structured ArXiv AI Research Digest based on the 31 papers listed. Let me analyze the papers and organize them into the requested format.

Let me categorize the papers:

**Large Language Models (architecture, training, alignment, evaluation):**
- Paper 8: AI-assisted hiring systems audit
- Paper 10: Decision models for clinical data extraction
- Paper 18: Conversation history in LLM reasoning
- Paper 20: Self-proposed interpreter-labelled training for 4B model
- Paper 28: Ablation/reproducibility/transparency in LLM technical reports
- Paper 29: Cross-modal alignment
- Paper 3: Paying creators for training data

**Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought):**
- Paper 1: Episodic and procedural memory for tool-using agents
- Paper 7: Holistic evaluation of agent memory systems
- Paper 21: Security of deep research agents
- Paper 22: Agentic scientific discovery

**Methods & Frameworks (new techniques, benchmarks, efficiency improvements):**
- Paper 2: SWE-CoWork benchmark for coding agents
- Paper 4: Specification explicitness in LLM-generated code
- Paper 5: Cyber-secure wearable sensors (not really ML method)
- Paper 6: RoboKit for parallel differentiable optimization
- Paper 9: CapCover Filter for semantic approximate membership queries
- Paper 11: CECAR for MoE LLMs on-device inference
- Paper 13: Structural constraints in knowledge-guided generative systems
- Paper 15: SAFER for world-model-based planning in autonomous driving
- Paper 16: Preemption in long-output LLM serving
- Paper 19: Clinician assessment with auditory AI (not really method/framework)
- Paper 24: Fine-grained expressivity of graph neural networks


- Paper 26: GEM-MM for VLM hallucination reduction
- Paper 27: ReactBench-AD for driving VLAs
- Paper 30: Autonomous multi-modal agents for ITOps
- Paper 31: Morphology-decoupled segmentation

**Applications (domain-specific, multimodal, code generation):**
- Paper 2: SWE-CoWork for coding agents (also fits here)
- Paper 5: CAPSARII project for soldier health monitoring
- Paper 10: Decision models for clinical data extraction
- Paper 14: MT-RGCN-DTI for drug-target interaction
- Paper 17: FRAAC for French multimodal communication
- Paper 19: Clinician assessment with auditory AI
- Paper 23: acuSimNet for acupuncture points
- Paper 25: D'BEAST for autonomous driving explanation
- Paper 30: ITOps observability multi-modal agents

Now I'll select the 8-15 most important papers and organize them by theme. For large language models, I'm looking at papers addressing training and evaluation, particularly those focused on efficiency and robustness. Paper 28 on LLM technical reports and Paper 29 on cross-modal alignment seem significant for understanding model capabilities and limitations.

The agent and reasoning papers are particularly strong—Paper 1 on episodic memory for tool use, Paper 7 on evaluating agent memory systems, and Paper 21 on securing deep research agents all address fundamental challenges in autonomous systems. For methods and frameworks, Paper 2's SWE-CoWork benchmark for coding agents and Paper 6's RoboKit for parallel optimization represent solid contributions to evaluation and efficiency.

Several application-focused papers stand out: Paper 10 on clinical decision models using language models, Paper 14 on multi-task drug-target interaction prediction, and Paper 17 on French multimodal augmentative communication cover important real-world domains. I'm also noting Paper 26 on reducing VLM hallucinations through entropy-guided alignment as a practical improvement to multimodal systems.

The self-proposed interpreter-labelled training approach (Paper 20) demonstrates how smaller models can achieve significant gains through better training strategies. Combined with emerging directions like agent memory systems, security considerations for deep research agents, and efficient on-device inference, these papers reveal a field moving toward more practical, trustworthy deployments. Paper 28's focus on transparency and reproducibility in LLM technical reports addresses a critical gap in how the community validates claims.
</think>


# ArXiv AI Research Digest

**Date:** 2026-11-17 | **Categories:** cs.AI, cs.CL, cs.LG | **Papers Analyzed:** 31

---

## 1. Today's Highlights

Today's ArXiv submissions reveal three significant research directions. First, **agent memory systems** are receiving substantial attention, with papers addressing both episodic/procedural memory for tool-using agents and holistic evaluation frameworks for agent memory—highlighting growing focus on long-horizon agent capabilities and their associated risks. Second, **LLM efficiency for deployment** remains critical, with new work on on-device Mixture-of-Experts inference acceleration and intelligent KV cache management for long-output scenarios. Third, **evaluation rigor** is under scrutiny, with meta-analyses examining reproducibility in LLM technical reports and controlled experiments on how specification explicitness affects code generation quality.

---

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [The novelty exposed: ablation, reproducibility and transparency in 40 technical reports of open-weight LLMs](http://arxiv.org/abs/2611.20003v1) | Bahaeddin Türkoğlu et al. | Analyzes 48 new LLM architectures from 2025, finding widespread gaps in ablation studies and reproducibility claims. Provides a framework for evaluating technical report rigor, critical for responsible AI development. |
| [What Matters for Cross-Modal Alignment](http://arxiv.org/abs/2611.20000v1) | Yipeng Sun, Jiajun Wang et al. | Tests zero-pair alignment across five datasets and four modalities, examining the Platonic Representation Hypothesis. Advances understanding of how different encoders converge across vision, text, audio, and depth. |
| [The Silent Cost of Conversation History in LLM Reasoning](http://arxiv.org/abs/2611.20071v1) | Ali Şenol et al. | Investigates how accumulated conversation history degrades accuracy in multi-turn systems. Introduces process-level quality metrics that predict accuracy degradation before it manifests, enabling proactive mitigation. |
| [The Frontier Must Grow](http://arxiv.org/abs/2611.20049v1) | Martin Schroder et al. | Demonstrates that a 4B parameter model can self-propose training problems and learn from interpreter feedback, roughly doubling accuracy on fresh exams. Shows potential for unbounded improvement through self-generated curriculum. |
| [GEM-MM: Reducing VLM Hallucination with Entropy-Guided Preference Alignment](http://arxiv.org/abs/2611.20016v1) | Yuanshan Chua, Xuejiao Zhao et al. | Addresses VLM hallucination by using entropy-guided preference alignment instead of standard DPO. Improves reliability of vision-language models under limited preference data. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [A Matrix with Steps: An Episodic and Procedural Memory Method for Tool-Using Agents and Robots](http://arxiv.org/abs/2611.20230v1) | Jürgen Paulhart, Peter Schüller et al. | Introduces memory architecture addressing agent failures and false success beliefs in production systems. Enables agents to avoid repeating past mistakes and learn from verified outcomes rather than assumed ones. |
| [HEAMS: Holistic Evaluation of Agent Memory Systems](http://arxiv.org/abs/2611.20144v1) | Chirag Goel, Jacob Lavoie et al. | Proposes comprehensive evaluation framework for agent memory addressing disclosure risks, correction resistance, and retention beyond consent. Establishes benchmarks for safe memory persistence in AI agents. |
| [Security of Deep Research Agents: Attack Surface, Defenses, Benchmarks, and Agenda](http://arxiv.org/abs/2611.20045v1) | Yang Luo, Guangpu Chen et al. | Systematizes security research across retrieval, planning, evidence synthesis, and reporting stages of deep research agents. Establishes attack taxonomies and defense strategies for autonomous research systems. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [SWE-CoWork: Benchmarking Coding Agents as Digital Employees](http://arxiv.org/abs/2611.20218v1) | Xinping Lei, Minghao Liu et al. | Introduces benchmark of 101 development assignments across 101 repositories and 11 languages, treating coding agents as employees. Evaluates collaboration, verification, and requirement understanding in organizational contexts. |
| [CECAR: Cache & Expert Co-Aware Routing Accelerates On-Device Inference of MoE LLMs](http://arxiv.org/abs/2611.20119v1) | Byeongju Kim, Hoonki Lee et al. | Achieves practical on-device MoE LLM deployment through cache and expert co-aware routing. Addresses memory bottlenecks that previously made sparse expert activation infeasible on resource-constrained devices. |
| [Making Preemption Productive in Long-Output LLM Serving](http://arxiv.org/abs/2611.20106v1) | Ziji Shi, Xinyi Wan et al. | Identifies and solves KV thrashing problem where long-output reasoning LLMs repeatedly lose state during preemption. Improves throughput and latency for sustained reasoning workloads. |
| [RoboKit: Accelerating Parallel Differentiable Optimization for Robot Learning](http://arxiv.org/abs/2611.20185v1) | Jianglong Ye, Xuanbin Peng et al. | Provides GPU-parallel multi-seed solvers for robotics, achieving 2-60× speedups over task-specific baselines. Balances performance with flexibility for diverse robotic optimization problems. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Can decision models extract clinical data from cancer pathology reports?](http://arxiv.org/abs/2611.20129v1) | Indranil Mallick, Paromita Roy et al. | Evaluates decision models (Nimble 9B, Tev1 4B) on clinical text extraction, finding promising accuracy but calibration challenges. First systematic evaluation of this emerging model class in healthcare settings. |
| [FRAAC: A French Multimodal LLM for Pictogram-Based AAC](http://arxiv.org/abs/2611.20094v1) | Alexandre Audibert, François Portet et al. | Introduces multimodal LLM and dataset for augmentative communication using pictograms. Addresses a critical accessibility gap by enabling reliable pictogram interpretation and generation. |
| [MT-RGCN-DTI: Multi-Task Relational GCN for Drug-Target Interaction](http://arxiv.org/abs/2611.20109v1) | Dheeran Sankaran, R Yadunandan et al. | Integrates heterogeneous data sources for drug-target interaction prediction using multi-task relational graph convolutional networks. Accelerates early-stage drug discovery through improved prediction accuracy. |

---

## 3. Research Trend Signal

Today's submissions signal several emerging directions. **Agent safety and memory** is rapidly maturing—from basic memory implementations to comprehensive evaluation frameworks addressing privacy, correction, and consent. **On-device AI** continues gaining momentum with practical MoE inference solutions, suggesting deployment is shifting from cloud-centric to edge-native architectures. **LLM evaluation rigor** is receiving overdue attention, with meta-analyses exposing reproducibility gaps that could reshape how the community values technical contributions. Notably, **self-supervised improvement** through self-generated curricula (Paper 20) hints at a paradigm where models continuously expand their own capabilities unboundedly—a direction with significant implications for AI development trajectories.

---

## 4. Worth Deep Reading

1. [**SWE-CoWork: Benchmarking Coding Agents as Digital Employees**](http://arxiv.org/abs/2611.20218v1) — This benchmark represents a paradigm shift from evaluating isolated coding能力 to measuring agent effectiveness in realistic organizational workflows. The 101-task, multi-language design provides the most comprehensive assessment to date of how AI agents perform as team members, with direct implications for software engineering practice.

2. [**HEAMS: Holistic Evaluation of Agent Memory Systems**](http://arxiv.org/abs/2611.20144v1) — As AI agents gain persistence capabilities, this paper addresses a critical gap: how do we evaluate memory systems beyond task accuracy? The framework covering disclosure, correction, and retention risks provides essential guidance for responsible agent development.

3. [**The novelty exposed: ablation, reproducibility and transparency in 40 technical reports of open-weight LLMs**](http://arxiv.org/abs/2611.20003v1) — With 48 new LLM architectures released in 2025 alone, understanding what is actually novel versus incremental is increasingly important. This meta-analysis offers a systematic approach to evaluating technical rigor that benefits both researchers and practitioners.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*