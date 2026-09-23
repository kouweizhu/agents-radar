# ArXiv AI 研究日报 2026-09-23

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-23 00:53 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest from English to Chinese. I need to:
1. Translate all the content while preserving the Markdown structure
2. Keep technical terms, URLs, paper titles, and identifiers in their original form
3. Use natural technical Chinese, the register of a Chinese developer newsletter
4. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

## 1. Today's Highlights

## 2. Key Papers tables

## 3. Research Trend Signal

## 4. Worth Deep Reading

I'll maintain all the formatting, tables, emojis, etc.</think>

# ArXiv AI 研究摘要 — 2026年9月23日

## 1. 今日亮点

今天的提交揭示了三个正在获得显著势头的主要研究方向。首先，**智能体系统**正在快速成熟，多篇论文 tackling 自我改进机制（RRSI、MedRSI）、智能体 harness 作为可训练组件（Harness-Zero）以及智能体内存基准测试（DolphinBench）——这表明该领域正在从静态智能体设计向适应性、可演化的系统发展。其次，**LLM 的不确定性量化**正在成为高风险部署的关键推动力，在黑盒不确定性估计（Pinocchio）和共形方法实现可靠置信区间方面有新的工作。第三，**具身 AI 的世界模型和模拟**正在通过具有 3D 感知内存的视频预测（WorldCrafter）和新的模拟基础设施（Uranus）取得进展，解决了机器人技术中的数据稀缺问题。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [onPanda: Efficient Annotation of On-Policy Alignment Data for LLMs and Agents via Token-Level Correction](http://arxiv.org/abs/2609.24983v1) | Lei Yang, Mengyin Liu, Jia Wang et al. | 引入 token 级纠正作为标注 LLM 对齐数据的核心交互，允许注释者在阅读模型响应时定位和替换不恰当的 token。这为训练有帮助且无害的 AI 系统提供了更精确、更高效的反馈。 |
| [LoRA-generating hypernetworks for efficient on-device LLM generative personalization](http://arxiv.org/abs/2609.24979v1) | Sean Augenstein, Li Ding, Jihwan Lee et al. | 提出在设备端生成 LoRA 权重的超网络，以便在移动计算约束下实现 LLM 个性化。使得设备端 AI 能够获得质量提升，而无需进行完整的模型微调。 |
| [The Copy Ceiling: An Input-Exposure Control for Ontology-Grounded Generation over Curated Corpora](http://arxiv.org/abs/2609.24885v1) | John J. O'Hare | 提出曝光核算来分类黄金答案是否已在检索到的上下文中暴露，从而区分基于图的 RAG 系统中的真正推理与纯粹复制。对于评估 LLM 的 groundedness 至关重要。 |
| [Exactness at Inference: A Representational Criterion for Out-of-Distribution Generalization](http://arxiv.org/abs/2609.24942v1) | Filipe Marinho Rocha, Inês Dutra, Vítor Santos Costa et al. | 认为 OOD 泛化要求模型计算与真实生成机制结构等价的表示，而不仅仅是近似。提供了外推精确性的理论标准。 |
| [When Quantization Preserves Accuracy but Not Evidence: Explanation-Aware Post-Training Quantization for Medical LLMs](http://arxiv.org/abs/2609.24799v1) | Yeji Kim, Mi-Young Kim, Randy Goebel | 证明标准 PTQ 保留答案准确性但无法保留医学 LLM 的解释质量。为安全关键领域提出可解释性感知的量化方法。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Critical-State RL: Diagnosing Trainable States for Multi-Turn Tool Use](http://arxiv.org/abs/2609.24985v1) | Zixiang Chen, Wenting Zhao, Zhepeng Cen et al. | 引入一种方法来识别多轮工具使用中哪些模型调用可以从训练中受益，解决下游奖励变化可能反映随机性而非行动质量的挑战。为智能体系统的 RL 提供针对性改进。 |
| [Harness-Zero: Harness Distillation via Agent-as-Harness](http://arxiv.org/abs/2609.24974v1) | Haoran Ye, Yuxing Lu, Haonan Dong et al. | 将智能体 harness（提示词、工具、内存）视为可训练组件，并提出将 harness 改进蒸馏到主干模型中。使得智能体能够跨领域泛化 harness 收益。 |
| [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](http://arxiv.org/abs/2609.24972v1) | Peng Xia, Rujun Han, Zifeng Wang et al. | 通过组件级编辑的迭代提议和选择实现智能体 harness 的自动化设计，并使用正则化防止灾难性遗忘。代表着向自我设计智能体迈出的一步。 |
| [DolphinBench: Mapping the Pareto Frontier of Agent Memory](http://arxiv.org/abs/2609.24971v1) | Soumil Rathi, Deshraj Yadav, Taranjeet Singh | 提出一个评估智能体内存的基准，涵盖回忆延迟、上下文窗口使用和准确性——解决需要内存但未明确信号指示的差距。 |
| [MedRSI: Recursive Self-Improvement for Medical Agents via Clinically Aligned Self-Evolution](http://arxiv.org/abs/2609.24838v1) | Junde Wu, Jiayuan Zhu, Minghao Hu et al. | 使医学智能体能够通过临床对齐的反馈循环从自身失败中学习，随时间改进诊断和治疗建议能力。 |
| [GRUET: Quantifying Uncertainty of Agentic Reasoning-and-Acting Processes](http://arxiv.org/abs/2609.24831v1) | Shuang Liang, Xin-Yu Hu, Shao-Qun Zhang | 开发多轮 ReAct 轨迹中不确定性估计方法，对于在推理失败必须被检测的高风险环境中部署智能体至关重要。 |

### 🔧 方法与框架（新技术、基准、效率提升）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [WorldCrafter: Consistent Video World Model with Implicit 3D-aware Memory](http://arxiv.org/abs/2609.24984v1) | Wangbo Yu, Kunhao Liu, Wenbo Hu et al. | 引入相机可查询的隐式 3D 感知内存，使视频世界模型能够在长时域和视角变化下保持一致性。解决了当前世界模型的一个关键限制。 |
| [Uranus: Building the Next-Generation Simulation Infrastructure for Embodied AI](http://arxiv.org/abs/2609.24815v1) | Wenkang Qin, Yukun Zhou, Noah Shen et al. | 提出基于关节轨迹条件动力学的数据驱动机器人模拟器，能够以降低的成本实现机器人策略训练和评估的大规模模拟。 |
| [Pinocchio: Fast Uncertainty Estimates for Black-Box Language Models](http://arxiv.org/abs/2609.24881v1) | Kevin David Hayes, Arka Pal, Haosong Zhang et al. | 为 LLM 提供不确定性量化，无需 log 概率访问或微调——实现对黑盒 API 部署模型的可靠性评估。 |
| [SPECTRA: Adaptive Execution of Speculative Decoding on a Runtime-Reconfigurable Tiled Architecture](http://arxiv.org/abs/2609.24847v1) | Gabriele Tombesi, William Baisi, Je Yang et al. | 在可重构瓦片架构上实现投机解码，通过自适应草稿验证策略提高边缘设备上的 LLM 推理效率。 |

### 📊 应用（领域特定、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [DexTacWAM: A Visuo-Tactile World-Action Model for Dexterous Manipulation](http://arxiv.org/abs/2609.24976v1) | Haoran Yuan, Zekai Wang, Boning Shao et al. | 将世界动作模型扩展到触觉感知，能够直接建模灵巧机器人操作的接触动力学——超越以视觉为中心的方法。 |
| [Et Tu, Brute? Economic Misalignment in Personal AI Agents](http://arxiv.org/abs/2609.24927v1) | Aman Priyanshu, Supriti Vijay, Brian Jabarian et al. | 研究个人 AI 智能体在代表用户行动的高风险场景（如保险和教育）中可能做出经济上次优推荐的情况——引发治理担忧。 |
| [JAREX: An Acquisition Function for Multi-Objective Algorithmic Process Characterization](http://arxiv.org/abs/2609.24954v1) | Xinyang Li, Kevin Stone, Ajit Vikram | 提出一种多目标算法过程表征的获取函数，平衡多个质量目标——实现制药过程中更高效的实验设计。 |

---

## 3. 研究趋势信号

从今天的论文中出现了几个相互关联的趋势：

**智能体自我改进正在变得系统化。** 借助 RRSI、Harness-Zero 和 MedRSI，学界正在从固定智能体设计转向迭代改进自身 harness、内存和能力的智能体。这代表了从"更好的提示词"到"自我设计系统"的转变。

**LLM 的不确定性量化正在超越 perplexity 走向成熟。** Pinocchio 和 GRUET 解决了一个实际需求——知道 LLM 输出何时应该被信任——当智能体被部署到关键环境中（医学、科学、自主系统）这一点尤为重要。

**具身 AI 的世界模型正在获得记忆。** WorldCrafter 和 Uranus 通过实现一致、3D 感知、可扩展的环境来解决机器人技术中的模拟差距——这是训练通用型机器人的关键瓶颈。

**评估正在变得更加细粒度。** 与最终状态准确性不同，OSWorld-Pro、DolphinBench 和 Critical-State RL 等论文专注于*过程*评估——理解智能体在执行过程中*在哪里*以及*为什么*失败。

---

## 4. 值得深入阅读

1. **[Critical-State RL: Diagnosing Trainable States for Multi-Turn Tool Use](http://arxiv.org/abs/2609.24985v1)** — 这篇论文解决了一个训练智能体的根本挑战：知道长交互追踪中的哪个特定模型调用对最终失败负责。这种跨多轮工具使用的信用归因方法可以广泛应用于智能体 RL 流程。

2. **[Exactness at Inference: A Representational Criterion for Out-of-Distribution Generalization](http://arxiv.org/abs/2609.24942v1)** — 为理解神经网络何时能够真正外推提供了理论框架。"结构等价"标准是对标准 i.i.d. 假设的细微偏离，可能重塑我们对 OOD 鲁棒性的思考方式。

3. **[RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](http://arxiv.org/abs/2609.24972v1)** — 随着智能体变得更加自主，自动化其自身设计（提示词、工具、内存）是一个关键方向。该论文的组件级 harness 演进方法结合正则化是迈向自我改进 AI 系统的具体一步。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*