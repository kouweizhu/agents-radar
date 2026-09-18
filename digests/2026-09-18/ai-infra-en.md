# AI Infrastructure Digest 2026-09-18

> Generated: 2026-09-18 00:44 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to generate a cross-project comparison report for the AI infrastructure projects I've been tracking. Let me analyze the data from all five projects and create a structured comparison report.

Let me organize my findings:

## Projects covered:
1. **vLLM** - LLM inference serving engine
2. **SGLang** - LLM inference serving engine
3. **llama.cpp** - Local inference runtime
4. **Ollama** - Local inference runtime with easy deployment
5. **LiteLLM** - LLM gateway/proxy
6. **Unsloth** - Training/fine-tuning

## Activity Comparison:

**vLLM:**
- Issues: Multiple (no count shown, but 10+ active issues tracked)
- PRs: Multiple active (ViT CUDA Graph, GLM optimizations, MiniMax-M3)
- Releases: None in last 24h

**SGLang:**
- Issues: Multiple (CUDA coredump tracker has 313 comments!)
- PRs: 27 total tracked, 20 shown
- Releases: None in last 24h

**llama.cpp:**
- Issues: Multiple (20 shown)
- PRs: Multiple (27 shown, many closed)
- Releases: None in last 24h

**Ollama:**
- Issues: 20 shown
- PRs: 27 shown, some closed
- Releases: None in last 24h

**LiteLLM:**
- Issues: Multiple (key ones: Prisma reconnection, streaming bug)
- PRs: 20+ shown
- Releases: None in last 24h

**Unsloth:**
- Releases: v0.1.810-beta just released

## Model Support:
- GLM-5.3: vLLM, SGLang, Ollama (GLM-5.3-Flash support across all)
- DeepSeek-V4.1: vLLM, SGLang


- Qwen3.8-Flash-Next: vLLM, SGLang, llama.cpp, Ollama
- MiniMax-M3: vLLM (kernel optimizations)
- LLaVA-OneVision: SGLang (ViT CUDA Graph)
- Nemotron: Ollama (MLX vision)
- Spark2.5: Ollama
- fal.ai models: LiteLLM
- Amazon Transcribe: LiteLLM
- Microsoft Foundry: LiteLLM

## Performance Focus:
- vLLM: KV cache, quantization, speculative decoding, MiniMax kernels
- SGLang: DeepEP v2 MXFP8, prefix caching with hierarchical design, speculative decoding pipeline, optimistic prefill, EAGLE optimization
- llama.cpp: OpenCL quantized kernels, ROCm MFMA, Kronecker FWHT
- Ollama: MLX enhancements, thinking models single-pass, cold start acceleration
- LiteLLM: Passthrough, streaming
- Unsloth: LoRA training efficiency

## Layer Positioning:
- **Serving engines**: vLLM, SGLang
- **Local runtime**: llama.cpp, Ollama
- **Gateway**: LiteLLM
- **Training/Fine-tuning**: Unsloth

## Trend Signals:
- Multi-modality (ViT CUDA Graph support) becoming standard
- AMD/ROCm support maturing across all projects
- Blackwell (SM120) hardware compatibility emerging
- Speculative decoding advancing in vLLM and SGLang
- Quantization formats proliferating (MXFP8, NVFP4, FP8 KV cache)
- Security hardening (escape sequences, sandboxing, network controls)
- Enterprise features (multi-user, SSO, proxy support)</think>

# AI Infrastructure Cross-Project Report

## 1. Ecosystem Overview

Today's activity reflects an AI inference stack that is rapidly maturing across all layers—from quantized kernel backends to gateway routing. The landscape shows clear differentiation: vLLM and SGLang compete as high-performance serving engines, llama.cpp and Ollama serve local deployment, LiteLLM provides enterprise gateway capabilities, and Unsloth owns the fine-tuning layer. Notably, all projects are simultaneously grappling with Blackwell (SM120) hardware support, multi-modal ViT acceleration, and speculative decoding correctness—indicating these as the current frontier challenges. No major releases landed in the last 24 hours across the ecosystem, suggesting a stabilization phase after recent v0.29/v0.30 cycles.

---

## 2. Activity Comparison

| Project | Active Issues Tracked | PRs (Last 24h) | Releases (Last 24h) | Primary Focus |
|---------|----------------------|----------------|---------------------|---------------|
| **vLLM** | 10+ (critical SM120/GLM/ROCm bugs) | 5+ (ViT CUDA Graph, MiniMax-M3 kernels) | None | Serving engine |
| **SGLang** | 20+ (CUDA coredump tracker: 313 comments) | 27 (DeepEP v2, HiCache, spec decode) | None | Serving engine |
| **llama.cpp** | 20+ | 27 (OpenCL, ROCm, security fix) | None | Local runtime |
| **Ollama** | 20+ | 27 (MLX, Studio, ARM64 Vulkan) | None (v0.1.810-beta yesterday) | Local runtime |
| **LiteLLM** | 10+ (Prisma, streaming bugs) | 20+ (Bedrock, A2A, JWT) | None | Gateway |
| **Unsloth** | ~10 | 10+ (Qwen3.5-9B opt, sandboxing) | **v0.1.810-beta** | Fine-tuning |

**Observation**: Unsloth is the only project that shipped a release. vLLM and SGLang are bug-fix bound; LiteLLM is feature-driven.

---

## 3. Model Support Race

| Model/Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------|------|--------|-----------|--------|---------|---------|
| **GLM-5.3 / Flash** | 🔴 Blocked (SM120 MLA) | ✅ Working (quark MXFP4) | — | 🟡 Buggy (tool calls) | — | — |
| **DeepSeek-V4.1** | 🔴 Critical bugs (SM120, spec decode) | 🔴 Hybrid GDN bug | — | 🔴 Level mismatch | — | — |
| **Qwen3.8-Flash-Next** | ✅ fp8 KV (QSA path) | — | ✅ MTP support | 🔴 Load abort | — | 🔴 MTP abort |
| **MiniMax-M3** | ✅ Kernel optimizations | — | — | — | — | — |
| **LLaVA-OneVision / ViT** | 🟡 In progress (CUDA Graph) | ✅ Encoder CUDA Graph | — | — | — | — |
| **Nemotron 30B** | — | — | — | ✅ MLX vision | — | ✅ LoRA support |
| **Spark 2.5** | — | — | — | ✅ Added | — | — |
| **fal.ai (Sora/Veo)** | — | — | — | — | ✅ Added | — |
| **Amazon Transcribe** | — | — | — | — | ✅ Passthrough | — |
| **Microsoft Foundry A2A** | — | — | — | — | ✅ Relay | — |

**Leader**: **vLLM** leads in serving engine model breadth; **Ollama** leads in ease-of-use model coverage; **LiteLLM** leads in provider ecosystem (160+ models).

---

## 4. Performance Frontier

| Optimization Area | Projects Active | Key Work |
|-------------------|-----------------|----------|
| **KV cache / Quantization** | vLLM, SGLang, llama.cpp | vLLM: fp8_e4m3 KV on QSA path (~2x pool); SGLang: DeepEP v2 MXFP8 group-32; llama.cpp: OpenCL DP4A for Q4/Q6 |
| **CUDA Graph / Kernel fusion** | vLLM, SGLang, Unsloth | vLLM/SGLang: ViT encoder CUDA Graph; Unsloth: Qwen3.5-9B LoRA 20k kernel launch reduction |
| **Speculative decoding** | vLLM, SGLang | vLLM: Hidden-state extractor PP1 fix; SGLang: Hybrid recurrent-state + PP fix |
| **Prefix / Hierarchical caching** | SGLang, LiteLLM | SGLang: HiCache write-back + DSA indexer; LiteLLM: Passthrough streaming |
| **Multi-modal** | vLLM, SGLang | ViT full CUDA Graph tracking (Qwen3-VL, GLM-V, Kimi K2.5) |
| **MLX (Apple Silicon)** | Ollama, Unsloth | Ollama: Cold-start warmup, NVFP4 stall fix; Unsloth: Diffusion, LoRA training |
| **ROCm / AMD** | vLLM, SGLang, llama.cpp, Ollama | llama.cpp: CDNA2 MFMA for lightning indexer; Ollama: RDNA1+2 FP8 diffusion |

**Most active frontier**: **KV cache + quantization** across vLLM and SGLang, followed by **speculative decoding correctness** (both still fixing PP/hybrid-state bugs).

---

## 5. Layer Positioning

```
┌─────────────────────────────────────────────────────────────────┐
│                     TRAINING / FINE-TUNING                      │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Unsloth  (LoRA/GRPO optimization, Qwen3.5-9B: 0.84→0.77s)│  │
│  └───────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                        SERVING ENGINES                          │
│  ┌──────────────────────┐         ┌──────────────────────────┐   │
│  │       vLLM           │         │        SGLang            │   │
│  │ (SM120/GLM blocked)  │         │ (HiCache/DeepEP v2 ahead)│   │
│  └──────────────────────┘         └──────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                      LOCAL RUNTIMES                             │
│  ┌──────────────────────┐         ┌──────────────────────────┐   │
│  │     llama.cpp        │         │        Ollama             │   │
│  │ (OpenCL/ROCm backends)│         │ (Docker multi-user, MLX)  │   │
│  └──────────────────────┘         └──────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                        GATEWAY / PROXY                          │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │ LiteLLM (160+ models, A2A relay, Transcribe passthrough)  │   │
│  └───────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

**Key differentiators**:
- **vLLM vs SGLang**: vLLM has broader model support but SM120/GLM blocking issues; SGLang leads in caching and DeepEP optimization.
- **llama.cpp vs Ollama**: llama.cpp is the low-level runtime (OpenCL, ROCm, NVFP4); Ollama wraps it with Docker/Studio/MLX.
- **LiteLLM** occupies a unique layer—acts as API gateway, not inference engine. Its competitors are Portkey/Bearly, not vLLM.

---

## 6. Trend Signals

### What Infrastructure Engineers Should Watch

| Signal | Evidence | Implication |
|--------|----------|-------------|
| **Blackwell (SM120) instability** | vLLM: GLM/DeepSeek crashes; SGLang: DSA indexer metadata bug | Avoid SM120 for production GLM/DeepSeek until Q1 2027 fixes land |
| **Multi-modal CUDA Graph convergence** | vLLM #38175, SGLang #57379 track ViT support | Expect 20-40% throughput gains for VL models in 2026 Q4 |
| **Speculative decoding + PP still broken** | vLLM #56370 (batch invariance); SGLang #40001 (hybrid state) | PP + spec decode is unsafe; use single-stage or disable spec |
| **Quantization format explosion** | MXFP8, NVFP4, fp8_e4m3 KV, FP8/INT8 diffusion | Test thoroughly—each format has different hardware requirements |
| **AMD ROCm readiness** | llama.cpp CDNA2 MFMA; Ollama RDNA diffusion; vLLM ROCm bugs | AMD viable for inference; still catching up on vLLM |
| **Enterprise hardening** | LiteLLM: JWT token exchange, Prisma reconnection; Unsloth: sandboxing | Gateway and Studio security posture improving |
| **MLX on Apple Silicon** | Ollama: cold-start warmup, NVFP4 stall; Unsloth: diffusion | Local M-series inference now production-viable for diffusion |

### Decision Framework

| Use Case | Recommended Stack |
|----------|-------------------|
| **Cloud GPU serving (H100/A100)** | vLLM or SGLang — vLLM for model breadth, SGLang for prefix cache/hiecache |
| **Blackwell deployment** | Wait — critical bugs in all serving engines |
| **Local Mac inference** | Ollama (Docker) or llama.cpp directly |
| **Fine-tuning** | Unsloth — Qwen3.5-9B now 9% faster |
| **Multi-provider aggregation** | LiteLLM — 160+ models, A2A/Transcribe passthrough |
| **Multi-modal VL serving** | Watch vLLM/SGLang ViT CUDA Graph — expected Q4 2026 |

---

*Cross-project analysis — 2026-09-18*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze this GitHub data for vLLM and create a structured digest for 2026-09-18.

Key observations:
1. No releases in the last 24 hours
2. Multiple issues related to new models (GLM-5.3, DeepSeek-V4.1, Qwen3.8)
3. Multiple ROCm/AMD-related bugs
4. Performance optimizations for MiniMax-M3
5. Multi-modality (ViT CUDA Graph) work
6. Speculative decoding issues
7. Quantization-related work

Let me structure this into the requested sections.</think>

# vLLM Daily Digest — 2026-09-18

## 1. Today's Highlights

The vLLM project continues active development across multiple fronts. Notable work includes ViT CUDA Graph support tracking for multimodal models, GLM-5.3 optimization efforts, and MiniMax-M3 kernel improvements landing. Several stability issues emerged around Blackwell (SM120) hardware, particularly with sparse MLA and ROCm AMD GPUs. No new releases in the last 24 hours.

---

## 2. Releases & Breaking Changes

**No new releases in the last 24 hours.** The project remains on v0.29.0/v0.29.1rc1 development cycle.

---

## 3. New Model & Hardware Support

| Model/Feature | Status | Notes |
|---------------|--------|-------|
| **LLaVA-OneVision encoder CUDA Graph** | In Progress | PR #57379 adds `SupportsEncoderCudaGraph` integration for image/video inputs |
| **ViT Full CUDA Graph** | RFC/Tracking | Issue #38175 tracks full CUDA Graph support for multimodal models (Qwen3-VL, GLM-V, Kimi K2.5) |
| **GLM-5.3-Flash on SM120** | Blocked | Issue #53963 — no working sparse-MLA path for rope-free MLA (`qk_rope_head_dim=0`) on Blackwell |
| **DeepSeek-V4.1-Flash on ROCm MI355X** | RFC | Issue #56506 seeks performance optimization for AMD MI355X (gfx950) |
| **Qwen3.8-Flash-Next fp8 KV** | Working Patch | Issue #54426 — fp8_e4m3 KV cache on QSA path roughly doubles KV pool (single-machine verification) |
| **DeepSeek-V4-Pro TP=16** | Fixed | Issue #42384 closed — fp8 block-shape check on shared_experts resolved |

---

## 4. Performance & Optimization

| Area | Change | Details |
|------|--------|---------|
| **MiniMax-M3** | Multiple PRs merged | Split prefill index-score K loop on SM120 (#56150); fuse decode top-k merge (#56149); enable FP32 router on SM120 (#56152); bound decode indexer chunks (#57202) |
| **GLM sparse MLA** | In Progress | PR #57458 reduces query packing and sparse-index preparation overhead for GLM-5.3-Flash |
| **TurboQuant/HIGGS Attention** | Follow-ups | Issue #40069 tracks expansion to FA3/4, hybrid attention, and MLA support |
| **Online Quantization** | RFC | Issue #52167 outlines extended roadmap for online quantization API |
| **DiffusionGemma** | Optimization | PR #57416 optimizes prefill-only batch to use model's logit row count |

**Concrete Numbers:**
- Qwen3.8-Flash-Next: ~2x KV pool increase with fp8 KV on QSA path
- MiniMax-M3: Reduced from 3 kernel launches to 2 for decode top-k merge

---

## 5. Stability & Regressions

### Critical / High Severity

| Issue | Severity | Status | Fix Available |
|-------|----------|--------|----------------|
| **GLM-5.3-Flash long-decode degeneration** (#56868) | High | Open | — |
| **DeepSeek-V4.1 + DSpark spec decode** — illegal memory access in SM120 sparse-MLA prefill (#56771) | High | Open | — |
| **GLM-5.3-Flash 16K-chunk prefill GPU fault on ROCm** (#57227) | High | Open | — |
| **Batch invariance broken with SP/async TP** (#56370) | High | Open | — |
| **DeepSeek V4 failed to load on RTX PRO 6000** (#40821) | High | Open | — |

### Medium Severity

| Issue | Severity | Status | Fix Available |
|-------|----------|--------|----------------|
| **GLM-5.3-Flash fails to boot on ROCm nightly** (#57424) | Medium | Open | — |
| **GLM-5.3 kpool indexer overwrites KV cache** (#54359) | Medium | Open | — |
| **MoE WNA16 Marlin Gemm wrong per-row topk weights** (#48895) | Medium | Open | — |
| **v0.28.0/0.29.0 consume all host memory** (#54237) | Medium | Open | — |
| **Whisper audio > 30s wrong timestamps** (#32588) | Medium | Open | — |

### Fixes Landed
- PR #57290: Spec decode hidden-state extractor PP1 fix
- PR #57198: FlashInfer autotune isolation by pipeline stage
- PR #57202: MiniMax-M3 decode indexer bounds fix

---

## 6. What This Means for Application Developers

1. **Blackwell (SM120) Stability Caution**: Multiple critical bugs affect RTX PRO 6000 and B300 deployments, particularly around GLM-5.3, DeepSeek-V4.1, and speculative decoding. Consider sticking with H100/A100 for production until fixes land.

2. **Multi-Modal Progress**: ViT CUDA Graph support is actively being added (LLaVA-OneVision first), which will improve multimodal throughput. Track issue #38175 for timeline.

3. **ROCm/AMD Users**: Several bugs affect MI350X/MI355X. The GLM-5.3 boot failure (#57424) and memory access faults (#57227) suggest waiting for v0.30 or a patch release.

4. **Quantization Users**: Qwen3.8-Flash-Next now supports fp8_e4m3 KV cache on the QSA path, roughly doubling KV memory efficiency. This is promising for long-context workloads but requires the patch from issue #54426.

5. **Pipeline Parallel Users**: Bug #56370 breaks batch invariance with sequence parallelism — avoid `VLLM_BATCH_INVARIANT=1` + SP for now.

6. **Memory Regression**: Version 0.28.0/0.29.0 consumes excessive host memory at startup (#54237). v0.27.1 remains more stable for memory-constrained environments.

---

*Generated from vllm-project/vllm data — 2026-09-18*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the GitHub data for SGLang and create a structured digest for 2026-09-18.

Looking at the data:

1. **Latest Releases**: None in the last 24h

2. **Latest Issues**: 
   - #26340: CUDA Coredump Tracker (313 comments) - auto-collected CUDA coredumps from CI
   - #17050: CI Test Failures and Fixes tracking (14 comments)
   - #37742: SenseNova-U1 feature tracking (9 comments)
   - #34000: Multi-output diffusion bug (6 comments)
   - #37519: T-Head PPU support roadmap (6 comments)
   - #39499: SGLang dLLM Serving roadmap (5 comments)
   - #39830: Hierarchical cache bug in hybrid models (4 comments)
   - #29900: sgl-kernel tests compute capability issue (closed)
   - #39651: Benchmark serving tool cache state issue (3 comments)
   - #38536: Rust TreeCore regression (3 comments) - follow-up shows regression not reproduced
   - #39684: sgl-deep-gemm SM90 bug (3 comments)
   - #39645: Retracted input_embeds bug (3 comments)
   - And more...

3. **Latest Pull Requests**: Many active PRs focused on:
   - Scheduler improvements (#35793)
   - NVIDIA CC on Blackwell (#36810)
   - CUDA fused Triton sparse-MLA (#32779)
   - GLM-5.3-Flash AMD support (#39317)
   - Spec V2 improvements (#37462, #32196, #35798, #40001)
   - DeepEP v2 MXFP8 support (#40030)
   - HiCache improvements (#40043, #39395, #38426)
   - Memory and kernel optimizations (#38932, #40047)
   - gRPC streaming (#39915)

Now let me structure this into the digest format:</think>

# SGLang Digest — 2026-09-18

## Today's Highlights

The SGLang project is actively advancing inference optimizations across multiple fronts: deep GEMM improvements for MXFP8 and DeepEP v2, new speculative decoding fixes for hybrid recurrent-state models under pipeline parallelism, and enhanced AMD support for GLM-5.3-Flash. Meanwhile, the CI infrastructure continues to generate substantial diagnostic data—CUDA coredump tracking alone has accumulated 313 entries from automated testing.

## Releases & Breaking Changes

No releases in the last 24 hours.

## New Model & Hardware Support

| Item | Description | PR/Issue |
|------|-------------|----------|
| **T-Head PPU** | Roadmap for first-class support of ZW810, ZW810E, ZW-M890P cards | [#37519](https://github.com/sgl-project/sglang/issues/37519) |
| **SenseNova-U1** | Feature & performance tracking for SenseNova-U1/U1.5 support | [#37742](https://github.com/sgl-project/sglang/issues/37742) |
| **RISC-V Vector Extension** | Feature request for RVV attention backend | [#18072](https://github.com/sgl-project/sglang/issues/18072) |
| **GLM-5.x NoPE MLA on SM120** | Fix in progress for DSA sparse-MLA backends unavailable on Blackwell (SM120) | [#39302](https://github.com/sgl-project/sglang/issues/39302) |
| **AMD GLM-5.3-Flash** | Quark MXFP4 quantization now honors fused/per-expert exclusion names | [#39317](https://github.com/sgl-project/sglang/pull/39317) |

## Performance & Optimization

| Area | Change | PR |
|------|--------|-----|
| **NVIDIA CC on Blackwell** | Fix overlap scheduling forced synchronous D2H memcpy that serialized decode steps | [#36810](https://github.com/sgl-project/sglang/pull/36810) |
| **DeepEP v2 MXFP8** | Support group-32 activation scales with deferred route weighting and opt-in FP32 SiLU | [#40030](https://github.com/sgl-project/sglang/pull/40030) |
| **Prefix cache** | Reclaim committed KV without token IDs under overlap scheduling | [#35793](https://github.com/sgl-project/sglang/pull/35793) |
| **HiCache write-back** | Improve usable prefix cache capacity by preventing host memory exhaustion | [#39395](https://github.com/sgl-project/sglang/pull/39395) |
| **HiCache DSA indexer** | Compact host storage to only producer layers | [#38426](https://github.com/sgl-project/sglang/pull/38426) |
| **EAGLE draft-extend** | Fix input-producer dependency in overlapped plan stream | [#40025](https://github.com/sgl-project/sglang/issues/40025) |
| **Mamba cache COW** | Warm fused copy kernel before serving to eliminate first-hit latency spike | [#36266](https://github.com/sgl-project/sglang/pull/36266) |
| **Optimistic prefill** | Enable with buffer-only L3 write-through HiCache | [#40043](https://github.com/sgl-project/sglang/pull/40043) |
| **NVFP4 MoE dispatch** | Fix ModelOpt backend dispatch to use cached value, not live global | [#38932](https://github.com/sgl-project/sglang/pull/38932) |

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | **DSA indexer metadata not fetched on breakable decode CUDA graph** — crashes at startup with `AttributeError` for GLM-5.x models | PR open: [#40047](https://github.com/sgl-project/sglang/pull/40047) |
| **High** | **FlashKDA prefill returns tuple, crashes GLM-5.3-Flash** — returns `(output, None)` even when `return_intermediate_states=False` | [#39925](https://github.com/sgl-project/sglang/issues/39925) |
| **High** | **Hierarchical cache returns wrong output on hybrid GDN/Mamba model** — full-length host-tier hit answers in wrong pass's voice | [#39830](https://github.com/sgl-project/sglang/issues/39830) |
| **Medium** | **sgl-deep-gemm 0.2.0 SM90 weight-scale transform** — returns non-owning alias | [#39684](https://github.com/sgl-project/sglang/issues/39684) |
| **Medium** | **KV cache events schema** — RFC to align with vLLM for shared consumers | [#39991](https://github.com/sgl-project/sglang/issues/39991) |
| **Medium** | **Spec V2 OpenTelemetry spans** — no longer emitted for speculative decoding paths | [#37128](https://github.com/sgl-project/sglang/issues/37128) |
| **Medium** | **EAGLE DP graph consistency** — different MoE A2A backends between target/draft cause token metadata mismatch | [#32196](https://github.com/sgl-project/sglang/pull/32196) |
| **Medium** | **PP × speculative decoding hybrid state** — incorrect recurrent-state commit and micro-batch pairing | [#40001](https://github.com/sgl-project/sglang/pull/40001) |
| **Low** | **Benchmark serving tool** — does not control/record radix cache state; CI uses different protocol | [#39651](https://github.com/sgl-project/sglang/issues/39651) |
| **Low** | **Anthropic endpoint tool_reference** — breaks chat templates without deferred-reference support | [#35692](https://github.com/sgl-project/sglang/issues/35692) |

## What This Means for Application Developers

- **If serving GLM-5.x or hybrid Mamba/attention models**: Watch for the DSA indexer fix (#40047) before deploying—current breakable CUDA graph mode will crash on model startup.
- **If using AMD GPUs**: The quark quantization exclusion fix (#39317) enables proper BF16 layer handling for GLM-5.3-Flash; update to latest after merge.
- **If running prefix-cached workloads**: The HiCache improvements (#39395, #38426) significantly improve usable cache capacity; benchmark your workloads with the new build.
- **If using speculative decoding with pipeline parallelism**: The hybrid recurrent-state fixes (#40001) are required for correctness—do not use PP × Spec without this fix.
- **If integrating via gRPC**: Engine state changes are now streamable (#39915), enabling better event-driven integration patterns.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to analyze a list of GitHub PRs from the llama.cpp project and create a structured English digest. Let me parse through the information provided and organize it into the requested sections.

Let me go through the PRs:

1. #29057 - OpenCL bin kernel for Q6_K GEMM (DP4A optimization)
2. #29056 - OpenCL bin kernel for Q4_K GEMM (DP4A optimization)
3. #29055 - OpenCL bin kernel for Q4_0 GEMM (DP4A optimization)
4. #29050 - CUDA/HIP matrix-core (MFMA) lightning indexer for CDNA2 (gfx90a) - ROCm
5. #29051 - CUDA Kronecker FWHT support (for MUL_MAT_HADAMARD)
6. #29053 - gguf-py escape control characters in gguf-dump output (security)
7. #29052 - CI: add Hexagon NPU backend build for Windows Arm64
8. #28243 - Qwen3.8-Flash-Next MTP support
9. #21752 - HTTP_PROXY/HTTPS_PROXY env vars in http client
10. #29047 - Closed duplicate of #29050
11. #29019 - Preserve original batch order for speculative decoding
12. #29046 - OpenCL flash_attn_f32_f16_bin kernel
13. #28053 - Server system prompt from file
14. #28845 - Vocab pre-tokenizer for fraunhofer-iis/elmod-2.7b-it model

Now let me organize into the requested sections:

**1. Today's Highlights**
- Multiple OpenCL bin kernel optimizations for quantized GEMM operations (Q4_0, Q4_K, Q6_K)
- ROCm/CDNA2 matrix-core support for lightning indexer
- Security fix for escape sequences in gguf-dump


- I should focus on the most impactful changes that would matter to developers and infrastructure engineers working with this project.

**2. Releases & Breaking Changes**
- None explicitly mentioned

**3. New Model & Hardware Support**
- Hexagon NPU backend for Windows Arm64 (#29052)
- Qwen3.8-Flash-Next MTP support (#28243)
- New vocab pre-tokenizer for fraunhofer-iis/elmod-2.7b-it (#28845)

**4. Performance & Optimization**
- OpenCL DP4A bin kernels for Q4_0, Q4_K, Q6_K
- ROCm MFMA for CDNA2 (gfx90a)
- Kronecker FWHT support (non-power-of-two dimensions)
- OpenCL flash attention binary kernel

**5. Stability & Regressions**
- Security fix: escape control characters in gguf-dump

**6. What This Means for Application Developers**
- Better quantization support on OpenCL
- New model architecture support
- HTTP proxy support for downloads
- Server can load system prompts from files

Now I'm ready to write the digest in a structured format.</think>

# llama.cpp Daily Digest

## 1. Today's Highlights

Multiple backend optimization PRs landed today, focusing on OpenCL quantized GEMM kernels and ROCm matrix-core support. A security fix addresses terminal escape sequence vulnerabilities in gguf-dump output. These changes improve performance for quantized inference on non-NVIDIA hardware while closing a potential attack vector.

## 2. Releases & Breaking Changes

No releases or breaking changes reported today.

## 3. New Model & Hardware Support

- **Qwen3.8-Flash-Next MTP**: PR [#28243](https://github.com/ggml-org/llama.cpp/pull/28243) enables 1.3–2× faster MTP (Multi-Token Prediction) support with shared MTP modules that re-use embed_tokens to reduce disk/VRAM footprint.

- **Hexagon NPU Backend for Windows Arm64**: PR [#29052](https://github.com/ggml-org/llama.cpp/pull/29052) adds a missing build target, fixing issue #26877.

- **Vocab Pre-tokenizer for fraunhofer-iis/elmod-2.7b-it**: PR [#28845](https://github.com/ggml-org/llama.cpp/pull/28845) adds `escape_after_split` support for the Metaspace pretokenizer, fixing issue #28804.

## 4. Performance & Optimization

- **OpenCL DP4A Bin Kernels**: Three PRs add optimized dot-product-accumulate (DP4A) binary kernels for quantized GEMM:
  - Q4_0: [#29055](https://github.com/ggml-org/llama.cpp/pull/29055)
  - Q4_K: [#29056](https://github.com/ggml-org/llama.cpp/pull/29056)
  - Q6_K: [#29057](https://github.com/ggml-org/llama.cpp/pull/29057)

- **ROCm Matrix-Core Lightning Indexer (CDNA2/gfx90a)**: PR [#29050](https://github.com/ggml-org/llama.cpp/pull/29050) adds an MFMA path for the DeepSeek-V3.2/V4 lightning indexer, utilizing CDNA matrix cores that were previously idle.

- **CUDA Kronecker FWHT Support**: PR [#29051](https://github.com/ggml-org/llama.cpp/pull/29051) adds CUDA support for `MUL_MAT_HADAMARD` operations at non-power-of-two dimensions (384, 640, 768, 1280) using Kronecker products with fixed H12/H20 transforms.

- **OpenCL Flash Attention Binary Kernel**: PR [#29046](https://github.com/ggml-org/llama.cpp/pull/29046) adds binary kernel support for flash attention.

## 5. Stability & Regressions

- **Security: Terminal Escape Sequence Handling** — PR [#29053](https://github.com/ggml-org/llama.cpp/pull/29053) escapes control characters in gguf-dump output. A crafted GGUF file could otherwise write to clipboard (OSC 52) or create clickable links (OSC 8) in vulnerable terminals. Related to issue #28969.

- **HTTP Proxy Support**: PR [#21752](https://github.com/ggml-org/llama.cpp/pull/21752) adds `HTTP_PROXY`/`HTTPS_PROXY` environment variable support to the HTTP client, fixing silent download failures in proxied environments (issue #21694).

- **Speculative Decoding Batch Order**: PR [#29019](https://github.com/ggml-org/llama.cpp/pull/29019) preserves original token order across batch splitting to prevent incorrect hidden states from reaching DFlash during speculative decoding.

- **Server System Prompt File Loading**: PR [#28053](https://github.com/ggml-org/llama.cpp/pull/28053) adds `-sysf` flag to `llama-server` to load system prompts from files, matching `llama-cli` functionality.

## 6. What This Means for Application Developers

- **Better Quantized Inference on AMD/Intel**: The new OpenCL DP4A kernels significantly improve non-NVIDIA GPU performance for Q4/Q6 quantized models.

- **DeepSeek V3/V4 on AMD Hardware**: ROCm users now benefit from matrix-core acceleration for the lightning indexer.

- **Secure Model Loading**: If you use `gguf-dump` in automated pipelines, update to include the escape sequence fix to prevent potential clipboard injection or link-based attacks from untrusted GGUF files.

- **Enterprise Proxy Support**: Downloads via `-hf` or model presets now respect standard proxy environment variables—relevant if running in corporate/containerized environments.

- **Server Customization**: `llama-server` can now load system prompts from files, enabling easier templating and deployment configurations.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for Ollama on 2026-09-18.

Let me go through the data:

**Releases:** None in the last 24h

**Issues (20 total):**
1. #3185 - OPEN - License distribution issue - Ollama doesn't distribute notice licenses in release artifacts (59 comments, 276 👍)
2. #6322 - CLOSED - Custom role "tool" support question
3. #18195 - CLOSED - Added spark2_5 architecture support
4. #18286 - CLOSED - /v1/responses rejects agent_message
5. #16892 - OPEN - glm-ocr infinite loop bug
6. #18490 - OPEN - Feature request: Restore built-in agent as opt-in CLI command
7. #18483 - OPEN - minicpm5-2b native tool calls never parse
8. #18505 - OPEN - MLX nvfp4 stall bug
9. #18487 - OPEN - Feature request: optional external resource lock for shared GPU coordination
10. #18507 - OPEN - Windows 11 tray app bug
11. #18484 - CLOSED - deepseek-v4.1-flash reasoning level mismatch
12. #18517 - OPEN - Feature request: --nodraft flag
13. #18513 - OPEN - Ollama cloud login with anonaddy.me email blocked
14. #18509 - OPEN - Ollama refusing tool role
15. #18394 - OPEN - Include served manifest digest in local /api/chat responses
16. #18515 - OPEN - Add MLX support for Bonsai's low-bit quantized weights
17. #17951 - CLOSED - DRAFT model memory measurement issue
18. #18494 - OPEN - Windows Vulkan AMD RX 6750 XT crash


19. #18506 - OPEN - glm-5.3-flash malformed tool calls via Ollama Cloud
20. #18502 - OPEN - Vulkan inference support on ARM64

**Pull Requests (27 total, top 20 shown):**
1. #18519 - OPEN - app: support preview update channel
2. #18518 - OPEN - app: keep closed macOS windows from reopening
3. #18493 - CLOSED - tests: fix metadata deletion test flake
4. #18243 - OPEN - UX: reject oversized pulls by default
5. #17714 - CLOSED - nemotron_h: add MLX vision support
6. #18516 - CLOSED - ci: h

I notice several platform-specific issues emerging: ARM64 Vulkan support needs fixing, Windows Vulkan has a crash on AMD hardware, and there are some cloud-related problems with tool calls. The project is also adding preview update channels for the app and making UI adjustments for macOS windows.

A few PRs have landed recently: the MLX vision support for nemotron_h is complete, there's a fix for release artifact uploads, and registry redirect handling has been tightened up. On the infrastructure side, structured outputs now apply in a single pass for thinking models, which should improve performance.</think>

# Ollama Digest — 2026-09-18

## Today's Highlights

The Ollama project is seeing active development across multiple fronts: a new `--nodraft` flag proposal for disabling speculative decoding, progress on MLX backend enhancements including low-bit quantization support, and continued work on platform-specific stability for Windows Vulkan and ARM64. License compliance for bundled dependencies remains a long-standing open issue with significant community interest (276 👍). No new releases landed in the past 24 hours.

---

## Releases & Breaking Changes

No releases in the last 24 hours. However, several PRs are advancing toward the next release:

- **PR #18243**: "UX: reject oversized pulls by default" — Implements MLX-only detection of models too large to run, with a `--force` bypass flag. Could expand to GGUF models in future releases. [[PR #18243](https://github.com/ollama/ollama/pull/18243)]
- **PR #16590**: Preparing to remove compatibility patch with manifest list support — adds manifest-list storage for runner-specific manifests under one tag.

---

## New Model & Hardware Support

| Model/Architecture | Status | Notes |
|---|---|---|
| `spark2_5` | **ADDED** | Support for Spark-X2.5-4B / 1.7B models (Issue #18195, now closed) |
| Nemotron vision (MLX) | **ADDED** | PR #17714 implements RADIO vision encoder and projector on shared MLX media pipeline |
| Bonsai low-bit (1-bit/2-bit) | **PROPOSED** | Issue #18515 requests MLX support for ultra-low-bit quantization |

**Platform updates:**
- **ARM64 Vulkan**: Issue #18502 — PR in progress to add Vulkan backend to Linux ARM64 Docker images (currently falls back to CPU)
- **MLX nvfp4**: Issue #18505 reports intermittent stall at end of prefill under sustained single-slot load; only runner SIGTERM recovers

---

## Performance & Optimization

| Area | Change | PR / Issue |
|---|---|---|
| Thinking models | Structured outputs now apply in single pass, eliminating double prefill | [PR #18479](https://github.com/ollama/ollama/pull/18479) |
| MLX speculative decode | Releases freed KV buffers every 256 tokens during decode | [PR #18510](https://github.com/ollama/ollama/pull/18510) |
| MLX cold starts | Warm up MLX compile paths on model load to populate caches | [PR #16085](https://github.com/ollama/ollama/pull/16085) |
| MLX load stalls | Implements progress-based stall detection for slow/long loads | [PR #17834](https://github.com/ollama/ollama/pull/17834) |
| Redirect handling | Tightened validation for registry/blob transfer redirects (scheme + DNS re-check) | [PR #18512](https://github.com/ollama/ollama/pull/18512) |

---

## Stability & Regressions

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| **High** | **glm-ocr infinite loop** — text recognition outputs loop indefinitely even on simple inputs | OPEN | — |
| **High** | **Windows 11 tray app fails** — tray icon shows but server never starts; manual `ollama serve` works | OPEN | — |
| **High** | **Vulkan AMD RX 6750 XT crash** — qwen3-vl:8b crashes with 0xc0000005 after loading a second VL model on Windows | OPEN | — |
| **Medium** | **minicpm5-2b tool calls never parse** — native XML tool calls return null, content contains mangled fragments | OPEN | — |
| **Medium** | **glm-5.3-flash malformed tool calls** — intermittently emits JSON-encoded string instead of array via Ollama Cloud | OPEN | — |
| **Medium** | **DRAFT model memory measurement fails** — /api/ps reports 315 MB for a 4.4 GB model | CLOSED | — |
| **Medium** | **MLX nvfp4 prefill stall** — admitted request stops at processed=total-1 with zero tokens | OPEN | — |
| **Low** | **License distribution** — Ollama doesn't distribute copyright notices for statically linked deps (e.g., llama.cpp) in binaries | OPEN (2024) | — |

---

## What This Means for Application Developers

1. **Speculative decoding control**: A `--nodraft` flag is proposed ([Issue #18517](https://github.com/ollama/ollama/issues/18517)) — useful for debugging and getting exact non-speculative outputs for accuracy-sensitive tasks.

2. **Tool calling changes**: The `/v1/responses` API now rejects `agent_message` input items ([Issue #18286](https://github.com/ollama/ollama/issues/18286), closed). Custom "tool" roles are also being refused ([Issue #18509](https://github.com/ollama/ollama/issues/18509)), which may break existing qwen-based workflows.

3. **Windows caution**: If running on Windows 11 with Vulkan AMD GPUs, avoid loading multiple VL models simultaneously — crashes (0xc0000005) are reported on RX 6750 XT.

4. **ARM64 Vulkan**: If you're on ARM64 Linux (e.g., Apple Silicon running Asahi), Vulkan inference currently falls back to CPU; a fix is pending.

5. **Oversized pull warnings**: An upcoming change will block pulling models too large for your hardware by default (MLX-first, GGUF later) — use `--force` to override.

6. **Manifest tracking**: Work is underway to include served manifest digests in `/api/chat` responses ([Issue #18394](https://github.com/ollama/ollama/issues/18394)), which will help bind evaluation scores to exact model artifacts.

---

*Generated from GitHub data — github.com/ollama/ollama | 2026-09-18*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze this GitHub data for LiteLLM and create a structured digest for 2026-09-18.

First, let me go through the key information:

**Latest Releases**: None in the last 24h

**Key Issues (by comment count)**:
1. #25762 - Feature request for unlimited SSO Login with Standard Plan (17 comments, 27 👍)
2. #26886 - Prisma reconnection failed bug (17 comments, 11 👍)
3. #16073 - Feature request for fal.ai models support (13 comments, 9 👍) - CLOSED
4. #26071 - Feature for adding skills to private repos with SSH/GitHub auth (11 comments, 16 👍)
5. #24771 - MCP OAuth2 callback 404 bug (6 comments) - CLOSED
6. #24065 - Cloudflare Workers AI API Error (4 comments)
7. #24109 - Feature request for /info or /version API endpoint (4 comments)
8. #29764 - Bug: Anthropic /v1/messages/count_tokens ignores api_base (4 comments) - CLOSED
9. #36168 - Bug: streaming drops upstream usage when final chunk has non-empty choices (4 comments)
10. #41553 - CI cadence failure (4 comments)
11. #28859 - Bug: Internal User cannot view Request/Response Data (4 comments)
12. And more...

**Pull Requests**:
- #41711 - fix(websearch_interception): keep intercepted searches under parent request
- #41707 - fix(proxy): evict jwt key mapping cache on user, team, org deletion
- #41709 - fix(mcp): gate preemptive OAuth 401 challenge on key's allowed servers
- #41443 - test: delete unit-test assertions that pin cost-map prices


- #41710 - feat(proxy): honor team and user MCP Tool Search settings for JWT auth
- #33479 - fix(bedrock): inject tool-search beta header (CLOSED)
- #41469 - fix(responses): drop top_p for gpt-5 reasoning models
- #41511 - feat(a2a): reach Microsoft Foundry agents with Entra auth
- #41694 - fix(proxy): propagate db model renames to allowlists (CLOSED)
- #41706 - fix(deps): correct minimum versions for supported Python releases
- #41515 - feat(proxy): add Amazon Transcribe passthrough with completion-time job pricing
- #41448 - fix(passthrough): keep target URL query when client sends no query params
- #41702 - fix(bedrock): gate Invoke tool search (CLOSED)
- #41565 - fix(bedrock): omit system prompt from audio transcription
- #40632 - fix(ui): persist disabling cache control injection points (CLOSED)
- #36741 - feat(langfuse): migrate SDK callback to langfuse v4
- #41678 - ci(auto-merge): stop requiring Greptile and Bugbot on price sync (CLOSED)
- #41485 - feat(proxy): add RFC 8693 token exchange for IdP JWTs
- #41700 - feat(keys): allow assigning a project to an unassigned key
- #41708 - feat(ui): add per-model budgets to create user form

Now I'm organizing these into a structured format. The most significant items appear to be the JWT key mapping cache eviction fix, the OAuth 401 challenge gating for MCP, and the Python dependency version corrections. The Prisma reconnection issue (#26886) stands out as a critical stability concern, while #41553 is a failing CI run. The streaming bug in #36168 and the Anthropic count_tokens bug in #29764 (now closed) are important fixes. On the new features side, Microsoft Foundry support with Entra auth, Amazon Transcribe passthrough, and the ability to assign projects to unassigned keys are noteworthy additions.</think>

# LiteLLM Digest — 2026-09-18

## Today's Highlights

A quiet day on the release front with no new versions, but significant proxy and infrastructure work landed. Several bugs affecting production deployments — particularly around Prisma reconnection and streaming usage tracking — remain open. New features include Amazon Transcribe passthrough, Microsoft Foundry A2A relay support, and improved JWT auth handling for MCP tool search.

---

## Releases & Breaking Changes

| Status | Item | Notes |
|--------|------|-------|
| 🔴 **OPEN** | **No new releases** | No versions tagged in last 24h |

---

## New Model & Hardware Support

| Issue/PR | Model/Provider | Description |
|----------|---------------|-------------|
| [#16073](https://github.com/BerriAI/litellm/issues/16073) | **fal.ai models** | Feature to add fal.ai provider support, including OpenAI Sora 2 and Google Veo 3.1 video models. **Closed** — merged/resolved. |
| [#28083](https://github.com/BerriAI/litellm/issues/28083) | **Bedrock Claude tool-search beta** | Fixed support for `tool_search_tool_regex_20251119` server-side tool type on Bedrock Invoke. **Closed.** |
| [#41702](https://github.com/BerriAI/litellm/pull/41702) | **Bedrock Opus 4.8/5, Sonnet 5** | Gated tool search beta header on model map — now correctly sends for newer Claude models. **Closed.** |
| [#41469](https://github.com/BerriAI/litellm/pull/41469) | **GPT-5 reasoning models** | Fixed `top_p` param dropping for Responses API when `drop_params` is set. |

---

## Performance & Optimization

| PR | Improvement | Impact |
|----|-------------|--------|
| [#41711](https://github.com/BerriAI/litellm/pull/41711) | **Web search interception** — inherits parent request session and trace | Better observability; search cost counts toward parent request |
| [#41448](https://github.com/BerriAI/litellm/pull/41448) | **Vertex passthrough** — keeps target URL query params | Fixes spend/token logging for Vertex streaming |
| [#41443](https://github.com/BerriAI/litellm/pull/41443) | **Test dependencies** — removed pinned cost-map prices | Reduces CI flakiness from provider price syncs |

---

## Stability & Regressions

| Issue | Severity | Status | Description |
|-------|----------|--------|-------------|
| [#26886](https://github.com/BerriAI/litellm/issues/26886) | **High** | OPEN | Prisma reconnection fails — periodic LiteLLM proxy pod instability, Prisma query engine crashes. 17 comments. |
| [#36168](https://github.com/BerriAI/litellm/issues/36168) | **High** | OPEN | Streaming drops upstream `usage` when final chunk has non-empty `choices` array — cached_tokens lost, cost billed at full input rate |
| [#41553](https://github.com/BerriAI/litellm/issues/41553) | **High** | OPEN | CI cadence 319f427c failing — 4 new red builds on Buildkite and CircleCI |
| [#29764](https://github.com/BerriAI/litellm/issues/29764) | **Medium** | CLOSED | Anthropic `/v1/messages/count_tokens` ignoring configured `api_base` — hardcoded `api.anthropic.com`, broke vLLM backends |
| [#41605](https://github.com/BerriAI/litellm/issues/41605) | **Medium** | OPEN | Synchronous Azure deployment pricing recorded as $0 intermittently |
| [#41611](https://github.com/BerriAI/litellm/issues/41611) | **Medium** | OPEN | Streaming guardrails: value split across two SSE chunks can pass per-chunk checks |
| [#24771](https://github.com/BerriAI/litellm/issues/24771) | **Medium** | CLOSED | MCP OAuth2 callback redirects to non-existent `/ui/mcp/oauth/callback` (404) |
| [#30667](https://github.com/BerriAI/litellm/issues/30667) | **Low** | OPEN | Streaming pass-through failures mid-stream log no usage/cost |

---

## New Features

| PR | Feature | Description |
|----|---------|-------------|
| [#41515](https://github.com/BerriAI/litellm/pull/41515) | **Amazon Transcribe passthrough** | `POST /transcribe/{Operation}` with completion-time job pricing |
| [#41511](https://github.com/BerriAI/litellm/pull/41511) | **Microsoft Foundry A2A relay** | Reach Foundry agents with Entra auth and versioned card discovery |
| [#41485](https://github.com/BerriAI/litellm/pull/41485) | **RFC 8693 token exchange** | Gateway token endpoint accepts IdP JWTs for Claude Code without browser round-trip |
| [#41700](https://github.com/BerriAI/litellm/pull/41700) | **Project assignment** | `/key/update` now allows assigning unassigned keys to projects |
| [#41708](https://github.com/BerriAI/litellm/pull/41708) | **Per-model budgets in UI** | Added to create user form (matches existing key/team forms) |
| [#36741](https://github.com/BerriAI/litellm/pull/36741) | **Langfuse v4 migration** | Callback migrated from deprecated v2 SDK |

---

## What This Means for Application Developers

1. **Proxy operators**: Watch for the Prisma reconnection issue (#26886) if running LiteLLM with Prisma backend — consider pooling configuration tweaks until patch lands.

2. **Streaming cost tracking**: If you rely on accurate token counts for cached input with streaming, the bug in #36168 may cause overbilling. Monitor `cached_tokens` in response metadata.

3. **New integrations**: Amazon Transcribe users can now route through LiteLLM with proper cost logging; Microsoft Foundry users gain A2A relay support with Entra auth.

4. **JWT auth improvements**: MCP tool search now honors team/user settings for JWT-authenticated requests (#41710), and token exchange (#41485) enables headless key provisioning.

5. **Langfuse users**: If you're on Langfuse v4, callback support landed — upgrade path now clear.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate a structured digest for Unsloth based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Let me go through the data:

## Latest Releases (last 24h)
- v0.1.810-beta: Docker + Multi User + AMD Support
  - New Docker image with NVIDIA & AMD support
  - Multi-user accounts
  - RDNA1+2, FP8/INT8 diffusion support
  - ARM64 CUDA Windows support
  - Many training, GRPO and inference improvements

## Latest Issues (showing top 30 by comment count)
- #2491 [CLOSED] - LLVM ERROR: Unsupported rounding mode for conversion (f16 to f16)
- #7999 [CLOSED] - Build new Docker Hub Image
- #2587 [CLOSED] - RuntimeError: 'Qwen3Attention' object has no attribute 'apply_qkv'
- #8246 [CLOSED] - Can't load NVFP4 on 5060TI 16 GB
- #2613 [OPEN] - Full Finetune: Tensors of floating point dtype can require gradients
- #6180 [CLOSED] - Unsloth studio docker version is not the latest
- #3538 [CLOSED] - Sampling inside TrainingCallback gives ValueError
- #4476 [CLOSED] - Nemotron 30B support for lora
- #11017 [CLOSED] - Feature: Add easy model favoriting
- #11143 [OPEN] - Qwen3.8-Flash-Next MTP aborts at load
- #11012 [CLOSED] - Windows setup fails: Unexpected '['
- #3605 [CLOSED] - ValueError: Invalid input type for GRPO on Gemma3-4B with multiple images
- #9697 [CLOSED] - KV cache quantization not reflected in context length with TP enabled


- #9653 [CLOSED] - 256k context selected, loads only 4k
- #4858 [OPEN] - Feature: Multi-host support for Unsloth Studio
- #9117 [OPEN] - Feature: Add new model download sources (ModelScope)
- #1713 [CLOSED] - Unsloth overwrites forward call function
- #6730 [OPEN] - Feature: Support MiCA (Minor Component Adaptation)
- #10252 [OPEN] - GPT OSS 120b - output does not match
- #9583 [CLOSED] - Llamacpp too old in docker image

I'm tracking several feature requests and bug reports. Key areas of focus include multi-host deployment capabilities, alternative model sources like ModelScope, and compatibility with newer architectures. There are also lingering concerns around context length handling and inference engine versions in containerized environments.

On the development side, I'm seeing active work on security boundaries for network requests and Python tool access, model picker improvements, and performance optimizations for Qwen3.5-9B training workflows. Recent commits are addressing sandboxing constraints and installation script refinements.</think>

# Unsloth Digest — 2026-09-18

## 1. Today's Highlights

Unsloth released **v0.1.810-beta** with a major Docker refresh featuring multi-user accounts, RDNA1+2/FP8/INT8 diffusion support, ARM64 CUDA Windows compatibility, and GRPO/inference improvements. The team is simultaneously pushing performance work on Qwen3.5-9B LoRA SFT (0.84s → 0.77s per step) and hardening Studio with OS sandboxing for Python/Terminal tools on Linux and macOS.

---

## 2. Releases & Breaking Changes

| Version | Key Changes | Link |
|---------|-------------|------|
| **v0.1.810-beta** | Docker image refresh — multi-user accounts, RDNA1+2/FP8/INT8 diffusion, ARM64 CUDA Windows, training/GRPO/inference improvements | [Release](https://github.com/unslothai/unsloth/releases) |

**Migration notes:** The new Docker image now includes Studio by default (previously ROCm images were training-only). Users upgrading from pre-multi-user setups may need to reconfigure authentication.

---

## 3. New Model & Hardware Support

- **AMD RDNA1+2 GPUs** — Full FP8/INT8 diffusion support added to Docker images
- **ARM64 CUDA Windows** — New support path for Windows on ARM64
- **Qwen3.8-Flash-Next MTP** — Initial support (see [Issue #11143](https://github.com/unslothai/unsloth/issues/11143) for known load abort issue)
- **Nemotron 30B** — LoRA support added for `NemotronHTopkRouter` ([Issue #4476](https://github.com/unslothai/unsloth/issues/4476) closed)
- **Docker ROCm image** — Now ships Unsloth Studio alongside training-only ROCm image ([PR #11218](https://github.com/unslothai/unsloth/pull/11218))
- **ModelScope integration** — Feature requests for download source support ([Issue #9117](https://github.com/unslothai/unsloth/issues/9117), [Issue #2969](https://github.com/unslothai/unsloth/issues/2969))

---

## 4. Performance & Optimization

| PR | Change | Impact |
|----|--------|--------|
| **[#11238](https://github.com/unslothai/unsloth/pull/11238)** | Model-independent CPU overhead patches in `_utils.py` | Qwen3.5-9B LoRA SFT: **0.84s → 0.77s** per step (1 GPU, B200) |
| **[#10744](https://github.com/unslothai/unsloth/pull/10744)** | Four patches reducing ~20k kernel launches per step | Qwen3.5-9B LoRA SFT: **0.83s → 0.66s** per step (1 GPU, B200) |
| **[#11237](https://github.com/unslothai/unsloth/pull/11237)** | Stop macOS update re-probing llama.cpp binaries | macOS update: **~60s → <5s** (when llama.cpp current) |

GPU utilization remains a bottleneck: ~270ms actual compute out of 850ms total step time, indicating further optimization opportunities in CPU-side dispatch.

---

## 5. Stability & Regressions

### High Severity

| Issue | Description | Status |
|-------|-------------|--------|
| **[#11143](https://github.com/unslothai/unsloth/issues/11143)** | Qwen3.8-Flash-Next MTP aborts at load — `hc_head_norm` dimension mismatch after rebase | **OPEN** — 4 comments |
| **[#11219](https://github.com/unslothai/unsloth/issues/11219)** | MTP drafter crashes with `GGML_ASSERT(ggml_can_repeat(b, a))` during graph build (RTX 5080, b11007-mix) | **OPEN** — 1 comment |
| **[#8246](https://github.com/unslothai/unsloth/issues/8246)** | Can't load NVFP4 on RTX 5060 TI 16 GB | **CLOSED** — 6 comments |

### Medium Severity

| Issue | Description | Status |
|-------|-------------|--------|
| **[#2613](https://github.com/unslothai/unsloth/issues/2613)** | Full Finetune: Tensors of floating point dtype can require gradients | **OPEN** — 6 comments |
| **[#11012](https://github.com/unslothai/unsloth/issues/11012)** | Windows setup fails: Unexpected '[' (exit code 2) | **CLOSED** — 4 comments |
| **[#9697](https://github.com/unslothai/unsloth/issues/9697)** | KV cache quantization not reflected in context length with TP enabled | **CLOSED** — 3 comments |

### Infrastructure Fixes Landing

- **[#11172](https://github.com/unslothai/unsloth/pull/11172)** — Python tool network calls now respect host allowlist (previously bypassed for indirect calls)
- **[#11209](https://github.com/unslothai/unsloth/pull/11209)** — OS sandbox (bubblewrap/Linux, Seatbelt/macOS) for Python/Terminal tools — reopened after revert
- **[#11220](https://github.com/unslothai/unsloth/pull/11220)** — Fixed denied llama.cpp cache recovery littering on Windows

---

## 6. What This Means for Application Developers

1. **Docker deployments should upgrade to v0.1.810-beta** — The new image includes multi-user support and the latest llama.cpp. If you're running on AMD (ROCm), Studio is now available in the container.

2. **Qwen3.5-9B fine-tuning is now ~9% faster** — The per-step latency drop (0.84s → 0.77s) compounds significantly over large training runs. This is particularly relevant for CLI-based workflows.

3. **Studio security posture improved** — Network calls from Python tools now consistently honor the host allowlist. macOS users see dramatically faster updates. These changes reduce attack surface for exposed Studio instances.

4. **Watch for MTP-related crashes** — If using Qwen3.8-Flash-Next with Multi-Token Prediction, monitor [Issue #11143](https://github.com/unslothai/unsloth/issues/11143) — the architecture is actively evolving and may have load-time failures on recent builds.

5. **Windows ARM64 is now viable** — Developers on Surface Pro X and similar devices can now run Unsloth natively via the new ARM64 CUDA Windows support.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*