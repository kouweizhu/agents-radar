# AI Infrastructure Digest 2026-10-22

> Generated: 2026-10-22 00:50 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to generate a cross-project comparison report based on all the digests I've created for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me analyze the data from each digest and create a structured comparison.

Let me organize the information from each project:

**vLLM (2026-10-22):**
- Releases: None in last 24h
- New models: Muse Spark Open, Step-5-Preview, DeepSeek-V4-Flash SM8x support
- Hardware: AMD ROCm (gfx950/MI355X), Blackwell (SM120)
- Performance: KV cache extraction, torch.compile, tensor descriptors
- Issues: Critical Qwen3.8-Flash-Next prompt truncation, Nemotron decode regression, Hybrid Mamba issues

**SGLang (2026-10-22):**
- Releases: None
- New models: DeepSeek-V4.1, GLM-5.3-Flash
- Hardware: Blackwell PCIe all-reduce, AMD gfx950/MI355X
- Performance: DSv4 TRTLLM-Gen, MXFP8 optimization, DSA sparse decode
- Issues: GLM-5.3-Flash fa4 crashes, Startup OOM on GB300, FP8 wrong tokens

**llama.cpp (2026-10-22):**
- Releases: b11793-b11803 (no tagged release)
- New models: Flint, SenseNova U1, GigaChat 3.5
- Hardware: SYCL, Vulkan, OpenCL, CUDA/ROCm
- Performance: QSA masking, SYCL Q8 dequant, OpenCL GEMM
- Issues: vk::DeviceLostError, SYCL memory overflow, dual-GPU stuck

**Ollama (2026-10-22):**
- Releases: v0.40.8


- New models: Flint, D3 decision model, Apple Foundation Models
- Hardware: MLX concurrent generation, Apple Silicon
- Performance: MLX concurrency, DFlash2, max_completion_tokens enforcement
- Issues: Ollama Cloud Pro 95% failure, tool calling errors, streaming errors

**LiteLLM (2026-10-22):**
- Releases: v1.106.2, v1.105.3, v1.104.5, v1.103.7
- Security: v1.107.0 compromised - credential stealer
- New models: Eng

I'll continue analyzing the remaining projects to create a comprehensive cross-project comparison. The data reveals diverse hardware support, performance optimizations, and critical issues across these AI infrastructure projects.

LiteLLM introduces several innovative features including OpenRouter rerank, Bitdeer AI, and Foundry Local. The platform addresses key performance challenges like JWKS refresh and Gemini audio cache billing, while navigating significant security concerns around version vulnerabilities and budget management.

Unsloth demonstrates robust model expansion with MOSS-Image, advanced MLX optimizations, and sophisticated memory management techniques. Their focus spans decision model efficiency, embedding memory optimization, and tensor parallelism improvements, alongside addressing complex issues like core dumps and block compile challenges.

The ecosystem reveals a dynamic landscape of AI infrastructure development, with projects continuously evolving to tackle technical complexities and performance limitations across diverse hardware and model architectures.</think>

# Cross-Project Comparison — AI Infrastructure Digest

---

## 1. Ecosystem Overview

Today's activity reflects a maturing AI serving ecosystem with clear specialization: **vLLM and SGLang** compete for the high-performance inference engine layer, both targeting disaggregated prefill-decode and multi-GPU optimization; **llama.cpp** extends its leadership in local/offline inference with new model support and backend diversification; **Ollama** simplifies local deployment with MLX acceleration and macOS integration; **LiteLLM** provides the gateway/orchestration layer despite a security setback; and **Unsloth** owns the fine-tuning layer with training optimizations and decision model support. The collective focus on Blackwell (SM120), AMD ROCm (gfx950), and multi-host deployment signals the industry's push toward production-grade distributed inference.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Notable Trend |
|---------|---------------|-----------|----------------|---------------|
| **vLLM** | 11 (116 comments max) | 9 | 0 | Heavy ROCm/AMD focus, Blackwell regressions |
| **SGLang** | 9 (350 comments — CUDA crash tracker) | 15+ | 0 | Active Blackwell PCIe optimization |
| **llama.cpp** | 10 (24 comments max) | 10+ | 0 (7 commits) | Model expansion (Flint, SenseNova), backend diversification |
| **Ollama** | 7 (54 comments — Cloud failure) | 7 | 1 (v0.40.8) | Tool calling stability issues, MLX improvements |
| **LiteLLM** | 9 (critical security) | 10+ | 4 (security-focused) | Security incident, new provider proliferation |
| **Unsloth** | 8 (high-severity bugs) | 15+ | 0 | Decision model memory, MLX chat, GIF export |

**Observation:** All projects maintain high velocity. vLLM and SGLang lead in PR count, reflecting inference engine competition. LiteLLM's multi-release sprint addresses security; Unsloth's PR volume indicates active fine-tuning feature work.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4 / V4.1** | ✅ (Flash + PD disagg) | ✅ (TRTLLM-Gen) | — | — | — |
| **Qwen3.8-Flash-Next** | ⚠️ (regression) | ⚠️ (gfx950 work) | — | — | — |
| **Muse Spark Open** | ✅ (ROCm) | — | — | — | — |
| **Step-5-Preview** | ✅ (ROCm) | — | — | — | — |
| **Flint (coding)** | — | — | ✅ | ✅ (v0.40.8) | — |
| **SenseNova U1** | — | — | ✅ | — | — |
| **GigaChat 3.5 (MoE)** | — | — | ✅ | — | — |
| **Apple Foundation Models** | — | — | — | ✅ | — |
| **D3 (decision)** | — | — | — | ✅ (MLX) | ✅ |
| **GLM-5.3-Flash** | — | ⚠️ (SM120 crash) | — | — | — |
| **Gemma 4** | — | — | — | ⚠️ (tool parse) | — |
| **MOSS-Image** | — | — | — | — | ✅ |

**Who is ahead:**

- **Multi-GPU distributed inference**: vLLM and SGLang lead with PD disaggregation, tensor parallelism, and Blackwell optimizations
- **Local/CPU/edge**: llama.cpp dominates breadth of backends (Vulkan, SYCL, OpenCL, CPU)
- **Developer ease-of-use**: Ollama leads for local macOS/Apple Silicon with MLX
- **Gateway/orchestration**: LiteLLM alone in the proxy layer
- **Fine-tuning/training**: Unsloth owns this layer with decision model and training optimizations

---

## 4. Performance Frontier

| Optimization Domain | Projects Active | Key Focus |
|---------------------|------------------|-----------|
| **KV Cache / Attention** | vLLM, SGLang, llama.cpp | Extraction from backends (vLLM #32335), FlashInfer NVFP4 (vLLM, SGLang), QSA fused ops (llama.cpp) |
| **Quantization** | All | MXFP4 (vLLM, SGLang), NVFP4 (vLLM, SGLang), Q8 SYCL (llama.cpp), DFlash2 (Ollama, Unsloth) |
| **Multi-GPU / Distributed** | vLLM, SGLang, Unsloth | Blackwell PCIe all-reduce (SGLang), tensor parallelism (vLLM, Unsloth), Mooncake RDMA (SGLang) |
| **Memory Management** | vLLM, SGLang, Ollama, Unsloth | Decision model unloading (Unsloth), embedding memory host/disk offload (Unsloth), model eviction (Ollama) |
| **MLX / Apple Silicon** | Ollama, Unsloth | Concurrent generation (Ollama #19197), chat history caching (Unsloth #14574), per-layer embeddings (Unsloth) |
| **Batching / Scheduling** | vLLM, SGLang | PD disaggregation routing (SGLang #35036), block compile (Unsloth #14063 — regression) |
| **Kernel Fusion** | llama.cpp, SGLang, Unsloth | QSA mask (llama.cpp), FLUX RoPE fusion (Unsloth), CFG batching (Unsloth) |

**Where the frontier is:**

- **Disaggregated serving** (prefill/decode on separate nodes) is the current performance battleground — vLLM and SGLang both investing heavily
- **Blackwell (SM120)** optimization is nascent — PCIe tensor parallelism (SGLang), NVFP4 regressions (vLLM), CUDA-graph crashes (SGLang)
- **Decision models** are emerging as a new workload class — Unsloth, Ollama, and LiteLLM all adding support
- **Local/mobile inference** sees llama.cpp expanding OpenCL/Adreno support, while Ollama/Unsloth push MLX

---

## 5. Layer Positioning

| Layer | Projects | Target User |
|-------|----------|-------------|
| **Training / Fine-tuning** | **Unsloth** | Developers fine-tuning base models |
| **Local Runtime** | **llama.cpp**, **Ollama**, **Unsloth** | End-users running models locally/offline |
| **Serving Engine** | **vLLM**, **SGLang** | Production inference clusters, multi-GPU/multi-node |
| **Gateway / Proxy** | **LiteLLM** | API abstraction, multi-provider routing |
| **Agent Framework** | (LiteLLM via tool calling) | LLM orchestration |

**Key differentiators:**

- **vLLM vs SGLang**: Both target production inference, but SGLang leans toward advanced scheduling (PD disagg, Mooncake) while vLLM emphasizes broad hardware support (FlashAttention, FlashInfer, Aiter)
- **llama.cpp vs Ollama**: llama.cpp is a library/runtime for embedding; Ollama wraps it with a consumer-friendly UX and cloud sync
- **Unsloth**: Positioned one layer above — trains models that vLLM/SGLang/llama.cpp then serve

---

## 6. Trend Signals

### Industry Trends from Today's Activity

1. **Disaggregated PD Serving Goes Mainstream**
   - vLLM (#32335), SGLang (#35036, #45221), and Ollama all advancing prefill-decode separation
   - Enables independent scaling of compute-intensive prefill vs. latency-sensitive decode

2. **Blackwell Deployment Complexity Underscored**
   - Multiple regressions: NVFP4 1.7-1.8x slowdown (vLLM), fa4 CUDA-graph crash (SGLang), PCIe optimization still experimental (SGLang #32479)
   - Production Blackwell readiness is 6–12 months away for complex workloads

3. **AMD ROCm Gaining Traction**
   - vLLM, SGLang, and llama.cpp all shipping AMD optimizations (gfx950/MI355X, MI350X)
   - Cross-vendor inference diversity accelerating post-Nvidia-export-curb

4. **Decision Models Emerge as Workload Class**
   - Ollama (D3), Unsloth (decision model unloading), LiteLLM (Nadir Decisions provider)
   - Agentic use cases driving demand for fast single-token decisions vs. long generation

5. **Security Incidents in Open Source**
   - LiteLLM v1.107.0 compromise (credential stealer) highlights supply chain risk
   - Cosign-based image signing now deployed across LiteLLM releases

6. **Tool Calling Stability Remains Elusive**
   - Ollama: Qwen3.8, Gemma4, Qwen3.5 tool parsing failures
   - SGLang: Function call rescan optimization (#45143) addresses O(n²) issue
   - Production agent systems face fragile tool-use reliability

### What Agent / Application Developers Should Watch

- **Inference engine choice**: If multi-GPU, lean toward vLLM or SGLang; for local Apple Silicon, Ollama or Unsloth; for maximum portability, llama.cpp
- **Tool calling**: Test extensively with Qwen3 and Gemma4 variants; expect intermittent 500s; have fallback models
- **Blackwell**: Wait 6+ months for stable vLLM/SGLang support unless using Ampere/Hopper
- **Security**: Pin LiteLLM versions; verify Docker signatures; avoid latest tags
- **Decision models**: Unsloth + LiteLLM routing emerging as agentic infrastructure stack
- **Multi-provider**: LiteLLM's new providers (Engy, Bitdeer, Foundry) offer JSON-configured alternatives to OpenAI — monitor for production readiness

---

*Cross-project synthesis — 2026-10-22*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for vLLM on 2026-10-22.

Looking at the data:

1. **Releases**: None in the last 24h

2. **Issues (top by comments)**:
- #50576: DeepSeek-V4-Flash SM8x (Ampere) support - 116 comments
- #32335: Extract KV-Cache update from all attention backends - 59 comments
- #57149: ROCm AMD Qwen3.8-2.4T-A95B gfx950/MI355X optimization - 23 comments
- #49569: Plan for enabling mypy in tests - 21 comments
- #32588: Wrong timestamps for audio > 30s - 18 comments
- #40543: Dynamic PDL Enablement - 17 comments
- #50416: FlashInfer NVFP4 KV cache performance - 15 comments
- #59575: Qwen3.8-Flash-Next gfx950 optimization - 13 comments
- #59770: Nemotron-3.5-Lightning NVFP4 decode regression - 12 comments
- #50264: Hybrid-Mamba models on RDNA - 10 comments
- #14703: RFC - Use auto-functionalization V2 in PyTorch 2.7+ - 10 comments

3. **Pull Requests (showing significant activity)**:
- #63001: Bugfix - Load ModelOpt mixed-precision DFlash and DSpark drafts
- #62622: ROCm support for Muse Spark Open
- #62977: ROCm padding guard-condition
- #61837: ROCm Step-5-Preview support
- #62997: M-RoPE positions fix for video chunks


- #62963: Spec Decode MRV2 speculator hooks
- #61529: ROCm Qwen4Exp fp8 KV and indexer caches
- #52244: Hybrid GDN prefix-cache with MTP
- #62928: Beam search score normalization fix

I notice several key technical developments across performance optimization, ROCm support, and model-specific enhancements. The pull requests cover critical areas like speculative decoding, cache improvements, and score normalization, indicating ongoing refinements to the vLLM project's capabilities.

The new model and hardware support reveals expanded GPU compatibility, with ROCm enabling AMD GPU integration and adding support for Muse Spark Open and Step-5-Preview. Emerging quantization formats like NVFP4 and MXFP4 are also gaining traction.

Performance investigations focus on targeted optimization efforts. Significant performance issues include a ~16% decode slowdown on DGX Spark since v0.29.0, FlashInfer NVFP4 experiencing 1.7-1.8x slowdown, and Mamba hybrid models encountering decode challenges. Additionally, a critical bug impacts Qwen3.8-Flash-Next, where prompts exceeding 2048 tokens become invisible.</think>

# vLLM Digest — 2026-10-22

## 1. Today's Highlights

The vLLM project is advancing multi-GPU and multi-backend support, with significant ROCm activity including new models (Muse Spark Open, Step-5-Preview) and performance optimizations for AMD gfx950/MI355X. A critical bug affecting long prompts on Qwen3.8-Flash-Next was reported, alongside performance regressions on Blackwell hardware.

---

## 2. Releases & Breaking Changes

| Item | Description |
|------|-------------|
| **No releases** | None in the last 24 hours |

---

## 3. New Model & Hardware Support

| Feature | Details | PR/Issue |
|---------|---------|----------|
| **Muse Spark Open on ROCm** | AMD support for `amd/Muse-Spark-Open-816B-A42B-Quark-MXFP4` on MI350X | [#62622](https://github.com/vllm-project/vllm/pull/62622) |
| **Step-5-Preview on ROCm** | ROCm port of stepfun-ai/Step-5-Preview with Triton kernels for compressed sparse attention | [#61837](https://github.com/vllm-project/vllm/pull/61837) |
| **Qwen4Exp fp8 KV caches (ROCm)** | Enables `--kv-cache-dtype fp8` and `--attention-config.indexer_kv_dtype fp8` on AMD QSA path | [#61529](https://github.com/vllm-project/vllm/pull/61529) |
| **DeepSeek-V4-Flash SM8x support** | Ampere (A100/A800, RTX 30xx) support requested — currently blocked | [#50576](https://github.com/vllm-project/vllm/issues/50576) |
| **Dory model support** | NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16 added | [#60149](https://github.com/vllm-project/vllm/pull/60149) |

---

## 4. Performance & Optimization

| Area | Change | Reference |
|------|--------|-----------|
| **AMD gfx950/MI355X** | Qwen3.8-2.4T-A95B performance optimization tracker | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **AMD gfx950/MI355X** | Qwen3.8-Flash-Next (GatedDeltaNet, MXFP4 MoE) optimization | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **ROCm build** | Combined demo of three build-time PRs (#62716, #62717, #62718) | [#62921](https://github.com/vllm-project/vllm/pull/62921) |
| **KV-Cache extraction** | Extracting KV-Cache update from all attention backends (FlashAttention ✓, FlashInfer ✓, AiterFlashAttention in progress) | [#32335](https://github.com/vllm-project/vllm/issues/32335) |
| **Torch.compile** | Sharing compile cache hashing helpers between JIT and AOT paths | [#62628](https://github.com/vllm-project/vllm/pull/62628) |
| **Tensor descriptor** | Hoisting TD build out of unified-attention kernel | [#51506](https://github.com/vllm-project/vllm/pull/51506) |

---

## 5. Stability & Regressions

| Severity | Issue | Impact | Status |
|----------|-------|--------|--------|
| **High** | **Qwen3.8-Flash-Next prompt truncation bug** — prompts beyond ~2048 tokens are invisible to model on GB10 (DGX Spark) | Long prompts silently ignored; model responds as if prompt ended at 2K | Open — [#62776](https://github.com/vllm-project/vllm/issues/62776) |
| **High** | **Nemotron-3.5-Lightning NVFP4 decode regression** — ~16% slower on DGX Spark (GB10/SM121) since v0.29.0 | Inference latency increase | Open — [#59770](https://github.com/vllm-project/vllm/issues/59770) |
| **High** | **Hybrid attention/Mamba block size incompatibility** — B12X backend rejects 2176 block size from hybrid page alignment | Cannot serve hybrid models with B12X on v0.32.0 | Open — [#62320](https://github.com/vllm-project/vllm/issues/62320) |
| **Medium** | **FlashInfer NVFP4 prefill regression** — 1.7-1.8x slower than FP8 on SM120 (Blackwell) | Prefill throughput degradation | Open — [#50416](https://github.com/vllm-project/vllm/issues/50416) |
| **Medium** | **RDNAd hybrid-Mamba decode collapse** — Triton paged attention fallback causes decode failure at long context on RDNA GPUs | Fixed upstream via #45916 split-KV decode kernel | Fix merged — [#50264](https://github.com/vllm-project/vllm/issues/50264) |
| **Medium** | **Mooncake proxy HTTP 200 before decode failures** — proxy commits success prematurely | Premature response handling | Open — [#62559](https://github.com/vllm-project/vllm/issues/62559) |
| **Medium** | **GDN chunk path fp16 overflow** — overflow during prefill with fp32 SSM cache | Incorrect output on large state | Open — [#62116](https://github.com/vllm-project/vllm/issues/62116) |
| **Medium** | **CPU backend LoRA bug** — non-LoRA requests batched with LoRA requests get adapter applied silently | Wrong output | Open — [#62225](https://github.com/vllm-project/vllm/issues/62225) |
| **Medium** | **SharedOffloadRegion multi-node hang** — mmap-based KV offload fails across nodes | Multi-node engine startup timeout | Open — [#54415](https://github.com/vllm-project/vllm/issues/54415) |
| **Medium** | **RoutedExperts weight rebuild** — expert mapping re-indexed on every call (~50s on Qwen3.5-35B-A3B) | Startup latency | Open — [#62768](https://github.com/vllm-project/vllm/issues/62768) |
| **Medium** | **DP > 1 + MoE expert LoRA bug** — each DP replica applies its own LoRA state to tokens from all replicas | Incorrect expert deltas | Open — [#61453](https://github.com/vllm-project/vllm/issues/61453) |

---

## 6. What This Means for Application Developers

- **Blackwell hardware users**: Beware — NVFP4 decode regressions and prompt truncation issues affect DGX Spark (GB10/SM121) with recent vLLM versions. If running Qwen3.8-Flash-Next or Nemotron-3.5-Lightning, consider staying on v0.28.0 or waiting for fixes.
- **AMD ROCm users**: Significant progress — Muse Spark Open and Step-5-Preview now have ROCm support, plus fp8 KV cache enablement for Qwen4Exp. gfx950/MI355X optimizations are ongoing.
- **Multi-node deployments**: The shared-mmap CPU offload issue (#54415) will cause hangs on multi-node setups — avoid `SharedOffloadRegion` with `--nnodes > 1` until resolved.
- **Hybrid models**: If using attention+Mamba hybrids, the B12X backend incompatibility (#62320) blocks v0.32.0 — consider alternative backends or stay on v0.31.x.
- **Structured output + speculative decoding**: New RFC (#62818) addresses preserving output distribution under this combination — relevant for applications using both features.
- **Beam search users**: Score normalization bugfix (#62928) landed — beam search now divides by generated length only, matching Transformers behavior.

---

*Generated from vllm-project/vllm GitHub data — 2026-10-22*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang and create a structured digest for 2026-10-22.

Looking at the data:

1. **Releases**: None in the last 24h

2. **Key Issues** (by comments):
   - #26340: CUDA Coredump Tracker (350 comments) - ongoing collection
   - #42752: Flaky tests and CI infrastructure (119 comments) - tracking CI issues
   - #39499: SGLang dLLM Serving Roadmap (22 comments)
   - #42012: GLM-5.3-Flash on SM120 bug - fa4 attention crashes
   - #43699: PD Disaggregation Roadmap Q4 (14 comments)
   - #1763: SageAttention 8-bit quantization feature request (10 comments)
   - #1715: Cascade attention kernels feature (9 comments)
   - #45345: Startup OOM with 32 tokenizer workers on GB300 (8 comments)
   - #41351: Hybrid GDN Radix-cache logprob drift (6 comments)
   - #5948: Qwen3 thinking toggle feature (4 comments)
   - #41211: MLX return_logprob bug (3 comments)
   - #45373: GLM-5.3-Flash on Hopper performance (3 comments)
   - #35736: DeepSeek-V4 tool_choice leak (3 comments)
   - #45000: FP8 block-quantized checkpoint wrong tokens on SM86 (2 comments)
   - #44304: Qwen3.8-Flash-Next on AMD gfx950/MI355X (2 comments)
   - #41152: AMD aiter unified attention bug (2 comments)
   - #45512: Silent DP rank blocks /flush_cache (2 comments)
   - #43098: Agentic Cache Scheduling Roadmap (2 comments)

3. **Key PRs**:
   - #45221: DSv4 PD disaggregation for TRTLLM-Gen
   - #45692: Clef explicit prefill CUDA graph backend
   - #32479: SM120 PCIe all-reduce optimization
   - #45143: function_call optimization
   - #45691: AMD disaggregation Mooncake fix
   - #44329: NPU diffusion warnings cleanup
   - #44825: Blog cards sync
   - #35036: PD disaggregation routing fix
   - #40565: HiCache null pointer fix
   - #36652: DSv4 TRTLLM-Gen attention improvements
   - #44176: DSA mixed-chunk routing fix
   - #45676: AMD HIP import fix
   - #44612: KDA verify kernel SM90 support
   - #45632: DSv41 Mega-mHC MXFP8 optimization
   - #45690: Diffusion rollout fix
   - #45274: DSA TileLang sparse decode optimization
   - #45684: Attention TP group centralization
   - #45202: AMD Mono kimi-k3 attention

Now I need to synthesize this into a digestible format.</think>

# SGLang Digest — 2026-10-22

## Today's Highlights

SGLang development continues focusing on multi-host deployment robustness and hardware-specific optimizations. Notable activity around Blackwell (SM120) PCIe tensor parallelism and AMD ROCm disaggregation, while the PD (Prefill-Decode) disaggregation roadmap for Q4 is taking shape with expanded model family support.

## Releases & Breaking Changes

No releases in the last 24 hours.

## New Model & Hardware Support

- **Blackwell PCIe All-Reduce Optimization** — PR [#32479](https://github.com/sgl-project/sglang/pull/32479) adds optional b12x PCIe all-reduce (one-shot + fused RMSNorm + FP8 DMA ring) for SM120/SM121 (RTX PRO 6000, RTX 6000D, RTX 50-series, GB10) configurations without NVLink, addressing decode latency and long-prompt prefill bottlenecks.

- **AMD gfx950 / MI355X Performance** — Issue [#44304](https://github.com/sgl-project/sglang/issues/44304) tracks Qwen3.8-Flash-Next optimization on AMD MI355X; PR [#45691](https://github.com/sgl-project/sglang/pull/45691) fixes Mooncake RDMA registration for AMD disaggregation CI.

- **GLM-5.3-Flash on Hopper** — Issue [#45373](https://github.com/sgl-project/sglang/issues/45373) tracks Hopper (SM90) performance work; Issue [#42012](https://github.com/sgl-project/sglang/issues/42012) documents fa4 attention backend crash on SM120 (RTX PRO 6000) during CUDA-graph capture—Triton backend is the workaround.

- **DeepSeek-V4.1 Flash on 4× SM120** — Issue [#44445](https://github.com/sgl-project/sglang/issues/44445) reports successful 1M context + DSpark serving on 4× PCIe SM120 cards (83 GiB each), with setup notes.

## Performance & Optimization

- **DSv4 TRTLLM-Gen Attention** — PR [#36652](https://github.com/sgl-project/sglang/pull/36652) improves accuracy and performance; PR [#45221](https://github.com/sgl-project/sglang/pull/45221) enables PD disaggregation for this backend.

- **DSv41 Mega-mHC MXFP8 Optimization** — PR [#45632](https://github.com/sgl-project/sglang/pull/45632) eliminates separate quantization kernels by having Mega-mHC and wo_a einsum write MXFP8 directly for wqkv_a and wo_b.

- **DSA TileLang Sparse Decode** — PR [#45274](https://github.com/sgl-project/sglang/pull/45274) extends TileLang FP8 sparse decode to support any divisor of tile count (not just halvings), improving utilization for GLM-5.3-Flash.

- **KDA Verify Kernel SM90 Support** — PR [#44612](https://github.com/sgl-project/sglang/pull/44612) extends the CuTe DSL MTP verify kernel to Hopper (SM90), enabling the nv_cutedsl backend.

- **Function Call Rescan Optimization** — PR [#45143](https://github.com/sgl-project/sglang/pull/45143) stops rescanning unclosed GLM tool calls per chunk, reducing O(n²) to O(n) for long arguments.

- **PD Disaggregation Routing** — PR [#35036](https://github.com/sgl-project/sglang/pull/35036) fixes equal-TP fragmented KV transfer bandwidth collapse by routing through staging.

- **HiCache Null Pointer Fix** — PR [#40565](https://github.com/sgl-project/sglang/pull/40565) adds fail-fast on null pointer from Mooncake host allocator.

- **AMD HIP Import Fix** — PR [#45676](https://github.com/sgl-project/sglang/pull/45676) corrects HIP launch helper imports in smallm_fp8_blockscale_gfx950.

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | [#42012](https://github.com/sgl-project/sglang/issues/42012) — GLM-5.3-Flash fa4 crashes on SM120 CUDA-graph capture | Open; Triton backend works |
| **High** | [#45345](https://github.com/sgl-project/sglang/issues/45345) — Startup OOM with 32 tokenizer workers + cuda_vmm on GB300 | Open |
| **Medium** | [#45000](https://github.com/sgl-project/sglang/issues/45000) — FP8 Marlin wrong tokens on SM86 with overlap scheduler | Open |
| **Medium** | [#45512](https://github.com/sgl-project/sglang/issues/45512) — Silent DP rank blocks /flush_cache | Open |
| **Medium** | [#41351](https://github.com/sgl-project/sglang/issues/41351) — Hybrid GDN Radix-cache selected-logprob drift | Open |
| **Medium** | [#41152](https://github.com/sgl-project/sglang/issues/41152) — AMD aiter: Gemma 2/3 batched generations run away | Open |
| **Low** | [#45481](https://github.com/sgl-project/sglang/issues/45481) — Qwen3.5-35B-A3B TP1/PP2 + NEXTN token drift under concurrent arrivals | Open |
| **Low** | [#45357](https://github.com/sgl-project/sglang/issues/45357) — PD prefill PP8 + HiCache cache mode hang | Open |

**CI Stability**: Issue [#42752](https://github.com/sgl-project/sglang/issues/42752) tracks flaky tests and CI infrastructure failures in PR Test workflows; Issue [#37451](https://github.com/sgl-project/sglang/issues/37451) tracks AMD PR test failures.

## What This Means for Application Developers

1. **Blackwell Deployments**: If running on RTX PRO 6000 or GB10 without NVLink, the new PCIe all-reduce optimization in [#32479](https://github.com/sgl-project/sglang/pull/32479) should significantly improve multi-GPU tensor parallelism performance—monitor for the merged PR.

2. **GLM-5.3-Flash on SM120**: The fa4 attention backend crashes during CUDA-graph capture. Use `--attention-backend triton` or `--flashinfer-backend triton` as a workaround until fixed.

3. **Multi-Node GB300**: Avoid `--tokenizer-worker-num 32` with auto-selected `cuda_vmm` transport on multi-node setups; this causes startup OOM before any request is served.

4. **AMD ROCm**: The Mooncake RDMA registration fix ([#45691](https://github.com/sgl-project/sglang/pull/45691)) should improve disaggregation stability on MI355X; expect fixes in next AMD container release.

5. **DeepSeek-V4.1**: PD disaggression support for TRTLLM-Gen attention backend is landing ([#45221](https://github.com/sgl-project/sglang/pull/45221)), enabling disaggregated serving for this model family.

6. **Qwen3 Thinking Toggle**: Feature request [#5948](https://github.com/sgl-project/sglang/issues/5948) seeks server-side control to disable thinking mode at startup—watch for implementation progress.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze the GitHub data and create a structured digest for llama.cpp on 2026-10-22.

Let me extract the key information:

**Releases (last 24h):**
- b11803: Add Flint model (FlintForCausalLM)
- b11802: jinja fix namespace attributes shadowed by dict methods
- b11801: Add support for SenseNova U1 model
- b11800: llama: create new fused op for QSA mask
- b11799: sycl: q8 fast dequant
- b11798: jinja: support hexadecimal string escapes
- b11797: ggml-opencl: add IM2COL_3D support
- b11796: mtmd: add state object for mtmd_gen
- b11795: server: forward llama.cpp sampling params on /v1/messages
- b11793: llama: optimize vocabulary loading

**Key Issues (by comment count):**
1. #25664 - vk::DeviceLostError on Linux 7.x (RADV_STRIXHALO) - 24 comments
2. #27595 - SYCL memory overflow - 22 comments
3. #20757 - Feature: Two-tier GPU+RAM expert cache for MoE - 20 comments (CLOSED)
4. #24055 - Context checkpoints invalidation - 20 comments
5. #27546 - OpenVINO exception on i5 1345u - 15 comments
6. #24415 - gemma-4-12B OpenVINO load - 14 comments (CLOSED)
7. #5040 - eos_token/bos_token feature - 12 comments (CLOSED)
8. #27547 - SYCL dual-GPU stuck - 12 comments


9. #25187 - Research: FR-Spec draft-vocab trimming - 8 comments
10. #26321 - Reasoning button gone - 7 comments

I'll continue extracting the remaining key issues and pull requests to provide a comprehensive overview of the recent developments in the llama.cpp project.

The next set of issues reveals ongoing challenges with GPU and compilation environments. Multiple reports highlight compatibility problems across different hardware and software configurations, including HIP compilation on AMD servers, ROCm RPC server crashes, and issues with multi-modal and speculative decoding technologies. These challenges indicate the complex landscape of AI inference optimization.

The pull requests demonstrate a multifaceted approach to improving the project. Model support is expanding through GigaChat 3.5, and significant backend work is happening with Hexagon, OpenCL, and GGML-CPU optimizations. The SenseNova U1 model and Flint model integrations are particularly noteworthy, showing continuous enhancement of the project's capabilities.

Key technical developments include adding DSV4_HC operations, fixing tensor copy row sizes, addressing FastRPC handle truncation, and refining CUDA/ROCm tuning. These targeted improvements suggest a systematic effort to resolve performance and compatibility issues across different computational environments.

The backend focus spans multiple specialized domains - from low-power Hexagon processors to high-performance AMD GPU architectures, indicating a comprehensive approach to optimization and support.</think>

# llama.cpp Digest — 2026-10-22

## Today's Highlights

The llama.cpp project continues its rapid pace with model architecture expansions and backend optimizations. Today's highlights include the addition of **Flint model** support and **SenseNova U1** model integration, alongside a significant performance improvement in vocabulary loading. Meanwhile, active issues span GPU backend stability (SYCL, Vulkan) with several high-comment threads on memory management and model loading edge cases.

---

## Releases & Breaking Changes

No new tagged releases in the last 24 hours; the activity centers on commits to master (b11793–b11803).

---

## New Model & Hardware Support

| Model / Hardware | Details | PR / Commit |
|------------------|---------|-------------|
| **Flint** (`FlintForCausalLM`) | New model support with HF-to-GGUF conversion, tokenizer handling, and inference for sliding/full attention with routed/shared experts. Uses adaptive expert-activation scaling (1,024 threshold). | [b11803](https://github.com/ggml-org/llama.cpp/commit/b11803) · [#30928](https://github.com/ggml-org/llama.cpp/pull/30928) |
| **SenseNova U1** | Dense understanding branch support, including U1.5-8B-MoT; HF-to-GGUF conversion for NEOChatModel (excluding MoT generation tensors). | [b11801](https://github.com/ggml-org/llama.cpp/commit/b11801) · [#28919](https://github.com/ggml-org/llama.cpp/pull/28919) |
| **GigaChat 3.5** (432B total / 28B active MoE) | DeepSeek-V3-style backbone (MLA + MoE); hybrid attention architecture. | [#25342](https://github.com/ggml-org/llama.cpp/pull/25342) |

---

## Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **Vocabulary loading** | Optimized vocab loading in `llama` core. | Faster model initialization. [b11793](https://github.com/ggml-org/llama.cpp/commit/b11793) |
| **QSA masking** | New fused op for Query-Scaled Attention (QSA) mask scoring; enrolled for GLM5.3-Next. | Reduced kernel overhead for QSA-based models. [b11800](https://github.com/ggml-org/llama.cpp/commit/b11800) |
| **SYCL Q8 dequant** | Fast dequantization path for Q8 tensors on SYCL backend. | Improved throughput for Q8-quantized inference. [b11799](https://github.com/ggml-org/llama.cpp/commit/b11799) |
| **OpenCL GEMM** | New bin kernels for Q6_K, Q4_K, Q4_0 on Adreno X1 (32b trans_ila_a7). | Better mobile GPU performance. [#30949](https://github.com/ggml-org/llama.cpp/pull/30949), [#30948](https://github.com/ggml-org/llama.cpp/pull/30948), [#30947](https://github.com/ggml-org/llama.cpp/pull/30947) |
| **GGML-CPU** | Fixed `dup_bytes` row size calculation for block-quantized types (q4_0). | Fixes out-of-bounds copy. [#27256](https://github.com/ggml-org/llama.cpp/pull/27256) |
| **CUDA/ROCm** | GCN MMQ config retuning for AMD GPUs. | Optimized multi-head quantization on older AMD architectures. [#30021](https://github.com/ggml-org/llama.cpp/pull/30021) |

---

## Stability & Regressions

| Issue | Severity | Status | Details |
|-------|----------|--------|---------|
| [#25664](https://github.com/ggml-org/llama.cpp/issues/25664) — `vk::DeviceLostError` on Linux 7.x (RADV, Strix Halo) | **High** | Open, stale | 24 comments. Vulkan backend fails on newer kernels. |
| [#27595](https://github.com/ggml-org/llama.cpp/issues/27595) — SYCL `--fit` memory accounting incomplete | **High** | Open, stale | 22 comments. Runtime overflow despite fit mode. |
| [#27547](https://github.com/ggml-org/llama.cpp/issues/27547) — SYCL dual-GPU stuck on model load | **High** | Open | 12 comments. 2x Arc Pro B60 hangs. |
| [#30892](https://github.com/ggml-org/llama.cpp/issues/30892) — SYCL F16 NaN on Qwen3.8-27B Q4_K_M | **Medium** | Open | Since #29107; fused GEMM off fixes it. |
| [#30793](https://github.com/ggml-org/llama.cpp/issues/30793) — TTFT regression (10s → 60s+) with MoE | **Medium** | Open | Regression after #30449 (CUDA pinned buffer limit). |
| [#30698](https://github.com/ggml-org/llama.cpp/issues/30698) — Gemma 4 + MTP abort on startup | **Medium** | Open | GGML_ASSERT on `ubatch->embd_state`. |

---

## What This Means for Application Developers

1. **New model options**: Flint and SenseNova U1 join the growing roster of supported architectures—developers can now run these models with GGUF conversion via the standard pipeline.

2. **Server sampling control**: The `/v1/messages` endpoint now forwards llama.cpp sampling parameters through, giving finer control over generation (temperature, top-p, etc.) without resorting to workarounds.

3. **Jinja templating fixes**: Namespace attribute handling and hex string escapes are corrected—chat template edge cases should behave more reliably.

4. **Watch for regressions**: The SYCL F16 NaN issue and MoE TTFT regression may affect workloads on Intel Arc and large MoE models. If you encounter issues, test against b11798 or earlier.

5. **Detokenization bug**: Models like Gemma 4 may produce `x!= y` instead of `x != y` due to detokenizer behavior ([#30905](https://github.com/ggml-org/llama.cpp/issues/30905)); a fix is pending in [#30940](https://github.com/ggml-org/llama.cpp/pull/30940).

---

*Generated from GitHub data dated 2026-10-22.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate a structured Ollama digest for 2026-10-22 based on the GitHub data provided. Let me analyze the data and create the sections requested.

Let me organize the information:

## Today's Highlights
Looking at the data:
- New release v0.40.8
- New model Flint (Recursive's coding model)
- Several new PRs including MLX concurrent generation support, Apple Foundation Models support, OpenAI max_completion_tokens support
- Several bugs reported around tool calling, streaming errors, model loading

## Releases & Breaking Changes
- v0.40.8 released
- There's mention of 0.40.9 as min version for some new features

## New Model & Hardware Support
- Flint - Recursive's coding model
- D3 decision model (MLX)
- DFlash2 support (MLX)
- Apple Foundation Models runner (apple-foundation-model)
- MLX now supports concurrent generation

## Performance & Optimization
- MLX: support concurrent generation via OLLAMA_NUM_PARALLEL
- qwen35 and qwen35moe now allow parallel requests (previously blocked due to llama.cpp crash)
- max_completion_tokens now honored in chat completions

## Stability & Regressions
- Ollama Cloud Pro has 95% failure rate (very severe)
- qwen3.8 tool calling errors
- gemma4 tool parsing errors
- qwen3.5/3.6 tool call parser issues
- Flint 500 errors on AGX Orin
- Various streaming errors
- Model loading/eviction issues
- Context size issues with OpenCode

## What This Means for Application Developers
- Various tool calling issues to be aware of
- New Apple Foundation Models support
- New concurrency options for MLX
- Bug fixes in flight


- Let me format this into the requested sections with GitHub links</think>

# Ollama Digest — 2026-10-22

## 1. Today's Highlights

Ollama released **v0.40.8** alongside **Flint**, a new coding model from Recursive designed for coding agent workflows. The update brings significant MLX improvements including concurrent generation support and DFlash2 acceleration, plus initial Apple Foundation Models integration for macOS 27. However, several high-impact bugs affecting tool calling reliability and Ollama Cloud Pro service availability remain open.

---

## 2. Releases & Breaking Changes

| Version | Notes |
|---------|-------|
| **v0.40.8** | Latest release; includes Flint model support |
| **0.40.9** | Minimum version for new D3 decision model (`ollama pull dhiltgen/d3:4b`) |

No breaking API changes reported in this window.

**Refs:** [Release v0.40.8](https://github.com/ollama/ollama/releases/tag/v0.40.8)

---

## 3. New Model & Hardware Support

### Models
- **Flint** — Recursive's coding model now available via `ollama run flint` ([library](https://ollama.com/library/flint))
- **D3 decision model** — Added MLX support; pull via `ollama pull dhiltgen/d3:4b` (min v0.40.9) [#19196](https://github.com/ollama/ollama/pull/19196)
- **Apple Foundation Models** — Native macOS 27 on-device model now listed as `apple-foundation-model` for use with `ollama run`, `/api/chat`, `/api/generate`, and OpenAI-compatible endpoints [#19184](https://github.com/ollama/ollama/pull/19184)

### Hardware & Backends
- **MLX** — Added DFlash2 block support for improved draft acceleration [#19149](https://github.com/ollama/ollama/pull/19149)
- **MLX** — Concurrent generation now enabled via `OLLAMA_NUM_PARALLEL` [#19197](https://github.com/ollama/ollama/pull/19197)
- **Qwen3.5/Qwen3.5-MoE** — Parallel request restriction lifted (was blocked due to historical llama.cpp crash) [#17144](https://github.com/ollama/ollama/pull/17144)

---

## 4. Performance & Optimization

| Area | Change | PR |
|------|--------|-----|
| **MLX concurrency** | Multiple generation requests now share projection/feed-forward work while maintaining separate attention heads; configurable via `OLLAMA_NUM_PARALLEL` | [#19197](https://github.com/ollama/ollama/pull/19197) |
| **MLX DFlash2** | Block-local dynamic convolutions and candidate selector for improved draft quality | [#19149](https://github.com/ollama/ollama/pull/19149) |
| **Qwen3.5 parallelism** | Removed hardcoded `numParallel=1` blocklist; parallel requests now safe | [#17144](https://github.com/ollama/ollama/pull/17144) |
| **Chat Completions** | `max_completion_tokens` now enforced (was previously ignored) | [#19168](https://github.com/ollama/ollama/pull/19168) |
| **OpenCode context** | Launch now uses allocated context from `/api/ps` instead of static maximum | [#19193](https://github.com/ollama/ollama/pull/19193) |

---

## 5. Stability & Regressions

### Critical (Service Impact)
| Issue | Severity | Status |
|-------|----------|--------|
| **Ollama Cloud Pro: 95% failure rate** — all cloud models unusable | **Critical** | Open, 54 comments, 22 👍 [#15453](https://github.com/ollama/ollama/issues/15453) |
| **Flint 500 error on NVIDIA AGX Orin** | **Critical** | Open, reported 2026-10-21 [#19186](https://github.com/ollama/ollama/issues/19186) |

### High (Tool Calling / Correctness)
| Issue | Status |
|-------|--------|
| **qwen3.8: "no user query found in messages" (500)** during tool use — 205k context, tool loop [#17778](https://github.com/ollama/ollama/issues/17778) |
| **gemma4:e4b** tool parsing errors persist post-0.20.1 fix [#15315](https://github.com/ollama/ollama/issues/15315) |
| **qwen3.5/3.6 parser** intermittently fails on tool calls, returns 500 [#16383](https://github.com/ollama/ollama/issues/16383) |
| **qwen3** tool call parser returns 500 on truncated output [#14570](https://github.com/ollama/ollama/issues/14570) |
| **Flint** integer tool args converted to float strings ("30000" → "30000.0") — fix in PR [#19195](https://github.com/ollama/ollama/pull/19195) |

### Medium (Streaming / API)
| Issue | Status |
|-------|--------|
| **Streaming `/v1/messages`**: errors after first chunk dropped, clients receive empty response [#19177](https://github.com/ollama/ollama/issues/19177) — fix in PR [#19188](https://github.com/ollama/ollama/pull/19188) |
| **Model eviction** blocked by `keep_alive` request, causing stalled queued requests [#19182](https://github.com/ollama/ollama/issues/19182) — fix in PR [#19190](https://github.com/ollama/ollama/pull/19190) |
| **OpenCode** using wrong context size (max instead of allocated) — fix in PR [#19193](https://github.com/ollama/ollama/pull/19193) |

### Lower Priority
- Windows Desktop app 0.33.1: built-in server fails silently, `ollama serve` works [#18061](https://github.com/ollama/ollama/issues/18061)
- `/v1/responses`: reasoning and image content lost on replay [#19192](https://github.com/ollama/ollama/pull/19192)
- Responses API: namespace tool identity lost [#16263](https://github.com/ollama/ollama/pull/16263)

---

## 6. What This Means for Application Developers

1. **Tool calling remains fragile with Qwen3 variants** — If your agents depend on function calling with Qwen3.5/3.6/3.8, expect intermittent 500 errors. The qwen3 parser is brittle around truncation and template drift. Consider fallback models or robust retry logic.

2. **MLX users gain throughput headroom** — The new concurrent generation support via `OLLAMA_NUM_PARALLEL` reduces first-token latency for Apple Silicon users. Benchmark your workload with parallelism >1 if memory permits.

3. **macOS 27 users get a new local option** — Apple Foundation Models can now be accessed through standard Ollama interfaces. Ideal for privacy-sensitive, on-device inference without cloud dependencies.

4. **Streaming error handling needs attention** — If you consume `/v1/messages` streaming, be aware that mid-stream failures may manifest as empty responses rather than explicit errors. The fix is incoming in [#19188](https://github.com/ollama/ollama/pull/19188).

5. **Avoid Qwen3.5 parallelism if on old llama.cpp** — The blocklist is lifted, but only if you're on a recent build. Ensure you're on 0.34.4+ to safely enable parallel requests.

6. **Monitor the Cloud Pro situation** — The 95% failure rate on Ollama Cloud Pro is a service-level issue affecting production integrations. If you're a Pro subscriber, track #15453 for updates.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze this GitHub data about LiteLLM and create a structured digest. I'll go through each section:

1. **Releases**: There are 4 releases in the last 24h (v1.106.2, v1.105.3, v1.104.5, v1.103.7) - all focused on Docker image signature verification with cosign.

2. **Security Issue**: There's a critical security issue #47826 about v1.107.0 being compromised - a credential stealer + RCE loader. This was removed from PyPI and Docker images yanked.

3. **Top Issues**:
- Rust migration tracking (#31263)
- Model/provider requests (#18686)
- Proxy model list visibility bug (#17475)
- Security compromise (#47826)
- HTTP GET on module import (#22159)
- Bedrock Claude 4.5+ parallel tool calls bug (#22637)
- Transcription with JSON response format validation (#33764)
- Team delete cache issue (#34217)
- Various other bugs

4. **Pull Requests**:
- JWKS refresh fix (#47846)
- Gemini audio cache billing (#47886)
- Engy provider (#46744)
- OpenRouter rerank support (#47885)
- MCP delegation ceiling enforcement (#34060)
- Guardrail checksum validators (#47485)
- Various other features and fixes

Now let me structure this into the requested format:

**Today's Highlights**: Focus on the security incident and the main developments.

**Releases & Breaking Changes**: Docker signature verification updates.

**New Model & Hardware Support**: Engy provider, OpenRouter rerank, Bitdeer AI, Foundry Local, Nadir decisions provider.

**Performance & Optimization**: JWKS refresh, Gemini audio caching billing fix.

**Stability & Regressions**: Security incident, various bugs.

**What This Means for Application Developers**: Practical takeaways.


I'll craft a concise narrative that captures the key developments while maintaining clarity and precision. The goal is to provide a comprehensive yet succinct overview of the LiteLLM project's recent updates, highlighting both technical advancements and potential challenges.</think>

# LiteLLM Digest — 2026-10-22

## Today's Highlights

A critical security incident emerged: **v1.107.0 was compromised** with a credential stealer (`cook.pth`) and RCE loader. PyPI has removed the package and Docker images (`latest`, `main-stable`) have been yanked. On the positive side, the project continues rapid feature expansion with new provider integrations (Engy, Bitdeer AI, OpenRouter rerank) and significant proxy stability work around JWKS caching and budget enforcement.

---

## Releases & Breaking Changes

| Version | Change Type | Notes |
|---------|-------------|-------|
| [v1.106.2](https://github.com/BerriAI/litellm/releases/tag/v1.106.2) | Security | Docker images now signed with cosign — verify via `cosign verify` |
| [v1.105.3](https://github.com/BerriAI/litellm/releases/tag/v1.105.3) | Security | Docker image signature verification |
| [v1.104.5](https://github.com/BerriAI/litellm/releases/tag/v1.104.5) | Security | Docker image signature verification |
| [v1.103.7](https://github.com/BerriAI/litellm/releases/tag/v1.103.7) | Security | Docker image signature verification |

> ⚠️ **[Security #47826](https://github.com/BerriAI/litellm/issues/47826)**: v1.107.0 compromised. If you're on this version, downgrade immediately. The attack used a lookalike repo "Berri-AI/litellm".

---

## New Model & Hardware Support

- **[#46744](https://github.com/BerriAI/litellm/pull/46744)** — **Engy** added as OpenAI-compatible provider (8 models, Chat Completions + Responses + Anthropic-compatible Messages)
- **[#47885](https://github.com/BerriAI/litellm/pull/47885)** — **OpenRouter rerank** provider support (`cohere/rerank-v3.5` etc.)
- **[#36734](https://github.com/BerriAI/litellm/pull/36734)** — **Bitdeer AI** added as JSON-configured provider (3 models)
- **[#47713](https://github.com/BerriAI/litellm/pull/47713)** — **Foundry Local** provider with SDK 2.2.1
- **[#41797](https://github.com/BerriAI/litellm/pull/41797)** — **Nadir** as Decisions provider and auto router decision model
- **[#33497](https://github.com/BerriAI/litellm/pull/33497)** — **Kimi-K2.6** (Crusoe) model configuration

---

## Performance & Optimization

- **[#47846](https://github.com/BerriAI/litellm/pull/47846)** — **JWKS key serving**: proxy now serves stale cached keys immediately while background refresh runs, eliminating request stalls during IdP fetch timeouts
- **[#47886](https://github.com/BerriAI/litellm/pull/47886)** — **Gemini audio cache billing**: cached audio tokens now billed at audio cache-read rate (previously incorrectly billed at text rate — ~3x undercharge on `gemini-2.5-flash`)

---

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **Critical** | [#47826](https://github.com/BerriAI/litellm/issues/47826) — v1.107.0 compromised (credential stealer) | PyPI removed, images yanked |
| **High** | [#17475](https://github.com/BerriAI/litellm/issues/17475) — Proxy admin-only model list visibility | Open |
| **High** | [#22159](https://github.com/BerriAI/litellm/issues/22159) — HTTP GET on module import causes slow startup | Open |
| **Medium** | [#22637](https://github.com/BerriAI/litellm/issues/22637) — Bedrock `parallel_tool_calls` fails on Claude 4.5+ | Open |
| **Medium** | [#34217](https://github.com/BerriAI/litellm/issues/34217) — `/team/delete` leaves cached virtual keys auth-valid | Open |
| **Medium** | [#29142](https://github.com/BerriAI/litellm/issues/29142) — Cross-end-user budget leak via cached `UserAPIKeyAuth` | Open |
| **Medium** | [#34238](https://github.com/BerriAI/litellm/issues/34238) — End-user budget bypass via stale per-pod fallback spend | Open |
| **Medium** | [#43444](https://github.com/BerriAI/litellm/issues/43444) — Price data reload wipes DB deployments' cost-map registrations | Open |
| **Medium** | [#24987](https://github.com/BerriAI/litellm/issues/24987) — Prompt caching broken for GPT-5.4 via proxy | Open |
| **Low** | [#42104](https://github.com/BerriAI/litellm/issues/42104) — Mid-conversation `system` messages break Gemini prompt caching | Open |

---

## What This Means for Application Developers

1. **Security priority**: If you're on v1.107.0, downgrade NOW. Prefer pinned versions and verify Docker signatures using the new cosign-based workflow.

2. **New provider options**: With Engy, Bitdeer AI, OpenRouter rerank, and Foundry Local now supported, you have more deployment choices for JSON-configured inference without custom wrappers.

3. **Budget enforcement changes**: Several open issues around budget leaks across end-users sharing virtual keys — if you run multi-tenant deployments with per-user budgets, monitor closely or await fixes.

4. **Prompt caching caveat**: GPT-5.4 users via proxy should test caching behavior; direct API works, proxy currently does not.

5. **Module import behavior**: If cold-start latency matters in your workflow, be aware litellm currently makes HTTP calls on import — this is tracked but not yet resolved.

---

*Generated from GitHub data for 2026-10-22*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze this GitHub data from unslothai/unsloth to create a structured digest for 2026-10-22.

First, let me identify the key themes and categorize the information:

**Releases & Breaking Changes:**
- No releases in the last 24h according to the data

**New Model & Hardware Support:**
- Looking at PRs, I see new image models being added (MOSS-Image)
- Multiple mentions of MLX (Apple Silicon) improvements
- Various quantization and GGUF support

**Performance & Optimization:**
- GIF export optimization (3x faster)
- MLX chat performance improvements (stop re-reading whole chat)
- Decision model unloading improvements
- Video/image diffusion optimizations
- Memory management improvements for embeddings
- Various GPU optimization PRs

**Stability & Regressions:**
- Core dumps with models (#14411)
- Block compile breaking checkpoint recomputation (#14063)
- Various bugs with specific models (Gemma-3 training, Ling 3 tiny export)
- Memory leak on Windows (#14487)
- Various other bugs

**What This Means for Application Developers:**
- Various UX improvements
- Model loading fixes
- Chat functionality improvements

Let me structure this properly with the most important items first.</think>

# Unsloth Digest — 2026-10-22

## Today's Highlights

Active development continues across multiple fronts. The Studio team shipped significant MLX performance improvements (eliminating redundant chat re-reading), a major GIF export optimization (~3x faster), and memory management refinements for decision models. On the stability front, several notable regressions were reported, including core dumps during multi-turn inference and block compile breaking distributed checkpoint recomputation.

---

## Releases & Breaking Changes

No new releases in the last 24 hours.

---

## New Model & Hardware Support

| Item | Details | PR/Issue |
|------|---------|----------|
| **MOSS-Image** | Added to Studio as new image family (`OpenMOSS-Team/MOSS-Image-SFT` / `MOSS-Image-Base`) | [#14552](https://github.com/unslothai/unsloth/pull/14552) |
| **MLX PLE & Expert Offload** | Full support in Studio for per-layer embeddings and expert offloading on Apple Silicon | [#14326](https://github.com/unslothai/unsloth/pull/14326) |
| **SDXL Prompt Weighting** | Support for AUTOMATIC1111 syntax: `(word:1.2)`, `[word]`, `\(`, `\)` | [#14562](https://github.com/unslothai/unsloth/pull/14562) |
| **Flux/Image Optimizations** | Fused FLUX RoPE, CFG batching, Blackwell native attention, BF16 small DiTs enabled by default | [#14566](https://github.com/unslothai/unsloth/pull/14566) |
| **MLX Doctor Command** | Fixed `unsloth doctor` to properly detect Apple Silicon/MLX | [#14457](https://github.com/unslothai/unsloth/pull/14457) |

---

## Performance & Optimization

| Area | Change | Impact | PR |
|------|--------|--------|-----|
| **MLX Chat Performance** | Stopped re-reading entire chat history on each turn after prompt cache budget exceeded | ~7-13s/turn → near-instant for 29k token chats on Mac MLX | [#14574](https://github.com/unslothai/unsloth/pull/14574) |
| **GIF Export** | Single clip-wide palette instead of per-frame quantization | ~3x faster export | [#14581](https://github.com/unslothai/unsloth/pull/14581) |
| **Decision Model Memory** | Unload idle decision models when another model loads | Qwen3-4B gains 7k context; Qwen3-8B gains ~5% more context | [#14555](https://github.com/unslothai/unsloth/pull/14555) |
| **Embedding Memory** | Price per-layer embedding and Engram lookup tables as host/disk, not VRAM | Better context sizing for DeepSeek-V4.1, Qwen3.8-Flash-Next, Gemma 4 | [#14465](https://github.com/unslothai/unsloth/pull/14465) |
| **Tensor Parallelism** | Support tensor split across idle GPU pairs for dense models and MTP MoE | Better dual-GPU utilization during decode | [#14446](https://github.com/unslothai/unsloth/pull/14446) |
| **CFG-Parallel Z-Image** | Run Z-Image guidance branches on two cards | Multi-GPU image generation speedup | [#14564](https://github.com/unslothai/unsloth/pull/14564) |
| **FP8 Diffusion Weights** | Keep fp8 weights in fp8 to avoid host RAM bloat | Reduced memory pressure on Ampere/T4 | [#14549](https://github.com/unslothai/unsloth/pull/14549) |
| **MoE Autotune Cache** | Fixed device capability comparison (list vs tuple) | Cache now hits properly | [#14578](https://github.com/unslothai/unsloth/pull/14578) |

---

## Stability & Regressions

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| **High** | Core dumps after a few inference turns, models stop responding | [#14411](https://github.com/unslothai/unsloth/issues/14411) | Investigating |
| **High** | Block compile breaks checkpoint recomputation on distributed runs (`CheckpointError` in backward of step 1) | [#14063](https://github.com/unslothai/unsloth/issues/14063) | `UNSLOTH_BLOCK_COMPILE=0` workaround |
| **Medium** | Gemma-3 doesn't train — flat loss, chance-level accuracy (FastDecisionModel / Clef head) | [#14439](https://github.com/unslothai/unsloth/issues/14439) | Under investigation |
| **Medium** | Potential Windows memory leak: 200-400 MB lost after each Studio use | [#14487](https://github.com/unslothai/unsloth/issues/14487) | Under investigation |
| **Medium** | Custom Krea2 models crashing app/not loading | [#14474](https://github.com/unslothai/unsloth/issues/14474) | Under investigation |
| **Low** | Pre-commit CI stress from unoptimized `scripts/enforce_kwargs_spacing.py` | [#14174](https://github.com/unslothai/unsloth/issues/14174) | Needs optimization |
| **Low** | Installer ignores `PIP_INDEX_URL` / `UV_INDEX_URL` | [#13737](https://github.com/unslothai/unsloth/issues/13737) | Fix pending |

---

## What This Means for Application Developers

1. **Apple Silicon Users**: The MLX backend now properly reports health via `unsloth doctor`, and long chats no longer suffer 7-13 second delays per turn.

2. **Multi-GPU Setup**: Tensor parallelism now properly utilizes both cards for dense models and MoE — expect better throughput on dual-GPU rigs.

3. **Image Generation**: SDXL prompt weighting syntax now matches AUTOMATIC1111/Forge, and default optimizations (FLUX RoPE fusion, CFG batching) are now enabled. If using fp8 checkpoints on older GPUs, memory usage is reduced.

4. **Workaround Note**: If using distributed training with block compile and hitting checkpoint errors, set `UNSLOTH_BLOCK_COMPILE=0` as a temporary workaround.

5. **Chat UX**: Switching between chats with different models is now smarter — returning to a chat keeps its original model loaded if still in memory.

6. **Query Links**: Studio now supports `/chat?q=<text>` or `/?q=<text>` for embedding as a browser search engine.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*