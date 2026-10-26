# Hugging Face Trending Models Weekly 2026-10-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-26 00:38 UTC

---

<think>The user wants me to generate a structured Hugging Face Trending Models Digest based on the data provided. Let me analyze the models and categorize them appropriately.

Let me go through each model and categorize:

1. deepseek-ai/DeepSeek-V4.1-Flash-1017 - image-text-to-text - Multimodal & Generation
2. RecursiveSI/flint - text-generation - Language Models
3. black-forest-labs/flux-3-image-klein-comfy - image-to-image - Multimodal & Generation
4. XHToken/Spark-X2.6-4B - text-generation - Language Models
5. Lightricks/LTX-2.5 - image-to-video - Multimodal & Generation
6. Nanbeige/Nanbeige4.3-33B - text-generation - Language Models
7. OpenMOSS-Team/MOSS-Image-SFT - text-to-image - Multimodal & Generation
8. MiniMaxAI/MiniMax-M3.1-Flash - image-text-to-text - Multimodal & Generation
9. abenzerps/Qwen-Image-2.1-Uncensored-Quantized - text-to-image - Fine-tunes & Quantizations
10. Qwen/Qwen3.8-27B - image-text-to-text - Multimodal & Generation (it's multimodal)
11. fishaudio/drama-3 - text-to-speech - Multimodal & Generation
12. InternScience/Sage-A1.5 - text-generation - Language Models
13. ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF - text-generation - Fine-tunes & Quantizations
14. lodestones/Kromoss - text-to-image - Multimodal & Generation
15. dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8 - image-text-to-text - Multimodal & Generation


16. OpenMOSS-Team/MOSS-Image-Base - text-to-image - Multimodal & Generation
17. unsloth/flint-GGUF - text-generation - Fine-tunes & Quantizations
18. mistralai/Timestral-209M - time-series-forecasting - Specialized Models
19. Comfy-Org/MOSS-Image - N/A - Multimodal & Generation (it's image generation)
20. datalab-to/indra-ocr - image-to-text - Specialized Models
21. google/embeddinggemma-2 - feature-extraction - Specialized Models
22. DavidAU/Qwen3.

I notice the list continues with more diverse model types across different categories. The models range from image generation to text-to-speech, feature extraction, and specialized tasks like OCR and time series forecasting. Each model seems to have a specific pipeline and purpose, reflecting the broad ecosystem of machine learning models on Hugging Face.

The next thinking provides additional context about the Qwen model and its various fine-tuned versions, highlighting the popularity of the Qwen3.8-27B base model and its multiple specialized variants.

I'll focus on identifying the key trends in model development and ecosystem signals, particularly noting the prominence of multimodal models, the significance of open-weight releases, and the growing interest in quantization techniques.

The most compelling models to explore include Qwen3.8-27B, Lightricks/LTX-2.5, and DeepSeek-V4.1-Flash-1017, each representing different cutting-edge approaches in AI model design. These models demonstrate the current focus on versatile, high-performance architectures that can handle diverse computational and generative tasks.</think>

# Hugging Face Trending Models Digest

**Date:** 2026-10-26

---

## 1. Today's Highlights

The ecosystem continues its shift toward highly capable multimodal models, with Qwen's 3.8-27B variant dominating both likes and downloads this week. Video generation is accelerating rapidly—Lightricks' LTX-2.5 crossed 2M downloads, reflecting strong consumer and creator demand. Quantized variants (GGUF, FP8) remain a major trend, with DeepSeek and Qwen backbones being adapted by multiple community quantizers. Notably, specialized domains like OCR (indra-ocr) and time-series forecasting (Timestral) are gaining organic traction beyond general-purpose LLMs.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 858 | 6,444 | A conversational text generation model optimized for dialogue; trending for its open-weight chat capabilities. |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 495 | 3,488 | A 4B-parameter LLM targeting efficient text generation; notable for its compact footprint. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 365 | 0 | A 33B-parameter Llama-based model; trending for its scale despite zero recorded downloads. |
| [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 289 | 3,875 | A Qwen3.5 MoE-based model with multimodal capabilities; gaining interest for its mixture-of-experts architecture. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,091 | 1,671,015 | A heavily fine-tuned Qwen variant with uncensored and coding optimizations; massive downloads reflect community demand for unfiltered, developer-focused LLMs. |
| [KRAFTON/Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview) | KRAFTON | 186 | 1,177 | A compact text generation model from a major game studio; notable as a preview release. |
| [ornith-ai/Ornith-1.5-122B](https://huggingface.co/ornith-ai/Ornith-1.5-122B) | ornith-ai | 177 | 48,477 | A 122B Qwen3.5 MoE model; trending for its large-scale architecture. |
| [HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 183 | 807 | A Qwen3-based model for DNA/text generation; represents niche bio-LLM interest. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 2,982 | 85,275 | A flash-version multimodal model handling image-text-to-text; trending for DeepSeek's rapid iteration and strong performance. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 1,603 | 660,874 | An image-to-image model built on Flux architecture for ComfyUI; massive downloads indicate dominant position in image editing pipelines. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,335 | 2,107,108 | An image-to-video model with text-to-video and video-to-video capabilities; the highest-liked model this week with over 2M downloads, reflecting explosive interest in AI video. |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 727 | 10,757 | A text-to-image model from the MOSS project; notable for open development. |
| [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 352 | 7,355 | A multimodal flash model for image-text tasks; part of MiniMax's growing VL series. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,394 | 7,762,014 | The most downloaded and liked model this week—a flagship multimodal LLM with image-text-to-text and conversational abilities; dominant ecosystem presence. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,012 | 21,375 | A multi-speaker text-to-speech model; trending for high-quality voice synthesis. |
| [lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss) | lodestones | 260 | 23,972 | A MOSS-based text-to-image model; gaining interest as an alternative image generator. |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 365 | 6,792 | An uncensored FP8 quantized variant of DeepSeek V4.1; notable for content policy flexibility. |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS-Team | 554 | 7,641 | The base model for MOSS image generation; serves as foundation for fine-tunes. |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 451 | 2,161,961 | A ComfyUI-optimized MOSS image model; over 2M downloads show strong community adoption. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,108 | 1,849,059 | A mask-generation model for video segmentation; trending for its SAM3 video capabilities and 1.8M+ downloads. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 367 | 9,765 | A time-series forecasting foundation model from Mistral; notable as one of the first dedicated timeseries models from a major lab. |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 425 | 4,636 | An ONNX-based OCR model for CPU inference; trending as a lightweight, specialized extraction tool. |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,921 | 212,769 | Google's feature extraction embedding model; strong interest for retrieval and similarity search tasks. |
| [orcarouter/OrcaCyber-Nano-1.0](https://huggingface.co/orcarouter/OrcaCyber-Nano-1.0) | orcarouter | 254 | 30,330 | A vision-language model for cybersecurity and reverse engineering; a unique niche application. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,040 | 2,235,846 | A GGUF-quantized uncensored Qwen image model; the second-highest download count reflects massive demand for quantized image generation. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 280 | 412,392 | A GGUF quantization with GSQ and RCO techniques; notable for mixed-precision optimization. |
| [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 248 | 103,369 | Unsloth's GGUF-optimized version of Flint; strong download numbers from the quantization community. |
| [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 216 | 7,293 | An abliterated GGUF variant of DeepSeek; appeals to users seeking modified model behavior. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 2,154 | 143,152 | A GGUF-quantized model based on Gemma4 Unified with image-text capabilities; trending for its human-like generation. |
| [Comfy-Org/Fibo-2.0](https://huggingface.co/Comfy-Org/Fibo-2.0) | Comfy-Org | 178 | 124,557 | A ComfyUI-optimized Fibo-2.0 model; notable as a single-file diffusion model for ComfyUI. |

---

## 3. Ecosystem Signal

The October 2026 landscape reveals several convergent trends. **Qwen** has emerged as the dominant backbone—its 3.8-27B model alone accounts for over 7.7M downloads, while multiple quantized and fine-tuned variants occupy the top of the quantization category. This signals that the Qwen family is becoming the default open-weight base for both general-purpose and specialized applications. **Multimodal dominance** is undeniable: video (LTX-2.5), image (Flux, MOSS), and image-text models collectively represent half the top entries by engagement. **Quantization is infrastructure**: GGUF variants now span image generation, text generation, and vision-language tasks, with over 3M combined downloads for the top quantized models. Open-weight releases continue to outpace proprietary offerings on engagement metrics, with community fine-tunes (DavidAU, unsloth, abenzerps) driving significant download volume. Specialized domains—OCR, time-series, cybersecurity, and bio-LLMs—show early but real traction, suggesting the ecosystem is maturing beyond general-purpose text models.

---

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The flagship model of the week. With 18K likes and 7.7M downloads, it represents the current state-of-the-art for open multimodal LLMs. Its massive ecosystem presence means extensive community support, fine-tune adapters, and quantization variants to explore.

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — The highest-engagement generation model. Its image-to-video, text-to-video, and video-to-video capabilities make it essential for anyone building generative media pipelines. Over 2M downloads signal production readiness.

3. **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — Often overlooked but critical for retrieval-augmented generation (RAG) and similarity search. Google's embedding model offers a strong, efficient backbone for embedding-based workflows—particularly valuable as vector databases and RAG systems become standard in LLM applications.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*