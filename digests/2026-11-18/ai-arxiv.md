# ArXiv AI 研究日报 2026-11-18

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-11-18 03:49 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest from English to Simplified Chinese. I need to:

1. Translate all headings, body text, table content, and list items
2. Preserve the markdown structure exactly (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
3. Keep URLs, project names, slugs, identifiers as-is
4. Use natural technical Chinese register
5. Output ONLY the translation, no preamble or explanation

Let me translate section by section carefully.

---

# ArXiv AI Research Digest

**Date:** November 18, 2026  
**Categories:** cs.AI, cs.CL, cs.LG (50 papers)

---

## 1. Today's Highlights

Today's submissions reveal a strong focus on **agent reliability and safety**, with multiple papers addressing the gap between planning and execution in LLM-based agents. **World models** continue to gain traction—particularly for robotics and autonomous systems—with new work on correcting visual drift and real-time inference. There's notable attention to **evaluation methodology**: new benchmarks target scientific workflows, depression analysis evidence-grounding, and real-world decision-making. The emergence of **quantum machine learning** for ship performance data and **geospatial foundation models** for marine domains signals expanding AI applications beyond terrestrial settings. Meanwhile, **prompt optimization auditing** and **conformal prediction** under constraints highlight growing concerns about methodology rigor and uncertainty quantification in deployment.

---

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Worldviews in Large Language Models](http://arxiv.org/abs/2611.22670v1) | Edmundo Lopez-Sola, Shamil Chandaria, et al. | Introduces the concept of "worldviews" as deeper descriptors of LLM agents than personas, arguing that an agent's beliefs about reality shape alignment behavior. This reframing offers a new theoretical lens for alignment research. |


| [The Between-Round Decision in Autonomous Research: An LLM Controller That Reads the Whole Trajectory](http://arxiv.org/abs/2611.22661v1) | Caoxin Wang, Shengkai Gan, Xiang Hu, et al. | Proposes an LLM controller that evaluates entire experimental trajectories to decide whether to refine or pivot research directions, rather than relying on static proposals. Improves autonomous research efficiency by grounding decisions in actual results. |
| [Simplicity Goes Far: Auditing Prompt Optimizers with Demonstration-Conditioned Prompt Search](http://arxiv.org/abs/2611.22605v1) | Bohe Chen | Audits automatic prompt optimization methods by controlling for the generate-and-select step, revealing that reported gains may conflate optimizer contributions with larger demonstration sets. Highlights the need for rigorous evaluation baselines. |
| [Right Labels, Wrong Reasons: Signed Feature Attribution for Multi-Label Explainability](http://arxiv.org/abs/2611.22515v1) | Kenton White | Proposes FLEX, a global surrogate using Fisher LDA for multi-label explainability that identifies when classifiers assign correct labels for incorrect reasons. Addresses the problem of diffuse feature combinations lacking dominant features. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [PACT: Plan-Action Consistency Training by Preserving Correct Plans and Repairing Actions in GUI Agents](http://arxiv.org/abs/2611.22591v1) | Zhuohan Cai, Zhangxuan Gu, Runze Li, et al. | Addresses the execution gap in GUI agents where correct plans fail due to mismatched actions, using outcome-supervised RL to preserve correct reasoning while repairing action sequences. Critical for reliable multi-step workflow automation. |
| [EvoSkill-S1: Evolving Reusable Skills with Genetic-Inspired Operators](http://arxiv.org/abs/2611.22610v1) | Yujun Wang, Jiqiang Li, Yinuo Lu, et al. | Introduces genetic-inspired operators for directly improving skill banks in language-model agents, moving beyond indirect rollout-driven accumulation. Enables deeper, more controlled skill refinement for accumulated problem-solving experience. |
| [When Agent Skills Go Stale: Runtime Behavior and Selective Maintenance in Evolving Environments](http://arxiv.org/abs/2611.22525v1) | Ömer Faruk Akgül, Shuli Jiang, Yuting Zhang, et al. | Investigates how skill state becomes outdated when environments change and proposes selective maintenance strategies to preserve relevant experience while discarding stale components. Essential for long-term agent deployment. |
| [JET: Just-Enough Exploration Tuning for Efficient Tool-Calling Agents in Repository-Level Question Answering](http://arxiv.org/abs/2611.22539v1) | Yoonho Choi, Taehyeon Han, Seonghyeon Lee | Identifies and corrects over-exploration behavior in LLM agents that continue invoking tools after sufficient information is gathered. Reduces unnecessary computation while maintaining answer quality. |
| [Evolution Under Fire: Evolving Agent Safety Harnesses with Adaptive Injection Stressors](http://arxiv.org/abs/2611.22583v1) | Yujun Wang, Yilun Liu, Jinhe Bi, et al. | Evolves safety harnesses for tool-using agents through adaptive injection of malicious instructions, moving beyond hand-designed defenses. Addresses the central security challenge of mixed legitimate and adversarial inputs through the same channel. |
| [LMLineage: Content Lineage and Context Governance for LLM Agents](http://arxiv.org/abs/2611.22511v1) | Wei Hou, Jingxin Geng, Xin Chen, et al. | Proposes an out-of-band system attributing every output sentence to its source context in agent sessions, extending interpretability beyond internal weights to cover reasoning and decision-making over multi-source context. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Know When to Zoom: How Small Is Too Small for Vision-Language Models?](http://arxiv.org/abs/2611.22709v1) | Siddharth Vohra, Min Xu | Quantifies how image resizing by vision-language services degrades small detail recognition (e.g., cars reduced to 6 pixels in drone photos) and measures the practical limits of current VLMs. Reveals a critical but overlooked failure mode in deployed systems. |
| [FVScore: Specification-Driven Neuro-Symbolic Video Evaluation](http://arxiv.org/abs/2611.22673v1) | Do Xuan Long, Long T. Le, Yiwen Song, et al. | Introduces a neuro-symbolic framework for aligning video generation evaluation with human judgments by tracing scores to specific temporal violations against specifications. Improves interpretability of automatic video assessment. |
| [DAQ: Decision-Aligned Post-Training Quantization for Spiking Transformers](http://arxiv.org/abs/2611.22611v1) | Jialin Chen, Xiaochen Zhao, Aili Wang | Proposes decision-aligned PTQ for spiking transformers that preserves task-relevant information during quantization, addressing the unique challenge of maintaining spike-based temporal dynamics under reduced precision. |
| [EDA: Observe, Verify, and Assess for Evidence-Grounded Multimodal Depression Analysis](http://arxiv.org/abs/2611.22648v1) | Changzeng Fu, Ming Shang, Xinyi Zhang, et al. | Presents an evidence-grounded framework for depression assessment that makes individual observations and their relevance to decisions inspectable, addressing the opacity of global behavioral summarization in existing methods. |
| [AlignedHPO: Efficient Surrogate-Guided Loss Hyperparameter Optimization](http://arxiv.org/abs/2611.22658v1) | Ivan Karpukhin, Andrey Savchenko | Enables efficient tuning of differentiable loss hyperparameters (weights, scales, margins) through surrogate-guided optimization, replacing expensive black-box search with gradient-aware methods. Reduces manual tuning effort for complex loss functions. |
| [The Price of Hard Coverage Constraints in Online Conformal Prediction](http://arxiv.org/abs/2611.22646v1) | Mingrui Liu | Analyzes how hard coverage constraints in sequential conformal prediction affect miscoverage fluctuations over time, providing theoretical bounds for deployment scenarios requiring stable uncertainty quantification. |
| [Social Signal Bench: Evidence-Weighted Evaluation of Co-occurring Social Signals in Video and Audio](http://arxiv.org/abs/2611.22704v1) | Siddharth Ravi, Anders R. Bargum, Hugo Anselme, et al. | Introduces a benchmark for evaluating recognition of co-occurring social signals (interest, hesitation) in conversations, addressing the limitation of multi-label F1 that overlooks semantic relationships between signals. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Making the World React Realistically: A Closed-Loop Interactive World Model for Autonomous Driving](http://arxiv.org/abs/2611.22691v1) | Jia Hu, Yang Chang, Panqu Wang, et al. | Proposes a world model for autonomous driving that ensures both behavioral realism and visual fidelity by modeling vehicle interactions, enabling training and evaluation beyond recorded logs. |
| [Right Diagnosis, Unsafe Route: Auditing Clinical AI Decision Trajectories and Corrective Oversight](http://arxiv.org/abs/2611.22612v1) | Guanqiao Chen, Wei Jiang, Shu Zhang, et al. | Audits clinical AI systems that reach correct diagnoses through potentially harmful intermediate steps, revealing that final-score evaluations miss critical safety issues in decision trajectories. |
| [SciWorkBench: A Benchmark for Real Scientific Workflows](http://arxiv.org/abs/2611.22490v1) | Yuchen Zhang, Taolin Han, Jinghang Wang, et al. | Evaluates whether current LLM agents can complete projects like real scientists, introducing benchmarks for planning, execution, and refinement in authentic scientific workflows. Sets a new standard for agent capability assessment. |
| [DARWIN: a Geospatial Foundation Model for Marine Intelligence](http://arxiv.org/abs/2611.22496v1) | Coen van den Elsen, Laurens Geffert | Presents the first geospatial foundation model for marine domains, addressing challenges unique to ocean environments: missingness, multi-modal physical variables, sparse labels, and dynamic biogeochemical processes. |
| [MillBill: A Machining Agent with Geometric Feedback](http://arxiv.org/abs/2611.22565v1) | Gennadii Savrasov, Artem Slavin, Soslan Kabisov, et al. | Introduces an agent that separates geometry from process knowledge in CNC machining program generation, using geometric feedback to validate and correct toolpaths rather than requiring the model to handle numerical execution. |
| [RehearsalBench: Can AI Predict What Happens When You Change a Company?](http://arxiv.org/abs/2611.22480v1) | Mika Siddiqui, Tharaka Perera | Benchmarks AI models' ability to diagnose operations, choose interventions, and predict outcomes when companies change their processes—addressing the growing demand for AI-driven organizational decision support. |

---

## 3. Research Trend Signal

Today's submissions reveal several emerging directions. **Agent skill lifecycle management** is gaining attention, with work on staled skills, honeypot deception coherence, and safety harness evolution suggesting a maturation from building agents to maintaining them. **Evaluation rigor** is increasingly prioritized—papers auditing prompt optimizers, conformal prediction constraints, and clinical decision trajectories indicate the community is systematically addressing credibility gaps. **World models for embodied AI** are expanding beyond gaming into machining, marine environments, and surgical applications, with new focus on correcting long-horizon drift and achieving real-time inference. The **quantum-classical boundary** for ML is being tested in ship performance domains, while **geospatial foundation models** signal a shift toward domain-specific pretrained representations. Finally, **multi-source context governance** (LMLineage) and **evidence-grounded analysis** (EDA, FVScore) point to growing demand for interpretable, auditable AI systems.

---

## 4. Worth Deep Reading

1. **[PACT: Plan-Action Consistency Training by Preserving Correct Plans and Repairing Actions in GUI Agents](http://arxiv.org/abs/2611.22591v1)**  
   *Why:* The execution gap between planning and action is a fundamental reliability problem for deployed agents. This paper provides a clear problem definition, a theoretically motivated solution (outcome-supervised RL with plan preservation), and empirical validation that addresses a bottleneck currently limiting real-world agent adoption.

2. **[SciWorkBench: A Benchmark for Real Scientific Workflows](http://arxiv.org/abs/2611.22490v1)**  
   *Why:* As AI agents are increasingly deployed for scientific research, understanding their actual project-level capability is critical. This benchmark defines a rigorous evaluation framework that moves beyond task-level metrics to assess end-to-end scientific workflow completion—a timely contribution with significant implications for AI-assisted discovery.

3. **[Know When to Zoom: How Small Is Too Small for Vision-Language Models?](http://arxiv.org/abs/2611.22709v1)**  
   *Why:* This paper uncovers a practical, widely-relevant failure mode in deployed VLMs caused by image preprocessing, with concrete quantitative analysis of resolution degradation across commercial services. The methodology and findings are immediately applicable to anyone building or deploying vision-language systems.

--- I'm translating the key insights about agent reliability, world models, and evaluation methods across these papers. The work focuses on bridging planning-execution gaps in LLM-based systems, particularly for robotics and autonomous applications where visual drift and inference speed matter. I'm also noting the emergence of quantum machine learning for ship performance and geospatial foundation models for marine intelligence, alongside growing concerns about prompt optimization rigor and conformal prediction reliability.

Agent skill management is maturing from initial development to ongoing maintenance, while world models are extending into embodied AI applications beyond gaming—machining, marine environments, and surgical domains—with emphasis on correcting long-horizon drift and enabling real-time inference. The quantum-classical boundary is being explored in ship performance contexts, and geospatial foundation models represent a shift toward domain-specific pretrained representations. Multi-source context governance and evidence-grounded analysis are responding to demand for interpretable, auditable AI systems.

For deep reading, I'm focusing on PACT's plan-action consistency training, which addresses the execution gap through outcome-supervised RL with plan preservation to overcome a key bottleneck in real-world agent adoption. SciWorkBench offers a rigorous framework for evaluating agent capability beyond task-level metrics. Know When to Zoom identifies a critical but overlooked failure mode in deployed vision-language systems caused by image preprocessing, with quantitative analysis applicable to anyone building VLMs.
</think>


# ArXiv AI 研究文摘

**日期：** 2026 年 11 月 18 日
**分类：** cs.AI, cs.CL, cs.LG（50 篇论文）

---

## 1. 今日要闻

今日投稿集中体现了对 **Agent 可靠性和安全性** 的高度关注，多篇论文聚焦于 LLM Agent 中规划与执行之间的鸿沟。**世界模型** 持续受到关注——尤其在机器人与自动驾驶领域——新工作聚焦于视觉漂移校正和实时推理。**评估方法论** 也备受重视：新的基准测试覆盖科学工作流、抑郁症循证分析以及真实决策场景。**量子机器学习** 在船舶性能数据中的应用以及面向海洋领域的 **地理空间基础模型** 表明 AI 正在向陆地以外的环境扩展。与此同时，**提示优化审计** 和带约束的 **共形预测** 突显出方法论严谨性和部署中不确定性量化的日益增长的重要性。

---

## 2. 重点论文

### 🧠 大语言模型

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Worldviews in Large Language Models](http://arxiv.org/abs/2611.22670v1) | Edmundo Lopez-Sola, Shamil Chandaria, et al. | 引入"世界观"概念，将其作为比人物设定更深入的 LLM Agent 描述符，认为 Agent 对现实的信念塑造了其对齐行为。这一重新框架为对齐研究提供了新的理论视角。 |
| [The Between-Round Decision in Autonomous Research: An LLM Controller That Reads the Whole Trajectory](http://arxiv.org/abs/2611.22661v1) | Caoxin Wang, Shengkai Gan, Xiang Hu, et al. | 提出一种评估整个实验轨迹来决定是否精炼或转向研究方向的 LLM 控制器，而非依赖静态提案。通过基于实际结果做决策来提高自主研究效率。 |
| [Simplicity Goes Far: Auditing Prompt Optimizers with Demonstration-Conditioned Prompt Search](http://arxiv.org/abs/2611.22605v1) | Bohe Chen | 通过控制"生成-筛选"步骤来审计自动提示优化方法，揭示报告的收益可能混淆了优化器贡献与更大演示集的效果。凸显了建立严格评估基线的必要性。 |
| [Right Labels, Wrong Reasons: Signed Feature Attribution for Multi-Label Explainability](http://arxiv.org/abs/2611.22515v1) | Kenton White | 提出 FLEX，一种使用 Fisher LDA 的全局代理模型，用于多标签可解释性，可识别分类器是否以错误原因给出正确标签。解决了特征组合弥散且缺乏主导特征的问题。 |

### 🤖 Agent 与推理

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [PACT: Plan-Action Consistency Training by Preserving Correct Plans and Repairing Actions in GUI Agents](http://arxiv.org/abs/2611.22591v1) | Zhuohan Cai, Zhangxuan Gu, Runze Li, et al. | 解决 GUI Agent 中因动作不匹配导致正确规划执行失败的执行鸿沟问题，使用结果监督 RL 保持正确推理同时修复动作序列。对可靠的多步骤工作流自动化至关重要。 |
| [EvoSkill-S1: Evolving Reusable Skills with Genetic-Inspired Operators](http://arxiv.org/abs/2611.22610v1) | Yujun Wang, Jiqiang Li, Yinuo Lu, et al. | 引入遗传启发的算子直接改进语言模型 Agent 的技能库，超越了间接的 rollout 驱动积累方式。实现对累积问题解决经验的更深层、更可控的技能精炼。 |
| [When Agent Skills Go Stale: Runtime Behavior and Selective Maintenance in Evolving Environments](http://arxiv.org/abs/2611.22525v1) | Ömer Faruk Akgül, Shuli Jiang, Yuting Zhang, et al. | 研究技能状态在环境变化时如何过时，并提出选择性维护策略以保留相关经验同时丢弃陈旧成分。对 Agent 的长期部署至关重要。 |
| [JET: Just-Enough Exploration Tuning for Efficient Tool-Calling Agents in Repository-Level Question Answering](http://arxiv.org/abs/2611.22539v1) | Yoonho Choi, Taehyeon Han, Seonghyeon Lee | 识别并纠正 LLM Agent 在已收集足够信息后仍继续调用工具的过度探索行为。在保持答案质量的同时减少不必要的计算。 |
| [Evolution Under Fire: Evolving Agent Safety Harnesses with Adaptive Injection Stressors](http://arxiv.org/abs/2611.22583v1) | Yujun Wang, Yilun Liu, Jinhe Bi, et al. | 通过自适应注入恶意指令来演化工具型 Agent 的安全护栏，超越人工设计的防御。针对合法与对抗输入通过同一通道传入这一核心安全挑战。 |
| [LMLineage: Content Lineage and Context Governance for LLM Agents](http://arxiv.org/abs/2611.22511v1) | Wei Hou, Jingxin Geng, Xin Chen, et al. | 提出一种带外系统，为 Agent 会话中的每个输出句子归属其来源上下文，将可解释性扩展到内部权重之外，覆盖多源上下文上的推理和决策。 |

### 🔧 方法与框架

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Know When to Zoom: How Small Is Too Small for Vision-Language Models?](http://arxiv.org/abs/2611.22709v1) | Siddharth Vohra, Min Xu | 量化视觉语言服务中的图像缩放如何降低细节识别能力（如无人机照片中的车辆被压缩至 6 像素），并测量当前 VLM 的实际极限。揭示了部署系统中的一个关键但被忽视的失效模式。 |
| [FVScore: Specification-Driven Neuro-Symbolic Video Evaluation](http://arxiv.org/abs/2611.22673v1) | Do Xuan Long, Long T. Le, Yiwen Song, et al. | 引入一种神经符号框架，通过将评分追溯到对规格的具体时间违反来对齐视频生成评估与人类判断。提高自动视频评估的可解释性。 |
| [DAQ: Decision-Aligned Post-Training Quantization for Spiking Transformers](http://arxiv.org/abs/2611.22611v1) | Jialin Chen, Xiaochen Zhao, Aili Wang | 提出面向脉冲变压器的决策对齐 PTQ，在量化过程中保留任务相关信息，解决在低精度下维持基于脉冲的时间动态这一独特挑战。 |
| [EDA: Observe, Verify, and Assess for Evidence-Grounded Multimodal Depression Analysis](http://arxiv.org/abs/2611.22648v1) | Changzeng Fu, Ming Shang, Xinyi Zhang, et al. | 提出面向抑郁症评估的循证框架，使个别观察及其与决策的相关性可被检查，解决了现有方法中全局行为摘要的不透明性问题。 |
| [AlignedHPO: Efficient Surrogate-Guided Loss Hyperparameter Optimization](http://arxiv.org/abs/2611.22658v1) | Ivan Karpukhin, Andrey Savchenko | 通过代理引导优化实现可微分损失超参数（权重、尺度、边界）的有效调优，用梯度感知方法替代昂贵的黑盒搜索。降低复杂损失函数的手动调参工作量。 |
| [The Price of Hard Coverage Constraints in Online Conformal Prediction](http://arxiv.org/abs/2611.22646v1) | Mingrui Liu | 分析在线共形预测中硬覆盖约束如何影响随时间推移的覆盖率波动，为需要稳定不确定性量化的部署场景提供理论边界。 |
| [Social Signal Bench: Evidence-Weighted Evaluation of Co-occurring Social Signals in Video and Audio](http://arxiv.org/abs/2611.22704v1) | Siddharth Ravi, Anders R. Bargum, Hugo Anselme, et al. | 引入对话中共现社会信号（兴趣、犹豫）识别的评估基准，解决了多标签 F1 忽略信号间语义关系的局限性。 |

### 📊 应用

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Making the World React Realistically: A Closed-Loop Interactive World Model for Autonomous Driving](http://arxiv.org/abs/2611.22691v1) | Jia Hu, Yang Chang, Panqu Wang, et al. | 提出一种确保行为真实性和视觉保真度的自动驾驶世界模型，通过建模车辆交互使训练和评估超越记录日志。 |
| [Right Diagnosis, Unsafe Route: Auditing Clinical AI Decision Trajectories and Corrective Oversight](http://arxiv.org/abs/2611.22612v1) | Guanqiao Chen, Wei Jiang, Shu Zhang, et al. | 审计通过潜在有害的中间步骤得出正确诊断的临床 AI 系统，揭示最终评分评估会错过决策轨迹中的关键安全问题。 |
| [SciWorkBench: A Benchmark for Real Scientific Workflows](http://arxiv.org/abs/2611.22490v1) | Yuchen Zhang, Taolin Han, Jinghang Wang, et al. | 评估当前 LLM Agent 能否像真正科学家一样完成项目，引入真实科学工作流的规划、执行和精炼基准。确立了 Agent 能力评估的新标准。 |
| [DARWIN: a Geospatial Foundation Model for Marine Intelligence](http://arxiv.org/abs/2611.22496v1) | Coen van den Elsen, Laurens Geffert | 提出首个面向海洋领域的地理空间基础模型，解决海洋环境特有的挑战：缺失性、多模态物理变量、稀疏标注和动态生物地球化学过程。 |
| [MillBill: A Machining Agent with Geometric Feedback](http://arxiv.org/abs/2611.22565v1) | Gennadii Savrasov, Artem Slavin, Soslan Kabisov, et al. | 提出将几何知识与工艺知识分离的 CNC 加工程序生成 Agent，使用几何反馈验证和修正刀路，而非要求模型处理数值执行。 |
| [RehearsalBench: Can AI Predict What Happens When You Change a Company?](http://arxiv.org/abs/2611.22480v1) | Mika Siddiqui, Tharaka Perera | 基准测试 AI 模型在企业变更流程时诊断运营、选择干预和预测结果的能力——应对日益增长的 AI 驱动组织决策支持需求。 |

---

## 3. 研究趋势信号

今日投稿揭示了若干新兴方向。**Agent 技能生命周期管理** 日益受到关注，陈旧技能、蜜罐欺骗一致性以及安全护栏演化等研究暗示社区正从构建 Agent 向维护 Agent 成熟演进。**评估严谨性** 越来越受重视——审计提示优化器、共形预测约束和临床决策轨迹的论文表明社区正在系统性地解决可信度缺口。**面向具身 AI 的世界模型** 正在从游戏扩展到加工、海洋环境和外科应用，聚焦于长时程漂移校正和实时推理。**量子-经典边界** 正在船舶性能领域接受检验，而 **地理空间基础模型** 标志着向领域特定预训练表示的转变。最后，**多源上下文治理**（LMLineage）和 **循证分析**（EDA、FVScore）表明对可解释、可审计 AI 系统的需求不断增长。

---

## 4. 值得深度阅读

1. **[PACT: Plan-Action Consistency Training by Preserving Correct Plans and Repairing Actions in GUI Agents](http://arxiv.org/abs/2611.22591v1)**  
   *推荐理由：* 规划与执行之间的执行鸿沟是部署中 Agent 可靠性的根本问题。本文提供了清晰的问题定义、理论驱动的方法（带规划保留的结果监督 RL），以及解决当前限制实际应用部署瓶颈的实证验证。

2. **[SciWorkBench: A Benchmark for Real Scientific Workflows](http://arxiv.org/abs/2611.22490v1)**  
   *推荐理由：* 随着 AI Agent 日益被部署于科学研究，理解其实际的项目级能力至关重要。本文定义了严格的评估框架，超越了任务级指标来评估端到端科学工作流完成度——对 AI 辅助发现的未来发展具有重大影响。

3. **[Know When to Zoom: How Small Is Too Small for Vision-Language Models?](http://arxiv.org/abs/2611.22709v1)**  
   *推荐理由：* 本文揭示了部署 VLM 中由图像预处理引起的实用且广泛相关的失效模式，提供了跨商业服务的分辨率退化定量分析。方法论和发现对任何构建或部署视觉语言系统的人都有直接应用价值。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*