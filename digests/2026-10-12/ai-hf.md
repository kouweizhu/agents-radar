# Hugging Face 热门模型周报 2026-10-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-12 01:40 UTC

---

<think>The user wants me to translate the Hugging Face Trending Models Digest from English to Chinese (Simplified Chinese - zh-CN). They've given me very specific rules about how to handle the translation. Let me go through and translate this while following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths in original form - don't translate them
5. Use natural technical Chinese (the register of a Chinese developer newsletter) - not literal word-for-word

Let me translate section by section:

**Date:** October 12, 2026 → 2026年10月12日

**Section 1: Today's Highlights**
The week sees **Qwen3.8-27B** family dominating the ecosystem with multiple fine-tuned variants flooding the trending charts—demonstrating strong community adoption. **Lightricks/LTX-2.5** continues its remarkable run as the most-liked model overall (7,322 likes), cementing image-to-video as a hot segment. Meanwhile, **DeepSeek-V4.1-Flash** and **facebook/sam3** show that specialized vision models remain highly relevant, with over 1.3M and 2M downloads respectively. The GGUF quantization trend persists aggressively, with 12+ quantized variants appearing in this week's top 30.

本周 **Qwen3.8-27B** 系列模型在生态系统中占据主导地位，多个微调变体大量涌入热门榜单，展现出强劲的社区采用率。**Lightricks/LTX-2.5** 延续其出色表现，成为本週最受关注的模型（共7,322个赞），巩固了图生视频这一热门赛道的地位。与此同时，**DeepSeek-V4.1-Flash** 和 **facebook/sam3** 表明专业视觉模型仍然高度相关，下载量分别超过130万和200万。

GGUF 量化趋势持续强劲，本週前30名中出现了12个以上的量化变体。 Chinese developers would describe the Qwen3.8-27B family as dominating the ecosystem, with its fine-tuned variants flooding the trending charts. This shows strong community adoption. The Lightricks/LTX-2.5 continues to perform remarkably, becoming the most-liked model with 7,322 likes, solidifying image-to-video as a hot segment. Meanwhile, DeepSeek-V4.1-Flash and facebook/sam3 demonstrate that specialized vision models remain highly relevant, with over 1.3 million and 2 million downloads respectively. The GGUF quantization trend continues aggressively, with 12+ quantized variants appearing in this week's top 30.

I need to translate this naturally in Chinese technical newsletter style, keeping URLs and other identifiers as-is in the output.</think>

# Hugging Face 热门模型周报

**日期：** 2026年10月12日

---

## 1. 本週重点

本周 **Qwen3.8-27B** 系列模型在生态系统中占据主导地位，多个微调变体大量涌入热门榜单，展现出强劲的社区采用率。**Lightricks/LTX-2.5** 延续其出色表现，成为本週最受关注的模型（共7,322个赞），巩固了图生视频这一热门赛道的地位。与此同时，**DeepSeek-V4.1-Flash** 和 **facebook/sam3** 表明专业视觉模型仍然高度相关，下载量分别超过130万和200万。GGUF 量化趋势持续强劲，本週前30名中出现了12个以上的量化变体。

---

## 2. 热门模型

### 🧠 语言模型（LLMs、对话模型、指令微调版）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,509 | 6,843,108 | 旗舰级270亿参数模型，具备强大的对话和图文理解能力；本週点赞和下载量均位居榜首。 |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 887 | 12,550 | 以推理为重点的 MoE 模型，支持 vLLM；凭借针对复杂推理任务的专门架构而备受关注。 |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 691 | 48,389 | 290亿参数模型，采用 GGUF 量化；因其高效部署能力而受到关注。 |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 322 | 108,900 | 针对工具调用和函数调用优化的模型，采用2位量化；面向需要结构化输出的开发者。 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,630 | 4,549,911 | 使用 llama.cpp 实现极端2位量化；因在保持可用性的同时实现高压缩比而备受关注。 |

### 🎨 多模态与生成（图、音、视频、文本生成）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,322 | 1,726,683 | 领先的图生视频扩散模型，支持文生视频和视频生视频；本週点赞数最高的模型。 |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,028 | 14,351 | 基于 Qwen3.5 的图文对话模型；凭借 Cloudflare 的边缘 AI 定位而备受关注。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,228 | 136,103 | 文生图生成模型，具备图像编辑能力；基于 Qwen 强大的多模态基础构建。 |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 543 | 4,702 | Qwen-Image-2.1 的快速变体，针对快速生成优化；使用 Diffusers 实现精简工作流。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,365 | 1,382,367 | Flash 优化的多模态模型，具备强大的文本和图像理解能力；展现 DeepSeek 的快速迭代节奏。 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,073 | 2,081,596 | SAM（分割一切模型）视频版本，用于生成掩码；庞大的下载量表明其已被广泛采用。 |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 756 | 22,123 | Cloudflare 图文模型的轻量版本；针对边缘部署优化。 |
| [FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism) | FrancisRing | 161 | 0 | 使用视频扩散 Transformer 的音视频联合生成模型；代表新兴的生成式视频能力。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,112 | 1,870,465 | 新一代 Flash 模型，增强对话能力；属于 Qwen 实验性的 Qwen4_exp 产品线。 |
| [nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 237 | 56,525 | 深度定制的推理变体，融合多种专门适配；展示了社区微调的创造力。 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 799 | 4,189,006 | Flash-Next 的量化版本，采用 GSQ 和 RCO 技术；庞大的下载量表明极高的社区关注度。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 2,153 | 1,489,676 | 类似的量化方法应用于基础版 Qwen3.8-27B；因其混合精度优化而备受关注。 |

### 🔧 专业模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,712 | 98,829 | Google 基于 Gemma2 架构的特征提取嵌入模型；在语义搜索方面表现强劲。 |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,493 | 44,088 | 文本分类模型，标注为 system-one 和 calibrated-decisions；因其超高的点赞与下载比而备受关注。 |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 336 | 16,434 | 端侧自动语音识别模型；面向隐私保护的边缘部署场景。 |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 357 | 18,079 | 土耳其语文本转语音模型，采用 EMA Lightning 架构；满足小众语言合成需求。 |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 255 | 59,274 | Google 嵌入模型的量化版本；实现更低内存占用的本地部署。 |

### 📦 微调与量化（社区微调版、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,026 | 6,488,262 | Unsloth 对 Qwen3.8-27B 的 GGUF 量化版本；本类别中下载量最高，且遥遥领先。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,989 | 2,188,658 | Qwen-Image-2.1 的无审查 GGUF 变体，用于图像生成；庞大的下载量表明需求旺盛。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,657 | 2,016,567 | 多层微调定制的无审查 GGUF 版本；面向不受限制的内容生成需求。 |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 324 | 100,530 | Qwen-Image-2.1 Turbo 的无审查量化版本；因其针对 atomic-chat 的特定适配而备受关注。 |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 760 | 614,193 | 去除审查的 Flash-Next GGUF 量化版；满足对更少限制的模型的需求。 |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,088 | 37,647 | 目标为自然文本生成的 Humanizer GGUF 变体；采用 gemma4_unified 架构。 |
| [speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 150 | 393 | 像素空间扩散文生图模型；虽下载量尚低，但代表着小众实验性方向。 |

---

## 3. 生态信号

**Qwen 主导地位：** Qwen3.8-27B 系列已成为社区生态的支柱，在前30名中出现了8个以上变体。这与2023-2024年 Llama 的地位相当，但迭代周期更快。ISTA-DASLab 的量化变体（GSQ-RCO）尤其值得关注——其组合下载量接近570万，表明对优化推理的强烈需求。

**量化成为标配：** GGUF 已成为社区分发的默认格式。像 **unsloth/Qwen3.8-27B-GGUF**（640万下载量）这样的模型表明，许多用户更看重可访问性而非原始性能。极限量化（Ternary-Bonsai 的三值/2位）的出现表明，社区正在突破压缩的边界。

**多模态爆发：** 在本週快照中，图文对话模型的数量已超过纯语言模型（12个 vs 5个）。视频生成（LTX-2.5）和视频理解（SAM3）正在获得强劲势头，下载量达数百万。

**开源权重势头正劲：** 本週热门模型全部为开源权重。闭源的 API 仅供模型在热门榜单中毫无存在感，进一步巩固了 Hugging Face 作为可访问、可审查 AI 中心的角色。

---

## 4. 值得关注

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 实至名归的最受关注模型：它代表了开源图生视频生成的最高水平。170万下载量和7,322个赞使其成为创意视频 AI 的标杆。值得研究其扩散架构和社区采用模式。

2. **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — 量化优化的典范。GSQ（分组缩放量化）和 RCO（残差通道优化）技术实现了罕见的组合：大幅压缩的同时将质量损失降到最低。單週420万的下载量非同寻常。

3. **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — 常被忽视但至关重要的基础设施。这款来自 Google 的嵌入模型以规模化生产级语义搜索能力提供支持。98,000次的下载量表明它正在幕后为数以千计的检索系统提供动力。Unsloth 的 GGUF 变体使端侧部署成为可能。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*