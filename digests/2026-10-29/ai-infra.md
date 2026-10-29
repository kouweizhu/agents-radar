# AI 基础设施日报 2026-10-29

> 生成时间: 2026-10-29 01:55 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the English report into Chinese. Looking at the context, they're asking for a translation of the cross-project comparison report I just generated.

Key requirements:
- Output ONLY the translation - no preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
- Issue/PR references like #12345 and their link text stay as-is
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all the formatting and technical terms.</think>

# 跨项目对比报告：AI 推理与服务生态

## 1. 生态概览

2026 年末的 AI 基础设施领域由三股力量交汇驱动：预填充-解码分离架构的成熟使得多租户服务能够大规模部署；硬件多样化（Blackwell、AMD RDNA4、Intel Arc、Moore Threads MUSA）的普及造成了移植和优化的瓶颈；以及模型架构的快速演进（DeepSeek V4、LFM3、Qwen3、MiniMax、Kimi-Linear）伴随着新型注意力模式（MLA、混合滑动窗口、Ulysses 上下文并行）对现有 kernel 造成的压力。今天在 vLLM、SGLang、llama.cpp、Ollama、LiteLLM 和 Unsloth 上的活动反映了这些挑战——每个项目都在平衡边缘情况的正确性修复与竞争性推理速度的性能优化。

---

## 2. 活跃度对比

| 项目 | Issue（24h） | PR（24h） | Release（24h） |
|---------|-------------|-----------|----------------|
| **vLLM** | 高（~50） | 高（~50） | 0 |
| **SGLang** | 高（~30） | 高（~40） | 0 |
| **llama.cpp** | ~15 | ~10 | **v0.8.0** |
| **Ollama** | 21 | 43 | **v0.40.13** |
| **LiteLLM** | ~50+ | ~30+ | v1.106.6, v1.109.0-dev.1 |
| **Unsloth** | 37 | 349 | v0.1.912-beta |

**观察：**

- **Unsloth** 在 PR 数量上占主导（349），主要得益于在多个模型系列上快速迭代 Ulysses 上下文并行支持，以及持续的 Mac 内存优化工作。
- **llama.cpp** 和 **Ollama** 是今天仅有的发布稳定版本的项目——两者都带来了功能发布，包括 GGUF 流式音频（llama.cpp）和 MLX Windows 支持（Ollama）。
- **vLLM** 和 **SGLang** 显示高提交活动但无版本发布，表明处于活跃的开发周期中。
- **LiteLLM** 保持高 Issue 数量，反映其作为代理/网关角色服务于多样化提供商集成的工作负载。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek V4 / V4.1** | ✅ Flash | ✅ | ✅ | — | — | ✅ Ulysses |
| **LFM3（LiquidAI）** | — | — | ✅ 文本/视觉/音频 | ✅ 音频/视频 | — | ✅ 1.7B 请求 |
| **Qwen3 / Qwen3.5 / Qwen3.8** | ✅ Flash-Next | ✅ | — | ✅ MLX | ✅ | — |
| **Gemma 4** | — | — | — | — | — | ✅ Ulysses |
| **MiniMax M1/M2** | — | — | — | — | — | ✅ Ulysses |
| **Kimi-Linear** | — | — | — | — | — | ✅ Ulysses |
| **GLM-5.3** | — | ✅ Hopper | — | — | — | — |
| **HiDream-O1-Image** | — | ✅ | — | — | — | — |
| **SM120（Blackwell）** | ✅ CUTLASS | ✅ | — | — | — | — |
| **AMD RDNA3/4** | — | ✅ | — | — | — | — |
| **Intel Arc B580** | — | — | — | — | — | ✅ 请求 |
| **Moore Threads MUSA** | — | ✅ 跟踪中 | — | — | — | — |
| **Decision → GGUF** | — | — | ✅ | — | — | ✅ |

**分析：**

- **Unsloth** 在上下文并行架构支持上领先，已在一个周期内为 Gemma 4、DeepSeek V2/V3/V4、MiniMax 和 Kimi-Linear 交付了 Ulysses 集成。
- **vLLM** 和 **SGLang** 在 Blackwell（SM120）硬件支持上并驾齐驱，vLLM 推进 CUTLASS 分组 GEMM，SGLang 专注于 PD 分离的强化工作。
- **llama.cpp** 在 LiquidAI LFM3 家族支持上形成差异化（文本、视觉、音频、 omni）——在所有项目中独树一帜。
- **Ollama** 主导 MLX 生态系统（Apple Silicon），提供 Windows 后端和视频输入支持。
- **SGLang** 是唯一积极推进 Moore Threads MUSA 支持的项目，拓展了硬件多样性。

---

## 4. 性能前沿

| 优化领域 | 领先项目 | 关键工作 |
|------------------|------------------|----------|
| **KV Cache / Flash Attention** | vLLM, SGLang | DFlash pad 分割，原生 decode 镜头（vLLM #63579）；TurboQuant + 混合 MoE 于 Ampere（vLLM #40124） |
| **上下文并行** | Unsloth, vLLm | 6+ 架构 Ulysses 支持（Unsloth）；PP 批次平衡（vLLM #50410） |
| **MoE Kernel** | vLLM, llama.cpp | MXFP4 MoE 后端修复（vLLM #55232）；Fused MoE gate/up + GLU（llama.cpp #11962） |
| **量化** | llama.cpp, vLLM | IQ4 量化加速（llama.cpp）；SM120 CUTLASS FP8 分组 GEMM（vLLM #43814） |
| **AMD / ROCm** | vLLM, SGLang | Kimi-K3 decode 优化（vLLM #64029）；Qwen3.8 MI355X（vLLM #59575）；AMD GEMV/MLA/GDN（SGLang #47077/#44457/#47157） |
| **批处理 / 调度** | vLLM, SGLang | 均衡 PP 微批次（vLLM）；PD 分离协议（SGLang #34510） |
| **内存管理** | Ollama, Unsloth | GGUF Mac 内存自动上下文（Unsloth #15843）；Per-device /metrics（LiteLLM #26130） |
| **网关 / 路由** | LiteLLM | 路由器隔离重构（#48847）；流式计费修复（#48955） |

**分析：**

- **vLLM** 和 **SGLang** 聚焦于分布式服务优化（PP 平衡、PD 分离、KV cache）——这些是多节点生产部署的前沿。
- **Unsloth** 主导微调性能赛道，上下文并行支持更长上下文训练，Mac 内存工作降低显存压力。
- **llama.cpp** 推进量化和 kernel 融合，对消费级 GPU 和边缘部署至关重要。
- **LiteLLM** 专注于网关可靠性（路由、计费精度、护栏），而非计算侧性能。

---

## 5. 分层定位

| 层级 | 主要项目 | 角色 |
|-------|------------------|----------|
| **服务引擎（VLLM 风格）** | **vLLM**, **SGLang** | 高吞吐单节点/多节点推理服务器，支持 PP/TP、KV cache、前缀缓存。vLLM 在 Blackwell 和 AMD 领先；SGLang 在 PD 分离领先。 |
| **本地运行时** | **llama.cpp**, **Ollama** | llama.cpp：跨 CPU/GPU/嵌入式移植的 GGUF 执行。Ollama：消费级友好的本地部署，支持 MLX、视频/音频 I/O，便捷的模型管理。 |
| **网关 / 代理** | **LiteLLM** | 跨 100+ 提供商的统一 API 层，路由、负载均衡、成本追踪、护栏。不执行推理——全部委托。 |
| **训练 / 微调** | **Unsloth** | QLoRA / LoRA 于消费级 GPU 上微调，支持上下文并行、内存优化、GGUF 导出。补充推理引擎。 |
| **工具 / 集成** | **LiteLLM**, **Ollama** | LiteLLM：多提供商应用的 SDK。Ollama：本地模型的终端用户应用 + API。 |

**分析：**

- 生态系统呈现清晰的分层：**Unsloth** 占据"训练"层，**LiteLLM** 占据"网关"层，"服务"层由 **vLLM**（企业级规模）和 **SGLang**（PD 分离）竞争。**llama.cpp** 和 **Ollama** 在"本地运行"层竞争，权衡性能与易用性。
- 值得注意的是，**LiteLLM** 不执行推理——它纯粹是路由/计费层。这与执行模型的 vLLM/SGLang 明显不同。
- **Unsloth** 通过 GGUF 导出桥接训练和推理，创建了从微调到 GGUF → llama.cpp/Ollama/vLLM 的工作流。

---

## 6. 趋势信号

### 本期观察到的行业趋势

1. **硬件碎片化加速** — 三个项目（SGLang、llama.cpp、Unsloth）正积极添加非 Nvidia 平台支持：AMD RDNA3/4、Intel Arc B580、Moore Threads MUSA、Hexagon DSP。这反映了市场压力来自出口管制和多样化加速器的可用性。

2. **上下文长度爆发** — Unsloth 的 Ulysses 推广到 6+ 架构和 vLLM 的 PP 平衡工作都瞄准 128K+ 上下文窗口。瓶颈正从"能否装下"转向"能否经济地大规模服务"。

3. **PD 分离趋于生产就绪** — SGLang 的协议统一（#34510）和 vLLM 的 PP 工作表明预填充-解码分离正在接近成熟。这使得混合预填充/解码工作负载的弹性扩展成为可能——对商业服务至关重要。

4. **量化路径复杂化** — 多条量化前沿（MXFP4、NVFP4、IQ4、FP8 分组 GEMM）配合硬件特定路径，表明趋势正从一刀切的量化转向架构感知的量化方法。

5. **本地与云端融合** — Ollama 的 MLX Windows 支持和 llama.cpp 的流式音频 API 模糊了本地和云端推理的边界。LiteLLM 作为统一网关的角色进一步抽象了部署位置。

6. **计费精度优先级提升** — LiteLLM 的流式计费修复（#48955）和 vLLM 的使用量追踪工作表明成本归属正成为生产需求，而非事后考虑。

### Agent / 应用开发者应关注

| 信号 | 含义 |
|-----------|-------------|
| **PD 分离成熟度**（SGLang, vLLM） | 准备部署混合预填充/解码集群以实现高吞吐低成本服务。在你的规模下评估 SGLang 与 vLLM 的选择。 |
| **Blackwell（SM120）启用**（vLLM, SGLang） | RTX 5090/5080 将成为生产推理的可行选择；在 kernel 落地后在 sm_120 上测试你的工作负载。 |
| **上下文并行微调**（Unsloth） | 更长上下文微调将在消费级 GPU 上变得可及；期待 200K+ 上下文窗口的新 Agent 产品。 |
| **LLM 网关标准化**（LiteLLM） | 多提供商路由正在稳定；考虑使用 LiteLLM 实现跨 OpenAI/Anthropic/Azure/Vertex 的标准化可观测性。 |
| **量化路径碎片化** | 针对每个硬件目标测试你的量化策略；不要假设 FP8 在 A100/H100/AMD/Blackwell 上表现一致。 |
| **MLX 生态系统扩展**（Ollama, Unsloth） | Apple Silicon 推理正在成熟；视频输入和 Windows MLX 支持表明非 Nvidia 推理需求在增长。 |

---

*跨项目分析基于 2026-10-29 的 GitHub 活动整理。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the entire vLLM digest into Simplified Chinese, following specific rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly
- Keep URLs, numbers, dates, issue numbers, project names, etc. verbatim
- Use natural technical Chinese, not literal translation
- Use Chinese punctuation throughout (，。：；？！""『』)

Let me translate the digest while preserving the structure and keeping technical terms in English where appropriate.</think>

# vLLM 速报 — 2026-10-29

## 今日要点

vLLM 项目今日重点围绕硬件兼容性和 KV Cache 优化展开。ROCm/AMD GPU 针对 Kimi-K3 和 Qwen3 模型的性能优化工作取得显著进展，Blackwell (SM120) GPU 支持的若干关键 bug 修复正在推进中，Rust 前端和 torch.accelerator 迁移的 RFC 讨论也在持续进行。过去 24 小时内无新版本发布，但多个高影响力 PR 正在推进。

---

## 版本发布与重大变更

过去 24 小时内无新版本记录。

---

## 新模型与硬件支持

| 项目 | 说明 | 链接 |
|------|------|------|
| **DeepSeek-V4-Flash Ampere 支持** | DeepSeek-V4-Flash-0731 模型在 SM8x (A100/A800, RTX 30xx) 上无法运行，请求添加 Ampere 兼容性。 | [#50576](https://github.com/vllm-project/vllm/issues/50576) |
| **SM120 Blackwell NVFP4 MoE** | 为 RTX 6000 Pro (Blackwell SM120) 添加原生 NVFP4 MoE 内核支持。当前回退到 Marlin。 | [#31085](https://github.com/vllm-project/vllm/issues/31085) |
| **MXFP4 在 Blackwell SM120 上** | MXFP4 模型在 RTX PRO 6000 Blackwell 上错误地回退到 Marlin 内核。 | [#30135](https://github.com/vllm-project/vllm/issues/30135) |
| **ROCm AMD MI355X 优化** | 针对 gfx950 / MI355X (AMD) 上 Qwen3.8-Flash-Next 的性能优化计划。 | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **ROCm 融合 QK-norm+RoPE+Gate** | 为 ROCm 上的 Qwen3-Next/Qwen3.5 启用融合 Triton 内核。 | [#51406](https://github.com/vllm-project/vllm/pull/51406) |

---

## 性能优化

| 项目 | 说明 | 链接 |
|------|------|------|
| **Kimi-K3 Decode 优化** | 专用 decode 优化：ROCm AMD GPU 上的 sentinels all-reduce、pre-AR 加载、tagged x rows。 | [#64029](https://github.com/vllm-project/vllm/pull/64029) |
| **PP 批次均衡** | 在不影响 prefill 调度的情况下，为 Model Runner V2 PP microbatch 均衡已建立的 decode 请求。 | [#50410](https://github.com/vllm-project/vllm/pull/50410) |
| **SM120 CUTLASS GEMM** | 为 SM_120/SM_121 消费级 Blackwell (RTX 5090/5080/5070, DGX Spark GB10) 启用 CUTLASS 分组 GEMM。 | [#43814](https://github.com/vllm-project/vllm/pull/43814) |
| **MXFP4 MoE 后端修复** | 修复 compressed-tensors W4A4 MXFP4 MoE 路径，使用集中式后端选择。 | [#55232](https://github.com/vllm-project/vllm/pull/55232) |
| **DFlash 优化** | Trace 驱动 fusion 后续：DFlash pad split、native decode lenses、DeepSeek V4.1 的 Gumbel finalize。 | [#63579](https://github.com/vllm-project/vllm/pull/63579) |
| **TurboQuant + Hybrid MoE on Ampere** | 13 个 patch 解决 Ampere GPU 上的 TurboQuant KV Cache + 混合 MoE (Qwen3.6-35B-A3B) 问题。 | [#40124](https://github.com/vllm-project/vllm/issues/40124) |

---

## 稳定性与回归问题

| 项目 | 严重程度 | 说明 | 状态 |
|------|----------|------|------|
| **CUDA 非法内存访问** | 高 | 推理过程中 `torch.AcceleratorError: CUDA error: an illegal memory access`。 | Open [#24430](https://github.com/vllm-project/vllm/issues/24430) |
| **输出占位符断言** | 中 | 在 8xH200 节点上 `assert request.num_output_placeholders >= 0` 在异步调度中失败。 | Open [#30142](https://github.com/vllm-project/vllm/issues/30142) |
| **Rust vllm-bench concurrency=0** | 中 | 接受 `--max-concurrency 0` 并无限挂起；Python 版本会拒绝。 | Fixed [#64390](https://github.com/vllm-project/vllm/pull/64390) |
| **Ascend Triton penalties** | 中 | 链式布尔 `or` 在 penalties 内核在 Ascend 后端上失败。 | Fixed [#64013](https://github.com/vllm-project/vllm/pull/64013) |
| **KV offload 混合步骤** | 中 | 异步 KV offload 在同步和异步加载混合的步骤中出现回归。 | Fixed [#64236](https://github.com/vllm-project/vllm/pull/64236) |
| **SimpleCPUOffload 清理** | Low | 磁盘层 slot 文件在优雅关闭时未清理。 | Fixed [#64393](https://github.com/vllm-project/vllm/pull/64393) |
| **Gemma 4 E4B 慢** | Low | RTX 4090 上约 9 tok/s，而 Llama 3B 超过 100；TRITON_ATTN 回退问题。 | Open [#38887](https://github.com/vllm-project/vllm/issues/38887) |

---

## 这对应用开发者的意义

1. **Blackwell GPU 用户**：PR [#43814](https://github.com/vllm-project/vllm/pull/43814) 即将修复，为 RTX 5090/5080/5070 启用原生 CUTLASS FP8 分组 GEMM，显著提升 MoE 模型吞吐量。在 RTX 6000 Pro 上使用 MXFP4 量化时，[#31085](https://github.com/vllm-project/vllm/issues/31085) 完成后将改善内核选择。

2. **AMD ROCm 部署**：MI355X 上 Qwen3.8-Flash-Next 的性能工作正在进行中（[#59575](https://github.com/vllm-project/vllm/issues/59575)）。[#64029](https://github.com/vllm-project/vllm/pull/64029) 中的 Kimi-K3 decode 优化应能提升 AMD GPU 吞吐量。

3. **多模态/视觉模型**：ViT 完整 CUDA Graph 支持的 RFC（[#38175](https://github.com/vllm-project/vllm/issues/38175)）正在活跃中，目标是 Qwen3-VL、GLM-V 和 Kimi K2.5 的生产服务。

4. **流水线并行用户**：PR [#50410](https://github.com/vllm-project/vllm/pull/50410) 改善了 PP microbatch 之间的批次均衡，应能提升大规模部署的吞吐量。

5. **即将到来的 API 变更**：Rust 前端 RFC（[#40846](https://github.com/vllm-project/vllm/issues/40846)）提出了未来可能影响插件作者的架构变更。torch.accelerator 迁移（[#30679](https://github.com/vllm-project/vllm/issues/30679)）旨在提升非 CUDA 硬件兼容性。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate this SGLang digest from English to Chinese. Let me analyze what needs to be translated:

1. The content is a technical digest about SGLang (a project)
2. It's formatted with Markdown including tables, headings, lists
3. I need to preserve all formatting but translate the text to Chinese
4. Technical terms, issue numbers, URLs, etc. should stay in their original form
5. I should use natural technical Chinese, like a developer newsletter

Let me translate section by section:

## 1. Today's Highlights
翻译：今日要点

## 2. Releases & Breaking Changes
翻译：版本发布与破坏性变更

## 3. New Model & Hardware Support
翻译：新模型与硬件支持

## 4. Performance & Optimization
翻译：性能与优化

## 5. Stability & Regressions
翻译：稳定性与回归问题

## 6. What This Means for Application Developers
翻译：这 对应用开发者意味着什么

Let me now go through and translate each section carefully while preserving all formatting.</think>

# SGLang 速报 — 2026-10-29

## 1. 今日要点

SGLang 项目正在重点推进 PD 拆分的核心逻辑完善与内核稳定性工作。今日最活跃的领域包括：(1) 推进 PD 拆解协议层的统一工作（issue #34510），(2) 针对消费级 RDNA 硬件和 Qwen3.5/DeepSeek-V4 的多项 AMD GPU 内核优化，(3) 围绕 MLA 内存管理和 Mooncake L3 集成的 HiCache 错误修复。值得关注的是 CI 稳定性问题（issue #42752）收到了 137 条评论，说明社区对此高度关注。

---

## 2. 版本发布与破坏性变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

- **AMD 消费级 GPU**：Issue #30599 开启讨论，正式支持 RDNA3（`gfx1100`/`gfx1101`）和 RDNA4（`gfx1200`/`gfx1201`）消费级 Radeon 显卡，扩展了当前仅限于数据中心 Instinct 产品的支持路径（`gfx942`/`gfx950`）。

- **摩尔线程 MUSA**：路线图 issue #16565 持续跟踪摩尔线程 GPU 的一级支持。

- **HiDream-O1-Image**：PR #39682 新增对这个 8B 像素空间统一 transformer（Qwen3-VL 主干 + flow-matching 像素头）的支持。

- **GLM-5.3-Flash on Hopper**：Issue #45373 开启追踪，针对 SM90（Hopper）进行性能优化，属于 Q4 路线图 #42473 的一部分。

---

## 4. 性能与优化

| 领域 | 详情 | PR/Issue |
|------|---------|----------|
| **AMD GEMV** | 为 gfx1151（Strix Halo）上的单行 decode 提供 Split-K bf16 GEMV，以提升 decode 吞吐 | #47077 |
| **AMD MLA** | 当 `k_scale` 为 1.0 时跳过 triton MLA K 重缩放，消除不必要的操作 | #44457 |
| **AMD GDN** | 在 gfx1250 上调优 ROCm decode Conv1D 更新和循环状态流式处理 | #47157 |
| **AMD Qwen3.8** | 将 SiLU-and-mul 与 down_proj MXFP4 输入量化融合（位精确） | #47155 |
| **AMD Qwen3.5** | 将 add + RMSNorm 与 AITER ASM FP4 投影的 MXFP4 输入量化融合 | #47154 |
| **AMD Qwen3** | 在使用 FP8 KV cache 的 decode 中使用融合的 QK-norm + RoPE + KV 写入 | #46832（已关闭）|
| **Hybrid SWA** | 从 `layer_types` 检测混合滑动窗口注意力模型，避免无条件的 KV 保留 | #45295（已关闭）|
| **DeepSeek-V4 性能** | Issue #33422 报告 SM120 上约 2-7K tok/s prefill，而 vLLM/marlin 约为 12.5K — 寻求调优指导 | #33422 |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | #42752 — `PR Test Base` / `PR Test Extra` 运行中的测试不稳定和 CI 基础设施故障（137 条评论）| 进行中 |
| **高** | #41076 — DeepSeek-V4.1-Flash + DSPARK：无界的 `SparsePrefillWorkspace` 分配导致 TP 组 OOM 崩溃 | 进行中 |
| **中** | #45400 — 混合 GDN 模型的 HiCache：当工作集超过约 3 个长前缀时，host-tier 命中率降至零（host Mamba 池耗尽）| 进行中 |
| **中** | #45989 — HiCache `buffer_only` + Mooncake L3：调度器接受了无法完成的 chunked prefill，随后以 "Prefill out of memory" 崩溃 | 进行中 |
| **中** | #46806 — 权重更新静默地将目标权重加载到 DFLASH draft 中；`update_weights_from_disk` 没有 `selector` 来阻止此行为 | 进行中 |
| **中** | #46446 — Qwen3.5-9B 使用混合 chunk 调度时贪婪输出不确定 | 进行中 |
| **中** | #45525 — DeepSeek-V4-Flash：投机解码与普通解码产生不同的贪婪输出 | 进行中 |
| **已修复** | #37379 — Qwen3.5-MoE 使用 FP8 KV cache 和 `--quantization-param-path` 时 `RuntimeError` | 已关闭 |
| **已修复** | #45426 — FLA 内核在 nightly-cu134-20261020 上编译失败（Triton 移除了 `tl.make_block_ptr`）| 已关闭 |

**已合并的修复：**
- #47168：修复 MLAView 上 HiCache 回写 staging
- #45524：在 PP 下发送 KV chunk 前等待 prefill 前向传播
- #46707：将 HiCache sidecar 恢复到每个 Mamba 目标

---

## 6. 这对应用开发者意味着什么

1. **PD 拆分正在走向成熟**：协议统一工作（#34510）和最近的 PP 修复（#45524）表明 prefill-decode 拆分正在接近生产就绪状态。如果您正在运行大规模部署，现在是时候测试默认配置了。

2. **AMD 消费级 GPU 支持即将到来**：如果您有 RDNA3/RDNA4 设备... [待续] — 团队正在积极努力启用消费级 Radeon，这可能显著降低开发/边缘场景的推理成本。

3. **HiCache 仍有边缘情况 bug**：多个问题（#45400、#45989、#46952）突出了混合 GDN 模型、Mooncake L3 后端和回写驱逐性能方面的边缘情况。如果您在使用 HiCache 时涉及复杂的 prefix caching 模式，请在生产前充分测试。

4. **AMD 内核优化力度很大**：本周大量的融合内核 PR 表明 AMD GPU 上的性能工作正在积极推进。如果您在 ROCm 上运行，请保持构建更新。

5. **CI 稳定性是已知问题**：如果您在 PR 上看到不稳定的测试失败，您不是一个人 — issue #42752 正在积极追踪此问题。

---

*基于 2026-10-29 的 sgl-project/sglang GitHub 数据生成*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English llama.cpp digest into Chinese (Simplified Chinese - zh-CN), following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate while preserving the structure:

Title: # llama.cpp Digest — 2026-10-29

Key points to translate:
- "Today's Highlights" → "今日要闻"
- "Releases & Breaking Changes" → "版本发布与重大变更"
- "New Model & Hardware Support" → "新模型与硬件支持"
- "Performance & Optimization" → "性能优化"
- "Stability & Regressions" → "稳定性与回归问题"
- "What This Means for Application Developers" → "对应用开发者的意义"

I need to translate the content naturally while keeping all the technical terms, URLs, commit hashes, PR numbers, etc. in their original form.

Let me go through each section:</think>

# llama.cpp 动态 — 2026-10-29

## 今日要闻

项目发布了 **v0.8.0**，带来了 LiquidAI LFM3 家族支持（文本、视觉、音频、全模态），新的实验性流式音频 API（通过 `mtmd`），以及通过 `/v1/realtime` 和 `/tts` 服务器端点的实时音频 I/O。该版本还引入了 DeepSeek V4.1 和批量张量复制 API，标志着重大的多模态和推理吞吐能力扩展。

## 版本发布与重大变更

- **v0.8.0** — 主要版本，新增 LiquidAI LFM3 家族支持、`mtmd` 流式音频 API、全新 `/v1/realtime` 和 `/tts` 端点、DeepSeek V4.1 架构 [[Release]](https://github.com/ggml-org/llama.cpp/releases/tag/v0.8.0)
- **版本号更新** — 项目升至 v0.8.0（b11960）[[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11960)
- **CI 迁移** — s390x 构建现在使用 Ubuntu 26.04 运行器 [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11966)

## 新模型与硬件支持

- **LiquidAI LFM3** — 文本、视觉、音频和全模态变体现已支持（v0.8.0）
- **DeepSeek V4.1** — v0.8.0 中新增，含 Flash 变体
- **Hexagon 后端** — 新增 Conv2d 支持，用于设备端推理 [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11970)
- **OpenCL** — 针对 Adreno（高通）优化的分块 q4_k GEMM [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11971)
- **控制向量** — 按模型层数限制层索引边界，修复 M-RoPE 位置循环 [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11972)

## 性能优化

- **SVE 256 位 GEMM** — `ggml-cpu` 现已为 Arm SVE（svcntb==32）优化了 `gemm_q6_K_8x8_q8_K` 内核 [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11968)
- **IQ4 量化** — 预计算中点显著加速量化创建 [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11969)
- **SYCL TOP-K** — 工作组级别的短行 argmax 减少开销 [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11963)
- **CUDA MoE 融合** — 在 MMQ 路径中融合 MoE 模型的 gate/up 和 GLU 操作 [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11962)
- **批量张量 API** — 通用 `ggml_backend_tensor_*_n` 函数已合并，实现高效的批量传输 [[PR #30881]](https://github.com/ggml-org/llama.cpp/pull/30881)
- **CUDA 批量读取** — 优化将批量张量gather到映射主机内存 [[PR #30986]](https://github.com/ggml-org/llama.cpp/pull/30986)
- **NCCL 多节点** — 通过 NCCL 实现多节点张量并行的早期实现 [[PR #28967]](https://github.com/ggml-org/llama.cpp/pull/28967)

## 稳定性与回归问题

- **CUDA graphs 卡死** — RTX 5090 笔记本（sm_120）使用 CUDA graphs 会卡死；`GGML_CUDA_DISABLE_GRAPHS=1` 可作为临时方案。严重程度：高。 [[Issue #27330]](https://github.com/ggml-org/llama.cpp/issues/27330)
- **指令注入** — WebUI 查询参数（`?q=`）存在安全漏洞 [[Issue #25790]](https://github.com/ggml-org/llama.cpp/issues/25790)
- **编译失败** — AMD MI210（gfx9a CDNA2）上 HIP 编译失败 [[Issue #30869]](https://github.com/ggml-org/llama.cpp/issues/30869)
- **MoE 缓存 Vulkan 崩溃** — Vulkan 上 `--moe-cache-mib` 崩溃（RX 6900 XT）[[Issue #30697]](https://github.com/ggml-org/llama.cpp/issues/30697)
- **DeepSeek V4.1 损坏** — 复用缓存的前缀 prompt 时输出损坏 [[Issue #30944]](https://github.com/ggml-org/llama.cpp/issues/30944)
- **SYCL BF16 指令** — Arrow Lake iGPU 不支持该指令 [[Issue #31029]](https://github.com/ggml-org/llama.cpp/issues/31029)
- **JSON schema DoS** — 大型枚举导致语法构造占用 CPU 数十秒 [[Issue #29457]](https://github.com/ggml-org/llama.cpp/issues/29457)

## 对应用开发者的意义

1. **实时多模态已就绪** — v0.8.0 的 `/v1/realtime` 和 `/tts` 端点支持通过 llama-server 直接进行实时音频流传输。如果你在构建语音代理或流式音频管道，新的 mtmd API 已可用于生产。

2. **内存可观测性提升** — PR #26130 通过 `/metrics` 和 `/memory` 暴露每设备内存使用情况（GPU VRAM、模型权重、KV 缓存、计算缓冲区）。这对于管理多 GPU 部署资源至关重要。

3. **MoE 推理更智能** — 带 GPU 驻留 LRU 的 MoE 专家缓存（Issue #29949）和 CPU 回退机制（PR #31286, PR #30966）减轻了 Dense MoE 模型（如 DeepSeek 和 Qwen MoE）的内存压力。预期在内存受限环境下吞吐量将有所改善。

4. **批处理能力增强** — 新的批量张量复制 API（#30881）和 CUDA 优化的批量读取（#30986）提升了多请求推理效率。如果你正在运行高吞吐服务，这些变更将降低单请求延迟。

5. **关注 CUDA graphs** — 如果要在 RTX 5090（sm_120）上部署，请在卡死问题（#27330）解决前禁用 CUDA graphs。

6. **需安全补丁** — 如果你将 llama-server 的 WebUI 暴露在外部网络，问题 #25790 中的查询参数注入漏洞需要更新修复。

---

*相关链接：[Releases](https://github.com/ggml-org/llama.cpp/releases) | [Website](https://llama.app) | [Attestations](https://github.com/ggml-org/llama.cpp/attestations)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate this Ollama digest into Chinese. Let me go through the content and translate it while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, issue/PR references, version numbers, technical terms as-is
4. Use natural technical Chinese, like a Chinese developer newsletter

Let me translate section by section:

## Releases & Breaking Changes
| 版本 | 变更 | PR |
|---------|---------|-----|
| **v0.40.13** | LFM3 GGUF 修复、llama-server 语音支持、llama.cpp 升级至 b11963 | [#19344](https://github.com/ollama/ollama/pull/19344), [#19360](https://github.com/ollama/ollama/pull/19360) |

本版本无重大变更或迁移说明。

## New Model & Hardware Support
## 新模型与硬件支持

## Performance & Optimization
## 性能与优化

## Stability & Regressions
## 稳定性与回归问题

Let me continue translating the full content...</think>

# Ollama 速报 — 2026-10-29

## 今日要闻

Ollama 发布 **v0.40.13**，带来 LFM3 GGUF 修复和 llama-server 语音支持，同时将 llama.cpp 升级至 b11963。社区继续拓展 MLX 能力，Windows 支持和视频输入已在 PR 中就位，而 Vulkan 性能回退和 MLX 运行时文档缺失等稳定性问题仍然存在。

---

## 版本发布与重大变更

| 版本 | 变更 | PR |
|---------|---------|-----|
| **v0.40.13** | LFM3 GGUF 修复、llama-server 语音支持、llama.cpp 升级至 b11963 | [#19344](https://github.com/ollama/ollama/pull/19344), [#19360](https://github.com/ollama/ollama/pull/19360) |

本版本无重大变更或迁移说明。

---

## 新模型与硬件支持

- **MLX 视频输入**：PR [#19348](https://github.com/ollama/ollama/pull/19348) 为 LFM3-VL、LFM3-Omni 和 Qwen3.5/3.6 MLX 模型添加 MP4/MOV 视频支持，通过现有 images 字段传入。
- **MLX Windows 支持**：PR [#19366](https://github.com/ollama/ollama/pull/19366) 为 MLX 运行器引入原生 Windows 执行和 CPU 后端，可在 Windows 上完成完整语音推理。
- **社区集成**：新增集成包括 Amical（语音听写应用）、Vauta（会议转录）、Quock（iOS 云端客户端）、kde-ollama-gui 和 self-host。

---

## 性能与优化

| 问题 | 描述 | 状态 |
|-------|-------------|--------|
| **投机解码指标** | PR [#19368](https://github.com/ollama/ollama/pull/19368) 添加每个请求的投机解码指标——草稿/接受 token 数和运行器成本 | **Open** |
| **性能回退** | #18968 报告 v0.40.x 相比 v0.40.1 吞吐量下降 25–30% | **Open** — 暂无 PR |
| **Vulkan AMD 变慢** | #19201：AMD RADV (RX 6600 XT) 上第二次请求使用 prompt cache 时生成速度下降约 30 倍 | **Open** — 待排查 |
| **内存估算错误** | #19357：Gemma 4 E 系列内存预测是实际显存的 3–4 倍，导致不必要的模型驱逐 | **Open** |

---

## 稳定性与回归问题

### 高优先级

| 问题 | 描述 | 链接 |
|-------|-------------|-------|
| **拉取恢复失败** | `ollama serve` 重启超过 1 小时后继续拉取会报错 "remove ...-partial-0: cannot find the file" | [#19337](https://github.com/ollama/ollama/issues/19337) |
| **Vulkan 乱码** | qwen2.5-coder、qwen3 在 Vulkan 上输出乱码，CPU 模式正常 | [#16281](https://github.com/ollama/ollama/issues/16281) |
| **llama-server 卡死** | 满缓存命中时模型挂起；后续所有请求阻塞直到卸载（CUDA） | [#18685](https://github.com/ollama/ollama/issues/18685) |
| **Claude Desktop 慢** | 约 17K 首次预填充、HTTP 500 重试、MLX 缓存丢失（0.40.11–0.40.12） | [#19359](https://github.com/ollama/ollama/issues/19359) |

### 中优先级

| 问题 | 描述 | 链接 |
|-------|-------------|-------|
| **Modelfile 解析 bug** | `ollama show --modelfile` 输出包含 `"""` + 空格时无法重新解析 | [#19342](https://github.com/ollama/ollama/issues/19342) — 修复见 [#19363](https://github.com/ollama/ollama/pull/19363) |
| **MLX 工具调用** | qwen3.8:27b-mlx 仅在 content 为空时发出 tool_calls | [#19353](https://github.com/ollama/ollama/issues/19353) |
| **macOS 27 应用崩溃** | 应用窗口和菜单栏图标不显示（CoreUI bundle 错误） | [#19370](https://github.com/ollama/ollama/issues/19370) |
| **Qwen3.5+Thinking 关闭** | 关闭 thinking 后 JSON Schema 约束失效 | [#19350](https://github.com/ollama/ollama/issues/19350) |

### 文档缺口

- **MLX 运行时未说明**：#19343 和 #19369 报告 lfm3 模型页面缺少 MLX 需求警告；Linux/Nvidia 用户收到奇怪的错误。功能请求 #19355 要求在模型库添加 MLX 筛选器。

---

## 这对应用开发者意味着什么

1. **生产环境避免 AMD Vulkan** — 如果在 AMD GPU 上使用 Vulkan 运行 Ollama，qwen/qwen2.5-coder 系列可能出现模型损坏。暂时使用 CPU 或等待修复。

2. **超过 1 小时的拉取需提前规划** — 恢复 bug 意味着长时间拉取中断后可能需要完全重新开始。安排在维护窗口期进行大模型拉取。

3. **MLX 模型体验仍需改进** — MLX 专用模型（lfm3、qwen3.8:27b-mlx）的文档缺口持续存在。拉取前仔细检查模型标签——`ollama list` 不会提醒你。

4. **v0.40.x 吞吐量回退** — 如果你从 v0.40.1 升级后看到 token/秒下降 25–30%，不是幻觉。关注 #18968 获取更新。

5. **Modelfile 导出修复即将到来** — 导出的 Modelfile 中 `"""` 转义问题将通过 #19363 修复。在此之前避免重新解析导出的 Modelfile。

6. **新视频能力** — 如果你在 Apple Silicon 上构建多模态代理，LFM3/Qwen3 MLX 模型的视频输入支持即将推出。预计在后续版本中出现新 API 接口。

---

*基于 GitHub 数据生成 — ollama/ollama @ 2026-10-29*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest into Chinese while preserving the exact Markdown structure and formatting. Let me go through and translate this maintaining all the technical terms, URLs, code references, and structure exactly as they are.

Key points:
- Keep all headings, tables, lists, etc.
- Keep URLs, issue numbers, version tags, etc. as-is
- Use natural technical Chinese
- Don't add any preamble or explanation
- Don't wrap in markdown fences</think>

# LiteLLM 速报 — 2026-10-29

## 今日要点

LiteLLM 项目继续保持快速迭代节奏，今日修复了多项正确性问题，特别是针对流式响应计费和防护栏覆盖范围的修复。Router 重构工作正在进行中，目标是在清晰的接口后面隔离 Router，同时社区驱动的 Rust 迁移计划也在稳步推进，追踪 issue 已获得 32 条评论和 21 个赞。

---

## 发布版本与重大变更

| 版本 | 类型 | 说明 |
|------|------|------|
| [v1.109.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.109.0-dev.1) | 开发版 | 测试用预发布 |
| [v1.106.6](https://github.com/BerriAI/litellm/releases/tag/v1.106.6) | 稳定版 | Docker 镜像使用 cosign 密钥 `e82a3c6` 签名 |
| [v1.105.7](https://github.com/BerriAI/litellm/releases/tag/v1.105.7) | 稳定版 | 上一稳定版，同样使用 cosign 签名 |

**重大变更注意：** Vertex AI Search 向量存储现在默认使用 HTTP/2（[#40631](https://github.com/BerriAI/litellm/pull/40631)）。如需保留 HTTP/1.1 行为，请设置 `http2: false` 或 `LITELLM_HTTP2=0`。

---

## 新模型与硬件支持

- **OpenAI o200k_base 编码**：用于 token 计数的 OpenAI 新模型（gpt-6、Azure gpt-41、带前缀的名称）现使用 gpt-5 的 o200k_base 编码，与 OpenAI 实际的分词方式一致 — 此前非英语文本的 token 计数最高多计了 80%（[#48728](https://github.com/BerriAI/litellm/pull/48728)）
- **Bedrock Voxtral 转录**：修复以排除系统提示（Voxtral 拒绝此参数）并透传 token 计数以实现准确计费（[#41565](https://github.com/BerriAI/litellm/pull/41565)）
- **QwenCloud 迁移路径**：为现有 DashScope 用户添加了迁移至 QwenCloud provider 的官方路径（[#36150](https://github.com/BerriAI/litellm/issues/36150)）

---

## 性能优化

- **Router 重构进行中**：多 PR 努力将 `litellm.Router` 隔离在狭窄接口后面，反转 proxy 导入并将调用方移至入口点（[#48840](https://github.com/BerriAI/litellm/pull/48840)、[#48847](https://github.com/BerriAI/litellm/pull/48847)）
- **Vertex AI HTTP/2 优化**：Search API 向量存储现可在突发情况下复用 OAuth token，每个 worker 共享一个 Google 连接（[#40631](https://github.com/BerriAI/litellm/pull/40631)）
- **HuggingFace tokenizer 韧性提升**：下载后期失败现使用已加载的 tokenizer，而非回退到 tiktoken，将恢复时间从 5 分钟缩短至即时（[#48916](https://github.com/BerriAI/litellm/pull/48916)）
- **类型安全重构**：在缓存、proxy 端点、防护栏、自动 router 和 providers 的 28 个文件中将 `Any` 替换为可靠的 Pydantic 类型 — 支持使用 basedpyright 进行静态分析（[#48928](https://github.com/BerriAI/litellm/pull/48928)）

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | 流式计费：最后的 usage 帧携带的是上游 provider 的成本而非 LiteLLM 计算的账单 | **已修复**（[#48955](https://github.com/BerriAI/litellm/pull/48955)） |
| **高** | 防护栏：`/v1/responses` 和 `/v1/messages` 的工具结果在 texts 模式下未被扫描（secret/注入攻击会绕过） | **已修复**（[#48827](https://github.com/BerriAI/litellm/pull/48827)、[#41011](https://github.com/BerriAI/litellm/pull/41011)） |
| **中** | Complexity Router：session tier pin 在 gunicorn worker 间不一致，导致对话中途模型切换 | **已修复**（[#47125](https://github.com/BerriAI/litellm/issues/47125)） |
| **中** | 管理员密钥预算强制：max_budget/tpm_limit 对管理员用户未生效 | **已修复**（[#48364](https://github.com/BerriAI/litellm/issues/48364)） |
| **中** | Prisma 二进制文件在启动时下载（v1.92.0+）：在隔离网络环境中失败 | **待处理**（[#33167](https://github.com/BerriAI/litellm/issues/33167)） |
| **低** | Proxy 错误响应返回字面量 `"None"` 字符串而非正确的 JSON null | **已修复**（[#39540](https://github.com/BerriAI/litellm/pull/39540)） |
| **低** | Nebius 成本计算错误 10 倍（约 250$ 报告 vs 约 2500$ 实际） | **待处理**（[#41782](https://github.com/BerriAI/litellm/issues/41782)） |

---

## 对应用开发者的意义

1. **计费精度提升**：流式响应现已在最终 usage 帧和 `x-litellm-response-cost` 头中报告准确的 LiteLLM 成本 — 此前可能看到 $0 或错误的金额。

2. **防护栏覆盖范围扩大**：如果您在 LiteLLM 中使用配置了防护栏的 `/v1/responses` 或 Anthropic 的 `/v1/messages`，工具结果现已被正确扫描以检测 secret 和注入指令。

3. **新模型 token 计数修复**：如果您使用 gpt-6、Azure gpt-41 或带前缀的模型名称，token 预算和支出追踪现已完成准确（此前非英语文本的 token 计数最高多计了 80%）。

4. **Router 重构进行中**：内部 Router 架构正在清理 — 目前暂无行为变更，但这为未来改进路由逻辑奠定了基础。

5. **考虑 HTTP/2 影响**：如果您通过 LiteLLM 使用 Vertex AI Search 向量存储并在升级后遇到问题，请检查 `http2: false` 标志。

6. **eMudhra CA 修复可用**：eMudhra 根 CA 修复（[#47670](https://github.com/BerriAI/litellm/pull/47670)）已在主分支；如需用于生产安全合规，请请求回收到稳定版。

---

*基于 2026-10-29 的 GitHub 数据生成*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this Unsloth digest into Chinese (Simplified Chinese, based on the instructions to match the language used in the system prompt). Let me translate this following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

---

# Unsloth Digest — 2026-10-29

# 2026年10月29日 Unsloth 动态

## Today's Highlights

今日重点

Unsloth v0.1.912-beta 携万圣节主题 UI 定制和重大性能优化而来，首 次启动、Linux 工具调用和模型加载速度均有提升。团队持续大力投入 Ulysses 上下文并行支持，覆盖 Gemma 4、DeepSeek V2/V3/V3.2、MiniMax M1/M2 和 Kimi-Linear。多个 PR 解决了 Mac 特定内存管理和 GGUF 模型加载工作流问题。

## Releases & Breaking Changes

## 版本发布与重大变更

| Version | Change | Notes |
|---------|--------|-------|
| [v0.1.912-beta](https://github.com/unslothai/unsloth/releases) | Trick or Treat + Optimizations | Halloween sidebar themes (11 options); speeds up first launch, Linux tool calls, model loading; supports training compatible fine-tuning jobs with multi-L |


| 版本 | 变更 | 备注 |
|-----|------|------|
| [v0.1.912-beta](https://github.com/unslothai/unsloth/releases) | Trick or Treat + 优化 | 万圣节侧边栏主题（11种）；加速首次启动、Linux 工具调用、模型加载；支持多 GPU 训练兼容的微调任务 |

No breaking changes flagged in this release.

本次发布无重大变更标记。

## New Model & Hardware Support

## 新模型与硬件支持

| Model / Hardware | Type | Notes |
|-----------------|------|-------|
| **LFM3-1.7B** | Feature request [#15588](https://github.com/unslothai/unsloth/issues/15588) | Liquid AI's LFM3 family requested; LFM3 MLX models also being addressed in [#15832](https://github.com/unslothai/unsloth/issues/15832) |
| **Intel Arc B580** | GPU support request [#15583](https://github.com/unslothai/unsloth/issues/15583) | Feature request for Intel XPU backend |
| **Decision models → GGUF export** | PR [#15864](https://github.com/unslothai/unsloth/pull/15864) | Enables `save_pretrained_gguf` / `export_decision_gguf` on fresh installs without pre-installed llama.cpp |
| **Gemma 3 + UNSLOTH_FORCE_FLOAT32** | PR [#15879](https://github.com/unslothai/unsloth/pull/15879) | Fixes bf16 q/k/v dtype crash when Float32 forced pre-import |

I need to continue translating the table and the rest of the content. The table shows model and hardware support requests, including feature requests for LFM3-1.7B from Liquid AI and Intel Arc B580 GPU support, along with GGUF export improvements and a fix for Gemma 3 with float32 compatibility.

| 模型 / 硬件 | 类型 | 备注 |
|-------------|------|------|
| **LFM3-1.7B** | 功能请求 [#15588](https://github.com/unslothai/unsloth/issues/15588) | 请求支持 Liquid AI 的 LFM3 系列；LFM3 MLX 模型也在 [#15832](https://github.com/unslothai/unsloth/issues/15832) 中处理 |
| **Intel Arc B580** | GPU 支持请求 [#15583](https://github.com/unslothai/unsloth/issues/15583) | 请求 Intel XPU 后端支持 |
| **Decision models → GGUF 导出** | PR [#15864](https://github.com/unslothai/unsloth/pull/15864) | 支持在全新安装上使用 `save_pretrained_gguf` / `export_decision_gguf`，无需预装 llama.cpp |
| **Gemma 3 + UNSLOTH_FORCE_FLOAT32** | PR [#15879](https://github.com/unslothai/unsloth/pull/15879) | 修复预导入 Float32 时 bf16 q/k/v dtype 崩溃问题 |

The Ulysses context parallel support has been extended to include multiple model architectures: Gemma 4 text models, DeepSeek V2/V3 MLA and V3.2 indexer variants, MiniMax M1 Lightning hybrid and M2, and Kimi-Linear with KDA and MLA attention mechanisms. Performance optimizations this cycle focus on reducing first launch latency and improving Linux tool call efficiency.

Additional speed gains came from model loading optimizations, while Mac-specific improvements addressed memory allocation issues—particularly preventing excessive cache reservation when loading GGUF files, and refining quant selection to recommend Hub GGUF models that fit within Metal memory constraints rather than total available RAM.

I notice some critical problems persist: fine-tuning operations are consuming more VRAM than documented, which triggers out-of-memory errors on constrained GPUs like the Qwen3-Coder-Next-Base with 2xA100 80GB configurations. These memory management issues remain unresolved despite ongoing optimization efforts.

On Windows systems, there's an especially severe problem where sqlite WAL/SHM files are flooding the Recycle Bin—roughly 10,000 files accumulating around 40 MB per 90-minute training session. Memory leaks are also emerging, with Drive C losing 200-400 MB after each Unsloth use, which could compound over time. Crashes in the pyarrow JSON reader when processing large 81.7 MB ChatML datasets represent another stability concern that needs investigation.

Several issues are actively being addressed. GGUF model crashes aren't being caught properly—Studio displays a model as loaded even when llama-server has stopped. Context compaction isn't triggering when returning to long conversations. There's a detection gap for AMD GPUs on mixed Nvidia-AMD Linux systems. The Mac memory optimization work this cycle significantly reduces GGUF model baseline consumption and improves quant selection recommendations.

Long context fine-tuning is now feasible across multiple architectures including Gemma 4, DeepSeek, MiniMax, and Kimi-Linear. However, I need to verify fine-tuning jobs thoroughly with production-scale datasets before deploying—the VRAM regression from issues #4504, #4040, and #5441 appears resolved but warrants testing. Long-running Windows sessions require disk usage monitoring due to the sqlite WAL/ SHM file accumulation bug. The Whisper backend migration to Transformers needs verification if dictation features are in use.</think>

# Unsloth 动态 — 2026-10-29

## 今日重点

Unsloth v0.1.912-beta 携万圣节主题 UI 定制和重大性能优化而来，首次启动、Linux 工具调用和模型加载速度均有提升。团队持续大力投入 Ulysses 上下文并行支持，覆盖 Gemma 4、DeepSeek V2/V3/V3.2、MiniMax M1/M2 和 Kimi-Linear。多个 PR 解决了 Mac 特定内存管理和 GGUF 模型加载工作流问题。

## 版本发布与重大变更

| 版本 | 变更 | 备注 |
|-----|------|------|
| [v0.1.912-beta](https://github.com/unslothai/unsloth/releases) | Trick or Treat + 优化 | 万圣节侧边栏主题（11种）；加速首次启动、Linux 工具调用、模型加载；支持多 GPU 训练兼容的微调任务 |

本次发布无重大变更标记。

## 新模型与硬件支持

| 模型 / 硬件 | 类型 | 备注 |
|-------------|------|------|
| **LFM3-1.7B** | 功能请求 [#15588](https://github.com/unslothai/unsloth/issues/15588) | 请求支持 Liquid AI 的 LFM3 系列；LFM3 MLX 模型也在 [#15832](https://github.com/unslothai/unsloth/issues/15832) 中处理 |
| **Intel Arc B580** | GPU 支持请求 [#15583](https://github.com/unslothai/unsloth/issues/15583) | 请求 Intel XPU 后端支持 |
| **Decision models → GGUF 导出** | PR [#15864](https://github.com/unslothai/unsloth/pull/15864) | 支持在全新安装上使用 `save_pretrained_gguf` / `export_decision_gguf`，无需预装 llama.cpp |
| **Gemma 3 + UNSLOTH_FORCE_FLOAT32** | PR [#15879](https://github.com/unslothai/unsloth/pull/15879) | 修复预导入 Float32 时 bf16 q/k/v dtype 崩溃问题 |

Ulysses 上下文并行支持已覆盖以下模型：

- **Gemma 4 文本模型** — PR [#15883](https://github.com/unslothai/unsloth/pull/15883)
- **DeepSeek V2/V3 MLA、V3.2 索引器、V4 sink attention** — PR [#15882](https://github.com/unslothai/unsloth/pull/15882)
- **MiniMax M1 Lightning 混合架构、M2** — PR [#15881](https://github.com/unslothai/unsloth/pull/15881)
- **Kimi-Linear（KDA + MLA）** — PR [#15880](https://github.com/unslothai/unsloth/pull/15880)

## 性能与优化

| 领域 | 变更 | PR / Issue |
|------|------|------------|
| **首次启动速度** | 优化启动流程 | v0.1.912-beta |
| **Linux 工具调用** | 性能改进 | v0.1.912-beta |
| **模型加载** | 加速兼容微调任务加载 | v0.1.912-beta |
| **Mac GGUF 内存** | 自动上下文不再为 Mac 预留完整模型窗口 | [#15843](https://github.com/unslothai/unsloth/pull/15843) — llama-server 预分配完整缓存；避免 128K 模型预留 4.9 GB |
| **Mac GGUF 选择** | 推荐适配 Metal 预算而非总内存的 Hub GGUF 量化版本 | [#15848](https://github.com/unslothai/unsloth/pull/15848) |
| **HuggingFace 请求** | 减少加载已下载模型时的冗余 repo detail 获取 | [#15844](https://github.com/unslothai/unsloth/pull/15844) |
| **GGUF 下载处理** | GGUF 下载失败/取消时保留已加载模型 | [#15846](https://github.com/unslothai/unsloth/pull/15846) |
| **工具输出溢出** | 剪枝重写后复用溢出记录标识；修复 Windows 测试可移植性 | [#15884](https://github.com/unslothai/unsloth/pull/15884)、[#15888](https://github.com/unslothai/unsloth/pull/15888) |
| **Llama 接入等待** | 队列状态变更时唤醒而非轮询 | [#15885](https://github.com/unslothai/unsloth/pull/15885) |
| **Claude CLI 计费头** | 防止破坏提示词缓存 | [#15845](https://github.com/unslothai/unsloth/pull/15845) |

## 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | 微调显存占用超出标称值，导致 OOM | 已关闭 [#4504](https://github.com/unslothai/unsloth/issues/4504) | — |
| **高** | Qwen3-Coder-Next-Base 在 2×A100 80GB 上 QLoRA 时 OOM | 已关闭 [#4040](https://github.com/unslothai/unsloth/issues/4040) | — |
| **高** | Qwen3_5ForConditionalGeneration `loss_function` 未修复 → ≤24GB GPU 上 logits.float() OOM | 已关闭 [#5441](https://github.com/unslothai/unsloth/issues/5441) | — |
| **中** | Windows 回收站被 sqlite WAL/SHM 文件淹没（每秒约 1 个，90 分钟约 10,000 个/40 MB） | 已关闭 [#15552](https://github.com/unslothai/unsloth/issues/15552) | — |
| **中** | 内存泄漏：每次使用 Unsloth 后 C 盘丢失 200-400 MB | 开启 [#14487](https://github.com/unslothai/unsloth/issues/14487) | — |
| **中** | pyarrow JSON 读取器 SIGSEGV（81.7 MB ChatML JSONL 数据集） | 已关闭 [#15681](https://github.com/unslothai/unsloth/issues/15681) | — |
| **中** | GGUF 模型崩溃未被检测；Studio 显示模型已加载但 llama-server 已停止 | 开启 [#15847](https://github.com/unslothai/unsloth/pull/15847) | 进行中 |
| **低** | 返回长对话时上下文未压缩 | 开启 [#15800](https://github.com/unslothai/unsloth/issues/15800) | — |
| **低** | 混合 Nvidia-AMD Linux 系统上无法检测 AMD GPU | 已关闭 [#15444](https://github.com/unslothai/unsloth/issues/15444) | — |

## 这对应用开发者的意义

1. **本周期 Mac 用户收益最大** — v0.1.912-beta 及相关 PR 显著降低了 GGUF 模型加载时的内存浪费。在 Apple Silicon 上提供 LLM 服务时，预期更低的基础内存占用和更精准的量化选择指导。

2. **上下文并行扩展** — Gemma 4、DeepSeek、MiniMax、Kimi-Linear 的 Ulysses 支持使得在这些架构上进行更长上下文微调成为可能。如果你正在构建需要 128K+ 上下文窗口的应用，相关基础设施现已就绪。

3. **关注 OOM 回归** — VRAM 使用问题（#4504、#4040、#5441）已关闭，但根本原因可能未完全解决。在生产部署前，使用实际规模的数据集测试微调工作负载，尤其是在多 GPU 配置上。

4. **Windows 存储清理** — sqlite WAL/SHM 文件泛滥（#15552）是长时间训练运行的值得关注的问题。考虑在长时间运行后清理 `%TEMP%` 或监控磁盘使用情况。

5. **Whisper 后端迁移** — PR [#13753](https://github.com/unslothai/unsloth/pull/13753) 弃用 whisper.cpp，改用 Transformers 后端。如果你依赖 Whisper 听写，更新后请验证集成是否正常工作。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*