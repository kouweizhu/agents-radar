# AI Infrastructure Digest 2026-10-28

> Generated: 2026-10-28 01:37 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report for today's AI infrastructure digest. Let me analyze all the projects and create a comprehensive comparison.

Looking at the data from each project:

**vLLM:**
- Releases: None in last 24h
- Issues: Many (top 30 by comments visible)
- PRs: Multiple (stacked PRs visible)
- Key focus: Hardware support (SM8x, MI355X), ROCm optimization, KV offloading, TurboQuant

**SGLang:**
- Releases: None in last 24h
- Issues: Multiple
- PRs: Multiple
- Key focus: PD disaggregation, speculative decoding fixes, AMD support, HiCache optimization

**llama.cpp:**
- Releases: Multiple (b11930-b11944)
- Issues: Multiple
- PRs: Multiple
- Key focus: LiquidAI LFM3 models, Vulkan fixes, CUDA graphs, MoE caching

**Ollama:**
- Releases: None in last 24h
- Issues: Many
- PRs: 37 total
- Key focus: MLX support, Kolibri, Nemotron, LFM3, Windows fixes

**LiteLLM:**
- Releases: 4 patch releases (v1.103.10-v1.106.5)
- Issues: Various
- PRs: Multiple
- Key focus: Cost calculation, batch pricing, Databricks pricing, timeout forwarding

**Unsloth:**
- Releases: None in last 24h
- Issues: Multiple
- PRs: 302 items
- Key focus: Flow workflows, benchmarks, LFM3, FP8 fixes, Windows fixes

Now let me structure the comparison report.</think>

# Cross-Project Comparison — 2026-10-28

---

## 1. Ecosystem Overview

Today's AI infrastructure landscape reflects a maturing stack分化. The **serving layer** (vLLM, SGLang) is hardening disaggregation and multi-GPU scaling capabilities while racing to support emerging model architectures (DeepSeek-V4-Flash, GLM-5.3, LiquidAI LFM3). The **local/runtime layer** (llama.cpp, Ollama) is expanding multi-modal reach (audio, vision, video) and refining quantization correctness. The **gateway/orchestration layer** (LiteLLM) continues its cost control and provider abstraction focus. Meanwhile, **fine-tuning** (Unsloth) is evolving into an end-to-end ML platform with workflow orchestration, benchmarking, and eval integration.

---

## 2. Activity Comparison

| Project | Issues (visible) | PRs (visible) | Releases (24h) | Primary Focus Today |
|---------|-----------------|---------------|----------------|---------------------|
| **vLLM** | 30+ | 10+ | 0 | SM8x DeepSeek support, MI355X ROCm optimization, TurboQuant fixes |
| **SGLang** | 20+ | 15+ | 0 | PD disaggregation, speculative decoding stability, HiCache optimization |
| **llama.cpp** | 20+ | 10+ | **8** (b11930–b11944) | LFM3 family (audio, omni, VL), k-pool sparse selection, MoE caching |
| **Ollama** | 29 | 37 | 0 | MLX concurrent gen, Kolibri/Nemotron support, Windows/large prompt fixes |
| **LiteLLM** | 20+ | 10+ | **4** (v1.103.10–v1.106.5) | Batch cached token pricing, Databricks OpenJev, Gemini timeout forwarding |
| **Unsloth** | 28 | 302 | 0 | Flows workflow, Benchmarks/Evals tabs, FP8 n-gram regression, Windows disk bug |

**Key observation**: llama.cpp leads release cadence; Unsloth dominates PR volume (likely including Studio UI work); LiteLLM maintains patch velocity with cosign-verified releases.

---

## 3. Model Support Race

| Model Family | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|--------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4-Flash** | 🔶 SM8x WIP | — | — | — | — |
| **Qwen3.8-Flash-Next** | ✅ MI355X ROCm | ✅ EP2 | — | — | 🔶 FP8 n-gram bug |
| **GLM-5.3-Flash** | ✅ MXFP4 KV cache | ✅ Hopper opt | — | — | — |
| **LiquidAI LFM3** | — | — | ✅ Audio/Omni/VL | 🔶 GGUF issues | ✅ Requested |
| **Kolibri 1** | — | — | — | ✅ MLX | — |
| **Nemotron 3.5 Bolt** | — | — | — | ✅ MLX | — |
| **Gemma 4** | — | — | — | — | 🔶 Vision bug |
| **Decision models** | — | — | — | 🔶 Decision head | — |

**Who is ahead**: **vLLM** on ROCm + emerging architectures (DeepSeek, GLM); **llama.cpp** on novel architectures (LiquidAI LFM3); **Ollama** on MLX ecosystem (Kolibri, Nemotron).

---

## 4. Performance Frontier

| Optimization Area | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-------------------|------|--------|-----------|--------|---------|
| **KV cache / offloading** | 🔶 Multi-tier RFC | — | ✅ MoE hybrid LRFU | — | — |
| **Batching / scheduling** | — | 🔶 PD disaggregation | — | — | — |
| **Quantization** | 🔶 TurboQuant | — | ✅ IQ3_S Blackwell fix | — | 🔶 FP8 n-gram bug |
| **Distributed serving** | ✅ TP/EP | ✅ PD disaggregation | — | — | — |
| **Kernel optimization** | ✅ ROCm MonoKernel | — | ✅ k-pool Po2 | ✅ MLX concurrent | — |
| **Memory management** | — | ✅ HiCache O(kN) | ✅ --models-memory-max | — | 🔶 Block Swap bug |

**Frontier concentration**: The most active optimization threads are:
1. **vLLM** — ROCm kernel fusion + multi-tier KV offloading
2. **SGLang** — PD disaggregation throughput optimization
3. **llama.cpp** — MoE caching strategies and sparse selection
4. **Unsloth** — Block Swap offload correctness

---

## 5. Layer Positioning

| Layer | Projects | Positioning |
|-------|----------|--------------|
| **Serving Engine** | **vLLM**, **SGLang** | Production-grade inference servers; vLLM leads on吞吐量/多节点; SGLang leads on disaggregation + speculative decoding |
| **Local Runtime** | **llama.cpp**, **Ollama** | Local/edge inference; llama.cpp leads onarchitecture coverage + novel hardware (Hexagon); Ollama leads on ease-of-use + MLX |
| **Gateway/Proxy** | **LiteLLM** | Multi-provider abstraction + cost control; maintains provider parity + observability |
| **Fine-tuning / Studio** | **Unsloth** | End-to-end fine-tuning + evaluation + workflow orchestration; unique position bridging training → deployment |

**Competitive dynamics**:
- vLLM ↔ SGLang: Race on disaggregation maturity and speculative decoding correctness
- llama.cpp ↔ Ollama: llama.cpp as the engine Ollama wraps; divergence on MLX focus
- Unsloth ↔ LiteLLM: Unsloth owns training→inference pipeline; LiteLLM sits above serving layers for cost/routing

---

## 6. Trend Signals

### Signals from Today's Activity

| Trend | Evidence | Implication for Developers |
|-------|----------|----------------------------|
| **Disaggregation is hardening** | SGLang PD roadmap (#43699), vLLM multi-tier KV offloading RFC (#38260) | Multi-tenant inference workloads can plan for production disaggregation in 2026 Q4–Q1 |
| **Quantization correctness regressions** | IQ3_S on Blackwell (#28581), TurboQuant head_dim Po2 (#41414), Unsloth FP8 n-gram (#15632) | Don't assume quantization always works; test withGolden datasets on Blackwell/AMD before production |
| **Multi-modal edge expanding** | llama.cpp LFM3 audio/omni/vision, Unsloth vision bugs | Expect local multi-modal to become viable on consumer hardware; test vision pipelines thoroughly |
| **MLX ecosystem maturing** | Ollama Kolibri/Nemotron, MLX concurrent gen (#19197), Unsloth MLX vision bug | Apple Silicon inference is no longer experimental; production-ready for audio/text |
| **Cost observability converging** | LiteLLM batch cached token pricing, vLLM KV offloading | Expect tighter cost controls in serving layers; batch processing cost models stabilizing |
| **Agentic features emerging** | SGLang MCP tools in Studio, llama.cpp `/v1/realtime`, Unsloth Flows | Platform-level agentic infrastructure building; tool-use becoming first-class |

### What Infrastructure Engineers Should Watch

1. **PD disaggregation roadmap** — SGLang's Q4 push will define production-readiness timeline for multi-tenant prefill/decode separation
2. **Blackwell (SM120) stability** — CUDA graphs broken (#56892, #27330) across vLLM/llama.cpp; monitor for kernel fixes before deploying RTX PRO 6000 workloads
3. **ROCm MI355X** — Stacked PRs landing for Qwen/GLM; AMD datacenter inference becoming production-viable
4. **LiteLLM cost model drift** — Batch cached token billing fix (#48697) may cause cost reconciliation for existing deployments
5. **Unsloth Block Swap regression** — Qwen3.8-Flash-Next offload broken; avoid in production until #15633 resolves

---

*Cross-project synthesis — 2026-10-28*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the provided GitHub data for vLLM and create a structured digest for 2026-10-28.

Looking at the data:

## Latest Releases
- None in the last 24h

## Latest Issues (top 30 by comment count)
Let me identify the most important ones:
1. #50576 - SM8x (Ampere A100/A800) support for DeepSeek-V4-Flash - 121 comments, 16 👍 - This is the most discussed issue
2. #57149 - ROCm AMD Qwen3.8-2.4T-A95B gfx950 / MI355X Performance Optimization - 26 comments
3. #56892 - DeepSeek-V4.1-Flash on SM120 (RTX PRO 6000 Blackwell) extremely low decode throughput - 25 comments
4. #48312 - Weight Reload Correctness for RL - 22 comments
5. #38260 - Multi-tier KV offloading via vLLM offloading connector - 21 comments
6. #41838 - Eagle 2/3 acceptance length regression - 18 comments
7. #40543 - Dynamic PDL Enablement - 18 comments
8. #59575 - Qwen3.8-Flash-Next gfx950 / MI355X Performance Optimization - 16 comments
9. #61698 - BYOG reproducible evals and benchmarks for PRs - 14 comments
10. #57406 - GLM 5.3 Performance Optimization - 13 comments

## Latest Pull Requests
Looking at the most relevant ones:
- #64121 - ROCm GLM-5.3-Flash MonoKernel with MXFP4 KV cache
- #64177 - Bugfix: Omit null annotations and usage.prompt_tokens_details in chat completions


- #64176 - ROCm EPLB bugfix
- #63959 - Rust Frontend: Export engine_sleep_state
- #63960 - Rust Frontend: Count gpt-oss reasoning tokens
- #41414 - Bugfix: Pad head_dim to power-of-2 for TurboQuant
- #41431 - fix(llama): use weightless RMSNorm for FlashNorm-folded checkpoints
- #41427 - Handle NaN in QuantFP8 Native Forward

I notice several pull requests addressing performance optimizations and bug fixes across different hardware platforms. The most notable include a ROCm-specific bugfix, Rust frontend improvements, and kernel-level optimizations for quantization and model inference. These changes suggest ongoing efforts to enhance vLLM's compatibility, performance, and stability across various model architectures and hardware configurations.

The key focus areas appear to be:
- Improving hardware support
- Fixing quantization-related issues
- Enhancing frontend capabilities
- Optimizing kernel performance</think>

# vLLM Daily Digest — 2026-10-28

## 1. Today's Highlights

The vLLM project is addressing critical hardware compatibility gaps this week. The most active thread (#50576, 121 comments) is driving SM8x (Ampere A100/A800) support for DeepSeek-V4-Flash models, a significant gap since these popular enterprise GPUs currently cannot run the model. Meanwhile, ROCm optimization work continues with multiple stacked PRs targeting AMD MI355X/gfx950 and new GLM-5.3-Flash MonoKernel integration with MXFP4 KV cache.

---

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Issue/PR | Description | Links |
|----------|-------------|-------|
| #50576 | **DeepSeek-V4-Flash / V4-Flash-0731 SM8x (Ampere) support** — Neither checkpoint runs on SM8x (A100/A800, RTX 30xx). Work to extend support to Ampere architecture is in progress. | [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) |
| #56892 | **DeepSeek-V4.1-Flash on SM120 (RTX PRO 6000 Blackwell)** — Extremely low decode throughput with `--enforce-eager`; CUDA graphs unusable. Graph capture fix for SM120 requested. | [Issue #56892](https://github.com/vllm-project/vllm/issues/56892) |
| #64121 | **ROCm: GLM-5.3-Flash MonoKernel with MXFP4 KV cache** — Enables GLM-5.3-Flash MonoKernel to run with `--kv-cache-dtype mxfp4_mla`, providing 272 bytes/token vs 512 (e4m3) or 1024 (bf16). | [PR #64121](https://github.com/vllm-project/vllm/pull/64121) |
| #41370 | **XPU fallback for integrated Intel GPU** — Fallback when `torch.xpu mem_get_info` is unsupported on integrated Intel GPUs. | [PR #41370](https://github.com/vllm-project/vllm/pull/41370) |

---

## 4. Performance & Optimization

| Issue/PR | Description | Details |
|----------|-------------|---------|
| #57149 | **ROCm: Qwen3.8-2.4T-A95B (MI355X) performance optimization** — Stacked PRs targeting gfx950/MI355X. | [Issue #57149](https://github.com/vllm-project/vllm/issues/57149) |
| #59575 | **ROCm: Qwen3.8-Flash-Next gfx950/MI355X performance** — Optimization for `qwen4_exp` with GatedDeltaNet, QuerySparse Attention, HyperConnection, MXFP4 MoE. | [Issue #59575](https://github.com/vllm-project/vllm/issues/59575) |
| #57406 | **GLM 5.3 Performance Optimization** — Following up on GLM-5.2 optimizations; CUDA work targeting `glm_moe_dsa` architecture. | [Issue #57406](https://github.com/vllm-project/vllm/issues/57406) |
| #38260 | **Multi-tier KV offloading via OffloadingConnector** — RFC for extending KV offloading beyond CPU to storage tiers. | [Issue #38260](https://github.com/vllm-project/vllm/issues/38260) |
| #40543 | **Dynamic PDL Enablement** — Enable PDL in DeepSeek fused QKV A Projection (TRTLLM_ENABLE_PDL) and torch.compile'd triton kernels (TORCHINDUCTOR_ENABLE_PDL) for Hopper/Blackwell. | [Issue #40543](https://github.com/vllm-project/vllm/issues/40543) |
| #41414 | **TurboQuant: Pad head_dim to power-of-2 for WHT** — Fixes latent correctness bug for non-Po2 head_dim (e.g., microsoft/phi-2 with head_dim=80). | [PR #41414](https://github.com/vllm-project/vllm/pull/41414) |
| #41418 | **TurboQuant: Pre-bake Lloyd-Max centroids** — Pre-compute for common (d, bits) shapes to avoid 200-iteration initialization loop at runtime. | [PR #41418](https://github.com/vllm-project/vllm/pull/41418) |
| #49349 | **Zero JIT compilation during runtime** — Tracking shared JIT warmup infrastructure; DeepSeek V4 de-JITification in progress. | [Issue #49349](https://github.com/vllm-project/vllm/issues/49349) |

---

## 5. Stability & Regressions

| Issue/PR | Severity | Description | Status |
|----------|----------|-------------|--------|
| #56892 | **High** | DeepSeek-V4.1-Flash on SM120: extremely low decode throughput with eager mode; CUDA graphs broken | Open |
| #60160 | **High** | ROCm: Qwen3.8-27B-FP8 (TP4, MI355X) accuracy collapses at high concurrency with `VLLM_ROCM_USE_AITER=1` | Open |
| #41725 | **Medium** | Recurring CUDA kernel hang on 2x DGX Spark (GB10, sm_12.1) with MiniMax-M2.7-NVFP4, TP=2 across nodes | Open |
| #42363 | **Medium** | EngineDeadError with Kimi-K2.6 model using vLLM 0.20.2 | Open |
| #41838 | **Medium** | Eagle 2/3 acceptance length regression over time — AL never recovers without service restart | Open |
| #41789 | **Medium** | Gemma4 31B MTP Avg Draft acceptance rate: 0.2% | Closed |
| #58899 | **Medium** | Greedy output changes between restarts: q/k-norm + RoPE combo kernel picks reduction config by timing (non-deterministic) | Open |
| #43547 | **Medium** | MoE+DP: zero-token-scheduled step skips coordinate_batch_across_dp → NCCL deadlock | Open |
| #41427 | **Low** | Handle NaN in QuantFP8 Native Forward | Open |
| #64176 | **Low** | ROCm EPLB: Allow host-side syncs of skip-rearrange check | [PR #64176](https://github.com/vllm-project/vllm/pull/64176) |

---

## 6. What This Means for Application Developers

1. **Ampere users awaiting DeepSeek-V4**: The community is actively working on SM8x support (#50576). If you're running A100/A800 or RTX 30xx cards and need DeepSeek-V4-Flash, monitor this thread for progress.

2. **ROCm users: MI355X optimizations incoming**: AMD's team is landing stacked PRs for Qwen3.8 and GLM-5.3 on MI355X/gfx950. The new MonoKernel + MXFP4 KV cache integration (#64121) significantly improves memory efficiency (272 vs 1024 bytes/token).

3. **Blackwell (SM120) users: CUDA graphs broken**: If running DeepSeek-V4.1-Flash on RTX PRO 6000 Blackwell, expect degraded decode throughput with eager mode. CUDA graph capture needs fixing (#56892).

4. **TurboQuant users**: A correctness bug affecting non-power-of-2 head_dim models is fixed in #41414; pre-baked Lloyd-Max centroids (#41418) will speed up first-use initialization.

5. **OpenAI API compliance**: PR #64177 removes null `annotations` and `usage.prompt_tokens_details` from responses, fixing strict schema validation failures.

6. **Rust frontend parity**: Two PRs (#63959, #63960) bring Rust engine sleep state and gpt-oss reasoning token counting on par with Python.

---

*Generated from vllm-project/vllm GitHub data — 2026-10-28*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to generate a structured digest for SGLang based on the GitHub data provided. Let me analyze the data and create the digest.

Looking at the data:

1. **Latest Releases (last 24h)**: None

2. **Latest Issues**: 
   - #42752: Flaky tests and CI infrastructure failures (134 comments)
   - #43699: PD Disaggregation Roadmap Q4 2026
   - #32321: Apple Silicon serving redesign roadmap
   - #43412: Speculative decoding crashes with flashinfer
   - #30599: AMD consumer Radeon RDNA3/RDNA4 support
   - #44070: Bug - PD prefill HiCache stale KV (closed)
   - #43313: SGLang-Diffusion Roadmap Q4
   - #45755: Kimi-K3 SM90 flashinfer_mxfp4 bug
   - #45373: GLM-5.3-Flash performance on Hopper
   - #44291: EP2 crashes on Qwen3.8-Flash-Next NVFP4
   - #44304: Qwen3.8-Flash-Next gfx950/MI355X optimization
   - And several others

3. **Latest Pull Requests**:
   - #36727: Diffusion component weight preservation
   - #46898: Disaggregation performance optimization
   - #46777: DeepSeek V4 draft metadata fix
   - #46903: HiCache O(k*N) optimization
   - #46728: NPU CI workflow cleanup
   - #46839: GDN fp32 radix track fix
   - #45862: GEMM optimization for GLM-5.2
   - #46618: DSpark host reads fix (closed)
   - #46757: AMD Qwen3.5 MI355X FP8 recipe
   - #44047: OpenAI sampling validation
   - And more

Now I'll organize this into the requested format.</think>

# SGLang Digest — 2026-10-28

## Today's Highlights

The SGLang project continues its Q4 push with focus on PD disaggregation hardening, AMD consumer GPU support, and kernel-level performance work. Notable activity around speculative decoding stability (the flashinfer JIT crash on non-greedy requests remains open), while several performance PRs landed targeting HiCache queue efficiency and GEMM paths for GLM-5.2.

---

## Releases & Breaking Changes

No new releases in the last 24 hours.

---

## New Model & Hardware Support

- **AMD Consumer Radeon (RDNA3/RDNA4)**: Issue #30599 tracks official enablement for consumer GPUs (`gfx1100`/`gfx1101`/`gfx1200`/`gfx1201`). Currently SGLang's ROCm path targets only datacenter Instinct cards (`gfx942`/`gfx950`). The roadmap includes concrete enablement steps and performance tuning for MI355X.

- **NVIDIA Nemotron-3-Embed**: PR #45885 adds native support for `nvidia/Nemotron-3-Embed-1B-BF16` and its NVFP4 variant, enabling text embedding/retrieval use cases.

- **GLM-5.3-Flash on Hopper**: Issue #45373 tracks performance optimization work for SM90 (Hopper), part of Q4 roadmap #42473.

---

## Performance & Optimization

| Change | Description | Impact |
|--------|-------------|--------|
| **#46903** | HiCache: Replace O(k×N) `list.pop(0)` drain loops with slice deletion in ack queues | Reduced queue drain latency for large batches |
| **#46898** | Disaggregation: Stop device admission on first refusal in decode transfer pass | Better throughput near decode KV memory limits |
| **#45862** | GEMM: Add W8A16 small-M GEMM for GLM-5.2 block-FP8 decode projections | Up to 6.8% latency reduction on GB300 (TP4); +0.5 GiB KV pool vs prior W8A8 |
| **#46812** (closed) | Scheduler: Refresh PD prefill bootstrap-queue prefixes in waiting-prefix LRU pass | Warms device prefixes for requests pending slot allocation |
| **#46905** | Hunyuan3D: GPU-side grid generation for volume decoder | Faster shape export |
| **#44350** | Indexer refactor: Move DSA/DSV4 indexers onto DeepGEMM's fp8_fp4 MQA logits API | API modernization, no direct perf delta |

---

## Stability & Regressions

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| **High** | #43412 — Speculative decoding crashes on first non-greedy request (flashinfer verify-sampling op JIT fails) | OPEN | Bundled CCCL vs pip cu13 toolkit mismatch; kills process tree; greedy works, sampled requests crash |
| **High** | #44291 — EP2 (tp=2 + ep=2) crashes with illegal memory access on Qwen3.8-Flash-Next-NVFP4 (RTX PRO 6000, sm_120) | OPEN | Kernel-level IMA on two different builds |
| **Medium** | #45755 — Kimi-K3 on SM90: `flashinfer_mxfp4` computes GPT-OSS SwiGLU instead of SiTU | OPEN | Silent correctness bug in MoE activation |
| **Medium** | #44070 — PD prefill: early cached-prefix sends stale KV before HiCache load-back finishes | CLOSED | Bug in `SGLANG_DISAGG_PREFILL_EARLY_SEND_CACHED_PREFIX=1` |
| **Medium** | #35291 — MLA + fp8 KV: dequantizes entire KV pool every layer (43.7% of decode step) | OPEN | Both `fa3` and `flashinfer_mla` backends affected on DeepSeek-R1 |
| **Low** | #44794 — AMD select_experts casts fp32 MoE bias to bf16 (GLM-5.x routes with wrong precision) | OPEN | #37133's fp32 aiter path bypassed |

---

## What This Means for Application Developers

1. **Speculative decoding is unstable on pip-installed bundles** — If you're using the pip package with CUDA 13, avoid temperature > 0 with speculative decoding until the flashinfer JIT issue is resolved. Greedy decoding works fine.

2. **PD disaggregation is maturing** — The roadmap issue #43699 shows significant progress across model families and parallel strategies. If you're running at scale with prefill-decode separation, expect improved stability in upcoming releases.

3. **AMD GPU users on consumer hardware** — Official RDNA3/RDNA4 support is on the roadmap (#30599). For now, MI355X (gfx950) remains the recommended AMD platform.

4. **GLM-5.2 FP8 users on Hopper** — The new W8A16 GEMM path (#45862) provides measurable latency gains; consider upgrading once merged.

5. **NPU support** — The NPU CI pipeline is being cleaned up (#46728) with the cache-service mirror retirement, signaling continued investment in Ascend NPU serving.

---

*Generated from github.com/sgl-project/sglang — 2026-10-28*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze the GitHub data and create a structured digest for llama.cpp on 2026-10-28.

Let me organize the key information:

**Releases (last 24h):**
- b11944: Server - expose reasoning effort levels of chat template (#31271)
- b11941: Model - add LiquidAI/LFM3-Audio-2B and LiquidAI/LFM3-Omni-2B (#31257)
- b11940: Common - support deferred tools and tool_reference content parts (#31256)
- b11938: Model - add LiquidAI/LFM3-1.7B and LiquidAI/LFM3-VL-2B (#31252)
- b11936: llama - build k-pool sparse selection independently of kq_mask shape (#31243) - for qwen4exp (QSA) and glm5-next
- b11935: rpc - catch std::length_error in recv_msg (#31204)
- b11934: tests - speed up tensor data generation and model saving (#31145)
- b11933: vulkan - fix CI llvmpipe by allowing dim 3 broadcast in MUL_MAT (#31239)
- b11932: mtmd-cli - Reduced scope of batch pointer (#31155)
- b11930: server - add router device memory margin parameter for dynamic unloading (#21231)

**Issues (top ones by comments):**
- #25618: Speculative decoding diverges on quantized targets (32 comments) - CRITICAL
- #21956: Support audio output in mtmd (29 comments) - Feature request
- #26447: Vulkan errors on Vega 8 iGPU - 50K context (14 comments)
- #27330: CUDA graphs hang on RTX 5090 Laptop / sm_120 (14 comments) - GPU hangs
- #27845: Memory leak with -sm tensor on Intel B70 SYCL (13 comments)


- #20632: Feature request - graceful reasoning budget termination (11 comments)
- #28581: IQ3_S garbage on RTX 5060TI 15gb Blackwell (8 comments)
- #28295: MSVC compilation doesn't detect AVX-VNNI (7 comments)
- #27560: llama-server crashes on Windows/Vulkan with Qwen3.8-27B (6 comments)

I notice several performance and compatibility issues emerging across different hardware configurations. The Vulkan and CUDA problems on newer GPU architectures like RTX 5090 and Blackwell suggest ongoing driver and backend optimization challenges. Memory management remains a concern, particularly with speculative decoding and tensor operations on Intel and AMD systems.

The new model additions showcase liquid AI's expanding model family, with multiple variants supporting audio, vision, and multilingual capabilities. Server-side enhancements focus on dynamic resource allocation and improved memory handling, particularly for multi-tenant environments. The technical refinements around sparse selection, batch processing, and RPC error handling indicate a continued drive for robust, flexible deployment strategies.</think>

# llama.cpp Digest — 2026-10-28

## 1. Today's Highlights

llama.cpp advances its multi-modal and reasoning capabilities with LiquidAI LFM3 model family integration (audio, video, omni variants) and improved server-side reasoning effort controls. Key backend work includes Vulkan fixes for dimension broadcasting and RPC error handling improvements.

## 2. Releases & Breaking Changes

| SHA | Description | Notes |
|-----|-------------|-------|
| [b11944](https://github.com/ggml-org/llama.cpp/commit/b11944) | Server exposes reasoning effort levels of the chat template | Enables capability probe for minimal/low/medium/high/xhigh/max levels (#31271) |
| [b11940](https://github.com/ggml-org/llama.cpp/commit/b11940) | Common: support deferred tools and tool_reference content parts | (#31256) |
| [b11930](https://github.com/ggml-org/llama.cpp/commit/b11930) | Server: add `--models-memory-max` parameter for dynamic model unloading | Allows memory threshold-based eviction (#21231) |

## 3. New Model & Hardware Support

- **LiquidAI LFM3 Family** — Added support for:
  - [LFM3-Audio-2B](https://github.com/ggml-org/llama.cpp/commit/b11941) (#31257)
  - [LFM3-Omni-2B](https://github.com/ggml-org/llama.cpp/commit/b11941) (#31257)
  - [LFM3-1.7B](https://github.com/ggml-org/llama.cpp/commit/b11938) (#31252)
  - [LFM3-VL-2B](https://github.com/ggml-org/llama.cpp/commit/b11938) (#31252)
  - [d1-2B](https://github.com/ggml-org/llama.cpp/pull/31275) and d1-omni-2B decision models
  - [Video input support](https://github.com/ggml-org/llama.cpp/pull/31283) for LFM3 family
  - [Real-time conversation](https://github.com/ggml-org/llama.cpp/pull/31269) and transcription on `/v1/realtime`

## 4. Performance & Optimization

- **k-pool sparse selection** — Built independently of kq_mask shape, benefiting Qwen4Exp (QSA) and GLM5-Next cache cell picking by index (#31236)
- **MoE cache improvements** — Hybrid LRFU/MQ-inspired cache with ClassLRU shows +6% decode on QFN and +7% on GLM, with 8% fewer expert uploads (#31233)
- **MoE cache CPU share** — Auto mode with CRF admission for CPU misses (#31286)
- **Hexagon backend** — Faster TOP_K for backend sampler, major improvement for speculative decoding on X2 Elite (#31279)
- **Tests** — Tensor data generation and model saving significantly sped up by refactoring to create only the model, not full llama_context (#31145)

## 5. Stability & Regressions

| Issue | Severity | Status | Notes |
|-------|-----------|--------|-------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) — Speculative decoding diverges on quantized targets | **High** | Open | Greedy output differs from non-speculative on Q4_K_M targets; ngram speculation affected. 32 comments |
| [#27330](https://github.com/ggml-org/llama.cpp/issues/27330) — CUDA graphs hang on RTX 5090 Laptop (sm_120) | **High** | Open | Xid 8 error; GGML_CUDA_DISABLE_GRAPHS=1 workaround exists |
| [#28581](https://github.com/ggml-org/llama.cpp/issues/28581) — IQ3_S garbage on RTX 5060TI Blackwell | **Medium** | Open | Quantization bug on Blackwell GPU |
| [#27560](https://github.com/ggml-org/llama.cpp/issues/27560) — llama-server crashes on Windows/Vulkan with Qwen3.8-27B | **Medium** | Open | 0xC0000005 crash with default ctx-checkpoints |
| [#29494](https://github.com/ggml-org/llama.cpp/issues/29494) — repeat_last_n unbounded causing multi-GB buffer allocation | **Medium** | Open | Server OOM with DRY sampler |

**Fixes in progress:**
- [#31217](https://github.com/ggml-org/llama.cpp/pull/31217) — Fix integer overflow in ggml_nbytes() RPC path (OOB read/write vulnerability)
- [#31284](https://github.com/ggml-org/llama.cpp/pull/31284) — Re-instantiate CUDA graphs when cluster dims change (Hopper)
- [#31285](https://github.com/ggml-org/llama.cpp/pull/31285) — SYCL: refuse device buffers exceeding VRAM (temp fix for overcommit)

## 6. What This Means for Application Developers

- **Multi-modal apps** — LiquidAI LFM3 audio/omni models now supported; `/v1/realtime` endpoint adds voice chat capabilities — useful for agentic voice interfaces
- **Dynamic resource management** — New `--models-memory-max` server flag enables multi-tenant deployments with automatic model unloading when memory thresholds are exceeded
- **Reasoning control** — Server-side reasoning effort exposure enables finer control over thinking budgets in production deployments
- **MoE efficiency** — The new hybrid cache shows measurable decode throughput gains for MoE models; consider upgrading if running Qwen or GLM MoE variants
- **Vulkan users** — The dim-3 broadcast fix resolves CI failures on llvmpipe; if using older AMD/Radeon hardware (gfx1010), be aware of reported hangs with certain batch sizes

---

*Generated from ggml-org/llama.cpp @ b11944 (2026-10-28)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate a daily digest for Ollama based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Looking at the data:

1. **Releases**: None in the last 24h
2. **Issues**: 29 total, showing various bugs and feature requests
3. **PRs**: 37 total, showing various contributions

Let me categorize:

**New Model & Hardware Support:**
- PR #18780: mlx: add Kolibri 1 support
- PR #19229: mlx: add Nemotron 3.5 Bolt 74B-A9B support
- PR #19344: llm: LFM3 GGUF fixes and llama-server speech
- Issue #19343: lfm3-audio model requires MLX support
- Issue #19292: GGUF decision models without decision head support
- Issue #19347: LFM3 model architecture unknown error

**Performance & Optimization:**
- PR #19197: mlx: support concurrent generation
- PR #19338: discover: use newest library version that supports all GPUs
- Issue #19262: OLLAMA_NUM_PARALLEL question

**Stability & Regressions:**
- Issue #17778: qwen 3.8 error during query
- Issue #17892: deepseek-v4-flash thinking loops
- Issue #19139: Windows connection resets with large prompts
- Issue #19343: MLX support error
- Issue #18885: mlx runner panic
- Issue #19278: macOS Metal crashes
- Issue #18252: qwen2.5-coder quantization issues
- Issue #19122: CUDA MMA kernel issues on RTX 5060 Ti
- Issue #19340: Ctrl+C multiline input bug


- Issue #19342: modelfile parsing bug
- Issue #19341: /load system prompt bug

I notice several ongoing issues affecting system stability and user experience. The modelfile parsing and system prompt loading problems could significantly impact workflow. These seem like critical bugs that might need immediate attention from the development team. I'll prioritize investigating the root causes and potential workarounds for these specific issues.</think>

# Ollama Digest — 2026-10-28

## Today's Highlights

The Ollama project sees active development across MLX (Apple Silicon) and LLM infrastructure. Notable PRs add Kolibri 1 and Nemotron 3.5 Bolt support, while several bugs affect Windows large prompts, MLX runners, and model quantization. The desktop app gains idle stream heartbeat handling, and a fix for resumable downloads across server restarts is in progress.

---

## Releases & Breaking Changes

- **No new releases** in the last 24 hours.

---

## New Model & Hardware Support

| Model / Hardware | Description | PR / Issue |
|-----------------|-------------|------------|
| **Kolibri 1** | MLX support added | [#18780](https://github.com/ollama/ollama/pull/18780) |
| **Nemotron 3.5 Bolt 74B-A9B** | MLX support with per-layer expert configs and speculative decoding | [#19229](https://github.com/ollama/ollama/pull/19229) |
| **LFM3 GGUF** | Fixed llama-server runner support + GGUF text-to-speech | [#19344](https://github.com/ollama/ollama/pull/19344) |
| **LFM3-1.7B GGUF** | Error loading: "unknown model architecture: 'lfm3'" on v0.40.12 | [#19347](https://github.com/ollama/ollama/issues/19347) |
| **LFM3-Audio** | Requires MLX runtime; fails on non-MLX systems | [#19343](https://github.com/ollama/ollama/issues/19343) |
| **Qwen2.5-Coder 3B** | Library artifacts at q2_K/q3_K_S/M/L are functionally broken (0% pass on code tasks) | [#18252](https://github.com/ollama/ollama/issues/18252) |
| **Decision models via /v1/systemone** | GGUF models without decision head rejected since 0.40.4 | [#19292](https://github.com/ollama/ollama/issues/19292) |
| **Radeon RX 6750 GRE (Navi23)** | Feature request for AMD GPU support | [#19329](https://github.com/ollama/ollama/issues/19329) |

---

## Performance & Optimization

| Area | Change | PR / Issue |
|------|--------|------------|
| **MLX concurrent generation** | Multiple generation requests now share projection/FFN work; configurable via `OLLAMA_NUM_PARALLEL` | [#19197](https://github.com/ollama/ollama/pull/19197) |
| **GPU library discovery** | Fixed filterOverlapByLibrary to reset `anyMissing` between candidates, selecting the newest library version supporting all GPUs | [#19338](https://github.com/ollama/ollama/pull/19338) |
| **CUDA eager module loading** | Retry llama-server startup with eager CUDA module loading to fix partial-offload crashes on Windows (RTX 5060 Ti, 16GB RAM) | [#18978](https://github.com/ollama/ollama/pull/18978) |
| **Pull resume across restarts** | Fix for interrupted downloads failing after >1 hour (file not found or digest mismatch) | [#19339](https://github.com/ollama/ollama/pull/19339) |
| **Scheduler eviction logic** | `findRunnerToUnload` evicts by model path when keep_alive ties, not by size/recency — may cause suboptimal unloading in uniform keep_alive setups | [#19326](https://github.com/ollama/ollama/issues/19326) |

---

## Stability & Regressions

| Severity | Issue | Details | Status |
|----------|-------|---------|--------|
| **High** | Windows: connection resets after ~15s with large prompts | RTX 3090, 24GB VRAM, Qwen3.8-27B. Underlying cause not identified. | [#19139](https://github.com/ollama/ollama/issues/19139) |
| **High** | Qwen 3.8 streaming: "no user query found in messages" (500) | Occurs during tool-calling loops with 205k context | [#17778](https://github.com/ollama/ollama/issues/17778) |
| **High** | DeepSeek-V4-Flash: thinking loops indefinitely | Same reasoning block repeated 221x; only 4 tool calls made | [#17892](https://github.com/ollama/ollama/issues/17892) |
| **Medium** | macOS Metal crashes | MLX runner panics on M-series; also affects gemma4:e2b-mlx | [#18885](https://github.com/ollama/ollama/issues/18885), [#19278](https://github.com/ollama/ollama/issues/19278) |
| **Medium** | CUDA MMA kernel crash | "shared object initialization failed" on RTX 5060 Ti (Blackwell) loading clef/clef-flash | [#19122](https://github.com/ollama/ollama/issues/19122) |
| **Medium** | Ctrl+C in multiline mode leaves REPL in broken state | After Ctrl+C during `"""` input, session stays in multiline mode; next input swallowed | [#19340](https://github.com/ollama/ollama/issues/19340) |
| **Medium** | /load doesn't reset system prompt | `/show system` shows old prompt, but subsequent chats omit it | [#19341](https://github.com/ollama/ollama/issues/19341) |
| **Medium** | modelfile serialization bug | Values containing `"""` + whitespace produce unparseable output | [#19342](https://github.com/ollama/ollama/issues/19342) |
| **Low** | OCI registry pull with auth | Still missing proper OCI-Spec implementation for private registries | [#9215](https://github.com/ollama/ollama/issues/9215), [#4204](https://github.com/ollama/ollama/issues/4204) |
| **Low** | HF pulls fail behind DNS64 | CDN addresses flagged as non-public | [#19345](https://github.com/ollama/ollama/issues/19345) |

---

## What This Means for Application Developers

1. **Windows users with large prompts**: Avoid 205k+ context scenarios on Qwen3.8 until the streaming error is fixed. Consider chunking or reducing context.

2. **MLX users**: Concurrent generation is now available via `OLLAMA_NUM_PARALLEL`. If running multiple agents, you can trade memory for lower latency.

3. **Ollama Cloud users**: Large coding requests (~10.7 MiB) hitting HTTP 413 — the limit may need adjustment.

4. **Desktop app users**: Long prompts now show a loading heartbeat after 15s of inactivity, helping diagnose stalled streams.

5. **Model authors**: If exporting GGUF decision models, ensure `decision.type` is present in the Modelfile for compatibility with 0.40.4+.

6. **Pull behavior**: Downloads interrupted by server restart now resume correctly (fix pending merge in [#19339](https://github.com/ollama/ollama/pull/19339)).

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-10-28 based on the GitHub data provided. Let me analyze the data and create a structured digest.

Looking at the data:

1. **Releases**: There are 4 releases in the last 24h - v1.106.5, v1.105.6, v1.104.8, v1.103.10 - all with cosign verification commands. The data seems to have some truncated text (## Wha, ## Wh) suggesting incomplete entries.

2. **Issues**: I can see various bugs and features:
   - #27735: BudgetExceededError uses stale spend
   - #19730: i18n support for web dashboard
   - #42161: Billed at 0 when provider_response_model is a slug
   - #22984: VLLM cached_tokens handling
   - #47904: eMudhra root CA fix backport request
   - And many more...

3. **Pull Requests**: Several fixes and features landed:
   - #48698: Fix token counter for custom tool calls
   - #48696: SAP tool arguments preservation
   - #48647: Skip failed spend-log turns
   - #48697: Bill batch cached tokens at input rate
   - #48694: Databricks OpenJev pricing
   - #48690: Gemini/Vertex timeout forwarding
   - And more...

Now let me structure this into the requested format:

1. **Today's Highlights** - 2-3 sentences
2. **Releases & Breaking Changes** - Version updates
3. **New Model & Hardware Support** - Not much here, mostly fixes
4. **Performance & Optimization** - Cost/pricing fixes
5. **Stability & Regressions** - Bugs reported
6. **What This Means for Application Developers** - Practical takeaways


I'll synthesize the key insights from the data, focusing on the most significant developments in the LiteLLM ecosystem. The releases and pull requests suggest ongoing improvements in cost management, token handling, and system reliability. While no major new model support emerged, the fixes indicate a strong focus on refining existing functionality and addressing potential edge cases in token billing and system integration.</think>

# LiteLLM Digest — 2026-10-28

## Today's Highlights

LiteLLM shipped four patch releases (v1.103.10 through v1.106.5) in the last 24 hours, all with cosign verification support. Key fixes landed across cost calculation—batch cached tokens now bill at input rate, Databricks OpenJev decision models are now priced correctly—and provider integrations: Gemini/Vertex embeddings now honor configured timeouts, while streaming `/v1/messages` requests properly report token usage.

---

## Releases & Breaking Changes

| Version | Notes | PR |
|---------|-------|---|
| **v1.106.5** | Patch release with cosign verification | — |
| **v1.105.6** | Patch release with cosign verification | — |
| **v1.104.8** | Patch release with cosign verification | — |
| **v1.103.10** | Patch release with cosign verification | — |

Verification command (applies to all images):
```bash
cosign verify --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub ghcr.io/berriai/litellm:v1.106.5
```

**Note:** The eMudhra root CA fix (#47670) has not been backported to 1.106.x images; see [#47904](https://github.com/BerriAI/litellm/issues/47904) for details.

---

## New Model & Hardware Support

No major new model or hardware support announced in this period.

---

## Performance & Optimization

- **Batch cached token pricing** — Batch jobs on models with only regular input price now bill cached prompt tokens at the input rate instead of $0. [PR #48697](https://github.com/BerriAI/litellm/pull/48697)
- **Databricks OpenJev pricing** — Decision endpoint now priced at 0.6 DBU/1M input tokens (~$0.042/1M). [PR #48694](https://github.com/BerriAI/litellm/pull/48694)
- **Gemini/Vertex timeout forwarding** — Embeddings now honor the `timeout` parameter (was hardcoded to 300s). [PR #48690](https://github.com/BerriAI/litellm/pull/48690), [PR #47305](https://github.com/BerriAI/litellm/pull/47305)
- **Token counter improvements** — Custom tool calls are now counted instead of raising errors. [PR #48698](https://github.com/BerriAI/litellm/pull/48698)

---

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | Virtual key `BudgetExceededError` uses stale spend while `/key/info` shows spend below max_budget | Open — [#27735](https://github.com/BerriAI/litellm/issues/27735) |
| **High** | Spend logs silently dropped since v1.99.0 for providers returning `id: null` — request_id becomes "None" and collides on primary key | Open — [#39749](https://github.com/BerriAI/litellm/issues/39749) |
| **Medium** | Streaming `/v1/messages` sends `message_start` with `usage.input_tokens: 0` | Closed — [#48481](https://github.com/BerriAI/litellm/issues/48481) |
| **Medium** | `reasoning_effort="none"` omits thinking instead of disabling it on Claude models | Open — [#47924](https://github.com/BerriAI/litellm/issues/47924) |
| **Medium** | BYOK/static-auth MCP rejects per-request `x-mcp-{alias}-authorization` credential | Open — [#46664](https://github.com/BerriAI/litellm/issues/46664) |
| **Low** | Non-object JSON body returns 500 instead of 400 | Closed — [#43711](https://github.com/BerriAI/litellm/issues/43711) |
| **Low** | Enterprise license message for `get_spend_routes` only reaches logs, returns bare 500 | Open — [#47011](https://github.com/BerriAI/litellm/issues/47011) |

---

## What This Means for Application Developers

1. **Budget enforcement is unreliable for virtual keys** — If using team-scoped virtual keys with budgets, expect potential false positives on `BudgetExceededError` until the stale spend bug is fixed. Monitor `/key/info` to verify actual spend.

2. **Check your batch job costs** — If running batch jobs on models without cache read prices, costs were likely underreported. Update to capture correct spend.

3. **Timeout configuration now works for Gemini/Vertex embeddings** — Previously ignored; ensure you're setting explicit timeouts if you need tighter control.

4. **Streaming token usage is now correct** — Claude Code streaming responses now report accurate input tokens in `message_start`. This affects observability/monitoring setups relying on early token counts.

5. **Audit your 1.106.x deployments** — The eMudhra root CA fix is only on `main`; 1.106.x images still trust the compromised emSign ECC Root CA G3. Consider pinning to `main` or awaiting a backport.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate a structured digest for Unsloth based on the GitHub data provided. Let me analyze the data and create a proper digest with the requested sections.

Let me go through the data:

**Releases**: None in the last 24h

**Issues**: 28 total, with some key ones:
- #15583 - Intel Arc B580 GPU support request (bug/feature)
- #15473 - Vision with Gemma 4 26B MLX model produces <unused6226> (bug)
- #10345 - Human-centric context management (feature request)
- #15444 - AMD GPUs don't show up on mixed Nvidia-AMD Linux systems (bug)
- #14582 - Verbose UI feature request
- #14487 - Memory leak on Windows (200-400MB after each use)
- #15552 - Windows Recycle Bin flooded with sqlite WAL/SHM files
- #15588 - Support LFM3-1.7B model
- #15597 - Unsloth Translate feature request
- #15581 - Deep Research failed to call
- #15527 - Turboderp's exllama support request
- #15417 - Anthropic passthrough context overflow bug
- #15532 - Visual Computer Use for Local AI Agents

**Pull Requests**: 302 items, top ones:
- #15633 - Block Swap offload_layers issue on Qwen3.8-Flash-Next
- #15609 - Flows uses Unsloth Studio's components
- #15622 - Import hoist verifier fix
- #15626 - Tests: stop pytest monkeypatch issues
- #15611 - Flows Train node with hold-out split
- #15434 - Auto-compact long chats on SGLang (CLOSED)


- #15632 - FP8 loads: Qwen3.8-Flash-Next-FP8 n-gram table issue
- #12522 - llama-bench tab
- #12521 - Evals tab
- #11808 - Benchmarks page
- #15631 - Studio: let chat call Unsloth's own MCP tools
- #14349 - Studio MCP tools (CLOSED)
- #14348 - Settings > MCP tab (CLOSED)
- #15629 - Per-tool MCP switches
- #15630 - Cleaner Live monitor
- #15570 - Ask before Clear all (CLOSED)
- #15619 - Log out, profile in Accounts
- #15605 - Flows recipe columns (CLOSED)
- #15607 - Preview, Runs and Publish for Flows
- #15601 - Keep ticked check boxes when reading HTML

I'm organizing the digest into clear sections. The most pressing items to highlight are the FP8 loading issue with Qwen3.8-Flash-Next-FP8, the Windows Recycle Bin problem with sqlite files, and the new llama-bench and Evals benchmarking features. I'll also note the improvements to the Live monitor interface and the MCP tools integration that allows chat to call Unsloth's own tools.</think>

# Unsloth Digest — 2026-10-28

## 1. Today's Highlights

The Unsloth team is pushing forward with Studio enhancements, particularly around the new **Flows** workflow system and **Benchmarks** page. A notable regression affects Qwen3.8-Flash-Next-FP8 where the n-gram table loads without proper weight scaling, causing potential FP8 input issues. On the stability front, Windows users face a significant disk space bug: SQLite WAL/SHM files flood the Recycle Bin during training.

---

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Description | Link |
|------|-------------|------|
| **LFM3-1.7B** | New Liquid AI model family support requested | [#15588](https://github.com/unslothai/unsloth/issues/15588) |
| **Intel Arc B580** | Bug report requesting finetuning support on Intel XPU | [#15583](https://github.com/unslothai/unsloth/issues/15583) |
| **ExllamaV3** | Community request to add Turboderp's exllamav3 inference engine | [#15527](https://github.com/unslothai/unsloth/issues/15527) |

---

## 4. Performance & Optimization

| Item | Status | Details | Link |
|------|--------|---------|------|
| **Block Swap offload_layers** | OPEN | Qwen3.8-Flash-Next n-gram table kept on CPU, preventing layer offload engagement | [#15633](https://github.com/unslothai/unsloth/pull/15633) |
| **FP8 n-gram table loading** | OPEN | Qwen3.8-Flash-Next-FP8 loads without weight_scale, causing fp8 input on key_proj | [#15632](https://github.com/unslothai/unsloth/pull/15632) |
| **llama-bench tab** | OPEN | New Benchmarks page with llama.cpp throughput testing | [#12522](https://github.com/unslothai/unsloth/pull/12522) |
| **Evals tab** | OPEN | lm-eval-harness integration for MMLU, MMLU-Pro, HellaSwag, ARC, GSM8K, TruthfulQA | [#12521](https://github.com/unslothai/unsloth/pull/12521) |
| **Benchmarks page** | OPEN | Config sweeps for speculative decoding, KV cache, RAM offload | [#11808](https://github.com/unslothai/unsloth/pull/11808) |
| **Auto-compact on SGLang** | CLOSED | Fixed chat compaction for models exceeding context length | [#15434](https://github.com/unslothai/unsloth/pull/15434) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | Windows Recycle Bin flooded with `*.db-wal` / `*.db-shm` files (~40MB per 90min training) | OPEN | — |
| **High** | Qwen3.8-Flash-Next-FP8 n-gram table loads without weight_scale (key_proj gets invalid fp8 input) | OPEN | — |
| **High** | Block Swap never engages on Qwen3.8-Flash-Next (n-gram table blocks layer offload) | OPEN | — |
| **Medium** | Memory leak: 200-400MB unreleased after each Unsloth Desktop use on Windows | OPEN | — |
| **Medium** | Vision with Gemma 4 26B MLX produces `<unused6226>` tokens | OPEN | — |
| **Medium** | Anthropic passthrough `/v1/messages` fails with context overflow instead of auto-compaction | OPEN | — |
| **Low** | Download toast shows original image name after rename | OPEN | — |

---

## 6. What This Means for Application Developers

- **Benchmarking is coming**: The new Benchmarks page will let you sweep speculative decoding, KV cache, and offload settings directly from the UI—no more manual scripting to find optimal inference configs.

- **MCP tools are first-class**: Chat can now invoke Unsloth Studio's own MCP tools, enabling tighter agent-to-tool integration without external dependencies.

- **Flows workflow gains parity**: The Train node now supports hold-out splits, and recipe columns have been re-skinned with Studio components. Preview, Runs, and Publish features are landing soon.

- **Watch the Qwen regression**: If you're using Qwen3.8-Flash-Next-FP8, the n-gram table loading bug may cause incorrect inference behavior. Avoid production deployment until #15632 is resolved.

- **Windows disk space warning**: If running long training sessions on Unsloth Desktop/Studio on Windows, monitor `$Recycle.Bin`—the SQLite WAL file flooding can consume tens of gigabytes.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*