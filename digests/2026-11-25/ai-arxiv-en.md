# ArXiv AI Research Digest 2026-11-25

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-25 05:00 UTC

---

<think>The user wants me to create a structured ArXiv AI Research Digest based on the 50 papers provided from November 24, 2026. Let me analyze the papers and organize them according to the requested format.

Let me first categorize the papers by theme:

**🧠 Large Language Models (architecture, training, alignment, evaluation):**
- Paper 1: Linear attention recall capacity
- Paper 5: LLMs and advance-fee scams
- Paper 17: InstructReplay - preserving behavior during factual fine-tuning
- Paper 25: MXFP4 for LLM inference quantization
- Paper 27: Numeric leakage across linked LLM prompts
- Paper 31: Measurement artifacts in quantized SLM evaluations
- Paper 33: PtychoFM foundation model
- Paper 42: (Actually multi-robot, not LLM specific)
- Paper 44: Scaling laws of ensemble uncertainty
- Paper 48: Measuring layer-wise intrinsic dimensionality of FFNs

**🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought):**
- Paper 4: Zero-trust architecture for HPC AI agents
- Paper 9: ShellBench - AI agent evaluation
- Paper 19: Motion conditioned world modeling for embodied tracking
- Paper 23: Lazy agents with verifiable beliefs
- Paper 38: Distributionally robust multi-agent RL
- Paper 40: EPRO - robust policy optimization

**🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements):**
- Paper 2: Benchmarking evidence sufficiency in VLMs for driving
- Paper 3: Polynomial-time learning of random automata
- Paper 6: LoomKV - lossless KV cache compression
- Paper 7: PPO with distributional critics
- Paper 8: Online V-Learning with adaptive longitudinal data


- Paper 10: PHM-ensemble clustering
- Paper 11: Quantum kernels on breast data
- Paper 13: Cultural values in conversational AI
- Paper 14: Efficient video retrieval augmented generation
- Paper 15: Efficient generative verification
- Paper 16: Quantum error mitigation for Shor order finding
- Paper 18: SOARS - agentic search reranking
- Paper 20: Label leakage in mammography datasets
- Paper 21: Multi-view planted matching
- Paper 22: Joint detection of speech types
- Paper 24: Adaptive electromagnetic digital twins
- Paper 26: Weight scale rebalancing for transformers
- Paper 28: Tabra Blends for tabular models
- Paper 29: Skill vocabulary cost decomposition
- Paper 30: Path-probability gradients for force fields
- Paper 32: Field Life - particle life as chemical fields
- Paper 34: FORA for CT scan reporting
- Paper 35: Residual guidance for interactive video generation
- Paper 36: Data-driven reduced-order modeling
- Paper 37: E(n)-equivariant spherical decision surfaces
- Paper 39: Interactive neural computers
- Paper 41: Grammar-constrained decoding
- Paper 43: Sample-efficient in-context adaptation via sleep
- Paper 45: Prosody in neural audio codec Mimi
- Paper 46: Noise ceiling estimators for brain scores
- Paper 47: Simulator-as-proxy world model
- Paper 49: NABLA - noise-adaptive preconditioning algorithm
- Paper 50: C3H - compression-to-consensus criteria hijacking

Now identifying the most impactful papers to highlight. Paper 4 stands out for its zero-trust security architecture protecting AI agents in HPC environments. Paper 17 addresses critical challenges in fine-tuning instruction-following models while maintaining performance. Paper 6 offers practical KV cache compression solutions. Paper 1 explores fundamental attention mechanisms in transformers. Paper 44 examines uncertainty quantification in language models. Paper 25 provides efficient quantization techniques for inference. Papers 9 and 23 both tackle agent evaluation and reasoning capabilities from different angles. Paper 43 proposes innovative sleep-based in-context learning approaches. Paper 41 handles grammar-constrained decoding. These selections span security, training efficiency, architectural improvements, and practical deployment considerations.

For the structured summary, I need to emphasize how these papers collectively address the tension between capability and reliability—particularly around security vulnerabilities in deployed agents, the challenge of maintaining instruction-following during fine-tuning, and the need for better uncertainty quantification. The KV cache compression work and quantization techniques are particularly relevant for deployment at scale.
</think>


# ArXiv AI Research Digest

**November 25, 2026**

---

## 1. Today's Highlights

Today's submissions reveal intensified focus on **LLM reliability and security** across the stack—from fine-tuning preservation (InstructReplay) to inference-time quantification (scaling laws of ensemble uncertainty) and prompt-level leakage (numeric secrets across linked prompts). **AI agent evaluation** has emerged as a critical need with ShellBench providing real-world task benchmarks, while security research addresses the novel threat of hijacked authorized agents in HPC environments. Notably, **in-context adaptation via sleep-like mechanisms** challenges conventional fine-tuning paradigms, and **KV cache compression** (LoomKV) addresses practical serving bottlenecks. Cross-cutting themes include quantum error mitigation, distributional reinforcement learning for conservation, and cultural bias in conversational systems.

---

## 2. Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [InstructReplay: Replaying Assistant Turns to Preserve General Behavior During Factual Fine-Tuning](http://arxiv.org/abs/2611.32918v1) | Xiaofeng Shi, Qian Kou, Hua Zhou | Introduces replay-based fine-tuning method that preserves instruction-following, reasoning, and coding abilities when updating LLMs with new facts, addressing the 35-point average performance collapse in general capabilities. |
| [Scaling Laws of Ensemble Uncertainty in Language Models](http://arxiv.org/abs/2611.32801v1) | Siamak Ravanbakhsh, David Nitchi, Khang Ngo | Derives scaling laws for epistemic uncertainty estimation across ensemble members, arguing existing Bayesian methods fail to capture full epistemic uncertainty in LLMs. |
| [MXFP4 for LLM Inference: Complementary Post-Training Quantization Techniques](http://arxiv.org/abs/2611.32873v1) | Natalia Frumkin, Alireza Khodamoradi, Kristof Denolf et al. | Analyzes interactions between microscaling numerical formats (FP4) and complementary quantization techniques for LLM inference, enabling aggressive low-precision deployment. |
| [Eliciting the Recall Capacity of Linear Attention](http://arxiv.org/abs/2611.32969v1) | Johan Lindqvist, Antonio Orvieto | Quantifies the associative recall deficit in linear attention models through synthetic benchmarks and training interventions, providing insights into architectural trade-offs. |
| [Fresh Keys, Stale Secrets: Numeric Leakage across Linked LLM Prompts](http://arxiv.org/abs/2611.32864v1) | Jian Li, Qinglin Zhao, Shuoyao Wang et al. | Demonstrates that cloud LLM providers can infer confidential business data (prices, costs, margins) by analyzing patterns across a firm's prompt history. |
| [Measurement Artifacts in Trustworthiness Evaluations of Quantized Small Language Models](http://arxiv.org/abs/2611.32848v1) | Tanzeel Abbas, Tehseen Zia, David Windridge | Exposes instrument error biases in benchmark comparisons of quantized models that can mask or invert true performance differences. |
| [Measuring Layer-wise Intrinsic Dimensionality of FFNs in LLMs via PCA](http://arxiv.org/abs/2611.32782v1) | Daehee Kim | Uses PCA to reveal that FFN layers at different depths perform qualitatively distinct operations despite identical width, challenging uniform layer design assumptions. |

---

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ShellBench: What Matters More for AI Agents, Models, or Harness](http://arxiv.org/abs/2611.32946v1) | Vincent Koc, Aditya Washikar, Rishab Naveen Venkataraman et al. | Introduces 100 day-to-day tasks benchmark to evaluate which configuration factors (model choice, agent harness design) most impact general public AI agent effectiveness. |
| [Lazy Agents Answer Against Their Own Beliefs](http://arxiv.org/abs/2611.32884v1) | Richmond Sin Jing Xuan, Peilin Feng, Wenbin Wang et al. | Identifies "laziness" behavior where agents commit to answers before evidence accumulates, and proposes verifiable belief RL to align actions with stated uncertainty. |
| [Attestation is All You Need: Toward a Zero-Trust Architecture for HPC AI Agents](http://arxiv.org/abs/2611.32958v1) | Jie Li, Chenxu Niu, Tongyang Wang et al. | Proposes attestation-based security framework to prevent prompt injection and poisoning attacks on authorized AI agents in HPC environments. |
| [SOARS: System One Assisted Reranking for Agentic Search](http://arxiv.org/abs/2611.32917v1) | Amin Bigdeli, Liye Fu, Fattane Zarrinkalam et al. | Addresses latency/cost trade-offs in deep search agents by introducing lightweight reranking throughout iterative retrieval and reasoning pipelines. |
| [EPRO: Robust Policy Optimization Through an Imperfect Execution-Policy Predictor](http://arxiv.org/abs/2611.32810v1) | Yibo Wang, Changyi Yang, Yuanxin Liu et al. | Tackles rollout-training policy mismatch in RL for LLMs by predicting execution policies during learner updates, improving robustness. |
| [Breaking the Joint Action Space Dependence in Distributionally Robust Multi-Agent RL](http://arxiv.org/abs/2611.32812v1) | Yue Wang | Derives sample complexity bounds for learning robust coarse correlated equilibria in distributionally robust Markov games with general-sum structure. |

---

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [LoomKV: Lossless KV Cache Compression from GPU Memory to SSD](http://arxiv.org/abs/2611.32954v1) | Wentao Zhu, Ziao Sheng, Peng Deng et al. | Achieves lossless KV cache compression for multi-turn and agent serving, enabling GPU-to-SSD offloading with minimal prefix reuse degradation. |
| [Sample-Efficient In-Context Adaptation via Sleep](http://arxiv.org/abs/2611.32802v1) | Sangyun Lee, Zhang Enyan, Michael Xu et al. | Demonstrates sleep-like consolidation mechanism for in-context learning, enabling models to generalize from few-shot examples more efficiently. |
| [From Grammar Deltas to Token Masks: Incremental Constrained Decoding](http://arxiv.org/abs/2611.32807v1) | Hantao Hua, Jiming Su, Yonggang Che et al. | Enables grammar-constrained decoding under runtime grammar evolution, critical for code and DSL generation where constraints emerge progressively. |
| [Weight Scale Rebalancing: Transferable Training Recipes for Transformers](http://arxiv.org/abs/2611.32866v1) | Yikun Hou, Naomi Graham, Alp Yurtsever | Introduces UDVR reparameterization with auxiliary diagonal matrices between paired weight matrices, reducing hyperparameter sensitivity across model scales. |
| [NABLA: A Noise-Adaptive Blockwise Left-Right Preconditioning Algorithm](http://arxiv.org/abs/2611.32781v1) | Yanlin Li, Ganzhao Yuan | Combines exponential moving averages with block-diagonal preconditioning for improved convergence in nonconvex stochastic optimization. |
| [Benchmarking Evidence Sufficiency in Vision-Language Models for Autonomous Driving](http://arxiv.org/abs/2611.32964v1) | Nhat Ha Nguyen, Sudipta Chowdhury, Lokesh Das | Evaluates whether driving VLMs can determine when visual evidence is insufficient for confident answers, beyond mere accuracy measurement. |
| [Do Vision-Language Models Know Their Own Visual Weaknesses?](http://arxiv.org/abs/2611.32940v1) | Dohoon Kim, Taesup Moon | Tests VLMs' metacognition about their own task-level and image-condition difficulties, revealing capability-level self-awareness gaps. |

---

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Reliable and grounded reporting of any computed tomography scan with FORA](http://arxiv.org/abs/2611.32823v1) | Sezgin Er, Utku Turkbey, Alperen Gur et al. | Presents general-purpose CT interpretation model providing comprehensive, spatially grounded diagnoses across anatomical regions and examination types. |
| [One Style Fits All? Cultural Values Embedded in Conversational AI](http://arxiv.org/abs/2611.32939v1) | Yi-Jun Chen, I-Tsen Hsieh, Li-Wun Chang | Analyzes how deployed LLMs reflect or reinforce culture-specific social expectations and interactional norms from training data. |
| [Residual Guidance for Real-Time Interactive Video Generation](http://arxiv.org/abs/2611.32820v1) | NaHyeon Park, Kyeong-Hwan Moon, Youjin Jeon et al. | Addresses "context inertia" failure in streaming video generation when users change prompts mid-generation. |
| [Simulator-as-Proxy World Model for Robot Manipulation](http://arxiv.org/abs/2611.32786v1) | Tingting Liao, Mingjia Huo, Hao Li et al. | Tests and validates assumption that video world models accurately reflect simulated scene proxies for robot manipulation planning. |
| [C3H: Compression-to-Consensus Criteria Hijacking in Multimodal LLM Recommender Systems](http://arxiv.org/abs/2611.32780v1) | Guowei Guan, Yurong Hao, Jiaming Zhang et al. | Exposes adversarial attacks where compression mechanisms can be manipulated to hijack recommendation consensus in multimodal LLM systems. |

---

## 3. Research Trend Signal

Three interconnected trends emerge from today's submissions:

**Agent Reliability Stack**: A concerted research push addresses the full agent reliability stack—from ShellBench evaluation harnesses to attestation security (Zero-Trust HPC), verifiable-belief training objectives, and execution-policy mismatch corrections. This suggests the field is maturing beyond single-component improvements toward holistic agent systems.

**LLM Deployment Security & Privacy**: Multiple papers expose novel attack surfaces: numeric leakage across prompt histories, compression-based consensus hijacking, and measurement artifacts masking quantized model deficiencies. This indicates growing concern about deploying LLMs in adversarial or confidential settings.

**In-Context and Parameter-Efficient Adaptation**: The "sleep" mechanism for in-context learning and grammar-delta decoding both challenge the "always fine-tune" paradigm, suggesting future models will dynamically incorporate information without weight changes. Combined with LoomKV's memory efficiency work, practical deployment constraints are driving fundamental method innovation.

---

## 4. Worth Deep Reading

1. **[ShellBench: What Matters More for AI Agents, Models, or Harness](http://arxiv.org/abs/2611.32946v1)** — Essential for anyone building AI agent systems. The paper systematically disentangles which factors (model choice vs. harness design) drive real-world agent performance, providing actionable guidance for practitioners and exposing critical evaluation gaps.

2. **[InstructReplay: Replaying Assistant Turns to Preserve General Behavior During Factual Fine-Tuning](http://arxiv.org/abs/2611.32918v1)** — The 35-point collapse in general capabilities during factual fine-tuning is a critical bottleneck for production LLM deployment. The replay mechanism offers a practical solution with theoretical grounding—this directly impacts anyone maintaining knowledge-updated models.

3. **[Attestation is All You Need: Toward a Zero-Trust Architecture for HPC AI Agents](http://arxiv.org/abs/2611.32958v1)** — As AI agents increasingly automate HPC workflows, the hijacked-authorized-agent threat vector is largely unaddressed. This paper provides both threat analysis and a concrete architectural solution, making it essential for HPC and scientific computing infrastructure teams.

---

*Generated from 50 papers across cs.AI, cs.CL, and cs.LG | ArXiv | November 25, 2026*

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*