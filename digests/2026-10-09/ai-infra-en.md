# AI Infrastructure Digest 2026-10-09

> Generated: 2026-10-09 02:30 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to generate a cross-project comparison report based on the digests I've created for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me analyze the data across all these projects and create a comprehensive comparison.

Let me organize by project:

1. **vLLM** - Issues: ~17 top issues, PRs: ~17+ top PRs, Releases: None in last 24h
2. **SGLang** - Issues: ~30 top issues, PRs: ~47 top PRs, Releases: None in last 24h
3. **llama.cpp** - Issues: ~30 top issues, PRs: ~10+ PRs, Releases: 10 new versions
4. **Ollama** - Issues: ~28 top issues, PRs: ~47 top PRs, Releases: 1 minor version (v0.40.2)
5. **LiteLLM** - Issues: ~30 top issues, PRs: ~20 top PRs, Releases: 5 versions
6. **Unsloth** - Issues: ~30 top issues, PRs: ~20 top PRs, Releases: 1 beta version

Now let me structure the comparison report according to the requested sections.</think>

# Cross-Project Comparison Report: AI Infrastructure Ecosystem

## 1. Ecosystem Overview

The AI inference infrastructure landscape on October 9, 2026 shows clear specialization across layers. **vLLM and SGLang** dominate the high-performance serving tier with aggressive Blackwell/SM120 optimizations and speculative decoding refinements. **llama.cpp** continues its standalone-inference dominance with CUDA/Vulkan/SYCL multi-backend work, while **Ollama** focuses on developer ergonomics for local deployment. **LiteLLM** serves as the critical abstraction layer unifying 100+ providers, and **Unsloth** owns the fine-tuning democratization layer. The common thread: every project is racing to handle longer contexts (512K–1M tokens), larger batch sizes, and multi-GPU distribution while managing KV cache and memory efficiently.

---

## 2. Activity Comparison

| Project | Top Issues | Top PRs | Releases (24h) | Focus Area |
|---------|------------|---------|----------------|------------|
| **vLLM** | ~17 | ~17 | 0 | GPU serving engine |
| **SGLang** | ~30 | ~47 | 0 | GPU serving + runtime |
| **llama.cpp** | ~30 | ~10+ | **10** | CPU/GPU standalone |
| **Ollama** | ~28 | ~47 | 1 (v0.40.2) | Local runtime |
| **LiteLLM** | ~30 | ~20 | 5 | Gateway/unification |
| **Unsloth** | ~30 | ~20 | 1 (beta) | Fine-tuning |

**Key observation:** llama.cpp leads in release velocity (10 commits with version bumps), reflecting its role as the rapid-iteration engine for llama.cpp-server and downstream consumers. SGLang and Ollama show the highest PR volume, indicating aggressive feature development.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|---------|
| **Blackwell (SM120)** | ✅ NVFP4 decode, XQA | — | — | — | — |
| **DeepSeek V4.1** | ⚠️ SM120 blocked | ✅ DeepGEMM MegaGate | — | — | — |
| **GPT-6.1 Sol (Bedrock)** | — | — | — | — | — |
| **Gemma 4** | — | ✅ FA4 on SM90 | — | ✅ | ✅ safetensors |
| **Qwen 4 Exp / Flash-Next** | ✅ FP8 QSA Ampere | ✅ Decode opt | — | — | — |
| **MiniMax-M3 / DSpark** | ✅ Prefix cache | — | — | — | ✅ DSpark |
| **GLM-5.3 Flash** | ⚠️ Decode degeneration | — | — | — | — |
| **Decision Models (Jev-style)** | — | — | — | — | ✅ NEW |
| **MUSA** | — | — | ✅ FWHT fix | — | — |
| **Intel XPU** | ✅ KV offload mmap | ✅ XPU support | — | — | — |

**Who is ahead:** vLLM leads on Blackwell GPU support; SGLang leads on DeepSeek V4.1 optimization; llama.cpp leads on hardware diversity (MUSA, Vulkan RDNA, SYCL); Unsloth leads on emerging architectures (Decision Models). Ollama is notably conservative on bleeding-edge model support, prioritizing stability.

---

## 4. Performance Frontier

| Optimization Area | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------|------|--------|-----------|--------|---------|---------|
| **KV Cache** | ✅ XQA decode, sharding | ✅ DSA indexer, MTP | ✅ Vulkan concat | — | — | ✅ MoE cache |
| **Quantization** | ✅ NVFP4, FP8 | ✅ Q8_0 opt | ✅ FP8 decode | — | — | ✅ 4-bitbnb |
| **Speculative Decoding** | ✅ MTP + hybrid GDN | ✅ DSpark | — | — | — | ✅ Decision models |
| **Batching/Serving** | ✅ CP8+TP8 req | ✅ Scheduler overlap | ✅ PAD kernel | — | ✅ Telemetry | — |
| **Multi-GPU/Distributed** | ✅ Pipeline parallel | ✅ A2A fallback | ✅ MoE multi-GPU | — | — | — |
| **Kernel Fusion** | ✅ GDN prefill | ✅ GDN | ✅ RMSNorm+gate | — | — | ✅ LoRA |
| **Context Length** | ✅ 512K ISL | ✅ 512K ISL | ✅ 50K+ | — | — | — |

**Where effort is concentrated:** The dominant theme across all projects is **KV cache optimization**—whether through sharding (vLLM, SGLang), new layouts (llama.cpp Vulkan concat), or caching strategies (Unsloth MoE). Speculative decoding is the second major focus, with vLLM advancing MTP and SGLang iterating on DSpark. Blackwell (SM120) support is a current bleeding-edge battleground for vLLM.

---

## 5. Layer Positioning

```
┌─────────────────────────────────────────────────────────────────┐
│  GATEWAY / ABSTRACTION                                         │
│  LiteLLM ───────────────────────────────────────── 100+ providers unified │
├─────────────────────────────────────────────────────────────────┤
│  LOCAL RUNTIME                                                 │
│  Ollama ───────────────────────────────  User-friendly local deployment │
├─────────────────────────────────────────────────────────────────┤
│  HIGH-PERFORMANCE SERVING                                      │
│  vLLM  ─────────────────────────────── Production GPU serving │
│  SGLang ─────────────────────────────── Multi-backend serving │
│  llama.cpp ──────────────────────────── Standalone / CPU-GPU  │
├─────────────────────────────────────────────────────────────────┤
│  FINE-TUNING / TRAINING                                        │
│  Unsloth  ───────────────────────────── Democratized fine-tuning  │
└─────────────────────────────────────────────────────────────────┘
```

| Project | Layer | Target User | Value Proposition |
|---------|-------|-------------|-------------------|
| **LiteLLM** | Gateway | Platform engineers | Unify 100+ LLM providers behind single API |
| **Ollama** | Local runtime | Developers, hobbyists | One-command local LLM |
| **vLLM** | Serving engine | MLOps, inference infra | Production throughput, P99 latency |
| **SGLang** | Serving + runtime | Advanced users | Flexible serving with SRT runtime |
| **llama.cpp** | Standalone engine | Embedded, edge, CLI | No-server, maximum portability |
| **Unsloth** | Fine-tuning | ML practitioners | 2× faster fine-tuning, less VRAM |

---

## 6. Trend Signals

### What Infrastructure Engineers Should Watch

1. **Blackwell (SM120) is the new battleground** — vLLM's XQA NVFP4 decode work and DeepSeek V4.1 optimization in SGLang indicate the ecosystem is racing to support NVIDIA's latest architecture. Expect production readiness for SM120 within 30–60 days.

2. **Speculative decoding is entering maturity** — vLLM's MTP + hybrid GDN, SGLang's DSpark, and Unsloth's Decision Models all point to multi-token speculation as the primary lever for throughput gains. The question shifts from "does it work?" to "how much accuracy loss at what speedup?"

3. **KV cache is the new memory hierarchy** — Every project is reinventing cache strategies: sharding, staged write-back, GPU-resident LRU, multi-GPU pools. This reflects the shift to 1M+ context windows where KV memory exceeds GPU VRAM.

4. **Unified model loading is collapsing** — llama.cpp's GGUF migration, Ollama's auto-conversion, and LiteLLM's provider abstraction all signal that model format diversity is being absorbed into the serving layer. Developers can increasingly ignore quantization choice and format at inference time.

5. **Fine-tuning is democratizing** — Unsloth's Decision Model training and MoE optimizations lower the barrier to custom model adaptation. Expect more "train your own" workflows to move from research into production pipelines.

6. **Telemetry and observability are becoming first-class** — LiteLLM's AggregatingSink and vLLM's async prefill indexer improvements indicate that inference-as-a-service operators demand enterprise-grade visibility before deploying at scale.

### Signals for Agent / Application Developers

- **Don't deploy GLM-5.3-Flash in production yet** — Decode degeneration issues in vLLM affect tool-calling scenarios.
- **Watch LiteLLM for provider stability** — The GitHub BYOK bug shows that abstraction layers introduce subtle regressions; test your specific provider configuration.
- **Unsloth Decision Models may disrupt agentic workflows** — If you need structured decision-making from LLMs, the 30→80% accuracy improvement claim warrants experimentation.
- **Long-context (512K+) is now viable** — Multiple projects show 512K ISL performance improvements; if your use case involves large documents, the infrastructure is ready.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to generate a structured digest for vLLM project based on the GitHub data provided. Let me analyze the data and create a proper digest following the specified format.

Let me go through the data:

**Releases**: None in last 24h

**Issues (by comment count):**
1. #56868 - GLM-5.3-Flash long-decode degeneration after accumulated reasoning decode (39 comments)
2. #38175 - RFC: Support ViT Full CUDA Graph (Tracker) (35 comments)
3. #60174 - DFlash2/DSpark + prefix caching corrupt output after cache hit (24 comments)
4. #56605 - GLM-5.3-Flash degenerates into repeated-token "word salad" (20 comments)
5. #59203 - DeepSeek-V4.1-Flash cannot run on SM120 (RTX PRO 6000) (19 comments)
6. #46722 - RFC: Reduce multimodal payload in token-in/token-out (18 comments)
7. #57149 - ROCm AMD Qwen3.8-2.4T-A95B gfx950 / MI355X Performance Optimization (16 comments)
8. #38551 - AssertionError: Encoder cache miss crashes engine with MTP + multimodal (13 comments, CLOSED)
9. #60262 - kv_cache_dtype="fp8" auto-selects FLASHINFER without usable FlashInfer JIT (11 comments)
10. #47846 - Feature: model runner v2 support prefill context parallelism & cp8+tp8=worldsize8 (10 comments)
11. #59642 - Qwen3.8-flash-next 0% MTP acceptance rate in disaggregated PD serving (10 comments, CLOSED)


12. #41485 - Qwen3-VL deepstack ValueError (9 comments, CLOSED)
13. #59665 - RFC: Fast-Track Merging for Model Optimization PRs (8 comments)
14. #57838 - RowWiseTorchFP8ScaledMMLinearKernel selected on RDNA4 (8 comments)
15. #60357 - rank for logprob_token_ids entries is their position in request list (8 comments)
16. #53916 - RFC: Native Text Watermarking Support (8 comments)
17. #59770 - Performance: Nemotron-3.5

I'm seeing a pattern across these issues. There are three main problem areas: GLM-5.3-Flash models experiencing decoding issues, DeepSeek-V4.1 compatibility problems on SM120 hardware, and several RFC proposals for performance improvements. Additionally, there are concerns around multimodal processing and MTP handling that need attention.

Looking at the pull requests, I'm tracking several key developments. The Rust frontend is handling reasoning controls through gRPC, there's work on NVFP4 KV cache decoding using XQA on SM12x, and optimizations are being applied to GLM-5.3-Flash for long-context scenarios. ROCm support is advancing with fused QK-norm, RoPE, and gate operations for Qwen models, and there are internal prefill checkpoint implementations for GDN using Triton and AITER.

Beyond those, I see fixes addressing KV cache layouts across workers, pipeline parallelism issues with empty projected KV groups, and documentation corrections. ROCm performance work is targeting the AITER prefill indexer topk, while Qwen4Exp is gaining FP8 QSA main KV support on Ampere hardware.</think>

# vLLM Daily Digest — 2026-10-09

## 1. Today's Highlights

The vLLM project continues active development across multiple fronts. Notable items include a new RFC proposing **fast-track merging for model optimization PRs** to address reviewer bandwidth constraints given the high volume of inference kernel contributions. On the bug front, **GLM-5.3-Flash models are experiencing long-decode degeneration** issues in tool-calling scenarios (issues #56868, #56605), with the community actively investigating root causes. Meanwhile, **Blackwell (SM120) support is advancing** with new PRs enabling NVFP4 KV cache decoding via XQA and fixing DeepSeek-V4.1 compatibility.

---

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Description | Link |
|------|-------------|------|
| **FP8 QSA main KV on Ampere** | Qwen4Exp (Qwen3.8-Flash-Next) now supports FP8 main KV cache on sm_80/sm_86 (Ampere) — previously only worked on sm_89+ | [PR #60602](https://github.com/vllm-project/vllm/pull/60602) |
| **XPU KV offload mmap** | Intel XPU now supports register KV offload mmap region as pinned host memory | [PR #51956](https://github.com/vllm-project/vllm/pull/51956) |
| **DCP A2A fallback** | Direct A2A layouts that are unsupported now gracefully fall back to NCCL-based implementation | [PR #54472](https://github.com/vllm-project/vllm/pull/54472) |

---

## 4. Performance & Optimization

| Item | Description | Impact | Link |
|------|-------------|--------|------|
| **NVFP4 KV decode with XQA on SM12x** | Decode path now uses XQA for NVFP4 KV cache on Blackwell (sm_120, sm_121), instead of routing through fa2 for both prefill and decode | Fixes CUDA graph issues with speculative decoding | [PR #60452](https://github.com/vllm-project/vllm/pull/60452) |
| **GLM-5.3-Flash long-context indexer sharding** | Partitioned sparse-indexer prefill scoring across TP ranks; eliminates redundant MQA scoring per rank | Speedup at 512k ISL context | [PR #54951](https://github.com/vllm-project/vllm/pull/54951) |
| **ROCm AITER prefill indexer topk** | Optimized AITER backend for GLM-5.3-Flash sparse MLA layers; reduces indexer topk calls from 16× per chunk to optimized path | ~350ms savings at 512k ISL | [PR #60753](https://github.com/vllm-project/vllm/pull/60753) |
| **Fused QK-norm+RoPE+gate for Qwen3-Next** | Triton kernel enabling fused QKV split, RMSNorm, NeoX RoPE, and gate for Qwen3.5/Qwen3-Next | ROCm performance improvement | [PR #51406](https://github.com/vllm-project/vllm/pull/51406) |
| **Internal prefill checkpoints for GDN** | Enables continuous prefill execution across block boundaries for Triton/FLA and AITER GDN backends | Improved prefill throughput | [PR #60659](https://github.com/vllm-project/vllm/pull/60659) |
| **MTP prefix-cache restore for hybrid GDN** | Fixes hybrid GDN prefix-cache hits under MTP speculative decoding; previously prompts at certain lengths got zero cache hit | Better cache utilization with MTP | [PR #52244](https://github.com/vllm-project/vllm/pull/52244) |

**Work in Progress (RFCs / trackables):**
- **ViT Full CUDA Graph** — RFC to support CUDA graphs for Vision Transformer encoders in multimodal models (Qwen3-VL, GLM-V, Kimi K2.5) — [Issue #38175](https://github.com/vllm-project/vllm/issues/38175)
- **ROCm Qwen3.8-2.4T-A95B optimization** — gfx950/MI355X performance roadmap — [Issue #57149](https://github.com/vllm-project/vllm/issues/57149)
- **Model runner v2 prefill context parallelism** — Request for cp8+tp8=worldsize8 support — [Issue #47846](https://github.com/vllm-project/vllm/issues/47846)

---

## 5. Stability & Regressions

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| **High** | **GLM-5.3-Flash decode degeneration** | Longdecode degenerates into repeated tokens after accumulated reasoning; also manifests as "word salad" in multi-turn agentic use | Open — [Issue #56868](https://github.com/vllm-project/vllm/issues/56868), [Issue #56605](https://github.com/vllm-project/vllm/issues/56605) |
| **High** | **DSpark prefix cache corruption** | DFlash2/DSpark with prefix caching produces corrupt output after cache hit on Qwen3.8-27B NVFP4; works on 0.29, FP8, MTP | Open — [Issue #60174](https://github.com/vllm-project/vllm/issues/60174) |
| **High** | **DeepSeek-V4.1 on SM120** | Fails to run on RTX PRO 6000 Blackwell due to missing FlashInfer sparse-MLA decode kernel for page_block_size=32 (only pbs=64 exists) | Open — [Issue #59203](https://github.com/vllm-project/vllm/issues/59203) |
| **Medium** | **FP8 KV auto-select crashes without FlashInfer JIT** | `kv_cache_dtype="fp8"` auto-selects FLASHINFER backend but crashes when no usable JIT is present; should fall back to TRITON_ATTN | Open — [Issue #60262](https://github.com/vllm-project/vllm/issues/60262) |
| **Medium** | **FP8 KV cache startup OOM** | CUDA graph memory is omitted from FP8 KV cache budget, causing startup OOM on smaller GPUs | Open — [Issue #60350](https://github.com/vllm-project/vllm/issues/60350) |
| **Medium** | **Nemotron-3.5-Lightning regression** | ~16% decode slowdown on DGX Spark (GB10/SM121) since v0.29.0 | Open — [Issue #59770](https://github.com/vllm-project/vllm/issues/59770) |
| **Medium** | **ROCm RDNA4 FP8 linear kernel** | RowWiseTorchFP8ScaledMMLinearKernel incorrectly selected on gfx1201, costing 5-24% decode performance | Open — [Issue #57838](https://github.com/vllm-project/vllm/issues/57838) |
| **Low** | **logprob_token_ids rank semantics** | Returns position in request list instead of vocab rank | Open — [Issue #60357](https://github.com/vllm-project/vllm/issues/60357) |
| **Fixed** | **MTP + multimodal encoder cache crash** | AssertionError when encoder cache misses with MTP + multimodal under high concurrency | Closed — [Issue #38551](https://github.com/vllm-project/vllm/issues/38551) |
| **Fixed** | **x86 docker build** | Build failure due to sudo mode in RUN instruction | Closed — [PR #60488](https://github.com/vllm-project/vllm/pull/60488) |

---

## 6. What This Means for Application Developers

1. **Blackwell deployment caution**: If running DeepSeek-V4.1-Flash on RTX PRO 6000 (SM120), expect startup failures due to missing FlashInfer kernels — monitor [Issue #59203](https://github.com/vllm-project/vllm/issues/59203) for fixes. NVFP4 decode on Blackwell is now improved via XQA in [PR #60452](https://github.com/vllm-project/vllm/pull/60452).

2. **GLM-5.3-Flash agentic workloads**: Long-running tool-calling or reasoning-intensive workflows may produce degraded output (repeated tokens). Consider workarounds or monitor [Issue #56868](https://github.com/vllm-project/vllm/issues/56868) — no fix yet.

3. **FP8 + FlashInfer without JIT**: If running without CUDA toolkit or `flashinfer-cubin`, avoid `kv_cache_dtype="fp8"` until [Issue #60262](https://github.com/vllm-project/vllm/issues/60262) is resolved — the auto-backend selection can crash.

4. **Prefix caching + speculative decoding**: DSpark users with prefix caching should test carefully post-upgrade; [Issue #60174](https://github.com/vllm-project/vllm/issues/60174) reports corruption on 0.30/0.31 but not 0.29.

5. **Qwen4Exp on Ampere**: FP8 KV cache now works on older Ampere GPUs (sm_80/sm_86) — upgrade if you were blocked previously.

6. **ROCm users**: Active optimization work continues for Qwen3.8 models on MI355X/gfx950; monitor [Issue #57149](https://github.com/vllm-project/vllm/issues/57149) for upcoming improvements.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the provided GitHub data for SGLang and create a structured digest for 2026-10-09.

Let me go through the data:

## Latest Releases
None in the last 24h

## Latest Issues (top 30 by comment count)
1. #42752 - Flaky tests and CI infrastructure failures (47 comments)
2. #21302 - AITER-Upgrade PR readiness (34 comments)
3. #17050 - CI Test Failures and Fixes tracking (14 comments)
4. #32321 - Apple Silicon serving redesign RFC (11 comments)
5. #40843 - Bug: Severe repetition in GLM-5.3 with DFLASH speculative decoding (10 comments)
6. #33466 - Bug: MiniMax-H3 args error (8 comments) - CLOSED
7. #36333 - Bug: Zombie request in streaming (7 comments)
8. #42170 - Roadmap: DeepSeek V4.1 Optimization (5 comments)
9. #38587 - Bug: Kimi-K3 strict tool-call grammar (5 comments)
10. #30815 - Bug: FP8 KV-cache decode slowdown (5 comments) - CLOSED
11. #43061 - Bug: Deterministic inference + repetition_penalty crashes (4 comments)
12. #36669 - Bug: GLM-5.3-Flash thinking output degeneration (4 comments)
13. #36796 - Performance: Qwen4Exp decode on DGX Spark (3 comments)
14. #22949 - Development Roadmap Q2 2026 (3 comments)
15. #29441 - Bug: Empty content chunk in SSE (3 comments) - CLOSED
16. #40320 - Bug: FlashInfer autotune cache discarded on MoE EP>1 (3 comments)


17. #43142 - Bug: CUDA graphs stay enabled for torch_native attention (2 comments)
18. #34118 - Doc: Invalid links (2 comments) - CLOSED
19. #42173 - RFC: Capability-based device gating (2 comments)
20. #41227 - Bug: json-model-override-args drops rope_theta (2 comments)

## Latest Pull Requests (top 20)
1. #42019 - Gemma4 FA4 on SM90 with head-dim 512 support
2. #42177 - Fix: Normalize nested thinker text config (fixes #43142)
3. #43261 - [Lo

RA, diffusion] Map merged LoRA cache read-only - CLOSED
4. #37446 - Fix: Load FP8 KV-cache scales for Qwen3.5
5. #40925 - Support KV cache sharding for DSA indexer
6. #43253 - Skip KV events and eviction config on disabled radix cache - CLOSED
7. #40929 - Support KV cache sharding for MTP
8. #43177 - Overlap scheduler startup with data parallel controller
9. #39817 - [XPU] Misc changes to support XPU - CLOSED
10. #43244 - [2/N][DSv41] Integrate DeepGEMM MegaGate routing
11. #40816 - feat(dsv4): route A5 compressor to explicit SWA-mapped state
12. #36766 - Support SM100 and SM103 TP8 FlashInfer sequence parallelism
13. #43178 - [diffusion] Report real runtime import error
14. #43028 - [diffusion] Fix LoRA delta scale multiplication
15. #40165 - [NPU][GLM5.2] Support DSA PCP with interleave & zigzag
16. #41875 - [NPU] Resolve DSA KV cache layout from startup capability
17. #43103 - [AMD] Skip Flux2 residual_gate_add PTX on ROCm
18. #33673 - Add MiniMax-M3 DSpark support
19. #36318 - [Diffusion] Add MiniMax-H3 packed varlen path for sla_attn
20. #39606 - [HiCache] Add staged write-back for page-unified KV cache

Now organizing the digest:</think>

# SGLang Digest — 2026-10-09

## Today's Highlights

The SGLang project continues active development across multiple fronts. Key items include ongoing DeepSeek V4.1 optimization work with DeepGEMM MegaGate routing integration (#43244), NPU improvements for Ascend DSA with KV cache layout resolution (#41875), and fixes for several correctness issues affecting deterministic inference and streaming behavior. The CI infrastructure continues to be a focus area with 78 open issues and flaky test tracking (#42752).

---

## Releases & Breaking Changes

No new releases in the last 24 hours.

---

## New Model & Hardware Support

- **Gemma4 FA4 on SM90**: PR [#42019](https://github.com/sgl-project/sglang/pull/42019) enables FlashAttention4 on SM90 with head-dim 512 support for Gemma4 models.
- **MiniMax-M3 DSpark**: PR [#33673](https://github.com/sgl-project/sglang/pull/33673) adds DSpark speculative decoding support using MiniMax-M3 as target and MiniMax-M3-DSpark as draft model.
- **SM100/SM103 TP8 FlashInfer**: PR [#36766](https://github.com/sgl-project/sglang/pull/36766) adds sequence parallelism support for Llama 3.1 70B on newer GPU architectures.
- **XPU Support**: PR [#39817](https://github.com/sgl-project/sglang/pull/39817) brings miscellaneous Intel XPU support changes (quantization, Intel backend).
- **AMD ROCm Flux2 Fix**: PR [#43103](https://github.com/sgl-project/sglang/pull/43103) skips Flux2 residual_gate_add PTX on ROCm to resolve MI355 crashes.

---

## Performance & Optimization

- **DeepSeek V4.1 Optimization**: Issue [#42170](https://github.com/sgl-project/sglang/issues/42170) tracks ongoing work including mHC SP + engram fusion (#43065), q_rope_store folding (#41657), and prefill optimizations.
- **DeepGEMM MegaGate Routing**: PR [#43244](https://github.com/sgl-project/sglang/pull/43244) integrates DeepGEMM MegaGate routing for DSv41 (2/N).
- **KV Cache Sharding**: PRs [#40925](https://github.com/sgl-project/sglang/pull/40925) and [#40929](https://github.com/sgl-project/sglang/pull/40929) add pool-level KV cache sharding support for DSA indexer and MTP respectively.
- **Scheduler Startup Overlap**: PR [#43177](https://github.com/sgl-project/sglang/pull/43177) overlaps scheduler startup with data parallel controller initialization to reduce cold-start latency.
- **Staged Write-back for HiCache**: PR [#39606](https://github.com/sgl-project/sglang/pull/39606) adds staged write-back for page-unified KV cache layout.
- **LoRA Read-only Mapping**: PR [#43261](https://github.com/sgl-project/sglang/pull/43261) maps merged LoRA cache read-only to reduce memory overhead on shared CPU/GPU pools.
- **Qwen4Exp Performance**: Issue [#36796](https://github.com/sgl-project/sglang/issues/36796) documents QSA/PLE/GDN kernel dominance on DGX Spark (SM121), requesting SM121 tuning.

---

## Stability & Regressions

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| **High** | [#43061](https://github.com/sgl-project/sglang/issues/43061) | `--enable-deterministic-inference` + `repetition_penalty` crashes scheduler on granite-4.0-h (torch.compile error in `apply_scaling_penalties`) | Open |
| **High** | [#40843](https://github.com/sgl-project/sglang/issues/40843) | Severe repetition and degenerate loops in GLM-5.3 with DFLASH speculative decoding | Open |
| **Medium** | [#43142](https://github.com/sgl-project/sglang/issues/43142) | CUDA graphs stay enabled for `torch_native` attention when platform fallback selects it | Open; fix in [#42177](https://github.com/sgl-project/sglang/pull/42177) |
| **Medium** | [#36333](https://github.com/sgl-project/sglang/issues/36333) | Disconnected streaming client leaves zombie request decoding to max_tokens (regression from #34160 revert) | Open |
| **Medium** | [#40320](https://github.com/sgl-project/sglang/issues/40320) | FlashInfer autotune cache discarded on every boot with MoE EP>1 | Open |
| **Medium** | [#41227](https://github.com/sgl-project/sglang/issues/41227) | `--json-model-override-args` with rope_scaling drops `rope_theta` for models without fallback (Llama-3.2-3B GSM8K regression) | Open |
| **Low** | [#43094](https://github.com/sgl-project/sglang/issues/43094) | `num_matched_prefix_tokens` stays 0 for cache-agnostic policies (fcfs, lof, random, routing-key) | Open |

**CI/Infra**: Issue [#42752](https://github.com/sgl-project/sglang/issues/42752) tracks flaky tests and CI infrastructure failures (47 comments). Tracking issue [#17050](https://github.com/sgl-project/sglang/issues/17050) reports 1 broken, 4 flaky tests on main.

---

## What This Means for Application Developers

1. **Deterministic Inference Users**: Avoid combining `--enable-deterministic-inference` with `repetition_penalty` on granite-4.0-h until [#43061](https://github.com/sgl-project/sglang/issues/43061) is fixed—this causes scheduler crashes.

2. **GLM-5.3 Speculative Decoding Users**: Be aware of potential repetition issues with DFLASH speculative decoding ([#40843](https://github.com/sgl-project/sglang/issues/40843)); monitor outputs for quality degradation.

3. **Apple Silicon Deployment**: The RFC [#32321](https://github.com/sgl-project/sglang/issues/32321) outlines a redesign for Apple Silicon serving using Torch-owned SRT path with exported MLX region—feedback welcome for the roadmap.

4. **DeepSeek V4.1 Coming**: Optimization work in progress ([#42170](https://github.com/sgl-project/sglang/issues/42170)) will bring improved performance; track progress for production readiness.

5. **Streaming Applications**: If using streaming with tool calls, monitor for potential zombie requests when clients disconnect ([#36333](https://github.com/sgl-project/sglang/issues/36333)).

6. **LoRA Users**: The fix in [#43028](https://github.com/sgl-project/sglang/pull/43028) ensures LoRA delta is multiplied by scale at most once—important if using custom LoRA configurations.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a llama.cpp digest for 2026-10-09 based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me go through the releases first:

**Releases (last 24h):**
- b11514: Musa FWHT fix (#30167)
- b11513: CUDA improve top-k algorithm selection (#28713)
- b11512: model fix DFlash output head sharing (#30111)
- b11511: CUDA fix MMQ out-of-bounds reads (#29953)
- b11510: CUDA looped PAD kernel for more than 65535 rows or slices (#30147)
- b11509: CUDA fix CCCL version guard breaking on major version rollover (#29453)
- b11507: llama support MoE cache over multiple GPUs (#30112)
- b11505: vulkan fix TOP_K for +inf/NaN inputs and k = 1 on negative values (#30107)
- b11503: vendor update cpp-httplib to 0.60.1 (#30134)
- b11501: sycl FWHT optimizations (#29605)

**Issues (by comment count):**
- #21725: XDNA backend feature request (34 comments)
- #25593: Eval bug - SM_60 Quality Loss (21 comments)
- #15846: Vulkan/MoltenVK RDNA1 cards gibberish (19 comments)
- #29811: Assert at startup with Qwen 3.8 flash with MTP (19 comments)
- #26447: Vega 8 iGPU Vulkan errors at 50K context (12 comments)
- #25913: /slots save/restore loses prompt reuse (12 comments)
- #25992: server -np 4 returns other requests' responses (11 comments)


- #27282: MTP reserves separate CUDA compute arena (11 comments)
- #27725: Memory Leak Issue (11 comments)
- #24473: Compact Conversation Action feature (10 comments)
- #29949: MoE expert cache with GPU-resident LRU (10 comments)
- #30033: Performance degradation since #29622 (10 comments)
- #27638: Flash Attention fallback to SCALAR path (9 comments)

**Pull Requests:**
- #30167: musa Fix for FWHT shared memory bug (CLOSED)
- #30112: llama support MoE cache over multiple GPUs (CLOSED)

I've compiled the key performance issues and pull requests from the past day. The most pressing concerns involve CUDA memory allocation for MTP, potential memory leaks, and performance regressions tied to recent changes. The closed pull requests address hardware-specific bugs in Musa and multi-GPU support for MoE architectures.</think>

# llama.cpp Digest — 2026-10-09

## Today's Highlights

The past 24 hours saw significant CUDA backend work, including top-k algorithm improvements that cut kernel launches dramatically for large token counts, plus multi-GPU MoE cache support for expert routing across GPUs. Vulkan saw fixes for TOP_K edge cases with infinity/NaN inputs, while the SYCL backend received FWHT optimizations.

---

## Releases & Breaking Changes

| Version | Commit | Change |
|---------|--------|--------|
| b11514 | `b11514` | Musa FWHT fix — resolves shared memory overflow on MUSA `mp_21` (requires ≤28672 bytes, was allocating 33300) |
| b11513 | `b11513` | CUDA: improved top-k algorithm selection; switches to radix select for large row counts |
| b11512 | `b11512` | Fixed DFlash output head sharing; ensures tied word embeddings read correctly from GGUF metadata |
| b11511 | `b11511` | CUDA: fixed MMQ out-of-bounds reads (#29953) |
| b11510 | `b11510` | CUDA: looped PAD kernel for matrices exceeding 65535 rows/slices |
| b11509 | `b11509` | CUDA: fixed CCCL version guard (major version rollover edge case) |
| b11507 | `b11507` | **Multi-GPU MoE cache support** — expert cache now spans multiple GPUs |
| b11505 | `b11505` | Vulkan: fixed TOP_K handling for +inf/NaN inputs and k=1 on negative values |
| b11503 | `b11503` | Updated cpp-httplib to 0.60.1 |
| b11501 | `b11501` | SYCL: FWHT optimizations |

---

## New Model & Hardware Support

- **MiniCPM-V 4.7** — PR #29416 adds support; uses existing MiniCPM-V 4.6 path extended with 3D RoPE handling
- **MUSA backend** — Fixed FWHT kernel compatibility (shared memory sizing)

---

## Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **CUDA top-k** | Replaced per-row `DeviceTopKKernel` with grid-over-rows radix select (gated on `GGML_CUDA_TOPK_RADIX_MIN_ROWS`) | On qwen4exp at 34,816 tokens: **1,671,253 → ~5,761 launches** (99.6% reduction); concrete speedup not stated but kernel launch overhead eliminated |
| **SYCL FWHT** | FWHT optimizations (#29605) | Improved throughput on SYCL backends |
| **Multi-GPU MoE** | Expert cache now distributes across GPUs (#30112) | Benchmarks on 2× RTX 4090 (layer split) with Qwen3.8-Flash-Next Q4_0 (93.7 GiB, 65 GiB experts) — see PR for t/s gains |
| **CUDA PAD kernel** | Looped dispatch for >65535 rows | Eliminates failures on large-batch scenarios |
| **Vulkan concat** | New 32×32 LDS-tiled shader for transposed dim-0 concat (#30149) | Optimizes recurrent architectures (gated delta net, Mamba2) |
| **OpenCL** | Fused residual add into rms_norm*w; chunkwise gated delta net prefill; mamba2 ssm_scan row folding | Targeting Adreno A6x improvements (#30182–#30185) |

---

## Stability & Regressions

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| **#25593**: SM_60 (Tesla P100) quality loss — FP32 math silently done in FP16 | **High** | Open | Affects CUDA on older Volta cards; two forks have fixes; needs upstream resolution |
| **#29811**: Assert at startup running Qwen 3.8 Flash with MTP | **High** | Open | Regression in speculative decoding path |
| **#26447**: Vulkan context >50K tokens triggers `ErrorDeviceLost` on Vega 8 iGPU | **Medium** | Open | GTT fallback silently degrades performance |
| **#25992**: Server returns other requests' responses under parallel load on integrated HIP GPU (gfx1151) | **Medium** | Closed (stale) | Bisected to commit c7d87229; cross-request data leakage |
| **#27282**: MTP reserves separate CUDA compute arena → OOM; shared gallocr fixes | **Medium** | Closed (stale) | Reduces fitted context size unnecessarily |
| **#30033**: Performance regression since #29622 on dual Intel B70 with Qwen3.8-Flash-Next | **Medium** | Open | SYCL backend regression |
| **#30000**: Vulkan prompt processing 16–19% slower for Q8_0 on RTX 5060 Ti since #25773 | **Medium** | Open | Bisection in progress |
| **#27638**: Flash Attention scalar fallback causes O(N²) PP degradation on Intel Arc B580 | **Low** | Open | ANV/Vulkan backend issue |

---

## What This Means for Application Developers

1. **Multi-GPU MoE deployments** — If running MoE models (e.g., Mixtral, Qwen-MoE) across multiple GPUs, the new cache sharing in b11507 should improve expert token routing efficiency. Update your deployment to leverage layer splitting.

2. **CUDA users on older hardware** — The top-k algorithm change in b11513 significantly reduces kernel launch overhead for large batch sizes. However, **issue #25593** on SM_60 (Tesla P100, older Quadro) warrants testing before upgrading production — FP16 precision loss can silently corrupt outputs.

3. **Vulkan users** — The TOP_K fix (#30107) resolves edge cases with malformed inputs. If you handle untrusted model outputs, ensure you're on b11505+.

4. **Server operators** — Default port changing to 9931 (#30159) is in progress; update any automation expecting port 8080.

5. **SYCL/OpenCL users** — Multiple optimizations landed for decode and prefill flash attention on Intel GPUs and Adreno. If you're on older SYCL builds, upgrading may yield measurable throughput gains.

---

*Digest generated from ggml-org/llama.cpp activity on 2026-10-09.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate an Ollama digest for 2026-10-09 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me organize the information:

## Releases
- v0.40.2 released with 2 changes:
  1. README: add oxi to community integrations
  2. server: hide duplicate and downgrade guards from list

## Issues (Total: 28 items)
Let me categorize them:

### Feature Requests (Open)
- #2169: OpenVINO on Intel (95 👍)
- #15917: Intel GPU/NPU Support
- #18871: Model Request: Index Translate family
- #13310: Ministral-3 reasoning Variants

### Bugs (Open/Recent)
- #18796: fails to run on a 2nd 'ollama run' (RPI 5, debian 13)
- #8107: version set incorrectly on local build
- #18846: macOS MLX "Maximum threads" error (regression from 0.35.1)
- #18123: Regression: timed out waiting for llama-server (VM with virtio-gpu)
- #18825: Failed to pull embeddinggemma-2:740m on linux (MLX error)
- #12362: JSON reply schema ignored by Cloud model
- #18824: gemma4:12b GGUF gets wrong renderer
- #18863: image generation models not supported
- #18785: lfm2:24b "python" token decoded as empty string
- #18830: duplicate model after GGUF migration
- #18655: response ids have only 999 possible values
- #18856: MLX runner panic with qwen3.6:35b-mlx (regression from 0.35.0)


- #18885: mlx runner panic with gemma4:e2b-mlx
- #18869: ffn_down_exps.weight size overflows
- #18865: Clef n_ubatch forced to n_ctx causing OOM
- #18861: gemma4 with think:false empty reply after tool response

### Cloud Issues
- #18880: cloud model return empty response
- #18853: deepseek-v4.1-flash:cloud returns 500 with large image input
- #18864: probabilities output is messed up
- #18898: responses API streaming issues

### Pull Requests (47 items, top 20 shown)
Key PRs to highlight:
- #18887: launch: include installed models in Codex /model picker
- #18886: mlx: preserve generation panics during cleanup
- #18884: docs: describe multimodal embedding inputs
- #18883: ci: harden download steps with retries
- #18882: Remove llama.cpp compatibility patches and migrate legacy GGUFs
- #18881: llm: include eos tokens in raw generate responses
- #18877: thinking: split Mistral [THINK] reasoning tags
- #18050: README: update Msty link to msty.ai
- #17894: chat: always preserve the most recent user message during truncation
- #18828: docs: restructuring
- #18693: Add AgentBridge to Frameworks & Agents

Now I'll structure this into the digest format.</think>

# Ollama Digest — 2026-10-09

## 1. Today's Highlights

The Ollama project released **v0.40.2** with minor documentation and server-side improvements. A significant PR (#18882) landed to remove legacy llama.cpp compatibility patches and migrate GGUFs on load, marking progress toward upstream compatibility. However, multiple MLX regression reports emerged for Apple Silicon users on 0.40.x, with failures across qwen3.6:35b-mlx and gemma4:e2b-mlx models—a regression absent in 0.35.x.

---

## 2. Releases & Breaking Changes

| Version | Changes | Links |
|---------|---------|-------|
| **v0.40.2** | README: added oxi to community integrations; server: hide duplicate and downgrade guards from list | [Release](https://github.com/ollama/ollama/releases/tag/v0.40.2) |

**Migration Note:** PR #18882 introduces on-disk GGUF migration for legacy models. Users running older GGUF files may experience conversion on first load.

---

## 3. New Model & Hardware Support

- **OpenVINO Support Request (Active):** Issue #2169 (95 👍) tracks demand for Intel GPU/NPU inference via OpenVINO. Related feature request #15917 also requests Vulkan auto-detection for Intel hardware.
- **Ministral-3 Reasoning Variants:** Issue #13310 requests reasoning variants for the newly available Ministral-3 model on Ollama.
- **Index-Translate Family:** Model request #18871 for translation models from HuggingFace's IndexTeam.

---

## 4. Performance & Optimization

| Area | PR/Issue | Status |
|------|----------|--------|
| **CI Reliability** | #18883: harden download steps with retries | OPEN |
| **Model Loading** | #18882: remove llama.cpp patches, migrate legacy GGUFs | OPEN |
| **Token Handling** | #18881: include EOS tokens in raw generate responses | OPEN |
| **Memory/Cache** | #18886: preserve MLX generation panics during cleanup | OPEN |

---

## 5. Stability & Regressions

### Critical / High Severity

| Issue | Description | Severity | Status |
|-------|-------------|----------|--------|
| [#18856](https://github.com/ollama/ollama/issues/18856) | MLX runner panic with qwen3.6:35b-mlx — regression from 0.35.0 | **Critical** | OPEN |
| [#18885](https://github.com/ollama/ollama/issues/18885) | MLX panic on gemma4:e2b-mlx (Mac Mini M6) | **Critical** | OPEN |
| [#18846](https://github.com/ollama/ollama/issues/18846) | macOS MLX "Maximum threads" error (0.40.0) | **Critical** | OPEN |
| [#18869](https://github.com/ollama/ollama/issues/18869) | `ffn_down_exps.weight size overflows` on gpt-oss:latest | **Critical** | OPEN |

### Medium Severity

| Issue | Description | Status |
|-------|-------------|--------|
| [#18123](https://github.com/ollama/ollama/issues/18123) | Regression: timeout waiting for llama-server (virtio-gpu VM) | OPEN |
| [#18796](https://github.com/ollama/ollama/issues/18796) | Stuck on 2nd `ollama run` (RPI 5, systemd) | OPEN |
| [#18865](https://github.com/ollama/ollama/issues/18865) | Clef: n_ubatch forced to n_ctx causing OOM | OPEN |
| [#18830](https://github.com/ollama/ollama/issues/18830) | Duplicate model entries after GGUF migration | OPEN |

### Cloud-Specific

| Issue | Description | Status |
|-------|-------------|--------|
| [#18880](https://github.com/ollama/ollama/issues/18880) | Cloud model returns empty response | OPEN |
| [#18853](https://github.com/ollama/ollama/issues/18853) | deepseek-v4.1-flash:cloud 500 error with large image input | OPEN |
| [#12362](https://github.com/ollama/ollama/issues/12362) | JSON reply schema ignored by cloud model | OPEN |

---

## 6. What This Means for Application Developers

1. **Avoid MLX-based models on 0.40.x if stability is critical.** Multiple users report panics with qwen3.6:35b-mlx and gemma4:e2b-mlx on Apple Silicon. Downgrading to 0.35.x is the recommended workaround until fixes land.

2. **GGUF migration is now automatic.** Legacy GGUF models will be converted on first load. First-run latency may increase, but compatibility improves.

3. **Response ID space is limited.** Issue #18655 notes OpenAI-compatible endpoints use only 999 unique IDs (`chatcmpl-0` through `chatcmpl-998`). High-throughput applications may see collisions.

4. **Context window issues persist with tool loops.** PR #17894 addresses truncation issues where multi-step tool calls exceed context, returning "no user query found" errors.

5. **Codex integration improvements.** PR #18887 will include installed models in the Codex picker, and #18875 adds a home menu for model/agent selection.

---

*Generated from GitHub data for 2026-10-09*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest based on the provided GitHub data. Let me analyze the information and create a structured digest following the specified format.

Let me organize the key information:

## Releases (last 24h)
- v1.106.0-dev.2
- v1.105.0-rc.3
- v1.104.2
- v1.102.4
- v1.101.6

All releases include Docker image signature verification with cosign.

## Issues (top by comments)
1. #12685 - Heavy RAM Usage over time (CLOSED, 61 comments, 22 👍)
2. #27954 - Heavy RAM usage in Kubernetes (OPEN, 12 comments)
3. #18801 - Streaming + logprobs fails for vLLM (CLOSED, 7 comments)
4. #20482 - ProxyException instead of unauthenticated (CLOSED, 7 comments)
5. #43487 - Partial generic streaming chunk accepted then KeyError (OPEN, 7 comments)
6. #32045 - Request log shows Cache Hit: False for prompt-cache (CLOSED, 6 comments)
7. #26973 - Add gemma4 to model_prices_and_context_window.json (CLOSED, 5 comments)
8. #37102 - Bedrock CountTokens understatements (OPEN, 5 comments)
9. #45422 - GitHub BYOK token counting not operational (OPEN, 5 comments)
10. #35563 - Reused provider response IDs collide in spend logs (OPEN, 4 comments)
11. #45378 - Mistral content truncation (OPEN, 4 comments)
12. #33021 - Componentized startup ignores YAML DB pool settings (OPEN, 4 comments)
13. #40887 - Responses-to-Chat streaming drops role/reasoning (OPEN, 4 comments)


14. #35524 - Budgeted requests skip reservation (CLOSED, 4 comments)
15. #35536 - Security: Responses ID checks (CLOSED, 4 comments)

I notice several high-impact issues affecting reliability and data integrity. The Kubernetes RAM problem remains critical with 12 comments, while streaming and token counting bugs could impact user experience. There's also a concerning security issue around response ID validation that needs attention.

16. #44830 - Character Sequence in API Key treated as special (OPEN, 4 comments)
17. #45284 - OTel gen_ai.operation.name missing (OPEN, 3 comments)
18. #43316 - Responses bridge returns tool call as TWO choices (CLOSED, 3 comments)
19. #25456 - Chat completions → Responses API bridge file_id with URL (OPEN, 3 comments)
20. #27184 - Bedrock Claude 4.6 tool_choice.type required (OPEN, 3 comments)
21. #44869 - Complexity router max_tokens behavior (OPEN, 3 comments)
22. #33328 - Replicate timestamp in seconds treated as ms (OPEN, 3 comments)
23. #36941 - budget_limits reset splits counter state (OPEN, 3 comments)
24. #43491 - Spend caches lose concurrent increments (OPEN, 3 comments)

The API key parsing issue and OpenTelemetry gaps are worth monitoring, alongside the budget state management problems that could cause accounting inconsistencies.

25. #35527 - Security: drain endpoint anonymous (CLOSED, 3 comments)
26. #35533 - Redis limiter fallback visibility (CLOSED, 3 comments)
27. #42200 - Cost tracking for Jev on OpenRouter (CLOSED, 3 comments)
28. #38081 - Performance guidance for 500M TPM (OPEN, 3 comments)
29. #31586 - http → https issue (OPEN, 2 comments)
30. #45457 - google-genai stream retry issue (OPEN, 2 comments)

Several security and configuration issues are now resolved, while performance scaling discussions continue. The stream retry bug needs attention for Google GenAI integration reliability.

## Pull Requests (notable)
1. #45488 - fix(bedrock): GPT-6.1-sol context window from model card
2. #41100 - refactor(lint): allow dict and mapping annotations
3. #45487 - feat(telemetry): AggregatingSink, fixed-bucket histograms
4. #45482 - fix(bedrock): GPT-6.1-sol ultrafast tier prices
5. #38245 - fix(openai): TLS config per-call
6. #45241 - feat(github_copilot): per-user GitHub OAuth
7. #43827 - fix(dashscope): forward rerank instruction
8. #45211 - build(deps): bump github-actions
9. #45484 - feat(telemetry): litellm.telemetry records
10. #45486 - test(router): inject clock into LowestCostLoggingHandler
11. #45485 - fix(ci): import seed_tracing_fixtures
12. #45483 - fix(proxy): return 4xx for OCR errors
13. #45473 - fix(bedrock): Grok 4.7 Claude Code tool results
14. #45481 - feat(ui): evaluation mode in Add Model form
15. #41836 - fix(vertex_ai): route Model Garden through generateContent
16. #45472 - fix(router): match deployment pricing within provider
17. #45135 - test: consolidate Python tests for Rust
18. #45158 - feat(microsoft_365_copilot): add M365 Copilot provider
19. #45369 - fix(mcp): log and bill MCP auto-execute follow

Telem etry infrastructure and Bedrock model support dominate the PRs, with notable work on OpenAI TLS configuration, GitHub OAuth integration, and M365 Copilot provider addition. Router pricing logic and MCP execution logging are also being refined.</think>

# LiteLLM Digest — 2026-10-09

## 1. Today's Highlights

**RAM leak remains the dominant issue** — two high-comment issues (#12685 closed with 61 comments, #27954 open with 12 comments) document progressive memory growth requiring pod restarts. The team shipped new telemetry infrastructure (`AggregatingSink`, fixed-bucket histograms) to improve observability into request patterns that may help diagnose such issues. Meanwhile, the project continues expanding multi-provider support with Microsoft 365 Copilot OAuth and per-user GitHub OAuth now in progress.

---

## 2. Releases & Breaking Changes

| Version | Notes |
|---------|-------|
| [v1.106.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-dev.2) | Dev release |
| [v1.105.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-rc.3) | Release candidate |
| [v1.104.2](https://github.com/BerriAI/litellm/releases/tag/v1.104.2) | Stable |
| [v1.102.4](https://github.com/BerriAI/litellm/releases/tag/v1.102.4) | Stable |
| [v1.101.6](https://github.com/BerriAI/litellm/releases/tag/v1.101.6) | Stable |

**All Docker images now signed with cosign** — verify with the key from commit `0112e53`. No breaking changes flagged in this cycle.

---

## 3. New Model & Hardware Support

- **GPT-6.1 Sol (AWS Bedrock)** — context window pulled from Bedrock model card (1M input tokens), ultrafast tier prices added ([PR #45488](https://github.com/BerriAI/litellm/pull/45488), [PR #45482](https://github.com/BerriAI/litellm/pull/45482))
- **Grok 4.7 Claude Code on Bedrock** — fixed tool result handling for Converse and native Chat Completions ([PR #45473](https://github.com/BerriAI/litellm/pull/45473))
- **Vertex AI Model Garden** — routed through `generateContent` adapter ([PR #41836](https://github.com/BerriAI/litellm/pull/41836))
- **Gemma 4** — added to `model_prices_and_context_window.json` ([Issue #26973](https://github.com/BerriAI/litellm/issues/26973))

---

## 4. Performance & Optimization

- **Telemetry aggregation** — new `AggregatingSink` folds per-request events into dimension-keyed rows with token sums and fixed-bucket latency histograms, reducing volume while preserving traffic shape visibility ([PR #45487](https://github.com/BerriAI/litellm/pull/45487))
- **Telemetry sink protocol** — `litellm/telemetry/` added with frozen record types as a stable allowlist interface ([PR #45484](https://github.com/BerriAI/litellm/pull/45484))
- **Router clock injection** — `LowestCostLoggingHandler` now accepts injected time to avoid minute-boundary race conditions in tests ([PR #45486](https://github.com/BerriAI/litellm/pull/45486))
- **Per-call TLS configuration** — SSL verification now applies to HTTP client rather than leaking into request body ([PR #38245](https://github.com/BerriAI/litellm/pull/38245))
- **Scaling guidance** — open request for documentation on 500M TPM with PostgreSQL-heavy traffic ([Issue #38081](https://github.com/BerriAI/litellm/issues/38081))

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | RAM leak over time — pods crash after days under load | [#12685](https://github.com/BerriAI/litellm/issues/12685) closed, [#27954](https://github.com/BerriAI/litellm/issues/27954) open | — |
| **High** | GitHub BYOK token counting returns zero (v1.103.1 → v1.104.2 regression) | [#45422](https://github.com/BerriAI/litellm/issues/45422) open | — |
| **Medium** | Mistral content returned as list chunks truncated to last `text` chunk | [#45378](https://github.com/BerriAI/litellm/issues/45378) open | — |
| **Medium** | Bedrock `CountTokens` unsupported for Claude Opus/Sonnet 5 → understated token counts | [#37102](https://github.com/BerriAI/litellm/issues/37102) open | — |
| **Medium** | Spend caches lose concurrent increments — undercounts user/team/tag spend | [#43491](https://github.com/BerriAI/litellm/issues/43491) open | — |
| **Medium** | Budget limits reset can split counter and reset timestamp state | [#36941](https://github.com/BerriAI/litellm/issues/36941) open | — |
| **Low** | OTel `gen_ai.operation.name` missing when `turn_off_message_logging` enabled | [#45284](https://github.com/BerriAI/litellm/issues/45284) open | — |
| **Low** | Google GenAI stream dropped before first chunk not retried | [#45457](https://github.com/BerriAI/litellm/issues/45457) open | — |

---

## 6. What This Means for Application Developers

1. **If you run LiteLLM in production** — monitor memory usage closely; the RAM leak may manifest after days of heavy request volume. Budget for pod restarts or watch for v1.106 fixes.

2. **If you use GitHub Copilot BYOK** — token counting is broken in v1.104.2; stick on v1.103.1 or wait for a fix before relying on spend logs.

3. **If you use Bedrock models** — GPT-6.1 Sol now has correct context windows (1M tokens) and ultrafast pricing; ensure your config picks up the updated model card values.

4. **If you need Microsoft 365 Copilot** — new OAuth-based provider is landing ([PR #45158](https://github.com/BerriAI/litellm/pull/45158)), enabling delegated user tokens for Graph Copilot Chat API.

5. **If you use streaming with `logprobs`** — the vLLM-backed streaming bug is closed; verify your version includes the fix if you encountered `PydanticSerializationError`.

6. **If you rely on cost tracking** — the spend cache concurrency bug means concurrent requests may undercount; review logs if precise per-user spend matters.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate an Unsloth digest for 2026-10-09 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Key observations from the data:

1. **Latest Release**: v0.1.905-beta - Train your own Decision model, native ComfyUI models, diffusion improvements, better Browser in Desktop

2. **Issues (top by comments)**:
   - #1886: AssertionError with VLLM dynamic quantized models (35 comments)
   - #512: LLVM ERROR with nvvm.shfl.sync (22 comments)
   - #2482: RuntimeError PassManager failure on T4 GPU (19 comments)
   - #1672: GRPO training garbage outputs (16 comments)
   - #638: Can't load CodeLlama-13b (15 comments)
   - #1801: VRAM spikes after LlamaForCausalLM fix (15 comments)
   - And more...

3. **Pull Requests**:
   - #13107: Studio show Gemini's thinking
   - #13113: Fix chat import branch threads
   - #13112: Colour companion downloads by model
   - #13109: Reopen chat on branch
   - #13111: Decision score with likely level
   - #13039: React/TypeScript live previews
   - #13096: Gemma 4 web search on safetensors
   - #13108: Fix TRL PPOTrainer under Unsloth
   - #12951: GPU cache for MoE experts
   - And more...

Let me structure this into the requested format with all 6 sections.</think>

# Unsloth Digest — 2026-10-09

## 1. Today's Highlights

The v0.1.905-beta release introduces **Decision Model training**, enabling any text or vision LLM to be transformed into a Jev-style decision model with accuracy improvements from 30% to 80%. Studio also gains native ComfyUI model support, diffusion improvements, and an enhanced browser. On the PR side, significant work landed around TRL PPOTrainer compatibility (#13108), MoE expert memory management (#12950, #12951), and React/TypeScript live previews in chat (#13039).

## 2. Releases & Breaking Changes

| Version | Change | Link |
|---------|--------|------|
| v0.1.905-beta | **Decision Model training** — Turn any text/vision LLM into a decision model; native ComfyUI models; diffusion improvements; better Desktop browser | [Release](https://github.com/unslothai/unsloth/releases) |

No explicit breaking changes flagged in the 24h window.

## 3. New Model & Hardware Support

| Feature | Details | Link |
|---------|---------|------|
| Decision models | New fine-tuning pathway for Jev-style decision models; includes train/test/export/serve workflow | [Release](https://github.com/unslothai/unsloth/releases) |
| ComfyUI models | Native support in Desktop/Studio | [Release](https://github.com/unslothai/unsloth/releases) |
| Gemma 4 on safetensors | Web search and tool results now work | [#13096](https://github.com/unslothai/unsloth/pull/13096) |
| M5 Max (48 GB) | Qwen Image 2.1 Q4_K_M tested — reports of insufficient memory (open) | [#11792](https://github.com/unslothai/unsloth/issues/11792) |

## 4. Performance & Optimization

| Area | Change | PR / Issue |
|------|--------|------------|
| **MoE expert memory** | `--ubatch-size 2048` when MoE experts spill to RAM (was 512) | [#12950](https://github.com/unslothai/unsloth/pull/12950) |
| **MoE GPU cache** | `--moe-cache-mib auto` for pinning routed experts in VRAM | [#12951](https://github.com/unslothai/unsloth/pull/12951) |
| **PPO buffer leak** | Freed 1.2 GB buffer that PPO kept alive unnecessarily | [#13108](https://github.com/unslothai/unsloth/pull/13108) |
| **Scroll performance** | Message hover stability during wheel scroll on long threads | [#13077](https://github.com/unslothai/unsloth/pull/13077) |
| **Context bar** | Now fills for Ollama connections | [#13106](https://github.com/unslothai/unsloth/pull/13106) |

## 5. Stability & Regressions

| Severity | Issue | Status | Comments |
|----------|-------|--------|----------|
| **High** | VLLM serving dynamic quantized models — `AssertionError` shape mismatch | [Open](https://github.com/unslothai/unsloth/issues/1886) | 35 comments; affects quantized model inference |
| **High** | `RuntimeError: PassManager::run failed` on T4 GPU training | [Closed](https://github.com/unslothai/unsloth/issues/2482) | 19 comments; Colab T4 specific |
| **Medium** | GRPO training produces mangled/garbage outputs | [Closed](https://github.com/unslothai/unsloth/issues/1672) | 16 comments; EOS token handling suspected |
| **Medium** | VRAM spikes after "LlamaForCausalLM does not accept 'num_items_in_batch'" | [Closed](https://github.com/unslothai/unsloth/issues/1801) | 15 comments |
| **Medium** | CodeLlama-13b load failure | [Closed](https://github.com/unslothai/unsloth/issues/638) | 15 comments |
| **Medium** | LLVM `nvvm.shfl.sync.bfly.i32` error post-conda install | [Closed](https://github.com/unslothai/unsloth/issues/512) | 22 comments; CUDA/xFormers version mismatch |
| **Medium** | OOM on WSL with 24G VRAM while 2/3 unused | [Closed](https://github.com/unslothai/unsloth/issues/1797) | 7 comments |

**Fixes landed:**
- TRL PPOTrainer crash, KL penalty, and importance ratio computation — [#13108](https://github.com/unslothai/unsloth/pull/13108)
- Import branch threads parents-before-children on refresh — [#13113](https://github.com/unslothai/unsloth/pull/13113)
- Deep Research now uses MCP server search tools — [#13103](https://github.com/unslothai/unsloth/pull/13103)

## 6. What This Means for Application Developers

1. **Decision models are now first-class** — If you're building agentic workflows requiring structured decision-making, v0.1.905-beta provides an end-to-end training pipeline with claimed 30→80% accuracy gains. Expect lower latency when serving these via Unsloth's built-in export.

2. **MoE inference is more predictable** — The combination of `--ubatch-size 2048` and `--moe-cache-mib auto` should reduce tail latency when running Mixtral-class models on limited VRAM. If you're running Qwen-Image-2.1 or similar MoE vision models, test the latest Studio build.

3. **PPO/GRPO training is more stable** — The #13108 fix resolves the rollout crash, KL penalty miscalculation, and a 1.2 GB buffer leak. If you're using TRL's PPOTrainer or GRPOTrainer, upgrade; this removes a common source of OOM during RL training.

4. **Watch the VLLM quantization issue** — Issue #1886 remains open. If you serve quantized models (4-bitbnb, GGUF) through VLLM, validate your serving pipeline before production use. The direct HuggingFace pull path works; custom quantized weights may need debugging.

5. **Studio UX refinements** — Long conversation scroll performance (#13077), context bar for Ollama (#13106), and React live previews (#13039) improve the desktop application experience. If you're building interactive demos, the live preview feature enables richer chat UI.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*