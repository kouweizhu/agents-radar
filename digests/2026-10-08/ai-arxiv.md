# ArXiv AI 研究日报 2026-10-08

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-08 02:13 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest from English to Chinese (Simplified Chinese). I need to follow the translation rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code, file paths verbatim
4. Keep technical terms like "KV cache", "RL", "LLM", "benchmark" etc. in their original form (but use natural technical Chinese)
5. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all the structure and formatting.</think>

# ArXiv AI 研究简报 — 2026 年 10 月 8 日

## 今日精选

今日投稿显示，**智能体 AI** 呈现强劲发展态势——多篇论文涉及运行时预测、技能演进和过程感知评估。同时，**推理增强** 仍然是核心主题，涵盖 LLM 过程奖励强化学习、扩散模型的递归潜表示等多个方向。值得注意的是，**模型效率** 持续受到关注，包括 KV 缓存量化、输出嵌入的灾难性遗忘以及最小可解释 Transformer 等工作。多模态生成与组合推理的融合也格外突出，同时业界对**个性化**和**数据高效学习**的兴趣日增，这些对于实际部署至关重要。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [BoT-GRPO: Efficient Process-Reward RL for Reasoning via Bag-of-Token Aggregation](http://arxiv.org/abs/2610.09804v1) | Yingxiang Yang 等 | 提出 BoT-GRPO，通过 Token 分组聚合来聚合 Token 级优势，加速推理模型过程监督强化学习的收敛，解决了 GRPO 中均匀优势分配的低效问题。 |
| [A Deafening Silence: Catastrophic Forgetting Lives in the Output Embeddings of Tokens the Data Never Speaks](http://arxiv.org/abs/2610.09835v1) | Jonghyun Han 等 | 揭示大语言模型中的灾难性遗忘主要影响训练数据中未出现的 Token 的输出嵌入，提出参数冻结作为缓解策略。这对于持续预训练场景具有重要意义。 |
| [MIRROR: From Imitation to Internalization in LLM Personalization](http://arxiv.org/abs/2610.09795v1) | Huayi Lai 等 | 提出元个性化框架，通过自蒸馏桥接风格模仿与内容质量，使 LLM 能够在无需显式微调的情况下内化参考画像。 |
| [Fully Interpretable Minimal Transformers: From Geometry to Algorithm](http://arxiv.org/abs/2610.09838v1) | Raneem Mahajne 等 | 构建约束嵌入维度的最小 2D Transformer 模型，实现内部表示和注意力机制的完整可视化，服务于可解释性研究。 |
| [Reproducible LLM Inference Benchmarking: A Sequential Isolation Protocol](http://arxiv.org/abs/2610.09778v1) | Arnold Olympio 等 | 提出序贯隔离方法以降低 LLM 推理基准测试的方差，解决跨运行测量的可复现性问题。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [AgentTime: Can Agents Estimate and Control Their Own Runtime?](http://arxiv.org/abs/2610.09944v1) | Michael Ofengenden 等 | 为 AI 智能体引入时间感知能力，预测并控制自身的实际运行时间，解决原生智能体框架中的一个关键空白。 |
| [LiveMACE: Process-Aware Evaluation of LLM Agent Capabilities in Evolving Markets](http://arxiv.org/abs/2610.09872v1) | Jun Zhao 等 | 提出 LiveMACEBench，一个过程感知基准，在闭环市场环境中评估智能体的推理能力而非仅关注最终结果。 |
| [SkillForge: Co-Evolving Skills and Agents via Dynamic Skill Lifecycles](http://arxiv.org/abs/2610.09832v1) | Yuyao Ge 等 | 为记忆增强型 LLM 智能体引入动态技能生命周期管理，实现技能与策略的协同演进，防止过时技能的持续保留。 |
| [Training Advisors for LLM Agents from Task Outcomes](http://arxiv.org/abs/2610.09858v1) | Sergei Polezhaev 等 | 提出 Caddie，训练批评智能体仅从任务结果提供自然语言反馈来改进智能体决策。 |
| [Self-Evolve With a Reference: Anchored Training of Tool-Integrated Agents](http://arxiv.org/abs/2610.09856v1) | Wenjie Lia 等 | 提出课程智能体和执行器，通过参考锚定训练改进工具集成智能体学习循环中的自一致性信号。 |
| [Think Before You Paint: Recursive Latent Reasoning for Diffusion Models](http://arxiv.org/abs/2610.09876v1) | Paweł Skierś 等 | 通过递归潜表示 (TRM) 将离散符号推理与扩散模型结合，解决数独和迷宫等视觉推理任务，这些通常是扩散模型难以胜任的。 |

### 🔧 方法与框架（新技术、基准、效率优化）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Dual-QK: Sharp Queries and Flat Keys for Prunable 2-bit KV Caches](http://arxiv.org/abs/2610.09827v1) | Sunjoo Whang 等 | 提出基于旋转的量化与 Query-Key 解耦，实现 2-bit KV 缓存剪裁，重新分配 Key 异常值的能量以提高压缩效率。 |
| [Layerwise Error Attribution for Fast and Robust Mixed-Precision Post-Training Quantization](http://arxiv.org.abs/2610.09877v1) | Samy Houache 等 | 引入层级误差归因来管理混合精度 PTQ 中的敏感度，解决内存预算下的组合分配问题。 |
| [ORCA: Hunting Compositional Failures in Text-to-Image Diffusion](http://arxiv.org/abs/2610.09841v1) | Arshia Hemmat 等 | 系统分析并解决文生图扩散模型的组合失败问题，如属性错误绑定和空间关系反转。 |
| [UltraText Bench: A Comprehensive Bilingual Benchmark for Evaluating Visual Text Rendering](http://arxiv.org/abs/2610.09823v1) | Deyuan Liu 等 | 提出图像生成中文本渲染的双语基准，测试高要求场景下的持续性能。 |
| [Global Average Precision for Representation Learning](http://arxiv.org/abs/2610.09863v1) | Bill Psomas 等 | 提出全局 mAP 指标，同时评估所有查询的表示学习，而非按查询平均。 |
| [Decoupling Logic from Persona: Structural Immunity of Edge LLM Agents to Context Pollution](http://arxiv.org/abs/2610.09772v1) | Masaaki Nakatsu 等 | 研究边缘 LLM 智能体在对话历史填充大量角色信息时如何维持逻辑推理能力。 |

### 📊 应用（领域特定、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Learning Traffic Flow Dynamics with Stochastic Physics-Informed Neural Cellular Automata](http://arxiv.org/abs/2610.09946v1) | Federica Bragone 等 | 结合元胞自动机与物理信息神经网络构建可解释的交通流建模，捕捉局部交互规则和涌现动力学。 |
| [Learning joint probabilistic weather forecasts from station observations alone](http://arxiv.org/abs/2610.09898v1) | Chaeyeon Yi 等 | 提出 CLARA，仅从气象站数据学习地面天气变量的联合高斯预测分布，无需数值天气预报模型。 |
| [Many Ways to Succeed: Diversity-Driven RL Fine-Tuning for VLA Generalization](http://arxiv.org/abs/2610.09943v1) | Haoru Li 等 | 使用多样性驱动 RL 微调通过选择性重塑探索来改进视觉语言动作策略的分布外泛化。 |
| [Itgan at NADI 2026: Parameter-Efficient Whisper Adaptation for Robust Arabic ASR](http://arxiv.org/abs/2610.09934v1) | Ibrahim Almajai 等 | 使用 LoRA 适配 Whisper 实现跨方言和代码切换语音的鲁棒阿拉伯语 ASR，在消费级 GPU 上取得优异效果。 |
| [KGATE: a Knowledge Graph Embedding Training Environment](http://arxiv.org/abs/2610.09927v1) | Benjamin Loire 等 | 提供知识图谱嵌入模型的综合训练环境，支持链接预测和分类的自编码器架构。 |

---

## 研究趋势信号

今日投稿清晰描绘了领域发展走向。**智能体系统**占据主导地位——社区正致力于实现能够预测自身运行时、动态演进技能、以及超越结果指标进行严格评估的智能体。**过程监督强化学习** (BoT-GRPO) 的兴起标志着从基于结果的奖励建模向细粒度 Token 级推理监督的转变。

在**效率方面**，KV 缓存压缩和混合精度量化正变得愈加复杂，结构性方法（Dual-QK）正在取代简单粗暴的方案。**输出嵌入的灾难性遗忘**研究尤其值得关注——它将遗忘问题重新定义为训练分布中 Token 级稀疏性的结果。

与此同时，**多模态推理**正从简单生成向组合鲁棒性（ORCA）、递归潜表示推理（Think Before You Paint）和严格基准测试（UltraText Bench）演进。离散推理与生成模型的融合预示着一种有前景的混合范式。

---

## 值得深入阅读

1. **[BoT-GRPO: Efficient Process-Reward RL for Reasoning via Bag-of-Token Aggregation](http://arxiv.org/abs/2610.09804v1)** — 这篇论文直接解决了强化学习当前训练推理 LLM 的一个根本性局限。Token 分组聚合方法为过程监督提供了一种原则性的途径，且不会产生过高计算开销。鉴于强化学习在激发涌现推理方面的核心作用，该方法可能成为推理模型训练流程的标准组件。

2. **[AgentTime: Can Agents Estimate and Control Their Own Runtime?](http://arxiv.org/abs/2610.09944v1)** — 运行时控制是自主智能体的一个未充分探索但实际关键的方向。这项工作开启了智能体能力的新维度——时间自我感知——对于在具有严格延迟预算的现实系统中部署智能体至关重要。其"时间感"的概念框架内涵丰富，很可能激发后续工作。

3. **[A Deafening Silence: Catastrophic Forgetting Lives in the Output Embeddings of Tokens the Data Never Speaks](http://arxiv.org.abs/2610.09835v1)** — 发现遗忘集中于未出现 Token 的输出嵌入既出人意料又具有可操作性。提出的参数冻结缓解方案简单而有效。这篇论文从根本上重构了我们对 LLM 灾难性遗忘的思考方式，对持续学习协议有直接启示。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*