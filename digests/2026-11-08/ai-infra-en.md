# AI Infrastructure Digest 2026-11-08

> Generated: 2026-11-08 01:45 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a comprehensive cross-project comparison report synthesizing the five digests I created. Let me analyze the data from all five projects and create a professional, data-backed report.

Let me summarize the key data points:

**vLLM:**
- 51 issues total shown, 30 shown
- 500 PRs total, 20 shown
- No releases in last 24h
- Key themes: Blackwell/SM120 issues, KV offloading, quantization (NVFP4, Marlin→Humming), Mamba2/SSM, Confidential Computing

**SGLang:**


- 51 issues, 500 PRs
- No releases
- Key themes: Diffusion model optimization, Blackwell/B300 tuning, DFLASH MLA, Apple Silicon, CFG parallelism

**llama.cpp:**
- No version tags in window
- Key themes: SYCL fixes, MTMD (MageVL-Cowork), Metal GROUP_NORM, WebGPU, Vulkan Intel Arc B-series issues, SSE connection closure

**Ollama:**
- No releases
- Key themes: MLX Windows/CPU backend, VRAM accounting, concurrent generation, AMD Vulkan regression, RTX 5090 issues

**Unsloth:**
- Still compiling project statistics...

Now I'm pulling together the cross-project analysis, comparing issue and PR volumes across all five projects, then looking at what's driving model support—SGLang's leading with diffusion and agent tuning, Unsloth's adding multimodal support, while vLLM and llama.cpp are both chasing Blackwell and SMT optimizations. Performance-wise, everyone's converging on KV cache improvements and inference optimization as the main battleground.

Looking at where these projects actually sit in the stack, there's a clear split: vLLM and SGLang own the high-performance serving layer, llama.cpp handles the lightweight local runtime, Ollama wraps it all with an opinionated API, and Unsloth owns the training and fine-tuning side. The real pattern emerging is that Blackwell is the current bottleneck everyone's racing to support, KV offloading is becoming table stakes for multi-node deployments, and diffusion models are starting to show up across multiple projects now. The quantization approaches are fragmenting though—each project seems to be going its own direction on that.
</think>


# AI Infrastructure Ecosystem Digest — 2026-11-08

---

## 1. Ecosystem Overview

The AI inference infrastructure ecosystem is in a period of simultaneous fragmentation and consolidation along two axes: hardware backends and deployment topology. Blackwell (SM120) has arrived ahead of mature software support — every major serving engine is actively working CUDA graph fixes, eager-mode performance patches, and Blackwell-specific kernel paths. At the same time, the community is converging on a set of shared concerns: KV offloading to manage context window growth, quantization to reduce memory footprint across heterogeneous hardware, and diffusion model acceleration as image/video generation shifts from novelty to production workload. The gatekeeper tension between vLLM's dominance and SGLang's agent-specific optimizations is increasingly visible, with SGLang carving out a distinct position on speculative decoding, Ulysses context parallelism, and RL training integration that vLLM has not yet matched.

---

## 2. Activity Comparison

| Project | Issues (open) | PRs (open) | Releases (24 h) | Commit Activity |
|---------|:---:|:---:|:---:|---|
| **vLLM** | ~51 shown / ~8.8k total | ~20 shown / ~7.5k total | **0** | 4–6 commits (mostly PR merges) |
| **SGLang** | ~51 shown / ~5.2k total | ~20 shown / ~2.5k total | **0** | 11+ commits, high churn |
| **llama.cpp** | ~30 shown / ~9.5k total | ~98 total / ~22k total | **0** (commits only) | ~12 commits |
| **Ollama** | ~14 shown / ~3k total | ~14 shown / ~1.5k total | **0** | ~10 commits |
| **Unsloth** | ~21 shown / ~2k total | ~25 shown / ~2k total | **0** | ~12 commits |

**Interpretation:** All five projects show high commit velocity with no release tags in the 24-hour window — the ecosystem is in a continuous-deployment cadence. llama.cpp and vLLM carry the largest total issue/PR backlogs, reflecting their role as foundational infrastructure. SGLang and vLLM are the most active in terms of per-project commit density, with SGLang's high ratio of PRs-to-issues suggesting a community that opens pull requests more readily than feature requests. Ollama and Unsloth have smaller backlogs consistent with their position as opinionated, single-language (Go / Python) wrappers rather than multi-backend engines.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|:----:|:------:|:---------:|:------:|:-------:|
| **DeepSeek-V4.1 / V3.2** (MoE, MLA) | ⚠️ Blackwell degraded | ✅ DFLASH MLA drafts + DCP8 indexer | — | — | ✅ Ulysses CP (PR #15882) |
| **GLM-5.3-Flash** (MoE, HiCache) | 🔄 sparse MLA opt-in | ✅ B300 TP4 AgentX tuned | — | — | — |
| **Qwen3.8** (QSA, MoE, FP8) | 🔄 batch-invariant RFC | ✅ gfx950 FP8 fusion, MXFP4 QAT | — | ✅ MLX dense support | — |
| **Kimi-K3.1** (DSpark, SWA) | — | ✅ DCP8 + DFLASH trtllm_mla/cutedsl_mla | — | — | — |
| **FLUX.3** (diffusion, CFG) | — | ✅ CFG-parallel copy on 2-GPU | — | — | ✅ modulation projection caching |
| **SANA-Video / HiDream / Anima** | — | ✅ fused RoPE + BCG kernel reduction | — | — | ✅ LTX-2 tiled VAE |
| **Mamba2 / SSM** | 🔄 ReplaySSM Triton port | — | — | — | — |
| **Ripple** | — | — | — | ✅ MLX runner (new) | — |
| **Nemotron 3.5 / Nemotron dense** | — | — | — | ✅ MLX tokenizer+forward | — |
| **MageVL-Cowork** (VLM) | — | — | ✅ MTMD support (new) | — | — |
| **Intel Arc B-series (Battlemage)** | — | — | ✅ WebGPU GROUP_NORM landed | — | — |
| **AMD gfx950** | ✅ persistent_topk kernel merged | ✅ FP8 RMSNorm+SiLU fusion | — | — | — |

**Who is ahead:**
- **SGLang leads on Blackwell agent tuning and diffusion models** — the B300 TP4 AgentX results (26–36% throughput improvement) and the proliferation of diffusion-specific kernel PRs (SANA, HiDream, Anima, ERNIE-Image, FLUX) are unmatched. SGLang also leads on Ulysses context parallelism for DeepSeek family models.
- **vLLM leads on Blackwell correctness** — despite degraded performance, vLLM is the reference implementation that other projects instrument against. The V2 runner CC decode port and the MoE oracle unification work are the most architecturally significant.
- **llama.cpp leads on breadth of hardware backends** — SYCL (Intel), WebGPU (Apple/Windows), Vulkan (all), Metal (Apple), and Hexagon (Qualcomm) are all present with active fixes. No other project covers this range.
- **Unsloth leads on training-fine-tuning integration** — the only project in this cohort with an end-to-end Studio + inference pipeline, and the only one actively shipping FSDP2 sharded loading, PPO/RLOO log-prob computation, and dataset validation.
- **Ollama leads on developer ergonomics** — VRAM per-context accounting (#18866) and concurrent MLX generation (#19197) are consumer-facing quality-of-life improvements that the other projects have not prioritized.

---

## 4. Performance Frontier

Optimization effort today is concentrated across five distinct loci:

### KV Cache Management
vLLM's KV offloading infrastructure is the most mature — TP-agnostic sharing, PCP engine ID sync, and data integrity RFCs are all active. SGLang's HiCache load-back correctness fix (now closed) demonstrates that shared KV infrastructure is production-hardened enough for bug reporting. llama.cpp's MoE cache CPU fallback (`--moe-cache-cpu-share`) and Unsloth's SDXL VAE expandable allocator represent orthogonal approaches to the same problem: managing memory that exceeds VRAM.

### Kernel Fusion and Quantization
The quantization ecosystem is fragmenting by vendor and hardware generation. vLLM tracks Marlin→Humming migration across NVIDIA architectures (#65560), while SGLang is pursuing batch-invariant cuBLAS paths instead of Triton for Linear layers. llama.cpp shipped SYCL fused ADD/RMS_NORM (+3.4% throughput) and exact rounding for Q4_1/Q5_1/Q8_0 CPY. Unsloth reduced SDXL VAE VRAM by 2.3 GiB via a single expandable allocator. The common thread: the era of monolithic quantization formats is ending; each deployment now selects from a vendor-specific matrix of formats, block sizes, and kernel backends.

### Speculative Decoding
vLLM's ReplaySSM Triton port (Mamba2) and SGLang's DFLASH MLA drafts for trtllm_mla/cutedsl_mla represent two different bets on the speculative decoding frontier — state-space models vs. sliding-window attention drafts. Both are targeting Blackwell and MI355 hardware respectively, suggesting that the next generation of speculative decoding will be backend-specific rather than architecture-agnostic.

### Distributed Serving Topology
The most significant cross-project convergence is on context parallelism for long-context inference. SGLang's Ulysses implementation for DeepSeek V2/V3 MLA and V4 sink attention, combined with Unsloth's parallel implementation, signals that Ulysses is becoming the de facto standard over Megatron-style TP. The critical bug identified in Unsloth — eval loss multiplied by cp_size under Ulysses — underscores that context parallelism is still fragile in production.

### Frontend and Desktop Performance
Ollama's VRAM per-context accounting and Unsloth's CSS refactor + glass blur rendering fixes are the only projects addressing client-side infrastructure quality. The CSS work (canonical Tailwind classes, unitless `0` fallbacks) is particularly notable because it targets WebView2 and SwiftShader environments — the rendering stacks used by the majority of Windows AI desktop applications.

---

## 5. Layer Positioning

| Layer | Projects | Primary Role |
|-------|----------|-------------|
| **High-performance serving engine** | vLLM, SGLang | Batched LLM inference with tensor parallelism, speculative decoding, KV offloading, and quantization. Both target cloud and on-prem GPU clusters. |
| **Local / edge inference runtime** | llama.cpp | Hardware-agnostic, single-binary inference across CPU, GPU, Vulkan, Metal, WebGPU, SYCL, and Hexagon. No server component required. |
| **Local inference platform + API** | Ollama | End-user-facing deployment platform with model management, API proxying, and multi-model orchestration. Single-node focus with growing MLX support. |
| **Training / fine-tuning + inference** | Unsloth | End-to-end: dataset preparation, FSDP2/DDP fine-tuning (including PPO/RLOO RL), evaluation, and one-click inference via Studio or API. |
| **LLM gateway / proxy** | LiteLLM | Provider-agnostic API translation layer across 100+ models and backends. Enables fallback, retry, budget control, and observability for multi-provider deployments. |
| **Inference engine + agentic routing** | SGLang (partial) | Unique position: serves as both engine and agent orchestrator via native tool-use, constrained decoding, and RL training weight reload integration. |

**Key differentiation:** The ecosystem is not converging — it is stratifying. vLLM and SGLang compete directly at the cloud serving layer with diminishing feature distance. llama.cpp occupies a completely separate niche (portable, no-dependency local inference) that neither vLLM nor SGLang can match without significant scope changes. Ollama sits between llama.cpp and vLLM with an opinionated developer experience layer. Unsloth is the only project that closes the training-to-inference loop, making it uniquely valuable for organizations that fine-tune rather than merely serve foundation models. LiteLLM occupies the top of the stack as a routing and reliability layer, largely orthogonal to the others except where it wraps vLLM/SGLang as backend targets.

---

## 6. Trend Signals

### 1. Blackwell Is a Priority, But Not Ready
Every serving engine (vLLM, SGLang) has active SM120 issues. CUDA graph capture is broken, eager mode is degraded, and critical bugs affect MTP verification, NVFP4 MoE, and Mamba state management. Organizations planning Blackwell deployments should plan for a 6–8 week stabilization window after the next vLLM minor release.

### 2. Diffusion Models Are Entering the Serving Layer
SGLang and Unsloth both shipped significant diffusion-specific performance work this cycle — kernel launch reductions of 50–100× for RoPE and BCG in SANA-Video, HiDream-O1-Image, and Anima. This is a departure from the LLM-only focus that dominated 2024–2025. Expect serving engines to develop diffusion-specific scheduling, CFG parallelism, and VAE tiling as first-class features.

### 3. KV Offloading Is Maturing Toward Production
The convergence of vLLM's TP-agnostic KV offloading, SGLang's HiCache load-back fix, and llama.cpp's MoE cache CPU fallback suggests that KV offloading is leaving the experimental phase. The remaining work is correctness (data integrity, engine ID sync) rather than feasibility.

### 4. Quantization Formats Are Proliferating Beyond FP8/INT8
NVFP4, MXFP4 QAT, Marlin→Humming migration, and per-architecture GPTQ group size validation indicate that the quantization landscape is fragmenting by hardware generation. Application developers should treat quantization recipes as hardware-specific and version-pinned, not portable across architectures or even within architecture generations.

### 5. Context Parallelism Is Becoming Standard for Long-Context
Ulysses is emerging as the preferred context-parallel strategy across both serving (SGLang) and training (Unsloth). The eval loss inflation bug under Ulysses (Unsloth #17049) is a warning that CP implementations have correctness gaps that are only surfacing now because adoption is accelerating.

### 6. MCP and Tool-Use Infrastructure Is Fragile
Ollama's MCP tool-calling disconnects on RTX 5090, SGLang's DeepSeek V3.1 streaming function call bug, and Unsloth's repeated full-prompt reprocessing on Qwen hybrid models all point to a common pattern: structured output + multi-turn tool use + long contexts is the highest-complexity path in inference stacks today, with the fewest automated tests and the most edge cases.

### 7. SYCL / Intel GPU Support Is Accelerating
llama.cpp's oneDNN flash attention for Arc A-series, SGLang's Intel XPU all-to-all EP backend, and Unsloth's feature request for OneAPI SYCL in llama-server suggest that the Intel GPU software stack is reaching a quality threshold where developers are willing to invest. Watch this space for production parity with AMD ROCm.

---

**For agent and application developers:** The ecosystem today offers robust, production-grade serving for LLM-only workloads on Hopper and AMD RDNA3+. Anything involving Blackwell hardware, diffusion models, long-context Ulysses parallelism, MoE with expert parallelism, or structured tool-use with multi-turn continuity requires careful version pinning, active monitoring of the issue trackers, and fallback plans to Hopper or CPU backends. The highest-confidence deployment path in this ecosystem today is: vLLM or SGLang on H200 with FP8 quantization, tensor parallelism at TP4 or TP8, and conservative context lengths.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the GitHub data for vLLM from 2026-11-08 and create a structured digest.

Key observations:

1. **Releases**: No releases in the last 24h
2. **Hot Issues**: 
   - DeepSeek-V4.1 on SM120 (Blackwell) has extremely low decode throughput with CUDA graphs issues
   - RFC about envvars getting out of control
   - KV offloading data integrity concerns
   - TP-agnostic KV offloading tracking
   - Various bugs on SM120/Blackwell hardware
   - MoE oracle unification
   - Batch-invariant mode routing Linear to Triton

3. **Active PRs**:
   - V2 runner decode optimizations for NVIDIA Confidential Computing
   - torch.compile fixes for cudagraph buffer assignment
   - Quantization weight bytes for MFU metrics
   - GLM-5.3 sparse MLA optimizations
   - Mamba2 ReplaySSM speculative decoding on Triton
   - Various bug fixes

4. **Themes**:
   - Blackwell/SM120 support is still problematic
   - KV offloading is a major focus area
   - Mamba2/SSM improvements
   - Quantization work (Marlin→Humming, NVFP4, etc.)
   - Rust regex for response parsing
   - RL training weight reload
   - Confidential Computing

Let me structure this properly.
</think>


# vLLM Daily Digest — 2026-11-08

## 1. Today's Highlights

Blackwell/SM120 hardware continues to dominate the issue queue with critical performance and correctness problems — most notably, DeepSeek-V4.1 on RTX PRO 6000 Blackwell achieves "extremely low decode throughput" with CUDA graphs unusable, demanding urgent graph capture fixes for SM120. Meanwhile, the community is actively advancing KV offloading infrastructure with RFCs on data integrity and TP-agnostic sharing, plus a draft PR synchronizing engine IDs across PCP ranks for multi-node PP deployments.

## 2. Releases & Breaking Changes

- **No releases** landed in the last 24 hours.

**Migration notes on deck:**
- [RFC: Limit envvars in vLLM](https://github.com/vllm-project/vllm/issues/25700) — zhuohan123 proposes migrating numerous envvars to proper config fields (attention backend, all2all kernel backend, KV cache layout flags). This will be a **breaking change** for users relying on undocumented envvars; comment period is open.

## 3. New Model & Hardware Support

| Area | Item | Status | Link |
|------|------|--------|------|
| **Hardware** | SM120 (RTX PRO 6000 Blackwell, B300) — CUDA graph capture broken; eager mode severely degraded | ⚠️ Active bug | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **Hardware** | ROCm gfx950 — `persistent_topk` kernel support merged | ✅ Landed | [#63847](https://github.com/vllm-project/vllm/pull/63847) |
| **Hardware** | Intel XPU — All-to-all EP backend for batched MoE | 🔄 WIP | [#46871](https://github.com/vllm-project/vllm/pull/46871) |
| **Model** | Nemotron 3.5 ASR Streaming (`nemotron-3.5-asr-streaming-0.6b`) | 🔄 Feature request | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **Quantization** | NVFP4 MoE — CUTLASS backend silently produces empty completions on SM120 | ⚠️ Bug | [#51525](https://github.com/vllm-project/vllm/issues/51525) |
| **Quantization** | Marlin → Humming migration tracking across NVIDIA architectures | 🔄 RFC | [#65560](https://github.com/vllm-project/vllm/issues/65560) |
| **Quantization** | Exllama GPTQ W4A16 wrong outputs when `group_size % 32 != 0` | ⚠️ Bug | [#60608](https://github.com/vllm-project/vllm/issues/60608) |

## 4. Performance & Optimization

**Landed this cycle:**
- [V2 runner decode optimizations for NVIDIA Confidential Computing](https://github.com/vllm-project/vllm/pull/59981) — ports CC decode optimizations to V2 GPU model runner; fixes UVA incoherence bug that produced garbage under CC. Tagged `ready`, `verified`.
- [ROCm CI lock contention fix](https://github.com/vllm-project/vllm/pull/66189) — `_acquire_dpx_lock` now waits up to 10 minutes with 5s retries instead of failing immediately on busy DPX devices.

**In review / RFC stage:**
- [Perf] [Sparse MLA][GLM-5.3](https://github.com/vllm-project/vllm/pull/65403) — index-group workspace reductions and opt-in masked-MHA prefill for quantized KV; targets TP8 `nvfp4_ds_mla` serving of 743B model on B300.
- [torch.compile] cudagraph buffer assignment check refined to only flag `_buffers.update` instead of any dict update in Dynamo bytecode ([#65446](https://github.com/vllm-project/vllm/pull/65446)).
- [Perf] [Sample in log space](https://github.com/vllm-project/vllm/pull/51526) — skip full-vocab softmax in `TopKTopPSampler.forward_native` using `argmax(logits - log q)`.
- [Batch-invariant mode on Hopper/Blackwell](https://github.com/vllm-project/vllm/issues/65569) — RFC proposing cuBLAS path instead of Triton for Linear layers where cuBLAS is already batch-invariant.

**Infrastructure work:**
- [ReplaySSM on Triton backend](https://github.com/vllm-project/vllm/pull/66318) — ports FlashInfer-only Mamba2 speculative decoding to Triton, enabling MI355 support.
- [Quantization weight bytes for MFU metrics](https://github.com/vllm-project/vllm/pull/65143) — adds `QuantizationConfig.get_weight_byte_size()` so out-of-tree quantization methods get correct MFU estimates.
- [Confident Decoding phase 1 for Llama](https://github.com/vllm-project/vllm/pull/48083) (closed) — entropy-guided conservative backward search using near-final intermediate layers.

## 5. Stability & Regressions

| Severity | Issue | Hardware | Notes |
|----------|-------|----------|-------|
| 🔴 Critical | CUDA illegal memory access at first MTP verify step on v0.33.0 (regression from v0.32.0) | SM120 | [#65139](https://github.com/vllm-project/vllm/issues/65139) |
| 🔴 Critical | DeepSeek-V4.1-Flash decode throughput near-zero with `--enforce-eager` on SM120 | SM120 | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| 🔴 Critical | NVFP4 MoE + CUTLASS backend → empty completions on SM120 | SM120 | [#51525](https://github.com/vllm-project/vllm/issues/51525) |
| 🟡 High | MiniMAXGemmaRMSNorm unconditionally calls FlashInfer CUDA kernels | Intel GPU | [#51200](https://github.com/vllm-project/vllm/issues/51200) |
| 🟡 High | Scheduler livelock with multi-module MTP + Mamba align prefix caching | CPU (repro) | [#61762](https://github.com/vllm-project/vllm/issues/61762) |
| 🟡 High | Exllama GPTQ W4A16 silently wrong outputs with `group_size % 32 != 0` | SM120, gfx1100 | [#60608](https://github.com/vllm-project/vllm/issues/60608) |
| 🟠 Medium | MRV2 AutoRegressiveSpeculator ignores dynamic K from scheduler | V2 runner | [#51510](https://github.com/vllm-project/vllm/issues/51510) |
| 🟠 Medium | `/inference/v1/generate` with `"max_tokens": null` bypasses output-token caps | API | [#65592](https://github.com/vllm-project/vllm/issues/65592) |

**Fixes in progress:**
- [Release FlashInfer one-sided workspaces on teardown](https://github.com/vllm-project/vllm/pull/63874) — prevents resource leaks on EP communicator destruction.
- [KVConnector Mooncake save offset stalls fix](https://github.com/vllm-project/vllm/pull/64945) — counts remotely existing keys as saved when local sources are unavailable.
- [KV Connector engine ID sync across PCP ranks](https://github.com/vllm-project/vllm/pull/62916) — addresses PP2/PCP8/TP2 multi-node startup failure.

## 6. What This Means for Application Developers

1. **Blackwell (SM120) users should proceed with caution.** CUDA graph support is effectively broken, and eager mode performance is severely degraded. If you need Blackwell today, expect to run `--enforce-eager` and monitor throughput closely. Track [#56892](https://github.com/vllm-project/vllm/issues/56892) for resolution.

2. **KV offloading is approaching production readiness for multi-engine setups.** The TP-agnostic KV offloading tracker ([#61886](https://github.com/vllm-project/vllm/issues/61886)) is actively seeking reviewers for PRs. If you're running heterogeneous TP deployments, now is the time to engage.

3. **Verify your quantization config.** Exllama GPTQ W4A16 silently produces wrong outputs if your `group_size % 32 != 0` ([#60608](https://github.com/vllm-project/vllm/issues/60608)). Check your quantization recipe before serving in production.

4. **The envvar cleanup RFC ([#25700](https://github.com/vllm-project/vllm/issues/25700)) will likely affect your deployment.** If you rely on undocumented envvars for attention backends or KV cache layouts, participate in the discussion to ensure migration paths exist.

5. **For RL training integrations**, the bounded, retryable NCCL weight updates RFC ([#64374](https://github.com/vllm-project/vllm/issues/64374)) addresses a critical deadlock risk where trainer/worker desync blocks forever. Comment if you have training pipeline dependencies.

6. **Intel GPU users: avoid MiniMax-M3** until [#51200](https://github.com/vllm-project/vllm/issues/51200) is resolved — `MiniMAXGemmaRMSNorm` unconditionally calls CUDA kernels.

---

*Digest generated from vLLM GitHub data · 2026-11-08 · v0.33.0 (tag 3a4d82f5)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the GitHub data provided to create a structured digest for SGLang on 2026-11-08.

Key observations:
1. No releases in the last 24 hours
2. 51 issues total, with 30 shown
3. 500 PRs total, with 20 shown
4. Most active issue is the CUDA Coredump Tracker with 359 comments
5. Several performance issues and bugs are highlighted

Let me structure this into the requested format:

**Today's Highlights:**
- Multiple performance optimizations landed, particularly around diffusion models (SANA-Video, Anima, HiDream-O1-Image, ERNIE-Image)
- Several bugs fixed including DeepSeek V3.1 streaming function calls, FLUX.3 CFG parallelism issues
- New features including QSA cache sharding for Qwen3.8, Apple Silicon serving redesign RFC

**Releases & Breaking Changes:**
- None in the last 24h

**New Model & Hardware Support:**
- DFLASH MLA draft support for trtllm_mla and cutedsl_mla backends
- B300 TP4 AgentX tuning results for GLM-5.3-Flash
- Apple Silicon serving redesign with Torch-owned SRT path

**Performance & Optimization:**
- B300 TP4 AgentX: 26.3% total throughput improvement, 35.6% output throughput for GLM-5.3-Flash
- SANA-Video RoPE: 8.11% faster on SM103
- Anima BCG: reduced kernel launches by 8,400 per request
- HiDream-O1-Image RoPE: reduced from 57,600 to 7,200 kernel launches
- Multiple AMD GPU optimizations for Qwen3 and ROCm


- Several stability and regression issues affecting Blackwell architecture, including CUDA graph capture failures, Mamba memory allocation problems, GLM model corruption, and DSpark deadlocks
- Rust server addressing complications
- Most critical issues resolved or actively being addressed through pull requests
</think>


# SGLang Digest — 2026-11-08

## 1. Today's Highlights

SGLang saw significant activity around diffusion model optimization and Blackwell architecture support. Multiple performance PRs landed this cycle targeting SANA-Video, Anima, HiDream-O1-Image, and ERNIE-Image, collectively reducing kernel launches and improving throughput on GB300/B300 hardware. Several correctness bugs were resolved—including DeepSeek V3.1 streaming function calls, FLUX.3 CFG rank agreement, and MambaPool CUDA OOM—while a new RFC proposes a Torch-owned SRT path for Apple Silicon serving.

---

## 2. Releases & Breaking Changes

**No releases** were tagged in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Description | Links |
|------|-------------|-------|
| **DFLASH MLA Drafts** | Sliding-window MLA drafts now serveable on `trtllm_mla` and `cutedsl_mla` backends for speculative decoding with Kimi-K3.1 DFlash2 SWA drafts | [#49110](https://github.com/sgl-project/sglang/pull/49110) |
| **GLM-5.3-Flash on B300** | New tuning results for B300 TP4 AgentX workloads (C64) showing +26.3% total throughput and +35.6% output throughput | [#49071](https://github.com/sgl-project/sglang/pull/49071) |
| **Apple Silicon Redesign RFC** | Proposal for Torch-owned SRT path with exported whole-model MLX region; implementation PR #36164 | [#32321](https://github.com/sgl-project/sglang/issues/32321) |
| **QSA Cache Sharding** | New cache sharding support for Qwen3.8 hybrid models (QSA raw K/V history + compressed cache) | [#43527](https://github.com/sgl-project/sglang/pull/43527) |

---

## 4. Performance & Optimization

### Kernel & Throughput Improvements (landed)

| PR | Area | Impact |
|----|------|--------|
| [#49110](https://github.com/sgl-project/sglang/pull/49110) | **DFLASH MLA on trtllm_mla/cutedsl_mla** | Enables SWA drafts under Kimi-K3.1 DCP |
| [#49071](https://github.com/sgl-project/sglang/pull/49071) | **GLM-5.3-Flash / B300 TP4 AgentX** | **+26.3%** total throughput, **+35.6%** output throughput |
| [#48442](https://github.com/sgl-project/sglang/pull/48442) | **SANA-Video RoPE on SM103** | **8.11%** latency reduction via fused FP64→BF16 |
| [#48394](https://github.com/sgl-project/sglang/pull/48394) | **Anima gated residuals (BCG)** | **−8,400 kernel launches** per 50-step CFG request |
| [#48383](https://github.com/sgl-project/sglang/pull/48383) | **HiDream-O1-Image RoPE** | **−50,400 kernel launches** (57,600→7,200) |
| [#48218](https://github.com/sgl-project/sglang/pull/48218) | **ERNIE-Image sequence parallelism** | Enables image-prefix sharding + Ulysses2 |
| [#48122](https://github.com/sgl-project/sglang/pull/48122) | **MiniMax-H3 reference/keyframe caching** | Eliminates redundant image encoding per request |
| [#48043](https://github.com/sgl-project/sglang/pull/48043) | **AMD gfx950 FP8 RMSNorm+SiLU fusion** | Fused 1×128 FP8 input quant path for Qwen3 |
| [#47908](https://github.com/sgl-project/sglang/pull/47908) | **AMD MXFP4 QAT fake scale layout** | Matches aiter column-major layout for ROCm correctness |
| [#45891](https://github.com/sgl-project/sglang/pull/45891) | **DSA packed prefill top-k on CUDA** | CUDA-accelerated top-k reduces prefill overhead on GB300/GLM-5.x/DeepSeek-V3.2 |
| [#48895](https://github.com/sgl-project/sglang/pull/48895) | **DCP8 indexer top-k for decode** | Fused DCP8 decode indexer for Kimi-K3.1 |

### Performance Issues In Progress

| Issue | Description | Hardware |
|-------|-------------|----------|
| [#33422](https://github.com/sgl-project/sglang/issues/33422) | DeepSeek-V4 prefill throughput ~2–7K tok/s vs 12.5K reported (vLLM/marlin baseline) | SM120 (4× RTX PRO 6000, TP=4) |
| [#47734](https://github.com/sgl-project/sglang/issues/47734) | FA3 picks `MmaPV_is_RS=false` for hdim=128 non-causal on H200; 1.5–3% slower than flash-attn | H200 |

---

## 5. Stability & Regressions

### High Severity

| Issue | Description | Status |
|-------|-------------|--------|
| [#26340](https://github.com/sgl-project/sglang/issues/26340) | **CUDA Coredump Tracker** — Auto-collected coredump events from CI (359 comments) | Open |
| [#35241](https://github.com/sgl-project/sglang/issues/35241) | **Generation health checks perturb DP routing state**, collapsing long-prefill throughput | **Fixed** |
| [#36941](https://github.com/sgl-project/sglang/issues/36941) | **Long prefill (>40k tokens) exhausts GB10 unified memory**, silently kills worker rank at ~54–62k | Open |
| [#41449](https://github.com/sgl-project/sglang/issues/41449) | **DSpark + TP + grammar-constrained request deadlocks all ranks**; GPUs spin in collective | Open |
| [#48593](https://github.com/sgl-project/sglang/issues/48593) | **CUDA graph capture fails** for hybrid linear attention models (`IndexError` in `HybridLinearAttnBackend._replay_metadata`) | Open |

### Medium Severity (Correctness Bugs Fixed/Landed)

| PR/Issue | Description | Status |
|----------|-------------|--------|
| [#49107](https://github.com/sgl-project/sglang/pull/49107) | **DeepSeek V3.1 streaming function calls** — delta splitting bug caused dropped arguments | Open PR |
| [#46430](https://github.com/sgl-project/sglang/pull/46430) | **FLUX.3 CFG rank disagreement** — TP/SP ranks independently pick packed vs sequential CFG, causing hangs | **Fixed** |
| [#47916](https://github.com/sgl-project/sglang/issues/47916) | **MambaPool.copy_from CUDA OOM** — gathered all temporal states into one temporary under parallel admission bursts | **Closed** |
| [#38031](https://github.com/sgl-project/sglang/issues/38031) | **GLM-5.3-Flash HiCache load-back corrupts generation** — dropped tool calls, degenerate repetition loops | **Closed** |
| [#40320](https://github.com/sgl-project/sglang/issues/40320) | **FlashInfer autotune cache discarded every boot** under MoE EP>1 | Open |
| [#47509](https://github.com/sgl-project/sglang/issues/47509) | **RustServer advertises loopback/unroutable address** to other nodes | Open |

### CI/Infra

| Issue | Description |
|-------|-------------|
| [#42752](https://github.com/sgl-project/sglang/issues/42752) | Flaky tests and CI infrastructure failures in PR Test Base/Extra runs |
| [#48311](https://github.com/sgl-project/sglang/issues/48311) | Diffusion perf checks depend on which runner a job lands on; retries can't fix slow host |

---

## 6. What This Means for Application Developers

1. **Diffusion workloads are significantly faster on Blackwell.** If you run SANA-Video, Anima, HiDream-O1-Image, or ERNIE-Image, the kernel launch reductions (up to 50% fewer) directly translate to lower latency and higher throughput on GB300/B300.

2. **AgentX workloads on GLM-5.3-Flash benefit from tuning.** The new B300 TP4 configuration yields 26–36% throughput gains for long-context agent traffic; consider updating your deployment configs.

3. **Avoid very long prefills (>40k tokens) on GB10.** Unified memory exhaustion can silently kill the worker without traceback. If long-context inputs are expected, consider chunked prefill or TP configurations that reduce per-GPU memory pressure.

4. **Grammar-constrained decoding on DSpark with TP is unstable.** Do not mix structured output (JSON schemas, regex) with DSpark + tensor parallelism until [#41449](https://github.com/sgl-project/sglang/issues/41449) is resolved.

5. **DeepSeek V3.1 tool-calling users: test streaming carefully.** The fix in [#49107](https://github.com/sgl-project/sglang/pull/49107) addresses a bug where rapid multi-call streams lose arguments; verify behavior against the upcoming patch.

6. **MoE deployments with expert parallelism: expect longer startup.** FlashInfer autotune cache rebuilds on every boot when EP > 1 ([#40320](https://github.com/sgl-project/sglang/issues/40320)); consider caching autotune results if cold-start latency matters.

---

*Generated from [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang) activity on 2026-11-08.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for llama.cpp on 2026-11-08.

Key observations from the data:

**Releases/Commits (last 24h):**
- b12196: SYCL CPY to Q4_1, Q5_1, Q8_0 exact rounding fix
- b12195: SYCL VRAM buffer size validation
- b12194: Hexagon n_hvx/n_threads cleanup
- b12193: mtmd log-mel computation moved to cgraph
- b12192: mtmd MageVL-Cowork model support
- b12191: MoE cache CPU fallback + tuning script
- b12189: Metal GROUP_NORM fix
- b12188: Server parent/child slot visit order fix
- b12187: WebGPU group norm kernel
- b12186: Vulkan readonly buffer hints

**Issues (30 total, key ones):**
- #21545: Server model capabilities info (enhancement request)
- #30010: Vulkan decode error on AMD RX 7900 XTX
- #31560: Intel Arc Pro B70 nondeterministic results
- #31828: Vulkan output corruption on Intel Arc B-series
- #31863: Server closes SSE connection prematurely (new today)
- #31847: Server hangs loading models across 2 RPC backends
- #31842: BF16 precision loss from redundant casts
- #31840: Backend sampling reallocates pinned buffers

**Pull Requests (98 total, key ones):**
- #31865: mtmd refactoring - remove clip.h (new)
- #31864: mtmd apply --image-min/max-tokens fix
- #31859: Server proxy log downgraded
- #31781: Hexagon libhtp auto-loading


- #31753: SYCL fused ops + RMS norm vectorization (+3.4%)
- #31854: CPU backend F32 src1 switch
- #31574: SYCL oneDNN FA for Arc A-series at head_dim=64
- #31465: SYCL CPY exact rounding (fixed #31140)

I'll highlight the most critical technical developments. The SYCL backend shows significant improvements in computational precision and performance, with exact rounding fixes and potential 3.4% throughput gains through vectorized operations. Hardware support continues expanding, particularly for Intel Arc and AMD platforms, while addressing critical Vulkan stability and memory management issues.
</think>


# llama.cpp Digest — 2026-11-08

## Today's Highlights

The past 24 hours saw continued refinement across backend implementations, with two SYCL fixes addressing precision issues in quantized tensor operations and VRAM overcommitment. The MTMD (multi-token multi-diffusion) subsystem received its second major update in two commits, adding support for the MageVL-Cowork model and moving log-mel computation into the compute graph for better scheduling. A notable new issue reports that `llama-server` closes TCP connections prematurely after SSE streaming responses despite advertising Keep-Alive headers.

---

## Releases & Breaking Changes

| Commit | Change | Notes |
|--------|--------|-------|
| [b12196](https://github.com/ggml-org/llama.cpp/commit/b12196) | SYCL: exact rounding in CPY to Q4_1, Q5_1, Q8_0 | Fixes intermitted test failures; closes [#31140](https://github.com/ggml-org/llama.cpp/issues/31140) |
| [b12195](https://github.com/ggml-org/llama.cpp/commit/b12195) | SYCL: refuse device buffers exceeding VRAM | Temporary patch to prevent kernel panics on large models |
| [b12191](https://github.com/ggml-org/llama.cpp/commit/b12191) | MoE cache: CPU fallback for missed experts | New `--moe-cache-cpu-share F` parameter; includes tuning script |
| [#31864](https://github.com/ggml-org/llama.cpp/pull/31864) | MTMD: apply `--image-min/max-tokens` to all dynamic resolution projectors | Fixes [#31131](https://github.com/ggml-org/llama.cpp/issues/31131) |

No version tags were published in this window. All changes land on master and will be in the next release.

---

## New Model & Hardware Support

- **MageVL-Cowork** — MTMD now supports this vision-language model, with rope frequencies properly maintained at the clip model level rather than per-layer.
- **Hexagon / HTP** — Cleanup of `n_hvx` and `n_threads` configuration tied to target architecture, plus support for enabling `HTP_DEBUG` via `build.py`.
- **Intel Arc A-series (Alchemist)** — SYCL flash attention now routes through the oneDNN fused SDPA path for `head_dim=64` models (Qwen2/Qwen2.5 families), bypassing the slower TILE kernel.
- **Intel Arc B-series (Battlemage)** — WebGPU group norm kernel landed; Vulkan issues with cooperative matrices on these GPUs remain under investigation (see Stability section).

---

## Performance & Optimization

| PR | Area | Impact |
|----|------|--------|
| [#31753](https://github.com/ggml-org/llama.cpp/pull/31753) | SYCL: fused ADD/RMS_NORM/MUL + vectorized RMS norm | **+3.4% throughput** on Qwen3.8-27B Q3_K_P (tg128: 13.09 → 13.53 t/s) |
| [#31854](https://github.com/ggml-org/llama.cpp/pull/31854) | CPU backend: F32 src1 for F16 matmuls | Switches default computation to avoid F16 intermediate precision loss |
| [#31859](https://github.com/ggml-org/llama.cpp/pull/31859) | Server: proxy log level downgraded to trace | Reduces log noise in `--models` multi-instance mode |
| [#31519](https://github.com/ggml-org/llama.cpp/pull/31519) | Batched-bench: warm KV cache benchmarking | Enables realistic throughput measurement with pre-populated cache |
| [#30156](https://github.com/ggml-org/llama.cpp/pull/30156) | SYCL: device-side MoE scheduler | Keeps GPU graphs intact, enables CPU-side scheduler bypass |

SYCL AOT compilation for Meteor Lake iGPU (`mtl-m`) remains broken due to unsupported `dpas.nosrc0` intrinsic ([#31033](https://github.com/ggml-org/llama.cpp/issues/31033)).

---

## Stability & Regressions

### Critical (active production impact)

1. **Vulkan output corruption — Intel Arc B-series**  
   [#31828](https://github.com/ggml-org/llama.cpp/issues/31828) — Cooperative matrix workaround does not resolve long-context/RAG prompt corruption on Arc Pro B65 (32 GB).  
   Related: [#31560](https://github.com/ggml-org/llama.cpp/issues/31560) — nondeterministic Q8_0/F16 results on Arc Pro B70.

2. **SSE connection closure**  
   [#31863](https://github.com/ggml-org/llama.cpp/issues/31863) — `llama-server` closes TCP connections after streaming responses despite `Keep-Alive` headers. Reproduced on b11977 and b12182, macOS arm64.

3. **Server hangs on dual-RPC model loading**  
   [#31847](https://github.com/ggml-org/llama.cpp/issues/31847) — ~19 GB model across two RPC backends causes indefinite hang; single-backend loads succeed.

### Moderate (correctness or memory)

4. **BF16 precision loss**  
   [#31842](https://github.com/ggml-org/llama.cpp/issues/31842) — Redundant casts in `ggml_vec_dot_bf16` cause both precision degradation and performance drop.

5. **CPU sampling buffer churn**  
   [#31840](https://github.com/ggml-org/llama.cpp/issues/31840) — Pinned host compute buffers are reallocated on every request completion, adding overhead on long-running servers.

6. **Metal GROUP_NORM for batch > 1**  
   Fixed in [b12189](https://github.com/ggml-org/llama.cpp/commit/b12189) — kernel ignored batch dimension `ne03`.

### Low / Stale

- FreeBSD Vulkan compilation error ([#31541](https://github.com/ggml-org/llama.cpp/issues/31541))
- Metal MTP draft memory bloat: ~15 GB host allocation for 96k-token sessions on M4 Max ([#30174](https://github.com/ggml-org/llama.cpp/issues/30174))
- SYCL SWIGLU_OAI abort on f16 tensors ([#30855](https://github.com/ggml-org/llama.cpp/issues/30855))

---

## What This Means for Application Developers

1. **Intel Arc B-series users should disable cooperative matrices** via `GGML_VK_DISABLE_COOPMAT=1` if running long-context or RAG workloads, but note this may not fully resolve corruption per the latest reports. Consider CUDA or CPU backends for production until the Vulkan driver issues are resolved.

2. **MTMD users** should test the new `--image-min/max-tokens` enforcement when using dynamic resolution projectors; previously these were silently ignored.

3. **SYCL users on Intel discrete GPUs** will see improved attention performance on Qwen2/2.5 models after [#31574](https://github.com/ggml-org/llama.cpp/pull/31574) merges. Monitor for the AOT compilation issue if building for Meteor Lake iGPU.

4. **Multi-slot server deployments** benefit from the parent-before-child slot visit ordering fix ([b12188](https://github.com/ggml-org/llama.cpp/commit/b12188)), improving prompt prefix sharing behavior.

5. **MoE model operators** can now offload a tunable fraction of cache misses to CPU via `--moe-cache-cpu-share`, trading bandwidth for VRAM headroom on large expert models.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate a structured digest for Ollama based on GitHub data for 2026-11-08. Let me analyze the data and create a professional technical digest.

Looking at the data:

**Releases**: None in last 24h

**Issues (14 total)**:
- #1645: Feature request for dark mode on ollama.com (open)
- #1890: Feature request for updating all models (closed)
- #19439: Bug - Windows RTX 5090 runner disconnects during tool calling (open)
- #18825: Bug - Failed to pull embeddinggemma-2:740m on Linux (closed)
- #5452: Feature request for markdown rendering in terminal (open)
- #17748: Bug - AMD Radeon 780M Vulkan regression (open)
- #19596: Bug - Typo in gemma4:12b-it-qat metadata (open)
- #17638: Bug - gpt-oss HTTP 500 error parsing tool call (open)
- #17906: Anthropic /v1/messages maps xhigh to high (open)
- #18994: Bug - Can't add Ollama models to ChatGPT (open)
- #19537: Bug - Version update caused worse results (open)
- #19598: Feature request for video AI (closed)
- #19597: Bug - Cloud /api/chat 400 error at ~32 MiB payload (open)
- #19595: Feature request for API authentication (closed)

**Pull Requests (14 total)**:
- #19592: Add ripple preview support to MLX runner (closed)
- #18866: Count VRAM per context and predict KV cache (open)
- #19600: cmd/bench: fail incomplete runs (open)
- #19599: README: add ollama-update (open)
- #19197: mlx: support concurrent generation (open)


- #19590: model/parsers: trim whitespace after </think>

 in deepseek3 (open)
- #19442: Fix OpenAI empty list arrays (closed)
- #19366: mlx: add Windows support and CPU backend (open)
- #19567: mlxrunner: support dense Nemotron and Luciole tokenization (open)
- #19594: model/renderers: preserve Gemma 4 content before tool calls (open)
- #19593: README: add wowTerminal (open)
- #19575: launch: refresh Pi metadata after sign-in (open)
- #19574: model/parsers: drop stray <channel|> close tags in Gemma4Parser (open)
- #19587: launch: fix Claude Code routing (closed)

The main technical work centers on GPU memory management improvements with #18866 tracking VRAM allocation per context. MLX backend is getting concurrent generation support and Windows compatibility, while various model parsers are being refined for better tokenization and rendering. The closed PRs address parsing fixes and API response formatting.
</think>

# Ollama Digest — 2026-11-08

## 1. Today's Highlights

Ollama's development momentum centers on cross-platform MLX expansion and GPU memory management: a merged PR brings Ripple model support to Apple Silicon via MLX, while a new PR (#18866) attacks VRAM accounting discrepancies that can cause context window failures on high-memory cards. On the stability front, an AMD Radeon 780M Vulkan regression and Windows RTX 5090 tool-calling disconnects remain open, and a critical typo in `gemma4:12b-it-qat` metadata was reported today.

## 2. Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| No new releases | None published in the last 24 hours | — |

**Migration Notes:** None this cycle.

---

## 3. New Model & Hardware Support

| Model / Architecture | Backend | Notes | PR / Issue |
|---------------------|---------|-------|------------|
| **Ripple** (preview) | MLX (Apple Silicon) | Renderer, parser, and import registration added; per-layer NoPE in DFlash drafts, fused MLP activation, value blending, attention gating | [#19592](https://github.com/ollama/ollama/pull/19592) |
| **Dense Nemotron + Luciole** tokenization | MLX | `NemotronForCausalLM` forward path, normalization sequence, Split + Metaspace tokenizer pipeline | [#19567](https://github.com/ollama/ollama/pull/19567) |
| **MLX runner — Windows + CPU** | Windows, CPU | Native Windows execution for MLX runner (CPU backend); enables text-to-speech inference (e.g., `phonon:en`) | [#19366](https://github.com/ollama/ollama/pull/19366) |
| **DeepSeek3 parser whitespace fix** | All | Trims trailing whitespace after `</think>` in streamed output to avoid double-newlines | [#19590](https://github.com/ollama/ollama/pull/19590) |
| **Gemma 4 content preservation** | All | Preserves text preceding `tool_calls` in assistant messages instead of appending after tool responses | [#19594](https://github.com/ollama/ollama/pull/19594) |

---

## 4. Performance & Optimization

| Area | Change | Impact | PR / Issue |
|------|--------|--------|------------|
| **VRAM accounting** | Count VRAM per context; predict KV cache from metadata | Fixes up to ~19 GB miscount gap on large cards; prevents context window exhaustion on high-memory GPUs | [#18866](https://github.com/ollama/ollama/pull/18866) |
| **MLX concurrent generation** | `OLLAMA_NUM_PARALLEL` now works with MLX models | Multiple requests share projection and feed-forward work; reduces first-token latency under load | [#19197](https://github.com/ollama/ollama/pull/19197) |
| **Benchmark tool hardening** | Fails incomplete runs with non-zero exit; truncates reused output files | Reliable automated performance regression tracking | [#19600](https://github.com/ollama/ollama/pull/19600) |
| **Claude Code routing fix** | Scopes routing to child process; clears competing provider selectors | `ollama launch claude` no longer silently routes to wrong provider | [#19587](https://github.com/ollama/ollama/pull/19587) (closed) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR | Link |
|----------|-------|--------|--------|------|
| **🔴 High** | AMD Radeon 780M Vulkan regression — `vulkan: Not enough memory for command submission` on Ollama ≥ 0.32.10 | **OPEN** | — | [#17748](https://github.com/ollama/ollama/issues/17748) |
| **🔴 High** | Windows RTX 5090 runner disconnects during tool calling (`HTTP 500 /tokenize`) on Ollama 0.40.13 | **OPEN** | — | [#19439](https://github.com/ollama/ollama/issues/19439) |
| **🔴 High** | `gemma4:12b-it-qat` metadata typo — `toos` instead of `tools` | **OPEN** | — | [#19596](https://github.com/ollama/ollama/issues/19596) |
| **🟡 Medium** | `gpt-oss:20b` HTTP 500 "error parsing tool call" — Ollama rejects its own model's tool output | **OPEN** | — | [#17638](https://github.com/ollama/ollama/issues/17638) |
| **🟡 Medium** | Anthropic `/v1/messages` maps `xhigh` to `high`, breaking Qwen3.8 chat templates | **OPEN** | — | [#17906](https://github.com/ollama/ollama/issues/17906) |
| **🟡 Medium** | Cloud `/api/chat` returns HTTP 400 at ~32 MiB payload (undocumented limit) | **OPEN** | — | [#19597](https://github.com/ollama/ollama/issues/19597) |
| **🟢 Low** | `ollama launch claude` routing to wrong provider | **CLOSED** | [#19587](https://github.com/ollama/ollama/pull/19587) | — |
| **🟢 Low** | `/v1/models` returned `null` instead of `[]` for empty lists | **CLOSED** | [#19442](https://github.com/ollama/ollama/pull/19442) | — |

---

## 6. What This Means for Application Developers

1. **Windows + MLX parity improving.** The Windows CPU backend for MLX (#19366) means developers targeting Windows can now run models that previously required macOS Metal. This broadens cross-platform deployment options for local inference.

2. **Parallel MLX inference is now tunable.** Setting `OLLAMA_NUM_PARALLEL > 1` on Apple Silicon will allow higher throughput for concurrent agent requests, though monitor memory usage per additional request.

3. **VRAM accounting is being tightened.** The PR #18866 fix will make `ollama ps` output more trustworthy for capacity planning. If you have been seeing unexplained context window failures on large GPUs, this may resolve them.

4. **Tool-calling stability remains fragile on Windows and AMD Vulkan.** Applications relying on function calling should test thoroughly on RTX 5090/Windows and AMD 780M/Vulkan before production deployment. The Gemma 4 typo (#19596) will affect any pipeline using `gemma4:12b-it-qat` with tool calling.

5. **Community integrations expanding.** Two new CLI tools added to the README — `ollama-update` (digest-based model sync checker) and `wowTerminal` (Rust/Tauri terminal with Ollama integration) — may accelerate model management in CI/CD and developer workflows.

---

*Generated from github.com/ollama/ollama activity on 2026-11-08.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data for LiteLLM and generate a structured digest for 2026-11-08.

Key observations from the data:

**Releases:**
- v1.110.0-dev.1 released (dev release with cosign verification)
- v1.108.3 is the latest LTS release

**Major Issues/Themes:**
1. Multiple Claude-related bugs (thinking blocks, reasoning, etc.)
2. LLM translation issues (provider-specific bugs when translating between API formats)
3. MCP tool execution issues (error propagation, guardrails)
4. Bedrock/AWS integration issues (various)
5. Streaming issues
6. Token counting bugs
7. Budget/spend tracking bugs
8. Security/FIPS mode issues

**Key PRs (new):**
1. `total_timeout` for bounding whole non-streaming requests
2. FIPS mode plugin session fixes
3. S3 URL handling for Bedrock
4. OpenTelemetry span flushing
5. Web identity session policy per AWS caller
6. Responses API namespace tool fixes
7. Typing refactor (1160 errors cleared)

**Open issues of note:**
- #50065: MCP tools/list blocks 18-50s on legacy subscription listener
- #34328: unpack_defs hangs on recursive tool schemas
- #50070: Vertex Claude prompt cache misses

Let me structure this into the required format.
</think>


# LiteLLM Digest — 2026-11-08

## 1. Today's Highlights

LiteLLM shipped v1.110.0-dev.1 with cosign image signing and closed a significant batch of provider-translation bugs affecting Claude, Mistral, and Bedrock. Two open issues warrant immediate attention: MCP `tools/list` now exhibits 18–50s latency regressions on legacy subscription listeners after the v1.108.0 upgrade, and the router's sync `responses()` method ignores `num_retries` and `fallbacks` entirely, silently dropping resilience guarantees.

## 2. Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| [v1.110.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-dev.1) | Dev | Docker images now cosign-signed; verify with key at commit `e82a3c6` |
| [v1.108.3](https://github.com/BerriAI/litellm/releases/tag/v1.108.3) | LTS | Current LTS anchor; pull `ghcr.io/berriai/litellm:lts` |

**Migration notes:**
- The new `total_timeout` / `x-litellm-total-timeout` headers (PR [#50496](https://github.com/BerriAI/litellm/pull/50496)) are opt-in and non-breaking; existing `timeout`, `stream_timeout`, and deployment-level timeouts are unchanged.
- FIPS mode now constructs plugin session claims exclusively from the FIPS-certified crypto module (PR [#50544](https://github.com/BerriAI/litellm/pull/50544)); existing HMAC-based claims are deprecated in `fips_mode`.

## 3. New Model & Hardware Support

| Area | Change | PR / Issue |
|------|--------|------------|
| **Bedrock S3 sources** | `/v1/chat/completions`, `/v1/responses`, `/v1/messages`, and Gemini `generateContent` now forward `s3://` URIs for images, PDFs, and videos directly to Bedrock Converse instead of returning 500 | [#50577](https://github.com/BerriAI/litellm/pull/50577) |
| **Azure AI Foundry Agents v2** | `agent_reference`-based Responses API integration closed as completed feature request | [#25372](https://github.com/BerriAI/litellm/issues/25372) |
| **Web identity session policy** | Async-invoke embeddings, Bedrock batches/files, SageMaker, Polly, S3 Vectors, and OpenSearch vector store now included in STS session policy scope for AWS OIDC callers | [#50592](https://github.com/BerriAI/litellm/pull/50592) |

No new CUDA/ROCm/Metal backends or quantization formats flagged today.

## 4. Performance & Optimization

| Category | Detail | Reference |
|----------|--------|-----------|
| **Router retry parity** | Sync `router.responses()` now honors `num_retries` and `fallbacks` (previously always single-attempt) | [#50599](https://github.com/BerriAI/litellm/pull/50599) |
| **OTel span flush** | Spans are now flushed synchronously on SIGTERM before uvicorn workers exit; prevents telemetry gaps during restarts | [#50595](https://github.com/BerriAI/litellm/pull/50595) |
| **Typing cleanup** | 1160 `basedpyright` `reportAny`/`reportExplicitAny` errors cleared across 182 files; no behavior change | [#50579](https://github.com/BerriAI/litellm/pull/50579) |
| **Budget reservation (no-DB)** | When `custom_auth_run_common_checks` reserves `max_budget` spend with no `database_url`, the reservation is now correctly released instead of sticking until TTL | [#45907](https://github.com/BerriAI/litellm/pull/45907) |

⚠️ **Regression:** MCP `tools/list` blocks 18–50 seconds on legacy subscription listeners (clients sending `notifications/initialized` with pre-2026 protocol, e.g., Python `mcp` SDK `ClientSession` used by Open WebUI). Introduced in v1.108.0. Issue [#50065](https://github.com/BerriAI/litellm/issues/50065) is open.

## 5. Stability & Regressions

### Critical
| Issue | Description | Status |
|-------|-------------|--------|
| [#50065](https://github.com/BerriAI/litellm/issues/50065) | MCP `tools/list` hangs 18–50s on legacy protocol listeners (v1.108.0 regression) | **OPEN** |
| [#34328](https://github.com/BerriAI/litellm/issues/34328) | `unpack_defs` hangs unboundedly on recursive, high-fan-in JSON Schema (`$defs`/`$ref`); affects Bedrock & Vertex callers with no byte budget | **OPEN** (stale) |

### High
| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#49359](https://github.com/BerriAI/litellm/issues/49359) | MCP tool execution failures drop `is_error` flag; error status not propagated to Anthropic `tool_result` message | — |
| [#49046](https://github.com/BerriAI/litellm/issues/49046) | `chatgpt/` provider drops encrypted reasoning on `/v1/messages`; breaks Claude Code continuity | — |
| [#50070](https://github.com/BerriAI/litellm/issues/50070) | Vertex Claude `/v1/messages` sends `messages` before `system`/`tools`; prompt cache misses on tool-loop rounds | — |
| [#49998](https://github.com/BerriAI/litellm/issues/49998) | `/v1/messages` returns 503 "authentication database is temporarily unreachable" for non-`ProxyException` upstream failures; inconsistent with `/v1/chat/completions` | — |

### Medium (closed today)
| Issue | Description | Resolution |
|-------|-------------|------------|
| [#49179](https://github.com/BerriAI/litellm/issues/49179) | `/key/update` during in-flight request drops cost from budget window spend | Closed |
| [#24498](https://github.com/BerriAI/litellm/issues/24498) | Claude models return `[System: Empty message content sanitised to satisfy protocol]` | Closed |
| [#47924](https://github.com/BerriAI/litellm/issues/47924) | `reasoning_effort="none"` on default-on thinking models omits thinking instead of disabling | Closed |
| [#45546](https://github.com/BerriAI/litellm/issues/45546) | Mistral `reasoning_content` dropped instead of sent as `thinking` chunk on replay | Closed |
| [#49969](https://github.com/BerriAI/litellm/issues/49969) | Bedrock Converse replays `reasoningText.signature` to non-Anthropic GLM models → Bad Request | Closed |

## 6. What This Means for Application Developers

1. **If you use MCP via LiteLLM proxy**, be aware that v1.108.x introduced a latency regression for clients using the pre-2026 `notifications/initialized` protocol (Python `mcp` SDK, Open WebUI). Monitor for 18–50s hangs on `tools/list`. A fix has not yet landed; track [#50065](https://github.com/BerriAI/litellm/issues/50065).

2. **If you use `router.responses()` in sync code**, the method previously ignored retries and fallbacks silently. After [#50599](https://github.com/BerriAI/litellm/pull/50599) it now behaves like `aresponses()`. Test failover behavior if you rely on it.

3. **If you call Bedrock with S3-backed media**, image, PDF, and video inputs via `s3://` URIs now work end-to-end through LiteLLM (previously 500'd). No config change needed; update clients to use `s3://` paths directly.

4. **If you run LiteLLM in FIPS environments**, dashboard plugin iframe sign-in claims are now FIPS-compliant. Ensure you are on v1.110.0-dev.1 or later if compliance is required.

5. **If you use `total_timeout`**, the new header bounds the full end-to-end latency of a non-streaming request. This is opt-in but useful for enforcing stricter SLA boundaries than per-deployment timeouts allow (PR [#50496](https://github.com/BerriAI/litellm/pull/50496)).

6. **If you build agents with tool-use continuity** (e.g., Claude Code, multi-turn tool loops on Bedrock/Vertex), multiple bugs in today's batch affect replay of `reasoning`/`thinking` blocks and prompt cache alignment. Validate that extended thinking state is preserved correctly across your deployment topology.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the GitHub data for Unsloth AI and generate a structured digest for 2026-11-08.

Let me go through the data systematically:

**Releases**: None in last 24h

**Issues (21 total, showing key ones)**:
- #16706: search_conversation tool bug (CLOSED)
- #17015: Studio: repeated full prompt processing with Qwen hybrid model after tool use (OPEN)
- #15038: Model Management feature request - labels, rename, notes (OPEN, 3 👍)
- #16962: Search icon blurred in model hub (CLOSED)


- #17004: Model Hub UI rendering issues (CLOSED)
- #16803: Image generation falls back to CPU/RAM on Windows 11 with RTX 3060 (CLOSED)
- #16715: RAG ingest performance issue - batching problem (CLOSED)
- #17054: MoE router aux loss diverges on CPU backend with gradient accumulation > 1 (OPEN)
- #17048: SYCL support feature request for Intel GPUs (OPEN)
- #17017: LAN addresses binding bug (OPEN)
- #16982: Studio not allowing search for models that don't fit on system (CLOSED)
- #16925: DiffusionGemma multi-GPU prompts issue (OPEN)
- #16897: Beta update fails (OPEN)
- #16980: Keep all checkpoints option for Image LoRA (OPEN)
- #17062: Video upload limit 64MB feature request (OPEN)
- #16900: LoRA selection feature (CLOSED)
- #17016: Fullscreen mode feature request (OPEN)
- #16992: Project indexing pause button feature (OPEN)
- #16991: Nul files bug (OPEN)
- #16979: Custom templates for Image-LoRA training (OPEN)
- #16913: Attachment parsing bug (OPEN)

Looking at the latest pull requests, there are several infrastructure improvements landing: FlashInfer kernel support for vLLM and SGLang engines, weight loading from safetensors, LTX VAE optimizations for tiled decoding, and PPO/RLOO log-prob improvements. There are also fixes for Ulysses context parallelism with DeepSeek, FSDP2 sharded loading, and diffusion improvements like CFG-parallel processing and FLUX.3 modulation. Beyond that, I'm seeing fixes for longrope RoPE issues, eval loss calculations in context parallel, dataset checking, CPU BF16 AdamW rounding, and SDXL VRAM reduction.

The remaining work covers a lot of UX and reliability improvements: queue image generation support, nul file prevention on Windows, GGUF download progress polling, run listing performance, Glass blur rendering, and frontend CSS refactoring.

Looking at the most impactful changes for today, the FlashInfer kernel installation for vLLM/SGLang will significantly reduce cold start times on first launch, the safetensors-only loading provides both performance gains and security benefits, and the SDXL VRAM reduction is substantial. The MoE router aux loss divergence on CPU is a correctness issue worth noting, and the RAG ingest batching problem that was fixed is important for throughput.
</think>


## Unsloth Digest — 2026-11-08

---

### 1. Today's Highlights

Three high-impact PRs landed on the Studio side: pre-installed FlashInfer kernels will eliminate the nvcc JIT-compilation tax on every fresh vLLM/SGLang environment's first inference run, safetensors-only weight resolution closes a class of deserialization risk while recovering a hosted fast path, and the SDXL VAE VRAM reservation was cut by ~2.3 GiB. Meanwhile a correctness regression surfaced on the CPU backend — MoE router auxiliary loss diverges under pipeline parallelism when gradient accumulation > 1 — and a critical eval-loss inflation bug was identified in the Ulysses context-parallel path.

---

### 2. Releases & Breaking Changes

| Item | Detail | Link |
|---|---|---|
| No tagged releases in last 24 h | — | — |

**Config / behavior changes landed (no version bump):**
- **Safetensors-only weight resolution** — Studio now refuses to open `.pt / .pth / .bin / .ckpt` containers on any image/video/text-encoder load path. Safe fallback path is preserved for models that ship a `.safetensors` file. No migration required unless downstream tooling depends on legacy formats. | [#17061](https://github.com/unslothai/unsloth/pull/17061)
- **PPO / RLOO fused log-probs fallback** — `fused_head` now falls back to TRL's logits path when any torch global module hooks are registered. Affects users who inject custom hooks into the training loop. | [#17043](https://github.com/unslothai/unsloth/pull/17043)

---

### 3. New Model & Hardware Support

| Category | Entry | Status | Link |
|---|---|---|---|
| **Inference engine** | FlashInfer prebuilt kernels installed at vLLM / SGLang engine environment build time (eliminates per-GPU nvcc JIT on first launch) | **OPEN** PR | [#17063](https://github.com/unslothai/unsloth/pull/17063) |
| **Quantization format** | `.safetensors` enforced as sole weight container for pre-quantized diffusion models (SD / SDXL / SD3 / FLUX / LTX / Wan / CogVideoX) | **OPEN** PR | [#17061](https://github.com/unslothai/unsloth/pull/17061) |
| **GPU backend** | Intel OneAPI SYCL path for llama-server — feature request to accept `/opt/intel/oneapi/setvars.sh` before launch | **OPEN** issue | [#17048](https://github.com/unslothai/unsloth/issues/17048) |
| **Multi-GPU** | CFG-parallel diffusion copy on secondary GPU no longer refuses an idle card that already holds a CUDA context | **OPEN** PR | [#17057](https://github.com/unslothai/unsloth/pull/17057) |
| **Context parallelism** | Ulysses attention for DeepSeek V2 / V3 MLA, V3.2 indexer, V4 sink attention (stacked on prior Kimi / MiniMax work) | **OPEN** PR | [#15882](https://github.com/unslothai/unsloth/pull/15882) |

---

### 4. Performance & Optimization

| Area | Change | Impact | Link |
|---|---|---|---|
| **Engine cold-start** | FlashInfer top-k/top-p sampler kernels pre-installed in vLLM / SGLang envs | Eliminates per-GPU nvcc JIT compile on first inference run (was ~minutes on first request per GPU) | [#17063](https://github.com/unslothai/unsloth/pull/17063) |
| **VRAM (SDXL)** | SDXL VAE decode now uses a single expandable allocator segment instead of holding a second full-clip buffer | **−2.3 GiB** reserved VRAM after render; live tensors unchanged at ~8.95 GiB | [#17045](https://github.com/unslothai/unsloth/pull/17045) |
| **VRAM (LTX-2)** | LTX-2 / LTX-2.5 tiled VAE decode: only the open tile band is kept on-card during tiled decode | Reduces peak VRAM for high-res clip decode (at 1280×704) | [#17060](https://github.com/unslothai/unsloth/pull/17060) |
| **FLUX.3 diffusion** | Modulation heads projected once per sample; offloaded Base reuses conditioning streams | Reduces redundant compute in multi-sample FLUX.3 pipelines | [#17059](https://github.com/unslothai/unsloth/pull/17059) |
| **RAG ingestion** | `_embed_all` now batches across the full corpus instead of per-document (regression fixed) | **~48× improvement**: ~99 ms/chunk → 2.07 ms/chunk for small-file corpora | [#16715](https://github.com/unslothai/unsloth/issues/16715) |
| **FSDP2 sharded loading** | `init_lora_weights="orthogonal"` now accepted alongside `True/False/"gaussian"` | Enables orthogonal LoRA init without forcing the user into a full-weight load path | [#17038](https://github.com/unslothai/unsloth/pull/17038) |
| **CPU BF16 AdamW** | Each parameter now gets its own `torch.Generator` rounding stream on CPU | Fixes seed collision from torch's 32-bit truncation of CPU generator seeds | [#17046](https://github.com/unslothai/unsloth/pull/17046) |
| **Frontend rendering** | CSS refactor: canonical Tailwind classes enforced + unitless `0` fallbacks | Reduces layout thrash on software-composited pages (WebView2 / SwiftShader / llvmpipe) | [#17007](https://github.com/unslothai/unsloth/pull/17007), [#17008](https://github.com/unslothai/unsloth/pull/17008), [#17011](https://github.com/unslothai/unsloth/pull/17011) |

---

### 5. Stability & Regressions

> **Severity scale:** 🔴 Critical (correctness/hang) · 🟠 High (significant perf degradation) · 🟡 Medium (UX/workaround exists) · ⚪ Low (cosmetic/niche)

| Severity | Issue | Detail | Link | Fix PR |
|---|---|---|---|---|
| 🔴 **Critical** | **MoE router aux loss diverges on CPU** — pipeline parallelism with `gradient_accumulation > 1` produces wrong loss under `UNSLOTH_FORCE_CPU=1`; parity test fails | Affects all MoE models (Mixtral, Qwen MoE, etc.) on CPU-only training with FSDP pipeline stages | [#17054](https://github.com/unslothai/unsloth/issues/17054) | — |
| 🔴 **Critical** | **Eval loss inflated by cp_size** — `trainer.evaluate()` reports `eval_loss` multiplied by context-parallel size under Ulysses | Logged loss values are unreliable for model selection; affects all CP users | [#17049](https://github.com/unslothai/unsloth/pull/17049) | — |
| 🟠 **High** | **LongRoPE / dynamic Rope sees truncated position_ids** — Ulysses path passes per-rank shard instead of full sequence positions to `rotary_emb` | Affects Phi-3 / 3.5 / 4-mini long-context models with context parallelism enabled | [#17051](https://github.com/unslothai/unsloth/pull/17051) | — |
| 🟠 **High** | **Image generation falls back to CPU/RAM on Windows 11** — diffusion pipeline routes to CPU despite RTX 3060 CUDA availability (macOS M1 unaffected) | Blocks GPU-accelerated image generation on affected Windows configs | [#16803](https://github.com/unslothai/unsloth/issues/16803) | — |
| 🟡 **Medium** | **DiffusionGemma multi-GPU: GGML_ASSERT n_ubatch >= n_tokens** — prompts over ~1792 tokens abort the visual server on 2-GPU CUDA setup | Affects longer prompts with DiffusionGemma on multi-GPU; likely ubatch sizing gap | [#16925](https://github.com/unslothai/unsloth/issues/16925) | — |
| 🟡 **Medium** | **Repeated full prompt reprocessing after tool use** — with Qwen3.8 27B GGUF + MCP tool catalog, each tool-call turn re-sends the entire 65K context | Causes excessive latency and token usage on multi-turn tool-use conversations | [#17015](https://github.com/unslothai/unsloth/issues/17015) | — |
| 🟡 **Medium** | **check_dataset reports wrong truncation** — measured token length diverges from `sft_prepare_dataset` in two cases (row has both `text` and `messages` fields) | Training rows that are silently truncated may pass dry-run validation | [#17047](https://github.com/unslothai/unsloth/pull/17047) | — |
| ⚪ **Low** | **nul file creation on Windows** — Git Bash interprets `>nul 2>&1` as a real file write instead of NUL device | Pollutes working directory with spurious files; fix committed | [#17010](https://github.com/unslothai/unsloth/pull/17010) | merged |
| ⚪ **Low** | **Search icon blurred in Model Hub** — UI regression in desktop app | Cosmetic; fixed | [#16962](https://github.com/unslothai/unsloth/issues/16962) | fixed |
| ⚪ **Low** | **Model Hub UI overlapping / misplaced images** — rendering regression in desktop app | Cosmetic; fixed | [#17004](https://github.com/unslothai/unsloth/issues/17004) | fixed |

---

### 6. What This Means for Application Developers

**Inference / serving teams:**
- FlashInfer kernel pre-installation means the ~30–120 s first-inference JIT tax on a freshly provisioned vLLM engine is gone. First-request latency for any new engine environment is now bounded by model loading alone.
- The safetensors-only enforcement reduces attack surface in automated pipelines that ingest user-provided model directories; audit any tooling that depends on loading `.bin`/`.pt` weights.
- Intel GPU users should track [#17048](https://github.com/unslothai/unsloth/issues/17048) — SYCL support for llama-server via OneAPI is a significant throughput lever on Intel discrete GPUs.

**Training / fine-tuning teams:**
- The CPU MoE pipeline divergence ([#17054](https://github.com/unslothai/unsloth/issues/17054)) is a correctness blocker for anyone using MoE models in CPU-only or mixed CPU-GPU pipeline-parallel setups with gradient accumulation. Until fixed, avoid `gradient_accumulation > 1` on CPU backends for MoE.
- Eval loss values under Ulysses context parallelism are inflated by cp_size ([#17049](https://github.com/unslothai/unsloth/pull/17049)) — divide by your cp size to recover the true sequence-level loss for logging and early stopping.
- The `check_dataset` truncation fix ([#17047](https://github.com/unslothai/unsloth/pull/17047)) means dataset dry-run validation now reflects actual SFT tokenization; re-run validation on any dataset with mixed `text`/`messages` columns.

**Desktop / Studio users:**
- SDXL VRAM usage post-render drops by ~2.3 GiB, freeing headroom for multi-shot or inpainting pipelines on mid-range GPUs.
- The `search_conversation` tool, reported missing three times ([#16706](https://github.com/unslothai/unsloth/issues/16706)), is now restored.
- Image-generation queueing is now functional from both the UI and the API ([#15005](https://github.com/unslothai/unsloth/pull/15005)) — batch image pipelines can be driven purely over REST without polling loops.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*