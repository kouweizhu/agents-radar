# ArXiv AI Research Digest 2026-09-30

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-30 01:28 UTC

---

<think>The user wants me to create a structured ArXiv AI Research Digest based on 50 papers from cs.AI, cs.CL, and cs.LG categories published on 2026-09-29. Let me analyze the papers and organize them into the requested format.

Let me identify the key papers and themes:

**Themes:**
1. 🧠 Large Language Models (architecture, training, alignment, evaluation)
2. 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
3. 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
4. 📊 Applications (domain-specific, multimodal, code generation)

Let me categorize the papers:

**LLM Theme:**
1. TaskBridge (2609.36968) - Tabular anomaly detection + in-context learning
2. ER-JEPA (2609.36952) - Experience replay for JEPA in language models
3. Cool the Sampler (2609.36953) - Sampling temperature for GRPO
4. Fine-Tuning on Self-Generated (2609.36945) - Learning dynamics of fine-tuning
5. Dual-Channel Robust GRPO (2609.36944) - Group-relative policy optimization
6. CoEM (2609.36935) - Commit-on-Evidence Memory for long-context
7. Neuro-Symbolic Computer Use (2609.36927) - Reusable policies for computer tasks
8. MultiTalk (2609.36903) - Full-duplex speech models for long conversations
9. BaLEEN (2609.36913) - Contextual ASR
10. STAR-GRPO (2609.36900) - Reward hacking in group-relative policy optimization


11. Architecture Alignment (2609.36883) - Tabular foundation models
12. SINO (2609.36890) - Scale-invariant neural operator
13. IronLLM (2609.36860) - Compact edge-native language models
14. Safe-by-Design Learning (2609.36942) - Energy-based neural networks

**Agents & Reasoning:**
1. Controlled Decoding Attacks (2609.36956) - Attacks on black-box LLMs
2. SCA (2609.36939) - Spatial credit assignment for GUI agents
3. WeLike2Party (2609.36937) - Multi-human image animation
4. PrecogUI (2609.36923) - Pre-cognitive architecture for dynamic scenarios
5. WEFT (2609.36887) - Scaling tool-use post-training
6. State Trace Rationale (2609.36867) - Auxiliary task in RL
7. Where the Model Changes Its Mind (2609.36864) - Hindsight-divergence localization
8. When Upstream Messages Override (2609.36855) - Multi-agent LLM collaboration
9. Does the Unsafe Gradient Survive (2609.36849) - Gradient-based jailbreak detection

**Methods & Frameworks:**
1. JudgeCast (2609.36966) - Time series forecasting with covariate judgments
2. VStress (2609.36958) - Auditing and adaptive budget allocation
3. Purlin (2609.36954) - Orchestration from datapath
4. Scalable Diffusion SBI (2609.36950) - Simulation-based inference
5. Learn from the Gap (2609.36932) - Differential-aware advantage pruning
6. HorizonFlow (2609.36896) - Variable-length planning for offline RL
7. Harness Evolution (2609.36892) - Self-improving personal agents
8. Beyond Sub-Gaussian Detector (2609.36888) - Robust change point detection
9. SKILLLITE (2609.36879) - Evidence-guided malicious skill auditing
10. Seeing Time (2609.36873) - Visual-temporal representation learning
11. Markovian Nonconvex ADMM (2609.36859) - Bellman-resolvent stability
12. RolloutFaith (2609.36843) - Auditing internal interventions
13. On-Policy Visual Evidence Distillation (2609.36838) - Visual evidence distillation
14. ARC-KV (2609.36835) - KV cache compaction
15. Where Does Staleness Accumulate (2609.36830) - Asynchronous RL

**Applications:**
1. VLALight (2609.36934) - Vision-language-action for traffic signal control
2. State Transport Routing (2609.36926) - Photovoltaic forecasting
3. AeroManip-VLA (2609.36915) - Aerial manipulation
4. Digital Twin Modeling (2609.36901) - Quantum reservoir computing
5. RNA Design (2609.36885) - Conditioned flow matching
6. What You Observe Determines (2609.36881) - Causal models
7. Safer Content or Firmer Refusals (2609.36862) - Alignment under harmful fine-tuning
8. Effective HAR Framework (2609.36848) - Human activity recognition
9. Automated Screw Planning (2609.36847) - Pelvic fractures
10. DSWM (2609.36845) - UAV base station repositioning
11. MRI Super-Resolution (2609.36837) - Ultra-low-field MRI

I'm selecting the most impactful papers to highlight. The strongest contributions span multiple areas: TaskBridge stands out for bridging unsupervised tabular anomaly detection with in-context learning, while ER-JEPA advances joint-embedding predictive architectures through experience replay. VStress introduces correlation-aware auditing methods, and Controlled Decoding Attacks presents novel techniques for targeting black-box language models. CoEM demonstrates memory mechanisms for extended context processing, and IronLLM pushes forward compact models for edge deployment.

Additional notable work includes Neuro-Symbolic Computer Use for reusable policy learning, PrecogUI for pre-cognitive GUI agents, and WEFT for scaling tool-use post-training. The set also covers specialized applications like VLALight for traffic control, RNA Design through flow matching, and ARC-KV for KV cache optimization.

Now I'll structure the analysis around four main themes: LLMs covering architecture, training, alignment and evaluation; Agents and Reasoning addressing planning and tool use; Methods and Frameworks including new techniques and efficiency gains; and Applications spanning domain-specific and multimodal implementations.</think>

# ArXiv AI Research Digest — September 29, 2026

## 1. Today's Highlights

Today's batch reveals several convergent research directions. **Reinforcement learning for LLMs** continues to mature, with multiple papers addressing group-relative policy optimization (GRPO) staleness, reward hacking, and sampling strategies—suggesting production RL pipelines are becoming more sophisticated. **Agent architectures** are moving toward pre-cognitive planning and reusable neuro-symbolic policies, indicating a shift from reactive execution to more robust, long-horizon task handling. Notably, **efficiency innovations** appear across the board: KV cache compaction, compact edge-native models, and adaptive budget allocation for verifiers all target real-world deployment constraints. Finally, **multimodal reasoning** (GUI agents, vision-language-action for traffic control and aerial manipulation) demonstrates expanding physical-world embodiment of AI systems.

---

## 2. Key Papers

### 🧠 Large Language Models (Architecture, Training, Alignment, Evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [TaskBridge: Bridging Unsupervised Tabular Anomaly Detection and In-Context Learning via Virtual Tasks](http://arxiv.org/abs/2609.36968v1) | Doyun Choi, Dooho Lee, Jaemin Yoo et al. | Introduces virtual task generation to enable tabular foundation models to perform zero-shot anomaly detection without dataset-specific training. Bridges the gap between unsupervised TAD and in-context learning, extending foundation model capabilities to tabular anomaly detection. |
| [ER-JEPA: Experience Replay Improves Joint-Embedding Predictive Learning in Language Models](http://arxiv.org/abs/2609.36952v1) | Jingnan Pu, Zi-En Fan, Feng Lian et al. | Applies experience replay to LLM-JEPA, improving alignment of different semantic views of underlying knowledge. Addresses the limitation where strong alignment signals may not capture comprehensive abstract semantics. |
| [Cool the Sampler, Not the Learner: Sampling Temperature Moves the Staleness Cliff of Importance-Corrected GRPO](http://arxiv.org/abs/2609.36953v1) | Taiheng Pan | Reveals a "staleness cliff" in importance-corrected GRPO and demonstrates that sampling temperature can extend how long the sampler can lag behind the learner. Provides practical guidance for production RL pipelines. |
| [CoEM: Empowering Long-Context Reasoning with Commit-on-Evidence Memory](http://arxiv.org/abs/2609.36935v1) | Jingguang Li, Yebo Wu, Zuyi Guo et al. | Addresses LLM performance degradation on long contexts by maintaining bounded textual memory in model context with chunk-by-chunk processing. Enables reliable long-context reasoning for complex, long-horizon tasks. |
| [IronLLM: Forging Compact Edge-Native Language Models for Real-Time Embodied Intelligence](http://arxiv.org/abs/2609.36860v1) | Changdi Yang, Fengquan Jiao, Haochih Lin et al. | Presents IronLLM-0.6B with hybrid attention and X-MTP (multi-token prediction) for efficient on-device inference. Targets real-time embodied intelligence on edge devices. |
| [STAR-GRPO: Canonical Anchoring and Reliability-First Advantages against Representation-Dependent Reward Hacking](http://arxiv.org/abs/2609.36900v1) | Wan Tian, Zhongyi Li, Xiang Xu et al. | Addresses reward hacking in group-relative policy optimization where unsupported rewards can skew advantages. Introduces reliability-first advantage estimation to prevent representation-dependent reward exploitation. |
| [Architecture Alignment With Sparse Priors in Tabular Foundation Models](http://arxiv.org/abs/2609.36883v1) | Tianqi Zhao, Tianyi Zhuang, Shuo Duan et al. | Analyzes how different pretraining priors, architectures, and objectives affect tabular foundation model performance. Provides guidance for aligning model architecture with intended downstream tasks. |

### 🤖 Agents & Reasoning (Planning, Tool Use, Multi-Agent, Chain-of-Thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Neuro-Symbolic Computer Use: Learning Reusable Policies for Reliable and Efficient Execution](http://arxiv.org/abs/2609.36927v1) | Hyewon Suh, Thanh Minh Nguyen, Chih-Lun Lee et al. | Introduces neuro-symbolic computer use that learns reusable policies for recurring workflows, reducing re-planning overhead. Moves beyond per-step re-planning to more reliable and efficient task execution. |
| [PrecogUI: Proactive GUI Agents via Pre-cognitive Simulation and Experience Retrieval](http://arxiv.org/abs/2609.36923v1) | Bin Kang, Jiarui Ouyang, Li Jiang et al. | Shifts GUI agents from reactive execution to pre-cognitive architecture using simulation and experience retrieval. Addresses cascading failures in long-horizon, dynamic scenarios. |
| [WEFT: Scaling Tool-Use Post-Training for General-Purpose Agents](http://arxiv.org/abs/2609.36887v1) | Bo Mao, Hang He, Linting Wang et al. | Addresses scaling tool-use post-training beyond isolated environment synthesis. Proposes a broader framework encompassing environment, task, agent harness, and evaluator components. |
| [Controlled Decoding Attacks on Black-Box LLMs](http://arxiv.org/abs/2609.36956v1) | Jesson Wang, Shawn Li, Wei Yang et al. | Demonstrates that manipulating next-token probabilities can bypass safety alignment even without weight access. Shows attacks work on interfaces returning only sampled text by reconstructing probabilities. |
| [When Upstream Messages Override Correct Answers: A Controlled Study of Multi-Agent LLM Collaboration](http://arxiv.org/abs/2609.36855v1) | Yaxin Gong, Gangyi Zhang, Chongming Gao et al. | Studies how upstream agent messages can cause downstream agents to override correct answers. Provides empirical evidence for a critical vulnerability in multi-agent LLM systems. |
| [Does the Unsafe Gradient Survive a Conversation? On the Fragility of Gradient-Based Jailbreak Detection in Multi-Turn Dialogue](http://arxiv.org/abs/2609.36849v1) | Omar Sheta, Rinku Deuja, Hadi Masoudi et al. | Shows that gradient-based jailbreak detectors (e.g., GradSafe) are fragile in multi-turn dialogues where unsafe intent is spread across turns. Exposes a significant gap in current safety mechanisms. |

### 🔧 Methods & Frameworks (New Techniques, Benchmarks, Efficiency Improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [VStress: Correlation-Aware Auditing and Adaptive Budget Allocation for Repeated Verifiers](http://arxiv.org/abs/2609.36958v1) | Miaobo Hu, Shuhao Hu, Xiaobo Guo et al. | Introduces VStress-CA, a correlation-aware allocation policy that estimates conditional marginal information of verifiers. Reduces redundant verifier calls while maintaining validation quality. |
| [Learn from the Gap: Differential-Aware Advantage Pruning with Adaptive Rollout Sampling for GRPO](http://arxiv.org.abs/2609.36932v1) | Jiahua Yang, Zhiwei Yang, Xianpeng Zhang et al. | Proposes differential-aware advantage pruning to reduce computational overhead in GRPO from per-question multi-rollout sampling. Addresses efficiency bottlenecks in group-relative policy optimization. |
| [ARC-KV: Amortizing Anchor Search for Reconstruction-Based KV Cache Compaction](http://arxiv.org/abs/2609.36835v1) | Zheyu Shen, Guanhua Wang, Dezhan Tu et al. | Targets long-context LLM inference bottlenecks with reconstruction-based KV cache compaction. Particularly effective for long, reusable context prefixes serving many downstream queries. |
| [Where Does Staleness Accumulate? Pool Aware Effective Staleness Control for Asynchronous RL in LLM Post-Training](http://arxiv.org/abs/2609.36830v1) | Chenliang Li, Neiwen Ling, Zijun Wei et al. | Studies policy lag in asynchronous RL where rollout generation overlaps with policy optimization. Provides pool-aware staleness control to improve training stability and efficiency. |
| [Beyond Sub-Gaussian Detector Scores: Robust Weighted Profile-Loss Change Point Detection for Human-LLM Text Segmentation](http://arxiv.org/abs/2609.36888v1) | Wan Tian, Zhongyi Li, Yawen Li et al. | Proposes robust weighted profile-loss for detecting authorship transitions in mixed human-LLM documents. Addresses vulnerability of existing methods to extreme detector scores. |
| [On-Policy Visual Evidence Distillation](http://arxiv.org/abs/2609.36838v1) | Shaohang Wei, Feifan Song, Guangyue Peng et al. | Addresses error propagation in visual agents by providing guidance from a teacher on student-generated interaction trajectories. Accounts for how image operations change evidence for subsequent reasoning. |

### 📊 Applications (Domain-Specific, Multimodal, Code Generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [VLALight: A Vision-Language-Action Model for Traffic Signal Control](http://arxiv.org/abs/2609.36934v1) | Pan Zhang, Siqi Lai, Kemu Dong et al. | Introduces VLA for traffic signal control using roadside camera visual observations. Moves beyond manually engineered traffic state representations to end-to-end visual grounding. |
| [RNA Design via Conditioned Flow Matching and Finite-Policy Reinforcement Learning](http://arxiv.org/abs/2609.36885v1) | Zefeng Lin, Xianyong Fang, Tianfan Fu et al. | Combines conditioned flow matching with finite-policy RL for RNA sequence design targeting secondary structures. Models natural evolution through sequence variation and selection. |
| [AeroManip-VLA: Scalable Vision-Language-Action Learning for Aerial Manipulation with RL-Generated Demonstrations](http://arxiv.org/abs/2609.36915v1) | Rui Huang, Yanlin Mu, Lidong Li et al. | Extends VLA models to aerial manipulators (drones with robotic arms) using RL-generated demonstrations. Addresses distinct challenges of 3D workspace manipulation. |
| [Safer Content or Firmer Refusals? A Hybrid Perturbation Defense for Alignment under Harmful Fine-tuning](http://arxiv.org/abs/2609.36862v1) | Muhammad Zeeshan Akram, Mufid Kamel Marican, Anvesh Reddy Yenugu et al. | Proposes a hybrid perturbation defense against harmful fine-tuning attacks that degrade model alignment. Addresses the attack surface created by fine-tuning-as-a-service. |
| [State Transport Routing for Short-horizon Adaptation in Multi-horizon Photovoltaic Forecasting](http://arxiv.org/abs/2609.36926v1) | Xu Yuqing, Zhou Liguo, Sun Ze et al. | Introduces state transport routing (STR), a lightweight adapter for multi-horizon PV power forecasting. Addresses errors from extrapolating short-term trends over longer horizons. |

---

## 3. Research Trend Signal

Today's submissions reveal **four converging trends**:

1. **Production RL maturation** — Multiple papers address practical challenges in LLM post-training: staleness in asynchronous RL, sampling temperature effects, reward hacking, and computational overhead reduction. This indicates the field is moving from proof-of-concept to production-grade systems.

2. **Agent robustness beyond single-turn** — The emergence of pre-cognitive architectures (PrecogUI), neuro-symbolic reusable policies, and studies on multi-agent failure modes (upstream message override, gradient-based jailbreak detection in multi-turn) signals a critical focus on real-world reliability.

3. **Efficiency as a first-class concern** — KV cache compaction, compact edge-native models, and adaptive verifier allocation reflect increasing deployment constraints. Inference optimization is no longer an afterthought but a core research thrust.

4. **Physical-world embodiment** — Vision-language-action models for traffic control, aerial manipulation, and UAV repositioning demonstrate expanding real-world agent deployment, moving beyond purely digital tasks.

---

## 4. Worth Deep Reading

1. **[Cool the Sampler, Not the Learner: Sampling Temperature Moves the Staleness Cliff of Importance-Corrected GRPO](http://arxiv.org/abs/2609.36953v1)** — For practitioners deploying RLHF/GRPO pipelines. The "staleness cliff" finding is directly actionable: tuning sampling temperature can significantly extend sampler-learner synchronization intervals, reducing computational costs. This bridges theory and production practice.

2. **[Neuro-Symbolic Computer Use: Learning Reusable Policies for Reliable and Efficient Execution](http://arxiv.org/abs/2609.36927v1)** — Represents a conceptual advance in agent design. Instead of treating every workflow as a fresh planning problem, learning reusable policies addresses a fundamental inefficiency in current computer-use agents. The neuro-symbolic approach offers a path to more reliable, cost-effective automation.

3. **[ARC-KV: Amortizing Anchor Search for Reconstruction-Based KV Cache Compaction](http://arxiv.org/abs/2609.36835v1)** — For anyone building long-context applications. The method tackles a core bottleneck in LLM inference—KV cache growth—with reconstruction-based compaction that specifically targets reusable context prefixes. Given the push toward longer contexts, this addresses a pressing engineering challenge.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*