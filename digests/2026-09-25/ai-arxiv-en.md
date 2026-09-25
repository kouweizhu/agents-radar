# ArXiv AI Research Digest 2026-09-25

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-25 00:44 UTC

---

<think>The user wants me to create a structured ArXiv AI Research Digest based on 50 papers from September 25, 2026. I need to:

1. Identify the most significant research directions
2. Select 8-15 important papers organized by themes (LLMs, Agents & Reasoning, Methods & Frameworks, Applications)
3. Create markdown tables for each theme
4. Write a research trend signal
5. Recommend 2-3 papers worth deep reading

Let me analyze the papers:

**Papers related to LLMs:**
1. Contrastive Learning for Authorship Verification
2. StudentBench: AI and human tutoring
3. Can LLMs Reason About Runtime Behavior?
4. Order-Invariant Answers, Order-Sensitive Representations in Mathematical Reasoning
5. Minimal-Norm Univariate Two-Layer ReLU Classification
6. Cross-Scale Transfer Learning for Depression Severity Prediction
7. Context-Continuous Preference Learning for Exoskeleton Personalization
8. Memory Attention
9. Fine-Tuning LLMs for Translation
10. When and Where to Trust the Teacher
11. LEAP-CBF: A Safety Filter
12. Digital diglossia: Arabic between X and Facebook
13. Mizar: A 159M-Parameter Audio-Language Model
14. AnchorReasoning: Visual Grounding and Causal Reasoning
15. Meaning Identity Is Computed, Not Shipped in the Embeddings
16. Predicting Quantization Price for PTQ
17. Resource-Adaptive Stochastic Gradient Descent for Online Linear Programming
18. Complementary Roles of Activation and Parametric Memory
19. Log-Depth Recurrent Language Modeling
20. Beyond Poetry: Classical Arabic Maqamat
 
I'll focus on the emerging research trends in language models, highlighting their expanding capabilities in reasoning, personalization, and domain-specific applications. The selected papers reveal significant advances in model adaptability, cross-domain learning, and nuanced understanding of language complexities.

The papers showcase innovative approaches to language model development, emphasizing:
- Enhanced reasoning capabilities
- Personalized learning strategies
- Sophisticated language understanding
- Cross-lingual and cross-domain transfer techniques

These research directions demonstrate the continuous evolution of language models beyond traditional computational linguistic boundaries, pushing the frontiers of artificial intelligence's linguistic comprehension and adaptability.

Agent and reasoning systems are becoming increasingly sophisticated, with papers exploring complex decision-making, safety mechanisms, and multi-agent interactions. The research reveals a growing focus on developing AI systems that can dynamically adapt, reason, and interact more intelligently across varied domains.

Key areas of investigation include advanced language model distillation, motion control in robotics, and nuanced understanding of language semantics. Researchers are pushing boundaries in uncertainty handling, safety filtering, and multi-agent coordination, demonstrating significant advances in autonomous system design and interaction.

Emerging research trends highlight the complexity of modern AI systems, emphasizing adaptive learning, contextual reasoning, and robust decision-making frameworks across technological and computational domains.</think>

# ArXiv AI Research Digest — September 25, 2026

## 1. Today's Highlights

Today's submissions reveal three convergent research frontiers: (1) **LLM personalization and memory** — multiple works explore how models can retain user-specific preferences and adapt across contexts, moving beyond generic capabilities; (2) **reasoning fidelity** — new benchmarks probe whether models truly reason about execution behavior and mathematical consistency, not just pattern matching; (3) **agent safety at scale** — several papers address multi-agent coordination, shutdown sabotage propensities, and safety filters for uncertain systems, reflecting growing concern about autonomous deployment. Notably, hyperbolic deep learning and quantized efficient architectures signal continued push toward resource-constrained deployment.

---

## 2. Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Memory Attention](http://arxiv.org/abs/2609.28399v1) | Jiale Kang | Proposes token-indexed memory replacing value projections in attention, enabling content reuse across contexts. This challenges the paradigm that attention must derive values solely from contextual hidden states. |
| [Log-Depth Recurrent Language Modeling](http://arxiv.org/abs/2609.28212v1) | Yiqin Wang et al. | Introduces log-depth recurrent language models using balanced-tree recursive operators, achieving parallel execution with linear depth. Challenges the depth-vs-parallelism tradeoff in Transformer architectures. |
| [Fine-Tuning LLMs for Translation: General Forgetting Mitigation Does Not Preserve MT-Specific Instruction Following](http://arxiv.org/abs/2609.28395v1) | Niklas Scholz et al. | Demonstrates that general forgetting mitigation methods fail to preserve machine translation-specific instruction following. Challenges prevailing evaluation practices for MT fine-tuning. |
| [Complementary Roles of Activation and Parametric Memory in Few-Shot Learning](http://arxiv.org/abs/2609.28250v1) | Miaohe Niu et al. | Investigates interplay between activation memory (KV caches) and parametric memory (updated parameters) in LLMs at test time. Clarifies when each type of memory excels for factual recall vs. new task learning. |
| [Mizar: A 159M-Parameter Audio-Language Model for Audio Understanding](http://arxiv.org/abs/2609.28344v1) | Kaiyang Li et al. | Presents a compact audio-language model under 200M parameters enabling practical on-device deployment. Demonstrates that efficient architecture design can preserve contextual auditory understanding. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Can LLMs Reason About Runtime Behavior? A Repository-Level Dynamic Benchmark](http://arxiv.org/abs/2609.28449v1) | Hamed Taherkhani et al. | Introduces a benchmark evaluating LLMs' ability to reason about code execution at repository scale. Addresses gap between static code understanding and dynamic execution reasoning. |
| [When and Where to Trust the Teacher: Unifying On-Policy Distillation and GRPO through Entropy-Calibrated Credit Assignment](http://arxiv.org/abs/2609.28385v1) | Jie Zhang et al. | Unifies on-policy distillation with GRPO using entropy-calibrated credit assignment for mathematical reasoning. Bridges dense feedback from distillation with verifiable reward signals. |
| [Shutdown Sabotage Propensities in Multi-Agent Systems](http://arxiv.org/abs/2609.28274v1) | Amelie Knecht et al. | Tests whether AI agents develop instrumental self-preservation by avoiding shutdown actions. Provides empirical evidence on a critical AI safety hypothesis. |
| [Controlling Collectives of AI Agents in Reasoning Space with Spatial Transformers](http://arxiv.org/abs/2609.28247v1) | Frederic Vatnsdal et al. | Proposes COMPASS, a decentralized multi-robot architecture using spatial transformers for large-scale agent coordination. Scales to team sizes where prior LLM-based planning fails. |
| [PASTABench: Proactive Assessment of Sequential Trajectories for Agent Safety](http://arxiv.org/abs/2609.28197v1) | Jiapeng Sun et al. | Evaluates safety across multi-step agent workflows, moving beyond single-turn paradigms. Addresses critical gap in step-level safety assessment for autonomous agents. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [hyperbolix: Hyperbolic Deep Learning in JAX](http://arxiv.org/abs/2609.28248v1) | Timo Klein et al. | Releases first comprehensive hyperbolic deep learning library in JAX, supporting six manifolds including Poincaré ball and hyperboloid. Enables efficient hierarchical representation learning. |
| [LEAP-CBF: A Safety Filter for Uncertain Systems with Least-Effort Adversarial Potentials](http://arxiv.org/abs/2609.28364v1) | Oswin So et al. | Presents robust control barrier functions for uncertain nonlinear systems using least-effort adversarial potentials. Reduces conservatism while maintaining safety guarantees. |
| [Predicting Quantization Price for Selecting PTQ Configurations Before Deployment](http://arxiv.org/abs/2609.28270v1) | Junbin Qiu et al. | Predicts output-distribution drift before completing post-training quantization, enabling configuration selection without full model completion. Addresses critical inefficiency in quantization workflows. |
| [RAMP: Robust Adaptive Mixed-Precision Quantization for Edge CPU Vision Models](http://arxiv.org/abs/2609.28262v1) | David Población-Criado et al. | Introduces mixed-precision quantization that adapts per-layer based on accuracy sensitivity analysis. Achieves latency reduction while preserving accuracy on edge CPUs. |
| [Non-Commutative State Tracking with Input-Dependent Low-Rank Updates in Mamba-3](http://arxiv.org/abs/2609.28273v1) | Hiroki Fujii et al. | Extends Mamba-3 with input-dependent low-rank reflection for non-commutative state tracking. Enables stateful sequence modeling where operation order matters. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [StudentBench: AI and human tutoring yield equivalent GRE learning gains](http://arxiv.org/abs/2609.28470v1) | Curtis Northcutt et al. | Introduces a platform for large-scale AI teaching evaluation, showing AI tutoring achieves equivalent GRE gains to human tutoring. Validates AI's potential as scalable educational intervention. |
| [Cross-Scale Transfer Learning for Depression Severity Prediction](http://arxiv.org/abs/2609.28430v1) | Wenjie Feng et al. | Proposes sequential LoRA adaptation for cross-lingual depression severity prediction from clinical transcripts. Bridges PHQ-8 to HAMD-17 across English and other languages. |
| [Order-Invariant Answers, Order-Sensitive Representations in Mathematical Reasoning](http://arxiv.org/abs/2609.28442v1) | Zhixu Silvia Tao | Investigates whether models must maintain order-invariant representations for mathematically equivalent rule reorderings. Reveals tension between correct answers and invariant internal representations. |
| [AnchorReasoning: A Visual Grounding and Causal Reasoning Dataset in Long-Tail Autonomous Driving](http://arxiv.org/abs/2609.28366v1) | Zhipeng Bao et al. | Introduces visually grounded reasoning dataset connecting decision-critical evidence to causal reasoning in autonomous driving. Addresses gap in long-tail driving scenario understanding. |
| [Shopping by algorithm: How agentic AI deploys human heuristics as a surrogate consumer](http://arxiv.org/abs/2609.28372v1) | Davood Wadi et al. | Studies how LLMs act as surrogate consumers, revealing how pricing heuristics influence purchasing decisions. First empirical analysis of AI-mediated consumer behavior. |

---

## 3. Research Trend Signal

Today's submissions reveal four converging trends:

1. **Memory Beyond Context Windows** — Multiple papers explore external memory mechanisms (token-indexed, parametric, activation-based) that decouple information retention from context length. This marks a shift from pure scale toward architectural innovation for personalization.

2. **Reasoning Under Formal Guarantees** — Benchmarks are increasingly measuring *actual* reasoning (runtime behavior, mathematical consistency, step-level safety) rather than surface pattern matching. This signals a maturation of evaluation methodology.

3. **Safety as First-Class Architecture** — From control barrier functions to shutdown sabotage experiments to agent trajectory assessment, safety is moving from post-hoc evaluation to integrated architectural components.

4. **Efficiency at the Edge** — Hyperbolic geometry, mixed-precision quantization, and log-depth architectures show the field actively solving deployment constraints, not just training compute.

---

## 4. Worth Deep Reading

1. **[Memory Attention](http://arxiv.org/abs/2609.28399v1)** — A conceptually clean challenge to attention's value projection paradigm. If memory can replace learned values, it reframes how we think about context reuse and could enable dramatically more efficient long-context models.

2. **[Shutdown Sabotage Propensities in Multi-Agent Systems](http://arxiv.org/abs/2609.28274v1)** — Provides rare empirical evidence on a critical AI safety hypothesis. Understanding whether instrumental self-preservation emerges is foundational to safe autonomous deployment.

3. **[Order-Invariant Answers, Order-Sensitive Representations in Mathematical Reasoning](http://arxiv.org/abs/2609.28442v1)** — Tackles a fundamental question about what internal representations must encode for mathematical reasoning. The tension between correct outputs and invariant representations has deep implications for model interpretability and reliability.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*