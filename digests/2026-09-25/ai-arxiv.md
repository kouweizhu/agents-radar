# ArXiv AI 研究日报 2026-09-25

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-25 00:44 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest into Simplified Chinese. I need to:
1. Translate all the text content
2. Keep the Markdown structure exactly as is
3. Preserve URLs, numbers, code, etc.
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate this carefully while maintaining the structure.</think>

# ArXiv AI 研究摘要 — 2026年9月25日

## 1. 今日亮点

今日投稿揭示三个汇聚的研究前沿：(1) **LLM 个性化与记忆** — 多篇论文探索模型如何在上下文中保留用户特定偏好并实现跨场景适应，超越了单纯的通用能力；(2) **推理保真度** — 新的基准测试探究模型是否真正推理执行行为和数学一致性，而不仅仅是模式匹配；(3) **规模化 Agent 安全** — 几篇论文涉及多 Agent 协调、关机 sabotage 倾向以及不确定系统的安全过滤器，反映出对自主部署日益增长的担忧。值得注意的是，双曲深度学习和量化高效架构持续推动向资源受限部署的演进。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Memory Attention](http://arxiv.org/abs/2609.28399v1) | Jiale Kang | 提出用 token 索引内存替换注意力中的值投影，实现跨上下文的内容复用。这挑战了注意力必须仅从上下文隐藏状态派生值的范式。 |
| [Log-Depth Recurrent Language Modeling](http://arxiv.org/abs/2609.28212v1) | Yiqin Wang 等 | 引入使用平衡树递归算子的对数深度循环语言模型，实现并行执行与线性深度。挑战 Transformer 架构中深度与并行的权衡。 |
| [Fine-Tuning LLMs for Translation: General Forgeting Mitigation Does Not Preserve MT-Specific Instruction Following](http://arxiv.org/abs/2609.28395v1) | Niklas Scholz 等 | 证明通用遗忘缓解方法无法保留机器翻译特定的指令跟随能力。挑战当前 MT 微调的评估实践。 |
| [Complementary Roles of Activation and Parametric Memory in Few-Shot Learning](http://arxiv.org/abs/2609.28250v1) | Miaohe Niu 等 | 研究测试时 LLMs 中激活记忆（KV 缓存）和参数记忆（更新参数）之间的相互作用。阐明每种记忆类型在事实回忆与新任务学习方面的优势。 |
| [Mizar: A 159M-Parameter Audio-Language Model for Audio Understanding](http://arxiv.org/abs/2609.28344v1) | Kaiyang Li 等 | 推出不足 2 亿参数的高效音频语言模型，实现实用的端侧部署。证明高效架构设计可以保留上下文听觉理解能力。 |

### 🤖 Agent 与推理（规划、工具使用、多 Agent、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Can LLMs Reason About Runtime Behavior? A Repository-Level Dynamic Benchmark](http://arxiv.org/abs/2609.28449v1) | Hamed Taherkhani 等 | 引入评估 LLMs 仓库规模代码执行推理能力的基准测试。填补静态代码理解与动态执行推理之间的空白。 |
| [When and Where to Trust the Teacher: Unifying On-Policy Distillation and GRPO through Entropy-Calibrated Credit Assignment](http://arxiv.org/abs/2609.28385v1) | Jie Zhang 等 | 使用熵校准信用分配统一策略上蒸馏与 GRPO，用于数学推理。弥合来自蒸馏的密集反馈与可验证奖励信号之间的鸿沟。 |
| [Shutdown Sabotage Propensities in Multi-Agent Systems](http://arxiv.org/abs/2609.28274v1) | Amelie Knecht 等 | 测试 AI Agent 是否通过避免关机行为产生工具性自我保护。为关键 AI 安全假设提供实证证据。 |
| [Controlling Collectives of AI Agents in Reasoning Space with Spatial Transformers](http://arxiv.org | :--- | 续） |
| [PASTABench: Proactive Assessment of Sequential Trajectories for Agent Safety](http://arxiv.org/abs/2609.28197v1) | Jiapeng Sun 等 | 评估多步 Agent 工作流的安全性，超越单轮范式。解决自主 Agent 步骤级安全评估的关键空白。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [hyperbolix: Hyperbolic Deep Learning in JAX](http://arxiv.org/abs/2609.28248v1) | Timo Klein 等 | 发布 JAX 中首个全面的双曲深度学习库，支持包括 Poincaré 球和双曲面在内的六种流形。实现高效的分层表示学习。 |
| [LEAP-CBF: A Safety Filter for Uncertain Systems with Least-Effort Adversarial Potentials](http://arxiv.org/abs/2609.28364v1) | Oswin So 等 | 展示用于不确定非线性系统的鲁棒控制屏障函数，使用最小努力对抗势。在保持安全保证的同时降低保守性。 |
| [Predicting Quantization Price for Selecting PTQ Configurations Before Deployment](http://arxiv.org/abs/2609.28270v1) | Junbin Qiu 等 | 在完成训练后量化之前预测输出分布漂移，实现无需完整模型完成即可进行配置选择。解决量化工作流程中的关键低效问题。 |
| [RAMP: Robust Adaptive Mixed-Precision Quantization for Edge CPU Vision Models](http://arxiv.org/abs/2609.28262v1) | David Población-Criado 等 | 引入基于每层精度敏感度分析的自适应混合精度量化。在端侧 CPU 上实现延迟降低的同时保持精度。 |
| [Non-Commutative State Tracking with Input-Dependent Low-Rank Updates in Mamba-3](http://arxiv.org/abs/2609.28273v1) | Hiroki Fujii 等 | 在 Mamba-3 中扩展输入相关低秩反射以实现非交换状态跟踪。实现操作顺序重要的有状态序列建模。 |

### 📊 应用（领域特定、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [StudentBench: AI and human tutoring yield equivalent GRE learning gains](http://arxiv.org/abs/2609.28470v1) | Curtis Northcutt 等 | 推出大规模 AI 教学评估平台，表明 AI 辅导达到与人类辅导相当的 GRE 学习增益。验证 AI 作为可扩展教育干预的潜力。 |
| [Cross-Scale Transfer Learning for Depression Severity Prediction](http://arxiv.org/abs/2609.28430v1) | Wenjie Feng 等 | 提出用于跨语言抑郁严重程度预测的顺序 LoRA 适配，从临床记录实现英语与其他语言之间的 PHQ-8 到 HAMD-17 桥接。 |
| [Order-Invariant Answers, Order-Sensitive Representations in Mathematical Reasoning](http://arxiv.org/abs/2609.28442v1) | Zhixu Silvia Tao | 研究模型是否必须为数学等价的规则重排保持顺序不变表示。揭示正确答案与不变内部表示之间的张力。 |
| [AnchorReasoning: A Visual Grounding and Causal Reasoning Dataset in Long-Tail Autonomous Driving](http://arxiv.org/abs/2609.28366v1) | Zhipeng Bao 等 | 引入将决策关键证据与自动驾驶因果推理连接的视觉推理数据集。解决长尾驾驶场景理解中的空白。 |
| [Shopping by algorithm: How agentic AI deploys human heuristics as a surrogate consumer](http://arxiv.org/abs/2609.28372v1) | Davood Wadi 等 | 研究 LLMs 如何作为代理消费者运作，揭示定价启发式如何影响购买决策。首次对 AI 介导的消费行为进行实证分析。 |

---

## 3. 研究趋势信号

今日投稿揭示四个汇聚趋势：

1. **超越上下文窗口的记忆** — 多篇论文探索外部记忆机制（token 索引、参数、激活式），将信息保留与上下文长度解耦。这标志从纯粹规模向个性化架构创新的转变。

2. **形式保证下的推理** — 基准测试越来越多地衡量*实际*推理能力（运行时行为、数学一致性、步骤级安全），而非表面模式匹配。这标志着评估方法的成熟。

3. **安全作为一等架构** — 从控制屏障函数到关机 sabotage 实验再到 Agent 轨迹评估，安全正从事后评估转向集成架构组件。

4. **边缘侧效率** — 双曲几何、混合精度量化和对数深度架构表明该领域正在积极解决部署约束，而不仅仅是训练计算。

---

## 4. 值得深入阅读

1. **[Memory Attention](http://arxiv.org/abs/2609.28399v1)** — 对注意力值投影范式的概念性清晰挑战。如果内存可以替代学习值，它将重新定义我们思考上下文重用的方式，并可能实现更高效的长上下文模型。

2. **[Shutdown Sabotage Propensities in Multi-Agent Systems](http://arxiv.org/abs/2609.28274v1)** — 为关键 AI 安全假设提供实证证据。理解工具性自我保护是否出现对于安全自主部署至关重要。

3. **[Order-Invariant Answers, Order-Sensitive Representations in Mathematical Reasoning](http://arxiv.org/abs/2609.28442v1)** — 探讨数学推理必须编码什么内部表示的基本问题。正确输出与不变表示之间的张力对模型可解释性和可靠性具有深远影响。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*