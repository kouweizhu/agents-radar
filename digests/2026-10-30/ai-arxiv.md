# ArXiv AI 研究日报 2026-10-30

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 38 篇论文 | 生成时间: 2026-10-30 02:07 UTC

---

<think>The user wants me to translate this entire ArXiv AI Research Digest into Chinese. I need to:

1. Translate all headings
2. Translate all body text
3. Keep all markdown structure (tables, lists, headings, horizontal rules, etc.)
4. Keep URLs, arxiv IDs, numbers, and technical terms as-is
5. Use natural technical Chinese - not literal word-for-word

Let me go through this carefully:

## 1. Today's Highlights

## 2. Key Papers

### 🧠 Large Language Models

### 🤖 Agents & Reasoning

### 🔧 Methods & Frameworks

### 📊 Applications

## 3. Research Trend Signal

## 4. Worth Deep Reading

Then the tables with paper info.

Let me translate this properly in technical Chinese register:</think>

# ArXiv AI 研究文摘 — 2026年10月30日

## 1. 今日要闻

今日 ArXiv 提交的研究揭示了几个重要的方向。首先，**多智能体系统**受到广泛关注，新研究揭示了临床 LLM 团队中的公平性漏洞，以及针对智能体记忆归因的新型攻击向量。其次，**强化学习**持续取得进展，包括在混淆和后果驱动策略学习下的新型离线 RL 方法，解决动态一致性问题。第三，**LLM 效率**仍是关键主题，无损 KV 缓存压缩的创新使得个人设备推理成为可能。最后，**基准测试开发**在各个领域蓬勃发展——机器人、代码编辑、逆合成和金融建议都有新的评估框架。

---

## 2. 重点论文

### 🧠 大语言模型

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Keepace.ai: A Technical Report on a Large Language Model for Sports and Health](http://arxiv.org/abs/2610.38249v1) | Keepace.ai Team, et al. | 推出基于 Qwen3.5-27B 构建的领域专用 LLM，用于体育健康指导，解决该领域缺乏精选训练语料和评估基准的问题。 |
| [GAAC: Lossless KV Compression for Bandwidth-Efficient LLM Inference on Personal Devices](http://arxiv.org/abs/2610.38210v1) | Yipin Guo, et al. | 提出 Group-Adaptive Additive Codec，一种无损 KV 缓存压缩方法，针对内存受限的个人设备长上下文推理场景。 |
| [Component Translation and Judge-Labelled Refusal: A Multilingual Safety Evaluation](http://arxiv.org/abs/2610.38181v1) | Yongxi Zhou, et al. | 引入配对反转评估方法，通过逐组件翻译比较来评估 LLM 的多语言安全性和拒绝行为。 |
| [Rubricon: Automated Rubric Generation and Refinement for LLM Evaluation and Training](http://arxiv.org_abs/2610.38220v1) | Ulyana Tkachenko, et al. | 提出无需人类偏好标签生成判别性评分标准的流程，可在无标准答案的任务中实现奖励分配。 |

### 🤖 智能体与推理

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Precedent or Intent? What Coding Agents Follow When Evolving Existing Code](http://arxiv.org/abs/2610.38244v1) | Haichao Zhu, et al. | 研究编码智能体在平衡过往实现决策与新任务指令时的行为，为智能体化软件演进提出根本性问题。 |
| [Is it my preference? Role Grounding Attack against Agent's Memory via Social Interaction](http://arxiv.org/abs/2610.38209v1) | Haoran Bu, et al. | 发现角色归因错误攻击，恶意行为者可通过社交平台利用智能体记忆系统改变偏好归因。 |
| [Disparity Laundering: Consensus Without Fairness in Clinical Multi-Agent Systems](http://arxiv.org/abs/2610.38215v1) | Xiaoyang Wang, et al. | 证明临床 LLM 多智能体团队的 deliberative 过程不会平均化偏见，揭示各模型家族和聚合拓扑上的系统性公平性失败。 |
| [Skeleton Coding: Program Structure as a Specification for Agents](http://arxiv.org_abs/2610.38214v1) | Aditya Golatkar, et al. | 主张使用程序结构作为行为规范，减少开发者必须为智能体提供的显式规范数量。 |
| [DecompGym: Benchmarking LLM Agents on Designing Decomposition Algorithms](http://arxiv.org_abs/2610.38175v1) | Sikai Cheng, et al. | 引入 LLM 智能体设计 Benders 分解和列生成算法的基准，针对硬优化自动化问题。 |

### 🔧 方法与框架

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [ParaTTT: Parallelizing Test-Time Training Layers with Deep Memories](http://arxiv.org/abs/2610.38255v1) | Noel Loo, et al. | 并行化使用非线性神经网络记忆的 TTT 层，在保持可扩展性的同时提升相比线性快速权重的表达能力。 |
| [Nearly Minimax Optimal Regret for Adversarial Linear Bandits with Strong Corruptions](http://arxiv.org/abs/2610.38243v1) | Qiwei Di, et al. | 在强奖励损坏的线性 bandit 中实现近 minimax 最优 regret，解决重要性加权失效的设定。 |
| [Variational Consequence-Driven Offline Reinforcement Learning](http://arxiv.org/abs/2610.38238v1) | Wen Jiang, et al. | 通过强制底层结构解决离线 RL 中的动态一致性问题，超越仅在动作分布上施加散度约束的方法。 |
| [Transportable Offline Reinforcement Learning in Presence of Unmeasured Confounding](http://arxiv.org/abs/2610.38253v1) | Junyi Liao, et al. | 研究分布偏移和未测量混淆下的离线 RL，提出在新领域部署的可迁移性方法。 |
| [Two Birds with One Stone: Skill-Augmented Generation via Unified Retrieval and Utilization](http://arxiv.org_abs/2610.38204v1) | Zihan Luo, et al. | 在单一模型中统一技能检索和利用，通过可重用的外部知识增强 LLM 处理复杂任务的能力。 |
| [The Endgame of FSDP Communication: Layout-Aware Collectives](http://arxiv.org/abs/2610.38228v1) | Zejian Wang, et al. | 通过布局感知的逐参数缓冲区和展平 rank-major 缓冲区之间的转换优化 FSDP2 集合操作，针对拷贝引擎、RDMA 和 NVSwitch。 |
| [In-Context Learning for Multi-Fidelity Multiscale Model Closure](http://arxiv.org/abs/2610.38179v1) | Xinyuan Li, et al. | 应用上下文学习结合粗尺度 PDE 模型和有限细尺度数据，实现高效准确的 PDE 求解。 |
| [B2P-Corr: Batch-to-Population Gradient Estimators for Non-Decomposable Correlation Losses](http://arxiv.org_abs/2610.38171v1) | Jingquan Yan, et al. | 为 PCC 和 CCC 等不可分解相关性度量开发梯度估计器，使数据集级目标的随机优化成为可能。 |

### 📊 应用

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [A Tutorial on Generative Models for Music Audio](http://arxiv.org/abs/2610.38252v1) | Mateusz Modrzejewski, et al. | 提供全面的专著，解释音乐音频生成系统背后的方法，面向该领域的新读者。 |
| [MEV: A Multi-Event Video Dataset for Long-Take Generation](http://arxiv.org/abs/2610.38241v1) | Peiyuan Zhu, et al. | 引入多事件长镜头视频生成数据集，解决当前文生视频模型的时间一致性挑战。 |
| [Verification-Guided Retrosynthesis: Reaction Feedback and Evidence Timing](http://arxiv.org_abs/2610.38245v1) | Hongxuan Shi, et al. | 在逆合成搜索中集成可行性验证，防止因不可行反应导致的无效路线。 |
| [CuraEval: Evaluating Demonstration Curation on Mixed-Skill Robot Data](http://arxiv.org_abs/2610.38221v1) | Jiuyi Xu, et al. | 评估从不同技能水平操作员中选择机器人模仿学习演示的方法。 |
| [Embodied at Sea: Imitation Learning for Multi-Task Underwater Manipulation](http://arxiv.org/abs/2610.38199v1) | Greta Perez-Haiek, et al. | 解决海洋视觉扭曲和动态水流造成的域偏移问题，用于行为克隆。 |
| [RainCheck: Harnessing Historical Weather Data with ML for Rainfall Forecasting](http://arxiv.org_abs/2610.38211v1) | Shahran Rahman Alve, et al. | 批评降雨预报的标准随机训练测试划分，提出正确利用时间依赖的方法。 |
| [The Indian Financial Automated Advice Bias (IFAAB) Dataset](http://arxiv.org/abs/2610.38239v1) | Kriti Mahajan | 引入包含 31,734 个 GPT-4o 生成的金融建议样本的反事实审计数据集，用于检测印度背景下的社会经济差异。 |
| [Scaling Lean Theorem Proving for Real-World Code Verification](http://arxiv.org_abs/2610.38174v1) | Debargha Ganguly, et al. | 推出 EasyProver，使用隔离上下文的递归智能体实现 669/672 道 PutnamBench 题目和全部六道 IMO 题目。 |

---

## 3. 研究趋势信号

今日提交的研究指向几个新兴方向。**多智能体公平性与安全**日益受到关注——近期工作证明 LLM 团队 deliberative 过程会放大而非减轻偏见，智能体记忆系统的新型攻击面正在被识别。**个人设备部署的 LLM 效率**正在加速，无损 KV 缓存压缩和布局感知的分布式训练优化持续推进。**基准测试激增**覆盖专业领域（金融建议、机器人、化学、定理证明），反映领域成熟度。**分布偏移下的离线 RL** 正在获得关注，特别是解决未测量混淆和动态一致性的方法。最后，**技能增强和程序引导的智能体**代表向结构化规范和外部知识集成的转变，而非端到端行为学习。

---

## 4. 深度阅读推荐

1. **[Disparity Laundering: Consensus Without Fairness in Clinical Multi-Agent Systems](http://arxiv.org/abs/2610.38215v1)** — 这篇论文从根本上挑战了多智能体 LLM deliberative 过程会平均化错误的假设。通过对五个模型家族和四种聚合拓扑在真实临床病例上的全因子研究，提供了偏见持续存在甚至放大的实证证据。对任何部署临床 AI 系统的人员都是必读之作。

2. **[ParaTTT: Parallelizing Test-Time Training Layers with Deep Memories](http://arxiv.org_abs/2610.38255v1)** — 测试时训练是在线适应循环架构的一个有前景的范式。本工作解决了非线性记忆层的关键并行化问题，弥补了与 Mamba-2 等线性替代方案之间的表达能力差距。对序列建模和高效适应相关工作具有重要意义。

3. **[EasyProver: Scaling Lean Theorem Proving](http://arxiv.org/abs/2610.38174v1)** — 在无需额外训练的情况下实现 PutnamBench 和 IMO 问题的接近完美表现，是 LLM 形式化验证的突破。递归智能体和异步搜索中的架构创新值得任何从事数学推理或代码验证工作的人深入研究。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*