# Hugging Face Trending Models Weekly 2026-10-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-19 00:25 UTC

---

<think>Let me analyze the 30 models and organize them into the requested categories.

**Language Models (LLMs, chat models, instruction-tuned):**
- Qwen/Qwen3.8-27B - image-text-to-text, 17,958 likes, 7,695,206 downloads
- Qwen/Qwen3.8-Flash-Next - image-text-to-text, 6,328 likes, 2,485,835 downloads
- deepseek-ai/DeepSeek-V4.1-Flash-1017 - image-text-to-text, 1,333 likes, 10,233 downloads
- deepseek-ai/DeepSeek-V4.1-Flash - image-text-to-text, 4,635 likes, 1,316,711 downloads
- LiquidAI/LFM2.5-24B-A2B - text-generation, 470 likes, 13,007 downloads
- LiquidAI/LFM2.5-24B-A2B-GGUF - text-generation, 206 likes, 107,599 downloads
- ConwayResearch/Underdog-Saluki-27B-1.0 - text-generation, 542 likes, 410,558 downloads
- tencent/Hy-Memory-30B-A3B - text-generation, 188 likes, 1,187 downloads
- nerkyor/Qwen3.8-27B-Coder390... - image-text-to-text, 431 likes, 256,336 downloads

**Multimodal & Generation (image, video, audio, text-to-X):**
- openbmb/MiniCPM-V-4.7-35B-A3B - image-text-to-text, 1,008 likes, 57,935 downloads
- openbmb/MiniCPM-V-4.7-1B - image-text-to-text, 387 likes, 22,689 downloads


- fishaudio/drama-3 - text-to-speech, 692 likes, 9,620 downloads
- black-forest-labs/flux-3-image-klein-comfy - image-to-image, 809 likes, 338,036 downloads
- black-forest-labs/flux-3-image-klein - image-to-image, 487 likes, 52,315 downloads
- meta-models/Muse-Spark-Open-816B-A42B - image-text-to-text, 545 likes, 1,809 downloads
- Lightricks/LTX-2.5 - image-to-video generation, 8,377 likes, 2,012,496 downloads
- abenzerps/Qwen-Image-2.1-Uncensored-Quantized - text-to-image, 4,556 likes, 2,661,687 downloads
- OpenMOSS-Team/MOSS-Image-SFT - text-to-image, 340 likes, 2,087 downloads
- Qwen/Qwen-Image-2.1-Turbo - text-to-image, 983 likes, 23,131 downloads
- OpenMOSS-Team/MOSS-Image-Base - text-to-image, 292 likes, 1,791 downloads
- baidu/Unlimited-OCR - image-text-to-text, 4,792 likes, 1,652,742 downloads
- pablodawson/MiniMax-H3-360-Orbit-LoRA - image-text-to-video, 512 likes, 25,366 downloads
- Comfy-Org/MOSS-Image - N/A, 191 likes, 354,126 downloads
- AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF - text-to-image, 555 likes

I'm seeing a strong presence of Qwen's multimodal models across image and text generation tasks, along with several image-to-image and image-to-video converters getting significant traction. The OCR and video generation capabilities are particularly noteworthy, as is the appearance of MOSS-Image variants and the MiniMax LoRA model. - google/embeddinggemma-2 - feature-extraction, 2,661 likes, 164,339 downloads
- facebook/sam3 - mask-generation, 4,622 likes, 1,945,717 downloads
- vllm-sr/d3 - zero-shot-classification, 238 likes, 4,532 downloads

**Fine-tunes & Quantizations:**
- jialinyyzz/humanizer - text-generation, 1,946 likes, 103,709 downloads (GGUF)
- abenzerps/Qwen-Image-2.1-Uncensored-Quantized - text-to-image, 4,556 likes, 2,661,687 downloads (GGUF)
- LiquidAI/LFM2.5-24B-A2B-GGUF - text-generation, 206 likes

I'm seeing three primary categories emerging: embedding models like gemma-2 for feature extraction, video and image understanding models like SAM3, and community-driven quantized versions of existing models. The GGUF format appears to be gaining traction for efficient deployment.</think>

# Hugging Face Trending Models Digest

## 1. Today's Highlights

The week of October 19, 2026 showcases a **multimodal explosion** on Hugging Face, with image generation, video synthesis, and large language models dominating engagement. **Qwen3.8-27B** continues its meteoric rise with nearly 18K likes and 7.7M downloads, cementing itself as the most popular model this week. Video generation is having a moment: **LTX-2.5** from Lightricks pulled in over 2M downloads, while the ecosystem sees heavy activity around image-to-image models (Flux variants) and OCR capabilities. Notably, **DeepSeek** has released an incremental update (V4.1-Flash-1017), and **LiquidAI's Liquid Foundation Models** appear in both safetensor and GGUF quantized formats—signaling growing quantization demand for efficient deployment.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,958 | 7,695,206 | Qwen's flagship 27B parameter model with image-text capabilities; leads all models in both likes and downloads this week. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,328 | 2,485,835 | The Flash-Next variant of Qwen3.8 optimized for speed and efficiency while retaining strong multimodal performance. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,635 | 1,316,71 | DeepSeek's latest flash-optimized multimodal model; incremental update from V4.0 with improved reasoning. |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 542 | 410,558 | A 2-bit quantized GGUF model with tool-calling and function-calling capabilities; popular for local deployment. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 1,333 | 10,233 | Fresh release dated 1017; a specialized flash variant of DeepSeek-V4.1 with image-text-to-text pipeline. |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 470 | 13,007 | LiquidAI's Liquid Foundation Model 2.5 with 24B parameters and Mixture-of-Experts architecture. |
| [nerkyor/Qwen3.8-27B-Coder390...](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 431 | 256,336 | A heavily fine-tuned Qwen3.8 variant incorporating EfficientThinking, RLOO, MTP, and DFlash2 optimizations. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 8,377 | 2,012,496 | Leading image-to-video diffusion model; dominates the video generation space with 2M+ downloads. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,792 | 1,652,742 | Baidu's unlimited OCR model for feature extraction; massive adoption for document processing pipelines. |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,556 | 2,661,687 | GGUF-quantized Qwen Image 2.1 uncensored version; highly popular in the ComfyUI community. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,622 | 1,945,717 | Meta's Segment Anything Model 3 for mask generation; the go-to model for video segmentation tasks. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 809 | 338,036 | Flux 3 optimized for ComfyUI workflow; single-file diffusion for image generation/editing. |
| [openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) | openbmb | 1,008 | 57,935 | MiniCPM-V 4.7 with 35B active parameters (A3B routing); strong multimodal reasoning at scale. |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 555 | 387,254 | Uncensored GGUF variant of Qwen Image 2.1 Turbo; built for ComfyUI and unrestricted image generation. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 692 | 9,620 | Multi-speaker text-to-speech model from Fish Audio; supports drama-style voice generation. |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 512 | 25,366 | First-last-frame LoRA for MiniMax-H3; enables image-to-video with orbit camera motion control. |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 983 | 23,131 | Qwen's fast text-to-image model with generation and editing capabilities; official diffusers release. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,661 | 164,339 | Google's Gemma 2-based embedding model for feature extraction; highly efficient for retrieval tasks. |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 202 | 1,811 | ONNX-based OCR model optimized for CPU inference; lightweight alternative for document text extraction. |
| [vllm-sr/d3](https://huggingface.co/vllm-sr/d3) | vllm-sr | 238 | 4,532 | Zero-shot classification model built on Qwen3.5; part of vllm-sr's specialized pipelines. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,946 | 103,709 | GGUF-quantized unified Gemma 4 model; community fine-tune for human-like text generation. |
| [LiquidAI/LFM2.5-24B-A2B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B-GGUF) | LiquidAI | 206 | 107,599 | GGUF version of Liquid Foundation Model 2.5; enables llama.cpp inference with 24B parameters. |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 191 | 354,126 | ComfyUI wrapper for MOSS-Image base model; single-file diffusion for easy workflow integration. |

---

## 3. Ecosystem Signal

**Qwen dominance continues** — The Qwen family (Qwen3.8-27B, Qwen3.8-Flash-Next, Qwen Image 2.1 variants) accounts for a disproportionate share of total engagement, with the flagship 27B model alone pulling 7.7M downloads. This signals strong ecosystem reliance on Qwen as a base for multimodal and vision-language applications.

**Quantization is mainstream** — GGUF-format models appear repeatedly across categories (Humanizer, Liquid LFM, Qwen Image Uncensored, Underdog Saluki). The community's appetite for efficient, CPU-friendly deployments is fueling massive adoption of quantized variants—particularly those tuned for llama.cpp and ComfyUI.

**Video generation is heating up** — Lightricks' LTX-2.5 hit 2M+ downloads, signaling growing demand for accessible image-to-video tools. The MiniMax-H3 LoRA for orbit camera control further indicates specialization in video generation workflows.

**Open-weight momentum** — While Google (embeddinggemma-2), Meta (SAM3), and Baidu (Unlimited-OCR) contribute high-quality specialized models, the most engagement centers on open-weight releases from Chinese AI labs (Qwen, DeepSeek, MiniCPM) and community quantizations.

---

## 4. Worth Exploring

| Model | Why It Matters |
| :--- | :--- |
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | The clear leader in community engagement—essential baseline for benchmarking against. Its 7.7M weekly downloads reflect production-wide adoption. |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | The most downloaded diffusion model this week; if you're building video pipelines, this single-file diffusion model is the lowest-friction entry point. |
| **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** | A high-quality, efficient embedding model from Google; ideal for retrieval-augmented generation (RAG) stacks looking for speed/quality balance. |

---

*Digest generated from Hugging Face trending data (October 19, 2026). All download and like counts reflect raw Hub metrics.*

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*