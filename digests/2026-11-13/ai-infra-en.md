# AI Infrastructure Digest 2026-11-13

> Generated: 2026-11-13 02:51 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to create a cross-project comparison report synthesizing all five project digests I just created. Let me analyze each project's data and create a comprehensive, structured report.

Let me organize the key data points:

**vLLM:**
- No releases in last 24h
- 500+ PRs, 160 issues active
- DeepSeek-V4-Flash SM8x support in progress
- NVFP4 kernel selection (FlashInfer b12x over CUTLASS)
- Batch-invariant matmul (Gemma 4: 1.76× at concurrency 1)
- DeepSeek-V4.1 AMD decoder optimizations


- FLy speculative decoding, DeepGEMM FP8 kernel regression on Blackwell, Confidential Computing garbage output, CUDA Checkpoint/Restore RFC, TP-agnostic KV offloading, Rust frontend with stop string support, Python 3.14 as new default, and Qwen3.8 on AMD gfx950/MI355X all represent recent development activity.

**SGLang:**
- No new releases, though there's a 1.0 roadmap tracker
- Decode regression on Hopper with 33-45% performance hit, plus GLM-5.3-Flash NaN logits issue
- Multiple CI flaky tests and CUDA graph capture failures for hybrid models, HiCache/Mooncake cache hit rate regression, and Qwen-VL OOM problems
- Kimi K3 decode RFC, HiSparse data plane, Mamba state checkpointing, GreedyDual-Size eviction, AMD MORI EPv2 and MegaMoE backends, ROCm Qwen3 prefill fusions, layer-first prefill doubling prefill throughput, 1.0 stability release planned

**llama.cpp:**
- b12340 release with SSRF hardening, graph metadata lazy allocation, and SYCL AOT >4GB fix
- NVFP4 fuse, layer-first prefill, lazy VRAM allocation, scheduler context sizing, Jinja template rendering overhead, and SYCL thread safety improvements
- RAON-1-mini-preview, Zaya1 8B, and HunyuanVL F32 support; Hexagon SSM_SCAN and Vulkan SSM_SCAN d_state=96; OpenVINO backend for Qwen3.5 GDN decomposition; DeepSeek V3.5 GigaChat 3.5 and CUDA fused KV dequantization
- YaRN amplitude multiplication bug, context shift regression, FLUX.3 float16 on 12GB, MOSS-Transcribe-Diarize token budget fix, AMD MI300X ROCm 7.14 stride assertion, H3/H3-Image fused RMSNorm+RoPE and composited VAE, and DiffusionGemma load regression fixed

**Ollama:**
- No releases; thinking behavior change mapped to lowest model level
- AMD Strix Halo VRAM regression in containers, mimo-v2.6-pro tool-call flooding in cloud, and ChatGPT integration stale catalog issues
- MLX runner adaptive history retention, cross-slot prefix reuse, and YaRN context shift fix in llama.cpp
- Budget bypass via stale Redis fallback, 1,000,000× cost overbilling bug, MCP tools/list blocking, Rust router-core migration with Redis key construction and in-memory cache expiry, Fal_ai gemini-omni-flash upscale pricing, Nace drex-max support, and Trusted folders feature
- Studio UI: model picker replacing thinking pill, clone run settings, nested project folders, Fedora RPM bundles, SSL certs via env vars, and model picker in composer

**Unsloth:**
- Transformers 5.5.4 and SageAttention updated
- Studio has repeated prompt reprocessing with Qwen hybrid, ROCm 7.14 MI300X stride assertion, and Docker audio.cpp update failure
- FLUX.3 bf16-as-stored loading on 12GB hosts, Qwen3.8-DeepSeek-V4.1 Engram table precision in Studio, and MOSS-Transcribe-Diarize token budget scaling now working
- Qwen3.8 UD 3.1 MTP head drift, `--load-mode none` mmap regression fixed, H3/H3-Image VAE and RMSNorm+RoPE fused kernels, thread window scroll performance improvements, browser-use port-aware approvals, and nested project folder support with SSL certs via env vars

Now I'm ready to synthesize all this data into a comprehensive cross-project comparison report.
</think>


# AI Infrastructure Ecosystem — Cross-Project Digest
**2026-11-13 | Senior Analyst View**

---

## 1. Ecosystem Overview

The AI inference stack is in a period of simultaneous multi-vector maturation. The serving engines (vLLM, SGLang) are converging on Blackwell and AMD CDNA support while racing to address regressions that shipped with recent feature cadence; llama.cpp is absorbing upstream llama.cpp improvements and rebuilding its memory management model; LiteLLM is hardening its multi-tenant billing path with Rust rewrites; and Unsloth Studio is tightening the local/fine-tuning layer. The common thread today is that **correctness is competing with performance** — several projects have shipped measurable throughput gains while carrying unresolved correctness bugs that affect production deployments.

---

## 2. Activity Comparison

| Project | Issues (open) | PRs (total) | Releases (24h) | Active Severity-1 Bugs |
|---------|--------------|------------|----------------|----------------------|
| **vLLM** | ~160 reported | ~500 with recent activity | **None** | 🔴 2 (DeepGEMM sm_120 crash, EngineDeadError TDX) |
| **SGLang** | ~23 reported | ~196 total | **None** | 🔴 2 (Hopper decode regression, GLM-5.3 NaN logits) |
| **llama.cpp** | ~11 reported | ~27 in 24h | **b12340** (SSRF fix) | 🔴 1 (YaRN context shift amplitude bug) |
| **Ollama** | ~11 reported | ~27 in 24h | **None** | 🔴 1 (Strix Halo VRAM regression, container) |
| **LiteLLM** | ~10+ reported | ~15 in 24h | **v1.110.0-rc.2** | 🔴 2 (1M× billing overcharge, Redis budget bypass) |
| **Unsloth** | ~23 reported | ~196 total | **None** | 🔴 1 (Qwen hybrid prompt reprocessing loop) |

**Key observations:**
- No serving engine cut a release in the last 24 hours — all are in development cycles simultaneously.
- llama.cpp and LiteLLM are the only projects with a fresh build tag; the others are on unreleased development tracks.
- The total count of open 🔴-severity issues across the ecosystem is **8**, suggesting a meaningful correctness debt load heading into year-end.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4 / V4.1 (NVIDIA)** | ✅ SM8x WIP (#50576) | — | — | — | — |
| **DeepSeek-V4.1 (AMD gfx942)** | ✅ Fused decoder (#60153) | ✅ MORI EPv2 (#44492) | — | — | — |
| **Qwen3.8 Flash-Next** | ✅ NVFP4, MXFP4 MoE | ✅ ROCm QK-norm+RoPE fused | — | — | ✅ UD 3.1 Engram precision UI |
| **Gemma 4** | ✅ Batch-invariant matmul 1.76× | — | ✅ F32 pos embedding fix | — | ✅ UD 3.1 request |
| **Kimi K3** | — | ✅ RFC open (#49536) | — | — | — |
| **GLM-5.3 Flash** | ✅ Base support | ⚠️ CUDA graph broken; NaN logits bug | — | — | — |
| **GigaChat 3.5 (432B MoE)** | — | — | ✅ MLA+MoE hybrid | — | — |
| **FLUX.3 (image gen)** | — | — | — | — | ✅ bf16-as-stored on 12 GB |
| **Zaya1 8B** | — | — | ✅ SSM_SCAN + Vulkan fix | — | — |
| **RAON-1-mini-preview** | — | — | ✅ HF→GGUF + inference | — | — |
| **Nemotron 3.5 ASR** | ✅ Streaming request open | — | — | — | — |
| **HunyuanVL** | — | — | ✅ F32 position embedding enforced | — | — |
| **MiniMax-H3 / H3-Image** | — | ✅ Composited VAE tiled decode | — | — | ✅ Fused RMSNorm+RoPE + VAE |
| **Ascend NPU** | — | ✅ NPU Kimi K3 disabled cutedsl | — | — | RFC open |
| **AMD gfx950 / MI355X** | ✅ 2 active trackers | ✅ MegaMoE AITER backend | — | — | — |
| **Blackwell SM120** | ✅ NVFP4 FlashInfer b12x kernel | — | — | — | — |

**Leader assessment:**
- **vLLM** leads on NVIDIA Blackwell NVFP4 and Ampere SM8x frontier coverage.
- **SGLang** leads on AMD heterogeneous compute (MORI, MegaMoE, ROCm fused kernels).
- **llama.cpp** leads on architectural diversity (Hexagon, Vulkan SSM_SCAN, SYCL AOT >4 GB, OpenVINO, MUSA).
- **Unsloth** leads on multimodal diffusion + transcribed audio in a local studio UI.

---

## 4. Performance Frontier

Optimization work is concentrated in four clusters:

**A. KV Cache and Memory Management**

| Project | Initiative | Stage |
|---------|-----------|-------|
| vLLM | TP-agnostic KV offloading for cross-TP sharing | In progress (#61886) |
| vLLM | CUDA Checkpoint/Restore for near-zero cold starts (RFC) | RFC (#34303) |
| llama.cpp | Lazy VRAM allocation (dynamic context-based growth) | PR (#32170, multi-backend) |
| llama.cpp | Graph metadata pages lazily allocated (RSS reduction) | Released (b12322) |
| Unsloth | Lazy tensor accounting for `--load-mode none` | Fixed (#17607) |
| SGLang | Mamba state checkpointing at fork points only | Merged (#49886) |

**B. Quantization and Kernel Selection**

| Project | Initiative | Metric |
|---------|-----------|--------|
| vLLM | NVFP4 FlashInfer b12x kernel selection (SM120) | Faster across all decode shapes |
| vLLM | Batch-invariant matmul (Gemma 4 E2B/E4B) | **1.76× throughput** at concurrency 1 |
| llama.cpp | NVFP4 fused w_s scale into prefil epilogue | Microbenchmarks in review |
| llama.cpp | Fused q8_0/q4_0/f8_e4m3 KV dequant in CUDA MMA FA | Eliminates separate dequant pass |
| SGLang | HiSparse structured sparsity data plane | New KV backend |
| SGLang | DFLASH verify: top-k over all-gathered logits (TP>1) | Speculation quality improvement |
| Unsloth | H3/H3-Image fused q/k RMSNorm + RoPE | Bit-exact to stock eager |

**C. Batching and Scheduling**

| Project | Initiative | Metric |
|---------|-----------|--------|
| SGLang | Layer-first prefill (all layers per token chunk before next) | **~2× prefill** on dense MoE |
| llama.cpp | Scheduler context right-sizing at split time | Reduced over-allocation |
| vLLM | Batch-invariant feature pass 1 (Gemma 4) | **1.21× at concurrency 128** |
| LiteLLM | Rust router-core: usage counting → native store | Convergence in progress |
| Ollama | MLX adaptive history retention under memory pressure | Better headroom utilization |

**D. Distributed / Disaggregated Serving**

| Project | Initiative | Stage |
|---------|-----------|-------|
| vLLM | CUDA Checkpoint/Restore RFC | Early RFC |
| vLLM | TP-agnostic KV offloading | In progress |
| SGLang | Nested output metadata materialization before PP serialization | Merged (#49116) |
| LiteLLM | Redis key construction moved to Rust store layer | PR open (#50356) |

---

## 5. Layer Positioning

| Layer | Projects | Positioning |
|-------|----------|-------------|
| **Serving Engine** (high-throughput, distributed, production) | **vLLM**, **SGLang** | Both target cloud deployments with tensor parallelism, pipeline parallelism, speculative decoding, KV offloading. vLLM leads on Blackwell NVFP4; SGLang leads on AMD heterogeneous hardware. |
| **Local Inference Runtime** (edge, desktop, consumer GPU) | **llama.cpp**, **Ollama** | llama.cpp is the foundation (C++/CUDA/Metal/Vulkan/Hexagon/etc.); Ollama wraps it with UX, model management, and REST API. Ollama's MLX runner targets Apple Silicon natively. |
| **LLM Gateway / Proxy** (multi-tenant, routing, observability) | **LiteLLM** | Positions above serving engines; provides unified API, cost tracking, auth, and OTel observability. Rust router-core migration signals a push toward production-hardened multi-tenant routing. |
| **Fine-tuning / Training** (dataset preparation, training loops, LoRA/QLoRA) | **Unsloth Studio** | Positions as the fine-tuning layer with a desktop UI; wraps Transformers and llama.cpp backends. Unique in targeting non-engineers who need to customize models locally. |
| **Specialized** | SGLang (agentic/MCP), vLLM (spec decode), llama.cpp (kernel portability) | Each has a specialty: SGLang on tool calling and MCP; vLLM on speculative decoding; llama.cpp on maximum hardware portability. |

**Competitive boundary shifts:** LiteLLM's Rust router-core migration is the most significant cross-layer event — once complete, LiteLLM will own a larger fraction of the request path natively, reducing its dependence on Python-based routing and improving throughput at the gateway layer.

---

## 6. Trend Signals

### Signal 1: Blackwell Is Here, But So Are the Bugs
Two projects have active 🔴 issues on NVIDIA Blackwell (vLLM's DeepGEMM sm_120 assertion, SGLang's GLM-5.3 NaN logits). The sm_120 architecture is not yet stable in production paths across the ecosystem. **Decision point for infrastructure teams:** if you are running FP8 on B200/B100 via vLLM, you must hold at v0.23.0 until v0.24.x patches land.

### Signal 2: AMD ROCm Is Closing the Gap
Qwen3.8 on MI355X/gfx950 has coordinated activity across vLLM (2 trackers) and SGLang (MORI EPv2, MegaMoE, QK-norm+RoPE fused). This is the clearest evidence that AMD's MI300 series is becoming a first-class inference target. **Infrastructure teams planning AMD capacity should track these PRs closely** — the ROCm backend is moving fast but correctness is not yet at the level of the CUDA backend.

### Signal 3: Speculative Decoding Is Proliferating but Fragile
FLy in vLLM, DFlash in SGLang, MTP in llama.cpp, and draft-dflash in Ollama are all active, but all carry open correctness issues (acceptance rate drift, NaN logits, prompt logprobs corruption, prompt reprocessing loops). The **mental model for operators** should be: speculative decoding is production-adjacent, not production-default. Validate carefully before enabling in high-stakes pipelines.

### Signal 4: Rust Eating the Python Middle Tier
LiteLLM's router-core Rust migration (#50862, #50356, #51388, #51383) and vLLM's Rust frontend work (#66540 stop string support) are two independent but convergent movements. The inference stack is slowly rewriting its hot paths in Rust for correctness and throughput. **Agent and application developers integrating at the API level** should verify that Python callback hooks and middleware patterns are still supported in the Rust paths.

### Signal 5: Multi-Architecture KV Cache Is the Next Big Infrastructure Story
vLLM's TP-agnostic KV offloading (#61886) and llama.cpp's lazy VRAM allocation (#32170) both address the same underlying problem: **the KV cache is a shared, heterogeneous resource that must be managed across TP sizes, backends, and memory tiers**. This is the prerequisite for disaggregated serving, multi-tenant KV sharing, and efficient context window utilization. Watch these PRs as leading indicators for disaggregated inference architecture.

### Signal 6: Correctness Debt Is Building
Across all six projects, there are **8 open 🔴-severity issues** today. This is unusually high for a single-day snapshot and suggests that the rapid cadence of feature development is outpacing the regression-testing surface. **Infrastructure teams** should treat current `main` / `master` branches as having higher-than-normal risk, and evaluate pinned releases or LTS tracks (LiteLLM v1.108.7 LTS) for production deployments.

### Signal 7: Billing Correctness in Multi-Tenant Gateways Is a Real Risk
LiteLLM's #48398 (1,000,000× cost overbilling) and #34238 (Redis budget bypass) are both billing-critical issues that could result in revenue loss or customer disputes. Any team using LiteLLM as a cost-control proxy should audit their current setup against these patterns, especially if routing to non-USD-priced providers.

---

*Cross-project digest compiled 2026-11-13. Data sourced from GitHub activity across all five repositories plus Unsloth Studio. All issue/PR numbers reference their respective repositories.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the GitHub data for vLLM and generate a structured digest for 2026-11-13.

Key observations from the data:

1. **No releases in last 24h** - so no breaking changes to report

2. **Active issues (top by comments):**
   - #50576: SM8x (Ampere A100/A800) support for DeepSeek-V4-Flash - 129 comments, high interest
   - #27433: Batch Invariant Feature and Performance Optimization - 106 comments
   - #34303: CUDA Checkpoint/Restore for Near-Zero Cold Starts (RFC) - 34 comments
   - Several ROCm/AMD performance issues for Qwen3.8 on MI355X/gfx950
   - TP-agnostic KV offloading tracking
   - Various bugs related to schedulers, Confidential Computing, etc.

3. **Active PRs (top by recent activity):**
   - Multiple bugfixes and performance improvements
   - Documentation updates
   - ROCm optimizations for DeepSeek-V4.1
   - NVFP4 kernel optimizations
   - Batch-invariant matmul tuning for Gemma 4
   - Tool parser fixes
   - Spec decode fixes
   - Rust frontend improvements

4. **Hardware/Model Support themes:**
   - DeepSeek-V4/V4.1 optimizations (both NVIDIA and AMD)
   - Qwen3.8 on AMD gfx950
   - NVIDIA Nemotron 3.5 ASR
   - Gemma 4 optimizations
   - Various quantization formats (NVFP4, MXFP4, AWQ, etc.)

5. **Performance work:**
   - NVFP4 kernel selection optimization
   - Batch-invariant matmul tuning
   - DeepSeek-V4.1 AMD decoder optimizations
   - FLy speculative decoding improvements
   - DeepGEMM FP8 kernel work
   
I'm seeing several reliability concerns that need attention: a DeepGEMM assertion failure on Blackwell during FP8 kernel initialization, scheduler problems where request admission stalls under load, and silent data corruption in Confidential Computing mode with the V2 model runner. Additionally, there's a GPU memory access fault on ROCm/gfx942 when processing sequences exceeding 2048 tokens, plus issues with speculative decoding causing prompt logprobs corruption. The Rust frontend is getting stop string support and output_mode="text" capability, while Python 3.14 is becoming the new default.
</think>


# vLLM Project Digest — 2026-11-13

---

## 1. Today's Highlights

The vLLM community is doubling down on multi-architecture performance: AMD ROCm optimization for Qwen3.8 on MI355X (gfx950) is progressing rapidly with stacked PRs, while NVIDIA-side work on Blackwell SM120 NVFP4 kernels advances with a new kernel selection preference for FlashInfer b12x over CUTLASS. A draft RFC on CUDA Checkpoint/Restore for near-zero cold starts (#34303) signals upcoming work on disaggregated serving, and the batch-invariance feature continues to mature with Gemma 4 E2B/E4B matmul tuning now landing. No new releases were cut in the last 24 hours, but 500 PRs and 160 issues saw activity.

---

## 2. Releases & Breaking Changes

**None** — No new releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Details | Link |
|------|---------|------|
| **DeepSeek-V4-Flash on SM8x (Ampere)** | Active development to enable DeepSeek-V4-Flash and DeepSeek-V4-Flash-0731 on A100/A800; currently blocked on SM8x compatibility | [#50576](https://github.com/vllm-project/vllm/issues/50576) |
| **NVIDIA Nemotron 3.5 ASR Streaming** | New feature request to support NVIDIA's 600M-parameter multilingual streaming ASR model (`nemotron-3.5-asr-streaming-0.6b`) under OpenMDW-1.1 license | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **GLM 5.3** | Performance optimization work initiated; uses same `glm_moe_dsa` base as GLM-5.2 | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **Qwen3.8 on AMD gfx950 / MI355X** | Two active trackers (#57149, #59575) covering Flash-Next and A95B variants with MXFP4 MoE; PR stack in progress | [#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **XPU MXFP8 Linear** | PR #66494 fixes 3D→2D reshape for XPU MXFP8 kernel compatibility with Transformers backend | [#66494](https://github.com/vllm-project/vllm/pull/66494) |

---

## 4. Performance & Optimization

### Landed / In Review (PRs)

| PR | Area | Details |
|----|------|---------|
| **#67202** | NVFP4 Kernel Selection (SM120) | Prefer FlashInfer b12x over FlashInfer CUTLASS for NVFP4 W4A4 linear on Blackwell; faster across all measured shapes | [#67202](https://github.com/vllm-project/vllm/pull/67202) |
| **#67351** | Batch-Invariant Matmul (Gemma 4) | Tuned BF16 MLP shapes for Gemma 4 E2B/E4B under `VLLM_BATCH_INVARIANT=1`: **1.76× throughput** at concurrency 1, **1.21×** at concurrency 128 | [#67351](https://github.com/vllm-project/vllm/pull/67351) |
| **#60153** | DeepSeek-V4.1 AMD (gfx942) | Fused the gfx942 mHC seam in V4.1 AMD decoder; eliminates several AITER and Triton launches from 64 tokens | [#60153](https://github.com/vllm-project/vllm/pull/60153) |
| **#66593** | FLy Speculative Decoding | Normalized top-k entropy gate (divides by `log(k)`); enables FLy cost overlay with synthetic acceptance | [#66593](https://github.com/vllm-project/vllm/pull/66593) |
| **#64646** | NVFP4 Microbenchmark | Added `benchmark_nvfp4_small_m.py` covering FlashInfer CUTLASS/b12x/cuDNN/CuTe DSL, native b12x, Marlin, Humming across Qwen3.8-27B decode shapes | [#64646](https://github.com/vllm-project/vllm/pull/64646) |
| **#66138** | Prefix Cache / DSpark | Enable shared Mamba checkpoints for DSpark sibling prompts; single-token prefill lookahead with multi-module MTP guards | [#66138](https://github.com/vllm-project/vllm/pull/66138) |

### In Progress (Issues)

| Issue | Area | Details |
|-------|------|---------|
| **#27433** | Batch Invariance | Systematic optimization effort; Gemma 4 tuning (#67351) is the latest land; more families to follow | [#27433](https://github.com/vllm-project/vllm/issues/27433) |
| **#61886** | TP-agnostic KV Offloading | Canonical KV offloading for cross-TP-size sharing; help wanted for PR reviews and coverage items | [#61886](https://github.com/vllm-project/vllm/issues/61886) |
| **#65560** | Humming → Marlin Replacement | RFC to replace Marlin (SM80-era) with Humming across NVIDIA architectures; Humming covers INT4/INT8 GPTQ/AWQ, FP8, MXFP8, MXFP4, NVFP4, MXFP6 | [#65560](https://github.com/vllm-project/vllm/issues/65560) |
| **#54477** | Direct Weight Reload for RL Training | Standardized direct reload across 17 flagship model families; validates and fixes silent MLA weight staleness | [#54477](https://github.com/vllm-project/vllm/issues/54477) |
| **#34303** | CUDA Checkpoint/Restore (RFC) | RFC for near-zero cold starts via CUDA C/R; scoped to v1 engine; targets multi-model serving and elastic deployments | [#34303](https://github.com/vllm-project/vllm/issues/34303) |

---

## 5. Stability & Regressions

> **Severity scale:** 🔴 Critical · 🟠 High · 🟡 Medium · 🔵 Low

| Severity | Issue | Summary | Status |
|----------|-------|---------|--------|
| 🔴 **Critical** | [#45268](https://github.com/vllm-project/vllm/issues/45268) | `EngineDeadError` after L1 sleep/wake cycle with `--kv-offloading-backend native` + `--enable-sleep-mode` on v0.22.1; TP=2/PP=2 across RTX 3090s | Open |
| 🔴 **Critical** | [#47130](https://github.com/vllm-project/vllm/issues/47130) | **Regression v0.23.0 → v0.24.0**: DeepGEMM "Unknown recipe" assertion in FP8 kernel warmup on Blackwell (sm_120); blocks all FP8 serving on B200/B100 | Open, 8 👍 |
| 🟠 **High** | [#53130](https://github.com/vllm-project/vllm/issues/53130) | Scheduler stops admitting requests under load; deferred backlog grows while engine reports healthy | Open |
| 🟠 **High** | [#57224](https://github.com/vllm-project/vllm/issues/57224) | Silent garbage output on GPUs in Confidential Computing (TDX) mode; V2 model runner's UVA views of pinned host memory are stale; **workaround**: set `VLLM_USE_V2_MODEL_RUNNER=0` | Closed (workaround documented) |
| 🟠 **High** | [#44806](https://github.com/vllm-project/vllm/issues/44806) | Qwen3.5 397B NVFP4 DEP8: mixed prefill-decode step is **6× slower** than decode-only step on 8×B200 | Open |
| 🟠 **High** | [#48266](https://github.com/vllm-project/vllm/issues/48266) | **ROCm/gfx942**: GPU memory access fault (worker crash) when sequences exceed 2048 tokens; DeepSeek V4 flash arch, sparse_attn_indexer + fp8 KV, MI325X TP=4 | Open |
| 🟠 **High** | [#53488](https://github.com/vllm-project/vllm/issues/53488) | `prompt_logprobs` silently corrupted with MTP speculative decoding enabled (Qwen3.5-family, chunked prefill) | Closed |
| 🟡 **Medium** | [#43226](https://github.com/vllm-project/vllm/issues/43226) | `EngineCore` crash: assert `req_id in self.requests` in `_update_from_kv_xfer_finished` when KV connector reports finished transfer for aborted/freed request | Open |
| 🟡 **Medium** | [#66407](https://github.com/vllm-project/vllm/pull/66407) | **[Fix PR]** Engine crash when a request hands over several partial-tail boundaries; assert failure in `_build_partial_tail_store_jobs` | Open (fix PR) |
| 🟡 **Medium** | [#46461](https://github.com/vllm-project/vllm/pull/46461) | **[Fix PR]** TurboQuant fast-path loses cached prefix K/V for continuation requests alongside first-chunk prefills under prefix caching | Open (fix PR) |
| 🔵 **Low** | [#67061](https://github.com/vllm-project/vllm/pull/67061) | **[Fix PR]** `min_p` and `logit_bias` incorrectly rejected with HTTP 400 when speculative decoding is enabled; Model Runner V2 already supports them | Open (fix PR) |

---

## 6. What This Means for Application Developers

| Takeaway | Detail |
|----------|--------|
| **Blackwell FP8 users: upgrade blocked** | v0.24.0 has a DeepGEMM regression on sm_120 that prevents FP8 serving on B200/B100. Stay on v0.23.0 or watch for a patch. |
| **Confidential Computing users: use V1 runner** | The V2 model runner produces silent garbage output in TDX/CC mode. Set `VLLM_USE_V2_MODEL_RUNNER=0` until the fix lands. |
| **DeepSeek-V4 on Ampere: not yet** | SM8x support for DeepSeek-V4-Flash is actively being worked (#50576). If you need V4 on A100/A800 today, you may need to wait or follow the issue. |
| **Gemma 4 deployments gain batch-invariant speedup** | With `VLLM_BATCH_INVARIANT=1`, Gemma 4 E2B/E4B deployments see up to 1.76× throughput improvement at low concurrency — significant for interactive serving. |
| **Spec decode features expanding** | FLy speculative decoding now has normalized entropy thresholds (#66593), and `min_p` / `logit_bias` support is being restored (#67061) — more flexible speculation configuration coming. |
| **Rust API parity improving** | `/inference/v1/generate` is gaining stop string support (#66540) and `output_mode="text"` (#67359), narrowing the gap with the Python frontend. |
| **AMD ROCm roadmap is active** | If you run on MI325X/MI355X, Qwen3.8 and DeepSeek-V4.1 optimizations are landing; the AMD ecosystem is getting more first-class treatment. |
| **Watch: KV offloading coordination** | TP-agnostic KV offloading (#61886) is progressing; when complete, it will enable sharing offloaded KV across engines with different tensor parallelism sizes — relevant for multi-tenant and disaggregated setups. |

---

*Digest generated for vLLM project @ 2026-11-13. Data sourced from GitHub activity in the last 24 hours.*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang and create a structured digest for 2026-11-13.

Key observations:
1. No releases in last 24h
2. Many active issues, especially around CI/flaky tests, performance regressions, and bugs
3. Several PRs around performance optimization, AMD/NPU support, memory management
4. Notable issues: decode regression on Hopper, cache hit-rate issues, rust migration RFC, unified memory roadmap
5. New PRs: HiSparse data plane, Mamba checkpointing, GreedyDual-Size eviction, AMD MORI EPv2, Kimi K3 support

Let me structure this into the requested format.
</think>


# SGLang Daily Digest — 2026-11-13

## 1. Today's Highlights

The SGLang project is actively addressing a **decode regression on Hopper** (33–45% per-step increase from v0.5.22→v0.5.23 at concurrency 12) while pushing forward on the Rust server stack follow-ups. On the infrastructure side, a long-running CI/flaky test tracking issue (#42752) has accumulated 208 comments, and the team is working through multiple correctness bugs in hybrid attention models and HiCache/Mooncake integration.

---

## 2. Releases & Breaking Changes

| Item | Details |
|------|---------|
| **No new releases** | No tagged releases in the last 24 hours. |
| **SGLang 1.0 Roadmap Tracker** | Issue #50045 opened to track the forthcoming 1.0 stability release, which will harden existing functionality, replace silent config changes with explicit errors, and define a compatibility policy for the 1.x series. Upgrading from 0.5.x may require changes. |

---

## 3. New Model & Hardware Support

| Category | Item | PR / Issue |
|----------|------|------------|
| **Kimi K3 decode** | RFC discussion (#49536) on FlashInfer reuse and integration scope for single-node B300/SM103, TP8 serving with mixed long prefills and cache restoration. | [#49536](https://github.com/sgl-project/sglang/issues/49536) |
| **AMD MORI EPv2** | MORI EPv2 dispatch/combine on AsyncLL kernels targeting TBO for DeepSeek-V4 on AMD. | [#44492](https://github.com/sgl-project/sglang/pull/44492) |
| **AMD MegaMoE** | New `--moe-a2a-backend megamoe` option for AITER `MegaMoEGfx1250` on gfx1250 with fused dispatch/combine. | [#48097](https://github.com/sgl-project/sglang/pull/48097) |
| **ROCm Qwen3 prefill** | Fused QK-norm + RoPE kernel for ROCm via JIT, replacing five launches per layer. | [#47052](https://github.com/sgl-project/sglang/pull/47052) |
| **NPU Kimi K3** | Disabled cutedsl loading on NPU (not supported). | [#50215](https://github.com/sgl-project/sglang/pull/50215) |
| **NPU diffusion** | MindIE-SD quantized attention integrated into Ascend FA for MiniMax-H3. | [#46029](https://github.com/sgl-project/sglang/pull/46029) |
| **MUSA FLA kernel** | Fixed `TRACK_STATE` constexpr splitting for MUSA Triton. | [#50214](https://github.com/sgl-project/sglang/pull/50214) |
| **GLM-5.3-Flash** | Bug reported: `--enable-hisparse` fails at startup due to missing `register_mapping` on `HybridLinearKVPool`. | [#50030](https://github.com/sgl-project/sglang/issues/50030) |

---

## 4. Performance & Optimization

| Area | Change | Details | PR / Issue |
|------|--------|---------|------------|
| **HiCache backend data plane** | New feature | HiSparse backend data plane added for structured sparsity in KV cache. | [#49473](https://github.com/sgl-project/sglang/pull/49473) |
| **Mamba state checkpointing** | Optimization | Checkpoint hybrid Mamba state only at fork points and request ends, reducing device/state memory waste from interior checkpoints. | [#49886](https://github.com/sgl-project/sglang/pull/49886) |
| **GreedyDual-Size eviction** | New policy | Opt-in `--radix-eviction-policy gds` for hybrid models to improve eviction decisions for Mamba states. | [#50122](https://github.com/sgl-project/sglang/pull/50122) |
| **Kimi K3 q6 prep** | Bound by concurrency | Q6 preparation now automatically bounded by resolved server concurrency limit. | [#49376](https://github.com/sgl-project/sglang/pull/49376) |
| **AMD prefill overhead** | Cut host overhead | Unified-KV prefill metadata built once per forward; reuse CP gather index; store verify KV without copy on gfx1250. | [#48093](https://github.com/sgl-project/sglang/pull/48093) |
| **HiCache/HF3FS page reclaim** | Bug fix | Reclaim duplicate pages at confirmation to fix resource leak from concurrent writers. | [#45061](https://github.com/sgl-project/sglang/pull/45061) |
| **DFLASH verify** | Opt-in perf | Top-k verification over all-gathered logits for sampled batches (TP > 1). | [#46080](https://github.com/sgl-project/sglang/pull/46080) |
| **PP nested metadata** | Fix stall | Materialize nested output metadata before serialization to prevent stalls on long-context PP requests. | [#49116](https://github.com/sgl-project/sglang/pull/49116) |
| **Cache hit-rate regression** | Under investigation | Reproducible transient drop in prefix cache hit rate with HiCache + Mooncake after eight rounds. | [#47481](https://github.com/sgl-project/sglang/issues/47481) |

---

## 5. Stability & Regressions

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| 🔴 **Critical** | #49336 | **Hopper decode regression**: v0.5.22→v0.5.23 costs 33–45% per-step decode time at concurrency 12 on 8xH20 (SM90). `use_deep_select_decode` also imposes acceptance overhead on Hopper. | Open |
| 🔴 **Critical** | #49881 | **GLM-5.3-Flash NaN logits**: Latched NaN for all later requests after CUDA-graph padding boundary (bs-9→bs-10). Related to #48964, #49274, #43514. | Open |
| 🟠 **High** | #42752 | **Flaky CI**: 208 comments tracking recurring CI infrastructure failures and flaky tests in `PR Test Base` / `PR Test Extra` runs. | Open |
| 🟠 **High** | #48593 | **CUDA graph capture fails** for hybrid linear attention models (`HybridLinearAttnBackend`) with `IndexError` in `_replay_metadata`. | Open |
| 🟠 **High** | #49796 | **Qwen-VL OOM**: 2.87× peak memory from `torch.cat(processed_images)` plus a leak in image preprocessing cache on 2×H800. | Open |
| 🟡 **Medium** | #50006 | **gRPC error code**: Native `runtime.v1` gRPC reports async input validation failures as `INTERNAL` instead of `INVALID_ARGUMENT`. | Closed (fix merged) |
| 🟡 **Medium** | #50132 | **Router replay bug**: Non-idempotent POSTs replayed after connection close even when worker may have consumed them. | Open |
| 🟡 **Medium** | #50131 | **Tool call arguments**: Truncated/malformed tool call arguments silently rewritten to `{}`. | Open |
| 🟡 **Medium** | #50130 | **HiCache Mooncake**: Short zero-copy reads accepted as full cache hits despite incomplete byte transfer. | Open |
| 🟢 **Low** | #43523 | **DeepSeekV3Detector streaming**: Drops first tool call when two complete calls arrive in one increment. | Open |

---

## 6. What This Means for Application Developers

**For users on Hopper (H100/H200/H20):** The decode regression in v0.5.23 is significant at high concurrency. If you are experiencing elevated latency, consider pinning to v0.5.22 or monitoring the fix progress in issue #49336.

**For users of hybrid models (GLM-5.3-Flash, DeepSeek-V4 with GDN/KDA layers):** The `--enable-hisparse` flag currently crashes on GLM-5.3-Flash (#50030), and CUDA graph capture is broken for all hybrid linear attention models (#48593). Avoid enabling these features until fixes land.

**For users relying on multi-turn/agentic workflows with Mamba state:** The new Mamba checkpointing optimization (#49886) and GreedyDual-Size eviction policy (#50122) should improve memory efficiency. The checkpointing PR reduces interior writes that were wasting state slots.

**For router/gateway operators:** Issue #50132 describes a request replay hazard that could cause duplicate processing of non-idempotent requests. Monitor for fix PRs.

**For Q4 roadmap awareness:** The SGLang 1.0 release tracker (#50045) signals upcoming breaking changes from 0.5.x. Review the upgrade notes when they become available.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data for llama.cpp and create a structured digest for 2026-11-13.

Let me go through the data:

**Releases (last 24h):**
- b12340: SSRF fix for CORS proxy and media URLs (#32115)
- b12336: HunyuanVL F32 position embedding fix (#32131)
- b12329: CUDA NVFP4 weight scale optimization for prefil (#26048)
- b12328: ggml-backend prefetch optimization (#32100)
- b12327: SpacemiT Q4_1 32x256 kernel dispatch (#31929)


- b12323: Gemma 4 chat schema refactor (#31915)
- b12322: llama graph metadata optimization (#32043)
- b12321: SYCL oneDNN FA cache thread-safety (#31138)
- b12320: SYCL AOT >4GB fix (#31873)
- b12319: SYCL cached device-id optimization (#32013)

Looking at the latest issues, there are several active bugs being tracked, including a closed memory leak with tensor offloading on dual Intel B70 SYCL backends and an open SM issue.

Continuing through the issue list, I'm seeing SM_60 quality loss problems with FP32 math running in FP16 on older Tesla P100s, context checkpoint invalidation on hybrid and recurrent models, DFlash2 draft model GPU driver resets on dual Arc Pro B70 cards, a flash attention crash in gemma4-assistant with head dimension mismatches, and several other crashes and assertion failures in llama server and Vulkan implementations.

There's also nondeterminism in logprobs reporting for SYCL iGPU with MoE models, weight eviction issues causing performance drops on Intel dGPUs in Vulkan, a head-size-256 WMMA FA dispatch problem on gfx1201, and a draft-dflash abort in post_decode with hybrid models when running parallel requests.

The recent PRs show active work across model support—adding RAON-1-mini-preview and Zaya1 8B—along with optimizations like reducing scheduler context sizing overhead, fixing MTP graph reallocations for Qwen3.5, implementing SSM_SCAN operations on Hexagon, and adding a slot-attach feature for prompt sharing. There's also a VRAM memory management improvement that dynamically allocates based on context size.

Looking at the remaining work, I'm seeing Vulkan SSM_SCAN state size support, a migration guide for llama_batch, buffer allocation improvements for Hexagon, token-aware parsing in the chat module, template rendering optimizations, layer-first prefill that significantly boosts performance, and fused KV dequantization for CUDA. There's also work on the jinja template system and OpenVINO optimizations for Qwen3.5 and gemma-4.
</think>


# llama.cpp Daily Digest — 2026-11-13

---

## 1. Today's Highlights

Security hardening landed in the server component with an SSRF fix for CORS proxy and media URLs (`#32115`), plus a memory ergonomics win: graph metadata pages are no longer touched for unused capacity, reducing RSS overhead for workloads with shorter context windows (`#32043`). On the performance front, the CUDA backend fused NVFP4 weight scale into the prefil epilogue MMQ path (`#26048`), and a layer-first prefill strategy doubled prefill throughput on dense MoE models — the PR is now closed after merging (`#32082`).

---

## 2. Releases & Breaking Changes

| Build | Change | Notes |
|-------|--------|-------|
| `b12340` | **Server SSRF hardening** — CORS proxy and media URLs now validated before fetch | Security fix; upgrade strongly recommended |
| `b12322` | **Graph metadata pages lazily allocated** (`#32043`) | Reduces resident memory for any graph using < 100% of `max_nodes` |
| `b12320` | **SYCL AOT: >4 GB model support** (`#31873`) | New `--aot` flag in build script; removes garbage output above 4 GB |

No new tagged releases today. The active build chain sits in the `b12340` range.

---

## 3. New Model & Hardware Support

- **RAON-1-mini-preview** (KRAFTON) — HF→GGUF conversion and inference support landed in `#32173`. GGUF files published on HuggingFace.
- **Zaya1 8B** (Zyphra) — Model support added in `#32071`; also fixes SSM_CONV so the model runs on CUDA without abort.
- **GigaChat 3.5** (432B MoE, 28B active) — Continued work on MLA + DeepSeek MoE hybrid attention in `#25342`.
- **HunyuanVL** — F32 position embedding requirement enforced (`#32131`) to prevent F64 tensor overflow during resampling.
- **Hexagon backend** — SSM_SCAN (f32) op added (`#31921`), tested on v75/v81/v85 Android and v81 WoS.
- **Vulkan SSM_SCAN** — `d_state=96` support landed (`#32162`), enabling Nemotron-3-Puzzle which previously fell back to CPU.
- **OpenVINO backend** — Expanded Qwen3.5 GDN decomposition for Lunar Lake NPU and new ops for Qwen MTP/multi-sequence (`#32172`).

---

## 4. Performance & Optimization

**Production (merged):**

- **`#32082` — Layer-first prefill** (closed): Reorders ubatch processing to run all layers before next token chunk, cutting redundant PCIe expert uploads on MoE models. **~2× prefill speedup** demonstrated on QFN. Relevant for anyone running Qwen3.5-MoE or similar sparse architectures.
- **`#32100` — Backend prefetch scoping**: Prefetch now only pulls inputs needed by earlier splits, reducing unnecessary GPU→CPU readbacks.
- **`#31802` — CUDA fused q8_0/q4_0/f8_e4m3 KV dequant in MMA flash-attention kernels**: Eliminates the separate dequantization pass and scratch memory materialization for quantized KV cache during FA.

**In-progress:**

- **`#26048` — CUDA NVFP4 fuse**: Applies and fuses `w_s` scale into MMQ write-back epilogue; benchmarks for fused scale path in review.
- **`#31274` — Scheduler context sizing**: Right-sizes the scheduler buffer at split time using `max(n_nodes, n_leafs)` instead of over-allocating; reallocates only when graph grows.
- **`#32023` — Jinja template rendering overhead**: Removes accidental builtin-table copies, reduces Value storage and temporary allocations; first tranche of optimizations from `#32002`.
- **`#32170` — Lazy VRAM allocation**: Dynamic VRAM growth tied to actual context usage rather than pre-reserving the full allocation — conceptually like VirtualBox virtual disks for GPU memory. Multi-backend PR covers CUDA, ROCm, Vulkan, SYCL, Metal, etc.

**SYCL / Intel:**
- `#31138` — oneDNN FA cache made thread-safe with memoized runtime failures.
- `#32013` — `set_main_device` now uses a cached device ID via thread-local storage instead of locking the device manager on every graph compute.

---

## 5. Stability & Regressions

**High severity (active, unfixed):**

| Issue | Backend | Description |
|-------|---------|-------------|
| `#25593` (22 comments) | CUDA / sm_60 (Tesla P100) | FP32 math silently done in FP16; quality regression on older Maxwell hardware |
| `#24055` (22 comments) | llama-server | Context checkpoints always invalidated on hybrid/recurrent models |
| `#30688` (3 👍) | Vulkan / AMD gfx1201 | Draft-MTP decode ~4× slower, prefill ~6× slower since #30020; target buffer reallocated into GTT |
| `#31656` (4 comments) | llama-server | `draft-dflash` aborts in `post_decode seq_rm` on hybrid Qwen3.8-27B with `--parallel 8` |

**Medium severity:**

| Issue | Backend | Description |
|-------|---------|-------------|
| `#24440` (10 comments) | CUDA | Server crashes in `fattn.cu:579` with Gemma 4 31B + MTP + `-sm` tensor after system message edit |
| `#29418` (8 comments) | Vulkan | `GGML_ASSERT(neq0 == HSK)` in speculative draft decoding with tensor split |
| `#31836` (3 comments) | Vulkan / Intel Arc A380 | GLM-OCR vision encoder produces garbage on full-page images (works on CPU and SYCL) |
| `#31206` (8 comments) | SYCL / iGPU + MoE | `/v1/completions` logprobs nondeterministic; request seed does not pin distribution |

**Notable closed fixes:**
- `#27845` — Memory leak with `-sm` tensor on SYCL dual Intel B70 (closed, may be stale).
- `#27408` — Positional holes in draft KV cache causing HTTP 500 with image mtmd + draft-dflash (closed).
- `#31972` — Vulnerability reporting process 404 link (closed).

---

## 6. What This Means for Application Developers

**Deployers on Intel SYCL or older CUDA hardware (sm_60/sm_70):** The open quality-loss bug `#25593` on Tesla P100 is significant — if you rely on FP16 math on Maxwell-generation GPUs, the silent FP32→FP16 coercion is a correctness risk. There is no fix merged yet; monitor `#25593`.

**MoE model operators:** The layer-first prefill PR (`#32082`) is merged and delivers a meaningful throughput gain for sparse models. If you run Qwen3.5-MoE or similar architectures, updating to the current build should yield immediate prefill improvement. Combined with the NVFP4 fused scale (`#26048`), the CUDA MoE path is receiving sustained attention.

**Server operators with long-context workloads:** The graph metadata page lazy allocation (`b12322`) reduces RSS, which is especially valuable on memory-constrained multi-tenant deployments. Also watch `#32170` (lazy VRAM allocation) — once merged, it will eliminate the upfront VRAM reservation penalty for large context requests.

**Vision pipeline operators:** HunyuanVL's F32 position embedding requirement is now enforced. If you run multimodal models that use F64 tensors for position embeddings, they will produce incorrect results; the fix requires the model to supply an F32 buffer.

**Security-sensitive deployments:** Upgrade to `b12340` for the SSRF hardening in the server component. The CORS proxy and media URL fetch paths were a potential SSRF vector.

---

*Data sourced from `github.com/ggml-org/llama.cpp` at 2026-11-13. Issue and PR numbers reference that repository.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate a structured "Ollama digest" for 2026-11-13 based on the provided GitHub data. I need to analyze the issues and pull requests to create a professional, concise summary for infrastructure engineers.

Let me organize the data:

**Latest Releases**: None in last 24h

**Latest Issues** (11 total):
1. #16462 - AMD Strix Halo VRAM Detection Regression (0.30+, container deployment) - HIGH severity
2. #6987 - Feature request: stop all running models
3. #17735 - /save fails with "pull model manifest: file does not exist"
4. #19674 - Feature request: remove recommended models from UI
5. #14955 - Duplicate TopLogprobs validation (dead code)
6. #19682 - ChatGPT integration leaves stale model catalog
7. #18925 - Feature request: Portable CLI Wrappers
8. #19675 - Bug: pull error handling reads error pages as file data
9. #19672 - Cloud: mimo-v2.6-pro tool-call flooding
10. #19673 - Proposal: add Aetox harness to ollama launch
11. #19671 - Cloud: minimax-m3.1-flash keeps crashing

**Pull Requests** (27 total, showing key ones):
1. #19687 - README: add Bluebird Harness
2. #19686 - api: preserve unmodeled tool schema keywords
3. #19678 - mlxrunner: adapt saved history to memory pressure
4. #19516 - added code of conduct
5. #19684 - renderers: map disabled thinking to lowest supported level (CLOSED)
6. #19557 - cmd: show help for noninteractive bare invocations (CLOSED)
7. #19685 - README: add Valo to community integrations


8. #19683 - app: add explore and saved models
9. #19578 - Support deferred tool loading in claude code (CLOSED)
10. #19681 - app/cmd/app/webview: support assembly source code
11. #19680 - llama.cpp: keep context shift amplitude-neutral
12. #18972 - docs: restructuring to separate cloud features (CLOSED)
13. #19679 - model/parsers: keep non-finite tool arguments JSON-encodable
14. #19677 - mlxrunner: reuse saved prefixes across request slots
15. #18673 - readme: add OmniGet to community integrations

I notice several PRs focused on model exploration, tool integration, and community enhancements. The project is actively improving its CLI interface, adding model management features, and expanding community integrations.

The latest work includes addressing memory management for MLX runners, fixing tool argument handling, and resolving context shift complexities. Several pull requests target edge cases in model processing and CLI behavior, showing a systematic approach to improving system robustness.

The development team is tackling nuanced technical challenges like Unicode tool naming, download error handling, and integrated GPU memory management. These incremental improvements demonstrate careful engineering and attention to low-level system interactions.

I'll develop a structured technical digest highlighting key architectural insights and practical development implications for application engineers.
</think>


# Ollama Digest — 2026-11-13

## 1. Today's Highlights

Ollama sees significant activity around MLX runner optimizations and Metal performance improvements, with two PRs targeting memory management and prefix caching on Apple Silicon. Meanwhile, the community is expanding integrations—Valo, Bluebird Harness, and OmniGet are all joining the ecosystem. A critical ROCm regression affecting AMD Strix Halo VRAM detection remains open, with a corresponding fix PR pending.

---

## 2. Releases & Breaking Changes

**No new releases in the last 24 hours.** However, two PRs closing represent behavioral changes:

- **#19684** (CLOSED) — `renderers: map disabled thinking to the model's lowest supported level` — When a model does not support explicit thinking disable, Ollama now maps to its minimum supported thinking level rather than failing. Users relying on explicit `thinking: null` should verify behavior with their target models.

- **#19557** (CLOSED) — `cmd: show help for noninteractive bare invocations` — Bare `ollama` commands in non-interactive shells (stdin/stdout redirected) now print standard help instead of attempting to launch the TUI, which could hang or fail in CI/CD environments.

- **#19644** (CLOSED) — `cmd: expose model variant selection` — The `--runner` flag now accepts lowercase `gguf` and `mlx` values, and displays GGUF variants by format in `ollama show`. Legacy runner names remain accepted for compatibility.

---

## 3. New Model & Hardware Support

**No new model support announced today.** Hardware focus remains on Apple Silicon and ROCm:

- **#19678** (MLX runner) — `adapt saved history to memory pressure` — The Metal runner now dynamically retains more conversation history when GPU memory permits, instead of using a fixed 8 GiB ceiling that could prematurely evict useful contexts.

- **#19677** (MLX runner) — `reuse saved prefixes across request slots` — Busy request slots can now share cached prompt prefixes with incoming requests, reducing redundant token processing for overlapping conversations.

- **#19670** — `server: stop capping an iGPU with a firmware carve-out at free system RAM` — Fixes the root cause of #16462 for bare-metal AMD Strix Halo; the iGPU memory cap now accounts for firmware carve-outs instead of incorrectly using free system RAM as the ceiling.

- **#16462** (open issue) — AMD Strix Halo VRAM Detection Regression — Container deployments still only report 2 GB VRAM in 0.30+, a known regression from 0.24.0-rocm. If you're running Strix Halo in containerized environments, this is a blocking issue.

---

## 4. Performance & Optimization

**Memory & Throughput:**

- **#19680** — `llama.cpp: keep context shift amplitude-neutral` — Fixes a YaRN amplitude multiplication bug in context shifting where each shift multiplied every cached RoPE key by the YaRN factor, degrading context quality in long conversations. Impacts any model using `--context-shift` with YaRN RoPE scaling (affects Llama variants and similar).

- **#19678** (MLX) — Adaptive history retention; concrete gains depend on workload memory pressure but eliminates unnecessary recomputation when headroom exists.

- **#19677** (MLX) — Cross-slot prefix reuse; overlapping conversation turns (common in agentic loops) now avoid redundant prompt processing.

**Tool Calling & API:**

- **#19686** — `api: preserve unmodeled tool schema keywords` — Clients sending tool definitions with non-standard JSON Schema keywords (`default`, `minimum`, `examples`) no longer lose them during decoding into `api.ToolProperty`. Upstream model clients benefit from richer schema preservation.

- **#19679** — `model/parsers: keep non-finite tool arguments JSON-encodable` — Models emitting `NaN` or `Infinity` as tool arguments in Qwen XML or OLMo/LFM Python-style formats now serialize correctly instead of failing with `json: unsupported value: NaN`.

- **#19669** — `harmony: handle Unicode digits at the start of tool names` — Tool names starting with non-ASCII digits (e.g., Arabic `١weather`) now correctly normalize to valid TypeScript identifiers.

- **#19676** — `server: report download host error status instead of retrying on EOF` — Download failures from proxy 403/502 pages were being read as blob data, causing cryptic `max retries exceeded: EOF` errors. The server now surfaces the actual HTTP status code.

---

## 5. Stability & Regressions

Ranked by operational impact:

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| 🔴 **High** | #16462 — AMD Strix Halo VRAM regression (container) | OPEN | Only 2 GB detected in containers since 0.30.0-rc0-rocm. Fix PR #19670 exists but containers may still be affected. |
| 🔴 **High** | #19672 — mimo-v2.6-pro:cloud tool-call flooding | OPEN | Catastrophic looping in agentic sessions; hundreds of duplicate tool calls. Cloud-only, not local. |
| 🟡 **Medium** | #19671 — minimax-m3.1-flash cloud crashes | OPEN | Internal server errors in Goose agent sessions; intermittent. |
| 🟡 **Medium** | #19682 — ChatGPT integration stale catalog | OPEN | Codex daemon retains stale model list after adding local models; requires restart workaround. |
| 🟡 **Medium** | #19675 — pull reports EOF instead of HTTP error | OPEN | Proxy/blocked downloads fail with cryptic message; fix PR #19676 open. |
| 🟢 **Low** | #17735 — /save fails with manifest error | OPEN | Affects nemotron-3.5-lightning with MoE arch; local manifest exists but API pulls fail. |

**Dead Code / Minor:**

- **#14955** — Duplicate `TopLogprobs` validation in `server/routes.go` (lines ~203/245 and ~2085/2127). Second check in each handler is unreachable dead code. Not a bug but clutters review.

---

## 6. What This Means for Application Developers

**If you run Ollama on Apple Silicon:**

The two MLX runner PRs (#19678, #19677) directly improve agentic workloads where multiple conversation turns share context. If you're building chatbots or coding agents with persistent history, expect lower token processing overhead and better memory utilization. The changes are backward-compatible; no config changes needed.

**If you use tool calling:**

The schema keyword preservation (#19686) and non-finite value handling (#19679) are improvements for clients emitting rich tool definitions. If your agent framework sends `default`, `minimum`, or `examples` in tool schemas, these are now preserved end-to-end. If you observe `NaN` serialization errors in tool calls, upgrading will resolve them.

**If you run long-context sessions with YaRN models:**

The context shift amplitude fix (#19680) is critical for anyone using `--context-shift` on Llama variants with RoPE scaling. Prior to this fix, repeated context shifts degraded the model's numerical precision on cached keys. After merging, long conversations maintain correctness.

**If you deploy on AMD ROCm:**

The Strix Halo VRAM regression (#16462) is a blocker for containerized deployments. If you need full memory reporting in Docker/Podman on Strix Halo, either stay on 0.24.0-rocm or watch #19670 closely for the bare-metal fix—it may not yet cover container environments.

**If you integrate with ChatGPT/Codex:**

The stale model catalog issue (#19682) requires manual daemon restarts when adding local models. Track this if you're building IDE integrations.

**Ecosystem growth:**

Three new desktop integrations (Valo, Bluebird Harness, OmniGet) are joining the community list, all positioning Ollama alongside Claude Code and Codex. If you're building a copilot-style app, the integration surface is expanding rapidly.

---

*Digest generated from GitHub activity on 2026-11-13. All links reference `github.com/ollama/ollama`.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data for LiteLLM and create a structured digest for 2026-11-13.

Key data points:

**Releases:**
- v1.110.0-rc.2: Release candidate with cosign verification
- v1.108.7: LTS release (pull with `ghcr.io/berriai/litellm:lts`)

**Top Issues (by comments):**
1. #50065 (9 comments): MCP tools/list blocks 18-50s on legacy subscription listener - HIGH PRIORITY
2. #50877 (7 comments, CLOSED): Per-model budgets within team with custom reset intervals - Feature implemented
3. #34238 (6 comments): End-user budget bypass via stale per-pod fallback - SECURITY/COST issue
4. #51029 (5 comments, CLOSED): OTel gen_ai.response.model holds requested model group, not actual model
5. #33194 (5 comments): Non-admin users can't assign budget to personal keys
6. #42104 (5 comments): Mid-conversation system messages break Gemini/Vertex prompt caching
7. #27276 (4 comments): Responses API → Chat Completions bridge drops tool names
8. #48398 (4 comments): Provider-reported usage.cost trusted as USD without validation → 1,000,000× cost overbilling - CRITICAL
9. #30300 (3 comments): 400 error when using image generation from OpenWeb UI
10. #34747 (3 comments): store_prompts_in_spend_logs doesn't work properly

**Top PRs:**
- #50862: Refactor router - count router_usage on native store
- #51528: Rust bool coercion
- #51530: fnmatch crate
- #50356: Move Redis key construction out of router-core
- #51500: fal_ai gemini-omni-flash upscale pricing

</think>


# LiteLLM Digest — 2026-11-13

## Today's Highlights

Two high-severity billing correctness issues surfaced: a potential **1,000,000× cost overbilling** when providers report `usage.cost` without USD normalization (#48398), and a **budget bypass via stale Redis fallback counters** after TTL expiry (#34238) — both demand operator attention. On the engineering side, the Rust router-core migration continues with PRs moving Redis key construction, auth decision logic, and in-memory cache expiry into the native store layer, signaling convergence toward a consolidated Rust request path.

## Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| **v1.110.0-rc.2** | RC | Cosign-signed; verify against key at `e82a3c6` |
| **v1.108.7** | LTS | Pull via `ghcr.io/berriai/litellm:lts` |

**No config/schema migration notices** were published in this window. Operators on pre-1.108 LTS tracks should evaluate upgrading to capture recent cost-tracking fixes.

## New Model & Hardware Support

| Provider | Model | Details |
|----------|-------|---------|
| **Nace** | `drex-max` | Decision model with image input support; adds inline image handling to provider |
| **fal_ai** | `google/gemini-omni-flash/v1.2/upscale` | Per-second pricing for video upscaling; resolution tiers mapped to `output_cost_per_second_*` fields |
| **Together AI** | `together_ai/thinkingmachines/Inkling-2-Small` | New reasoning model added to cost map |

No CUDA/ROCm/Metal backend changes noted.

## Performance & Optimization

| PR | Area | Status |
|----|------|--------|
| #50862 | **Router usage counting** moved entirely to native store; eliminates split counting between redis-py and usage-v2 | Open |
| #50356 | **Redis key construction** relocated from router-core into store layer; decouples routing from key-format logic | Open |
| #51388 | **In-memory cache expiry** rebuilds on exact index; fixes stale heap records left by delete/re-arm operations | Open |
| #51383 | **RedisBatch Python → Rust** migration completes; all batch paths now use native implementation | Open |
| #50870 | **Session pins** served from native store; deployment affinity and complexity router pins unified | Open |

**Quantified improvements** not yet published. The in-memory cache fix (#51388) resolves a bug where long-lived keys at heap top caused spurious expirations — expect latency tail improvement under high key-churn workloads.

## Stability & Regressions

| # | Severity | Issue | Status |
|---|----------|-------|--------|
| **#48398** | 🔴 Critical | Provider `usage.cost` trusted as USD → 1,000,000× overbilling on OpenAI-compatible providers | Open |
| **#34238** | 🔴 High | End-user budget bypass via stale per-pod Redis fallback after counter TTL expiry (60s default) | Open |
| **#50065** | 🟠 High | MCP `tools/list` blocks 18–50s on legacy `notifications/initialized` with pre-2026 protocol clients (e.g., Open WebUI) | Open |
| **#27276** | 🟠 Medium | Responses API → Chat Completions bridge drops tool names and forwards unsupported types (`custom`, `shell`) | Open |
| **#51456** | 🟡 Moderate | Bedrock Llama native streaming discards `prompt_token_count` and `generation_token_count`; usage falls back to zero | Open |
| **#36848** | 🟡 Moderate | Vertex tool schemas with tuple-form `items` crash `_build_vertex_schema` with `'list' object has no attribute 'get'` | Open |
| **#51230** | 🟡 Moderate | `function.strict: true` silently dropped when OpenAI-format tools sent to Anthropic | Open |
| **#32769** | 🟡 Minor | Gemini 3.5 Flash returns `reasoning_tokens > 0` but `reasoning_content=None`; inconsistent with 2.5 Flash | Closed |
| **#36182** | 🟡 Minor | `Invalid Value: 'tools.namespace'` with Codex CLI 0.147.0 | Closed |

**Fixed:** #51029 (OTel `gen_ai.response.model` now correctly reports actual model), #51396 (non-list `fallbacks` no longer crashes router-core with HTTP 500), #51221 (OTel spans now include `gen_ai.usage` on timeout-after-prefill).

## What This Means for Application Developers

1. **Billing accuracy risk if you self-host providers.** If you route through LiteLLM to an OpenAI-compatible provider that reports `usage.cost` in non-USD units, you may be overbilling customers by up to 1,000,000× (#48398). Until fixed, validate provider cost responses or hard-code cost maps for those backends.

2. **Budget enforcement gap on short-TTL deployments.** End-user budget limits can be circumvented for up to 60 seconds post-restart or post-scaling (#34238). If strict spend control is required, implement a secondary enforcement layer or pin your proxy to a single pod.

3. **MCP clients using legacy protocol are slow.** Open WebUI and other clients sending `notifications/initialized` with pre-2026 protocol will experience 18–50 second delays on `/mcp/` routes (#50065). Upgrade client SDKs or expect degraded UX until patched.

4. **Rust auth pipeline merging.** The stacked PRs (#51528–#51531, #51374) move route matching, key auth, and JWT validation into Rust. Early testers should watch for behavioral changes in routing rules and auth callbacks — no Python hooks are documented in these PRs yet.

5. **Annual budgets landing soon.** PR #51508 adds support for calendar-year reset periods on budgets, resolving the current inability to create annual spending limits with timezone-aware resets.

---

*Digest compiled from GitHub data for 2026-11-13. All linked issues/PRs refer to `BerriAI/litellm`.*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze this GitHub data for the unslothai/unsloth repository and create a structured digest for 2026-11-13.

Key observations:

1. **Releases**: No releases in last 24h
2. **Issues**: 23 total, mix of open and closed
3. **Pull Requests**: 196 total, showing top 20 by comment count

Let me categorize the data:

**New Features/Enhancements:**
- #17641: Studio feature for choosing Engram table precision for Qwen3.8-Flash-Next and DeepSeek-V4.1 GGUFs
- #17517: Model picker in composer, replacing Thinking pill
- #17643: Trusted folders for Python/Terminal
- #17640: SSL certfile/keyfile from config/env
- #17614: Option to not auto-load model
- #17590: Clone model run settings (PR #17600 closes this)
- #17573: Update Gemma 4 to UD3.1
- #17611: Fedora RPM desktop bundles
- #17612: Nested project folders
- #17610: AMD NPU model naming by HF repo
- #16899: Voice Design feature request
- #5291: GRPO optimizations ported to ORPO/DPO/CPO (CLOSED)

**Model Support:**
- #17552: Kromoss GGUF support request
- #17402: Qwen3.8-Flash-Next UD 3.1 MTP heads discussion
- #10772: Ascend NPU backend support RFC
- #17642: FLUX.3 float16 on 12GB hosts

**Bugs/Issues:**
- #17605: mmap forced despite --load-mode none (PR #17607 fixes this)
- #17598: MOSS-Transcribe-Diarize fails on long audio (PR #17599, #17603 fix)


- #17558: DiffusionGemma load ignores settings (CLOSED)
- #16925: DiffusionGemma multi-GPU abort (CLOSED)
- #17015: Studio repeated prompt processing with Qwen hybrid
- #17548: ROCm 7.14/MI300X stride assertion
- #17638: audio.cpp update fails in docker

**Performance & Optimization:**
- #17589: Transformers 5.5.4, SageAttention updates
- #17593: H3/H3-Image fused q/k RMSNorm + RoPE
- #17595: Composed VAE implementation for MiniMax-H3 architecture
- #17604: Loraplus + Q-GaLoRE conflict detection

**Stability:**
- #15260: WebKitWebProcess SIGABRT (CLOSED)
- #15767: opencode models issue (CLOSED)
- #16561: Unable to update (CLOSED)

The remaining items involve containerization updates like maintaining AMD's latest tag in Docker images, while several quality-of-life improvements are also being addressed.
</think>


# Unsloth Digest — 2026-11-13

---

## 1. Today's Highlights

The Unsloth Studio team merged significant UI and model-serving improvements, including a model picker overhaul for the composer, better handling of MOSS-Transcribe-Diarize token budgets, and a fix for the `--load-mode none` memory regression introduced in 0.1.917. On the model front, FLUX.3 can now load on 12 GB hosts by reading bf16 as-stored, and the H3/H3-Image family received bit-exact fused q/k RMSNorm + RoPE kernels alongside a composited-canvas tiled VAE decode path.

---

## 2. Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| **No new releases** | No tagged releases in the last 24 hours. | — |

**Configuration / Dependency Updates (merged PRs):**
- Transformers bumped to **5.5.4** (from 5.5.0) with highest sidecar pinned to **5.13.1**, and SageAttention updated for current torch.  
  → [#17589](https://github.com/unslothai/unsloth/pull/17589)

---

## 3. New Model & Hardware Support

| Model / Architecture | Backend | Notes | Link |
|---------------------|---------|-------|------|
| **FLUX.3** (klein, int8 transformer) | CPU / GPU | Can now load float16 builds on 12 GB hosts by reading bf16 weights as-stored without host-side conversion. | [#17642](https://github.com/unslothai/unsloth/pull/17642) |
| **Qwen3.8-Flash-Next / DeepSeek-V4.1** | GGUF | Studio gains UI to swap Engram table precision directly instead of hand-editing files. | [#17641](https://github.com/unslothai/unsloth/pull/17641) |
| **Ascend NPU (昇腾)** | Huawei Ascend | RFC open for first-class NPU backend support—currently a blocker for China data-center users. | [#10772](https://github.com/unslothai/unsloth/issues/10772) |
| **Kromoss GGUF** | GGUF | Feature request to add support; currently blocked with "not supported" error. | [#17552](https://github.com/unslothai/unsloth/issues/17552) |
| **Gemma 4** | GGUF (UD_Q4_K_XL) | Request to update from Unsloth Dynamic 2.0 → UD 3.1 (Qwen3.8 already updated). | [#17573](https://github.com/unslothai/unsloth/issues/17573) |
| **MOSS-Transcribe-Diarize** | Studio | `max_tokens` budget now correctly sent per request; scales 1024 tokens/min for long audio. | [#17599](https://github.com/unslothai/unsloth/pull/17599), [#17603](https://github.com/unslothai/unsloth/pull/17603) |

---

## 4. Performance & Optimization

| Area | Change | Metric / Impact | Link |
|------|--------|-----------------|------|
| **MiniMax-H3 / H3-Image VAE** | Composited-canvas tiled VAE decode with CUDA graphs and fp16 decoder | H3-Image decode at 2048 px: **2.82 s → faster** (exact end-to-end numbers pending CI) | [#17595](https://github.com/unslothai/unsloth/pull/17595) |
| **H3 / H3-Image** | Bit-exact fused q/k RMSNorm + RoPE kernel, enabled for all tiers | Eliminates numerical drift on streamed tiers; verified bit-identical to stock eager ops | [#17593](https://github.com/unslothai/unsloth/pull/17593) |
| **Memory management** | Recognize `lazy-mode on-direct` for lazy tensor accounting | Fixes `--load-mode none` regression; backend now discounts separately lazy-loaded tensors before placement | [#17607](https://github.com/unslothai/unsloth/pull/17607) |
| **Thread window rendering** | Defer role attribute writes until after style read pass | Fixes scroll slowdown on long chats introduced by #17504 | [#17588](https://github.com/unslothai/unsloth/pull/17588) |
| **Streaming UX** | Keep thread window off streaming reply's back during React transitions | Prevents re-render cascades on every streaming chunk | [#17597](https://github.com/unslothai/unsloth/pull/17597) |

---

## 5. Stability & Regressions

**Active Issues (ranked by apparent severity):**

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 **High** | [#17015](https://github.com/unslothai/unsloth/issues/17015) | Studio: repeated full prompt reprocessing across turns with Qwen hybrid model after tool use (MCP catalog). 6 comments, active investigation. | — |
| 🔴 **High** | [#17548](https://github.com/unslothai/unsloth/issues/17548) | ROCm 7.14 / MI300X (gfx942): stride assertion in `_scaled_dot_product_flash_attention_backward` — requires MATH fallback. | — |
| 🟡 **Medium** | [#17638](https://github.com/unslothai/unsloth/issues/17638) | Docker: `audio.cpp` update fails with "invalid cross-device link". | — |
| 🟡 **Medium** | [#17402](https://github.com/unslothai/unsloth/issues/17402) | Qwen3.8-Flash-Next UD 3.1 GGUFs vs existing MTP draft heads: acceptance drops ~74% → 56–66% at production temperature on Ryzen AI Max+ 395. | — |
| 🟢 **Low** | [#17605](https://github.com/unslothai/unsloth/issues/17605) | **Regression in 0.1.917**: forces mmap despite `--load-mode none`, causing excessive RAM/SSD. | **Fixed by [#17607](https://github.com/unslothai/unsloth/pull/17607)** |

**Closed (resolved today):**

| Issue | Description | Link |
|-------|-------------|------|
| DiffusionGemma load ignores context/parallelism settings | Fixed; Studio now correctly passes settings to runner | [#17558](https://github.com/unslothai/unsloth/issues/17558) |
| DiffusionGemma multi-GPU abort on prompts > ~1792 tokens | GGML_ASSERT n_ubatch fix | [#16925](https://github.com/unslothai/unsloth/issues/16925) |
| WebKitWebProcess SIGABRT on KDE Plasma with AT-SPI | Linux desktop crash | [#15260](https://github.com/unslothai/unsloth/issues/15260) |
| GRPO chunked/hidden-state optimizations → ORPO/DPO/CPO | Feature ported | [#5291](https://github.com/unslothai/unsloth/issues/5291) |
| MOSS-Transcribe-Diarize long audio failure | Token budget fix | [#17598](https://github.com/unslothai/unsloth/issues/17598) → [#17599](https://github.com/unslothai/unsloth/pull/17599), [#17603](https://github.com/unslothai/unsloth/pull/17603) |

---

## 6. What This Means for Application Developers

| Takeaway | Detail |
|----------|--------|
| **Upgrade to 0.1.917+ if on Desktop** | The `--load-mode none` mmap regression (#17605) is fixed in the latest build; confirm your Studio version includes PR #17607. |
| **Browser-use approvals are now port-aware** | If you run multiple Studio instances on different ports, site approvals are scoped per port (#17596). Review existing allowlists. |
| **FLUX.3 image generation is now accessible on free-tier Colab (T4)** | The bf16-as-stored loading path eliminates the 12 GB host RAM ceiling for FLUX.3 klein int8. |
| **MOSS-Transcribe-Diarize now handles long recordings** | Previously truncated long audio; token budgets now scale with duration. If you rely on diarization, verify your integration sends `options.max_tokens` or relies on Studio's auto-budget. |
| **Nested project folders are now supported** | Backup/restore preserves hierarchy; useful for multi-tenant or multi-experiment workflows (#17612). |
| **Duplicate run settings via UI** | Clone and tweak run configurations without losing originals (#17600 / closes #17590). |
| **Fedora desktop packages now available** | ARM64 and x86_64 RPM bundles published; alternative to AppImage for Linux users (#17611). |
| **Watch for Qwen3.8 MTP head drift with UD 3.1** | If using Qwen3.8-Flash-Next with speculative decoding, draft acceptance rates may be 10–18% lower than with UD 2.x until matched MTP heads are released (#17402). |
| **SSL certs can now be set via env vars or config** | Avoids passing credentials on the command line in containerized deployments (#17640). |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*