# Hugging Face Trending Models Weekly 2026-10-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-12 01:40 UTC

---

<think>Alright, I need to generate a structured Hugging Face Trending Models Digest based on the provided data. Let me analyze the models and organize them into the required categories.

First, let me identify the categories:

1. 🧠 Language Models (LLMs, chat models, instruction-tuned)
2. 🎨 Multimodal & Generation (image, video, audio, text-to-X)
3. 🔧 Specialized Models (code, math, medical, embeddings)
4. 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

Now let me categorize each model:

**Language Models:**
- jialinyyzz/humanizer - text-generation
- Aleph-Alpha/Kolibri-1 - text-generation, reasoning, moe
- Venastine-Research/Xing4.0-29B-A4B-GGUF - text-generation
- Qwen/Qwen3.8-27B - image-text-to-text (but seems more like LLM)
- ConwayResearch/Underdog-Saluki-27B-1.0 - text-generation, tool-calling
- LiquidAI/d1-3B - image-text-to-text (could be here)
- prism-ml/Ternary-Bonsai-2-27B-gguf - text-generation
- deepseek-ai/DeepSeek-V4.1-Flash - image-text-to-text (could be here)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF - image-text-to-text (could be here)
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF - image-text-to-text (could be here)

Actually, let me reconsider. The image-text-to-text models are multimodal, so they should go in Multimodal & Generation. Let me focus on pure text-generation models for Language Models.

Language Models:
- jialinyyzz/humanizer - text-generation


- Aleph-Alpha/Kolibri-1 - text-generation, reasoning, moe
- Venastine-Research/Xing4.0-29B-A4B-GGUF - text-generation
- ConwayResearch/Underdog-Saluki-27B-1.0 - text-generation, tool-calling
- prism-ml/Ternary-Bonsai-2-27B-gguf - text-generation

I'll organize these specialized language models into distinct groups based on their unique characteristics and capabilities. Some key observations include reasoning-focused models, tool-calling variants, and quantized versions that offer different performance profiles.

The multimodal and generation models represent a diverse range of advanced AI capabilities, spanning image-text, text-to-image, image-to-video, and automatic speech recognition tasks. These models showcase significant progress in cross-modal understanding and generation, with notable entries from major tech companies like Cloudflare, Qwen, and Lightricks.

The specialized models demonstrate targeted AI solutions in embedding, text-to-speech, classification, and speech recognition domains. They reflect the ongoing trend of developing highly specific AI tools that can perform nuanced, task-oriented functions with increasing precision.

Fine-tuned and quantized models represent an important evolutionary step in AI model development, offering more efficient and adaptable solutions through community-driven optimizations and reduced computational requirements.</think>

# Hugging Face Trending Models Digest

**Date:** October 12, 2026

---

## 1. Today's Highlights

The week sees **Qwen3.8-27B** family dominating the ecosystem with multiple fine-tuned variants flooding the trending charts—demonstrating strong community adoption. **Lightricks/LTX-2.5** continues its remarkable run as the most-liked model overall (7,322 likes), cementing image-to-video as a hot segment. Meanwhile, **DeepSeek-V4.1-Flash** and **facebook/sam3** show that specialized vision models remain highly relevant, with over 1.3M and 2M downloads respectively. The GGUF quantization trend persists aggressively, with 12+ quantized variants appearing in this week's top 30.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,509 | 6,843,108 | Flagship 27B parameter model with strong conversational and image-text understanding capabilities; dominates in both likes and downloads this week. |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 887 | 12,550 | Reasoning-focused MoE model with vLLM support; notable for its specialized architecture targeting complex reasoning tasks. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 691 | 48,389 | 29B parameter model with GGUF quantization; gaining traction for its efficient deployment capabilities. |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 322 | 108,900 | Tool-calling and function-calling optimized model with 2-bit quantization; targets developers needing structured outputs. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,630 | 4,549,911 | Extreme 2-bit quantization using llama.cpp; notable for achieving aggressive compression while maintaining usability. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,322 | 1,726,683 | Leading image-to-video diffusion model with text-to-video and video-to-video capabilities; highest-liked model this week. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,028 | 14,351 | Qwen3.5-based image-text-to-text model; notable for Cloudflare's edge AI positioning. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,228 | 136,103 | Text-to-image generation model with image editing capabilities; builds on Qwen's strong multimodal foundation. |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 543 | 4,702 | Faster variant of Qwen-Image-2.1 optimized for quick generation; uses Diffusers for streamlined workflows. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,365 | 1,382,367 | Flash-optimized multimodal model with strong text and image understanding; shows DeepSeek's rapid iteration pace. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,073 | 2,081,596 | SAM (Segment Anything Model) video variant for mask generation; massive download numbers indicate widespread adoption. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 756 | 22,123 | Lightweight version of Cloudflare's image-text model; optimized for edge deployment. |
| [FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism) | FrancisRing | 161 | 0 | Joint video-audio generation model using video diffusion transformers; represents emerging generative video capabilities. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,112 | 1,870,465 | Next-gen Flash model with expanded conversational abilities; part of Qwen's experimental Qwen4_exp lineup. |
| [nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 237 | 56,525 | Heavily fine-tuned reasoning variant combining multiple specialized adaptations; showcases community fine-tuning creativity. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 799 | 4,189,006 | Quantized version of Flash-Next with GSQ and RCO techniques; massive downloads indicate high community interest. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 2,153 | 1,489,676 | Similar quantization approach applied to base Qwen3.8-27B; notable for mixed-precision optimization. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,712 | 98,829 | Google's feature-extraction embedding model based on Gemma2 architecture; strong performance for semantic search. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,493 | 44,088 | Text-classification model tagged with system-one and calibrated-decisions; notable for its high likes-to-download ratio. |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 336 | 16,434 | On-device automatic speech recognition model; targets privacy-preserving edge deployment. |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 357 | 18,079 | Turkish text-to-speech model using EMA Lightning architecture; addresses niche language synthesis needs. |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 255 | 59,274 | Quantized version of Google's embedding model; enables local deployment with reduced memory footprint. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,026 | 6,488,262 | Unsloth's GGUF quantization of Qwen3.8-27B; highest download count in this category by a significant margin. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,989 | 2,188,658 | Uncensored GGUF variant of Qwen-Image-2.1 for image generation; massive download numbers show demand. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,657 | 2,016,567 | Heavily customized uncensored GGUF with multiple fine-tune layers; targets unrestricted content generation. |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 324 | 100,530 | Uncensored quantized version of Qwen-Image-2.1 Turbo; notable for atomic-chat specific adaptations. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 760 | 614,193 | Abliterated uncensored Flash-Next with GGUF quantization; addresses demand for less restricted models. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,088 | 37,647 | Humanizer GGUF variant targeting natural text generation; uses gemma4_unified architecture. |
| [speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 150 | 393 | Pixel-space diffusion text-to-image model; still early with low download numbers but represents niche experimentation. |

---

## 3. Ecosystem Signal

**Qwen Dominance:** The Qwen3.8-27B family has become the backbone of the community ecosystem, with 8+ variants appearing in the top 30. This mirrors Llama's position in 2023-2024, but with faster iteration cycles. The ISTA-DASLab quantization variants (GSQ-RCO) are particularly notable—they've achieved nearly 5.7M combined downloads, signaling strong demand for optimized inference.

**Quantization as Default:** GGUF has become the de facto format for community distributions. Models like **unsloth/Qwen3.8-27B-GGUF** (6.4M downloads) show that many users prioritize accessibility over raw performance. The emergence of extreme quantization (ternary/2-bit in Ternary-Bonsai) suggests the ecosystem is pushing compression boundaries.

**Multimodal Proliferation:** Image-text-to-text has surpassed pure text-generation in model count (12 vs. 5 in this snapshot). Video generation (LTX-2.5) and video understanding (SAM3) are gaining serious traction with millions of downloads.

**Open Weight Momentum:** Every model in this digest is open-weight. Proprietary API-only models have zero representation in trending, reinforcing Hugging Face's role as the hub for accessible, inspectable AI.

---

## 4. Worth Exploring

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — The most-liked model for good reason: it represents the state-of-the-art in open image-to-video generation. With 1.7M downloads and 7,322 likes, it's the benchmark for creative video AI. Worth studying for its diffusion architecture and community adoption patterns.

2. **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — A masterclass in quantization optimization. The GSQ (Grouped Scaling Quantization) and RCO (Residual Channel Optimization) techniques achieve a rare combination: substantial compression with minimal quality loss. 4.2M downloads in a single week is extraordinary.

3. **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — Often overlooked but critical infrastructure. This embedding model from Google delivers production-grade semantic search at scale. With 98K downloads, it's quietly powering real-world retrieval systems. The GGUF variant from Unsloth makes on-device deployment viable.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*