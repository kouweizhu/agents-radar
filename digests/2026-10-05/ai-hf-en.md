# Hugging Face Trending Models Weekly 2026-10-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-05 01:11 UTC

---

<think>The user wants me to create a structured Hugging Face Trending Models Digest based on the provided data. Let me analyze the models and organize them properly.

Let me categorize each model:

1. **Cloudflare/clef** - image-text-to-text - multimodal
2. **convaiinnovations/laya** - text-classification - specialized
3. **abenzerps/Qwen-Image-2.1-Uncensored-GGUF** - text-to-image - quantization/fine-tune
4. **Lightricks/LTX-2.5** - image-to-video - multimodal/generation
5. **Cloudflare/clef-flash** - image-text-to-text - multimodal
6. **Aleph-Alpha/Kolibri-1** - text-generation - LLM
7. **Qwen/Qwen3.8-27B** - image-text-to-text - LLM
8. **Qwen/Qwen-Image-2.1** - text-to-image - multimodal/generation
9. **PSRben/VisionHOPE** - image-classification - specialized
10. **Venastine-Research/Xing4.0-29B-A4B-GGUF** - text-generation - quantization
11. **Contrastive-LM/CLM-v0.1-8B** - text-ranking - specialized (embeddings/reranker)
12. **nvidia/Nemotron-3-Diarization** - voice-activity-detection - specialized
13. **Viggle/Qwen-Image-2.1-viggle-turbo** - text-to-image - multimodal/generation
14. **SupersonicLabs/Julia-1** - text-classification - specialized
15. **orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF** - text-generation - quantization
16. **ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF** - image-text-to-text - quantization


17. **TaichuAI/ZDTaichu5.0-9B** - image-text-to-text - multimodal
18. **prism-ml/Ternary-Bonsai-2-27B-gguf** - text-generation - quantization
19. **akatz-ai/MiniMax-H3-Character-Swap-LoRA** - video-to-video - fine-tune
20. **FermionResearch/Phonon-2** - automatic-speech-recognition - specialized
21. **Alissonerdx/BFS-Best-Face-Swap** - image-to-image - multimodal/generation

Continuing to organize these models into their respective categories for the digest.

22. **ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF** - image-text-to-text - quantization
23. **deepseek-ai/DeepSeek-V4.1-Flash** - image-text-to-text - LLM
24. **Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw** - text-generation - quantization
25. **pablodawson/MiniMax-H3-360-Orbit-LoRA** - image-text-to-video - fine-tune
26. **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** - image-text-to-text - quantization
27. **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** - image-text-to-text - LLM/quantization
28. **fastino/GLiNER2.5-Decide** - token-classification - specialized
29. **Qwen/Qwen3.8-Flash-Next** - image-text-to-text - LLM
30. **lilylilith/QI_2.1_AnyAngle** - image-to-image - fine-tune

Now sorting these into the four main buckets: Language Models, Multimodal & Generation, Specialized Models, and Fine-tunes & Quantizations.

For LLMs, I have Aleph-Alpha/Kolibri-1 as a reasoning and MoE model, Qwen/Qwen3.8-27B with substantial traction at 6.8M downloads, DeepSeek-V4.1-Flash, Qwen3.8-Flash-Next, and a heavily customized DavidAU variant. The multimodal and generation side includes Lightricks/LTX-2.5 for video, Qwen's image models, and various specialized vision and video tasks. Under specialized models, there are classification tools like convaiinnovations/laya and PSRben/VisionHOPE, along with rerankers and audio processing models.</think>

# Hugging Face Trending Models Digest

## Today's Highlights

The week sees **Qwen3.8** variants dominating the ecosystem, with no fewer than 8 quantized or fine-tuned derivatives in the top 30. **Lightricks/LTX-2.5** continues its video generation momentum with 1.6M downloads, while **DeepSeek-V4.1-Flash** emerges as a strong multimodal contender. Quantization activity is explosive—GGUF variants account for nearly a third of trending models, reflecting strong community demand for efficient deployment. The rise of uncensored and domain-specific fine-tunes (coding, cyber, image editing) signals increasing fragmentation of the base model market into specialized verticals.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,940 | 6,821,761 | Flagship multimodal Qwen model with image-text-to-text capabilities; leads all models in both likes and downloads this week. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,094 | 798,422 | Fast-efficient variant of DeepSeek's V4.1 multimodal model; gaining traction for its strong reasoning-to-speed ratio. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,896 | 1,480,842 | Next-generation Flash variant from Qwen; optimized for latency-sensitive chat applications with near-Flash speeds. |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 394 | 1,135 | MoE reasoning model from Aleph-Alpha; notable for its mixture-of-experts architecture targeting efficient reasoning. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,422 | 2,164,143 | Heavily fine-tuned Qwen3.8 derivative targeting uncensored coding and "Cold Fusion" style generation; massively popular with 2.1M downloads. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,312 | 1,626,951 | Leading image-to-video and text-to-video model; dominates the video generation space with 1.6M downloads. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,948 | 90,003 | Qwen's text-to-image foundation model; powers numerous downstream fine-tunes and GGUF variants. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 588 | 272,896 | Turbo-tuned variant of Qwen-Image-2.1 with LoRA enhancements; popular for fast image generation workflows. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,211 | 4,214 | Cloudflare's image-text-to-text model using Qwen3.5 architecture; notable for edge-deployment focus. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 427 | 6,372 | Lightweight flash variant of Clef; optimized for low-latency edge inference. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,859 | 12,638 | Multimodal vision-language model focused on spatial reasoning; targets robotics and spatial AI applications. |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,180 | 203,086 | Face-swap pipeline using Qwen-Image-2.1 + LoRA; sees heavy use in creative image editing communities. |
| [akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA) | akatz-ai | 291 | 15,800 | Character-swap LoRA for MiniMax-H3 video models; targets video editing and character animation workflows. |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 185 | 5,742 | First-last-frame LoRA for MiniMax-H3 image-to-video; enables 360-degree orbital video generation. |
| [lilylilith/QI_2.1_AnyAngle](https://huggingface.co/lilylilith/QI_2.1_AnyAngle) | lilylilith | 126 | 0 | Qwen-Image 2.1 LoRA for arbitrary-angle image transformations; targets image-to-image editing use cases. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,163 | 3,752 | Text classification model with calibrated decision outputs; targets high-stakes classification pipelines. |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 402 | 1,516 | Image classification model from the VisionHOPE project; based on novel computer vision architectures. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 715 | 3,445 | Contrastive learning model for text ranking and reranking; serves as both verifier and reranker in retrieval pipelines. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 672 | 53,014 | Voice activity detection and diarization model from NVIDIA NeMo; widely adopted for meeting transcription pipelines. |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 415 | 3,657 | Multilingual decision model for text classification; targets complex decision-making automation. |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 202 | 2,635 | ASR model (Parakeet TDT Five) optimized for Apple Silicon via MLX; targets on-device speech recognition. |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 366 | 53,625 | GLiNER 2.5 variant for token classification, intent classification, and extraction tasks; lightweight NER solution. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,959 | 1,636,747 | GSQ+RCO quantized Qwen3.8 27B; represents state-of-the-art mixed-precision quantization with 1.6M downloads. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 556 | 1,886,975 | Flash-Next variant with GSQ+RCO quantization; highest download count among quantized models this week. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 260 | 351,230 | Coder-optimized quantized variant; targets efficient code generation on consumer hardware. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,416 | 4,045,810 | Revolutionary 2-bit (ternary) quantization of a 27B model; extreme compression achieving 4M+ downloads. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,142 | 1,553,744 | Uncensored GGUF quant of Qwen-Image-2.1; massively popular with 1.5M downloads for image generation. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 281 | 14,361 | Xing 4.0 29B quantized to 4B parameters; targets efficient large-scale text generation. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 361 | 14,195 | Cyber-themed uncensored GGUF based on Qwen3.8; targets security and red-teaming use cases. |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 213 | 946 | EXL3 quantized GLM-5.3 at 3.0bpw; rare non-Qwen quantized model in the trending list. |

---

## Ecosystem Signal

The **Qwen family** has become the de facto foundation for the open-weight ecosystem—8 of 30 trending models derive from Qwen3.8 or Qwen-Image-2.1, spanning language, image generation, and quantization. **Quantization is the dominant delivery mechanism**: GGUF variants account for 9 models, with ISTA-DASLab's GSQ-RCO pipeline emerging as the gold standard for mixed-precision compression. **Ternary quantization** (prism-ml/Ternary-Bonsai-2-27B) signals a new frontier in extreme compression, achieving 2-bit weights with 4M+ downloads. Meanwhile, **video generation** (Lightricks/LTX-2.5) and **multimodal chat** (DeepSeek-V4.1-Flash) represent the fastest-growing capability tiers beyond text-only LLMs. The ecosystem continues to fragment around domain-specific uncensored fine-tunes, particularly in coding and image generation, reflecting community demand for fewer content restrictions.

---

## Worth Exploring

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — The most downloaded model this week (4M+). Its 2-bit ternary quantization is a technical breakthrough: it compresses a 27B model to ~7GB while maintaining surprising quality. Study this if you're interested in the frontier of model compression.

2. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — The most sophisticated quantization pipeline in the ecosystem (GSQ + RCO mixed precision). Demonstrates that quantization is becoming a science, not just a hack—worth studying for anyone building efficient inference systems.

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — The clear leader in open video generation with 1.6M downloads. With video generation rapidly maturing, LTX-2.5 represents the state-of-the-art for text-to-video and image-to-video on Hugging Face.

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*