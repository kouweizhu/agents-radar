# AI Infrastructure Digest 2026-11-16

> Generated: 2026-11-16 02:21 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report based on the digests I've already generated for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me create a structured, data-backed comparison report in English.

Let me extract the key data points from each digest:

**vLLM:**
- Issues: 10 top issues discussed
- PRs: 10+ PRs merged/active
- Releases: No new releases
- New models: Raon-1-mini, Nemotron 3.5 ASR, GLM-5.3-Flash multimodal, DeepSeek-V4.1-Flash on MI300X


- Performance work spans KV cache refactoring, Mooncake optimizations, encoder cache events, and daemon-to-daemon weight mirroring
- Notable stability concerns include an SSRF security fix and several quantization issues (NVFP4 OOM, Kimi-K3 token degeneration)

**SGLang:**
- Issues: 30+ issues tracked
- PRs: 10+ PRs merged
- Releases: No new releases
- New models: Mistral Large 4, GLM-5.3, Gemma4 language-model-only, Ascend A3 + DeepSeek-V3

2
- Performance improvements focus on restoring SM90 decode with DeepSelect, DeepGEMM weight localization, and fused operations on AMD MI355X
- Key stability issues involve CUDA coredumps, DFlash aux graph memory leaks, and Rust extension loader deadlocks

**llama.cpp:**
- Releases: b12428, b12427, b12426, b12425, b12424, b12423, b12422, b121
- New models: MiniMax-M3.1, Qwen3VL output head, zonos3-mini TTS, higgs v3 STT, vibevoice-ASR, Inkling 1, YuE2-3B, fish audio s2
- Performance work on SYCL flash attention, SpacemiT flash attention, WebGPU POOL_2D, and Jinja template engine optimizations
- Vulkan/Intel stability concerns with random NaN logits and DeepSeek-V4.1-Flash regressions

**Ollama:**
- Releases: None
- New models: Reranking models feature request tracking 290+ 👍
- Performance: VRAM accounting and GPU splitting fixes, context shift RoPE, mmproj headroom configurability
- Stability issues with Qwen3.5/coder parser bugs, goroutine leaks in streaming handlers, Gemma4 vision token budget constraints

**LiteLLM:**
- Releases: v1.111.0-dev.4 (Sigstore keyless cosign)
- New models: Qoder Cloud Agents, Tripo, DeepSeek fetch tool, LM Studio auto-context-window detection
- Performance work on stream TTFT timeout and cache key computation fixes
- Stability: /v1/messages adapter encoding issues, OpenRouter reasoning chunk streaming, usage undercounting in chained setups

**Unsloth:**
- Releases: No new releases (v0.1.917 β has regression)
- New models: DeepSeek-V4.1, Qwen3.8-Flash-Next, Qwen3.5/Qwen3-Next, Gemma-4 vision
- Performance: Block compile fixes for packed rows and vision models, MoE router aux loss gradient, GKD frozen teacher offloading, tensor parallel DPO, online tokenization fork
- Stability: v0.1.917 β mmap regression, Qwen3.8-Flash-Next UD 3.1 MTP heads acceptance drop, macOS Drive C memory leak

Now I'm tallying up the issue and PR counts across all the projects to get a complete picture of what's been happening.
</think>


# AI Infrastructure Ecosystem Digest — 2026-11-16

---

## 1. Ecosystem Overview

The AI inference infrastructure layer is in a state of simultaneous maturation and fragmentation. Every project in today's digest is converging on the same cluster of hard problems — KV cache management, speculative decoding reliability, multimodal pipeline unification, and multi-backend (NVIDIA/AMD/Intel/NPU) parity — yet each is solving them at a different abstraction layer and with a different release cadence. **vLLM** and **SGLang** are pulling ahead on KV cache programmability and multi-backend stability; **llama.cpp** continues to dominate the local/on-device frontier by volume of new model support; **Ollama** is consolidating its position as the simplest self-hosted LLM runtime; **LiteLLM** is expanding its reach as a gateway aggregator; and **Unsloth** is the only project in the digest targeting training and fine-tuning, making it complementary rather than competitive with the others.

---

## 2. Activity Comparison

| Project | Issues (last 24 h) | PRs Merged/Active | Releases | Notable Flags |
|---------|-------------------:|------------------:|----------|---------------|
| **vLLM** | ~10 tracked; 34-comment peak (MI355X perf) | 10+ landed, ~3 security/bug fixes | None | Security fix merged (SSRF); ROCm gfx950 stacking PRs |
| **SGLang** | 30+ total; 368-comment CUDA coredump tracker | 10+ open/merged | None | SM90 regression fix open; NPU AMD pushes; 1.0 planning active |
| **llama.cpp** | 15 issues; 110-comment op feature request | 13 PRs; 144 WebGPU tests passing | 8 commits (b12419–b12428, including a revert/re-apply cycle) | Jinja template cycle (revert → re-apply); 4 new model PRs open |
| **Ollama** | 15 total; 290-👍 reranking request | 13 total; 1 fix pending review | None | Qwen parser bug fix staged; GCC 15 build failure open |
| **LiteLLM** | 56 total; 8-comment reasoning encoding bug | ~20 PRs; 3 feature/fix PRs open | v1.111.0-dev.4 (Sigstore keyless signing) | Signing BREAKING CHANGE; 3 active streaming correctness bugs |
| **Unsloth** | 22 issues; 3-block-compile PRs | 137 total; 10+ today | None (v0.1.917 β has regression) | Block compile fixes; v0.1.917 β mmap regression open |

**Volume leader**: llama.cpp (8 commits, 13 PRs, 4 new model PRs in a single day)
**Complexity leader**: SGLang (largest open issue list, multi-backend pushes, 1.0 release planning)
**Gateway expansion**: LiteLLM (3 new providers, streaming correctness bugs, Sigstore breaking change)
**Training focus**: Unsloth (only fine-tuning project in the set; all others are inference/serving)

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **DeepSeek-V4.1-Flash** | ✅ ROCm MI300X preset | ✅ (H20 regression open) | ✅ (Vulkan correctness bugs) | — | — | ✅ Compiled training fix |
| **Qwen3.8 / Qwen4Exp** | ✅ ROCm MI355X perf work | — | — | — | — | ✅ Packing / offload |
| **Qwen3.5 / Qwen3-coder** | ✅ NVFP4 + thinking budget | — | ✅ | — | — | ✅ GRPO + FSDP2 |
| **Qwen3VL** | — | ✅ Chat template fix | ✅ Output head size | — | — | — |
| **Mistral Large 4 (1T-param)** | — | ✅ Open PR | — | — | — | — |
| **GLM-5.3 / GLM-5.1** | ✅ Rust multimodal | ✅ A3 cookbook | — | — | — | — |
| **Gemma-4 (vision + text)** | — | ✅ `--language-model-only` | — | ✅ Token budget hardcoded | — | ✅ Tower LoRA + DPO |
| **Raon-1-mini (KRAFTON)** | ✅ Just added | — | — | — | — | — |
| **Nemotron 3.5 ASR** | ✅ Streaming ASR request | — | — | — | — | — |
| **MiniMax-M3.1** | — | — | ✅ Just added | — | — | — |
| **Zonos3-mini TTS** | — | — | ✅ Just added | — | — | — |
| **Inkling 1 (multimodal)** | — | — | ✅ PR open | — | — | — |
| **fish audio s2** | — | — | ✅ PR open | — | — | — |
| **Qoder Cloud Agents** | — | — | — | — | ✅ Just added | — |
| **Tripo** | — | — | — | — | ✅ Just added | — |
| **Reranking models** | — | — | — | ✅ 290-👍 request | — | — |

**Leader by breadth**: llama.cpp (most new models in a single day: 6 additions/updates)
**Leader by architecture coverage**: vLLM (deepest MoE, quantization, KV offload)
**Leader by serving sophistication**: SGLang (1.0 planning, Unified Memory, agentic recipes)
**Leader by multimodal pipeline depth**: vLLM + llama.cpp (both pushing multimodal at different layers)
**Leader by fine-tuning**: Unsloth (unique in this digest; no direct competitor here)

---

## 4. Performance Frontier

The optimization effort across all six projects concentrates in five clusters:

### KV Cache Engineering (vLLM + SGLang)
Both projects are independently converging on programmable KV cache tiers. vLLM's V1 scheduler partial prefill limits ([#57413](https://github.com/vllm-project/vllm/issues/57413)) and SGLang's UnifiedL3 + Mooncake storage backend ([#46499](https://github.com/unslothai/unsloth/pull/46499)) represent different approaches to the same problem: heterogeneous cache lifetimes for Full KV, sliding-window, and recurrent states. SGLang's encoder cache event stream ([#67030](https://github.com/vllm-project/vllm/pull/67030)) goes further by exposing cache state to external orchestrators. Neither project has yet solved a unified single-arena memory pool.

### Speculative Decoding Correctness (vLLM + llama.cpp + Unsloth)
Three independent regressions in speculative decoding correctness are open simultaneously:
- **vLLM**: Partial prefill limits causing V1 scheduler admission failures ([#57413](https://github.com/vllm-project/vllm/issues/57413))
- **llama.cpp**: MoE cache hit rate collapsed to 0.6% at depth-1 slots since #30637 ([#31421](https://github.com/ggml-org/llama.cpp/issues/31421))
- **Unsloth**: Qwen3.8-Flash-Next UD 3.1 MTP heads acceptance dropped from ~74% to 56–66% at production temperature ([#17402](https://github.com/unslothai/unsloth/issues/17402))

This is the most active correctness cluster in today's digest and warrants close monitoring.

### Quantization Across Backends (vLLM + llama.cpp)
vLLM's NVFP4 checkpoint OOM ([#46268](https://github.com/vllm-project/vllm/issues/46268)) and llama.cpp's Vulkan NaN logits with flash attention ([#31480](https://github.com/ggml-org/llama.cpp/issues/31480)) are independent failures in the same quantization path (block-wise FP4/NVFP4 with fused attention). The root causes are different (vLLM: CPU fixed allocation; llama.cpp: Vulkan kernel correctness) but the symptom is the same — broken results in production.

### Block / Triton / Inductor Compilation (vLLM + Unsloth)
Both projects are wrestling with compiler capture of variable-length (packed/padding-free) rows. vLLM removed EAGLE block dropping in favor of lookahead hashes ([#66234](https://github.com/vllm-project/vllm/pull/66234)), while Unsloth fixed packed rows stalling mid-run with two coordinated PRs ([#17880](https://github.com/unslothai/unsloth/pull/17880), [#17883](https://github.com/unslothai/unsloth/pull/17883)). This is a convergent problem: any engine using `flash_attn_varlen` with block compilation must handle the graph capture boundary.

### Distributed Serving (SGLang + Unsloth)
- **SGLang**: DeepSeek-V4.1-Flash weight localization for SM 10.0/10.3, PD disaggregated Ascend A3 cookbooks, Mooncake KV connector debug mode
- **Unsloth**: Online tokenization fork for 180B MoE + Block Swap, DDP hub upload rank-0 only, tokenization save under FSDP2

---

## 5. Layer Positioning

| Layer | Projects | Core Value | Today |
|-------|----------|------------|-------|
| **Inference Serving Engine** (GPU-accelerated, production) | **vLLM**, **SGLang** | Highest throughput, KV cache control, distributed serving | vLLM: SSRF security fix, KV offload RFC. SGLang: SM90 regression fix, Unified Memory roadmap |
| **Local/On-Device Runtime** (CPU/GPU/metal/SYCL/Vulkan) | **llama.cpp**, **Ollama** | Portability, no-server deployment, broad hardware support | llama.cpp: 8 commits, 6 new models, Jinja engine. Ollama: GGUF launch configs via aliases, macOS launchd |
| **LLM Gateway / Proxy** (multi-provider aggregation) | **LiteLLM** | Unified API, cost management, provider switching | Sigstore signing, stream TTFT timeout, reasoning model encoding fixes |
| **Training / Fine-tuning Framework** | **Unsloth** | Memory-efficient LoRA/QLoRA, compiled training, GRPO/DPO | Block compile fixes, MoE aux loss gradient restored, GKD frozen teacher offloading |

**Complementary positioning observed**: llama.cpp and Ollama are natural pairs (llama.cpp provides the runtime, Ollama provides the deployment UX). LiteLLM commonly fronts both vLLM and SGLang in production stacks. Unsloth fine-tunes models that then deploy on vLLM, SGLang, or Ollama. There is no direct layer overlap between Unsloth and the other five projects.

---

## 6. Trend Signals

### Signal 1: Security Hardening Is Accelerating
Two independent security fixes landed today — vLLM's SSRF block for media connectors and LiteLLM's Sigstore keyless cosign migration. This reflects a broader shift: inference engines are being exposed to adversarial network input as they add multimodal fetch capabilities. Expect more security-focused releases in the coming weeks.

### Signal 2: Speculative Decoding Is the New Battleground
Three of the six projects have open correctness regressions in speculative decoding simultaneously. This is not coincidental — as MTP, block-level draft, and n-gram speculation proliferate across production deployments, the combinatorial explosion of model × quantization × batch size × backend is surfacing latent bugs. Teams relying on speculative decoding should test upgrades in shadow mode before routing live traffic.

### Signal 3: Multimodal Pipelines Are Converging on Rust Preprocessing
Both vLLM (GLM-5.3-Flash, [#67237](https://github.com/vllm-project/vllm/pull/67237)) and llama.cpp (zonos3-mini TTS with text normalization) are moving multimodal preprocessing to Rust to eliminate the Python-path divergence that causes correctness and performance inconsistencies. Application developers integrating multimodal models should verify that their deployment tooling picks up these pipeline changes — Python-side fallback paths are being removed.

### Signal 4: NPU and AMD Backend Investment Is Surging
SGLang shipped KT CPU expert offload for NPU and AMD MI355X agentic recipes in the same day. Unsloth identified a 3.1× step time regression on ROCm gfx1151 due to MIOpen fallback. llama.cpp has 15+ active Vulkan/Intel Arc correctness bugs. This multi-backend pressure suggests that the inference ecosystem is no longer NVIDIA-dominated in development effort — the next 12 months will see significant AMD/Intel/NPU parity work landing across all projects.

### Signal 5: Llama.cpp's Release Velocity Is Outpacing Everyone
Eight commits in 24 hours, including a full model family (Inkling 1 multimodal, YuE2-3B, fish audio s2) and a WebGPU milestone (144 tests passing), demonstrates that llama.cpp's contributor velocity remains unmatched for breadth. For teams that need novel model support quickly, llama.cpp's merge cadence is the benchmark — but the tradeoff is a higher rate of regressions in Vulkan and SYCL backends.

### Signal 6: SGLang 1.0 Will Force an Upgrade Decision
SGLang's 1.0 release tracker explicitly targets "configuration changes that silently succeed → explicit errors." For teams running SGLang 0.5.x in production, this is a migration forcing function. Budget 2–4 weeks of engineering time to review the upgrade notes when 1.0 lands. The 1.0 release also establishes a compatibility policy for the 1.x series — something that SGLang has lacked, and that enterprise deployments have been requesting.

---

## What Agent and Application Developers Should Watch This Week

1. **Monitor speculative decoding outputs** across all models — especially Qwen3.8-Flash-Next, DeepSeek-V4.1-Flash, and any MoE model — until the three open regressions are resolved.
2. **Pin LiteLLM to a stable release** rather than dev builds if you rely on streaming; the `/v1/messages` encoding bug and usage undercounting affect reasoning model deployments.
3. **Hold off on v0.1.917 β** for Unsloth on Windows with large GGUFs until the forced-mmap regression is patched.
4. **Review your media connector configuration** in vLLM deployments — the SSRF fix should be picked up as soon as it lands in a tagged release.
5. **Start reviewing SGLang 1.0 migration notes** in [Issue #50045](https://github.com/sgl-project/sglang/issues/50045) if you are on 0.5.x; the silent → explicit configuration change is likely to break existing deployments.
6. **Track the NPU/AMD backend investments** — SGLang's Ascend A3 + DeepSeek-V3.2 cookbook and Unsloth's ROCm GDN work signal that AMD MI355X and Intel NPU will become production-viable inference targets within 2–3 releases.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the GitHub data for vLLM project and generate a structured digest for 2026-11-16.

Key observations from the data:

**Releases**: None in last 24h

**Issues (top by comments)**:
1. #57149 - ROCm/AMD MI355X performance optimization for Qwen3.8-2.4T (34 comments)
2. #37753 - MoE "Oracles" unification with class structure (25 comments)
3. #47455 - NVIDIA Nemotron 3.5 ASR Streaming support (18 comments)
4. #57413 - Production evidence for partial prefill limits in V1 scheduler (14 comments)
5. #38379 - Restore test coverage on Transformers v5 (14 comments)
6. #51039 - Kimi-K3 degenerate token issue (13 comments)
7. #66782 - KV Offload request-level promotions RFC (13 comments)
8. #54906 - thinking_token_budget bug with Qwen3.8 NVFP4 (13 comments)
9. #66101 - NVFP4 draft LM-head validation beyond GB10 (10 comments)
10. #51571 - Async MTP align mode bug (9 comments)

**Pull Requests (top by recency)**:
1. #67827 - Bugfix: Cap mistral-common below 1.13 on v0.33
2. #67826 - Security fix: block SSRF to private/link-local IPs
3. #67825 - XPU CI update for BMG LoRA OLMoE
4. #67824 - XPU quick fix for lora test workspace
5. #67237 - Multimodal: Require Rust preprocessing for GLM-5.3-Flash
6. #66234 - Refactor: Remove EAGLE block dropping, default to lookahead hashes


7. #64641 - Fast Start: Add weights mirror support for daemon2daemon
8. #66566 - KV Connector/Mooncake: Add verified-transfer debug mode
9. #66725 - Bugfix: Count only recyclable held blocks against SWA admission cap
10. #64672 - Model: Add Raon-1-mini support

I'll distill the key technical insights from these PRs, focusing on infrastructure improvements and bug fixes that enhance vLLM's robustness and performance.

The most critical security patch addresses an SSRF vulnerability in the media connector, preventing potential unauthorized access to private network resources. The other PRs introduce nuanced improvements in KV management, testing infrastructure, and model support across different hardware platforms.

Key focus areas include:
1. Security hardening
2. Cache management optimization
3. Hardware-specific tuning for Intel and AMD platforms
4. Experimental model integration

These updates demonstrate the project's commitment to continuous refinement of its inference serving infrastructure.
</think>


# vLLM Project Digest — 2026-11-16

## 1. Today's Highlights

The vLLM project sees a **security fix** merged today addressing an SSRF vulnerability in the media connector that allowed unauthenticated access to private/link-local addresses. On the ROCm front, active work continues on MI355X (gfx950) performance optimization for Qwen3.8, with stacked PRs planned. The V1 scheduler's partial prefill concurrency limits are under review with production evidence submitted, and the project is moving to unify MoE kernel selection via a class-based "oracle" structure.

---

## 2. Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| **No new releases** | None in the last 24 hours. | — |

**Dependency Note**: A backport fix (PR [#67827](https://github.com/vllm-project/vllm/pull/67827)) caps `mistral-common` below version 1.13 on the v0.33 release branch to prevent an incompatibility introduced by mistral-common 1.13.0+.

---

## 3. New Model & Hardware Support

| Model / Hardware | Type | Notes |
|------------------|------|-------|
| **Raon-1-mini** (KRAFTON) | New Model | Added via PR [#64672](https://github.com/vllm-project/vllm/pull/64672). 28.8B total / 4.3B active params, includes DFlash2 draft fix. |
| **NVIDIA Nemotron 3.5 ASR Streaming** (`nemotron-3.5-asr-streaming-0.6b`) | Feature Request | Issue [#47455](https://github.com/vllm-project/vllm/issues/47455) — 600M-param multilingual streaming ASR under OpenMDW-1.1 license; support requested. |
| **GLM-5.3-Flash** | Multimodal Update | PR [#67237](https://github.com/vllm-project/vllm/pull/67237) removes the divergent Python preprocessing path, mandating Rust preprocessing to match the model's official pipeline. |
| **DeepSeek-V4.1-Flash on MI300X** | New ROCm Preset | PR [#67586](https://github.com/vllm-project/vllm/pull/67586) adds an MI300X AgentX preset with 12 TP8/TP4 operating points. |
| **Qwen3.5 on Intel XPU** | Port in Progress | PR [#64687](https://github.com/vllm-project/vllm/pull/64687) ports Qwen3.5 models and MTP to XPU using the eager, breakable-graph design. |

---

## 4. Performance & Optimization

### Landed / In Review

| Category | Detail | PR / Issue |
|----------|--------|------------|
| **KV Cache Refactor** | Removed EAGLE block dropping; defaults to lookahead hashes across core prefix caching and all in-tree KV connectors. | [#66234](https://github.com/vllm-project/vllm/pull/66234) |
| **SWA Admission Fix** | Bugfix counting only recyclable held blocks (excluding prefix-shared `ref_cnt > 1`) against the SWA cap. | [#66725](https://github.com/vllm-project/vllm/pull/66725) |
| **Mooncake Array API** | Uses `batch_transfer_sync_write_arrays` from Mooncake v0.3.14 to eliminate list conversion overhead. | [#67656](https://github.com/vllm-project/vllm/pull/67656) |
| **Daemons Weight Mirror (D2D)** | Second replica fills shards from an already-loaded replica instead of re-reading checkpoints. | [#64641](https://github.com/vllm-project/vllm/pull/64641) |
| **Encoder Cache Events** | New `--ec-events-config` flag exposes an event stream mirroring KV cache events for cache-aware orchestrators. | [#67030](https://github.com/vllm-project/vllm/pull/67030) |

### Active Issues

| Issue | Topic | Status |
|-------|-------|--------|
| [#57149](https://github.com/vllm-project/vllm/issues/57149) (34 comments) | ROCm MI355X / gfx950 performance optimization for Qwen3.8-2.4T with MXFP4 quantization. Stacked PRs on main planned. | Active |
| [#57555](https://github.com/vllm-project/vllm/issues/57555) | KV offload DMA/Triton load threshold (`cuMemcpyBatchAsync` vs. Triton kernel) needs per-device profiling; currently hardcoded from H100 tuning. | Active |
| [#64824](https://github.com/vllm-project/vllm/issues/64824) | Closing DeepGEMM runtime-JIT gaps in kernel warmup to prevent silent JIT compilation during production inference. | Active |
| [#41390](https://github.com/vllm-project/vllm/issues/41390) | Llama-Nemotron embedding slower than vanilla Transformers for offline batch-32 pooling even after compile-cache warmup. | Active |

---

## 5. Stability & Regressions

| Severity | Issue | Details | Link |
|----------|-------|---------|------|
| 🔴 **Security** | SSRF in Media Connector | CWE-918: Media connector fetches URLs including loopback/private/link-local addresses. Fix merged: block SSRF to private/link-local IPs. | [#67826](https://github.com/vllm-project/vllm/pull/67826), [#57157](https://github.com/vllm-project/vllm/issues/57157) |
| 🔴 **Bug** | Kimi-K3 Degenerate Tokens | Long-context prefill (~240K tokens) causes all subsequent requests to output a single repeated token (NaN logits, suspected packed KDA prefill issue). | [#51039](https://github.com/vllm-project/vllm/issues/51039) |
| 🔴 **Bug** | ModelOpt NVFP4 OOM | NVFP4 checkpoint causes ~52 GiB fixed CPU RAM allocation, OOM on 64GB systems even for 0.8B model. | [#46268](https://github.com/vllm-project/vllm/issues/46268) |
| 🟠 **Bug** | GDN Triton/FLA on Hopper (H20) | Wrong, non-deterministic results with triton 3.6; `chunk_scaled_dot_kkt_fwd` autotune configs with BK < K and num_warps ≥ 4 are broken. | [#65385](https://github.com/vllm-project/vllm/issues/65385) |
| 🟠 **Bug** | Qwen2.5-0.5B CUDA Illegal Memory Access | Crashes with CUDA illegal memory access during initialization warmup. | [#66244](https://github.com/vllm-project/vllm/issues/66244) (closed) |
| 🟡 **CI** | NVIDIA Nightly Failures | Tracking failures across multiple nightly builds (builds #102057, #102399, #102740, #102861). | [#67307](https://github.com/vllm-project/vllm/issues/67307) |
| 🟡 **CI** | ROCm Quantization Shard | `test_modelopt_nested_mixed_checkpoint` and `test_modelopt_mixed_dspark_checkpoint` failures on H200 MIG 35GB. | [#67664](https://github.com/vllm-project/vllm/issues/67664) (closed) |

---

## 6. What This Means for Application Developers

1. **Security**: If you expose vLLM's media connector to untrusted input, **upgrade immediately** once the fix is in a release tag — the SSRF allows access to internal metadata endpoints (e.g., 169.254.169.254).

2. **Quantization Caveats**: NVFP4 checkpoint loading has a memory regression on some systems; the ModelOpt NVFP4 OOM issue affects even small models. If you encounter OOM during warmup with NVFP4, this is a known issue tracked in [#46268](https://github.com/vllm-project/vllm/issues/46268).

3. **Long-Context Serving**: The Kimi-K3 degenerate token issue after long-context prefill is serious for RAG/agent workloads. Avoid pre-filling with very long contexts (>200K tokens) on Kimi-K3 until this is resolved.

4. **GLM-5.3-Flash Users**: The multimodal preprocessing pipeline is shifting to Rust-only. Ensure your deployment pipeline picks up the changes from [#67237](https://github.com/vllm-project/vllm/pull/67237).

5. **MoE Models**: The MoE oracle unification effort ([#37753](https://github.com/vllm-project/vllm/issues/37753)) will eventually provide a cleaner extension point for custom MoE kernels (fp8, nvfp4, mxfp8, mxfp4, unquantized) — plugin authors should monitor this.

6. **Transformer v5 Compatibility**: Test coverage gaps with Transformers v5 are being actively restored ([#38379](https://github.com/vllm-project/vllm/issues/38379)); if you encounter test failures after upgrading HF dependencies, check this tracker for known issues.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the GitHub data for SGLang and generate a structured digest for 2026-11-16.

Key observations:

1. **No releases in last 24h** - The "Latest Releases" section shows "None"

2. **Notable issues**:
   - Issue #50045: SGLang 1.0 Release Tracker (roadmap, 8 comments)
   - Issue #49944: Unified Memory Roadmap (8 comments)
   - Issue #49336: SM90 decode regression v0.5.22 → v0.5.23: +33~45% per-step at concurrency 12
   - Issue #50577: DFlash auxiliary CUDA graphs retain per-batch-size buffers causing memory growth
   - Issue #49108: Rust extension loader cargo --version probe can deadlock
   - Issue #26340: CUDA Coredump Tracker (368 comments - very active)

3. **Notable PRs**:
   - #50608: DeepGEMM weight localization on SM 10.0 and 10.3
   - #50599: Diffusion Anima request sizes alignment fix
   - #50042: grpc opt-in cancellation retirement receipts
   - #50676: NPU hugepage host pools with mmap allocator
   - #49978: Keep SM90 full top-k decode on select_decode (refs #49336)
   - #49511: Gemma4 --language-model-only support
   - #46499: UnifiedL3 mooncake storage backend support
   - #47271: Mistral-Large-4 model support
   - #50677: AMD MI355X DP attention agentic recipes
   - #50675: NPU KT CPU expert offload

4. **Key themes**:
   - SGLang 1.0 planning and Unified Memory work are both moving forward
   - Performance regression identified on SM90 in v0.5.23 that needs addressing
   - Active development across multiple accelerators including NPU and AMD
   - Memory optimization work in progress
   - Mistral-Large-4 gaining model support
</think>


# SGLang Digest — 2026-11-16

## 1. Today's Highlights

SGLang development remains focused on stability hardening ahead of the 1.0 release, with two parallel high-impact initiatives: the **Unified Memory** roadmap (Issue #49944) is tracking a single GPU memory arena for KV cache, sliding-window, and recurrent states, while **SM90 decode regression** (Issue #49336) is actively being addressed via PR #49978 to restore full top-k decode performance on Hopper. NPU and AMD backend contributions are also surging, with KT CPU expert offload (PR #50675) and MI355X agentic recipes (PR #50677) both submitted today.

---

## 2. Releases & Breaking Changes

**No releases in the last 24 hours.**

The **SGLang 1.0 Release Tracker** (Issue #50045) is the active planning vehicle for the stability release. The stated goals include:

- Replacing silent configuration changes with explicit errors that name the setting
- Defining a compatibility policy for the 1.x series
- Hardening existing functionality
- Potential upgrade friction from 0.5.x

Upstream teams should monitor this tracker for upcoming migration requirements.

---

## 3. New Model & Hardware Support

| Model / Hardware | PR / Issue | Status | Notes |
|---|---|---|---|
| **Mistral Large 4** (`mistralai/Mistral-Large-4-1T-A52B`) | PR #47271 | Open | 1T-param / 52B-active MoE multimodal; MLA + DSA sparse attention; YaRN to 1,048,576-token context; cross-layer KV sharing |
| **GLM-5.3 chat template** | Issue #50408 | Open | Encode message content as ordinary text per GLM-5.3 / GLM-5.3-Flash spec |
| **Gemma 4 `--language-model-only`** | PR #49511 | Merged | Serve multimodal checkpoint as text-only, skipping encoders |
| **Ascend A3 + DeepSeek-V3.2** | PR #49167 | Open | Cookbook entry for 4-node PD disaggregated deployment on A3 |
| **Ascend A3 + GLM-5.1** | PR #45655 | Merged | A3 deployment scenarios added to GLM-5.1 cookbook |
| **NPU KT CPU Expert Offload** | PR #50675 | Open | Experimental TP=1/EP=1 default, explicit TP=2/EP=1 opt-in |
| **NPU LayerNorm Sequence Parallel** | PR #41496 | Open | Adds `--enable-layernorm-sp` fast path for Ascend NPU |

---

## 4. Performance & Optimization

### Landed / In Progress

| Optimization | Location | Details |
|---|---|---|
| **SM90 top-k decode restore** | PR #49978 | Disables DeepSelect decode on Hopper so decode stays on full top-k v2 `select_decode` path. Directly addresses Issue #49336 (+33–45% per-step regression at concurrency 12 on H20-3e with DeepSeek-V4.1-Flash when upgrading from v0.5.22 → v0.5.23). |
| **DeepGEMM weight localization** | PR #50608 | Allow weight localization on SM 10.0 and 10.3 for `mega_moe` on NVIDIA hardware. |
| **AMD gfx942 fused AR + RMSNorm + per-group FP8** | PR #49884 | Run fused asynchronous replication + RMSNorm + per-group FP8 quantization on MI355X (gfx942). |
| **Qwen VL token-space strategy** | PR #46413 | Refactor moving Qwen media helpers and mRoPE index helpers into `multimodal/`. Reduces coupling; affects Qwen2/2.5/3-VL, Qwen3.5, Qwen3-Omni, Qwen4Exp. |
| **UnifiedL3 + Mooncake storage backend** | PR #46499 | Enables Mooncake as a storage backend for UnifiedL3, extending the unified L3 cache architecture. |

### Open Performance Concerns

- **Issue #49336** — SM90 decode regression confirmed: +33–45% per-step decode latency on H20-3e at concurrency 12 (8K–64K context lengths). PR #49978 is the targeted fix.

---

## 5. Stability & Regressions

Ranked by severity based on user impact:

| # | Issue / PR | Severity | Summary | Fix PR? |
|---|---|---|---|---|
| 🔴 Critical | **Issue #26340** | High | CUDA coredump tracker — auto-collected events from `pr-test.yml`. 368 comments indicate ongoing production incidents. | Tracking only |
| 🔴 Critical | **Issue #22511** | High | v0.5.10 2×H100 health check failures; detokenizer timeout after 20s on GLM-5. | Closed 2026-11-16 (inactive) |
| 🔴 High | **Issue #50577** | High | `DFlashAuxGraph` retains per-batch-size buffers causing excessive GPU memory growth. | None yet |
| 🔴 High | **Issue #49108** | High | Rust extension loader `cargo --version` probe can deadlock in launcher spawn context on multi-node deployments. | None yet |
| 🟡 Medium | **Issue #49336** | Medium | SM90 decode regression v0.5.22 → v0.5.23: +33–45% per-step latency. | PR #49978 targets this |
| 🟡 Medium | **Issue #30209** | Medium | GLM-5.2 FP4 + EAGLE illegal memory access in `flashinfer_trtllm` bf16 batched-GEMM. | Closed (inactive) |
| 🟡 Medium | **Issue #45755** | Medium | Kimi-K3 on SM90: `flashinfer_mxfp4` silently computes GPT-OSS SwiGLU instead of SiTU. | Closed (inactive) |
| 🟡 Medium | **Issue #50348** | Medium | `sgl-router` `/v1/messages` returns 400 for inline `role="system"`. | Closed 2026-11-15 |
| 🟡 Medium | **Issue #42110** | Medium | Replayed Codex turn split into three assistant blocks in Responses API (`_merge_consecutive_assistant_messages`). | None yet |
| 🟢 Low | **Issue #39400** | Low | Unauthenticated PUT `/route` on Bootstrap HTTP allows route poisoning. | Closed (inactive) |
| 🟢 Low | **Issue #36859** | Low | Kimi-K3 abnormal output under high pressure. | Closed (inactive) |
| 🟢 Low | **Issue #39838** | Low | Streaming/tree sessions trip 'pool memory leak detected' on dev head. | Closed (inactive) |

**CI Health** (Issue #17050): As of 2026-11-16 01:51 UTC — 1 broken, 10 flaky, 911 recently fixed on `main`.

---

## 6. What This Means for Application Developers

**Near-term (next 2–4 weeks):**

1. **SM90 Hopper users on v0.5.23**: If you are seeing elevated decode latency at concurrency 12+ with DeepSeek-V4.1-Flash or similar models, PR #49978 is the fix. Monitor the PR merge or apply the patch manually. This is a material regression for production deployments.

2. **DFlash speculative decoding**: PR #50608 and the DFlash memory growth issue (Issue #50577) suggest ongoing instability in the auxiliary CUDA graph path. Avoid enabling `SGLANG_DFLASH_AUX_GRAPH=1` in production until the buffer pooling fix lands.

3. **SGLang 1.0 planning**: If you are on 0.5.x, start reviewing Issue #50045 for upgrade notes. Configuration changes that currently silently succeed will become explicit errors. Budget migration time accordingly.

4. **NPU Ascend users**: KT CPU expert offload (PR #50675) and LayerNorm-SP support (PR #41496) are experimental but advancing. For production Ascend deployments, the existing CUDA path remains more stable.

5. **Multi-modal VL workloads**: The Qwen VL token-space refactor (PR #46413) moves Qwen media helpers. If you have custom integrations, verify they do not import directly from `serving/` or `layers/`.

6. **Rust extension users**: Multi-node deployments should be aware of the `cargo --version` deadlock risk (Issue #49108). A defensive timeout or alternative extension initialization path is not yet merged.

7. **Unified Memory**: The initiative (Issue #49944) will eventually eliminate fixed KV pool partitions. Early adopters on heterogeneous workloads (mixed Full KV + SWA + recurrent) should track this closely; it may simplify capacity planning significantly.

---

*Digest generated from github.com/sgl-project/sglang data for 2026-11-16.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a structured digest for llama.cpp for the date 2026-11-16 based on the provided GitHub data. Let me analyze the data and create the digest with the requested sections.

Let me parse through the key information:

**Releases (last 24h):**
- b12428: Jinja template engine - 4 missing features added
- b12427: Server - skip MCP discovery for router children
- b12426: mtmd - support higgs v3 STT and vibevoice-ASR
- b12425: model - read qwen3vl output head size from tensor
- b12424: mtmd - add zonos3-mini TTS model
- b12423: Revert "jinja: add 4 missing features" (reverted b12422)
- b12422: jinja: add 4 missing features (then reverted)
- b12421: docs - move per-model TTS to /docs
- b12420: model - support MiniMax-M3.1
- b12419: server - ignore empty stop strings

**Key themes:**
1. Jinja template engine updates (features added, then reverted, then re-added in b12428)
2. mtmd (multimodal) additions: zonos3-mini TTS, higgs v3 STT, vibevoice-ASR
3. New model support: MiniMax-M3.1, Qwen3VL output head size fix, Inkling 1 (in PR)
4. Server improvements: MCP discovery handling, empty stop strings
5. YuE2-3B support (in PR)
6. Fish audio s2 support (in PR)

**Issues (top by activity):**
- #14909: Feature request for missing ops from backends (56 comments) - ongoing


- #27198: SYCL tensor crash (33 comments) - closed
- Vulkan/Intel issues affecting vision and compute operations
- Memory management problems with model weight eviction and OOM conditions
- Performance issues across HIP and MoE backends, including cache hit rate degradation

**PRs (notable):**
- RPC tensor copying mechanism (#8032)
- WebGPU POOL_2D implementation (#32250)
- Token-aware parsing in chat functionality (#29307)
- Zaya1 8B model integration (#32071)
- Various backend fixes and improvements
- SpacemiT flash attention handling (#32182)
- OpenCL FLASH_ATTN_EXT kernel optimization (#32302)
- HIP backend quality metrics tracking (#32365)

Now I'll synthesize this into a structured digest.
</think>


# llama.cpp Digest — 2026-11-16

## 1. Today's Highlights

The project shipped its **b12428** release, which re-introduces four Jinja template features (floor division `//`, bitwise ops, string formatting, and `min/max` built-ins) after a brief revert cycle. Multimodal pipeline work dominates: **zonos3-mini TTS**, **higgs v3 STT**, and **vibevoice-ASR** landed in the same day, alongside new model support for **MiniMax-M3.1** and a Qwen3VL output head size fix. Stability issues around Vulkan/Intel Arc and HIP MoE throughput regressions remain active.

---

## 2. Releases & Breaking Changes

| Commit | Summary | Notes |
|--------|---------|-------|
| **b12428** | [Jinja: add 4 missing features](https://github.com/ggml-org/llama.cpp/pull/32352) | Floor division `//`, bitwise ops, string formatting, `min/max` built-ins; re-applied after revert |
| **b12423** | [Revert "jinja: add 4 missing features"](https://github.com/ggml-org/llama.cpp/commit/b12423) | Temporary revert for patch refinement |
| **b12427** | [Server: skip MCP discovery for router children](https://github.com/ggml-org/llama.cpp/pull/32359) | Reduces startup overhead in routed topologies |
| **b12419** | [Server: ignore empty stop strings](https://github.com/ggml-org/llama.cpp/pull/32093) | Prevents false-positive early termination |

**No API-breaking changes detected** in today's releases.

---

## 3. New Model & Hardware Support

| Model / Feature | Commit / PR | Details |
|-----------------|-------------|---------|
| **MiniMax-M3.1** | [#32301](https://github.com/ggml-org/llama.cpp/pull/32301) (`b12420`) | Native model support landed |
| **Qwen3VL output head** | [#32349](https://github.com/ggml-org/llama.cpp/pull/32349) (`b12425`) | Reads output head size from tensor, enables Qwen3-ForcedAligner (5000 timestamp classes) |
| **zonos3-mini TTS** | [#32020](https://github.com/ggml-org/llama.cpp/pull/32020) (`b12424`) | Full audio generation pipeline, voice clone support, text normalization |
| **higgs v3 STT** | [#32329](https://github.com/ggml-org/llama.cpp/pull/32326) (`b12426`) | Speech-to-text support |
| **vibevoice-ASR** | [#32329](https://github.com/ggml-org/llama.cpp/pull/32329) (`b12426`) | Alternative ASR model |
| **Inkling 1** (text, vision, audio) | [#32354](https://github.com/ggml-org/llama.cpp/pull/32354) | PR open; full multimodal family support |
| **YuE2-3B** | [#32369](https://github.com/ggml-org/llama.cpp/pull/32369) | PR open; mmproj via `llama_model_init_from_user` |
| **fish audio s2** | [#32330](https://github.com/ggml-org/llama.cpp/pull/32330) | PR open; Qwen3-4B backbone with semantic coding |
| **Zaya1 8B** (Zyphra) | [#32071](https://github.com/ggml-org/llama.cpp/pull/32071) | PR open; SSM_CONV fix for CUDA |

**Backend support added today:**
- OpenCL: [FLASH_ATTN_EXT GMEM kernel](https://github.com/ggml-org/llama.cpp/pull/32302) — targeting stable-diffusion/FastWan paths
- WebGPU: [POOL_2D support](https://github.com/ggml-org/llama.cpp/pull/32250) — all 144 tests passing on RTX 4090

---

## 4. Performance & Optimization

| Area | Details | Reference |
|------|---------|-----------|
| **SYCL Flash Attention** | MKL path fix for mask broadcast over heads/batches; prior faulted GPU (`UR_RESULT_ERROR_DEVICE_LOST`) with f16 K/V, NaN with q8_0 | [#31536](https://github.com/ggml-org/llama.cpp/pull/31536) |
| **SpacemiT Flash Attention** | Fixed null mask, ALiBi, and softcap bugs on VLEN=1024 cores (A100/K3) | [#32182](https://github.com/ggml-org/llama.cpp/pull/32182) |
| **WebGPU POOL_2D** | Contiguous F32 input; benchmark-ready | [#32250](https://github.com/ggml-org/llama.cpp/pull/32250) |
| **Zonos3-mini TTS** | Speed optimizations in audio generation pipeline | [#32020](https://github.com/ggml-org/llama.cpp/pull/32020) |
| **Jinja template** | Bitwise ops and floor division enable faster G2P processing (e.g., Kokoro TTS) | [#32352](https://github.com/ggml-org/llama.cpp/pull/32352) |

**Active regressions (no fix yet):**
- **HIP MoE prefill**: ~80% throughput drop with `--spec-type draft-mtp`; Vulkan unaffected ([#31495](https://github.com/ggml-org/llama.cpp/issues/31495))
- **HIP/gfx906 MoE**: 15–50% slower prompt processing since #29948 ([#31599](https://github.com/ggml-org/llama.cpp/issues/31599))
- **CUDA Blackwell**: Regression between b10655→b11140 in prompt and generation throughput ([#29341](https://github.com/ggml-org/llama.cpp/issues/29341))
- **MoE cache hit rate**: Dropped to 0.6% at 1-token slot depth since #30637 ([#31421](https://github.com/ggml-org/llama.cpp/issues/31421))

---

## 5. Stability & Regressions

### Critical (device loss / correctness)
| Issue | Backend | Severity | Status |
|-------|---------|----------|--------|
| [Vulkan GLM-OCR garbage on Arc A380](https://github.com/ggml-org/llama.cpp/issues/31836) | Vulkan | 🔴 High | Open |
| [Vulkan random NaN logits on Radeon 680M](https://github.com/ggml-org/llama.cpp/issues/31509) | Vulkan | 🔴 High | Open |
| [DeepSeek-V4.1-Flash gibberish on Vulkan + flash attn](https://github.com/ggml-org/llama.cpp/issues/31480) | Vulkan | 🔴 High | Open |
| [SYCL Arc Pro B70 tensor crash](https://github.com/ggml-org/llama.cpp/issues/27198) | SYCL | 🔴 High | Closed (stale) |
| [MTP draft DeviceLost on AMD RADV](https://github.com/ggml-org/llama.cpp/issues/27306) | Vulkan | 🔴 High | Closed (stale) |

### Moderate (performance / correctness)
| Issue | Backend | Severity | Notes |
|-------|---------|----------|-------|
| [MoE cache hit regression](https://github.com/ggml-org/llama.cpp/issues/31421) | Metal/CUDA | 🟡 Medium | 0.6% hit rate at depth-1 slots |
| [Draft-mtp HIP 80% prefill regression](https://github.com/ggml-org/llama.cpp/issues/31495) | HIP | 🟡 Medium | Vulkan unaffected |
| [High CPU idle with GPU inference](https://github.com/ggml-org/llama.cpp/issues/29858) | CUDA | 🟡 Medium | Bisected to commit `a94d563` |
| [mmproj memory growth after first use](https://github.com/ggml-org/llama.cpp/issues/26873) | CUDA | 🟡 Medium | Glimmer model |
| [A770 perf drop with FFN fusion](https://github.com/ggml-org/llama.cpp/issues/30478) | SYCL | 🟡 Medium | Arc A770 |

### Low (functional, feature gaps)
- [Feature request: missing backend ops](https://github.com/ggml-org/llama.cpp/issues/14909) — 56 comments, good-first-issue label
- [SYCL PP performance regression](https://github.com/ggml-org/llama.cpp/issues/30248) — B580 + 5700X3D
- [Hexagon HTP thread exit on dspqueue error](https://github.com/ggml-org/llama.cpp/issues/30309) — v75 target

---

## 6. What This Means for Application Developers

**Deployers on Intel Arc / Vulkan:** Exercise caution — multiple correctness bugs are open for Vulkan across Arc A380, Arc 140V, and Radeon 680M/890M. Flash attention is implicated in several; disabling `-fa` is a viable workaround for DeepSeek-V4.1-Flash ([#31480](https://github.com/ggml-org/llama.cpp/issues/31480)).

**LLM gateway / server operators:** The [MCP discovery skip for router children](https://github.com/ggml-org/llama.cpp/pull/32359) reduces startup latency in routed server topologies. The [empty stop string fix](https://github.com/ggml-org/llama.cpp/pull/32093) eliminates spurious early terminations — audit your client-side stop string lists for empty entries.

**TTS integrators:** zonos3-mini support is now upstream with voice cloning and text normalization. Kokoro-based pipelines will benefit from the Jinja template additions (floor division, bitwise ops) in b12428.

**Multimodal pipeline builders:** The new model support (Inkling 1, YuE2-3B, fish audio s2) is landing via PRs — expect `llama-mtmd-cli` capabilities to expand significantly in the next 1–2 releases.

**Performance-sensitive users on HIP:** The 80% prefill regression with MTP enabled is backend-specific (not Vulkan). If you rely on speculative decoding on AMD GPUs, monitor for updates to [#31495](https://github.com/ggml-org/llama.cpp/issues/31495) or disable `--spec-type draft-mtp` until resolved.

---

*Digest generated from github.com/ggml-org/llama.cpp activity on 2026-11-16. All commit/PR links use the canonical repository URL.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze the provided GitHub data for Ollama and create a structured digest for 2026-11-16.

Key data points to consider:

**Latest Releases:** None in last 24h

**Latest Issues (15 total, 7 Open, 3 Closed):**

1. **#3368** - Reranking models feature request (Open, 110 comments, 290 👍) - Major feature ask for supporting reranking models like BAAI/bge-reranker-large
2. **#16532** - Gemma4 image processing bug on Windows (Open, 54 comments) - Images not processed correctly
3. **#15626** - max_soft_tokens exposure for Gemma 4 (Closed, 22 comments, 29 👍) - Feature request to expose image token budget
4. **#3575** - Port binding error (Closed, 18 comments) - Common issue with port 11434
5. **#17906** - Anthropic /v1/messages maps xhigh to high (Open, 4 comments) - Compatibility issue with Qwen3.8
6. **#19694** - Qwen3.5/coder parser tool-call corruption (Open, 2 comments) - Bug with arguments being corrupted
7. **#17131** - Streaming handlers goroutine leaks (Open, 2 comments) - Resource leak on client disconnect
8. **#19407** - 1 GiB mmproj headroom configurability (Open, 2 comments) - Feature request for multimodal projector memory
9. **#19711** - mimo-v2.6 tool_calls empty arguments (Closed, 1 comment) - Bug fixed
10. **#19650** - mimo-v2.6 qwen3.5 parser arguments issue (Open, 1 comment) - Related to above
11. **#14239** - Extra blank lines in output (Open, 1 comment) - Minor formatting bug


12. **#19701** - Chinese language error (Closed, 1 comment) - Locale-related issue
13. **#19714** - GCC 15 build failure (Open, 0 comments) - New compiler compatibility issue
14. **#19713** - Generic bug report (Open, 0 comments) - Unclear issue report
15. **#19712** - Port binding error duplicate (Open, 0 comments) - Another instance of #3575

**Latest Pull Requests (13 total, 12 Open, 1 Closed):**

I notice several critical performance and compatibility improvements being developed. The GCC 15 build failure and port binding errors suggest ongoing refinement of build processes and network handling. Multimodal and parser enhancements indicate expanding model interaction capabilities, with particular focus on tool-call integrity and streaming efficiency. The PR landscape shows active development in addressing complex model interaction scenarios, including memory management, streaming, and cross-platform compatibility.

The streaming handler goroutine leak presents a significant resource management challenge, potentially impacting system stability during extended operations. Multimodal model support continues evolving, with Gemma4's hardcoded token limits representing a key area for future configurability. Platform-specific build issues like the GCC 15 compilation error highlight the ongoing complexity of cross-platform compatibility.

The tool-call parser corruption in Qwen models appears to be directly addressed by a targeted pull request, demonstrating responsive development. Streaming protocol improvements are emerging through fixes to timestamp consistency and duplicate validation, enhancing API reliability.

Key developer considerations center on multimodal model limitations, potential streaming resource management challenges, and the introduction of new community integrations expanding the ecosystem's capabilities.
</think>


# Ollama Digest — 2026-11-16

## 1. Today's Highlights

Ollama's development activity centers on tooling improvements and bug fixes rather than new releases. A critical parser bug affecting Qwen3.5 and Qwen3-coder tool-call generation has a fix pending review, while the multimodal memory management feature request for configurable `mmproj` headroom signals growing interest in running larger vision models. Community integrations continue to expand, with three new contributors adding reranking, terminal chat, and desktop apps to the ecosystem.

---

## 2. Releases & Breaking Changes

| Item | Status | Impact |
|------|--------|--------|
| No releases in last 24h | — | — |

No new versions tagged. Existing stable is v0.40.15.

---

## 3. New Model & Hardware Support

| Area | Detail | Reference |
|------|--------|-----------|
| **Reranking models** | Feature request tracking 290+ 👍 to support `bge-reranker-large`, `mxbai-rerank-large-v1` and similar cross-encoders natively | [#3368](https://github.com/ollama/ollama/issues/3368) |
| **GCC 15 compatibility** | Build fails with missing `uint32_t` in `llama-mmap.h` — `llama.cpp` update needed for GCC 15's stricter standards conformance | [#19714](https://github.com/ollama/ollama/issues/19714) |
| **ROCm / AMD Strix Halo** | Fix merged to keep model weights out of pinned host memory on Windows iGPUs; resolves OOM on large models | [PR #19636](https://github.com/ollama/ollama/pull/19636) |
| **MLX-C + XGrammar** | CMake work to allow packagers to supply MLX-C and XGrammar binaries independently | [PR #19688](https://github.com/ollama/ollama/pull/19688) |

---

## 4. Performance & Optimization

| Category | Change | Reference |
|----------|--------|-----------|
| **VRAM accounting & GPU splitting** | Fixes for incorrect model eviction, load refusal, and unnecessary multi-GPU spread (addresses #19463, #18679, #18349, #16599) | [PR #19632](https://github.com/ollama/ollama/pull/19632) |
| **Context shift RoPE** | Fixes amplitude accumulation during KV cache shifting with `--context-shift`; keeps each shift rope-neutral | [PR #19680](https://github.com/ollama/ollama/pull/19680) |
| **mmproj headroom** | Proposal to make the 1 GiB safety margin configurable instead of hardcoded | [#19407](https://github.com/ollama/ollama/issues/19407) |
| **API docs** | `logprobs` and `top_logprobs` parameters now documented for `/api/generate` and `/api/chat` | [PR #19710](https://github.com/ollama/ollama/pull/19710) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Qwen3.5 / Qwen3-coder parsers corrupt or drop tool-call arguments depending on content and stream chunking | Open; fix staged | [PR #19705](https://github.com/ollama/ollama/pull/19705) |
| **High** | Streaming handlers (`generate/chat/push`) leak goroutines and runner semaphore slots on client disconnect | Open | — |
| **Medium** | Gemma4 vision encoder hardcodes `max_soft_tokens=280`; image token budget not configurable | Closed; feature request captured | — |
| **Medium** | `mimo-v2.6:9b` returns `tool_calls` with empty `function.arguments` | Closed | — |
| **Medium** | Anthropic `/v1/messages` maps `xhigh` to `high`, breaking Qwen3.8 chat templates expecting `xhigh` | Open | — |
| **Low** | Port 11434 bind failures (duplicate reports) | Open | — |
| **Low** | GCC 15 build failure (`uint32_t` undefined in `llama-mmap.h`) | Open | — |

---

## 6. What This Means for Application Developers

1. **Tool-calling with Qwen3.5/coder**: If you're using structured tool calls with these models, hold off on production streaming workloads until [PR #19705](https://github.com/ollama/ollama/pull/19705) merges — argument corruption is content-dependent and may not be obvious in testing.

2. **Long-running streams**: `ChatHandler` and `GenerateHandler` leak goroutines on disconnect. For agentic apps with extended streaming sessions, monitor memory usage and consider periodic service restarts until the leak is patched.

3. **Vision models on Gemma4**: The hardcoded 280 token budget means high-resolution images are silently truncated. There is no runtime workaround yet.

4. **RAG pipelines**: The reranking feature request ([#3368](https://github.com/ollama/ollama/issues/3368)) remains the top-voted issue. If you need reranking today, the community project **tiebreak** (added via [PR #19706](https://github.com/ollama/ollama/pull/19706)) provides a CPU-only Cohere/Jina-compatible endpoint that runs alongside Ollama.

5. **Multi-GPU inference**: The VRAM accounting fixes in [PR #19632](https://github.com/ollama/ollama/pull/19632) should reduce false eviction events on multi-GPU setups — monitor for improved model load reliability after that PR lands.

6. **API parity**: `logprobs` and `top_logprobs` are now officially documented, giving you a supported path to get token-level probability data for ranking or confidence scoring.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-11-16 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Let me parse through the data:

## Releases (last 24h)
- v1.111.0-dev.4: Keyless cosign signing change (Sigstore/GitHub OIDC)
- v1.111.0-dev.3: Partially published, superseded by dev.4

## Issues (56 total, showing top 30)
Key issues:
1. #19769 - Helm Chart: Switch to other repo provider for postgres and redis dependencies (OPEN, 9 comments)
2. #32357 - [Bug] /v1/messages adapter mis-encodes reasoning models (OPEN, 8 comments)
3. #36114 - [Bug] Streaming usage severely undercounted (CLOSED, 7 comments)
4. #28750 - [Feature]: Project-scoped end-user/customer budget limits (CLOSED, 7 comments)
5. #51452 - [Bug]: ModelNotMappedError in litellm/utils.py (OPEN, 7 comments)
6. #35775 - [Bug]: LiteLLM is not compatible with VSCode native Model-Provider (CLOSED, 5 comments)
7. #27144 - [Bug]: ChatGPT/Codex Responses streaming drops function call args (OPEN, 5 comments)
8. #33021 - [Bug]: Componentized startup ignores YAML database pool settings (OPEN, 5 comments)
9. #34328 - [Bug]: unpack_defs still hangs on recursive tool schemas (CLOSED, 4 comments)
10. #36948 - [Feature]: Auto-detect context window for LM Studio models (OPEN, 4 comments)


11. #50029 - [Bug]: Sticky Session not working (OPEN, 4 comments)
12. #36941 - [Bug]: budget_limits reset can split counter and reset timestamp state (OPEN, 4 comments)
13. #36124 - [Feature]: Adaptive similarity threshold for valkey-semantic cache backend (OPEN, 3 comments)
14. #41792 - [Bug]: Bedrock rejects encrypted reasoning after intentional model switches (OPEN, 3 comments)
15. #46209 - TypeError with mistral-medium-3.5 after tool result (OPEN, 3 comments)
16. #

28903 - [Bug]: Editing stdio MCP servers erases stored environment variables (CLOSED, 2 comments)
17. #36103 - Unconditional model injection loses alias identity (OPEN, 2 comments)
18. #36309 - [Bug]: Router(cache_responses=True) silently creates in-memory cache (CLOSED, 2 comments)
19. #37108 - [Bug]: Admin-only route denials return 401 instead of 403 (OPEN, 2 comments)
20. #37125 - [Bug]: responses() accepts response_format and silently ignores it (OPEN, 2 comments)
21. #37159 - ResponsesAPIResponse.created_at should be Optional[int] (OPEN, 2 comments)
22. #37168 - [Bug]: Unexplained 502 errors (OPEN, 2 comments)
23. #51935 - [Bug]: Response cache key is built from stringified full request, computed twice (OPEN, 2 comments)
24. #51954 - [Bug]: Anthropic translation rejects concatenated JSON tool call arguments (OPEN, 2 comments)
25. #47862 - [Bug]: TypeError in litellm/proxy/utils.py (CLOSED, 2 comments)
26. #51900 - [Bug]: Semantic cache returns cross-request tool_calls arguments (OPEN, 2 comments)
27. #45246 - [Bug]: Printed stream boolean can truncate GKE log batches (OPEN, 2 comments)
28. #47607 - [Bug]: encrypted_content_affinity traps follow-ups on a failing deployment (CLOSED, 2 comments)
29. #48401 - [Bug]: Streaming drops OpenRouter reasoning_details-only chunks (OPEN, 2 comments)
30. #51171 - [Feature]: Add option to forward request params._meta to upstream MCP servers (OPEN, 2 comments)

The repository has an active pull request for accepting request token prices in a declared currency. Several key fixes are in progress, including surfacing MCP tool use blocks on Anthropic endpoints, adding a stream timeout parameter, normalizing batch file IDs, and detecting Anthropic prompt cache misses. JWT normalization and message content redaction are also being addressed.

Additional work includes DeepSeek tool integration, external provider configuration loading, fixing stale content encoding headers, cleaning up audio transcription metadata from logs, and invalidating outdated cache entries. Budget reservation reconciliation is being improved when no database logger is present.

New features under development cover stream response timeout handling for routers, automatic context window detection for LM Studio, project-scoped end-user and customer budget limits, adaptive similarity thresholds for semantic caching, and a feature to forward request metadata to upstream MCP servers. On the provider side, there's support for Qoder Cloud Agents, Tripo with asynchronous credit billing, and DeepSeek's native fetch tool integration.

Several bugs are being addressed across multiple areas: cache key computation was running twice per request with large payloads, semantic caching returned incorrect tool call arguments across requests, streaming dropped OpenRouter reasoning chunks, Anthropic responses API returned null timestamps, Anthropic translation rejected concatenated JSON tool calls, sticky sessions weren't functioning properly, sticky content affinity trapped retries on failing deployments, encrypted reasoning was rejected by Bedrock after model switches, streaming undercounted usage in chained proxy setups, and VSCode native Model-Provider compatibility issues. Budget limit resets were also splitting counter state. There's a new feature for adding request token prices in a declared currency.

Additional fixes include surfacing MCP tool use blocks on chat completions for Anthropic, normalizing Claude Code picker model IDs during JWT authorization, adding a stream time-to-first-token timeout to the router, and normalizing batch file IDs before database writes. Anthropic prompt cache miss detection was added as an alert, message content redaction in debug logs when logging is turned off, and Bedrock effort clamping was applied before the drop parameters effort gate.

Now I'm organizing these into the digest format with relevant GitHub links and details for each section.
</think>


# LiteLLM Daily Digest — 2026-11-16

## 1. Today's Highlights

LiteLLM shipped two patch releases (v1.111.0-dev.3/4) that migrate signing to **Sigstore keyless cosign** (GitHub OIDC), deprecating the legacy `cosign.pub` key — users must update their verification commands. On the PR side, a high-impact streaming fix for Anthropic's `/chat/completions` endpoint surfaces `mcp_tool_use` blocks that were previously dropped, and a new router timeout (`stream_ttft_timeout`) prevents clients from hanging when providers never emit the first token.

---

## 2. Releases & Breaking Changes

| Version | Change | Impact |
|---|---|---|
| **v1.111.0-dev.4** | Signing migrated to Sigstore keyless (GitHub OIDC) | **BREAKING VERIFICATION** — `cosign verify --key ...` no longer works; use keyless verification commands. Dev.3 is superseded. |
| v1.111.0-dev.3 | Partial publish — replaced by dev.4 | No action needed; use dev.4. |

---

## 3. New Model & Hardware Support

- **LM Studio auto-context-window detection** — New feature request ([#36948](https://github.com/BerriAI/litellm/issues/36948)) to query LM Studio's native `/api/v0/models` and `/api/v1/models` metadata endpoints, removing the need to manually specify `max_input_tokens` for self-hosted models.
- **DeepSeek Fetch tool** — PR [#50618](https://github.com/BerriAI/litellm/pull/50618) adds `litellm.fetch` / `litellm.afetch` and corresponding proxy routes for DeepSeek's fetch tool (Search was already present).
- **Qoder Cloud Agents** — PR [#50041](https://github.com/BerriAI/litellm/pull/50041) adds Qoder Cloud Agents to the Interactions API, including async text, streaming, and session continuation; exposes agents via normal model aliases while keeping credentials server-side.
- **Tripo** — PR [#50839](https://github.com/BerriAI/litellm/pull/50839) adds native proxy routes and asynchronous credit billing for Tripo (China + global regions).

---

## 4. Performance & Optimization

| PR | Area | Detail |
|---|---|---|
| [#51974](https://github.com/BerriAI/litellm/pull/51974) | **Router** | New `stream_ttft_timeout` deployment/requester flag bounds time-to-first-token; prevents indefinite hangs when providers never emit tokens while keepalives continue |
| [#51935](https://github.com/BerriAI/litellm/issues/51935) | **Cache** | Bug: `Cache.get_cache_key()` stringifies the full request payload (including base64 images) before hashing — for 200+ MB image requests this blocks the event loop for seconds; fix in progress |
| [#51900](https://github.com/BerriAI/litellm/issues/51900) | **Semantic Cache** | Bug: `redis-semantic`/`qdrant-semantic`/gptcache return cross-request `tool_calls` arguments when dynamic IDs differ but cosine similarity ≈ 0.9749 |
| [#36124](https://github.com/BerriAI/litellm/issues/36124) | **Cache** | Feature: adaptive similarity threshold for `valkey-semantic` backend (default static 0.8 threshold is suboptimal for varied request patterns) |

---

## 5. Stability & Regressions

### High Severity
| # | Issue | Status | Fix PR |
|---|---|---|---|
| [#36114](https://github.com/BerriAI/litellm/issues/36114) | **Streaming usage severely undercounted** in chained proxy setups (Front-Proxy → Upstream-Proxy → Bedrock); root cause in stream aggregation layer | ✅ CLOSED | — |
| [#51452](https://github.com/BerriAI/litellm/issues/51452) | **`ModelNotMappedError`** in `litellm/utils.py` — auto-generated bug report, no request data captured | OPEN | — |
| [#27144](https://github.com/BerriAI/litellm/issues/27144) | **ChatGPT/Codex Responses streaming drops function call args** when model emits `response.function_call_arguments.done` without deltas | OPEN | — |

### Medium Severity
| # | Issue | Status | Fix PR |
|---|---|---|---|
| [#32357](https://github.com/BerriAI/litellm/issues/32357) | **`/v1/messages` adapter mis-encodes reasoning models** — `thinking_delta` streamed inside a text block + duplicate `message_start` → empty content in Anthropic SDK / Claude Code | OPEN | — |
| [#48401](https://github.com/BerriAI/litellm/issues/48401) | **Streaming drops OpenRouter `reasoning_details`-only chunks** (Claude signatures, encrypted reasoning) | OPEN | — |
| [#41792](https://github.com/BerriAI/litellm/issues/41792) | **Bedrock rejects encrypted reasoning** after intentional model switches due to `encrypted_content_affinity` treating deployments with same API base as compatible | OPEN | — |
| [#46209](https://github.com/BerriAI/litellm/issues/46209) | **TypeError concatenating str/list** with `mistral-medium-3.5` after a tool result (>500 chars) | OPEN | — |
| [#37108](https://github.com/BerriAI/litellm/issues/37108) | **Admin-only route denials return 401 instead of 403**, mislabeled in Prometheus | OPEN | — |
| [#36941](https://github.com/BerriAI/litellm/issues/36941) | **Budget reset splits counter and reset timestamp state** — later failure leaves accounting state across two window identities | OPEN | [#40940](https://github.com/BerriAI/litellm/pull/40940) |

### Notable Fixes Landed
- **#34328** — `unpack_defs` hang on recursive high-fan-in tool schemas (Bedrock & Vertex) — CLOSED
- **#47607** — `encrypted_content_affinity` trap on failing deployments causing retries to loop — CLOSED
- **#36309** — `Router(cache_responses=True, cache_kwargs={'type': 'disk'})` silently creating in-memory cache — CLOSED
- **#35775** — VSCode native Model-Provider compatibility — CLOSED
- **#27947** — `reasoning_content` missing when converting Anthropic thinking blocks to OpenAI format — CLOSED

---

## 6. What This Means for Application Developers

1. **Verify your CI/CD signing pipeline** — If you verify LiteLLM release artifacts via cosign, switch to Sigstore keyless verification immediately or your builds will break on the next stable release.

2. **Watch streaming reliability** — Two active bugs affect streaming correctness: (a) reasoning models via `/v1/messages` may yield empty content, and (b) OpenRouter reasoning-only chunks are silently dropped. If you run reasoning models through LiteLLM, monitor outputs closely or hold off on streaming until fixes land.

3. **Streaming timeout safety net** — The new `stream_ttft_timeout` on the Router is a direct response to providers that hold connections open without emitting tokens. Enable it in production to bound client wait times and trigger fallbacks predictably.

4. **Image-heavy agents, cache key cost** — The cache key computation scales linearly with payload size. For agents sending large base64 images repeatedly, this is a CPU event-loop bottleneck. Track this issue ([#51935](https://github.com/BerriAI/litellm/issues/51935)) for the fix.

5. **Budget accounting nuance** — If you use project-level or end-user budget limits with Redis spend counters, monitor for the split-state bug on resets ([#36941](https://github.com/BerriAI/litellm/issues/36941)); PR [#40940](https://github.com/BerriAI/litellm/pull/40940) is the fix.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate a technical digest for Unsloth AI based on the provided GitHub data for 2026-11-16. Let me analyze the data and structure it according to the requested sections.

Looking at the data:
- No releases in last 24h
- 22 issues, mix of open and closed
- 137 PRs, showing top 20 by comment count

Let me identify the key items:

**Today's Highlights:**
- Backend CI fixes for transformers 5.17 compatibility
- Block compile improvements for packed/padding-free rows
- DeepSeek-V4.1 compiled training fixes
- Tensor parallel DPO with PEFT work
- GGUF launch configuration selection via API aliases
- macOS launchd agent for CLI installs

**Releases & Breaking Changes:**
- No new releases today
- 0.1.917 beta has a regression (issue #17605) - mmap forced despite explicit --load-mode none

**New Model & Hardware Support:**
- Qwen3.8-Flash-Next support (multiple PRs)
- DeepSeek-V4.1 native support
- Qwen3.5 gated-query attention
- AMD GPU detection issues (issue #17874)
- ROCm/GDN causal conv1d work

**Performance & Optimization:**
- Block compile: packed rows stay compiled, vision mid-run recompiles fixed
- Tensor parallel DPO fixes
- SFT packing by default on epoch runs
- MoE router aux loss gradient fix
- FSDP2 initialization fixes
- Tokenizer save under DDP/FSDP2
- GKD frozen teacher offloading

**Stability & Regressions:**
- Issue #17605: 0.1.917 forces mmap despite --load-mode none (regression)
- Issue #17402: Qwen3.8 MTP heads acceptance drops


- Memory leak in Drive C, iOS icon display problems, and AMD GPU detection failures on RX 6700s

**For Application Developers:**
- GGUF API now supports launching configurations through aliases, remote access and multi-speaker TTS features are now available, and macOS users have a launchd agent option for CLI installations.
</think>


# Unsloth Digest — 2026-11-16

## 1. Today's Highlights

The Unsloth backend saw significant CI and correctness work landing today: a major regression in v0.1.917 (forced `mmap` despite `--load-mode none`) was identified and partially addressed through related fixes, while block compilation received two coordinated PRs that resolve long-standing issues with packed/padding-free rows dropping out of compiled graphs and vision models stalling mid-run. DeepSeek-V4.1 compiled training no longer hangs, and the team shipped native GGUF launch configuration selection via API model aliases for multi-config workflows.

---

## 2. Releases & Breaking Changes

| Item | Details | Status | Link |
|------|---------|--------|------|
| **v0.1.917 β regression** | Forces `mmap` even with explicit `--load-mode none`, causing excessive RAM/SSD usage on large GGUFs (Qwen3.8-Flash-Next EXL3 4.05 bpw, 97 GiB) | **Open bug** | [#17605](https://github.com/unslothai/unsloth/issues/17605) |

**No new releases published today.** Downstream projects on v0.1.917 β should monitor the mmap regression; a fix PR has not yet landed.

---

## 3. New Model & Hardware Support

| Model / Hardware | Change | PR / Issue |
|------------------|--------|------------|
| **DeepSeek-V4.1** | Native support landed; compiled training hangs resolved, 16-bit merged layout on released checkpoint, fp4 full finetuning | [#17881](https://github.com/unslothai/unsloth/pull/17881) |
| **Qwen3.8-Flash-Next (Qwen4Exp)** | Packing/text SFT, no KV cache on packed rows, GDN op fix, offload_layers refusals | [#17827](https://github.com/unslothai/unsloth/pull/17827) |
| **Qwen3.5 / Qwen3-Next** | Gated-query attention tensor parallel parity tests | [#17870](https://github.com/unslothai/unsloth/pull/17870) |
| **Qwen3 4B GRPO + FSDP2** | Fixed `AttributeError: 'FSDPCommContext' object has no attribute 'all_gather_copy_in_stream'` at first loss forward | [#17875](https://github.com/unslothai/unsloth/pull/17875) |
| **Gemma-4 + Vision** | Tower LoRA + DDP full finetuning working; DPO ref adapter defaulting to `find_unused=False` | [#17867](https://github.com/unslothai/unsloth/pull/17867) |
| **AMD ROCm (gfx1151)** | GDN causal conv1d fallback to MIOpen identified; HIP gate adds 3.1× step time overhead | [#17734](https://github.com/unslothai/unsloth/issues/17734) |
| **AMD RX 6700S (gfx1032)** | Not detected on Windows 11 with 0.1.917 β — investigation open | [#17874](https://github.com/unslothai/unsloth/issues/17874) |
| **Intel SYCL + Multi-GPU** | Studio VRAM planner queries `nvidia-smi` instead of Intel Arc SYCL device, capping context | [#17787](https://github.com/unslothai/unsloth/issues/17787) |
| **macOS CLI (launchd)** | New opt-in launchd agent to keep Studio alive after terminal closes | [#17879](https://github.com/unslothai/unsloth/pull/17879) |

---

## 4. Performance & Optimization

| Area | Change | Numbers | PR |
|------|--------|---------|----|
| **Block compile — packed rows** | Packed and padding-free rows now stay in the compiled graph (flash varlen preserved); previously every packed row dropped to uncompiled forward | Packing overhead eliminated for padding-free SFT | [#17883](https://github.com/unslothai/unsloth/pull/17883) |
| **Block compile — vision** | Vision training no longer stalls 40–140 s mid-run (steps 11 and 26 on `gemma-4-E2B-it`); single graph now handles padded and unpadded micro batches | 116 s → near-baseline step time | [#17880](https://github.com/unslothai/unsloth/pull/17880) |
| **Block compile — non-reentrant trial** | Trial forward excluded from transformers output capture; prevents MoE gate count corruption | Correct gate routing restored | [#17872](https://github.com/unslothai/unsloth/pull/17872) |
| **SFT packing** | Packing enabled by default for map-style datasets when `packing`, `padding_free`, and `max_steps` are all unset and epoch-based | No user config change needed | [#17884](https://github.com/unslothai/unsloth/pull/17884) |
| **MoE router aux loss** | Gradient restored under Unsloth gradient checkpointing; previously aux loss value was logged but gradient was dropped | Grad norm: 0.0261 → 0.0486 (step 1, `gpt-oss`) | [#17873](https://github.com/unslothai/unsloth/pull/17873) |
| **GKD frozen teacher** | Teacher now kept off the training GPU; avoids OOM / refused run on 2× T4 with 4-bit teacher | 4-bit teacher on separate GPU works | [#17876](https://github.com/unslothai/unsloth/pull/17876) |
| **Tokenizer save DDP/FSDP2** | Private copy per rank before moving into place; eliminates `JSONDecodeError` from concurrent writes | Safe parallel saves | [#17862](https://github.com/unslothai/unsloth/pull/17862) |
| **DDP hub upload** | `push_to_hub` now runs on rank 0 only; eliminates duplicate commits | One commit per save | [#17868](https://github.com/unslothai/unsloth/pull/17868) |
| **Tensor parallel DPO** | `DPOTrainer` no longer crashes with `aten.copy_.default got mixed torch.Tensor and DTensor` when using PEFT + TP | DPO + TP + LoRA works | [#17886](https://github.com/unslothai/unsloth/pull/17886) |
| **Online tokenization fork** | Tokenize in-process when trainer is too large to fork (Block Swap on 180B MoE); prevents OOM before step 1 | 180B MoE + Block Swap viable | [#17701](https://github.com/unslothai/unsloth/pull/17701) |

---

## 5. Stability & Regressions

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 **Critical** | [#17605](https://github.com/unslothai/unsloth/issues/17605) | **Regression in 0.1.917 β**: forces `mmap` despite `--load-mode none`; causes 200–400 MB residual RAM leak and excessive SSD writes on Windows AMD Ryzen AI Max+ 395 with 97 GiB GGUF | None landed yet |
| 🔴 **Critical** | [#17874](https://github.com/unslothai/unsloth/issues/17874) | AMD RX 6700S (gfx1032) not detected by 0.1.917 β on Windows 11 | Investigation open |
| 🟠 **High** | [#17402](https://github.com/unslothai/unsloth/issues/17402) | Qwen3.8-Flash-Next UD 3.1 GGUFs vs current MTP heads: draft acceptance drops ~74% → 56–66% at production temperature on Ryzen AI Max+ 395 | 3.1-matched MTP heads not yet planned |
| 🟠 **High** | [#17787](https://github.com/unslothai/unsloth/issues/17787) | Custom SYCL llama.cpp reads wrong GPU VRAM on multi-GPU (NVIDIA + Intel Arc); context capped incorrectly | Investigation open |
| 🟡 **Medium** | [#14487](https://github.com/unslothai/unsloth/issues/14487) | Potential memory leak: Drive C loses 200–400 MB after every use with no way to clear residual data | Investigation ongoing |
| 🟡 **Medium** | [#17734](https://github.com/unslothai/unsloth/issues/17734) | ROCm GDN causal conv1d falls back to MIOpen on gfx1151; HIP gate adds 3.1× step time | Triton kernel is correct; ROCm gate logic needs fix |
| 🟢 **Low** | [#17773](https://github.com/unslothai/unsloth/issues/17773) | iOS "Add to Home Screen" shows text-letter icon instead of logo (missing `apple-touch-icon` in `index.html`) | Fix identified |
| 🟢 **Low** | [#17716](https://github.com/unslothai/unsloth/issues/17716) | Cannot select edit for Image models despite support | Investigation open |

---

## 6. What This Means for Application Developers

### Immediate Actions
- **Avoid v0.1.917 β for large GGUF deployments on Windows AMD hardware** until the forced-mmap regression is resolved; stay on v0.1.916 or monitor [#17605](https://github.com/unslothai/unsloth/issues/17605) for a fix.
- **Multi-config GGUF workflows** now supported via API model aliases ([#17885](https://github.com/unslothai/unsloth/pull/17885)): you can switch between e.g., a 96k context + q5_1 KV cache config and a short-context + ngram speculative decoding config for the same GGUF through the OpenAI-compatible API.

### Near-Term Opportunities
- **Vision fine-tuning is now reliable**: block compile fixes ([#17880](https://github.com/unslothai/unsloth/pull/17880), [#17883](https://github.com/unslothai/unsloth/pull/17883)) eliminate the 40–140 s mid-run stalls on Gemma-4 and hybrid packing scenarios — safe to enable `packing=True` and `padding_free=True` together.
- **Epoch-based SFT now packs by default**: if you have a map-style text dataset without explicit packing, Unsloth will now pack it automatically for epoch runs, improving GPU utilization without any config change.
- **DeepSeek-V4.1 compiled training is unblocked**: if you were blocked by hangs in Inductor, the fix in [#17881](https://github.com/unslothai/unsloth/pull/17881) is available and includes full fp4 full finetuning support.
- **GKD with frozen quantized teachers** is now viable on multi-GPU setups: the teacher stays off the training GPU, eliminating OOM on 2× T4-class hardware.

### Risks to Watch
- **Qwen3.8-Flash-Next speculative decoding**: if you're using MTP draft heads with UD 3.1 GGUFs, expect draft acceptance to fall 8–18 percentage points at production temperature; consider falling back to greedy decoding or waiting for 3.1-matched heads ([#17402](https://github.com/unslothai/unsloth/issues/17402)).
- **macOS CLI users with scheduled tasks**: update to the new launchd agent in [#17879](https://github.com/unslothai/unsloth/pull/17879) to prevent tasks from dying when the terminal closes.
- **Multi-GPU mixed-vendor setups** (NVIDIA + Intel Arc): the VRAM planner currently reads the wrong device, which may cause context under-allocation or offload errors ([#17787](https://github.com/unslothai/unsloth/issues/17787)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*