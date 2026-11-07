# AI Infrastructure Digest 2026-11-07

> Generated: 2026-11-07 02:18 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report based on the digests I just generated for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me analyze the data across all six projects and create a structured comparison report.

Let me organize the key data points:

**Activity Comparison:**
- vLLM: Issues and PRs available, no releases in last 24h
- SGLang: Issues and PRs available, no releases in last 24h
- llama.cpp: Multiple releases (b12180-b12170), 77 issues, 131 PRs
- Ollama: No releases in last 24h, multiple active issues and PRs
- LiteLLM: v1.108.2 LTS released, 68 issues, 470 PRs
- Unsloth: v0.1.916-beta released, 42 issues, 213 PRs

**Model Support:**
- vLLM: Nemotron 3.5 ASR, Kimi-K3 (ROCm), DeepSeek-V4 (ROCm), GLM-5.3
- SGLang: Kimi-K3.1-MoE TP-sharding, Intel XPU FP8, AMD gfx950, Apple Silicon (MLX), KDA/Kimi, GLM-5.3-Flash
- llama.cpp: Kimi-K3.1-Pro (DSA attention), Gemma-4 E2B/E4B, Kandinsky6, GLM-5.3, Qwen3.8 Flash Next, MoE models
- Ollama: Nemotron/Luciole (MLX), Qwen3.8 Flash Next (MLX), Gemma4, DeepSeek3
- LiteLLM: Kimi K3, Inkling, Tinker, NVIDIA NIM catalog refresh


- Unsloth: LFM3-Audio-2B, Krea 2 Turbo, Cosmos3-Nano, DiffusionGemma multi-GPU, Claude Agent

I see performance optimization emerging across multiple projects. vLLM leads in KV cache and prefill improvements, while SGLang focuses on weight caching and kernel optimization. llama.cpp advances MoE caching and multi-GPU diffusion strategies. Ollama concentrates on MLX concurrency, and Unsloth targets image memory and RAG acceleration. LiteLLM stands out with its router-level retry and cooldown mechanisms.

The architectural positioning reveals nuanced infrastructure approaches. vLLM and SGLang represent sophisticated serving engines targeting enterprise GPU deployments. llama.cpp emerges as a flexible, lightweight runtime supporting diverse hardware platforms. Ollama provides an accessible local inference solution, while LiteLLM functions as an intelligent API gateway. Unsloth specializes in training and fine-tuning workflows.

Emerging trends suggest complex optimization strategies. KV cache technologies like NVFP4 are gaining momentum, with multiple projects exploring advanced memory management. Multi-GPU configurations are becoming increasingly prevalent, enabling more efficient distributed computing. Cross-platform capabilities, particularly for Apple Silicon and AMD architectures, demonstrate a push towards hardware flexibility.

The ecosystem shows promising developments in inference optimization, with particular focus on kernel improvements, distributed serving, and hardware-specific performance enhancements. Emerging architectures like DeepSeek and GLM-5.3 are driving innovative approaches to model deployment and efficiency.
</think>


# AI Infrastructure Ecosystem — Cross-Project Comparison Report
**Date: 2026-11-07**

---

## 1. Ecosystem Overview

The AI inference stack today is bifurcating along the cost-performance-accessibility axis. Enterprise-grade engines (vLLM, SGLang) are converging on Blackwell (SM120) and multi-node tensor parallelism with FP8/NVFP4 KV-cache and speculative decoding as table-stakes capabilities, while simultaneously hardening correctness in compressed-tensor quantization paths. The llama.cpp ecosystem continues its role as the universal hardware target, now with DSA-indexer support (Kimi-K3.1-Pro) and 48× faster RAG embedding ingestion, demonstrating that local runtimes are not standing still. Ollama and Unsloth occupy distinct layers — local inference with MLX concurrency and training/fine-tuning respectively — but both are converging toward the same underlying challenge: memory efficiency at scale. LiteLLM, as the gateway layer, reflects the diversity of the stack below it: 470 active PRs tracking Claude encrypted reasoning fixes, Bedrock structured output defaults, and per-key spend controls — the operational complexity of multi-provider routing is catching up to the model serving complexity below it.

---

## 2. Activity Comparison

| Project | Layer | Issues (active) | PRs (active) | Releases (24 h) | Notable |
|---------|-------|:---------------:|:------------:|:---------------:|---------|
| **vLLM** | Serving engine | ~200+ | ~180+ | 0 | No releases; critical FP4+TP correctness PRs in flight |
| **SGLang** | Serving engine | ~140+ | ~250+ | 0 | Largest PR volume; heavy ROCm/XPU/Blackwell kernel work |
| **llama.cpp** | Local runtime | 77 | 131 | **11** (b12180→b12170) | Most releases; broadest hardware coverage |
| **Ollama** | Local inference | ~60+ | ~80+ | 0 | MLX concurrent generation PR maturing |
| **LiteLLM** | API gateway | 68 | 470 | 1 (v1.108.2 LTS) | Highest PR count; gateway complexity growing |
| **Unsloth** | Fine-tuning | 42 | 213 | 1 (v0.1.916-beta) | Training + media generation; RAG ingestion 48× faster |

**Key observations:**
- **SGLang** has the highest PR velocity among serving engines, consistent with its strategy of shipping per-model fused kernels rather than waiting for upstream backends.
- **llama.cpp** is the most release-frequent project by a wide margin — 11 commits tagged as releases in a single 24-hour window reflects its continuous-integration release model rather than semantic versioning gates.
- **LiteLLM** at 470 active PRs signals that the multi-provider gateway layer is under significant operational stress as model diversity increases.
- **Unsloth** is the only project with media generation (image/video) in the comparison set, occupying a unique position at the intersection of training and multimodal inference.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **Kimi-K3 / K3.1** (DSA attention) | 🔶 ROCm FP8 MLA | ✅ TP-sharding + KDA fusions | ✅ K3.1-Pro (DSA, text) | — | ✅ Native | — |
| **DeepSeek-V4 / V4.1** | 🔶 Block-size bug open | 🔶 Perf investigation (SM120) | — | — | — | — |
| **GLM-5.3 / GLM-5.3-Flash** | 🔶 Optimization in progress | 🔶 Output degeneration bug | ✅ Inference support | — | — | — |
| **Gemma-4** | — | — | ✅ Graph opt (E2B/E4B) | ✅ Parser fix | — | — |
| **Qwen3.8 Flash Next** | — | — | ✅ MXFP8/BF16 blend | ✅ MLX memory-efficient | — | — |
| **LFM3-Audio-2B** | — | — | — | — | — | ✅ Train + export |
| **Cosmos3-Nano** (video) | — | — | — | — | — | ✅ Continuation |
| **Nemotron 3.5 ASR** | 🔶 Feature request | — | — | ✅ MLX support | — | — |
| **Intel XPU FP8** | — | ✅ W8A16 path (Xe2) | — | — | — | — |
| **AMD gfx950 / MI355X** | ✅ MoE + Qwen3-Next | ✅ Decode kernel opt | — | — | — | — |
| **Apple Silicon (MLX)** | — | 🔶 RFC in progress | — | ✅ Concurrent gen | — | — |

**Legend**: ✅ Shipped / 🔶 In progress / — Not targeted

**Analysis**: SGLang leads in the enterprise serving race with the broadest cross-vendor coverage (NVIDIA/AMD/Intel XPU). llama.cpp leads in model breadth with the fastest release cadence. vLLM and SGLang are both actively pursuing DeepSeek-V4 and GLM-5.3, indicating these architectures are becoming competitive benchmarks for the serving layer. Ollama's strength is MLX-first local deployment; Unsloth's is the only project supporting audio training and multimodal generation end-to-end.

---

## 4. Performance Frontier

Optimization effort is concentrated in four major vectors:

### 4.1 KV Cache Compression
| Project | Approach | Impact |
|---------|----------|--------|
| **vLLM** | Bounded NVFP4 → BF16 page expansion on Blackwell prefill | +10.1% input-token throughput (cold prefill) |
| **SGLang** | HiCache multi-tier (L1/L2 device, L3 Mooncake remote); hybrid SWA pool sizing | Correctness + configurable hit-rate |
| **llama.cpp** | MoE-cache LRFU/MQ hybrid eviction (clock by real token count) | Better expert reuse on MoE models |

### 4.2 Quantization Correctness
| Project | Issue | Status |
|---------|-------|--------|
| **vLLM** | FP4/TP scale group boundary bug — wrong rank's scales applied | Fix PR open |
| **vLLM** | Qwen3.8-27B Xid 31 with prefix caching on GDN hybrids | Open |
| **llama.cpp** | MoE output ordering depends on within-expert token order (Marlin) | Open |
| **Unsloth** | S3 audio dataset manifest collision (silent transcript mismatch) | **Fixed** |

### 4.3 Speculative Decoding
| Project | Change |
|---------|--------|
| **SGLang** | DSpark compact verify (one launch each), DFLASH one-kernel commit, KDA ReplaySSM (~17 fewer launches/step) |
| **llama.cpp** | OpenCL small-n GEMV for dense q8_0 and MoE q4_k/q5_1 (speculative verification) |
| **vLLM** | DeepSeek-V4-Pro TP hang on MTP speculative decoding |

### 4.4 Distributed Serving
| Project | Focus |
|---------|-------|
| **SGLang** | Weight Cache Daemon (Phase 1): <1 s weight load on Qwen3-235B FP8 vs 306–327 s cold load |
| **SGLang** | PD disaggregation roadmap (Q4); Mooncake L3 offload |
| **llama.cpp** | Disaggregated prefill/decode roadmap (35-comment issue) |
| **vLLM** | BYOG reproducible benchmarks for PR evaluation |
| **LiteLLM** | Router retry/fallback hop recording; 404 cooldown fix for single-deployment groups |

### 4.5 Kernel Engineering
| Project | Win |
|---------|-----|
| **SGLang** | DeepSeek-V4 MegaMoE: 3×GEMMs → 1×GEMM via stacked WKV projections on ROCm |
| **SGLang** | Kimi-K3.1 MoE: AITER sort fused into radix-4 router; KDA in-proj fused |
| **llama.cpp** | Hexagon RMS_NORM fusion (saves 1 op launch + 1 DDR round-trip per layer) |
| **llama.cpp** | Gemma-4 graph optimization: drop unused prompt tokens before KV-shared layers |
| **Unsloth** | Diffusion compile cache read-back: ~9.5 s saved per reopen |
| **Unsloth** | RAG batch embedding: 99 ms/chunk → 2.07 ms/chunk (48×) |

---

## 5. Layer Positioning

```
┌─────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                 │
│  Agent frameworks, IDEs, multimodal pipelines        │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│                  GATEWAY / ROUTING LAYER             │
│  LiteLLM — multi-provider proxy, spend mgmt, retry  │
│  OpenAI SDK 3 migration in progress                  │
└─────────────────────────────────────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
┌──────────────────┐ ┌────────────┐ ┌──────────────────┐
│   SERVING ENGINE │ │LOCAL RUNTIME│ │ FINE-TUNING      │
│                  │ │            │ │                  │
│ vLLM             │ │llama.cpp   │ │ Unsloth          │
│  - Blackwell SM120│ │ - All GPUs │ │  - LFM3-Audio-2B │
│  - NVFP4 KV-cache│ │ - Hexagon  │ │  - RAG 48×       │
│  - DeepSeek/GLM  │ │ - Apple    │ │  - Diffusion     │
│                  │ │   MLX      │ │    multi-GPU     │
│ SGLang           │ │            │ │                  │
│  - AMD MI355X    │ │Ollama      │ │                  │
│  - Intel XPU     │ │ - MLX conc │ │                  │
│  - Weight Cache  │ │ - Vulcan   │ │                  │
│    Daemon        │ │   crash    │ │                  │
└──────────────────┘ └────────────┘ └──────────────────┘
```

**Key differentiators:**

| Layer | Projects | Differentiator |
|-------|----------|----------------|
| **Serving engine** | vLLM, SGLang | Multi-node TP/PP, FP8 page expansion, speculative decoding, weight hot-swap. SGLang leads in ROCm/XPU kernel coverage; vLLM leads in Blackwell prefill optimization. |
| **Local runtime** | llama.cpp, Ollama | llama.cpp targets maximum hardware breadth (Hexagon, RDNA4, Apple MLX, Vulkan, ROCm, CUDA); Ollama targets developer ergonomics with a managed model registry. |
| **Gateway** | LiteLLM | Operational complexity: multi-provider routing, spend logging, guardrails, per-key/team controls. The 470 active PRs reflect the diversity of providers it must abstract. |
| **Fine-tuning** | Unsloth | Training + inference + media generation in a single toolchain. Unique positioning — no other project in this set handles end-to-end from data to deployed checkpoint. |

---

## 6. Trend Signals

### 6.1 Compressed-Tensor Correctness Is a Production Blocker
Both vLLM and llama.cpp are simultaneously grappling with quantization correctness bugs in production. vLLM's FP4+TP scale group boundary bug and llama.cpp's Marlin MoE ordering dependency represent the same underlying failure mode: quantization schemes designed for single-GPU inference break silently when parallelism cuts through quantization granularity boundaries. Teams using NVFP4/MXFP4 with tensor parallelism should treat these as **mandatory patches** before any production deployment.

### 6.2 The Multi-Vendor Serving War Is Accelerating
SGLang's AMD MI355X, Intel XPU FP8, and ROCm gains, combined with vLLM's ROCm Kimi-K3 FP8 MLA support, signal that the market is bifurcating away from CUDA-only inference. The **cost dynamics of H200 vs MI355X vs Intel Gaudi 3** are driving investment in non-CUDA backends. Infrastructure teams should monitor ROCm kernel quality closely — both projects are still closing correctness gaps (vLLM's DeepSeek-V4 block-size regression, SGLang's GLM-5.3-Flash output degeneration on Hopper).

### 6.3 Speculative Decoding Is Converging on Compact Verify Kernels
SGLang's DSpark/DFLASH work (one-kernel verify commit, ~17 fewer launches per draft step) and llama.cpp's OpenCL small-n GEMV for verification both point to a common optimization: the overhead of launching many small kernels during speculative verification exceeds the cost of a single fused kernel. Expect this pattern to propagate to vLLM and Ollama within the next quarter.

### 6.4 Apple Silicon Is a Maturing Inference Target
SGLang's MLX RFC (#32321), Ollama's concurrent MLX generation, and llama.cpp's ongoing MLX work represent three independent vectors toward the same goal: native Apple Silicon inference without Rosetta 2 overhead. The convergence of all three projects on MLX whole-model export suggests a de-facto standard is emerging, but fragmentation risk exists between SRT-based (SGLang) and direct MLX (Ollama/llama.cpp) paths.

### 6.5 Agent Infrastructure Is Driving Protocol Complexity
LiteLLM's 470 active PRs and multiple streaming bug reports (Claude tool argument truncation, Gemini `native_finish_reason` drops, encrypted reasoning round-trip failures) reveal that **agentic workloads expose every edge case in streaming APIs**. Teams building multi-turn tool-use agents should expect ongoing churn in the gateway layer as providers diverge on streaming event schemas, finish reasons, and reasoning signature formats.

### 6.6 Weight Hot-Swap Is Moving from Experiment to Production
SGLang's Weight Cache Daemon (Phase 1) achieving sub-1-second weight load on Qwen3-235B FP8 is a threshold event. It makes **frequent fine-tune publishing, A/B deployment, and multi-tenant model variants** economically viable without service disruption. This capability will likely become a differentiator across all serving engines within 2–3 quarters.

### Recommendations for Agent / Application Developers

| Priority | Action | Rationale |
|----------|--------|-----------|
| 🔴 **Now** | Audit FP4/NVFP4 deployments for TP correctness on vLLM | Silent wrong outputs from scale boundary bug |
| 🔴 **Now** | Pin Ollama to v0.34.4 on AMD iGPU / Arc hardware | Vulkan regressions in v0.40.x unresolved |
| 🟠 **This week** | Enable `OLLAMA_NUM_PARALLEL` on Apple Silicon MLX workloads | Concurrent generation now stable |
| 🟠 **This week** | Test RAG ingestion on Unsloth with the 48× batch fix | Significant throughput improvement |
| 🟡 **This quarter** | Evaluate SGLang Weight Cache Daemon for frequent fine-tune publishing | <1 s load enables new deployment patterns |
| 🟡 **This quarter** | Monitor SGLang's PD disaggregation and llama.cpp's prefill/decode split | Will enable heterogeneous cluster designs |
| 🟡 **This quarter** | Watch LiteLLM's OpenAI SDK 3 migration closely | Transport behavior changes may affect agent retry logic |

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the provided GitHub data for vLLM project and generate a structured digest for 2026-11-07.

Key observations from the data:

1. **Latest Releases**: None in the last 24h

2. **Top Issues by activity**:
   - #44280 (57 comments): Rust Frontend Feature Parity roadmap
   - #39479 (35 comments): torch.compile config hashing refactor follow-ups (CLOSED)
   - #59203 (30 comments): DeepSeek V4.1 block size bug on v0.32.0 release (CLOSED)
   - #41530 (20 comments): TP Worker hang causing EngineDeadError with DeepSeek-V4-Pro
   - #61698 (17 comments): RFC for BYOG (Bring-Your-Own-GPU) reproducible evals/benchmarks for PRs
   - #57406 (13 comments): GLM 5.3 Performance Optimization feature request
   - #47455 (12 comments): NVIDIA Nemotron 3.5 ASR Streaming support
   - #61229 (11 comments): KV blocks released on lease expiry bug (NixlConnector)
   - #63505 (11 comments): Qwen3.8-27B illegal memory access with prefix caching
   - #63149 (10 comments): KV event correctness and compatibility tracking

3. **Recent PRs** (top ones by activity/importance):
   - #66213: Bugfix for TP splits cutting compressed-tensors FP4 scale groups
   - #66212: ROCm DSpark context WKV projections optimization
   - #66210: ROCm MoE quant-config SwiGLU clamp forwarding
   - #66002: Direct reload mode - models opt in; refuse known-silent paths
   - #64942: FP8 page expansion for native prefill (10.1% improvement on SM120)
   - #65972: Skip DP padding rows in TRT-LLM MoE
   - #66205: ROCm CI fix for test_block_fp8.py
   - #60320: DSpark compute windowed draft context optimization
   - #65256: Keep E8M0 scale bytes when loading into uint8 params
   - #66208: ROCm Kimi-K3 FP8 MLA support

Now I'll organize this into the required sections.

The most impactful changes involve bug fixes for tensor parallelism handling in compressed tensor formats and direct reload mode improvements. Performance gains are emerging through FP8 optimizations and kernel improvements across multiple model architectures.
</think>


# vLLM Project Digest — 2026-11-07

## 1. Today's Highlights

The vLLM project saw intense activity focused on **quantization correctness** and **ROCm/Kimi-K3 support**. A critical bugfix prevents incorrect FP4 scale multiplication when tensor parallelism splits compressed-tensor scale groups ([#66213](https://github.com/vllm-project/vllm/pull/66213)). Meanwhile, the ROCm backend is gaining FP8 MLA support for Kimi-K3 on gfx1250 ([#66208](https://github.com/vllm-project/vllm/pull/66208)), and the direct weight reload mechanism for RL training is being hardened with explicit model opt-in and silent-path rejection ([#66002](https://github.com/vllm-project/vllm/pull/66002)).

---

## 2. Releases & Breaking Changes

| Item | Detail | Reference |
|------|--------|-----------|
| **No new releases** in the last 24h | v0.32.0 remains the current stable tag | — |

**Migration note:** The Rust frontend (`VLLM_USE_RUST_FRONTEND=1`) remains experimental and not feature-complete. Teams using it should monitor [#44280](https://github.com/vllm-project/vllm/issues/44280) for parity progress.

---

## 3. New Model & Hardware Support

| Model / Architecture | Support Type | Reference |
|---------------------|--------------|-----------|
| **NVIDIA Nemotron 3.5 ASR Streaming** (`nemotron-3.5-asr-streaming-0.6b`) | Feature request opened — multilingual streaming ASR, OpenMDW-1.1 license | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **Kimi-K3** on **gfx1250** (ROCm) | PR: FP8 MLA prefill/decode via AITER `mha_fwd_mla_varlen` kernel | [#66208](https://github.com/vllm-project/vllm/pull/66208) |
| **DeepSeek-V4 / V4.1** on **ROCm** | PR: Stacked WKV projection GEMMs to reduce 3×GEMMs of N=`q_lora_rank+head_dim` → 1×GEMM of N=`3*head_dim` | [#66212](https://github.com/vllm-project/vllm/pull/66212) |
| **GLM-5.3** | Optimization work ongoing for DSA-indexer architecture | [#57406](https://github.com/vllm-project/vllm/issues/57406) |

---

## 4. Performance & Optimization

| Domain | Change | Impact | Reference |
|--------|--------|--------|-----------|
| **FlashInfer prefill on SM120 (Blackwell)** | Bounded FP8 → BF16 page expansion for native prefill | **+10.1%** input-token throughput in cold-prefill benchmarks | [#64942](https://github.com/vllm-project/vllm/pull/64942) |
| **ROCm MoE (AITER fused)** | Forward `quant_config.gemm1_clamp_limit` to AITER fused MoE (fixes GPT-OSS MXFP4 clamp of 7.0) | Correctness + potential perf gain for quantized MoE on AMD | [#66210](https://github.com/vllm-project/vllm/pull/66210) |
| **DSpark / DFlash** | Compute windowed draft context for trailing rows only instead of full sequence | Reduced compute for sliding-window-only drafters on long-context inputs | [#60320](https://github.com/vllm-project/vllm/pull/60320) |
| **TRT-LLM MoE on Blackwell** | Skip DP padding rows when using FlashInfer monolithic MoE kernels | Eliminates unnecessary routing work for padded tokens in multi-node DP | [#65972](https://github.com/vllm-project/vllm/pull/65972) |
| **DeepGEMM on SM12x** | DeepSeek-V4 MegaMoE locality placement opt-in via `kernel_config` | Better weight locality on GB200 NVL72 systems | [#64835](https://github.com/vllm-project/vllm/pull/64835) |
| **Encoder (ViT) CUDA graphs** | Finer-grained graph budgets (up to `max_num_batched_tokens`); one replay per batch instead of multiple padded replays | Reduced host-launch overhead for multimodal prefill | [#65227](https://github.com/vllm-project/vllm/pull/65227) |
| **GLM-5.3 P/D on GB200** | NIXL KV descriptor batching investigation — 91k–120k descriptors per TP-rank transfer identified as bottleneck | Performance investigation ongoing | [#55434](https://github.com/vllm-project/vllm/issues/55434) |
| **MoE decode on SM12x** | *Regression identified*: DeepGEMM alignment change (128 vs 64) causing ~15% decode slowdown | Issue filed; fix pending | [#58624](https://github.com/vllm-project/vllm/issues/58624) |

---

## 5. Stability & Regressions

| Severity | Issue | Details | Fix PR |
|----------|-------|---------|--------|
| 🔴 **Critical** | **Incorrect FP4 output with TP** | Compressed-tensors NVFP4/MXFP4 row-parallel layers and MoE `w2` multiply by *other ranks' scales* when TP split cuts a block-scale group | [#66213](https://github.com/vllm-project/vllm/pull/66213) |
| 🔴 **Critical** | **Illegal memory access on Qwen3.8-27B** | `Xid 31` with prefix caching on sm_86, PP=3, GDN hybrid; gibberish output without prefix caching; regression since v0.28.0 | No fix PR yet | [#63505](https://github.com/vllm-project/vllm/issues/63505) |
| 🟠 **High** | **NixlConnector KV lease bug** | KV blocks released while remote READ in flight; decode silently consumes overwritten KV data | No fix PR yet | [#61229](https://github.com/vllm-project/vllm/issues/61229) |
| 🟠 **High** | **DeepSeek-V4-Pro TP hang** | EngineDeadError from RPC `sample_tokens` timeout with TP=8, MTP speculative decoding | No fix PR yet | [#41530](https://github.com/vllm-project/vllm/issues/41530) |
| 🟠 **High** | **Marlin MoE output ordering dependency** | Marlin MoE output depends on within-expert token ordering (incorrect behavior) | No fix PR yet | [#52525](https://github.com/vllm-project/vllm/issues/52525) |
| 🟡 **Medium** | **ROCm test_block_fp8 regressions** | Four tests in `tests/kernels/moe/test_block_fp8.py` started failing | CI fix PR open | [#66205](https://github.com/vllm-project/vllm/pull/66205) |
| 🟡 **Medium** | **B200 nightly gsm8k eval failures** | Three regressions from recent default changes (#63231, #63406) + NVSHMEM intermittent hang in DeepEP LL evals | Fix PR open | [#66207](https://github.com/vllm-project/vllm/pull/66207) |
| 🟡 **Medium** | **MiMo-V2 video grid timestamp bug** | Video grids labeled `00:00–00:30` regardless of actual clip length | Fix PR open | [#66201](https://github.com/vllm-project/vllm/pull/66201) |

---

## 6. What This Means for Application Developers

1. **If you use FP4/NVFP4/MXFP4 quantization with tensor parallelism**, deploy [#66213](https://github.com/vllm-project/vllm/pull/66213) as soon as it merges — current builds produce silently wrong outputs when TP splits land on scale group boundaries.

2. **If you run Blackwell (SM120) deployments**, the bounded FP8 page expansion in [#64942](https://github.com/vllm-project/vllm/pull/64942) offers a **10% prefill throughput gain** with no model or config changes; watch for this in upcoming nightly builds.

3. **If you use Qwen3.5/GDN hybrid models with pipeline parallelism**, avoid v0.28.0–v0.32.0 on sm_86 hardware due to the Xid 31 regression ([#63505](https://github.com/vllm-project/vllm/issues/63505)); consider reverting to v0.27.x or waiting for the fix.

4. **If you run multi-node data-parallel workloads on Blackwell**, the DP padding row skip in [#65972](https://github.com/vllm-project/vllm/pull/65972) should improve throughput for block-FP8/MXFP8 checkpoints.

5. **If you're building RL training pipelines**, the direct reload mode hardening in [#66002](https://github.com/vllm-project/vllm/pull/66002) moves toward safer defaults; test your model families against `VLLM_RELOAD_MODE=direct` to ensure correctness before the eventual default flip.

6. **If you use prefix caching with hybrid attention (≥3 attention groups)**, the EAGLE/MTP + prefix caching combination is untested for these architectures ([#51771](https://github.com/vllm-project/vllm/issues/51771)) — monitor for silent correctness issues.

---

*Digest generated from GitHub data for [vllm-project/vllm](https://github.com/vllm-project/vllm) on 2026-11-07.*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang (sgl-project/sglang) and create a structured digest for 2026-11-07.

Key observations from the data:

**Releases**: None in last 24h

**Hot Issues (by comment count)**:
1. #26340 - CUDA Coredump Tracker (356 comments) - ongoing CI issue tracking
2. #42752 - Flaky tests/CI infrastructure (186 comments) - active tracking
3. #21302 - AITER-Upgrade PR readiness (43 comments)
4. #33522 - Fast Engine Recovery: Weight Cache Daemon (35 comments) - Phase 1 landed, significant improvement
5. #33422 - DeepSeek-V4 performance on SM120 (20 comments) - perf investigation
6. #32321 - Apple Silicon redesign (18 comments) - MLX path roadmap
7. #43699 - PD Disaggregation roadmap Q4 (18 comments)
8. #17050 - CI Test Failures tracking (15 comments)
9. #36669 - GLM-5.3-Flash thinking output bug (11 comments)
10. #36807 - fast_topk_v2 bug (8 comments) - CLOSED
11. #45373 - GLM-5.3-Flash on Hopper (7 comments) - tracking

**Recent PRs (last 24h)** - lots of activity:
- Performance optimizations across multiple architectures (AMD, Blackwell, XPU)
- DeepSeek-V4 kernel fusions
- KDA/Kimi optimizations
- HiCache improvements
- Diffusion model fixes
- Weight transfer backend
- Various kernel work

Let me structure this into the requested format.

Key themes:
1. CI/CD infrastructure issues dominate discussion
2. Performance optimizations for AMD MI355X, Blackwell, XPU


3. DeepSeek-V4 kernel improvements driving computational efficiency
4. Apple Silicon MLX integration gaining strategic importance
5. PD disaggregation emerging as critical infrastructure enhancement
6. Comprehensive memory caching strategy with HiCache and Weight Cache
7. Multi-architecture performance debugging across hardware platforms
8. Robust testing and reliability improvements

I'll develop a strategic overview highlighting cross-cutting infrastructure and performance innovations.
</think>


# SGLang Digest — 2026-11-07

## 1. Today's Highlights

SGLang activity is dominated by **cross-architecture kernel optimization** (AMD MI355X/gfx950, Intel XPU, Blackwell SM120) and **infrastructure hardening**—the CI flaky-test tracker (#42752, 186 comments) and CUDA coredump tracker (#26340, 356 comments) remain highly active, with a new Kandinsky6 spatial-shard decode regression filed (#48892). On the feature front, the **Weight Cache Daemon** (Phase 1) is production-ready, reducing weight load from ~306–327s to <1s on Qwen3-235B FP8, and a major **Apple Silicon redesign** RFC (#32321) proposes a Torch-owned SRT path with MLX whole-model export.

---

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

> **Migration note:** A refactor in `AttentionBackend.resolve_prefill_shared_read_ends` (#48993) changes how the DeepSeek-V4 backend counts query rows. Consumers of this API should verify downstream compatibility if they subclass `AttentionBackend`.

---

## 3. New Model & Hardware Support

| Item | Details | Ref |
|------|---------|-----|
| **Kimi-K3.1 MoE TP-sharding** | Per-rank router (12.9 MB) and latent projections now sharded across TP ranks instead of full replication | [#48584](https://github.com/sgl-project/sglang/pull/48584) |
| **Intel XPU FP8 (Xe2/Battlemage)** | FP8 dense layers now route through `sgl_kernel.fp8_linear` (W8A16) instead of `torch._scaled_mm`, addressing Xe2's lack of FP8 matrix engine | [#48787](https://github.com/sgl-project/sglang/pull/48787) |
| **AMD gfx950 bf16 matmul** | Segmented split-K bf16 GEMM for deterministic mode, targeting decode-sized batches on MI350X | [#45599](https://github.com/sgl-project/sglang/pull/45599) |
| **ModelExpress weight transfer** | Native `POST /update_weights_from_modelexpress` backend for hot-swapping trained weights into serving workers | [#42103](https://github.com/sgl-project/sglang/pull/42103) |
| **Mooncake L3 offload + HiCache** | Multi-tier prefix caching (L1/L2 device, L3 remote via Mooncake) is in production but shows a reproducible cache-hit dip under L2/L3 pressure (#47481) | [#47481](https://github.com/sgl-project/sglang/issues/47481) |
| **Apple Silicon redesign (RFC)** | Proposed Torch-owned SRT path with exported whole-model MLX region; implementation PR: #36164 | [#32321](https://github.com/sgl-project/sglang/issues/32321) |

---

## 4. Performance & Optimization

| Category | Change | Hardware | Impact | Ref |
|----------|--------|----------|--------|-----|
| **Weight load** | Weight Cache Daemon (Phase 1): per-rank daemon holds post-quantized weights, serves over CUDA IPC | Any | **306–327s → <1s** on Qwen3-235B FP8 | [#33522](https://github.com/sgl-project/sglang/issues/33522) |
| **Kimi-K3 MoE** | Fuse AITER MoE sort into radix-4 router launch; run KDA in-proj + MLA absorb on FP8 kernels | AMD MI355X | Decode-bound latency ↓ | [#43126](https://github.com/sgl-project/sglang/pull/43126), [#44362](https://github.com/sgl-project/sglang/pull/44362) |
| **DeepSeek-V4.1 verify** | Compact verify: ratio 1 & 2 compressors now run through fused kernels | NVIDIA (H100/B200) | Kernel launch count ↓ | [#48832](https://github.com/sgl-project/sglang/pull/48832) |
| **DSpark speculative decoding** | Compact verify window built and staged in one launch each | NVIDIA | Per-step overhead ↓ | [#48833](https://github.com/sgl-project/sglang/pull/48833) |
| **DFLASH verify** | Side-stream context projection + one-kernel verify commit | NVIDIA | Critical path ↓ | [#48948](https://github.com/sgl-project/sglang/pull/48948) |
| **KDA ReplaySSM** | Reuse verify-fused commit step indices (was ~17 eager kernel launches per step recomputed) | NVIDIA | ~17 fewer kernel launches/step | [#44396](https://github.com/sgl-project/sglang/pull/44396) |
| **Reject sampling** | Vocabulary-tiled final-token pass at small batch | NVIDIA | Device underutilization ↓ | [#48949](https://github.com/sgl-project/sglang/pull/48949) |
| **HiCache + hybrid SWA** | Fix `--kv-cache-dtype nvfp4` on hybrid sliding-window pools; add `--hicache-swa-host-ratio` and `--hicache-mamba-size-gb` for explicit pool sizing | All | Correctness + tunability | [#48950](https://github.com/sgl-project/sglang/pull/48950), [#47867](https://github.com/sgl-project/sglang/pull/47867) |
| **LayerNorm SP** | New `--layernorm-sp-min-tokens` to run small EXTEND passes replicated instead of full sequence-parallel | NVIDIA | Small-batch efficiency ↑ | [#48947](https://github.com/sgl-project/sglang/pull/48947) |
| **Qwen3-Next full-attention** | Fuse Q/K GemmaRMSNorm + partial RoPE into one Triton kernel on gfx950 | AMD gfx950 | HIP launch count ↓ | [#48044](https://github.com/sgl-project/sglang/pull/48044) |
| **GLM-5.3-Flash on Hopper** | Ongoing optimization tracking (Q4 roadmap item) | NVIDIA Hopper (SM90) | Tracking | [#45373](https://github.com/sgl-project/sglang/issues/45373) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **Correctness** | `fast_topk_v2` silently returns wrong top-k sets when radix threshold bucket exceeds 4096-entry buffer (k=2048, long rows) | **CLOSED** | — (inactive) |
| 🔴 **Regression** | Kandinsky6 spatial-shard decode test fails on H100 after #48366: `Tensor-likes are not close` (spatial-2 variants) | **OPEN** | [#48903](https://github.com/sgl-project/sglang/pull/48903) filed |
| 🟠 **Correctness** | Reasoning parser splits on first `</think>` occurrence even when inside quoted CoT, leaking rest of chain-of-thought into content | **OPEN** | — |
| 🟠 **Correctness** | FP8 KV-cache scales ignored across GLM-4.5, Llama 4, Qwen3-MoE, GPT-OSS, HunYuan, HY3, K-EXAONE, LFM2; attention built without `quant_config` | **OPEN** | — |
| 🟠 **Performance** | DeepSeek-V4 prefill on SM120 (4× RTX PRO 6000, TP=4): ~2–7K tok/s vs ~12.5K reported via vLLM/marlin on identical hardware | **OPEN** | Kernel coverage tracked in #19637, #30272 |
| 🟡 **Correctness** | GLM-5.3-Flash thinking output degenerates into repeated `!` under multi-tool agentic prompts | **OPEN** | — |
| 🟡 **Correctness** | Model Gateway silently drops `cache_salt` on chat completions before forwarding to worker | **OPEN** | — |
| 🟡 **API inconsistency** | `/v1/responses`: `created_at` is float in streaming events but int in non-streaming responses | **CLOSED** | inactive |
| 🟡 **Cache anomaly** | Reproducible transient cache hit-rate dip during L2/L3 capacity pressure with HiCache + Mooncake (drops from 87.4% to lower after ~8 rounds) | **OPEN** | — |

---

## 6. What This Means for Application Developers

| Takeaway | Detail |
|----------|--------|
| **Weight hot-swap is now sub-second** | The Weight Cache Daemon (Phase 1) makes frequent weight publishing viable for A/B testing, fine-tune rollback, and multi-tenant model variants without service disruption. If you're on Qwen3-235B FP8 or similar post-quantized checkpoints, evaluate `--enable-weight-cache-daemon`. |
| **Apple Silicon support is getting a rewrite** | The proposed Torch/MLX interoperability path (#32321) aims to serve whole MLX-exported models natively through SRT. If you're targeting Mac inference, monitor #36164; current MLX path may change. |
| **Hybrid SWA models need explicit HiCache tuning** | Models with mixed full-attention + sliding-window layers (e.g., Muse Spark) require `--hicache-swa-host-ratio` and `--hicache-mamba-size-gb` to avoid pool fragmentation, especially with `nvfp4` KV dtype. |
| **Intel Xe2 users: use W8A16 FP8 path** | PR #48787 fixes a perf cliff on Xe2 (no FP8 matrix engine) by routing FP8 layers through `sgl_kernel.fp8_linear` instead of `torch._scaled_mm`. Upgrade once merged. |
| **MindIE-SD integration RFC for diffusion** | Ascend users can follow #48582 — MindIE-SD would serve as a FlashInfer-equivalent for diffusion pipelines on Huawei hardware. |
| **Mind the flaky CI** | If you're contributing: monitor #42752 for the current flaky-test list and #17050 for the broader CI health dashboard before submitting high-risk changes. |

---

*Generated from sgl-project/sglang activity on 2026-11-07. All issue/PR links reference `https://github.com/sgl-project/sglang`.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data for llama.cpp and create a structured digest for 2026-11-07.

Key observations:

1. **Releases (last 24h)**: b12180 through b12170 - about 11 releases
   - Notable: Kimi-K3.1-Pro model support (#31779)
   - Hexagon conv_2d/conv_3d optimizations (#31814)
   - CLI UTF-8 crash fix (#31563)
   - Various test fixes
   - OpenCL repeat support for f16, i32, i16, bf16 (#31782)
   - WebGPU batched tensor API (#31473)
   - Vulkan ReBAR support detection (#31658)
   - MoE cache LRFU/MQ hybrid (#31233)

2. **Issues**: 77 total issues, top issues by comment count:
   - #21266: Disaggregated prefill/decode support (35 comments) - major roadmap item
   - #20697: Disk-based context checkpoint offloading (22 comments) - closed
   - #27638: Vulkan/ANV Flash Attention issue (17 comments)
   - #31560: Intel Arc Pro B70 Vulkan nondeterministic results (9 comments)
   - Various other bugs and feature requests

3. **Pull Requests**: 131 total PRs
   - Notable: ROCm/HIP BLAS workspace fix (#31838)
   - Grammar matching optimization (#29557)
   - RDNA4 documentation (#26745)
   - Audio in Discover UI (#31837)
   - External PLE file loading (#31185)
   - Intel FA kernel for Vulkan prefill (#29357)
   - Gemma4 graph optimizations (#31356) - massive gains
   - Hexagon RMS_NORM fusion (#31822)
   - OpenCL spec verification improvements (#31831)
   - Various other improvements

The MoE cache with LRFU/MQ hybrid and Vulkan ReBAR detection represent significant architectural enhancements, while the Gemma4 optimizations and Intel FA kernel work show meaningful performance gains being pursued across different hardware backends.
</think>


# llama.cpp Daily Digest — 2026-11-07

---

## 1. Today's Highlights

The llama.cpp project landed a notable wave of backend optimizations and model support: the **Kimi-K3.1-Pro** text model was merged (b12180, #31779), bringing DSA-based attention to the K3 family; the **MoE-cache LRFU/MQ hybrid** eviction strategy shipped in b12170 (#31233), promising better expert reuse; and the **Hexagon backend** gained conv_3d support and an RMS_NORM post-norm fusion optimization (#31822) that eliminates redundant DDR round-trips per transformer layer. On the stability front, a CLI crash on invalid UTF-8 inputs was fixed (#31563), and a critical ROCm/HIP BLAS workspace regression causing HSA memory faults was addressed in PR #31838.

---

## 2. Releases & Breaking Changes

| Commit | Description | PR |
|--------|-------------|-----|
| b12180 | **Model**: Kimi-K3.1-Pro text model added; replaces MLA layers with DSA (top-k 2048, 32 heads × 128, no RoPE) | [#31779](https://github.com/ggml-org/llama.cpp/pull/31779) |
| b12179 | **Hexagon**: Generalized conv_2d to support conv_3d via HTP_OP_CONV_3D op | [#31814](https://github.com/ggml-org/llama.cpp/pull/31814) |
| b12177 | **CLI**: Fixed crash on invalid UTF-8 in prompt or files | [#31563](https://github.com/ggml-org/llama.cpp/pull/31563) |
| b12173 | **OpenCL**: Added repeat kernel support for f16, i32, i16, bf16 | [#31782](https://github.com/ggml-org/llama.cpp/pull/31782) |
| b12172 | **WebGPU**: Added batched tensor API (`get_tensor_n`, `set_tensor_n`) | [#31473](https://github.com/ggml-org/llama.cpp/pull/31473) |
| b12171 | **Vulkan**: Detect Resizable BAR support; avoid BAR allocations on unsupported hardware | [#31658](https://github.com/ggml-org/llama.cpp/pull/31658) |
| b12170 | **MoE-cache**: LRFU/MQ-like hybrid eviction strategy — clock advances by real token count; `sel` is a RESHAPE node | [#31233](https://github.com/ggml-org/llama.cpp/pull/31233) |

> **No API-breaking changes** detected in the last 24 hours. CMake build improvements (b12176, b12174) and test infrastructure hardening are non-breaking.

---

## 3. New Model & Hardware Support

### Models
| Model | Commit | Key Details |
|-------|--------|-------------|
| **Kimi-K3.1-Pro** | b12180 | DSA attention (24 of 93 layers with lightning indexer); full-attention MLA layers replaced; top-k 2048 | [#31779](https://github.com/ggml-org/llama.cpp/pull/31779) |

### Hardware / Backends
| Backend | Change | PR |
|---------|--------|-----|
| **Qualcomm Hexagon** | Conv_3d support via HTP_OP_CONV_3D (shares op_conv_2d path); RMS_NORM_MUL residual-add fusion eliminates extra op launch + DDR round-trip per layer | [#31814](https://github.com/ggml-org/llama.cpp/pull/31814), [#31822](https://github.com/ggml-org/llama.cpp/pull/31822) |
| **OpenCL** | Repeat kernel added for f16, i32, i16, bf16 | [#31782](https://github.com/ggml-org/llama.cpp/pull/31782) |
| **WebGPU** | Batched tensor API (`get_tensor_n`, `set_tensor_n`) for multi-tensor workloads | [#31473](https://github.com/ggml-org/llama.cpp/pull/31473) |
| **ROCm/HIP** | Fixed BLAS workspace allocation (32 MB fixed instead of per-call rocBLAS scratch); resolves HSA_STATUS_ERROR_MEMORY_FAULT | [#31838](https://github.com/ggml-org/llama.cpp/pull/31838) |
| **RDNA4 (gfx1200/gfx1201)** | Documentation added for HIP build support | [#26745](https://github.com/ggml-org/llama.cpp/pull/26745) |

> **Vulkan ReBAR detection** now avoids BAR allocations on hardware without Resizable BAR support, preventing OOM on Intel Arc B580 and similar platforms.

---

## 4. Performance & Optimization

| Area | Optimization | Impact | PR |
|------|-------------|--------|-----|
| **Gemma-4 (E2B/E4B)** | Graph optimizations — drop unused prompt tokens before KV-shared layers | **Massive prefill gains** (E2B & E4B) | [#31356](https://github.com/ggml-org/llama.cpp/pull/31356) |
| **Hexagon** | Fused post-norm residual add into RMS_NORM_MUL (`y = ADD(MUL(RMS_NORM(x), w), r)`) | Saves 1 op launch + 1 DDR round-trip **twice per layer** | [#31822](https://github.com/ggml-org/llama.cpp/pull/31822) |
| **Hexagon** | Conv_3d support (tiling via existing HMX paths) | Enables 3D model inference on Hexagon | [#31814](https://github.com/ggml-org/llama.cpp/pull/31814) |
| **ROCm/HIP** | Fixed 32 MB BLAS workspace (vs. per-call allocation) | 24/24 solve ops now pass; eliminates memory faults | [#31838](https://github.com/ggml-org/llama.cpp/pull/31838) |
| **Vulkan (Intel)** | Intel Flash Attention kernel for prefill | Targeted prefill perf improvement on Intel platforms | [#29357](https://github.com/ggml-org/llama.cpp/pull/29357) |
| **OpenCL** | Small-n GEMV variants for dense q8_0 and MoE q4_k/q5_1 | Improves speculative decoding verification throughput | [#31831](https://github.com/ggml-org/llama.cpp/pull/31831) |
| **Vulkan** | `readonly` qualifier on decodeBuf declarations | Expected perf gain with future drivers | [#31833](https://github.com/ggml-org/llama.cpp/pull/31833) |
| **MoE-cache** | LRFU/MQ hybrid eviction (clock by real token count) | Better expert reuse in MoE models | [#31233](https://github.com/ggml-org/llama.cpp/pull/31233) |
| **Grammar** | Left-factorization optimization for matching | Reduced backtracking in constrained generation | [#29557](https://github.com/ggml-org/llama.cpp/pull/29557) |

---

## 5. Stability & Regressions

### Active Issues (by severity)

| Severity | Issue | Backend | Summary | Link |
|----------|-------|---------|---------|------|
| 🔴 High | **Disaggregated prefill/decode** | server | Roadmap item — prompt processing on dedicated devices; 35 comments | [#21266](https://github.com/ggml-org/llama.cpp/issues/21266) |
| 🔴 High | **Vulkan/ANV Flash Attention → O(N²) PP degradation + device loss** | Vulkan | Flash Attention fallback to SCALAR on Intel Arc B580 | [#27638](https://github.com/ggml-org/llama.cpp/issues/27638) |
| 🔴 High | **Vulkan KHR_coopmat nondeterministic results** | Vulkan | Intel Arc Pro B70 (BMG G31) returns different answer every call for same input | [#31560](https://github.com/ggml-org/llama.cpp/issues/31560) |
| 🟡 Medium | **Memory leak** | CUDA | Eval bug reported for CUDA backend (commit 47c786924) | [#27725](https://github.com/ggml-org/llama.cpp/issues/27725) |
| 🟡 Medium | **SYCL dual Arc Pro B60 MoE 100–1000× slowdown** | SYCL | `--cpu-moe` with `--split-mode layer` stalls; 15,000 MiB cache works, 40,000 MiB stalls | [#31510](https://github.com/ggml-org/llama.cpp/issues/31510) |
| 🟡 Medium | **Prompt cache cross-contamination** | server | RAM-backed cache (`--cache-ram`) restores unrelated conversation content into fresh slot under concurrent load | [#27148](https://github.com/ggml-org/llama.cpp/issues/27148) |
| 🟡 Medium | **DFlash2 abort in post_decode seq_rm** | general | `draft-dflash` aborts on hybrid Qwen3.8-27B with `--parallel 8` | [#31656](https://github.com/ggml-org/llama.cpp/issues/31656) |
| 🟢 Low | **CUDA illegal memory access** | CUDA | Turing sm_75 with `-cmoe` at exactly 94 prompt tokens | [#28241](https://github.com/ggml-org/llama.cpp/issues/28241) |
| 🟢 Low | **SIGSEGV in unicode_regex_split_stl** | server | ~26,000-char unbroken run of one character class overflows stack | [#27783](https://github.com/ggml-org/llama.cpp/issues/27783) |

### Fixed / Closed Today
- **#20697** Disk-based context checkpoint offloading (`--cache-disk`) — closed
- **#23335** Draft-MTP determinism on Qwen3.6 — closed
- **#27097** Vulkan slow token gen with AMD DGPU ReBAR disabled — closed
- **#28843** Vulkan retune coopmat/MMQ for RDNA3.5 — closed
- **#28241** CUDA illegal memory on Turing sm_75 — closed

---

## 6. What This Means for Application Developers

### Immediate Action Items
1. **If you run Gemma-4 E2B/E4B**: Pull latest — the graph optimization PR #31356 delivers significant prefill speedups by skipping computation on unused prompt tokens before KV-shared layers.
2. **If you use Hexagon hardware**: The RMS_NORM_MUL fusion (#31822) reduces per-layer latency; upgrade to benefit from the conv_3d support if you're running vision models.
3. **If you use MoE models**: The new LRFU/MQ hybrid cache (#31233, b12170) should improve expert reuse — monitor your token throughput for changes.
4. **If you serve mixed-content models**: The Discover UI now shows audio capability for models with audio encoders (e.g., Gemma 4, LFM 3 Omni) — update your model catalogs accordingly (#31837).

### Watch Items
- **ROCm/HIP users**: The BLAS workspace fix (#31838) resolves a long-standing memory fault issue on HIP builds. If you were hitting HSA errors, this is now fixed.
- **Intel Arc Vulkan users**: Issue #31560 (nondeterministic coopmat results on Arc Pro B70) and #27638 (Flash Attention SCALAR fallback) are both active. Avoid `--cache-kv` on Arc Pro B70 until resolved.
- **SYCL multi-GPU users**: The dual-Arc Pro B60 MoE slowdown (#31510) is severe (100–1000×) at large cache sizes. Stick to single-GPU or 15,000 MiB cache limit for now.

### Strategic Note
The **disaggregated prefill/decode** discussion (#21266) at 35 comments signals that llama-server is moving toward heterogeneous deployment — prefill on GPUs, decode on CPU/FPGA — which will be a major architectural shift for inference gateways and agent frameworks building on llama.cpp. Teams with latency-sensitive streaming workloads should track this roadmap item.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze the GitHub data for Ollama and create a structured digest for 2026-11-07.

Let me organize the information:

**Releases & Breaking Changes:**
- No releases in last 24h

**New Model & Hardware Support:**
- PR #19566: MLX support for dense Nemotron / Luciole Safetensors models (feature request)
- PR #19197: mlx: support concurrent generation - Allow MLX models to serve multiple generation requests at once through `OLLAMA_NUM_PARALLEL`
- PR #19580: windows: add CUDA 13.5 and SM 103 for ARM64
- PR #18078: MLX: make Qwen3.8 Flash Next memory efficient

**Performance & Optimization:**
- PR #19197: MLX concurrent generation support
- PR #18078: Qwen3.8 Flash Next memory efficiency improvements
- PR #19585: llm: handle split memory log lines - fixes memory and VRAM accounting accuracy
- PR #19581: sched: keep a runner we couldn't stop in the loaded set (fixes #19577)

**Stability & Regressions:**
- Issue #19558: Vulkan backend crashes on AMD Renoir iGPU (Ryzen 4700U, gfx90c) - NTSTATUS 0xe06d7363
- Issue #19577: Ollama fails to terminate idle "llama-server" runner at keep_alive expiration
- Issue #16992: ornith:35b — RENDERER/PARSER emits raw special tokens
- Issue #17026: cuda_v13: long grammar-constrained generation crashes with CUDA error


- Issue #19293: /api/chat intermittently fails with 500 "llama-server apply-template error" on macOS
- Issue #19430: TLS handshake timeout on networks that drop post-quantum ClientHello
- Issue #19158: gemma4:12b crashes with ggml_vulkan device lost on Intel Arc 130V
- Issue #19589: Ollama does not use AMD RX 5500 GPU (Navi 14/gfx1010) — SIGBUS on Vulkan backend

I'm tracking several critical stability issues across different hardware configurations. The Vulkan backend continues to struggle with various GPU setups, including AMD and Intel integrated graphics. Network-related problems with TLS handshakes and API request failures are also emerging, particularly on macOS systems. Memory management and GPU compatibility remain key areas of concern.

Several pull requests are addressing these challenges, with fixes targeting memory handling, GPU integration, and concurrent generation capabilities. The team is actively working to resolve these issues across different platforms and hardware configurations.
</think>


# Ollama Digest — 2026-11-07

---

## 1. Today's Highlights

The scheduler's idle-runner cleanup path received a targeted fix: when `keep_alive` expiry fails to stop a `llama-server` process, the runner is now retained in the loaded set instead of silently leaking VRAM. On the MLX front, concurrent multi-request serving via `OLLAMA_NUM_PARALLEL` is moving toward mainline, and a memory-efficient Qwen3.8 Flash Next variant (BF16 projections + MXFP8 dense weights) is now published. Meanwhile, Vulkan-backend instability on AMD Renoir iGPUs and Intel Arc 130V is generating fresh bug reports, with the AMD RX 5500 (Navi 14) additionally triggering SIGBUS on device enumeration.

---

## 2. Releases & Breaking Changes

| Item | Detail |
|---|---|
| **No new releases in last 24 h** | The last stable is v0.40.15; no new tags or release artifacts landed today. |

---

## 3. New Model & Hardware Support

| # | Item | Link |
|---|---|---|
| 3.1 | **MLX: dense Nemotron / Luciole Safetensors** — The MLX runner now registers the dense `NemotronForCausalLM` variant used by the Luciole 1B/23B instruct models, unblocking direct Safetensors-to-MLX conversions. A contribution path is open. | [Issue #19566](https://github.com/ollama/ollama/issues/19566) |
| 3.2 | **CUDA 13.5 + SM 103 (SM_9b_128) on Windows ARM64** — CI now installs the separate ARM64 cross-compilation package and retains SM 121 (Ada) support, closing a tooling gap for Windows-on-ARM deployments. | [PR #19580](https://github.com/ollama/ollama/pull/19580) |
| 3.3 | **MLX concurrent generation** — `OLLAMA_NUM_PARALLEL` now works for MLX-backed models; ready requests share projection and feed-forward work while maintaining per-request attention buffers. Default remains single-stream; higher parallelism scales memory linearly. | [PR #19197](https://github.com/ollama/ollama/pull/19197) |

---

## 4. Performance & Optimization

| # | Item | Detail | Link |
|---|---|---|---|
| 4.1 | **Memory-efficient Qwen3.8 Flash Next (MLX)** | NVFP4 blanket quantization was degrading long generations; fix keeps QSA projections and non-expert MTP paths in BF16, applying MXFP8 only to eligible dense and control weights. Both `qwen3.8-flash-next:125b-a6b-nvfp4` and `qwen3.8-flash-next:125b-mlx` are published. | [PR #18078](https://github.com/ollama/ollama/pull/18078) |
| 4.2 | **Split-log-line memory accounting** | `memoryParsingWriter.Write()` previously parsed each write independently, so multi-chunk log lines caused regex misses and inaccurate VRAM bookkeeping. Fix retains incomplete lines between writes. | [PR #19585](https://github.com/ollama/ollama/pull/19585) |
| 4.3 | **Scheduler: keep failed-to-stop runner in loaded set** | Prevents the expiry path from silently clearing a runner that refused `Close()`, which previously led to VRAM over-commitment and fallback to CPU on the next load. | [PR #19581](https://github.com/ollama/ollama/pull/19581) fixes [#19577](https://github.com/ollama/ollama/issues/19577) |
| 4.4 | **Gemma4 parser: drop stray `</channel\|>` close tags** | `Gemma4CollectingContent` had no handling for a lone close tag, leaking it as raw content. Now suppressed. | [PR #19574](https://github.com/ollama/ollama/pull/19574) |
| 4.5 | **DeepSeek3 parser: trim whitespace after `</think>`** | The tokenizer emits `\n\n` as its own token after `</think>`; fix drains trailing whitespace from the buffer on tag detection rather than losing it downstream. | [PR #19590](https://github.com/ollama/ollama/pull/19590) |

---

## 5. Stability & Regressions

*Sorted by severity / blast radius.*

| Severity | # | Issue | Backends Affected | Status | Fix PR |
|---|---|---|---|---|---|
| 🔴 Critical | 5.1 | **Vulkan crash on AMD Renoir iGPU (gfx90c)** — `llama-server` terminates with NTSTATUS `0xe06d7363` (unhandled C++ exception) at model load on Ryzen 7 4700U Vega iGPU. Affects every model including ~380 MB ones. Reproduced on v0.40.14 stable and v0.40.15-rc2. | Vulkan / AMD gfx90c | Open | — |
| 🔴 Critical | 5.2 | **AMD RX 5500 (Navi 14, gfx1010) — SIGBUS on device enumeration** — `llama-server --list-devices` raises `signal: bus error` (exit 135) when `GGML_BACKEND` includes Vulkan; the GPU is not detected. | Vulkan / AMD gfx1010 | Open (with proposed fix) | — |
| 🔴 Critical | 5.3 | **gemma4:12b — `ggml_vulkan: device lost` on Intel Arc 130V (Lunar Lake)** — Runner dies right after tensor upload on any GPU offload since v0.40.x; worked on v0.34.4. | Vulkan / Intel Arc 130V | Open | — |
| 🟠 High | 5.4 | **`OLLAMA_NUM_PARALLEL` + multimodal models → `failed processing images`** — Concurrent requests with LLaVA or Moondream cause generation freezes and server-log errors. Open since May 2024; 24 comments. | All multimodal | Closed | — |
| 🟠 High | 5.5 | **cuda_v13: long grammar-constrained generation → Xid 79 (GPU falls off bus)** — Same requests succeed on cuda_v12; RTX 4070 Ti SUPER + driver 595.71.05 + qwen2.5:14b. | CUDA v13 / NVIDIA | Open | — |
| 🟠 High | 5.6 | **Keep-alive runner leak** — Idle `llama-server` not terminated at `keep_alive` expiry; VRAM stays allocated, scheduler assumes it's free, next load mispredicts memory and tilts to CPU. | Scheduler | Open | [PR #19581](https://github.com/ollama/ollama/pull/19581) |
| 🟡 Medium | 5.7 | **`/api/chat` 500 after long streamed reply (macOS)** — Right after a streamed reply finishes, the next request fails with `llama-server apply-template error … write: broken pipe`; retry succeeds. Affects v0.40.8 and v0.40.11. | macOS / API layer | Open | — |
| 🟡 Medium | 5.8 | **ornith:35b parser emits raw special tokens and unparsed XML** — `RENDERER ornith` / `PARSER ornith` combination in custom Modelfile leaks raw control tokens in Claude Code / OpenAI-compat clients. | Parser / ornith | Open | — |
| 🟡 Medium | 5.9 | **TLS handshake timeout with post-quantum ClientHello (X25519MLKEM768)** — Networks that silently drop TLS 1.3 ClientHello messages with PQ cipher suites cause `ollama pull` to time out. | Networking | Open | — |
| 🟢 Low | 5.10 | **Qwen3-coder nested tool-call depth tracking** — `qwenParserState_CollectingToolContent` used naive first-match without nesting depth, so embedded tool-call blocks inside a tool's own content were misparsed. | Parser / qwen3-coder | Open | [PR #17021](https://github.com/ollama/ollama/pull/17021) |

---

## 6. What This Means for Application Developers

| Area | Implication |
|---|---|
| **Scheduler memory accounting** | If you rely on `keep_alive` to free VRAM between batch jobs, the runner-leak fix (PR #19581) should improve GPU availability predictability once merged. Monitor your VRAM after long idle periods in the current stable build. |
| **MLX on Apple Silicon** | Concurrent generation support (PR #19197) means multi-turn or parallel-agent workloads on Apple Silicon can now overlap prefill across requests without serializing. This is a significant throughput win for latency-sensitive chat pipelines. |
| **Vulkan on AMD iGPUs — avoid for production** | Renoir (gfx90c), RX 5500 (gfx1010), and Intel Arc 130V are all exhibiting driver or backend-level crashes in the v0.40.x series. If you are running on these IGPU/APU configurations, stay on v0.34.4 or fall back to CPU until the Vulkan backend stabilizes. |
| **Grammar-constrained generation on CUDA v13** | Long JSON or regex-constrained outputs on RTX 40-series cards with CUDA 13.x drivers are at risk of GPU bus errors. Downgrade to CUDA v12 or disable grammar mode as a mitigation. |
| **Multimodal concurrency** | `OLLAMA_NUM_PARALLEL > 1` with LLaVA / Moondream is still broken (Issue #4165). Until resolved, keep multimodal inference single-threaded or use separate Ollama instances per model to avoid image-processing deadlocks. |
| **TLS / corporate proxies** | If `ollama pull` times out behind a firewall that inspects or drops post-quantum TLS ClientHellos, you will need to proxy or allowlist `registry.ollama.ai` at the network layer. |

---

*End of digest. Data sourced from github.com/ollama/ollama at 2026-11-07.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the provided GitHub data for LiteLLM and create a structured digest for 2026-11-07.

Looking at the data:

1. **Releases**: v1.108.2 (LTS) released, with cosign verification instructions

2. **Issues**: 68 total items, 30 shown
   - Notable bugs:
     - #25869: Gemini streaming corrupts tool calls (CLOSED)
     - #48145: JSON-defined providers lose tools if model not in catalog (OPEN)
     - #47924: reasoning_effort="none" doesn't disable thinking on Claude (OPEN)
     - #47046: Vertex/Gemini context caching reorders conversation (OPEN)
     - #50248: COHERE_API_BASE ignored for embeddings (OPEN)
     - #47096: SAP GenAI Hub re-fetches URL on every call (~870ms overhead) (OPEN)
     - #47577: Gemini streaming drops native_finish_reason (OPEN)
     - #47822: httpx timeout ignored for non-OpenAI providers (OPEN)
     - #50317: Daily tag spend lost after Redis dequeue (OPEN)
   
   - Feature requests:
     - #33921: Native support for Kimi K3, Inkling, Tinker (CLOSED)
     - #36163: TealTiger guardrail plugin (OPEN)
     - #49645: Vertex AI Claude partner models message ordering (OPEN)

3. **Pull Requests**: 470 total, 20 shown
   - #50493: MCP per-server memory of upstream tool output schemas (OPEN)
   - #50490: fix xAI image costs (CLOSED)
   - #50456: backport encrypted reasoning fix to LTS (OPEN)
   - #49224: CollieAi guardrail integration (OPEN)
   - #50491: move -latest model aliases into cost map (OPEN)
   - #50492: Bedrock native structured output by default (OPEN)
   - #50135: turn off prompt storage per key or team (OPEN)
   - #47762: move to OpenAI SDK 3 (OPEN)
   - #50485: SiliciumAiOpsLogger semantic cache (OPEN)
   - #49183: Ollama streamed tool calls index fix (OPEN)
   - #50445: router retry/fallback hop recording (OPEN)
   - #50488: preserve request tags with pre-call guardrails (OPEN)
   - #50470: preserve streamed tool argument fragments (OPEN)
   - #50439: NVIDIA NIM model catalog refresh (OPEN)
   - #50389: MCP single-server listing challenge (OPEN)
   - #50489: guardrails release redacted buffered content (OPEN)
   - #50432: router skip cooldown on 404 for single-deployment (OPEN)

Now I'll structure this into a digest.
</think>


# LiteLLM Daily Digest — 2026-11-07

---

## 1. Today's Highlights

LiteLLM v1.108.2 LTS ships with cosign verification, while the project addresses critical streaming regressions in Claude structured output and Gemini tool handling. Major new work includes OpenAI SDK 3 migration, a native CollieAi guardrail integration, and per-key/team spend log controls. Performance work targets Bedrock structured output defaults and SAP GenAI Hub's per-call latency tax.

---

## 2. Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| **v1.108.2** | LTS | Cosign verification now documented; pull via `ghcr.io/berriai/litellm:lts` |
| **OpenAI SDK 3** | Migration | [#47762](https://github.com/BerriAI/litellm/pull/47762) moves `uv.lock` and Docker image from SDK 2.33.0 to 3; includes transport fixes |

---

## 3. New Model & Hardware Support

| Model / Platform | Scope | PR / Issue |
|------------------|-------|------------|
| **Kimi K3** (Moonshot AI) | Native SDK + proxy | [#33921](https://github.com/BerriAI/litellm/issues/33921) (closed) |
| **Inkling** (Thinking Machines Lab) | Native SDK + proxy | [#33921](https://github.com/BerriAI/litellm/issues/33921) (closed) |
| **Tinker** platform | Native SDK + proxy | [#33921](https://github.com/BerriAI/litellm/issues/33921) (closed) |
| **NVIDIA NIM** catalog refresh | Add Model UI + bundled fallback | [#50439](https://github.com/BerriAI/litellm/pull/50439) |

---

## 4. Performance & Optimization

| Area | Change | Impact | PR / Issue |
|------|--------|--------|------------|
| **Bedrock structured output** | Native mode enabled by-default; JSON-tool fallback on rejection | Eliminates opt-in flag; consistent Claude behavior | [#50492](https://github.com/BerriAI/litellm/pull/50492) |
| **SAP GenAI Hub** | ~870 ms HTTP GET overhead per call (2 blocking fetches) | High-latency deployments affected | [#47096](https://github.com/BerriAI/litellm/issues/47096) (open) |
| **Router cooldown** | 404s no longer cool down single-deployment groups | Prevents lockout from bad request shapes | [#50432](https://github.com/BerriAI/litellm/pull/50432) |
| **Router retry tracking** | Retries and fallback hops now counted toward `allowed_fails`, cooldown, RPM | Accurate load management | [#50445](https://github.com/BerriAI/litellm/pull/50445) |
| **Ollama streaming tool calls** | Each streamed tool call now gets unique index | Correct multi-tool responses | [#49183](https://github.com/BerriAI/litellm/pull/49183) |
| **Spend log controls** | Per-key / per-team prompt storage toggle | GDPR / cost savings | [#50135](https://github.com/BerriAI/litellm/pull/50135) |
| **xAI image costs** | `deployment input_cost_per_pixel` now honored | Accurate billing | [#50490](https://github.com/BerriAI/litellm/pull/50490) (closed) |

---

## 5. Stability & Regressions

### Critical (High Severity)

| Issue | Description | Status | Fix PR |
|-------|-------------|--------|--------|
| [#25869](https://github.com/BerriAI/litellm/issues/25869) | Gemini streaming corrupts `server_side_tool_invocations` / `thought_signatures` — causes "Corrupted tool call context" on follow-up turns | **CLOSED** | — |
| [#50470](https://github.com/BerriAI/litellm/pull/50470) | Streamed Claude tool arguments truncated/corrupted on large schemas (JSON piece read independently) | **OPEN** | PR exists |
| [#50456](https://github.com/BerriAI/litellm/pull/50456) | Claude encrypted reasoning round-trip broken on `chatgpt/` via `/v1/messages`; backport to LTS/1.108.x | **OPEN** | PR exists |
| [#50317](https://github.com/BerriAI/litellm/issues/50317) | Daily tag spend batch disappears if writer exits after Redis dequeue but before PostgreSQL commit | **OPEN** | — |

### Medium Severity

| Issue | Description | Status | Fix PR |
|-------|-------------|--------|--------|
| [#48145](https://github.com/BerriAI/litellm/issues/48145) | JSON-defined openai-like providers drop tools when model not in catalog (regression from 1.81→1.106) | **OPEN** | — |
| [#47924](https://github.com/BerriAI/litellm/issues/47924) | `reasoning_effort="none"` omits thinking instead of disabling it on default-on Claude models | **OPEN** | — |
| [#47046](https://github.com/BerriAI/litellm/issues/47046) | Vertex/Gemini context caching reorders conversation when `cache_control` not at prefix; drops `system_instruction` | **OPEN** | — |
| [#47577](https://github.com/BerriAI/litellm/issues/47577) | Gemini streaming drops `native_finish_reason` on mid-stream MALFORMED_FUNCTION_CALL | **OPEN** | — |
| [#47822](https://github.com/BerriAI/litellm/issues/47822) | `httpx.Timeout` connect timeout ignored for non-OpenAI providers (allowlist too narrow) | **OPEN** | — |
| [#50248](https://github.com/BerriAI/litellm/issues/50248) | `COHERE_API_BASE` ignored for Cohere embeddings (rerank path works correctly) | **OPEN** | — |

### Lower Severity / Minor

| Issue | Description | Status |
|-------|-------------|--------|
| [#46999](https://github.com/BerriAI/litellm/issues/46999) | `/tag/update` 500s with `budget_id` on any tag that has a budget | CLOSED |
| [#49969](https://github.com/BerriAI/litellm/issues/49969) | Bedrock Converse replays reasoningText.signature to non-Anthropic GLM models causing Bad Request | CLOSED |
| [#50024](https://github.com/BerriAI/litellm/issues/50024) | Azure Messages-to-Responses detour drops encrypted reasoning in resumed tool-call history | CLOSED |
| [#50489](https://github.com/BerriAI/litellm/pull/50489) | Guardrails released unredacted buffered streaming content | **OPEN**, PR exists |

---

## 6. What This Means for Application Developers

| Takeaway | Detail |
|----------|--------|
| **Upgrade to v1.108.2 LTS** | Pull `ghcr.io/berriai/litellm:lts` for the latest LTS patch with cosign verification support. |
| **Verify streaming tool calls on Claude/Gemini** | If you use streaming + structured output / tool calls on Claude (Anthropic, Vertex, Azure, Bedrock) or Gemini, test against [#50470](https://github.com/BerriAI/litellm/pull/50470) once merged — large schemas may return truncated arguments. |
| **Claude Code sessions on `chatgpt/` need testing** | The encrypted reasoning round-trip fix ([#50456](https://github.com/BerriAI/litellm/pull/50456)) is pending backport; tool-call sessions may re-reason on every turn until deployed. |
| **Check SAP GenAI Hub latency** | Each call incurs ~870 ms overhead from two blocking management API fetches; consider caching deployment URLs externally if latency is critical. |
| **OpenAI SDK 3 migration in progress** | Monitor [#47762](https://github.com/BerriAI/litellm/pull/47762) if you depend on specific transport behavior; test thoroughly before upgrading production images. |
| **New CollieAi guardrail available** | PR [#49224](https://github.com/BerriAI/litellm/pull/49224) adds native CollieAi integration for prompt/response policy enforcement — opt-in, observability-first by default. |
| **Per-key spend log opt-out** | Admins can now disable prompt/response storage per key or team ([#50135](https://github.com/BerriAI/litellm/pull/50439)) — useful for GDPR compliance or cost reduction. |
| **Single-deployment groups no longer lock out on 404** | Router behavior change in [#50432](https://github.com/BerriAI/litellm/pull/50432) — verify fallback logic if you rely on cooldown signaling for single-deployment setups. |

---

*Digest generated from GitHub data for [BerriAI/litellm](https://github.com/BerriAI/litellm) — 2026-11-07*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants a structured digest for the Unsloth project for the date 2026-11-07, based on the provided GitHub data. The data includes releases, issues, and pull requests.

Let me analyze the data:

1. **Latest Releases**:
   - v0.1.916-beta: Large Performance Fixes - faster typing/search, faster image/video loads, two-GPU image/video gen, separate browsers for each chat, floating browser window.

2. **Latest Issues**:
   - 42 total issues (showing top 30)
   - Several bugs related to UI (glass theme issues, long conversation lag, etc.)
   - Feature requests (per-model settings, VS Code extension, plugin store, etc.)
   - Stability issues (crashes, RAG indexing failures, etc.)

3. **Latest Pull Requests**:
   - 213 total PRs (showing top 20)
   - Studio diffusion memory optimization
   - Inline image loading improvements
   - Security scan fixes
   - S3 dataset file preservation
   - LFM3-Audio-2B training support
   - Diffusion compile workers optimization
   - Claude Agent connection
   - WebKit performance fixes
   - Benchmarks page additions
   - Video generation (Cosmos3-Nano)
   - Various UI/UX improvements

Let me structure the digest according to the requested sections:

**1. Today's Highlights**:
- v0.1.916-beta released with large performance fixes
- Studio now supports LFM3-Audio-2B training and export
- Claude Agent connection added via Anthropic's Agent SDK

**2. Releases & Breaking Changes**:
- v0.1.916-beta: performance fixes, two-GPU image/video gen
- transformers 5.23 API change (gradient checkpointing renamed)

**3. New Model & Hardware Support**:
- LFM3-Audio-2B support (train, chat, export as LoRA/16-bit/GGUF)


- Krea 2 Turbo image generation model
- Cosmos3-Nano video continuation feature
- Claude Agent integration via Anthropic SDK
- DiffusionGemma multi-GPU capabilities

**4. Performance & Optimization**:
I'll focus on the critical performance enhancements. The v0.1.916-beta release brings substantial improvements, including 2-3x faster typing and search performance, 1.5-2x faster image/video loading times. Studio now supports multi-GPU image/video generation, significantly reducing processing times. WebKit performance issues have been addressed, reducing freezing from 5-7 seconds to just 230ms, with Windows experiencing up to 2.5 seconds of improvement.

Memory optimization is a key highlight, with freed image memory now returned to the OS. RAG ingestion has been dramatically accelerated, achieving 48x speedup through batching - reducing processing time from 99ms per chunk to an impressive 2.07ms.

**5. Stability & Regressions**:
Critical stability improvements address multiple crashes, including Windows Krea 2 Turbo loading failures and DiffusionGemma multi-GPU token limit issues. Web search functionality has been fixed, resolving previous "No results found" errors.

**6. What This Means for Application Developers**:
The latest release introduces robust multi-GPU support, enabling more efficient parallel processing. Developers can now leverage advanced AI agent connections, streamlining complex workflow integrations.
</think>


# Unsloth Digest — 2026-11-07

## 1. Today's Highlights

Unsloth released **v0.1.916-beta** with large performance fixes, including 2–3× faster typing/search in long chats, accelerated image/video loads, and two-GPU image/video generation. A major PR merged to preserve S3 dataset files with colliding names, addressing silent data corruption in audio training pipelines. Studio gained experimental **Claude Agent integration** via Anthropic's Agent SDK, enabling Claude Pro/Max plans without an API key.

---

## 2. Releases & Breaking Changes

| Version | Change | Impact |
|---------|--------|--------|
| **v0.1.916-beta** | Large performance fixes; separate browsers per chat; floating browser window | ✅ Non-breaking; recommended upgrade |
| **transformers 5.23** | `gradient_checkpointing` renamed to `activation_checkpointing`; Trainer reads only new names | ⚠️ **Breaking** — 4 spots change behavior; old names deprecated until v6; audit at [`f5adb36642`](https://github.com/unslothai/unsloth/commit/f5adb36642) |

**Migration note**: Applications relying on `gradient_checkpointing` in training configs must update to `activation_checkpointing` before upgrading to transformers 5.23+.

---

## 3. New Model & Hardware Support

| Model / Capability | Details | Link |
|--------------------|---------|------|
| **LFM3-Audio-2B** | Training, inference, and export (LoRA / merged 16-bit / GGUF) now fully supported in Studio | [#16973](https://github.com/unslothai/unsloth/pull/16973) |
| **Krea 2 Turbo** (`unsloth/Krea-2-Turbo`) | Image generation model now selectable in Studio's Image Generation tab | [#16892](https://github.com/unslothai/unsloth/issues/16892) |
| **Cosmos3-Nano** | Video continuation workflow added (extend a clip from its last or first frames) | [#16741](https://github.com/unslothai/unsloth/pull/16741) |
| **Cosmos3 256p** | NVIDIA frame ranges and per-model frame-rate picker | [#16737](https://github.com/unslothai/unsloth/pull/16737) |
| **DiffusionGemma multi-GPU** | Two-GPU image generation now functional (previously aborted at ~1792 tokens with `GGML_ASSERT n_ubatch >= n_tokens`) | [#16925](https://github.com/unslothai/unsloth/issues/16925) |
| **Claude Agent** | Experimental Studio connection via `claude` CLI + Anthropic Agent SDK (Claude Pro/Max without API key) | [#16963](https://github.com/unslothai/unsloth/pull/16963) |

---

## 4. Performance & Optimization

| Area | Change | Quantified Impact | Link |
|------|--------|-------------------|------|
| **UI responsiveness** | v0.1.916-beta performance fixes (typing, search, media loads) | 2–3× faster in long chats | [Release notes](https://github.com/unslothai/unsloth/releases) |
| **Multi-GPU media gen** | Two-GPU image/video generation | Enabled in v0.1.916-beta | [Release notes](https://github.com/unslothai/unsloth/releases) |
| **WebKit page restyle** | Stop restyling entire page on dialog/menu open/close | 5–7 s → ~230 ms (macOS/Linux WebKit); 20+ s → resolved (Linux WebKit browser pane) | [#16961](https://github.com/unslothai/unsloth/pull/16961) |
| **Reduce motion** | Switch light/dark without animating every element | **2.5 s → 230 ms** on Windows (Reduce motion On) | [#16977](https://github.com/unslothai/unsloth/pull/16977) |
| **RAG ingestion** | Batch `_embed_all` across documents; fix batch-of-1 path | **99 ms/chunk → 2.07 ms/chunk** (48× speedup) | [#16715](https://github.com/unslothai/unsloth/issues/16715) |
| **Diffusion compile cache** | Read back autotune results on warm start (SDXL/L4) | ~9.5 s saved per reopen on ~22 s first render | [#16981](https://github.com/unslothai/unsloth/pull/16981) |
| **Host memory** | Return freed image heap to OS after load | Reduces resident memory after image loads | [#16934](https://github.com/unslothai/unsloth/pull/16934) |
| **Inline image timeout** | Grace period for slow sandbox loads with descriptive error | UX improvement | [#16923](https://github.com/unslothai/unsloth/pull/16923) |

---

## 5. Stability & Regressions

Ranked by severity (🔴 Critical → 🟡 Moderate):

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **Critical** | **Windows crash** loading Krea 2 Turbo (access violation `0xc0000005`) | Open | — |
| 🔴 **Critical** | **DiffusionGemma multi-GPU** aborts on prompts >~1792 tokens (`GGML_ASSERT n_ubatch >= n_tokens`) | Open | — |
| 🔴 **Critical** | **S3 audio datasets** silently paired transcripts with wrong recordings; manifest shards overwrote each other | **Closed** | [#16830](https://github.com/unslothai/unsloth/pull/16830) |
| 🟠 **High** | **Blender MCP** fails to start due to MCP SDK 2.3.0 incompatibility in v0.1.915-beta | Closed | — |
| 🟠 **High** | **Beta update** fails to complete on Windows (Tauri diag: `elevated=false`) | Open | — |
| 🟡 **Moderate** | **Web search** always returns "No results found" (missing `Accept` header for DuckDuckGo; Yandex missing from allow-list) | Open | — |
| 🟡 **Moderate** | **CLI stream handling** treats truncated stream (no finish reason) as successful reply; next-turn history corrupted | Closed | — |
| 🟡 **Moderate** | **RAG indexing** during embedding model download fails every file permanently | Closed | — |
| 🟡 **Moderate** | **Glass theme** not applied consistently across UI; background blur behavior varies | Closed (multiple issues) | — |
| 🟡 **Moderate** | **Long conversations** cause UI lag on web + desktop (regression) | Closed | — |

---

## 6. What This Means for Application Developers

**1. Training pipelines using S3 audio datasets should re-validate existing manifests.** The silent file-collision bug in [#16830](https://github.com/unslothai/unsloth/pull/16830) means prior audio datasets may have misaligned transcript/audio pairs. Re-download and verify manifests after updating.

**2. Multi-GPU users can now leverage two-GPU image/video generation** in v0.1.916-beta. If deploying on dual-GPU Windows/Linux setups, expect significantly faster diffusion workloads.

**3. RAG-heavy applications see a 48× embedding throughput improvement.** If you batch document ingestion, this change dramatically reduces indexing time. Audit `_embed_all` usage in custom workflows.

**4. WebKitGTK/Linux app developers**: The 20+ second freeze on browser pane open is resolved. If you run Studio in headless or Linux server contexts, upgrade is strongly recommended.

**5. Transformers 5.23 compatibility**: If your fine-tuning code references `gradient_checkpointing`, audit configs before upgrading the dependency. Four code paths have changed behavior.

**6. Claude Agent integration** provides a new way to route tasks through Claude Pro/Max within Studio workflows, without requiring API key management. Useful for agents that need superior reasoning on complex tasks.

**7. Developers targeting Windows**: The Krea 2 Turbo crash on Windows 11 is unresolved. Avoid that model on Windows until a fix lands, or test carefully before production deployment.

---

*Data sourced from github.com/unslothai/unsloth — 2026-11-07*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*