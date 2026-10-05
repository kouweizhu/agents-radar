# Hugging Face 热门模型周报 2026-10-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-05 01:11 UTC

---

<think>The user wants me to translate the Hugging Face Trending Models Digest into Chinese, following specific translation rules. Let me analyze the content and translate it while preserving the structure and using natural technical Chinese.

Key points:
1. Output ONLY the translation, no preamble or explanation
2. Preserve Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, project names, repository slugs, usernames, etc. in original form
4. Use natural technical Chinese register

Let me translate the content:

## Today's Highlights
The week sees... - 本周...

"Qwen3.8" variants dominating - Qwen3.8 变体
"Lightricks/LTX-2.5" - 保持英文
"DeepSeek-V4.1-Flash" - 保持英文
"quantization" - 量化
"GGUF" - 保持
"fine-tunes" - 微调版本

Let me go through section by section:

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
Language Models - 语言模型
chat models - 聊天模型
instruction-tuned - 指令微调

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
Multimodal & Generation - 多模态与生成
image, video, audio, text-to-X - 图像、视频、音频、文本到X

### 🔧 Specialized Models (code, math, medical, embeddings)
Specialized Models - 专业模型
code, math, medical, embeddings - 代码、数学、医学、嵌入

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
Fine-tunes & Quantizations - 微调与量化
community fine-tunes - 社区微调

Let me translate the full content now:</think>

# Hugging Face 热门模型周报

## 本周要闻

本周 **Qwen3.8** 变体在生态系统中占据主导地位，热榜前 30 名中有多达 8 个量化或微调衍生模型。**Lightricks/LTX-2.5** 凭借 160 万下载量延续视频生成的增长势头，而 **DeepSeek-V4.1-Flash** 则成为多模态领域的有力竞争者。量化活动火爆异常——GGUF 变体占据近三分之一的热门模型，反映出社区对高效部署的强烈需求。基础模型市场正加速向专业垂直领域分化，涌现出大量针对编码、网络安全、图像编辑等场景的微调版本。

---

## 热门模型

### 🧠 语言模型（LLM、聊天模型、指令微调模型）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,940 | 6,821,761 | 旗舰级多模态 Qwen 模型，支持图像-文本-文本转换；本周点赞数和下载量双料冠军。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,094 | 798,422 | DeepSeek V4.1 多模态模型的高效快速版本；以强大的推理能力与速度平衡获得关注。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,896 | 1,480,842 | Qwen 新一代 Flash 变体；针对延迟敏感的聊天应用进行优化，速度接近 Flash 级别。 |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 394 | 1,135 | Aleph-Alpha 的 MoE 推理模型；采用混合专家架构，专注于高效推理能力。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,422 | 2,164,143 | 基于 Qwen3.8 深度微调的衍生模型，面向无审查限制的编码和"Cold Fusion"风格生成；人气爆棚，下载量达 210 万。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,312 | 1,626,951 | 领先的图像转视频和文本转视频模型；以 160 万下载量在视频生成领域独占鳌头。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,948 | 90,003 | Qwen 的文本转图像基础模型；为众多下游微调和 GGUF 变体提供底层能力。 |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 588 | 272,896 | Qwen-Image-2.1 的 Turbo 调优版本，配备 LoRA 增强；因快速图像生成工作流而广受欢迎。 |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,211 | 4,214 | Cloudflare 基于 Qwen3.5 架构的图像-文本-文本模型；以边缘部署优化著称。 |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 427 | 6,372 | Clef 的轻量 Flash 变体；针对边缘推理的低延迟场景进行优化。 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,859 | 12,638 | 专注于空间推理的多模态视觉语言模型；面向机器人和空间智能应用。 |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,180 | 203,086 | 基于 Qwen-Image-2.1 + LoRA 的人脸交换流水线；在创意图像编辑社区中应用广泛。 |
| [akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA) | akatz-ai | 291 | 15,800 | MiniMax-H3 视频模型的角色交换 LoRA；面向视频编辑和角色动画工作流。 |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 185 | 5,742 | MiniMax-H3 图像转视频的首尾帧 LoRA；实现 360 度环绕视频生成。 |
| [lilylilith/QI_2.1_AnyAngle](https://huggingface.co/lilylilith/QI_2.1_AnyAngle) | lilylilith | 126 | 0 | Qwen-Image 2.1 任意角度图像变换 LoRA；面向图像到图像编辑用例。 |

---

### 🔧 专业模型（代码、数学、医学、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,163 | 3,752 | 带校准输出的文本分类模型；面向高风险分类管道。 |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 402 | 1,516 | VisionHOPE 项目的图像分类模型；基于创新的计算机视觉架构。 |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 715 | 3,445 | 用于文本排序和重排序的对比学习模型；在检索管道中兼作验证器和重排序器。 |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 672 | 53,014 | NVIDIA NeMo 的语音活动检测和说话人分离模型；会议转录管道的常用方案。 |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 415 | 3,657 | 多语言文本分类决策模型；面向复杂决策自动化。 |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 202 | 2,635 | 针对 Apple Silicon 优化的 ASR 模型（Parakeet TDT Five），通过 MLX 加速；面向端侧语音识别。 |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 366 | 53,625 | GLiNER 2.5 变体，支持 token 分类、意图分类和抽取任务；轻量级 NER 解决方案。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,959 | 1,636,747 | Qwen3.8 27B 的 GSQ+RCO 量化版本；代表混合精度量化的前沿水平，下载量达 160 万。 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 556 | 1,886,975 | Flash-Next 变体的 GSQ+RCO 量化版本；本周量化模型中下载量最高。 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 260 | 351,230 | 针对编码场景优化的量化变体；在消费级硬件上实现高效代码生成。 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,416 | 4,045,810 | 27B 模型的革命性 2 位（三进制）量化；极致压缩，下载量突破 400 万。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,142 | 1,553,744 | Qwen-Image-2.1 的无审查 GGUF 量化版本；图像生成领域人气爆棚，下载量 150 万。 |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 281 | 14,361 | Xing 4.0 29B 量化至 4B 参数；面向高效大规模文本生成。 |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 361 | 14,195 | 基于 Qwen3.8 的网络安全主题无审查 GGUF；面向安全研究和红队用例。 |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 213 | 946 | GLM-5.3 的 EXL3 量化，3.0bpw；热榜中罕见的非 Qwen 量化模型。 |

---

## 生态信号

**Qwen 家族**已成为开源权重生态的事实标准——30 个热门模型中有 8 个衍生自 Qwen3.8 或 Qwen-Image-2.1，涵盖语言、图像生成和量化领域。**量化是最主要的交付方式**：GGUF 变体占据 9 个席位，ISTA-DASLab 的 GSQ-RCO 流水线已成为混合精度量化的行业标杆。**三进制量化**（prism-ml/Ternary-Bonsai-2-27B）标志着极限压缩进入新前沿，在保持惊人质量的同时将 27B 模型压缩至 2 位权重，下载量超 400 万。与此同时，**视频生成**（Lightricks/LTX-2.5）和**多模态聊天**（DeepSeek-V4.1-Flash）代表了文本模型之外增长最快的能力层。生态持续围绕专业垂直领域分化，大量针对编码和图像生成的无审查微调版本涌现，反映出社区对减少内容限制的强烈需求。

---

## 值得探索

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 本周下载量最高的模型（400 万+）。其 2 位三进制量化是一项技术突破：将 27B 模型压缩至约 7GB，同时保持出乎意料的质量。对模型压缩前沿感兴趣的话值得研究。

2. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 生态中最复杂的量化流水线（GSQ + RCO 混合精度）。展示了量化正在成为一门科学，而非仅仅是一种 tricks——任何构建高效推理系统的人都值得研究。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Hugging Face 上开源视频生成的绝对领导者，下载量 160 万。随着视频生成技术快速成熟，LTX-2.5 代表了文本转视频和图像转视频的当前最佳水平。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*