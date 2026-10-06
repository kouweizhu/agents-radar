# AI 基础设施日报 2026-10-06

> 生成时间: 2026-10-06 02:27 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this cross-project comparison report into Chinese. Let me follow the rules carefully:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this comprehensively:</think>

# 跨项目对比报告：AI 推理生态系统

## 1. 生态系统概览

2026年10月的 AI 推理基础设施领域呈现出强烈的专业化与垂直整合特征。vLLM 和 SGLang 竞相在 Blackwell 硬件上优化 DeepSeek-V4 系列推理，引入新型注意力核和量化方案；而 llama.cpp 凭借 v0.6.0 的 `llama_batch_ext` API 推进移动端/边缘部署的边界。LiteLLM 持续推进其网关整合战略，但代理服务在高频并发下暴露的稳定性问题——表明多供应商路由的运维复杂度在攀升。与此同时，Unsloth 和 Ollama 分别瞄准微调和本地服务层：Unsloth 扩展 MoE+LoRA 支持，Ollama 修复了影响 macOS 交互工作流的 MLX 空闲延迟回归。

---

## 2. 活跃度对比

| 项目 | 活跃 Issues | 合并/活跃 PRs | 24h Releases | 热点问题 |
|---------|-----------------|---------------------|----------------|------------------|
| **vLLM** | 15+ issues 标记 | 20+ PRs 已合并 | **v0.31.0** (717 commits, 307 contributors) | DeepSeek-V4.1-Flash SM100 默认支持、DFlash 元数据重建、ROCm gfx942 内核融合 |
| **SGLang** | 6+ issues | 15+ PRs 已合并 | 无 | 调度器双重释放崩溃 (#42508)、Hybrid-SWA 活锁、DeepSeek V4.1 优化track |
| **llama.cpp** | 6+ issues | 10+ PRs 已合并 | **v0.6.0** | `llama_batch_ext` API、Hexagon HMX/POOL 算子、CUDA NVFP4 MMQ、Vulkan RMS norm |
| **Ollama** | 8+ issues | 7 PRs 已合并 | 无 | MLX 空闲延迟修复、glm-ocr 回归、llama-server 缓存命中挂起 |
| **LiteLLM** | 7+ issues | 5 PRs 已合并 | 5 个 stable 分支补丁 (1.100.5–1.104.1) | 并发 `/v1/messages` 竞态、流式计费为零、无限制的注册表增长 |
| **Unsloth** | 4 issues | 15+ PRs 已合并 | 无 | MoE+LoRA fast_inference、 MiniMax-H3 流式内存、Qwen-Image-2.1 16GB 支持 |

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4 / V4.1-Flash** | ✅ SM100 默认 + FlashMLA | ✅ DeepSeek-V4 处理器路由 | — | — | — |
| **GLM-5.3-Flash (GLM5-Next)** | ✅ (存在退化 bug) | — | ✅ v0.6.0 支持 | — | — |
| **Qwen3.5 / 3.6 MoE** | — | — | — | — | ✅ `fast_inference=True` |
| **Gemma-4 MoE** | — | — | — | ✅ (thinking 默认关闭) | ✅ `fast_inference=True` |
| **Gemma 4 (多模态)** | — | — | — | ✅ (低显存时 fit 禁用) | — |
| **Kimi K3** | — | ✅ Quark FP8/MXFP4 融合 | — | — | — |
| **Clef (决策模型)** | — | ✅ | ✅ text + vision 支持 | ✅ (/v1/systemone 上失败) | — |
| **Kolibri 1** | — | — | — | ✅ MLX | — |
| **LFM (LiquidFM)** | — | — | — | — | ✅ 快速推理 (进行中) |
| **Qwen4Exp NVFP4 PLE** | ✅ Host file gather | — | — | — | — |
| **DeepSeek-V3.2 (GLM)** | — | ✅ ROCm DCP | — | — | — |

**谁领先：** vLLM 在 Blackwell 优化（DeepSeek-V4.1-Flash SM100 默认）和 NVFP4 量化上领先。llama.cpp 在边缘/移动端凭借新版 v0.6.0 API 领先。Unsloth 唯一支持 MoE+LoRA 的快速推理。SGLang 在 GLM-5.3 的 decode-context-parallelism 和 ROCm 上领先。Ollama 对 macOS MLX 用户最友好，但在高级量化上落后。

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 重点方向 |
|-------------------|-----------------|---------------------|
| **KV Cache / 注意力** | vLLM, SGLang, llama.cpp | NVFP4 压缩 KV (vLLM)、FlashMLA mega attention (vLLM)、Triton 注意力精度修复 (vLLM)、Vulkan RMS norm (llama.cpp) |
| **批处理 / 调度** | vLLM, SGLang, LiteLLM | DFlash 元数据跳过重建 (+11% 吞吐)、调度器双重释放修复 (SGLang)、路由器定价准确性 (LiteLLM) |
| **量化** | vLLM, llama.cpp, Unsloth | NVFP4 PLE 表 (vLLM)、MXFP8FP4/W4A8 MegaMoE (llama.cpp)、Qwen3.5/3.6/Gemma-4 MoE LoRA (Unsloth) |
| **分布式服务** | vLLM, SGLang | MLA 的 Prefill CP (SGLang)、TP + HiCache 死锁修复 (vLLM)、AMD Stream-K (llama.cpp) |
| **内核 / 硬件** | vLLM, SGLang, llama.cpp | ROCm gfx942 mHC seam kernel (vLLM)、Hexagon HMX/POOL (llama.cpp)、Kimi K3 Quark FP8 融合 (SGLang) |
| **内存 / 流式** | SGLang, Unsloth, Ollama | MiniMax-H3 流式 (Unsloth)、DFlash engram 查询 (vLLM)、MLX 驻留刷新 (Ollama) |

---

## 5. 层级定位

| 层级 | 主要项目 | 描述 |
|-------|------------------|-------------|
| **本地 / 嵌入式运行时** | **llama.cpp** | 独立 GGUF/GGML 推理；无需服务器；支持 CPU、GPU、移动端、WebGPU、Hexagon DSP |
| **微调 / 训练** | **Unsloth** | GPU 加速微调，支持 LoRA/LoRA+；扩展 transformers/trl；支持 MoE fast_inference |
| **本地服务** | **Ollama** | 单节点本地 LLM 服务器；MLX (Apple Silicon) 和 CUDA 后端；面向消费级用户 |
| **生产服务引擎** | **vLLM**, **SGLang** | 高吞吐推理服务器，支持 P/D 分离、投机解码、前缀缓存；vLLM 为 Apache 许可，SGLang 捆绑运行时 |
| **网关 / 路由** | **LiteLLM** | 多供应商代理；统一 OpenAI/Anthropic/Bedrock 等 API；成本追踪、重试、熔断 |

---

## 6. 趋势信号

### 基础设施工程师应关注

1. **DeepSeek-V4 系列成为新的优化基准。** vLLM（SM100 默认）和 SGLang（处理器路由、ROCm DCP）都在 DeepSeek-V4/V4.1 支持上投入重兵。可以预期该架构将成为下一代 MoE+MLA 系统的参考实现。

2. **NVFP4 量化进入生产阶段。** vLLM 的 V4.1 NVFP4 压缩 KV cache 和 Qwen4Exp PLE 表表明 4-bit 量化在推理侧已足够成熟，可用于 Blackwell 部署。llama.cpp 在 MXFP8FP4/W4A8 上的并行工作印证了这一趋势。

3. **Prefill context parallelism 即将完成。** SGLang 的 prefill CP 路线图显示 MLA 模型支持即将落地（Dpsk v3、Kimi-K2.5），MHA/GQA 后端正在开发中。这使得更长 prompt 处理不再 OOM——对 RAG 和 agent 工作流至关重要。

4. **稳定性问题正在向并发边界转移。** 所有项目中最高优先级的 bug 都涉及并发请求处理：LiteLLM 的并发 `/v1/messages` 字典突变、SGLang 的调度器双重释放、Ollama 的缓存命中挂起。随着推理吞吐scale，请求调度中的竞态条件成为新的故障模式。

5. **MLX 在 macOS 上正成为一等公民。** Ollama 的 MLX 延迟修复（2秒权重卸载）和 Unsloth 的 Mac LoRA 支持表明 Apple Silicon 原生推理需求在增长。Unsloth 对 MoE 模型的 `fast_inference` 路径表明消费者硬件上的 LoRA 服务已经可行。

6. **LiteLLM 的代理扩展挑战是一个警示。** 无限制的直连端点注册表 (#26081) 和 Prisma 空闲连接 (#26081) 凸显了多供应商网关面临的运维复杂度，这是纯推理引擎所避免的。在 500M TPM 规模下，数据库连接管理成为瓶颈。

### Agent / 应用开发者应关注

- **避免在长生成任务中使用 GLM-5.3-Flash**，直到退化 bug 修复（vLLM Issue #56868）。
- **不要部署 SGLang nightly build**，直到调度器崩溃 (#42508) 修复。
- **如果使用 LiteLLM + 流式 + 旧版 Anthropic 构建，务必验证计费输出**——计费可能显示 $0。
- **如果在使用 Qwen3.8-flash-next + MTP 的分离模式下进行投机解码，请充分测试**——接受率为 0%（Issue #59642）。
- **如果需要对 Qwen3.5/3.6 或 Gemma-4 MoE 进行 LoRA 微调，考虑使用 Unsloth**——它是唯一对这些架构支持 `fast_inference=True` 的项目。

---

*跨项目综合分析 — 2026-10-06*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest into Simplified Chinese, following specific rules about how to handle technical terms, references, markdown structure, etc.

Let me translate this carefully while:
1. Keeping the markdown structure exactly
2. Preserving URLs, issue/PR references, version numbers, etc.
3. Using natural technical Chinese register
4. Keeping all tables and formatting intact

Let me go through each section:

## 1. Today's Highlights

vLLM **v0.31.0** dropped with **717 commits from 307 contributors** (96 new), marking a major milestone. The release introduces DeepSeek-V4.1-Flash as the new SM100 default using FlashMLA mega attention with V4.1 NVFP4 compressed KV cache, alongside DeepGEMM sparse MQA logits for indexing. Multiple critical bugs were addressed, including Mistral tool call parsing fixes and FlashInfer sampler JIT crash workarounds.

vLLM **v0.31.0** 正式发布，带来 **717 个提交和 307 位贡献者**（其中 96 位新加入），是一个重要的里程碑版本。该版本将 DeepSeek-V4.1-Flash 设为新的 SM100 默认配置，采用 FlashMLA mega attention 和 V4.1 NVFP4 压缩 KV cache，同时引入 DeepGEMM 稀疏 MQA logits 用于索引。还修复了多个关键问题，包括 Mistral 工具调用解析和 FlashInfer sampler JIT 崩溃的变通方案。

## 2. Releases & Breaking Changes

| Version | Description | Reference |
|---------|-------------|-----------|
| **v0.31.0** | Major release — DeepSeek-V4.1-Flash SM100 default, FlashMLA mega attention with V4.1 NVFP4 KV cache, DeepGEMM sparse MQA logits | [v0.31.0](https://github.com/vllm-project/vllm/releases/tag/v0.31.0) |

No breaking changes flagged in the 24h window.


The v0.31.0 release includes significant DeepSeek-V4.1-Flash integration with SM100 as the default, featuring FlashMLA mega attention and V4.1 NVFP4 KV cache support, along with DeepGEMM sparse MQA logits for improved indexing performance. No breaking changes were identified in the latest 24-hour window.

I've confirmed the latest support includes DeepSeek-V4.1-Flash as the new SM100 default on Blackwell with FlashMLA mega attention and V4.1 NVFP4 compressed KV cache, Qwen4Exp NVFP4 PLE tables with host file gather for packed E2M1 rows, ROCm gfx942 support for DeepSeek-V4.1-Flash, and ongoing GLM-5.3 performance optimization work.

Several performance improvements are underway: spec decode optimizations through DFlash metadata rebuilds during full CUDA graph replay show roughly 11% decode throughput gains and 5% latency reduction, DSv4.1 Engram enhancements with two-row tiles for smaller lookups and persistent 16-row tiles for larger batches deliver 6.1%/19.4%/28.1% improvements across different user loads, and Triton Attention now preserves small FP8 softmax weights using reversible power-of-two scaling to prevent underflow in FP8 Q scenarios.

Additional optimizations include ROCm DSv4/4.1 fusion of inverse RoPE and MXFP8 quant into aiter sparse MLA stores to eliminate separate post-attention passes, while GB10 Weight Load issues are flagged as needing attention. Llama RoPE continues manual CUDA KV-cache fusion work from a prior PR, though GB10 users should anticipate slower cold starts until weight loading performance improves.

Several stability issues remain open: GLM-5.3-Flash experiences long-decode degeneration after accumulated reasoning, Qwen3.8-flash-next shows 0% MTP acceptance in disaggregated PD serving, and prompt_logprobs get silently corrupted with MTP speculative decoding. FlashInfer also encounters OOM on 16GB Blackwell hardware with MoE models, and EngineDeadError occurs after L1 sleep/wake cycles with native KV offloading enabled.

FlashInfer sampler JIT crashes when nvcc is unavailable, causing default wheel installations to fail without fallback mechanisms. Additionally, EAGLE/MTP prefix-cache experiences last-block drops that result in 30-40% throughput losses for prefix-reusing speculative workloads. Several fixes are in progress including Mistral pre-v11 tool call parsing and tool schema $ref/$defs resolution.

Shared-region KV offload lifecycle and NIXL handshake drain are also being addressed. For v0.31.0 users on Blackwell running DeepSeek-V4.1-Flash, the SM100 default provides notable performance gains, though GLM-5.3-Flash should be avoided for long-generation tasks due to a degeneration bug.

Speculative decoding presents some concerns—Qwen3.8-flash-next has MTP acceptance issues in disaggregated setups, so close monitoring is needed. Tool-calling applications benefit from the Mistral parser fix which resolves JSON parsing failures with pre-v11 Mistral models. Claude Code users can expect improvements from an active RFC to harden the Anthropic `/v1/messages` endpoint. GB10 users should anticipate slower cold starts as weight loading performance undergoes optimization.</think>

# vLLM 每日简报 — 2026-10-06

## 1. 今日要闻

vLLM **v0.31.0** 正式发布，带来 **717 个提交和 307 位贡献者**（其中 96 位新加入），是一个重要的里程碑版本。该版本将 DeepSeek-V4.1-Flash 设为新的 SM100 默认配置，采用 FlashMLA mega attention 和 V4.1 NVFP4 压缩 KV cache，同时引入 DeepGEMM 稀疏 MQA logits 用于索引。还修复了多个关键问题，包括 Mistral 工具调用解析和 FlashInfer sampler JIT 崩溃的变通方案。

## 2. 版本发布与破坏性变更

| 版本 | 描述 | 参考 |
|------|------|------|
| **v0.31.0** | 重大版本发布 — DeepSeek-V4.1-Flash SM100 默认配置、FlashMLA mega attention 搭配 V4.1 NVFP4 KV cache、DeepGEMM 稀疏 MQA logits | [v0.31.0](https://github.com/vllm-project/vllm/releases/tag/v0.31.0) |

过去 24 小时内未发现破坏性变更。

## 3. 新模型与硬件支持

- **DeepSeek-V4.1-Flash**：现为 SM100（Blackwell）默认配置，使用 FlashMLA mega attention + V4.1 NVFP4 压缩 KV cache
- **Qwen4Exp NVFP4 PLE tables**：新增主机端文件 gather 支持，用于打包的 E2M1 行和独立的 FP8 块缩放平面 — 这对单 GPU 用户至关重要（[PR #59958](https://github.com/vllm-project/vllm/pull/59958)）
- **ROCm gfx942**：DeepSeek-V4.1-Flash 现将 mHC 接缝路由至 PyISA 接缝内核（[PR #60153](https://github.com/vllm-project/vllm/pull/60153)）
- **GLM-5.3**：性能优化工作正在进行中（[Issue #57406](https://github.com/vllm-project/vllm/issues/57406)）

## 4. 性能优化

| 领域 | 变更 | 影响 | 参考 |
|------|------|------|------|
| **Spec Decode** | 在完整 CUDA 图重放期间跳过冗余的 DFlash 元数据重建 | 吞吐量提升约 11%，延迟降低 5%（前序 PR） | [PR #54485](https://github.com/vllm-project/vllm/pull/54485) |
| **DSv4.1 Engram** | 小查询使用双行瓦片，较大批次使用持久化 16 行瓦片 | 1/2/4 用户查询分别提升 6.1%/19.4%/28.1%；整体吞吐量提升 0.11% | [PR #57893](https://github.com/vllm-project/vllm/pull/57893) |
| **Triton Attention** | 通过可逆的 2 的幂次缩放保留小型 FP8 softmax 权重 | 修复 FP8 Q + 按张量 FP8 KV 场景下下溢为 0 的问题 | [PR #60156](https://github.com/vllm-project/vllm/pull/60156) |
| **ROCm DSv4/4.1** | 将逆 RoPE + MXFP8 量化融合进 aiter 稀疏 MLA 存储 | 消除独立的后处理 attention 通道 | [PR #60154](https://github.com/vllm-project/vllm/pull/60154) |
| **GB10 权重加载** | 性能问题：来自 safetensors mmap 视图的按张量 H2D 副本导致加载缓慢 | 需要优化 | [Issue #58726](https://github.com/vllm-project/vllm/issues/58726) |
| **Llama RoPE** | 手动 CUDA RoPE KV-cache 融合 | 继续迁移自 #43224 | [PR #52363](https://github.com/vllm-project/vllm/pull/52363) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 影响 | 状态 |
|----------|------|------|------|
| **高** | GLM-5.3-Flash 长序列生成时累积推理后出现退化 | 长生成场景下模型输出乱码 | 待解决 — [Issue #56868](https://github.com/vllm-project/vllm/issues/56868) |
| **高** | Qwen3.8-flash-next 在 disaggregated PD serving 中 MTP 接受率为 0% | 该模型的投机解码完全失效 | 待解决 — [Issue #59642](https://github.com/vllm-project/vllm/issues/59642) |
| **高** | MTP 投机解码时 `prompt_logprobs` 静默损坏 | 下游任务的 logprobs 不可靠 | 待解决 — [Issue #53488](https://github.com/vllm-project/vllm/issues/53488) |
| **中** | 16GB Blackwell（RTX 5070 Ti）上 FlashInfer OOM（MoE 模型） | 消费级 Blackwell 硬件上引擎无法启动 | 待解决 — [Issue #49476](https://github.com/vllm-project/vllm/issues/49476) |
| **中** | 原生 KV offload + 睡眠模式在 L1 睡眠/唤醒周期后出现 EngineDeadError | 电源周期后服务中断 | 待解决 — [Issue #45268](https://github.com/vllm-project/vllm/issues/45268) |
| **中** | nvcc 不可用时 FlashInfer sampler JIT 崩溃 | 默认 wheel 安装无 fallback 而失败 | 待解决 — [Issue #49497](https://github.com/vllm-project/vllm/issues/49497) |
| **中** | EAGLE/MTP 前缀缓存最后一块丢弃导致约 30-40% 吞吐量损失 | 前缀复用投机工作负载显著回归 | 待解决 — [Issue #53670](https://github.com/vllm-project/vllm/issues/53670) |

**正在修复中：**
- Mistral pre-v11 工具调用解析：[PR #54844](https://github.com/vllm-project/vllm/pull/54844)（就绪）
- 工具 schema $ref/$defs 解析：[PR #50933](https://github.com/vllm-project/vllm/pull/50933)（开放）
- 共享区域 KV offload 生命周期：[PR #53073](https://github.com/vllm-project/vllm/pull/53073)（开放）
- NIXL 握手耗尽：[PR #59960](https://github.com/vllm-project/vllm/pull/59960)（开放）

## 6. 这对应用开发者意味着什么

- **升级到 v0.31.0**：如果在 Blackwell 上运行 DeepSeek-V4.1-Flash，将获得新的 SM100 默认配置，显著提升性能。
- **避免 GLM-5.3-Flash 用于长生成任务**：直到退化 bug（#56868）解决后再使用 — 考虑使用其他量化方案或模型变体。
- **投机解码用户**：MTP 接受率问题特别影响 disaggregated serving 中的 Qwen3.8-flash-next；请密切监控工作负载。
- **工具调用应用**：Mistral 解析器修复（#54844）解决了 pre-v11 Mistral 模型的 JSON 解析失败问题 — 请测试你的工具 schema。
- **多引擎部署**：调度器状态 gauge 指标现已在启动时重置为 0（#60155）— Prometheus 抓取不会错过初始样本。
- **Claude Code 集成**：RFC 正在推进（#58647）以强化 Anthropic `/v1/messages` 端点；预计代理工作流将得到改进。
- **GB10 用户**：权重加载性能正在调查（#58726）— 预计最终会优化，但近期请做好冷启动较慢的准备。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest from English to Chinese. I need to:
1. Translate all the content
2. Keep the Markdown structure exactly as is
3. Keep URLs, issue/PR numbers, code, and technical terms as-is
4. Use natural technical Chinese, not literal translation

Let me go through this carefully:

**Today's Highlights** - 今日要闻
**Releases & Breaking Changes** - 发布与重大变更
**New Model & Hardware Support** - 新模型与硬件支持
**Performance & Optimization** - 性能与优化
**Stability & Regressions** - 稳定性与回归问题
**What This Means for Application Developers** - 这对应用开发者意味着什么

I need to translate the content while keeping technical terms, URLs, issue numbers, etc. in their original form. Let me do this carefully.</think>

# SGLang 摘要 — 2026-10-06

## 今日要闻

SGLang 持续推进多模型优化工作，DeepSeek V4.1 性能优化已进入积极开发阶段 (#42170)，填充式上下文并行现已扩展支持 MLA 模型，包括 Kimi-K2.5 (#23292)。稳定性方面，发现了一个关键的调度器 bug 导致 double-free 崩溃 (#42508)，此外还有多个影响 GLM-5.3-Flash 和 DeepSeek-V4-Pro 在 Blackwell 硬件上运行的模型特定问题。

---

## 发布与重大变更

- 过去 24 小时内**无新版本发布**。

---

## 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|-------------|-------|
| **SM12.x GPU 支持** | 扩散模型运行时现支持 RTX PRO 6000 Blackwell、RTX 50xx 和 DGX Spark（GB10、sm_121） | PR #30705 |
| **ROCm DCP for GLM-5/DeepSeek-V3.2** | 解码上下文并行在多个 rank 间分片 KV 缓存，消除纯 TP 下的重复 | PR #42618 |
| **AMD Quark FP8/MXFP4 融合** | Kimi K3 Quark FP8/MXFP4 内核融合，ROCm 平台支持 | PR #41794 |
| **Qwen3.5/3.6 MoE on SM120** | 块状 FP8 量化下共享到稀疏专家的融合 | Issue #33706 |
| **DeepSeek-V4 Processor 路由** | DeepSeek-V4 现通过 sglang-processor 渲染，以支持缓存感知路由 | PR #42665 |

---

## 性能与优化

- **Kimi-K3 FP8 投影优化**：MLA 投影路径中的 per-weight cached launcher 在 GB300 上将 bs=1 1024-token 填充的每调用主机端开销从 87–117 μs 降至缓存命中 | PR #42698

- **DeepSeek V4.1 优化路线**：积极推进填充优化 (#41589) 和 mHC TP 优化；`q_rope_store` 融入 `fused_q_norm_rope` 已完成

- **填充式上下文并行路线图（2026 Q3）**：
  - ✅ Allreduce 融合兼容性 (#21249)
  - ✅ Attention CP 规模 ≠ MoE DP 规模支持 (#22003)
  - ✅ MLA 模型（Dpsk v3/Kimi-K2.5）填充式 CP (#23292)
  - ⏳ MHA/GQA 后端（flashinfer/trtllm-mha）填充式 CP — 正在进行中 (#31732)

- **SM120 上 FP8 块状 GEMM**：128×128 块状 GEMM 优化已合并 | Issue #33629

- **扩散模型：MiniMax-H3 AdaLN 缓存**：分层缓存通过在线重建 AdaLN 输出而非保留 24.2 GiB 检查点权重来降低显存占用 | PR #35623

- **扩散模型：流式映射权重**：O_DIRECT 读取器和共享池流式传输优化权重 I/O | PR #37680

---

## 稳定性与回归问题

| 严重程度 | 问题 | 详情 |
|----------|-------|---------|
| **高** | 调度器 double-free 崩溃 | 遍历 `session_held_tokens` 时触发 `double free or corruption`；服务器永久挂起 — 夜间构建中报告 | Issue #42508 |
| **高** | CUDA_ERROR_ILLEGAL_ADDRESS | MXFP8FP4/W4A8 MegaMoE 路径在 B300 上使用 sgl-deep-gemm 0.1.7 时崩溃 | Issue #37559 |
| **中** | 混合 SWA + 基数缓存活锁 | 当 SWA 前缀锁固定了已完成请求的未修剪块时，调度器停止接收请求；GPU 空闲，等待 1，运行 0 | Issue #41579 |
| **中** | DeepSeek-V4 + HiCache 死锁 | 在高并发长填充下使用 `--enable-hierarchical-cache --hicache-write-policy write_through` 时 TP rank 死锁 | Issue #42465 |
| **中** | GLM-5.3-Flash NVFP4 TP4 循环 | 模型重复输出推理过程，无最终助手回复 | Issue #41939 |
| **中** | DeepSeek-V4-Pro 解码性能回退 | GB300 上并发度为 1 时速度下降约 5%（PR #39704 之后） | Issue #42074 |
| **低** | 多模态上传路径遍历 | `/v1/uploads` 端点允许路径遍历写入 | Issue #17267 |

**近期已修复**：
- 扩散模型 LoRA 静态合并到量化权重的问题已修复 — 不再因形状不匹配而崩溃 | PR #35975
- FlashInfer attention logit softcapping 已正确传播到 Gemma-2 和 Grok-1 | Issue #33915 (已关闭)
- ROCm 扩散模型：禁用 layernorm 的 torch.compile 以避免崩溃 | PR #25969

---

## 这对应用开发者意味着什么

1. **关键调度器 Bug**：如果运行最近的夜间构建，请注意空闲循环不变量检查中的 double-free 崩溃 — 在 #42508 解决之前避免生产部署。

2. **Blackwell 部署注意**：GLM-5.3-Flash NVFP4 在 B200/B300 上 TP4 时表现出循环行为；考虑使用其他并行配置或等待修复。

3. **DeepSeek-V4 + HiCache**：在高并发填充场景下避免使用 `write_through` 策略，直到 TP rank 死锁 (#42465) 修复。

4. **新硬件选项**：如果在 DGX Spark（GB10）或 RTX PRO 6000 Blackwell 上部署，扩散模型现已支持 — 由于 SM12.x 支持较新，请充分测试。

5. **性能提升**：Kimi-K3 FP8 投影优化（87–117 μs → 缓存命中）应能显著提升 GB300 部署的填充吞吐量。

---

*基于 SGLang GitHub 数据生成 — 2026-10-06*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp digest from English to Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully:

---

# llama.cpp Digest — 2026-10-06

## 1. 今日要闻

**llama.cpp v0.6.0 发布** — 本次大版本更新带来了新的 `llama_batch_ext` 扩展批处理 API，其中 `llama_process` 支持混合 token/embedding 输入和 MTP/deepstack 状态 embedding。同时新增了对 GLM-5.3-Flash (GLM5-Next) 320B 混合模型、Clef 决策模型（文本和视觉）的支持，并正式推出了 MTP 规范。版本号更新至 0.6.0，并更新了摘要提示词。

## 2. 版本发布与破坏性变更

| 版本 | 关键变更 |
|---------|-------------|
| **v0.6.0** | 新增 `llama_batch_ext` + `llama_process` API；支持 GLM-5.3-Flash 320B；支持 Clef 视觉模型；MTP 规范正式版；摘要提示词更新 |

**迁移提示：** 新的 `llama_batch_ext` API 支持在同一批次中混合 embedding 和原始 token，这对 paligemma 类模型的非因果 prompt 处理很有用。详见 PR #29622。

## 3. 新模型与硬件支持

- **GLM-5.3-Flash (GLM5-Next)** — 320B 混合模型现已支持
- **Clef 决策模型** — 文本和视觉变体现在可以通过 llama-server 加载
- **Hexagon (HTP) 池化** — 为 Gemma 4 图像编码器 CLIP 图谱添加 POOL_1D 和 POOL_2D 算子（PR #29995）
- **gfx1201** — CI 现已上线

仅限于 `1accel` 运行器（PR #30016）

## 4. 性能与优化

| PR | 领域 | 详情 |
|----|------|---------|
| #29974 | Hexagon | 针对行分割多核的头部并行 flash_attn 分区 |
| #29995 | Hexagon | HTP 池化与 DMA 流水线优化 |
| #29986 | CUDA | 修复 alloc_deps 批次独立性检查 — 解决 #29980（Qwen3.6-35B-A3B 约 2x 减速）|
| #29857 | CUDA | 优化的 NVFP4 MMQ 累加 |
| #29882 | Vulkan | RMS norm 优化

，采用子组归约（WIP 测试中）|
| #29779 | Hexagon | 将扁平化 matmul 展开为 2D 以提升 HMX 多序列速度 |
| #29626 | Hexagon | HMX matmul 支持 F16 激活和任意行数 |
| #30022 | ROCm/AMD | 针对 GCN 架构的 Stream-k 算法调优 |
| #30021 | ROCm/AMD | AMD GCN 的 MMQ 配置重调 |

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 备注 |
|-------|----------|---------|-------|
| **#29811** — Qwen3.8-Flash + MTP 启动时断言失败 | 高 | OPEN | 17 条评论；影响 draft-mtp 规范使用 |
| **#28753** — ggml 崩溃：意外的图重分配 | 高 | OPEN | 后端调度器问题，10 条评论 |
| **#24440** — Gemma 4 31B + MTP 修改 system prompt 后服务器崩溃 | 高 | OPEN | fattn.cu:579 致命错误 |
| **#29526** — Vulkan A770 长时间运行（7-8小时）后解码性能下降 | 中 | OPEN | 长时间推理后返回空 EOS；疑似 GPU fence 超时 |
| **#25859** — Offloaded-MoE prefill 在 H2D 上空闲等待 | 中 | OPEN | 串行专家复制导致 GPU 饥饿 |

**已修复：**
- #29988 — Vulkan Flash Attention shmem 越界写入
- #29591 — 跨 flash attention 和 softmax 的 Vulkan 陈旧 prealloc_y 重用
- #29986 — CUDA alloc_deps 批次独立性（修复 #29980）
- #29915 — ggml-rpc 验证 PAD_REFLECT_1D（修复远程 OOB 写入）

## 6. 应用开发者需要了解的内容

1. **Batch API 升级路径** — 处理多模态输入或需要 MTP 状态 embedding 时，迁移到 `llama_batch_ext`/`llama_process`。混合 embedding+token 批次支持（PR #29622）为视觉语言模型解锁了新的 prompt 缓存模式。

2. **新生产模型** — GLM-5.3-Flash-320B 和 Clef 现已可部署。Clef 视觉输入请参考 PR #29969。

3. **CUDA 用户请升级** — #29184 导致的约 2x prefill 减速已在 b11433/b11425 中修复。重新编译最新版本。

4. **Vulkan 长时间运行稳定性** — Intel Arc A770 的 7-8 小时性能下降问题正在调查中（#29526）。如果需要长时间推理，请监控空 EOS 回复。

5. **Server 改进** — 部分媒体截断现在会返回正确错误消息被拒绝（#24076）。带 `--models-preset` 的路由器模式现在正确处理内置工具（#25333 已关闭）。

6. **量化工具** — PR #15550 新增 `--target-size` 和 `--target-bpw` 选项，用于自动选择量化类型以达到文件大小或 BPW 目标——这对部署规划很有帮助。

---</think>

# llama.cpp Digest — 2026-10-06

## 1. 今日要闻

**llama.cpp v0.6.0 发布** — 本次大版本更新带来了新的 `llama_batch_ext` 扩展批处理 API，其中 `llama_process` 支持混合 token/embedding 输入和 MTP/deepstack 状态 embedding。同时新增了对 GLM-5.3-Flash (GLM5-Next) 320B 混合模型、Clef 决策模型（文本和视觉）的支持，并正式推出了 MTP 规范。版本号更新至 0.6.0，并更新了摘要提示词。

## 2. 版本发布与破坏性变更

| 版本 | 关键变更 |
|---------|-------------|
| **v0.6.0** | 新增 `llama_batch_ext` + `llama_process` API；支持 GLM-5.3-Flash 320B；支持 Clef 视觉模型；MTP 规范正式版；摘要提示词更新 |

**迁移提示：** 新的 `llama_batch_ext` API 支持在同一批次中混合 embedding 和原始 token，这对 paligemma 类模型的非因果 prompt 处理很有用。详见 PR #29622。

## 3. 新模型与硬件支持

- **GLM-5.3-Flash (GLM5-Next)** — 320B 混合模型现已支持
- **Clef 决策模型** — 文本和视觉变体现在可以通过 llama-server 加载
- **Hexagon (HTP) 池化** — 为 Gemma 4 图像编码器 CLIP 图谱添加 POOL_1D 和 POOL_2D 算子（PR #29995）
- **gfx1201** — CI 现仅限于 `1accel` 运行器（PR #30016）

## 4. 性能与优化

| PR | 领域 | 详情 |
|----|------|---------|
| #29974 | Hexagon | 针对行分割多核的头部并行 flash_attn 分区 |
| #29995 | Hexagon | HTP 池化与 DMA 流水线优化 |
| #29986 | CUDA | 修复 alloc_deps 批次独立性检查 — 解决 #29980（Qwen3.6-35B-A3B 约 2x 减速）|
| #29857 | CUDA | 优化的 NVFP4 MMQ 累加 |
| #29882 | Vulkan | RMS norm 优化，采用子组归约（WIP 测试中）|
| #29779 | Hexagon | 将扁平化 matmul 展开为 2D 以提升 HMX 多序列速度 |
| #29626 | Hexagon | HMX matmul 支持 F16 激活和任意行数 |
| #30022 | ROCm/AMD | 针对 GCN 架构的 Stream-k 算法调优 |
| #30021 | ROCm/AMD | AMD GCN 的 MMQ 配置重调 |

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 备注 |
|-------|----------|---------|-------|
| **#29811** — Qwen3.8-Flash + MTP 启动时断言失败 | 高 | OPEN | 17 条评论；影响 draft-mtp 规范使用 |
| **#28753** — ggml 崩溃：意外的图重分配 | 高 | OPEN | 后端调度器问题，10 条评论 |
| **#24440** — Gemma 4 31B + MTP 修改 system prompt 后服务器崩溃 | 高 | OPEN | fattn.cu:579 致命错误 |
| **#29526** — Vulkan A770 长时间运行（7-8小时）后解码性能下降 | 中 | OPEN | 长时间推理后返回空 EOS；疑似 GPU fence 超时 |
| **#25859** — Offloaded-MoE prefill 在 H2D 上空闲等待 | 中 | OPEN | 串行专家复制导致 GPU 饥饿 |

**已修复：**
- #29988 — Vulkan Flash Attention shmem 越界写入
- #29591 — 跨 flash attention 和 softmax 的 Vulkan 陈旧 prealloc_y 重用
- #29986 — CUDA alloc_deps 批次独立性（修复 #29980）
- #29915 — ggml-rpc 验证 PAD_REFLECT_1D（修复远程 OOB 写入）

## 6. 应用开发者需要了解的内容

1. **Batch API 升级路径** — 处理多模态输入或需要 MTP 状态 embedding 时，迁移到 `llama_batch_ext`/`llama_process`。混合 embedding+token 批次支持（PR #29622）为视觉语言模型解锁了新的 prompt 缓存模式。

2. **新生产模型** — GLM-5.3-Flash-320B 和 Clef 现已可部署。Clef 视觉输入请参考 PR #29969。

3. **CUDA 用户请升级** — #29184 导致的约 2x prefill 减速已在 b11433/b11425 中修复。重新编译最新版本。

4. **Vulkan 长时间运行稳定性** — Intel Arc A770 的 7-8 小时性能下降问题正在调查中（#29526）。如果需要长时间推理，请监控空 EOS 回复。

5. **Server 改进** — 部分媒体截断现在会被正确拒绝并返回错误消息（#24076）。带 `--models-preset` 的路由器模式现在正确处理内置工具（#25333 已关闭）。

6. **量化工具** — PR #15550 新增 `--target-size` 和 `--target-bpw` 选项，用于自动选择量化类型以达到文件大小或 BPW 目标——这对部署规划很有帮助。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate this Ollama digest into Simplified Chinese, following the specific rules provided. Let me analyze the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate while preserving all the formatting and technical terms:

Title: Ollama Digest — 2026-10-06
→ Ollama 每日简报 — 2026-10-06

"Today's Highlights" → 今日要闻

"Releases & Breaking Changes" → 发布与重大变更

"New Model & Hardware Support" → 新模型与硬件支持

"Performance & Optimization" → 性能与优化

"Stability & Regressions" → 稳定性与回归问题

"What This Means for Application Developers" → 对应用开发者的影响

I need to keep:
- All headings exactly as they are
- All tables with their structure
- All lists (bullet and numbered)
- Horizontal rules (---)
- URLs and issue references
- Code/file references
- Numbers and dates
- Technical terms that are commonly used in Chinese technical contexts

Let me go through and translate:</think>

# Ollama 每日简报 — 2026-10-06

## 今日要闻

Ollama 团队修复了多项 MLX 性能问题，包括 GPU 空闲后的高延迟问题，同时针对使用 MLX SDPA 的 Gemma4 CUDA 预填充进行了优化。值得关注的是，glm-ocr 0.35.1 版本存在回归问题，影响表格识别功能；此外，决策模型 `clef-flash` 在 `/v1/systemone` 上存在稳定性问题，llama-server 在缓存命中场景下也可能卡死。

---

## 发布与重大变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

| 项目 | 详情 |
|------|---------|
| **Kolibri 1 支持** | PR [#18780](https://github.com/ollama/ollama/pull/18780) — MLX 后端现已支持 Kolibri 1 模型 |
| **Windows AMD GPU 列表扩展** | PR [#18623](https://github.com/ollama/ollama/pull/18623) — Windows ROCm runner 现已支持更多 GCN/RDNA 架构：`gfx1030`、`gfx1100`、`gfx1101`、`gfx1102`、`gfx1150`、`gfx1151`、`gfx1200`、`gfx1201` |
| **显存受限环境下的 Gemma4** | PR [#16831](https://github.com/ollama/ollama/pull/16831) — 在显存受限的 GPU 上禁用 Gemma4 多模态模型的 llama.cpp `fit` 功能；保留用户覆盖配置 |
| **Gemma4 thinking 默认关闭** | PR [#16850](https://github.com/ollama/ollama/pull/16850) — Gemma4 模型默认 `think: false`（其他 thinking 模型保持 `true`）|

---

## 性能与优化

| 项目 | 详情 |
|------|---------|
| **MLX 空闲后延迟** | PR [#18807](https://github.com/ollama/ollama/pull/18807) — 修复每次请求后约 2 秒权重卸载问题；每秒刷新 MLX 显存驻留。修复 [#18744](https://github.com/ollama/ollama/issues/18744) |
| **Gemma4 CUDA 预填充加速** | PR [#18809](https://github.com/ollama/ollama/pull/18809) — 宽头维度使用 MLX SDPA 进行 CUDA 预填充；端到端提升约 12 倍，12b 模型提升 2-4 倍 |
| **模型查找开销** | PR [#18806](https://github.com/ollama/ollama/pull/18806) — 避免在模型解析时解码无关清单；复用 Metal 临时缓冲区 |
| **投机回滚状态压缩** | PR [#18805](https://github.com/ollama/ollama/pull/18805) — 投机回滚后压缩恢复的循环状态以提前释放内存 |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | **glm-ocr 回归** — [#18810](https://github.com/ollama/ollama/issues/18810) — v0.35.1 返回纯文本而非 HTML 表格；出现"token repeat limit reached"循环。Windows 11, RTX 5060 Ti |
| **高** | **llama-server 缓存命中时卡死** — [#18685](https://github.com/ollama/ollama/issues/18685) — v0.34.4 + CUDA/Linux (RTX 5060 Ti) 在缓存命中后挂起所有后续请求直至模型卸载 |
| **高** | **clef-flash 在 /v1/systemone 失败** — [#18769](https://github.com/ollama/ollama/issues/18769) — 决策模型首次前向传播时出现"non-finite logit" (CUDA) 或"cannot open model" (CPU)；`/v1/chat/completions` 正常 |
| **中** | **qwen3.6 工具调用模板违规** — [#16383](https://github.com/ollama/ollama/issues/16383) — qwen3.6 偶发 500 错误，发送格式错误的工具调用；qwen3.5 解析器无法反序列化 |
| **中** | **MLX 每层量化被忽略** — [#18789](https://github.com/ollama/ollama/issues/18789) — 混合精度 MLX 导入失败，出现 quantized_matmul 形状不匹配 |
| **中** | **第二次 ollama run 卡住** — [#18796](https://github.com/ollama/ollama/issues/18796) — Raspberry Pi 5 + Debian 13：模型下载完成但后续运行无输出 |
| **低** | **Muse Glimmer 30B GGUF 损坏** — [#18808](https://github.com/ollama/ollama/issues/18808) — HuggingFace GGUF 变体无响应；可能是内部 Jinja 模板问题 |
| **低** | **mistral-medium-3.5:128b 无法使用** — [#18770](https://github.com/ollama/ollama/issues/18770) — M4 芯片，128GB 内存：约 100GB  wired memory，每分钟仅生成约 1 个词 |

---

## 对应用开发者的影响

1. **如果你在 macOS 上使用 MLX**：PR #18807 中的延迟修复应该能显著改善空闲后首次请求的响应时间——权重在空闲 2 秒后不再被换出。

2. **如果你使用 Gemma4 模型**：`think: false` 默认值和显存受限环境下禁用 `llama fit` 可能会改变生成行为；如需启用，请显式设置 `think: true`。

3. **如果你使用 `/v1/responses` 流式工具调用**：PR [#18804](https://github.com/ollama/ollama/pull/18804) 修复了输出索引重用和消息排序问题——更新后请务必测试工具调用工作流。

4. **如果你遇到缓存命中场景**： [#18685](https://github.com/ollama/ollama/issues/18685) 中的 llama-server 卡死问题是已知阻塞项；在补丁发布前请考虑模型卸载策略或避免大量使用缓存。

5. **如果你使用 Windows AMD GPU**：扩展后的 GPU 列表现已覆盖较老的 Polaris (gfx1030) 和较新的 RDNA4 (gfx1200/gfx1201) 显卡——如在老旧硬件上运行请确认支持情况。

---

*数据来源：GitHub — ollama/ollama | 2026-10-06*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest from English to Chinese (Simplified Chinese, as indicated by the context). I need to:

1. Translate all the content while preserving the Markdown structure exactly
2. Keep URLs, issue/PR references (#12345), version tags, project names, file paths, API/config identifiers in their original form
3. Use natural technical Chinese, the register of a Chinese developer newsletter
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate this carefully, keeping the technical terms natural in Chinese:

- LiteLLM Digest — > LiteLLM 快讯
- Breaking Changes — > 破坏性变更
- New Model & Hardware Support — > 新模型与硬件支持
- Performance & Optimization — > 性能与优化
- Stability & Regressions — > 稳定性与回归问题

I'll translate maintaining the table structure and all formatting.</think>

# LiteLLM 快讯 — 2026-10-06

## 今日要闻

LiteLLM 项目继续保持高速迭代，本期修复了多个涉及成本归属和 provider 翻译边界情况的 bug。值得注意的是，多个影响流式请求计费准确性和 OpenAI 兼容部署的问题已修复，同时进行了连接池和 MCP 工具固定方面的基础设施工作。版本维护活跃，五个稳定分支均有补丁版本准备中。

---

## 版本发布与破坏性变更

| 版本 | 分支 | 类型 | 备注 |
|---------|--------|------|-------|
| 1.104.1 | stable/1.104.x | patch | 依赖更新 |
| 1.103.4 | stable/1.103.x | patch | 依赖更新 |
| 1.102.3 | stable/1.102.x | patch | 依赖更新 |
| 1.101.5 | stable/1.101.x | patch | 依赖更新 |
| 1.100.5 | stable/1.100.x | patch | 依赖更新 |

**本期无破坏性变更。** 所有 PR 均为 lockfile 级别的 Python 依赖更新，以使 stable 分支与 main 保持一致。

---

## 新模型与硬件支持

- **本期无新模型或硬件公告。**

---

## 性能与优化

### 已交付

| PR | 领域 | 变更 |
|----|------|--------|
| [#44732](https://github.com/BerriAI/litellm/pull/44732) | Router | 从提供服务的部署计算模型组价格 — 修复别名链pricing问题，如 `X → T → U` 时错误地用 `U` 的部署成本为 `X` 计费 |
| [#44679](https://github.com/BerriAI/litellm/pull/44679) | Vertex AI | 对图像生成费用路径应用区域端点倍率 — 确保 `regional_endpoint_multiplier` 作用于图像行 |
| [#38081](https://github.com/BerriAI/litellm/issues/38081) | Proxy | **讨论：** 500M TPM 规模 LiteLLM Proxy 扩容指南 — 输入密集型流量场景下 PostgreSQL 连接调优、配置建议 |

### 进行中

- **Pass-through 端点注册表无界增长** — [#26081](https://github.com/BerriAI/litellm/issues/26081)：开启 `store_model_in_db: true` 时 CPU 飙升至 100%，由注册表泄漏导致。暂无 PR。
- **Prisma 空闲连接** — [#41420](https://github.com/BerriAI/litellm/issues/41420)：低流量时代理未关闭与 PGBouncer 的空闲连接。暂无 PR。

---

## 稳定性与回归问题

### 严重

| Issue | 描述 | 严重程度 |
|-------|-------------|----------|
| [#44748](https://github.com/BerriAI/litellm/issues/44748) | 并发 `/v1/messages` 返回 500 错误 `"dictionary changed size during iteration"` — 用户被计费但收到错误响应 | **高** — 数据损坏风险 |
| [#37140](https://github.com/BerriAI/litellm/issues/37140) | 非流式请求在客户端断开时从不取消上游工作 — 资源泄漏 | **高** |
| [#26081](https://github.com/BerriAI/litellm/issues/26081) | Pass-through 端点注册表无界增长，CPU 100% | **高** |

### 值得关注

| Issue | 描述 | 修复 PR |
|-------|-------------|--------|
| [#42161](https://github.com/BerriAI/litellm/issues/42161) | 流式请求当 `provider_response_model` 是缺失于价格表中的 slug 时（如过期的 Anthropic 版本）计费为 0 | — |
| [#27175](https://github.com/BerriAI/litellm/issues/27175) | 无法成功使用 ChatGPT 订阅 OAuth 设备流 | — |
| [#44182](https://github.com/BerriAI/litellm/issues/44182) | JWT 中 Team ID 未被验证 — 访问控制漏洞 | — |
| [#44211](https://github.com/BerriAI/litellm/issues/44211) | DeepSeek transformer 静默丢弃 `role=tool` 消息中的图像内容 | — |
| [#44546](https://github.com/BerriAI/litellm/issues/44546) | `aspeech` 同步调用语音 provider 两次，重复计费 | — |

### 已修复 / 已解决

| Issue | 解决状态 |
|-------|-------------|
| [#44154](https://github.com/BerriAI/litellm/issues/44154) | 已关闭 — 后台健康检查结果被错误地归因到所有共享相同 `litellm_params.model` 的部署 |
| [#31557](https://github.com/BerriAI/litellm/issues/31557) | 已关闭 — fallback 链在 fallback 模型上下文窗口更小时静默失败 |

---

## 应用开发者需要关注的事项

1. **计费准确性正在提升** — Router 定价修复 ([#44732](https://github.com/BerriAI/litellm/pull/44732)) 解决了别名链导致成本归属错误的长期问题。如果您使用模型组别名，请重新核对您的支出报告。

2. **关注并发 `/v1/messages` 不稳定性** — Issue [#44748](https://github.com/BerriAI/litellm/issues/44748) 报告高负载下出现竞态条件导致 500 错误。如果您的代理负载较高，请监控 `"dictionary changed size during iteration"` 错误。

3. **流式请求计费 bug** — 如果您使用过期的 Anthropic 版本或自定义 `provider_response_model` slug，流式请求可能计费为 $0。非流式路径正常工作；此问题仅限于流式场景。

4. **新功能：从文件读取密钥** — Feature request [#28994](https://github.com/BerriAI/litellm/issues/28994) 提议从文件读取密钥（Docker secrets、Vault agent）。即将推出。

5. **MCP 工具固定漂移告警** — Issue [#44093](https://github.com/BerriAI/litellm/issues/44093) 指出 MCP 工具注解和 `outputSchema` 在固定漂移检测中被忽略 — `readOnlyHint` 变更不会触发告警。

6. **Claude Code 兼容性** — 已修复两个 Claude Code 相关问题：托管 vLLM 未传递 `output_config.effort`（[#44560](https://github.com/BerriAI/litellm/issues/44560)）和 Bedrock 503 错误未映射到 `overloaded_error`（[#36655](https://github.com/BerriAI/litellm/issues/36655)）。

---

*基于 GitHub 数据生成 — BerriAI/litellm, 2026-10-06*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest into Chinese, following specific rules:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, dates, code, issue/PR references verbatim
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate while maintaining the structure:

Title: # Unsloth Digest — 2026-10-06

Today's Highlights section...
Releases & Breaking Changes...
New Model & Hardware Support table...
Performance & Optimization table...
Stability & Regressions table...
What This Means for Application Developers section...

Let me translate this carefully.</think>

# Unsloth 开发速报 — 2026-10-06

## 今日要点

Unsloth 团队正在推出一波 Studio 可用性改进，聚焦于工作流连续性和边界情况处理。值得注意的是，项目文件夹现在可以在 Docker 容器重建后保留（数据保存在命名卷中），Mac LoRAs 可以正确进行对话和导出，且 Qwen thinking 采样在 Chat 和 API 客户端之间现在保持一致。在推理引擎方面，Qwen3.5/3.6 MoE 和 Gemma-4 MoE 模型（带 LoRA 专家层）的 fast_inference 支持已上线。

---

## 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

| 模型/架构 | 类型 | PR | 备注 |
|---|---|---|---|
| **Qwen3.5 / 3.6 MoE** | MoE + LoRA | [#12742](https://github.com/unslothai/unsloth/pull/12742) | `fast_inference=True` 现可加载这些模型的 LoRA 专家层（此前在 allowlist 中被拒绝） |
| **Gemma-4 MoE** | MoE + LoRA | [#12742](https://github.com/unslothai/unsloth/pull/12742) | 同上 — 现支持 `gemma-4-26B-A4B` 带 LoRA |
| **LFM (LiquidFM)** | 状态空间模型 | [#4073](https://github.com/unslothai/unsloth/issues/4073) | 请求支持快速推理；issue 已关闭，9 条评论 |

---

## 性能与优化

| 领域 | 变更 | PR |
|---|---|---|
| **上下文使用量 UI** | 从进度条改为环形指示器，显示 `3.2k / 131.1k`，精确到半个字符 | [#12805](https://github.com/unslothai/unsloth/pull/12805) |
| **代码字体大小** | 对话代码块现默认为 12px（此前宽列下为 13px/14px） | [#12805](https://github.com/unslothai/unsloth/pull/12805) |
| **Qwen thinking 采样** | API 客户端现与 Chat 使用相同的 Qwen thinking 采样参数（temp 0.6, top_p 0.95） | [#12791](https://github.com/unslothai/unsloth/pull/12791) |
| **MiniMax-H3 流式推理** | 通过将非固定流式块保留给 diffusers 的 onload 减少主机内存占用；减少 10–14 GiB 主机内存 | [#12753](https://github.com/unslothai/unsloth/pull/12753) |
| **Colab 沙盒** | 修复 OS 沙盒在容器化环境中的运行问题（bubblewrap 权限问题） | [#12801](https://github.com/unslothai/unsloth/pull/12801) |
| **Qwen-Image-2.1 在 16GB 显卡上运行** | 现可在 16 GB 显存下运行编辑任务而非直接拒绝（此前需要约 5.56 GB 但因内存限制被拒绝） | [#12752](https://github.com/unslothai/unsloth/pull/12752) |

---

## 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 修复 PR |
|---|---|---|---|
| **mmproj-F16.gguf 磁盘分页回归** — 严重 t/s 下降；额外参数被 strip-shadow，`--mlock` 被拒绝 | **高** | 已关闭 | — |
| **Q4_1 KV-cache 导致 99% CPU / 温控降频**（F16 正常） | **高** | 进行中 | — |
| **ChatGPT/Codex 订阅同时拒绝 API key** | **中** | 已关闭 | — |
| **导出 GGUF 失败：HF 缓存只读** | **中** | 已关闭 | — |
| **Vulkan 探测在旧加载器上弹出 "Entry point not found"** | **中** | 进行中 | [#12762](https://github.com/unslothai/unsloth/pull/12762) |
| **长上下文对话卡顿**（Windows 10, GeForce RTX） | **中** | 进行中 | — |
| **Web 搜索失败：h2_client 连接重置** | **低** | 进行中 | — |
| **ARM64 包是 MacOS 构建，非 Linux** | **低** | 进行中 | — |

---

## 这对应用开发者意味着什么

1. **如果你运行 Qwen3.5/3.6 MoE 或 Gemma-4 MoE 带 LoRA**：你现在可以对这些架构使用 `fast_inference=True` —— 此前在 allowlist 中被阻止。这启用了基于 vLLM 的快速推理，支持 LoRA 适配器加载到专家层。

2. **如果你使用 Studio 网页/桌面 UI**：多项可用性修复已上线 — 项目文件夹现在可以跨 Docker 镜像更新保留（数据保存在命名卷中），Mac LoRAs 在对话/导出时保留其 ChatML 模板，且 API 驱动的推理现与 Chat 的 Qwen thinking 采样行为一致。

3. **如果你处理 Word 文档**：换行符和复选框表单字段现可在附加 `.docx` 文件到对话时保留。

4. **如果你运行视觉微调**：基于 Safetensors 的视觉模型（Qwen2.5-VL、Gemma 3）现可正确看到对话上下文中的所有图像，而不仅仅是最近的一张 — 此前会导致静默图像丢失且无错误。

5. **如果你微调嵌入模型**：EmbeddingGemma 和 Qwen3-Embedding 提示词现可在训练时保留；此前 `model.prompts["query"]` 返回为空，导致训练在无提示词的情况下运行。

6. **如果你遇到内存限制**：Qwen-Image-2.1 编辑现可在 16 GB 显卡上运行而非直接拒绝，且 MiniMax-H3 流式推理使用更少的主机内存（减少 10–14 GiB）。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*