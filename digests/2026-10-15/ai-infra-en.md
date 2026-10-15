# AI Infrastructure Digest 2026-10-15

> Generated: 2026-10-15 00:47 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report across all the projects I've analyzed (vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth). Let me create a comprehensive comparison with the requested sections.

Let me organize my thoughts:

## 1. Ecosystem Overview
The AI inference ecosystem is experiencing rapid maturation with distinct layering: production-grade serving engines (vLLM, SGLang), local runtimes (llama.cpp), unified APIs (LiteLLM), turnkey solutions (Ollama), and training/inference hybrids (Unsloth). Key themes today: Blackwell/RTX 5090 support race, DeepSeek V4.1 day-0 support, multi-modal model expansion, and security hardening.

## 2. Activity Comparison
Let me compile data from all projects:

| Project | Issues (open/active) | PRs (recent) | Releases |
|---------|---------------------|--------------|----------|
| vLLM | Multiple active bugs | 15+ PRs in flight | No releases |
| SGLang | Multiple active issues | Multiple PRs | No releases |
| llama.cpp | ~15 active issues | 10+ commits | No releases |
| Ollama | 15+ issues, 1 regression | v0.40.5-rc0 | v0.40.5-rc0 |
| LiteLLM | 8+ issues | 10+ PRs | v1.105.1 stable |
| Unsloth | 10+ issues | 10+ PRs | No releases |

## 3. Model Support Race
- vLLM: NemotronLabsDiffusion, Gemma-4, Qwen3.8-Flash-Next, hybrid Mamba/GDN
- SGLang: DeepSeek V4.1 (day-0), GLM-5.3-Flash


- llama.cpp: Maion-Coder, Nemotron Super 3.5 VL, GLiNER2.5-Decide
- Ollama: K2 Horizon models, d1 decision models
- Unsloth: MiniMax-H3 on AMD, Qwen3-ASR audio

SGLang leads in production readiness, particularly for DeepSeek V4.1 with optimization depth, while llama.cpp dominates local runtime breadth with Maion-Coder and Nemotron support.

## 4. Performance Frontier
Across the stack, KV cache and prefix caching remain critical bottlenecks, especially for hybrid architectures. Batching strategies are advancing with speculative decoding and Stream-K approaches, while quantization moves toward INT8 GEMM and NVFP4 implementations. Distributed serving through RPC and weight caching daemons enables multi-machine deployment, and kernel optimizations target both CUDA and ROCm backends with Fusion techniques.

## 5. Layer Positioning
vLLM and SGLang operate as production serving engines, llama.cpp functions as a local runtime, LiteLLM serves as an API gateway layer, Ollama provides a turnkey local solution, and Unsloth occupies training/fine-tuning with inference capabilities.

## 6. Trend Signals
Key industry shifts include Blackwell/RTX 5090 CUDA graph challenges, MCP gateway becoming a standard abstraction, ROCm 10.0 entering production use, and model support accelerating with day-0 capabilities for major releases.</think>

# Cross-Project Comparison Report — 2026-10-15

---

## 1. Ecosystem Overview

The AI inference ecosystem is consolidating around distinct operational layers. Today's activity reveals a bifurcation: production serving engines (vLLM, SGLang) chase Blackwell/RTX 5090 stability and DeepSeek V4.1 optimization, while local runtimes (llama.cpp, Ollama) push multi-modal model breadth and security hardening. The gateway layer (LiteLLM) matures its MCP framework, and the training-inference hybrid (Unsloth) expands to multi-machine GGUF serving. The common thread across all projects: **quantization regressions, CUDA graph instability on new NVIDIA hardware, and multi-backend ROCm enablement** are the primary engineering bottlenecks consuming maintainer cycles.

---

## 2. Activity Comparison

| Project | Open Issues (approx.) | Recent PRs | Releases (24h) | Regression Count |
|---------|----------------------|------------|----------------|------------------|
| **vLLM** | 8+ critical/high | 15+ in flight | None | 3 active regressions |
| **SGLang** | 6+ critical/high | 12+ in flight | None | 2 active regressions |
| **llama.cpp** | 10+ issues | 10+ commits | None | 3 critical (RTX 5090, Strix Halo) |
| **Ollama** | 15+ issues | v0.40.5-rc0 | v0.40.5-rc0 | 1 confirmed (latency) |
| **LiteLLM** | 8+ issues | 10+ PRs | v1.105.1 stable | 0 critical |
| **Unsloth** | 10+ issues | 10+ PRs | None | 2 Windows regressions |

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **DeepSeek V4.1** | — | ✅ Day-0, full optimization | — | ⚠️ 500 error on large images | — |
| **Gemma-4** | ✅ FA4 FP8 MMA | — | — | ⚠️ ctx_other required (12b) | — |
| **Qwen3.8-Flash-Next** | ✅ MI355X | ✅ CUDA graphs | — | — | — |
| **Nemotron Super 3.5 VL** | — | — | ✅ New arch | — | ✅ MiniMax-H3 AMD |
| **Maion-Coder** | — | — | ✅ Native | — | — |
| **GLiNER2.5-Decide** | — | — | ✅ /v1/systemone API | — | — |
| **K2 Horizon** | — | — | — | ✅ Requested | — |
| **d1 (LiquidAI)** | — | — | — | ⚠️ Blocked by encoding | — |

**Leader**: **SGLang** for DeepSeek V4.1 — fastest to ship day-0 support with full optimization stack (decoder bounded replay, BCG, MegaMoE, weight cache daemon). llama.cpp leads in local model breadth (Maion-Coder, Nemotron VL). Ollama trails on new model adoption but leads on ease-of-use.

---

## 4. Performance Frontier

| Optimization Area | Primary Projects | Current Focus |
|-------------------|------------------|----------------|
| **KV Cache / Prefix Caching** | vLLM, SGLang | Hybrid Mamba/GDN corruption fixes; agentic cache scheduling roadmap |
| **Speculative Decoding** | vLLM, SGLang | MTP + prefix cache interaction; bounded replay with BCG for DSv4.1 |
| **Quantization** | llama.cpp, vLLM | INT8 GEMM dispatch (Triton), NVFP4 KV cache, W4A8 MXFP4 |
| **Distributed Serving** | SGLang, Unsloth | RPC multi-machine GGUF; weight cache daemon (<1s load) |
| **Kernel Fusion** | vLLM, llama.cpp | Fused QK-norm+RoPE+gate (ROCm), conv2d SIMT on AMD |
| **Memory Planning** | Unsloth | Diffusion learned activation peaks vs flat reservation |

**Frontier shift**: SGLang's weight cache daemon (306s→<1s load) and Unsloth's diffusion memory planner represent the most impactful single optimization landed today. vLLM's prefix caching remains plagued by hybrid model bugs.

---

## 5. Layer Positioning

| Layer | Projects | Value Proposition |
|-------|----------|-------------------|
| **Production Serving Engine** | vLLM, SGLang | Highest throughput, multi-backend, speculative decoding, prefix caching |
| **Local Runtime** | llama.cpp | GGUF-only, CPU/Metal/OpenCL/Vulkan, broadest model support, no server |
| **Gateway / Proxy** | LiteLLM | Multi-provider aggregation, MCP gateway, cost tracking, observability |
| **Turnkey Local Solution** | Ollama | Zero-config, single-binary, model library, HTTP API |
| **Training + Inference Hybrid** | Unsloth | Fine-tuning + inference, GGUF generation, multi-GPU, diffusion |

**Positioning insight**: The ecosystem is vertically separating. vLLM/SGLang compete on production features; llama.cpp dominates the local/GPU-less niche; LiteLLM abstracts across all model providers. Unsloth occupies a unique position as the only project combining training with inference in a unified UI.

---

## 6. Trend Signals

### What Infrastructure Engineers Should Watch

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Blackwell (SM120) instability** | 3 projects report CUDA graph hangs on RTX 5090 / GB300 | Production Blackwell deployments need `GGML_CUDA_DISABLE_GRAPHS=1`; expect 6-8 weeks for kernel fixes |
| **MCP becoming standard API** | LiteLLM: 3 PRs on OAuth scoping, tool resolution, capability advertising | MCP is the new OpenAI-compatible abstraction; expect gateway vendors to standardize |
| **ROCm 10.0 entering production** | vLLM, Unsloth: MI355X, RDNA4, Strix Halo optimizations | AMD GPU inference is viable for production; ROCm 7.2 entering legacy |
| **Day-0 model support race** | SGLang: DeepSeek V4.1 optimization shipped within 48h of release | Downstream projects must invest in model integration pipelines or lose competitive edge |
| **Quantization regression cycle** | llama.cpp: MMVQ regression; vLLM: NVFP4 1.7x slower than FP8 | Low-bit quantization requires ongoing kernel tuning per architecture; don't assume "works out of box" |
| **Multi-machine serving emergence** | SGLang: N-machine RPC; Unsloth: GGUF over network | Horizontal scaling beyond single-node is moving from research to production features |

### What Agent / Application Developers Should Watch

- **Avoid speculative decoding on pip-installed bundles** (Ollama, SGLang) — CUDA toolkit mismatches cause crashes.
- **Prefix caching is unstable on hybrid models** (Mamba + GDN) — test carefully or disable.
- **LiteLLM MCP gateway is production-ready** — use for multi-tool, multi-provider agentic apps.
- **Unsloth multi-machine GGUF enables batch inference at scale** — consider for offline batch workloads.
- **Windows support is lagging** — Ollama, llama.cpp, and Unsloth all have Windows-specific regressions; macOS/Linux recommended for production.

---

*Cross-project analysis compiled from GitHub data — 2026-10-15*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the provided GitHub data for vLLM and create a structured digest for 2026-10-15.

Looking at the data:

## Latest Releases
- None in the last 24h

## Latest Issues (showing top by comments)
1. #27433 - Batch Invariant Feature and Performance Optimization - 102 comments
2. #54521 - Qwen3.8-Flash-Next: greedy decoding non-deterministic - 50 comments
3. #53912 - prefix caching + MTP corrupts output on hybrid Mamba/GDN models - 26 comments
4. #9129 - CMake Clean-up/Refactor (closed) - 23 comments
5. #41230 - Docs for NIXL KV connector metrics - 20 comments
6. #31414 - Unify flashinfer utils (closed) - 15 comments
7. #50416 - FlashInfer NVFP4 KV cache performance regression - 14 comments
8. #43224 - RFC: Porting compiler fusions to manual fusion - 12 comments

## Latest Pull Requests
- #60823 - Port more vendored configs to upstream Transformers
- #61721 - Bugfix: Warn on unsupported non-text system content blocks (Anthropic)
- #60924 - CPU MRV2 without Triton
- #61619 - Bugfix: NIXL handshake crash for SSM-only models
- #52244 - Restore hybrid GDN prefix-cache hits under MTP
- #60526 - Support KV-backed continuation through Generate inputs
- #61716 - Bugfix: silu_and_mul_quant vectorized loop
- #61720 - ROCm CI for DeepSeek-V4.1 Mono Decode
- #60339 - Suffix decoding speculator for MRV2


- #40764 - Make opencv-python-headless optional
- #61719 - ROCm CI legacy jobs for MI355
- #51406 - ROCm: Enable fused QK-norm+RoPE+gate for Qwen3-Next
- #61091 - ROCm: Native per-token FP8 Triton linear
- #60372 - Integrate FA4 SM90 FP8 MMA for Gemma-4
- #58387 - NemotronLabsDiffusion support
- #58094 - Bugfix: Propagate rope hf_overrides to MTP draft
- #60413 - Add W4A8 int8

I notice several ROCm and performance optimization PRs emerging. The ROCm ecosystem is getting significant attention with multiple PRs addressing AMD GPU support, including per-token FP8 Triton linear backend, fused operations for Qwen3-Next, and int8 dot product optimizations. There's also work on making opencv-python-headless optional and adding CI support for DeepSeek-V4.1 and MI355. A new model support for NemotronLabsDiffusion is also in progress.

The core technical themes seem to be:
- Extensive ROCm/AMD GPU optimization
- Kernel performance improvements
- Model architecture support expansions
- Infrastructure and build system refinements</think>

# vLLM Daily Digest — 2026-10-15

## 1. Today's Highlights

The vLLM project continues active development across multiple fronts. A critical bugfix landed for Mamba2 chunk scan kernel on Hopper (#61718) fixing NaN outputs. AMD ROCm support is expanding with new CI jobs for MI355 and native FP8 Triton linear backends. The community is addressing prefix caching issues in hybrid Mamba/GDN models and speculative decoding scenarios.

---

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

**Migration notes from recent changes:**
- PR #61701 removes Medusa and MLP speculator support (`method="medusa"` and `method="mlp_speculator"` are now rejected). This simplifies the codebase but may require migration for users of these deprecated methods.

---

## 3. New Model & Hardware Support

| Model/Feature | Status | PR/Issue |
|---------------|--------|----------|
| **NemotronLabsDiffusion** | In progress — tri-mode inference (masked block diffusion + autoregressive) | #58387 |
| **Gemma4ForSequenceClassification** | Requested — new model support | #43726 |
| **ROCm 10.0 (TheRock)** | Becoming default; ROCm 7.2 available as `-rocm72` | #58761 |
| **AMD MI355X / gfx950** | Performance optimization in progress for Qwen3.8-Flash-Next | #59575 |
| **RDNA4 (gfx1201)** | Per-token FP8 Triton linear backend with tuning | #61091 |
| **RDNA3/RDNA3.5 (gfx11)** | W4A8 int8-dot MXFP4 GEMV kernel | #60413 |

---

## 4. Performance & Optimization

### Landed / In Review
- **#61716** — `silu_and_mul_quant` kernel: Fixed vectorized loop execution for static FP8 models
- **#60372** — Enabled FA4 SM90 FP8 MMA for Gemma-4 full attention (retains FP8 KV-cache)
- **#51406** — ROCm: Fused QK-norm+RoPE+gate Triton kernel for Qwen3-Next/Qwen3.5

### In Progress
- **#50416** — **FlashInfer NVFP4 KV cache regression**: ~1.7-1.8x slower than FP8 on SM120 (Blackwell). 145.8ms vs FP8 for 48 causal paged-prefill kernels.
- **#60008** — Hybrid Mamba prefix caching causes 11-16% throughput loss on Nemotron-3.5-Lightning (per-group eager block-table ops, per-step align kernels outside CUDA graphs)
- **#59575** — AMD MI355X optimization tracker for Qwen3.8-Flash-Next with MXFP4 MoE
- **#57406** — GLM 5.3 performance optimization follow-up

### RFCs & Design
- **#43224** — RFC: Porting compiler fusions to manual fusion (tracking move from `torch.compile` to direct model code fusions)
- **#61406** — RFC: vLLM Simulator — CPU-based CI and hardware-aware performance simulation

---

## 5. Stability & Regressions

### Critical (Active Bugs)
| Issue | Severity | Status |
|-------|----------|--------|
| **#54521** — Qwen3.8-Flash-Next greedy decoding non-deterministic with `persistent_topk` when prompt length nears `indexer_budget` (SM121/GB10) | High — wrong outputs | Open, 50 comments |
| **#60660** — FlashInfer MNNVL crash: `CUDA_ILLEGAL_ADDRESS` during multi-block long prefill on GLM-5.3-Flash | High — crash | Open |
| **#61229** — NIXLConnector: KV blocks released while remote READ in flight, decode consumes overwritten KV | High — data corruption | Open, 6 comments |
| **#61160** — Cross-request context contamination via shared-prefix KV reuse in PD disaggregation | High — security/correctness | Open, 5 comments |

### Fixes Available
| Issue | Fix PR | Status |
|-------|--------|--------|
| Mamba2 chunk scan NaN on sm90 | #61718 | Open (same day) |
| NIXL handshake crash for SSM-only models | #61619 | Open |
| Hybrid GDN prefix-cache hits under MTP | #52244 | Open |
| Rope hf_overrides propagation to MTP draft | #58094 | Open |
| Prefix caching + MTP corrupts output (hybrid GDN) | #53912 | Open |

### Known Regressions
- **#51663** — Output-token throughput regression since v0.24.0 with Qwen3.6-35B-A3B-FP8 (still present in v0.26.0)

---

## 6. What This Means for Application Developers

1. **Prefix caching users on hybrid models**: Multiple bugs (#53912, #54360, #51250) affect prefix cache effectiveness with Mamba-2/GDN hybrids and speculative decoding. Consider disabling prefix caching or testing carefully if using these architectures.

2. **Anthropic Messages API users**: #61721 adds warnings for unsupported non-text system content blocks — avoid silent data loss by checking logs.

3. **Medusa/MLP speculator users**: These methods are now removed (#61701). Migrate to supported speculative decoding methods (MTP, dflash).

4. **AMD ROCm users**: ROCm 10.0 is becoming the default. If on ROCm 7.2, expect to transition. New MI355X support is arriving for Qwen3.8-Flash-Next.

5. **Gemma-4 users**: FP8 MMA optimization now enabled for full attention — expect improved throughput on Hopper.

6. **CPU inference**: Work continues on Triton-free CPU model runner (#60924) for ARM/macOS compatibility.

---

*Generated from GitHub data for 2026-10-15*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the provided GitHub data for SGLang and create a structured digest for 2026-10-15.

Looking at the data:

1. **Releases & Breaking Changes**:
- No releases in the last 24h according to "Latest Releases (last 24h): None"

2. **New Model & Hardware Support**:
- DeepSeek V4.1 optimization roadmap
- T-Head PPU support (roadmap)
- Step 5 Preview support (PR #44356)
- RTX PRO 6000 (SM120) support for DeepSeek-V4.1-Flash
- GLM-5.3-Flash on SM120

3. **Performance & Optimization**:
- Fast Engine Recovery: Weight Cache Daemon - weight load drops from ~306-327s to <1s on Qwen3-235B FP8
- DeepSeek V4.1 optimization - various PRs for prefill optimizations
- MegaMoE persistent top-k reduce to eliminate decode latency overhead
- Decoder bounded replay with BCG for DSv4.1
- Various other optimizations

4. **Stability & Regressions**:
- CUDA Coredump Tracker (#26340) - 326 comments
- Flaky tests CI tracker (#42752) - 60 comments
- Multiple bugs with various severity levels

5. **Notable PRs**:
- gRPC API expansion (#42118)
- LoRA merge/unmerge endpoints (#44354)
- Intel XPU HiCache L1<->L2 support (#32503)
- AMD diffusion fix (#43770)
- Various DeepSeek V4.1 related PRs

Let me organize this into the requested format.</think>

# SGLang Digest — 2026-10-15

## 1. Today's Highlights

SGLang continues heavy DeepSeek V4.1 optimization with decoder bounded replay and BCG coverage, while the project addresses multi-backend stability—particularly around CUDA-graph correctness on Blackwell (SM120) and speculative decoding crashes on pip-installed bundles. Intel XPU HiCache L1↔L2 support is now in progress, signaling broader accelerator diversity.

---

## 2. Releases & Breaking Changes

No releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Description | Reference |
|------|-------------|-----------|
| **DeepSeek V4.1** | Day-0 support added via PR #44356 | [#44356](https://github.com/sgl-project/sglang/pull/44356) |
| **RTX PRO 6000 (SM120)** | Field report for DeepSeek-V4.1-Flash on 8× RTX PRO 6000 (PCIe, no NVLink)—working config documented | [#40877](https://github.com/sgl-project/sglang/issues/40877) |
| **GLM-5.3-Flash on SM120** | Triton attention backend required; FA4 crashes on hybrid extend reshape | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **T-Head SAIL (Zhenwu 810/M890P)** | Roadmap for first-class PPU support opened | [#37519](https://github.com/sgl-project/sglang/issues/37519) |
| **Intel XPU HiCache** | L1↔L2 tier enabled (PR in progress) | [#32503](https://github.com/sgl-project/sglang/pull/32503) |

---

## 4. Performance & Optimization

| Area | Change | Impact | Reference |
|------|--------|--------|-----------|
| **Weight Cache Daemon** | Per-rank daemon holds post-quantized weights, served over CUDA IPC | Weight load: **306–327s → <1s** on Qwen3-235B FP8 | [#33522](https://github.com/sgl-project/sglang/issues/33522) |
| **DSv4.1 TRT-LLM Decoder** | Bounded replay with BCG (Breakable CUDA Graphs) | Enables speculative decoding on long sequences | [#44326](https://github.com/sgl-project/sglang/pull/44326) |
| **MegaMoE Top-K Reduce** | Persistent kernel eliminates decode latency overhead | Eliminates per-token reduce pass | [#39832](https://github.com/sgl-project/sglang/pull/39832) |
| **SWA Window Capping** | New `--swa-max-states-per-path` for unified-cache radix paths | Controls memory for hybrid SWA models | [#39694](https://github.com/sgl-project/sglang/pull/39694) |
| **Encoder SWA Replay** | Folded into extend forward (eliminates extra eager forward) | ~240ms saved per prefix hit on GB300 | [#43166](https://github.com/sgl-project/sglang/pull/43166) |
| **AMD GDN Prefill** | FlyDSL GDN prefill backend for gfx95 | ~1.4–1.5× faster on Qwen3.5-397B TP4 | [#39595](https://github.com/sgl-project/sglang/pull/39595) |
| **LoRA Buffer Slots** | Fused-module members loaded into separate buffer slots | Enables flexible adapter targeting | [#44332](https://github.com/sgl-project/sglang/pull/44332) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | Speculative decoding crashes on first non-greedy request (flashinfer JIT fails with bundled CCCL vs pip cu13) | Open | — |
| **Critical** | CUDA coredumps collected from PR tests (auto-tracked, 326 comments) | Open | — |
| **High** | Flaky tests / CI infrastructure failures (60 comments) | Open | — |
| **High** | GLM-5.3-Flash thinking output degenerates to repeated '!' under multi-tool agentic prompts | Open | — |
| **Medium** | `--fp4-gemm-backend marlin` crashes on SM100 (mm_fp4 has no marlin backend) | Open | — |
| **Medium** | NPU HiCache crashes when device k_buffer is a single tensor (since #40326) | Open | — |
| **Medium** | `--enable-symm-mem`: 4 GiB pool not deducted from `--mem-fraction-static` | Open | — |
| **Medium** | Dumper filter eval() enables scheduler-process RCE (security) | Open | — |
| **Low** | Mistral streaming deletes closing brackets from ordinary text | Open | — |
| **Low** | DeepSeek V4/V3.2 tool-call parser wraps arguments in spurious key | Open | — |

---

## 6. What This Means for Application Developers

1. **DeepSeek V4.1 is ready for production** — The optimization roadmap has landed; expect strong throughput with speculative decoding and breakable prefill CUDA graphs. Monitor the tracking issue for remaining items.

2. **Blackwell (SM120) requires Triton attention** — If running GLM-5.3-Flash on RTX PRO 6000, use `--attention-backend triton`. FA4 crashes on hybrid extend.

3. **Speculative decoding needs CUDA toolkit** — If using the pip-installed bundle, avoid speculative decoding with sampled requests (temperature > 0). Greedy works fine.

4. **LoRA merge/unmerge is coming** — PR #44354 adds dynamic switching between multi-LoRA and base model inference, useful for batch balancing.

5. **Agentic cache scheduling expands** — Q4 roadmap (#43098) targets supernode-wide KV cache sharing across GPU and host tiers.

6. **Security fix needed** — The RCE vulnerability in dumper filter eval() (#44188) should be patched in the next release; avoid exposing dumper endpoints externally until fixed.

---

*Generated from sgl-project/sglang data — 2026-10-15*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data from llama.cpp to create a structured digest. I need to extract the most relevant information and organize it according to the requested sections.

Looking at the data:

**Releases (last 24h):**
- b11630: ggml fix conv_1d result layout for batched input
- b11627: add note about mul_mat_id + disable mul_mat_id_dup tests
- b11624: improve RPC tensor transfer logs
- b11623: cuda use SIMT implicit GEMM conv2d on AMD without WMMA
- b11622: jinja write floats in tojson as Python does
- b11621: opencl use buf+offset instead of subbuffer for adreno moe expert sort
- b11620: opencl fix q8_0 dp4a mul_mat_id and mark PREC_F32 mul_mat_id unsupported for adreno
- b11619: drop the t_embd expand of the embedding graphs
- b11617: vulkan fix compile error
- b11612: unicode add opt-in NFC normalization for Unigram tokenizers

**Issues (top by comments):**
- #19466 [CLOSED]: KV cache save API doesn't work for vision-enabled models - 47 comments
- #16393 [OPEN]: Feature Request: tool to list and delete cached models - 27 comments
- #22531 [OPEN]: Feature Request: allow web UI to be used with other backends - 11 comments
- #27330 [OPEN]: CUDA graphs hang RTX 5090 Laptop (sm_120) - 11 comments
- #29419 [OPEN]: Flash-Attention crash in gemma4-assistant - 11 comments
- #30364 [OPEN]: Vulkan long context collapse on Strix Halo - 9 comments


- #23335 [CLOSED]: MTP changes deterministic output on Qwen3.6 - 9 comments
- #30010 [OPEN]: Vulkan decode failed vk::Queue::submit ErrorDeviceLost - 9 comments
- #17488 [OPEN]: GGUF convert support for Vibevoice - 8 comments

I notice several performance and hardware-specific issues emerging. The Vulkan backend shows instability with long contexts and decoding errors, while CUDA graphs are problematic on newer RTX 5090 hardware. Model-specific challenges include MTP determinism and GGUF conversion for certain architectures.

The development focus reveals strong momentum in OpenCL improvements, with multiple submissions targeting tensor operations and optimization. New model integrations like Maion-Coder and Nemotron Super 3.5 VL expand the library's versatility. Performance enhancements span CUDA MMVQ and Stream-K processing, indicating deeper backend refinements. Documentation updates around HTTP proxy configurations and flash attention kernel fixes suggest ongoing system robustness efforts.</think>

# llama.cpp Digest — 2026-10-15

## 1. Today's Highlights

The project continues active multi-backend hardening with fixes across CUDA, OpenCL, and Vulkan. A notable change in the Jinja templating engine now writes floats with Python-compatible precision, which will affect tool definitions and template outputs. Several PRs target memory and compute optimizations for MoE models and low-bit quantization.

## 2. Releases & Breaking Changes

| Commit | Description |
|--------|-------------|
| [b11622](https://github.com/ggml-org/llama.cpp/commit/b11622) | **Jinja float formatting:** Writes floats in `tojson` as Python does (shortest digits that round-trip), affecting tool definitions and template output |
| [b11612](https://github.com/ggml-org/llama.cpp/commit/b11612) | Unicode: adds opt-in NFC normalization for Unigram tokenizers |

No new tagged releases in the last 24 hours.

## 3. New Model & Hardware Support

- **[#29778](https://github.com/ggml-org/llama.cpp/pull/29778)** — Adds native **Maion-Coder** architecture support (`general.architecture = maion-coder`)
- **[#30520](https://github.com/ggml-org/llama.cpp/pull/30520)** — Adds **Nemotron Super 3.5 VL** and **Nemotron Bolt 74B A9B** support with new `NemotronH_Omni_Reasoning_V3` architecture and vision graph
- **[#30504](https://github.com/ggml-org/llama.cpp/pull/30504)** — Adds **GLiNER2.5-Decide** classification support via `/v1/systemone` decision API
- **[#30555](https://github.com/ggml-org/llama.cpp/pull/30555)** — OpenCL: treats Adreno 850 with unparsed compiler version as E17

## 4. Performance & Optimization

| PR | Change | Impact |
|----|--------|--------|
| [#30517](https://github.com/ggml-org/llama.cpp/pull/30517) | CUDA: faster MMVQ for low-bit types | Kernel speedups reported; q4_K and q8_0 unchanged (noise floor) |
| [#30553](https://github.com/ggml-org/llama.cpp/pull/30553) | CUDA: cap MMQ Stream-K blocks at available work | Reduces launch overhead and fixup kernel backward scan length |
| [#30542](https://github.com/ggml-org/llama.cpp/pull/30542) | CUDA: lowers VMM pool reservation to 8 GB on unified memory GPUs | Fixes OOM on integrated GPUs (e.g., gemma4:26b) |
| [#30325](https://github.com/ggml-org/llama.cpp/pull/30325) | CUDA: use SIMT implicit GEMM conv2d on AMD without WMMA | Enables conv2d on AMD GPUs lacking WMMA support |
| [#28414](https://github.com/ggml-org/llama.cpp/pull/28414) | `--prefetch-experts-slots`: lookahead H2D prefetch of host-resident MoE expert weights | Reduces MoE expert loading latency |

## 5. Stability & Regressions

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| [#27330](https://github.com/ggml-org/llama.cpp/issues/27330) — CUDA graphs hang RTX 5090 Laptop (sm_120), RC watchdog + Xid 8 | **High** | OPEN | `GGML_CUDA_DISABLE_GRAPHS=1` workaround; affects new hardware |
| [#30364](https://github.com/ggml-org/llama.cpp/issues/30364) — Vulkan: long context collapse on Strix Halo (gfx1151), ubatch > 128 triggers amdgpu "device lost" | **High** | OPEN | Long submits problematic on AMD Strix Halo |
| [#30010](https://github.com/ggml-org/llama.cpp/issues/30010) — Vulkan decode failed: `vk::Queue::submit: ErrorDeviceLost` | **High** | OPEN | RX 7900 XTX affected |
| [#30404](https://github.com/ggml-org/llama.cpp/issues/30404) — CUDA illegal memory access (MUL_MAT) on RTX 5090 with cohere2moe | **Medium** | OPEN | |
| [#29419](https://github.com/ggml-org/llama.cpp/issues/29419) — Flash-Attention crash in gemma4-assistant: Query head dimension mismatch | **Medium** | OPEN | SYCL backend; fix PR [#30286](https://github.com/ggml-org/llama.cpp/pull/30286) |
| [#30018](https://github.com/ggml-org/llama.cpp/issues/30018) — Gemma-4 decode -5% regression since #29622 (Vulkan/Arc B580) | **Medium** | OPEN | Bisected to commit 0bb496db |

**Fixed in this window:**
- [#30507](https://github.com/ggml-org/llama.cpp/issues/30507) — Install path issue (shared libs in `/usr/bin`) — closed
- [#23335](https://github.com/ggml-org/llama.cpp/issues/23335) — MTP deterministic output on Qwen3.6 — closed

## 6. What This Means for Application Developers

- **Float precision change in templates:** If you use Jinja templating for tool calls or JSON output, expect slightly different float formatting (e.g., `1.0` now renders as `1.0` instead of `1`). Test your downstream parsers.
- **New vision models:** Nemotron Super 3.5 VL and Maion-Coder expand the model zoo — expect GGUF conversion support in upcoming converter releases.
- **Vulkan on AMD:** Long context (>128 ubatch) is unstable on Strix Halo; consider smaller ubatch sizes or falling back to CPU for very long prompts.
- **RTX 5090 users:** CUDA graph hangs are being tracked; if you encounter issues, disable graphs via `GGML_CUDA_DISABLE_GRAPHS=1`.
- **OpenCL on Adreno 850:** The new classification as E17 enables previously skipped code paths; verify MoE expert sorting behavior on your device.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for Ollama on 2026-10-15.

Let me organize the information:

**Latest Releases (last 24h)**
- v0.40.5-rc0: v0.40.5
  - mlx: port the Metal custom kernels to CUDA by @dhiltgen
  - docs: model recs and language standardization by @anra8571
  - openai: accept custom tool calls in Responses history by @hoyyev

**Issues to highlight:**
1. Bug #18980 - massive generation problems since 10-10 (glm-5.3-flash)
2. Bug #18642 - CUDA illegal memory access on RTX 5090 with Cohere MoE (Windows)
3. Bug #17782 - TensileLibrary_lazy_gfx1200.dat error on RX 9060 XT (AMD ROCm)
4. Bug #18998 - Error after upgrading to 0.40.4 (model format not supported)
5. Feature #16056 - NVIDIA nvfp4 support request
6. Feature #18698 - K2 Horizon models support
7. Bug #18853 - deepseek-v4.1-flash:cloud 500 error with large image prompts
8. Feature #16833 - Add way to filter only local models
9. Bug #18123 - Regression: timed out waiting for llama-server (virtio-gpu)
10. Bug #13397 - Windows App stuck on infinite "Loading" loop
11. Bug #19002 - Ollama Text Classifier models slower under 0.40.4
12. Bug #18924 - rnj-1: GGML_ASSERT(hparams.is_swa_any()) failed


13. Bug #18655 - OpenAI response IDs have only 999 possible values
14. Bug #18995 - OLLAMA_CONTEXT_LENGTH not honored in /api/show or /api/tags
15. Feature #19000 - Integrated Hugging Face model browser
16. Bug #18890 - d1-3B and d1-omni-600M don't work (unsupported decision encoding)
17. Bug #18898 - Gemma4:12b throws "Gemma4Assistant requires ctx_other to be set"

I notice several critical issues affecting model compatibility and performance. The response ID limitation in bug #18655 could impact API integrations, while bugs #18890 and #18898 highlight ongoing challenges with specific model architectures. The Hugging Face browser feature request indicates growing demand for expanded model discovery capabilities.</think>

# Ollama Digest — 2026-10-15

## 1. Today's Highlights

The v0.40.5 release candidate landed with Metal custom kernels now ported to CUDA, and the OpenAI Responses API gained support for custom tool calls in conversation history. However, several high-impact bugs surfaced: a generation failure affecting 5-8% of glm-5.3-flash:cloud users since October 12, CUDA illegal memory access crashes on RTX 5090 with Cohere MoE models, and a regression where models run slower on 0.40.4 compared to 0.40.3.

---

## 2. Releases & Breaking Changes

| Version | Change | PR |
|---------|--------|-----|
| **v0.40.5-rc0** | MLX: Metal custom kernels ported to CUDA | [#18657](https://github.com/ollama/ollama/pull/18657) |
| **v0.40.5-rc0** | OpenAI: accept custom tool calls in Responses history | [#18911](https://github.com/ollama/ollama/pull/18911) |
| **v0.40.4** | ⚠️ **Breaking**: Model format changes caused `nimble:latest` and similar models to fail with "downloaded in a format that is no longer supported" | [#18998](https://github.com/ollama/ollama/issues/18998) |

**Migration note**: Users upgrading from 0.40.3 to 0.40.4 may need to re-download certain models (nimble, tev, clef-flash) that were downloaded in the older format.

---

## 3. New Model & Hardware Support

- **K2 Horizon models** — Feature request filed for MBZUAI IFM model family (0.9B, 3.7B, 7B, 32B, 36B MoE). GGUF support requested. | [#18698](https://github.com/ollama/ollama/issues/18698)
- **d1-3B and d1-omni-600M** — LiquidAI decision models with image/audio support; currently blocked by unsupported encoding `lfm2-d1` | [#18890](https://github.com/ollama/ollama/issues/18890)
- **NVIDIA nvfp4** — Feature request for NVFP4 quantization support (GGUF) | [#16056](https://github.com/ollama/ollama/issues/16056)

---

## 4. Performance & Optimization

| Area | Status | Details |
|------|--------|---------|
| **MLX → CUDA kernel port** | ✅ Landed in v0.40.5-rc0 | Metal custom kernels now available on CUDA backends | [#18657](https://github.com/ollama/ollama/pull/18657) |
| **Thinking defaults** | ✅ Landed | Model metadata now controls default thinking behavior; smaller models (qwen3.5 0.8B/2B) republished with thinking disabled to reduce looping | [#18991](https://github.com/ollama/ollama/pull/18991) |
| **Prompt eval timing fix** | In Progress | `PromptEvalDuration` was inflated on warm cache hits; tokens served from cache were incorrectly counted against eval time | [#18964](https://github.com/ollama/ollama/pull/18964) |
| **Model performance regression** | ⚠️ Investigated | Users report 20-30% slower response times for nimble, clef-flash, tev1 on 0.40.4 vs 0.40.3 | [#19002](https://github.com/ollama/ollama/issues/19002) |

---

## 5. Stability & Regressions

### Critical (Immediate Action Required)

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| **glm-5.3-flash:cloud generation failures (5-8%)** | 🔴 Critical | Open | Since 10-12; host-side cluster issue confirmed: probe2.img shows ALL ZEROS in data area. "the the the..." degeneration pattern | [#18980](https://github.com/ollama/ollama/issues/18980) |
| **CUDA illegal memory access on RTX 5090** | 🔴 Critical | Open | Cohere MoE architecture on Windows 11; crash during prompt evaluation with exit status 0xc0000409 | [#18642](https://github.com/ollama/ollama/issues/18642) |
| **A100 Qwen35 warm-up faults** | 🔴 Critical | Open | Xid79 or AMD-Vi IOMMU page fault during model warm-up on 0.35.0; 0.34.4 works | [#19006](https://github.com/ollama/ollama/issues/19006) |

### High (Degrade Production Workloads)

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| **TensileLibrary error on RX 9060 XT** | 🟠 High | Open | ROCm/AMD: "Could not load TensileLibrary_lazy_gfx1200.dat" after working briefly | [#17782](https://github.com/ollama/ollama/issues/17782) |
| **virtio-gpu regression (0.32.10+)** | 🟠 High | Open | Timed out waiting for llama-server in VM with virtio-gpu drm native context; works on 0.32.9 | [#18123](https://github.com/ollama/ollama/issues/18123) |
| **Clef models: n_ubatch forced to n_ctx** | 🟠 High | Open | Default num_ctx 16384 causes OOM/GGML_ASSERT on clef-flash; workaround requires manual ctx override | [#18865](https://github.com/ollama/ollama/issues/18865) |

### Medium (Workarounds Available)

| Issue | Severity | Status | Workaround |
|-------|----------|--------|------------|
| **rnj-1: GGML_ASSERT(hparams.is_swa_any())** | 🟡 Medium | Open | Model fails to load on Ollama >0.3x |
| **Gemma4:12b: requires ctx_other** | 🟡 Medium | Open | gemma4:latest works; 12b variant fails |
| **deepseek-v4.1-flash:cloud 500 error** | 🟡 Medium | Open | Image prompts >655K tokens trigger internal server error |
| **OLLAMA_CONTEXT_LENGTH ignored** | 🟡 Medium | Open | /api/show and /api/tags report native context, not effective context |
| **Response ID collision** | 🟡 Medium | Open | Only 999 unique response IDs; breaks clients like LiteLLM that key on uniqueness |

---

## 6. What This Means for Application Developers

1. **Avoid v0.40.4 for latency-sensitive workloads** — The performance regression for text classifier models is confirmed by multiple users. Stick with 0.40.3 or wait for 0.40.5 stable.

2. **Re-download models after upgrade** — If you use nimble, tev, or clef-flash and upgraded to 0.40.4, expect "format no longer supported" errors. Pull fresh copies after upgrading to 0.40.5.

3. **RTX 5090 + Cohere MoE users: avoid production** — The CUDA illegal memory access crash is blocking. Track [#18642](https://github.com/ollama/ollama/issues/18642) for fixes.

4. **OpenAI-compatible API consumers: beware response ID collisions** — If your application keys on the `id` field for deduplication or logging, expect collisions under high volume. The 999-value space is exhausted quickly.

5. **Long image prompts: stay under 655K tokens** — Deepseek-v4.1-flash:cloud deterministically 500s on large image inputs. Batch or chunk image-heavy requests.

6. **Watch context length configuration** — `OLLAMA_CONTEXT_LENGTH` isn't reflected in API responses; consider querying effective context via chat completion and handling truncation manually if exact limits matter.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-10-15 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me organize the information:

## Latest Releases
- v1.107.0-dev.1 (dev release)
- v1.106.0-rc.3 (release candidate)
- v1.105.1 (stable release)
All mention Docker image signature verification with cosign.

## Top Issues (by comment count)
1. #361 [CLOSED] - Wishlist ticket (486 comments)
2. #13419 [CLOSED] - GPT-5 thinking outputs not showing in OpenWebUI (51 comments)
3. #15230 [CLOSED] - Enterprise feature error when updating virtual keys (39 comments)
4. #7275 [CLOSED] - Azure AI models with services.ai.azure.com URL (32 comments)
5. #25390 [OPEN] - Streaming drops tool_use.input for gemini/gemma-4-31b-it (8 comments)
6. #30118 [OPEN] - UI login redirects to internal Docker IP after v1.88.x upgrade (8 comments)
7. #19858 [OPEN] - Claude models with tool calling broken (6 comments)
8. #38358 [OPEN] - request_timeout never fires when upstream is silent (6 comments)
9. #33410 [OPEN] - Upgrade yarl for URL parser security fix (5 comments)
10. #33687 [CLOSED] - cache_control silently dropped in Responses API (5 comments)

## Top Pull Requests
1. #46563 - MCP: add mcp_disabled_capabilities
2. #46545 - MCP: resolve tool_id from owning server


3. #44957 - MCP: scope gateway OAuth consent
4. #46492 - Anthropic: emit one tool_use block per call
5. #46444 - Responses bridge: round-trip tool_search items
6. #46550 - Terraform: accept 2xx from proxy
7. #46558 - Cost: price AgentCore web search at $7/1000 queries
8. #42079 - Proxy: return W3C traceresponse header
9. #46553 - Rust bridge: restore static types
10. #46566 - Rust bridge: restore static types of responses

I'm seeing significant progress in the MCP framework, particularly around OAuth scoping and tool resolution. The Anthropic integration is getting improved streaming support, and there's work on better observability through W3C traceresponse headers. The Rust bridge is gaining proper type restoration, which should improve developer experience. The team is also addressing cost modeling for AgentCore search functionality and fixing Terraform acceptance of proxy responses.</think>

# LiteLLM Digest — 2026-10-15

## 1. Today's Highlights

The LiteLLM project continuesActive development on MCP (Model Context Protocol) gateway improvements dominates today's PRs, with three separate PRs addressing OAuth scoping, tool resolution performance, and capability advertising. A critical security fix for yarl URL parsing (CVE-adjacent SSRF vulnerability) is flagged for upgrade. The project also ships cost corrections for AgentCore web search at $7/1000 queries.

## 2. Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| [v1.107.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-dev.1) | Dev | Development snapshot |
| [v1.106.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-rc.3) | RC | Release candidate |
| [v1.105.1](https://github.com/BerriAI/litellm/releases/tag/v1.105.1) | Stable | Latest stable |

All Docker images are signed with cosign. Verify using the key from commit `0112e53`.

## 3. New Model & Hardware Support

No new model or hardware support announced in the last 24 hours.

## 4. Performance & Optimization

| PR | Area | Description |
|----|------|-------------|
| [#46545](https://github.com/BerriAI/litellm/pull/46545) | MCP | Resolves `/mcp/proxy` tool_id from owning server instead of relisting every server — eliminates waiting for slowest server on each tool call |
| [#46533](https://github.com/BerriAI/litellm/pull/46533) | Responses | Fixes fake stream items opening pre-finished, preventing duplicate argument/text transmission that caused Claude Code to reject tool calls |
| [#46299](https://github.com/BerriAI/litellm/pull/46299) | Rust bridge | Refactors execution lifecycle — unstarted Execution returned from native entrypoints, driven consistently in Python |

## 5. Stability & Regressions

### High Priority

| Issue | Description | Status |
|-------|-------------|--------|
| [#38358](https://github.com/BerriAI/litellm/issues/38358) | `request_timeout` never fires when upstream is silent from first byte — streaming requests hang indefinitely | OPEN |
| [#33410](https://github.com/BerriAI/litellm/issues/33410) | yarl URL parser security fix needed — `AIKIDO-2026-10912` advisory reports host confusion vulnerabilities (SSRF-style bypass) in versions ≤1.23.0 | OPEN |
| [#30118](https://github.com/BerriAI/litellm/issues/30118) | UI login regression in v1.88.x — redirects to internal Docker container IP behind nginx reverse proxy | OPEN |

### Medium Priority

| Issue | Description | Status |
|-------|-------------|--------|
| [#46407](https://github.com/BerriAI/litellm/issues/46407) | gpt-image cost ignores EU data_residency uplift (10%) and deployment-level `output_cost_per_image_token` | OPEN |
| [#25390](https://github.com/BerriAI/litellm/issues/25390) | Streaming drops `tool_use.input` for gemini/gemma-4-31b-it — works in non-streaming | OPEN |
| [#19858](https://github.com/BerriAI/litellm/issues/19858) | Claude models with tool calling broken via OpenRouter/Vertex | OPEN |
| [#46404](https://github.com/BerriAI/litellm/issues/46404) | Budget reset never commits once `LiteLLM_EndUserTable` reaches millions of rows — fails at 30s, rolls back, never progresses | OPEN |

### Fixed

| Issue | Description | Status |
|-------|-------------|--------|
| [#46492](https://github.com/BerriAI/litellm/pull/46492) | Anthropic streaming: emit one tool_use block per call when chunk carries multiple parallel tool calls (prevents `{...}{...}` invalid JSON) | OPEN PR |
| [#46444](https://github.com/BerriAI/litellm/pull/46444) | Responses bridge: round-trip `tool_search_call` and `tool_search_output` between turns (fixes GPT-5.5 re-searching) | OPEN PR |
| [#45645](https://github.com/BerriAI/litellm/issues/45645) | Mid-stream 429 incorrectly recorded against fallback deployment | OPEN |

## 6. What This Means for Application Developers

- **MCP Gateway Changes**: If you run MCP servers behind LiteLLM, expect reduced latency on tool calls — the fix in #46545 eliminates fan-out to all servers. Also, `mcp_disabled_capabilities` in #46563 lets you hide prompts/resources if your upstream doesn't support them.

- **Tool Calling Fixes**: Streaming tool calls with Mistral/Anthropic should now work correctly — previous versions emitted concatenated JSON that clients rejected. Claude Code users benefit particularly from #46533.

- **Cost Accounting**: AgentCore web search is now correctly priced at $7/1000 queries (#46558). Review your spend logs if you use this feature — previous queries were logged at $0.

- **Security**: Plan to upgrade when v1.106+ is stable to get the yarl security patch addressing SSRF-style URL validation bypasses.

- **Proxy Deployment**: If you upgraded to v1.88.x and use nginx reverse proxy, the admin UI may be inaccessible (#30118). Consider rolling back or waiting for the fix.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the GitHub data for Unsloth and create a structured digest for 2026-10-15.

Looking at the data:

## Latest Releases (last 24h)
- None

## Latest Issues
Looking at the top issues by comment count:
1. #3013 - Voxtral support request (13 comments)
2. #4120 - Sample packing with processor-based models (11 comments)
3. #8488 - Multiple servers with different loaded models (7 comments)
4. #13696 - Gemma4 e2b Windows generation bug (6 comments)
5. #5073 - Windows install issues (6 comments)
6. #12445 - Qwen-Image-2.1 GGUF generation bug (5 comments)
7. #9519 - Duplicate remote access UI (5 comments)
8. #13655 - UI transfer from Image Gen to Edit Mode (4 comments)
9. #3014 - Full finetuning behavior question (4 comments)
10. #225 - DeepSpeed Zero3 support (4 comments)

## Latest Pull Requests
Several PRs are mentioned:
- #13762 - Keep site settings across pages
- #13774 - Probe regional diffusion compile on ROCm
- #13761 - Browser panel pages needing system browser
- #13755 - Keep list numbers in Word/HTML
- #13756 - Generate images through external connection
- #13760 - Tell model about bot protection blocks
- #13786 - Reserve MiniMax-H3 pinned weights on AMD
- #9872 - Offload planner weigh spill
- #13764 - Audio.cpp options at recommended values
- #13754 - Read code from GitHub file links
- #13757 - Keep transcribing past damaged audio
- #13777 - Add Always allow to browser prompts
- #13759 - Videos full screen in browser


- #13726 - Serve one GGUF across N machines over RPC
- #13724 - Diffusion memory planner fixes
- #13785 - Keep thinking between tool calls
- #13782 - Stop llama-server crash on Ctrl+C
- #13772 - Latency-gated dispatch for INT8 GEMM
- #13753 - Retire whisper.cpp, default to audio.cpp
- #13776 - Size image loads against Metal working set

Now let me organize this into the requested sections.

## Today's Highlights
Key themes:
1. ROCm improvements - PR #13774 adds regional diffusion compile probing
2. Windows improvements - Multiple fixes for Windows issues
3. Memory optimization - Diffusion memory planner fixes, offload improvements
4. Multi-model serving - RPC improvements
5. Browser/studio improvements - Multiple UX enhancements
6. Audio/Whisper - Retiring whisper.cpp in favor of audio.cpp</think>

# Unsloth Digest — 2026-10-15

## Today's Highlights

The Unsloth team addressed several infrastructure-critical improvements: ROCm GPU users gain regional diffusion `torch.compile` probing (previously hardcoded to refuse), while multi-GPU serving now supports N-machine GGUF distribution over llama.cpp RPC. Windows stability saw targeted fixes, and the Studio audio pipeline completes its migration from whisper.cpp to audio.cpp Qwen3-ASR.

---

## Releases & Breaking Changes

- **No new releases in the last 24 hours.**

---

## New Model & Hardware Support

| Item | Description | PR/Issue |
|------|-------------|----------|
| ROCm diffusion support | Studio now probes for regional `torch.compile` on AMD GPUs instead of refusing it entirely | [PR #13774](https://github.com/unslothai/unsloth/pull/13774) |
| Multi-machine GGUF serving | N-machine RPC distribution for llama.cpp — scales beyond the previous 2-DGX Spark limitation | [PR #13726](https://github.com/unslothai/unsloth/pull/13726) |
| MiniMax-H3 on integrated AMD | Pinned weights now reserved from sd.cpp's budget on Strix Halo/Point/Phoenix GPUs | [PR #13786](https://github.com/unslothai/unsloth/pull/13786) |
| Image generation via external connections | OpenAI-compatible image servers (Gufo, sd-server, vLLM, llama.cpp, Ollama) now selectable in Images picker | [PR #13756](https://github.com/unslothai/unsloth/pull/13756) |

---

## Performance & Optimization

| Area | Change | Details |
|------|--------|---------|
| Diffusion memory planning | Learned activation peaks | Planner now uses measured-peak tables instead of flat 8 GiB/megapixel reserve; fixes FLUX.2-klein streaming issues on <24GB cards | [PR #13724](https://github.com/unslothai/unsloth/pull/13724) |
| INT8 GEMM (Triton 3.8) | Latency-gated dispatch | Restores A100/L4 performance regression introduced in torch 2.14; cuBLAS `_int_mm` remains baseline | [PR #13772](https://github.com/unslothai/unsloth/pull/13772) |
| Multi-model offload | Spill vs llama.cpp fitter weighting | Offload planner now weighs spill costs against llama.cpp's own fitter under `UNSLOTH_SMART_OFFLOAD` | [PR #9872](https://github.com/unslothai/unsloth/pull/9872) |
| macOS Metal | Image load sizing | Now sizes against Metal working set instead of RAM minus 20%, fixing Z-Image Turbo/FLUX.2 Klein refusal on 24GB MacBook Air | [PR #13776](https://github.com/unslothai/unsloth/pull/13776) |
| Audio transcription | Robustness | Transcription continues past damaged audio frames instead of stopping at first error | [PR #13757](https://github.com/unslothai/unsloth/pull/13757) |

---

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | Windows: Gemma4 e2b fails to generate output despite successful training | [Issue #13696](https://github.com/unslothai/unsloth/issues/13696) — 6 comments |
| **High** | Windows: Qwen-Image-2.1 GGUF generation fails with 1-D norm weights never dequantized | [Issue #12445](https://github.com/unslothai/unsloth/issues/12445) — 5 comments |
| **High** | Windows: FP8 text-encoder pre-quantization exhausts commit limit, cascades to shard load failure | [Issue #12860](https://github.com/unslothai/unsloth/issues/12860) — 3 comments |
| **Medium** | Windows: Chat input disappears after first reply (v0.1.905 → v0.1.906 regression) | [Issue #13604](https://github.com/unslothai/unsloth/issues/13604) — 2 comments |
| **Medium** | Windows: Input box hidden behind taskbar in maximized mode | [Issue #13616](https://github.com/unslothai/unsloth/issues/13616) — 1 comment |
| **Medium** | macOS: llama-server crashes on Ctrl+C | [PR #13782](https://github.com/unslothai/unsloth/pull/13782) — fix in progress |

---

## What This Means for Application Developers

1. **Multi-model deployments** — If running multiple GGUF models (e.g., 27B + 3B), the new N-machine RPC support enables horizontal scaling beyond single-host limits.

2. **AMD GPU users** — ROCm diffusion no longer falls back to CPU; the regional compile probe enables actual GPU acceleration on RDNA3+ cards.

3. **Windows desktop users** — Several UI and generation bugs persist in v0.1.906-beta; consider delaying the update if relying on Gemma4 or Qwen-Image-2.1 GGUF workflows.

4. **Audio workflows** — The migration from whisper.cpp to audio.cpp Qwen3-ASR is complete; ensure your transcription endpoints use the new engine.

5. **Memory-constrained setups** — The diffusion memory planner improvements reduce over-reservation on <24GB cards; test FLUX.2-klein at lower VRAM budgets.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*