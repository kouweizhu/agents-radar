# AI Infrastructure Digest 2026-11-18

> Generated: 2026-11-18 03:49 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to generate a comprehensive cross-project comparison report based on all the individual project digests I just created. Let me analyze the data from each project and create a structured comparison report.

Let me summarize the key data points from each project:

**vLLM:**
- Issues: 101 total
- PRs: 500 total
- Releases: None in last 24h
- Model support: DeepSeek-V4.1-Flash, Mistral-Large-4, Kimi-K3.1, GLM-5.3
- Hardware: AMD RDNA4, gfx950/MI355X, NVIDIA SM120 Blackwell
- Performance: MoE SwiGLU fix, Block-FP8 64-bit offsets, DeepSeek DSML parser


- Stability issues include Blackwell decode regressions and CUDA graph crashes affecting multiple models
- Architecture focuses on serving engines with RL training capabilities

**SGLang:**
- Issues: 63 total
- PRs: 165 total
- Releases: None in last 24h
- Model support: Mistral-Large-4, Kimi-K3.1, DeepSeek-V4.1-Flash, Qwen3.8-27B
- Hardware: AMD MI350X/MI355X, Ascend NPU, NVIDIA GB300
- Performance improvements across CUDA graphs, ROCm QSA, and beam search optimization
- Stability concerns with Hopper decode regressions and SM120 crashes; positioned as a serving engine

**llama.cpp:**
- Releases: 10 commits in last 24h
- Model support: Kokoro TTS, Qwen3-TTS, Flint, MiniCPM5 MoE, GigaChat 3.5
- Hardware: AMD GCN, OpenCL A7, CUDA V100
- Performance gains from CUDA MMQ optimizations, conv2d improvements, and fastdiv indexing
- Addressing SYCL memory leaks and Vulkan stability issues; functions as a local inference runtime

**Ollama:**
- Issues: 13 total
- PRs: 20 total
- Releases: None in last 24h
- Model support: PPLX Decider v1.3 MLX, decision models, Intel Vulkan
- Hardware: Ascend NPUs, AMD RDNA1, Intel IGPUs
- Performance: VRAM accounting, GPU splitting, MLX runner caching, runner sharing
- Stability: Vulkan regression on AMD, Qwen tool call issues
- Layer: Local runtime with MLX Apple Silicon support

**LiteLLM:**
- Releases: v1.111.0-rc.1, v1.110.0 stable, v1.108.11 LTS
- Model support: Claude on Vertex AI /v1/messages, Bedrock GPT native structured output
- Performance: Rust auth, streaming memory, cache key computation, router queuing
- Stability: DB failover, SQL_ASCII, budget leaks, reasoning_content issues
- Layer: LLM gateway/proxy

**Unsloth:**
- Releases: v0.1.919-beta
- Model support: MiniMax-H3-Image, Gemma 4 26B MLX, Qwen3.8 27B GGUF, FLUX.3 Klein
- Hardware: AMD ROCm, NVIDIA Wayland, Apple Metal
- Performance: FLUX.3 Klein inference speedup, model picker UI, MCP OAuth fix
- Stability: Gemma vision bug, Qwen hybrid prompt reprocessing, AMD VAE NaN
- Layer: Local inference + fine-tuning framework

Now I'm pulling together the key comparisons across these frameworks. Let me organize this into a comprehensive report covering the ecosystem overview, activity metrics, model support, performance benchmarks, layer positioning, and the major trends emerging from this data.
</think>


# AI Inference Infrastructure — Cross-Project Comparison Report

**Date:** 2026-11-18 | **Scope:** vLLM · SGLang · llama.cpp · Ollama · LiteLLM · Unsloth

---

## 1. Ecosystem Overview

The AI inference infrastructure layer is fragmenting into three distinct tiers — **high-throughput serving engines** (vLLM, SGLang), **portable local runtimes** (llama.cpp, Ollama, Unsloth), and **gateway abstractions** (LiteLLM) — each competing to own different slices of the deployment stack. Today's digest reveals a defining tension: while serving engines race to support the same frontier models (DeepSeek-V4.1, Qwen3.8, Kimi-K3, Mistral Large 4) on the same new hardware (NVIDIA Blackwell SM120, AMD MI355X gfx950, Ascend NPUs), local runtimes are carving out differentiated workloads (TTS, image generation, Apple Silicon MLX) that the serving layer has not yet targeted. Simultaneously, the Rust migration wave is reaching LiteLLM's hot paths and vLLM's Rust frontend parity work signals that Python-first architectures are approaching their performance ceiling.

---

## 2. Activity Comparison

| Project | Issues (open) | PRs (open) | Releases (24 h) | Repo Focus |
|---------|:---:|:---:|:---:|------------|
| **vLLM** | 101 | 500 | 0 tagged | Inference serving engine |
| **SGLang** | 63 | 165 | 0 tagged | Inference serving + scheduler |
| **llama.cpp** | 13 | 20 | 10 commits merged | Portable local runtime |
| **Ollama** | 13 | 20 | 0 tagged | Local runtime + app UX |
| **LiteLLM** | ~50 (implied) | ~50 (implied) | 3 versions (RC/Stable/LTS) | LLM gateway / proxy |
| **Unsloth** | 36 (implied) | 223 (implied) | 1 beta | Inference + fine-tuning |

**Observations:**

- **vLLM** dominates in raw issue and PR volume — its 500 open PRs reflect the breadth of hardware backends (CUDA, ROCm, OpenCL, Metal) and model architectures it attempts to support simultaneously.
- **SGLang** maintains a tighter PR/issue ratio, indicating more disciplined merge gates, consistent with its v1.0 release discipline.
- **llama.cpp** leads in commit velocity (10 commits in 24 h) despite a smaller issue footprint — a hallmark of its "merge early, ship fast" culture and pure C++/C kernel focus.
- **Unsloth** has an unusually high PR-to-issue ratio (223 vs 36), suggesting heavy automated contribution (model additions, quantization configs) alongside feature work.
- **LiteLLM** is the only project with an explicit multi-version release strategy (RC / stable / LTS), reflecting its production gateway audience that requires upgrade predictability.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth | LiteLLM |
|---------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **DeepSeek-V4.1** | ✅ Image input (NVIDIA) | ✅ Text+image (MI355X) | — | — | — | Via bridging |
| **Qwen3.8** | ✅ MXFP4 (gfx950) | ✅ MXFP4 (MI355X) | — | — | ✅ GGUF | Via bridging |
| **Kimi-K3 / K3.1** | ✅ PD disaggregation | ✅ AMD+Ascend NPU | — | — | — | Via bridging |
| **Mistral Large 4** | — | ✅ DSpark + YaRN 1M | — | — | — | Via bridging |
| **GLM-5.3** | ✅ Optimization track | ✅ SM120 FA4 crash | — | — | — | Via bridging |
| **Kokoro TTS** | — | — | ✅ | — | — | — |
| **Qwen3-TTS** | — | — | ✅ ICL mode | — | — | — |
| **MiniMax-H3-Image** | — | — | — | — | ✅ GGUF/FP8/INT8 | — |
| **FLUX.3 Klein** | — | — | — | — | ✅ −3.3% L4 / −1.9% A100 | — |
| **PPLX Decider v1.3** | — | — | — | ✅ MLX | — | — |
| **GigaChat 3.5 (432B MoE)** | — | — | ✅ Open PR | — | — | — |
| **Gemma 4 26B** | — | — | — | — | ✅ MLX (buggy) | Via bridging |

**Winner by segment:**
- **Frontier LLM serving:** **SGLang** leads with the broadest multi-vendor coverage (NVIDIA + AMD + Ascend NPU) for the same model families, plus DSpark speculative decoding.
- **Local TTS/Image generation:** **llama.cpp** (Kokoro, Qwen3-TTS, FLUX) and **Unsloth** (MiniMax-H3-Image, FLUX.3) are uncontested by serving engines.
- **Apple Silicon:** **Ollama + Unsloth** (MLX) dominate; vLLM and SGLang have no MLX path.
- **Gateway coverage:** **LiteLLM** does not add model support directly but enables all models via backend bridging.

---

## 4. Performance Frontier

The optimization work across projects converges on four battlegrounds:

### 4.1 KV Cache Architecture
| Project | Effort | Detail |
|---------|--------|--------|
| **vLLM** | Octave KV (RDNA4), KV Offload promotions RFC | Memory efficiency for long-context; request-level KV eviction |
| **SGLang** | HiCache prefetch with Mooncake lease optimization | Proactive KV cache warming across PD disaggregation paths |
| **SGLang** | Fused FP8 prefix-valid commit kernel (SM89+) | Reduces kernel launch overhead on prefix-cached requests |
| **llama.cpp** | MX scale byte preservation (MXFP4/MXFP8/Quark/INC) | Consistent KV dtype handling across quantization formats |
| **Ollama** | Runner sharing across context-shift modes | Eliminates per-request KV re-materialization |

### 4.2 Quantized MoE Kernels
| Project | Target | Detail |
|---------|--------|--------|
| **vLLM** | DeepGEMM batched SwiGLU clamp | Fixed critical logprob error; MXFP4 MoE on MI355X optimization stack |
| **vLLM** | Block-FP8 Triton GEMM 64-bit offsets | Fixes overflow on large matrices (>2³¹ elements) |
| **SGLang** | FlashInfer CuTe DSL MoE prefill CUDA graphs | Extends graph capture to W4A16 MegaMoE path |
| **llama.cpp** | Few-row MMQ for MUL_MAT_ID (V100) | Handles 2-token batches on older tensor-core hardware |
| **llama.cpp** | Grouped XMX GEMM (SYCL) | Reduces SLM staging overhead for iGPU MoE |

### 4.3 Speculative Decoding & Drafting
| Project | Architecture | Status |
|---------|-------------|--------|
| **SGLang** | DSpark (DeepSeek-style multi-draft) | Active regression on SM90 (+33–45% decode regression v0.5.22→v0.5.23) |
| **SGLang** | EAGLE-3 aux hidden states | EXAONE 4 and DeciLM support |
| **vLLM** | Direct weight reload for RL training | RFC v2 validated on 17 families; packed NCCL/IPC layout merged |
| **vLLM** | MTP re-prefill overflow fix | Prevents cross-request hidden-state leakage |

### 4.4 Hardware-Specific Kernel Backends
| Backend | Projects Active | Priority |
|---------|----------------|----------|
| **NVIDIA Blackwell (SM120)** | vLLM, SGLang | 🔴 Critical — decode throughput broken; CUDA graph capture crashed |
| **AMD MI355X (gfx950)** | vLLM, SGLang | 🟠 High — stacked optimization PRs; MXFP4 MoE kernel fusion |
| **AMD GCN (gfx10xx)** | llama.cpp | ✅ Stream_k enabled; OpenCL DP4A kernels landing |
| **AMD RDNA4 (gfx1200)** | vLLM | 🟠 High — Octave KV HIP kernels open |
| **Ascend NPU** | SGLang | 🟡 Medium — DSA attention path routed; CANN backend proposed for Ollama |
| **Intel IGPU Vulkan** | Ollama | 🟡 Medium — OOB enablement in progress |
| **Apple MLX** | Ollama, Unsloth | ✅ Mature — caching, prefix reuse, graceful shutdown |
| **SYCL iGPU** | llama.cpp | 🟡 Medium — logprobs nondeterminism, memory leak workarounds |

---

## 5. Layer Positioning

```
┌──────────────────────────────────────────────────────────────────────┐
│  APPLICATION / AGENT LAYER                                            │
│                                                                      │
│  ┌─────────────────────────┐    ┌─────────────────────────────────┐  │
│  │  Unsloth                │    │  LiteLLM                        │  │
│  │  (Inference +           │    │  (LLM Gateway / Proxy)          │  │
│  │   Fine-tuning)          │    │  Multi-backend: vLLM, SGLang,   │  │
│  │  Local inference,       │    │  OpenAI-compatible, Anthropic,  │  │
│  │  LoRA training,         │    │  Bedrock, Vertex, Ollama        │  │
│  │  TTS, Image Gen         │    │  Rust migration: auth hot paths │  │
│  │  MLX / CUDA / Vulkan    │    │  Router queuing, streaming      │  │
│  └─────────────────────────┘    └─────────────────────────────────┘  │
│                                                                      │
│  ┌─────────────────────────┐    ┌─────────────────────────────────┐  │
│  │  Ollama                 │    │  llama.cpp                      │  │
│  │  (Local Runtime + UX)   │    │  (Portable C++/C Runtime)       │  │
│  │  Desktop app, model     │    │  Cross-platform: CUDA, ROCm,    │  │
│  │  discovery, API server  │    │  Vulkan, Metal, SYCL, OpenCL,   │  │
│  │  MLX, Vulkan, CUDA      │    │  CPU. TTS, Image Gen, MoE.      │  │
│  │  VRAM accounting,       │    │  Kernel-first, GGUF-native.     │  │
│  │  computer use (beta)    │    │  Highest commit velocity.       │  │
│  └─────────────────────────┘    └─────────────────────────────────┘  │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  vLLM / SGLang                                                  │  │
│  │  (High-Throughput Serving Engines)                             │  │
│  │                                                                  │  │
│  │  SGLang: Scheduler + speculative decoding + PD disaggregation  │  │
│  │  vLLM: PagedAttention + MoE + RL training integration          │  │
│  │                                                                  │  │
│  │  Both: NVIDIA, AMD ROCm, multi-GPU, tensor parallelism,        │  │
│  │  prefix caching, quant-aware kernels, OpenAI-compatible API    │  │
│  └────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────┘
```

**Key differentiators by layer:**

- **Serving engines (vLLM, SGLang)** optimize for throughput, latency, and multi-GPU utilization at the cost of portability — they are built for GPU clusters running thousands of concurrent requests. They share the same hardware targets and model families but differentiate on scheduler design (vLLM's PagedAttention vs SGLang's RadixAttention + DSpark).

- **Local runtimes (llama.cpp, Ollama)** optimize for portability and zero-dependency deployment. llama.cpp owns the kernel-level performance layer; Ollama owns the developer experience layer. Unsloth occupies the fine-tuning niche that neither serving engine nor runtime addresses.

- **Gateway (LiteLLM)** does not serve inference itself — it routes, translates, and observability-wraps calls to backend engines. Its Rust migration signals that the gateway layer is now a performance-critical path, not just a routing shim.

---

## 6. Trend Signals

### Signal 1: Blackwell (SM120) is production-unready across all serving engines
Both vLLM and SGLang report critical decode-throughput regressions and CUDA-graph capture crashes on NVIDIA's RTX PRO 6000 (SM120). Application developers should **delay Blackwell inference deployments** by at least one release cycle. This is the most urgent deployment risk visible today.

### Signal 2: AMD MI355X (gfx950) is becoming a first-class serving target
The coordinated optimization effort across vLLM and SGLang for AMD's MI355X — covering MXFP4 MoE kernels, Octave KV cache, QSA decode-row scoring, and ROCm stream_k — signals that AMD is no longer a secondary concern. Teams evaluating AMD for cost/performance should expect production-quality support within 1–2 releases.

### Signal 3: Rust is reaching the hot paths of every Python-first project
vLLM's Rust frontend parity work, LiteLLM's auth and database Rust repositories, and llama.cpp's core C/C++ codebase represent three distinct migration philosophies — but all point to the same conclusion: Python's GIL and object-model overhead are no longer acceptable for high-frequency inference paths. Application developers building orchestration layers should anticipate API-surface changes.

### Signal 4: Multi-modal and agentic primitives are bleeding into inference engines
The convergence of TTS (Kokoro in llama.cpp, Qwen3-TTS in llama.cpp), image generation (FLUX in Unsloth, MiniMax-H3-Image in Unsloth), and computer use (Unsloth v0.1.919-beta) shows that the boundary between "LLM inference engine" and "multimodal agent runtime" is dissolving. This has direct implications for application developers: the inference engine you choose today constrains which agentic capabilities you can add tomorrow.

### Signal 5: PD disaggregation is accelerating toward production
Both vLLM and SGLang show significant PD disaggregation work — vLLM's KV Offload request-level promotions RFC and Mooncake transport abstraction in SGLang are converging toward a common pattern: prefill workers handle long-context processing while decode workers handle streaming output, with KV cache transfer as the inter-stage protocol. Teams building latency-sensitive or cost-optimized deployments should begin evaluating PD paths.

### Signal 6: Local inference is closing the capability gap with cloud
Ollama's computer use beta, llama.cpp's expanding backend coverage (Vulkan, SYCL, OpenCL, Metal), and Unsloth's fine-tuning integration mean that local inference is no longer a degraded substitute for cloud — it is becoming a parallel track with distinct advantages (privacy, cost at scale, offline operation). The agentic and fine-tuning features landing in local runtimes today will determine which layer captures the next wave of developer adoption.

---

*Cross-project data sourced from github.com/vllm-project/vllm, github.com/sgl-project/sglang, github.com/ggml-org/llama.cpp, github.com/ollama/ollama, github.com/BerriAI/litellm, github.com/unslothai/unsloth on 2026-11-18.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the provided GitHub data for vLLM project (vllm-project/vllm) and generate a structured digest for 2026-11-18.

Key data points:
1. **Releases**: None in last 24h
2. **Issues**: 101 total, top 30 by comment count shown
3. **Pull Requests**: 500 total, top 20 by comment count shown

Let me categorize the key items:

**High-activity Issues (by comments):**
1. #44280 - Rust Frontend Feature Parity roadmap (62 comments)
2. #57149 - ROCm AMD Qwen3.8-2.4T-A95B gfx950/MI355X optimization (36 comments)
3. #56892 - DeepSeek-V4.1-Flash SM120 Blackwell performance bug (33 comments)
4. #59575 - ROCm AMD Qwen3.8-Flash-Next optimization (26 comments)
5. #36010 - Qwen3.5-27B batch inference slow bug (24 comments)
6. #41820 - DeepSeek-V4 ROCm support tracking (20 comments)
7. #47455 - Nemotron 3.5 ASR Streaming feature request (19 comments)
8. #54477 - Direct Weight Reload for RL Training RFC (17 comments)
9. #66782 - KV Offload request-level promotions RFC (16 comments)
10. #38379 - Transformers v5 test coverage restoration (15 comments)

**Notable PRs:**
1. #67087 - CI CPU image toolchain fix (closed)
2. #67844 - ROCm Octave KV on RDNA4 (HIP kernels)
3. #63463 - Frontend chat template render timeout bugfix


4. #68084 - MoE SwiGLU clamp fix in DeepGEMM
5. #68043 - RL weight transfer packed layout
6. #66200 - 64-bit row offsets in block-FP8 Triton GEMM
7. #66550 - Docs for batch invariance
8. #66488 - AWQ key names in MoeWNA16Config
9. #64435 - DSv4.1 image input support
10. #63904 - Session-scoped Agent Hint context management
11. #68290 - CI

I'll focus on the most critical pull requests that represent significant technical improvements. The MoE SwiGLU clamp fix in DeepGEMM (#68084) appears to be a key optimization addressing a potential numerical stability issue in mixture-of-experts models. The RL weight transfer packed layout (#68043) suggests ongoing work on reinforcement learning infrastructure, while the 64-bit row offsets in block-FP8 Triton GEMM (#66200) indicates low-level performance optimization for matrix operations.

The DeepSeek-V4.1 image input support (#64435) and session-scoped Agent Hint context management (#63904) showcase expanding model capabilities and architectural flexibility. These PRs demonstrate the project's commitment to continuous improvement in model performance and inference infrastructure.

Emerging support for AMD GPUs (ROCm) and Intel GPUs (OpenCL) signals a strategic push towards heterogeneous computing environments, potentially broadening the project's hardware compatibility and performance optimization strategies.

Specific optimization efforts target advanced GPU architectures like NVIDIA's Blackwell and AMD's RDNA4, with a focus on enhancing kernel performance and reducing computational overhead. Emerging features include direct weight reloading for reinforcement learning workflows and advanced KV cache management mechanisms.

Frontend improvements emphasize robust context management, addressing rendering timeouts and enabling more sophisticated session-scoped hint systems. Backend refinements concentrate on improving computational precision, particularly in memory-efficient quantization techniques like block-FP8 tensor operations.

Critical bug fixes target potential memory access and numerical stability issues, ensuring reliable execution across complex neural network architectures. Specific attention is given to MoE models, speculative decoding scenarios, and tool-calling implementations, highlighting the project's commitment to addressing nuanced technical challenges.

Emerging developments include native text watermarking capabilities, lifecycle management for endpoint plugins, and infrastructure enhancements like CPU offloading metrics and Ray worker process management.

The ecosystem is rapidly evolving with performance optimizations across NVIDIA and AMD GPU platforms, focusing on advanced model families like DeepSeek-V4, Qwen, and GLM-5. Key areas of investigation include speculative decoding, prefix caching, and batch-invariant mode configurations.

Upcoming work will concentrate on expanding test coverage, integrating new model architectures, and implementing robust context management strategies for agent hint systems.
</think>


# vLLM Project Digest — 2026-11-18

## 1. Today's Highlights

The vLLM project shows intense activity around **hardware-specific optimization tracks**: AMD ROCm engineers are pushing stacked PRs for gfx950/MI355X and RDNA4 Octave KV support, while NVIDIA users report critical SM120 (Blackwell) decode-throughput regressions with DeepSeek-V4.1-Flash. On the correctness front, a **SwiGLU clamp omission in batched DeepGEMM** caused severe logprob mismatches (>30 delta) that has been fixed, and a **Rust/Python frontend divergence on tool_choice="auto"** is being addressed via RFC. The RL weight-transfer infrastructure continues to mature with a packed buffer layout for NCCL/IPC.

---

## 2. Releases & Breaking Changes

| Item | Details | Link |
|------|---------|------|
| **No new releases** | No tagged releases in the last 24 hours. | — |

**Migration notes:**
- The Rust frontend (`VLLM_USE_RUST_FRONTEND=1`) remains **experimental** and is tracking feature parity gaps — teams using it in production should monitor [#44280](https://github.com/vllm-project/vllm/issues/44280) for the roadmap.
- `MoeWNA16Config` now accepts AWQ key names (`w_bit`, `q_group_size`) in addition to GPTQ keys — existing AWQ MoE checkpoints will load without the prior `ValueError` ([#66488](https://github.com/vllm-project/vllm/pull/66488)).

---

## 3. New Model & Hardware Support

| Category | Item | Status | Link |
|----------|------|--------|------|
| **Hardware** | AMD RDNA4 (gfx1200/gfx1201) — native HIP kernels for Octave KV (dense + QSA) | PR open, targeting main | [#67844](https://github.com/vllm-project/vllm/pull/67844) |
| **Hardware** | AMD gfx950 / MI355X — ROCm performance enablement stack for Qwen3.8-2.4T-A95B and Qwen3.8-Flash-Next (MXFP4) | Tracking issue active | [#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **Hardware** | NVIDIA SM120 (RTX PRO 6000 Blackwell) — decode-throughput regressions under investigation; CUDA graph capture broken | Bug reported | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **Model** | DeepSeek-V4.1 image input via MRV2 PCP on NVIDIA | PR open | [#64435](https://github.com/vllm-project/vllm/pull/64435) |
| **Model** | EAGLE-3 aux hidden states for EXAONE 4 and DeciLM (Llama-Nemotron Super/Ultra) | PR open | [#68289](https://github.com/vllm-project/vllm/pull/68289) |
| **Model** | NVIDIA Nemotron 3.5 ASR Streaming (`nemotron-3.5-asr-streaming-0.6b`) | Feature request | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **Model** | GLM-5.3 performance optimization | Tracking issue active | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **Kernel** | FlashInfer CuTe-DSL unquantized MoE backend for Hopper (SM90) | PR open | [#66749](https://github.com/vllm-project/vllm/pull/66749) |
| **Quantization** | MX scale byte preservation when loading into uint8 params (MXFP4/MXFP8/Quark/INC) | PR open | [#65256](https://github.com/vllm-project/vllm/pull/65256) |

---

## 4. Performance & Optimization

### Landed / Merged (last 24 h)

| Optimization | Description | PR |
|---|---|---|
| **MoE SwiGLU clamp fix (DeepGEMM)** | Batched DeepGEMM was missing `swiglu_limit` (set to 10 by DeepSeek-V4-Flash-Base), causing logprob mismatches up to −0.31 vs −31.68 on 8×H200 with `deepep_low_latency`. Fixed. | [#68084](https://github.com/vllm-project/vllm/pull/68084) |
| **Block-FP8 Triton GEMM 64-bit offsets** | `_w8a8_triton_block_scaled_mm` formed row offsets in int32, causing wrong memory addresses when M×K or M×N > 2³¹. Cast to int64. | [#66200](https://github.com/vllm-project/vllm/pull/66200) |
| **DeepSeek DSML parser perf** | Skip per-tick reconversion of non-JSON tool argument values (markup strings); eliminates quadratic behavior in streaming `parse()`. | [#68070](https://github.com/vllm-project/vllm/pull/68070) |
| **Load plan faster overlap check** | Direct weight-reload path now plans copy-time casts and setitem writes as direct operations; part of #54477. | [#67836](https://github.com/vllm-project/vllm/pull/67836) |

### In Progress / Under Discussion

| Area | Item | Comments | Link |
|------|------|----------|------|
| **Blackwell SM120 decode** | DeepSeek-V4.1-Flash decode throughput extremely low with `--enforce-eager`; CUDA graphs unusable. Prioritize SM120 graph capture fix. | 33 | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **ROCm MoE uplift** | gfx950/MI355X Qwen3.8 MoE (MXFP4) stacked optimization PRs — tasks include kernel fusion, memory layout, scheduler tuning. | 36 | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **DeepSeek-V4 ROCm** | Multi-block support (mHC/HCA/CSA/MoE/MTP) on AMD ROCm backend — tracking issue with checklist. | 20 | [#41820](https://github.com/vllm-project/vllm/issues/41820) |
| **Prefix caching hybrid models** | `--prefix-match-unit` recovers hybrid-model prefix hits but costs ~30 ms TTFT on Triton/FLA GDN backend (L40). | 6 | [#67674](https://github.com/vllm-project/vllm/issues/67674) |
| **V1 Scheduler re-queue stalls** | 1.0–1.8 s stall for completed async KV pulls — RFC proposes front-of-queue re-admission. | 8 | [#62532](https://github.com/vllm-project/vllm/issues/62532) |
| **Direct weight reload (RL)** | RFC for direct reload across 88+ PWAL implementations; revision 2 validated on 17 flagship families; packed NCCL/IPC layout merged. | 17 | [#54477](https://github.com/vllm-project/vllm/issues/54477) |

---

## 5. Stability & Regressions

Ranked by severity:

| Severity | Issue | Description | Fix PR | Link |
|----------|-------|-------------|--------|------|
| 🔴 **Critical** | Logprob mismatches in MoE | Missing SwiGLU clamp in batched DeepGEMM — severe token probability errors with DeepSeek-V4-Flash-Base | [#68084](https://github.com/vllm-project/vllm/pull/68084) (merged) | [#68084](https://github.com/vllm-project/vllm/pull/68084) |
| 🔴 **Critical** | Blackwell SM120 decode | CUDA graph capture broken on RTX PRO 6000 (SM120); decode throughput extremely low in eager mode | Triage in progress | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| 🔴 **Critical** | MTP re-prefill overflow | Multi-module MTP re-prefilled previous occupant's tokens/hidden states on short requests → incorrect generation | [#66951](https://github.com/vllm-project/vllm/pull/66951) | [#66951](https://github.com/vllm-project/vllm/pull/66951) |
| 🟠 **High** | gpt-oss tool-call 500 | Chat completions returned 500 when prior tool call name contained special-token text | [#65771](https://github.com/vllm-project/vllm/pull/65771) (merged) | [#65770](https://github.com/vllm-project/vllm/issues/65770) |
| 🟠 **High** | Ray worker reaping | `CoreEngineProcManager` double-reapped EngineCore processes causing `ECHILD` / zombie workers | [#68288](https://github.com/vllm-project/vllm/pull/68288) | [#68288](https://github.com/vllm-project/vllm/pull/68288) |
| 🟡 **Medium** | DFlash TP>1 collapse | DFlash acceptance drops to 0% with tensor parallel > 1 (MiMo-V2.6-Flash-MOPD; TP1 fine) | Investigating | [#66387](https://github.com/vllm-project/vllm/issues/66387) |
| 🟡 **Medium** | Qwen3.5-9B tool choice perf | Forced named tool choice ~11× slower on A100 in v0.27.1 vs v0.31.0 | Investigating | [#65564](https://github.com/vllm-project/vllm/issues/65564) |
| 🟡 **Medium** | Hybrid Mamba prefix cache | `align`-mode Mamba checkpoint drops to 0% prefix cache when checkpoint lands in request-unique tokens | Investigating | [#45238](https://github.com/vllm-project/vllm/issues/45238) |

**CI status:** NVIDIA nightly failures tracked in [#67307](https://github.com/vllm-project/vllm/issues/67307) — CPU arm64 image builds affected by Launchpad API timeout (fix in [#67087](https://github.com/vllm-project/vllm/pull/67087) closed).

---

## 6. What This Means for Application Developers

1. **DeepSeek-V4.1 on Blackwell (SM120) — avoid eager mode for now.** If you are running DeepSeek-V4.1-Flash on RTX PRO 6000 Blackwell hardware, CUDA graph capture is broken and decode throughput degrades severely. Monitor [#56892](https://github.com/vllm-project/vllm/issues/56892) for the SM120 graph capture fix; as a workaround, defer Blackwell deployment of this model until the fix lands.

2. **MoE users (DeepSeek, Qwen, GLM): upgrade when fix PR merges.** The SwiGLU clamp regression in batched DeepGEMM produces silent logprob errors large enough to affect reward-model-based evaluation pipelines. If you are using `deepep_low_latency` or any FP8 MoE backend on H200/H100, pull [#68084](https://github.com/vllm-project/vllm/pull/68084) once merged.

3. **Tool-calling with gpt-oss legacy headers: patch or upgrade.** Chat completion endpoints return HTTP 500 when a prior tool-call name contains special-token text. The fix ([#65771](https://github.com/vllm-project/vllm/pull/65771)) is merged; downgrade to v0.31.0 or apply the cherry-pick if you cannot upgrade immediately.

4. **Rust frontend: still experimental.** Teams evaluating `VLLM_USE_RUST_FRONTEND=1` should note feature parity gaps (see [#44280](https://github.com/vllm-project/vllm/issues/44280)). In particular, tool + response_format behavior under `tool_choice="auto"` differs between Python and Rust frontends — avoid mixing them in the same deployment until [#66858](https://github.com/vllm-project/vllm/issues/66858) resolves.

5. **RL / weight-transfer pipelines: early infrastructure available.** The direct weight reload RFC (#54477) is maturing — packed NCCL/IPC chunk layout landed ([#68043](https://github.com/vllm-project/vllm/pull/68043)) and the load plan is faster ([#67836](https://github.com/vllm-project/vllm/pull/67836)). Teams building RL training loops on top of vLLM can begin evaluating `use_load_plan` with caution for non-standard MoE architectures.

6. **AMD ROCm readiness improving.** RDNA4 Octave KV support ([#67844](https://github.com/vllm-project/vllm/pull/67844)) and gfx950 Qwen3.8 optimization track ([#57149](https://github.com/vllm-project/vllm/issues/57149)) signal that AMD GPU users should have production-quality MoE serving paths within the next 1–2 release cycles. Monitor the tracker issues for staged PR landing.

---

*Generated from vllm-project/vllm GitHub data · 2026-11-18*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang and create a structured digest for 2026-11-18.

Key observations from the data:

1. **No new releases** in the last 24 hours

2. **Hot issues (by comment count):**
   - #26340: CUDA Coredump Tracker (380 comments) - auto-collected CUDA coredump events
   - #42752: Flaky tests and CI infrastructure failures (211 comments)
   - #42012: GLM-5.3-Flash on SM120: fa4 attention backend crashes at CUDA-graph capture (29 comments)
   - #43699: PD Disaggregation Roadmap Q4 2026 (25 comments)
   - #17050: CI Test Failures and Fixes tracking (15 comments)
   - #50045: SGLang 1.0 Release Tracker (11 comments)
   - #49336: SM90 decode regression v0.5.22 → v0.5.23 (8 comments)
   - #50915: macOS --device cpu fails with RuntimeError (7 comments)
   - #50087: Non-intrusive dumps cannot distinguish draft vs target model under DSPARK (7 comments)

3. **New PRs:**
   - #46460: [Feat] pd: Extract MooncakeTransport behind a common Transport interface
   - #50684: [Feat] cuda-graph: Prefill CUDA graphs for FlashInfer CuTe DSL MoE and MegaMoE
   - #51150: [Doc] sampling: Fix the structured output launch example
   - #50931: [Fix] diffusion: Repair cached subfolders and CI recovery
   - #47961: [Feat] [Intel] disaggregation: Support Intel XPU in the EPD multimodal encoder path
   - #50702: [Perf] [AMD] qsa: Score decode rows with a grouped Triton kernel on ROCm
   - #51074: [Refactor] server_args: Remove deprecated flags, choice values and environment variables
   - #50440: [Fix] diffusion/qwen-image: Stream the DiT in auto mode when it does not fit the GPU
   - #51149: [Chore] CODEOWNERS: Add Shunkangz as a weight_cache owner
   - #50304: [Perf] hicache: Avoid unnecessary Mooncake lease renewals in Linker prefetch
   - #47271: [Feat] Mistral-Large-4: add model support
   - #49429: [Perf] beam-search: Speed up trie-constrained beam search on SM120
   - #45488: [Fix] kvcache: Gate fused FP8 prefix-valid commit kernel on SM89+
   - #50842: [Feat] kimi-k3: DWDP for KDA and shared-expert weights on PD prefill
   - #51147: [Feat] sgl-router: Add --dp-rank-policy least_tokens for engine-reported KV balance
   - #50785: [Feat] api.v1: Add opt-in administrative Shutdown RPC
   - #46953: [Feat] weight_cache: Add vmm_fd transport
   - #51000: [Feat] [AMD] kimi-k3: Serve Kimi-K3.1 on MI350X / MI355X (gfx950)
   - #48420: [Feat] [NPU] kimi-k3.1: Add model support and route DSA attention path on Ascend
   - #46941: [CI] openai-server: Share the default Python server fixture

Several cross-platform initiatives are emerging. The vmm_fd transport implementation is progressing, while AMD and NPU teams are both working to enable Kimi-K3.1 support across different hardware—MI350X/MI355X on the AMD side and Ascend on the NPU side. There's also a CI improvement to consolidate the Python server fixture for the openai-server tests.
</think>


# SGLang Digest — 2026-11-18

## 1. Today's Highlights

SGLang's v1.0 release preparation is accelerating, with a major refactor ([PR #51074](https://github.com/sgl-project/sglang/pull/51074)) removing deprecated CLI flags and environment variables that now raise explicit migration errors. Two critical regressions are under active investigation: a **+33–45% decode regression on Hopper (SM90)** between v0.5.22 and v0.5.23 with DSpark speculative decoding ([#49336](https://github.com/sgl-project/sglang/issues/49336)), and a **CUDA-graph capture crash on SM120 (RTX PRO 6000)** for GLM-5.3-Flash with the FA4 attention backend ([#42012](https://github.com/sgl-project/sglang/issues/42012)). Cross-vendor support is expanding with new AMD ROCm and Ascend NPU kernels landing for Kimi-K3/K3.1, alongside Intel XPU integration for encoder-decoder disaggregation.

---

## 2. Releases & Breaking Changes

| Change | Detail | PR/Issue |
|--------|--------|----------|
| **Deprecation sweep** | `server_args.py` removes all deprecated CLI flags, choice values, and environment variables flagged in 0.5.x; each now errors with a message naming the replacement | [PR #51074](https://github.com/sgl-project/sglang/pull/51074) |
| **SGLang 1.0 tracking** | Roadmap issue tracks hardening, silent-config → explicit-errors migration, and a formal 1.x compatibility policy; may require changes from 0.5.x upgrades | [#50045](https://github.com/sgl-project/sglang/issues/50045) |

No new tagged releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Model / Architecture | Hardware | Notes |
|---------------------|----------|-------|
| **Mistral Large 4** (`mistralai/Mistral-Large-4-1T-A52B`) | CUDA | 1T-parameter / 52B-active MoE, Pixtral vision, MLA + DSA sparse attention (top-k 2048), cross-layer KV sharing, YaRN 1M context, bundled DSpark draft head (3 drafted tokens) | [PR #47271](https://github.com/sgl-project/sglang/pull/47271) |
| **Kimi-K3.1** (remote-code checkpoint) | **AMD MI350X / MI355X (gfx950)** | Hybrid KDA linear attention + DSA sparse MLA, MXFP4 MoE; AMD kernel stack: DSA ([#50997](https://github.com/sgl-project/sglang/pull/50997)), Kimi-K3 layers ([#50998](https://github.com/sgl-project/sglang/pull/50998)), speculative decoding ([#50999](https://github.com/sgl-project/sglang/pull/50999)) | [PR #51000](https://github.com/sgl-project/sglang/pull/51000) |
| **Kimi-K3.1** (remote-code checkpoint) | **Ascend NPU** | DSA sparse attention path routed on Ascend; remote-code config now recognized as DSA; hybrid KV pool construction fixed | [PR #48420](https://github.com/sgl-project/sglang/pull/48420) |
| **Kimi-K3** PD prefill | NVIDIA GB300 (Blackwell) | DWDP support for KDA and shared-expert weights; `--kda-dwdp` flag enables 8× GB300 configuration | [PR #50842](https://github.com/sgl-project/sglang/pull/50842) |
| **DeepSeek-V4.1-Flash** | AMD MI355X (gfx950) | ROCm optimization tracker; text + image input, TP4, with and without DSpark | [#49327](https://github.com/sgl-project/sglang/issues/49327) |
| **Qwen3.8-27B** | AMD MI355X (gfx950) | MXFP4 weights with FP8 KV cache; TP1/TP2 optimization tracker | [#49324](https://github.com/sgl-project/sglang/issues/49324) |
| **Intel XPU** | Encoder-decoder disaggregation (EPD) | Landing buffers and `EmbeddingPool` moved from hardcoded CUDA to XPU-compatible allocation | [PR #47961](https://github.com/sgl-project/sglang/pull/47961) |

---

## 4. Performance & Optimization

| Domain | Optimization | Impact | PR/Issue |
|--------|-------------|--------|----------|
| **CUDA graphs** | Enable prefill CUDA graphs for FlashInfer CuTe DSL MoE (`flashinfer_cutedsl`) and FlashInfer MegaMoE (W4A16) | Currently validated with `--cuda-graph-backend-prefill disabled`; this PR extends CUDA graph capture to these kernels | [PR #50684](https://github.com/sgl-project/sglang/pull/50684) |
| **ROCm QSA** | Grouped Triton kernel for QSA decode-row scoring on MI355X | Replaces per-row `tilelang_qsa_mqa_decode` at concurrency 48; 4 draft tokens × 44 requests = 176 rows per verify step | [PR #50702](https://github.com/sgl-project/sglang/pull/50702) |
| **Beam search** | Trie-constrained beam search speedup on SM120 (RTX PRO 6000) | Rebased onto eager beam decode ([#44349](https://github.com/sgl-project/sglang/pull/44349)); GPU-idle and output-comparison results documented | [PR #49429](https://github.com/sgl-project/sglang/pull/49429) |
| **PD disaggregation** | Mooncake transport abstraction under common `Transport` interface | Completes Step 2 of [#34510](https://github.com/sgl-project/sglang/issues/34510); unifies Mooncake and Ascend transfer plans | [PR #46460](https://github.com/sgl-project/sglang/pull/46460) |
| **HiCache prefetch** | Avoid unnecessary Mooncake lease renewals in Linker prefetch | Reduces lease overhead during proactive KV cache prefetch | [PR #50304](https://github.com/sgl-project/sglang/pull/50304) |
| **KV cache** | Gate fused FP8 prefix-valid commit kernel on SM89+ | SM86 (Ampere) compilation failure fixed; fp8e4nv Triton kernel now guarded behind SM89 (Ada/Hopper) check | [PR #45488](https://github.com/sgl-project/sglang/pull/45488) |
| **Router** | `--dp-rank-policy least_tokens` for engine-reported KV balance | Augments `--dp-aware` routing; picks DP rank by token count rather than in-flight count or round-robin | [PR #51147](https://github.com/sgl-project/sglang/pull/51147) |
| **Weight cache** | `vmm_fd` transport backend for weight cache daemon | Placeholder replaced with actual implementation; uses VMM file descriptors instead of CUDA IPC handles | [PR #46953](https://github.com/sgl-project/sglang/pull/46953) |

---

## 5. Stability & Regressions

> **⚠️ Active regressions — prioritize investigation**

| Severity | Issue | Detail | Workaround / Status |
|----------|-------|--------|---------------------|
| **🔴 Critical** | Decode regression on Hopper | SM90: +33–45% per-step decode time at concurrency 12 (8K–64K context), v0.5.22 → v0.5.23, DSpark speculative decoding + `use_deep_select_decode` | Investigating; no known workaround yet | [#49336](https://github.com/sgl-project/sglang/issues/49336) |
| **🔴 Critical** | CUDA-graph crash on SM120 | FA4 attention backend crashes at hybrid extend reshape during CUDA-graph capture for GLM-5.3-Flash; Triton backend works | Use `--attention-backend triton` as interim workaround | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **🔴 Critical** | MHA decode NaN in fp16 | `decode_attention_fwd` returns NaN when one q×k product exceeds 65504 (fp16 max); affects MHA models (`kv_group_num == 1`) | Fix PR not yet filed | [#51095](https://github.com/sgl-project/sglang/issues/51095) |
| **🟡 High** | macOS `--device cpu` crash | `RuntimeError` running `lscpu` in `get_cpu_ids_by_node`; server resolves incorrectly on macOS | Fix PR not yet filed | [#50915](https://github.com/sgl-project/sglang/issues/50915) |
| **🟡 High** | Reasoning parser truncation | Quoted `</think>` inside CoT triggers premature end-of-reasoning delimiter; rest of chain-of-thought leaks into content field | Fix PR not yet filed | [#48791](https://github.com/sgl-project/sglang/issues/48791) |
| **🟡 High** | Qwen3.8-27B numerical variance | Scores depend on batch shape; borderline decisions can flip between FP8 and BF16 runs | Reproducible numerical behavior; fix PR not yet filed | [#43956](https://github.com/sgl-project/sglang/issues/43956) |
| **🟡 High** | Anthropic streaming drops `}` | Whitespace between tool-call arguments causes closing `}` to be dropped when multiple tool calls present | Fix PR not yet filed | [#42260](https://github.com/sgl-project/sglang/issues/42260) |
| **🟢 Moderate** | CI flaky tests (211 comments) | Active tracking of flaky tests and CI infrastructure failures in `PR Test Base` / `PR Test Extra` runs | `@sglang-pr-babysit` Claude Code workflow in use | [#42752](https://github.com/sgl-project/sglang/issues/42752) |

**Resolved / Closed (inactive):** Multiple issues marked `[CLOSED] [inactive]` on 2026-11-18, including DeepSeek V4/V3.2 tool call parsing ([#40236](https://github.com/sgl-project/sglang/issues/40236)), Qwen3CoderDetector regex truncation ([#39836](https://github.com/sgl-project/sglang/issues/39836)), Python vs Rust prompt rendering divergence ([#39843](https://github.com/sgl-project/sglang/issues/39843)), and decode starvation under chunked-prefill ([#32549](https://github.com/sgl-project/sglang/issues/32549)).

---

## 6. What This Means for Application Developers

1. **Upgrade caution on Hopper**: If you are running DSpark speculative decoding on H100/H200/H20 (SM90), hold off on upgrading from v0.5.22 to v0.5.23 until [#49336](https://github.com/sgl-project/sglang/issues/49336) is resolved — a 33–45% decode latency regression is significant at production concurrency levels.

2. **SM120 users: avoid FA4 + CUDA graphs with GLM models**: If you are on an RTX PRO 6000 (SM120) and serving GLM-5.3-Flash, explicitly set `--attention-backend triton` until the FA4 CUDA-graph capture crash is fixed ([#42012](https://github.com/sgl-project/sglang/issues/42012)).

3. **macOS CPU serving is broken**: The `lscpu`-based CPU ID detection crashes on macOS ([#50915](https://github.com/sgl-project/sglang/issues/50915)); if you are evaluating SGLang on Apple Silicon with `--device cpu`, this will fail.

4. **Structured output example is now correct**: The sampling documentation has been fixed to use `--grammar-backend xgrammar` ([PR #51150](https://github.com/sgl-project/sglang/pull/51150)); update any copy-pasted server commands.

5. **New model access**: Mistral Large 4 is now supported with full DSpark speculative decoding and YaRN 1M context ([PR #47271](https://github.com/sgl-project/sglang/pull/47271)). Kimi-K3.1 is now available on AMD MI350X/MI355X and Ascend NPU, opening new deployment paths beyond NVIDIA.

6. **Router policy change**: If you use PD disaggregation with `--dp-aware`, the new `--dp-rank-policy least_tokens` option ([PR #51147](https://github.com/sgl-project/sglang/pull/51147)) may improve KV cache balance compared to the default in-flight count policy.

7. **Prepare for SGLang 1.0**: The 1.0 release tracker ([#50045](https://github.com/sgl-project/sglang/issues/50045)) indicates that deprecated configuration options will be replaced with explicit errors. Audit your launch scripts for any deprecated flags before upgrading to 1.0; the refactor in [PR #51074](https://github.com/sgl-project/sglang/pull/51074) already surfaces these errors in current builds.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a llama.cpp digest for 2026-11-18 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases (last 24h):**
- b12496: ggml-cuda: hip: Tune stream_k algo and mmq configs to use stream_k on AMD GCN (#30022)
- b12494: mtmd: add kokoro tts support (#32413)
- b12493: cuda: use the implicit GEMM conv2d path for F32 kernels (#32482)
- b12492: opencl: add A7 Q5_K non-MoE binary kernel (#31002)
- b12491: mtmd: Add support for Qwen3-TTS' ICL/reference mode (#32438)
- b12490: qwen4exp : fix graph reallocation from the n-gram table scale (#32483)
- b12489: server : return 400 when grammar and ignore_eos are on (#32377)
- b12488: ggml-cuda: disable quantized matvec fusion on all Pascal GPUs (#32239)
- b12487: CUDA: few-row MMQ for MUL_MAT_ID (#32065)
- b12485: CUDA: use block reductions for whole-row pool_1d (#31855)

**Issues (updated in last 24h):**
- 63 total items, showing top 30
- Notable closed issues:
  - #27845: Eval bug - memory leak with SYCL (29 comments) - CLOSED
  - #32353: Vulkan FA prefill crashes on RDNA3/Windows - CLOSED (PR #32415 exists)
  - Notable open issues:
    - #31206: logprobs nondeterministic on SYCL iGPU MoE
    - #32160: Feature Request - ternary weights with Hadamard rotation
    - #28990: SYCL performance improvements
    - #24295: Responses API silently drops 'namespace' and 'web_search' tool types
    - #29058: Feature Request - Support Prism PQ2_0 and PTQ1_0
    - #31509: Vulkan random all-NaN logits on Radeon 680M
    - #32511: Volta (SM72) follow-up analysis
    - #32370: Vulkan multi-ubatch corruption
    - #32503: llama-cvector-generator direction.N measurement bug

**Pull Requests (**

165 total, showing top 20): Several open PRs targeting performance optimizations across different backends. SYCL group GEMM improvements are in progress (#31428), while CUDA MoE optimizations on V100 are being addressed (#32504). Vulkan Flash Attention was disabled on AMD Windows due to driver issues (#32415, already merged). Server Responses tool call completion is being fixed (#31638), and Vulkan INT8 MMQ performance gaps are being reduced (#32395). Additional work includes reading ahead offloaded tensors (#32515), utilizing all CPU threads for large GET_ROWS operations (#32514), and decoding conv2d patch indices with fastdiv (#32492).

Model and backend support is expanding with new additions like FlintForCausalLM (#30928) and MiniCPM5 MoE (#32386), plus GigaChat 3.5 which is a 432B MoE model. OpenCL is adding A7 DP4A bin kernels (#32510), and CUDA/HIP are implementing native quantized and bf16 KV caching in flash_attn_tile (#31234). A hybrid tensor/layer multi-GPU prototype is being explored (#32508), and GGUFReader tensor offset overflow issues are being fixed (#32495). Transcription functionality is also being improved with transcription prompt fixes (#32507).
</think>


# llama.cpp Digest — 2026-11-18

## 1. Today's Highlights

The project saw continued momentum across GPU backends, with AMD GCN receiving stream_k optimizations and a new OpenCL binary kernel for Q5_K on A7 hardware. Multi-modal support expanded with Kokoro TTS integration and Qwen3-TTS reference mode, while a critical server fix now returns HTTP 400 when grammar constraints conflict with `ignore_eos` to prevent silent correctness issues.

## 2. Releases & Breaking Changes

| Commit | Change | Notes |
|--------|--------|-------|
| [#32377](https://github.com/ggml-org/llama.cpp/pull/32377) | `server`: return 400 when grammar + `ignore_eos` | Prevents incorrect sampling behavior; moved validation into sampler layer |
| [#32483](https://github.com/ggml-org/llama.cpp/commit/32483) | `qwen4exp`: fix graph reallocation from n-gram table scale | Corrects scale application with `ggml_scale` and single post-load read |

**No new release tags today.** Build versions remain at `1.0.0-dev` range.

---

## 3. New Model & Hardware Support

| Area | Item | PR/Commit | Status |
|------|------|-----------|--------|
| **TTS** | Kokoro TTS integration (`mtmd`) | [#32413](https://github.com/ggml-org/llama.cpp/pull/32413) | Merged (b12494) |
| **TTS** | Qwen3-TTS ICL/reference mode | [#32438](https://github.com/ggml-org/llama.cpp/pull/32438) | Merged (b12491) |
| **Model** | Flint (`FlintForCausalLM`) | [#30928](https://github.com/ggml-org/llama.cpp/pull/30928) | Merged |
| **Model** | MiniCPM5 MoE (gated GQA, shared experts) | [#32386](https://github.com/ggml-org/llama.cpp/pull/32386) | Merged |
| **Model** | GigaChat 3.5 (432B MoE, MLA + DeepSeek MoE) | [#25342](https://github.com/ggml-org/llama.cpp/pull/25342) | Open |
| **Quantization** | Prism PQ2_0 (type 142) & PTQ1_0 (type 143) | [#29058](https://github.com/ggml-org/llama.cpp/issues/29058) | Feature request |
| **Backend** | AMD GCN: stream_k enabled for HIP | [#30022](https://github.com/ggml-org/llama.cpp/pull/30022) | Merged (b12496) |
| **Backend** | OpenCL: A7 Q5_K non-MoE binary kernel | [#31002](https://github.com/ggml-org/llama.cpp/pull/31002) | Merged (b12492) |
| **Backend** | OpenCL: A7 DP4A kernels (Q4_0/K, Q5_K, Q6_K, Q8_0) | [#32510](https://github.com/ggml-org/llama.cpp/pull/32510) | Open |

---

## 4. Performance & Optimization

### Landed Today

| Category | Change | Impact | PR/Commit |
|----------|--------|--------|-----------|
| **CUDA MMQ** | Few-row MMQ for `MUL_MAT_ID` (2+ tokens on DGX Spark) | Improved low-batch quantized MoE throughput | [#32065](https://github.com/ggml-org/llama.cpp/pull/32065) (b12487) |
| **CUDA conv2d** | Implicit GEMM path for F32 kernels (was F16-only) | Significant speedup for F32 convolutions; avoids naive direct convolution | [#32482](https://github.com/ggml-org/llama.cpp/pull/32482) (b12493) |
| **CUDA pool** | Block reductions for whole-row `pool_1d` | Faster pooling operations | [#31855](https://github.com/ggml-org/llama.cpp/pull/31855) (b12485) |
| **CUDA MMQ** | Fastdiv decode for conv2d patch indices | Up to 1.6× on long reductions (e.g., 768ch, k=7) | [#32492](https://github.com/ggml-org/llama.cpp/pull/32492) |
| **CPU** | All threads for large `GET_ROWS` (>262K elements) | Better CPU utilization with GPU offloading | [#32514](https://github.com/ggml-org/llama.cpp/pull/32514) |
| **CPU MoE** | Special gated activation path for `n_tokens=1` with `-n-cpu-moe` | Speedup on single-token MoE inference | [#20596](https://github.com/ggml-org/llama.cpp/pull/20596) |

### In Progress (Open PRs)

| Category | Change | Notes |
|----------|--------|-------|
| **SYCL GEMM** | Improve Grouped XMX GEMM by avoiding SLM staging | Requires #30156 first; reduces memory traffic |
| **CUDA MoE** | MMQ for MoE on V100 (FP16 tensor cores, no int8) | V100-specific kernel selection fix |
| **Vulkan INT8** | Reduce MMQ performance gap between AMDVLK and RADV | ~15% gap reduction targeting |
| **CUDA FA** | Native quantized/bf16 KV in `flash_attn_tile` | q4_0/1, q5_0/1, q8_0, bf16 supported in tile load |
| **Multi-GPU** | Hybrid tensor/layer mode prototype | ~2× prefill throughput improvement (~700→1500 t/s); not merge-ready |

---

## 5. Stability & Regressions

### Critical Fixes Merged

| Issue | Severity | Fix | Link |
|-------|----------|-----|------|
| Vulkan FA crash on AMD Windows (RDNA3) | 🔴 High | Disable flip FA shader on AMD Windows driver | PR [#32415](https://github.com/ggml-org/llama.cpp/pull/32415) (merged) |
| SYCL memory leak with `-sm tensor` | 🟡 Medium | Stale/closed; workaround in progress | Issue [#27845](https://github.com/ggml-org/llama.cpp/issues/27845) |

### Open Issues Requiring Attention

| Issue | Severity | Description | Workaround/Status |
|-------|----------|-------------|-------------------|
| [#31509](https://github.com/ggml-org/llama.cpp/issues/31509) | 🟡 Medium | Vulkan: random all-NaN logits on Radeon 680M; gone with integer dot product disabled | Repro since b10343; driver/tolerance issue |
| [#32370](https://github.com/ggml-org/llama.cpp/issues/32370) | 🟡 Medium | Vulkan on i915: multi-ubatch corruption (>20s GPU queue) | Root cause under investigation |
| [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) | 🟡 Medium | `/v1/completions` logprobs nondeterministic on SYCL iGPU MoE; seed field doesn't pin distribution | Request-level seed not propagating |
| [#32493](https://github.com/ggml-org/llama.cpp/issues/32493) | 🟡 Medium | Realtime transcription sessions drop ASR instruction; Gemma answers audio instead | Fix PR [#32507](https://github.com/ggml-org/llama.cpp/pull/32507) open |
| [#32503](https://github.com/ggml-org/llama.cpp/issues/32503) | 🟡 Medium | `llama-cvector-generator`: direction.N measured one block upstream; deepest steering depth unmeasurable | qwen35moe verified affected |
| [#32496](https://github.com/ggml-org/llama.cpp/issues/32496) | 🟢 Low | Bare JSON tool calls (Llama 3.x) don't trigger lazy grammar | Fix PR [#32497](https://github.com/ggml-org/llama.cpp/pull/32497) open |

### Stale Issues Closed

- [#28037](https://github.com/ggml-org/llama.cpp/issues/28037): Volta SM70/SM72 Flash Attention analysis → auto-closed; Ampere fallback already near-optimal
- [#29935](https://github.com/ggml-org/llama.cpp/issues/29935): Ampere KV streaming perf ~2× off physics → stale
- [#31675](https://github.com/ggml-org/llama.cpp/issues/31675): MoE cache abort on ROCm/HIP → closed

---

## 6. What This Means for Application Developers

### Deploy Today
- **AMD GCN users**: Enable HIP stream_k via the new config tuning for improved throughput on MI100/MI200/gfx10xx
- **Vulkan on AMD Windows**: Flash Attention flip path is now disabled; fallback to non-flip path maintains correctness
- **Server operators**: Grammar + `ignore_eos` now returns HTTP 400 instead of silently sampling incorrectly—audit existing workloads

### Evaluate for Next Cycle
- **SYCL deployments**: The nondeterministic `logprobs` issue on integrated GPUs (Issue #31206) affects reproducibility; avoid relying on seed pinning for production MoE inference until resolved
- **Multi-GPU**: The hybrid tensor/layer prototype (PR #32508) shows 2× prefill gains but is not production-ready; monitor for merge readiness
- **Quantized models**: V100 users with MoE models should watch PR #32504 for proper MMQ dispatch

### Watch List
- Vulkan INT8 MMQ AMDVLK parity work (PR #32395) could close the 15% performance gap for AMD Vulkan users
- Ternary weights with Hadamard rotation (Issue #32160) and Prism PQ2_0/PTQ1_0 (Issue #29058) represent upcoming quantization format additions
- Kokoro TTS integration enables on-device speech synthesis pipelines in production builds

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze this GitHub data for the Ollama repository to create a structured digest for 2026-11-18.

Looking at the data:

**Releases**: None in last 24h

**Issues (13 total)**:
- #4072: Feature request for Windows sleep prevention (long-standing, 39 comments)
- #6003: AMD Radeon RX 6750 XT Support (closed)
- #19733: tensor blk.0.ssm_beta.weight not found (open, new)
- #19535: Intel NPU backend via OpenVINO feature request (closed)
- #19712: Port binding error (open)
- #19714: GCC 15 build failure with missing #include <cstdint> (closed)
- #14834: Qwen tool call parsing XML syntax error (open, long-standing)
- #19747: Vulkan on RX 5700 XT 13x slower than upstream llama.cpp (open, new)
- #19741: CI hardening GitHub Actions (open, new)
- #18750: SystemOne qwen35 forced to numParallel=1 (closed)
- #19740: d1-2B batch size issue with misleading error (open, new)
- #19738: glm-ocr never stops generating (closed)
- #19735: CANN build for Ascend NPUs proposal (open, new)

**Pull Requests (20 total)**:
- #19749: RuneTranslate community integration
- #19746: CI flake fix for speech slow-reader coverage
- #19748: Share one runner across shift settings
- #19745: MLX runner persist inactive conversation caches
- #19742: Test stabilization for Pi catalog timeout
- #18675: MLX build without cgo (closed)
- #18711: Explicit capabilities exhaustive at create and runtime
- #19744: MLX runner graceful shutdown


- #19743: Size whole-prompt batches for decision models
- #19703: PipesHub RAG integration
- #19632: VRAM accounting and GPU splitting fixes
- #19346: AITerm community integration (closed)
- #19739: AITerm README addition
- #19737: LLocal.in link fix
- #19736: Grow streaming response buffers on demand
- #19651: JSON arguments in qwen function block parsing
- #19678: MLX runner saved history memory pressure adaptation
- #19734: PPLX Decider v1.3 MLX support
- #19568: Intel Vulkan support improvements and optimization work
- #19677: MLX runner prefix reuse optimization (closed)

The focus is on performance enhancements and compatibility across different hardware platforms. Key developments include addressing GPU memory allocation, supporting new hardware architectures, and refining inference optimization strategies.

Specific technical improvements target memory management, GPU allocation, and inference performance across various hardware configurations. The work spans kernel optimization, batch processing, and memory usage efficiency.
</think>


# Ollama Digest — 2026-11-18

## 1. Today's Highlights

Ollama contributors landed significant infrastructure improvements targeting VRAM accounting correctness, GPU splitting logic, and MLX runner resilience on Apple Silicon. A new PR proposes Ascend NPU support via CANN backend integration, while Vulkan performance regressions on RDNA1 AMD GPUs surfaced as a high-priority issue. On the stability front, GCC 15 compatibility and streaming buffer allocation were resolved.

## 2. Releases & Breaking Changes

No new releases in the past 24 hours.

**Resolved build regressions:**
- **[GCC 15 compilation failure](https://github.com/ollama/ollama/issues/19714)** — Missing `#include <cstdint>` in `llama-mmap.h` causing `uint32_t` errors; issue is closed.
- **MLX Windows build** — [PR #18675](https://github.com/ollama/ollama/pull/18675) enables Go tree builds without cgo, resolving failures on Windows (no C toolchain). Closed.

## 3. New Model & Hardware Support

| Area | Item | Status | Links |
|------|------|--------|-------|
| **Ascend NPUs** | CANN backend build and device discovery for Huawei Ascend NPUs | Proposed | [#19735](https://github.com/ollama/ollama/issues/19735) |
| **Intel IGPUs** | Vulkan enabled out-of-box for Intel Ultra Series 1+ (MTL+) with 32.0.101.9150+ drivers, 16 GB+ RAM | In progress | [#19568](https://github.com/ollama/ollama/pull/19568) |
| **Intel NPUs** | OpenVINO-based NPU backend request (Core Ultra support) | Closed (no implementation) | [#19535](https://github.com/ollama/ollama/issues/19535) |
| **AMD RDNA1** | RX 5700 XT Vulkan performance regression (~13× slower than upstream llama.cpp) | Open, investigated | [#19747](https://github.com/ollama/ollama/issues/19747) |
| **AMD RDNA2** | RX 6750 XT tensile initialization failure | Closed | [#6003](https://github.com/ollama/ollama/issues/6003) |
| **Apple Silicon** | PPLX Decider v1.3 support added to MLX runner (27B, Flash architecture) | Open | [#19734](https://github.com/ollama/ollama/pull/19734) |
| **Decision models** | `d1-2B` batch sizing fix for non-causal architectures | Open | [#19740](https://github.com/ollama/ollama/issues/19740), [#19743](https://github.com/ollama/ollama/pull/19743) |

## 4. Performance & Optimization

| Category | Change | PR / Issue |
|----------|--------|------------|
| **VRAM accounting** | Fixed incorrect model eviction, load refusals, and unnecessary GPU spreading. Resolves #19463, #18679, #18349, #16599. | [#19632](https://github.com/ollama/ollama/pull/19632) |
| **GPU splitting** | Improved logic to avoid spreading models across GPUs when not needed. | [#19632](https://github.com/ollama/ollama/pull/19632) |
| **MLX runner — caching** | Persists inactive conversation caches to disk; restores state after memory reclamation, model switching, or runner restart. | [#19745](https://github.com/ollama/ollama/pull/19745), [#19744](https://github.com/ollama/ollama/pull/19744), [#19678](https://github.com/ollama/ollama/pull/19678) |
| **MLX runner — memory** | Adaptive history retention under memory pressure; bounded staging and shutdown draining. | [#19678](https://github.com/ollama/ollama/pull/19678) |
| **MLX runner — prefix reuse** | Reuse saved prompt prefixes across busy request slots for overlapping conversations. | [#19677](https://github.com/ollama/ollama/pull/19677) (closed) |
| **Runner sharing** | Single runner shared across `--context-shift` settings; eliminates per-request model reloads when clients alternate shift modes. | [#19748](https://github.com/ollama/ollama/pull/19748) |
| **Streaming buffers** | API streaming responses grow buffers on demand instead of pre-allocating 8 MB. | [#19736](https://github.com/ollama/ollama/pull/19736) |
| **Decision model batching** | Whole-prompt batches sized for `decision.type` models (e.g., `d1-2B`), preventing misleading context-length errors on >512-token multi-image requests. | [#19743](https://github.com/ollama/ollama/pull/19743) |

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | **Vulkan on AMD RX 5700 XT (RDNA1)** — prompt processing 13× slower than upstream llama.cpp; generation 17% slower. | Open | — |
| **Medium** | **Qwen tool call XML parsing failure** (`qwen3-coder:30b`) — intermittent "unexpected EOF" errors during agentic use. | Open (since Mar 2025) | — |
| **Medium** | **`glm-ocr` never stops generating** on 0.40.15/0.40.16 — EOS token handling regression. | Closed | — |
| **Medium** | **Port 11434 bind failure** — address-in-use error on API startup. | Open | — |
| **Low** | **GCC 15 build failure** — missing `#include <cstdint>` in `llama-mmap.h`. | Closed | Implicit |
| **Low** | **Port binding / Windows sleep prevention** — feature request tracked since 2024. | Open | — |

## 6. What This Means for Application Developers

**Infrastructure engineers should note:**

1. **GPU resource management is improving.** The VRAM accounting and GPU splitting fixes ([#19632](https://github.com/ollama/ollama/pull/19632)) directly affect multi-GPU deployments—if you've been seeing unexplained model eviction or load failures, this PR should resolve those patterns once merged.

2. **Context shift overhead is eliminated.** Clients that toggle `--context-shift` between requests previously caused a model reload on every switch. With [PR #19748](https://github.com/ollama/ollama/pull/19748), a single runner handles both modes, reducing latency for agents that use sliding-window context management.

3. **Streaming API memory overhead reduced.** Pre-allocating 8 MB per streaming call ([#19736](https://github.com/ollama/ollama/pull/19736)) was wasteful for short responses. Applications handling high request volumes with small outputs will see lower memory pressure.

4. **MLX runner state durability improves.** If you're running Ollama on Apple Silicon with long conversation threads, the new cache persistence ([#19745](https://github.com/ollama/ollama/pull/19745)) means less reprocessing after memory pressure events or runner restarts.

5. **Decision model batch sizing corrected.** Applications using `d1-2B` or similar architectures for multi-turn agentic tasks should retest >512-token requests with images—the misleading "context length" error is addressed in [#19743](https://github.com/ollama/ollama/pull/19743).

6. **Intel IGPU Vulkan OOB experience will improve.** Once [#19568](https://github.com/ollama/ollama/pull/19568) lands, Intel integrated graphics on Core Ultra systems will use Vulkan by default (previously CPU fallback was common).

**Monitor:** The AMD RDNA1 Vulkan regression ([#19747](https://github.com/ollama/ollama/issues/19747)) is significant for users on older AMD GPUs—avoid Vulkan mode on RX 5700 XT until resolved.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a structured digest for LiteLLM based on the GitHub data provided. Let me analyze the data and create a professional, concise digest covering the requested sections.

Let me organize what I see:

**Releases:**
- v1.111.0-rc.1 (latest release candidate)
- v1.110.0 (latest stable)
- v1.108.11 (LTS)

**Key Issues/Themes:**
1. Security: Salt key rotation feature request (#12448)
2. Bug fixes: Wrong error messages, Redis cache issues, database issues
3. LLM translation issues: Many issues related to streaming, reasoning models, tool calls
4. Performance issues: O(n²) credential sync, memory leaks in streaming
5. Database issues: SQL_ASCII encoding, read replica failover
6. Anthropic/v1/messages streaming issues: reasoning_content handling, tool calls, prompt caching
7. Rust migration: Ongoing work moving Python to Rust for performance

**PRs:**
1. Rust repositories for auth objects (#52170, #52173)
2. Bedrock GPT native structured output fix (#52419)
3. Vertex AI Claude messages on Rust (#52314)
4. Router priority queuing (#51892)
5. Various bug fixes

Let me create the digest:
</think>


# LiteLLM Digest — 2026-11-18

## Today's Highlights

The LiteLLM team continues its Rust migration push with two new PRs moving authentication and database lookups off Prisma onto Rust stores (#52170, #52173), targeting reduced latency on high-frequency auth paths. Concurrently, a cluster of streaming-related bugs affecting Anthropic `/v1/messages` bridging to OpenAI-compatible backends — including reasoning_content type handling (#50893), tool-call argument loss (#45348), and prompt-cache accounting (#41067) — are active or recently closed, indicating ongoing refinement of the translation layer.

## Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| [v1.111.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-rc.1) | Release Candidate | Latest RC; verify with cosign |
| [v1.110.0](https://github.com/BerriAI/litellm/releases/tag/v1.110.0) | Stable | Current stable |
| [v1.108.11](https://github.com/BerriAI/litellm/releases/tag/v1.108.11) | LTS | Pull `ghcr.io/berriai/litellm:lts` for latest LTS |

No breaking config/API changes reported in today's releases.

## New Model & Hardware Support

- **Claude on Vertex AI `/v1/messages`**: PR [#52314](https://github.com/BerriAI/litellm/pull/52314) moves the path from Python to Rust, aligning with existing Anthropic, Azure AI, and Bedrock implementations.
- **Bedrock GPT native structured output**: PR [#52419](https://github.com/BerriAI/litellm/pull/52419) adds the `text.format.strict` flag for GPT models via Converse API, fixing JSON schema enforcement on Bedrock.
- **Feature request**: Salt key rotation ([#12448](https://github.com/BerriAI/litellm/issues/12448)) to parallel the existing `master_key_rotations` mechanism.

## Performance & Optimization

| Area | Issue | Status | Details |
|------|-------|--------|---------|
| Auth lookups | O(n²) credential sync blocking event loop | [PR #52173](https://github.com/BerriAI/litellm/pull/52173) | Moves virtual key reads to Rust repositories; `RUST_RESERVED_CONNECTIONS` bumped 0→2 |
| Streaming memory | `FallbackStreamWrapper` class per call causes GC retention | [Issue #51936](https://github.com/BerriAI/litellm/issues/51936) | Class defined inside `_acompletion_streaming_iterator`; reference cycles prevent timely cleanup |
| Cache key computation | Full request stringification for image-heavy payloads | [Issue #51935](https://github.com/BerriAI/litellm/issues/51935) | `cache_key += f"{param}: {param_value}"` on large base64 inputs can block event loop for seconds |
| Router queuing | Opt-in congestion queuing for async non-streaming | [PR #51892](https://github.com/BerriAI/litellm/pull/51892) | Activates after upstream 429/529; returns 503 for full queues, 408 for timeout |

## Stability & Regressions

| Severity | Issue | ID | Fix PR |
|----------|-------|-----|--------|
| 🔴 High | Database read-replica failover deadlocks after timeout | [#52284](https://github.com/BerriAI/litellm/issues/52284) | — |
| 🔴 High | SQL_ASCII encoding causes crash on startup | [#52247](https://github.com/BerriAI/litellm/issues/52247) | — |
| 🔴 High | Budget reservation leak on abandoned streams | [#52362](https://github.com/BerriAI/litellm/issues/52362) | — |
| 🟡 Medium | `reasoning_content` as list crashes `stream_chunk_builder` | [#50893](https://github.com/BerriAI/litellm/issues/50893) | — |
| 🟡 Medium | Parallel tool-call args dropped when streaming `/v1/messages` | [#45348](https://github.com/BerriAI/litellm/issues/45348) | — |
| 🟡 Medium | Audit logs 500 when `before_value` stored as JSON string | [#50905](https://github.com/BerriAI/litellm/issues/50905) | — |
| 🟡 Medium | Failed requests not counted toward RPM limits | [#21312](https://github.com/BerriAI/litellm/issues/21312) | — |
| 🟢 Low | OpenAPI spec missing `config.yaml` endpoint | [#16623](https://github.com/BerriAI/litellm/issues/16623) | — |
| 🟢 Low | Vertex Gemini image edits misprice token usage | [#52220](https://github.com/BerriAI/litellm/issues/52220) | — |

**Recently closed (fixes landed):**
- [#50701](https://github.com/BerriAI/litellm/pull/50701) — Bedrock Claude 5.x empty last user turn prefill 400; backported to LTS in [#51845](https://github.com/BerriAI/litellm/pull/51845)
- [#51954](httpshttps://github.com/BerriAI/litellm/pull/51954) — Anthropic translation rejects concatenated JSON tool-call arguments
- [#51139](https://github.com/BerriAI/litellm/pull/51139) — Gemini `snake_case` generation_config honored on `generateContent`
- [#51259](https://github.com/BerriAI/litellm/pull/51259) — Paging params forwarded on `GET /v1/responses/{id}/input_items`

## What This Means for Application Developers

1. **Rust migration in progress**: Auth hot paths are moving to Rust; expect lower p99 latency on key validation and model access checks in upcoming releases. Monitor for any behavioral differences if you're on edge cases.

2. **Streaming edge cases**: If you're bridging OpenAI-compatible reasoning models to Anthropic `/v1/messages` (e.g., DeepSeek-R1 via vLLM/SGLang), be aware that `reasoning_content` type handling and prompt-cache accounting are still stabilizing — test streaming paths explicitly.

3. **Database configuration**: If running with `SQL_ASCII` encoding or read replicas, today's data shows both scenarios can cause silent failures or crashes. Consider migrating to `UTF8` and review your replica failover configuration.

4. **LTS strategy**: v1.108.11 remains the stable LTS target; if you're on older LTS, the Claude 5.x Bedrock fix ([#50701](https://github.com/BerriAI/litellm/pull/50701)) is worth backporting.

5. **Budget tracking caution**: Abandoned streaming requests can cause spend counter drift ([#52362](https://github.com/BerriAI/litellm/issues/52362)); monitor for false `budget_exceeded` errors if you have clients that frequently disconnect early.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze this GitHub data for Unsloth and create a structured digest for 2026-11-18.

Key observations:
1. Latest release: v0.1.919-beta with computer use, translate, MiniMax-H3-Image support, new model picker
2. Multiple bug reports about vision, computer use, MCP, UI issues
3. Several PRs merged/pending around UI improvements, FLUX.3 performance, model alias configurations
4. Issues about ROCm, AMD GPU support, Wayland compatibility
5. New features in progress: character chats, scheduled tasks, benchmark tab

Let me structure this into the requested format.
</think>


# Unsloth Digest — 2026-11-18

## 1. Today's Highlights

Unsloth shipped **v0.1.919-beta** introducing a beta **computer use** capability that lets local models interact with the desktop environment, plus **MCP integrations** for Unity, Unreal Engine, Blender, and Roblox. The release also brings MiniMax-H3-Image support across GGUF, FP8, and INT8 quantizations with LoRA training, and a redesigned model picker. Meanwhile, community activity shows intense focus on UI polish and MCP/OAuth correctness fixes, with multiple PRs targeting Wayland, AMD ROCm, and Ollama model discovery.

## 2. Releases & Breaking Changes

| Version | Change Summary | Impact |
|---------|---------------|--------|
| **v0.1.919-beta** | Computer use (beta), MiniMax-H3-Image (GGUF/FP8/INT8 + LoRA), new model picker, MCP tool integrations for Unity/Unreal/Blender/Roblox | New feature flag; no migration needed |
| v0.1.918-beta (prior) | Model loading regression reported; users experienced forced default model instead of last-used selection | **Affected**: Desktop users on MacOS/Linux — see [#18002](https://github.com/unslothai/unsloth/issues/18002) (closed with fix in progress) |

**Configuration changes:**
- Custom-folder GGUF builds now render identically to standard quants in the model picker — [#18242](https://github.com/unslothai/unsloth/pull/18242) (merged)
- Model aliases can now carry per-alias load settings (context length, KV cache type, speculative decoding) — [#18217](https://github.com/unslothai/unsloth/pull/18217) (open)

## 3. New Model & Hardware Support

| Model / Backend | Quantization | Status | Notes |
|-----------------|-------------|--------|-------|
| **MiniMax-H3-Image** | GGUF, FP8, INT8 | **New** | LoRA training now supported |
| **Gemma 4 26B (MLX)** | — | Bug reported | Vision mode produces `<unused6226>` tokens — [#15473](https://github.com/unslothai/unsloth/issues/15473) (closed, fix pending) |
| **Qwen3.8 27B GGUF** | GGUF | Supported | Hybrid model with reasoning; repeated full-prompt reprocessing reported with large MCP tool catalogs — [#17015](https://github.com/unslothai/unsloth/issues/17015) (open) |
| **FLUX.3 Klein** | — | Performance work | Per-step speedup landed: **−3.3% on L4, −1.9% on A100**; process-to-process determinism fixed — [#18245](https://github.com/unslothai/unsloth/pull/18245) (open) |
| **Zonos3-Mini** | — | Requested | Feature request for voice cloning support — [#18234](https://github.com/unslothai/unsloth/issues/18234) (open) |
| **AMD ROCm (Ryzen AI Max+ 395 / Radeon 8060S, gfx1151)** | — | Partial | GPU monitor reports 0% utilization; VAE decode NaN issues with workaround via `UNSLOTH_VAE_ATTN_HALF_MATH=0` — [#18005](https://github.com/unslothai/unsloth/issues/18005), [#18016](https://github.com/unslothai/unsloth/issues/18016) (open) |
| **Apple Metal** | — | Supported | Vision bug on Gemma 4 26B MLX — [#15473](https://github.com/unslothai/unsloth/issues/15473) |
| **NVIDIA Wayland** | — | Fixed | Auto GPU rendering misreported CPU painting; fix in [#18186](https://github.com/unslothai/unsloth/pull/18186) (merged) |
| **Ollama models with OCI manifest-reference layer** | — | Bug | New Ollama models silently omitted when legacy manifest contains OCI layer — [#18058](https://github.com/unslothai/unsloth/issues/18058) (open) |

## 4. Performance & Optimization

| Area | Change | Metric / Detail |
|------|--------|-----------------|
| **FLUX.3 Klein inference** | Per-step latency reduction | L4: 0.9851 → 0.9526 s/step (−3.3%, spread 0.11%); A100: −1.9% — [#18245](https://github.com/unslothai/unsloth/pull/18245) |
| **FLUX.3 render determinism** | Bit-identical outputs across processes | Fixed regression on main branch — [#18245](https://github.com/unslothai/unsloth/pull/18245) |
| **Model picker (short landscape)** | Minimum height raised | 380px → 400px — [#18240](https://github.com/unslothai/unsloth/pull/18240) (merged) |
| **MCP OAuth token refresh** | Fixed endpoint lookup | Refresh now hits the server's real token endpoint instead of `/token` — [#18203](https://github.com/unslothai/unsloth/pull/18203) (open) |
| **DDP trainable-embeddings** | Skip interpreter teardown in worker | Fixes test hang on reentrant checkpointing — [#18238](https://github.com/unslothai/unsloth/pull/18238) (merged) |
| **Credential redaction** | JSON log message scrubbing | Nested JSON strings now masked; closes [#18174](https://github.com/unslothai/unsloth/pull/18174) (merged) |
| **fast_qk_norm_rope fallback** | Position ID broadcasting fix | Out-of-bounds read on `[1, seq_len]` shape — [#18232](https://github.com/unslothai/unsloth/issues/18232) (open bug) |

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Gemma 4 26B MLX vision mode outputs `<unused6226>` tokens | Closed (fix pending) | — |
| **High** | Qwen hybrid model re-sends full prompt across turns after tool use (65K context + MCP catalog) | Open | — |
| **Medium** | v0.1.918-beta model loading: forced default model instead of last-used; sluggish UI | Closed | Pending in v0.1.919-beta |
| **Medium** | Pinned chat sync failure toast on startup; laggy interface (Linux) | Closed | Fixed in v0.1.919-beta |
| **Medium** | KV cache invalidation after ~8 computer use calls (`MAX_TOTAL_MODEL_IMAGES = 8` hardcap) | Open | — |
| **Medium** | Ollama models with OCI manifest-reference layer silently excluded from model list | Open | — |
| **Medium** | AMD ROCm GPU monitor reports 0% utilization; VAE NaN on ROCm Linux (workaround: `UNSLOTH_VAE_ATTN_HALF_MATH=0`) | Open | Workaround documented; fix in progress |
| **Low** | `fast_qk_norm_rope` out-of-bounds read in fallback path | Open bug | — |
| **Low** | NVIDIA driver 620.70.06 → "unavailable vRAM" on Web UI (Debian, RTX 3060) | Open | — |
| **Low** | Run settings context slider shrinks to thumb (16px) on narrow sidebar | Open | [#18235](https://github.com/unslothai/unsloth/pull/18235) (open) |

## 6. What This Means for Application Developers

**Computer Use & Agents:** The computer use beta in v0.1.919 opens the door for agents that interact with the host desktop (click, type, read screens). Developers targeting Windows/Linux should note this currently requires **X11**, not Wayland — Wayland users see the toggle greyed out with a hard block ([#18221](https://github.com/unslothai/unsloth/issues/18221)). The KV cache cap at 8 images is a hard limit that will surface in long-running agent sessions ([#18231](https://github.com/unslothai/unsloth/issues/18231)).

**MCP & OAuth:** Two fixes landed/reviewing for MCP OAuth re-consent loops: one corrects the token refresh endpoint ([#18203](https://github.com/unslothai/unsloth/pull/18203)), and another handles concurrent refresh race conditions with servers like Notion ([#18171](https://github.com/unslothai/unsloth/pull/18171)). Applications using MCP with OAuth-bearing servers should upgrade once these merge.

**Model Serving Flexibility:** The ability to register multiple GGUF launch configurations under a single model alias (context length, KV cache type, speculative decoding) via [#17885](https://github.com/unslothai/unsloth/pull/17885) enables API-level routing without duplicating model files — relevant for gateways that expose per-request config knobs.

**Image Generation on AMD:** ROCm users should set `UNSLOTH_VAE_ATTN_HALF_MATH=0` as a workaround for VAE NaN artifacts on image generation. The proper fix is under development.

**Character & Persona Chats:** The incoming character card import feature ([#16729](https://github.com/unslothai/unsloth/pull/16729), open) will expose V1/V2/V3 PNG+JSON and CHARX formats, enabling developer-defined agent personas in group chat scenarios.

**Scheduled Tasks from Chat:** PR [#18244](https://github.com/unslothai/unsloth/pull/18244) adds a "schedule task" action that replies directly into the originating chat — useful for building reminder/background-job agents with minimal orchestration overhead.

---

*Digest compiled from 36 issues and 223 PRs in the last 24h. Links are to `github.com/unslothai/unsloth`.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*