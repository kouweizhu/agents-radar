# ArXiv AI 研究日报 2026-10-28

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-28 01:37 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest from English to Chinese. I need to:
1. Translate all the content while maintaining the exact Markdown structure
2. Keep URLs, code references, numbers, technical terms as-is
3. Use natural technical Chinese register
4. Output ONLY the translation without any preamble or explanation

Let me go through each section carefully:

**Title:**
"ArXiv AI Research Digest — October 28, 2026" → "ArXiv AI 研究摘要 — 2026年10月28日"

**Section 1: Today's Highlights**
Need to translate this section about research trends.

**Section 2: Key Papers**
This has tables that need careful translation while preserving structure.

**Section 3: Research Trend Signal**
Translate this trend analysis.

**Section 4: Worth Deep Reading**
Translate these recommendations.

Let me do this carefully, maintaining all formatting and technical terms.</think>

# ArXiv AI 研究摘要 — 2026年10月28日

## 1. 今日要点

今日提交的研究揭示了几个趋同的研究前沿。**智能体系统**持续快速推进，多项工作解决自我改进机制（协同进化的评分标准、群体中心进化、测试框架优化）和多智能体协作（团队进化、多智能体系统中的记忆管理）问题。**测试时训练与适应**成为一个重要主题，原位 TTT 现已能够在大语言模型上实用化，选择性方法实现了条件查询的自适应学习。在多模态领域，**视觉语言智能体**正在获得潜在世界模型，而面向低资源语言（巴斯克语）的**语音大模型**展示了推动包容性AI的决心。值得注意的是，**LLM服务中的批处理不变性**和**KV缓存压缩**表明对实际部署挑战的关注日益增长。

---

## 2. 重点论文

### 🧠 大语言模型

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [DCKV: Learned Transform Coding of the Prompt KV Cache in Hybrid Language Models](http://arxiv.org/abs/2610.36950v1) | Egor Maximov 等 | 引入了一种针对混合语言模型中KV缓存的可微分解码器，解决了提示状态存储和传输的瓶颈问题。实现了长提示上下文的高效复用。 |
| [Select-TTT: Query-Conditioned Selective Fast Weight Updates for In-Place Test-Time Training](http://arxiv.org/abs/2610.36794v1) | Yue Wu 等 | 通过将现有层重新用作快速权重参数，使原位测试时训练在大语言模型上变得实用，允许模型在运行时将上下文内化，而无需完整微调。 |
| [Balanced State Subspaces for Mamba-2 State Compression](http://arxiv.org/abs/2610.36617v1) | 尚庭玉 等 | 分析了Mamba-2循环状态中的能量分布，并提出了超越独立通道剪枝的基于子空间的压缩方法，提高了长上下文解码的内存效率。 |
| [Robust LLM Data Selection via Content-Invariant Gradient Attribution](http://arxiv.org.abs/2610.36755v1) | 贾谷 等 | 解决了基于梯度的数据归因对内容变化敏感的问题，实现了指令微调高质量训练样本的更可靠选择。 |
| [An Algebra of Transformers](http://arxiv.org/abs/2610.36795v1) | 王勇 等 | 提供了变压器可计算性的理论分析，包括图灵完备性和可并行性，推进了对变压器表达能力的理解。 |

### 🤖 智能体与推理

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [When All Rollouts Fail: Policy-Compatible Joint Decoding for Hard-Problem Reasoning](http://arxiv.org/abs/2610.36849v1) | 王泽浩 等 | 解决了强化学习验证中模型在超出能力范围的问题上失败的学习悬崖问题，通过引入策略兼容的联合解码来改进探索。 |
| [Evolving Agent Teams](http://arxiv.org/abs/2610.36848v1) | 曹世怡 等 | 通过进化智能体团队解决GPU内核优化问题，团队能够从专家编写的代码库中跳出局部最优，超越单智能体方法。 |
| [When the Critic Falls Behind: Co-Evolving Rubrics and Harnesses for Continual Agent Self-Improvement](http://arxiv.org/abs/2610.36826v1) | 陈浩 等 | 使测试框架（围绕LLM的交互框架）能够从执行经验中进化，同时协同进化监督评分标准，解决静态监督的局限性。 |
| [The View from Nowhere: Population-Centered Agent Evolution](http://arxiv.org_abs/2610.36660v1) | 严朔 等 | 提出利用更广泛智能体群体的中心化改进，而非选中的父代，解决自我改进AI系统中的覆盖缺口问题。 |
| [Remembering Is Not Enough: Refining Memories and Learning When to Use Them in Multi-Agent Systems](http://arxiv.org/abs/2610.36652v1) | 郝一鹏 等 | 引入了DiscernMem框架，让LLM多智能体能够判断存储的记忆何时有缺陷或被误用，提高记忆的可靠性。 |
| [Vision-Language Agents Can Learn in Their Own Latent Worlds](http://arxiv.org_abs/2610.36925v1) | 李浩熙 等 | 使预训练的VLM能够通过在线交互驱动策略改进，利用内化的世界知识从经验中学习。 |

### 🔧 方法与框架

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [GUI-JEPA: Candidate-Conditioned JEPA Latents as a Fast Action Policy for Mobile GUI Agents](http://arxiv.org/abs/2610.36877v1) | 王炳超 等 | 使用JEPA潜在表示来评估候选动作，无需完整的VLM解码，显著提高了移动GUI智能体的速度并降低内存占用。 |
| [RubricAtlas: Mining Type-Level Rubrics from Expert Reports to Evaluate Deep Research Agents](http://arxiv.org_abs/2610.36878v1) | 王德林 等 | 从专家报告中提取类型级评分标准来评估多步骤研究智能体，超越了特定查询的二值评分标准。 |
| [Batching the Reflective Optimization Loop: Parallel Proposals Make GEPA Faster and Better](http://arxiv.org_abs/2610.36774v1) | 张嘉琳 等 | 将GEPA优化器扩展到批量候选提案和评估，解决了反思性文本优化中的顺序瓶颈问题。 |
| [God Does Not Play Dice: Enforcing Batch Invariance in Agentic Kernel Generation](http://arxiv.org_abs/2610.36623v1) | 鲍有威 等 | 识别并解决了LLM服务中的批处理不变性失败问题——数值输出随批处理组合变化——这是一个关键的部署问题。 |
| [TAPESTRY: A Single Backbone for Video Generation and Robot Control](http://arxiv.org_abs/2610.36823v1) | Jeremy A. Collins 等 | 在单一预训练骨干网络上统一视频生成和机器人控制，利用视频先验无需资源密集型的测试时生成。 |

### 📊 应用

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Developing a Speech Language Model for Basque](http://arxiv.org_abs/2610.36911v1) | Andoni Sudupe 等 | 推出了首个面向巴斯克语（低资源语言）的开源语音LLM，基于LLaMA-Omni实现低延迟端到端口语交互。 |
| [Noise Steering: Exploiting Wake Steering and Acoustic Directivity for Noise-Constrained Wind Farm Control via RL](http://arxiv.org_abs/2610.36888v1) | Martín de Frutos 等 | 使用强化学习在考虑尾流交互和声学指向性的情况下联合优化涡轮偏航角以实现功率和噪声约束。 |
| [Beyond the Evidence Coherence Trap: Agent-Driven Evidence Selection for Temporally Disordered Fake News Detection](http://arxiv.org_abs/2610.36764v1) | 王驰 等 | 通过使用智能体在重排序事件中选择证据来解决时间无序的假新闻检测问题，超越了简单的连贯性检查。 |
| [Look Only When Needed: Certificate-Guided Visual Routing for Efficient Diffusion VLMs](http://arxiv.org_abs/2610.36671v1) | 赵东贤 等 | 使用证书在扩散VLM中剪枝视觉标记，减少了占据89-97%计算量的视觉标记负担。 |
| [An Incremental Knowledge-Graph Learner Digital Twin for Evidence-Grounded Early Warning](http://arxiv.org_abs/2610.36820v1) | Ngoc Luyen Le 等 | 将学习分析中的早期预警与可通过知识图谱数字孪生检查的证据联系起来，提高干预的透明度。 |

---

## 3. 研究趋势信号

**自我改进和自主智能体**的明确趋势主导了今天的论文集合——多篇论文涉及智能体进化（群体中心、协同进化框架、团队进化）和记忆/反思机制。**测试时适应**正在快速成熟：大语言模型的原位TTT和选择性条件查询更新标志着一个从静态部署向动态即时学习的转变。在多模态方面，**视觉语言智能体**正在从被动感知走向主动的潜在世界建模。在基础设施方面，**批处理不变性**和**KV缓存压缩**揭示了日益增长的部署意识。推动**低资源语言支持**（巴斯克语音LLM）和**领域特定智能体**（科学、软件工程、风电场控制）表明该领域正在走向应用成熟。

---

## 4. 值得深入阅读

1. **[Evolving Agent Teams](http://arxiv.org_abs/2610.36848v1)** — 证明了多智能体协作能够跳出单智能体失败的局部最优，应用于实际的GPU内核优化（FlashInfer）。这代表了将LLM应用于复杂工程问题的实践进展。

2. **[Select-TTT: Query-Conditioned Selective Fast Weight Updates for In-Place Test-Time Training](http://arxiv.org_abs/2610.36794v1)** — 通过将现有层重新用于快速权重参数，使测试时训练在大型LLM上变得实用，为模型在运行时适应输入上下文开辟了一条可行路径，无需完整微调或过多计算。

3. **[God Does Not Play Dice: Enforcing Batch Invariance in Agentic Kernel Generation](http://arxiv.org_abs/2610.36623v1)** — 识别了一个关键但尚未得到充分探索的部署问题：LLM服务中动态批处理导致的数值输出变化。解决方案对生产系统有直接的实践影响。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*