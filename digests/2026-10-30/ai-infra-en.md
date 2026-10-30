# AI Infrastructure Digest 2026-10-30

> Generated: 2026-10-30 02:07 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report for today's AI infrastructure ecosystem, covering vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me analyze the data and create a structured comparison.

Let me organize the information across all projects:

**Activity Summary:**
- **vLLM**: Multiple releases (8), many issues (13+), many PRs
- **SGLang**: No releases, multiple issues, many PRs
- **llama.cpp**: Multiple releases (9), some issues, several PRs
- **Ollama**: No releases, many issues, several PRs
- **LiteLLM**: One release candidate, several issues, many PRs
- **Unsloth**: No releases, some issues, several PRs

**Model Support:**
- vLLM: MiniMax-M3, Intel XPU, Qwen3-Next, DeepSeek V4.1, GLM-5.3, CPU MRv2
- SGLang: T-Head PPU, Sensenova Loop, GLM-5.x, DeepSeek-V4
- llama.cpp: Mistral Le Chonk, Limite 1B, Gemma3N, Gemma4, IQ2 (OpenCL)
- Ollama: Bonsai 2, LFM3-Omni audio/video, Korean TTS
- LiteLLM: Azure AI Foundry Agents v2, Z.AI, CLF AI Gateway, Claude Vertex batching
- Unsloth: LFM3-1.7B, Multiple resident GGUF, EXL3 quantization

**Performance Focus:**
- vLLM: KV cache optimization, scheduler, PP balancing, DP prefill
- SGLang: NPU, XPU, AMD DSA, MoE, attention backends
- llama.cpp: Metal MXFP4, SYCL DPAS, Hexagon, x86 unrolling, CPU flash attention


- Ollama: MLX concurrent generation, VRAM scheduling, embedding ordering
- LiteLLM: Streaming overhead elimination, routing, cost tracking
- Unsloth: Flex attention, fused NF4 decode, ASR memory, MLX

**Layer Positioning:**
I'll categorize these projects by their infrastructure role. vLLM and SGLang operate as high-performance serving engines optimized for production inference. Ollama and llama.cpp function as local runtime environments for on-device execution. LiteLLM serves as a gateway layer providing unified API management across different backends, while Unsloth focuses on training optimization and fine-tuning workflows.</think>

# Cross-Project AI Infrastructure Digest — 2026-10-30

---

## 1. Ecosystem Overview

Today's development activity reflects a maturing AI inference stack with clear specialization across layers. **vLLM and SGLang** continue racing to optimize serving throughput for distributed deployments, with heavy investment in KV cache management and scheduler improvements. **llama.cpp** drives local inference portability across heterogeneous hardware (Metal, SYCL, Hexagon). **Ollama** simplifies local deployment with MLX improvements and better memory accounting. **LiteLLM** focuses on multi-provider gateway reliability and cost tracking. **Unsloth** bridges training optimization with serving via EXL3 quantization and multi-model GGUF support. The field is consolidating around multi-backend support (AMD ROCm, Intel XPU, NPUs) as inference demand diversifies across edge and data center.

---

## 2. Activity Comparison

| Project | Releases (24h) | Notable Issues | PRs Merged | Release Status |
|---------|----------------|----------------|------------|-----------------|
| **vLLM** | 0 | 13 (top: ViT CUDA graph RFC, DeepSeek SM120 bug, GLM-5.3 perf) | 8+ | No release |
| **SGLang** | 0 | 19 (top: CI stability, GLM-5.3 FA4 crash, DeepSeek-V4 scheduler) | 26 | No release |
| **llama.cpp** | 9 | 10 (top: Metal vs Vulkan, SYCL bf16 Arrow Lake, Hybrid LFM2) | 7 | Active releases |
| **Ollama** | 0 | 19 (top: ROCm KV bleed, 5s ls delay, Claude tool calls) | 26 | No release |
| **LiteLLM** | 1 (v1.108.0-rc.1) | 10 (top: streaming cost loss, Claude sanitization, Gemini corruption) | 17 | RC available |
| **Unsloth** | 0 | 7 (top: context compaction, core dumps, Windows AMD commit) | 20+ | No release |

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek V4.1** | ✅ ROCm gfx950 GEMM | ✅ DSC/DSv4 support | — | — | — | — |
| **GLM-5.3** | ✅ ROCm Flash perf | ✅ Multi-modal | — | — | — | — |
| **Qwen3-Next/3.5** | ✅ Fused QK-Norm+RoPE | — | — | ✅ MLX tool_calls | — | — |
| **Gemma 4** | ✅ MTP speculative | — | ✅ Support | ✅ Embedding fix | — | ✅ Flex attention |
| **MiniMax-M3** | ✅ ROCm layer reuse | — | — | — | — | — |
| **LFM3 (Liquid AI)** | — | — | — | ✅ Audio/video | — | ✅ 1.7B requested |
| **Mistral Le Chonk** | — | — | ✅ New model | — | — | — |
| **Limite 1B (Violetto)** | — | — | ✅ New model | — | — | — |
| **Sensenova Loop** | — | ✅ Multimodal | — | — | — | — |
| **T-Head PPU** | — | ✅ Roadmap | — | — | — | — |
| **EXL3 Quantization** | — | — | — | — | — | ✅ 2-8 bit + MoE |
| **Azure AI Foundry Agents v2** | — | — | — | — | ✅ | — |
| **Z.AI** | — | — | — | — | ✅ | — |
| **Multiple Resident GGUF** | — | — | ✅ Studio multi-process | — | — | ✅ |

**Leader:** vLLM leads in enterprise model coverage; Unsloth leads in quantization innovation (EXL3); llama.cpp leads in hardware portability.

---

## 4. Performance Frontier

| Optimization Area | Active Projects | Key Focus |
|------------------|-----------------|------------|
| **KV Cache / Paged Attention** | vLLM, SGLang, llama.cpp | DiffKV prefill tiling (3.0x on 200K ctx), tiered offload, P2P fault handling |
| **Scheduler / Batching** | vLLM, SGLang | DP prefill delayer, PP decode balancing, priority eviction, least-busy routing |
| **Quantization** | llama.cpp, Unsloth | MXFP4 Metal, SYCL DPAS q4_0/q8_0, EXL3 2-8 bit + MoE, fused NF4 decode |
| **Distributed / PP** | vLLM | Multi-GPU PP microbatching, cross-DP prefill coordination |
| **NPU / Edge** | SGLang, llama.cpp | Ascend mixed-chunk, T-Head PPU roadmap, Hexagon CONCAT |
| **Local / MLX** | Ollama, Unsloth | Concurrent generation, MLX memory estimation, voice context |
| **Gateway / Routing** | LiteLLM | OTPM reservation cap, stream overhead elimination, cross-API bridge |
| **Attention Kernels** | vLLM, SGLang, Unsloth | Gemma3 flex attention, GDN hybrid, Triton fused kernels |

**Hot zones:** KV cache optimization (all), quantization diversity (llama.cpp/Unsloth), NPU expansion (SGLang).

---

## 5. Layer Positioning

| Layer | Projects | Role |
|-------|----------|------|
| **Serving Engine** | vLLM, SGLang | Production-grade high-throughput inference, P/D separation, speculative decoding, KV offload |
| **Local Runtime** | llama.cpp, Ollama | On-device/offline inference, cross-platform (Windows/macOS/Linux), embedded deployment |
| **Gateway / Proxy** | LiteLLM | Multi-provider API unification, cost tracking, retry/rate-limit handling, OpenAI compatibility |
| **Training / Fine-tuning** | Unsloth | Quantization-aware training, LoRA fine-tuning, GGUF export, multi-model serving |
| **Studio / UI** | Ollama, Unsloth | Desktop GUI, model management, embedded deployment |

**Boundary blur:** Unsloth now bridges training → serving via EXL3 + multi-model GGUF. Ollama bridges local → gateway via OpenAI-compatible endpoints. LiteLLM adds caching/routing but not inference itself.

---

## 6. Trend Signals

1. **Multi-backend parity is table stakes.** Every project now explicitly supports ≥3 hardware backends (NVIDIA, AMD ROCm, Intel XPU, Apple MLX, NPUs).差异化 now lies in performance tuning per backend, not mere availability.

2. **Quantization fragmentation is accelerating.** EXL3 (Unsloth), MXFP4 (llama.cpp), IQ2 (llama.cpp), and various MoE-aware schemes (vLLM) suggest no single quantization format will dominate. Application developers should expect to evaluate accuracy per model/quantization pair.

3. **Streaming cost tracking is broken industry-wide.** LiteLLM, vLLM, and others have open issues around streaming cost attribution. If you're building multi-tenant SaaS with per-request billing, this is a known gap across all gateways.

4. **NPU support is accelerating.** SGLang's Ascend mixed-chunk/EPLB, llama.cpp's Hexagon ops, and T-Head PPU roadmap indicate the ecosystem is preparing for inference on edge NPU silicon — not just GPU clouds.

5. **Scheduler sophistication is diverging.** vLLM invests in PP-balanced decode, cross-DP prefill delayer, and priority eviction; LiteLLM invests in least-busy routing and OTPM caps. These represent two philosophies: engine-level scheduling (vLLM) vs gateway-level routing (LiteLLM).

6. **Local + multi-model is emerging.** Unsloth's multiple resident GGUF (#10876) and Ollama's MLX concurrent generation signal that local inference is moving beyond single-model CLI usage toward multi-model orchestration.

**What to watch:**

- **vLLM**: ViT CUDA graph RFC outcome → will define multimodal serving performance for Qwen3-VL, Kimi K2.5
- **SGLang**: T-Head PPU support timeline → first non-NVIDIA/NPU path to market
- **llama.cpp**: EXL3 quantization accuracy benchmarks → could shift local inference quality curve
- **LiteLLM**: Streaming cost tracking fixes → critical for production billing accuracy
- **Ollama**: ROCm Strix Halo fix → AMD iGPU inference credibility
- **Unsloth**: Fused NF4 decode production readiness → 2x throughput with acceptable accuracy?

---

*Cross-project digest compiled from 2026-10-30 GitHub activity across vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the GitHub data provided for vLLM and create a structured digest for 2026-10-30.

Looking at the data:

1. **Latest Releases**: None in the last 24h

2. **Latest Issues** (top by comment count):
- #38175: RFC for ViT Full CUDA Graph support for multimodal models (47 comments)
- #26195: Bug - Missing cached item in MultiModalReceiverCache (40 comments)
- #59203: Bug - DeepSeek-V4.1-Flash on SM120 with FlashInfer sparse-MLA issue (24 comments)
- #59575: ROCm AMD Qwen3.8-Flash-Next gfx950/MI355X Performance Optimization (17 comments)
- #62818: RFC - Preserve output distribution under structured-output + speculative decoding (14 comments)
- #48848: Bug - Gemma4 MTP speculative decoding crashes (13 comments)
- #57406: Feature - GLM 5.3 Performance Optimization (13 comments)
- #63602: Bug - P2P KV offload tier does not fail fast on peer faults (13 comments)
- #49902: Bug - Tiered KV offload promotes every waiting request (11 comments)
- #50046: Bug - Qwen3.5/Qwen3-Next GDN attention crashes with torch.compile (10 comments)
- #63505: Bug - Qwen3.8-27B with PP=3 illegal memory access (10 comments)
- #60523: RFC - Improving MooncakeConnector (10 comments)

3. **Latest Pull Requests** (top by activity):
- #64403: Bugfix ROCm - Avoid unused index caches in MiniMax-M3


- #61834: Draft - Add dp-prefill-delayer for cross-DP prefill
- #63076: ROCm Perf - Triton sigmoid+bias top-k optimization
- #51406: ROCm - Enable fused QK-norm+RoPE+gate for Qwen3
- #61025: Bugfix - Profile batch-sharded all-to-all before KV cache sizing
- #62546: XPU - Fix MooncakeStoreConnector on Intel XPU
- #60169: ROCm DSv4.1 Perf - AITER FlyDSL GEMM

I'm tracking several performance optimization efforts across different hardware platforms. The pull requests focus on ROCm optimizations, Triton kernel improvements, and bug fixes for multi-modal and distributed processing scenarios. Key areas include prefill delayer mechanisms, GEMM performance enhancements, and memory management refinements.

The new pull requests highlight cross-platform support, particularly for Intel XPU and AMD ROCm architectures. Significant work involves model-specific performance tuning for Qwen and GLM models, with attention to quantization and memory efficiency. The proposed changes aim to improve kernel performance, reduce unnecessary computations, and enhance overall system flexibility across different hardware environments.

Performance optimizations focus on specific GPU architectures, targeting memory management and computational efficiency. The DeepSeek-V4.1 implementation shows promising gains on gfx950, with kernel-level improvements in quantization and attention mechanisms.

Stability remains critical, addressing potential crashes in speculative decoding scenarios and resolving prefix caching challenges. The ongoing efforts indicate a comprehensive approach to system optimization, balancing performance enhancements with robust error handling and hardware compatibility.</think>

# vLLM Technical Digest — 2026-10-30

## 1. Today's Highlights

vLLM continues active development across ROCm/AMD hardware optimization and multi-modal inference. Notable RFCs opened for ViT CUDA graph support and MooncakeConnector improvements, while multiple performance PRs landed targeting DeepSeek V4.1 on gfx950 and GLM-5.3 Flash on ROCm. A critical bug affecting Qwen3.8-27B with pipeline parallelism was reported alongside scheduler fixes for priority eviction edge cases.

---

## 2. Releases & Breaking Changes

**No new releases in the last 24 hours.**

---

## 3. New Model & Hardware Support

| Model/Feature | Details | PR/Issue |
|---------------|---------|----------|
| **MiniMax-M3 layers** | ROCm: Avoid unused index-key cache for layers reusing top-k indices | [PR #64403](https://github.com/vllm-project/vllm/pull/64403) |
| **Intel XPU** | Fixed MooncakeStoreConnector compatibility | [PR #62546](https://github.com/vllm-project/vllm/pull/62546) |
| **Qwen3-Next/Qwen3.5** | ROCm: Fused QK-norm+RoPE+gate Triton kernel enabled | [PR #51406](https://github.com/vllm-project/vllm/pull/51406) |
| **DeepSeek V4.1** | ROCm gfx950: AITER FlyDSL GEMM for 32x32 MXFP8 linears | [PR #60169](https://github.com/vllm-project/vllm/pull/60169) |
| **GLM-5.3 Flash** | ROCm: Eliminated int32/int64 copies in kpool sparse indexer | [PR #63910](https://github.com/vllm-project/vllm/pull/63910) |
| **CPU (MRv2)** | Enabled Model Runner V2 for non-triton CPU backends (Arm, IBM Z) | [PR #61995](https://github.com/vllm-project/vllm/pull/61995) |

---

## 4. Performance & Optimization

| Area | Change | Impact | Reference |
|------|--------|--------|-----------|
| **DeepSeek V4.1 MXFP8** | AITER FlyDSL GEMM on gfx950 | **+3.7% total throughput** | [PR #60169](https://github.com/vllm-project/vllm/pull/60169) |
| **MoE grouping** | Triton sigmoid+bias top-k when grouping eliminates nothing | ROCm optimization | [PR #63076](https://github.com/vllm-project/vllm/pull/63076) |
| **Attention metadata** | Source Triton metadata builder geometry from `kv_cache_spec` | Heterogeneous models (e.g., Gemma 4) now use faster 2D kernel | [PR #56996](https://github.com/vllm-project/vllm/pull/56996) |
| **DiffKV prefill** | SM80 tiling: BLOCK_M=128 + KV tile 64 | **3.0x speedup** on 200K-context chunks | [Issue #61095](https://github.com/vllm-project/vllm/issues/61095) |
| **Scheduler (PP)** | Balance decode batches across PP microbatches | Reduced prefill interference for decode | [PR #50410](https://github.com/vllm-project/vllm/pull/50410) |
| **DP prefill** | Opt-in cross-DP prefill delayer (`--dp-prefill-delayer`) | Reduces mixed-step frequency in MoE | [PR #61834](https://github.com/vllm-project/vllm/pull/61834) |
| **NVFP4 quantization** | Added size-gated PDL to `silu_and_mul_nvfp4_quant` | Kernel optimization for sm90+ | [PR #64494](https://github.com/vllm-project/vllm/pull/64494) |
| **KV cache profiling** | Profile batch-sharded all-to-all before KV sizing | Fixes memory budget underestimation | [PR #61025](https://github.com/vllm-project/vllm/pull/61025) |

**RFCs in progress:**
- [Issue #38175](https://github.com/vllm-project/vllm/issues/38175): ViT Full CUDA Graph support for multimodal models (Qwen3-VL, GLM-V, Kimi K2.5)
- [Issue #57406](https://github.com/vllm-project/vllm/issues/57406): GLM 5.3 performance optimization

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix |
|----------|-------|--------|-----|
| **High** | Qwen3.8-27B (GDN hybrid) PP=3 on sm_86: illegal memory access (Xid 31) with prefix caching | Open | [Issue #63505](https://github.com/vllm-project/vllm/issues/63505) |
| **High** | Gemma4 MTP speculative decoding crashes at engine init — "a and b must have same reduction dim" | Open | [Issue #48848](https://github.com/vllm-project/vllm/issues/48848) |
| **High** | P2P KV offload tier does not fail fast on peer faults | Open | [Issue #63602](https://github.com/vllm-project/vllm/issues/63602) |
| **Medium** | Tiered KV offload promotes every waiting request (fills DRAM pool) | Open | [Issue #49902](https://github.com/vllm-project/vllm/issues/49902) |
| **Medium** | Qwen3.5/Qwen3-Next GDN attention crashes at warmup with torch.compile | Open | [Issue #50046](https://github.com/vllm-project/vllm/issues/50046) |
| **Medium** | Priority scheduling un-schedules request already scheduled in same step | **Fix merged** | [PR #59963](https://github.com/vllm-project/vllm/pull/59963) |
| **Medium** | GLM-5.x (DSA) under PP: reuse layers read stale top-k indices | Open | [Issue #63170](https://github.com/vllm-project/vllm/issues/63170) |
| **Low** | Spurious EngineDeadError traceback during graceful shutdown | Open | [Issue #48745](https://github.com/vllm-project/vllm/issues/48745) |
| **Low** | Kimi-K3 prefix cache miss at 1536-token boundaries | Open | [Issue #50235](https://github.com/vllm-project/vllm/issues/50235) |

---

## 6. What This Means for Application Developers

1. **Multi-modal workloads**: The RFC for ViT CUDA graph support ([#38175](https://github.com/vllm-project/vllm/issues/38175)) signals upcoming improvements for multimodal LLM serving — if you're running Qwen3-VL or Kimi K2.5, stay tuned.

2. **AMD/ROCm users**: Significant ROCm gains landed — DeepSeek V4.1 sees +3.7% throughput on gfx950, and GLM-5.3 Flash optimizations eliminate unnecessary type conversions. If you're on MI355X or gfx950, consider upgrading.

3. **Pipeline parallelism users**: The decode batch balancing fix ([PR #50410](https://github.com/vllm-project/vllm/pull/50410)) reduces prefill interference when using PP — beneficial for high-throughput multi-GPU deployments.

4. **Structured output + speculative decoding**: RFC up for review ([#62818](https://github.com/vllm-project/vllm/issues/62818)) addressing output distribution preservation; if you use both features together, track this.

5. **Intel XPU**: MooncakeConnector fixes landed ([PR #62546](https://github.com/vllm-project/vllm/pull/62546)) — disaggregated P/D inference on Intel hardware is more stable.

6. **Watch for regressions**: Qwen3.8-27B with PP=3 and prefix caching has a confirmed correctness bug ([#63505](https://github.com/vllm-project/vllm/issues/63505)) — avoid this configuration until fixed.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to generate a structured SGLang digest for 2026-10-30 based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Let me go through the data:

**Latest Releases**: None in last 24h

**Latest Issues** (showing top by comment count):
1. #42752 - Flaky tests and CI infrastructure failures (140 comments) - OPEN
2. #42012 - GLM-5.3-Flash on SM120: fa4 attention backend crashes (25 comments) - OPEN
3. #3929 - Slack Channel not open to Public (22 comments) - CLOSED
4. #37519 - Support T-Head PPU (7 comments) - OPEN
5. #46806 - Weight updates silently load target weights into DFLASH draft (6 comments) - OPEN
6. #38515 - sgl_kernel AOT: rmsnorm NoKernelImage on sm_75 (5 comments) - OPEN
7. #45400 - HiCache on hybrid GDN model: host-tier hits drop to zero (4 comments) - OPEN
8. #47218 - DeepSeek-V4 scheduler crash when multimodal offsets become None (3 comments) - OPEN
9. #29738 - NameError: deep_gemm not defined (3 comments) - CLOSED/inactive
10. #46803 - FlashInfer cascade module JIT-compiles inside first request (3 comments) - OPEN

**Latest Pull Requests**:
- #39085 - [AMD] Reuse AITER DSA prefill metadata across layers
- #38440 - [NPU] DSpark: DeepSeek-V4 support DSpark compact mode
- #46065 - [AMD] diffusion: materialize SDPA operands for long sequences
- #47266 - [NPU] eplb: Enable dynamic expert load balancing on Ascend


- #47367 - [NPU] support mixed-chunk on the Ascend DSA sparse attention path
- #47366 - [Fix] disaggregation: Keep output ids during a PD rebootstrap
- #47365 - [NPU] CI: Refresh coverage baseline
- #30980 - [XPU] graph: Add full prefill graph
- #43994 - [XPU] moe: Add FP8 MoE support
- #47260 - detokenizer: Send per-request decode inputs once
- #47281 - sensenova_loop: Add multimodal Loop and mHC inference
- #39799 - Fix for

I'll continue analyzing the pull requests, focusing on their technical significance and potential impact on the SGLang project. The list reveals ongoing work across multiple hardware platforms and inference optimization strategies, particularly for Ascend NPUs and XPU architectures.

The upcoming digest will synthesize key developments, highlighting performance improvements and emerging support for advanced model architectures. I'll prioritize insights that demonstrate technical innovation and practical inference enhancements.

Key areas of focus include hardware acceleration, memory optimization, and novel model inference techniques across different computational platforms.</think>

# SGLang Digest — 2026-10-30

## 1. Today's Highlights

SGLang saw significant backend expansion today with new Ascend NPU capabilities (mixed-chunk sparse attention, dynamic expert load balancing) and XPU FP8 MoE support landing. The community is actively addressing CI stability issues (140+ comments on flaky test tracking) while multiple correctness bugs affecting DeepSeek-V4, GLM models, and diffusion pipelines were reported.

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

## 3. New Model & Hardware Support

- **T-Head PPU Support**: A roadmap issue ([#37519](https://github.com/sgl-project/sglang/issues/37519)) outlines first-class support for T-Head SAIL (Zhenwu 810/810E/M890P) — a major expansion beyond NVIDIA/AMD/Intel backends.
- **Sensenova Loop Multimodal**: New PR ([#47281](https://github.com/sgl-project/sglang/pull/47281)) adds native text, image, and video inference for `sensenova_loop`, a Qwen3.5-derived model with shared-weight layer repetition and multi-stream hyper-connections.
- **AMD RDNA3/RDNA4**: Tracking issue ([#46900](https://github.com/sgl-project/sglang/issues/46900)) for CI and upstreaming plan on gfx1100/gfx1201.

## 4. Performance & Optimization

- **XPU Full Prefill Graph**: PR [#30980](https://github.com/sgl-project/sglang/pull/30980) adds XPU support for full prefill graph capture/replay, matching decode backend contracts.
- **XPU FP8 MoE**: PR [#43994](https://github.com/sgl-project/sglang/pull/43994) enables FP8 MoE dispatch via `sgl-kernel-xpu` Xe2 W8A16 grouped GEMM.
- **AMD DSA Optimization**: PR [#39085](https://github.com/sgl-project/sglang/pull/39085) reuses AITER prefill metadata across layers to eliminate redundant computation during EXTEND passes.
- **NPU Mixed-Chunk**: PR [#47367](https://github.com/sgl-project/sglang/pull/47367) enables mixed-chunk mode on Ascend DSA sparse attention path.
- **NPU Dynamic EPLB**: PR [#47266](https://github.com/sgl-project/sglang/pull/47266) enables dynamic expert load balancing on Ascend with NZ layout handling.
- **Detokenizer Efficiency**: PR [#47260](https://github.com/sgl-project/sglang/pull/47260) reduces per-step scheduler overhead by sending decode inputs once rather than duplicating per-emitted row.
- **NPU Attention Optimization**: PR [#40890](https://github.com/sgl-project/sglang/pull/40890) folds `attention_value_scale` into O_proj weights, eliminating ~2ms/layer per decode/verify step on MiMo-V2.5-Pro.

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | DeepSeek-V4 scheduler crashes when `items_offset_list` is `None` in multimodal embedding path ([#47218](https://github.com/sgl-project/sglang/issues/47218)) | OPEN |
| **High** | GLM-5.3-Flash on SM120 (RTX PRO 6000): FA4 attention crashes on hybrid extend, requires Triton backend ([#42012](https://github.com/sgl-project/sglang/issues/42012)) | OPEN |
| **Medium** | HiCache host-tier hits drop to zero when working set exceeds ~3 long prefixes ([#45400](https://github.com/sgl-project/sglang/issues/45400)) | OPEN |
| **Medium** | Diffusion: LingBot-Video-MoE crashes in text encoding under default layerwise offload ([#47297](https://github.com/sgl-project/sglang/issues/47297)) | OPEN |
| **Medium** | `/start_profile` with `profile_by_stage=true` crashes with TypeError ([#47294](https://github.com/sgl-project/sglang/issues/47294)) | OPEN |
| **Medium** | Python 3.13 requires Rust toolchain due to `outlines==0.1.11` pin ([#47242](https://github.com/sgl-project/sglang/issues/47242)) | OPEN |
| **Low** | Reasoning grammar gate fails when think-end marker splits under `split_special_tokens` ([#47205](https://github.com/sgl-project/sglang/issues/47205)) | OPEN |
| **Low** | LoRA adapter unload deadlocks after parallel-sampling traffic ([#36894](https://github.com/sgl-project/sglang/issues/36894)) | CLOSED/inactive |

**CI Stability**: Issue [#42752](https://github.com/sgl-project/sglang/issues/42752) tracks flaky tests and CI infrastructure failures — 140+ comments of ongoing investigation.

## 6. What This Means for Application Developers

- **New Backend Options**: If you're targeting T-Head hardware, the roadmap indicates future SGLang support — not yet usable but worth monitoring.
- **NPU Inference Improving**: Ascend users benefit from mixed-chunk and EPLB features; if running GLM-5.2/5.3 models, verify the Triton backend is enabled as FA4 has known issues on newer SM architectures.
- **XPU Gains Parity**: Intel XPU now supports full prefill graphs and FP8 MoE — production-worthy for Xe2 deployments.
- **Watch Your Python Version**: Python 3.13 users hit a hidden Rust dependency via `outlines` — consider pinning to 3.12 for now.
- **DeepSeek-V4 Users**: The multimodal offset crash ([#47218](https://github.com/sgl-project/sglang/issues/47218)) affects concurrent aborted streams — monitor logs closely if running DSV4.1-Flash in production with VLM pipelines.

---

*Generated from GitHub data for 2026-10-30*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data and create a structured digest for llama.cpp.

Key observations from the data:

**Releases (last 24h):**
- b11998: Mistral Le Chonk model support, DSA/sdpark extension
- b11997: Tensor staging buffer optimization
- b11988: Limite 1B model support (Violetto)
- b11986: OpenCL initial support for iq2
- b11985: Metal MXFP4 mat-vec optimization
- b11982: Hexagon UPSCALE op support
- b11981: Hexagon CONCAT optimization
- b11980: SYCL DPAS flash attention for quantized KV cache
- b11979: SYCL vectorized dequantization
- b11978: CUDA graph comp_padding fix

**Key Issues:**
1. #10982 (OPEN): Research on Metal vs Vulkan performance differences
2. #16393 (CLOSED): Tool to list/delete cached models feature
3. #27845 (CLOSED): Memory leak with -sm tensor on SYCL
4. #28196 (CLOSED): Qwen35 on RTX 5090 performance issues
5. #31029 (OPEN): SYCL bf conversion instruction not supported on Arrow Lake iGPU
6. #28384 (OPEN): SYCL test-backend-ops failures
7. #31272 (CLOSED): Metal bfloat cast issue on M2 Ultra
8. #31262 (OPEN): SYCL prompt processing regression
9. #31328 (CLOSED): LFM3 response_format grammar bug
10. #29002 (OPEN): Hybrid LFM2 co-batching state corruption

**Key PRs:**
- #31374: Fix reasoning budget with response_format for LFM3


- #31399: CPU flash attention with q8_0 KV cache
- #31378: Metal GET_ROWS_BACK kernel
- #31061: x86 quantized vec_dot unrolling
- #31398: CUDA hadamard fusion
- #31076: SYCL LevelZero PkgConfig
- #31286: moe-cache CPU share auto
- #31358: json-schema minLength/maxLength with pattern

I'll synthesize these updates into a concise, actionable digest that highlights the most significant technical developments and their potential impact on the project's ecosystem.</think>

# llama.cpp Digest — 2026-10-30

## 1. Today's Highlights

Today's release cycle brings significant backend optimizations across Metal, SYCL, and Hexagon, alongside new model architecture support including the Mistral Le Chonk and Limite 1B. The team continues addressing performance regressions in SYCL and investigating Metal/Vulkan cross-platform performance gaps.

## 2. Releases & Breaking Changes

| Commit | Description |
|--------|-------------|
| [b11998](https://github.com/ggml-org/llama.cpp/commit/b11998) | Mistral Le Chonk model support; DSA/sdpark architecture extension |
| [b11997](https://github.com/ggml-org/llama.cpp/commit/b11997) | Tensor staging buffer reuse; skip direct-io bounce buffer |
| [b11988](https://github.com/ggml-org/llama.cpp/commit/b11988) | Limite 1B (Violetto) model support |
| [b11978](https://github.com/ggml-org/llama.cpp/commit/b11978) | CUDA graph comp_padding fix (test fix only) |

No breaking API changes detected.

## 3. New Model & Hardware Support

- **Models**: Mistral Le Chonk, Limite 1B (Violetto), Gemma3N, Gemma4
- **Quantization**: OpenCL IQ2 initial support ([b11986](https://github.com/ggml-org/llama.cpp/commit/b11986))
- **Backends**:
  - Hexagon: UPSCALE op support ([b11982](https://github.com/ggml-org/llama.cpp/commit/b11982))
  - SYCL: DPAS flash attention for quantized KV cache (q4_0, q8_0) ([b11980](https://github.com/ggml-org/llama.cpp/commit/b11980))

## 4. Performance & Optimization

| Area | Change | Details |
|------|--------|---------|
| **Metal** | MXFP4 mat-vec | Full threadgroups for unary/binary/GLU; decode fp4 via fp16 bit trick ([b11985](https://github.com/ggml-org/llama.cpp/commit/b11985)) |
| **SYCL** | Quantized KV flash attention | DPAS kernel for q4_0/q8_0; decode + small batch (1-31 tokens) runs flash attention directly ([b11980](https://github.com/ggml-org/llama.cpp/commit/b11980)) |
| **SYCL** | Dequantization vectorization | Widened Q4_0, K-quants, IQ3, MXFP4 stores ([b11979](https://github.com/ggml-org/llama.cpp/commit/b11979)) |
| **Hexagon** | CONCAT DDR bandwidth | Double row block size; chunked src1 rows; vgather optimization ([b11981](https://github.com/ggml-org/llama.cpp/commit/b11981)) |
| **CPU (x86)** | Quantized vec_dot unrolling | Q4_0, Q4_K, Q5_K, IQ3_S, IQ3_XXS kernels unrolled ([PR #31061](https://github.com/ggml-org/llama.cpp/pull/31061)) |
| **OpenCL** | IQ2 support | AOS/SOA mv, tiled mm, dp4a for Adreno ([b11986](https://github.com/ggml-org/llama.cpp/commit/b11986)) |

**In Progress**:
- CPU flash attention with q8_0 KV cache tiled kernel ([PR #31399](https://github.com/ggml-org/llama.cpp/pull/31399))
- CUDA hadamard/rotation fusion for prism models ([PR #31398](https://github.com/ggml-org/llama.cpp/pull/31398))

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | LFM3 response_format + reasoning budget causes 500 error | Fixed | [PR #31374](https://github.com/ggml-org/llama.cpp/pull/31374) |
| **Medium** | SYCL prompt processing ~35% slower in b11804 vs b11046 with MoE | Open | — |
| **Medium** | SYCL XMX-ESIMD path ~35% slower for MoE prompt on Arc Pro B70 | Open | — |
| **Medium** | Metal bfloat constexpr cast error on M2 Ultra (macOS 14) | Closed | — |
| **Low** | JSON schema pattern with minLength/maxLength silently dropped | Open | [PR #31358](https://github.com/ggml-org/llama.cpp/pull/31358) |
| **Low** | Hybrid LFM2 co-batching corrupts recurrent state | Open | — |

## 6. What This Means for Application Developers

- **SYCL users on Intel GPUs**: Recent changes to flash attention and dequantization may provide measurable throughput improvements; monitor for the ~35% MoE regression on Arc Pro B70 if using MoE models.
- **Metal users**: The MXFP4 optimization should improve token generation latency on Apple Silicon; verify any custom kernel modifications remain compatible.
- **JSON schema users**: If using `response_format` with tools, watch [PR #31395](https://github.com/ggml-org/llama.cpp/pull/31395) for fixes to grammar conflicts.
- **Hybrid model users**: Co-batching with LFM2/LFM2.5 may produce incorrect outputs; run single-sequence decode until fixed.
- **llama-server operators**: The model cache management feature ([#16393](https://github.com/ggml-org/llama.cpp/issues/16393)) is now merged, providing a built-in way to list/delete cached models.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate an Ollama digest for 2026-10-30 based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Let me go through the issues and PRs:

**Latest Releases**: None in the last 24h

**Issues (19 total, key ones):**
1. #11609 - Feature request for Cross Platform GUI App (Flutter/Tauri)
2. #19385 - [CLOSED] Restore a Model to previous version
3. #17847 - ROCm backend on Strix Halo (gfx1151 iGPU) - KV state bleed across requests
4. #17380 - CUDA error: shared object initialization failed at warmup (Windows, RTX 5070 Ti)
5. #19262 - Does OLLAMA_NUM_PARALLEL=1 do anything? (bug, needs more info)
6. #15597 - `ollama ls` takes 5 seconds in interactive terminal (pselect6 timeout on stdout)
7. #19249 - claude code auto compress fails with deepseek-v4.1-flash
8. #19375 - [CLOSED] Error reading GGUF metadata on large MoE model with MXFP4 format
9. #19353 - qwen3.8:27b-mlx tool_calls issue
10. #18869 - [CLOSED] ffn_down_exps.weight size overflows
11. #19295 - Feature request: Add Korean language support for TTS (phonon)
12. #19390 - Feature request: video support
13. #19388 - Feature request: ternary bonsai 2
14. #19380 - OpenAI compat: assistant reasoning dropped when content is array


15. #19377 - go_template drops whole assistant turn for qwen3 tool calls
16. #19396 - Feature request: streamed native audio answers from LFM3-Omni
17. #19383 - Feature request: Option to choose default startup tab
18. #19381 - OpenAI compat: /v1/models returns null instead of []
19. #19378 - /api/chat silently ignores the audio field

**Pull Requests (26 total, key ones):**
1. #19392 [CLOSED] mlx: sort long top-k rows in chunks
2. #17857 [OPEN] llm: fix llama

-server memory accounting for multi-model loads
3. #19391 [OPEN] mlxrunner: support draft_num_predict=0 to disable drafting
4. #19398 [OPEN] mlxrunner: abort generation when a token repeats past the limit
5. #17834 [OPEN] mlxrunner: implement load progress reporting and stall detection
6. #19397 [OPEN] server: reject clips the model has no encoder for
7. #19197 [OPEN] mlx: support concurrent generation
8. #19334 [OPEN] fix: proper media ordering in Embedding for multimodal models like Gemma 4
9. #19395 [OPEN] README: add Clairvoyance to community integrations
10. #19394 [OPEN] README: add RedAmon to community integrations
11. #19336 [OPEN] app: make ChatGPT disconnect failures retryable
12. #19393 [OPEN] llm: don't count CPU-resident input tensors in VRAM

I need to organize these by category and prepare the final output. The PR list continues with several MLX improvements focused on memory management and generation control, along with integration updates and bug fixes for multimodal embeddings and VRAM handling.</think>

# Ollama Digest — 2026-10-30

## Today's Highlights

The Ollama ecosystem sees active work on multi-backend improvements — MLX gains concurrent generation support and better memory accounting, while several OpenAI compatibility issues (reasoning preservation, empty array responses) are being addressed. A notable ROCm KV-cache contamination bug on AMD Strix Halo iGPUs and a 5-second timeout issue in interactive terminals warrant attention from users on those platforms.

---

## Releases & Breaking Changes

- **No new releases** in the last 24 hours.

---

## New Model & Hardware Support

| Topic | Description | Link |
|-------|-------------|------|
| **TTS Phonon multilingual** | Feature request to add Korean language support to the `phonon:40m-multilingual` model | [#19295](https://github.com/ollama/ollama/issues/19295) |
| **Ternary quantization** | Request for Bonsai 2 ternary quantization support | [#19388](https://github.com/ollama/ollama/issues/19388) |
| **Native video I/O** | Feature request for native audio and video input/output on Windows (for LFM3-Omni, phonon) | [#19390](https://github.com/ollama/ollama/issues/19390) |
| **Streamed audio from LFM3-Omni** | Proposal for native text-to-audio streaming via `/api/chat` and `ollama run --audio` | [#19396](https://github.com/ollama/ollama/issues/19396) |

---

## Performance & Optimization

| Area | Change | PR |
|------|--------|-----|
| **MLX concurrent generation** | Added support for multiple parallel requests via `OLLAMA_NUM_PARALLEL` on MLX backend | [#19197](https://github.com/ollama/ollama/pull/19197) |
| **MLX top-k sorting** | Chunked sorting for long top-k rows (>2048 values), reducing multi-pass merge sort overhead on Metal | [#19392](https://github.com/ollama/ollama/pull/19392) |
| **MLX draft control** | Added `draft_num_predict=0` to disable speculative decoding for benchmarking | [#19391](https://github.com/ollama/ollama/pull/19391) |
| **MLX repeat limit** | Abort generation after 101 identical tokens to prevent infinite streaming loops | [#19398](https://github.com/ollama/ollama/pull/19398) |
| **MLX load progress** | Implemented progress reporting and stall detection for long model loads | [#17834](https://github.com/ollama/ollama/pull/17834) |
| **VRAM prediction fix** | CPU-resident input tensors no longer counted in VRAM estimates, improving memory scheduling accuracy | [#19393](https://github.com/ollama/ollama/pull/19393) |
| **Multi-model memory accounting** | Fixed memory accounting for speculative draft models and hybrid-attention models in multi-model scenarios | [#17857](https://github.com/ollama/ollama/pull/17857) |
| **CPU-only runner protection** | Never evict CPU-only runners to satisfy GPU memory predictions | [#19284](https://github.com/ollama/ollama/pull/19284) |
| **Embedding media ordering** | Fixed multimodal embedding for Gemma 4 — media tokens now interleaved at correct positions | [#19334](https://github.com/ollama/ollama/pull/19334) |

---

## Stability & Regressions

| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| **High** | **ROCm KV-cache bleed** — On AMD Strix Halo iGPU (gfx1151), responses are contaminated by previous request content in sequential calls | Open | [#17847](https://github.com/ollama/ollama/issues/17847) |
| **High** | **5-second `ollama ls` delay** — `pselect6` timeout on stdout causes 5s delay in interactive terminals, ~14ms when piped | Open | [#15597](https://github.com/ollama/ollama/issues/15597) |
| **Medium** | **CUDA warmup failure** — Intermittent "shared object initialization failed" with silent CPU buffer fallback on Windows RTX 5070 Ti | Open | [#17380](https://github.com/ollama/ollama/issues/17380) |
| **Medium** | **Model rollback** — No UI mechanism to restore a model to a previous version after update | Open | [#19385](https://github.com/ollama/ollama/issues/19385) |
| **Medium** | **MXFP4 GGUF overflow** — Large MoE models with MXFP4 format fail with `ffn_down_exps.weight size overflows` | Closed (fixed in recent releases) | [#19375](https://github.com/ollama/ollama/issues/19375), [#18869](https://github.com/ollama/ollama/issues/18869) |
| **Medium** | **Tool call regression** — `go_template` silently drops assistant turns for Qwen3 tool calls; `llama.cpp` template works correctly | Open | [#19377](https://github.com/ollama/ollama/issues/19377) |
| **Medium** | **MLX tool_calls bug** — Qwen3 MLX models only emit tool_calls when `content` is empty | Open | [#19353](https://github.com/ollama/ollama/issues/19353) |
| **Low** | **OLLAMA_NUM_PARALLEL ignored** — Setting `OLLAMA_NUM_PARALLEL=1` doesn't prevent parallel sessions | Open (needs info) | [#19262](https://github.com/ollama/ollama/issues/19262) |

---

## What This Means for Application Developers

1. **MLX backend is maturing** — Concurrent generation, draft control, and load progress reporting make MLX more viable for production Apple Silicon deployments. If you're running on M-series Macs, the new parallelism options can reduce first-token latency under load.

2. **OpenAI compatibility layer is being hardened** — Several PRs address edge cases: empty embedding arrays now return `[]` instead of `null` (#19387), reasoning is preserved in content arrays (#19384), and invalid content types with tool calls are now rejected with errors (#19389). If you use LangChain, LiteLLM, or OpenAI SDK wrappers, these fixes reduce silent data loss.

3. **Memory scheduling is more accurate** — The VRAM prediction fix (#19393) and CPU-runner protection (#19284) should reduce spurious evictions on multi-GPU and hybrid CPU/GPU setups. If you've experienced unexpected model unloading, this may be resolved.

4. **Watch for the ROCm bug** — If running on AMD Strix Halo iGPUs, be aware that request isolation is currently broken; responses may bleed between sessions. Avoid sensitive workloads on that configuration until fixed.

5. **Audio field is silently ignored** — The `/api/chat` endpoint currently drops the `audio` field without error for multimodal models (#19378); use the `images` field as a workaround for now. A fix is in progress (#19397).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-10-30 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me go through the key information:

**Latest Releases:**
- v1.108.0-rc.1 - Release candidate with cosign verification for Docker images

**Latest Issues (by comment count):**
1. #16021 - OpenRouter cost information lost in streaming responses (18 comments)
2. #24498 - Claude models return empty message content sanitized (12 comments)
3. #25869 - stream_chunk_builder corrupts Gemini server_side_tool_invocations (9 comments)
4. #22159 - litellm calling HTTP GET on module import (7 comments)
5. #25372 - Feature: Support Azure AI Foundry Agents v2 (7 comments)
6. #41544 - Bedrock audio transcription fails with HTTP 400 (7 comments)
7. #27439 - DeepSeek V4 reasoning_effort not passed through (6 comments)
8. #18457 - Child process died error (6 comments)
9. #19858 - Claude models with tool calling broken (6 comments)
10. #24680 - Valid API key not accepted (5 comments)

**Latest Pull Requests:**
- #48592 - Refactor: inject deployment warning ignores through repositories
- #48507 - Refactor: inject database repositories through per-repository dependencies
- #49116 - Refactor: inject gateway activity through a typed repository
- #45715 - Fix: batch Claude models in Vertex AI
- #48080 - Fix: enforce LiteAdmin MCP route permissions (CLOSED)
- #48335 - Feature: Z.AI support response_format and max_completion_tokens


- #39324 - Feature: add CLF AI Gateway provider
- #49054 - Fix: cap OTPM reservation and reconcile token counters
- #46707 - Refactor: cross-API bridges call native executors
- #49166 - Perf: stop raising caught AttributeErrors in pydantic
- #49060 - Fix: health probe only models a partial wildcard serves
- #35600 - Feature: support latest OpenAI audio models
- #49167 - Fix: backport MCP token admission
- #49162 - Refactor: Redis store layer

I'll continue analyzing the additional pull requests to extract the most significant updates. The PRs cover multiple areas including provider integrations, performance optimizations, and infrastructure improvements. Key themes include enhancing AI model support, refining routing mechanisms, and strengthening security and performance aspects of the LiteLLM platform.

The performance improvements are particularly interesting. The pydantic optimization eliminates unnecessary exception handling during streaming, which could significantly reduce computational overhead. The Redis infrastructure refactoring suggests a more robust approach to managing real-time streaming and response polling.

New model support expands the platform's flexibility, with OpenAI audio models and Z.AI integrations adding more depth to the system's capabilities. The Azure AI Foundry Agents v2 support indicates continued enterprise-focused development.</think>

# LiteLLM Daily Digest — 2026-10-30

## Today's Highlights

LiteLLM v1.108.0-rc.1 is out with verified Docker images via cosign. Performance work landed to eliminate spurious AttributeErrors in pydantic during streaming, while multiple issues around cost tracking in streaming responses remain active — including OpenRouter cost loss and zero-cost logging bugs affecting spend/budget calculations.

---

## Releases & Breaking Changes

| Version | Notes |
|---------|-------|
| **v1.108.0-rc.1** | Release candidate with Docker image signature verification via cosign (key: `e82a3c6`). |

- **Breaking:** PR #35600 changes per-second transcription billing — models like Deepgram, Groq Whisper, and Vertex Chirp now bill per second instead of $0.006/minute. Ensure cost dashboards account for this if you use these providers.
- **Breaking:** PR #49167 backports MCP token admission fix to rc/1.108.0; updates ddtrace from 4.11.0 to 4.15.6 in dependencies.

---

## New Model & Hardware Support

| Feature | PR | Details |
|---------|-----|---------|
| **Azure AI Foundry Agents v2** | #25372 | Support for Responses API with `agent_reference` — agents referenced by name/version. |
| **Z.AI models** | #48335 | Added `response_format` and `max_completion_tokens` support; GLM-5V-Turbo pricing added. |
| **CLF AI Gateway** | #39324 | New OpenAI-compatible provider with 10 open-weight models. |
| **Kimi K3, Inkling, Tinker** | #33921 | Feature request filed for native support (Moonshot AI, Thinking Machines Lab platforms). |
| **Soniox STT-RT-V5** | #43677 | Feature request for real-time streaming STT (WebSocket). |
| **Vertex AI Claude batching** | #45715 | Claude models on Vertex now use Anthropic's native row shape for batch inference. |

---

## Performance & Optimization

| PR | Area | Change |
|----|------|--------|
| **#49166** | Streaming | **Stop raising caught AttributeErrors in pydantic on every chunk** — Each streamed chunk from OpenAI/Azure was throwing/catching ~12 Python exceptions inside pydantic due to slow-path field writes. This is pure CPU overhead eliminated. |
| **#49054** | Router | Cap OTPM reservation to 1/4 of otpm (or deployment cap) when no `max_tokens` specified; reconcile token counters after each call to prevent 429s on high-max-output models. |
| **#47484** | Least-busy routing | Reserve picked deployment immediately so burst requests spread across deployments instead of piling on one. |
| **#46707** | Cross-API bridges | Refactored to call native executors instead of re-entering `acompletion`/`aresponses`, reducing hook/retries duplication. |

---

## Stability & Regressions

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| **#16021** OpenRouter cost lost in streaming | High | Open | 18 comments. Cost in `usage.cost` not preserved in streaming — works in non-streaming. |
| **#48937** Streamed completions logged at $0 when upstream reports `usage.cost: 0` | High | Open | Spend/budget reads $0 for all streaming traffic even when real cost reported elsewhere. |
| **#47533** provider-reported `usage.cost` ignored on non-streaming calls | High | Open | OpenAI-compatible upstreams with cost cause $0 spend recorded. |
| **#35829** Phantom spend from unvalidated cost units | Medium | Closed | Non-USD-denominated cost values caused astronomical phantom spend; now validates units. |
| **#25869** `stream_chunk_builder` corrupts Gemini `server_side_tool_invocations` | Medium | Open | Causes "Corrupted tool call context" on follow-up turns with Gemini + streaming + tools. |
| **#22159** HTTP GET on module import | Medium | Closed | Lazy initialization now available — avoids slow import-time network calls. |
| **#34805** In-memory spend buffers dropped on proxy shutdown | Medium | Open | `update_spend` data silently lost on shutdown without Redis. |
| **#38180** n>1 streamed requests logged as one merged completion | Medium | Closed | Multiple completions in stream now correctly separated in logs. |

**Fixes merged:**
- #48080 — LiteAdmin MCP route permissions now enforced
- #31610 — Redis semantic cache fixed (regression from #6954)

---

## What This Means for Application Developers

1. **Cost tracking in streaming is unreliable.** If you rely on LiteLLM's built-in cost tracking for streaming requests (OpenRouter, OpenAI-compatible gateways), expect $0 or incorrect values. This affects budget enforcement. Track costs at the application layer until #16021/#48937 are resolved.

2. **Docker image verification available.** Use cosign to verify LiteLLM images before deployment:
   ```bash
   cosign verify --key <pubkey> ghcr.io/berriai/litellm:v1.108.0-rc.1
   ```

3. **Least-busy routing improvement.** If using `routing_strategy: least_busy`, burst requests now distribute better — less contention under high concurrency.

4. **Per-second STT billing changed.** If you use Deepgram/Groq Whisper/Vertex Chirp via LiteLLM, cost calculations in your dashboards need updating — they now bill per second, not per minute.

5. **Azure AI Foundry v2 agents supported.** If you deploy Microsoft Foundry Agents, you can now route through LiteLLM with `agent_reference` support.

6. **Claude tool calling may be broken** (#19858, #24498). If using Claude via OpenRouter/Vertex with tools, verify responses — empty content or sanitized messages reported.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the GitHub data for Unsloth and create a structured digest for 2026-10-30.

Let me organize the information:

**Releases:**
- No releases in the last 24h

**Key Issues (by comments):**
1. #14411 - Core dumps after model updates (6 comments, CLOSED)
2. #14987 - MiniCPM-V-4.7-1B Vulkan backend text generation failure (6 comments, CLOSED)
3. #15800 - Context doesn't compact in long conversations (4 comments, OPEN)
4. #15588 - Feature request for LFM3-1.7B support (4 comments, OPEN)
5. Various desktop app issues with UI, model loading, etc.

**Key PRs:**
1. #16046 - Windows AMD GGUF commit warning
2. #15857 - Hybrid token count fix
3. #16041 - Gemma 3 flex attention fix
4. #16049 - Flex attention small tiles fix
5. #15810 - Voice context config for Qwen3-ASR
6. #15941 - Flows Benchmark node
7. #15609 - Flows uses Studio components
8. #15608 - Flows bus-lane wires
9. #16048 - Stop offering broken VibeVoice GGUF
10. #15604 - Data Recipes inside Flows
11. #15611 - Flows Train node
12. #16021 - MLX memory estimate fix
13. #15958 - UI tidying
14. #14039 - AMD iGPU exclusion
15. #10876 - Multiple resident GGUF models (CLOSED)
16. #7115 - EXL3 quantization backend


17. #16047 - Download specific commit
18. #16044 - Managed accounts local MCP
19. #16032 - Fused batch-1 NF4 decode
20. #16035 - Don't hand agents cut-off tool calls

Now I'll create the digest sections:

**1. Today's Highlights**
Focus on the most impactful changes: flex attention improvements for Gemma 3, the new EXL3 quantization backend with multi-bit and MoE support, multiple resident GGUF models now working, and the warning system for Windows AMD GPU memory constraints.

**2. Releases & Breaking Changes**
No releases in the last 24 hours.

**3. New Model & Hardware Support**
LFM3-1.7B support is being requested. Added EXL3 backend with 2/3/4/6/8-bit and MoE capabilities. Now supporting multiple resident GGUF models simultaneously. Improvements to Gemma 3 flex attention path and fixes for Gemma 2 9B training. Also addressing LFM3 MLX model display issues and VibeVoice GGUF loading problems.

**4. Performance & Optimization**
Flex attention optimizations for Gemma 3 with small shared memory tiles on L4, A10, RTX 3090/4090, and L40S cards. Added configurable voice context to lower Qwen3-ASR memory usage. MLX memory estimates now properly account for attention scores.

Fused batch-1 NF4 decode for Llama provides 1.6-2.3x per token improvement with UNSLOTH_DECODE_FUSED_NF4=1. Windows AMD systems now warn about potential commit issues. Token counting uses hybrid approach with dense estimates and scaled timeouts. Chat cards have been shortened for better UI performance.

**5. Stability & Regressions**
Several critical issues are being addressed: core dumps after recent model updates, text generation failures on MiniCPM-V with Vulkan, context not compacting in long conversations, and Windows AMD systems holding 16GB commit after GGUF loading despite system RAM settings. MLX memory estimation is also being fixed.

**6. What This Means for Application Developers**
The EXL3 backend adds flexibility with new quantization options and MoE support. Developers can now run multiple GGUF models at once. Performance gains from fused NF4 decoding are significant for 4-bit Llama models, while the new voice context setting helps reduce memory consumption for ASR workloads. Tool call handling has improved to prevent truncated responses.</think>

# Unsloth Digest — 2026-10-30

## Today's Highlights

Major performance work landed around Gemma 3's flex attention path, with two PRs addressing shared memory tile configurations for short prompts on L4/A10/RTX 3090/4090/L40S class GPUs. The EXL3 (ExLlamaV3) quantization backend PR (#7115) continues advancing, adding 2/3/4/6/8-bit and MoE support as an alternative to bitsandbytes. Multiple resident GGUF models support has landed (#10876), enabling parallel GGUF model hosting in separate llama-server processes.

---

## Releases & Breaking Changes

No releases published in the last 24 hours.

---

## New Model & Hardware Support

- **LFM3-1.7B support requested** — New Liquid AI LFM3 family with expressive backbone (#15588) | 👍 10
- **EXL3 quantization backend** — Adds 2/3/4/6/8-bit and fractional bitrates; supports MoE models which bitsandbytes cannot handle under transformers 5 (#7115)
- **Multiple resident GGUF models** — Studio can now keep multiple distinct GGUF models resident, each in its own llama-server process (#10876) | CLOSED
- **MiniCPM-V-4.7-1B Vulkan** — Bug fix for text generation failure (#14987) | CLOSED
- **VibeVoice GGUF loading** — Removed q4-ios variant that audio.cpp cannot load (#16048)

---

## Performance & Optimization

- **Gemma 3 flex attention** — Short prompts (17-127 tokens) now use compiled flex attention instead of falling back to eager math_attention on sm86/sm89 cards (#16041, #16049)
- **Fused NF4 decode** — Opt-in via `UNSLOTH_DECODE_FUSED_NF4=1` yields 1.6-2.3x per-token speedup for 4-bit Llama models at batch size 1 (#16032)
- **Qwen3-ASR memory reduction** — New "Voice context" setting (Auto, 1K-64K) reduces memory from ~8.7 GiB to ~2.0 GiB for typical recordings (#15810)
- **MLX memory estimator fix** — Now properly prices attention scores at full width even when KV cache is quantized (#16021)
- **Hybrid token counting** — Dense estimate guard + scaled read timeout for large chat transcripts (#15857)

---

## Stability & Regressions

- **Core dumps after recent updates** — Models stop responding after few turns; ejecting triggers core dump. Investigation ongoing (#14411) | CLOSED
- **Context compaction failure** — Long conversations stop compacting, causing "Message too long" errors after ~2 min timeout (#15800) | Fix in #15857
- **Windows AMD commit charge** — llama-server holds ~16 GB commit on 32 GB machines even with GGUF in VRAM, exhausting page file (#16015) | Fix PR #16046
- **MLX memory overestimation** — Reports 69.7 GiB for models that load on 24 GB Mac (#15935)

---

## What This Means for Application Developers

1. **Multi-model GGUF serving** — Apps can now run multiple GGUF models concurrently, each in its own process, enabling model hot-swap without reloads.

2. **EXL3 quantization coming** — Will provide finer-grained quantization control (2-8 bit + fractional) and MoE support, useful for memory-constrained deployments.

3. **4-bit Llama decode speedup** — Setting `UNSLOTH_DECODE_FUSED_NF4=1` nearly doubles throughput for batch-1 inference; evaluate accuracy before production use.

4. **Memory budgeting on Apple Silicon** — MLX memory estimates now account for attention score storage; re-validate your VRAM budgets if previously relying on old estimates.

5. **Voice input memory** — If using Qwen3-ASR, the new voice context setting can cut ASR memory by >75% for short recordings.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*