# ArXiv AI 研究日报 2026-10-23

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-23 00:52 UTC

---

<think>Let me translate this research digest into Simplified Chinese, maintaining all the formatting and structure exactly as specified.

The content includes:
1. A main title with date
2. Section headings
3. Tables (with Markdown structure including alignment rows)
4. Lists (bullet points)
5. URL links - keep them as-is
6. Numbers and dates - keep as-is
7. Paper titles - translate but keep the arXiv IDs
8. Bold text - translate the content but keep the ** markers

Let me proceed with the translation:</think>

# ArXiv AI 研究摘要 — 2026年10月23日

## 1. 今日重点

今日 arXiv 提交的研究揭示了三个主要方向。首先，**自我进化的 AI 智能体** 正在获得显著关注，多个框架（GuideEvolve、HGM-Dual）探索了递归自我改进和冻结/闭源 LLM 的提示、工具和工作流优化。其次，**长上下文和推理能力** 仍然是主导方向，LongZero 引入零数据强化学习来处理超长上下文，多篇论文解决自适应计算分配问题。第三，**具身多模态智能体** 正在快速发展，具有新的基准测试（LIBERO-10、Quant-Arena）和连接语言理解与物理世界交互的架构。值得注意的是，理论机器学习正在复兴，因果发现、非参数估计和博弈论不动点算法方面都有突破性成果。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [LongZero: Enhancing Long-Context Reasoning in LLMs from Zero Data](http://arxiv.org/abs/2610.30132v1) | Zhennan Wan, Jianfei Chen | 引入自动化训练数据生成来解决长上下文 RL 的数据稀缺问题，通过创建合成的长、难、可验证的推理样本。使人无需人工标注即可增强 LLM 的长上下文推理能力。 |
| [Circuits of LLM Classifiers](http://arxiv.org/abs/2610.30076v1) | Hadi Khalaf, et al. | 研究如何组合多个 LLM 分类器的预测来提高可靠性，将 LLM 输出视为集成电路中的随机组件，解决提示分类的非确定性本质。 |
| [Did the Problem Actually Get Harder?](http://arxiv.org/abs/2610.30103v1) | Nurul Labib Sayeedi, et al. | 测试 LLM 能否区分 P 和 NP 完全问题变体（如 2-着色 vs 3-着色），揭示结构相似问题对上的推理与记忆能力。 |
| [EPIC: Rethinking Trust Regions for Autoregressive LLM Policies](http://arxiv.org/abs/2610.29999v1) | Chengxi Li, et al. | 为 LLM 的 PPO 风格 RL 提出精确 KL 前缀重要性比率裁剪，解决 token 级别裁剪无法衡量完整序列策略变化的问题，提升推理能力。 |
| [Building Auditable AI Text Detectors with Sparse Autoencoders](http://arxiv.org/abs/2610.30006v1) | Liam Dugan, et al. | 使用稀疏自编码器使 AI 文本检测透明且可审计，在高风险部署中平衡检测准确性与可解释性。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Environment Duels: A Microcosm of LLM Co-Evolution](http://arxiv.org/abs/2610.30116v1) | Shibo Jin, et al. | 引入研究前沿 LLM 如何通过合成训练管道和开放网络数据共享吸收和继承前任与竞争对手输出的框架。 |
| [Asymmetric On-Policy Distillation Learns In-Context Exploration](http://arxiv.org/abs/2610.30105v1) | Sriyash Poddar, et al. | 表明非对称策略蒸馏使智能体能够从零开始学习信息收集行为，结合在线 RL 样本效率和离线模仿学习优势。 |
| [Quant-Arena: Benchmarking LLM Agents for Quantitative Trading Research](http://arxiv.org/abs/2610.30113v1) | Houde Qian, et al. | 提出首个评估 LLM 智能体完整量化研究流程的基准：假设 → 信号实现 → 回测 → 迭代决策。 |
| [Agent Behavior Maps: Locating Agents by What They Would Do](http://arxiv.org.abs/2610.30014v1) | Shota Fujikawa, et al. | 使用参考轨迹的中心化动作对数似然来表示 LLM- harness 组合，无需新的环境 rollout，具有理论误差界。 |
| [SWE-DIVE: Multi-Turn Coding Agent Evaluation](http://arxiv.org/abs/2610.30047v1) | Lorenz Brehme, et al. | 在具有动态用户模拟的多轮现实设置中评估编码智能体，缩小精心设计的基准提示与实际使用之间的差距。 |
| [From Reasoning to Action: LIBERO-10 Robot Manipulation](http://arxiv.org/abs/2610.30051v1) | May Espinola, et al. | 在无任务特定训练的情况下评估前沿 AI 模型的长程机器人操作，评估物理领域中的视觉推理、规划和工具使用。 |
| [GuideEvolve: Self-Evolving Agent Framework](http://arxiv.org/abs/2610.30017v1) | Meihong Jia, et al. | 引入 3T 机制（快思考与慢思考、回溯、终止）配合专家指导，用于自主自我进化的智能体，解决当前递归自我改进的局限性。 |
| [HGM-Dual: Lineage-Aware Guided Agent Harness Optimization](http://arxiv.org/abs/2610.30042v1) | Sudipta Paul, et al. | 将系谱感知扩展到达尔文-哥德尔机器，用于长程规划，改进冻结/闭源 LLM 的提示、工具和工作流优化。 |

### 🔧 方法与框架（新技术、基准、效率）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [PhysiCalWorld: In-Context Physics Calibration for World Models](http://arxiv.org/abs/2610.30125v1) | Yunhao Luo, et al. | 使世界模型能够通过上下文校准从视觉观察中推断物理属性（质量、摩擦、阻尼），改进转换动力学预测。 |
| [Think Harder Where It Matters: Adaptive Recursion for Recommendation](http://arxiv.org/abs/2610.30128v1) | Zhanshuo Cao, et al. | 挑战顺序推荐器中统一计算预算的假设，表明项目对预测的贡献不均匀，实现自适应计算。 |
| [Velocity Ambiguity Profiles for Flow Matching](http://arxiv.org/abs/2610.30107v1) | Yunpeng Mei, et al. | 为流匹配模型引入 VAP 进行时间分辨诊断，区分插值时间内在模糊性与数据局限性。 |
| [AtomicRL: Atomic Reinforcement Learning for Robotic Manipulation](http://arxiv.org/abs/2610.30097v1) | Likui Zhang, et al. | 将 VLA 模型与 RL 相结合用于长程机器人操作，解决单独模仿学习在掌握复杂技能方面的局限性。 |
| [ExGrad: Explicit Clean-Gradient Subtraction in Adversarial Training](http://arxiv.org/abs/2610.30018v1) | Zhiyuan Ye, et al. | 构建干净输入、对抗输入和权重扰动变体来直接表征对抗裕量效应，超越标准代理损失方法。 |
| [SCDM: Scalable Causal Discovery with Meta-Learning](http://arxiv.org/abs/2610.29992v1) | Jingbo Wang, et al. | 通过元学习解决高维非线性系统中的因果发现问题，避免目标-wise 拟合和重复条件测试。 |
| [CORD: Conflict-Aware Optimization for RL and Distillation](http://arxiv.org/abs/2610.29965v1) | Wenhao Yu, et al. | 管理 RL 与自蒸馏联合训练中任务奖励与教师指导之间梯度冲突的通用框架，超越简单混合系数。 |
| [TIDE: Tree-Induced Fine-Grained Diagnostic Evaluation](http://arxiv.org_abs/2610.29985v1) | Jiayi Chen, et al. | 超越聚合 LLM 基准测试，提供树结构诊断评估，揭示具体能力优势与劣势。 |
| [Mitigating Model Collapse through Dreaming Learning](http://arxiv.org/abs/2610.30009v1) | Matteo Benati, et al. | 通过学习转换算子的特征值谱在马尔可夫设置下光谱研究模型崩溃，直接观察退化过程。 |

### 📊 应用（领域特定、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [CulturalRiddles: A Multicultural Benchmark](http://arxiv.org/abs/2610.29968v1) | My Chiffon Nguyen, et al. | 通过跨不同语言和文化的谜语理解评估 LLM 的文化理解，解决英语中心基准测试的局限性。 |
| [Orbitol: Crystal Generation on Wyckoff Orbits](http://arxiv.org/abs/2610.30086v1) | Ivan Žugec, et al. | 通过基于 Wyckoff 轨道的建模实现晶体生成中的空间群直接控制，对压电性等对称性允许属性至关重要。 |
| [Code Comprehensor: Hierarchical Documentation](http://arxiv.org/abs/2610.30016v1) | Sujoy Roychowdhury, et al. | 为大型代码仓库提供分层文档和跨模态检索，解决大规模入职和维护挑战。 |
| [HiddenLens: Detecting Hidden Assumptions in Requirements](http://arxiv.org.abs/2610.29996v1) | Tanu Singh, et al. | 多层 LLM 框架，用于在实现成本上升之前发现自然语言需求中被忽略的假设。 |
| [Remembering Through Change: Hypergraph Memory for Agents](http://arxiv.org/abs/2610.29995v1) | Jielong Tang, et al. | 在跨会话的实体演变中保留细粒度视觉证据，用于长期多模态智能体记忆。 |
| [FaultGene: LLM-Assisted Fault-Augmented Test Generation](http://arxiv.org/abs/2610.29969v1) | Chaoran Yuan, et al. | 使用 LLM 为自动驾驶硬件在环验证生成故障增强测试，弥合仿真与物理测试之间的差距。 |
| [SP-HLM: Sparse-Pose-Driven Motion Generation](http://arxiv.org/abs/2610.30044v1) | Zhaohui Yang, et al. | 引入稀疏姿态表示作为高层任务策略与全身控制之间的接口，用于人形机器人运动操作。 |

---

## 3. 研究趋势信号

一个清晰的**自我进化范式**正在智能体研究中浮现，多篇论文（GuideEvolve、HGM-DUAL）推进了递归自我改进框架，优化冻结 LLM 的提示、工具和工作流。**长上下文推理**正从数据生成（LongZero）和评估（LIBERO-10）两个角度被攻克，反映了向 100K+ token 上下文的推进。**基准测试热潮**持续涌现领域特定的智能体评估——金融领域的 Quant-Arena、机器人领域的 LIBERO-10、多元文化理解领域的 CulturalRiddles——表明从通用能力测试向专业任务指标的成熟。在方法层面，**自适应计算**（项目级分配、速度模糊性分析）和**理论机器学习突破**（准多项式 ℓ∞ 收缩、极小极大 NPMLE 速率）表明对效率和数学基础的日益重视。

---

## 4. 值得深入阅读

1. **[LongZero](http://arxiv.org/abs/2610.30132v1)** — 这篇论文解决了长上下文 RL 的根本瓶颈：缺乏合适的训练数据。其自动化数据生成方法可能使长上下文训练民主化，超越拥有大规模标注预算的组织。

2. **[SCDM: Scalable Causal Discovery](http://arxiv.org.abs/2610.29992v1)** — 高维非线性系统中的因果发现是一个基础性问题。元学习方法提供了有原则、可扩展的解决方案，在广泛科学领域具有广泛适用性。

3. **[Agent Behavior Maps](http://arxiv.org/abs/2610.30014v1)** — 无需环境执行即可表征和比较智能体行为的能力，基于理论误差界进行论证，代表了智能体分析和选择方面的重大进步。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*