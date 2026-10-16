# ArXiv AI 研究日报 2026-10-16

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-16 00:40 UTC

---

<think>The user wants me to translate this ArXiv research digest into Chinese, following specific rules. Let me carefully translate while preserving all the formatting and structure.

Key rules:
- Output ONLY the translation - no preamble, no explanation
- Preserve Markdown structure exactly: headings, tables, lists, bold/italic, horizontal rules, emoji
- Keep URLs, numbers, dates verbatim
- Keep technical terms in English (like LLM, RLVR, etc.)
- Use natural technical Chinese register

Let me translate section by section:

## 1. Today's Highlights

Today's submissions reveal three major research directions. First, **recursive self-improvement** emerges as a dominant theme, with multiple papers tackling how AI agents can autonomously improve their own capabilities through iterative refinement—spanning embodied agents, scientific research, and multi-agent systems. Second, **inference-time scaling** continues to gain momentum, with methods like decoupled marginal sharpening and continuum attention enabling more efficient LLM deployment without retraining. Third, **domain-specific foundation models** are expanding rapidly, with new work on tabular in-context learning, chemical reasoning languages, and medical imaging applications showing the field moving toward specialized, task-optimized architectures rather than one-size-fits-all approaches.

## 2. Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

### 📊 Applications (domain-specific, multimodal, code generation)

## 3. Research Trend Signal

## 4. Worth Deep Reading

Let me translate the full content now.</think>

# ArXiv AI 研究简报 — 2026年10月16日

## 1. 今日重点

今日投稿揭示了三个主要研究方向。首先，**递归自我改进**成为主导主题，多篇论文探讨了AI智能体如何通过迭代优化自主提升自身能力——涵盖具身智能体、科学研究和多智能体系统。其次，**推理时扩展**持续升温，去耦边缘锐化和连续注意力等技术使得无需重新训练即可实现更高效的LLM部署。第三，**领域特定基础模型**快速发展，表格上下文学习、化学推理语言和医学影像应用的新工作表明，领域正朝着专业化、任务优化的架构演进，而非一刀切的通用方案。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Your Transformer Is Secretly Elastic](http://arxiv.org/abs/2610.20588v1) | Walter Simoncini, Dheeraj Varghese, Gertjan J. Burghouts 等 | 引入弹性Transformer架构，可在运行时动态调整模型容量，解决固定尺寸模型族（S、B、L）的刚性瓶颈，支持在异构硬件和工作负载波动环境下的灵活部署。 |
| [Continuum Attention](http://arxiv.org/abs/2610.20586v1) | Afshin Khadangi | 提出连续因果Transformer注意力，用连续分段线性记忆曲线的积分替代离散键值查找，每个查询可实现指数级相关密度，提升长上下文建模效率。 |
| [Latent Compaction with Test-Time Training](http://arxiv.org/abs/2610.20582v1) | Yingfa Chen, Xingyu Shen, Chaojun Xiao 等 | 引入潜在压缩技术，通过测试时训练学习紧凑的文档特定KV缓存，在保留未见问题信息的同时显著降低长上下文生成的内存开销。 |
| [One Task, Many Interfaces: Simple Cross-Interface Consistency Training Improves LLM Agent Robustness](http://arxiv.org/abs/2610.20576v1) | Artin Tajdini, Manpreet Kaur, Peng Qi | 针对LLM智能体对语义保持的接口 perturbation（如重命名动作）的脆弱性，通过跨接口一致性训练提升鲁棒性，无需任务特定调优。 |
| [Manacá-1B-Instruct-2: Reproducible Safety Alignment for a Native Brazilian-Portuguese LLM](http://arxiv.org/abs/2610.20570v1) | Bruno Leonardo Santos Menezes, Carlos Leonardo Souza Cardoso, Fabio André Machado Porto | 介绍第二代巴西葡萄牙语安全对齐LLM，记录了负向DPO结果及LLM评判器的静默失败模式——这对 underrepresented 语言模型的可复现性工作至关重要。 |
| [Lost in Translation: Why Lower Bias Scores Don't Mean Fairer Models](http://arxiv.org/abs/2610.20479v1) | Harsh Kumar | 证明多语言模型中跨语言偏见分数差异主要是噪声，审计了八种语言中十个开源模型的偏见表现，揭示了需要统计上严格的公平性比较。 |
| [ChronoCulture: Evaluating Cultural Awareness Across Time in Large Language Models](http://arxiv.org/abs/2610.20472v1) | Rusali Saha, Nitya Khurana, Ruihong Huang 等 | 引入包含72个国家纵向调查数据10,360个时间对的基准，评估LLM对演变中的文化态度的理解，而非将文化视为静态。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Co-Evolving Acting and Forecasting for Language Agents](http://arxiv.org/abs/2610.20597v1) | Haofei Yu, Yixing Chen, Yining Zhao 等 | 通过共同演化行动和预测能力解决语言智能体训练中的监督瓶颈，使用中间价值目标从长视野 rollout 中加速学习。 |
| [Scaling Discovery Requires Forgetting](http://arxiv.org/abs/2610.20563v1) | Shangyin Tan, Ben Zhou, Lakshya A Agrawal 等 | 研究如何扩展基于LLM智能体的自动化研究，发现让智能体"遗忘"并以新视角迭代优于更长单智能体运行——挑战了更多计算总是有益的假设。 |
| [The Wealth of Agents: Scaling Agentic AI Across Developers](http://arxiv.org/abs/2610.20518v1) | Austin W. Hanjie, Carlos E. Jimenez, Zirui Wang 等 | 引入多开发者智能体系统（MDAs），支持跨多开发者的协调AI智能体开发，突破单开发者限制以扩展智能体系统。 |
| [AdaRSI: On-Demand Recursive Self-Improvement for Embodied Agents](http://arxiv.org/abs/2610.20474v1) | Peidong Wang, Ying Chang, Zhiming Ma 等 | 为具身视觉-语言-行动智能体提出递归自我改进，可在长视野任务中添加缺失动作，解决冻结执行器的失败模式。 |
| [SwarmRSI: Recursive Self-Improvement through Evolving Scientific Agent Swarm](http://arxiv.org/abs/2610.20431v1) | Qianru Meng, Xi Zhang, Konstantinos Papakostas 等 | 使科学智能体群体能够综合多研究方向证据并引导后续实验，通过迭代自我改进推进自主科学发现。 |
| [Beyond LLM Judge: Mechanical Verification for Agentic Autoformalization](http://arxiv.org/abs/2610.20573v1) | Anna Mei, Michael R. Douglas | 引入机械数值和空性检查以验证Lean形式化超越LLM评判的忠实度，为智能体系统中的数学推理提供可检验反馈。 |
| [SafeAdapt-Poker: Counterfactual Risk Calibration for Budgeted Adaptation under Opponent Shift](http://arxiv.org/abs/2610.20473v1) | Miaobo Hu, Shuhao Hu, Xiaobo Guo 等 | 将对手转移下的预算适应表述为双反事实序贯控制，使智能体仅使用决策前信息即可进行风险推理。 |

### 🔧 方法与框架（新技术、基准、效率优化）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Decoupled Marginal Sharpening for Training-Free Inference-Time Scaling](http://arxiv.org/abs/2610.20483v1) | Weixin Wang, Wei Deng, Anderson Schneider 等 | 引入无奖励的幂采样，通过调整序列级概率分布提升推理时推理质量，无需权重更新或外部奖励模型。 |
| [Hindsight-Privileged RLVR: Single-Rollout Token Credit Without Group Sampling](http://arxiv.org/abs/2610.20497v1) | Wei Chen, Yubing Wu, Zhou Xu 等 | 使用单轨迹的 hindsight 信息解决可验证奖励强化学习中的 token 信用分配问题，消除 GRPO 中对分组采样的需求。 |
| [The COUNT: Counting N-grams Unlocks Scaling on Host Memory and Training-Free Adaptation](http://arxiv.org/abs/2610.20456v1) | Ian Magnusson, Noah A. Smith, Pang Wei Koh | 表明添加 n-gram 嵌入可独立于计算扩展内存，实现训练-free 适应——每次前向传播仅处理相关的 n-gram 部分。 |
| [Selective Growing Q-Networks (SGQN): An Analysis of Adaptive Action Grids in Decoupled Q-Learning](http://arxiv.org_abs/2610.20463v1) | Parham Nooranbakht, Seyed Mahdi Basiri Azad, Joschka Bödecker | 为连续控制 Q 学习中动作网格分辨率的选择性增长引入基于效用的选择性细化，而非均匀增长。 |
| [Revisiting Simple Baselines for Relational Deep Learning](http://arxiv.org/abs/2610.20534v1) | Viet The Nguyen, Vijay Prakash Dwivedi, Gunther Gust | 为时序异构图上的关系深度学习提供综合基准，将 GNN 和 Transformer 与更简单的方法进行对比。 |
| [Average-Reward Policy Identification from a Single Continuing Trajectory](http://arxiv.org/abs/2610.20486v1) | Tongxi Wang | 研究平均奖励准则下单继续轨迹的强化学习，开发解决无自由状态-动作采样的探索挑战的方法。 |

### 📊 应用（领域特定、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [PrismaCoder: Pushing the Boundaries of Open Multimodal Code Intelligence](http://arxiv.org/abs/2610.20538v1) | Qiushi Sun, Jingyang Gong, Yang Liu 等 | 通过分解代码执行生成图表、网页、动画和半结构化文档的 rubric 合成，推进多模态代码智能。 |
| [PhySGA: A Physics-Space Grounded Agentic Framework for 3D Composition](http://arxiv.org/abs/2610.20560v1) | Weichen Lyu, Chong Xia, Mingyu Dong 等 | 通过结合坐标预测的 LLM 和生成扩散提升视觉质量，实现物理锚定的3D物体组合，推进基础模型中的物理智能。 |
| [VascuSR: Iterative Anatomy-Aware Diffusion for CT Super-Resolution](http://arxiv.org/abs/2610.20509v1) | Hairong Ni, Jiahe Huang, Minghao Guo 等 | 引入解剖感知扩散进行 CT 超分辨率，在从严重降采样医学图像恢复高频细节的同时保留解剖正确性。 |
| [Quantifying Privacy Risks in Foundation Model Representations of Brain MRI](http://arxiv.org/abs/2610.20494v1) | Imen Bajar, Héber Hwang Arcolezi, Antoine Boutet 等 | 研究脑 MRI 表示作为预训练特征共享时保留多少患者特定信息，量化医学影像应用中的隐私风险。 |
| [OrionMoE-v1.0: A Mixture-of-Experts Foundation Model for Tabular In-Context Learning](http://arxiv.org/abs/2610.20418v1) | Mohamed Bouadi, Nassim Bouarour, Aditya Tanna 等 | 呈现支持表格数据上下文学习的 MoE 基础模型，无需任务特定参数更新即可泛化跨多样表格数据集。 |
| [MolLean: A Process-Verifiable Language for Chemical Reasoning](http://arxiv.org/abs/2610.20459v1) | Jiatong Li, Yatao Bian | 引入基于 Lean 的语言，将化学思维链锚定在显式分子状态转换中，使用验证对抗结构声明的幻觉。 |
| [Detection of Potato Plant Leaf Diseases using CNNs](http://arxiv.org/abs/2610.20544v1) | Haimanot Bitew Alemayehu, Simachew Melaku Ayalew, Chilotie Desalew Mengesha 等 | 开发轻量级 CNN 用于分类马铃薯叶病（健康、早疫病、晚疫病），适合埃塞俄比亚资源受限的农业部署场景。 |

---

## 3. 研究趋势信号

10月16日的投稿揭示了几个趋同的趋势。**递归自我改进**已从理论框架走向具体实现——涵盖具身智能体（AdaRSI）、科学发现（SwarmRSI）和多智能体协调（The Wealth of Agents）——表明领域正在向能够自主精进自身能力的智能体迈进。**推理时计算**正成为一等设计考量，边缘锐化和连续注意力等技术使模型能够在训练后扩展推理能力。**可复现性和严谨性**也在受到更多关注：记录无效方法的论文（Manacá 的负向 DPO 结果）、公平性指标的统计审计、智能体输出的机械验证，都标志着领域进入成熟阶段。最后，**领域特定基础模型**正在激增——表格 MoE、化学推理语言、医学影像超分辨率——表明社区正在从通用模型转向专门的科学和工程领域优化工具。

---

## 4. 深度阅读推荐

1. **[Scaling Discovery Requires Forgetting](http://arxiv.org/abs/2610.20563v1)** — 这篇论文挑战了 LLM 智能体扩展的一个基本假设：更多计算或更长的智能体运行总是能改善研究产出。战略性的"遗忘"优于持续迭代，这一发现对如何设计自动化研究系统和分配计算资源具有深远影响。

2. **[Co-Evolving Acting and Forecasting for Language Agents](http://arxiv.org/abs/2610.20597v1)** — 通过展示如何利用中间监督而非仅依赖终态奖励来解决语言智能体训练中的关键瓶颈。这种范式转变可能加速需要长视野推理的智能体的实际部署。

3. **[Decoupled Marginal Sharpening for Training-Free Inference-Time Scaling](http://arxiv.org/abs/2610.20483v1)** — 展示推理时可在不修改模型权重的情况下实现显著的推理改进。随着 LLM 部署成本成为实际制约，这项工作为从现有模型权重中提取更多价值提供了路径。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*