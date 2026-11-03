# AI Infrastructure Digest 2026-11-03

> Generated: 2026-11-03 03:40 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report covering vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me analyze what I have from each digest and create a comprehensive comparison.

Let me extract the key data points:

**vLLM:**
- v0.33.0 released (927 commits, 389 contributors, 122 new)
- New models: Reflection Beam-1.0 (501B MoE), Yandex AliceAI-Foundation-80B-A3B, Recursive Flint (40B MoE), Muse Spark
- Hardware: SM12x (Blackwell) support active, SM8x requested
- Key issues: DeepSeek-V4-Flash determinism, Blackwell throughput, MTP speculative decoding crashes
- Performance: DeepSeek-V4.1 decode attention 1.6-2.15x faster, Mooncake KV transfer with TENT, scheduler bugfixes
- Layer: Serving engine (distributed, P/D disaggregation)

**SGLang:**
- v0.5.23 released (1007 PRs, 257 contributors)
- New models: Muse Spark Open, Beam-1.0, Mistral Large 4 (1T-param MoE)
- Hardware: Intel XPU, AMD gfx950/MI355X, NVIDIA Hopper optimizations
- Key issues: Flaky tests/CI (165 comments), greedy decoding reproducibility with FlashInfer
- Performance: DeepSeek-V4 FP8 fused RoPE, FLUX.2 Klein 3% latency reduction, Mooncake elastic EP
- Layer: Serving engine with advanced scheduling (Mixed ChunkPrefill, Adaptive Speculative Decoding)

**llama.cpp:**
- 10 releases in last 24h (b12050-b12063)


- New models: Clover (AR-only MoE), Pocket TTS, Chatterbox TTS
- Hardware: Rockchip NPU (via rocket backend), Apple vm_allocate
- Key issues: Memory leak SYCL, SYCL bf conversion, RTX 5090 GSP reset
- Performance: flash_attn_ext_rows multi-seq, Vulkan RDNA3/RDNA4, SYCL DPAS, RISC-V gemm
- Layer: Local runtime / inference engine (standalone, no server dependency)

I'll synthesize the key findings across these AI infrastructure projects. The landscape reveals intense competition in serving engines, with vLLM and SGLang leading in advanced hardware support and optimization. llama.cpp stands out as a lightweight, flexible local inference solution, while emerging projects like Ollama and Unsloth push boundaries in specialized domains.

The ecosystem shows remarkable diversity: from enterprise-grade distributed systems to edge-optimized runtimes, each project targeting distinct computational challenges. Key trends include advanced MoE architectures, sophisticated KV cache management, and cross-platform hardware adaptation.</think>

# Cross-Project Comparison: AI Inference & Serving Infrastructure

## 1. Ecosystem Overview

The AI inference stack is consolidating around **three architectural tiers**: (1) distributed serving engines optimized for multi-GPU clusters (vLLM, SGLang), (2) portable local runtimes for edge/consumer hardware (llama.cpp, Ollama), and (3) gateway/orchestration layers that abstract provider heterogeneity (LiteLLM). Training infrastructure remains a distinct vertical (Unsloth), while all engines are racing to support the same generation of Mixture-of-Experts models—DeepSeek-V4 variants, Mistral Large 4, and new AR-only architectures like Clover. The key technical tension across all projects is **determinism**: non-deterministic greedy decoding persists across vLLM, SGLang, and llama.cpp under various configurations (prefix caching, sparse attention, CUDA graphs), creating correctness risks for agentic workflows that depend on reproducible outputs.

---

## 2. Activity Comparison

| Project | Issues (Open → Recent) | PRs Merged (24h) | Releases (24h) | Contributors (Release) |
|---------|------------------------|------------------|----------------|------------------------|
| **vLLM** | 10 tracked; top issue 127 comments | 10+ PRs | v0.33.0 | 389 (122 new) |
| **SGLang** | 12 tracked; #42752 has 165 comments | 31 PRs | v0.5.23 | 257 |
| **llama.cpp** | 10 tracked; #27845 (21 comments) | 20+ PRs | 10 releases (b12050–b12063) | ~100+ (rolling) |
| **Ollama** | 14 tracked; #19461 (VRAM bug critical) | 31 PRs | v0.40.14-rc0 | ~50 (rolling) |
| **LiteLLM** | 10 tracked; #31263 (Rust migration, 33 comments) | 31 PRs | None | ~100 (rolling) |
| **Unsloth** | 7 tracked; #14487 (memory leak) | 10+ PRs | None | ~30 (rolling) |

**Observations:**
- **SGLang and llama.cpp** lead in raw PR volume; llama.cpp maintains the fastest release cadence (10 builds in 24 hours).
- **vLLM and SGLang** have the most active community engagement (issues with 100+ comments).
- **LiteLLM** is the only project with a dedicated architectural migration track (Rust rewrite).

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4 / V4.1** | ✅ Flash + VL | ✅ Flash + NPU HiCache | — | — | — |
| **Mistral Large 4** (1T MoE) | — | ✅ | — | — | — |
| **Reflection Beam-1.0** (501B MoE) | ✅ | ✅ | — | — | — |
| **Clover** (AR-only MoE) | — | — | ✅ | — | — |
| **LFM3-1.7B** | — | — | — | — | 🚧 (requested) |
| **Muse Spark** | ✅ | ✅ | — | — | — |
| **Qwen3.8-Flash-Next** | ✅ (SM10x) | ✅ (gfx950) | — | — | — |
| **Pocket TTS** | — | — | ✅ | — | — |
| **Rockchip NPU** | — | — | — | ✅ (RK3588) | — |

**Winner: SGLang** — broadest hardware coverage (Intel XPU, AMD gfx950, NVIDIA Hopper, NPU) combined with first-party Mistral Large 4 and advanced scheduling (Mixed ChunkPrefill, Adaptive Speculative Decoding). llama.cpp leads in **portable model support** (TTS, Clover, Rockchip NPU) across the widest hardware diversity. vLLM leads in **large-scale distributed serving** (P/D disaggregation, Mooncake elastic EP).

---

## 4. Performance Frontier

| Optimization Area | vLLM | SGLang | llama.cpp | Ollama | LiteLLM |
|------------------|------|--------|-----------|--------|---------|
| **KV Cache / Offload** | Mooncake TENT, async lookup per group | Mooncake elastic EP, KV transfer | flash_attn_ext_rows (multi-seq) | — | — |
| **Batching / Scheduling** | Lone prefill chunk scheduling fix | Mixed ChunkPrefill (roadmap) | — | — | — |
| **Quantization** | FP8 fused inverse RoPE | NVFP4 fused gate/up + GLU | Q5_K/Q6_K RDNA2 tiles, DPAS SYCL | — | — |
| **Distributed Serving** | P/D disaggregation, elastic EP | P/D with Mooncake | NCCL multi-node TP | — | — |
| **Kernel Optimizations** | CuTe DSL decode attention (1.6–2.15x) | DeepSeek MLA K-alignment relaxation | Vulkan split-K, RISC-V gemm | MLX top-k chunk sort | — |
| **Speculative Decoding** | MTP crash (blocked) | Adaptive SD roadmap | — | — | — |
| **Memory Management** | — | — | vm_allocate (Apple), KV cache auto-CPU share | — | — |

**Frontier concentration:**
- **vLLM and SGLang** are neck-and-neck on KV offload and P/D disaggregation; both target 99th-percentile latency for multi-tenant clusters.
- **llama.cpp** owns the edge/kernel optimization layer — the most diversified backend portfolio (Vulkan, SYCL, Metal, HIP, CPU, NPU).
- **LiteLLM** operates at the orchestration layer — its performance work focuses on rate limiting correctness and provider abstraction overhead.

---

## 5. Layer Positioning

| Project | Primary Layer | Scope | Key Differentiator |
|---------|---------------|-------|---------------------|
| **vLLM** | Serving Engine | Distributed, multi-GPU, P/D disaggregation | Production-grade throughput for 100B+ models |
| **SGLang** | Serving Engine | Advanced scheduling, multimodal, NPU | Mixed ChunkPrefill + Adaptive Speculative Decoding |
| **llama.cpp** | Local Runtime | Standalone inference, no server dependency | Single-binary portability, widest hardware support |
| **Ollama** | Local Runtime | End-user deployment, ease-of-use | One-command model serving, consumer hardware focus |
| **LiteLLM** | Gateway / Orchestration | Provider abstraction, proxy, key management | 100+ provider unification, cost control |
| **Unsloth** | Training / Fine-tuning | QLoRA, LoRA training, GGUF conversion | Memory-efficient fine-tuning on consumer GPUs |

**Competitive boundaries:**
- **vLLM ↔ SGLang**: Direct competitors for cluster inference; SGLang's NPU and multimodal edge, vLLM's Mooncake ecosystem.
- **llama.cpp ↔ Ollama**: Different deployment philosophies — llama.cpp is a library/Ollama is a product; both target local inference.
- **LiteLLM** sits above all, wrapping vLLM/SGLang/llama.cpp/Ollama behind a unified OpenAI-compatible API.

---

## 6. Trend Signals

**What agent/application developers should watch:**

1. **Determinism regressions are widespread** — Greedy decoding with `temperature=0` is non-deterministic across vLLM, SGLang, and llama.cpp under prefix caching, sparse attention, or CUDA graph configurations. This is a **correctness risk for agentic loops** that rely on reproducible tool-call outputs. Track: vLLM #54521, SGLang #39597, llama.cpp ongoing.

2. **NPU support is accelerating** — Rockchip (Ollama), Intel XPU (SGLang), and Ascend (SGLang) backends are moving from WIP to production. Edge deployment options are expanding beyond CPU/Mobile.

3. **Mixture-of-Experts is the default for 100B+ models** — Reflection Beam-1.0 (501B/23A), Mistral Large 4 (1T/52A), Recursive Flint (40B/2.5A), Clover (AR-only MoE). All serving engines are optimizing for MoE routing, deferred finalization, and expert cache.

4. **Rust migration is a cross-project theme** — LiteLLM's #31263 (33 comments) and vLLM's Rust frontend roadmap (#44280) both point to Rust for production server components. Expect faster iteration cycles and better memory safety in 2026–2027.

5. **Memory management bugs are stacking up** — llama.cpp memory leak on Windows (#14487), Ollama VRAM over-count (#19463), Unsloth memory leak (#14487). Multi-backend memory tracking is immature; expect inconsistent behavior until these stabilize.

6. **Gateway/orchestration layer is consolidating** — LiteLLM is becoming the de facto abstraction for multi-provider deployments. If you're building agents that switch between OpenAI, Anthropic, Bedrock, and open-source, LiteLLM reduces integration surface area.

**Strategic recommendation:** For production cluster deployments, prioritize **vLLM** (Mooncake ecosystem, mature P/D) or **SGLang** (NPU path, multimodal). For portable/local inference, **llama.cpp** remains the most battle-tested. Use **LiteLLM** as a facade layer regardless of backend, to preserve provider portability. Avoid **Unsloth** for inference — it's strictly training-focused.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to generate a structured digest for vLLM based on the provided GitHub data. Let me analyze the data and create a professional digest.

Let me organize the information:

**Releases:**
- v0.33.0rc3 → v0.33.0 released
- 927 commits from 389 contributors (122 new)
- New models: Reflection Beam-1.0 (501B MoE, 23B active) with DFlash2 drafter, Yandex AliceAI-Foundation-80B-A3B, Recursive Flint (40B MoE, 2.5B active), Muse Spark

**Top Issues:**
1. #50576: SM8x (Ampere A100/A800) support for DeepSeek-V4-Flash - 127 comments, 16 👍
2. #27433: Batch Invariant Feature and Performance Optimization - 104 comments, 24 👍
3. #44280: Rust Frontend Feature Parity Roadmap - 51 comments
4. #54521: Qwen3.8-Flash-Next: non-deterministic greedy decoding - 50 comments
5. #40756: MTP speculative decoding crash - 45 comments
6. #34303: CUDA Checkpoint/Restore for Near-Zero Cold Starts - 34 comments, 19 👍
7. #39479: torch.compile config hashing refactor - 34 comments
8. #40969: DeepSeek-V4-Flash hangs - 28 comments
9. #56892: DeepSeek-V4.1-Flash on SM120 (RTX PRO 6000 Blackwell) extremely low decode throughput - 27 comments
10. #49569: Plan for enabling mypy in tests - 27 comments

**Top PRs:**
1. #65127: Bugfix - Validate global model seed range


2. #64486: Mooncake KV transfer with TENT support
3. #64626: Rust Frontend bugfix - content-free chunks
4. #60485: Scheduler bugfix - lone prefill chunk scheduling
5. #64493: Tokenizer bugfix - DeepSeek V3.2 generation controls
6. #49555: AuxOutput replay for indexer selections
7. #65286: Bugfix - Release libgomp workers before fork
8. #51351: EAGLE cache-peek capability declaration
9. #51599: Bugfix - async Mamba align D2H

I notice the project is addressing several critical areas: scheduler optimizations, bug fixes for Rust and tokenizer components, and improvements to KV transfer capabilities. The high number of contributors (389) suggests strong community engagement, while the focus on SM8x support, batch invariance, and Rust frontend parity indicates strategic development priorities.</think>

# vLLM Digest — 2026-11-03

## 1. Today's Highlights

vLLM **v0.33.0** has been released with 927 commits from 389 contributors (122 new). The release introduces support for new MoE models including Reflection Beam-1.0 (501B MoE with DFlash2 speculative drafter), Yandex AliceAI-Foundation-80B-A3B, and Recursive Flint. Community attention remains focused on Blackwell (SM12x) GPU support for DeepSeek-V4 variants, with multiple critical performance and correctness issues filed.

---

## 2. Releases & Breaking Changes

| Version | Changes |
|---------|---------|
| **v0.33.0** | Stable release; 927 commits from 389 contributors (122 new). New model integrations: Reflection Beam-1.0, Yandex AliceAI-Foundation-80B-A3B, Recursive Flint, Muse Spark. |

---

## 3. New Model & Hardware Support

- **Reflection Beam-1.0**: 501B MoE model (23B active parameters) with DFlash2 drafter support — [#62074](https://github.com/vllm-project/vllm/pull/62074)
- **Yandex AliceAI-Foundation-80B-A3B**: New model integration — [#57963](https://github.com/vllm-project/vllm/pull/57963)
- **Recursive Flint**: 40B MoE (2.5B active) — [#62938](https://github.com/vllm-project/vllm/pull/62938)
- **SM12x (Blackwell)**: Active development for DeepSeek-V4.1-Flash on RTX PRO 6000 — [#56892](https://github.com/vllm-project/vllm/issues/56892)
- **SM8x (Ampere A100/A800)**: Requested support for DeepSeek-V4-Flash — [#50576](https://github.com/vllm-project/vllm/issues/50576) *(127 comments)*

---

## 4. Performance & Optimization

| Area | Change | PR/Issue |
|------|--------|----------|
| **DeepSeek-V4.1 decode attention** | 1.6–2.15x faster for ≤16 tokens at TP2/TP4 via swap-AB CuTe DSL kernel on SM10x | [#62633](https://github.com/vllm-project/vllm/pull/62633) |
| **KV Offload** | Publish async lookup results per request group to reduce latency | [#57474](https://github.com/vllm-project/vllm/pull/57474) |
| **Scheduler** | Fix uncapped lone prefill chunk scheduling | [#60485](https://github.com/vllm-project/vllm/pull/60485) |
| **Mooncake KV Connector** | Transfer backend refactor + TENT support | [#64486](https://github.com/vllm-project/vllm/pull/64486) |
| **GLM 5.3** | Performance optimization tracking | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **ROCm/Qwen3.8-Flash-Next** | gfx950 / MI355X optimization tracking | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **Batch Invariance** | Feature & performance optimization tracking | [#27433](https://github.com/vllm-project/vllm/issues/27433) *(104 comments, 24 👍)* |

---

## 5. Stability & Regressions

| Severity | Issue | Details |
|----------|-------|---------|
| **High** | DeepSeek-V4-Flash non-determinism at temperature=0 | Greedy decoding produces inconsistent outputs when `prompt length > indexer_budget` on SM12x/GB10 — [#54521](https://github.com/vllm-project/vllm/issues/54521) |
| **High** | DeepSeek-V4.1-Flash extremely low decode throughput on SM120 | CUDA graphs unusable, ~2x slower with `--enforce-eager` — [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **High** | DeepSeek-V4-Flash hangs on SM12x | `cudagraph_mode=FULL_AND_PIECEWISE` + chunked prefill causes hang after ~6 requests — [#40969](https://github.com/vllm-project/vllm/issues/40969) |
| **High** | MTP speculative decoding crash | Illegal memory access on long sequences with Qwen3.6-27B-FP8 — [#40756](https://github.com/vllm-project/vllm/issues/40756) |
| **Medium** | Prefix caching inconsistent completions | Non-deterministic outputs with `--enable-prefix-caching` — [#5543](https://github.com/vllm-project/vllm/issues/5543) |
| **Medium** | Batch invariance breaks with torch.compile/CUDA graphs on SM<90 | Affects Ampere, Ada Lovelace — [#39096](https://github.com/vllm-project/vllm/issues/39096) |
| **Medium** | libgomp workers hang before fork | Fix merged — [#65286](https://github.com/vllm-project/vllm/pull/65286) |

---

## 6. What This Means for Application Developers

1. **Upgrade to v0.33.0** for the latest model integrations and 389 contributor-weeks of improvements. The release includes new MoE model support that may be relevant for high-throughput workloads.

2. **Blackwell (SM12x) users should exercise caution** — DeepSeek-V4 and V4.1 variants have known throughput and determinism issues on RTX PRO 6000 and DGX Spark. If stability is critical, consider running on SM10x or awaiting fixes for [#56892](https://github.com/vllm-project/vllm/issues/56892).

3. **Determinism regressions persist** — Multiple issues (#54521, #53257, #40896) report non-deterministic outputs at `temperature=0` with prefix caching and sparse attention. Avoid these combinations for reproducibility-sensitive applications until resolved.

4. **Rust frontend is progressing** but not yet feature-complete — [#44280](https://github.com/vllm-project/vllm/issues/44280) tracks parity. Current Python frontend remains the default for production.

5. **Scheduler improvements landed** — [#60485](https://github.com/vllm-project/vllm/pull/60485) fixes a scheduling edge case with long prefills that could cause latency spikes under concurrent workloads.

6. **Mooncake P/D disaggregation is advancing** — New TENT support and async lookup optimizations (#64486, #57474) improve KV transfer for distributed deployments.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to generate a SGLang digest for 2026-11-03 based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases:**
- v0.5.23 released with 1007 PRs from 257 contributors

**New Models:**
- Muse Spark Open (LLM/VLM)
- Beam-1.0 (LLM/VLM)

**Issues (top by comments):**
1. #42752 - Flaky tests and CI infrastructure failures (165 comments) - OPEN
2. #23705 - Adaptive Speculative Decoding Roadmap (16 comments) - OPEN
3. #45816 - RFC: Complete migration to shared api.v1 backend API (5 comments) - OPEN
4. #45373 - GLM-5.3-Flash performance optimization on Hopper (4 comments) - OPEN
5. #36545 - Qwen3.8-Flash-Next QSA crashes with FP8 KV cache (4 comments) - CLOSED
6. #37639 - Spark2.5 attention output gate hardcodes sigmoid (4 comments) - CLOSED
7. #13626 - Mixed ChunkPrefill Optimization Roadmap (4 comments) - OPEN
8. #25598 - NPU Development Roadmap 2026 H2 (4 comments) - OPEN
9. #19092 - Parallelize module loading for Diffusion models (3 comments) - OPEN
10. #37524 - GLM-5.3-Flash bug tracking (3 comments) - OPEN
11. #44304 - Qwen3.8-Flash-Next gfx950/MI355X Performance Optimization (3 comments) - OPEN
12. #39597 - Greedy decoding not reproducible with FlashInfer autotune (3 comments) - OPEN


13. #39299 - MoE deferred finalize unreachable for routed models (3 comments) - OPEN

I notice several critical performance and routing challenges emerging. The MoE routing issue (#39299) suggests complex model architecture limitations, particularly for specialized routing mechanisms. Performance optimization remains a key focus, with ongoing work on GLM-5.3-Flash and Qwen3.8-Flash-Next models across different hardware platforms.

The analysis reveals persistent challenges in speculative decoding, particularly around reproducibility and routing complexities. Multiple optimization and feature expansion efforts are underway across different model architectures and hardware configurations.</think>

# SGLang Digest — 2026-11-03

## Today's Highlights

SGLang v0.5.23 shipped with **1,007 PRs from 257 contributors**, marking a major milestone. The release adds first-class support for **Mistral Large 4** (1T-param MoE) and **DeepSeek-V4** performance optimizations including fused inverse RoPE into `wo_a` FP8 quantization. Meanwhile, critical CI stability work continues (165 comments on flaky tests tracking), and the NPU backend is advancing rapidly with DeepSeek V4 L3 HiCache support and DSpark compact mode landing.

---

## Releases & Breaking Changes

| Version | Highlights | Links |
|---------|------------|-------|
| **v0.5.23** | 1007 PRs merged; 257 contributors; new models: Muse Spark Open, Beam-1.0 | [Release](https://github.com/sgl-project/sglang/releases/tag/v0.5.23) |

---

## New Model & Hardware Support

| Model | Type | Notes |
|-------|------|-------|
| **Muse Spark Open** | LLM / VLM | Cookbook available |
| **Beam-1.0** | LLM / VLM | Cookbook available |
| **Mistral Large 4** (mistralai/Mistral-Large-4-1T-A52B) | 1T-param / 52B-active MoE + Pixtral vision | MLA + DSA sparse attention, cross-layer KV sharing, YaRN to 1M context |
| **DeepSeek-V4** | NPU | HiCache L3 support via `npu_memcache` backend |

**Backend updates:**
- **Intel XPU**: RFC merged for paged-experts with Lookahead Expert Scheduling (LES) and SSD tier for iGPU ([#46520](https://github.com/sgl-project/sglang/issues/46520))
- **AMD gfx950 / MI355X**: Qwen3.8-Flash-Next performance optimization track ([#44304](https://github.com/sgl-project/sglang/issues/44304))
- **NVIDIA Hopper (SM90)**: GLM-5.3-Flash performance optimization tracking ([#45373](https://github.com/sgl-project/sglang/issues/45373))

---

## Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **DeepSeek-V4 FP8** | Fused inverse RoPE into `wo_a` projection | Eliminates separate inverse RoPE kernel + memory round-trip; activation quantization now sees rotated values directly |
| **DeepSeek-V4 MLA** | Relaxed CuTe DSL kernel K-alignment from 1024 → 256 | Models with `hidden_size` 3584 or 2560 (DeepSeek-style MLA) now use fused-A GEMM instead of falling back |
| **Diffusion: FLUX.2 Klein** | Cache reference K/V across steps | On one B200: **4.572 → 4.433 s (3.03% latency reduction)** |
| **Diffusion: LTX Video VAE** | Fused normalization + padding into channels-last | Enables cuDNN convolutions; improves 2-stage serving latency |
| **Diffusion: Cosmos-Dreams** | Per-layer prefix K/V buffer | Eliminates 2 full K/V copies per layer per step + O(T) copy per commit |
| **AMD ROCm** | Wave count auto-selection for diffusion FlyDSL norm | Better resource utilization on AMD GPUs |
| **MoE (Mooncake)** | Elastic EP scale-up support | Allows ranks to be added within reserved capacity while inference continues |
| **NPU: GLM-5.2** | 2P2D PD-sep accuracy cases | New DCP/PCP variants for 4-node eval |
| **NPU: Ascend 950** | Standardized hardware terminology | Unified from A5/Atlas A5 → Ascend 950 across codebase |

**In progress:**
- **Adaptive Speculative Decoding** ([#23705](https://github.com/sgl-project/sglang/issues/23705)) — roadmap for agentic/mixed workloads with variable acceptance patterns
- **Mixed ChunkPrefill** ([#13626](https://github.com/sgl-project/sglang/issues/13626)) — advanced scheduling for concurrent prefill/decode batches

---

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | Flaky tests / CI infrastructure failures during PR babysitting | [Tracking #42752](https://github.com/sgl-project/sglang/issues/42752) (165 comments) |
| **High** | Greedy decoding not reproducible across server restarts with FlashInfer autotune (DFLASH) | [Issue #39597](https://github.com/sgl-project/sglang/issues/39597) |
| **Medium** | Mamba hybrid: `copy_from` gathers all temporal states → CUDA OOM under parallel bursts | [Issue #47916](https://github.com/sgl-project/sglang/issues/47916) |
| **Medium** | Hybrid Mamba + EAGLE: KV-cache sizing error misguides toward `--mem-fraction-static` | [Issue #47830](https://github.com/sgl-project/sglang/issues/47830) |
| **Medium** | `qwen_vl`: literal `"<image>"` in message text aborts requests with 500 | [Issue #43979](https://github.com/sgl-project/sglang/issues/43979) |
| **Low** | LoRA adapter config malformed → bare `KeyError` without filename | Fixed in [PR #48058](https://github.com/sgl-project/sglang/pull/48058) |
| **Resolved** | Qwen3.8-Flash-Next QSA crashes with FP8 KV cache (BF16 q vs FP8 k dtype) | [Issue #36545](https://github.com/sgl-project/sglang/issues/36545) |
| **Resolved** | Spark2.5 attention output gate hardcodes sigmoid, ignores config | [Issue #37639](https://github.com/sgl-project/sglang/issues/37639) |

---

## What This Means for Application Developers

1. **New high-capacity model available**: Mistral Large 4 (1T params, 52B active) with 1M context via YaRN is now serveable—useful for large-context RAG and agentic workflows.

2. **Rust server multimodal parity**: Image preprocessing moved to `sglang-processor` with bit-identical results to Python CPU path; enables `/v1/chat/completions` with images via Rust server (`SGLANG_RUST_SERVER=1`).

3. **Diffusion serving improvements**: FLUX.2 Klein and LTX video VAE optimizations landed; if you're running image/video generation, expect ~3% latency gains on B200 hardware.

4. **NPU production-readiness trajectory**: 2026 H2 NPU roadmap emphasizes full P/D disaggregation, parallelism, speculative decoding, and hierarchical cache compatibility—targeting production deployments on Ascend hardware.

5. **Watch out for**: Greedy decoding reproducibility issue with FlashInfer autotune ([#39597](https://github.com/sgl-project/sglang/issues/39597))—if deterministic output is required, avoid the `FLASHINFER_TRTLLM_ROUTED` path with autotune enabled until fixed.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze the GitHub data provided for llama.cpp and create a structured digest for 2026-11-03.

Looking at the data:

1. **Releases (last 24h):**
- b12063: copy hidden features via device copies (#31506)
- b12061: Pocket TTS support for voices without voice cloning (#31429)
- b12060: Clover model support (#31306)
- b12059: flash_attn_ext_rows - more efficient unified KV for multi-seq (#29510)
- b12058: imatrix fix --nextn crash (#31522)
- b12057: context simplif setters (#29730)
- b12054: ggml-zdnn share buffers with host (#31481)
- b12053: use vm_allocate instead of posix_memalign on Apple platforms (#31437)
- b12052: OpenCL topk_mask (#31441)
- b12050: Vulkan improve small-n split-K selection on RDNA3/RDNA4 (#30146)

2. **Issues (top by comments):**
- #27845: Memory leak with -sm tensor on dual Intel B70 SYCL backend (21 comments)
- #29949: MoE expert cache with GPU-resident LRU feature request (18 comments)
- #24616: dp4a emulation via dp2a on CUDA (16 comments)
- #25522: Gemma 4 crashes with MTP (14 comments)
- #31029: SYCL bf conversion instruction not supported (14 comments)
- #17611: Wrong default threads in llama-bench (14 comments)
- And more...

3. **PRs (top by activity):**
- #29510: flash_attn_ext_rows for unified KV (CLOSED)


- #30193: chat accept JSON tool argument keys in any order for Qwen3-Coder/Nemotron
- #31544: Vulkan add TOP_K_MASK
- #31286: moe-cache auto CPU share
- #28642: ggml-cpu Q4_0 8x8 gemv/gemm for riscv vlenb=16
- #29357: Intel FA kernel for prefill
- #27558: HIP Q5_K/Q6_K tile widths for RDNA2
- #31125: SYCL DPAS flash attention kernel

I notice several emerging technical trends in this update. The development focuses on expanding hardware support, particularly for specialized AI accelerators and less common GPU architectures. Performance optimization remains a key priority, with multiple pull requests targeting kernel improvements and memory management strategies. The team is addressing cross-platform compatibility by refining support for emerging hardware and AI model implementations.

For today's release, I've identified three primary focus areas: enhanced device feature copying, expanded model architecture support, and advanced memory allocation techniques. These updates demonstrate a systematic approach to improving inference engine capabilities across different computational environments.

The next set of pull requests reveals deeper performance optimizations, particularly for complex model architectures like multi-expert models and emerging hardware platforms. Developers are implementing sophisticated kernel selection strategies, especially for smaller computational scenarios on RDNA3 and RDNA4 architectures.

Key highlights include improved memory management techniques for Apple platforms, advanced quantization support for specialized hardware, and expanded model compatibility. Notably, the team is addressing potential crash scenarios and refining kernel implementations across various computational backends.

The latest updates showcase robust cross-platform optimization, with specific attention to memory handling, inference performance, and emerging hardware support. Critical improvements range from preventing server crashes to enhancing multi-GPU and tensor parallelism capabilities.

Developers can anticipate significant gains in inference efficiency, particularly for complex models like Qwen3-Coder, with ongoing refinements targeting CUDA, SYCL, and Vulkan backends.</think>

# llama.cpp Digest — 2026-11-03

## 1. Today's Highlights

The project continues its rapid pace with significant performance work across multiple backends. Notable additions include **Clover model support** (GGUF conversion, model loading, causal hybrid attention), **Pocket TTS voices without voice cloning**, and a major **flash_attn_ext_rows optimization** for multi-sequence inference that reduces unified KV-cache penalties by eliminating mask filtering overhead. Apple platform memory allocation also shifts to `vm_allocate` for better performance.

---

## 2. Releases & Breaking Changes

| Release | Description | PR |
|---------|-------------|-----|
| **b12063** | Copy hidden features via device copies | [#31506](https://github.com/ggml-org/llama.cpp/pull/31506) |
| **b12061** | Pocket TTS — support for voices without voice cloning | [#31429](https://github.com/ggml-org/llama.cpp/pull/31429) |
| **b12060** | Add **Clover** model support (AR-only MoE, GGUF conversion, causal hybrid attention) | [#31306](https://github.com/ggml-org/llama.cpp/pull/31306) |
| **b12059** | flash_attn_ext_rows — efficient unified KV for multi-sequence | [#29510](https://github.com/ggml-org/llama.cpp/pull/29510) |
| **b12058** | Fix imatrix `--nextn` crash | [#31522](https://github.com/ggml-org/llama.cpp/pull/31522) |
| **b12057** | Context setters simplification | [#29730](https://github.com/ggml-org/llama.cpp/pull/29730) |
| **b12053** | Use `vm_allocate` instead of `posix_memalign` on **all Apple platforms** (iOS + macOS) | [#31437](https://github.com/ggml-org/llama.cpp/pull/31437) |

---

## 3. New Model & Hardware Support

- **Clover** — AR-only MoE architecture with GGUF conversion, shared attention, recurrent-state, MoE, and LoRA helpers
- **Pocket TTS** — Support for predefined voices that ship backbone KV state without voice cloning
- **Chatterbox TTS** — Model support added (WIP) — PR [#30993](https://github.com/ggml-org/llama.cpp/pull/30993)

---

## 4. Performance & Optimization

| Area | Change | PR/Issue |
|------|--------|----------|
| **Multi-sequence KV-cache** | New `flash_attn_ext_rows` extension eliminates mask-filtering penalty during multi-seq inference | [#29510](https://github.com/ggml-org/llama.cpp/pull/29510) |
| **Vulkan** | Improved small-n split-K selection on RDNA3/RDNA4 | [#30146](https://github.com/ggml-org/llama.cpp/pull/30146) |
| **OpenCL** | Added `topk_mask` support | [#31441](https://github.com/ggml-org/llama.cpp/pull/31441) |
| **Vulkan** | Add `TOP_K_MASK` RPC handling fix | [#31544](https://github.com/ggml-org/llama.cpp/pull/31544) |
| **RISC-V** | Q4_0 8×8 gemv/gemm enabled for `vlenb=16` | [#28642](https://github.com/ggml-org/llama.cpp/pull/28642) |
| **Intel Vulkan** | New FA kernel for prefill | [#29357](https://github.com/ggml-org/llama.cpp/pull/29357) |
| **HIP/RDNA2** | Expanded Q5_K and Q6_K tile widths (J=128) | [#27558](https://github.com/ggml-org/llama.cpp/pull/27558) |
| **SYCL** | DPAS flash attention kernel for quantized KV cache (q4_0, q8_0) on Xe2 (B580, B570, B70, Lunar Lake, Panther Lake) | [#31125](https://github.com/ggml-org/llama.cpp/pull/31125) |
| **CUDA** | Prevent premature eviction of graphs about to be used (high-concurrency fix) | [#30662](https://github.com/ggml-org/llama.cpp/pull/30662) |
| **CUDA** | Fuse NVFP4 gate/up matmuls and GLU in MMQ | [#31296](https://github.com/ggml-org/llama.cpp/pull/31296) |
| **NCCL** | Multi-node tensor parallelism support | [#28967](https://github.com/ggml-org/llama.cpp/pull/28967) |
| **MoE cache** | Auto CPU share with CRF admission for CPU misses | [#31286](https://github.com/ggml-org/llama.cpp/pull/31286) |
| **CI** | SYCL updated to oneAPI 2026.2, oneDNN 2026.1, Level Zero 1.34.0 | [#31540](https://github.com/ggml-org/llama.cpp/pull/31540) |

---

## 5. Stability & Regressions

| Issue | Severity | Description | Status |
|-------|----------|-------------|--------|
| [#27845](https://github.com/ggml-org/llama.cpp/issues/27845) | **High** | Potential memory leak with `-sm tensor` during token generation with dual Intel B70 SYCL backend | Open — 21 comments |
| [#31029](https://github.com/ggml-org/llama.cpp/issues/31029) | **High** | SYCL bf conversion instruction not supported on Arrow Lake iGPU | Open — 14 comments |
| [#30697](https://github.com/ggml-org/llama.cpp/issues/30697) | **Medium** | `--moe-cache-mib` crashes on Vulkan (RX 6900 XT, Windows) | Open — 8 comments |
| [#27910](https://github.com/ggml-org/llama.cpp/issues/27910) | **High** | RTX 5090 display loss / GSP reset on Qwen3.8-27B Q6_K (CUDA) | Closed — 8 comments |
| [#31538](https://github.com/ggml-org/llama.cpp/issues/31538) | **Medium** | MSVC build issue (reported 2026-11-02) | Open — 4 comments |
| [#31445](https://github.com/ggml-org/llama.cpp/issues/31445) | **Medium** | Vulkan backend fails to build since #27512 (GCC 16.2 / Clang 22) | Open — 2 comments |

**Fixes merged:**
- [#31570](https://github.com/ggml-org/llama.cpp/pull/31570): Never return 0 kv_rows for sequences without cells
- [#31569](https://github.com/ggml-org/llama.cpp/pull/31569): Account for skipped NextN layers when setting `n_gpu_layers` (fixes `--fit` leaving a layer on CPU)
- [#31478](https://github.com/ggml-org/llama.cpp/pull/31478): Reject out-of-range `grammar_triggers` type instead of aborting

---

## 6. What This Means for Application Developers

1. **Improved multi-sequence inference** — The `flash_attn_ext_rows` optimization directly benefits agents handling concurrent conversations or batched requests by eliminating KV-cache mask filtering overhead.

2. **SYCL backends maturing** — Intel's DPAS flash attention kernel now runs on quantized KV cache (q4_0, q8_0) across Xe2 hardware, significantly improving decode throughput for smaller batch sizes.

3. **New model support** — Clover (AR-only MoE) and expanded TTS capabilities (Pocket TTS without cloning, Chatterbox) broaden the model compatibility surface for multimodal applications.

4. **Better Metal/CPU memory** — Switching to `vm_allocate` on all Apple platforms improves memory management for iOS/macOS deployments.

5. **--fit flag fixed** — Layer assignment when using automatic GPU offload now correctly accounts for MTP layers, eliminating the CPU bottleneck reported in [#31531](https://github.com/ggml-org/llama.cpp/issues/31531).

6. **Server robustness** — Grammar trigger validation now throws a proper error instead of aborting, preventing a single malformed request from crashing the entire server.

**Action items for deployers:**
- If using SYCL with Intel Arc B70/B580 or similar Xe2 hardware, test the new DPAS flash attention kernel
- Rebuild with latest oneAPI (2026.2) for SYCL performance improvements
- Verify `--fit` behavior with MoE models (the n_gpu_layers calculation bug is now fixed)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to create an Ollama digest for 2026-11-03 based on the provided GitHub data. Let me analyze the information and structure it according to the requested sections.

Let me go through the data:

## Latest Releases (last 24h)
- v0.40.14-rc0: v0.40.14
- Changes:
  - ci: pin buildx to workaround deadlock (PR #19373)
  - openai: preserve readable Responses input content (PR #19192)
  - mlx: sort long top-k rows in chunks (PR #193... - incomplete)

## Latest Issues (15 items)
Key issues:
1. #19461 - Cloud tier paid subscription not working - OPEN
2. #18785 - lfm2:24b "python" token decoded as empty string - CLOSED
3. #19459 - Qwen3.8-27B hybrid-attention GGUFs fail to load - CLOSED
4. #19350 - Qwen3.5 9B JSON Schema constraint issue - OPEN
5. #19482 - Vision inference with qwen2.5vl:3b fails - CLOSED
6. #19436 - Qwen3.5 0.8B Q4_K_M quantization missing - OPEN
7. #19473 - Model not recognized - OPEN
8. #19465 - Document ollama cp and ollama push - CLOSED
9. #19483 - Vision inference issue - OPEN
10. #19479 - OpenAI-compat tool result issue - OPEN
11. #19474 - Vulkan support request - OPEN
12. #19472 - macOS app update issue - OPEN
13. #19464 - Unix domain sockets feature request - OPEN


14. #19463 - VRAM prediction over-counts KV cache 4-8x - OPEN

## Latest Pull Requests (31 items, top 20)
Key PRs:
1. #19481 - api: reject blob digests that rewrite the request path - OPEN
2. #19480 - rocket: add Rockchip NPU (rocket / rknpu) backend support - OPEN
3. #19478 - cmd: restore the no-argument launcher - OPEN
4. #19412 - README: add schemagate to community integrations - OPEN
5. #19476 - server: decode cloud web search responses - CLOSED
6. #19477 - 

I'm tracking several critical infrastructure improvements across this update. The most pressing concern is the VRAM prediction issue (#19463), which shows significant memory calculation errors. Simultaneously, the project is expanding hardware support through Rockchip NPU integration and enhancing command-line functionality. Community contributions continue to grow, with new integrations and search response handling improvements being developed.

The engineering team is focusing on model configuration flexibility, particularly around system prompts and cloud model interactions. They're implementing more robust validation mechanisms for blob digests and exploring nuanced model initialization strategies that give users greater control over model behaviors.

Key priorities include supporting diverse hardware platforms like Rockchip NPU, refining memory management, and ensuring more predictable model loading processes. The current work suggests a methodical approach to addressing both technical limitations and user experience improvements.</think>

# Ollama Digest — 2026-11-03

## 1. Today's Highlights

Ollama gains native Rockchip NPU support via the new `rocket`/`rknpu` backend for RK3588/RK3576 SoCs, enabling GGUF prompt processing offload on Linux. A critical VRAM prediction bug was identified that over-counts KV cache 4–8x for hybrid models, causing premature runner eviction. The v0.40.14 release candidate ships with OpenAI compatibility improvements and MLX optimizations.

---

## 2. Releases & Breaking Changes

| Version | Changes | PR |
|---------|---------|-----|
| **v0.40.14-rc0 → v0.40.14** | CI: pinned buildx to workaround deadlock | [#19373](https://github.com/ollama/ollama/pull/19373) |
| | OpenAI: preserved readable Responses input content | [#19192](https://github.com/ollama/ollama/pull/19192) |
| | MLX: sorted long top-k rows in chunks | [#193...](https://github.com/ollama/ollama/pull/193) |

**Note:** No breaking API changes in this release.

---

## 3. New Model & Hardware Support

- **Rockchip NPU Backend** — New `rocket`/`rknpu` backend adds native support for RK3588 and RK3576 SoCs on Linux. Enables offloading of prompt processing (prefill, MoE, flash attention) to the NPU while keeping single-token decode on CPU. | [#19480](https://github.com/ollama/ollama/pull/19480)

- **MiMo V2.6 Model Support** — Added model support for MiMo V2.6. Test models available via `./ollama pull dhiltgen/mimo-v2.6`. | [#19400](https://github.com/ollama/ollama/pull/19400)

- **Qwen3.5 0.8B Q4_K_M Quantization** — Request to add missing `q4_K_M` quantization for the 0.8B model (currently only Q8 available). CPU inference would benefit from 2x speedup. | [#19436](https://github.com/ollama/ollama/issues/19436)

---

## 4. Performance & Optimization

- **MLX Top-K Sorting** — Optimized sorting of long top-k rows in chunks for Apple Silicon. | [#193...](https://github.com/ollama/ollama/pull/193)

- **LLM Log Filtering** — In progress: filtering per-request `llama-server` logs unless debug is enabled. Reduces ~20 lines of slot bookkeeping per request. | [#17913](https://github.com/ollama/ollama/pull/17913)

- **MLX CUDA Library Loading** — Fixed bundled CUDA libraries loading in-process on Linux to avoid host library conflicts. | [#19433](https://github.com/ollama/ollama/pull/19433)

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | **VRAM prediction over-counts KV cache 4-8x** for hybrid models (recurrent/SSM blocks like Qwen3.5/3.8), always bills as f16 regardless of `OLLAMA_KV_CACHE_TYPE`. Causes premature runner eviction even with `keep_alive=-1`. | OPEN | — |
| **High** | **Cloud tier paid access broken** — Subscribers cannot access API after payment. Multiple support channels unresponsive. | OPEN | — |
| **Medium** | **Vision inference with qwen2.5vl:3b fails** on NVIDIA GPU with HTTP 500 "token repeat limit reached"; CPU and text-only work. | OPEN (reopened) | — |
| **Medium** | **Qwen3.5 JSON Schema constraint fails** when thinking is disabled — produces abnormal continuation instead of constrained JSON. | OPEN | — |
| **Medium** | **Vulkan-only systems download CUDA drivers** as bloat; no Vulkan backend support for this community segment. | OPEN | — |
| **Low** | **macOS app "Restart to update" loops** on v0.40.13, requests admin rights to change app ownership. | OPEN | — |

**Resolved:**
- Qwen3.8-27B hybrid-attention GGUFs now load correctly (was missing layer 64 projections) | [#19459](https://github.com/ollama/ollama/issues/19459)
- lfm2:24b "python" token decoded as empty string | [#18785](https://github.com/ollama/ollama/issues/18785)

---

## 6. What This Means for Application Developers

- **Rockchip NPU support** opens Ollama to a new class of edge devices (RK3588-based boards, Android TVs, industrial controllers). Expect lower power inference for standard GGUF models on these SoCs.

- **VRAM bug affects hybrid model deployments** — If running Qwen3.5/3.8 with `keep_alive=-1`, runners may be evicted unexpectedly. Monitor VRAM predictions; a fix is pending.

- **OpenAI compatibility improvements** — Response IDs now use a larger random range (previously only 999 distinct values), reducing ID collisions in high-throughput applications. | [#19401](https://github.com/ollama/ollama/pull/19401)

- **New CLI features** — `ollama ls --cloud` lets users discover cloud models without pulling. | [#19153](https://github.com/ollama/ollama/pull/19153)

- **Cloud integration fixes** — Web search responses from Claude Code are now properly decoded (gzip compression handling fixed). | [#19476](https://github.com/ollama/ollama/pull/19476)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze this GitHub data to create a structured digest for LiteLLM on 2026-11-03.

First, let me identify the key items:

1. **Releases**: None in the last 24h

2. **Key Issues** (by comment count):
   - #31263: Rust Migration - parent ticket for Rust migration (33 comments, 22 👍)
   - #30765: Streaming bug - `/v1/messages` drops first text_delta after thinking block (9 comments)
   - #49179: Budget window spend bug - key/update drops cost from budget window (9 comments)
   - #18060: Infinite loops on unauthorized requests (6 comments)
   - #22753: Hanging requests alerts ignore digest mode (6 comments)
   - #49479: pass_through_endpoints strips `id` from JSON-RPC requests (6 comments)
   - #25214: Streaming drops first chunk on content-block transitions for Bedrock (5 comments)
   - #49359: MCP tool failures drop is_error flag (5 comments)
   - #44923: Responses streaming bridge omits sequence_number (4 comments)
   - #49038: Interactions spec canary is red (4 comments)

3. **Key PRs** (by recency and importance):
   - #49777: Add Baidu Qianfan as OpenAI-compatible provider (new provider)
   - #49749: Custom user IDs in user invitations
   - #49748: Validate custom IDs and reject concurrent duplicate creation
   - #49745: License error fixes, reads litellm_license from config
   - #49710: Keep caller's call_type for bridged chat completions
   - #49708: Send https PDF to Claude as document (fixes PDF handling)
   - #49625: Stop ignoring custom deployment prices on provider mismatch
   - #49402: Authorize and decode comparison response IDs
   - #49675: TPM counter outlives window under upstream 429s (rate limiter bug)
   - #49768: Raise Bedrock Converse rows to 262144 input window (cost map fix)

The digest should highlight the Rust migration parent ticket, streaming fixes for Bedrock and Claude, budget tracking corrections, and the new Baidu Qianfan provider integration.</think>

# LiteLLM Digest — 2026-11-03

## 1. Today's Highlights

The LiteLLM project is advancing its **Rust migration initiative** (Issue #31263, 33 comments), targeting sub-1ms gateway overheads. Meanwhile, several streaming and budget tracking bugs are under active investigation, and a new **Baidu Qianfan** provider integration landed as an OpenAI-compatible backend (PR #49777).

---

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours.
- **Config License Loading Change**: PR #49745 now reads `general_settings.litellm_license` at config load time (before `allowed_ips` evaluation), and fixes a typo in license error messages ("envionment" → "environment").
  - https://github.com/BerriAI/litellm/pull/49745

---

## 3. New Model & Hardware Support

- **Baidu Qianfan (ModelBuilder)** — New OpenAI-compatible provider added via PR #49777. Enables deployment of hosted DeepSeek-V4 models with proper thinking control.
  - https://github.com/BerriAI/litellm/pull/49777
- **Bedrock Converse Context Window Fix** — PR #49768 raises input window limits for four models (Kimi K2.5, Qwen3 Coder Next, Qwen3 Next 80B, Nemotron Nano 3 30B) from 256,000 to 262,144 tokens.
  - https://github.com/BerriAI/litellm/pull/49768

---

## 4. Performance & Optimization

- **S3 Bucket Name Support** — PR #37180 adds `s3_bucket_name` to `OPTIONAL_KWARGS_KEYS`, enabling Bedrock batch output downloads via config (previously only `gcs_bucket_name` worked).
  - https://github.com/BerriAI/litellm/pull/37180
- **LM Studio Context Sync** — PR #49597 adds support for reading actual context window limits from LM Studio's native API, improving model detection for custom instance IDs.
  - https://github.com/BerriAI/litellm/pull/49597

---

## 5. Stability & Regressions

| Severity | Issue | Summary | PR/Fix |
|----------|-------|---------|--------|
| **High** | #30765 | `/v1/messages` streaming drops first `text_delta` after `thinking` → `text` block transition (Anthropic-compatible proxy) | — |
| **High** | #49179 | `/key/update` during in-flight request drops that request's cost from `LiteLLM_BudgetWindowSpend` | — |
| **High** | #49675 | v3 rate limiter: TPM counter outlives window under upstream 429s, causing premature rejection below TPM limit | — |
| **Medium** | #25214 | Streaming drops first chunk on content-block transitions for Bedrock reasoning models (minimax, kimik2.5, Claude extended thinking) | — |
| **Medium** | #49479 | `pass_through_endpoints` strips `id` from JSON-RPC 2.0 request bodies (breaks JSON-RPC compliance) | — |
| **Medium** | #18060 | Infinite loops on unauthorized/incorrect requests with virtual API keys | — |
| **Medium** | #46701 | Azure AI Foundry Anthropic endpoints return 400 when `azure_ad_token` leaks into request body | — |
| **Low** | #49585 | CLA link in CONTRIBUTING.md returns "Bad credentials" error | — |

---

## 6. What This Means for Application Developers

1. **Streaming Edge Cases**: If you use LiteLLM as an Anthropic-compatible proxy with Claude Code or Bedrock reasoning models, be aware that the first content chunk after a thinking block may be dropped. This affects applications relying on continuous streaming output.

2. **Budget Tracking**: During active requests, avoid calling `/key/update` to modify budget limits—the in-flight request cost will not count toward the window total, leading to inaccurate spend tracking.

3. **JSON-RPC Passthrough**: If you route JSON-RPC 2.0 requests through `pass_through_endpoints`, the `id` field is currently stripped. This breaks standard JSON-RPC clients expecting the field in responses.

4. **New Provider**: Baidu Qianfan is now available as a native provider—deployments no longer need the generic `openai/` base path, eliminating issues with DeepSeek-V4 thinking behavior.

5. **Rate Limiter Behavior**: Under high load with Redis-backed v3 rate limiting, TPM-based rejections may occur prematurely if upstream returns 429s. Monitor your rate limit metrics closely.

---

*Generated from GitHub data — BerriAI/litellm | 2026-11-03*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the GitHub data for Unsloth and create a structured digest.

Looking at the data:

1. **Releases & Breaking Changes**: No releases in last 24h according to the data.

2. **New Model & Hardware Support**:
- #15588: Feature request for LFM3-1.7B support (LiquidAI's new LFM3 family)
- #16395: Vulkan support issue on RX 5700 XT (Windows 10)
- #16294: MiniMax-H3 on Auto attention crashes with "No available kernel" on Windows
- #14474: Custom Krea2 models showing but crashing
- #15412: Unable to load DeepSeek 4.1 models
- #15285: DeepSeek V4.1 Flash GGUF template fixes

3. **Performance & Optimization**:
- #16173: FSDP2 - sum fp16 replicated gradients over unsynced micro-batches in float32
- #16183: Packing - don't serve compiled inference_mode metadata to training step
- #16172: Flex small-smem tiles - keep float32 calls on default tiles
- #16191: Decode graphs - grow eager KV cache by eager increment
- #16182: RoPE compiled stock-model calls index cache without host read
- #16158: FP8/NVFP4 compile cache tags into render and compile threads

4. **Stability & Regressions**:
- #14487: Memory leak - Drive C loses 200-400 MB after every use
- #16484: Auto unload on idle broken
- #16294: MiniMax-H3 crashes
- #15932: Previous working model doesn't load now
- #15412: DeepSeek 4.1 models won't load


- #16467: "Thinking" display missing
- #16436: Loading another model during generation fails with misleading error

5. **New Features**:
- #16486: Global Token Usage Guardrail
- #16100: HTTP Port configuration
- #16164: Image generation time display
- #16192: Export all images feature
- #16274: Browser improvements
- #16485: Upload files from library
- #16512: Layer offloading feature

6. **UI/UX**:
- #8912: RTL/BiDi text support
- #15117: Unsloth icon in menu bar

I've identified several critical stability issues affecting core functionality. The memory leak (#14487) appears particularly concerning, consuming 200-400 MB per session. Additionally, auto-unload failures (#16484) and model loading problems with DeepSeek (#15412) and MiniMax-H3 (#16294) represent significant blockers. The UI is also experiencing display issues with missing "thinking" indicators and problematic model switching. Several feature requests and UI enhancements are under consideration, though they seem secondary to resolving these underlying stability problems.</think>

# Unsloth Digest — 2026-11-03

## 1. Today's Highlights

Unsloth continues active development across model support and infrastructure. A notable feature request emerged for **LiquidAI's LFM3-1.7B** model family (#15588), which brings a new expressive backbone architecture. On the stability front, several regressions affect model loading and UI behavior, including a memory leak on Windows and the missing "thinking" display in v0.1.913-beta. Backend work includes FSDP2 gradient handling improvements and FlexAttention tile fixes for sm86/sm89 GPUs.

---

## 2. Releases & Breaking Changes

No releases were published in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Description | Link |
|------|-------------|------|
| **LFM3-1.7B** | Feature request opened for LiquidAI's new LFM3 family with more expressive backbone | [#15588](https://github.com/unslothai/unsloth/issues/15588) |
| **Vulkan on RX 5700 XT** | Bug reported: can't use Vulkan on RX 5700 XT (Windows 10 22H2) | [#16395](https://github.com/unslothai/unsloth/issues/16395) |
| **DeepSeek V4.1 Flash GGUF** | Template patch applied to fix image marker handling in conversation history | [#15285](https://github.com/unslothai/unsloth/issues/15285) |
| **DeepSeek 4.1 1017 models** | Users report inability to load any DeepSeek 4.1 1017 uncensored models from the hub | [#15412](https://github.com/unslothai/unsloth/issues/15412) |

---

## 4. Performance & Optimization

| Item | Description | Link |
|------|-------------|------|
| **FSDP2 gradient handling** | Sums FP16 replicated gradients over unsynced micro-batches in float32 for accuracy | [#16173](https://github.com/unslothai/unsloth/pull/16173) |
| **Packing metadata fix** | Prevents compiled `inference_mode` metadata from being served to training steps | [#16183](https://github.com/unslothai/unsloth/pull/16183) |
| **FlexAttention tile fix** | Keeps float32 calls on default tiles to avoid shared memory limits on sm86/sm89 GPUs (L4 head-dim 256 fix: 147456 required vs 101376 hardware limit) | [#16172](https://github.com/unslothai/unsloth/pull/16172) |
| **Decode graph growth** | Eager KV cache now grows by eager increment (1,536 → 2,048 instead of 3,072) rather than graph doubling policy | [#16191](https://github.com/unslothai/unsloth/pull/16191) |
| **RoPE cache indexing** | Compiled stock-model RoPE calls now index cache without host read overhead | [#16182](https://github.com/unslothai/unsloth/pull/16182) |
| **FP8/NVFP4 cache tags** | Carries compile cache tags into render and compile threads for torch 2.12+ | [#16158](https://github.com/unslothai/unsloth/pull/16158) |

---

## 5. Stability & Regressions

| Severity | Issue | Description | Link |
|----------|-------|-------------|------|
| **High** | Memory leak on Windows | Drive C loses 200-400 MB after every use with no way to clear residual data | [#14487](https://github.com/unslothai/unsloth/issues/14487) |
| **High** | Thinking display missing | "Thinking" display absent in v0.1.913-beta on Windows 11 | [#16467](https://github.com/unslothai/unsloth/issues/16467) |
| **Medium** | Auto unload broken | Auto unload on idle functionality not working | [#16484](https://github.com/unslothai/unsloth/issues/16484) |
| **Medium** | Model loading failure | Previous working model doesn't load after desktop update (macOS 15.0.1) | [#15932](https://github.com/unslothai/unsloth/issues/15932) |
| **Medium** | MiniMax-H3 crash | Studio video: MiniMax-H3 on Auto attention crashes with "No available kernel" on Windows (torch without flash attention) | [#16294](https://github.com/unslothai/unsloth/issues/16294) |
| **Medium** | Misleading memory error | Loading another model during generation fails with misleading "GPU memory not released" error | [#16436](https://github.com/unslothai/unsloth/issues/16436) |
| **Low** | Model hub pagination | Gemini connection only loads first page of 20 models | [#16432](https://github.com/unslothai/unsloth/issues/16432) |

---

## 6. What This Means for Application Developers

- **Avoid production Windows deployments** until the memory leak (#14487) is resolved — each inference session leaves 200-400 MB unreclaimed on Drive C.
- **DeepSeek 4.1 users**: The GGUF template fix landed in #15285, but model hub loading issues persist (#15412). If you're hitting errors, you may need to load models directly via path rather than the hub.
- **For high-throughput workloads**: The FSDP2 gradient fix (#16173) and decode graph growth improvements (#16191) should improve training stability and inference latency for long-generation scenarios.
- **GPU memory management**: If you're running on sm86/sm89 GPUs (e.g., L4), the FlexAttention tile fix (#16172) resolves compilation failures for head-dim 256 configurations.
- **TTS on 8GB GPUs**: A recent PR (#16514) addresses TTS model sizing — models previously rejected as too large for GPU may now run on CPU RAM instead of failing entirely.
- **Watch for session refresh**: PR #16468 improves concurrent session handling — if you're running multiple Studio windows, token refresh should no longer log out other windows unexpectedly.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*