# Hugging Face 热门模型周报 2026-09-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-21 00:27 UTC

---

<think>The user wants me to translate the English Hugging Face Trending Models Digest into Chinese. Let me carefully follow all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, project names, repository slugs, usernames, version tags, file paths in original form
4. Use natural technical Chinese, like a Chinese developer newsletter

Let me translate this carefully, maintaining the exact structure and formatting.

Key terms to translate appropriately:
- "Trending Models" -> 热门模型
- "Language Models" -> 语言模型
- "Multimodal & Generation" -> 多模态与生成
- "Fine-tunes & Quantizations" -> 微调与量化
- "Specialized Models" -> 专业模型
- "Today's Highlights" -> 今日亮点
- "Ecosystem Signal" -> 生态系统信号
- "Worth Exploring" -> 值得探索

For technical terms like "GGUF", "AWQ", "FP8", "MoE", "quantization" - these are typically kept in English or adapted to Chinese technical terminology.

Let me translate the full content now:</think>

# Hugging Face 热门模型周报

**日期：2026-09-21**

---

## 1. 今日亮点

本周热门榜单呈现出 **Qwen3.8 的全面主导**——基础模型及其变体占据了前 30 名中的 6 个席位，下载量合计超过 2000 万。**MiniMax-H3** 脱颖而出成为视频生成领域的亮点，人气可与 Lightricks 的 LTX-2.5 相媲美。**GGUF 量化格式** 持续强劲流行，三款量化版 Qwen 变体登上榜单，反映出社区对高效本地部署的强烈需求。值得注意的是，**三元/2 位量化**（prism-ml 模型）标志着极端模型压缩领域的创新。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,861 | 7,331,932 | Qwen 的旗舰 27B 多模态模型，支持图像-文本理解；本周点赞数最高的模型，下载量达 733 万，作为对话 AI 的微调基础获得了强劲的社区采用。 |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,769 | 5,910,102 | Meta 的 80 亿参数指令微调模型；持续吸引大量关注，作为微调和研究的可靠开源基线。 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,627 | 420,622 | OpenBMB 的紧凑型 20 亿参数模型；因在文本生成方面的高效表现而热门，资源需求极低。 |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 980 | 11,913 | 基于 Qwen3.5 构建的智能体专用文本生成模型；因其结构化输出能力和推理增强而备受关注。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,552 | 1,609,559 | 高质量图像转视频生成模型；作为视频合成的领先开源扩散模型而热门，下载量达 160 万。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,525 | 4,057,444 | 文本转视频和图像转视频模型，生成质量出色；本周获得 5 千点赞，视频生成需求激增使其备受关注。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,492 | 761,112 | 下一代高效多模态 Flash 模型，增强版；作为 Qwen 最快的多模态变体，具有强大的推理能力。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,431 | 496,684 | DeepSeek 的多模态图像-文本到文本模型；因其强大的推理能力和竞争力而备受关注。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,499 | 3,109,084 | GLM 的 Flash 多模态模型，下载量达 310 万；因其高效的理解视觉对话能力而人气上升。 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 915 | 17,403 | 符号化音乐生成和音频模型；在音乐 AI 的智能体化编辑和符号规划方面独树一帜。 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 571 | 242,751 | Minimax-H3 的视频生成微调变体；在创意视频合成工作流中颇受欢迎。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 740 | 183 | 文本转图像生成模型；在 Qwen 生态系统内因其图像编辑能力而热门。 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 212 | 3,750 | 专注于空间推理的多模态视觉语言模型；在专业推理任务中表现亮眼。 |

### 📦 微调与量化（社区微调版、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,428 | 6,941,478 | Unsloth 的 GGUF 量化版 Qwen3.8；下载量达 694 万，是下载量最高的量化模型，为 CPU 推理做了优化。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,002 | 1,301,417 | 重度微调的非审查版编程模型，270 亿参数 GGUF 格式；在开发者中因其不受限制的代码生成能力而热门。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,478 | 1,217,204 | 混合精度 GSQ+RCO 量化的 Qwen；因在减少本地部署内存占用的同时保持质量而备受关注。 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,494 | 1,908,396 | 使用哈达玛变换的极致 2 位三元量化；本周点赞数最高的模型，开创了超压缩推理的先河。 |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 284 | 30,043 | 面向苹果芯片的 MLX 2 位三元模型实现；面向 M 系列芯片用户的小众创新。 |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 329 | 136,668 | 高效思考优化的 GGUF 变体；因其量化形式中增强的推理能力而热门。 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 189 | 42,965 | 混合精度的量化多模态 Flash 模型；在消费级硬件上运行视觉语言模型的热门选择。 |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 325 | 34,688 | DeepSeek-V4.1 的非审查版 FP8 变体；因其宽松的内容限制和高效精度而备受关注。 |

### 🔧 专业模型（代码、数学、医学、嵌入向量）

| 模型 | 作者 | 点赞 | 下载 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,549 | 76,669 | 专家混合架构模型，35B 活跃参数使用 3B 专家；因其边缘推理优化和高效部署而热门。 |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 1,089 | 0 | 校准型决策文本分类器；因其系统一推理和安全决策输出而备受关注。 |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 314 | 0 | 基于 Qwen3.5 的自然语言推理跨编码器文本分类器；专精于自然语言推理任务。 |

---

## 3. 生态系统信号

**Qwen3.8 家族**已成为主导性生态系统玩家，基础模型、Flash 变体和量化版本的下载量合计超过 2000 万次。这标志着社区强烈依赖 Qwen 作为微调基础。**GGUF 量化**仍是本地部署的首选格式，三款变体进入前 30 名——仅 unsloth 量化版本就贡献了 694 万下载，证明了市场对 CPU 友好推理的强劲需求。

**视频生成**正成为竞争激烈的领域：MiniMax-H3（5,525 点赞）和 Lightricks LTX-2.5（4,552 点赞）都获得了大量关注，表明市场正在超越图像生成走向成熟。**极致量化**正在获得创新吸引力——prism-ml 的三元/2 位模型（1,494 点赞）代表了边缘部署经济的突破性进展。Meta、Qwen 和 DeepSeek 的开源模型继续占据主导，而专有 API 模型在热门榜单上基本缺席，凸显了 Hugging Face 作为开源权重优先的生态系统定位。

---

## 4. 值得探索

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 本周点赞数最高的模型。其使用哈达玛变换的 2 位三元量化代表了前沿的压缩研究。对极端模型压缩技术感兴趣的人值得深入研究。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 拥有 5,525 点赞和超过 400 万下载，是突出的视频生成模型。其图像转视频和文本转视频能力可与商业解决方案相媲美，值得在创意 AI 流程中探索。

3. **[Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)** — 为边缘推理设计的专家混合架构模型（35B 活跃 / 3B 专家）。其架构创新和对高效部署的关注，使其成为资源受限环境下的重要研究案例。

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*