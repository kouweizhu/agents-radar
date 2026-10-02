# ArXiv AI 研究日报 2026-10-02

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-02 01:47 UTC

---

<think>I need to translate this ArXiv AI Research Digest into Chinese, maintaining the exact structure and formatting. Let me translate carefully while keeping technical terms natural and readable for a Chinese developer audience.

Let me go through the content:

1. Title: ArXiv AI Research Digest — October 2, 2026
- 日期是2026年10月2日

2. Today's Highlights section - translate naturally

3. Key Papers tables - translate summary columns, keep titles/authors/URLs as-is

4. Research Trend Signal - translate analysis

5. Worth Deep Reading - translate recommendations

6. Rules section - keep as-is since it's instructions

Let me translate this carefully:</think>

# ArXiv AI 研究摘要 — 2026年10月2日

## 今日重点

今日提交的研究揭示了几个趋同的研究方向。首先，**推理时的大语言模型多样化方法**正在兴起，Gacha Decoding 表明模型本身的能力可以用来引出多样化的生成结果。其次，**智能体安全与溯源**成为关键关注点——关于多轮安全（TRACE）、工具使用智能体验证（PACE）和失败归因（DeFA）的论文共同应对了自主大语言模型系统的风险。第三，**科学领域的生成式建模**持续扩展，分子动力学、晶体结构预测和蛋白质设计的新方法显示出强劲进展。最后，关于**模型崩溃与数据治理**（如溯源追踪、合成数据审计）的研究日益增多，表明对 AI 训练管道长期可持续性的关注不断增加。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Gacha Decoding: Eliciting Diverse Generations Through Instruction Following](http://arxiv.org/abs/2610.01382v1) | Scott Geng, Yufei Zhang, Joseph Lee 等 | 提出一种推理时的方法，通过模型能力来引出多样化的 LLM 生成结果。解决了创意写作、规划和科学设计任务中标准解码的"最佳答案"局限。 |
| [Generation Provenance Before Behavior Attribution: Auditing Synthetic Speech Research Objects](http://arxiv.org/abs/2610.01378v1) | Sadi Chang, Peiying Zhu | 提出生成溯源框架，将源规范绑定到合成训练数据。对于在合成数据管道中将模型行为归因于特定训练项至关重要。 |
| [Does AI-Generated Scientific Text Follow Human Argumentation Patterns?](http://arxiv.org/abs/2610.01353v1) | Abdelrahman Sadallah, Narjes Sheikh Asadi, Lonneke van der Plas | 使用 CARS 分析比较 AI 生成的研究文章引言与人类写作。发现论证结构存在显著差异，对科学写作辅助有启示意义。 |
| [PACE: Provenance-Aware Capability Enforcement for Tool-Using LLM Agents](http://arxiv.org/abs/2610.01349v1) | Fengpeng Li, Qizhou Wang, Yuke Hu 等 | 通过在准入前审查工件来应对工具使用智能体的投毒风险。表明安全版本和泄露版本可能产生相同输出，需要溯源追踪。 |
| [Know When to Hold 'em: Correct-Token Retention in Uniform-State Diffusion Language Models](http://arxiv.org/abs/2610.01275v1) | Mojtaba Nafez, James Henderson | 指出均匀状态扩散模型缺乏在自校正期间保留正确标记的机制。提出了在修订期间区分和保留正确标记的方法。 |
| [Evaluating the Robustness of Japanese LLMs to IME-Related and Typographical Errors](http://arxiv.org/abs/2610.01241v1) | Ryota Mibayashi, Hiroaki Ohshima | 首次全面研究 LLM 对日语 IME 转换错误和拼写错误的鲁棒性。揭示了在处理书写系统转换时存在显著脆弱性。 |
| [Mixture-Trained Merging for Unified Multi-Objective Models](http://arxiv.org/abs/2610.01238v1) | SeongHyeon Kim, Chaeyun Jang, Seungyoo Lee 等 | 解决在多目标上顺序训练的统一语言模型中能力纠缠问题。提出混合训练合并来保留异构能力。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [LLM-Driven Multi-Agent Control for Skill-Based Smart Manufacturing](http://arxiv.org/abs/2610.01364v1) | Kay Köhle, Darko Anicic, Thomas A. Runkler 等 | 部署 LLM 智能体用于柔性制造中的离线生产序列生成和在线自适应控制。应对高定制化工厂的频繁重编程问题。 |
| [Verify Claims, Not Scores: Evidence-Based Verification of Modular Agents](http://arxiv.org/abs/2610.01348v1) | Ali Atiah Alzahrani | 认为聚合任务分数无法诊断智能体哪个组件失去价值。证明对智能体组件进行基于证据的验证对于有意义的改进评估是必要的。 |
| [TRACE: Trajectory Return Attribution and Contrastive Erasure for Multi-Turn Safety](http://arxiv.org/abs/2610.01323v1) | Fengpeng Li, Kemou Li, Qizhou Wang 等 | 解决有害目标跨轮次传播的安全失败问题。通过轨迹级分析为多轮安全提供充分条件。 |
| [PROMO: Preference-conditioned Multi-Objective Reinforcement Learning for Quadrupedal Robots](http://arxiv.org/abs/2610.01260v1) | Amr Mousa, Rifny Rachman, Neil Karavis 等 | 实现四足机器人推理时的偏好条件化，平衡跟踪、稳定性和能效。克服了传统 RL 固定奖励的局限。 |
| [Revision-Aware Independent Agent Graphs for Dynamic Reasoning](http://arxiv.org/abs/2610.01249v1) | Yan Luo, Selim-Antoine Lali, Jeremy Moebel 等 | 引入动态任务路由，其中事件流修订任务绑定。测试智能体传播更新和保留未受影响工作的能力。 |
| [Right Answers, Wrong States: Hidden Information Failures in Multi-Agent Collaboration](http://arxiv.org/abs/2610.01244v1) | Herun Wan, Jiaying Wu, Minnan Luo 等 | 识别"查询外失败"，即多智能体协作产生正确决策但留下被破坏的信息状态。一种被准确率指标忽略的独特失败模式。 |

### 🔧 方法与框架（新技术、基准、效率改进）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [SupraTITO: Transferable Generative Molecular Dynamics for Supramolecular Systems](http://arxiv.org/abs/2610.01381v1) | Weilong Chen, Nuno Costa, Julija Zavadlav | 使用生成式模型为超分子组装生成分子动力学。解决了肽自组装中缓慢的集体过程。 |
| [Minimax Optimal Regret for Causal Logistic Bandits with Counterfactual Fairness](http://arxiv.org/abs/2610.01377v1) | Junhyuk Huh, Seoungbin Bae, Dabeen Lee | 首个在反事实公平约束下达到最小最大最优遗憾的因果逻辑多臂老虎机算法。连接了因果推理和序贯决策。 |
| [Port-Hamiltonian Neural Networks for Systems with Multiple Asymptotically Stable Equilibria](http://arxiv.org/abs/2610.01356v1) | Simon Heilig, Jens Püttschneider, Mohammad Itani 等 | 将端口哈密顿神经网络扩展到具有多个吸引子的系统。证明全局李雅普诺夫函数无法表示多平衡动力学。 |
| [Discrete Wasserstein Flows for One-Step Generative Modeling](http://arxiv.org/abs/2610.01355v1) | Alessandro Micheli, Andrea Zerio, Samir Bhatt | 引入有限状态空间单步生成式建模的离散瓦瑟斯坦几何。实现马尔可夫核转换上的概率流。 |
| [Fold'EM: Direct atomic structure inference from Cryo-EM particles](http://arxiv.org/abs/2610.01358v1) | Advaith Maddipatla, Märt-Erik Mäeots, Marco Pegoraro 等 | 绕过传统冷冻电镜管道直接从粒子图像推断原子结构。消除了 ESP 地图重建步骤。 |
| [Feature Selective Model Collapse in Diffusion Models: Total Replacement versus Fixed-Budget Training](http://arxiv.org/abs/2610.01318v1) | Hanna Malet, Gabriel Turinici | 通过区分完全替换和固定预算训练机制来解决模型崩溃的矛盾发现。对理解合成数据训练至关重要。 |
| [DAYJOB: A Benchmark for Long-Horizon Professional Work](http://arxiv.org/abs/2610.01306v1) | Stephanie Finley, Liudas Panavas, Thomas Mikkelson 等 | 包含医疗和金融领域 130 个专业任务的基准，需要最少请求、文档分类和前提验证。弥补了现实 AI 助手评估的空白。 |
| [DeFA: Dependency-Guided Failure Attribution for LLM Agents](http://arxiv.org/abs/2610.01256v1) | Bo Deng, Xinlei Zheng, Yi Wei 等 | 引入结合协议状态和依赖图的依赖引导失败归因。解决智能体执行中相隔多步的错误定位问题。 |
| [Context-Aware Error Mitigation Orchestration for Hybrid Quantum Reinforcement Learning](http://arxiv.org/abs/2610.01253v1) | Bisma Majid, Shabir Ahmed Sofi, Mir Mohammad Yousuf | 为 NISQ 设备上的量子 RL 提出错误缓解编排，解决组合优化中的退相干和门不完美问题。 |

### 📊 应用（领域特定、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Clifford Sheaf Neural Networks](http://arxiv.org/abs/2610.01322v1) | Kotaro Kamiya, Joel Nicholls | 引入等变层神经网络，在每个 stalk 上放置克利福德代数处理几何图。实现沿边的多向量特征传输。 |
| [ProtoFlow: Prototype-Guided Flow Matching for Multivariate Time Series Forecasting](http://arxiv.org/abs/2610.01320v1) | Shibo Feng, Wanjin Feng, Yang Qiu 等 | 结合流匹配和原型指导进行多变量时间序列预测。实现非迭代预测，性能与扩散方法相当。 |
| [EP-Flow: Disordered Crystal Structure Prediction without Site-Level Annotations](http://arxiv.org/abs/2610.01315v1) | Qiuliang Liu, Liming Wu, Qi Li 等 | 生成具有取代混合、空位和间隙原子的无序晶体结构。首个无需注释处理随机位点占据的方法。 |
| [ARCCS: An Automated Regulatory Compliance Checking System](http://arxiv.org/abs/2610.01345v1) | Giorgos Filandrianos, José Menezes, Chrysoula Zerva 等 | 用于监管合规检查的端到端智能体系统，解释法律文本并将决策基于证据。解决密集法律义务解释问题。 |
| [Reachability-Informed Reinforcement Learning for Multi-Impulse Interplanetary Transfers](http://arxiv.org/abs/2610.01344v1) | Yashdeep Chaudhery, Roberto Armellin, Harry Holt | 将学习的 RL 决策通过可达性分析连接到机动几何。提供可复用的航天器轨迹设计序贯决策。 |
| [SCOPE-AD: Sequential Cost-Aware Planning for Alzheimer's Diagnosis](http://arxiv.org/abs/2610.01278v1) | Ziwen Yu, Ivan Koychev, Elizabeth Coulthard 等 | 使用成本感知证据获取的阿尔茨海默病序贯诊断智能体。在患者负担约束下联合优化测试选择和诊断终止。 |
| [PickMoment: Continuous-Time Single-Image-to-Video via Learning Deblurring](http://arxiv.org/abs/2610.01279v1) | Junseong Shin, Hyeonsu Jo, Daehyun Kim 等 | 从连续时间锐利信号学习模糊到视频的映射。解决曝光窗口中的时间整合问题以实现逼真运动模拟。 |

---

## 研究趋势信号

从今日的论文集中可以看出几个趋同趋势：

1. **智能体安全作为系统问题**：与其将安全视为输出过滤，最近的工作（TRACE、PACE、DeFA）将其定位为溯源追踪、失败归因和多轮验证。从"模型说了什么"到"决策如何发生"的转变标志着成熟度提升。

2. **生成中的多样性与修订**：从 Gacha Decoding 到均匀状态扩散模型（Know When to Hold 'em），该领域正在从寻找模式的生成转向受控的多样化和自校正能力。

3. **科学生成式建模加速**：冷冻电镜（Fold'EM）、分子动力学（SupraTITO）、晶体结构（EP-Flow）和时间序列（ProtoFlow）表明生成式模型正在解决超越文本和图像的实际科学推理问题。

4. **模型崩溃解决方案**：《Feature Selective Model Collapse》论文为看似矛盾的发现提供了解释——机制区分（完全替换 vs 固定预算）解释了何时会发生崩溃，为使用合成数据的训练管道提供了可操作的指导。

5. **多智能体信息状态**：像"查询外失败"（Right Answers, Wrong States）这样的新失败模式表明，对智能体留下什么（而不仅是输出什么）的关注日益增加。

---

## 值得深入阅读

1. **[Gacha Decoding: Eliciting Diverse Generations Through Instruction Following](http://arxiv.org/abs/2610.01382v1)** — 这篇论文以原则性的方式将推理时计算和生成多样性联系起来。该方法随模型能力增长而扩展，使其与模型增长越来越相关。对于构建创意 AI 系统的从业者来说，这提供了温度缩放或核采样的原则性替代方案。

2. **[Feature Selective Model Collapse in Diffusion Models: Total Replacement versus Fixed-Budget Training](http://arxiv.org/abs/2610.01318v1)** — 随着合成数据变得普遍，理解模型崩溃机制至关重要。这篇论文解决了文献中的明显矛盾，并为由合成数据驱动的训练管道提供了可操作的指导。

3. **[DAYJOB: A Benchmark for Long-Horizon Professional Work](http://arxiv.org/abs/2610.01306v1)** — 当前的基准低估了现实的专业任务。这个基准捕捉了"简要请求 → 文档分类 → 前提验证"的工作流程，这是实际 AI 助手将面临的，使其对于评估实际效用至关重要。

---

规则：
- 仅输出翻译内容。不需要前言、解释，也不需要在整个输出外加 Markdown 代码 fences。
- 完全保留 Markdown 结构：标题、表格（包括列对齐行）、列表、引用、粗体/斜体、分隔线。
- 保持 URL、链接目标、代码片段、代码块、数字和日期不变。
- 保持项目名称、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符的原始形式——不要翻译它们。
- 像 #12345 这样的 Issue/PR 引用及其链接文本保持原样。
- 使用自然的技术中文，这是中文开发者通讯的语域——而不是逐字直译。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*