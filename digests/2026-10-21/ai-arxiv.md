# ArXiv AI 研究日报 2026-10-21

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-21 00:50 UTC

---

<think>The user wants me to translate the ArXiv AI Research Digest into Simplified Chinese. Let me translate the content while following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates verbatim
4. Keep project names, usernames, version tags, file paths, API/config identifiers in their original form
5. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

**Title:**
ArXiv AI 研究文摘 — 2026年10月21日

**Today's Highlights:**
今日 arXiv 提交揭示三个主要研究前沿。首先，**多模态智能体系统**正在快速推进，包括视觉智能体工具使用（OpenVLHarness）、计算机使用智能体环境合成（Agent World Model in the Wild）以及想象式规划（Train An Imaginative Agent）等工作，表明智能体能够在行动前推理物理后果。其次，**LLM 效率与记忆**仍是关键主题，长上下文压缩（KEEP-Bench、LatComm）、学习式 token 剪枝（TokenGate）以及原生记忆架构（MemT-1.0）的新方法正在解决长上下文模型的扩展挑战。第三，关于预训练表示的**基础性问题**正在被挑战——Halcyon 展示了无需任何语言预训练就能实现强大的文本到图像生成，质疑了多模态模型设计的假设。

**Key Papers:**
### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Halcyon: Text-to-Image Generative Modeling Without Language Pretraining](http://arxiv.org/abs/2610.26863v1) | K. 

Chandrasegaran, Y. Zhao, A. Thomas 等 | 提出了从零开始预训练的早融合多模态自回归模型，无需语言预训练即可实现强大的文本到图像生成，挑战了互联网规模语言预训练对 T2I 生成并非必需的假设。 |
| [MemT-1.0: Towards Memory-Native Evolution](http://arxiv.org/abs/2610.26825v1) | Z. Li, Z. Zhang, L. Liu 等 | 提出了记忆原生演化方法，使记忆成为基础模型的内在能力，支持无需外部检索的持续信息积累。 |
| [TokenGate: Adapting LLMs for Fast and Memory-Efficient Prefill](http://arxiv.org/abs/2610.26754v1) | L. Patel, R. Ranjan, I. Stoica 等 | 引入了学习式 token 剪枝技术，允许大语言模型像人类读者一样"浏览"长上下文输入，通过每层仅处理相关 token 来优化预填充阶段。 |
| [SpecMRL: Redesign Matryoshka Representation Learning](http://arxiv.org/abs/2610.26824v1) | Z. Chen, S. Wu, H. Cui 等 | 重新设计了 MRL，通过显式约束确保主表示提供合适的紧凑编码，提升了灵活表示大小的性能。 |
| [Safety Mid-Training: Internalizing LLM Safety](http://arxiv.org/abs/2610.26809v1) | Z. Zhao, L. Jiang, Y. Choi 等 | 探索将安全数据直接整合到预训练中作为基础能力，解决后期训练阶段的安全退化问题。 |

### 🤖 智能体与推理（规划、工具调用、多智能体）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Train An Imaginative Agent](http://arxiv.org/abs/2610.26845v1) | J. Ge, J. Zhang, T. Chai 等 | 提出了智能体想象（Agim）方法，使智能体能够在执行前预判行动后果，这对稀疏反馈和不可逆行动环境（如 Sokoban）至关重要。 |
| [OpenVLHarness: Real World Visual Agentic Tool-Use](http://arxiv.org/abs/2610.26860v1) | Y. Zhou, C.-F. Yang, R. Sun 等 | 研究了需要外部证据而非仅靠内部推理的多模态大语言模型智能体，引入

了涵盖 22 个基准的受控评估。 |
| [Agent World Model in the Wild](http://arxiv.org/abs/2610.26828v1) | Z. Wang, Q. Wu, H. Wang 等 | 提出了 WildAWM 用于在真实计算机系统中合成智能体学习环境，解决了真实世界交互的可扩展性和安全性挑战。 |
| [SOMA: Continuous Monitoring for System Two Reasoning](http://arxiv.org/abs/2610.26793v1) | R. Qian, L. Shi, T. Hu 等 | 将元认知监控与推理模型的控制分离实现在生成过程中检测和纠正推理问题。 |
| [AnyGoal: World Model Generalization Beyond Expert Rollouts](http://arxiv.org/abs/2610.26844v1) | H. Nam, D. Mahajan, Q. Le Lidec 等 | 解决所学习动态在训练中遇到的具体状态-动作分布之外失效时的世界模型可靠性问题。 |

### 🔧 方法与框架（新技术、基准、效率）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [KEEP-Bench: Evaluating Evidence Preservation](http://arxiv.org/abs/2610.26827v1) | Z. Man, D. Wu, J.-C. Gu 等 | 解决上下文压缩中的忠实度评估问题——由于读者能够从不忠实的压缩中作答，质量指标低估了信息损失。 |
| [Newton-Based Methods for Bilevel Optimization](http://arxiv.org/abs/2610.26839v1) | Y. Dong, J. Yang, W. Yao 等 | 将基于牛顿的双层优化方法扩展到经典超梯度公式之外，适用于下层解缺乏强凸性的情况。 |
| [Competing Learning in Hybrid Architectures](http://arxiv.org/abs/2610.26830v1) | X. Shen, Y. Chen, Z. Qiao 等 | 研究结合线性时间循环与软注意力的混合架构，解决表达力-吞吐量权衡问题。 |
| [Kronecker Delta Rule for Long Context Linear Attention](http://arxiv.org/abs/2610.26834v1) | A.-R. Hartl, L. Zólyomi, M. List 等 | 提出 KronLSTM，通过记忆修正机制扩展 xLSTM，实现联想矩阵记忆中的定向关联修正。 |
| [On Data Scaling in Tabular ML](http://arxiv.org/abs/2610.26794v1) | I. Rubachev, N. Lazarev, A. Babenko | 研究使用八个真实表格数据集进行训练数据扩展至 1000 万样本的规模问题。 |

### 📊 应用（领域特定、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Mise-en-Video: Fine-Grained 3D Control for Multi-Shot Video](http://arxiv.org/abs/2610.26801v1) | Y. Zou, X. Shi, Y. Luo 等 | 解决多镜头视频生成问题，需要镜头间一致性及精细 3D 可控性以支持实际叙事。 |
| [Can It Actually Work? Synthesizing Functional CAD](http://arxiv.org/abs/2610.26861v1) | W. Zhang, Y. Huang, Z. Xu 等 | 研究功能 CAD 设计，其中 LLM 智能体必须构建满足物理功能需求的机构，而不仅仅是视觉可信度。 |
| [Game of Phones: Counteracting Phone Scams](http://arxiv.org/abs/2610.26781v1) | N. Basta, R. Carpentier, B. Zhao 等 | 应用博弈论和 LLM 实现自动化的反诈骗对话，通过策略性互动耗尽诈骗者运营能力。 |
| [EpiLens: Lightweight RAG for Epidemiological Knowledge](http://arxiv.org/abs/2610.26730v1) | V. Perri, C. Cattuto, D. Paolotti 等 | 构建用于流行病学文献的开源轻量级 RAG 系统，帮助研究人员为疫情做好准备。 |

---

## 研究趋势信号

明确的**"智能体化转向"**主导了这一批提交：多篇论文聚焦于能够推理物理后果的智能体（Train An Imaginative Agent）、监控自身推理的智能体（SOMA），以及在真实计算机环境中运行的智能体（Agent World Model in the Wild）。记忆与效率前沿同样活跃——研究者正在质疑传统全注意力变换器架构的必要性（Halcyon、TokenGate、MemT-1.0），并提出选择性处理信息的替代方案。此外，对**忠实度与安全**的关注也在增长：上下文压缩必须保留证据（KEEP-Bench），安全应该是基础性的而非事后补救（Safety Mid-Training）。最后，**混合架构**结合循环机制与注意力代表了新兴架构趋势（Competing Learning），表明该领域正在超越纯变换器设计。

---

## 值得深入阅读

1. **[Halcyon: Text-to-Image Generative Modeling Without Language Pretraining](http://arxiv.org/abs/2610.26863v1)** — 这篇论文挑战了多模态 AI 的一个基本假设：语言预训练对强大的文本到图像生成至关重要。如果早融合自回归模型能够匹配或超越基于 CLIP 的方法，这可能会重塑我们设计多模态系统的方式，并减少对大规模文本语料库的依赖。

2. **[Train An Imaginative Agent](http://arxiv.org/abs/2610.26845v1)** — 智能体想象框架解决了当前 LLM 智能体的一个关键缺陷——无法在行动前预判后果。这对于现实世界部署至关重要，因为行动可能是不可逆的，而且该方法可以推广到许多规划密集型应用。

3. **[KEEP-Bench: Evaluating Evidence Preservation in Context Compression](http://arxiv.org/abs/2610.26827v1)** — 上下文压缩对长上下文效率至关重要，但现有的问答指标还不够。这项工作提供了严格的评估方法，揭示了标准基准无法发现忠实度问题——这对构建生产级 LLM 系统的人是关键贡献。

I'm checking the translations carefully. The terminology looks consistent: "大语言模型" for LLMs, "智能体" for agents, "预训练" for pretraining. All URLs and identifiers stay in their original form. The markdown structure—headings, tables, lists, bold text, and horizontal rules—remains intact. I need to verify the section headers are in natural Chinese: "大语言模型（架构、训练、对齐、评估）", "智能体与推理", "方法与框架", and "值得深入阅读" all sound technically appropriate.</think>

# ArXiv AI 研究文摘 — 2026年10月21日

## 今日重点

今日 arXiv 提交揭示三个主要研究前沿。首先，**多模态智能体系统**正在快速推进，包括视觉智能体工具使用（OpenVLHarness）、计算机使用智能体环境合成（Agent World Model in the Wild）以及想象式规划（Train An Imaginative Agent）等工作，表明智能体能够在行动前推理物理后果。其次，**LLM 效率与记忆**仍是关键主题，长上下文压缩（KEEP-Bench、LatComm）、学习式 token 剪枝（TokenGate）以及原生记忆架构（MemT-1.0）的新方法正在解决长上下文模型的扩展挑战。第三，关于预训练表示的**基础性问题**正在被挑战——Halcyon 展示了无需任何语言预训练就能实现强大的文本到图像生成，质疑了多模态模型设计的假设。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Halcyon: Text-to-Image Generative Modeling Without Language Pretraining](http://arxiv.org/abs/2610.26863v1) | K. Chandrasegaran, Y. Zhao, A. Thomas 等 | 提出了从零开始预训练的早融合多模态自回归模型，无需语言预训练即可实现强大的 T2I 生成，挑战了互联网规模语言预训练对文本到图像生成并非必需的假设。 |
| [MemT-1.0: Towards Memory-Native Evolution](http://arxiv.org/abs/2610.26825v1) | Z. Li, Z. Zhang, L. Liu 等 | 提出了记忆原生演化，使记忆成为基础模型的内在能力，实现无需外部检索的持续信息积累。 |
| [TokenGate: Adapting LLMs for Fast and Memory-Efficient Prefill](http://arxiv.org/abs/2610.26754v1) | L. Patel, R. Ranjan, I. Stoica 等 | 引入学习式 token 剪枝，允许 LLM 像人类读者一样"浏览"长上下文输入，每层仅处理相关 token。 |
| [SpecMRL: Redesign Matryoshka Representation Learning](http://arxiv.org/abs/2610.26824v1) | Z. Chen, S. Wu, H. Cui 等 | 重新设计 MRL，通过显式约束确保主表示提供合适的紧凑编码，提升灵活表示大小的性能。 |
| [Safety Mid-Training: Internalizing LLM Safety](http://arxiv.org/abs/2610.26809v1) | Z. Zhao, L. Jiang, Y. Choi 等 | 探索将安全数据直接整合到预训练中作为基础能力，解决后期训练阶段的安全退化问题。 |

### 🤖 智能体与推理（规划、工具调用、多智能体）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Train An Imaginative Agent](http://arxiv.org/abs/2610.26845v1) | J. Ge, J. Zhang, T. Chai 等 | 提出智能体想象（Agim），使智能体能在执行前预判行动后果，这对稀疏反馈和不可逆行动环境（如 Sokoban）至关重要。 |
| [OpenVLHarness: Real World Visual Agentic Tool-Use](http://arxiv.org/abs/2610.26860v1) | Y. Zhou, C.-F. Yang, R. Sun 等 | 研究需要外部证据而非仅靠内部推理的多模态 LLM 智能体，引入涵盖 22 个基准的受控评估。 |
| [Agent World Model in the Wild](http://arxiv.org/abs/2610.26828v1) | Z. Wang, Q. Wu, H. Wang 等 | 提出 WildAWM 用于在真实计算机系统中合成智能体学习环境，解决真实世界交互的可扩展性和安全性挑战。 |
| [SOMA: Continuous Monitoring for System Two Reasoning](http://arxiv.org/abs/2610.26793v1) | R. Qian, L. Shi, T. Hu 等 | 将元认知监控与推理模型的控制相分离，实现生成过程中推理问题的检测和纠正。 |
| [AnyGoal: World Model Generalization Beyond Expert Rollouts](http://arxiv.org/abs/2610.26844v1) | H. Nam, D. Mahajan, Q. Le Lidec 等 | 解决所学习动态在训练中遇到的具体状态-动作分布之外失效时的世界模型可靠性问题。 |

### 🔧 方法与框架（新技术、基准、效率）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [KEEP-Bench: Evaluating Evidence Preservation](http://arxiv.org/abs/2610.26827v1) | Z. Man, D. Wu, J.-C. Gu 等 | 解决上下文压缩中的忠实度评估问题——由于读者能够从不忠实的压缩中作答，QA 指标低估了信息损失。 |
| [Newton-Based Methods for Bilevel Optimization](http://arxiv.org/abs/2610.26839v1) | Y. Dong, J. Yang, W. Yao 等 | 将基于牛顿的双层优化方法扩展到经典超梯度公式之外，适用于下层解缺乏强凸性的情况。 |
| [Competing Learning in Hybrid Architectures](http://arxiv.org/abs/2610.26830v1) | X. Shen, Y. Chen, Z. Qiao 等 | 研究结合线性时间循环与 softmax 注意力 的混合架构，解决表达力-吞吐量权衡问题。 |
| [Kronecker Delta Rule for Long Context Linear Attention](http://arxiv.org/abs/2610.26834v1) | A.-R. Hartl, L. Zólyomi, M. List 等 | 提出 KronLSTM，通过记忆修正机制扩展 xLSTM，实现联想矩阵记忆中的定向关联修正。 |
| [On Data Scaling in Tabular ML](http://arxiv.org/abs/2610.26794v1) | I. Rubachev, N. Lazarev, A. Babenko | 研究使用八个真实表格数据集进行训练数据扩展至 1000 万样本的规模问题。 |

### 📊 应用（领域特定、多模态、代码生成）

| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Mise-en-Video: Fine-Grained 3D Control for Multi-Shot Video](http://arxiv.org/abs/2610.26801v1) | Y. Zou, X. Shi, Y. Luo 等 | 解决多镜头视频生成问题，需要镜头间一致性及精细 3D 可控性以支持实际叙事。 |
| [Can It Actually Work? Synthesizing Functional CAD](http://arxiv.org/abs/2610.26861v1) | W. Zhang, Y. Huang, Z. Xu 等 | 研究功能 CAD 设计，其中 LLM 智能体必须构建满足物理功能需求的机构，而不仅仅是视觉可信度。 |
| [Game of Phones: Counteracting Phone Scams](http://arxiv.org/abs/2610.26781v1) | N. Basta, R. Carpentier, B. Zhao 等 | 应用博弈论和 LLM 实现自动化的反诈骗对话，通过策略性互动耗尽诈骗者运营能力。 |
| [EpiLens: Lightweight RAG for Epidemiological Knowledge](http://arxiv.org/abs/2610.26730v1) | V. Perri, C. Cattuto, D. Paolotti 等 | 构建用于流行病学文献的开源轻量级 RAG 系统，帮助研究人员为疫情做好准备。 |

---

## 研究趋势信号

明确的**"智能体化转向"**主导了这一批提交：多篇论文聚焦于能够推理物理后果的智能体（Train An Imaginative Agent）、监控自身推理的智能体（SOMA），以及在真实计算机环境中运行的智能体（Agent World Model in the Wild）。记忆与效率前沿同样活跃——研究者正在质疑传统全注意力 Transformer 架构的必要性（Halcyon、TokenGate、MemT-1.0），并提出选择性处理信息的替代方案。此外，对**忠实度与安全**的关注也在增长：上下文压缩必须保留证据（KEEP-Bench），安全应该是基础性的而非事后补救（Safety Mid-Training）。最后，**混合架构**结合循环机制与注意力代表了新兴架构趋势（Competing Learning），表明该领域正在超越纯 Transformer 设计。

---

## 值得深入阅读

1. **[Halcyon: Text-to-Image Generative Modeling Without Language Pretraining](http://arxiv.org/abs/2610.26863v1)** — 这篇论文挑战了多模态 AI 的一个基本假设：语言预训练对强大的文本到图像生成至关重要。如果早融合自回归模型能够匹配或超越基于 CLIP 的方法，这可能会重塑我们设计多模态系统的方式，并减少对大规模文本语料库的依赖。

2. **[Train An Imaginative Agent](http://arxiv.org/abs/2610.26845v1)** — 智能体想象框架解决了当前 LLM 智能体的一个关键缺陷——无法在行动前预判后果。这对于现实世界部署至关重要，因为行动可能是不可逆的，而且该方法可以推广到许多规划密集型应用。

3. **[KEEP-Bench: Evaluating Evidence Preservation in Context Compression](http://arxiv.org/abs/2610.26827v1)** — 上下文压缩对长上下文效率至关重要，但现有的 QA 指标还不够。这项工作提供了严格的评估方法，揭示了标准基准无法发现的忠实度问题——这对构建生产级 LLM 系统的人是关键贡献。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*