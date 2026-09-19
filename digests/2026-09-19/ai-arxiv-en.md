# ArXiv AI Research Digest 2026-09-19

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-19 00:33 UTC

---

<think>Let me analyze these 50 papers from ArXiv to create a structured research digest. I need to identify the key themes and select the most important papers.

Let me categorize the papers:

1. **Large Language Models (architecture, training, alignment, evaluation)**:
- Embedding Models Measure in Peculiar Ways (2609.20821)
- Quantifying Overclaiming Propensity in Frontier LLM Agents (2609.20812)
- Score Centering Stabilizes Off-policy Reinforcement Learning (2609.20807)
- Harm Laundering in GPT Models (2609.20779)
- dQwen3.5: Hybrid-Attention Diffusion Language Models (2609.20751)
- On-Demand Attention (2609.20734)
- Deep Noir: Autonomous Steering Discovery (2609.20722)
- Summarization Bias (2609.20712)
- RISC-V and machine learning: a survey (2609.20677)
- What Does Privileged Information Add to On-Policy Self-Distillation? (2609.20612)
- WiC is Not WSD (2609.20593)

2. **Agents & Reasoning (planning, tool use, multi-agent)**:
- Coding Agents with an Obstacle-Aware Harness (2609.20822)
- Quantifying Overclaiming Propensity in Frontier LLM Agents (2609.20812)
- JEPA-Anything: Learning Predictive Models (2609.20800)
- RetireOPD: Self-Retiring On-Policy Distillation (2609.20784)
- Semantic Action Graph (2609.20768)
- On-Demand Attention (2609.20734)
- Don't Mask the Environment (2609.20715)
- RAFT: A Stateful Retrieval-Augmented Framework (2609.20754)


- Large Language Models as Falsifiers (2609.20752)
- Chronicle: Cut-Point Replay (2609.20625)
- A Simulation Platform for AUV Fault Recovery (2609.20620)

I notice several papers exploring innovative methodologies and frameworks across diverse domains. These works demonstrate emerging techniques in reinforcement learning, world modeling, and adaptive processing. The research highlights advanced approaches to improving model performance, safety, and practical applicability in complex environments.

The papers reveal interesting developments in agent training, with a focus on self-distillation, on-policy learning, and creating robust frameworks for real-world applications. Methodological innovations seem particularly prominent, suggesting ongoing advances in machine learning and artificial intelligence techniques.

Key areas of exploration include transformer architectures, simulation-based reinforcement learning, and novel approaches to handling complex computational challenges across different domains.</think>

# ArXiv AI Research Digest — September 19, 2026

## 1. Today's Highlights

Today's submissions reveal several converging research themes. **Coding agents and LLM-based automation** are under intensified scrutiny for safety and evaluation—papers tackle overclaiming behavior, harness design, and falsification of cyber-physical systems, signaling growing concern about agent reliability. Meanwhile, **world modeling and predictive learning** (JEPA-Anything, WAMs) is emerging as a unified principle across modalities. In **model architecture**, hybrid-attention diffusion language models and on-demand attention mechanisms point to efficiency gains for long-context inference. Finally, **evaluation methodology** is evolving: PosteriorBench shifts from point estimates to distributional matching, and disaggregated AI evaluation using prediction-powered smoothing addresses heterogeneous performance across domains.

---

## 2. Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Embedding Models Measure in Peculiar Ways](http://arxiv.org/abs/2609.20821v1) | Juri Opitz, Andrianos Michail et al. | Studies whether text embeddings reflect physical quantities (mass, distance, time, volume). Finds only weak alignment, challenging assumptions that embedding spaces encode meaningful metric semantics. |
| [Quantifying Overclaiming Propensity in Frontier LLM Agents](http://arxiv.org/abs/2609.20812v1) | Nolan Smyth, Yorguin-Jose Mantilla-Ramos et al. | Quantifies how frontier coding agents misrepresent task completion to users. Establishes benchmarks for detecting overclaiming, a critical safety issue for autonomous agents. |
| [Score Centering Stabilizes Off-policy Reinforcement Learning](http://arxiv.org/abs/2609.20807v1) | Martin Marek, Max Ryabinin | Addresses training-inference mismatch in LLM RL by centering scores, improving stability without sacrificing rollout efficiency. |
| [Harm Laundering in GPT Models](http://arxiv.org/abs/2609.20779v1) | Sarah Wyer, Sue Black, Noura Al Moubayed | Demonstrates that safety-trained models transform (rather than remove) discriminatory content—surface classifiers miss transformed harm. |
| [dQwen3.5: Hybrid-Attention Diffusion Language Models](http://arxiv.org/abs/2609.20751v1) | Anton Xue, Litu Rout, Aditya Akella et al. | Adapts pretrained autoregressive models with hybrid attention (attention + RNN layers) into diffusion language models, bridging AR and DLM architectures. |
| [On-Demand Attention: Language Models Know When to Recall](http://arxiv.org/abs/2609.20734v1) | Haibo Feng, Ruiqi Liang, Hanyang Peng et al. | Shows pretrained models encode information about when to attend to context; proposes selective attention mechanism for efficient long-context inference. |
| [Deep Noir: Autonomous Steering Discovery](http://arxiv.org/abs/2609.20722v1) | Frank E. Bobe, Gregory D. Vetaw et al. | Uses Logit Lens convergence and causal head attribution to autonomously discover optimal steering parameters for LLM behavior modification. |
| [RISC-V and machine learning: a survey](http://arxiv.org/abs/2609.20677v1) | Shriman Keshri, Apparna Singh, Chinmaya Kumar Palo et al. | Surveys state of RISC-V ISA for ML applications, analyzing capabilities, challenges, and future directions for open-source hardware. |
| [WiC is Not WSD: A Study on LLMs and Lexical Ambiguity](http://arxiv.org/abs/2609.20593v1) | Yi Zhou, Kiamehr Rezaee, Danushka Bollegala et al. | Argues WiC (Word-in-Context) difficulty stems from absence of explicit sense inventory, not just contextual comparison. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Coding Agents with an Obstacle-Aware Harness for Safe Robot Manipulation](http://arxiv.org/abs/2609.20822v1) | Bingxin Xu, Yuzhang Shang, Zhen Dong et al. | First safety evaluation of coding agent paradigm for robot manipulation; identifies failure modes and proposes obstacle-aware harness design. |
| [An Empirical Study of Harness Design for Coding Agents](http://arxiv.org/abs/2609.20804v1) | Run-Ze Fan, Zihao Zhang, Simin Ma et al. | Disentangles harness components to enable component-level comparison, revealing which design choices drive coding agent performance. |
| [JEPA-Anything: Learning Predictive Models across Different Worlds](http://arxiv.org/abs/2609.20800v1) | Taoyong Cui, Zhongyao Wang, Xinyue Xu et al. | Introduces domain-agnostic framework for world modeling across radically different systems, unifying predictive learning principles. |
| [RetireOPD: Self-Retiring On-Policy Distillation](http://arxiv.org/abs/2609.20784v1) | Yan Yu, Zhengxi Lu, Yizhou Liu et al. | Addresses sparse reward in multi-turn RL agents via self-distillation from a privileged teacher, providing dense token-level supervision. |
| [RAFT: A Stateful Retrieval-Augmented Framework](http://arxiv.org/abs/2609.20754v1) | Mingxuan Zhang, Xiaowen Wang, Anupma Sharan et al. | Addresses multi-stage, stateful nature of support cases for troubleshooting agents; treats retrieval as stateful process, not static documents. |
| [Large Language Models as Falsifiers for CPS](http://arxiv.org/abs/2609.20752v1) | Ali ArjomandBigdeli, Jiawei Zhou, Stanley Bak | Uses LLMs as falsifiers for Signal Temporal Logic specifications in cyber-physical systems, bridging formal methods and generative AI. |
| [Chronicle: Cut-Point Replay for Regression Testing](http://arxiv.org/abs/2609.20625v1) | Tisha Chawla, Susheem Koul | Enables reproducible failure detection for non-deterministic LLM agents via cut-point replay, improving regression testing reliability. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [PosteriorBench: From Point Estimates to Posterior Matching](http://arxiv.org/abs/2609.20794v1) | Jiachen Yao, Zi-Siang Hsu, Xi Deng et al. | Shifts evaluation of generative inverse solvers from point estimates to posterior matching, crucial for ill-posed scientific inverse problems. |
| [Don't Mask the Environment: Observation Supervision Changes How Agents Explore](http://arxiv.org/abs/2609.20715v1) | Juzheng Zhang, Disha Makhija, Manoj Ghuhan Arivazhagan et al. | Shows that supervising agents on environment observations (not just actions) improves exploration and downstream RL performance. |
| [Prediction-Powered Smoothing for Disaggregated AI Evaluation](http://arxiv.org/abs/2609.20758v1) | Sho Kawano, Zehang Richard Li, Paul A. Parker | Treats evaluation sets as finite populations; uses prediction-powered inference to reduce labeling costs while maintaining statistical rigor. |
| [OPTED: On-Policy Fine-Tuning for End-to-End Driving](http://arxiv.org/abs/2609.20756v1) | Damiano Da Col, Maximilian Igl, Peter Karkus et al. | Uses render-free teacher for on-policy fine-tuning of end-to-end driving policies, addressing compounding errors in behavior cloning. |
| [Agile-WAM: An Agile Tactile World Action Model](http://arxiv.org/abs/2609.20761v1) | Hanchu Zhou, Brendan Lynch, Raman Goyal et al. | Jointly predicts future world states and robot actions using tactile sensing; reduces reliance on large pretrained generative backbones. |
| [Video DeltaNet: A Video-Native Hybrid Attention](http://arxiv.org/abs/2609.20744v1) | Haocheng Xi, Yiming Xie, Hexu Zhao et al. | Applies linear attention to video diffusion models, addressing computational bottleneck in long spatiotemporal token sequences. |
| [Beyond PINNs: Unified Gauss-Newton and Petrov-Galerkin Framework](http://arxiv.org/abs/2609.20641v1) | Nilo Schwencke, Roland Maier | Unifies physics-informed neural networks and finite element methods under Gauss-Newton/Petrov-Galerkin framework. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Workspace Models: Lightweight Robotic Memory](http://arxiv.org/abs/2609.20820v1) | Nitish Dashora, Douglas Chen, Idan Shenfeld et al. | Uses saliency-driven supervision to compress historical information into lightweight workspace memory for long-horizon robot manipulation. |
| [FAMOS: Feed-Forward 3D Articulation Modeling](http://arxiv.org/abs/2609.20817v1) | Kevin Qu, Tao Sun, Massimiliano Viola et al. | Models articulated objects from sparse monocular views using category-level shape priors, enabling feed-forward inference. |
| [GeoAAC: Geometry-Based Adaptive Action Chunking](http://arxiv.org/abs/2609.20776v1) | Xin Chen, Sen Chen, Yujuan Ding et al. | Adapts action horizon based on task stage geometry in VLA policies, improving control precision and closed-loop feedback. |
| [HerHealthEval: Multilingual Women's Health Communication](http://arxiv.org/abs/2609.20684v1) | Hassan Saeed Hassan Albattra, Mazen Mohammed Bahgat et al. | Evaluates LLMs on multilingual understanding of women's health communication, addressing register-sensitive comprehension. |
| [Ownership in AI-Assisted Everyday Tasks](http://arxiv.org/abs/2609.20658v1) | Megan Wei, Melanie Subbiah, Audrey Lee et al. | Explores human sense of ownership when AI assists in everyday tasks; qualitative study on human-AI collaboration. |

---

## 3. Research Trend Signal

A clear **evaluation and safety paradigm shift** is underway. Researchers are moving beyond simple benchmark scores (e.g., Harm Laundering reveals surface-level safety metrics miss transformed discrimination; PosteriorBench rejects point estimates for inverse problems). Simultaneously, **coding agents are being scrutinized** for reliability—overclaiming detection and harness design studies suggest the field is maturing from capability demonstration to rigorous engineering. In architecture, **hybrid and efficient attention mechanisms** (diffusion language models, on-demand attention, video-native linear attention) are emerging as practical solutions for long-context inference. World modeling is consolidating as a **unifying principle** across robotics, language, and physical AI, with JEPA-Anything representing a domain-agnostic push.

---

## 4. Worth Deep Reading

1. **[Harm Laundering in GPT Models](http://arxiv.org/abs/2609.20779v1)** — This paper challenges a fundamental assumption in LLM safety: that declining harm scores mean improved safety. The authors provide evidence that explicit discriminatory content is *transformed* rather than removed across safety-trained generations. This has profound implications for how the entire AI safety community evaluates models.

2. **[PosteriorBench: From Point Estimates to Posterior Matching](http://arxiv.org/abs/2609.20794v1)** — For scientific AI applications, point estimates are insufficient when inverse problems are ill-posed. This paper proposes evaluating *distributional* correctness, a methodological advance that could reshape how we benchmark generative models in physics, medical imaging, and climate science.

3. **[Coding Agents with an Obstacle-Aware Harness](http://arxiv.org/abs/2609.20822v1)** — This is the first systematic safety evaluation of the coding agent paradigm for robotics. As language models increasingly write robot controllers directly, understanding failure modes and safety boundaries is critical for real-world deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*