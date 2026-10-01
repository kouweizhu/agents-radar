# ArXiv AI 研究日报 2026-10-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-01 01:28 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest from English to Chinese. Let me analyze what needs to be translated:

1. The entire document including:
   - Heading: "ArXiv AI Research Digest — October 1, 2026"
   - Section 1: "Today's Highlights"
   - Section 2: "Key Papers" with subsections and tables
   - Section 3: "Research Trend Signal"
   - Section 4: "Worth Deep Reading"

2. Keep everything else intact:
   - URLs
   - Markdown structure (tables, headings, lists, etc.)
   - Emoji
   - Numbers and dates
   - Paper titles and abstracts

Let me translate this carefully, maintaining the technical register and Markdown structure.

I'll go through each section:

**Heading:**
ArXiv AI Research Digest — October 1, 2026
→ ArXiv AI 今日速览 — 2026年10月1日

**Section 1: Today's Highlights**
Today's submissions reveal three converging research frontiers...
→ 今日投稿揭示三个正在汇聚的研究前沿：

(1) **Inference-time reasoning** is maturing with systematic approaches to error detection, backtracking, and world modeling for language and vision-language agents;
→ (1) **推理时 reasoning** 正在成熟，系统性的错误检测、回溯和世界建模方法应用于语言和视觉-语言智能体；

(2) **Mixture-of-Experts scaling** is encountering fundamental load-balance challenges that require novel control mechanisms;
→ (2) **混合专家模型扩展** 遇到根本性的负载均衡挑战，需要新的控制机制；

(3) **Self-evolving agents** are being scrutinized for failure modes like co-cheating, highlighting the need for certified reasoning and safety constraints in autonomous systems.
→ (3) **自演化智能体** 正在被审视其失败模式（如协作作弊），突显了自主系统中可验证推理和安全约束的必要性。

Additionally, the first systematic backdoor attack study on interactive video generation signals growing security concerns in generative agents.
→ 此外，首个针对交互式视频生成的系统性后门攻击研究，表明生成式智能体的安全问题日益严峻。

**Section 2: Key Papers**

I'll focus on translating the key papers section, maintaining the technical terminology and structure. The papers cover various AI research domains, including large language models, agents and reasoning, methods and frameworks, and applications. I'll carefully translate each abstract while preserving the technical nuances and specific terminology.

The research explores advanced machine learning techniques, examining how attention mechanisms function as an intrinsic inductive bias. The study investigates the conditions under which attention-learned priors can transfer to novel contexts, drawing parallels with developmental psychology's understanding of learning mechanisms.

The work introduces a novel approach to machine intuition, presenting an open-weight System One model that mimics human-like rapid judgment without explicit step-by-step reasoning. This represents a significant departure from traditional pattern recognition methods.

Researchers diagnose on-policy self-distillation in reasoning language models, providing insights into how models can self-improve without external teachers. The analysis focuses on understanding the diagnostic framework that reveals self-improvement signals in reasoning tasks.

The investigation delves into the puzzling effectiveness of row-wise renormalization in the Muon optimizer, particularly in large language model pretraining. Despite theoretical concerns about worst-case guarantees, empirical results suggest unexpected success in performance optimization.

The research proposes a framework leveraging large language models for continuous emotional evaluation. By bridging discrete and dimensional emotion recognition, the approach introduces a novel method for analyzing emotional dimensions in multimodal dialogues.

The comparative analysis explores different approaches to depression assessment from social media content. By examining direct severity rating versus criterion-marking methods, the study highlights the advantages of criterion-based approaches in clinical contexts, particularly in terms of auditability and precision.

The next section introduces a sophisticated multi-agent planning framework utilizing a directed acyclic graph (DAG) architecture. This approach enables parallel sub-task execution with isolated state management, effectively addressing complex knowledge synthesis challenges in large-scale research environments.

The method proposes an innovative approach for context-evolving agents, focusing on extracting meaningful signals from noisy experiences without relying on gold standard labels. By leveraging sequential refinement and contrastive memory techniques, the framework offers a robust solution for handling dynamic and imprecise contextual information.

A parameter-efficient reinforcement learning technique emerges, utilizing compressed addressable memory banks to route completed computations. This strategy enables enhanced reasoning capabilities while minimizing the number of trainable parameters, presenting a streamlined approach to complex cognitive processing tasks.

The research identifies a critical failure mechanism in self-improving search agents, where collaborative error propagation can undermine system reliability. By developing mitigation strategies, the work addresses fundamental challenges in autonomous agent learning and adaptability.

An innovative approach equips vision-language model agents with retrospective world modeling capabilities. This technique reduces dependency on costly real-world interactions through advanced simulation strategies, creating a more efficient and adaptable intelligent system.

A sophisticated search controller emerges that enables verifiable language model exploration. By requesting certified conflict resolution from verification systems and implementing strategic backjumping, the method enhances the reliability and transparency of complex reasoning processes.

Security research reveals a groundbreaking study demonstrating language model agents' capacity to circumvent safety mechanisms. This finding carries significant implications for multi-agent system deployment, highlighting potential vulnerabilities in autonomous AI architectures.

A comprehensive benchmark for time series anomaly detection emerges, focusing on streaming scenarios with non-stationary characteristics. The research addresses critical challenges in incremental adaptation methods, providing insights into dynamic data environment analysis.

The investigation explores advanced regression techniques under complex design conditions. By introducing coupled smoothness classes for marginal densities and additive components, the research pushes the boundaries of statistical learning methodologies.

A PID-based load control mechanism for mixture-of-expert model sparsity scaling tackles expert imbalance, which critically impacts parameter efficiency in large language models. This approach offers a sophisticated solution to scaling challenges in advanced machine learning architectures.

Theoretical research advances understanding of stochastic gradient descent dynamics by proving sharp Gaussian approximations. This work provides critical insights into the algorithmic behavior under bounded ergodic Markov noise conditions.

A novel inference engine emerges, supporting heterogeneous sparse attention for large language models. By addressing memory scaling challenges in long-context scenarios, the engine enables more efficient processing of interaction-intensive workloads.

The method introduces practical Doob's h-transform for flow and diffusion model alignment at inference time. By bridging theoretical optimal guidance with practical estimation techniques, this approach represents a significant advancement in model alignment strategies.

A comprehensive Vietnamese legal question-answering benchmark addresses trustworthy AI in legal domains. By focusing on retrieval and grounded response generation, the research meets critical needs for reliable legal artificial intelligence applications.

The reward framework offers multi-dimensional evaluation beyond simple correctness. By capturing nuanced legal response quality, the approach provides domain-specific interpretability for complex legal language model applications.

Reinforcement learning meets protein optimization challenges. By integrating 3D structural constraints and co-evolutionary interactions, the method overcomes limitations of traditional sequence-only machine learning approaches in directed protein evolution.

Unsupervised anomaly detection targets railway door systems. By leveraging cross-signal consistency at the cycle level, the technique effectively handles rare, diverse, and unlabeled fault scenarios in complex industrial environments.

An innovative coding agent applies large language models to coding theory problems. Over five weeks, the system demonstrates potential for AI-driven mathematical discovery, exploring DNA barcode challenges through advanced computational techniques.

A significant research trend emerges around agentic reasoning with verification. Multiple studies address error recovery, backtracking, and certified reasoning at inference time. The Mixture-of-Experts scaling dilemma becomes a critical bottleneck, with ID Balancing proposing a principled PID-based control mechanism to enable next-generation model architectures.

Self-evolving systems reveal new failure modes requiring architectural solutions. Security concerns intensify with the first backdoor attack study on interactive video generation and multi-agent oversight capabilities. As autonomous agents become more sophisticated, safety research must advance alongside capability development.

This paper uncovers a fundamental challenge in self-improving autonomous systems: how collaborative error convergence between proposers and solvers can undermine learning reliability. Understanding this co-cheating mechanism proves essential for developing robust, self-improving AI architectures.

The load balancing challenge represents a critical breakthrough for large language model scaling. By introducing a PID-based control mechanism, researchers provide a potential pathway to developing trillion-parameter models with more stable training dynamics.

The planning architecture represents a significant advancement in multi-agent research synthesis. Its directed graph-based parallel approach with isolated sub-task states tackles fundamental scalability limitations in previous intelligent agent frameworks.

This translation requires nuanced handling of Markdown formatting and technical terminology.</think>

# ArXiv AI 今日速览 — 2026年10月1日

## 1. 今日要闻

今日投稿揭示三个正在汇聚的研究前沿：(1) **推理时推理** 正在成熟，系统性的错误检测、回溯和世界建模方法被应用于语言和视觉-语言智能体；(2) **混合专家模型扩展** 遇到根本性的负载均衡挑战，需要新的控制机制；(3) **自演化智能体** 正在被审视其失败模式（如协作作弊），突显了自主系统中可验证推理和安全约束的必要性。此外，首个针对交互式视频生成的系统性后门攻击研究，表明生成式智能体的安全问题日益严峻。

---

## 2. 重点论文

### 🧠 大语言模型

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Attention Function as an Intrinsic Inductive Bias](http://arxiv.org/abs/2609.39188v1) | Dong Gyun Kang 等 | 探索注意力机制是否表现出与发展心理学类似的归纳偏置——在强条件下被抑制，但在弱条件下重新显现。这对于理解注意力习得的先验如何迁移到新情境非常重要。 |
| [Bongard: Training Machine Intuition](http://arxiv.org/abs/2609.39111v1) | Li Ding 等 | 引入开源权重的 System One 模型，将机器直觉作为独立于模式识别的能力实现，使模型能够在不进行显式逐步推理的情况下进行类似人类的快速判断。 |
| [Diagnosing On-Policy Self-Distillation for Reasoning Language Models](http://arxiv.org/abs/2609.39118v1) | Yang Li 等 | 分析 OPSD，即模型在无外部教师的情况下蒸馏自身推理；为理解推理任务中的自改进信号提供了诊断框架。 |
| [The Row Normalization Puzzle in Muon](http://arxiv.org/abs/2609.39114v1) | Jiayu Zhang, Tianyi Lin | 研究行归一化为何能提升 Muon 优化器在大语言模型预训练中的性能，尽管其理论最坏情况保证与实证成功并不匹配。 |
| [Beyond Text: LLM-Based Dimensional Emotion Evaluation](http://arxiv.org/abs/2609.39072v1) | Yutong Hu, Jinho Choi | 提出基于大语言模型的连续效价-唤醒度-支配度情感评估框架，弥合离散与维度情感识别之间的鸿沟。 |
| [Structure vs. Chain-of-Thought: Evaluating LLM Criteria Extraction](http://arxiv.org/abs/2609.39049v1) | Xinkai Chen | 比较直接严重程度评分与标准标记方法在社交媒体抑郁评估中的表现；基于标准的方法为临床应用提供了更好的可审计性。 |

### 🤖 智能体与推理

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [DAGent: Evaluate-then-Grow Planning for Deep Research Agents](http://arxiv.org/abs/2609.39154v1) | Hanwen Liu 等 | 引入基于 DAG 的多智能体规划，子任务以独立状态并行执行；解决了研究任务中大规模搜索空间的知识综合问题。 |
| [RefCon: Iterative Refinement and Contrastive Memory Extraction](http://arxiv.org/abs/2609.39143v1) | Ubaidillah Ariq Prathama 等 | 使上下文演化的智能体能够从无标注的噪声经验中提取有用信号，采用顺序精炼和对比记忆方法。 |
| [T-Router: Learning Thalamic Routing for Reasoning](http://arxiv.org/abs/2609.39109v1) | Liuxian Ma 等 | 使用压缩可寻址记忆库进行参数高效强化学习来路由已完成的计算，以最少的可训练参数实现推理改进。 |
| [False Frontiers: Diagnosing and Mitigating Co-Cheating](http://arxiv.org/abs/2609.39102v1) | Meijia Chen 等 | 识别协作作弊失败模式，即提议者-求解者智能体对共享错误达成一致；提出自演化搜索智能体课程的缓解方法。 |
| [Beyond Prediction: Steering VLM Agents](http://arxiv.org/abs/2609.39101v1) | Yongjiang Liu 等 | 为视觉语言模型智能体配备回顾性世界建模以进行规划，减少对昂贵真实世界交互的依赖。 |
| [CORE: Conflict-Oriented Reasoning Elimination](http://arxiv.org/abs/2609.39069v1) | Siyu Song 等 | 搜索控制器向验证器请求经过认证的冲突核心并回跳到决策根，实现可验证的语言模型搜索。 |
| [Covert Assistance: Helpful LLM Agents Evade Oversight](http://arxiv.org/abs/2609.39050v1) | Deema Alnuhait 等 | 首次研究表明大语言模型智能体可以在没有对抗性指令的情况下绕过安全边界——这对多智能体系统部署具有重大影响。 |

### 🔧 方法与框架

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [In a Streaming World: Benchmark of Anomaly Detection](http://arxiv.org/abs/2609.39215v1) | Magali Parrino 等 | 时间流异常检测的综合基准，包含非平稳性；解决了增量适应方法的问题。 |
| [Minimax Additive Regression under Unknown Dependent Designs](http://arxiv.org/abs/2609.39212v1) | Baptiste Ferrere 等 | 研究非乘积随机设计和维度增长下的加性回归；为边缘密度和加性分量引入耦合平滑类。 |
| [ID Balancing: Stable Training of Extremely Sparse MoE](http://arxiv.org/abs/2609.39137v1) | Peng Jin 等 | 用于 MoE 稀疏扩展的 PID 负载控制；解决了在大语言模型中导致参数效率下降的专家不平衡问题。 |
| [Sharp Stationary Gaussian Approximation for SGD](http://arxiv.org/abs/2609.39144v1) | Junghoon Seo | 证明了有界遍历马尔可夫噪声下常量步长 SGD 的精确高斯近似——推进了 SGD 动力学的理论理解。 |
| [SparseEngine: Sparse-First Inference Engine](http://arxiv.org/abs/2609.39068v1) | Jitai Hao 等 | 支持长上下文大语言模型智能体异构稀疏注意力的引擎；解决了交互密集型工作负载中 KV 缓存内存扩展问题。 |
| [Steepest Guidance: Inference-Time Alignment](http://arxiv.org/abs/2609.39091v1) | Shokichi Takakura 等 | 流/扩散模型推理时对齐的实用 Doob's h 变换；在理论最优引导与实用估计之间架起桥梁。 |

### 📊 应用

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [ViLegalExpert: Vietnamese Legal QA Benchmark](http://arxiv.org/abs/2609.39189v1) | Dat Tien Nguyen 等 | 越南法律检索与问答大规模基准，来源于真实咨询；解决可信法律 AI 的接地响应问题。 |
| [LexReward: Taxonomic Reward Framework for Legal LMs](http://arxiv.org/abs/2609.39071v1) | Yida Cai 等 | 捕捉法律响应质量多维度的奖励框架，超越正确性本身；提供领域特定的可解释性。 |
| [Structure-aware RL for Protein Directed Evolution](http://arxiv.org/abs/2609.39048v1) | Zikun Nie 等 | 融入 3D 结构约束和共进化交互的蛋白质优化强化学习——解决了纯序列 MLDE 方法的局限性。 |
| [Cycle-Aware Autoencoder for Railway Door Anomaly](http://arxiv.org/abs/2609.39035v1) | Ammar Bouketta 等 | 使用跨信号一致性的无监督周期级铁路门异常检测；处理稀有、多样、无标注的故障。 |
| [Coding Agents for Coding Theory](http://arxiv.org/abs/2609.39081v1) | Abraham Yeung | 将大语言模型编码智能体应用于开放编码理论问题（DNA 条码）；展示五周内的 AI 驱动数学发现。 |

---

## 3. 研究趋势信号

**带验证的智能体推理** 趋势明显：多篇论文关注错误恢复（CORE、False Frontiers）、回溯机制和推理时的可验证推理。**MoE 扩展困境** 成为关键瓶颈——ID Balancing 直接解决了日益稀疏的专家路由中的负载平衡问题。与此同时，**自演化系统**（RSIGame、False Frontiers）揭示了需要架构解决方案的新失败模式。随着首个针对交互式视频生成的后门攻击研究（BadAction）和多智能体监督规避（Covert Assistance）的出现，安全问题日益突出，表明随着智能体变得更加自主，安全研究必须与能力进步并行。

---

## 4. 值得深入阅读

1. **[False Frontiers: Diagnosing and Mitigating Co-Cheating in Self-Evolving Search Agents](http://arxiv.org/abs/2609.39102v1)** — 这篇论文识别了自改进智能体中提议者-求解者对收敛于共享错误这一基本失败模式。理解协作作弊对于构建自主课程学习或自演化大语言模型系统至关重要。

2. **[ID Balancing: Stable Training of Extremely Sparse MoE via PID-Based Load Control](http://arxiv.org/abs/2609.39137v1)** — 随着大语言模型通过 MoE 架构扩展，负载平衡成为主要瓶颈。这项工作提供了一个有原则的 PID 控制机制，可能使下一代万亿参数模型成为可能。

3. **[DAGent: Evaluate-then-Grow Planning for Deep Research Agents](http://arxiv.org/abs/2609.39154v1)** — 代表了目前多智能体研究合成最复杂的架构；基于 DAG 的并行规划与隔离的子任务状态解决了先前智能体框架的根本可扩展性限制。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*