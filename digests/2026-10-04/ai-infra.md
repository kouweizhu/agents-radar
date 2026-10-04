# AI 基础设施日报 2026-10-04

> 生成时间: 2026-10-04 01:57 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the English report into Chinese, following specific rules about how to handle various elements. Let me go through the content and translate it naturally while keeping all the technical elements, code, numbers, links, etc. in their original form.

Let me translate section by section:

1. Ecosystem Overview
2. Activity Comparison (table)
3. Model Support Race (table)
4. Performance Frontier (table)
5. Layer Positioning (table)
6. Trend Signals

I need to use natural technical Chinese, the register of a Chinese developer newsletter.</think>

# 跨项目生态报告 — 2025年10月4日

---

## 1. 生态概览

今日的AI基础设施生态呈现出清晰的层级分化，分别对应推理服务（vLLM、SGLang）、本地/桌面运行时（llama.cpp、Ollama、Unsloth）、网关与可观测性（LiteLLM）以及微调训练（Unsloth）。贯穿这六个项目的核心主题是**投机解码正确性**、**量化可靠性**（尤其是Marlin和NVFP4）、**多vendor硬件支持**（AMD MI35x、NVIDIA SM120/SM121、Intel OpenVINO）以及**智能体工作流工具链**。LiteLLM的预算执行bug和Unsloth的性能回退表明，即使吞吐量优化在加速，生产环境的稳定性仍在持续打磨中。

---

## 2. 活跃度对比

| 项目 | Issue（24h） | PR（24h） | Release（24h） | 重点方向 |
|---------|-------------|-----------|----------------|----------|
| **vLLM** | ~10 热门 | ~15 热门 | 0 | 投机解码、V2 runner、Marlin量化 |
| **SGLang** | 40 | 294 | 0 | DeepSeek V4、AMD MI35x、diffusion |
| **llama.cpp** | ~8 热门 | ~15 热门 | 7（提交 b11372–b11382）| GPU缓存、WebGPU、OpenVINO 2026.4.1 |
| **LiteLLM** | 9 | 30 | 3（v1.103.3、v1.104.0、v1.105.0-rc.1）| 预算核算、Lens可观测、工具循环 |
| **Ollama** | 9 | 20 | 0 | MLX（Kolibri 1、SystemOne）、Windows修复 |
| **Unsloth** | 17 | ~20+ | 0 | SageAttention 2、diffusion、tensor split回退 |

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **DeepSeek V4 / V4.1** | ✅ Flash / MoE | ✅ Flash / MoE / PCP | — | — | — |
| **Qwen3.8 / Qwen4Exp** | ✅ MTP | — | ✅ MTP | — | — |
| **Qwen3.5 MoE** | ✅ | ✅ | ✅（OpenVINO）| — | — |
| **MiniMax-M3 / M4** | ✅ | ✅ AITER FP8 | — | — | — |
| **GLM-5.3 / GLM5Next** | — | ✅（Triton workaround）| — | — | — |
| **Kolibri 1** | — | — | — | ✅ MLX | — |
| **SystemOne** | — | — | — | ✅ MLX | — |
| **Gemma 4** | — | — | — | ✅ | — |
| **LTX-2 Diffusion** | — | ✅ | — | — | ✅ |
| **Flux.3** | ✅ FP8 | — | — | — | — |

**领先者：** SGLang与vLLM在服务端模型覆盖上持平。llama.cpp在桌面/嵌入式模型多样性上领先。Ollama在Apple Silicon原生模型上领先。

---

## 4. 性能前沿

| 优化领域 | 主导项目 | 关键工作 |
|---------------------|-----------------|----------|
| **KV Cache / 前缀缓存** | vLLM、SGLang | 混合GDN + MTP命中恢复（vLLM #52244）、SWA bounded replay skip（#59197） |
| **投机解码** | vLLM、SGLang | 优先级调度、动态batch大小——两者均有活跃的正确性回退 |
| **量化** | vLLM、llama.cpp、SGLang | Marlin int8-activation（vLLM #48926/#59895）、NVFP4 KV bug（SGLang #42369）、预量化safetensors（Unsloth #12645） |
| **分布式 / 多GPU** | vLLM、SGLang | DP×TP×CP attention（SGLang #42038）、tensor split（Unsloth——回退 #12468） |
| **Attention核** | Unsloth、llama.cpp、SGLang | SageAttention 2（Unsloth #12654）、FlashAttention 4（Unsloth）、AITER（SGLang）、OpenVINO 2026.4.1 |
| **内存管理** | vLLM、llama.cpp | CUDA graph pool释放（#59160）、GPU缓存用于host MoE专家（#29887） |
| **智能体工具循环** | LiteLLM、Ollama | `run_tool_loop`辅助函数（LiteLLM #44381）、多轮sandbox集成（Ollama） |

---

## 5. 层级定位

| 层级 | 主要项目 | 描述 |
|-------|-------------------|-------------|
| **训练 / 微调** | **Unsloth** | LoRA/QLoRA微调，支持KTO、ORPO、diffusion |
| **本地桌面运行时** | **llama.cpp**、**Ollama** | llama.cpp：可移植、无运行时推理；Ollama：开箱即用的macOS/Windows体验 |
| **本地 / 移动端推理** | **llama.cpp**（WebGPU、Vulkan、Metal）| 跨平台GPU后端 |
| **网关 / 代理** | **LiteLLM** | 统一OpenAI兼容API、密钥管理、预算执行、可观测性（Lens） |
| **高性能服务** | **vLLM**、**SGLang** | vLLM：生产级PagedAttention、V2 runner；SGLang：激进吞吐量、RadixAttention、speculation |
| **智能体编排** | **LiteLLM**、**Ollama** | 工具循环辅助、流式工具调用、结构化输出 |

**最清晰的差异化：** vLLM和SGLang占据高吞吐量服务层级，理念略有重叠但本质不同（vLLM = 保守稳定，SGLang = 激进优化）。LiteLLM作为网关/编排层位于其上。Unsloth在推理之下作为训练加速器运作。

---

## 6. 趋势信号

### 智能体/应用开发者应关注

1. **投机解码尚未达到生产就绪状态** — vLLM（#49548、#25618）和llama.cpp（#27572）的投机解码路径均存在正确性bug。押注draft加速的团队应预期未来2-4周内会有修复。

2. **量化正确性差距正在收窄但尚未完全消除** — Marlin int8-activation bug（vLLM）和NVFP4 KV损坏（SGLang）会影响生产部署。在修复上线前，应避免使用这些量化模式。

3. **智能体工具编排正在成为一等公民** — LiteLLM的`run_tool_loop`和Ollama的结构化工具支持表明，从简单chat completion向多轮智能体工作流的转变已成为核心功能趋势。

4. **AMD MI35x/gfx950支持正在加速** — SGLang和vLLM均在积极落地AMD优化（AITER FP8、PCP、fusion kernel）。这是最活跃的非NVIDIA硬件工作方向。

5. **Unsloth的自动step skip是范式转变** — 基于层深的模型缓存配置表明，推理编译器在静态vs动态缓存决策上正变得更加智能。

6. **LiteLLM的预算执行存在bug** — 陈旧消费和竞态条件问题（#27735、#43732）表明，多租户代理成本控制在重度生产使用前需要加固。

7. **可观测性正在向服务层渗透** — LiteLLM的Lens和trace分页工作表明，基础设施团队希望在网关和上游provider之间获得统一的调试体验。

---

*基于各项目摘要交叉编译 — 2025年10月4日*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest into Chinese. I need to:
1. Translate all the content into Chinese
2. Keep all the formatting (headings, tables, lists, etc.)
3. Keep technical terms, project names, issue numbers, URLs as-is
4. Use natural technical Chinese, not literal translation

Let me go through the content and translate it:

**Title**: # vLLM Daily Digest — 2026-10-04
→ # vLLM 每日简报 — 2026-10-04

**Today's Highlights**:
The vLLM project addresses critical correctness and performance issues as speculation and quantization features mature. A notable Marlin quantization bug affecting negative group scales is being fixed across two PRs (#59895, #48926), while performance regressions in dynamic speculative decoding (#49548) and prefix caching under MTP (#53670) are under active investigation. The V2 model runner continues to see optimizations, including int32 token array transmission (#59908) and CUDA graph pool release on sleep (#59160, now merged).

→ vLLM 项目正在解决投机和量化功能成熟过程中的关键正确性和性能问题。一个影响负组缩放值的 Marlin 量化 bug 正在通过两个 PR 修复（#59895, #48926），同时动态投机解码（#49548）和 MTP 前缀缓存（#53670）的性能回归正在积极调查中。V2 模型运行器持续优化，包括 int32 token 数组传输（#59908）和睡眠时 CUDA 图池释放（#59160，已合并）。


The project has no new releases in the last 24 hours. ROCm AITER has been updated to 0.1.24.post1 for improved AMD Infinity Architecture support. A fused QK-norm+RoPE+gate kernel now runs on ROCm for Qwen3-Next/Qwen3.5, previously limited to CUDA. CUDA graph pool offload has also been extended to ROCm via PR #59523, matching NVIDIA capabilities.

Performance optimizations are underway with int32 token arrays now sent in V2 runner mode (PR #59908) to eliminate CPU bottlenecks for long prompts, and CUDA graph profiling enabled for V2 runner and encoder paths (PR #54061). Memory management improvements include accounting for graph memory during KV sizing (PR #57865) and skipping SWA bounded replay for KV loads (PR #59197), which saves ~1,648 tokens on DeepSeek-V4.1. However, dynamic speculative decoding shows severe degradation at certain batch sizes, and NVFP4 decode performance on GB10 has declined since v0.29.0.

Two critical issues require attention: a Marlin bug corrupting output when using W4A8 with int8 activations on checkpoints with negative group scales, and `prompt_logprobs` corruption with MTP speculative decoding on Qwen3.5. Additionally, prefix-cache hits aren't being realized with hybrid GDN and MTP (fix in progress), and LoRA adapters using PEFT rank_pattern/alpha_pattern are served with incorrect scaling. These stability issues affect both performance and correctness, particularly for production deployments using quantization or speculative decoding features.

Users should avoid production use of quantization until the Marlin bug is resolved, and stick to static speculative decoding or lower batch sizes until the performance collapse in #49548 is fixed. For those using hybrid GDN with MTP, prefix caching isn't working yet. DeepSeek tool-calling shows logprob shifts between recent nightlies, so pinning to a specific nightly is recommended for reproducibility. Responses API streaming clients should update after v0.30.0, while production deployments can benefit from enabling `sleep_mode_offload_cudagraph` for large MoE models.</think>

# vLLM 每日简报 — 2026-10-04

## 今日要闻

vLLM 项目正在解决投机和量化功能走向成熟过程中的关键正确性和性能问题。一个影响负组缩放值的 Marlin 量化 bug 正在通过两个 PR（#59895、#48926）修复，同时动态投机解码（#49548）和 MTP 前缀缓存（#53670）的性能回归问题正在积极调查中。V2 模型运行器持续迎来优化，包括 int32 token 数组传输（#59908）和睡眠时 CUDA 图池释放（#59160，已合并）。

---

## 发布与重大变更

- **过去 24 小时内无新版本发布。**

---

## 新模型与硬件支持

- **ROCm AITER 升级至 0.1.24.post1** — PR #59794 为 ROCm 部署带来更新的 AMD Infinity Architecture 支持。

- **ROCm 上启用融合 QK-norm+RoPE+gate 内核** — PR #51406 在 AMD GPU 上为 Qwen3-Next/Qwen3.5 启用了基于 Triton 的融合内核，此前仅支持 CUDA。

- **ROCm 上支持 CUDA 图池卸载** — PR #59523 将 `sleep_mode_offload_cudagraph` 功能扩展到 ROCm，此前仅限 NVIDIA。

---

## 性能与优化

- **V2 运行器：int32 token 数组** — PR #59908 将新请求的 token ID 以 int32 数组形式发送，替代 Python 列表，消除长提示词场景下逐元素的 CPU 瓶颈。

- **V2 运行器的 CUDA 图性能分析** — PR #54061 将捕获式性能分析扩展到 V2 模型运行器和编码器路径，支持新架构的性能分析。

- **KV 大小调整考虑图内存** — PR #57865 在 KV 缓存大小调整前预留 CUDA 图设置保留的内存，即使禁用了可选的图预留也能保留前向传播的头部空间。

- **KV 加载时跳过 SWA 边界回放** — PR #59197 通过跳过携带自身 KV 的请求的回放，消除 DeepSeek-V4.1 上最后 128 个提示词令牌的重复计算。

- **性能回归：动态投机解码** — Issue #49548 报告单流吞吐量下降约 14%，以及在 Qwen3.5-122B MTP（k=2）使用 `num_speculative_tokens_per_batch_size` 时在特定批大小阈值出现灾难性吞吐量崩溃。

- **性能回归：GB10 上的 NVFP4 解码** — Issue #59770 报告自 v0.29.0 以来 Nemotron-3.5-Lightning NVFP4（DGX Spark / SM121）解码速度下降约 16%。

---

## 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **严重** | Marlin int8 激活读取负组缩放值为无符号，导致输出损坏 | 开启中 | #59895, #48926 |
| **严重** | Qwen3.5 上 MTP 投机解码时 `prompt_logprobs` 静默损坏 | 开启中 | — |
| **高** | 前缀缓存最后一块丢弃导致每次命中约 1,648 token 重复计算，批处理吞吐量下降 30–40% | 开启中 | #52244（进行中） |
| **高** | 使用 PEFT rank_pattern/alpha_pattern 的 LoRA 适配器服务时缩放错误 | 开启中 | — |
| **高** | 多模态聊天在存在 `chat_template_kwargs` 时丢弃所有图片 | 开启中 | — |
| **中** | DeepSeek-V4.1 相同批次间 logprob 偏移，影响工具/结构化输出 | 开启中 | — |
| **中** | 混合 GDN + MoE 相同批次产生非确定性 logprob | 开启中 | — |
| **中** | Fast Start WeightCacheKey 仅哈希 safetensors 头，存在权重别名风险 | 开启中 | — |
| **低** | vLLM 在 `max_tokens` 超过上下文时拒绝请求而非截断 | 开启中 | — |
| **低** | DeepSeek-R1 流式推理 delta 未被去词符化（BPE 字节级） | 开启中 | — |

---

## 这对应用开发者意味着什么

1. **Marlin 量化用户**：如果在具有负组缩放值的 checkpoint 上使用 W8A16 激活（`VLLM_MARLIN_INPUT_DTYPE=int8`），预期输出会不正确。修复待 #48926 和 #59895 上线，生产环境使用前请勿升级。

2. **投机解码运算符**：`num_speculative_tokens_per_batch_size` 动态特性在并发场景下显示严重吞吐量崩溃；请坚持使用静态投机解码或低于阈值的批大小，直至 #49548 解决。

3. **前缀缓存 + MTP**：如果将混合 GDN 与 MTP 投机解码一起使用，前缀缓存命中尚未实现——#52244 正在准备中以恢复此功能。

4. **DeepSeek 工具调用**：近期 nightly 版本间 logprob 偏移影响确定性输出；若需可复现性请锁定特定 nightly。

5. **Responses API 流式传输**：近期修复（#59859）确保最终响应中项目 ID 一致；依赖稳定 ID 的客户端应在 v0.30.0 后更新。

6. **生产部署**：已合并的 CUDA 图池释放（#59160）减少了睡眠期间的内存开销——大型 MoE 部署建议启用 `sleep_mode_offload_cudagraph`。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest into Simplified Chinese. I need to follow the rules:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, issue/PR references as-is
- Use natural technical Chinese

Let me translate this digest while preserving all formatting.</think>

# SGLang 速报 — 2026-10-04

## 1. 今日焦点

SGLang 持续深耕 DeepSeek V4 和 AMD 硬件优化。本日最重要的动态包括：影响 SM120 长上下文服务的**关键 NVFP4 KV 缓存损坏 bug**、NVIDIA 硬件上 DeepSeek V4 的性能持续优化工作，以及多项 AMD GPU 优化已合并或正在推进。CI 流水线显示 1136 个测试近期已修复，当前有 1 个 broken + 8 个 flaky 测试。

## 2. 发布与重大变更

过去 24 小时内无发布。

## 3. 新模型与硬件支持

| 模型/架构 | 硬件 | 状态 |
|---|---|---|
| DeepSeek V4.1 | NVIDIA (SM90/SM10X) | 性能跟踪中 — TRT-LLM DSv4 注意力已集成，FlashInfer MLA 已启用 ([#33636](https://github.com/sgl-project/sglang/issues/33636)) |
| GLM-5.3-Flash | NVIDIA SM120 (RTX PRO 6000) | FA4 注意力在 hybrid extend 时崩溃；Triton 后端可用 ([#42012](https://github.com/sgl-project/sglang/issues/42012)) |
| DeepSeek-V4.1-Flash | AMD MI35x | 精度测试已加入 CI ([#41476](https://github.com/sgl-project/sglang/pull/41476)) |
| MiniMax-M3 | AMD gfx950 | AITER FP8 ASM prefill 已启用，支持 HD128 注意力 ([#41707](https://github.com/sgl-project/sglang/pull/41707))；AITER FP8 索引缓存选择已启用 ([#41708](https://github.com/sgl-project/sglang/pull/41708)) |
| Qwen4Exp (Qwen3.8-Flash-Next) | NVIDIA DGX Spark (SM121) | 性能分析中 — QSA/PLE/GDN 内核占据 decode 步骤主要时间 ([#36796](https://github.com/sgl-project/sglang/issues/36796)) |

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|---|---|---|
| **DeepSeek V4 AMD** | gfx950 上启用 fp8 unified_kv 的 PCP ([#39923](https://github.com/sgl-project/sglang/pull/39923)) | 在 AMD MI35x 上支持 unified KV 布局的 prefill CP |
| **MiniMax-M3** | 联合 Fused QK norm + RoPE + cache writes 与 AITER ([#35357](https://github.com/sgl-project/sglang/pull/35357)) | 减少稀疏注意力层的独立内核启动 |
| **MiniMax-M3** | 小 batch MoE expert-count gate 用于 sort + FP8 block-scale 内核 ([#41982](https://github.com/sgl-project/sglang/pull/41982)) | 提升 MI355X 低并发吞吐量 |
| **FLUX.3 diffusion** | 使用 Triton 的融合 rowwise FP8 量化 ([#41671](https://github.com/sgl-project/sglang/pull/41671)) | 更快的 diffusion 线性层 |
| **HiCache prefetch** | MiniCPM4.1 SparDA 主机驻留预取 ([#38397](https://github.com/sgl-project/sglang/pull/38397)) | 改善稀疏模型的 KV 暂存 |
| **Router GEMM** | 使用 FP32 输出实现确定性推理 DeepSeek V3/V4 ([#34758](https://github.com/sgl-project/sglang/issues/34758)) | 可复现的专家路由 |
| **File-backed PLE** | 冷行并发主机读取 ([#42392](https://github.com/sgl-project/sglang/issues/42392)) | GB10 冷 prefill TTFT 降低 6.8 倍 |

## 5. 稳定性与回退

| 严重程度 | 问题 | 状态 |
|---|---|---|
| **Critical** | **NVFP4 KV 缓存静默损坏长上下文输出** — checkpoint 的 fp8 校准 k/v_scale 被错误用作 NVFP4 全局尺度 ([#42369](https://github.com/sgl-project/sglang/issues/42369)) | 待处理，暂无 PR |
| **High** | **GLM-5.3-Flash 在 SM120 上崩溃** — FA4 注意力后端在 hybrid extend 的 CUDA-graph 捕获时失败 ([#42012](https://github.com/sgl-project/sglang/issues/42012)) | 待处理；Triton 是变通方案 |
| **High** | **sgl-deep-gemm 0.2.0 SM90 weight-scale transform** 返回非自有别名 ([#39684](https://github.com/sgl-project/sglang/issues/39684)) | 待处理 |
| **Medium** | **--bf16-gemm-backend gemv** 被接受但从未用于非量化线性层 ([#42085](https://github.com/sgl-project/sglang/issues/42085)) | 待处理 |
| **Medium** | **--enable-return-routed-experts** 在 triton-kernels / flashinfer top-k 路径上返回全零路由 ([#41743](https://github.com/sgl-project/sglang/issues/41743)) | 待处理 |
| **Medium** | **Diffusion server 端口冲突** — scheduler 端口猜测可能导致静默的跨服务器 GPU 劫持 ([#42332](https://github.com/sgl-project/sglang/pull/42332)) | PR 待合并 |
| **Low** | VLM 图像解码时 EXIF 方向从未应用 ([#33464](https://github.com/sgl-project/sglang/issues/33464)) | 待处理 |

**CI 状态** ([#17050](https://github.com/sgl-project/sglang/issues/17050))：1 个 broken，8 个 flaky，1136 个近期已修复。

## 6. 这对应用开发者意味着什么

1. **NVFP4 KV 用户**：如果您使用 NVFP4 量化 checkpoint（如 unsloth NVFP4 quans）提供服务，并使用 `--kv_cache_dtype nvfp4`，在修复发布**不要用于长上下文服务**——KV 缓存会静默产生损坏的输出。

2. **SM120 (RTX PRO 6000) 用户**：GLM-5.3-Flash 目前仅支持 Triton 注意力后端。请使用 `SGLANG_ATTN_BACKEND=triton` 作为变通方案。

3. **AMD MI35x 用户**：DeepSeek-V4.1-Flash 现已有 CI 覆盖；MiniMax-M3 的 AITER FP8 优化正在成熟——期待 gfx950 硬件上更好的吞吐量。

4. **确定性推理**：DeepSeek V3/V4 路由器现在正确输出 FP32 以实现可复现的专家路由——如果评估流水线需要可复现性，请启用确定性模式。

5. **Diffusion 服务**：scheduler 端口冲突 bug 可能在运行多个 diffusion 服务器时导致静默的跨服务污染——请确保唯一端口分配或等待修复。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this GitHub digest about llama.cpp from English to Chinese (Simplified Chinese). I need to:

1. Translate all the text content while preserving the exact Markdown structure
2. Keep URLs, issue/PR numbers, code references, file paths, version numbers as-is
3. Use natural technical Chinese register
4. Maintain the tables, headings, lists, etc.

Let me go through and translate carefully:

---

# llama.cpp 摘要 — 2026-10-04

## 1. 今日要闻

本期主要聚焦后端优化，OpenVINO 后端更新至 2026.4.1 版本，为 Qwen3.5 MoE 带来性能提升并扩展了算子支持。关键修复包括解决 n_batch 超过 n_ubatch 时的服务端中止问题，WebGPU 的 fill/set_rows 操作也获得了 f16 支持。多个关于投机解码和量化正确性的问题仍在处理中。

## 2. 发布与破坏性变更

| 提交 | 变更 | 备注 |
|--------|--------|-------|
| [b11380](https://github.com/ggml-org/llama.cpp/commit/b11380) | vendor: 更新 cpp-httplib 至 0.59.0 | HTTP 库升级 |
| [b11379](https://github.com/ggml-org/llama.cpp/commit/b11379) | server: 修复通过限制 n_batch 不超过 n_ubatch 导致的中止 | 修复 #29902 |

未报告破坏性 API 变更。使用自定义批处理配置的服务端用户应在 n_batch 限制变更后验证行为。

## 3. 新模型与硬件支持

- **GLM5Next MTP**: 新 PR [#29928](https://github.com/ggml-org/llama.cpp/pull/29928) 为 GLM5Next 模型实现了 MTP 支持和图优化。


- **Qwen4Exp MTP**: 已合并至 [#29761](https://github.com/ggml-org/llama.cpp/pull/29761) — 为 Qwen3.8-Flash-Next 添加多 Token 预测功能。
- **OpenVINO 后端**: 更新至 2026.4.1，支持 Qwen3.5 MoE，扩展算子并改进设备列表功能（[#29852](https://github.com/ggml-org/llama.cpp/pull/29852)，提交 b11374）。
- **WebGPU**: fill/set_rows 操作现已支持 f16 精度（[#29897](https://github.com/ggml-org/llama.cpp/pull/29897)，b11382）。
- **WebGPU MMVQ**: 新增 Q1_0、Q5_0、Q5_1、Q3_K、Q5_K、Q6_K 和 MXFP4 量化格式支持（[#29483](https://github.com/ggml-org/llama.cpp/pull/29483)）。

## 4. 性能与优化

在 MoE 推理领域，通过 GPU 缓存机制为驻留在主机端的 MoE 专家添加 LRU 缓存（[#29887](https://github.com/ggml-org/llama.cpp/pull/29887)），在小批次推理时（≤32 tokens）可获得更优性能。

Qwen4Exp 的索引器内存占用减半（b11372，#29825），降低了长上下文工作负载的内存压力。OpenVINO 后端更新至 2026.4.1 版本，显著提升了 Intel NPU/集成显卡的吞吐量。WebGPU 的 MMVQ 支持扩展到更多量化格式，在 V100 纹理着色器上有明显加速。CUDA Q2_K 通过减少 VGPR 溢出改善了 AMD GPU 表现。

图优化通过一次性聚合循环状态来更高效地分配内存。tinyBLAS 在 x86 架构上支持 BF16/FP16/FP32 的非对齐 K 维计算，消除了通用 CPU 路径的回退。Vulkan 通过分割矩阵乘法调度来遵守 maxComputeWorkGroupCount 限制，解决了大规模矩阵维度上的断言问题。

## 5. 稳定性与回归

### 高优先级
| 问题 | 描述 | 状态 |
|-------|-------------|--------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | 量化目标（Q4_K_M）的投机解码输出与 bf16 存在差异；影响 draft-mtp 和 draft-dspark | 待处理 — 29 条评论 |
| [#29811](https://github.com/ggml-org/llama.cpp/issues/29811) | 运行 Qwen 3.8 Flash 配合 MTP 时启动阶段断言失败 | 待处理 — 16 条评论 |
| [#27572](https://github.com/ggml-org/llama.cpp/issues/27572) | 在 -np N 且多 ubatch 条件下，draft acceptance 降至 0.0 — 异步设备到主机复制竞态 | 待处理 — 13 条评论 |
| [#27579](https://github.com/ggml-org/llama.cpp/issues/27579) | HIP/ROCm 在 gfx1151（Strix Halo）上输出损坏；Vulkan 正常 | 待处理 — 12 条评论 |

### 中等优先级
- [#28734](https://github.com/ggml-org/llama.cpp/issues/28734): qwen4exp CUDA 解码随上下文线性减速
- [#28290](https://github.com/ggml-org/llama.cpp/issues/28290): unpack8() 在 Qualcomm Snapdragon X Elite 上破坏 MAT_MUL + CPY 操作
- [#29655](https://github.com/ggml-org/llama.cpp/issues/29655): Gemma 4 多行流式输出时工具调用不稳定

### 正在修复
- [#29924](https://github.com/ggml-org/llama.cpp/pull/29924): 修复 n-gram draft 在截断后 temp > 0 时被拒绝的问题
- [#29910](https://github.com/ggml-org/llama.cpp/pull/29910): CUDA Q2_K VGPR 溢出优化

## 6. 应用开发者需要关注的事项

服务端部署中 n_batch 限制修复解决了启动时的中止问题，使用自定义批处理配置的用户应进行验证。量化推理场景下，特别是 Q4_K_M 等量化目标配合投机解码时，输出可能与

非投机模式存在偏差，建议在需要确定性输出时切换到 bf16 目标。Intel NPU 用户升级到 OpenVINO 2026.4.1 后可获得 Qwen3.5 MoE 支持和更好的设备检测，应进行测试验证。MoE 模型用户的新型 GPU 缓存机制能优化小批次推理的延迟，需要观察内存使用模式的变化。

Windows 端的上游废弃警告清理工作正在进行中，使后续版本更加稳定。WebGPU 用户启用 Flash Attention 后，f16 fill/set_rows 支持解决了 GLM5 模型的 CI 测试失败问题。

---

I'm working through the technical details to ensure accurate translation of these performance improvements and hardware acceleration features across the different model implementations and backend systems.</think>

# llama.cpp 摘要 — 2026-10-04

## 1. 今日要闻

本期主要聚焦后端优化，OpenVINO 后端更新至 2026.4.1 版本，为 Qwen3.5 MoE 带来性能提升并扩展了算子支持。关键修复包括解决 n_batch 超过 n_ubatch 时的服务端中止问题，WebGPU 的 fill/set_rows 操作也获得了 f16 支持。多个关于投机解码和量化正确性的问题仍在处理中。

## 2. 发布与破坏性变更

| 提交 | 变更 | 备注 |
|--------|--------|-------|
| [b11380](https://github.com/ggml-org/llama.cpp/commit/b11380) | vendor: 更新 cpp-httplib 至 0.59.0 | HTTP 库升级 |
| [b11379](https://github.com/ggml-org/llama.cpp/commit/b11379) | server: 修复通过限制 n_batch 不超过 n_ubatch 导致的中止 | 修复 #29902 |

未报告破坏性 API 变更。使用自定义批处理配置的服务端用户应在 n_batch 限制变更后验证行为。

## 3. 新模型与硬件支持

- **GLM5Next MTP**: 新 PR [#29928](https://github.com/ggml-org/llama.cpp/pull/29928) 为 GLM5Next 模型实现了 MTP 支持和图优化。
- **Qwen4Exp MTP**: 已合并至 [#29761](https://github.com/ggml-org/llama.cpp/pull/29761) — 为 Qwen3.8-Flash-Next 添加多 Token 预测功能。
- **OpenVINO 后端**: 更新至 2026.4.1，支持 Qwen3.5 MoE，扩展算子并改进设备列表功能（[#29852](https://github.com/ggml-org/llama.cpp/pull/29852)，提交 b11374）。
- **WebGPU**: fill/set_rows 操作现已支持 f16 精度（[#29897](https://github.com/ggml-org/llama.cpp/pull/29897)，b11382）。
- **WebGPU MMVQ**: 新增 Q1_0、Q5_0、Q5_1、Q3_K、Q5_K、Q6_K 和 MXFP4 量化格式支持（[#29483](https://github.com/ggml-org/llama.cpp/pull/29483)）。

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **MoE 推理** | 为主机端 MoE 专家添加 GPU 缓存，支持 LRU 淘汰策略（[#29887](https://github.com/ggml-org/llama.cpp/pull/29887)） | 大专家池模型推理速度提升；小批次（≤32 tokens）场景下无需完整 offload 到 GPU |
| **Qwen4Exp 内存** | 索引器评分内存减半（b11372, #29825） | 长上下文工作负载内存占用降低 |
| **OpenVINO** | 后端更新至 2026.4.1 版本，含性能优化（#29852） | Intel NPU/核显部署吞吐量提升 |
| **WebGPU 量化** | MMVQ 支持更多量化格式（#29483） | V100 TG 速度提升（具体数据见 PR） |
| **CUDA Q2_K** | VGPR 溢出优化（[#29910](https://github.com/ggml-org/llama.cpp/pull/29910)） | AMD GPU 性能改善 |
| **图优化** | 一次性聚合循环状态以正确设置 reserve 大小（b11375, #29856） | 循环模型内存分配更高效 |
| **tinyBLAS** | x86 架构支持 BF16/FP16/FP32 K-tail 场景（[#29806](https://github.com/ggml-org/llama.cpp/pull/29806)） | 非对齐 K 维不再回退到通用 CPU 路径 |
| **Vulkan** | 拆分 matmul dispatch 以遵守 maxComputeWorkGroupCount 限制（[#29533](https://github.com/ggml-org/llama.cpp/pull/29533)） | 修复大矩阵维度下的 assert 问题 |

## 5. 稳定性与回归

### 高优先级
| 问题 | 描述 | 状态 |
|-------|-------------|--------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | 量化目标（Q4_K_M）的投机解码输出与 bf16 存在差异；影响 draft-mtp 和 draft-dspark | 待处理 — 29 条评论 |
| [#29811](https://github.com/ggml-org/llama.cpp/issues/29811) | 运行 Qwen 3.8 Flash 配合 MTP 时启动阶段断言失败 | 待处理 — 16 条评论 |
| [#27572](https://github.com/ggml-org/llama.cpp/issues/27572) | 在 -np N 且多 ubatch 条件下，draft acceptance 降至 0.0 — 异步设备到主机复制竞态 | 待处理 — 13 条评论 |
| [#27579](https://github.com/ggml-org/llama.cpp/issues/27579) | HIP/ROCm 在 gfx1151（Strix Halo）上输出损坏；Vulkan 正常 | 待处理 — 12 条评论 |

### 中等优先级
- [#28734](https://github.com/ggml-org/llama.cpp/issues/28734): qwen4exp CUDA 解码随上下文长度线性变慢
- [#28290](https://github.com/ggml-org/llama.cpp/issues/28290): unpack8() 在 Qualcomm Snapdragon X Elite 上破坏 MAT_MUL + CPY 操作
- [#29655](https://github.com/ggml-org/llama.cpp/issues/29655): Gemma 4 多行流式输出时工具调用不稳定

### 正在修复
- [#29924](https://github.com/ggml-org/llama.cpp/pull/29924): 修复 n-gram draft 在截断后 temp > 0 时被拒绝的问题
- [#29910](https://github.com/ggml-org/llama.cpp/pull/29910): CUDA Q2_K VGPR 溢出优化

## 6. 应用开发者需要关注的事项

1. **服务端部署**: n_batch 限制修复（[b11379](https://github.com/ggml-org/llama.cpp/commit/b11379)）解决了自定义批处理配置下的启动中止问题——请更新验证。

2. **量化推理**: 使用投机解码配合量化目标（Q4_K_M 等）时，注意输出可能与bf16非投机模式产生分歧（[#25618](https://github.com/ggml-org/llama.cpp/issues/25618）。如需确定性输出，建议使用 bf16 目标。

3. **Intel NPU 用户**: OpenVINO 2026.4.1 更新带来 Qwen3.5 MoE 支持和设备检测改进——如果之前遇到 NPU 识别问题，请测试验证。

4. **MoE 模型用户**: 新型 GPU 缓存机制（[#29887](https://github.com/ggml-org/llama.cpp/pull/29887)）应能改善小批次 MoE 推理延迟——观察内存使用模式变化。

5. **Windows 构建**: 正在清理 Windows 上的废弃警告（[b11378](https://github.com/ggml-org/llama.cpp/commit/b11378), [b11381](https://github.com/ggml-org/llama.cpp/commit/b11381)）——后续构建将更干净。

6. **WebGPU 用户**: f16 fill/set_rows 支持解决了启用 Flash Attention 时 GLM5 模型的 CI 失败问题。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate this Ollama digest into Simplified Chinese, following specific rules about preserving formatting while using natural technical Chinese register.

Let me translate carefully:

1. Keep all headings, tables, lists, etc.
2. Keep URLs, numbers, issue/PR references as-is
3. Keep technical terms in English (like API endpoints, PR numbers)
4. Use natural technical Chinese, not literal translation
5. No preamble, no markdown fences, just the translated content</think>

# Ollama 速报 — 2026-10-04

## 1. 今日要闻

MLX 后端持续获得大量投入：tokenizer 修复、Kolibri 1 支持和 SystemOne 模型改进均已合并。`/api/generate` 接受非 JSON 垃圾数据的严重 bug 已有修复 PR。Windows 迎来两个重要修复：Clef 头读取超过 2GiB 的问题，以及注册表主机路径中冒号的编码问题。

---

## 2. 发布与重大变更

| 项目 | 详情 |
|------|-------|
| **暂无新版本** | 过去 24 小时内无新标签发布 |

---

## 3. 新模型与硬件支持

| 功能 | 描述 | PR/Issue |
|---------|-------------|----------|
| **Kolibri 1 MLX 支持** | 为 Kolibri 1 模型架构添加原生 Metal 后端支持 | [#18780](https://github.com/ollama/ollama/pull/18780) |
| **SystemOne MLX 支持** | 在 Apple Silicon 上启用基于 Strands 架构的决策模型 | [#18701](https://github.com/ollama/ollama/pull/18701) (已合并) |
| **Strands Decider** | 新的决策准备与读取流程，分离前向传递逻辑 | [#18755](https://github.com/ollama/ollama/pull/18755) (已合并) |
| **结构化 SystemOne 标准** | 支持 string、object、array 形式的标准描述用于 choice/noul/score 问题 | [#18768](https://github.com/ollama/ollama/pull/18768) |
| **决策模型 MLX 改进** | 溢出拒绝、热启动延迟调优（M5 上节省约 5ms） | [#18776](https://github.com/ollama/ollama/pull/18776) (已合并) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **MLX tokenizer 语义** | 修复因丢弃 pretokenizer 阶段、Unicode/空格近似和 BPE 合并排序导致的 token-ID 不匹配 | 修复复杂分词模型的正确性问题 |
| **MLX 热启动延迟** | 调优路由流程 — M5 硬件上节省约 5ms | 决策模型更快产出首个 token |
| **传输效率** | 当注册表返回直接 200 响应时避免重新获取 blob | 减少模型拉取的带宽消耗 |
| **llama.cpp 更新** | 版本从 `b11232` 升级到 `b11351` | 持续获取上游改进 | [#18761](https://github.com/ollama/ollama/pull/18761) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | `/api/generate` 接受有效请求体后的非 JSON 垃圾数据 — 可能导致解析歧义 | 修复 PR 已开: [#18778](https://github.com/ollama/ollama/pull/18778) |
| **高** | Windows 上 Clef 头读取超过 2GiB — `/v1/systemone` 报 "non-finite logit" 或 "cannot open model" | 修复 PR: [#18777](https://github.com/ollama/ollama/pull/18777) |
| **中** | 伪设备被过滤后仍递增设备索引 — 导致 GPU 序号错误 | 修复 PR: [#18773](https://github.com/ollama/ollama/pull/18773) |
| **中** | Qwen3.8 GGUF 的 `think: "low"/"medium"/"high"` 被忽略 — 始终使用模板默认值 | 待处理: [#18766](https://github.com/ollama/ollama/issues/18766) |
| **中** | JSON schema 属性顺序在原生 llama-server 聊天路径中丢失（#7978 的回归） | 待处理: [#18717](https://github.com/ollama/ollama/issues/18717) |
| **中** | Gemma4: 开启 `think:true` 时直接回答而不进行推理，导致 JSON schema format 未强制执行 | 待处理: [#18774](https://github.com/ollama/ollama/issues/18774) |
| **低** | Windows 上 `localhost:3000` 注册表主机创建无效路径（目录名含冒号） | 修复 PR: [#18771](https://github.com/ollama/ollama/pull/18771) |
| **信息** | macOS M4 128GB 无法运行 mistral-medium-3.5:128b — 内存耗尽 | 待处理: [#18770](https://github.com/ollama/ollama/issues/18770) |

---

## 6. 这对应用开发者意味着什么

- **避免在 `/api/generate` 中发送垃圾数据** — 修复后，JSON 后的非 JSON 内容将返回 HTTP 400。请确保客户端发送干净的 JSON 请求体。
- **Windows 注册表用户**: 从含冒号的主机（如 `localhost:3000`）拉取模型现在可以正常工作了。
- **SystemOne 决策模型** — Windows 上使用 Clef 时，2GiB 读取修复应该能解决 `/v1/systemone` 失败问题。
- **工具消息处理** — OpenAI 兼容端点现在正确保留工具消息内容作为单一整体，修复了并行工具调用中的归属问题。
- **聊天模板中的思考内容** — 助手的思考内容现在会传递给聊天模板，实现多轮对话中正确的上下文传递。
- **Linux 上的 MLX** — 旧版 glibc（2.34 之前）的 `libdl` 链接问题已在 [#17567](https://github.com/ollama/ollama/pull/17567) 中解决。

---

*基于 GitHub 数据生成 — ollama/ollama @ 2026-10-04*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English LiteLLM digest into Chinese (Simplified Chinese based on the context - "上海稀宇科技有限公司", "简体中文"). I need to:

1. Translate all headings
2. Translate all body text
3. Keep all formatting (tables, lists, code blocks, etc.)
4. Keep URLs, issue numbers, version tags, file paths, etc. as-is
5. Use natural technical Chinese, not literal translation

Let me carefully translate this while preserving the exact structure.</think>

# LiteLLM 速报 — 2026-10-04

## 今日要点

LiteLLM 项目保持高速迭代节奏，一连发布三个版本（v1.105.0-rc.1、v1.104.0、v1.103.3），均已支持通过 cosign 进行 Docker 镜像签名校验。多项涉及虚拟密钥预算和计费的重大缺陷已暴露，包括 `BudgetExceededError` 使用过期 spend 导致错误拒绝，以及闲置 60 秒后预算耗尽的密钥被重新放行等竞态条件。SDK 新增 `run_tool_loop` 辅助函数用于多轮工具调用；Lens 可观测性 UI 在分页和追踪功能上有大幅改进。

---

## 版本发布与重大变更

| 版本 | 说明 |
|------|------|
| [v1.105.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-rc.1) | 候选发布版 |
| [v1.104.0](https://github.com/BerriAI/litellm/releases/tag/v1.104.0) | 稳定版 |
| [v1.103.3](https://github.com/BerriAI/litellm/releases/tag/v1.103.3) | 稳定版 |

**所有 LiteLLM Docker 镜像现均已采用 cosign 签名** — 密钥已在提交 `0112e53` 中引入。拉取镜像前请进行校验：

```bash
cosign verify ghcr.io/berriai/litellm:latest
```

---

## 新模型与硬件支持

过去 24 小时内未检测到新增模型或硬件支持条目。

---

## 性能与优化

| 领域 | 变更 | PR |
|------|------|-----|
| **SDK 工具执行** | 新增 `litellm.run_tool_loop()` 和 `litellm.arun_tool_loop()` 辅助函数，用于多轮智能体工作流 | [#44381](https://github.com/BerriAI/litellm/pull/44381) |
| **追踪分页** | 追踪列表/详情的签名分页方案；存储无关的追踪读取 | [#44452](https://github.com/BerriAI/litellm/pull/44452), [#44422](https://github.com/BerriAI/litellm/pull/44422) |
| **目录分页** | 可移植的目录分页，跨网关副本保留上游 continuation | [#44446](https://github.com/BerriAI/litellm/pull/44446) |
| **Lens 可观测性** | 实时调查追踪；Worker 连接引导；追踪抽屉组件化为可复用 SidePanel | [#44472](https://github.com/BerriAI/litellm/pull/44472), [#44475](https://github.com/BerriAI/litellm/pull/44475), [#44473](https://github.com/BerriAI/litellm/pull/44473) |

---

## 稳定性与回归问题

### 高优先级

| 问题 | 描述 | 状态 |
|------|------|------|
| [#27735](https://github.com/BerriAI/litellm/issues/27735) | 虚拟密钥 `BudgetExceededError` 使用过期的 spend，而 `/key/info` 显示 spend 低于 `max_budget` — 请求被错误拒绝 | OPEN（12 条评论）|
| [#43732](https://github.com/BerriAI/litellm/issues/43732) | 超过 `max_budget` 的密钥在闲置约 60 秒后被重新放行，直到批量写入器将 spend 刷新到数据库 | OPEN（5 条评论）|
| [#39057](https://github.com/BerriAI/litellm/issues/39057) | 缓存命中时 spend 为零，但 token 列回放原始用量 — token 报告的聚合基准不明确 | OPEN（14 条评论）|
| [#44336](https://github.com/BerriAI/litellm/issues/44336) | `vertex_ai/agent_engine` 静默丢弃 image/file/audio 内容部分，返回 HTTP 200 却带有虚构答案 | OPEN（3 条评论）|

### 中优先级

| 问题 | 描述 | 状态 |
|------|------|------|
| [#32357](https://github.com/BerriAI/litellm/issues/32357) | `/v1/messages` 适配器对 reasoning 模型编码错误 — `thinking_delta` 在 text 块内流式传输 → Anthropic SDK 收到空 content | OPEN（5 条评论）|
| [#42111](https://github.com/BerriAI/litellm/issues/42111) | `/v1/audio/speech` 对 OpenRouter 失败："Unable to map custom llm provider=openrouter" | OPEN（3 条评论）|
| [#44154](https://github.com/BerriAI/litellm/issues/44154) | 后台健康检查结果被错误归因到所有共享相同 `litellm_params.model` 的部署 | OPEN（3 条评论）|
| [#41357](https://github.com/BerriAI/litellm/issues/41357) | 开启 `alerting` 时代理每 30 秒泄漏一个 `SlackAlerting.periodic_flush` 任务 — 直至重启前持续增长 | CLOSED |

### 低优先级 / 已修复

| 问题 | 描述 | 状态 |
|------|------|------|
| [#29912](https://github.com/BerriAI/litellm/issues/29912) | Internal-user `max_budget` 阻止零费用模型 — `_PROXY_MaxBudgetLimiter` 忽略 `skip_budget_checks` | CLOSED |
| [#38515](https://github.com/BerriAI/litellm/issues/38515) | 用户的个人 `max_budget` 耗尽后，零费用模型被阻止 | CLOSED |
| [#38076](https://github.com/BerriAI/litellm/issues/38076) | Python 3.10 上 `import litellm` 失败 — `NotRequired` 从标准库导入但缺少回退方案 | CLOSED |

---

## 对应用开发者的影响

1. **预算执行存在竞态条件** — 若你依赖虚拟密钥预算，请注意密钥在闲置后可能短暂放行（#43732），或显示过期的 spend 数值（#27735）。这对生产环境成本控制至关重要。

2. **响应缓存导致 token 报告失真** — 缓存命中时 spend 记录为零，但 token 列会回放原始用量（#39057）。若你在 `spend_logs` 上进行聚合，费用看板可能出现 token 重复计算。

3. **SDK 新增智能体应用辅助函数** — `run_tool_loop()` 和 `arun_tool_loop()`（#44381）简化了多轮工具调用。建议将手写循环迁移至这些辅助函数。

4. **OpenRouter TTS 路由失效** — 在 [#42111] 修复前，请避免对 OpenRouter 提供商使用 `/v1/audio/speech`。

5. **Python 3.10 兼容性问题** — 若使用 Python 3.10，请升级到更高版本；由于标准库缺少 `NotRequired`，`import litellm` 在 3.10 上会失败。

6. **Docker 镜像校验已支持** — 生产部署应校验容器签名：

   ```bash
   cosign verify ghcr.io/berriai/litellm:v1.104.0
   ```

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this GitHub digest about Unsloth into Simplified Chinese. I need to:

1. Translate all the headings, body text, and content
2. Keep all Markdown structure exactly as-is (tables, lists, headings, etc.)
3. Keep technical terms, URLs, issue numbers, code references, file paths in their original form
4. Use natural technical Chinese suitable for a developer newsletter
5. Output ONLY the translation, no preamble or explanation

Let me go through and translate section by section:

**Title:**
# Unsloth 动态 — 2026-10-04

**Section 1 - Today's Highlights:**
A significant → 一个严重的
performance regression → 性能回归
affects multi-GPU tensor split deployments → 影响多GPU张量分割部署
builds since → 自某版本以来的构建
up to → 高达
sixes → 倍
Meanwhile → 与此同时
gaining → 获得/新增

**Section 2 - Releases & Breaking Changes:**
This is straightforward - I'll translate the table headers and content appropriately

**Section 3 - New Model & Hardware Support:**
Translate the descriptions while keeping technical terms

**Section 4 - Performance & Optimization:**
Translate the component names and impact descriptions

**Section 5 - Stability & Regressions:**
Critical, High, Medium - translate severity
Status - 状态
Link - 链接

**Section 6 - What This Means for Application Developers:**
Translate each bullet point

Let me now create the full translation:</think>

# Unsloth 动态 — 2026-10-04

## 1. 今日要闻

一个严重的**性能回归**正在影响多GPU张量分割部署：自 `b10715-mix-86bd2d3` 版本以来的构建显示解码速度下降高达 **2.9 倍**（RTX 5070 Ti 双卡环境下从 115 t/s 降至 48 t/s）。与此同时，Studio 后端正在集成 SageAttention 2，并新增了每模型自动跳过步骤功能，测试显示可实现 **1.44 倍至 1.81 倍**的推理加速。

---

## 2. 版本发布与重大变更

| 版本 | 变更 | 链接 |
|------|------|------|
| — | 过去 24 小时内无发布 | — |

---

## 3. 新模型与硬件支持

| 领域 | 详情 | 链接 |
|------|------|------|
| **量化** | 现在支持从 safetensors 读取预量化扩散模型检查点，适用于 torchao 0.17、0.18 及主版本 — 摆脱了对精确 pickle 类路径的依赖 | [#12645](https://github.com/unslothai/unsloth/pull/12645) |
| **GPU 支持** | 不支持 bfloat16 的 GPU（RX 5000/6000、T4、V100）现在可以加载带异常值的模型（Gemma、gpt-oss、Qwen3.5），自动降级为 float32 而非静默失败 | [#11533](https://github.com/unslothai/unsloth/pull/11533) |
| **音频模型** | HTDemucs、HTDemucs 6轨道、BS-RoFormer、Mel-Band RoFormer GGUFs 现已可加载至音频工作区 | [#12610](https://github.com/unslothai/unsloth/pull/12610) |
| **注意力内核** | SageAttention 2 从 Kernels Hub 按需加载；FlashAttention 4 依赖项在全新 Studio 安装时自动安装 | [#12654](https://github.com/unslothai/unsloth/pull/12654) |

---

## 4. 性能与优化

| 组件 | 变更 | 影响 |
|------|------|------|
| **每模型自动跳过步骤** | 新功能 — 对默认步骤数 ≥20 的模型默认使用 `transformer_cache=static`（此前仅在 `speed_mode=max` 时启用） | 五款模型推理速度提升 **1.44 倍至 1.81 倍**；`speed_mode=max` 模式下 MiniMax-H3 提升幅度最大 |
| **SageAttention 内核处理** | 探测 + 每次调用保护确保显式 `attention_backend="sage"` 永不失败、降速或产生噪点 | 修复 B200、T4 等无 Sage 内核显卡的可靠性问题 |
| **LTX-2 编译可复现性** | 固定 inductor 归约配置，使各服务器渲染结果一致 | LTX-2.3 输出确定性保证 |
| **Vulkan GPU 选优** | 在混合引脚场景中优先使用独立 GPU 而非共享内存集成显卡 | 混合 iGPU/dGPU 系统更好地利用显存 |

---

## 5. 稳定性与回归问题

### 严重

| 问题 | 严重程度 | 状态 | 链接 |
|------|----------|------|------|
| **张量分割解码速度下降 2.9 倍** — 自 `b10715-mix-86bd2d3` 回归，可能与 `max_cuda_graphs=64` 相关 | **严重** | 待处理 | [#12468](https://github.com/unslothai/unsloth/issues/12468) |
| **Xet 健康探测劫持 Triton** — 导致 diffusers/xformers 报错 `'function' object has no attribute 'fn'` | **严重** | 待处理 | [#12466](https://github.com/unslothai/unsloth/issues/12466) |
| **停止生成按钮冻结** — 模型卸载后生成继续，聊天界面冻结 | **严重** | 待处理 | [#12592](https://github.com/unslothai/unsloth/issues/12592) |

### 高

| 问题 | 严重程度 | 状态 | 链接 |
|------|----------|------|------|
| **Hugging Face 量化发现阻止离线模型加载** — 设备标签页离线状态下无法使用 | 高 | 待处理 | [#12415](https://github.com/unslothai/unsloth/issues/12415) |
| **网页搜索失败** — v0.1.902-beta 上 `h2_client` 连接重置 | 高 | 待处理 | [#12638](https://github.com/unslothai/unsloth/issues/12638) |
| **沙箱 `nul` 文件在 Windows 上破坏工具** — 保留设备名导致终端/Python 工具失败 | 高 | 待处理 | [#12473](https://github.com/unslothai/unsloth/issues/12473) |

### 中

| 问题 | 严重程度 | 状态 | 链接 |
|------|----------|------|------|
| **上下文长度计量器** — 工具调用移交时未更新；缺少自动压缩计数 | 中 | 待处理 | [#12624](https://github.com/unslothai/unsloth/issues/12624)、[#12625](https://github.com/unslothai/unsloth/issues/12625) |
| **实时监控器层级冲突** — 与下载状态弹出层重叠 | 中 | 待处理 | [#12623](https://github.com/unslothai/unsloth/issues/12623) |
| **TTS 朗读 Markdown 格式** — "星号星号" 被朗读出来 | 中 | 待处理 | [#12547](https://github.com/unslothai/unsloth/issues/12547) |
| **tool_choice="none" 留下孤立工具调用** — 流式工具调用缺少结束事件 | 中 | 待处理 | [#12626](https://github.com/unslothai/unsloth/issues/12626) |

---

## 6. 这对应用开发者意味着什么

- **如果你运行多 GPU 张量分割推理**：请暂停使用 `b10715-mix-86bd2d3` 之后的版本；回退至 `b10687-mix-67dfc8b` 或使用官方 `ggml-org` 构建，直到回归问题修复。

- **如果你显式使用 SageAttention 或 FlashAttention 4**：[#12641](https://github.com/unslothai/unsloth/pull/12641) 和 [#12654](https://github.com/unslothai/unsloth/pull/12654) 中的内核保护修复应能使这些后端更加可靠——预计静默回退或生成失败的情况会减少。

- **如果你面向老旧 GPU（T4、V100、RX 5000/6000）**：带异常值的模型现在会自动加载为 float32——不再有静默的精度损失。

- **如果你开发音频应用**：新增的 Speak/Music/Transcribe 分离和 HTDemucs/轨道支持扩展了生产就绪的音频工作流。

- **如果你使用托管运行时（AMD NPU、OpenVINO）**：[#12266](https://github.com/unslothai/unsloth/pull/12266) 中的修复防止了被遗弃的流阻塞模型——预计客户端断开后请求周转会更快。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*