# AI Infrastructure Digest 2026-11-26

> Generated: 2026-11-26 04:19 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report synthesizing the digests I just generated for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me analyze the data across all six projects and create a structured report.

Let me organize the key data points:

**Activity Comparison:**
- vLLM: 135 issues, 500 PRs, no release today
- SGLang: High activity (many PRs), no release today
- llama.cpp: Many releases (b12752-12755, etc.), v1.1.0 release
- Ollama: High activity, llama-server bump PR


- LiteLLM: Active PRs (25+ visible), no release today
- Unsloth: v0.1.925-beta released

**Model Support Race:**
- vLLM: Qwen3.8 (Flash-Next, 2.4T-A95B), GLM 5.3, Muse Spark, Kimi-K3, Inkling 2 (Intel XPU), ColUltraVBERT
- SGLang: MLU GQA/MLA, Hy4-flash sparse MLA (SM89), Physical AI/Robotics
- llama.cpp: Tencent Hy4 flash, Inkling-2-Mini DFlash2, continuing through additional models
- Ollama: Inkling 2 Mini (CUDA, ROCm), Qwen3.8, Hindsight Decision Model, phi4
- LiteLLM: Fireworks Kimi K3.1 Pro Ultra-fast, Ark Seedream
- Unsloth: Inkling 2 Mini (1.8-3.1B)

Now I'm mapping out the performance optimization strategies across these projects—looking at batch-invariant numerics, ROCm optimizations, Rust frontend improvements, and KV cache techniques in vLLM, alongside SGLang's CUDA optimization efforts.

Continuing with the remaining layers: llama.cpp is handling scratch memory reservation and Metal graph optimization, Ollama's focusing on CUDA backends and MLX prefix caching, LiteLLM is doing lazy loading and Rust gateway work, and Unsloth's concentrating on training speed and multi-GPU parallelism. These projects span different infrastructure levels—serving engines at the top, then local runtimes, gateways, and fine-tuning at the foundation. The key trends emerging are Rust adoption in frontend serving, AMD ROCm becoming a first-class target, Blackwell GPU support across the stack, multi-modal improvements, disaggregated prefill/decode serving, FP8 and MXFP4 quantization, and the emerging shift toward Physical AI and robotics applications.
</think>


# AI Infrastructure Ecosystem Digest — 2026-11-26

## 1. Ecosystem Overview

The AI serving infrastructure ecosystem is in a high-velocity convergence phase: all six projects shipped significant changes today, with the collective focus split between **hardware diversification** (AMD ROCm on vLLM/SGLang/llama.cpp/Ollama, Intel XPU/MLU on SGLang/Unsloth, Apple MLX on Ollama/Unsloth, Blackwell sm_120 on SGLang/llama.cpp) and **quantization maturity** (MXFP4/MXFP8 across the board, FP8 fused kernels landing in every project). The Rust frontend race (vLLM #68784, LiteLLM #54625/54622) signals that the serving layer is converging on a Rust core with Python/shell APIs — a structural shift with long-term implications for memory efficiency and cold-start latency. Meanwhile, fine-tuning and serving are blurring: Unsloth's multi-GPU parallelism PRs and llama.cpp's training-mode support mean developers increasingly need to treat the full stack as a single system rather than discrete tooling.

---

## 2. Activity Comparison

| Project | Issues (open) | PRs (open) | Releases (24h) | Release Notes |
|---------|:---:|:---:|:---:|---|
| **vLLM** | 135 | ~500 | 0 | — |
| **SGLang** | High | High | 0 | — |
| **llama.cpp** | ~47 | ~383 | **6** | v1.1.0, Hy4 flash, scratch reservation, async copies, Metal graph, SYCL F8, Windows SIGINT |
| **Ollama** | High | High | 0 | llama-server version bump only |
| **LiteLLM** | ~40 | ~25+ | 0 | — |
| **Unsloth** | 47 | 383 | **1 β** | v0.1.925-beta: Inkling 2 Mini fine-tuning, multi-GPU, comment budget enforcement |

**Interpretation:** llama.cpp is the release champion today (6 commits landed, including a version bump to 1.1.0), while vLLM and SGLang remain in high-volume bugfix/feature PR churn. LiteLLM and Ollama show steady but lower-volume activity consistent with mature proxy/runtime layers. Unsloth's single beta release signals a focused shipping sprint around Inkling 2 Mini.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **Qwen3.8 (Flash-Next, 2.4T)** | ✅ ROCm/MI355X (gfx950) | — | — | ✅ | — | — |
| **Qwen3.5** | ✅ ROCm/MI325X (gfx942) | — | — | ✅ | — | — |
| **Tencent Hy4 (flash, iHC)** | — | ✅ SM89 sparse MLA | ✅ (b12755) | — | — | — |
| **Inkling 2 / Inkling 2 Mini** | ✅ Intel XPU (RFC) | — | ✅ DFlash2 drafter | ✅ CUDA/ROCm | — | ✅ LoRA/QLoRA (v0.1.925-β) |
| **Kimi K3 (2.8T MXFP4, SiTU MoE)** | ✅ ROCm/gfx950 | — | — | — | — | — |
| **GLM 5.3** | ✅ CUDA | — | — | — | — | — |
| **Muse Spark 816B** | ✅ ROCm/MI325X | — | — | — | — | — |
| **ColUltraVBERT (encoder CUDA graph)** | ✅ | — | — | — | — | — |
| **HunyuanVideo** | — | ✅ CFG batching opt | — | — | — | — |
| **FLUX.2 Klein (FP8)** | — | — | — | — | — | ✅ Windows x64/Arm |
| **GigaChat 3.5** | — | — | ✅ | — | — | — |
| **Hindsight Decision Model** | — | — | — | ✅ | — | — |
| **phi4** | — | — | — | ✅ (Metal bug) | — | — |
| **Physical AI / dVLA** | — | ✅ RFC | — | — | — | — |
| **Fireworks Kimi K3.1 Pro Ultra-fast** | — | — | — | — | ✅ | — |
| **Volcengine Ark Seedream** | — | — | — | — | ✅ | — |
| **Cambricon MLU (GQA/MLA)** | — | ✅ | — | — | — | — |
| **Intel Arc Pro B60 (SYCL)** | — | — | ✅ (fixed) | — | — | ❌ (broken) |

**Winner by breadth:** vLLM covers the widest range of production-grade models today, particularly on AMD ROCm and Intel XPU.
**Winner by novelty:** SGLang (Physical AI RFC) and Unsloth (Inkling 2 Mini fine-tuning) are in domains the others have not entered.
**Winner by release velocity:** llama.cpp ships every day; today's 6 commits outpace every other project.

---

## 4. Performance Frontier

The optimization effort across the ecosystem concentrates in six vectors today, each tracked across multiple projects:

### KV Cache & Memory Management

| Project | Work | Status |
|---------|------|--------|
| **vLLM** | Octave KV (3-bit KV cache) for AMD | RFC + PR [#59773](https://github.com/vllm-project/vllm/issues/59773) |
| **vLLM** | Request-level KV offload promotions | RFC [#48193](https://github.com/vllm-project/vllm/issues/48193) |
| **llama.cpp** | Scratch memory reservation in `ggml_backend_graph_optimize()` | Landed (b12728) |
| **SGLang** | KV cache event alignment with vLLM | RFC [#39991](https://github.com/sgl-project/sglang/issues/39991) |
| **Ollama** | Prefix-cache memory leak on Qwen3.8-flash-next MLX | Open [#19891](https://github.com/ollama/ollama/issues/19891) |
| **Ollama** | MLX kernel-reported memory accounting | Landed [#19907](https://github.com/ollama/ollama/pull/19907) |

### Quantization & GEMM Kernels

| Project | Work | Status |
|---------|------|--------|
| **vLLM** | MXFP4/MXFP8 MoE on ROCm gfx950 | PR [#66564](https://github.com/vllm-project/vllm/pull/66564) |
| **vLLM** | AWQ under torch.compile fix | PR [#67494](https://github.com/vllm-project/vllm/pull/67494) |
| **SGLang** | Fused SiLU-and-mul + per-token FP8 quant | PRs [#52029](https://github.com/sgl-project/sglang/pull/52029), [#51842](https://github.com/sgl-project/sglang/pull/51842) |
| **SGLang** | SM120 FP8 GEMM routing to PyTorch for small-M | PR [#51610](https://github.com/sgl-project/sglang/pull/51610) |
| **llama.cpp** | SYCL F8 e4m3 support (CPY, ADD, MUL_MAT, etc.) | Landed (b12726) |
| **llama.cpp** | Few-row MMQ with WMMA on RDNA3.5 (HIP) | PR [#32224](https://github.com/ggml-org/llama.cpp/pull/32224) |
| **Unsloth** | LoRA export norm diagnostic (FP8/FP4 survival) | PR [#19676](https://github.com/unslothai/unsloth/pull/19676) |

### Batch Invariant / Deterministic Numerics

| Project | Work | Status |
|---------|------|--------|
| **vLLM** | Batch-invariant feature (107-comment RFC) | Active [#27433](https://github.com/vllm-project/vllm/issues/27433) |
| **vLLM** | Qwen3.6 GDN greedy DFlash2 divergence (batch-dependent) | Open [#62851](https://github.com/vllm-project/vllm/issues/62851) |
| **llama.cpp** | logprobs nondeterminism on SYCL MoE | Open [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) |

### Distributed / Disaggregated Serving

| Project | Work | Status |
|---------|------|--------|
| **SGLang** | PD disaggregation: `bootstrap_room` reuse contamination | Open [#51980](https://github.com/sgl-project/sglang/issues/51980) |
| **SGLang** | `routed_experts_start_len` clamp fix | Landed [#51942](https://github.com/sgl-project/sglang/pull/51942) |
| **vLLM** | PD disaggregation roadmap Q4 2026 | Active [#43699](https://github.com/sgl-project/sglang/issues/43699) |
| **Unsloth** | TP/PP/EP checkpoint resume on different GPU layouts | Landed [#19685](https://github.com/unslothai/unsloth/pull/19685) |

### Multi-GPU / Hardware-Specific Parallelism

| Project | Work | Status |
|---------|------|--------|
| **Unsloth** | Block compile + packed LoRA (11–14% GPU idle reduction) | PR [#19623](https://github.com/unslothai/unsloth/pull/19623) |
| **Unsloth** | Multi-GPU Wan 2.2 TI2V 5B text encoder placement | Landed [#19671](https://github.com/unslothai/unsloth/pull/19671) |
| **Unsloth** | FLUX.2 Klein 2× GPU token-count split | Landed [#19691](https://github.com/unslothai/unsloth/pull/19691) |
| **SGLang** | DP pad-row elimination on AMD ROCm | PR [#51266](https://github.com/sgl-project/sglang/pull/51266) |
| **SGLang** | Anchor-count binary search in tokenizer manager | PR [#46697](https://github.com/sgl-project/sglang/pull/46697) |

### Rust / Language Rewrite

| Project | Work | Status |
|---------|------|--------|
| **vLLM** | Rust frontend approaching default-enablement | Active [#68784](https://github.com/vllm-project/vllm/issues/68784) |
| **LiteLLM** | Rust gateway: budget check before limiter | PRs [#54625](https://github.com/BerriAI/litellm/pull/54625), [#54622](https://github.com/BerriAI/litellm/pull/54622) |

---

## 5. Layer Positioning

The six projects occupy distinct, partially overlapping positions in the serving stack:

```
┌─────────────────────────────────────────────────────┐
│           GATEWAY / ROUTING / FINE-TUNING            │
│  ┌─────────────┐                    ┌────────────┐  │
│  │   LiteLLM   │  (proxy, routing,  │  Unsloth   │  │
│  │  (gateway)  │   multi-provider)  │ (fine-tune)│  │
│  └──────┬──────┘                    └─────┬──────┘  │
│         │                                  │         │
│  ┌──────▼──────────────────────────────────▼──────┐  │
│  │              LOCAL / EMBEDDED RUNTIME          │  │
│  │  ┌─────────────┐         ┌─────────────────┐  │  │
│  │  │   Ollama    │         │    llama.cpp    │  │  │
│  │  │ (all-in-one │         │  (C/C++/GPU     │  │  │
│  │  │  dev/prod)  │         │   backend lib)  │  │  │
│  │  └──────┬──────┘         └────────┬────────┘  │  │
│  └─────────┼──────────────────────────┼──────────┘  │
│            │                          │             │
│  ┌─────────▼──────────────────────────▼──────────┐  │
│  │              INFERENCE ENGINE                  │  │
│  │  ┌─────────────────┐   ┌────────────────────┐ │  │
│  │  │     vLLM        │   │      SGLang        │ │  │
│  │  │ (production     │   │ (multi-modal,      │ │  │
│  │  │  PyTorch-based) │   │  graph/rust opts)  │ │  │
│  │  └─────────────────┘   └────────────────────┘ │  │
│  └───────────────────────────────────────────────┘  │
│                 HARDWARE ABSTRACTION LAYER           │
│     CUDA / ROCm / Metal / XPU / MLU / Vulkan         │
└─────────────────────────────────────────────────────┘
```

| Layer | Projects | Role |
|-------|----------|------|
| **Fine-tuning** | **Unsloth** | LoRA/QLoRA training, multi-GPU parallelism, GGUF/merged export. Trained model → served by any layer below. |
| **Gateway / Proxy** | **LiteLLM** | Unified API gateway across 100+ providers. Handles auth, rate limiting, cost tracking, multi-model routing. |
| **Local Runtime** | **Ollama**, **llama.cpp** | Ollama = batteries-included local serving; llama.cpp = portable C/C++ inference library with maximum hardware reach (CPU → GPU → NPU → DSP). |
| **Inference Engine** | **vLLM**, **SGLang** | High-throughput, low-latency production serving. Both target the same hardware and models; SGLang adds a multi-modal graph layer while vLLM leads on batch scheduling research. |

**Overlap zones:** Ollama embeds llama.cpp as its core engine. vLLM and SGLang both serve similar production workloads. Unsloth's exported GGUF files feed llama.cpp and Ollama downstream.

---

## 6. Trend Signals

### 1. Rust is eating the inference serving layer
Both vLLM and LiteLLM are independently moving core hot paths into Rust (vLLM's frontend, LiteLLM's gateway). This converges on a future where Python is the control plane and Rust is the data plane — a structural shift that improves memory efficiency, cold-start latency, and multi-tenancy isolation. **Agents and application developers should test Rust-frontended serving stacks now** before the transitions land as defaults.

### 2. AMD ROCm is no longer a second-class citizen
vLLM's stacked PRs for MI355X (gfx950) and MI325X (gfx942), SGLang's DP pad-row AMD optimization, llama.cpp's RDNA3.5 WMMA work, and Ollama's Inkling 2 ROCm backend all landed today. AMD is being optimized across every kernel layer — GEMM, attention, MoE, KV cache. **Deployers with AMD hardware should re-evaluate whether the ROCm gaps from 2024 still exist.**

### 3. Batch-invariant determinism is becoming a first-class feature
The 107-comment RFC in vLLM (#27433) signals that batch-dependent numerical divergence — long treated as a known quirk — is now being formally addressed. This matters for agentic pipelines where the same input must produce identical outputs regardless of concurrent load. **Agent developers building deterministic pipelines should track this thread.**

### 4. Physical AI and robotics are entering the serving stack
SGLang's new roadmap for "Physical AI / Robotics Serving" (Issue #53203) unifying Diffusion, miles_diffusion, and miles, and Unsloth's Wan 2.2 TI2V multi-GPU work, indicate the ecosystem is extending beyond language models into dVLA, world models, and embodied AI. **Robotics and simulation teams should begin evaluating these toolchains** — the serving infrastructure for embodied AI is being built now.

### 5. FP8 quantization is saturating every layer
Fused SiLU-and-mul + FP8 quantization in SGLang, MXFP4/MXFP8 MoE in vLLM, SYCL F8 e4m3 in llama.cpp, Fireworks Kimi K3.1 Pro Ultra-fast in LiteLLM, and Unsloth's LoRA norm diagnostic for FP8 survival all converge on the same message: FP8 is the new BF16. **Teams still on FP16 should plan a quantization migration; the tooling is now mature across every major project.**

### 6. Multi-modal is branching into specialized serving paths
SGLang's HunyuanVideo CFG batching, vLLM's Lightweight Render API RFC, Ollama's image placeholder parsing fix, and SGLang's Diffusion CFG batching all point to image/video generation handling that differs fundamentally from language model serving. **Application developers building multimodal pipelines should not assume language-model serving patterns apply** — KV-cache semantics, batching strategies, and latency profiles diverge significantly.

### 7. Prefix caching correctness is fragile across vendors
The cluster of prefix-cache bugs today — vLLM's NaN logits after prefix-cache hit (#55766), Ollama's `[img-` false-positive detection (#19911), Ollama's Qwen3.8 prefix-cache memory leak (#19891), and SGLang's anchor-count linear scan (#46697) — shows that prefix caching is implemented inconsistently and interacts with model architecture (GDN, DeltaNet, sliding-window attention) in non-obvious ways. **Production deployments using prefix caching should validate output correctness after any engine upgrade.**

---

*Cross-project synthesis from vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth GitHub activity on 2026-11-26.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze this GitHub data for vLLM project and generate a structured digest for 2026-11-26.

Key observations:

1. **No new releases** in the last 24 hours
2. **High activity on issues** - 135 total, many feature requests and performance optimizations
3. **High activity on PRs** - 500 total, lots of documentation and bugfix PRs

Let me categorize the key items:

**Today's Highlights:**
- Batch Invariant feature discussion (107 comments - very active)
- ROCm AMD GPU optimizations for Qwen3.8 models
- Rust frontend as default tracking
- KV offload request-level promotions RFC

**New Model & Hardware Support:**
- GLM 5.3 Performance Optimization
- Qwen3.8 variants (Flash-Next, 2.4T-A95B)
- Kimi-K3 with SiTU MoE on ROCm
- Inkling 2 on Intel XPU
- ColUltraVBERT encoder CUDA graphs

**Performance & Optimization:**
- Batch Invariant feature (107 comments)
- ROCm optimizations for MI355X (gfx950), MI325X (gfx942)
- AWQ under torch.compile fix
- MXFP4/MXFP8 MoE optimizations
- DeepSeek V4.1 Engram prefetch
- GDN ReplaySSM for speculative decoding
- Octave KV (3-bit KV cache) for AMD
- Weight-loading-bound startup improvements

**Stability & Regressions:**
- Qwen3.6 GDN greedy DFlash2 divergence (batch-dependent numerics)
- Qwen3.5/3.8 NaN logits after prefix-cache hit
- Kimi-K3 silent garbage output bug


- GLM-5.2-FP8 CUDA graph cold replay issue
- Ripple parser tool-call parsing bug

**What This Means for App Developers:**
- Rust frontend becoming default soon
- Better multi-modality with Lightweight Render API
- Improved tool-calling with DSML fixes
- Structured output llguidance import fix for older glibc
- NUMA binding fixes

Now I'll structure this into a professional digest.
</think>


# vLLM Project Digest — 2026-11-26

## 1. Today's Highlights

The vLLM community is tackling two major infrastructure themes today: **batch-invariant determinism** (issue #27433 gathering 107 comments, aiming to eliminate numerical divergence across batch configurations) and **ROCm/AMD GPU performance maturity** (multiple stacked PRs targeting gfx950/MI355X and gfx942/MI325X for Qwen3.8 and Muse Spark models). Meanwhile, the Rust frontend is approaching default-enablement status (#68784), signaling a significant serving-layer shift.

---

## 2. Releases & Breaking Changes

| Item | Details | Links |
|------|---------|-------|
| **No new releases** | No tagged releases in the last 24 hours. | — |
| **Rust frontend default track** | Planning underway to make the Rust frontend the default for `vllm serve` in upcoming releases once remaining checklist items are complete. | [#68784](https://github.com/vllm-project/vllm/issues/68784) |

---

## 3. New Model & Hardware Support

| Model / Architecture | Support Type | Notes | Links |
|----------------------|--------------|-------|-------|
| **Qwen3.8-2.4T-A95B (Quark-MXFP4)** | ROCm/gfx950 (MI355X) optimization | AMD-tracked performance uplift plan; stacked PRs on `main`. | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **Qwen3.8-Flash-Next (Quark-MXFP4)** | ROCm/gfx950 (MI355X) optimization | GatedDeltaNet (36L), QuerySparse Attention (12L), HyperConnection, MXFP4 MoE. | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **GLM-5.3** | CUDA optimization | Same `glm_moe_dsa` base as GLM-5.2; further quantization and CUDA kernel work. | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **Muse Spark Open 816B (PTPC-FP8)** | ROCm/gfx942 (MI325X) optimization | Planned uplift items across GEMM, attention, and MoE. | [#64018](https://github.com/vllm-project/vllm/issues/64018) |
| **Kimi-K3 (2.8T MXFP4, SiTU MoE)** | ROCm/gfx950 (MI350X) bug fix | Silent garbage output when AITER flag omitted; fix needed. | [#52442](https://github.com/vllm-project/vllm/issues/52442) |
| **Inkling 2 (Mini + Base)** | Intel XPU (Arc Pro B60/B70, Battlemage) | RFC for shared `inkling2/common/` implementation upstream. | [#69712](https://github.com/vllm-project/vllm/issues/69712) |
| **ColUltraVBERT** | Multi-modality CUDA graphs | Encoder CUDA graph replay support added. | [#69925](https://github.com/vllm-project/vllm/pull/69925) |
| **Qwen 3.x (GDN)** | Varlen support | Feature request to enable variable-length batching for GDN architectures. | [#51869](https://github.com/vllm-project/vllm/issues/51869) |

---

## 4. Performance & Optimization

| Area | Work | Status | Links |
|------|------|--------|-------|
| **Batch-invariant numerics** | Feature request to make model outputs deterministic regardless of batch composition, eliminating batch-dependent preemption/recompute divergence. | Active (107 comments) | [#27433](https://github.com/vllm-project/vllm/issues/27433) |
| **ROCm MXFP4 + dynamic MXFP8 MoE** | New `w_mxfp4_a_mxfp8` scheme on gfx950 via AITER `moe_gemm_a8w4` (GEMM1 → SwiGLU-OAI → MXFP8; GEMM2 consumes pair). | PR open | [#66564](https://github.com/vllm-project/vllm/pull/66564) |
| **AWQ under torch.compile** | Fixes decode path incorrectly taking dequantize+matmul route (bypasses `awq_gemm`). | PR open | [#67494](https://github.com/vllm-project/vllm/pull/67494) |
| **Octave KV (3-bit KV cache)** | Native 3-bit KV cache compression for AMD RX 7900 XTX (TP4). | RFC + PR | [#59773](https://github.com/vllm-project/vllm/issues/59773) |
| **GDN ReplaySSM for speculative decoding** | Ports TensorRT-LLM's GDN cached replay to vLLM for Qwen3.5/3.6 speculative decoding. | PR open | [#69180](https://github.com/vllm-project/vllm/pull/69180) |
| **DeepSeek V4.1 Engram prefetch** | Opt-in CPU-offloaded row prefetch (`--engram-config.host_prefetch_threads 8`) for eager prefill. | PR open | [#64500](https://github.com/vllm-project/vllm/pull/64500) |
| **Weight-loading-bound startup** | Roadmap to enable sub-second replica activation via pre-prepared weight sharing. | RFC active | [#48193](https://github.com/vllm-project/vllm/issues/48193) |
| **PR pipeline time** | Reduced P50 CI time from 73.2 → 53.9 min; target ~30 min. | In progress | [#66411](https://github.com/vllm-project/vllm/issues/66411) |
| **Rust frontend perf** | Memory and latency improvements as default-enablement approaches. | Tracking | [#68784](https://github.com/vllm-project/vllm/issues/68784) |
| **libtorch Stable ABI (ROCm)** | Feature parity with CUDA: enable libtorch-ABI-stable wheels for ROCm. | RFC | [#67551](https://github.com/vllm-project/vllm/issues/67551) |

---

## 5. Stability & Regressions

| Severity | Bug | Description | Workaround / Fix | Links |
|----------|-----|-------------|------------------|-------|
| **🔴 High** | Qwen3.6 GDN greedy DFlash2 divergence | Numerics diverge from batch-dependent reference; preemption/recompute causes corruption. | None noted | [#62851](https://github.com/vllm-project/vllm/issues/62851) |
| **🔴 High** | Qwen3.5/3.8 NaN logits after prefix-cache hit | Occurs when prior prefill ended 4–10 tokens past a block boundary; Mamba cache mode align affected. | None noted | [#55766](https://github.com/vllm-project/vllm/issues/55766) |
| **🔴 High** | Kimi-K3 silent garbage output | On ROCm/gfx950, AITER a8w4 fp8-activation MoE produces garbage when `VLLM_ROCM_USE_AITER_MOE_SITUV2_A8W4` flag is absent. | Set flag | [#52442](https://github.com/vllm-project/vllm/issues/52442) |
| **🟡 Medium** | GLM-5.2-FP8 first-request garbage | Cold CUDA graph replay corrupts prefill on MI325X; decode-only mode works. | `--cudagraph_mode=FULL_DECODE_ONLY` | [#52150](https://github.com/vllm-project/vllm/issues/52150) |
| **🟡 Medium** | Qwen3.8-Flash-Next decode starvation | Long prefill workloads periodically starve active decode 3–7 minutes on DGX Spark TP2. | None noted | [#54919](https://github.com/vllm-project/vllm/issues/54919) |
| **🟢 Low** | Ripple parser tool-call drop | Parser drops all text after a tool-call/think tag appearing in plain prose. | None noted | [#69243](https://github.com/vllm-project/vllm/issues/69243) |
| **🟢 Fixed** | NUMA binding race | Automatic NUMA binding resolved before concurrent worker start. | PR #69978 | [#69978](https://github.com/vllm-project/vllm/pull/69978) |
| **🟢 Fixed** | llguidance import + glibc compat | Deferred import and relaxed version bound for glibc < 2.31 (RHEL 8). | PR #67751 | [#67751](https://github.com/vllm-project/vllm/pull/67751) |

---

## 6. What This Means for Application Developers

| Takeaway | Detail |
|----------|--------|
| **Rust frontend is imminent** | If you run `vllm serve`, test your workloads against the Rust frontend now. The migration to default is weeks away; parity gaps are being closed rapidly. |
| **Prefix caching edge cases** | If you use `--enable-prefix-caching` with Qwen3.5/3.8 GDN models, be aware of NaN logits triggered by specific block-boundary alignments; monitor outputs closely or disable prefix caching until #55766 is resolved. |
| **AMD ROCm is production-adjacent** | The stacked ROCm optimization PRs (MXFP4/MXFP8 MoE, Octave KV) indicate AMD MI300/MI350 series is approaching first-class status; early adopters should track the AMD-specific issues for known workarounds (e.g., the Kimi-K3 AITER flag). |
| **Tool-calling improvements landing** | DSML parameter parsing fixes (#62259) and Ripple parser bugfix (#69243) are incoming; update after these PRs merge for more reliable structured tool outputs. |
| **Multi-modality preprocessing offload** | RFC for a lightweight Render API (#56172) proposes moving heavy multimodal preprocessing off the CPU sidecar; this could significantly improve latency for vision-heavy agent workloads. |
| **Quantization MFU metrics** | Custom quantization methods will soon report accurate weight-byte sizes for MFU calculations (#65143), improving observability for out-of-tree quantization schemes. |
| **Glibc 2.28 compatibility restored** | Users on RHEL 8 / Rocky 8 can now use structured output features without version conflicts (#67751). |

---

*Digest generated from vllm-project/vllm GitHub activity on 2026-11-26.*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the GitHub data for SGLang and generate a structured digest for 2026-11-26.

Key observations from the data:

1. **No releases in last 24h** - The "Latest Releases" section is empty.

2. **High-activity issues:**
   - #42752: Flaky tests and CI infrastructure failures - very active (271 comments)
   - #43699: PD Disaggregation Roadmap Q4 2026
   - #50045: SGLang 1.0 Release Tracker (19 comments)
   - #17050: CI Test Failures tracking
   - #49055: Rust server stack performance follow-ups
   - #39991: KV cache events alignment with vLLM
   - #51980: Bug in PD disaggregation with bootstrap_room

3. **New PRs (20 shown):**
   - #53245: DSV4 paged consumer decode optimization for SM120
   - #53242: Hy4-flash sparse MLA on Ada (SM89)
   - #53244: Fix for quantized MoE checkpoint
   - #53243: HunyuanVideo size alignment fix
   - #52200: ZMQ port race fix for kv_events test
   - #52029: Fused SiLU-and-mul with FP8 quant in MoE
   - #51944: Mamba chunked prefill alignment fix
   - #51942: Disaggregation routed_experts_start_len fix
   - #51887: CPU quantization fix
   - #51842: Fused SiLU-and-mul per-token FP8 kernel
   - #51814: CuTe DSL GDN fix
   - #51610: SM120 FP8 GEMM routing to PyTorch for small M
   - #47584: HiCache host memory pool fix for ROCm
   - #47243: Encoder failure crash prevention
   - #51266: DP pad rows optimization for AMD
   - #52877: MXFP4 CUTLASS MoE padding fix
   - #52121: Diffusion CFG batching optimization
   - #51189: Diffusion grouped sequential error handling
   - #49214: MLU GQA/MLA attention support

4. **New roadmap item:**
   - #53203: SGLang Diffusion Physical AI and Robotics Serving

5. **New bug:**
   - #53215: sgl-kernel 0.3.21 FA3 import

I should include #53215 as well.

The most critical issues involve CUDA 2.14.1 compatibility with JIT kernels, PD disaggregation correctness problems, CI infrastructure instability, and the upcoming 1.0 release. Performance work is concentrated on FP8 kernels, SM120 support, MoE optimizations, and diffusion improvements. New hardware capabilities include MLU GQA/MLA, Hy4-flash sparse MLA on Ada, and Physical AI serving.
</think>


# SGLang Digest — 2026-11-26

## 1. Today's Highlights

SGLang contributors are driving forward on two parallel tracks: hardening the 1.0 stability release while simultaneously shipping new hardware backends and performance kernels. Today's activity features a new PyTorch 2.14.1+cu130 compatibility regression that blocks JIT-compiled kernels on sm_89, an ongoing PD disaggregation correctness bug, and fresh MLU (Cambricon) GQA/MLA attention support landing in PR #49214.

## 2. Releases & Breaking Changes

| Item | Details |
|------|---------|
| **No new releases** | The 0.5.x series continues; no tags published in the last 24 hours. |
| **SGLang 1.0 tracker active** | Issue #50045 tracks hardening work for the upcoming stability release. The focus is replacing silent configuration changes with explicit errors and defining a 1.x compatibility policy. Upgrading from 0.5.x may require changes. |

---

## 3. New Model & Hardware Support

| Feature | Description | Link |
|---------|-------------|------|
| **MLU GQA/MLA Attention** | Added first-class support for Cambricon MLU accelerators via a new MHA attention backend supporting causal prefill, cached-prefix prefill, decode, mixed batches, and sliding-window attention. | [PR #49214](https://github.com/sgl-project/sglang/pull/49214) |
| **Hy4-flash Sparse MLA on Ada (SM89)** | Opt-in attention compatibility for L40 (SM89) where the sparse prefill op previously rejected the hardware and the Triton fallback was blocked by configuration guards. | [PR #53242](https://github.com/sgl-project/sglang/pull/53242) |
| **Physical AI / Robotics Serving** | New roadmap issue for unifying SGLang Diffusion, `miles_diffusion`, and `miles` into a shared stack for dVLA, WAM, and interactive world models. | [Issue #53203](https://github.com/sgl-project/sglang/issues/53203) |

---

## 4. Performance & Optimization

| Category | Change | Impact | Link |
|----------|--------|--------|------|
| **DSV4 paged decode** | Score only candidate blocks in paged consumer decode; enable grouped verify on SM120. Eliminates full-context scans in `publish_decode` / `consume_decode` on Hopper and Blackwell. | Latency/throughput on long-context decode | [PR #53245](https://github.com/sgl-project/sglang/pull/53245) |
| **Fused SiLU-and-mul + FP8 quant** | Fused kernel combining `silu_and_mul` with per-token FP8 quantization, eliminating an HBM write + 2× HBM read of the intermediate activation in every SwiGLU MLP layer. | ~1 kernel reduction per MoE/MLP layer | [PR #52029](https://github.com/sgl-project/sglang/pull/52029), [PR #51842](https://github.com/sgl-project/sglang/pull/51842) |
| **SM120 FP8 GEMM routing** | Routes small-M rowwise GEMMs to PyTorch's native FP8 path instead of CUTLASS's fixed 128×128×128 tile, which underfills Blackwell SM120 on narrow decode shapes. | Throughput on SM120 decode | [PR #51610](https://github.com/sgl-project/sglang/pull/51610) |
| **DP pad-row elimination on AMD** | `SGLANG_HIP_DP_FUSED_PAD_GATHER` keeps DP padding rows out of the aiter MoE gather/sort on ROCm, removing masked_fill overhead and expert-load imbalance. | Throughput on AMD MI300/MI350 | [PR #51266](https://github.com/sgl-project/sglang/pull/51266) |
| **Diffusion CFG batching** | Batches the two CFG branches into a single DiT forward pass when the model is layerwise-offloaded from host memory, eliminating redundant streaming copies. Profile shows copies dominate 24-GPU 10-step serial runs. | Memory bandwidth / throughput on large DiT | [PR #52121](https://github.com/sgl-project/sglang/pull/52121) |
| **Anchor-count binary search** | Replaces linear scan of anchor_positions per item boundary with binary search in `TokenizerManagerScoreMixin._anchor_counts_per_item`. | Tokenizer manager throughput on high-frequency score requests | [PR #46697](https://github.com/sgl-project/sglang/pull/46697) |

---

## 5. Stability & Regressions

| Severity | Issue | Impact | Status | Link |
|----------|-------|--------|--------|------|
| 🔴 **Regression** | JIT kernels fail with `CUDA error: invalid resource handle` on PyTorch 2.14.1+cu130 at launch (works on +cu126). Affects all JIT-compiled kernels at sm_89 on default sglang[all]==0.5.23. | Server fails to start | Open | [Issue #50887](https://github.com/sgl-project/sglang/issues/50887) |
| 🔴 **Correctness** | PD disaggregation: a decode request reusing a live `bootstrap_room` receives another request's output with HTTP 200. Follow-up to #40125. | Request contamination | Open | [Issue #51980](https://github.com/sgl-project/sglang/issues/51980) |
| 🟠 **Flakiness** | CI infrastructure failures and flaky tests reported across NVIDIA `PR Test Base` / `PR Test Extra` runs (271 comments on tracker). 2 broken + 26 flaky tests on main branch at last check. | Delayed reviews, CI waste | Active | [Issue #42752](https://github.com/sgl-project/sglang/issues/42752), [Issue #17050](https://github.com/sgl-project/sglang/issues/17050) |
| 🟠 **Regression** | NVFP4 KV cache regresses Qwen4Exp decode ~29% on DGX Spark (SM121) vs fp8_e4m3 KV cache. The new default `NVFP4_KV_CACHE=1` causes this. | Throughput drop on Blackwell | Closed (inactive) | [Issue #36797](https://github.com/sgl-project/sglang/issues/36797) |
| 🟡 **Bug fix (merged)** | `routed_experts_start_len` clamped to prompt length on PD decode; fixes downstream R3 + PD disaggregation failures. | Correctness in disaggregated serving | [PR #51942](https://github.com/sgl-project/sglang/pull/51942) |
| 🟡 **Bug fix (merged)** | MXFP4 CUTLASS MoE weight buffers padded to whole mxfp4 blocks; fixes server crash on `--tp 4/8` with `flashinfer_mxfp4` runner. | Stability on MoE MXFP4 | [PR #52877](https://github.com/sgl-project/sglang/pull/52877) |
| 🟡 **Bug fix (merged)** | `SGLANG_CPU_QUANTIZATION` wired into `DefaultModelLoader` for on-device quantization of oversized checkpoints. | Memory feasibility on constrained GPUs | [PR #51887](https://github.com/sgl-project/sglang/pull/51887) |
| 🟡 **Bug fix (open)** | sgl-kernel 0.3.21 FA3 import fails with nvidia-cutlass-dsl>=4.8 due to FA4 guard only catching `ImportError`. Fixed on main (file removed), but legacy release affected. | Compatibility with newer CUTLASS DSL | [Issue #53215](https://github.com/sgl-project/sglang/issues/53215) |

---

## 6. What This Means for Application Developers

| Takeaway | Detail |
|----------|--------|
| **Avoid PyTorch 2.14.1 + cu130 for now** if you rely on JIT-compiled kernels (FlashAttention, MoE, custom Triton kernels). Pin to `+cu126` or wait for a fix to land in a patch release. | [Issue #50887](https://github.com/sgl-project/sglang/issues/50887) |
| **PD disaggregation correctness concern** for production deployments: the `bootstrap_room` reuse bug can silently return wrong outputs. If you run prefill-decode disaggregation, monitor for this and check the linked fix PR #51942. | [Issue #51980](https://github.com/sgl-project/sglang/issues/51980), [PR #51942](https://github.com/sgl-project/sglang/pull/51942) |
| **New MLU backend available** for Cambricon hardware — teams running on MLU can now use SGLang with GQA and MLA models natively. | [PR #49214](https://github.com/sgl-project/sglang/pull/49214) |
| **SGLang 1.0 migration coming**: the 1.0 stability release will introduce breaking configuration changes (silent fallbacks becoming explicit errors). Review the upgrade notes when the release candidate ships. | [Issue #50045](https://github.com/sgl-project/sglang/issues/50045) |
| **Performance gains incoming** for FP8 MoE and SM120 deployments — the fused SiLU+FP8 quant kernels and Blackwell GEMM routing changes should improve throughput noticeably once merged. | [PR #52029](https://github.com/sgl-project/sglang/pull/52029), [PR #51610](https://github.com/sgl-project/sglang/pull/51610) |
| **Diffusion serving on constrained memory**: CFG batching reduces host→GPU streaming overhead for large DiT models; relevant for Qwen-Image and HunyuanVideo deployments. | [PR #52121](https://github.com/sgl-project/sglang/pull/52121) |

---

*Digest generated from SGLang repository activity on 2026-11-26. Data covers issues and PRs updated in the prior 24-hour window.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a structured digest for llama.cpp for the date 2026-11-26 based on the provided GitHub data. Let me analyze the data and create a well-organized technical digest.

Let me organize the key information:

**Releases (last 24h):**
- b12755: Hy4 flash model support (Tencent Hy4 with sparse and sliding-window MLA layers)
- b12754: ggml-openvino fix
- b12753: llama seq state restore fix with ON_DEVICE
- b12752: Version bump to 1.1.0
- b12751: vocab Metaspace prepend_scheme for BPE
- b12738: Windows CTRL_BREAK_EVENT handler for clean shutdown
- b12734: Metal graph chunked commit with command buffer thread
- b12732: ggml async input copies (CUDA)
- b12728: ggml scratch memory reservation
- b12726: SYCL F8 e4m3 support

**Issues (top by activity):**
- #21690 (CLOSED): Gemma 4 RAM/eval bug (50 comments)
- #31206: logprobs nondeterminism on SYCL MoE (14 comments)
- #30301: SYCL RMS_NORM bug on Arc Pro B60 (13 comments)
- #22531: Feature request for web UI with other backends (11 comments)
- #31560 (CLOSED): Vulkan KHR_coopmat nondeterminism on Arc Pro B70 (11 comments)
- #32246 (CLOSED): Docker tags predictability (10 comments)
- #17107 (CLOSED): KV Cache persistence on disk (9 comments)
- #21385 (CLOSED): Per-head KV cache quantization findings (8 comments)
- #32810: V100 prefill regression for hybrid models (8 comments)


- #32776: Speculative decoding slowdown on Qwen3.5 hybrid (7 comments)
- #17798: Multiple responses in WebUI (7 comments)
- #29183: SYCL DeltaNet token soup on long prompts (7 comments)
- #32780: UI asset validation failure during build (7 comments)
- #32964: gpt-oss peg-native parse failure (7 comments)
- #32918: convert_hf_to_gguf.py tensor count error for Qwen 3.8 27B (6 comments)
- #32361 (CLOSED): Web UI unresponsive with Chrome font size 24+ (6 comments)

Recent work spans speculative decoding performance issues with hybrid architectures, WebUI enhancements, SYCL backend fixes, and model conversion tooling. The V100 regression and token soup problem on Arc hardware are particularly notable concerns.

New PRs focus on hardware acceleration: indexed bias flash attention for CUDA and HIP (#33063), integer overflow fixes for MMF matrix operations (#33044), and SPLIT_MODE_TENSOR restrictions for Hadamard models (#33080). RDNA3.5 GPU optimization via few-row MMQ with WMMA (#32224) and Vulkan int8 matmul improvements for AMD compilers (#32528) are also in flight. SYCL backend quantization support is being re-enabled (#32961), while Omni video parsing (#33078), GDN vectorization (#33077), and Intel Xe2 tiling adjustments (#33076) address specific platform needs. Hexagon DSP support continues expanding (#32582).

Communication fast V2 with Intel leak stopgap and Xe2/B70 fixes (#32058) is being merged, along with gated delta net ESIMD kernel (#31762). Draft model support is being added for Spark2.5 (#31372), Inkling-2-Mini DFlash2 (#33073), and cvector-generator layer capture alignment (#33074). Common GDN code extraction is in progress (#32924), GroveMoE adjugate experts are being fixed (#33071), and GigaChat 3.5 model support (#25342) alongside DFlash2 draft acceptance fixes (#33049) are also being addressed.
</think>


# llama.cpp Digest — 2026-11-26

## 1. Today's Highlights

**llama.cpp v1.1.0 released** (commit b12752), marking a new minor version milestone. Key additions include improved async input copies for CUDA, scratch memory reservation during graph optimization, and initial SYCL F8 e4m3 quantization support. Windows users gain clean shutdown via CTRL_BREAK_EVENT handling, and Tencent's Hy4 flash model (with sparse/sliding-window MLA and DeepSeek41 Engram tables) is now supported.

## 2. Releases & Breaking Changes

| Commit | Change | Notes |
|--------|--------|-------|
| **b12752** | **Version bumped to 1.1.0** | New minor release |
| b12753 | Fixed seq state restore with `ON_DEVICE` | Regression fix for offloaded models |
| b12751 | Implemented `Metaspace prepend_scheme` always for BPE tokenizers | Tokenizer behavior change |
| b12738 | Added `CTRL_BREAK_EVENT` handler on Windows | Enables clean shutdown from parent processes that cannot send SIGINT |

**Breaking note:** BPE tokenizer users should verify `prepend_scheme` behavior if upgrading; the change enforces consistent Metaspace handling.

## 3. New Model & Hardware Support

### Model Support
| Model | Type | Commit | Details |
|-------|------|--------|---------|
| **Tencent Hy4 (hy_v4_flash)** | Draft model | b12755 | Trunk with iHC, gated MLA, sparse/sliding-window MLA, sandwich norms, latent routed experts, DeepSeek41 Engram tables |
| **Inkling-2-Mini DFlash2** | Draft model | #33073 | New drafter architecture support |
| **Youtu-Parsing-Omni** | Vision/Audio/Video | #33078 | Tencent multimodal model with interleaved audio tracks |
| **GigaChat 3.5** | MoE (432B/28B active) | #25342 | DeepSeek-V3-style backbone with MLA + DeepSeek MoE |
| **Spark2.5 DSpark** | Draft model | #31372 | Shares Spark2.5 architecture |

### Backend & Quantization
- **SYCL F8 e4m3** — Initial support landed for `SET_ROWS`, `CPY`, `ADD`, `MUL_MAT`, `MUL_MAT_ID` (#32726)
- **SYCL MMQ re-enabled** — Q4_0/Q4_1/Q5_0/Q5_1/Q8_0 quantization now functional after scratch buffer fix (#32961)
- **Hexagon ggml 2.0** — New int-hmx modes (w8a8, w8a16), automatic f32→f16 lowering, generic DMA pipelines (#32582)

## 4. Performance & Optimization

### Landed Optimizations
| Area | Commit | Impact |
|------|--------|--------|
| **CUDA async input copies** | b12732 | Single blocking copy per split instead of per-input; opt-in via `async_host_input` cap |
| **GGML scratch reservation** | b12728 | Backends can reserve compute buffers before specific nodes during `ggml_backend_graph_optimize()` |
| **Metal chunked graph commit** | b12734 | Single command buffer thread; reduces GPU pipeline stalls on Apple Silicon |
| **SYCL comm_exchange_fast V2** | #32058 | Scales with allreduce frequency; gains on tensor-parallel PP/TG throughput |

### In-Progress Optimizations (Open PRs)
| PR | Description | Target |
|----|-------------|--------|
| #33063 | Flash Attention with indexed bias | CUDA + HIP |
| #33044 | Fix int overflow in MMF matrix offsets | CUDA — prevents OOB reads past 2^31 elements on F16/BF16 DeepSeek-V3 |
| #32224 | Few-row MMQ with WMMA for RDNA3.5 | HIP |
| #32528 | Vulkan int8 MMQ accumulate folding | AMD (reduces shader compiler performance gap) |
| #33077 | Vectorized `ggml_vec_exp_f32` | GDN KDA path speedup |
| #33076 | Clamp Vulkan matmul tile to medium on Intel Xe2 (ANV) | Prevents GPU engine timeouts on Arc B60 |

### Benchmark Notes
- SYCL gated DeltaNet ESIMD kernel (#31762): Qwen3.8-27B Q3_K_P inference improved ~12% with `-fa on -ctk q4_0 -ctv q4_0 -b 1024 -ub 1024`

## 5. Stability & Regressions

### Active Issues (Ranked by Discussion Volume)
| Issue | Severity | Status | Summary | Fix PR |
|-------|----------|--------|---------|--------|
| [#21690](https://github.com/ggml-org/llama.cpp/issues/21690) | **High** | CLOSED | Gemma 4 checkpoints/MMProj cause OOM — abnormal RAM consumption | — |
| [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) | Medium | OPEN | logprobs nondeterministic on SYCL MoE; seed doesn't pin distribution | — |
| [#32810](https://github.com/ggml-org/llama.cpp/issues/32810) | Medium | OPEN | V100 (sm_70) prefill regression in v1.0 for hybrid models; FATTN halves `nbatch_V2` vs 0.4.1 | — |
| [#32776](https://github.com/ggml-org/llama.cpp/issues/32776) | Medium | OPEN | Speculative decoding ~2.2–2.4× slower on Qwen3.5 hybrid (CUDA) | — |
| [#29183](https://github.com/ggml-org/llama.cpp/issues/29183) | Medium | OPEN | SYCL DeltaNet produces token soup on long prompts (Qwen3.6/3.8, Nemotron) | — |
| [#32780](https://github.com/ggml-org/llama.cpp/issues/32780) | Low | OPEN | UI asset validation fails during build (v1.0.0, v0.7.0) | — |

### Closed Issues of Note
- **#31560** — Vulkan `KHR_coopmat` nondeterminism on Intel Arc Pro B70 (Mesa 26.2.5) resolved
- **#32361** — WebUI unresponsiveness with Chrome font size ≥24 fixed
- **#21385** — KV cache quantization study: q4_0 is lossless on hybrid models; per-head adaptive allocation gives +8% quality on standard models

## 6. What This Means for Application Developers

### Action Items
1. **Windows server deployments:** Upgrade to capture the CTRL_BREAK_EVENT fix — scripts that launch `llama-server` as a child process will now get clean shutdowns instead of abrupt kills (#32080, in b12738).

2. **Intel Arc B60 users:** Avoid large Vulkan matmul tiles (`-ub > 64`); a fix is pending in #33076 to prevent GPU engine timeouts.

3. **SYCL users with MoE models:** The logprobs nondeterminism issue (#31206) means you cannot rely on `seed` for reproducible probability outputs on SYCL + MoE configurations. Monitor the fix status.

4. **Hybrid model users (Qwen3.5, GDN-based):** The V100 prefill regression (#32810) and speculative decoding slowdown (#32776) warrant testing before upgrading from 0.4.1 to 1.1.0.

5. **Tokenizer migrations:** If you use BPE tokenizers, the `prepend_scheme` enforcement in b12751 may alter tokenization output; validate against known test cases.

### Opportunistic Upgrades
- **macOS Apple Silicon** — Metal performance improved via chunked graph commits (b12734)
- **CUDA deployments** — Async input copies (b12732) reduce host-to-device transfer overhead for multi-input graphs
- **Intel SYCL** — F8 e4m3 quantization and MMQ re-enablement (#32961) extend supported precisions

### Monitor
- DFlash2 draft acceptance fix (#33049) — if using Inkling-2-Mini, acceptance rates were extremely low (~0.1%)
- GroveMoE adjugate expert fix (#33071) — output divergence from reference if using inclusionAI/GroveMoE

---

*Data sourced from github.com/ggml-org/llama.cpp @ 2026-11-26*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze this GitHub data for Ollama on 2026-11-26 and create a structured digest.

Key observations from the data:

1. **Releases**: None in the last 24h (though PR #19917 is a "bump llama-server" PR from today)

2. **Major themes from issues**:
   - Performance regression with 0.40.17 on macOS M4 Pro MLX Qwen 3.8 27b (#19866)
   - Multiple Inkling-2 issues (crashes, CUDA assertion errors, MLX kernel issues)
   - Qwen3.8 issues (VRAM usage regression, prompt cache issues, parallel slots)
   - ROCm/Windows issues (high RAM usage, grammar parsing failures)
   - phi4 crashes on Metal with q8_0 cache type
   - Tool call parsing bugs with nested `<tool_call>` tags
   - Image placeholder parsing bugs (`[img-` false positives)

3. **Key PRs**:
   - PR #19909: Inkling2 CUDA backend (NVFP4, tensor cores)
   - PR #19916: llama.cpp bump b12651 -> b12701 (fixes GGML_ASSERT issue)
   - PR #19914: Scheduler hash capacity fix for phi4
   - PR #19904, #19919: Tool call argument preservation fixes
   - PR #19912: Image placeholder parsing fix
   - PR #19910: MLX tokenizer Prepend normalizers
   - PR #19913: Engram history buffer compaction
   - PR #19907: macOS kernel-reported memory
   - PR #19882: Embedding media marker positioning

Let me structure this into the requested format.
</think>


# Ollama Digest — 2026-11-26

## Today's Highlights

Ollama's development continues to focus on Inkling 2 model support, with a new CUDA backend for NVFP4 tensors landed (#19909) alongside upstream llama.cpp bump to b12701 addressing long-conversation assertion failures (#19916). Critical bug fixes target tool-call argument parsing where nested `<tool_call>` literals cause silent truncation, and image placeholder detection that incorrectly rejects prompts containing `[img-` substrings.

---

## Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| PR #19917 | `llama-server` version bump (details pending merge) | [ollama/ollama#19917](https://github.com/ollama/ollama/pull/19917) |
| PR #19916 | llama.cpp bump **b12651 → b12701** — fixes `GGML_ASSERT(s2 <= uint32_t::max())` on Inkling-2-mini long conversations; upstream fix at [ggml-org/llama.cpp#32804](https://github.com/ggml-org/llama.cpp/issues/32804) | [ollama/ollama#19916](https://github.com/ollama/ollama/pull/19916) |

**Migration note:** If running Inkling-2-mini with extended conversations on DGX Spark or similar hardware, this bump resolves integer overflow assertions during KV cache operations.

---

## New Model & Hardware Support

| Model / Hardware | Details | Status | Link |
|------------------|---------|--------|------|
| **Inkling 2 Mini — CUDA backend** | NVFP4 activation kernels (SM120/121) with BF16 tensor-core expert gathers; MXFP8 support; generic graph fallback on non-SM120 GPUs | Open PR, **#19909** | [ollama/ollama#19909](https://github.com/ollama/ollama/pull/19909) |
| **Inkling 2 Mini — ROCm/GFX1101** | Work-in-progress backend support on AMD RX 7800 XT (16 GB); high host RAM usage reported at #19899 | Active bug | [ollama/ollama#19899](https://github.com/ollama/ollama/issues/19899) |
| **Inkling-2-Mini-GGUF (unsloth)** | Architecture loaded via unsloth/Inkling-2-Mini-GGUF; tensor `blk.24.attn_q.weight` not found in 25-block config | Fixed upstream | [ollama/ollama#19888](https://github.com/ollama/ollama/issues/19888) |
| **Hindsight Decision Model** | `hindsight-decision-v1` for hs-decide-1-flash; Qwen decision format, causal single-pass answering | Merged, PR #19555 | [ollama/ollama#19555](https://github.com/ollama/ollama/pull/19555) |
| **Qwen3.8 / Qwen3.5** | 27B MoE variants (qwen3.8:27b-mtp_q8, qwen3.8-flash-next, qwen35) with Unsloth GGUF imports | Active issues | [ollama/ollama#19833](https://github.com/ollama/ollama/issues/19833) |
| **phi4** | Metal/CPU crash with `OLLAMA_KV_CACHE_TYPE=q8_0`; ggml scheduler hash overflow during fused-operation probing | Fix PR **#19914** | [ollama/ollama#19905](https://github.com/ollama/ollama/issues/19905) |

---

## Performance & Optimization

| Category | Change | Impact | Link |
|----------|--------|--------|------|
| **Inkling 2 — short histories** | Metal split-attention kernels extended to histories < 1024 keys; removed FP32 widen + dense mask overhead | Faster short conversation turns | [ollama/ollama#19881](https://github.com/ollama/ollama/pull/19881) (closed) |
| **MLX prefix cache** | Engram history buffer compaction to reduce snapshot overhead | Lower memory churn on repeated prompts | [ollama/ollama#19913](https://github.com/ollama/ollama/pull/19913) |
| **MLX tokenizer** | `Prepend` normalizers (e.g., `▁` prefix for Llama 2/CodeLlama/Phi-3) now applied inside `Sequence` normalizer | Correct tokenization for affected vocabularies | [ollama/ollama#19910](https://github.com/ollama/ollama/pull/19910) |
| **MLX — memory accounting** | `getMemoryHeadroom` now counts inactive anonymous pages on macOS, not just free + purgeable | More accurate prefix-cache eviction thresholds | [ollama/ollama#19907](https://github.com/ollama/ollama/pull/19907) |
| **MLX — Qwen3.8 prefix cache** | Prefix-cache snapshots on `qwen3.8-flash-next` grow ~0.6 GiB per distinct prompt (65k ctx, M5 Ultra 256 GB); never evicted under `OLLAMA_KEEP_ALIVE=-1` | Memory leak bug, see #19891 | [ollama/ollama#19891](https://github.com/ollama/ollama/issues/19891) |
| **MLX — Inkling 2 cache eviction** | Prefix cache fully evicted past ~64k tokens on Inkling 2 Mini; relative-attention prefill grows with context | Re-prefill on every turn past 64k | [ollama/ollama#19819](https://github.com/ollama/ollama/issues/19819) |
| **DGX Spark benchmarks** | Qwen3.8 Flash-Next and Hermes Agent workloads on GB10 (128 GB unified); Ollama 0.32.1 vs Strata comparison across 75 runs | Performance study, optimization opportunities | [ollama/ollama#19887](https://github.com/ollama/ollama/issues/19887) |
| **VRAM accounting** | Multi-model load memory attribution for speculative draft / MoE; hybrid-attention K-cache accounting | Correct `ollama ps` reporting | [ollama/ollama#17857](https://github.com/ollama/ollama/pull/17857), [ollama/ollama#19632](https://github.com/ollama/ollama/pull/19632) |

---

## Stability & Regressions

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 **Critical** | #19918 | 0.40.18 ROCm/Windows regression: JSON schema grammar requests fail mid-load with `"Unexpected empty grammar stack after accepting piece: @ (31)"`, return HTTP 200 empty body | — |
| 🔴 **Critical** | #19879 | Inkling-2-mini OOM + high CPU → machine un-responsive on DGX Spark (hard reboot required) | — |
| 🔴 **Critical** | #19866 | 0.40.17 major performance regression on macOS M4 Pro MLX Qwen3.8 27b; `OLLAMA_KEEP_ALIVE=8h` set | — |
| 🔴 **Critical** | #19833 | Qwen3.8:27b-mtp_q8 VRAM spike from 51 GB → 127 GB after upgrade to 0.40.2 (Windows 11); reverting to old version resolves | — |
| 🟠 **High** | #19902 | Laguna parser drops tool-call arguments containing literal `<tool_call>` opener; returns `say({})` instead of full args | **#19904**, **#19919** |
| 🟠 **High** | #19911 | `/api/chat` with image fails HTTP 400 if message text contains `[img-` (e.g., `arr[img-1]`); renderer misinterprets as placeholder | **#19912** |
| 🟠 **High** | #19905 | phi4 `q8_0` cache type aborts on Metal (ggml scheduler hash overflow) | **#19914** |
| 🟠 **High** | #19915 | Inkling-2-mini `GGML_ASSERT(s2 <= uint32_t::max())` on long conversations in llama-cpp backend | **#19916** |
| 🟠 **High** | #19891 | Qwen3.8-flash-next MLX prefix-cache grows ~0.6 GiB/prompt, never evicted (M5 Ultra 256 GB) | — |
| 🟠 **High** | #19899 | ROCm/Windows RX 7800 XT: high host RAM from mapped model pages after 100% GPU offload (0.40.18) | — |
| 🟡 **Medium** | #19767 | Qwen3.8 two-agent sessions re-read prompt from token 0 on default single slot; parallel slots lose prompt cache | — |
| 🟡 **Medium** | #19851 | 0.40.17 OOM loading models that worked on 0.40.15 | — |
| 🟡 **Medium** | #19900 | MLX Inkling-2-mini panic on M2 Pro: missing `custom_kernel_relative_attention_bf16_probabilities` | — |
| 🟢 **Low** | #18274 | Model name validation 80-char limit too short for HuggingFace paths | — |
| 🟢 **Low** | #7703 | Documentation: clarify streaming JSON objects are newline-delimited JSON (JSONL) | — |

---

## What This Means for Application Developers

1. **Tool-calling users:** If your agents emit `<tool_call>` literals inside JSON argument strings, upgrade immediately once PRs #19904/#19919 merge — arguments are silently discarded today.

2. **Vision model users:** Avoid sending C code or any text containing `[img-` patterns alongside images; wait for PR #19912 to land or sanitize inputs.

3. **DGX Spark / Inkling 2 users:** The llama.cpp b12701 bump (PR #19916) is the highest-priority patch — it fixes integer overflow crashes on long conversations. Track PR #19909 for CUDA NVFP4 support as an alternative to Metal.

4. **macOS MLX users on Qwen3.8:** The 0.40.17 performance regression (#19866) is unfixed; if you need stability, the community reports 0.40.15 as a known-good baseline.

5. **ROCm/Windows users:** JSON schema-constrained generation is broken in 0.40.18 (#19918); either pin to 0.40.17 or wait for a patch.

6. **Memory-conscious deployments:** MLX prefix-cache memory leaks on Qwen3.8-flash-next and Inkling 2 context growth issues mean long-running chat applications should monitor `ollama ps` and consider periodic restarts or lower `OLLAMA_KEEP_ALIVE` values until fixes land.

7. **Multi-model / VRAM monitoring:** PRs #17857 and #19632 improve `ollama ps` accuracy for MoE and hybrid-attention models — useful for capacity planning in multi-tenant setups.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-11-26 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Looking at the data:

**Releases**: None in the last 24h

**Key Issues** (by comment count/relevance):
1. #9753 - Prisma Python client deprecation notice (22 comments) - ongoing discussion
2. #53716 - Azure AI context window exceeded bug (7 comments)
3. #47046 - Vertex/Gemini context caching bug (CLOSED, 6 comments)
4. #46059 - Watsonx streaming usage bug (CLOSED, 6 comments)
5. #53040 - Prometheus outcomes for routed deployment attempts (5 comments)
6. #38689 - TTFB issue on streaming Anthropic requests (CLOSED, 5 comments)
7. #52061 - Response caching per model endpoint feature (4 comments, 9 👍)
8. #34943 - Vertex AI responseSchema escape hatch feature (4 comments)
9. #38270 - /v1/responses leaks Gemini thought signatures (4 comments)
10. #54362 - Show accounting delays on Usage page (4 comments)
11. #47605 - Presidio guardrail logging_only mode bug (CLOSED, 4 comments)
12. #43583 - Audit-log fire-and-forget drops records (CLOSED, 4 comments)
13. #28989 - Gemini image generation finishReason silently dropped (CLOSED, 4 comments)
14. #36124 - Adaptive similarity threshold for valkey-semantic cache (CLOSED, 4 comments)
15. #48401 - Streaming drops OpenRouter reasoning_details-only chunks (3 comments)


16. #46499 - Interrupted streaming logs partial spend (3 comments)
17. #54435 - O(N³) guardrail sync blocks event loop (3 comments)
18. #54369 - Import crash with cost-map fetch failure (3 comments)
19. #54315 - JSONDecodeError in Ollama transformation (3 comments)

**Key PRs** (recent activity):
1. #54626 - docs: PR template restructure
2. #54627 - feat(cost-map): Fireworks Kimi K3.1 Pro Ultra-fast
3. #54618 - fix(cost-map): remove Together rows for models on dedicated endpoints
4. #54625 - feat(gateway): serve budgeted keys on Rust gateway
5. #54620 - refactor(types): type dict-style accessors (CLOSED)
6. #54076 - feat(volcengine): Ark Seedream image generation
7. #54624 - fix(cost-map): LTS backport of #54618
8. #54374 - fix(proxy): list videos with caller's deployment key
9. #50702 - fix(router): keep deployment's vertex_location in additional_drop_params
10. #54621 - refactor(ui): migrate guardrail and policy forms onto form kit
11. #54574 - fix: read 1/0, yes/no, on/off in boolean env toggles
12. #54575 - fix(bedrock): name each knowledge base search hit after its source document
13. #54116 - fix(ui): deduplicate Content-Type header and fix json formatting
14. #53353 - fix(milvus): read vector field from stored milvus_vector_field param
15. #54491 - fix(cli)!: run lite opencode on private OpenCode server
16. #54622 - feat(gateway): check native caller's budgets before limiter
17. #54623 - fix(proxy): send finish_reason null on every streamed chat chunk (LTS)
18. #54344 - perf(import): load realtime and provider cost modules on first use
19. #50719 - fix(responses): store each WebSocket turn's own request on spend row

Now I'll organize this into the digest format.

**1. Today's Highlights**

Several critical issues emerged. The Prisma Python client deprecation is under discussion, while the O(N³) guardrail sync bug poses a risk of event loop blocking. An import crash surfaced when the cost-map fetch fails, plus a JSONDecodeError in Ollama. On the positive side, Fireworks Kimi K3.1 Pro Ultra-fast joined the cost-map, the Rust gateway now handles budgeted keys, and import-time performance improved by deferring module loading. Two LTS fixes addressed Together cost-map rows and streamed chat finish_reason null values.

**2. Releases & Breaking Changes**

No releases detected in the past 24 hours. The Prisma deprecation notice warrants attention as it may trigger breaking changes.

**3. New Model & Hardware Support**

Fireworks Kimi K3.1 Pro Ultra-fast support is in progress, and Ark Seedream image generation capability is being added.

**4. Performance & Optimization**

Import-time lazy loading of realtime and provider cost modules resolves startup delays. Guardrail sync operations need O(N³) optimization to prevent event loop blocking. LTS release also includes the finish_reason fix.

**5. Stability & Regressions**

Multiple issues are flagged: guardrail sync O(N³) blocking the event loop, import crashes on cost-map fetch failures, JSONDecodeError in Ollama transformation, and streaming partial spend logging on interruptions. The Vertex/Gemini context caching and Watsonx streaming usage bugs have been resolved, along with the Presidio guardrail logging mode and audit-log fire-and-forget dropping records.

**6. What This Means for Application Developers**

Import crashes warrant investigation into cost-map failure handling, streaming deployments need finish_reason null checks on chunks, guardrail-heavy setups face event loop risks, and the Prisma migration requires planning ahead. Boolean env toggles now support 1/0, yes/no, on/off values instead of just true/false.
</think>


# LiteLLM Digest — 2026-11-26

## 1. Today's Highlights

The LiteLLM community is actively triaging a cluster of correctness and reliability issues as the project enters a heavy shipping cycle. Most notably, a performance bug in guardrail synchronization was identified that can block the event loop with O(N³) complexity when guardrails accumulate many entries (PR #54435). On the feature side, the Rust gateway now supports budgeted key enforcement through a new stacked PR chain (#54625, #54622), and import-time performance improved by deferring loading of the realtime and provider-cost modules until first use (#54344). The Prisma Python client deprecation notice is still open after 22 comments, signaling that teams depending on the database backend should begin planning migration.

---

## 2. Releases & Breaking Changes

| Item | Details | Links |
|------|---------|-------|
| No releases | No new versions tagged in the last 24 hours. | — |
| Prisma Python client deprecation | Community discussion ongoing about moving away from Prisma. No timeline or alternative announced yet. | [#9753](https://github.com/BerriAI/litellm/issues/9753) |

**Migration Notes:** Teams using the Prisma backend for LiteLLM proxy (e.g., for key management, spend tracking) should monitor [#9753](https://github.com/BerriAI/litellm/issues/9753) for migration guidance and timeline.

---

## 3. New Model & Hardware Support

| Provider | Model / Feature | Status | Links |
|----------|-----------------|--------|-------|
| **Fireworks AI** | Kimi K3.1 Pro Ultra-fast (`fireworks_ai/accounts/fireworks/routers/kimi-k3p1-pro-ultrafast`) | Added to cost map | [#54627](https://github.com/BerriAI/litellm/pull/54627) |
| **Volcengine** | Ark Seedream image generation, editing, and pricing | In progress | [#54076](https://github.com/BerriAI/litellm/pull/54076) |
| **Together** | Cost-map cleanup: removed 5 models that only serve on dedicated endpoints (were causing 400 "Unable to access non-serverless model") | Fixed | [#54618](https://github.com/BerriAI/litellm/pull/54618) (LTS: [#54624](https://github.com/BerriAI/litellm/pull/54624)) |

No new hardware (CUDA/ROCm/Metal) or quantization format support announced today.

---

## 4. Performance & Optimization

| Category | Change | Impact | Links |
|----------|--------|--------|-------|
| **Import-time lazy loading** | `realtime` and `provider_cost` modules now load on first use instead of at `import litellm` | Faster startup; reduces cold-import latency | [#54344](https://github.com/BerriAI/litellm/pull/54344) |
| **Boolean env toggles** | All on/off proxy settings now accept `1`, `yes`, `on` in addition to `true`/`false`; same behavior added to Rust gateway | Simpler configuration; no more silent defaults when admin misconfigures with `1` | [#54574](https://github.com/BerriAI/litellm/pull/54574) |
| **Rust gateway budget enforcement** | New stacked PR chain enables native caller's budget check before the rate limiter counts a request | Closes a gap where Rust-gateway traffic alone could never trip a key budget | [#54625](https://github.com/BerriAI/litellm/pull/54625), [#54622](https://github.com/BerriAI/litellm/pull/54622) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **High** | **O(N³) guardrail sync blocks event loop** — `_sync_guardrail_info_to_logging_obj` accumulates guardrail entries across a request and re-iterates the full list per entry, causing exponential overhead with many guardrail calls | Open | — |
| 🔴 **High** | **`import litellm` crash on cost-map fetch failure** — When the import-time model cost map fetch fails with a retryable outcome (DNS, 429, 5xx), the import can crash with "cannot import name 'LoggerContext' from partially initialized module" | Open | — |
| 🟠 **Medium** | **JSONDecodeError in Ollama transformation** — `litellm/llms/ollama/chat/transformation.py` throws `JSONDecodeError` under unknown conditions (report lacks error text) | Open | — |
| 🟠 **Medium** | **Azure AI models exceed context window limit** — ContextWindowExceededError when using Azure AI models through LiteLLM Proxy with OpenWebUI, despite default model parameters | Open | [#53716](https://github.com/BerriAI/litellm/issues/53716) |
| 🟠 **Medium** | **Streaming drops OpenRouter reasoning_details-only chunks** — Chunks carrying only `delta.reasoning_details` (signature-only thinking blocks) are silently dropped | Open | [#48401](https://github.com/BerriAI/litellm/issues/48401) |
| 🟠 **Medium** | **Interrupted streaming logs partial spend** — When a client disconnects mid-stream, only chunks consumed before disconnect are counted, while the provider bills for full output | Open | [#46499](https://github.com/BerriAI/litellm/issues/46499) |
| 🟡 **Low** | **Vertex/Gemini context caching reorders conversation** — Cache control block not at prefix causes message reorder and drops `system_instruction` | **Closed** | — |
| 🟡 **Low** | **Watsonx streamed usage lost** — Proxy reports its own token estimate instead of reading provider-sent usage | **Closed** | — |
| 🟡 **Low** | **Presidio guardrail in logging_only mode masks client response** — Both streaming and non-streaming responses returned masked when only logging was intended | **Closed** | — |
| 🟡 **Low** | **Audit-log fire-and-forget drops records on worker shutdown** — `asyncio.create_task` for audit writes drops records for calls that already returned 200 | **Closed** | — |

---

## 6. What This Means for Application Developers

1. **Import reliability risk**: If your deployment has intermittent network issues during container start-up, upgrade away from LiteLLM 1.105.3 to avoid import crashes. Monitor [#54369](https://github.com/BerriAI/litellm/issues/54369) for the fix.

2. **Streaming finish_reason regression (LTS)**: If you run the LTS proxy (1.108.x), streaming chat now includes `finish_reason: null` on every in-progress chunk, matching mainline behavior. Mistral SDK and Mistral Vibe users were breaking on the first chunk previously. The LTS fix is in [#54623](https://github.com/BerriAI/litellm/pull/54623).

3. **Guardrail-heavy deployments**: If you use multiple guardrails per request, watch for event-loop blocking under load. The O(N³) issue in [#54435](https://github.com/BerriAI/litellm/issues/54435) warrants a workaround (e.g., reducing guardrail entries per request) until a fix lands.

4. **Prisma users**: Begin evaluating alternatives or watching for a migration guide. The discussion at [#9753](https://github.com/BerriAI/litellm/issues/9753) is the signal to track.

5. **Boolean config simplification**: You can now use `LITELLM_MY_FLAG=1` or `LITELLM_MY_FLAG=yes` in environment variables — useful for Kubernetes secrets or Ansible templates where `true`/`false` strings are less convenient.

6. **New model availability**: Fireworks Kimi K3.1 Pro Ultra-fast is now on the cost map; if you route to it, billing will be accurate out of the box.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the GitHub data for Unsloth and generate a structured digest for 2026-11-26.

Key observations:
1. **Latest Release**: v0.1.925-beta - Inkling finetuning + perf fixes
2. **Major features**: Inkling 2 Mini 1.8 to 3.1x faster training, 50% less VRAM, multi-GPU support (tensor, pipeline, context parallel)
3. **Issues**: 47 total, many about crashes, regressions, compatibility issues
4. **PRs**: 383 total, many active development items

Let me organize this into the requested sections:
</think>


# Unsloth Digest — 2026-11-26

## 1. Today's Highlights

Unsloth shipped **v0.1.925-beta**, introducing Inkling 2 Mini fine-tuning at 1.8–3.1× speed with 50% VRAM reduction via LoRA/QLoRA, plus tensor/pipeline/context parallelism across GPUs. The project is simultaneously clearing a backlog of regressions — a GPU offloading regression on Inkling 2 Mini (#19137), an FP8 row-wise GEMM gap on Windows (#19665), and a torch/pyarrow SIGSEGV in the Studio venv (#19660). On the PR side, five concurrent branches are trimming comment budgets by ~90% across the codebase, while a new diagnostic reports how much LoRA update survives FP8/FP4 merged export (#19676).

---

## 2. Releases & Breaking Changes

| Item | Detail | Link |
|------|--------|------|
| **v0.1.925-beta** | Inkling 2 Mini fine-tuning, perf fixes, multi-GPU parallelism (tensor/pipeline/context). Trains on Kaggle's free 2× T4; exports to GGUF or merged 16-bit. | [#19660](https://github.com/unslothai/unsloth/issues/19660) |
| **Comment budget enforcement** | Five PRs (#19653–#19657) trim docstrings/comments to ≤10% of non-blank lines in studio, core, CLI, tests, and installers. Likely no functional impact but affects code readability during development. | [#19657](https://github.com/unslothai/unsloth/pull/19657) |
| **LoRA export diagnostic** | PR #19676 adds a read-only diagnostic showing how much LoRA update norm survives FP8/FP4 merged export — previously silent rounding-away was invisible. | [#19676](https://github.com/unslothai/unsloth/pull/19676) |
| **Windows in-app update UX** | PR #19480 makes Unsloth visible after Windows in-app updates, preserving `--hidden` for normal login launches. | [#19480](https://github.com/unslothai/unsloth/pull/19480) |

---

## 3. New Model & Hardware Support

| Model / Arch | Change | Details |
|--------------|--------|---------|
| **Inkling 2 Mini (1.8–3.1B)** | Added | LoRA/QLoRA fine-tuning, GGUF export, merged 16-bit export. Supports Kaggle free T4. |
| **AMD RDNA4 (gfx1200 / RX 9060 XT)** | Bug confirmed | QLoRA aborts with `HIP error: illegal memory access` in three fused kernels; plain PyTorch/PEFT works (#18403). |
| **AMD ROCm 10.1** | Partial breakage | `llama-server` crashes when launched by Studio due to system `libamdhip64` loading (#18948). |
| **Intel Arc 140V (XPU/Vulkan)** | Bug confirmed | Output generation fails with Inkling-2-mini (#19239). |
| **NVIDIA B300 / GB300 (sm_103)** | Optimization | Auto quant order now tries FP8 → MXFP8 → INT8 instead of INT8 first (#19688). |
| **Apple Silicon Metal** | Regression | DiffusionGemma generates empty/garbled output on GPU (`-ngl 99`); CPU (`-ngl 0`) works (#6336). |
| **FLUX.2 Klein (FP8)** | Fallback added | Windows x64 (RTX 5090) and Windows on Arm (RTX Spark) now fall back to tensorwise FP8 when row-wise GEMM is missing (#19665). |

---

## 4. Performance & Optimization

| Area | Metric | Link |
|------|--------|------|
| **Inkling 2 Mini training** | 1.8–3.1× faster, 50% VRAM reduction | v0.1.925-beta |
| **Packed LoRA (sm80+ GPUs)** | GPU idle ~50% of step time; block compile reduces idle by 11–14% (Colab L4, Qwen3-4B QLoRA: 819 ms → ~700 ms; Llama-3.2-3B LoRA: 573 ms → ~490 ms) | [#19623](https://github.com/unslothai/unsloth/pull/19623) |
| **Multi-GPU video (Wan 2.2 TI2V 5B)** | 1.01–1.03× → improved placement; text encoders no longer block CFG replica on GPU 2 (#19671) | [#19671](https://github.com/unslothai/unsloth/pull/19671) |
| **Krea 2 multi-GPU (2× T4)** | Second card now utilized via tensor parallel when streaming would otherwise leave it idle (#19689) | [#19689](https://github.com/unslothai/unsloth/pull/19689) |
| **FLUX.2 distilled (2× GPU)** | Split distilled steps across two cards by token count; second card idle fixed (#19691) | [#19691](https://github.com/unslothai/unsloth/pull/19691) |
| **TP/PP/EP checkpoint resume** | LoRA checkpoints saved under tensor/pipeline/expert parallel can now be resumed on a different GPU layout (e.g., 2→1 GPU) (#19685) | [#19685](https://github.com/unslothai/unsloth/pull/19685) |
| **Image request batching** | Coalesces identical concurrent image requests across users into shared batched pipeline (#19667) | [#19667](https://github.com/unslothai/unsloth/pull/19667) |
| **Video queue unification** | Single server-side queue for `/v1/videos`, Video page, and chat tool; eliminates `409 A video generation is already in progress` (#19677) | [#19677](https://github.com/unslothai/unsloth/pull/19677) |

---

## 5. Stability & Regressions

Ranked by severity:

| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| 🔴 **Critical** | `torch` + `pyarrow` imports SIGSEGV (exit 139) in Studio venv on Linux x86_64, Python 3.13, torch 2.13.0+cu130 | **Open, 0 comments** | [#19660](https://github.com/unslothai/unsloth/issues/19660) |
| 🔴 **Critical** | QLoRA aborts on AMD RDNA4 (RX 9060 XT) with `HIP error: illegal memory access` in three fused kernels | **Open** | [#18403](https://github.com/unslothai/unsloth/issues/18403) |
| 🟠 **High** | Inkling 2 Mini GPU offloading regression: throughput dropped from 40 → 12 tokens/s after v0.1.923-beta (Windows 11 Pro) | **Open** | [#19137](https://github.com/unslothai/unsloth/issues/19137) |
| 🟠 **High** | v0.1.920-beta crashes on model load | **Open** | [#18563](https://github.com/unslothai/unsloth/issues/18563) |
| 🟠 **High** | DiffusionGemma empty/garbled output on Apple Silicon Metal GPU | **Open** (confirmed since 2025-06) | [#6336](https://github.com/unslothai/unsloth/issues/6336) |
| 🟡 **Medium** | ROCm `llama-server` crashes when launched by Studio (system `libamdhip64` conflict) | **Open** | [#18948](https://github.com/unslothai/unsloth/issues/18948) |
| 🟡 **Medium** | Decision models (Clef): JSON state re-parsed/key-sorted in train/predict but used verbatim in GGUF export (train/serve mismatch) | **Open** | [#19423](https://github.com/unslothai/unsloth/issues/19423) |
| 🟡 **Medium** | Inkling 2 Mini: "Failed to process regex" (`std::regex error_stack`) on Windows NVIDIA | **Open** | [#19376](https://github.com/unslothai/unsloth/issues/19376) |
| 🟡 **Medium** | `SFTConfig.pad_to_multiple_of` silently dropped with padded batches | **Open, 1 comment** | [#19567](https://github.com/unslothai/unsloth/issues/19567) |
| 🟡 **Medium** | `@skill` content appended only on mention turn → full conversation re-processed (prompt cache miss) | **Open** | [#19212](https://github.com/unslothai/unsloth/issues/19212) |

**Closed regressions with fixes:**
- Block compile `CheckpointError` re-raised correctly (#19675)
- Windows in-app update visibility (#19480)
- LoRA export norm diagnostic added (#19676)

---

## 6. What This Means for Application Developers

| Takeaway | Detail |
|----------|--------|
| **Inkling 2 Mini is production-ready for fine-tuning** | v0.1.925-beta makes it the fastest-supported model on Unsloth (1.8–3.1× speedup, 50% VRAM). Use it on Kaggle T4 free tiers or multi-GPU setups for cost-effective LoRA/QLoRA. |
| **Checkpoint resumption is now layout-agnostic** | If you run distributed LoRA (TP/PP/EP) and pre-empt jobs, you can now resume on fewer or different GPUs without manual re-layout. Critical for cloud spot instance usage. |
| **Watch the LoRA export diagnostic on FP8/FP4** | arXiv 2611.32064 shows 93% of LoRA update norm can vanish in aggressive quantization. With PR #19676, you now get a warning before exporting — always check this before deploying quantized merged models. |
| **Multi-GPU image/video batching is live** | Concurrent users generating images with identical settings now share a batched pipeline, significantly improving throughput in multi-user Studio deployments. |
| **Avoid AMD RDNA4 + QLoRA on current beta** | If you need QLoRA on RX 9060 XT / gfx1200, either fall back to plain PEFT or wait for a fix — the fused kernels trigger illegal memory accesses. |
| **Verify torch + pyarrow co-imports on Linux** | The SIGSEGV in the Studio venv suggests a binary incompatibility between torch 2.13.0+cu130 and pyarrow 23.0.1 on Python 3.13. If you run custom Python environments, test this combination before upgrading. |
| **Apple Silicon users: use CPU offloading for DiffusionGemma** | Metal GPU (`-ngl 99`) produces garbled output; `-ngl 0` (CPU) works correctly. Track #6336 for a Metal fix. |
| **Multi-GPU Studio deployments benefit from new placement logic** | FLUX.2 Klein, Krea 2, and Wan 2.2 video models now better utilize secondary GPUs. If you run a 2-GPU Studio instance, re-test throughput on today's main branch. |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*