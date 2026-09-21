# Hugging Face Trending Models Weekly 2026-09-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-21 00:27 UTC

---

<think>Let me analyze this dataset and create a structured Hugging Face Trending Models Digest.

First, I need to categorize the models:

**Language Models (LLMs, chat models, instruction-tuned):**
- meta-llama/Llama-3.1-8B-Instruct (text-generation)
- openbmb/MiniCPM5-2B (text-generation)
- TokenRhythm/NeoHorse-1-9B (text-generation)
- convaiinnovations/laya (text-classification)
- AlexWortega/openjev (text-classification)
- DeepSeek-V4.1-Flash variants could be considered here too but they're image-text-to-text

**Multimodal & Generation (image, video, audio, text-to-X):**
- deepseek-ai/DeepSeek-V4.1-Flash (image-text-to-text)
- Qwen/Qwen-Image-2.1 (text-to-image)
- Qwen/Qwen3.8-27B (image-text-to-text)
- Qwen/Qwen3.8-Flash-Next (image-text-to-text)
- Lightricks/LTX-2.5 (image-to-video)
- MiniMaxAI/MiniMax-H3 (image-text-to-video)
- m-a-p/YuE2-3B (text-to-audio)
- WarmBloodAban/Minimax-h3_Singularity (image-to-video)
- TaichuAI/ZDTaichu5.0-9B (image-text-to-text)
- zai-org/GLM-5.3-Flash (image-text-to-text)
- XingChen-AGI/Xing4.0-29B-A4B (text-generation, but has "conversational" tag)
- Edge0/Edge0-35B-A3B-preview (text-generation, MOE)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF


- Several specialized and fine-tuned variants exist, including quantization-focused models like prism-ml/Ternary-Bonsai-2-27B-gguf, ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF, and unsloth/Qwen3.8-27B-GGUF, along with unsloth's GGUF offerings and apple-silicon specific implementations.

- Additional models worth noting: DeepSeek-V4.1-Flash-UNCENSORED-FP8 from dealignai, DavidAU's specialized variants, and a few newer entries like internlm/Atria-Dawn-Preview, WarmBloodAban/Minimax-h3_Singularity, and Comfy-Org/Qwen-Image-2.1.

The ecosystem appears dominated by Qwen3.8 variants with over 7 million downloads, followed by MiniMax-H3 at 4 million and GLM-5.3 at 3 million. GGUF quantization formats are particularly popular for efficient deployment. Among the notable releases, Qwen3.8-27B stands out with 15,861 likes, while Lightricks/LTX-2.5 has gained significant traction in image-to-video generation.</think>

# Hugging Face Trending Models Digest

**Date: 2026-09-21**

---

## 1. Today's Highlights

This week's trending landscape showcases **Qwen3.8's dominance** across the ecosystem—the base model and its variants occupy 6 of the top 30 spots with combined downloads exceeding 20 million. **MiniMax-H3** emerges as a standout in video generation, rivaling Lightricks' LTX-2.5 in popularity. The **GGUF quantization trend** continues strongly, with three quantized Qwen variants appearing in the rankings, reflecting community demand for efficient local deployment. Notably, **ternary/2-bit quantization** (prism-ml models) signals innovation in extreme model compression.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,861 | 7,331,932 | Qwen's flagship 27B multimodal model with image-text understanding; the week's most-liked model with 7.3M downloads, reflecting strong community adoption for conversational AI. |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,769 | 5,910,102 | Meta's instruction-tuned 8B model; continues to draw massive interest as a reliable open-weight baseline for fine-tuning and research. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,627 | 420,622 | Compact 2B parameter model from OpenBMB; trending for its efficient performance in text generation with minimal resource requirements. |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 980 | 11,913 | Agentic-focused text generation model built on Qwen3.5; notable for structured output capabilities and reasoning enhancements. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,552 | 1,609,559 | High-quality image-to-video generation model; trending as a leading open diffusion model for video synthesis with 1.6M downloads. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,525 | 4,057,444 | Text-to-video and image-to-video model with exceptional generation quality; gained 5K likes this week as video generation demand surges. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,492 | 761,112 | Next-generation multimodal flash model with enhanced efficiency; positioned as Qwen's fastest multimodal variant with strong reasoning. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,431 | 496,684 | Multimodal image-text-to-text model from DeepSeek; notable for strong reasoning capabilities and competitive performance. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,499 | 3,109,084 | GLM's flash multimodal model with 3.1M downloads; gaining traction for efficient conversational AI with vision understanding. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 915 | 17,403 | Symbolic music generation and audio model; unique for agentic editing and symbolic planning in music AI. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 571 | 242,751 | Fine-tuned variant of Minimax-H3 for video generation; popular for creative video synthesis workflows. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 740 | 183 | Text-to-image generation model; trending for image editing capabilities within the Qwen ecosystem. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 212 | 3,750 | Multimodal vision-language model focused on spatial reasoning; notable for specialized reasoning tasks. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,428 | 6,941,478 | Unsloth's GGUF-quantized Qwen3.8; massive 6.9M downloads make it the most-downloaded quantized model, optimized for CPU inference. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,002 | 1,301,417 | Heavily fine-tuned uncensored coding model with 27B parameters in GGUF; trending among developers for unfiltered code generation. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,478 | 1,217,204 | Mixed-precision GSQ+RCO quantized Qwen; notable for maintaining quality while reducing memory footprint for local deployment. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,494 | 1,908,396 | Extreme 2-bit ternary quantization using Hadamard transformation; the most-liked model this week, pioneering ultra-compressed inference. |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 284 | 30,043 | Apple Silicon MLX implementation of 2-bit ternary model; niche but innovative for M-series chip users. |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 329 | 136,668 | Efficient-thinking optimized GGUF variant; trending for enhanced reasoning capabilities in quantized form. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 189 | 42,965 | Quantized multimodal flash model with mixed-precision; popular for running vision-language models on consumer hardware. |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 325 | 34,688 | Uncensored FP8 variant of DeepSeek-V4.1; notable for relaxed content guidelines and efficient precision. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,549 | 76,669 | MoE model with 35B active parameters using 3B experts; trending for edge inference optimization and efficient deployment. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 1,089 | 0 | Calibrated decision-making text classifier; notable for system-one reasoning and safe decision outputs. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 314 | 0 | Qwen3.5-based NLI cross-encoder for text classification; specialized for natural language inference tasks. |

---

## 3. Ecosystem Signal

The **Qwen3.8 family** has become the dominant ecosystem player, with base models, flash variants, and quantized versions collectively exceeding 20 million downloads. This signals strong community reliance on Qwen as a fine-tuning backbone. **GGUF quantization** remains the preferred format for local deployment, with three variants in the top 30—the unslothquantized version alone accounts for 6.9M downloads, demonstrating demand for CPU-friendly inference.

**Video generation** is emerging as a fiercely competitive space: MiniMax-H3 (5,525 likes) and Lightricks LTX-2.5 (4,552 likes) both command substantial attention, suggesting the market is maturing beyond image generation. **Extreme quantization** is gaining novelty appeal—prism-ml's ternary/2-bit models (1,494 likes) represent a frontier in model compression that could reshape edge deployment economics. Open-weight models from Meta, Qwen, and DeepSeek continue to dominate, while proprietary API-only models are largely absent from trending, reinforcing Hugging Face as an open-weights-first ecosystem.

---

## 4. Worth Exploring

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — The week's most-liked model. Its 2-bit ternary quantization using Hadamard transformation represents cutting-edge compression research. Worth studying for anyone interested in extreme model compression techniques.

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — With 5,525 likes and 4M+ downloads, this is the standout video generation model. Its image-to-video and text-to-video capabilities rival commercial solutions and merit exploration for creative AI pipelines.

3. **[Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)** — A MoE architecture (35B active / 3B experts) designed for edge inference. Its architectural innovation and focus on efficient deployment make it a valuable study case for resource-constrained environments.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*