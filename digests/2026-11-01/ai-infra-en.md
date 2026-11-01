# AI Infrastructure Digest 2026-11-01

> Generated: 2026-11-01 01:24 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report comparing vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth based on the digests I just created. Let me organize the information according to the requested sections.

Let me extract the key information from each digest:

**vLLM:**
- Issues: Several open including async scheduling crash, Gemma 4 FP8 crash, ROCm kernel issues
- Releases: No releases in last 24h
- New models: DeepSeek-V4-Flash for SM8x, ViT Full CUDA Graph, Kimi-K3 on ROCm, Qwen3.8 on gfx950
- Performance: Dynamic PDL for Hopper/Blackwell, ROCm optimizations, FlashInfer improvements

**SGLang:**
- Issues: PP disaggregated decode bug, benchmark offline failures, EAGLE crash
- Releases: No releases
- New models: DeepSeek-V4.1 on AMD gfx950, MiniMax-M3.1-Flash documentation
- Performance: NCCL 2.30 EP backend, MoE optimizations, CPU token allocator

**llama.cpp:**
- Releases: 7 releases (b12018-b12024)
- New models: Metis-1.6, Gemma 4 test support, PocketTTS, IQ3 (OpenCL)
- Performance: SYCL rounding fixes, OpenCL FWHT, Hexagon DMA fixes

**Ollama:**
- Issues: Windows Gemma4 errors, connection resets, runner disconnections
- Releases: No releases
- New models: VirbiusGuard, Qwen3.5 0.8B Q4_K_M
- Performance: LFM3-Omni memory fix, MLX token repeat limits

**LiteLLM:**
- Issues: Many fixes merged, some open (Amazon Nova streaming, model-based file routing)


- Releases: Hot reload fix, budget reservation fix
- New models: No new models
- Performance: Redis router cooldowns, usage export enrichment

**Unsloth:**
- Issues: CUDA P2P bug on non-NVLink, model picker stall, MiniMax-H3 crash
- New models: Ascend NPU (Huawei), ExLlamav2, CLI vision support
- Performance: Log redaction, gallery PNG loading, voice listing optimizations

Now I'll create the comparison report.</think>

# Cross-Project Comparison Report: AI Inference Stack Landscape

## 1. Ecosystem Overview

The AI inference stack is undergoing rapid diversification across the hardware-software spectrum. Today's activity shows two clear trajectories: **performance optimization** dominates vLLM and SGLang (focused on large-scale serving), while **developer experience and portability** drive llama.cpp, Ollama, and Unsloth. LiteLLM sits as the orchestration/gateway layer unifying these engines. The key themes across all six projects: ROCm AMD GPU support is accelerating (gfx950/MI355X optimizations across vLLM and SGLang), multi-modal inference is becoming first-class (ViT CUDA Graphs in vLLM, CLI vision in Unsloth), and production hardening continues (LiteLLM budget enforcement, async scheduling fixes).

---

## 2. Activity Comparison

| Project | Issues (Open) | PRs (Merged/Active) | Releases (24h) | Focus Area |
|---------|--------------|---------------------|----------------|------------|
| **vLLM** | 7 critical/stability issues | 10+ PRs (ROCm, FlashInfer, PDL) | 0 | Serving engine |
| **SGLang** | 6 stability issues (PP, benchmarks) | 8 PRs (NCCL 2.30, memory) | 0 | Serving engine |
| **llama.cpp** | 5 open issues | 7 releases (b12018–b12024), 10+ PRs | 7 | Local runtime |
| **Ollama** | 10 issues (Windows-heavy) | 8 PRs (MLX, memory, samplers) | 0 | Local runtime |
| **LiteLLM** | 3 open (streaming, file routing) | 7 PRs (Redis, OAuth, budgets) | 2 | Gateway/proxy |
| **Unsloth** | 8 issues (GPU bugs, UI) | 14 PRs (UI glass, optimizations) | 0 | Training + local inference |

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4/V4.1** | ✅ (SM8x pending) | ✅ (gfx950 optimized) | ❌ | ❌ | ❌ |
| **Qwen3.8 (MoE)** | ✅ (ROCm gfx950) | ✅ (ROCm) | ❌ | ❌ | ❌ |
| **Gemma 4** | ✅ (with regressions) | ❌ | ✅ (test support) | ✅ (Windows buggy) | ❌ |
| **MiniMax-M3.1** | ❌ | ✅ (GB300 docs) | ❌ | ❌ | ❌ |
| **Kimi-K3** | ✅ (ROCm) | ❌ | ❌ | ❌ | ❌ |
| **Metis-1.6** | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Llama 4** | ❌ | ❌ | ✅ (bf16 only) | ❌ | ❌ |
| **Vision-language (VL)** | ViT CUDA Graph (WIP) | ❌ | ❌ | ✅ (CLI images) | ❌ |
| **Ascend NPU** | ❌ | ❌ | ❌ | ❌ | RFC (#10772) |

**Leader**: llama.cpp leads in model breadth (Metis, Gemma 4, Llama 4), but vLLM/SGLang lead in production-scale serving (MoE optimization, ROCm). Unsloth is the only project pursuing Huawei Ascend NPU.

---

## 4. Performance Frontier

| Optimization Domain | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|--------------------|------|--------|-----------|--------|---------|
| **KV cache / paged attention** | ✅ Dynamic PDL (Hopper/Blackwell) | ✅ | ✅ | ❌ | ❌ |
| **Quantization** | ✅ FP8, INT4 | ✅ | ✅ IQ3, Q4/Q5 (SYCL) | ✅ Q4_K_M (requested) | ❌ |
| **Multi-modal** | ViT CUDA Graph (RFC) | ❌ | Group norm (WebGPU) | ✅ speech cache fix | ❌ |
| **Distributed serving** | ✅ Async scheduling | ✅ NCCL 2.30 EP | ❌ | ❌ | ✅ PP fused optimizers |
| **MoE kernels** | ✅ ROCm fused | ✅ NCCL EP A2A | ❌ | ❌ | ❌ |
| **Memory management** | ✅ Prompt validation | ✅ Deferred async loads | ❌ | ✅ LFM3-Omni fix | ❌ |
| **CPU inference** | ❌ | ❌ | ✅ | ✅ | ❌ |

**Frontier**: vLLM and SGLang are neck-and-neck on distributed serving (PP, MoE, NCCL). llama.cpp dominates quantization formats and CPU/backward-compatibility. Ollama and Unsloth focus on MLX (Apple Silicon) and local runtime efficiency.

---

## 5. Layer Positioning

| Layer | Projects |
|-------|----------|
| **Training / Fine-tuning** | Unsloth |
| **Local Runtime** | llama.cpp, Ollama |
| **Serving Engine** | vLLM, SGLang |
| **Gateway / Proxy** | LiteLLM |
| **Hybrid (Serving + Local)** | Ollama (CLI-based), Unsloth (Studio) |

**Key differentiators**:

- **vLLM / SGLang**: Designed for multi-GPU cluster serving; focus on throughput, latency, and inference scalability. Both target Kubernetes/deployed AI APIs.
- **llama.cpp**: Designed for local/CPU inference; broadest hardware support (CPU, GPU, NPU, mobile). No server—runs as library.
- **Ollama**: Wraps engines (llama.cpp, vLLM backend) into a simple CLI/daemon. Targets developers wanting local LLMs without infrastructure complexity.
- **LiteLLM**: Sits in front of any backend (vLLM, Ollama, OpenAI, Anthropic, Azure) and provides unified API, rate limiting, auth, observability. Pure proxy.
- **Unsloth**: Unique position—trains models (4-bit LoRA viaLlamaFactory integration) *and* provides Studio UI for local inference. Bridges training → inference.

---

## 6. Trend Signals

### What Infrastructure Engineers Should Watch

1. **ROCm AMD GPU is becoming first-class**: Both vLLM and SGLang are heavily investing in gfx950/MI355X optimizations. If you're deploying on AMD (common in cost-sensitive or China deployments), expect production-ready ROCm support within Q1–Q2 2026.

2. **Multi-modal is moving from experimental to production**: vLLM's ViT CUDA Graph RFC signals that vision-language models will soon match text-only throughput. Unsloth's CLI image support and llama.cpp's WebGPU group norm kernel indicate the trend is universal.

3. **NCCL 2.30 is a step-change for MoE**: SGLang's NCCL EP backend for MoE all-to-all reduces decode latency meaningfully. Distributed MoE serving will improve across the ecosystem.

4. **LiteLLM is becoming the standard proxy layer**: Budget enforcement, key revocation, and Redis-backed rate limiting are maturing. If you run a multi-model API, LiteLLM is increasingly the default choice.

5. **Windows support is lagging**: Ollama, llama.cpp, and Unsloth all show Windows-specific regressions (connection resets, GPU bugs, UI flickering). Teams on Windows should validate workloads before production.

6. **Apple Silicon MLX is maturing**: Ollama and Unsloth are fixing memory leaks, token repeat limits, and CUDA library loading. MLX is viable for local development but not yet for high-throughput serving.

### What Application/Agent Developers Should Watch

- **Don't assume model defaults are respected** (LiteLLM #14052 fixed this)—always explicitly set temperature/top_p when consistency matters.
- **JSON tool calling is fragile** across engines—Ollama's generic parser and vLLM's HYV4 both have edge cases.
- **Streaming edge cases** remain: Amazon Nova (LiteLLM), OpenRouter (LiteLLM), and Bedrock guardrails (LiteLLM) all had streaming bugs fixed this cycle.
- **If using quantized speculative decoding** (llama.cpp), watch #25618—divergence from non-quantized runs is a known issue.

---

*Report generated from GitHub activity across vllm-project/vllm, sgl-project/sglang, ggml-org/llama.cpp, ollama/ollama, BerriAI/litellm, and unslothai/unsloth on 2026-11-01.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to generate a vLLM digest for 2026-11-01 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Key observations from the data:

1. **Releases & Breaking Changes**: No releases in the last 24h

2. **New Model & Hardware Support**:
- DeepSeek-V4-Flash support for SM8x (Ampere A100/A800) - Issue #50576
- ViT Full CUDA Graph support (multi-modality) - Issue #38175
- ROCm AMD gfx950 / MI355X performance optimization - Issues #57149, #59575
- Kimi-K3 support on ROCm - Issue #50682

3. **Performance & Optimization**:
- Dynamic PDL enablement for Hopper/Blackwell - Issue #40543
- Qwen3.8-2.4T-A95B optimization for gfx950 - Issue #57149
- Various ROCm optimizations
- MOE oracle/linear kernel migration - Issue #54959

4. **Stability & Regressions**:
- Bug: Hybrid Mamba + KV connector prefix-hit divergence - Issue #46453
- Bug: CUDA device-side assert with Qwen3.6-35B-A3B-NVFP4 + MTP - Issue #44734
- Bug: INCConfig doesn't support hybrid INT4+FP8 AutoRound - Issue #46311
- Bug: XPU compressed-tensors WNA16 MoE selector - Issue #43750
- Bug: Gemma 4 + online fp8 image requests crash - Issue #63732
- Bug: Async scheduling + preemption crashes - Issue #63549


- Various tool-calling and streaming bugs

5. **What This Means for Application Developers**:
- Improvements in multi-modal support
- Better ROCm support
- Bug fixes for tool calling
- Performance improvements

I'll focus on the emerging trends in the GitHub data, highlighting the project's expanding capabilities and developer-centric improvements. The digest reveals ongoing efforts to enhance model support, performance, and cross-platform compatibility, with particular attention to emerging hardware and model architectures.</think>

# vLLM Digest — 2026-11-01

## 1. Today's Highlights

The vLLM project continues active development across ROCm AMD GPU optimization (gfx950/MI355X), multi-modal ViT CUDA Graph support, and DeepSeek model enablement. Several performance PRs landed targeting ROCm prefill attention and memory management, while the community flagged regressions in async scheduling and Gemma 4 FP8 quantization that require attention.

## 2. Releases & Breaking Changes

*No new releases in the last 24 hours.*

## 3. New Model & Hardware Support

| Model / Hardware | Description | Issue/PR |
|------------------|-------------|----------|
| **DeepSeek-V4-Flash / V4-Flash-0731** | Support request for SM8x (Ampere A100/A800, RTX 30xx) — currently only runs on Hopper/Blackwell | [#50576](https://github.com/vllm-project/vllm/issues/50576) |
| **ViT Full CUDA Graph** | RFC tracker for enabling CUDA Graph on Vision Transformer encoders (Qwen3-VL, GLM-V, Kimi K2.5) to improve multi-modal serving performance | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| **Kimi-K3 on ROCm** | Feature enablement and performance optimization tracking for AMD GPUs | [#50682](https://github.com/vllm-project/vllm/issues/50682) |
| **Qwen3.8-2.4T-A95B** | ROCm gfx950/MI355X optimization plan and tracker | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **Qwen3.8-Flash-Next** | ROCm optimization for amd/Qwen3.8-Flash-Next-Quark-MXFP4 (MXFP4 MoE, GatedDeltaNet) | [#59575](https://github.com/vllm-project/vllm/issues/59575) |

## 4. Performance & Optimization

| Area | Change | Details | PR/Issue |
|------|--------|---------|----------|
| **ROCm Prefill Attention** | FP8 Triton kernels | Accelerates prefill/extend attention on gfx942 with per-tensor FP8 Q/K/V when FP8 KV cache enabled | [#62913](https://github.com/vllm-project/vllm/pull/62913) |
| **ROCm Sliding-Window Prefix Prefill** | Skip masked tiles | Triton kernel starts at first reachable tile instead of tile zero, reducing wasted compute | [#63867](https://github.com/vllm-project/vllm/pull/63867) |
| **GLM-5.3-Flash (ROCm)** | Eliminated int32/int64 casts | Dropped copies in kpool sparse indexer — removes GPU→CPU sync on every prefill call | [#63910](https://github.com/vllm-project/vllm/pull/63910) |
| **GLM-5.3-Flash (ROCm)** | Chunk KDA optimization | Pass precomputed chunk indices to chunk_kda, avoiding redundant `prepare_chunk_indices` calls | [#63072](https://github.com/vllm-project/vllm/pull/63072) |
| **Model Loader** | FastSafetensors memory bound | Bound peak memory with 0.4 fit planner to prevent OOM on large shards | [#55985](https://github.com/vllm-project/vllm/pull/55985) |
| **Dynamic PDL** | Hopper/Blackwell low-latency | Enable TRTLLM/TORCHINDUCTOR PDL flags for fused QKV projection and torch.compile'd kernels | [#40543](https://github.com/vllm-project/vllm/issues/40543) |
| **KV Offload** | Mixed-step async loads | Deferred async loads in mixed decode/prefill steps to prevent blocking | [#64236](https://github.com/vllm-project/vllm/pull/64236) |
| **FlashInfer** | All-reduce size override | Honor explicit `fi_allreduce_fusion_max_size_mb` configuration | [#53852](https://github.com/vllm-project/vllm/pull/53852) |

## 5. Stability & Regressions

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | Async scheduling + preemption crash | KeyError `all_token_ids[req_id]` in `_update_states` on V1 Model Runner with async scheduling enabled (Ascend 910B NPUs) | — |
| **High** | Gemma 4 + FP8 quantization crash | Image requests crash since v0.23.0 — FP8-cast pixel values reach quantized patch_embedder; v0.22.0 works | — |
| **Medium** | Hybrid Mamba + KV connector | Per-group prefix-hit divergence and vLLM engine crash | — |
| **Medium** | CUDA device-side assert | Qwen3.6-35B-A3B-NVFP4 + MTP crashes on nightly | — |
| **Medium** | INCConfig hybrid INT4+FP8 | AutoRound checkpoints produce garbage output — weight_scale_inv not loaded | — |
| **Medium** | XPU compressed-tensors MoE | WNA16 MoE selector ignores XPU platform, crashes on Marlin path | — |
| **Low** | ROCm kernel_paged_attention_2d | Illegal memory access (hipErrorLaunchFailure) on gfx950 under long-context decode | — |
| **Low** | Tool calling streaming | Invalid streaming JSON for duplicate argument keys in HYV4 parser | [#60788](https://github.com/vllm-project/vllm/pull/60788) |

## 6. What This Means for Application Developers

- **Multi-modal workloads**: ViT CUDA Graph support is in progress — significant prefill throughput gains expected for Qwen3-VL, GLM-V, and Kimi K2.5 models once landed.
- **AMD ROCm users**: Continuous optimization for gfx950/MI355X (Qwen3.8, GLM-5.3) — expect improved prefill decode throughput. Monitor [#57149](https://github.com/vllm-project/vllm/issues/57149) for the optimization roadmap.
- **DeepSeek users on Ampere**: No SM8x support yet — follow [#50576](https://github.com/vllm-project/vllm/issues/50576) for enablement timeline.
- **Gemma 4 + FP8**: If using online FP8 quantization, avoid v0.23.0; the regression affects image inputs.
- **Async scheduling**: Applications using async scheduling with preemption should test thoroughly on current main — [#63549](https://github.com/vllm-project/vllm/issues/63549) reports crashes under load.
- **Tool calling**: Streaming edge cases with parallel tool calls in HYV4 parser are being fixed — ensure you're on latest if using function calling features.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to generate a SGLang digest for 2026-11-01 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Latest Releases**: None in the last 24h

**Latest Issues** (top 30 by comment count):
1. #26340 - CUDA Coredump Tracker (351 comments) - Auto-collected CUDA coredump events
2. #42752 - [CI] Flaky tests and CI infrastructure failures (160 comments) - Tracking flaky tests
3. #23705 - [Roadmap] Adaptive Speculative Decoding Roadmap (15 comments)
4. #33422 - [Perf] DeepSeek-V4 dsv4 prefill on SM120 (10 comments) - Performance issue
5. #35772 - [CLOSED] [Bug] Qwen3-VL vision features diverge (4 comments)
6. #37478 - [CLOSED] [ROCm] IndexerKPool calls aiter fp8_mqa_logits unbounded (3 comments)
7. #45816 - [RFC] Complete migration to the shared api.v1 backend API (3 comments)
8. #32774 - [Roadmap] Integrate NCCL 2.30 Features into SGLang (3 comments)
9. #37419 - [CLOSED] [Feature] Avoid raw media input prefixes in multimodal error logs (2 comments)
10. #37421 - [CLOSED] CI: tests flaking on ubuntu-latest (2 comments)
11. #36829 - [CLOSED] GLM-5.3-Flash EAGLE3/MTP issues (2 comments)
12. #37349 - [CLOSED] [Guide] Setup and Troubleshooting for SGLang on V100 (2 comments)


13. #37342 - [CLOSED] [Bug] DeepSeek-V4-Flash-0731 fails to load (2 comments)
14. #33547 - [CLOSED] [MLX] Retracted request's decode KV flush issue (2 comments)
15. #43098 - Agentic Cache Scheduling System Roadmap (Q4) (2 comments, 7 👍)
16. #46348 - [Bug] dsv41: deepseek-recipe rendering differs (2 comments)
17. #37405 - [CLOSED] [RFC, inactive] (1 comment)
18. #37475 - [CLOSED] [Bug] DFlash target_layer_ids fallback issue

I notice several critical issues emerging around model compatibility, performance, and system stability. The DeepSeek-V4-Flash loading problem and rendering differences suggest ongoing challenges with specific model implementations. The ROCm-related issue and MLX decode KV flush problem indicate low-level system-level complexities. Performance concerns, particularly with DeepSeek-V4 prefill on SM120, highlight the need for continued optimization efforts.

The roadmap items reveal strategic directions in speculative decoding, NCCL integration, and cache scheduling. These proposals point to advanced system-level improvements aimed at enhancing efficiency and performance across different computational environments.

Several newly opened issues focus on critical system-level bugs and features. The bug reports cover significant problems like PP disaggregated decode failures, benchmark dataset dependencies, and model URI overrides. Architectural concerns include CPU mask pinning and EAGLE draft extend crashes, indicating complex system-level challenges.

The pull requests demonstrate ongoing work in dependency management, documentation, and system refactoring, with a notable focus on NCCL integration and comprehensive system modifications.

Specific technical developments include DeepSeek V4.1 optimizations on AMD GPUs, memory management improvements, and performance enhancements for CPU token allocation. Documentation efforts are supporting advanced configurations like MiniMax-M3.1-Flash and exploring kernel and quantization features.

Key areas of focus involve critical system modifications across NCCL, CUDA, ROCm, and Blackwe platforms, addressing performance bottlenecks, hardware-specific optimizations, and infrastructure reliability improvements.</think>

# SGLang Digest — 2026-11-01

## 1. Today's Highlights

Active development continues across multiple fronts: NCCL 2.30 integration is advancing with a new PR adding NCCL EP as an optional MoE all-to-all backend for low-latency decode (#47600). The roadmap for adaptive speculative decoding (#23705) and agentic cache scheduling (#43098) signal longer-term architectural investments. Meanwhile, several correctness bugs affecting production scenarios — including PP disaggregated decode garbage output (#47613) and benchmark offline failures (#47420) — remain open.

---

## 2. Releases & Breaking Changes

- **No releases** in the last 24 hours.
- **API Migration In Progress**: RFC #45816 tracks the complete migration to the shared `api.v1` backend API, covering the generator, processor, and router components. This is a structural refactor that will unify generation behind the Rust server's `api.v1.Generate` endpoint.

---

## 3. New Model & Hardware Support

| Model / Hardware | Status | Notes |
|---|---|---|
| **DeepSeek-V4.1** (AMD gfx950) | Optimization landed | MoE combine fused into decode all-reduce (#42504); dense GEMMs routed to aiter above 8 rows (#42499) |
| **MiniMax-M3.1-Flash** (GB300) | Documentation added | PD AgentX points added to cookbook (#47699) — supports Dynamo + SGLang with 6 DEP2 prefill workers |
| **Intel Xeon CPUs** | Roadmap active | Q4 2026 roadmap (#44675) focuses on cost-effective small/medium LLM serving, MoE execution, and diffusion workloads |
| **NCCL 2.30** | Integration in progress | EP support (#47600), cross-group M-to-N transfer, zero-SM communication — tracked in #32774 |

---

## 4. Performance & Optimization

| Area | Change | Details |
|---|---|---|
| **DeepSeek-V4 prefill (SM120)** | Under investigation | 4× RTX PRO 6000 (TP=4) delivers ~2–7K tok/s vs ~12.5K reported via vLLM/marlin — issue #33422 seeks tuning guidance |
| **MoE all-to-all (NCCL EP)** | New backend | #47600 adds NCCL EP as optional low-latency MoE A2A backend for decode workloads |
| **CPU token allocator** | Optimization landed | #42520 defers free-list copies until allocation pressure, reducing request turnover overhead |
| **Memory pool** | Validation added | #42519 now rejects prompts that cannot reserve paged KV headroom rather than silently queuing impossible requests |
| **DeepSeek-V4.1 (AMD gfx950)** | Kernel fusion | MoE combine folded into decode all-reduce; dense GEMMs routed to aiter for >8 rows (6.1 µs vs 10.8 µs) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| **High** | PP disaggregated decode produces garbage (runs of token 0) when `pp_async_batch_depth > pp_size / 2` | Open — #47613 | No |
| **High** | Benchmark `--dataset-name random` fails on offline networks (requires ShareGPT download) | Open — #47420 | No |
| **High** | EAGLE draft extend crashes with negative dimension under DP attention + FlashInfer A2A + prefill CUDA graph | Open — #47490 | No |
| **Medium** | Rust server advertises loopback/unroutable address to other nodes (#47509); attention-DP listeners pin frontend to same CPU cores (#47598) | Open | No |
| **Medium** | DFlash `target_layer_ids` fallback guesses wrong tap layers; fails silently (#37475) | Closed | — |
| **Medium** | S3 model URI overrides explicit remote instance with runai_streamer (#47428) | Open | No |
| **Low** | CUDA coredump tracker (#26340) — 351 comments of auto-collected events from CI | Ongoing monitoring | — |
| **Low** | Flaky CI tests tracked in #42752 — 160 comments | Ongoing | — |

---

## 6. What This Means for Application Developers

1. **NCCL 2.30 is coming** — If you run multi-GPU MoE workloads, the new NCCL EP backend (#47600) offers lower-latency all-to-all operations. Monitor the PR for availability.

2. **Benchmark users: beware offline environments** — Running `bench_serving --dataset-name random` now requires HuggingFace connectivity. If you're in an offline or restricted network, consider pre-downloading datasets or using local prompts.

3. **Watch PP disaggregated decode** — If you use pipeline parallelism with asynchronous batching, avoid settings where `pp_async_batch_depth > pp_size / 2` until #47613 is fixed.

4. **API v1 migration is underway** — The Rust server's generation API is consolidating. If you rely on internal APIs, check #45816 for migration timelines.

5. **AMD GPU improvements** — DeepSeek-V4.1 decode on gfx950 now benefits from fused kernels and aiter routing. AMD users should see latency gains on MoE workloads.

6. **Memory safety** — The new prompt validation (#42519) prevents silent queueing of impossible prompts. This changes error behavior but improves debuggability.

---

*Generated from GitHub data for sgl-project/sglang on 2026-11-01.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data for llama.cpp and create a structured digest for 2026-11-01.

First, let me extract the key information:

**Releases (last 24h):**
- b12024: reshaping so mm on 2d instead of 3d tensor for lfm sc (#30831)
- b12023: server: cap shared decision prefixes at the first output (#30710) - fixes #30482
- b12022: server: fix /v1/responses endpoint to accept extra_params (#30959)
- b12021: mtmd: resize Gemma 4 images without letterbox padding (#30922)
- b12020: opencl: add fwht (#31434)
- b12019: chat: strip the think block in the qwen3-coder with reasoning_format none (#31380)
- b12018: sycl: fix f32 to q2_0/q4_0/q5_0 rounding in CPY (#31120)

**Key Issues:**
1. #24066 [CLOSED] - Vulkan performance drop (49 comments)
2. #21725 [OPEN] - XDNA backend feature request (37 comments)
3. #25618 [OPEN] - Speculative decoding divergence on quantized targets (35 comments)
4. #27198 [OPEN] - SYCL tensor parallelism crash (32 comments)
5. #27595 [OPEN] - SYCL memory accounting issue (23 comments)
6. #27845 [CLOSED] - Memory leak with tensor split mode (16 comments)
7. #31029 - SYCL bf conversion issue (13 comments)
8. #28902 - M-RoPE embedding batch read bug (9 comments)
9. #26409 - SYCL tensor split 3x slower (7 comments)
10. #24840 - batch_view offset bug (5 comments)


11. #31472 - spec: draft-dflash/dspark breaks temp-0 output identity (4 comments)
12. #30698 - Gemma 4 with MTP aborts on startup (5 comments)

I notice several critical developments in model support, backend improvements, and performance optimizations. The most significant updates include new quantization techniques, expanded hardware support, and critical bug fixes across different GPU backends.

Key highlights involve sophisticated server enhancements like shared decision prefixes and service mode, alongside multi-backend support for SYCL, OpenCL, and WebGPU. Performance-critical PRs address rounding issues and introduce innovative kernels for quantization, demonstrating continued architectural refinement.

The focus spans hardware-specific optimizations for Intel GPUs, new quantization formats, and backend-specific improvements targeting inference efficiency and accuracy across different hardware platforms.</think>

# llama.cpp Digest — 2026-11-01

## 1. Today's Highlights

The project continues its rapid pace with server-side improvements and multi-backend enhancements. Notable this cycle: a critical fix for the `/v1/responses` endpoint accepting extra params, OpenCL gaining FWHT support, and new SYCL rounding corrections for quantized conversions. The XDNA backend feature request (#21725) is gaining traction with 39 👍, signaling growing interest in expanded hardware support.

---

## 2. Releases & Breaking Changes

| Release | Description | PR |
|---------|-------------|-----|
| **b12024** | Reshape MM on 2D instead of 3D tensor for LFM SC | [#30831](https://github.com/ggml-org/llama.cpp/pull/30831) |
| **b12023** | Server: cap shared decision prefixes at first output | [#30710](https://github.com/ggml-org/llama.cpp/pull/30710) — fixes [#30482](https://github.com/ggml-org/llama.cpp/issues/30482) |
| **b12022** | Server: fix `/v1/responses` endpoint to accept extra_params | [#30959](https://github.com/ggml-org/llama.cpp/pull/30959) |
| **b12021** | MTMD: resize Gemma 4 images without letterbox padding | [#30922](https://github.com/ggml-org/llama.cpp/pull/30922) |
| **b12020** | OpenCL: add FWHT | [#31434](https://github.com/ggml-org/llama.cpp/pull/31434) |
| **b12019** | Chat: strip think block in qwen3-coder with `reasoning_format=none` | [#31380](https://github.com/ggml-org/llama.cpp/pull/31380) |
| **b12018** | SYCL: fix f32 to Q2_0/Q4_0/Q5_0 rounding in CPY | [#31120](https://github.com/ggml-org/llama.cpp/pull/31120) |

**No breaking changes** reported this cycle.

---

## 3. New Model & Hardware Support

- **Metis-1.6 models** — PR [#31134](https://github.com/ggml-org/llama.cpp/pull/31134) adds support for Praxis (~2.94B) and Logos (~10.2B) architectures (hybrid Mamba-2 + GQA)
- **Gemma 4** — Test support enabled in `test-llama-archs` ([#31401](https://github.com/ggml-org/llama.cpp/pull/31401))
- **PocketTTS** — Added support for voices without voice cloning ([#31429](https://github.com/ggml-org/llama.cpp/pull/31429))
- **IQ3 support (OpenCL)** — Initial support for IQ3_S, IQ3_XXS ([#31338](https://github.com/ggml-org/llama.cpp/pull/31338))
- **Group norm kernel (WebGPU)** — New kernel implementation for diffusion model support ([#31490](https://github.com/ggml-org/llama.cpp/pull/31490))
- **Adreno 830 fix** — Fixed invalid work-group size in Q6_K tiled GEMM for Snapdragon 8 Elite ([#31485](https://github.com/ggml-org/llama.cpp/pull/31485))

---

## 4. Performance & Optimization

| Area | Change | PR |
|------|--------|-----|
| **SYCL** | Exact rounding in CPY to Q4_1, Q5_1, Q8_0 — resolves flaky `test-backend-ops` | [#31465](https://github.com/ggml-org/llama.cpp/pull/31465) (fixes [#31140](https://github.com/ggml-org/llama.cpp/issues/31140)) |
| **SYCL** | Type-rejection handling refactored to explicit allowlist in MUL_MAT, SET_ROWS, CPY | [#31460](https://github.com/ggml-org/llama.cpp/pull/31460) |
| **SYCL** | Try PkgConfig for LevelZero includes — improved oneAPI 2026.x detection | [#31076](https://github.com/ggml-org/llama.cpp/pull/31076) |
| **OpenCL** | Added FWHT kernel | [#31434](https://github.com/ggml-org/llama.cpp/pull/31434) |
| **Hexagon** | Fixed DMA transfers with strides > 24 bits for v75+ devices | [#31442](https://github.com/ggml-org/llama.cpp/pull/31442) |
| **iOS** | Use `vm_allocate` instead of `posix_memalign` to fix memory tracking | [#31437](https://github.com/ggml-org/llama.cpp/pull/31437) |

---

## 5. Stability & Regressions

### Critical

| Issue | Description | Severity | Status |
|-------|-------------|----------|--------|
| [#31472](https://github.com/ggml-org/llama.cpp/issues/31472) | Spec: draft-dflash/dspark breaks temp-0 output identity on Qwen3.5MoE targets (divergence at 100% acceptance) | **High** | OPEN |
| [#31077](https://github.com/ggml-org/llama.cpp/issues/31077) | CUDA: illegal memory access with Gemma 4 + MTP after KV cache rollback | **High** | OPEN |
| [#30698](https://github.com/ggml-org/llama.cpp/issues/30698) | Gemma 4 with `--mmproj` + MTP aborts on startup (`GGML_ASSERT`) | **High** | OPEN |

### Notable

| Issue | Description | Severity | Status |
|-------|-------------|----------|--------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | Speculative decoding diverges from vanilla on quantized targets (Q4_K_M) | Medium | OPEN |
| [#26409](https://github.com/ggml-org/llama.cpp/issues/26409) | SYCL `--split-mode tensor` is 3x slower than single GPU | Medium | OPEN |
| [#27595](https://github.com/ggml-org/llama.cpp/issues/27595) | SYCL `--fit` doesn't fully account for memory, causing runtime overflow | Medium | OPEN |
| [#24840](https://github.com/ggml-org/llama.cpp/issues/24840) | Server: `batch_view` offset not propagated to `ctx_dft` | Low | OPEN |

### Fixes Landed

- [#26114](https://github.com/ggml-org/llama.cpp/pull/26114) — Fixed speculative models failing to load when running llama-server (closes #24443)
- [#30886](https://github.com/ggml-org/llama.cpp/pull/30886) — Fixed InternVL CLS token order

---

## 6. What This Means for Application Developers

1. **Server reliability**: The fix for `/v1/responses` accepting extra params and grammar trigger validation ([#31478](https://github.com/ggml-org/llama.cpp/pull/31478)) prevents a single bad request from crashing the entire server.

2. **Multi-turn reasoning**: The shared decision prefixes fix (#30710) keeps decision output embeddings available in the final batch when questions share option tokens—important for agentic workflows with tool-use.

3. **Daemon mode**: PR [#31489](https://github.com/ggml-org/llama.cpp/pull/31489) adds service mode with `.sock` control endpoint, enabling llama-server as a proper daemon with ACL-based security.

4. **SYCL users**: Rounding corrections in Q4_1/Q5_1/Q8_0 conversions resolve non-deterministic behavior on Intel GPUs; ensure you're running recent builds for bit-exact outputs.

5. **Quantized inference**: Watch [#25618](https://github.com/ggml-org/llama.cpp/issues/25618)—if using speculative decoding with quantized targets, outputs may diverge from non-speculative runs; a fix is in progress.

6. **New hardware on horizon**: XDNA backend interest (#21725) suggests future support for AMD XDNA NPUs; track that issue if targeting edge AI accelerators.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate a digest for Ollama based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Let me go through the data:

**Latest Releases (last 24h)**: None

**Latest Issues**: 19 total items
- #19427 - Gemma3:4b returns empty JSON with structured output
- #19439 - Windows RTX 5090 runner disconnects during tool calling
- #19418 - Windows 11 26H2 TCP table issues
- #19424 - Qwen models end chat when thinking ends
- #19404 - CRLF Modelfiles keep \r inside triple-quoted values
- #19425 - Generic tool parser mistakes argument strings for function names
- #19437 - LFM3-Omni speech memory grows after repeated requests
- #19436 - Make Qwen3.5 0.8B Q4_K_M quantization available
- #19435 - Models sharing a server can't have different prompt cache budgets
- #19428 - Model request: VirbiusGuard
- #19430 - TLS handshake timeout with post-quantum ClientHello
- #19420 - Fresh install trying to use Gemma4 getting errors
- #19139 - Windows connection resets with large prompts
- #18131 - MLX prefix cache memory issues on 32GB Apple Silicon
- #19249 - Claude code auto compress fails
- #1645 - Feature request: Dark mode for ollama.com (long-running)
- #15887 - Closed - MIMO v2.5 LLM request
- #18690 - Closed - top_p forcing 1.0
- #17744 - Closed - temperature from Modelfile ignored

**Pull Requests**: 22 items (showing 20)


Several significant fixes are underway: PR #19432 addresses OpenAI sampler defaults being overridden, while #19438 resolves LFM3-Omni memory growth through releasing temporary speech cache views. Additional PRs tackle MLX decision model limitations, JSON function name resolution, and Gemma4 tool call parsing. More improvements include adding tokencut to Infrastructure & Deployment, loading CUDA libraries in-process for MLX, and validating digests before blob storage.

I should also look at manifest verification before blob storage, normalizing CR line endings in Modelfile parsing, keeping multipart image parts together during truncation, and updating the README with BashBrunch integration. Windows upgrade logging needs improvement, Gemma4 expert loading for MLX requires fixes, and SuperEditr should be added to community integrations. CPU runner eviction on discrete GPUs needs addressing, along with preserving thinking blocks in Anthropic requests, making parser parameter names case-insensitive, implementing token repeat limits for MLX, and handling trailing commas in OLLAMA_ORIGINS to prevent panics.

Looking at the key developments: the recent focus is on fixing sampler defaults and MLX speech cache memory, with multiple parser and tokenizer improvements, plus some model support and community integration work. Windows continues to have several reported issues. There's no new release today, but PR #19432 closed two parameter-related bugs. For hardware, the focus is on MLX improvements for Apple Silicon and better CUDA library handling on Linux.

Memory optimization work is happening around LFM3-Omni speech caching and MLX prefix caches, with token repeat limits being added to MLX runners. On the stability front, there are several Windows-specific problems—Gemma4 errors, connection resets, TCP table issues, runner disconnections on RTX 5090—plus JSON parsing bugs and Qwen chat termination issues. For application developers, the key takeaways are that OpenAI API parameter handling has improved, MLX performance is getting better on Apple Silicon, and there are fixes addressing JSON tool parsing errors.</think>

# Ollama Digest — 2026-11-01

## 1. Today's Highlights

Ollama saw active development across multiple fronts today. The team merged a critical fix ([#19432](https://github.com/ollama/ollama/pull/19432)) that stops OpenAI-compatible endpoints from overriding model sampler defaults—LFM3 was running at temperature 1.0 instead of its packaged 0.1, and Qwen3-Coder lost its 0.7/0.8 defaults. Several PRs landed addressing MLX runner issues including memory growth in LFM3-Omni speech generation and token repeat limits. Windows users continue to report issues with Gemma4, connection resets on large prompts, and runner disconnections during tool calling.

---

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

**API Behavior Change (fixed in #19432):** The OpenAI-compatible layer was injecting hardcoded `top_p: 1.0` and `temperature` values when clients omitted them, silently overriding model-packaged defaults. This affected `/v1/chat/completions`, `/v1/completions`, and `/v1/messages`. The fix is now merged.

---

## 3. New Model & Hardware Support

| Item | Details | Links |
|------|---------|-------|
| **VirbiusGuard model request** | 0.6B bilingual (EN/中文) agent-safety & prompt-injection guard, fine-tuned from Qwen3Guard-Gen-0.6B, Apache-2.0 license | [#19428](https://github.com/ollama/ollama/issues/19428) |
| **Qwen3.5 0.8B Q4_K_M quantization** | Request to add missing quantization format for CPU inference efficiency (2x faster than q8_*) | [#19436](https://github.com/ollama/ollama/issues/19436) |
| **MIMO v2.5 added to Ollama Cloud** | Xiaomi's LLM with million-token context windows, MIT license (closed request) | [#15887](https://github.com/ollama/ollama/issues/15887) |
| **MLX Gemma4 expert loading** | PR to fix MoE expert weight loading in mlx-community Gemma 4 checkpoints | [#18631](https://github.com/ollama/ollama/pull/18631) |

---

## 4. Performance & Optimization

| Area | Change | PR/Issue |
|------|--------|----------|
| **LFM3-Omni memory** | Fix for speech cache memory growth—temporary KV allocations now released after each utterance | [#19438](https://github.com/ollama/ollama/pull/19438) (fixes [#19437](https://github.com/ollama/ollama/issues/19437)) |
| **MLX token repeat** | Added 101-token repeat limit to mlxrunner to prevent stuck generations | [#19422](https://github.com/ollama/ollama/pull/19422) |
| **MLX prompt expansion** | Allows longer state/schema inputs for MLX decision models while bounding total prompt size | [#19408](https://github.com/ollama/ollama/pull/19408) |
| **MLX CUDA libraries** | Load bundled CUDA libraries in-process on Linux to fix mlx_cusolver dependency resolution | [#19433](https://github.com/ollama/ollama/pull/19433) |
| **Prompt cache budgets** | Issue raised: global cache budget prevents per-model configuration on shared servers | [#19435](https://github.com/ollama/ollama/issues/19435) |

---

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | Windows: Gemma4 returns 500 internal server errors on all prompts | [#19420](https://github.com/ollama/ollama/issues/19420) |
| **High** | Windows: Connection resets after ~15 seconds with large prompts (RTX 3090, Qwen3.8-27B) | [#19139](https://github.com/ollama/ollama/issues/19139) |
| **High** | Windows RTX 5090: Runner disconnects during tool calling, HTTP 500 on /tokenize | [#19439](https://github.com/ollama/ollama/issues/19439) |
| **Medium** | Qwen models end entire chat when thinking (`</thinking>`) ends | [#19424](https://github.com/ollama/ollama/issues/19424) |
| **Medium** | Gemma3:4b returns empty JSON with long extraction prompts + structured output | [#19427](https://github.com/ollama/ollama/issues/19427) |
| **Medium** | Tool parser selects wrong function when arguments contain another function's name | [#19425](https://github.com/ollama/ollama/issues/19425) — fix at [#19426](https://github.com/ollama/ollama/pull/19426) |
| **Medium** | Gemma4 leaves tool call JSON lists unclosed with long strings | [#19274](https://github.com/ollama/ollama/pull/19274) |
| **Low** | CRLF Modelfiles preserve `\r` inside triple-quoted values | [#19404](https://github.com/ollama/ollama/issues/19404) — fix at [#19431](https://github.com/ollama/ollama/pull/19431) |
| **Low** | Windows 11 26H2 TCP table state ambiguity for loopback endpoint | [#19418](https://github.com/ollama/ollama/issues/19418) |
| **Low** | TLS handshake timeout when networks drop post-quantum X25519MLKEM768 ClientHello | [#19430](https://github.com/ollama/ollama/issues/19430) |

---

## 6. What This Means for Application Developers

1. **Sampler behavior is now correct**: If you use `/v1/chat/completions` with Ollama, your models will now respect their native temperature/top_p defaults instead of being forced to 1.0. This is particularly important for LLMs like LFM3 (default 0.1) and Qwen3-Coder (0.7/0.8).

2. **JSON tool calls have a parsing bug**: The generic tool parser can dispatch to the wrong function when an argument string contains another function's name before the `name` field. A fix is pending ([#19426](https://github.com/ollama/ollama/pull/19426)).

3. **Windows users should verify compatibility**: Multiple issues are reported with Gemma4 and large prompts on Windows 11. If you're running production workloads on Windows, test thoroughly or consider Linux/macOS.

4. **MLX improvements benefit Apple Silicon users**: Speech generation memory is now properly released, and token repeat limits prevent stuck generations. The CUDA library loading fix improves Linux MLX stability.

5. **Modelfile parsing is now case-insensitive**: Parameter names like `Temperature` are now accepted alongside `temperature`, matching documentation.

6. **New community integrations**: [tokencut](https://github.com/attnstack/tokencut) (context compression proxy) and [SuperEditr](https://github.com/ollama/ollama/pull/19429) (macOS menu-bar proofreading app) were added to the integrations list.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-11-01 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the issues and PRs:

**Issues (total 78, showing top 30 by comment count):**
1. #14398 - Feature: Requests/tokens per day rate limit (15 comments) - CLOSED
2. #14052 - Bug: x-litellm-tags not routing requests to correct model (10 comments) - CLOSED
3. #24152 - Bug: Key-level per-model rate limits don't trigger fallbacks (7 comments) - CLOSED
4. #26413 - Bug: "think": false is ignored; reasoning_content and thinking_blocks still returned (7 comments) - CLOSED
5. #48145 - Bug: JSON-defined openai-like providers lose tools by default if model is not in catalog (7 comments) - OPEN
6. #22747 - Bug: azure_api_type: responses uses aiohttp transport with ~60s socket idle timeout (6 comments) - CLOSED
7. #46095 - Bug: OpenRouter streaming chunks report the requested router name instead of the model OpenRouter served (6 comments) - CLOSED
8. #40260 - Bug: OpenAI/Azure clean stream EOF without finish_reason is reported as successful completion (5 comments) - CLOSED
9. #33960 - Feature: Per-group allowed_fails / cooldown_time / enable_health_check_routing via routing_groups (4 comments) - CLOSED
10. #34636 - Bug: Redis cache test fails when using `url` field (4 comments) - CLOSED
11. #34662 - Feature: Add recurring availability schedules for provider credentials (4 comments) - CLOSED


12. #35589 - Bug: amazon_nova streaming fails 100% - httpx zstd decoder reuses a finished decompressobj (4 comments) - OPEN
13. #48364 - Bug: Token spend/budget limit not enforced for keys created or used for Admin users level (4 comments) - CLOSED
14. #25757 - Bug: Model-based file routing encoded file_id exceeds Azure OpenAI 64-char limit (3 comments) - OPEN
15. #26070 - Feature: Expose retry

_after on RateLimitError (3 comments) - CLOSED
16. #26163 - Bug: websearch_interception Anthropic follow-up call passes duplicate params (3 comments) - CLOSED
17. #26376 - Bug: langfuse_otel callback drops OTEL spans under asyncio.gather() (3 comments) - CLOSED
18. #26387 - Bug: BedrockGuardrail streaming hook drops HTTPException after HTTP 200 (3 comments) - CLOSED
19. #26411 - Bug: litellm can't handle long running tasks via a2a (3 comments) - CLOSED
20. #32903 - Bug: GET /v1/models reports owned_by: "openai" for every model (3 comments) - CLOSED
21. #34501 - Feature: Please support GCP Managed MCP Servers (3 comments) - CLOSED
22

Several bugs were addressed in this batch, particularly around streaming compatibility with Amazon Nova and Anthropic implementations. New features include exposing retry_after for rate limit errors and supporting GCP-managed MCP servers, while various fixes addressed telemetry span loss, HTTP exception handling in Bedrock guardrails, and model ownership attribution issues.

Additional problems emerged with A2A task handling, file routing constraints, and team budget enforcement. The latest pull requests (#48517, #49488) introduce HTTP fixes and accounting features related to usage compilation.</think>

# LiteLLM Digest — 2026-11-01

## Today's Highlights

The LiteLLM project continues its rapid pace of proxy hardening and accounting improvements. Today's most significant developments include a new public endpoint for key revocation (#49545), enhanced Redis-backed router cooldowns (#49525), and fixes to OAuth header limits for GitHub MCP integrations (#48517). Several bugs affecting streaming responses, rate limiting, and budget enforcement were closed.

## Releases & Breaking Changes

| Item | Description | Status |
|------|-------------|--------|
| **Hot reload with multiple workers** | `--reload` now properly restarts the entire worker pool instead of falling back to a single worker when using `--num_workers`, `NUM_WORKERS`, or `DEFAULT_NUM_WORKERS_LITELLM_PROXY`. This is a breaking change for environments relying on the previous behavior. | Merged (#45909) |
| **Budget reservation fix** | Fixed budget reservation not being recorded when `custom_auth_run_common_checks` reserves `max_budget` spend with no `database_url`, causing requests to fail on subsequent calls. | Merged (#45907) |

---

## New Model & Hardware Support

No new model or hardware support announcements in the last 24 hours.

---

## Performance & Optimization

| Area | Change | PR |
|------|--------|-----|
| **Router cooldowns & global counters** | Router cooldowns and TPM/RPM counters now run on the Rust store, behind the same Python store surface. Redis keys, value bytes, and TTLs match existing pod behavior for seamless sharing between old and new deployments. | #49525 |
| **Redis cloud credentials** | Added rotating cloud credential support for Redis: ElastiCache (IAM), Memorystore (GCP IAM), and Azure Cache (Entra ID). | #49510 |
| **Usage export enrichment** | Daily activity export now includes key and user metadata objects on every row for chargeback workflows. | #49360 |
| **Spend logs** | New opt-in `spend_logs_prompt_storage: latest_turn` mode keeps only the current turn of stateless requests to reduce repeated conversation data. | #49544 |
| **HuggingFace TEI rerank pricing** | Fixed `register_model` / `model_info` costs for TEI rerank deployments that were incorrectly billed at $0. | #45990 |
| **Bedrock GovCloud West** | Raised Llama 3 max output to 8K to match model card specifications. | #49543 |

---

## Stability & Regressions

### Critical (P0–P1)

| Issue | Summary | Status |
|-------|---------|--------|
| **#14052** | `x-litellm-tags` not routing requests to correct model; fallback priority unclear | Fixed (#14052) |
| **#24152** | Key-level per-model rate limits (`model_rpm_limit`/`model_tpm_limit`) don't trigger fallbacks | Fixed (#24152) |
| **#48364** | Token spend/budget limit not enforced for admin user keys — admin users can exceed budget | Fixed (#48364) |
| **#48809** | Team-member budget exhaustion blocks model discovery (`GET /models`, `GET /v1/models`) with HTTP 422, breaking OpenAI-compatible clients | Fixed (#48809) |

### High

| Issue | Summary | Status |
|-------|---------|--------|
| **#26413** | `think: false` ignored; `reasoning_content` and `thinking_blocks` still returned | Fixed (#26413) |
| **#22747** | Azure Responses API fails with `ServerDisconnectedError` for models requiring >60s reasoning time (GPT-5-Pro) — aiohttp has hardcoded 60s socket idle timeout | Fixed (#22747) |
| **#46095** | OpenRouter streaming reports requested router name instead of actual model served | Fixed (#46095) |
| **#40260** | Clean stream EOF without provider `finish_reason` reported as successful completion with estimated usage | Fixed (#40260) |
| **#35589** | Amazon Nova streaming fails 100% — httpx zstd decoder reuses finished `decompressobj` on multi-frame SSE | Open (#35589) |

### Medium

| Issue | Summary | Status |
|-------|---------|--------|
| **#48145** | JSON-defined openai-like providers lose tools if model not in catalog | Open (#48145) |
| **#26376** | `langfuse_otel` callback drops ~1 in 3 OTEL spans under `asyncio.gather()` concurrency | Fixed (#26376) |
| **#26387** | BedrockGuardrail streaming hook drops `HTTPException` after HTTP 200, producing broken SSE stream | Fixed (#26387) |
| **#26411** | LiteLLM can't handle long-running A2A tasks | Fixed (#26411) |
| **#32903** | `GET /v1/models` returns `owned_by: "openai"` for all models regardless of actual provider | Fixed (#32903) |
| **#48813** | OCI Gemini ignores every system message except the last one | Fixed (#48813) |
| **#49449** | Anthropic streaming guardrails parse transport chunks as complete SSE frames, causing warning spam | Open (#49449) |

### Low / Informational

| Issue | Summary | Status |
|-------|---------|--------|
| **#34636** | Redis cache test fails when using `url` field | Fixed (#34636) |
| **#25757** | Model-based file routing encoded `file_id` exceeds Azure OpenAI 64-char limit (67-80+ chars) | Open (#25757) |
| **#44531** | A2A 1.0-only upstream agents: `GetTask` downgraded to 0.3 and fails with HTTP 500 | Open (#44531) |

---

## What This Means for Application Developers

1. **Rate limiting now supports daily limits** — You can now set `requests_per_day` and `tokens_per_day` in addition to per-minute limits, addressing providers like OpenAI's free/Pro tiers. (#14398)

2. **Budget enforcement is now consistent** — Admin user keys now properly respect token spend and budget limits, closing a significant security gap. (#48364)

3. **Key revocation endpoint added** — A new public `POST /key/revoke` endpoint allows anyone who finds an accidentally published key to block it without admin access, while preserving the key for audit purposes. (#49545)

4. **MCP OAuth with GitHub now works** — GitHub's ~9KB `Content-Security-Policy` header was exceeding aiohttp's default 8190-byte limit, causing token exchange failures. This is now fixed. (#48517)

5. **Team budgets no longer break model discovery** — Previously, when a team member exceeded their budget, `GET /models` requests would fail with HTTP 422, breaking OpenAI-compatible clients. This is now resolved. (#48809)

6. **Streaming correctness improvements** — Several fixes address streaming edge cases: Amazon Nova zstd decompression, OpenRouter model naming, and Bedrock guardrail SSE handling.

7. **A2A protocol improvements** — A2A 1.0-only upstream agents now work correctly with `GetTask`, and long-running A2A tasks are handled properly. (#26411, #44531)

---

*Generated from GitHub data for BerriAI/litellm on 2026-11-01*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate a structured digest for Unsloth based on the GitHub data provided. Let me analyze the data and organize it according to the specified sections.

Looking at the data:

1. **Latest Releases**: None in the last 24h
2. **Latest Issues**: 19 items total
3. **Latest Pull Requests**: 147 items total (showing top 20)

Let me organize the key information:

**Issues highlights:**
- #10772: RFC for Ascend NPU (Huawei) backend support - important for China market
- #16317: Unsloth North Mini Code stream interrupted error with Bearer Token
- #16318: Flickering on Linux (accessibility issue)
- #10613: Studio sets GGML_CUDA_P2P=1 on non-NVLink GPUs - bug that corrupts output
- #14582: Verbose UI feature request
- #15840: File size limit for audio uploads (200MB limit)
- #16340: CLI can't take images for VLM inference
- #16313: Studio search results should persist
- #16294: MiniMax-H3 crashes with "No available kernel" on Windows
- #16263: GGUF model fails to load from ModelScope
- #16273: Can't load models - various errors
- #16267: Studio model picker stalls ~20 min
- #16342: DGX Spark guidance question
- #16330: CLI inference shutdown warning delay
- #16331: No way to pass trust_remote_code
- #16309: Settings stored only in localStorage
- #16303: Custom background disappears
- #16274: Browser pop-out feature request
- #15527: Exllama inference engine support request


- #16335: Studio glass UI improvements
- #16356: Log redaction optimization
- #16355: Gallery PNG optimization
- #16354: Voice listing optimization
- #16337: Liquid Glass design
- #16336: Glass lens feature
- #16334: macOS system glass
- #16333: Glass theme
- #16353: Dataset folder optimization
- #16352: Seed Hub optimization
- #16287: Background settings polish
- #16347: CLI vision model image support
- #15952: Transcribe larger audio files
- #16348: RTL chat support
- #16287: Paste as Markdown

Now I'm looking at the pull requests that were just merged. These appear to be UI enhancements and performance optimizations, including glass effects, logging improvements, and various polish items for the studio interface.

There are also several optimization-focused PRs around listing and caching, along with fixes for RTL support, larger audio transcription, and Markdown paste functionality.</think>

# Unsloth Digest — 2026-11-01

## 1. Today's Highlights

The Unsloth team is pushing significant Studio UI refinements, including glass morphism effects (macOS system glass, liquid glass, glass lens) and RTL chat support. Performance optimizations are landing across the board—log redaction, gallery loading, voice listing, and dataset folder handling all see meaningful improvements. On the hardware front, a request for Ascend NPU (Huawei) backend support signals Unsloth's expansion into China's AI accelerator ecosystem.

## 2. Releases & Breaking Changes

No releases detected in the last 24 hours.

## 3. New Model & Hardware Support

- **Ascend NPU (昇腾) Backend**: Issue [#10772](https://github.com/unslothai/unsloth/issues/10772) proposes adding Huawei's Ascend NPU support—the dominant AI accelerator in China's data centers—for LLM fine-tuning and inference. Currently a request for comment; no implementation timeline.

- **ExLlamav2 Inference Engine**: Feature request [#15527](https://github.com/unslothai/unsloth/issues/15527) seeks integration of turboderp's exllamav3 inference engine. A community PR is pending merge.

- **CLI Vision Model Support**: PR [#16347](https://github.com/unslothai/unsloth/pull/16347) enables `unsloth inference` and `unsloth chat` to accept images for vision-language models—previously only training was supported.

- **trust_remote_code Support**: Issue [#16331](https://github.com/unslothai/unsloth/issues/16331) reports the CLI lacks `--trust_remote_code` flag, blocking models with custom code (e.g., LiquidAI/LFM3-Omni-2B).

## 4. Performance & Optimization

- **Log Redaction**: PR [#16356](https://github.com/unslothai/unsloth/pull/16356) optimizes `redact_log_text` by skipping regex rules that cannot match a given line, reducing per-line cost from ~3–13ms to near-zero on non-matching patterns.

- **Gallery PNG Loading**: PR [#16355](https://github.com/unslothai/unsloth/pull/16355) caches PNG recipes and resolves only symlinked clips, eliminating redundant Pillow opens on every library fetch.

- **Voice Listing**: PR [#16354](https://github.com/unslothai/unsloth/pull/16354) reduces `list_voices()` from ~4 calls to `voices_dir()` per voice (52µs each) plus duplicate JSON parsing, to a single folder lookup plus one sidecar read.

- **Dataset Folder Checks**: PR [#16353](https://github.com/unslothai/unsloth/pull/16353) eliminates per-file folder re-listing and stat operations during dataset caption-stem conflict checks.

- **Seed Hub Filename Processing**: PR [#16352](https://github.com/unslothai/unsloth/pull/16352) compiles split label matchers once and splits hub filenames by string, improving large-sharded dataset preview performance.

- **Pipeline Parallel Fused Optimizers**: PR [#16351](https://github.com/unslothai/unsloth/pull/16351) extends pipeline parallel skip coordination to fused optimizers (SGD, Adam, AdamW with `fused=True`).

- **GRPO Packing Regression Fix**: PR [#16349](https://github.com/unslothai/unsloth/pull/16349) disables packed forwards for models that mix tokens across packed rows (DeepSeek V4, Zaya CCA, RecurrentGemma).

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | Studio sets `GGML_CUDA_P2P=1` on non-NVLink GPUs (RTX 6000 Ada, L40/L40S, L4), silently corrupting output | Closed; PR [#6098](https://github.com/unslothai/unsloth/pull/6098) introduced the bug |
| **High** | CLI inference adds 10–18s shutdown delay after successful response | Open [#16330](https://github.com/unslothai/unsloth/issues/16330) |
| **High** | Model picker stalls ~20 min, re-probing every cached GGUF against HuggingFace | Open [#16267](https://github.com/unslothai/unsloth/issues/16267) |
| **Medium** | MiniMax-H3 crashes with "No available kernel" on Windows (torch without flash attention) | Open [#16294](https://github.com/unslothai/unsloth/issues/16294) |
| **Medium** | GGUF models fail to load from ModelScope (pinned HF revision 404s) | Open [#16263](https://github.com/unslothai/unsloth/issues/16263) |
| **Medium** | North Mini Code stream interrupted with Bearer Token + OpenAIAPI | Open [#16317](https://github.com/unslothai/unsloth/issues/16317) |
| **Low** | Flickering on Linux (Debian, X11) | Open [#16318](https://github.com/unslothai/unsloth/issues/16318) |
| **Low** | Settings stored only in browser localStorage, reset per origin | Open [#16309](https://github.com/unslothai/unsloth/issues/16309) |

## 6. What This Means for Application Developers

- **CLI now supports VLM inference**: If you're fine-tuning vision-language models via the CLI, you can now test them with `unsloth inference <model> <prompt> --image <path>`. This closes a gap where VLMs could be trained but not invoked from the command line.

- **Watch for model picker performance**: If using Unsloth Studio with many cached GGUF models, the 20-minute stall on model picker open is a known issue—consider workarounds or monitor for a fix.

- **Avoid non-NVLink GPUs in Studio for now**: The `GGML_CUDA_P2P=1` bug on RTX 6000 Ada, L40, L40S, and L4 silently corrupts output. If you use these GPUs, verify model outputs carefully or wait for a fix.

- **UI upgrades coming**: Glass themes, macOS system glass, and RTL chat support are landing—expect visual changes in upcoming releases.

- **Audio transcription limits increased**: Transcribe on audio.cpp models now supports files up to 4 hours (previously 30 minutes), per PR [#15952](https://github.com/unslothai/unsloth/pull/15952).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*