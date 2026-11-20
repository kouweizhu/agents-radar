# ArXiv AI 研究日报 2026-11-20

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-11-20 03:41 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest from English to Simplified Chinese. I need to:
1. Translate the content accurately into natural technical Chinese
2. Preserve all formatting, headings, tables, lists, etc.
3. Keep URLs, code spans, numbers, dates as-is
4. Keep project names, identifiers in original form
5. Output ONLY the translation, no preamble or explanation

Let me translate this carefully, maintaining the professional tone of a Chinese developer newsletter while ensuring technical accuracy.

I'll go through section by section:

1. Title and date
2. Today's Highlights
3. Key Papers (with all 4 subcategories and their tables)
4. Research Trend Signal
5. Worth Deep Reading

Let me translate this now.
</think>


# ArXiv AI 研究文摘

## 2026年11月20日

---

## 1. 今日要点

今日投稿显示 AI 领域正显著转向**实际部署挑战**。多篇论文关注实验室性能与真实场景可靠性之间的差距：医学 LLM 的可验证推理方法（23、29）、AI Agent 信任评估（20、28）以及无需遗忘灾难的持续模型编辑框架（32）。同时，**推理多样性**受到越来越多的关注——随着 RLVR 微调导致策略分布塌陷的问题日益凸显（18、19）。AI Act 的监管压力正在转化为合规性实证研究（1、35），而自主 Agent 需要处理长时程任务时面临不可靠的内存系统问题（44）。此外，扩散语言模型正走向实际部署，新研究聚焦于自适应推理调度和低预算生成（24、43）。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Many Solutions, One Answer: Search Order Shapes the Default Solutions of Language Models](http://arxiv.org/abs/2611.25916v1) | Qinhan Hou, Jing Tang et al. | 证明语言模型在存在多个有效答案时会对特定解表现出系统性的默认偏好，表明训练动态和采样顺序对输出的影响远超单纯的能力差异。这一发现对评估协议和推理基准的公平性具有深远影响。 |
| [Verifiable Logic in Medical LLMs: A Critical Review of Agentic Clinical Reasoning Optimization and Neuro-Symbolic Grounding](http://arxiv.org/abs/2611.25898v1) | Youssef ElNahas, Adel Ammar et al. | 揭示医学 LLM 的关键失效模式：通过逻辑无效的推理产生流畅、可信的输出，而静态基准测试无法检测此类问题，倡导在临床部署中采用神经符号接地方法。 |
| [The Price of an Explanation: What Demanding Verifiable Artifacts Costs, and What It Buys Back](http://arxiv.org/abs/2611.25896v1) | Edgar A. Duéñez-Guzmán et al. | 量化了要求可执行验证产物与原始生成质量之间的权衡，为验证开销何时因可靠性提升而值得提供了实证指导。 |
| [PosteriorBench: Evaluating Behavior Posterior Sampling in Language Models](http://arxiv.org/abs/2611.25735v1) | Zhiyang Xun, Daniel D. Johnson et al. | 引入了一个形式化框架，用于从语言模型中高效采样稀有但有针对性的行为，解决了研究低概率模型输出的根本挑战。 |
| [Anchor and Check: Deterministic Cross-Prompt, Cross-Model Reconciliation for Auditable LLM Decisions](http://arxiv.org/abs/2611.25818v1) | Sivakameswara Reddy Chejarla | 提出使用锚点验证的 reconciliation 契约来生成可审计的确定性 LLM 决策流程记录。 |

### 🤖 Agent 与推理（规划、工具调用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [System-One RSI: Building Muscle Memory for Interactive Agents through Guided Practice](http://arxiv.org/abs/2611.26007v1) | Qingxu Fu, Xuanfa Jin et al. | 通过训练快速的"肌肉记忆"策略来补充较慢的深思熟虑推理系统，解决实时 Agent 控制中的延迟-准确率权衡问题。 |
| [Decoupled Knowledge Retrieval and Compact Memory Enable Reliable Lifelong Model Editing](http://arxiv.org/abs/2611.25861v1) | Yue Che, Jingze Wang et al. | 提出一种基于记忆的模型编辑架构，将检索与修改解耦，实现持续知识更新而无需重新训练或损害现有能力。 |
| [HabitusMem: Belief Memory over Evolving User Preferences for LLM Agents](http://arxiv.org/abs/2611.25855v1) | Yifan Lu, Gaoyang Guo et al. | 引入一种跨交互维护用户偏好信念的偏好追踪记忆系统，使 Agent 行为能够适应演化的用户状态。 |
| [Duopra: From Full-Duplex Conversation to Full-Duplex Agency](http://arxiv.org/abs/2611.25773v1) | Chiyu Chen, Pengzhou Cheng et al. | 将全双工对话模型扩展到全双工任务代理，使 Agent 能够在用户交互中主动调用工具和修正论点。 |
| [Does the Workspace Do the Work? A Causal Protocol for Verifying Global-Workspace Computation in a Language Model](http://arxiv.org/abs/2611.26018v1) | Diaoxuan He, Linqian Wu | 提出因果验证协议以测试训练网络是否实现了全局工作空间理论，将意识理论与机械可解释性联系起来。 |
| [When Agents Play Differently: Localizing Human--Agent Behavioral Divergence with Conditional Distributional Testing](http://arxiv.org/abs/2611.25788v1) | Oleg Smirnov, John Pertoft et al. | 开发非参数差异统计量以发现 AI Agent 系统性偏离人类表现模式的行为子群。 |

### 🔧 方法与框架（新技术、基准、效率改进）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [ROAM-GRPO: Enforcing Reasoning Diversity in GRPO via Routed Off-mode Approach Mining](http://arxiv.org/abs/2611.25926v1) | Jeff Duan, Matt Thomson | 通过显式挖掘多样化推理方法解决 RLVR 微调中的策略塌陷问题，在不牺牲平均性能的情况下提升 pass@k 指标。 |
| [One Schedule Does Not Fit All: Adaptive Inference Schedules for Diffusion Language Models](http://arxiv.org/abs/2611.25895v1) | Rabimba Karanjai, Linsey Pang et al. | 表明最优去噪调度因任务、模型和采样器而异，引入具有可证明误差保证的 TCDA 以实现自适应部署。 |
| [Fast-JEPA: Advancing the Success-Latency Frontier for Latent World Models](http://arxiv.org/abs/2611.25927v1) | Yao Zhang, Bin Yu et al. | 重新设计潜空间世界模型的规划，改善机器人预测搜索的成功率-延迟帕累托前沿。 |
| [LINEAGE: A Benchmark for Empirical Lineage Retrieval in AI Scientific Literature](http://arxiv.org/abs/2611.25845v1) | Pangjing Wu, Xu Yuan et al. | 通过提供专门用于科技文献检索及溯源的基准，解决了研究 Agent 工作流中的关键空白。 |
| [Closing Performance Gap for Diffusion Language Models under Low Inference Budgets](http://arxiv.org/abs/2611.25763v1) | Hao Wu, Sipeng Chen et al. | 使扩散语言模型在紧张算力预算下保持生成质量，解决了实际部署的关键障碍。 |
| [Meta-RTL: Evolving Agent Harnesses for RTL Optimization](http://arxiv.org/abs/2611.25891v1) | Xinzhuang Xiong, Yonghao Wang et al. | 使用演化搜索自动生成 RTL 优化测试框架，降低 LLM 驱动 EDA Agent 的人工工程成本。 |
| [Validation-driven Deployment of LLM Inference Platforms for Agentic Workloads](http://arxiv.org/abs/2611.25905v1) | Shai Gretz, Alon Halfon et al. | 为将 Agent 工作负载从闭源 API 迁移到自托管开源模型提供系统性验证框架。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [AI agents can redesign engineering parts with more than a thousand CAD parameters and nonlinear simulations](http://arxiv.org/abs/2611.26003v1) | Alexandra Starostina, Alexander Hermann et al. | 证明 AI Agent 能够驾驭极高维设计空间中的昂贵黑盒仿真，实现自动化工程优化。 |
| [From AI Surrogate to Engineering Tool: Toward Production Use of Fiber-Orientation Prediction in Crash CAE](http://arxiv.org/abs/2611.25991v1) | Osamu Ito, Yoshikazu Nakagawa et al. | 弥合 ML 代理模型与生产工程工具之间的鸿沟，将玻璃纤维零件分析时间从 25 小时缩短至分钟级。 |
| [Generalist Meets Specialists: An Evolving Multimodal Agent with Persistent Tool Orchestration for Traffic Scenario Understanding](http://arxiv.org/abs/2611.25868v1) | Linjia Kang, Binhan Jiang et al. | 将通用 VLM 与专用感知工具结合，实现跨多样化视觉条件的鲁棒交通场景理解。 |
| [Collision-Free Is Not Enough: Passage-Conditioned Navigation for Wheeled-Legged Robots](http://arxiv.org/abs/2611.25788v1) | Wai Ka Sun, Waiyiu Pong et al. | 解决无碰撞路径规划与成功机器人导航之间的差距，通过环境条件化的运动技能选择实现。 |
| [Harnessing Medical Visual-Language Models with Agentic Evidence Management](http://arxiv.org/abs/2611.25840v1) | Qiming Huang, Hanze Dong et al. | 评估医学 VLM Agent 如何利用分割证据，提出将掩码质量与下游推理效果分离的基准。 |
| [From Reliance to Overreliance: Taxonomizing and Detecting Relational Risks in AI Companionship](http://arxiv.org/abs/2611.25734v1) | Viet Cuong Nguyen, Fiona Li et al. | 引入陪伴 AI 情感过度依赖风险分类法，将行为指标可操作化以实现负责任部署。 |
| [Auto-Alpha: A Framework for Autonomous Factor Research](http://arxiv.org/abs/2611.25732v1) | Hui Cai, Kangcheng Deng et al. | 连接经济假说生成与测试驱动实现，实现自主量化金融研究。 |

---

## 3. 研究趋势信号

今日投稿揭示**四个汇聚轨迹**：

1. **推理多样性作为核心关切**：随着 RLVR 成为后训练标准，论文 18 和 19 记录并着手解决策略塌陷问题——模型在多种有效路径存在的情况下收敛到相同的推理路径。这将推动对多样性指标和训练干预的需求。

2. **部署 Agent 中的记忆与知识时效性**：论文 32、33 和 44 共同表明，领域正从纯能力基准转向**运营可靠性**——Agent 如何随时间维护关于世界和用户的准确信念，而不产生幻觉或干扰。

3. **流畅输出之上的可验证推理**：医学 LLM 论文（23）是更广泛趋势的典型：从评估最终答案准确性转向评估**推理完整性**。随着 AI 进入受监管领域，对神经符号接地和可执行产物的需求将增长。

4. **扩散语言模型的低预算部署**：论文 24 和 43 关注推理效率，扩散 LLM 正从架构创新走向实践考量。随着企业评估自回归模型的替代方案，预计将与部署基础设施研究（论文 20）趋同。

---

## 4. 深度阅读推荐

1. **[Many Solutions, One Answer: Search Order Shapes the Default Solutions of Language Models](http://arxiv.org/abs/2611.25916v1)**  
   *推荐理由*：这篇论文揭示了 LLM 处理多解问题时一个微妙但根本的偏见——系统性的默认偏好由训练动态而非问题结构塑造。对于构建评估流程或在关键场景部署 LLM 的从业者，理解这些偏见至关重要。其方法论（使用已知解集的可控谜题实验）特别优雅且可复现。

2. **[Verifiable Logic in Medical LLMs: A Critical Review of Agentic Clinical Reasoning Optimization and Neuro-Symbolic Grounding](http://arxiv.org/abs/2611.25898v1)**  
   *推荐理由*：随着 LLM 进入临床决策支持领域，这篇论文揭示了标准基准无法检测的危险失效模式：通过逻辑无效推理产生流畅、自信输出的现象。对神经符号接地的呼吁为领域提供了具体方向，其对当前评估实践的批评具有超越医学领域的影响。

3. **[ROAM-GRPO: Enforcing Reasoning Diversity in GRPO via Routed Off-mode Approach Mining](http://arxiv.org/abs/2611.25926v1)**  
   *推荐理由*：RLVR 微调现已无处不在，但策略塌陷削弱了使 LLM 有价值的本质多样性。本文提供了一个不牺牲平均性能的原则性解决方案——对任何从事后训练的开发者都具有直接价值。Off-mode approach mining 的概念是新颖的，且很可能超越所测试的具体基准得到应用。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*