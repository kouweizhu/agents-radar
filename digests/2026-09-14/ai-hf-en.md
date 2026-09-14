# Hugging Face Trending Models Weekly 2026-09-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-14 00:22 UTC

---

**Today's Highlights**  
Qwen’s **Qwen3.8-27B** continues to dominate Hugging Face with over 7.7M downloads and 14.9K likes, cementing its position as the most popular open multimodal model. The ecosystem is witnessing explosive growth in quantized and Flash-optimized variants, with unsloth’s GGUF quantization of Qwen3.8-27B surpassing 11M downloads — the highest on the list. Meanwhile, Lightricks’ **LTX-2.5** and MiniMaxAI’s **MiniMax-H3** are driving momentum in text-to-video generation, while DeepSeek’s **DeepSeek-V4.1-Flash** and Qwen’s **Qwen3.8-Flash-Next** signal a broader industry shift toward ultra-efficient, high-performance inference architectures.

---

**Trending Models**

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,342 | 150,110 | A compact 2B-parameter LLM based on Llama architecture, optimized for edge deployment with strong reasoning and instruction-following. Trending due to its efficiency and competitive performance on benchmarks despite its size. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 1,038 | 3,552 | A 35B MoE model based on Qwen3.5, designed for low-latency edge inference. Gaining attention for its novel Mixture-of-Experts design tailored for on-device LLMs. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,154 | 21,336 | A 4B-parameter instruction-tuned model with strong code and reasoning capabilities. Notable for its lightweight footprint and performance rivaling larger models in specialized tasks. |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 217 | 99,716 | GGUF-quantized version of MiniCPM5-2B enabling CPU-only inference. Trending due to high download volume from developers seeking portable, low-resource LLMs. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 433 | 30,310 | A specialized GLM-5.3 variant fine-tuned for cybersecurity tasks with refusal-removed responses. Gaining traction for its aggressive, no-holds-barred analysis of security vulnerabilities. |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 1,737 | 7,979 | A 4B-parameter agentic LLM based on Qwen3.5, optimized for tool use and sequential decision-making. Rising popularity due to its clean implementation of agentic workflows in a compact model. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,971 | 7,768,964 | A flagship multimodal LLM supporting image-text-to-text interaction with conversational fluency. Leading in downloads and likes due to its balanced performance, open weights, and robust documentation. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,165 | 624,390 | A next-generation Flash-optimized variant of Qwen3.8, delivering near-full-model quality at 50% lower latency. Trending as the new standard for real-time multimodal applications. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,741 | 1,548,442 | A diffusion-based text-to-video and image-to-video model with high temporal coherence. Gaining traction as one of the most accessible open video generators with single-file diffusion support. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,238 | 4,819,845 | A powerful text-to-video and image-to-video model built on a proprietary diffusion pipeline. Leading in downloads among video models due to its cinematic quality and open release despite being from a closed company. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 373 | 123,491 | A community-released variant of MiniMax-H3 with enhanced motion dynamics. Popular among video artists for its expressive, stylized generation capabilities. |
| [Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 216 | 0 | A video-to-video model specializing in character replacement and motion transfer. Notable for its zero-download status despite high likes — suggesting viral interest but early-stage adoption. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,930 | 252,928,721 | The de facto standard for lightweight sentence embeddings. Still the most downloaded model on Hugging Face, powering RAG, clustering, and semantic search systems globally. |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 774 | 797,832 | Google’s state-of-the-art time-series forecasting model with transformer-based temporal reasoning. Trending among fintech and logistics teams for its zero-shot forecasting accuracy on irregular data. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,302 | 46,513,338 | The foundational BERT model remains indispensable for NLP pipelines. Its enduring popularity reflects its role as a baseline for countless downstream tasks. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,435 | 7,325,282 | A distilled, 60% faster version of BERT with minimal accuracy loss. Still widely used in production for low-latency inference. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,502 | 21,331,361 | The canonical vision-language embedding model. Still the go-to for zero-shot image classification and cross-modal retrieval. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 529 | 12,880 | Meta’s multilingual speech recognition model supporting 1,000+ languages. Gaining niche traction in low-resource language projects. |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 196 | 4,119 | A 4B-parameter model specialized for autonomous driving perception and motion planning. Emerging as a leading open model for automotive AI research. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 970 | 769,557 | A GGUF-quantized Qwen3.8-27B with GSQ (Generalized Sparse Quantization) and RCO (Recurrent Context Optimization). Trending for its 4-bit performance matching 8-bit baselines — a breakthrough in memory-efficient multimodal inference. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,009 | 11,005,880 | The most-downloaded GGUF quantization on Hugging Face. Built with Unsloth’s speed-optimized kernels, it enables near-native GPU performance on CPU and low-end devices. Dominates the quantization space due to its ease of use and blazing inference. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 633 | 750,591 | A highly specialized, uncensored GGUF fine-tune of Qwen3.8-27B with coding and creative writing enhancements. Trending for its “heretic” persona and extreme openness — a magnet for developers pushing ethical boundaries. |

---

**Ecosystem Signal**  
The Qwen family is now the undisputed leader in open multimodal models, with over 20M combined downloads across its flagship, Flash, and quantized variants. This dominance is fueled by aggressive optimization (Flash, GGUF) and strong community support — notably from unsloth and ISTA-DASLab — which are turning base models into production-ready tools. Open-weight models are clearly outpacing proprietary ones in adoption, with even MiniMaxAI releasing high-performing video models openly, suggesting a strategic shift toward ecosystem influence over exclusivity. Quantization activity is surging: GGUF dominates the space, with unsloth’s tooling enabling unprecedented efficiency gains. Meanwhile, “uncensored” and “heretic” fine-tunes are becoming a subculture, signaling demand for models that bypass alignment constraints — a trend likely to spark policy debates. The rise of Flash architectures (DeepSeek, Qwen) and MoE edge models (Edge0, NeoHorse) indicates a clear industry pivot: performance per watt is now as critical as raw scale.

---

**Worth Exploring**  
1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — The most downloaded quantized model on Hugging Face. If you’re running multimodal LLMs on consumer hardware, this is the gold standard for speed, quality, and ease of deployment.  
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — A rare open video generation model with diffusion single-file support. Ideal for researchers and creators seeking high-quality, controllable video output without proprietary APIs.  
3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — For AI engineers: this model demonstrates how advanced quantization techniques (GSQ + RCO) can preserve multimodal reasoning at 4-bit precision — a blueprint for the next generation of edge AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*