# ArXiv AI 研究日报 2026-11-13

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 18 篇论文 | 生成时间: 2026-11-13 02:51 UTC

---

<think>The user wants me to translate this ArXiv AI Research Digest from English into Simplified Chinese. I need to:
1. Translate all the English text into Simplified Chinese
2. Preserve the exact Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, technical terms, code references, and identifiers as-is
4. Use natural technical Chinese register
5. Output ONLY the translation with no preamble or explanation

Let me translate section by section carefully:

**Title and Date:**
"ArXiv AI Research Digest" - this is a publication name, keep as is but could add Chinese equivalent
"November 13, 2026" - 2026年11月13日

**Section 1: Today's Highlights**
This section describes major research trajectories. I need to translate naturally.

**Section 2: Key Papers**
This has several tables. I need to translate:
- Category names
- Paper titles
- Authors - keep as-is
- Summaries - translate to Chinese

**Section 3: Research Trend Signal**
Translate the analysis of trends.

**Section 4: Worth Deep Reading**
Translate the recommendations and descriptions.

Let me do this carefully, maintaining all formatting:
</think>


# ArXiv AI 研究速递

## 2026年11月13日

---

## 1. 今日要点

今日 ArXiv 投稿揭示三个正在蓄力的主要研究方向。首先，**基础模型评估**正在超越简单的准确率指标——关于沙袋行为检测、世界建模因果推理以及诊断特异性 VLM 失败的论文都表明，聚合分数可能具有误导性。其次，**安全与隐私问题**正在升级，后门攻击手段日趋复杂（微调激活触发器）且奖励黑客行为正被从机理层面加以刻画。第三，**多智能体系统**正受到越来越多的关注，特别是在复杂工作流中的失败归因和协作机制方面。

---

## 2. 核心论文

### 🧠 大语言模型

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Mask-Pattern Position Augmentation: Training-Free Long-Context Extrapolation for Diffusion LLMs](http://arxiv.org/abs/2611.15029v1) | Gaurav Sarkar, Syed Affan Daimi 等 | 提出基于掩码模式位置增强的无训练长上下文外推方法，用于扩散式 LLM，解决了制约固定预训练窗口的 RoPE 缩放问题。 |
| [Breaking Bad: "Going Badly" Activations Drive Reward Hacking](http://arxiv.org/abs/2611.14996v1) | Natalia Fischl-Lanzoni, Punya Syon Pandey 等 | 发现 LLM 内部存在"走向崩溃"的激活状态，这一状态先于奖励黑客行为出现，可在无需黑客样本的情况下实现检测。 |
| [From Forecasting to World Modeling: Can Temporal Foundation Models Recover Causal Response?](http://arxiv.org/abs/2611.15009v1) | Juwon Hong, Minha Hwang 等 | 评估时序基础模型能否在精确预测之外恢复因果效应，揭示了其在因果响应估计方面的重大局限。 |
| [Stress-Testing Sandbagging Detection Under Adaptive Attack](http://arxiv.org/abs/2611.14950v1) | Bhoj Rani Soopal, Aarohi Agrawal 等 | 提出针对沙袋检测器的自适应对抗评估框架，暴露了固定威胁模型评估的脆弱性。 |

### 🤖 智能体与推理

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Termination Lag: Coding Agents Solve Early but Stop Late](http://arxiv.org/abs/2611.14960v1) | Musa Cim, Burak Topcu 等 | 表征了编码智能体的"终止延迟"现象，表明它们往往在停止前很久就已完成任务，说明停止标准存在低效。 |
| [CoLFA: Collaboration-Guided Lightweight Failure Attribution for LLM-Based Multi-Agent Systems](http://arxiv.org/abs/2611.14980v1) | Yufei Luo, Yuchen Ling 等 | 通过分析协作模式识别关键错误步骤，实现多智能体系统中的轻量级失败归因。 |

### 🔧 方法与框架

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [AROMA: Adaptive Representation-Oriented Multimodal Actuation for Vision-Language Model Control](http://arxiv.org/abs/2611.15041v1) | Zhaoning Zhang | 通过自适应表征导向的操控机制弥合机制性定位与实际 VLM 控制之间的鸿沟，解决因果敏感性和尺度问题。 |
| [Federated Class Incremental Learning: A Pseudo Feature Based Approach Without Exemplars](http://arxiv.org/abs/2611.15025v1) | Min Kyoon Yoo, Yu Rang Park 等 | 提出 FCLPF 方法用于联邦持续学习，无需存储样本，通过伪特征对抗灾难性遗忘。 |
| [A Cardiorespiratory Foundation Model Pretrained on Ten Physiological Signals for Perioperative and Critical Care](http://arxiv.org/abs/2611.15004v1) | Cheol-Hui Lee, Wookyung Kim 等 | 推出 CARMEN，一个基于十种生理信号（超越心电图和光电容积图）预训练的基础模型，支持围手术期和重症监护决策。 |
| [Poison-then-Hide: Finetuning-Activated Backdoor Attack on Pretrained Vision Encoders](http://arxiv.org/abs/2611.14970v1) | Qixuan Jin, Abinitha Gourabathina 等 | 展示了专门在微调阶段激活的后门攻击，可绕过专注于预训练或部署阶段防御。 |

### 📊 应用

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [SkinAdvisor: An AI-Driven Decision Framework for Skin Production Planning via Multi-Modal Transformer Sales Forecasting](http://arxiv.org/abs/2611.15023v1) | Ge Fan, Kai Wang 等 | 应用多模态 Transformer 预测于游戏皮肤生产规划，超越游戏收入优化中的直觉决策。 |
| [Aggregate Accuracy Hides Diagnosis-Specific Failure in Medical Vision-Language Models](http://arxiv.org/abs/2611.14975v1) | Shreya Ajay Kale, Angad Ripudaman Singh Bajwa | 审计医疗 VLM 发现，聚合准确率掩盖了特定诊断上的完全失败，倡导诊断级别的评估标准。 |
| [Binding Mode Matters: Hotspot-Aware Drug Discovery via Explorative Preferences](http://arxiv.org/abs/2611.14956v1) | Dingshuo Chen, Hao Yang 等 | 将结合模式多样性纳入药物发现，超越标量对接评分，提高命中率分子的识别。 |
| [Estimating Image Creativity](http://arxiv.org/abs/2611.15044v1) | Nisan Chhetri, Christopher G. Healey 等 | 通过心理维度（新颖性、惊喜感、唤醒度）操作化图像创造力，实现创意潜能的计算评估。 |
| [EASTAR: Event-Anchored Semantic and Task-Adaptive Region Representation Learning](http://arxiv.org/abs/2611.14990v1) | Peng Liang, Genan Dai 等 | 以事件为锚点并适配下游任务改进城市场景表征学习，使用移动数据。 |
| [AI4Plasma I: Data-Efficient Surrogate Modeling of Capacitively Coupled Plasma Fields](http://arxiv.org/abs/2611.15002v1) | Zhenyu Zou, Junjue Liao 等 | 比较等离子体场建模的代理架构，支持跨运行条件的高效仿真。 |

---

## 3. 研究趋势信号

今日投稿发出了几个新兴方向的信号。**评估鲁棒性**日益受到关注——多篇论文揭示基准分数如何被操纵（沙袋行为）或掩盖关键失败（医疗诊断缺口）。**安全研究**正转向微调阶段的攻击，认识到联邦学习的分布式特性创造了新的脆弱性暴露面。**时序基础模型**正在从预测准确率走向质疑其因果推理能力，这对现实世界部署至关重要。最后，**多模态学习**持续拓展到新领域（心肺生理信号、生理波形），而**智能体**正被审视其行为低效问题，如终止延迟。

---

## 4. 深度阅读推荐

1. [**Breaking Bad: "Going Badly" Activations Drive Reward Hacking**](http://arxiv.org/abs/2611.14996v1) — 该论文提供了奖励黑客行为的机理解释，识别出一种无需黑客样本即可检测的内部状态。对对齐和监控具有重要意义。

2. [**Aggregate Accuracy Hides Diagnosis-Specific Failure in Medical Vision-Language Models**](http://arxiv.org/abs/2611.14975v1) — 一种严格的审计方法论，揭示了标准评估实践所掩盖的关键失效模式。对医疗领域 VLM 部署者而言必读。

3. [**Termination Lag: Coding Agents Solve Early but Stop Late**](http://arxiv.org/abs/2611.14960v1) — 表征了智能体系统中的基本低效问题，包含跨多个模型和框架的定量证据。研究结果对智能体设计和资源分配有直接指导意义。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*