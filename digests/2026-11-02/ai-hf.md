# Hugging Face 热门模型周报 2026-11-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-02 01:45 UTC

---

<think>The user wants me to translate the Hugging Face Trending Models Digest into Simplified Chinese. I need to:

1. Translate the headings
2. Translate the summary descriptions in the tables
3. Translate the narrative sections (Ecosystem Signal, Worth Exploring)
4. Keep all technical terms, model names, URLs, numbers, and formatting exactly as they are

Let me go through this carefully:

**Headings:**
- Today's Highlights → 今日焦点
- Trending Models → 热门模型
- Language Models (LLMs, chat models, instruction-tuned) → 语言模型（LLM、聊天模型、指令微调）
- Multimodal & Generation (image, video, audio, text-to-X) → 多模态与生成（图像、视频、音频、文本到X）
- Specialized Models (code, math, medical, embeddings, OCR, speech) → 专用模型（代码、数学、医学、嵌入、OCR、语音）
- Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ) → 微调与量化（社区微调、GGUF、AWQ）
- Ecosystem Signal → 生态信号
- Worth Exploring → 值得探索

**Narrative translation:**

"The week sees **Qwen3.8-27B** dominating with nearly 7.9M downloads and 18,929 likes, cementing Alibaba's open multimodal strategy. **Lightricks/LTX-2.5** (image-to-video) explodes with 2.4M downloads, reflecting surging consumer interest in AI video generation. The **LiquidAI LFM3 family** appears five times across categories, signaling a multi-modal foundation model strategy gaining developer traction. Meanwhile, **facebook/sam3** reaches 5,635 likes as video segmentation becomes a hot research frontier, and **DeepSeek** continues its aggressive open-weight releases with V4.1 variants appearing in both base and quantized forms."


本周，**Qwen3.8-27B**以近790万下载量和18,929个赞稳居榜首，巩固了阿里巴巴的开放多模态战略。**Lightricks/LTX-2.5**（图像转视频）下载量激增至240万，反映出消费者对AI视频生成的浓厚兴趣。**LiquidAI LFM3系列**在多个类别中出现五次，表明其多模态基础模型策略正在获得开发者关注。同时，**facebook/sam3**获得5,635个赞，视频分割成为研究热点，**DeepSeek**继续积极发布开放权重模型，V4.1版本同时推出基础版和量化版。

The trending landscape reveals several converging dynamics. **LiquidAI's LFM3 family** has emerged as the most diversified foundation model line—spanning language (1.7B), vision-language (2B), audio (2B), and omni (2B) variants—each receiving independent model cards and community engagement. This signals a modular "pick your modality" strategy competing with monolithic giants.

热门趋势揭示了几个融合动态。**LiquidAI的LFM3系列**已成为最多样化的基础模型系列，涵盖语言（1.7B）、视觉语言（2B）、音频（2B）和全能（2B）变体，每个都获得了独立的模型卡片和社区关注。这标志着一种模块化的"选择你的模态"策略，正在与巨头竞争。

**Qwen** continues its open-weight expansion with the 3.8-27B multimodal model achieving near-8M downloads, outpacing every other model by an order of magnitude. Combined with the quantized Qwen-Image variant (2.5M downloads), Alibaba is capturing both research and creative deployment markets.

**Qwen**继续扩展其开放权重，3.8-27B多模态模型实现近800万下载量，超过其他模型一个数量级。结合量化版Qwen-Image变体（250万下载量），阿里巴巴正在同时占领研究和创意部署市场。

The quantization ecosystem is thriving: DeepSeek V4.1 GGUF alone hit 2.3M downloads, while LFM3-1.7B-GGUF reached 150K. This suggests the open-weight community has fully embraced llama.cpp-compatible formats for consumer GPU inference.

量化生态系统蓬勃发展：仅DeepSeek V4.1 GGUF就达到230万下载量，而LFM3-1.7B-GGUF达到15万。这表明开放权重社区已完全接受llama.cpp兼容格式，用于消费级GPU推理。

Video generation is the fastest-growing modality—LTX-2.5's 2.4M downloads and Pika's LoRA-flexible architecture indicate the market is maturing beyond image generation toward temporal content creation.

视频生成是增长最快的模态——LTX-2.5的240万下载量和Pika的LoRA灵活架构表明市场正在从图像生成成熟到时间内容创作。

**1. [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The standout download leader. Study its architecture for insights into how Alibaba achieves strong multimodal performance at 27B parameters, and benchmark it against GPT-4V and Claude 3.5 for practical deployment decisions.

**1. [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 突出的下载量领先者。研究其架构以了解阿里巴巴如何在270亿参数下实现强大的多模态性能，并与GPT-4V和Claude 3.5进行基准测试以支持实际部署决策。

**2. [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — At 2.3M downloads, this is the most popular quantized VLM on the platform. Its GSQ+RCO quantization methodology deserves study for anyone building efficient inference pipelines.

**2. [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — 230万下载量，这是平台上最受欢迎的量化VLM。其GSQ+RCO量化方法值得构建高效推理管道的人研究。

**3. [facebook/sam3](https://huggingface.co/facebook/sam3)** — With 1.9M downloads, SAM3 represents the cutting edge of video segmentation. Its emerging capabilities for zero-shot video object tracking make it essential for computer vision researchers building video understanding pipelines.

**3. [facebook/sam3](https://huggingface.co/facebook/sam3)** — 190万下载量，SAM3代表了视频分割的前沿。其新兴的零样本视频对象跟踪能力对于构建视频理解管道的计算机视觉研究人员至关重要。

Now I'll work through each model's description to ensure accurate translations.</think>

# Hugging Face 热门模型周报

## 今日焦点

本周，**Qwen3.8-27B** 以近 790 万下载量和 18,929 个点赞稳居榜首，巩固了阿里巴巴的开放多模态战略。**Lightricks/LTX-2.5**（图像转视频）下载量激增至 240 万，反映出消费者对 AI 视频生成的浓厚兴趣。**LiquidAI LFM3 系列**在各类别中出现了五次，标志着其多模态基础模型策略正在获得开发者的广泛关注。同时，**facebook/sam3** 获得 5,635 个点赞，视频分割成为研究热点，**DeepSeek** 继续积极发布开放权重模型，V4.1 版本同时推出基础版和量化版。

---

## 热门模型

### 🧠 语言模型（LLM、聊天模型、指令微调）

| 模型 | 作者 | 点赞 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 971 | 15,795 | 330 亿参数中文语言模型，针对指令遵循和聊天场景优化；在 NLP 任务基准测试中表现强劲。 |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 947 | 16,707 | 40 亿参数文本生成模型，针对低资源部署场景微调；因高效推理能力受到关注。 |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,294 | 26,703 | 开源安全调优对话模型；在推理和聊天基准测试中表现均衡。 |
| [Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview) | Diffuspace | 204 | 2,352 | MoE 增强型 350 亿参数预览模型，活跃参数 30 亿；因大规模生成的高效性吸引关注。 |

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 点赞 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,929 | 7,892,866 | 阿里巴巴最新 270 亿参数多模态模型，支持视觉理解；凭借惊人的下载速度和开放权重可访问性领跑趋势。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,226 | 2,431,846 | 文本到视频和图像到视频生成模型；240 万下载量反映出消费者对 AI 视频工具的爆发式需求。 |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 4,314 | 170,353 | Flash 注意力优化的多模态模型，支持图像文本输入；凭借快速推理和强劲 VLM 基准测试表现登榜。 |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,452 | 4,576 | Mistral 旗舰 1 万亿参数多模态模型；支持 vLLM/SGLang 部署优化。 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,267 | 970,633 | ComfyUI 工作流 Flux 3 图像生成变体；97 万下载量显示强大的社区采用率。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,474 | 2,548,468 | 未经审查的量化版 Qwen 图像生成模型；250 万下载量表明对无限制创意工具的需求旺盛。 |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 312 | 404 | 支持 LoRA 的灵活视频生成模型；面向需要定制化视频合成的创作者。 |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 302 | 4,194 | 图像到 3D 高斯 splatting 模型；因单图像实时 3D 资产生成而备受关注。 |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 271 | 8,376 | 任意到任意多模态模型，支持文本、图像、音频、视频；展示统一 token 流架构。 |
| [LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B) | LiquidAI | 200 | 9,121 | LFM3 系列视觉语言变体；凭借紧凑的多模态推理能力登榜。 |
| [LiquidAI/LFM3-Audio-2B](https://huggingface.co/LiquidAI/LFM3-Audio-2B) | LiquidAI | 177 | 5,688 | LFM3 音频专用变体，用于 ASR 和音频理解；体现流动基础模型的模块化特性。 |
| [LiquidAI/d1-2B](https://huggingface.co/LiquidAI/d1-2B) | LiquidAI | 156 | 4,256 | 紧凑型 20 亿参数多模态模型；因边缘端视觉语言任务部署可行性受到关注。 |

### 🔧 专用模型（代码、数学、医学、嵌入、OCR、语音）

| 模型 | 作者 | 点赞 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,635 | 1,891,055 | Meta 的第三代任意分割模型，支持视频分割；190 万下载量表明视频理解成为研究前沿。 |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 604 | 29,364 | NVIDIA 300 亿参数语音转录模型；凭借高准确率 ASR 和 CUDA 优化值得关注。 |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 520 | 109,519 | 百度下一代 OCR，支持文档理解；10.9 万下载量表明文本提取需求持续旺盛。 |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 483 | 44,825 | Qwen3.5 微调版，专门用于 3D/Three.js 代码生成；连接视觉创意和 Web 开发。 |
| [Edge0/Audio8-TTS-Realistic-0.6b](https://huggingface.co/Edge0/Audio8-TTS-Realistic-0.6b) | Edge0 | 207 | 4,613 | 6 亿参数逼真文本转语音模型；凭借轻量级语音合成能力受到关注。 |
| [openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0) | openbmb | 383 | 3,513 | 轻量级 OCR 和文档解析模型；因端侧文档智能能力登榜。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载量 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 534 | 2,294,642 | GSQ+RCO 量化 DeepSeek V4.1 GGUF 版本；230 万下载量显示对量化 VLM 的巨大需求。 |
| [AtomicChat/LFM3-1.7B-Uncensored-GGUF](https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF) | AtomicChat | 177 | 46,155 | LFM3-1.7B 未经审查的 GGUF 量化版本；服务需要无限制生成的开发者。 |
| [LiquidAI/LFM3-1.7B-GGUF](https://huggingface.co/LiquidAI/LFM3-1.7B-GGUF) | LiquidAI | 172 | 150,260 | 官方 LFM3-1.7B GGUF 量化版本；15 万下载量反映 llama.cpp 生态系统的需求。 |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 323 | 83,901 | 4GB 量化版 Bolt 适配消费级 GPU；使大模型在有限显存下运行成为可能。 |
| [OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM](https://huggingface.co/OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM) | OliviaRossi | 180 | 167,612 | PRISM 调优的合并 Minimax-H3 变体；16.7 万下载量显示活跃的模型合并社区。 |

---

## 生态信号

热门趋势揭示了几个汇聚的动态。**LiquidAI 的 LFM3 系列**已成为最多样化的基础模型产品线——涵盖语言（1.7B）、视觉语言（2B）、音频（2B）和全能（2B）变体，每个都拥有独立的模型卡片和社区关注。这标志着一种模块化的"选择你的模态"策略，正在与巨头们竞争。

**Qwen** 继续扩展其开放权重，3.8-27B 多模态模型实现近 800 万下载量，超过其他模型一个数量级。结合量化版 Qwen-Image 变体（250 万下载量），阿里巴巴正在同时占领研究和创意部署市场。

**量化生态系统** 蓬勃发展：仅 DeepSeek V4.1 GGUF 就达到 230 万下载量，而 LFM3-1.7B-GGUF 达到 15 万。这表明开放权重社区已完全接受 llama.cpp 兼容格式，用于消费级 GPU 推理。

**视频生成** 是增长最快的模态——LTX-2.5 的 240 万下载量和 Pika 的 LoRA 灵活架构表明市场正在从图像生成成熟到时间内容创作。

---

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 下载量领先者。研究其架构以了解阿里巴巴如何在 270 亿参数下实现强大的多模态性能，并与 GPT-4V 和 Claude 3.5 进行基准测试以支持实际部署决策。

2. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — 230 万下载量，这是平台上最受欢迎的量化 VLM。其 GSQ+RCO 量化方法值得构建高效推理管道的人研究。

3. **[facebook/sam3](https://huggingface.co/facebook/sam3)** — 190 万下载量，SAM3 代表了视频分割的前沿。其新兴的零样本视频对象跟踪能力对于构建视频理解管道的计算机视觉研究人员至关重要。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*