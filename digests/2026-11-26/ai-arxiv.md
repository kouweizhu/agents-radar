# ArXiv AI 研究日报 2026-11-26

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-11-26 04:19 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest from English to Simplified Chinese. I need to:

1. Translate all the text content while preserving the markdown structure
2. Keep URLs, IDs, technical terms, and project names as-is
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output only the translation, no explanations or markdown fences

Let me carefully translate each section:

**Title**: ArXiv AI Research Digest → ArXiv AI 研究摘要

**Today's Highlights**: Translate the paragraph about today's submissions

**Key Papers**: Translate the headings and table content

**Research Trend Signal**: Translate the trend analysis

**Worth Deep Reading**: Translate the recommendations

I need to be careful with:
- Technical terms that are commonly used in English in Chinese technical writing
- Keeping all URLs and references intact
- Preserving the exact markdown structure including tables
- Using natural Chinese sentence structures

Let me go through it section by section:

Title: ArXiv AI 研究摘要
Today's Highlights section header
Paragraph about submissions
Key Papers header
Categories with their descriptions and tables
Research Trend Signal header and content
Worth Deep Reading header and list

Let me translate carefully:
</think>


# ArXiv AI 研究摘要

## 今日要闻

今日投稿显示，业界正显著推动 **AI 智能体的评估与改进**，使其能在复杂现实场景中更好地运作。值得关注的突破包括：一个用于科学研究智能体的新基准（REE），能够测量开放性问题的改进效果；以及证据表明，编码智能体作为视觉推理器优于视频模型。社区同时在解决 **记忆与可信度** 的关键挑战：多篇论文探讨了 LLM 智能体中的记忆幻觉问题以及蒸馏模型的可信度修复方法。同时，关于从头训练小语言智能体和不依赖 LLM 的权重空间编程等效率导向的研究表明，业界正在向更轻量、更易获取的 AI 系统演进。

---

## 重点论文

### 🧠 大语言模型

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [REE：面向 AI 智能体的科研入学考试](http://arxiv.org/abs/2611.34646v1) | Zeqi Zhou, Minghao Liu 等 | 引入了一个面向自主研究智能体的基准测试，包含开放性科学问题，通过重复实验测量改进效果。为 AI 驱动科学发现建立了严格的评估框架。 |
| [ZeroHero：从零开始训练小型语言智能体](http://arxiv.org/abs/2611.34635v1) | Nikita Sorokin, Zoya Volovikova 等 | 提出了一个利用 LLM 教师从头训练专用小型语言智能体的框架。证明专用智能体可以在最小模型容量下创建。 |
| [理论对 LLM 求解器值几何？](http://arxiv.org/abs/2611.34751v1) | Jun Gao, Shuchao Bi | 研究了提供数学理论如何影响 LLM 问题求解，表明包含正确理论时准确率显著提升。揭示了结构化领域知识在提示中的价值。 |
| [修复蒸馏语言模型的可信度问题](http://arxiv.org/abs/2611.34831v1) | Kumar Shubham, Devendra Vyas 等 | 针对保持下游性能但出现可信度回退的蒸馏模型问题。提出了在不依赖原始蒸馏语料的情况下修复这些缺陷的方法。 |
| [一个模型，多种模式：演化系统提示集成以实现创意生成](http://arxiv.org/abs/2611.34760v1) | Daiwei Chen, Anda He 等 | 解决偏好对齐 LLM 中限制创意多样性的模式坍缩问题。引入在保持质量的同时提升新颖性的集成方法。 |

### 🤖 智能体与推理

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [用代码解决视觉问题：编码智能体是比视频模型更强的视觉推理器](http://arxiv.org/abs/2611.34813v1) | Dezhi Luo, Fengyuan Yu 等 | 证明编码智能体通过程序化分析帧序列，在视觉推理任务上优于视频生成模型。提出向基于代码的视觉理解范式转变。 |
| [TASK Memory：基于激活引导与知识编辑的超越纯文本记忆](http://arxiv.org/abs/2611.34762v1) | Jinkun Zhao, Wenjun Wu | 识别并解决记忆幻觉问题——即正确检索信息但未能正确应用。引入激活引导技术以改善 LLM 智能体的记忆利用。 |
| [当所有 rollout 都失败时：将学习者条件选项拼接到长时序智能体强化学习中](http://arxiv.org/abs/2611.34777v1) | Haowen Hou, Yicheng Liu 等 | 处理长时序 RL 中所有采样轨迹获得零奖励的场景。通过拼接更强模型的选项，使完全失败状态下也能学习。 |
| [RoboEvo²：通过评估器-策略协同进化实现递归机器人自我改进](http://arxiv.org/abs/2611.34675v1) | Chenzhi Liu, Jiehong Lin 等 | 使机器人通过评估器与策略的协同进化来适应陌生环境。推理智能体生成技能适配方案，再通过实践进行精炼。 |
| [VisualMontage：操纵视觉-语言智能体的信念](http://arxiv.org/abs/2611.34603v1) | Jinwei Hu, Lai Wei 等 | 研究协调一致的逼真图像如何影响基于 VLM 的智能体信念的视觉认知串通问题。对理解 AI 智能体中的虚假信息传播具有重要意义。 |

### 🔧 方法与框架

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [μ-Bench：共享交互语音智能体中多用户任务完成基准测试](http://arxiv.org/abs/2611.34920v1) | Qihao Lin, Guanxu Chen 等 | 引入了一个面向语音智能体在共享空间中处理相互依赖的多用户请求的基准测试，包含动态参与者反馈。填补了协作 AI 助手评估的空白。 |
| [BOP-Refer：单目 3D 与 2D 物体定位基准](http://arxiv.org/abs/2611.34862v1) | Tomas Hodan, Vineet Bhat 等 | 首个使用 VLM 生成的指代表达式进行单目 3D 和 2D 物体定位的基准测试。提供对多样化日常和工业物体的全面评估。 |
| [跨稀疏自编码器种子的特征消融迁移](http://arxiv.org/abs/2611.34637v1) | Karl Li | 研究不同 SAE 初始化间特征泛化能力以支持可解释性研究。使视觉编码器中的特征消融研究更加稳健。 |
| [面向后训练视觉-语言-动作模型的数据飞轮](http://arxiv.org/abs/2611.34698v1) | Yuhao Luo, Zihao Sheng 等 | 从失败案例构建目标场景以对 VLA 模型进行后训练，无需大规模部署fleet。为专用平台实现持续改进。 |

### 📊 应用

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [编码智能体过度编辑了多少，为何如此？](http://arxiv.org/abs/2611.34875v1) | Aakash Goel, Benjamin Steenhoek 等 | 通过增量残差归因分析智能体补丁为何比开发者补丁更大。揭示智能体生成代码中的不必要编辑模式。 |
| [电信领域大语言模型的安全、隐私与伦理调查](http://arxiv.org/abs/2611.34868v1) | Joy Bose, Srinivas Adyapak | 全面调查电信领域 LLM 部署挑战，涵盖敏感网络环境中特有的隐私、安全和伦理问题。 |
| [DemoFoundry：利用编码智能体和生成式渲染实现可扩展的真实感机器人数据](http://arxiv.org/abs/2611.34671v1) | Ruixiang Wang, Xinyue Yao 等 | 结合编码智能体与生成式渲染来生产可扩展的真实感机器人演示数据。用物理一致的action监督弥合sim-to-real差距。 |
| [基于迁移学习的 AI 原生自编码器通信频谱适应](http://arxiv.org/abs/2611.34942v1) | Yalin E. Sagduyu, Tugba Erpek | 将迁移学习应用于 AI 原生通信自编码器以实现频谱适应。展示跨信道条件的鲁棒性，无需从头重训练。 |

---

## 研究趋势信号

今日投稿揭示了几个新兴方向。**智能体评估正在成熟**——REE 和 μ-Bench 等基准测试超越了简单的任务完成评估，转向测量改进效果、协作能力和开放性推理。**更精简、更专业的 AI** 趋势明显：ZeroHero 从头训练小型智能体，而"我们真的需要 LLM 吗？"质疑权重空间编程中大模型的必要性。**记忆与可信度**仍是关键，多篇论文针对智能体记忆系统中的幻觉和蒸馏模型问题。**代码即推理**范式正在获得关注，有证据表明程序化分析在视觉理解中优于端到端生成。最后，**安全与隐私**研究正从模型漏洞扩展到系统级问题，包括网络欺骗和 MaaS 安全保证。

---

## 值得深入阅读

1. [**REE：面向 AI 智能体的科研入学考试**](http://arxiv.org/abs/2611.34646v1) — 这个基准测试代表了自主 AI 评估的根本性转变，测量的是重复实验中的改进而非单次任务准确率。鉴于 AI 用于科学发现的趋势，理解这一评估范式至关重要。

2. [**TASK Memory：基于激活引导与知识编辑的超越纯文本记忆**](http://arxiv.org/abs/2611.34762v1) — 记忆幻觉是部署中智能体的一个微妙但关键失败模式。本文既诊断了问题，也通过激活引导提供了解决方案，为生产系统提供实用洞见。

3. [**用代码解决视觉问题：编码智能体是比视频模型更强的视觉推理器**](http://arxiv.org/abs/2611.34813v1) — 这项工作挑战了视觉推理中盛行的视频生成范式，提供了令人信服的证据支持一种根本不同的方法。它可能重塑我们对智能体视觉理解的思考方式。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*