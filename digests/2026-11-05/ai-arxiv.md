# ArXiv AI 研究日报 2026-11-05

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-11-05 02:43 UTC

---

<think>The user wants me to translate an ArXiv AI Research Digest from English to Simplified Chinese. Let me translate this following the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form.
5. Use natural technical Chinese, the register of a Chinese developer newsletter.

Let me go through the content and translate it:

---

# ArXiv AI Research Digest

**Date:** November 5, 2026  
**Sources:** cs.AI, cs.CL, cs.LG (50 papers)

---

## 1. Today's Highlights

Today's submissions reveal significant momentum in **AI agent research**, with multiple papers addressing cognitive biases, prospective memory, and multi-agent collaboration. **Mixture-of-Experts efficiency** remains a hot topic—researchers are tackling both expert pruning for multimodal MLLMs and inference-time expert deactivation strategies. A notable trend is the growing focus on **LLM-as-judge reliability**, with papers examining confirmation bias in agentic judges and proposing item-response theory for aggregating multiple judges. **Agent safety and alignment** appear prominently, including methods for suppressing misaligned behaviors durably and auditing clinical decision networks. Finally, there's emerging interest in **cognitive symbiosis**—moving beyond autonomous agents toward AI-augmented human intelligence.

---

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Routes of Reasoning: Reading and Reshaping Test-Time Compute in MoE Models](http://arxiv.org/abs/2611.05919v1) | Shengjie Wang, Mohsen Fayyaz, Nanyun Peng et al. 

Now translating the summary about test-time compute in MoE models - the paper examines how reasoning models allocate computational resources across planning, derivation, and verification phases. It shows that models tend to overthink by continuing verification after reaching correct answers, so the researchers propose techniques to better redistribute compute allocation and eliminate wasteful verification steps without sacrificing accuracy.

The next section covers in-context learning, where researchers are identifying the underlying circuit mechanisms that enable transformers to rapidly acquire new tasks from examples. By mapping out candidate circuit components, they gain insight into how these models learn novel patterns without needing parameter updates. There's also work on extreme quantization of KV caches for looped transformers, achieving near 1-bit compression while maintaining model performance through specialized techniques designed for parameter-efficient looped architectures.

Another critical area involves understanding and correcting misaligned behaviors in language models across different training stages. Researchers are developing methods to systematically identify and suppress problematic behaviors by constructing controlled test cases with intentional misalignment triggers, ultimately improving model alignment durability. Additionally, there's evaluation of how much phonological knowledge language models actually encode for Chinese characters, which involves benchmarking phonetic understanding across homophones and polyphonic variations. The next section continues with an evaluation framework using item-response theory to aggregate multiple LLM judges with varying reliability levels. Then it shifts to discussing prospective memory mechanisms that allow LLM agents to maintain and act on future-directed intentions without explicit prompting, moving beyond retrospective memory systems. The research also examines how cognitive biases influence evidence gathering in search-equipped LLM agents, particularly how result ordering and prior context shape their information-seeking behavior. 最后一个研究方向涉及将推测性解码重新定义为训练目标而非仅仅的推理优化策略，通过对抗性训练来增强长时程代理的表现。接下来要探讨的是针对多模态大语言模型的专家剪枝策略，这些模型中专家参数占据了大部分内存，目标是减少内存占用的同时保持跨模态推理能力。

然后引入了TandemBench基准测试，包含1200个多智能体烹饪场景中的问题，用于评估决策模型在任务分工、资源交换和并行执行方面的能力。最后讨论了专家去激活策略的比较研究，系统性地分析了移除和冻结等不同策略对令牌路由的影响。

继续探讨令牌路由和性能的关系，以及在MoE模型中保持训练和推理行为一致性的方法。同时提出了"不需要长上下文"的观点，指出前沿语言模型通过频繁压缩在长时程和长输入任务上几乎没有精度损失，尽管后续令牌的成本可能高达7倍。RAGCompass则通过重新排序方法来解决RAG系统中单一检索器在处理多样化查询时的局限性。

CARTBench专注于为复杂的模糊请求建立评估基准，特别是有时间约束的购物建议场景。最后转向人机协作的新范式，从自主智能体向认知共生体转变，以克服人类在注意力、记忆和感知方面的固有限制。DreamX则展示了视频扩散模型在动作表示学习中的潜力，能够从不同执行中提取一致的动作表征。

此外还需要审视LLM在恶劣天气指导中可能提供虚假安慰的问题，特别是在缺少实时警报数据时产生的安全隐患。通过MedPhysBench基准测试评估语言模型在医学物理计算中的表现，特别是放射治疗中的 seeded 计算生成和错误检测能力。今天的论文集中体现了几个关键研究方向：首先是智能体的可靠性与安全性问题，包括认知偏差（判断者中的确认偏误、搜索-equipped智能体中的偏误）、预期记忆，以及自主行动与人类监督之间的权衡。其次是LLM-as-judge范式的成熟，研究者正在深入理解其局限性并开发聚合方法和偏差缓解策略。MoE架构的效率创新仍在加速，特别是针对内存受限部署场景。

"不需要长上下文"这一发现挑战了传统认知，可能会根本改变我们处理长文档任务的方式。最值得关注的是人机交互设计正在经历哲学层面的转变——从自主智能体转向认知共生，这反映了人们越来越认识到完全自主的系统可能无法与人类需求对齐，而直接增强人类认知能力可能比替代人类决策更有价值。

对于推理模型中"过度思考"问题的深入分析值得重点关注。这个问题直接影响部署成本，而对规划、推导、验证等不同推理行为的机制理解，能够为训练和推理时的干预提供重要指导。

关于认知共生体的研究代表了AI发展的下一个十年的重要方向，提出了真正增强人类认知能力而非仅仅是自主智能体的新愿景。确认偏误在判断系统中的表现尤其关键，因为LLM-as-judge已成为评估的标准做法，其失效模式的识别对设计和使用评估系统都有深远影响。
</think>


# ArXiv AI 研究速递

**日期：** 2026年11月5日  
**来源：** cs.AI、cs.CL、cs.LG（50篇论文）

---

## 一、今日要点

今日投稿揭示了**AI Agent 研究**的强劲发展势头，多篇论文聚焦认知偏差、预期记忆和多智能体协作。**混合专家系统效率**仍是热门话题——研究者同时在解决多模态 MLLM 的专家剪枝和推理时专家去激活策略。一个值得注意的趋势是对 **LLM-as-judge 可靠性** 的日益关注，多篇论文检验了 Agentic Judge 中的确认偏差，并提出用项目反应理论聚合多个 Judge。**Agent 安全与对齐** 也是重点，包括持久抑制错位行为的方法以及临床决策网络审计。此外，**认知共生**概念崭露头角——从自主 Agent 转向 AI 增强人类智能。

---

## 二、核心论文

### 🧠 大语言模型

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Routes of Reasoning: Reading and Reshaping Test-Time Compute in MoE Models](http://arxiv.org/abs/2611.05919v1) | Shengjie Wang, Mohsen Fayyaz, Nanyun Peng et al. | 分析推理模型如何在规划、推导和验证阶段分配测试时计算资源，揭示模型在找到正确答案后会"过度思考"。提出重新调整计算分配的方法，在保持准确率的同时减少冗余验证。 |
| [A Circuit for In-Context Learning](http://arxiv.org/abs/2611.05344v1) | Andrew Gao, William Gao et al. | 探究上下文学习的机制基础，识别使模型能够从示例中快速获取任务的候选电路组件。推进了对 Transformer 如何在不更新参数的情况下学习新映射的理解。 |
| [LoopVQ: Sub 1-bit KV Cache Quantization for Looped Transformers](http://arxiv.org/abs/2611.05304v1) | Minsoo Cheong, Sungjoo Yoo et al. | 提出专为循环 Transformer 架构设计的亚1比特 KV 缓存量化方法，在保持性能的同时实现极致压缩。实现参数高效循环模型的高效部署。 |
| [Suppressing Misaligned Behaviors in Language Models, Durably](http://arxiv.org/abs/2611.05358v1) | Luxi He, Pengcheng Jiang, Jifan Zhang et al. | 研究在各个训练阶段抑制错位行为的有效性，构建带有刻意错位触发器的模型有机体。为持久的行为修正策略提供洞见。 |
| [Phonological Knowledge of Chinese Characters in Language Models](http://arxiv.org/abs/2611.05803v1) | Xiaozhe Ji, Renfen Hu, Hai Hu et al. | 引入 PinyinBench 评估语言模型对汉字语音知识的掌握程度，涵盖同音字、语音特征和多音字。揭示中文 LM 中语音编码的系统性模式。 |
| [AGORA: Reliability-Aware Aggregation of LLM Judges via Item-Response Theory](http://arxiv.org/abs/2611.05556v1) | Junhyung Ahn et al. | 应用项目反应理论聚合具有不同可靠性的多个 LLM Judge，解决异质质量 Judge 池的挑战。在人工标注验证集有限时实现更稳健的评估。 |

### 🤖 Agent 与推理

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Prospective Memory for Proactive LLM Agents](http://arxiv.org/abs/2611.05731v1) | Yuanchen Bei, Zhining Liu, Tianxin Wei et al. | 为 LLM Agent 引入预期记忆机制，在机会出现时保留并执行面向未来的意图，超越回顾性记忆系统。使 Agent 无需显式提示即可主动行动。 |
| [Cognitive Bias Signatures in Search-Equipped LLM Agents](http://arxiv.org/abs/2611.05720v1) | Yanru Xiao, Yingwei Yu et al. | 研究认知偏差如何影响搜索增强 LLM Agent 的证据收集，分析结果排序、既往记录和初始假设的影响。提供理解有偏信息搜索行为的可控框架。 |
| [Grounded but Not Immune: Confirmation Bias in Agent-as-a-judge](http://arxiv.org/abs/2611.05662v1) | Drake Benjamin Brown, Khushbu Pahwa, Yubin Ge et al. | 证明尽管 Agent-as-a-Judge 系统拥有工具收集证据，但在评估中仍表现出确认偏差。揭示"接地 Judge"在开放式任务评估中的局限。 |
| [When to Ask, When to Answer: Strategic Clarification for Ambiguous Reference Resolution](http://arxiv.org/abs/2611.05517v1) | Ibrahim Khebour, Nikhil Krishnaswamy et al. | 研究 LLM Agent 在指代消解任务中何时应提问澄清问题、何时应给出确定答案。解决当前模型中观察到的过早回答偏差。 |
| [Adversarial Speculative Reasoning Improves Long Horizon Agents](http://arxiv.org/abs/2611.05345v1) | Hongyin Luo, Wei Fang, Lijie Yang et al. | 论证推测性解码应被视为训练目标而非单纯的系统优化，通过对抗训练提升长时程 Agent 性能。重新定义草稿模型在 Agentic 系统中的角色。 |

### 🔧 方法与框架

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Modality-Aware Expert Pruning for MoE-Based Multimodal Large Language Models](http://arxiv.org/abs/2611.05927v1) | Donggeun Kim et al. | 为专家参数占内存超过90%的 MoE 多模态大语言模型提出模态感知剪枝策略。在保持跨模态推理能力的同时降低内存占用。 |
| [TandemBench: Benchmarking Decision Models for Multi-Agent Collaboration](http://arxiv.org/abs/2611.05827v1) | Baohang Li, Xiaocheng Feng, Bing Qin et al. | 引入包含1200道多智能体烹饪场景题目的基准测试，评估决策模型处理任务分工、资源交换和并行执行的能力。填补多智能体决策评估的空白。 |
| [Matching the Training-Time Weight Rule in Inference-Time Expert Deactivation](http://arxiv.org/abs/2611.05804v1) | Hao Cheng, Zhiyu Yang, Bo Ma et al. | 系统比较专家去激活策略（移除、冻结、重归一化）及其对令牌路由和性能的影响。为 MoE 模型提供训练-推理行为一致的指导。 |
| [You don't need long context](http://arxiv.org/abs/2611.05306v1) | Peter Belcak, Saurav Muralidharan, Jindong Jiang et al. | 证明前沿语言模型通过频繁压缩在长时程和长输入任务上仅损失极少的准确率，尽管后续令牌的成本高达7倍。挑战长上下文窗口的必要性。 |
| [RAGCompass: Generalizable Retriever Routing via Reranking](http://arxiv.org/abs/2611.05596v1) | Valentin Six, Mufei Li, Dongqi Fu et al. | 提出通过重排序将查询路由到最适合的检索器的 RAG 系统方法，解决单一检索器在多样化查询上的弱点。 |
| [CARTBench: Rubric-Based Evaluation of Shopping Advice](http://arxiv.org/abs/2611.05862v1) | Yuqin Dai, Zhanwei Zhang, Honghui Yang et al. | 引入评估 LLM 购物助手在带有时间线约束的复杂模糊请求上表现的基准，解决数据稀缺和标准缺失的问题。 |

### 📊 应用

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [From Autonomous Agents to Cognitive Symbionts: Toward AI-Augmented Human Intelligence](http://arxiv.org/abs/2611.05376v1) | Hao Fei et al. | 论证从自主 AI Agent 向增强人类智能的认知共生体范式转变，解决人类在注意力、记忆和感知方面的固有限制。提出新的研究议程。 |
| [DreamX: Video Diffusion Model is a Universal Latent Action Learner](http://arxiv.org/abs/2611.05377v1) | Jisoo Kim, Chaehyun Kim, Junsu Kim et al. | 表明视频扩散模型可学习跨不同执行保持一致、且对具身和外观变化不变的通用动作表示。推进从视频学习动作表示。 |
| [False Reassurance in LLM Severe-Weather Guidance: A Replayable Evaluation Against Real NWS Alerts](http://arxiv.org/abs/2611.05290v1) | Kadharmoideen Fadururdeen et al. | 识别并量化"虚假安慰"现象——LLM 缺少实时警报数据时在活跃天气预警期间提供错误的平静指导。引入使用117个真实 NWS 警报案例的可回放评估框架。 |
| [MedPhysBench: A Benchmark for Evaluating Language Models on Medical Physics Calculations](http://arxiv.org/abs/2611.05340v1) | Omar Nusrat et al. | 提供放射治疗医学物理计算的带种子生成器的基准，解决安全关键医疗领域 LLM 可靠评估的需求。包含错误检测任务。 |

---

## 三、研究趋势信号

今日投稿发出若干新兴研究方向的信号。**Agentic 可靠性和安全性**占主导地位，多篇论文考察认知偏差（Judge 中的确认偏差、搜索增强 Agent 的偏差）、预期记忆，以及自主行动与人类监督之间的张力。**LLM-as-judge 范式**正在成熟——研究者认识到其局限性，正在开发聚合方法和偏差缓解策略。

**效率创新**持续加速，特别是 MoE 架构和内存受限部署。"不需要长上下文"的发现挑战传统观念，可能重塑我们对长文档任务的处理方式。

最值得注意的是，**人机交互设计**正在发生哲学转变——从自主 Agent 转向认知共生。这反映了对纯自主系统可能无法很好对齐人类需求的认识日益增强，直接增强人类认知可能比替代人类决策更有价值。

---

## 四、值得深度阅读

1. **[Routes of Reasoning: Reading and Reshaping Test-Time Compute in MoE Models](http://arxiv.org/abs/2611.05919v1)**  
   *推荐理由：* 这篇论文解决了推理模型中"过度思考"的关键效率问题——对部署成本有直接实际影响。对规划、推导、验证等不同推理行为的分析提供了机制性理解，可为训练和推理时干预提供指导。

2. **[From Autonomous Agents to Cognitive Symbionts: Toward AI-Augmented Human Intelligence](http://arxiv.org/abs/2611.05376v1)**  
   *推荐理由：* 这篇概念性论文为未来十年 AI 发展提供了引人注目的愿景，超越自主 Agent 走向真正增强人类认知的系统。提供了思考人机协作的框架，可能影响研究方向和产品规格。

3. **[Grounded but Not Immune: Confirmation Bias in Agent-as-a-judge](http://arxiv.org/abs/2611.05662v1)**  
   *推荐理由：* 随着 LLM-as-judge 成为评估的标准实践，理解其失效模式至关重要。这篇论文揭示即使 Judge 可访问收集证据的工具，仍表现出系统性的确认偏差——对评估系统设计和使用的重大影响。

---

*基于 cs.AI、cs.CL 和 cs.LG 的50篇论文生成*

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*