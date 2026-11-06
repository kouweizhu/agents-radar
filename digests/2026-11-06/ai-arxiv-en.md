# ArXiv AI Research Digest 2026-11-06

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-06 02:46 UTC

---

<think>The user wants me to create a structured ArXiv AI Research Digest based on the 50 papers listed. Let me analyze the papers and organize them according to the specified format.

Let me first categorize the papers by theme:

**🧠 Large Language Models (architecture, training, alignment, evaluation):**
- #12 (DPO constraint drift)
- #23 (WeightLoop - weight-space programming)
- #28 (Encoding grammatical number in LLMs)
- #33 (Time-context for cancer prediction - EHR foundation models)
- #37 (Evolutionary Adaptive Neighborhood Learning - k-NN)
- #45 (Archetypal contexts in neurons)
- #47 (Recursive Sparse Attention - million-token)
- #48 (Source-balanced Fisher for user inference)
- #1 (Solar irradiance forecasts - uncertainty)
- #5 (Spectral symmetry fingerprints)
- #4 (Truncated BPTT)
- #22 (Data selection for LLM fine-tuning)
- #24 (Robust ranking for TC impacts)
- #27 (Code representations for agents)
- #25 (Representation learning for CMDPs)
- #46 (Neural compression)
- #49 (Loopback Transformer)
- #6 (PSGAgent for MLLMs)
- #36 (Reweighting fairness)

**🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought):**
- #13 (EnvOpt - automated optimization for agent environments)
- #14 (Test-Time Self-Play)
- #27 (How agents see code)
- #44 (How AI agents waste your money)
- #50 (SPILLWAY - prompt injection defense)
- #21 (Continual RL - permanent/transient representations)
- #26 (Transformers for low-level control in-context)
- #43 ($D^2$-OPD on-policy distillation)


- #3 (Typed Knowledge over Constructive Institutions)
- #11 (Adversarial Multiplicity - cherry-picked models)
- #18 (AtlasULP - domain-aware link prediction)
- #19 (Selective Retrieval Routing for KG repair)
- #35 (HyFlash - speculative decoding)
- #38 (TriAttention - unified sparse attention)
- #42 (MAC-v2 - long-horizon model-based value expansion)
- #7 (FreePath - image dehazing)
- #9 (CacheGraft - RAG via latent-space enrichment)
- #10 (WeLM-Image - unified image generation)
- #16 (Acoustic anomaly detection)
- #17 (Dynamic Rank in LoRA)
- #20 (Last-iterate convergence of SGD)
- #30 (GNN for resource allocation in ISAC)
- #31 (Efficient Diffusion Policy Fine Tuning)
- #32 (Satisficing as competitive Bayesian weighting)
- #34 (Energy Measurement for TinyML)
- #39 (Transformers for teaching via symbolic distillation)
- #41 (KG-Neighbor - embedding visualization)
- #2 (IMUDINO - foundation model for inertial sensing)
- #8 (Certified NN for water waves)
- #15 (Asymptotic-Preserving Tensor Neural Networks)
- #40 (Goal Revelation - power measures)
- #28 (Encoding grammatical number)

**📊 Applications (domain-specific, multimodal, code generation):**
- #7 (FreePath - image dehazing)
- #10 (WeLM-Image - unified image generation)
- #16 (Acoustic anomaly detection)
- #30 (GNN for ISAC)
- #33 (Cancer prediction from EHR)
- #34 (TinyML energy optimization)
- #2 (IMUDINO - inertial sensing)
- #29 (Scenario augmentation for financial events)

The most compelling submissions center on foundation model development, inference optimization, and specialized applications. IMUDINO represents a significant advancement in self-supervised learning for inertial data, while Test-Time Self-Play and Recursive Sparse Attention demonstrate clever approaches to scaling language models at inference. Several papers tackle efficiency through quantization and sparse attention mechanisms, with CacheGraft and HyFlash showing particular promise. The application layer includes compelling work in medical imaging, signal processing, and multimodal understanding across different domains.
</think>


# ArXiv AI Research Digest — November 6, 2026

## 1. Today's Highlights

Today's submissions reveal three significant research vectors. First, **long-context inference efficiency** is a major focus, with recursive sparse attention achieving million-token extrapolation at logarithmic cost and TriAttention unifying sparsity and quantization for long-context LLM inference. Second, **agent cost and safety** are gaining traction—from automated environment optimization to systematic measurement of token waste and new defenses against prompt injection in tool-using agents. Third, **foundation models for specialized domains** continue to emerge, including the first inertial sensing foundation model (IMUDINO) and unified approaches to medical EHR prediction with explicit time-context modeling.

---

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Recursive Sparse Attention: Million-Token Length Extrapolation at Logarithmic Cost](http://arxiv.org/abs/2611.07232v1) | R Wang, X Yang, M Zhang et al. | Introduces recursive sparse attention that achieves O(log N) selection cost per query, enabling efficient million-token contexts. This addresses the critical memory and compute bottleneck limiting current LLM deployment to shorter contexts. |
| [TriAttention: Unified Sparse Mixed-Precision Attention for Long-Context LLM Inference](http://arxiv.org/abs/2611.07256v1) | H Zhang, Q Zhang, Q Cao et al. | Unifies sparsity and quantization by recognizing that useful attention interactions differ in precision requirements—some tolerate low-precision scores while remaining sensitive to removal. Provides a principled framework for mixed-precision attention optimization. |
| [Loopback Transformer: Towards a Unified View of Residual Looped Transformers](http://arxiv.org/abs/2611.07226v1) | X Ouyang, Z Cai, C Zhang et al. | Analyzes how repeated computation results are reused in looped transformers through a depth-memory view of residual connections. Clarifies the fundamental trade-offs between parameter sharing and representational capacity. |
| [Encoding and Propagation of Grammatical Number in Large Language Models](http://arxiv.org/abs/2611.07283v1) | J Solinsky, S Pakhomov et al. | Uses sparse autoencoders to translate LLM hidden states into interpretable features related to grammatical number, providing insight into internal "mental" grammar representations. Advances our understanding of how LLMs encode linguistic structure. |
| [Archetypal contexts in the neurons of language models: an architecture for intelligence?](http://arxiv.org/abs/2611.07234v1) | D Nordfors et al. | Validates the hypothesis that language models hold relational patterns (e.g., tipping points) separate from subject domains, suggesting a generalizable representational structure. Offers a new perspective on the architecture underlying model intelligence. |
| [Rethinking Data Selection: The Importance of Coverage over Difficulty in LLM Fine-Tuning](http://arxiv.org/abs/2611.07323v1) | L Pandia, K Misra, A Ettinger et al. | Demonstrates that coverage-based data selection outperforms difficulty-based approaches for LLM fine-tuning, challenging the prevailing intuition that harder examples are more informative. Provides empirical guidance for more efficient training data curation. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Test-Time Self-Play: Scaling without a Verifier](http://arxiv.org/abs/2611.07367v1) | A Yoshiyama, A Ashirmatov, J Hübotter et al. | Enables test-time scaling without relying on verifiers by using self-play for solution refinement, extending compute-at-deployment improvements to domains lacking ground-truth verifiers. |
| [How Do AI Agents Waste Your Money?](http://arxiv.org/abs/2611.07238v1) | H Zeng, Y Lu, J Cai et al. | Introduces a systematic methodology to identify and measure token waste in AI agent pipelines, revealing substantial inefficiencies in current agent task execution. |
| [EnvOpt: Automated Optimization for Agent Environments](http://arxiv.org/abs/2611.07372v1) | M Li, H Mao, Q Mang et al. | Proposes environment optimization as a third axis (alongside model and harness tuning) for improving agent performance and reducing costs, formalizing the rich environment design space. |
| [SPILLWAY: Separating Target Admission from Sanitization to Defend Tool-Using Agents against Prompt Injection](http://arxiv.org/abs/2611.07222v1) | W Lim, Y Chang, J Lee et al. | Defends tool-using agents by separating the decision of whether to execute an action from sanitization of its inputs, preventing instruction injection attacks embedded in web content or shared documents. |
| [How Should Agents See Code? Rethinking Code Representations for Agentic Software Engineering](http://arxiv.org/abs/2611.07286v1) | M Sepidband, J Shin, S Wang et al. | Investigates map-based code representation workflows as an alternative to raw file access, addressing how agents should perceive and interact with code repositories. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [IMUDINO: Self-distilled Foundation Model for Inertial Sensing](http://arxiv.org/abs/2611.07437v1) | Z Ye, C Zhang, Z Wang et al. | Presents the first foundation model for inertial sensing achieving competitive performance across HAR, health monitoring, motion capture, and odometry—addressing a major gap in sensor AI. |
| [CacheGraft: Enhancing Retrieval-Augmented Generation via Latent-Space Document Enrichment](http://arxiv.org/abs/2611.07393v1) | V Lakshman, P Chen, Z Gu et al. | Leverages cache-to-cache translation in latent space to enrich retrieved documents beyond text-only retrieval, improving RAG quality through direct KV cache manipulation. |
| [From What Is Used to What Is Missing: Rethinking Dynamic Rank in LoRA](http://arxiv.org/abs/2611.07349v1) | P Xue, G Fan, G Chen et al. | Characterizes whether the current LoRA adaptation space is sufficient for a task, moving beyond capacity allocation to address the fundamental question of adaptation space adequacy. |
| [Adversarial Multiplicity: Cherry-Picked Models and the Limits of Disclosure](http://arxiv.org/abs/2611.07378v1) | C Chou, B Huynh, A Koenecke et al. | Analyzes how predictive multiplicity—where equally accurate models disagree—can be exploited for fairness optimization, raising concerns about disclosure practices in model reporting. |
| [When Scores Conflict with Preferences: Pre-Alignment Diagnosis and Adaptive Correction of Constraint Drift in DPO](http://arxiv.org/abs/2611.07375v1) | P Liu, Y Yan et al. | Addresses failures when pairwise preferences conflict with pointwise criteria (length, safety scores) in DPO, proposing diagnostic and correction mechanisms for constraint drift. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [How Deep is the Signal? Time-Context up to 30 Years for Colorectal Cancer Prediction in a Primary-Care EHR Model](http://arxiv.org/abs/2611.07265v1) | A Raviez, L Wang, B Delaney et al. | Introduces "time-context" (calendar lookback window) as a more clinically meaningful metric than token context for EHR foundation models, demonstrating predictive signals extending decades. |
| [Scenario Augmentation for Rare Financial Events via Multimodal Latent Diffusion](http://arxiv.org/abs/2611.07282v1) | M Loodaricheh, A Raja, I SenGupta et al. | Uses multimodal latent diffusion to augment rare financial events for improved CVaR classification, addressing the fundamental data scarcity problem in extreme market modeling. |
| [Graph Neural Networks for Resource Allocation in Integrated Sensing and Communication](http://arxiv.org/abs/2611.07377v1) | J Liao, L Chen, T Han et al. | Applies GNNs to optimize power allocation in vehicular ISAC networks, balancing sensing and communication objectives under constrained power budgets. |
| [Two-stage residual learning for calibrated uncertainty in solar irradiance forecasts](http://arxiv.org/abs/2611.07444v1) | R Flanagan, E Kasha, P Talbot et al. | Combines point prediction with calibrated uncertainty estimation for solar irradiance forecasting at extended horizons, critical for renewable grid integration. |

---

## 3. Research Trend Signal

Today's submissions signal several emerging directions. **Agent economics** is maturing from demonstrations of capability to systematic cost analysis—the "waste" paper and EnvOpt framework suggest a shift toward treating agent resource consumption as a first-class optimization target. **Specialized foundation models** continue proliferating beyond language and vision into inertial sensing (IMUDINO), with implications for robotics and IoT deployment. **Inference-time compute** remains central, with multiple approaches to long-context efficiency (recursive sparse attention, TriAttention, HyFlash) indicating this is a critical bottleneck for real-world deployment. Finally, **interpretability for safety** appears in multiple forms—from analyzing grammatical encoding in LLMs to archetypal context representations—suggesting growing interest in understanding model internals beyond capability benchmarking.

---

## 4. Worth Deep Reading

1. **[Recursive Sparse Attention: Million-Token Length Extrapolation at Logarithmic Cost](http://arxiv.org/abs/2611.07232v1)** — This addresses the most pressing practical constraint on LLM deployment. The logarithmic complexity breakthrough could fundamentally change what's possible in long-document understanding and agent memory, making this essential for anyone working on LLM infrastructure.

2. **[IMUDINO: Self-distilled Foundation Model for Inertial Sensing](http://arxiv.org/abs/2611.07437v1)** — The first inertial sensing foundation model marks a significant milestone in sensor AI. Given the ubiquity of IMU sensors in smartphones, wearables, and robotics, understanding this architecture and training methodology is crucial for anyone building perception systems.

3. **[How Do AI Agents Waste Your Money?](http://arxiv.org/abs/2611.07238v1)** — As agent deployment scales, understanding and measuring token efficiency becomes commercially critical. This systematic framework for identifying waste provides a foundation for future agent optimization research.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*