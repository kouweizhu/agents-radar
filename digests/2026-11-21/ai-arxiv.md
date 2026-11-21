# ArXiv AI 研究日报 2026-11-21

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-11-21 03:24 UTC

---

<think>The user wants me to translate an English technical report (ArXiv AI Research Digest) into Simplified Chinese. I need to:

1. Output ONLY the translation, no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the structure and using appropriate Chinese technical terminology.

Key terms to translate:
- Research Digest → 研究摘要
- Today's Highlights → 今日要点
- Key Papers → 重点论文
- Research Trend Signal → 研究趋势信号
- Worth Deep Reading → 值得深入阅读

Let me go through section by section:

Title: ArXiv AI Research Digest
Date: 2026-11-21
Categories: cs.AI, cs.CL, cs.LG

Section 1: Today's Highlights
Translation needed for the paragraph about trends

Section 2: Key Papers
Tables need to be translated with proper Chinese technical terms

Section 3: Research Trend Signal
Bullet points need translation

Section 4: Worth Deep Reading
Paper descriptions and explanations

Let me write this out carefully.
</think>


# ArXiv AI 研究摘要

**日期：** 2026-11-21 | **分类：** cs.AI, cs.CL, cs.LG

---

## 1. 今日要点

今日投稿显示学界对 **Agent 安全与防护** 的高度关注，多篇论文探讨了基于 LLM 的 Agent 出现删除文件、滥用系统等安全事件后的调查方法。**人形机器人** 领域持续成熟，涉及物理接地执行和全身运动数据采集等工作。另一方面，**扩散 Transformer 研究** 正从图像生成扩展到 RL 后训练和隐式动作学习，表明这些模型正成为视觉、规划和机器人领域的基础设施。此外，**可解释性** 研究引人注目——探究模型内部表征与输出读取方式的关系——以及 **不确定性决策**，出现了一批关于校准和自洽性验证的新方法。

---

## 2. 重点论文

### 🧠 大语言模型

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Represented but misread: Post-training changes how language models read out what they represent](http://arxiv.org/abs/2611.26584v1) | Jochen Laubrock 等 | 对比线性探测与模型输出，表明后训练改变了读取机制而非仅改变表征——这一发现对理解对齐对模型内部行为的影响意义重大。 |
| [The Geometry of Lies: Knowledge and Persona Directions for Detecting Deception in Large Language Models](http://arxiv.org/abs/2611.26545v1) | Md. A. Al Zami 等 | 将谎言检测扩展至 70B 规模模型，使用基于人格的方向向量，处理文本完全相同情况下说谎与诚实否认的区分问题。 |
| [A CPU Inside an LLM: Zero-Gradient Compilation of Exact Circuits into Pretrained Weights](http://arxiv.org/abs/2611.26450v1) | Tanmay Sah 等 | 将确定性算术电路直接编译入预训练权重，无需梯度微调，实现可靠的多位数运算。 |
| [Exact Bayesian layers via characteristic functions](http://arxiv.org/abs/2611.26426v1) | William H. W. Thompson 等 | 利用特征函数实现免采样的变分推断，拓展贝叶斯神经网络至非高斯输出分布。 |

### 🤖 Agent 与推理

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [PlayCraft: Designing Engaging Games from Agent Play Experience](http://arxiv.org/abs/2611.26624v1) | Weihao Cheng 等 | 利用视觉 Agent 进行游戏试玩并提取精通曲线，自动化以参与度为导向的游戏设计流程。 |
| [AgentRoboCritic: Understanding the Capability of Frontier Agents on Direct Robot Control](http://arxiv.org/abs/2611.26613v1) | Yiyang Du 等 | 评估 GPT-6 Astra 等多模态 Agent 在低层机器人动作控制方面的能力，超越单纯的回合成功率评估。 |
| [PGX: Physically Grounded Execution for Long-Horizon Humanoid Loco-Manipulation](http://arxiv.org/abs/2611.26596v1) | Kai Lu 等 | 将 VLA 模型中的技能与时序结构解耦，提升复杂人形任务的执行精度。 |
| [Backtracking Agent Applications Security Incidents](http://arxiv.org/abs/2611.26525v1) | Yicheng Cai 等 | 提供安全事件后 Agent 轨迹中识别入侵入口点的取证方法论。 |
| [Awaken-HI: Scaling Humanoid Intelligence with Whole-Body Human Experience](http://arxiv.org/abs/2611.26420v1) | EngineAI 等 | 构建大规模自我中心视频数据集，同步采集全身运动用于locomanipulation 学习。 |
| [Seer: Guiding Small Deep-Research Agents with Shared Decision Models](http://arxiv.org/abs/2611.26423v1) | Yuhao Zhou 等 | 通过跨小模型共享决策模型实现隐私保护的在端研究 Agent。 |

### 🔧 方法与框架

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [RL Post-Training in Diffusion Transformers Is Activation Steering](http://arxiv.org/abs/2611.26627v1) | Tuna H. S. Meral 等 | 证明 RL 后训练通过激活 steering 提升扩散 Transformer，改善文本渲染和组合准确性。 |
| [TideCache: Efficient Hybrid LLM Serving with Transparent Cache Management and Layer-Wise Streaming](http://arxiv.org/abs/2611.26619v1) | Jinbin Luo 等 | 在 CPU-GPU 超级芯片上优化服务，利用异构缓存处理混合注意力/状态架构。 |
| [Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth](http://arxiv.org/abs/2611.26603v1) | Peiyun Hu 等 | 在不牺牲任一指标的前提下实现度量深度估计的边界锐度和时序一致性。 |
| [ProtoDiffusion: Token-per-Layer Generative Modeling of Multi-Layer Images](http://arxiv.org/abs/2611.26586v1) | Adrià C. Lanau 等 | 实现高效分层图像生成，表示大小与累积层空间范围无关。 |
| [AURA: AUdio-dRiven streaming Avatar](http://arxiv.org/abs/2611.26540v1) | Nathaniel Cohen 等 | 通过高效扩散实现适合流式应用场景的低延迟音频驱动视频合成。 |
| [Critically damped Polyak stepsizes: Finding flat minima with uniform-in-time guarantees](http://arxiv.org/abs/2611.26475v1) | Francesco Caporali 等 | 引入自适应步长规则，引导梯度下降趋向更平坦的极小值并提供理论保证。 |
| [MemFolder: Structure-Guided Memory Folding for Efficient Agent Memory Management](http://arxiv.org/abs/2611.26427v1) | Xuyang Liu 等 | 通过结构化记录折叠降低 Agent 内存开销，同时保持检索质量。 |

### 📊 应用

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [SoK: Assessing the Evolution of LLM Capability in Software Vulnerability Research](http://arxiv.org/abs/2611.26601v1) | Amine Lbath 等 | 系统梳理 LLM 在实际漏洞发现、验证和修复中的能力演变证据。 |
| [Verify the Verifier: Specification-Grounded LLM Cross-Checking for Bugs That Escape UVM Scoreboards](http://arxiv.org/abs/2611.26588v1) | Ana E. S. Villalobos 等 | 利用规范驱动的 LLM 交叉检查，检测通过测试但违反规范的 bug。 |
| [Multi-institutional grading of Barrett's esophagus dysplasia](http://arxiv.org/abs/2611.26562v1) | Amirali Khosravi 等 | 评估无需染色归一化的跨机构 dysplasia 分级基础模型深度学习方法。 |
| [Mind2Act World: Diagnostic Benchmark for Embodied Mind, Physical Action, and Mind-Action Composition](http://arxiv.org/abs/2611.26444v1) | Yuzhi Huang 等 | 在操作任务中评估具身 Agent 的认知推理、物理执行及两者组合能力。 |

---

## 3. 研究趋势信号

今日投稿预示以下几个新兴方向：

**Agent 安全成为核心议题：** 多篇论文针对 Agent 特有的攻击方式和事件取证展开研究。学术界正从能力评估转向安全防护体系构建，为能够执行文件删除、支付等现实操作的自主 Agent 保驾护航。

**人形机器人规模化落地：** 三篇论文从不同角度探讨 locomanipulation——物理接地、基准测试、数据集构建——表明该领域正迈向实际部署阶段。

**扩散 Transformer 成为通用基础设施：** 扩散 Transformer 的 RL 后训练及向隐式动作学习的迁移，表明这些架构正成为视觉、规划和机器人领域的通用基石。

**可解释性研究超越探测范式：** 关于后训练影响和 VLM 中"意识"的研究表明，学术界愈发关注模型 *如何* 处理信息，而不仅仅是 *处理什么*。

**校准与不确定性量化：** 自洽性验证和校准决策模型的新研究，反映了生产环境中对可靠不确定性估计的实际需求。

---

## 4. 值得深入阅读

1. **[RL Post-Training in Diffusion Transformers Is Activation Steering](http://arxiv.org/abs/2611.26627v1)** — 本文将扩散 Transformer 的 RL 后训练重新诠释为激活 steering，对理解这类模型的学习机制以及提升文本渲染/组合准确性都有重要意义。它架起了表征学习与生成质量之间的桥梁。

2. **[AgentRoboCritic: Understanding the Capability of Frontier Agents on Direct Robot Control](http://arxiv.org/abs/2611.26613v1)** — 现有基准只报告成功/失败，而本文深入探究前沿 Agent *如何* 完成机器人控制。鉴于通用机器人 Agent 的发展趋势，理解其失败模式和成功机制至关重要。

3. **[Represented but misread: Post-training changes how language models read out what they represent](http://arxiv.org/abs/2611.26584v1)** — 这项研究对对齐研究具有深远影响：如果后训练主要影响读取机制而非表征，这会从根本上改变我们对微调安全特性的理解，以及将线性探测作为对齐指标的使用方式。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*