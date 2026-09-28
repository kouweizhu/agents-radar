# AI Infrastructure Digest 2026-09-28

> Generated: 2026-09-28 01:06 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report for today's AI infrastructure digest. Let me analyze the data from all four projects:

1. **vLLM** (github.com/vllm-project/vllm)
2. **SGLang** (github.com/sgl-project/sglang)
3. **llama.cpp** (github.com/ggml-org/llama.cpp)
4. **Ollama** (github.com/ollama/ollama)
5. **LiteLLM** (github.com/BerriAI/litellm)
6. **Unsloth** (github.com/unslothai/unsloth)

Let me gather the key metrics:

**Issues and PRs:**

vLLM:
- New Issues: 10+ (top: #27433, #44280, #21182, #56868, #48312, etc.)
- New PRs: 10+ (top: #53463, #54335, #50240, #55700, #41457, #58947, etc.)
- Releases: None

SGLang:
- New Issues: ~26
- New PRs: ~20
- Releases: None

llama.cpp:
- New Issues: 15
- New PRs: ~20
- Releases: 11 (b11223-b11213)

Ollama:
- New Issues: 15
- New PRs: ~15
- Releases: None

LiteLLM:
- New Issues: 10
- New PRs: ~10
- Releases: None

Unsloth:
- New Issues: 26
- New PRs: ~10
- Releases: prebuilt-wheels-cu13

**New Model Support:**

vLLM:
- Vulkan support (feature request)


- Packed NVFP4 Qwen4Exp PLE embeddings
- ROCm QK-norm+RoPE+gate kernel
- XPU Graph Default enabled
- GLM-5.3-Flash support emerges as a key development across multiple frameworks

SGLang expands model support with SANA-Video 2.0 and DeepSeek-V4.1 on AMD gfx950. Llama.cpp adds GLM-5.3-Flash and introduces RANK pooling for Qwen3 rerankers, along with IBM zDNN backend. Ollama brings MLX shared weights support, while LiteLLM integrates Tsubasa provider and Cohere Command A+ in Azure. Unsloth focuses on ModelScope and Gigatoken tokenizer integration.

Performance optimizations target inference efficiency. VLLM enhances GDN decode and Qwen3.5 GDN fusion, optimizes KimiViT RoPE, reworks scheduler queues, and implements fixed-token prefill scoring. SGLang concentrates on DeepSeek-V4.1 Flash and MoE configurations for Qwen3.8-Flash-Next, while llama.cpp refines Vulkan GDN kernels, CUDA roll operations, AVX512-FP16 dot products, and SYCUDA FlashAttention implementations.

Infrastructure continues advancing with RPC debug verbosity, VRAM prediction improvements, and token budget controls. LiteLLM introduces native Python inference and route lifecycle tracing, whereas Unsloth addresses block-FP8 training and rowwise FP8 scale axes.

Quantization emerges as a primary optimization vector across multiple frameworks, with vLLM, llama.cpp, and SGLang targeting GDN fusion and kernel improvements. Local inference grows increasingly competitive, particularly in consumer hardware scenarios. Rust-based architectures gain momentum in LiteLLM and Ollama implementations. Emerging hardware support expands to include Vulkan on consumer GPUs, AMD gfx950, Intel XPU, and NVIDIA Blackwell, while multi-modal and reasoning model capabilities advance through prefix caching, MTP corruption fixes, and thinking token budget mechanisms. The agentic tooling ecosystem strengthens through tool call handling enhancements and MCP gateway integration, with cost tracking and monitoring infrastructure maturing alongside token budget and Prometheus metric implementations.</think>

# Cross-Project Comparison: AI Infrastructure Landscape — 2026-09-28

## Ecosystem Overview

Today's activity reflects an AI inference stack in rapid evolution across all layers. **Quantization and kernel fusion** dominate performance work (vLLM, SGLang, llama.cpp, Unsloth), while **Rust gateways** are becoming the architectural foundation for production routing (LiteLLM, Ollama). The local runtime layer (llama.cpp, Ollama) is aggressively pursuing parity with cloud serving on consumer hardware, evidenced by Vulkan GDN tuning and Intel GPU support. Meanwhile, **training/inference convergence** continues as Unsloth pushes block-FP8 training speedups and LiteLLM extends cost-tracking for agentic workflows. The overall trend: a fragmented but maturing ecosystem where inference engines (vLLM/SGLang), local runtimes (llama.cpp/Ollama), gateways (LiteLLM), and training tools (Unsloth) are all racing to support the same frontier models with increasingly sophisticated optimization.

---

## Activity Comparison

| Project | New Issues (24h) | New PRs (24h) | Releases (24h) |
|---------|------------------|---------------|----------------|
| **vLLM** | 10+ | 10+ | 0 |
| **SGLang** | ~26 | ~20 | 0 |
| **llama.cpp** | 15 | ~20 | **11** (b11223→b11213) |
| **Ollama** | 15 | ~15 | 0 |
| **LiteLLM** | 10 | ~10 | 0 |
| **Unsloth** | 26 | ~10 | **1** (prebuilt-wheels-cu13) |

**Observations:**

- **llama.cpp** leads in release velocity with 11 commits; the project maintains a steady cadence of backend fixes and model support updates
- **SGLang** and **Unsloth** have the highest issue volume, indicating active feature development and user engagement
- **vLLM** and **LiteLLM** show balanced issue/PR ratios, suggesting healthy code review and contribution pipelines

---

## Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|-----------|--------|---------|---------|
| **GLM-5.3-Flash (320B)** | — | — | ✅ | — | — | — |
| **DeepSeek-V4.1** | — | ✅ (AMD gfx950) | — | ❌ (image bug) | — | — |
| **Qwen4Exp (NVFP4)** | ✅ | — | — | — | — | — |
| **Qwen3 / Qwen3-VL rerankers** | — | — | ✅ (RANK pooling) | — | — | — |
| **SANA-Video 2.0** | — | ✅ | — | — | — | — |
| **Cohere Command A+ (Azure)** | — | — | — | — | ✅ | — |
| **Mamba-2 / Mamba SSM** | ⚠️ (crash on SM121) | — | — | — | — | ✅ (cu13 wheels) |
| **Gemma 4** | — | — | — | ✅ | — | — |
| **ModelScope integration** | — | — | — | — | — | ✅ |

**Who's ahead:**

- **Multi-modal video**: **SGLang** leads with SANA-Video 2.0
- **Quantized inference on consumer GPUs**: **vLLM** (NVFP4), **Unsloth** (block-FP8)
- **Local/CPU inference**: **llama.cpp** maintains breadth with Vulkan GDN and new architectures
- **Cloud gateway routing**: **LiteLLM** adds Tsubasa, expanding provider matrix

---

## Performance Frontier

Optimization effort is concentrated in five areas across the ecosystem:

| Area | Projects Active | Key Work |
|------|-----------------|----------|
| **Kernel Fusion (GDN/MoE)** | vLLM, SGLang, llama.cpp | Fused GDN decode path (#53463), Qwen3.5 6-way projection (#41457), Vulkan GDN Intel tuning |
| **Quantization (FP8/NVFP4/NF4)** | vLLM, Unsloth | Block-FP8 training 4-15x speedup (#12027), rowwise FP8 scale axis fix, NVFP4 Qwen4Exp PLE |
| **Scheduler / Batching** | vLLM, SGLang | Reworked queue management (#58947), KV holding / deferred waiting sets |
| **Reasoning/Thinking Budgets** | Ollama, LiteLLM | Token budget bounds (#17566), stream-end handling |
| **Distributed Serving** | vLLM, SGLang, LiteLLM | Multi-node all-reduce, async TP, MCP gateway |

**Most impactful single change**: Unsloth's block-FP8 LoRA training fix (#12027) delivers 4-15x speedup — a game-changer for fine-tuning workflows on modern GPUs.

---

## Layer Positioning

| Layer | Projects | Primary Role |
|-------|----------|--------------|
| **Serving Engine** | **vLLM**, **SGLang** | High-throughput cloud inference, tensor-parallel multi-GPU, KV cache management |
| **Local Runtime** | **llama.cpp**, **Ollama** | Consumer hardware inference, no-GPU fallback, portable binaries |
| **Gateway / Routing** | **LiteLLM** | Multi-provider fallback, cost tracking, virtual-key auth, API normalization |
| **Training / Fine-tuning** | **Unsloth** | LoRA/LoRA+ training, block-FP8 quantization, Apple Silicon MLX |

**Key differentiation:**

- **vLLM vs SGLang**: Both target cloud inference; SGLang edges ahead on vision (SANA-Video) and AMD support, while vLLM leads on Blackwell (GB200/GB300) and scheduler sophistication
- **llama.cpp vs Ollama**: llama.cpp is a library/CLI tool for developers; Ollama is an end-user product with Studio UI and one-click deployment
- **LiteLLM as aggregator**: Sits above all inference engines, providing unified API for cost control and fallback across providers

---

## Trend Signals

### What's Real (Shipped Today)

1. **Quantization is the primary lever for inference economics** — block-FP8 training, NVFP4 embeddings, FBGEMM fallbacks all target 2-15x efficiency gains
2. **Rust gateways are the new architectural default** — LiteLLM and Ollama both investing heavily in Rust routing layers (authentication, virtual keys, lifecycle tracing)
3. **Consumer GPU inference is closing the gap with cloud** — Vulkan GDN tuning (llama.cpp), Intel XPU support (vLLM), AMD gfx950 (SGLang) bring competitive performance to sub-$1000 hardware

### What to Watch

| Signal | Implication |
|--------|-------------|
| **DGX Spark (GB10) correctness bugs** — prefix caching + MTP corruption, engine OOM, Mamba-2 crashes | DGX Spark adoption may slow until v0.28.x stable; consider cloud alternatives for production |
| **Ollama streaming token loss bug** (#41236) | Affects real-time applications; monitor for patch |
| **LiteLLM router null response bug** (#43165) | Silent failures in fallback paths — critical for production routing |
| **Unsloth block-FP8 → 4-bit checkpoint conversion** | Enables new fine-tuning + inference pipeline; expect community adoption |
| **MCP gateway in LiteLLM** | Tool-calling standardization moving toward unified MCP protocol |

### For Agent / Application Developers

- **Don't rely on fallback routing** until LiteLLM #43165 is fixed — validate primary path health
- **DGX Spark is not production-ready** for vLLM yet — wait for stability fixes
- **Consider Unsloth for fine-tuning** if you need block-FP8 efficiency on H100/B200
- **Watch for thinking token budgets** — both Ollama and LiteLLM are implementing per-request limits, which will become standard for cost control in agentic loops

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to generate a vLLM digest for 2026-09-28 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the key information:

**Releases & Breaking Changes:**
- No releases in last 24h

**New Issues (top by comments):**
1. #27433 - Batch Invariant Feature and Performance Optimization - 97 comments
2. #44280 - Rust Frontend Feature Parity - 43 comments
3. #21182 - Vulkan support - 32 comments
4. #56868 - GLM-5.3-Flash long-decode degeneration - 31 comments
5. #48312 - Weight Reload Correctness for RL - 20 comments
6. #54363 - Data integrity and I/O liveness for filesystem KV offload - 19 comments
7. #37431 - Mamba-2 Triton kernels crash on SM121 - 18 comments
8. #56370 - Batch invariance broken with SP/async TP - 18 comments (closed)
9. #53912 - prefix caching + MTP corrupts output - 16 comments
10. #48297 - LoRA Adapter Lifecycle for RL - 16 comments

**New PRs (top):**
1. #53463 - Route non-spec GDN decode through fused CUDA kernel
2. #54335 - Add fixed-token prefill scoring
3. #50240 - Count prompt-opened Poolside reasoning tokens
4. #55700 - Add Watchdog for Engine and Worker Monitoring
5. #41457 - Fuse Qwen3.5 GDN in_proj_ba


6. #58947 - Rework scheduler skipped_waiting queue
7. #55993 - Fix ghost demo.py Usage
8. #51373 - Fix/gdn flashinfer fp32 qkv cast
9. #41091 - Allow BackendEnum dynamic register
10. #56273 - Support packed NVFP4 Qwen4Exp PLE embeddings

I'll focus on the most critical PRs that impact system performance and stability. The scheduler queue rework (#58947) and dynamic backend registration (#41091) seem particularly significant for system flexibility and efficiency. The NVFP4 embedding support (#56273) indicates ongoing hardware optimization efforts.</think>

# vLLM Daily Digest — 2026-09-28

## Today's Highlights

The vLLM project sees active kernel optimization work with fused GDN decode paths and scheduler queue improvements. The Rust frontend continues toward feature parity, while multiple correctness bugs affecting DGX Spark (GB10) hardware and hybrid Mamba/GDN models remain under active investigation. No new releases in the last 24 hours.

---

## Releases & Breaking Changes

- **None** — No new releases detected in the last 24 hours.

---

## New Model & Hardware Support

| Item | Description | PR/Issue |
|------|-------------|----------|
| **Vulkan Support** | Feature request to add Vulkan backend to close the gap with llama.cpp on commodity hardware | [#21182](https://github.com/vllm-project/vllm/issues/21182) |
| **Packed NVFP4 Qwen4Exp PLE** | Enable `local-inference-lab/Qwen3.8-Flash-Next-NVFP4` to run on 1× DGX Spark without CPU/disk PLE offloading | [#56273](https://github.com/vllm-project/vllm/pull/56273) |
| **ROCm QK-norm+RoPE+gate Kernel** | Enable fused QK-norm+RoPE+gate Triton kernel for Qwen3-Next/Qwen3.5 on AMD GPUs | [#51406](https://github.com/vllm-project/vllm/pull/51406) |
| **XPU Graph Default** | Intel XPU Graph now enabled by default (PyTorch XPU 2.14+) | [#51600](https://github.com/vllm-project/vllm/pull/51600) |

---

## Performance & Optimization

| Area | Change | Impact | PR/Issue |
|------|--------|--------|----------|
| **GDN Decode Kernel** | Route non-specular GDN decode through the fused CUDA kernel instead of separate Triton ops | Eliminates per-layer overhead for every GDN layer in decode | [#53463](https://github.com/vllm-project/vllm/pull/53463) |
| **Qwen3.5 GDN Fusion** | Fuse `in_proj_ba` into 6-way `MergedColumnParallelLinear` for Qwen3.5 non-LoRA path | Replaces 2 separate projections with 1 fused kernel | [#41457](https://github.com/vllm-project/vllm/pull/41457) |
| **KimiViT RoPE Fusion** | Fuse per-layer QK RoPE into one in-place kernel for Kimi-K3 | **29× speedup** (225.3µs → 7.6µs for 256 tokens, 1 img @ 224×224 on GB300) | [#58651](https://github.com/vllm-project/vllm/pull/58651) |
| **Scheduler Queue** | Rework `skipped_waiting` queue → `kv_holding_waiting` + `deferred_waiting` sets | Better scheduling fairness for requests holding KV blocks | [#58947](https://github.com/vllm-project/vllm/pull/58947) |
| **MiniMax-M3-NVFP4** | First numbers after #48929 correctness fix: EAGLE3 achieves 2.1–2.3× decode on 8× B200 | 1M real-prose envelope benchmark | [#51494](https://github.com/vllm-project/vllm/issues/51494) |
| **Fixed-Token Prefill Scoring** | New `SamplingParams.prompt_logprob_token_ids` and `prompt_logprob_start` for OPD / top-k distillation | Request-level prefill logprob scoring | [#54335](https://github.com/vllm-project/vllm/pull/54335) |

---

## Stability & Regressions

| Severity | Issue | Status | Fix |
|----------|-------|--------|-----|
| **High** | **GLM-5.3-Flash long-decode degeneration** after accumulated reasoning decode (W4A16 quantized, B300) | Open | — |
| **High** | **Prefix caching + MTP corrupts output** on hybrid Mamba/GDN models in v0.28.0 — regression from #43559 | Open | — |
| **High** | **Engine startup OOM on DGX Spark** (GB10, unified memory) — NV_ERR_NO_MEMORY while MemAvailable reports ~22 GiB | Open | — |
| **Medium** | **Batch invariance broken** with sequence parallelism / async TP (`VLLM_BATCH_INVARIANT=1` + `enable_sp`) | **Closed** | #56370 |
| **Medium** | **Mamba-2 Triton kernels crash** with illegal instruction on SM121 (DGX Spark) without `CUDA_LAUNCH_BLOCKING=1` | Open | — |
| **Medium** | **Qwen4Exp QSA indexer** per-chunk logits buffer grows with max_seq_len, causes OOM/hang on GB10 during long prefill | Open | — |
| **Medium** | **Qwen3.8 + DSpark + streaming json_schema** desyncs XGrammar, emits 250k trailing spaces with HTTP 200 | Open | — |
| **Low** | **FP8 Triton MoE below SM89** now produces clear error instead of opaque compile crash | **Fixed** | [#54287](https://github.com/vllm-project/vllm/pull/54287) |
| **Low** | **mamba_ssm_cache_dtype** validation added to reject incompatible dtype before EngineCore crash | **Fixed** | [#54123](https://github.com/vllm-project/vllm/pull/54123) |
| **Low** | **GDN FlashInfer fp32 qkv cast** — fixed crash in GDN linear-attention kernel warmup with `dtype=torch.float32` | **Fixed** | [#51373](https://github.com/vllm-project/vllm/pull/51373) |

---

## What This Means for Application Developers

1. **DGX Spark (GB10) users**: Multiple correctness issues remain open — prefix caching with MTP, long prefill hangs, and engine startup OOM. Consider the v0.28.x stable release until fixes land in main.

2. **Qwen3.5 / Qwen4Exp users**: Kernel fusion work continues to improve throughput. The fused GDN decode kernel (#53463) and 6-way projection (#41457) will reduce decode latency per layer.

3. **RL / LoRA workflows**: Several RFCs address weight reload correctness (#48312), sleep/wake crashes (#48310), and LoRA adapter lifecycle (#48297). These are still in design phase.

4. **Monitoring improvements**: New watchdog mechanism (#55700) for V1 engine enables automatic stack trace capture on hangs — useful for production deployments.

5. **Tool calling fixes**: Bug fixes landed for parser state leakage in non-streaming chat completions with `n > 1` (#58939) and per-tool-round reasoning token counting (#58927).

---

*Generated from github.com/vllm-project/vllm — 2026-09-28*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the provided GitHub data for SGLang and create a structured digest for 2026-09-28.

Looking at the data:

1. **Releases & Breaking Changes**: No releases in the last 24h according to the data.

2. **New Model & Hardware Support**:
- SANA-Video 2.0 support (T2V and TI2V) - Issue #41490 and PR #41492
- DeepSeek-V4.1 on AMD gfx950 (MI350X) - PR #41308
- Cambricon MLU backend prototype - PR #26898
- XPU W4A16 compressed tensors support - PR #40828

3. **Performance & Optimization**:
- DeepSeek-V4.1-Flash on SM120 (RTX PRO 6000) - Issue #33422 mentions 2-7K tok/s vs ~12.5K reported
- MoE config for LFM2.5 on H200 - Issue #32806 mentions 1.37-1.74x kernel headroom
- Fused MoE Triton down-projection config for Qwen3.8-Flash-Next FP8 - PR #39153
- HiCache storage prefetch improvements - Issue #32724
- KV cache usage Prometheus gauge - PR #34714

4. **Stability & Regressions**:
- CUDA coredump tracker - Issue #26340 (320 comments!)
- Streaming bug losing tokens - Issue #41236
- DeepSeek-V4.1 with DFLASH speculative decoding issues - Issue #40843
- Client disconnect crashes engine - Issue #39216
- DisallowedTokensLogitsProcessor crash - Issue #41471
- Abort request issues - Issues #41465, #41474
- DSpark + TP grammar deadlock - Issue #41449


- Hybrid GDN Radix-cache drift - Issue #41351
- Multi-node custom all-reduce regression - Issue #36429

5. **Roadmaps & RFCs**:
- Quantization 2026 H2 roadmap - Issue #31783
- LoRa 2026 Q2 roadmap - Issue #25095
- SGLang Simulator roadmap - Issue #21891
- MORI-UMBP multi-tier KV caching RFC - Issue #27898
- SGLang non-GPU process rust migration - Issue #23206

6. **Infrastructure & CI**:
- CI Test Failures tracking - Issue #17050
- Various CI improvements

I'll synthesize these into a concise digest highlighting the key developments.</think>

# SGLang Digest — 2026-09-28

## Today's Highlights

The SGLang project continues active development across multiple fronts: new model support (SANA-Video 2.0, DeepSeek-V4.1 on AMD), infrastructure improvements, and bug fixes for streaming and speculative decoding. The community is also addressing a high-volume CUDA coredump tracking issue with 320+ comments. No new releases in the last 24 hours.

---

## New Model & Hardware Support

- **SANA-Video 2.0**: Native diffusion support added for `Efficient-Lodel-Video_2.0_5B_720p` T2V and TI2V variants — see [PR #41492](https://github.com/sgl-project/sglang/pull/41492), closing [Issue #41490](https://github.com/sgl-project/sglang/issues/41490)

- **DeepSeek-V4.1 on AMD gfx950**: Integration PR for MI350X series now underway — [PR #41308](https://github.com/sgl-project/sglang/pull/41308) brings DSpark support on gfx950

- **Cambricon MLU Backend**: POC prototype adds in-tree MLU backend for SRT, validated with Qwen3-8B — [PR #26898](https://github.com/sgl-project/sglang/pull/26898)

- **XPU Compressed Tensors**: W4A16 support enabled on Intel XPU by reusing the torch int4pack path — [PR #40828](https://github.com/sgl-project/sglang/pull/40828)

---

## Performance & Optimization

- **Fused MoE Down-Projection**: New Triton config for Qwen3.8-Flash-Next FP8 on H200 NVL (TP2+EP2) — [PR #39153](https://github.com/sgl-project/sglang/pull/39153)

- **KV Cache Usage Metric**: New Prometheus gauge `kv_cache_usage_perc` exposed — [PR #34714](https://github.com/sgl-project/sglang/pull/34714) addresses long-standing gap vs. vLLM parity

- **FlashInfer Checkpoint Integration**: KDA prefill checkpoints now integrated for radix prefix caching — [PR #41400](https://github.com/sgl-project/sglang/pull/41400)

- **HiCache Decode Offload Fix**: Wait for decode offload before retraction to prevent data races — [PR #30899](https://github.com/sgl-project/sglang/pull/30899)

- **DeepSeek-V4.1 Performance Question**: Community reports ~2-7K tok/s prefill on 4× RTX PRO 6000 vs ~12.5K reported on vLLM/marlin — [Issue #33422](https://github.com/sgl-project/sglang/issues/33422) seeks tuning guidance

---

## Stability & Regressions

- **Streaming Token Loss**: Detokenizer state eviction mid-request silently drops up to 5 tokens — [Issue #41236](https://github.com/sgl-project/sglang/issues/41236) (critical severity)

- **Client Disconnect Crash**: Uncaught `asyncio.CancelledError` crashes entire engine — [Issue #39216](https://github.com/sgl-project/sglang/issues/39216) (critical severity)

- **DSpark + TP Grammar Deadlock**: Grammar-constrained request batched with any other request causes GPU deadlock — [Issue #41449](https://github.com/sgl-project/sglang/issues/41449)

- **DisallowedTokensLogitsProcessor Crash**: Two concurrent requests with different token_ids crash the server — [Issue #41471](https://github.com/sgl-project/sglang/issues/41471)

- **Abort Request Prefix Match Bug**: `/abort_request` with a prefix rid aborts all matching requests — [Issue #41474](https://github.com/sgl-project/sglang/issues/41474)

- **Multi-node Custom All-Reduce Regression**: ~19% Llama-4 TP8 regression on GB300 due to rejected custom all-reduce v2 — [Issue #36429](https://github.com/sgl-project/sglang/issues/36429)

- **CUDA Coredump Tracker**: 320+ tracked events from CI — [Issue #26340](https://github.com/sgl-project/sglang/issues/26340)

---

## What This Means for Application Developers

1. **If you serve DeepSeek-V4.1**: AMD gfx950 support is now available; monitor [PR #41308](https://github.com/sgl-project/sglang/pull/41308) for production readiness

2. **If you use streaming**: The token loss bug ([#41236](https://github.com/sgl-project/sglang/issues/41236)) affects high-concurrency scenarios; consider batching or reducing concurrent states until fixed

3. **If you use speculative decoding**: Grammar-constrained speculative decoding with TP can deadlock ([#41449](https://github.com/sgl-project/sglang/issues/41449)); avoid this combination for now

4. **If you need KV cache monitoring**: The new `kv_cache_usage_perc` gauge provides parity with vLLM — upgrade when available

5. **If you use XPU**: W4A16 quantization is now supported — [PR #40828](https://github.com/sgl-project/sglang/pull/40828) enables compressed-tensors workflows

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to create a llama.cpp digest for 2026-09-28 based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Looking at the data:

**Releases:**
- b11223: server - RANK pooling batch splitting for causal LLM rerankers (Qwen3, Qwen3-VL) - #28876
- b11222: common - avoid side effects around params parsing (#29537)
- b11221: common - make string_split<T> throw on invalid values (#29518)
- b11218: jinja - add support for dict builtin (#29477)
- b11217: opencl - refine bin kernel loading condition (#29503)
- b11216: sycl - FWHT kernels for block widths above 512 (#29243)
- b11215: CUDA - tune fp16 tile FlashAttention configs for head sizes 40-112 (#26289)
- b11214: HIP - Enable fattn-mma kernel on cdna for dkq > 256 for large batch sizes (#28907)
- b11213: vulkan - fix argsort kernel selection for Adreno (#29469)
- b11212: common - throw instead of abort on grammar without llguidance (#29516)

**Issues (top issues by comment count):**
- #19466: KV cache saving for vision models doesn't work - 41 comments
- #21725: XDNA backend feature request - 33 comments
- #27428: draft-mtp halves prompt processing on multi-GPU - 21 comments
- #19138: OpenAI Responses API support - 19 comments
- #25751: SWA on Gemma 4 forgets key details - 15 comments


- #9289: changelog: libllama API - 13 comments
- #24343: Gemma4Assistant initialization failure - 13 comments
- #26448: MoE expert weights via PCIe DMA - 11 comments
- #29104: server silently stops processing with /metrics scraping - 10 comments

**Pull Requests:**
- #29476: vulkan - Tune GDN kernel, fix Intel performance
- #29547: cuda - Use byte strides for roll
- #28327: fix(tool-call) - capture non-string args
- #28876: server - enable RANK pooling batch splitting for causal models
- #28940: ci - remove gpu-rocm keyed directory logs
- #29545: ggml - accumulate f16 dot products in f32 on AVX512-FP16
- #29544: rpc - turn GGML_RPC_DEBUG into verbosity level
- #28331: llama-bench - respect -fitc parameter
- #29454: models - handle unwritten rollback snapshot slots
- #29541: ci - add zdnn backend build
- #27773: models - add GLM-5.3-Flash (GLM5-Next) support
- #14891: imatrix - activation-based statistics for GGUF
- #29464: llama-bench - documentation updates
- #15550: quantize - target_bpw_type()
- #27983: quantize - add IQ2_NL and IQ3_NL types (multi-backend)
- #29543: mtmd - handle batch size overflow for non-causal image chunks
- #29542: ci - resolve uninitialized timer value in Windows static builds

Let me structure the digest:

1. **Today's Highlights**
2. **Releases & Breaking Changes**
3. **New Model & Hardware Support**
4. **Performance & Optimization**
5. **Stability & Regressions**
6. **What This Means for Application Developers**

Now I'll write this in a concise, professional manner for infrastructure engineers.</think>

# llama.cpp Digest — 2026-09-28

## Today's Highlights

The project continues heavy backend optimization work with several targeted fixes: Vulkan GDN kernel tuning for Intel GPUs, CUDA roll operation now supports non-contiguous tensors, and AVX512-FP16 dot product overflow is fixed. A notable server improvement enables RANK pooling batch splitting for Qwen3/Qwen3-VL causal rerankers, and the RPC backend gains configurable debug verbosity. Meanwhile, the GLM-5.3-Flash (320B hybrid text-vision model) support has landed.

---

## Releases & Breaking Changes

| Commit | Description | PR |
|--------|-------------|-----|
| b11223 | Server: RANK pooling batch splitting for causal LLM rerankers (Qwen3, Qwen3-VL) | [#28876](https://github.com/ggml-org/llama.cpp/pull/28876) |
| b11222 | Common: avoid side effects around params parsing; register --rpc unconditionally | [#29537](https://github.com/ggml-org/llama.cpp/pull/29537) |
| b11221 | Common: `string_split<T>` throws on invalid values instead of silent failure | [#29518](https://github.com/ggml-org/llama.cpp/pull/29518) |
| b11212 | Common: throw instead of abort on grammar without llguidance | [#29516](https://github.com/ggml-org/llama.cpp/pull/29516) |

**No breaking changes reported** — all items are additive or internal behavior improvements.

---

## New Model & Hardware Support

- **GLM-5.3-Flash** — 320B hybrid model supporting text and vision; 34 KDA linear + 11 DSA layers with mHC and DeLight architecture. See PR [#27773](https://github.com/ggml-org/llama.cpp/pull/27773).
- **Qwen3 & Qwen3-VL Rerankers** — now support batch splitting in RANK pooling, enabling efficient inference for causal LLM-based reranking.
- **IBM zDNN Backend** — added to CI build pipeline (tests not yet enabled). PR [#29541](https://github.com/ggml-org/llama.cpp/pull/29541).

---

## Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **Vulkan GDN** | Kernel tuning for Intel GPUs | ~6.3% improvement on RTX 3090 (ubatch 2048/4096) |
| **CUDA Roll** | Byte strides for non-contiguous tensors | Enables roll on non-contiguous data; fixes test-backend-ops |
| **AVX512-FP16** | Accumulate f16 dot products in f32 | Fixes overflow; ensures identical logits with/without AVX512-FP16 |
| **SYCL FWHT** | Kernels for block widths 1024, 2048, 4096, 8192 | [#29243](https://github.com/ggml-org/llama.cpp/pull/29243) |
| **CUDA FlashAttention** | FP16 tile config tuning for head sizes 40–112 | [#26289](https://github.com/ggml-org/llama.cpp/pull/26289) |
| **HIP fattn-mma** | Enabled on cdna for dkq > 256 with large batches | [#28907](https://github.com/ggml-org/llama.cpp/pull/28907) |
| **Vulkan argsort** | Fixed kernel selection for Adreno GPUs | [#29469](https://github.com/ggml-org/llama.cpp/pull/29469) |
| **RPC Debug** | `GGML_RPC_DEBUG` now a verbosity level (0–3) | [#29544](https://github.com/ggml-org/llama.cpp/pull/29544) |

---

## Stability & Regressions

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| [#29104](https://github.com/ggml-org/llama.cpp/issues/29104) — server silently stops when /metrics scraped by VictoriaMetrics | High | Open | CUDA + Windows; 10 comments |
| [#27428](https://github.com/ggml-org/llama.cpp/issues/27428) — draft-mtp halves prompt processing on multi-GPU layer split | High | Open | Single GPU works; CUDA |
| [#19466](https://github.com/ggml-org/llama.cpp/issues/19466) — KV cache saving fails for vision models | Medium | Closed | 41 comments; re-opened 2026-09-27 |
| [#29499](https://github.com/ggml-org/llama.cpp/issues/29499) — server hangs on Jetson Orin NX (aarch64) after b9016 rewrite | Medium | Open | L4T 36.4.7 |
| [#29494](https://github.com/ggml-org/llama.cpp/issues/29494) — repeat_last_n / dry_penalty_last_n unbounded, causes OOM | Medium | Open | Server allocates multi-GB zero buffer |
| [#29473](https://github.com/ggml-org/llama.cpp/issues/29473) — ggml-hexagon on Snapdragon 7 Gen 4: HMX MUL_MAT returns inf | Medium | Open | HTP v73 |

**Fixes merged:**

- [#29476](https://github.com/ggml-org/llama.cpp/pull/29476) — Vulkan GDN kernel tuning (Intel performance)
- [#29542](https://github.com/ggml-org/llama.cpp/pull/29542) — Windows static test builds: fix uninitialized timer

---

## What This Means for Application Developers

1. **Reranking workloads** — Qwen3/Qwen3-VL rerankers now support batched inference, which should significantly improve throughput for retrieval-augmented generation pipelines.

2. **Quantization roadmap** — IQ2_NL and IQ3_NL types are progressing through reviews (PRs #27983, #27325, #27324, #27322), targeting improved quality for tensors not aligned to 256-element super-block boundaries.

3. **Vulkan users on Intel** — the GDN kernel fix provides measurable speedups (~6%) on integrated graphics.

4. **RPC debugging** — the new verbosity levels (`GGML_RPC_DEBUG=1/2/3`) make it easier to diagnose distributed inference issues.

5. **Vision models** — note that KV cache save/restore for multimodal models remains problematic (#19466); avoid relying on `/slots/{id}/action=save` for vision-enabled models until resolved.

---

*Generated from github.com/ggml-org/llama.cpp — data for 2026-09-28*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate a structured Ollama digest for 2026-09-28 based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Let me go through the data:

**Latest Releases (last 24h)**: None

**Latest Issues** (15 items):
1. #16030 - MLX nvfp4 models slow on MacOS under memory pressure
2. #16946 - llama-server core dumps with GPT-OSS and OLLAMA_KV_CACHE_TYPE=q8_0 (CLOSED)
3. #18527 - deepseek-v4.1-flash silently discards image input (vision capability bug)
4. #18642 - CUDA illegal memory access on RTX 5090 with Cohere MoE (Windows)
5. #18431 - Anthropic-compat system-role messages hoisted to system block
6. #18672 - Intel UHD 0x4626 not detected by Vulkan backend (Windows)
7. #18542 - typical_p parameter no longer supported
8. #18685 - llama-server wedges on full-cache-hit task (CUDA, Linux)
9. #18653 - Cloud API credit balance not exposed after pay-as-you-go migration
10. #18679 - OLLAMA_GPU_OVERHEAD ignored by llama-server backend
11. #18686 - APP/GUI MacOS window opens on Apps tab, sidebar hidden (feature request)
12. #18683 - Billing bug - accounts stuck in Stripe loop
13. #18681 - tool-call opening tags lost across chunk boundaries
14. #18676 - olmo3 tool call bypasses parsing
15. #18669 - Shared Model Weights for Concurrent MLX Inference (feature request - CLOSED)


16. #18689 - readme: add since-cutoff to Terminal & CLI community integrations
17. #18606 - feat: add System One scoring API
18. #18688 - docs: add REQUIRES to modelfile table of contents
19. #17615 - fix(llm): mirror GraphSize KV accounting in PredictServerVRAM
20. #16263 - responses: preserve namespace tool identity
21. #18687 - parsers: end glimmer's free text at the message header with thinking off
22. #18633 - README: add Arynwood MCP to Desktop integrations
23. #17566 - api: bound thinking with a token budget, per request or per model
24. #18233 - docs: fix broken download links in app README
25. #18175 - docs: add AI Novel Writer to community integrations (CLOSED)
26. #18624 - qwen3.5: a tool call can open before the thinking channel is closed
27. #18289 - server: reload when two tags share a blob but need different runner flags
28. #18288 - parsers: drop an unmatched thinking close tag instead of leaking it
29. #18281 - llm: send assistant thinking to the chat template
30. #18212 - llama: end a spent reasoning budget at a line, not mid-word
31. #17914 - qwen3coder: tolerate a dropped closing tag

, and stop rewriting parameter values
32. #17626 - gemma4: do not answer with a channel name the parser was cut off from
33. #17567 - x/mlxrunner/mlx: link against libdl on linux
34. #17565 - gemma4: recover a finished tool call that is missing its closing brace
35. #17564 - server: do not hand over a tool call the model did not finish writing

**Today's Highlights**

No releases in the last 24 hours. The issue queue reveals several stability concerns: a critical CUDA memory violation on RTX 5090 with Cohere MoE models, an Intel UHD Vulkan detection failure on Windows, and llama-server hanging on cache hits with CUDA. Cloud API billing and the Stripe integration also have problems. A new System One scoring API is in progress, with multiple parser improvements addressing tool call handling, thinking budgets, and Qwen3/Gemma4 edge cases. The mlxrunner now supports Linux with libdl linking.

**Releases & Breaking Changes**

No releases.

**New Model & Hardware Support**

No new models.

**Performance & Optimization**

The llm package mirrors GraphSize KV accounting in PredictServerVRAM, which should address Qwen model loading. Multiple PRs tackle tool call parsing across different models—Qwen3.5 tool calls opening before thinking channels close, glimmer free text ending at message headers with thinking disabled, tool call opening tags lost at chunk boundaries, and olmo3 tool calls bypassing parsing entirely. Thinking budgets are also being bounded via token allocation.

**Stability & Regressions**

Several critical issues are flagged: CUDA illegal memory access on RTX 5090 with Cohere MoE, llama-server hanging on full cache hits, deepseek-v4.1-flash silently dropping image input, and llama-server core dumping with q8_0 KV cache. The Vulkan backend isn't detecting Intel UHD on Windows, system-role messages get incorrectly hoisted in Anthropic-compat mode, OLLAMA_GPU_OVERHEAD is being ignored, and the typical_p parameter is no longer supported.

**What This Means for Application Developers**

Developers should anticipate the new System One scoring API and token budget controls for thinking. The community integrations list has expanded with new tools, but broken download links in the app README need attention.</think>

# Ollama Digest — 2026-09-28

## Today's Highlights

No new releases in the last 24 hours. The issue queue shows several high-impact stability bugs: a **critical CUDA illegal memory access** on RTX 5090 with Cohere MoE models, a **cache-hit deadlock** causing llama-server to wedge and hang all subsequent requests, and a **silent image-discard bug** in deepseek-v4.1-flash cloud. On the positive side, multiple parser and API improvements landed, including a new **System One scoring API**, **token-budget bounded thinking**, and fixes for Qwen3/Gemma4 tool-call handling.

---

## Releases & Breaking Changes

| Status | Item | Details |
|--------|------|---------|
| — | **No releases in last 24h** | — |

---

## New Model & Hardware Support

| Component | Update | PR/Issue |
|-----------|--------|----------|
| MLX | Feature request: **Shared Model Weights for Concurrent MLX Inference** on Apple Silicon — would enable very large models to run concurrently | [#18669](https://github.com/ollama/ollama/issues/18669) |

---

## Performance & Optimization

| Area | Change | Impact | PR/Issue |
|------|--------|--------|----------|
| VRAM Prediction | **Mirror GraphSize KV accounting in PredictServerVRAM** — fixes Qwen models loading issue in recent updates | Improves scheduler accuracy for GGML→llama-server migration | [#17615](https://github.com/ollama/ollama/pull/17615) |
| API | **Add System One scoring API** — `POST /v1/systemone` for structured decisions using local Nimble and Tev models | New endpoint for scoring/classification tasks | [#18606](https://github.com/ollama/ollama/pull/18606) |
| Thinking | **Bound thinking with a token budget** — per-request or per-model control to prevent infinite reasoning loops | Prevents context exhaustion; reduces wasted tokens | [#17566](https://github.com/ollama/ollama/pull/17566) |
| Thinking | **End spent reasoning budget at a line, not mid-word** | Cleaner output when reasoning budget exhausts | [#18212](https://github.com/ollama/ollama/pull/18212) |
| Tool Calls | **Qwen3.5: tool call can open before thinking channel is closed** — parser overlap fix | Fixes malformed tool calls in streaming | [#18624](https://github.com/ollama/ollama/pull/18624) |
| Tool Calls | **Glimmer: end free text at message header when thinking off** | Fixes missing first JSON field with `think: false` | [#18687](https://github.com/ollama/ollama/pull/18687) |
| Tool Calls | **Drop unmatched thinking close tag** (Gemma4) | Prevents tag leakage to output | [#18288](https://github.com/ollama/ollama/pull/18288) |
| Tool Calls | **Gemma4: recover finished tool call missing closing brace** | Graceful handling of truncated tool calls | [#17565](https://github.com/ollama/ollama/pull/17565) |
| Tool Calls | **Qwen3-Coder: tolerate dropped closing tag, stop rewriting param values** | Robustness in long agentic sessions | [#17914](https://github.com/ollama/ollama/pull/17914) |
| Tool Calls | **Preserve namespace tool identity** in Responses API | Enables Codex to route to correct MCP tool | [#16263](https://github.com/ollama/ollama/pull/16263) |
| Parsing | **Tool-call opening tags lost across chunk boundaries** — DeepSeek3, Cogito, LFM2 parsers | Parser state-dependent failures | [#18681](https://github.com/ollama/ollama/issues/18681) |
| Parsing | **Olmo3: tool call in terminal chunk bypasses parsing** | Tool calls silently discarded or emitted as content | [#18676](https://github.com/ollama/ollama/issues/18676) |
| MLX (Linux) | **Link mlxrunner against libdl** — fixes build on glibc <2.34 (e.g., Debian 11) | Builds now succeed on older Linux systems | [#17567](https://github.com/ollama/ollama/pull/17567) |
| Scheduler | **Reload when two tags share a blob but need different runner flags** | Correct behavior for Modelfile variants | [#18289](https://github.com/ollama/ollama/pull/18289) |

---

## Stability & Regressions

| Severity | Issue | Impact | Fix PR? |
|----------|-------|--------|---------|
| **CRITICAL** | **CUDA illegal memory access (MUL_MAT)** on RTX 5090 with Cohere MoE architecture — Windows 11 | llama-server crashes with `0xc0000409` | — |
| **HIGH** | **llama-server wedges on full-cache-hit** — CUDA on Linux (RTX 5060 Ti, v0.34.4) | All later requests to that model hang until unload | — |
| **HIGH** | **deepseek-v4.1-flash silently discards all image input** — reports `vision` capability but ignores images | Users get "cannot see image" responses with no error | — |
| **HIGH** | **llama-server core dumps** with `OLLAMA_KV_CACHE_TYPE=q8_0` on GPT-OSS | Service crash; was previously fixed in #11685 but code deleted in commit 19e6796 | — |
| **MEDIUM** | **Intel UHD 0x4626 not detected** by Vulkan backend — Windows, Ollama 0.34.4 | No GPU acceleration on Intel integrated graphics | — |
| **MEDIUM** | **OLLAMA_GPU_OVERHEAD ignored** by llama-server backend — layer placement via `--fit` | VRAM not reserved; models may OOM | — |
| **MEDIUM** | **Anthropic-compat: system-role messages hoisted** into system block, defeating prefix cache | Prefix cache ineffective for Claude Code workflows | — |
| **MEDIUM** | **typical_p parameter no longer supported** — breaks SillyTavern 1.18.0 and other clients that cannot omit it | API incompatibility with existing clients | [#18542](https://github.com/ollama/ollama/issues/18542) |
| **MEDIUM** | **Cloud API: credit balance not exposed** after pay-as-you-go migration | Users cannot see true spend | — |
| **MEDIUM** | **MLX nvfp4 models extremely slow** under memory pressure — MacOS (qwen3.6:27b-nvfp4, qwen3.5:27b-coding-nvfp4) | ~2 min per simple prompt (regression from v0.20.0) | — |
| **LOW** | **Billing: accounts stuck in Stripe loop** — automated retry for unpaid invoice, unresponsive support | Blocks users from using Cloud or upgrading | — |

---

## What This Means for Application Developers

1. **Avoid Cohere MoE on RTX 5090 (Windows)** — a known CUDA memory access bug causes crashes; consider alternative GPUs or wait for a fix.

2. **Watch for cache-hit deadlocks** on CUDA/Linux — if you see requests hang with no response after a full-cache-hit, you may need to unload/reload the model (affects v0.34.4).

3. **Vision models may silently fail** — deepseek-v4.1-flash reports vision capability but discards images; validate image inputs are actually processed.

4. **Plan for thinking token budgets** — the new per-request/per-model token budget feature prevents infinite reasoning loops (useful for Gemma 4 and agentic workflows).

5. **API note: typical_p removed** — if you use SillyTavern or other clients that send `typical_p`, they may break; update client or server.

6. **Community integrations expanded** — new integrations added: Arynwood MCP (Linux desktop), AI Novel Writer, since-cutoff CLI.

7. **Linux MLX builds now work** — fixed linking on older glibc versions; MLX inference on Linux is more accessible.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data for LiteLLM and create a structured digest for 2026-09-28.

Looking at the data:

**Releases:**
- None in the last 24h

**Issues (top by comment count):**
1. #43165 - Router fallback returns null response body after successful fallback (15 comments) - Critical bug
2. #43157 - sanitize_input_schema_for_anthropic drops root anyOf/$ref (7 comments)
3. #42161 - Billed at 0 when provider_response_model is a slug missing from price map (7 comments)
4. #28044 - ChatGPT provider DB-registered models skip ChatGPTResponsesAPIConfig (5 comments)
5. #23766 - Support for mREP endpoint for vertex AI (4 comments, closed)
6. #23990 - OTEL callback never reports token usage breakdown (4 comments, closed)
7. #25738 - WebRTC cost tracking not working (4 comments)
8. #30705 - Anthropic /v1/messages should normalize or reject system role (4 comments, closed)
9. #30816 - Report actual usage cost to SSE clients in streaming mode (4 comments, closed)
10. #32628 - Add support for Cohere Command A+ in Azure (4 comments, closed)

**Pull Requests (top):**
1. #43477 - fix(sail): bill chat requests by the caller's metadata.completion_window
2. #43465 - feat(rust): enable native Python inference opt-in
3. #43466 - feat(rust): add structured route lifecycle tracing
4. #43467 - feat(rust): separate gateway authentication and authorization


5. #43468 - feat(rust): add virtual key storage contracts
6. #43509 - fix(cost-map): set together_ai gpt-oss-20b and gemma-4-31B-it deprecation_date (closed)
7. #43470 - feat(rust): add the MCP gateway
8. #43469 - feat(rust): add gateway UI login and sessions
9. #43208 - fix(dashscope): pass image generation provider params at the top level
10. #43506 - fix(cost-map): sync

I'll focus on the additional pull requests, noting the Rust-related features and fixes. The MCP gateway, UI login, and storage contracts show continued development in authentication and management areas. Cost-map fixes for deprecation dates and price synchronization indicate ongoing maintenance of model metadata.

The most critical issues involve response handling and schema processing. A router fallback bug causing null response bodies and problems with input schema sanitization for Anthropic could significantly impact system reliability. Cost tracking remains a key challenge, with some models potentially being billed incorrectly.

The OpenAI Responses API WebSocket mode shows zero token usage, which could lead to significant tracking problems. A new Rust-based architecture is emerging, introducing features like native Python inference, structured route tracing, and enhanced authentication. New integrations include Tsubasa routing, MCP gateway support, and improvements to DashScope and OCI providers. These developments suggest ongoing refinement of the LiteLLM infrastructure, focusing on compatibility, tracking, and extensibility.</think>

# LiteLLM Digest — 2026-09-28

## Today's Highlights

TheLiteLLM project continues active Rust gateway development with multiple architectural enhancements, while several critical bugs affecting fallback routing and cost tracking remain under active discussion. The most pressing issue is a router bug causing null response bodies after successful fallbacks, which could silently break production deployments.

---

## Releases & Breaking Changes

No new releases detected in the last 24 hours.

---

## New Model & Hardware Support

| Item | Description | PR/Issue |
|------|-------------|----------|
| **Tsubasa provider** | New provider with routing and dashboard discovery | [#43502](https://github.com/BerriAI/litellm/pull/43502) |
| **Cohere Command A+ in Azure** | Added support for new model in Azure | [#32628](https://github.com/BerriAI/litellm/issues/32628) (closed) |
| **Mistral Document AI OCR / Mistral 3.5 Medium** | New Azure model support | [#32637](https://github.com/BerriAI/litellm/issues/32637) (closed) |
| **Vertex AI mREP** | Multi-Region Endpoint support now functional | [#23766](https://github.com/BerriAI/litellm/issues/23766) (closed) |

---

## Performance & Optimization

| Item | Description | PR/Issue |
|------|-------------|----------|
| **Rust: Native Python inference opt-in** | New `python-bridge` routes for chat completions, responses, and inference | [#43465](https://github.com/BerriAI/litellm/pull/43465) |
| **Rust: Structured route lifecycle tracing** | New diagnostic module for audio transcription, chat, messages, OCR, responses, websocket paths | [#43466](https://github.com/BerriAI/litellm/pull/43466) |
| **Sail: bill by caller's completion_window** | Chat requests now billed based on `metadata.completion_window` (`asap`/`balanced`/`flex`) | [#43477](https://github.com/BerriAI/litellm/pull/43477) |
| **Streaming: log early failures** | Text completion streams that fail before first byte now logged properly | [#43505](https://github.com/BerriAI/litellm/pull/43505) |
| **Responses API: preserve signed thinking** | Streamed thinking text no longer duplicated | [#40673](https://github.com/BerriAI/litellm/pull/40673) |
| **DashScope image params** | `watermark` and `negative_prompt` now correctly passed at top level | [#43208](https://github.com/BerriAI/litellm/pull/43208) |

---

## Stability & Regressions

### Critical

| Issue | Description | Status |
|-------|-------------|--------|
| [#43165](https://github.com/BerriAI/litellm/issues/43165) | **Router fallback returns null response body** after successful fallback on primary timeout (non-streaming). Returns HTTP 200 with `null` instead of actual completion. | OPEN — 15 comments |
| [#42161](https://github.com/BerriAI/litellm/issues/42161) | **Streamed requests billed at 0** when `provider_response_model` is a slug missing from price map (e.g., dated Anthropic builds) | OPEN — 7 comments |
| [#41295](https://github.com/BerriAI/litellm/issues/41295) | **Virtual-key model allowlist bypass** on Azure pass-through route — any authenticated virtual key can invoke Azure deployments outside scope | OPEN — 2 comments |

### High

| Issue | Description | Status |
|-------|-------------|--------|
| [#43157](https://github.com/BerriAI/litellm/issues/43157) | `sanitize_input_schema_for_anthropic` drops root-level `anyOf`/`$ref` for union tools, breaking Pydantic-generated schemas | OPEN — 7 comments |
| [#38674](https://github.com/BerriAI/litellm/issues/38674) | **Token usage logged as 0** for Responses API WebSocket mode (`_aresponses_websocket`), breaking cost tracking for Agent CLI traffic | OPEN — 2 comments |
| [#43214](https://github.com/BerriAI/litellm/issues/43214) | `RouterBudgetLimiting` treats `max_budget=0` as unlimited instead of blocking all spend | OPEN — 3 comments |
| [#43010](https://github.com/BerriAI/litellm/issues/43010) | `/v1/responses` streaming with Anthropic doubles thinking text in reasoning `encrypted_content` | OPEN — 2 comments |

### Medium / Fixes Landed

| Issue | Description | Status |
|-------|-------------|--------|
| [#33323](https://github.com/BerriAI/litellm/issues/33323) | `max_budget_limiter` fails open when user spend lookup raises | CLOSED |
| [#30731](https://github.com/BerriAI/litellm/issues/30731) | LLM-as-a-judge guardrail fails open — missing `overall_score` defaults to 100 (pass) | CLOSED |
| [#23990](https://github.com/BerriAI/litellm/issues/23990) | OTEL callback never reports reasoning/cached token breakdown | CLOSED |

---

## What This Means for Application Developers

1. **Fallback behavior is unreliable** — If you're using LiteLLM's router with fallback logic for non-streaming requests, be aware that timeouts may return `null` responses. Monitor your downstream logs carefully until #43165 is resolved.

2. **Cost tracking gaps** — Several issues (#42161, #38674) cause $0 billing for valid requests. If you're using streaming or dated model builds, your cost logs may be underreported.

3. **New Rust gateway features** — The experimental Rust backend is gaining authentication/authorization separation, virtual key storage, MCP gateway support, and UI login. These are not yet production-ready but indicate the direction of future architecture.

4. **Provider integrations** — Tsubasa is now available as a new provider. If you're using OCI GenAI in government regions, endpoint resolution now works correctly (#43180).

5. **Schema handling** — Anthropic tool schemas generated from Pydantic `Union` types may fail due to sanitization stripping `anyOf`. Consider flattening schemas for now if using Anthropic tools.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate an Unsloth digest for 2026-09-28 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases:**
- prebuilt-wheels-cu13: Flash-Attention2, Causal-Conv1D, Mamba_SSM Binaries for CUDA 13, PyTorch 2.13 and 2.14 on Python 3.13

**Issues (26 total, showing key ones):**
- #4504: [bug] Fine-Tuning uses much more VRAM than advertised, causing OOMs
- #1431: [CLOSED] How to manually specify the GPU device number?
- #11385: [Feature] Make RAG UPLOAD_EXTS configurable via environment variable
- #6542: [feature request] chat title fix
- #3485: reinforce(gspo) training didn't yield any improvements
- #11939: Dictation could not access the microphone
- #12041: [feature request] 可以添加中国的模型镜像站吗？ (ModelScope support)
- #12009: [Bug] Unsloth Desktop "unsloth start opencode" generation always caps at 8192 tokens
- #11529: [Bug] Make Hugging Face search work for blocked countries - FIXED with ModelScope support
- #12084: [Bug] Terminal tool hard-freezes the app with VAR=$VAR
- #12140: Bitdefender antivirus false positive
- #12137: macOS Pinyin input method prevents Enter key from sending chat messages
- #12072: [Feature] Support Gigatoken as a tokenizer backend
- #11953: dense-quant capability probe pins CUDA context on every GPU


- #12027: Speed up block-FP8 LoRA training
- #11799: Fix rowwise FP8 scale axes in fused LoRA backward
- #12152: Raise the released torch ceiling to <2.15.0
- #12151: Core: pip extras and auto-install support for torch 2.13 and 2.14
- #12150: Studio: torch 2.13 for new Linux cu130 Python 3.13 installs
- #12098: Fall back from FBGEMM for rowwise FP8 on GPUs it has no kernel for
- #12146: Load block-FP8 checkpoints in 4-bit (NF4) when load_in_4bit=True

The PRs include improvements to block-FP8 LoRA training performance, FP8 scale axis fixes, expanded PyTorch support up to 2.15, and better handling of block-FP8 checkpoints in 4-bit mode.</think>

# Unsloth Digest — 2026-09-28

## Today's Highlights

Unsloth shipped significant infrastructure updates today: prebuilt CUDA 13 wheels for Flash-Attention 2.8.4, Causal-Conv1D 1.7.0, and Mamba-SSM 2.3.2 on Python 3.13 with PyTorch 2.13/2.14 support, plus torch ceiling raised to `<2.15.0`. On the Studio side, multiple PRs landed improving multi-model serving, terminal tool stability, and macOS IME compatibility. A notable performance fix addresses 4-15x slowdowns in block-FP8 LoRA training on modern GPUs.

## Releases & Breaking Changes

- **prebuilt-wheels-cu13** — New Linux x86_64 CUDA 13 wheels for flash-attn 2.8.4, causal-conv1d 1.7.0, and mamba-ssm 2.3.2.post1, built for PyTorch 2.13 and 2.14 on Python 3.13. ([Release](https://github.com/unslothai/unsloth/releases))

- **Torch ceiling raised to `<2.15.0`** — PR #12152 lifts the PyTorch version cap from `<2.13.0` to `<2.15.0`, enabling torch 2.13 on Linux cu130 Python 3.13 installs. ([#12152](https://github.com/unslothai/unsloth/pull/12152))

- **Pip extras for torch 2.13/2.14** — PR #12151 adds Core pip extras (`cu126onlytorch2130`, `cu130onlytorch2130`, etc.) and updates the auto-install helper. ([#12151](https://github.com/unslothai/unsloth/pull/12151))

- **Studio torch 2.13 rollout** — PR #12150 pushes torch 2.13 to new Linux cu130 Python 3.13 Studio installs while preserving existing installations. ([#12150](https://github.com/unslothai/unsloth/pull/12150))

## New Model & Hardware Support

- **ModelScope integration** — Issue #11529 resolved; Chinese model mirror (ModelScope) is now supported for Hugging Face-blocked regions. ([#11529](https://github.com/unslothai/unsloth/issues/11529), [PR #11761](https://github.com/unslothai/unsloth/pull/11761))

- **Gigatoken tokenizer backend** — Feature request #12072 asks for Gigatoken support as a high-throughput tokenizer with HF-compatible interface. ([#12072](https://github.com/unslothai/unsloth/issues/12072))

- **FBGEMM fallback for rowwise FP8** — PR #12098 adds fallback from FBGEMM for rowwise FP8 on GPUs without kernels (RTX PRO 6000 / RTX 5090, sm120). ([#12098](https://github.com/unslothai/unsloth/pull/12098))

- **Multi-model serving** — PR #11591 enables Studio to keep multiple models loaded simultaneously with a "Keep other models loaded" toggle. ([#11591](https://github.com/unslothai/unsloth/pull/11591))

## Performance & Optimization

- **Block-FP8 LoRA training speedup** — PR #12027 fixes a major performance regression: block-FP8 LoRA training was 4-15x slower than bf16 (RTX PRO 6000: 8.9x, L4: 14.9x, H100: 7.9x, B200: 3.7-6.5x). The fix runs FP8 linears eagerly with 8 warps for 128-row GEMM tiles. ([#12027](https://github.com/unslothai/unsloth/pull/12027))

- **Rowwise FP8 scale axis fix** — PR #11799 corrects silent misapplication of rowwise FP8 scales along the wrong axis in fused LoRA backward pass. ([#11799](https://github.com/unslothai/unsloth/pull/11799))

- **Block-FP8 → 4-bit conversion** — PR #12146 enables loading block-FP8 checkpoints in 4-bit NF4 when `load_in_4bit=True` is explicitly passed. ([#12146](https://github.com/unslothai/unsloth/pull/12146))

- **MLX memory planning** — PR #10287 adds Apple Silicon MLX memory estimation to the Load Model panel. ([#10287](https://github.com/unslothai/unsloth/pull/10287))

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | #4504: Fine-tuning uses significantly more VRAM than advertised, causing OOMs on large models | OPEN — 22 comments |
| **High** | #12084: Terminal tool hard-freezes app with `VAR=$VAR` self-referential assignments (unbounded recursion in pre-dispatch scan) | OPEN |
| **Medium** | #12048: Tool calls stuck in 'Running' state indefinitely past max duration | OPEN — fix in progress |
| **Medium** | #12137: macOS Pinyin IME prevents Enter from sending messages | OPEN — fix PR #12138 |
| **Medium** | #11953: Dense-quant probe pins CUDA context on every GPU (~360 MB idle) | CLOSED |
| **Medium** | #12009: `unsloth start opencode` caps at 8192 tokens ignoring max_tokens | OPEN — fix PR #12111 |
| **Low** | #12140: Bitdefender false positive on Windows installer | OPEN |
| **Low** | #12058: Random "Invalid base64 value" errors with valid MCP images | OPEN |

## What This Means for Application Developers

1. **If you use block-FP8 checkpoints**: Upgrade promptly — PR #12027 delivers massive training speedups (up to 15x on L4). Also note the new 4-bit fallback via PR #12146 for mixed quantization workflows.

2. **If you run Studio on macOS**: The Pinyin IME bug (#12137) is fixed in PR #12138; expect proper Enter key behavior.

3. **If you use the terminal tool**: PR #12087 fixes credential scan hangs; terminal commands with shell variable expansions no longer risk indefinite blocking.

4. **If you target modern GPUs (RTX PRO 6000/5090)**: Rowwise FP8 now falls back gracefully via PR #12098 instead of crashing.

5. **If you need Chinese model sources**: ModelScope is now integrated (#11529), solving HF access issues for users in restricted regions.

6. **If you need multi-model inference**: Studio now supports serving multiple models simultaneously (#11591) — useful for A/B testing or ensemble workflows.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*