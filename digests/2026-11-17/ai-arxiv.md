# ArXiv AI 研究日报 2026-11-17

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 31 篇论文 | 生成时间: 2026-11-17 04:44 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest from English to Simplified Chinese. I need to translate the content while maintaining the Markdown structure exactly and using natural technical Chinese register. Let me translate section by section.

Key things to preserve:
- URLs and links
- Code/technical terms
- Emoji
- Tables with alignment
- Chinese should be in natural technical register

Let me translate:
</think>


# ArXiv AI 研究速递

**日期：** 2026-11-17 | **类别：** cs.AI, cs.CL, cs.LG | **分析论文数：** 31

---

## 1. 今日要闻

今日 ArXiv 投稿揭示了三个重要研究方向。首先，**智能体记忆系统**受到广泛关注，多篇论文涉及工具使用智能体的情景记忆/程序记忆以及智能体记忆的整体评估框架——这表明学界对长时程智能体能力及其相关风险的关注度持续上升。其次，**LLM 部署效率**仍是关键议题，新研究聚焦于设备端 MoE 推理加速和长输出场景下的智能 KV 缓存管理。第三，**评估严谨性**正受到严格审视，多篇元分析论文考察了 LLM 技术报告的可复现性，以及规范说明显式性对代码生成质量的影响。

---

## 2. 重点论文

### 🧠 大语言模型

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [暴露新颖性：40 份开源 LLM 技术报告中的消融研究、可复现性与透明度分析](http://arxiv.org/abs/2611.20003v1) | Bahaeddin Türkoğlu 等 | 分析了 2025 年以来的 48 个新 LLM 架构，发现消融研究和可复现性声明存在普遍不足。提出了评估技术报告严谨性的框架，对负责任的 AI 开发具有重要意义。 |
| [跨模态对齐的关键因素](http://arxiv.org/abs/2611.20000v1) | Yipeng Sun, Jiajun Wang 等 | 在五个数据集和四种模态上测试零样本配对对齐，考察柏拉图表示假说。深化了对视觉、文本、音频、深度等不同编码器如何趋同的理解。 |
| [对话历史对 LLM 推理的影响：沉默的代价](http://arxiv.org/abs/2611.20071v1) | Ali Şenol 等 | 研究累积对话历史如何导致多轮系统准确率下降。引入过程级质量指标，可在准确率下降显现前进行预测，从而实现主动干预。 |
| [前沿必须拓展](http://arxiv.org/abs/2611.20049v1) | Martin Schroder 等 | 证明 4B 参数模型可自我提出训练问题并从解释器反馈中学习，在新考试中准确率提升约一倍。展示了通过自生成课程实现无限改进的潜力。 |
| [GEM-MM：基于熵引导偏好对齐减少 VLM 幻觉](http://arxiv.org/abs/2611.20016v1) | Yuanshan Chua, Xuejiao Zhao 等 | 通过熵引导偏好对齐（而非标准 DPO）解决 VLM 幻觉问题。在偏好数据有限的情况下提升视觉语言模型的可靠性。 |

### 🤖 智能体与推理

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [带步骤的矩阵：面向工具使用智能体与机器人的情景记忆与程序记忆方法](http://arxiv.org/abs/2611.20230v1) | Jürgen Paulhart, Peter Schüller 等 | 引入记忆架构，解决生产系统中智能体失败和虚假成功判定的问题。使智能体能够避免重复过去错误，从经过验证的结果而非假设结果中学习。 |
| [HEAMS：智能体记忆系统的整体评估](http://arxiv.org/abs/2611.20144v1) | Chirag Goel, Jacob Lavoie 等 | 提出智能体记忆的综合评估框架，涵盖信息披露风险、抗纠正性和超同意记忆。为 AI 智能体中安全的记忆持久化建立基准。 |
| [深度研究智能体的安全研究：攻击面、防守、基准与议程](http://arxiv.org/abs/2611.20045v1) | Yang Luo, Guangpu Chen 等 | 系统梳理深度研究智能体在检索、规划、证据综合和报告各阶段的安全研究。建立自主研究系统的攻击分类学和防御策略。 |

### 🔧 方法与框架

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [SWE-CoWork：将编码智能体作为数字员工进行基准测试](http://arxiv.org/abs/2611.20218v1) | Xinping Lei, Minghao Liu 等 | 引入包含 101 个仓库和 11 种语言共 101 项开发任务的基准测试，将编码智能体视为员工进行评估。在组织情境中考察协作、验证和需求理解能力。 |
| [CECAR：缓存与专家协同感知的路由加速设备端 MoE LLM 推理](http://arxiv.org/abs/2611.20119v1) | Byeongju Kim, Hoonki Lee 等 | 通过缓存与专家协同感知路由实现实用的设备端 MoE LLM 部署。解决了稀疏专家激活在资源受限设备上不可行的内存瓶颈问题。 |
| [长输出 LLM 服务中让抢占变得高效](http://arxiv.org/abs/2611.20106v1) | Ziji Shi, Xinyi Wan 等 | 识别并解决长输出推理 LLM 在抢占期间重复丢失状态的 KV 抖动问题。提升持续推理工作负载的吞吐量和延迟表现。 |
| [RoboKit：加速机器人学习的并行可微优化](http://arxiv.org/abs/2611.20185v1) | Jianglong Ye, Xuanbin Peng 等 | 提供 GPU 并行多种子求解器，实现比任务特定基线快 2-60 倍的加速。在性能与灵活性之间取得平衡，适用于多样化的机器人优化问题。 |

### 📊 应用

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [决策模型能否从癌症病理报告中提取临床数据？](http://arxiv.org/abs/2611.20129v1) | Indranil Mallick, Paromita Roy 等 | 评估决策模型（Nimble 9B, Tev1 4B）在临床文本提取中的表现，发现准确率可观但存在校准挑战。这是该新兴模型类别在医疗场景中的首次系统性评估。 |
| [FRAAC：面向基于象形图的 AAC 法国多模态 LLM](http://arxiv.org/abs/2611.20094v1) | Alexandre Audibert, François Portet 等 | 引入用于辅助沟通的多模态 LLM 和数据集，通过象形图实现。解决关键可访问性缺口，使可靠的象形图解读和生成成为可能。 |
| [MT-RGCN-DTI：面向药物-靶标相互作用的多任务关系图卷积网络](http://arxiv.org/abs/2611.20109v1) | Dheeran Sankaran, R Yadunandan 等 | 利用多任务关系图卷积网络整合异构数据源进行药物-靶标相互作用预测。通过提升预测精度加速早期药物发现。 |

---

## 3. 研究趋势信号

今日投稿释放出若干新兴方向信号。**智能体安全与记忆**正快速成熟——从基础记忆实现到涵盖隐私、纠正和同意的综合评估框架。**设备端 AI** 持续积蓄势能，实用 MoE 推理解决方案不断涌现，表明部署模式正从云中心向边缘原生架构演进。**LLM 评估严谨性**正受到迟来的关注，元分析论文揭示的可复现性差距可能重塑学界评估技术贡献的方式。值得注意的是，**自监督改进**——通过自生成课程实现（论文 20）——暗示了一种模型可无限自主拓展能力的范式，这一方向对 AI 发展轨迹具有深远影响。

---

## 4. 值得深度阅读

1. [**SWE-CoWork：将编码智能体作为数字员工进行基准测试**](http://arxiv.org/abs/2611.20218v1) — 该基准代表了一种范式转变：从评估孤立的编码能力，到在真实组织工作流中衡量智能体效能。这套包含 101 项任务、覆盖多种语言的基准设计，提供了迄今对 AI 智能体作为团队成员表现最全面的评估，对软件工程实践具有直接指导意义。

2. [**HEAMS：智能体记忆系统的整体评估**](http://arxiv.org/abs/2611.20144v1) — 随着 AI 智能体获得持久化能力，一个关键缺口亟待填补：如何在任务准确率之外评估记忆系统？该框架涵盖信息披露、抗纠正性和保留等风险，为负责任的智能体开发提供了必要指引。

3. [**暴露新颖性：40 份开源 LLM 技术报告中的消融研究、可复现性与透明度分析**](http://arxiv.org/abs/2611.20003v1) — 2025 年以来已发布 48 个新 LLM 架构，理解其中何为真正创新、何为增量改进愈发重要。这篇元分析提供的技术严谨性系统评估方法，对研究者和实践者均有裨益。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*