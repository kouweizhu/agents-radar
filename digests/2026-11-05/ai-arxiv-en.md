# ArXiv AI Research Digest 2026-11-05

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-05 02:43 UTC

---

<think>The user wants me to create a structured ArXiv AI Research Digest based on the 50 recent AI-related papers they've provided. Let me analyze the papers and organize them according to the requested format.

Let me first categorize the papers by theme:

**🧠 Large Language Models (architecture, training, alignment, evaluation):**
1. Routes of Reasoning: Reading and Reshaping Test-Time Compute in MoE Models (2611.05919)
2. Information-Matched Auditing of Conversational Emotion-Shift Forecasting (2611.05895)
3. When Does Better Confidence Improve a Knowledge-Graph Audit? (2611.05877)
4. Phonological Knowledge of Chinese Characters in Language Models (2611.05803)
5. How Well Can Large Language Models Impersonate Individual Authors? (2611.05771)
6. The Male Abstraction Bias in Internet Culture and Large Language Models (2611.05730)
7. Grounded but Not Immune: Confirmation Bias in Agent-as-a-judge (2611.05662)
8. AGORA: Reliability-Aware Aggregation of LLM Judges via Item-Response Theory (2611.05556)
9. Aligning Language Models with General Preferences: An Empirical Study of Direct Nash Optimization (2611.05373)
10. Suppressing Misaligned Behaviors in Language Models, Durably (2611.05358)
11. Reading Why: Born-Measured Attention with Exact Word Evidence (2611.05355)
12. A Circuit for In-Context Learning (2611.05344)
13. Weight-space programming for auditing clinical decision networks (2611.05341)
14. MedPhysBench: A Benchmark for Evaluating Language Models on Medical Physics Calculations (2611.05340)


15. CATF: A Manager-Worker Framework for Context-Aware Time-Series Forecasting (2611.05325)
16. LoopVQ: Sub 1-bit KV Cache Quantization for Looped Transformers (2611.05304)
17. Personas Are Not People: Identity as State, Not Attribute (2611.05292)

**🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought):**
1. Autonomous agents for electricity-system planning (2611.05911)
2. Learning When Human Decisions Matter: Executor-Relative Consultation Value for LLM Agents (2611.05814)
3. Cognitive Bias Signatures in Search-Equipped LLM Agents (2611.05720)
4. Prospective Memory for Proactive LLM Agents (2611.05731)
5. Grounded but Not Immune: Confirmation Bias in Agent-as-a-judge (2611.05662)
6. When to Ask, When to Answer: Strategic Clarification for Ambiguous Reference Resolution (2611.05517)
7. Iterated creation, grading, and revision of data science projects by language models (2611.05548)
8. Rewrite, Then Veto: Rewriter-Agnostic Edit Gating for LLM-Based Post-OCR Correction (2611.05539)
9. From Autonomous Agents to Cognitive Symbionts (2611.05376)
10. SlackBench: Benchmarking Agents on Collaborative Projects (2611.05512)
11. MDSKILL: Learning to Internalize Skill Memory through Multi-View Distillation (2611.05313)
12. Adversarial Speculative Reasoning Improves Long Horizon Agents (2611.05345)

**🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements):**
1. Modality-Aware Expert Pruning for MoE-Based Multimodal Large Language Models (2611.05927)
2. CARTBench: Rubric-Based Evaluation of Shopping Advice (2611.05862)
3. TandemBench: Benchmarking Decision Models for Multi-Agent Collaboration (2611.05827)
4. Matching the Training-Time Weight Rule in Inference-Time Expert Deactivation (2611.05804)
5. PAYWORTHY: Can LLMs Predict Which Freelance Jobs an AI Agent Will Complete? (2611.05759)
6. Contextual Pictograms for Repairing Multilingual ASR Errors (2611.05637)
7. RAGCompass: Generalizable Retriever Routing via Reranking (2611.05596)
8. HARP: Training-Free Dual-Profile Agentic Communication for LLM-Based Recommendation (2611.05319)
9. DreamX: Video Diffusion Model is a Universal Latent Action Learner (2611.05377)
10. PolicyIK: High-Precision Inverse Kinematics for Robot Arms with Reinforcement Learning (2611.05372)
11. GUILD: Guided Iterative Data Collection for Imitation Learning (2611.05368)
12. Agnostic Learning by Imitating (2611.05346)
13. A simple adaptive accelerated optimistic dual averaging method (2611.05334)
14. Φ

asmaNet: A Staged Spectral Token-Refinement Architecture (2611.05309)
15. You don't need long context (2611.05306)
16. GSBR: Geometric Support Behavior Regularization for Online RL (2611.05295)
17. PyRUA-DataFarm: LLM Agent as a Cost-Efficient Teleoperator (2611.05320)

**📊 Applications (domain-specific, multimodal, code generation):**
1. Robots in the City: Persona-Based Perceptions of Urban Robots (2611.05954)
2. Selective, Risk-Controlled Emotion Forecasting in Conversation (2611.05896)
3. Text-Only Domain Adaptation for Low-Resource Medical ASR (2611.05744)
4. Iterated creation, grading, and revision of data science projects by language models (2611.05548)
5. Weight-space programming for auditing clinical decision networks (2611.05341)
6. MedPhysBench: A Benchmark for Evaluating Language Models on Medical Physics Calculations (2611.05340)
7. False Reassurance in LLM Severe-Weather Guidance (2611.05290)
8. AGORA: Reliability-Aware Aggregation of LLM Judges via Item-Response Theory (2611.05556)

Several papers stand out for their potential impact. Routes of Reasoning addresses test-time compute inefficiencies in reasoning models, while Modality-Aware Expert Pruning tackles memory constraints in MoE systems. TandemBench provides a novel evaluation framework for multi-agent decision-making. The Memory, Agents & Planning work on prospective memory for LLM agents and Cognitive Bias Signatures in search-equipped agents represent important safety considerations. From Autonomous Agents to Cognitive Symbionts offers a forward-looking perspective on human-AI collaboration. DreamX presents an innovative video diffusion approach to learning universal action representations. LoopVQ achieves sub 1-bit KV cache quantization for efficiency gains, and You don't need long context challenges the assumption that extended context windows are necessary. A Circuit for In-Context Learning provides mechanistic understanding of how these models function internally.
</think>


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
| [Routes of Reasoning: Reading and Reshaping Test-Time Compute in MoE Models](http://arxiv.org/abs/2611.05919v1) | Shengjie Wang, Mohsen Fayyaz, Nanyun Peng et al. | Analyzes how reasoning models allocate test-time compute across planning, deriving, and verifying behaviors, revealing that models "overthink" after finding correct answers. Proposes methods to reshape compute allocation, reducing wasteful verification while maintaining accuracy. |
| [A Circuit for In-Context Learning](http://arxiv.org/abs/2611.05344v1) | Andrew Gao, William Gao et al. | Investigates the mechanistic basis of in-context learning, identifying candidate circuit components that enable rapid task acquisition from demonstrations. Advances understanding of how transformers learn novel mappings without parameter updates. |
| [LoopVQ: Sub 1-bit KV Cache Quantization for Looped Transformers](http://arxiv.org/abs/2611.05304v1) | Minsoo Cheong, Sungjoo Yoo et al. | Proposes sub 1-bit KV cache quantization specifically designed for looped transformer architectures, achieving extreme compression while maintaining performance. Enables more efficient deployment of parameter-efficient looped models. |
| [Suppressing Misaligned Behaviors in Language Models, Durably](http://arxiv.org/abs/2611.05358v1) | Luxi He, Pengcheng Jiang, Jifan Zhang et al. | Studies how effectively misaligned behaviors can be suppressed at various training stages, constructing model organisms with deliberate misalignment triggers. Provides insights into durable behavioral correction strategies. |
| [Phonological Knowledge of Chinese Characters in Language Models](http://arxiv.org/abs/2611.05803v1) | Xiaozhe Ji, Renfen Hu, Hai Hu et al. | Introduces PinyinBench to evaluate how much phonological knowledge language models possess about Chinese characters, covering homophones, phonological features, and polyphonic characters. Reveals systematic patterns in phonetic encoding within Chinese LMs. |
| [AGORA: Reliability-Aware Aggregation of LLM Judges via Item-Response Theory](http://arxiv.org/abs/2611.05556v1) | Junhyung Ahn et al. | Applies item-response theory to aggregate multiple LLM judges with varying reliability, addressing the challenge of judge pools with heterogeneous quality. Enables more robust evaluation when human-labeled validation sets are limited. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Prospective Memory for Proactive LLM Agents](http://arxiv.org/abs/2611.05731v1) | Yuanchen Bei, Zhining Liu, Tianxin Wei et al. | Introduces prospective memory mechanisms for LLM agents to retain and execute future-directed intentions when opportunities arise, moving beyond retrospective memory systems. Enables agents to act proactively without explicit prompting. |
| [Cognitive Bias Signatures in Search-Equipped LLM Agents](http://arxiv.org/abs/2611.05720v1) | Yanru Xiao, Yingwei Yu et al. | Examines how cognitive biases shape evidence gathering in search-equipped LLM agents, analyzing the impact of result order, prior work records, and initial hypotheses. Provides a controlled framework for understanding biased information-seeking behavior. |
| [Grounded but Not Immune: Confirmation Bias in Agent-as-a-judge](http://arxiv.org/abs/2611.05662v1) | Drake Benjamin Brown, Khushbu Pahwa, Yubin Ge et al. | Demonstrates that Agent-as-a-Judge systems, despite having tools to gather evidence, exhibit confirmation bias in their evaluations. Reveals limitations in the "grounded judge" premise for open-ended task evaluation. |
| [When to Ask, When to Answer: Strategic Clarification for Ambiguous Reference Resolution](http://arxiv.org/abs/2611.05517v1) | Ibrahim Khebour, Nikhil Krishnaswamy et al. | Studies when LLM agents should ask clarification questions versus providing definite answers in referential disambiguation tasks. Addresses the premature answering bias observed in current models. |
| [Adversarial Speculative Reasoning Improves Long Horizon Agents](http://arxiv.org/abs/2611.05345v1) | Hongyin Luo, Wei Fang, Lijie Yang et al. | Argues that speculative decoding should be treated as a training objective rather than merely a systems optimization, improving long-horizon agent performance through adversarial training. Redefines the role of draft models in agentic systems. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Modality-Aware Expert Pruning for MoE-Based Multimodal Large Language Models](http://arxiv.org/abs/2611.05927v1) | Donggeun Kim et al. | Proposes modality-aware pruning strategies for MoE-based MLLMs where expert parameters dominate memory (>90% of model size). Reduces memory footprint while preserving cross-modal reasoning capabilities. |
| [TandemBench: Benchmarking Decision Models for Multi-Agent Collaboration](http://arxiv.org/abs/2611.05827v1) | Baohang Li, Xiaocheng Feng, Bing Qin et al. | Introduces a benchmark of 1,200 questions in multi-agent cooking scenarios to evaluate how decision models handle work division, resource exchange, and parallel execution. Addresses a gap in multi-agent decision evaluation. |
| [Matching the Training-Time Weight Rule in Inference-Time Expert Deactivation](http://arxiv.org/abs/2611.05804v1) | Hao Cheng, Zhiyu Yang, Bo Ma et al. | Systematically compares expert deactivation strategies (removal, freezing, renormalization) and their effects on token routing and performance. Provides guidance for consistent training-inference behavior in MoE models. |
| [You don't need long context](http://arxiv.org/abs/2611.05306v1) | Peter Belcak, Saurav Muralidharan, Jindong Jiang et al. | Demonstrates that frontier language models sacrifice minimal accuracy on long-horizon and long-input tasks through frequent compaction, despite later tokens costing up to 7x more. Challenges the necessity of long context windows. |
| [RAGCompass: Generalizable Retriever Routing via Reranking](http://arxiv.org/abs/2611.05596v1) | Valentin Six, Mufei Li, Dongqi Fu et al. | Proposes a reranking-based approach to route queries to the most suitable retriever in retrieval-augmented generation systems, addressing the weakness of single retrievers across diverse queries. |
| [CARTBench: Rubric-Based Evaluation of Shopping Advice](http://arxiv.org/abs/2611.05862v1) | Yuqin Dai, Zhanwei Zhang, Honghui Yang et al. | Introduces a benchmark for evaluating LLM shopping assistants on complex and ambiguous requests with timelines, addressing data scarcity and criteria standardization challenges. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [From Autonomous Agents to Cognitive Symbionts: Toward AI-Augmented Human Intelligence](http://arxiv.org/abs/2611.05376v1) | Hao Fei et al. | Argues for a paradigm shift from autonomous AI agents to cognitive symbionts that augment human intelligence, addressing persistent human limitations in attention, memory, and perception. Proposes a new research agenda. |
| [DreamX: Video Diffusion Model is a Universal Latent Action Learner](http://arxiv.org/abs/2611.05377v1) | Jisoo Kim, Chaehyun Kim, Junsu Kim et al. | Shows that video diffusion models can learn universal action representations that are consistent across different executions while invariant to embodiment and appearance changes. Advances action representation learning from video. |
| [False Reassurance in LLM Severe-Weather Guidance: A Replayable Evaluation Against Real NWS Alerts](http://arxiv.org/abs/2611.05290v1) | Kadharmoideen Fadururdeen et al. | Identifies and measures "false reassurance" where LLMs missing real-time alert data provide incorrect calm guidance during active weather warnings. Introduces a replayable evaluation framework using 117 real NWS alert cases. |
| [MedPhysBench: A Benchmark for Evaluating Language Models on Medical Physics Calculations](http://arxiv.org/abs/2611.05340v1) | Omar Nusrat et al. | Provides a benchmark with seeded generators for medical physics calculations in radiation therapy, addressing the need for reliable LLM evaluation in safety-critical medical domains. Includes error detection tasks. |

---

## 3. Research Trend Signal

Today's submissions signal several emerging research directions. **Agentic reliability and safety** dominates, with multiple papers examining cognitive biases (confirmation bias in judges, bias in search-equipped agents), prospective memory, and the tension between autonomous action and human oversight. The **LLM-as-judge paradigm** is maturing—researchers now recognize its limitations and are developing aggregation methods and bias-mitigation strategies.

**Efficiency innovations** continue to accelerate, particularly for MoE architectures and memory-constrained deployment. The finding that "you don't need long context" challenges conventional wisdom and may reshape how we approach long-document tasks.

Perhaps most notably, there's a philosophical shift in **human-AI interaction design**—moving from autonomous agents toward cognitive symbiosis. This reflects growing awareness that purely autonomous systems may not align well with human needs, and that augmenting human cognition directly may be more valuable than replacing human decision-making.

---

## 4. Worth Deep Reading

1. **[Routes of Reasoning: Reading and Reshaping Test-Time Compute in MoE Models](http://arxiv.org/abs/2611.05919v1)**  
   *Why:* This paper addresses the critical inefficiency of "overthinking" in reasoning models—a problem with direct practical implications for deployment costs. The analysis of distinct reasoning behaviors (planning, deriving, verifying) provides a mechanistic understanding that could inform both training and inference-time interventions.

2. **[From Autonomous Agents to Cognitive Symbionts: Toward AI-Augmented Human Intelligence](http://arxiv.org/abs/2611.05376v1)**  
   *Why:* This conceptual paper offers a compelling vision for the next decade of AI development, moving beyond autonomous agents toward systems that genuinely augment human cognition. It provides a framework for thinking about human-AI collaboration that may influence both research priorities and product design.

3. **[Grounded but Not Immune: Confirmation Bias in Agent-as-a-judge](http://arxiv.org/abs/2611.05662v1)**  
   *Why:* As LLM-as-judge becomes standard practice for evaluation, understanding its failure modes is essential. This paper reveals that even when judges have access to tools for gathering evidence, they exhibit systematic confirmation bias—a finding with significant implications for how we design and use evaluation systems.

---

*Generated from 50 papers across cs.AI, cs.CL, and cs.LG*

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*