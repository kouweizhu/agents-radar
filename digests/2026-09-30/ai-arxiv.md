# ArXiv AI 研究日报 2026-09-30

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-30 01:28 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest from English to Chinese. I need to:

1. Translate all the content while keeping the same structure
2. Keep URLs, code, numbers, and technical terms as-is
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Preserve all markdown formatting exactly
5. Output ONLY the translation with no preamble or explanation

Let me go through and translate while maintaining the structure and technical accuracy.

Key terms to keep in English (technical terms):
- LLM (Large Language Model)
- GRPO (Group-Relative Policy Optimization)
- JEPA (Joint-Embedding Predictive Architecture)
- KV cache
- RL (Reinforcement Learning)
- RLHF
- VLA (Vision-Language-Action)
- Tabular foundation models
- In-context learning
- Multi-agent
- Computer use
- GUI agents
- MRI
- HAR
- UAV
- ASR
- ARC

Let me translate section by section:</think>

# ArXiv AI 研究摘要 — 2026 年 9 月 29 日

## 1. 今日要点

今日论文集呈现出几个趋同的研究方向。**LLM 强化学习**持续成熟，多篇论文聚焦群体相对策略优化（GRPO）的陈旧性问题、奖励黑客攻击和采样策略——这表明生产级 RL 流水线正变得更加复杂。**智能体架构**正在向预认知规划和可复用的神经符号策略演进，显示出从被动执行向更稳健的长程任务处理的转变。值得注意的是，**效率创新**遍布各个方向：KV 缓存压缩、紧凑的边缘原生模型以及验证器的自适应预算分配都瞄准了实际部署场景。最后，**多模态推理**（GUI 智能体、交通信号控制和空中操作的视觉语言动作模型）展示了 AI 系统在物理世界中的不断扩展。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [TaskBridge：通过虚拟任务弥合无监督表格异常检测与上下文学习之间的差距](http://arxiv.org/abs/2609.36968v1) | Doyun Choi, Dooho Lee, Jaemin Yoo 等 | 提出虚拟任务生成，使表格基础模型能够在无需数据集特定训练的情况下执行零样本异常检测。弥合了无监督 TAD 与上下文学习之间的差距，扩展了基础模型在表格异常检测方面的能力。 |
| [ER-JEPA：经验回放改进语言模型中的联合嵌入预测学习](http://arxiv.org/abs/2609.36952v1) | Jingnan Pu, Zi-En Fan, Feng Lian 等 | 将经验回放应用于 LLM-JEPA，改善不同语义视图与底层知识表示的对齐。解决了强对齐信号可能无法捕捉全面抽象语义的问题。 |
| [冷却采样器，而非学习者：采样温度移动重要性校正 GRPO 的陈旧性悬崖](http://arxiv.org/abs/2609.36953v1) | Taiheng Pan | 揭示了重要性校正 GRPO 中的"陈旧性悬崖"，并证明采样温度可以延长采样器落后于学习者的时间。为生产 RL 流水线提供了实践指导。 |
| [CoEM：通过证据提交记忆赋能长上下文推理](http://arxiv.org/abs/2609.36935v1) | Jingguang Li, Yebo Wu, Zuyi Guo 等 | 通过在模型上下文中维护有界文本记忆并采用逐块处理来解决 LLM 在长上下文上的性能下降。为复杂长程任务实现可靠的 长上下文推理。 |
| [IronLLM：锻造紧凑边缘原生语言模型以实现实时具身智能](http://arxiv.org/abs/2609.36860v1) | Changdi Yang, Fengquan Jiao, Haochih Lin 等 | 提出 IronLLM-0.6B，采用混合注意力和 X-MTP（多token预测）实现高效的设备端推理。面向边缘设备的实时具身智能。 |
| [STAR-GRPO：正则锚定与优先可靠性优势对抗表征依赖型奖励黑客攻击](http://arxiv.org/abs/2609.36900v1) | Wan Tian, Zhongyi Li, Xiang Xu 等 | 解决群体相对策略优化中的奖励黑客攻击问题，即不支持的奖励会使优势估计产生偏差。引入优先可靠性优势估计以防止表征依赖型奖励剥削。 |
| [表格基础模型中稀疏先验的架构对齐](http://arxiv.org/abs/2609.36883v1) | Tianqi Zhao, Tianyi Zhuang, Shuo Duan 等 | 分析不同的预训练先验、架构和目标如何影响表格基础模型表现。为将模型架构与预期下游任务对齐提供指导。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [神经符号计算机使用：学习可靠高效执行的可复用策略](http://arxiv.org/abs/2609.36927v1) | Hyewon Suh, Thanh Minh Nguyen, Chih-Lun Lee 等 | 提出神经符号计算机使用，学习可复用策略以处理重复工作流，减少重新规划开销。超越每步重新规划的范式，实现更可靠高效的任务执行。 |
| [PrecogUI：通过预认知模拟和经验检索的主动式 GUI 智能体](http://arxiv.org/abs/2609.36923v1) | Bin Kang, Jiarui Ouyang, Li Jiang 等 | 将 GUI 智能体从被动执行转向使用模拟和经验检索的预认知架构。解决长程动态场景中的级联失效问题。 |
| [WEFT：通用智能体的扩展工具使用后训练](http://arxiv.org/abs/2609.36887v1) | Bo Mao, Hang He, Linting Wang 等 | 解决超越孤立环境合成的工具使用后训练扩展问题。提出涵盖环境、任务、智能体 harness 和评估器的更广泛框架。 |
| [对黑盒 LLM 的受控解码攻击](http://arxiv.org/abs/2609.36956v1) | Jesson Wang, Shawn Li, Wei Yang 等 | 演示操纵 next-token 概率可以绕过安全对齐，即使在没有权重访问权限的情况下。表明通过重建概率可以对仅返回采样文本的接口发起攻击。 |
| [当上游消息覆盖正确答案时：多智能体 LLM 协作的受控研究](http://arxiv.org/abs/2609.36855v1) | Yaxin Gong, Gangyi Zhang, Chongming Gao 等 | 研究上游智能体消息如何导致下游智能体覆盖正确答案。为多智能体 LLM 系统中的关键脆弱性提供实证证据。 |
| [不安全的梯度在对话中存活了吗？多轮对话中基于梯度的越狱检测的脆弱性](http://arxiv.org/abs/2609.36849v1) | Omar Sheta, Rinku Deuja, Hadi Masoudi 等 | 表明基于梯度的越狱检测器（如 GradSafe）在多轮对话中很脆弱，因为不安全意图分布在多轮中。暴露了当前安全机制的一个显著差距。 |

### 🔧 方法与框架（新技术、基准、效率提升）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [VStress：重复验证器的相关性感知审计与自适应预算分配](http://arxiv.org/abs/2609.36958v1) | Miaobo Hu, Shuhao Hu, Xiaobo Guo 等 | 引入 VStress-CA，这是一种相关性感知分配策略，估计验证器的条件边际信息。在保持验证质量的同时减少冗余的验证器调用。 |
| [从差距中学习：用于 GRPO 的差分感知优势剪枝与自适应回滚采样](http://arxiv.org/abs/2609.36932v1) | Jiahua Yang, Zhiwei Yang, Xianpeng Zhang 等 | 提出差分感知优势剪枝，以减少每题多回滚采样的 GRPO 计算开销。解决群体相对策略优化中的效率瓶颈。 |
| [ARC-KV：基于锚点搜索摊销的重建式 KV 缓存压缩](http://arxiv.org/abs/2609.36835v1) | Zheyu Shen, Guanhua Wang, Dezhan Tu 等 | 针对长上下文 LLM 推理瓶颈，采用基于重建的 KV 缓存压缩。对于可复用上下文前缀服务多个下游查询特别有效。 |
| [陈旧性在哪里累积？LLM 后训练中异步 RL 的池感知有效陈旧性控制](http://arxiv.org/abs/2609.36830v1) | Chenliang Li, Neiwen Ling, Zijun Wei 等 | 研究策略生成与策略优化重叠时的策略滞后问题。提供池感知陈旧性控制以提高训练稳定性和效率。 |
| [超越亚高斯检测器分数：人类-LLM 文本分割的鲁棒加权轮廓损失变点检测](http://arxiv.org/abs/2609.36888v1) | Wan Tian, Zhongyi Li, Yawen Li 等 | 提出鲁棒加权轮廓损失用于检测混合人类-LLM 文档中的作者转换。解决了现有方法对极端检测器分数的脆弱性问题。 |
| [在线视觉证据蒸馏](http://arxiv.org/abs/2609.36838v1) | Shaohang Wei, Feifan Song, Guangyue Peng 等 | 通过从教师为学生生成的交互轨迹提供指导来解决视觉智能体中的错误传播问题。考虑了图像操作如何改变后续推理的证据。 |

### 📊 应用（领域特定、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [VLALight：用于交通信号控制的视觉语言动作模型](http://arxiv.org/abs/2609.36934v1) | Pan Zhang, Siqi Lai, Kemu Dong 等 | 引入基于路侧摄像头视觉观测的交通信号控制 VLA。超越手工设计的交通状态表示，走向端到端视觉 grounding。 |
| [通过条件流匹配和有限策略强化学习进行 RNA 设计](http://arxiv.org/abs/2609.36885v1) | Zefeng Lin, Xianyong Fang, Tianfan Fu 等 | 结合条件流匹配与有限策略 RL 进行靶向二级结构的 RNA 序列设计。通过序列变异和选择模拟自然进化。 |
| [AeroManip-VLA：空中操作的规模化视觉语言动作学习](http://arxiv.org/abs/2609.36915v1) | Rui Huang, Yanlin Mu, Lidong Li 等 | 使用 RL 生成的演示将 VLA 模型扩展到空中操作器（带机械臂的无人机）。解决 3D 工作空间操作的独特挑战。 |
| [更安全的内容还是更坚定的拒绝？有害微调下对齐的混合扰动防御](http://arxiv.org/abs/2609.36862v1) | Muhammad Zeeshan Akram, Mufid Kamel Marican, Anvesh Reddy Yenugu 等 | 提出针对有害微调攻击的对齐混合扰动防御，这些攻击会降低模型对齐。解决微调即服务带来的攻击面。 |
| [多视野光伏预测中短期适应的状态传输路由](http://arxiv.org/abs/2609.36926v1) | Xu Yuqing, Zhou Liguo, Sun Ze 等 | 引入状态传输路由（STR），这是一种用于多视野光伏功率预测的轻量级适配器。解决了将短期趋势外推到更长视野时的误差问题。 |

---

## 3. 研究趋势信号

今日提交揭示了**四个趋同趋势**：

1. **生产级 RL 成熟化** — 多篇论文解决 LLM 后训练中的实际挑战：异步 RL 中的陈旧性、采样温度影响、奖励黑客攻击和计算开销减少。这表明该领域正从概念验证转向生产级系统。

2. **超越单轮的智能体鲁棒性** — 预认知架构（PrecogUI）、神经符号可复用策略的研究，以及多智能体失败模式（上游消息覆盖、多轮对话中基于梯度的越狱检测）的涌现，表明对现实世界可靠性的关键关注。

3. **效率成为首要考量** — KV 缓存压缩、紧凑边缘原生模型和自适应验证器分配反映了日益增长的部署约束。推理优化不再是事后考虑，而是核心研究方向。

4. **物理世界具身化** — 交通信号控制、空中操作和无人机基站重新定位的视觉语言动作模型展示了智能体在现实世界的持续扩展，超越了纯数字任务。

---

## 4. 值得深度阅读

1. **[冷却采样器，而非学习者：采样温度移动重要性校正 GRPO 的陈旧性悬崖](http://arxiv.org/abs/2609.36953v1)** — 面向部署 RLHF/GRPO 流水线的实践者。"陈旧性悬崖"发现具有直接可操作性：调整采样温度可以显著延长采样器-学习者同步间隔，降低计算成本。连接了理论与生产实践。

2. **[神经符号计算机使用：学习可靠高效执行的可复用策略](http://arxiv.org/abs/2609.36927v1)** — 代表智能体设计中的概念进步。不是将每个工作流视为新的规划问题，而是学习可复用策略来解决当前计算机使用智能体中的根本低效问题。神经符号方法为更可靠、更具成本效益的自动化提供了路径。

3. **[ARC-KV：基于锚点搜索摊销的重建式 KV 缓存压缩](http://arxiv.org/abs/2609.36835v1)** — 面向构建长上下文应用的人群。该方法解决了 LLM 推理中的核心瓶颈——KV 缓存增长，采用针对可复用上下文前缀的重建式压缩。鉴于向更长上下文的推动，这解决了紧迫的工程挑战。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*