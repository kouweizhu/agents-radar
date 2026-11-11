# ArXiv AI 研究日报 2026-11-11

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-11-11 02:10 UTC

---

<think>The user wants me to translate this ArXiv AI Research Digest from English into Simplified Chinese. I need to:

1. Translate all the content into Simplified Chinese
2. Keep the Markdown structure exactly as is
3. Keep URLs, code spans, numbers, dates, project names, etc. verbatim
4. Use natural technical Chinese register
5. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

**Title and header:**
ArXiv AI Research Digest
日期：2026-11-11 | 分类：cs.AI, cs.CL, cs.LG

**Section 1: Today's Highlights**
Today's submissions reveal significant advances across LLM alignment, agentic systems, and efficient learning methods. Preference optimization research (PORT) tackles noisy annotation problems that have hindered RLHF effectiveness, while new work on agentic deception identifies evaluation gaps enabling deceptive behaviors in capable LLMs. The community continues advancing world models and memory architectures for long-horizon agent interactions, with several papers addressing catastrophic forgetting and rehearsal-free continual learning. Notably, 4-bit precision training analysis reveals that loss convergence doesn't guarantee equivalent acquisition of rare facts, challenging current evaluation practices. Medical AI applications show strong presence with clinical agents, lung cancer screening datasets, and log-based anomaly detection for healthcare systems.

**Section 2: Key Papers**

Tables need careful translation. Let me handle each:

Large Language Models table:
- PORT: Preference Optimization via Robust Token-Level Reweighting | Zhu et al. | Proposes robust token-level reweighting to handle noisy preference annotations in RLHF, directly addressing a critical bottleneck in LLM alignment. Improves alignment quality when preference data contains errors and ambiguity.
- Where Does Alignment Emerge and What Does It Mean? A Closer Look at the Platonic Representation Hypothesis | Herbst et al. | Investigates whether neural networks converge to shared representation spaces (PRH) and whether alignment correlates with this convergence. Questions the assumed relationship between representation similarity and alignment.


- Is Persona Generalization Predictable? | Mukherjee et al. | Discovers an "on-the-line" phenomenon where in-domain and out-of-domain persona generalization follow predictable trajectories, enabling better prediction of emergent misalignment.
- How Well Does AI Peer Review Work? A Benchmark Built from 100 Planted Errors | Litvak et al. | Introduces a benchmark with 100 planted errors to evaluate AI peer review systems; best single system caught 71/100 errors while ensemble caught 93/100. Reveals substantial room for improvement in factual error detection.
- What the Loss Curve Misses: FP4 Pretraining Slows the Acquisition of Rare Facts | Lu et al. | Demonstrates that 4-bit pretraining achieves similar loss curves but underperforms on rare factual knowledge acquisition, challenging loss-based evaluation of low-precision training methods.
- Mitigating Agentic Deception via Evaluation-Side Partially Observable Games | Li et al. | Identifies evaluation gaps that allow deceptive behaviors in capable LLMs and proposes detection mechanisms.

Agents & Reasoning:
- WorkflowArena: Benchmarking Executable Workflow Orchestration in LLM-Based Multi-Agent Systems | Jiang et al. | Proposes a benchmark for evaluating multi-agent workflow orchestration where LLMs generate executable workflows to coordinate agents.
- HiVe-Mem: Interleaving Horizontal Memory Expansion and Vertical Evidence Composition for Multimodal Agents | Zhang et al. | Introduces a memory system for multimodal agents that combines semantic retrieval with compressed memory representations to manage long-term interaction history.
- Agentic-OPD: Recovering Forgotten Agent Capabilities via On-Policy Distillation | Bian et al. | Shows that discarding non-best checkpoints during GRPO training loses valuable capabilities; suggests on-policy distillation to recover these forgotten abilities.
- Safe Reinforcement Learning for Multi-Turn Clinical Agents | Murphy et al. | Demonstrates that dense rewards outperform outcome rewards for clinical agents requiring sequential information gathering and decision-making under uncertainty.
- Sage-Taiyi: A Metacognitive Architecture for Scientific Discovery | Wang et al. | Introduces a metacognition-inspired architecture that monitors and controls scientific investigation processes.

Methods & Frameworks:
- KiteNorm: Variance Regularisation for Stable and Scalable Post-LN Transformers | Trochelmann et al. | Applies variance regularization to stabilize Post-LayerNorm Transformers at large depths, addressing scaling limitations.
- Learning Rate Decay Can Exponentially Accelerate SGD for Global Optimization of Nonconvex Functions | Ozgul et al. | Provides theoretical proof that learning rate decay offers exponential asymptotic advantage over standard SGD for nonconvex optimization.
- Anchor Behavior, Not Parameters: Rehearsal-Free Continual Learning with a Single Shared Prompt | Bui et al. | Demonstrates that a single shared prompt maintains task discrimination across continual learning scenarios without rehearsal.
- Vendi Anomaly Scores for Efficient and Accurate Anomaly Detection | Pasarkar et al. | Proposes Vendi scores for anomaly detection that avoid sensitivity to neighborhood scale and partitioning choices.
- LogCDM: Interpretable Log Anomaly Detection via Behavioral Graph Drift | Talukdar et al. | Presents a compact log anomaly detector using graph drift detection and adaptive signal fusion.
- Kolmogorov-Chapman Maps: Trajectory-Free Learning for Simulating Molecular Dynamics | Hassan et al. | Enables molecular dynamics simulation without explicit trajectory integration by learning Kolmogorov-Chapman equations.

Applications:
- Large Language Models as a Universal Searcher for Open-World Automated Machine Learning | Hu et al. | Proposes using LLMs as universal searchers that jointly optimize model architecture, hyperparameters, and data ratios across domains.
- LUCQUE: A lung cancer screening dataset from Québec for reliable AI evaluation | Topalis et al. | Releases a comprehensive lung cancer screening dataset addressing reproducibility issues in private and fragmented public datasets for medical AI evaluation.
- DeepChronos: Temporal Neuro-Symbolic Reasoning for Multi-Step Attack Detection | Burkow et al. | Combines neural and symbolic reasoning for temporally causal multi-step cyber attack detection.
- Curbside Chatbots: Auditing the Mental Health Interventions Large Language Models Recommend | Flathers et al. | Audits 41 language models' mental health recommendations across clinician, caregiver, and patient perspectives.
- GeoScope: Training-Free Program Execution beyond the Counting Horizon for Ultra-High-Resolution Remote Sensing | Deng et al. | Enables training-free VLM execution for ultra-high-resolution remote sensing QA.
- CoilStellaration: A Dataset and Benchmark for Engineering-Aware Stellarator Coilset Generation | Ewers et al. | Provides a dataset for stellarator coil design optimization combining electromagnetic constraints with engineering feasibility requirements.

**Section 3: Research Trend Signal**
Today's submissions indicate several emerging research trajectories. Agent evaluation frameworks are maturing beyond single-agent benchmarks toward multi-agent orchestration evaluation, addressing realistic deployment scenarios. Memory and continual learning for agents remains active, with work on rehearsal-free methods and semantic retrieval over compressed histories. Alignment evaluation is becoming more rigorous, moving from outcome metrics to process verification that detects deception.

Low-precision training is under increased scrutiny; the finding that loss convergence doesn't guarantee equitable knowledge acquisition challenges established evaluation practices. Medical and clinical AI continues strong representation, with focus on safe RL for clinical agents, de-identification tools, and medical datasets. Finally, world models for robotics and metacognitive architectures suggest growing interest in AI systems that explicitly model and reason about their own reasoning processes.

**Section 4: Worth Deep Reading**
1. PORT: Preference Optimization via Robust Token-Level Reweighting — Critical reading for anyone working on LLM alignment. The paper directly addresses the noisy preference data problem that plagues RLHF in practice, offering a principled token-level solution that could improve alignment robustness.

2. Learning Rate Decay Can Exponentially Accelerate SGD for Global Optimization of Nonconvex Functions — Provides rigorous theoretical justification for a widely-used but theoretically unexplained practice. The exponential acceleration result could influence learning rate schedule design for deep learning training.

3. Mitigating Agentic Deception via Evaluation-Side Partially Observable Games — As LLMs become capable agents, understanding and preventing deceptive behaviors becomes critical. The analysis of how evaluation gaps enable deception offers important insights for safe agent deployment.
</think>


# ArXiv AI 研究速报

**日期：** 2026-11-11 | **分类：** cs.AI, cs.CL, cs.LG

---

## 1. 今日要点

今日投稿在 LLM 对齐、Agent 系统和高效学习方法方面取得了重要进展。**偏好优化** 研究（PORT）解决了困扰 RLHF 效果的噪声标注问题，而关于 **Agent 欺骗** 的新工作则揭示了当前评估体系的漏洞——这些问题可能导致强大 LLM 表现出欺骗性行为。社区持续推进用于长程 Agent 交互的 **世界模型和记忆架构**，多篇论文探讨了灾难性遗忘和免回放持续学习。特别值得关注的是，**4 位精度预训练** 分析表明，损失曲线收敛并不意味着罕见事实的同等习得，这挑战了现有评估实践。医疗 AI 应用表现强劲，涵盖临床 Agent、肺部癌症筛查数据集和面向医疗系统的日志异常检测。

---

## 2. 核心论文

### 🧠 大语言模型

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [PORT: Preference Optimization via Robust Token-Level Reweighting](http://arxiv.org/abs/2611.12763v1) | Zhu et al. | 提出鲁棒的 Token 级重加权方法，以应对 RLHF 中的噪声偏好标注，直接解决 LLM 对齐的关键瓶颈。当偏好数据存在错误和歧义时，可提升对齐质量。 |
| [Where Does Alignment Emerge and What Does It Mean? A Closer Look at the Platonic Representation Hypothesis](http://arxiv.org/abs/2611.12869v1) | Herbst et al. | 研究神经网络是否会收敛到共享表征空间（PRH），以及对齐是否与这种收敛相关。对表征相似性与对齐之间的假设关系提出质疑。 |
| [Is Persona Generalization Predictable?](http://arxiv.org/abs/2611.12864v1) | Mukherjee et al. | 发现域内和域外人设泛化遵循可预测的"在线"（on-the-line）轨迹，使新兴对齐失败可以被更好地预测。 |
| [How Well Does AI Peer Review Work? A Benchmark Built from 100 Planted Errors](http://arxiv.org/abs/2611.12820v1) | Litvak et al. | 引入包含 100 个植入错误的基准测试来评估 AI 同行评审系统；最佳单一系统检出 71/100 个错误，集成系统检出 93/100 个。揭示了事实错误检测仍有很大改进空间。 |
| [What the Loss Curve Misses: FP4 Pretraining Slows the Acquisition of Rare Facts](http://arxiv.org/abs/2611.12832v1) | Lu et al. | 证明 4 位预训练虽然损失曲线相似，但在罕见事实知识获取上表现欠佳，挑战了低精度训练方法的损失评估范式。 |
| [Mitigating Agentic Deception via Evaluation-Side Partially Observable Games](http://arxiv.org/abs/2611.12835v1) | Li et al. | 将 LLM Agent 欺骗归因于评估端的不可完全观测性，并提出部分可观测博弈框架来检测和防止奖励驱动的作弊行为。 |

### 🤖 Agent 与推理

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [WorkflowArena: Benchmarking Executable Workflow Orchestration in LLM-Based Multi-Agent Systems](http://arxiv.org/abs/2611.12856v1) | Jiang et al. | 引入多 Agent 工作流编排评估基准，由 LLM 编写可执行工作流以协调 Worker Agent。将 Agent 评估从单上下文转向多 Agent 协作范式。 |
| [HiVe-Mem: Interleaving Horizontal Memory Expansion and Vertical Evidence Composition for Multimodal Agents](http://arxiv.org/abs/2611.12872v1) | Zhang et al. | 为多模态 Agent 提出一种记忆系统，交替使用语义检索与压缩记忆表示，解决长期交互历史管理问题。 |
| [Agentic-OPD: Recovering Forgotten Agent Capabilities via On-Policy Distillation](http://arxiv.org/abs/2611.12799v1) | Bian et al. | 证明在 GRPO 训练中丢弃非最优检查点会损失宝贵的 Agent 能力；提出在线策略蒸馏来恢复这些被遗忘的能力。 |
| [Safe Reinforcement Learning for Multi-Turn Clinical Agents](http://arxiv.org/abs/2611.12728v1) | Murphy et al. | 证明密集奖励优于结果奖励，更适合需要序贯信息收集和不确定性下决策的临床多轮 Agent。 |
| [Sage-Taiyi: A Metacognitive Architecture for Scientific Discovery](http://arxiv.org/abs/2611.12762v1) | Wang et al. | 引入一种元认知启发的架构，监控并控制科学探究过程，积累理解以指导未来探索。 |

### 🔧 方法与框架

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [KiteNorm: Variance Regularisation for Stable and Scalable Post-LN Transformers](http://arxiv.org/abs/2611.12729v1) | Trochelmann et al. | 提出方差正则化以稳定大深度 Post-LayerNorm Transformers，解决阻碍其广泛采用的扩展性限制。 |
| [Learning Rate Decay Can Exponentially Accelerate SGD for Global Optimization of Nonconvex Functions](http://arxiv.org/abs/2611.12769v1) | Ozgul et al. | 提供理论证明：学习率衰减在非凸函数全局优化上相比标准 SGD 具有指数级渐进优势，将从业者直觉形式化。 |
| [Anchor Behavior, Not Parameters: Rehearsal-Free Continual Learning with a Single Shared Prompt](http://arxiv.org/abs/2611.12777v1) | Bui et al. | 证明单一共享提示可在持续学习场景中保持任务区分度且无需回放，最大化参数效率。 |
| [Vendi Anomaly Scores for Efficient and Accurate Anomaly Detection](http://arxiv.org/abs/2611.12871v1) | Pasarkar et al. | 提出 Vendi 异常评分，避免对邻域尺度和划分选择的敏感性，提供比密度方法更鲁棒的替代方案。 |
| [LogCDM: Interpretable Log Anomaly Detection via Behavioral Graph Drift](http://arxiv.org/abs/2611.12775v1) | Talukdar et al. | 提出基于图漂移检测和自适应信号融合的紧凑型日志异常检测器，可在监控节点上部署无需 GPU。 |
| [Kolmogorov-Chapman Maps: Trajectory-Free Learning for Simulating Molecular Dynamics](http://arxiv.org/abs/2611.12880v1) | Hassan et al. | 通过学习 Kolmogorov-Chapman 方程实现无需显式轨迹积分的分子动力学模拟，加速稀有事件发现。 |

### 📊 应用

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Large Language Models as a Universal Searcher for Open-World Automated Machine Learning](http://arxiv.org/abs/2611.12791v1) | Hu et al. | 提出将 LLM 作为通用搜索器，跨领域联合优化模型架构、超参数和数据比例，桥接碎片化的 AutoML 方法。 |
| [LUCQUE: A lung cancer screening dataset from Québec for reliable AI evaluation](http://arxiv.org/abs/2611.12817v1) | Topalis et al. | 发布全面的肺部癌症筛查数据集，解决私有和碎片化公共数据集的复现性问题。 |
| [DeepChronos: Temporal Neuro-Symbolic Reasoning for Multi-Step Attack Detection](http://arxiv.org/abs/2611.12760v1) | Burkow et al. | 结合神经与符号推理进行时序因果多步网络攻击检测，超越先检测后关联的范式。 |
| [Curbside Chatbots: Auditing the Mental Health Interventions Large Language Models Recommend](http://arxiv.org/abs/2611.12814v1) | Flathers et al. | 从临床医生、护理人员和患者视角审计 41 个语言模型的心理健康干预建议，揭示建议的不一致性。 |
| [GeoScope: Training-Free Program Execution beyond the Counting Horizon for Ultra-High-Resolution Remote Sensing](http://arxiv.org/abs/2611.12699v1) | Deng et al. | 通过解耦计数/方向任务与视觉信任假设，实现超高分辨率遥感 QA 的免训练 VLM 执行。 |
| [CoilStellaration: A Dataset and Benchmark for Engineering-Aware Stellarator Coilset Generation](http://arxiv.org/abs/2611.12689v1) | Ewers et al. | 提供恒星器线圈设计优化数据集，结合电磁约束与工程可行性要求。 |

---

## 3. 研究趋势信号

今日投稿揭示了几个新兴研究方向。**Agent 评估框架** 正在成熟，从单 Agent 基准测试转向多 Agent 编排评估（WorkflowArena），以应对真实部署场景。**Agent 记忆与持续学习** 保持活跃，研究聚焦于免回放方法和压缩历史语义检索。**对齐评估** 正变得更加严格——从结果指标转向过程验证，检测欺骗行为（如 Agent 欺骗和对齐失败预测相关论文所示）。

**低精度训练** 正受到越来越多的审视；损失收敛不等于知识公平获取这一发现挑战了现有评估实践，可能影响 4 位及更低精度训练的验证方式。**医疗与临床 AI** 保持强劲存在感，聚焦临床 Agent 安全强化学习、去标识化工具和医疗数据集。最后，**机器人世界模型**（Σ-LeWM）和**元认知架构**（Sage-Taiyi）表明学界对能显式建模和推理自身思维过程的 AI 系统兴趣日增。

---

## 4. 值得深度阅读

1. [**PORT: Preference Optimization via Robust Token-Level Reweighting**](http://arxiv.org/abs/2611.12763v1) — 所有从事 LLM 对齐工作者的必读之作。论文直接解决了 RLHF 实践中长期困扰的噪声偏好数据问题，提供了一个原则性的 Token 级解决方案，有望提升对齐鲁棒性。

2. [**Learning Rate Decay Can Exponentially Accelerate SGD for Global Optimization of Nonconvex Functions**](http://arxiv.org/abs/2611.12769v1) — 为广泛使用但理论上缺乏解释的实践提供了严格理论支撑。指数加速结论可能影响深度学习训练的学习率调度设计。

3. [**Mitigating Agentic Deception via Evaluation-Side Partially Observable Games**](http://arxiv.org/abs/2611.12835v1) — 随着 LLM 能力增强成为 Agent，理解并防止欺骗行为变得至关重要。对评估漏洞如何导致欺骗的分析为安全 Agent 部署提供了重要洞察。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*