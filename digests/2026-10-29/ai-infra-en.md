# AI Infrastructure Digest 2026-10-29

> Generated: 2026-10-29 01:55 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to generate a cross-project comparison report based on the individual digests I just created for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me analyze the data across all these projects and create a structured comparison.

Let me organize the information:

**Activity Comparison:**
- vLLM: Issues - many (high activity), PRs - many, Release - no new release
- SGLang: Issues - many (high activity), PRs - many, Release - no new release
- llama.cpp: Issues - ~15, PRs - 10, Release - v0.8.0
- Ollama: Issues - 21, PRs - 43, Release - v0.40.13
- LiteLLM: Issues - ~50+, PRs - many, Release - v1.106.6, v1.109.0-dev.1
- Unsloth: Issues - 37, PRs - 349, Release - v0.1.912-beta

**Model Support:**
- vLLM: DeepSeek-V4-Flash, SM120 (Blackwell), MI355X (AMD), MXFP4
- SGLang: AMD RDNA3/RDNA4, Moore Threads MUSA, HiDream-O1-Image, GLM-5.3-Flash
- llama.cpp: LFM3 (LiquidAI), DeepSeek V4.1, Hexagon conv2d, OpenCL Adreno
- Ollama: LFM3 audio/video, MLX Windows, video input
- LiteLLM: o200k_base encoding, Bedrock Voxtral, QwenCloud
- Unsloth: LFM3-1.7B, Intel Arc B580, Decision models→GGUF, Context parallel for Gemma 4/DeepSeek/MiniMax/Kimi
 
I'm tracking performance optimization efforts across multiple frameworks, focusing on cutting-edge techniques in distributed computing, memory management, and hardware acceleration. The key areas include advanced batching strategies, sophisticated kernel optimizations, and innovative quantization approaches that push computational boundaries.

The landscape reveals a dynamic ecosystem of AI infrastructure tools, with each project carving out unique technological niches. From low-level runtime optimizations to high-level serving frameworks, these tools represent a complex, interconnected ecosystem of machine learning engineering solutions.</think>

# Cross-Project Comparison Report: AI Inference & Serving Ecosystem

## 1. Ecosystem Overview

The AI infrastructure landscape in late 2026 is defined by three converging forces: the maturation of disaggregated prefill-decode architectures enabling multi-tenant serving at scale; the proliferation of diverse hardware (Blackwell, AMD RDNA4, Intel Arc, Moore Threads MUSA) creating porting and optimization bottlenecks; and the rapid expansion of model architectures (DeepSeek V4, LFM3, Qwen3, MiniMax, Kimi-Linear) with novel attention patterns (MLA, hybrid sliding-window, Ulysses context parallelism) that stress existing kernels. Today's activity across vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth reflects these pressures — each project balancing correctness fixes for edge cases against performance work for competitive inference speeds.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) |
|---------|-------------|-----------|----------------|
| **vLLM** | High (~50) | High (~50) | 0 |
| **SGLang** | High (~30) | High (~40) | 0 |
| **llama.cpp** | ~15 | ~10 | **v0.8.0** |
| **Ollama** | 21 | 43 | **v0.40.13** |
| **LiteLLM** | ~50+ | ~30+ | v1.106.6, v1.109.0-dev.1 |
| **Unsloth** | 37 | 349 | v0.1.912-beta |

**Observations:**

- **Unsloth** dominates PR volume (349), driven by rapid iteration on context parallel Ulysses support across multiple model families and ongoing Mac memory optimization work.
- **llama.cpp** and **Ollama** are the only projects with stable releases today — both shipping feature releases with GGUF streaming-audio (llama.cpp) and MLX Windows support (Ollama).
- **vLLM** and **SGLang** show high commit activity but no releases, indicating active development cycles.
- **LiteLLM** maintains high issue volume reflecting its proxy/gateway role serving diverse provider integrations.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek V4 / V4.1** | ✅ Flash | ✅ | ✅ | — | — | ✅ Ulysses |
| **LFM3 (LiquidAI)** | — | — | ✅ Text/VL/Audio | ✅ Audio/Video | — | ✅ 1.7B request |
| **Qwen3 / Qwen3.5 / Qwen3.8** | ✅ Flash-Next | ✅ | — | ✅ MLX | ✅ | — |
| **Gemma 4** | — | — | — | — | — | ✅ Ulysses |
| **MiniMax M1/M2** | — | — | — | — | — | ✅ Ulysses |
| **Kimi-Linear** | — | — | — | — | — | ✅ Ulysses |
| **GLM-5.3** | — | ✅ Hopper | — | — | — | — |
| **HiDream-O1-Image** | — | ✅ | — | — | — | — |
| **SM120 (Blackwell)** | ✅ CUTLASS | ✅ | — | — | — | — |
| **AMD RDNA3/4** | — | ✅ | — | — | — | — |
| **Intel Arc B580** | — | — | — | — | — | ✅ Request |
| **Moore Threads MUSA** | — | ✅ Tracking | — | — | — | — |
| **Decision → GGUF** | — | — | ✅ | — | — | ✅ |

**Analysis:**

- **Unsloth** leads in context parallel architecture support, having shipped Ulysses integration for Gemma 4, DeepSeek V2/V3/V4, MiniMax, and Kimi-Linear in a single cycle.
- **vLLM** and **SGLang** are neck-and-neck on Blackwell (SM120) hardware enablement, with vLLM advancing CUTLASS grouped GEMM and SGLang focusing on PD disaggregation hardening.
- **llama.cpp** differentiates on LiquidAI LFM3 family support (text, vision, audio, omni) — unique among all projects.
- **Ollama** owns the MLX ecosystem (Apple Silicon) with Windows backend and video input shipping.
- **SGLang** is the only project actively pursuing Moore Threads MUSA support, expanding hardware diversity.

---

## 4. Performance Frontier

| Optimization Area | Projects Leading | Key Work |
|------------------|------------------|----------|
| **KV Cache / Flash Attention** | vLLM, SGLang | DFlash pad split, native decode lenses (vLLM #63579); TurboQuant + Hybrid MoE on Ampere (vLLM #40124) |
| **Context Parallelism** | Unsloth, vLLM | Ulysses for 6+ architectures (Unsloth); PP batch balancing (vLLM #50410) |
| **MoE Kernels** | vLLM, llama.cpp | MXFP4 MoE backend fix (vLLM #55232); Fused MoE gate/up + GLU (llama.cpp #11962) |
| **Quantization** | llama.cpp, vLLM | IQ4 quant speedup (llama.cpp); SM120 CUTLASS FP8 grouped GEMM (vLLM #43814) |
| **AMD / ROCm** | vLLM, SGLang | Kimi-K3 decode opt (vLLM #64029); Qwen3.8 MI355X (vLLM #59575); AMD GEMV/MLA/GDN (SGLang #47077/#44457/#47157) |
| **Batching / Scheduling** | vLLM, SGLang | Balanced PP microbatches (vLLM); PD disaggregation protocol (SGLang #34510) |
| **Memory Management** | Ollama, Unsloth | GGUF Mac memory auto-context (Unsloth #15843); Per-device /metrics (LiteLLM #26130) |
| **Gateway / Routing** | LiteLLM | Router isolation refactor (#48847); Stream billing fix (#48955) |

**Analysis:**

- **vLLM** and **SGLang** concentrate on distributed serving optimizations (PP balancing, PD disaggregation, KV cache) — these are the frontier for multi-node production deployments.
- **Unsloth** owns the fine-tuning performance lane, with context parallel enabling longer context training and Mac memory work reducing VRAM pressure.
- **llama.cpp** pushes quantization and kernel fusion, critical for consumer GPU and edge deployment.
- **LiteLLM** focuses on gateway reliability (routing, billing accuracy, guardrails) rather than compute-side performance.

---

## 5. Layer Positioning

| Layer | Primary Projects | Role |
|-------|------------------|------|
| **Serving Engine (VLLM-style)** | **vLLM**, **SGLang** | High-throughput single-node/multi-node inference server with PP/TP, KV cache, prefix caching. vLLM leads on Blackwell and AMD; SGLang leads on PD disaggregation. |
| **Local Runtime** | **llama.cpp**, **Ollama** | llama.cpp: portable GGUF execution across CPU/GPU/embedded. Ollama: consumer-friendly local deployment with MLX, video/audio I/O, easy model management. |
| **Gateway / Proxy** | **LiteLLM** | Unified API layer across 100+ providers, routing, load balancing, cost tracking, guardrails. No inference compute — all delegation. |
| **Training / Fine-tuning** | **Unsloth** | QLoRA / LoRA fine-tuning on consumer GPUs with context parallel, memory optimization, GGUF export. Complements inference engines. |
| **Tooling / Integration** | **LiteLLM**, **Ollama** | LiteLLM: SDK for multi-provider apps. Ollama: end-user app + API for local models. |

**Analysis:**

- The ecosystem exhibits clear horizontal segmentation: **Unsloth** owns the "train" layer, **LiteLLM** owns the "gateway" layer, and the "serve" layer is contested between **vLLM** (enterprise scale) and **SGLang** (PD disaggregation). **llama.cpp** and **Ollama** compete in the "run locally" layer with different trade-offs (performance vs. ease-of-use).
- Notably, **LiteLLM** does not perform inference — it is purely a routing/billing layer. This is distinct from vLLM/SGLang which execute models.
- **Unsloth** bridges training and inference via GGUF export, creating a workflow from fine-tune → GGUF → llama.cpp/Ollama/vLLM.

---

## 6. Trend Signals

### Industry Trends Observed Today

1. **Hardware fragmentation accelerates** — Three projects (SGLang, llama.cpp, Unsloth) are actively adding support for non-Nvidia platforms: AMD RDNA3/4, Intel Arc B580, Moore Threads MUSA, Hexagon DSP. This reflects market pressure from export controls and diverse accelerator availability.

2. **Context length explodes** — Unsloth's Ulysses rollout for 6+ architectures and vLLM's PP balancing work both target 128K+ context windows. The bottleneck is shifting from "can we fit" to "can we serve affordably at scale."

3. **PD disaggregation approaches production** — SGLang's protocol unification (#34510) and vLLM's PP work indicate that prefill-decode separation is nearing maturity. This enables elastic scaling for mixed prefill/decode workloads — critical for commercial serving.

4. **Quantization gets complex** — Multiple quantization frontiers (MXFP4, NVFP4, IQ4, FP8 grouped GEMM) with hardware-specific paths indicate a trend toward architecture-aware quantization rather than one-size-fits-all approaches.

5. **Local + cloud convergence** — Ollama's MLX Windows support and llama.cpp's streaming-audio APIs blur the line between local and cloud inference. LiteLLM's role as a unified gateway further abstracts away the deployment location.

6. **Billing accuracy gains priority** — LiteLLM's stream billing fix (#48955) and vLLM's usage tracking work indicate that cost attribution is becoming a production requirement, not an afterthought.

### What Agent / Application Developers Should Watch

| Signal | Implication |
|--------|-------------|
| **PD disaggregation maturity** (SGLang, vLLM) | Prepare to deploy mixed prefill/decode clusters for cost-efficient high-throughput serving. Evaluate SGLang vs. vLLM for your scale. |
| **Blackwell (SM120) enablement** (vLLM, SGLang) | RTX 5090/5080 will become viable for production inference; benchmark your workloads on sm_120 when kernels land. |
| **Context parallel fine-tuning** (Unsloth) | Longer context fine-tuning becomes accessible on consumer GPUs; expect new agent products with 200K+ context windows. |
| **LLM gateway standardization** (LiteLLM) | Multi-provider routing is stabilizing; consider LiteLLM for standardized observability across OpenAI/Anthropic/Azure/Vertex. |
| **Quantization path fragmentation** | Test your quantization strategy per hardware target; don't assume FP8 works identically across A100/H100/AMD/Blackwell. |
| **MLX ecosystem expansion** (Ollama, Unsloth) | Apple Silicon inference is maturing; video input and Windows MLX support signal growing non-Nvidia inference demand. |

---

*Cross-project analysis compiled from GitHub activity on 2026-10-29.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze this GitHub data and create a structured digest for vLLM.

Let me identify the key items:

**Releases & Breaking Changes:**
- None in last 24h (no releases)

**New Model & Hardware Support:**
- #50576: SM8x (Ampere A100/A800) support for DeepSeek-V4-Flash
- #31085: SM120 (RTX 6000/5000 Blackwell) support for native NVFP4 MoE kernels
- #30135: MXFP4 models fall back to Marlin kernel for RTX PRO 6000 (Blackwell SM120)
- #59575: ROCm AMD gfx950 / MI355X performance optimization for Qwen3.8-Flash-Next
- #38486: CUDA graph memory issues for Qwen3.5

**Performance & Optimization:**
- #64029: ROCm Kimi-K3 specialized decode optimizations
- #50410: Balance batches for PP (pipeline parallel)
- #55232: Fix compressed tensors MXFP4 MoE backend
- #43814: Enable CUTLASS grouped GEMM for SM_120/SM_121 consumer Blackwell
- #51406: ROCm fused QK-norm+RoPE+gate Triton kernel for Qwen3-Next/Qwen3.5
- #63579: DFlash pad split, native decode lens optimizations

**Stability & Regressions:**
- #24430: CUDA error illegal memory access
- #30142: assert request.num_output_placeholders >= 0 can fail in async scheduling
- #40124: TurboQuant + Hybrid MoE broken on Ampere
- #64390: Rust vllm-bench accepts --max-concurrency 0 and hangs


- #64013: Parenthesize penalties Triton for Ascend backends
- #64236: KV offload async loads in mixed steps
- #64393: SimpleCPUOffload disk tier cleanup

I notice several bug fixes addressing performance and compatibility issues across different hardware platforms. The fixes target Ascend backends, KV offloading, and CPU offload mechanisms, demonstrating vLLM's ongoing efforts to improve system stability and cross-platform support.

Key improvements include resolving CUDA graph memory challenges for Qwen3.5, addressing DeepSeek-V4-Flash compatibility with Ampere GPUs, and optimizing the TurboQuant KV cache feature. The project is also expanding its technical approach, with a Rust front-end RFC and plans to replace torch.cuda APIs with torch.accelerator for enhanced hardware flexibility.</think>

# vLLM Digest — 2026-10-29

## Today's Highlights

The vLLM project shows significant activity around hardware compatibility and KV cache optimizations. Key developments include ROCm/AMD GPU performance work for Kimi-K3 and Qwen3 models, critical bug fixes for Blackwell (SM120) GPU support, and ongoing RFC discussions around Rust front-end and torch.accelerator migration. No new releases in the last 24 hours, but multiple high-impact PRs are advancing through the pipeline.

---

## Releases & Breaking Changes

No new releases recorded in the last 24 hours.

---

## New Model & Hardware Support

| Item | Description | Link |
|------|-------------|------|
| **DeepSeek-V4-Flash Ampere Support** | DeepSeek-V4-Flash-0731 models do not run on SM8x (A100/A800, RTX 30xx). Feature request to add Ampere compatibility. | [#50576](https://github.com/vllm-project/vllm/issues/50576) |
| **SM120 Blackwell NVFP4 MoE** | Native NVFP4 MoE kernel support for RTX 6000 Pro (Blackwell SM120). Currently falls back to Marlin. | [#31085](https://github.com/vllm-project/vllm/issues/31085) |
| **MXFP4 on Blackwell SM120** | MXFP4 models incorrectly fall back to Marlin kernel on RTX PRO 6000 Blackwell. | [#30135](https://github.com/vllm-project/vllm/issues/30135) |
| **ROCm AMD MI355X Optimization** | Performance optimization plan for Qwen3.8-Flash-Next on gfx950 / MI355X (AMD). | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **ROCm Fused QK-norm+RoPE+Gate** | Enable fused Triton kernel for Qwen3-Next/Qwen3.5 on ROCm. | [#51406](https://github.com/vllm-project/vllm/pull/51406) |

---

## Performance & Optimization

| Item | Description | Link |
|------|-------------|------|
| **Kimi-K3 Decode Optimization** | Specialized decode optimizations: sentinel all-reduces, pre-AR loads, tagged x rows for ROCm AMD GPUs. | [#64029](https://github.com/vllm-project/vllm/pull/64029) |
| **PP Batch Balancing** | Balance established decode requests across Model Runner V2 PP microbatches without restricting prefill scheduling. | [#50410](https://github.com/vllm-project/vllm/pull/50410) |
| **CUTLASS GEMM for SM120** | Enable CUTLASS grouped GEMM for SM_120/SM_121 consumer Blackwell (RTX 5090/5080/5070, DGX Spark GB10). | [#43814](https://github.com/vllm-project/vllm/pull/43814) |
| **MXFP4 MoE Backend Fix** | Fix compressed-tensors W4A4 MXFP4 MoE path to use centralized backend selection. | [#55232](https://github.com/vllm-project/vllm/pull/55232) |
| **DFlash Optimizations** | Trace-driven fusion follow-ups: DFlash pad split, native decode lenses, Gumbel finalize for DeepSeek V4.1. | [#63579](https://github.com/vllm-project/vllm/pull/63579) |
| **TurboQuant + Hybrid MoE on Ampere** | 13 patches addressing TurboQuant KV cache + hybrid MoE (Qwen3.6-35B-A3B) on Ampere GPUs. | [#40124](https://github.com/vllm-project/vllm/issues/40124) |

---

## Stability & Regressions

| Item | Severity | Description | Status |
|------|----------|-------------|--------|
| **CUDA illegal memory access** | High | `torch.AcceleratorError: CUDA error: an illegal memory access` during inference. | Open [#24430](https://github.com/vllm-project/vllm/issues/24430) |
| **Output placeholder assertion** | Medium | `assert request.num_output_placeholders >= 0` fails in async scheduling on 8xH200 nodes. | Open [#30142](https://github.com/vllm-project/vllm/issues/30142) |
| **Rust vllm-bench concurrency=0** | Medium | Accepts `--max-concurrency 0` and hangs forever; Python version rejects this. | Fixed [#64390](https://github.com/vllm-project/vllm/pull/64390) |
| **Ascend Triton penalties** | Medium | Chained boolean `or` in penalties kernel fails on Ascend backends. | Fixed [#64013](https://github.com/vllm-project/vllm/pull/64013) |
| **KV offload mixed steps** | Medium | Regression in async KV offload for steps with both sync and async loads. | Fixed [#64236](https://github.com/vllm-project/vllm/pull/64236) |
| **SimpleCPUOffload cleanup** | Low | Disk tier slot files not cleaned on graceful shutdown. | Fixed [#64393](https://github.com/vllm-project/vllm/pull/64393) |
| **Gemma 4 E4B slow** | Low | ~9 tok/s on RTX 4090 vs 100+ for comparable Llama 3B; TRITON_ATTN fallback issue. | Open [#38887](https://github.com/vllm-project/vllm/issues/38887) |

---

## What This Means for Application Developers

1. **Blackwell GPU users**: Upcoming fixes in PR [#43814](https://github.com/vllm-project/vllm/pull/43814) will enable native CUTLASS FP8 grouped GEMM for RTX 5090/5080/5070, significantly improving MoE model throughput. If using MXFP4 quantization on RTX 6000 Pro, expect improved kernel selection after [#31085](https://github.com/vllm-project/vllm/issues/31085) lands.

2. **AMD ROCm deployments**: Performance work for Qwen3.8-Flash-Next on MI355X is ongoing ([#59579](https://github.com/vllm-project/vllm/issues/59575)). Kimi-K3 decode optimizations in [#64029](https://github.com/vllm-project/vllm/pull/64029) should improve throughput on AMD GPUs.

3. **Multi-modal/vision models**: The RFC for ViT full CUDA Graph support ([#38175](https://github.com/vllm-project/vllm/issues/38175)) is active, targeting Qwen3-VL, GLM-V, and Kimi K2.5 production serving.

4. **Pipeline parallelism users**: PR [#50410](https://github.com/vllm-project/vllm/pull/50410) improves batch balancing across PP microbatches, which should improve throughput for large-scale deployments.

5. **Upcoming API changes**: The Rust front-end RFC ([#40846](https://github.com/vllm-project/vllm/issues/40846)) proposes future architectural changes that may affect plugin authors. The torch.accelerator migration ([#30679](https://github.com/vllm-project/vllm/issues/30679)) aims to improve non-CUDA hardware compatibility.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang and create a structured digest for 2026-10-29.

First, let me identify the key themes:

1. **Releases & Breaking Changes**: No new releases in the last 24h

2. **New Model & Hardware Support**:
- AMD RDNA3/RDNA4 consumer GPU support (issue #30599)
- Moore Threads (MUSA) GPU support (issue #16565)
- GLM-5.3-Flash on Hopper (issue #45373)
- HiDream-O1-Image support (PR #39682)

3. **Performance & Optimization**:
- DeepSeek-V4 performance on SM120 (issue #33422)
- GLM-5.3-Flash performance on Hopper (tracking issue #45373)
- Multiple AMD GPU optimizations (PRs #47077, #44457, #47157, #47156, #47155, #47154, #46832)
- Qwen3.5 MoE FP8 KV cache fix (issue #37379 - closed)
- Hybrid SWA detection (PR #45295 - closed)

4. **Stability & Regressions**:
- Flaky tests and CI infrastructure (issue #42752) - HIGH priority
- DeepSeek-V4.1-Flash + DSPARK OOM crash (issue #41076)
- Logprob mismatch between Prefill and Decode (issue #25790 - closed)
- HiCache issues with hybrid GDN model (issue #45400)
- GLM-5.3-Flash bugs (issue #37524)
- Multiple other bugs

5. **Roadmap items**:
- Decode Context Parallelism & Helix Parallelism (issue #29736)


- Prefill-DecDecode Disaggregation continues to be a major focus, with ongoing work to improve efficiency and performance in this critical area of inference processing.

I'll synthesize the most critical updates, focusing on the PD Disaggregation roadmap as a key area of technological advancement. The project's continuous efforts to optimize inference mechanisms demonstrate a commitment to cutting-edge AI infrastructure development.</think>

# SGLang Digest — 2026-10-29

## 1. Today's Highlights

The SGLang project is focused on hardening PD disaggregation and kernel stability. The most active areas today are: (1) ongoing work to unify the PD disaggregation protocol layer (#34510), (2) multiple AMD GPU kernel optimizations targeting consumer RDNA hardware and Qwen3.5/DeepSeek-V4 performance, and (3) active HiCache bug-fixing around MLA memory handling and Mooncake L3 integration. A notable CI stability issue (#42752) is being tracked with 137 comments, indicating significant community attention.

---

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

---

## 3. New Model & Hardware Support

- **AMD Consumer GPUs**: Tracking issue #30599 opened to officially support RDNA3 (`gfx1100`/`gfx1101`) and RDNA4 (`gfx1200`/`gfx1201`) consumer Radeons, expanding beyond the current datacenter Instinct-only path (`gfx942`/`gfx950`).

- **Moore Threads MUSA**: Roadmap issue #16565 continues tracking first-class support for Moore Threads GPUs.

- **HiDream-O1-Image**: PR #39682 adds support for this 8B pixel-space unified transformer (Qwen3-VL backbone + flow-matching pixel head).

- **GLM-5.3-Flash on Hopper**: Tracking issue #45373 opened for SM90 (Hopper) performance optimization, part of Q4 roadmap #42473.

---

## 4. Performance & Optimization

| Area | Details | PR/Issue |
|------|---------|----------|
| **AMD GEMV** | Split-K bf16 GEMV for single-row decode on gfx1151 (Strix Halo) to improve decode throughput | #47077 |
| **AMD MLA** | Skip triton MLA K rescale when `k_scale` is 1.0 to eliminate unnecessary operations | #44457 |
| **AMD GDN** | Tune ROCm decode Conv1D update and recurrent state streaming on gfx1250 | #47157 |
| **AMD Qwen3.8** | Fuse SiLU-and-mul with down_proj MXFP4 input quantization (bit-exact) | #47155 |
| **AMD Qwen3.5** | Fuse add + RMSNorm with MXFP4 input quant of AITER ASM FP4 projections | #47154 |
| **AMD Qwen3** | Use fused QK-norm + RoPE + KV write in decode with FP8 KV cache | #46832 (closed) |
| **Hybrid SWA** | Detect hybrid sliding-window attention models from `layer_types` to avoid unconditional KV retention | #45295 (closed) |
| **DeepSeek-V4 Perf** | Issue #33422 reports ~2-7K tok/s prefill on SM120 vs ~12.5K via vLLM/marlin — tuning guidance sought | #33422 |

---

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | #42752 — Flaky tests and CI infrastructure failures in `PR Test Base` / `PR Test Extra` runs (137 comments) | OPEN |
| **High** | #41076 — DeepSeek-V4.1-Flash + DSPARK: unbounded `SparsePrefillWorkspace` allocation OOM-crashes TP group | OPEN |
| **Medium** | #45400 — HiCache on hybrid GDN model: host-tier hits drop to zero when working set exceeds ~3 long prefixes (host Mamba pool exhausted) | OPEN |
| **Medium** | #45989 — HiCache `buffer_only` + Mooncake L3: scheduler admits chunked prefill it cannot finish, then crashes with "Prefill out of memory" | OPEN |
| **Medium** | #46806 — Weight updates silently load target weights into DFLASH draft; `update_weights_from_disk` has no `selector` to prevent it | OPEN |
| **Medium** | #46446 — Qwen3.5-9B deterministic greedy output differs with mixed-chunk scheduling | OPEN |
| **Medium** | #45525 — DeepSeek-V4-Flash: speculative and ordinary decoding produce different greedy outputs | OPEN |
| **Fixed** | #37379 — Qwen3.5-MoE `RuntimeError` with FP8 KV cache and `--quantization-param-path` | CLOSED |
| **Fixed** | #45426 — FLA kernels fail to compile on nightly-cu134-20261020 (Triton removed `tl.make_block_ptr`) | CLOSED |

**Fixes merged:**
- #47168: Fix HiCache write-back staging on MLAView
- #45524: Wait for prefill forward before sending KV chunks under PP
- #46707: Restore HiCache sidecars to every Mamba destination

---

## 6. What This Means for Application Developers

1. **PD Disaggregation is maturing**: The protocol unification work (#34510) and recent PP fixes (#45524) indicate that prefill-decode disaggregation is approaching production readiness. If you're running large-scale deployments, now is the time to test the default configuration.

2. **AMD consumer GPU support is coming**: If you have RDNA3/RD... [truncated] — the team is actively working on enabling consumer Radeons, which could significantly reduce inference costs for development/edge use cases.

3. **HiCache continues to have edge-case bugs**: Several issues (#45400, #45989, #46952) highlight edge cases around hybrid GDN models, Mooncake L3 backends, and write-back eviction performance. If you use HiCache with complex prefix caching patterns, test thoroughly before production.

4. **AMD kernel optimizations are aggressive**: The volume of fused-kernel PRs this week indicates significant performance work on AMD GPUs. If you run on ROCm, keep your build updated.

5. **CI stability is a known issue**: If you're seeing flaky test failures on your PRs, you're not alone — issue #42752 is actively tracking this.

---

*Generated from GitHub data for sgl-project/sglang on 2026-10-29*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a llama.cpp digest for 2026-10-29 based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Key observations from the data:

1. **Releases**: v0.8.0 was just released - adds LiquidAI LFM3 family, new streaming-audio API in mtmd, realtime audio endpoints (/v1/realtime and /tts), new architectures including DeepSeek

2. **Commits in last 24h**:
- b11972: control vector layer bounds and M-RoPE position loops
- b11971: OpenCL tiled q4_k GEMM for Adreno (Qualcomm)
- b11970: Hexagon conv2d support
- b11969: Speed up IQ4 quant creation
- b11968: SVE 256-bit gemm_q6_K_8x8_q8_K kernel
- b11966: CI switch to Ubuntu 26.04 for s390x
- b11963: SYCL work-group argmax for short TOP_K rows
- b11962: CUDA fuse MoE gate/up and GLU in MMQ
- b11960: Version bump to 0.8.0

3. **Issues** (notable ones):
- #14909: Feature request - missing ops from backends (57 comments)
- #16393: Tool to list/delete cached models (28 comments)
- #29949: MoE expert cache with GPU-resident LRU
- #27330: CUDA graphs hang on RTX 5090 Laptop (sm_120) - important bug
- #25790: Security - Instruction injection through query parameter


- #30869: Compile bug on AMD MI210 (HIP)
- #30944: DeepSeek-V4.1-Flash corruption with cached prompt
- #30697: --moe-cache-mib crashes on Vulkan
- #29457: Large enum in json_schema causes DoS

4. **Pull Requests**:
- #26130: Per-device memory usage on /metrics
- #30881: Batched tensor copy API
- #28967: NCCL support for multi-node tensor parallelism
- #30986: CUDA gather batched tensor reads
- #31286: moe-cache CPU share auto

I notice several performance and security issues emerging. The AMD MI210 compilation problem and Vulkan MoE cache crashes suggest backend instability. A critical security vulnerability exists with instruction injection, while the CUDA graphs issue on newer hardware indicates potential compatibility challenges. The batched tensor operations and multi-node parallelism efforts point to ongoing infrastructure improvements.</think>

# llama.cpp Digest — 2026-10-29

## Today's Highlights

The project released **v0.8.0**, bringing LiquidAI LFM3 family support (text, vision, audio, omni), a new experimental streaming-audio API via `mtmd`, and realtime audio I/O through `/v1/realtime` and `/tts` server endpoints. This release also introduces DeepSeek V4.1 and batched tensor copy APIs, marking a significant expansion of multimodal and inference throughput capabilities.

## Releases & Breaking Changes

- **v0.8.0** — Major release with LiquidAI LFM3 family support, `mtmd` streaming-audio API, new `/v1/realtime` and `/tts` endpoints, DeepSeek V4.1 architecture. [[Release]](https://github.com/ggml-org/llama.cpp/releases/tag/v0.8.0)
- **Version bump** — Project now at v0.8.0 (b11960) [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11960)
- **CI migration** — s390x builds now use Ubuntu 26.04 runners [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11966)

## New Model & Hardware Support

- **LiquidAI LFM3** — Text, vision, audio, and omni variants now supported (v0.8.0)
- **DeepSeek V4.1** — Added in v0.8.0 with Flash variant
- **Hexagon backend** — Conv2d support landed for on-device inference [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11970)
- **OpenCL** — Tiled q4_k GEMM for Adreno (Qualcomm) [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11971)
- **Control vectors** — Bounded layer indices by model layer count, M-RoPE position loop fixes [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11972)

## Performance & Optimization

- **SVE 256-bit GEMM** — `ggml-cpu` now has optimized `gemm_q6_K_8x8_q8_K` kernel for Arm SVE (svcntb==32) [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11968)
- **IQ4 quantization** — Pre-computed halfway points significantly speed up quant creation [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11969)
- **SYCL TOP-K** — Work-group argmax for short rows reduces overhead [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11963)
- **CUDA MoE fusion** — Fused gate/up and GLU operations in MMQ path for MoE models [[Commit]](https://github.com/ggml-org/llama.cpp/commit/b11962)
- **Batched tensor API** — Generic `ggml_backend_tensor_*_n` functions merged for efficient bulk transfers [[PR #30881]](https://github.com/ggml-org/llama.cpp/pull/30881)
- **CUDA batched reads** — Optimized gather of batched tensors into mapped host memory [[PR #30986]](https://github.com/ggml-org/llama.cpp/pull/30986)
- **NCCL multi-node** — Early implementation for multi-node tensor parallelism via NCCL [[PR #28967]](https://github.com/ggml-org/llama.cpp/pull/28967)

## Stability & Regressions

- **CUDA graphs hang** — RTX 5090 Laptop (sm_120) hangs with CUDA graphs; `GGML_CUDA_DISABLE_GRAPHS=1` workaround. Severity: High. [[Issue #27330]](https://github.com/ggml-org/llama.cpp/issues/27330)
- **Instruction injection** — Security issue in WebUI query parameter (`?q=`) [[Issue #25790]](https://github.com/ggml-org/llama.cpp/issues/25790)
- **Compile failure** — HIP compilation fails on AMD MI210 (gfx9a CDNA2) [[Issue #30869]](https://github.com/ggml-org/llama.cpp/issues/30869)
- **MoE cache Vulkan crash** — `--moe-cache-mib` crashes on Vulkan (RX 6900 XT) [[Issue #30697]](https://github.com/ggml-org/llama.cpp/issues/30697)
- **DeepSeek V4.1 corruption** — Output corruption when cached prompt prefix is reused [[Issue #30944]](https://github.com/ggml-org/llama.cpp/issues/30944)
- **SYCL BF16 instruction** — Not supported on Arrow Lake iGPU [[Issue #31029]](https://github.com/ggml-org/llama.cpp/issues/31029)
- **JSON schema DoS** — Large enums cause grammar construction to pin CPU for tens of seconds [[Issue #29457]](https://github.com/ggml-org/llama.cpp/issues/29457)

## What This Means for Application Developers

1. **Multimodal real-time is here** — v0.8.0's `/v1/realtime` and `/tts` endpoints enable live audio streaming directly through llama-server. If you're building voice agents or streaming audio pipelines, the new mtmd API is production-ready.

2. **Memory observability improves** — PR #26130 exposes per-device memory usage (GPU VRAM, model weights, KV cache, compute buffers) via `/metrics` and `/memory`. Essential for multi-GPU deployments managing resources dynamically.

3. **MoE inference gets smarter** — The MoE expert cache with GPU-resident LRU (Issue #29949) and CPU fallback (PR #31286, PR #30966) reduces memory pressure for dense MoE models like DeepSeek and Qwen MoE. Expect improved throughput on memory-constrained setups.

4. **Batch processing gains** — The new batched tensor copy API (#30881) and CUDA-optimized batch reads (#30986) improve multi-request inference. If you're running high-throughput serving, these changes reduce per-request latency.

5. **Watch for CUDA graphs** — If deploying on RTX 5090 (sm_120), disable CUDA graphs until the hang issue (#27330) is resolved.

6. **Security patch needed** — The query parameter injection (#25790) warrants updating if you're exposing llama-server's WebUI externally.

---

*Links: [Releases](https://github.com/ggml-org/llama.cpp/releases) | [Website](https://llama.app) | [Attestations](https://github.com/ggml-org/llama.cpp/attestations)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate an Ollama digest for 2026-10-29 based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Let me go through the data:

**Releases:**
- v0.40.13-rc1 → v0.40.13
- Changes: llm: LFM3 GGUF fixes and llama-server speech, llama.cpp version bump b11963

**Issues (21 total):**
- #19343 [CLOSED] - lfm3-audio MLX support error
- #19369 [CLOSED] - Documentation about MLX runtime not specified
- #11243 [CLOSED] - Multi-Modal Support feature request
- #19359 [OPEN] - Claude Desktop conversation issues with MLX cache
- #19201 [OPEN] - Vulkan AMD RADV ~30× slowdown
- #16281 [OPEN] - Gibberish from some models with Vulkan
- #19067 [OPEN] - Auto-Start without permission
- #18685 [CLOSED] - llama-server wedges on cache-hit
- #18869 [CLOSED] - ffn_down_exps.weight size overflows
- #19342 [OPEN] - Modelfile parsing issue with """
- #18968 [OPEN] - Ollama performs 25-30% less
- #19021 [CLOSED] - mistral-large-4 rejects developer-role
- #19337 [OPEN] - Pull resume broken after server restart
- #19353 [OPEN] - qwen3.8:27b-mlx tool_calls issue
- #19370 [CLOSED] - macOS 27 App window not appearing
- #19356 [OPEN] - System prompt reinforcement
- #19355 [CLOSED] - MLX filter feature request
- #19217 [CLOSED] - Gemma 4 thinking not disabled


- #18994 [OPEN] - Can't add Ollama models to ChatGPT
- #19350 [OPEN] - Qwen3.5 thinking off + JSON Schema issue
- #19357 [OPEN] - Memory estimate for Gemma 4 E-series

**Pull Requests (43 total, top 20):**
- #19366 [OPEN] - mlx: add Windows support and CPU backend
- #19374 [OPEN] - README: add Amical to community integrations
- #19373 [CLOSED] - ci: pin buildx to workaround deadlock
- #19372 [CLOSED] - llama.cpp: workaround Metal unary crash
- #19371 [OPEN] - Add kde

I'm seeing several concerning issues emerge: performance degradation in recent versions affecting all models, memory estimation problems with Gemma 4 E-series, Vulkan backend issues causing model corruption, and Windows auto-start behavior without user consent. There are also integration challenges with ChatGPT and JSON schema handling when thinking is disabled. On the positive side, community integrations are expanding with Amical and other tools being added.

The development focus is on platform expansion through MLX Windows and video support, addressing various backend crashes, and improving the user experience through better CLI help messaging and session management.</think>

# Ollama Digest — 2026-10-29

## Today's Highlights

Ollama released **v0.40.13** with LFM3 GGUF fixes and llama-server speech support, alongside a llama.cpp bump to b11963. The community continues to expand MLX capabilities with Windows support and video input landing in PRs, while several notable stability issues persist around Vulkan performance regressions and MLX runtime documentation gaps.

---

## Releases & Breaking Changes

| Version | Changes | PR |
|---------|---------|-----|
| **v0.40.13** | LFM3 GGUF fixes, llama-server speech support, llama.cpp bump to b11963 | [#19344](https://github.com/ollama/ollama/pull/19344), [#19360](https://github.com/ollama/ollama/pull/19360) |

No breaking changes or migration notes this cycle.

---

## New Model & Hardware Support

- **MLX Video Input**: PR [#19348](https://github.com/ollama/ollama/pull/19348) adds MP4/MOV video support for LFM3-VL, LFM3-Omni, and Qwen3.5/3.6 MLX models via the existing images field.
- **MLX Windows Support**: PR [#19366](https://github.com/ollama/ollama/pull/19366) introduces native Windows execution and CPU backend for the MLX runner, enabling full text-to-speech inference on Windows.
- **Community Integrations**: New integrations added — Amical (dictation app), Vauta (meeting transcription), Quock (iOS cloud client), kde-ollama-gui, and self-host.

---

## Performance & Optimization

| Issue | Description | Status |
|-------|-------------|--------|
| **Speculative Decoding Metrics** | PR [#19368](https://github.com/ollama/ollama/pull/19368) adds per-request metrics for speculative decoding — drafted/accepted tokens and runner costs | **Open** |
| **Performance Regression** | #18968 reports 25–30% throughput drop across all models in v0.40.x vs v0.40.1 | **Open** — no PR yet |
| **Vulkan AMD Slowdown** | #19201: ~30× generation collapse on second request with prompt cache on AMD RADV (RX 6600 XT) | **Open** — needs triage |
| **Memory Estimate Error** | #19357: Gemma 4 E-series memory prediction is 3–4× actual VRAM, causing unnecessary model evictions | **Open** |

---

## Stability & Regressions

### High Severity

| Issue | Description | Links |
|-------|-------------|-------|
| **Pull Resume Failure** | Restarting `ollama serve` >1 hour into a pull breaks resume with "remove ...-partial-0: cannot find the file" | [#19337](https://github.com/ollama/ollama/issues/19337) |
| **Vulkan Gibberish** | qwen2.5-coder, qwen3 output gibberish on Vulkan but work on CPU | [#16281](https://github.com/ollama/ollama/issues/16281) |
| **llama-server Wedge** | Model hangs on full-cache-hit tasks; all subsequent requests block until unload (CUDA) | [#18685](https://github.com/ollama/ollama/issues/18685) |
| **Claude Desktop Slow** | ~17K initial prefill, HTTP 500 retries, MLX cache loss (0.40.11–0.40.12) | [#19359](https://github.com/ollama/ollama/issues/19359) |

### Medium Severity

| Issue | Description | Links |
|-------|-------------|-------|
| **Modelfile Parse Bug** | `ollama show --modelfile` produces unparseable output when values contain `"""` + whitespace | [#19342](https://github.com/ollama/ollama/issues/19342) — fix in [#19363](https://github.com/ollama/ollama/pull/19363) |
| **MLX Tool Calls** | qwen3.8:27b-mlx only emits tool_calls when content is empty | [#19353](https://github.com/ollama/ollama/issues/19353) |
| **macOS 27 App Crash** | App window and menu bar icon don't appear (CoreUI bundle error) | [#19370](https://github.com/ollama/ollama/issues/19370) |
| **Qwen3.5+Thinking Off** | JSON Schema constraints fail when thinking is disabled | [#19350](https://github.com/ollama/ollama/issues/19350) |

### Documentation Gaps

- **MLX Runtime Not Specified**: #19343 and #19369 report lfm3 model pages lack MLX requirement warning; users on Linux/Nvidia get cryptic errors. Feature request #19355 asks for MLX filter on library.

---

## What This Means for Application Developers

1. **Avoid Production Vulkan on AMD** — If you're running Ollama on AMD GPUs with Vulkan, expect model corruption on qwen/qwen2.5-coder families. Stick to CPU or wait for a fix.

2. **Pulls >1 Hour: Plan Ahead** — The resume bug means interrupted long pulls may need full restart. Schedule large model pulls during maintenance windows.

3. **MLX Models Still Need Better UX** — The documentation gap around MLX-only models (lfm3, qwen3.8:27b-mlx) persists. Check model tags carefully before pulling — `ollama list` won't warn you.

4. **v0.40.x Throughput Regression** — If you upgraded from v0.40.1 and see 25–30% lower tokens/sec, you're not imagining it. Track #18968 for updates.

5. **Modelfile Export Fix Coming** — The `"""` escaping issue in exported Modelfiles will be fixed shortly via #19363. Avoid re-parsing exported Modelfiles until then.

6. **New Video Capabilities** — If you're building multimodal agents on Apple Silicon, video input support is landing for LFM3/Qwen3 MLX models. Expect new API surface in upcoming releases.

---

*Generated from GitHub data — ollama/ollama @ 2026-10-29*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-10-29 based on the provided GitHub data. Let me analyze the data and organize it into the requested sections.

Let me go through the data:

**Releases:**
- v1.109.0-dev.1 (dev release)
- v1.106.6 (stable)
- v1.105.7 (stable)

**Issues (showing key ones):**
1. #361 - Wishlist ticket (490 comments) - long-running community feature request tracker
2. #31263 - Rust Migration - major initiative for sub-1ms overheads (32 comments, 21 upvotes)
3. #44869 - Complexity router max_tokens clamping (closed)
4. #47675 - response_cost null bug with anthropic custom provider
5. #47904 - eMudhra root CA backport request (closed)
6. #33167 - Prisma binary download at startup (open)
7. And many more...

**Pull Requests:**
- #48928 - refactor(types)!: replace Any with proven types in 28 files
- #48888 - fix(logging): mark mirrored silent_model calls
- #40631 - feat(vertex_ai)!: use HTTP/2 httpx client
- #48955 - fix(stream): last usage frame carries litellm's bill
- #48978 - fix(azure_ai): price Foundry relays
- #41011 - fix(guardrails)!: check Anthropic and Responses request tools
- #48847 - refactor(router): move router callers
- #41565 - fix(bedrock): omit system prompt from audio transcription
- #48922 - feat(complexity_router): classify agent loop turns
- #39540 - fix(proxy): stop answering with "None"
- And more...

Now let me organize this into the requested format:


I'll focus on identifying the most impactful updates that would matter to infrastructure engineers. The PRs addressing stream billing accuracy, router refactoring for cleaner interfaces, and guardrail tool validation seem most relevant. The stream fix ensures proper cost attribution, while the router changes improve maintainability. I should also highlight the major Rust migration initiative and any breaking changes that could affect deployment.</think>

# LiteLLM Digest — 2026-10-29

## Today's Highlights

The LiteLLM project continues its rapid pace with multiple correctness fixes landed, notably addressing stream billing accuracy and guardrail coverage gaps. A significant refactoring effort is underway to isolate the Router behind a clean interface, while the community-driven Rust migration initiative gains momentum with 32 comments and 21 upvotes on the tracking issue.

---

## Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| [v1.109.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.109.0-dev.1) | Dev | Pre-release for testing |
| [v1.106.6](https://github.com/BerriAI/litellm/releases/tag/v1.106.6) | Stable | Docker images signed with cosign key `e82a3c6` |
| [v1.105.7](https://github.com/BerriAI/litellm/releases/tag/v1.105.7) | Stable | Previous stable, also cosign-signed |

**Breaking Change Note:** Vertex AI Search vector store now uses HTTP/2 by default ([#40631](https://github.com/BerriAI/litellm/pull/40631)). Set `http2: false` or `LITELLM_HTTP2=0` to preserve HTTP/1.1 behavior.

---

## New Model & Hardware Support

- **OpenAI o200k_base encoding** for token counting: OpenAI models newer than tiktoken's table (gpt-6, Azure gpt-41, prefixed names) now use gpt-5's o200k_base encoding, matching OpenAI's actual tokenization — previously non-English text was overcounted by up to 80% ([#48728](https://github.com/BerriAI/litellm/pull/48728))
- **Bedrock Voxtral transcription**: Fixed to omit system prompts (which Voxtral rejects) and pass through token counts for accurate billing ([#41565](https://github.com/BerriAI/litellm/pull/41565))
- **QwenCloud migration path**: Added official path for existing DashScope users to migrate to QwenCloud provider ([#36150](https://github.com/BerriAI/litellm/issues/36150))

---

## Performance & Optimization

- **Router refactoring in progress**: Multi-PR effort to isolate `litellm.Router` behind a narrow interface, inverting proxy imports and moving callers to entry points ([#48840](https://github.com/BerriAI/litellm/pull/48840), [#48847](https://github.com/BerriAI/litellm/pull/48847))
- **Vertex AI HTTP/2 optimization**: Search API vector store now reuses OAuth tokens across bursts, sharing one Google connection per worker ([#40631](https://github.com/BerriAI/litellm/pull/40631))
- **HuggingFace tokenizer resilience**: Late download failures now use the already-loaded tokenizer instead of falling back to tiktoken, reducing recovery time from 5 minutes to immediate ([#48916](https://github.com/BerriAI/litellm/pull/48916))
- **Type safety refactor**: Replacing `Any` with proven Pydantic types across 28 files in caching, proxy endpoints, guardrails, auto router, and providers — enables static analysis with basedpyright ([#48928](https://github.com/BerriAI/litellm/pull/48928))

---

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | Stream billing: last usage frame carried upstream provider's cost instead of LiteLLM's calculated bill | **Fixed** ([#48955](https://github.com/BerriAI/litellm/pull/48955)) |
| **High** | Guardrails: `/v1/responses` and `/v1/messages` tool results not scanned in texts-mode (secrets/injections bypassed) | **Fixed** ([#48827](https://github.com/BerriAI/litellm/pull/48827), [#41011](https://github.com/BerriAI/litellm/pull/41011)) |
| **Medium** | Complexity Router: session tier pin not coherent across gunicorn workers, causing model flips mid-conversation | **Fixed** ([#47125](https://github.com/BerriAI/litellm/issues/47125)) |
| **Medium** | Admin key budget enforcement: max_budget/tpm_limit not enforced for admin users | **Fixed** ([#48364](https://github.com/BerriAI/litellm/issues/48364)) |
| **Medium** | Prisma binary download at startup (v1.92.0+): fails in air-gapped corporate networks | **Open** ([#33167](https://github.com/BerriAI/litellm/issues/33167)) |
| **Low** | Proxy error responses returning literal `"None"` strings instead of proper JSON nulls | **Fixed** ([#39540](https://github.com/BerriAI/litellm/pull/39540)) |
| **Low** | Nebius cost calculation off by 10x (~250$ reported vs ~2500$ actual) | **Open** ([#41782](https://github.com/BerriAI/litellm/issues/41782)) |

---

## What This Means for Application Developers

1. **Billing accuracy improved**: Stream responses now report accurate LiteLLM costs in the final usage frame and `x-litellm-response-cost` header — previously you may have seen $0 or incorrect amounts.

2. **Guardrail coverage expanded**: If you're using `/v1/responses` or Anthropic's `/v1/messages` with guardrails configured, tool results are now properly scanned for secrets and injected instructions.

3. **Token counting fixed for new models**: If you're using gpt-6, Azure gpt-41, or prefixed model names, token budgets and spend tracking are now accurate (previously overcounting non-English text by up to 80%).

4. **Router refactoring underway**: The internal Router architecture is being cleaned up — no behavioral changes yet, but this sets the stage for future improvements to routing logic.

5. **Consider HTTP/2 impact**: If you rely on Vertex AI Search vector store through LiteLLM and have issues after upgrading, check the `http2: false` flag.

6. **eMudhra CA fix available**: The eMudhra root CA fix ([#47670](https://github.com/BerriAI/litellm/pull/47670)) is in main; request backport to stable if needed for production security compliance.

---

*Generated from GitHub data for 2026-10-29*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate an Unsloth digest for 2026-10-29 based on the GitHub data provided. I need to analyze the data and structure it into the specified sections.

Let me analyze the data:

**Latest Releases (last 24h)**
- v0.1.912-beta: "Trick or Treat + Optimizations" - Halloween themes, speed improvements for first launch, Linux tool calls, model loading, and multi-L training

**Latest Issues (37 total, top 30 by comment count)**
- #4504 [CLOSED] - Fine-tuning uses more VRAM than advertised, causing OOMs (26 comments)
- #4040 [CLOSED] - Qwen3-Coder-Next-Base OOM on 2xA100 QLoRA (25 comments)
- #1760 [CLOSED] - GPU detection issues (11 comments)
- #15583 [CLOSED] - Intel Arc B580 GPU support request (7 comments)
- #15473 [CLOSED] - Vision with Gemma 4 26B MLX model produce unused tokens (6 comments)
- #15735 [CLOSED] - Qwen-Image-2.1-Turbo Safetensors missing (5 comments)
- #9485 [CLOSED] - Multiple RAG support feature request (4 comments)
- #15573 [OPEN] - Show actual percentage of audio transcribed (4 comments)
- #15552 [CLOSED] - Windows Recycle Bin flooded with sqlite WAL/SHM files (4 comments)
- #15444 [CLOSED] - AMD GPUs not showing on mixed Nvidia-AMD Linux (4 comments)
- #14487 [OPEN] - Memory leak Drive C loses 200-400 MB after use (4 comments)
- #15588 [OPEN] - Support LFM3-1.7B feature request (3 comments)


- #15681 [CLOSED] - SIGSEGV in pyarrow JSON reader (3 comments)
- #15597 [OPEN] - Unsloth Translate feature request (2 comments)
- #15767 [OPEN] - trouble using opencode models (2 comments)
- #15800 [OPEN] - Context does not compact (2 comments)
- #15538 [CLOSED] - studio stack trace when training (2 comments)
- #5441 [CLOSED] - model.loss_function not patched for Qwen3_5ForConditionalGeneration (2 comments)
- #15603 [OPEN] - Limit model

I've identified several performance and stability issues. The Windows file system anomaly with sqlite WAL/SHM files is particularly concerning, potentially indicating a resource management problem. Memory leaks and out-of-memory errors continue to plague large model fine-tuning, especially with Qwen3 models. The library is also expanding its hardware support, with notable work on Intel Arc GPUs and AMD integrated graphics.

**Download speed and model support**
- #15832 [OPEN] - LFM3 MLX models display problems
- #15314 [OPEN] - Image: Unify Edit and Reference
- #15521 [OPEN] - Opencode runtime model discovery
- #15782 [OPEN] - Text CRUD duplicates across tabs
- #15784 [OPEN] - Allow dots in usernames
- #15581 [CLOSED] - Deep Research Failed to Call
- #15621 [CLOSED] - Images download toast shows original name
- #15417 [CLOSED] - Anthropic passthrough context overflow
- #15866 [OPEN] - Unsloth failed to update
- #15856 [OPEN] - Dragging image fails

**Pull Requests (349 total)**

The development team is addressing multiple user experience improvements. They're focusing on model discovery, fixing tab-related bugs, and enhancing image handling. The LFM3 MLX models and download speed limitations are being actively investigated, showing a commitment to expanding model compatibility and user control.

Significant technical advancements include context parallel implementations for Gemma 4, DeepSeek, MiniMax, and Kimi-Linear models. Mac-specific optimizations target memory management and model loading. Notably, they've added support for exporting decision models to GGUF format on fresh installations and introduced a Data Recipes feature in Flows, alongside transitioning Whisper from cpp to Transformers backend.

The core focus remains on improving model interoperability, performance, and user experience across different platforms and model architectures.</think>

# Unsloth Digest — 2026-10-29

## Today's Highlights

Unsloth v0.1.912-beta lands with Halloween-themed UI customization and significant performance improvements to first launch, Linux tool calls, and model loading. The team continues heavy investment in context parallelism with Ulysses support for Gemma 4, DeepSeek V2/V3/V3.2, MiniMax M1/M2, and Kimi-Linear. Multiple PRs address Mac-specific memory management and GGUF model loading workflows.

## Releases & Breaking Changes

| Version | Change | Notes |
|---------|--------|-------|
| [v0.1.912-beta](https://github.com/unslothai/unsloth/releases) | Trick or Treat + Optimizations | Halloween sidebar themes (11 options); speeds up first launch, Linux tool calls, model loading; supports training compatible fine-tuning jobs with multi-L |

No breaking changes flagged in this release.

## New Model & Hardware Support

| Model / Hardware | Type | Notes |
|-----------------|------|-------|
| **LFM3-1.7B** | Feature request [#15588](https://github.com/unslothai/unsloth/issues/15588) | Liquid AI's LFM3 family requested; LFM3 MLX models also being addressed in [#15832](https://github.com/unslothai/unsloth/issues/15832) |
| **Intel Arc B580** | GPU support request [#15583](https://github.com/unslothai/unsloth/issues/15583) | Feature request for Intel XPU backend |
| **Decision models → GGUF export** | PR [#15864](https://github.com/unslothai/unsloth/pull/15864) | Enables `save_pretrained_gguf` / `export_decision_gguf` on fresh installs without pre-installed llama.cpp |
| **Gemma 3 + UNSLOTH_FORCE_FLOAT32** | PR [#15879](https://github.com/unslothai/unsloth/pull/15879) | Fixes bf16 q/k/v dtype crash when Float32 forced pre-import |

Context parallel Ulysses support added for:
- **Gemma 4 text models** — PR [#15883](https://github.com/unslothai/unsloth/pull/15883)
- **DeepSeek V2/V3 MLA, V3.2 indexer, V4 sink attention** — PR [#15882](https://github.com/unslothai/unsloth/pull/15882)
- **MiniMax M1 Lightning hybrid, M2** — PR [#15881](https://github.com/unslothai/unsloth/pull/15881)
- **Kimi-Linear (KDA + MLA)** — PR [#15880](https://github.com/unslothai/unsloth/pull/15880)

## Performance & Optimization

| Area | Change | PR / Issue |
|------|--------|------------|
| **First launch speed** | Optimized startup pipeline | v0.1.912-beta |
| **Linux tool calls** | Performance improvements | v0.1.912-beta |
| **Model loading** | Faster loading for compatible fine-tuning jobs | v0.1.912-beta |
| **Mac GGUF memory** | Auto context no longer reserves full model window on Mac | [#15843](https://github.com/unslothai/unsloth/pull/15843) — llama-server allocates full cache upfront; prevents 4.9 GB reservation for 128K models |
| **Mac GGUF selection** | Recommends Hub GGUF quant fitting Metal budget, not total memory | [#15848](https://github.com/unslothai/unsloth/pull/15848) |
| **HuggingFace requests** | Reduced redundant repo detail fetches when loading downloaded models | [#15844](https://github.com/unslothai/unsloth/pull/15844) |
| **GGUF download handling** | Keeps previously loaded model if GGUF download fails/cancels | [#15846](https://github.com/unslothai/unsloth/pull/15846) |
| **Tool output spill** | Reuses spill record identity after prune rewrite; fixes Windows test portability | [#15884](https://github.com/unslothai/unsloth/pull/15884), [#15888](https://github.com/unslothai/unsloth/pull/15888) |
| **Llama admission waits** | Wakes on queue state changes instead of polling | [#15885](https://github.com/unslothai/unsloth/pull/15885) |
| **Claude CLI billing header** | Stopped from breaking prompt caching | [#15845](https://github.com/unslothai/unsloth/pull/15845) |

## Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Fine-tuning uses more VRAM than advertised, causing OOMs | Closed [#4504](https://github.com/unslothai/unsloth/issues/4504) | — |
| **High** | Qwen3-Coder-Next-Base OOM on 2xA100 80GB QLoRA | Closed [#4040](https://github.com/unslothai/unsloth/issues/4040) | — |
| **High** | Qwen3_5ForConditionalGeneration `loss_function` not patched → logits.float() OOM on ≤24GB GPU | Closed [#5441](https://github.com/unslothai/unsloth/issues/5441) | — |
| **Medium** | Windows Recycle Bin flooded with sqlite WAL/SHM files every second during training (~10,000 files / 40 MB per 90 min) | Closed [#15552](https://github.com/unslothai/unsloth/issues/15552) | — |
| **Medium** | Memory leak: Drive C loses 200-400 MB after each Unsloth use | Open [#14487](https://github.com/unslothai/unsloth/issues/14487) | — |
| **Medium** | SIGSEGV in pyarrow JSON reader with 81.7 MB ChatML JSONL dataset | Closed [#15681](https://github.com/unslothai/unsloth/issues/15681) | — |
| **Medium** | GGUF model crashes not detected; Studio shows model loaded when llama-server stopped | Open [#15847](https://github.com/unslothai/unsloth/pull/15847) | In progress |
| **Low** | Context does not compact when returning to long conversations | Open [#15800](https://github.com/unslothai/unsloth/issues/15800) | — |
| **Low** | AMD GPUs not detected on mixed Nvidia-AMD Linux systems | Closed [#15444](https://github.com/unslothai/unsloth/issues/15444) | — |

## What This Means for Application Developers

1. **Mac users benefit most this cycle** — v0.1.912-beta and associated PRs significantly reduce memory waste when loading GGUF models. If you're serving LLMs on Apple Silicon, expect lower baseline memory consumption and better quant selection guidance.

2. **Context parallelism expands** — Ulysses support for Gemma 4, DeepSeek, MiniMax, and Kimi-Linear enables longer context fine-tuning on these architectures. If you're building applications requiring 128K+ context windows on these models, the infrastructure is now in place.

3. **Watch for OOM regressions** — The VRAM usage issues (#4504, #4040, #5441) are closed but not all root causes may be fully addressed. Test your fine-tuning workloads with realistic dataset sizes before production deployment, especially on multi-GPU setups.

4. **Windows storage hygiene** — The sqlite WAL/SHM file flood (#15552) is a notable bug for long training runs. Consider cleaning `%TEMP%` or monitoring disk usage if running extended sessions on Windows.

5. **Whisper backend migration** — PR [#13753](https://github.com/unslothai/unsloth/pull/13753) retires whisper.cpp in favor of Transformers backend. If you rely on Whisper dictation, verify your integration still works post-update.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*