# ArXiv AI 研究日报 2026-10-15

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-15 00:47 UTC

---

<think>The user wants me to translate this ArXiv AI Research Digest from English to Chinese. I need to:
1. Translate all the content (headings, tables, body text)
2. Keep all Markdown structure exactly as-is
3. Keep URLs, project names, numbers, etc. unchanged
4. Use natural technical Chinese register

Let me go through and translate each section:

**Title:**
"ArXiv AI Research Digest — October 15, 2026" → "ArXiv AI 研究摘要 — 2026年10月15日"

**Section 1: Today's Highlights**
First sentence about three major research directions → 三个主要研究方向正在获得显著的动力势头

Let me translate section by section...

**Section 2: Key Papers** - I need to translate the summaries for each paper. The table headers need to stay in Chinese though (论文, 作者, 摘要).

**Section 3: Research Trend Signal**
A clear theme emerges → 一个清晰的 ___ 主题浮现

**Section 4: Worth Deep Reading**
Worth Deep Reading → 值得深入阅读

Let me do this translation carefully, maintaining all the Markdown formatting and technical accuracy.</think>

# ArXiv AI 研究摘要 — 2026年10月15日

## 1. 今日重点

今天的投稿揭示了三个正在获得显著发展势头的**主要研究方向**。首先，针对物理系统和智能体的**递归自我改进（RSI）**正在成为变革性范式，多篇论文探索了机器人和智能体如何通过经验自主提升自身能力。其次，**长程智能体系统**受到广泛关注，研究人员正在解决上下文管理、进度跟踪以及自主智能体在长时间运行（数小时乃至数天）场景下的扩展挑战。第三，**评估与验证**仍是重点——超越简单指标，开发能够评估智能体行为、代码质量和复杂现实环境推理的稳健基准、判断器和反馈机制。

---

## 2. 重点论文

### 🧠 大语言模型

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [DoubtLess: Training-Free Contrastive Decoding for Efficient Reasoning](http://arxiv.org/abs/2610.18862v1) | Minghao Luo, Liang Chen | 引入无需训练的对比解码来缩短思维链推理 token。解决了冗长推理链的效率问题，无需针对特定模型进行训练或使用固定 steering 向量。 |
| [Read the Room Before Your Model Generates](http://arxiv.org/abs/2610.18820v1) | Muyao Kong, Zhihao Lin | 提出在生成前读取上下文来校准输出随机性，超越固定温度设置。提供了一种几何上可解释的 token 级校准方法。 |
| [Jeva: System One Models from First Principles](http://arxiv.org/abs/2610.18773v1) | Qi Li, Xinchao Wang | 论证快速决策模型的四个结构需求：空值感知、偏好敏感、选择感知和解释能力。为低延迟 AI 提供原则性设计。 |
| [On the Monitorability of Natural Language Autoencoders](http://arxiv.org/abs/2610.18727v1) | Kevin Yandoka Denamganaï | 评估 NLA 作为语言模型监督工具的能力，区分识别与判别能力。这对构建可解释的 AI 监控系统至关重要。 |
| [Learning Source Structure: Bayesian Prediction with Transformers](http://arxiv.org/abs/2610.18725v1) | Meir Feder, Ruediger Urbanke | 证明 transformers 可以学习贝叶斯预测器，当在具有随机源参数的序列上训练时。连接了 transformer 训练与最优贝叶斯推断。 |
| [Where Do LLM Ensemble Gains Come From?](http://arxiv.org/abs/2610.18786v1) | Donghwan Kim | 将 LLM 集成的收益分解为候选值、多样性和聚合效应。提供了匹配条件来正确评估额外候选是否提升性能。 |

### 🤖 智能体与推理

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [ChunkAct: Action Chunking for Agentic Robotics](http://arxiv.org/abs/2610.18874v1) | Bingxin Xu, Wenrui Bao 等 | 引入动作分块来降低 LLM 智能体在机器人控制循环中的推理开销。实现零训练迁移到新任务，同时管理效率权衡。 |
| [Tev: Scaling Long-Horizon Agentic Environments](http://arxiv.org/abs/2610.18868v1) | Wenbo Hu, Shraman Pramanick 等 | 解决运行数小时至数天的自主智能体的扩展挑战。使用密集进度奖励来实现经济价值高的长程任务。 |
| [Hybrid Reasoning Agents](http://arxiv.org/abs/2610.18861v1) | Jiaru Zou, Yunzhe Qi 等 | 通过语言中介交互桥接潜在推理效率与外部工具访问。使得智能体能够超越人类语言进行思考，同时通过语言行动。 |
| [The Last Remote Sensing Model Built by Humans?](http://arxiv.org/abs/2610.18845v1) | Sijie Zhao, Zeqi Zhou 等 | 将遥感任务建模为递归自我改进问题，自动化模型构建。表明任何可验证的任务都可以成为自主改进框架。 |
| [Who Improves the Robot? Toward Physical Recursive Self-Improvement](http://arxiv.org/abs/2610.18842v1) | Hai Zhou, Fan Yang 等 | 研究 Physical RSI，其中机器人利用物理经验更新能力和改进程序。迈向完全自主机器人改进的一步。 |
| [SEAR: Self-Evolving Agentic Robotics](http://arxiv.org.abs/2610.18792v1) | Xinyi Wang, Bangzheng Li 等 | 框架让语言模型智能体编写、测试并保留控制代码作为技能。基准测试智能体是真正学习还是仅仅记忆解决方案。 |
| [Self-Evolving Agent Harness](http://arxiv.org.abs/2610.18813v1) | Chuyang Wei, Haoxiang Guan 等 | 形式化智能体软件脚手架（提示词、记忆、工作流）的反馈驱动修订，同时保持模型权重固定。分离更新目标与传播机制。 |
| [Pack Light, CarryOn: Object-Oriented Context for Long-Horizon Agents](http://arxiv.org/abs/2610.18784v1) | Yuchen Lu, Julian McAuley 等 |围绕可重用的进度而非交互历史组织智能体上下文。减少对"如何达成进度"的重复处理。 |
| [BLADE: Auditing Information Use in LLM Multi-Agent Systems](http://arxiv.org/abs/2610.18780v1) | Xiaoguang Guo, Yaohao Long 等 | 实现协作多智能体系统中的失败归因。追踪信息如何在智能体角色间传播以及误解发生的位置。 |
| [SkillScaffold: Policy-Adaptive Skill Credit Assignment](http://arxiv.org/abs/2610.18807v1) | Wenlin Zhong, Hao Wang 等 | 解决基于技能的智能体强化学习中的信用分配问题。结合技能信用分配与选择性注入以改进探索。 |
| [Optimizing Team Behavior via Extremum-Seeking Control](http://arxiv.org/abs/2610.18808v1) | Svar Rajankumar Patel, Kshitij Jerath | 使用极值搜索控制来优化多智能体协调中的行为多样性。使智能体能够执行独特但互补的策略。 |

### 🔧 方法与框架

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [What Matters in Quality-Aware VLA Pretraining](http://arxiv.org/abs/2610.18869v1) | Mingxuan Yan, Litian Gong 等 | 基准测试 VLA 预训练中演示质量的加权、过滤和条件化策略。使用 5000 个次优人类演示。 |
| [Data Free Training of Diffusion Models for Lattice Field Theories](http://arxiv.org/abs/2610.18863v1) | Dennis Grinwald, Ankur Singha 等 | 使扩散模型能够在无需访问原始配置的情况下进行晶格场论采样。解决物理模拟中的计算瓶颈。 |
| [Exact Topological Compliance: Generating Persistence-Equivalent Graphs](http://arxiv.org/abs/2610.18856v1) | Mattie Ji, Indradyumna Roy 等 | 生成拓扑结构与目标持续图精确匹配的图。从软正则化推进到精确拓扑控制。 |
| [Two Clocks: Why Larger Rollout Batches Learn Slower](http://arxiv.org/abs/2610.18853v1) | Yuante Li, Junwei Quan 等 | 研究 RLVR 中的扩展悖论：更大批次学习更慢但在日程上失败。提供 rollout 批次大小权衡的理论理解。 |
| [LIBERO-RIG: Hardware-Setup Robustness Benchmark](http://arxiv.org/abs/2610.18843v1) | Andrea Yaoyun Cui, Hanyu Wang 等 | 基准测试仅改变硬件设置变化（相机、校准、控制器频率）。测试 VLA 对部署环境变化的鲁棒性。 |
| [Fast Rates for Offline Q-Learning with KL Regularization](http://arxiv.org/abs/2610.18839v1) | Yize Hao, Guangxin Jiang 等 | 证明带 KL 正则化的离线 Q 学习的快速收敛率。扩展对 KL 正则化益处的理解超越标准设置。 |
| [Scaling Online Optimal Transport for Flow Matching](http://arxiv.org/abs/2610.18838v1) | Peter Chen, Sergey Levine | 通过小批量最优传输解决流模型扩展的稳定性问题。减少独立随机配对带来的随机性。 |
| [Depth Memory](http://arxiv.org/abs/2610.18809v1) | David González-Martínez 等 | 提出超越残差连接的表达性深度聚合机制（mHC、AttnRes）。通过更好的层集成提升语言模型性能。 |
| [Registration as a Representation Problem](http://arxiv.org.abs/2610.18804v1) | Neel Dey, Adrian V. Dalca | 将 PET/CT 配准重新表述为表示学习问题。超越原始图像强度作为相似性代理。 |
| [Steertuning Policies from a Few Human Videos](http://arxiv.org/abs/2610.18711v1) | Billy Yan, Isaac Tu 等 | 使机器人能够从 5 个人类演示在 5 分钟内学习新任务。两阶段系统结合视频理解和策略提取。 |
| [Rate Transfer Method: Convergence in SGD](http://arxiv.org.abs/2610.18739v1) | Neil Walton | 将 SDE 的有限时间李雅普诺夫估计转换为 SGD 收敛 bound。为随机梯度算法提供新的分析工具。 |
| [Enabling Token-wise Importance Sampling in Off-Policy RLVR](http://arxiv.org.abs/2610.18738v1) | Hao Bai, Jiarui Yao 等 | 证明 token 级重要性加权避免 off-policy RLVR 中的跨 token 似然比偏差。实现异步生成数据的高效利用。 |
| [SP²ec: Adaptive Self-Speculative Decoding for VLMs](http://arxiv.org/abs/2610.18735v1) | Yuqi Huang, Xingyao Li 等 | 面向视觉语言模型的自推测解码，复用 VLM 隐藏状态。解决多样输入模态带来的吞吐量挑战。 |
| [Unlocking Token Rewards via Training-Free Reward Attribution](http://arxiv.org/abs/2610.18704v1) | Sitong Wu, Haoru Tan 等 | 从深度奖励模型中无需训练地提取 token 级奖励信号。将 token 影响定义为对整体过程奖励的贡献。 |
| [Emergent Loop Geometry in Gauge-Equivariant GNNs](http://arxiv.org/abs/2610.18742v1) | Ali Rayat, Gia-Wei Chern | 研究 gauge-equivariant GNN 中闭合格子游走的统计集合。连接内部几何结构与模型表达能力。 |

### 📊 应用

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Cepheid: Cross-Family Motion Completion](http://arxiv.org/abs/2610.18871v1) | Chih-Hai Su, Tsung-Wei Ke 等 | 解耦尺度与结构以实现跨几何族运动补全。在跨族泛化上优于族特定残差先验。 |
| [AesCode: Aesthetic Code Generation](http://arxiv.org/abs/2610.18860v1) | Xin Gao, Yifan Yang 等 | 使用解耦的跨模态奖励生成视觉制品代码（幻灯片、海报、仪表盘）。实现空间规划和美学评估。 |
| [MFG: Multi-turn Feedback Guided Molecular Optimization](http://arxiv.org/abs/2610.18851v1) | Trieu Nguyen, Frazier N. Baker 等 | 多轮反馈引导的多目标分子优化。迭代修改分子同时保留整体结构。 |
| [Back-Translation for Low-Resource MT](http://arxiv.org/abs/2610.18818v1) | Divyanshu Bathla, Parag Singla 等 | 通过回译利用低资源机器翻译 LLM 的单语数据。解决超越平行语料库的数据稀缺问题。 |
| [Bytes to Threats: Byte-Sequence Transformer](http://arxiv.org/abs/2610.18787v1) | Abdelrahman Y. Eljamal, Abdeltawab Hendawi | 使用 transformers 直接从字节序列进行恶意软件检测。消除静态/动态分析的手工特征需求。 |
| [PreciseCoder: Faithful Debugging Beyond Unit-Test Rewards](http://arxiv.org/abs/2610.18755v1) | Yunkai Zhan, Miaosen Chai 等 | 分析仅单元测试奖励在调试过程中教给模型什么。发现它们提高了通过率但可能错过学习忠实错误诊断。 |
| [SolBehave: Evaluating Behavioral Correctness of Smart Contracts](http://arxiv.org.abs/2610.18745v1) | Giovanni Pio Delvecchio 等 | 基准测试 LLM 生成的 Solidity 智能合约正确性超越编译。解决部署前代码中永久可利用的漏洞。 |
| [AIRRI: AI-Resistant Reading Interface](http://arxiv.org.abs/2610.18724v1) | Emory Salaun, Syed Ayon 等 | 创建人类可读、机器抗拒的阅读界面用于教育评估。击败图像转文本提取和 LLM 作答。 |
| [Code-Switching Detection via Language-Selective Dimensions](http://arxiv.org/abs/2610.18726v1) | Jie Chi, Zakaria Aldeneh 等 | 识别语音基础模型中用于代码切换检测的语言选择维度。改进多语言语音训练中的 CS 覆盖。 |
| [RoboSimStudio: Real2Sim Toolkit](http://arxiv.org/abs/2610.18835v1) | Kaiyuan Chen, Shuangyu Xie 等 | 用于机器人操作任务快速从真实到仿真的交互工具包。自动化求解器和接触模型选择。 |
| [OmniCompass: Omni-Modal Video Understanding Benchmark](http://arxiv.org/abs/2610.18829v1) | Xuyang Liu, Shihao Wang 等 | 涵盖全模态视频定位和理解的整体基准。实现 omni-modal MLLM 能力的系统诊断。 |
| [Looking Complete Is Not Being Grounded](http://arxiv.org/abs/2610.18762v1) | Sachin Kumar | 从人道主义情况报告推导 15 槽信息模式。根据从业者需求而非便利性评估 LLM sitret。 |
| [Rubrics from the Task, Verdicts from Evidence](http://arxiv.org/abs/2610.18766v1) | Tianci Liu, Haoyu Wang | 带工具增强判断器的逐点评分规则。从任务结构而非响应候选推导标准以减少偏差。 |
| [Beyond the Verdict: Agentic Code Judging](http://arxiv.org/abs/2610.18760v1) | Zheye Deng, Sha Li 等 | 带可验证反馈的智能体代码判断用于测试时扩展。提供超越二元正确性的失败证据。 |
| [Learning When to Transfer: Carbon-Footprint Modeling](http://arxiv.org/abs/2610.18730v1) | Muhammad Umar Farooq, Daniel R. Cooper | 使用 RL 决定何时将知识迁移到新制造领域用于碳足迹建模。解决新材料表征中的冷启动问题。 |

---

## 3. 研究趋势信号

一个清晰的**递归自我改进**主题在机器人技术、遥感和智能体框架中浮现——研究人员正在超越静态模型，转向能够通过经验自主改进的系统。**长程智能体上下文**正在被重新设计，采用面向对象的进度跟踪取代线性历史处理。在评估方面，值得注意的是向**工具增强判断器**和**可验证反馈**的转向，超越二元裁决提供可操作的失败证据。**grokking 现象**的工作表明，对训练动力学的更深层理论理解仍然是活跃的前沿。最后，**token 级归因**方法——无论是奖励还是重要性采样——正在实现强化学习可验证奖励中更细粒度的控制。

---

## 4. 值得深入阅读

1. **[SEAR: Self-Evolving Agentic Robotics](http://arxiv.org.abs/2610.18792v1)** — 这篇论文直接解决智能体机器人技术是真正学习还是仅仅记忆的问题。鉴于"自我改进"声称的激增，一个严格区分真正学习与模式匹配的框架对该领域的可信度至关重要。

2. **[Two Clocks: Why Larger Rollout Batches Learn Slower](http://arxiv.org.abs/2610.18853v1)** — 一个反直觉的发现，具有重大实践意义。理解为什么更大批次学习更慢但"按日程失败"可能会重塑我们处理 RLVR 扩展决策的方式。

3. **[Exact Topological Compliance: Generating Persistence-Equivalent Graphs](http://arxiv.org.abs/2610.18856v1)** — 将拓扑感知生成从软正则化推进到精确规范。这种精确性对任何拓扑结构携带关键结构信息的应用都很重要——分子设计、网络分析或电路布局。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*