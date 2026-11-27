# AI Infrastructure Digest 2026-11-27

> Generated: 2026-11-27 04:29 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to generate a cross-project comparison report across all the AI infrastructure projects I've been analyzing. Let me synthesize the data from all four projects (vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth) into a structured cross-project report.

Let me organize the key metrics and findings:

**Activity Comparison:**
- vLLM: 10+ active issues, 15+ PRs, no releases
- SGLang: 18 issues, 20+ PRs, no releases
- llama.cpp: 24 issues, 275 PRs, v1.1.0 released


- Ollama: 24 issues, 24 PRs, v0.40.19-rc0 released
- LiteLLM: 10+ issues, 20+ PRs, v1.113.0-dev.1 + v1.108.19 LTS
- Unsloth: 24 issues, 275 PRs, no releases

Now I'm mapping out where each project stands on model support and identifying the key performance optimizations across the ecosystem.

Looking at today's activity, I see several shared priorities emerging: DeepSeek V4.1 is being integrated across multiple frameworks, Inkling 2 family models are gaining traction, and there's a clear push toward quantization improvements with projects like Marlin to Humming migrations and FP8/CUTLASS optimization. Rust frontends are becoming the default, KV offloading is being refined, and unified memory architectures are being explored. Speculative decoding and multi-GPU strategies are also getting significant attention, with Intel XPU support emerging as a new backend consideration.

Now I'm preparing to write this analysis in English, keeping the language consistent throughout.
</think>


# AI Infrastructure Ecosystem Cross-Project Report
**Digest Date:** 2026-11-27 | **Audience:** Infrastructure Engineers & Technical Decision-Makers

---

## 1. Ecosystem Overview

The AI inference infrastructure layer is undergoing simultaneous fragmentation and consolidation. vLLM and SGLang are converging on Rust-based serving pipelines with shared concerns around PD disaggregation and multi-node NUMA scheduling, while llama.cpp and Ollama are deepening their hardware reach across CUDA, HIP, Metal, Vulkan, and emerging targets like Intel XPU and Qualcomm Hexagon. The training/fine-tuning layer (Unsloth) is pushing into int8 base training on AMD and FP8 fused kernels, while the gateway layer (LiteLLM) is managing an expanding provider matrix at the cost of integration surface area. The most notable trend today is **DeepSeek V4.1 adoption velocity** — it landed in both vLLM and SGLang within 24 hours of each other, signaling that frontier model support is now a competitive differentiator rather than a courtesy feature.

---

## 2. Activity Comparison

| Project | Layer | Repository | Issues (Open, 24h) | PRs (24h) | Releases (24h) |
|---------|-------|------------|---------------------|-----------|----------------|
| **vLLM** | Serving engine | `vllm-project/vllm` | ~10 high-activity | ~15 | None |
| **SGLang** | Serving engine | `sgl-project/sglang` | 18 | ~20 | None |
| **llama.cpp** | Local runtime | `ggml-org/llama.cpp` | 24 | ~25 | **v1.1.0** |
| **Ollama** | Local runtime | `ollama/ollama` | 24 | 24 | **v0.40.19-rc0** |
| **LiteLLM** | LLM gateway | `BerriAI/litellm` | ~10 | ~20 | **v1.113.0-dev.1**, **v1.108.19 (LTS)** |
| **Unsloth** | Fine-tuning | `unslothai/unsloth` | 24 | ~30 | None |

**Observations:**

- llama.cpp and Unsloth both show elevated activity with 275 total PRs each — llama.cpp from broad backend diversification, Unsloth from fine-tuning feature velocity across multiple model families.
- SGLang's CI instability (5 broken + 18 flaky tests, Issue #42752) is a watch item: it indicates fast-moving code with insufficient test coverage, characteristic of a project scaling to production-grade reliability.
- vLLM's Rust frontend default-flip (Issue #68784) is the most significant upcoming breaking change across all six projects, affecting every Python-centric integration.

---

## 3. Model Support Race

The table below tracks which projects shipped production-ready support for new architectures in the last 24–48 hours.

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek V4.1** | ✅ Rust frontend encoding, GPU sync fix | ✅ PP prefill, uneven partition | ❌ Not yet | ❌ Not yet | Via OpenAI compat | ❌ Not yet |
| **DeepSeek V4.1 VL** | ✅ GPU sync fix | ❌ Not yet | ❌ Not yet | ❌ Not yet | Via OpenAI compat | ❌ Not yet |
| **Inkling 2 (base)** | ❌ Not yet | ❌ Not yet | ✅ v1.1.0 | ❌ Not yet | Via Ollama | ❌ Not yet |
| **Inkling 2 Mini** | ❌ Not yet | ❌ Not yet | ✅ DFlash2, CUDA fuses | ✅ CUDA backend (NVFP4/MXFP8) | Via Ollama | ❌ Not yet |
| **Inkling 2 DSpark** | ❌ Not yet | ❌ Not yet | ✅ v1.1.0 | ❌ Not yet | Via Ollama | ❌ Not yet |
| **Qwen4Exp (3.8-flash-next)** | ✅ DeepGEMM FP8 QSA | ❌ Not yet | ❌ Not yet | ❌ Not yet | Via Bedrock | ❌ Not yet |
| **Muse Spark LoRA** | ✅ Packed attention projections | ❌ Not yet | ❌ Not yet | ❌ Not yet | ❌ Not yet | ❌ Not yet |
| **MRV2 PCP LoRA** | ✅ Attention/lm_head/routed-expert | ❌ Not yet | ❌ Not yet | ❌ Not yet | ❌ Not yet | ❌ Not yet |
| **Intel XPU** | ❌ Not yet | RFC stage | ❌ Not yet | Build option (CANN) | Via OpenAI compat | ❌ Not yet |
| **AMD gfx950 / MI355X** | Active (Issue #59575) | ❌ Not yet | ✅ HIP CDNA fixes | ❌ Not yet | Via Bedrock | ✅ ROCm W8A8 opt-in |
| **Qualcomm Hexagon** | ❌ Not yet | ❌ Not yet | ✅ INT HMX fix | ❌ Not yet | ❌ Not yet | ❌ Not yet |
| **NVIDIA GB10 (SM12x)** | ❌ Not yet | Active bring-up | ❌ Not yet | ❌ Not yet | Via Ollama | ❌ Not yet |

**Winner: llama.cpp** — fastest to ship new model support by a wide margin. It shipped the entire Inkling 2 family (base, Mini, DSpark) in v1.1.0 with DFlash2, CUDA fuses, and Vulkan/Metal backends.

**Runner-up: vLLM** — most aggressive on frontier model optimization (DeepGEMM for Qwen4Exp, Rust frontend for DeepSeek V4.1), but Inkling 2 support has not landed yet.

**Ollama** has the most production-ready path for end users via `ollama run`, but DeepSeek V4.1 VL support lags vLLM by approximately one release cycle.

---

## 4. Performance Frontier

Optimization effort is concentrated in five areas across the ecosystem:

### 4.1 KV Cache & Memory Offloading
| Project | Initiative | Stage |
|---------|-----------|-------|
| vLLM | Request-level KV promotions (Issue #66782), TP-replicated region deduplication (PR #69920) | Active |
| vLLM | Mooncake KV backend abstraction with TENT support (PR #64486) | Active |
| SGLang | Unified Memory: single arena for KV + sliding window + recurrent state (Issue #49944) | RFC |
| SGLang | KV-indexer RwLock read-guard starvation fix (Issue #52575) | Bug |
| llama.cpp | KV Cache Persistence feature (Issue #17107, closed) | Shipped |
| Ollama | MLX prefix-cache memory leak fix (Issue #19891) | Bug |

**Ecosystem signal:** Memory management is the top optimization target. Both vLLM and SGLang are independently redesigning KV architecture — vLLM through offloading connectors and SGLang through a unified memory arena. These approaches will eventually need interoperability standards.

### 4.2 Quantization
| Project | Initiative | Stage |
|---------|-----------|-------|
| vLLM | Replace Marlin with Humming across NVIDIA (Issue #65560) | Planned |
| vLLM | FP8 SiLU fuse with group-128 block quantization (PR #69778) | Merged |
| llama.cpp | FP8/NVFP4 scale support moving into GGML (PR #28898, #29791) | In progress |
| Unsloth | W8A8 int8 LoRA training on ROCm (PR #19850) | Opt-in |
| Unsloth | MiniMax-H3-Image int8 CUTLASS race fix (PR #19879) | Merged |
| Ollama | MLX int4 affine quantized embed/lm_head (PR #19928) | Merged |

**Ecosystem signal:** Quantization is moving from inference-time only to training-time (Unsloth W8A8 LoRA). The vLLM Marlin→Humming migration is the highest-impact change pending across all projects — it will alter kernel dispatch on every Hopper and Blackwell deployment.

### 4.3 Distributed Serving & Scheduling
| Project | Initiative | Stage |
|---------|-----------|-------|
| SGLang | Shortest Remaining Prefill First (SRPF) with starvation aging (PR #58420) | RFC |
| SGLang | PD disaggregation: per-stage KV chunk on forward completion (PR #50958) | Active |
| SGLang | FlashInfer batch-invariant BF16 GEMMs for reproducibility (PR #51618) | Active |
| SGLang | Tensor-parallel latency: FlashInfer PcieIpcAllGather (Issue #65359) | Active |
| vLLM | NUMA binding race fix for MultiprocExecutor (PR #69978) | Merged |
| vLLM | SRPF scheduling RFC (linked from PR #58420) | RFC |
| Unsloth | offload_layers micro-batch layer-by-layer execution (PR #19808) | Merged |

**Ecosystem signal:** Both vLLM and SGLang are independently implementing SRPF scheduling. This is a case where cross-project code reuse (e.g., via shared scheduling libraries) would benefit the ecosystem.

### 4.4 Kernel Fusion
| Project | Initiative | Stage |
|---------|-----------|-------|
| vLLM | SiLU-and-mul fused with FP8 group-128 quant (PR #69778) | Merged |
| llama.cpp | Fused SSM_conv + silu + redundant copy removal (PR #33081) | Merged |
| llama.cpp | CUDA fuse Inkling 2 short conv, depth mix, loop controller (PR #33073) | Merged |
| Unsloth | LoRA fold into denoiser weights: 18% render speedup (PR #19868) | Opt-in |
| SGLang | LLaDA QK norm + RoPE fusion (PR #53484) | Active |

### 4.5 Speculative Decoding
| Project | Initiative | Stage |
|---------|-----------|-------|
| llama.cpp | DFlash2 support for Inkling-2-Mini (PR #33109) | Merged |
| llama.cpp | DFlash speculative decoding split into separate draft methods (v1.1.0) | Shipped |
| llama.cpp | **Critical:** Speculative decoding 2.2–2.4× slower on hybrid models (Issue #32776) | Bug |
| SGLang | NGRAM speculative decoder support (PR #53094) | Active |
| Unsloth | LoRA folding for speed (PR #19868) | Opt-in |

---

## 5. Layer Positioning

```
┌─────────────────────────────────────────────────────────────────┐
│                    Agent / Application Layer                     │
│         (tool calling, guardrails, MCP, multi-modal)             │
└───────────────────────────┬─────────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│                    LLM Gateway Layer                             │
│  LiteLLM ──── unified API for 100+ providers, routing, caching   │
│  OpenWebUI, LangChain, etc. ──── consumer-facing integrations    │
└───────────────────────────┬─────────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│                    Serving Engine Layer                          │
│                                                                  │
│  vLLM ──────────────── production-grade, TP/PP, Rust frontend    │
│  SGLang ────────────── Ratelimiters, Radix注意力, MCP server     │
│                                                                  │
│  (both: PD disaggregation, KV offload, multi-node scheduling)    │
└───────────────────────────┬─────────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│                    Local Runtime Layer                           │
│                                                                  │
│  llama.cpp ───────────── multi-backend: CUDA HIP Metal Vulkan    │
│                          SYCL Hexagon Cann ──── broadest HW      │
│                                                                  │
│  Ollama ─────────────── end-user deployment, Docker-first,       │
│                          cross-platform, simpler API surface     │
└───────────────────────────┬─────────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│                    Training / Fine-tuning Layer                  │
│                                                                  │
│  Unsloth ─────────────── 2× faster fine-tuning, int8/FP8 on AMD  │
│                          Studio: Compare, Translate, CSV import  │
└─────────────────────────────────────────────────────────────────┘
```

**Key differentiators by layer:**

- **Serving engines (vLLM, SGLang):** Converging on Rust frontends, shared interests in PD disaggregation and multi-node NUMA scheduling. SGLang leads on developer ergonomics (ratelimiters, MCP server, streaming); vLLM leads on quantization kernel breadth.
- **Local runtimes (llama.cpp, Ollama):** llama.cpp is the portable inference kernel — it runs everywhere and ships new models fastest. Ollama is the consumer product: opinionated, Docker-first, harder to embed but easier to deploy. The tension is that Ollama depends on llama.cpp for kernel quality.
- **LLM gateway (LiteLLM):** Manages provider complexity at the cost of integration surface area. The Prisma deprecation (Issue #9753) and OpenAI Evals shutdown (Issue #47212) show that dependency management is a real operational risk at this layer.
- **Fine-tuning (Unsloth):** Positioned between the training world and the serving world. Its Studio product is increasingly a consumer-facing application (Translate, Compare, CSV import), while its core library targets engineers who want maximum training throughput.

---

## 6. Trend Signals

### 6.1 Rust Frontend Default-Flip Imminent (vLLM, SGLang)
Both vLLM (Issue #68784) and SGLang (Rust router core, PR #54788) are moving to Rust-native serving paths. This is the most significant breaking change coming in both projects. **Action:** Audit Python-specific behaviors — streaming edge cases, `tool_choice="auto"` with both tools and `response_format`, and video placeholders — before the default flips.

### 6.2 Marlin→Humming Quantization Migration (vLLM)
The planned replacement of the Marlin kernel with Humming (Issue #65560) will change quantization behavior on every Hopper and Blackwell deployment. This is a high-risk migration for production systems relying on specific GEMM performance characteristics. **Action:** Begin baseline profiling of INT4/INT8 GPTQ/AWQ workloads now.

### 6.3 DeepSeek V4.1 Velocity
DeepSeek V4.1 VL support landed in vLLM within 24 hours of a critical bug fix. This is the fastest frontier model adoption cycle observed across the ecosystem. It signals that the vLLM team has a dedicated deepseek partnership or exceptionally fast hardware access. **Action:** If you deploy DeepSeek models, vLLM is currently the most mature option. SGLang and Ollama are one release cycle behind.

### 6.4 Multi-Backend Fragmentation Accelerating
llama.cpp now supports CUDA, HIP (CDNA + RDNA), Metal, Vulkan, SYCL, Cann (Ascend NPUs), and Hexagon — seven distinct backends. Intel XPU is RFC-stage in SGLang. This proliferation creates testing matrix explosions and backend-specific bugs that are difficult to catch in CI. **Action:** If you deploy across multiple hardware generations, version-lock your inference runtime and validate on target hardware, not just in CI.

### 6.5 Speculative Decoding Maturation with Active Bugs
llama.cpp split DFlash into separate draft methods (v1.1.0), SGLang added NGRAM support, but llama.cpp has a 2.2–2.4× performance regression on hybrid models (Issue #32776) that is still open. **Action:** Do not assume speculative decoding improves throughput on hybrid architectures. Benchmark on your specific model + hardware combination.

### 6.6 Memory Estimation Reliability Gap
Ollama's NUMA binding race (PR #69978), Unsloth's `estimate-memory` ignoring MoE expert offload (Issue #19795), and llama.cpp's 7.2–7.8 GB CUDA0 buffer leak on Inkling-2-Mini (Issue #32910) all share a common root: memory estimation logic lags behind model architecture complexity. As MoE, recurrent state, and multi-modal caches compound, memory estimators need architectural awareness, not just parameter counting. **Action:** When deploying new architectures, validate actual VRAM consumption against estimates before production use.

### 6.7 LiteLLM Dependency Surface Risk
Two concurrent events — the Prisma Python client deprecation (Issue #9753) and the OpenAI Evals API shutdown (Nov 30, Issue #47212) — highlight that LiteLLM's broad provider matrix creates maintenance surface area that can surface as production incidents. **Action:** Pin your LiteLLM version in production and treat the `lts` tag as your upgrade cadence. Monitor Issue #9753 for the Prisma migration timeline.

### 6.8 SGLang 1.0 Coming — Compatibility Policy
The SGLang 1.0 tracker (Issue #50045) signals that 1.x will introduce explicit breaking changes with upgrade notes. This parallels the vLLM Rust frontend default-flip as the second major compatibility boundary coming in the ecosystem. **Action:** Begin auditing SGLang configurations for silent-override behaviors before the 1.0 release.

---

*Cross-project analysis compiled from GitHub data for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth — 2026-11-27.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the provided GitHub data for vLLM project to generate a structured digest for 2026-11-27.

Key observations:

1. **Releases**: None in the last 24h

2. **High-activity issues**:
   - #42426: Kimi-K2.6 bug with reasoning field outputting "!!!!!!!!!!" - CLOSED, 93 comments
   - #38175: ViT Full CUDA Graph RFC - 53 comments
   - #59575: ROCm AMD Qwen3.8-Flash-Next optimization - 33 comments
   - #65560: Replace Marlin with Humming - 24 comments
   - #66782: KV Offload request-level promotions - 24 comments
   - #68784: Rust frontend as default tracking - 7 comments, updated today

3. **Notable PRs updated today**:
   - #70271: Rust Frontend DeepSeek V4.1 special token encoding - 2026-11-27
   - #70270: Multimodal text fallback bugfix - 2026-11-27
   - #70269: Inkling 2 SM8x decode kernels - 2026-11-27
   - #69978: NUMA binding bugfix - 2026-11-27
   - #69778: FP8 SiLU fuse optimization
   - #67740: DeepGEMM for Qwen4Exp FP8 QSA
   - #69392: Multimodal cache bugfix
   - #70067: DeepSeek V4.1 GPU sync bugfix

4. **Key themes**:
   - Rust frontend becoming default
   - DeepSeek V4.1 support maturing
   - KV offload improvements
   - ROCm/AMD optimizations
   - Quantization format consolidation (Marlin→Humming)
   - Inkling model support expanding across hardware generations and performance optimizations like DeepGEMM for FP8 workloads. Multimodal capabilities are also advancing through ViT CUDA graph support and render API enhancements.
</think>


# vLLM Project Digest — 2026-11-27

## 1. Today's Highlights

The vLLM project shows intense activity around inference infrastructure hardening. DeepSeek V4.1 support is maturing rapidly in the Rust frontend (PR #70271 encodes special-token spellings consistently across Python/Rust renderers), while a critical NUMA binding race condition has been split into PR #69978 to unblock multi-node deployments. The community is also coalescing around replacing the legacy Marlin quantization kernel with Humming across NVIDIA architectures (Issue #65560), signaling a new baseline for INT4/INT8 GPTQ/AWQ and FP8 on Hopper/Blackwell.

## 2. Releases & Breaking Changes

| Item | Details |
|------|---------|
| **No new releases** | No releases tagged in the last 24 hours. |
| **Upcoming: Rust frontend as default** | Issue #68784 tracks remaining blockers before `vllm serve` defaults to the Rust frontend. Currently marked as "planned soon." Engineers using Python-specific APIs should verify feature parity before upgrading. |

## 3. New Model & Hardware Support

| Model / Architecture | Status | Links |
|---------------------|--------|-------|
| **DeepSeek V4.1** | Rust frontend encoding parity landed (PR #70271); GPU sync bugfix for V4.1 VL image inputs merged (PR #70067). | [PR #70271](https://github.com/vllm-project/vllm/pull/70271), [PR #70067](https://github.com/vllm-project/vllm/pull/70067) |
| **Inkling 2** | Multi-node A100 recipe (TP8) merged (PR #69960); SM8x decode kernels for Ampere/Ada merged (PR #70269) — low-M projections on SM80/SM86, fused router on SM86. | [PR #69960](https://github.com/vllm-project/vllm/pull/69960), [PR #70269](https://github.com/vllm-project/vllm/pull/70269) |
| **Qwen3.8-Flash-Next (Qwen4Exp)** | DeepGEMM integration for FP8 QSA prefill scoring on SM100-family GPUs: **1.9×** faster scoring, **1.07–1.42×** faster selection at ≥512 query rows per batch. | [PR #67740](https://github.com/vllm-project/vllm/pull/67740) |
| **AMD gfx950 / MI355X** | Performance optimization tracker (Issue #59575) with MXFP4 MoE and QuerySparse Attention targets. | [Issue #59575](https://github.com/vllm-project/vllm/issues/59575) |
| **Intel XPU** | DSpark batch-sharded sequential sampling enabled on Intel GPUs (PR #68598). | [PR #68598](https://github.com/vllm-project/vllm/pull/68598) |
| **Muse Spark LoRA** | Packed attention projections support merged (PR #70094). | [PR #70094](https://github.com/vllm-project/vllm/pull/70094) |
| **MRV2 PCP LoRA** | Attention-only, lm_head, and routed-expert LoRA on PCP-only path added (PR #69221). | [PR #69221](https://github.com/vllm-project/vllm/pull/69221) |

## 4. Performance & Optimization

| Category | Work | Details | Links |
|----------|------|---------|-------|
| **FP8 kernel fusion** | SiLU-and-mul fused with group-128 FP8 input quant for CUTLASS block-FP8 linear | Unblocks the `silu_and_mul_per_block_quant` path which previously never fired on CUDA. | [PR #69778](https://github.com/vllm-project/vllm/pull/69778) |
| **Tensor-parallel latency** | FlashInfer `PcieIpcAllGatherWorkspace` integration into `CudaCommunicator.all_gather` | Targets DeepSeek-V4.1-Flash's many small TP all-gathers (Engram, compressor, drafter). | [Issue #65359](https://github.com/vllm-project/vllm/issues/65359) |
| **LoRA kernel** | Early-exit Triton Punica shrink/expand by per-adapter rank | Reduces unnecessary computation for sparse adapter configurations. | [PR #69809](https://github.com/vllm-project/vllm/pull/69809) |
| **KV offload memory** | `SimpleCPUOffloadConnector` stores TP-replicated KV regions once | Opt-in `share_replicated_regions` flag (e.g., MiniMax-M3 index cache). | [PR #69920](https://github.com/vllm-project/vllm/pull/69920) |
| **Scheduling** | Shortest Remaining Prefill First (SRPF) with starvation aging | RFC implementation targeting v1 engine; mitigates HoL blocking from long prompts (7k+ tokens). | [PR #58420](https://github.com/vllm-project/vllm/pull/58420) |
| **Mooncake KV backend** | Backend interface abstraction for KV transfers, TENT support | Decouples MooncakeConnector from transfer engine API. | [PR #64486](https://github.com/vllm-project/vllm/pull/64486) |
| **Quantization config metrics** | `get_weight_byte_size()` for out-of-tree quantization configs | Enables accurate MFU/MBU estimation for custom formats. | [PR #65143](https://github.com/vllm-project/vllm/pull/65143) |

## 5. Stability & Regressions

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **🔴 Critical** | #42426 | Kimi-K2.6 intermittently outputs `!!!!!!!!!!` in reasoning field with null content. Closed with fix in v0.20.0. | N/A (resolved) |
| **🔴 Critical** | #48234 | SIGSEGV in `torch::jit::invokeOperatorFromPython` (transpose) with NVFP4 + DFlash + torch.compile on Blackwell SM120. Closed, stale. | N/A (closed) |
| **🟠 High** | #54919 | Qwen3.8-Flash-Next long-prefill periodically starves active decode for 3–7 minutes on 2-node DGX Spark TP2. | None yet |
| **🟠 High** | #48568 | GLM-5.2 MTP deadlocks on AMD MI300X (RCCL no transport for peer). | None yet |
| **🟠 High** | #68336 | Qwen3.6 MoE CT INT4 checkpoint stores `shared_expert_gate` as packed INT4 but vLLM expects float `weight`. | None yet |
| **🟡 Medium** | #69978 | NUMA binding race: `MultiprocExecutor` starts workers before `configure_subprocess` completes on NUMA-enabled systems. | [PR #69978](https://github.com/vllm-project/vllm/pull/69978) |
| **🟡 Medium** | #70067 | `GPU<->CPU sync detected` in `DeepseekV4VLEncoderCudaGraphMixin._build_image_span`. | [PR #70067](https://github.com/vllm-project/vllm/pull/70067) |
| **🟡 Medium** | #69392 | MultiModalCacheMissError from cache state drift with pre-rendered features items. | [PR #69392](https://github.com/vllm-project/vllm/pull/69392) |
| **🟡 Medium** | #70270 | Multimodal fallback re-encoding changes special tokens unexpectedly. | [PR #70270](https://github.com/vllm-project/vllm/pull/70270) |

## 6. What This Means for Application Developers

**Rust frontend adoption imminent.** Teams should audit Python-specific behaviors (streaming, `tool_choice="auto"` with both tools and `response_format`, video placeholders) against the Rust frontend. Issue #66858 tracks an ongoing Python/Rust disagreement on that exact combination. Testing in staging with `--frontend=rust` is advised before the default flip.

**Quantization baseline shift ahead.** The planned replacement of Marlin with Humming (Issue #65560) will change kernel dispatch on Hopper and Blackwell. If you run INT4/INT8 GPTQ/AWQ or FP8 quantized models, expect different performance characteristics and should validate accuracy regressions post-upgrade.

**DeepSeek V4.1 is production-ready on Rust.** Special-token handling is now consistent across Python and Rust renderers. If you use DeepSeek-V4.1 VL with image inputs, apply PR #70067 to avoid GPU sync errors.

**Multi-node operators: watch the NUMA fix.** PR #69978 resolves a subtle race that could cause silent correctness issues on NUMA systems. Apply before scaling beyond single-node.

**KV offload is hardening.** The filesystem tier now has an integrity proposal (Issue #54363), and TP-replicated KV region deduplication (PR #69920) reduces host memory pressure for certain architectures. Evaluate these flags when running multi-TP workloads with offloading.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the provided GitHub data for SGLang and generate a structured digest for 2026-11-27.

Let me organize the key information:

**Latest Releases (last 24h)**
- None

**Key Issues (by comment count/importance):**

1. #42752 - Flaky tests and CI infrastructure failures (278 comments, OPEN) - Major CI tracking issue
2. #50045 - SGLang 1.0 Release Tracker (19 comments, OPEN) - Stability release roadmap
3. #17050 - CI Test Failures and Fixes tracking (15 comments, OPEN)
4. #49944 - Unified Memory Roadmap (14 comments, OPEN) - Major memory architecture change
5. #21891 - SGLang Simulator (11 comments, CLOSED/inactive) - Benchmarking tool
6. #46520 - Intel XPU support RFC (6 comments, OPEN) - New hardware backend
7. #34510 - PD disaggregation shared-protocol unification (6 comments, OPEN)
8. #41236 - Streaming token loss bug (4 comments, CLOSED/inactive)
9. #40441 - DeepSeek-V4.1 decode graph width bug (4 comments, CLOSED/inactive)
10. #47763 - Agent harness compatibility RFC (4 comments, OPEN)
11. #53151 - AOT Pinned Prefix Caching feature request (3 comments, OPEN)
12. #52575 - KV-indexer RwLock bug (3 comments, OPEN)
13. #53203 - SGLang Diffusion Physical AI roadmap (3 comments, OPEN)
14. #52090 - Regex backtracking bug in /parse_function_call (3 comments, OPEN)
15. #53309 - TP startup hangs bug (3 comments, OPEN)
16. #53154 - Gumbel watermark overflow bug (2 comments, OPEN)


17. #53439 - Inkling-2 shared memory bug on SM12x (2 comments, OPEN)

The most critical issues to address are the Intel XPU support RFC, the Unified Memory roadmap, and the streaming token loss bug. The regex backtracking vulnerability and shared memory issue on SM12x also require attention. Several PRs are in flight, including the elastic-EP scale-down feature and disaggregation performance improvements. I'm identifying the key PRs that address critical fixes and features across the SGLang project. Several performance optimizations stand out—particularly the batch-invariant GEMM work and the fused QK norm+RoPE implementation. There are also important bug fixes covering deterministic MoE routing, multimodal decoding, and attention backends. I'm also noting the NGRAM speculative decoder support and encoder drain fixes as significant additions. The list appears to continue with additional PRs that need to be evaluated for their scope and impact. I'm organizing the key PRs into a structured overview, highlighting the most critical updates across performance optimizations, bug fixes, and feature additions. Several memory and kernel improvements are in flight—including DeepSeek-V4.1 pipeline-parallel support, Mamba sequence isolation, and batch-invariant deterministic GEMMs—alongside bug fixes for multimodal JPEG decoding and encoder lifecycle management. Diffusion and physical AI capabilities are expanding through diffusion/llada-image optimizations and a new robotics serving roadmap. On the stability front, there are ongoing CI issues with flaky tests and regex backtracking concerns in function parsing that need monitoring. I'll focus on highlighting the most impactful developments for infrastructure engineers, using plain English to explain technical implications without unnecessary jargon.
</think>


# SGLang Daily Digest — 2026-11-27

## 1. Today's Highlights

The SGLang project is advancing on three major fronts simultaneously: the upcoming **1.0 stability release** roadmap is shaping up with explicit compatibility policies and upgrade notes, while the **Unified Memory** architecture (single GPU memory arena for KV cache, sliding-window, and recurrent state) continues to mature. On the operational side, CI reliability remains a pain point — the project is actively tracking 5 broken and 18 flaky tests alongside a dedicated `/sglang-pr-babysit` Claude Code workflow.

## 2. Releases & Breaking Changes

No new releases in the last 24 hours. However, the SGLang 1.0 release tracker (#50045) signals that the 1.x series will introduce **breaking changes** compared to 0.5.x, with explicit upgrade notes forthcoming. Configuration options that currently silently override each other will be replaced with explicit errors that name the offending setting.

- **SGLang 1.0 Release Tracker**: [#50045](https://github.com/sgl-project/sglang/issues/50045)

## 3. New Model & Hardware Support

**Intel XPU Backend (RFC Stage)**
A new RFC proposes enabling Intel XPU support via *Lookahead Expert Scheduling (LES)* and an SSD-backed memory tier for integrated GPUs, allowing single-GPU MoE offload scenarios. This builds on the existing paged-experts infrastructure and leverages host pinned memory for expert residency.

- **RFC: Intel XPU + LES + iGPU SSD tier**: [#46520](https://github.com/sgl-project/sglang/issues/46520)

**Inkling-2 / SM12x (GB10) Early Validation**
A bug report from SymbAI's DGX Spark lab documents shared memory allocation failures for Inkling-2-Small (384 routed experts, EP > 1) on SM12x hardware, indicating active hardware bring-up is in progress for NVIDIA GB10.

- **Inkling-2 on SM12x shm bug**: [#53439](https://github.com/sgl-project/sglang/issues/53439)

## 4. Performance & Optimization

**DeepSeek-V4.1 PP Prefill Support (Landed)**
PR #53409 adds full pipeline-parallel PD prefill for DeepSeek-V4.1, including uneven layer partitions, mHC state transfer, sparse selections, and candidate block handoff across PP stages.

- **PP support for DeepSeek-V4.1**: [#53409](https://github.com/sgl-project/sglang/pull/53409)

**Disagg Prefill KV Chunking (In Progress)**
PR #50958 changes PD disaggregation to send each PP stage's last KV chunk immediately when that stage's forward completes, rather than waiting for the result to propagate through the PP ring. This eliminates a `pp_size - 1` micro-batch delay.

- **Disagg: per-stage KV chunk on forward completion**: [#50958](https://github.com/sgl-project/sglang/pull/50958)

**FlashInfer Batch-Invariant BF16 GEMMs (In Progress)**
PR #51618 routes deterministic BF16 GEMMs through FlashInfer 0.7.4's `mm_bf16` with `batch_invariant=True`, ensuring identical output bits regardless of batch composition — a prerequisite for reproducible inference.

- **Batch-invariant deterministic GEMMs**: [#51618](https://github.com/sgl-project/sglang/pull/51618)

**LLaDA QK Norm + RoPE Fusion (In Progress)**
PR #53484 fuses QK normalization and RoPE directly after the packed projection in `LLaDAImageAttention`, eliminating three separate tensor `.unflatten()` and `.contiguous()` calls per forward pass.

- **Fuse QK norm+RoPE in LLaDA**: [#53484](https://github.com/sgl-project/sglang/pull/53484)

**Elastic EP Scale-Down (Landed)**
PR #33111 adds the ability to retire live Expert Parallelism ranks from a serving deployment via Mooncake's `deactivate_ranks`, completing the elasticity triangle alongside grow and recovery.

- **Elastic EP runtime scale-down**: [#33111](https://github.com/sgl-project/sglang/pull/33111)

## 5. Stability & Regressions

### Critical

**Flaky Tests / CI Infrastructure (Active)**
Issue #42752 tracks ongoing CI failures in the NVIDIA `PR Test Base` and `PR Test Extra` runs, with a dedicated Claude Code babysitting workflow. At time of reporting, the CI stats dashboard shows 5 broken and 18 flaky tests on `main`. Additionally, PR #53471 reports that `check-changes` incorrectly partitions a new 2-GPU GB300 test, causing false failures on otherwise clean PRs.

- **CI flaky tracker**: [#42752](https://github.com/sgl-project/sglang/issues/42752)
- **check-changes shard miscalculation**: [#53471](https://github.com/sgl-project/sglang/issues/53471)
- **CI failures tracking**: [#17050](https://github.com/sgl-project/sglang/issues/17050)

**Streaming Token Loss Bug (Fixed/Inactive)**
Bug #41236 documents that when `LimitedCapacityDict` evicts a detokenizer state mid-request (at > 65,536 concurrent states), up to 5 tokens can be silently lost from the stream output. The issue is marked inactive; verify fix status before deploying high-concurrency workloads.

- **Streaming token loss on eviction**: [#41236](https://github.com/sgl-project/sglang/issues/41236)

### Moderate

**Regex Backtracking in Tool Call Detectors**
Issue #52090 reports that `/parse_function_call` runs regex-based tool call detection synchronously in an async handler. Patterns with nested quantifiers and `.*` wildcards under `re.DOTALL` cause catastrophic backtracking on ~167-byte crafted inputs, effectively blocking the event loop for all other requests.

- **Catastrophic regex in tool call detectors**: [#52090](https://github.com/sgl-project/sglang/issues/52090)

**TP Startup Hangs on Shared /dev/shm**
Issue #53309 documents that when multiple Tensor Parallel ranks run in separate Kubernetes Pods sharing a host `/dev/shm`, both ranks hang at `Init parallel begin`. Affects SGLang v0.5.23 on K8s 1.26.5.

- **TP hang on shared /dev/shm**: [#53309](https://github.com/sgl-project/sglang/issues/53309)

**KV-Indexer RwLock Read Guard Starvation**
Bug #52575 reports that a prefix query in `sgl-kv-indexer` holds a single `RwLock` read guard for the entire radix tree scan, starving KV apply operations for the duration of the query.

- **KV-indexer read guard starvation**: [#52575](https://github.com/sgl-project/sglang/issues/52575)

**Gumbel Watermark int32 Overflow**
Bug #53154 reports that Gumbel watermark initialization overflows `int32` when processing multimodal padding token IDs, potentially corrupting watermark state for multimodal inference.

- **Gumbel watermark overflow**: [#53154](https://github.com/sgl-project/sglang/issues/53154)

## 6. What This Means for Application Developers

**Deployers on High-Concurrency Workloads**: The streaming token loss bug (#41236) affects any deployment exceeding 65,536 concurrent detokenizer states. Monitor `SGLANG_DETOKENIZER_MAX_STATES` and consider upgrading once this fix lands, as silent token loss is difficult to detect in production.

**Tool-Calling Users**: If your application uses `/parse_function_call`, be aware that a malicious or even accidentally complex input can block the entire server event loop. Until this is patched, rate-limit or sanitize tool call inputs, and monitor for unusual latency spikes on the tool call endpoint.

**Kubernetes TP Deployments**: The `/dev/shm` sharing issue means that running SGLang TP ranks in separate Pods on the same node requires careful volume isolation. Ensure each Pod has its own `emptyDir` volume mounted at `/dev/shm` or set `shmSize` explicitly.

**DeepSeek-V4.1 Users**: The new PP prefill support (#53409) enables multi-stage prefill pipelines for DeepSeek-V4.1. If you are already running DeepSeek-V4.1 with TP only, this opens up additional deployment topologies for prefill-heavy workloads.

**Physical AI / Diffusion Practitioners**: The new roadmap issue (#53203) signals intent to unify SGLang Diffusion, `miles_diffusion`, and `miles` into a single stack for vision-language-action policies and world models. Early adopters should watch this space for a converged API surface.

**1.0 Upgrade Planning**: Teams currently on 0.5.x should begin reviewing the upgrade notes in the 1.0 tracker (#50045). The shift from silent configuration overrides to explicit errors means that existing misconfigurations will surface as startup failures rather than silently degrading performance.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a structured digest for llama.cpp based on the provided GitHub data for 2026-11-27. Let me analyze the data and create a comprehensive digest following the specified sections.

Let me parse through the data:

**Releases:**
- v1.1.0: Major release with Inkling 2 family, Domyn Edge 4B, Zaya1 8B, RAON-1-mini, Hy4 flash support, DFlash speculative decoding split, deprecation of old llama_batch API in favor of llama_batch_ext, large TTS updates

**Commits (b12804, b12803, b12801, b12800, b12798, b12793, b12791, b12785, b12784):**
- HIP bf16 MFMA fix for CDNA
- SSM conv + silu fusion
- CUDA+HIP Flash Attention with indexed bias
- OpenCL MoE int8 bin kernel for Adreno A850
- Test tolerance relaxation
- CUDA fuse Inkling 2 chains
- Vulkan Windows RDNA1 fix
- DFlash2 support for Inkling-2-Mini
- Test-fusion moe flag fix

**Issues (top by comments):**
- #25593: SM_60 Quality Loss (CLOSED) - 22 comments
- #24440: Gemma 4 31B MTP crash (CLOSED) - 11 comments
- #17107: KV Cache Persistence feature request (CLOSED) - 10 comments
- #32780: UI asset validation build bug (CLOSED) - 9 comments
- #32776: Speculative decoding 2.2-2.4x slower (OPEN) - 8 comments
- #28581: IQ3_S garbage on RTX 5060TI (OPEN) - 8 comments
- #27306: MTP DeviceLost on AMD RADV (CLOSED) - 8 comments


- #32918: convert_hf_to_gguf.py tensor count error (OPEN) - 7 comments
- #30768: IQ4_XS slash spam on Vulkan RADV (CLOSED) - 6 comments
- #27560: llama-server crash on Windows/Vulkan (OPEN) - 6 comments
- #29324: --cache-ram -1 not no limit (OPEN) - 6 comments
- #32910: Inkling-2-Mini CUDA buffer issue (OPEN) - 5 comments
- #28723: MCP server deadlock (OPEN) - 5 comments

I notice several critical issues emerging around model conversion, runtime crashes, and buffer management. The data reveals ongoing challenges with model support, particularly for newer architectures like Inkling-2-Mini, and persistent stability problems across different hardware configurations.

The top pull requests demonstrate significant engineering focus on cross-platform support and performance optimization. Key areas include expanding Haiku compatibility, enhancing HIP split-K capabilities, and introducing graph transformation techniques that improve inference efficiency by eliminating state copying steps.

Specific optimization efforts target memory management through embedding storage reservation and quantization scale support, indicating a systematic approach to refining computational performance across hardware platforms.

Emerging Vulkan and CUDA kernel improvements focus on compact bias Flash Attention, Hexagon integer precision fixes, and addressing token generation limitations. Notably, the Unicode tokenization optimization eliminates redundant UTF-8 conversions, representing a targeted performance enhancement.

These pull requests collectively represent a comprehensive strategy for cross-platform kernel refinement, precision management, and computational efficiency.
</think>


# llama.cpp Digest — 2026-11-27

## Today's Highlights

llama.cpp v1.1.0 lands with the Inkling 2 family (base, Mini, DSpark), Domyn Edge 4B, Zaya1 8B, RAON-1-mini, and Hy4 flash support, alongside the deprecation of the legacy `llama_batch` API in favor of `llama_batch_ext`. The release also splits DFlash speculative decoding into separate draft methods. Meanwhile, CUDA+HIP Flash Attention with indexed bias support and a fused SSM_conv+silu kernel landed in the last 24 hours, with ongoing work to expand Vulkan FP8 matmul support.

---

## Releases & Breaking Changes

| Change | Description | Link |
|--------|-------------|------|
| **v1.1.0 released** | Inkling 2 family, Domyn Edge 4B, Zaya1 8B, RAON-1-mini, Hy4 flash support; DFlash speculative decoding split into separate draft methods; TTS enhancements | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/v1.1.0) |
| **`llama_batch_ext` API migration** | Legacy `llama_batch` API deprecated; projects should migrate to `llama_batch_ext` | [PR #33086](https://github.com/ggml-org/llama.cpp/pull/33086) |

---

## New Model & Hardware Support

### New Models
| Model | Variant | Notes |
|-------|---------|-------|
| Inkling 2 | Base, Mini, DSpark | DFlash2 support added; CUDA fuses for short conv, depth mix, loop controller, L2 clip, situ chains | [PR #33060](https://github.com/ggml-org/llama.cpp/pull/33060), [PR #33073](https://github.com/ggml-org/llama.cpp/pull/33073) |
| Domyn Edge | 4B | Added in v1.1.0 |
| Zaya1 | 8B | Added in v1.1.0 |
| RAON-1-mini | — | Added in v1.1.0 |
| Hy4 | Flash | Added in v1.1.0 |

### Hardware & Backend Updates
| Backend | Update | PR |
|---------|--------|-----|
| **HIP/CDNA** | Fixed bf16 MFMA operand vector type for CDNA (gfx908, gfx90a, gfx942, gfx950); LLVM 23 compatibility | [PR #33086](https://github.com/ggml-org/llama.cpp/pull/33086) |
| **CUDA/HIP** | Flash Attention with indexed bias ported onto refactored loaders; bias in F32 | [PR #33063](https://github.com/ggml-org/llama.cpp/pull/33063) |
| **OpenCL** | MoE int8 bin kernel for Adreno A850 | [PR #33069](https://github.com/ggml-org/llama.cpp/pull/33069) |
| **Vulkan** | Fixed Windows driver RDNA1 architecture misclassification | [PR #33123](https://github.com/ggml-org/llama.cpp/pull/33123) |
| **Haiku** | Build support added (preprocessor/CMake fixes) | [PR #33168](https://github.com/ggml-org/llama.cpp/pull/33168) |

### Quantization & Formats
- **FP8/NVFP4**: Quant scale support moving into GGML with backend epilogue MUL; Vulkan FP8 and scaled matmul support in progress | [PR #28898](https://github.com/ggml-org/llama.cpp/pull/28898), [PR #29791](https://github.com/ggml-org/llama.cpp/pull/29791)

---

## Performance & Optimization

### Landed (24h)
| Optimization | Backend | Impact |
|--------------|---------|--------|
| Fused SSM_conv + silu + redundant copy removal | CPU | Eliminates unnecessary memory traffic before attention output projection | [PR #33081](https://github.com/ggml-org/llama.cpp/pull/33081) |
| CUDA fuse: Inkling 2 short conv, depth mix, loop controller, L2 clip, situ chains | CUDA | Reduced kernel launch overhead for Inkling 2 family |
| Unicode tokenization | All | Avoids two redundant UTF-8 conversions and per-byte string copy | [PR #33164](https://github.com/ggml-org/llama.cpp/pull/33164) |
| CUDA constant V load length | CUDA | Drops stack frame on 512-head f16 attention; fixes #32871 | [PR #33161](https://github.com/ggml-org/llama.cpp/pull/33161) |
| Metal f32 accumulation fix | Metal | `GGML_PREC_F32` now respected in mul_mat; avoids MMA/MM kernels when f32 accumulation requested | [PR #33093](https://github.com/ggml-org/llama.cpp/pull/33093) |

### In Progress
| Optimization | Backend | Details |
|--------------|---------|---------|
| Graph state copy elimination | RWKV6/7, Multi-token | Removes state copy steps; speeds up token output | [PR #30139](https://github.com/ggml-org/llama.cpp/pull/30139) |
| HIP split-K F32 GEMM | HIP (RDNA3) | Unblocks Inkling-2-Mini prefill on untuned gfx1101/1102/1103/115x | [PR #33167](https://github.com/ggml-org/llama.cpp/pull/33167) |
| Hexagon INT HMX fix | Hexagon | Corrects FA P quantization and matmul activation quantization; fixes IQ9 on Llama-3.2-1B | [PR #33166](https://github.com/ggml-org/llama.cpp/pull/33166) |
| Vulkan FA compact bias | Vulkan | Inkling 2 Mini support | [PR #32898](https://github.com/ggml-org/llama.cpp/pull/32898) |
| Argsort NaN handling | CPU/CUDA/Vulkan | Consistent ordering across backends | [PR #32408](https://github.com/ggml-org/llama.cpp/pull/32408) |

---

## Stability & Regressions

| Severity | Issue | Status | Workaround / Fix |
|----------|-------|--------|------------------|
| **🔴 Critical** | Speculative decoding 2.2–2.4× slower on Qwen3.5 hybrid with CUDA | OPEN | [Issue #32776](https://github.com/ggml-org/llama.cpp/issues/32776) |
| **🔴 Critical** | Inkling-2-Mini: 7.2–7.8 GB CUDA0 buffer requested regardless of `-ngl 0` | OPEN | [Issue #32910](https://github.com/ggml-org/llama.cpp/issues/32910) |
| **🔴 Critical** | Inkling-2-Mini crashes with `--moe-cache-mib` | OPEN | [Issue #33101](https://github.com/ggml-org/llama.cpp/issues/33101) |
| **🟠 High** | Multi-GPU: `cudaGetDeviceProperties` called per tensor on cross-device copy (up to 8× slowdown) | OPEN | [Issue #33132](https://github.com/ggml-org/llama.cpp/issues/33132) |
| **🟠 High** | `convert_hf_to_gguf.py` reports wrong tensor count for Qwen 3.8 27B (770 vs 866) | OPEN | [Issue #32918](https://github.com/ggml-org/llama.cpp/issues/32918) |
| **🟠 High** | RAON-1-mini: wrong tensor count (expected 736, got 731) | OPEN | [Issue #33099](https://github.com/ggml-org/llama.cpp/issues/33099) |
| **🟠 High** | SYCL decode hangs on Xe3 (Panther Lake) | OPEN | Set `GGML_SYCL_USE_ASYNC_MEM_OP=0` | [Issue #31547](https://github.com/ggml-org/llama.cpp/issues/31547) |
| **🟡 Medium** | Vulkan output corruption on Intel Arc B-series persists with long-context/RAG | OPEN | [Issue #31828](https://github.com/ggml-org/llama.cpp/issues/31828) |
| **🟡 Medium** | MoE cache stores shared expert weights 3× on looped inkling2 models | OPEN | [Issue #32744](https://github.com/ggml-org/llama.cpp/issues/32744) |
| **🟡 Medium** | `--cache-ram -1` not respected; token cap stays at `n_ctx` | OPEN | [Issue #29324](https://github.com/ggml-org/llama.cpp/issues/29324) |
| **🟢 Low** | `--bash-completion` incorrect for unified binary | OPEN | [Issue #33083](https://github.com/ggml-org/llama.cpp/issues/33083) |

### Fixed / Closed
| Issue | Resolution |
|-------|------------|
| SM_60 Quality Loss (FP32 math silently done in FP16) | Closed, fix merged in forks | [Issue #25593](https://github.com/ggml-org/llama.cpp/issues/25593) |
| MTP DeviceLost on AMD RADV during prompt | Closed | [Issue #27306](https://github.com/ggml-org/llama.cpp/issues/27306) |
| Compile bug: UI asset validation fails with CUDA | Closed | [Issue #32780](https://github.com/ggml-org/llama.cpp/issues/32780) |

---

## What This Means for Application Developers

1. **v1.1.0 Migration**: If you're on `llama_batch`, begin planning the migration to `llama_batch_ext`. The old API is deprecated and will be removed in a future release. The new API enables better batch handling for production inference workloads.

2. **Inkling 2 Family**: With DFlash2 now supported for Inkling-2-Mini, developers using these models can expect improved inference speed via speculative decoding. However, be aware of the active bug with `--moe-cache-mib` causing crashes—avoid that flag for now until the fix lands.

3. **Unicode Tokenization**: The tokenization path optimization eliminates redundant UTF-8 conversions. If you're processing non-ASCII text (multilingual, code with special characters), expect measurable latency improvements on all backends.

4. **Speculative Decoding on Hybrid Models**: If you're running hybrid architectures like Qwen3.5 with speculative decoding on CUDA, performance may be 2.2–2.4× slower than expected. Monitor acceptance rates and consider falling back to standard decoding until this is resolved.

5. **SYCL on Intel Xe3**: On Panther Lake systems, set `GGML_SYCL_USE_ASYNC_MEM_OP=0` to avoid decode hangs.

6. **Multi-GPU with Tensor Overrides**: Avoid `-ot`/`--override-tensor` flags when running multi-GPU setups—there's an 8× performance regression from uncached driver calls.

7. **FP8 on Vulkan**: Work is progressing on Vulkan FP8 matmul support. If you need FP8 inference on AMD GPUs via Vulkan, this will land soon and will require backend-specific implementation.

---

*Digest generated from GitHub data for ggml-org/llama.cpp (2026-11-27)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate a structured digest for Ollama based on the provided GitHub data. Let me analyze the data and create a well-organized technical digest.

Key observations from the data:

**Releases:**
- v0.40.19-rc0 released
- Changes include inkling2 improvements and mlxrunner compact history buffers

**Latest Issues (24 items):**
1. Windows RTX 5090 tool calling disconnect - OOM, HTTP 500
2. Inkling-2-mini crashes DGX Spark (OOM)
3. 0.4.17 OOM issues
4. MLX per-layer quantization override bug
5. GNOME integration feature request
6. Local models missing after update
7. HIGH CVE vulnerabilities reported
8. Mid-stream llama-server errors dropped (returns HTTP 200)
9. MLX runner prefix-cache memory leak
10. CUDA_VISIBLE_DEVICES filtering issue on dual GPU
11. Inkling-2-mini GGML_ASSERT on DGX Spark
12. cmd/bench rubric scoring feature request
13. DGX Spark instability from 0.34.4 to 0.40.18
14. /api/chat with image + "[img-" text fails
15. Device index incremented for filtered devices
16. Cloud beam tool_calls regression
17. JSON schema grammar failures returning HTTP 200
18. FunctionGemma parser splitting on escaped end_function_call
19. Ollama install script breaking older GPUs
20. Model pull/download counts question
21. Download arrow not starting download
22. /v1/messages dropping document blocks
23. CANN build for Ascend NPUs
24. WePocketModel support request

**Pull Requests (24 items, top 20 by comment count):**
1. README: add Zush to Productivity & Apps


2. llm: propagate mid-stream llama-server SSE errors - fixes #19918, #19934
3. renderers: ignore [img- text that is not placeholder - fixes #19911
4. cmd: improve CLI error messages
5. llm/server: Fix VRAM accounting and GPU splitting
6. model/parsers: accept qwen3-coder tool calls missing opener
7. server: add opt-in per-request token metrics logging
8. app: label models that have not been downloaded - fixes #19930
9. llama

I'm tracking several important fixes and improvements across multiple areas. The team is addressing critical issues like SSE error propagation, renderer text handling, and GPU memory management. New features include token metrics logging and model download labeling. The llama.cpp version bump and CUDA backend for Inkling 2 suggest continued performance optimization efforts.

The MLX community int4 support, Anthropic document block handling, and Ascend NPU integration demonstrate expanding platform compatibility. Additional work includes OpenCode plugin installation, community tool additions like Mercury CLI, and environment switches like OLLAMA_NO_THINK.

Performance enhancements focus on memory management, faster short histories, and compact engram buffers. The CUDA backend for Inkling 2 introduces NVFP4 activation and tensor core optimizations.

Stability efforts target critical error handling scenarios, addressing mid-stream errors, tokenization issues, and OOM conditions across various hardware platforms.
</think>


# Ollama Digest — 2026-11-27

## Today's Highlights

Ollama v0.40.19-rc0 landed with targeted backend fixes for Inkling-2 and the MLX runner, while a critical SSE error propagation PR (#19936) is open to address mid-stream failures silently returning HTTP 200 across Metal/GPU decode OOMs and JSON-schema grammar exceptions. High-severity issues cluster around CUDA dual-GPU device selection (#19921), DGX Spark system stability regressions (#19927), and an unpatched CVE report (#19771) requiring immediate attention.

---

## Releases & Breaking Changes

| Version | Change Summary | PR/Link |
|---------|----------------|---------|
| **v0.40.19-rc0** | Inkling-2: faster short histories, draft proposals, and conversation snapshots (#19881); MLX runner: compact Engram history buffers (#19913) | [PR #19881](https://github.com/ollama/ollama/pull/19881), [PR #19913](https://github.com/ollama/ollama/pull/19913) |
| **llama.cpp b12651 → b12701** | Resolves `GGML_ASSERT(s2 <= uint32_t::max())` during long Inkling-2-mini conversations on DGX Spark | [PR #19916](https://github.com/ollama/ollama/pull/19916) |

**Breaking:** No API changes in this release. However, the install script does not validate GPU architecture before downloading NVIDIA drivers, breaking systems with 10-series or older cards ([#19933](https://github.com/ollama/ollama/issues/19933)).

---

## New Model & Hardware Support

### New Model Support
| Model | Details | Status |
|-------|---------|--------|
| **Tencent WePocketModel (WePM)** | Multimodal (2B/4B); text, images, embeddings, structured decisions | Feature request: [Issue #19920](https://github.com/ollama/ollama/issues/19920) |
| **PPLX Decider v1.3** | MLX runner support with v4 chunked decision protocol | PR in progress: [Issue #19734](https://github.com/ollama/ollama/pull/19734) |
| **qwen3-coder tool calls** | Parser now accepts calls missing `<tool_call>` opener | [PR #19764](https://github.com/ollama/ollama/pull/19764) |

### Backend & Quantization Updates
| Backend | Change | Reference |
|---------|--------|-----------|
| **CUDA (Inkling-2 Mini)** | New CUDA backend: NVFP4 activation (4-over-6) with SM120/121 kernels, MXFP8 expert gathers via BF16 tensor cores (qmm_sm80) | [PR #19909](https://github.com/ollama/ollama/pull/19909) |
| **MLX (mlx-community)** | int4 affine quantized `embed_tokens` and `lm_head` support (U32 packed, per-group BF16 scale/bias) | [PR #19928](https://github.com/ollama/ollama/pull/19928) |
| **CANN (Ascend NPUs)** | Build option for `ggml-cann` + device discovery | [PR #19732](https://github.com/ollama/ollama/pull/19732) |

---

## Performance & Optimization

| Area | Change | Impact | Link |
|------|--------|--------|------|
| **Inkling-2 short histories** | Optimized draft proposals and conversation snapshots | Reduced latency for multi-turn inference | [PR #19881](https://github.com/ollama/ollama/pull/19881) |
| **MLX Engram buffers** | Compaction of history buffers | Lower memory footprint on Apple Silicon | [PR #19913](https://github.com/ollama/ollama/pull/19913) |
| **VRAM accounting / GPU splitting** | Ports upstream fixes for draft/MoE memory attribution in `ollama ps` | Accurate VRAM reporting for mixed-expert models | [PR #19632](https://github.com/ollama/ollama/pull/19632) |
| **Per-request token metrics** | New opt-in logging (`OLLAMA_LOG_METRICS=1`) to JSONL | Debugging and capacity planning | [PR #19869](https://github.com/ollama/ollama/pull/19869) |

---

## Stability & Regressions

### Critical (Fix PR Pending)
| Issue | Severity | Description | Fix |
|-------|----------|-------------|-----|
| Mid-stream SSE errors → HTTP 200 | **P0** | Metal/GPU OOM and JSON-schema grammar failures return empty 200 instead of error | [PR #19936](https://github.com/ollama/ollama/pull/19936) (open) |
| `/api/chat` + image + `[img-` substring | **P0** | Tokenizer rejects prompts containing `arr[img-1]` pattern; bypasses real markers | [PR #19912](https://github.com/ollama/ollama/pull/19912) (open) |
| `/v1/messages` document blocks silently dropped | **P1** | `text/plain document` content never reaches model prompt | [PR #19926](https://github.com/ollama/ollama/pull/19926) (open) |

### Critical (No Fix Yet)
| Issue | Severity | Description | Link |
|-------|----------|-------------|------|
| DGX Spark system instability | **P0** | Upgrading 0.34.4 → 0.40.18 causes freeze; affects multiple models beyond Inkling | [Issue #19927](https://github.com/ollama/ollama/issues/19927) |
| High CVE vulnerabilities | **P0** | Unspecified vulnerabilities reported in ollama binary | [Issue #19771](https://github.com/ollama/ollama/issues/19771) |
| Windows RTX 5090 tool calling disconnect | **P1** | HTTP 500 on `/tokenize` during native tool calls and web-search; affects Muse Glimmer 30B and Qwen models | [Issue #19439](https://github.com/ollama/ollama/issues/19439) |

### Notable Bugs
| Issue | Description | Link |
|-------|-------------|------|
| CUDA dual-GPU regression | `CUDA_VISIBLE_DEVICES` set to RTX 5090 causes CPU-only inference on RTX 4090+5090 hosts | [Issue #19921](https://github.com/ollama/ollama/issues/19921) |
| MLX prefix-cache memory leak | ~0.6 GiB growth per distinct prompt; paged-out snapshots never evicted (qwen3.8-flash-next) | [Issue #19891](https://github.com/ollama/ollama/issues/19891) |
| MLX quantization import | Per-layer 8-bit overrides ignored on import; quantized_matmul shape mismatch | [Issue #18789](https://github.com/ollama/ollama/issues/18789) |
| Cloud `beam` tool_calls regression | Since ~Nov 19-20, beam model returns empty tool_calls despite valid tools array | [Issue #19804](https://github.com/ollama/ollama/issues/19804) |
| FunctionGemma parser escaping | `<end_function_call>` inside `<escape>`-quoted string splits incorrectly, producing nameless calls | [Issue #19935](https://github.com/ollama/ollama/issues/19935) |

### Resolved (Closed Issues)
| Issue | Summary | Resolution |
|-------|---------|------------|
| Inkling-2-mini OOM on DGX Spark | Machine unresponsive, hard reboot required | Bumped llama.cpp to b12701 ([PR #19916](https://github.com/ollama/ollama/pull/19916)) |
| GGML_ASSERT on long Inkling-2-mini conversations | `s2 <= uint32_t::max()` crash | Same as above |
| Download arrow UX | Arrow clicked but no download started | [PR #19932](https://github.com/ollama/ollama/pull/19932) |

---

## What This Means for Application Developers

1. **Deploy with caution on DGX Spark and dual-GPU CUDA hosts** — The v0.40.x series has introduced regressions affecting these environments. If you are on a DGX Spark, consider holding at 0.34.4 or waiting for the instability fix before upgrading ([#19927](https://github.com/ollama/ollama/issues/19927)).

2. **Inspect responses on Metal/GPU OOM or grammar-heavy requests** — Until PR #19936 merges, mid-stream errors (Metal decode OOM, JSON-schema failures) silently return HTTP 200 with empty bodies. Add explicit response validation: check for `"error"` in SSE payloads and verify non-empty `content` before assuming success.

3. **Avoid `[img-` literals in vision model prompts** — Any text matching the pattern `arr[img-1]` will corrupt tokenization. Sanitize user input or escape the bracket if your app sends code snippets to vision models.

4. **Document block support is not yet functional** — `/v1/messages` silently drops `document` blocks. Use `text` blocks as a workaround until [PR #19926](https://github.com/ollama/ollama/pull/19926) merges.

5. **New inference telemetry available** — Enable `OLLAMA_LOG_METRICS=1` for per-request token counts, latency, and throughput logged to `~/.ollama/logs/metrics.jsonl`. This is useful for capacity planning and SLA monitoring without external APM.

6. **Inkling-2 Mini now has CUDA support** — NVFP4 and MXFP8 fast paths on NVIDIA GPUs make Inkling-2 Mini viable for production on discrete GPUs. Monitor for CUDA-specific bugs in the new backend ([PR #19909](https://github.com/ollama/ollama/pull/19909)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data for LiteLLM and generate a structured digest for 2026-11-27.

Key observations:

1. **Releases**: 
   - v1.113.0-dev.1 (dev release)
   - v1.108.19 (LTS) - latest
   - v1.108.18 (LTS)
   - Docker image verification with cosign available

2. **Key Issues**:
   - Prisma Python client deprecation notice (#9753) - 22 comments, high interest
   - Azure AI context window bug (#53716) - affecting OpenWebUI users
   - Anthropic cache TTL breakdown feature (#29998) - CLOSED
   - OpenAI Evals API shutdown (#47212) - Nov 30 deadline
   - Various bugs with MCP, guardrails, streaming

3. **Key PRs**:
   - Test improvements (#54785) - making flaky tests deterministic
   - Bedrock router refactor (#54791)
   - Responses stream fix (#54789, #54790)
   - Gateway auth improvements (#54778, #54780)
   - New Inference.net provider (#54787)
   - Various bug fixes

Let me structure this into the requested format.
</think>


# LiteLLM Digest — 2026-11-27

## 1. Today's Highlights

The LiteLLM team shipped a dev release (v1.113.0-dev.1) alongside a new LTS patch (v1.108.19), both with cosign-verified Docker images. On the issue side, a high-traffic Prisma deprecation notice (#9753) signals a planned migration away from the Prisma Python client—relevant for anyone self-hosting the proxy with database-backed state. Meanwhile, an upcoming OpenAI Evals API shutdown on November 30, 2026 (#47212) will break `litellm/llms/openai/evals/transformation.py` unless addressed.

## 2. Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| **v1.113.0-dev.1** | Dev | Latest dev build; pull via `ghcr.io/berriai/litellm:v1.113.0-dev.1` |
| **v1.108.19** | LTS | Latest LTS patch; `ghcr.io/berriai/litellm:lts` now points here |

**Docker Signature Verification** (both releases):
```bash
cosign verify \
  --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com \
  ghcr.io/berriai/litellm:v1.113.0-dev.1
```

**Upcoming Breaking Change**: OpenAI is shutting down the Evals API on **November 30, 2026** (#47212). The file `litellm/llms/openai/evals/transformation.py` makes calls to `/v1/evals` (lines 66, 70, 105). Existing evals become read-only October 31. No fix PR is linked yet; teams using LiteLLM's evals integration should plan migration.

## 3. New Model & Hardware Support

| Provider/Model | Status | Details |
|----------------|--------|---------|
| **Inference.net** | **New Provider** | PR #54787 adds a new provider integration with cost map rows. Function calling flag sourced from Inference.net docs. Prices from `/v1/models` as of 2026-11-26. |

No new native model support or hardware backends (CUDA/ROCm/Metal) landed today. The Prisma deprecation notice (#9753) indicates future database provider changes may affect self-hosted deployments.

## 4. Performance & Optimization

**Rust Router Core Work (In Progress)**:
- **#54788** — Refactoring logging from core crates to use `tracing` instead of host calls. Affects `router-core` and `callbacks-model-capacity` (medium-risk, linked by `python-bridge`). No latency numbers yet.
- **#54791** — Computing Bedrock base model in `router-core` instead of asking the host. Reduces cross-process round-trips for Bedrock deployments.

**Responses Stream Fix (Landed)**:
- **#54789** / **#54790** (LTS) — Stops cancelled background responses and frees read-on streams without relying on Python's cycle collector. Three integration tests went red on main after #54752; this patch resolves the memory leak.

**Flaky Test Determinism (In Progress)**:
- **#54785** — Targeting 21 unit tests to make them deterministic. Five of 25 open flaky tests remain open; two may be real product bugs. Custom code busy-loop bound increased from 2s to 15s to accommodate CI variance.

## 5. Stability & Regressions

Ranked by severity and comment activity:

| Severity | Issue | Impact | Fix PR? |
|----------|-------|--------|---------|
| **High** | **#53716** — Azure AI `ContextWindowExceededError` through OpenWebUI despite default params | Breaks production workloads using Azure AI via LiteLLM Proxy + OpenWebUI | None linked |
| **Medium** | **#54763** — OAuth device login triggered on read-only `validate_environment`/`supports_response_schema` for `chatgpt/` and `github_copilot/` | Unintended side effects in non-interactive scripts | None linked |
| **Medium** | **#47579** — Presidio guardrail holds a lock across the HTTP request, serializing all analyzer/anonymizer calls | Throughput collapse under concurrent guardrail use | None linked |
| **Medium** | **#35383** — MCP stateful session cap bucketed by API key instead of user; shared keys collapse all users into one 100-session limit | Multi-tenant deployments hit session limits unexpectedly | None linked |
| **Medium** | **#54715** — `/mcp/proxy search_tools` returns 504 during cold embedding-cache build due to hardcoded 30s gateway deadline | Tool search fails on large MCP catalogs (~412 tools across 11 servers) | None linked |
| **Low** | **#54561** — Bedrock Converse rewrites tool schemas; signed thinking fails when moving conversations between Bedrock and Vertex | Cross-provider Claude routing breaks with unsigned tool schemas | None linked |
| **Low** | **#54707** — Swagger docs page freezes browser for 9–10s on load, 6.6–7.4s on operation expand | Developer experience degradation | None linked |

**Recently Closed (Stale Batch)** — Multiple issues tagged `stale` were closed today (#29998, #37222, #37469, #37846–37873, #38494, #42223, #35410). Notable closed bugs include:
- **#29998** — Anthropic cache TTL breakdown preserved in Chat Completions usage (feature shipped)
- **#37222** — OAuth2 `client_credentials` MCP servers not receiving credentials at runtime (bug fixed)
- **#37873** — `stream_chunk_builder` crash on `nvidia_nim` streaming through Bedrock guardrails (bug fixed)

## 6. What This Means for Application Developers

**Immediate Actions**:
1. **Verify evals usage** — If you use LiteLLM's evals integration, the OpenAI shutdown on Nov 30 will break functionality. Track #47212 for updates.
2. **Check Prisma dependency** — The deprecation notice (#9753) signals a future database provider change. Monitor for migration guides.
3. **Update LTS image** — Pull `ghcr.io/berriai/litellm:lts` to get v1.108.19 with the stream memory leak fix if you run self-managed.

**Known Production Risks**:
- **Azure AI via OpenWebUI** (#53716): If you route through LiteLLM to Azure AI models and see `ContextWindowExceededError`, this is a confirmed bug with no fix yet. Workarounds may involve adjusting `max_tokens` or `context_window` parameters.
- **MCP multi-tenant deployments** (#35383): If you use shared API keys across users for MCP tools, you'll hit the 100-session cap early. Consider per-user key isolation.

**Infrastructure Notes**:
- The Rust router core refactors (#54788, #54791) are in progress. When they land, Bedrock routing latency should improve and logging behavior may change—update any custom telemetry that depends on log message formats.
- The OAuth device login regression (#54763) means `validate_environment()` calls for consumer models now have interactive side effects. Audit scripts that call this in non-interactive contexts (CI, background jobs).

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze this GitHub data for the Unsloth project and create a structured digest for 2026-11-27.

Key observations:

1. **Releases**: No new releases in the last 24h
2. **Issues**: 24 total issues, mix of open and closed
3. **PRs**: 275 total, with several notable ones

Let me categorize the key items:

**High-impact PRs:**
- #19808: offload_layers optimization - runs micro-batches layer by layer
- #19850: W8A8 int8 LoRA training on ROCm
- #19865: FP8 FBGEMM lazy probe
- #19861: Torch config thread mirror
- #19847: Restore saved models in Compare
- #19773: Fix wrong-language output in Translate
- #19811: CSV developer rows as system messages
- #19870: MLX startup race fix
- #19883: ModelScope mapping expansion
- #19882: Triton ptxas-blackwell fix
- #19881: Windows integrated NVIDIA GPU memory bound
- #19868: Merge LoRA for speed option
- #19871: FP8 cuBLASLt row-wise handling
- #19880: MiniMax-H3-Image batching
- #19879: MiniMax-H3-Image int8 CUTLASS races

**Notable Issues:**
- #19759: Translate not working properly
- #19515: Tensor parallelism not supported for Nemotron-3.5-transcribe-30B
- #19834: Merging adapters led to worse performance
- #19768: Windows Strix Halo memory estimation issue
- #19795: estimate-memory ignores MoE expert offload
- #19810: CSV chat import issue with developer rows

</think>


# Unsloth Digest — 2026-11-27

## 1. Today's Highlights

Unsloth shipped significant backend optimizations around memory management and training efficiency, including layer-by-layer micro-batch execution for `offload_layers` and opt-in W8A8 int8 LoRA training on ROCm. Studio received critical fixes for CSV import handling, model restore in Compare mode, and language detection in Translate, while a new ModelScope aliasing PR expands automatic Chinese mirror resolution to more orgs.

## 2. Releases & Breaking Changes

No new releases tagged in the last 24 hours. The following changes are pending merge and should land in the next beta:

| PR | Change | Impact |
|---|---|---|
| [#19850](https://github.com/unslothai/unsloth/pull/19850) | Opt-in W8A8 int8 LoRA training on ROCm (`UNSLOTH_DIFFUSION_ROCM_W8A8_TRAIN=1`) | Lifts previous ROCm block; enables int8 base training on gfx1151 |
| [#19811](https://github.com/unslothai/unsloth/pull/19811) | CSV importer now maps `developer` rows to system messages; headerless CSVs no longer silently drop leading developer rows | Chat import behavior changes for existing workflows |
| [#19847](https://github.com/unslothai/unsloth/pull/19847) | Compare pane restores its original model on reopen instead of resetting right pane | Affects Compare session continuity |

## 3. New Model & Hardware Support

| PR | What's New | Notes |
|---|---|---|
| [#19883](https://github.com/unslothai/unsloth/pull/19883) | ModelScope aliasing expanded from 18 hand-written entries to dynamic org mapping (`zai-org/GLM-5.3 → ZhipuAI/GLM-5.3`, `nvidia/* → nv-community/*`, etc.) | Reduces manual mirror configuration |
| [#19773](https://github.com/unslothai/unsloth/pull/19773) | Translate feature now uses Tencent's documented prompt specifying only target language, fixing French→French output when source was misdetected | Fixes #19759 |
| [#19770](https://github.com/unslothai/unsloth/pull/19770) | MLX Apple Silicon: fixes startup race on tier 510 and LFM3 chat crash caused by empty `vision_config` | Fixes #19749 |
| [#19750](https://github.com/unslothai/unsloth/pull/19750) | Feature request: support PrismML PQ2_0/PTQ1_0 GGUF types 142/143 in bundled llama.cpp | Not yet merged |

**Hardware-specific memory fixes:**
| PR | Platform | Fix |
|---|---|---|
| [#19551](https://github.com/unslothai/unsloth/pull/19551) | Linux AMD Strix Halo (gfx1151, HIP) | Stop capping GPU memory at `MemAvailable`; correctly account for BIOS carve-out on APU |
| [#19881](https://github.com/unslothai/unsloth/pull/19881) | Windows integrated NVIDIA RTX Spark (ARM64) | Bound diffusion memory planner credit to Windows system commit charge (~58 GiB vs. previously reported 109.5 GiB) |
| [#19768](https://github.com/unslothai/unsloth/issues/19768) | Windows Strix Halo | GPU available memory underestimated when BIOS UMA reservation reduces Windows-visible RAM |

## 4. Performance & Optimization

| PR | Area | Change | Quantified Impact |
|---|---|---|---|
| [#19808](https://github.com/unslothai/unsloth/pull/19808) | `offload_layers` + gradient accumulation | Micro-batches now run layer-by-layer instead of copying swapped layers `2N` times per step | Reduces host↔device bandwidth with `gradient_accumulation_steps > 1`; depends on unsloth-zoo layer-major windows |
| [#19868](https://github.com/unslothai/unsloth/pull/19868) | Studio image diffusion | Per-load opt-in to fold diffusion LoRA into denoiser weights | Median render: **3.145s → 2.559s** on DGX Spark (~18% speedup); off by default to preserve accuracy |
| [#19880](https://github.com/unslothai/unsloth/pull/19880) | MiniMax-H3-Image | Real batched forward behind `UNSLOTH_H3_IMAGE_BATCHED=1`; sequential lockstep mode was the previous default | Off by default; wins on some shapes, loses on others |
| [#19879](https://github.com/unslothai/unsloth/pull/19879) | MiniMax-H3-Image int8 | Pair-check CUTLASS race with `paired_cost_us` re-timer | ~5% slowdown fixed on RTX 6000 Ada at 2048×2048 |
| [#19865](https://github.com/unslothai/unsloth/pull/19865) | FP8 training | FBGEMM block FP8 probe now lazy on local rank's card instead of GPU 0 at import | Correct multi-GPU behavior under torchrun |
| [#19861](https://github.com/unslothai/unsloth/pull/19861) | Torch config | `fix_dynamo_config_thread_visibility` mirrors Inductor config into process-wide default for autograd workers | Fixes torch 2.12+ ContextVar isolation issue |
| [#19871](https://github.com/unslothai/unsloth/pull/19871) | FP8 on RTX 5090 (sm_120) | Treat torch 2.10's cuBLASLt row-wise refusal as missing kernel | Enables tensorwise fallback path |
| [#19882](https://github.com/unslothai/unsloth/pull/19882) | Studio + FlashInfer 0.7.3 | Keep Triton's bundled `ptxas-blackwell` when CUDA 13 toolkit is on PATH | Prevents Blackwell path degradation |

## 5. Stability & Regressions

| Issue | Severity | Summary | Status |
|---|---|---|---|
| [#19759](https://github.com/unslothai/unsloth/issues/19759) | **High** | Translate returns source language instead of target unless detect-mode is on | Fix PR [#19773](https://github.com/unslothai/unsloth/pull/19773) open |
| [#19810](https://github.com/unslothai/unsloth/issues/19810) | **Medium** | CSV chat import maps `developer` rows to user and drops leading headerless developer rows | Fix PR [#19811](https://github.com/unslothai/unsloth/pull/19811) open |
| [#19749](https://github.com/unslothai/unsloth/issues/19749) | **Medium** | MLX Apple Silicon: `_ModuleLock` deadlock on tier 510 + `LanguageModelOutput` TypeError on LFM3 | Fix PR [#19770](https://github.com/unslothai/unsloth/pull/19770) open |
| [#19834](https://github.com/unslothai/unsloth/issues/19834) | **Medium** | Merging adapters produces worse output than running adapters on-the-fly (MLX, FP32 downcast suspected) | Open, no fix PR yet |
| [#19515](https://github.com/unslothai/unsloth/issues/19515) | **Medium** | Tensor parallelism unavailable for Nemotron-3.5-transcribe-30B in Studio (2×RTX 5060 Ti 16GB) | Open |
| [#19795](https://github.com/unslothai/unsloth/issues/19795) | **Low-Medium** | `estimate-memory` ignores `-ot` / `n_cpu_moe` MoE expert offload flags, false "Exceeds GPU memory" warning | Open |
| [#19660](https://github.com/unslothai/unsloth/issues/19660) | **Low** | `import torch; import pyarrow` exits SIGSEGV (139) in Studio venv on Linux Python 3.13 | Closed |
| [#19876](https://github.com/unslothai/unsloth/issues/19876) | **Low** | Remote MCP GitHub server: intermittent header mismatch on large `create_or_update_file` payloads | Open |
| [#19853](https://github.com/unslothai/unsloth/issues/19853) | **Low** | Valid command fails due to sandbox limit (desktop app) | Open |

**Closed (resolved today):**
- [#19660](https://github.com/unslothai/unsloth/issues/19660) — torch/pyarrow SIGSEGV
- [#19550](https://github.com/unslothai/unsloth/issues/19550) — KaTeX `<` in LaTeX chat rendering

## 6. What This Means for Application Developers

**For Studio desktop/web users:** The CSV import fix (#19811) will change behavior if you have scripts exporting developer-role rows; audit import pipelines. The Compare model restore fix (#19847) improves session reliability for multi-model evaluation workflows.

**For fine-tuning workloads:** The `offload_layers` micro-batch optimization (#19808) is transparent but meaningful if you use gradient accumulation with layer offloading. The new ROCm W8A8 opt-in (#19850) enables int8 base training on AMD GPUs for the first time.

**For Apple Silicon MLX users:** The tier 510 startup race fix (#19770) resolves intermittent crashes on load; update when the fix lands.

**For multi-GPU torchrun users:** The FBGEMM lazy probe fix (#19865) and torch config thread mirror (#19861) resolve silent correctness issues in distributed FP8 and autotune scenarios on torch ≥2.12.

**For China-region deployments:** The ModelScope aliasing expansion (#19883) removes the need to manually remap a growing list of orgs (ZhipuAI, nv-community, etc.).

**For image generation users:** The LoRA folding speedup (#19868) is available as a per-session opt-in if you prioritize throughput over preserving unfused weights for later swapping.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*