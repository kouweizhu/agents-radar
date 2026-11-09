# Hugging Face Trending Models Weekly 2026-11-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-09 01:54 UTC

---

<think>We need to generate a structured Hugging Face Trending Models Digest in English, as specified. The user provides a list of 30 trending models, with details: name, author, pipeline (type), likes, downloads, tags.

We must parse these into categories:

Categories:

- 🧠 Language Models (LLMs, chat models, instruction-tuned)
- 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- 🔧 Specialized Models (code, math, medical, embeddings)
- 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

We need to assign each model to a category. Some models may belong to multiple categories (e.g., "Qwen3.8-27B" is image-text-to-text (multimodal) but also an LLM? It is a base LLM with multimodal capabilities. The categories are somewhat overlapping. But we must produce tables for each category containing models that fit that category. The instructions say: "Omit a category's table entirely if no model falls under it". So we should create tables for each of the four categories, only if there are models.

We need to provide for each model a Summary: 2 sentences — what it is and why it's trending, including a standout capability or data point.

We also need to provide "Today's Highlights" (3-5 sentences). "Ecosystem Signal" (100-200 words). "Worth Exploring" (2-3 models most worth trying, with reasoning). Also preserve all HF links.

We need to ensure the model names are Markdown links to their HF URL. The input includes the URLs already. So we can include them like [speridlabs/idol](https://huggingface.co/speridlabs/idol). We need to ensure the table columns are exactly: Model, Author, Likes, Downloads, Summary.

The likes and downloads are given with numbers, some have commas, some are not (e.g., 1,393). The instruction: "copy the numbers from the input verbatim (keep the thousands separators; do not recompute or round)". So we need to replicate the numbers exactly as they appear, including commas.

We need to decide category assignment. Let's list each model:

1. speridlabs/idol: pipeline image-to-3d, tags idol, gaussian-splatting, 3d, image-to-3d. It's a 3D generation model from an image. That's a multimodal/generation (image-to-3d). Also could be specialized? But likely "Multimodal & Generation".

2. xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic: pipeline text-generation. It's an uncensored version of DeepSeek V4 Pro Qwen 3.5 9B. Likely a language model (LLM). It could be considered a fine-tune/quantization? It is a "text-generation" model. It is a community fine-tune? It's a "heretic" uncensored variant. Might be in "Language Models" but also "Fine-tunes & Quantizations" because it could be a fine-tune? The tags: transformers, safetensors, qwen3_5, image-text-to-text, text-generation-inference. It mentions "image-text-to-text" but pipeline is text-generation. Possibly it's a fine-tune. But I'd categorize as Language Models, but also "Fine-tunes & Quantizations" because it's an "uncensored" variant of a model.

But we need to assign each model to one category? The instructions don't forbid multiple categories. It says "Organized by category. Under each category header, render a Markdown table". It does not say a model can't appear in multiple categories. However typically you'd put each model under one category. But maybe you can include duplicates. To be safe, assign each model to the most appropriate category.

3. moonshotai/Kimi-K3.1-Pro: pipeline image-text-to-text. It's a multimodal model (image+text). Likely "Multimodal & Generation". Or "Language Models"? It is a multimodal chat model.

4. ricursiveAI/Ripple-65B-Preview: pipeline N/A. Tags: safetensors, ricursive, custom_code, license:apache-2.0, region:us. It's a 65B model. Might be a language model. Could be a fine-tune or base model. But we don't have pipeline. Likely a large LLM.

5. Lightricks/LTX-2.5: pipeline image-to-video. It's a video generation model. Multimodal & Generation.

6. ccore/Qwen3.5-4B-3D-Coder: pipeline N/A. Tags: safetensors, gguf, qwen3_5, code, threejs. It's a code generation model for 3D (threejs). Specialized: code. Possibly "Specialized Models".

7. Qwen/Qwen3.8-27B: pipeline image-text-to-text. It's a large multimodal model (image+text). Could be "Language Models" as it's also a chat model. But it's definitely multimodal.

8. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF: pipeline image-text-to-text. It's a large model with many modifications. Likely a fine-tune/quantization. It is a GGUF quantized version. So "Fine-tunes & Quantizations".

9. NousResearch/Arete-27B: pipeline text-generation. Likely LLM.

10. nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B: pipeline automatic-speech-recognition. Specialized: speech recognition. Could be "Specialized Models".

11. FusionCow/Sulphur-3: pipeline N/A. Tags: minimax-h3, base_model:MiniMaxAI/MiniMax-H3, base_model:finetune:MiniMaxAI/MiniMax-H3. Could be a fine-tune of MiniMax-H3. Possibly "Fine-tunes & Quantizations".

12. black-forest-labs/flux-3-image-klein-comfy: pipeline image-to-image. It's an image editing model. Multimodal & Generation.

13. ccore/Qwen3.5-4B-GLB-3D-Coder: pipeline text-generation. Tags: code, threejs. It's a code model.

14. webAI-Official/TwIL-8B: pipeline text-generation. It's a language model.

15. unsloth/Qwen3.8-Flash-Next-GGUF: pipeline image-text-to-text. It's a quantized GGUF version. Fine-tunes & Quantizations.

16. PrunaAI/P-H3-Image-Comfy: pipeline text-to-image. Multimodal & Generation.

17. AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF: pipeline text-generation. It's a quantized GGUF version. Fine-tunes & Quantizations.

18. Viggle/Viggle-Remake: pipeline video-to-video. Multimodal & Generation.

19. LiquidAI/LFM3-1.7B: pipeline text-generation. It's a language model.

20. facebook/sam3: pipeline mask-generation. It's a vision model for segmentation. Multimodal & Generation? Could be specialized. But likely "Multimodal & Generation" as it's vision.

21. abenzerps/Qwen-Image-2.1-Turbo-Quantized: pipeline text-to-image. Multimodal & Generation. It's quantized.

22. ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF: pipeline image-text-to-text. It's a quantized version for coding.

23. Scantist/GLM-5.3-SLIM-GGUF: pipeline text-generation. It's a quantized version.

24. Pika-Labs/Pika-H3-Flex: pipeline image-to-video. Multimodal & Generation.

25. burner22/numbat: pipeline N/A. Tags: safetensors, numbat, custom_code, 8-bit, modelopt. Likely a specialized model for some task? Not sure. Could be "Specialized Models".

26. deepseek-ai/DeepSeek-V4.1-Flash-1017: pipeline image-text-to-text. It's a multimodal model.

27. baidu/ERNIE-5.5-Flash-Base: pipeline text-generation. It's a language model.

28. PrunaAI/P-H3-Image: pipeline text-to-image. Multimodal & Generation.

29. mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF: pipeline N/A. It's a quantized GGUF version.

30. mistralai/Mistral-Large-4-1T-A52B: pipeline image-text-to-text. It's a large multimodal model.

Now we need to assign each model to categories:

🧠 Language Models (LLMs, chat models, instruction-tuned)

- xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic (text-generation)
- ricursiveAI/Ripple-65B-Preview (maybe large LLM)
- Qwen/Qwen3.8-27B (image-text-to-text but also LLM)
- NousResearch/Arete-27B (text-generation)
- webAI-Official/TwIL-8B (text-generation)
- LiquidAI/LFM3-1.7B (text-generation)
- deepseek-ai/DeepSeek-V4.1-Flash-1017 (image-text-to-text but also LLM)
- baidu/ERNIE-5.5-Flash-Base (text-generation)
- mistralai/Mistral-Large-4-1T-A52B (image-text-to-text but LLM)
- maybe others: Lightricks/LTX-2.5? No, that's video generation. Not LLM.

Also maybe "moonshotai/Kimi-K3.1-Pro" is a multimodal chat, but could be considered LLM? It is image-text-to-text. It's a multimodal model. But we could include it under "Multimodal & Generation". But it's also a language model that can handle images. I'd put it under Multimodal.

Also "speridlabs/idol" is image-to-3d. Not LLM.

Also "facebook/sam3" is mask generation. Not LLM.

Thus we can have many LLM entries.

🎨 Multimodal & Generation (image, video, audio, text-to-X)

- speridlabs/idol (image-to-3d)
- moonshotai/Kimi-K3.1-Pro (image-text-to-text)
- Lightricks/LTX-2.5 (image-to-video)
- Qwen/Qwen3.8-27B (image-text-to-text) - but it's also LLM. We can decide to put it in Multimodal because it's a multimodal model. But we could also include it under LLM. But we need to decide one category per model? The instructions don't forbid duplicates, but typical classification would be exclusive. Let's decide to put Qwen3.8-27B under Multimodal & Generation because it's an image-text-to-text model. But it's also a language model. However, the category "Language Models" may include models that are primarily language, while "Multimodal & Generation" includes models that generate or process images, video, etc. So we can assign Qwen3.8-27B to Multimodal.

- black-forest-labs/flux-3-image-klein-comfy (image-to-image)
- PrunaAI/P-H3-Image-Comfy (text-to-image)
- Viggle/Viggle-Remake (video-to-video)
- facebook/sam3 (mask-generation) - it's vision, maybe specialized but also generation. Could be "Specialized Models"? Actually "mask-generation" is a vision task. Could be considered "Multimodal & Generation". But maybe it's specialized. Let's decide to put it under "Specialized Models"? The category "Specialized Models (code, math, medical, embeddings)" includes "embeddings"? Not exactly. But "mask-generation" is a vision task, not code or math. Could be "Multimodal & Generation". Let's put it in Multimodal.

- abenzerps/Qwen-Image-2.1-Turbo-Quantized (text-to-image)
- Pika-Labs/Pika-H3-Flex (image-to-video)
- PrunaAI/P-H3-Image (text-to-image)
- deepseek-ai/DeepSeek-V4.1-Flash-1017 (image-text-to-text) - we already have that as LLM? But we can put it under Multimodal.

- ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF (image-text-to-text) - also multimodal. But it's also a code model? Actually it's a coder. But it's a quantized version. Could be either. We'll decide later.

- Lightricks/LTX-2.5 is already included.

- Also "Pika-Labs/Pika-H3-Flex" is included.

- Also "Viggle/Viggle-Remake".

- Also "facebook/sam3".

- Also "abenzerps/Qwen-Image-2.1-Turbo-Quantized".

- Also "PrunaAI/P-H3-Image".

- Also "PrunaAI/P-H3-Image-Comfy".

- Also "black-forest-labs/flux-3-image-klein-comfy".

- Also "speridlabs/idol".

- Also "Lightricks/LTX-2.5".

- Also "moonshotai/Kimi-K3.1-Pro".

- Also "Qwen/Qwen3.8-27B".

- Also "deepseek-ai/DeepSeek-V4.1-Flash-1017".

- Also "IST�-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF".

- Also "Pika-Labs/Pika-H3-Flex".

- Also "Viggle/Viggle-Remake".

- Also "facebook/sam3".

- Also "abenzerps/Qwen-Image-2.1-Turbo-Quantized".

- Also "PrunaAI/P-H3-Image".

- Also "PrunaAI/P-H3-Image-Comfy".

- Also "black-forest-labs/flux-3-image-klein-comfy".

- Also "Lightricks/LTX-2.5".

- Also "speridlabs/idol".

- Also "moonshotai/Kimi-K3.1-Pro".

- Also "Qwen/Qwen3.8-27B".

- Also "deepseek-ai/DeepSeek-V4.1-Flash-1017".

- Also "IST A-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF".

- Also "Pika-Labs/Pika-H3-Flex".

- Also "Viggle/Viggle-Remake".

- Also "facebook/sam3".

- Also "abenzerps/Qwen-Image-2.1-Turbo-Quantized".

- Also "PrunaAI/P-H3-Image".

- Also "PrunaAI/P-H3-Image-Comfy".

- Also "black-forest-labs/flux-3-image-klein-comfy".

- Also "Lightricks/LTX-2.5".

- Also "speridlabs/idol".

- Also "moonshotai/Kimi-K3.1-Pro".

- Also "Qwen/Qwen3.8-27B".

- Also "deepseek-ai/DeepSeek-V4.1-Flash-1017".

- Also "IST A-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF".

- Also "Pika-Labs/Pika-H3-Flex".

- Also "Viggle/Viggle-Remake".

- Also "facebook/sam3".

- Also "abenzerps/Qwen-Image-2.1-Turbo-Quantized".

- Also "PrunaAI/P-H3-Image".

- Also "PrunaAI/P-H3-Image-Comfy".

- Also "black-forest-labs/flux-3-image-klein-comfy".

That's a lot.

🔧 Specialized Models (code, math, medical, embeddings)

- ccore/Qwen3.5-4B-3D-Coder (code, threejs)
- ccore/Qwen3.5-4B-GLB-3D-Coder (code)
- nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B (speech recognition)
- burner22/numbat (maybe a specialized model)
- ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF (image-text-to-text but also coder) - maybe specialized code.
- Also maybe "facebook/sam3" is a vision model, not specialized code. But it's a segmentation model. Could be considered specialized. But we can put it under Multimodal.

- Also "Lightricks/LTX-2.5" is video generation, not specialized.

- Also "speridlabs/idol" is 3D generation.

- Also "Pika-Labs/Pika-H3-Flex" is video generation.

- Also "Viggle/Viggle-Remake" is video editing.

- Also "abenzerps/Qwen-Image-2.1-Turbo-Quantized" is image generation.

- Also "PrunaAI/P-H3-Image-Comfy" is image generation.

- Also "PrunaAI/P-H3-Image" is image generation.

- Also "black-forest-labs/flux-3-image-klein-comfy" is image editing.

- Also "facebook/sam3" is mask generation.

- Also "deepseek-ai/DeepSeek-V4.1-Flash-1017" is multimodal.

- Also "Qwen/Qwen3.8-27B" is multimodal.

- Also "moonshotai/Kimi-K3.1-Pro" is multimodal.

- Also "Lightricks/LTX-2.5" is video.

- Also "speridlabs/idol" is 3D.

- Also "ricursiveAI/Ripple-65B-Preview" is maybe a base LLM, not specialized.

- Also "xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic" is a language model.

- Also "NousResearch/Arete-27B" is language.

- Also "webAI-Official/TwIL-8B" is language.

- Also "LiquidAI/LFM3-1.7B" is language.

- Also "baidu/ERNIE-5.5-Flash-Base" is language.

- Also "mistralai/Mistral-Large-4-1T-A52B" is language.

- Also "deepseek-ai/DeepSeek-V4.1-Flash-1017" is language.

- Also "IST A-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF" is code.

- Also "Scantist/GLM-5.3-SLIM-GGUF" is a text generation model but maybe a specialized model? It's a mixture of experts. Could be considered a language model.

- Also "AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF" is a quantized model.

- Also "DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF" is a quantized model.

- Also "unsloth/Qwen3.8-Flash-Next-GGUF" is quantized.

- Also "mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF" is quantized.

- Also "FusionCow/Sulphur-3" is a fine-tune.

- Also "burner22/numbat" maybe specialized.

- Also "ricursiveAI/Ripple-65B-Preview" maybe a base model.

- Also "nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B" is speech.

- Also "ccore/Qwen3.5-4B-3D-Coder" is code.

- Also "ccore/Qwen3.5-4B-GLB-3D-Coder" is code.

Thus specialized: code models, speech recognition, maybe numbat.

📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF (GGUF)
- unsloth/Qwen3.8-Flash-Next-GGUF (GGUF)
- AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF (GGUF)
- mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF (GGUF)
- ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF (GGUF)
- Scantist/GLM-5.3-SLIM-GGUF (GGUF)
- abenzerps/Qwen-Image-2.1-Turbo-Quantized (quantized)
- PrunaAI/P-H3-Image-Comfy? Not quantized? It is text-to-image but maybe not quantized. The tags: diffusers, safetensors. But not GGUF. So maybe not.

- Also "FusionCow/Sulphur-3" is a fine-tune of MiniMax-H3. Could be considered a fine-tune.

- Also "burner22/numbat" maybe a fine-tune? Not sure.

- Also "ricursiveAI/Ripple-65B-Preview"? Not quantized.

- Also "xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic"? Could be a fine-tune.

But we can include the ones clearly quantized.

Thus we need to produce tables for each category.

We need to ensure each table has the correct columns and format.

We need to preserve the numbers exactly as given. For example, "1,393" for likes, "22,854" for downloads.

But note: The numbers may have commas for thousands. We need to copy them exactly. For numbers like 1,730, we keep the comma.

We also need to include the model name as a link. The link is the URL. The format: [model name](URL). The model name is the full model name with namespace. For example, [speridlabs/idol](https://huggingface.co/speridlabs/idol). The URL is given.

We also need to include the author column: the author string as in the input (e.g., "speridlabs").

The Likes and Downloads columns: we copy the numbers.

The Summary column: 2 sentences. We need to write a concise summary for each model.

We need to be careful to not exceed the column width? Not needed.

We need to ensure the tables are valid markdown.

Now we need to decide the ordering of models within each category. The instruction says "Trending Models — Organized by category. Under each category header, render a Markdown table with exactly these columns". It doesn't specify ordering. We can order by likes descending or as they appear. Probably best to order by likes descending within each category. But we need to be consistent.

We also need to ensure we have the correct number of models in each category.

Let's list each model with details:

1. speridlabs/idol
- Author: speridlabs
- Likes: 1,393
- Downloads: 22,854
- Pipeline: image-to-3d
- Tags: idol, gaussian-splatting, 3d, image-to-3d
- Summary: This model generates 3D assets from single images using Gaussian splatting, enabling rapid object reconstruction. Its high likes reflect growing interest in accessible 3D content creation.

But we need exactly 2 sentences. Let's craft:

"This image-to-3D model leverages Gaussian splatting to reconstruct detailed 3D objects from a single image, offering a fast path to digital asset creation. Its popularity on the hub underscores the demand for easy-to-use 3D generation tools."

That's two sentences.

2. xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic
- Author: xtools-at
- Likes: 855
- Downloads: 7,088
- Pipeline: text-generation
- Tags: transformers, safetensors, qwen3_5, image-text-to-text, text-generation-inference
- Summary: An uncensored variant of DeepSeek-V4-Pro built on Qwen3.5-9B, designed for unrestricted text generation. It gains traction for its open-weight approach and ability to handle diverse prompts without safety filters.

But note: It is text-generation but tags include image-text-to-text. But pipeline is text-generation. We'll treat as LLM.

3. moonshotai/Kimi-K3.1-Pro
- Author: moonshotai
- Likes: 1,730
- Downloads: 25,569
- Pipeline: image-text-to-text
- Tags: transformers, safetensors, kimi_k31, text-generation, compressed-tensors
- Summary: A multimodal large language model from Moonshot AI that processes both images and text, excelling in visual question answering and detailed image descriptions. Its high download count signals strong industry interest in versatile vision-language models.

4. ricursiveAI/Ripple-65B-Preview
- Author: ricursiveAI
- Likes: 404
- Downloads: 5,087
- Pipeline: N/A
- Tags: safetensors, ricursive, custom_code, license:apache-2.0, region:us
- Summary: A large 65B parameter language model preview from Recursive AI, offering a glimpse into next-generation conversational AI. Its open-weight license and custom code support make it attractive for research and development.

5. Lightricks/LTX-2.5
- Author: Lightricks
- Likes: 11,137
- Downloads: 2,661,026
- Pipeline: image-to-video
- Tags: diffusion-single-file, image-to-video, text-to-video, video-to-video, image-text-to-video
- Summary: Lightricks' LTX-2.5 is a diffusion-based video generation model that transforms images into dynamic videos with high fidelity and smooth motion. Its massive download numbers highlight the popularity of AI-driven video creation tools.

6. ccore/Qwen3.5-4B-3D-Coder
- Author: ccore
- Likes: 920
- Downloads: 254,053
- Pipeline: N/A
- Tags: safetensors, gguf, qwen3_5, code, threejs
- Summary: A compact 4B code generation model specialized in producing Three.js and 3D web code from natural language prompts. Its GGUF format enables efficient inference on consumer hardware, driving adoption among web developers.

7. Qwen/Qwen3.8-27B
- Author: Qwen
- Likes: 19,419
- Downloads: 7,668,187
- Pipeline: image-text-to-text
- Tags: transformers, safetensors, qwen3_5, image-text-to-text, conversational
- Summary: Qwen's latest 27B parameter multimodal model integrates visual understanding with conversational abilities, setting new benchmarks on vision-language tasks. Its enormous user base and download numbers make it a cornerstone for open-weight multimodal AI.

8. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
- Author: DavidAU
- Likes: 2,711
- Downloads: 1,553,252
- Pipeline: image-text-to-text
- Tags: gguf, unsloth, fine tune, heretic, uncensored
- Summary: A heavily fine-tuned, uncensored version of Qwen3.8-27B with extensive modifications for enhanced creativity and coding performance. The GGUF quantization allows it to run on limited VRAM, broadening access to powerful language models.

9. NousResearch/Arete-27B
- Author: NousResearch
- Likes: 294
- Downloads: 1,747
- Pipeline: text-generation
- Tags: safetensors, qwen3_5, nous-research, arete, supervised-fine-tuning
- Summary: Developed by Nous Research, Arete-27B is a supervised fine-tune of Qwen3.5 aimed at improving instruction following and reasoning. While niche, it demonstrates the community's efforts to refine open-weight models for specific tasks.

10. nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B
- Author: nvidia
- Likes: 3,107
- Downloads: 67,230
- Pipeline: automatic-speech-recognition
- Tags: nemo, safetensors, nemo_speechlm, text2text-generation, nvidia
- Summary: Nvidia's Nemotron-3.5-Transcribe is a large speech recognition model optimized for high-accuracy transcription across languages. Its integration with Nvidia's NeMo framework makes it a go-to solution for enterprise speech-to-text pipelines.

11. FusionCow/Sulphur-3
- Author: FusionCow
- Likes: 419
- Downloads: 1,003
- Pipeline: N/A
- Tags: minimax-h3, base_model:MiniMaxAI/MiniMax-H3, base_model:finetune:MiniMaxAI/MiniMax-H3
- Summary: A fine-tuned iteration of MiniMax-H3, Sulphur-3 refines the base model's capabilities for conversational and creative tasks. Its modest download count indicates a specialized tool for developers exploring MiniMax's architecture.

12. black-forest-labs/flux-3-image-klein-comfy
- Author: black-forest-labs
- Likes: 2,761
- Downloads: 1,167,959
- Pipeline: image-to-image
- Tags: diffusion-single-file, comfyui, image-generation, image-editing, flux
- Summary: Flux-3-Image-Klein-Comfy is a diffusion model tailored for image editing and high-quality image generation within ComfyUI. Its popularity stems from the growing demand for user-friendly, open-source image manipulation tools.

13. ccore/Qwen3.5-4B-GLB-3D-Coder
- Author: ccore
- Likes: 275
- Downloads: 33,641
- Pipeline: text-generation
- Tags: safetensors, gguf, qwen3_5, code, threejs
- Summary: Another Qwen3.5-4B variant focused on generating 3D web content and Three.js code, complementing the 3D-Coder series. Its GGUF format facilitates lightweight deployment for coding assistants.

14. webAI-Official/TwIL-8B
- Author: webAI-Official
- Likes: 234
- Downloads: 22,737
- Pipeline: text-generation
- Tags: transformers, safetensors, gguf, granite, text-generation
- Summary: TwIL-8B is an 8B parameter language model designed for conversational and instructional tasks, built on the Granite architecture. Its GGUF version broadens accessibility for local inference and custom deployments.

15. unsloth/Qwen3.8-Flash-Next-GGUF
- Author: unsloth
- Likes: 1,537
- Downloads: 1,548,621
- Pipeline: image-text-to-text
- Tags: gguf, unsloth, Qwen, image-text-to-text, base_model:Qwen/Qwen3.8-Flash-Next
- Summary: A quantized GGUF release of Qwen3.8-Flash-Next that maintains strong multimodal performance while reducing memory footprint. It is widely adopted for running large vision-language models on consumer GPUs.

16. PrunaAI/P-H3-Image-Comfy
- Author: PrunaAI
- Likes: 253
- Downloads: 625,136
- Pipeline: text-to-image
- Tags: diffusion-single-file, comfyui, text-to-image, image-to-image, image-generation
- Summary: PrunaAI's P-H3-Image-Comfy is a diffusion model optimized for text-to-image generation within ComfyUI workflows. Its high download count reflects the vibrant community around open-source image generation.

17. AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF
- Author: AtomicChat
- Likes: 391
- Downloads: 130,020
- Pipeline: text-generation
- Tags: gguf, atomic-chat, deepseek, deepseek41, gsq
- Summary: An uncensored, quantized version of DeepSeek-V4.1-Flash, engineered for unrestricted text generation and efficient inference. Its GSQ quantization scheme balances model quality and computational efficiency.

18. Viggle/Viggle-Remake
- Author: Viggle
- Likes: 195
- Downloads: 76,308
- Pipeline: video-to-video
- Tags: minimax-h3, gguf, video-editing, character-replacement, video-to-video
- Summary: Viggle-Remake leverages the MiniMax-H3 model for video editing tasks such as character replacement and scene manipulation. Its focus on interactive video editing positions it as a creative tool for content creators.

19. LiquidAI/LFM3-1.7B
- Author: LiquidAI
- Likes: 1,558
- Downloads: 73,562
- Pipeline: text-generation
- Tags: transformers, safetensors, lfm3, text-generation, liquid
- Summary: LiquidAI's LFM3-1.7B is a compact language model designed for efficient text generation with a focus on low-latency inference. Its lightweight architecture makes it suitable for edge devices and real-time applications.

20. facebook/sam3
- Author: facebook
- Likes: 6,111
- Downloads: 1,982,669
- Pipeline: mask-generation
- Tags: transformers, safetensors, sam3_video, feature-extraction, sam3
- Summary: Meta's SAM3 is a state-of-the-art vision model for generating segmentation masks across diverse objects and scenes. Its massive adoption underscores the importance of robust visual understanding in AI pipelines.

21. abenzerps/Qwen-Image-2.1-Turbo-Quantized
- Author: abenzerps
- Likes: 5,726
- Downloads: 76,804
- Pipeline: text-to-image
- Tags: gguf, qwen, image-generation, comfyui, comfyui-gguf
- Summary: A quantized version of Qwen's image generation model, optimized for high-quality text-to-image synthesis with reduced resource requirements. Its integration with ComfyUI makes it a popular choice for creators seeking efficient image generation.

22. ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF
- Author: ISTA-DASLab
- Likes: 206
- Downloads: 258,719
- Pipeline: image-text-to-text
- Tags: gguf, text-generation, image-text-to-text, vision, gsq
- Summary: A coder-focused variant of DeepSeek-V4.1-Flash, quantized to run efficiently on limited hardware while retaining coding abilities. Its specialization in code generation makes it a valuable tool for developers.

23. Scantist/GLM-5.3-SLIM-GGUF
- Author: Scantist
- Likes: 1,292
- Downloads: 4,938
- Pipeline: text-generation
- Tags: gguf, llama.cpp, glm_moe_dsa, moe, neural-architecture-search
- Summary: Scantist's GLM-5.3-SLIM is a mixture-of-experts model quantized for GGUF, offering a balance between model capacity and inference speed. Its innovative architecture attracts researchers exploring efficient large language models.

24. Pika-Labs/Pika-H3-Flex
- Author: Pika-Labs
- Likes: 516
- Downloads: 1,083
- Pipeline: image-to-video
- Tags: pika-h3-flex, diffusers, safetensors, video-generation, audio-video-generation
- Summary: Pika-Labs' Pika-H3-Flex is a diffusion-based video generation model that supports audio-video synthesis, enabling creators to produce synchronized multimedia content. Its flexible architecture supports a range of creative applications.

25. burner22/numbat
- Author: burner22
- Likes: 391
- Downloads: 10,197
- Pipeline: N/A
- Tags: safetensors, numbat, custom_code, 8-bit, modelopt
- Summary: Numbat is a specialized 8-bit quantized model designed for efficient inference and customization, leveraging ModelOpt techniques. It serves developers looking to deploy lightweight models in resource-constrained environments.

26. deepseek-ai/DeepSeek-V4.1-Flash-1017
- Author: deepseek-ai
- Likes: 5,409
- Downloads: 295,747
- Pipeline: image-text-to-text
- Tags: transformers, safetensors, deepseek_v41, text-generation, image-text-to-text
- Summary: DeepSeek-V4.1-Flash is a multimodal model that excels in both text and image understanding, offering state-of-the-art performance on vision-language benchmarks. Its high download numbers reflect widespread interest in open-weight multimodal AI.

27. baidu/ERNIE-5.5-Flash-Base
- Author:</think>



---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*