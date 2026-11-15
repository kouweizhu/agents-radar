# AI Infrastructure Digest 2026-11-15

> Generated: 2026-11-15 02:05 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a comprehensive cross-project comparison report synthesizing the digests I created for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me analyze all the data and create a professional, data-backed report.

Let me compile the key data points from each digest:

**vLLM:**
- 59 issues updated, 500 PRs
- No releases in last 24h
- New: ZAQERIS AXIOM (sparse MoE), Flint on AMD (gfx942, gfx950), Kimi-K3.1-Pro
- Blackweell (SM120) issues: CUDA graph crashes, illegal memory access


- Notable work includes batch invariance documentation, sparse MLA prefill routing, MXFP8 GEMMs on MI355X, NVFP4 MoE on gfx942, and DSpark monokernel optimizations, with active migration from Marlin to Humming quantization.

**SGLang:**
- No new releases, but tracking SGLang 1.0 roadmap
- Key hardware challenges: sm_120 RTX 50-series breaks with CUDA 13, plus HiCache hybrid GDN and pipeline parallelism issues
- MiniMax-H3 attention fusion and Elastic EP scale-down via Mooncake are in progress, with Rust server migration nearly complete.

**llama.cpp:**
- Released b12387 through b12376, with b12385 containing a critical Qwen2VL fix
- Added MiniMax-M3.1, Recursive Ripple-65B-Preview, and ZONOS3-Mini TTS support, along with PowerVR Vulkan and OpenCL Flash Attention GMEM kernels
- Notable performance gains: Qwen4-Exp unified KV improves decode by 37%, Metal Gemma4 jumps 35+ tokens/s, and batch API deprecation is planned for next release
- Critical issues to address: DeepSeek-V4.1-Flash KV cache corruption and CUDA VMM-pool OOM problems.

**Ollama:**
- No releases
- VRAM accounting and GPU splitting fix, plus MLX batch speculative verification
- WSL2 GPU memory capping and Windows long prompt 500 errors blocking progress, with Intel NPU support closed and fine-tuning request still open

**LiteLLM:**
- Released v1.110.0-rc.3 with cosign verification, v1.108.9 stable, and v1.107.0-rc.4
- Rust callback for Prometheus metrics, priority queue controller, S3 logger refactor, and dynamic rate limiter ported to Rust
- Key fixes: streaming cancellation on early disconnect, MCP tools/list blocking, and OpenRouter streaming empty choice

**Unsloth:**
- No releases, with v0.1.917-beta showing issues
- DeepSeek-V4.1 native support merged, Qwen3.8-Flash-Next with full FSDP2/TP/PP, ROCm 7.14/MI300X stride assertion, and gfx1151 GDN causal conv1d HIP gate
- Voice mode and NVFP4/MXFP4 checkpoint loading fixes
- Critical issues: Qwen3.8-Flash-Next UD 3.1 MTP acceptance rate regression, mmap forced loading in v0.1.917, and ROCm 7.14 MI300X stride assertion

Now comparing across all projects: vLLM leads in activity volume, SGLang is pushing toward production with Rust migration, llama.cpp maintains broad hardware support, Ollama is stable with GPU splitting fixes, and LiteLLM continues Rust migrations across observability and infrastructure layers.
</think>


# AI Infrastructure Ecosystem — Cross-Project Comparison Report
**Date:** 2026-11-15 | **Scope:** vLLM · SGLang · llama.cpp · Ollama · LiteLLM · Unsloth

---

## 1. Ecosystem Overview

The AI inference infrastructure landscape today is defined by a three-vector convergence: **Blackwell hardware stabilization** (SM120 / RTX 50-series / B300 / GB300), **Rust rewriting of hot paths** (logging, metrics, rate limiting, serving), and **multi-backend parity expansion** (ROCm MI300X/MI355X, Intel NPU, Qualcomm Hexagon, PowerVR). No single project covers the full stack — vLLM leads in production-grade serving on NVIDIA datacenter hardware, SGLang is closing in on Rust-first production parity, llama.cpp dominates the edge/embedded and CPU-first persona, Ollama targets frictionless local deployment, LiteLLM provides the gateway/proxy abstraction layer, and Unsloth owns the fine-tuning-to-serving loop. The critical tension is between serving throughput (batch invariance, KV offloading, speculative decoding) and training stability (QAT correctness, checkpoint loading, multi-dimensional parallelism), with the most active engineering effort today concentrated on the former.

---

## 2. Activity Comparison

| Project | Issues (updated) | PRs (total) | Releases (24 h) | Key In-Flight Work |
|---------|:----------------:|:-----------:|:---------------:|--------------------|
| **vLLM** | 59 | ~500 | 0 | Rust frontend parity, SM120 CUDA graphs, batch invariance, Marlin→Humming migration |
| **SGLang** | 27 | ~400 | 0 | SGLang 1.0 hardening, Rust server stack (15-PR), HiCache PP-sync drain |
| **llama.cpp** | 38 | ~300 | 7 | Batch API deprecation, MiniMax-M3.1, Metal Gemma4 fusion, PowerVR Vulkan |
| **Ollama** | 20 | ~300 | 0 | VRAM/GPU splitting fix, MLX batch speculative, digest-length panic |
| **LiteLLM** | 15 | ~350 | 3 (RC/stable) | Priority queue controller, Rust Prometheus, S3 logger refactor |
| **Unsloth** | 29 | ~173 | 0 | DeepSeek-V4.1 native, FSDP2/TP/PP, voice mode, NVFP4/MXFP4 checkpoints |

**Observations:** vLLM holds the highest issue activity by count, consistent with its broader multi-backend scope and dataplane feature set. llama.cpp ships releases most frequently (7 commits in 24 h) reflecting its leaner C++/C change cadence versus the Python/Rust projects. LiteLLM maintains a disciplined RC/stable release train with cosign signing, the only project in this cohort with formal artifact verification.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth | LiteLLM |
|---------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **DeepSeek-V4.1** | Beta (FP8, NVFP4) | — | KV corruption known | — | **Native** (sparse attn, fp8/MXFP4) | Via proxy |
| **DeepSeek-V4.1-Flash** | ✅ | — | ⚠️ KV corrupt (open) | — | ✅ | Via proxy |
| **Qwen3.8-Flash-Next** | Via vLLM | Via SGLang | Via GGUF | Via Ollama | **FSDP2/TP/PP** | Via proxy |
| **Qwen3.5 / Qwen3-Coder** | ✅ | ✅ | ✅ | ✅ | Via GGUF | ✅ |
| **Qwen2VL** | ✅ | ✅ | ✅ **Fixed today** | ✅ | Via GGUF | ✅ |
| **Kimi-K3.1-Pro** | ✅ (B300/GB300 AgentX) | ✅ (B300/GB300 AgentX) | — | — | — | Via proxy |
| **MiniMax-M3.1** | ✅ | ✅ | ✅ (today) | — | — | Via proxy |
| **ZAQERIS AXIOM** | ✅ (today) | — | — | — | — | Via proxy |
| **FLUX.2-klein** | — | ✅ (text encoder RoPE offload) | — | — | — | — |
| **SANA-Sprint** | — | ✅ (today) | — | — | — | — |
| **GLM-5.3-Flash** | ✅ (SM120) | — | ⚠️ Degrades (open) | — | — | — |
| **Rec. Ripple-65B-Preview** | — | — | ✅ (DFlash2) | — | — | — |
| **Flint (AMD)** | ✅ (gfx942, gfx950) | — | — | — | — | — |
| **Intel NPU (Lunar/Arrow Lake)** | — | — | — | ❌ Closed | — | — |

**Winner by breadth:** vLLM and llama.cpp cover the most models. **Winner by native quality:** Unsloth leads for fine-tuning-first models (DeepSeek-V4.1 native port with sparse attention, engram tables, fp8/MXFP4 without community transformers fallback). **Winner by serving diversity:** LiteLLM via proxy routing, though it relies on upstream engine correctness.

---

## 4. Performance Frontier

The optimization landscape fragments into distinct fronts by layer:

### KV Cache & Memory Management
- **vLLM:** KV offloading (TP-agnostic, help-wanted), HiCache-style host-side caching, FlashInfer race condition fix pending
- **SGLang:** HiCache Mamba host pool sizing (`--hicache-mamba-size-gb`), PP-sync drain optimization, prefix cache hit-rate under L2/L3 pressure
- **llama.cpp:** Unified KV cache Qwen4-Exp decode (−37% slowdown), CPU→GPU prompt-cache stalls (open)
- **Ollama:** VRAM accounting fix for multi-GPU splitting (4 linked issues consolidated)
- **Unsloth:** NVFP4/MXFP4 checkpoint loading fix (unquantized tensors were random-init'd)

### Batching & Scheduling
- **vLLM:** Batch invariance docs update for RL workflows (zero-mismatch training), spec decode top-k/top-p cutoffs at verification
- **SGLang:** New slot scheduling system (server-side), priority-queue controller via Mooncake for EP scale-down
- **llama.cpp:** Batch API deprecation (old API → `llama_batch_ext`)
- **LiteLLM:** Priority-queue controller for provider congestion (P0-ordered, Redis-coordinated 429/529 recovery)

### Quantization & Kernels
| Project | Active Quantization Work |
|---------|--------------------------|
| **vLLM** | Marlin→Humming migration (INT4/INT8 GPTQ/AWQ, FP8, MXFP8/4, NVFP4, MXFP6); MXFP8 GEMMs on MI355X (+21–31%); NVFP4 MoE on gfx942 |
| **llama.cpp** | Hexagon IQ2_XXS + NVFP4; NVFP4/MXFP4 compressed-tensor fix; Metal NORM/L2_NORM fusion |
| **Unsloth** | NVFP4/MXFP4 checkpoint loading fix; QAT bypass in cached decode; grouped Linears excluded from QAT |

### Distributed Serving
- **Unsloth:** FSDP2 + TP + PP for Qwen3.8-Flash-Next and DeepSeek-V4.1; frozen n-gram/engram tables never sharded (correctness)
- **SGLang:** Elastic EP scale-down via Mooncake; Rust server control-API completion (Anthropic, Ollama routes)
- **vLLM:** Data-parallel MoE (DP>1) crash on EP16 (open), DeepSeek-V4.1-Flash DP2 MoE crash (open)

### Speculative Decoding
- **vLLM:** DSpark monokernel launch (70 kernels → 1 persistent FlyDSL launch)
- **SGLang:** PP + EAGME/MTP crash with mixed chunk (open)
- **Ollama:** MLX batch speculative verification (MTP/Dflash/Dflash2 remain active under concurrent load)
- **Unsloth:** Qwen3.8-Flash-Next MTP acceptance drops 74% → 56–66% with UD 3.1 GGUFs (open)
- **llama.cpp:** DFlash2 for Rec. Ripple-65B-Preview

---

## 5. Layer Positioning

```
┌─────────────────────────────────────────────────────────────────────────┐
│  Gateway / Proxy / Routing        ──────────────────────────────────   │
│  ┌─────────────┐                                                          │
│  │  LiteLLM    │  Proxy layer, multi-provider routing, key management,    │
│  │             │  spend logging, rate limiting, model armor, MCP server   │
│  └─────────────┘                                                          │
│                              ──────────────────────────────────────────  │
│  Local Runtime / CLI          ────                                       │
│  ┌─────────────┐ ┌─────────────┐                                         │
│  │  Ollama     │ │  llama.cpp  │  Ollama: turnkey local serving,         │
│  │             │ │             │  MLX (Apple Silicon), WSL2, Windows;     │
│  └─────────────┘ └─────────────┘  llama.cpp: embeddable C/C++ engine,    │
│                                    broadest hardware (CPU/GPU/NPU/FPGA),  │
│                                    quant formats, GGUF model ecosystem   │
│                              ──────────────────────────────────────────  │
│  Serving Engines              ────                                       │
│  ┌─────────────┐ ┌─────────────┐                                         │
│  │  vLLM       │ │  SGLang     │  vLLM: datacenter NVIDIA-first, PagedAttention,  │
│  │             │ │             │  speculative decoding, multi-backend ROCm;       │
│  └─────────────┘ └─────────────┘  SGLang: Rust-first, pipeline parallelism,       │
│                                    HiCache, RadixAttention, DSpark, 1.0 hardening │
│                              ──────────────────────────────────────────  │
│  Fine-tuning → Serving Loop     ────                                       │
│  ┌─────────────┐                                                          │
│  │  Unsloth    │  Fine-tuning (LoRA/QLoRA/QAT), multi-PD (FSDP2/TP/PP),  │
│  │             │  voice mode, DeepSeek-V4.1 native port, NVFP4/MXFP4,     │
│  └─────────────┘  DeepSeek-V4.1-Flash support                             │
└─────────────────────────────────────────────────────────────────────────┘
```

| Dimension | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-----------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **Primary role** | Serving engine | Serving engine | Embedded runtime | Local serving CLI | Gateway/proxy | Fine-tuning + serve |
| **Deployment target** | Datacenter GPU cluster | Datacenter GPU cluster | Edge / embedded / CPU | Laptop / workstation | Cloud proxy / multi-cloud | Workstation / single-node GPU |
| **Hardware scope** | NVIDIA (primary), ROCm (growing) | NVIDIA (primary), ROCm (growing) | Universal (CPU/GPU/NPU/FPGA) | Apple MLX, NVIDIA, AMD | Provider-agnostic | NVIDIA, ROCm |
| **Quantization** | INT4/INT8/FP8/NVFP4/MXFP8/MXFP4/MXFP6 | INT4/INT8/FP8/NVFP4 | INT2–INT8/FP4–FP16 (all backends) | Model-level (GGUF) | Pass-through | INT4/INT8/FP8/NVFP4/MXFP4 |
| **Multi-node** | ✅ TP/PP/EP | ✅ TP/PP/EP | ❌ (single node) | ❌ (single node) | ✅ (via proxy) | ✅ FSDP2/TP/PP (training) |
| **Rust migration** | Frontend in progress | Control API near-complete | ❌ (C++) | ❌ (Go) | Core hot paths | ❌ (Python/ Triton) |
| **Spec decoding** | DSpark, Eagle, MTP | Eagle, MTP, Medusa | DFlash/DFlash2 | MTP/Dflash | Via upstream | MTP |
| **Config stability** | Stable | SGLang 1.0 incoming | Stable | Stable | Stable | Stable (beta) |

---

## 6. Trend Signals

### What Today's Activity Reveals

**1. Blackwell (SM120) is a bleeding edge, not a production edge.**
All three projects with NVIDIA datacenter focus — vLLM (CUDA graph crashes, illegal memory access), SGLang (sm_120 OOTB breakage with CUDA 13 wheels), and llama.cpp (DeepSeek-V4.1-Flash KV corruption) — have open correctness issues on Blackwell hardware released in 2025. Teams targeting B300/GB300/RTX PRO 6000 should budget extra validation time or hold on critical paths.

**2. Rust is eating the hot paths in every project that can absorb it.**
LiteLLM ported Prometheus metrics, dynamic rate limiting, and S3 logging to Rust callbacks. SGLang is 15-PRs deep on Rust server control API. vLLM's Rust frontend parity roadmap is active. The pattern is consistent: Python-callable Rust for observability, concurrency, and memory-sensitive paths. Application developers should anticipate Rust-generated artifacts requiring Go/Rust tooling integration.

**3. Multi-backend parity (ROCm, Intel NPU, Qualcomm Hexagon) is accelerating but unstable.**
- ROCm 7.14/MI300X: vLLM has NVFP4 MoE and MXFP8 GEMMs working; Unsloth hit a stride assertion requiring MATH fallback.
- Qualcomm Hexagon: llama.cpp landed IQ2_XXS + NVFP4 support today.
- Intel NPU: Ollama closed the feature request without implementation.
- PowerVR Vulkan: llama.cpp gained initial support.
- AMD gfx1151/gfx942: Multiple projects actively debugging but with unresolved regressions.

Teams building multi-vendor hardware strategies should expect 1–2 quarter lag behind NVIDIA in stability, and allocate dedicated validation infrastructure.

**4. Quantization is fragmenting along hardware lines.**
The proliferation of formats — NVFP4, MXFP4, MXFP6, IQ2_XXS, FP4 — is driven by Blackwell and AMD MI300X tensor core capabilities. vLLM's Marlin→Humming migration (Humming covers 7 formats across 3 vendors) is the most ambitious unification effort. llama.cpp's approach is the widest (all formats, all backends) but with less automated kernel selection.

**5. Speculative decoding is maturing but fragile under concurrency and distribution.**
MTP acceptance regressions, PP+spec-decoding crashes, and MLX concurrent-draft issues all surfaced today. The pattern is clear: spec decoding works well in single-sequence, single-engine conditions; it breaks under multi-request batching, pipeline parallelism, or data parallelism. Teams deploying Eagle/MTP/DSpark in production should test at realistic concurrent load before launch.

**6. SGLang 1.0 and vLLM's Rust frontend signal a platform stability inflection.**
Both projects are converging on formal compatibility policies after a period of rapid feature iteration. This is a leading indicator that the serving engine layer is maturing — expect the ecosystem to shift from "which engine do I use?" to "how do I standardize on one and extend it?" over the next two quarters.

### What Agent / Application Developers Should Watch

| Signal | Horizon | Action |
|--------|---------|--------|
| SGLang 1.0 release | 1–2 months | Audit SGLang 0.5.x configs for silent-fallback-to-error changes; begin migration planning |
| vLLM Rust frontend parity | 2–3 months | Prepare for Python-path deprecations; test `Platform.validate_request` parity |
| Blackwell CUDA graph stabilization | 1–2 months | Monitor vLLM [#67488](https://github.com/vllm-project/vllm/issues/67488) and SGLang [#49209](https://github.com/sgl-project/sglang/issues/49209); do not deploy spec decoding on sm_120 yet |
| Ollama VRAM accounting fix | 1–2 weeks | Monitor [#19632](https://github.com/ollama/ollama/pull/19632); test multi-GPU model placement before upgrading |
| LiteLLM Rust Prometheus migration | 2–4 weeks | Update Prometheus scrape configs for renamed/changed metric names; test `LITELLM_RUST_PROMETHEUS=1` |
| Unsloth voice mode | 1–2 months | Prepare audio integration points; the llama.cpp audio.cpp pipeline is the target |
| llama.cpp batch API deprecation | 1–2 months | Review codebase for direct `llama_batch` usage; migrate to `llama_batch_ext` via [#32163](https://github.com/ggml-org/llama.cpp/pull/32163) |
| Multi-backend (ROCm/Intel/Qualcomm) | Ongoing | Maintain separate validation matrices per hardware target; expect regressions in non-NVIDIA paths for at least 2 more quarters |

---

*Synthesized from github.com/vllm-project/vllm · github.com/sgl-project/sglang · github.com/ggml-org/llama.cpp · github.com/ollama/ollama · github.com/BerriAI/litellm · github.com/unslothai/unsloth*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze this GitHub data for vLLM and create a structured digest for 2026-11-15.

Key observations:
1. No releases in last 24h
2. 59 issues updated, 500 PRs
3. Multiple active areas: batch invariance, Rust frontend parity, Blackwell SM120 support, quantization (Marlin→Humming migration), KV offloading, ROCm work

Let me organize this into the requested sections:

**Today's Highlights:**
- Batch invariance feature tracking (107 comments - most active)
- Rust frontend feature parity roadmap (61 comments)
- Multiple SM120/Blackwell issues (CUDA graphs, FP8, etc.)
- ROCm NVFP4 MoE support landing

**Releases & Breaking Changes:**
- None in last 24h

**New Model & Hardware Support:**
- ZAQERIS AXIOM (sparse MoE, 79.43B, 16 experts)
- Flint on AMD GPUs (gfx942, gfx950)
- Kimi-K3.1-Pro presets for B300/GB300 AgentX

**Performance & Optimization:**
- Top-k/top-p cutoffs in spec decode verification
- Sparse MLA prefill routing optimization
- MXFP8 GEMMs on MI355X
- NVFP4 MoE on gfx942
- DSpark monokernel launch
- Batch invariance docs update

**Stability & Regressions:**
- FlashInfer race condition (CUDA illegal memory access)
- SM120 CUDA graph capture issues
- DeepGemm warmup issues
- Data parallel DP>1 MoE issues
- Various other bugs

**What This Means:**
- Blackwell support maturing but still issues
- Rust frontend progressing toward parity
- Multi-backend (ROCm/Intel) improvements
- KV offloading work ongoing

Let me format this properly.
</think>


# vLLM Digest — 2026-11-15

## 1. Today's Highlights

The vLLM community is advancing multi-backend support with new ROCm optimizations (NVFP4 MoE on gfx942, MXFP8 GEMMs on MI355X) while tackling Blackwell SM120 stability—multiple issues flag CUDA graph capture failures and illegal memory access on RTX PRO 6000 / B300 hardware. The batch invariance feature continues to draw heavy engagement (107 comments), and the Rust frontend parity roadmap is progressing toward feature-complete status.

---

## 2. Releases & Breaking Changes

No releases in the last 24 hours.

**Migration Notes:**
- The Marlin→Humming quantization kernel migration is under RFC ([#65560](https://github.com/vllm-project/vllm/issues/65560)); Humming now covers INT4/INT8 GPTQ/AWQ, FP8, MXFP8, MXFP4, NVFP4, MXFP6 for both dense and MoE layers across NVIDIA architectures.
- vLLM CUDA builds recently migrated to LibTorch Stable ABI ([blog](https://vllm.ai/blog/2026-11-06-stabl)); ROCm parity request filed ([#67551](https://github.com/vllm-project/vllm/issues/67551)).

---

## 3. New Model & Hardware Support

| Model / Hardware | Notes | PR/Issue |
|---|---|---|
| **ZAQERIS AXIOM** (`ZaqerisAxiomForCausalLM`) | 79.43B sparse MoE, 16 experts, top-2 routing, Apache 2.0 | [#67412](https://github.com/vllm-project/vllm/issues/67412) |
| **Flint** on AMD (gfx942, gfx950) | ROCm support added via split `common/nvidia/amd` layout | [#66216](https://github.com/vllm-project/vllm/pull/66216) |
| **Kimi-K3.1-Pro** — B300/GB300 AgentX presets | Disaggregated serving presets aligned with InferenceX | [#67722](https://github.com/vllm-project/vllm/pull/67722), [#67719](https://github.com/vllm-project/vllm/pull/67719) |
| **GLM-5.3-Flash** FP4-Local on SM120 | Community working toward full base support | [#66218](https://github.com/vllm-project/vllm/issues/66218) |

---

## 4. Performance & Optimization

### Landed / In Review

| Area | Change | Details | PR |
|---|---|---|---|
| **Speculative Decoding** | Top-k/top-p cutoffs applied at target-logit load | Extends on-load masking to rows with active `top_k`; reduces wasted computation in verification | [#66534](https://github.com/vllm-project/vllm/pull/66534) |
| **Sparse MLA Attention** | Precompute prefill routing in metadata builder | Eliminates per-layer `MLAAttention._use_sparse_mha` branching; three code paths unified | [#67338](https://github.com/vllm-project/vllm/pull/67338) |
| **ROCm / MXFP8** | Dense MXFP8 GEMMs on MI355X via AITER FlyDSL kernels | 21–31% → higher MXFP8 peak; plus faster activation quant | [#67377](https://github.com/vllm-project/vllm/pull/67377) |
| **ROCm / NVFP4** | Native NVFP4 MoE on gfx942 via `tl.dot_scaled` | Requires triton-lang/triton#10979 (merged Jul 2026) | [#67723](https://github.com/vllm-project/vllm/pull/67723) |
| **DSpark (DeepSeek)** | Monokernel launch for 5 draft layers + final norm | ~70 small kernels → 1 persistent FlyDSL launch; 11 all-reduces eliminated | [#65985](https://github.com/vllm-project/vllm/pull/65985) |
| **Batch Invariance** | Docs tip linking to Inferact/zero-mismatch-rl recipes | Users directed to RL training recipes built on vLLM batch invariance | [#66550](https://github.com/vllm-project/vllm/pull/66550) |
| **Multimodal** | Configurable encoder cache size (`--encoder-cache-size`) | Scheduler no longer derives from `max_num_batched_tokens`; `None` preserves prior behavior | [#65534](https://github.com/vllm-project/vllm/pull/65534) |

### In Progress

- **Spec Decode device-generic streams/events**: Replace `torch.cuda.Stream/Event` with `torch.Stream` in D2H copy path to enable non-CUDA accelerator support ([#67724](https://github.com/vllm-project/vllm/pull/67724))
- **KV offloading**: TP-agnostic KV offloading tracker active; help wanted for PR reviews ([#61886](https://github.com/vllm-project/vllm/issues/61886))

---

## 5. Stability & Regressions

Ranked by severity:

### 🔴 Critical (Crash / Data Corruption Risk)

| Issue | Description | Workaround / Fix |
|---|---|---|
| **FlashInfer race** ([#61239](https://github.com/vllm-project/vllm/issues/61239)) | CUDA illegal memory access / GPU hang in `FlashInferMetadataBuilder` for non-speculative models since #57214 (async scheduling) | Awaiting fix |
| **SM120 CUDA graph crash** ([#67488](https://github.com/vllm-project/vllm/issues/67488)) | Xid 31 illegal memory access during CUDA graph capture with LoRA + CUDA MPS on RTX PRO 6000 Blackwell (v0.33.0) | None yet |
| **DSpark adaptive verification IMA** ([#59970](https://github.com/vllm-project/vllm/issues/59970)) | Illegal memory access under concurrent prefill with `FULL_AND_PIECEWISE` cudagraph mode | Closed; verify fix landed |

### 🟠 High (Functional Degradation)

| Issue | Description | Fix |
|---|---|---|
| **DeepSeek-V4.1 decode throughput** ([#56892](https://github.com/vllm-project/vllm/issues/56892)) | Extremely low decode throughput on SM120 with `--enforce-eager`; CUDA graphs unusable | Graph capture fix requested |
| **MoE + data-parallel=2 crash** ([#67575](https://github.com/vllm-project/vllm/issues/67575)) | `flashinfer_cutlass` MoE hits `cudaErrorIllegalAddress` at startup with `--data-parallel-size 2` (EP16); fine at dp=1 | Under investigation |
| **DeepSeek-V4-Pro block_size crash** ([#67631](https://github.com/vllm-project/vllm/issues/67631)) | `ZeroDivisionError` in `kv_cache_planning` when `block_size=64` on HCA `compress_ratio=128` | Under investigation |

### 🟡 Medium (Correctness / UX)

| Issue | Description | Fix |
|---|---|---|
| **xgrammar whitespace flag ignored** ([#48765](https://github.com/vllm-project/vllm/issues/48765)) | `disable_any_whitespace` silently ignored at request level | Config-plumbing gap; needs owner |
| **GLM47 tool parser drops unknown functions** ([#67684](https://github.com/vllm-project/vllm/issues/67684)) | Returns empty responses, trapping clients in retry loops | Under investigation |
| **ROCm KV scale placement bug** ([#67718](https://github.com/vllm-project/vllm/pull/67718)) | `_k_scale_cpu` / `_v_scale_cpu` land on GPU; FP8 KV cache path calls `float()` → failure | Fix PR open |
| **Qwen3.5-0.8B slow on AVX2 CPU** ([#67598](https://github.com/vllm-project/vllm/issues/67598)) | Performance regression on CPU backend | Under investigation |

### CI / Build

- NVIDIA nightly failures tracked in [#67307](https://github.com/vllm-project/vllm/issues/67307): 6 failures on main (down from 15); extensible KV cache OOMs and H200 LM head issues flagged.
- ROCm CI: `test_amd_ci_fast_exit` flaky on MI250 (signal state inheritance); fix in [#67567](https://github.com/vllm-project/vllm/pull/67567).

---

## 6. What This Means for Application Developers

1. **Blackwell (SM120) is not yet production-stable.** Multiple reports of CUDA graph capture failures and illegal memory access with LoRA, FP8, and data-parallel configurations. If running on RTX PRO 6000 or B300, test thoroughly before deployment and consider `--enforce-eager` as a temporary workaround at a significant throughput cost.

2. **Rust frontend is maturing but incomplete.** The parity roadmap ([#44280](https://github.com/vllm-project/vllm/issues/44280)) is active; however, `Platform.validate_request` currently only runs in the Python path ([#67623](https://github.com/vllm-project/vllm/pull/67623) filed to fix). Stick with the Python frontend for now if platform-level request validation is critical.

3. **Quantization landscape is shifting.** The Marlin→Humming migration will eventually retire Marlin (an SM80-era kernel). If you rely on Marlin INT4/INT8 kernels, track [#65560](https://github.com/vllm-project/vllm/issues/65560) for migration timelines.

4. **ROCm is gaining first-class treatment.** NVFP4 MoE on MI355X/gfx942 and MXFP8 optimizations on MI355X signal strong AMD investment. AMD customers should monitor [#66699](https://github.com/vllm-project/vllm/issues/66699) for upstream accuracy regression testing.

5. **Batch invariance is now documented for RL workflows.** If you are training with reinforcement learning (e.g., GRPO, PPO) and experiencing train-inference mismatch, the new docs link to zero-mismatch-rl recipes at [Inferact/zero-mismatch-rl](https://github.com/Inferact/zero-mismatch-rl).

6. **Spec decode optimizations in flight.** Top-k/top-p cutoffs in verification ([#66534](https://github.com/vllm-project/vllm/pull/66534)) should improve throughput for drafts with restrictive sampling params; review when merged.

---

*Digest generated from github.com/vllm-project/vllm activity on 2026-11-15.*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the GitHub data for SGLang from 2026-11-15 and create a structured digest.

Key observations:

1. **Releases**: No new releases in last 24h, but there's an active SGLang 1.0 Release Tracker issue

2. **Major PRs/Work**:
- Rust server migration is ongoing (multiple PRs stacked)
- Elastic EP runtime scale-down via Mooncake
- HiCache improvements for AMD
- Diffusion improvements (FLUX text encoder offload, SANA-Sprint)
- Prometheus metric naming style configurable
- MiniMax-H3 attention fused residual optimization
- cuTile NVFP4 support for Blackwell

3. **Bugs/Issues to highlight**:
- CI Test Failures tracking (15 comments)
- RTX 50-series (sm_120) CUDA 13 wheel issue
- HiCache hybrid GDN model bugs
- sgl-router /v1/messages inline system role bug
- QwenImagePipelineConfig sample_sigmas AttributeError
- PP + EAGLE/MTP spec decoding crash
- Various performance issues

4. **New Features**:
- toktier tokenizer backend RFC
- Qwen3-VL reranking optimization
- SGLang 1.0 roadmap
- Prometheus configurable metric naming
- Rust server Anthropic Messages API
- Ollama routes

5. **Performance Work**:
- MiniMax-H3 attention fusion
- HiCache improvements
- cuTile NVFP4 for Blackwell

Let me structure this into the digest format.
</think>


# SGLang Digest — 2026-11-15

## 1. Today's Highlights

The Rust server migration continues its push toward completion, with multiple stacked PRs adding Anthropic Messages API, Ollama routes, and generation wrappers (#49744, #49743, #49747). Meanwhile, the SGLang 1.0 release tracker (#50045) signals a shift toward hardening—replacing silent config changes with explicit errors and formalizing a compatibility policy. On the hardware front, an out-of-the-box breakage for RTX 50-series (sm_120) users on CUDA 13 wheels (#49209) needs immediate attention.

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

| Item | Details | Ref |
|------|---------|-----|
| **SGLang 1.0 Roadmap Active** | Tracker issue opened; focuses on stability hardening, replacing silent config changes with named errors, and defining a 1.x compatibility policy. Upgrading from 0.5.x may require changes. | [#50045](https://github.com/sgl-project/sglang/issues/50045) |

**Migration Note:** SGLang 1.0 will introduce breaking changes for 0.5.x users. Monitor upgrade notes as they land on `main`.

## 3. New Model & Hardware Support

| Feature | Description | Status | Ref |
|---------|-------------|--------|-----|
| **sm_120 (RTX 50-series) — CUDA 13 breakage** | Consumer Blackwell cannot run any model out-of-the-box with current CUDA 13 wheel install | **Open Bug** | [#49209](https://github.com/sgl-project/sglang/issues/49209) |
| **Opt-in `toktier` tokenizer backend** | RFC for exact incremental + chunk-parallel CPU tokenization | RFC Stage | [#44374](https://github.com/sgl-project/sglang/issues/44374) |
| **cuTile NVFP4 for MiniMax on SM12x** | Opt-in FlashInfer W4A4 runner for MiniMax-M3.1 routed experts on Blackwell | PR Open | [#49795](https://github.com/sgl-project/sglang/pull/49795) |
| **Native SANA-Sprint support** | Added diffusion model support for Sana Sprint 0.6B 1024px | Landed | [#45960](https://github.com/sgl-project/sglang/pull/45960) |
| **Ascend NPU — GDN hybrid models** | Qwen3.8-27B crashes on Ascend 910B unless `--mamba-ssm-dtype bfloat16` | **Open Bug** | [#50487](https://github.com/sgl-project/sglang/issues/50487) |

## 4. Performance & Optimization

### Landed / Merged

| Optimization | Details | Ref |
|--------------|---------|-----|
| **HiCache Mamba host pool control (AMD)** | New `--hicache-mamba-size-gb` flag pins the HiCache Mamba host pool size, fixing host KV hits that miss their checkpoint | [#47867](https://github.com/sgl-project/sglang/pull/47867) |
| **SANA-Sprint native support** | Joint fix for qk_norm bug affecting guidance-distilled models | [#45960](https://github.com/sgl-project/sglang/pull/45960) |
| **FLUX.2-klein text encoder RoPE offload fix** | Build offloaded text encoder's RoPE table on GPU so offload gives correct output | [#50441](https://github.com/sgl-project/sglang/pull/50441) |

### In Progress

| Optimization | Details | Target | Ref |
|--------------|---------|--------|-----|
| **MiniMax-H3 attention fused residual** | Fuse attention gated residual with norm2 modulation | ~93%→? kernel time reduction on B300 | [#50391](https://github.com/sgl-project/sglang/pull/50391) |
| **Elastic EP scale-down via Mooncake** | Runtime retirement of live EP ranks from a serving deployment | Production elasticity | [#33111](https://github.com/sgl-project/sglang/pull/33111) |
| **Prometheus metric naming style** | Add `--prometheus-metric-style` to support `sglang_` naming for collectors rejecting colons | Deployment flexibility | [#45551](https://github.com/sgl-project/sglang/pull/45551) |
| **Qwen3-VL reranking optimization** | Concurrent, exact-label, prefill-only scoring for Qwen3-VL reranking | Throughput | [#49569](https://github.com/sgl-project/sglang/issues/49569) |
| **HiCache PP-sync drain perf** | Pipeline-parallel HiCache causes lock-step across ranks; drain optimization in review | PP latency | [#45351](https://github.com/sgl-project/sglang/issues/45351) |

## 5. Stability & Regressions

### Critical / High

| Bug | Severity | Status | Fix PR |
|-----|----------|--------|--------|
| **sm_120 (RTX 50) OOTB breakage** — No model runs with CUDA 13 wheel | 🔴 Critical | Open | — |
| **QwenImagePipelineConfig missing `sample_sigmas`** — AttributeError on image generation | 🔴 Critical | Open | — |
| **Rust server `return_hidden_states` crash** — Server goes down with `SGLANG_RUST_SERVER=1` | 🔴 Critical | Open PR | [#50555](https://github.com/sgl-project/sglang/pull/50555) |
| **DeepSeek-R1 NVFP4 decode regression (~4%)** — tiny_gemm path on Blackwell | 🟠 High | Closed (inactive) | — |

### Medium

| Bug | Description | Status | Ref |
|-----|-------------|--------|-----|
| **HiCache hybrid GDN host-tier hits drop to zero** | Host Mamba pool exhausted while KV stays on host; ~3 long prefixes trigger | Open | [#45400](https://github.com/sgl-project/sglang/issues/45400) |
| **sgl-router `/v1/messages` 400 for inline system role** | Inline `role="system"` rejected; differs from engine behavior | Open PR | [#50435](https://github.com/sgl-project/sglang/pull/50435) |
| **PP + EAGLE/MTP crash with `--enable-mixed-chunk`** | `'EagleDraftInput' object has no attribute 'rids'` in `_pp_spec_rebuild_verify_input` | Open | [#42648](https://github.com/sgl-project/sglang/issues/42648) |
| **HiCache prefix cache hit-rate dip** | Reproducible drop under L2/L3 capacity pressure with HiCache + Mooncake | Open | [#47481](https://github.com/sgl-project/sglang/issues/47481) |
| **Qwen-VL image preprocessing OOM** | 2.87x peak from `torch.cat(processed_images)` plus non-returning cache | Open | [#49796](https://github.com/sgl-project/sglang/issues/49796) |

### Observability / CI

| Item | Status | Ref |
|------|--------|-----|
| **CI Test Failures Tracker** — 0 broken, 5 flaky, 919 recently fixed | Active tracking | [#17050](https://github.com/sgl-project/sglang/issues/17050) |
| **AMD ROCm test failure** — `test_torch_compile_moe.py` failing on HIP stream | Open | [#45847](https://github.com/sgl-project/sglang/issues/45847) |

## 6. What This Means for Application Developers

**1. SGLang 1.0 is coming.** If you're on 0.5.x, plan for migration work. The team is explicitly moving toward stricter config validation—silent fallbacks will become errors. Review upgrade notes as they land.

**2. Rust server is nearly feature-complete.** The 15-PR stack for control-API migration (Anthropic, Ollama, generation wrappers) is in final stages. Early testers should verify parity with the Python server; several parity fixes are included in recent PRs.

**3. Blackwell (sm_120) users: wait on CUDA 13 wheels.** If you're on RTX 50-series, the current release cannot run models OOTB. Track [#49209](https://github.com/sgl-project/sglang/issues/49209) for the fix.

**4. HiCache + hybrid models (GDN/Mamba) needs tuning.** The Mamba host pool sizing is now explicit via `--hicache-mamba-size-gb` on AMD. For hybrid architectures, verify your host memory allocation prevents the zero-hit scenario described in [#45400](https://github.com/sgl-project/sglang/issues/45400).

**5. Pipeline parallelism + HiCache has a latency issue.** If you're running PP + HiCache, the PP-sync drain causes lock-step scheduling across ranks. Monitor [#45351](https://github.com/sgl-project/sglang/issues/45351) for when the optimization lands.

**6. Qwen-VL image inputs are memory-intensive.** If you're seeing OOMs with multimodal models, the `torch.cat` + cache memory retention issue is tracked in [#49796](https://github.com/sgl-project/sglang/issues/49796). Workaround: limit concurrent image preprocessing or reduce batch size until the fix merges.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a llama.cpp digest for 2026-11-15 based on the provided GitHub data. Let me analyze the data and create a structured digest following the requested format.

Let me categorize the key information:

**Releases (last 24h):**
- b12387: Fix ctz64 on 32bit (#32273)
- b12386: hexagon: fix fa no-mask tail (#32243)
- b12385: qwen2vl: apply FFN weight scales (#32241) - This is a significant bug fix
- b12383: ggml-backend: start a new split at an incompatible weight in a split without inputs (#31775)
- b12381: mtmd: fix video pixel aspect ratio and video rotation (#32267)
- b12380: mtmd: allow custom video decoder (#32188)
- b12379: jinja: reduce template rendering overhead (#32023)
- b12378: mtmd: avoid padding-only Whisper audio chunks (#30403)
- b12377: spec + model: refactor DFlash based speculative decoding methods (#32016)
- b12376: Hexagon: add support for IQ2_XXS and NVFP4 (#31954)

**Key Issues:**
- #20837 [CLOSED]: Qwen3.5 9B tool calls in thinking block bug
- #29473 [OPEN]: ggml-hexagon on Snapdragon 7 Gen 4 HMX issues
- #30944 [OPEN]: DeepSeek-V4.1-Flash KV cache corruption
- #32280 [OPEN]: CPU→GPU prompt-cache stalls with unified KV
- #31974 [OPEN]: CUDA VMM-pool OOM aborts instead of failing gracefully


- #32270 [OPEN]: FP8 KV cache aborts on Metal

I'll focus on the most impactful pull requests and API changes. The deprecation of the old batch API in #32306 is a significant structural change that developers should carefully review. Performance optimizations are emerging through new kernels like the top-k rows kernel in CUDA/ggml and the Flash Attention GMEM kernel in OpenCL. 

The new MiniMax-M3.1 model support indicates ongoing expansion of model compatibility. Server-side improvements include a new disk cache implementation and server slot scheduling refactoring, which could provide more efficient resource management.

Hardware support is broadening with Vulkan backend support for PowerVR GPUs and Metal performance enhancements for LFM3, demonstrating continued cross-platform optimization efforts.
</think>


# llama.cpp Digest — 2026-11-15

## Today's Highlights

The project saw significant backend improvements with new quantization support for Qualcomm Hexagon (IQ2_XXS, NVFP4) and a critical bug fix for Qwen2VL FFN weight scales that was producing garbage output. The server-side received major refactoring work including a new slot scheduling system and disk cache implementation, while the batch API deprecation marks an important migration milestone.

---

## Releases & Breaking Changes

| Commit | Description | Links |
|--------|-------------|-------|
| `b12387` | Fix `ctz64` on 32-bit platforms | [#32273](https://github.com/ggml-org/llama.cpp/pull/32273) |
| `b12385` | **Qwen2VL**: Fix FFN weight scales not being applied (was producing PPL ~1e6 on CUDA, NaN on CPU) | [#32241](https://github.com/ggml-org/llama.cpp/pull/32241) |
| `b12376` | Hexagon: add support for IQ2_XXS and NVFP4 quantization | [#31954](https://github.com/ggml-org/llama.cpp/pull/31954) |

**⚠️ Upcoming Breaking Change:**

- **[#32306](https://github.com/ggml-org/llama.cpp/pull/32306)** — `llama`: deprecate old batch API — Callers must migrate to `llama_batch_ext`. Migration guide incoming via [#32163](https://github.com/ggml-org/llama.cpp/pull/32163).

---

## New Model & Hardware Support

| Category | Item | Details |
|----------|------|---------|
| **New Model** | MiniMax-M3.1 | Support landed in [#32301](https://github.com/ggml-org/llama.cpp/pull/32301) with vision validation against SGLang's 3D RoPE |
| **New Model** | Recursive Ripple-65B-Preview | DFlash2 speculative decoding support in [#31904](https://github.com/ggml-org/llama.cpp/pull/31904) |
| **New Model** | ZONOS3-Mini TTS | TTS model support in [#32020](https://github.com/ggml-org/llama.cpp/pull/32020) |
| **Hardware** | Qualcomm Hexagon (Snapdragon) | Native support for IQ2_XXS and NVFP4 quantization formats |
| **Hardware** | Imagination PowerVR GPUs | Initial Vulkan backend support in [#29315](https://github.com/ggml-org/llama.cpp/pull/29315) |
| **Backend** | OpenCL | New Flash Attention GMEM kernel in [#32302](https://github.com/ggml-org/llama.cpp/pull/32302) |
| **Backend** | Metal | Non-contiguous rows support for NORM/L2_NORM in [#30778](https://github.com/ggml-org/llama.cpp/pull/30778) |

---

## Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **Jinja Templates** | Reduced value allocation and lookup overhead ([#32023](https://github.com/ggml-org/llama.cpp/pull/32023)) | Lower template rendering CPU overhead |
| **mtmd/Whisper** | Avoid padding-only audio chunks ([#30403](https://github.com/ggml-org/llama.cpp/pull/30403)) | Reduced wasted compute in audio processing |
| **Qwen4-Exp** | QSA decode independent of other sequences in unified KV cache ([#32247](https://github.com/ggml-org/llama.cpp/pull/32247)) | −37% decode slowdown on DGX Spark with long conversations |
| **Metal/LFM3** | RMS_NORM+MUL+ADD fusion workaround ([#32296](https://github.com/ggml-org/llama.cpp/pull/32296)) | +3.3% throughput (293.3 → 302.9 t/s on M5 Max) |
| **Metal/Gemma4** | Relaxed norm chain operand ordering ([#32300](https://github.com/ggml-org/llama.cpp/pull/32300)) | +35+ tokens/s on M5 Max |
| **CUDA/ggml** | Top-k rows now returned in pick order ([#32297](https://github.com/ggml-org/llama.cpp/pull/32297), [#32299](https://github.com/ggml-org/llama.cpp/pull/32299)) | Correctness fix for attention ordering |

---

## Stability & Regressions

| Severity | Issue | Status | Workaround/Fix |
|----------|-------|--------|----------------|
| 🔴 **Critical** | Qwen2VL garbage output (PPL ~1e6) | **Fixed** in `b12385` | Upgrade to `b12385+` |
| 🔴 **Critical** | CUDA VMM-pool OOM hard-aborts instead of failing gracefully | **Open** — [#31974](https://github.com/ggml-org/llama.cpp/issues/31974) | Disable VMM pool or reduce batch size |
| 🔴 **Critical** | DeepSeek-V4.1-Flash KV cache corruption on prompt reuse | **Open** — [#30944](https://github.com/ggml-org/llama.cpp/issues/30944) | Avoid prompt prefix reuse |
| 🟠 **High** | Hexagon HMX MUL_MAT returns inf for n≥5 on Snapdragon 7 Gen 4 | **Open** — [#29473](https://github.com/ggml-org/llama.cpp/issues/29473) | None known |
| 🟠 **High** | FP8 KV cache aborts on Metal (SET_ROWS error) | **Open** — [#32270](https://github.com/ggml-org/llama.cpp/issues/32270) | Avoid `-ctk/-ctv f8_e4m3` on Metal |
| 🟠 **High** | CPU→GPU prompt-cache stalls with unified KV on concurrent requests | **Open** — [#32280](https://github.com/ggml-org/llama.cpp/issues/32280) | Disable unified KV for now |
| 🟡 **Medium** | GLM-5.3-Flash degrades into "hmm hmm hmm" stream | **Open** — [#31875](https://github.com/ggml-org/llama.cpp/issues/31875) | — |
| 🟡 **Medium** | Vulkan: Intel Arc 140T read-back 10x slower than write | **Open** — [#31900](https://github.com/ggml-org/llama.cpp/issues/31900) | — |

---

## What This Means for Application Developers

1. **Batch API Migration**: The upcoming deprecation of the old batch API requires planning. Track [#32163](https://github.com/ggml-org/llama.cpp/pull/32163) for the migration guide and test your inference pipelines against `llama_batch_ext` before upgrading.

2. **Server Slot Scheduling**: The new `server_slot_sched` system in [#32154](https://github.com/ggml-org/llama.cpp/pull/32154) and the disk cache implementation in [#32303](https://github.com/ggml-org/llama.cpp/pull/32303) will improve multi-request handling. Expect more predictable prompt caching behavior.

3. **Qwen2VL Fix**: If you're running Qwen2VL models, upgrade immediately — previous builds produced garbage output.

4. **Unified KV Cache**: The issues [#32280](https://github.com/ggml-org/llama.cpp/issues/32280) and [#32247](https://github.com/ggml-org/llama.cpp/pull/32247) indicate ongoing work on unified KV. Monitor performance with long conversation contexts.

5. **Metal Optimizations**: The fusion improvements benefit Apple Silicon deployments; Gemma and LFM models see noticeable speedups.

6. **New Hardware Targets**: PowerVR Vulkan support and expanded Hexagon quantization options expand deployment flexibility for edge/embedded scenarios.

---

*Generated from github.com/ggml-org/llama.cpp data • 2026-11-15*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate a structured English digest for Ollama based on the provided GitHub data. Let me analyze the data and create a professional, concise digest following the specified sections.

Let me categorize the data:

**Latest Issues (7 items):**
1. #156 - Feature request for fine-tuning support (open, long-standing since 2023)
2. #19535 - Intel NPU backend via OpenVINO (closed)
3. #13503 - Request to publish FP16 model on Ollama Cloud (closed)
4. #19701 - Bug: Chinese language error (open)
5. #19519 - WSL2 GPU memory capping bug (open)
6. #19694 - qwen3.5/qwen3-coder parser bug with tool calls (open)
7. #19696 - Windows long prompt 500 error (open)

**Latest PRs (15 items):**
1. #11826 - Community dashboard for OllamaChat (open)
2. #19703 - Add PipesHub to RAG integrations (open)
3. #14251 - Fix digest length panic in list command (open)
4. #16927 - Sidebar animation fix (closed)
5. #16929 - Image paths with spaces fix (closed)
6. #16933 - Anthropic API key header compatibility (closed)
7. #19702 - Add SynapCores to Database & Embeddings (open)
8. #19700 - Add ForgeMind to mobile integrations (open)
9. #19588 - Name tool in tool_result (open)
10. #19699 - Typo fix in test messages (open)
11. #19698 - HTTP status check in downloadChunk (open)
12. #16398 - Tolerate Qwen tool-call format drift (open)
13. #19632 - VRAM accounting and GPU splitting fix (open)


14. #19663 - MLX batch speculative verification (open)
15. #19697 - Add inference-vitals to monitoring (open)

I'll organize this into the required sections, highlighting the most significant changes and open items that impact users and developers.
</think>


# Ollama Digest — 2026-11-15

## 1. Today's Highlights

Ollama saw substantial backend activity today, with two high-impact PRs targeting VRAM accounting and MLX speculative decoding. The community integrations section received multiple additions (PipesHub, SynapCores, ForgeMind, inference-vitals), reflecting growing ecosystem breadth. On the issue side, a long-standing fine-tuning request remains open while an Intel NPU backend feature was closed—indicating potential roadmap movement on hardware acceleration.

## 2. Releases & Breaking Changes

No new releases or breaking changes recorded in the last 24 hours.

## 3. New Model & Hardware Support

- **Intel NPU Backend (OpenVINO)** — Issue [#19535](https://github.com/ollama/ollama/issues/19535) was closed today. A user formally requested Intel NPU support for Core Ultra "AI PC" chips, noting the NPU sits idle during Ollama sessions. The closure suggests the request is acknowledged, though no implementation timeline is linked. Infrastructure teams targeting Intel Lunar Lake or Arrow Lake hardware should track this for future releases.
- **Qwen 3.6 Tool-Call Tolerance** — PR [#16398](https://github.com/ollama/ollama/pull/16398) updates the `qwen3.5` parser to handle format drift in `qwen3.6:27b` and `qwen3-coder` variants, where models occasionally emit tool-call wrappers from earlier training generations. This improves robustness for agents relying on structured outputs from Qwen variants.

## 4. Performance & Optimization

- **VRAM Accounting & GPU Splitting Fixes** — PR [#19632](https://github.com/ollama/ollama/pull/19632) addresses critical VRAM miscalculation bugs that caused incorrect model eviction, load failures, and unnecessary GPU spreading. The fix consolidates issues [#19463](https://github.com/ollama/ollama/issues/19463), [#18679](https://github.com/ollama/ollama/issues/18679), [#18349](https://github.com/ollama/ollama/issues/18349), and [#16599](https://github.com/ollama/ollama/issues/16599). For multi-GPU or memory-constrained deployments, this PR is high-priority to watch.
- **MLX Batch Speculative Verification** — PR [#19663](https://github.com/ollama/ollama/pull/19663) enables drafting to remain active during concurrent inference requests, allowing MTP, DFlash, and DFlash2 models to maintain speculative decoding speedups in multi-client scenarios. This builds on [#19197](https://github.com/ollama/ollama/pull/19197).
- **Download Chunk Robustness** — PR [#19698](https://github.com/ollama/ollama/pull/19698) adds HTTP status validation in `downloadChunk` to abort on non-retryable errors (e.g., corporate proxy blocks). This prevents silent failures during model blob retrieval.

## 5. Stability & Regressions

**High Severity:**
- **WSL2 GPU Memory Capping** — Issue [#19519](https://github.com/ollama/ollama/issues/19519) reports that on NVIDIA RTX Spark N1X laptops (HP OmniBook X 14, 128 GB unified memory), Ollama under WSL2 offloads only a fraction of models that should fit in GPU memory, capping at guest RAM instead of the 80 GB GPU allocation. Affects users running Ollama inside Windows Subsystem for Linux on modern Snapdragon X Elite hardware.
- **Windows Long Prompt 500 Errors** — Issue [#19696](https://github.com/ollama/ollama/issues/19696) triggers intermittent HTTP 500 "chat prompt error" after ~19 seconds on prompts exceeding ~70k characters, with `WSARecv reset`. Observed 12 failures in 20 long agent conversations on Windows. An immediate resend typically succeeds.

**Medium Severity:**
- **Qwen Parser Tool-Call Corruption** — Issue [#19694](https://github.com/ollama/ollama/issues/19694) reports that `qwen3.5` and `qwen3-coder` parsers corrupt tool-call arguments or lose calls depending on content and stream chunking. Root cause linked to `qwenTagRegex` behavior on current `main` (v0.40.15). A fix PR ([#16398](https://github.com/ollama/ollama/pull/16398)) is open.
- **Digest Length Panic in `ollama list`** — PR [#14251](https://github.com/ollama/ollama/pull/14251) fixes a runtime panic when a model's digest is shorter than 12 characters. The fix adds a length check before slicing. Low impact unless using non-standard model registries.

**Low Severity:**
- **Anthropic Tool Name in `tool_result`** — PR [#19588](https://github.com/ollama/ollama/pull/19588) ensures the `tool` name field is populated when converting `tool_result` blocks in `/v1/messages` responses. Previously caused nameless tool responses in chat templates.

## 6. What This Means for Application Developers

- **Multi-GPU / Memory-Constrained Environments**: The VRAM accounting fix in [#19632](https://github.com/ollama/ollama/pull/19632) is critical. If you run Ollama on systems with fragmented GPU memory or multiple GPUs, expect more predictable model loading and fewer spurious eviction events once this lands.
- **WSL2 Users on Snapdragon X Elite**: Avoid running Ollama under WSL2 for GPU-accelerated inference on HP OmniBook X-class laptops until the memory capping issue ([#19519](https://github.com/ollama/ollama/issues/19519)) is resolved. Native Linux or Windows-native Ollama builds are more reliable on this hardware today.
- **Long-Context Windows Agents**: If your agent pipeline sends prompts >70k tokens on Windows, implement retry logic with exponential backoff to handle the intermittent 500 error ([#19696](https://github.com/ollama/ollama/issues/19696)).
- **Qwen-Based Tool Use**: If you rely on `qwen3.5` or `qwen3-coder` for function-calling agents, monitor the parser fix in [#16398](https://github.com/ollama/ollama/pull/16398). Until merged, structured output reliability may vary with streaming chunk boundaries.
- **Fine-Tuning Still Absent**: The feature request for native fine-tuning support ([#156](https://github.com/ollama/ollama/issues/156), 31 thumbs-up, 22 comments) remains open with no indication of near-term implementation. Teams requiring fine-tuning should evaluate LoRA/fine-tuning tooling external to Ollama.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze this GitHub data for LiteLLM and create a structured digest for 2026-11-15.

Looking at the data:

**Releases:**
- v1.110.0-rc.3 - RC with cosign verification
- v1.108.9 - stable with cosign verification  
- v1.107.0-rc.4 - another RC

**Key Issues (notable ones):**
1. #50065 - MCP tools/list blocking 18-50s on legacy subscription listener (v1.108.0 regression)
2. #51452 - ModelNotMappedError in litellm/utils.py
3. #32214 - sanitize_tool_use_ids breaks multi-turn tool-use on vLLM/Kimi (v1.91.0 regression)
4. #49567 - Gemini image requests return 200 OK but no SpendLogs row
5. #27144 - ChatGPT/Codex Responses streaming drops function call args
6. #50156 - OpenRouter streaming emits empty post-finish choice
7. #41743 - Feature request for database schema changes documentation
8. #38689 - Intermittent ~16.7s TTFB on streaming Anthropic /v1/messages
9. #51393 - Streaming request not cancelled when client disconnects before first chunk (1.107.0 regression)
10. #49223 - MCP true_passthrough: expired OAuth token returns 200 instead of 401

**Key PRs:**
1. #51893 - S3 logger refactor (rust-backed s3 logger)
2. #51877 - CLI: lite login team naming with --team flag
3. #51762 - Runtime dataplane and role writes via redis stream and postgres
4. #51884 - Spend projections with long identifiers


5. #51869 - Config warning about removed accounting settings
6. #51894 - SpendLogs compatibility and durable charging fixes (backport)
7. #50333 - Key-level disallowed_models feature
8. #51541 - Prometheus metric logic ported to Rust
9. #51892/#51883 - Priority queue controller for router congestion
10. #51540/#51537 - Rust callbacks for dynamic rate limiter

**Themes:**
- Significant Rust migration underway across logging, metrics, and rate limiting components
- Multiple regressions in v1.107.0 and v1.108.0 affecting streaming and MCP functionality
- Enhanced observability and monitoring capabilities through Prometheus integration
- Improved congestion management with priority queue implementation
- Stability issues around client disconnection and spend log tracking
</think>


# LiteLLM Digest — 2026-11-15

## 1. Today's Highlights

The LiteLLM team is accelerating its Rust migration strategy with new callbacks for Prometheus metrics, dynamic rate limiting, and S3 logging. Three regressions from recent stable releases (v1.107.0, v1.108.0) are generating active reports: streaming cancellation failures, MCP protocol blocking, and OpenRouter trailer formatting. Meanwhile, a priority-queue controller for provider congestion is under active development to improve multi-tenant throughput under load.

---

## 2. Releases & Breaking Changes

| Version | Type | Key Change |
|---------|------|------------|
| [v1.110.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-rc.3) | RC | Docker images now cosign-signed (key `e82a3c6`); backport window for SpendLogs compatibility fixes |
| [v1.108.9](https://github.com/BerriAI/litellm/releases/tag/v1.108.9) | Stable | Cosign signing applied retroactively |
| [v1.107.0-rc.4](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-rc.4) | RC | Reviewed merge of #5171; published as `1.107.0rc4` on PyPI |

**Config deprecation:** PR [#51869](https://github.com/BerriAI/litellm/pull/51869) adds runtime warnings when configs load removed accounting settings (`accounting_capture`, `accounting_sync_ack`). These settings are no-ops but silently accepted today.

---

## 3. New Model & Hardware Support

| Item | Provider | Notes |
|------|----------|-------|
| `glm-5.1` | Z.AI | PR [#27782](https://github.com/BerriAI/litellm/pull/27782) adds pricing for GLM's latest model via Z.AI's Anthropic-compatible endpoint |

No new hardware (GPU/Metal/CPU) or quantization format additions in the last 24 hours.

---

## 4. Performance & Optimization

| PR | Area | Change |
|----|------|--------|
| [#51541](https://github.com/BerriAI/litellm/pull/51541) | Observability | Prometheus metric logic replaced with a Rust callback (`LITELLM_RUST_PROMETHEUS=1` required; Python implementation removed) |
| [#51540](https://github.com/BerriAI/litellm/pull/51540) | Rate Limiting | `dynamic_rate_limiter_v3` ported to Rust callback behind CustomLoggerV2 contract |
| [#51537](https://github.com/BerriAI/litellm/pull/51537) | Rate Limiting | Parallel request limiter v3 ported to Rust; stacked base for #51540 |
| [#51892](https://github.com/BerriAI/litellm/pull/51892) / [#51883](https://github.com/BerriAI/litellm/pull/51883) | Router | Priority-queue controller for provider congestion: queues requests on 429/529 with P0 ordering; Redis-coordinated recovery probes |
| [#51885](https://github.com/BerriAI/litellm/pull/51885) | API | `/team/info` now paginates member rosters instead of loading full list (3 s → <100 ms for 25k-member teams) |
| [#51893](https://github.com/BerriAI/litellm/pull/51893) | Logging | S3 logger refactored: `s3_v3.py` (Rust-backed) moves to `s3_v2` slot; Python shim deleted |

---

## 5. Stability & Regressions

| Severity | Issue | Affected Versions | Status |
|----------|-------|-------------------|--------|
| **High** | Streaming requests not cancelled on early client disconnect (regression in `_aread_first_chunk` change) | 1.107.0+ | Open — [#51393](https://github.com/BerriAI/litellm/issues/51393) |
| **High** | MCP `tools/list` blocks 18–50 s on legacy subscription listener (`notifications/initialized`) | 1.108.0 | Open — [#50065](https://github.com/BerriAI/litellm/issues/50065) |
| **Medium** | OpenRouter streaming emits empty post-finish choice before usage chunk | 1.108.0 | Open — [#50156](https://github.com/BerriAI/litellm/issues/50156) |
| **Medium** | Gemini image requests return 200 OK but no `SpendLogs` row written | Multiple | Open — [#49567](https://github.com/BerriAI/litellm/issues/49567) |
| **Medium** | `sanitize_tool_use_ids_in_anthropic_messages` breaks multi-turn tool calls on vLLM/Kimi K2.7 | 1.91.0+ | Open — [#32214](https://github.com/BerriAI/litellm/issues/32214) |
| **Medium** | Intermittent ~16.7 s TTFB on streaming `/v1/messages` via Bedrock | Multiple | Open — [#38689](https://github.com/BerriAI/litellm/issues/38689) |
| **Low** | Model Armor guardrail bypasses Responses API (`input` vs `messages` field mismatch) | 1.106.6 | Open — [#49909](https://github.com/BerriAI/litellm/issues/49909) |

**Fix backports pending:** [#51894](https://github.com/BerriAI/litellm/pull/51894) rolls #51868, #51869, and #51884 into `rc/1.110.0` for SpendLogs compatibility and durable charging.

---

## 6. What This Means for Application Developers

1. **Upgrade path:** If you are on v1.108.x and use MCP servers with legacy subscription clients (e.g., Open WebUI), expect 18–50 s stalls on `tools/list`. Downgrade to v1.106.x or wait for a fix in the v1.110 RC train.

2. **Observability migration:** The Rust-based Prometheus logger is now the sole implementation. Operators using `LITELLM_PROMETHEUS_LOGGER=true` should test the new callback; the Python class is deleted in this release.

3. **Streaming reliability:** If your clients disconnect before the first SSE chunk arrives, the upstream call is no longer aborted in v1.107.0+. This may cause unexpected resource hold and cost for long-generating responses.

4. **Cost tracking gaps:** Gemini image requests via the proxy do not write `SpendLogs` rows. If you rely on LiteLLM spend logs for billing attribution, these requests are invisible until the fix lands.

5. **New access control:** PR [#50333](https://github.com/BerriAI/litellm/pull/50333) introduces key-level `disallowed_models`, enabling exclusion-based model access policies at the key level (useful when managing access across large model fleets without maintaining a full allowlist).

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze this GitHub data for Unsloth AI and create a structured digest for 2026-11-15.

Key observations:
1. No releases in the last 24h
2. 29 issues, many with recent activity
3. 173 PRs, showing top 20 by comment count
4. Major developments: DeepSeek-V4.1 native support, FSDP2/TP/PP for Qwen3.8-Flash-Next, voice mode work, various fixes

Let me organize this into the requested sections:

**Today's Highlights:**
- Native DeepSeek-V4.1 support merged with sparse attention, engram tables, fp8/MXFP4 support
- Multi-dimensional parallelism (FSDP2, TP, PP) support for Qwen3.8-Flash-Next and DeepSeek-V4.1
- Voice mode continues to progress through stacked PRs
- Multiple ROCm/gfx issues reported for MI300X and other AMD GPUs

**Releases & Breaking Changes:**
- No new releases today
- v0.1.917 beta still in circulation with reported issues

**New Model & Hardware Support:**
- DeepSeek-V4.1 native support
- Qwen3.8-Flash-Next (qwen4_exp)
- ROCm 7.14 / MI300X (gfx942) - with bugs
- AMD gfx1151 - with performance issues
- AMD RX 9070 XT with ROCm

**Performance & Optimization:**
- QAT bypass fix in cached decode
- FastModel generate no static cache fix
- NVFP4/MXFP4 compressed tensor handling fixes
- Hybrid linear-attention packing on ROCm - no net speedup on gfx1151
- GDN causal conv1d ROCm gate issue (3.1x step time)


- Performance varies significantly across hardware platforms and workloads

Several critical stability issues emerged today. ROCm 7.14/MI300X faces stride assertion problems in flash attention backward passes requiring MATH fallback. Qwen3.8-Flash-Next shows concerning draft acceptance rate degradation from ~74% down to 56-66% with v3.1 GGUFs. Multiple MTP-related bugs and mmap forced loading despite explicit configuration flags add to the instability. The application developer takeaways center on native DeepSeek-V4.1 availability with improved quantization support, voice mode maturation, and ongoing ROCm/GPU optimization work.
</think>


# Unsloth Digest — 2026-11-15

## 1. Today's Highlights

Unsloth merged critical native support for **DeepSeek-V4.1** including sparse attention, engram tables, and fp8/MXFP4 quantization, alongside multi-dimensional parallelism (FSDP2, TP, PP) for Qwen3.8-Flash-Next and DeepSeek-V4.1. Voice mode continues its staged rollout with three stacked PRs targeting hands-free operation, thinking filler, and turn detection. Meanwhile, ROCm stability issues persist: MI300X (gfx942) hit a stride assertion in flash attention backward requiring MATH fallback, and gfx1151 shows the GDN causal conv1d HIP gate consuming 3.1× step time.

---

## 2. Releases & Breaking Changes

| Item | Details | Link |
|------|---------|------|
| **No new releases** | Zero tagged releases in the last 24 h | — |

**Known Active Beta:** v0.1.917-beta (package 2026.11.4) — see §5 for regressions.

---

## 3. New Model & Hardware Support

| Model / Architecture | Backend | Notes |
|----------------------|---------|-------|
| **DeepSeek-V4.1** (native) | CUDA / ROCm | Sparse attention, engram/n-gram tables, fp8 / MXFP4 release loading; LoRA/QLoRA no longer depends on community transformers port | [#17778](https://github.com/unslothai/unsloth/pull/17778) |
| **Qwen3.8-Flash-Next** (`qwen4_exp`) | CUDA / ROCm | Full FSDP2, tensor parallel, and pipeline parallel support; frozen engram/n-gram tables never sharded | [#17785](https://github.com/unslothai/unsloth/pull/17785) |
| **ROCm 7.14 / MI300X** (gfx942) | ROCm | In testing; stride assertion in `_scaled_dot_product_flash_attention_backward` blocks production use (see §5) | [#17548](https://github.com/unslothai/unsloth/issues/17548) |
| **AMD gfx1151** (ROCm) | ROCm | GDN causal conv1d falls back to MIOpen with 3.1× step-time overhead; hybrid linear-attention packing passes exactness probe but yields no net speedup | [#17734](https://github.com/unslothai/unsloth/issues/17734), [#17738](https://github.com/unslothai/unsloth/issues/17738) |
| **AMD RX 9070 XT** (ROCm) | ROCm | Reported with Cloudflare mobile sync issue | [#17689](https://github.com/unslothai/unsloth/issues/17689) |
| **NVFP4 / MXFP4** quantization | CUDA | Fixes landed: unquantized tensors kept loading under compressed-tensors checkpoints; grouped Linears excluded from QAT | [#17775](https://github.com/unslothai/unsloth/pull/17775) |

---

## 4. Performance & Optimization

| Area | Change | Impact | Link |
|------|--------|--------|------|
| **QAT bypass in cached decode** | Fixed `FastModel.generate()` to apply fake quantization in cached decode and single-sample `lm_head` shortcuts | Correctness — batch-1 → batch-2 logits could diverge before | [#17746](https://github.com/unslothai/unsloth/pull/17746) |
| **Static cache in `generate()`** | Removed unconditional `cache_implementation = "static"` that conflicted with caller's `past_key_values` and assisted decoding | Fixes crashes when caller manages KV cache externally | [#17784](https://github.com/unslothai/unsloth/pull/17784) |
| **FSDP2 resume** | Undo Zoo's vanilla expert LoRA layout before loading checkpoint | Fixes crash on expert-LoRA adapter resume under `UNSLOTH_FSDP2=1` | [#17780](https://github.com/unslothai/unsloth/pull/17780) |
| **NVFP4/MXFP4 checkpoint loading** | Prevented random init of unquantized tensors; kept grouped Linears out of QAT | Training correctness on compressed checkpoints | [#17775](https://github.com/unslothai/unsloth/pull/17775) |
| **Linux desktop GPU utilization** | Minimizing GUI recovers 300% tok/s on Intel B70 | User-facing performance drop when window not focused | [#17722](https://github.com/unslothai/unsloth/issues/17722) |
| **Hybrid linear-attention packing (ROCm)** | Opt-in via `UNSLOTH_EXPERIMENTAL_HYBRID_PACKING=1` passes exactness probe | **No net speedup on gfx1151** (step count halves, per-step cost ~doubles) | [#17738](https://github.com/unslothai/unsloth/issues/17738) |
| **GDN causal conv1d ROCm HIP gate** | Falls back to MIOpen on gfx1151 | **3.1× step-time regression** despite Triton kernel correctness | [#17734](https://github.com/unslothai/unsloth/issues/17734) |

---

## 5. Stability & Regressions

Ranked by severity:

### 🔴 Critical (blocks production)

| Issue | Description | Workaround / Fix PR |
|-------|-------------|---------------------|
| [#17548](https://github.com/unslothai/unsloth/issues/17548) | ROCm 7.14 / MI300X (gfx942): stride assertion in `_scaled_dot_product_flash_attention_backward` — MATH fallback required | No fix PR yet |
| [#17402](https://github.com/unslothai/unsloth/issues/17402) | Qwen3.8-Flash-Next UD 3.1 GGUFs: MTP draft acceptance drops ~74% → 56–66% at production temperature (Ryzen AI Max+ 395) | Awaiting 3.1-matched MTP heads |
| [#17733](https://github.com/unslothai/unsloth/issues/17733) | MTP stopped working after llama.cpp b12340-mix-6186f42 | No fix PR yet |
| [#17605](https://github.com/unslothai/unsloth/issues/17605) | **v0.1.917** forces `mmap` despite `--load-mode none`, causing excessive RAM/SSD use | No fix PR yet |

### 🟠 High (degraded behavior)

| Issue | Description | Workaround / Fix PR |
|-------|-------------|---------------------|
| [#17728](https://github.com/unslothai/unsloth/issues/17728) | After llama.cpp CUDA upgrade: Qwen3.8 27B throughput drops 60 t/s → 38 t/s | Under investigation |
| [#17734](https://github.com/unslothai/unsloth/issues/17734) | GDN causal conv1d HIP gate 3.1× overhead on gfx1151 | Triton kernel correct; ROCm gate path needs fix |
| [#17738](https://github.com/unslothai/unsloth/issues/17738) | Hybrid linear-attention packing yields no net speedup on gfx1151 | Needs further tuning or gate improvement |
| [#17663](https://github.com/unslothai/unsloth/issues/17663) | GPU idle after engine update — only "Restore installation" recovered inference (v0.1.917) | No fix PR yet |

### 🟡 Medium (UX / minor)

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#17773](https://github.com/unslothai/unsloth/issues/17773) | iOS "Add to Home Screen" shows "U" text icon instead of logo | [#17776](https://github.com/unslothai/unsloth/pull/17776) merged |
| [#17640](https://github.com/unslothai/unsloth/issues/17640) | SSL cert/key cannot be set via config file or env var | Feature request open |
| [#17722](https://github.com/unslothai/unsloth/issues/17722) | 300% tok/s loss when Unsloth Desktop GUI is minimized on Linux/Intel | Workaround: toggle Settings → Appearance |

---

## 6. What This Means for Application Developers

1. **DeepSeek-V4.1 is now first-class.** If you rely on Unsloth for fine-tuning or serving, the native port (`unsloth/models/deepseek_v41`) replaces the fragile community transformers workaround. Migrate checkpoints and test LoRA/QLoRA training under fp8 and MXFP4 formats — fixes for compressed-tensor checkpoint loading landed today.

2. **Multi-PD parallelism usable in training.** FSDP2 + TP + PP for Qwen3.8-Flash-Next and DeepSeek-V4.1 is merged. Frozen n-gram/engram tables are handled correctly, which was a known pitfall for distributed training of retrieval-augmented models.

3. **Voice mode is close.** Three stacked PRs ([#12384](https://github.com/unslothai/unsloth/pull/12384), [#14084](https://github.com/unslothai/unsloth/pull/14084), [#17069](https://github.com/unslothai/unsloth/pull/17069)) are on track for merging. If you're building audio-capable agents, prepare integration points for the audio.cpp pipeline.

4. **Avoid ROCm 7.14 / MI300X for production inference today.** The stride assertion in flash attention backward is a correctness blocker. If you're on AMD Instinct MI300X, stay on ROCm 7.13 or earlier until the MATH fallback path is validated.

5. **Qwen3.8-Flash-Next MTP users: expect degraded speculative decoding.** Draft acceptance at production temperature is 56–66% versus the 74% baseline. Hold off on deploying UD 3.1 GGUFs in speculative decoding pipelines until 3.1-matched MTP heads are released.

6. **v0.1.917 is unstable on Windows.** The forced-mmap regression and GPU-idle-after-update issue affect Windows 11 deployments. If you're on Windows, delay the update or pin to v0.1.916 until a patch is tagged.

7. **Static cache usage in `generate()` changed.** The fix in [#17784](https://github.com/unslothai/unsloth/pull/17784) removes the automatic `cache_implementation = "static"` assignment. If you were relying on that implicit behavior with external KV cache management, verify your workload still functions correctly.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*