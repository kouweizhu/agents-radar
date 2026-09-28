# Hugging Face 热门模型周报 2026-09-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-28 01:06 UTC

---

<think>The user wants me to translate this Hugging Face Trending Models Digest into Simplified Chinese, following the specific translation rules provided. Let me work through this carefully:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, code, technical terms as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section, being careful to:
- Keep all formatting
- Translate concepts but not technical terms/model names
- Use Chinese punctuation where appropriate
- Maintain the tone of a professional Chinese developer newsletter

Let me go through this:

---

# Hugging Face 热门模型周刊

## 本期亮点

本周的热门模型显示，**多模态和图像生成**领域出现了强劲增长，尤其是 Qwen 系列。亮点发布是 **Qwen/Qwen3.8-27B**，以 16,427 个点赞和近 667 万次下载遥遥领先——使其成为本周在参与度和采用率上的双料冠军。Qwen-Image-2.1 生态系统继续占据主导地位，包含多个变体（GGUF 量化、ComfyUI 集成、LoRA 微调），表明社区对高效图像生成的强烈需求。同时，**Lightricks/LTX-2.5**（图像转视频）获得了 5,332 个点赞，反映出视频生成领域的日益增长兴趣。值得注意的是，通过 **prism-ml/Ternary-Bonsai-2-27B-gguf** 实现的 2 位和三元量化方法正在获得关注，研究人员正在推动极端模型压缩的边界。
 
## 热门模型

我将按照模型类型进行系统分类。语言模型板块包括 Qwen/Qwen3.8-27B，由 Qwen 团队开发的 270 亿参数多模态模型，本周在各项指标上均创新高。deepseek-ai/DeepSeek-V4.1-Flash 是 DeepSeek V4.1 多模态模型的快速高效版本，因其强大的推理能力和易用性而备受关注。XingChen-AGI/Xing4.0-29B-A4B 是 290 亿参数的大型对话模型，以其多语言对话能力著称。

此外，还有 Altworld/Hemmingway-1，这是一款基于 Qwen3.5 的文本生成模型，在创意写作应用中表现出色。XiaomiMiMo/MiMo-V2.6-Pro-RL 是小米 MiMo V2.6 Pro 强化学习版本，以其多模态能力和高效性能引人注目。XiaomiMiMo/MiMo-V2.6-Flash-RL 是 MiMo V2.6 的快速强化学习变体，适合实时应用场景。yandex/AliceAI-Foundation-80B-A3B-Base 则是 Yandex 推出的 800 亿参数基础模型，作为主要科技公司的罕见大规模开源发布而备受关注。

在多模态与生成领域，Lightricks/LTX-2.5 作为领先的图像转视频模型，支持文本转视频和视频转视频功能，其庞大的下载量表明在实际生产中的强劲应用。Qwen/Qwen-Image-2.1 是官方 Qwen 图像生成模型，以高质量输出和多功能图像编辑功能而流行。TaichuAI/ZDTaichu5.0-9B 是一款专注于空间推理的视觉语言模型，在多模态理解任务中表现突出。Comfy-Org/Qwen-Image-2.1 作为针对 ComfyUI 优化的单文件扩散模型，是本地图像生成的首选工具。

StarDoc-AI/TeleOCR 是一个用于 OCR 和文档理解的视觉语言模型，在文本提取工作流中表现出色。XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B 是高效的 9B 视觉语言模型，适合多模态部署。inclusionAI/Ming-Image-0.1-Design 专注于设计导向的图像生成，虽然处于早期阶段但已引发关注。apple/LensVLM-9B 作为苹果的视觉语言模型，是苹果罕见开源发布中的重要模型。

在专业模型领域，convaiinnovations/laya 是文本分类模型，具有校准的决策输出，本周参与度最高。Edge0/Audio8-ASR-Infinite 支持实时语音转录的流式 ASR 模型。AlexWortega/openjev 是用于零样本文本分类的 NLI 跨编码器。netease-youdao/Confucius4-R2T2 是网易有道的 ASR 模型，在中文语音识别中很受欢迎。Contrastive-LM/CLM-v0.1-8B 采用对比学习进行重排序和验证，是检索工作流中的新兴方向。nvidia/Nemotron-3-Diarization 用于语音活动检测和 diarization，在音频处理管道中有很强

的采用。akhilaaa3/Jev-Omni 基于 Gemma 4 Unified 的分类模型，适用于多任务分类。fastino/GLiNER2.5-Decide 用于意图提取的 token 分类，在 NLU 管道中很受欢迎。convaiinnovations/laya-multilingual 是 Laya 的多语言版本，满足全球文本分类需求。

在微调与量化领域，prism-ml/Ternary-Bonsai-2-27B-gguf 是 27B 模型的极端 2 位量化，本周下载量最高，显示了对压缩的巨大兴趣。ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF 是 Qwen3.8 的混合精度 GGUF 量化，在质量和内存效率之间取得平衡。abenzerps/Qwen-Image-2.1-Uncensored-GGUF 是

未审查的图像生成 GGUF 变体，在未审查创意工作流中很受欢迎。unsloth/Qwen-Image-2.1-GGUF 是 Unsloth 优化的 Qwen 图像生成 GGUF，社区对高效推理有强烈兴趣。pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF 是 Qwen 图像的 FP8 量化文本编码器，在 ComfyUI 集成中很受欢迎。Viggle/Qwen-Image-2.1-viggle-turbo 是 LoRA 微调，用于图像到图像任务。

## 生态系统信号

本周数据显示了几个关键趋势。首先，Qwen 系列（包括 Qwen3.8-27B、Qwen-Image-2.1 及其量化版本）在点赞和下载中都占据了重要份额，表明阿里巴巴的 Qwen 模型已成为许多开源用例的默认选择。其次，量化技术正在朝极端方向发展。**prism-ml/Ternary-Bonsai-2-27B-gguf** 的成功（2 位/三元量化，330 万下载）表明社区正在积极追求模型压缩。结合 GSQ-RCO 混合精度方法，量化不再仅仅是为了节省内存，而是一个独立的研究领域。第三，多模态领域持续爆发。图像转视频（**Lightricks/LTX-2.5**）和视觉语言模型的采用持续增长，下载量已与纯文本 LLM 相当。Qwen-Image 生态系统本身已催生至少 6 个不同的变体。第四，苹果和 Yandex 也加入了竞争。大型闭源公司的罕见开源发布（**apple/LensVLM-9B**、**yandex/AliceAI-Foundation-80B-A3B-Base**）表明其策略正在转向开源权重参与。

## 值得关注

**Qwen/Qwen3.8-27B** 本周当之无愧的领导者。其多模态能力、强大的对话性能和庞大的社区采用使其成为任何开源 LLM 开发者必备的模型。

它的架构和微调模式值得深入研究。

**prism-ml/Ternary-Bonsai-2-27B-gguf** 展现了技术上的突破，展示了 2 位量化仍能在 27B 模型上提供可用结果，对推动设备端 AI 边界的研发人员和工程师很有参考价值。

**Lightricks/LTX-2.5** 本周下载量最高的多模态模型，其图像转视频能力代表了生成式视频的前沿，其单文件扩散架构对生产环境部署有重要参考意义。</think>

# Hugging Face 热门模型周刊

## 本期亮点

本周热门模型显示，**多模态和图像生成**领域出现了强劲增长，尤其是 Qwen 系列。亮点发布是 **Qwen/Qwen3.8-27B**，以 16,427 个点赞和近 667 万次下载遥遥领先，使其成为本周参与度和采用率的双料冠军。Qwen-Image-2.1 生态系统继续占据主导地位，包含多个变体（GGUF 量化、ComfyUI 集成、LoRA 微调），表明社区对高效图像生成的强烈需求。同时，**Lightricks/LTX-2.5**（图像转视频）获得了 5,332 个点赞，反映出视频生成领域的日益增长。值得注意的是，通过 **prism-ml/Ternary-Bonsai-2-27B-gguf** 实现的 2 位和三元量化方法正在获得关注，研究人员正在推动极端模型压缩的边界。

---

## 热门模型

### 🧠 大语言模型

| 模型 | 作者 | 点赞 | 下载 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,427 | 6,727,629 | Qwen 的旗舰 270 亿参数多模态模型，具备图像文本理解能力；本周在各项指标上均创新高。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,811 | 651,078 | DeepSeek V4.1 多模态模型的快速高效版本；因其强大的推理能力和易用性而备受关注。 |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,782 | 45,028 | 大型 290 亿参数对话模型；以其多语言对话能力著称。 |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 738 | 5,904 | 基于 Qwen3.5 的文本生成模型；在创意写作应用中备受关注。 |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 557 | 75,079 | 小米 MiMo V2.6 Pro 强化学习版本；因其多模态能力和高效性能而引人注目。 |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 491 | 25,661 | MiMo V2.6 快速强化学习变体；在实时应用场景中很受欢迎。 |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 349 | 3,456 | Yandex 的 800 亿参数基础模型；作为大型科技公司的罕见大规模开源发布而备受关注。 |

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,332 | 1,601,089 | 领先的图像转视频模型，支持文本转视频和视频转视频；庞大的下载量表明在生产环境中的强劲应用。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,493 | 52,804 | 官方 Qwen 图像生成模型；因高质量输出和多功能图像编辑特性而流行。 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,680 | 11,612 | 专注于空间推理的视觉语言模型；在多模态理解任务中表现突出。 |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 806 | 3,987,373 | 针对 ComfyUI 优化的单文件扩散模型；海量下载使其成为本地图像生成的首选。 |
| [StarDoc-AI/TeleOCR](https://huggingface.co/StarDoc-AI/TeleOCR) | StarDoc-AI | 598 | 27,837 | 用于 OCR 和文档理解的视觉语言模型；在文本提取工作流中很受欢迎。 |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 522 | 8,839 | 高效的 9B 视觉语言模型蒸馏版；在多模态部署中很受欢迎。 |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 301 | 0 | 专注于设计导向的图像生成模型；虽处于早期阶段但已引发关注。 |
| [apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | apple | 243 | 1,740 | Apple 的视觉语言模型；作为 Apple 罕见的开源发布而备受关注。 |

### 🔧 专业模型

| 模型 | 作者 | 点赞 | 下载 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,095 | 0 | 文本分类模型，具有校准的决策输出；本周参与度最高，尽管下载量为零。 |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 1,058 | 19,434 | 流式 ASR 模型，支持实时语音转录；在实时语音识别场景中备受关注。 |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 610 | 0 | 基于 NLI 的跨编码器，用于文本分类；在零样本分类任务中表现突出。 |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 437 | 8,243 | 网易有道的 ASR 模型；在中文语音识别中很受欢迎。 |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 410 | 766 | 用于重排序和验证的对比学习模型；在检索工作流中成为新趋势。 |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 407 | 22,514 | 语音活动检测和 diarization 模型；在音频处理流水线中采用率很高。 |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 270 | 248 | 基于 Gemma 4 Unified 的分类模型；在多任务分类中值得关注。 |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 208 | 19,757 | 用于意图提取的 token 分类模型；在 NLU 流水线中很受欢迎。 |
| [convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual) | convaiinnovations | 306 | 0 | Laya 的多语言变体；面向全球文本分类需求。 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 简介 |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,190 | 3,343,748 | 27B 模型的极端 2 位量化；本周下载量最高，显示了对模型压缩的强烈兴趣。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,778 | 1,608,439 | Qwen3.8 的混合精度 GGUF 量化；在质量和内存效率之间取得良好平衡。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,081 | 964,220 | 未审查版图像生成 GGUF 变体；在无限制创意工作流中很受欢迎。 |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 270 | 194,341 | Unsloth 优化的 Qwen 图像生成 GGUF；社区对高效推理有强烈兴趣。 |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 299 | 145,246 | Qwen 图像的 FP8 量化文本编码器；在 ComfyUI 集成中很受欢迎。 |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 341 | 133,151 | Qwen 图像生成的 LoRA 微调；在图像转图像任务中表现突出。 |

---

## 生态信号

本周数据揭示了几个关键趋势：

1. **Qwen 主导地位**：Qwen 家族（Qwen3.8-27B、Qwen-Image-2.1 及其量化版本）在点赞和下载中都占据了显著份额，表明阿里巴巴的 Qwen 模型已成为许多开源用例的默认选择。

2. **极端量化兴起**：**prism-ml/Ternary-Bonsai-2-27B-gguf** 的成功（2 位/三元量化，330 万下载量）表明社区正在积极追求模型压缩。结合 GSQ-RCO 混合精度方法，量化不再仅仅是为了节省内存，而正在成为一个独立的研究领域。

3. **多模态爆发**：图像转视频（**Lightricks/LTX-2.5**）和视觉语言模型的采用持续增长，下载量已与纯文本 LLM 相当。Qwen-Image 生态系统本身已催生至少 6 个不同的变体。

4. **Apple 与 Yandex 入局**：大型闭源公司的罕见开源发布（**apple/LensVLM-9B**、**yandex/AliceAI-Foundation-80B-A3B-Base**）表明其策略正在转向开源权重参与。

---

## 值得关注

1. **Qwen/Qwen3.8-27B** —— 本周当之无愧的领导者。其多模态能力、强大的对话性能和庞大的社区采用使其成为任何使用开源 LLM 的开发者必备的模型。其架构和微调模式值得深入研究。

2. **prism-ml/Ternary-Bonsai-2-27B-gguf** —— 一项技术杰作，展示了 2 位量化仍能在 27B 模型上提供可用结果。对于推动设备端 AI 边界的研发人员和工程师来说，这是一个值得探索的方向。

3. **Lightricks/LTX-2.5** —— 本周下载量最大的多模态模型。其图像转视频能力代表了生成式视频的前沿，其单文件扩散架构对生产环境部署具有重要参考价值。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*