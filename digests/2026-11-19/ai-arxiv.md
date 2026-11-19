# ArXiv AI 研究日报 2026-11-19

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-11-19 03:48 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest from English to Simplified Chinese. I need to:

1. Translate the content while maintaining the Markdown structure exactly
2. Keep URLs, link targets, code spans, numbers, dates, project names, etc. verbatim
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

**Title:**
ArXiv AI Research Digest → ArXiv AI 研究摘要

**Date line:**
**Date:** November 19, 2026  
**Categories Covered:** cs.AI, cs.CL, cs.LG
→ **日期：** 2026年11月19日  
**涵盖类别：** cs.AI, cs.CL, cs.LG

**Section 1: Today's Highlights**
Need to translate the paragraph about today's submissions. Let me work through this:

"Today's submissions reveal a strong emphasis on **LLM agents and their practical deployment challenges**. Key breakthroughs include MoE-Context's novel approach to selective context gating that could significantly reduce inference costs for long-horizon tasks, and PIPETTE/AutoPI's sophisticated red-teaming frameworks for prompt injection vulnerabilities—reflecting growing industry concern about agent security. The interpretability space advances with a method converting attention networks to hard-logic predicate circuits, offering a new path toward transparent AI systems. Meanwhile, applications in robotics (pose-robust VLAs, visual inspection planning) and scientific discovery (postdoc-level benchmarking, femoral stress prediction) continue to expand AI's real-world utility."

Translation:
"今日投稿显示，研究重心明显偏向 **LLM 智能体及其实际部署挑战**。重要突破包括：MoE-Context 提出的选择性上下文门控新方案，有望大幅降低长程任务的推理成本；PIPETTE/AutoPI 的高级红队测试框架专注于提示注入漏洞，反映出业界对智能体安全日益增长的关切。

Interpretability 领域取得进展，通过将注意力网络转化为硬逻辑谓词电路，为构建透明 AI 系统开辟了新路径。同时，机器人学（姿态鲁棒的 VLA、视觉检测规划）和科学发现（博士后级基准测试、股骨应力预测）等应用场景持续拓展 AI 的实际应用价值。"

Key research areas span **大型语言模型架构与训练**（包括选择性上下文门控、循环缓存加速、后博士级自然科学问题基准测试等方向），以及 **智能体与推理能力**（涵盖多智能体协作、安全对齐、工具调用等关键技术）。

In the translation, I need to maintain English for technical terms like "MoE-Context" and proper nouns, while converting English punctuation and phrasing to natural Chinese equivalents. The table structure with author and summary columns should be preserved, with translations flowing naturally in the content cells. I'm consolidating the key points about today's research landscape across language models, agents, and practical applications. The focus is on how MoE-Context and similar architectures are tackling context management inefficiencies, while security concerns around agent systems are driving new evaluation frameworks like PIPETTE and AutoPI. The field is also making progress on interpretability through methods like predicate circuit conversion, and expanding into real-world domains including robotics and scientific applications.

Now I'm organizing the papers into categories for a research digest, starting with foundational work on language models themselves—architecture innovations like MoE-Context's selective context gating approach, LoopCache's speculative decoding for extended contexts, and evaluation methods like postdoc-level benchmarking.

The list continues with alignment and interpretability work, including studies on whether weight modifications can shift ethical priorities, approaches to communicating uncertainty through auxiliary evidence, and methods for converting attention networks into interpretable hard-logic predicate circuits. Then there are papers focused on agents and reasoning capabilities—particularly red-teaming frameworks like PIPETTE that test prompt injection robustness, and similar approaches to systematically evaluate agent safety. 2026年11月19日提交的内容涵盖多个重要研究方向。语言模型方面，MoE-Context通过选择性上下文门控实现高效推理，LoopCache加速长上下文自回归解码，PostdocQA基准评估模型在专家级科学问题上的表现，Weight-Space Programming探索权重编辑对模型伦理优先级的影响。智能体与推理领域，PIPETTE和AutoPI分别通过强化学习和自适应红队测试提升LLM智能体的安全性，KnowledgeClaw和OpenKAGE分别处理知识工程和开放世界终身学习问题。

Semantics Context Handoff优化长程智能体的上下文效率，Coding Agents通过级联超时机制降低推理成本，Adaptive Action Horizon Selection在视觉-语言-动作模型中平衡不确定性与决策范围。

方法论层面，OpenGNS提供梯度噪声尺度数据集支持模型训练优化，RSIBench-Infra评估智能体在生产级基础设施优化中的能力，VAFL推进纵向联邦学习实现隐私保护的分类和回归。

Learning with Unlearning和Tabular Foundation Models分别处理持续学习中的知识获取与遗忘问题，VideoACE评估智能体对视频内容的主动理解能力。

应用研究包括Few-Shot视觉-语言-动作模型在姿态变化下的鲁棒性，FedE2E实现端到端自动驾驶的单次联邦学习，GALA通过画廊级对齐提升EEG视觉解码效果，Fuse to Recognize the Unseen处理红外-可见光融合用于开放词汇语义分割。

此外，When Figures Disagree with Text评估视觉证据验证能力，ViLFlow采用连续潜流实现并行视觉-语言生成。今日研究趋势信号涵盖智能体安全成熟度提升、上下文效率成为核心问题、可解释性进入新阶段、基准测试差距逐步缩小，以及不确定性量化从预测向交互的演进。

Deep Reading部分列出三篇值得深入阅读的论文。MoE-Context论文通过选择性上下文门控提供解决长上下文推理成本问题的原则性方案，结合人类工作记忆理论并经实践验证，在行业对长程智能体部署需求压力下具有广泛影响架构决策的潜力。PIPETTE论文针对部署LLM智能体最紧迫的安全威胁提供系统性、基于强化学习的漏洞发现方法论。

该工作为该领域急需的安全评估实践奠定基础。注意力网络可解释性研究代表神经网络的根本性突破，通过转换为可验证的逻辑电路，在保持性能的同时解决可解释性问题，若能规模化应用可能弥合高性能神经系、高性能神经系统和受监管领域可解释性需求之间的差距。
</think>


ArXiv AI 研究摘要

**日期：** 2026年11月19日  
**涵盖类别：** cs.AI, cs.CL, cs.LG

---

## 1. 今日亮点

今日投稿显示，研究重心明显偏向 **LLM 智能体及其实际部署挑战**。重要突破包括：MoE-Context 提出的选择性上下文门控新方案，有望大幅降低长程任务的推理成本；PIPETTE/AutoPI 的高级红队测试框架专注于提示注入漏洞，反映出业界对智能体安全日益增长的关切。Interpretability 领域也取得进展，通过将注意力网络转化为硬逻辑谓词电路，为构建透明 AI 系统开辟了新路径。同时，机器人学（姿态鲁棒的 VLA、视觉检测规划）和科学发现（博士后级基准测试、股骨应力预测）等应用场景持续拓展 AI 的实际应用价值。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [MoE-Context: Show the Model Only What It Needs](http://arxiv.org/abs/2611.24379v1) | Vedant Navale et al. | 提出选择性上下文门控方法，将上下文切分为块并使用快速分类器判断是否保留，仅在每步保留相关信息。该设计模拟人类工作记忆，有望为长程智能体大幅降低推理成本。 |
| [LoopCache: Accelerating Long-Context Self-Speculative Decoding for Looped Transformers](http://arxiv.org/abs/2611.24301v1) | Zizhuo Fu et al. | 为循环变压器架构优化波前推测解码，循环应用权重共享块并配备循环专用 KV 缓存。在保持模型保真度的同时加速顺序执行。 |
| [Benchmarking LLM abilities on postdoc-level natural science problems](http://arxiv.org/abs/2611.24321v1) | Alina Avanesyan et al. | 发布博士后级自然科学问题评测基准，要求模型完成可执行工作并按评分标准打分。填补了无符号答案问题评估的空白。 |
| [Can Weight-Space Programming Alter Learned Ethical Priorities?](http://arxiv.org/abs/2611.24330v1) | Kai Yi Ji et al. | 研究权重编辑能否修改模型在履行承诺与最大化利益之间的伦理权衡。展示无需全量重训即可进行目标对齐修改。 |
| [Tell Me How Sure You Are: Communicating Uncertainty in Auxiliary Evidence to Foundation Models](http://arxiv.org/abs/2611.24351v1) | Soumyajit Chatterjee et al. | 首个明确向 LLM 和 VLM 传递上下文信息不确定性的工作，保留概率信号而非通过传统提示将其丢弃。 |
| [How to Turn an Attention Neural Network into an Interpretable Hard-Logic Predicate Circuit](http://arxiv.org/abs/2611.24381v1) | Yichen Li et al. | 将训练好的注意力网络转换为使用最小化真值表的硬逻辑谓词电路，在保留模型行为的同时实现可解释决策。 |

### 🤖 智能体与推理（规划、工具调用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [PIPETTE: Prompt Injection Purple-Teaming for Robust LLM Agents](http://arxiv.org/abs/2611.24362v1) | Lipeng He et al. | 使用强化学习进行自动化红队测试，大规模挖掘 LLM 智能体中的间接提示注入漏洞。解决智能体处理不可信外部数据时的关键安全缺口。 |
| [AutoPI: Taxonomy-Guided Adaptive Red Teaming for Prompt Injection in LLM Agents](http://arxiv.org/abs/2611.24313v1) | Stavros Damianakis et al. | 提出基于提示注入攻击分类法引导的自适应红队测试，超越固定基准注入，评估模型对高级攻击者的鲁棒性。 |
| [KnowledgeClaw: Towards Agentic Knowledge Engineering via Omnimodal Hypergraphs](http://arxiv.org/abs/2611.24294v1) | Haoran Luo et al. | 提出通过全模态超图实现知识工程的智能体框架，处理动态更新的全模态知识库，支持面向推理的知识提取。 |
| [OpenKAGE: Open-Ended Lifelong Learning in the Open World via Knowledge-Sharing Agent-Group Evolution](http://arxiv.org/abs/2611.24302v1) | Wenhao Yuan et al. | 引入多智能体演化框架，智能体群组通过知识共享持续获取新能力，无需预定义任务或课程即可在开放世界学习。 |
| [Semantic Context Handoff with On-Demand Evidence for Long-Horizon Agents](http://arxiv.org/abs/2611.24357v1) | Guolong Zheng et al. | 通过选择性证据检索与交接解决长程 LLM 智能体的上下文增长问题，在保持任务准确率的同时降低推理成本。 |
| [Reducing Inference Cost of Coding Agents with Timeout Cascades](http://arxiv.org/abs/2611.24324v1) | Boxi Zhou et al. | 研究通过级联超时机制使用更小更便宜的模型处理编码智能体子任务，在保持智能体能力的同时降低 GPU 计算成本。 |
| [Adaptive Action Horizon Selection via Flow-Field Uncertainty](http://arxiv.org/abs/2611.24378v1) | Idan Ben-Ami et al. | 为 VLA 模型提出不确定性感知的动作时域选择，区分认知不确定性与偶然不确定性，无需额外推理开销即可改善自适应执行。 |

### 🔧 方法与框架（新技术、基准、效率改进）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [OpenGNS: An Open Dataset of the Gradient Noise Scale across Vision, Language, and Diffusion Models](http://arxiv.org/abs/2611.24331v1) | Marcel Aach et al. | 发布跨视觉、语言和扩散模型家族的梯度噪声尺度综合数据集，支持训练期间更好的计算分配和临界批量大小估计。 |
| [RSIBench-Infra: Can Agents Optimize Their Own Training and Inference Infrastructure at Production Scale?](http://arxiv.org/abs/2611.24395v1) | Hanlin Wu et al. | 发布评估智能体是否能跨软件层端到端优化训练/推理基础设施的基准，推动递归自我改进研究。 |
| [VAFL: A Vertical Analytic Federated Learning Mechanism for Efficient Crowdsourced Services](http://arxiv.org/abs/2611.24367v1) | Yajiang Huang et al. | 引入分类和回归闭式解的纵向联邦学习框架，消除梯度通信同时保护数据隐私。 |
| [Learning with Unlearning: Synaptic Role Partitioning for Simultaneous Continual Learning and Machine Unlearning](http://arxiv.org/abs/2611.24205v1) | Mohammad Ali Vahedifar et al. | 通过突触角色划分解决持续学习（获取新知识）与机器反学习（遗忘特定知识）之间的冲突。 |
| [Towards Reliable Scaling Laws for Tabular Foundation Models](http://arxiv.org/abs/2611.24214v1) | Johannes Hog et al. | 研究在合成数据上预训练的表格基础模型缩放定律，解决这一新兴模型类的性能预测独特挑战。 |
| [VideoACE: Benchmarking Agentic Video Understanding through High-Frame-Rate Actions](http://arxiv.org/abs/2611.24184v1) | Luoyuan Zhang et al. | 发布评估模型能否主动与视频环境交互收集证据并形成判断的基准，评估智能体化视频理解能力。 |

### 📊 应用（领域专精、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Towards Pose-Robust Few-Shot Vision-Language-Action Models](http://arxiv.org/abs/2611.24360v1) | Wenhao Li et al. | 解决相机或机器人基座位置变化时 VLA 微调静默失效问题，提出从少量演示中学习姿态鲁棒操作策略的方法。 |
| [FedE2E: One-Shot Federated Learning for End-to-End Autonomous Driving with Closed-Loop Evaluation](http://arxiv.org/abs/2611.24254v1) | Tao Lian et al. | 专为端到端自动驾驶设计的一次性联邦学习方案，配合闭环评估，减少通信轮次同时保持驾驶性能。 |
| [GALA: Gallery-Level Alignment for Real-Life Vision Decoding from EEG](http://arxiv.org/abs/2611.24206v1) | Philippe Forest et al. | 通过画廊级对齐实现跨被试 EEG 视觉体验解码，解决从 80% 个体内准确率到约 32% 跨被试的泛化差距。 |
| [Fuse to Recognize the Unseen: Class-Relative Infrared-Visible Fusion for Open-Vocabulary Semantic Segmentation](http://arxiv.org/abs/2611.24316v1) | Zehao Gao et al. | 利用可见光-红外融合进行开放词汇语义分割，通过互补的热信息和视觉线索实现未见类别的识别。 |
| [When Figures Disagree with Text: Evaluating Autonomous Visual Evidence Verification](http://arxiv.org/abs/2611.24353v1) | Guijia Zhang et al. | 研究科学图表-文本验证任务，要求模型判断图表是否支持文本声明而非仅描述视觉内容。 |
| [ViLFlow: Parallel Vision-Language Generation with Continuous Latent Flows](http://arxiv.org/abs/2611.24240v1) | Kevin Zhai et al. | 提出基于连续潜流的并行视觉-语言生成模型，超越自回归和离散扩散方法。 |

---

## 3. 研究趋势信号

今日投稿释放出若干新兴研究方向信号。**智能体安全正快速成熟**——PIPETTE 和 AutoPI 的同时出现表明，领域正从识别漏洞走向系统性红队测试方法论和自适应攻击者。**上下文效率已成为核心问题**，多篇论文（MoE-Context、Semantic Context Handoff、LoopCache）都在解决智能体化系统中长历史的成本问题——这可能源于实际部署压力。**可解释性进入新阶段**，电路级转换方法提供了黑盒注意力分析之外的白盒替代方案。**前沿模型评估差距**正在被积极填补，博士后级基准和智能体化视频理解测试正在超越简单的选择题数据集。最后，**不确定性量化正从预测扩展到交互**——显式地将模型置信度呈现给下游系统，而非将其作为内部状态处理。

---

## 4. 深度阅读推荐

1. **[MoE-Context: Show the Model Only What It Needs](http://arxiv.org/abs/2611.24379v1)**  
   *推荐理由：* 该论文为长上下文推理成本问题提供了有原则的解决方案。选择性上下文门控方法既有理论依据（人类工作记忆）又有实践验证。鉴于业界部署长程智能体的压力，这可能影响广泛的架构决策。

2. **[PIPETTE: Prompt Injection Purple-Teaming for Robust LLM Agents](http://arxiv.org/abs/2611.24362v1)**  
   *推荐理由：* 提示注入是已部署 LLM 智能体最直接的安全威胁。该工作提供了系统性、基于强化学习的漏洞发现方法论——这是该领域急需的安全评估实践模板。

3. **[How to Turn an Attention Neural Network into an Interpretable Hard-Logic Predicate Circuit](http://arxiv.org/abs/2611.24381v1)**  
   *推荐理由：* 这代表了神经网络的根本性新方法——一种在保留行为的同时转换为人类可验证逻辑电路的可解释性方法。如果可扩展，这可以弥合高性能神经系统和受监管领域可解释性需求之间的差距。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*