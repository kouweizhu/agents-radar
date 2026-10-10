# AI 基础设施日报 2026-10-10

> 生成时间: 2026-10-10 01:53 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this cross-project comparison report from English to Chinese. They've given me very specific rules about how to do this - I need to preserve the Markdown structure exactly, keep technical terms in their original form, use natural technical Chinese register, etc.

Let me go through and translate this carefully, maintaining the exact structure and formatting.

Key things to preserve:
- All headings (##, ###)
- Tables (including alignment rows with |---|)
- Lists (bulleted and numbered)
- Bold/italic formatting
- Horizontal rules
- URLs
- Code spans and blocks
- Numbers and dates
- Project names, repository slugs, usernames, version tags, file paths, API/config identifiers
- Issue/PR references (#12345)
- Emoji (I see no emoji in the text actually)

Let me translate:</think>

# 跨项目对比报告 — 2026年10月10日

---

## 1. 生态系统概览

AI 推理与服务领域正经历硬件碎片化时期。今日活动反映出一个处于变革中的领域：**NVIDIA Blackwell (SM120)** 在多个项目中出现稳定性问题（vLLM、SGLang、llama.cpp），而 **AMD ROCm** 正在获得发展势头，vLLM 和 SGLang 都针对 MI355X 进行了优化。**Apple Silicon MLX** 正在退化（Ollama、Unsloth），**Rust 迁移** 正在 LiteLLM 中进行。新模型支持正在加速，涵盖新兴架构（DeepSeek V4.1、LFM2、TML Inkling），但量化 bug——特别是关于投机解码和前缀缓存的——仍然是生产事故的持续根源。

---

## 2. 活动对比

| 项目 | Issues（总计）| 最高评论数 Issue | PRs（总计）| 发布（24h）| 活跃 PRs（Open）|
|---------|----------------|---------------------|-------------|-----------------|-------------------|
| **vLLM** | ~60K | 101 (batch invariant) | ~2.2K | 0 | ~15 |
| **SGLang** | 79 | 30 (speculative decoding) | 500 | 0 | ~20 |
| **llama.cpp** | 6 | 30 (speculative decoding) | ~15 shown | 11 | ~20 |
| **Ollama** | 21 | 24 (M4 Mac memory) | 47 | 0 | ~15 |
| **LiteLLM** | ~50 | 118 (PyPI compromise) | ~25 shown | 1 (v1.106.0-dev.3) | ~15 |
| **Unsloth** | ~30 | 25 (VRAM OOM) | ~10 shown | 0 | ~10 |

**观察**：vLLM 保持最大的代码库，但没有发布。llama.cpp 积极发版（24小时内 11 个构建）。LiteLLM 的安全事件占据了主要注意力。Unsloth 和 Ollama 的表面积较小，但在新硬件上面临关键稳定性回归。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth | LiteLLM |
|----------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek V4.1 Flash** | ✅ (SM120, MI355X) | ✅ (DP, AMD prefill) | ❌ | ❌ | ❌ | ❌ |
| **LFM2-VL / d1-3B** | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| **TML Inkling** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Prism Bonsai 2 27B** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Kolibri 1 (MLX)** | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Qwen3-2.4T-A95B** | ✅ (MI355X) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **ScaleDown** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Gemma4 (MTP)** | ❌ | ❌ | ❌ (broken) | ❌ | ❌ | ❌ |

**谁领先**：SGLang 和 llama.cpp 在模型广度上领先，涵盖新兴架构（LFM2、TML Inkling、Bonsai）。vLLM 在 Blackwell（SM120）覆盖上领先，尽管存在稳定性问题。LiteLLM 在提供商广度上领先（新增 ScaleDown）。Unsloth 保持狭窄的微调专注，但在这方面表现出色。

---

## 4. 性能前沿

| 优化领域 | vLLM | SGLang | llama.cpp | Ollama | Unsloth | LiteLLM |
|-------------------|------|--------|-----------|--------|---------|---------|
| **KV cache 池化** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **量化 (W4A8/A16)** | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **投机解码** | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Triton 内核** | RFC (TD) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **分布式 (TP/PP/DP)** | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| **FlashAttention 变体** | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Embedding 优化** | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ |
| **Rust 后端** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (迁移中) |

**工作集中点**：

- **vLLM**：Tensor Descriptors 的 RFC 表明推动结构化内存访问。ROCm 优化（mono decode layer）正在活跃进行。
- **SGLang**：HiSparse、HiCache 和 CUDA Graph 修复占主导。PD 调度回收已落地。
- **llama.cpp**：CUDA SSM_SCAN、Vulkan RMS norm 和 Intel XMX 多列 matmul 显示底层内核工作。
- **Unsloth**：修复 RoPE int64 以支持 >2³¹ token 上下文。Embedding 学习率 bug 已修复。
- **LiteLLM**：Rust 迁移目标是亚毫秒开销。

---

## 5. 层级定位

| 层级 | 项目 | 角色 |
|-------|----------|------|
| **服务引擎** | **vLLM**、**SGLang**、**llama.cpp** | KV 缓存优化的推理服务器，支持张量并行、前缀缓存、投机解码 |
| **本地运行时** | **llama.cpp**、**Ollama**、**Unsloth** | 嵌入式或桌面级推理（llama.cpp：无服务器；Ollama：简单封装；Unsloth：训练导向） |
| **网关 / 代理** | **LiteLLM** | 统一 API 层，支持回退、支出追踪、认证、多提供商路由 |
| **训练 / 微调** | **Unsloth** | HuggingFace 集成的微调，支持 LoRA/QLoRA、GRPO、DPO |
| **模型转换** | **llama.cpp** (GGUF)、**Unsloth** | 模型格式转换和量化 |

**差异化**：vLLM 和 SGLang 在 Blackwell/AMD 性能上直接竞争。llama.cpp 服务于离线/无服务器推理场景。Ollama 面向开发者易用性。LiteLLM 作为消费层位于所有项目之上。Unsloth 占有一个垂直 niche（微调），其他项目不涉及。

---

## 6. 趋势信号

### 需要关注的行业趋势

1. **Blackwell (SM120) 不稳定性普遍存在** — 多个项目报告问题（非法内存访问、解码崩溃、低吞吐量）。该硬件正在消费级 RTX PRO 6000 中出货，但驱动/内核支持尚不成熟。**决策点**：推迟 Blackwell 部署或预留预算用于变通方案，直至 2027 年 Q1。

2. **AMD ROCm 正在获得实际生产吸引力** — vLLM 和 SGLang 都针对 MI355X（gfx950）发布了优化。这是除 NVIDIA 外最活跃的平台。**信号**：如果你的技术栈中有 AMD，多 GPU 供应商策略是可行的。

3. **投机解码中的量化 bug 是普遍现象** — llama.cpp、vLLM 和 SGLang 都有开放问题，量化草稿模型的行为与非投机模式不同。**风险**：使用 Q4_K_M 或类似量化运行投机解码的团队应针对 bf16 验证输出。

4. **Rust 正在渗透以 Python 为中心的 serving 栈** — LiteLLM 的 Rust 迁移（亚毫秒目标）表明 Python 开销在大规模下正在成为瓶颈。**影响**：预计 2027 年会出现更多混合 Rust/Python 架构。

5. **供应链安全是反复出现的主题** — LiteLLM 的 PyPI 事件和 Ollama 的 cosign 签名 Docker 镜像反映了加固态势。**行动**：验证你的容器签名并审计 pip 依赖。

6. **MLX (Apple Silicon) 正在退化** — Ollama 中两个关键 MLX panic（M4、M6）和 Unsloth 回归表明 MLX 后端不如 CUDA 路径稳定。**警告**：在这些问题解决前，不要依赖 Apple Silicon 进行生产训练/推理。

### Agent / 应用开发者应该监控的内容

- LiteLLM 中的预算执行 bug 可能导致无声的超支。
- vLLM 中的前缀缓存损坏（DFlash2/DSpark）可能产生错误输出。
- SGLang 和 llama.cpp 中的确定性推理很脆弱——在审计关键的工作流程中避免使用。
- 新模型支持正在快速发展（LFM2、TML Inkling、Bonsai）——在生产前验证你的模型选择是否有上游支持。
- API 兼容性正在变化（LiteLLM 的聊天 API 重构，Ollama 迁移变更）——在生产环境中锁定版本。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English vLLM Daily Digest into Simplified Chinese (简体中文), following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section, preserving all the formatting:

## 1. Today's Highlights

→ 今日要闻

Active development continues across Blackwell hardware support (SM120), with multiple DeepSeek-V4.1-Flash issues on RTX PRO 6000 systems drawing significant attention. The community is also advancing the RFC process for major architectural changes, including tensor descriptor adoption in Triton kernels and LoRA adapter lifecycle management for RL training. A notable bugfix merged for ROCm delivers mono decode layer optimization for MI355X.

→ Blackwell 硬件 (SM120) 支持持续推进，RTX PRO 6000 系统上的多个 DeepSeek-V4.1-Flash 问题引发大量关注。社区也在推进重大架构变更的 RFC 流程，包括 Triton 内核中的张量描述符采用和 RL 训练的 LoRA 适配器生命周期管理。ROCm 的一个重要 bugfix 已合并，为 MI355X 提供单解码层优化。

## 2. Releases & Breaking Changes

→ 版本发布与重大变更

No new releases in the last 24 hours.

→ 过去 24 小时内无新版本发布。
 
## 3. New Model & Hardware Support

→ 新模型与硬件支持

我正在整理不同硬件和模型的支持情况。DeepSeek-V4.1-Flash 在 SM120 上增加了 64-token 内核块支持，针对 Blackwell (RTX PRO 6000) 的稀疏 MLA 后端。DeepSeek-V4.1-Flash 在 MI355X 上的单解码层优化也已实现，ROCm (gfx950) 支持通过 VLLM_ROCM_MONO_DECODE=1 启用。Qwen3 的相关优化也在追踪中。

## 4. Performance & Optimization

→ 性能与优化

性能优化工作取得显著进展。DeepSeek-V4.1 在 MI355X 上的单解码层已完成合并，针对 ROCm 数据并行部署进行了优化。批量推理的不变性优化也在持续推进中。张量描述符的采用正在评估中，以优化内核的内存访问。

KV 缓存池的相关文档也在完善中，明确了 max_num_batched_tokens 对缓存池大小的影响。基准测试指标路由方面，新增了 PD 分离部署的 --metrics-url 覆盖支持，为路由器部署提供更灵活的指标配置。

稳定性方面存在多个严重问题需要关注。GLM-5.3-Flash 出现解码退化，长序列输出可能出现损坏，特别是在 W4A16 量化的 B300 配置上。DFlash2/DSpark 与前缀缓存结合时也存在输出异常问题。

DeepSeek-V4.1 在 SM120 上的解码性能表现不佳，使用 --enforce-eager 时吞吐量极低，CUDA graph 暂不可用。FP8 自动选择机制存在缺陷，kv_cache_dtype="fp8" 会自动选择 FlashInfer 后端而不检查 JIT 可用性，导致崩溃。

TP Worker 在 DeepSeek-V4-Pro TP=8 MTP  speculative decoding 时出现挂起问题。GLM-5.3 CUDA 内存访问异常持续发生，涉及 KDA linear-attention、MHC TileLang 和 TRT-LLM fused MoE 内核。RDNA4 FP8 性能出现回归。

DeepSeek V3 工具解析器存在截断问题，collect_env.py 在非 Linux 平台崩溃。

对于应用开发者来说，需要关注几个关键点。Blackwell (SM120) 用户的 DeepSeek-V4.1-Flash 在 RTX PRO 6000 系统上存在多个问题，解码性能在 eager 模式下显著下降。GLM-5.3 用户在长解码会话中出现输出退化，特别是在 W4A16 量化配置上。AMD ROCm 用户的 MI355X (gfx950) 路径正在改进，单解码层优化已合并。FlashInfer 用户应避免在未安装 CUDA toolkit 或 flashinfer-cubin 的情况下使用 kv_cache_dtype="fp8"。NIXL P/D 分离部署方面新增了认证层和侧通道回环问题的故障排除文档。RL + LoRA 工作流用户应监控 LoRA 适配器生命周期问题。</think>

# vLLM 每日简报 — 2026-10-10

## 1. 今日要闻

Blackwell 硬件 (SM120) 支持持续推进，RTX PRO 6000 系统上的多个 DeepSeek-V4.1-Flash 问题引发大量关注。社区也在推进重大架构变更的 RFC 流程，包括 Triton 内核中的张量描述符采用和 RL 训练的 LoRA 适配器生命周期管理。ROCm 的一个重要 bugfix 已合并，为 MI355X 提供单解码层优化。

## 2. 版本发布与重大变更

过去 24 小时内无新版本发布。

## 3. 新模型与硬件支持

| 项目 | 详情 | 链接 |
|------|--------|------|
| **DeepSeek-V4.1-Flash on SM120** | 为 Blackwell (RTX PRO 6000) 的稀疏 MLA 后端添加 64-token 内核块支持 | [PR #60762](https://github.com/vllm-project/vllm/pull/60762) |
| **DeepSeek-V4.1-Flash on MI355X** | ROCm (gfx950) 单解码层优化，通过 `VLLM_ROCM_MONO_DECODE=1` 启用 | [PR #60397](https://github.com/vllm-project/vllm/pull/60397) |
| **Qwen3.8-2.4T-A95B** | AMD MI355X/gfx950 性能优化跟踪 | [Issue #57149](https://github.com/vllm-project/vllm/issues/57149) |
| **Qwen3.8-Flash-Next** | ROCm gfx950/MI355X 优化跟踪 | [Issue #59575](https://github.com/vllm-project/vllm/issues/59575) |

## 4. 性能与优化

| 领域 | 状态 | 详情 | 链接 |
|------|--------|--------|------|
| **DeepSeek-V4.1 decode on MI355X** | **已合并** | 单解码层 + persistent FlyDSL 启动，覆盖全部 30 个 backbone 层 | [PR #60397](https://github.com/vllm-project/vllm/pull/60397) |
| **Batch Invariant optimization** | 进行中 | 批量不变性推理优化追踪 issue (101 条评论) | [Issue #27433](https://github.com/vllm-project/vllm/issues/27433) |
| **DeepSeek-V4 prefill DBO** | 进行中 | ROCm 数据并行部署的双批处理重叠优化 | [PR #57773](https://github.com/vllm-project/vllm/pull/57773) |
| **Triton TD adoption** | RFC | 评估 `tl.make_tensor_descriptor` API 用于内核结构化内存访问 | [Issue #42545](https://github.com/vllm-project/vllm/issues/42545) |
| **KV cache pool docs** | 开放 | 明确 `max_num_batched_tokens` 也会缩小 KV cache pool 大小 | [PR #48322](https://github.com/vllm-project/vllm/pull/48322) |
| **Bench metrics routing** | 开放 | PD 分离部署新增 `--metrics-url` 覆盖，支持路由器后场景 | [PR #59587](https://github.com/vllm-project/vllm/pull/59587) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 描述 | 修复 PR |
|----------|-------|-------------|--------|
| **严重** | GLM-5.3-Flash decode degeneration | W4A16 量化 GLM-5.3-Flash (B300) 累积推理后长解码输出损坏 | — |
| **严重** | DFlash2/DSpark + prefix caching | v0.30/0.31 Qwen3.8-27B NVFP4 (compressed-tensors) 缓存命中后输出损坏 | — |
| **高** | DeepSeek-V4.1-Flash SM120 decode perf | `--enforce-eager` 下解码吞吐极低；CUDA graph 不可用 | — |
| **高** | FP8 auto-select 崩溃 | `kv_cache_dtype="fp8"` 自动选择 FlashInfer 后端但未检查 JIT，崩溃而非回退到 TRITON_ATTN | — |
| **高** | TP Worker hang | DeepSeek-V4-Pro TP=8 MTP 投机解码导致 `EngineDeadError` | — |
| **中** | GLM-5.3 CUDA illegal memory access | 4xB200 上 KDA linear-attention、MHC TileLang、TRT-LLM fused MoE 内核反复 IMA | — |
| **中** | RDNA4 FP8 回归 | gfx1201 上选择 `RowWiseTorchFP8ScaledMMLinearKernel`，自 v0.28 起解码慢 5-24% | — |
| **中** | DeepSeek V3 tool parser | 非 `'"}'` 结尾的最终流式 tool 参数被截断 | [PR #48343](https://github.com/vllm-project/vllm/pull/48343) |
| **低** | collect_env.py crash | 非 Linux 平台 AssertionError | [PR #48354](https://github.com/vllm-project/vllm/pull/48354) |

## 6. 应用开发者须知

- **Blackwell (SM120) 用户**：RTX PRO 6000 系统上的 DeepSeek-V4.1-Flash 存在多个问题 — eager 模式下解码吞吐显著下降，CUDA graph 目前不可用。内核块尺寸修复已合入 PR #60762。

- **GLM-5.3 用户**：W4A16 量化配置下长连续解码会话出现输出退化。建议避免长连续解码或考虑其他量化方案。

- **AMD ROCm 用户**：MI355X (gfx950) 路径正在改进，单解码层优化已合并；请关注 issue #57149 了解 Qwen3.8-2.4T-A95B 优化进展。

- **FlashInfer 用户**：如未安装 CUDA toolkit 或 `flashinfer-cubin`，请避免使用 `kv_cache_dtype="fp8"`，因为自动后端选择会崩溃。

- **NIXL P/D 分离部署**：新增故障排除文档，涵盖跨节点部署时的认证层和侧通道回环问题。

- **RL + LoRA 工作流**：Issue #48297 追踪的 LoRA 适配器生命周期问题会导致 sleep/wake 循环时崩溃 — 此配置用户请关注进展。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest from English to Chinese. I need to:
1. Translate all the content while keeping the Markdown structure
2. Keep URLs, issue numbers, code identifiers as-is
3. Use natural technical Chinese register
4. Preserve all formatting including tables, headings, etc.

Let me translate section by section while maintaining the structure.</think>

# SGLang 每日简报 — 2026-10-10

## 今日要点

SGLang 社区完成了 DeepSeek V4.1 的多项优化，包括支持 MegaMoE 的 DP attention 和 AMD prefill context parallel（[#43228](https://github.com/sgl-project/sglang/pull/43228)、[#43465](https://github.com/sgl-project/sglang/pull/43465)）。多个影响 DSpark compact 和 large decode 路径的关键 CUDA Graph 缺陷已修复，包括 TP8 配置下时序敏感的非法内存访问问题（[#31023](https://github.com/sgl-project/sglang/issues/31023)、[#33356](https://github.com/sgl-project/sglang/issues/33356)）。社区还继续强化确定性推理，修复了 prefill chunk 短于对齐阈值时调度器卡死的问题（[#43444](https://github.com/sgl-project/sglang/pull/43444)）。

---

## 版本发布与重大变更

过去 24 小时内无版本发布。

---

## 新模型与硬件支持

| 项目 | 详情 | PR/Issue |
|------|---------|----------|
| **DeepSeek V4.1 DP Attention** | 为带视觉层的 V4.1 checkpoint 启用支持 MegaMoE 的 DP attention | [#43228](https://github.com/sgl-project/sglang/pull/43228) |
| **DeepSeek V4.1 AMD Prefill** | 为 AMD GPU 添加 prefill context parallel 支持 | [#43465](https://github.com/sgl-project/sglang/pull/43465) |
| **DeepSeek V4.1 A5 Compressor** | 将 A5 compressor 路由至显式 SWA 映射的状态表 | [#40816](https://github.com/sgl-project/sglang/pull/40816) |
| **摩尔线程 (MUSA) GPU** | 一级支持路线图持续推进 | [#16565](https://github.com/sgl-project/sglang/issues/16565) |
| **NPU Radix Eviction** | 为 NPU 上的 `--radix-eviction-policy-config` 添加端到端冒烟测试 | [#39938](https://github.com/sgl-project/sglang/pull/39938) |
| **FlashInfer FP4 GEMM** | 修复 compressed-tensors NVFP4 checkpoint 的自动调优 | [#43464](https://github.com/sgl-project/sglang/pull/43464) |

---

## 性能与优化

| 领域 | 变更 | PR/Issue |
|------|--------|----------|
| **HiSparse** | 避免 eager 备用路径中的 host 同步 | [#41446](https://github.com/sgl-project/sglang/pull/41446) |
| **KV Sizing** | 在 capped Full prefill 角色的 KV sizing 中跳过 eager activation reserve | [#43435](https://github.com/sgl-project/sglang/pull/43435) |
| **HiCache** | 为 admission-time 预取恢复保留设备覆盖 | [#43466](https://github.com/sgl-project/sglang/pull/43466) |
| **确定性推理** | 修复 prefill chunk 短于对齐值（4096）时的卡死问题 | [#43444](https://github.com/sgl-project/sglang/pull/43444) |
| **AMD FP8 KV** | 在 e4m3fnuz 上使 FP8 KV 提交饱和而非 NaN 溢出 | [#42982](https://github.com/sgl-project/sglang/pull/42982) |
| **Mamba DCP** | 为 checkpoint 捐赠保留 mamba chunk grid 上的 chunked prefill 切割 | [#41701](https://github.com/sgl-project/sglang/pull/41701) |
| **Speculative Decoding** | 跨调用方提供的 TP 组减少 available_memory_gb | [#42296](https://github.com/sgl-project/sglang/pull/42296) |
| **Hybrid Attention** | 在 FA 后端按调用形式分发 hybrid-model 全注意力层 | [#42333](https://github.com/sgl-project/sglang/pull/42333) |
| **PD Scheduling** | 请求槽耗尽时回收停放的 optimistic prefill | [#43442](https://github.com/sgl-project/sglang/pull/43442) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **严重** | DSpark compact target-verify CUDA Graph TP8 时序敏感非法内存访问 | 由 [#31195](https://github.com/sgl-project/sglang/pull/31195) 修复， [#31023](https://github.com/sgl-project/sglang/issues/31023) 已关闭 |
| **严重** | DSpark large decode CUDA-Graph TP8 非确定性非法内存访问（v0.5.16） | [#33356](https://github.com/sgl-project/sglang/issues/33356) 已关闭 |
| **高** | 确定性推理 + repetition_penalty 导致 granite-4.0-h 调度器卡死 | 待处理 [#43061](https://github.com/sgl-project/sglang/issues/43061) |
| **高** | GLM-5.3 使用 DFLASH 投机解码出现严重重复/退化循环 | 待处理 [#40843](https://github.com/sgl-project/sglang/issues/40843) |
| **中** | 断开的流式客户端留下僵尸请求（#34160 回滚后的回归） | 待处理 [#36333](https://github.com/sgl-project/sglang/issues/36333) |
| **中** | 已中止排队请求时 CUDA VMM 多模态传输切片泄漏 | 待处理 [#43402](https://github.com/sgl-project/sglang/issues/43402) |
| **中** | GPU JPEG 解码可能覆盖排队 GPU 工作仍在读取的内存 | 待处理 [#43075](https://github.com/sgl-project/sglang/issues/43075) |
| **中** | 全部缓存状态锁定时 Mamba cache 断言导致引擎崩溃 | 待处理 [#43204](https://github.com/sgl-project/sglang/issues/43204) |
| **低** | sglang.Engine 使用 `dtype="float32"` 时因 `KeyError: torch.float32` 崩溃 | 待处理 [#43162](https://github.com/sgl-project/sglang/issues/43162) |
| **低** | `chunked_prefill_size=-1` 推导负的 mem_fraction_static | 待处理 [#43160](https://github.com/sgl-project/sglang/issues/43160) |

---

## 这对应用开发者的意义

1. **DeepSeek V4.1 生产就绪**：今天的 V4.1 优化（DP attention、A5 compressor 路由、AMD prefill 支持）使该模型更接近生产级服务部署。如果您正在部署 DeepSeek V4.1，预计吞吐量和硬件支持将得到改善。

2. **确定性推理进展**：小 prefill chunk 时调度器卡死的修复（[#43444](https://github.com/sgl-project/sglang/pull/43444)）解决了使用 `--chunked-prefill-size < 4096` 或在 DP attention 分割配置上运行时的常见陷阱。然而，确定性推理仍然脆弱——[#43061](https://github.com/sgl-project/sglang/issues/43061) 和 [#43055](https://github.com/sgl-project/sglang/issues/43055) 仍待处理。

3. **流式客户端资源管理**：如果您构建流式客户端，请注意僵尸请求问题（[#36333](https://github.com/sgl-project/sglang/issues/36333)）——断开的客户端可能留下解码至 max_tokens 的请求。实现显式的客户端取消或超时处理。

4. **VMM 多模态部署**：CUDA VMM 传输切片泄漏（[#43402](https://github.com/sgl-project/sglang/issues/43402)）影响使用 `--mm-feature-transport cuda_vmm` 的部署。执行前中止的多模态请求可能泄漏内存——使用此配置时请密切监控。

5. **GLM 模型用户**：今天修复了多个 GLM 相关问题，包括工具参数保留（[#43389](https://github.com/sgl-project/sglang/pull/43389)、[#43264](https://github.com/sgl-project/sglang/pull/43264)）。如果您使用 GLM-4 或 GLM-5 工具调用，这些改进应能提高可靠性。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this GitHub digest about llama.cpp from English to Chinese (Simplified Chinese). I need to:

1. Translate ONLY the content, keeping all the formatting, links, PR numbers, etc.
2. Use natural technical Chinese, the register of a Chinese developer newsletter
3. Preserve the exact Markdown structure: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
4. Keep URLs, issue/PR references (#12345), version tags, file paths, and identifiers in their original form
5. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output

Let me go through and translate while maintaining the structure:

Title: # llama.cpp Digest — 2026-10-10

## 1. Today's Highlights

The project delivered a packed set of backend optimizations and correctness fixes across CUDA, OpenCL, and Vulkan. Notably, the sampling graph now remains static across ubatches (b11530), which resolves scheduling issues with GGML_SCHED_NO_REALLOC. Several critical memory safety fixes landed, including an out-of-bounds write fix in ggml_acc (b11529) and OpenCL kernel compilation fixes for A6x GPUs (b11533).

## 2. Releases & Breaking Changes

| Version | Change | PR |
|---------|--------|-----|
| b11531 | **Chat API refactored** — internal API restructuring for chat handling | [#30210](https://github.com/ggml-org/llama.cpp/pull/30210) |
| b11532 | ModernBERT encoders now use exact GELU (not tanh approximation) — may affect numerical output | [#30108](https://github.com/ggml-org/llama.cpp/pull/30108) |
| — | Vendor dependency update: deep nested JSON patch applied (to be reverted after upstream bump) | [#30253](https://github.com/ggml-org/llama.cpp/pull/30253) |

No binary release artifacts listed beyond the usual macOS/arm64 builds.

## 3. New Model & Hardware Support

- **TML Inkling architecture** — full model support merged, including GGUF converter and custom kernels (Flash Attention banded attention, int64_t for large MoEs) | [#25731](https://github.com/ggml-org/llama.cpp/pull/25731)
- **Prism Bonsai 2 27B** — runtime support added | [#29600](https://github.com/ggml-org/llama.cpp/pull/29600)
- **LFM2-VL / LFM2.5-VL / d1-3B** — tile and layout matching transformers (mtmd pipeline) | [#30261](https://github.com/ggml-org/llama.cpp/pull/30261)

I'm seeing additional model support details, particularly around vision-language models and custom hardware optimizations. The Prism Bonsai and LFM series demonstrate expanded runtime compatibility, while TML Inkling shows advanced architectural flexibility with specialized kernels for complex neural network configurations.

The emerging support includes multiple GPU architectures, with specific enhancements for Intel XMX and Mistral Small 4 platforms. These developments suggest ongoing refinement of cross-platform inference capabilities, focusing on performance optimization and hardware-specific tuning.

I'm integrating advanced techniques like Intel XMX's multi-column matrix vector multiplication for speculative decoding scenarios. The system demonstrates significant improvements in memory management, CUDA routing efficiency, and Vulkan computational strategies. Notably, the embedding model and benchmarking components receive targeted optimizations to enhance overall inference performance.

Key technical advancements include refined memory allocation, strategic kernel redesigns, and precise computational pathway implementations across diverse hardware configurations.

Critical stability concerns emerge around speculative decoding mechanisms, particularly in quantized target environments where greedy output divergences persist. Significant hardware compatibility challenges surface with CUDA and Gemma4-assistant models, alongside critical memory safety vulnerabilities requiring immediate resolution.

Vendor and dependency updates introduce potential architectural modifications, with chat API restructuring signaling potential systemic changes. Precise numerical implementations, especially in GELU activation functions, demand careful verification to prevent potential computational inconsistencies.

New model support expands technological capabilities, introducing specialized architectures like TML Inkling, Prism Bonsai, and LFM variants. Hardware ecosystem enhancements include A6x GPU optimizations, Intel XMX matrix engine improvements, and Mistral Small 4 support, representing comprehensive technological infrastructure developments.

Backend performance shows remarkable progress across multiple technological domains. CUDA SSM_SCAN eliminates redundant copies, while CUDA mul_mat_id resolves expert routing challenges. Vulkan RMS Norm introduces advanced subgroup reduction techniques, and memory allocation strategies optimize embedding model resource utilization. The llama-bench benchmarking tool now dynamically manages computational sizing, reflecting sophisticated engineering approaches.

Critical technological investigations continue around quantization issues, particularly examining IQ3_S performance on emerging RTX GPU architectures and potential VRAM leak scenarios in advanced model configurations.

Significant application development insights emerge, highlighting server deployment complexities. The chat API refactor introduces potential systemwide restructuring, while sampling graph modifications promise enhanced reliability with ubatch configurations. Quantized inference scenarios require careful navigation, especially in speculative decoding contexts. Containerized inference environments demand precise cgroup CPU quota management, with new architecture support creating compelling production deployment opportunities.

Notably, the Metal/CUDA framework resolves critical determinism challenges, presenting a more consistent computational approach for complex inference scenarios.</think>

# llama.cpp 动态 — 2026-10-10

## 1. 今日要闻

项目发布了一大批后端优化和正确性修复，涵盖 CUDA、OpenCL 和 Vulkan。值得注意的是，采样图现在在 ubatch 间保持静态（b11530），这解决了 GGML_SCHED_NO_REALLOC 的调度问题。多个关键的内存安全修复也已完成，包括 ggml_acc 中的越界写入修复（b11529）和 A6x GPU 的 OpenCL 内核编译修复（b11533）。

## 2. 发布与破坏性变更

| 版本 | 变更 | PR |
|---------|--------|-----|
| b11531 | **Chat API 重构** — 内部 API 结构重组 | [#30210](https://github.com/ggml-org/llama.cpp/pull/30210) |
| b11532 | ModernBERT 编码器现在使用精确 GELU（而非 tanh 近似）— 可能影响数值输出 | [#30108](https://github.com/ggml-org/llama.cpp/pull/30108) |
| — | 依赖更新：应用了深度嵌套 JSON patch（上游版本升级后需回滚）| [#30253](https://github.com/ggml-org/llama.cpp/pull/30253) |

未列出除常规 macOS/arm64 构建之外的二进制发布产物。

## 3. 新模型与硬件支持

- **TML Inkling 架构** — 完整模型支持已合并，包含 GGUF 转换器和自定义内核（Flash Attention 带状注意力，针对大 MoE 使用 int64_t）| [#25731](https://github.com/ggml-org/llama.cpp/pull/25731)
- **Prism Bonsai 2 27B** — 运行时支持已添加 | [#29600](https://github.com/ggml-org/llama.cpp/pull/29600)
- **LFM2-VL / LFM2.5-VL / d1-3B** — tile 和 layout 与 transformers 对齐（mtmd 流水线）| [#30261](https://github.com/ggml-org/llama.cpp/pull/30261)
- **OpenCL A6x GPU** — 内核编译修复（跳过 kernel_cpy_f32_f32_pack 以避免着色器编译器崩溃）| [#30176](https://github.com/ggml-org/llama.cpp/pull/30176)
- **Intel XMX** — 针对重排序 K-quant 和 Q8_0 权重的多列 mul_mat_vec_q，针对投机解码验证（2–8 tokens/step）和短提示批处理进行优化 | [#29864](https://github.com/ggml-org/llama.cpp/pull/29864)
- **Mistral Small 4** — MUL_MAT_ID 中 expert down-projection 支持 GGML_PREC_F32（CUDA）| [#30260](https://github.com/ggml-org/llama.cpp/pull/30260)

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **CUDA SSM_SCAN** | 移除了状态快照后的冗余拷贝 | 降低显存带宽 |
| **CUDA mul_mat_id** | 修复了重复 expert ID 计算（导致 MoE 路由错误）| 正确性 + 潜在加速 |
| **Vulkan RMS Norm** | 子组归约替代 workgroup 归约 | 实测收益：Intel B70 Arc Pro, RTX 4060 Ti, AMD 7900 XT |
| **Embedding 模型** | 当图不产生 logits 时跳过 logits buffer 分配 | 大词表（bge-m3: 250K tokens）每批次节省约 1 MiB 内存 |
| **llama-bench** | 当 -fitc 大于所需基准大小时遵守该参数 | 更准确的基准测试 |
| **图排序** | 重排 get_rows 用于 embedding；改进了 Gemma4 的输入 embedding 构造 | Embedding 工作负载效率提升 |
| **cgroup 配额** | 尊重 cgroup v2 CPU 配额以确定默认线程数 | 防止容器中 CFS 限流 |

**SYCL/Q4_K MMVQ**：行配对优化扩展至 BMG 上的 5–8 列 | [#30226](https://github.com/ggml-org/llama.cpp/pull/30226)

## 5. 稳定性与回归

| 问题 | 严重程度 | 状态 |
|-------|----------|--------|
| **投机解码发散** — 量化目标（Q4_K_M）上贪心输出与非投机运行不同，但与 bf16 一致 | **高** — 正确性 bug | 待解决，30 条评论 [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) |
| **llama-server 在 CUDA 上崩溃** — Qwen3.6-27B（Windows, RTX 5060 Ti）| **高** — 崩溃 | 标记为过时关闭 [#23210](https://github.com/ggml-org/llama.cpp/issues/23210) |
| **Gemma4-assistant MTP 加载失败** — "invalid vector subscript"，回归 b9553→b9702 | **高** — 回归 | 标记为过时关闭 [#24795](https://github.com/ggml-org/llama.cpp/issues/24795) |
| **ggml_acc 越界写入** — 负偏移量导致 size_t 截断 | **严重** — 内存安全 | b11529 已修复 [#30135](https://github.com/ggml-org/llama.cpp/issues/30135) |
| **CUDA/MSVC round 不一致** — CPU 与 GPU 行为不同 | **中** — 正确性 | b11538 已修复 [#30229](https://github.com/ggml-org/llama.cpp/pull/30229) |
| **IQ3_S 在 RTX 5060Ti (Blackwell) 上产生垃圾** | **中** — 正确性 | 待解决，7 条评论 [#28581](https://github.com/ggml-org/llama.cpp/issues/28581) |
| **VRAM 泄漏** — DeepSeek V4 Flash + DSpark（每 PP+TG 循环 10 MB）| **中** — 内存泄漏 | 待解决，2 条评论 [#27155](https://github.com/ggml-org/llama.cpp/issues/27155) |

## 6. 应用开发者需要关注什么

- **服务端部署**：Chat API 重构（b11531）如果您直接依赖内部 chat 结构可能需要更新。采样图修复（b11530）配合 `--ubatch-size` 和静态图调度提升了可靠性。
- **量化推理**：使用 Q4/Q5 量化进行投机解码时请注意发散问题——考虑回退到 bf16 目标或禁用投机解码直至问题修复。
- **容器化推理**：cgroup CPU 配额修复（PR #30263）对 Kubernetes/Docker 部署至关重要——它可防止超量使用并在 CPU 限制下提升吞吐量。
- **Embedding/重排序**：Logits buffer 优化（PR #30255）对大词表模型每请求节省约 1 MiB 内存——在规划高吞吐量 embedding 服务时可据此估算内存。
- **新架构**：TML Inkling 和 Prism Bonsai 2 支持已合并——如果您有兼容的权重，这些现在可以用于生产推理。
- **Metal/CUDA 正确性**：MSVC round 修复解决了 Windows CUDA 构建中可能影响确定性的数值不匹配问题。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Chinese. I need to:
1. Output ONLY the translation, no preamble or explanation
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, code, issue/PR references as-is
4. Use natural technical Chinese register

Let me translate this carefully while preserving all the formatting and technical terms.</think>

# Ollama 速报 — 2026-10-10

## 1. 今日要闻

Ollama 开发活跃，多条战线齐头并进：安全补丁（升级 seroval 修复 CVE-2026-104846）、新模型支持（Kolibri 1 on MLX、多模态 embedding）、文档重构。不过若干严重稳定性问题持续存在——尤其涉及 Apple Silicon 内存处理、AMD Vulkan 和 NVIDIA Blackwell GPU 的回归问题。过去 24 小时内无新版本发布。

## 2. 发布与重大变更

- **过去 24 小时无新版本发布**
- **迁移变更**：PR [#18908](https://github.com/ollama/ollama/pull/18908)（已关闭）暂时移除了后台模型迁移机制，原因是高吞吐量 embedding 工作负载下每次请求都有额外开销和 GC 压力。

## 3. 新模型与硬件支持

| 项目 | 详情 | PR/Issue |
|------|---------|----------|
| **Kolibri 1 (MLX)** | Apple Silicon MLX runner 支持已添加 | [#18780](https://github.com/ollama/ollama/pull/18780) |
| **多模态 embedding** | MLX runner 上的 EmbeddingGemma2Model 架构，支持通过 `/api/embed` 为每个 item 传入媒体 | [#18820](https://github.com/ollama/ollama/pull/18820) |
| **d1-3B / d1-omni-600M** | 请求添加 LiquidAI decision 模型——目前报错 `unsupported decision encoding "lfm2-d1"` | [#18890](https://github.com/ollama/ollama/issues/18890) |
| **Gemma4:12b** | 新变体运行时错误：`Gemma4Assistant requires ctx_other to be set` | [#18898](https://github.com/ollama/ollama/issues/18898) |

## 4. 性能与优化

- **Olmo3 工具参数中的 Unicode**：PR [#18906](https://github.com/ollama/ollama/pull/18906) 修复了非 ASCII 字符（如 `get_weather(location="Zürich, 日本 🌦️")`）在工具调用中的损坏问题——之前 UTF-8 连续字节会丢失。
- **Mistral `[THINK]` reasoning**：PR [#18877](https://github.com/ollama/ollama/pull/18877) 正确拆分 Mistral 的括号内推理标签，防止其泄露到使用该模板的模型的响应内容中。
- **Responses 历史中的自定义工具调用**：PR [#18911](https://github.com/ollama/ollama/pull/18911) 允许在对话中使用 `custom_tool_call` 或 `custom_tool_call_output` 继续对话，保留调用 ID 和输入文本。

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 详情 |
|----------|-------|---------|
| **严重** | #18770 — mistral-medium-3.5:128b on M4 Mac | 消耗 127GB RAM + >100GB wired（模型 80GB）；运行速度约每分钟 1 词。 |
| **高** | #18856 — MLX runner panic (qwen3.6:35b-mlx) | 0.35.0 回归问题；0.40.x 上可正常工作 |
| **高** | #17748 — AMD Radeon 780M Vulkan 回归 | Ollama ≥0.32.10 中 `radv/amdgpu: Not enough memory`；早期版本正常 |
| **高** | #18276 — qwen3moe + Blackwell (sm_120) crash | RTX 5070 Ti Laptop 上 warmup 时 CUDA 错误 |
| **高** | #18885 — Mac Mini M6 上 MLX panic | 即使是小模型如 gemma4:e2b-mlx 也会报 `mlx runner failed: panic: mlx` |
| **中** | #17380 — Windows CUDA warmup 失败 | RTX 5070 Ti 间歇性 `CUDA error: shared object initialization failed` |
| **中** | #18712 — Windows 自动更新遗留 .tmp DLL | 更新后 CUDA 后端 `ggml-cuda.dll` 丢失 → 0B VRAM / 回退到 CPU |
| **中** | #18898 — Gemma4:12b 初始化错误 | `Gemma4Assistant requires ctx_other to be set` |
| **中** | #18534 — reasoning_content 被静默丢弃 | OpenAI 兼容端点忽略 DeepSeek 的 `reasoning_content` 字段 |
| **低** | #18909 — 功能请求：禁用自动模型升级 | 用户希望阻止自动下载耗尽 SSD 空间 |

**安全修复**：PR [#18907](https://github.com/ollama/ollama/pull/18907) 升级 `seroval` 至 1.6.2 以修复 CVE-2026-104846。

## 6. 对应用开发者的影响

1. **生产环境避免 MLX 工作负载** — 0.40.x 中 qwen3.6:35b-mlx 和 gemma4:mlx 的回归问题表明 MLX 后端不稳定。若 MLX 是关键依赖，建议使用 0.35.0。

2. **NVIDIA Blackwell (sm_120) 用户需谨慎测试** — qwen3moe 和 GPT-oss 模型在 RTX 5070 Ti 上 warmup 时均会崩溃。这影响了自动启用的 flash attention。

3. **Windows CUDA 用户更新后检查 ggml-cuda.dll** — 自动更新 bug 可能静默回退到 CPU。若性能意外下降，请检查 VRAM 分配。

4. **DeepSeek 集成风险** — 若使用带 reasoning 的 DeepSeek 模型，OpenAI 兼容端点会静默丢弃 `reasoning_content`。这会导致对话回放失败。请关注后续修复。

5. **Embedding 工作负载受益** — 移除后台迁移（PR #18908）应能降低高吞吐量 `/api/embed` 使用的每次请求延迟和 GC 压力。

6. **关注 seroval 依赖** — 若你嵌入了 Ollama 或运行 MCP 服务器，请确保安全补丁尽快部署到你的环境。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest from English to Chinese. I need to:
1. Output ONLY the translation
2. No preamble, no explanation, no markdown fences
3. Preserve the Markdown structure exactly (headings, tables, lists, etc.)
4. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
5. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate while preserving all the formatting:</think>

# LiteLLM 动态 — 2026-10-10

## 1. 今日要点

LiteLLM 团队正在推进两个重大计划：**Rust 迁移**（已有父任务追踪进度）和**稳定性冲刺**，聚焦于缺陷修复。三月份的 Trivy 供应链攻击已完全控制，所有受影响版本已清除。v1.106.0-dev.3 版本引入了 Docker 镜像的 cosign 签名，提升供应链安全。

---

## 2. 版本更新与破坏性变更

| 版本 | 变更 | 说明 |
|---------|--------|-------|
| **v1.106.0-dev.3** | 新开发版本 | — |
| **Docker 镜像** | 现已使用 cosign 签名 | 所有镜像已使用提交 `0112e53` 中的密钥签名；使用 cosign 验证 |
| **安全修复** | PyPI 供应链攻击已控制 | v1.82.7/v1.82.8 被植入恶意代码 — 已删除所有受影响包，当前版本安全 ([#24518](https://github.com/BerriAI/litellm/issues/24518)) |

---

## 3. 新模型与硬件支持

| 模型/供应商 | 类型 | 详情 |
|----------------|------|---------|
| **ScaleDown** | 新聊天供应商 | 新增 5 个模型（`/extract`、`/summarization`、`/compress` 等）— PR [#44168](https://github.com/BerriAI/litellm/pull/44168) |
| **ScaleDown** | 定价已添加 | 输入 tokens $0.05/M，输出免费 — PR [#44167](https://github.com/BerriAI/litellm/pull/44167) |
| **Bedrock GPT-5.6+** | 原生 /responses 桥接 | 带推理的 tool calls 现已路由至 `bedrock-runtime` 而非回退至 Converse（保留推理 tokens）— PR [#45609](https://github.com/BerriAI/litellm/pull/45609) |
| **Strands Decider** | AgentCore 运行时支持 | `api_base` 中的运行时 ARN 现使用 SigV4 签名调用 `InvokeAgentRuntime` — PR [#45678](https://github.com/BerriAI/litellm/pull/45678) |
| **xAI batch** | 结果文件命名修复 | 完成的批次现使用确定性文件命名，而非轮询 files API — PR [#45559](https://github.com/BerriAI/litellm/pull/45559) |
| **Vertex AI Claude** | 批量支持 | Claude 批次现上传至 `publishers/anthropic/models/` — PR [#45715](https://github.com/BerriAI/litellm/pull/45715) |

---

## 4. 性能与优化

过去 24 小时内没有明确的性能基准测试上线。正在进行的工作：

- **Rust 迁移** — 父任务 [#31263](https://github.com/BerriAI/litellm/issues/31263) 追踪亚毫秒开销目标
- **支出追踪优化** — 新增 `disable_entity_spend_updates` 标志，用于高请求量时抑制计数器 UPDATE ([#31866](https://github.com/BerriAI/litellm/issues/31866))
- **并发支出缓存修复** — 用户/团队/终端用户/标签缓存现可正确处理并发递增 ([#43491](https://github.com/BerriAI/litellm/issues/43491))

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | v1.82.3 中预算执行被绕过 | 进行中 — key/user `max_budget` 在支出超过限制后被忽略 ([#26672](https://github.com/BerriAI/litellm/issues/26672)) |
| **高** | 虚拟密钥 `BudgetExceededError` 且支出数据过期 | 进行中 — API 报告支出低于预算但拒绝请求 ([#27735](https://github.com/BerriAI/litellm/issues/27735)) |
| **高** | `/metrics` 端点默认未认证 | 进行中 — 多租户生产环境暴露 PII ([#24530](https://github.com/BerriAI/litellm/issues/24530)) |
| **中** | 按客户的 RPM 限制在密钥缓存后失效 | 进行中 — `rpm_limit` 在虚拟密钥缓存后不再生效 ([#39713](https://github.com/BerriAI/litellm/issues/39713)) |
| **中** | ElevenLabs 成本计算不工作 | 进行中 — 模型不在定价表中 ([#18058](https://github.com/BerriAI/litellm/issues/18058)) |
| **中** | 持续负载下误报 `BudgetExceededError` | 进行中 — "当前成本" = max_budget + 近期支出，约 2 分钟自愈 ([#36926](https://github.com/BerriAI/litellm/issues/36926)) |
| **中** | Azure SDK Responses API 绕过路由器 | 进行中 — 调用通过直通发往 api.openai.com ([#45033](https://github.com/BerriAI/litellm/issues/45033)) |
| **低** | `team_member_budget` 替换整个团队元数据 | 进行中 — 覆盖无关字段 ([#31447](https://github.com/BerriAI/litellm/issues/31447)) |
| **低** | Databricks `response_format` 嵌套 `$ref` | 已修复 — PRs [#45658](https://github.com/BerriAI/litellm/pull/45658)、[#45632](https://github.com/BerriAI/litellm/pull/45632)、[#45659](https://github.com/BerriAI/litellm/pull/45659) |
| **低** | Redis 集群节点导致关闭失败 | 已关闭 — ([#31206](https://github.com/BerriAI/litellm/issues/31206)) |

---

## 6. 对应用开发者的意义

- **供应链安全升级**：Docker 镜像现可通过 cosign 验证 — 更新你的部署流水线以验证签名。
- **预算执行注意事项**：如果运行 v1.82.3，密钥上的预算限制可能无法正确触发。通过 `/key/info` 监控支出并考虑升级。
- **指标端点暴露**：如果在多租户生产环境运行，立即在配置中添加 `require_auth_for_metrics_endpoint: true`。
- **新供应商选项**：ScaleDown 现已可用作提取/摘要任务的成本优化方案。
- **路由器行为变更**：使用 Responses API 的 Azure SDK 当前会绕过路由器模型选择 — 在修复前避免在 AzureOpenAI 客户端中使用 `/openai/responses`。
- **Helm 简化**：单 Chart 单体模式现为推荐部署模式（PR [#43330](https://github.com/BerriAI/litellm/pull/43330)）。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth Digest to Chinese, preserving the exact Markdown structure while using natural technical Chinese (the register of a Chinese developer newsletter). Let me go through and translate carefully.

I need to:
1. Translate headings
2. Translate table headers and content
3. Translate list items and descriptions
4. Keep all code references, URLs, numbers, issue numbers as-is
5. Use natural technical Chinese

Let me start:</think>

# Unsloth 速报 — 2026-10-10

## 1. 今日要闻

Unsloth 今日在 Studio 和安装器方面有多个 PR 推进，包括多卡 AMD 设备选择、Intel XPU 支持以及安全加固。核心库方面仍然存在大量 VRAM 相关的 OOM 报告，涉及高端硬件（H100、RTX PRO6000、B200），表明 GRPO 和长上下文微调场景下的显存分配仍是痛点。一个影响全参数微调 Embedding 学习率的长期 bug 在 PR #13171 中终于修复。

---

## 2. 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| 项目 | 说明 | 链接 |
|------|------|------|
| **Qwen-Image-2.1-Turbo** | Studio 现已支持官方 8 步蒸馏版本及自定义采样调度 | [PR #13159](https://github.com/unslothai/unsloth/pull/13159) |
| **Qwen3-TTS** | 开放功能请求：希望支持微调（目前暂不支持） | [Issue #3951](https://github.com/unslothai/unsloth/issues/3951) |
| **Intel Arc / Data Center GPU** | `install.sh` 在 Linux 上检测到这两类 GPU 时自动安装 XPU PyTorch | [PR #13193](https://github.com/unslothai/unsloth/pull/13193) |
| **AMD Strix Halo + 独立显卡** | 自动选择逻辑现优先使用独立显卡而非 APU 进行训练 | [PR #13196](https://github.com/unslothai/unsloth/pull/13196) |
| **Jetson JetPack CUDA** | 后端现优先采用 JetPack 自带的 CUDA 而非 pip 安装的 CUDA（llama-server 路径） | [PR #13191](https://github.com/unslothai/unsloth/pull/13191) |

---

## 4. 性能与优化

| 项目 | 详情 | 链接 |
|------|------|------|
| **Embedding 学习率修复** | `embedding_learning_rate` 现已正确应用于全参数微调的所有 embedding 层（此前对非 LoRA 参数会静默失效） | [PR #13171](https://github.com/unslothai/unsloth/pull/13171) |
| **RoPE/Norm 内核 int64 修复** | 在 RoPE、RMSNorm、LayerNorm 内核中将 `tl.program_id` 转换为 int64 — 修复超过 2³¹ 元素后的失败（测试需要约 5.5 GiB GPU 显存） | [PR #13121](https://github.com/unslothai/unsloth/pull/13121) |
| **训练变慢** | Issue #3943 报告训练在约 15 次迭代后从 2s/iter 跃升至 45s/iter — 根因正在排查 | [Issue #3943](https://github.com/unslothai/unsloth/issues/3943) |
| **Office/电子书解析** | 聊文件功能现支持索引 `.pdf .doc .docx .xls .xlsx .xlsm .ppt .pptx .txt .md .html .csv .tsv .eml .msg .json .xml .rtf .odt .ods .odp` 等格式 | [PR #13081](https://github.com/unslothai/unsloth/pull/13081) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 链接 |
|----------|------|------|------|
| **高** | 显存占用远超标称 — 即使显存充足，微调"大模型"仍报 OOM | 待处理 | [Issue #4504](https://github.com/unslothai/unsloth/issues/4504) |
| **高** | RTX PRO 6000 (96GB) 上 Triton 非法内存访问 | 待处理 | [Issue #3921](https://github.com/unslothai/unsloth/issues/3921) |
| **高** | 183GB VRAM (B200) 上 120b 模型使用 GRPO 在 4k 上下文下 OOM | 待处理 | [Issue #3411](https://github.com/unslothai/unsloth/issues/3411) |
| **中** | H100 80GB 上 QLoRA GRPO OOM（batch_size=1, num_generations=8） | 已关闭 | [Issue #3603](https://github.com/unslothai/unsloth/issues/3603) |
| **中** | AMD Strix Halo — Studio 将权重加载到系统内存而非 VRAM | 待处理 | [Issue #7449](https://github.com/unslothai/unsloth/issues/7449) |
| **中** | AMD Qwen3.8-27B V3 GGUF 在 R9700 上 prefill 后崩溃（V2 正常） | 待处理 | [Issue #9792](https://github.com/unslothai/unsloth/issues/9792) |
| **中** | DPO loss 在不同梯度累积步数下结果不一致 | 已关闭 | [Issue #3482](https://github.com/unslothai/unsloth/issues/3482) |
| **低** | Qwen-Image-2.1 在 Apple Silicon 2048×2048 分辨率下内存爆炸 — 20 分钟后返回空白图片 | 待处理 | [PR #13188](https://github.com/unslothai/unsloth/pull/13188) |

---

## 6. 应用开发者需要关注什么

- **如果你使用全参数微调**：Embedding 学习率 bug 已修复（PR #13171），现在 embedding 层将接收预期的学习率 — 请检查你的训练配置，行为可能发生变化。
- **如果你在 AMD 硬件上运行**：自动 GPU 选择优化（PR #13196）和 XPU PyTorch 支持（PR #13193）应减少在混合 APU/独立显卡系统和 Intel Arc 卡上的手动配置工作。
- **如果你处理文档**：聊文件的文件格式支持扩展（PR #13081）使更丰富的 RAG 工作流无需外部预处理即可实现。
- **如果你遇到 OOM 错误**：高端 GPU 上的显存问题依然存在 — 考虑减少 GRPO 中的 `num_generations`、使用更长的训练预热，或在使用超过 2³¹ tokens 上下文时留意 int64 RoPE 修复（PR #13121）。
- **如果你在 Jetson 上部署**：CUDA 路径修复（PR #13191）应能解决首次聊天请求时的"Server disconnected"崩溃。

---

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*