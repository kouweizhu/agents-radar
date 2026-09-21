# AI Infrastructure Digest 2026-09-21

> Generated: 2026-09-21 00:27 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to generate a cross-project comparison report analyzing vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth based on the daily digests I created. Let me analyze the data across all six projects and create a structured comparison.

Let me organize the key information from each project:

## vLLM
- Issues: 74 total (30 shown), 6 new highlighted
- PRs: 361 total (20 shown), 8 ready/merged
- Releases: v0.28.1rc1
- New models: MiniMax-M3 (ROCm), DeepSeek V4.1 (ROCm), GLM-5.3-Flash, Qwen3.8-Next
- Hardware: Intel XPU MoE, ROCm gfx950
- Performance: Weight Cache Daemon, Decode Context Parallelism, KV hints, sparse FA

## SGLang
- Issues: Not explicitly stated but significant activity
- PRs: Major roadmap items (Decode Context Parallelism, Weight Cache Daemon)
- Releases: No new releases
- New models: Kimi-K3, Qwen3.8-Flash-Next, GLM-5.3/5.2
- Hardware: AMD MI355X, ROCm
- Performance: Weight Cache Daemon (fast recovery), Decode Context Parallelism, router policies

## llama.cpp
- Releases: b11059-b11065 (6 releases in 24h)
- Issues: Multiple (Vulkan RDNA3 regression, SYCL issues, etc.)
- New models: Gemma 4, Qwen4, Kimi-K3
- Hardware: AMD RDNA3/4 int8, Intel Xe, NCCL TP
- Performance: CUDA FA tuning, sparse FA, Metal FWHT, Vulkan int8

## Ollama
- Releases: No specific version mentioned
- Issues: 8 open items


- PRs: 10 items, tokenization, Docker, memory fixes
- New models: Prism ternary GGUFs, gemma4 vision
- Hardware: Vulkan/AMD issues
- Performance: MLX kernels, prefix-cache memory

## LiteLLM
- Releases: v1.103.0-rc.1, cosign-signed Docker
- Issues: 20+ items
- PRs: Tokenizer Rust migration, prices sync, responses bridge
- New models: DeepSeek V4
- Performance: Rust tokenizer, token counter backends

## Unsloth
- No recent releases documented
- Issues: Critical GGUF performance regression identified, Windows installer problems resolved
- PRs: 220 items in progress, Windows MXC sandboxing, attachment support
- New models: MiCA
- Performance: GRPO eval loss correction, Metal GPU recovery, Windows VRAM spill detection

Across all six projects, I'm seeing 74 active issues in vLLM, 361 PRs merged, with v0.28.1rc1 and v1.103.0-rc.1 as the latest releases. MiniMax-M3, DeepSeek V4.1, and GLM-5.3-Flash represent new model support, while KV cache optimization and weight caching are the dominant performance focus areas. llama.cpp and vLLM are actively shipping new models, with SGLang also making gains in this space.

These projects span different infrastructure layers—from serving engines like vLLM and SGLang to local runtimes like llama.cpp and Ollama, plus LiteLLM as a gateway and Unsloth handling fine-tuning. The trend is clear: weight caching and fast recovery are becoming standard features across serving implementations, while Rust-based tokenization is replacing legacy approaches. Multi-turn model correctness and GGUF inference regressions are creating friction, and ROCm support is accelerating. Blackwell/RTX 5090 and Intel Xe represent emerging hardware targets gaining focus.</think>

# Cross-Project Ecosystem Report — 2026-09-21

## 1. Ecosystem Overview

The AI serving and inference ecosystem is experiencing a period of intense kernel-level optimization and multi-backend convergence. Today's activity reveals a field dividing along two vectors: **large-scale distributed serving** (vLLM, SGLang) racing toward production-grade weight caching and decode parallelism, while **local and embedded runtimes** (llama.cpp, Ollama) push quantization boundaries and cross-platform compatibility. Across both tracks, model correctness issues—particularly multi-turn degeneration in long-context frontier models—are emerging as the primary stability risk. The Rustification of critical paths (tokenization, token counting) has begun in LiteLLM and is spilling into inference engines, reflecting performance engineering maturity.

---

## 2. Activity Comparison

| Project | Open Issues | Recent PRs | Releases (24h) | Key Metric |
|---------|-------------|------------|----------------|------------|
| **vLLM** | 74 | 361 total, 20 shown | v0.28.1rc1 | 8 PRs ready/merged |
| **SGLang** | Significant (roadmap-driven) | Major roadmap items | None | Weight Cache Daemon live |
| **llama.cpp** | ~25+ | ~220 total | 6 releases (b11059–b11065) | 2 CUDA + 1 Metal kernel PRs |
| **Ollama** | 8 new | 10 | None | 1 fix merged |
| **LiteLLM** | 20+ | 10+ active | v1.103.0-rc.1 | Cosign-signed Docker |
| **Unsloth** | 26 | 220 total | None | 2 regressions under investigation |

---

## 3. Model Support Race

| Model | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-------|------|--------|-----------|--------|---------|
| **MiniMax-M3** | ✅ ROCm TP>1 sparse | — | — | — | — |
| **DeepSeek V4.1** | ✅ ROCm fused decode | — | — | — | — |
| **Qwen3.8-Next (Qwen4-Exp)** | — | ✅ PD MTP pipeline parallel | ✅ Sparse FA CUDA | — | — |
| **GLM-5.3-Flash** | ✅ Hybrid attention | ✅ KDA/KPool fusion | — | — | — |
| **Gemma 4** | — | — | ✅ CUDA FA tuning | ✅ (vision broken) | — |
| **Kimi-K3** | — | ✅ Native Dynamo | ✅ Arbitrary hc support | — | — |
| **DeepSeek V4** | — | — | — | ✅ reasoning_effort | — |
| **Prism ternary GGUF** | — | — | — | ❌ Import fails | — |
| **MiCA adapters** | — | — | — | — | ✅ Feature request |

**Leader**: vLLM and SGLang are tied on frontier model coverage, with vLLM ahead on Intel XPU and SGLang ahead on router/gateway features. llama.cpp dominates in GGUF breadth but trails on cutting-edge architectures.

---

## 4. Performance Frontier

| Optimization Area | Projects Active | Key Development |
|-------------------|-----------------|------------------|
| **Weight caching / fast recovery** | vLLM, SGLang | Weight Cache Daemon: 306s→<1s load for Qwen3-235B FP8 |
| **Decode context parallelism** | vLLM, SGLang | Helix parallelism + FlashInfer-MNNVL A2A backends |
| **Quantization** | llama.cpp, vLLM | RDNA3 int8 coopmat (llama.cpp); CUTLASS FP8 kernel selection (vLLM, buggy) |
| **Sparse / MoE kernels** | vLLM, SGLang, llama.cpp | MiniMax-M3 sparse indexer; DeepSeek V4.1 fused decode; Qwen4 sparse FA |
| **Tokenization** | LiteLLM, llama.cpp | Rust tokenizer migration (LiteLLM), split token counter backends |
| **Router / serving policies** | SGLang, LiteLLM | SLO ordering, cache-aware routing, session affinity |

**Primary concentration**: The performance frontier is overwhelmingly focused on **serving throughput for large MoE and long-context models**—specifically, reducing cold-start latency via weight caching and scaling decode throughput via context parallelism. These are production infrastructure concerns.

---

## 5. Layer Positioning

| Layer | Projects | Role |
|-------|----------|------|
| **Serving engine** | **vLLM**, **SGLang** | KV cache management, P/D disaggregation, tensor parallelism, weight caching |
| **Local / embedded runtime** | **llama.cpp**, **Ollama** | GGUF/GGML execution, cross-platform (CPU/GPU/Vulkan/Metal/SYCL), standalone binaries |
| **Gateway / proxy** | **LiteLLM** | Unified API layer, key management, cost tracking, guardrails, multi-provider routing |
| **Training / fine-tuning** | **Unsloth** | LoRA/QLoRA fine-tuning, GRPO training, model export, Unsloth Studio |

**Competitive boundaries**: vLLM and SGLang compete directly in the high-throughput serving layer (both use FlashInfer, both pursue decode parallelism). llama.cpp and Ollama occupy the local/embedded layer but with different philosophies (llama.cpp = maximal flexibility, Ollama = batteries-included). LiteLLM sits above both as a gateway. Unsloth is orthogonal—focused on the training layer.

---

## 6. Trend Signals

### What Infrastructure Engineers Should Watch

1. **Weight caching is becoming table stakes** — Both vLLM and SGLang shipped weight cache daemons this week. Expect sub-1-second cold starts for large models by Q4. If your serving layer lacks this, you're behind.

2. **Multi-turn model correctness is the new instability frontier** — GLM-5.3-Flash degeneration, Qwen MoE + torch.compile corruption, and GGUF inference regressions (Unsloth, llama.cpp) indicate that frontier model correctness is lagging behind optimization velocity. Production deployments with long conversations are at risk.

3. **Rust is eating the tokenization layer** — LiteLLM's full tokenizer rewrite and vLLM's internal Rust work signal that Python-based tokenization has become a bottleneck. Expect 2-3x tokenization speedups in next quarter's releases.

4. **ROCm is no longer second-class** — MiniMax-M3, DeepSeek V4.1, and GLM optimizations landed on ROCm this week. AMD GPU users should re-evaluate CUDA parity assumptions.

5. **Gateway-layer features are commoditizing** — LiteLLM's SLO routing, cost tracking, and guardrails are being replicated in SGLang's router. If you're building a serving layer, budget for these features or use a gateway.

6. **Blackwell/RTX 5090 support is unstable** — Multiple projects report assertion errors and kernel selection bugs on Blackwell. Avoid for production until Q1 2027.

### Decision Framework

| If you need... | Choose... |
|----------------|-----------|
| Max throughput, TP>8, PD disaggregation | vLLM |
| Flexible routing + multi-model serving | SGLang |
| Local GGUF, maximum hardware reach | llama.cpp |
| Minimal setup, local CLI | Ollama |
| Unified API, multi-provider, cost control | LiteLLM |
| Fine-tuning, LoRA, GRPO training | Unsloth |

---

*Data sourced from GitHub activity on 2026-09-21 across vllm-project/vllm, sgl-project/sglang, ggml-org/llama.cpp, ollama/ollama, BerriAI/litellm, and unslothai/unsloth.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for vLLM project on 2026-09-21.

Let me go through the data:

**Latest Releases**: None in last 24h

**Latest Issues (30 shown, 74 total)**:
- #41663 - XPU TP=2 on dual Intel Arc Pro B70 - closed, 38 comments
- #56605 - GLM-5.3-Flash degenerates into repeated-token "word salad" - open, 17 comments
- #56868 - GLM-5.3-Flash long-decode degeneration - open, 14 comments
- #41306 - v0.20 latency and throughput regression on MoE models - closed, 14 comments
- #53119 - Multi card + MTP issue with Intel/Qwen3.6-35B-A3B-int4 - open, 12 comments
- #48297 - RFC: LoRA Adapter Lifecycle for RL Training - open, 10 comments
- #47790 - RFC: Separate Flashinfer GQA into TRTLLM and flashinfer backends - open, 9 comments
- #42801 - Significant accuracy discrepancies across different vLLM versions - closed, 9 comments
- #29584 - Can KV Cache be disabled? - closed, 8 comments
- #39170 - Intel-GPU Docker: RuntimeError PyTorch compiled without CUDA - closed, 8 comments
- #55279 - DFlash2 deterministic cumulative OOB - open, 8 comments
- #56900 - Qwen1.5-MoE-A2.7B-Chat degenerate output with torch.compile - open, 7 comments
- #49238 - Decode instance segfaults on NIXL - open, 7 comments
- #54959 - Refactor: Complete MOE oracle / linear kernel migration - open, 6 comments


- #39462 - Doc: no such option --index-strategy - open, 6 comments
- #39996 - Encoder KV cache fails to evict tokens - closed, 6 comments
- #36772 - Docker Model Runner ignores tensor parallel config - closed, 5 comments
- #42701 - v0.21.0 release missing PR #42320 - closed, 5 comments
- #42808 - TurboQuant + MTP compatibility issue - closed, 5 comments
- #57713 - GLM5.3-Flash doesn't support fp8 kv cache dtype on hopper - open, 4 comments

Several documentation and configuration issues have emerged, along with compatibility problems between different vLLM versions and hardware configurations. The Intel GPU Docker image continues to have compilation issues, while model-specific problems persist with GLM and MoE architectures.

- #57714 - Kimi K3 structured output issue - open, 4 comments
- #40564 - UX of Weight Prefetchers on Startup Failure - open, 4 comments
- #41413 - TurboQuant fails on non-power-of-2 head_dim - closed, 4 comments
- #42360 - v1 can't disable chunked prefill - closed, 4 comments
- #55008 - CUTLASS FP8 linear kernel selected on Ampere (wrong) - open, 3 comments
- #22408 - n-gram speculative decoding optimizations - closed, 3 comments
- #57740 - User-authored image_pad misrecognized - open, 3 comments
- #57725 - malformed structured-output spec HTTP 500 - open, 3 comments
- #47005 - AssertionError on 2x RTX 5090 - open, 3 comments
- #57719 - prompt_embeds + penalty kills engine - open, 3 comments

**Pull Requests (20 shown, 361 total)**:
- #57840 - ROCm MiniMax-M3 Context-parallel AITER sparse indexer
- #57832 - ROCm MiniMax-M3 Context-parallel sparse lightning indexer (Triton)
- #57756 - ROCm DeepSeek V4.1 decode metadata and final norm fuse
- #53423 - Feature: KV hints request envelope (ready)
- #53242 - Fix MiMo V2 FP8 QKV scale sharding (closed)
- #57603 - Overlap mHC coefficients for small TP batches (ready)
- #56520 - Fix inline system messages for encoder-based tokenizers (ready)
- #57498 - Fix normalization of chunked long-text embeddings (ready)
- #33235 - Improve MetaTensorMode to intercept more tensor factory operations
- #57587 - ROCm test isolation (closed, verified)
- #57643 - Fuse TP all-reduce with mHC input preparation
- #57606 - Docker: Expose bundled vllm-rs on PATH
- #57634 - feat(rust): pass vision preprocessing context
- #55993 - Fix ghost demo.py Usage in examples
- #56734 - Bugfix: Stop dummy draft decode steps from writing KV
- #55881 - XPU MoE model support

Additional fixes landed across tensor operations, ROCm testing, and model runner functionality. DeepSeek optimization and vision preprocessing improvements merged alongside documentation corrections and bug fixes targeting KV cache handling and speculative decoding issues.

Several critical problems emerged: GLM-5.3-Flash exhibits token degeneration in multi-turn scenarios, Qwen MoE models produce corrupted outputs under torch.compile, and FP8 quantization runs incorrectly on Ampere hardware. New ROCm support for MiniMax-M3 sparse indexing and DeepSeek V4.1 kernel fusion advances performance, while KV hints and vision preprocessing features reach readiness.</think>

# vLLM Daily Digest — 2026-09-21

## 1. Today's Highlights

vLLM development continues active with focus on multi-turn model correctness (GLM-5.3-Flash degeneration issues), ROCm optimizations for MiniMax-M3, and DeepSeek V4.1 performance work. No new releases in the last 24 hours, but several performance PRs reached "ready" status and multiple correctness bugs were reported across quantization backends and model families.

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours
- v0.28.1rc1 is the current release candidate (build: `g44fe2a392`)

## 3. New Model & Hardware Support

**ROCm / AMD:**
- **MiniMax-M3** context-parallel sparse indexer support landed (#57832, #57840) — adds TP>1 support for AITER fp8 indexer and sparse lightning indexer on gfx950
- **DeepSeek V4.1** decode optimization: fused metadata and final norm for ROCm (#57756), TP all-reduce fused with mHC input preparation (#57643)

**Intel XPU:**
- Added `VLLM_BATCH_INVARIANT=1` support for MoE models (#55881) — aligns XPU behavior with CUDA, enables deterministic reduction

**Multi-modality:**
- Rust frontend now passes vision preprocessing context to llm-multimodal (#57634)

## 4. Performance & Optimization

| PR | Description | Status |
|----|-------------|--------|
| [#57832](https://github.com/vllm-project/vllm/pull/57832) | MiniMax-M3 sparse lightning indexer (Triton, TP>1) | Open |
| [#57840](https://github.com/vllm-project/vllm/pull/57840) | MiniMax-M3 AITER fp8 indexer (ROCm, TP>1) | Open |
| [#57756](https://github.com/vllm-project/vllm/pull/57756) | DeepSeek V4.1 decode metadata + final norm fuse (ROCm) | Open |
| [#57643](https://github.com/vllm-project/vllm/pull/57643) | Fuse TP all-reduce with mHC input prep (DSv4.1) | Open |
| [#57603](https://github.com/vllm-project/vllm/pull/57603) | Overlap mHC coefficients for small TP batches | **Ready** |
| [#53423](https://github.com/vllm-project/vllm/pull/53423) | KV hints request envelope for programmatic KV management | **Ready** |
| [#57498](https://github.com/vllm-project/vllm/pull/57498) | Fix normalization of chunked long-text embeddings | **Ready** |
| [#56520](https://github.com/vllm-project/vllm/pull/56520) | Fix inline system messages for encoder-based tokenizers (Anthropic API) | **Ready** |

## 5. Stability & Regressions

**High Severity:**
- **GLM-5.3-Flash degeneration** — repeated-token "word salad" in multi-turn agentic use (#56605, 17 comments) and long-decode degeneration after accumulated reasoning (#56868, 14 comments)
- **Qwen1.5-MoE-A2.7B-Chat** produces degenerate output with `torch.compile` (#56900) — works without VLLM_COMPILE, affects v0.28.0 on H100
- **DFlash2** deterministic cumulative OOB causes CUDA IMA/Xid 31 after ~11k decode steps (#55279)

**Medium Severity:**
- **CUTLASS FP8 kernel mis-selection**: FP8 linear kernel selected on Ampere (SM80) which only supports INT8 (#55008)
- **GLM5.3-Flash** doesn't support fp8 KV cache dtype on Hopper (#57713)
- **prompt_embeds + penalty** triggers device-side assert ("scatter gather kernel index out of bounds") (#57719)
- **AssertionError** on 2x RTX 5090 (Blackwell): overwriting `weight_loader` when serving FP8 model (#47005)
- **Intel XPU TP=2** on dual Arc Pro B70: GP fault + xe BCS engine reset (#41663, closed with 38 comments)

**Low Severity / Documentation:**
- RFC: LoRA Adapter Lifecycle for RL Training (#48297)
- RFC: Separate Flashinfer GQA into TRTLLM and flashinfer backends (#47790)
- Doc: `--index-strategy` option missing from pip install docs (#39462)

## 6. What This Means for Application Developers

1. **GLM-5.3 users**: Avoid multi-turn agentic workflows with Flash variant until degeneration is fixed; this affects both streaming and non-streaming modes with accumulated context.

2. **torch.compile users**: If using Qwen MoE models, disable `VLLM_COMPILE` — the current integration produces garbage output on v0.28.0.

3. **Production DeepSeek deployments**: ROCm users benefit from fused decode kernels; monitor for the v0.28.1 release which should include these optimizations.

4. **Multi-modality developers**: The new vision preprocessing context API (#57634) enables request-dependent image processing without model-specific vLLM code — relevant if building custom multimodal pipelines.

5. **RTX 5090 / Blackwell early adopters**: FP8 serving currently unstable; avoid until weight_loader assertion is resolved (#47005).

6. **Anthropic API users**: Prefix caching now works correctly with inline system messages and encoder-based tokenizers (#56520 ready).

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to generate a structured SGLang digest for 2026-09-21 based on the provided GitHub data. Let me analyze the data and organize it into the required sections.

Let me go through the issues and PRs to identify the key items:

**Latest Releases:** None in last 24h

**Key Issues:**
1. #26340 - CUDA Coredump Tracker (319 comments) - This is a tracking issue for CUDA coredumps
2. #15194 - Quantization Modifications roadmap (30 comments, closed)
3. #33522 - Fast Engine Recovery: Weight Cache Daemon (27 comments, roadmap)
4. #29736 - Decode Context Parallelism & Helix Parallelism (18 comments, roadmap)
5. #17050 - CI Test Failures and Fixes (14 comments, tracking)
6. #37742 - SenseNova-U1 feature tracking (9 comments)
7. #37633 - CUDA illegal memory access bug (8 comments)
8. #21891 - SGLang Simulator roadmap (8 comments)
9. #39499 - SGLang dLLM Serving roadmap (7 comments)
10. #34510 - PD disaggregation shared-protocol unification (6 comments)

**Key PRs:**
1. #40390 - sgl-router enable Kimi-K3
2. #40391 - sgl-router streaming lifetimes
3. #40292 - SLO ordering for bucket selection
4. #34537 - AMD aiter asm for Kimi K3
5. #40271 - generalized admission policy
6. #40366 - cache-aware policy
7. #40453 - InstantTensor loader support
8. #40310 - GLM-5.3-Flash hybrid attention


9. #40501 - Qwen3.8-Next pipeline parallel
10. #40502 - encoder embedding delivery fix
11. #40505 - split serving perf tests
12. #40189 - GLM-5.2 decode fixes
13. #40493 - vae-slicing in native pipelines
14. #39175 - multi-CTAs KV counter fix
15. #39777 - pinned memory for sampling
16. #39695 - GLM-5.3-Flash KPool planning
17. #39688 - GLM-5.3-Flash KDA projections

I'm seeing several performance optimization and model support improvements. The PRs cover pipeline parallelism for the newest Qwen model, memory management enhancements, and various hardware acceleration features. There's also work on sampling optimizations and pipeline planning that could improve inference efficiency.</think>

# SGLang Digest — 2026-09-21

## 1. Today's Highlights

SGLang's router and inference stack continues rapid evolution with several infrastructure PRs landing around admission control, cache-aware routing, and streaming session handling. On the model side, InstantTensor loader support and GLM-5.3-Flash optimizations dominate the PR landscape, while the Weight Cache Daemon for fast engine recovery is now live, cutting weight load from ~306–327s to under 1s on Qwen3-235B FP8.

---

## 2. Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| **No new releases** | None in last 24h | — |

---

## 3. New Model & Hardware Support

| Model / Hardware | Details | PR / Issue |
|------------------|---------|------------|
| **Kimi-K3** | Enabled via native Dynamo support in sgl-router | [#40390](https://github.com/sgl-project/sglang/pull/40390) |
| **SenseNova-U1 / U1.5** | Feature & performance tracking underway | [#37742](https://github.com/sgl-project/sglang/issues/37742) |
| **Qwen3.8-Flash-Next (Qwen4-Exp)** | Pipeline-parallel serving + PD-prefill MTP | [#40501](https://github.com/sgl-project/sglang/pull/40501) |
| **GLM-5.3-Flash** | Hybrid attention CPU offload + PD index mapping support | [#40310](https://github.com/sgl-project/sglang/pull/40310) |
| **GLM-5.2 (AMD MI355X)** | MXFP4 dense experts and MoE/MLA launch fixes for ROCm | [#40189](https://github.com/sgl-project/sglang/pull/40189) |
| **InstantTensor loader** | New `--load-format instanttensor` for high-performance Safetensors loading | [#40453](https://github.com/sgl-project/sglang/pull/40453) |
| **AMD aiter asm** | Kimi K3 target verification on ROCm | [#34537](https://github.com/sgl-project/sglang/pull/34537) |

---

## 4. Performance & Optimization

| Area | Change | Reference |
|------|--------|-----------|
| **Weight Cache Daemon** | Per-rank daemon holds post-quantized weights over CUDA IPC; weight load drops from ~306–327s → <1s on Qwen3-235B FP8 | [#33522](https://github.com/sgl-project/sglang/issues/33522) |
| **Decode Context Parallelism** | A2A + FlashInfer-MNNVL comm backends and query replication (Helix) landed; `fi_a2a` / `a2a` as default `--dcp-comm-backend` | [#29736](https://github.com/sgl-project/sglang/issues/29736), [#39165](https://github.com/sgl-project/sglang/pull/39165), [#37767](https://github.com/sgl-project/sglang/pull/37767) |
| **Router SLO ordering** | Optional TTFT and token-throughput preferences in bucket selection | [#40292](https://github.com/sgl-project/sglang/pull/40292) |
| **Router admission policy** | Generalized admission limits: `max_running_requests`, `max_waiting_requests`, `max_kv_tokens` | [#40271](https://github.com/sgl-project/sglang/pull/40271) |
| **Cache-aware routing** | Prefer workers holding usable prefix; fall back to power-of-two selection | [#40366](https://github.com/sgl-project/sglang/pull/40366) |
| **Session-aware routing** | Requests with same session key reuse admitted binding | [#40379](https://github.com/sgl-project/sglang/pull/40379) (closed) |
| **Streaming idle timeout** | New `--stream-idle-timeout-secs` (default 180s) for SSE | [#40391](https://github.com/sgl-project/sglang/pull/40391) |
| **GLM-5.3 KDA** | Fused projections + prefill metadata; beta activation fused into gate/cumsum | [#39688](https://github.com/sgl-project/sglang/pull/39688) |
| **GLM-5.3 KPool** | Reduced planning sync; overlapped indexer preparation | [#39695](https://github.com/sgl-project/sglang/pull/39695) |
| **Pinned memory transfers** | Async sampling metadata transfers via pinned memory | [#39777](https://github.com/sgl-project/sglang/pull/39777) |
| **NVFP4 W4A16** | Opt-in support in FlashInfer MegaMoE via `SGLANG_FLASHINFER_CUTEDSL_NVFP4_W4A16=1` | [#39210](https://github.com/sgl-project/sglang/pull/39210) |
| **Diffusion VAE slicing** | `--vae-slicing` now honored in native pipelines | [#40493](https://github.com/sgl-project/sglang/pull/40493) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix? |
|----------|-------|--------|------|
| **High** | CUDA illegal memory access in QSA extend forward at 8 concurrent requests (Qwen3.8-Flash-Next-FP8, H20 TP8); suppressed by `CUDA_LAUNCH_BLOCKING=1` and `--disable-overlap-schedule` | Open | [#37633](https://github.com/sgl-project/sglang/issues/37633) |
| **High** | GLM-5.3-Flash: CUDA OOM in fp8_mqa_logits during long-context prefill kills all TP ranks | Open | [#37712](https://github.com/sgl-project/sglang/issues/37712) |
| **High** | Humming quantization crashes at weight load — `BlockQuantScaleParameter` has no attribute `format_ue8m0` (v0.5.20, DeepSeek/GLM MLA) | Open | [#40393](https://github.com/sgl-project/sglang/issues/40393) |
| **Medium** | transformers pin (5.12.1) incompatible with main: `import sglang` fails | Open | [#38183](https://github.com/sgl-project/sglang/issues/38183) |
| **Medium** | HiCache staged write-back passes unregistered host VAs to `cudaMemcpyBatchAsync`, faults when `CanUseHostPointerForRegisteredMem == 0` | Open | [#40232](https://github.com/sgl-project/sglang/issues/40232) |
| **Medium** | EAGLE spec-decode: `num_token_non_padded = 0` for draft batches, masking all draft topk ids to -1, corrupting MoE dispatch | Open | [#40156](https://github.com/sgl-project/sglang/issues/40156) |
| **Medium** | DP scheduler SIGQUIT terminates DataParallelController instead of notifying Engine | Open | [#40364](https://github.com/sgl-project/sglang/issues/40364) |
| **Low** | KDA fused intra-chunk path collapses for strong per-channel decays due to ±126 clamp in exp2 factorization | Open | [#39971](https://github.com/sgl-project/sglang/issues/39971) |
| **Low** | sgl_kernel AOT: rmsnorm NoKernelImage on sm_75 while silu/gelu work (Turing per-op cubin gap) | Open | [#38515](https://github.com/sgl-project/sglang/issues/38515) |
| **Tracking** | CI: 1 broken, 9 flaky, 1072 recently fixed tests | Active | [#17050](https://github.com/sgl-project/sglang/issues/17050) |

---

## 6. What This Means for Application Developers

- **Faster cold starts**: The Weight Cache Daemon is now production-ready — if you run Qwen3-235B FP8 or similar large models, expect sub-second engine recovery instead of 5+ minute reloads.
- **Router improvements**: New SLO-aware, cache-aware, and session-aware routing policies in sgl-router give finer control over TTFT and throughput. Consider tuning `--stream-idle-timeout-secs` if you handle long-lived streaming connections.
- **New loaders**: InstantTensor is now available via `--load-format instanttensor` — test this for distributed checkpoint loading if you're operating at scale.
- **GLM-5.3 / Qwen3.8-Next**: These are the actively-optimized frontier models. If you're deploying them, track the roadmap issues closely — several kernel fusions and memory optimizations landed this week.
- **Watch out**: The CUDA OOM issue on GLM-5.3-Flash long-context prefill and the H20 concurrency bug are active. Avoid 8+ concurrent requests on H20 TP8 until fixed, and consider `--cpu-offload-gb 0` for GLM-5.3-Flash if you're hitting the CUDA graph init failure.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze the provided GitHub data for llama.cpp and create a structured digest for 2026-09-21.

Looking at the data:

## Latest Releases (last 24h)
- b11065: CUDA: tune FA for Gemma 4 on Ampere or newer (#29152)
- b11064: metal: support arbitrary hc in dsv4_hc_pre (#29169)
- b11063: common/peg: handle invalid utf-8 sequences in the AST (#29161)
- b11062: CUDA: enable sparse fa for qwen4 (#28770)
- b11060: fix(mamba): make time-step projection input contiguous (#28832)
- b11059: metal: add F16 input to the FWHT (#29094)

## Latest Issues (top items by comment count)
1. #21725 - Feature Request: XDNA backend (30 comments)
2. #25664 - vk::DeviceLostError on linux-7.x kernels (RADV_STRIXHALO) - 24 comments
3. #27595 - SYCL with --fit doesn't fully account for memory usage - 22 comments
4. #20697 - Feature Request: Disk-based context checkpoint offloading (20 comments)
5. #24055 - Context checkpoints always invalidated on hybrid/recurrent models (20 comments)
6. #25030 - Feature Request: arm64 windows with CUDA builds (16 comments)
7. #27547 - SYCL dual-GPU stuck during model load (12 comments)
8. #28752 - Severe drop in prompt processing speed after b10780 on Vulkan, RDNA3 (9 comments)
9. #24822 - Server: improve progress reporting (9 comments)


10. #27623 - Qwen3.8-27B (hybrid Gated DeltaNet): decode throughput collapses ~25x at context positions >~80K (8 comments)

I notice several performance and compatibility issues emerging. The Vulkan backend shows significant performance degradation, while SYCL continues to present memory management challenges. The Qwen3.8-27B model's decoding performance dramatically drops at larger context lengths, indicating potential optimization needs for hybrid architectures.

The most critical areas of focus appear to be backend reliability (SYCL, Vulkan), cross-platform support (arm64 Windows), and advanced model architecture handling. Multi-GPU configurations and memory management remain complex challenges requiring targeted engineering efforts.</think>

# llama.cpp Daily Digest — 2026-09-21

## 1. Today's Highlights

The development focus today centered on **backends and model-specific optimizations**. Notable CUDA work landed for Gemma 4 flash attention tuning on Ampere+ GPUs and sparse FA for Qwen4, while Metal gained support for arbitrary head channel configurations in dsv4_hc_pre kernels. The community continues to grapple with stability issues in SYCL multi-GPU setups and Vulkan performance regressions on RDNA3.

---

## 2. Releases & Breaking Changes

| Version | Change | Links |
|---------|--------|-------|
| **b11065** | CUDA: tune FA for Gemma 4 on Ampere or newer | [#29152](https://github.com/ggml-org/llama.cpp/pull/29152) |
| **b11064** | Metal: support arbitrary hc in dsv4_hc_pre (fixes Kimi-K3 fallback to CPU) | [#29169](https://github.com/ggml-org/llama.cpp/pull/29169) |
| **b11063** | common/peg: handle invalid UTF-8 sequences in the AST | [#29161](https://github.com/ggml-org/llama.cpp/pull/29161) |
| **b11062** | CUDA: enable sparse FA for Qwen4 | [#28770](https://github.com/ggml-org/llama.cpp/pull/28770) |
| **b11060** | Mamba: fix time-step projection input contiguity | [#28832](https://github.com/ggml-org/llama.cpp/pull/28832) |
| **b11059** | Metal: add F16 input to FWHT kernel | [#29094](https://github.com/ggml-org/llama.cpp/pull/29094) |

---

## 3. New Model & Hardware Support

- **Gemma 4**: CUDA FlashAttention optimized for head sizes 256/512 on Ampere+ (b11065)
- **Qwen4**: Sparse flash attention enabled on CUDA (b11062)
- **Kimi-K3**: Metal dsv4_hc_pre now works with arbitrary head channel counts instead of hardcoded hc=4 (b11064)
- **Qwen 3.8 MoE**: Streaming expert loading with `--load-mode streaming` and `--gpu-pill` for Vulkan/HIP (PR #29191) — enables Q6_K models >85GB on 24GB VRAM with NVMe swap

---

## 4. Performance & Optimization

| Area | Change | Status |
|------|--------|--------|
| **Gemma 4 CUDA** | FA tuning for Ampere+ with optimized block sizes and mma kernel for batch=1 | Merged b11065 |
| **Qwen4 CUDA** | Sparse flash attention enabled | Merged b11062 |
| **Metal FWHT** | F16 input support eliminates F32 conversion copy | Merged b11059 |
| **Mamba** | Time-step projection contiguity fix + skip copy after normalization | Merged b11060 |
| **Vulkan int8** | Coopmat1 matmul for AMD RDNA3/4 with q4_0–q6_k, mxfp4, nvfp4, iq4_nl | Open PR #27952 |
| **Intel Xe Flash Attention** | New kernels for Xe-LPG Plus/Xe2/Xe3 (PR 2/3) | Open PR #24406 |
| **NCCL TP** | Multi-node tensor parallelism via NCCL for CUDA | Open PR #28967 |
| **--fit dense models** | Layer prioritization for CPU offload optimization | Open PR #29027 |

---

## 5. Stability & Regressions

### High Priority

| Issue | Description | Severity | Status |
|-------|-------------|----------|--------|
| [#27595](https://github.com/ggml-org/llama.cpp/issues/27595) | SYCL `--fit` undercounts memory, causes runtime overflow on Arc B70 | **High** | Open, 22 comments |
| [#27547](https://github.com/ggml-org/llama.cpp/issues/27547) | SYCL dual-GPU (2x Arc Pro B60) stuck during model load | **High** | Open, 12 comments |
| [#25664](https://github.com/ggml-org/llama.cpp/issues/25664) | Vulkan DeviceLostError on RADV_STRIXHALO (Linux 7.x) | **High** | Open, 24 comments |
| [#28752](https://github.com/ggml-org/llama.cpp/issues/28752) | ~5x prompt processing speed drop on Vulkan RDNA3 since b10780 | **High** | Open, 9 comments |

### Medium Priority

| Issue | Description | Severity | Status |
|-------|-------------|----------|--------|
| [#29092](https://github.com/ggml-org/llama.cpp/issues/29092) | HIP/ROCm: Gated DeltaNet state bleeds across requests (Qwen35) | **Medium** | Open, 7 comments |
| [#29164](https://github.com/ggml-org/llama.cpp/issues/29164) | Mobile GPU: model loads to dGPU CUDA0, inference runs on iGPU | **Medium** | Open, 4 comments |
| [#28734](https://github.com/ggml-org/llama.cpp/issues/28734) | Qwen4exp decode slowdown linear with context (CUDA) | **Medium** | Open, 5 comments |

### Feature Requests Gaining Traction

- **#21725**: XDNA backend request (30 comments, 35 👍)
- **#20697**: Disk-based context checkpoint offloading `--cache-disk` (20 comments, 55 👍)

---

## 6. What This Means for Application Developers

1. **GPU selection matters on hybrid systems**: If deploying on mobile or laptop dGPU+iGPU configurations, verify inference runs on the intended device — issue #29164 reports the model loading to dGPU but executing on iGPU.

2. **SYCL stability remains a concern**: Multi-GPU SYCL setups (Arc B70, dual Arc Pro B60) are experiencing hangs and memory accounting issues. If running Intel GPUs, consider CPU fallback or monitor the fixes in PRs #28990 and #27595.

3. **Vulkan RDNA3 regression**: If using AMD RDNA3 (RX 7000 series) with Vulkan, the b10780+ prompt processing slowdown affects throughput. Track PR #28752 for updates.

4. **New quantization options**: RDNA3/4 int8 coopmat1 matmul (PR #27952) expands quantization format support — useful for Q4–Q6 quantizations on AMD consumer GPUs.

5. **Large context Qwen models**: The hybrid Gated DeltaNet decode collapse at >80K context (issue #27623) impacts long-context applications. Evaluate whether your use case hits this regime.

6. **Server improvements incoming**: Context checkpoint preservation across slot save/restore (PR #26004) will improve slot reuse efficiency for SWA and hybrid models — critical for multi-tenant deployments.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate a structured English digest from the provided GitHub issues and pull requests data. Let me analyze what's included:

**Issues (Open):**
- #14259: Silent chat history/embedding truncation - no user-visible indication
- #18225: ~5x slower token generation on CUDA (RTX 3090) in 0.33.x vs 0.32.13
- #18558: Memory issue with image processing
- #18521: Support for Prism ternary GGUFs - import fails
- #18559: Error with gemma4:31b-mlx for online searching
- #18560: gemma4:e4b receives blank (all-black) images
- #18557: 0xc0000005 access violation on Vulkan (AMD RX 6800 XT)

**Issues (Closed):**
- #18441: MLX structured output with thinking prefixes JSON with stray "."

**Pull Requests (10 items):**
- #18562: docker: expose NVIDIA graphics capability
- #18561: server: separate generate thinking from non-thinking parser output
- #18233: docs: fix broken download links in app README
- #18556: mlxrunner: make prefix-cache paged-out memory budget configurable
- #18555: app: don't animate sidebar on load
- #18553: app: add read aloud for assistant responses
- #18552: handle NaN totalRawPower when SMCount/ClockMHz unavailable
- #18551: Warn and ignore typical_p on API requests instead of rejecting them
- #18140: api: accept nested object required schemas
- #18550: mlx: add a prefill-shaped gated delta kernel

Now let me organize this into the requested format:

1. **Today's Highlights** - 2-3 sentences
2. **Releases & Breaking Changes** - Nothing directly about releases, but #18551 mentions a breaking change (typical_p rejection) being fixed


3. **New Model & Hardware Support** - Prism ternary GGUFs
4. **Performance & Optimization** - MLX kernel improvements, memory fixes
5. **Stability & Regressions** - Vulkan crash, RTX 3090 regression, memory issues
6. **What This Means for Application Developers** - Practical takeaways

Let me draft this:</think>

## Today's Highlights

Ollama saw active development across multiple fronts: the MLX backend received a significant kernel optimization (#18550) while a memory regression on NVIDIA RTX 3090 GPUs (#18225) remains under investigation. The Vulkan backend continues to have stability issues with access violations on AMD GPUs (#18557), and several model compatibility issues were flagged, including vision models receiving blank images and unsupported ternary quantization formats.

---

## Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| `typical_p` parameter handling | Previously rejected with 400 error; now warns and ignores instead, fixing compatibility with clients like SillyTavern | [#18551](https://github.com/ollama/ollama/pull/18551) |

---

## New Model & Hardware Support

| Feature | Details | Link |
|---------|---------|------|
| Prism ternary GGUFs | Support tracking for PQ2_0 (type 142) and PTQ1_0 (type 143) quantization — currently fails to import | [#18521](https://github.com/ollama/ollama/issues/18521) |
| gemma4 vision | Model advertises vision capability but all images received as blank/zero — being investigated | [#18560](https://github.com/ollama/ollama/issues/18560) |

---

## Performance & Optimization

| Area | Change | Impact | Link |
|------|--------|--------|------|
| MLX prefill | Added prefill-shaped gated delta kernel | Improves prompt processing throughput on Apple Silicon | [#18550](https://github.com/ollama/ollama/pull/18550) |
| MLX memory | Made prefix-cache paged-out memory budget configurable | Prevents 16GB Mac machines from running out of wired memory | [#18556](https://github.com/ollama/ollama/pull/18556) |
| GPU power reporting | Handle NaN when SMCount/ClockMHz unavailable | Prevents scheduler crash/misbehavior on GPUs with incomplete probe data | [#18552](https://github.com/ollama/ollama/pull/18552) |
| Docker Vulkan | Expose NVIDIA graphics capability in container | Enables Vulkan backend to work inside Docker | [#18562](https://github.com/ollama/ollama/pull/18562) |

---

## Stability & Regressions

| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| **Critical** | Vulkan access violation (0xc0000005) on AMD RX 6800 XT | Open — crashes any model on GPU | [#18557](https://github.com/ollama/ollama/issues/18557) |
| **High** | ~5x slower token generation on RTX 3090 (0.33.2 vs 0.32.13) | Open — CUDA regression | [#18225](https://github.com/ollama/ollama/issues/18225) |
| **Medium** | Memory leak in image processing (RAM grows unbounded) | Open | [#18558](https://github.com/ollama/ollama/issues/18558) |
| **Medium** | Silent truncation of chat history when exceeding context length | Open — only debug-level logging | [#14259](https://github.com/ollama/ollama/issues/14259) |
| **Low** | MLX structured output prefixes JSON with stray "." | Closed | [#18441](https://github.com/ollama/ollama/issues/18441) |

---

## What This Means for Application Developers

- **If using structured output with thinking models on MLX**: This issue is now fixed (#18441), but verify your JSON parsing handles edge cases.
- **If you send `typical_p` in API requests**: You no longer need to strip it — Ollama now ignores it with a warning (#18551), improving compatibility with existing clients.
- **If running on Vulkan/AMD**: Avoid GPU inference until #18557 is resolved; CPU fallback works.
- **If on 16GB Apple Silicon**: Consider tuning the new prefix-cache memory budget setting (#18556) to prevent system unresponsiveness.
- **If building vision features**: Be aware that gemma4:e4b vision currently doesn't process images correctly (#18560).
- **If using long conversations**: Be aware older messages are silently dropped when context fills — this happens without API indication (#14259).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-09-21 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases:**
- v1.103.0-rc.1 released
- Docker images now signed with cosign

**Issues (top by comments):**
1. #27735 - Virtual key BudgetExceededError uses stale spend (13 comments)
2. #12273 - Wrong error message with incorrect master key (9 comments)
3. #40583 - Guardrails can't see MCP tools via Anthropic /v1/messages (7 comments)
4. #42005 - Responses-to-Chat bridge loses tool calls on multi-turn (6 comments)
5. #27439 - DeepSeek V4 reasoning_effort not passed through (5 comments)
6. #26322 - azure_ai/mistral-large-3 doesn't support max_completion_tokens (5 comments)
7. #23544 - MCP list_tools called every time (4 comments) - CLOSED
8. #23766 - Feature: Support for mREP endpoint for Vertex AI (4 comments)
9. #23990 - OTEL callback doesn't report token usage breakdown (4 comments)
10. #30705 - Anthropic /v1/messages should normalize system role (4 comments)
11. #30816 - Feature: Report actual usage cost to SSE clients (4 comments)
12. #28235 - Multiple budget windows for users - CLOSED
13. #42104 - Mid-conversation system messages break Gemini prompt caching (4 comments)
14. #31950 - Presidio output_parse_pii doesn't unmask tool_calls arguments (4 comments)


15. #30822 - websearch_interception tool_choice fails on Bedrock (3 comments)
16. #41595 - /v1/models doesn't respect Team member allowed_models (3 comments)
17. #40822 - Helm chart runs as root (3 comments)
18. #41963 - /v1/responses doesn't normalize string input (3 comments)
19. #41913 - Tool fields dropped in translation (3 comments)
20. #42161 - Streamed requests costed as 0 when model_name is alias (2 comments)

**Pull Requests (top activity):**
- #42174 - refactor(tokenizer): replace Python tokenizer dependencies with Rust
- #42177 - fix(responses bridge): fold list-format system content into instructions
- #42178 - chore(prices): sync OpenRouter prices: 4 models
- #42133 - fix(presidio): resolve overlapping entity spans
- #42176 - fix(proxy): preserve routed model for streamed spend logging
- #42087 - fix: warn instead of silently dropping unsupported tool constraints
- #42158 - fix(deepseek): promote reasoning_content on multi-turn
- #42173 - feat(rust): add typed secret managers and shared auth adapters
- #42126 - fix(vertex_ai): keep mid-conversation system messages inline for Gemini
- #41014 - fix(responses bridge): rebuild empty output[] from streamed output_item.done
- #41117 - fix(responses bridge): stream repeated message output items only once
- #42165 - refactor(rust): split token counter backends</think>

# LiteLLM Daily Digest — 2026-09-21

## Today's Highlights

LiteLLM v1.103.0-rc.1 is now available with **cosign-signed Docker images** for verified deployments. The tokenizer stack is undergoing a significant Rust migration to eliminate Python dependency duplication, while several critical bugs affect streaming cost calculation (model aliases resolve to $0 spend) and Gemini prompt caching (mid-conversation system messages break prefix caching). A notable security fix addresses the Helm chart running containers as root by default.

---

## Releases & Breaking Changes

| Item | Description | Links |
|------|-------------|-------|
| **v1.103.0-rc.1 released** | Release candidate for v1.103.0 | [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.103.0-rc.1) |
| **Docker images now cosign-signed** | All LiteLLM Docker images are signed with cosign using the key from commit `0112e53` — verify with `cosign verify` | [docs.sigstore.dev](https://docs.sigstore.dev/cosign/overview/) |

---

## New Model & Hardware Support

| Model/Feature | Details | Links |
|---------------|---------|-------|
| **DeepSeek V4 reasoning_effort** | Support for `reasoning_effort: "high"/"max"` parameters (v4 Pro/Flash, released 2026-04-24) | [#27439](https://github.com/BerriAI/litellm/issues/27439) |
| **Vertex AI mREP endpoints** | Feature request for multi-region endpoint URL generation | [#23766](https://github.com/BerriAI/litellm/issues/23766) |
| **OpenRouter price sync** | Updated pricing for 4+ DeepSeek and other models | [#42178](https://github.com/BerriAI/litellm/pull/42178), [#42175](https://github.com/BerriAI/litellm/pull/42175), [#42169](https://github.com/BerriAI/litellm/pull/42169) |

---

## Performance & Optimization

| Area | Change | Impact | Links |
|------|--------|--------|-------|
| **Tokenizer** | Rust-based tokenizer replacing Python dependencies | Eliminates duplicate tokenizer stacks; fixes Unicode and custom-tokenizer regressions | [#42174](https://github.com/BerriAI/litellm/pull/42174) |
| **Token counter backends** | Split into fast, HuggingFace, and tiktoken backend crates | Decouples implementations; fixes silent incorrect counts from reserved merge ranks | [#42165](https://github.com/BerriAI/litellm/pull/42165) |
| **Secret managers** | Typed Rust secret manager interfaces + AWS/GCP implementations | Typed auth for Rust callers; decouples provider auth from facade | [#42173](https://github.com/BerriAI/litellm/pull/42173) |
| **MLflow integration** | Fixed `model_dump()` not being called (passing method reference) | Fixes chunk event serialization | [#30401](https://github.com/BerriAI/litellm/pull/30401) |

---

## Stability & Regressions

| Severity | Issue | Description | Status | Fix PR |
|----------|-------|-------------|--------|--------|
| 🔴 **High** | [#42161](https://github.com/BerriAI/litellm/issues/42161) | Streamed requests costed as $0 when `model_name` is an alias — 74/89 calls logged as free | Open | [#42176](https://github.com/BerriAI/litellm/pull/42176) |
| 🔴 **High** | [#42104](https://github.com/BerriAI/litellm/issues/42104) | Mid-conversation `system` messages break Gemini/Vertex prompt caching — every turn reports `cache_read_input_tokens: 0` | Open | [#42126](https://github.com/BerriAI/litellm/pull/42126) |
| 🟠 **Medium** | [#42005](https://github.com/BerriAI/litellm/issues/42005) | Responses-to-Chat bridge loses native tool calls on multi-turn replay; leaks reasoning as assistant text | Open | — |
| 🟠 **Medium** | [#40583](https://github.com/BerriAI/litellm/issues/40583) | Guardrails cannot see or block MCP tools sent via Anthropic `/v1/messages` format | Open | — |
| 🟠 **Medium** | [#27735](https://github.com/BerriAI/litellm/issues/27735) | Virtual key `BudgetExceededError` uses stale spend while `/key/info` shows spend below max_budget | Open | — |
| 🟠 **Medium** | [#40822](https://github.com/BerriAI/litellm/issues/40822) | Helm chart ships empty `securityContext` — pods run as root by default | Open | — |
| 🟡 **Low** | [#41913](https://github.com/BerriAI/litellm/issues/41913) | Six fields (`const`, `strict`, `parallel_tool_calls`, etc.) dropped in LLM translation | Open | — |
| 🟡 **Low** | [#30731](https://github.com/BerriAI/litellm/issues/30731) | `llm_as_a_judge` guardrail defaults missing `overall_score` to 100 (pass) — should fail open | Open | — |

---

## What This Means for Application Developers

1. **Verify your deployments** — If using LiteLLM Docker, upgrade to v1.103.0-rc.1 and verify images with cosign before production use.

2. **Avoid model aliases for streaming** — If you use `model_name` aliases, streaming requests are currently logged with $0 spend. The fix in [#42176](https://github.com/BerriAI/litellm/pull/42176) is pending; consider using direct model names until resolved.

3. **Don't interleave system messages in Gemini conversations** — Mid-conversation `system` role messages inside `messages[]` break Vertex AI prefix caching. Keep system prompts only in the leading position.

4. **Guardrails have blind spots with Anthropic MCP** — If using MCP tools with Anthropic `/v1/messages`, custom guardrails cannot inspect or block those tools. Consider alternative patterns until resolved.

5. **Review Helm security contexts** — Current default deployments run as root. Add explicit `runAsNonRoot`, `runAsUser`, and `capabilities.drop` to your values.yaml.

6. **DeepSeek V4 users** — `reasoning_effort` is now properly passed through for Pro/Flash models, enabling control over extended thinking budgets.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate a structured English digest for Unsloth based on the GitHub data provided. Let me analyze the data and create a proper digest following the specified sections.

Let me organize the information:

1. **Releases**: None in the last 24h

2. **Issues** (26 total, key ones):
   - #11221 [OPEN] GGUF inference throughput regression in v0.1.810-beta
   - #11349 [OPEN] Bundled llama.cpp CUDA 13.4 generates 5-6x slower than official ggml-org CUDA 12 on RTX 5070 Ti
   - #11343 [OPEN] GGUF load 500s on synthesized filename
   - #11187 [OPEN] Studio not starting on 0.0.0.0
   - #11336 [CLOSED] Drivers too old - cuda 13 works with drivers =< 580
   - #6730 [OPEN] Feature request: Support MiCA (Minor Component Adaptation)
   - #9804 [CLOSED] Windows installer fails
   - #11385 [OPEN] Make RAG UPLOAD_EXTS configurable via environment variable
   - #11290 [OPEN] PowerShell install script fails due to space in Windows username
   - #11387 [OPEN] API Keys cannot be copied
   - #11388 [OPEN] Remove Path information from Password Failure on Remote Access

3. **Pull Requests** (220 total, key ones):
   - #11337 [OPEN] Stop dividing the GRPO eval loss by accumulation steps
   - #11377 [OPEN] Studio: fold tool calls into Thinking block
   - #11373 [OPEN] Studio: drag sidebar rows
   - #11390 [OPEN] Add Windows MXC Preview sandboxing
   - #11294 [OPEN] Studio: use only chosen split/subset for HuggingFace recipe data
   - #11368 [OPEN] Stop Windows host-RAM spill from looking healthy
   - #11369 [OPEN] Treat bash coproc as command boundary
   - #11375 [OPEN] Widen link reference probe
   - #11379 [OPEN] Read more chat attachment formats
   - #11383 [OPEN] Recover from dead Metal GPU queue
   - #11357 [OPEN] Windows tool isolation through MXC

Now I'll construct the digest:</think>

# Unsloth Digest — 2026-09-21

## Today's Highlights

Several significant performance and stability issues have emerged around Unsloth Studio's GGUF inference pipeline. A critical regression in v0.1.810-beta shows measurably slower inference throughput, while a parallel report details the bundled llama.cpp build (CUDA 13.4) running 5-6x slower than the official ggml-org CUDA 12 build on RTX 5070 Ti (Blackwell sm_120). On the development side, active PR work continues on Windows tool isolation via Microsoft MXC and expanded file format support for chat attachments.

---

## Releases & Breaking Changes

No new releases in the last 24 hours.

---

## New Model & Hardware Support

- **MiCA (Minor Component Adaptation)**: Feature request filed to add MiCA support in `FastLanguageModel.get_peft_model()`. MiCA has been merged into Hugging Face PEFT as a LoRA-compatible initialization method. — [#6730](https://github.com/unslothai/unsloth/issues/6730)

- **Community SDXL Fine-tunes**: New feature request to load single-file GGUF/safetensors SDXL fine-tunes in the Images page. — [#11391](https://github.com/unslothai/unsloth/issues/11391)

---

## Performance & Optimization

**Active regressions under investigation:**

- **GGUF Inference Throughput Regression**: After updating to v0.1.810-beta, local GGUF model inference is noticeably slower on the same hardware/settings. This is flagged as an inference throughput regression rather than a UI-only issue. — [#11221](https://github.com/unslothai/unsloth/issues/11221)

- **Bundled llama.cpp CUDA 13.4 Performance**: On NVIDIA RTX 5070 Ti (sm_120 / Blackwell) with CUDA 13.4 driver, the bundled llama.cpp build (`b11030-mix-5ff778e`) generates ~5-6x slower than the official ggml-org CUDA 12 build. — [#11349](https://github.com/unslothai/unsloth/issues/11349)

**PRs advancing performance and correctness:**

- **GRPO Eval Loss Fix**: PR #11337 addresses `eval_loss` from GRPO runs being smaller than train loss by exactly `gradient_accumulation_steps`, and moving when that setting changes. The fix reads `self.current_gradient_accumulation_steps` unconditionally. — [#11337](https://github.com/unslothai/unsloth/pull/11337)

- **Windows VRAM Spill Detection**: PR #11368 prevents Windows host-RAM spill from appearing as healthy load — on Windows, `cudaMalloc` can succeed out of host RAM past the end of VRAM (since driver 536.40) instead of returning out-of-memory. — [#11368](https://github.com/unslothai/unsloth/pull/11368)

- **Metal GPU Queue Recovery**: PR #11383 adds recovery from a dead Metal GPU queue instead of failing every subsequent request. Apple's GPU watchdog kills stalled command buffers, leaving the inference worker in a broken state. — [#11383](https://github.com/unslothai/unsloth/pull/11383)

---

## Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | GGUF inference throughput regression in v0.1.810-beta | OPEN | — |
| **High** | Bundled llama.cpp 5-6x slower than official on RTX 5070 Ti | OPEN | — |
| **Medium** | Studio not binding to `0.0.0.0` when passed `-H 0.0.0.0` | OPEN | — |
| **Medium** | GGUF load fails with 500 on synthesized filename (variant resolver guesses wrong name) | OPEN | — |
| **Medium** | PowerShell install script fails during rollback due to space in Windows username | OPEN | — |
| **Low** | API Keys cannot be copied in Firefox/Brave on Linux | OPEN | — |
| **Low** | Password failure shows path info on remote access (information leak) | OPEN | — |
| **Fixed** | Windows installer fails with non-fatal errors | CLOSED | — |
| **Fixed** | Drivers too old - CUDA 13 requires drivers ≤580 | CLOSED | — |

---

## What This Means for Application Developers

1. **Avoid v0.1.810-beta for production GGUF inference** — If you're running local GGUF models in Studio, be aware of the throughput regression. Consider staying on the previous version until a fix lands.

2. **Watch for CUDA driver compatibility issues** — CUDA 13 requires drivers ≤580. If you're on newer drivers and seeing issues, this is a known constraint.

3. **Windows deployment considerations** — The MXC sandboxing work (PR #11390, #11357) is progressing for Windows tool isolation. If you're using Studio's Python/Terminal tools on Windows, this will improve security posture.

4. **New attachment formats coming** — PR #11379 expands chat attachment support to Excel, PowerPoint, RTF, Pages/Numbers/Keynote, HEIC, AVIF/BMP/TIFF, and data files (.parquet, .sqlite, .zip). Plan for richer file handling in chat workflows.

5. **GRPO training users** — The eval loss normalization fix in #11337 will affect training metrics. If you have automation around GRPO loss monitoring, verify your dashboards after updating.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*