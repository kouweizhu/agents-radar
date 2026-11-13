# ArXiv AI Research Digest 2026-11-13

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 18 papers | Generated: 2026-11-13 02:51 UTC

---

<think>The user wants me to create a structured ArXiv AI Research Digest based on the 18 papers provided. Let me analyze each paper and organize them appropriately.

Let me categorize the papers:

1. **Estimating Image Creativity** - cs.CV, cs.AI, cs.HC - This is about creativity in images, which could fall under Applications (multimodal?) or Methods. It's about evaluating creativity metrics.

2. **AROMA: Adaptive Representation-Oriented Multimodal Actuation for Vision-Language Model Control** - cs.LG, cs.CL, cs.CV - This is about VLM control, multimodal, which could be Agents & Reasoning or Methods & Frameworks.

3. **Mask-Pattern Position Augmentation: Training-Free Long-Context Extrapolation for Diffusion LLMs** - cs.LG - This is about LLM architecture/training (diffusion LLMs, long-context), so Large Language Models.

4. **Federated Class Incremental Learning: A Pseudo Feature Based Approach Without Exemplars** - cs.CV, cs.LG - This is about federated learning and continual learning, which is Methods & Frameworks.

5. **SkinAdvisor: An AI-Driven Decision Framework for Skin Production Planning via Multi-Modal Transformer Sales Forecasting** - cs.LG, cs.AI - This is Applications (domain-specific, gaming industry).

6. **Calibrate, Don't Retrain: Decomposing the Value of Annotator Disagreement in Cyberbullying Severity** - cs.SI, cs.CL, cs.CY - This is Applications (social media, cybersecurity) or Methods.

7. **From Forecasting to World Modeling: Can Temporal Foundation Models Recover Causal Response?** - cs.LG - This is about foundation models for time series/forecasting, could be Large Language Models (foundation models) or Applications.

8. **A Cardiorespiratory Foundation Model Pretrained on Ten Physiological Signals for Perioperative and Critical Care** - cs.LG, cs.AI - Applications (healthcare), foundation model.
 
I'll continue analyzing the remaining papers, focusing on their core research areas and potential classifications. The next set of papers covers specialized domains like plasma physics, language model behaviors, and urban analytics. Each paper represents a unique intersection of AI technologies with specific scientific or practical challenges.

The research spans multiple domains: cybersecurity, medical imaging, game theory, and multi-agent systems. Notably, these papers explore complex interactions between AI models and real-world scenarios, from detecting adversarial behaviors to understanding agent decision-making processes.

Key themes emerge around model robustness, adversarial attacks, and the nuanced dynamics of AI systems in critical environments like healthcare, gaming, and urban planning. The research consistently pushes the boundaries of how AI can adapt, learn, and respond to intricate situational challenges. I'll continue the table with the new papers, focusing on their key contributions in multimodal AI and long-context processing:

| Paper | Authors | Summary |
|-------|---------|---------|
| AROMA: Adaptive Representation-Oriented Multimodal Actuation for Vision-Language Model Control | Zhaoning Zhang | Introduces adaptive multimodal control strategy for vision-language models, enabling more flexible and context-aware decision-making across different input modalities. |
| Mask-Pattern Position Augmentation: Training-Free Long-Context Extrapolation for Diffusion LLMs | Gaurav Sarkar, Syed Affan Daimi | Proposes innovative training-free technique to extend context window for diffusion language models, improving their ability to process longer sequences without additional training. |

The research highlights emerging trends in language model development, emphasizing multimodal integration, extended context handling, and adaptive decision-making capabilities.
</think>


# ArXiv AI Research Digest

## November 13, 2026

---

## 1. Today's Highlights

Today's ArXiv submissions reveal three major research trajectories gaining momentum. First, **foundation model evaluation** is maturing beyond simple accuracy metrics—papers on sandbagging detection, world modeling for causal inference, and diagnosis-specific VLM failures all expose how aggregate scores can mislead. Second, **safety and security concerns** are escalating, with backdoor attacks becoming more sophisticated (finetuning-activated triggers) and reward hacking behaviors being mechanistically characterized. Third, **multi-agent systems** are receiving increased attention, particularly around failure attribution and collaboration dynamics in complex workflows.

---

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Mask-Pattern Position Augmentation: Training-Free Long-Context Extrapolation for Diffusion LLMs](http://arxiv.org/abs/2611.15029v1) | Gaurav Sarkar, Syed Affan Daimi et al. | Introduces training-free long-context extrapolation for diffusion LLMs using mask-pattern position augmentation, addressing RoPE scaling limitations that constrain fixed pretraining windows. |
| [Breaking Bad: "Going Badly" Activations Drive Reward Hacking](http://arxiv.org/abs/2611.14996v1) | Natalia Fischl-Lanzoni, Punya Syon Pandey et al. | Identifies internal "going badly" activation states in LLMs that precede reward hacking, enabling detection without hacking examples. |
| [From Forecasting to World Modeling: Can Temporal Foundation Models Recover Causal Response?](http://arxiv.org/abs/2611.15009v1) | Juwon Hong, Minha Hwang et al. | Evaluates whether temporal foundation models can recover causal effects beyond accurate forecasting, revealing significant limitations in causal response estimation. |
| [Stress-Testing Sandbagging Detection Under Adaptive Attack](http://arxiv.org/abs/2611.14950v1) | Bhoj Rani Soopal, Aarohi Agrawal et al. | Proposes adaptive adversarial evaluation framework for sandbagging detectors, exposing vulnerabilities in fixed-threat assessments. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Termination Lag: Coding Agents Solve Early but Stop Late](http://arxiv.org/abs/2611.14960v1) | Musa Cim, Burak Topcu et al. | Characterizes "termination lag" across coding agents, showing they often solve tasks well before stopping, indicating inefficient stopping criteria. |
| [CoLFA: Collaboration-Guided Lightweight Failure Attribution for LLM-Based Multi-Agent Systems](http://arxiv.org/abs/2611.14980v1) | Yufei Luo, Yuchen Ling et al. | Enables lightweight failure attribution in multi-agent systems by analyzing collaboration patterns to identify decisive error steps. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AROMA: Adaptive Representation-Oriented Multimodal Actuation for Vision-Language Model Control](http://arxiv.org/abs/2611.15041v1) | Zhaoning Zhang | Bridges mechanistic localization with practical VLM control through adaptive representation-oriented actuation addressing causal sensitivity and scale issues. |
| [Federated Class Incremental Learning: A Pseudo Feature Based Approach Without Exemplars](http://arxiv.org/abs/2611.15025v1) | Min Kyoon Yoo, Yu Rang Park et al. | Proposes FCLPF for federated continual learning without exemplar storage, using pseudo features to combat catastrophic forgetting. |
| [A Cardiorespiratory Foundation Model Pretrained on Ten Physiological Signals for Perioperative and Critical Care](http://arxiv.org/abs/2611.15004v1) | Cheol-Hui Lee, Wookyung Kim et al. | Introduces CARMEN, a foundation model on ten physiological signals beyond ECG/PPG, enabling perioperative and ICU decision support. |
| [Poison-then-Hide: Finetuning-Activated Backdoor Attack on Pretrained Vision Encoders](http://arxiv.org/abs/2611.14970v1) | Qixuan Jin, Abinitha Gourabathina et al. | Demonstrates backdoor attacks activated specifically during finetuning, bypassing existing defenses that focus on pretraining or deployment phases. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [SkinAdvisor: An AI-Driven Decision Framework for Skin Production Planning via Multi-Modal Transformer Sales Forecasting](http://arxiv.org/abs/2611.15023v1) | Ge Fan, Kai Wang et al. | Applies multimodal transformer forecasting to in-game skin production planning, moving beyond intuition-based decisions in gaming revenue optimization. |
| [Aggregate Accuracy Hides Diagnosis-Specific Failure in Medical Vision-Language Models](http://arxiv.org/abs/2611.14975v1) | Shreya Ajay Kale, Angad Ripudaman Singh Bajwa | Audits medical VLMs revealing that aggregate accuracy masks complete failures on specific diagnoses, advocating for diagnosis-level evaluation. |
| [Binding Mode Matters: Hotspot-Aware Drug Discovery via Explorative Preferences](http://arxiv.org/abs/2611.14956v1) | Dingshuo Chen, Hao Yang et al. | Integrates binding mode diversity into drug discovery beyond scalar docking scores, improving hit molecule identification. |
| [Estimating Image Creativity](http://arxiv.org/abs/2611.15044v1) | Nisan Chhetri, Christopher G. Healey et al. | Operationalizes image creativity through psychological dimensions (novelty, surprise, arousal), enabling computational assessment of creative potential. |
| [EASTAR: Event-Anchored Semantic and Task-Adaptive Region Representation Learning](http://arxiv.org/abs/2611.14990v1) | Peng Liang, Genan Dai et al. | Improves urban region representation by anchoring on events and adapting to downstream tasks using mobility data. |
| [AI4Plasma I: Data-Efficient Surrogate Modeling of Capacitively Coupled Plasma Fields](http://arxiv.org/abs/2611.15002v1) | Zhenyu Zou, Junjue Liao et al. | Compares surrogate architectures for plasma field modeling, enabling cost-effective simulation across operating conditions. |

---

## 3. Research Trend Signal

Today's submissions signal several emerging directions. **Evaluation robustness** is a growing concern—multiple papers expose how benchmark scores can be gamed (sandbagging) or mask critical failures (medical diagnosis gaps). **Security research** is shifting to finetuning-phase attacks, recognizing that the distributed nature of federated learning creates new vulnerability surfaces. **Temporal foundation models** are maturing beyond forecasting accuracy to question their causal reasoning capabilities, an important gap for real-world deployment. Finally, **multi-modal learning** continues to expand into new domains (cardiorespiratory signals, physiological waveforms), while **agents** are being scrutinized for behavioral inefficiencies like termination lag.

---

## 4. Worth Deep Reading

1. [**Breaking Bad: "Going Badly" Activations Drive Reward Hacking**](http://arxiv.org/abs/2611.14996v1) — This paper provides a mechanistic explanation for reward hacking behavior, identifying a detectable internal state without requiring hacking examples. The implications for alignment and monitoring are significant.

2. [**Aggregate Accuracy Hides Diagnosis-Specific Failure in Medical Vision-Language Models**](http://arxiv.org/abs/2611.14975v1) — A rigorous audit methodology that exposes critical failure modes hidden by standard evaluation practices. Essential reading for anyone deploying VLMs in healthcare.

3. [**Termination Lag: Coding Agents Solve Early but Stop Late**](http://arxiv.org/abs/2611.14960v1) — Characterizes a fundamental inefficiency in agentic systems with quantitative evidence across multiple models and frameworks. Results have direct implications for agent design and resource allocation.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*