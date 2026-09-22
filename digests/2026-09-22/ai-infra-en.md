# AI Infrastructure Digest 2026-09-22

> Generated: 2026-09-22 01:04 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to generate a cross-project comparison report based on the digests I created for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me synthesize all the information into a cohesive ecosystem overview with the requested sections.

Let me organize the data:

**vLLM:**
- No releases in last 24h
- Major focus: Blackwell SM120 nvfp4 KV cache, MXFP8 fusion, PD disaggregation
- Active work on Qwen3, GLM-5.3, DeepSeek models
- Issues: GLM degeneration, Intel XPU TP=2, DeepSeek V3 corruption

**SGLang:**
- No releases in last 24h
- Pipeline parallelism, PD disaggregation, agent-aware KV cache
- GLM-5.3-Flash on SM120, SenseNova-U1, Apple Silicon MoE
- Performance: Kimi K3 CUDA graph, radix cache optimization

**llama.cpp:**
- HIP_VERSION bump, MAP_POPULATE removal, --no-mmap-prefetch flag
- Ling 3.0 VL, Imagination PowerVR C-Series (crashing), Hexagon HMX
- GPU-resident MoE cache, Vulkan optimization, physical cores for threads

**Ollama:**
- Manifest list compatibility changes, reasoning budget at line boundaries
- Thinking to chat template, runaway detection fix

**LiteLLM:**
- PII masking for streaming, priority routing, anonymous telemetry
- Fal AI pricing, Redis semantic caching, DeepSeek reasoning effort

**Unsloth:**
- Qwen3-Omni, Phi-4-reasoning-vision, Muse-Glimmer
- Intel Arc B60 Vulkan error, RTX 5070 Ti slowdown
- Skip redundant TRL kbit prep, bitsandbytes live streams
 
I'll synthesize these insights into a comprehensive ecosystem analysis that highlights the key technological developments and interconnections across different AI infrastructure projects.</think>

# Cross-Project Comparison — AI Infrastructure Ecosystem Report

---

## 1. Ecosystem Overview

The AI infrastructure landscape today reflects a maturing stack with clear specialization across layers. **vLLM and SGLang** continue competing in the high-performance serving layer, with both racing to support Blackwell (SM120) hardware and advanced quantization formats (nvfp4, MXFP8, MXFP4). **llama.cpp** maintains its position as the universal runtime, now extending from local/mobile inference into GPU-resident MoE caching and Vulkan optimization. Meanwhile, **Ollama** simplifies deployment with manifest handling improvements, and **LiteLLM** provides the gateway/orchestration layer with PII masking and priority routing. **Unsloth** occupies the fine-tuning layer, addressing memory optimization and vision model training. The collective signal: the ecosystem is maturing toward heterogeneous hardware support (Intel XPU, AMD ROCm, Apple Silicon, Imagination PowerVR) and agentic workloads (thinking blocks, tool calls, KV cache awareness).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs Merged/In Progress | Releases (24h) | Primary Focus Area |
|---------|--------------|------------------------|-----------------|---------------------|
| **vLLM** | 14 (6 critical) | 10+ landed, 8+ in progress | None | Serving engine, Blackwell KV cache, PD disaggregation |
| **SGLang** | 10 (3 high) | 7+ landed, 5+ in progress | None | Serving engine, pipeline parallelism, agent-aware caching |
| **llama.cpp** | 9 (2 critical) | 12+ landed, 8+ in progress | 3 breaking changes | Local/mobile runtime, Vulkan, MoE caching |
| **Ollama** | 2 (1 medium) | 6 landed, 1 major refactor | None | Simplified deployment, manifest handling |
| **LiteLLM** | 10 (4 high) | 10+ landed, 3+ in progress | None | Gateway/orchestration, pricing, PII masking |
| **Unsloth** | 20 (3 high) | 20+ in progress | None | Fine-tuning, vision models, memory optimization |

**Observation:** vLLM and SGLang show the highest serving-layer activity, while Unsloth dominates the training/fine-tuning layer. LiteLLM leads gateway work.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|----------|
| **Blackwell SM120 (nvfp4 KV)** | 🔥 In progress (#49011) | Tracking (#37813) | — | — | — |
| **Qwen3-Omni** | — | — | — | — | ✅ Added (#11467) |
| **GLM-5.3-Flash** | 🔥 Bug fixes (#56868, #56605) | 🔥 Tracking (#37105) | — | — | — |
| **DeepSeek V4.1 MXFP8** | ✅ Fusion landed (#57428) | — | — | — | — |
| **Ling 3.0 VL** | — | — | ✅ Added (#29151) | — | — |
| **SenseNova-U1** | — | 🔥 Roadmap (#37742) | — | — | — |
| **Phi-4-reasoning-vision** | — | — | — | — | ✅ Fixed (#11469) |
| **Muse-Glimmer** | — | — | — | — | 🔥 Bug (#11434) |
| **Kimi K3 (MI355X)** | ✅ GEMM-RS fusion | ✅ CI/test work | — | — | — |

**Who is ahead:**  
- **Blackwell / SM120:** vLLM leads with active KV cache wiring; SGLang is tracking.
- **GLM-5.x:** Both vLLM and SGLang have active bugs; llama.cpp supports via standard MLA.
- **Vision-language:** llama.cpp added Ling 3.0 VL; Unsloth fixed Phi-4-reasoning-vision.
- **MoE optimization:** llama.cpp leads with GPU-resident LRU cache; vLLM has similar work in progress.

---

## 4. Performance Frontier

| Optimization Area | Projects Active | Key Work |
|-------------------|-----------------|----------|
| **KV cache / quantization** | vLLM, SGLang, llama.cpp | nvfp4 (SM120), MXFP8 fusion, GPU-resident MoE cache, cache-aware admission |
| **Batching / scheduling** | vLLM, SGLang | Prefill scheduling outside DP, breakable CUDA graphs, radix cache eviction batching |
| **Kernel fusion** | vLLM, llama.cpp | MXFP8 GEMM+RS fusion, AITER fusion (ROCm), Vulkan F32 load 2-at-a-time |
| **Distributed serving** | vLLM, SGLang | PD disaggregation expansion, pipeline parallelism roadmap, P/D KV transfer gauges |
| **Memory management** | llama.cpp, Unsloth | MAP_POPULATE removal, --no-mmap-prefetch, skip redundant TRL kbit prep |
| **Streaming** | LiteLLM, llama.cpp | PII masking for streaming, Redis semantic caching fix |

**Frontier concentration:** The highest-value work is集中在 KV cache innovations ( Blackwell nvfp4, MXFP8, GPU-resident MoE caching) and distributed serving (PD disaggregation, pipeline parallelism). These directly impact throughput and latency for long-context and multi-tenant deployments.

---

## 5. Layer Positioning

| Layer | Primary Projects | Role |
|-------|-----------------|------|
| **Gateway / Orchestration** | LiteLLM | API proxy, cost tracking, PII masking, multi-provider routing |
| **Serving Engine** | vLLM, SGLang | High-throughput LLM serving, KV cache management, PD disaggregation |
| **Local Runtime** | llama.cpp | Cross-platform inference, mobile/Vulkan, lightweight deployment |
| **Simplified Deployment** | Ollama | Single-binary distribution, manifest management, ease-of-use |
| **Fine-tuning / Training** | Unsloth | Memory-efficient training, vision fine-tuning, GGUF export |

**Key differentiation:**  
- **vLLM vs SGLang:** Both target high-performance serving; vLLM leads on Blackwell hardware, SGLang leads on pipeline parallelism roadmap and agent-aware KV cache. SGLang has tighter integration with Radix (LMCache).
- **llama.cpp vs Ollama:** llama.cpp is the engine; Ollama wraps it for simplified consumption. Ollama's manifest work enables multi-runner coexistence.
- **LiteLLM vs the field:** LiteLLM sits above all as a gateway, providing unified API, observability, and cost control across any backend.

---

## 6. Trend Signals

### What Agent / Application Developers Should Watch

1. **Blackwell (SM120) support is imminent** — Both vLLM and SGLang are actively wiring `nvfp4` KV cache. Expect 200K+ context windows on RTX 5090 / PRO 6000 within weeks. Test your long-context agent workflows on Blackwell hardware once released.

2. **Agent-aware KV cache is coming** — SGLang's RFC (#24656) and vLLM's cache-aware admission ordering signal a shift from generic batching to workflow-aware caching. Agents with repeated context (retrieval, tools, history) will benefit significantly.

3. **Think tokens are now first-class** — Ollama fixed reasoning budget termination (#18212) and thinking-to-chat-template propagation (#18281). Applications displaying model reasoning should verify they're now receiving完整 thinking output.

4. **PII masking reaches streaming** — LiteLLM's streaming PII masking (#42351) is now available. If you're building user-facing apps with guardrails, this closes a significant data leakage vector.

5. **Mobile inference is getting serious** — llama.cpp's Hexagon HMX kernel delivers 1.5-3X prompt processing on Galaxy S26/25/24. Combined with Vulkan fixes, mobile agents can expect much better on-device performance.

6. **Watch for MTP regressions** — Unsloth's Qwen3 MTP crashes and llama.cpp's graph construction issues indicate instability in Multi-Token Prediction. Avoid MTP-enabled models in production until the next llama.cpp build stabilizes.

7. **Quantization continues fragmenting** — nvfp4, MXFP8, MXFP4, IQ3, Q5_K — the explosion of quantization formats complicates benchmarking. Stick to well-tested combinations (W4A16, FP8 KV) for production until integrators catch up.

8. **ROCm / AMD is improving but unstable** — MI355X support is progressing, but Imagination PowerVR (Pixel 11 Pro) is crashing and Strix Halo shows regressions. Test AMD deployments thoroughly before production.

---

*Synthesized from project digests dated 2026-09-22.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to generate a vLLM digest for 2026-09-22 based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases**: None in the last 24h

**Issues (top by comments)**:
1. #41663 - XPU TP=2 bug on Intel Arc Pro B70 - 40 comments - CLOSED
2. #49011 - nvfp4 KV cache on SM120 - 34 comments - Feature request
3. #25750 - Whisper feature requests tracking - 26 comments
4. #56868 - GLM-5.3-Flash bug with long-decode degeneration - 21 comments
5. #56605 - GLM-5.3-Flash word salad bug - 18 comments
6. #54363 - RFC: Data integrity for filesystem KV offload - 18 comments
7. #24885 - RFC: Shutdown Semantics - 18 comments - CLOSED
8. #27828 - Performance torch.compile issues - 16 comments - CLOSED
9. #33089 - Multi-turn conversation support for OpenAI Response API - 16 comments
10. #46249 - Qwen3.6-27B tool calls regression with MTP - 15 comments
11. #42729 - RFC: Derender Endpoints - 14 comments
12. #57740 - Image pad token misrecognition bug - 12 comments
13. #49730 - DFlash performance lower than expected - 11 comments
14. #52109 - DeepSeek-V4-Flash corruption on ROCm - 10 comments

**Pull Requests**:
- #58012 - CI ROCm MI355 Kimi-K3 unit test group


- #53948 - MRV2 PP deferred sampled-result receives
- #57891 - RL Sleep retain frozen weights
- #57914 - Bugfix /dev/shm fallback for Engram
- #54905 - Bugfix Spec Decode ngram_gpu compile cache
- #57063 - CI Split V1 Attention into jobs
- #58004 - Metrics KV cache pinned gauges
- #54627 - Core V1 prefill_schedule_interval outside DP
- #56983 - Spec Decode DFlash2 with GLM-5.3
- #57586 - Perf breakable CUDA graphs

I'm tracking multiple performance optimizations and feature additions across distributed computing, memory management, and inference acceleration. Key focus areas include novel compile cache strategies, improved CUDA graph handling, and expanded hardware support for specialized AI models.

The pull requests reveal intricate system-level improvements targeting inference efficiency, memory handling, and multi-GPU performance optimizations. Several PRs address specific hardware configurations like ROCm and emerging GPU architectures, demonstrating a commitment to broad platform compatibility.

Specific technical enhancements include kernel innovations like persistent_topk, attention mechanism refinements for GLM models, and speculative decoding support. These modifications aim to reduce computational overhead and improve overall system responsiveness.

Key focus areas involve performance optimization, particularly around NVIDIA and ROCm platforms, with targeted improvements in attention kernels, caching strategies, and metric tracking. The work indicates a systematic approach to refining low-level system interactions and hardware-specific optimizations.

Emerging capabilities span support for cutting-edge hardware like the RTX 5090 with SM120 architecture, advanced quantization techniques, and memory management innovations. Significant engineering efforts are addressing complex challenges in multi-GPU environments, including tensor parallelism, distributed serving, and memory leak prevention.

Critical stability work targets specific GPU architectures and model configurations, with ongoing investigations intoIntel GPU tensor parallelism, AMD GPU memory corruption, and model-specific performance regressions. The team is systematically addressing hardware-specific edge cases while maintaining broad platform compatibility.</think>

# vLLM Project Digest — 2026-09-22

## 1. Today's Highlights

The vLLM project is seeing active development across several fronts: significant performance work landed around DeepSeek-V4.1 MXFP8 GEMM fusion with sequence-parallel reduce-scatter on SM100, while multiple ROCm CI improvements are consolidating AMD GPU coverage including new MI355 Kimi-K3 tests. The community continues to address model-specific correctness issues, particularly around GLM-5.3-Flash degenerate output in long-decode scenarios.

---

## 2. Releases & Breaking Changes

No releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Model / Hardware | Description | PR/Issue |
|------------------|-------------|----------|
| **NVIDIA RTX 5090 (SM120)** | Feature request for `nvfp4` KV cache support — Flashinfer ships kernels, vLLM wiring in progress. Working prototype demonstrates 245K ctx on a 5090. | [#49011](https://github.com/vllm-project/vllm/issues/49011) |
| **AMD MI355X (gfx950)** | Performance optimization tracking for Qwen3.8-2.4T-A95B with MXFP4 quantization. | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **Intel XPU** | Bug investigation ongoing for TP=2 on dual Intel Arc Pro B70 (Battlemage) — causes GP fault and xe BCS engine reset. | [#41663](https://github.com/vllm-project/vllm/issues/41663) |
| **GLM-5.3-Flash + DFlash2** | Support landed for block-diffusion drafter models in speculative decoding. | [#56983](https://github.com/vllm-project/vllm/pull/56983) |

---

## 4. Performance & Optimization

### Landed / Ready
- **DeepSeek-V4.1 MXFP8 Fusion**: PR #57428 fuses `wo_b` GEMM with sequence-parallel reduce-scatter on SM100, reducing two kernels + one HBM round trip per layer. Builds on Kimi-K3 GEMM-RS kernel work.
- **Breakable CUDA Graphs Default**: PR #57586 enables batch-invariant persistent Triton matmul by default under `VLLM_BATCH_INVARIANT`, allowing tuned matmul configs to see runtime M dimensions.
- **GLM Sparse MLA Overhead Reduction**: PR #57458 reduces query packing and sparse-index preparation overhead for FlashInfer NoPE MLA attention.
- **Cache-Aware Admission Ordering**: PR #54625 adds request admission logic that prioritizes requests whose prefix is already resident in KV cache within a look-ahead window.
- **Persistent TopK Kernel**: PR #55122 introduces a deterministic `persistent_topk` kernel (QSA / sparse-indexer block selection) that is faster than the exact-topk workaround.
- **Prefill Scheduling Outside DP**: PR #54627 extends `prefill_schedule_interval` to work outside data parallelism for single-node scenarios.

### In Progress
- **KV Transfer Gauges**: PR #58004 adds metrics for KV cache pinned by pending P/D transfers — enables monitoring of prefiller cache held for slow/stuck decoders.
- **RL Sleep Preservation**: PR #57891 adds `--sleep-preserve-parameter-names` to retain frozen weights across level-2 sleep cycles.

---

## 5. Stability & Regressions

### Critical
| Issue | Description | Status |
|-------|-------------|--------|
| **GLM-5.3-Flash degeneration** | Long-decode produces repeated tokens ("word salad") after accumulated reasoning, or silent retrieval corruption for prompts ≥4-5k tokens on ROCm. Two related bugs (#56868, #56605). | Open |
| **DeepSeek-V3.2 / GLM-5.x DSA decode corruption** | PD-disaggregation on ROCm/MI300X with CUDA graphs produces degenerate repeated-token garbage (`locklocklock…`) for remote-prefilled requests. | [#57064](https://github.com/vllm-project/vllm/issues/57064) |
| **Qwen3.8-Flash-Next decode starvation** | Long-prefill workload periodically starves active decode for 3-7 minutes on 2-node DGX Spark TP2. | [#54919](https://github.com/vllm-project/vllm/issues/54919) |

### Moderate
| Issue | Description | Fix PR |
|-------|-------------|--------|
| **MTP tool call regression** | Qwen3.6-27B tool calls fail on Responses API when MTP enabled. | Open — [#46249](https://github.com/vllm-project/vllm/issues/46249) |
| **Sleep-mode HBM leak** | `--enable-sleep-mode` leaks GPU HBM for models with `--mm-encoder-tp-mode data`. | Open — [#47654](https://github.com/vllm-project/vllm/issues/47654) |
| **Image pad token misrecognition** | User-authored `<|image_pad|>` in text is misidentified as image placeholder, causing image binding mismatch. | [#57740](https://github.com/vllm-project/vllm/issues/57740) |
| **DFlash Qwen3.5 4B performance** | DFlash performance on H100 lower than expected. | [#49730](https://github.com/vllm-project/vllm/issues/49730) |

### Fixes Landed
- **Engram /dev/shm fallback**: PR #57914 guards against `FileNotFoundError` when `/dev/shm` is absent.
- **Spec Decode ngram_gpu compile cache**: PR #54905 isolates V1 ngram kernel's torch.compile cache namespace from backbone model.
- **MTP draft KV cache annotation**: PR #55390 fixes hybrid attention + Mamba MTP models missing drafter group annotations.

---

## 6. What This Means for Application Developers

1. **Agent/Tooling Users**: The Qwen3.6-27B + MTP tool call regression (#46249) is notable — if using speculative decoding with MTP, test tool calls thoroughly before production deployment.

2. **Long-Context Workloads**: GLM-5.3 users with context lengths >4-5k tokens should monitor for silent output corruption on ROCm (#52109, #57064). The root cause involves DSA sparse-MLA decode under CUDA graphs in PD-disaggregation.

3. **NVIDIA Blackwell Users**: The `nvfp4` KV cache feature is actively being wired up (#49011) — significant context-length improvements (245K ctx) are coming for SM120 hardware.

4. **Multi-Turn Conversations**: Multi-turn support for the OpenAI Response API (#33089) is in progress, relevant for agents using `/v1/responses`.

5. **Memory-Constrained Deployments**: Sleep-mode users with multimodal encoders should be aware of the HBM leak (#47654) — a fix is not yet merged.

6. **Disaggregated Serving**: New KV transfer metrics (#58004) will help debug prefiller/decoder stalls in P/D deployments — expect improved observability soon.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the GitHub data and create a structured digest for SGLang on 2026-09-22.

Looking through the data:

**Releases:** None in the last 24h

**Key Issues (by comment count):**
1. #11857 - Pipeline parallelism roadmap (19 comments) - High priority roadmap for pipeline parallelism
2. #17050 - CI Test Failures and Fixes (14 comments) - Tracking CI issues
3. #13214 - KeyError with model weights (14 comments) - Bug
4. #24656 - RFC: Agent-Aware KV Cache Phase 1 (11 comments)
5. #22889 - Free-Threaded Python (3.14t) Support (10 comments)
6. #16255 - DeepSeek V2 refactor (10 comments) - Closed
7. #21703 - PD Disaggregation Roadmap (9 comments)
8. #21891 - SGLang Simulator roadmap (9 comments)
9. #39499 - dLLM Serving roadmap (9 comments)
10. #37742 - SenseNova-U1 tracking (9 comments)

**Key PRs:**
- Multiple AMD/ROCm fixes for GLM models
- LMCache unified radix cache integration
- PD disaggregation improvements
- XPU CI fixes
- Diffusion testing improvements
- Various kernel optimizations

Let me organize this into the requested format.</think>

# SGLang Digest — 2026-09-22

## 1. Today's Highlights

The SGLang project continues advancing on multiple infrastructure fronts. The most active development tracks include pipeline parallelism roadmap (#11857), PD disaggregation improvements (#21703), and Apple Silicon optimization efforts. CI stability remains a focus with 3 broken and 10 flaky tests currently tracked (#17050). The project is also moving forward with agent-aware KV cache design (#24656) and free-threaded Python 3.14t support (#22889), reflecting continued investment in modern Python concurrency and agentic workloads.

---

## 2. Releases & Breaking Changes

No releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Description | Links |
|------|-------------|-------|
| **SenseNova-U1** | Feature and performance tracking for SenseNova-U1/U1.5 support | [#37742](https://github.com/sgl-project/sglang/issues/37742) |
| **GLM-5.3-Flash on SM120** | Tracking RTX PRO 6000 (Blackwell) support with TP2, W4A16, FP8 KV | [#37813](https://github.com/sgl-project/sglang/issues/37813), [#37105](https://github.com/sgl-project/sglang/issues/37105) |
| **Apple Silicon MoE** | Dedicated optimization effort for MoE models on Apple Silicon | [#22283](https://github.com/sgl-project/sglang/issues/22283) |
| **Free-Threaded Python** | RFC for CPython 3.14t (nogil) support | [#22889](https://github.com/sgl-project/sglang/issues/22889) |
| **GLM-5.2 on MI355X** | MXFP4 dense experts and MoE/MLA launch fixes for AMD ROCm | [#40189](https://github.com/sgl-project/sglang/pull/40189) |
| **AMD DSA backend** | Non-2048 top-k widths support for GLM-5.3-Flash | [#39340](https://github.com/sgl-project/sglang/pull/39340) |

---

## 4. Performance & Optimization

| Area | Status | Details | Links |
|------|--------|---------|-------|
| **Pipeline Parallelism** | Roadmap active | Long context prefill + PD disaggregation complete; throughput optimization in progress | [#11857](https://github.com/sgl-project/sglang/issues/11857) |
| **PD Disaggregation** | Roadmap active | Expanding compatibility with new models and parallel strategies | [#21703](https://github.com/sgl-project/sglang/issues/21703) |
| **SGLang Simulator** | RFC active | Performance tuning simulation for TTFT/TPOT optimization | [#21891](https://github.com/sgl-project/sglang/issues/21891) |
| **dLLM Serving** | Roadmap active | Block-diffusion serving with shared components | [#39499](https://github.com/sgl-project/sglang/issues/39499) |
| **Kimi K3 CUDA Graph** | Fixed | Stream explosion reduced from 96 to 4 target streams on B300 | [#40640](https://github.com/sgl-project/sglang/pull/40640) |
| **Radix Cache** | Optimization landed | Batched eviction frees into one drain per KV component | [#36370](https://github.com/sgl-project/sglang/pull/36370) |
| **LMCache Integration** | In progress | Unified radix cache with external KV-cache backend | [#38652](https://github.com/sgl-project/sglang/pull/38652) |
| **ROCm AITER Fusion** | Fix landed | GLM models allreduce fusion on AMD | [#39790](https://github.com/sgl-project/sglang/pull/39790) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Flashinfer backend not supported on Blackwell GPUs | Open | — |
| **High** | Abort cleanup hook ordering issue causing session leak | Open | — |
| **Medium** | `/v1/loads` undercounts running requests with pipeline parallelism | Closed | — |
| **Medium** | GLM-5.3-Flash on RTX PRO 6000: DSA backend blockers | Open | — |
| **Medium** | HiCache staged write-back: 128 KiB batch path faults | Open | — |
| **Low** | DFLASH draft layout not validated causing silent shifts | Open | — |
| **CI** | XPU NIXL disaggregation test disabled (UCX build missing) | Fix merged | [#40540](https://github.com/sgl-project/sglang/pull/40540) |

---

## 6. What This Means for Application Developers

- **Long context workloads benefit**: Pipeline parallelism and PD disaggregation roadmaps are progressing, targeting reduced TTFT for 1M+ token contexts.
- **Agentic workloads**: Agent-aware KV cache Phase 1 RFC (#24656) signals upcoming features for workflow-aware caching in multi-step applications.
- **Python 3.14t support**: If you need high-throughput serving without GIL contention, the free-threaded Python effort (#22889) may enable new deployment patterns.
- **AMD/Apple Silicon gains**: Ongoing kernel optimizations for ROCm and Metal backends expand viable hardware options beyond NVIDIA.
- **Testing improvements**: Diffusion and multimodal test infrastructure now shares pytest launchers (#40652), improving CI reliability for multimodal deployments.
- **Model ecosystem**: DeepSeek V3/V3.1/V3.2 family refactoring (#16255) completed, and support for GLM-5.x and SenseNova-U1 is expanding.

---

*Generated from GitHub data — sgl-project/sglang*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub issue tracker data from the llama.cpp repository and create a structured digest.

Looking at the data:

**Issues (bug reports and feature requests):**
1. #25097 - Bug: tg in webui viewing in phone is consistently 10% higher than webui in desktop
2. #24090 - Feature Request: WebUI - Projects / Folders for Conversations
3. #29104 - Eval bug: server silently stops processing when /metrics endpoint is scraped by VictoriaMetrics
4. #29091 - Bug: /v1/models metadata serializes "vocab_type" as boolean true instead of integer enum
5. #28214 - Vulkan: GPU firmware crashes on Imagination PowerVR C-series (Pixel 11 Pro, Tensor G6, subgroupSize 128)
6. #27249 - server: /props leaks the randomized mtmd media_marker — any conversation quoting it becomes permanently un-tokenizable (CLOSED)
7. #24164 - Bug: WEBUI does not uploads audio ogg files
8. #29089 - PEG→GBNF: `until()` can stop mid-delimiter, leaving Gemma 4 tool calls unconstrained under `tool_choice: required` (CLOSED)

**Pull Requests (recent updates):**
1. #27861 - [ggml] llama: GPU-resident LRU cache for host-offloaded MoE expert weights
2. #29193 - musa: PH1 (MTT S5000) fixes
3. #29254 - [Vulkan, ggml] [vulkan] Load F32 A matrix 2 at a time when its 2-aligned
4. #29151 - model: add Ling 3.0 VL (BailingMoeV3VL) support
5. #28725 - Add SYCL graph record and replay


6. #23932 - common: use physical core count for --threads -1 default
7. #20723 - ggml-cpu: extend RVV repack GEMM and GEMV to other VLENs
8. #29107 - SYCL: IQ3 code reorder
9. #27537 - server: return prompt-token logprobs when echo=true
10. #29199 - hexagon: new HMX-optimized GATED_DELTA_NET
11. #29231 - HIP: bump HIP_VERSION required for fp8
12. #29211 - llama-v

I notice several performance-related pull requests focusing on different hardware backends. The Physical cores thread optimization (#23932) addresses CPU threading, while the HMX GATED_DELTA_NET (#29199) targets hexagon optimization. There's also work on expanding RVV repack support across various vector lengths (#20723) and improvements to SYCL code reordering for IQ3 (#29107).

The most critical items requiring immediate attention are the Vulkan GPU firmware crash on Imagination PowerVR, the /v1/models vocab_type serialization bug, and the VictoriaMetrics endpoint processing issue. Several pull requests introduce model support like Ling 3.0 VL and implement performance enhancements across different hardware platforms, including Vulkan F32 matrix loading and SYCL graph replay functionality.</think>

# llama.cpp Digest — September 22, 2026

## 1. Today's Highlights

The project sees significant backend work: Vulkan optimization for Intel GPUs loading F32 matrices more efficiently, a new HMX kernel for GATED_DELTA_NET delivering 1.5-3X prompt processing gains on mobile (Galaxy S26/25/24), and progress on GPU-resident LRU caching for MoE expert weights. On the bug front, three critical issues affect production deployments: the Vulkan driver crash on Pixel 11 Pro (Tensor G6), a silent server hang when Prometheus-style metrics are scraped, and a media_marker leak in /props that permanently breaks tokenization for quoted conversations.

---

## 2. Releases & Breaking Changes

| Item | Description | PR/Issue |
|------|-------------|----------|
| HIP_VERSION bump | Minimum HIP_VERSION raised to avoid missing `__hip_fp8_e4m3` in ROCm 6.2 | [#29231](https://github.com/ggml-org/llama.cpp/pull/29231) |
| MAP_POPULATE removal | Linux no longer uses `MAP_POPULATE` (blocking call that forces immediate full load) | [#28055](https://github.com/ggml-org/llama.cpp/pull/28055) |
| --no-mmap-prefetch flag | New CLI option to skip `MADV_WILLNEED` prefetch (blocks on macOS, problematic for >50% RAM models) | [#29250](https://github.com/ggml-org/llama.cpp/pull/29250) |

---

## 3. New Model & Hardware Support

| Model/Architecture | Type | PR/Issue |
|--------------------|------|----------|
| Ling 3.0 VL (BailingMoeV3VL) | Vision-language model (124B total / 5.1B active, hybrid KDA + gated MLA, 512-expert MoE) | [#29151](https://github.com/ggml-org/llama.cpp/pull/29151) |
| "sophia" pre-tokenizer | New vocab type for byte-level BPE without regex pre-splitting | [#29211](https://github.com/ggml-org/llama.cpp/pull/29211) |
| Imagination PowerVR C-Series | Vulkan backend (VK_DRIVER_ID_IMAGINATION_PROPRIETARY, Pixel 11 Pro, Tensor G6) — **crashes GPU firmware** | [#28214](https://github.com/ggml-org/llama.cpp/issues/28214) |
| Hexagon HMX | New GATED_DELTA_NET kernel (1.5-3X prompt processing on Galaxy S26/25/24) | [#29199](https://github.com/ggml-org/llama.cpp/pull/29199) |

---

## 4. Performance & Optimization

| Optimization | Details | PR |
|--------------|---------|-----|
| Vulkan F32 load | Load F32 A matrix 2 at a time when 2-aligned (Intel GPU fix) | [#29254](https://github.com/ggml-org/llama.cpp/pull/29254) |
| GPU-resident MoE cache | LRU cache for host-offloaded expert weights — reduces host RAM bandwidth bottleneck | [#27861](https://github.com/ggml-org/llama.cpp/pull/27861) |
| Physical cores for --threads | Use `common_cpu_get_num_physical_cores()` instead of logical count (fixes HT overcount) | [#23932](https://ggml-org/llama.cpp/pull/23932) |
| RVV GEMM/GEMV | Extended repacking kernels to VLENs 128-1024, added Q5_K and MXFP4 | [#20723](https://github.com/ggml-org/llama.cpp/pull/20723) |
| SYCL graph replay | Port of CUDA graph record/replay to SYCL | [#28725](https://github.com/ggml-org/llama.cpp/pull/28725) |
| OpenCL fusion | Fused QK RMSNorm + RoPE, K/V scaling, V materialization on Adreno 830 | [#28446](https://github.com/ggml-org/llama.cpp/pull/28446) |
| Muse Glimmer fix | Tool-call parser error on first turn without reasoning step | [#29242](https://github.com/ggml-org/llama.cpp/pull/29242) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | Vulkan GPU firmware crash on Pixel 11 Pro (Imagination PowerVR C-Series, subgroupSize 128) | Open | — |
| **Critical** | Server silently stops processing when `/metrics` scraped by VictoriaMetrics | Open | — |
| **High** | `/props` leaks randomized `media_marker` — quoting it permanently breaks tokenization (400 "Failed to tokenize prompt") | Closed | — |
| **Medium** | `/v1/models` serializes `vocab_type` as boolean `true` instead of integer enum | Open | — |
| **Medium** | WebUI displays 10% higher TG on mobile vs desktop | Open | — |
| **Low** | WebUI does not upload audio ogg files | Open | — |
| **Low** | PEG→GBNF `until()` can stop mid-delimiter, breaking Gemma 4 tool calls with `tool_choice: required` | Closed | — |

---

## 6. What This Means for Application Developers

1. **Metrics endpoint users**: If you scrape `/metrics` with Prometheus/VictoriaMetrics, your server may silently stop generating responses — avoid or monitor for this regression.

2. **Multimodal model users**: Avoid quoting content from `/props` responses in conversations — the exposed `media_marker` will permanently break tokenization.

3. **Mobile Vulkan users**: Pixel 11 Pro / Tensor G6 devices are currently unstable; avoid production multimodal workloads until the Imagination driver issue is resolved.

4. **Thread configuration**: The `--threads -1` default now correctly uses physical cores, not logical — expect different behavior on hyper-threaded systems; explicitly set `--threads` if you previously relied on the old behavior.

5. **Large model macOS users**: Use the new `--no-mmap-prefetch` flag to avoid blocking during load for models exceeding ~50% of RAM.

6. **SYCL/CUDA graph users**: SYCL now supports graph record/replay (port from CUDA); test thoroughly as memory reordering behavior differs.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to digest the Ollama GitHub PR activity from the provided list into a structured English report. Let me analyze the PRs:

1. **#18566** - docs: fix typo in troubleshooting LLM libraries section - minor doc fix
2. **#18565** - docs: correct eval_count description in API usage docs - minor doc fix
3. **#16590** - llama-server: prepare to remove compatibility patch with manifest list support - this is significant infrastructure work around manifest handling, runner-specific manifests, and backward compatibility
4. **#17563** - llm: stop guessing that a repetitive payload is a runaway - bug fix related to runaway detection
5. **#18212** - llama: end a spent reasoning budget at a line, not mid-word - important fix for reasoning budget handling
6. **#18281** - llm: send assistant thinking to the chat template - important fix for thinking block handling in chat templates

Now let me structure this into the requested format:

**Today's Highlights** - The most important items seem to be #18212 (reasoning budget at line boundaries) and #18281 (sending thinking to chat template), plus #16590 (manifest list compatibility changes) which is a significant architectural change.

**Releases & Breaking Changes** - #16590 mentions preparing to remove compatibility patch, which could be breaking for some use cases.

**New Model & Hardware Support** - None explicitly mentioned in these PRs

**Performance & Optimization** - None explicitly mentioned

**Stability & Regressions** - #17563 fixes the runaway detector issue, #18212 fixes the reasoning budget cut-off issue, #18281 fixes thinking block handling

**What This Means for Application Developers** - These changes affect how reasoning/thinking is handled in applications

Let me write this up professionally.</think>

# Ollama Daily Digest

## 1. Today's Highlights

The most significant update today is a pair of fixes addressing reasoning block handling: PR [#18212](https://github.com/ollama/ollama/pull/18212) ensures reasoning budgets terminate at line boundaries rather than mid-word, and PR [#18281](https://github.com/ollama/ollama/pull/18281) properly propagates assistant thinking content to chat templates. Together, these resolve long-standing issues with how structured thinking output is presented to users. Meanwhile, PR [#16590](https://github.com/ollama/ollama/pull/16590) introduces foundational changes to manifest list handling that will enable multi-runner coexistence under a single tag.

## 2. Releases & Breaking Changes

- **PR #16590** — `llama-server: prepare to remove compatibility patch with manifest list support`  
  Introduces manifest-list storage allowing runner-specific manifests to coexist under one tag while preserving existing v1 tags as downgrade anchors. Commands (show/list/copy/remove/pull/push) now understand runner and digest selection and transfer referenced child manifests and layers. This prepares for eventual removal of the legacy compatibility patch; users relying on old manifest behavior should test against this change.

## 3. New Model & Hardware Support

*No new model or hardware support announcements in today's PRs.*

## 4. Performance & Optimization

*No explicit performance or optimization work landed or in progress in today's PRs.*

## 5. Stability & Regressions

- **Medium** — **PR #18212** — `llama: end a spent reasoning budget at a line, not mid-word`  
  When a reasoning budget exhausted, the sampler forced the end sequence mid-UTF-8 codepoint, cutting off thinking blocks mid-word. Now terminates at line boundaries for cleaner output. Fix PR exists.

- **Medium** — **PR #18281** — `llm: send assistant thinking to the chat template`  
  `llamaServerChatMessage` was missing the `thinking` field from its outbound message construction, despite the field being parsed from the API and surviving through `MessageFromAPI` into `llm.Message`. This caused thinking content to be silently dropped from chat template rendering. Fix PR exists.

- **Medium** — **PR #17563** — `llm: stop guessing that a repetitive payload is a runaway`  
  The detector incorrectly flagged certain legitimate repetitive payloads (e.g., coding agents generating repeated strings) as runaways. The reporting bug is also addressed. Fix PR exists.

## 6. What This Means for Application Developers

- **Cleaner reasoning output**: With PR #18212, applications displaying model reasoning will no longer show truncated mid-word thinking blocks when budgets expire — output will cleanly terminate at line breaks.

- **Thinking content now visible**: PR #18281 ensures that when models emit thinking/reasoning blocks, this content is properly passed through to chat templates. Applications relying on thinking output (e.g., for reasoning transparency, agent debugging, or UX) will now receive the data they expect.

- **Fewer false runaway detections**: PR #17563 reduces false positives in repetitive payload detection, which was causing premature termination of valid generation in some coding scenarios.

- **Watch for manifest behavior changes**: PR #16590 is still in progress but signals upcoming changes to how multi-architecture and multi-runner images are managed. Test any automation that relies on manifest listing or copy operations.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze this GitHub data about LiteLLM and create a structured digest for 2026-09-22.

Looking at the data:

## Releases
- None in the last 24h

## Issues (top by comments)
1. #19105 - Budget confusion (CLOSED, stale) - 12 comments
2. #42005 - Responses-to-Chat bridge loses native tool calls (CLOSED) - 7 comments
3. #30139 - Bedrock passthrough fails with Claude Code (OPEN) - 5 comments
4. #17993 - Duration parser bug (CLOSED) - 5 comments
5. #27849 - sk- prefix missing (CLOSED) - 5 comments
6. #36164 - Meta Model API missing from UI (OPEN) - 5 comments
7. #41344 - Zero-cost budget bypass bug (CLOSED) - 5 comments
8. #42172 - OAuth token issue with Claude Code (OPEN) - 4 comments
9. #38358 - request_timeout never fires (OPEN) - 4 comments
10. #42104 - System messages break Gemini caching (OPEN) - 4 comments

## PRs (top)
1. #42381 - chore(prices): sync OpenRouter prices (2 models)
2. #42351 - fix(presidio): mask PII in streaming /v1/messages output
3. #42336 - fix(fal_ai): price non-canonical image sizes
4. #42257 - fix(deepseek): preserve native reasoning effort for V4 models
5. #42328 - fix(rust): preserve Python secret managers for native OCR
6. #42374 - feat(ui): freeze config.yaml owned settings in the dashboard
7. #42065 - feat(errors): prefilled GitHub issue link on unmapped internal errors


8. #31203 - fix(bedrock/claude_platform): strip body params the AWS endpoint rejects
9. #42373 - feat(proxy): opt-in anonymous usage telemetry
10. #42378 - feat(router): add group-scoped priority routing strategy

Now I'll organize this into the requested sections.</think>

# LiteLLM Digest — 2026-09-22

## 1. Today's Highlights

Today saw significant activity around bug fixes and new features, particularly in the areas of **PII masking for streaming outputs**, **routing improvements**, and **price syncing**. A notable new feature introduces opt-in anonymous telemetry for better OSS deployment visibility. Multiple budget-related bugs were closed, and a new priority routing strategy is being added to the router.

---

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours.

---

## 3. New Model & Hardware Support

| PR | Description | Link |
|---|---|---|
| #42381 | Syncs OpenRouter prices for 2 models (`openrouter/~z-ai/glm-latest` price adjustments) | [#42381](https://github.com/BerriAI/litellm/pull/42381) |
| #42334 | Adds `fal-ai/flux-lora-depth` (control image for image editing) and `fal-ai/moondream3-preview/query` (vision Q&A) | [#42334](https://github.com/BerriAI/litellm/pull/42334) |
| #42301 | Prices `openrouter/typesafe/jev-1.13` and adds OpenRouter decisions pass-through | [#42301](https://github.com/BerriAI/litellm/pull/42301) |

---

## 4. Performance & Optimization

| PR | Description | Link |
|---|---|---|
| #42379 | Fixes Redis semantic caching threshold widened to `f64` (caused `0.8` to never match) and restores Qdrant batch writes | [#42379](https://github.com/BerriAI/litellm/pull/42379) |
| #42336 | Improves Fal AI pricing for non-canonical image sizes — now bills by nearest pixel count row | [#42336](https://github.com/BerriAI/litellm/pull/42336) |
| #42257 | Preserves native reasoning effort for DeepSeek V4 models | [#42257](https://github.com/BerriAI/litellm/pull/42257) |

---

## 5. Stability & Regressions

### High Priority (Open)

| Issue | Description | Link |
|---|---|---|
| #42172 | **OAuth token leak**: `anthropic/<model>` with third-party `api_base` receives client's Claude subscription OAuth token instead of deployment's configured `api_key` | [#42172](https://github.com/BerriAI/litellm/issues/42172) |
| #38358 | **`request_timeout` never fires** when upstream is silent from first byte — streaming requests hang indefinitely | [#38358](https://github.com/BerriAI/litellm/issues/38358) |
| #30139 | LiteLLM Bedrock passthrough fails with Claude Code after several requests — missing model attribute, h11 Content-Length error | [#30139](https://github.com/BerriAI/litellm/issues/30139) |
| #41782 | Nebius provider cost calculation is off by 10x (~250$ reported vs ~2500$ actual) | [#41782](https://github.com/BerriAI/litellm/issues/41782) |
| #42104 | Mid-conversation `system` messages break Gemini/Vertex prompt caching — every turn reports `cache_read_input_tokens: 0` | [#42104](https://github.com/BerriAI/litellm/issues/42104) |

### Fixed / Closed

| Issue | Description | Link |
|---|---|---|
| #42005 | Responses→Chat bridge loses native tool calls on multi-turn replay, leaks reasoning as assistant text | [#42005](https://github.com/BerriAI/litellm/issues/42005) |
| #41344 | Zero-cost budget bypass leaks unbounded spend when free model has paid fallback | [#41344](https://github.com/BerriAI/litellm/issues/41344) |
| #17993 | Duration parser bug — large duration values fail due to day rollover | [#17993](https://github.com/BerriAI/litellm/issues/17993) |
| #42351 / #42335 | Presidio PII masking now works on streaming `/v1/messages` output | [#42351](https://github.com/BerriAI/litellm/pull/42351) |

---

## 6. What This Means for Application Developers

1. **Streaming PII masking fixed** — If you're using Presidio guardrails with `/v1/messages` streaming, card numbers and other PII are now properly masked. This was a significant data leakage risk.

2. **Budget bypass vulnerability closed** — Free tier deployments with paid fallbacks were allowing unlimited spend through the bypass. If you're using zero-cost budgets, verify your configurations after this fix.

3. **New telemetry option** — `LITELLM_TELEMETRY=true` enables opt-in anonymous usage reporting, helping the project understand OSS deployment patterns.

4. **Priority routing coming** — A new group-scoped priority routing strategy is being added, allowing ordered backups within groups without affecting direct requests.

5. **Claude Code passthrough issue** — If using Claude Code through LiteLLM with custom `api_base`, your OAuth tokens may be leaking to upstream providers. This is a security concern awaiting fix.

6. **Timeout behavior change** — If you rely on `request_timeout` for streaming, be aware it's not firing when upstream accepts the connection but never sends data — this can cause hangs.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate a structured digest for Unsloth based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Looking at the data:

**Releases:** None in the last 24h

**Issues (top by comments):**
1. #11143 - Bug: Qwen3.8-Flash-Next MTP aborts at load (14 comments)
2. #6730 - Feature request: Support MiCA (6 comments)
3. #7371 - Bug: Performance regression on Strix Halo + ROCm (5 comments)
4. #11184 - Feature: Implement Vulkan Training/Fine-tuning (4 comments)
5. #8178 - Feature: Unsloth Studio GPU memory cap control (4 comments)
6. #7506 - Bug: Crash on T4 Kaggle environment (3 comments)
7. #11219 - Bug: MTP drafter crashes with GGML_ASSERT (3 comments)
8. #10769 - Bug: Large Codeblocks Causes Lag (3 comments)
9. #11239 - Feature: Proxy Support (2 comments)
10. #11453 - Bug: Intel Arc Pro B60 Vulkan error (2 comments)
11. #10379 - Feature: Disable Tool Call Deduplication (2 comments)
12. #11349 - Bug: Bundled llama.cpp slower than official on RTX 5070 Ti (2 comments)
13. #11393 - Bug: Studio not returning all models (2 comments)
14. #11387 - Bug: API Keys cannot be copied (2 comments)
15. #11381 - Closed: Sandbox host policy (2 comments)
16. #10590 - Feature: Expose image training parameters in GUI (2 comments)
17. #11002 - Closed: Data Recipe worker SIGTERM (1 comment)


18. #11434 - Muse-Glimmer vision fine-tuning fails (1 comment)
19. #8814 - Closed: Minimax H3 won't run on AMD (1 comment)
20. #11384 - Backend CI TypeError (1 comment)

**Pull Requests (top):**
1. #11275 - Closed: Studio sidebar name fix
2. #11364 - Closed: Studio installers --no-rollback
3. #9560 - Closed: Continuation lease fix
4. #8804 - Open: Say why generation/model load failed
5. #11460 - Open: Keep pip/uv policy in force
6. #11459 - Open: Contrast slider reaches surfaces
7. #11458 - Open: Scale spacing with UI font size
8. #11495 - Open: Anchor worker source read on test file
9. #11494 - Open: Skip TRL's redundant kbit prep
10. #11467 - Open: Resolve auto class for omni checkpoints
11. #11469 - Open: Restore transformers 4.x image processing
12. #11468 - Open: Don't auto-enable padding-free
13. #10277 - Open: Floor ROCm torch to BNB compatibility
14. #10745 - Open: Live PyTorch streams for bitsandbytes
15. #10948 - Open: Native IFM reasoning and tool-call support
16. #10949 - Open: Preserve ambient transformers tier
17. #10950 - Open: Trust local checkpoints during export
18. #11493 - Closed: 16-bit pixels test fix
19. #11423 - Open: Streaming code fence highlighted
20. #11430 - Open: Cap tool-result text at 256 KB

Now organizing into sections:

1. **Today's Highlights** - Most important updates
2. **Releases & Breaking Changes** - None
3. **New Model & Hardware Support** - Qwen3-Omni, Phi-4-reasoning-vision, Muse-Glimmer, various hardware
4. **Performance & Optimization** - Bitsandbytes streams, TRL kbit prep, contrast slider, spacing scaling, code fence highlighting, tool result capping
5. **Stability & Regressions** - Qwen3 MTP abort, MTP drafter crash, ROCm performance regression, large codeblocks lag, Intel Arc Vulkan error
6. **What This Means for Application Developers** - Practical takeaways</think>

# Unsloth Digest — 2026-09-22

## Today's Highlights

Two critical MTP-related crashes are affecting Qwen3.8-Flash-Next and Qwen3 models on RTX 5080/4090 GPUs with the latest llama.cpp builds, indicating potential graph construction issues with the MTP (Multi-Token Prediction) architecture. The Unsloth Studio team is actively merging UI improvements including contrast slider enhancements, spacing scaling, and a 256KB tool-result cap to improve robustness.

---

## Releases & Breaking Changes

No releases detected in the last 24 hours.

---

## New Model & Hardware Support

- **Qwen3-Omni-30B-A3B** — PR #11467 resolves auto-class recognition for omni checkpoints, enabling loading of this multimodal model. ([#11467](https://github.com/unslothai/unsloth/pull/11467))

- **Phi-4-reasoning-vision-15B** — PR #11469 restores Transformers 4.x image processing re-exports required by this model's remote code. ([#11469](https://github.com/unslothai/unsloth/pull/11469))

- **Muse-Glimmer vision fine-tuning** — Issue #11434 reports a data-dependent compilation failure in `get_vision_pixel_shuffle_index` when frames > 1. ([#11434](https://github.com/unslothai/unsloth/issues/11434))

- **Intel Arc Pro B60 (dual)** — Issue #11453 reports `ErrorDeviceLost` mid-generation on Vulkan backend, causing chat lock requiring eject/reload. ([#11453](https://github.com/unslothai/unsloth/issues/11453))

- **AMD Strix Halo (Radeon 8060S)** — Issue #7371 documents performance regression with ROCm 7.13 and prebuilt b10079 on Windows bare-metal. ([#7371](https://github.com/unslothai/unsloth/issues/7371))

- **NVIDIA RTX 5070 Ti (sm_120/Blackwell)** — Issue #11349 reports the bundled llama.cpp (b11030-mix) generates 5-6x slower than official ggml-org CUDA 12 build. ([#11349](https://github.com/unslothai/unsloth/issues/11349))

---

## Performance & Optimization

- **Skip redundant TRL kbit prep** — PR #11494 eliminates ~5 GiB unnecessary memory allocation during trainer construction by skipping TRL's `prepare_peft_model` call when Unsloth has already prepared the model. ([#11494](https://github.com/unslothai/unsloth/pull/11494))

- **Live PyTorch streams for bitsandbytes** — PR #10745 addresses the cached-stream discrepancy by using PyTorch's current accelerator stream for direct bitsandbytes native dequantization and GEMV/GEMM calls. ([#10745](https://github.com/unslothai/unsloth/pull/10745))

- **UI contrast slider reaches surfaces** — PR #11459 expands contrast remapping beyond borders and muted text to cards, menus, buttons, and control fills. ([#11459](https://github.com/unslothai/unsloth/pull/11459))

- **Spacing scales with UI font size** — PR #11458 ensures padding, gaps, margins, and row heights adapt when users adjust font size from 12px to 20px. ([#11458](https://github.com/unslothai/unsloth/pull/11458))

- **Streaming code fence highlighting** — PR #11423 fixes the lag reported in #10769 without sacrificing syntax highlighting, reportedly improving from 29 fps to 59 fps on 140K-character streams. ([#11423](https://github.com/unslothai/unsloth/pull/11423))

- **Tool-result text capped at 256KB** — PR #11430 introduces a hard cap preventing oversized results from reaching the model when context-window pricing is absent. ([#11430](https://github.com/unslothai/unsloth/pull/11430))

- **ROCm torch floor to BNB compatibility** — PR #10277 ensures automatic ROCm PyTorch selection aligns with bitsandbytes ROCm 6.4+ requirements on Linux x86_64 AMD. ([#10277](https://github.com/unslothai/unsloth/pull/10277))

---

## Stability & Regressions

**High Severity**

- **Qwen3.8-Flash-Next MTP abort** — Issue #11143: Model aborts at load with `nextn.hc_head_norm still [hc_dim]` after rebase on b10995-mix-3e83366. 14 comments, 2 👍. ([#11143](https://github.com/unslothai/unsloth/issues/11143))

- **MTP drafter GGML_ASSERT crash** — Issue #11219: Crashes with `GGML_ASSERT(ggml_can_repeat(b, a))` during graph build on b11007-mix, RTX 5080. ([#11219](https://github.com/unslothai/unsloth/issues/11219))

**Medium Severity**

- **Gemma 4 26B QAT memory usage** — Issue #11435: Model consumes >15 GB RAM with llama.cpp-b11067 on a 16 GB RAM system. ([#11435](https://github.com/unslothai/unsloth/issues/11435))

- **Dual Intel Arc B60 Vulkan timeout** — Issue #11453: Mid-generation `ErrorDeviceLost` requires eject/reload. ([#11453](https://github.com/unslothai/unsloth/issues/11453))

- **Large codeblocks lag** — Issue #10769: Desktop interface experiences significant lag with large codeblocks on RTX 4090. PR #11423 addresses this. ([#10769](https://github.com/unslothai/unsloth/issues/10769))

**Low Severity**

- **API Keys copy button** — Issue #11387: Copy button copies trimmed prompt version instead of full prompt. ([#11387](https://github.com/unslothai/unsloth/issues/11387))

- **Studio not returning all models** — Issue #11393: Model query returns incomplete list on CMP 170HX. ([#11393](https://github.com/unslothai/unsloth/issues/11393))

---

## What This Means for Application Developers

1. **MTP model users on Blackwell GPUs** — Avoid Qwen3.8-Flash-Next and Qwen3 models with MTP enabled on RTX 5080/4090 until the graph construction assertion is resolved. Consider using non-MTP variants or waiting for the next llama.cpp build.

2. **Memory-constrained deployments** — The PR #11494 optimization reduces trainer OOM risk by ~5 GiB for 27B+ models. If you were hitting memory limits during training initialization, upgrading to the next release should help.

3. **Tool-heavy agents** — The 256KB tool-result cap (PR #11430) may truncate long tool outputs. Design your tools to return concise results, or implement chunking if you need to pass large data to models.

4. **RTX 5070 Ti users** — The bundled llama.cpp shows significant slowdown. Consider using the official ggml-org CUDA 12 build for inference until the performance regression is addressed.

5. **Vision fine-tuning** — Muse-Glimmer training currently fails with dynamic frames. If you're using this architecture, hold off on training or monitor for a fix.

6. **Multi-GPU users** — Studio now surfaces more detail about layer/KV splits (issues #11474, #11475), but per-GPU memory allocation preview is still missing. Plan for iterative testing when using heterogeneous GPU setups.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*