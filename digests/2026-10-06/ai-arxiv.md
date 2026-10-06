# ArXiv AI 研究日报 2026-10-06

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-06 02:27 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest from English to Chinese. I need to translate the entire document while:
1. Preserving all markdown structure exactly (headings, tables, lists, etc.)
2. Keeping URLs, numbers, dates, technical terms, code references, etc. as-is
3. Using natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through the document and translate it section by section, maintaining the exact same structure.

Key points:
- Keep all markdown formatting
- Keep all URLs and numbers
- Keep technical terms that are commonly used in Chinese (like LLM, agent, benchmark, etc.)
- Translate headings to Chinese
- Translate article titles to Chinese but keep English in parentheses if needed
- Use natural Chinese technical writing style

Let me begin:</think>

# ArXiv AI 研究digest — 2026年10月6日

## 1. 今日重点

今日提交的文章揭示了三个主要研究方向。首先，**推理时的计算与优化**是主导主题，包括扩展LLM推理链、预测何时需要更长推理、以及长链式思考中的KV缓存压缩。其次，**智能体架构**正在快速发展——涉及安全上下文切换（推理与安全任务之间）、多智能体协调长程搜索、以及推理扩展等文章。第三，**评估与基准测试**受到广泛关注，包括NL-to-SQL基准审计、指令遵循鲁棒性评估、以及医疗任务中模型-框架对的评估等新框架。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Off-Policy Merging Beats On-Policy Self-Distillation for Continual Learning](http://arxiv.org/abs/2610.05872v1) | Chen Henry Wu 等 | 提出离策略合并作为持续学习的替代方案，优于传统自蒸馏方法，证明合并在不同数据上训练的模型可以取得更好的效果。 |
| [HLA: Expressive Hybrid Linear Attention via Chunk-Wise Dynamic Mixing](http://arxiv.org/abs/2610.05842v1) | Zhuokun Chen 等 | 提出分块动态混合以增强线性注意力在长上下文场景中选择性访问稀疏远程信息的能力。 |
| [Adaptive Utilization of Low-Rank Adaptation via Conditioned Gating](http://arxiv.org/abs/2610.05800v1) | Guang Yang 等 | 引入条件门控到LoRA中，实现令牌级别的低秩更新，而非所有令牌共享更新。 |
| [What Is a Repeated Token Worth? The Scaling Geometry of Multi-Epoch Pretraining](http://arxiv.org.abab/2610.05591v1) | Yekun Chai 等 | 分析预训练中重复令牌相对于独特数据的定价方式，解决训练轮次及其与模型规模的关系问题。 |
| [Universal Test-Time Training](http://arxiv.org/abs/2610.05484v1) | Zefan Cai 等 | 提出统一的TTT架构，内存在各层之间共享而非每层私有，挑战传统的深度即索引设计。 |
| [Don't Judge an LLM Only By Its Activations](http://arxiv.org/abs/2610.05541v1) | Swadesh Swain 等 | 证明安全相关特征可能是被抑制的（不活跃）而非缺失的，引入反事实激活潜力来发现这些特征。 |
| [Towards Unbiased On-Policy Distillation for Block Diffusion Language Models](http://arxiv.org/abs/2610.05373v1) | Zaquan Yang 等 | 解决大块大小BDLM的离策略蒸馏偏差问题，超越之前研究的小块机制。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Nash Equilibrium Text: A Game-Theoretic Decoding Framework for Text Generation](http://arxiv.org/abs/2610.05817v1) | Alireza Jafari 等 | 将文本修订表述为一场博弈，其中令牌位置是玩家，词汇表项是动作，寻求纳什均衡以提升生成质量。 |
| [Selecting Long-Horizon Trajectories for Reliable and Efficient Terminal-Agent Training](http://arxiv.org/abs/2610.05831v1) | Cuong Dang 等 | 引入"监督视野"概念——保留多少轨迹令牌用于训练——作为智能体可靠性和成本的关键设计维度。 |
| [Expanding LLM Reasoning](http://arxiv.org/abs/2610.05584v1) | Rian Atri 等 | 定义"扩展效用"来预测在现有推理链的何处开始追加推理，优测试时计算分配。 |
| [DelegationBench: Measuring When AI Agents Should Ask Before Acting](http://arxiv.org/abs/2610.05532v1) | Shiva Pochampally | 引入评估智能体何时应寻求用户批准而非自主行动的基准，这是一个关键的安全决策点。 |
| [Safe Context Switching for Agents in the Wild](http://arxiv.org/abs/2610.05219v1) | Akash Das 等 | 通过正交适配解决推理与安全表示之间的几何干扰问题，实现安全任务切换。 |
| [Harness-Search: Guiding Long-Horizon Search through Multi-Agent Coordination](http://arxiv.org/abs/2610.05382v1) | Shanyong Wang 等 | 提出在框架中进行多智能体协调，以在长程搜索步骤中收集和综合证据。 |

### 🔧 方法与框架（新技术、基准测试、效率提升）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Spend Bytes on Breadth: Precision-Count Trade-offs for Decode-Time KV Compression](http://arxiv.org/abs/2610.05685v1) | Runguo Li | 研究如何在固定字节预算下在缓存令牌数量与精度之间分配，特别针对长CoT推理场景。 |
| [MedicalHarness: A Controlled Evaluation of LLMs and Agent Harnesses on Medical Tasks](http://arxiv.org/abs/2610.05778v1) | Ziqing Wang 等 | 证明基准分数是模型-框架对的属性，而非仅是模型的属性，并引入医疗任务的受控评估方法。 |
| [When Verifiable Counts Depend on Wording](http://arxiv.org/abs/2610.05278v1) | Qishi Zhan 等 | 引入WISE测试指令遵循分数在不同措辞表述相同约束时是否保持稳定。 |
| [Red-TTT: Test-Time Training for Automated Jailbreaking LLMs](http://arxiv.org/abs/2610.05282v1) | Tongyan Hu 等 | 将测试时训练应用于自动化红队攻击，使用TTT在推理时调整攻击策略。 |
| [Task Vector Descent: Learning from Non-IID Batches](http://arxiv.org/abs/2610.05402v1) | Anton Baumann 等 | 通过任务向量操作解决非IID数据批次的持续学习问题，实现知识获取而不遗忘。 |

### 📊 应用（领域特定、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Atomic Visual Entailment: Enhancing Zero-Shot Vision-Language Reasoning](http://arxiv.org/abs/2610.05630v1) | Nallathambi Vethiappan 等 | 将视觉蕴含假设分解为原子事实并通过学习选择来提升零样本V&L推理。 |
| [VHDL-REPOBENCH: A Repository-Level Benchmark for Evaluating LLMs on VHDL Design](http://arxiv.org/abs/2610.05380v1) | Prashanth Vijayaraghavan 等 | 引入首个用于评估LLM生成的VHDL硬件描述的仓库级基准，填补硬件设计自动化的空白。 |
| [Verification Trap: Understanding Test-Time Selection Failures](http://arxiv.org/abs/2610.05170v1) | Feng He 等 | 分析为什么当验证器和生成器共享错误前提时，测试时验证器选择会失败，破坏纠正信号假设。 |
| [Knowing the Rules, Applying the Rules: Evaluating Language Models on Traditional Chinese Bazi](http://arxiv.org.abab/2610.05682v1) | Jiulin Li 等 | 区分了解领域规则与应用规则，通过3000道中国八字选择题揭示规则应用的差距。 |

---

## 3. 研究趋势信号

围绕**推理时计算优化**的清晰趋势浮现——研究者正从简单的思维链扩展转向复杂的分配决策：在哪里添加推理令牌、如何在内存预算下压缩KV缓存、以及何时更长推理实际有帮助。这反映了推理导向LLM研究的成熟。

**智能体安全与上下文切换**代表一个新前沿，多篇文章通过正交适配和几何干扰分析解决推理能力与安全对齐之间的张力。这表明随着智能体变得更强大，该领域正在应对根本性的权衡问题。

**评估方法论**正在受到新的关注，多篇论文强调基准分数混淆了模型能力与框架设计、指令措辞和评估缺陷。这种方法论自我修正对于可靠的进度追踪至关重要。

---

## 4. 值得深入阅读

1. **[Expanding LLM Reasoning](http://arxiv.org/abs/2610.05584v1)** — 本文为预测应在推理链内何处投入额外计算提供了原则性框架。"扩展效用"概念具有通用性，弥补了从业者如何分配测试时计算的实践空白。

2. **[Safe Context Switching for Agents in the Wild](http://arxiv.org/abs/2610.05219v1)** — 推理与安全表示之间几何干扰的分析是一个新穎的机制解释：为什么安全护栏在思维链推理后有时会退化。提出的正交适配在概念上优雅且实际重要。

3. **[Verification Trap: Understanding Test-Time Selection Failures](http://arxiv.org/abs/2610.05170v1)** — 本文挑战了代码生成中的一个广泛假设（验证器提供独立的纠正信号），表明生成器和验证器之间共享的错误前提如何造成系统性选择失败。这对任何测试时选择范式都有影响。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*