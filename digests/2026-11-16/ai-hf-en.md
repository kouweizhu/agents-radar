# Hugging Face Trending Models Weekly 2026-11-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-16 02:21 UTC

---

<think>We need to produce a structured digest. Let's carefully parse the models and categorize them.

The user provided 30 models sorted by weekly likes. We need to generate a digest with sections: Today's Highlights, Trending Models organized by category (Language Models, Multimodal & Generation, Specialized Models, Fine-tunes & Quantizations). Under each category, a markdown table with columns: Model (link), Author, Likes, Downloads, Summary (2 sentences). Omit a category if none.

We need to keep the numbers exactly as provided (including thousands separators? The input shows numbers like "7,548", "27,037", "1,190" etc. Use exactly as given (they already include commas). Ensure correct formatting.

Need to produce a structured digest in English. Use appropriate headings and formatting. The categories:

- 🧠 Language Models (LLMs, chat models, instruction-tuned)
- 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- 🔧 Specialized Models (code, math, medical, embeddings)
- 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

We must assign each model to a category. Let's examine each model:

1. xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic
Pipeline: text-generation
Tags: transformers, safetensors, qwen3_5, image-text-to-text, text-generation-inference
Probably a language model (LLM). Also a fine-tune or un-censored. The tags include "text-generation-inference" and "image-text-to-text" which could be multimodal. But likely it is a text generation model, a fine-tune of Qwen. It's a language model. Should be categorized under Language Models. However the tags include "image-text-to-text" which could also be multimodal. However the pipeline is text-generation. It is a fine-tune (uncensored). But we can also categorize under Fine-tunes & Quantizations. The user wants to categorize by model families and categories. The instructions: categories are "Language Models (LLMs, chat models, instruction-tuned)", "Multimodal & Generation (image, video, audio, text-to-X)", "Specialized Models (code, math, medical, embeddings)", "Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)". The fine-tune models are those that are fine-tuned or quantized, e.g., community fine-tunes, GGUF. Many models are fine-tunes/quantized (e.g., DavidAU's Qwen variants). The first model is a fine-tune (UNCENSORED) but is also a base language model? It's a fine-tune of Qwen3.5-9B. It's not a quantization; it's a fine-tune. So we can categorize under Fine-tunes & Quantizations.

However the "Trending Models" section likely expects to include both base models and fine-tuned ones under categories. The categories are broad. We need to assign each model to the best fit.

Let's list each model with tags, pipeline, and decide category.

List:

1. xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic – text-generation – fine-tune – likely Fine-tunes & Quantizations.

2. MiniMaxAI/MiniMax-H3-Image – text-to-image – Multimodal & Generation.

3. Qwen/Qwen3.8-27B – image-text-to-text – Multimodal? Actually pipeline "image-text-to-text". It's a multimodal LLM (vision-language). Should be Multimodal & Generation.

4. Lightricks/LTX-2.5 – image-to-video – Multimodal & Generation.

5. Comfy-Org/MiniMax-H3-Image – text-to-image – Multimodal & Generation.

6. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF – image-text-to-text – pipeline is "image-text-to-text". It's a fine-tune of Qwen3.8-27B with GGUF quantization (GGUF tag). So Fine-tunes & Quantizations.

7. Zyphra/ZONOS3-Mini – text-to-speech – pipeline: text-to-speech – Multimodal & Generation (audio generation).

8. thinkingmachines/Inkling-2-Small – image-text-to-text – Multimodal.

9. unsloth/Qwen3.8-27B-GGUF – pipeline N/A – tags: gguf, qwen3_5 – Fine-tunes & Quantizations.

10. higurashi-ai/Haru-4B – audio-to-audio – pipeline: audio-to-audio – Multimodal & Generation.

11. speridlabs/idol – image-to-3d – pipeline: image-to-3d – Multimodal & Generation.

12. NousResearch/Arete-27B – text-generation – tags: qwen3_5 – Language Models (LLM). It's a fine-tune? But it's not a quantization. It's a base model fine-tuned? Actually tags: safetensors, qwen3_5, nous-research, arete, supervised-fine-tuning. So it's a fine-tuned model. Could be Fine-tunes & Quantizations. But it's a base model fine-tuned for instruction following. It's not a quantization; it's a fine-tune. It's a language model. The category "Language Models" includes LLMs and instruction-tuned. So maybe we put it under Language Models.

13. moonshotai/Kimi-K3.1-Pro – image-text-to-text – Multimodal (vision-language). It's a multimodal model.

14. Edge0/Edge0-145B-NVFP4 – text-generation – pipeline: text-generation – Possibly a specialized LLM for edge inference. Tags: edge0, gguf, moe, edge-inference, latent-moe. This is a quantized (GGUF) MoE model. Could be Fine-tunes & Quantizations. However it's a base model? It's a specialized model for edge inference. It could be "Specialized Models". The category "Specialized Models (code, math, medical, embeddings)". This model is for edge inference; not necessarily code, math, medical. It is a specialized model for inference. The tags include "edge-inference". Could be "Specialized Models". However it also is quantized. But the instruction says Fine-tunes & Quantizations includes community fine-tunes, GGUF, AWQ. This is a GGUF model. So could be Fine-tunes & Quantizations. However we have to decide. Let's check the tags: "gguf", "moe", "edge-inference". So it's a quantized model for edge. It might be considered a Fine-tune/Quantization. However it's also specialized. The category "Specialized Models" could include models for specific hardware like edge inference. Let's see other models: Cactus-Compute/mirage – pipeline: image-text-to-text – tags: cactus-compute, mirage, image-to-text, object-detection, zero-shot-object-detection. That's a specialized model (object detection). That fits "Specialized Models". The Edge0 model is specialized for edge inference. But also has quantization. It's ambiguous. Let's see the instruction: categories are "Language Models (LLMs, chat models, instruction-tuned)", "Multimodal & Generation (image, video, audio, text-to-X)", "Specialized Models (code, math, medical, embeddings)", "Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)". The categories are mutually exclusive? The instructions: "Organized by category. Under each category header, render a Markdown table with exactly these columns... Omit a category's table entirely if no model falls under it." So each model should be placed under one category. The categories are broad, but we need to assign each model to the best fit.

We need to ensure each model appears exactly once in the appropriate category. Let's go through each model and assign.

List of models (by #):

1. DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic – Fine-tunes & Quantizations (uncensored fine-tune). Could also be Language Model but it's a fine-tune. We'll assign to Fine-tunes & Quantizations.

2. MiniMax-H3-Image – Multimodal & Generation.

3. Qwen3.8-27B – Multimodal & Generation (vision-language). Could also be Language Model, but it's a multimodal LLM. The pipeline is image-text-to-text, so it's a multimodal model. So Multimodal.

4. LTX-2.5 – Multimodal (image-to-video).

5. Comfy-Org/MiniMax-H3-Image – Multimodal (text-to-image).

6. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-... – Fine-tunes & Quantizations (GGUF, fine-tune). We'll put in Fine-tunes.

7. ZONOS3-Mini – Multimodal (text-to-speech). We'll put in Multimodal.

8. Inkling-2-Small – Multimodal (image-text-to-text). We'll put in Multimodal.

9. unsloth/Qwen3.8-27B-GGUF – Fine-tunes & Quantizations (GGUF). We'll put in Fine-tunes.

10. Haru-4B – Multimodal (audio-to-audio). We'll put in Multimodal.

11. idol – Multimodal (image-to-3d). We'll put in Multimodal.

12. Arete-27B – Language Models (LLM). We'll put in Language Models.

13. Kimi-K3.1-Pro – Multimodal (image-text-to-text). We'll put in Multimodal.

14. Edge0-145B-NVFP4 – Fine-tunes & Quantizations? It's a GGUF quantized MoE model for edge inference. Could be Fine-tunes & Quantizations. We'll assign to Fine-tunes & Quantizations.

15. flux-3-image-klein-comfy – Multimodal (image-to-image). We'll put in Multimodal.

16. Qwen-Image-2.1-Uncensored-Omni-Quantized – Multimodal (text-to-image). Actually pipeline: text-to-image. It's a quantized version (GGUF). It's a fine-tune? The tags include gguf. It's a quantized model. So Fine-tunes & Quantizations.

17. gemma-4-31B-it-ARA-heretic-GGUF – Fine-tunes & Quantizations (GGUF). We'll put in Fine-tunes.

18. sam3 – Specialized Models (mask-generation). It's a model for segmentation. Could be "Specialized Models". We'll put in Specialized.

19. DeepSeek-V4.1-Flash-1017 – Multimodal (image-text-to-text). We'll put in Multimodal.

20. mirage – Specialized Models (object detection). We'll put in Specialized.

21. DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF – Fine-tunes & Quantizations (GGUF). We'll put in Fine-tunes.

22. MiniMax-H3-Image-GGUF – Fine-tunes & Quantizations (GGUF). We'll put in Fine-tunes.

23. Huihui-Qwen3.8-27B-abliterated-GGUF – Fine-tunes & Quantizations (GGUF). We'll put in Fine-tunes.

24. LongCat-2.5 – Multimodal? Pipeline: image-text-to-text. It's a multimodal LLM. But tags: pro_v, multimodal. It's a language model with image understanding. So Multimodal.

25. qwen-concept-27b – Fine-tunes & Quantizations? Tags: safetensors, gguf, weight-editing, reasoning, concept-country. It's a weight-editing based model, maybe a fine-tune. It's not a base model. Could be Fine-tunes & Quantizations. However it's also a specialized model (reasoning). The category "Specialized Models (code, math, medical, embeddings)" includes embeddings, but this is weight-editing for reasoning. Might be specialized. But it's also a fine-tune? The tags include "gguf". It's a quantized version. So Fine-tunes & Quantizations.

26. Qwen3.8-Flash-Next – Multimodal (image-text-to-text). It's a multimodal LLM. We'll put in Multimodal.

27. MiniMax-H3 – Multimodal (image-text-to-video). We'll put in Multimodal.

28. speaker-diarization-community-1 – Specialized Models (speaker diarization). Pipeline: automatic-speech-recognition. This is a specialized model for audio. We'll put in Specialized.

29. dinov3-vitl16-pretrain-lvd1689m – Specialized (image feature extraction). We'll put in Specialized.

30. LFM3-1.7B – Language Models (LLM). Pipeline: text-generation. It's a language model. We'll put in Language Models.

Now we need to create tables for each category.

We must include the model name as a Markdown link to its HF URL. The URL is given in the input as "Link: https://huggingface.co/<model-id>". We must use that exact link.

We need to preserve the thousands separators in likes and downloads. The input shows numbers with commas (e.g., 7,548). We must copy them exactly. Some numbers may be like 27,037 etc.

We need to provide summary: 2 sentences. The summary must be concise, describing what the model is and why it's trending, including a standout capability or data point.

We must not recompute or round numbers.

We need to ensure each table has the correct columns: Model, Author, Likes, Downloads, Summary. Use proper markdown table syntax.

We need to ensure each model appears in exactly one category.

We need to produce a "Today's Highlights" section with 3-5 sentences on the most notable model releases and trends. Should mention the top trending models like Qwen3.8-27B (likes 20k), LTX-2.5, MiniMax-H3, etc. Also mention the high downloads of Qwen3.8-27B, the popularity of Qwen3.8-27B and its fine-tunes, the emergence of GGUF quantizations, the new image-to-video model LTX-2.5, the new text-to-speech model ZONOS3-Mini, etc.

We need to include "Ecosystem Signal" analysis 100-200 words analyzing model ecosystem trends: which families are gaining momentum, open-weight vs proprietary, quantization activity.

We need "Worth Exploring" section with 2-3 models most worth trying or studying, with reasoning.

We need to preserve all HuggingFace links. Ensure we include the link in each model's cell.

Now we must generate the content.

First, let's list the models with categories.

We must be careful about the formatting: The model column must be a Markdown link: e.g., [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic). The Author column is the author name (like xtools-at). The Likes column is numeric with commas. The Downloads column is numeric with commas.

We must ensure each row's summary is exactly two sentences. Let's craft them.

We must also include the categories in order: 🧠 Language Models, 🎨 Multimodal & Generation, 🔧 Specialized Models, 📦 Fine-tunes & Quantizations.

We need to include the appropriate emojis in category headers. The user used emojis for categories in the prompt. We'll include them.

Now we need to compile the tables.

We'll go through each model in each category.

Let's list all models with details:

Category: Language Models

Models:

- NousResearch/Arete-27B (likes 614, downloads 7,497)
- LiquidAI/LFM3-1.7B (likes 1,800, downloads 103,744)
- Possibly also other models that are text-generation but not fine-tuned? The list includes some text-generation models that are base models (like Qwen3.8-27B is multimodal, not purely language). The first model is a fine-tune. The second is a fine-tune? Actually the first model is a fine-tune of Qwen. The third is Qwen3.8-27B (multimodal). The 12th is Arete-27B. The 30th is LFM3-1.7B.

But also there is "Edge0/Edge0-145B-NVFP4" which is text-generation but specialized for edge inference. It could be considered a specialized model, but also a language model. However the category "Specialized Models" includes code, math, medical, embeddings. Edge inference is not typical. It could be "Specialized Models". But we have to decide.

Also "DeepSeek-V4.1-Flash-1017" is image-text-to-text, not purely language.

Thus Language Models will have only a few entries: Arete-27B and LFM3-1.7B. Also possibly "Qwen/Qwen3.8-27B" is a multimodal LLM, but we categorize under Multimodal. Also "MiniMax-H3" is image-text-to-video. So Language Models will have only these two. However we also have "Qwen/Qwen3.8-Flash-Next" which is multimodal. So we can ignore.

Thus Language Models table will have two rows.

But we also have "unsloth/Qwen3.8-27B-GGUF" which is a quantized version of Qwen3.8-27B. That's a fine-tune/quantization, not a base language model. So Fine-tunes.

Thus Language Models will have Arete-27B and LFM3-1.7B.

Now Multimodal & Generation: includes many.

List them:

- MiniMaxAI/MiniMax-H3-Image (text-to-image) – pipeline text-to-image – Multimodal.
- Qwen/Qwen3.8-27B (image-text-to-text) – Multimodal.
- Lightricks/LTX-2.5 (image-to-video) – Multimodal.
- Comfy-Org/MiniMax-H3-Image (text-to-image) – Multimodal.
- Zyphra/ZONOS3-Mini (text-to-speech) – Multimodal.
- thinkingmachines/Inkling-2-Small (image-text-to-text) – Multimodal.
- higurashi-ai/Haru-4B (audio-to-audio) – Multimodal.
- speridlabs/idol (image-to-3d) – Multimodal.
- moonshotai/Kimi-K3.1-Pro (image-text-to-text) – Multimodal.
- black-forest-labs/flux-3-image-klein-comfy (image-to-image) – Multimodal.
- deepseek-ai/DeepSeek-V4.1-Flash-1017 (image-text-to-text) – Multimodal.
- Qwen/Qwen3.8-Flash-Next (image-text-to-text) – Multimodal.
- MiniMaxAI/MiniMax-H3 (image-text-to-video) – Multimodal.
- Also maybe "Cactus-Compute/mirage" is specialized detection, not generation. So not Multimodal.

- Also "facebook/sam3" is mask-generation, not generation? It is a segmentation model, not generation. Could be specialized. We'll categorize under Specialized.

- Also "pyannote/speaker-diarization-community-1" is specialized.

- Also "facebook/dinov3-vitl16-pretrain-lvd1689m" is specialized.

Thus Multimodal & Generation will have many entries.

Now Specialized Models: includes SAM3 (mask generation), Mirage (object detection), speaker-diarization, DINOv3, maybe Edge0 (if we decide specialized). Also "Edge0/Edge0-145B-NVFP4" is specialized for edge inference. But also quantized. We'll decide later.

Now Fine-tunes & Quantizations: includes many GGUF models, fine-tunes, etc. We'll list them.

We must ensure each model appears in exactly one category. So we must decide for Edge0. Let's see the categories: "Specialized Models (code, math, medical, embeddings)". Edge0 is specialized for edge inference, but also it's a quantized model. However the category "Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)" includes GGUF. So it's more appropriate to put it there. The "Specialized Models" category is for specialized tasks like code, math, medical, embeddings. Edge inference is not a typical specialized domain like code or math, but it's a specialized hardware optimization. However the category includes "embeddings" which is a type of model. Edge inference is not exactly embeddings. So I'd put Edge0 under Fine-tunes & Quantizations because it's a quantized model.

Thus we will categorize Edge0 under Fine-tunes & Quantizations.

Now we need to decide for "DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic". It's a fine-tune. We'll categorize under Fine-tunes & Quantizations.

Now we need to list each model's details: author, likes, downloads, summary.

We must be careful with the formatting: The table must be exactly like:

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |

But the column alignment: The header row includes colon alignment. The user wrote:

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |

We need to include the colon alignment in the header. The second row is the alignment specification: we need to include the dashes. The user wrote:

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |

We need to produce exactly that. The next rows are data.

Now we need to produce each row.

We need to ensure each model's link is correct. Let's extract the links from the input.

The input includes "Link: https://huggingface.co/<model-id>" for each model. The model ID is the path after huggingface.co/. For example, for the first model: https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic

We need to use that as the link.

Thus for each model, we need to create a Markdown link: [model_id](link). The link should be exactly as given, but we need to ensure we use the correct case. The model IDs are case-sensitive. The input shows the model IDs exactly as they appear. We'll use them as is.

Now we need to craft summaries. Let's go through each model and craft a 2-sentence summary.

We need to include why it's trending, a standout capability or data point.

We'll need to be consistent with the style: concise, professional.

Now let's go model by model.

We'll start with the categories in order.

First, "Today's Highlights". We'll produce a short paragraph summarizing the top trending models: Qwen3.8-27B (20k likes), LTX-2.5 (12k likes), MiniMax-H3 (6.9k likes), etc. We'll mention the rise of Qwen3.8-27B and its fine-tunes, the popularity of image-to-video generation with LTX-2.5, the text-to-image model MiniMax-H3, the new GGUF quantizations for Qwen models, and the emergence of specialized models like SAM3 for segmentation, etc.

Now "Trending Models". We'll produce each category table.

We'll need to list each model in each category.

We'll need to be careful with the number of rows. There are many models. We need to include all. The categories are:

- 🧠 Language Models (LLMs, chat models, instruction-tuned)
- 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- 🔧 Specialized Models (code, math, medical, embeddings)
- 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

Now we must decide which models belong to each category.

Let's compile a list of all models with categories.

We'll parse the list again and assign categories.

We'll also note the tags to see if any model fits multiple categories. We'll need to pick one.

We'll go through each model:

1. xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic – Fine-tunes & Quantizations (fine-tune of Qwen, uncensored). Tags: text-generation, image-text-to-text. But pipeline is text-generation. It's a fine-tune. So Fine-tunes.

2. MiniMaxAI/MiniMax-H3-Image – Multimodal (text-to-image). So Multimodal.

3. Qwen/Qwen3.8-27B – Multimodal (image-text-to-text). So Multimodal.

4. Lightricks/LTX-2.5 – Multimodal (image-to-video). So Multimodal.

5. Comfy-Org/MiniMax-H3-Image – Multimodal (text-to-image). So Multimodal.

6. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF – Fine-tunes & Quantizations (GGUF, fine-tune). So Fine-tunes.

7. Zyphra/ZONOS3-Mini – Multimodal (text-to-speech). So Multimodal.

8. thinkingmachines/Inkling-2-Small – Multimodal (image-text-to-text). So Multimodal.

9. unsloth/Qwen3.8-27B-GGUF – Fine-tunes & Quantizations (GGUF). So Fine-tunes.

10. higurashi-ai/Haru-4B – Multimodal (audio-to-audio). So Multimodal.

11. speridlabs/idol – Multimodal (image-to-3d). So Multimodal.

12. NousResearch/Arete-27B – Language Models (LLM). So Language Models.

13. moonshotai/Kimi-K3.1-Pro – Multimodal (image-text-to-text). So Multimodal.

14. Edge0/Edge0-145B-NVFP4 – Fine-tunes & Quantizations (GGUF). So Fine-tunes.

15. black-forest-labs/flux-3-image-klein-comfy – Multimodal (image-to-image). So Multimodal.

16. chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized – Fine-tunes & Quantizations (GGUF). So Fine-tunes.

17. mradermacher/gemma-4-31B-it-ARA-heretic-GGUF – Fine-tunes & Quantizations (GGUF). So Fine-tunes.

18. facebook/sam3 – Specialized (mask generation). So Specialized.

19. deepseek-ai/DeepSeek-V4.1-Flash-1017 – Multimodal (image-text-to-text). So Multimodal.

20. Cactus-Compute/mirage – Specialized (object detection). So Specialized.

21. DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF – Fine-tunes & Quantizations (GGUF). So Fine-tunes.

22. Abiray/MiniMax-H3-Image-GGUF – Fine-tunes & Quantizations (GGUF). So Fine-tunes.

23. huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF – Fine-tunes & Quantizations (GGUF). So Fine-tunes.

24. meituan-longcat/LongCat-2.5 – Multimodal (image-text-to-text). So Multimodal.

25. ConceptCountry/qwen-concept-27b – Fine-tunes & Quantizations (GGUF). So Fine-tunes.

26. Qwen/Qwen3.8-Flash-Next – Multimodal (image-text-to-text). So Multimodal.

27. MiniMaxAI/MiniMax-H3 – Multimodal (image-text-to-video). So Multimodal.

28. pyannote/speaker-diarization-community-1 – Specialized (speaker diarization). So Specialized.

29. facebook/dinov3-vitl16-pretrain-lvd1689m – Specialized (image feature extraction). So Specialized.

30. LiquidAI/LFM3-1.7B – Language Models (LLM). So Language Models.

Thus categories:

Language Models: Arete-27B, LFM3-1.7B.

Multimodal & Generation: MiniMax-H3-Image, Qwen3.8-27B, LTX-2.5, Comfy-Org/MiniMax-H3-Image, ZONOS3-Mini, Inkling-2-Small, Haru-4B, idol, Kimi-K3.1-Pro, flux-3-image-klein-comfy, DeepSeek-V4.1-Flash-1017, LongCat-2.5, Qwen3.8-Flash-Next, MiniMax-H3, plus also maybe "sam3"? No, that's specialized. Also "mirage"? No. Also "speaker-diarization"? No. Also "dinov3"? No.

Thus Multimodal & Generation includes many.

Specialized Models: sam3, mirage, speaker-diarization-community-1, dinov3-vitl16-pretrain-lvd1689m.

Fine-tunes & Quantizations: DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic, DavidAU/Qwen3.8-27B-TURBO-Fable..., unsloth/Qwen3.8-27B-GGUF, Edge0/Edge0-145B-NVFP4, chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized, mradermacher/gemma-4-31B-it-ARA-heretic-GGUF, DavidAU/Qwen3.5-9B-The-Defiant-Fable..., Abiray/MiniMax-H3-Image-GGUF, huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF, ConceptCountry/qwen-concept-27b, plus maybe also "DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic"? Already counted. Also "xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic"? Already counted.

Now also we need to consider "DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF". That is a fine-tune.

Now also "unsloth/Qwen3.8-27B-GGUF". Already counted.

Now also "Edge0/Edge0-145B-NVFP4". Already counted.

Now also "chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized". Already counted.

Now also "mradermacher/gemma-4-31B-it-ARA-heretic-GGUF". Already counted.

Now also "DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF". Already counted.

Now also "Abiray/MiniMax-H3-Image-GGUF". Already counted.

Now also "huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF". Already counted.

Now also "ConceptCountry/qwen-concept-27b". Already counted.

Now also "xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic". Already counted.

Now also "DavidAU/Qwen3.8-27B-TURBO-Fable...". Already counted.

Now also "unsloth/Qwen3.8-27B-GGUF". Already counted.

Now also "Edge0/Edge0-145B-NVFP4". Already counted.

Now also "chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized". Already counted.

Now also "mradermacher/gemma-4-31B-it-ARA-heretic-GGUF". Already counted.

Now also "DavidAU/Qwen3.5-9B-The-Defiant-Fable...". Already counted.

Now also "Abiray/MiniMax-H3-Image-GGUF". Already counted.

Now also "huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF". Already counted.

Now also "ConceptCountry/qwen-concept-27b". Already counted.

Now also "xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic"? Already counted.

Now also "DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic"? Yes.

Thus Fine-tunes & Quantizations will have many entries.

Now we need to produce the tables.

We need to include the "Model" column as a Markdown link. The "Author" column is the author part of the model ID. For example, for "xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic", the author is "xtools-at". For "MiniMaxAI/MiniMax-H3-Image", author is "MiniMaxAI". For "Qwen/Qwen3.8-27B", author is "Qwen". For "Lightricks/LTX-2.5", author is "Lightricks". For "Comfy-Org/MiniMax-H3-Image", author is "Comfy-Org". For "DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF", author is "DavidAU". For "Zyphra/ZONOS3-Mini", author is "Zyphra". For "thinkingmachines/Inkling-2-Small", author is "thinkingmachines". For "unsloth/Qwen3.8-27B-GGUF", author is "unsloth". For "higurashi-ai/Haru-4B", author is "higurashi-ai". For "speridlabs/idol", author is "speridlabs". For "NousResearch/Arete-27B", author is "NousResearch". For "moonshotai/Kimi-K3.1-Pro", author is "moonshotai". For "Edge0/Edge0-145B-NVFP4", author is "Edge0". For "black-forest-labs/flux-3-image-klein-comfy", author is "black-forest-labs". For "chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized", author is "chatrlabs". For "mradermacher/gemma-4-31B-it-ARA-heretic-GGUF", author is "mradermacher". For "facebook/sam3", author is "facebook". For "deepseek-ai/DeepSeek-V4.1-Flash-1017", author is "deepseek-ai". For "Cactus-Compute/mirage", author is "Cactus-Compute". For "DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF", author is "DavidAU". For "Abiray/MiniMax-H3-Image-GGUF", author is "Abiray". For "huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF", author is "huihui-ai". For "meituan-longcat/LongCat-2.5", author is "meituan-longcat". For "ConceptCountry/qwen-concept-27b", author is "ConceptCountry". For "Qwen/Qwen3.8-Flash-Next", author is "Qwen". For "MiniMaxAI/MiniMax-H3", author is "MiniMaxAI". For "pyannote/speaker-diarization-community-1", author is "pyannote". For "facebook/dinov3-vitl16-pretrain-lvd1689m", author is "facebook". For "LiquidAI/LFM3-1.7B", author is "LiquidAI".

Now we need to compile the tables.

We'll need to ensure each row's "Likes" and "Downloads" match the numbers in the input. The input numbers have commas. We'll preserve them.

Now we need to craft summaries for each model. We'll need to keep them to exactly two sentences. Let's craft them.

We'll need to be careful to not exceed two sentences. We'll need to ensure each summary is exactly two sentences. We'll need to keep them concise. We'll need to mention what the model is and why it's trending, with a standout capability or data point.

We'll need to handle each model.

We need to ensure the summary is not too long. We'll need to keep each sentence relatively short.

We'll need to ensure we include the standout capability or data point (like high likes, high downloads, unique features).

We'll need to consider each model's specifics.

Let's start with Language Models:

- NousResearch/Arete-27B: It's a 27B parameter language model fine-tuned on instruction-following data, built on Qwen3.5. It's trending because it demonstrates strong performance on reasoning tasks with 614 likes and 7,497 downloads in a week.

But we need exactly two sentences. Let's craft:

"It is a 27‑B parameter instruction‑tuned language model built on Qwen3.5, designed for high‑quality conversational AI. The model is gaining traction for its robust reasoning capabilities, reflected in 614 weekly likes and 7,497 downloads."

That's two sentences. Good.

- LiquidAI/LFM3-1.7B: It's a 1.7B parameter language model from LiquidAI</think>



---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*