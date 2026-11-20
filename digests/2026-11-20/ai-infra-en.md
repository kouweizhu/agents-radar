# AI Infrastructure Digest 2026-11-20

> Generated: 2026-11-20 03:41 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report synthesizing the five project digests I've already generated. Let me analyze the data from all five projects and create a structured comparison.

Let me organize the key data points:

**vLLM:**
- Issues: 17 hot issues tracked
- PRs: 8+ active PRs mentioned
- Releases: None in 24h
- New models: Qwen4Exp, Kimi K3, Tencent Hy4, Nemotron Deciffusion
- Hardware: AMD gfx950/gfx942, Intel XPU
- Focus: ROCm optimization, DiffKV, MXFP6, speculative decoding, RL training weight reload


**SGLang:**
- Issues: Most active (CUDA Coredump #26340 with 386 comments)
- PRs: 15+ PRs
- Releases: None in 24h
- New models: Kimi K3.1 NPU, Gemma 4, DeepSeek-V4.1
- Hardware: NPU/Ascend, Hop
- Focus: DFlash speculative decoding series, EPLB dispatch, NPU scheduler fixes
**llama.cpp:**
- Releases: b12547-b12556 (10 commits, no tagged releases)
- New models: SenseNova Loop, MiniMax-M3, Spark2.5 DSpark
- Hardware: Qualcomm Hexagon DSP, RISC-V, various
- Focus: OpenCL GQA folding, Vulkan optimizations, BF16 ROPE

Now I'm compiling the performance and optimization metrics across the remaining projects to complete the comparison. Looking at Ollama's weaknesses - they're dealing with Windows embed issues and some Qwen3.8 caching problems. On the training side, Unsloth is making good progress with AMD NPU support, GPU bundle optimization, and diffusion improvements like FLUX.3 and LTX-2.5, though there's a MiniMax-M3.1 tool call parsing issue they need to address.
</think>


# AI Infrastructure Ecosystem Digest — Cross-Project Comparison

## 2026-11-20

---

## 1. Ecosystem Overview

The AI inference infrastructure landscape on 2026-11-20 reflects a maturing but still rapidly evolving ecosystem. The two dominant open-source serving engines — **vLLM** and **SGLang** — are both deepening hardware vendor lock-in avoidance (AMD ROCm, Intel XPU, NPU/Ascend), with vLLM leading on ROCm MI3XX performance and SGLang on Ascend NPU adoption. **llama.cpp** continues to serve the low-level, backend-agnostic niche, shipping BF16 ROPE and expanding to new DSP hardware, while **Ollama** targets developer ergonomics and Apple Silicon with its MLX backend, and **LiteLLM** provides the multi-cloud gateway abstraction. Across all five projects, the dominant theme is **speculative decoding maturation** (DFlash, MTP, DSpark), **quantization specialization** (MXFP6, Q4NX, ModelOpt INT8), and a growing push toward **Rust-native hot paths** in gateway/proxy layers to reduce Python overhead.

---

## 2. Activity Comparison

| Project | Active Issues | Active PRs | Releases (24h) | Primary Activity Theme |
|---------|--------------|-----------|----------------|------------------------|
| **vLLM** | 17 (hot tracking) | ~8 active PRs | None | ROCm performance, DiffKV, MXFP6 quantization, RL weight reload |
| **SGLang** | ~14 (CUDA coredump 386 comments) | 15+ | None | DFlash 4-PR series, NPU scheduler, HiCache prefetch |
| **llama.cpp** | ~12 open | ~12 | 10 commits (b12547–b12556) | BF16 ROPE, OpenCL GQA, Vulkan Q2_K, SenseNova Loop |
| **Ollama** | 14 | 15 | None | MLX memory parallelism, conversation persistence, Hy4 MLX port |
| **LiteLLM** | ~12 | ~8 | v1.112.0-dev.1, v1.111.0-rc.2, v1.110.1 stable, LTS v1.108.12 | Rust-native rate limiting, Kafka logging, new model price table |

**Interpretation:** llama.cpp has the highest raw commit velocity without formal releases, suggesting a high-frequency patch model. LiteLLM is the only project actively tagging releases. SGLang carries the highest comment volume on its top issue, indicating the largest community engagement. vLLM's activity is the most architecturally ambitious, with RFC threads that will shape multi-year roadmap decisions.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM |
|---------------------|------|--------|-----------|--------|---------|
| **Qwen3.8 / Qwen4Exp** | ✅ Active optimization | — | ✅ Inference + MTP fix | ✅ Prompt cache bug | — |
| **Kimi K3 / K3.1** | — | ✅ NPU + DSpark | — | — | ✅ K3.1 Pro via Inference APIs |
| **Tencent Hy4** | ✅ Recipe added | — | — | ✅ MLX port + DFly2 drafting | — |
| **DeepSeek-V4** | — | ✅ RFC open | — | — | — |
| **SenseNova Loop** | — | — | ✅ Full support | — | — |
| **MiniMax-M3 / M3.1** | — | — | ✅ Fused sparse mask | ⚠️ Tool call parsing bug | ✅ M3.1 Flash |
| **Nemotron 3.5 Super VL** | — | — | — | — | ✅ Via Inference APIs |
| **Gemma 4 (vision)** | — | ✅ Pooling + tool streaming | — | — | — |
| **Spark2.5 DSpark** | — | — | ✅ Conversion + inference | — | — |
| **FLUX.3 / LTX-2 / LTX-2.5** | — | — | — | ✅ LoRA training | — |
| **Intel XPU models** | ⚠️ DFlash2 float16 regression | — | — | — | — |
| **AMD gfx950 MI355X** | ✅ Performance workstream | — | — | ✅ NPU support | — |

**Winner by breadth:** LiteLLM (fastest multi-provider model coverage via Inference APIs)
**Winner by depth:** vLLM (Qwen4Exp SM100 split-K, SM80 indexer, ROCm gfx950 workstream)
**Most specialized:** llama.cpp (SenseNova Loop, RISC-V Mamba-2, Qualcomm Hexagon DSP)

---

## 4. Performance Frontier

### KV Cache & Memory Management

| Project | Focus Area | Status |
|---------|-----------|--------|
| vLLM | DiffKV — per-tensor-identity KV view caching, eliminates per-call view derivation | PR #66963 merged |
| vLLM | KV offload DRAM watermarks raised to 0.99/0.97 | PR #67944 merged |
| vLLM | KV block release race during remote READ in flight | Bug #61229 open |
| SGLang | HiCache L3 prefetch never completes under CP (attn_cp_size=8) | Bug #51608 open |
| SGLang | Mixed-window DFlash KV storage with context-boundary tails | PR #51693 |
| llama.cpp | MoE cache graph node reservation (graph_max_nodes budget fix) | PR #32636 open |
| Ollama | Per-layer KV cache sizing with actual head_count_kv | PR #19327 merged |

### Batching & Scheduling

| Project | Focus Area | Status |
|---------|-----------|--------|
| SGLang | EPLB scatter-based first-match dispatch | PR #51346 merged |
| SGLang | DFlash TP transfer across asymmetric layouts | PR #51698 |
| LiteLLM | Rust-native virtual key rate limiting (rpm/tpm/tpd/max_parallel) | PR #52839 merged |
| LiteLLM | Priority routing with native capacity sharing | PR #53015 merged |
| Ollama | Memory-based parallelism selection for MLX | PR #19785 merged |
| SGLang | NPU scheduler memory drain fix | PR #51679 merged |

### Quantization & Kernels

| Project | Focus Area | Status |
|---------|-----------|--------|
| vLLM | MXFP6 kernel gating unified with MXFP4 path | PR #66077 merged |
| vLLM | ModelOpt INT8 with Marlin via Fast Start | PR #68176 merged |
| llama.cpp | OpenCL DP4a for int8 KQ matmul | Commit b12555 |
| llama.cpp | Vulkan Q2_K integer scale factoring | PR #32628 merged |
| llama.cpp | BF16 → ROPE/SET_ROWS on CPU+CUDA | Commit b12554 |
| llama.cpp | OpenCL GQA head folding for speculative verification | PR #32631 merged |
| SGLang | Humming MoE grid overflow fix (large batch) | PR #51702 merged |

### Distributed Serving

| Project | Focus Area | Status |
|---------|-----------|--------|
| vLLM | Direct weight reload RFC for RL training (17+ families) | RFC #54477 open |
| vLLM | Eager-mode sequence parallelism with GEMM overlap | RFC #61626 open |
| vLLM | Adaptive spin grace + WAITPKG for shm_broadcast | RFC #52916 open |
| SGLang | PD disaggregation roadmap Q4 2026 | Issue #43699 active |
| SGLang | Asymmetric TP P/D deployment for MLA models | RFC #39963 open |
| LiteLLM | Kafka native request logging | PR #52855 merged |

**Concentration signal:** KV cache optimization and speculative decoding are the most active cross-project themes. Every project has open or recently-closed work in at least one of these two areas, confirming they are the primary levers for throughput improvement in 2026.

---

## 5. Layer Positioning

```
┌─────────────────────────────────────────────────────────────────┐
│  GATEWAY / ROUTING LAYER                                        │
│  LiteLLM — multi-provider abstraction, virtual key management   │
│  (Rust-native rate limiting, priority routing, Kafka logging)   │
├─────────────────────────────────────────────────────────────────┤
│  LOCAL RUNTIME / DEVELOPER UX                                   │
│  Ollama — single-node simplicity, MLX/Metal, Studio UI          │
│  Unsloth — fine-tuning studio, diffusion LoRA training          │
│  (Ollama and Unsloth both occupy the "local + ergonomic" niche) │
├─────────────────────────────────────────────────────────────────┤
│  SERVING ENGINE / INFERENCE RUNTIME                             │
│  vLLM — production-grade multi-GPU serving, PagedAttention      │
│  SGLang — scheduler-first design, speculative decoding focus    │
│  llama.cpp — portable low-level runtime, all backends, no server│
│  (vLLM and SGLang directly compete; llama.cpp targets embedded) │
├─────────────────────────────────────────────────────────────────┤
│  TRAINING / FINE-TUNING LAYER                                   │
│  Unsloth — LoRA/QLoRA fine-tuning studio, diffusion training    │
│  vLLM — RL weight reload RFC (infrastructure for training too)  │
│  (Unsloth is the only dedicated fine-tuning project)            │
└─────────────────────────────────────────────────────────────────┘
```

**Key differentiators:**

- **vLLM vs SGLang:** Both serve as production inference engines, but vLLM owns the CUDA kernel optimization and quantization integration story, while SGLang leads on scheduler flexibility (EPLB, PD disaggregation, NPU Ascend parity). SGLang is architecturally more composable; vLLM is more vertically integrated on GPU backends.

- **llama.cpp vs everyone else:** Stands alone as the only project targeting truly heterogeneous hardware (RISC-V, Qualcomm DSP, SYCL, WebGPU, Vulkan, Metal, ROCm, CUDA) without a server component. It is the de facto standard for edge and embedded inference.

- **Ollama vs Unsloth:** Both target local developer experience but diverge: Ollama is an inference runtime and API server, while Unsloth is a fine-tuning studio with inference as a secondary concern. Overlap is minimal; convergence risk is in Unsloth's growing inference feature set.

- **LiteLLM vs in-house proxies:** LiteLLM occupies the multi-cloud gateway layer, competing with custom proxy implementations and managed services. Its Rust-native hot paths signal a push toward production-grade performance, not just API unification.

---

## 6. Trend Signals

### 1. Speculative Decoding is Entering Production
Four separate projects are shipping spec-decoding infrastructure in parallel:
- **vLLM:** DiffKV, MTP fixes, RL-ready weight reload
- **SGLang:** 4-PR DFlash series (typed KV transfer, asymmetric TP, draft sharing, CUDA graphs)
- **llama.cpp:** DFlash2 abort fix, Spark2.5 DSpark support
- **Ollama:** Hy4 DFly2 drafting on MLX

The diversity of approaches (DFlash vs MTP vs DSpark vs DFly2) suggests the community has not converged on a spec-decoding primitive. Application developers should evaluate per-model acceptance rates rather than assuming any single approach is universally superior.

### 2. AMD ROCm is No Longer Experimental
vLLM's MI355X (gfx950) and MI350X (gfx942) workstreams, plus Unsloth's AMD NPU FastFlowLM signing, indicate AMD GPU support has crossed the threshold from "experimental" to "actively optimized." Infrastructure teams with AMD hardware should begin evaluating vLLM + ROCm for cost-sensitive deployments.

### 3. Rust is Infiltrating Python Infrastructure
LiteLLM's migration of rate limiting and routing to Rust (PRs #52839, #52813, #53015) and llama.cpp's persistent low-level Rust-adjacent C codebase set a precedent. Expect more Python-centric AI infrastructure projects to offload hot paths to Rust or C++ in 2026.

### 4. Multi-Backend NPUs are Emerging
SGLang's Kimi K3.1 on Ascend NPU and Unsloth's AMD NPU support show that inference infrastructure is no longer exclusively CUDA-dependent. Application developers targeting consumer hardware (Qualcomm NPUs, AMD XDNA, Intel NPU) should monitor these backends for production readiness.

### 5. Quantization Formats are Proliferating
MXFP6 (vLLM), Q4NX (Unsloth), ModelOpt INT8 (vLLM), and AWQ key name fixes (vLLM) collectively demonstrate that quantization is fragmenting across precision formats, hardware targets, and kernel implementations. Operators should standardize on one quantization path per model family rather than mixing formats.

### 6. Prompt Cache Correctness Issues are Widespread
Ollama's exact-match-only cache, SGLang's near-zero cloud cache hits, and vLLM's NaN logits at block-boundary prefix-cache hits all point to cache coherence being a common source of silent correctness bugs. Applications that rely on prompt caching should add instrumentation to detect cache misses and validate outputs.

### 7. LiteLLM's LTS Track is Stable
With v1.108.12 as the current LTS and v1.110.1 as the latest stable, teams requiring stability should pin to the LTS image. The gap between LTS and latest stable (v1.110.1 vs v1.108.12) is two minor versions — manageable to upgrade, but not zero risk.

---

**What agent and application developers should watch:**

| Signal | Action | Timeline |
|--------|--------|----------|
| DFlash KV transfer across asymmetric TP (SGLang #51698) | Evaluate spec decode TP flexibility for heterogeneous clusters | 1–2 releases |
| AMD MI355X performance workstream (vLLM #59575) | Begin benchmarking Qwen3.8 MoE on AMD; compare TCO vs H100 | 2–3 releases |
| Rust-native rate limiting (LiteLLM #52839) | Re-evaluate LiteLLM vs custom proxy if throughput is constrained | Now |
| Ollama MLX conversation persistence (#19745) | Upgrade when released for Apple Silicon multi-turn agents | Next release |
| MiniMax-M3.1 tool call parsing bug (Unsloth #18481) | Avoid Unsloth for MiniMax-M3.1 tool-calling agents | Until fix lands |
| Budget enforcement overspend (LiteLLM #50125) | Add +25% budget buffer or monitor actual spend closely | Until fix lands |
| vLLM RL weight reload RFC (#54477) | Track for RL training pipeline efficiency improvements | RFC → implementation |

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze this GitHub data for vLLM and create a structured digest for 2026-11-20.

Key observations:
1. **Releases**: No new releases in the last 24h
2. **Hot issues**: AMD ROCm performance optimization for MI355X (Qwen3.8), RL training weight reload RFC, KV offload promotions, attention backend optimizations
3. **New PRs**: HY4 recipe, ROCm MTP fixes, MXFP6 unification, Qwen4Exp optimizations, KV connector work
4. **Notable bugs**: Port conflict in RL, KV block release race condition, DFlash2 on XPU dtype issue, NaN logits with prefix caching

Let me structure this into the requested format.
</think>


# vLLM Daily Digest — 2026-11-20

## 1. Today's Highlights

The vLLM project is seeing heavy activity around AMD ROCm optimization (MI355X/MI350X), with a new performance tracking issue and multiple PRs targeting specialized decode kernels on gfx950 and gfx942. On the quantization front, a critical bug with MXFP6 kernel activation unification is being addressed, while a DiffKV optimization proposal promises to eliminate redundant K/V cache view derivations that currently occur on every attention call.

## 2. Releases & Breaking Changes

**No new releases in the last 24 hours.** No explicit version bumps or changelog entries detected.

## 3. New Model & Hardware Support

| Model / Architecture | Support Status | Notes |
|---|---|---|
| **Qwen4Exp (Qwen3.8)** | Active optimization | SM100 split-K launch configs merged for sparse attention (#68842); indexer prefill scoring added for SM80 (#62344) |
| **Kimi K3 (MoRI)** | Latent-MoE tail fusion fallback | PR #65664 adds fallback path when NVLS multicast unavailable on TP8/16 configs |
| **Tencent Hy4** | Recipe added | PR #68844 adds model recipe; main support landed in #68296 |
| **Nemotron Deciffusion 8B** | Tracking open | Issue #60283 to evaluate native vLLM integration for bidirectional diffusion decoding |
| **AMD gfx950 (MI355X)** | Performance workstream active | Issue #59575 tracking MoE (MXFP4), QuerySparse Attention, and HyperConnection optimizations |
| **AMD gfx942 (MI350X)** | Performance workstream active | Issue #64018 targeting Muse Spark Open PTPC-FP8 model |
| **Intel XPU** | Bug investigation ongoing | DFlash2 draft gets 0% acceptance with `--dtype float16` on XPU; bf16 works (#55250) |

**Quantization formats:** ModelOpt INT8 pre-processed weights now supported with Marlin backend via Fast Start (#68176). MXFP6 linear kernel selection unified with MXFP4 initialization path (#66077).

## 4. Performance & Optimization

### Landed or Active PRs

| PR | Area | Description |
|---|---|---|
| [#68842](https://github.com/vllm-project/vllm/pull/68842) | Qwen4Exp / SM100 | Split-K launch configs for QSA sparse attention with small batches |
| [#62344](https://github.com/vllm-project/vllm/pull/62344) | Qwen4Exp / SM80 | Indexer prefill scoring kernel config tuned for A100 |
| [#66077](https://github.com/vllm-project/vllm/pull/66077) | Quantization | MXFP6 kernel gating unified; per-layer `target` overrides propagated |
| [#66963](https://github.com/vllm-project/vllm/pull/66963) | Attention (DiffKV) | Cache K/V cache views per tensor identity — eliminates per-call view derivation |
| [#67944](https://github.com/vllm-project/vllm/pull/67944) | KV Offload (UMBP) | Default DRAM eviction watermarks raised to 0.99/0.97 from 0.90/0.70 |
| [#68811](https://github.com/vllm-project/vllm/pull/68811) | ROCm / MTP | Use AITER paged-MQA dispatcher for MTP with DCP |

### RFCs & Proposals

| Issue | Topic | Impact |
|---|---|---|
| [#59575](https://github.com/vllm-project/vllm/issues/59575) | MI355X performance optimization plan | GatedDeltaNet + QuerySparse Attention + MXFP4 MoE uplift |
| [#54477](https://github.com/vllm-project/vllm/issues/54477) | Direct Weight Reload for RL Training | Eliminates post-load processing overhead on 17+ model families |
| [#64572](https://github.com/vllm-project/vllm/issues/64572) | Attention backends re-derive KV views per call | FlashAttention and Triton eager backends affected; DiffKV fix in #66963 |
| [#61626](https://github.com/vllm-project/vllm/issues/61626) | Eager-mode Sequence Parallelism with GEMM overlap | Moves away from `torch.compile` toward direct eager fusions |
| [#52916](https://github.com/vllm-project/vllm/issues/52916) | Adaptive spin grace + WAITPKG for shm_broadcast | Reduces CPU waste on aarch64/x86 during shared-memory sync |

## 5. Stability & Regressions

**Critical (fix PRs exist or hot investigation):**

| Issue | Severity | Description | Status |
|---|---|---|---|
| [#28498](https://github.com/vllm-project/vllm/issues/28498) | **High** | ZMQ port conflict with 2P4D DeepSeek-V3 configuration — DP bug suspected | Open, 24 comments |
| [#61229](https://github.com/vllm-project/vllm/issues/61229) | **High** | KV blocks released while remote READ in flight; decode silently consumes overwritten KV (NixlConnector) | Open, 12 comments |
| [#55250](https://github.com/vllm-project/vllm/issues/55250) | **High** | DFlash2 speculative draft 0% acceptance with `--dtype float16` on Intel XPU | Open, 10 comments |

**Moderate (active investigation):**

| Issue | Severity | Description | Status |
|---|---|---|---|
| [#66232](https://github.com/vllm-project/vllm/issues/66232) | Medium | W4A16 HummingLinearKernel non-deterministic across processes; faster than Machete on H100 | Open, 11 comments |
| [#67802](https://github.com/vllm-project/vllm/issues/67802) | Medium | Dynamic Per-Tensor FP8 Amax includes stale token IDs from CUDA graph padding | Open, 6 comments |
| [#67389](https://github.com/vllm-project/vllm/issues/67389) | Medium | `fused_add_rms_norm` launches zero-sized grid on zero-token input | Open, 5 comments |
| [#55766](https://github.com/vllm-project/vllm/issues/55766) | Medium | NaN logits after prefix-cache hit when prefill ends 4–10 tokens past block boundary (Qwen3.8 GDN hybrid) | Open, 4 comments |

**Closed (recently resolved):**

- [#55534](https://github.com/vllm-project/vllm/issues/55534) — CUTLASS 3.x `scaled_mm` ignores leading strides of sliced tensors (H800)
- [#65618](https://github.com/vllm-project/vllm/issues/65618) — DSpark draft for DeepSeek-V4 missing `packed_modules_mapping` → 0% acceptance
- [#64392](https://github.com/vllm-project/vllm/issues/64392) — `TimeoutError: RPC call to sample_tokens timed out`

## 6. What This Means for Application Developers

**Deploying on AMD?** The ROCm workstream is accelerating — MI355X (gfx950) and MI350X (gfx942) optimizations are landing as tracked PRs, with the new MonoKernel tracking issue ([#68544](https://github.com/vllm-project/vllm/issues/68544)) providing visibility into specialized decode coverage per model. If you are running Qwen3.8 or related MoE models on AMD, expect meaningful throughput gains in upcoming releases.

**Using speculative decoding?** Multiple fixes landed for DFlash2 and DSpark drafts on specific hardware. The DFlash2 dtype issue on Intel XPU means you should explicitly use `--dtype bf16` until the float16 regression is resolved ([#55250](https://github.com/vllm-project/vllm/issues/55250)).

**Running RL training pipelines?** The direct weight reload RFC ([#54477](https://github.com/vllm-project/vllm/issues/54477)) and sharded RDT on load plan work ([#68038](https://github.com/vllm-project/vllm/pull/68038)) are significant for trainer-worker weight transfer — these changes should reduce the overhead of iterative RL updates significantly once merged.

**Prefix caching users?** The NaN logits bug ([#55766](https://github.com/vllm-project/vllm/issues/55766)) is triggered when a prefill ends 4–10 tokens past a block boundary with Qwen3.8 hybrid GDN and prefix caching enabled. Consider disabling prefix caching for this specific configuration until a fix lands.

**Quantization workflows?** The MXFP6 kernel unification ([#66077](https://github.com/vllm-project/vllm/pull/66077)) and ModelOpt INT8 Fast Start support ([#68176](https://github.com/vllm-project/vllm/pull/68176)) simplify weight loading pipelines. The AWQ key name acceptance fix ([#66488](https://github.com/vllm-project/vllm/pull/66488)) resolves a silent `ValueError` when using standard AWQ checkpoints with MoE WNA16 models.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang and create a structured digest for 2026-11-20.

Key observations:

1. **No releases in last 24h** - There's no "Latest Releases" section populated.

2. **Most active issues:**
   - #26340: CUDA Coredump Tracker (386 comments) - Auto-collected events
   - #42752: Flaky tests/CI failures (224 comments)
   - #43699: PD Disaggregation Roadmap Q4 2026 (26 comments)
   - #50045: SGLang 1.0 Release Tracker (13 comments)
   - #49944: Unified Memory Roadmap (13 comments)

3. **New PRs of interest:**
   - #51702: Fix Humming MoE finalize grid overflow
   - #51689: NPU support for Kimi K3.1 with DSpark decode graphs
   - #51700: Documentation update for Hy4
   - #51479: MegaGate row masks fix
   - #51615: Gemma4 vision pooling fix
   - #43541: OTEL trace converter fix
   - #51346: EPLB dispatch map optimization
   - #51592: Gemma4 streaming tool indices
   - #51679: NPU scheduler memory drain fix
   - Series of 4 PRs (#51693, #51696, #51697, #51698): DFlash/speculative decoding improvements
   - #50975: NPU MoE support

4. **Bug reports:**
   - #51531: Mamba SSM dtype bfloat16 accuracy issue
   - #51627: NemotronH MoE tuner shape mismatch
   - #51608: HiCache L3 prefetch bug under CP
   - #51555: Arbitrary directory creation security issue
   - #51097: k_scale/v_scale independence issue
   - #51430: Chunked weight updates can lose state

5. **RFCs:**
   - #48582: MindIE-SD integration for diffusion
   - #45189: Session-Aware KV Cache Orchestration

I should structure this digest to highlight the most impactful changes—particularly the DFlash speculative decoding series which appears to be a significant optimization, the NPU momentum with Kimi K3.1 and MoE support, the security vulnerability in #51555, and the upcoming 1.0 release implications.
</think>


# SGLang Digest — 2026-11-20

## 1. Today's Highlights

The SGLang team is advancing speculative decoding with a 4-PR series enabling **typed DFlash KV transfer across asymmetric TP layouts** (#51693–#51698), plus separate CUDA graph captures for target and draft models. On the hardware front, **NPU support for Kimi K3.1 with DSpark decode graphs** landed (#51689) and a critical scheduler fix for NPU memory management was merged (#51679). A **security vulnerability** affecting arbitrary file write via `extra_sampling_params` was reported (#51555) — teams using the `/rollout/generate` endpoint should evaluate mitigations.

---

## 2. Releases & Breaking Changes

| Item | Summary | Link |
|------|---------|------|
| No releases in last 24h | — | — |

**Upgrade notes reminder:** The SGLang 1.0 release tracker (#50045) is active. This is a stability release focusing on hardening, replacing silent config changes with explicit errors, and defining a 1.x compatibility policy. Upgrading from 0.5.x may require changes — consult the tracker for details.

---

## 3. New Model & Hardware Support

| Model / Hardware | Details | PR / Issue |
|-----------------|---------|------------|
| **Kimi K3.1 (NPU/Ascend)** | DSpark decode graphs and DCP support added for Ascend backend | [#51689](https://github.com/sgl-project/sglang/pull/51689) |
| **MindIE-SD (RFC)** | Proposal to integrate MindIE-SD as an acceleration library for SGLang Diffusion (Ascend backend parity with FlashInfer) | [#48582](https://github.com/sgl-project/sglang/issues/48582) |
| **Gemma 4** | Vision pooling now excludes padding and preserves range; streaming tool call indices fixed for function calling | [#51615](https://github.com/sgl-project/sglang/pull/51615), [#51592](https://github.com/sgl-project/sglang/pull/51592), [#51616](https://github.com/sgl-project/sglang/pull/51616) |
| **DeepSeek-V4.1 Flash (RFC)** | Asymmetric P/D deployment proposal for MLA-based models | [#39963](https://github.com/sgl-project/sglang/issues/39963) |
| **GLM-5.3-Flash (Hopper SM90)** | Active performance optimization tracking | [#45373](https://github.com/sgl-project/sglang/issues/45373) |

---

## 4. Performance & Optimization

| Area | Change | Impact | PR / Issue |
|------|--------|--------|------------|
| **EPLB dispatch map** | Replaced loop-over-replica-slots with scatter-based first-match computation | Faster EPLB rebalance at scale | [#51346](https://github.com/sgl-project/sglang/pull/51346) |
| **DFlash KV storage** | Added mixed-window DFlash KV storage with context-boundary tails (draft series 1/4) | Foundation for improved speculative decoding | [#51693](https://github.com/sgl-project/sglang/pull/51693) |
| **DFlash draft sharing** | TP cohorts can now share DFlash drafts across attention-DP owners (draft series 2/4) | Reduced memory pressure in speculative decoding | [#51696](https://github.com/sgl-project/sglang/pull/51696) |
| **DFlash CUDA graphs** | Separate graph captures for target verification and draft cohort forwards (draft series 3/4) | Better graph efficiency for spec decode | [#51697](https://github.com/sgl-project/sglang/pull/51697) |
| **DFlash TP transfer** | Typed KV transfer between asymmetric TP layouts (draft series 4/4) | Enables heterogeneous TP configurations | [#51698](https://github.com/sgl-project/sglang/pull/51698) |
| **Humming MoE kernel** | Flattened launch grid to avoid `CUDA grid.y` limit on large token batches | Fixes overflow crashes for large batches | [#51702](https://github.com/sgl-project/sglang/pull/51702) |
| **NVENC video encoding** | Extended to Wan2.1, LTX-2, SANA-WM, and MiniMax-H3 diffusion models | Faster video generation post-processing | [#49080](https://github.com/sgl-project/sglang/pull/49080) |
| **NPU MoE** | Locality-aware load balancing (`lplb`) support on NPU | Better MoE utilization on Ascend | [#50975](https://github.com/sgl-project/sglang/pull/50975) |

---

## 5. Stability & Regressions

| Severity | Issue | Summary | Status | Fix PR |
|----------|-------|---------|--------|--------|
| **🔴 High** | #51555 | Arbitrary directory creation and file overwrite via `extra_sampling_params` in `POST /rollout/generate` | Open | — |
| **🔴 High** | #51531 | `--mamba-ssm-dtype bfloat16` causes ~8 point accuracy regression on MATH-500 with Qwen3.5-9B; `float16` does not exhibit this | Open | — |
| **🟡 Medium** | #51627 | `fused_moe_triton` tuner: NemotronH is tuned with gated SiLU shape but its MoE is non-gated ReLU² | Open | — |
| **🟡 Medium** | #51608 | HiCache L3 storage prefetch never completes under CP (`attn_cp_size=8`) with fast_file backend — `storage_hit` stays 0 while writes accumulate | Open | — |
| **🟡 Medium** | #46203 | Xid 13 "CTA Not Present" in HiCache kvcacheio transfer kernels on Blackwell (B200) — 7 crashes across 4 machines under agentic load | Open | — |
| **🟡 Medium** | #51430 | Chunked weight updates can lose cross-tensor loader state and commit partial updates | Open | — |
| **🟡 Medium** | #51097 | `k_scale` and `v_scale` in `launch_reshape_and_cache_flash` do not work independently due to shared `USE_SCALE` flag | Open | — |
| **🟢 Low** | #50057 | `tuning_block_wise_kernel.py` cannot tune `[32, 32]` block recipe (empty search space) | Open | — |
| **🟢 Low** | #50920 | Idle-burst prefill: first request waits for next batch, causing ~TTFT regression for initial requests in burst scenarios | Open | — |

**CI Status (#17050):** 1 broken test, 14 flaky tests, 957 recently fixed (auto-updated 2026-11-20 03:10 UTC).

---

## 6. What This Means for Application Developers

1. **Security advisory:** If you expose the `/rollout/generate` endpoint publicly, evaluate the `extra_sampling_params` input sanitization until #51555 is resolved. This is a file-write vulnerability.

2. **Speculative decoding users:** The 4-PR DFlash series (#51693–#51698) is staged for merge and will enable more flexible TP configurations for spec decode deployments. Monitor the PR stack if you run heterogeneous infrastructure.

3. **NPU/Ascend users:** Kimi K3.1 now has first-class support (#51689), and a scheduler fix (#51679) prevents a race condition where in-flight kernels could touch memory regions being unmapped. If you run on Ascend, this fix is high priority.

4. **Gemma 4 function calling:** If you rely on streaming tool calls with Gemma 4, the fix in #51592/#51616 resolves duplicate indices when the same tool is called multiple times — existing streaming clients may need to update parsing logic.

5. **Mamba SSM models:** Avoid `--mamba-ssm-dtype bfloat16` with Qwen3.5-9B until #51531 is resolved; use `float16` for reliable accuracy on long-reasoning tasks.

6. **SGLang 1.0 preparation:** If you're on 0.5.x, review the upgrade notes in #50045 before the stable release lands. Silent config behaviors will change to explicit errors.

---

*Digest generated from github.com/sgl-project/sglang data (2026-11-20).*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze the provided GitHub data for llama.cpp and generate a structured digest for 2026-11-20.

Let me organize what I found:

**Releases (last 24h):**
- b12556: Fix HRM slot count computation (uint32_t overflow risk)
- b12555: OpenCL DP4a support for KQ MM in decomposed FA
- b12554: BF16 support for ROPE and SET_ROWS (CPU, CUDA)
- b12553: Fix YuE2 projector loading
- b12552: OpenVINO CI fix and optimizations
- b12551: CUDA scatter kernel for set_n
- b12550: Backend scheduler tests
- b12549: Inkling 2 attention mask fixes
- b12548: Metal NSMakeRange argument fix
- b12547: WebGPU POOL_2D support

**Notable Issues:**
- ROCm hangs with larger models (#19482) - 16 comments
- MTP performance regression (#25489) - 14 comments
- Various other bugs

**Notable PRs:**
- SenseNova Loop support (#32588)
- OpenCL GQA heads folding (#32631)
- MoE cache graph nodes reservation (#32636)
- Vulkan CPU read fix for UMA (#32634)
- Various other improvements

Let me structure this into the requested format.
</think>


# llama.cpp Daily Digest — 2026-11-20

## 1. Today's Highlights

The project continues steady progress across backend diversity and numerical precision. Most notably, **BF16 support landed for ROPE and SET_ROWS operations** across CPU and CUDA backends, which will benefit mixed-precision inference pipelines. OpenCL received DP4a acceleration for int8 key-query matmuls, while the WebGPU backend gained POOL_2D support enabling new decoder architectures.

---

## 2. Releases & Breaking Changes

No tagged releases today. All changes are in-tree commits on master (`b12547`–`b12556`).

| Commit | Change | Risk |
|--------|--------|------|
| `b12556` | HRM slot count fixed from `uint32_t` overflow — previously products exceeding `2³²` silently passed validation | **Low** — correctness fix, no API change |
| `b12555` | OpenCL DP4a for int8 KQ matmul in decomposed FA (Qualcomm contributors) | **Low** — additive kernel |
| `b12554` | BF16 → ROPE/SET_ROWS on CPU+CUDA; CUDA BF16→quantized/f8e4m3 SET_ROWS; fused BF16 rope cache | **Low** — feature expansion |
| `b12553` | YuE2 projector loading: `cls.output.weight` made optional, fixes mtmd init failure | **Low** — loader fix |
| `b12552` | OpenVINO CI round-trip and minor optimizations | **Low** |
| `b12551` | CUDA scatter kernel for batched tensor `set_n` | **Low** |
| `b12548` | Metal: second argument of `NSMakeRange` corrected | **Low** — build fix |

---

## 3. New Model & Hardware Support

| Domain | Item | Detail |
|--------|------|--------|
| **Model architecture** | **SenseNova Loop** | Full conversion + inference support added ([PR #32588](https://github.com/ggml-org/llama.cpp/pull/32588)) — official contribution from SenseNova team |
| **Model architecture** | **MiniMax-M3** | Fused sparse attention mask via `ggml_top_k_mask()` ([PR #32614](https://github.com/ggml-org/llama.cpp/pull/32614)) |
| **Draft model** | **Spark2.5 DSpark** | Conversion + inference support ([PR #31372](https://github.com/ggml-org/llama.cpp/pull/31372)) |
| **Hardware (OpenCL)** | Qualcomm Hexagon DSP | DP4a int8 KQ matmul, chunk query up to 96 |
| **Backend (WebGPU)** | `COL2IM_1D` operation | Enables Qwen3-TTS and PocketTTS waveform decoders ([PR #31708](https://github.com/ggml-org/llama.cpp/pull/31708)) |
| **Backend (SYCL)** | FP8 E4M3 initial ops | SET_ROWS, CPY, ADD, MUL_MAT, MUL_MAT_ID ([PR #31871](https://github.com/ggml-org/llama.cpp/pull/31871)) |
| **Backend (RISC-V)** | Mamba-2 SSM scan vectorized | RVV intrinsics for `ggml-cpu` ([PR #32448](https://github.com/ggml-org/llama.cpp/pull/32448)) |

---

## 4. Performance & Optimization

### Landed
- **OpenCL GQA head folding** ([PR #32631](https://github.com/ggml-org/llama.cpp/pull/32631)): During speculative verification, where input tokens are few and padded to tile boundaries, folding GQA heads eliminates wasted compute in idle tile regions.
- **Vulkan Q2_K matvec integer scale factoring** ([PR #32628](https://github.com/ggml-org/llama.cpp/pull/32628)): Sums four packed integer dot products before applying shared scale; same FP expression, reduced overhead.
- **Vulkan Strix Halo MMVQ scheduling** ([PR #32627](https://github.com/ggml-org/llama.cpp/pull/32627)): Selects 32-lane subgroups on AMD proprietary Vulkan driver for integer matvec.
- **CUDA scatter kernel** (`b12551`): Batched tensor writes now use dedicated scatter kernel instead of element-by-element copy.
- **HTTP client timeouts** ([PR #32313](https://github.com/ggml-org/llama.cpp/pull/32313)): Explicit 15s/30s/30s timeouts prevent hangs on model download failures.

### In Progress (Open PRs)
- **Vulkan fix for i915/mesa** ([PR #32516](https://github.com/ggml-org/llama.cpp/pull/32516)): Workaround for `CONFIG_DRM_I915_REQUEST_TIMEOUT` cancelling submissions after 20s — affects corrupted result reads on older Intel IGPU.
- **Vulkan CPU read fix for UMA without HOST_CACHED** ([PR #32634](https://github.com/ggml-org/llama.cpp/pull/32634)): On AMD APUs (gfx1013, gfx1151) where host-visible buffers are write-combining, CPU reads from GPU-written WC memory run at ~100 MB/s. This PR targets the logits row read path in the server sampler.
- **MoE cache graph node reservation** ([PR #32636](https://github.com/ggml-org/llama.cpp/pull/32636)): Fixes `graph_max_nodes()` budget underestimation for MoE layers — critical for cohere2moe architectures.

---

## 5. Stability & Regressions

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| 🔴 **High** | ROCm larger model hangs ([#19482](https://github.com/ggml-org/llama.cpp/issues/19482)) | **Open** — 16 comments | gfx1151 (Radeon 8060S); no regression window identified yet |
| 🔴 **High** | MTP performance drop since b9935 ([#25489](https://github.com/ggml-org/llama.cpp/issues/25489)) | **Open** — 14 comments | Speculative decoding regression in `llama-server`; Windows |
| 🟡 **Medium** | DFlash2 abort in post_decode seq_rm ([#31656](https://github.com/ggml-org/llama.cpp/issues/31656)) | **Open** — 7 comments | Hybrid Qwen3.8-27B, `--parallel 8` |
| 🟡 **Medium** | IMROPE cache reuse disabled for Qwen3.5 ([#32316](https://github.com/ggml-org/llama.cpp/issues/32316)) | **Open** — 5 comments | Full re-prefill every request on Metal/M1 Max |
| 🟡 **Medium** | HIP/gfx1200 FLASH_ATTN_EXT NaNs ([#32178](https://github.com/ggml-org/llama.cpp/issues/32178)) | **Open** — 2 comments | Varying results, potential backend correctness issue |
| 🟡 **Medium** | Pascal (sm_60) long-context corruption ([#32375](https://github.com/ggml-org/llama.cpp/issues/32375)) | **Open** — 3 comments | Hybrid models (MiMo-V2.6, Nemotron Bolt); CPU/Ampere unaffected |
| 🟡 **Medium** | CUDA ADD/GELU slower on B200 since PDL commit ([#30004](https://github.com/ggml-org/llama.cpp/issues/30004)) | **Stale** — 4 comments | First bad: `7b28f950`; no owner assigned |
| 🟢 **Low** | Control vectors vs LoRAs multi-turn divergence ([#32341](https://github.com/ggml-org/llama.cpp/issues/32341)) | **Open** — 3 comments | Steering persists in KV cache across turns; architectural, not a bug |
| 🟢 **Low** | HIP sm_75 Q-tile 32 cap suboptimal ([#28761](https://github.com/ggml-org/llama.cpp/issues/28761)) | **Stale** — 3 comments | Register spill at head_dim=256; missed gains at head_dim=128 |

### Closed (Notable)
- **Vulkan GLM-OCR garbage on Arc A380** ([#31836](https://github.com/ggml-org/llama.cpp/issues/31836)): Full-page images; CPU/SYCL work correctly.
- **Offloaded-MoE prefill GPU idle** ([#25859](https://github.com/ggml-org/llama.cpp/issues/25859)): Serial expert H2D copies starve GPU.
- **DFlash spec verify broken** ([#32526](https://github.com/ggml-org/llama.cpp/issues/32526)): ~6% acceptance vs 85% expected on docs example.

---

## 6. What This Means for Application Developers

**1. BF16 inference paths are expanding.** With ROPE and SET_ROWS now supporting BF16 natively on CUDA, mixed-precision serving (e.g., BF16 attention + Q4_K_M ffn) can be structured more efficiently without manual type-punning through F16.

**2. Multi-GPU ROCm users should hold on model upgrades.** The hang issue on larger models (gfx1151) remains unresolved. If you're running MoE or large dense models on AMD GPUs, stick to a verified commit until a fix lands.

**3. Qwen3.5 / IMROPE users on Metal lose KV cache benefits.** Every follow-up prompt re-prefills entirely. If you're running Qwen3.5 through `llama-server` on Apple Silicon, batched conversation workloads will be significantly slower than expected.

**4. Speculative decoding with MTP is regressed.** The performance drop since b9935 affects Windows `llama-server` users most. Consider reverting to non-MTP speculative drafts or waiting for a bisected fix.

**5. Vulkan on Intel IGPU (i915) is risky for long sequences.** The 20-second driver timeout can corrupt results silently. If you must run on older Intel integrated graphics, prefer shorter max context lengths until [PR #32516](https://github.com/ggml-org/llama.cpp/pull/32516) merges.

**6. New model support arriving.** SenseNova Loop, MiniMax-M3, and Spark2.5 DSpark are all landing — if you serve those architectures, conversion tooling and server-side support are now upstream.

---

*Digest generated from GitHub data for ggml-org/llama.cpp, 2026-11-20. All links reference the upstream repository.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze the GitHub data for Ollama on 2026-11-20 and structure it into the requested digest format.

Key observations from the data:

**Releases**: None in the last 24h

**Recent Issues (14 total, some updated in last 24h)**:
- #4072: Windows sleep prevention feature request
- #1645: Dark mode for website feature request
- #19765 (CLOSED): Silent truncation at 65,536 tokens
- #19780 (CLOSED): Empty assistant message with tool calls
- #19782 (OPEN): Windows embed API returning 400
- #19396 (OPEN): Audio streaming feature request for LFM3-Omni
- #19779 (CLOSED): qwen2.5-coder tools capability bug
- #19767 (OPEN): Qwen3.8 prompt cache re-reading issue
- #19768 (OPEN): Duplicate GGUF keys issue
- #19773 (OPEN): Cloud prompt cache hit issue
- #19672 (OPEN): Tool-call flooding in cloud
- #19777 (OPEN): OVHcloud Olala model support request
- #19775 (CLOSED): CLI search command feature
- #19774 (CLOSED): Prompt cache exact match bug

**Pull Requests (15 total)**:
- #19785 (OPEN): MLX runner memory-based parallelism selection
- #19745 (OPEN): MLX runner conversation cache persistence
- #19678 (CLOSED): MLX runner memory pressure handling for history
- #19784 (OPEN): README update for Big-AGI
- #19783 (OPEN): Hy4 Flash + DFly2 drafting on MLX
- #19680 (OPEN): llama.cpp context shift fix
- #19781 (OPEN): README add Athena


- #19581 (OPEN): Scheduler fix for runner cleanup
- #19778 (OPEN): README add Karpa
- #19776 (OPEN): Qwen tool call parsing fix
- #17566 (OPEN): Thinking token budget API
- #16151 (CLOSED): Pool auto-install support
- #19327 (OPEN): Per-layer KV cache sizing
- #17827 (OPEN): Duration formatting fix
- #19772 (OPEN): Tool call incomplete argument handling

I'll focus on the most impactful technical developments. The MLX runner improvements look particularly significant, with memory management and parallelism enhancements. Key areas of focus include conversation cache persistence, memory pressure handling, and advanced scheduling fixes. The Hy4 Flash integration and per-layer KV cache sizing suggest deeper performance optimization efforts.

The critical stability issue appears to be the Windows embed API regression, requiring immediate attention to resolve the 400 error. The Qwen tool call parsing fix also seems crucial for maintaining robust model interaction capabilities.
</think>


# Ollama Digest — 2026-11-20

## 1. Today's Highlights

Ollama saw no new releases today, but several important PRs moved forward on MLX (Apple Silicon) infrastructure, including memory-aware parallelism selection and conversation checkpoint persistence. A critical Windows regression in the `/api/embed` endpoint surfaced (#19782), causing 400 errors when the embedded runner fails to bind; this joins an existing cluster of prompt-cache and tool-call parsing bugs that landed or were filed over the past 24 hours.

## 2. Releases & Breaking Changes

No new releases published in the last 24 hours.

## 3. New Model & Hardware Support

| Item | Detail | PR / Issue |
|------|--------|------------|
| **Hy4 Flash (text + vision) on MLX** | Port of Tencent's Hy4 Flash inference with NVFP4 import, adaptive DFly2 drafting, and Engram file-backing; shares projection/host-mapping code with existing MLX models | [#19783](https://github.com/ollama/ollama/pull/19783) |
| **OVHcloud Olala GGUF support requested** | Feature request to add `OVHaiLLM/Olala-v1.0-mini-7A1B-GGUF`; currently fails on import | [#19777](https://github.com/ollama/ollama/issues/19777) |
| **LFM3-Omni native audio streaming proposal** | Proposal to expose streamed text-to-audio answers via `/api/chat` and `ollama run --audio` | [#19396](https://github.com/ollama/ollama/issues/19396) |

## 4. Performance & Optimization

| Area | Change | Impact | PR / Issue |
|------|--------|--------|------------|
| **MLX default parallelism** | Auto-select 1/2/4/8 slots based on available memory and per-client storage at model's context limit when `OLLAMA_NUM_PARALLEL` is unset | Better throughput on memory-constrained Apple Silicon setups | [#19785](https://github.com/ollama/ollama/pull/19785) |
| **MLX conversation checkpoint persistence** | Completed sessions saved asynchronously and restored after memory reclamation, model switch, or runner restart; bounded staging and shutdown draining | Eliminates prompt re-processing on cache eviction | [#19745](https://github.com/ollama/ollama/pull/19745) (supersedes [#19678](https://github.com/ollama/ollama/pull/19678)) |
| **MLX history under memory pressure** | Metal runners now retain more conversation history instead of discarding at a fixed 8 GiB cap | Improved multi-turn coherence on limited VRAM | [#19678](https://github.com/ollama/ollama/pull/19678) *(closed)* |
| **Per-layer KV cache sizing** | PredictServerVRAM sizes each layer individually using its actual `head_count_kv` and embedding dimensions rather than a uniform minimum | Reduces over-provisioning and prevents spurious runner eviction | [#19327](https://github.com/ollama/ollama/pull/19327) |
| **Context shift amplitude fix (llama.cpp)** | Prevents YaRN amplitude factor from being re-applied to already-rope'd KV cache keys during context shifts, which was causing quality degradation on each shift | Corrects long-context behavior for models using RoPE scaling | [#19680](https://github.com/ollama/ollama/pull/19680) |
| **Scheduler runner cleanup** | Keeps a runner that failed to stop in the loaded set instead of silently clearing it; prevents subsequent load predictions against a "freed" VRAM slot that is still occupied | Eliminates cascading CPU fallback and duplicate llama-server spawns | [#19581](https://github.com/ollama/ollama/pull/19581) |

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **High** | **Windows `/api/embed` returns 400** — the bundled llama-server fails to bind a high port on loopback, causing silent failure in the embed pipeline | Open | — |
| 🔴 **High** | **Silent token truncation at 65,536 tokens** — models report `done_reason=stop` with no length signal despite context window being 147,456; affects long-document ingestion | Closed | — |
| 🟡 **Medium** | **Qwen2.5-coder advertises `tools` capability but never emits native `tool_calls`** — clients may attempt tool-calling flows that silently fail | Closed | — |
| 🟡 **Medium** | **Empty assistant message with nonzero `completion_tokens`** — some tool schemas cause qwen2.5 to generate a complete tool call but return an empty `content` with `finish_reason: stop` | Closed | — |
| 🟡 **Medium** | **Prompt cache exact-match only** — changing the last message discards the entire cache even when all prior tokens are identical (Vulkan, qwen3:8b) | Closed | — |
| 🟡 **Medium** | **Qwen3.8 two-agent sessions re-read prompt from token 0** — parallel slots on a single runner lose the prompt cache; single-slot mode causes duplicate re-processing | Open | — |
| 🟡 **Medium** | **Duplicate GGUF keys accepted with divergent read semantics** — `fs/gguf/gguf.go` uses first-wins; `fs/gguf/metadata.go` uses last-wins, producing non-deterministic behavior | Open | — |
| 🟡 **Medium** | **Cloud prompt cache near-zero on first requests** — long resumed sessions see almost no cache hits initially, then dramatically more on subsequent turns | Open | — |
| 🟡 **Medium** | **Tool-call flooding on mimo-v2.6-pro:cloud** — catastrophic hundreds-of-identical-calls loops in multi-round agentic sessions | Open | — |
| 🟢 **Low** | **`ollama list` shows only downloaded models** — no in-terminal discovery/search for the Ollama library | Closed | — |
| 🟢 **Low** | **`humanDuration` rounding inconsistency** — hours label recomputes from truncated value in one branch, causing off-by-one for durations near year boundaries | Open | [#17827](https://github.com/ollama/ollama/pull/17827) |

## 6. What This Means for Application Developers

1. **Windows embed users should test carefully.** The `/api/embed` 400 regression on Windows affects anyone using `POST /api/embed` with models like `embeddinggemma:latest`. Until a fix lands, monitor server-side loopback connectivity or route embedding through the main llama-server path.

2. **Long-document truncation is still live for some models.** The 65k token silent truncation (#19765) was closed, likely as a known llama.cpp upstream behavior, but it means applications sending large corpora should track `usage.prompt_tokens` independently and implement their own truncation signals rather than relying on `done_reason`.

3. **MLX (Apple Silicon) deployments gain substantially from today's PRs.** The combination of memory-aware parallelism (#19785) and conversation checkpoint persistence (#19745) means fewer prompt re-processing cycles and better multi-user throughput on constrained Mac hardware. Upgrade once these land in a release.

4. **Tool-calling with Qwen models has edge cases.** Both the silent empty-message bug (#19780) and the `qwen2.5-coder` capability mismatch (#19779) are closed but highlight that schema definition and chat template compatibility vary. Validate tool-call parsing on your specific model variant rather than assuming `tools` in `/api/show` implies functional native tool-calling.

5. **Prompt caching is exact-match today.** If your application modifies the last message (e.g., appending a system nudge or timestamp), expect zero cache reuse even if the conversation history is identical. Design prompts to avoid last-message mutation, or budget for full re-tokenization on each turn.

6. **Community integrations are expanding.** New entries for [Big-AGI](https://github.com/ollama/ollama/pull/19784), [Athena](https://github.com/ollama/ollama/pull/19781), and [Karpa](https://github.com/ollama/ollama/pull/19778) extend Ollama's ecosystem into web UIs and local desktop translation — relevant if you are building on top of Ollama and need a reference UI or integration pattern.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze this GitHub data for LiteLLM and create a structured digest for 2026-11-20.

Key observations:
1. **Releases**: v1.112.0-dev.1 (dev), v1.111.0-rc.2 (RC), v1.110.1, v1.108.12 (LTS), v1.106.11
2. **New Models**: Kimi K3.1 Pro, Kimi K2.6, MiniMax M3.1 Flash, Nemotron 3.5 Super VL added via PR #53021
3. **Performance work**: Several gateway performance PRs - native rate limiting, priority routing, callback stages
4. **Bugs**: Various issues around streaming, database reads, MCP, budget enforcement
5. **Features**: Kafka logging, Bedrock guardrails for tool calls, GCP Terraform improvements, OpenTelemetry preset for WildEdge

Let me structure this properly.
</think>


# LiteLLM Daily Digest — 2026-11-20

## 1. Today's Highlights

LiteLLM's development continues at a rapid pace with the v1.111.0 RC and v1.112.0-dev.1 landing alongside a wave of gateway performance work. A standout theme today is **native Rust-based enforcement of virtual key rate limits and priority routing** (#52839, #52813, #53015), which eliminates Python round-trips for common quota checks. On the observability side, native Kafka request logging (#52855) and a new WildEdge OpenTelemetry preset (#52290) expand integration options.

---

## 2. Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| [v1.112.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-dev.1) | Dev | Pre-release, not for production |
| [v1.111.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-rc.2) | RC | Release candidate |
| [v1.110.1](https://github.com/BerriAI/litellm/releases/tag/v1.110.1) | Stable | Latest stable patch |
| [v1.108.12](https://github.com/BerriAI/litellm/releases/tag/v1.108.12) | LTS | Latest LTS; pull `ghcr.io/berriai/litellm:lts` |
| [v1.106.11](https://github.com/BerriAI/litellm/releases/tag/v1.106.11) | Stable | Older stable |

All Docker images are now cosign-signed. Verify with:
```bash
cosign verify \
  --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com \
  ghcr.io/berriai/litellm:v1.110.1
```

**Breaking / Migration Notes:**
- [#50905](https://github.com/BerriAI/litellm/issues/50905) — `before_value` in audit logs stored as JSON string instead of object since v1.108.0. Affects `GET /audit` with 500 errors. Fix merged.
- [#34747](https://github.com/BerriAI/litellm/issues/34747) — `store_prompts_in_spend_logs: true` not persisting messages since v1.93.0. Confirmed fixed.

---

## 3. New Model & Hardware Support

| Model | Provider | Pricing (1M tokens) | Context | PR |
|-------|----------|---------------------|---------|-----|
| Kimi K3.1 Pro | Inference APIs | $2.60 / $13.00 | — | [#53021](https://github.com/BerriAI/litellm/pull/53021) |
| Kimi K2.6 | Inference APIs | — | — | [#53021](https://github.com/BerriAI/litellm/pull/53021) |
| MiniMax M3.1 Flash | Inference APIs | — | — | [#53021](https://github.com/BerriAI/litellm/pull/53021) |
| Nemotron 3.5 Super VL | Inference APIs | — | — | [#53021](https://github.com/BerriAI/litellm/pull/53021) |

**Feature Requests:**
- [#13681](https://github.com/BerriAI/litellm/issues/13681) — SGLang provider integration requested (MoE model support).

---

## 4. Performance & Optimization

| Area | Change | PR |
|------|--------|-----|
| Virtual key rate limits | Enforced natively in Rust (`rpm_limit`, `tpm_limit`, `tpd_limit`, `max_parallel_requests`, `model_rpm_limit`) — eliminates Python dispatch for most quota checks | [#52839](https://github.com/BerriAI/litellm/pull/52839) |
| Virtual key with no limits | Fast-path for unlimited keys in Rust gateway | [#52813](https://github.com/BerriAI/litellm/pull/52813) |
| Priority routing | Native capacity sharing by priority as dynamic rate limiter callback | [#53015](https://github.com/BerriAI/litellm/pull/53015) |
| Gateway callbacks | Single unified stage for callbacks around inference calls | [#53011](https://github.com/BerriAI/litellm/pull/53011) |
| TCP latency | Nagle's algorithm disabled on supervised Python listener | [#53013](https://github.com/BerriAI/litellm/pull/53013) |
| Request logging | Native Kafka export with consistent attribution/usage/cost fields | [#52855](https://github.com/BerriAI/litellm/pull/52855) |
| Guardrails | Bedrock scanning now covers tool-call arguments and tool descriptions | [#52999](https://github.com/BerriAI/litellm/pull/52999) |
| Gemini caching | `prompt_cache_breakpoint` now honored on chat completions | [#50705](https://github.com/BerriAI/litellm/pull/50705) |

**Infrastructure note:** The gateway is progressively moving key hot paths from Python to Rust (rate limiting, routing, key resolution), which should reduce p99 latency significantly for high-throughput deployments.

---

## 5. Stability & Regressions

| Severity | Issue | Status | Links |
|----------|-------|--------|-------|
| 🔴 **Critical** | Read replica DB timeout leaves reader Prisma engine dead; reads never fall back to writer | CLOSED | [#52284](https://github.com/BerriAI/litellm/issues/52284) |
| 🔴 **Critical** | `max_budget` admits ~22% more calls than configured (11 calls fitting 9) | OPEN | [#50125](https://github.com/BerriAI/litellm/issues/50125) |
| 🟠 **High** | Streaming `/v1/responses` upstream 400 drops connection mid-body; `GenericEvent has no attribute 'type'` | OPEN | [#52853](https://github.com/BerriAI/litellm/issues/52853) |
| 🟠 **High** | UI very slow in v1.82.x (stale, pre-existing) | OPEN (stale) | [#23005](https://github.com/BerriAI/litellm/issues/23005) |
| 🟠 **High** | `token_counter` raises `ValueError` for `video_url` content blocks | OPEN | [#28071](https://github.com/BerriAI/litellm/issues/28071) |
| 🟠 **High** | Priority routing groups ignore deployment `tpm` limits, fail over early on `rpm` limits | OPEN | [#52548](https://github.com/BerriAI/litellm/issues/52548) |
| 🟡 **Medium** | OAuth2 `client_credentials` MCP servers always receive 400 from token endpoint | OPEN | [#37222](https://github.com/BerriAI/litellm/issues/37222) |
| 🟡 **Medium** | `ModelNotMappedError` in `litellm/utils.py` | OPEN | [#51452](https://github.com/BerriAI/litellm/issues/51452) |
| 🟡 **Medium** | Finish reasons indicating failure/truncation reported as `"stop"` | OPEN | [#48721](https://github.com/BerriAI/litellm/issues/48721) |
| 🟡 **Medium** | `cache_control_injection_points` requires `prompt_id` unexpectedly | OPEN | [#37469](https://github.com/BerriAI/litellm/issues/37469) |
| 🟡 **Medium** | Anthropic `extra_body` fields nested incorrectly → 400 | OPEN | [#48373](https://github.com/BerriAI/litellm/pull/48373) (PR exists) |
| 🟢 **Low** | Responses API OTEL spans use `llm.None.*` instead of provider-specific keys | CLOSED | [#25240](https://github.com/BerriAI/litellm/issues/25240) |
| 🟢 **Low** | `store_prompts_in_spend_logs` not persisting messages (regression) | CLOSED | [#34747](https://github.com/BerriAI/litellm/issues/34747) |

**Key concern for operators:** The budget enforcement bug (#50125) allows ~22% overspend on virtual keys. If budget caps are critical for your setup, validate actual spend against limits in production.

---

## 6. What This Means for Application Developers

1. **Rate limiting is faster.** The Rust-native enforcement of virtual key limits means `/chat/completions` calls on rate-limited keys no longer trigger Python callbacks for every request. Expect lower p50/p99 latency at high concurrency.

2. **Budget caps may be loose.** If you're using `max_budget` on virtual keys for cost control, the current implementation allows ~22% overshoot. Monitor spend and consider adding a buffer or awaiting the fix.

3. **Kafka is now a first-class logging target.** Instead of a custom integration, enable native Kafka request logging for centralized usage and cost analysis across your fleet.

4. **Tool-call content is now scannable.** If using Bedrock guardrails for content safety, you can now opt in to scan tool-call arguments and tool descriptions — not just message text and tool results.

5. **Watch the streaming bug.** If you're using `/v1/responses` with streaming and an upstream 400 occurs, the connection drops silently. Clients will see a socket reset rather than a JSON error. Workaround: add client-side retry logic with fallback to non-streaming.

6. **Database read replicas are risky.** The current behavior leaves the read replica in a dead state after a timeout. If you're using `DATABASE_URL_READ_REPLICA`, avoid it for now or implement external health checks.

7. **New model support on Inference APIs.** Kimi K3.1 Pro and related models are now in the price table. If you're routing through Inference APIs, these models are available.

---

*Digest generated from GitHub data for [BerriAI/litellm](https://github.com/BerriAI/litellm) on 2026-11-20.*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the GitHub data for Unsloth AI and create a structured digest for 2026-11-20.

Key findings:

**Releases:**
- v0.1.920-beta released with AMD NPU support, Q4NX models loading on NPU, LTX-2.5 and MOSS-Image LoRA training, NVIDIA Cosmos3 FP8 video, and scheduled tasks

**Highlights:**
- AMD NPU support major update - Q4NX models load on NPU, NPU model status visibility
- New model support: LTX-2.5, MOSS-Image LoRA training, NVIDIA Cosmos3 FP8 video

**Issues (27 total, key ones):**
- #17015: Studio repeated full prompt processing with Qwen hybrid model after tool use
- #15038: Model Management feature request (labels, rename, notes)
- #8973: Android app / Remote client request
- #18221: Computer use on Wayland (closed - feature limitation)
- #18321: Model Picker UI cramped in v0.1.919-beta
- #18501: Older AMD XDNA NPUs support request (Ryzen AI 100/200 series)
- #18481: MiniMax-M3.1 tool call parsing failure
- #12248: AMD card ignored on mixed NVIDIA+AMD host

**PRs (223 total, key ones):**
- #18548: Network firewall for web tools, Python, Terminal
- #18556: Fix llama.cpp bundle extraction issue
- #12731: DeepSpeed ZeRO-1/2 gradient offloading fix
- #14328: LoRA init RNG fix
- Multiple diffusion training optimizations (checkpointing, VAE decode, etc.)
- NPU fixes for Windows (Smart App Control workarounds)
- CPU-only improvements for image/video models

</think>


# Unsloth Digest — 2026-11-20

## 1. Today's Highlights

Unsloth v0.1.920-beta lands with expanded **AMD NPU support**, enabling Q4NX model conversion and runtime status visibility for all NPU-compatible models. The release also introduces **LTX-2.5** and **MOSS-Image LoRA training**, NVIDIA **Cosmos3 FP8 video** inference, and scheduled agent tasks. Meanwhile, the team merged multiple diffusion training optimizations targeting FLUX.3 INT8 cold-load times and checkpointing budgets.

## 2. Releases & Breaking Changes

| Version | Key Changes |
|---------|-------------|
| **v0.1.920-beta** | AMD NPU: Q4NX model conversion + runtime status; LTX-2.5 & MOSS-Image LoRA training; NVIDIA Cosmos3 FP8 video; scheduled tasks with chat replies |

No breaking API changes reported today.

## 3. New Model & Hardware Support

| Category | Addition | Notes |
|----------|----------|-------|
| **Training targets** | LTX-2.5, MOSS-Image | LoRA fine-tuning pipelines added |
| **Video inference** | NVIDIA Cosmos3 FP8 | New scheduled-task video mode |
| **NPU backends** | AMD RyzenAI ONNX runtime | Fallback path when FastFlowLM is blocked by Smart App Control ([#18555](https://github.com/unslothai/unsloth/pull/18555)) |
| **NPU backends** | AMD-signed FastFlowLM 1.0.13 | Authenticode-signed binaries to pass Windows Smart App Control ([#18553](https://github.com/unslothai/unsloth/pull/18553), [#18554](https://github.com/unslothai/unsloth/pull/18554)) |
| **CPU-only inference** | FLUX.2 VAE CPU decode via sd.cpp | Decodes latent on CPU when no GPU available ([#18521](https://github.com/unslothai/unsloth/pull/18521)) |
| **GPU inference** | Per-GPU-family CUDA bundles for sd.cpp | Splits the fat bundle; 131–139 MiB vs 341 MiB ([#18491](https://github.com/unslothai/unsloth/pull/18491)) |

Feature requests still open for **older AMD XDNA NPUs (Ryzen AI 100/200 series)** ([#18501](https://github.com/unslothai/unsloth/issues/18501)) and **Colibri engine** streaming backend ([#17928](https://github.com/unslothai/unsloth/issues/17928)).

## 4. Performance & Optimization

### Diffusion Training

| Area | Change | Impact |
|------|--------|--------|
| FLUX.3 INT8 cold load | Precompile int8 kernels during weight read | **−2.6 to −2.9 s** cold-card load time ([#18455](https://github.com/unslothai/unsloth/pull/18455)) |
| FLUX.3 INT8 restart | Hash CUTLASS library once per process | **−3.2 s** restart time ([#18463](https://github.com/unslothai/unsloth/pull/18463)) |
| SDXL / H3 checkpointing | Budget-based checkpointing instead of every block; step down after OOM; cache fp8 backward weights | Lower memory overhead on large batches ([#18518](https://github.com/unslothai/unsloth/pull/18518)) |
| Persistent conditioning cache | Enabled by default for MiniMax-H3 video & image trainers | Eliminates redundant VAE/caption recomputation ([#18519](https://github.com/unslothai/unsloth/pull/18519)) |
| Video VAE tiled decode | Preallocated output buffers instead of `torch.cat` | Reduced memory fragmentation during decode ([#18506](https://github.com/unslothai/unsloth/pull/18506)) |
| Probe warm-up RNG | Uses dedicated generator instead of default CUDA RNG | Deterministic sampling post-load ([#18457](https://github.com/unslothai/unsloth/pull/18457)) |

### LoRA & Fine-tuning

- **LoRA init RNG guard**: `get_peft_model` no longer resets global RNG on every init; prevents reproducibility issues in sequential training pipelines ([#14328](https://github.com/unslothai/unsloth/pull/14328)).
- **DeepSpeed ZeRO-1/2**: Smart gradient offloading now correctly disabled under ZeRO-1/2 to avoid conflicts ([#12731](https://github.com/unslothai/unsloth/pull/12731)).

### Model Serving

- **Memory badge freshness**: Opening a GGUF model in the Hub now takes a live memory reading instead of stale cached values ([#16889](https://github.com/unslothai/unsloth/pull/16889)).
- **Mac GGUF rating**: GGUF-only Macs now rate models against Metal VRAM instead of half of free RAM, fixing false "Does not fit" badges ([#18552](https://github.com/unslothai/unsloth/pull/18552)).

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 High | Tool call parsing failure with MiniMax-M3.1 exposes raw protocol tokens and halts agent execution ([#18481](https://github.com/unslothai/unsloth/issues/18481)) | Open | — |
| 🔴 High | Studio: repeated full-prompt reprocessing across turns with Qwen hybrid model + MCP tools after tool use ([#17015](https://github.com/unslothai/unsloth/issues/17015)) | Open (8 comments) | — |
| 🟡 Medium | Llama.cpp CUDA upgrade caused Qwen3.8 27B throughput drop: 60 t/s → 38 t/s ([#17728](https://github.com/unslothai/unsloth/issues/17728)) | Closed | Investigating |
| 🟡 Medium | AMD GPU monitor shows 0% utilization on Windows ROCm (Ryzen AI Max+ 395, gfx1151) ([#18005](https://github.com/unslothai/unsloth/issues/18005)) | Closed | In progress |
| 🟡 Medium | Llama.cpp b12340 broke MTP (Multimodal Tensor Parallelism) ([#17733](https://github.com/unslothai/unsloth/issues/17733)) | Closed | Investigating |
| 🟡 Medium | `uv` not found error after user-level install; message never clears ([#18492](https://github.com/unslothai/unsloth/issues/18492)) | Closed | Fix merged |
| 🟢 Low | Model picker UI cramped in v0.1.919-beta; users request revert option ([#18321](https://github.com/unslothai/unsloth/issues/18321)) | Open | — |
| 🟢 Low | Wayland: Computer Use toggle greyed out; requires X11 session ([#18221](https://github.com/unslothai/unsloth/issues/18221)) | Closed | Wontfix (platform limitation) |

Additional known issues still open:
- AMD cards ignored on mixed NVIDIA+AMD hosts ([#12248](https://github.com/unslothai/unsloth/issues/12248))
- Incorrect unified memory loading on Ryzen 8700G & Radeon 780M ([#18001](https://github.com/unslothai/unsloth/issues/18001))

## 6. What This Means for Application Developers

1. **AMD NPU deployment is more viable**: With signed FastFlowLM 1.0.13 and the RyzenAI ONNX fallback, Unsloth Studio now handles Windows Smart App Control restrictions. If you're targeting AMD NPU hardware, v0.1.920-beta is the recommended baseline.

2. **Diffusion LoRA training is significantly faster**: The FLUX.3 INT8 cold-load and restart improvements (combined ~6 s improvement) mean faster iteration cycles for image/video fine-tuning workflows.

3. **Watch for Qwen hybrid + tool-use regressions**: The full-prompt reprocessing bug ([#17015](https://github.com/unslothai/unsloth/issues/17015)) in hybrid models with MCP tool catalogs can dramatically inflate token usage. Avoid production tool-use agents with Qwen3.8 27B GGUF until this is resolved.

4. **Mac GGUF users: re-evaluate model fit**: The fix in [#18552](https://github.com/unslothai/unsloth/pull/18552) corrects false negatives for small GGUFs on Metal. Previously rejected models may now load successfully.

5. **Scheduled agent tasks are live**: v0.1.920-beta's scheduled-chat-reply feature enables time-triggered agent workflows natively within Studio — useful for monitoring pipelines or periodic reporting agents.

6. **Network sandboxing lands**: PR [#18548](https://github.com/unslothai/unsloth/pull/18548) introduces per-installation network allow/block lists for web tools, Python, and Terminal. If you're building multi-tenant or restricted environments, this provides a built-in enforcement layer without external firewall rules.

---

*Generated from github.com/unslothai/unsloth activity on 2026-11-20. All GitHub links reference the repository root.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*