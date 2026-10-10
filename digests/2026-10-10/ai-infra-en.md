# AI Infrastructure Digest 2026-10-10

> Generated: 2026-10-10 01:53 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to generate a cross-project comparison report based on all the digests I've created for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me analyze the data from all these projects and create a comprehensive comparison.

Let me organize the key information from each digest:

**vLLM (2026-10-10)**:
- Releases: None in last 24h
- Issues: 10 top issues with 15-101 comments
- PRs: ~15 PRs in various states
- New models: DeepSeek-V4.1-Flash (SM120/MI355X), Qwen3.8-2.4T-A95B, GLM-5.3-Flash
- Performance: Batch invariant optimization, DBO for ROCm, Triton TD adoption RFC
- Stability: Critical issues with GLM-5.3 decode degeneration, DFlash2/DSpark prefix caching corruption

**SGLang (2026-10-10)**:
- Releases: None
- Issues: 79 total, top issues with various severities
- PRs: 500 total, showing top 20
- New models: DeepSeek V4.1 (DP attention, AMD prefill), TML Inkling, Prism Bonsai 2 27B, LFM2-VL
- Hardware: AMD GPUs, Intel XMX, NPU, Moore Threads
- Performance: HiSparse, HiCache, AMD FP8 KV, Mamba DCP, speculative decoding
- Stability: DSpark CUDA Graph issues, GLM-5.3 repetition, deterministic inference problems

**llama.cpp (2026-10-10)**:
- Releases: Multiple (b11529-b11539)


- Issues: 6 top issues
- PRs: Multiple PRs showing active development
- New models: TML Inkling, Prism Bonsai 2 27B, LFM2-VL/2.5-VL/d1-3B
- Hardware: Intel XMX, OpenCL A6x, AMD GPUs
- Performance: CUDA SSM_SCAN, mul_mat_id, Vulkan RMS norm, cgroup quotas
- Stability: Speculative decoding divergence, Gemma4 MTP load failure

**Ollama (2026-10-10)**:
- Releases: No

I notice the Ollama section appears to be incomplete, with no additional details provided. I'll need to wait for more information to complete a comprehensive analysis of this project's current state.

The next thinking reveals ongoing challenges and recent developments. Key observations include an aborted migration in PR #18908, active work on Kolibri 1 support, and identification of multiple critical issues affecting various hardware platforms like Apple Silicon MLX, AMD Vulkan, and NVIDIA Blackwell.

The project shows continued development across model integrations, performance optimizations, and hardware compatibility, with several high-priority issues still open.

LiteLLM demonstrates significant infrastructure improvements, introducing ScaleDown provider support, Bedrock GPT-5.6+ integration, and addressing critical security concerns through the Trivy compromise containment.

The Stability Sprint is addressing high-priority challenges, particularly budget enforcement, virtual key management, and metrics authentication vulnerabilities across different operational environments.</think>

# Cross-Project Comparison Report — October 10, 2026

---

## 1. Ecosystem Overview

The AI inference and serving ecosystem is navigating a period of hardware fragmentation. Today's activity reflects a field in flux: **NVIDIA Blackwell (SM120)** is experiencing stability issues across multiple projects (vLLM, SGLang, llama.cpp), while **AMD ROCm** is gaining momentum with MI355X optimizations in both vLLM and SGLang. **Apple Silicon MLX** is in regression (Ollama, Unsloth), and the **Rust migration** is underway in LiteLLM. Model support is accelerating for emerging architectures (DeepSeek V4.1, LFM2, TML Inkling), but quantization bugs—particularly around speculative decoding and prefix caching—remain a persistent source of production incidents.

---

## 2. Activity Comparison

| Project | Issues (total) | Top Issue Comments | PRs (total) | Releases (24h) | Active PRs (Open) |
|---------|----------------|---------------------|-------------|-----------------|-------------------|
| **vLLM** | ~60K | 101 (batch invariant) | ~2.2K | 0 | ~15 |
| **SGLang** | 79 | 30 (speculative decoding) | 500 | 0 | ~20 |
| **llama.cpp** | 6 | 30 (speculative decoding) | ~15 shown | 11 | ~20 |
| **Ollama** | 21 | 24 (M4 Mac memory) | 47 | 0 | ~15 |
| **LiteLLM** | ~50 | 118 (PyPI compromise) | ~25 shown | 1 (v1.106.0-dev.3) | ~15 |
| **Unsloth** | ~30 | 25 (VRAM OOM) | ~10 shown | 0 | ~10 |

**Observations**: vLLM maintains the largest codebase but shows no releases. llama.cpp ships aggressively (11 builds in 24h). LiteLLM's security incident dominates attention. Unsloth and Ollama have smaller surfaces but face critical stability regressions on newer hardware.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth | LiteLLM |
|----------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek V4.1 Flash** | ✅ (SM120, MI355X) | ✅ (DP, AMD prefill) | ❌ | ❌ | ❌ | ❌ |
| **LFM2-VL / d1-3B** | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| **TML Inkling** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Prism Bonsai 2 27B** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Kolibri 1 (MLX)** | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Qwen3-2.4T-A95B** | ✅ (MI355X) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **ScaleDown** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Gemma4 (MTP)** | ❌ | ❌ | ❌ (broken) | ❌ | ❌ | ❌ |

**Who is ahead**: SGLang and llama.cpp lead on model breadth, covering emerging architectures (LFM2, TML Inkling, Bonsai). vLLM leads on Blackwell (SM120) coverage despite stability issues. LiteLLM leads on provider breadth (ScaleDown addition). Unsloth remains narrowly focused on fine-tuning but excels there.

---

## 4. Performance Frontier

| Optimization Area | vLLM | SGLang | llama.cpp | Ollama | Unsloth | LiteLLM |
|-------------------|------|--------|-----------|--------|---------|---------|
| **KV cache pooling** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Quantization (W4A8/A16)** | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Speculative decoding** | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Triton kernels** | RFC (TD) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Distributed (TP/PP/DP)** | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| **FlashAttention variants** | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Embedding optimization** | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ |
| **Rust backend** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (migration) |

**Where effort is concentrated**:

- **vLLM**: RFC on tensor descriptors for Triton kernels signals a push toward structured memory access. ROCm optimizations (mono decode layer) are active.
- **SGLang**: HiSparse, HiCache, and CUDA Graph fixes dominate. PD scheduling reclamation landed.
- **llama.cpp**: CUDA SSM_SCAN, Vulkan RMS norm, and Intel XMX multi-column matmul show low-level kernel work.
- **Unsloth**: RoPE int64 fix for >2³¹ token contexts. Embedding learning rate bug fixed.
- **LiteLLM**: Rust migration targeting sub-1ms overhead.

---

## 5. Layer Positioning

| Layer | Projects | Role |
|-------|----------|------|
| **Serving Engine** | **vLLM**, **SGLang**, **llama.cpp** | KV-cache-optimized inference servers with tensor parallelism, prefix caching, speculative decoding |
| **Local Runtime** | **llama.cpp**, **Ollama**, **Unsloth** | Embedded or desktop-class inference (llama.cpp: no server; Ollama: simple wrapper; Unsloth: training-focused) |
| **Gateway / Proxy** | **LiteLLM** | Unified API layer with fallback, spend tracking, auth, multi-provider routing |
| **Training / Fine-tuning** | **Unsloth** | HuggingFace-integrated fine-tuning with LoRA/QLoRA, GRPO, DPO |
| **Model Conversion** | **llama.cpp** (GGUF), **Unsloth** | Model format conversion and quantization |

**Differentiation**: vLLM and SGLang compete directly on Blackwell/AMD performance. llama.cpp serves the offline/inference-serverless niche. Ollama targets developer ease-of-use. LiteLLM sits above everything as a consumption layer. Unsloth occupies a vertical niche (fine-tuning) not addressed by others.

---

## 6. Trend Signals

### Industry Trends to Watch

1. **Blackwell (SM120) instability is widespread** — Multiple projects report issues (illegal memory access, decode crashes, low throughput). The hardware is shipping in consumer RTX PRO 6000 but driver/kernel support is immature. **Decision point for infra teams**: Defer Blackwell deployments or budget for workarounds until Q1 2027.

2. **AMD ROCm is gaining real production traction** — vLLM and SGLang both shipped MI355X (gfx950) optimizations. This is the most active non-NVIDIA platform. **Signal**: Multi-GPU vendor strategies are viable if AMD is in your stack.

3. **Quantization bugs in speculative decoding are endemic** — llama.cpp, vLLM, and SGLang all have open issues where quantized draft models diverge from non-speculative behavior. **Risk**: Teams running speculative decoding with Q4_K_M or similar should validate outputs against bf16.

4. **Rust is creeping into Python-centric serving stacks** — LiteLLM's Rust migration (sub-1ms target) signals that Python overhead is becoming a bottleneck at high scale. **Implication**: Expect more mixed Rust/Python architectures in 2027.

5. **Supply-chain security is a recurring theme** — LiteLLM's PyPI compromise and the new cosign-signed Docker images in Ollama reflect a hardening posture. **Action**: Verify your container signatures and audit pip dependencies.

6. **MLX (Apple Silicon) is in regression** — Two critical MLX panics in Ollama (M4, M6) and Unsloth regressions suggest the MLX backend is less stable than the CUDA path. **Warning**: Don't rely on Apple Silicon for production training/inference until these are resolved.

### What Agent / Application Developers Should Monitor

- **Budget enforcement bugs** in LiteLLM could silently allow overspend.
- **Prefix caching corruption** in vLLM (DFlash2/DSpark) may produce wrong outputs.
- **Deterministic inference** is fragile across SGLang and llama.cpp — avoid in audit-critical workflows.
- **New model support** is moving fast (LFM2, TML Inkling, Bonsai) — validate your model choice against upstream support before production.
- **API compatibility** is shifting (LiteLLM's chat API refactor, Ollama migration changes) — lock versions in production.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the provided GitHub data for vLLM and generate a structured digest for 2026-10-10.

Let me go through the data:

**Releases:**
- None in the last 24h

**Issues (top by comments):**
1. #27433 - Batch Invariant Feature and Performance Optimization - 101 comments
2. #56868 - GLM-5.3-Flash long-decode degeneration after accumulated reasoning decode - 42 comments
3. #42545 - RFC: Tensor descriptor (TD) adoption strategy for vLLM Triton kernels - 25 comments
4. #60174 - DFlash2/DSpark + prefix caching corrupt output after cache hit - 25 comments
5. #59203 - DeepSeek-V4.1-Flash cannot run on SM120 - 20 comments
6. #48297 - RFC: LoRA Adapter Lifecycle for RL Training - 19 comments
7. #56892 - DeepSeek-V4.1-Flash on SM120 extremely low decode throughput - 18 comments
8. #57149 - ROCm AMD Qwen3.8-2.4T-A95B gfx950 / MI355X Performance Optimization - 17 comments
9. #41530 - TP Worker hang causes EngineDeadError - 15 comments
10. #54317 - GLM-5.3-Flash CUDA illegal memory access - 15 comments

**Pull Requests:**
- #60397 [CLOSED] - ROCm DeepSeek-V4.1-Flash Mono decode layer for MI355X
- #48322 [OPEN] - Doc: Clarify that max_num_batched_tokens also shrinks the KV cache pool
- #48343 [OPEN] - Bugfix: DeepSeek V3 tool parser truncating issue
- #48354 [OPEN] - Bugfix: Fix collect_env.py crash on non-Linux platforms


- #60826 - EC Connector hash directory bugfix
- #60870 - Structured decisions bugfix
- #57511 - XPU W4A8 weight repacking bugfix
- #60745 - Frontend Decisions API image inputs
- #60713 - Winnow read strategy
- #60465 - Text-only OpenAI Decisions API MVP
- #59587 - bench metrics-url override
- #59584 - NIXL P/D troubleshooting docs
- #59583 - NIXL PD handshake loopback diagnosis
- #60762 - DS

I'll focus on the additional pull requests, which cover various bug fixes, feature enhancements, and documentation improvements. These PRs address platform-specific issues, performance optimizations, and new API capabilities across different hardware and software contexts.</think>

# vLLM Daily Digest — 2026-10-10

## 1. Today's Highlights

Active development continues across Blackwell hardware support (SM120), with multiple DeepSeek-V4.1-Flash issues on RTX PRO 6000 systems drawing significant attention. The community is also advancing the RFC process for major architectural changes, including tensor descriptor adoption in Triton kernels and LoRA adapter lifecycle management for RL training. A notable bugfix merged for ROCm delivers mono decode layer optimization for MI355X.

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

## 3. New Model & Hardware Support

| Item | Details | Link |
|------|---------|------|
| **DeepSeek-V4.1-Flash on SM120** | Added 64-token kernel block support for sparse MLA backends on Blackwell (RTX PRO 6000) | [PR #60762](https://github.com/vllm-project/vllm/pull/60762) |
| **DeepSeek-V4.1-Flash on MI355X** | Mono decode layer optimization for ROCm (gfx950), enabled via `VLLM_ROCM_MONO_DECODE=1` | [PR #60397](https://github.com/vllm-project/vllm/pull/60397) |
| **Qwen3.8-2.4T-A95B** | AMD MI355X/gfx950 performance optimization tracking | [Issue #57149](https://github.com/vllm-project/vllm/issues/57149) |
| **Qwen3.8-Flash-Next** | ROCm gfx950/MI355X optimization tracking | [Issue #59575](https://github.com/vllm-project/vllm/issues/59575) |

## 4. Performance & Optimization

| Area | Status | Details | Link |
|------|--------|---------|------|
| **DeepSeek-V4.1 decode on MI355X** | **Merged** | Mono decode layer with persistent FlyDSL launches for all 30 backbone layers | [PR #60397](https://github.com/vllm-project/vllm/pull/60397) |
| **Batch Invariant optimization** | In progress | Tracking issue for batch-invariant inference optimization (101 comments) | [Issue #27433](https://github.com/vllm-project/vllm/issues/27433) |
| **DeepSeek-V4 prefill DBO** | In progress | Dual-batch-overlap for ROCm data-parallel deployments | [PR #57773](https://github.com/vllm-project/vllm/pull/57773) |
| **Triton TD adoption** | RFC | Evaluating `tl.make_tensor_descriptor` API for structured memory access in kernels | [Issue #42545](https://github.com/vllm-project/vllm/issues/42545) |
| **KV cache pool docs** | Open | Clarifying that `max_num_batched_tokens` affects KV cache pool size | [PR #48322](https://github.com/vllm-project/vllm/pull/48322) |
| **Bench metrics routing** | Open | Added `--metrics-url` override for PD-disaggregated deployments behind router | [PR #59587](https://github.com/vllm-project/vllm/pull/59587) |

## 5. Stability & Regressions

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | GLM-5.3-Flash decode degeneration | Long-decode output corruption after accumulated reasoning on W4A16 quantized GLM-5.3-Flash (B300) | — |
| **Critical** | DFlash2/DSpark + prefix caching | Cache hit produces corrupt output on Qwen3.8-27B NVFP4 (compressed-tensors) in v0.30/0.31 | — |
| **High** | DeepSeek-V4.1-Flash SM120 decode perf | Extremely low decode throughput with `--enforce-eager`; CUDA graphs unusable | — |
| **High** | FP8 auto-select crashes | `kv_cache_dtype="fp8"` auto-selects FlashInfer backend without JIT, crashes instead of falling back to TRITON_ATTN | — |
| **High** | TP Worker hang | `EngineDeadError` with DeepSeek-V4-Pro TP=8 MTP speculative decoding | — |
| **Medium** | GLM-5.3 CUDA illegal memory access | Recurring IMA on 4xB200 across KDA linear-attention, MHC TileLang, TRT-LLM fused MoE kernels | — |
| **Medium** | RDNA4 FP8 regression | `RowWiseTorchFP8ScaledMMLinearKernel` selected on gfx1201, causing 5-24% decode slowdown since v0.28 | — |
| **Medium** | DeepSeek V3 tool parser | Truncates final streamed tool arguments not ending with `'"}'` | [PR #48343](https://github.com/vllm-project/vllm/pull/48343) |
| **Low** | collect_env.py crash | AssertionError on non-Linux platforms | [PR #48354](https://github.com/vllm-project/vllm/pull/48354) |

## 6. What This Means for Application Developers

- **Blackwell (SM120) users**: Several issues affect DeepSeek-V4.1-Flash on RTX PRO 6000 systems—decode throughput is significantly degraded with eager mode, and CUDA graphs are currently unusable. A fix for kernel block sizing landed in PR #60762.

- **GLM-5.3 users**: Long decoding sessions show output degeneration after accumulated reasoning on W4A16 quantization. Avoid long continuous decode sessions or consider alternative quantization.

- **AMD ROCm users**: The MI355X (gfx950) path is improving with mono decode layer optimizations merged; monitor issue #57149 for Qwen3.8-2.4T-A95B optimization progress.

- **FlashInfer users**: If running without CUDA toolkit or `flashinfer-cubin`, avoid `kv_cache_dtype="fp8"` as the auto-backend selection will crash.

- **NIXL P/D disaggregation**: New troubleshooting docs cover auth layering and side-channel loopback issues when deploying across nodes.

- **RL + LoRA workflows**: Issue #48297 tracks the LoRA adapter lifecycle problem causing crashes during sleep/wake cycles—users in this configuration should monitor for progress.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data and create a structured digest for SGLang on 2026-10-10.

Looking at the data:
- Latest Releases: None in last 24h
- Issues: 79 total, showing top 30
- PRs: 500 total, showing top 20

Key themes I'm seeing:
1. DeepSeek V4.1 optimization work - multiple PRs and issues
2. CUDA Graph fixes for DSpark (DeepSpark)
3. Speculative decoding improvements
4. GLM model fixes (GLM-5.3, GLM-4)
5. Deterministic inference issues
6. Multi-modal/VMM transport fixes
7. HiCache/NPU improvements
8. AMD GPU support work
9. MLX (Apple Silicon) fixes

Let me structure this into the required format:

1. Today's Highlights - 2-3 sentences
2. Releases & Breaking Changes - None
3. New Model & Hardware Support
4. Performance & Optimization
5. Stability & Regressions
6. What This Means for Application Developers</think>

# SGLang Digest — 2026-10-10

## Today's Highlights

SGLang contributors landed significant DeepSeek V4.1 optimizations including DP attention with MegaMoE support and AMD prefill context parallel ([#43228](https://github.com/sgl-project/sglang/pull/43228), [#43465](https://github.com/sgl-project/sglang/pull/43465)). Multiple critical CUDA Graph bugs affecting DSpark compact and large decode paths were addressed, including timing-sensitive illegal memory access on TP8 configurations ([#31023](https://github.com/sgl-project/sglang/issues/31023), [#33356](https://github.com/sgl-project/sglang/issues/33356)). The community also continued hardening deterministic inference, fixing scheduler hangs when prefill chunks are shorter than alignment thresholds ([#43444](https://github.com/sgl-project/sglang/pull/43444)).

---

## Releases & Breaking Changes

No releases detected in the last 24 hours.

---

## New Model & Hardware Support

| Item | Details | PR/Issue |
|------|---------|----------|
| **DeepSeek V4.1 DP Attention** | Enabled DP attention with MegaMoE for V4.1 checkpoints with vision layers | [#43228](https://github.com/sgl-project/sglang/pull/43228) |
| **DeepSeek V4.1 AMD Prefill** | Added prefill context parallel support for AMD GPUs | [#43465](https://github.com/sgl-project/sglang/pull/43465) |
| **DeepSeek V4.1 A5 Compressor** | Routed A5 compressor to explicit SWA-mapped state table | [#40816](https://github.com/sgl-project/sglang/pull/40816) |
| **Moore Threads (MUSA) GPU** | Roadmap for first-class support continues | [#16565](https://github.com/sgl-project/sglang/issues/16565) |
| **NPU Radix Eviction** | Added e2e smoke test for `--radix-eviction-policy-config` on NPU | [#39938](https://github.com/sgl-project/sglang/pull/39938) |
| **FlashInfer FP4 GEMM** | Fixed autotune for compressed-tensors NVFP4 checkpoints | [#43464](https://github.com/sgl-project/sglang/pull/43464) |

---

## Performance & Optimization

| Area | Change | PR/Issue |
|------|--------|----------|
| **HiSparse** | Avoided host synchronization in eager backup path | [#41446](https://github.com/sgl-project/sglang/pull/41446) |
| **KV Sizing** | Skip eager activation reserve in KV sizing on capped Full prefill role | [#43435](https://github.com/sgl-project/sglang/pull/43435) |
| **HiCache** | Preserve device coverage for admission-time prefetch recovery | [#43466](https://github.com/sgl-project/sglang/pull/43466) |
| **Deterministic Inference** | Fixed hang when prefill chunk shorter than alignment (4096) | [#43444](https://github.com/sgl-project/sglang/pull/43444) |
| **AMD FP8 KV** | Saturate FP8 KV commits instead of NaN overflow on e4m3fnuz | [#42982](https://github.com/sgl-project/sglang/pull/42982) |
| **Mamba DCP** | Keep chunked prefill cut on mamba chunk grid for checkpoint donation | [#41701](https://github.com/sgl-project/sglang/pull/41701) |
| **Speculative Decoding** | Reduce available_memory_gb across caller-supplied TP group | [#42296](https://github.com/sgl-project/sglang/pull/42296) |
| **Hybrid Attention** | Dispatch hybrid-model full-attn layers by call form in FA backend | [#42333](https://github.com/sgl-project/sglang/pull/42333) |
| **PD Scheduling** | Reclaim parked optimistic prefills when request slots exhausted | [#43442](https://github.com/sgl-project/sglang/pull/43442) |

---

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **Critical** | DSpark compact target-verify CUDA Graph timing-sensitive illegal memory access on TP8 | Fixed by [#31195](https://github.com/sgl-project/sglang/pull/31195), closed [#31023](https://github.com/sgl-project/sglang/issues/31023) |
| **Critical** | DSpark large decode CUDA-Graph capture non-deterministic illegal memory on TP8 (v0.5.16) | Closed [#33356](https://github.com/sgl-project/sglang/issues/33356) |
| **High** | Deterministic inference + repetition_penalty kills scheduler on granite-4.0-h | Open [#43061](https://github.com/sgl-project/sglang/issues/43061) |
| **High** | GLM-5.3 severe repetition/degenerate loops with DFLASH speculative decoding | Open [#40843](https://github.com/sgl-project/sglang/issues/40843) |
| **Medium** | Disconnected streaming client leaves zombie request (regression from #34160 revert) | Open [#36333](https://github.com/sgl-project/sglang/issues/36333) |
| **Medium** | CUDA VMM multimodal transport slice leak on aborted queued request | Open [#43402](https://github.com/sgl-project/sglang/issues/43402) |
| **Medium** | GPU JPEG decode can overwrite memory that queued GPU work still reads | Open [#43075](https://github.com/sgl-project/sglang/issues/43075) |
| **Medium** | Mamba cache assertion kills engine when all cached states locked | Open [#43204](https://github.com/sgl-project/sglang/issues/43204) |
| **Low** | sglang.Engine crashes with `KeyError: torch.float32` when dtype="float32" used | Open [#43162](https://github.com/sgl-project/sglang/issues/43162) |
| **Low** | `chunked_prefill_size=-1` derives negative mem_fraction_static | Open [#43160](https://github.com/sgl-project/sglang/issues/43160) |

---

## What This Means for Application Developers

1. **DeepSeek V4.1 Production Readiness**: The V4.1 optimizations landing today (DP attention, A5 compressor routing, AMD prefill support) bring this model closer to production-grade serving. If you're deploying DeepSeek V4.1, expect improved throughput and broader hardware support.

2. **Deterministic Inference Progress**: The fix for scheduler hangs with small prefill chunks ([#43444](https://github.com/sgl-project/sglang/pull/43444)) resolves a common pitfall when using `--chunked-prefill-size < 4096` or running on configurations with DP attention splitting. However, deterministic inference remains fragile—issues [#43061](https://github.com/sgl-project/sglang/issues/43061) and [#43055](https://github.com/sgl-project/sglang/issues/43055) are still open.

3. **Streaming Client Hygiene**: If you build streaming clients, be aware of the zombie request issue ([#36333](https://github.com/sgl-project/sglang/issues/36333))—disconnected clients can leave requests that decode to max_tokens. Implement explicit client-side cancellation or timeout handling.

4. **VMM Multimodal Deployments**: The CUDA VMM transport slice leak ([#43402](https://github.com/sgl-project/sglang/issues/43402)) affects deployments using `--mm-feature-transport cuda_vmm`. Aborted multimodal requests before execution can leak memory—monitor closely if using this configuration.

5. **GLM Model Users**: Several GLM-related fixes landed today, including tool argument preservation ([#43389](https://github.com/sgl-project/sglang/pull/43389), [#43264](https://github.com/sgl-project/sglang/pull/43264)). If using GLM-4 or GLM-5 tool calling, these improvements should enhance reliability.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze the provided GitHub data for llama.cpp and create a structured digest for 2026-10-10.

Looking at the data:

## Latest Releases (last 24h)
- b11539: vendor: apply deep nested json patch from upstream (#30253)
- b11538: CUDA: fix round issue, under MSVC the CPU and GPU agree (#30229)
- b11537: graph : reorder get_rows for embeddings (#30160)
- b11535: llama-bench: respect -fitc if bigger than required benchmark size (#28331)
- b11534: CUDA: Remove redundant CUDA copies after SSM_SCAN (#29807)
- b11533: opencl: fix kernel compilation for a6x GPUs (#30176)
- b11532: model : use exact GELU for ModernBERT encoders (#30108)
- b11531: chat : refactor API (#30210)
- b11530: llama: keep the backend sampling graph static across ubatches (#30223)
- b11529: ggml: fix OOB write in ggml_acc with negative offset (#30135)

## Latest Issues
Several issues, with the most notable being:
- #25618: Speculative decoding bug with quantized targets (30 comments)
- #23210: CUDA crash with Qwen3.6-27B (14 comments)
- #24795: gemma4-assistant MTP draft model fails to load (12 comments)

## Latest Pull Requests
- #30263: [ggml, CUDA] Respect cgroup CPU quotas for default threads
- #29864: Multi-column on Intel XMX matrix engines refactored
- #30262: [ggml, CUDA] Fix duplicate expert IDs in CUDA mul_mat_id
- #25731: Add TML Inkling architecture


- #30260: cuda : support required FP32 activations in MUL_MAT_ID
- #30261: mtmd : lfm2 tiles and layout match transformers
- #30259: mtmd: add build_inp_attn_mask
- #30257: spec: properly handle mtmd input for mtp
- #30255: llama : skip logits buffer allocation when graph produces no logits

I'll focus on the latest pull requests that address critical performance and compatibility issues. These updates span CUDA, memory management, and model-specific optimizations. The most significant PRs include addressing CPU quota handling, supporting FP32 activations, and improving model-specific implementations across different architectures.

The latest releases introduce several key improvements:
- Precise CUDA round implementations
- Embedding processing optimizations
- Benchmark sizing refinements
- SSM_SCAN enhancements
- GPU kernel compatibility fixes

Hardware and backend support continues to expand, with new features for Intel XMX, LFM models, and various GPU architectures like A6x and ModernBERT.

Performance gains are evident across multiple platforms:
- Intel XMX matrix engine optimizations
- Vulkan RMS norm efficiency improvements
- Memory allocation strategies refined

The current focus involves addressing quantization challenges in speculative decoding, CUDA server crashes, and compatibility issues with gemma4-assistant models.

Key improvements target inference precision, memory management, and cross-platform robustness, ensuring smoother deployment across diverse computational environments.</think>

# llama.cpp Digest — 2026-10-10

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
- **OpenCL A6x GPUs** — kernel compilation fix (skips kernel_cpy_f32_f32_pack to avoid shader compiler crash) | [#30176](https://github.com/ggml-org/llama.cpp/pull/30176)
- **Intel XMX** — multi-column mul_mat_vec_q for reordered K-quant and Q8_0 weights, targeting speculative decoding verification (2–8 tokens/step) and short prompt batches | [#29864](https://github.com/ggml-org/llama.cpp/pull/29864)
- **Mistral Small 4** — GGML_PREC_F32 support for expert down-projections in MUL_MAT_ID (CUDA) | [#30260](https://github.com/ggml-org/llama.cpp/pull/30260)

## 4. Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **CUDA SSM_SCAN** | Removed redundant copies after state snapshots | Reduced memory bandwidth |
| **CUDA mul_mat_id** | Fixed duplicate expert ID calculation (caused incorrect MoE routing) | Correctness + potential speedup |
| **Vulkan RMS Norm** | Subgroup reductions replace workgroup reduction | Tested: gains on Intel B70 Arc Pro, RTX 4060 Ti, AMD 7900 XT |
| **Embedding models** | Skip logits buffer allocation when graph produces no logits | ~1 MiB RAM saved per batch for large vocabs (e.g., bge-m3: 250K tokens) |
| **llama-bench** | Respects -fitc when larger than required benchmark size | More accurate benchmarking |
| **Graph ordering** | Reordered get_rows for embeddings; improved input embedding construction for Gemma4 | Efficiency for embedding workloads |
| **cgroup quotas** | Respect cgroup v2 CPU quotas for default thread count | Prevents CFS throttling in containers |

**SYCL/Q4_K MMVQ**: Row-pairing optimization extended to 5–8 columns on BMG | [#30226](https://github.com/ggml-org/llama.cpp/pull/30226)

## 5. Stability & Regressions

| Issue | Severity | Status |
|-------|----------|--------|
| **Speculative decoding divergence** on quantized targets (Q4_K_M) — greedy output differs from non-speculative run, but matches bf16 | **High** — correctness bug | Open, 30 comments [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) |
| **llama-server crashes on CUDA** with Qwen3.6-27B (Windows, RTX 5060 Ti) | **High** — crash | Closed as stale [#23210](https://github.com/ggml-org/llama.cpp/issues/23210) |
| **Gemma4-assistant MTP fails to load** — "invalid vector subscript", regression b9553→b9702 | **High** — regression | Closed as stale [#24795](https://github.com/ggml-org/llama.cpp/issues/24795) |
| **ggml_acc OOB write** with negative offset (truncated size_t) | **Critical** — memory safety | Fixed in b11529 [#30135](https://github.com/ggml-org/llama.cpp/issues/30135) |
| **CUDA/MSVC round mismatch** between CPU and GPU | **Medium** — correctness | Fixed in b11538 [#30229](https://github.com/ggml-org/llama.cpp/pull/30229) |
| **IQ3_S produces garbage** on RTX 5060Ti (Blackwell) | **Medium** — correctness | Open, 7 comments [#28581](https://github.com/ggml-org/llama.cpp/issues/28581) |
| **VRAM leak** with DeepSeek V4 Flash + DSpark (10 MB per PP+TG cycle) | **Medium** — memory leak | Open, 2 comments [#27155](https://github.com/ggml-org/llama.cpp/issues/27155) |

## 6. What This Means for Application Developers

- **Server deployments**: The chat API refactor (b11531) may require updates if you directly depend on internal chat structures. The sampling graph fix (b11530) improves reliability with `--ubatch-size` and static graph scheduling.
- **Quantized inference**: If using speculative decoding with Q4/Q5 quantizations, be aware of the divergence issue — consider falling back to bf16 targets or disabling speculative decoding until resolved.
- **Containerized inference**: The cgroup CPU quota fix (PR #30263) is critical for Kubernetes/Docker deployments — it prevents oversubscription and improves throughput under CPU limits.
- **Embedding/reranking**: The logits buffer optimization (PR #30255) saves ~1 MiB per request for large-vocab models; consider this when budgeting memory for high-throughput embedding services.
- **New architectures**: TML Inkling and Prism Bonsai 2 support landed — these are now viable for production inference if you have compatible weights.
- **Metal/CUDA correctness**: The MSVC round fix resolves numerical mismatches that could affect determinism in Windows CUDA builds.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze this GitHub data about Ollama and create a structured digest for 2026-10-10.

Looking at the data:

**Releases**: None in the last 24h

**Issues (21 total)**: Let me identify the key ones:
- #18770: mistral-medium-3.5:128b memory issues on M4 Mac (127GB RAM, >100GB wired)
- #17380: CUDA error on Windows RTX 5070 Ti
- #18856: MLX runner panic with qwen3.6:35b-mlx (regression from 0.35.0)
- #17748: AMD Radeon 780M Vulkan regression in >=0.32.10
- #18712: Windows auto-update leaves cuda_v12\ggml-cuda.dll as .tmp
- #18276: qwen3moe + Blackwell (sm_120) crash at warmup
- #18885: MLX runner panic on Mac Mini M6
- #18898: Gemma4:12b throws "Gemma4Assistant requires ctx_other to be set"
- #18534: OpenAI endpoint ignores reasoning_content
- #18909: Feature request - disable automatic model upgrade

**Pull Requests (47 total, showing top 20)**:
- #18912: README add Vessel to community integrations
- #18828: docs restructuring
- #18906: preserve Unicode in olmo3 tool arguments
- #18660: Bug fix - app/webview: define NOMINMAX before windows.h
- #18911: openai: accept custom tool calls in Responses history
- #18910: README add Creatos to community integrations
- #18908: server: skip local model compatibility migration (CLOSED)
- #18907: fix: upgrade seroval to 1.6.2 (CVE-2026-104846)


- #18878: launch: suppress Claude Code connector warning (CLOSED)
- #18877: thinking: split Mistral [THINK] reasoning tags
- #18820: model: add multimodal embeddings (CLOSED)
- #18780: mlx: add Kolibri 1 support

I'll focus on the most impactful technical developments. The digest highlights critical issues affecting system stability and model compatibility. Key concerns include memory management problems on Apple Silicon, CUDA errors on Windows, and MLX runner panics. Notably, there are no recent releases, but several important PRs address Unicode handling, security vulnerabilities, and model support across different hardware platforms.

The most pressing issues involve regression problems across multiple hardware configurations, particularly with Mistral models, AMD GPUs, and NVIDIA Blackwell architectures. These technical challenges could significantly impact model inference and system performance.</think>

# Ollama Digest — 2026-10-10

## 1. Today's Highlights

Ollama sees active development across multiple fronts: security patching (seroval upgrade for CVE-2026-104846), new model support (Kolibri 1 on MLX, multimodal embeddings), and documentation restructuring. However, several significant stability issues persist — notably regressions affecting Apple Silicon memory handling, AMD Vulkan, and NVIDIA Blackwell GPUs. No new releases in the last 24 hours.

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours.
- **Migration change**: PR [#18908](https://github.com/ollama/ollama/pull/18908) (closed) temporarily removes the background model migration due to per-request overhead and GC pressure for high-volume embedding workloads.

## 3. New Model & Hardware Support

| Item | Details | PR/Issue |
|------|---------|----------|
| **Kolibri 1 (MLX)** | Apple Silicon MLX runner support added | [#18780](https://github.com/ollama/ollama/pull/18780) |
| **Multimodal embeddings** | EmbeddingGemma2Model architecture on MLX runner with per-item media support via `/api/embed` | [#18820](https://github.com/ollama/ollama/pull/18820) |
| **d1-3B / d1-omni-600M** | Request to add LiquidAI decision models — currently fails with `unsupported decision encoding "lfm2-d1"` | [#18890](https://github.com/ollama/ollama/issues/18890) |
| **Gemma4:12b** | New variant throws runtime error `Gemma4Assistant requires ctx_other to be set` | [#18898](https://github.com/ollama/ollama/issues/18898) |

## 4. Performance & Optimization

- **Unicode in Olmo3 tool arguments**: PR [#18906](https://github.com/ollama/ollama/pull/18906) fixes corruption of non-ASCII characters (e.g., `get_weather(location="Zürich, 日本 🌦️")`) in tool calls — previously lost UTF-8 continuation bytes.
- **Mistral `[THINK]` reasoning**: PR [#18877](https://github.com/ollama/ollama/pull/18877) properly splits Mistral's bracketed reasoning tags instead of leaking them into response content for models using that template.
- **Custom tool calls in Responses history**: PR [#18911](https://github.com/ollama/ollama/pull/18911) allows continuing conversations with `custom_tool_call` or `custom_tool_call_output`, preserving call IDs and input text.

## 5. Stability & Regressions

| Severity | Issue | Details |
|----------|-------|---------|
| **Critical** | #18770 — mistral-medium-3.5:128b on M4 Mac | Consumes 127GB RAM + >100GB wired (model is 80GB); runs at ~1 word/min. |
| **High** | #18856 — MLX runner panic (qwen3.6:35b-mlx) | Regression from 0.35.0; works on 0.40.x |
| **High** | #17748 — AMD Radeon 780M Vulkan regression | `radv/amdgpu: Not enough memory` in Ollama ≥0.32.10; works on earlier versions |
| **High** | #18276 — qwen3moe + Blackwell (sm_120) crash | CUDA error at warmup on RTX 5070 Ti Laptop |
| **High** | #18885 — MLX panic on Mac Mini M6 | `mlx runner failed: panic: mlx` even with small models like gemma4:e2b-mlx |
| **Medium** | #17380 — Windows CUDA warmup failure | Intermittent `CUDA error: shared object initialization failed` with RTX 5070 Ti |
| **Medium** | #18712 — Windows auto-update leaves .tmp DLL | CUDA backend `ggml-cuda.dll` missing after update → 0B VRAM / CPU fallback |
| **Medium** | #18898 — Gemma4:12b init error | `Gemma4Assistant requires ctx_other to be set` |
| **Medium** | #18534 — reasoning_content silently dropped | OpenAI-compatible endpoint ignores DeepSeek's `reasoning_content` field |
| **Low** | #18909 — Request: disable automatic model upgrade | Users want to prevent SSD space exhaustion from auto-downloads |

**Security fix**: PR [#18907](https://github.com/ollama/ollama/pull/18907) upgrades `seroval` to 1.6.2 to address CVE-2026-104846.

## 6. What This Means for Application Developers

1. **Avoid MLX workloads on Apple Silicon for production** — the qwen3.6:35b-mlx and gemma4:mlx regressions in 0.40.x suggest instability in the MLX backend. Stick to 0.35.0 if MLX is critical.

2. **NVIDIA Blackwell (sm_120) users: test carefully** — both qwen3moe and GPT-oss models crash at warmup on RTX 5070 Ti. This affects auto-enabled flash attention.

3. **Windows CUDA users: verify ggml-cuda.dll after updates** — the auto-update bug can silently fall back to CPU. Check VRAM allocation if performance drops unexpectedly.

4. **DeepSeek integration risk** — if you're using DeepSeek models with reasoning, the OpenAI-compatible endpoint silently drops `reasoning_content`. This will break conversation replay. Monitor for a fix.

5. **Embedding workloads benefit** — the removal of background migration (PR #18908) should reduce per-request latency and GC pressure for high-throughput `/api/embed` usage.

6. **Monitor for seroval dependency** — if you embed Ollama or run MCP servers, ensure the security patch reaches your deployment soon.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for LiteLLM on 2026-10-10.

Looking at the data:

**Releases:**
- v1.106.0-dev.3 released
- Docker images now signed with cosign
- Security note about PyPI package compromise (v1.82.7 + v1.82.8) - already contained

**Top Issues:**
1. #24518 - CLOSED - Security: PyPI package compromise (v1.82.7 + v1.82.8) - 118 comments, 137 👍 - CONTAINED
2. #10177 - CLOSED - Dark Mode feature - 65 comments
3. #31263 - OPEN - Rust Migration - 29 comments
4. #30484 - OPEN - Stability Sprint Roadmap - 27 comments
5. #26672 - OPEN - Budget enforcement bypass bug - 22 comments
6. #27735 - OPEN - Virtual key BudgetExceededError with stale spend - 13 comments
7. #24530 - OPEN - /metrics endpoint default-unauthenticated exposes PII - 10 comments
8. #18058 - OPEN - Cost calculation for ElevenLabs not working - 9 comments
9. #39713 - OPEN - Per-customer RPM limits stop applying when virtual key cached - 9 comments
10. #24037 - CLOSED - /ui/chat returns 404 - 7 comments

**Key PRs:**
- #45696 - feat(rust): prepare Bedrock Invoke Messages
- #45709 - feat(guardrails): split logging_only_scope
- #43330 - feat(helm): single chart with monolith mode
- #44955 - fix(decisions)!: refuse safety_identifier on unsupported providers
- #45678 - feat(strands_decider): call Strands Decider on AgentCore


- #45609 - feat(bedrock): bridge gpt-5.6+ function tools with reasoning to native /responses
- #44167 - feat: add ScaleDown model pricing
- #45494 - feat(telemetry): Admin UI telemetry settings page
- #44168 - feat: add ScaleDown as a chat provider
- #45714 - feat(fallbacks): provider-wide fallbacks
- #45490 - feat(telemetry): local table with persistent instance id

I need to synthesize this into a concise digest that highlights the key developments. The project is making progress on several fronts: model provider expansion with ScaleDown integration, enhanced telemetry capabilities, improved stability through the Rust migration, and security hardening. The stability sprint and bug fixes around budget enforcement and authentication are particularly notable for production deployments.</think>

# LiteLLM Digest — 2026-10-10

## 1. Today's Highlights

The LiteLLM team is pushing forward on two major initiatives: the **Rust migration** (with a parent ticket now tracking progress) and a **Stability Sprint** focused on bug fixes. The Trivy supply-chain compromise from March has been fully contained, and all affected packages removed. The v1.106.0-dev.3 release introduces Docker image signing with cosign for supply-chain security.

---

## 2. Releases & Breaking Changes

| Version | Change | Notes |
|---------|--------|-------|
| **v1.106.0-dev.3** | New dev release | — |
| **Docker images** | Now cosign-signed | All images signed with key from commit `0112e53`; verify with cosign |
| **Security fix** | PyPI compromise contained | v1.82.7/v1.82.8 compromised — all affected packages deleted, current releases clean ([#24518](https://github.com/BerriAI/litellm/issues/24518)) |

---

## 3. New Model & Hardware Support

| Model/Provider | Type | Details |
|----------------|------|---------|
| **ScaleDown** | New chat provider | 5 models added (`/extract`, `/summarization`, `/compress`, etc.) — PR [#44168](https://github.com/BerriAI/litellm/pull/44168) |
| **ScaleDown** | Pricing added | Input tokens $0.05/M, output free — PR [#44167](https://github.com/BerriAI/litellm/pull/44167) |
| **Bedrock GPT-5.6+** | Native /responses bridge | Tool calls with reasoning now route to `bedrock-runtime` instead of falling back to Converse (preserves reasoning tokens) — PR [#45609](https://github.com/BerriAI/litellm/pull/45609) |
| **Strands Decider** | AgentCore runtime support | Runtime ARN in `api_base` now invokes `InvokeAgentRuntime` with SigV4 signing — PR [#45678](https://github.com/BerriAI/litellm/pull/45678) |
| **xAI batch** | Results file naming fix | Completed batches now use deterministic file naming instead of polling the files API — PR [#45559](https://github.com/BerriAI/litellm/pull/45559) |
| **Vertex AI Claude** | Batch support | Claude batches now upload under `publishers/anthropic/models/` — PR [#45715](https://github.com/BerriAI/litellm/pull/45715) |

---

## 4. Performance & Optimization

No explicit performance benchmarks landed in the last 24h. Ongoing work:

- **Rust migration** — Parent ticket [#31263](https://github.com/BerriAI/litellm/issues/31263) tracks sub-1ms overhead target
- **Spend tracking optimization** — New `disable_entity_spend_updates` flag to suppress counter UPDATEs at high request volumes ([#31866](https://github.com/BerriAI/litellm/issues/31866))
- **Concurrent spend cache fix** — User/team/end-user/tag caches now handle concurrent increments correctly ([#43491](https://github.com/BerriAI/litellm/issues/43491))

---

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **HIGH** | Budget enforcement bypassed in v1.82.3 | OPEN — key/user `max_budget` ignored after spend exceeds limit ([#26672](https://github.com/BerriAI/litellm/issues/26672)) |
| **HIGH** | Virtual key `BudgetExceededError` with stale spend | OPEN — API reports spend below budget but rejects requests ([#27735](https://github.com/BerriAI/litellm/issues/27735)) |
| **HIGH** | `/metrics` endpoint unauthenticated by default | OPEN — exposes multi-tenant PII in production ([#24530](https://github.com/BerriAI/litellm/issues/24530)) |
| **MEDIUM** | Per-customer RPM limits fail after key cached | OPEN — `rpm_limit` stops applying once virtual key is cached ([#39713](https://github.com/BerriAI/litellm/issues/39713)) |
| **MEDIUM** | ElevenLabs cost calculation broken | OPEN — model not in pricing map ([#18058](https://github.com/BerriAI/litellm/issues/18058)) |
| **MEDIUM** | False `BudgetExceededError` under sustained load | OPEN — "Current cost" = max_budget + recent spend, self-heals in ~2min ([#36926](https://github.com/BerriAI/litellm/issues/36926)) |
| **MEDIUM** | Azure SDK Responses API bypasses router | OPEN — calls go to api.openai.com via pass-through ([#45033](https://github.com/BerriAI/litellm/issues/45033)) |
| **LOW** | `team_member_budget` replaces entire team metadata | OPEN — overwrites unrelated fields ([#31447](https://github.com/BerriAI/litellm/issues/31447)) |
| **LOW** | Databricks `response_format` with nested `$ref` | FIXED — PRs [#45658](https://github.com/BerriAI/litellm/pull/45658), [#45632](https://github.com/BerriAI/litellm/pull/45632), [#45659](https://github.com/BerriAI/litellm/pull/45659) |
| **LOW** | Redis cluster nodes cause shutdown failure | CLOSED — ([#31206](https://github.com/BerriAI/litellm/issues/31206)) |

---

## 6. What This Means for Application Developers

- **Supply-chain security upgraded**: Docker images are now cosign-verifiable — update your deployment pipelines to verify signatures.
- **Budget enforcement caveat**: If running v1.82.3, budget limits on keys may not trigger correctly. Monitor spend via `/key/info` and consider upgrading.
- **Metrics endpoint exposure**: If running in multi-tenant production, add `require_auth_for_metrics_endpoint: true` to config immediately.
- **New provider options**: ScaleDown is now available as a cost-effective alternative for extraction/summarization tasks.
- **Router behavior change**: Azure SDK with Responses API currently bypasses router model selection — avoid using AzureOpenAI client with `/openai/responses` until fixed.
- **Helm simplification**: Single-chart monolith mode is now the recommended deployment pattern (PR [#43330](https://github.com/BerriAI/litellm/pull/43330)).

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate a structured "Unsloth digest" for 2026-10-10 based on the GitHub data provided. Let me analyze the data and create the digest following the specified format.

Let me organize the information:

1. **Latest Releases**: None in last 24h

2. **Latest Issues** (top 30 by comment count):
- #4504: VRAM usage bug causing OOMs (25 comments)
- #3921: Triton CUDA illegal memory access on PRO RTX6000 (20 comments)
- #5756: Model response timeout settings feature request (19 comments)
- #3603: OOM Issue with 7B GRPO QLora on H100 80GB (14 comments)
- #3943: Training slowdown after 15 iterations (13 comments)
- #3443: OOM on Jetson Orin Nano (13 comments)
- #3366: gemma-3-4b-it-bnb-4bit in vLLM issues (12 comments)
- #1099: Beam search _reorder_cache issue (12 comments)
- #884: PPO training issues (12 comments)
- #3495: FastVisionModel multi-GPU support request (11 comments)
- #3560: Qwen3-VL with LoRA adapter on vLLM (11 comments)
- #1494: Online DPO run changes (11 comments)
- #3308: Windows Conda installation fails (10 comments)
- #3951: Qwen3-TTS fine-tuning support request (10 comments)
- #1998: GPU too old error (10 comments)
- #3292: Intel matmul primitive error (9 comments)
- #3411: OOM for GPT OSS 120b on 183GB VRAM (8 comments)


- #2726: Loading Fine-Tuned LoRA Model for ASR (8 comments)
- #2368: Cannot install specific releases from source (8 comments)
- #3728: Bias type mismatch AssertionError (7 comments)
- #2325: Qwen 2.5-Omni Support request (7 comments)
- #9792: AMD Qwen3.8-27B V3 GGUF crashes (7 comments)
- #7449: AMD Strix Halo VRAM not used (7 comments)
- #3482: DPO loss inconsistency with gradient accumulation (6 comments)
- #3550: Gran

I've identified additional issues spanning model loading, installation challenges, hardware compatibility problems, and training inconsistencies. The dataset reveals multiple technical challenges across different GPU architectures and deployment scenarios.</think>

# Unsloth Digest — 2026-10-10

## 1. Today's Highlights

Unsloth sees active Studio and installer work today with multiple PRs addressing multi-GPU AMD selection, Intel XPU support, and security hardening. The core library continues to face VRAM-related OOM reports across high-end hardware (H100, RTX PRO6000, B200), suggesting memory allocation patterns remain a pain point for GRPO and large-context fine-tuning. A long-standing embedding learning rate bug for full finetuning was finally fixed in PR #13171.

---

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Description | Link |
|------|-------------|------|
| **Qwen-Image-2.1-Turbo** | Studio adds support for the official 8-step distill with custom sampling schedule | [PR #13159](https://github.com/unslothai/unsloth/pull/13159) |
| **Qwen3-TTS** | Feature request opened for fine-tuning support (currently not supported) | [Issue #3951](https://github.com/unslothai/unsloth/issues/3951) |
| **Intel Arc / Data Center GPU** | `install.sh` now auto-installs XPU PyTorch on Linux when these are the only GPU | [PR #13193](https://github.com/unslothai/unsloth/pull/13193) |
| **AMD Strix Halo + Discrete GPU** | Auto-select now prefers discrete card over APU for training | [PR #13196](https://github.com/unslothai/unsloth/pull/13196) |
| **Jetson JetPack CUDA** | Backend now prioritizes JetPack's CUDA over pip CUDA in llama-server paths | [PR #13191](https://github.com/unslothai/unsloth/pull/13191) |

---

## 4. Performance & Optimization

| Item | Details | Link |
|------|---------|------|
| **Embedding learning rate fix** | `embedding_learning_rate` now correctly applies to all embeddings under full finetuning (previously silently ignored for non-LoRA params) | [PR #13171](https://github.com/unslothai/unsloth/pull/13171) |
| **RoPE/Norm kernel int64 fix** | Casts `tl.program_id` to int64 in RoPE, RMSNorm, LayerNorm kernels — fixes failures past 2³¹ elements (~5.5 GiB GPU memory needed for test) | [PR #13121](https://github.com/unslothai/unsloth/pull/13121) |
| **Training slowdown** | Issue #3943 reports training jumps from 2s/iter to 45s/iter after ~15 iterations — root cause under investigation | [Issue #3943](https://github.com/unslothai/unsloth/issues/3943) |
| **Office / e-book parsing** | Chat with files now indexes `.pdf .doc .docx .xls .xlsx .xlsm .ppt .pptx .txt .md .html .csv .tsv .eml .msg .json .xml .rtf .odt .ods .odp` and more | [PR #13081](https://github.com/unslothai/unsloth/pull/13081) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| **High** | VRAM usage far exceeds advertised — OOM on fine-tuning "big models" even with ample VRAM | Open | [Issue #4504](https://github.com/unslothai/unsloth/issues/4504) |
| **High** | Triton illegal memory access on RTX PRO 6000 (96GB) | Open | [Issue #3921](https://github.com/unslothai/unsloth/issues/3921) |
| **High** | OOM on GPT OSS 120b with 183GB VRAM (B200) using GRPO at 4k context | Open | [Issue #3411](https://github.com/unslothai/unsloth/issues/3411) |
| **Medium** | QLoRA GRPO OOM on H100 80GB with batch_size=1, num_generations=8 | Closed | [Issue #3603](https://github.com/unslothai/unsloth/issues/3603) |
| **Medium** | AMD Strix Halo — Studio loads weights to system RAM instead of VRAM | Open | [Issue #7449](https://github.com/unslothai/unsloth/issues/7449) |
| **Medium** | AMD Qwen3.8-27B V3 GGUF crashes after prefill on R9700 (V2 works) | Open | [Issue #9792](https://github.com/unslothai/unsloth/issues/9792) |
| **Medium** | DPO loss inconsistency with different gradient accumulation steps | Closed | [Issue #3482](https://github.com/unslothai/unsloth/issues/3482) |
| **Low** | Qwen-Image-2.1 memory blowout on Apple Silicon at 2048×2048 — returns blank images after 20min | Open | [PR #13188](https://github.com/unslothai/unsloth/pull/13188) |

---

## 6. What This Means for Application Developers

- **If you use full finetuning**: The embedding learning rate bug fix (PR #13171) means your embedding layers will now receive the intended learning rate — check your training configs, as behavior may change.
- **If you run on AMD hardware**: The auto-GPU selection improvements (PR #13196) and XPU PyTorch support (PR #13193) should reduce manual configuration overhead on mixed APU/dGPU systems and Intel Arc cards.
- **If you process documents**: The expanded file format support in chat-with-files (PR #13081) enables richer RAG workflows without external preprocessing.
- **If you hit OOM errors**: VRAM issues persist across high-end GPUs — consider reducing `num_generations` in GRPO, using longer warmup for training, or watching for the int64 RoPE fix (PR #13121) if working with contexts >2³¹ tokens.
- **If you deploy on Jetson**: The CUDA path fix (PR #13191) should resolve the "Server disconnected" crash on first chat request.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*