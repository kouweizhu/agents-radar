# ArXiv AI Research Digest 2026-11-19

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-19 03:48 UTC

---

<think>The user wants me to generate a structured ArXiv AI Research Digest based on the 50 papers provided. Let me analyze these papers and organize them into the requested format.

Let me identify the key themes and select the most important papers:

**Themes:**
1. 🧠 Large Language Models (architecture, training, alignment, evaluation)
2. 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
3. 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
4. 📊 Applications (domain-specific, multimodal, code generation)

Let me go through the papers:

1. RSIBench-Infra - Agents optimizing training/inference infrastructure - Agents & Reasoning
2. Temporal Rank in RNNs - architecture/training - LLM
3. Enhancing Active Learning with Foundation Models - Methods
4. Attention to Predicate Circuit - Methods/interpretability - LLM
5. MoE-Context - architecture - LLM
6. LLM-Assisted Multi-Fidelity Bayesian Optimization - Applications
7. VAFL - Vertical Federated Learning - Methods
8. PIPETTE - Prompt injection security - Agents & Reasoning
9. Pose-Robust Few-Shot VLA - Applications (robotics)
10. Semantic Context Handoff - Agents
11. Visual Evidence Verification - Applications
12. OCTR2A - Trajectory forecasting - Applications
13. Tell Me How Sure You Are - Uncertainty communication - LLM
14. automodel - Agentic model discovery - Agents
15. Exploring Daily Emotional Well-Being - Applications
16. OpenGNS - Gradient Noise Scale dataset - Methods
17. Can Weight-Space Programming Alter Ethical Priorities - LLM/alignment
18. Distribution-Free UQ for Weather - Applications


19. Structure-Preserving Neural Approximation - Methods
20. Reducing Inference Cost of Coding Agents - Agents
21. RespCCT and FreqCCT - Applications (medical)
22. Benchmarking LLM abilities on postdoc-level problems - LLM evaluation
23. Fuse to Recognize the Unseen - Applications
24. Supervised Hebbian Class Networks - Methods
25. AutoPI - Prompt injection red teaming - Agents
26. OpenKAGE - Lifelong learning agents - Agents
27. LoopCache - Long-context decoding - LLM
28. KnowledgeC law - Knowledge engineering - Agents
29. Beyond Corpus-Driven Imitation - quantum RL for music - Applications
30. Element-Wise Femoral Stress Prediction - Applications
31. Stability-compatible kernels - Methods
32. TRESS - Time series forecasting - Methods
33. FedE2E - Federated learning for autonomous driving - Applications
34. From Points to Trajectories - Physical AI - Applications
35. ViLFlow - Vision-language generation - Applications
36. What Survives Shift from Text to Pixels - Security - Agents
37. Functional Principal Component Analysis - Methods
38. Learning to Coordinate - Red teaming - Agents
39. TableControl - Gesture interaction - Applications
40. Towards Reliable Scaling Laws for Tabular Foundation Models - LLM/Methods
41. Continuing noisy-loop models - Methods
42. Conditional What-If Generation for RAN - Applications
43. GALA - EEG visual decoding - Applications
44. Learning with Unlearning - Methods
45. SpiderMark - Watermarking - Methods
46. Worth Another Look - Visual inspection - Applications
47. VideoACE - Video understanding benchmark - Methods
48. Rare-Tail Statistics - Methods
49. Adaptive Action Horizon Selection - Agents
50. CounselTraj - Psychological counseling dialogues - Applications

I've identified several papers warranting careful review. The MoE-Context approach caught my attention as a potentially significant architectural innovation. PIPETTE offers an interesting angle on agent security concerns, while the KnowledgeClaw framework presents novel perspectives on knowledge engineering. OpenKAGE stands out for its lifelong learning agent capabilities, and LoopCache appears to address critical efficiency challenges in long-context processing. These papers represent substantial methodological contributions that could advance multiple areas of AI research.

The selected papers span diverse research domains, from fundamental architectural improvements like MoE-Context and LoopCache to specialized applications in cybersecurity, knowledge systems, and adaptive learning. Each represents a unique approach to addressing current limitations in language models, agent systems, and computational efficiency.

The papers collectively explore innovative strategies for enhancing model performance, security, and adaptability across different computational contexts. Key themes include context management, adversarial robustness, knowledge engineering, and optimization techniques.

Focusing on large language models, agents and reasoning, methodological frameworks, and applied domains reveals a nuanced landscape of research challenges. The selected works demonstrate sophisticated approaches to improving AI system capabilities through targeted architectural innovations and strategic interventions.

Core research trajectories include developing more efficient model architectures, enhancing agent reliability, creating robust learning methodologies, and exploring specialized application domains. The papers underscore a commitment to advancing AI's theoretical foundations and practical utility across varied computational scenarios.

Key focus areas involve architectural improvements like mixture-of-experts approaches, context management techniques, and efficient inference strategies. Agent development emphasizes robust reasoning, security considerations, and adaptive learning paradigms. Methodological innovations span knowledge engineering, federated learning frameworks, and continuous learning systems.

The emerging research signals highlight significant potential in uncertainty quantification, interpretability through circuit-level understanding, and addressing critical challenges in autonomous systems like vision-language-action models and pose-robust few-shot learning approaches.
</think>


# ArXiv AI Research Digest

**Date:** November 19, 2026  
**Categories Covered:** cs.AI, cs.CL, cs.LG

---

## 1. Today's Highlights

Today's submissions reveal a strong emphasis on **LLM agents and their practical deployment challenges**. Key breakthroughs include MoE-Context's novel approach to selective context gating that could significantly reduce inference costs for long-horizon tasks, and PIPETTE/AutoPI's sophisticated red-teaming frameworks for prompt injection vulnerabilities—reflecting growing industry concern about agent security. The interpretability space advances with a method converting attention networks to hard-logic predicate circuits, offering a new path toward transparent AI systems. Meanwhile, applications in robotics (pose-robust VLAs, visual inspection planning) and scientific discovery (postdoc-level benchmarking, femoral stress prediction) continue to expand AI's real-world utility.

---

## 2. Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [MoE-Context: Show the Model Only What It Needs](http://arxiv.org/abs/2611.24379v1) | Vedant Navale et al. | Introduces selective context gating for LLMs, splitting context into blocks with a fast yes/no classifier to retain only relevant information per step. This mirrors human working memory and could dramatically reduce inference costs for long-context agents. |
| [LoopCache: Accelerating Long-Context Self-Speculative Decoding for Looped Transformers](http://arxiv.org/abs/2611.24301v1) | Zizhuo Fu et al. | Proposes wave-front speculative decoding optimized for looped transformer architectures that repeatedly apply weight-shared blocks with loop-specific KV caches. Enables faster sequential execution while maintaining model fidelity. |
| [Benchmarking LLM abilities on postdoc-level natural science problems](http://arxiv.org/abs/2611.24321v1) | Alina Avanesyan et al. | Presents a benchmark for evaluating LLMs on expert-level scientific problems requiring executable work and rubric-based scoring. Addresses the evaluation gap for problems without symbolic answer keys. |
| [Can Weight-Space Programming Alter Learned Ethical Priorities?](http://arxiv.org/abs/2611.24330v1) | Kai Yi Ji et al. | Investigates whether weight edits can modify a model's ethical trade-offs between honoring commitments and maximizing benefit. Demonstrates targeted alignment modifications without full retraining. |
| [Tell Me How Sure You Are: Communicating Uncertainty in Auxiliary Evidence to Foundation Models](http://arxiv.org/abs/2611.24351v1) | Soumyajit Chatterjee et al. | First work to explicitly communicate uncertainty in context information to LLMs and VLMs, preserving probabilistic signals rather than discarding them through conventional prompting. |
| [How to Turn an Attention Neural Network into an Interpretable Hard-Logic Predicate Circuit](http://arxiv.org/abs/2611.24381v1) | Yuchen Li et al. | Converts trained attention networks into hard-logic predicate circuits using minimized truth tables, enabling interpretable decision-making while preserving model behavior. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [PIPETTE: Prompt Injection Purple-Teaming for Robust LLM Agents](http://arxiv.org/abs/2611.24362v1) | Lipeng He et al. | Introduces automated red-teaming using reinforcement learning to uncover indirect prompt injection vulnerabilities in LLM agents at scale. Addresses the critical security gap when agents process untrusted external data. |
| [AutoPI: Taxonomy-Guided Adaptive Red Teaming for Prompt Injection in LLM Agents](http://arxiv.org/abs/2611.24313v1) | Stavros Damianakis et al. | Proposes adaptive red-teaming guided by a taxonomy of prompt injection attacks, moving beyond fixed benchmark injections toward measuring robustness against sophisticated adversaries. |
| [KnowledgeClaw: Towards Agentic Knowledge Engineering via Omnimodal Hypergraphs](http://arxiv.org/abs/2611.24294v1) | Haoran Luo et al. | Presents an agentic framework for knowledge engineering that handles omnimodal, live-updating knowledge bases through hypergraph representations. Enables dynamic reasoning-ready knowledge extraction. |
| [OpenKAGE: Open-Ended Lifelong Learning in the Open World via Knowledge-Sharing Agent-Group Evolution](http://arxiv.org/abs/2611.24302v1) | Wenhao Yuan et al. | Introduces a multi-agent evolution framework where agent groups share knowledge to continuously acquire new capabilities in open-world environments without predefined tasks or curricula. |
| [Semantic Context Handoff with On-Demand Evidence for Long-Horizon Agents](http://arxiv.org/abs/2611.24357v1) | Guolong Zheng et al. | Addresses context growth in long-horizon LLM agents by selective evidence retrieval and handoff, reducing inference costs while maintaining task accuracy. |
| [Reducing Inference Cost of Coding Agents with Timeout Cascades](http://arxiv.org/abs/2611.24324v1) | Boxi Zhou et al. | Investigates using smaller, cheaper models for coding agent subtasks through cascading timeouts, aiming to reduce GPU compute costs while maintaining agentic capability. |
| [Adaptive Action Horizon Selection via Flow-Field Uncertainty](http://arxiv.org/abs/2611.24378v1) | Idan Ben-Ami et al. | Proposes uncertainty-aware action horizon selection for VLA models, distinguishing aleatoric from epistemic uncertainty to improve adaptive execution without additional inference overhead. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [OpenGNS: An Open Dataset of the Gradient Noise Scale across Vision, Language, and Diffusion Models](http://arxiv.org/abs/2611.24331v1) | Marcel Aach et al. | Releases a comprehensive dataset of Gradient Noise Scale metrics across model families, enabling better compute allocation and Critical Batch Size estimation during training. |
| [RSIBench-Infra: Can Agents Optimize Their Own Training and Inference Infrastructure at Production Scale?](http://arxiv.org/abs/2611.24395v1) | Hanlin Wu et al. | Presents a benchmark evaluating whether agents can perform end-to-end optimization of training/inference infrastructure across software layers, advancing recursive self-improvement research. |
| [VAFL: A Vertical Analytic Federated Learning Mechanism for Efficient Crowdsourced Services](http://arxiv.org/abs/2611.24367v1) | Yajiang Huang et al. | Introduces a vertical federated learning framework with closed-form solutions for classification and regression, eliminating gradient communication while preserving data privacy. |
| [Learning with Unlearning: Synaptic Role Partitioning for Simultaneous Continual Learning and Machine Unlearning](http://arxiv.org/abs/2611.24205v1) | Mohammad Ali Vahedifar et al. | Addresses the conflict between continual learning (acquiring new knowledge) and machine unlearning (forgetting specific knowledge) through synaptic role partitioning. |
| [Towards Reliable Scaling Laws for Tabular Foundation Models](http://arxiv.org/abs/2611.24214v1) | Johannes Hog et al. | Investigates scaling laws for tabular foundation models pretrained on synthetic data, addressing the unique challenges of predicting performance in this emerging model class. |
| [VideoACE: Benchmarking Agentic Video Understanding through High-Frame-Rate Actions](http://arxiv.org/abs/2611.24184v1) | Luoyuan Zhang et al. | Introduces a benchmark evaluating whether models can actively interact with video environments to gather evidence and form judgments, assessing agentic video understanding capabilities. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Towards Pose-Robust Few-Shot Vision-Language-Action Models](http://arxiv.org/abs/2611.24360v1) | Wenhao Li et al. | Addresses silent failures in VLA fine-tuning when camera or robot base positions change, proposing methods for pose-robust manipulation policies from few demonstrations. |
| [FedE2E: One-Shot Federated Learning for End-to-End Autonomous Driving with Closed-Loop Evaluation](http://arxiv.org/abs/2611.24254v1) | Tao Lian et al. | Introduces one-shot federated learning specifically for end-to-end autonomous driving with closed-loop evaluation, reducing communication rounds while maintaining driving performance. |
| [GALA: Gallery-Level Alignment for Real-Life Vision Decoding from EEG](http://arxiv.org/abs/2611.24206v1) | Philippe Forest et al. | Achieves cross-subject neural decoding of visual experience from EEG through gallery-level alignment, addressing the generalization gap from 80% within-subject to ~32% across subjects. |
| [Fuse to Recognize the Unseen: Class-Relative Infrared-Visible Fusion for Open-Vocabulary Semantic Segmentation](http://arxiv.org/abs/2611.24316v1) | Zehao Gao et al. | Leverages visible-infrared fusion for open-vocabulary semantic segmentation, enabling recognition of unseen object categories through complementary thermal and visual cues. |
| [When Figures Disagree with Text: Evaluating Autonomous Visual Evidence Verification](http://arxiv.org/abs/2611.24353v1) | Guijia Zhang et al. | Addresses scientific figure-text verification, requiring models to check whether figures support claims rather than merely describing visual content. |
| [ViLFlow: Parallel Vision-Language Generation with Continuous Latent Flows](http://arxiv.org/abs/2611.24240v1) | Kevin Zhai et al. | Proposes continuous latent flow models for parallel vision-language generation, moving beyond autoregressive and discrete diffusion approaches. |

---

## 3. Research Trend Signal

Today's submissions signal several emerging research directions. **Agent security is maturing rapidly**—the dual appearance of PIPETTE and AutoPI indicates the field is moving from identifying vulnerabilities to systematic red-teaming methodologies with adaptive attackers. **Context efficiency** has become a first-class concern, with multiple papers (MoE-Context, Semantic Context Handoff, LoopCache) addressing the cost of long histories in agentic systems—likely driven by real deployment pressures. **Interpretability is entering a new phase** with circuit-level conversion methods offering white-box alternatives to black-box attention analysis. The **evaluation gap** for frontier models is being actively addressed, with postdoc-level benchmarks and agentic video understanding tests pushing beyond simple multiple-choice datasets. Finally, **uncertainty quantification** is expanding from prediction to communication—explicitly surfacing model confidence to downstream systems rather than treating it as internal state.

---

## 4. Worth Deep Reading

1. **[MoE-Context: Show the Model Only What It Needs](http://arxiv.org/abs/2611.24379v1)**  
   *Why:* This paper offers a principled solution to the escalating cost of long-context inference. The selective context gating approach is both theoretically motivated (human working memory) and practically validated. Given the industry-wide pressure to deploy long-horizon agents, this could influence architecture decisions broadly.

2. **[PIPETTE: Prompt Injection Purple-Teaming for Robust LLM Agents](http://arxiv.org/abs/2611.24362v1)**  
   *Why:* Prompt injection represents the most immediate security threat to deployed LLM agents. This work provides a systematic, RL-based methodology for discovering vulnerabilities at scale—a template for the security evaluation practices the field desperately needs.

3. **[How to Turn an Attention Neural Network into an Interpretable Hard-Logic Predicate Circuit](http://arxiv.org/abs/2611.24381v1)**  
   *Why:* This represents a fundamentally different approach to neural network interpretability—one that preserves behavior while converting to human-verifiable logic circuits. If scalable, this could bridge the gap between high-performance neural systems and the explainability requirements of regulated domains.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*