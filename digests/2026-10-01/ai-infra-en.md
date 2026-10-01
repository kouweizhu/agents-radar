# AI Infrastructure Digest 2026-10-01

> Generated: 2026-10-01 01:28 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to generate a cross-project comparison report based on the daily digests I've already created for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. I need to synthesize the information from all these digests into a cohesive report with the requested sections.

Let me organize my thoughts:

**1. Ecosystem Overview**
- Today's AI infrastructure landscape involves multiple layers: serving engines (vLLM, SGLang), local runtimes (llama.cpp), cloud-hosted endpoints (Ollama), gateway/orchestration (LiteLLM), and fine-tuning/studio (Unsloth)
- Key themes: multi-modal support, speculative decoding, ROCm/AMD growth, quantization advances, MLX for Apple Silicon, and performance optimization across the stack
- Active development across all projects with significant new model support and performance improvements

**2. Activity Comparison**
I need to compile a table with:
- Issues count
- PR count  
- Release status

From the digests:
- vLLM: 92 issues, 595 PRs (mentioned), no releases in 24h
- SGLang: 213 issues, 378 PRs, no releases in 24h
- llama.cpp: 92 issues (total), many PRs (mentioned), 10 releases in 24h
- Ollama: issues and PRs mentioned, no releases in 24h
- LiteLLM: 140+ PRs, v1.105.0-dev.1 released
- Unsloth: 17 issues, 140+ PRs, no releases in 24h

**3. Model Support Race**
- vLLM: Qwen3.8-Flash-Next, GLM-5.3-Flash, DeepSeek-V4.1-Flash, AMD MI355X
- SGLang: Kimi-K3 MXFP4, GLM-5.3-Flash-NVFP4, Qwen3.8-Flash-Next, MiMo-V2


- llama.cpp: Prism Bonsai 2 27B, Qwen4Exp with MTP, maion-coder, LLM-jp-4.1
- Ollama: System One models, Bongard (T5Gemma2)
- LiteLLM: Gemma 4 (in progress), Azure Terraform module
- Unsloth: audio.cpp integration, Decision API expansion

I'll focus on the emerging model support landscape, highlighting the diverse architectures and specialized models being integrated across different AI infrastructure projects. The ecosystem shows remarkable diversity in model support, with each platform strategically expanding its capabilities to address varied computational and deployment requirements.

The performance optimization efforts reveal a multi-pronged strategy targeting core computational bottlenecks. Key areas include advanced kernel design, sophisticated quantization techniques, and intelligent caching mechanisms. Projects are aggressively pursuing efficiency through specialized kernels for ROCm and CUDA, innovative quantization approaches, and intelligent memory management strategies that minimize computational overhead.

The layer positioning reveals a nuanced technological ecosystem, with each project occupying a distinct computational niche. From low-level runtime optimizations to high-level serving infrastructure, these projects collectively address the complex demands of modern AI deployment.

Emerging trends signal a sophisticated approach to AI infrastructure. Projects are increasingly focusing on multi-modal capabilities, advanced quantization methods, and platform-specific optimizations. The landscape demonstrates a mature understanding of deployment complexities, with targeted solutions for diverse hardware environments and computational requirements.</think>

# AI Inference Stack — Cross-Project Comparison Report

## 1. Ecosystem Overview

Today's AI infrastructure ecosystem spans the full serving-to-training stack, with clear layer separation: **vLLM and SGLang** compete as high-throughput serving engines with aggressive kernel fusion and speculative decoding; **llama.cpp** dominates local/offline inference across CPU/GPU/metal with the broadest hardware reach; **Ollama** provides cloud-hosted convenience with native MLX and Vulkan backends; **LiteLLM** orchestrates multi-provider deployments with unified APIs and cost tracking; and **Unsloth** targets fine-tuning and studio workflows with specialized training kernels.

The October 2026 landscape shows convergence around a few themes: (1) ROCm/AMD GPU support maturation across all major engines, (2) speculative decoding and MTP (multi-token prediction) becoming standard for latency-sensitive workloads, (3) quantization formats fragmenting (MXFP4, NVFP4, IQ4) with backend-specific tradeoffs, and (4) multi-modal as a first-class concern across serving layers.

---

## 2. Activity Comparison

| Project | Open Issues | Open PRs | Releases (24h) |
|---------|-------------|----------|----------------|
| **vLLM** | ~92 | ~595 | 0 |
| **SGLang** | 213 | 378 | 0 |
| **llama.cpp** | 92 | ~100+ (active) | 10 commits |
| **Ollama** | 20+ reported | 25+ | 0 |
| **LiteLLM** | 140+ | 140+ | 1 (v1.105.0-dev.1) |
| **Unsloth** | 17 | 140+ | 0 |

**Observations:**

- **llama.cpp** has the highest release velocity (10 commits), reflecting its role as a fast-moving runtime with granular fixes
- **SGLang and vLLM** show comparable PR volume, indicating active feature development in the serving layer
- **LiteLLM** bridges the gap between API gateways and serving engines, with steady PR activity and a tagged release
- **Unsloth** maintains high PR volume despite low issue count, suggesting feature-driven rather than bug-driven development

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **Qwen3.8-Flash-Next** | ✅ (experimental, bug) | ✅ (roadmap) | — | — | — |
| **GLM-5.3-Flash** | ✅ (perf opt) | ✅ (NVFP4) | ✅ (req) | — | — |
| **DeepSeek-V4.1-Flash** | ✅ (SM120 perf issue) | ✅ (ROCm opt) | — | — | — |
| **Qwen4Exp (MTP)** | — | — | ✅ | — | — |
| **MiMo-V2** | — | ✅ (FA4 default) | ✅ (dflash) | — | — |
| **Prism Bonsai 2 27B** | — | — | ✅ | — | — |
| **maion-coder** | — | — | ✅ | — | — |
| **System One** | — | — | — | ✅ (MLX) | ✅ |
| **Bongard (T5Gemma2)** | — | — | — | ✅ (proposed) | — |
| **Gemma 4** | — | — | — | ✅ (req) | — |
| **Kimi-K3 MXFP4** | — | ✅ (ROCm) | — | — | — |

**Who's ahead:**
- **SGLang** leads in ROCm/AMD optimization with fused MLA kernels, PTPC FP8, and MiMo FA4 by default
- **vLLM** leads in speculative decoding infrastructure (MTP, DFlash, slot reservation fixes)
- **llama.cpp** leads in model breadth (local/offline) and hardware reach (Hexagon HMX, Vulkan, SYCL, Metal)
- **Ollama** leads in cloud-hosted convenience and Apple Silicon MLX support
- **Unsloth** leads in fine-tuning UX (Studio) and emerging audio.cpp integration

---

## 4. Performance Frontier

| Optimization Area | Active Projects | Key Work |
|-------------------|-----------------|----------|
| **Kernel Fusion** | vLLM, SGLang, llama.cpp | QK-norm+RoPE+gate (ROCm), GLM Q-projection, MXFP4 bf16 math |
| **Quantization** | vLLM, SGLang, llama.cpp, Unsloth | IQ4, MXFP4, NVFP4, MMQ N-tiles heuristics |
| **KV Cache / Attention** | vLLM, SGLang, llama.cpp | NIXL KV connector coalescing, FlashAttention whole-tile scheduling, HiSparse long-context |
| **Speculative Decoding** | vLLM, SGLang, llama.cpp | DFlash slot reservation, MTP for Qwen4Exp, context combine in CUDA graphs |
| **Weight Loading** | vLLM, Unsloth | Weight Cache Daemon (1s load vs 300s), mmproj memory-mapped loading |
| **Thread Scheduling** | llama.cpp | `common_cpu_get_num_math()` for SMT-aware thread allocation |
| **Memory Management** | vLLM, SGLang | VLLM_PLE_CPU_OFFload, CUDA graph memory reservation fixes |
| **Backend-Specific** | All | ROCm 10.0 default (vLLM), Metal MXFP4 (llama.cpp), audio.cpp native (Unsloth) |

**Where the effort is concentrated:**
The highest density of work is in **kernel fusion** (reducing kernel launch overhead) and **speculative decoding** (reducing per-token latency). Weight loading optimization is a new frontier — Unsloth's Weight Cache Daemon and vLLM's CPU offload both target the same cold-start pain point.

---

## 5. Layer Positioning

| Layer | Projects | Role |
|-------|----------|------|
| **Training / Fine-tuning** | Unsloth | Studio + training kernels (fast cross-entropy, gradient checkpointing) |
| **Local Runtime** | llama.cpp | Offline inference, broadest hardware support, no server required |
| **Serving Engine** | vLLM, SGLang | High-throughput server with batching, speculative decoding, KV cache management |
| **Cloud Hosted** | Ollama | End-user facing, one-command deployment, MLX/Vulkan backends |
| **Gateway / Orchestration** | LiteLLM | Multi-provider routing, cost tracking, unified OpenAI-compatible API |
| **Studio / UX** | Unsloth | Visual fine-tuning interface, voice mode, document processing |

**Key differentiator:**
- **vLLM/SGLang** compete on identical layer (serving engine) with different optimization philosophies — vLLM leans on PyTorch/Triton, SGLang on Rust + NIXL
- **llama.cpp** occupies a unique niche as the only true offline/local runtime, making it the foundation for edge and embedded use cases
- **LiteLLM** is orthogonal to serving engines — it routes to them, making it complementary rather than competitive

---

## 6. Trend Signals

### What Agent / Application Developers Should Watch

1. **Speculative Decoding Is Becoming Table Stakes**
   - vLLM's DFlash/DSpark slot reservation fixes, SGLang's DFlash capture, and llama.cpp's MTP support all landed within days of each other
   - Expect 2-4× decode latency improvements as these features stabilize
   - **Action**: Test your inference pipeline with speculative decoding enabled; benchmark latency and accuracy tradeoffs

2. **ROCm/AMD Is No Longer Second-Class**
   - ROCm 10.0 becoming default in vLLM; fused MLA kernels landing in both vLLM and SGLang for gfx950; AMD Quark support in Ollama
   - AMD MI355X and gfx950 now have dedicated optimization tracks in major projects
   - **Action**: If you deploy on AMD GPUs, the next 2-3 months will bring significant performance improvements — re-benchmark soon

3. **Quantization Fragmentation Is Accelerating**
   - MXFP4, NVFP4, IQ4_NL, GGUF Q4_K_M — each has different accuracy/throughput tradeoffs and backend support
   - llama.cpp leads in format breadth; SGLang leads in optimizing for specific GPUs
   - **Action**: Don't assume "quantized = faster" — validate throughput + accuracy for your specific model + hardware combination

4. **Multi-Modal Is Eating the Stack**
   - GLM-5.3-Flash, Qwen Image 2.1, System One, T5Gemma2, audio.cpp — all getting native support
   - mmproj handling is a recurring pain point (Unsloth's disk-loading regression, vLLM's memory offload)
   - **Action**: If you build multi-modal agents, monitor memory usage carefully; demand lazy mmproj loading from projects

5. **Gateway Layer Is Consolidating**
   - LiteLLM's lazy logging import shows attention to startup performance; multi-provider routing is mature
   - LiteLLM v1.105.0 adds cosign-signed Docker images — supply-chain security is now a first-class concern
   - **Action**: If you proxy across multiple LLM providers, LiteLLM is the default choice; verify your deployment uses signed images

6. **Weight Loading Is the New Bottleneck**
   - Unsloth's Weight Cache Daemon (306s → <1s) and vLLM's CPU offload both target the same problem
   - This is critical for serverless/function-as-a-service patterns where cold start matters
   - **Action**: If you deploy large models in latency-sensitive contexts, weight load time is likely your bottleneck — evaluate caching strategies

### Signals for Infrastructure Engineers

- **Build pipelines are consolidating**: ROCm 10.0, cosign-signed Docker, cgroup-aware thread scheduling — production-readiness features are maturing across all projects
- **Rust is spreading**: SGLang's NIXL, vLLM's Rust frontend roadmap, llama.cpp's Rust examples — the serving layer is increasingly Rust-native
- **Observability is improving**: LiteLLM's lazy logging, vLLM's timed-trace replay, SGLang's chat latency fixes — debugging production inference is getting easier

---

*Cross-project synthesis — 2026-10-01*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the GitHub data for vLLM and create a structured digest for 2026-10-01.

Looking at the data:

**Releases**: None in the last 24h

**Top Issues by comments:**
1. #54521 - Qwen3.8-Flash-Next non-deterministic greedy decoding with persistent_topk (49 comments)
2. #40756 - MTP speculative decoding crash with illegal memory access (45 comments)
3. #44280 - Rust Frontend Feature Parity roadmap (45 comments)
4. #56868 - GLM-5.3-Flash long-decode degeneration (35 comments)
5. #8581 - DRY Sampling feature request (32 comments)

**Top PRs:**
- #59525 - torch.compile test improvements
- #51406 - ROCm fused QK-norm+RoPE+gate kernel for Qwen3
- #58761 - ROCm 10.0 as default
- #55937 - Mooncake-style timed-traces replay in vllm-bench
- #59084 - GLM5.3 Q projection fusion
- #59468 - DFlash/DSpark slot reservation fix
- #59526 - pip-compile CI optimization

Now let me structure this into the requested format:

1. Today's Highlights
2. Releases & Breaking Changes
3. New Model & Hardware Support
4. Performance & Optimization
5. Stability & Regressions
6. What This Means for Application Developers

I need to be careful about the date - the data shows updates on 2026-09-30 and 2026-10-01, so this is a digest for 2026-10-01.</think>

# vLLM Daily Digest — 2026-10-01

## 1. Today's Highlights

The vLLM project is seeing active work on multi-model stability and ROCm optimization. A critical non-determinism bug in Qwen3.8-Flash-Next greedy decoding (near the Sparse Attention threshold) has attracted significant attention (49 comments), while the Rust frontend continues its march toward feature parity. On the performance front, GLM-5.3 Q-projection fusion landed with 1.27–1.64× kernel improvements, and ROCm 10.0 is poised to become the default build.

## 2. Releases & Breaking Changes

No releases detected in the last 24 hours.

**In progress:** ROCm 10.0 (TheRock) is being prepared as the default ROCm image and wheel, with ROCm 7.2 retained for transition. See [PR #58761](https://github.com/vllm-project/vllm/pull/58761).

---

## 3. New Model & Hardware Support

| Model/Architecture | Support Status | Notes |
|---|---|---|
| **Qwen3.8-Flash-Next** | Experimental | Non-determinism bug with `persistent_topk` near `indexer_budget` threshold — see [#54521](https://github.com/vllm-project/vllm/issues/54521) |
| **GLM-5.3-Flash** | Active development | Performance optimization underway; long-decode degeneration after accumulated reasoning reported in [#56868](https://github.com/vllm-project/vllm/issues/56868) |
| **DeepSeek-V4.1-Flash** | ROCm optimization | Performance tracking issue [#56506](https://github.com/vllm-project/vllm/issues/56506); Blackwell (SM120) support gaps in [#59203](https://github.com/vllm-project/vllm/issues/59203) |
| **AMD MI355X (gfx950)** | ROCm performance track | Dedicated optimization issue [#57149](https://github.com/vllm-project/vllm/issues/57149); Qwen3.8-2.4T-A95B target |
| **NVIDIA RTX PRO 6000 (SM120)** | Limited | FlashInfer sparse-MLA kernel gap — only `page_block_size=64` available, not 32 ([#59203](https://github.com/vllm-project/vllm/issues/59203)) |

---

## 4. Performance & Optimization

### Landed / In Review

| Area | Change | Impact | PR/Issue |
|---|---|---|---|
| **GLM-5.3** | Fused Q projection with `fused_q` kernel | 1.27–1.64× kernel perf improvement; 78 fewer GPU kernel launches per TP rank | [#59084](https://github.com/vllm-project/vllm/pull/59084) |
| **ROCm MLA** | Host dispatch reduction in MLA metadata build | ~21× fewer host dispatches | [#58381](https://github.com/vllm-project/vllm/pull/58381) |
| **ROCm MLA** | Parallelized page-index expansion over token chunks | Kernel-level improvement (microbenchmark) | [#57978](https://github.com/vllm-project/vllm/pull/57978) |
| **Qwen3 (ROCm)** | Fused QK-norm+RoPE+gate Triton kernel | Enables fused path for Qwen3-Next/Qwen3.5 on ROCm | [#51406](https://github.com/vllm-project/vllm/pull/51406) |
| **NIXL KV Connector** | Coalesced host-buffer KV copies across cache groups | Reduces D2H/H2D overhead | [#54483](https://github.com/vllm-project/vllm/pull/54483) |
| **DFlash/DSpark** | Capture context combine and anchor in draft CUDA graph | Improves speculative decoding efficiency | [#59511](https://github.com/vllm-project/vllm/pull/59511) |
| **vllm-bench** | Mooncake-style timed-trace replay support | Enables faithful replay of recorded request schedules from Rust client | [#55937](https://github.com/vllm-project/vllm/pull/55937) |
| **MRV2 Scheduler** | Don't reserve DFlash/DSpark draft slots in token budget | Fixes over-charging: DSpark decode with K=5 was costing 10 tokens instead of 6 | [#59468](https://github.com/vllm-project/vllm/pull/59468) |

### Known Performance Issues

- **Decode throughput regression**: Qwen3.6-35B-A3B-FP8 on H100 shows ~3.3× throughput drop from v0.26.0 to v0.29.0 — see [#57680](https://github.com/vllm-project/vllm/issues/57680)
- **Weight loading on GB10**: Per-tensor H2D copies from safetensors mmap views are slow — [#58726](https://github.com/vllm-project/vllm/issues/58726)
- **DeepSeek-V4.1-Flash on SM120**: Extremely low decode throughput with `--enforce-eager`; CUDA graphs unusable — [#56892](https://github.com/vllm-project/vllm/issues/56892)

---

## 5. Stability & Regressions

### High Severity

| Issue | Description | Severity |
|---|---|---|
| [#54521](https://github.com/vllm-project/vllm/issues/54521) | **Qwen3.8-Flash-Next**: Greedy decoding non-deterministic from `persistent_topk` in prefill when prompt length nears `indexer_budget` (SM121/GB10). Five identical requests return five different completions. | **High** — correctness bug; 49 comments |
| [#40756](https://github.com/vllm-project/vllm/issues/40756) | **MTP speculative decoding** crash with illegal memory access on long sequences (Qwen3.6-27B-FP8, v0.19.1). | **High** — crash; 45 comments |
| [#53960](https://github.com/vllm-project/vllm/issues/53960) | **VLLM_PLE_CPU_OFFLOAD** deadlocks at kernel warmup on single GPU (TP=1) — Qwen3.8-Flash-Next on GB10/sm_121 | **High** — deadlock; 19 comments |
| [#53726](https://github.com/vllm-project/vllm/issues/53726) | Silent CUDA IMA (exit 0) in hybrid GDN + MTP k=3 + async scheduling on RTX 3090 | **High** — silent corruption |

### Medium Severity

| Issue | Description | Status |
|---|---|---|
| [#56868](https://github.com/vllm-project/vllm/issues/56868) | GLM-5.3-Flash long-decode degeneration after accumulated reasoning decode | Open, 35 comments |
| [#41530](https://github.com/vllm-project/vllm/issues/41530) | TP Worker hang → EngineDeadError with DeepSeek-V4-Pro, TP=8, MTP speculative decoding | Open, 14 comments |
| [#57423](https://github.com/vllm-project/vllm/issues/57423) | FlashInfer autotune config cache hits only on rank 0, deadlocking engine launch | Open, 6 comments |
| [#57562](https://github.com/vllm-project/vllm/issues/57562) | AsyncScheduler `num_output_placeholders` underflow with chunked prefill + concurrency — regression from v0.24.0 | Open, 10 comments |

### Fixes Landed / In Progress

- **Rust frontend latency measurement**: Fixed `vllm-bench` chat latency to stop at last token (matching Python server behavior) — [#59251](https://github.com/vllm-project/vllm/pull/59251)
- **Elastic EP scale-up**: Fixed stalled local-only scale-up when remote engine count incorrectly set to zero — [#57820](https://github.com/vllm-project/vllm/pull/57820)
- **NIXL handshake rollback**: Roll back incomplete remote-agent handshakes on failure — [#59524](https://github.com/vllm-project/vllm/pull/59524)
- **Hybrid GDN prefix caching**: Restored prefix-cache hits under MTP spec decoding — [#52244](https://github.com/vllm-project/vllm/pull/52244)

---

## 6. What This Means for Application Developers

1. **Determinism caution with Qwen3.8-Flash-Next**: If you rely on deterministic greedy outputs, avoid prompt lengths near the Sparse Attention `indexer_budget` threshold, or hold off until the non-determinism bug is resolved.

2. **MTP speculative decoding**: The illegal memory access bug on long sequences is active; if you're using MTP with Qwen3.6-27B-FP8 or similar models, test thoroughly before production deployment.

3. **ROCm users**: ROCm 10.0 will become the default soon. If you depend on ROCm 7.2, plan for a transition period or pin your container.

4. **GLM-5.3 deployments**: Performance optimizations are landing (Q-projection fusion), but long-decode degeneration after extended reasoning is being investigated — monitor output quality in long conversation scenarios.

5. **Benchmarking note**: If you use `vllm-bench` with the Rust client, be aware that recent fixes align its latency measurement with the Python server ([#59251](https://github.com/vllm-project/vllm/pull/59251), [#59247](https://github.com/vllm-project/vllm/pull/59247)). Historical throughput numbers may not be comparable across versions.

6. **Blackwell (SM120) users**: DeepSeek-V4.1-Flash decode throughput is significantly degraded with eager mode; CUDA graphs are currently unusable. Monitor the fix progress in [#56892](https://github.com/vllm-project/vllm/issues/56892).

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to generate a structured SGLang digest for 2026-10-01 based on the provided GitHub data. Let me analyze the data and create the digest sections as requested.

Let me go through the data:

1. **Latest Releases**: None in the last 24h

2. **Latest Issues** (top issues by comment count):
- #21302: AITER-Upgrade PR readiness (32 comments)
- #33522: Fast Engine Recovery: Weight Cache Daemon (30 comments) - Phase 1 landed, weight load drops from ~306-327s to <1s on Qwen3-235B FP8
- #21788: Prefill Context Parallelism (22 comments) - Q3 roadmap, various items checked off
- #29630: RFC for unified sglang.kernels namespace (15 comments) - closed
- #17050: CI Test Failures and Fixes (14 comments)
- #21065: CI Maintenance Mode (11 comments) - closed
- #28874: HiSparse Roadmap for Long-Context Sparse Serving (11 comments)
- Plus various other bugs and features

3. **Latest Pull Requests**:
- #37827: NIXL stride desc API
- #37577: Aaronson-Gumbel text watermarking
- #41533: AMD ROCm fused MLA kernel
- #41936: fix renderer image publish (closed)
- #41963: Flush buffered text at stream end
- #39659: gRPC follower metadata
- #38764: AMD GLM5 PTPC FP8 KDA projections
- #40909: heterogeneous TP for hybrid SWA
- #41766: Rust gRPC adapter (closed)
- #40102: Enable Control Plane C
- #41962: Flush buffered text in detectors
- #40811: AMD Quark Kimi-K3 MXFP4 (closed)


- #39388: MegaMoE W13 layout for ModelOpt NVFP4
- #41175: Qwen 3.8 NEXTN verify/draft graph
- #34535: Fix hybrid-SSM DP attention
- #41769: HiCache DSA index-K elision
- #41296: docs sync blog cards
- #41886: FA4 by default for MiMo (closed)
- #39931: ROCm topk v2
- #39893: fix QSA indexer state through HiCache

Let me organize this into the digest sections.</think>

# SGLang Digest — 2026-10-01

## Today's Highlights

The SGLang project continues its rapid pace of inference optimization and model support expansion. Key developments include the Weight Cache Daemon (Phase 1 shipped, reducing weight load from ~306–327s to <1s on Qwen3-235B FP8), progress on Prefill Context Parallelism for Q3, and active work on ROCm/AMD backends. Several bug fixes landed for streaming detectors and MiMo model selection, while a notable RFC proposes unifying SGLang's kernel namespace.

---

## Releases & Breaking Changes

No new releases in the last 24 hours.

---

## New Model & Hardware Support

| Item | Description | Link |
|------|-------------|------|
| **Kimi-K3 MXFP4 on ROCm** | AMD Quark support for serving Kimi-K3 MXFP4 checkpoint on ROCm | [#40811](https://github.com/sgl-project/sglang/pull/40811) |
| **GLM-5.3-Flash-NVFP4** | Support for RedHatAI/GLM-5.3-Flash-NVFP4 (compressed-tensors fix for forget gate projections) | [#41836](https://github.com/sgl-project/sglang/issues/41836) |
| **Qwen3.8-Flash-Next** | Active roadmap for Qwen3.8-Flash-Next with kernel optimizations and CPU overhead reduction | [#38731](https://github.com/sgl-project/sglang/issues/38731) |
| **MiMo-V2 on SM100** | FA4 enabled by default for MiMo on SM100; backend A/B tests show **1.85× DFlash decode throughput** and **9.0%** ordinary decode improvement | [#41886](https://github.com/sgl-project/sglang/pull/41886) |
| **ROCm gfx950** | Fused MLA absorb + RoPE + KV-write kernel for decode-sized forward modes on gfx950 | [#41533](https://github.com/sgl-project/sglang/pull/41533) |

---

## Performance & Optimization

| Area | Work Item | Impact | Link |
|------|-----------|--------|------|
| **Weight Cache Daemon** | Phase 1 shipped — per-rank daemon holds post-quantized weights, serves over CUDA IPC | Weight load: **306–327s → <1s** on Qwen3-235B FP8 | [#33522](https://github.com/sgl-project/sglang/issues/33522) |
| **Prefill CP** | Completed: allreduce fusion, support for attention cp size ≠ moe_dp size, Prefill CP for MLA models (Dpsk v3/Kimi-K2.5), models with SWA | Q3 roadmap milestone | [#21788](https://github.com/sgl-project/sglang/issues/21788) |
| **MegaMoE** | Preserve W13 layout for ModelOpt NVFP4 experts | Expert layout optimization | [#39388](https://github.com/sgl-project/sglang/pull/39388) |
| **Qwen3.8-Next** | Fuse NEXTN verify and draft graph input preparation | Graph construction efficiency | [#41175](https://github.com/sgl-project/sglang/pull/41175) |
| **ROCm TopK** | Split one long row across blocks for CDNA cluster-path decode | Improves decode on long context | [#39931](https://github.com/sgl-project/sglang/pull/39931) |
| **NIXL Stride Desc API** | Use strided (compressed) descriptor API for memory registration | Dramatically reduce initial delay (up to 5s) | [#37827](https://github.com/sgl-project/sglang/pull/37827) |

---

## Stability & Regressions

| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| **High** | SafeUnpickler deny-list bypass → RCE via `/load_lora_adapter_from_tensors` | Open | [#30165](https://github.com/sgl-project/sglang/issues/30165) |
| **High** | `Req.decoded_text` never written — stop-string fallback dead code, empty DecodeStatus seed on eviction | Open | [#41372](https://github.com/sgl-project/sglang/issues/41372) |
| **Medium** | CUDA graph reserves ~1.8 GB, starves quantized-KV long-context prefill on small cards | Open | [#40094](https://github.com/sgl-project/sglang/issues/40094) |
| **Medium** | Triton kernel `load_binary` fails with "operation not permitted" during decode CUDA graph replay on GB10/SM121 → GPU memory exhaustion | Open | [#40948](https://github.com/sgl-project/sglang/issues/40948) |
| **Medium** | MiMo-V2 selects FP8 MoE runner for packed MXFP4 experts on SM100 (incorrect) | Open | [#41569](https://github.com/sgl-project/sglang/issues/41569) |
| **Medium** | PEFT adapters with bias="lora_only" or "all" crash or silently corrupt weights during normalize_qkv_proj | Open | [#41828](https://github.com/sgl-project/sglang/issues/41828) |
| **Low** | Streaming detectors hold buffered text, lose content on stream end (Pythonic, Inkling, Gemma-4, Poolside, InternLM, MiniCPM-5, Hunyuan) | Fixes merged | [#41963](https://github.com/sgl-project/sglang/pull/41963), [#41962](https://github.com/sgl-project/sglang/pull/41962) |
| **Low** | CI: 4 broken, 10 flaky tests as of 2026-10-01 | Tracking | [#17050](https://github.com/sgl-project/sglang/issues/17050) |

---

## What This Means for Application Developers

1. **Faster cold starts on large models**: The Weight Cache Daemon (Phase 1) reduces weight loading from minutes to sub-second on Qwen3-235B FP8. If you deploy large MoE models, this significantly improves restart latency.

2. **Better throughput on NVIDIA GPUs**: MiMo models now default to FA4 on SM100, delivering up to 1.85× decode throughput improvement. Ensure your deployment uses the latest SGLang for this automatic optimization.

3. **ROCm support maturing**: AMD gfx950 users benefit from fused MLA kernels and PTPC FP8 KDA projections for GLM-5.3-Flash. If you're on AMD hardware, test the new paths for prefill performance gains.

4. **Long-context sparse attention**: HiSparse is actively developed for long-context sparse serving with lower GPU memory — worth evaluating if your workload involves very long contexts with sparse attention patterns.

5. **Security note**: The SafeUnpickler RCE vulnerability (#30165) affects LoRA adapter loading from tensors. Avoid exposing `/load_lora_adapter_from_tensors` to untrusted inputs until patched.

6. **Streaming fixes**: Several format detectors (Pythonic, Inkling, Gemma-4, etc.) now correctly flush buffered text at stream end — if you use tool calling or structured output, verify your use case is covered.

---

*Generated from GitHub data — sgl-project/sglang*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a llama.cpp digest for 2026-10-01 based on the provided GitHub data. Let me analyze the data and organize it into the requested sections.

Let me go through the data:

**Releases (last 24h):**
- b11308: fix cli download mmproj arg (#28977)
- b11307: llama: preserve original batch order for speculative decoding layer inputs (#29019)
- b11306: test-llama-archs: toggle causal_attn to catch graph shape changes (#29724)
- b11304: llama: properly handle KV on training (#28520)
- b11303: batch: migrate the rest of examples to llama_batch_ext (#29601)
- b11302: glm5-next: give dead indexer slots unique scatter rows (#29745)
- b11301: ggml/gguf: fix integer overflow (#29384)
- b11299: cli: exit on stdin EOF and drop the console wide Ctrl+C broadcast (#29722)
- b11298: mimo: support dflash (convert + feature extraction) (#29650)
- b11297: jinja: support coerced array attributes (#29574)

**Issues (total 92, showing top 30):**
- #27063: SYCL completely broken on A770 (18 comments)
- #21468: cache reuse not supported for Gemma 4 (11 comments) - CLOSED
- #27046: SIGSEGV on GPU offload - Intel Lunar Lake iGPU (9 comments) - CLOSED
- #27546: OpenVINO on i5 1345u GPU throws exception (9 comments)
- #29473: ggml-hexagon on Snapdragon 7 Gen 4 issues (7 comments)
- #27922: Feature Request: Support GLM5.3 (flash) (7 comments)


- #26987: Qwen3-Coder parser issues (6 comments) - CLOSED
- #27174: logprobs returned for generated tokens only (6 comments) - CLOSED
- #29758: Feature Request: Improve Security against Prompt Injection (6 comments)
- #27771: SYCL MUL_MAT bf16 issues (5 comments)
- #29623: Vulkan ErrorDeviceLost on AMD Radeon AI PRO R9700 (5 comments)
- #26963: Pre-built ROCm Windows binary crashes (4 comments) - CLOSED
- #27178: Muse Glimmer NVFP4 issues (4 comments)
- #28035: Vulkan ggml_vk_get_op_batch_size returns 0 (4 comments)
- #29664: Windows stdin EOF ctrl+c issue (4 comments)
- #29255: CUDA error on 7x Volta (sm_70) (4 comments)
- #29549: -sm tensor makes machine reboot (4 comments)
- #29324: --cache-ram -1 not working correctly (4 comments)
- #29654: GPUs choking on PCIe (VK device lost) (4 comments)
- #25227: webui model selector org-less models (3 comments)
- #29392: Repeats same token or generates garbage (3 comments)
- #26978: GGUF loader accepts tensor size that wraps to 0 (3 comments) - CLOSED
- #27098: Feature Request (2 comments) - CLOSED
- #27141: nemotron_h_moe aborts in ggml_ssm_scan (2 comments)
- #27211: Opt-in codec for recurrent-state context checkpoints (2 comments) - CLOSED
- #29771: Metal aborts during long generation (2 comments)
- #29759: RPC symlinked cache dirs break (2 comments)
- #29314: fattn failure on gfx1201 (2 comments)
- #26123: Hexagon dspqueue_read failed (2 comments)

I should focus on the PRs that seem most impactful. #29779 is particularly interesting—flattening matmul into 2D for Hexagon HMX multi-sequence handling. #23836 is also worth noting since it addresses thread management for SMT and hybrid CPUs using common_cpu_get_num_math(). Additionally, #29777 fixes a Metal memory leak in ggml_metal_buffer_get_tensor, and #29778 appears to add maion-coder architecture support.

The Jinja parser optimization in #29776 looks like it could improve performance. I see several quantization and kernel improvements: #29681 adds LLM-jp-4.1 parser support, #29775 fixes a cvector calculation issue, #29773 addresses image token capping, #28709 implements MMQ N-tiles heuristics for cdna, #29622 enables both embd and raw tokens in a batch, and #29772 extends Vulkan FWHT kernels beyond 512 width. There's also #29600 which adds Prism Bonsai 2 27B runtime support.

On the CUDA front, #29435 is optimizing FlashAttention scheduling to prefer whole-tile approaches, #29765 removes alloca usage, #29698 marks Adreno E17 subgroup broadcast as supported, #29770 enables bf16 math for mxfp4 mul-mat on Metal, #29761 adds MTP for Qwen4Exp, #29753 routes sm70 to Turing MMVQ, #29683 guards iq4_nl dequantize against short rows, and #29633 implements MMVF for thin f16/bf16 at small batch sizes.</think>

# llama.cpp Digest — 2026-10-01

## 1. Today's Highlights

The llama.cpp project continues its rapid pace with fixes targeting CLI argument parsing, speculative decoding correctness, and integer overflow protection. Notably, the project is adding support for new model architectures including Prism Bonsai 2 27B and Qwen4Exp with MTP, while addressing stability issues across Metal, Vulkan, and CUDA backends.

---

## 2. Releases & Breaking Changes

| Commit | Description | PR |
|--------|-------------|-----|
| **b11308** | Fixed CLI download mmproj argument parsing | [#28977](https://github.com/ggml-org/llama.cpp/pull/28977) |
| **b11301** | Fixed integer overflow guard for zero-element tensors in ggml/gguf | [#29384](https://github.com/ggml-org/llama.cpp/pull/29384) |
| **b11299** | CLI now exits cleanly on stdin EOF; fixes Windows Ctrl+C broadcast bug | [#29722](https://github.com/ggml-org/llama.cpp/pull/29722) |

---

## 3. New Model & Hardware Support

| Model/Architecture | Type | PR |
|--------------------|------|-----|
| **Prism Bonsai 2 27B** | Runtime support | [#29600](https://github.com/ggml-org/llama.cpp/pull/29600) |
| **Qwen4Exp** | MTP (Multi-Token Prediction) support | [#29761](https://github.com/ggml-org/llama.cpp/pull/29761) |
| **maion-coder** | Architecture support (conversion + testing) | [#29778](https://github.com/ggml-org/llama.cpp/pull/29778) |
| **LLM-jp-4.1** | Chat format handler with reasoning/content separation | [#29681](https://github.com/ggml-org/llama.cpp/pull/29681) |
| **GLM5.3 (flash)** | Feature request tracked | [#27922](https://github.com/ggml-org/llama.cpp/issues/27922) |
| **dflash (MiMo)** | Convert + feature extraction support | [#29650](https://github.com/ggml-org/llama.cpp/pull/29650) |

---

## 4. Performance & Optimization

| Area | Change | PR |
|------|--------|-----|
| **CUDA FlashAttention** | Prefer whole-tile scheduling for efficient two-stage kernels (improves prefill) | [#29435](https://github.com/ggml-org/llama.cpp/pull/29435) |
| **CUDA MMVF** | Use MMVF for thin f16/bf16 mul_mat at small batch size instead of slow cublas path | [#29633](https://github.com/ggml-org/llama.cpp/pull/29633) |
| **CUDA MMQ** | Added N-tiles heuristic for CDNA architecture | [#28709](https://github.com/ggml-org/llama.cpp/pull/28709) |
| **CUDA sm70** | Route Volta (sm_70) to Turing MMVQ nwarps table for better decode performance | [#29753](https://github.com/ggml-org/llama.cpp/pull/29753) |
| **Metal MXFP4** | Use bf16 math for mxfp4 mul-mat (fixes range issues with large outliers) | [#29770](https://github.com/ggml-org/llama.cpp/pull/29770) |
| **Vulkan FWHT** | Extended kernels to support block widths up to 8192 | [#29772](https://github.com/ggml-org/llama.cpp/pull/29772) |
| **Hexagon HMX** | Flatten matmul into 2D for multi-sequence use (faster on n_seqs > 1) | [#29779](https://github.com/ggml-org/llama.cpp/pull/29779) |
| **Jinja Parser** | Skip copying loop scope unless loop filter needs it (optimization) | [#29776](https://github.com/ggml-org/llama.cpp/pull/29776) |
| **Thread Scheduling** | Use `common_cpu_get_num_math()` for `--threads -1` to avoid SMT oversubscription | [#23836](https://github.com/ggml-org/llama.cpp/pull/23836) |
| **Speculative Decoding** | Preserve original batch order for layer inputs | [#29019](https://github.com/ggml-org/llama.cpp/pull/29019) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | PR/Fix |
|----------|-------|--------|--------|
| **Critical** | SYCL completely broken on Intel A770 | OPEN | [#27063](https://github.com/ggml-org/llama.cpp/issues/27063) |
| **High** | Metal abort during long generation (`ggml_metal_buffer_get_tensor`) | OPEN | [#29771](https://github.com/ggml-org/llama.cpp/issues/29771) — fix in [#29777](https://github.com/ggml-org/llama.cpp/pull/29777) |
| **High** | Vulkan ErrorDeviceLost on AMD Radeon AI PRO R9700 (SAM/ReBAR) | OPEN | [#29623](https://github.com/ggml-org/llama.cpp/issues/29623) |
| **High** | ggml-hexagon issues on Snapdragon 7 Gen 4 (HMX MUL_MAT returns inf) | OPEN | [#29473](https://github.com/ggml-org/llama.cpp/issues/29473) |
| **Medium** | SYCL MUL_MAT bf16 wrong answer at bs=[1,3] (Arc 140T) | OPEN | [#27771](https://github.com/ggml-org/llama.cpp/issues/27771) |
| **Medium** | CUDA error on 7x Volta (sm_70) layer-split | OPEN | [#29255](https://github.com/ggml-org/llama.cpp/issues/29255) |
| **Medium** | fattn failure on gfx1201 in test-backend-ops | OPEN | [#29314](https://github.com/ggml-org/llama.cpp/issues/29314) |
| **Low** | RPC symlinked cache dirs broken | OPEN | [#29759](https://github.com/ggml-org/llama.cpp/issues/29759) |
| **Low** | `--cache-ram -1` not behaving as "no limit" | OPEN | [#29324](https://github.com/ggml-org/llama.cpp/issues/29324) |

---

## 6. What This Means for Application Developers

- **Fixes landing**: The Windows stdin EOF bug that killed unrelated processes on Ctrl+C is now fixed. Memory leaks in Metal backend have been addressed.
- **New models**: Developers using Prism Bonsai 2 27B or Qwen4Exp can now run these models with llama.cpp. LLM-jp-4.1 chat format is supported.
- **Quantization improvements**: MXFP4 inference now handles edge cases with large weight outliers correctly using bf16 math on Metal.
- **Performance gains**: CUDA users should see improved FlashAttention prefill performance and better decode throughput on Volta and Turing GPUs.
- **Threading**: Using `--threads -1` now properly accounts for SMT/hybrid CPUs, avoiding thread oversubscription.
- **Watch items**: SYCL on Intel A770 remains broken; if you rely on SYCL, monitor #27063. Vulkan users on AMD R9700 with SAM enabled should track #29623.

---

*Generated from GitHub data — ggml-org/llama.cpp (2026-10-01)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for Ollama on 2026-10-01.

First, let me organize the key information:

**Releases:** None in the last 24h

**Key Issues (bugs):**
1. #16060 - Phone number verification doesn't accept non-US numbers (Germany) - cloud registration issue
2. #18368 - Chat processing fails silently after 60 seconds on macOS GUI
3. #18706 - 0.35.0 pre-release question (CLOSED)
4. #18505 - MLX nvfp4 model stalls in prefill under sustained load
5. #18642 - CUDA illegal memory access on RTX 5090 with Cohere MoE (Windows)
6. #18527 - deepseek-v4.1-flash silently discards image input (CLOSED)
7. #18099 - llama-server malloc heap grows on macOS/Metal (CLOSED)
8. #16049 - generate completion API hangs with certain models on macOS
9. #17916 - Default n_threads ignores cgroup CPU quota
10. #18557 - Access violation loading ANY model on Vulkan (AMD RX 6800 XT)
11. #15708 - "no such host" error during blob download with proxy
12. #18679 - OLLAMA_GPU_OVERHEAD ignored by llama-server backend
13. #18595 - macOS 0.33.0: no garbage collection for orphaned blobs (CLOSED)
14. #18370 - Runner wedges in Vulkan ggml backend (CLOSED)
15. #18361 - install.sh should not use /usr/share/ollama as home directory (CLOSED)
16. #18474 - Extremely slow response times with Claude integration (CLOSED)


17. #18412 - llama-server crashes with SIGABRT on Linux hybrid graphics (CLOSED)
18. #18716 - Error pulling models: redirect target not allowed
19. #18718 - /v1/systemone rejects object-valued criteria descriptions
20. #18717 - JSON schema property order lost on native llama-server chat path
21. #18714 - Model support: Bongard (T5Gemma2) for /v1/systemone
22. #18715 - deepseek-v4.1-flash:cloud loses space before tool call
23. #18712 - Windows auto-update leaves cuda

I notice several additional issues spanning model compatibility, API handling, and system integration problems. These range from API endpoint rejections to tool call formatting and Windows update complications. The list reveals ongoing challenges with cross-platform compatibility, particularly for cloud and system-level integrations.

The pull requests demonstrate active development across multiple fronts - from MLX version updates and system support to installation improvements and OpenAI integration refinements. Notably, there's significant work on preserving JSON property order, supporting System One models, and enhancing proxy and network transfer capabilities.

The latest PRs cover diverse areas like connection handling, application UI improvements, and documentation, indicating a comprehensive approach to platform enhancement. Despite no recent releases, the project shows robust ongoing development and problem-solving.</think>

# Ollama Digest — 2026-10-01

## Today's Highlights

Ollama sees active development across MLX (Apple Silicon), Vulkan, and Windows GPU backends, with several bug fixes landing around JSON schema property ordering and proxy handling. The team is addressing critical issues including MLX model stalls under sustained load and CUDA crashes on RTX 5090. Community contributions continue expanding System One API support and observability integrations.

## Releases & Breaking Changes

No new releases in the last 24 hours. Note: Issue #18706 clarified that v0.35.0 is indeed a pre-release despite lacking an `-rc` suffix — users should expect it as an early release candidate.

## New Model & Hardware Support

- **System One MLX Support** — PR #18701 adds native MLX support for System One models with test coverage
- **Bongard (T5Gemma2) Model** — Issue #18714 proposes adding Bongard-mini (T5Gemma2 4B-4B encoder-decoder) to `/v1/systemone` endpoint
- **Gemma4 MoE MLX Fix** — PR #18631 resolves expert weight loading for mlx-community Gemma 4 MoE checkpoints (fixes #18540)

## Performance & Optimization

- **HTTP Connection Reuse for Embeddings** — PR #18397 fixes #18392 by reusing llama-server HTTP connections for embed load, eliminating per-request health checks under sustained `/api/embed` workloads
- **JSON Property Order Preserved** — PR #18721 fixes regression #18717, ensuring JSON schema property order is maintained on the native llama-server chat path rather than being alphabetically sorted
- **Proxy Honor for Blob Downloads** — PR #18719 ensures `HTTPS_PROXY/HTTP_PROXY/NO_PROXY` environment variables are respected for registry and blob downloads (fixes regression from #18625)

## Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | #18642 — CUDA illegal memory access (MUL_MAT) on RTX 5090 with Cohere MoE architecture (Windows) | OPEN | — |
| **High** | #18505 — MLX nvfp4 model stalls in prefill under sustained single-slot load, requires SIGTERM to recover | OPEN | — |
| **High** | #18099 — llama-server malloc heap grows unbounded on macOS/Metal (6.5 GB paged to swap) | CLOSED | — |
| **Medium** | #18557 — Access violation loading ANY model on Vulkan (AMD RX 6800 XT) | OPEN | — |
| **Medium** | #17916 — Default n_threads ignores cgroup CPU quota, causing ~45x throughput collapse in CPU-limited containers | OPEN | — |
| **Medium** | #18679 — OLLAMA_GPU_OVERHEAD ignored by llama-server backend, VRAM reservation not applied | OPEN | — |
| **Medium** | #18712 — Windows auto-update leaves `cuda_v12\ggml-cuda.dll` as .tmp, causing CPU fallback | OPEN | — |
| **Low** | #16060 — Phone number verification rejects non-US numbers (Germany), blocking paid plan registration | OPEN | — |
| **Low** | #18368 — Chat fails silently after 60s on macOS with no GUI notification | OPEN | — |
| **Low** | #18715 — deepseek-v4.1-flash:cloud drops space before tool call | OPEN | — |

## What This Means for Application Developers

1. **MLX Users**: Be aware that sustained single-slot parallel loads on nvfp4 models may cause stalls — consider batching or restarting affected workloads
2. **Windows NVIDIA Users**: If GPU detection fails after auto-update, check for leftover `.tmp` DLL files in the CUDA backend directory
3. **Container Deployments**: The n_threads/cgroup issue (#17916) causes severe throughput degradation in CPU-limited containers — consider explicitly setting thread counts
4. **Structured Outputs**: The JSON property order fix (#18717/#18721) restores correct ordering for dependent schemas — test existing applications that rely on specific key sequences
5. **Proxy Environments**: Model pulls behind corporate proxies should now work correctly with the proxy fix (#18719)
6. **System One**: The API is gaining momentum with MLX support and documentation — expect broader model availability soon

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-10-01 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Latest Releases:**
- v1.105.0-dev.1 released
- Docker images now signed with cosign

**Latest Issues (top by comments):**
1. #13048 - Cache of provider_specific_fields doesn't work (CLOSED)
2. #18801 - Streaming + logprobs fails for vLLM-backed models (OPEN)
3. #30065 - _group_keys_by_hash_tag() skips slot grouping for non-OSS-Cluster Redis (CLOSED)
4. #26973 - Add "gemma4" in model_prices_and_context_window.json (OPEN)
5. #37102 - LiteLLM proxy silently returns understated token counts for Bedrock (OPEN)
6. #31333 - LiteLlm assumes Cerebras has complete OpenAI compatibility (CLOSED)
7. #31843 - Feature: Add Terraform module for Azure (OPEN)
8. #31954 - Wrong values for max_tokens in some models (OPEN)
9. #37611 - Background health checks load entire LiteLLM_HealthCheckTable (CLOSED)
10. #31837 - OpenAI Responses served service_tier=default billed as priority (OPEN)
... and more

**Latest Pull Requests:**
1. #43933 - perf(logging): lazy-load logging integrations on first use
2. #43801 - feat(guardrails): per-mode stream_scope with bedrock stream
3. #43957 - fix(migrations): build CONCURRENTLY index migrations per partition
4. #40366 - feat(chatgpt): support Codex images, review, and public Live routes
5. #43943 - chore(release): backport #41941, #41880 to stable/1.101.x


6. #43961 - chore(deps): bump gitpython and tornado
7. #43908 - fix(mcp): resolve team-granted toolsets
8. #43962 - fix(proxy): restore pre-config-wins handling of pass-through endpoints
9. #43724 - feat(agents): enforce agent budgets
10. #43958 - test(ci): repair stale tests

Now let me structure this into the requested format:

1. **Today's Highlights** - 2-3 sentences
2. **Releases & Breaking Changes**
3. **New Model & Hardware Support**
4. **Performance & Optimization**
5. **Stability & Regressions**
6. **What This Means for Application Developers**</think>

# LiteLLM Digest — 2026-10-01

## Today's Highlights

The v1.105.0-dev.1 release introduces Docker image signing via cosign, enhancing supply-chain security for production deployments. A significant performance optimization landed: lazy-loading of logging integrations eliminates import-time overhead for 135 unused modules. Several critical bugs affecting Redis cluster deployments, streaming with logprobs, and cost tracking were addressed.

---

## Releases & Breaking Changes

- **v1.105.0-dev.1** released — [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-dev.1)
- **Docker Image Signing**: All LiteLLM Docker images are now signed with cosign using key from commit `0112e53`. Verify with: `cosign verify --key cosign.pub ghcr.io/berriai/litellm:[tag]`

---

## New Model & Hardware Support

- **Gemma 4** requested for inclusion in `model_prices_and_context_window.json` — [Issue #26973](https://github.com/BerriAI/litellm/issues/26973)
- **Azure Terraform Module** proposed for infrastructure-as-code deployments — [Issue #31843](https://github.com/BerriAI/litellm/issues/31843)

---

## Performance & Optimization

- **Lazy-loading logging integrations** — PR #43933 eliminates import of 135 unused logging modules on `import litellm`, reducing startup time and memory footprint. Integrations now resolve on first use via `__getattr__` registry.
- **Service tier billing integration matrix** — PR #43960 adds 40-case test coverage for ultrafast tier billing across endpoints, SDK clients, and streaming scenarios.
- **Resume sync streaming fallbacks** — PR #43959 fixes recursive retry bug where primary model was retried instead of proceeding to backup.

---

## Stability & Regressions

| Severity | Issue | Status | PR/Fix |
|----------|-------|--------|--------|
| **High** | Cache does not store `provider_specific_fields` (Anthropic citations) | CLOSED | [Issue #13048](https://github.com/BerriAI/litellm/issues/13048) |
| **High** | Background health checks load entire unbounded table into memory → OOM at scale | CLOSED | [Issue #37611](https://github.com/BerriAI/litellm/issues/37611) |
| **High** | Streaming + logprobs fails for vLLM (PydanticSerializationError) | OPEN | [Issue #18801](https://github.com/BerriAI/litellm/issues/18801) |
| **Medium** | Redis CROSSSLOT errors on Azure Redis Enterprise (non-cluster mode) | CLOSED | [Issue #30065](https://github.com/BerriAI/litellm/issues/30065) |
| **Medium** | Audit-log writes dropped on worker shutdown (fire-and-forget tasks) | OPEN | [Issue #43583](https://github.com/BerriAI/litellm/issues/43583) |
| **Medium** | Spend logs record $0 for custom models not in built-in cost map | OPEN | [Issue #35691](https://github.com/BerriAI/litellm/issues/35691) |
| **Medium** | Key over max_budget admitted after 60s idle until batch writer flushes | OPEN | [Issue #43732](https://github.com/BerriAI/litellm/issues/43732) |

---

## What This Means for Application Developers

1. **If you run LiteLLM in production**: Verify your Docker deployment pulls signed images using cosign to ensure supply-chain integrity.

2. **If you use Redis caching with Azure Redis Enterprise**: The CROSSSLOT error fix (Issue #30065) is now available — ensure your deployment includes the fix for multi-key operations.

3. **If you use streaming with vLLM and logprobs**: A known PydanticSerializationError persists (Issue #18801) — avoid combining `stream=True` with `logprobs=True` until resolved.

4. **If you track costs**: Custom model deployments outside the built-in cost map may record $0 in spend logs despite correct `estimated_cost` — monitor via the estimated_cost field as a workaround.

5. **If you use Cerebras**: The SDK now correctly handles partial OpenAI compatibility (Issue #31333 closed), but be aware not all OpenAI features (tools/response_format) are supported.

6. **If you manage multi-tenant deployments**: Redis cache keys for end users are not invalidated on customer create/update/delete operations (Issue #31838) — consider manual cache clears when managing customer lifecycle.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate a digest for Unsloth based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases**: None in last 24h

**Issues**: 17 total, with some key ones:
- #11792 - Memory issue with Qwen Image 2.1 Q4_K_M on M5 Max with 48GB
- #8716 - Feature request for custom SSL files
- #10288 - Bug with tapClientLookup error and message parts
- #8602 - Feature request for no chat history toggle
- #11913 - Windows winget ARM64 package issue (CLOSED)
- #12372 - Studio mmproj-F16.gguf loading from disk causing t/s regression
- #11638 - AMD Windows Qwen-Image-2.1 text encoder issue
- #11810 - --mmproj-device rejected as invalid device (CLOSED)
- #8134 - Studio prequantized MLX models attestation (CLOSED)
- #12369 - Feature request for auto-chunking large text attachments
- #12366 - Feature request for multiple system prompts
- #12365 - Multi-account model sync issue
- #12364 - OpenAI-compatible API adds ~1.2s latency
- #12361 - Date in prompt issue
- #12327 - Model outputting "User's message is empty" (CLOSED)
- #11948 - CSV export issue (CLOSED)
- #12260 - Gradle build error (CLOSED)

**Pull Requests**: 140 total, top 20 shown:
- #12265 - Voice conversation mode (CLOSED, consolidation)
- #12346 - Fix PDF previews after extraction
- #12383 - Stop offering Claude sampling settings


- #12381 - Fix Base vs LoRA compare for voice messages
- #12379 - Train CSV NA/None cells as written
- #12382 - Keep local model's built-in system prompt when date setting is on
- #12380 - Make Compare load full fine-tune
- #12377 - Keep PDF form answers
- #12378 - Keep Word footnotes/endnotes
- #12373 - Decision API with TypeSafe, Liquid AI, OpenRouter
- #12376 - Keep placeholder and Vec<T> text
- #12386 - Keep audio model reply text
- #12385 - Voice pipeline latency benchmark
- #12384 - Desktop Voice Mode
- #12374 - Stop backend crashing on startup with tight memory
- #12351 - Preserve logits in fast cross entropy backward
- #12342 - Add audio.cpp as native engine
- #12375 - Open skill when chevron clicked
- #11905 - Replicate API streaming bridge & RAG integrations
- #12371 - Continue finished replies and resume GGUF reasoning

Now I'll organize this into the requested sections.</think>

# Unsloth Digest — 2026-10-01

## 1. Today's Highlights

Unsloth Studio sees substantial UI and backend work today, including voice mode reconstruction (PRs #12384-#12386) after the original fork was deleted, plus multiple bug fixes around PDF rendering, Word document handling, and CSV training. A notable performance regression was reported: Studio's mmproj loading from disk causes severe throughput regression, while the OpenAI-compatible API adds ~1.2s fixed latency per request.

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

## 3. New Model & Hardware Support

| Item | Description | Link |
|------|-------------|------|
| audio.cpp integration | Added as fourth native audio runtime (alongside llama.cpp, whisper.cpp, sd.cpp) for TTS, music, and ASR | [#12342](https://github.com/unslothai/unsloth/pull/12342) |
| Decision API expansion | Now supports TypeSafe, Liquid AI, OpenRouter, and other System One servers | [#12373](https://github.com/unslothai/unsloth/pull/12373) |
| Native Replicate API bridge | Adds streaming support for Replicate endpoints, reducing OpenAI-proxy dependency | [#11905](https://github.com/unslothai/unsloth/pull/11905) |

## 4. Performance & Optimization

| Item | Description | Link |
|------|-------------|------|
| Fast CrossEntropyLoss backward fix | Preserves logits to prevent silent gradient corruption with contiguous inputs | [#12351](https://github.com/unslothai/unsloth/pull/12351) |
| Memory-tight startup fix | Backend no longer crashes on high-CPU / low-memory machines (OpenBLAS retries) | [#12374](https://github.com/unslothai/unsloth/pull/12374) |
| Voice pipeline benchmark | Deterministic E2E latency benchmarking for voice mode | [#12385](https://github.com/unslothai/unsloth/pull/12385) |
| **Regression**: mmproj disk loading | Loading mmproj-F16.gguf from disk during generation causes severe t/s regression; `--mlock` rejected | [#12372](https://github.com/unslothai/unsloth/issues/12372) |
| **Regression**: API latency | OpenAI-compatible endpoint adds ~1.2s fixed overhead per request (3-5x slower on short text) | [#12364](https://github.com/unslothai/unsloth/issues/12364) |

## 5. Stability & Regressions

| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| **High** | mmproj loaded from disk during generation, causing severe throughput regression; `--mlock` rejected | OPEN | [#12372](https://github.com/unslothai/unsloth/issues/12372) |
| **High** | OpenAI-compatible API adds ~1.2s fixed latency per request, 3-5x slower than bundled llama-server | OPEN | [#12364](https://github.com/unslothai/unsloth/issues/12364) |
| **Medium** | Windows winget installs ARM64 package on x86 Intel CPUs | CLOSED (no fix PR noted) | [#11913](https://github.com/unslothai/unsloth/issues/11913) |
| **Medium** | AMD/Windows: Qwen-Image-2.1 downloads 16GB text encoder because torchao fails to load FP8 | OPEN | [#11638](https://github.com/unslothai/unsloth/issues/11638) |
| **Medium** | Multi-user inference: model doesn't sync correctly across LAN accounts | OPEN | [#12365](https://github.com/unslothai/unsloth/issues/12365) |
| **Low** | --mmproj-device / --spec-draft-device rejected as "invalid device" when Studio pins to single GPU | CLOSED | [#11810](https://github.com/unslothai/unsloth/issues/11810) |
| **Low** | CSV export produces unreadable encoded content | CLOSED | [#11948](https://github.com/unslothai/unsloth/issues/11948) |

## 6. What This Means for Application Developers

- **Voice mode is being rebuilt**: The voice conversation feature (consolidated from PRs #10373, #10374, #11074) is being re-merged. Expect voice capabilities to return to `main` soon.
- **Audio stack expansion**: Adding audio.cpp as a fourth native engine gives developers more TTS/ASR options beyond whisper.cpp.
- **LLM gateway improvements**: The native Replicate API bridge and expanded Decision API support reduce reliance on OpenAI-compatible proxies — useful if you're integrating with diverse model providers.
- **Data handling fixes**: Several PRs improve document processing (PDF forms, Word footnotes, CSV training with NA/None values). If you're building RAG pipelines or fine-tuning on CSV data, these changes reduce silent data loss.
- **Watch for regressions**: The mmproj disk-loading issue and OpenAI API latency overhead could significantly impact throughput-sensitive workloads. Monitor performance after updates.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*