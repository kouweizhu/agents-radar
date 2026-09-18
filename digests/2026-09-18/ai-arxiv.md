# ArXiv AI 研究日报 2026-09-18

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-18 00:44 UTC

---

<think>The user wants me to translate this ArXiv research digest from English to Chinese, following specific rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly (tables, headings, lists, etc.)
- Keep URLs, numbers, technical terms, code references as-is
- Use natural technical Chinese, not literal word-for-word

Let me translate section by section, maintaining all the formatting.

The content includes:
- Main heading with date
- 4 sections with subsections
- Tables with paper info
- Links and technical terms that should stay as-is

I'll translate this carefully.</think>

# ArXiv AI 研究简报 — 2026年9月18日

## 1. 今日要闻

今天的 ArXiv 论文提交呈现出若干趋同的研究方向。一个重要主题围绕**合成数据与模型崩溃**展开——研究人员正在严格审视使用合成数据训练时的动态机制，Fisher-Rao 视角提供了一个有原则的框架来防止退化反馈循环。与此同时，**混合专家架构**持续演进，"无限参数"方法预示着推理过程中的实时数据适配。在智能体系统中，双过程认知架构和记忆机制正在快速推进，而教育、科学图表重建和隐私评估方面的新基准标志着对实际、领域特定的 VLM/LLM 部署日益重视。O-RAN 智能体控制平面工作代表了多智能体自主环境中的新兴安全问题。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Objective vs. Search: Decomposing What Makes a Good Tokeniser](http://arxiv.org/abs/2609.19145v1) | Ahmetcan Yavuz, Clara Meister 等 | 将分词解构为正交优化目标（压缩 vs. 对数似然）和搜索程序（自底向上合并 vs. 自顶向下剪枝），提供了一个统一框架来理解 BPE 和 UnigramLM 为何表现不同。 |
| [A Zeroth-Order Paradigm for LLM Preference Alignment](http://arxiv.org/abs/2609.19144v1) | Peter Chen, Xi Chen 等 | 提出基于零阶的对齐方法，从小似然边距的偏好对中提取信息，解决了直接对齐方法中似然位移的局限性。 |
| [How Model Growth, Recursion, and Boundary Operators Influence Scaling Exponents](http://arxiv.org/abs/2609.19107v1) | Zixi Chen, Akshay Vegesna 等 | 证明架构干预可以修改预训练中的缩放指数，实现性能随计算量增加而指数级提升——挑战了传统认知。 |
| [Preventing Model Collapse: A Fisher-Rao Perspective on the Dynamics of Training with Synthetic Data](http://arxiv.org/abs/2609.18878v1) | Matteo Marchi, João Pedro Silvestre 等 | 使用 Fisher-Rao 几何来分析并防止在合成数据上递归训练 LLM 时的模型崩溃，为缓解退化反馈循环提供了理论依据。 |
| [Infinite-Parameter LLMs: Generating and Adapting Weights from Live Data](http://arxiv.org/abs/2609.18842v1) | Jinli Hu, Ross M. Clarke 等 | 引入在推理过程中从实时数据生成和适配混合专家权重的框架，将 MoE 架构扩展到真正的动态参数池。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Cognitive Extensions for Dual-Process Language Agents: Memory and Self-Reflection in Interactive Environments](http://arxiv.org/abs/2609.19128v1) | João Meneses dos Santos, Arlindo L. Oliveira | 为 SwiftSage 扩展模块化认知扩展以支持记忆和自我反思，解决长程交互任务中的脆弱性问题。 |
| [Flag Game: A Toy Model for Mechanistic Swarm Interpretability](http://arxiv.org/abs/2609.19124v1) | Elizabeth Pavlova, Hidenori Tanaka | 引入一个极简环境来研究 AI 智能体中新兴的协调行为和信念形成，为群体对齐研究提供可处理的设置。 |
| [Taming the Agentic RAN: Stability-Guaranteed Arbitration of Autonomous AI Agents in O-RAN](http://arxiv.org/abs/2609.18857v1) | Seyed Bagher Hashemi Natanzi, Bo Tang | 展示智能体 O-RAN 控制平面中的安全失效，并为多供应商 rApps 的仲裁机制提出稳定性保证。 |
| [Beyond Outcomes: Dual-View Relational Learning for Efficient Agent Benchmarking](http://arxiv.org/abs/2609.18909v1) | Xinshuai Guo, Junjie Wu 等 | 通过建模任务-模型最终分数分布中的冗余来解决基准压缩问题，实现高效的智能体评估。 |

### 🔧 方法与框架（新技术、基准、效率提升）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [ScienceIDE: Turning World's Scientific Codebase into Agent Learnable Environments](http://arxiv.org/abs/2609.19134v1) | Hejia Geng, Zesen Huang 等 | 将科学代码仓库转换为智能体可学习环境，解决碎片化的工具链和隐式领域约定问题，实现可靠学习。 |
| [MUSE: Benchmarking Large Vision-Language Models on Multi-Modal Understanding in Situated Education](http://arxiv.org/abs/2609.19088v1) | Luyao Zhu, Xun Wei Yee 等 | 在教育环境中评估 VLM，需要对艺术图像进行解读并理解语义/情感/文化背景，以辅助 AI 辅助语言学习。 |
| [ASLEval: Measuring Privacy Exposure Displacement in LLM Agent Sessions](http://arxiv.org/abs/2609.18864v1) | Guosen Wu, Huizhen Huang 等 | 引入隐私暴露位移指标来捕捉多步骤智能体会话中的未授权数据暴露，超出单动作评估范围。 |
| [ReFigBench: Benchmarking Scientific Figure Reconstruction as Editable PowerPoint Artifacts](http://arxiv.org/abs/2609.18844v1) | Liyang Fan, Chi Wei 等 | 在重建可编辑 PowerPoint 的科学图表上评估多模态编码智能体，评估视觉理解加上工件生成能力。 |
| [Double descent is the principle of least action](http://arxiv.org/abs/2609.19076v1) | Congzhou M Sha | 通过统计力学解释双下降现象，刻画基于随机梯度的训练轨迹。 |

### 📊 应用（领域特定、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [PANORAMA: Panoptic Grounded Captioning via Mask Proposal Selection](http://arxiv.org/abs/2609.19143v1) | Sara Pieri, Evangelos Kazakos 等 | 通过掩码提议选择将生成的文本与图像像素关联，实现全面且空间锚定的图像描述。 |
| [EviGen: Predictive Evidence Scaffolding for Verifiable Clinical Rationale Generation](http://arxiv.org/abs/2609.18852v1) | Fengnan Li, Heman Burre 等 | 为来自纵向电子健康记录的可验证临床理由生成提供证据支撑，降低临床医生审核负担同时确保可追溯性。 |
| [GrainSpeech: Less Context, More Detail for Compact Speech Synthesis](http://arxiv.org/abs/2609.18856v1) | Zitao Liang, Chang Gao | 研究紧凑声学模型中编码器上下文和梅尔频谱监督之间的权衡，用于语音合成。 |
| [PersonaPath: Towards Knowledge-Centric Personalized Learning Path Planning](http://arxiv.org/abs/2609.18861v1) | Yu Liu, Zeming Liu 等 | 超越以练习为中心的推荐，转向具有明确学习者先决条件的目标导向学习路径规划。 |

---

## 3. 研究趋势信号

从今天的提交中浮现出一个清晰的**双轴转变**。首先，**智能体架构**正从简单的工具使用成熟到具有显式记忆和自我反思的双过程认知模型，如 SwiftSage 的扩展和多智能体协调的新基准所示。其次，**基础训练动态**正在获得新的理论关注——特别是围绕合成数据（模型崩溃）和缩放定律——表明该领域正在从追求更大模型的竞赛中汲取教训。"无限参数"MoE 系统的出现和 Fisher-Rao 分析表明正在向**自适应、几何信息**方法转变，超越静态预训练。医疗教育、科学图表重建和智能体电信领域的特定领域基准也表明 VLM/LLM 评估正变得更加精细和应用感知。

---

## 4. 深度阅读推荐

1. **["Preventing Model Collapse: A Fisher-Rao Perspective on the Dynamics of Training with Synthetic Data"](http://arxiv.org/abs/2609.18878v1)** — 这篇论文为 LLM 开发中最紧迫的实践挑战之一——在合成数据上训练而不退化——提供了有原则的理论框架。Fisher-Rao 几何提供了一个统一的视角，可能会重塑从业者处理数据策展的方式。

2. **["Infinite-Parameter LLMs: Generating and Adapting Weights from Live Data"](http://arxiv.org/abs/2609.18842v1)** — 一篇概念上雄心勃勃的论文，将 MoE 范式扩展到运行时权重适配。如果可复现，这代表了一种从静态模型部署到真正动态推理时间计算的根本性转变。

3. **["Cognitive Extensions for Dual-Process Language Agents: Memory and Self-Reflection in Interactive Environments"](http://arxiv.org/abs/2609.19128v1)** — 随着语言智能体进入生产环境，这项工作解决了交互设置中的真实脆弱性问题。模块化认知架构为构建自主智能体的从业者提供了具体的设计模式。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*