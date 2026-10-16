# AI Infrastructure Digest 2026-10-16

> Generated: 2026-10-16 00:40 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report across all five projects I've been tracking: vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth.

Let me synthesize the data I've already collected and organize it according to the requested sections:

1. Ecosystem Overview
2. Activity Comparison (table)
3. Model Support Race
4. Performance Frontier
5. Layer Positioning
6. Trend Signals

Let me go through each section carefully:

**1. Ecosystem Overview:**
Today shows active development across the inference stack. Major themes:
- DeepSeek V4.1-Flash optimization is a shared focus (vLLM, SGLang, Ollama)
- Muse Spark Open is being added across multiple projects (vLLM, SGLang, llama.cpp, Unsloth)
- AMD ROCm support continues to mature
- Performance optimization around low-latency decode, KV caching, and MoE efficiency

**2. Activity Comparison:**
From my digests:
- vLLM: ~10 issues, ~10 PRs, no release
- SGLang: ~10 issues, ~14 PRs, no release
- llama.cpp: v0.7.0 just released
- Ollama: no release in last 24h
- LiteLLM: v1.107.0-dev.2 and v1.106.0-rc.4 released
- Unsloth: v0.1.908-beta released

**3. Model Support Race:**
- Muse Spark Open: vLLM, SGLang, llama.cpp, Unsloth all added support
- Nemotron 3.5: LiteLLM, Unsloth
- GLM-5.3: vLLM, SGLang, Ollama
- FLUX.3: Unsloth only
- Various other models

**4. Performance Frontier:**
- vLLM: FA2 short-query attention, DSpark decode, iteration metrics


- SGLang: AMD FP8 GEMM, CUDA graphs, NIXL transfer
- llama.cpp: MoE cache, LiliCorr speculative decoding
- Ollama: Q2_0 GGUF
- LiteLLM: CLI startup, token counting, retry behavior
- Unsloth: GRPO, MoE quantization, multi-GPU

**5. Layer Positioning:**
I see a clear infrastructure hierarchy emerging across different AI frameworks. Each project occupies a specific niche in the AI development ecosystem, from low-level kernel optimizations to high-level application interfaces. The positioning reveals a layered approach to AI infrastructure, with specialized tools addressing different technological needs.

The key layers include core inference engines like vLLM, llama.cpp, and SGLang at the foundational level, with Ollama and LiteLLM providing abstraction and gateway capabilities. Training and fine-tuning are represented by Unsloth, creating a comprehensive development stack.

Emerging trends suggest significant advancements in inference efficiency, with multi-vendor GPU support and novel decoding strategies like LiliCorr and DSpark pushing performance boundaries. The ecosystem is rapidly evolving to support more complex AI workloads across different hardware platforms.</think>

# AI Infrastructure Digest — Cross-Project Report for 2026-10-16

---

## 1. Ecosystem Overview

Today's activity reflects a **converging inference stack** across five layers: serving engines (vLLM, SGLang, llama.cpp), local runtimes (Ollama), gateways/proxies (LiteLLM), and fine-tuning tooling (Unsloth). The dominant theme is **low-latency optimization for frontier MoE models** — DeepSeek V4.1-Flash and Muse Spark Open dominate roadmap items across all serving engines. Simultaneously, **multi-vendor GPU support** (NVIDIA Blackwell, AMD ROCm, Apple Metal) is accelerating, with each project landing vendor-specific kernels. The v0.7.0 llama.cpp release and LiteLLM's Docker signing push signal that the ecosystem is maturing toward production-grade reliability, while speculative decoding techniques (LiliCorr, DSpark, DSPatch) are emerging as the next latency frontier.

---

## 2. Activity Comparison

| Project | Issues (last 24h) | PRs (last 24h) | Releases |
|---------|------------------|----------------|----------|
| **vLLM** | ~10 (key: shared memory timeout, prefix cache contamination) | ~10 (FA2 attention, DeepSeek low-latency decode, iteration metrics) | None |
| **SGLang** | ~10 (GLM-5.3 DFLASH bugs, PD prefill + HiCache race) | ~14 (AMD FP8 fusion, NIXL packing, CUDA graph fixes) | None |
| **llama.cpp** | ~5 (Vulkan prompt collapse, RTX 5090 regression) | ~12 (MoE cache, Q2_0 GGUF, Hexagon tensor repacking) | **v0.7.0** (major) |
| **Ollama** | ~26 (GLM-5.3-flash failures, Windows tray loop, API tool definitions) | ~41 (Windows fixes, llama.cpp b11669 bump, 64KB GGUF alignment) | None |
| **LiteLLM** | ~10 (budget bypass, Ollama spend drops, GPT-5.4 empty responses) | ~10 (CLI startup, token counting, retry behavior, load-test kit) | v1.107.0-dev.2, v1.106.0-rc.4 |
| **Unsloth** | ~10 (Windows sandbox, ROCm crashes, hub filters) | ~15 (GRPO fix, MoE dequant, multi-GPU auto-load, FLUX.3) | v0.1.908-beta |

**Observations:**
- **llama.cpp** had the most impactful release (v0.7.0) with LiliCorr speculative decoding and MoE host caching.
- **LiteLLM** and **Unsloth** both shipped signed/released versions.
- **Ollama** has the highest issue volume, reflecting its broader user base and Windows/multi-platform surface area.
- **SGLang** leads in PR count, driven by AMD ROCm and NIXL transport optimizations.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|------------|--------|---------|---------|
| **Muse Spark Open** (latent MoE, 256 experts) | ✅ | ✅ | ✅ | — | — | ✅ |
| **DeepSeek V4.1-Flash** | ✅ (low-latency decode) | ✅ | ✅ | ✅ (field report) | ✅ | — |
| **GLM-5.3** | — | ✅ (DSpark bugs) | — | ✅ (failures) | — | — |
| **Nemotron 3.5** | — | — | — | — | ✅ | ✅ (Bolt on 24GB) |
| **FLUX.3 Image** | — | — | — | — | — | ✅ (INT8/FP8/GGUF) |
| **Qwen3-Next/Qwen3.5** (AMD) | ✅ (ROCm fused kernel) | — | — | — | — | — |
| **Step-5-Preview** (ROCm) | — | ✅ | — | — | — | — |
| **Q2_0 GGUF** | — | — | ✅ | ✅ | — | — |
| **Gemma4** (ROCm + CPU offload) | — | — | — | ✅ (segfault) | — | — |

**Winner: vLLM + SGLang + Unsloth** share the widest multimodal/MoE coverage. LiteLLM leads in API compatibility coverage but not model architecture support. llama.cpp is the only project shipping LiliCorr speculative decoding.

---

## 4. Performance Frontier

The optimization effort clusters around four vectors:

**1. Latent-Space MoE & Speculative Decoding**
- **llama.cpp**: LiliCorr speculative decoding + `--moe-cache-mib` (host-cached MoE experts, up to 2.2× decode speedup)
- **vLLM**: DSpark draft model + fused Markov loop for DeepSeek-V4.1-Flash on GB300
- **SGLang**: DSPARK speculative decoding + low-latency decode paths

**2. KV Cache & Prefix Caching**
- **vLLM**: Workload snapshots + GPU timing for Dynamo (iteration metrics)
- **SGLang**: HiCache storage prefetch timeout bound, PD prefill + HiCache load-back race fix
- **Unsloth**: KV preemption for parallel chats
- **llama.cpp**: 64KB DMA page alignment + O(1) token span seek

**3. Multi-Vendor GPU Kernels**
- **vLLM**: FA2 short-query attention over long cached contexts (SM8x)
- **SGLang**: AMD FP8 GEMM fusion for gfx950 (~13µs saved per projection)
- **llama.cpp**: Vulkan strided f16 KV copy optimization for AMD
- **Unsloth**: ROCm flash attention timing probe (auto-selection)

**4. Quantization**
- **llama.cpp / Ollama**: Q2_0 GGUF (tensor type 42)
- **Unsloth**: MoE selective dequant for 4-bit experts (correct memory accounting)
- **vLLM**: MoE forward custom ops stride validation

---

## 5. Layer Positioning

| Layer | Projects | Role |
|-------|----------|------|
| **Serving Engine** | **vLLM**, **SGLang**, **llama.cpp** | Low-level inference runtime, KV cache management, CUDA graph execution, tensor parallelism |
| **Local Runtime** | **Ollama** | End-user local deployment, model download/pulling, desktop/server integration |
| **Gateway / Proxy** | **LiteLLM** | Multi-backend routing, rate limiting, budget enforcement, cost logging, OpenAI-compatible proxy |
| **Fine-tuning / Training** | **Unsloth** | LoRA/QLoRA fine-tuning, GRPO training, quantization, multi-GPU orchestration |
| **Embedded / CLI** | **llama.cpp** (also serves this via `llama-cli`) | Standalone binary, no Python dependency, GGUF model usage |

**Key differentiators:**
- **vLLM** and **SGLang** compete directly on PagedAttention, prefix caching, and speculative decoding — vLLM leads in iteration metrics observability; SGLang leads in NIXL transport and AMD integration.
- **llama.cpp** occupies a unique position as both a serving engine and an embedded library — its GGUF format is consumed by Ollama and LiteLLM.
- **Ollama** abstracts llama.cpp + vLLM for end-users, trading performance tunability for ease-of-use.
- **LiteLLM** is orthogonal to inference engines — it routes *across* them, providing unified API surface and cost management.
- **Unsloth** is the only training-layer project in the set — its GRPO fixes and MoE quantization feed into downstream inference via GGUF export.

---

## 6. Trend Signals

### What Infrastructure Engineers Should Watch

| Signal | Implication |
|--------|-------------|
| **Speculative decoding goes mainstream** | LiliCorr (llama.cpp), DSpark (vLLM/SGLang), and DSPatch are competing approaches. Expect 1.5–2× latency gains but increased implementation complexity and memory overhead. Monitor for correctness bugs (SGLang's GLM-5.3 repetition issues). |
| **Multi-vendor GPU support is accelerating** | AMD ROCm, Apple Metal, and NVIDIA Blackwell (SM120) are all actively optimized. If you're platform-agnostic, prioritize engines with active vendor backends (vLLM, SGLang, Unsloth). |
| **MoE efficiency is a primary optimization target** | llama.cpp's `--moe-cache-mib` and vLLM's DeepSeek low-latency decode both target MoE decode throughput. If running Mixtral, Qwen3-MoE, or Muse Spark, these optimizations matter. |
| **Prefix caching correctness issues** | vLLM's cross-request contamination and SGLang's PD+HiCache race indicate prefix caching is fragile in disaggregated serving. Production deployments should disable `--enable-prefix-caching` until fixes land. |
| **Budget enforcement is unreliable in LiteLLM** | Issue #26672 shows max_budget can be bypassed. If using LiteLLM for rate/cost control, add application-layer spend alerts. |
| **Windows remains a second-class citizen** | Ollama's tray loop, Unsloth's sandbox issues, and llama.cpp's RTX 5090 regression all surface on Windows. If Windows is a hard requirement, test thoroughly before production. |
| **Agent/tool-use streaming is fragile** | Ollama's `/api/chat` empty tool definitions and llama.cpp's chunk-boundary tool-call parsing indicate streaming edge cases. Test agent workflows end-to-end. |

### What Agent / Application Developers Should Watch

- **Model choice for agents**: Muse Spark Open is being added everywhere — good for multimodal agents. GLM-5.3 has known DFLASH bugs — avoid for production reasoning agents until fixed.
- **Quantization format convergence**: Q2_0 GGUF is now supported across llama.cpp, Ollama, and LiteLLM — enables consistent quantized model deployment.
- **Fine-tuning + inference gap**: Unsloth's GRPO fix matters for anyone training reward models — ensures training weights stay in sync with inference.
- **Gateway reliability**: LiteLLM's spend-log drops with Ollama backends mean billing may be underreported — reconcile with upstream provider logs.

---

*Cross-project synthesis based on GitHub data for 2026-10-16.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to create a vLLM digest for 2026-10-16 based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me go through the issues and PRs:

**Latest Releases**: None in the last 24h

**Key Issues (by comment count)**:
1. #35465 - Bug: No available shared memory broadcast block (54 comments)
2. #38175 - RFC: Support ViT Full CUDA Graph (35 comments)
3. #56851 - RFC: Request level text and derender output (25 comments)
4. #31624 - Bug: ModelOpt Llama-4 Checkpoints Take 5+ minutes to load (25 comments)
5. #21231 - Bug: 100% CPU on Ray distributed pipeline parallel (22 comments)
6. #57149 - ROCm AMD Qwen3.8-2.4T-A95B Performance Optimization (20 comments)
7. #48297 - RFC: LoRA Correctness and Lifecycle for RL Training (19 comments)
8. #43224 - RFC: Porting compiler fusions to manual fusion (13 comments)
9. #53726 - Silent CUDA IMA in hybrid GDN + MTP (12 comments)
10. #38147 - RFC: Endpoints to Retrieve User Configuration and Runtime Data (11 comments)

**Key PRs**:
1. #61691 - Feature: Add workload snapshots to iteration metrics
2. #61690 - Feature: Add optional GPU timing to iteration metrics
3. #52061 - Feature: Export FPM v1 from completed iteration metrics
4. #47630 - Bugfix: Respect allowed_token_ids in beam search
5. #61784 - Perf: FA2 faster short-query attention over long cached contexts


6. #52244 - Bugfix: Restore hybrid GDN prefix-cache hits under MTP spec decoding
7. #51406 - ROCm: Enable fused QK-norm+RoPE+gate Triton kernel for Qwen3-Next/Qwen3.5
8. #61749 - Bugfix: Require exact strides for moe_forward custom ops
9. #61869 - Perf: DSpark draft on low-latency decode paths
10. #61868 - Perf: NVIDIA low-latency decode for DeepSeek-V4.1-Flash on GB300

I'm tracking several performance optimizations and bug fixes across different model architectures. The work spans attention mechanism improvements, prefix caching enhancements, and specialized decoding strategies for high-performance inference.

The new model support includes Muse Spark Open and Step-5-Preview on ROCm. I'm seeing significant developments in speculative decoding for DeepSeek-V4.1-Flash, with low-latency decode path optimizations targeting GB300 hardware. Performance improvements are focused on reducing query latency over extended cached contexts and implementing fused kernel operations.

Key performance areas involve MoE forward optimization, addressing regression in decode performance, and fixing potential NaN issues in Mamba2 chunk scan kernels on SM90 architecture. Stability efforts are concentrating on resolving shared memory broadcast block timeouts and ModelOpt checkpoint loading challenges.

Emerging focus areas include LoRA support for RL training, Vision Transformer CUDA Graph enhancements, and request-level text rendering/derendering. Additional work involves exploring MonoKernel standards, developing CPU-based simulation environments, and refining routed expert capture with pipeline parallelism.</think>

# vLLM Daily Digest — 2026-10-16

## 1. Today's Highlights

Today's activity centers on performance optimizations for large-scale inference, particularly around DeepSeek-V4.1-Flash low-latency decode paths on GB300 and AMD ROCm GPU optimizations. Several correctness bugs affecting prefix caching, LoRA application, and MoE backends were reported. No new releases in the last 24 hours.

---

## 2. Releases & Breaking Changes

**No new releases** in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Description | PR/Issue |
|------|-------------|----------|
| **Muse Spark Open** | New model support added with speculative decoding, quantization, and tool-calling | [#61879](https://github.com/vllm-project/vllm/pull/61879) |
| **Step-5-Preview on ROCm** | AMD backend support for stepfun-ai/Step-5-Preview (SM90/SM103) with Triton kernels for compressed sparse attention | [#61837](https://github.com/vllm-project/vllm/pull/61837) |
| **NVIDIA Nemotron 3.5 ASR Streaming** | Feature request for 600M-parameter multilingual streaming ASR model support | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **Phi4Flash in V1** | Feature request to port Phi4Flash from V0 to V1 engine | [#23957](https://github.com/vllm-project/vllm/issues/23957) |
| **GLM-5.3 Performance** | Ongoing optimization work for GLM 5.3 architecture | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **Kimi K3 Performance** | Active performance optimization track (5 PRs merged, 1 pending) | [#50587](https://github.com/vllm-project/vllm/issues/50587) |

---

## 4. Performance & Optimization

### Landed / In Progress

| Optimization | Details | PR |
|--------------|---------|-----|
| **FA2 Short-Query Attention** | Faster attention for short queries over long cached contexts on SM8x (A100, A10, L4, RTX 30/40) | [#61784](https://github.com/vllm-project/vllm/pull/61784) |
| **DeepSeek-V4.1-Flash Low-Latency Decode** | DSpark draft model with fused Markov loop and post-forward CUDA graph for GB300 | [#61869](https://github.com/vllm-project/vllm/pull/61869) |
| **NVIDIA Low-Latency Decode DSv4.1** | Opt-in low-batch decode paths for DeepSeek-V4.1-Flash on GB300 (TP4, DSpark) | [#61868](https://github.com/vllm-project/vllm/pull/61868) |
| **Iteration Metrics Enhancements** | Workload snapshots and optional GPU timing for Dynamo performance modeling | [#61691](https://github.com/vllm-project/vllm/pull/61691), [#61690](https://github.com/vllm-project/vllm/pull/61690) |
| **Fused QK-norm+RoPE+gate (ROCm)** | Triton kernel for Qwen3-Next/Qwen3.5 on AMD GPUs | [#51406](https://github.com/vllm-project/vllm/pull/51406) |
| **Routed Experts Capture with PP** | Pipeline parallelism support for R3 routed experts in MRv2 | [#61897](https://github.com/vllm-project/vllm/pull/61897) |

### Performance Regressions Reported

| Issue | Impact | Details |
|-------|--------|---------|
| **MoE decode ~15% slower on SM12x** | Regression | Since #56876 (DeepGEMM contiguous-layout alignment 128 instead of 64) | [#58624](https://github.com/vllm-project/vllm/issues/58624) |
| **ModelOpt Llama-4 Checkpoint Load** | 5+ min load time | Even from CPU page cache; root cause in state dict loading logic | [#31624](https://github.com/vllm-project/vllm/issues/31624) |
| **FlashInfer MoE OOM** | Blackwell (16GB) | Workspace allocated inside `profile_run` causes OOM on RTX 5070 Ti | [#49476](https://github.com/vllm-project/vllm/issues/49476) |

---

## 5. Stability & Regressions

### High Severity

| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| **Shared memory broadcast block timeout** | High | Open | — |
| **Cross-request context contamination** | High | Open | — |
| **Silent CUDA IMA in hybrid GDN + MTP k=3** | High | Open | — |

### Medium Severity

| Issue | Details | Reference |
|-------|---------|-----------|
| **LoRA on MLA kv_b_proj silently not applied** | Decode bypasses via absorption; prefill uses stale reference | [#48974](https://github.com/vllm-project/vllm/issues/48974) |
| **Text PEFT LoRAs silently no-op** | For wrapper models with LM mounted under `language_model` | [#48019](https://github.com/vllm-project/vllm/issues/48019) |
| **MoE forward garbage output** | Nemotron-3-Nano-30B-A3B-NVFP4 under `torch.compile` with FlashInfer backend | [#61749](https://github.com/vllm-project/vllm/pull/61749) (fixed) |
| **Hybrid GDN prefix-cache misses** | Under MTP spec decoding on Qwen3.5-122B-A10B | [#52244](https://github.com/vllm-project/vllm/pull/52244) |
| **DFlash2 sliding-window NaNs** | ROCm prefix attention with hybrid target model | [#53628](https://github.com/vllm-project/vllm/pull/53628) |
| **Mamba2 chunk scan NaN on sm90** | Autotuner selects buggy configs on Hopper | [#61718](https://github.com/vllm-project/vllm/pull/61718) (fixed) |
| **Ray pipeline 100% CPU** | On every node when using Ray distributed pipeline parallel | [#21231](https://github.com/vllm-project/vllm/issues/21231) |
| **Embeddings deadlock** | Truncated input follows short one in same request (CUDA build) | [#55427](https://github.com/vllm-project/vllm/issues/55427) (closed) |

---

## 6. What This Means for Application Developers

1. **Deployments on AMD GPUs**: Active ROCm optimization for Qwen3.8-2.4T and Flash-Next models on MI355X/gfx950. If you're running AMD hardware, expect ongoing improvements but monitor for regressions.

2. **DeepSeek-V4.1-Flash users**: The new low-latency decode paths on GB300 with DSpark speculative decoding can significantly improve latency. This is opt-in via `decode_backend=low_latency`.

3. **Prefix caching caution**: If using automatic prefix caching with prefill/decode disaggregation, be aware of the cross-request contamination bug ([#61160](https://github.com/vllm-project/vllm/issues/61160)). Use `--no-enable-prefix-caching` as a workaround until fixed.

4. **LoRA/PEFT users**: Silent failures can occur with certain model architectures (MLA models, wrapper models). Test adapters thoroughly in production scenarios.

5. **Beam search with `allowed_token_ids`**: If using this OpenAI-compatible parameter, be aware it's now being fixed in [#47630](https://github.com/vllm-project/vllm/pull/47630).

6. **SM12x MoE users**: A ~15% decode performance regression exists. Monitor workloads and consider pinning to older DeepGEMM if critical.

---

*Generated from GitHub data — vllm-project/vllm*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang (sgl-project/sglang) and create a structured digest for 2026-10-16.

First, let me identify the key items:

**Releases:**
- No releases in the last 24 hours

**Key Issues (by comment count):**
1. #42752 - CI Flaky tests and infrastructure failures (83 comments) - tracking issue
2. #21302 - AITER-Upgrade PR readiness (38 comments)
3. #39499 - SGLang dLLM Serving Roadmap (20 comments)
4. #40877 - DeepSeek-V4.1-Flash on 8x RTX PRO 6000 (16 comments)
5. #23206 - RFC: Sglang non-GPU process rust migration (15 comments)
6. #40843 - GLM-5.3 with DFLASH speculative decoding bugs (15 comments)
7. #42012 - GLM-5.3-Flash on SM120: fa4 attention crashes (14 comments)
8. #8965 - Sglang Tracing: Fine-Grained Tracking (13 comments) - CLOSED
9. #23494 - AMD Development Roadmap Q2 2026 (11 comments) - CLOSED
10. #21065 - CI Maintenance Mode (11 comments) - CLOSED

**Key PRs:**
1. #44393 - Move CUDA build paths off Python 3.10
2. #44611 - Mooncake linker offloads with session tagging
3. #42229 - AMD: Fuse activation quant into FP8 GEMM on gfx950
4. #44592 - Unified memory: Prewarm compaction at startup
5. #44615 - NIXL: KV packing for TP-heterogeneous transfer
6. #44607 - CUDA-graph: Keep deepstack media prefills eager


7. #44614 - HiCache: Bound storage prefetch timeout
8. #44606 - Diffusion: Defer full GC collections
9. #44588 - DeepSeek related (wip)
10. #44613 - CI: NIXL storage test temp directory

I'll focus on extracting critical updates and technical insights from these PRs. The data reveals significant work in CUDA migration, memory management, and hardware-specific optimizations. Key themes include Python version compatibility, performance enhancements across different hardware architectures, and addressing potential infrastructure instabilities.

The technical landscape shows ongoing efforts to improve SGLang's robustness, with particular attention to AMD GPU support, CUDA graph optimizations, and memory caching strategies. Developers are systematically addressing performance bottlenecks and expanding platform compatibility.</think>

# SGLang Digest — 2026-10-16

## 1. Today's Highlights

The SGLang project is advancing multi-vendor GPU support and inference optimization. AMD contributors landed performance work on gfx950 FP8 GEMMs, while the team fixed CUDA-graph issues with deepstack media prefills for Qwen3-VL. CI infrastructure continues to receive attention, with a dedicated tracker for flaky tests and a Python 3.10 deprecation PR in progress.

---

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Description | Link |
|------|-------------|------|
| **DeepSeek-V4.1-Flash on SM120** | Production field report for 8× RTX PRO 6000 (96GB, PCIe-only, no NVLink) — working topology and measured throughput documented | [#40877](https://github.com/sgl-project/sglang/issues/40877) |
| **GLM-5.3-Flash on SM120** | FA4 attention backend crashes on hybrid extend; Triton is the only working path | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **AMD MI355X (gfx950)** | Activation quant fused into small-M FP8 block-scale GEMM — reduces decode latency by ~13 µs per projection | [#42229](https://github.com/sgl-project/sglang/pull/42229) |

---

## 4. Performance & Optimization

| Area | Change | Details |
|------|--------|---------|
| **AMD FP8 GEMM** | Activation quant fusion | Fuses activation quant into block-scale GEMM on gfx950, eliminating separate kernel; ~4 µs saved per dense FP8 projection at low concurrency |
| **Unified Memory** | Compaction prewarm & page-envelope copy | Prewarms compaction at startup; copies full page envelopes by page ID — reduces first-use latency during serving |
| **NIXL Transfer** | KV packing for TP-heterogeneous | New packing scheme for Muse Spark Open workloads |
| **CUDA Graphs** | Deepstack media prefills | Keeps deepstack media prefills eager to avoid Qwen3-VL image/video replay issues |
| **HiCache** | Storage prefetch timeout bound | Times from first blocked admission poll instead of operation start — prevents indefinite wait across retries |
| **Diffusion Runtime** | GC deferral | Defers full GC while importing runtime — reduces startup time for diffusion schedulers |
| **MTP Verify Kernel** | SM90 support extended | CuTe DSL KDA verify kernel now runs on Hopper (SM90) |
| **JSON Schema Validation** | jsonschema-rs adoption | Replaces pure Python validator; ~12ms saved per 18-tool agent request |

---

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | **GLM-5.3 + DFLASH**: Severe repetition and degenerate loops in reasoning/output | Open — [#40843](https://github.com/sgl-project/sglang/issues/40843) |
| **High** | **DeepSeek-V4.1 + DSPARK**: Unbounded SparsePrefillWorkspace allocation OOM-crashes TP group | Open — [#41076](https://github.com/sgl-project/sglang/issues/41076) |
| **High** | **PD Prefill + HiCache**: Early cached-prefix send transfers KV before HiCache load-back finishes — stale KV on decode | Open — [#44070](https://github.com/sgl-project/sglang/issues/44070) |
| **Medium** | **Client disconnect during request**: Uncaught `asyncio.CancelledError` crashes entire engine | Open — [#39216](https://github.com/sgl-project/sglang/issues/39216) |
| **Medium** | **GLM-5.3 thinking output**: Degenerates into repeated '!' under multi-tool agentic prompts | Open — [#36669](https://github.com/sgl-project/sglang/issues/36669) |
| **Medium** | **NIXL PD abort**: Leaves default transfer workers waiting on healthy non-terminal handles | Open — [#44369](https://github.com/sgl-project/sglang/issues/44369) |
| **Medium** | **WeightChecker reset_tensors**: Fills `MRotaryEmbedding.axis_map` with random values | Open — [#44501](https://github.com/sgl-project/sglang/issues/44501) |
| **Low** | **Streaming client disconnect**: Zombie request decodes to max_tokens and floods logs | Fixed in progress — [#36333](https://github.com/sgl-project/sglang/issues/36333) |

---

## 6. What This Means for Application Developers

- **Python 3.10 deprecation incoming**: The project is moving remaining CUDA build paths to Python 3.11+ ([#44393](https://github.com/sgl-project/sglang/pull/44393)). Ensure your deployment environments use Python ≥3.11.

- **GLM-5.3 users**: If using DFLASH speculative decoding, expect repetition bugs in production — consider disabling DFLASH or using alternative models until the fix lands.

- **Multi-modal (Qwen3-VL) users**: The CUDA-graph fix for deepstack prefills ([#44607](https://github.com/sgl-project/sglang/pull/44607)) corrects image/video replay corruption — update when merged.

- **Agent/JSON tool users**: Schema validation is now ~12ms faster per request with 18 tools ([#43274](https://github.com/sgl-project/sglang/pull/43274)).

- **AMD MI355X users**: New FP8 GEMM optimization delivers measurable decode latency improvements at low concurrency.

- **RTX PRO 6000 (SM120) users**: DeepSeek-V4.1-Flash production configs are now documented ([#40877](https://github.com/sgl-project/sglang/issues/40877) — useful reference for PCIe-only topologies.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data and create a structured digest for llama.cpp as of 2026-10-16.

Key items to highlight:

1. **Release**: v0.7.0 just came out! This is a major release.

2. **Highlights from v0.7.0**:
- LiliCorr speculative decoding technique
- MTP for GLM5-Next
- New GPU cache for MoE experts kept in host memory (`--moe-cache-mib`, up to ~2.2x decode speedup)
- New models: K2 Horizon (dense and MoVA), Prism, Muse Spark Open (text, vision and audio)

3. **New model support**:
- Muse Spark Open (text, vision and audio) - latent space MoE
- maion-coder
- K2 Horizon models
- Various other additions

4. **Performance work**:
- Vulkan fixes for concurrent device init
- Metal BF16 flash attention
- MoE cache improvements
- Various optimizations

5. **Issues/Bugs**:
- Several Vulkan issues (prompt processing, memory)
- CUDA issues on RTX 5090
- Metal segfault with Nemotron
- Slot KV state restore issues

6. **PRs**:
- Hexagon tensor repacking rework
- Realtime transcription API
- Various model conversions
- Documentation improvements

Let me structure this into the requested format.</think>

# llama.cpp Digest — 2026-10-16

## 1. Today's Highlights

**llama.cpp v0.7.0 has been released**, introducing LiliCorr speculative decoding, MTP for GLM5-Next, and a new GPU cache for MoE experts kept in host memory (`--moe-cache-mib`) delivering up to **~2.2x decode speedup** when experts are offloaded. The release also adds support for Muse Spark Open (multimodal MoE architecture with 256 experts in latent space), K2 Horizon models, and several other architectures.

## 2. Releases & Breaking Changes

| Version | Key Changes |
|---------|-------------|
| **v0.7.0** (b11669) | LiliCorr speculative decoding; MTP for GLM5-Next; `--moe-cache-mib` for host-cached MoE experts; new models: K2 Horizon, Muse Spark Open, Prism; Metal BF16 flash attention kernel |
| **b11671** | Sync with ggml upstream |

**Migration notes:** The version bump to 0.7.0 includes changes to model loading for newer Granite Switch checkpoints (see PR #30621 for conversion fix).

## 3. New Model & Hardware Support

- **Muse Spark Open** — Latent space MoE with 256 experts in 4096 dimension, residual stream at 8192, top-8 sigmoid routing ([#30616](https://github.com/ggml-org/llama.cpp/pull/30616))
- **maion-coder** — New model architecture support ([#29778](https://github.com/ggml-org/llama.cpp/pull/29778))
- **K2 Horizon** — Dense and MoVA variants added
- **Qwen4exp** — Control vector support wired (`build_cvec` and `l_out` callback) ([#30589](https://github.com/ggml-org/llama.cpp/pull/30589))
- **Metal BF16** — Flash attention kernel variant for Apple Silicon ([#30491](https://github.com/ggml-org/llama.cpp/pull/30491))
- **Hexagon backend** — Q1_0 quantization support added ([#30122](https://github.com/ggml-org/llama.cpp/pull/30122))

## 4. Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **MoE decoding** | `--moe-cache-mib` GPU cache for host-memory experts | Up to **2.2x speedup** on decode when experts offloaded ([#29887](https://github.com/ggml-org/llama.cpp/issues/29887)) |
| **MoE | `--moe-cache-topk` to cap active experts on host-cached layers | Reduces PCIe H2D transfer overhead ([#30593](https://github.com/ggml-org/llama.cpp/pull/30593)) |
| **Vulkan/AMD** | Strided f16 KV copy optimization | Better memory channel utilization on AMD GPUs ([#27703](https://github.com/ggml-org/llama.cpp/pull/27703)) |
| **Vulkan** | Concurrent first-device init fix | Resolved crash in multi-threaded scenarios ([#29766](https://github.com/ggml-org/llama.cpp/pull/29766)) |
| **Server** | Prompt cache now saves only restorable slot states | Reduced unnecessary I/O ([#30498](https://github.com/ggml-org/llama.cpp/pull/30498)) |
| **Graph** | Non-empty graph handling without embeddings | Fixed allocation issues for embedding-only graphs ([#30522](https://github.com/ggml-org/llama.cpp/pull/30522)) |

**In progress:** Hexagon tensor repacking rework for improved weight handling ([#30635](https://github.com/ggml-org/llama.cpp/pull/30635))

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | CUDA: RTX 5090 (sm_120) decode at 76% of roofline vs 86% on Ada; MTP ~1.7x slower on Windows/Ollama | Open ([#28196](https://github.com/ggml-org/llama.cpp/issues/28196)) |
| **High** | Vulkan: Long context prompt processing collapses at ubatch >128 on Strix Halo; "device lost" errors | Open ([#30364](https://github.com/ggml-org/llama.cpp/issues/30364)) |
| **High** | Metal: Nemotron 3.5 Bolt 74B-A9B segfault in `ggml_metal_op_mul_mat_id` | Open ([#30610](https://github.com/ggml-org/llama.cpp/issues/30610)) |
| **Medium** | Draft-MTP halves prompt processing on multi-GPU layer split | Open ([#27428](https://github.com/ggml-org/llama.cpp/issues/27428)) |
| **Medium** | Vulkan: MoE slower with multi-device + CPU MoE after #29741 | Open ([#30547](https://github.com/ggml-org/llama.cpp/issues/30547)) |
| **Medium** | llama-server: VRAM exhaustion DoS via cache-prompt | Open ([#30577](https://github.com/ggml-org/llama.cpp/issues/30577)) |
| **Low** | Convert: Granite Switch block_count mismatch for newer checkpoints | Fixed ([#30621](https://github.com/ggml-org/llama.cpp/pull/30621)) |

## 6. What This Means for Application Developers

- **MoE inference just got faster**: If you're running Mixtral/Qwen3-MoE models with experts offloaded to host memory, enable `--moe-cache-mib` for significant decode throughput gains.
- **Multimodal support expanding**: Muse Spark Open adds another vision+audio model to the roster; the MTMD audio streaming API (#30629) enables real-time audio processing use cases.
- **Server improvements**: Slot state save/restore now filters to restorable states only, reducing wasted I/O; embedding endpoints now support the `dimensions` parameter for Matryoshka-style truncated embeddings.
- **Watch for regressions**: RTX 5090 users on Windows should monitor the CUDA decode regression; Vulkan users on AMD Strix Halo should avoid ubatch sizes >128 for long-context tasks.
- **Upcoming**: Realtime transcription WebSocket API in progress ([#30636](https://github.com/ggml-org/llama.cpp/pull/30636)); HF Hub model discovery UI for the server ([#29584](https://github.com/ggml-org/llama.cpp/pull/29584)).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze this GitHub data for Ollama and create a structured digest for 2026-10-16.

Looking at the data:

**Releases:**
- No releases in the last 24h

**Issues (26 total):**
Key issues to highlight:
1. #18980 - Massive generation problems since 10-10 (bug, 22 comments) - glm-5.3-flash model failing 5-8%
2. #16016 - Feature request: enable/disable thinking in UI
3. #18642 - CUDA illegal memory access on RTX 5090 with Cohere MoE (Windows)
4. #1599 - Delete partially downloaded models (CLOSED)
5. #18716 - Error pulling models: redirect target not allowed
6. #15582 - bge-m3 returns HTTP 500 with NaN error
7. #18123 - Regression: timed out waiting for llama-server
8. #17916 - n_threads ignores cgroup CPU quota (45x throughput collapse)
9. #18983 - minicpm-v4.7 fails on Windows (CLOSED)
10. #19002 - Text Classifier models slower in 0.40.4
11. #18842 - Can't pull/update models: max retries exceeded
12. #19040 - /api/chat renders EMPTY tool definitions
13. #19035 - ollama pull not working with socks proxy (CLOSED)
14. #18164 - Claude Desktop toggle not available on Windows
15. #18861 - gemma4 with think: false empty reply after tool response
16. #18942 - Go API: tool-call arguments lose numeric precision
17. #17666 - MLX runner requests serialized (CLOSED)
18. #17280 - Feature request: Concurrent requests in MLX engine


19. #19006 - A100 PCIe bus loss during Qwen35
20. #19034 - Seroval security vulnerability (SCA)
21. #18988 - Add Wirken to ollama launch
22. #19029 - Memory leak in desktop app
23. #19013 - Windows tray app starts ollama serve repeatedly
24. #19015 - ROCm gemma4 with CPU offload segfaults
25. #19021 - Cloud: mistral-large-4 rejects developer-role messages
26. #19025 - Feature request: folders for chats

**Pull Requests (41 total, showing top 20):**
Notable PRs include #19041 addressing the use of identifiers for --ask mode question keys, and #19036 which launched Clef in Ollama's cloud infrastructure.

Additional contributions span documentation updates like #19039 adding Alchemist Coder to community integrations and #19031 introducing wryme. Several PRs focus on GGUF improvements: #18967 adds q2_0 tensor types, #19037 implements 64KB DMA page alignment with O(1) token span seek, and #19024 updates llama to b11551 for MiniCPM-V 4.7 support. OpenAI compatibility work includes #19038 logging unrecognized request fields, #19003 handling foreign compaction in Responses history, and #19010 allowing Responses effort on non-thinking models. Platform fixes cover #18500 preventing orphaned runners on Windows and #19028 resolving tool-call opening tags split across chunk boundaries.

Additional contributions address MLX runner issues through #18813 returning disk-full errors during blob downloads, #18804 closing text items before streaming tool calls, and #17492 handling tool call values that are lone delimiters without panicking.</think>

# Ollama Digest — 2026-10-16

## 1. Today's Highlights

A quiet day on the release front—no new versions shipped—but active development across multiple fronts. Key items: a llama.cpp bump to b11669 brings Q2_0 GGUF support, several Windows-specific bugs are being addressed (orphaned runners, tray app loops), and there's a new security advisory for the seroval library. Performance regressions in 0.40.4 for text classifier models are being investigated.

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours
- llama.cpp bumped from b11521 → b11669 (PR #19032) — ships Q2_0 GGUF support and fixes MiniCPM-V 4.7 projector loading

## 3. New Model & Hardware Support

| Model / Hardware | Status | PR/Issue |
|------------------|--------|----------|
| **MiniCPM-V 4.7** (CLIP projector) | Fixed loading on Windows | PR #19024 (llama.cpp b11551) |
| **Q2_0 GGUF format** | Now supported (tensor type 42, file type 41) — needed for Prism ML's Bonfire | PR #18967 |
| **GGUF v4** | 64KB DMA page alignment + O(1) token span seek | PR #19037 |
| **Cohere MoE architecture** | Investigating CUDA illegal memory access on RTX 5090 (Windows) | Issue #18642 |
| **gemma4 with CPU offload** | ROCm: segfaults when experts offloaded to CPU; `GGML_CUDA_DISABLE_GRAPHS=1` workaround | Issue #19015 |

## 4. Performance & Optimization

| Area | Detail | Reference |
|------|--------|-----------|
| **Thread scheduling** | `n_threads` ignores cgroup CPU quota → 45x throughput collapse in CPU-limited containers | Issue #17916 |
| **Text classifier latency** | Regression suspected in 0.40.4 — models (nimble, clef-flash, tev1) appear slower than 0.40.3 | Issue #19002 |
| **MLX engine** | Still single-threaded; concurrent request support pending | Issue #17280 |
| **API logging** | OpenAI-compatible endpoints now log dropped/unrecognized fields at Info level | PR #19038 |

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | **Massive generation failures (5-8%)** with `glm-5.3-flash:cloud` — all-zero data in cluster 829 | Issue #18980 (22 comments) |
| **High** | **A100 PCIe bus loss** during Qwen3.5 warm-up/inference (0.34.4, 0.35.0) | Issue #19006 |
| **Medium** | **Windows tray app spawns `ollama serve` in tight loop** (~1/sec) when port 11434 already in use | Issue #19013 |
| **Medium** | **`/api/chat` renders empty tool definitions** — tool names echo as `""` / `{{ <nil> <nil> [] {}}}`; `/v1` route works correctly | Issue #19040 |
| **Medium** | **Go API loses numeric precision** in tool-call arguments | Issue #18942, PR #18941 |
| **Medium** | **SOCKS proxy regression** — `ollama pull` broken with proxy in 0.40.4, works in 0.34.4 | Issue #19035 |
| **Low** | **Memory leak** — context menu C strings never freed in desktop app | Issue #19029 |
| **Info** | **Security**: seroval `fromJSON()` type confusion (pre-1.5.3) | Issue #19034 |

**Fixed:**
- Partial model download cleanup now works (Issue #1599 closed)
- MiniCPM-V 4.7 Windows loading fixed

## 6. What This Means for Application Developers

1. **Windows users**: The tray app loop bug (#19013) is a known issue—if you run `ollama serve` manually, launch the tray app *first* to avoid the fork bomb.

2. **Tool-use apps**: If you're using the native `/api/chat` endpoint with tools, verify that tool definitions are arriving intact. The `/v1` OpenAI-compatible route is unaffected (#19040).

3. **Containerized deployments**: Watch for the cgroup thread-count bug (#17916) if you're running Ollama in Kubernetes/cgroups-limited containers—explicitly set `OMP_NUM_THREADS` or `n_threads` to avoid the 45x slowdown.

4. **Model pulls**: Cloudflare R2 redirect errors (#18716, #18842) and SOCKS proxy breakage (#19035) suggest ongoing issues with the model registry—consider retry logic or proxy configuration adjustments.

5. **Upcoming**: GGUF v4 alignment improvements (#19037) will enable faster model inspection via zero-copy mmap on supported systems.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for LiteLLM on 2026-10-16.

Key observations from the data:

**Releases:**
- v1.107.0-dev.2 and v1.106.0-rc.4 were released
- Both include Docker image signing with cosign

**Top Issues by engagement:**
1. #25429 - Bug: chatgpt/gpt-5.4 returns empty responses (23 comments)
2. #14004 - Bug: API blocks free models when budget exceeded (21 comments)
3. #26672 - Bug: Budget enforcement bypassed in v1.82.3 (21 comments) - OPEN
4. #27954 - Bug: Heavy RAM usage over time (13 comments) - OPEN
5. #32357 - Bug: /v1/messages adapter mis-encodes reasoning models (7 comments) - OPEN
6. #38358 - Bug: request_timeout never fires (7 comments) - OPEN
7. #46407 - Bug: gpt-image cost ignores data_residency uplift (5 comments) - OPEN

**Notable PRs:**
1. #46806 - feat(gateway): load-test kit, Docker build knobs and TCP_NODELAY
2. #46670 - fix(bedrock): grant sts:GetWebIdentityToken for claude_platform
3. #46748 - feat(mcp): accept ID-JAG as RFC 7523 jwt-bearer grant
4. #46747 - feat(sso): capture IdP id_token on Microsoft and Google logins
5. #46768 - fix(responses): write one spend-log row per native WebSocket turn
6. #46730 - fix(retries): honor Retry-After headers, apply exponential backoff


7. #46803 - perf(cli): start lite without initializing the litellm SDK
8. #46777 - feat(count_tokens): configurable token_count_framing

I've identified several high-priority engineering improvements. The team is focusing on performance optimization, particularly around CLI startup and token counting mechanisms. Key infrastructure enhancements include refining retry strategies with more intelligent backoff approaches and improving WebSocket spend logging precision. The OAuth and MCP authentication flows are receiving significant attention, with new ID-JAG and identity token capture implementations.</think>

# LiteLLM Digest — 2026-10-16

## 1. Today's Highlights

Two new releases landed (`v1.107.0-dev.2` and `v1.106.0-rc.4`), both with Docker image signature verification via cosign. The community is actively debugging budget enforcement bypasses and memory leaks, while the team pushes forward on cross-app authentication (ID-JAG, SAML assertions) and native Responses API improvements.

---

## 2. Releases & Breaking Changes

| Version | Notes |
|---------|-------|
| [v1.107.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-dev.2) | Dev release; Docker images cosigned |
| [v1.106.0-rc.4](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-rc.4) | Release candidate; Docker images cosigned |

**All LiteLLM Docker images are now signed with cosign** — verify with the key from commit `0112e53`.

---

## 3. New Model & Hardware Support

No new model or hardware support announcements in the last 24h.

---

## 4. Performance & Optimization

| PR | Description | Impact |
|----|-------------|--------|
| [#46803](https://github.com/BerriAI/litellm/pull/46803) | `perf(cli)`: start `lite` without initializing the full litellm SDK | CLI starts in ~0.1s vs 1.5–4s; ~20s saved on small VMs |
| [#46777](https://github.com/BerriAI/litellm/pull/46777) | `feat(count_tokens)`: configurable `token_count_framing` and `token_count_fallback_model`, with count source in response | Enables per-request token counting strategies; fixes Bedrock Haiku 5.5 / Sonnet 5.5 404s |
| [#46730](https://github.com/BerriAI/litellm/pull/46730) | `fix(retries)`: honor `Retry-After` headers, apply exponential backoff with jitter, filter transient errors | Retries no longer fire in <0.2ms; 401s不再重试 |
| [#46806](https://github.com/BerriAI/litellm/pull/46806) | `feat(gateway)`: load-test kit, Docker build knobs, `TCP_NODELAY` for customer proxy | Build time ~5 min (fast) vs ~13 min (LTO); latency toolkit |

---

## 5. Stability & Regressions

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| [#26672](https://github.com/BerriAI/litellm/issues/26672) — Budget enforcement bypassed for `key.max_budget` / `user.max_budget` in v1.82.3 | **High** | OPEN | Spend exceeding max_budget not blocked; no fix PR yet |
| [#27954](https://github.com/BerriAI/litellm/issues/27954) — Heavy RAM usage over time, pod crash | **High** | OPEN | Memory grows to max capacity on Kubernetes; likely memory leak |
| [#25429](https://github.com/BerriAI/litellm/issues/25429) — `chatgpt/gpt-5.4` returns empty responses, `completion()` bridge fails | **High** | CLOSED | SDK bug with Responses API; resolved |
| [#14004](https://github.com/BerriAI/litellm/issues/14004) — API blocks free (no-cost) models when budget exceeded | **Medium** | CLOSED | Fixed |
| [#46407](https://github.com/BerriAI/litellm/issues/46407) — `gpt-image` cost ignores EU data-residency uplift + deployment-level `output_cost_per_image_token` | **Medium** | OPEN | Two billing edge cases |
| [#42689](https://github.com/BerriAI/litellm/issues/42689) — Unauthenticated client controls spend log table size | **Medium** | OPEN | Each failed auth writes rows; caller decides table growth |
| [#46403](https://github.com/BerriAI/litellm/issues/46403) — SpendLogs rows silently dropped when provider reuses response IDs (Ollama) | **Medium** | OPEN | 10–46% request loss on Ollama backends |
| [#38358](https://github.com/BerriAI/litellm/issues/38358) — `request_timeout` never fires when upstream is silent from first byte | **Low** | OPEN | Streaming timeout not enforced |
| [#40780](https://github.com/BerriAI/litellm/issues/40780) — `openai/`-prefixed self-hosted models silently break multimodal via `/v1/messages` → Responses API | **Medium** | OPEN | Multimodal dropped silently for vLLM, SGLang, llama.cpp backends |

---

## 6. What This Means for Application Developers

1. **Budget enforcement is unreliable** — if you rely on `max_budget` for key/user limits, avoid v1.82.3 until #26672 is fixed. Consider adding spend alerts at the application layer.

2. **Ollama spend tracking is broken** — roughly half of Ollama-backed request logs may be silently dropped. If accurate usage accounting matters, verify your billing pipeline or wait for #46403.

3. **CLI is now fast** — the `lite` command startup dropped from seconds to sub-second; good for interactive kubectl aliases and rapid proxy restarts.

4. **Retry behavior improved** — `litellm.completion(..., num_retries=N)` now respects `Retry-After` headers and applies backoff. Unrecoverable 401s won't trigger loops.

5. **Docker image verification available** — if you pull LiteLLM images from registries, verify signatures with cosign for supply-chain security:
   ```bash
   cosign verify --key cosign.pub ghcr.io/berriai/litellm:<tag>
   ```

6. **Reasoning model streaming fragile** — if using GLM/DeepSeek-R1 via `/v1/messages` with Anthropic SDK, streaming deltas may produce empty content (#32357). Test thoroughly before production.

---

*Generated from GitHub data for 2026-10-16. Subject to change as issues evolve.*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate a structured English digest for Unsloth based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Let me go through the data:

1. **Latest Releases** - v0.1.908-beta with NVIDIA Nemotron 3.5 + Meta Muse Spark Open support
2. **Latest Issues** - Top issues by comment count
3. **Latest Pull Requests** - Recent PRs

Now I need to organize this into the requested sections:

1. **Today's Highlights** - 2-3 sentences
2. **Releases & Breaking Changes**
3. **New Model & Hardware Support**
4. **Performance & Optimization**
5. **Stability & Regressions**
6. **What This Means for Application Developers**

Let me analyze each PR and issue to extract the relevant information:

**Releases:**
- v0.1.908-beta: NVIDIA Nemotron 3.5 + Meta Muse Spark Open, text-diffusion LLMs, DeepSpeed training, better prompt caching for coding agents
- NVIDIA Nemotron 3.5 Bolt can run on 24GB memory

**New Model & Hardware Support:**
- NVIDIA Nemotron 3.5 models
- Meta Muse Spark Open
- FLUX.3 Image Klein (distilled and base) with INT8/FP8/GGUF support
- AMD improvements for Strix APU
- Multiple older models now load in 4bit instead of missing repo

**Performance & Optimization:**
- GRPO TRL weight sync fix
- bnb 4-bit MoE experts optimization
- GPU selection improvements for multi-GPU
- KV preemption for parallel chats
- ROCm flash attention timing probe
- Fix chat scrollbar freezes
- bfloat16, compile and TMA options from visible GPUs


- Security audit updates in unsloth-zoo 2026.10.6 and transformers 5.20.0

I've identified several critical infrastructure and stability improvements. The focus is on enhancing multi-GPU environments, addressing potential security vulnerabilities, and resolving complex hardware compatibility issues. Key areas include Windows sandbox security, installer configurations, and performance optimizations across different GPU architectures. The updates aim to improve system reliability, security, and efficiency for advanced machine learning deployments.</think>

# Unsloth Digest — 2026-10-16

## 1. Today's Highlights

Unsloth released **v0.1.908-beta** adding support for **NVIDIA Nemotron 3.5** and **Meta Muse Spark Open** models, alongside text-diffusion LLMs, DeepSpeed training, and improved prompt caching for coding agents. Multiple PRs landed to improve multi-GPU handling, ROCm/Strix APU compatibility, and Studio UI stability ahead of the next stable release.

---

## 2. Releases & Breaking Changes

| Version | Key Changes | Link |
|---------|-------------|------|
| **v0.1.908-beta** | NVIDIA Nemotron 3.5 + Meta Muse Spark Open support; text-diffusion LLMs; DeepSpeed training; better prompt caching for coding agents | [Release](https://github.com/unslothai/unsloth/releases) |

**Security Baseline Updated:** `unsloth-zoo 2026.10.6` and `transformers 5.20.0` scan findings reviewed — two new upstream releases moved previously reviewed findings out of the baseline. ([PR #13949](https://github.com/unslothai/unsloth/pull/13949))

---

## 3. New Model & Hardware Support

| Model / Hardware | Details | Link |
|------------------|---------|------|
| **NVIDIA Nemotron 3.5** | New model family support in Studio and Python API | [Guide](https://unsloth.ai/docs/models/nemotron) |
| **NVIDIA Nemotron 3.5 Bolt** | Runs on 24 GB VRAM | [Guide](https://unsloth.ai/docs/models/nemotron) |
| **Meta Muse Spark Open** | New open-weight model support | [Release](https://github.com/unslothai/unsloth/releases) |
| **FLUX.3 Image Klein** | Distilled and base variants with INT8 / FP8 / GGUF support | [PR #13933](https://github.com/unslothai/unsloth/pull/13933) |
| **Older Models Fixed** | Llama-3.1-Tulu-3-8B/70B, SOLAR-10.7B-v1.0, OpenThinker-7B, Hermes-3-Llama-3.1-405B, Pixtral-12B-Base now load in 4bit correctly | [PR #13941](https://github.com/unslothai/unsloth/pull/13941) |
| **AMD Strix APU** | Improved torch routing — deferred to discrete GPU when present; gfx1153 now warns instead of failing silently | [PR #13931](https://github.com/unslothai/unsloth/pull/13931) |

---

## 4. Performance & Optimization

| Area | Change | Link |
|------|--------|------|
| **GRPO Training** | Fixed TRL vLLM weight sync for TRL < 0.28 unless `fast_inference` shares weights — resolves training hangs | [PR #13911](https://github.com/unslothai/unsloth/pull/13911) |
| **MoE Quantization** | Opt-in `UNSLOTH_MOE_SELECTIVE_DEQUANT` now keeps 4-bit MoE experts outside compiled blocks for correct memory accounting | [PR #13946](https://github.com/unslothai/unsloth/pull/13946) |
| **Multi-GPU Auto-Load** | Automatic image/video loads now pick the freest GPU; GPU picks respect individual card capabilities | [PR #13928](https://github.com/unslothai/unsloth/pull/13928) |
| **NVIDIA MIG** | Studio now honors MIG UUID masks and sizes cards by slice rather than whole device | [PR #13927](https://github.com/unslothai/unsloth/pull/13927) |
| **ROCm Flash Attention** | Timing probe replaces hard-coded model table — flash_attn auto-selected when faster for model shapes | [PR #13792](https://github.com/unslothai/unsloth/pull/13792) |
| **bfloat16/Compile** | Decides bfloat16 support, torch.compile, and TMA options from *every visible* NVIDIA GPU, not just device 0 | [PR #13923](https://github.com/unslothai/unsloth/pull/13923) |
| **KV Cache** | KV preemption enables parallel chats to share one cache — reduces memory footprint for multi-user deployments | [PR #10301](https://github.com/unslothai/unsloth/pull/10301) |
| **Chat Scroll** | Disabled code line windowing by default — fixes scrollbar freezes during code rendering | [PR #13919](https://github.com/unslothai/unsloth/pull/13919) |
| **Prefilter** | Added `unsloth doctor --gpus` for multi-GPU preflight checks and `UNSLOTH_DEBUG_DISTRIBUTED` | [PR #13884](https://github.com/unslothai/unsloth/pull/13884) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix |
|----------|-------|--------|-----|
| **High** | Windows MXC Sandbox failure, unclear instructions | [Open #13656](https://github.com/unslothai/unsloth/issues/13656) | — |
| **High** | ROCm prebuilt binary crashes with "out of memory" on hipStreamCreateWithFlags — source build works | [Closed #12205](https://github.com/unslothai/unsloth/issues/12205) | Use source build as workaround |
| **Medium** | Image diffusion causes CUBLAS error during edit (Qwen-Image-2.1) | [Closed #13638](https://github.com/unslothai/unsloth/issues/13638) | — |
| **Medium** | ComfyUI models incorrectly trigger full download | [Closed #8950](https://github.com/unslothai/unsloth/issues/8950) | — |
| **Medium** | Hub filter "Only show models that fit" shows safetensors models exceeding VRAM | [Open #13945](https://github.com/unslothai/unsloth/pull/13945) | PR open |
| **Low** | Model Hub filters not working as expected | [Closed #13613](https://github.com/unslothai/unsloth/issues/13613) | — |

---

## 6. What This Means for Application Developers

- **Multi-GPU inference** is more robust: auto-load now picks the least-busy GPU, and MIG cards are properly sized — useful for deployment scenarios with shared GPU pools.
- **GRPO fine-tuning** stability improved on TRL < 0.28 — if you're using older TRL versions, test your training scripts after upgrading.
- **FLUX.3 Image** support adds image generation to Studio with INT8/FP8/GGUF quantizations — enables lower-VRAM image workflows.
- **KV preemption** reduces memory overhead for multi-user chat deployments — consider enabling `--preempt-ram` in llama-server for parallel chat scenarios.
- **New CLI tool** `unsloth doctor --gpus` helps diagnose multi-GPU peer-copy and collective hangs before they hit production.
- **Windows users**: the sandbox security fix ([PR #13942](https://github.com/unslothai/unsloth/pull/13942)) now prompts before writing outside the sandbox for arbitrary commands — plan for user-facing permission dialogs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*