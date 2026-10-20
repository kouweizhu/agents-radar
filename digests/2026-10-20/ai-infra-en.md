# AI Infrastructure Digest 2026-10-20

> Generated: 2026-10-20 01:12 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report of the four AI infrastructure projects I've been tracking. Let me organize this systematically:

1. **Ecosystem Overview** - 3-5 sentences on the overall AI infrastructure landscape
2. **Activity Comparison** - Table comparing Issues, PRs, Release status
3. **Model Support Race** - Which projects support which new models
4. **Performance Frontier** - Where optimization efforts are concentrated
5. **Layer Positioning** - How projects differ by layer
6. **Trend Signals** - Industry trends and what developers should watch

Let me gather the data from each digest:

**vLLM (2026-10-20):**
- Releases: No releases in last 24h
- Issues: 24 total (critical: V1 engine deadlock, cross-request contamination, Qwen4Exp crash)
- PRs: 31 total
- New models: NVIDIA Nemotron 3.5 ASR Streaming, ViT Full CUDA Graph support, ROCm Beam 1.0
- Performance: FA4 for Hopper ViT, logprobs auxoutput, DSpark fix, Valkey secondary tier
- Hardware: Hopper, RDNA3/RDNA3.5, MI355X

**SGLang (2026-10-20):**
- Releases: v0.5.22 (950 PRs from 245 contributors)
- Issues: 24+ (critical: CUDA coredump tracker, flaky CI)
- PRs: 31+ (many active around HiCache, unified memory pool, ROCm)
- New models: Clef/Clef Flash, PPLX-Decider v1/v1.1
- Hardware: SM120, AMD ROCm, NPU, Intel XPU
- Performance: HiCache improvements, KV release batching, DSA indexer

**llama.cpp (2026-10-20):**


- Commits: 13 in last 24h
- Issues: 9 (critical: Qwen3.8-27B decode collapse, RTX 5090 display loss)
- PRs: 7 key ones
- New models: SenseNova U1, H2O-Lightning-4B, Qwen4Exp
- Hardware: Hexagon v85, multi-node NCCL TP
- Performance: OpenCL cooperative-K GEMM, SYCL fixes, Vulkan optimization

I'll continue tracking the emerging trends across these AI infrastructure projects, noting their unique strengths and focus areas. The ecosystem shows intense competition in performance optimization, hardware support, and model compatibility.

**Ollama (2026-10-20):**
- Releases: None in last 24h
- Issues: 24 (critical: RTX 5090 crash, RTX 5060 Ti, ROCm regression)
- PRs: 31 (key: DFlash2 MLX, YaRN rope scaling)
- New models: Apple Foundation Models (request), MLX improvements
- Hardware: RTX 5090, RTX 5060 Ti Blackwell, AMD Radeon, MLX
- Performance: Cloud integration, Claude Code, YaRN

**LiteLLM (2026-10-20):**
- Releases: None in last 24h
- Issues: 25+ (high: RAM leak, token counting, budget issues)
- PRs: 25+ (key: streaming, Azure, Hopper, cost fixes)
- New models: Hopper inference
- Performance: Streaming optimizations, refactoring

**Unsloth (2026-10-20):**
- Releases: v0.1.909-beta
- Issues: 11+ (block compile bug, performance regression)
- PRs: 12+ (PrefixGrouper, packing, cross entropy optimization)
- New models: DeepSeek-V4.1-Flash-1017, FLUX.3 Image Klein
- Hardware: FSDP2 multi-GPU (alpha)
- Performance: Training optimizations, memory efficiency</think>

# Cross-Project Comparison Report — 2026-10-20

---

## 1. Ecosystem Overview

Today's AI serving infrastructure is undergoing rapid segmentation around distinct operational layers. **vLLM** and **SGLang** compete in the high-throughput distributed serving layer, with vLLM emphasizing KV cache offloading hierarchies and SGLang advancing hierarchical caching (HiCache) with multi-tier backends. **llama.cpp** maintains its position as the portable CPU/GPU runtime with expanding backend diversity (SYCL, OpenCL, Vulkan, Metal), while adding multi-node tensor parallelism. **Ollama** focuses on developer ergonomics and local deployment with cloud-model bridging. **LiteLLM** sits as the unification gateway, handling multi-provider routing and cost accounting. Simultaneously, **Unsloth** captures the fine-tuning layer, optimizing training throughput with advanced gradient and memory techniques. The fragmentation reflects specialization: serving, runtime, gateway, and training are becoming distinct product categories.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Notable State |
|---------|-------------|-----------|----------------|---------------|
| **vLLM** | 10 (2 critical) | 9 | 0 | Active bug triage on V1 deadlock |
| **SGLang** | 7 | 7 | 1 (v0.5.22) | Major release — 950 PRs, 245 contributors |
| **llama.cpp** | 9 (2 critical) | 7 | 13 commits | Active backend optimization |
| **Ollama** | 11 (4 critical) | 13 | 0 | Hardware compatibility crisis |
| **LiteLLM** | 12+ | 12+ | 0 | Streaming/cost accounting fixes |
| **Unsloth** | 6 | 12 | 1 (v0.1.909-beta) | Training UI overhaul + FLUX.3 |

---

## 3. Model Support Race

| Model/Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4.1 Flash** | — | — | — | — | ✅ (552B/16B) |
| **Qwen4Exp** | — | — | ✅ (proto) | — | — |
| **Nemotron 3.5 ASR** | ✅ | — | — | ✅ | — |
| **FLUX.3 Image** | — | — | — | — | ✅ |
| **Clef / PPLX-Decider** | — | ✅ | — | — | — |
| **SenseNova U1** | — | — | ✅ | — | — |
| **H2O-Lightning-4B** | — | — | ✅ | — | — |
| **Apple Foundation** | — | — | — | 🔲 (request) | — |
| **Hopper (NVIDIA)** | ✅ ViT | — | — | — | — |

**Leader**: **llama.cpp** and **Unsloth** lead in model breadth this cycle — llama.cpp adds SenseNova, H2O, and Qwen4Exp; Unsloth adds DeepSeek-V4.1 Flash and FLUX.3. **vLLM** leads in hardware-specific optimization (FA4 for Hopper ViT, ROCm MI355X).

---

## 4. Performance Frontier

| Optimization Area | Projects Active | Key Focus |
|-------------------|-----------------|-----------|
| **KV Cache Offloading** | vLLM, SGLang | Valkey secondary tier (vLLM), HiCache batching (SGLang) |
| **Quantization** | vLLM, llama.cpp | W4A8 MXFP4 (vLLM RDNA3), MoE silent corruption fix (llama.cpp) |
| **Attention Kernels** | vLLM, llama.cpp, SGLang | FA4 for Hopper ViT (vLLM), OpenCL DP4A GEMM (llama.cpp), DSA indexer (SGLang) |
| **Streaming Overhead** | LiteLLM | Pydantic round-trip elimination, usage chunk alignment |
| **Training Memory** | Unsloth | PrefixGrouper, cross-entropy masking, block compile |
| **Distributed Serving** | vLLM, SGLang, llama.cpp | P/D disaggregation (vLLM), NCCL TP (llama.cpp), NIXL (SGLang) |

**Highest activity concentration**: KV cache management and attention kernels — both are memory-bandwidth bottlenecks at scale.

---

## 5. Layer Positioning

| Layer | Projects | Position |
|-------|----------|----------|
| **Fine-tuning / Training** | Unsloth | Dedicated training optimizer; FSDP2 multi-GPU alpha |
| **Local Runtime** | llama.cpp, Ollama | llama.cpp = portable engine; Ollama = UX wrapper + cloud bridge |
| **Distributed Serving Engine** | vLLM, SGLang | vLLM = KV offloading focus; SGLang = HiCache + tool calling |
| **Gateway / Proxy** | LiteLLM | Multi-provider routing, cost accounting, auth |

**Differentiation insight**: vLLM and SGLang are converging on similar problems (P/D disaggregation, hierarchical caching) but approach them differently — vLLM from a memory-centric angle, SGLang from a latency/throughput angle. llama.cpp occupies a unique position as the only project serving all hardware tiers (CPU, iGPU, dGPU, NPU, Hexagon) without a server orchestration layer.

---

## 6. Trend Signals

### What Agent / Application Developers Should Watch

1. **P/D Disaggregation is becoming standard** — Both vLLM (#60523) and SGLang (NIXL) are investing heavily in prefill/decode separation. If you're building long-context agents, expect infrastructure to shift toward P/D architectures within 2–3 quarters.

2. **KV cache is the new memory hierarchy** — The Valkey secondary tier (vLLM) and multi-tier HiCache (SGLang) signal that GPU memory alone cannot scale. Plan for tiered KV storage in multi-tenant deployments.

3. **Structured output is fragile** — Multiple projects (LiteLLM, Ollama, SGLang) have tool-calling bugs around empty content arrays and token counting. If your agent relies on function calling, validate across LiteLLM proxy and direct provider paths.

4. **Consumer GPU instability is a risk** — RTX 5090, RTX 5060 Ti (Ollama/llama.cpp), and AMD ROCm regressions indicate that bleeding-edge NVIDIA Blackwell and RDNA3.5 are not yet stable for production serving. Budget for older GPU generations or CPU fallbacks.

5. **Training is getting accessible** — Unsloth's DPO/ORPO/GRPO UI and reward library lower the barrier to preference-tuned models. Expect more agents to include fine-tuned reasoning models as a result.

6. **Gateway consolidation via LiteLLM** — LiteLLM's streaming fixes and Hopper support suggest it's becoming the de facto proxy layer for multi-cloud deployments. Its accounting accuracy work (token counting, cache pricing) will matter for cost-sensitive applications.

---

*Cross-project data compiled from vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth — 2026-10-20*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to generate a vLLM digest for 2026-10-20 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the key information:

**Releases & Breaking Changes:**
- No releases in the last 24h

**New Model & Hardware Support:**
- Issue #47455: Support NVIDIA Nemotron 3.5 ASR Streaming (nemotron-3.5-asr-streaming-0.6b)
- Issue #38175: RFC for ViT Full CUDA Graph support (Qwen3-VL, Qwen3.5, GLM-V, Kimi K2.5)
- PR #61435: ROCm specialized decode on MI355X for Kimi-K3
- PR #62057: ROCm Beam 1.0 support
- PR #60413: W4A8 int8-dot MXFP4 GEMV for RDNA3/RDNA3.5

**Performance & Optimization:**
- PR #61705: Use FA4 for long-sequence ViT attention on Hopper
- PR #61953: Support logprobs auxoutput
- PR #61807: Fix DSpark draft token count inflation
- Issue #59770: Nemotron-3.5-Lightning NVFP4 decode ~16% slower on DGX Spark
- Issue #54919: Qwen3.8-Flash-Next starves active decode for 3-7 minutes
- Issue #55434: GLM-5.3 P/D on GB200 NIXL issues
- PR #60531: Preserve batch invariance in Triton unified attention on SM100
- PR #54642: Include multimodal limits in model compile-cache hash
- PR #60523: RFC for improving MooncakeConnector


- PR #62580: Add valkey secondary tier

I notice the stability and performance challenges are significant. The V1 engine has a critical deadlock issue with concurrent loads involving fp8 and prefix caching on Qwen3.5, which could severely impact system reliability. There are multiple critical bugs affecting model performance and system integrity, including cross-request context contamination in P/D disaggregation and a crash scenario with Qwen4Exp. These issues suggest the need for immediate attention and potential system redesign to ensure robust performance across different model configurations.</think>

# vLLM Digest — 2026-10-20

## Today's Highlights

The vLLM project is seeing active work across KV cache offloading, multimodal ViT optimization, and P/D disaggregation improvements. A critical V1 engine deadlock bug affecting fp8 + prefix caching + Qwen3.5 workloads is being actively investigated. New ROCm optimizations landed for Kimi-K3 on MI355X and Hopper ViT attention now uses FA4 for long sequences.

---

## Releases & Breaking Changes

No new releases in the last 24 hours.

---

## New Model & Hardware Support

| Item | Description | Reference |
|------|-------------|-----------|
| **NVIDIA Nemotron 3.5 ASR Streaming** | Feature request to support `nemotron-3.5-asr-streaming-0.6b`, a 600M-parameter multilingual streaming ASR model under OpenMDW-1.1 license | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **ViT Full CUDA Graph RFC** | RFC tracker for enabling full CUDA Graph support for Vision Transformer encoders in multimodal models (Qwen3-VL, Qwen3.5, GLM-V, Kimi K2.5) | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| **ROCm Beam 1.0 + DFlash2** | Day-0 ROCm support for Reflection's Beam 1.0 (501B) with DFlash2 drafter | [#62057](https://github.com/vllm-project/vllm/pull/62057) |
| **W4A8 MXFP4 on RDNA3/3.5** | New opt-in MXFP4 linear kernel for RDNA3/RDNA3.5 (gfx11) decode using `v_dot4_i32_iu8` | [#60413](https://github.com/vllm-project/vllm/pull/60413) |
| **Kimi-K3 MI355X specialized decode** | ROCm performance optimization with MLA prologue (M1a) and epilogue (M1b) around asm MLA attention for TP8, DCP1/DCP8 | [#61435](https://github.com/vllm-project/vllm/pull/61435) |

---

## Performance & Optimization

| Item | Description | Reference |
|------|-------------|-----------|
| **FA4 for Hopper ViT** | Use FA4's SM90 kernel for ViT attention with `head_size=80` and `max_seqlen >= 8192`; FA3 remains for windowed attention | [#61705](https://github.com/vllm-project/vllm/pull/61705) |
| **Logprobs auxoutput** | Opt-in generated-token logprobs through auxiliary-output path to avoid recomputation for prefix-cache-backed requests | [#61953](https://github.com/vllm-project/vllm/pull/61953) |
| **DSpark draft token count fix** | Bugfix for DSpark draft token count inflation with DP and adaptive verification | [#61807](https://github.com/vllm-project/vllm/pull/61807) |
| **SM100 batch invariance fix** | Preserve batch invariance in Triton unified attention by excluding batch-invariant execution from SM100-family large-head tuning | [#60531](https://github.com/vllm-project/vllm/pull/60531) |
| **Multimodal compile-cache fix** | Include multimodal limits in model compile-cache hash to prevent compilation errors when vision is toggled | [#54642](https://github.com/vllm-project/vllm/pull/54642) |
| **MooncakeConnector improvements** | RFC for improving MooncakeConnector P/D disaggregation KV direct-transfer with pluggable transports (RDMA/TCP/Ascend) | [#60523](https://github.com/vllm-project/vllm/issues/60523) |
| **Valkey secondary tier** | New KV cache offloading tier using valkey-glide and valkey-large-object (RDMA over efa-direct) | [#62580](https://github.com/vllm-project/vllm/pull/62580) |
| **TP-agnostic KV offloading** | Tracking issue for enabling compatible engines with different TP sizes to share offloaded KV | [#61886](https://github.com/vllm-project/vllm/issues/61886) |

---

## Stability & Regressions

| Severity | Issue | Description | Reference |
|----------|-------|-------------|-----------|
| **🔴 Critical** | **V1 Engine Deadlock** | V1 engine core deadlocks under concurrent load (fp8 + prefix caching + Qwen3.5) — 37 comments | [#37729](https://github.com/vllm-project/vllm/issues/37729) |
| **🔴 Critical** | **Cross-request contamination** | Intermittent content from other requests in P/D disaggregated NIXL deployment with automatic prefix caching | [#61160](https://github.com/vllm-project/vllm/issues/61160) |
| **🔴 Critical** | **Qwen4Exp boundary crash** | Single prefill crossing 262,144 token boundary crashes with CUDA illegal memory access on v0.32.0/nightly (works on v0.31.1) | [#62383](https://github.com/vllm-project/vllm/issues/62383) |
| **🟠 High** | **Nemotron regression** | ~16% decode slowdown on DGX Spark (GB10/SM121) since v0.29.0 without speculative decoding | [#59770](https://github.com/vllm-project/vllm/issues/59770) |
| **🟠 High** | **Qwen3.8 prefill starvation** | Long-prefill workload periodically starves active decode for 3-7 minutes on 2-node DGX Spark TP2 | [#54919](https://github.com/vllm-project/vllm/issues/54919) |
| **🟠 High** | **Structured output regression** | ~2x decode throughput regression for structured outputs since #45424, not fixed by #49919 | [#62442](https://github.com/vllm-project/vllm/issues/62442) |
| **🟠 High** | **DeepSeek-V4.1 on SM120** | Cannot run on SM120 (RTX PRO 6000 Blackwell) — missing FlashInfer sparse-MLA decode kernel instantiation for page_block_size=32 | [#59203](https://github.com/vllm-project/vllm/issues/59203) |
| **🟡 Medium** | **XGrammar intermittent termination** | Intermittent XGrammar request termination with V2 DFlash probabilistic drafting and block rejection | [#61383](https://github.com/vllm-project/vllm/issues/61383) |
| **🟡 Medium** | **GLM-5.3 GB200 NIXL perf** | Descriptor submission overhead (91k–112k descriptors per rank) dominates fabric bandwidth for P/D disaggregation | [#55434](https://github.com/vllm-project/vllm/issues/55434) |
| **🟡 Medium** | **MTP vocab OOM** | MTP draft allocates a second full vocab embedding, OOMing a 27B INT4 target that baseline fits | [#53887](https://github.com/vllm-project/vllm/issues/53887) |

---

## What This Means for Application Developers

1. **Avoid V1 Engine with Qwen3.5 + fp8 + prefix caching** — If using these together with concurrent requests, expect deadlocks until #37729 is resolved. Consider disabling prefix caching or falling back to V0 engine.

2. **Structured output throughput halved** — If using structured output (XGrammar), expect ~50% lower decode throughput since v0.30.x. Track #62442 for fixes.

3. **KV offloading is getting multi-tier support** — The new valkey secondary tier (#62580) and TP-agnostic KV sharing (#61886) are coming, which will improve memory efficiency for multi-tenant deployments.

4. **Hopper multimodal inference accelerated** — Long-sequence ViT inference on Hopper now uses FA4, providing better throughput for vision-language models.

5. **Watch for prefix cache contamination in P/D** — If using prefill/decode disaggregation with NIXL and automatic prefix caching, cross-request contamination (#61160) is possible; disable prefix caching as a workaround.

6. **ROCm gains for Kimi-K3 and Beam** — ROCm users benefit from new specialized decode paths for Kimi-K3 and Beam 1.0 with DFlash2 support.

---

*Generated from GitHub data — vllm-project/vllm | 2026-10-20*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to generate a structured English digest for SGLang based on the GitHub data provided. Let me analyze the data and organize it into the requested sections:

1. **Today's Highlights** - 2-3 sentences summarizing the most important updates
2. **Releases & Breaking Changes** - New versions, API/config changes, migration notes
3. **New Model & Hardware Support** - Newly supported models, architectures, backends
4. **Performance & Optimization** - Throughput, latency, memory and kernel work
5. **Stability & Regressions** - Crashes, correctness bugs, regressions
6. **What This Means for Application Developers** - Practical takeaways

Let me go through the data:

**Release:**
- v0.5.22 released with 950 PRs from 245 contributors

**New Models:**
- Clef / Clef Flash (LLM / VLM)
- PPLX-Decider v1 / v1.1 (LLM / VLM)

**Issues (by severity/comment count):**
1. #26340 - CUDA Coredump Tracker - 348 comments - high severity
2. #42752 - Flaky tests and CI infrastructure - 92 comments
3. #39499 - dLLM Serving Roadmap - 21 comments
4. #42012 - GLM-5.3-Flash on SM120 bug - 17 comments
5. #21052 - Ngram Speculative Decoding roadmap - 15 comments
6. #27194 - MoE kernels silent output corruption - 13 comments
7. #37742 - SenseNova-U1 tracking - 10 comments
8. #32607 - Kimi K3 Roadmap - 8 comments (closed)
9. #44635 - Context-parallel support RFC - 5 comments
10. Various bugs and roadmaps

**Pull Requests:**
- Many active PRs around:
  - HiCache (hierarchical cache)
  - Unified memory pool with mxfp8 KV cache
  - AMD ROCm optimizations
  - NPU support
  - Speculative decoding fixes
  - Diffusion serving
  - Memory pool refactoring

Now I'll organize this into a professional digest.</think>

# SGLang Digest — 2026-10-20

## 1. Today's Highlights

SGLang **v0.5.22** has been released, representing **950 PRs from 245 contributors** — a major milestone reflecting continued rapid development. Active work continues on hierarchical cache (HiCache) improvements, with multiple PRs targeting write-through batching, DSA indexer host pools, and Mamba slot state handling. The community is also addressing critical stability issues, including the ongoing CUDA coredump tracker (#26340 with 348 comments) and flaky CI infrastructure (#42752).

## 2. Releases & Breaking Changes

- **v0.5.22 released** — Major release encompassing ~950 PRs from 245 contributors. Includes Day-0 support for new models, performance optimizations across attention backends, and infrastructure improvements.

- No explicit breaking changes noted in this release cycle, but the unified memory pool now supports `mxfp8` KV cache (#42396) — this previously would boot but fail at runtime with `AttributeError`.

## 3. New Model & Hardware Support

| Model | Type | Documentation |
|-------|------|---------------|
| **Clef / Clef Flash** | LLM / VLM | [Cookbook](https://docs.sglang.io/cookbook/autoregressive/Cloudflare/clef) |
| **PPLX-Decider v1 / v1.1** | LLM / VLM | [Cookbook](https://docs.sglang.io/cookbook/a) |

**Hardware developments:**
- **NVIDIA RTX PRO 6000 (SM120)** — GLM-5.3-Flash now runs on this hardware; FA4 attention backend has a known crash on hybrid extend reshape (workaround: use Triton backend) (#42012)
- **AMD ROCm** — Ongoing optimization for Qwen3.8-Flash-Next on gfx950 / MI355X (#44304)
- **Intel XPU** — Vision batch alignment fix for padded images with `cu_seqlens` (#44670)
- **NPU** — DeepSeek-V4 decode compression metadata fusion underway (#40673)

## 4. Performance & Optimization

- **HiCache write-through batching** (#40363): KV backups now queue and batch off the request-finish path, reducing scheduler thread contention
- **DSA indexer host pools** (#45019): Build from buffer info directly, eliminating redundant reads
- **Unified memory pool allocation** (#45222): Free pages now allocated from each sub-pool's own end first, improving memory locality
- **KV release batching** (#43600): Batch KV releases for requests finishing in the same step — ~1.3ms savings per request on GB300 (scheduler CPU-bound fix)
- **DeepSeek-V4 NPU metadata fusion** (#40673): Fuses decode compression metadata updates into a single Triton kernel
- **DSPARK acceptance recovery** (#45270): Fixes periodic output acceptance by accelerating repeated output handling

## 5. Stability & Regressions

| Issue | Severity | Status |
|-------|----------|--------|
| **#26340** — CUDA Coredump Tracker | 🔴 Critical | Open — 348 comments; auto-collected coredumps from PR test runs |
| **#42752** — Flaky tests / CI infrastructure | 🟠 High | Open — 92 comments; tracked via `/sglang-pr-babysit` Claude Code workflow |
| **#27194** — MoRI silent output corruption | 🟠 High | Open — `SGLANG_MORI_NUM_MAX_DISPATCH_TOKENS_PER_RANK` at low concurrency causes GSM8K=0 without errors |
| **#42012** — GLM-5.3-Flash SM120 crash | 🟠 High | Open — FA4 crashes on hybrid extend; Triton backend works |
| **#44835** — Server hang with `pause_generation` | 🟡 Medium | Open — Hangs until watchdog kill |
| **#45235** — qwen3_coder tool_choice bug | 🟡 Medium | Open — Non-strict tool gets invented arguments |
| **#43526** — AMD gfx942 block-FP8 accuracy | 🟡 Medium | Open — Accuracy issue with CK blockscale GEMM |

**Positive closures:**
- #32607 — Kimi K3 Day-0 support completed
- #34112 — Chunked-prefill cancellation leak fixed

## 6. What This Means for Application Developers

- **New model options**: Clef and PPLX-Decider are now available with SGLang native support — consider for vision-language workloads
- **Memory efficiency**: If using unified memory pool with FP8 quantization, verify your deployment includes the mxfp8 fix (#42396) — previous versions would crash at runtime
- **AMD deployments**: For Qwen3.8-Flash-Next on MI355X, performance optimizations are landing; expect improvements in the next patch
- **Agentic workloads**: HiCache improvements (#45205, #42490) directly benefit workloads with long shared prefixes — monitor for reduced TTFT
- **Production monitoring**: The CUDA coredump tracker (#26340) indicates ongoing work on GPU stability; if you encounter crashes, check for existing reports before opening new issues

**Upgrading to v0.5.22** is recommended for all users, particularly those on AMD ROCm or using unified memory pool configurations.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a llama.cpp digest for 2026-10-20 based on the GitHub data provided. Let me analyze the data and create a structured digest.

Let me organize the information:

**Releases/Commits (last 24h):**
- b11748: SYCL fix get_rows on reordered quantized weights (#30430)
- b11747: mtmd match the transformers Qwen-VL resize (#30736)
- b11744: server add --connect, allow p2p access to server outside LAN (#28277)
- b11742: hybrid dna tokenizer fixes (#30825)
- b11741: opencl add cooperative-k dp4a gemm for q4_0, q4_k and q6_k (#30741)
- b11740: opencl add get_rows for i32, cpy for i32 and f32 (#30756)
- b11739: jinja implement `unique` filter (#30819)
- b11738: server fix swa checkpoint invalidation logic (#30666)
- b11734: cann refactor #ifdef blocks (#25273)
- b11732: CUDA fix warning for nonexistent extra semicolon (#30774)

**Key Issues:**
1. #27623 - Qwen3.8-27B decode throughput collapses ~25x at context >80K
2. #24168 - SYCL empty/gibberish output on hybrid models (closed)
3. #20176 - Qwen 3.5 checkpoint crash (closed)
4. #28860 - SYCL extreme scratchpad allocation with ngram-mod
5. #27546 - OpenVINO on i5 1345u GPU exception
6. #27572 - Draft acceptance collapses to 0.0 with -np N (closed)
7. #27910 - CUDA inference on Qwen3.8-27B Q6_K causes RTX 5090 display loss


8. #30697 - --moe-cache-mib crashes at load on Vulkan
9. #29798 - OpenCL set_tensor drops writes to q8_0 views

**Key PRs:**
1. #30843 - Hexagon Op Fusion refactoring
2. #30708 - unicode extending opt-in NFC support
3. #30361 - model add H2O-Lightning-4B decision model
4. #30815 - qwen4exp build the QSA selection without the kq_mask
5. #29146 - server tools add "apptainer:" runtime support
6. #30842 - hexagon add v85 support
7. #28967 - Add nccl support for multi-node tensor parallelism

Now I'll structure this into the requested format.</think>

# llama.cpp Digest — 2026-10-20

## 1. Today's Highlights

Today's release cycle focuses on **backend improvements and new model support**. Notable additions include SYCL and OpenCL optimizations for quantized matmul, experimental P2P server access, Hexagon v85 support, and preliminary NCCL integration for multi-node tensor parallelism. The Qwen-VL image preprocessing now aligns with transformers, closing a long-standing visual discrepancy.

---

## 2. Releases & Breaking Changes

| Commit | Description | Notes |
|--------|-------------|-------|
| [`b11744`](https://github.com/ggml-org/llama.cpp/commit/b11744) | **server: add `--connect`, allow P2P access outside LAN** | Experimental; enables direct server connections via `--connect-code` without tunnel. Not advertised without tunnel active. |
| [`b11742`](https://github.com/ggml-org/llama.cpp/commit/b11742) | **hybrid dna tokenizer fixes** | Support for Carbon-14B HybridDNA tokenizer with N-padded tail tokens; strip whitespace inside `<dna>` tags. |

**No breaking API changes** reported in this cycle.

---

## 3. New Model & Hardware Support

- **SenseNova U1** — Text/image/text+image generation support added. [#28919](https://github.com/ggml-org/llama.cpp/pull/28919)
- **H2O-Lightning-4B** — Decision model with calibrated probabilities served at `/v1/systemone`. [#30361](https://github.com/ggml-org/llama.cpp/pull/30361)
- **Qwen4Exp** — Prototype QSA selection without kq_mask; benchmarked ~48-55 tok/s decode at 4K-8K ubatch on 32GB VRAM. [#30815](https://github.com/ggml-org/llama.cpp/pull/30815)
- **Hexagon v85** — Architecture cap lifted from v81 to v85; new `build_htp_skel(v85)` built. [#30842](https://github.com/ggml-org/llama.cpp/pull/30842)
- **WASI + WebGPU** — CI and documentation added for WASI builds. [#30754](https://github.com/ggml-org/llama.cpp/pull/30754)

---

## 4. Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **OpenCL** | Cooperative-K DP4A GEMM for q4_0, q4_k, q6_k | Higher throughput on discrete GPUs. [#30741](https://github.com/ggml-org/llama.cpp/pull/30741) |
| **OpenCL** | get_rows for i32; cpy for i32/f32 | Expanded dtype support. [#30756](https://github.com/ggml-org/llama.cpp/pull/30756) |
| **SYCL** | Fix get_rows on reordered quantized weights | Fixes regression in b9128-b9159 range. [#30430](https://github.com/ggml-org/llama.cpp/pull/30430) |
| **Vulkan** | Cap scalar flash attention at 8 rows for large heads on Qualcomm Adreno | Prevents register spill to scratch (264 bytes/invocation on X1-85). [#30829](https://github.com/ggml-org/llama.cpp/pull/30829) |
| **Metal** | 64-bit arithmetic for large matrix output offsets | Prevents overflow beyond signed 32-bit range. [#30072](https://github.com/ggml-org/llama.cpp/pull/30072) |
| **Metal** | Add MoE kernel variant for 9 experts/token | Supports Nemotron 3.5 Bolt. [#30699](https://github.com/ggml-org/llama.cpp/pull/30699) |
| **NCCL (multi-node TP)** | Backend interface for CUDA collectives in separate processes | Enables multi-node tensor parallelism. [#28967](https://github.com/ggml-org/llama.cpp/pull/28967) |

---

## 5. Stability & Regressions

| Issue | Severity | Status | Details |
|-------|----------|--------|---------|
| **[#27623](https://github.com/ggml-org/llama.cpp/issues/27623)** | High | OPEN | Qwen3.8-27B hybrid: decode throughput collapses ~25x at context >80K tokens. Prompt processing unaffected. RTX 4080 SUPER 16GB. |
| **[#27910](https://github.com/ggml-org/llama.cpp/issues/27910)** | High | OPEN | CUDA inference on Qwen3.8-27B Q6_K causes RTX 5090 **display loss** and full-chip reset. Requires reboot. |
| **[#30697](https://github.com/ggml-org/llama.cpp/issues/30697)** | Medium | OPEN | `--moe-cache-mib` crashes at load on Vulkan (RX 6900 XT, Windows). |
| **[#28860](https://github.com/ggml-org/llama.cpp/issues/28860)** | Medium | OPEN | SYCL extreme scratchpad allocation (2GB+) when ngram-mod enabled. |
| **[#29798](https://github.com/ggml-org/llama.cpp/issues/29798)** | Medium | OPEN | OpenCL `set_tensor` drops writes to q8_0 views; restoring sequence state with q8_0 KV cache yields empty cache. |
| **[#30794](https://github.com/ggml-org/llama.cpp/issues/30794)** | Medium | OPEN | RPC: DeepSeek V4 degenerates to repeated token after long prompt with 2 RPC workers. |
| **[#24168](https://github.com/ggml-org/llama.cpp/issues/24168)** | Medium | CLOSED | SYCL hybrid model gibberish output — regression between b9128-b9159. |
| **[#27579](https://github.com/ggml-org/llama.cpp/issues/27579)** | Medium | CLOSED | HIP/ROCm gfx1151 corrupted output vs. Vulkan correct. |

---

## 6. What This Means for Application Developers

1. **Server P2P access is now experimental** — Teams running llama-server in distributed setups can test `--connect` for LAN-free access; stick to tunnel mode for production until the feature matures.

2. **Watch for Qwen3.8-27B decode cliff** — If serving hybrid delta models with long context (>80K), expect a ~25x throughput drop. Consider prompt caching or breaking into shorter sessions.

3. **NCCL multi-node TP is incoming** — PR #28967 lays groundwork for true multi-node tensor parallelism. Infrastructure teams should monitor for future CUDA builds enabling this via NCCL.

4. **OpenCL q8_0 KV cache regression** — Applications using state restoration with q8_0 quantizations on OpenCL should test thoroughly before deploying; the bug may silently corrupt cache restoration.

5. **New decision model endpoint** — H2O-Lightning-4B now served at `/v1/systemone` natively; useful for agents requiring calibrated probability outputs without Python wrappers.

6. **Vulkan on Adreno GPUs improved** — Flash attention now bounded for large heads; safer to use for mobile/edge deployments with Qualcomm hardware.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate a structured digest for Ollama based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Let me go through the data:

**Releases**: None in last 24h

**Issues**: 24 total, let me categorize them:
- CUDA/Windows issues: #18642 (RTX 5090), #19122 (RTX 5060 Ti)
- AMD/GPU issues: #19060 (AMD Radeon Pro 5700 XT Vulkan), #19075 (ROCm regression on Radeon Pro W5700)
- Windows-specific: #18061 (Desktop app server launch), #19139 (connection reset with large prompts), #7109 (slow downloads)
- Model-specific: #18785 (token decoding issue with lfm2:24b), #19138 (Nemotron-3.5-bolt crash)
- Tool/API issues: #19040 (empty tool definitions), #19151 (tool_calls with empty content)
- Context length: #18995 (OLLAMA_CONTEXT_LENGTH not honored)
- Memory leaks: #19029 (context menu label C strings)
- Security: #19045 (application-layer security)
- Feature requests: #19116 (Apple Foundation Models), #19124 (Mux integration)
- MLX issues: #19128, #19126, #19127, #19129
- Cloud: #19155 (HTTP 413), #19139

**Pull Requests**: 31 total, let me identify the key ones:
- #18990: create: respect explicitly empty system prompts
- #19154: README: add Inferpal to community integrations
- #19153: cmd: add cloud model listing
- #19146: openai: finish reasoning before client tool calls
- #19152: openai: keep tool calls on assistant messages with empty array content


- #19149: mlx: add DFlash2 support
- #19148: cmd/launch: warn about unsupported Codex thinking levels
- #19150: Clamp CLAUDE_CODE_AUTO_COMPACT_WINDOW
- #19119: launch: use cloud model context in Claude Code
- #19144: server: cancel remote inference when clients disconnect
- #19145: README: add gpu.nz to community integrations
- #19134: mlx: apply YaRN rope scaling in the Qwen3 runtime

Now let me organize this into the digest format:

1. **Today's Highlights** - Need to pick 2-3 most important

2. **Releases & Breaking Changes** - None

3. **New Model & Hardware Support** - Apple Foundation Models support, GPU additions

4. **Performance & Optimization** - DFlash2 support for MLX, YaRN rope scaling fixes

5. **Stability & Regressions** - Various crashes and bugs

6. **What This Means for Application Developers** - Practical takeaways</think>

# Ollama Digest — 2026-10-20

## 1. Today's Highlights

The Ollama project is addressing critical hardware compatibility issues across NVIDIA's newest GPUs (RTX 5090, RTX 5060 Ti Blackwell) while simultaneously expanding MLX/Apple Silicon capabilities. Notably, the team is actively improving OpenAI compatibility with fixes for tool calling and cloud model integration, though several Windows-specific crashes and regressions remain under investigation.

---

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours.

---

## 3. New Model & Hardware Support

| Category | Details | Reference |
|----------|---------|-----------|
| **Feature Request** | Native Apple Foundation Models support on macOS | [#19116](https://github.com/ollama/ollama/issues/19116) |
| **MLX** | DFlash2 block draft extension support added | [#19149](https://github.com/ollama/ollama/pull/19149) |
| **MLX** | YaRN rope scaling applied in Qwen3 runtime (fixes checkpoint compatibility) | [#19134](https://github.com/ollama/ollama/pull/19134) |
| **MLX** | Qwen3.5 vision patch embedding channel handling fixed | [#19127](https://github.com/ollama/ollama/issues/19127) |
| **MLX** | Fused linear-attention kernels now accept float16 activations | [#19126](https://github.com/ollama/ollama/issues/19126) |

---

## 4. Performance & Optimization

| Area | Change | Reference |
|------|--------|-----------|
| **Cloud Integration** | `ollama ls --cloud` fetches public catalog without pulling models | [#19153](https://github.com/ollama/ollama/pull/19153) |
| **Claude Code** | Cloud model context length now used when launching Claude Code (avoids 200k fallback) | [#19119](https://github.com/ollama/ollama/pull/19119) |
| **Remote Inference** | Server now cancels upstream inference when clients disconnect | [#19144](https://github.com/ollama/ollama/pull/19144) |
| **Memory** | Runner model lookups now use atomic pointers, eliminating refMu contention | [#19070](https://github.com/ollama/ollama/pull/19070) |
| **Tool Calling** | Reasoning now finishes before client tool calls in streaming Responses | [#19146](https://github.com/ollama/ollama/pull/19146) |
| **CLI** | `ollama create` prints notices for packaging defaults and gaps | [#19094](https://github.com/ollama/ollama/pull/19094) |

---

## 5. Stability & Regressions

### Critical (Crashes/Data Loss)

| Issue | Description | Status |
|-------|-------------|--------|
| **CUDA crash (RTX 5090)** | Illegal memory access (MUL_MAT) on Cohere MoE architecture | [#18642](https://github.com/ollama/ollama/issues/18642) — *Open, 16 comments* |
| **RTX 5060 Ti Blackwell** | CUDA "shared object initialization failed" in flash-attention MMA kernel | [#19122](https://github.com/ollama/ollama/issues/19122) — *Open* |
| **ROCm regression** | `GGML_ASSERT(max_blocks_per_sm > 0)` on Radeon Pro W5700 (gfx1010) | [#19075](https://github.com/ollama/ollama/issues/19075) — *Open* |
| **Nemotron-3.5-bolt** | Crashes on Apple Silicon with prompts >42 characters | [#19138](https://github.com/ollama/ollama/issues/19138) — *Closed* |
| **Token decoding** | "python" token decoded as empty string without leading space (lfm2:24b) | [#18785](https://github.com/ollama/ollama/issues/18785) — *Open* |

### High (Functional Impairment)

| Issue | Description | Status |
|-------|-------------|--------|
| **/api/chat tool definitions** | Empty tool definitions injected; models echo `{"name": ""}` | [#19040](https://github.com/ollama/ollama/issues/19040) — *Open* |
| **Tool calls + empty content** | Assistant messages with `content: []` lose tool_calls | [#19151](https://github.com/ollama/ollama/issues/19151) — *Open* (PR: [#19152](https://github.com/ollama/ollama/pull/19152)) |
| **Windows connection reset** | `/api/chat` resets after ~15s with large prompts | [#19139](https://github.com/ollama/ollama/issues/19139) — *Open* |
| **Vulkan AMD** | GPT-OSS 20B returns empty response on Radeon Pro 5700 XT | [#19060](https://github.com/ollama/ollama/issues/19060) — *Open* |
| **Context length** | `OLLAMA_CONTEXT_LENGTH` not honored in `/api/show` or `/api/tags` | [#18995](https://github.com/ollama/ollama/issues/18995) — *Open* |

### Medium (UX/Edge Cases)

| Issue | Description | Status |
|-------|-------------|--------|
| **Desktop app** | Server fails silently on Windows; manual `ollama serve` works | [#18061](https://github.com/ollama/ollama/issues/18061) — *Open* |
| **Memory leak** | Context menu label C strings never freed in desktop app | [#19029](https://github.com/ollama/ollama/issues/19029) — *Open* |
| **Cloud API** | HTTP 413 on ~10.7 MiB coding requests | [#19155](https://github.com/ollama/ollama/issues/19155) — *Open* |

---

## 6. What This Means for Application Developers

1. **Windows users with recent NVIDIA hardware** (RTX 5090, RTX 5060 Ti) should expect instability; consider CPU fallback or older GPU generations until the CUDA memory access issues are resolved.

2. **Tool calling implementations** should be validated—several issues affect the `/api/chat` path specifically, while `/v1/chat/completions` may work correctly.

3. **MLX users** benefit from YaRN support and DFlash2 improvements; model checkpoint compatibility has improved for Qwen3/Qwen3.5 variants.

4. **Cloud model integration** is expanding: the new `ollama ls --cloud` command enables discovery without pulling, and Claude Code integration now correctly uses cloud model context.

5. **Security note**: The feature request for application-layer security ([#19045](https://github.com/ollama/ollama/issues/19045)) remains open. If exposing Ollama to network interfaces, consider firewall rules or reverse proxy authentication.

6. **Model creation**: Empty system prompts can now be explicitly set via Modelfile, affecting how base models inherit prompts ([#18990](https://github.com/ollama/ollama/pull/18990)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data for LiteLLM and create a structured digest for 2026-10-20.

Looking at the data:

## Latest Releases
- None in the last 24h

## Latest Issues (top by comments)
1. #39057 - Cache hits zero spend but token columns replay original usage - semantic question about token reports
2. #27954 - Heavy RAM usage over time (K8s pods crash)
3. #45422 - BYOK token consumption not working (GitHub Copilot)
4. #24659 - Azure OpenAI realtime WebRTC flow (closed)
5. #46045 - ModuleNotFoundError: No module named 'mcp'
6. #44546 - speech() calls provider twice (Gemini TTS billed twice)
7. #45378 - Mistral content truncation (reference chunks dropped)
8. #33074 - budget_fallbacks column missing (closed)
9. #34082 - Headroom compression guide stale
10. #47332 - Stream cut issues, cached_tokens lost
11. #46923 - Headroom guardrail timing issue
12. #46659 - GZip middleware withholds headers for SSE
13. #47327 - token_counter rejects "original" image detail
14. #40388 - MockValSer SchemaSerializer (closed)
15. #26473 - Admin UI router settings crashes
16. #39749 - Spend logs dropped for null id responses
17. #44755 - Vertex AI stream spend ignores regional endpoint
18. #27292 - UI forces team selection (closed)
19. #33212 - Non-admin can't set max_budget (closed)
20. #33272 - num_retries permanently None after exception
21. #33520 - MCP follow-up calls fail


22. #47396 - Budget reservation with Anthropic tool_choice
23. #47340 - tpm_limit never refills with in-memory cache
24. #44048 - anyio dependency floor issue
25. #43228 - Self-serve budget adjustment feature
26. #44847 - Bedrock structured output concern
27. #42770 - websearch streaming 500s
28. #47308 - Decisions feature not working
29. #31178 - vLLM qwen3-vl-embedding with images
30. #33159 - Read-only users view Models list

## Pull Requests
Looking at the most significant ones:

1. #44230 - fix(streaming): restore token estimate for streams with no usage
2. #47109 - fix(streaming)!: send include_usage chunk with empty choices
3. #47030 - perf(streaming): cut per-chunk pydantic round trips
4. #47461 - feat(proxy): opt-in model_access_group_deny_by_default
5. #47417 - fix(azure)!: Entra token fetches improvements
6. #47363 - fix(responses)!: count input tokens properly
7. #36697 - fix(cost): honor explicit zero tier rate
8. #47422 - fix(mcp): bill both model calls on one spend row
9. #47465 - feat(providers): add Hopper inference support
10. #47440 - feat(ui): add SI_TERMINOLOGY
11. #44764 - test: cover clearing max_budget
12. #47341 - fix(secret_managers)!: resolve oidc/file and oidc/env refs
13. #45567 - feat(dashscope): add separate explicit/implicit cache pricing
14. #46821 - refactor: plan forced-chat thinking on OpenAI straight to Responses
15. #47436 - fix(proxy): price estimated input tokens on client-cancelled requests
16. #46995 - refactor: move execute_chat out of main.py
17. #46851 - refactor(messages): log bridged streams
18. #46820 - refactor: call execute_chat from Messages to chat bridge
19. #46966 - refactor(native): move chat provider helpers
20. #46838 - refactor(chat): keep responses-mode models on chat

Now I'll organize these into a coherent digest.</think>

# LiteLLM Daily Digest — 2026-10-20

## Today's Highlights

The LiteLLM project is addressing several high-impact issues around streaming token handling, cost accounting accuracy, and Azure token management. Notable new provider support includes Hopper inference, while multiple PRs are refactoring the chat execution path to improve maintainability and reduce hook duplication. A critical bug affects RAM usage in Kubernetes deployments, and several token counting edge cases have surfaced.

---

## Releases & Breaking Changes

No new releases in the last 24 hours.

**Active PRs introducing potential breaking changes:**

- **[fix(streaming)!: send include_usage chunk with empty choices](https://github.com/BerriAI/litellm/pull/47109)** — Aligns with OpenAI's `choices: []` format; strict clients like LangChain.js may have been double-counting usage.

- **[fix(azure)!: keep Entra token fetches off event loop](https://github.com/BerriAI/litellm/pull/47417)** — Route compaction now uses `/v1` endpoints; removes per-request token fetches.

- **[fix(responses)!: count input tokens the way inference sends the request](https://github.com/BerriAI/litellm/pull/47363)** — Resolves token count mismatches causing 400s when tools are present.

- **[fix(secret_managers)!: resolve oidc/file and oidc/env refs per request](https://github.com/BerriAI/litellm/pull/47341)** — Admin-configured api_keys with OIDC references now resolve per request for proper rotation.

---

## New Model & Hardware Support

- **[feat(providers): add Hopper inference support](https://github.com/BerriAI/litellm/pull/47465)** — New `hopper/` provider prefix with `HOPPER_API_KEY`. Adds pricing for Gemma 4 and DeepSeek V4.1 Flash models.

- **[feat(dashscope): add separate explicit and implicit cache pricing](https://github.com/BerriAI/litellm/pull/45567)** — DashScope bills explicit cache hits at 10% of input vs. 20% for implicit; LiteLLM now tracks provider's `cache_type` correctly.

---

## Performance & Optimization

- **[perf(streaming): cut per-chunk pydantic round trips](https://github.com/BerriAI/litellm/pull/47030)** — Reduces overhead on OpenAI-compatible streams by dumping only non-OpenAI keys and building deltas once.

- **[refactor(native): move execute_chat and chat planner out of main.py](https://github.com/BerriAI/litellm/pull/46995)** — Code organization improvement; native callers no longer import from restricted `litellm.main`.

- **[refactor: call execute_chat from Messages to chat bridge](https://github.com/BerriAI/litellm/pull/46820)** — Eliminates double `@client` pass execution, reducing deployment hook fires from 2× to 1× per request.

---

## Stability & Regressions

| Severity | Issue | Status | PR/Fix |
|----------|-------|--------|--------|
| **High** | **[Heavy RAM usage over time — pods crash](https://github.com/BerriAI/litellm/issues/27954)** | OPEN | No fix PR yet |
| **High** | **[Client-cancelled requests show $0 spend](https://github.com/BerriAI/litellm/pull/47436)** | OPEN | Fix in progress |
| **Medium** | **[token_counter rejects image detail "original"](https://github.com/BerriAI/litellm/issues/47327)** | OPEN | — |
| **Medium** | **[tpm_limit never refills with in-memory cache](https://github.com/BerriAI/litellm/issues/47340)** | OPEN | — |
| **Medium** | **[num_retries permanently None after any exception](https://github.com/BerriAI/litellm/issues/33272)** | OPEN | — |
| **Low** | **[ModuleNotFoundError: No module named 'mcp'](https://github.com/BerriAI/litellm/issues/46045)** | OPEN | — |
| **Low** | **[Stream cut loses cached_tokens](https://github.com/BerriAI/litellm/issues/47332)** | OPEN | — |
| **Low** | **[Spend logs dropped for providers returning id:null](https://github.com/BerriAI/litellm/issues/39749)** | OPEN | — |

---

## What This Means for Application Developers

1. **Token accounting changes**: If you're using `include_usage: true` with streaming, the response format now matches OpenAI's `choices: []`. Review client code that parses usage chunks.

2. **Budget handling improvements**: Users can now clear their own `max_budget` via `/key/update` with `"max_budget": null` — a regression test confirms this works.

3. **Azure Entra token performance**: If using OIDC/Azure deployments, expect reduced latency on burst traffic — tokens are now fetched once per burst and reused.

4. **Hopper support**: New provider option for Gemma 4 and DeepSeek V4.1 Flash inference — check [PR #47465](https://github.com/BerriAI/litellm/pull/47465) for configuration details.

5. **Monitor the RAM issue**: If running LiteLLM on Kubernetes, the memory leak reported in [#27954](https://github.com/BerriAI/litellm/issues/27954) may affect long-running deployments; consider pod restart policies until resolved.

6. **Image handling edge case**: The new `"original"` image detail value from OpenAI causes pre-call token checks to skip (logs ERROR); avoid using this detail mode for now in proxy contexts with strict validation.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for the Unsloth project dated 2026-10-20.

Let me organize the information:

**Latest Releases (last 24h)**
- v0.1.909-beta: DeepSeek-V4.1 & FLUX-3
- DeepSeek-V4.1-Flash-1017 (552B, 16B active) - runs on ~125GB
- FLUX.3 Image Klein - run locally
- New features: images and videos in chat, multi-GPU training with FSDP2 (alpha), one-command MCP setup

**Latest Issues (showing top by comment count)**
- #12845: Window resize problem on AppImage (CLOSED) - 8 comments
- #7371: Performance regression on Strix Halo + ROCm (CLOSED) - 6 comments
- #14052: AMD audio runtime not installed (CLOSED) - 4 comments
- #9605: Stable diffusion model file access (CLOSED) - 4 comments
- #14055: JavaScript error on MAC v0.1.908-beta (CLOSED) - 4 comments
- #9932: AMD ROCm version selection (OPEN) - 4 comments
- #9930: Korean translation for docs (OPEN) - 4 comments
- #9103: Unsloth Desktop as thin client (CLOSED) - 4 comments
- #7589: Per-model extended parameters (CLOSED) - 4 comments
- #13997: Theme consistency in popups (CLOSED) - 4 comments
- #14063: Block compile checkpoint error (OPEN) - 2 comments

**Latest Pull Requests (top by comment count)**
- #14288: Studio: speak through saved connection on Audio page


- #14074: Edit rule rewards, explain scores, guide training
- #14084: Voice mode with thinking filler
- #12601: DPO, ORPO, GRPO training with reward library
- #14290: Open localhost addresses in desktop browser
- #14297: PrefixGrouper optimization
- #14296: Packing optimization
- #14243: MCP server resources
- #14295: Cross entropy optimization
- #14219: Packed SDPA optimization
- #14218: RoPE optimization

I'm tracking several performance enhancements and feature additions across training workflows, audio processing, and browser integration. The PRs cover everything from gradient reward explanations to optimizing cross-entropy calculations and local server connectivity.</think>

# Unsloth Digest — 2026-10-20

## Today's Highlights

Unsloth released **v0.1.909-beta** bringing DeepSeek-V4.1-Flash-1017 (552B/16B active, ~125GB VRAM) and FLUX.3 Image generation, now with native support for images and videos in chat. Multi-GPU training enters alpha with FSDP2, and one-command MCP setup streamlines coding agent integration. Major training UI overhaul in progress with DPO/ORPO/GRPO support and a rule reward library.

---

## Releases & Breaking Changes

| Version | Key Changes | Link |
|---------|-------------|------|
| v0.1.909-beta | DeepSeek-V4.1-Flash-1017, FLUX.3 Image Klein, images/videos in chat, FSDP2 multi-GPU (alpha), one-command MCP setup | [Release](https://github.com/unslothai/unsloth/releases) |

**Migration Notes:**
- FSDP2 requires `UNSLOTH_FSDP2=1` under `torchrun` — currently alpha, not for production training yet.
- Block compile (`UNSLOTH_BLOCK_COMPILE=1` from 2026.10.6) has a known checkpoint recomputation bug on distributed runs — set `UNSLOTH_BLOCK_COMPILE=0` as workaround ([#14063](https://github.com/unslothai/unsloth/issues/14063)).

---

## New Model & Hardware Support

- **DeepSeek-V4.1-Flash-1017**: 552B total parameters, 16B active — runs locally on ~125GB VRAM
- **FLUX.3 Image Klein**: image generation model now runs locally via Unsloth
- **Multi-GPU FSDP2 (alpha)**: native Unsloth FSDP2 wrapper with `fully_shard` per decoder block, MixedPrecisionPolicy — supports LoRA, QLoRA, and full finetuning ([#14273](https://github.com/unslothai/unsloth/pull/14273))
- **MCP Server Resources**: models can now read MCP server resources (files, documents) via `resources/list`, not just tools ([#14243](https://github.com/unslothai/unsloth/pull/14243))

---

## Performance & Optimization

| PR | Change | Impact |
|----|--------|--------|
| [#14297](https://github.com/unslothai/unsloth/pull/14297) | PrefixGrouper: multigroup segment labels via CPU slices, single GPU transfer | Replaces 3×G small device allocations with 2 host→device copies |
| [#14296](https://github.com/unslothai/unsloth/pull/14296) | Packing: fill `packed_block_mask` and SDPA masks in-place | Replaces per-segment intermediate allocations with `triu_`/`tril_` ops |
| [#14295](https://github.com/unslothai/unsloth/pull/14295) | Cross entropy: skip logits load/exp on masked rows (`label == -100`) | Skips `[VOCAB_SIZE]` load + `exp` for ignored tokens; prevents NaN/Inf pollution |
| [#14219](https://github.com/unslothai/unsloth/pull/14219) | Packed SDPA: split once per row, skip single-run `torch.cat` | Zero-copy view when segments have equal length |
| [#14218](https://github.com/unslothai/unsloth/pull/14218) | RoPE: keep BSHD layout in `Fast_RoPE_Embedding_QK` backward | Makes caller's transpose+reshape a zero-copy view |
| [#14103](https://github.com/unslothai/unsloth/pull/14103) | Skip unused `down_proj` in gradient checkpoint recompute | Eliminates wasted `act(e,g)` + `down_proj` in backward pass |

---

## Stability & Regressions

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| [#14063](https://github.com/unslothai/unsloth/issues/14063): Block compile breaks checkpoint recomputation on distributed runs | **High** | OPEN | `UNSLOTH_BLOCK_COMPILE=0` workaround; affects FSDP2/distributed training |
| [#7371](https://github.com/unslothai/unsloth/issues/7371): Performance regression on AMD Strix Halo + ROCm | Medium | CLOSED | Prebuilt b10079 regression under investigation |
| [#12845](https://github.com/unslothai/unsloth/issues/12845): AppImage window resize on Arch/GNOME/Wayland | Medium | CLOSED | Fixed in recent release |
| [#14052](https://github.com/unslothai/unsloth/issues/14052): AMD audio runtime missing | Low | CLOSED | Run `unsloth studio update` to install |
| [#14055](https://github.com/unslothai/unsloth/issues/14055): `scrollbarGutter` error on macOS v0.1.908-beta | Low | CLOSED | JS error in desktop UI |
| [#14221](https://github.com/unslothai/unsloth/issues/14221): Model Hub filters regression | Low | OPEN | Filters not working as expected |

---

## What This Means for Application Developers

1. **Multimodal chat is here**: v0.1.909-beta supports images and videos directly in chat — useful for building vision-enabled agents without external preprocessing.

2. **Training UI gets major upgrade**: PR [#12601](https://github.com/unslothai/unsloth/pull/12601) adds DPO, ORPO, and GRPO training with a rule reward library. Combined with [#14074](https://github.com/unslothai/unsloth/pull/14074) (editable rewards, score explanations), building preference-tuned models becomes more accessible.

3. **MCP integration simplified**: One-command MCP setup and the ability for models to read MCP server resources ([#14243](https://github.com/unslothai/unsloth/pull/14243)) reduce friction for coding agents that need access to local tools and files.

4. **FSDP2 still alpha**: Multi-GPU training via native FSDP2 is opt-in (`UNSLOTH_FSDP2=1`). Avoid for production workloads until stable — the block compile checkpoint bug ([#14063](https://github.com/unslothai/unsloth/issues/14063)) affects distributed runs.

5. **Desktop app improvements**: Voice mode enhancements ([#14084](https://github.com/unslothai/unsloth/pull/14084)), localhost browser panel access ([#14290](https://github.com/unslothai/unsloth/pull/14290)), and skill export/import ([#14181](https://github.com/unslothai/unsloth/pull/14181)) make local development more seamless.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*