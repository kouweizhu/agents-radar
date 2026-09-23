# AI Infrastructure Digest 2026-09-23

> Generated: 2026-09-23 00:53 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report covering vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me synthesize the information from all the individual digests I created.

Let me organize this systematically:

## Activity Comparison (from today's digests)

| Project | Issues (open/total) | PRs (merged today) | Releases (24h) |
|---------|---------------------|---------------------|----------------|
| vLLM | ~15 key issues | 15+ PRs | v0.30.0 |
| SGLang | 10+ issues | 12+ PRs | None |
| llama.cpp | 6 issues | 15 commits | None |
| Ollama | ~10 issues | 8+ PRs | None |
| LiteLLM | 10 issues | 10+ PRs | v1.102.0 |
| Unsloth | 8 issues | 8+ PRs | 3 betas |

## Model Support Race
- vLLM: DeepSeek-V4.1-Flash, DeepGEMM Mega-mHC, Kimi-K3 (MI355X)
- SGLang: Kimi-K3 MXFP4, SenseNova-U1, DeepSeek-V4.1
- llama.cpp: IQ4_NL support, various quantized variants
- Ollama: Gemma 4 dynamic resolution, MIMO v2.5 (requested)
- Unsloth: Qwen-Image-2.1, LongCat-Flash-Lite-Sparse, ModelOpt FP8

## Performance Frontier
- vLLM: MXFP8/FP4 KV cache, CUDA graphs, Triton kernels
- SGLang: DCP/Helix parallelism, RTX-LLM attention, LMCache


- llama.cpp: Vulkan/Xe flash attention, SYCL MoE, IQ quantization
- Ollama: MLX optimization, llama.cpp updates
- LiteLLM: Redis budget sync, Rust cost calc
- Unsloth: NVFP4 per-layer, VAE compile, reasoning blocks

## Layer Positioning
- vLLM: Production serving engine
- SGLang: Production serving + distributed
- llama.cpp: Local inference runtime
- Ollama: Local app runtime
- LiteLLM: Gateway/proxy
- Unsloth: Training/inference optimization layer

## Trend Signals
Across these projects, I'm seeing convergence around quantized inference, multi-GPU/distributed setups, AMD hardware support, and multimodal capabilities. Each layer is optimizing differently—vLLM and SGLang focus on production throughput while llama.cpp and Ollama prioritize local deployment, LiteLLM handles routing, and Unsloth bridges training with inference.</think>

# Cross-Project Comparison — AI Inference Ecosystem

## 1. Ecosystem Overview

Today's release activity reflects a maturing inference stack with increasingly clear layer segmentation. The headline is **DeepSeek-V4.1 support proliferating across vLLM and SGLang simultaneously**, each with distinct quantization paths (MXFP8 in vLLM, candidate indexer in SGLang). Meanwhile, llama.cpp continues its aggressive Vulkan/SYCL backend expansion for local inference, Ollama advances Apple Silicon optimization, and LiteLLM solidifies its gateway position with security hardening. Unsloth bridges training-to-serving with NVFP4 and bitsandbytes integration.

The unifying theme: **quantized + distributed + multimodal** is the convergence point across all six projects.

---

## 2. Activity Comparison

| Project | Key Issues (Open) | Merged PRs (24h) | Releases (24h) |
|---------|-------------------|------------------|----------------|
| **vLLM** | 15+ (GLM-5.3 decode regression, XPU TP2, Hybrid Mamba) | 15+ | ✅ v0.30.0 |
| **SGLang** | 10+ (EAGLE + MoE crash, DFlash KV, RL deadlock) | 12+ | ❌ None |
| **llama.cpp** | 6 (Qwen3.5 crash, speculative decoding divergence) | 15 commits | ❌ None |
| **Ollama** | 10+ (Qwen streaming, RTX 50 CUDA, MLX structured output) | 8+ | ❌ None |
| **LiteLLM** | 10 (rate limit double-count, metrics PII, budget reset) | 10+ | ✅ v1.102.0 |
| **Unsloth** | 8 (AMD RDNA1, multi-GPU, ROCm VM fault) | 8+ | ✅ 3 betas |

**Takeaway**: vLLM leads release velocity; llama.cpp leads commit volume. LiteLLM and Unsloth each shipped one release. SGLang remains in maintenance mode without a formal release today.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4.1-Flash** | ✅ MXFP8 KV | ✅ Candidate indexer | — | — | — |
| **DeepSeek-V4.1** | — | ✅ TRT-LLM attention | — | — | — |
| **Kimi-K3 / K3** | ✅ MI355X test group | ✅ MXFP4 via Quark | — | — | — |
| **Qwen-Image-2.1** | — | — | — | — | ✅ Local execution |
| **Gemma 4** | ✅ Shared memory limits | — | — | ✅ Dynamic resolution | — |
| **GLM-5.3-Flash** | ⚠️ Decode regression | ✅ Vision support | — | — | — |
| **IQ4_NL** | — | — | ✅ Flash attention | — | — |
| **LongCat-Flash-Lite-Sparse** | — | — | — | — | ✅ Loading |
| **MIMO v2.5** | — | — | — | 📋 Requested | — |

**Leader**: **vLLM and SGLang are co-leading** on frontier model support, each taking different optimization paths. Unsloth owns the training-to-inference bridge for DiT/video models (NVFP4, VAE compile).

---

## 4. Performance Frontier

| Optimization Area | Projects Leading | Key Work |
|------------------|------------------|----------|
| **KV Cache Quantization (MXFP8/FP4)** | vLLM, SGLang, Unsloth | DeepSeek-V4.1 MXFP8 KV, NVFP4 per-layer policies |
| **Distributed Serving (TP/EP/DCP)** | vLLM, SGLang | Helix parallelism, all-to-all EP, DCP target indices |
| **Kernel Optimization (Triton/CUDA)** | vLLM, llama.cpp, Unsloth | Triton prefill-attention tile, IQ1_M prefix sums, reasoning blocks 2× |
| **Vulkan/SYCL (AMD/Intel)** | llama.cpp | Xe flash attention (Xe2/Xe3), IQ3 reorder, MoE XMX |
| **MLX (Apple Silicon)** | Ollama, Unsloth | Qwen 3.8 prompt +18%, dynamic image tokens |
| **Cost/Budget Tracking** | LiteLLM | Redis pipeline await, Rust cost calc |

**Frontier concentration**: The highest-frequency optimization work today is **KV cache quantization + distributed parallelism** — both require tight co-design between model architecture and serving infrastructure.

---

## 5. Layer Positioning

| Layer | Projects | Primary Role |
|-------|----------|--------------|
| **Production Serving Engine** | vLLM, SGLang | High-throughput multi-GPU inference, PD disaggregation |
| **Local Inference Runtime** | llama.cpp | Cross-platform CPU/GPU/Metal/Vulkan, no server |
| **Local App Runtime** | Ollama | End-user app with embedded server, MLX acceleration |
| **Gateway / Proxy** | LiteLLM | Multi-provider routing, cost tracking, auth |
| **Training / Fine-tuning** | Unsloth | QLoRA, DPO, NVFP4 training + checkpoint conversion |

**Clarifying note**: vLLM and SGLang occupy the same layer but optimize differently — vLLM prioritizes breadth (CUDA, TGI compat), SGLang prioritizes depth (DeepSeek-V4 optimization, DCP/Helix).

---

## 6. Trend Signals

### What Agent/App Developers Should Watch

| Signal | Implication |
|--------|-------------|
| **GLM-5.3-Flash decode degeneration** | Avoid GLM for long multi-turn agentic sessions until regression fixed — affects both vLLM and SGLang |
| **MXFP8/FP4 KV becoming standard** | Frontier models (DeepSeek, Kimi) increasingly use block-floating formats; ensure your serving layer handles them |
| **AMD ROCm gaining traction** | Kimi-K3 MXFP4 on ROCm, Intel Xe Vulkan kernels — diversification is happening but stability varies |
| **EAGLE + MoE crash** | Speculative decoding + fused MoE is unstable; avoid on production GLM deployments |
| **LiteLLM metrics PII exposure** | Security hardening on multi-tenant proxies — audit your `/metrics` endpoints |
| **Multi-GPU fine-tuning still immature** | Unsloth Studio and vLLM MTP both have multi-GPU gaps; single-GPU or TGI remain safer |
| **Apple Silicon inference improving** | Ollama/Unsloth MLX gains (18%+ prompt speedup) make local MacBook inference increasingly viable |

### Industry Trajectory

The ecosystem is consolidating around three poles:

1. **Scale pole** (vLLM/SGLang) — optimized for cluster serving with quantization and distribution
2. **Local pole** (llama.cpp/Ollama) — optimized for single-machine and edge deployment
3. **Gateway pole** (LiteLLM) — optimized for multi-cloud routing and cost observability

Unsloth sits as infrastructure between training and serving, increasingly important as quantized checkpoint flows (ModelOpt FP8 → bitsandbytes) become standard.

---

*Cross-project synthesis — 2026-09-23*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to generate a vLLM digest for 2026-09-23 based on the GitHub data provided. Let me analyze the data and structure it according to the required sections.

Let me go through the key information:

1. **Releases**: v0.30.0 was released with 762 commits from 315 contributors (104 new). New models include DeepSeek-V4.1-Flash, DeepGEMM Mega-mHC, and async Engram prefetch.

2. **Latest Issues** - Top issues by comments:
- #41663: XPU TP=2 bug on Intel Arc Pro B70 - 40 comments
- #39479: torch.compile config hashing follow-ups - 27 comments
- #38918: Gemma4 on Turing GPUs - shared memory limits - 22 comments
- #56868: GLM-5.3-Flash long-decode degeneration - 22 comments
- #56605: GLM-5.3-Flash degenerates into repeated-token - 19 comments
- #53142: Hybrid mamba prefix-cache bug - 15 comments
- #46249: Qwen3.6-27B tool calls fail with MTP - 15 comments (CLOSED)
- #53963: GLM-5.3-Flash no SM120 sparse-MLA path - 13 comments

3. **Latest PRs** - Top PRs:
- #58226: DiffusionGemma one-pass sampler statistics kernel
- #56995: get_top_tokens() on generic MTP drafter
- #57586: Breakable CUDA graphs under VLLM_BATCH_INVARIANT
- #57047: AWQ dequantization fuse with GEMM on SM89


- #58212: Skip VllmConfig re-validation for with_hf_config
- #58012: MI355 Kimi-K3 unit test group
- #58225: Triton prefill-attention KV tile on RDNA3/RDNA4
- #46871: XPU All-to-all EP backend
- #46847: ROCm window-correct shuffled fp8 decode
- #51681: ROCm fix misrouting in P/D disagg
- #57648: add_dp_placement_groups fix
- #57966: Add routed-exper

I'm seeing the project is actively addressing configuration validation issues, expanding hardware support through new test groups for MI355 Kimi-K3, and making performance optimizations around Triton attention and XPU expert parallelism. There are also fixes being made to routing issues in disaggregated processing and DP placement group handling.</think>

# vLLM Digest — 2026-09-23

## Today's Highlights

vLLM v0.30.0 has landed with 762 commits from 315 contributors (104 new), introducing DeepSeek-V4.1-Flash with full KV stored in MXFP8 via FlashMLA V4.1 on SM100, DeepGEMM Mega-mHC support, and async Engram prefetch. The release also marks continued momentum on AMD ROCm optimization with new Triton attention tiles for RDNA3/4 and a MI355X Kimi-K3 test group. Key stability work addresses hybrid Mamba prefix-caching regressions and GLM-5.3-Flash decode degeneration issues.

---

## Releases & Breaking Changes

| Version | Description | Links |
|---------|-------------|-------|
| **v0.30.0** | Major release: 762 commits, 315 contributors (104 new). New models: DeepSeek-V4.1-Flash (MXFP8 KV via FlashMLA V4.1 on SM100), DeepGEMM Mega-mHC, async Engram prefetch. | [Release](https://github.com/vllm-project/vllm/releases/tag/v0.30.0) |

---

## New Model & Hardware Support

- **DeepSeek-V4.1-Flash**: Full KV stored in MXFP8 via FlashMLA V4.1 record on SM100 (#56893, #56214, #56228, #56208)
- **DeepGEMM Mega-mHC**: New kernel support (#56962)
- **Kimi K3**: MI355X unit test group added (#58012); tracking issue at #50001
- **Intel XPU**: All-to-all Expert-Parallelism backend for batched MoE in progress (#46871)

---

## Performance & Optimization

| Area | Change | Details |
|------|--------|---------|
| **DiffusionGemma** | One-pass sampler statistics kernel | Custom Triton kernel for one program per logits row (#58226) |
| **AWQ Quantization** | Fused dequantization + GEMM on SM89 | Batch-invariant mode (`VLLM_BATCH_INVARIANT=1`) unpacks int4 weights without materializing FP16 (#57047) |
| **CUDA Graphs** | Breakable graphs under `VLLM_BATCH_INVARIANT` | Enables tuned matmul configs at runtime without torch.compile (#57586) |
| **ROCm/RDNA** | Narrower Triton prefill-attention KV tile | Addresses #58060 on gfx11xx/gfx12xx (#58225) |
| **DeepSeek-V4** | MXFP4→block-FP8 expert dequant (Hopper) | Opt-in lossless conversion for prefill speedup (#53709) |
| **AMD MI355X** | DSA sparse indexer decode scorer | Candidate-only paged MQA scorer for gfx950 (#57859) |
| **ROCm MI300** | Aiter Triton MXFP4 MoE enabled | Substantially faster than reference for gfx942 (#57079) |

---

## Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | **GLM-5.3-Flash long-decode degeneration** after accumulated reasoning (#56868) | OPEN | — |
| **High** | **GLM-5.3-Flash repeated-token "word salad"** in multi-turn agentic use (#56605) | OPEN | — |
| **High** | **Hybrid Mamba prefix caching + MTP** corrupts output (#53912, #53142) | OPEN | — |
| **High** | **XPU TP=2** GP fault + xe BCS engine reset on Intel Arc Pro B70 (#41663) | OPEN | — |
| **Medium** | **DeepSeek-V3.2 / GLM-5.x DSA sparse-MLA decode garbage** under CUDA graphs in PD-disaggregation (#57064) | OPEN | — |
| **Medium** | **DiffusionGemma tensor shape mismatch** in post_norm under concurrent decode (#58035) | OPEN | — |
| **Medium** | **Qwen3.5 native MTP** can be slower than CUDA graph baseline despite good acceptance (#47277) | OPEN | — |
| **Medium** | **Gemma4 infinite repetition loops** with structured output (#40080) | CLOSED | — |
| **Fixed** | **Qwen3.6-27B tool calls fail with MTP** on Responses API (#46249) | CLOSED | [PR pending](https://github.com/vllm-project/vllm/issues/46249) |

---

## What This Means for Application Developers

1. **If you run GLM-5.3-Flash**: Beware decode degeneration issues in long-running multi-turn agentic sessions; avoid prefix caching with MTP for hybrid Mamba/GDN models until #53912/#53142 are resolved.

2. **If you use VLLM_BATCH_INVARIANT=1**: The new breakable CUDA graphs path (#57586) now provides better runtime matmul tuning without torch.compile overhead—consider enabling for throughput workloads.

3. **If you deploy on AMD ROCm**: MI355X (gfx950) is getting active optimization; expect improved DeepSeek-V4 and Kimi-K3 performance. The Triton prefill-attention tile narrowing (#58225) benefits RDNA3/4 users.

4. **If you use Intel XPU**: The all-to-all EP backend is progressing (#46871) but still has performance issues; avoid TP=2 configurations on Arc Pro B70 for now (#41663).

5. **If you use DiffusionGemma**: The one-pass sampler kernel (#58226) improves decoding; concurrent request handling bugs (#58035) are being tracked.

---

*Generated from GitHub data — 2026-09-23*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to generate a structured SGLang digest for 2026-09-23 based on the GitHub data provided. Let me analyze the data and create a professional digest covering the required sections.

Let me go through the data:

1. **Latest Releases**: None in the last 24h

2. **Latest Issues** - Key ones:
   - #29736: Decode Context Parallelism & Helix Parallelism roadmap (Q3 2026) - 18 comments
   - #17050: CI Test Failures tracking - 14 comments, 2 broken, 5 flaky, 1089 recently fixed
   - #29465: Fully migrate IPC to msgpack - 14 comments (CLOSED)
   - #24703: RFC - Refactor weight loading code - 14 comments
   - #39499: SGLang dLLM Serving roadmap - 13 comments
   - #37742: SenseNova-U1 feature tracking - 9 comments
   - #40574: DeepSeek-V4.1 two-level candidate indexer - 6 comments
   - #36333: Bug - zombie request from disconnected streaming - 6 comments
   - #30815: Bug - FP8 KV-cache decode slowdown - 4 comments
   - #40623: Bug - illegal memory access in Triton fused-MoE with EAGLE spec - 4 comments

3. **Latest Pull Requests** - Key ones:
   - #40792: Fix NIXL transfer of MXFP8 KV block scales
   - #40192: [CLOSED] Transfer DFlash draft KV separately from DCP target indices
   - #40524: [NPU] Update CANN version to 9.1.0
   - #40811: [AMD][Quark] Serve Kimi-K3 MXFP4 checkpoint on ROCm
   - #40767: [JIT] Add occupancy-preserving L1 carveout preference
   - #40777: Add RL weight-update sessions
   - #40800, #40899: Additional fixes for Nemotron MTP and LongCat MoE
   - #40779: RL pause_generation and weight updates deadlock fix
   - #38652: LMCache unified radix cache support
   - #40810: Fix CohereCommand4Detector streaming tool_index
   - #36652: DeepSeek-V4 TRTLLM attention improvements
   - #39643: Model-agnostic last-stage draft embedding under PP
   - #40804: Keep DSA cuda-graph state across TMS pause/resume

I need to identify what's most impactful for the digest. The AMD Quark support for Kimi-K3 MXFP4 on ROCm is significant for hardware acceleration, along with the NPU CANN 9.1.0 update and DeepSeek-V4 TRTLLM optimizations. There are several performance fixes being developed for Nemotron MTP, LongCat MoE, and RL workloads. I should also note the LMCache integration for unified radix caching and the critical fixes around RL weight updates and streaming bugs.</think>

# SGLang Daily Digest — 2026-09-23

## 1. Today's Highlights

SGLang continues advancing inference serving capabilities with significant progress on distributed serving, multi-backend support, and RL infrastructure. Key developments include AMD ROCm support for Kimi-K3 MXFP4 quantization, DeepSeek-V4 TRT-LLM attention optimizations, and ongoing work on Decode Context Parallelism for Q3 2026 roadmap. The IPC msgpack migration has completed, removing remaining pickle workarounds.

---

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours.

**Migration note**: The IPC to msgpack migration is complete ([#29465](https://github.com/sgl-project/sglang/issues/29465)). The `SGLANG_USE_PICKLE_IPC=0` flag is now the default—ensure your deployment does not rely on legacy pickle-based IPC before upgrading.

---

## 3. New Model & Hardware Support

| Component | Details | PR/Issue |
|-----------|---------|----------|
| **AMD ROCm** | Quark-quantized Kimi-K3 MXFP4 checkpoint serving on ROCm | [#40811](https://github.com/sgl-project/sglang/pull/40811) |
| **NPU (CANN)** | Updated from CANN 9.0.0/Python 3.11 → 9.1.0/Python 3.12 | [#40524](https://github.com/sgl-project/sglang/pull/40524) |
| **DeepSeek-V4.1** | Two-level candidate indexer (candidate source layer 20: 2048 blocks × 8 positions; consumers: top-512) | [#40574](https://github.com/sgl-project/sglang/issues/40574) |
| **SenseNova-U1/U1.5** | Feature and performance tracking (reference: OpenSenseNova/SenseNova-U1) | [#37742](https://github.com/sgl-project/sglang/issues/37742) |
| **GLM-5.3-Flash** | Vision support (note: pinned transformers==5.12.1 lacks glm5_next—see [#39831](https://github.com/sgl-project/sglang/issues/39831)) | [#39831](https://github.com/sgl-project/sglang/issues/39831) |

---

## 4. Performance & Optimization

| Area | Description | PR/Issue |
|------|-------------|----------|
| **TRT-LLM Attention** | DeepSeek-V4 accuracy + perf improvements | [#36652](https://github.com/sgl-project/sglang/pull/36652) |
| **JIT Kernels** | Occupancy-preserving L1 carveout preference (prevents PDL secondary from inheriting GEMM's large shared-memory partition) | [#40767](https://github.com/sgl-project/sglang/pull/40767) |
| **FP8 KV-cache** | Decode slowdown fix: unfused K/V quantization + per-layer Q conversion overhead | [#30815](https://github.com/sgl-project/sglang/issues/30815) |
| **DCP Communication** | `fi_a2a` / `a2a` as default `--dcp-comm-backend` for all models | [#29736](https://github.com/sgl-project/sglang/issues/29736) |
| **Unified Radix Cache** | Rust TreeCore now default; LMCache external KV backend integration | [#39627](https://github.com/sgl-project/sglang/pull/39627), [#38652](https://github.com/sgl-project/sglang/pull/38652) |
| **LongCat MoE** | Fixed duplicate residual in shortcut (regression producing incorrect output) | [#40799](https://github.com/sgl-project/sglang/pull/40799) |
| **Nemotron MTP** | Reduced duplicate attention output reduction under DP + attention TP > 1 | [#40800](https://github.com/sgl-project/sglang/pull/40800) |

---

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | EAGLE speculative decoding + Triton fused-MoE causes illegal memory access (GLM-5.2-NVFP4, sm_107) | Open — [#40623](https://github.com/sgl-project/sglang/issues/40623) |
| **High** | Disconnected streaming client leaves zombie request decoding to max_tokens, floods "state was deleted" | Open — [#36333](https://github.com/sgl-project/sglang/issues/36333) |
| **High** | DeepSeek-V4-Flash-0731: progressive output corruption under concurrency (DSV4 + DP attention) | Open — [#33397](https://github.com/sgl-project/sglang/issues/33397) |
| **Medium** | NIXL transfer rejects MXFP8 KV block scales in PD disaggregation | Fix PR open — [#40792](https://github.com/sgl-project/sglang/pull/40792) |
| **Medium** | RL: `pause_generation` + weight updates deadlock each other | Fix PR open — [#40779](https://github.com/sgl-project/sglang/pull/40779), [#40804](https://github.com/sgl-project/sglang/pull/40804) |
| **Medium** | DeepSeek-V4.1-Flash + Engram: profiled SPS table dies in CUDA-graph capture | Open — [#39173](https://github.com/sgl-project/sglang/issues/39173) |
| **Low** | GLM-5.3-Flash vision broken: transformers==5.12.1 lacks glm5_next | Open — [#39831](https://github.com/sgl-project/sglang/issues/39831) |

**CI Status** ([#17050](https://github.com/sgl-project/sglang/issues/17050)): 2 broken, 5 flaky, 1089 recently fixed.

---

## 6. What This Means for Application Developers

1. **Deploying on AMD GPUs?** — Kimi-K3 MXFP4 support on ROCm is now available. Test your workloads and report quantization accuracy issues.

2. **Running RL training loops?** — The deadlock between `pause_generation` and weight updates is being fixed. If you run RL colocation (e.g., GRPO, PPO), hold off on the latest main until [#40779](https://github.com/sgl-project/sglang/pull/40779) merges.

3. **Using EAGLE speculative decoding with MoE?** — Avoid combining Triton fused-MoE (`flashinfer_megamoe`) with EAGLE spec decoding on GLM-5.2-NVFP4 (sm_107) until [#40623](https://github.com/sgl-project/sglang/issues/40623) is resolved—crashes with illegal memory access are likely.

4. **Using streaming with tool calls?** — A fix landed for CohereCommand4Detector's streaming `tool_index` handling ([#40810](https://github.com/sgl-project/sglang/pull/40810)).

5. **Considering NPU deployment?** — CANN 9.1.0 / Python 3.12 is the new baseline for Ascend NPU. Update your container images accordingly.

6. **Next release may require migration** — The pickle→msgpack IPC change flips default; if you have custom extensions relying on pickle IPC, test with `SGLANG_USE_PICKLE_IPC=0` before upgrading.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data for llama.cpp and create a structured digest for 2026-09-23.

First, let me identify the key items:

## Latest Releases (last 24h)
1. b11115 - opencl: add bin kernel `kernel_gemm_noshuffle_q4_k_q8_1_dp4a_ila_a8_bin` (#29056)
2. b11114 - server: fix router eviction races with the existing queue (#29217)
3. b11113 - server: do not pass log file to children (#29212)
4. b11112 - server: support input_image in function_call_output (#20663) (#22575)
5. b11111 - vulkan: add Intel Xe flash attention optimization kernels (2/3, Xe-LPG Plus/Xe2/Xe3) (#24406)
6. b11110 - mtmd: add various sanity checks (#29276)
7. b11109 - metal : gate mul_mm_id src1 rescale behind ggml_prec (#29029)
8. b11108 - ggml : IQ1_M build prefix sums once per block (#28706)
9. b11105 - jinja: use const for statement::execute and ::visit (#29271)
10. b11104 - server: Add support for binding to multiple addresses (#28690)

## Top Issues (by comment count)
1. #25618 - Speculative decoding divergence with quantized targets - 25 comments
2. #20697 - Feature Request: Disk-based context checkpoint offloading - 21 comments
3. #20176 - Qwen 3.5 Loading checkpoints causes a crash - 18 comments


4. #20663 - qwen3.5 + codex - unable to view images - 15 comments
5. #21545 - server: Add model capabilities information - 12 comments

I notice several significant developments across quantization, server functionality, and hardware acceleration. The issues highlight ongoing challenges with image processing, model capabilities, and system compatibility. The release commits suggest continuous backend optimization, particularly for Intel and Vulkan graphics processing.

Key focus areas include speculative decoding fixes, router eviction improvements, and multi-address binding for server infrastructure. Notably, the team is addressing critical implementation details around input image handling and performance optimizations.

The commits demonstrate a systematic approach to resolving technical debt and enhancing system robustness, with targeted fixes across various computational backends and server components.

Emerging themes include advanced hardware acceleration techniques for Intel GPUs, particularly around flash attention kernels, and preliminary support for new quantization formats like IQ4_NL. The development process shows incremental refinement of compute kernels and memory management strategies.

Significant engineering efforts are focusing on high-performance computing scenarios, especially in symmetric and heterogeneous acceleration environments. Key improvements target expert routing in multi-GPU configurations and optimizing memory access patterns across diverse hardware architectures.

The current development trajectory reveals a strategic emphasis on low-level performance optimization, with particular attention to reducing computational overhead and improving memory efficiency in complex neural network inference scenarios.</think>

# llama.cpp Digest — 2026-09-23

## Today's Highlights

The llama.cpp project continues its rapid pace with backend optimizations across Intel GPUs, CUDA, and SYCL, while addressing server concurrency and routing issues. Notably, Intel's Vulkan flash attention kernels for Xe-LPG Plus/Xe2/Xe3 have landed, and the server now supports binding to multiple addresses. One significant correctness bug remains open: speculative decoding produces divergent outputs on quantized targets under greedy sampling.

---

## Releases & Breaking Changes

| Commit | Description | PR |
|--------|-------------|-----|
| **b11104** | Server: Add support for binding to multiple addresses | [#28690](https://github.com/ggml-org/llama.cpp/pull/28690) |
| **b11113** | Server: do not pass log file to children | [#29212](https://github.com/ggml-org/llama.cpp/pull/29212) |
| **b11114** | Server: fix router eviction races with the existing queue | [#29217](https://github.com/ggml-org/llama.cpp/pull/29217) |

*No breaking API changes reported.*

---

## New Model & Hardware Support

| Area | Update | Details |
|------|--------|---------|
| **Vulkan** | Intel Xe flash attention (Xe-LPG Plus, Xe2, Xe3) | Split-k path optimization for Intel GPUs — addresses A770 Linux op test failures | [#24406](https://github.com/ggml-org/llama.cpp/pull/24406) |
| **OpenCL** | Q4_K non-MoE dp4a binary kernel | New `kernel_gemm_noshuffle_q4_k_q8_1_dp4a_ila_a8_bin` kernel | [#29056](https://github.com/ggml-org/llama.cpp/pull/29056) |
| **SYCL** | IQ3 code reorder + persistent layouts | Attention/decode path improvements for Intel Arc Pro B70, IQ3_S and IQ3_XXS MMVQ | [#29107](https://github.com/ggml-org/llama.cpp/pull/29107) |
| **MUSA** | PH1 (MTT S5000) fixes | Operator failures and build issues resolved for MUSA architecture `31` | [#29193](https://github.com/ggml-org/llama.cpp/pull/29193) |
| **CUDA** | IQ4_NL support in flash attention KV cache | Enables efficient flash attention with IQ4_NL quantization | [#29293](https://github.com/ggml-org/llama.cpp/pull/29293) |

---

## Performance & Optimization

| Category | Change | Impact |
|----------|--------|--------|
| **Vulkan/Intel FA** | Split-k flash attention kernel | New optimized path for Intel Xe series — see PR for benchmark data |
| **GGML/IQ1** | Build prefix sums once per block | Reduces redundant computation in IQ1_M kernels | [#28706](https://github.com/ggml-org/llama.cpp/pull/28706) |
| **Metal** | Gate `mul_mm_id` src1 rescale behind `ggml_prec` | Aligns Metal behavior with CUDA/Vulkan backends | [#29029](https://github.com/ggml-org/llama.cpp/pull/29029) |
| **CUDA/MoE** | Grouped experts top-k fusion | Reclaims most performance lost by grouping experts — see PR table | [#29181](https://github.com/ggml-org/llama.cpp/pull/29181) |
| **SYCL** | Q8_0 DMMV ESIMD + MMVQ wide load | Batches 4 dwords instead of individual handling | [#29186](https://github.com/ggml-org/llama.cpp/pull/29186) |
| **SYCL** | Grouped MoE XMX GEMM | Addresses narrow activation inefficiency in MoE models | [#29245](https://github.com/ggml-org/llama.cpp/pull/29245) |
| **Hexagon** | Direct-mapped DMA cache for FA | Better suited for HVX flash attention mask handling | [#29282](https://github.com/ggml-org/llama.cpp/pull/29282) |
| **MoE/GPU** | GPU-resident LRU cache for host-offloaded expert weights | Serves recently-used experts from GPU memory to reduce host RAM bandwidth bottleneck | [#27861](https://github.com/ggml-org/llama.cpp/pull/27861) |
| **Vulkan** | Optional device keepalive (`GGML_VK_KEEPALIVE_MS`) | Prevents idle GPU memory eviction | [#29267](https://github.com/ggml-org/llama.cpp/pull/29267) |

---

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | **Speculative decoding divergence on quantized targets** — greedy output differs from vanilla when target is Q4_K_M (works on bf16) | Open — [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) |
| **High** | **Qwen 3.5 checkpoint loading crash** — crashes when loading any checkpoint created after PR #20087 | Open — [#20176](https://github.com/ggml-org/llama.cpp/issues/20176) |
| **Medium** | **Server silently stops processing** when `/metrics` endpoint scraped by VictoriaMetrics | Open — [#29104](https://github.com/ggml-org/llama.cpp/issues/29104) |
| **Medium** | **Vulkan prompt processing slowdown** — severe drop after b10780 on RDNA3 | Open — [#28752](https://github.com/ggml-org/llama.cpp/issues/28752) |
| **Medium** | **Qwen4exp CUDA decode slows linearly with context** | Open — [#28734](https://github.com/ggml-org/llama.cpp/issues/28734) |
| **Medium** | **MTP OOB token id** — Qwen3.8 + DFlash2/MTP emits `token_id == n_vocab` (248320) on Vulkan | Open — [#28158](https://github.com/ggml-org/llama.cpp/issues/28158) |

**Fixed:**
- Qwen3.5 image input in `function_call_output` — [#22575](https://github.com/ggml-org/llama.cpp/pull/22575) (merged as b11112)
- Server `/v1/models` vocab_type boolean serialization — [#29091](https://github.com/ggml-org/llama.cpp/issues/29091) (closed)

---

## What This Means for Application Developers

1. **Multi-address binding is now available** — Deployments needing to bind llama-server to multiple interfaces (e.g., internal + external) can now do so directly without workarounds.

2. **Intel Xe GPUs get significant Vulkan boost** — The split-k flash attention kernels target Xe-LPG Plus, Xe2, and Xe3 architectures. If you're running on Intel discrete GPUs (A770, B580, etc.), expect improved prefilling throughput.

3. **Watch for speculative decoding correctness issues** — If using draft-model speculative decoding with quantized targets (Q4_K_M, etc.) and `temperature=0`, outputs may diverge from non-speculative runs. Consider using bf16 targets or ngram speculation until #25618 is resolved.

4. **Server concurrency improvements** — The router eviction race fix (#29217) and slot reservation/queuing changes (#29120) should improve reliability under high concurrency with multiple model slots.

5. **SYCL backend maturing** — Multiple PRs landed for Intel Arc Pro B70 (IQ3 reorder, Q8_0 wide load, MoE XMX GEMM). If you're targeting Intel GPUs via SYCL, test the latest build for attention and MoE workloads.

---

*Generated from github.com/ggml-org/llama.cpp — commit range: b11104–b11115*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for Ollama on 2026-09-23.

Let me go through the data:

**Releases**: None in the last 24h

**Issues** (27 total, key ones):
- #17778: Qwen 3.8 bug - "no user query found in messages" error during streaming
- #10333: CLI image path not recognized
- #15626 (CLOSED): Expose max_soft_tokens for Gemma 4 - feature request fulfilled
- #16060: Phone number verification doesn't accept non-US numbers
- #11798: Feature request for Audio Input Support
- #13949: Ollama API compatibility with Claude Code
- #17790 (CLOSED): qwen3.8 POST /v1/chat/completions never responds
- #15887: Request to add MIMO v2.5 to Ollama Cloud
- #18368: macOS GUI silent failure after 60 seconds
- #16599: Model spreading across GPUs even when one has enough VRAM
- #18593 (CLOSED): macOS app UI hangs due to ChatGPT/Codex detection
- #18225 (CLOSED): 5x slower token generation regression on CUDA
- #18597: Homebrew structured output broken with MLX models
- #10929 (CLOSED): Invalid JSON with thinking mode and structured output
- #14196 (CLOSED): Delayed Constrained Decoding for Thinking
- #17544 (CLOSED): /api/generate ignores think when format is set
- #17673: Custom tools feature request
- #17152 (CLOSED): Gemma 4 hardcoded image token budget
- #18293: Frequent model unavailable errors


- #18544: Feature request for CLAUDE_CODE_AUTO_MODE_SERVER=1
- #18595: No garbage collection for orphaned blobs
- #18590 (CLOSED): top_logprobs capped at 20
- #18579 (CLOSED): Can't get log probability of specific token
- #18581: Windows CUDA discovery fails on RTX 50-Series
- #18594: System 1 Models support request
- #18447 (CLOSED): Intermittent "model not found" errors
- #18584: Install script fails with bad internet

Several PRs were merged addressing performance and feature gaps. The mlx:select Gemma 4 image resolution dynamically PR was completed, alongside work on Qwen3.8 Flash Next memory efficiency and Qwen 3.8 prompt processing improvements. Documentation updates covered thinking control discovery and troubleshooting guidance. Feature work included JSONSchema specification support, app UI enhancements, and Claude Code auto mode configuration. Additional PRs added web search capabilities per response, raised the Gemma 4 image token budget, and updated the llama.cpp dependency. The server export and import commands were implemented, along with fixes for macOS System Events and tool parser buffer handling.</think>

# Ollama Digest — 2026-09-23

## 1. Today's Highlights

Today's activity centers on ongoing optimizations for Apple's MLX backend and continued work closing feature gaps in multimodal and structured output handling. Notably, the macOS app received a critical fix for UI hangs caused by ChatGPT/Codex detection, and the team landed improvements to Gemma 4's image token handling. No new releases were published in the last 24 hours.

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours.

## 3. New Model & Hardware Support

| Item | Status | Details |
|------|--------|---------|
| Gemma 4 dynamic image resolution | **Merged** (#18603) | MLX backend now selects image token budget dynamically (70/140/280/560/1120) based on input resolution, preserving detail for high-resolution documents |
| MIMO v2.5 LLM | Open request (#15887) | Xiaomi's million-token context model under MIT license — community requesting addition to Ollama Cloud |
| System 1 Models (Kev, Laya) | Open request (#18594) | Feature request for lightweight/fast models |
| RTX 50-Series (Blackwell) CUDA support | **Regression** (#18581) | Windows CUDA discovery fails; falls back to CPU |

## 4. Performance & Optimization

| PR | Area | Improvement |
|----|------|-------------|
| #18550 | MLX Qwen 3.8 prompt processing | **+18–19%** prompt TPS on M5 Max (2k–8k tokens) via gated-delta kernel |
| #18078 | MLX Qwen3.8 Flash Next memory | Keeps QSA projections & non-expert MTP in BF16; MXFP8 elsewhere — improves long-generation quality |
| #18577 | llama.cpp version | Updated to b11081; removed obsolete Laguna metal patch |
| #17154 | Gemma 4 image token budget | Exposed `max_soft_tokens` as runtime parameter (closes #17152, #15626) |

## 5. Stability & Regressions

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| #18593 — macOS app UI freeze on launch | **High** | **Fixed** (#18601) | ChatGPT/Codex detection was blocking on `System Events`; now checks running programs directly |
| #18225 — ~5x slower token generation on CUDA (0.33.x vs 0.32.13) | **High** | Open | RTX 3090 regression; 0.32.13 unaffected |
| #17778 — Qwen 3.8 streaming error: "no user query found in messages" | **High** | Open | 205k context, tool-calling loop triggers error |
| #18581 — Windows CUDA fails on RTX 50-Series (Blackwell) | **Medium** | Open | Driver 616.92; reports 0 B VRAM |
| #16599 — Model splits across GPUs despite sufficient VRAM | **Medium** | Open | 3090 + 4060; Gemma 4 31b splits unnecessarily |
| #18597 — Homebrew MLX structured output broken | **Medium** | Open | `xgrammar library not found` error |
| #18595 — No garbage collection for orphaned blobs (21GB orphan found) | **Medium** | Open | Manifest audit reveals unreferenced blobs |

## 6. What This Means for Application Developers

- **macOS users**: Upgrade to 0.34.x when available — the UI hang on launch is now fixed.
- **Qwen 3.8 users**: The `/v1/chat/completions` endpoint may hang in certain tool-calling scenarios; stick to `/api/chat` or `ollama run` as workarounds (#17790, #17778).
- **Vision applications**: If using Gemma 4 for OCR on high-resolution images, the newly exposed `max_soft_tokens` parameter (#17154, #18603) should significantly improve accuracy.
- **Apple Silicon**: MLX continues to improve — Qwen 3.8 prompt processing is now ~19% faster.
- **Windows + new NVIDIA GPUs**: If you're on an RTX 50-series card, expect CPU-only inference until the CUDA discovery issue (#18581) is resolved.
- **Structured outputs + thinking models**: Several related issues (#10929, #17544) are closed; verify your version includes the fixes if you combine `think: true` with JSON schema outputs.
- **Docker + MLX/Vulkan**: Missing libraries/configs added (#18592); MLX runner now works in containers with `--gpus all`.

---

*Generated from GitHub data — ollama/ollama (2026-09-23)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest based on the provided GitHub data. Let me analyze the information and create a structured digest following the specified format.

Let me go through the data:

**Latest Releases:**
- v1.102.0 released with Docker image signature verification using cosign

**Latest Issues (top 30 by comment count):**
1. #361 - Wishlist ticket (CLOSED) - 484 comments
2. #14004 - Bug: API blocks free models when budget exceeded (CLOSED) - 20 comments
3. #34140 - OPEN: v3 rate limiter double-counts team per-model limits - 11 comments
4. #39057 - OPEN: Design intent question about token reports on cache hits - 9 comments
5. #24530 - OPEN: Security: /metrics endpoint default-unauthenticated exposes PII - 9 comments
6. #30280 - Bug: DashscopeException (CLOSED) - 8 comments
7. #13786 - Bug: "The model is repeating the same chunk" may not terminate response - 7 comments
8. #42161 - Bug: streamed requests costed as 0 when model_name is alias - 7 comments
9. #30825 - Bug: Multiple logging callbacks in key metadata - 6 comments
10. #42172 - Bug: anthropic/<model> with third-party api_base receives OAuth token - 6 comments

**Pull Requests:**
- #42620 - feat(rust): expand standalone cost calculations
- #42587 - fix(shadow-eval): charge evaluation spend to the initiating admin
- #42631 - test(cost): repoint Azure image cost test at gpt-image-2
- #42608 - chore(e2e): move compat-matrix populator to Render cron job
- #32618 - fix(router): await budget redis pipeline before sync reads


- #42628 - test(e2e): tolerate provider-side flakes
- #42590 - chore(prices): sync Fireworks AI prices
- #42594 - chore(prices): sync Azure prices (20 models)
- #42629 - ci: warn on SQL IN lists with no written bound
- #42630 - fix(anthropic): keep replayed prefix byte-stable for preserved thinking
- #42625 - feat(ui): simplify auto-router setup
- #42618 - chore(release): backport to stable/1.102.x
- #42616 - feat(logger): dispatch Python logging through Rust

Now I'll organize these into the digest format.</think>

# LiteLLM Daily Digest — 2026-09-23

## Today's Highlights

The LiteLLM team released **v1.102.0** with verified Docker images via cosign signatures, addressing supply-chain security. Key stability work includes fixes for budget tracking in Redis pipelines, streaming cost calculation with model aliases, and a security patch for the unauthenticated `/metrics` endpoint. Multiple provider price syncs landed (Azure: 20 models, Fireworks: 2 models, OpenRouter: 19 models), while the team addressed a critical SQL IN-list binding limit that could freeze budget reset jobs.

---

## Releases & Breaking Changes

| Version | Change | Notes |
|---------|--------|-------|
| **v1.102.0** | Docker image signing with cosign | All images now signed with key from commit `0112e53`. Users should verify pulls. |

*No breaking API changes reported today.*

---

## New Model & Hardware Support

- **Azure**: 20 new models added to price catalog, including GPT-5.x chat and Grok variants ([PR #42594](https://github.com/BerriAI/litellm/pull/42594))
- **Fireworks AI**: 2 new models added ([PR #42590](https://github.com/BerriAI/litellm/pull/42590))
- **OpenRouter**: 9 new models + 19 price corrections ([PR #42592](https://github.com/BerriAI/litellm/pull/42592))
- **Rust cost calculations**: Expanded standalone pricing to cover image, OCR, video, batch, custom, catalog, guardrail, tiered, and Gemini grounding ([PR #42620](https://github.com/BerriAI/litellm/pull/42620))

---

## Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **Redis budget sync** | Await pipeline before sync reads ([PR #32618](https://github.com/BerriAI/litellm/pull/32618)) | Prevents stale spend overwrites; fixes virtual-key model budget crashes |
| **SQL IN-lists** | CI warning for unbounded binds ([PR #42629](https://github.com/BerriAI/litellm/pull/42629)) | Prevents Postgres 32k bind-parameter limit from freezing budget reset jobs |
| **Logging** | Python logging dispatched through Rust diagnostics processor ([PR #42616](https://github.com/BerriAI/litellm/pull/42616)) | Enables shared credential redaction across Rust/Python boundaries |
| **Anthropic thinking** | Byte-stable replayed prefix for preserved thinking ([PR #42630](https://github.com/BerriAI/litellm/pull/42630)) | Fixes replay consistency on chat completions |
| **Shadow eval spend** | Evaluation costs charged to admin, not sampled user ([PR #42587](https://github.com/BerriAI/litellm/pull/42587)) | Correct budget attribution for admin-triggered evals |

---

## Stability & Regressions

### High Priority

| Issue | Description | Status |
|-------|-------------|--------|
| [#34140](https://github.com/BerriAI/litellm/issues/34140) | v3 rate limiter double-counts team per-model limits → effective RPM/TPM is half configured | OPEN |
| [#24530](https://github.com/BerriAI/litellm/issues/24530) | **Security**: `/metrics` endpoint default-unauthenticated exposes multi-tenant PII in production | OPEN |
| [#42161](https://github.com/BerriAI/litellm/issues/42161) | Streamed requests costed as 0 when `model_name` is an alias | OPEN |
| [#42172](](https://github.com/BerriAI/litellm/issues/42172)) | Anthropic with third-party `api_base` receives client's OAuth token instead of deployment's configured key | OPEN |

### Medium Priority

| Issue | Description | Status |
|-------|-------------|--------|
| [#13786](https://github.com/BerriAI/litellm/issues/13786) | Repetition detection loops call custom logging callback thousands of times | OPEN |
| [#39370](https://github.com/BerriAI/litellm/issues/39370) | Reset-budget job silently zeroes spend forever on `budget_duration=null` rows with stale `budget_reset_at` | OPEN |
| [#33871](https://github.com/BerriAI/litellm/issues/33871) | Project spend never tracked → project budgets/alerts never enforce | CLOSED |
| [#41611](https://github.com/BerriAI/litellm/issues/41611) | Streaming guardrails: value split across two SSE chunks can pass per-chunk checks | OPEN |

---

## What This Means for Application Developers

1. **Verify your Docker pulls** — v1.102.0 introduces cosign verification. Update your pull scripts to verify signatures, or deployments will fail on stricter container runtimes.

2. **Audit your `/metrics` exposure** — The Prometheus endpoint remains unauthenticated by default. If running multi-tenant LiteLLM Proxy in production, enable `require_auth_for_metrics_endpoint: true` immediately to avoid PII leakage.

3. **Watch streaming cost logs** — If using model aliases with streaming enabled, you may have been under-billing. The fix is tracked in [#42161](https://github.com/BerriAI/litellm/issues/42161); non-streaming calls are unaffected.

4. **Check rate limits** — Teams using per-model limits via `model_rpm_limit` in team metadata are likely seeing effective limits at half the configured value. The double-counting bug is tracked in [#34140](https://github.com/BerriAI/litellm/issues/34140).

5. **Budget tracking improvements** — The Redis pipeline fix ([PR #32618](https://github.com/BerriAI/litellm/pull/32618)) resolves a race condition where live spend could be replaced with stale values. If you rely on real-time budget enforcement, this improves accuracy.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to create an Unsloth digest for 2026-09-23 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Key observations from the data:

**Releases:**
- v0.1.814-beta, v0.1.813-beta, v0.1.812-beta: All about Qwen-Image-2.1 + Skills, 2x faster reasoning blocks (60 FPS vs 30 FPS)

**Issues (top items by comment count):**
1. #7485 - AMD GPU detection broken with latest llama.cpp (CLOSED)
2. #5764 - Multi GPU fine tuning via Unsloth Studio (OPEN)
3. #7164 - Models keep going in and out of VRAM (CLOSED)
4. #3008 - Knowledge Distillation Feature request (CLOSED)
5. #8847 - AMD 7600x internal GPU detection bug (OPEN)
6. #11385 - RAG UPLOAD_EXTS configurable via env var (OPEN)
7. #5191 - Sandbox Escape via subprocess (CLOSED)
8. #11567 - Qwen-image-2.1 needs extra manual steps (OPEN)
9. #11387 - API Keys cannot be copied (CLOSED)
10. #11384 - _page_char_budget TypeError (OPEN)

**Pull Requests:**
- #11619 - Docker Hub cleanup issue
- #10731 - NVFP4 flashinfer backend kernel items
- #11620 - LongCat-Flash-Lite-Sparse loading
- #10730 - Per-layer NVFP4 image policies
- #11172 - Python tool network calls allowlist
- #10729 - Whole-model NVFP4 for video families


- #11537 - Compressed-tensors to bitsandbytes 4-bit
- #11592 - NVIDIA ModelOpt FP8 checkpoints
- #10889 - VAE decode compilation
- #11609 - Remote code non-persistent buffers
- #11615 - AMD RDNA1 Triton buffer ops

I see significant performance optimizations and hardware support expansions. The team is tackling complex rendering and quantization challenges, particularly with NVFP4 image policies and AMD RDNA1 GPU support. Multiple PRs focus on improving model loading, checkpoint compatibility, and hardware-specific optimizations.

The key focus appears to be enhancing model flexibility, performance, and cross-platform compatibility across different GPU architectures and model types.</think>

# Unsloth Digest — 2026-09-23

## Today's Highlights

The Unsloth team shipped three consecutive beta releases (v0.1.812–v0.1.814) centered on **Qwen-Image-2.1** support, including custom Agent Skills and project management improvements. Notable backend work includes NVFP4 per-layer image policies, compressed-tensors to bitsandbytes 4-bit loading, and fixes for AMD RDNA1 GPU training. Several stability issues were closed, though multi-GPU fine-tuning and ROCm-related problems remain open.

---

## Releases & Breaking Changes

| Version | Summary | Link |
|---------|---------|------|
| **v0.1.814-beta** | Qwen-Image-2.1 local execution, custom Agent Skills, 2× faster reasoning blocks (60 FPS vs 30 FPS), improved Linux installs | [Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.814-beta) |
| **v0.1.813-beta** | Same as above | [Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.813-beta) |
| **v0.1.812-beta** | Same as above | [Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.812-beta) |

**Migration Note:** Qwen-Image-2.1 currently requires extra manual steps to run (see issue #11567). A more streamlined integration is expected in a forthcoming release.

---

## New Model & Hardware Support

- **Qwen-Image-2.1** — Local execution now supported ([Guide](https://unsloth.ai/docs/models/qwen-image-2.1))
- **LongCat-Flash-Lite-Sparse** — Loading support via `longcat_flash` (#11620)
- **NVIDIA ModelOpt FP8** — Checkpoint loading via transformers fp8 quantizer (#11592)
- **Kimi-K2.7-Code** — Remote MoE code training support (#11537)
- **AMD RDNA1 (gfx101x)** — Tracking issue opened; Triton buffer ops disabled on RDNA1 (#11614, #11615)
- **OmniVoice TTS** — Fine-tuning notebook requested (#11513)

---

## Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **Reasoning blocks** | 2× speedup | 60 FPS vs 30 FPS |
| **NVFP4 image policies** | Per-layer control for DiT families (#10730) | Better GPU memory utilization |
| **Flashinfer NVFP4** | Kernel items: device guard, persistent barrier, bias path, cached dispatch (#10731) | Improved FP4 inference |
| **Compressed-tensors → 4-bit** | Packed INT4/INT8 checkpoints load directly into bitsandbytes (#11537) | Seamless quantization pipeline |
| **VAE decode** | Compilation for DiT families from NVFP4 time budget pass (#10889) | Reduced video generation latency |
| **Multi-model serving** | Keep multiple models loaded simultaneously (#11591) | Lower latency for multi-model workflows |

---

## Stability & Regressions

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| **AMD GPU detection broken** (llama.cpp) | High | Closed #7485 | Latest llama.cpp build broke ROCm detection |
| **Models oscillating in/out of VRAM** | High | Closed #7164 | Idle models evicting from VRAM causing latency spikes |
| **Sandbox escape via code_execution** | Critical | Closed #5191 | PowerShell subprocess allowed filesystem access |
| **Qwen-Image-2.1 manual steps required** | Medium | Open #11567 | Extra configuration needed for local execution |
| **API Keys not copyable** | Low | Closed #11387 | Firefox/Brave copy failure on Linux |
| **Multi-GPU fine-tuning in Studio** | Medium | Open #5764 | Only single-card usage despite `device_map` |
| **ROCm VM fault on RX 7900 XTX** | High | Open #11498 | QLoRA training triggers AMDGPU VM fault/reset |
| **RDNA1 training not working** | High | Open #11614 | Training fails entirely on RX 5700 XT (gfx1010) |
| **XPU optimizer crash** | Medium | Closed #10021 | adamw_8bit crashes on Intel XPU at optimizer.step() |

---

## What This Means for Application Developers

1. **Qwen-Image-2.1 is now locally viable** — The 2× reasoning speedup (60 FPS) makes interactive image workflows more responsive, but expect to handle additional setup steps until #11567 is resolved.

2. **Multi-quantization pathway simplified** — Compressed-tensors packed INT4/INT8 now loads directly into bitsandbytes 4-bit (#11537), reducing quantization pipeline complexity for models like Kimi-K2.7-Code.

3. **AMD training remains unstable on older silicon** — RDNA1 (RX 5700 XT) and certain RDNA2/RDNA3 combinations continue to have ROCm issues. If deploying on AMD, verify specific GPU compatibility; NVIDIA remains the recommended path for production training.

4. **Multi-model serving is improving** — Studio can now keep multiple models loaded simultaneously (#11591), enabling lower-latency model switching in agentic workflows without full unload/reload cycles.

5. **Watch for VRAM churn** — Issue #7164 was closed but the underlying memory management behavior may still cause latency spikes on some hardware configurations. Monitor idle-state VRAM usage in production deployments.

---

*Generated from GitHub data for 2026-09-23*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*