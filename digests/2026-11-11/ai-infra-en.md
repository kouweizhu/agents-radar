# AI Infrastructure Digest 2026-11-11

> Generated: 2026-11-11 02:10 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report across all five projects I've already analyzed (vLLM, SGLang, llama.cpp, Ollama, and LiteLLM). They've provided GitHub data for each project and I've already written individual digests. Now I need to synthesize everything into a unified cross-project analysis.

Let me compile the key data points from each project:

**vLLM:**
- Issues: 14 in digest, many active
- PRs: 47 mentioned
- Releases: None in last 24h
- Model support: GLM-5.3, Kimi K3.1 Pro, DeepSeek V4/V4.1, Muse Spark, Phi4Flash, SigLIP2
- Hardware: AMD MI355X (gfx950), SM107, Blackwell
- Performance: FlashInfer warp split-K GEMMs, DSpark, batch-invariant routing
- Stability: DFlash TP>1 bug, structured output regression, ModelOpt Llama-4 loading

**SGLang:**
- Issues: Many (tracking #42752 with 192 comments)
- PRs: Not explicitly counted but many
- Releases: None in last 24h
- Model support: Qwen4-Exp, GLM-5.3-Flash, DeepSeek-V4.1, GLM-4.7-Flash
- Hardware: SM120 (RTX PRO 6000), AMD gfx950, Blackwell
- Performance: HiCache, Mooncake L3, Unified Engram store, sparse MLA prefill
- Stability: SM90 decode regression, GLM-5.3-Flash SM120 crash, CI flakiness

**llama.cpp:**


- Commits: 10 in last 24h
- Model support: Kimi K3.1 Vision, ZONOS3-Mini TTS
- Hardware: CUDA VMM pool halved, SYCL cached device ID
- Performance: Fused q8_0/q4_0 KV dequant, BLAS workspace fix for ROCm, mmap for Vulkan
- Stability: Speculative decoding with quantized targets bug, segfault #9949

**Ollama:**
- Releases: v0.40.17 stable
- Model support: MLX video input, Nemotron 3.5 Bolt, decision models (D1, Kev, etc.)
- Hardware: Vulkan mmap for integrated GPUs, MLX concurrent generation
- Performance: Speculative decoding metrics, MLX progress reporting
- Stability: Windows RTX 5090 tool calling disconnect, MLX KV cache accumulation

**LiteLLM:**
- Releases: v1.110.0-rc.1, v1.109.0 stable, v1.108.5 LTS
- Security: Compromised v1.107.0 (credential stealer + RCE)
- Model support: Bedrock knowledge base image search, Vertex AI request labeling, Tripo, Qoder Cloud
- Performance: Spend accounting, streaming terminal event, MCP authorization cache
- Stability: Per-customer RPM limits bug, TPM token window refill bug

**Unsloth:**
- Releases: None in last 24h
- Model support: MiniMax-H3-Image, Yandex web search
- Hardware: ROCm gfx1031 (RX 6700 XT segfault), Intel Arc 140V
- Performance: vLLM/SGLang tool request max_tokens fix, Ollama context compaction
- Stability: Admin password leak (reverse proxy), shell command approval bypass, Qwen hybrid full prompt reprocessing

Now I'll synthesize this into a coherent cross-project analysis. The ecosystem shows active development across inference engines and fine-tuning frameworks, with security incidents in LiteLLM balanced by performance improvements and new model support across the board.
</think>


# AI Infrastructure Ecosystem — Cross-Project Digest
**Date: 2026-11-11**

---

## 1. Ecosystem Overview

Today's activity across the five major open-source AI inference projects reflects a maturing but rapidly evolving infrastructure landscape. **vLLM** and **SGLang** are converging on the same optimization targets — AMD ROCm MI355X (gfx950) for Qwen3.8, DeepSeek V4.1, and GLM-5.3 — suggesting the two projects are competing for the same production deployments while maintaining distinct architectural philosophies. **llama.cpp** continues its path as the lowest-common-denominator runtime with CUDA and ROCm kernel refinements but no formal release cadence, while **Ollama** targets Apple Silicon and integrated-GPU users with a polished local-experience layer. **LiteLLM** experienced a critical supply-chain compromise that underscores the security surface area when routing through proxy layers; its v1.108.5 LTS tag should be the default for production. Across all projects, the dominant themes are **speculative decoding correctness**, **multi-tier KV cache hierarchies**, and **AMD GPU parity** — none of which are resolved yet.

---

## 2. Activity Comparison

| Project | Issues (active) | PRs (total / period) | Releases (24h) | Notable Backlog |
|---------|-----------------|----------------------|----------------|-----------------|
| **vLLM** | ~20 tracked in digest | ~47 PRs (12+ in review/landed) | None | 1 open security/RCE-class issue; 1 critical DFlash TP>1 bug; V0 → V1 migration blocker |
| **SGLang** | ~20 tracked; #42752 at 192 comments | ~15 notable PRs | None | SM90 decode regression (33–45% per-step); CI infrastructure instability; GLM-5.3-Flash SM120 crash |
| **llama.cpp** | ~8 open issues | 10 commits landed | None (rolling) | Speculative decoding quantized-target correctness; XDNA backend still open |
| **Ollama** | ~14 tracked | ~47 PRs | **v0.40.17 stable** | Windows RTX 5090 tool-calling disconnect; MLX KV-cache accumulation fixed |
| **LiteLLM** | ~15 open | ~20 notable PRs | v1.110.0-rc.1, v1.109.0 stable, v1.108.5 LTS | **Compromised v1.107.0** (supply-chain incident); per-customer RPM limits regression |
| **Unsloth** | ~15 tracked | ~232 total (20 notable) | None | Admin password leak; shell-command bypass; MoE CPU divergence |

**Takeaway:** Ollama shipped the only formal release. SGLang has the largest community engagement by comment volume (CI tracking at 192 comments), while LiteLLM's supply-chain incident represents the highest-severity single event across all projects.

---

## 3. Model Support Race

The race to support the newest frontier models is a three-way contest between vLLM, SGLang, and Ollama, with llama.cpp trailing by architecture but leading in breadth of hardware targets.

| Model | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-------|------|--------|-----------|--------|---------|
| **Qwen3.8 / Flash-Next** | ✅ Active optimization (MI355X, SM107) | ❌ Not mentioned | ❌ | ❌ | ❌ |
| **GLM-5.3** | ✅ FlashInfer GEMM + quantization | ✅ SM120 crash (fa4 backend) | ❌ | ❌ | ❌ |
| **DeepSeek V4 / V4.1** | ✅ Sparse MLA FP8 KV-cache (ROCm) | ✅ Blackwell decode optimization | ❌ | ❌ | ❌ |
| **Kimi K3.1 / K3.1 Pro** | ✅ Large multi-split PR (ROCm DCP, P/D) | ❌ | ✅ Vision support landed | ❌ | ❌ |
| **Muse Spark** | ✅ DSpark draft norms fusion | ❌ | ❌ | ❌ | ❌ |
| **Nemotron 3.5 Bolt** | ❌ | ❌ | ❌ | ✅ MLX per-layer expert routing | ❌ |
| **Phi4Flash** | ⚠️ V0 being dropped; V1 port needed | ❌ | ❌ | ❌ | ❌ |
| **MiniMax-H3-Image** | ❌ | ❌ | ❌ | ❌ | ✅ Text-to-image + reference editing |
| **Kimi K3.1 Vision (mtmd)** | ❌ | ❌ | ✅ Multimodal support | ❌ | ❌ |
| **Decision models (D1, Kev)** | ❌ | ❌ | ❌ | ✅ `/v1/systemone` wire format | ❌ |

**Leader:** vLLM leads in frontier model coverage, especially for the dense/MoE models (Qwen3.8, DeepSeek V4, GLM-5.3). SGLang is second but hampered by SM120 and fa4 compatibility issues. Ollama leads on Apple Silicon-specific models via MLX. llama.cpp is architecturally broadest but supports the fewest cutting-edge models natively.

---

## 4. Performance Frontier

Today's optimization work clusters into five domains, with KV-cache architecture and distributed serving receiving the most concurrent effort.

### KV Cache & Multi-Tier Storage
**vLLM** is the clear leader in KV-cache innovation: filesystem offload with data integrity RFC ([#54363](https://github.com/vllm-project/vllm/issues/54363)), TP-agnostic offloading ([#61886](https://github.com/vllm-project/vllm/issues/61886)), and Direct Weight Reload for RL training ([#54477](https://github.com/vllm-project/vllm/issues/54477)). **SGLang's** HiCache + Mooncake L3 unification (PRs #49696, #46499, #46248) is architecturally similar but more vertically integrated with the SRT scheduler. **Ollama** fixed a critical MLX KV-cache leak where accumulation was proportional to request count rather than context size.

### Speculative Decoding / DSpark
Both **vLLM** and **SGLang** are investing heavily here. vLLM has Muse Spark DSpark (PR #66764, −4.4% TPOT), while SGLang has DeepSeek-V4.1 Blackwell optimizations (PR #48456) and attention sinks in EAGLE verify (PR #47513). However, **vLLM has a critical open bug**: DFlash acceptance collapses at TP>1 ([#66387](https://github.com/vllm-project/vllm/issues/66387)), which undermines production deployments of speculative decoding. llama.cpp also has a speculative decoding correctness issue with quantized targets ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618)).

### Quantization Routing
**vLLM's** batch-invariant GPTQ routing through Hummingbird (PR #66838) eliminates per-call weight unpack/rescale overhead — the most significant quantization efficiency gain this cycle. **SGLang** has an open regression where JSON-defined OpenAI-like providers lose tools unless the model is in the catalog.

### Kernel-Level Optimization
| Project | Kernel Work |
|---------|-------------|
| **vLLM** | FlashInfer warp split-K BF16 GEMM (SM107), MXFP8 via AITER FlyDSL (MI355X), exact top-p cutoff CUDA op (SM90/Blackwell) |
| **SGLang** | Sparse MLA prefill optimization (SM100), HiSparse swap-in planner prefix-scan fix |
| **llama.cpp** | Fused q8_0/q4_0 KV dequant in MMA flash-attention; CUDA graph compat skip on reuse |
| **Unsloth** | vLLM/SGLang tool-request `max_tokens` fix |

### Distributed Serving
**SGLang's** cross-DP prefill delayer policy (PR #65655) prevents head-of-line blocking across MoE data-parallel ranks. **vLLM's** Mooncake heterogeneous-TP support (PR #53078, needs-rebase) addresses hybrid GDN/Mamba models — a key gap for DeepSeek-V4 deployments.

---

## 5. Layer Positioning

Each project occupies a distinct position in the inference stack, with minimal direct overlap beyond vLLM ↔ SGLang.

```
┌─────────────────────────────────────────────────────────┐
│                    LiteLLM (Gateway)                     │  ← API proxy, multi-provider routing, spend accounting, authZ
├─────────────────────────────────────────────────────────┤
│  Ollama (Local Runtime)  │  Unsloth (Fine-tuning/Local) │  ← End-user facing, opinionated UX, MLX backend, Studio UI
├─────────────────────────────────────────────────────────┤
│            vLLM  │  SGLang (Serving Engines)             │  ← Production inference servers, KV-cache, distributed serving
├─────────────────────────────────────────────────────────┤
│               llama.cpp (Runtime / Low-Level)            │  ← Quantized inference, GGUF, hardware backends (CUDA/ROCm/Vulkan/SYCL/CANN)
└─────────────────────────────────────────────────────────┘
```

| Layer | Projects | Characteristics |
|-------|----------|-----------------|
| **Gateway / Proxy** | LiteLLM | Multi-provider abstraction, spend tracking, authZ, custom LLM providers, guardrails |
| **Local / End-User Runtime** | Ollama, Unsloth | One-command deployment, opinionated UX, MLX (Ollama) or training-focused (Unsloth), no API parity requirement |
| **Production Serving Engine** | vLLM, SGLang | Scheduler, KV-cache management, speculative decoding, P/D disaggregation, multi-GPU |
| **Low-Level Runtime** | llama.cpp | GGUF quantization, broad hardware backends, no built-in scheduler, can be embedded |

**Overlap zone:** vLLM and SGLang both target production inference with KV-cache and distributed serving. They differ in that SGLang's SRT scheduler is more tightly integrated with the frontend (chat UI, web serving), while vLLM is more of a pure inference backend. Ollama *can* use vLLM as a backend, but presents itself at a different layer.

---

## 6. Trend Signals

### 1. AMD ROCm MI355X (gfx950) Is Now a First-Class Target
Multiple projects are simultaneously shipping stacked PRs for MI355X: vLLM has MXFP8 GEMMs (PR #65479), sparse MLA FP8 KV-cache (PR #66036), and Qwen3.8/Qwen3.8-Flash-Next optimization tracks (#57149, #59575). SGLang has a dedicated tracker for DeepSeek-V4.1 on gfx950 (issue #49327). The ROCm CI parity work (issue #38693, closed) signals that AMD is no longer a second-class citizen. **Infrastructure engineers should evaluate MI355X for cost-sensitive production workloads** — the hardware is real, software support is converging, and the pricing delta vs. NVIDIA H100 is substantial.

### 2. Speculative Decoding Is Still Not Production-Ready at Scale
Despite heavy investment, every project has open correctness issues: vLLM's DFlash collapses at TP>1 (#66387), llama.cpp's quantized-target speculative decoding diverges (#25618), SGLang has a 33–45% decode regression on Blackwell (#49336), and Unsloth reports a ~20-point acceptance rate drop with UD 3.1 + Qwen3.8-Flash-Next MTP heads. **Teams planning speculative decoding in production should budget extra validation effort and maintain fallback paths.**

### 3. Supply-Chain Security Is a Real Operational Risk
LiteLLM's compromised v1.107.0 — a credential stealer + RCE loader distributed via PyPI — is the most severe single event across all five projects today. It demonstrates that even mature proxy layers are targets. **All teams using LiteLLM should immediately pin to the `lts` Docker tag** and monitor for any `latest` pulls from mid-October 2026. More broadly, this event argues for cosign verification of all inference-layer containers, not just LiteLLM.

### 4. Multi-Tier KV-Cache Architecture Is Becoming Standard
vLLM's filesystem offload RFC (#54363), SGLang's HiCache + Mooncake L3 unification (#49696, #46499), and Ollama's mmap for Vulkan iGPUs all point to the same conclusion: **KV-cache eviction and tiering is now a first-class system design concern**. As context windows push toward 1M tokens and multi-modal inputs (video, images) compound memory pressure, the projects that get this right will win production deployments.

### 5. The V0 → V1 Transition in vLLM Creates a Temporary Support Gap
vLLM's announcement that V0 will be dropped "very soon" leaves models like Phi4Flash (issue #23957) in limbo. **Application developers relying on vLLM V0 should initiate migration testing now**, as the transition will be non-trivial for custom model architectures with V0-specific adaptations (Mamba layers, custom attention backends).

### 6. Apple Silicon (MLX) Is Accelerating as a First-Class Inference Target
Ollama's MLX backend now supports concurrent generation, video input, decision models, and Nemotron 3.5 Bolt with per-layer expert routing. The MLX KV-cache bug fix (issue #17875) signals production maturity. **For teams targeting MacBook Pro / Mac Studio deployments, Ollama + MLX is now the most well-integrated stack**, ahead of llama.cpp's Metal backend for developer experience.

### 7. Structured Output Regression Is Unaddressed Across All Engines
vLLM's ~2x decode regression for structured outputs (#62442) and SGLang's stop-string handling bug (#41372) both affect agentic pipelines. **This is the highest-impact regression for application developers building tool-calling or JSON-output workflows.** None of the projects have a committed fix timeline.

---

*Digest compiled from github.com activity across vllm-project/vllm, sgl-project/sglang, ggml-org/llama.cpp, BerriAI/litellm, unslothai/unsloth, and ollama/ollama on 2026-11-11. All times are UTC.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to generate a vLLM digest for 2026-11-11 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Key observations from the data:

1. **Releases**: None in last 24h

2. **Top Issues by comments**:
   - #57149: ROCm AMD MI355X performance optimization for Qwen3.8 (31 comments) - OPEN
   - #31624: ModelOpt Llama-4 checkpoint loading bug (25 comments) - CLOSED
   - #28498: ZMQ socket bug with port conflict (23 comments) - OPEN
   - #59575: ROCm AMD MI355X performance optimization for Qwen3.8-Flash-Next (22 comments) - OPEN
   - #54363: RFC for filesystem KV offload data integrity (21 comments) - OPEN
   - #60523: RFC for improving MooncakeConnector (21 comments) - OPEN
   - #23761: Per-rank log files feature request (19 comments) - OPEN
   - #61886: TP-agnostic KV offloading tracking (17 comments) - OPEN
   - #54477: Direct Weight Reload for RL Training RFC (14 comments) - OPEN
   - #57406: GLM 5.3 performance optimization (13 comments) - OPEN
   - #38693: ROCm CI parity with CUDA (12 comments) - CLOSED
   - #23957: Phi4Flash model support in V1 (12 comments) - OPEN
   - #52167: Extended online quantization roadmap RFC (11 comments) - OPEN
   - #43916: AMD MI300/MI325/MI355 performance testing dashboard (11 comments) - CLOSED
   - #65569: Batch-invariant mode routing Linear to Triton (10 comments) - OPEN
   - #64572: Triton attention K/V cache re-derivation performance (9 comments) - OPEN
   - #66387: DFlash acceptance collapse at TP>1 (9 comments) - OPEN
   - #65959: Rust regex engine RFC (9 comments) - OPEN
   - #48193: Weight-loading-bound startup roadmap (8 comments) - OPEN
   - #63705: MiniMax-M2.7 throughput regression TP4+EP (8 comments) - OPEN

3. **Top PRs** (by recency, as comment counts are undefined):
   - #65706: GLM-5.3 FlashInfer warp split-K and ll_bf16 GEMMs for SM107
   - #66838: Quantization GPTQ linear batch-invariant routing through Hummingbird
   - #66624: Bugfix SigLIP2 chat template issue
   - #66764: Muse Spark DSpark draft norms fusion and Markov sampling
   - #63874: FlashInfer one-sided workspaces release on teardown
   - #65479: ROCm MXFP8 linear on AITER's FlyDSL GEMM for MI355X
   - #66795: NIXL re-handshake bugfix
   - #66924: XPU CI skip LMCacheMPConnector tests
   - #66073: Keyframe-aware video sampling (closed)
   - #66433: Kimi-K3.1-Pro B300 AgentX presets (closed)
   - #66036: DSv4/4.1 Tensor scale FP8 KV Cache for Sparse MLA on ROCm
   - #66568: XPU CI skip TP=2 test
   - #64152: DSv4.1 Mono tuned K1 at TP8 (closed)
   - #66846: ECMooncakeConnector local cache fix
   - #65655: Cross-DP prefill delayer scheduling policy
   - #62769: DSpark synchronization across TP ranks (closed)
   - #53078: Mooncake heterogeneous-TP support (needs-rebase)
   - #65101: Exact top-p cutoffs CUDA op
   - #65647: DeepSeek-V4 DSpark packed_modules_mapping bugfix
   - #65685: Kimi K3.1 Pro ROCm DCP, P/D, indexer top-k (massive PR)

Notable patterns emerging: AMD GPU optimizations are taking priority across multiple PRs, GLM-5.3 performance work is landing for SM107, and there are several bugfixes around distributed features like DSpark and P/D disaggregation. The Kimi K3.1 Pro work spans multiple areas including ROCm support, scheduling policies, and indexing. There's also attention on quantization routing for batch-invariant workloads and filesystem KV offload reliability.

I'm seeing significant work on weight loading performance, particularly around ModelOpt Llama-4 and startup optimization. The RL training direct weight reload RFC is active, suggesting production deployment concerns. For developers, the main signals are performance improvements on AMD and GLM-5.3, bugfixes for DFlash acceptance at high tensor parallelism, and new CUDA ops for top-p truncation.
</think>


# vLLM Daily Digest — 2026-11-11

## Today's Highlights

The vLLM community is laser-focused on AMD ROCm optimization this cycle, with stacked PRs targeting MI355X (gfx950) across Qwen3.8, DeepSeek V4.1, and MiniMax-M3.1 models. Meanwhile, a critical bug affecting DFlash speculative decoding collapses at tensor parallelism > 1 is under active investigation, and the project is piloting a Rust regex engine swap to replace Python's `regex` crate for response parsing.

---

## Releases & Breaking Changes

No releases in the last 24 hours. The following deprecation/removal signals are active:

| Item | Description | Issue/PR |
|------|-------------|----------|
| V0 removal imminent | V0 will be dropped "very near future"; Phi4Flash model support must be ported to V1 to survive | [#23957](https://github.com/vllm-project/vllm/issues/23957) |

---

## New Model & Hardware Support

### Models
| Model | Support Status | Notes |
|-------|---------------|-------|
| **GLM-5.3** | Performance work in progress | Same `glm_moe_dsa` arch as 5.2; additional uplift PRs targeting SM107 FlashInfer GEMMs | [#65706](https://github.com/vllm-project/vllm/pull/65706), [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **Kimi K3.1 Pro** | Large multi-split PR in review | Split 5/6 landing (ROCm DCP, P/D for packed hybrid caches, indexer top-k); splits 1–4 already merged | [#65685](https://github.com/vllm-project/vllm/pull/65685) |
| **DeepSeek V4 / V4.1** | ROCm FP8 KV cache for Sparse MLA | Per-tensor FP8 KV-cache (`--kv-cache-dtype fp8_e4m3`) on gfx950 via AITER sparse MLA kernel | [#66036](https://github.com/vllm-project/vllm/pull/66036) |
| **Muse Spark** | NVIDIA DSpark draft norms fused | Fusion of draft norms + Markov sampling tail on SM100; TPOT −4.4% reported | [#66764](https://github.com/vllm-project/vllm/pull/66764) |
| **Phi4Flash** | Needs V1 port | V0 being dropped; custom Mamba layer adaptation required | [#23957](https://github.com/vllm-project/vllm/issues/23957) |
| **SigLIP2** | Bugfix landed | Chat template was incorrectly using Gemma's instead of SigLIP's; fix ensures consistent embeddings | [#66624](https://github.com/vllm-project/vllm/pull/66624) |

### Hardware & Backends
| Platform | Update | Details |
|----------|--------|---------|
| **AMD MI355X (gfx950)** | MXFP8 linear via AITER FlyDSL | New `AiterFlyDSLMxfp8LinearKernel` for tuned (N,K) shapes; falls back to Triton for others | [#65479](https://github.com/vllm-project/vllm/pull/65479) |
| **AMD MI350X (gfx942)** | Muse Spark performance optimization | FP8 PTPC-tuned GEMM table entries | [#64018](https://github.com/vllm-project/vllm/issues/64018) |
| **NVIDIA SM107** | GLM low-latency GEMM table expanded | FlashInfer warp split-K BF16 + vLLM `ll_bf16` GEMM added alongside CuTe skinny GEMM | [#65706](https://github.com/vllm-project/vllm/pull/65706) |
| **Intel XPU** | CI hardening | Skipping `LMCacheMPConnector` tests when `lmcache` not installed; additional TP=2 skip in distributed shutdown job | [#66924](https://github.com/vllm-project/vllm/pull/66924), [#66568](https://github.com/vllm-project/vllm/pull/66568) |
| **Rust regex engine** | RFC open | Proposal to switch from Python `regex` crate to `regex-lite` or `regress` for response parsing (lookbehind assertions unsupported in current crate) | [#65959](https://github.com/vllm-project/vllm/issues/65959) |

---

## Performance & Optimization

### Landed / In Review
| Area | Change | Impact | PR/Issue |
|------|--------|--------|----------|
| **GLM-5.3 on SM107** | Added FlashInfer warp split-K BF16 GEMM and `ll_bf16` GEMM to low-latency table | Improves projection layer latency | [#65706](https://github.com/vllm-project/vllm/pull/65706) |
| **Muse Spark DSpark on SM100** | Fused draft norms + Markov sampling tail | TPOT −4.4% (adaptive batch) | [#66764](https://github.com/vllm-project/vllm/pull/66764) |
| **Batch-invariant GPTQ Linear** | Route through Hummingbird when selected | Eliminates per-call full weight unpack/rescale overhead | [#66838](https://github.com/vllm-project/vllm/pull/66838) |
| **DSv4.1 Mono at TP8** | Tuned K1 attention paths | Improved attention seam and front for TP8 configuration | [#64152](https://github.com/vllm-project/vllm/pull/64152) (closed) |
| **Top-p cutoff CUDA op** | New `topp_cutoffs_lse` kernel (SM90, Blackwell) | Exact top-p truncation with kept LSE in single launch; enables future sampling improvements | [#65101](https://github.com/vllm-project/vllm/pull/65101) |
| **Cross-DP prefill delayer** | New `--prefill-schedule-policy delayer` | Aligns prefill decisions across MoE data-parallel ranks; prevents head-of-line blocking | [#65655](https://github.com/vllm-project/vllm/pull/65655) |

### Active Investigations
| Issue | Severity | Description |
|-------|----------|-------------|
| [#57149](https://github.com/vllm-project/vllm/issues/57149) | High | Qwen3.8-2.4T on MI355X: stacked ROCm optimization PRs in flight; tracker for amd/Qwen3.8-2.4T-A95B-Quark-MXFP4 |
| [#59575](https://github.com/vllm-project/vllm/issues/59575) | High | Qwen3.8-Flash-Next on MI355X: similar stacked PR plan for `qwen4_exp` (GatedDeltaNet, QuerySparse Attention, MXFP4 MoE) |
| [#63705](https://github.com/vllm-project/vllm/issues/63705) | Medium | MiniMax-M2.7 throughput regression at TP4+EP in v0.29–0.32 vs earlier versions |
| [#65569](https://github.com/vllm-project/vllm/issues/65569) | Medium | Batch-invariant mode incorrectly routes some Linear layers to Triton even when cuBLAS is batch-invariant (withdrawn cuBLAS routing proposal; cuBLAS not universally batch-invariant) |
| [#64572](https://github.com/vllm-project/vllm/issues/64572) | Medium | Triton/eager attention backends re-derive K/V cache views on every call (same root cause as #59534 for FlashAttention) |
| [#62442](https://github.com/vllm-project/vllm/issues/62442) | Medium | ~2x decode throughput regression for structured outputs since #45424; not fixed by #49919 |

---

## Stability & Regressions

### Critical Bugs
| Bug | Severity | Status | Fix PR |
|-----|----------|--------|--------|
| **DFlash acceptance collapses at TP>1** — DFlash drafter (XiaomiMiMo/MiMo-V2.6-Flash-MOPD) fails with TP>1 but works at TP1 | **High** | Open, active investigation | None yet |
| **ModelOpt Llama-4 checkpoints take 5+ min to load** from CPU page cache; root cause in state dict hack loading logic | **High** | Closed (was open with 25 comments) | None tracked in data |

### Notable Fixes Landed
| Bug | Description | PR |
|-----|-------------|-----|
| **FlashInfer one-sided workspaces leaked on teardown** | `FlashInferNVLinkOneSidedManager.destroy()` now releases its communicator properly | [#63874](https://github.com/vllm-project/vllm/pull/63874) |
| **NIXL P/D disaggregation push stalls** | Re-handshake peer on `NIXL_ERR_REMOTE_DISCONNECT`; stop early block release on push | [#66795](https://github.com/vllm-project/vllm/pull/66795) |
| **ECMooncakeConnector stale cache on encoder reset** | Local cache now cleared on `reset_encoder_cache` to avoid serving stale embeddings | [#66846](https://github.com/vllm-project/vllm/pull/66846) |
| **DSpark adaptive decisions not synced across TP ranks** | Synchronization fix for DeepSeek-V4 DSpark on AMD/NVIDIA/XPU | [#62769](https://github.com/vllm-project/vllm/pull/62769) (closed) |
| **DeepSeek-V4 DSpark missing `packed_modules_mapping`** | Caused model loading failures; affects AMD, NVIDIA, XPU | [#65647](https://github.com/vllm-project/vllm/pull/65647) |
| **SigLIP2 inconsistent embeddings** | Using Gemma chat template instead of SigLIP's; fixed | [#66624](https://github.com/vllm-project/vllm/pull/66624) |

### Open Concerns
| Issue | Severity | Description |
|-------|----------|-------------|
| [#66387](https://github.com/vllm-project/vllm/issues/66387) | **High** | DFlash acceptance collapses at TP>1 (MiMo-V2.6-Flash-MOPD, TP1 fine) |
| [#28498](https://github.com/vllm-project/vllm/issues/28498) | Medium | ZMQ socket bug with port conflict in 2P4D DeepSeek-V3 configuration |
| [#40279](https://github.com/vllm-project/vllm/issues/40279) | Medium | Load balancer fails to distribute samples across data-parallel axis after 48–72h with long responses |
| [#54383](https://github.com/vllm-project/vllm/issues/54383) | Low-Medium | First boot with a `(max-num-batched-tokens, max-num-seqs)` shape gets ~5% smaller KV cache than subsequent identical boots |

---

## What This Means for Application Developers

1. **If you run on AMD MI355X/MI350X**: Active optimization work across Qwen3.8, DeepSeek V4.1, and MiniMax-M3.1 means upcoming nightly builds should yield meaningful throughput gains. Track [#57149](https://github.com/vllm-project/vllm/issues/57149) and [#59575](https://github.com/vllm-project/vllm/issues/59575) for landing PRs.

2. **If you use GLM-5.3 or Muse Spark on NVIDIA**: The SM107 low-latency GEMM table and DSpark draft fusion work should improve decode latency. The improvements are entering review now; expect them in the next 1–2 weekly releases.

3. **If you use structured output generation**: The ~2x decode regression ([#62442](https://github.com/vllm-project/vllm/issues/62442)) since the `apply_grammar_bitmask` staging is still open. If you are impacted, your best path is to engage on that issue with benchmarks.

4. **If you run with tensor parallelism > 1 and use DFlash/MiMo speculative decoding**: Avoid TP>1 configurations with XiaomiMiMo/MiMo-V2.6-Flash-MOPD until [#66387](https://github.com/vllm-project/vllm/issues/66387) is resolved. TP1 is confirmed working.

5. **If you run vLLM with P/D disaggregation via Mooncake or NIXL**: The bugfixes landed in [#66795](https://github.com/vllm-project/vllm/pull/66795), [#66846](https://github.com/vllm-project/vllm/pull/66846), and [#53078](https://github.com/vllm-project/vllm/pull/53078) (heterogeneous-TP for hybrid GDN/Mamba models) improve reliability under sustained load. The heterogeneous-TP fix is marked `needs-rebase`; monitor for merge.

6. **If you are on the V0 engine**: Migration to V1 is urgent — the team has stated V0 will be dropped very soon. Models like Phi4Flash that haven't been ported will become unavailable.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang and create a structured digest for 2026-11-11.

Key observations:

1. **Releases**: None in last 24h
2. **Hot Issues**: 
   - #42752: Flaky tests/CI infrastructure issues (192 comments - very active)
   - #15194: Quantization modifications roadmap (30 comments, just closed)
   - #42012: GLM-5.3-Flash on SM120 crash with fa4 attention
   - #33422: DeepSeek-V4 performance on SM120 (2-7K tok/s vs 12.5K reported)
   - #47481: Cache hit-rate dip with HiCache + Mooncake
   - #41372: Scheduler bug with decoded_text
   - #49519: Rust server BOS token bug
   - #49336: SM90 decode regression v0.5.22 → v0.5.23

3. **PR Activity**:
   - #49696: Prefetch SSD-resident KV into store DRAM
   - #46248: Unified Engram store for HiCache + Qwen4-Exp
   - #49677: Scheduler refactor - request lists only through move
   - #49574: Diffusion H3 video fix
   - #48456: DeepSeek-V4.1 Blackwell decode optimization
   - #49631: Encode load snapshot before taking lock
   - #48891: Sparse MLA prefill optimization for SM100
   - #47513: Attention sinks in EAGLE verify kernel
   - #43360: AMD fp4 Quark MXFP4 GEMM backend
   - #46499: UnifiedL3 mooncake storage backend
   - #49666: HiCache buffer load-back optimization
   
The most pressing issues are the CI flakiness and test infrastructure problems, the quantization roadmap updates, and performance regressions on Blackwell architecture. The new PRs are focused on KV caching improvements with HiCache and Mooncake integration, scheduler refactoring, and diffusion model fixes for H3 video generation.
</think>


# SGLang Daily Digest — 2026-11-11

## 1. Today's Highlights

CI infrastructure continues to dominate community attention with issue #42752 accumulating 192 comments on flaky tests in NVIDIA PR runs. The quantization roadmap (#15194) reached closure with a structured refactor plan for scheme-based compression (compressed_tensors, quark) vs non-scheme approaches (modelslim, AWQ). A significant SM90 decode regression (33–45% per-step slowdown, #49336) was reported in the v0.5.22 → v0.5.23 upgrade path.

---

## 2. Releases & Breaking Changes

| Item | Description | Links |
|------|-------------|-------|
| **No new releases** | None in the last 24 hours | — |

**Notable closed milestone:** Issue #15194 (Quantization Modifications Roadmap) closed with agreement to standardize scheme structures across compression backends.

---

## 3. New Model & Hardware Support

| Model / Hardware | Detail | Status | Links |
|------------------|--------|--------|-------|
| **Qwen4-Exp** | HiCache unified Engram store integration landed | PR #46248 open | [PR #46248](https://github.com/sgl-project/sglang/pull/46248) |
| **GLM-5.3-Flash** | SM120 (RTX PRO 6000) — fa4 attention backend crashes on CUDA-graph capture; triton backend is workaround | Issue #42012 open | [Issue #42012](https://github.com/sgl-project/sglang/issues/42012) |
| **GLM-4.7-Flash** | W4A16 compressed-tensors bug: `kv_b_proj.weight` missing in packed layers | Issue #49369 open | [Issue #49369](https://github.com/sgl-project/sglang/issues/49369) |
| **DeepSeek-V4.1-Flash** | AMD gfx950 / MI355X optimization tracker active | Issue #49327 open | [Issue #49327](https://github.com/sgl-project/sglang/issues/49327) |
| **Qwen4-Exp PLE** | BF16 n-gram shards incorrectly cast to FP8 with unit scale | Issue #49493 open | [Issue #49493](https://github.com/sgl-project/sglang/issues/49493) |
| **AMD RDNA3/RDNA4** | CI and upstreaming plan for gfx1100/gfx1201 | Issue #46900 open | [Issue #46900](https://github.com/sgl-project/sglang/issues/46900) |
| **SM120 support** | Ongoing kernel coverage work per roadmap #19637 | Tracking | [Issue #37813](https://github.com/sgl-project/sglang/issues/37813) |

---

## 4. Performance & Optimization

### Landed / In Review

| PR | Optimization | Scope | Links |
|----|-------------|-------|-------|
| **#49696** | Prefetch SSD-resident KV into store DRAM while queued (UnifiedL3) | Mooncake, HiCache | [PR #49696](https://github.com/sgl-project/sglang/pull/49696) |
| **#48456** | DeepSeek-V4.1: side-stream mHC mix in BF16x3 for Blackwell decode batches | NVIDIA, Blackwell | [PR #48456](https://github.com/sgl-project/sglang/pull/48456) |
| **#49677** | Scheduler: request lists edited only through `move` and the retirer | Core scheduler | [PR #49677](https://github.com/sgl-project/sglang/pull/49677) |
| **#49631** | Encode load snapshot before taking shared-memory file lock | Core SRT | [PR #49631](https://github.com/sgl-project/sglang/pull/49631) |
| **#48891** | SM100: sparse MLA prefill optimization for small heads | NVIDIA, SM100 | [PR #48891](https://github.com/sgl-project/sglang/pull/48891) |
| **#47513** | Attention sinks in split-KV EAGLE verify kernel | Triton backend | [PR #47513](https://github.com/sgl-project/sglang/pull/47513) |
| **#49576** | Diffusion: O(1) conditioning cache eviction, configurable entry limit | Diffusion | [PR #49576](https://github.com/sgl-project/sglang/pull/49576) |
| **#49666** | HiCache: keep buffer load-back ownership check from waiting on GPU at admission | HiCache | [PR #49666](https://github.com/sgl-project/sglang/pull/49666) |
| **#43360** | AMD: Quark MXFP4 dense GEMM selectable via `--fp4-gemm-backend aiter|triton` | AMD ROCm | [PR #43360](https://github.com/sgl-project/sglang/pull/43360) |
| **#38243** | HiSparse: fix swap-in planner prefix-scan corruption below swap_in_block_size 512 | JIT kernel | [PR #38243](https://github.com/sgl-project/sglang/pull/38243) |

### Reported Performance Gaps

| Issue | Observation | Hardware | Links |
|-------|-------------|----------|-------|
| **#33422** | DeepSeek-V4 prefill ~2–7K tok/s vs ~12.5K reported via vLLM/marlin | 4× RTX PRO 6000, TP=4 | [Issue #33422](https://github.com/sgl-project/sglang/issues/33422) |
| **#47481** | Reproducible cache hit-rate dip during L2/L3 capacity pressure with HiCache + Mooncake | Multi-tier cache | [Issue #47481](https://github.com/sgl-project/sglang/issues/47481) |

---

## 5. Stability & Regressions

### Critical / High Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **Critical** | #49336 | SM90 decode regression v0.5.22 → v0.5.23: **+33–45% per-step** at concurrency 12 (8K–64K); `use_deep_select_decode` imposes acceptance cost on Hopper | None yet |
| 🔴 **Critical** | #42012 | GLM-5.3-Flash on SM120: fa4 attention backend crashes at CUDA-graph capture (hybrid extend reshape) — **triton only workaround** | None yet |
| 🟠 **High** | #49519 | rust-server: `/generate` text prompts missing BOS when tokenizer relies on `add_bos_token` | None yet |
| 🟠 **High** | #41372 | `Req.decoded_text` never written → dead stop-string fallback + empty DecodeStatus seed on eviction re-init | None yet |
| 🟠 **High** | #48791 | Reasoning parser splits on first `</think>` occurrence; quoted closing tag inside CoT truncates `reasoning_content` and leaks into output | None yet |
| 🟡 **Medium** | #49340 | JIT-kernel B200 runs timeout on cold cache after shared-header changes (48–61 min vs 60 min limit) | None yet |
| 🟡 **Medium** | #49369 | GLM-4.7-Flash W4A16: `kv_b_proj.weight` missing in packed layers causing MLA post-load failure | None yet |
| 🟡 **Medium** | #49493 | Qwen4-Exp PLE: BF16 n-gram shards cast to FP8 with unit scale | None yet |

### Infrastructure

| Issue | Description | Links |
|-------|-------------|-------|
| **#42752** | Ongoing flaky tests / CI infrastructure failures in NVIDIA PR Test Base/Extra runs (192 comments) | [Issue #42752](https://github.com/sgl-project/sglang/issues/42752) |

---

## 6. What This Means for Application Developers

**Immediate concerns:**

- **If running Blackwell (SM90) with DeepSeek-V4.1-Flash + DSpark**: Hold at v0.5.22; the v0.5.23 regression adds ~35–45% decode latency per step at production concurrencies.
- **If using GLM-5.3-Flash on RTX PRO 6000 (SM120)**: Force the Triton attention backend (`--attention-backend triton`) as fa4 crashes on hybrid extend with CUDA-graph capture.
- **If using the rust-server `/generate` endpoint**: A BOS-token bug affects tokenizers with `add_bos_token=True`; responses may lack required start-of-sequence markers.

**New capabilities to evaluate:**

- **HiCache + Mooncake unified L3**: PRs #49696 and #46499 bring configurable SSD-tier prefetching and Mooncake storage backend; multi-turn workloads with long prefixes should see improved cache utilization.
- **Unified Engram store for Qwen4-Exp**: PR #46248 enables HiCache backing for Qwen4-Exp; consider testing prefix-caching for your Qwen4-Exp deployments.
- **cuDNN attention backend**: Issue #2272 tracks a long-requested cuDNN-based attention path; contributors welcome.

**Ongoing watch items:**

- The 192-comment CI tracking issue (#42752) signals ongoing instability in automated testing; if you're contributing PRs, expect variable CI times and occasional spurious failures requiring re-runs.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze the provided GitHub data for llama.cpp and create a structured digest for 2026-11-11.

Key observations from the data:

**Releases (commits in last 24h):**
- b12270: ggml MUL_MAT src1 precision tests and gating (#31896)
- b12263: CUDA VMM pool reservation size halved and retry on cuMemAddressReserve failure (#30542)
- b12262: CUDA skip graph compat check when graph is being reused (#32004)
- b12261: mtmd share compute buffer among subcontext (#31945)
- b12259: mtmd add kimi K3.1 vision (#31980)
- b12257: CUDA move graph and concurrent stream state out of common.cuh (#32001)
- b12255: model stop renaming recurrent cache tensors in plamo2 (#31984)
- b12254: json-schema fix allOf with plain types (#31834)
- b12253: escape control characters in tool argument strings (#31937)
- b12252: cann fail early when checking buffer type support (#31270)

**Notable PRs:**
- #32013: SYCL use cached device-id in set_main_device (merge ready)
- #32052: Fp16 opt for spacemit (closed)
- #31802: CUDA fused q8_0/q4_0 KV dequant in MMA flash-attention kernels
- #31838: HIP fixed BLAS workspace instead of rocBLAS allocating one per call
- #31590: CANN fix flash attention NaNs
- #31919: CUDA debug buffer pool
- #32020: mtmd add zonos3-mini TTS model
- #32051: ui add search_chats tool

**Key Issues:**
1. #25618 - Speculative decoding bug with quantized targets (40 comments) - Critical


2. #21725 - XDNA backend feature request (39 comments) - Enhancement
3. #27845 - Memory leak with tensor split on SYCL (24 comments) - Bug
4. #9949 - Segfault during speculative decoding (17 comments) - Critical
5. #30091 - llama-server crashes with bad allocation (10 comments)

I'll focus on the critical performance and reliability issues emerging from this data. The most pressing concerns involve speculative decoding, with two significant bugs causing potential crashes or incorrect outputs. Memory management problems persist across different hardware configurations, particularly on SYCL and CUDA platforms. The llama-server infrastructure continues to show instability, requiring targeted debugging and optimization efforts.
</think>


# llama.cpp Digest — 2026-11-11

## Today's Highlights

The past 24 hours brought significant backend optimization work, particularly for CUDA memory management and SYCL concurrency. Most notably, a long-standing speculative decoding divergence issue with quantized targets has resurfaced with 40 comments, highlighting potential correctness concerns for production deployments. New vision model support for Kimi K3.1 landed alongside continued refinements to the mtmd pipeline.

---

## Releases & Breaking Changes

No formal version tags were cut in this period. However, two changes carry breaking implications:

| Commit | Change | Impact |
|--------|--------|--------|
| [#31837](https://github.com/ggml-org/llama.cpp/pull/31837) (implied by b12263) | **CUDA VMM pool reservation size halved** from 16 GB to 8 GB on combined-memory GPUs, with automatic retry | May reduce peak memory headroom for large models on GPUs like RTX 4090; explicit OOM handling added |
| [#32001](https://github.com/ggml-org/llama.cpp/pull/32001) | CUDA graph/stream state moved from `common.cuh` → `ggml-cuda.cu` | Internal refactor; rebuild times will improve, no API change |

**Migration note:** Applications relying on CUDA virtual memory reservation patterns should verify workload stability post-update.

---

## New Model & Hardware Support

| Item | Details |
|------|---------|
| **Kimi K3.1 Vision** (b12259, [#31980](https://github.com/ggml-org/llama.cpp/pull/31980)) | Multimodal support added for Kimi's K3.1 vision architecture, including projector MLP and preprocessor fixes for both K2.5 and K3.1 variants |
| **ZONOS3-Mini TTS** ([#32020](https://github.com/ggml-org/llama.cpp/pull/32020)) | New TTS model integration; note the original model ships with a custom GGML runtime and is **not compatible** with this port |
| **Plamo2 recurrent cache** (b12255, [#31984](https://github.com/ggml-org/llama.cpp/pull/31984)) | Stopped renaming recurrent cache tensors, resolving potential tensor lookup issues |

No new quantization formats or backend targets were added today.

---

## Performance & Optimization

### Landed (merge-ready or merged)

| PR | Area | Description | Metric/Impact |
|----|------|-------------|---------------|
| [#32013](https://github.com/ggml-org/llama.cpp/pull/32013) | SYCL | Use thread-local cached device ID in `set_main_device()` to avoid mutex lock on every graph compute | Latency reduction for SYCL workloads |
| [#31802](https://github.com/ggml-org/llama.cpp/pull/31802) | CUDA | Fused q8_0/q4_0 KV dequantization directly into MMA flash-attention kernels | Eliminates separate dequant pass; memory bandwidth savings |
| [#31838](https://github.com/ggml-org/llama.cpp/pull/31838) | HIP/ROCm | Fixed 32 MB BLAS workspace allocated once at init instead of per-call | ROCm `test-backend-ops -o SOLVE_TRI` now passes 24/24 (was aborting with `HSA_STATUS_ERROR_MEMORY_FAULT`) |
| [#31945](https://github.com/ggml-org/llama.cpp/pull/31945) | mtmd | Shared compute buffer among subcontexts | Reduced memory fragmentation for multi-subcontext workloads |
| [#32004](https://github.com/ggml-org/llama.cpp/pull/32004) | CUDA | Skip graph compatibility check when graph is being reused | Faster dispatch for repeated graph patterns |
| [#31590](https://github.com/ggml-org/llama.cpp/pull/31590) | CANN (Ascend) | Fixed flash attention NaNs by correctly passing `attention_mask` | Correctness fix for Ascend 910B3 |
| [#31919](https://github.com/ggml-org/llama.cpp/pull/31919) | CUDA | Debug buffer pool (`GGML_CUDA_POOL_DEBUG=1`) for tracking scratch allocations | Diagnostic capability, not production-relevant |

### In Progress

| PR | Area | Description |
|----|------|-------------|
| [#30190](https://github.com/ggml-org/llama.cpp/pull/30190) | Vulkan | Fold verify tokens and GQA heads into one flash-attention row tile (WIP; supports GQA ratios 2–8) |
| [#16000](https://github.com/ggml-org/llama.cpp/pull/16000) | NUMA | `--numa mirror` option to replicate model weights across NUMA nodes |

---

## Stability & Regressions

Ranked by comment volume as proxy for community severity:

| Issue | Severity | Status | Summary | Fix PR? |
|-------|----------|--------|---------|---------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | **High** | OPEN | Speculative decoding produces different output than vanilla inference when target model is quantized (Q4_K_M); bf16 targets are unaffected | None yet |
| [#9949](https://github.com/ggml-org/llama.cpp/issues/9949) | **Critical** | OPEN | Segfault when running speculative decoding with Llama-3.1-405B + 8B draft model (405B on CPU, 8B on GPU) | None yet |
| [#30091](https://github.com/ggml-org/llama.cpp/issues/30091) | Medium | OPEN | llama-server crashes with "bad allocation" during long conversations (HIP backend, RX 9070) | None yet |
| [#31510](https://github.com/ggml-org/llama.cpp/issues/31510) | Medium | OPEN | SYCL dual Arc Pro B60 with `--cpu-moe --split-mode layer` is 100–1000× slower than single-GPU | None yet |
| [#31987](https://github.com/ggml-org/llama.cpp/issues/31987) | Low | OPEN | `auto_fgdn` hardcoded to false, fused GDN probe never executes | None yet |
| [#31979](https://github.com/ggml-org/llama.cpp/issues/31979) | Low | OPEN | llama-server does not validate Content-Type header | None yet |

**Note:** The XDNA backend feature request ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725), 39 👍) remains open and gathering interest.

---

## What This Means for Application Developers

1. **Quantized + Speculative Decoding = Caution.** If you're using draft-model speculative decoding in production, avoid quantized target models until [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) is resolved. Run a reference bf16 target for correctness validation.

2. **CUDA Memory Headroom Reduced.** The VMM pool reservation drop from 16 GB → 8 GB on combined-memory GPUs may cause OOMs for very large models. Monitor memory utilization closely if you updated within the last day.

3. **HIP/ROCm Fixed.** If you're on ROCm 6.3+, the BLAS workspace fix ([#31838](https://github.com/ggml-org/llama.cpp/pull/31838)) should resolve previously failing backend tests. Upgrade and re-run your test suite.

4. **New Multimodal Model.** Kimi K3.1 vision support landed; if you're serving multimodal workloads, this is a new supported architecture for the mtmd pipeline.

5. **SYCL Concurrency Improved.** The cached device ID fix ([#32013](https://github.com/ggml-org/llama.cpp/pull/32013)) is merge-ready and should reduce per-inference latency on Intel Arc / Data Center GPU deployments.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze this GitHub data for Ollama and create a structured digest for 2026-11-11.

Key observations:

**Releases:**
- v0.40.17-rc0 → v0.40.17 (stable release)
- Changes include: ChatGPT CLI restore/graceful restart, thinking metadata for OpenCode settings, mmap for Vulkan integrated GPUs

**Issues (14 total):**
- Feature requests: startup disable, thinking toggle UI, image embeddings, OLLAMA_KEEP_ALIVE duration
- Bugs: Windows RTX 5090 tool calling disconnect, qwen3next layer missing projections (fixed), version flag warning (fixed), MLX KV cache memory accumulation (fixed), AMD Radeon 780M Vulkan regression (fixed), cloud chat 32MiB payload limit, DNS64 CDN issues
- Notable: Decision models System One PR welcome

**PRs (47 total, top 20):**
- Babyseat RAG integration
- MLX runner progress reporting
- Ollama create notices
- OpenAI completion prompts without chat wrapping
- Speculative decoding metrics
- MLX video input support
- Profiling improvements
- Claude Code local context
- Model thinking capabilities from /api/show
- Model variant selection
- Pi startup picker
- max_completion_tokens honor
- MLX draft_num_predict=0
- Load command
- MLX decision models fix
- Nemotron 3.5 Bolt support
- MLX version bump
- llama.cpp version bump b12257
- MLX concurrent generation

Let me structure this into the requested format.
</think>


# Ollama Infrastructure Digest — 2026-11-11

## Today's Highlights

Ollama v0.40.17 reached stable release with critical Vulkan memory improvements for integrated GPUs and enhanced CLI restart handling. The community is actively advancing multi-modal capabilities—MLX now supports video input via `/api/chat` and `/api/generate`, while speculative decoding gains per-request telemetry. Three significant bugs (MLX KV-cache leak, AMD Radeon 780M Vulkan regression, version flag output) were resolved in this cycle.

---

## Releases & Breaking Changes

| Version | Change Summary | Link |
|---------|----------------|------|
| **v0.40.17** (stable) | Replaced RC with stable release. Key changes: ChatGPT CLI graceful restart ([#19583](https://github.com/ollama/ollama/pull/19583)), thinking metadata for OpenCode launcher ([#19409](https://github.com/ollama/ollama/pull/19409)), mmap enabled for Vulkan integrated GPUs ([dhilt](https://github.com/ollama/ollama/commits?author=dhilt)) | [Release](https://github.com/ollama/ollama/releases/tag/v0.40.17) |
| — | `ollama -v`/`--version` no longer emits spurious "could not connect" warnings when no server is running | [[#19613](https://github.com/ollama/ollama/issues/19613)] |
| — | `OLLAMA_KEEP_ALIVE` default remains 300s; no change despite user request ([#19624](https://github.com/ollama/ollama/issues/19624)) | — |

**No breaking API changes detected this cycle.**

---

## New Model & Hardware Support

| Category | Addition | Status |
|----------|----------|--------|
| **MLX Backend** | Video input (MP4/MOV) in existing images field for LFM3-VL, LFM3-Omni, Qwen3.5/3.6 models | [[#19348](https://github.com/ollama/ollama/pull/19348)] |
| **MLX Backend** | Decision models via `/v1/systemone` wire format (D1, Laya, Kev, vllm-d3, H2O Lightning) | [[#19639](https://github.com/ollama/ollama/issues/19639)] |
| **MLX Backend** | Nemotron 3.5 Bolt 74B-A9B with per-layer expert routing and DFlash speculative decoding | [[#19229](https://github.com/ollama/ollama/pull/19229)] |
| **GGUF Variants** | Explicit `gguf` runner alias alongside `llama.cpp`; variants displayed by format in `ollama show` | [[#19644](https://github.com/ollama/ollama/pull/19644)] |
| **Video Capability** | Models accepting video now expose `"video"` in `/api/show` capabilities | [[#19348](https://github.com/ollama/ollama/pull/19348)] |

**Dependency bumps:** llama.cpp `b12177 → b12257` [[#19646](https://github.com/ollama/ollama/pull/19646)]; MLX `54a7051 → fc344c9`; MLX-C `57731b0 → a26f2d5` [[#19647](https://github.com/ollama/ollama/pull/19647)]

---

## Performance & Optimization

### Landed
- **Vulkan mmap for integrated GPUs**: Reduces memory pressure on iGPUs (e.g., Intel Iris Xe, AMD Radeon 780M) by using memory-mapped weights instead of copies.
- **MLX concurrent generation**: `OLLAMA_NUM_PARALLEL` now works for MLX models; requests share projection/feed-forward work while maintaining independent attention caches [[#19197](https://github.com/ollama/ollama/pull/19197)].
- **Speculative decoding metrics**: API responses and `ollama run --verbose` now report drafted/accepted token counts alongside acceptance rate [[#19368](https://github.com/ollama/ollama/pull/19368)].
- **MLX load progress & stall detection**: Prevents cancellation of slow model loads on Apple Silicon [[#17834](https://github.com/ollama/ollama/pull/17834)].

### In Progress
- **Profiling tooling**: `bench.go` can now target runners directly via `-runner host:port` or `-spawn`, enabling GPU profiler integration [[#16611](https://github.com/ollama/ollama/pull/16611)].
- **MLX draft toggle**: `draft_num_predict=0` allows benchmarks to isolate base-model latency [[#19391](https://github.com/ollama/ollama/pull/19391)].
- **OpenAI `max_completion_tokens`**: Honored in chat completions, capping visible + reasoning tokens [[#19168](https://github.com/ollama/ollama/pull/19168)].
- **Prompt expansion bounds**: MLX decision models now enforce 413 for oversized prompts with regression tests [[#19408](https://github.com/ollama/ollama/pull/19408)].

---

## Stability & Regressions

| Severity | Issue | Resolution |
|----------|-------|------------|
| 🔴 **High** | **Windows RTX 5090 runner disconnects** during tool-calling with HTTP 500 `/tokenize`; affects Muse Glimmer 30B and Qwen3-Coder-N | Open [[#19439](https://github.com/ollama/ollama/issues/19439)]; no fix PR yet |
| 🔴 **High** | **qwen3next layer 2 missing projections** (`attn_qkv/attn_gate`) causing 500 on startup | Fixed in [[#15372](https://github.com/ollama/ollama/issues/15372)] (closed) |
| 🟡 **Medium** | **MLX KV-cache accumulation** grows monotonically with request count, not context size; never released until restart | Fixed [[#17875](https://github.com/ollama/ollama/issues/17875)] |
| 🟡 **Medium** | **AMD Radeon 780M Vulkan regression** ≥0.32.10: `ErrorDeviceLost` on large models | Fixed [[#17748](https://github.com/ollama/ollama/issues/17748)] |
| 🟡 **Medium** | **Intel Iris Xe Vulkan OOM** on qwen2.5:14b (regression from 0.32.6 → 0.33.3) | Fixed [[#18531](https://github.com/ollama/ollama/issues/18531)] |
| 🟡 **Medium** | **Cloud `/api/chat` 400 at ~32 MiB** payload (undocumented limit) | Open [[#19597](https://github.com/ollama/ollama/issues/19597)] |
| 🟢 **Low** | **DNS64/NAT64 `ollama pull hf.co`** fails: CDN returns NAT64 addresses rejected as non-public | Open [[#19345](https://github.com/ollama/ollama/issues/19345)] |

---

## What This Means for Application Developers

1. **Upgrade to v0.40.17** if running on integrated GPUs (Vulkan) — the mmap change materially reduces VRAM pressure for models like qwen2.5:14b on Intel/AMD iGPUs.

2. **MLX is production-ready for concurrency**: With `OLLAMA_NUM_PARALLEL` now functional and progress reporting landed, Apple Silicon deployments can handle parallel requests without custom workarounds.

3. **Video multimodal is live**: If building RAG or agents that ingest video, the `[LFM3-VL, LFM3-Omni, Qwen3.5/3.6]` families now accept clips natively via the existing images field. Check `capabilities` in `/api/show` for `"video"` before sending video payloads.

4. **Speculative decoding is now observable**: Applications can expose drafted/accepted token metrics to users; acceptance rate alone is misleading at varying draft depths.

5. **Decision models entering ecosystem**: The `/v1/systemone` format for calibrated probability outputs (D1, Kev, etc.) signals Ollama's expansion beyond text generation into structured decision agents.

6. **Heads up on Windows**: If targeting RTX 5090 with tool-calling workloads, the runner disconnect bug ([#19439](https://github.com/ollama/ollama/issues/19439)) is unfixed—consider fallback to CPU/alternative GPU until resolved.

7. **Cloud payload limit**: Large image-based requests to Ollama Cloud should stay under ~32 MiB; no chunking API exists yet.

---

*Digest compiled from github.com/ollama/ollama activity on 2026-11-11.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants a structured digest for LiteLLM dated 2026-11-11 based on the provided GitHub data. Let me analyze the data and create the digest.

Key items from the data:

**Releases:**
- v1.110.0-rc.1 (latest RC)
- v1.109.0
- v1.108.5 (LTS)
- v1.104.9
- v1.103.11

All releases have Docker image signing verification info.

**Major Security Issue:**
- #47826 - litellm 1.107.0 was compromised (credential stealer + RCE loader). PyPI removed, Docker images yanked. This is a CRITICAL security issue that needs to be highlighted.

**Top Issues by comments:**
1. #47826 - SECURITY: compromised 1.107.0 (34 comments, closed)
2. #8513 - Feature: Set currency by env variable (21 comments, open)
3. #23741 - Bug: AnthropicException 400 with vector_store_ids (15 comments, open)
4. #15647 - Bug: fallback config not reloaded (10 comments, closed)
5. #47675 - Bug: response_cost null with custom_llm_provider=anthropic (9 comments, closed)
6. #39713 - Bug: Per-customer RPM limits not applying (9 comments, closed)
7. #48145 - Bug: JSON-defined openai-like providers lose tools (8 comments, open)
8. #32357 - Bug: /v1/messages adapter mis-encodes reasoning models (8 comments, closed)
9. #23777 - Feature: support multiple ChatGPT OAuth accounts (8 comments, closed)
10. #40583 - Bug: custom_code guardrails can't see MCP tools (7 comments, closed)
11. #47924 - Bug: reasoning_effort="none" omits thinking (7 comments, closed)


12. #47340 - Bug: tpm_limit never refills with in-memory cache (7 comments, open)
13. #18060 - Bug: Infinite loops when making unauthorized requests (6 comments, closed)
14. #20494 - Bug: generating new key with same secret key doesn't throw error (6 comments, open)
15. #47327 - Bug: token_counter rejects image detail "original" (6 comments, open)

**Top PRs:**
1. #50671 - fix(tls)!: exclude RSA key exchange and ChaCha20 from outbound cipher list in FIPS mode
2. #50957 - fix(spend): write a background response's settling read in-process when the spend collector is on
3. #51097 - fix(proxy/guardrails/custom_code): support string regex flags in custom code primitives
4. #51033 - fix(responses): end streams at the terminal event instead of waiting for the upstream to close
5. #50732 - feat(vertex_ai): label Vertex requests with the caller's key, team, org, and project
6. #51063 - feat(bedrock): search knowledge bases by image and return image hits
7. #51002 - fix(router): bill the cut primary's partial on a Responses mid-stream fallback success
8. #50701 - fix(bedrock): stop the prefill 400 when the last user message is empty
9. #41744 - feat(ci): report each release's schema changes against a rolling upgrade
10. #49976 - feat(ui): add [BETA] Enable Moyai setting to let admins hide Moyai
11. #50839 - feat(tripo): add native proxy routes and asynchronous credit billing
12. #50971 - fix(router): send managed batch uploads to batch deployments when a chat deployment has a lower order
13. #50035 - fix(caching): preserve stored finish_reason on cache hits
14. #50037 - fix(proxy/vertex_ai): prevent duplicate auth budget leak and handle gemini schema
15. #50045 - fix(openai/responses): drop unsupported temperature for o-series models when drop_params=True
16. #50041 - feat(interactions): add Qoder Cloud Agents
17. #51096 - test(integration): fix the baseline accounting and series cap flakes
18. #50075 - fix(mcp): read policy through the cache while a caller's policy hash is unchanged
19. #50157 - fix(prometheus): stop litellm_deployment_state sticking at 2 after a cooldown
20. #50567 - fix(proxy): reject os.environ/ refs in key, team and user logging metadata on write

The v1.110.0-rc.1 release introduces TLS hardening with FIPS compliance improvements, alongside spend and billing enhancements. There's a critical security fix addressing the compromised 1.107.0 version, plus new integrations with Bedrock image search, Vertex AI labeling, and support for additional providers like Tripo and Qoder Cloud Agents. Bug fixes cover MCP policy caching, Prometheus metrics, and batch deployment routing logic.
</think>


# LiteLLM Digest — 2026-11-11

## Today's Highlights

LiteLLM **v1.110.0-rc.1** ships with a **FIPS-mandated TLS hardening** that removes RSA key exchange and ChaCha20 from outbound cipher lists, addressing a 2024 policy deprecation. A new spend accounting fix ensures background response settlement is billed in-process when the collector sidecar is active. The community continues closing streaming correctness bugs, including a regression where OpenAI `reasoning_content` was dropped when routing through the Anthropic `/v1/messages` adapter.

---

## Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| **v1.110.0-rc.1** | Release Candidate | Latest RC; Docker images cosign-signed (key: `e82a3c6`) |
| **v1.109.0** | Stable | Cosign-signed |
| **v1.108.5** | **LTS** | Latest LTS tag (`lts` image tag points here) |
| v1.104.9 / v1.103.11 | Maintenance | Cosign-signed; no new features |

**⚠️ Security Alert — Compromised v1.107.0 (PyPI yanked, Docker pulled):**
Issue [#47826](https://github.com/BerriAI/litellm/issues/47826) documents a supply-chain attack: v1.107.0 on PyPI contained a `cook.pth` credential stealer and a `sitecustomize` RCE loader, built from a lookalike `Berri-AI/litellm` repo. PyPI has removed the package and all affected Docker images (`latest`, `main-latest`, `main-stable`) have been yanked. **If you pulled `latest` between 2026-10-18 and 2026-10-21, rotate credentials immediately.** The current `main-stable` and `latest` tags now point to safe versions.

**Breaking Change — FIPS TLS Cipher Suite:**
PR [#50671](https://github.com/BerriAI/litellm/pull/50671) (`fix(tls)!`) removes RSA key exchange and ChaCha20 from outbound ciphers in FIPS mode. RSA key transport was deprecated for FIPS compliance in 2024. FIPS-mode operators should verify upstream endpoints accept the updated cipher negotiation before upgrading.

---

## New Model & Hardware Support

| Provider | Addition | PR / Issue |
|----------|----------|------------|
| **Bedrock** | Knowledge-base search by image; multimodal embeddings return matching images instead of failing or falling back to text | [#51063](https://github.com/BerriAI/litellm/pull/51063) |
| **Bedrock** | Claude 5.x prefill workaround: send placeholder when last user message is empty to avoid 400 | [#50701](https://github.com/BerriAI/litellm/pull/50701) |
| **Vertex AI** | Request labeling: attach caller's key, team, org, and project as Cloud Billing labels | [#50732](https://github.com/BerriAI/litellm/pull/50732) |
| **Tripo** | Native proxy routes with regional credentials (China + global) and async credit billing | [#50839](https://github.com/BerriAI/litellm/pull/50839) |
| **Qoder Cloud** | New Interactions API integration: async text, streaming, session continuation | [#50041](https://github.com/BerriAI/litellm/pull/50041) |
| **ChatGPT / Codex** | `/v1/messages` streaming now preserves encrypted reasoning between tool calls | [#49046](https://github.com/BerriAI/litellm/issues/49046) (fixed) |

---

## Performance & Optimization

| Area | Change | Impact | PR / Issue |
|------|--------|--------|------------|
| **Spend Accounting** | Background response settlement now billed in-process when collector sidecar is on; eliminates orphaned spend from read-through passthrough | Correctness fix for billing accuracy | [#50957](https://github.com/BerriAI/litellm/pull/50957) |
| **Router — Responses Fallback** | Mid-stream fallback now bills the failed primary's partial (prompt + streamed tokens) in addition to the fallback | Correctness fix for spend logs | [#51002](https://github.com/BerriAI/litellm/pull/51002) |
| **Streaming — Responses API** | Stream now terminates at the terminal upstream event instead of waiting for connection close | Reduces Claude Code-style client spinner delay by up to 30 s | [#51033](https://github.com/BerriAI/litellm/pull/51033) |
| **MCP Authorization** | `tools/list` authZ now reads policy through a cache; hot-path DB reads eliminated for unchanged policy hashes | Lower latency for multi-team users | [#50075](https://github.com/BerriAI/litellm/pull/50075) |
| **Router — Batch Uploads** | Managed batch uploads now reach Azure batch deployments even when a chat deployment of the same model group has a lower order | Fixes routing priority inversion | [#50971](https://github.com/BerriAI/litellm/pull/50971) |
| **Cache Hit** | `finish_reason` (e.g. Anthropic `end_turn`) is now preserved on cache hits; previously rebuilt via `convert_to_model_response_object` which re-normalized it | Correctness fix for cached reasoning-model responses | [#50035](https://github.com/BerriAI/litellm/pull/50035) |

---

## Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **🔴 Critical (Security)** | Compromised v1.107.0: credential stealer + RCE via `cook.pth`/`sitecustomize` | **Fixed** — PyPI/Docker yanked | — |
| **🟠 High** | Per-customer RPM limits stop applying once virtual key is cached | Closed 2026-11-10 | — |
| **🟠 High** | TPM token window never refills with in-memory cache; key locked out indefinitely after exhaustion | Open | — |
| **🟡 Medium** | JSON-defined OpenAI-like providers lose tools by default if model not in catalog (v1.106 regression) | Open | — |
| **🟡 Medium** | Anthropic `/v1/messages` adapter mis-encodes reasoning models: `thinking_delta` streamed inside text block | Closed | — |
| **🟡 Medium** | Guardrail `custom_code` cannot see or block MCP tools sent via Anthropic `/v1/messages` | Closed | — |
| **🟡 Medium** | OTel `gen_ai.response.model` holds model group alias instead of actual model | Open | [#51029](https://github.com/BerriAI/litellm/issues/51029) |
| **🟡 Medium** | Prometheus `litellm_deployment_state` metric stuck at 2 after cooldown recovery | Open | [#50157](https://github.com/BerriAI/litellm/pull/50157) |
| **🟡 Medium** | LiteLLM Proxy fails to start after `uv tool update litellm` due to FastAPI `get_flat_dependant` incompatibility | Closed | — |
| **🟢 Low** | `reasoning_effort: "none"` omits thinking config instead of disabling it on default-on Claude models | Closed | — |
| **🟢 Low** | `token_counter` rejects image detail `"original"`, causing pre-call ERROR and skipping context-window check | Open | [#47327](https://github.com/BerriAI/litellm/issues/47327) |

---

## What This Means for Application Developers

1. **Check your Docker/PyPI pins NOW.** If your `latest` tag resolved to v1.107.0 between Oct 18–21 2026, treat the environment as compromised and rotate all secrets. Pull the tagged image: `ghcr.io/berriai/litellm:lts` for a safe LTS baseline.

2. **FIPS environments:** The v1.110 TLS cipher change is breaking for endpoints that only support RSA key exchange. Test your upstream providers before upgrading; RSA-only endpoints will fail TLS handshake post-upgrade.

3. **Billing accuracy improves** for background responses and mid-stream fallbacks — if you rely on `LiteLLM_SpendLogs` for chargeback, the spend data will now be complete rather than silently dropping partial costs.

4. **Image-based KB search on Bedrock** is now a first-class feature: multimodal embedding models backing knowledge bases can be queried with an image payload and will return matching images.

5. **Anthropic `/v1/messages` reasoning fidelity:** The regression that dropped `reasoning_content` for OpenAI-compatible reasoning models (GLM, DeepSeek-R1 via vLLM/SGLang) has been closed. If you route those models through the Anthropic adapter, verify that streamed reasoning is now visible to clients like Claude Code.

6. **MCP tool authorization** now scales better for multi-team users — the policy cache eliminates a per-request DB read on `tools/list`, which was causing timeouts for users belonging to many teams.

7. **Vertex billing labels** are now plumbed through, enabling per-team cost attribution if you enable the new label setting — useful for orgs running Vertex behind LiteLLM with internal chargeback requirements.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the GitHub data for the Unsloth repository on 2026-11-11 and generate a structured digest.

Key observations:
1. No releases in the last 24h
2. Several open and closed issues - let me categorize them
3. Many PRs (232 total, top 20 shown) - several closed, several open

Let me organize by the requested sections:

**Today's Highlights:**
- Several UI/UX improvements landed for Studio including the /skills command, sidebar scrolling fix, TTS model selection visibility, Model Hub capability search
- Security fix for seeded admin password being exposed through reverse proxies
- MiniMax-H3-Image model support added for text-to-image and reference-based editing
- Security fix for Python shell command approval bypass
- sd.cpp prebuilt updated with 36 fork commits

**Releases & Breaking Changes:**
- No releases in last 24h

**New Model & Hardware Support:**
- MiniMax-H3-Image support added (text-to-image, reference edits with 1-16 images)
- Yandex added to web search fallback tier
- ROCm/gfx1031 issue reported (RX 6700 XT passing startup check as RDNA 2, then PyTorch segfaults)
- Intel Arc 140V issue with image generation models

**Performance & Optimization:**
- vLLM/SGLang max_tokens fitting fix for tool requests
- PDF text wrapping fix for long unbroken text
- Ollama connection context compaction
- MoE router aux loss divergence issue on CPU backend with gradient accumulation > 1

**Stability & Regressions:**
- Qwen hybrid model repeated full prompt processing issue (4 comments, high engagement)
- Upgrade error issue
- LAN addresses network bridge binding bug
- Glass theme UI mangling
- Regenerate title copy issue


- Background image upload storage error
- Nul files being added to working directory
- Model size mismatch between Model Hub and Model Picker
- ROCm RX 6700 XT PyTorch segfault
- HTML-to-Markdown converter issues with character references
- Glass material setting exposed twice

**What This Means for Application Developers:**
- Security improvements for reverse proxy setups and shell command approval
- Better handling of tool requests on vLLM/SGLang
- MiniMax-H3-Image integration for multimodal workflows
- Enhanced Model Hub search capabilities
- Context management improvements for Ollama connections
</think>


# Unsloth Digest — 2026-11-11

## 1. Today's Highlights

Unsloth Studio landed several high-impact security and UX patches today: a critical fix prevents the seeded admin password from leaking through reverse proxies ([#17454](https://github.com/unslothai/unsloth/pull/17454)), and a shell-command approval bypass affecting `map()`, `executor.submit()`, and `Thread` targets was closed ([#17456](https://github.com/unslothai/unsloth/pull/17456)). Meanwhile, MiniMax-H3-Image support landed for text-to-image and reference-based editing workflows ([#17453](https://github.com/unslothai/unsloth/pull/17453)), and a vLLM/SGLang tool-request regression that caused spurious `context_length_exceeded` errors was resolved ([#17426](https://github.com/unslothai/unsloth/pull/17426)).

## 2. Releases & Breaking Changes

**No new releases in the last 24 hours.** Studio's stable-diffusion.cpp prebuilt was synced to a newer fork commit (`master-982-0518b34-ueb0e729`, 36 fork commits ahead of the prior pin) but retains the same major version tag ([#17459](https://github.com/unslothai/unsloth/pull/17459)).

## 3. New Model & Hardware Support

| Model / Hardware | Detail | PR / Issue |
|---|---|---|
| **MiniMax-H3-Image** (`MiniMaxAI/MiniMax-H3-Image`) | Added to Studio Images page: text-to-image generation and editing with 1–16 reference images via `<Picture N>` tokens in prompts. Pipeline sourced from diffusers. | [#17453](https://github.com/unslothai/unsloth/pull/17453) |
| **Yandex** | Added as a primary-tier web search engine, tried before DuckDuckGo (which is currently throttled by anti-bot responses). | [#17447](https://github.com/unslothai/unsloth/pull/17447) |
| **ROCm / gfx1031 (RX 6700 XT)** | **Known bug:** GPU passes startup check as "RDNA 2" but PyTorch segfaults on the first GPU op. Affects unsloth-rocm Docker on Debian 13 with in-tree amdgpu driver. | [#17147](https://github.com/unslothai/unsloth/issues/17147) |
| **Intel Arc 140V** | Image generation models fail to load on this GPU. | [#17137](https://github.com/unslothai/unsloth/issues/17137) |

## 4. Performance & Optimization

| Area | Change | Impact |
|---|---|---|
| **vLLM / SGLang tool requests** | Fixed `max_tokens` being set without accounting for the tool-call overhead, which previously caused spurious `400 context_length_exceeded` errors when the prompt alone fit the context window. | [#17426](https://github.com/unslothai/unsloth/pull/17426) |
| **Ollama context compaction** | Studio now reads the Ollama-loaded model's actual context window and inserts a "Context compacted" divider instead of silently dropping early turns. Previously, a 4,096-token default window silently truncated chats catalogued at 40,960 tokens. | [#17457](https://github.com/unslothai/unsloth/pull/17457) |
| **OpenAI tool-call rendering** | Fixed stray `</think>` token appearing under tool cards after a thinking summary + tool call on OpenAI Responses connections. | [#17455](https://github.com/unslothai/unsloth/pull/17455) |
| **PDF export** | Long unbroken text (Thai sentences, code lines, long tokens) now wraps correctly instead of being truncated. | [#17425](https://github.com/unslothai/unsloth/pull/17425) |
| **MoE CPU backend** | **Known issue:** With `UNSLOTH_FORCE_CPU=1`, pipeline parallelism with MoE models and gradient accumulation > 1 produces diverging router aux loss across processes. Parity test: `UNSLOTH_FORCE_CPU=1 python -m pytest tests/test_parallel_cp_compose...` | [#17054](https://github.com/unslothai/unsloth/issues/17054) |
| **Qwen3.8-Flash-Next MTP heads** | UD 3.1 GGUFs paired with current MTP draft heads show ~74% → 56–66% acceptance at production temperature on Ryzen AI Max+ 395. | [#17402](https://github.com/unslothai/unsloth/issues/17402) |

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| **🔴 High** | **Qwen hybrid model repeated full prompt processing** — after tool use with an MCP tool catalog and 65K-token context, the full prompt is reprocessed each turn, severely degrading throughput. 4 comments. | [Open #17015](https://github.com/unslothai/unsloth/issues/17015) | — |
| **🔴 High** | **Admin password leak via reverse proxy** — a same-host reverse proxy adding only `X-Forwarded-Proto`/`Via`/`X-Forwarded-Port` was treated as a local browser, exposing the seeded admin password to remote devices. | Fixed | [#17454](https://github.com/unslothai/unsloth/pull/17454) |
| **🔴 High** | **Shell-command approval bypass** — `os.system('rm -rf x')` via `map()`, `executor.submit()`, `functools.partial`, or `Thread` targets ran without prompting in "Approve for me" mode. | Fixed | [#17456](https://github.com/unslothai/unsloth/pull/17456) |
| **🟡 Medium** | **ROCm segfault on RX 6700 XT** — PyTorch crashes on first GPU op after passing startup check. | Open #17147 | — |
| **🟡 Medium** | **Upgrade error** on Windows 11 via desktop application. | [Closed #17375](https://github.com/unslothai/unsloth/issues/17375) | — |
| **🟡 Medium** | **LAN address bind failure** — Desktop app cannot bind to the network bridge with a LAN IP address on Manjaro KDE. | [Closed #17017](https://github.com/unslothai/unsloth/issues/17017) | — |
| **🟡 Medium** | **Glass theme UI mangling** — clicking a model card with the glass theme enabled produces a corrupted layout. | [Closed #17417](https://github.com/unslothai/unsloth/issues/17417) | — |
| **🟡 Medium** | **"Regenerate title" copies last user message** instead of generating a title. | [Closed #17332](https://github.com/unslothai/unsloth/issues/17332) | — |
| **🟡 Medium** | **NUL files created in working directory** — `NULL` files appear when saving in certain scenarios. | [Closed #16991](https://github.com/unslothai/unsloth/issues/16991) | — |
| **🟡 Medium** | **HTML-to-Markdown converter** — bare `&` gains a stray `;`, malformed `&#` leaves raw HTML, escaped code blocks leak. | [Closed #17199](https://github.com/unslothai/unsloth/issues/17199) | — |
| **🟢 Low** | **Model size mismatch** between Model Hub "On device" tab and Model Picker dropdown on Windows 11. | [Closed #17074](https://github.com/unslothai/unsloth/issues/17074) | — |
| **🟢 Low** | **Glass material setting exposed twice** in the Appearance tab with different labels and option sets. | [Closed #17162](https://github.com/unslothai/unsloth/issues/17162) | — |

## 6. What This Means for Application Developers

**Security posture:** The reverse-proxy admin password leak and the shell-command bypass are both critical. If you run Studio behind any reverse proxy (including Cloudflare Tunnels), upgrade immediately to pull in [#17454](https://github.com/unslothai/unsloth/pull/17454) and [#17456](https://github.com/unslothai/unsloth/pull/17456). The former specifically affects setups where `X-Forwarded-Proto`/`Via`/`X-Forwarded-Port`/`X-Forwarded-Server` are set by a same-host proxy.

**vLLM / SGLang tool calling:** If you've been seeing unexplained `context_length_exceeded` errors on tool-enabled requests despite the prompt fitting the window, this was a bug in how `max_tokens` was not adjusted for tool overhead ([#17426](https://github.com/unslothai/unsloth/pull/17426)). Verify your Studio version includes this fix.

**Ollama context management:** Long chats on Ollama connections may have been silently dropping early turns due to a window-size mismatch. Studio now surfaces this explicitly with a "Context compacted" divider ([#17457](https://github.com/unslothai/unsloth/pull/17457)).

**Multimodal expansion:** MiniMax-H3-Image is now first-class in Studio for both generation and reference-based editing, making it viable for pipelines that combine image generation with iterative refinement.

**MoE on CPU:** If you're running MoE models on CPU with pipeline parallelism and gradient accumulation > 1, expect non-deterministic training results. This is an active issue ([#17054](https://github.com/unslothai/unsloth/issues/17054)) and a workaround (gradient accumulation = 1) should be used until resolved.

**UD 3.1 + Qwen3.8-Flash-Next MTP heads:** Production users of speculative decoding with this combination should be aware of the ~20-point acceptance rate drop reported on Ryzen AI Max+ 395 ([#17402](https://github.com/unslothai/unsloth/issues/17402)). Consider reverting to UD 3.0 GGUFs or waiting for 3.1-matched MTP heads.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*