# Hugging Face 热门模型周报 2026-10-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-26 00:38 UTC

---

<think>The user wants me to translate the Hugging Face Trending Models Digest into Simplified Chinese, following the rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, code, project names, usernames, etc. verbatim
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, keeping the structure intact and using appropriate Chinese technical terminology.

Key terms to translate appropriately:
- "Trending Models Digest" → "热门模型周刊"
- "Language Models" → "语言模型"
- "Multimodal & Generation" → "多模态与生成"
- "Specialized Models" → "专业领域模型"
- "Fine-tunes & Quantizations" → "微调与量化"
- "Ecosystem Signal" → "生态信号"
- "Worth Exploring" → "值得探索"
- "Likes" → "点赞"
- "Downloads" → "下载"
- "Summary" → "摘要"
- "Author" → "作者"
- "Flash" → "Flash" (keep as is, common in Chinese)
- "GGUF" → "GGUF" (keep as is)
- "FP8" → "FP8" (keep as is)
- "MoE" → "MoE" (keep as is)
- "RAG" → "RAG" (keep as is)
- "OCR" → "OCR" (keep as is)

Let me translate this now, maintaining all the structure.</think>

# Hugging Face 热门模型周刊

**日期：** 2026-10-26

---

## 1. 今日亮点

本周生态持续向高性能多模态模型演进，Qwen 的 3.8-27B 变体在点赞数和下载量上均占据主导。视频生成领域增长迅猛——Lightricks 的 LTX-2.5 突破 200 万下载，反映出消费者和创作者的强劲需求。量化变体（GGUF、FP8）仍是重要趋势，DeepSeek 和 Qwen 骨架被多个社区量化团队适配。值得注意的是，OCR（indra-ocr）和时序预测（Timestral）等专业领域模型在小众场景中获得自然增长，不再局限于通用大模型。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 858 | 6,444 | 针对对话优化的文本生成模型，因其开源对话能力而受到关注。 |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 495 | 3,488 | 参数量 4B 的 LLM，目标高效文本生成；因紧凑的模型规模而引人注目。 |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 365 | 0 | 33B 参数的 Llama 系列模型；虽无下载记录但规模值得关注。 |
| [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 289 | 3,875 | 基于 Qwen3.5 MoE 的多模态模型；因其混合专家架构而受到关注。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,091 | 1,671,015 | 经过大量微调的 Qwen 变体，包含去审查和编码优化；海量下载反映出社区对无过滤、面向开发者 LLM 的强烈需求。 |
| [KRAFTON/Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview) | KRAFTON | 186 | 1,177 | 来自大型游戏工作室的紧凑文本生成模型；作为预览版本发布而值得关注。 |
| [ornith-ai/Ornith-1.5-122B](https://huggingface.co/ornith-ai/Ornith-1.5-122B) | ornith-ai | 177 | 48,477 | 122B 参数的 Qwen3.5 MoE 模型；因其大规模架构而热门。 |
| [HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 183 | 807 | 基于 Qwen3 的 DNA/文本生成模型；代表小众生物 LLM 的关注方向。 |

### 🎨 多模态与生成（图像、视频、音频、text-to-X）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 2,982 | 85,275 | Flash 版多模态模型，支持图像-文本到文本；因 DeepSeek 的快速迭代和强劲表现而热门。 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 1,603 | 660,874 | 基于 Flux 架构的图像到图像模型，专为 ComfyUI 设计；海量下载表明其在图像编辑工作流中的主导地位。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,335 | 2,107,108 | 图像到视频模型，支持文本到视频和视频到视频；本周点赞最高，下载量超过 200 万，反映出对 AI 视频的爆发式关注。 |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 727 | 10,757 | MOSS 项目的文本到图像模型；因开源开发方式而值得关注。 |
| [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 352 | 7,355 | MiniMax 的 Flash 版多模态模型，支持图像-文本任务；属于 MiniMax 不断增长的 VL 系列。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,394 | 7,762,014 | 本周下载和点赞最多的模型——旗舰级多模态 LLM，支持图像-文本到文本和对话能力；占据主导生态位。 |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,012 | 21,375 | 多说话人文本到语音模型；因高质量语音合成而热门。 |
| [lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss) | lodestones | 260 | 23,972 | 基于 MOSS 的文本到图像模型；作为替代图像生成器而获得关注。 |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 365 | 6,792 | DeepSeek V4.1 的去审查 FP8 量化变体；因内容策略灵活性而值得关注。 |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS-Team | 554 | 7,641 | MOSS 图像生成的基座模型；作为微调基础而服务。 |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 451 | 2,161,961 | ComfyUI 优化的 MOSS 图像模型；下载量超过 200 万表明强劲的社区采用。 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,108 | 1,849,059 | 用于视频分割的掩码生成模型；因其 SAM3 视频能力和 180 万+下载而热门。 |

### 🔧 专业领域模型（代码、数学、医学、embedding）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 367 | 9,765 | Mistral 的时序预测基础模型；作为主要实验室的首批专用时序模型之一而备受关注。 |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 425 | 4,636 | 基于 ONNX 的 CPU 推理 OCR 模型；作为轻量级专业提取工具而热门。 |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,921 | 212,769 | Google 的特征提取 embedding 模型；对检索和相似度搜索任务的强烈关注。 |
| [orcarouter/OrcaCyber-Nano-1.0](https://huggingface.co/orcarouter/OrcaCyber-Nano-1.0) | orcarouter | 254 | 30,330 | 用于网络安全和逆向工程的视觉语言模型；独特的小众应用方向。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,040 | 2,235,846 | GGUF 量化去审查版 Qwen 图像模型；下载量排名第二反映出对量化图像生成的巨大需求。 |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 280 | 412,392 | 采用 GSQ 和 RCO 技术的 GGUF 量化；因其混合精度优化而值得关注。 |
| [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 248 | 103,369 | Unsloth 的 GGUF 优化版 Flint；来自量化社区的强劲下载量。 |
| [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 216 | 7,293 | DeepSeek 的 abliterated GGUF 变体；吸引追求修改模型行为的用户。 |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 2,154 | 143,152 | 基于 Gemma4 Unified 的 GGUF 量化模型，具备图像-文本能力；因其类人化生成而热门。 |
| [Comfy-Org/Fibo-2.0](https://huggingface.co/Comfy-Org/Fibo-2.0) | Comfy-Org | 178 | 124,557 | ComfyUI 优化的 Fibo-2.0 模型；作为 ComfyUI 单文件扩散模型而值得关注。 |

---

## 3. 生态信号

2026年10月的格局揭示了几个趋同的趋势。**Qwen** 已崛起为主导骨架——其 3.8-27B 模型单周下载量超过 770 万，同时多个量化和微调变体占据量化类别顶部。这表明 Qwen 系列正在成为各类通用和专用应用的默认开源骨架。**多模态主导**不可否认：视频（LTX-2.5）、图像（Flux、MOSS）和图像-文本模型在热门榜上占据半壁江山。**量化即基础设施**：GGUF 变体现已覆盖图像生成、文本生成和视觉语言任务，热门量化模型的合计下载量超过 300 万。开源版本持续在参与度上超越闭源产品，社区微调（DavidAU、unsloth、abenzerps）贡献了可观的下载量。专业领域——OCR、时序预测、网络安全、生物 LLM——虽处于早期但呈现真实增长，表明生态系统正在超越通用文本模型走向成熟。

---

## 4. 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周旗舰模型。18K 点赞和 770 万下载代表了当前开源多模态 LLM 的顶尖水平。其庞大的生态系统意味着广泛的社区支持、海量的微调适配器和量化变体可供探索。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 参与度最高的生成模型。其图像到视频、文本到视频和视频到视频能力使其成为任何构建生成式媒体工作流的必备之选。200 万+的下载量表明其已达到生产就绪状态。

3. **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — 常被忽视但对检索增强生成（RAG）和相似度搜索至关重要。Google 的 embedding 模型为基于 embedding 的工作流提供了强大、高效的骨架——随着向量数据库和 RAG 系统成为 LLM 应用的标配，这一模型的价值尤为突出。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*