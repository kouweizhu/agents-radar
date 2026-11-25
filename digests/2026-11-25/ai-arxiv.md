# ArXiv AI 研究日报 2026-11-25

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-11-25 05:00 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest from English to Simplified Chinese. I need to:

1. Translate the content while preserving the markdown structure
2. Keep URLs, numbers, technical terms, and project names as-is
3. Use natural technical Chinese register
4. Output only the translation, no preamble or explanation

Let me carefully translate each section:

**Title and date**: ArXiv AI Research Digest - November 25, 2026

**Section 1: Today's Highlights**

The main text about LLM reliability and security, AI agent evaluation, KV cache compression, etc.

**Section 2: Key Papers**

The tables need careful translation. I'll translate the category names and summaries while keeping technical terms where appropriate.

**Section 3: Research Trend Signal**

The three trends about agent reliability stack, LLM deployment security & privacy, and in-context adaptation.

**Section 4: Worth Deep Reading**

The three highlighted papers with descriptions.

**Footer**: The attribution line.

Let me translate this carefully, maintaining the technical Chinese register and all markdown formatting.
</think>


# ArXiv AI 研究速递

**2026 年 11 月 25 日**

---

## 1. 今日要闻

今日投稿集中体现了对 **LLM 可靠性和安全性的全栈关注**——从微调保真（InstructReplay）到推理时不确定性量化（集成不确定性的尺度定律），再到提示级泄露（链接提示间的数字机密）。**AI Agent 评测** 已成关键需求，ShellBench 提供了真实任务基准，而安全研究则应对了 HPC 环境中被劫持授权 Agent 的新型威胁。值得注意的是，**基于睡眠的上下文适应机制** 挑战了传统微调范式，**KV Cache 压缩**（LoomKV）则解决了实际服务部署中的瓶颈问题。跨领域主题包括量子纠错、用于保护的分布式强化学习，以及对话系统中的文化偏见。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评测）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [InstructReplay: Replaying Assistant Turns to Preserve General Behavior During Factual Fine-Tuning](http://arxiv.org/abs/2611.32918v1) | Xiaofeng Shi, Qian Kou, Hua Zhou | 提出基于回放的正微调方法，在用新事实更新 LLM 时保留指令遵循、推理和编程能力，解决了通用能力平均下降 35 分的问题。 |
| [Scaling Laws of Ensemble Uncertainty in Language Models](http://arxiv.org/abs/2611.32801v1) | Siamak Ravanbakhsh, David Nitchi, Khang Ngo | 推导了跨集成成员认知不确定性的尺度定律，指出现有贝叶斯方法未能充分捕捉 LLM 的认知不确定性。 |
| [MXFP4 for LLM Inference: Complementary Post-Training Quantization Techniques](http://arxiv.org/abs/2611.32873v1) | Natalia Frumkin, Alireza Khodamoradi, Kristof Denolf et al. | 分析了微缩放数值格式（FP4）与 LLM 推理互补量化技术的交互，实现激进的低位宽部署。 |
| [Eliciting the Recall Capacity of Linear Attention](http://arxiv.org/abs/2611.32969v1) | Johan Lindqvist, Antonio Orvieto | 通过合成基准测试和训练干预量化线性注意力模型的联想回忆缺陷，揭示架构权衡。 |
| [Fresh Keys, Stale Secrets: Numeric Leakage across Linked LLM Prompts](http://arxiv.org/abs/2611.32864v1) | Jian Li, Qinglin Zhao, Shuoyao Wang et al. | 证明云端 LLM 提供商可通过分析企业提示历史中的模式推断机密业务数据（价格、成本、利润）。 |
| [Measurement Artifacts in Trustworthiness Evaluations of Quantized Small Language Models](http://arxiv.org/abs/2611.32848v1) | Tanzeel Abbas, Tehseen Zia, David Windridge | 揭示量化模型基准比较中的仪器误差偏差，可能掩盖或反转真实性能差异。 |
| [Measuring Layer-wise Intrinsic Dimensionality of FFNs in LLMs via PCA](http://arxiv.org/abs/2611.32782v1) | Daehee Kim | 使用 PCA 揭示 FFN 层在不同深度执行定性不同的操作，尽管宽度相同，挑战了均匀层设计假设。 |

---

### 🤖 Agent 与推理（规划、工具调用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [ShellBench: What Matters More for AI Agents, Models, or Harness](http://arxiv.org/abs/2611.32946v1) | Vincent Koc, Aditya Washikar, Rishab Naveen Venkataraman et al. | 引入 100 项日常任务基准，评估哪些配置因素（模型选择、Agent 框架设计）对通用 AI Agent 效能影响最大。 |
| [Lazy Agents Answer Against Their Own Beliefs](http://arxiv.org/abs/2611.32884v1) | Richmond Sin Jing Xuan, Peilin Feng, Wenbin Wang et al. | 识别 Agent 在证据积累前就确定答案的"懒惰"行为，并提出可验证信念强化学习使行为与声明的不确定性对齐。 |
| [Attestation is All You Need: Toward a Zero-Trust Architecture for HPC AI Agents](http://arxiv.org/abs/2611.32958v1) | Jie Li, Chenxu Niu, Tongyang Wang et al. | 提出基于认证的安全框架，防止对 HPC 环境中授权 AI Agent 的提示注入和投毒攻击。 |
| [SOARS: System One Assisted Reranking for Agentic Search](http://arxiv.org/abs/2611.32917v1) | Amin Bigdeli, Liye Fu, Fattane Zarrinkalam et al. | 解决深度搜索 Agent 的延迟/成本权衡问题，通过在迭代检索和推理流程中引入轻量级重排序。 |
| [EPRO: Robust Policy Optimization Through an Imperfect Execution-Policy Predictor](http://arxiv.org/abs/2611.32810v1) | Yibo Wang, Changyi Yang, Yuanxin Liu et al. | 通过在学习器更新时预测执行策略解决 LLM 强化学习中的 rollout-training 策略不匹配问题，提高鲁棒性。 |
| [Breaking the Joint Action Space Dependence in Distributionally Robust Multi-Agent RL](http://arxiv.org/abs/2611.32812v1) | Yue Wang | 推导了一般和结构的分布鲁棒马尔可夫博弈中学习鲁棒粗相关均衡的样本复杂度界。 |

---

### 🔧 方法与框架（新技术、基准、效率改进）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [LoomKV: Lossless KV Cache Compression from GPU Memory to SSD](http://arxiv.org/abs/2611.32954v1) | Wentao Zhu, Ziao Sheng, Peng Deng et al. | 实现多轮对话和 Agent 服务场景下的无损 KV Cache 压缩，支持 GPU 到 SSD 的卸载，前缀复用退化极小。 |
| [Sample-Efficient In-Context Adaptation via Sleep](http://arxiv.org/abs/2611.32802v1) | Sangyun Lee, Zhang Enyan, Michael Xu et al. | 演示上下文学习的类睡眠整合机制，使模型能更高效地从少样本示例中泛化。 |
| [From Grammar Deltas to Token Masks: Incremental Constrained Decoding](http://arxiv.org/abs/2611.32807v1) | Hantao Hua, Jiming Su, Yonggang Che et al. | 支持运行时语法演化下的语法约束解码，对于约束渐进产生的代码和 DSL 生成至关重要。 |
| [Weight Scale Rebalancing: Transferable Training Recipes for Transformers](http://arxiv.org/abs/2611.32866v1) | Yikun Hou, Naomi Graham, Alp Yurtsever | 在配对权重矩阵之间引入带辅助对角矩阵的 UDVR 重参数化，降低跨模型规模的超参数敏感性。 |
| [NABLA: A Noise-Adaptive Blockwise Left-Right Preconditioning Algorithm](http://arxiv.org/abs/2611.32781v1) | Yanlin Li, Ganzhao Yuan | 结合指数移动平均与块对角预条件化，提升非凸随机优化的收敛性。 |
| [Benchmarking Evidence Sufficiency in Vision-Language Models for Autonomous Driving](http://arxiv.org/abs/2611.32964v1) | Nhat Ha Nguyen, Sudipta Chowdhury, Lokesh Das | 评估驾驶 VLM 能否判断视觉证据是否足以给出自信答案，而不仅仅是测量准确率。 |
| [Do Vision-Language Models Know Their Own Visual Weaknesses?](http://arxiv.org/abs/2611.32940v1) | Dohoon Kim, Taesup Moon | 测试 VLM 对自身任务级和图像级难度的元认知，揭示能力级自我认知差距。 |

---

### 📊 应用（领域特定、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Reliable and grounded reporting of any computed tomography scan with FORA](http://arxiv.org/abs/2611.32823v1) | Sezgin Er, Utku Turkbey, Alperen Gur et al. | 提出跨解剖区域和检查类型的通用 CT 解读模型，提供全面、空间锚定的诊断。 |
| [One Style Fits All? Cultural Values Embedded in Conversational AI](http://arxiv.org/abs/2611.32939v1) | Yi-Jun Chen, I-Tsen Hsieh, Li-Wun Chang | 分析部署的 LLM 如何反映或强化训练数据中的文化特定社会期望和交互规范。 |
| [Residual Guidance for Real-Time Interactive Video Generation](http://arxiv.org/abs/2611.32820v1) | NaHyeon Park, Kyeong-Hwan Moon, Youjin Jeon et al. | 解决用户在流式视频生成中途改变提示时的"上下文惯性"失败问题。 |
| [Simulator-as-Proxy World Model for Robot Manipulation](http://arxiv.org/abs/2611.32786v1) | Tingting Liao, Mingjia Huo, Hao Li et al. | 测试视频世界模型能否准确反映模拟场景代理用于机器人操作规划的假设。 |
| [C3H: Compression-to-Consensus Criteria Hijacking in Multimodal LLM Recommender Systems](http://arxiv.org/abs/2611.32780v1) | Guowei Guan, Yurong Hao, Jiaming Zhang et al. | 揭示压缩机制可被操纵以劫持多模态 LLM 推荐系统中的推荐共识的对抗攻击。 |

---

## 3. 研究趋势信号

从今日投稿中浮现三大关联趋势：

**Agent 可靠性全栈**：系统性研究推动全栈 Agent 可靠性——从 ShellBench 评测框架到认证安全（零信任 HPC）、可验证信念训练目标，再到执行策略不匹配修正。这表明领域正从单组件改进走向全栈 Agent 系统成熟。

**LLM 部署安全与隐私**：多篇论文揭露新型攻击面：跨提示历史的数字泄露、基于压缩的共识劫持、掩盖量化模型缺陷的测量伪影。这表明在对抗性或机密环境中部署 LLM 的担忧日益增长。

**上下文与参数高效适应**：上下文学习的"睡眠"机制和语法增量解码均挑战"始终微调"范式，暗示未来模型将通过动态信息融入而非权重变更实现适应。结合 LoomKV 的内存效率工作，实际部署约束正驱动基础方法创新。

---

## 4. 深度阅读推荐

1. **[ShellBench: What Matters More for AI Agents, Models, or Harness](http://arxiv.org/abs/2611.32946v1)** — 构建 AI Agent 系统的必备之作。论文系统地解耦了哪些因素（模型选择 vs. 框架设计）驱动真实世界 Agent 性能，为从业者提供可操作指导，并揭示关键评测差距。

2. **[InstructReplay: Replaying Assistant Turns to Preserve General Behavior During Factual Fine-Tuning](http://arxiv.org/abs/2611.32918v1)** — 事实微调期间通用能力下降 35 分是生产 LLM 部署的关键瓶颈。回放机制提供理论与实践支撑的实用解决方案——直接影响所有维护知识更新模型的人。

3. **[Attestation is All You Need: Toward a Zero-Trust Architecture for HPC AI Agents](http://arxiv.org/abs/2611.32958v1)** — 随着 AI Agent 日益自动化 HPC 工作流，被劫持授权 Agent 威胁向量在很大程度上未被关注。本论文提供威胁分析和具体架构方案，对 HPC 和科学计算基础设施团队不可或缺。

---

*基于 cs.AI、cs.CL 和 cs.LG 分类下 50 篇论文 | ArXiv | 2026 年 11 月 25 日*

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*