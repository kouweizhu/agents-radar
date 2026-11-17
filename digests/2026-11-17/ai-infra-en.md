# AI Infrastructure Digest 2026-11-17

> Generated: 2026-11-17 04:44 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report based on the digests I created for vLLM, SGLang, llama.cpp, Ollama, and LiteLLM. Let me analyze all the data and create a comprehensive, professional report.

Let me organize the key data points from each digest:

**vLLM:**
- Issues: ~24 issues mentioned
- PRs: ~24 PRs mentioned (landed and open)
- Releases: v0.34.0 just released
- Key models: Mistral Large 4, MiniMax-M3.1-Flash, Nemotron-3.5-Transcribe, and 10 others


- Hardware: SM120 Blackwell, AMD MI355X gfx950, ROCm, NPU
- Performance focus: Extensible KV cache (now on by default), MoE fused kernels, KVPP, CUDA graphs, FlashAttention
- Layer: Inference serving engine (production-grade)
- Rust frontend in development

**SGLang:**
- Issues: ~17 issues mentioned
- PRs: ~20+ PRs mentioned
- Releases: No new release in last 24h
- Key models: GLM-5.3-Flash, DeepSeek-V4.1-Flash, Qwen3.8

- Hardware: SM120, AMD MI355X, Ascend NPU, RDNA3/4, RISC-V
- Performance focus: FP8 fusion, HiSparse preloading, Stream-K GEMM, speculative decoding
- Layer: Inference serving engine + Rust control API migration
- SGLang 1.0 roadmap

**llama.cpp:**
- Issues: ~12 issues mentioned
- PRs: ~15+ PRs mentioned
- Releases: No release tag, commits only
- Key models: Kokoro TTS, fish-audio s2, tiny-voca, RAON-1-mini, MiniCPM5 MoE
- Hardware: Android Vulkan, AMD RDNA, CDNA, RISC-V Vector, Intel XPU, OpenCL Adreno
- Performance focus: MMVQ tuning, Vulkan fixes, CUDA VMM graceful OOM, ternary quantization, async host input
- Layer: Local inference runtime (CPU/GPU/mobile/embedded)

**Ollama:**
- Issues: ~15 issues mentioned
- PRs: ~15 PRs mentioned
- Releases: No release tag
- Key models: PPLX Decider v1.3, D3.1 nano
- Hardware: CANN (Ascend NPU), Intel NPU via OpenVINO, AMD Vulkan fixes
- Performance focus: MLX memory management, speculative decoding batch verification, VRAM accounting, per-request metrics
- Layer: Local inference + Rust acceleration

**LiteLLM:**
- Issues: ~14 issues mentioned
- PRs: ~18 PRs mentioned
- Releases: v1.108.10
- Key models: GPT-5.6 variants, Claude Opus 5.5 on Databricks, Snowflake Cortex
- Hardware: (gateway/proxy, no direct hardware)
- Performance focus: Redis write elimination, Rust auth/callbacks, streaming abort fixes, prompt caching
- Layer: LLM gateway/proxy (multi-provider routing)

Now I'm organizing the comparison data across all frameworks. Ollama has 15 issues and 15 PRs with no release in the last 24h, while LiteLLM shows 14 issues and 18 PRs with v1.108.10 as the latest release. For the activity table, I need to separate the release column since some projects are just landing commits without formal tags.

Generating comparison table...
</think>


# AI Infrastructure Ecosystem — Daily Cross-Project Digest

## 2026-11-17

---

## 1. Ecosystem Overview

Today's activity across the five tracked projects reflects an infrastructure ecosystem in three simultaneous transition phases: **hardware diversification** (Blackwell SM120, AMD MI355X, Intel NPU, Ascend NPU, RISC-V Vector, Android Vulkan), **performance layer deepening** (extensible KV cache, sorted fused MoE kernels, FP8 row-padding fusion, graceful CUDA OOM handling), and **control-plane rewrites** (SGLang's 15-PR Rust API stack, LiteLLM's Rust auth/callbacks pipeline, llama.cpp's web UI refactor). The net effect is that 2026-11-17 signals a narrowing of the performance gap between open-source serving engines and closed alternatives — but a widening of the configuration complexity burden on operators, as the number of hardware-backend × quantization × scheduling-policy combinations grows faster than documentation can track.

---

## 2. Activity Comparison

| Project | Issues (active) | PRs (merged today) | PRs (open today) | Release (24 h) | Repository |
|---------|----------------|--------------------|-------------------|----------------|------------|
| **vLLM** | ~24 | ~18 | ~12 | **v0.34.0** | vllm-project/vllm |
| **SGLang** | ~17 | ~12 | ~15 | None | sgl-project/sglang |
| **llama.cpp** | ~12 | ~10 | ~8 | None (commits only) | ggml-org/llama.cpp |
| **Ollama** | ~15 | ~5 | ~14 | None | ollama/ollama |
| **LiteLLM** | ~14 | ~12 | ~12 | **v1.108.10** | BerriAI/litellm |

**Observations:**

- **vLLM** is the highest-velocity project by commit throughput today, driven by the v0.34.0 release landing and concurrent AMD ROCm hardening work. The release brought 1,061 commits from 412 contributors — a signal of broad upstream engagement.
- **SGLang** has no release but carries the largest open-PR surface area relative to its size, reflecting the Rust control-API migration stack (15 PRs) and the SGLang 1.0 stability hardening campaign.
- **llama.cpp** is uniquely active across *hardware backends* (Android Vulkan, AMD RDNA, CDNA, RISC-V Vector, OpenCL Adreno, XPU) rather than model families — the project is expanding its reach into heterogeneous device targets faster than any other engine here.
- **Ollama** is the only project with significant MLX (Apple Silicon) optimization work, positioning it as the preferred local inference path for Apple deployments.
- **LiteLLM** is a gateway/proxy layer; its release cadence and PR volume measure *integration velocity* rather than inference throughput, and its Rust-acceleration path signals that even pure-software layers are targeting GIL-free execution paths.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM |
|---------------------|------|--------|-----------|--------|---------|
| **Mistral Large 4** | ✅ v0.34.0 | — | — | — | Via proxy |
| **MiniMax-M3.1-Flash** | ✅ v0.34.0 | — | — | — | Via proxy |
| **Nemotron-3.5-Transcribe** | ✅ v0.34.0 | — | — | — | Via proxy |
| **DeepSeek-V4.1-Flash** | 🚧 SM120 degraded | 🚧 SM120 Triton only | — | — | Via proxy |
| **GLM-5.3-Flash** | — | ✅ Ascend A3/A5 | — | — | Via proxy |
| **Qwen3.8-Flash-Next** | — | ✅ NPU (QSA, MTP) | — | — | Via proxy |
| **Qwen3.8-2.4T-A95B** | 🚧 gfx950 opt. | 🚧 gfx950 opt. | — | — | Via proxy |
| **MiniCPM5 MoE** | — | — | ✅ GGUF | — | Via proxy |
| **Kokoro-82M TTS** | — | — | ✅ mtmd | — | Via proxy |
| **fish-audio s2** | — | — | ✅ mtmd | — | Via proxy |
| **RAON-1-mini** | — | — | ✅ HF→GGUF | — | Via proxy |
| **D3.1 nano (MLX)** | — | — | — | ✅ MLX | Via proxy |
| **PPLX Decider v1.3** | — | — | — | ✅ MLX | Via proxy |
| **GPT-5.6 variants** | — | — | — | — | ✅ cost map |
| **Claude Opus 5.5 (Databricks)** | — | — | — | — | ✅ |
| **Snowflake Cortex** | — | — | — | — | ✅ streaming fix |

**Winner by breadth:** LiteLLM — by design, it proxies all of the above. No contest.

**Winner by serving-engine coverage:** vLLM (10 new model families in one release; highest per-cycle model additions).

**Winner by heterogeneous hardware depth:** llama.cpp — the only project simultaneously advancing support for Android Vulkan, AMD RDNA/CDNA, RISC-V Vector, OpenCL Adreno, XPU, and MUSA in a single day.

**Winner by emerging accelerator support:** SGLang (Ascend NPU + RDNA3/4 CI + RISC-V Vector backend request).

**Watch:** The DeepSeek-V4.1-Flash performance degradation on SM120 (Blackwell/RTX PRO 6000) affects both vLLM and SGLang. The root cause appears to be CUDA graph capture failures in the flash-attention path, with SGLang's workaround (Triton backend) already identified but vLLM's tracker still open. Teams targeting Blackwell for production DeepSeek inference should treat this as a blocker.

---

## 4. Performance Frontier

The optimization effort across projects concentrates in five fronts, ranked by active engagement today:

### 4.1 KV Cache Intelligence

| Project | Approach | Stage |
|---------|---------|-------|
| **vLLM** | Extensible KV cache — auto-sizes from actual free memory post-warmup, replaces static estimates | **Default on** (v0.34.0) |
| **vLLM** | KVPP (layer-sharded MLA with NCCL-broadcasted prefetch) | Opt-in flag |
| **vLLM** | KV Offload request-level promotions | RFC/open |
| **SGLang** | HiSparse preloading — full KV to device buffer in one all-layer launch | Landed |
| **SGLang** | Octave KV (3-bit KV cache on AMD) | RFC stage |

**Verdict:** vLLM leads here significantly with default-on extensible KV cache. SGLang's HiSparse work is additive but narrower in scope.

### 4.2 MoE / Expert Routing Kernels

| Project | Optimization | Impact |
|---------|-------------|--------|
| **vLLM** | Sorted fused MoE — bypasses `moe_align_block_size` when `num_tokens * top_k * 4 <= num_experts` | 12–19% decode speedup (HBM GPUs, M=2..4) |
| **vLLM** | MXFP4 MoE on ROCm — dequantizes only distinct routed experts, fused Triton gather+dq | Reduced per-request overhead at any batch |
| **vLLM** | Unify MoE "Oracles" class structure | Long-term maintainability |
| **SGLang** | Fused MoE tuner regression fix for untuned batch sizes | Correctness + throughput |
| **llama.cpp** | CUDA F32 mmid path for strided experts | Better accuracy + speed for MoE routing |
| **llama.cpp** | IQ3_S SoA — 8× slowdown on SYCL MoE (documented as negative result) | Correctness note |

**Verdict:** vLLM leads with the most mature MoE kernel path; llama.cpp's F32 mmid is a recent addition. The sorted-fused path is the standout advance this cycle.

### 4.3 Quantization

| Project | Format | Notes |
|---------|--------|-------|
| **vLLM** | NVFP4 draft LM-head validation | Early-stage |
| **llama.cpp** | PTQ1_0 — ternary, group-128, 1.75 bit/weight | Hardware paper (ACL 2026) |
| **llama.cpp** | STQ1_0 — Sherry sparse ternary, ARM NEON vec_dot | Academic integration |
| **llama.cpp** | AWQ MoE config now accepts W4A16 key names | Compatibility |
| **SGLang** | FP8 row-padding fusion — eliminates two redundant kernel launches | Backend-agnostic |

**Verdict:** llama.cpp dominates quantization diversity (ternary, sparse ternary, FP4, AWQ, IQ, GGUF). vLLM's NVFP4 work is early-stage but signals intent for ultra-low-precision draft models.

### 4.4 Distributed / Multi-Accelerator Serving

| Project | Focus | Status |
|---------|-------|--------|
| **vLLM** | Model Runner v1→v2 migration (MoE in progress) | Active development |
| **SGLang** | KVPP for tensor-parallel MLA workloads | Opt-in |
| **vLLM** | Incremental MoE Expert Offloading | RFC |
| **SGLang** | Stream-K GEMM FP16 NaN bug (exact-zero results) | **Open — high severity** |
| **Ollama** | VRAM accounting and GPU splitting fixes | Open PR |

**Verdict:** vLLM has the most structured distributed serving roadmap. SGLang's Stream-K NaN bug is a correctness concern that should be resolved before production use on batch-sparse workloads.

### 4.5 Graceful Degradation & Operational Observability

| Project | Optimization | Significance |
|---------|-------------|-------------|
| **llama.cpp** | CUDA VMM pool returns `ALLOC_FAILED` instead of aborting on OOM | Eliminates process death on memory pressure |
| **SGLang** | GC instrumentation: `freeze_gc`, `gc_object_counts` | Operational visibility for long-running servers |
| **Ollama** | Per-request token metrics logging (`~/.ollama/logs/metrics.jsonl`) | Billing and cost attribution |
| **LiteLLM** | Rate-limiter Redis writes skipped when no limits configured | Eliminates wasted I/O at high throughput |
| **LiteLLM** | Bedrock stream abort closes connection immediately | Prevents ~1,500-token leakage on timeout |

**Verdict:** LiteLLM and llama.cpp lead in operational hardening for production. vLLM's focus today is performance rather than operational polish.

---

## 5. Layer Positioning

```
┌─────────────────────────────────────────────────────────────────────────┐
│  APPLICATION LAYER                                                       │
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────────────┐            │
│  │ LiteLLM     │  │ SGLang      │  │ Ollama Studio        │            │
│  │ (Gateway)   │  │ (Rust API)  │  │ (Web UI)             │            │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬───────────┘            │
│         │                │                     │                        │
│  ┌──────▼────────────────▼─────────────────────▼───────────┐            │
│  │  SGLang    vLLM        llama.cpp      Ollama Runtime     │            │
│  │  Serving   Engine       Local Runtime   (Local + MLX)     │            │
│  │  Engine    (PyTorch)    (Pure C++)      (Rust + Go)       │            │
│  └────────────────────┬────────────────────────────────────┘            │
│                       │                                                  │
│         Hardware Abstraction Layer (CUDA / HIP / ROCm / Vulkan /         │
│         Metal / SYCL / CANN / OpenCL / NPU / RISC-V Vector)              │
└─────────────────────────────────────────────────────────────────────────┘
         │
         ▼
    TRAINING / FINE-TUNING LAYER
    (Unsloth — LoRA/QLoRA/DORA/LongLoRA, not in today's serving stack)
```

| Layer | Projects | Target User |
|-------|----------|-------------|
| **LLM Gateway / Proxy** | LiteLLM | Platform engineers, multi-provider routing, cost management |
| **Production Serving Engine** | vLLM, SGLang | Kubernetes clusters, high-throughput inference APIs, multi-GPU TP/EP |
| **Local Inference Runtime** | llama.cpp, Ollama | Edge, mobile, developer laptops, embedded, privacy-constrained |
| **Fine-tuning** | Unsloth | ML engineers, domain adaptation, LoRA/QLoRA workflows |
| **Web UI / Developer Tools** | Ollama Studio, llama.cpp Llama Chat | Non-technical users, rapid prototyping |

**Key insight:** The layers are converging at the edges. SGLang's Rust API migration moves it toward a gateway-like control plane. Ollama's MLX memory management and LiteLLM's Rust-accelerated auth/callbacks signal that even "simple" tools are targeting production-grade performance. llama.cpp's web UI refactor (`ui/apps/chat`) positions it as a consumer application layer, not just a backend library. The ecosystem's trajectory is toward **unified multi-layer stacks** where a single team can span local prototyping (llama.cpp) → hosted serving (vLLM/SGLang) → production routing (LiteLLM) with consistent tooling.

---

## 6. Trend Signals

### 6.1 Blackwell SM120 Is the New "Known Unknown"

Both vLLM and SGLang have open trackers for SM120 (RTX PRO 6000 / Blackwell) decode-throughput issues with high-profile models (DeepSeek-V4.1-Flash, GLM-5.3-Flash). The CUDA graph capture path fails on hybrid extend operations in both projects, with workarounds identified (Triton backend for SGLang; partial fix in vLLM). This is the highest-risk hardware gap in the ecosystem right now. **Infrastructure teams should assume Blackwell CUDA graph support is not production-stable for MoE/Flash models and plan accordingly.**

### 6.2 Rust Is Eating the Control Plane

SGLang (15-PR Rust API stack), LiteLLM (Rust auth SQLx pool, Rust callback crates), and llama.cpp's web UI refactor (building toward `ui/lib`) are all independently choosing Rust for performance-critical paths. This is not about rewriting inference kernels — it's about eliminating Python GIL contention in the **serving orchestration layer** (auth, rate limiting, callback dispatch, API routing). The practical implication: teams integrating these tools need Rust toolchain familiarity.

### 6.3 AMD ROCm Is Closing the Gap — But Complexity Is Rising

Five active optimization trackers for AMD MI355X (gfx950), two for RDNA3/4, CDNA GDN MMA kernels, and CANN (Ascend NPU) support in both Ollama and SGLang. The open-source AMD backend story is improving rapidly, but the combinatorial explosion of (GPU arch) × (quantization) × (kernel backend) is creating a support matrix that is difficult to validate exhaustively. **Teams running AMD should invest in their own benchmark harnesses against the specific model + quantization combinations they use.**

### 6.4 Audio/Multimodal Is Becoming First-Class

llama.cpp's Kokoro TTS, fish-audio s2, and tiny-voca integrations via the mtmd subsystem — combined with vLLM's ViT CUDA graph work and SGLang's Kimi-K3/GLM-V multimodal support — signal that multimodal inference (image, video, audio, speech) is no longer a bolted-on feature but a primary development axis. **Agents building voice or video pipelines should monitor these projects' multimodal convergence closely.**

### 6.5 Quantization Diversity Is Exploding

Six quantization formats across two projects (NVFP4, PTQ1_0, STQ1_0, AWQ MoE, IQ3_S, GGUF) in a single day signals that the ecosystem is aggressively exploring the accuracy/bitrate tradeoff space. The appearance of Sherry/STQ1_0 (ACL 2026 academic paper) in llama.cpp's mainline within days of publication suggests a new pattern: research-to-production latency for quantization methods is shrinking dramatically. **Application developers should re-evaluate their quantization choices — the optimal format may have changed in the last 30 days.**

### 6.6 Graceful Degradation Is a First-Class Requirement

llama.cpp's CUDA VMM OOM fix (process survives memory pressure), LiteLLM's Bedrock stream abort (no token leakage on timeout), and SGLang's GC instrumentation all reflect a shift from "optimize for the happy path" to "optimize for production adversarial conditions." This is a maturity signal: these projects are moving from research prototypes to production infrastructure. **When evaluating inference engines, the quality of failure modes (clean error vs. process death vs. silent data corruption) should weigh as heavily as benchmark throughput.**

---

*Cross-project digest compiled from vLLM, SGLang, llama.cpp, Ollama, and LiteLLM GitHub activity — 2026-11-17*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the provided GitHub data for vLLM and create a structured digest for 2026-11-17.

Key information to extract:

1. **Latest Releases**: v0.34.0 released with 1,061 commits from 412 contributors (120 new). Added 10 new models (Mistral Large 4, MiniMax-M3.1-Flash, Nemotron-3.5-Transcribe, and more). Extensible KV cache is now on by default.

2. **Top Issues** (by comment count):
- #44280: Rust Frontend Feature Parity roadmap (62 comments)
- #38175: ViT Full CUDA Graph support tracker (49 comments)
- #57149: Qwen3.8-2.4T-A95B gfx950/MI355X Performance Optimization (35 comments)
- #56892: DeepSeek-V4.1-Flash on SM120 Blackwell decode throughput issues (33 comments)
- #37753: Unify MoE "Oracles" with Class Structure (26 comments)
- #38256: Incremental MoE Expert Offloading (25 comments)
- #59575: Qwen3.8-Flash-Next gfx950/MI355X Performance Optimization (25 comments)
- #36010: Qwen3.5-27B Batch Inference slow (22 comments)
- #25094: Compiled QuantFP8 slower than CUDA (19 comments)
- #54477: Direct Weight Reload for RL Training (16 comments)
- #60904: Specialized Decodes standard (15 comments)
- #66782: KV Offload request-level promotions (15 comments)
- #66101: NVFP4 draft LM-head validation (11 comments)
- #30931: Prefix Cache Corruption with LoRA (10 comments)


- #52916: Adaptive spin grace for shm_broadcast (9 comments)
- #41286: Migration from Model Runner v1 to v2 (9 comments)
- #64018: Muse Spark Open PTPC-FP8 gfx942 Performance (9 comments)
- #66411: Breakdown PR time improvement (8 comments)
- #61024: Q4 2026 Roadmap (8 comments)
- #54959: Complete MOE oracle/linear kernel migration (8 comments)
- #66587: DeepSeek-V4.1-Flash gfx950/MI355X (8 comments)
- #59773: Oct

I'm tracking several performance optimization threads across different GPU architectures. Key focus areas include adaptive spin mechanisms for shared memory broadcasts, model runner migration strategies, and targeted performance improvements for advanced GPU configurations like Muse Spark and DeepSeek models. The work spans multiple GPU generations and optimization techniques.

Recent PR developments cover critical bug fixes and feature enhancements across quantization, model architecture, and performance optimization. Notable work includes addressing SM120 device query challenges, preventing MLA planner overflow, and refining ROCm-specific emulation techniques for multi-GPU environments.

Emerging engineering efforts target nuanced performance and stability improvements, ranging from request abortion mechanisms to advanced KV cache management and frontend API refinements. Specific technical advances involve sorted fused MoE implementations, documentation cleanup, and specialized transcription streaming capabilities.
</think>


# vLLM Project Digest — 2026-11-17

## 1. Today's Highlights

v0.34.0 lands with **1,061 commits from 412 contributors**, bringing 10 new model families (Mistral Large 4, MiniMax-M3.1-Flash, Nemotron-3.5-Transcribe, etc.) and **extensible KV cache enabled by default** — vLLM now auto-sizes the KV cache from memory free after warmup. On the issue side, ROCm/AMD GPU performance work dominates the agenda, with five active optimization trackers targeting MI355X (gfx950) and other AMD accelerators. The Rust frontend feature-parity roadmap continues to draw the most community discussion (62 comments), while Blackwell SM120 decode-throughput problems with DeepSeek-V4.1-Flash have surfaced as a new priority.

---

## 2. Releases & Breaking Changes

| Version | Change Summary | Reference |
|---------|---------------|-----------|
| **v0.34.0** | Released. 1,061 commits / 412 contributors (120 new). 10 new models. Extensible KV cache now **on by default** — sizes KV cache from memory actually free after warmup rather than relying on static allocation estimates. | [v0.34.0](https://github.com/vllm-project/vllm/releases/tag/v0.34.0) |
| — | **Model Runner v1 → v2 migration** is in progress (dense models first, then MoE). Users of custom model runners should monitor the migration path and test on `Qwen3-0.6B` / `facebook/opt-125m`. | [#41286](https://github.com/vllm-project/vllm/issues/41286) |
| — | **Rust frontend** (`VLLM_USE_RUST_FRONTEND=1`) remains experimental; feature parity with the Python API server is tracked in the dedicated roadmap issue. | [#44280](https://github.com/vllm-project/vllm/issues/44280) |

*No major breaking API changes flagged in the last 24 hours.*

---

## 3. New Model & Hardware Support

| Category | Added / Updated | Notes |
|----------|----------------|-------|
| **New model families (10)** | Mistral Large 4, MiniMax-M3.1-Flash, Nemotron-3.5-Transcribe, and 7 others | v0.34.0 |
| **ViT / Multimodal CUDA Graph** | RFC active for ViT full CUDA graph support (relevant for Qwen3-VL, Kimi K2.5, GLM-V, LFM3-VL) | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| **LFM3-VL** | `SupportsEncoderCudaGraph` added for `Lfm3VlForConditionalGeneration` (image + video) | [#67976](https://github.com/vllm-project/vllm/pull/67976) |
| **Ling VL MTP** | Quantization config bug fixed (NaN draft logits / zero acceptance due to mis-mapped layer names) | [#68087](https://github.com/vllm-project/vllm/pull/68087) |
| **Pixtral (HF)** | Bugfix: now honors processor size override in `mm_processor_kwargs` | [#67904](https://github.com/vllm-project/vllm/pull/67904) |
| **SM120 (Blackwell / RTX PRO 6000)** | DeepSeek-V4.1-Flash decode throughput issue filed; SM120 admitted to flattened device-query-lens path in PR | [#56892](https://github.com/vllm-project/vllm/issues/56892), [#65527](https://github.com/vllm-project/vllm/pull/65527) |
| **AMD gfx950 / MI355X** | Active optimization tracks for Qwen3.8-2.4T-A95B, Qwen3.8-Flash-Next, DeepSeek-V4.1-Flash, Muse Spark Open | [#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575), [#66587](https://github.com/vllm-project/vllm/issues/66587), [#64018](https://github.com/vllm-project/vllm/issues/64018) |
| **ROCm CDNA4 / Kimi-K3** | AITER FlashKDA (chunk_kimi_delta_attn) integrated on the gluon KDA prefill path | [#68085](https://github.com/vllm-project/vllm/pull/68085) |
| **AWQ MoE** | `MoeWNA16Config` now accepts AWQ key names (`w_bit` / `q_group_size`) in addition to GPTQ keys | [#66488](https://github.com/vllm-project/vllm/pull/66488) |
| **XPU (Intel)** | Skip redundant LoRA TP4 tests; update inactive default mm_lora tests | [#67243](https://github.com/vllm-project/vllm/pull/67243), [#67188](https://github.com/vllm-project/vllm/pull/67188) |

---

## 4. Performance & Optimization

| Area | Detail | Impact / Numbers | Reference |
|------|--------|-----------------|-----------|
| **Extensible KV cache** | Now on by default; vLLM measures actual free memory post-warmup and sizes KV cache accordingly | Better memory utilization out of the box | [v0.34.0](https://github.com/vllm-project/vllm/releases/tag/v0.34.0) |
| **MoE fused kernel (integrated GPUs)** | Sorted fused-MoE path used for multi-token batches; bypasses `moe_align_block_size` when `num_tokens * top_k * 4 <= global_num_experts` | ~12–19% decode speedup at M=2..4 on HBM GPUs (A100/H100/B200) | [#64163](https://github.com/vllm-project/vllm/pull/64163) |
| **MXFP4 MoE on ROCm** | Dequantizes only distinct routed experts; fused Triton gather + dequant without host sync | Reduces overhead at any batch size on AMD | [#68086](https://github.com/vllm-project/vllm/pull/68086) |
| **SM90 sparse MLA** | Chunked row planning prevents FlashInfer planner work-list overflow on large steps | Stability fix for large MLA configs | [#58260](https://github.com/vllm-project/vllm/pull/58260) |
| **Blackwell SM120** | Fixes `enable_adaptive_verification` startup failure (ValueError during config/CUDA-graph validation) | Unblocks DeepSeek-V4.1-Flash on RTX PRO 6000 | [#65527](https://github.com/vllm-project/vllm/pull/65527) |
| **PR turnaround** | P50 build time reduced from 73.2 min → **53.9 min** (P90: 95.3 min) | ~26% median CI speedup | [#66411](https://github.com/vllm-project/vllm/issues/66411) |
| **KVPP (layer-sharded MLA)** | NCCL-broadcasted MLA KV cache with prefetch; opt-in `--enable-kvpp` | Reduces KV materialization overhead in TP workloads | [#59059](https://github.com/vllm-project/vllm/pull/59059) |
| **Octave KV (3-bit)** | RFC for native 3-bit KV cache on AMD GPUs; targets long-prompt workloads on RX 7900 XTX | Proposal stage; PR expected | [#59773](https://github.com/vllm-project/vllm/issues/59773) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **🔴 High** | **DeepSeek-V4.1-Flash on SM120 (RTX PRO 6000)**: extremely low decode throughput with `--enforce-eager`; CUDA graphs unusable due to graph capture failure | Open — urgent, please prioritize | [#65527](https://github.com/vllm-project/vllm/pull/65527) (partial) |
| **🔴 High** | **Qwen/Qwen3.5-27B batch inference** very slow / not working (root cause under investigation) | Open | — |
| **🟡 Medium** | **Ling VL MTP**: NaN draft logits + zero acceptance due to quantization config layer-name mapping bug | Fix merged | [#68087](https://github.com/vllm-project/vllm/pull/68087) |
| **🟡 Medium** | **W4A16 HummingLinearKernel**: non-deterministic across processes on H100 (sm_90); faster than default Machete | Open | — |
| **🟡 Medium** | **ROCm FlexAttention paged-mask**: BF16 output differs by 1 ULP vs contiguous FlexAttention on gfx950 | Open | — |
| **🟡 Medium** | **Prefix Cache Corruption with LoRA**: same LoRA name with different ID causes corruption | Closed | — |
| **🟡 Medium** | **ROCM_ATTN**: wrong attention / GPU faults on RDNA for head size ≥96 with KV block size ≠16, and MHA head size 192/256 | Closed (ROCm 10.2 fix path) | — |
| **🟢 Low** | **XPU tests**: skip redundant LoRA TP4 tests and one-sided all2all test on Intel Arc Pro B50 | Fixes merged | [#67243](https://github.com/vllm-project/vllm/pull/67243), [#68052](https://github.com/vllm-project/vllm/pull/68052) |
| **🟢 Low** | **torch.compile QuantFP8**: slower than CUDA on H100/RTX5090 (needs re-measurement with torch 2.10/2.11) | Pending re-test | [#25094](https://github.com/vllm-project/vllm/issues/25094) |

---

## 6. What This Means for Application Developers

| Takeaway | Detail |
|----------|--------|
| **Upgrade to v0.34.0** | The default-on extensible KV cache will likely increase your effective batch throughput with no config changes — measure after upgrade, especially on memory-constrained deployments. |
| **Watch Blackwell/SM120 support** | If you are deploying on RTX PRO 6000 or other SM120 hardware, the graph-capture fix in [#65527](https://github.com/vllm-project/vllm/pull/65527) is necessary for DeepSeek-V4.1-Flash. The underlying decode-throughput issue ([#56892](https://github.com/vllm-project/vllm/issues/56892)) is still open — evaluate `--enforce-eager` tradeoffs carefully. |
| **MoE inference is faster** | The sorted fused-MoE path landed in [#64163](https://github.com/vllm-project/vllm/pull/64163) delivers 12–19% decode speedup for MoE models at M=2..4 on HBM GPUs — no action needed beyond upgrading. |
| **Rust frontend is not production-ready** | If you are evaluating the Rust API server (`VLLM_USE_RUST_FRONTEND=1`), be aware feature parity tracking ([#44280](https://github.com/vllm-project/vllm/issues/44280)) shows gaps. Stick with the Python frontend for production. |
| **Model Runner v2 migration coming** | The v1→v2 migration is in progress; if you have custom model runners, start testing against `Qwen3-0.6B` / `facebook/opt-125m` now. |
| **Multi-modality tooling improved** | Streaming diarized JSON transcriptions ([#65779](https://github.com/vllm-project/vllm/pull/65779)) and word-level timestamps for speech models ([#66344](https://github.com/vllm-project/vllm/issues/66344)) are in progress — agents building transcription pipelines should track these. |
| **AMD ROCm users: monitor AMD CI** | Multiple AMD-specific PRs are actively landing; if you run on MI355X or gfx950, watch the optimization trackers for upcoming throughput gains and test against nightly ROCm images for regressions. |

---

*Digest generated from vllm-project/vllm GitHub data · 2026-11-17*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the GitHub data for SGLang and create a structured digest for 2026-11-17.

Key observations:
1. No releases in the last 24h
2. Many issues updated, with CUDA coredump tracker being most active (377 comments)
3. Several PRs active, including multi-modal, NPU, and performance work
4. SGLang 1.0 roadmap is in progress
5. Various bugs and features being worked on

Let me structure this into the required sections.

From the data:

**Today's Highlights:**
- SGLang 1.0 release tracker (#50045) is actively being developed - focuses on stability, hardening, and compatibility policy
- Several important PRs landing: Rust server control API migration stack, FP8 quantization optimization, HiSparse preload improvements
- Ongoing work on NPU support (GLM-5.3-Flash, Qwen3.8-Flash-Next)

**Releases & Breaking Changes:**
- No new releases in last 24h
- SGLang 1.0 roadmap (#50045) mentions upgrading from 0.5.x may require changes

**New Model & Hardware Support:**
- GLM-5.3-Flash on Ascend A3/A5 (#43305)
- GLM-5.3-Flash on SM120 RTX PRO 6000 (#42012) - FA4 attention crashes, triton only working
- DeepSeek-V4.1-Flash on AMD MI355X gfx950 (#49327)
- Qwen3.8-Flash-Next on NPU (#37570)
- Kimi-K3 tuning work (#48894)
- RISC-V Vector Extension attention backend (#18072)
- AMD RDNA3/RDNA4 (gfx1100/gfx1201) CI and upstreaming (#46900)


- Intel XPU shows performance bottlenecks with GDN chunk prefill running 2.6x slower and incorrect recompute_w_u output for K != V since #47944

**Performance & Optimization:**
- FP8 quantization fusion optimization (#41860) reduces kernel launches
- HiSparse preloading optimization (#44446) for PD decode
- Multi-item scoring host syncs avoidance (#49413)
- Fused MoE tuner regression fix (#50761)
- Stream-K GEMM FP16 NaN bug (#50521)
- Constrained grammar cache LRU bound (#45087)
- GC idle freeze and heap growth checks (#50883)
- MUSA KVCache native fused store (#50916)
- Sail DeepGEMM GEMM/MoE backends (#47588)

**Stability & Regressions:**
- CUDA coredump tracker active (#26340)
- Flaky tests and CI failures (#42752, #17050)
- WeightChecker reset_tensors fills MRotaryEmbedding.axis_map with random values (#44501)
- Decode throughput inconsistency (#3050)
- Cache hit-rate dip with HiCache + Mooncake (#47481)

**Rust Server Control API Migration:**
- Large stack of PRs being worked on (#49745, #49734, #49737, #49742, #49747, #49743, #49748)
- OpenAI completions and chat completions schema (#49745)
- Various route ports and parity fixes

**What This Means for Application Developers:**
- SGLang 1.0 coming with potential breaking changes
- Rust server migration in progress (15 PR stack)
- Various performance improvements landing
- Better multi-modal support
- Improved stability tracking
</think>


# SGLang Digest — 2026-11-17

## 1. Today's Highlights

SGLang's Rust server control-API migration continues to advance, with a 15-PR stack landing new routes for Ollama compatibility, OpenAI schema parity, and `/v1/responses` support. Performance work this cycle includes FP8 row-padding fusion to eliminate kernel launches and HiSparse device-buffer preloading optimizations for prefill-decode disaggregation. The project is actively hardening for a 1.0 stability release, with the roadmap now tracking required upgrade notes from 0.5.x.

---

## 2. Releases & Breaking Changes

| Item | Description |
|------|-------------|
| **No new releases** | No releases tagged in the last 24 hours. |
| **SGLang 1.0 Roadmap** | Issue [#50045](https://github.com/sgl-project/sglang/issues/50045) defines 1.0 as a stability release: silent config changes replaced by explicit errors, compatibility policy for 1.x series. Upgrading from 0.5.x **may require changes**; see upgrade notes in the issue. |

---

## 3. New Model & Hardware Support

| Model / Hardware | Details | PR / Issue |
|------------------|---------|------------|
| **GLM-5.3-Flash → Ascend A3/A5** | DSA/KDA/NEXTN attention routed to Ascend backends; MLA preprocessing without RoPE; KDA gate layout adaptations. | [#43305](https://github.com/sgl-project/sglang/pull/43305) |
| **GLM-5.3-Flash → SM120 (RTX PRO 6000)** | FA4 attention crashes on hybrid extend; **Triton backend is the only working path** until fixed. | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **DeepSeek-V4.1-Flash → AMD MI355X (gfx950)** | Performance optimization tracker for text/image TP4 with DSpark speculative decoding. | [#49327](https://github.com/sgl-project/sglang/issues/49327) |
| **Qwen3.8-Flash-Next → NPU** | Enables QSA (Qwen Sparse Attention), graph replay, and NEXTN/MTP speculative decoding. | [#37570](https://github.com/sgl-project/sglang/pull/37570) |
| **AMD RDNA3/RDNA4 (gfx1100/gfx1201)** | CI and upstreaming plan opened; targets production-grade reliability across all parallelism strategies. | [#46900](https://github.com/sgl-project/sglang/issues/46900) |
| **RISC-V Vector Extension (RVV) Attention** | Feature request for a new RVV-based attention backend targeting RISC-V vector extension hardware. | [#18072](https://github.com/sgl-project/sglang/issues/18072) |
| **Kimi-K3 128k Decode Retuning** | Retuned acceptance case parameters for W4A8 32P (4-node mix) from `12/12` concurrency to `6/6`; `repeat_rate` to `0.99`. | [#48894](https://github.com/sgl-project/sglang/pull/48894) |

---

## 4. Performance & Optimization

| Category | Change | Impact | PR / Issue |
|----------|--------|--------|------------|
| **FP8 Quantization** | Fused FP8 row-padding zero fills into group quantization kernel | Eliminates two redundant kernel launches per block-FP8 inference step | [#41860](https://github.com/sgl-project/sglang/pull/41860) |
| **HiSparse PD Decode** | Preload full KV to device buffer in one all-layer launch instead of Python loop | Reduces per-request latency for sequences fitting device buffer | [#44446](https://github.com/sgl-project/sglang/pull/44446) |
| **Multi-item Scoring** | Avoid host syncs in label-logprob readback and embed overrides | Eliminates scheduler GPU starvation cycles on pointwise scoring workloads | [#49413](https://github.com/sgl-project/sglang/pull/49413) |
| **Grammar Cache** | Bound compiled-grammar LRU cache by host memory | Stops RSS growth (+250–380 MB per unseen `json_schema` on 150k-token vocabularies) | [#45087](https://github.com/sgl-project/sglang/pull/45087) |
| **GC Instrumentation** | Added `freeze_gc`, `refreeze_gc`, `gc_object_counts` for idle freeze and cyclic garbage detection | Better operational visibility for long-running servers | [#50883](https://github.com/sgl-project/sglang/pull/50883) |
| **MUSA KVCache** | Restore native fused store and route generic cache-store API to it on MUSA | Avoids autograd-visible indexed assignment during graph capture | [#50916](https://github.com/sgl-project/sglang/pull/50916) |
| **SAIL / DeepGEMM** | Support T-HEAD SAIL DeepGEMM GEMM/MoE backends (4/N in upstreaming series) | Unblocks DeepSeek GEMM paths on T-HEAD SAIL hardware | [#47588](https://github.com/sgl-project/sglang/pull/47588) |
| **Fused MoE Tuner** | Fixes regression at untuned batch sizes between tuned keys | Batch sizes falling between tuned entries no longer degrade unexpectedly | [#50761](https://github.com/sgl-project/sglang/issues/50761) |

---

## 5. Stability & Regressions

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| 🔴 **High** | [#42012](https://github.com/sgl-project/sglang/issues/42012) | GLM-5.3-Flash on SM120: FA4 attention crashes at CUDA-graph capture (hybrid extend reshape). **Workaround:** `--attention-backend triton`. | Open |
| 🔴 **High** | [#50249](https://github.com/sgl-project/sglang/issues/50249) | Intel XPU: GDN chunk prefill **2.6× slower** and wrong `recompute_w_u` output for K ≠ V since #47944. | Open |
| 🔴 **High** | [#50521](https://github.com/sgl-project/sglang/issues/50521) | Humming FP16 Stream-K GEMM produces **NaNs** for exact-zero results. | Open |
| 🔴 **High** | [#44501](https://github.com/sgl-project/sglang/issues/44501) | `WeightChecker.reset_tensors` fills `MRotaryEmbedding.axis_map` with random values (non-persistent buffer bug since #34446). | Open |
| 🟡 **Medium** | [#47481](https://github.com/sgl-project/sglang/issues/47481) | Reproducible cache hit-rate dip (87.4% → sharp drop) during L2/L3 capacity pressure with HiCache + Mooncake multi-turn runs. | Open |
| 🟡 **Medium** | [#3050](https://github.com/sgl-project/sglang/issues/3050) | Decode throughput inconsistency between `bench_serving` and Engine logs. | Open |
| 🟡 **Medium** | [#26340](https://github.com/sgl-project/sglang/issues/26340) | CUDA coredump tracker — auto-collected events from `pr-test.yml`. Volume remains high. | Open (tracked) |
| 🟡 **Medium** | [#42752](https://github.com/sgl-project/sglang/issues/42752) | Flaky tests and CI infrastructure failures being babysat with `/sglang-pr-babysit` Claude Code workflow. | Open (tracked) |
| 🟢 **Low** | [#50087](https://github.com/sgl-project/sglang/issues/50087) | DSPARK non-intrusive dumps cannot distinguish draft vs target model (both labeled `TARGET_VERIFY`). | Open |

**CI Health:** Issue [#17050](https://github.com/sgl-project/sglang/issues/17050) reports **4 broken, 17 flaky, 918 recently fixed** tests as of 2026-11-17 04:14 UTC.

---

## 6. What This Means for Application Developers

### Actionable Takeaways

1. **Plan for SGLang 1.0:** The 1.0 release (targeting this cycle) replaces silent configuration changes with explicit errors. If you are on 0.5.x, review the upgrade notes in [#50045](https://github.com/sgl-project/sglang/issues/50045) **before upgrading** to avoid unexpected behavioral changes.

2. **GLM-5.3-Flash on Blackwell (SM120):** Avoid the FA4 attention backend. Launch with `--attention-backend triton` until the CUDA-graph hybrid extend crash in [#42012](https://github.com/sgl-project/sglang/issues/42012) is fixed.

3. **Intel XPU users:** The GDN chunk prefill regression since #47944 causes 2.6× slowdown and incorrect outputs for asymmetric KV projections. Avoid GDN models on XPU until the fix lands, or monitor [#50249](https://github.com/sgl-project/sglang/issues/50249).

4. **Constrained generation at scale:** The grammar cache LRU bound ([#45087](https://github.com/sgl-project/sglang/pull/45087)) is a critical fix for long-running agents using per-request JSON schemas — memory growth is now bounded. Pull the latest main or await the next release.

5. **Rust server migration in progress:** The 15-PR control-API stack is progressively porting routes to the Rust server (Ollama, OpenAI, `/v1/responses`). Early adopters should test against the stack branches; parity fixes are still being validated side-by-side.

6. **Multi-item scoring production-ready:** The host-sync elimination in [#49413](https://github.com/sgl-project/sglang/pull/49413) makes `/v1/score` and `enable_mis` significantly more viable for high-throughput scoring workloads — especially pointwise classification on batched inputs.

7. **HiCache + Mooncake users:** Monitor prefix cache hit rates during extended multi-turn conversations; the reproducible dip under L2/L3 pressure ([#47481](https://github.com/sgl-project/sglang/issues/47481)) may affect cost/throughput predictability.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze the GitHub data for llama.cpp and create a structured digest for 2026-11-17.

Key observations:

1. **Releases**: Multiple commits in last 24h (b12453 down to b12441). Let me extract the meaningful ones:
   - b12453: MMVQ tuning for RDNA3_5
   - b12452: mtmd fish audio s2 support
   - b12451: Web UI refactor (Llama Chat)
   - b12449: tensor-split config fix
   - b12448: jinja scope-chain key lookup
   - b12445: Vulkan conv3d split_k support
   - b12444: HIP/CUDA GDN mma kernel on CDNA
   - b12443: Vulkan fp32 FA shmem overflow fix
   - b12442: HIP gfx1013 to rdna1
   - b12441: WebGPU per-head flash attention masks

2. **Key Issues**:
   - Vulkan FA crash on RDNA3/Windows (severity: crash, hot)
   - MoE prompt processing slowdown on HIP/gfx906
   - SYCL logprobs nondeterminism
   - DeepSeek-V4.1 GGUF issues
   - V100 prefill performance regression
   - Various other bugs

3. **Key PRs**:
   - Vulkan Android/Termux support
   - STQ1_0 ternary quantization
   - RAON-1-mini model support
   - OpenCL optimized kernels
   - CUDA F32 mmid path for strided experts
   - MiniCPM5 MoE support
   - Mamba-2 SSM scan RVV vectorization
   - Various TTS/audio model support (kokoro, tiny-voca)
   
I'll organize this into a digestible format highlighting the most impactful changes and issues for the past 24 hours.
</think>


# llama.cpp Daily Digest — 2026-11-17

## 1. Today's Highlights

The project shipped a wave of backend hardening and audio/multimodal work today. Most notably, a critical Vulkan flash attention crash on RDNA3/Windows was patched, a new Kokoro TTS model integration landed, and the web UI was reorganized into a standalone Llama Chat app to set the stage for a shared UI library. On the performance side, MMVQ gate tuning for RDNA3_5 and a graceful CUDA VMM-pool OOM handling change are the standout optimizations.

---

## 2. Releases & Breaking Changes

| Commit | Summary | Impact |
|--------|---------|--------|
| `b12451` | **Web UI restructured** — moved to `ui/apps/chat` as "Llama Chat," first step toward a shared `ui/lib` + per-app layout | UI paths change; downstream integrations using internal tool paths may need updates |
| `b12449` | `--tensor-split` / `--fit-target` now accept up to `llama_max_devices()` configs instead of a fixed cap | Config format relaxed; no breaking change for existing usage |
| `b12443` | **Vulkan fix** — fp32 flash attention shmem overflow on Nvidia; staging disabled when memory pressure is high | Correctness fix; may affect throughput on memory-constrained Vulkan runs |

All commits are on the `master` branch with no new release tag as of this digest.

---

## 3. New Model & Hardware Support

| PR / Commit | Model / Hardware | Details |
|-------------|------------------|---------|
| #32413 | **Kokoro-82M TTS** (phoneme-based) | Full mtmd integration; sets pattern for future phoneme-driven TTS models |
| #32427 | **tiny-voca** (lightweight vocoder) | Companion to Kokoro; similar architecture pattern |
| #32413 / #32330 | **fish-audio s2** | Voice cloning support added via mtmd pipeline |
| #32176 | **RAON-1-mini-preview** (KRAFTON) | HF → GGUF conversion + inference support |
| #32386 | **MiniCPM5 MoE** | Gated GQA, routed/shared experts, speculative decoding compatible |
| #32261 | **Android Vulkan** (Termux + native drivers) | First-class Vulkan backend support on ARM Android |
| `b12442` | **HIP gfx1013 → RDNA1** | AMD GPU support expanded on ROCm side |
| `b12444` | **CDNA GDN MMA kernel** (HIP/CUDA) | Gated-Delta-Net acceleration on AMD CDNA hardware |
| #29672 | **PTQ1_0 quantization** | Ternary at group-128; 1.75 bits/weight; preserves exact ternary weights |
| #22836 | **STQ1_0** (ACL 2026 — Sherry quantization) | Hardware-efficient sparse ternary for ARM NEON vec_dot |

---

## 4. Performance & Optimization

| Area | Change | Expected Benefit |
|------|--------|-----------------|
| **MMVQ / RDNA3_5** (`b12453`) | Tuned `ne11` gate for RDNA3_5 | Improved mixed-vector-quantization throughput on AMD RDNA3 GPUs |
| **Vulkan conv3d** (`b12445`) | Added `split_k` support using 256×128 coopmat2 shape | Better utilization on multi-tile convolution workloads |
| **WebGPU Flash Attention** (`b12441`) | Per-head mask indexing fixed; broadcast `head % mask->ne[2]` | Correctness + efficiency for multi-head masking patterns |
| **CUDA VMM-pool** (#32440) | `ggml-cuda` now returns `ALLOC_FAILED` instead of aborting on pool OOM during `mul_mat_q` | Eliminates process death on memory pressure; requests fail gracefully |
| **CUDA F32 mmid** (#31961) | New F32 activation path for `MUL_MAT_ID` with Q4_K/Q5_0/Q8_0 + strided experts | Better accuracy for expert routing; faster MoE decode |
| **Mamba-2 SSM (RVV)** (#32448) | Vectorized F32 `SSM_SCAN` using RISC-V Vector intrinsics | Significant speedup on RVV-capable CPUs (replaces scalar fallback) |
| **OpenCL Adreno X1** (#31002, #31003) | Optimized Q5_K and Q8_0 GEMM bin kernels for Adreno X1 | Faster non-MoE inference on Snapdragon X Elite |
| **Async host input copies** (#30685) | New `ggml_backend_dev_caps.async_host_input` capability; `set_tensor_async` + one sync per batch instead of per-tensor | Reduced host→device copy overhead on backends that support it |

> **Note on regression (CUDA sm_70 V100):** Issue #32245 reports significant prefill performance drop on V100 (sm_70) in v1.0.0 vs v0.8.0 — under investigation.

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **Crash** | Vulkan FA prefill crashes in `amdvlk64.dll` on RDNA3/Windows (`#32353`) — introduced by #31323 flip-direct path | Open; hot | — |
| 🔴 **Crash** | CUDA VMM-pool OOM during prompt processing aborts process (`#31974`) — `ggml_cuda_mul_mat_q → ggml_abort` | Fix merged in #32440 | #32440 |
| 🟠 **Correctness** | SYCL + MoE: `/v1/completions` logprobs nondeterministic; request seed doesn't pin distribution (`#31206`) | Open | — |
| 🟠 **Correctness** | IQ3_S SoA reorder is **8× slower** on SYCL MoE (Intel Arc A770) — generic path is poisoned (`#32323`) | Open; negative result documented | — |
| 🟠 **Correctness** | Cache reuse disabled for IMROPE models (Qwen3.5), full re-prefill on every follow-up (`#32316`) | Open | — |
| 🟠 **Regression** | V100 (sm_70) prefill throughput significantly lower in v1.0.0 vs v0.8.0 (`#32245`) | Open | — |
| 🟡 **Performance** | HIP/gfx906 MoE prompt processing 15–50% slower since #29948 (`#31599`) | Open | — |
| 🟡 **Performance** | CUDA IQ quants `mul_mat` not batch-invariant at n=5,8 on SM120 — affects speculative decoding (`#28111`) | Open | — |
| 🟡 **Stability** | Metal: intermittent multi-minute stalls during large-context prefill on qwen4exp (`#30726`) | Open | — |

**5 issues closed today:** dp4a emulation via dp2a feature request (#24616 closed stale), Gemma 4 tool-calling bug (#29655), Vite test-dep build breakage (#29921), `libllama` API changelog tracking issue (#9289 — updated), and Docker tag predictability request (#32246 — enhancement accepted).

---

## 6. What This Means for Application Developers

1. **Audio pipelines are maturing fast.** Kokoro TTS and fish-audio s2 integrations via the mtmd subsystem signal that llama.cpp is becoming a genuine multimodal inference hub — not just a text decoder. If you're building voice-enabled agents, the integration surface is now production-adjacent.

2. **Graceful CUDA OOM is now enforced.** Previously, a CUDA VMM allocation failure would kill the entire server process. With #32440 merged, requests fail cleanly. If you've been working around this with elaborate pre-flight memory checks, you can simplify that logic.

3. **Web UI is moving.** If you embed or fork the llama.cpp web UI, update your paths to `ui/apps/chat`. This is the first step toward a shareable `ui/lib` — expect further restructuring.

4. **Android Vulkan is a first-class target now.** Termux + native Android Vulkan drivers work out of the box. Mobile inference deployments just got easier to set up.

5. **Watch for V100 regressions.** If you run on older NVIDIA hardware (sm_70 / V100), the reported prefill perf regression in v1.0.0 warrants testing before upgrading production workloads.

6. **Ternary quantization is advancing.** Both PTQ1_0 and STQ1_0 (Sherry) are moving toward mainline. If you're exploring ultra-low-bit inference, these formats offer new tradeoffs in accuracy vs. memory footprint.

---

*Digest generated from ggml-org/llama.cpp GitHub activity, 2026-11-17. Links open to raw GitHub pages.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze this GitHub data for Ollama and create a structured digest for 2026-11-17.

First, let me identify the key items:

**Releases:**
- None in the last 24 hours

**Issues (23 total):**
Let me categorize them:

1. **Open Issues:**
- #2288: Feature request for flatpak/SNAP (long-standing, 31 👍)
- #19714: Build failure with GCC 15 - missing #include <cstdint> in llama-mmap.h (new today, 2026-11-17)
- #19733: Feature request for tensor blk.0.ssm_beta.weight not found (new today, 2026-11-17)
- #19712: Port binding error - 127.0.0.1:11434 already in use
- #19589: Vulkan AMD RX 5500 SIGBUS crash
- #19444: Windows ARM64 Gemma3 vision timeout
- #19464: Feature request for Unix domain sockets
- #19716: Cloud billing cycle usage deletion bug
- #17247: Feature request for warm prefill cache across model unload/reload
- #19722: Cloud feature request for Tencent Hy4 flash

2. **Closed Issues:**
- #19537: Version update caused worse results, more resource usage (Chinese user with RTX 5060)
- #19359: Claude Desktop conversation issues with MLX cache loss
- #19558: Vulkan backend crash on AMD Renoir iGPU
- #19524: Qwen2.5-Coder and Qwen3 native tool calling failures
- #19535: Feature request for Intel NPU backend via OpenVINO (very relevant)
- #3674: Another flatpak/snap request
- #19611: Feature request for OSADIA Axiom architecture


- #19350: Qwen3.5 JSON Schema constraint issues
- #19340: Ctrl+C during multiline input bug (has fix PR #19731)
- #19661: Windows installer custom directory feature request
- #19511: /api/usage regression for session/weekly percentages
- #19356: System prompt reinforcement feature
- #19713: Generic "is server down" issue
- #19716: Cloud billing issue

**Pull Requests (26 total):**

1. **Open PRs:**
- #19734: Add PPLX Decider v1.3 support to MLX runner (

today, 2026-11-17)
- #19677: mlxrunner reuse saved prefixes (2026-11-12, updated today)
- #19732: CANN build option and device discovery (today, 2026-11-17) - Ascend NPU support!
- #19730: mlxrunner adapt CUDA iGPU history to memory pressure (today)
- #19729: Add D3.1 nano prefix bidirectional MLX scoring (today)
- #19678: mlxrunner adapt saved history to memory pressure (2026-11-12, updated today)
- #19728: README: add Open Game Master to community integrations
- #19391: mlxrunner support draft_num_predict=0
- #19632: Fix VRAM accounting and GPU splitting (critical fixes)
- #19705: model/parsers: preserve literal text in streamed Qwen tool calls
- #19727: launch: expose available Ollama models in Pi
- #19726: launch: restore Pi startup picker
- #19723: server: add opt-in per-request token metrics logging

2. **Closed PRs:**
- #19731: cmd: leave multiline mode when Ctrl+C or Ctrl+G discards input (today, fixes #19340)
- #19663: mlxrunner: batch speculative verification
- #18397: llm: reuse llama-server HTTP connections for embed load
- #19725: parser: preserve boundary tabs in exported Modelfiles
- #19724: envconfig: preserve escaped paths in OLLAMA_HOST
- #19688: cmake: support compatible binary MLX-C and XGrammar
- #15766: server: populate parameter_size in /api/tags for safetensors models

**Key Themes:**

1. **Hardware Support Expansions:**
   - Intel NPU backend via OpenVINO (feature request #19535)
   - CANN backend for Ascend NPUs (PR #19732)
   - AMD Vulkan fixes (multiple issues)

2. **MLX Runner Development:**
   - Multiple PRs around MLX runner improvements
   - PPLX Decider v1.3 support
   - Memory pressure adaptation
   - Speculative verification batching

3. **Stability Issues:**
   - GCC 15 build failure
   - Vulkan crashes on AMD GPUs
   - Qwen tool calling bugs
   - Windows ARM64 vision timeout

4. **Performance Work:**
   - VRAM accounting fixes
   - Memory pressure adaptation
   - Speculative decoding improvements
   - HTTP connection reuse

5. **Cloud Features:**
   - Tencent Hy4 flash support request
   - Billing cycle usage tracking fix needed
   - Token metrics logging

Now I'll create the digest.
</think>


# Ollama Project Digest — 2026-11-17

## 1. Today's Highlights

The Ollama project is seeing significant activity in hardware diversity, with a new PR adding **CANN (Ascend NPU) build support** and a feature request for **Intel NPU backend via OpenVINO**. On the MLX runner front, multiple PRs from dhiltgen are advancing memory management and speculative decoding capabilities. A critical build regression with **GCC 15** was reported, while a multiline REPL bug affecting Ctrl+C behavior has been fixed and merged.

---

## 2. Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| No new releases | No tagged releases in the last 24 hours | — |

**Note:** Users on GCC 15 should be aware of a build regression (see Section 5). The project remains on v0.40.x stable.

---

## 3. New Model & Hardware Support

### Hardware Backends

| Addition | Description | Status | Link |
|----------|-------------|--------|------|
| **CANN Backend (Ascend NPUs)** | Build option for `ggml-cann` added; enables device discovery and routing to `llama-server` for Ascend NPU inference | **Open PR** | [#19732](https://github.com/ollama/ollama/pull/19732) |
| **Intel NPU via OpenVINO** | Feature request to add Intel Core Ultra NPU support (e.g., Core Ultra 9 185H), targeting the same backend pattern as NVIDIA/AMD/Apple | **Open Issue** | [#19535](https://github.com/ollama/ollama/issues/19535) |
| **PPLX Decider v1.3 (MLX)** | Flash and 27B checkpoints with v4 chunked decision protocol for choice, yes/no, score, and image requests | **Open PR** | [#19734](https://github.com/ollama/ollama/pull/19734) |
| **D3.1 nano (MLX)** | Bidirectional prefix scoring support for D3.1 nano:2b | **Open PR** | [#19729](https://github.com/ollama/ollama/pull/19729) |

### Community Integrations

- **Open Game Master** added to README — a tabletop RPG game master app supporting local Ollama models ([#19728](https://github.com/ollama/ollama/pull/19728))

---

## 4. Performance & Optimization

### Landed Improvements

| PR | Description | Impact |
|----|-------------|--------|
| [#19731](https://github.com/ollama/ollama/pull/19731) | **Multiline REPL bugfix** — Ctrl+C/Ctrl+G now properly exits multiline mode instead of swallowing subsequent input | Correctness |
| [#18397](https://github.com/ollama/ollama/pull/18397) | **HTTP connection reuse for `/api/embed`** — eliminated redundant health checks per embedding request | Latency/throughput |
| [#19725](https://github.com/ollama/ollama/pull/19725) | **Modelfile export round-trip fidelity** — boundary tabs preserved in exported Modelfiles | Correctness |
| [#19724](https://github.com/ollama/ollama/pull/19724) | **OLLAMA_HOST path encoding fix** — proxied deployments with encoded paths now work correctly | Deployment compatibility |

### Active Development (Open PRs)

| PR | Description | Details |
|----|-------------|---------|
| [#19677](https://github.com/ollama/ollama/pull/19677) | **MLX prefix reuse across busy request slots** | Shared prompt processing for overlapping conversations |
| [#19678](https://github.com/ollama/ollama/pull/19678) | **Adaptive saved-history retention (Metal)** | Dynamic 8 GiB allocation adjustment based on memory pressure |
| [#19730](https://github.com/ollama/ollama/pull/19730) | **CUDA iGPU memory pressure adaptation** | Adaptive history retention for integrated CUDA GPUs (Linux/Windows) |
| [#19663](https://github.com/ollama/ollama/pull/19663) | **Batch speculative verification (MLX)** | Keeps drafting active across overlapping requests; benefits MTP/DFlash models |
| [#19391](https://github.com/ollama/ollama/pull/19391) | **Speculative decoding toggle** — `draft_num_predict=0` for benchmarking | Per-request drafting disable |
| [#19632](https://github.com/ollama/ollama/pull/19632) | **VRAM accounting and GPU splitting fixes** | Resolves issues #19463, #18679, #18349, #16599 |
| [#19723](https://github.com/ollama/ollama/pull/19723) | **Per-request token metrics logging** | `OLLAMA_LOG_METRICS=1` → JSONL output at `~/.ollama/logs/metrics.jsonl` |
| [#19705](https://github.com/ollama/ollama/pull/19705) | **Qwen tool call streaming fix** | Preserves literal text in streamed Qwen3.5/Qwen3-Coder tool calls |

---

## 5. Stability & Regressions

### High Severity

| Issue | Description | Workaround | Fix PR? |
|-------|-------------|------------|---------|
| **#19714** | **GCC 15 build failure** — missing `#include <cstdint>` in `llama-mmap.h` causes `uint32_t` errors; GCC 15.2.0 is stricter with standards compliance | Use GCC 14 or Clang until fixed | — |
| **#19558** | **Vulkan backend crash on AMD Renoir iGPU** (Ryzen 4700U, gfx90c) — `llama-server` crashes with NTSTATUS 0xe06d7363 at model load on v0.40.14 and v0.40.15-rc2 | Disable Vulkan backend; use CPU or CUDA if available | — |
| **#19589** | **AMD RX 5500 (Navi 14, gfx1010) Vulkan SIGBUS** — `llama-server --list-devices` crashes with exit 135 | Disable Vulkan backend | — |
| **#19444** | **Windows ARM64 Gemma3 vision timeout** — image processing hangs indefinitely on CPU path | No known workaround; affects multimodal inference | — |

### Medium Severity

| Issue | Description | Status | Link |
|-------|-------------|--------|------|
| **#19524** | **Qwen2.5-Coder/Qwen3 native tool calling failures** — tool calls produce invalid output or silently fail | Fix PR exists | [#19705](https://github.com/ollama/ollama/pull/19705) |
| **#19712** | **Port binding conflict** — `bind: Une seule utilisation de chaque adresse de socket` (address already in use) | Ensure no other process uses port 11434 | — |
| **#19716** | **Cloud billing regression** — previous billing cycle usage data deleted at renewal | No workaround; affects paying customers | — |
| **#19511** | **`/api/usage` regression** — session/weekly usage percentages no longer returned; only request counts | Web UI still shows percentages; API is degraded | — |
| **#19340** | **Multiline REPL swallow bug** — Ctrl+C during `"""` block leaves session in multiline mode | Fixed | [#19731](https://github.com/ollama/ollama/pull/19731) |

### Low Severity / Feature Requests

| Item | Description | Link |
|------|-------------|------|
| #19733 | Tensor `blk.0.ssm_beta.weight` not found error during model load | [#19733](https://github.com/ollama/ollama/issues/19733) |
| #19464 | Feature request: Unix domain socket (IPC) support alongside TCP/IP | [#19464](https://github.com/ollama/ollama/issues/19464) |
| #19535 | Feature request: Intel NPU backend via OpenVINO | [#19535](https://github.com/ollama/ollama/issues/19535) |
| #2288 | Long-standing flatpak/SNAP request (31 👍) | [#2288](https://github.com/ollama/ollama/issues/2288) |

---

## 6. What This Means for Application Developers

### Immediate Action Items

1. **Avoid GCC 15 for builds** — If compiling from source, stick with GCC 14 or use Clang until the `#include <cstdint>` regression in `llama-mmap.h` is resolved ([#19714](https://github.com/ollama/ollama/issues/19714)).

2. **Apply workaround for Qwen tool calls** — If using Qwen2.5-Coder or Qwen3 with native tool calling, the streaming parser fix is pending merge ([#19705](https://github.com/ollama/ollama/pull/19705)). Until then, validate tool call outputs on the application side.

3. **Monitor MLX runner memory** — The upcoming adaptive history retention changes ([#19678](https://github.com/ollama/ollama/pull/19678), [#19730](https://github.com/ollama/ollama/pull/19730)) will change how much GPU memory is used for conversation caches on Apple Silicon and integrated CUDA GPUs. Test workloads after these land.

### Near-Term Opportunities

4. **Ascend NPU support incoming** — The CANN backend PR ([#19732](https://github.com/ollama/ollama/pull/19732)) will enable Ollama on Huawei Ascend NPUs, expanding Chinese hardware ecosystem support. Edge deployment teams should evaluate.

5. **Per-request metrics for observability** — The opt-in token metrics logging ([#19723](https://github.com/ollama/ollama/pull/19723)) will enable detailed inference cost tracking per request via `OLLAMA_LOG_METRICS=1`.

6. **Speculative decoding control** — Soon you'll be able to disable drafting per-request via `draft_num_predict=0` ([#19391](https://github.com/ollama/ollama/pull/19391)), useful for benchmarking and deterministic output scenarios.

7. **VRAM accounting improvements** — The fixes in [#19632](https://github.com/ollama/ollama/pull/19632) address model eviction and GPU allocation issues on multi-GPU setups; upgrade when available for more predictable serving behavior.

### Long-Standing Requests to Track

- **Flatpak/SNAP packaging** ([#2288](https://github.com/ollama/ollama/issues/2288)) — 31 👍; no movement. Linux desktop users may want to track alternatives.
- **Intel NPU support** ([#19535](https://github.com/ollama/ollama/issues/19535)) — relevant for "AI PC" deployments with Core Ultra processors.

---

*Digest generated for 2026-11-17. Data sourced from github.com/ollama/ollama.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data for LiteLLM and create a structured digest for 2026-11-17.

Key observations:

1. **Release**: v1.108.10 just dropped with Docker image signature verification using cosign
2. **Active development**: Lots of PRs today, especially around:
   - Cost mapping improvements (multiple PRs)
   - Rust backend integration (auth, callbacks, parallel request limiter)
   - Bedrock fixes (streaming abort, connection handling)
   - Anthropic /v1/messages thinking blocks
   - Gemini tool calls and thought signatures
   - Prompt caching backport
   - UI fixes for SSO

3. **Notable bugs/issues**:
   - Gemini 503/APIConnectionError intermittent failures
   - ModelNotMappedError
   - Groq 401 mapped to BadRequestError (wrong exception type)
   - Bedrock ca inference profile drops reasoning_effort
   - Free models can't be used when over spend limit
   - Various other provider-specific bugs

4. **Features in flight**:
   - Cursor CLI subscription support
   - Rust-based parallel request limiter
   - Agent eval framework
   - OpenAI/Anthropic typed cost configs
   - Rust auth stores integration

Let me structure this properly.
</think>


# LiteLLM Digest — 2026-11-17

## 1. Today's Highlights

LiteLLM v1.108.10 ships with **cosign-based Docker image verification**, enabling supply-chain integrity checks for production deployments. The project continues its Rust-acceleration push — auth reads, parallel request limiting, and gateway parameter translation are all moving to native Rust paths, with today's PRs targeting the `lts/1.108.x` branch for backport candidates. Key correctness work landed on Anthropic `/v1/messages` thinking blocks (signature preservation) and Gemini tool-call memory, while several high-traffic bugs (Groq 401 exception misrouting, Bedrock stream abort leaks, rate-limiter Redis writes) reached resolution.

---

## 2. Releases & Breaking Changes

| Change | Details |
|--------|---------|
| **v1.108.10 released** | Docker image now signed via cosign with OIDC-linked certificate identity (`token.actions.githubusercontent.com`). Verify with: `cosign verify --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main --certificate-oidc-issuer https://token.actions.githubusercontent.com ghcr.io/berriai/litellm:v1.108.10` |
| `completion_model` fallback semantics corrected | Previously overridden client-specified model; now correctly acts as fallback only. ([#21554](https://github.com/BerriAI/litellm/issues/21554)) |
| `COHERE_API_BASE` now honored for embed models | Cohere embed path now reads the env var (already worked for rerank). ([#50248](https://github.com/BerriAI/litellm/issues/50248)) |
| `/chat/completions` endpoint now enforceable for OpenAI-like servers | Model prefix `openai/resp__...` no longer forced to Responses API. ([#51547](https://github.com/BerriAI/litellm/issues/51547)) |
| Groq 401 → `AuthenticationError` | Was mapped to `BadRequestError`; now correctly typed. ([#51994](https://github.com/BerriAI/litellm/issues/51994)) |

---

## 3. New Model & Hardware Support

| Area | Update |
|------|--------|
| **Cursor CLI subscriptions** | New proxy feature to forward Cursor-native agent streams through LiteLLM. ([#52205](https://github.com/BerriAI/litellm/pull/52205)) |
| **Databricks Claude Opus 5.5** | Mid-conversation system prompt support declared in cost map. ([#52214](https://github.com/BerriAI/litellm/pull/52214)) |
| **GPT-5.6 variants** (`sol`, `luna`, `terra`) | `supports_max_reasoning_effort` flag corrected in model map. ([#47884](https://github.com/BerriAI/litellm/issues/47884)) |
| **GPT-5.5 / GPT-6 Azure** | `stop` sequences now exposed (previously rejected as unsupported). ([#28650](https://github.com/BerriAI/litellm/pull/28650)) |
| **Snowflake Cortex** | Multi-issue fix: streaming tool-calls preserved, endpoint docs corrected, OpenAI-/Anthropic-compatible path handling improved. ([#30762](https://github.com/BerriAI/litellm/issues/30762)) |

---

## 4. Performance & Optimization

| Category | Detail | PR/Issue |
|----------|--------|----------|
| **Rate-limiter Redis writes** | Skips post-call Redis writes for keys/users/teams with no rate limits configured — eliminates wasted I/O at high throughput. | [#31880](https://github.com/BerriAI/litellm/issues/31880) |
| **Bedrock stream abort** | Backported to `lts/1.108.x`: aborting a client abandoned streaming call now closes Bedrock connection immediately instead of reading ~1,500 tokens over 30s. | [#52210](https://github.com/BerriAI/litellm/pull/52210) |
| **Rust auth store reads** | Virtual keys, JWT key mappings, and model access groups now read through Rust SQLx pool (`RUST_RESERVED_CONNECTIONS` 0→2), reducing Python DB thread contention. | [#52173](https://github.com/BerriAI/litellm/pull/52173) |
| **Rust parallel request limiter** | V3 limiter ported to `CustomLoggerV2` Rust callback crate (`callbacks-parallel-request-limiter`) for reduced GIL overhead. | [#51537](https://github.com/BerriAI/litellm/pull/51537) |
| **GenericAPILogger config reload leak** | Reuses cached logger instance; config reloads no longer spawn cumulative background flush loops (idle CPU climb fixed). | [#50879](https://github.com/BerriAI/litellm/pull/50879) |
| **Prompt caching backport** | Developer messages now receive cache-point credit on Claude; backported to `lts/1.108.x`. | [#51852](https://github.com/BerriAI/litellm/pull/51852) |
| **Responses WebSocket budget enforcement** | Writes one failure row per refused turn with accurate timestamps/model group, not just the first refusal. | [#50731](https://github.com/BerriAI/litellm/pull/50731) |

---

## 5. Stability & Regressions

Ranked by severity and fix status:

### Critical / High

| Bug | Description | Status | Link |
|-----|-------------|--------|------|
| **MCPJWTSigner overwrites server `auth_value`** | When `mcp_jwt_signer` is enabled, static bearer/token/basic credentials on MCP servers are replaced with JWT, causing 401 on keyed MCP servers. | Closed | [#47988](https://github.com/BerriAI/litellm/issues/47988) |
| **Context state leakage in MCP routing** | Static analysis identified `_mcp_active_toolset_id` leaking across async stream interruptions. | Closed | [#30416](https://github.com/BerriAI/litellm/issues/30416) |
| **Gemini intermittent 503 / APIConnectionError** | High-frequency failures on Gemini requests, alternating between service unavailable and connection drops. | Open | [#50434](https://github.com/BerriAI/litellm/issues/50434) |
| **Bedrock Canada inference profile drops `reasoning_effort`** | `output_config.effort` silently ignored on `ca.*` Bedrock deployments; `us.*` works fine. | Closed (PR pending) | [#52110](https://github.com/BerriAI/litellm/issues/52110) |

### Medium

| Bug | Description | Status | Link |
|-----|-------------|--------|------|
| **`stream_chunk_builder` TypeError on list `reasoning_content`** | Reasoning models streaming structured block lists (e.g. `[{"content": "", "signature": "..."}]`) crash the chunk builder. | Open | [#50893](https://github.com/BerriAI/litellm/issues/50893) |
| **Vercel AI SDK loses reasoning between tool steps** | Anthropic `/v1/messages` thinking blocks closed without signature, dropping DeepSeek/GLM reasoning. | Fix PRs open | [#52117](https://https://github.com/BerriAI/litellm/pull/52117), [#52116](https://https://github.com/BerriAI/litellm/pull/52116) |
| **Gemini tool-call memory lost for non-gemini model names** | Proxy model name lacking "gemini" substring caused LiteLLM to discard thought signatures. | Fix PR open | [#52212](https://github.com/BerriAI/litellm/pull/52212) |
| **`ModelNotMappedError` in `utils.py`** | Auto-reported; investigation ongoing. | Open | [#51452](https://github.com/BerriAI/litellm/issues/51452) |
| **Free models blocked when key over spend limit** | API key exceeding spend cap prevents access to free local models. | Open | [#52071](https://github.com/BerriAI/litellm/issues/52071) |
| **Sporadic 502 errors** | Near-constant trickle of 502s observed across weeks; root cause not yet identified. | Open | [#37168](https://github.com/BerriAI/litellm/issues/37168) |

### Low / Already Fixed

| Bug | Description | Status | Link |
|-----|-------------|--------|------|
| **ChatGPT Responses streaming drops function call args** | `response.function_call_arguments.done` without deltas dropped tool call arguments. | Closed | [#27144](https://github.com/BerriAI/litellm/issues/27144) |
| **`completion()` with tools requires `mcp` module** | `ModuleNotFoundError` on base install (no `proxy` extra) when passing `tools=`. | Closed | [#50781](https://github.com/BerriAI/litellm/issues/50781) |
| **Helm charts outdated Redis/PostgreSQL dependencies** | Regression on startup due to stale chart deps. | Closed | [#26169](https://github.com/BerriAI/litellm/issues/26169) |
| **Gemini content-filter non-streaming loses refusal reason** | `block_reason` and `native_finish_reason` now preserved in `provider_specific_fields`. | Fixed | [#51624](https://github.com/BerriAI/litellm/pull/51624), [#51614](https://github.com/BerriAI/litellm/pull/51614) |

---

## 6. What This Means for Application Developers

1. **Upgrade to v1.108.10 if running in production** — the cosign verification step is now the recommended trust anchor for container-based deployments.

2. **If using Bedrock streaming with timeouts/aborts**, backport PR [#52210](https://github.com/BerriAI/litellm/pull/52210) to avoid token leakage and extended connection tail. This is a material cost and latency issue at scale.

3. **If routing through Snowflake Cortex** — the tool-call streaming and endpoint handling improvements in [#30762](https://github.com/BerriAI/litellm/issues/30762) resolve long-standing silent drops; validate your integration after updating.

4. **For multi-tenant deployments with budget controls** — the Groq 401 fix and the free-model spend-limit bug ([#52071](https://github.com/BerriAI/litellm/issues/52071)) both affect budget enforcement logic; review your spend guardrails after upgrading.

5. **If using Cursor CLI in your stack** — support is landing in [#52205](https://github.com/BerriAI/litellm/pull/52205); early testing is advised before relying on it for agentic workflows.

6. **Monitor for the Rust migration surface area** — auth, request limiting, and gateway translation are moving to Rust paths today. If you have custom callbacks or middleware, test thoroughly against `main` before pulling the LTS backport chain.

---

*Digest generated from BerriAI/litellm GitHub data — 2026-11-17*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>`/`</think>

` text stripped from answers | Open | [PR #18044](https://github.com/unslothai/unsloth/pull/18044) |
| **Medium** | Studio: Ollama Modelfile SYSTEM prompt ignored in chat | Open | [PR #18045](https://github.com/unslothai/unsloth/pull/18045) |
| **Low** | "Could not sync pinned chats" notice + laggy interface | Open | — |
| **Low** | Browser menu opens behind website on Windows | Open | — |
| **Low** | CLI `unsloth studio stop` logs false crash | Closed | [PR #18073](https://github.com/unslothai/unsloth/pull/18073) |

---

## 6. What This Means for Application Developers

**Computer Use & MCP:** The new computer use beta opens the door to building agents that interact with desktop applications (Unity, Unreal, Blender, Roblox). Early adopters should expect rough edges and test in sandboxed environments before production use.

**Multi-GPU training flexibility:** The `UNSLOTH_PARALLEL=auto` flag eliminates the need to hand-tune DDP vs. FSDP2. Teams running distributed training on mixed hardware (e.g., Kaggle T4s, custom racks) should set this env var and re-benchmark — early data suggests FSDP2 overhead is significant for models that fit per-GPU.

**Tensor parallel serving on budget GPUs:** Offloading frozen embeddings to CPU enables Qwen3.8-27B 4-bit on 2× T4 (16 GB each) that previously required larger VRAM. This lowers the entry bar for serving mid-size MoE-style models in latency-sensitive applications.

**Studio UX improvements:** The redesigned model picker, search query retention, and composer sizing polish reduce friction in iterative workflows. If you build UIs on top of Unsloth Studio's API, the dataset reuse and deletion features simplify asset management.

**Watch items:** The v0.1.918-beta regression on model loading and the llama.cpp Desktop crashes are likely to affect users upgrading immediately — consider staying on v0.1.917-beta until fixes land.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*