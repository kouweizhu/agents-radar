# Hugging Face 热门模型周报 2026-09-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-14 00:22 UTC

---

**今日亮点**  
Qwen 的 **Qwen3.8-27B** 在 Hugging Face 上持续领跑，下载量超 770 万，点赞数达 14.9K，稳居最受欢迎的开源多模态模型宝座。其生态正迎来量化与 Flash 优化变体的爆炸式增长，其中 unsloth 的 Qwen3.8-27B GGUF 量化版本下载量突破 1100 万，位居榜首。与此同时，Lightricks 的 **LTX-2.5** 和 MiniMaxAI 的 **MiniMax-H3** 正推动文本到视频生成的热潮，而 DeepSeek 的 **DeepSeek-V4.1-Flash** 与 Qwen 的 **Qwen3.8-Flash-Next** 则标志着行业整体向超高效率、高性能推理架构的全面转型。

---

**热门模型**

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,342 | 150,110 | 基于 Llama 架构的 20 亿参数紧凑型 LLM，专为边缘部署优化，具备出色的推理与指令遵循能力。因其高效性及在基准测试中媲美更大模型的表现而走红。 |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 1,038 | 3,552 | 基于 Qwen3.5 的 350 亿参数 MoE 模型，专为低延迟边缘推理设计。因其专为设备端 LLM 优化的混合专家架构而备受关注。 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,154 | 21,336 | 40 亿参数指令微调模型，代码与推理能力突出。以轻量级体积和在特定任务中媲美更大模型的性能著称。 |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 217 | 99,716 | MiniCPM5-2B 的 GGUF 量化版本，支持纯 CPU 推理。因开发者对便携、低资源 LLM 的强烈需求而下载量激增。 |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 433 | 30,310 | 专为网络安全任务微调的 GLM-5.3 变体，移除了拒绝响应机制。因其对安全漏洞的激进、无保留分析而迅速获得关注。 |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 1,737 | 7,979 | 基于 Qwen3.5 的 40 亿参数智能体 LLM，专为工具调用与序列决策优化。因其在紧凑模型中干净实现智能体工作流而人气攀升。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,971 | 7,768,964 | 标志性多模态 LLM，支持图像-文本到文本交互，对话流畅。凭借均衡性能、开源权重和详尽文档，稳居下载与点赞榜首。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,165 | 624,390 | Qwen3.8 的下一代 Flash 优化版本，在延迟降低 50% 的前提下接近完整模型质量。正成为实时多模态应用的新标准。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,741 | 1,548,442 | 基于扩散模型的文本到视频与图像到视频生成器，具备高时间连贯性。因其单文件扩散支持与易用性，成为最受欢迎的开源视频生成器之一。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,238 | 4,819,845 | 基于自有扩散管线构建的强大文本/图像到视频模型。尽管来自闭源公司，仍以电影级画质和开源发布成为视频模型中下载量冠军。 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 373 | 123,491 | MiniMax-H3 的社区发布变体，增强运动动态表现。因出色的风格化生成能力，深受视频创作者青睐。 |
| [Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 216 | 0 | 专精角色替换与动作迁移的视频到视频模型。虽点赞数高但下载为零，表明其引发病毒式关注，尚处早期采用阶段。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,930 | 252,928,721 | 轻量级句子嵌入的事实标准。仍是 Hugging Face 下载量最高的模型，广泛用于全球 RAG、聚类与语义搜索系统。 |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 774 | 797,832 | Google 最新时序预测模型，基于 Transformer 的时序推理。因在非规则数据上零样本预测精度高，受到金融科技与物流团队热捧。 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,302 | 46,513,338 | 基础 BERT 模型仍是 NLP 流水线的基石。其持久热度反映其作为无数下游任务基准的核心地位。 |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,435 | 7,325,282 | BERT 的蒸馏版本，速度提升 60%，精度损失极小。仍广泛用于生产环境的低延迟推理。 |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,502 | 21,331,361 | 经典视觉-语言嵌入模型。仍是零样本图像分类与跨模态检索的首选。 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 529 | 12,880 | Meta 的多语种语音识别模型，支持 1000+ 语言。在低资源语言项目中逐步获得小众关注。 |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 196 | 4,119 | 40 亿参数专用模型，专攻自动驾驶感知与运动规划。正成为汽车 AI 研究领域领先的开源模型。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 970 | 769,557 | 采用 GSQ（广义稀疏量化）与 RCO（递归上下文优化）的 Qwen3.8-27B GGUF 量化版。其 4 位精度表现媲美 8 位基线，实现多模态推理的内存效率突破，广受关注。 |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,009 | 11,005,880 | Hugging Face 上下载量最高的 GGUF 量化模型。基于 Unsloth 优化内核，可在 CPU 和低端设备上实现近原生 GPU 性能。凭借易用性与超快推理，主导量化领域。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 633 | 750,591 | Qwen3.8-27B 的高度专业化、无审查 GGUF 微调版，增强编码与创意写作能力。因其“异端”人设与极致开放性而走红，吸引大量挑战伦理边界开发者。 |

---

**生态信号**  
Qwen 系列已成为开源多模态模型的绝对领导者，其旗舰版、Flash 版与量化变体累计下载量突破 2000 万。这一统治地位得益于激进的优化（Flash、GGUF）与强大的社区支持——尤其是 unsloth 和 ISTA-DASLab，正将基础模型转化为生产级工具。开源权重模型在采用率上已明显超越闭源模型，甚至 MiniMaxAI 也主动开源高性能视频模型，表明行业战略正从排他性转向生态影响力。量化活动迅猛增长：GGUF 主导市场，Unsloth 工具链带来前所未有的效率提升。与此同时，“无审查”与“异端”微调正形成亚文化，反映出市场对绕过对齐约束模型的强烈需求——这一趋势或将引发政策辩论。Flash 架构（DeepSeek、Qwen）与 MoE 边缘模型（Edge0、NeoHorse）的崛起，标志着行业明确转向：每瓦性能与原始规模同等重要。

---

**值得探索**  
1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — Hugging Face 上下载量最高的量化模型。若在消费级硬件上运行多模态 LLM，这是速度、质量与部署便捷性的黄金标准。  
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 极少数支持单文件扩散的开源视频生成模型。适合希望在无需专有 API 的情况下获得高质量、可控视频输出的研究者与创作者。  
3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 面向 AI 工程师：该模型展示了 GSQ + RCO 等先进量化技术如何在 4 位精度下保留多模态推理能力——为下一代边缘 AI 提供了蓝图。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*