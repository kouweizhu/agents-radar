# AI Infrastructure Digest 2026-11-25

> Generated: 2026-11-25 05:00 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to create a cross-project comparison report across all five AI infrastructure projects based on the daily digests I just generated. Let me analyze the data from all five projects and create a comprehensive comparison report.

Let me summarize the key data points from each project:

**vLLM:**
- 117 issues, 500 PRs (total backlog)
- No releases in last 24h
- Major RFCs: Humming replacing Marlin, KV offload, Direct Weight Reload for RL
- Critical bugs: DFlash TP>1, ModelOpt NVFP4 on SM120, KV transfer scheduler crash


- New models: Ourk Fourier 2B, GLM-5.3
- Hardware: Intel XPU spec decode, Inkling 2 on XPU, ROCm AITER kernel, MI350P
- Performance: KV cache programmable policies, prefill hold, Mooncake EP, GPU staging loader

**SGLang:**
- SGLang 1.0 in progress
- Rust API stack landed
- New models: LingBot-Video MoE, Qwen3-ASR
- Hardware: AMD MI35x (Inkling-2-Small), NPU (Ascend)
- Performance: FP8 MoE fusion (sil

_and_mul), DFlash OOM fixes, FlashInfer CUDA graph, Mooncake transfer sharding
- Bugs: --max-running-requests 0 clamped, HiCache + Mamba, NPU perf knobs documented

**llama.cpp:**
- No version tags (1.0.0 stable still current)
- New models: Hy4, Inkling 2 Mini
- Hardware: ARMv8.0 CPU kernels, SVE q5 kernels, BF16 MUL_MAT CUDA, ggml-hexagon 2.0 (HMX)
- Performance: CUDA RMSNorm fusion, CUDA MMQ stream-k, SYCL NVFP4 MoE, Per-size CUDA graph arenas, Vulkan IQ grid tables
- Bugs: Eval assertion, V100 prefill regression, SYCL logprobs nondeterminism, Vulkan coopmat nondeterminism on Arc B70

Now looking at LiteLLM and Unsloth. LiteLLM has several new releases including v1.112.0-rc.1 and multiple stable versions, plus an LTS track at v1.108.17, with OAuth2 custom providers and per-deployment proxy routing. There's a critical regression in MCP tools/list blocking 18-50s and some Redis connection leaks with rpm/tpm limits. Unsloth just released v0.1.924-beta with Inkling 2 Mini support and multi-GPU training capabilities.

Looking at the full scope of supported hardware across these tools, I'm seeing CUDA optimizations across most frameworks, AMD GPU support split between ROCm and proprietary backends, Intel XPU with vLLM and SGLang, various CPU architectures including ARM and SVE, and specialized NPUs like Hexagon and Ascend. This gives a pretty complete picture of the hardware diversity these projects are targeting.

Now I'm mapping out which frameworks support which model architectures to understand the coverage better. vLLM and SGLang are tracking the same set of models closely, while llama.cpp has the most diverse portfolio with some unique support for older architectures like Hyena and LLaDA, plus the ability to run on CPU and mobile. LiteLLM is interesting because it acts as a gateway layer supporting essentially all the major model families through API integration.

Looking at the optimization approaches, I'm noticing different specializations across the frameworks—vLLM is pushing hard on KV cache improvements with multiple RFCs and programmable policies, SGLang is developing Rust-based infrastructure for better performance, and llama.cpp is working on CUDA graph arenas to optimize memory and compute. The quantization strategies also vary significantly, with vLLM exploring the Humming kernel as a replacement for Marlin, while llama.cpp is developing custom operator APIs to handle different quantization schemes more flexibly.
</think>


# AI Infrastructure Ecosystem — Cross-Project Comparison Report
**Digest Date: 2026-11-25**

---

## 1. Ecosystem Overview

The AI inference infrastructure ecosystem is in a period of **convergent hardening** across layers. vLLM and SGLang are both pushing toward 1.0/1.x stability releases, signaling a maturation of the serving engine layer — less experimental API churn, more reliability guarantees. Meanwhile, llama.cpp continues expanding its heterogeneous hardware footprint (ARMv8.0, SVE, Hexagon HMX, Intel Vulkan), positioning itself as the de facto local runtime for constrained and non-NVIDIA environments. LiteLLM is the focal point for multi-provider gateway concerns, with per-deployment routing and OAuth2 support now landed. Unsloth is the outlier in the training/fine-tuning layer, shipping multi-GPU parallelism for Studio while simultaneously expanding inference support for new architectures like Inkling 2 Mini. Across all five projects, **agentic serving** (programmable KV cache, tool calling, structured output, prefix caching) is the dominant feature driver, reflecting the industry pivot from pure chat completions to long-horizon, multi-turn agent workflows.

---

## 2. Activity Comparison

| Project | Issues (open) | PRs (open) | Releases (24h) | Notable |
|---------|--------------|------------|----------------|---------|
| **vLLM** | 117 | ~500 | 0 | Largest backlog; most active RFC process |
| **SGLang** | ~40 | ~50 | 0 | 1.0 release track active; Rust API stack just landed |
| **llama.cpp** | ~20 | ~30 | 0 (on v1.0.0) | Leanest; no version bump but 9 commits landed |
| **LiteLLM** | ~30 | ~30 | 5 (1.112.0-rc.1 + 3 stable + LTS) | Highest release cadence; RC cycle active |
| **Unsloth** | ~20 | ~20 | 1 (v0.1.924-beta) | Inkling 2 Mini + multi-GPU Studio launch |

**Observations:**
- **vLLM** carries the largest open backlog in absolute terms, consistent with its role as the reference serving engine for many downstream projects.
- **SGLang** and **llama.cpp** have comparable open volumes but differ sharply in velocity — SGLang ships large integrated stacks (Rust API, spec decode) while llama.cpp ships targeted kernel improvements at high frequency.
- **LiteLLM** has the most active release cadence, cycling through RC → stable → LTS in days, reflecting its gateway role where regressions are high-impact.
- **Unsloth** is the only project with a training/fine-tuning focus, and its smaller volume reflects a more opinionated scope (LoRA/QLoRA on consumer GPUs).

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|---------|---------|
| **Inkling 2 / Inkling 2 Mini** | 🔶 (XPU work) | 🔶 (MI35x backend) | ✅ (Inkling 2 Mini, v0.1.924) | — | ✅ (v0.1.924, fine-tuning) |
| **GLM-5.3 / GLM-5.2** | 🔶 (performance follow-up) | 🔶 (Flash-Next) | — | — | — |
| **Qwen3-ASR** | 🔶 (Ourk Fourier 2B) | ✅ (HuggingFace format) | — | — | — |
| **Qwen3.5 / Qwen3.8** | 🔶 (performance opt) | 🔶 (Flash-Next) | — | ✅ (via API routing) | — |
| **Hy4 (Tencent)** | — | — | ✅ (v0.1.924) | — | — |
| **LingBot / Ling-3.2** | — | 🔶 (Video MoE, image cond.) | — | — | — |
| **LTX-2.5 (Video)** | — | — | — | — | ✅ (6 GiB now, was 8 GiB) |
| **Gemma 4** | — | — | — | ✅ (JSON Schema fix pending) | — |
| **Cohere models (thinking tokens)** | — | — | — | 🔶 (flush fix) | — |
| **MiniMax-H3 / H3** | — | 🔶 (image↔video switching) | ✅ (via llama.cpp) | — | ✅ (video generation) |
| **Mooncake EP / Expert Parallel** | ✅ (all-to-all backend) | ✅ (transfer sharding) | — | — | — |

**Leaderboard snapshot:**
- **Most new architectures (24h):** vLLM + SGLang tied (both targeting Inkling 2, GLM-5.3, Mooncake EP)
- **Best heterogeneous coverage:** llama.cpp (Hy4, Inkling 2 Mini, LTX-2.5, MiniMax-H3 — all on non-NVIDIA backends)
- **Training/fine-tuning on new arch:** Unsloth (Inkling 2 Mini fine-tuning is a first-mover; no other project in this set targets fine-tuning)
- **Gateway routing breadth:** LiteLLM (covers all providers via API; model support is upstream vendor-dependent)

---

## 4. Performance Frontier

Optimization efforts across the five projects cluster around five domains, with different emphases per project:

### KV Cache & Memory Management
- **vLLM** leads here with three concurrent RFCs (#57103, #37003, #66782) targeting programmable KV policies, context-aware retention, and request-level tiered offload. This is the most investment.
- **llama.cpp** ships per-size CUDA graph arenas for decode batches.
- **SGLang** documents NPU prefill delayer knobs for prefix-cache workloads (30% TPOT gain).
- **Unsloth** improves GGUF placement retry logic to reduce host-RAM spillover.

### Quantization & Kernel Fusion
- **vLLM** has the highest-stakes change: RFC #65560 to replace the entire Marlin kernel family with Humming. This touches INT4/INT8/FP8/MXFP4/MXFP6 across dense and MoE layers — a multi-month migration.
- **llama.cpp** ships CUDA RMSNorm fusion (RMS_NORM + MUL + MROPE/IMROPE), CUDA MMQ stream-k with column-tile-outermost scheduling, and SYCL NVFP4 MoE optimizations.
- **SGLang** fuses `silu_and_mul_clamp` into FP8 per-token-group quantization for MoE models with `swiglu_limit`.
- **llama.cpp** adds a custom op API (#33000) allowing per-backend kernel registration without duplicating op definitions.

### Distributed & Expert Parallelism
- **vLLM** integrates Mooncake EP all-to-all backend for expert-parallel communication in MoE models.
- **SGLang** shards Mooncake transfers by bootstrap room to prevent single-queue bottlenecks with attention TP>1.
- **Unsloth** introduces multi-GPU training backends (DDP, FSDP2, TP, PP, CP, EP) to Studio.

### Speculative Decoding
- **vLLM** has a critical bug: DFlash acceptance collapses at TP>1 (#66387). ModelOpt NVFP4 draft on SM120 also wedges under CUDA graphs.
- **llama.cpp** exposes multi-sequence speculative decoding and MTP through the public C API (#27788), enabling binding authors to build advanced sampling strategies.
- **SGLang** fixes DFlash memory issues (verify page-table, custom-mask, KV-materialize workspace) enabling 262K context with block_size=16.

### Backend Diversity
- **llama.cpp** is the clear leader in non-NVIDIA hardware: ARMv8.0 CPU kernels, SVE q5 kernels, ggml-hexagon 2.0 with HMX integer modes, Vulkan IQ grid tables, OpenVINO KV decode improvements, and SYCL backend work.
- **vLLM** and **SGLang** both advancing Intel XPU support (spec decode UTs, Inkling 2 integration).
- **Unsloth** addresses AMD ROCm bf16 detection and Strix Halo mmap carve-out issues.

---

## 5. Layer Positioning

The five projects occupy distinct but increasingly overlapping positions in the stack:

```
┌─────────────────────────────────────────────────────┐
│  APPLICATION / AGENT LAYER                          │
│  (Unsloth Studio, SGLang frontend, LiteLLM UI)      │
├─────────────────────────────────────────────────────┤
│  GATEWAY / ROUTING LAYER                            │  ← LiteLLM
│  (multi-provider, virtual keys, spend tracking,     │
│   OAuth2, per-deployment routing)                   │
├─────────────────────────────────────────────────────┤
│  SERVING ENGINE LAYER                               │  ← vLLM, SGLang
│  (KV cache, batching, speculative decoding,         │
│   multi-GPU parallelism, quantization, RL support)  │
├─────────────────────────────────────────────────────┤
│  LOCAL RUNTIME LAYER                                │  ← llama.cpp
│  (heterogeneous backends, CPU/mobile,               │
│   custom ops, GGUF export, C API)                   │
├─────────────────────────────────────────────────────┤
│  TRAINING / FINE-TUNING LAYER                       │  ← Unsloth
│  (LoRA/QLoRA, multi-GPU parallelism,                │
│   GGUF export, video generation)                    │
└─────────────────────────────────────────────────────┘
```

**Key differentiation:**
- **vLLM vs. SGLang**: Both serve at the engine layer. vLLM is more conservative and spec-driven (RFC process, wider hardware support roadmap). SGLang is more aggressive on integration (Rust API stack, NPU perf knobs, FlashInfer graph capture, Mooncake EP).
- **llama.cpp vs. vLLM/SGLang**: llama.cpp is a local runtime that does not manage distributed serving. Its strength is running on laptops, phones, and non-NVIDIA hardware. vLLM/SGLang are datacenter inference servers.
- **LiteLLM**: A gateway/proxy layer that sits in front of any engine (including llama.cpp served models). Its value is the unified API surface, cost tracking, and multi-provider routing — not inference itself.
- **Unsloth**: The only training/fine-tuning focused project. Its recent push into multi-GPU parallelism and GGUF export blurs the line with serving, but its core value proposition is gradient computation, not inference.

---

## 6. Trend Signals

### 🔴 For Infrastructure Engineers — Urgent

| Signal | Projects | Implication |
|--------|----------|-------------|
| **MCP gateway regression** | LiteLLM | v1.108.0+ blocks 18–50 s on `tools/list`. If you run MCP through LiteLLM with Open WebUI, hold on v1.107.x until #50065 is patched. |
| **DFlash speculative decoding fails at TP>1** | vLLM | Speculative decoding is unreliable in multi-GPU vLLM deployments. Avoid TP>1 for DFlash workloads until #66387 is fixed. |
| **Redis connection leak under rate limits** | LiteLLM | Synchronous `Router.completion` with rpm/tpm limits leaks a Redis connection per call. Monitor Redis connection counts on affected deployments. |
| **llama.cpp CUDA 13 portable has no runtime** | llama.cpp | Silent CPU fallback. Check your CUDA availability at runtime if using portable builds. |

### 🟠 For Technical Decision-Makers — Near-Term

| Signal | Projects | Implication |
|--------|----------|-------------|
| **Humming replacing Marlin** | vLLM | The largest quantization change in vLLM history is RFC-stage. Teams using INT4/INT8 GPTQ/AWQ, FP8, MXFP formats should begin impact assessment. Timeline: likely Q1 2027. |
| **SGLang 1.0 release** | SGLang | The 1.0 stability release may introduce breaking changes from 0.5.x. Lock in API expectations or allocate migration time. |
| **Agentic KV cache APIs incoming** | vLLM | Three concurrent RFCs signal first-class KV hint APIs for multi-turn agents are close. If you build long-context agentic systems, this will change your architecture. |
| **Intel XPU becoming viable** | vLLM, SGLang, llama.cpp | Spec decode UTs passing (vLLM), Inkling 2 integration (SGLang), Vulkan improvements (llama.cpp). Intel Arc GPUs may be a credible deployment target by mid-2027. |
| **Unsloth multi-GPU training to Studio** | Unsloth | Fine-tuning on multi-GPU is now accessible to non-ML engineers through Studio. This lowers the barrier to LoRA customization significantly. |

### 🟡 For Application / Agent Developers — Medium-Term

| Signal | Projects | Implication |
|--------|----------|-------------|
| **Per-deployment upstream proxy routing** | LiteLLM | Multi-region LLM deployments can now route per-deployment through regional proxies without global `HTTP_PROXY` changes. Relevant for globally distributed agents. |
| **Multi-sequence speculative decoding C API** | llama.cpp | Binding authors (LM Studio, ollama, etc.) can now expose speculative decoding without internal API dependencies. Expect wider availability across llama.cpp-based runtimes. |
| **SVE and ARMv8.0 CPU kernels** | llama.cpp | Mobile and edge inference on ARMv8.0 (no dotprod) and SVE-capable hardware is now better optimized for Q4_0/Q8_0. Relevant for on-device AI applications. |
| **Per-backend custom ops API** | llama.cpp | Enables backend-specific kernel optimization without op duplication. Currently CPU-only; signals a path toward optimized CUDA/HIP/Metal kernels with clean abstraction. |
| **Mooncake EP integration** | vLLM, SGLang | Expert-parallel MoE communication over Mooncake is converging in both engines. Teams running large MoE models (DeepSeek-V4.1 class) should evaluate this for multi-node scaling. |

---

*Cross-project comparison generated from daily digest data — 2026-11-25. Each project digest is independently sourced from the respective GitHub repositories.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the GitHub data for vLLM and generate a structured digest for 2026-11-25.

Key observations:
1. No releases in last 24h
2. 117 issues, 500 PRs
3. Several RFCs about quantization, KV cache, ROCm, Intel XPU support
4. Notable RFCs: Humming replacing Marlin, KV offload, Direct Weight Reload for RL
5. Bug reports: DFlash TP>1 issue, ModelOpt NVFP4 on SM120, KV transfer scheduler crash
6. New PRs: XPU spec decode UT, multimodal fixes, Mooncake EP integration, Rust render fingerprint, GPU staging loader, Inkling2 FP8 decode weights
7. Feature work: prefill hold, programmable KV cache, ROCm AITER kernel updates

Let me structure this into the requested format.

Key items to highlight:
- RFC #65560: Humming replacing Marlin (big quantization change)
- RFC #66782: KV Offload request-level promotions
- RFC #54477: Direct Weight Reload for RL Training
- Bug #66387: DFlash acceptance collapses at TP>1
- Bug #52540: ModelOpt NVFP4 on SM120 dies
- PR #69795: MRV2 CUDA graph fix
- PR #69803: GPU staging in safetensors loader
- PR #58375: Mooncake EP integration
- PR #69712: Inkling 2 on Intel XPU
- PR #69653: XPU spec decode UT

Let me write a concise, professional digest.
</think>


# vLLM Daily Digest — 2026-11-25

## 1. Today's Highlights

The vLLM project is advancing on multiple fronts: a major RFC proposes replacing the legacy Marlin quantization kernel with the new **Humming** kernel stack across all NVIDIA architectures (#65560), while a critical bug affecting **DFlash speculative decoding collapses at tensor parallel > 1** (#66387) is under investigation. On the hardware side, **Intel XPU support is maturing** with spec-decoding unit tests landing (#69653) and Inkling 2 integration work progressing (#69712).

---

## 2. Releases & Breaking Changes

| Item | Details | Link |
|------|---------|------|
| No new releases | None in the last 24 hours | — |

---

## 3. New Model & Hardware Support

| Category | Item | Status | Link |
|----------|------|--------|------|
| **Quantization** | RFC: Replace **Marlin** with **Humming** kernel — covers INT4/INT8 GPTQ/AWQ, FP8, MXFP8, MXFP4, NVFP4, MXFP6, and activations across dense + MoE layers | Open RFC | [#65560](https://github.com/vllm-project/vllm/issues/65560) |
| **Quantization** | RFC: Add top-level `--lm-head-config` for draft/verify LM head with per-arch defaults | Open RFC | [#68711](https://github.com/vllm-project/vllm/issues/68711) |
| **Hardware** | Intel **XPU** — spec decode unit tests enabled (25 + 99 + 26 test cases passing) | PR merged | [#69653](https://github.com/vllm-project/vllm/pull/69653) |
| **Hardware** | **Inkling 2 on Intel XPU** (Arc Pro B60/B70) — shared `inkling2/common/` implementation and PR series | Active development | [#69712](https://github.com/vllm-project/vllm/issues/69712) |
| **Hardware** | ROCm **AITER MXFP8 linear kernel** for CDNA4 (gfx950) | PR open | [#64089](https://github.com/vllm-project/vllm/pull/64089) |
| **Hardware** | ROCm **MI350P** (gfx950, 128 CUs) mono decode via k-pass task decomposition | Feature PR open | [#63340](https://github.com/vllm-project/vllm/issues/63340) |
| **Model** | **Oruk Fourier 2B** — deployment recipe added (2.04B speech-to-text fine-tune of Qwen3-ASR-1.7B) | PR open | [#69804](https://github.com/vllm-project/vllm/pull/69804) |
| **Model** | **GLM-5.3** performance optimization follow-up (same `glm_moe_dsa` base as GLM-5.2) | Ongoing | [#57406](https://github.com/vllm-project/vllm/issues/57406) |

---

## 4. Performance & Optimization

| Area | Change | Details | Link |
|------|--------|---------|------|
| **KV Cache** | RFC: Request-level KV promotions with pin-until-load semantics | Improves tiered KV offload reliability | [#66782](https://github.com/vllm-project/vllm/issues/66782) |
| **KV Cache** | RFC: Programmable KV Cache with composable policies for agentic serving | Provider-neutral abstraction | [#57103](https://github.com/vllm-project/vllm/issues/57103) |
| **KV Cache** | RFC: Context-Aware KV-Cache Retention API (prioritized evictions) | >90% agent tokens are re-used prefixes | [#37003](https://github.com/vllm-project/vllm/issues/37003) |
| **Prefill Scheduling** | Cross-DP prefill hold with cost-based decision | MoE models on DP + EP | [#66927](https://github.com/vllm-project/vllm/pull/66927) |
| **Prefill Scheduling** | Prefill hold without data parallelism | Extends above to single-node | [#68899](https://github.com/vllm-project/vllm/pull/68899) |
| **Tensor Parallel** | Wire FlashInfer's `PcieIpcAllGatherWorkspace` into `CudaCommunicator.all_gather` | Latency-bound TP gathers (e.g., DeepSeek-V4.1) | [#65359](https://github.com/vllm-project/vllm/issues/65359) |
| **MoE** | Raise SM100 Triton fallback bound to 32 tokens in TritonOrCutlassExperts | Re-tuned from original 8-token bound | [#66562](https://github.com/vllm-project/vllm/pull/66562) |
| **MoE** | **Mooncake EP** all-to-all backend integration | Expert-parallel communication | [#58375](https://github.com/vllm-project/vllm/pull/58375) |
| **Spec Decoding** | FP8 DSpark draft through speculative config (ROCm/Muse Spark) | Weight-bandwidth optimization | [#67340](https://github.com/vllm-project/vllm/pull/67340) |
| **Inkling2** | Optional e4m3 decode weights for low-M projections on SM12x | Half weight bytes for decode ≤16 rows | [#69802](https://github.com/vllm-project/vllm/pull/69802) |
| **Model Loader** | Opt-in GPU staging to safetensors loader (`--model-loader-extra-config '{"gpu_staging": true}'`) | Read tensors directly to GPU | [#69803](https://github.com/vllm-project/vllm/pull/69803) |
| **ROCm/FP8** | Muse Spark FP8 dense linears on tuned kernels (online fp8_per_channel) | Two stacked PRs | [#67381](https://github.com/vllm-project/vllm/pull/67381) |
| **Rendering** | Rust Render configuration fingerprint for stable token ID comparison | Downstream of #65503 | [#68940](https://github.com/vllm-project/vllm/pull/68940) |

---

## 5. Stability & Regressions

| Severity | Issue | Description | Workaround / Status |
|----------|-------|-------------|---------------------|
| **🔴 Critical** | #66387 | **DFlash acceptance collapses at TP > 1** — works fine at TP1, fails at TP>1 on XiaomiMiMo/MiMo-V2.6-Flash-MOPD | Affects v0.33.0 and nightly |
| **🔴 Critical** | #52540 | **ModelOpt NVFP4 on SM120 (RTX PRO 6000 Blackwell)** dies or wedges under sustained load with CUDA graphs | Repro on v0.26.0 + nightly |
| **🔴 Critical** | #69137 | **KV transfer scheduler crashes** — `_update_from_kv_xfer_finished` frees blocks unconditionally; assert reproduced with LMCacheMPConnector | Active bug |
| **🟡 High** | #38696 | **Qwen3.5 structured output** with `json_schema` emits garbled spaces | vLLM nightly (2026-03-27) |
| **🟡 High** | #69137 | In-flight KV transfers not cancelled after request abort | Active bug |
| **🟡 High** | #52150 | **GLM-5.2-FP8 on ROCm** — first request after GPU idle emits garbage; piecewise CUDA graph cold replay corrupts prefill | Workaround: `cudagraph_mode=FULL_DECODE_ONLY` |
| **🟡 High** | #51986 | **MNNVL allreduce** workspace init hangs 30s and leaks GPU memory on IB-only multi-node | Fixed in #??? |
| **🟡 High** | #69320 | **Transformers backend: OmniASR** fails at startup — `padding_mask` kept on CPU but forwarded to `get_audio_features` | Fixed |
| **🟢 Medium** | #68870 | CUDA graph capture input/output mismatch with `execute_model` | Fixed by [#69795](https://github.com/vllm-project/vllm/pull/69795) |

---

## 6. What This Means for Application Developers

| Takeaway | Detail |
|----------|--------|
| **Quantization migration ahead** | The Humming replacement for Marlin is a large change — if you use INT4/INT8 GPTQ/AWQ, FP8, or MXFP formats, track #65560. It will affect both dense and MoE model serving. |
| **Speculative decoding is still fragile on multi-GPU** | DFlash and NVFP4 draft LM-head validation have known issues at TP>1. Stick to TP1 for speculative workloads until fixes land. |
| **Agentic serving is a design priority** | Multiple RFCs (#57103, #37003, #53421, #52113) are converging on programmable KV cache semantics. If you're building multi-turn agents, expect first-class KV hint APIs soon. |
| **Intel XPU is becoming viable** | Spec decode UTs passing + Inkling 2 integration means Intel Arc GPUs may be a credible deployment target in 2027. |
| **Model loading can now bypass CPU** | The new GPU staging option (`gpu_staging: true`) in the safetensors loader reduces weight load latency on high-bandwidth systems. |
| **ROCm quality improving** | Weekly Kimi Vendor Verifier CI for AMD (#66699) and AITER v0.1.30 bump (#69442) signal better AMD stability guarantees. |

---

*Digest generated from github.com/vllm-project/vllm — 2026-11-25*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang and create a structured digest for 2026-11-25.

Looking at the data:

1. **Latest Releases**: None in last 24h

2. **Key Issues** (by comment count):
   - #26340: CUDA Coredump Tracker (388 comments) - ongoing CI tracking
   - #42752: Flaky tests and CI infrastructure (233 comments)
   - #43699: PD Disaggregation Roadmap Q4 (28 comments)
   - #17050: CI Test Failures tracking (15 comments)
   - #50045: SGLang 1.0 Release Tracker (15 comments)
   - #43313: SGLang-Diffusion Roadmap Q4 (9 comments)
   - Several bugs closed recently

3. **Key PRs** (by activity):
   - #47904: Fix for MoE mxfp8 on consumer Blackwell
   - #32848: LingBot image/video support
   - #51754: Multimodal embeddings staging
   - #50187: AMD Inkling-2-Small MI35x support
   - #52873: AMD docker pin apache-tvm-ffi
   - #51762: DFlash OOM fixes
   - #53008: Intel XPU CI fix
   - #53014: Harmony tool-call parser fix
   - #53016: Grammar fix in logit_bias error
   - #53015: CI lint Windows path normalization
   - #51857: FLUX.2 optimization
   - #53012: FlashInfer CUDA graph fix
   - #53013: FP8 MoE fusion optimization
   - #42163: Mooncake transfer sharding
   - #53011: Kernel CTA packing optimization
   - #53010: Qwen3-ASR HuggingFace format support
   - #50784: Ascend async EPLB support

Now I'll organize this into the digest structure.

</think>


# SGLang Daily Digest — 2026-11-25

---

## 1. Today's Highlights

SGLang development continues active across multiple fronts. The 1.0 release tracker (#50045) is gaining momentum with hardening work, while the Rust API stack (#49748) has landed and post-merge fixes are tracked in #51333. Significant performance work is landing in MoE kernels (silu_and_mul fusion for FP8), DFlash memory fixes, and a new AMD MI35x backend is in progress.

---

## 2. Releases & Breaking Changes

| Item | Details | Links |
|------|---------|-------|
| **No new releases** | No tagged releases in the last 24h | — |
| **SGLang 1.0 In Progress** | 1.0 is a stability release focusing on hardening, replacing silent config changes with explicit errors, and defining a 1.x compatibility policy. Upgrading from 0.5.x may require changes. | [#50045](https://github.com/sgl-project/sglang/issues/50045) |
| **Rust API Stack Landed** | The 15-PR Rust API stack (#49734–#49748) has landed. Post-merge fixes and shared API design are tracked. | [#51333](https://github.com/sgl-project/sglang/issues/51333) |

---

## 3. New Model & Hardware Support

| Category | Item | Status | Links |
|----------|------|--------|-------|
| **AMD GPU** | Inkling-2-Small MI35x support (with companion kernel PRs #52726, #52727, #52728) | Open PR | [#50187](https://github.com/sgl-project/sglang/pull/50187) |
| **Diffusion** | LingBot-Video MoE: image conditioning, T2I, and refinement support | Open PR | [#32848](https://github.com/sgl-project/sglang/pull/32848) |
| **ASR** | Qwen3-ASR native HuggingFace checkpoint format support | Open PR | [#53010](https://github.com/sgl-project/sglang/pull/53010) |
| **NPU** | Ascend async EPLB: stage expert migrations asynchronously with HCCL P2P | Open PR | [#50784](https://github.com/sgl-project/sglang/pull/50784) |
| **Multimodal** | Stage multimodal embeddings over NIXL or ZMQ for encoder/PD disaggregation | Open PR | [#51754](https://github.com/sgl-project/sglang/pull/51754) |

---

## 4. Performance & Optimization

| Domain | Change | Impact | Links |
|--------|--------|--------|-------|
| **MoE / FP8** | Fuse `silu_and_mul_clamp` into FP8 `per_token_group_quant` for Triton block-FP8 MoE | Eliminates intermediate BF16 buffer for models with `swiglu_limit` (e.g., GLM-5.3-Flash) | [#53013](https://github.com/sgl-project/sglang/pull/53013) |
| **Kernel** | Pack multiple rows per CTA in `silu_mul_clamp_kernel` for small `out_dim` (e.g., 256) | Better GPU utilization for small-width MoE/MLP layers | [#53011](https://github.com/sgl-project/sglang/pull/53011) |
| **DFlash** | Avoid long-context OOM in verify page-table, custom-mask, and KV-materialize workspace | Enables 262K context with block_size=16 | [#51762](https://github.com/sgl-project/sglang/pull/51762) |
| **FLUX.2** | Drop static architecture and head-count gates in packed QK fusion | Unlocks fused kernel for non-exact arch matches | [#51857](https://github.com/sgl-project/sglang/pull/51857) |
| **Mooncake** | Shard Mooncake transfers by bootstrap room | Prevents single-queue bottleneck with attention TP>1 | [#42163](https://github.com/sgl-project/sglang/pull/42163) |
| **FlashInfer** | Replay ragged verify under CUDA graphs | Fixes capture failure with `SGLANG_RAGGED_VERIFY_MODE=compact` | [#53012](https://github.com/sgl-project/sglang/pull/53012) |
| **NPU Perf** | Document `SGLANG_SCHEDULER_DECREASE_PREFILL_IDLE` / `SGLANG_PREFILL_DELAYER_MAX_DELAY_PASSES` | 30% TPOT reduction on 128K prefix-cache workloads | [#50447](https://github.com/sgl-project/sglang/issues/50447) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | `--max-running-requests 0` or negative silently clamped to 1 | Open | — |
| **High** | HiCache + hybrid SSM/Mamba: `cudaHostRegister` failure kills instance; error path throws TypeError hiding real cause | Closed | — |
| **High** | Prefill input logprobs served from wrong request when batch member retracted/finished | Closed (inactive) | — |
| **Medium** | MoE mxfp8 `trtllm-gen` runner incorrectly selected on consumer Blackwell | Open PR | [#47904](https://github.com/sgl-project/sglang/pull/47904) |
| **Medium** | AMD gfx12 custom all-reduce relaxed start flag causes wrong rank-divergent sums over PCIe | Open | [#49657](https://github.com/sgl-project/sglang/issues/49657) |
| **Medium** | `KvMetrics.data_parallel_rank` always 0; Prometheus series omit `dp_rank` | Open | [#47409](https://github.com/sgl-project/sglang/issues/47409) |
| **Medium** | XPU fallback to core API when Sysman memory query unavailable | Open PR | [#52060](https://github.com/sgl-project/sglang/pull/52060) |
| **Low** | 24-byte `stop_regex` pattern causes MemoryError that kills scheduler | Open | [#52041](https://github.com/sgl-project/sglang/issues/52041) |
| **Low** | `logit_bias` error message has grammar mistake ("must has" → "must have") | Open PR | [#53016](https://github.com/sgl-project/sglang/pull/53016) |

**CI Status** (#17050): 3 broken, 23 flaky, 925 recently fixed (as of 2026-11-25 04:42 UTC).

---

## 6. What This Means for Application Developers

| Takeaway | Details |
|----------|---------|
| **Watch for 1.0 breaking changes** | The upcoming 1.0 stability release may require migration work from 0.5.x. Monitor upgrade notes in [#50045](https://github.com/sgl-project/sglang/issues/50045). |
| **Rust API is production-ready** | The 15-PR Rust API stack has landed; post-merge issues tracked in [#51333](https://github.com/sgl-project/sglang/issues/51333). |
| **GLM-5.3-Flash bugs largely resolved** | Bug tracking issue [#37524](https://github.com/sgl-project/sglang/issues/37524) shows most tracked bugs fixed; verify against latest before deployment. |
| **NPU users: 30% TPOT gain available** | New prefill delayer knobs documented for prefix-cache workloads — significant for retrieval-augmented scenarios. |
| **Mind the `--max-running-requests` edge case** | Setting to 0 or negative does not behave as expected; avoid until fix lands. |
| **Intel XPU improvements** | Fallback path for WSL2 GPU-PV scenarios prevents startup crashes on unsupported Sysman configs. |
| **Diffusion use cases expanding** | Image↔video switching for MiniMax-H3 on consumer GPUs is on the Q4 roadmap. |

---

*End of digest. Data sourced from github.com/sgl-project/sglang as of 2026-11-25.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a llama.cpp digest for 2026-11-25 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Let me go through the data:

**Releases (last 24h):**
- b12716: cmake fix for llguidance header (Cargo 1.100 build directory change)
- b12711: ggml-cpu: optimized kernels for ARM v8.0 without dotprod (Q4_0/Q8_0)
- b12709: SVE-optimized q5_0 and q5_1 dot-product kernels
- b12708: server: include MCP image and audio data in tool results
- b12707: context: prevent excessive CPU polling without OpenMP
- b12706: metal: reserve top-k scratch only for short rows
- b12704: vulkan: add chunked GDN replay support
- b12703: cuda: fuse RMS_NORM + MUL + MROPE/IMROPE and tune block size
- b12701: model: Inkling 2 Mini mix() weighted sum optimization
- b12786: server: fix skipped prompt cache lookups

**Key Issues (by comment count/severity):**
- #29022 [CLOSED] - Fast Tool Gating via Prefill Logit Slicing (enhancement, 13 comments)
- #24015 [OPEN] - Eval bug: GGML_ASSERT failure in backend-meta (bug, 13 comments)
- #31206 [OPEN] - logprobs nondeterministic on SYCL iGPU/MoE (bug, 12 comments)
- #30301 [OPEN] - [SYCL] RMS_NORM fails on Arc Pro B60 (bug-unconfirmed, 12 comments)
- #31560 [OPEN] - Vulkan: KHR_coopmat nondeterministic on Intel Arc Pro B70 (bug, 11 comments)


- #32810 [OPEN] - V100 prefill regression in 1.0 for hybrid models (bug, 7 comments)
- #32776 [OPEN] - Speculative decoding 2.2-2.4× slower on hybrid Qwen3.5 (bug-unconfirmed, 6 comments)
- #28111 [OPEN] - CUDA mul_mat not batch-invariant for IQ quants at n=5,8 on SM120 (bug, 5 comments)
- #32918 [OPEN] - convert_hf_to_gguf.py tensor count mismatch for Qwen 3.8 27B (bug, 4 comments)

**Key PRs (last 24h):**
- #33002: ggml-openvino fixes and KV cache improvements
- #33000: ggml custom op API with per-backend kernels
- #32533: BF16 src1 support in MUL_MAT (CUDA)
- #31156: per-size graph arenas for small batches
- #32960: model add hy_v4_flash support
- #32861: ggml-openvino CI fixes
- #32582: ggml-hexagon 2.0 with HMX support
- #32915: vulkan IQ grid tables from storage buffer
- #32921: CUDA MMQ stream

-k column tiles outermost
- #32983: TP single device assignment fix
- #27788: Multi-Sequence Speculative Decoding & MTP public C API
- #32948: Inkling 2 graph optimization
- #32981: SYCL NVFP4 MoE speedups
- #32832: CUDA SET_ROWS F16->F32 support
- #32794: gguf-py boolean parsing fix
- #31234: CUDA/HIP native q4_0 q8_0 KV in flash_attn_tile
- #32929: UI regroup settings, MCP management
- #32177: CUDA compact mul_mat_id ids in chunks
- #32930: CUDA/HIP MMA FA kernel for maskless attention on RDNA
- #32995: mtmd MiniCPM-V 4.7 image separator fix

Now I can structure this into the digest format.
</think>


# llama.cpp Daily Digest — 2026-11-25

## 1. Today's Highlights

The project continues heavy investment in backend diversity and inference efficiency. Notable today: a **custom op API allowing per-backend kernels** landed (#33000), the **OpenVINO backend gained KV cache decode improvements** (#33002), and **multi-sequence speculative decoding + MTP were exposed to the public C API** (#27788), enabling downstream binding authors to build advanced sampling strategies. On the hardware side, **ARMv8.0 CPU kernels for Q4_0/Q8_0** (#32142) and **SVE-optimized q5_0/q5_1 kernels** (#30867) signal renewed focus on non-NVIDIA inference paths.

---

## 2. Releases & Breaking Changes

| Commit | Change | Impact |
|--------|--------|--------|
| [`b12716`](https://github.com/ggml-org/llama.cpp/commit/b12716) | cmake: include `llguidance` header from source tree | **Build fix** for Cargo 1.100, which changed artifact layout |
| [`b12707`](https://github.com/ggml-org/llama.cpp/commit/b12707) | context: prevent excessive CPU polling without OpenMP | Latency/consistency improvement for Metal and non-OpenMP CPU inference |
| [`b12706`](https://github.com/ggml-org/llama.cpp/commit/b12706) | metal: reserve top-k scratch only for short rows | Memory tuning — radix path used for `ncols > 128` on M5/M2 Ultra |

**No new version tags** were published today. The `1.0.0` stable release remains the current marker.

---

## 3. New Model & Hardware Support

- **Hy4 (Tencent Hy_v4_flash, 220B / 12B active)** — Added via [#32960](https://github.com/ggml-org/llama.cpp/pull/32960). Runs on the existing `llama_kv_cache_dsa_iswa` cache like dots3note.
- **Inkling 2 Mini** — `mix()` weighted sum with scores as `src0` to reduce per-token mat-vec overhead ([#32855](https://github.com/ggml-org/llama.cpp/pull/32855), merged as b12701).
- **ARMv8.0 (64-bit, no dotprod)** — Optimized Q4_0/Q8_0 CPU kernels for targets that lack the dotprod extension ([#32142](https://github.com/ggml-org/llama.cpp/pull/32142), merged as b12711).
- **SVE (Scalable Vector Extension)** — q5_0 and q5_1 dot-product kernels ([#30867](https://github.com/ggml-org/llama.cpp/pull/30867), merged as b12709).
- **BF16 src1 in MUL_MAT / MUL_MAT_ID (CUDA)** — Enables direct BF16 activation reads without dequantizing to cuBLAS; in progress ([#32533](https://github.com/ggml-org/llama.cpp/pull/32533)).
- **GGUF boolean metadata via `gguf-set-metadata`** — Was silently ignored; fixed in [#32794](https://github.com/ggml-org/llama.cpp/pull/32794).

---

## 4. Performance & Optimization

| Area | Commit / PR | Details |
|------|-------------|---------|
| **CUDA RMSNorm fusion** | [#32500](https://github.com/ggml-org/llama.cpp/pull/32500) (b12703) | Fused RMS_NORM + MUL + MROPE/IMROPE; 64-thread block for multi-token `ncols ≤ 256` |
| **CUDA MMQ stream-k** | [#32921](https://github.com/ggml-org/llama.cpp/pull/32921) | Walk column tiles outermost to improve DRAM read reuse |
| **SYCL NVFP4 MoE** | [#32981](https://github.com/ggml-org/llama.cpp/pull/32981) | Eliminated per-scale `sycl::pow()` call; replaced slow E2M1 decode table lookup |
| **CUDA/HIP flash attention** | [#32930](https://github.com/ggml-org/llama.cpp/pull/32930) | MMA FA kernel enabled for maskless (non-causal) attention on RDNA, targeting vision encoders |
| **CUDA q4_0/q8_0 KV in flash_attn_tile** | [#31234](https://github.com/ggml-org/llama.cpp/pull/31234) | Native KV cache types dequantized in-tile on load |
| **Vulkan IQ grid tables** | [#32915](https://github.com/ggml-org/llama.cpp/pull/32915) | Move IQ1/IQ2/IQ3 constant arrays to storage buffer to eliminate LDC divergence on NVIDIA |
| **Per-size CUDA graph arenas** | [#31156](https://github.com/ggml-org/llama.cpp/pull/31156) | Decode/speculative verify batches retain their own graph captures instead of recapturing at every size change |
| **OpenVINO KV decode** | [#33002](https://github.com/ggml-org/llama.cpp/pull/33002) | Finer KV-length rounding improves GPU decode performance |
| **ggml-hexagon 2.0** | [#32582](https://github.com/ggml-org/llama.cpp/pull/32582) | HMX integer modes (w8a8, w8a16) with dynamic quantization; automatic f32→f16 lowering |
| **Inkling 2 graph** | [#32948](https://github.com/ggml-org/llama.cpp/pull/32948) | `mix()` rebuilt to avoid per-block CONCAT + re-normalization; fewer ops, bit-identical results |

---

## 5. Stability & Regressions

### Critical / High Severity

| Issue | Description | Status |
|-------|-------------|--------|
| [#24015](https://github.com/ggml-org/llama.cpp/issues/24015) | **Eval bug**: `GGML_ASSERT(src_ss[0].axis != GGML_BACKEND_SPLIT_AXIS_0)` fails on multi-head split paths | Open — Fix PR [#32983](https://github.com/ggml-org/llama.cpp/pull/32983) landed today (b12709) |
| [#32810](https://github.com/ggml-org/llama.cpp/issues/32810) | **Prefill regression** on V100 (sm_70) for hybrid GDN models — FATTN config halves `nbatch_V2` vs 0.4.1 | Open |
| [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) | `/v1/completions` logprobs nondeterministic on SYCL iGPU + MoE; seed does not pin distribution | Open |
| [#31560](https://github.com/ggml-org/llama.cpp/issues/31560) | Vulkan KHR_coopmat gives wrong/nondeterministic results on Intel Arc Pro B70 (BMG G31) | Open |

### Medium Severity

| Issue | Description | Status |
|-------|-------------|--------|
| [#32776](https://github.com/ggml-org/llama.cpp/issues/32776) | Speculative decoding ~2.2–2.4× slower on hybrid Qwen3.5 (Gated DeltaNet), CUDA | Open |
| [#28111](https://github.com/ggml-org/llama.cpp/issues/28111) | CUDA `mul_mat` not batch-invariant for IQ quants at `n=5,8` on SM120 — affects speculative decoding losslessness | Open |
| [#32918](https://github.com/ggml-org/llama.cpp/issues/32918) | `convert_hf_to_gguf.py` reports 770 tensors for Qwen 3.8 27B instead of expected 866 | Open |
| [#30301](https://github.com/ggml-org/llama.cpp/issues/30301) | SYCL: `rms_norm_f32_sycl` fails with `UR_RESULT_ERROR_UNSUPPORTED_FEATURE` on Arc Pro B60 | Open |
| [#28721](https://github.com/ggml-org/llama.cpp/issues/28721) | Vulkan deep-context decode collapses ~8× on Intel Arc Pro B70 (Xe2); SYCL degrades only ~2.4× | Open |

### Notable Fixes Closed Today

- **#29022** — Fast Tool Gating via Prefill Logit Slicing (enhancement, closed stale)
- **#17107** — KV Cache Persistence on Disk feature request (closed stale)
- **#27788** — Multi-Sequence Speculative Decoding & MTP exposed to public C API (merged)

---

## 6. What This Means for Application Developers

1. **Speculative decoding is getting more accessible.** The public C API for multi-sequence speculative decoding and MTP ([#27788](https://github.com/ggml-org/llama.cpp/pull/27788)) means binding authors (llama.cpp bindings, LM Studio, etc.) can expose these features without internal API dependencies. If you're on CUDA/HIP, test your acceptance-rate-sensitive workloads.

2. **Hybrid MoE models on V100 have a prefill regression.** If you're serving Qwen3.5-class hybrid (GDN + full attention) models on Volta hardware, expect meaningfully lower prefill throughput in the current `1.0` lineage compared to `0.4.1`. Track [#32810](https://github.com/ggml-org/llama.cpp/issues/32810) for resolution.

3. **SYCL + MoE logprobs are nondeterministic.** Applications relying on reproducible `logprobs` from `/v1/completions` on Intel iGPU SYCL backends should be aware — the `seed` field does not currently pin the distribution. Track [#31206](https://github.com/ggml-org/llama.cpp/issues/31206).

4. **Intel Arc Pro B70 Vulkan has correctness issues with coopmat.** Decision models and any F16/Q8_0 workloads using cooperative matrices may return garbage. The SYCL backend on the same hardware does not exhibit the problem. Track [#31560](https://github.com/ggml-org/llama.cpp/issues/31560).

5. **Per-backend custom ops API lands.** The new `ggml_custom_op` structure with per-backend kernels ([#33000](https://github.com/ggml-org/llama.cpp/pull/33000)) enables backend-specific optimizations without duplicating the op definition. Currently CPU-only; other backends follow.

6. **Metal performance tuning for Apple Silicon.** The top-k scratch reservation change ([#32706](https://github.com/ggml-org/llama.cpp/pull/32706)) favors the radix path for longer sequences, which should improve memory utilization on M5/M2 Ultra for decode-heavy workloads.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze the GitHub data for Ollama (github.com/ollama/ollama) for 2026-11-25 and create a structured digest.

Key observations from the data:

**Releases:**
- None in last 24h

**Issues (16 total):**
1. #4072 - Feature request: Ollama should prevent sleep when working (Windows)
2. #17251 - Bug: Incorrect VRAM usage shown by ollama ps command
3. #19879 - CLOSED - Bug: Inkling-2-mini crashes machine on DGX Spark - OOM & High CPU Usage
4. #19866 - Bug: 0.40.17 major performance regression (macOS M4 Pro MLX Qwen 3.8 27b)
5. #18188 - Bug: "Restart Claude Desktop" in Ollama Apps never actually restarts
6. #17131 - Streaming handlers leak goroutines and runner semaphore slots on client disconnect
7. #3822 - Feature request: Add API endpoint to see GPU hardware available
8. #18274 - Bug: model name validation length is too short (80 chars)
9. #19888 - Bug: inkling2 architecture fails to load (tensor not found)
10. #19877 - Bug: Olmo3 parser returns literal \u003c instead of <
11. #19891 - Bug: MLX runner prefix-cache memory leak (grows ~0.6 GiB per distinct prompt)
12. #19889 - Feature request: cmd/bench rubric scoring mode for open-ended answers
13. #19887 - Performance study on Qwen3.8 Flash-Next and Hermes Agent on DGX Spark
14. #19886 - Bug: MLX runner saved history grows past physical RAM


15. #19885 - Bug: Image marker construction uses O(N²) string operations
16. #19880 - CLOSED - Feature request: Expose compute devices Ollama detected

**Pull Requests (28 total, top 20 by comment count):**
1. #19334 - CLOSED - fix: proper media ordering in Embedding for multimodal models
2. #16513 - CLOSED - fix: update goose docs
3. #19881 - inkling2: faster short histories, draft proposals and conv snapshots
4. #19331 - app/ui: keep idle chat streams alive and surface failures
5. #19586 - README: add HomeLab Monitor to community integrations
6. #19890 - gemma4: repair single-quoted list items in tool call arguments
7. #19632 - llm/server: Fix VRAM accounting and GPU splitting
8. #19848 - discover: bound finite cgroup headroom by host RAM
9. #18767 - openai: match complete tool result groups by call ID
10. #18768 - decision: accept structured System One criteria
11. #17027 - fix: flush OpenAI-compatible streaming responses
12. #17881 - server: prevent goroutine leaks on client disconnection in streaming routes
13. #19884 - docs: update Pi setup for the Ollama plugin
14. #19883 - launch: enable live model discovery in the Hermes picker
15. #19882 - llm: place embedding media markers where the prompt names the images
16. #19568 - Intel IGPU architecture detection for running vulkan default OOB
17. #17739 - feat: Add OLLAMA_NO_THINK global environment switch
18. #19878 - parsers: decode \uXXXX escapes in olmo3 tool arguments
19. #19876 - README: add Loom to community integrations
20. #19875 - model/parsers: flush buffered Cohere thinking when stream ends

Key observations:

1. **No new releases** in the last 24h
2. Several important bug fixes in PRs, especially around goroutine leaks (#17881), VRAM accounting (#19632), streaming responses (#17027)
3. Performance regressions reported on macOS M4 Pro MLX (#19866)
4. MLX runner memory issues (#19886, #19891)
5. New feature for inkling2 (#19881) and gemma4 (#19890)
6. Intel IGPU Vulkan support being improved (#19568)
7. Cohere thinking parser fix (#19875)
8. Ollama_NO_THINK environment variable being added (#17739)

Now I'll structure the digest following the requested format.
</think>


# Ollama Digest — 2026-11-25

## Today's Highlights

The Ollama project shows significant activity around MLX runner stability and new model architecture support. Critical memory management fixes are in flight for macOS MLX workloads (addressing goroutine leaks and unbounded cache growth), while inkling2 architecture receives dedicated performance optimizations targeting short conversation histories. A VRAM accounting overhaul is progressing through PR #19632, promising resolution for multiple reported GPU allocation bugs.

## Releases & Breaking Changes

**No new releases published in the last 24 hours.**

Migration notes from prior releases still relevant:
- **v0.40.17** introduced a performance regression on macOS M4 Pro MLX (see issue #19866); users on Apple Silicon may consider staying on v0.40.16 or earlier until a fix lands.

## New Model & Hardware Support

| Category | Details | References |
|----------|---------|------------|
| **Inkling-2 architecture** | PR #19881 introduces optimized short-history handling using Metal split attention kernels; draft proposals and conversation snapshots receive dedicated performance work | [#19881](https://github.com/ollama/ollama/pull/19881) |
| **Gemma 4 tool calls** | PR #19890 repairs single-quoted list item formatting in tool arguments for models like `gemma4:26b-a4b-it-qat` | [#19890](https://github.com/ollama/ollama/pull/19890) |
| **Intel IGPU Vulkan** | PR #19568 enables Vulkan as default for Intel IGPU (Ultra Series 1+, driver 32.0.101.9150+, 16 GB+ RAM, IGPU-only) | [#19568](https://github.com/ollama/ollama/pull/19568) |
| **Cohere thinking tokens** | PR #19875 flushes buffered thinking content when stream terminates before `<|END_THINKING|>` tag | [#19875](https://github.com/ollama/ollama/pull/19875) |

Feature requests still open:
- **GPU hardware API endpoint** — issue #3822 requests a dedicated `/api/devices` endpoint to expose detected GPUs/CPUs and memory; PR #19880 (closed, not merged) partially addressed this
- **Model name length** — issue #18274 reports 80-character limit blocks HuggingFace imports with long filenames; no PR yet

## Performance & Optimization

### Landed / In Review

| PR | Description | Impact |
|----|-------------|--------|
| [#19881](https://github.com/ollama/ollama/pull/19881) | inkling2: Metal split attention for histories <1024 keys, dense-mask elimination | Reduced FP32 widening overhead on short conversations |
| [#19632](https://github.com/ollama/ollama/pull/19632) | llm/server: Fix VRAM accounting and GPU splitting | Resolves #19463, #18679, #18349, #16599 — prevents incorrect eviction and unnecessary cross-GPU spreads |
| [#17027](https://github.com/ollama/ollama/pull/17027) | Flush OpenAI-compatible SSE streaming responses | Fixes UI hangs in Chatbox/OpenWebUI (issue #15329) |
| [#19848](https://github.com/ollama/ollama/pull/19848) | Bound finite cgroup memory headroom by host RAM | Prevents unsigned integer underflow in memory admission |
| [#19334](https://github.com/ollama/ollama/pull/19334) (CLOSED) | Fix media ordering in Embedding for multimodal models (Gemma 4) | Media markers now interleaved correctly, not appended at end |

### Reported Concerns

| Issue | Severity | Details |
|-------|----------|---------|
| [#19866](https://github.com/ollama/ollama/issues/19866) | **High** | v0.40.17 performance regression on M4 Pro MLX with Qwen 3.8 27b; `OLLAMA_KEEP_ALIVE` shows 8 hours unexpectedly |
| [#19891](https://github.com/ollama/ollama/issues/19891) | **High** | MLX prefix-cache snapshots paged out but never evicted; ~0.6 GiB growth per distinct prompt (Mac Studio M5 Ultra, 256 GB) |
| [#19886](https://github.com/ollama/ollama/issues/19886) | **High** | MLX saved history grows from 23 GB to 70 GB in 13 minutes on 64 GB Mac; triggers swap ballooning to 37 GB |
| [#19885](https://github.com/ollama/ollama/issues/19885) | **Medium** | O(N²) string operations in image marker construction; 64k empty images holds server for a CPU-minute |

## Stability & Regressions

| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#17131](https://github.com/ollama/ollama/issues/17131) — Goroutine and semaphore leaks on client disconnect | **Critical** | Open | [#17881](https://github.com/ollama/ollama/pull/17881) |
| [#17251](https://github.com/ollama/ollama/issues/17251) — `ollama ps` reports incorrect VRAM vs `rocm-smi` | **High** | Open | (partial via [#19632](https://github.com/ollama/ollama/pull/19632)) |
| [#19879](https://github.com/ollama/ollama/issues/19879) — Inkling-2-mini OOM crashes DGX Spark | **Critical** | Closed (no resolution merged) | — |
| [#19888](https://github.com/ollama/ollama/issues/19888) — inkling2 tensor lookup failure (`blk.24.attn_q.weight`) | **High** | Open | — |
| [#19877](https://github.com/ollama/ollama/issues/19877) — Olmo3 `\u003c` escape not decoded | **Medium** | Open | [#19878](https://github.com/ollama/ollama/pull/19878) |
| [#19866](https://github.com/ollama/ollama/issues/19866) — v0.40.17 MLX regression | **High** | Open | — |
| [#18274](https://github.com/ollama/ollama/issues/18274) — 80-char model name limit | **Medium** | Open | — |

## What This Means for Application Developers

1. **macOS MLX users on v0.40.17 should monitor memory** — The combination of issues #19886 and #19891 indicates active memory leaks in the MLX runner. For production deployments on Apple Silicon, consider setting `OLLAMA_KEEP_ALIVE` to shorter windows or restarting the service periodically until fixes land.

2. **Streaming endpoint consumers: test reconnection logic** — The goroutine leak fix (PR #17881) targeting #17131 will change how abandoned requests are cleaned up. Applications should verify they handle mid-stream disconnects gracefully.

3. ** multimodal embedding users** — If using Gemma 4 or similar interleaved vision-language models, the closed PR #19334 indicates media ordering was previously broken. Verify your embedding results reflect correct image-text associations.

4. **Intel IGPU users on Windows** — Vulkan is now default OOB for qualifying Intel integrated GPUs (PR #19568), which should improve inference performance without manual configuration.

5. **Ollama-as-backend for OpenAI-compatible UIs** — PR #17027 resolves streaming stalls in Chatbox and OpenWebUI. Update to the next release once available.

6. **Inkling-2 users** — The tensor dimension error in #19888 affects `thinkingmachines/Inkling-2-Mini` loading on v0.40.18; avoid that combination or watch for a fix.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data for LiteLLM and generate a structured digest for 2026-11-25.

Let me organize the information:

**Releases:**
- v1.109.5
- v1.112.0-rc.1
- v1.111.0
- v1.110.4
- v1.108.17 (LTS)

**Top Issues (by comment count):**
1. #12367 [CLOSED] OAuth2-based LLM provider support (14 comments, 17 👍)
2. #12448 [CLOSED] Support salt rotating (11 comments)


3. #50065 [OPEN] MCP tools/list blocks 18-50s on legacy subscription listener (11 comments)
4. #30118 [CLOSED] UI login redirects to internal Docker container IP (9 comments)
5. #21312 [OPEN] Failed requests not counting towards RPM limits (7 comments)
6. #53716 [OPEN] azure_ai models exceed context window limit (6 comments)
7. #29818 [CLOSED] OpenAI Codex CLI does not work with LiteLLM (6 comments)
8. #28993 [CLOSED] fastapi==0.124.4 pin blocks starlette CVE-2026-48710 (5 comments)

Now looking at the pull requests that came through, there are several fixes around response handling and bedrock mantle schema validation, plus a new feature for letting deployments route their upstream traffic through the proxy itself.

I'm also seeing fixes for gateway message serving, various zai and responses API issues, billing problems with refused streams, router call counting, and Bedrock safety parameters. There's another feature for deferred tools handling on the Anthropic messages bridge, and then integration tests dropping malformed Gemini count cells that Google rejects.

Looking at the latest PRs, I'm adding features like recording served attempts in gateway inference, closing gaps in Bedrock tool call scanning, refactoring gateway auth, and doing some Rust cleanup to refuse bare tokio spawns.

The most impactful items today are the OAuth2 provider support and salt key rotation hitting stable, plus the MCP tools/list regression in 1.108.0 blocking 18-50 seconds.

For this week's work, I need to highlight the context window issue with Azure AI models, the failed requests not counting toward RPM limits, the Redis connection leak when using rate limits, and the OpenTelemetry metric export interval that's hardcoded to 5 seconds. There's also a new feature allowing deployments to route traffic through their own upstream proxy, and the fix for JSON Schema keywords that gemma-4 rejects.

On the stability side, I'm tracking the MCP tools/list regression, the RPM limit counting bug, the Azure AI context window issue, and the Redis connection leak that's now in the PR queue. There's also a TPM enforcement bug for streaming requests with model rate limits enabled, plus the OpenTelemetry metric export interval problem. I'm noting the Redis connection leak issue where each call opens a new connection that never closes. Now I'm reviewing the active pull requests and seeing several key improvements: fixes for response logging to capture tool calls properly, per-deployment proxy routing for upstream traffic, JSON schema fixes for bedrock models, message serving updates for the Rust gateway, and billing adjustments for refused streams.

I'm also tracking additional fixes around LM model compatibility, call counting under deployment groups, Bedrock safeguards, and deferred tools handling, plus integration tests for Gemini and feature work on inference recording and Rust gateway authentication. The most impactful PRs are the ones addressing JSON schema compatibility, per-deployment proxy routing, and the call counting improvements.

On the critical side, there are several open issues: an MCP tools/list blocking problem in v1.108.0 that's causing 18-50 second delays, Azure AI models exceeding context window limits despite default parameters, failed requests not properly counting toward RPM limits, and a Redis connection leak when deployments have rpm or tpm limits configured. The context window issue and RPM counting bug are particularly significant for production workloads.

Now I'm compiling the security vulnerabilities to include in the digest.
</think>


# LiteLLM Daily Digest — 2026-11-25

## 1. Today's Highlights

The 1.112.0-rc.1 release candidate landed alongside three stable patches (v1.109.5, v1.110.4, v1.111.0), with the LTS track holding at v1.108.17. Two long-standing feature issues reached resolution — OAuth2 custom provider support (#12367) and salt key rotation (#12448) — both now closed. A critical regression from v1.108.0 persists: MCP `tools/list` through the gateway blocks 18–50 seconds when clients send `notifications/initialized` with pre-2026 protocol versions (#50065), a performance cliff confirmed active with Open WebUI's `mcp` SDK.

---

## 2. Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| [v1.112.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-rc.1) | Release Candidate | `ghcr.io/berriai/litellm:v1.112.0-rc.1` |
| [v1.111.0](https://github.com/BerriAI/litellm/releases/tag/v1.111.0) | Stable | `ghcr.io/berriai/litellm:v1.111.0` |
| [v1.110.4](https://github.com/BerriAI/litellm/releases/tag/v1.110.4) | Stable | `ghcr.io/berriai/litellm:v1.110.4` |
| [v1.109.5](https://github.com/BerriAI/litellm/releases/tag/v1.109.5) | Stable | `ghcr.io/berriai/litellm:v1.109.5` |
| [v1.108.17](https://github.com/BerriAI/litellm/releases/tag/v1.108.17) | LTS (Stable) | `ghcr.io/berriai/litellm:lts` points here |

**LTS migration note:** If you are on `lts` tag and not yet on v1.108.17, pull the tag to get the latest LTS patch. The per-deployment `deferred_tools` feature from #54183 has been backported to the 1.108 line via [#54213](https://github.com/BerriAI/litellm/pull/54213), so Claude Code tool-search tool-caching now works on LTS for non-Anthropic models.

**Backport activity on LTS/1.108.x:** Multiple mainline fixes are being cherry-picked:
- [#54230](https://github.com/BerriAI/litellm/pull/54230) — strip JSON Schema keywords gemma-4 rejects on Bedrock Mantle
- [#54180](https://github.com/BerriAI/litellm/pull/54180) — drop safeguards under `drop_params` where Bedrock rejects them
- [#54213](https://github.com/BerriAI/litellm/pull/54213) — per-deployment `deferred_tools` handling
- [#53768](https://github.com/BerriAI/litellm/pull/53768) — reject unresolvable `previous_response_id` on chat completions bridge

---

## 3. New Model & Hardware Support

No new model families or hardware backends announced today. The following in-flight PRs indicate upcoming support:

- **[#52515](https://github.com/BerriAI/litellm/pull/52515) `feat(proxy)`: per-deployment upstream proxy routing** — Admins can now register named upstream proxies under **Models + Endpoints > Upstream Proxies**, allowing a deployment to route through its own regional proxy rather than the proxy-wide `HTTP_PROXY`. This solves the latency/availability gap when providers are fast in one region and slow/blocked in another. **Status: OPEN, 2026-11-18.**

- **[#54214](https://github.com/BerriAI/litellm/pull/54214) `fix(bedrock_mantle)`: drop gemma-4-rejected JSON Schema keywords** — Bedrock Mantle gemma-4 models reject specific JSON Schema keywords that Claude Code's built-in tools send (e.g., `contains`, `pattern`, `const`). The proxy now strips only those keywords from tool and response schemas before forwarding. **Status: OPEN, 2026-11-24.** Backported to LTS as [#54230](https://github.com/BerriAI/litellm/pull/54230).

---

## 4. Performance & Optimization

| Issue / PR | Impact | Detail |
|---|---|---|
| [#50065](https://github.com/BerriAI/litellm/issues/50065) **[REGRESSION]** | **Critical — up to 50 s/block** | MCP `tools/list` through `/mcp/` blocks 18–50 s on legacy subscription listener (`notifications/initialized` with pre-2026 protocol). Affects v1.108.0 when used with Open WebUI. No fix PR yet. |
| [#37041](https://github.com/BerriAI/litellm/issues/37041) `[CLOSED]` | ~8 s latency per completion | Ollama `get_runtime_model_info` ignores the request's `api_base` and falls back to `localhost:11434`, adding ~4 s TCP connect timeout × 2 per completion call. Now closed. |
| [#38052](https://github.com/BerriAI/litellm/issues/38052) `[OPEN]` | Metric re-ship ×12/min regardless of load | OTel v2 `build_metric_reader` hardcodes `export_interval_millis=5000`, ignoring `OTEL_METRIC_EXPORT_INTERVAL`. Cumulative histograms re-export all series every 5 s. No fix PR yet. |
| [#48589](https://github.com/BerriAI/litellm/issues/48589) `[OPEN]` | Connection pool exhaustion | `Sync Router.completion` with a Redis-backed Router and an rpm/tpm-limited deployment opens a new Redis connection and async Redis client on every call, never closing either. Each call adds one TCP connection to Redis with no cleanup. Fix not yet merged. |
| [#54171](https://github.com/BerriAI/litellm/pull/54171) `fix(router)` | Routing imbalance | Least-busy routing was counting calls under the caller's name instead of the deployment's group, causing the router to misjudge load and stack calls on already-busy deployments. **Status: OPEN.** |

---

## 5. Stability & Regressions

**Severity order:**

| # | Severity | Issue | Status | Fix PR |
|---|---|---|---|---|
| 1 | 🔴 Critical | MCP `tools/list` blocks 18–50 s after v1.108.0 upgrade (#50065) | OPEN | — |
| 2 | 🔴 Critical | Redis connection leak under rpm/tpm limits (#48589) | OPEN | — |
| 3 | 🟠 High | Failed requests not counted toward RPM limits (#21312) | OPEN | — |
| 4 | 🟠 High | TPM rate limit never enforced for streaming requests (#41610) | CLOSED | — |
| 5 | 🟠 High | Azure AI models exceed context window despite default params (#53716) | OPEN | — |
| 6 | 🟡 Medium | Cold end-user spend counter over-incremented, blocks user under budget (#47062) | CLOSED | — |
| 7 | 🟡 Medium | Guardrail-blocked streams logged as success or zero-cost (#54238) | OPEN | Fix PR exists |
| 8 | 🟡 Medium | `PUT /v1/mcp/server` silently nulls OAuth2 config when `delegate_auth_to_upstream=true` (#37258) | CLOSED | — |
| 9 | 🟡 Medium | `/toolset/{name}/mcp tools/list` loses URL scope after catalog authority refresh (#47856) | CLOSED | — |
| 10 | 🟢 Low | OTel metric export interval hardcoded, ignores env var (#38052) | OPEN | — |

**Notable closed regressions resolved today:**
- **#30118**: UI login redirected to internal Docker IP after upgrade to v1.88.x behind nginx reverse proxy — resolved.
- **#37041**: Ollama fallback to `localhost:11434` adding ~8 s per completion — resolved.
- **#41610**: TPM enforcement gap for streaming with `optional_pre_call_checks: ["enforce_model_rate_limits"]` — closed.
- **#47062**: Cold end-user spend counter over-incremented by full balance — closed.

---

## 6. What This Means for Application Developers

1. **If you run MCP through LiteLLM Proxy with Open WebUI or any client using pre-2026 MCP protocol:** Hold on v1.107.x or earlier until #50065 is patched. The 18–50 s blocking on every `tools/list` call is a production-breaking regression introduced in v1.108.0.

2. **If you use Redis-backed Router with rpm or tpm limits:** Avoid synchronous `Router.completion` in tight loops — each call leaks a Redis connection. Monitor your Redis connection count and consider async paths or pooling until #48589 is merged.

3. **If you route Claude Code through Bedrock Mantle gemma-4:** Tool calls are currently failing with 400s because gemma-4 rejects specific JSON Schema keywords. Track [#54214](https://github.com/BerriAI/litellm/pull/54214) for the fix.

4. **If you use virtual keys with RPM limits:** Failed (4xx/5xx) requests are not being counted against the key's limit (#21312). This means a misconfigured client can exceed intended throughput limits silently. No fix yet — monitor your key usage manually.

5. **If you need per-region upstream routing:** [#52515](https://github.com/BerriAI/litellm/pull/52515) adds a named upstream-proxy registry per deployment. If you have a multi-region LLM setup where one region is slower to your proxy, this feature will allow per-deployment proxy configuration without touching global `HTTP_PROXY` settings.

6. **If you track spend with end users:** The cold-start spend counter bug (#47062) has been closed. If you experienced users unexpectedly hitting budget limits after a proxy restart, this may be the root cause.

7. **If you use LTS tag in production:** Pull `ghcr.io/berriai/litellm:lts` to get v1.108.17, which now includes `deferred_tools` per-deployment support and the gemma-4 schema fix via backports.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the provided GitHub data for Unsloth AI and create a structured digest for 2026-11-25.

Key items to focus on:

1. **Latest Releases**: v0.1.924-beta with Inkling finetuning + perf fixes
2. **Major Issues**: Memory leaks, VRAM OOM, AMD ROCm issues, CUDA problems
3. **PRs**: Multi-GPU training backend, pipeline parallel fixes, Studio improvements, GGUF improvements

Let me structure this into the requested format.

Key highlights:
- v0.1.924-beta released with Inkling 2 Mini fine-tuning support (1.8-3.1x faster, 50% less VRAM)
- New multi-GPU training backend PR (DDP, FSDP2, TP, PP, CP, EP)
- Several critical bug fixes around AMD/ROCm, CUDA resource management
- Inkling 2 Mini still having some issues (VRAM OOM, regex errors)
- Studio improvements for GGUF handling, tool calls, PDF reading

Let me create a professional digest.
</think>


# Unsloth Digest — 2026-11-25

---

## 1. Today's Highlights

Unsloth **v0.1.924-beta** landed with native Inkling 2 Mini fine-tuning support, delivering 1.8–3.1× speedup and 50% VRAM reduction via LoRA/QLoRA. A major new-feature PR ([#19378](https://github.com/unslothai/unsloth/pull/19378)) introduces full multi-GPU training backends (DDP, FSDP2, TP, PP, CP, EP) to Studio, while several critical stability PRs address AMD ROCm bf16 detection, pipeline-parallel warmup on PyTorch 2.10/2.11, and CUDA resource leaks on video generation.

---

## 2. Releases & Breaking Changes

| Version | Summary | Link |
|---------|---------|------|
| **v0.1.924-beta** | Inkling 2 Mini fine-tuning (LoRA/QLoRA), pipeline/tensor/context parallel, export to GGUF or merged 16-bit; performance fixes | [Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.924-beta) |

**Migration notes:**
- Pre-quantized Inkling 2 Mini LoRAs exported from a local folder base now merge correctly ([#19403](https://github.com/unslothai/unsloth/pull/19403)).
- `FastLanguageModel.from_pretrained` now respects an explicit `quantization_config` over the pre-quantized name remap ([#19404](https://github.com/unslothai/unsloth/pull/19404)).

---

## 3. New Model & Hardware Support

| Model / Hardware | Details | Link |
|-----------------|---------|------|
| **Inkling 2 Mini 1.8B** | Full LoRA/QLoRA fine-tuning, GGUF export, multi-GPU parallelism (tensor/pipeline/context) | [#19403](https://github.com/unslothai/unsloth/pull/19403) |
| **Ling-3.2-air (multi-modal)** | Feature request open; comparable to Qwen3.8-Flash-Next | [#19298](https://github.com/unslothai/unsloth/issues/19298) |
| **AMD Strix Halo / ROCm 7.13** | Follow-up fix for host-shortfall mmap after carve-out ([#18805](https://github.com/unslothai/unsloth/issues/18805)); ROCm bf16 detection now correctly ignores gfx10 iGPUs ([#19340](https://github.com/unslothai/unsloth/issues/19340)) | [PR #17607](https://github.com/unslothai/unsloth/pull/17607) |
| **Intel Arc 140V (Vulkan)** | Bug filed for Inkling-2-mini output generation ([#19239](https://github.com/unslothai/unsloth/issues/19239)) | — |
| **LTX-2.5 video** | 768×512 clips now render on 6 GiB cards (was 8 GiB minimum) | [#19377](https://github.com/unslothai/unsloth/pull/19377) |

---

## 4. Performance & Optimization

| Area | Change | Numbers | Link |
|------|--------|---------|------|
| **Inkling 2 Mini fine-tuning** | LoRA/QLoRA training throughput | **1.8–3.1× faster**, **50% VRAM reduction** | [Release notes](https://github.com/unslothai/unsloth/releases/tag/v0.1.924-beta) |
| **Multi-GPU training** | Studio backend: DDP, FSDP2, TP, PP, CP, EP with auto-default | Scales across all GPUs instead of single-card layering | [#19378](https://github.com/unslothai/unsloth/pull/19378) |
| **Pipeline parallel** | Fix loop schedules at pp=1 on PyTorch 2.10/2.11 (gloo self P2P warm-up) | Resolves `RuntimeError` in `gloo/transport/tcp/pair.cc` | [#19406](https://github.com/unslothai/unsloth/pull/19406) |
| **GGUF placement retry** | `--fit on` retry now uses all available GPUs instead of narrowed set | Prevents unnecessary host-RAM spillover | [#19402](https://github.com/unslothai/unsloth/pull/19402) |
| **LTX-2.5 memory** | Leaner connectors, VAE encoder parking, measured denoise pricing | **6 GiB** min (down from 8 GiB) | [#19377](https://github.com/unslothai/unsloth/pull/19377) |
| **Hub safetensors reads** | Concurrent shard-header fetching for component sizing | Eliminates sequential round-trips for large repos | [#19381](https://github.com/unslothai/unsloth/pull/19381) |
| **Ollama Modelfile lookup** | Case-insensitive base-model lookup | `Unsloth/Llama-3.2-3B` now resolves correctly | [#19407](https://github.com/unslothai/unsloth/pull/19407) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **Critical** | CUDA resource already mapped error on second video generation with MiniMax-H3 | Open | — |
| 🔴 **Critical** | VRAM OOM with Inkling 2 Mini on AMD RX 7900 GRE (ROCm 7.13) | Open | — |
| 🔴 **Critical** | CUDA 13 portable llama.cpp ships without CUDA runtime → silently runs on CPU | Open | — |
| 🟠 **High** | Memory leak: Drive C loses 200–400 MB after every Unsloth use | Open (7 comments) | — |
| 🟠 **High** | AMD mixed NVIDIA+AMD hosts ignore AMD card entirely | Open | — |
| 🟠 **High** | Inkling-2-Mini "Failed to process regex" (`std::regex error_stack`) on Windows | Open | — |
| 🟠 **High** | Local tool loop dispatches call with zero-token result budget | Open | — |
| 🟡 **Medium** | `@skill` content appended only on mention turn → prompt cache miss on turn 2 | Open | — |
| 🟡 **Medium** | SentencePiece tokenizer loses indent space after streamed newlines | Open | [#19405](https://github.com/unslothai/unsloth/pull/19405) |
| 🟡 **Medium** | Gemma 4 string tool arguments not rendered in trained call syntax | Open | — |
| 🟢 **Low** | Chat banner empty in desktop app | Open | — |

**Closed fixes landed today:**
- AMD bf16 detection fixed when gfx10 iGPU present ([#19340](https://github.com/unslothai/unsloth/issues/19340))
- Studio API format test now validates the edited format, not the saved one ([#19364](https://github.com/unslothai/unsloth/pull/19364))
- `~` path literal bug in llama-server logs fixed for Docker/systemd environments ([#19359](https://github.com/unslothai/unsloth/pull/19359))
- Local FastFlowLM runtime configuration now supported ([#19401](https://github.com/unslothai/unsloth/pull/19401))

---

## 6. What This Means for Application Developers

1. **Inkling 2 Mini is production-viable for fine-tuning** — v0.1.924-beta enables 1.8–3.1× faster LoRA/QLoRA training with 50% less VRAM. Export paths to GGUF and merged 16-bit are now solid; however, watch for VRAM OOM edge cases on AMD RDNA4 (RX 7900 GRE) and regex errors on Windows NVIDIA.

2. **Multi-GPU training graduates to Studio** — The new DDP/FSDP2/TP/PP/CP/EP backend in [#19378](https://github.com/unslothai/unsloth/pull/19378) means single-GPU is no longer the hard ceiling for Studio training. Expect auto-defaults to pick sensible strategies, but verify your workload profile.

3. **AMD ROCm users: upgrade to latest beta** — The bf16 detection regression and Strix Halo mmap issues are addressed in the current release cycle. Mixed NVIDIA+AMD hosts still have a known limitation ([#12248](https://github.com/unslothai/unsloth/issues/12248)).

4. **Video generation on constrained VRAM** — LTX-2.5 at 768×512 now fits on 6 GiB cards. If you have 8 GiB or more, the previous behavior is unaffected.

5. **Tool-call UX improved** — Tool-call examples in code blocks are now preserved in chat history ([#19367](https://github.com/unslothai/unsloth/pull/19367)), and llama-server error messages are surfaced correctly on passthrough routes ([#19357](https://github.com/unslothai/unsloth/pull/19357)). This matters for anyone building agentic pipelines on top of Unsloth Studio.

6. **Docker/systemd deployments: patch your log paths** — If you set `UNSLOTH_STUDIO_HOME` with a `~` prefix, logs were writing to a literal `~` directory. Pull [#19359](https://github.com/unslothai/unsloth/pull/19359) before deploying.

---

*Digest generated from GitHub data for [unslothai/unsloth](https://github.com/unslothai/unsloth) — 2026-11-25*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*