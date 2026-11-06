# ArXiv AI 研究日报 2026-11-06

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-11-06 02:46 UTC

---

<think>The user wants me to translate the entire ArXiv AI Research Digest from English to Simplified Chinese. I need to:

1. Translate all text content while preserving the structure
2. Keep URLs, technical terms, identifiers, and code as-is
3. Use natural technical Chinese register
4. Output ONLY the translation with no additional explanation

Let me go through the content section by section:

**Header**: "ArXiv AI Research Digest — November 6, 2026" → "ArXiv AI 研究文摘 — 2026年11月6日"

**Section 1: Today's Highlights**
Translate the paragraph about three research vectors and the specific topics mentioned.

**Section 2: Key Papers**
Each paper has:
- Title (sometimes English, sometimes in parentheses - keep English titles)
- Authors (keep as-is)
- Summary (translate)
- URL (keep as-is)

**Section 3: Research Trend Signal**
Translate the paragraph about emerging directions.

**Section 4: Worth Deep Reading**
Translate the introduction and the three paper recommendations.

**Rules section**: Translate the bullet points about translation rules.

Let me do this carefully, maintaining the exact structure and formatting.

Tables need special attention - keep headers and content aligned.

Let me translate section by section:

---
# ArXiv AI 研究文摘 — 2026年11月6日

## 1. 今日精选

今天的投稿揭示了三个重要的研究方向。首先，**长上下文推理效率**成为关注焦点，递归稀疏注意力实现了对数成本的百万 token 外推，TriAttention 统一了长上下文 LLM 推理中的稀疏性和量化。其次，**智能体成本与安全**正在获得更多关注——从自动化环境优化到系统性测量 token 浪费，以及针对工具调用智能体提示注入的新型防御。第三，**专业领域基础模型**持续涌现，包括首个惯性感知基础模型（IMUDINO）和带显式时间上下文建模的统一 EHR 医疗预测方法。

---

## 2. 核心论文

### 🧠 大语言模型

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Recursive Sparse Attention: Million-Token Length Extrapolation at Logarithmic Cost](http://arxiv.org/abs/2611.07232v1) | R Wang, X Yang, M Zhang et al. | 提出递归稀疏注意力机制，实现 O(log N) 的查询选择成本，支持高效处理百万级 token 上下文。这解决了当前 LLM 部署受限于较短上下文的内存和计算瓶颈问题。 |
| [TriAttention: Unified Sparse Mixed-Precision Attention for Long-Context LLM Inference](http://arxiv.org/abs/2611.07256v1) | H Zhang, Q Zhang, Q Cao et al. | 通过识别注意力交互中不同精度需求来统一稀疏性和量化——某些交互需要高精度的得分计算，但对精度变化敏感。通过混合精度注意力优化框架提升长上下文推理效率。 |
| [Loopback Transformer: Towards a Unified View of Residual Looped Transformers](http://arxiv.org/abs/2611.07226v1) | X Ouyang, Z Cai, C Zhang et al. | 分析循环变压器中重复计算结果如何通过残差连接的深度-记忆视角进行重用，阐明了参数共享与表示能力之间的基本权衡。 |
| [Encoding and Propagation of Grammatical Number in Large Language Models](http://arxiv.org/abs/2611.07283v1) | J Solinsky, S Pakhomov et al. | 利用稀疏自编码器将 LLM 隐藏状态转化为与语法数相关的可解释特征，深入理解模型内部语言结构编码机制。 |
| [Archetypal contexts in the neurons of language models: an architecture for intelligence?](http://arxiv.org/abs/2611.07234v1) | D Nordfors et al. | 验证语言模型在不同主体域中保持关系模式的假设（如临界点），揭示模型智能的潜在表示结构。 |
| [Rethinking Data Selection: The Importance of Coverage over Difficulty in LLM Fine-Tuning](http://arxiv.org/abs/2611.07323v1) | L Pandia, K Misra, A Ettinger et al. | 证明基于覆盖范围的数据选择优于基于难度的选择，挑战了难题更具信息价值的传统认知，为训练数据筛选提供实证指导。 |

### 🤖 智能体与推理

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Test-Time Self-Play: Scaling without a Verifier](http://arxiv.org/abs/2611.07367v1) | A Yoshiyama, A Ashirmatov, J Hübotter et al. | 通过自博弈实现无验证器的测试时扩展，为缺少标准答案的领域带来计算资源优化。 |
| [How Do AI Agents Waste Your Money?](http://arxiv.org/abs/2611.07238v1) | H Zeng, Y Lu, J Cai et al. | 建立识别和量化 AI 智能体流水线中 token 浪费的系统方法，揭示当前智能体执行中的低效问题。 |
| [EnvOpt: Automated Optimization for Agent Environments](http://arxiv.org/abs/2611.07372v1) | M Li, H Mao, Q Mang et al. | 将环境优化作为提升智能体性能、降低成本的关键维度，系统化处理环境设计的可能性空间。 |
| [SPILLWAY: Separating Target Admission from Sanitization to Defend Tool-Using Agents against Prompt Injection](http://arxiv.org/abs/2611.07222v1) | W Lim, Y Chang, J Lee et al. | 通过分离行动执行决策与输入清理来保护工具调用智能体，防止嵌入在网页或共享文档中的指令注入攻击。 |
| [How Should Agents See Code? Rethinking Code Representations for Agentic Software Engineering](http://arxiv.org/abs/2611.07286v1) | M Sepidband, J Shin, S Wang et al. | 探索基于映射的代码表示工作流作为原始文件访问的替代方案，解决智能体感知和交互代码库的方式问题。 |

### 🔧 方法与框架

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [IMUDINO: Self-distilled Foundation Model for Inertial Sensing](http://arxiv.org/abs/2611.07437v1) | Z Ye, C Zhang, Z Wang et al. | 提出首个惯性感知基础模型，在人体活动识别、健康监测、运动捕捉和里程计算方面达到有竞争力的性能，弥补了传感器 AI 的重要空白。 |
| [CacheGraft: Enhancing Retrieval-Augmented Generation via Latent-Space Document Enrichment](http://arxiv.org/abs/2611.07393v1) | V Lakshman, P Chen, Z Gu et al. | 利用潜在空间中的缓存间转换丰富检索文档，突破仅文本检索的局限，通过直接操作 KV 缓存提升 RAG 质量。 |
| [From What Is Used to What Is Missing: Rethinking Dynamic Rank in LoRA](http://arxiv.org/abs/2611.07349v1) | P Xue, G Fan, G Chen et al. | 判断当前 LoRA 适应空间对任务是否充分，超越容量分配来思考适应空间充足性的根本问题。 |
| [Adversarial Multiplicity: Cherry-Picked Models and the Limits of Disclosure](http://arxiv.org/abs/2611.07378v1) | C Chou, B Huynh, A Koenecke et al. | 分析预测多样性——精度相同但预测不同的模型——如何被用于公平性优化，引发对模型报告披露实践的关切。 |
| [When Scores Conflict with Preferences: Pre-Alignment Diagnosis and Adaptive Correction of Constraint Drift in DPO](http://arxiv.org/abs/2611.07375v1) | P Liu, Y Yan et al. | 处理 DPO 中成对偏好与单点标准（长度、安全分数）冲突时的失效问题，提出约束漂移的诊断和修正机制。 |

### 📊 应用

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [How Deep is the Signal? Time-Context up to 30 Years for Colorectal Cancer Prediction in a Primary-Care EHR Model](http://arxiv.org/abs/2611.07265v1) | A Raviez, L Wang, B Delaney et al. | 引入"时间上下文"（日历回溯窗口）作为 EHR 基础模型更具临床意义的指标，证明了可追溯数十年的预测信号。 |
| [Scenario Augmentation for Rare Financial Events via Multimodal Latent Diffusion](http://arxiv.org/abs/2611.07282v1) | M Loodaricheh, A Raja, I SenGupta et al. | 利用多模态潜在扩散增强稀有金融事件，改善极端市场建模中的 CVaR 分类，解决极端市场数据稀缺的基本问题。 |
| [Graph Neural Networks for Resource Allocation in Integrated Sensing and Communication](http://arxiv.org/abs/2611.07377v1) | J Liao, L Chen, T Han et al. | 应用 GNN 优化车载 ISAC 网络中的功率分配，在功率预算约束下平衡感知与通信目标。 |
| [Two-stage residual learning for calibrated uncertainty in solar irradiance forecasts](http://arxiv.org/abs/2611.07444v1) | R Flanagan, E Kasha, P Talbot et al. | 将点预测与校准不确定性估计相结合，用于扩展时间范围外的太阳辐照度预测，对可再生能源电网整合至关重要。 |

---

## 3. 研究趋势信号

今天的投稿显示出几个新兴方向。**智能体经济性**正从能力展示成熟到系统性成本分析——"浪费"论文和 EnvOpt 框架表明，智能体资源消耗正成为一级优化目标。**专业领域基础模型**持续扩展到语言和视觉之外，进入惯性感知（IMUDINO）等领域，对机器人和物联网部署具有深远影响。**推理时计算**仍是核心焦点，长上下文效率的多条路径（递归稀疏注意力、TriAttention、HyFlash）表明这是现实部署中的关键瓶颈。**可解释性促进安全**以多种形式出现——从分析 LLM 中的语法编码到原型上下文表示——表明对模型内部理解的关注已超越能力基准测试。

---

## 4. 值得深入阅读

1. **[Recursive Sparse Attention: Million-Token Length Extrapolation at Logarithmic Cost](http://arxiv.org/abs/2611.07232v1)** — 这解决了 LLM 部署中最紧迫的实际约束。对数复杂度的突破可能从根本上改变长文档理解和智能体记忆的可能性，对 LLM 基础设施研究者至关重要。

2. **[IMUDINO: Self-distilled Foundation Model for Inertial Sensing](http://arxiv.org/abs/2611.07437v1)** — 首个惯性感知基础模型标志着传感器 AI 的重要里程碑。鉴于 IMU 传感器在智能手机、可穿戴设备和机器人中的普遍性，理解其架构和训练方法对构建感知系统的研究者意义重大。

3. **[How Do AI Agents Waste Your Money?](http://arxiv.org/abs/2611.07238v1)** — 随着智能体部署规模扩大，理解并测量 token 效率在商业上变得关键。这个识别浪费的系统框架为未来的智能体优化研究奠定了基础。

---

**规则**：
- 仅输出翻译内容，无需前言、解释或整个输出的 markdown 代码块围栏。
- 严格保持 Markdown 结构：标题、表格（包括对齐行）、列表、块引用、加粗/斜体、分隔线、emoji。
- URL、链接目标、代码片段、代码块、数字和日期保持原样。
- 项目名称、仓库路径、用户名、版本标签、文件路径和 API/配置标识符保持原样，不翻译。
- 涉及 #12345 等 Issue/PR 引用及其链接文本保持原样。
- 使用自然的技术中文，适合中文开发者通讯的语域——而非逐字对译。
</think>


# ArXiv AI 研究文摘 — 2026年11月6日

## 1. 今日精选

今天的投稿揭示了三个重要的研究方向。首先，**长上下文推理效率**成为关注焦点，递归稀疏注意力实现了对数成本的百万 token 外推，TriAttention 统一了长上下文 LLM 推理中的稀疏性和量化。其次，**智能体成本与安全**正在获得更多关注——从自动化环境优化到系统性测量 token 浪费，以及针对工具调用智能体提示注入的新型防御。第三，**专业领域基础模型**持续涌现，包括首个惯性感知基础模型（IMUDINO）和带显式时间上下文建模的统一 EHR 医疗预测方法。

---

## 2. 核心论文

### 🧠 大语言模型

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Recursive Sparse Attention: Million-Token Length Extrapolation at Logarithmic Cost](http://arxiv.org/abs/2611.07232v1) | R Wang, X Yang, M Zhang et al. | 引入递归稀疏注意力，每个查询的选择成本为 O(log N)，支持高效的百万 token 上下文处理。这解决了限制当前 LLM 部署于较短上下文的内存和计算瓶颈。 |
| [TriAttention: Unified Sparse Mixed-Precision Attention for Long-Context LLM Inference](http://arxiv.org/abs/2611.07256v1) | H Zhang, Q Zhang, Q Cao et al. | 通过识别有用的注意力交互在精度需求上的差异来统一稀疏性和量化——有些交互可以容忍低精度分数，但对移除敏感。提供了一个混合精度注意力优化的原则性框架。 |
| [Loopback Transformer: Towards a Unified View of Residual Looped Transformers](http://arxiv.org/abs/2611.07226v1) | X Ouyang, Z Cai, C Zhang et al. | 通过残差连接的深度-内存视角分析循环 transformer 中重复计算结果如何被重用。阐明了参数共享与表示能力之间的基本权衡。 |
| [Encoding and Propagation of Grammatical Number in Large Language Models](http://arxiv.org/abs/2611.07283v1) | J Solinsky, S Pakhomov et al. | 使用稀疏自编码器将 LLM 隐藏状态翻译为与语法数相关的可解释特征，深入理解模型内部"心理"语法表示。推进了我们对 LLM 如何编码语言结构的认知。 |
| [Archetypal contexts in the neurons of language models: an architecture for intelligence?](http://arxiv.org/abs/2611.07234v1) | D Nordfors et al. | 验证了语言模型将关系模式（如临界点）与主体领域分离存储的假设，表明存在可泛化的表示结构。为理解模型智能的底层架构提供了新视角。 |
| [Rethinking Data Selection: The Importance of Coverage over Difficulty in LLM Fine-Tuning](http://arxiv.org/abs/2611.07323v1) | L Pandia, K Misra, A Ettinger et al. | 证明基于覆盖范围的数据选择优于基于难度的 LLM 微调方法，挑战了当前认为更难样本更具信息量的直觉。为更高效的训练数据筛选提供了实证指导。 |

### 🤖 智能体与推理

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Test-Time Self-Play: Scaling without a Verifier](http://arxiv.org/abs/2611.07367v1) | A Yoshiyama, A Ashirmatov, J Hübotter et al. | 通过自博弈进行解优化，使测试时扩展不再依赖验证器，将部署时计算改进扩展到缺乏 ground-truth 验证器的领域。 |
| [How Do AI Agents Waste Your Money?](http://arxiv.org/abs/2611.07238v1) | H Zeng, Y Lu, J Cai et al. | 引入了识别和测量 AI 智能体流水线中 token 浪费的系统方法，揭示了当前智能体任务执行中的大量低效问题。 |
| [EnvOpt: Automated Optimization for Agent Environments](http://arxiv.org/abs/2611.07372v1) | M Li, H Mao, Q Mang et al. | 将环境优化作为提升智能体性能、降低成本的第三条轴线（与模型优化和评测框架优化并列），形式化了丰富的环境设计空间。 |
| [SPILLWAY: Separating Target Admission from Sanitization to Defend Tool-Using Agents against Prompt Injection](http://arxiv.org/abs/2611.07222v1) | W Lim, Y Chang, J Lee et al. | 通过将是否执行动作的决策与输入清理分离来防御工具调用智能体，防止嵌入在网页内容或共享文档中的指令注入攻击。 |
| [How Should Agents See Code? Rethinking Code Representations for Agentic Software Engineering](http://arxiv.org/abs/2611.07286v1) | M Sepidband, J Shin, S Wang et al. | 研究基于映射的代码表示工作流作为原始文件访问的替代方案，解决智能体应如何感知和与代码仓库交互的问题。 |

### 🔧 方法与框架

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [IMUDINO: Self-distilled Foundation Model for Inertial Sensing](http://arxiv.org/abs/2611.07437v1) | Z Ye, C Zhang, Z Wang et al. | 提出首个惯性感知基础模型，在人体活动识别、健康监测、运动捕捉和里程计算方面均达到有竞争力的表现——填补了传感器 AI 领域的一个重大空白。 |
| [CacheGraft: Enhancing Retrieval-Augmented Generation via Latent-Space Document Enrichment](http://arxiv.org/abs/2611.07393v1) | V Lakshman, P Chen, Z Gu et al. | 通过潜在空间中的缓存到缓存翻译来丰富检索文档，突破仅文本检索的局限，通过直接 KV 缓存操作提升 RAG 质量。 |
| [From What Is Used to What Is Missing: Rethinking Dynamic Rank in LoRA](http://arxiv.org/abs/2611.07349v1) | P Xue, G Fan, G Chen et al. | 表征当前 LoRA 适应空间对任务是否充分，超越容量分配来回答适应空间充足性的根本问题。 |
| [Adversarial Multiplicity: Cherry-Picked Models and the Limits of Disclosure](http://arxiv.org/abs/2611.07378v1) | C Chou, B Huynh, A Koenecke et al. | 分析预测多样性——精度相同但预测不同的模型——如何被利用进行公平性优化，引发了对模型报告披露实践的担忧。 |
| [When Scores Conflict with Preferences: Pre-Alignment Diagnosis and Adaptive Correction of Constraint Drift in DPO](http://arxiv.org/abs/2611.07375v1) | P Liu, Y Yan et al. | 处理 DPO 中成对偏好与点对点标准（长度、安全分数）冲突时的失效问题，为约束漂移提出诊断和修正机制。 |

### 📊 应用

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [How Deep is the Signal? Time-Context up to 30 Years for Colorectal Cancer Prediction in a Primary-Care EHR Model](http://arxiv.org/abs/2611.07265v1) | A Raviez, L Wang, B Delaney et al. | 引入"时间上下文"（日历回溯窗口）作为 EHR 基础模型比 token 上下文更具临床意义的指标，证明了可追溯数十年的预测信号。 |
| [Scenario Augmentation for Rare Financial Events via Multimodal Latent Diffusion](http://arxiv.org/abs/2611.07282v1) | M Loodaricheh, A Raja, I SenGupta et al. | 使用多模态潜在扩散来增强稀有金融事件以改进 CVaR 分类，解决极端市场建模中的根本数据稀缺问题。 |
| [Graph Neural Networks for Resource Allocation in Integrated Sensing and Communication](http://arxiv.org/abs/2611.07377v1) | J Liao, L Chen, T Han et al. | 应用 GNN 优化车载 ISAC 网络中的功率分配，在受限功率预算下平衡感知和通信目标。 |
| [Two-stage residual learning for calibrated uncertainty in solar irradiance forecasts](http://arxiv.org/abs/2611.07444v1) | R Flanagan, E Kasha, P Talbot et al. | 将点预测与校准不确定性估计相结合，用于扩展时间范围的太阳辐照度预测，对可再生能源电网整合至关重要。 |

---

## 3. 研究趋势信号

今天的投稿发出了几个新兴方向的信号。**智能体经济性**正从能力展示走向系统性成本分析——"浪费"论文和 EnvOpt 框架表明，智能体资源消耗正在成为一级优化目标。**专业领域基础模型**持续扩展到语言和视觉之外进入惯性感知（IMUDINO），对机器人和物联网部署具有深远影响。**推理时计算**仍是核心焦点，长上下文效率的多条路径（递归稀疏注意力、TriAttention、HyFlash）表明这是现实部署中的关键瓶颈。最后，**面向安全的可解释性**以多种形式出现——从分析 LLM 中的语法编码到原型上下文表示——表明超越能力基准测试来理解模型内部的需求正在增长。

---

## 4. 值得深入阅读

1. **[Recursive Sparse Attention: Million-Token Length Extrapolation at Logarithmic Cost](http://arxiv.org/abs/2611.07232v1)** — 这解决了 LLM 部署中最紧迫的实际约束。对数复杂度的突破可能从根本上改变长文档理解和智能体记忆的可能性，对任何从事 LLM 基础设施的人来说都是必读的。

2. **[IMUDINO: Self-distilled Foundation Model for Inertial Sensing](http://arxiv.org/abs/2611.07437v1)** — 首个惯性感知基础模型标志着传感器 AI 的重要里程碑。鉴于 IMU 传感器在智能手机、可穿戴设备和机器人中的普遍性，理解这一架构和训练方法对任何构建感知系统的人都至关重要。

3. **[How Do AI Agents Waste Your Money?](http://arxiv.org/abs/2611.07238v1)** — 随着智能体部署规模扩大，理解并测量 token 效率在商业上变得至关重要。这个识别浪费的系统框架为未来的智能体优化研究奠定了基础。

---

**规则**：

- 仅输出翻译内容，无需前言、解释或整个输出的 markdown 代码块围栏。
- 严格保持 Markdown 结构：标题、表格（包括对齐行）、列表、块引用、加粗/斜体、分隔线、emoji。
- URL、链接目标、代码片段、代码块、数字和日期保持原样。
- 项目名称、仓库路径、用户名、版本标签、文件路径和 API/配置标识符保持原样，不翻译。
- 涉及 #12345 等 Issue/PR 引用及其链接文本保持原样。
- 使用自然的技术中文，适合中文开发者通讯的语域——而非逐字对译。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*