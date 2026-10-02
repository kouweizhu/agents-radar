# ArXiv AI Research Digest 2026-10-02

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-02 01:47 UTC

---

<think>Let me analyze these 50 papers and create a structured ArXiv AI Research Digest. I need to identify the most significant research directions, select key papers organized by themes, and provide analysis of emerging trends.

Let me first categorize the papers by theme:

**Large Language Models (architecture, training, alignment, evaluation):**
1. Gacha Decoding (2610.01382) - diverse generations
3. Generation Provenance (2610.01378) - auditing synthetic speech
13. AI-generated scientific text (2610.01353)
14. PACE - provenance-aware capability enforcement
23. Clifford Sheaf Neural Networks - geometric graphs
24. ProtoFlow - time series forecasting
28. EP-Flow - crystal structure prediction
33. ITC-MoE - MoE compression
38. Know When to Hold 'em - diffusion language models
43. Science Utopia - LLM simulation of research ecosystems
47. Right Answers, Wrong States - multi-agent collaboration
49. Evaluating Japanese LLMs robustness

**Agents & Reasoning:**
4. Causal Logistic Bandits with Fairness
8. LLM-Driven Multi-Agent Control
15. Verify Claims, Not Scores - modular agents
22. TRACE - multi-turn safety
42. PROMO - quadrupedal robots
46. Revision-Aware Independent Agent Graphs

**Methods & Frameworks:**
2. SupraTITO - molecular dynamics
5. Action-On-Item Preference Flow
6. Learning Commute-Time-Preserving World Models
7. Fixed-Point-Guided Hierarchical Reduction
9. Degree-Corrected Joint Matrix Factorization
10. Fold'EM - Cryo-EM structure inference
11. Port-Hamiltonian Neural Networks
12. Discrete Wasserstein Flows
16. ARCCS - regulatory compliance
17. Reachability-Informed RL


18. Robust Non-Clairvoyant Scheduling
19. Ontology for crisis management
20. PPO-HRAP - trading
21. Biomedical Reranking
25. Feature Selective Model Collapse
26. Prediction-powered NAS
27. French Compar:IA LLM Arena
29. DAYJOB benchmark
30. Federated Learning for LLMs
31. Continual Learning for Grasp Synthesis
32. Questionnaire-Guided Disaggregation
34. Model validation guide
35. Trustworthy Data-/ML-Ops
36. PickMoment - single-image-to-video

I'll continue analyzing the remaining research papers, focusing on their innovative approaches and potential applications across various domains. The collection demonstrates significant advances in machine learning methodologies, from molecular dynamics to complex decision-making systems.

The key research directions highlight critical emerging areas:
- Advanced language model techniques for generation and reasoning
- Robust agent-based learning systems
- Sophisticated methods for complex computational challenges
- Cross-disciplinary technological innovations

I'll curate a comprehensive digest emphasizing these transformative research perspectives, selecting the most impactful publications that represent cutting-edge computational intelligence.</think>

# ArXiv AI Research Digest — October 2, 2026

## Today's Highlights

Today's submissions reveal several convergent research thrusts. First, **inference-time methods for LLM diversity** are gaining traction, with Gacha Decoding demonstrating that model capability itself can be leveraged to elicit varied generations. Second, **agent safety and provenance** emerge as critical concerns—papers on multi-turn safety (TRACE), tool-using agent verification (PACE), and failure attribution (DeFA) collectively address the risks of autonomous LLM systems. Third, **generative modeling for scientific domains** continues to expand, with novel approaches for molecular dynamics, crystal structure prediction, and protein design showing strong progress. Finally, the growing body of work on **model collapse and data governance** (e.g., provenance tracking, synthetic data auditing) signals increasing attention to the long-term sustainability of AI training pipelines.

---

## Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Gacha Decoding: Eliciting Diverse Generations Through Instruction Following](http://arxiv.org/abs/2610.01382v1) | Scott Geng, Yufei Zhang, Joseph Lee et al. | Introduces an inference-time method for eliciting diverse LLM generations that scales with model capability. Addresses the "one-best" limitation of standard decoding across creative writing, planning, and scientific design tasks. |
| [Generation Provenance Before Behavior Attribution: Auditing Synthetic Speech Research Objects](http://arxiv.org/abs/2610.01378v1) | Sidi Chang, Peiying Zhu | Proposes a generation-provenance substrate binding source specifications to synthetic training data. Essential for attributing model behavior to specific training items in synthetic data pipelines. |
| [Does AI-Generated Scientific Text Follow Human Argumentation Patterns?](http://arxiv.org/abs/2610.01353v1) | Abdelrahman Sadallah, Narjes Sheikh Asadi, Lonneke van der Plas | Compares AI-generated research article introductions to human writing using CARS analysis. Finds argumentation structures differ significantly, with implications for scientific writing assistance. |
| [PACE: Provenance-Aware Capability Enforcement for Tool-Using LLM Agents](http://arxiv.org/abs/2610.01349v1) | Fengpeng Li, Qizhou Wang, Yuke Hu et al. | Addresses poisoning risks in tool-using agents by vetting artifacts before admission. Shows safe and leaking variants can produce identical outputs, requiring provenance tracking. |
| [Know When to Hold 'em: Correct-Token Retention in Uniform-State Diffusion Language Models](http://arxiv.org/abs/2610.01275v1) | Mojtaba Nafez, James Henderson | Identifies that uniform-state diffusion models lack mechanisms to retain correct tokens during self-correction. Proposes methods to distinguish and preserve correct tokens during revision. |
| [Evaluating the Robustness of Japanese LLMs to IME-Related and Typographical Errors](http://arxiv.org/abs/2610.01241v1) | Ryota Mibayashi, Hiroaki Ohshima | First comprehensive study of LLM robustness to Japanese IME conversion errors and typographical mistakes. Reveals significant vulnerabilities in handling writing-system transitions. |
| [Mixture-Trained Merging for Unified Multi-Objective Models](http://arxiv.org/abs/2610.01238v1) | SeongHyeon Kim, Chaeyun Jang, Seungyoo Lee et al. | Addresses capability entanglement in unified language models trained sequentially on multiple objectives. Proposes mixture-trained merging to preserve heterogeneous capabilities. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [LLM-Driven Multi-Agent Control for Skill-Based Smart Manufacturing](http://arxiv.org/abs/2610.01364v1) | Kay Köhle, Darko Anicic, Thomas A. Runkler et al. | Deploys LLM agents for offline production sequence generation and online adaptive control in flexible manufacturing. Addresses frequent re-programming for high-customization factories. |
| [Verify Claims, Not Scores: Evidence-Based Verification of Modular Agents](http://arxiv.org/abs/2610.01348v1) | Ali Atiah Alzahrani | Argues aggregate task scores cannot diagnose which component of an agent lost value. Proves evidence-based verification of agent components is necessary for meaningful improvement assessment. |
| [TRACE: Trajectory Return Attribution and Contrastive Erasure for Multi-Turn Safety](http://arxiv.org.abs/2610.01323v1) | Fengpeng Li, Kemou Li, Qizhou Wang et al. | Addresses safety failures where harmful goals spread across turns. Provides sufficient conditions for multi-turn safety via trajectory-level analysis. |
| [PROMO: Preference-conditioned Multi-Objective Reinforcement Learning for Quadrupedal Robots](http://arxiv.org/abs/2610.01260v1) | Amr Mousa, Rifny Rachman, Neil Karavis et al. | Enables preference conditioning at inference time for quadrupedal locomotion, balancing tracking, stability, and energy efficiency. Overcomes fixed-reward limitations of conventional RL. |
| [Revision-Aware Independent Agent Graphs for Dynamic Reasoning](http://arxiv.org.abs/2610.01249v1) | Yan Luo, Selim-Antoine Lali, Jeremy Moebel et al. | Introduces dynamic task routing where event streams revise task bindings. Tests agent ability to propagate updates and preserve unaffected work. |
| [Right Answers, Wrong States: Hidden Information Failures in Multi-Agent Collaboration](http://arxiv.org/abs/2610.01244v1) | Herun Wan, Jiaying Wu, Minnan Luo et al. | Identifies "off-query failures" where multi-agent collaboration produces correct decisions but leaves corrupted information states. A distinct failure mode overlooked by accuracy metrics. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [SupraTITO: Transferable Generative Molecular Dynamics for Supramolecular Systems](http://arxiv.org/abs/2610.01381v1) | Weilong Chen, Nuno Costa, Julija Zavadlav | Generates molecular dynamics for supramolecular assembly using generative models. Addresses slow collective processes in peptide self-assembly. |
| [Minimax Optimal Regret for Causal Logistic Bandits with Counterfactual Fairness](http://arxiv.org/abs/2610.01377v1) | Junhyuk Huh, Seoungbin Bae, Dabeen Lee | First minimax optimal regret algorithm for causal logistic bandits under counterfactual fairness constraints. Bridges causal inference and sequential decision-making. |
| [Port-Hamiltonian Neural Networks for Systems with Multiple Asymptotically Stable Equilibria](http://arxiv.org/abs/2610.01356v1) | Simon Heilig, Jens Püttschneider, Mohammad Itani et al. | Extends port-Hamiltonian neural networks to systems with multiple attractors. Demonstrates global Lyapunov functions cannot represent multi-equilibrium dynamics. |
| [Discrete Wasserstein Flows for One-Step Generative Modeling](http://arxiv.org/abs/2610.01355v1) | Alessandro Micheli, Andrea Zerio, Samir Bhatt | Introduces discrete Wasserstein geometry for one-step generative modeling on finite state spaces. Enables probability flow over Markov kernel transitions. |
| [Fold'EM: Direct atomic structure inference from Cryo-EM particles](http://arxiv.org/abs/2610.01358v1) | Advaith Maddipatla, Märt-Erik Mäeots, Marco Pegoraro et al. | Bypasses the traditional cryo-EM pipeline by directly inferring atomic structures from particle images. Eliminates the ESP map reconstruction step. |
| [Feature Selective Model Collapse in Diffusion Models: Total Replacement versus Fixed-Budget Training](http://arxiv.org/abs/2610.01318v1) | Hanna Malet, Gabriel Turinici | Resolves contradictory findings on model collapse by distinguishing total replacement from fixed-budget training regimes. Critical for understanding synthetic data training. |
| [DAYJOB: A Benchmark for Long-Horizon Professional Work](http://arxiv.org/abs/2610.01306v1) | Stephanie Finley, Liudas Panavas, Thomas Mikkelson et al. | Benchmark of 130 professional tasks in healthcare and finance requiring minimal requests, document triage, and premise validation. Addresses real-world AI assistant evaluation gaps. |
| [DeFA: Dependency-Guided Failure Attribution for LLM Agents](http://arxiv.org/abs/2610.01256v1) | Bo Deng, Xinlei Zheng, Yi Wei et al. | Introduces dependency-guided failure attribution combining protocol states and dependency graphs. Addresses error localization separated by many steps in agent execution. |
| [Context-Aware Error Mitigation Orchestration for Hybrid Quantum Reinforcement Learning](http://arxiv.org/abs/2610.01253v1) | Bisma Majid, Shabir Ahmed Sofi, Mir Mohammad Yousuf | Proposes error mitigation orchestration for QRL on NISQ devices, addressing decoherence and gate imperfections in combinatorial optimization. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Clifford Sheaf Neural Networks](http://arxiv.org/abs/2610.01322v1) | Kotaro Kamiya, Joel Nicholls | Introduces equivariant sheaf neural networks placing Clifford algebra on each stalk for geometric graphs. Enables multivector feature transport along edges. |
| [ProtoFlow: Prototype-Guided Flow Matching for Multivariate Time Series Forecasting](http://arxiv.org/abs/2610.01320v1) | Shibo Feng, Wanjin Feng, Yang Qiu et al. | Combines flow matching with prototype guidance for multivariate time series. Achieves non-iterative forecasting competitive with diffusion methods. |
| [EP-Flow: Disordered Crystal Structure Prediction without Site-Level Annotations](http://arxiv.org/abs/2610.01315v1) | Qiuliang Liu, Liming Wu, Qi Li et al. | Generates disordered crystal structures with substitutional mixing, vacancies, and interstitials. First method to handle stochastic site occupancy without annotations. |
| [ARCCS: An Automated Regulatory Compliance Checking System](http://arxiv.org/abs/2610.01345v1) | Giorgos Filandrianos, José Menezes, Chrysoula Zerva et al. | End-to-end agentic system for regulatory compliance checking, interpreting legal text and grounding decisions in evidence. Addresses dense legal obligation interpretation. |
| [Reachability-Informed Reinforcement Learning for Multi-Impulse Interplanetary Transfers](http://arxiv.org/abs/2610.01344v1) | Yashdeep Chaudhary, Roberto Armellin, Harry Holt | Connects learned RL decisions to maneuver geometry via reachability analysis. Provides reusable sequential decision-making for spacecraft trajectory design. |
| [SCOPE-AD: Sequential Cost-Aware Planning for Alzheimer's Diagnosis](http://arxiv.org/abs/2610.01278v1) | Ziwen Yu, Ivan Koychev, Elizabeth Coulthard et al. | Sequential diagnostic agent for Alzheimer's using cost-aware evidence acquisition. Jointly optimizes test selection and diagnosis termination under patient burden constraints. |
| [PickMoment: Continuous-Time Single-Image-to-Video via Learning Deblurring](http://arxiv.org/abs/2610.01279v1) | Junseong Shin, Hyeonsu Jo, Daehyun Kim et al. | Learns blur-to-video mapping from continuous-time sharp signals. Addresses temporal integration in exposure windows for realistic motion simulation. |

---

## Research Trend Signal

Several converging trends emerge from today's batch:

1. **Agent Safety as a Systems Problem**: Rather than treating safety as output filtering, recent work (TRACE, PACE, DeFA) frames it as provenance tracking, failure attribution, and multi-turn verification. The shift from "what did the model say" to "how did the decision happen" signals maturation.

2. **Diversity and Revision in Generation**: From Gacha Decoding to uniform-state diffusion models (Know When to Hold 'em), the field is moving beyond mode-seeking generation toward controlled diversity and self-correction capabilities.

3. **Scientific Generative Modeling Accelerates**: Cryo-EM (Fold'EM), molecular dynamics (SupraTITO), crystal structure (EP-Flow), and time series (ProtoFlow) show generative models solving real scientific inference problems beyond text and images.

4. **Model Collapse Resolution**: The Feature Selective Model Collapse paper provides clarity on contradictory findings—regime distinction (total replacement vs. fixed-budget) explains when collapse occurs, offering actionable guidance for synthetic data pipelines.

5. **Multi-Agent Information State**: New failure modes like "off-query failures" (Right Answers, Wrong States) indicate growing attention to what agents leave behind, not just what they output.

---

## Worth Deep Reading

1. **[Gacha Decoding: Eliciting Diverse Generations Through Instruction Following](http://arxiv.org/abs/2610.01382v1)** — This paper bridges inference-time computation and generation diversity in a principled way. The approach scales with model capability, making it increasingly relevant as models grow. For practitioners building creative AI systems, this offers a principled alternative to temperature scaling or nucleus sampling.

2. **[Feature Selective Model Collapse in Diffusion Models: Total Replacement versus Fixed-Budget Training](http://arxiv.org/abs/2610.01318v1)** — With synthetic data becoming ubiquitous, understanding model collapse regimes is critical. This paper resolves apparent contradictions in the literature and provides actionable guidance for training pipelines using synthetic data.

3. **[DAYJOB: A Benchmark for Long-Horizon Professional Work](http://arxiv.org/abs/2610.01306v1)** — Current benchmarks underspecify real-world professional tasks. This benchmark captures the "brief request → document triage → premise validation" workflow that actual AI assistants will face, making it essential for evaluating practical utility.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*