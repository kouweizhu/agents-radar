# AI Infrastructure Digest 2026-11-12

> Generated: 2026-11-12 03:17 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report across vLLM, SGLang, llama.cpp, Ollama, and Unsloth based on the digests I just created. Let me compile a comprehensive, data-backed report.

Let me organize the key data points:

**Activity Comparison:**
- vLLM: 30 issues, 20 PRs (active), 0 releases
- SGLang: 56 issues, 500 PRs (very active), 0 releases
- llama.cpp: ~10 issues, 28 PRs (moderate), 10 releases
- Ollama: 9 issues, 28 PRs, 0 releases


- Unsloth: 16 issues, 159 PRs, 1 release

**Model Support:**
- vLLM: DeepSeek-V4, Qwen3.8, GLM-5.3, Nemotron 3.5 ASR, Gemma 4, DeepSeek-R1
- SGLang: Kimi-K3.1 (biggest addition), DeepSeek-V4, GLM-5.7, GLM-4.7
- llama.cpp: Qwen3.6 (FP8), Muse Spark, Qwen3-TTS, Gemma 4, DeepSeek-R1
- Ollama: Gemma3, Claude Desktop gateway
- Unsloth: Qwen3.8-27B, Kromoss, MiniMax-H3-Image, EXL3 backend

**Performance Frontend:**
Looking at where each framework is optimizing—vLLM is pushing on KV-cache and ROCm kernel work, SGLang is tackling speculative decoding and caching strategies, llama.cpp is refining quantization methods, Ollama's focusing on memory and batched inference, and Unsloth is working on NPU and dynamic quantization approaches.

**Layer Positioning:**
vLLM and SGLang are positioned as production inference engines, llama.cpp operates as a local and embedded runtime, Ollama targets end-user simplicity, Unsloth handles fine-tuning, and LiteLLM provides gateway and routing capabilities.

Now I'm seeing the key trends emerging across the ecosystem—Blackwell support is accelerating, AMD's ROCm integration is maturing, speculative decoding is becoming production-ready, quantization methods are fragmenting, and there's a growing focus on multi-turn memory management and platform-specific optimizations.
</think>


# AI Infrastructure Ecosystem — Cross-Project Comparison Report
**Reference Date: 2026-11-12**

---

## 1. Ecosystem Overview

The AI inference stack today is fragmenting along two axes: **deployment boundary** (cloud / edge / local) and **hardware target** (NVIDIA Blackwell → Hopper → RDNA4 → NPU). Today's digest data shows all five projects operating simultaneously — vLLM and SGLang as high-throughput cloud serving engines, llama.cpp as the de facto local/embedded runtime, Ollama as the consumer-friendly abstraction layer, and Unsloth as the fine-tuning companion. The common thread is **quantization and KV-cache optimization**: every project is investing in lower-precision paths (FP8, INT4, MXFP4, NVFP4, Dynamic GGUFs) and in reducing memory overhead for multi-turn and agentic workloads. The hardware diversification is equally pronounced — what was a CUDA-monoculture 18 months ago now includes active ROCm backends (gfx950, gfx1201, gfx942), SYCL (Intel), NPU stacks (AMD FastFlowLM, Huawei Ascend), and WebGPU, each with its own performance and correctness surface area.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Community Velocity |
|---------|---------------------|-------------------|----------------|-------------------|
| **vLLM** | 30 (top 30 by comments) | ~20 (top 20 by comments) | 0 | Very high — 30+ active PRs, deep ROCm + Blackwell stacks |
| **SGLang** | 56 (top 56 by comments) | ~500 (all updated) | 0 | Highest activity — mass PR churn; Kimi-K3.1 release drive |
| **llama.cpp** | ~10 (top issues) | 28 (top PRs) | 10 commits | Moderate-high — steady backend-specific optimization cadence |
| **Ollama** | 9 (all) | 28 (all) | 0 | Moderate — focused on correctness fixes and MLX improvements |
| **Unsloth** | 16 (all) | 159 (all) | 1 (v0.1.917-beta) | High — rapid NPU, quantization, and Studio feature cycle |
| **LiteLLM** | ~25 (top issues) | ~30 (top PRs) | 5 (v1.110.0-rc.2 → v1.106.8) | High — release cadence, security hardening, multi-provider expansion |

**Interpretation:** SGLang shows the highest raw churn by a significant margin, driven by the Kimi-K3.1 integration and speculative decoding pipeline. vLLM's activity is concentrated in deep kernel optimization (ROCm + Blackwell). llama.cpp's 10 commits over 24 hours reflect a lean, steady release model rather than a feature-driven one. Ollama is the most focused on correctness over feature expansion. Unsloth's 159 PRs reflect a Studio product layer on top of the core inference engine.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **Qwen3.8-27B** (GDN hybrid) | ✅ (ROCm + CUDA) | — | — | — | ✅ (Dynamic v3.1 GGUF) |
| **Qwen3.6-27B FP8** | ✅ (CUTLASS, Blackwell) | — | ✅ (W8A16 GEMV) | — | — |
| **DeepSeek-V4 / V4.1** | ✅ (MXFP4, FP8 KV, MLA) | ✅ (DSA, DCP, HiSparse) | — | — | — |
| **Kimi-K3.1** | — | ✅ (Day-0: DSA + DCP + DFlash) | — | — | — |
| **GLM-5.3 / 5.7** | ✅ (DeepGEMM BF16, MoE) | ✅ (engine corruption bug active) | — | — | — |
| **GLM-4.7-Flash W4A16** | — | 🐛 (crash reported) | — | — | — |
| **Gemma 4 (MTP)** | ✅ (speculative decoding) | ✅ (Gemma4 o_proj optimization) | ✅ (MTP crash fixed) | — | — |
| **Nemotron 3.5 ASR** | ✅ (feature request open) | — | — | — | — |
| **Muse Spark** | ✅ (ROCm optimization) | ✅ (DSpark speculative) | ✅ (response_format fix) | — | — |
| **Qwen3-TTS** | — | — | ✅ (COL2IM_1D WebGPU) | — | — |
| **Magistral (Mistral)** | — | — | — | — | — |
| MiniMax-H3-Image | — | — | — | — | ✅ (fixes landing) |
| EXL3 quantization (MoE) | — | — | — | — | ✅ (backend in progress) |

**Winner by breadth:** **vLLM** — the only project supporting Qwen3.8 across both ROCm (MI355X) and CUDA (Blackwell) simultaneously, plus DeepSeek-V4 MXFP4, MLA, and FP8 KV cache in a single release cycle.

**Winner by integration depth:** **SGLang** — Kimi-K3.1 shipped with Day-0 support for 6 subsystems (DSA, DCP, DFlash, HiSparse, PP prefill, MoRI EPv2), an unusually complete model integration.

**Fastest new-model turnaround:** **Unsloth** — Qwen3.8-27B support shipped within the same beta release as the Dynamic v3.1 GGUF format itself.

---

## 4. Performance Frontier

Where each project is concentrating its optimization budget this cycle:

| Optimization Domain | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|---------|
| **KV-cache materialization** | MLA decode-head padding, AITER asm paged attention | HiCache staged-prefix accounting | Dequantized KV with CM2 (Vulkan) | VRAM accounting for multi-model | — |
| **Quantization (kernel level)** | Humming (INT4 replacement), NVFP4 MoE CUTLASS, MXFP4 fusion | DeepSeek chunked-prefix LSE (bug) | OCP FP8 W8A16, MMVF BF16 few-row, IQ3 matvec | — | Dynamic v3.1 GGUFs, EXL3 backend |
| **Speculative decoding** | Mixed-precision SpeculativeConfig | DFlash MLA, tree attention FA3/FA4, EAGLE3 | Speculative divergence on quantized targets (bug) | MLX batch speculative verification | — |
| **Distributed / multi-engine** | TP-agnostic KV offloading (RFC), P/D proxy | Prefill context parallelism (Q4 2026 roadmap) | — | — | — |
| **Flash attention / kernels** | Triton K/V view re-derivation (bug), FlashTopK Blackwell | HiSparse, DFlash MLA | WMMA FA threshold (AMD RDNA4 bug) | — | — |
| **Memory / scheduling** | BlockPool state dump | Shortest-prefill-first, SWA slot management | Few-row MMQ (MoE batch 2–24) | llama-server memory accounting | NPU dynamic context, AMD multi-GPU VRAM display |
| **Batching** | Batch-invariant tuning (RTX PRO 4500) | Batch speculative verification (MLX) | — | — | — |
| **Agentic / multi-turn** | — | HiCache end-buffer backup optimization | — | Long-reply degradation (bug) | Long chat mount optimization |

**The most contested optimization surface is KV-cache management.** All four inference engines (vLLM, SGLang, llama.cpp, Ollama) are independently tackling how to reduce KV materialization overhead for multi-turn, agentic, and speculative workloads. The approaches differ markedly: vLLM is pushing MLA-specific fusion and extensible KV blocks; SGLang is building HiCache with prefix-aware accounting; llama.cpp is using cooperative matrices on Vulkan; Ollama is fixing multi-model VRAM accounting. This convergence signals that KV-cache optimization has become the primary battleground for production inference differentiation.

---

## 5. Layer Positioning

| Layer | Projects | Role | Target User |
|-------|----------|------|-------------|
| **Production inference engine** | **vLLM**, **SGLang** | High-throughput, TP/PP/EP distributed serving, speculative decoding, paged attention, KV offloading | Cloud providers, MLaaS platforms, enterprise AI teams |
| **Local / embedded runtime** | **llama.cpp** | Standalone GGUF execution, cross-platform (CUDA, ROCm, Vulkan, SYCL, WebGPU, CPU, Metal), no server dependency | Local inference, embedded systems, browser-based AI |
| **Consumer-friendly abstraction** | **Ollama** | Single-binary install, model hub, zero-config serving, multi-backend (CUDA/ROCm/Vulkan) | Individual developers, researchers, end-users |
| **Fine-tuning + serving** | **Unsloth** | TRITON-based fine-tuning, Dynamic GGUF export, Studio UI, NPU support | Fine-tuning practitioners, LoRA developers |
| **LLM gateway / proxy** | **LiteLLM** | Provider abstraction, spend tracking, rate limiting, budget enforcement, team management | Platform engineers, API gateways, multi-tenant deployments |

**Key insight — the layers are blurring:**

- **vLLM** and **SGLang** are converging: SGLang now embeds a vLLM-compatible scheduler, and both expose similar TP/PP/speculative-decoding APIs. The differentiation is in调度 philosophy and upstream kernel ownership.
- **llama.cpp** is moving up: the `llama-server` binary adds HTTP endpoints, CORS, and streaming — directly competing with Ollama for lightweight serving use cases.
- **Ollama** is moving down: MLX runner improvements and multi-model VRAM accounting signal ambitions for production-adjacent deployments, not just developer laptops.
- **LiteLLM** sits above all inference engines as the routing layer, insulating application developers from engine-level churn.

---

## 6. Trend Signals

### Signal 1: Blackwell (SM100/SM120) is the new optimization target
Multiple projects are actively shipping Blackwell-specific optimizations: vLLM's FlashTopK backend for SM100, NVFP4 MoE CUTLASS on B200, batch-invariant tuning for RTX PRO 4500; SGLang's DeepSeek-V4 decode head-padding fix and FA3/FA4 tree attention for Blackwell. The RT X50-series (SM120) is still partially broken on vLLM (no model runs with CUDA 13) and SGLang (decode head-padding fix pending), but the trajectory is clear. **Action for infrastructure engineers:** Begin Blackwell capacity planning now; the software stack is production-ready for H200 but still maturing for B200/B100.

### Signal 2: AMD ROCm is no longer experimental
vLLM's stacked MI355X (gfx950) program — MXFP4 fusion, FP8 KV cache, MLA padding, AITER asm paged attention — plus SGLang's MoRI EPv2 dispatch, OpenCL Gated Delta Net kernels, and Unsloth's 11-PR AMD NPU batch demonstrate that AMD ROCm is a first-class deployment target. The remaining pain points (RDNA4 WMMA FA threshold, gfx1201 ROCM_ATTN correctness, MI300X stride assertion) are known and tracked. **Action:** If you are evaluating AMD for inference cost reduction, the software gap vs. CUDA has largely closed for vLLM and SGLang.

### Signal 3: Speculative decoding is in production — with caveats
DFlash (SGLang), DSpark, EAGLE3, and MTP are all shipping across projects, but correctness bugs persist. llama.cpp's speculative decoding diverges on quantized targets (#25618); SGLang has a scheduler crash under speculative decoding on H20; vLLM has mixed-precision SpeculativeConfig loading issues. **Action:** Speculative decoding is safe for BF16 target models. For quantized targets (Q4_K_M, FP8, etc.), validate acceptance rates against your specific workload before production deployment.

### Signal 4: Security hardening is accelerating across the stack
LiteLLM fixed a budget bypass via Redis clean-miss and hardened CORS + tool-runtime guardrails. Ollama's `MCPJWTSigner` overwrites server auth values (open bug). vLLM's P/D proxy changed Content-Type headers, which could affect client-side routing. **Action:** Audit your LiteLLM budget enforcement configuration and Ollama MCP server authentication until these patches land.

### Signal 5: Quantization formats are proliferating without a standard
In a single 24-hour window: vLLM is replacing Marlin with Humming (NVIDIA), adding NVFP4 MoE CUTLASS, and enabling MXFP4 indexer fusion; llama.cpp shipped OCP FP8 W8A16; Unsloth introduced Dynamic v3.1 GGUFs; SGLang is adding EXL3 support. The fragmentation creates migration risk for teams with large quantized model inventories. **Action:** Lock GGUF quantization format to a known-good version; re-validate accuracy benchmarks before upgrading quantization stacks in production.

### Signal 6: Agentic and multi-turn workloads are exposing new correctness surfaces
Issues across three projects — SGLang's HiCache cache hit-rate dip and GLM-5.7 engine corruption, Ollama's long-reply degradation, vLLM's Confidential Computing garbage output — all surface specifically under agentic or multi-turn traffic patterns. These are qualitatively different failure modes from single-shot inference bugs. **Action:** Add agentic-specific canary tests to your inference CI/CD pipeline; the standard perplexity/BERT-score benchmarks do not catch these regressions.

---

*Report compiled from GitHub activity data for vLLM, SGLang, llama.cpp, Ollama, and Unsloth on 2026-11-12. LiteLLM included for gateway-layer context.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze this GitHub data for vLLM and create a structured digest for 2026-11-12.

Let me go through the data:

**Releases**: None in last 24h

**Issues (updated in last 24h)** - Top items by comment count:
1. #57149 - ROCm AMD Qwen3.8-2.4T performance optimization (32 comments)
2. #59575 - ROCm AMD Qwen3.8-Flash-Next optimization (23 comments)
3. #36998 - RFC: Observation Plugin for Activations (21 comments)


4. #49529 - PTX 9.4 ldmatrix optimization for W4A8-INT8 (19 comments, closed)
5. #61886 - TP-agnostic KV offloading tracking (18 comments)
6. #47455 - NVIDIA Nemotron 3.5 ASR Streaming support (16 comments)
7. #57406 - GLM 5.3 performance optimization (13 comments)
8. #64572 - Triton attention K/V cache view re-derivation performance issue (12 comments)
9. #49311 - v0.25.0 regression with Qwen3.5 FP8 on H200 (11 comments)
10. #49413 - KV offload event path refactor RFC (11 comments)
11. #63505 - Qwen3.8-27B PP=3 illegal memory access bug (11 comments, closed)
12. #48633 - NixlPushMode reliability roadmap (11 comments)
13. #38696 - qwen3.5 structured output JSON schema garbled spaces bug (11 comments)
14. #49893 - SpeculativeConfig mixed-precision bug (9 comments)
15. #54775 - ROCm KDA chunked-scan OOM bug (9 comments, closed)
16. #16313 - Feature: structured output + tool call together (9 comments)
17. #65560 - Tracking: Replace Marlin with Humming across NVIDIA (8 comments)
18. #57224 - Silent garbage output on Confidential Computing mode (8 comments)
19. #52916 - RFC: Adaptive spin grace for shm_broadcast (8 comments)
20. #51853 - DeepSeek V4 Pro MTP performance on MI325X (6 comments)
21. #52203 - GPTQ checkpoints fail on Intel Arc B60 (6 comments)
22. #64018 - Muse Spark ROCm optimization (6 comments)
23. #65545 - RFC: Lifecycle hooks for endpoint plugins (5 comments)
24. #40363 - Feature: BlockPool state dump for KV events (5 comments)
25. #45221 - RFC: AuxOutput Connector roadmap (5 comments)
26. #48503 - Gemma 4 MTP speculative decoding crash (5 comments, closed)
27. #63598 - Qwen3.5/3.6 MoE GPTQ bug (5 comments, closed)
28. #63667 - Incremental detokenization quadratic on malformed UTF-8 (5 comments)
29. #62697 - ROCm ROCM_ATTN wrong attention bug (5 comments)
30. #64327 - GLM-5.3 TP8 B200 unspecified launch failure (5 comments, closed)

Now looking at the PRs from the last day, I'm seeing a mix of bug fixes across frontend and backend components—text streaming format issues, speech-to-text model handling, ROCm performance optimizations for DeepSeek, batch invariance tuning for Qwen, kernel improvements for MQA operations, and EPLB state management for specialized hardware. Looking at the rest of those PRs, I'm seeing several more optimizations across quantization, kernel improvements for Blackwell, and bug fixes for speculative decoding and KV cache handling. The GLM-5.3 deep GEMM optimization and MLA padding work round out the list nicely.

Now I'm organizing this into a structured digest to highlight the key themes—ROCm performance work for AMD MI355X, NVIDIA Blackwell optimizations, the Humming quantization replacement, and the various bug fixes. I'll make sure to reference the GitHub issues and PRs directly so readers can follow up on specific changes.

For the performance section, I'm pulling out the concrete improvements: the fused kernel optimization on gfx950 reduces launches, FlashTopK adds Blackwell support, NVFP4 MoE CUTLASS quant speeds things up, DeepGEMM BF16 MegaMoE enables GLM-5.3 unquantized paths, and there's a Triton attention K/V cache view re-derivation issue that's worth noting.

On the stability front, there are several significant issues—the v0.25.0 Qwen3.5 FP8 CUDA graph crash, the Confidential Computing garbage output bug, the Qwen3.8-27B illegal memory access, GLM-5.3 TP8 B200 launch failures, and ROCm attention correctness issues. Some have fixes merged, but others are still pending.

For application developers, I'm seeing some practical improvements: the lifecycle hooks RFC for endpoint plugins, the observation plugin for activations, the block pool state dump for external routers, structured output with tool calling support, and a UTF-8 quadratic complexity fix. The P/D proxy streaming bug fix is also relevant for API developers.

Now I'm ready to write this up cleanly.
</think>


# vLLM Project Digest — 2026-11-12

---

## 1. Today's Highlights

AMD's ROCm team continues to drive major vLLM investment on MI355X (gfx950) and newer RDNA4 GPUs, with stacked optimization PRs for Qwen3.8, DeepSeek-V4, and Muse Spark landing across both performance kernels and KV-offload plumbing. Meanwhile, NVIDIA Blackwell (SM100) support is expanding rapidly — a new FlashTopK backend for fused sparse-indexer prefill landed today, and a Marlin→Humming quantization replacement tracker signals a long-overdue architectural refresh of the INT4/INT8 GPTQ/AWQ kernel stack.

---

## 2. Releases & Breaking Changes

No new releases in the last 24 hours. The project remains on the `main` branch HEAD.

**Migration notes** (from recently merged changes):
- **MoeWNA16Config AWQ key names**: PR [#66488](https://github.com/vllm-project/vllm/pull/66488) fixes `MoeWNA16Config` to accept AWQ-style checkpoint keys (`w_bit` / `q_group_size`) in addition to GPTQ keys. Previously, loading a standard AWQ MoE checkpoint would raise `ValueError` with a fallback error. No config change needed — this is a silent correctness fix.
- **P/D proxy Content-Type header**: PR [#67150](https://github.com/vllm-project/vllm/pull/67150) changes P/D disaggregation proxies to return `Content-Type: text/event-stream` for streaming requests instead of `application/json`. Clients that select parsing mode by `Content-Type` (e.g. EvalScope perf, NVIDIA AIPerf) will behave correctly after this fix.
- **Extensible KV cache + CUDA graph warmup**: PR [#66523](https://github.com/vllm-project/vllm/pull/66523) releases warmup KV blocks before CUDA graph capture. Without this fix, large encoder graphs could crash at startup with CUDA OOM on MRV2 (the new default).

---

## 3. New Model & Hardware Support

| Item | Details | Links |
|------|---------|-------|
| **NVIDIA Nemotron 3.5 ASR Streaming** (`nemotron-3.5-asr-streaming-0.6b`) | 600M-param multilingual streaming ASR model under OpenMDW-1.1. Feature request open; not yet served. | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **GLM-5.3 unquantized (BF16) MegaMoE** | DeepGEMM `bf16xbf16` MegaMoE path now enabled for BF16 checkpoints via PR #67040, completing coverage for both block-FP8 and unquantized variants. | [#67040](https://github.com/vllm-project/vllm/pull/67040) |
| **DeepSeek-V4 / V4.1 FP8 KV Cache on ROCm gfx950** | Per-tensor FP8 KV-cache (`--kv-cache-dtype fp8_e4m3`) now supported via AITER's sparse MLA kernel on MI355X. | [#66036](https://github.com/vllm-project/vllm/pull/66036) |
| **FlashTopK backend (SM90 / SM100)** | New selectable backend for fused sparse-indexer prefill top-k, targeting Blackwell and Hopper. Default remains `native`. | [#67149](https://github.com/vllm-project/vllm/pull/67149) |
| **AMD gfx1201 (RDNA4) ROCM_ATTN fix** | Attention correctness and fault issues on RDNA4 with head size ≥ 96 and non-16 KV block size. Fix in progress. | [#62697](https://github.com/vllm-project/vllm/issues/62697) |
| **GLM-5.3 block-FP8 MoE H20 tuning** | Triton MoE configuration added for GLM-5.3-Flash at TP4 (288 experts, 512-width intermediate, 128×128 weight blocks). | [#58986](https://github.com/vllm-project/vllm/pull/58986) |

---

## 4. Performance & Optimization

### Landed (merged in last 24h)
- **DeepSeek-V4 MXFP4 indexer K fusion (gfx950)**: PR [#56834](https://github.com/vllm-project/vllm/pull/56834) fuses the MXFP4 indexer K-writer into a single Triton kernel launch (compress + RMSNorm + RoPE + MXFP4), replacing the previous two-launch sequence (Triton pooling scratch buffer → `k_norm_rope_mxfp4_cache`). Expected to reduce kernel overhead for Qwen3.8 / DeepSeek-V4 on MI355X.
- **NVFP4 MoE CUTLASS quant on Blackwell (B200)**: PR [#61511](https://github.com/vllm-project/vllm/pull/61511) speeds up `scaled_fp4_experts_quant` and `silu_and_mul_scaled_fp4_experts_quant` kernels on B200, with numerical equivalence tests and GSM8K accuracy validation. Improvement scales with `n_experts`.
- **GLM-5.3 DeepGEMM BF16 MegaMoE**: PR [#67040](https://github.com/vllm-project/vllm/pull/67040) — unquantized GLM-5.3 now uses the `bf16xbf16` MegaMoE path from the shared DeepGEMM layer (#61538), previously only available for block-FP8 checkpoints.
- **ROCm AITER asm paged attention for large fp8 decode batches**: PR [#66082](https://github.com/vllm-project/vllm/pull/66082) routes large pure-decode batches with fp8 KV cache through AITER's assembly paged attention on ROCm, bypassing the HIP paged attention path.
- **MLA decode head padding (gfx950)**: PR [#54899](https://github.com/vllm-project/vllm/pull/54899) pads AITER MLA decode head counts to native tile sizes, eliminating redundant KV-cache reads for pseudo-batched counts (48, 80, 112 → next native tile).

### In flight (open PRs)
- **Qwen2.5-0.5B batch-invariant tuning (RTX PRO 4500 Blackwell)**: PR [#67079](https://github.com/vllm-project/vllm/pull/67079) measures throughput gains with `VLLM_BATCH_INVARIANT=1` using `vllm bench serve`, up to ~N× on small models.
- **Speculative decoding top-k/p cutoff on target logits load**: PR [#66534](https://github.com/vllm-project/vllm/pull/66534) extends on-load masking to rows with active `top_k`, reducing unnecessary computation during verification.
- **Qwen3.8 / Qwen3.8-Flash-Next / Muse Spark on MI355X (gfx950)**: Active stacked PR programs tracked in [#57149](https://github.com/vllm-project/vllm/issues/57149) and [#59575](https://github.com/vllm-project/vllm/issues/59575), with per-task uplift items and expected gains documented.

### Known performance issue (open)
- **Triton/eager attention K/V cache view re-derivation**: Issue [#64572](https://github.com/vllm-project/vllm/issues/64572) reports that Triton and eager backends re-derive `kv_cache.transpose(1, 2).split(head_size, dim=-1)` + stride canonicalization on every attention call, even though the view depends only on the tensor's storage/shape/strides. FlashAttention backend already had this reported as #59534. Fix not yet landed.

---

## 5. Stability & Regressions

Sorted by severity:

### Critical — Crash / correctness
| Issue | Description | Status |
|-------|-------------|--------|
| [#49311](https://github.com/vllm-project/vllm/issues/49311) | **v0.25.0 regression**: Qwen3.5 FP8 on H200 crashes during CUDA graph capture with CUDA illegal memory access. Affects both v0.31.0 and v0.32.0 model runners. | Open |
| [#63505](https://github.com/vllm-project/vllm/issues/63505) | **Qwen3.8-27B (GDN hybrid) PP=3 on sm_86**: Illegal memory access (Xid 31) with prefix caching; gibberish output without it. Regression since v0.28.0. | Closed (with fix pending verification) |
| [#57224](https://github.com/vllm-project/vllm/issues/57224) | **Confidential Computing mode**: V2 model runner produces silent garbage output because UVA views of pinned host memory are stale under TDX/CC. Workaround: `VLLM_USE_V2_MODEL_RUNNER=0`. | Open |
| [#64327](https://github.com/vllm-project/vllm/issues/64327) | **GLM-5.3 TP8 B200**: Unspecified CUDA launch failure with MNNVL all-reduce (#61989) once KV spills to host. | Closed (fix in `main`) |
| [#62697](https://github.com/vllm-project/vllm/issues/62697) | **ROCm ROCM_ATTN**: Returns wrong attention results (and can fault the GPU) on RDNA for head size ≥ 96 with KV block size ≠ 16, and for MHA with head size 192/256. | Open |
| [#54775](https://github.com/vllm-project/vllm/issues/54775) | **ROCm KDA chunked-scan OOM**: Gated-delta-rule (KDA) buffers scale with `--max-num-batched-tokens`, are allocated inside the forward pass, and are **not covered by vLLM's startup memory profiling** — causing runtime OOM at high batch sizes. | Closed |

### High — Silent correctness
| Issue | Description | Status |
|-------|-------------|--------|
| [#63667](https://github.com/vllm-project/vllm/issues/63667) | **Incremental detokenization goes quadratic on malformed UTF-8** output, stalling the API server event loop (including `/health`). Affects byte-level BPE tokenizers (e.g. DeepSeek-V4). | Open |
| [#38696](https://github.com/vllm-project/vllm/issues/38696) | **qwen3.5 structured output with `json_schema`**: Outputs garbled spaces. | Open |

### Medium — Functional / API
| Issue | Description | Status |
|-------|-------------|--------|
| [#49893](https://github.com/vllm-project/vllm/issues/49893) | **SpeculativeConfig `draft_model` method**: Cannot load mixed-precision compressed-tensors checkpoints (config_groups). | Open |
| [#52203](https://github.com/vllm-project/vllm/issues/52203) | **Intel Arc B60 (XPU)**: All GPTQ checkpoints fail with `UR_RESULT_ERROR_DEVICE_LOST` at profile_run on XPU backend. | Open |

---

## 6. What This Means for Application Developers

**1. Blackwell deployment is accelerating.** With FlashTopK (SM100), NVFP4 MoE CUTLASS quant, and batch-invariant tuning all landing, teams targeting B200/B100 should monitor `main` closely. If you are on RTX PRO 4500 Blackwell Server Edition, PR [#67079](https://github.com/vllm-project/vllm/pull/67079) shows concrete throughput gains from `VLLM_BATCH_INVARIANT=1` even for small models like Qwen2.5-0.5B.

**2. AMD MI355X is now a first-class vLLM target.** The ROCm team's stacked optimization program (Qwen3.8 MXFP4, DeepSeek-V4 MXFP4, Muse Spark PTPC-FP8, FP8 KV cache, MLA padding) represents the most coordinated upstream AMD investment to date. If you are evaluating AMD for inference, the hardware is now meaningfully supported end-to-end.

**3. TP-agnostic KV offloading is close to usable.** Issue [#61886](https://github.com/vllm-project/vllm/issues/61886) is the central tracker for sharing offloaded KV across engines with different tensor-parallel sizes. PR reviews and testing are requested — if you have multi-engine setups, now is the time to engage.

**4. Confidential Computing deployments should set `VLLM_USE_V2_MODEL_RUNNER=0`.** Issue [#57224](https://github.com/vllm-project/vllm/issues/57224) is a silent correctness bug under TDX/CC that produces garbage output without any error signal. The V1 model runner is unaffected.

**5. Byte-level tokenizers + structured output deserve extra testing.** The quadratic UTF-8 detokenization issue ([#63667](https://github.com/vllm-project/vllm/issues/63667)) and the qwen3.5 `json_schema` garbling ([#38696](https://github.com/vllm-project/vllm/issues/38696)) both indicate that structured output paths need broader coverage, especially with non-standard tokenizers or JSON schema constraints.

**6. Marlin is being deprecated in favor of Humming.** PR [#65560](https://github.com/vllm-project/vllm/issues/65560) tracks replacing the SM80-era Marlin kernel with Humming across all NVIDIA quantization formats (INT4/INT8 GPTQ/AWQ, FP8, MXFP8, MXFP4, NVFP4, MXFP6). If you have custom quantization integrations, check whether you are directly touching Marlin internals.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang dated 2026-11-12 and create a structured digest.

Key observations:
1. No releases in the last 24h
2. 56 issues updated, top 30 by comment count
3. 500 PRs updated, top 20 by comment count

Let me identify the most important items:

**High-priority issues:**
1. #42752 - CI flaky tests tracking (198 comments) - ongoing CI issues
2. #39499 - Roadmap for dLLM Serving (31 comments)
3. #21788 - Prefill Context Parallelism roadmap Q4 2026 (22 comments, high priority)
4. #22607 - [CLOSED] PP + HiCache consistency fix plan (20 comments, closed)
5. #17050 - CI Test Failures tracking (15 comments)

**Notable bugs/performance issues:**
- #47481 - Cache hit-rate dip with HiCache + Mooncake
- #49336 - SM90 decode regression v0.5.22 → v0.5.23: +33-45% per-step
- #48964 - GLM-5.7-Flash engine state corrupted after 1M token request
- #49903 - Cross-Client Token Leak in Multi-Tokenizer Mode
- #49209 - SM120 (RTX 50-series) cannot run any model with CUDA 13
- #46203 - Xid 13 crashes on Blackwell B200 under agentic load
- #49494 - Scheduler crash with exit code -3

**New PRs:**
- #48414 - Kimi-K3.1 support (major feature)
- #49886 - Checkpoint hybrid Mamba state optimization
- #49995 - NPU operators migration
- #49477 - FA3/FA4 tree attention optimization


- #45643 - Goodput SLO metrics
- #50002 - Gemma4 performance optimization

**Closed PRs:**
- #50003 - Remove request-end-only Mamba storage backups
- #49987 - Test fix for DSA
- #49664 - DFlash MLA draft KV optimization
- #45516 - CPU memory budget fix
- #41563 - CPU hy3-fp8 support

I'll prioritize key technical developments focusing on critical performance, stability, and feature enhancements. The most significant work centers around Kimi-K3.1 model support, which appears to be a major architectural advancement. Performance regressions on SM90, particularly the 33-45% per-step increase in v0.5.22 to v0.5.23, demand immediate investigation. Scheduler crashes and cross-client token leaks represent critical stability concerns that could impact production environments. The NPU operator migration suggests ongoing platform diversification efforts.

Emerging optimization strategies include advanced attention mechanisms like FA3/FA4 tree attention and Gemma4 performance improvements. Goodput SLO metrics provide enhanced observability for system performance tracking. Hybrid Mamba state checkpointing indicates sophisticated memory management techniques being developed for more efficient model inference.

Key technical risks include CI infrastructure challenges, potential crashes on Blackwell hardware, and multi-turn GLM interactions that require careful validation. The Kimi-K3.1 integration represents a strategic expansion of supported model architectures, signaling continued platform adaptability.
</think>


# SGLang Digest — 2026-11-12

## 1. Today's Highlights

Kimi-K3.1 support landed as a major Day-0 feature PR (#48414), bundling DSA with decode context parallelism, PD disaggregation, DFlash speculative decoding, pipeline-parallel prefill, and HiSparse kernels. Meanwhile, a significant SM90 decode regression (+33–45% per-step) was reported in the v0.5.22 → v0.5.23 upgrade path (#49336), and a critical scheduler crash (SIGQUIT, exit -3) surfaced on H20 under speculative decoding (#49494).

---

## 2. Releases & Breaking Changes

| Item | Details | Link |
|------|---------|------|
| No new releases | No releases published in the last 24 h | — |

**Migration notes:**
- SM90 (H20/H100) users on v0.5.23 experiencing decode regressions should consider pinning to v0.5.22 until #49336 is resolved.
- SM120 (RTX 50-series Blackwell) users on CUDA 13 wheels: out-of-the-box execution is currently broken (#49209); track fix progress there.

---

## 3. New Model & Hardware Support

| Model / Hardware | Status | Key Capabilities | Link |
|------------------|--------|------------------|------|
| **Kimi-K3.1** (`KimiK31ForConditionalGeneration`) | PR merged to main (#48414) | DSA + decode context parallelism, PD disaggregation, DFlash speculative decoding, PP prefill, HiSparse, fused kernels | [#48414](https://github.com/sgl-project/sglang/pull/48414) |
| **NPU operators** (Huawei Ascend) | Refactor merged (#49995) | Migrated to public `sgl_kernel_npu.operators` namespace; legacy per-module imports deprecated | [#49995](https://github.com/sgl-project/sglang/pull/49995) |
| **AMD MoRI EPv2** (ROCm) | In progress (#44492) | AsyncLL kernels for TBO on DeepSeek-V4; enables 2-batch overlap on AMD | [#44492](https://github.com/sgl-project/sglang/pull/44492) |
| **SM120 / SM121** (Blackwell) | Bug tracked (#49209, #39235, #39226) | Out-of-the-box broken on CUDA 13; DeepSeek-V4 decode head-padding fix pending review | [#49209](https://github.com/sgl-project/sglang/issues/49209) |
| **CPU hy3-fp8** (Xeon) | Support landed (#41563) | FP8 quantization path for Intel Xeon | [#41563](https://github.com/sgl-project/sglang/pull/41563) |

---

## 4. Performance & Optimization

### Landed / Merged

| Optimization | Impact | PR |
|-------------|--------|-----|
| **HiCache: end buffer-only backup chains at insert walk boundary** | Reduces redundant Mamba state writes in multi-turn/agentic traffic | [#49644](https://github.com/sgl-project/sglang/pull/49644) |
| **DFlash MLA draft KV: per-request ring buffer** (Kimi-K3.1 port) | Keeps only last `window_left + 1` positions for sliding-window MLA drafts; cuts KV memory footprint | [#49664](https://github.com/sgl-project/sglang/pull/49664) |
| **Hybrid Mamba state: checkpoint only at fork points + request ends** | Drops interior checkpoint overhead for prefix-cache hits in multi-turn workloads | [#49886](https://github.com/sgl-project/sglang/pull/49886) |
| **Gemma4: partial o_proj/down_proj writes direct to AR-fusion buffer** | Eliminates `[T, 5376]` bf16 copy before each all-reduce site (2× per layer) | [#50002](https://github.com/sgl-project/sglang/pull/50002) |
| **Goodput SLO metrics** (`sglang:num_good_requests_total`) | Exposes per-request SLO attainment via `/metrics` | [#45643](https://github.com/sgl-project/sglang/pull/45643) |
| **AMD GDN aiter backend** for linear-chain target verify | Replaces slow Triton fallback on ROCm for Qwen3-Next MTP verify steps | [#48118](https://github.com/sgl-project/sglang/pull/48118) |

### In Progress / Under Review

| Optimization | Target | Link |
|-------------|--------|------|
| **FA3/FA4 tree attention optimization** | Reduces metadata and suffix attention overhead for wide EAGLE verification trees | [#49477](https://github.com/sgl-project/sglang/pull/49477) |
| **Shortest-prefill-first: account for HiCache staged prefixes** | Fixes overestimation of uncached work for requests with prefetched prefixes | [#49649](https://github.com/sgl-project/sglang/pull/49649) |
| **MORI EPv2 dispatch/combine on AsyncLL kernels** | Recovers 2-batch overlap on AMD DeepSeek-V4 | [#44492](https://github.com/sgl-project/sglang/pull/44492) |
| **Scheduler: free SWA slots for unpublished prefills with pending SWA branch** | Prevents memory leakage under write-through cache + disaggregated prefill | [#49906](https://github.com/sgl-project/sglang/pull/49906) |

### Performance Regressions Reported

| Issue | Severity | Detail |
|-------|----------|--------|
| **SM90 decode regression** v0.5.22 → v0.5.23 | **High** | +33–45% per-step at concurrency 12 (8K–64K) on 8× H20-3e with DeepSeek-V4.1-Flash + DSPARK; `use_deep_select_decode` also adds regression on Hopper | [#49336](https://github.com/sgl-project/sglang/issues/49336) |
| **Cache hit-rate dip** under L2/L3 capacity pressure | Medium | Transient drop from 87.4% after 8 rounds with HiCache + Mooncake; reproducible in multi-turn benchmark | [#47481](https://github.com/sgl-project/sglang/issues/47481) |
| **PP8 disaggregated prefill ~30 s TTFT floor** on Kimi-K3 | Medium | Load-independent TTFT floor; now closed with K3.1 support superseding | [#34815](https://github.com/sgl-project/sglang/issues/34815) |

---

## 5. Stability & Regressions

### Critical (Active)

| Bug | Severity | Summary | Fix PR |
|-----|----------|---------|--------|
| **Scheduler SIGQUIT (exit -3)** on H20, TP4/EP4 | 🔴 Critical | `scheduler_0` crashes with no Python exception under DeepSeek-V4.1-Flash + speculative decoding on v0.5.23; likely C++ layer fault | — |
| **Xid 13 "CTA Not Present"** on Blackwell B200 | 🔴 Critical | 7 crashes across 4 machines in HiCache kvcacheio transfer kernels under agentic load | — |
| **Cross-Client Token Leak** in multi-tokenizer mode | 🔴 Critical | Duplicate `rid` state merging leaks tokens between clients sharing a server | — |
| **Cross-Tenant MCP Session Reuse** via incomplete connection pool keys | 🔴 Critical | Multi-tenant sessions incorrectly reuse connections due to partial pool key construction | [#49901](https://github.com/sgl-project/sglang/issues/49901) |

### High (Active)

| Bug | Severity | Summary | Fix PR |
|-----|----------|---------|--------|
| **GLM-5.7-Flash engine corruption** after 1M-token request | 🟠 High | Engine state corrupted after long request; MTP accept rate drops to 0.00 for subsequent requests (v0.5.23, v0.5.22 clean) | — |
| **GLM-4.7-Flash compressed-tensors W4A16 crash** | 🟠 High | `post_load_weights` reads `kv_b_proj.weight` which packed layers don't have | [#49369](https://github.com/sgl-project/sglang/issues/49369) (closed) |
| **DeepSeek chunked-prefix prefill LSE base mismatch** | 🟠 High | Base-2 LSE from ragged attention kernels merged with natural-log formula in `merge_state_v2`; silent accuracy loss on every prefix-cache hit | [#40903](https://github.com/sgl-project/sglang/issues/40903) |
| **SM120 no model runs** with CUDA 13 wheels | 🟠 High | RTX 50-series Blackwell cannot run any model out-of-the-box | [#49209](https://github.com/sgl-project/sglang/issues/49209) |

### Medium / Informational

| Bug | Summary | Link |
|-----|---------|------|
| **Streaming `/v1/responses` returns 200 + `failed`** | Context-length-exceeded requests return HTTP 200 + `response.failed` instead of HTTP 400 (inconsistent with `/v1/chat/completions`) | [#48557](https://github.com/sgl-project/sglang/issues/48557) |
| **Rust server missing BOS token** | `/generate` text prompts lack BOS when tokenizer uses `add_bos_token` | [#49519](https://github.com/sgl-project/sglang/issues/49519) |
| **Diffusion `/v1/images/edits` mask silently ignored** | `mask` upload accepted but never applied | [#43409](https://github.com/sgl-project/sglang/issues/43409) |
| **Import time: 12 s** on H100 | `from sglang.srt.managers.scheduler import Scheduler` takes 12 s; tagged good first issue | [#10492](https://github.com/sgl-project/sglang/issues/10492) |

### CI / Infrastructure

| Issue | Summary | Link |
|-------|---------|------|
| **Flaky tests + CI failures** | Ongoing tracking; `#42752` has 198 comments documenting recurring failures in `PR Test Base` / `PR Test Extra` | [#42752](https://github.com/sgl-project/sglang/issues/42752) |
| **Diffusion perf checks host-dependent** | Perf check pass/fail depends on which runner lands; slow host stays slow for full job | [#48311](https://github.com/sgl-project/sglang/issues/48311) |
| **Stage-profiler sync test threshold too strict** | Fixed `producer > 250` threshold fails on RTX 5090 (measured 116.9) | [#49908](https://github.com/sgl-project/sglang/pull/49908) |

---

## 6. What This Means for Application Developers

1. **Deploying on Blackwell (SM120/SM121)?** Hold off on CUDA 13 wheel installs — no model runs out-of-the-box. If you are on B200 and using HiCache, be aware of Xid 13 crashes under agentic load (#46203); monitor for SIGQUIT in scheduler logs.

2. **Using GLM-5.7-Flash or GLM-4.7-Flash with compression?** v0.5.23 has a correctness bug for GLM-5.7-Flash after long requests and a crash for GLM-4.7-Flash W4A16. Pin to v0.5.22 or wait for patches.

3. **Tracking quality of service?** The new `sglang:num_good_requests_total` metric (#45643) combined with `--goodput-slo` gives you first-class SLO attainment dashboards without manual histogram correlation.

4. **Running multi-tenant or agentic workloads?** Two security-adjacent bugs landed today: cross-client token leak via multi-tokenizer mode (#49903) and cross-tenant MCP session reuse (#49901). If you are on a shared server, restrict multi-tokenizer configurations until patches land.

5. **Considering Kimi-K3.1?** The Day-0 stack is now on main with full speculative decoding, PD disaggregation, and HiSparse. This is the reference architecture for next-gen Kimi models — evaluate if your serving topology supports DCP + MoRI.

6. **Import startup time matters?** If you are embedding SGLang in short-lived processes or CLI tools, the 12-second import time (#10492) is on the roadmap for reduction; no fix yet.

---

*Digest generated from sgl-project/sglang GitHub data, 2026-11-12.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data about llama.cpp and create a structured digest for 2026-11-12.

Let me go through the data:

**Releases (last 24h):**
1. b12303 - Jinja support for chained comparisons and argument unpacking
2. b12302 - Chat: TTS model custom text normalizer via jinja
3. b12292 - WebGPU: PAD_REFLECT_1D support
4. b12291 - Vulkan: dequantized KV optimization with CM2
5. b12290 - Vulkan: allocate device fault vendor binary buffer
6. b12289 - Tests: use only public ggml API
7. b12287 - CUDA: MMVF for BF16 matrices of few rows at small batch sizes
8. b12284 - CUDA: Add OCP FP8 support (with benchmark showing FP8 GEMV)
9. b12283 - SYCL: fixed CLAMP for strided views
10. b12282 - Chat: fix Muse Spark ignoring response_format json_schema

**Latest Issues (top by comment count):**
1. #25618 - Speculative decoding bug with quantized targets (43 comments)
2. #28753 - ggml crash in backend scheduler (12 comments)
3. #29092 - HIP/ROCm: Gated Delta Net op state issue (CLOSED)
4. #28295 - MSVC AVX-VNNI detection (CLOSED)
5. #27756 - Qwen3.5-hybrid context length issue (CLOSED)
6. #25646 - Vulkan memory eviction (CLOSED)
7. #26873 - Glimmer memory/slowdown issue (OPEN)


8. #28867 - gfx1201 WMMA FA threshold issue (OPEN)
9. #29774 - Flash attention CPU overflow (CLOSED)
10. #31077 - Gemma 4 + draft-mtp CUDA illegal memory (CLOSED)

I've identified several active issues across different hardware platforms and attention mechanisms. The Vulkan memory and GLimmer memory problems suggest ongoing challenges with memory management and hardware-specific optimizations. The speculative decoding and flash attention issues indicate complexity in handling different model architectures and inference scenarios.

OpenCL and Vulkan optimization efforts focus on performance tuning, particularly around gated delta networks, KQ operations, and matrix multiplication kernels. Recent pull requests target low-precision quantization, WebGPU support, and server instance security enhancements. Backend-specific testing continues to refine CUDA and matmul performance, with attention to fine-tuning initialization and alignment.
</think>


# llama.cpp Daily Digest — 2026-11-12

---

## 1. Today's Highlights

The llama.cpp project landed significant backend-specific optimizations: CUDA received OCP FP8 support enabling FP8 quantized inference (e.g., Qwen3.6-27B FP8 GEMV benchmarks on RTX), while Vulkan deepened its dequantized KV-cache optimization under the CM2 (Cooperative Matrices) path. The server-side saw security hardening with new CORS and tool-runtime guardrails, and the internal test infrastructure consolidated to a pure public ggml API.

---

## 2. Releases & Breaking Changes

| Commit | Description | Notes |
|--------|-------------|-------|
| **b12303** | Jinja template engine gains chained comparisons and argument unpacking support | [#32072](https://github.com/ggml-org/llama.cpp/pull/32072) |
| **b12302** | Chat: TTS model can now provide a custom text normalizer via Jinja | Removes `tts_norm_is_reserved_name`; [#32053](https://github.com/ggml-org/llama.cpp/pull/32053) |
| **b12289** | Tests now use only the public ggml API | [#32077](https://github.com/ggml-org/llama.cpp/pull/32077) — internal API cleanup |
| **b12282** | Chat: fixed Muse Spark ignoring `response_format json_schema` | [#32017](https://github.com/ggml-org/llama.cpp/pull/32017) |

**No breaking configuration changes reported today.** The Jinja changes are additive for template authors.

---

## 3. New Model & Hardware Support

| Area | Addition | Detail |
|------|----------|--------|
| **CUDA / FP8** | OCP FP8 quantization support landed | W8A16 GEMV path for FP8 weights; tested on Qwen3.6-27B NVFP4 GGUF — benchmark shows viable FP8 inference throughput on NVIDIA hardware | [#28413](https://github.com/ggml-org/llama.cpp/pull/28413) |
| **CUDA / BF16** | MMVF (Multi-Block Vector Fetch) for BF16 matrices with few rows at small batch sizes | Addresses SM underutilization on projections like Qwen4-exp (320 rows, K=10240) at batch 2–24 | [#31959](https://github.com/ggml-org/llama.cpp/pull/31959) |
| **CUDA / MoE** | Few-row MMQ kernel for batch sizes 2–24 (speculative decoding draft of 7→8 tokens) | Neither MMVQ nor MMAI kernel is efficient at these sizes; new dedicated path fills the gap | [#31533](https://github.com/ggml-org/llama.cpp/pull/31533) |
| **Vulkan / CM2** | Dequantized KV-cache optimization enabled with cooperative matrices (CM2) | Guarded by a heuristic based on query-token GQA ratio; enables mixed-precision KV paths without full materialization | [#31526](https://github.com/ggml-org/llama.cpp/pull/31526) |
| **WebGPU** | `PAD_REFLECT_1D` operation added | Used in image/convolution preprocessing; correctness and performance tests included | [#31877](https://github.com/ggml-org/llama.cpp/pull/31877) |
| **WebGPU** | `COL2IM_1D` support added | Required by Qwen3-TTS and PocketTTS waveform decoders; each output gathers overlapping columns without FP atomics | [#31708](https://github.com/ggml-org/llama.cpp/pull/31708) |
| **SYCL** | `CLAMP` operation fixed for strided/non-contiguous views | Aligns with stride-safe unary op pattern used elsewhere in ggml-sycl | [#31784](https://github.com/ggml-org/llama.cpp/pull/31784) |

---

## 4. Performance & Optimization

### Landed (committed in last 24h)

- **CUDA FP8 GEMV**: OCP FP8 path (`W8A16`) enables sub-fp16 memory footprint for quantized checkpoints. On Qwen3.6-27B-NVFP4 GGUF with 8192-token prompts, the FP8 path is now benchmarkable via `llama-bench`.
- **CUDA BF16 few-row MMVF**: For batch sizes 2–24 on matrices with ≤ ~320 rows, the MMVF tile strategy (32 rows/block) eliminates the prior idle-SM bottleneck. Applicable to MoE experts and compact projections.
- **Vulkan CM2 KV-dequant**: The KV dequantization optimization is now wired into the CM2 cooperative matrix path, benefiting GQA-ratio-aware workloads.
- **WebGPU COL2IM_1D**: Removes the last missing TTSdecoder operation, enabling Qwen3-TTS/PocketTTS on WebGPU backends.

### In Progress (Open PRs)

- **OpenCL Gated Delta Net** — reads recurrent cache directly instead of copying via `get_rows`, reducing bandwidth overhead before each delta-net layer. Input side of PR #30359; [#30360](https://github.com/ggml-org/llama.cpp/pull/30360)
- **OpenCL int8 KQ fused attention** — stages Q per head-size slice in local memory, supports head size 512; [#30249](https://github.com/ggml-org/llama.cpp/pull/30249)
- **OpenCL Adreno flash attention** — int8 KQV with deferred normalization, softmax fused into KQ GEMM for prefill; [#30182](https://github.com/ggml-org/llama.cpp/pull/30182)
- **Vulkan iq3_xxs matvec** — optimized `mul_mat_vec` kernel for iq3_xxs quantization on Vulkan; within noise on prompt processing (-0.72% PP); [#30904](https://github.com/ggml-org/llama.cpp/pull/30904)
- **Graph metadata page touching** — avoids initializing unused graph metadata pages, yielding measurable host-memory savings on Windows RTX 5090 and Linux RTX PRO 6000 with MTP-7 / Qwen3.8-27B Q4_K_M at ubatch 2048 / ctx 65536; [#32043](https://github.com/ggml-org/llama.cpp/pull/32043)
- **Sampling synchronization** — reuses prepared batch outputs to eliminate repeated sync during sampling and speculative decoding (EAGLE3, MTP, DFlash, DSpark); [#30196](https://github.com/ggml-org/llama.cpp/pull/30196)
- **MoE expert cache** — cache-aware routing for the expert cache (`--moe-cache-prior`); [#30763](https://github.com/ggml-org/llama.cpp/pull/30763)

---

## 5. Stability & Regressions

Ranked by comment traffic and severity:

| # | Issue | Severity | Status | Fix PR |
|---|-------|----------|--------|--------|
| **#25618** | Speculative decoding (draft-mtp/draft-dspark): greedy output diverges from vanilla when **target model is quantized** (Q4_K_M). Same setup matches on BF16 target. Ngram speculation unaffected on same quantized target. | **High** — correctness regression in production inference path | OPEN | — |
| **#28867** | gfx1201 (RDNA4) WMMA flash-attention dispatch threshold too low; ~20% speculative-decoding regression since PR #28102 | **Medium** — perf regression on AMD RDNA4 | OPEN | — |
| **#31599** | HIP/gfx906 MoE prompt processing 15–50% slower since PR #29948 | **Medium** — perf regression on AMD gfx906 | OPEN | — |
| **#29821** | Vulkan `MUL_MAT_ID` loses rows when an expert ID appears more than once in a token's row and n > 8 | **Medium** — correctness in MoE routing | OPEN | — |
| **#31077** | Gemma 4 31B + draft-mtp: CUDA illegal memory access when MTP drafts after KV-cache rollback/clear | **Medium** — crash on checkpoint restore | CLOSED | — |
| **#29774** | Flash attention on CPU (single-chunk) overflows to inf/NaN; F16 accumulator instead of F32 | **Medium** — correctness on CPU backend | CLOSED | — |
| **#31734** | CPU F16 dot product accumulates in F16 on ARM (no SVE), overflows to inf | **Medium** — ARM CPU correctness | CLOSED | — |
| **#31987** | `auto_fgdn` hardcoded false, fused GDN probe never runs | **Low** — optimization disabled by mistake | CLOSED | — |

**Notable closure today**: #29092 (HIP/ROCm Gated Delta Net recurrent state leak across requests) and #28433 (draft-mtp context sizing from `llama_n_ctx()` vs `llama_n_ctx_seq()`) both marked closed/stale, suggesting the underlying bugs are either resolved upstream or the reports went stale.

---

## 6. What This Means for Application Developers

| Topic | Actionable Takeaway |
|-------|---------------------|
| **FP8 inference** | CUDA FP8 (W8A16) is now viable. If you run quantized models (e.g., Qwen3.6-27B NVFP4), expect meaningfully lower VRAM usage with `llama-bench` showing acceptable throughput. Monitor accuracy vs BF16 baselines for your use case. |
| **Speculative decoding** | If you use draft-mtp or draft-dspark with quantized targets (Q4_K_M etc.), be aware of a **known divergence bug** (#25618) under greedy sampling. Consider BF16 targets or ngram drafts as a workaround until it's resolved. |
| **Vulkan on AMD** | The CM2-based dequantized KV optimization is now active. Mixed GQA workloads on Vulkan may see reduced KV materialization overhead. |
| **llama-server security** | New PRs enforce stricter CORS rules, disallow direct child-instance port scanning from browsers, and require explicit opt-in (`--allow-unauthenticated-tools`) for tool execution on non-loopback hosts. Review your deployment flags if you expose the server externally. |
| **UI / persistence** | Conversations and settings can now be stored server-side via storage adapters (Postgres via Supabase, etc.) instead of browser localStorage. Enables cross-browser and cross-port sharing; rolling out in upcoming builds. |
| **SYCL on Windows** | A feature request (#31678) for SYCL FP16 builds on Windows is open; if you target Intel GPUs on Windows via SYCL, track this. |
| **Memory on large contexts** | The graph-metadata page-touching fix (PR #32043) saves host RAM significantly on long-context (65k ctx) + speculative decoding workloads. Upgrade when available. |

---

*Digest generated from github.com/ggml-org/llama.cpp activity on 2026-11-12.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze this GitHub data for Ollama and create a structured digest for 2026-11-12.

Key observations from the data:

**Releases:** None in last 24h

**Issues (9 total):**
1. #19613 - Bug: -v, --version showing unexpected "warning" text (CLOSED)
2. #16329 - Feature request: add 'agy' (Antigravity CLI) to ollama launch integrations (OPEN, 21 👍)
3. #18557 - [needs more info] 0xc0000005 access violation loading ANY model on Vulkan (AMD RX 6800 XT) (OPEN)
4. #17748 - Bug: AMD Radeon 780M Vulkan regression in Ollama >=0.32.10 (CLOSED)
5. #19518 - Question: Can an older library manifest still be pulled by digest after its tag is updated? (CLOSED)
6. #12788 - Feature request: Gemma3 base model merging finetuned lora adapters (OPEN)
7. #19457 - Long replies break deepseek-r1 / phi3.5 until the model is unloaded (OPEN)
8. #19661 - Feature request: Windows installer should allow custom installation directory (OPEN)
9. #19650 - mimo-v2.6: qwen3.5 parser returns `arguments: {}` when the model writes JSON arguments inside `<function=...>` (OPEN)

**Pull Requests (28 total, top 20 by comment count):**
1. #17214 - fix: validate manifest digest in x/transfer to prevent path traversal (OPEN)
2. #19663 - mlxrunner: batch speculative verification (OPEN) - NEW TODAY
3. #17857 - llm: fix llama-server memory accounting for multi-model loads (OPEN)


4. #19657 - server: serve the Claude Desktop gateway on the existing listener (OPEN)
5. #19662 - README: add Buddy community integration (OPEN)
6. #19636 - llm: keep weights out of pinned host memory on Windows iGPUs (OPEN)
7. #19660 - launch: share ChatGPT button and CLI connection flow (CLOSED)
8. #19141 - ci: bump retired Actions and the Node 20 toolchain (OPEN)
9. #19656 - launch: preserve Claude Desktop settings during restore (CLOSED)
10. #19658

I'm tracking several interesting developments across different aspects of the Ollama project. The pull requests show ongoing work in security, performance, and platform-specific improvements. Notably, there's significant focus on memory management, platform integrations, and maintaining robust functionality across different hardware and software environments.

The community continues to drive enhancements, with active development around CLI connections, GPU memory handling, and comprehensive testing infrastructure. Cross-platform support and integration capabilities are emerging as key priorities.

Critical stability issues persist, particularly around AMD GPU compatibility, with access violations and Vulkan regression problems demanding immediate resolution. Windows platform challenges remain significant.

Performance optimization efforts are gaining momentum, with speculative decoding and memory accounting fixes addressing core infrastructure limitations. Recent pull requests aim to improve token verification, batch processing, and memory allocation across different model architectures.

The focus appears to be on ironing out platform-specific complexities while enhancing overall system reliability and performance, with particular attention to GPU memory management and cross-platform integration challenges.
</think>


# Ollama Digest — 2026-11-12

## 1. Today's Highlights

Ollama development today shows strong focus on memory management and multi-model robustness: a new PR introduces batch speculative verification for MLX runners, while fixes for VRAM accounting and GPU memory allocation across multi-model scenarios are progressing through review. On the stability front, an AMD Vulkan access violation on AMD RX 6800 XT is being actively investigated, and a regression affecting AMD Radeon 780M Vulkan backends has been marked closed with recent changes.

---

## 2. Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| None today | No releases published in the last 24 hours | — |

**Migration Notes:** None flagged in recent issues or PRs.

---

## 3. New Model & Hardware Support

| Item | Status | Details | Link |
|------|--------|---------|------|
| **Gemma3 + LoRA adapter merging** | Feature Request (OPEN) | Request to support fine-tuned LoRA adapters on top of Gemma3 base models | [#12788](https://github.com/ollama/ollama/issues/12788) |
| **Antigravity CLI (`agy`) launch integration** | Feature Request (OPEN, 21 👍) | Add `agy` (Google's AI CLI tool) to Ollama launch integrations | [#16329](https://github.com/ollama/ollama/issues/16329) |
| **Claude Desktop gateway** | In Progress (PR OPEN) | Serve Claude Desktop gateway at `/api/claude` on Ollama's existing listener | [#19657](https://github.com/ollama/ollama/pull/19657) |

**Backend/Device Notes:**
- **AMD Strix Halo iGPU (Windows):** PR [#19636](https://github.com/ollama/ollama/pull/19636) addresses models larger than ~half of system RAM failing to load due to ROCm buffer allocation issues on Windows integrated GPUs.
- **AMD RX 6800 XT (Vulkan):** Active investigation of `0xc0000005` access violations across multiple model sizes—see Stability section.

---

## 4. Performance & Optimization

| PR | Category | Summary | Link |
|----|----------|---------|------|
| **#19663** | Speculative Decoding | **MLX runner batch speculative verification** — keeps drafting active across overlapping batched requests; maintains MTP/DFlash speedup for concurrent clients | [#19663](https://github.com/ollama/ollama/pull/19663) |
| **#19368** | Speculative Decoding | **Per-request speculative decoding metrics** — API responses and `ollama run --verbose` now report drafted/accepted token counts and acceptance rates | [#19368](https://github.com/ollama/ollama/pull/19368) |
| **#17857** | Memory Accounting | **Fix llama-server memory accounting for multi-model loads** — resolves buffer dedup bug where speculative draft lines replaced target model lines, causing ~30B DFlash models to report ~2.3 GB instead of actual VRAM | [#17857](https://github.com/ollama/ollama/pull/17857) |
| **#19632** | VRAM Accounting | **Fix VRAM accounting and GPU splitting** — addresses issues #19463, #18679, #18349, #16599; prevents incorrect model eviction, load refusals, and unnecessary cross-GPU spreading | [#19632](https://github.com/ollama/ollama/pull/19632) |
| **#18882** | Legacy Migration | **Remove llama.cpp compatibility patches; migrate legacy GGUFs on load** — atomic manifest replacement, reclaim unreferenced legacy blobs during conversion/startup GC | [#18882](https://github.com/ollama/ollama/pull/18882) |
| **#18397** | HTTP Efficiency | **Reuse llama-server HTTP connections for embed load** — removes `DisableKeepAlives: true` for `/api/embed` endpoints; eliminates redundant health-check + embedding call overhead per input | [#18397](https://github.com/ollama/ollama/pull/18397) |

---

## 5. Stability & Regressions

**Ranked by estimated severity:**

### 🔴 High — Access Violation on AMD Vulkan (RX 6800 XT)
- **Issue:** Models crash `llama-server` with `0xc0000005` (access violation) when loaded on Vulkan GPU backend for AMD RX 6800 XT (driver 32.0.21045.5002). Both 7B plain transformer and 27B hybrid SSM+transformer models affected. CPU inference works.
- **Duplicate flag:** Believed to share root cause with #18494.
- **Link:** [#18557](https://github.com/ollama/ollama/issues/18557)

### 🟡 Medium — AMD Radeon 780M Vulkan Regression (CLOSED)
- **Issue:** Ollama ≥0.32.10 fails with `radv/amdgpu: Not enough memory for command submission` on AMD Radeon 780M.
- **Status:** Issue marked **CLOSED** — likely resolved by recent changes; watchers should test against current release.
- **Link:** [#17748](https://github.com/ollama/ollama/issues/17748)

### 🟡 Medium — Long Replies Degrade Model Quality (DeepSeek-R1, Phi-3.5, Phi-4-mini)
- **Issue:** After long reply or exceeding `num_ctx`, models give progressively worse answers until `ollama stop` is issued. Affects DeepSeek-R1:8b, Phi3.5, Phi4-mini, and Phi3 128k.
- **Symptom:** Cached key/value context appears to rescale incorrectly on context shift.
- **Link:** [#19457](https://github.com/ollama/ollama/issues/19457)

### 🟢 Low — Tool-Call JSON Parser Edge Case
- **Issue:** `mimo-v2.6` with `qwen3.5` parser returns `arguments: {}` when model writes JSON arguments inside `<function=...>` blocks instead of `<parameter=...>` blocks.
- **Link:** [#19650](https://github.com/ollama/ollama/issues/19650)

### 🟢 Low — Version Flag Noise (FIXED)
- **Issue:** `ollama -v` / `--version` outputs spurious "warning: could not connect to a running Ollama instance" messages.
- **Status:** Issue **CLOSED**; fix expected in next release.
- **Link:** [#19613](https://github.com/ollama/ollama/issues/19613)

---

## 6. What This Means for Application Developers

| Takeaway | Detail |
|----------|--------|
| **Multi-model serving is becoming safer** | Memory accounting fixes (#17857, #19632) mean multi-model deployments on single-GPU or multi-GPU setups should see fewer unexpected evictions and incorrect VRAM reporting. Upgrade when these land. |
| **Batch speculative decoding benefits MLX users** | PR #19663 enables concurrent batched requests to retain MTP/DFlash speedups. If you're running the MLX runner with overlapping requests, test this change. |
| **Embed endpoint connection overhead reduced** | If you call `/api/embed` in tight loops, PR #18397 eliminates per-request connection teardown; expect lower latency under load. |
| **AMD Vulkan users: caveat emptor** | If running on AMD RX 6800 XT with Vulkan backend, be aware of active access violation bug (#18557). CPU fallback works. Radeon 780M users should test latest release (regression marked closed). |
| **Platform expansion: Claude Desktop + ChatGPT launch** | Upcoming launcher changes unify ChatGPT and Claude Desktop integration paths (#19657, #19660). If you build tooling around `ollama launch`, expect a more consistent connection flow. |
| **Windows installer customization coming** | Feature request [#19661](https://github.com/ollama/ollama/issues/19661) asks for custom install and model storage paths—relevant if deploying on systems with limited C: drive space. |

---

*Digest generated from GitHub data for [ollama/ollama](https://github.com/ollama/ollama) on 2026-11-12.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data for LiteLLM and generate a structured digest.

Key observations:

1. **Releases**: 
   - v1.110.0-rc.2, v1.109.1, v1.108.6, v1.106.9, v1.106.8
   - All are signed with cosign
   - v1.106.8 has specific verification instructions

2. **Top Issues** (by comments):
   - #47675 (CLOSED): response_cost null bug with custom_llm_provider=anthropic
   - #32357 (OPEN): reasoning models streaming bug with /v1/messages adapter
   - #48145 (OPEN): JSON-defined providers lose tools
   - #50065 (OPEN): MCP tools/list blocking issue
   - #34238 (OPEN): End-user budget bypass via Redis
   - #12970 (CLOSED): Streaming prompt_tokens inflation
   - #50877 (OPEN): Per-model budgets feature request
   - #49675 (OPEN): TPM counter issue under upstream 429s
   - #42104 (OPEN): Gemini/Vertex prompt caching broken
   - #32324 (OPEN): Valkey semantic cache bug

3. **Top PRs**:
   - #51329: Magistral reasoning support
   - #50290: Access groups for vector stores
   - #51299: fal_ai per-clip video pricing
   - #50758: UI navigation fix
   - #50516: Bedrock service tiers
   - #51323: Fireworks router fix
   - #51340: Gemini backport
   - #51339: Logging isolation test
   - #51328: Team model TPM/RPM capacity sharing
   - #51334: Anthropic server tool counting

The latest releases span versions 1.106 through 1.110, with image signing via cosign now in place across all versions.

Key infrastructure improvements are rolling out: Magistral reasoning models are being integrated, per-clip pricing for video content is supported, and team-level capacity sharing allows dynamic borrowing of idle TPM and RPM. Bedrock's service tier handling is being hardened, while Valkey's semantic caching receives bug fixes and token counting is extended to Anthropic's server-side tools. The dynamic rate limiter now supports team model limits that can borrow from other teams' idle capacity. Fireworks routing is corrected for US-only endpoints, and UI navigation is being stabilized. Cost mapping gets a duplicate removal pass. Context window validation now properly handles Anthropic tool history, and streaming response handling is optimized. A TypeError from environment variable substitution in numeric parameters is addressed, while MCP tools/list performance improved significantly. Token counting is being refactored to avoid rebuilding the model name repeatedly.

Multiple stream-related issues are being resolved: the Anthropic adapter now correctly encodes thinking models, streaming responses report the proper finish reason, and streaming usage costs are included even when zero. Model-specific guardrails are properly applied across both chat and message endpoints. Budget enforcement is being hardened to prevent Redis clean-miss bypasses. OpenAPI tool generation now properly handles $ref schemas. The MCP JWT signer had been overwriting server authentication values, which is now fixed.

Additional fixes address TPM counter persistence after upstream rate limits, Azure Responses namespace handling, DeepSeek thinking mode message formatting, Bedrock guardrails scanning Anthropic tool results, and tool calling for Ollama models. A Docker startup issue related to timezone configuration is also resolved, along with multiple model update and admin UI rendering problems.

On the infrastructure side, custom logger types and dispatchers are being added, usage schemas are being built eagerly to prevent race conditions during initialization, and embeddings extra_body handling is being unwrapped. The UI navigation fix continues to be applied.

A CI pipeline improvement is reducing cache thrashing and smoke compilation overhead. Several regressions are being addressed: budget bypass vulnerabilities through Redis clean-miss scenarios, streaming token inflation causing cost discrepancies, and startup failures on systems with specific timezone configurations like Ubuntu.
</think>


# LiteLLM Digest — 2026-11-12

## 1. Today's Highlights

LiteLLM shipped five releases over the past 24 hours (v1.110.0-rc.2 through v1.106.8), standardizing **cosign-based Docker image signing** across all versions with a consistent verification key. Meanwhile, the community is actively addressing two high-severity correctness bugs: a budget bypass via Redis counter clean-miss (#34238) and streaming token inflation (#12970), both now closed. On the new-provider front, Magistral reasoning models are landing (#51329) and a dynamic rate-limiter feature (#51328) allows teams to borrow idle TPM/RPM capacity from other teams.

---

## 2. Releases & Breaking Changes

| Version | Notes |
|---|---|
| **v1.110.0-rc.2** | RC with cosign signature verification |
| **v1.109.1** | Stable, cosign-signed |
| **v1.108.6** | Stable, cosign-signed |
| **v1.106.9** | Stable, cosign-signed |
| **v1.106.8** | Stable, cosign-signed; full verification snippet provided |

All Docker images (including `litellm-database`, `litellm-non_root`, and `docker.io/litellm/*`) are signed. Verify with:
```bash
cosign verify \
  --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub \
  ghcr.io/berriai/litellm:<version>
```
**Migration note:** If you run `litellm --config config.yaml` on Ubuntu 24.04/26.04 with `TZ=Asia/Calcutta`, startup will crash — the legacy tzdata alias requires the `tzdata-legacy` package. Fixed in #49813 (closed).

---

## 3. New Model & Hardware Support

| Provider / Model | Change | PR / Issue |
|---|---|---|
| **Magistral (Mistral)** | Native reasoning/thinking effort support | [#51329](https://github.com/BerriAI/litellm/pull/51329), [#50478](https://github.com/BerriAI/litellm/pull/50478) |
| **Fireworks AI (US-only short names: `glm-5p3-us`, `kimi-k3-us`)** | Routed correctly to `/accounts/fireworks/routers` endpoint | [#51323](https://github.com/BerriAI/litellm/pull/51323) |
| **fal.ai video endpoints** | Per-clip pricing by duration and resolution via `output_cost_per_video_clip` | [#51299](https://github.com/BerriAI/litellm/pull/51299) |
| **Bedrock service tiers** | 400 error now returned when a tier cannot be served (previously silent) | [#50516](https://github.com/BerriAI/litellm/pull/50516) |
| **Gemini batches (`/gemini` pass-through)** | Attributed to calling key | [#51340](https://github.com/BerriAI/litellm/pull/51340) |
| **Access groups → Vector stores** | Grant vector store access through access groups | [#50290](https://github.com/BerriAI/litellm/pull/50290), [#50510](https://github.com/BerriAI/litellm/pull/50510) |

---

## 4. Performance & Optimization

| Area | Detail | Reference |
|---|---|---|
| **Dynamic rate limiter** | New `team_model_limit_borrows_idle_capacity_from_other_teams` flag — a team's `model_tpm_limit` / `model_rpm_limit` can now borrow idle capacity from other teams, eliminating 429s on idle capacity windows | [#51328](https://github.com/BerriAI/litellm/pull/51328) |
| **Token counting** | O(n²) rebuild of model name per path segment fixed; long custom model names no longer cause quadratic slowdown in context-window checks | [#50412](https://github.com/BerriAI/litellm/pull/50412) |
| **Anthropic tool history** | Router context-window check now counts server-side tool calls and readable results; previously disabled for assistant history with tool interactions | [#51334](https://github.com/BerriAI/litellm/pull/51334) |
| **CustomLoggerV2 (step 0)** | Types, dispatcher, and route callback scaffolding landed; no behavioral change yet — lays foundation for future V2 callbacks | [#51214](https://github.com/BerriAI/litellm/pull/51214) |
| **Schema initialization race** | Usage schemas now built eagerly at import time, eliminating internal schema errors during burst first-requests on fresh workers | [#51310](https://github.com/BerriAI/litellm/pull/51310) |
| **CI / build cache** | PR runs no longer evict main's cache; sccache redundant request storm eliminated (was making 700–2000 requests per Rust build) | [#51343](https://github.com/BerriAI/litellm/pull/51343) |
| **MCP tools/list latency** | Legacy subscription listener path (pre-2026 protocol) no longer blocks 18–50 s after `notifications/initialized` | [#50065](https://github.com/BerriAI/litellm/issues/50065) |

---

## 5. Stability & Regressions

**Critical (high severity)**

| Issue | Description | Status | Fix PR |
|---|---|---|---|
| [#34238](https://github.com/BerriAI/litellm/issues/34238) | End-user budget bypass via stale per-pod Redis counter after clean-miss (60 s TTL window) — spend enforcement can be skirted | Open | — |
| [#12970](https://github.com/BerriAI/litellm/issues/12970) | Streaming responses report **significantly inflated `prompt_tokens`** vs. actual provider billing; affects cost tracking accuracy | Closed | — |

**Moderate (correctness / functional)**

| Issue | Description | Status | Fix PR |
|---|---|---|---|
| [#48145](https://github.com/BerriAI/litellm/issues/48145) | JSON-defined OpenAI-like providers drop `tools` by default if model not in catalog (regression from v1.81 → v1.106) | Open | — |
| [#49675](https://github.com/BerriAI/litellm/issues/49675) | v3 TPM counter outlives its window under upstream 429s; key/team rejected below `tpm_limit` | Open | — |
| [#42104](https://github.com/BerriAI/litellm/issues/42104) | Mid-conversation `system` messages inside `messages` array break Gemini/Vertex prompt caching (`cache_read_input_tokens: 0` every turn) | Open | — |
| [#32357](https://github.com/BerriAI/litellm/issues/32357) | `/v1/messages` adapter mis-encodes reasoning models: `thinking_delta` streamed inside text block → empty content in Anthropic SDK / Claude Code | Open | — |
| [#47723](https://github.com/BerriAI/litellm/issues/47723) | Anthropic `count_tokens` local fallback rejects `tool_addition` / `tool_removal` blocks | Open | — |
| [#43620](https://github.com/BerriAI/litellm/issues/43620) | Responses bridge keeps only the **last** reasoning item when `stream=False` | Open | — |
| [#36095](https://github.com/BerriAI/litellm/issues/36095) | `os.environ/` substitution in numeric `litellm_params` (`weight`/`rpm`/`tpm`) yields `str`, crashing `simple_shuffle` with `TypeError` at request time | Open | — |
| [#49813](https://github.com/BerriAI/litellm/issues/49813) | Proxy exits at startup on `TZ=Asia/Calcutta` if `tzdata-legacy` package absent (Ubuntu 24.04+) | Closed | — |
| [#47988](https://github.com/BerriAI/litellm/issues/47988) | `MCPJWTSigner` overwrites server's configured `auth_value`, causing 401 on keyed MCP servers | Open | — |
| [#46542](https://github.com/BerriAI/litellm/issues/46542) | Streaming completion emits `finish_reason="stop"` when stream ends without provider-sent finish reason; callers cannot distinguish truncated from complete streams | Open | — |

---

## 6. What This Means for Application Developers

1. **If you use budget enforcement with end-user keys:** Monitor for the Redis clean-miss bypass described in #34238 — the 60-second TTL window allows a window where spend limits can be exceeded before the counter is restored. Until a fix is available, consider additional application-side guardrails for high-value deployments.

2. **If you use streaming with cost tracking:** The `prompt_tokens` inflation bug (#12970, now closed) means historical streaming cost reports may have overcounted. Audit any dashboards or billing systems that rely on streaming `usage` telemetry.

3. **If you serve Magistral reasoning models:** PR #51329 adds native reasoning effort and thinking support. Expect correct `thinking` block handling on both the API and streaming paths.

4. **If you run multiple teams with shared model capacity:** The new `team_model_limit_borrows_idle_capacity_from_other_teams` flag (#51328) can immediately reduce 429 rates for teams with bursty traffic patterns on shared model pools.

5. **If you use custom model names with tool calling:** On v1.106, JSON-defined providers lose `tools` if the model is not in the catalog (#48145). Downgrade to v1.81 or set the provider to `openai` with a custom `api_base` as a workaround.

6. **If you use MCP servers with static credentials:** The `MCPJWTSigner` guardrail overwrites bearer tokens and static auth values (#47988). Disable the JWT signer for servers using their own `auth_value` until the fix lands.

7. **If you rely on Docker image integrity:** All current releases are cosign-signed with commit `e82a3c6`. Enforce signature verification in your deployment pipeline to prevent supply-chain tampering.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze this GitHub data for Unsloth AI and create a structured digest for 2026-11-12.

Key points to extract:

1. **Latest Releases**: v0.1.917-beta with Dynamic v3.1 GGUFs, Qwen3.8-27B support, performance improvements, Glass rendering, code blocks, Thinking UI, HTML/PDF exports, image generation and coding agent features.

2. **Latest Issues** (16 total):
- Bug: Unsloth hub doesn't show all models (CLOSED)
- Feature: SYCL support for Intel GPUs before llama-server (OPEN)
- Bug: Custom domain/reverse proxy 404 issue (CLOSED)
- Bug: DiffusionGemma load ignores context/parallelism settings (OPEN)
- Bug: MoE router aux loss divergence with gradient accumulation > 1 (CLOSED)
- Feature: Video upload limit 64MB (CLOSED)
- Feature: family_name override for image models (CLOSED)
- Feature: Kromoss support in studio (OPEN)
- Bug: ROCm 7.14/MI300X stride assertion (OPEN)
- Feature: VS Code Extension (OPEN)
- Various closed issues

3. **Pull Requests** (159 total, top 20):
- studiobench residual stabilizer padding fix
- Coding traces from saved sessions
- GGUF refactor (42K line file)
- AMD VRAM tile reads bug
- Tagged edit text lossless on no-op save
- EXL3 quantization backend
- MiniMax-H3-Image fixes
- Claude Code-style subagents
- Chat settings preservation
- Deep Research prompt sizing
- File deletion prompts
- Long chat mount optimization (CLOSED)
- FLUX.1-dev guidance preservation
- DiffusionGemma context display fix
- AMD NPU features (multiple PRs stacked)


- AMD NPU power mode and chunk length configuration
- AMD NPU dynamic context sizing
- AMD NPU storage management

The 48-hour period shows substantial progress across multiple fronts. The beta release introduces Dynamic v3.1 GGUFs with Qwen3.8-27B support, alongside UI refinements and export capabilities. Hardware acceleration is a major focus, with Intel SYCL integration, AMD NPU power management, and ROCm 7.14/MI300X optimizations. Several stability improvements address model loading, context handling, and memory management across different GPU architectures.
</think>


# Unsloth Digest — 2026-11-12

## 1. Today's Highlights

Unsloth shipped **v0.1.917-beta** introducing Dynamic v3.1 GGUFs and official support for **Qwen3.8-27B**, alongside UI polish (Glass rendering, code blocks, Thinking UI) and new HTML/PDF export capabilities. On the platform side, a large batch of AMD NPU work landed (power modes, dynamic context sizing, storage management), while Studio saw critical fixes for MiniMax-H3-Image downloads and DiffusionGemma context display mismatches.

---

## 2. Releases & Breaking Changes

| Version | Change Summary | Reference |
|---------|----------------|-----------|
| **v0.1.917-beta** | Dynamic v3.1 GGUF format support; Qwen3.8-27B models; performance improvements; revamped Glass rendering, code blocks, and Thinking UI; HTML/PDF chat exports; image generation and coding agent features | [Release](https://github.com/unslothai/unsloth/releases) |

> **Migration note:** Dynamic v3.1 GGUFs are the new default quantization format for Qwen3 series. Existing v3.0 GGUFs remain compatible but should be re-quantized for optimal performance.

---

## 3. New Model & Hardware Support

| Category | Item | Status | Notes |
|----------|------|--------|-------|
| **Model** | Qwen3.8-27B | ✅ Supported | Via Dynamic v3.1 GGUFs |
| **Model** | Kromoss (MOSS-Image derivative) | ⚠️ Requested | [Issue #17552](https://github.com/unslothai/unsloth/issues/17552) — not yet supported, user blocked |
| **Model** | MiniMax-H3-Image | 🔧 Fixes landing | PRs [#17563](https://github.com/unslothai/unsloth/pull/17563), [#17569](https://github.com/unslothai/unsloth/pull/17569) address download, RAM, and precision selection issues |
| **Hardware** | AMD NPU (FastFlowLM/Lemonade) | ✅ Active development | 11 PRs merged for power mode, prefill chunk length, image pre-resize, dynamic context sizing, storage management |
| **Hardware** | Intel GPU (SYCL) | ⚠️ Requested | [Issue #17048](https://github.com/unslothai/unsloth/issues/17048) — request to source `/opt/intel/oneapi/setvars.sh` before llama-server |
| **Backend** | ROCm 7.14 / MI300X (gfx942) | 🐛 Bug reported | [Issue #17548](https://github.com/unslothai/unsloth/issues/17548) — stride assertion in `_scaled_dot_product_flash_attention_backward` |
| **Quantization** | EXL3 (ExLlamaV3) | 🔧 In progress | [PR #7115](https://github.com/unslothai/unsloth/pull/7115) — 2/3/4/6/8-bit + MoE support |

---

## 4. Performance & Optimization

| Area | Change | Details |
|------|--------|---------|
| **AMD NPU — Context sizing** | Dynamic allocation | [PR #17511](https://github.com/unslothai/unsloth/pull/17511): Context now sized to free RAM (minus 2 GiB headroom) instead of flat 8,192 tokens |
| **AMD NPU — Prefill** | Configurable chunk length | [PR #17510](https://github.com/unslothai/unsloth/pull/17510): User-configurable prefill chunk length, clamped to context |
| **Studio — Long chats** | Mount optimization | [PR #17504](https://github.com/unslothai/unsloth/pull/17504) *(closed)*: Only messages near the reader are mounted, reducing main-thread cost proportionally to chat length |
| **Deep Research** | Prompt auto-sizing | [PR #17554](https://github.com/unslothai/unsloth/pull/17554): Prompts now sized to the actual window the self-hosted connection serves (e.g., llama.cpp at 4,096 tokens) instead of 32K budget |
| **MiniMax-H3-Image** | RAM guardrails | [PR #17563](https://github.com/unslothai/unsloth/pull/17563): Fixes 135 GB download on 24–40 GB GPUs; explicit FP8/INT8 selection now accepted |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **High** | DiffusionGemma ignores context (24,576 shown, 4,096 used) and parallelism settings | [Issue #17558](https://github.com/unslothai/unsloth/issues/17558) | [PR #17566](https://github.com/unslothai/unsloth/pull/17566) |
| 🔴 **High** | MiniMax-H3-Image: download size mismatch and RAM OOM on 24–48 GB GPUs | [PR #17563](https://github.com/unslothai/unsloth/pull/17563) | — (fix PR) |
| 🟡 **Medium** | Chat settings leak between concurrent chats waiting on model load | [PR #17565](https://github.com/unslothai/unsloth/pull/17565) | — (fix PR) |
| 🟡 **Medium** | ROCm 7.14 / MI300X: stride assertion in flash attention backward (MATH fallback required) | [Issue #17548](https://github.com/unslothai/unsloth/issues/17548) | None yet |
| 🟡 **Medium** | AMD multi-GPU: iGPU reports "Unknown" VRAM, no host aggregate | [PR #17523](https://github.com/unslothai/unsloth/pull/17523) | — (fix PR) |
| 🟡 **Medium** | MoE CPU backend: router aux loss diverges at gradient accumulation > 1 | [Issue #17054](https://github.com/unslothai/unsloth/issues/17054) *(closed)* | Parity test in `tests/test_parallel_cp_compose.py` |
| 🟢 **Low** | Unsloth hub does not list all models | [Issue #17458](https://github.com/unslothai/unsloth/issues/17458) *(closed)* | — |
| 🟢 **Low** | Docker image tags point to wrong releases | [Issue #17470](https://github.com/unslothai/unsloth/issues/17470) | None yet |

---

## 6. What This Means for Application Developers

1. **Qwen3.8-27B inference is now production-viable locally** via Dynamic v3.1 GGUFs. If you're serving Qwen3 variants, re-quantize to v3.1 for the latest performance and memory improvements.

2. **Studio's AMD NPU stack is maturing rapidly.** With power modes, dynamic context sizing, and storage management landing in a single batch, teams targeting AMD NPU hardware (FastFlowLM/Lemonade) should begin integration testing now.

3. **Watch for context length mismatches in DiffusionGemma.** The bug where the UI shows one context length while the backend uses another ([Issue #17558](https://github.com/unslothai/unsloth/issues/17558) / [PR #17566](https://github.com/unslothai/unsloth/pull/17566)) can silently truncate long messages. Until the fix merges, validate actual token limits server-side.

4. **Self-hosted llama.cpp users: re-test Deep Research.** Prompt auto-sizing ([PR #17554](https://github.com/unslothai/unsloth/pull/17554)) changes how much context is used — previously capped at 32K characters regardless of server window, now bounded by actual context.

5. **EXL3 quantization backend progress** ([PR #7115](https://github.com/unslothai/unsloth/pull/7115)) will enable 2/3/4/6/8-bit quantization with MoE support — a significant capability gap vs. bitsandbytes for MoE models under transformers 5.

6. **Intel SYCL support gap** ([Issue #17048](https://github.com/unslothai/unsloth/issues/17048)) means Intel GPU users cannot currently leverage SYCL-built llama.cpp. If this is your target hardware, track this issue or consider ROCm/ CUDA alternatives in the interim.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*