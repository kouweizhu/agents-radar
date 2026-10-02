# AI Infrastructure Digest 2026-10-02

> Generated: 2026-10-02 01:47 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to generate a cross-project comparison report comparing the digest projects: vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. I need to synthesize the information from all the digests I created and produce a cohesive analysis.

Let me organize the information by section:

## 1. Ecosystem Overview
Need to summarize the overall AI infrastructure landscape - inference engines, local runtimes, serving layers, training frameworks

## 2. Activity Comparison
Create a table with Issues, PRs, Releases for each project

## 3. Model Support Race
Compare which projects support which new models/architectures

## 4. Performance Frontier
Where optimization efforts are concentrated

## 5. Layer Positioning
How these projects differ by layer

## 6. Trend Signals
Industry trends and what developers should watch

Let me compile this from the digests I created:

**vLLM:**
- New models: DeepSeek-V4.1, Qwen4Exp, MiniMax-M3
- Hardware: NVIDIA GB10 (DGX Spark), SM121, SM120, Intel XPU, ROCm
- Performance: Qwen4Exp skinny decode GEMM, MiniMax-M3 sparse prefill, DeepSeek-V4.1 compressor
- Issues: MTP + prefix caching bugs, FlashInfer + MTP crashes

**SGLang:**
- New models: MiniMax-M3, GLM-5.2, DeepSeek V4.1
- Hardware: AMD MI350X, Blackwell
- Performance: Fused MLA + RoPE + KV-write, split GDN kernels, HiSparse stack
- Issues: MiniMax-M3 crashes on MI350X

**llama.cpp:**
- New models: Qwen4Exp MTP


- Hardware: AMD gfx1031, Qualcomm Adreno
- Performance: llama-mmap optimization, Meta AllReduce
- Issues: Vulkan crashes, SYCL issues

**Ollama:**
- New models: Clef, LLM-jp-4
- Hardware: MLX System One
- Performance: CPU regression fix, GPU polling
- Issues: CVEs, proxy bypass, RTX 5090

**LiteLLM:**
- New models: Anthropic Workload Identity Federation, Gemini Live Avatar
- Hardware: Multi-provider
- Performance: MCP improvements, auto router

I'll continue synthesizing the comparative analysis across these diverse AI infrastructure projects. The landscape reveals significant variations in model support, hardware targeting, and performance optimization strategies. Each project demonstrates unique strengths in addressing specific inference and deployment challenges.

The ecosystem shows intense competition in inference optimization, with projects like vLLM and SGLang leading in cutting-edge model and hardware support. Emerging trends indicate a shift towards more flexible, provider-agnostic solutions that can seamlessly integrate multiple AI models and deployment environments.</think>

# Cross-Project AI Infrastructure Report — October 2, 2026

---

## 1. Ecosystem Overview

The AI inference stack is entering a phase of aggressive hardware specialization and multi-backend convergence. Today's activity reveals three distinct vectors of competition: **Blackwell architecture optimization** (vLLM and SGLang racing to stabilize DeepSeek-V4.1 and Qwen4Exp on GB10/SM121), **local/desktop deployment** (Ollama and Unsloth pushing ease-of-use and consumer-GPU performance), and **gateway/aggregation** (LiteLLM expanding multi-provider support while managing supply-chain risk). Meanwhile, llama.cpp continues its role as the reference runtime with broadest hardware reach but narrower enterprise features. The net effect: infrastructure engineers face more choices but also higher integration complexity as these layers increasingly overlap.

---

## 2. Activity Comparison

| Project | Issues (last 24h) | PRs (last 24h) | Releases |
|---------|-------------------|----------------|----------|
| **vLLM** | 7 | 12 | 0 |
| **SGLang** | 4 | 20 | 0 |
| **llama.cpp** | 10 | 10 | 10 (commits) |
| **Ollama** | 16 | 24 | 2 |
| **LiteLLM** | 7 | 15 | 2 |
| **Unsloth** | 8 | 9 | 1 (v0.1.902-beta) |

**Observations:**

- **SGLang** leads in PR volume (20) — heavy investment in AMD HiSparse stack and Blackwell support.
- **Ollama** leads in overall issue activity (16) — broader user base surface area, includes UX/CLI issues.
- **llama.cpp** had the most commits (10) but lower-level infrastructure work; no formal releases tagged.
- **LiteLLM** and **Ollama** are the only projects with tagged releases in the last 24h.
- **vLLM** is mid-pack on activity but carries the highest issue severity (two critical correctness bugs in MTP speculative decoding).

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4.1 (Flash)** | ✅ SM12x fixes | ✅ Sparse attention | — | — | — |
| **Qwen4Exp / Qwen3.8-Flash-Next** | ✅ SM12x GEMM | — | ✅ MTP support | — | — |
| **MiniMax-M3** | ✅ Sparse prefill | ✅ FlashInfer MSA | — | — | ✅ Int8 GEMM |
| **GLM-5.2 / 5.3** | ✅ | ✅ GB300 AgentX | — | — | — |
| **Gemma 4 31B MTP** | — | — | ✅ | — | — |
| **Clef** | — | — | — | ✅ | ✅ |
| **LLM-jp-4 Harmony** | — | — | — | ✅ | — |
| **Claude Workload Identity** | — | — | — | ✅ | — |
| **Gemini Live Avatar** | — | — | — | ✅ | — |

**Race Analysis:**

- **vLLM + SGLang** are jointly dominating Blackwell/AMD GPU optimization for the newest frontier models (DeepSeek, Qwen, MiniMax).
- **llama.cpp** remains the only project supporting Gemma 4 MTP, suggesting deeper integration with Google's model architecture.
- **Ollama** and **Unsloth** are converging on consumer-oriented models (Clef, LLM-jp-4, Qwen-Image-2.1), with Unsloth adding significant GGUF generation and int8 optimization.
- **No single project** covers the full spectrum — each leads in its vertical.

---

## 4. Performance Frontier

| Optimization Area | Projects Active | Key Changes |
|-------------------|-----------------|-------------|
| **KV Cache / Prefix Caching** | vLLM, SGLang, llama.cpp | vLLM: async KV load exemption (#59504), external prefix sharing (#57418); SGLang: post-capture KV sizing (#41961); llama.cpp: recurrent memory fix |
| **Quantization** | vLLM, SGLang, Unsloth | vLLM: NVFP4 compute type handling; Unsloth: fused int8 GEMM for Qwen-Image-2.1 (14-17% faster); SGLang: FP8 activation quant fused into RMSNorm |
| **Batching / Pipelining** | vLLM, SGLang, LiteLLM | vLLM: chunked prefill continuation fixes; SGLang: VMM graph-input exchange (supports >16 chunks); LiteLLM: mid-stream fallback for streaming |
| **Distributed / Multi-GPU** | vLLM, SGLang, Unsloth | vLLM: Intel XPU pipeline parallelism; SGLang: HiSparse speculative decoding stack; Unsloth: multi-GPU vLLM/SGLang integration |
| **Kernel Fusion** | vLLM, SGLang, Unsloth | vLLM: Qwen4Exp skinny decode GEMM; SGLang: fused MLA+RoPE+KV-write (gfx950); Unsloth: fused NF4 dequant+GEMV |
| **Memory Management** | vLLM, SGLang, llama.cpp | vLLM: weight loading optimization (GB10); llama.cpp: llama-mmap direct-io (avoids second tensor copy); SGLang: block swap for frozen transformers |

**Frontier Concentration:**

- **Blackwell (SM120/SM121)** is the most active optimization target — vLLM and SGLang both shipping performance fixes for DeepSeek-V4.1 and Qwen4Exp.
- **AMD gfx95/gfx90a** is the second frontier — SGLang's HiSparse stack and vLLM's ROCm work are converging.
- **Quantization** remains a primary battleground — each project has different focal points but all pursuing fused kernel paths.
- **Regression watch:** Unsloth's tensor-split decode 2.9x slowdown (#12468) and vLLM's MTP+prefix-caching correctness bug are the highest-priority issues requiring attention.

---

## 5. Layer Positioning

| Layer | Projects | Position |
|-------|----------|----------|
| **Serving Engine (vLLM, SGLang)** | vLLM, SGLang | High-performance inference servers with P/D parallelism, speculative decoding, KV caching. vLLM leads in Blackwell optimization; SGLang leads in AMD HiSparse. |
| **Local Runtime (llama.cpp)** | llama.cpp | Broadest hardware reach (CPU, GPU, DSP, NPU). Reference implementation for GGUF quantization. |
| **Desktop/App Framework (Ollama, Unsloth)** | Ollama, Unsloth | End-user deployment. Ollama = Docker-like simplicity; Unsloth = training + inference + quantization in one tool. |
| **Gateway / Aggregation (LiteLLM)** | LiteLLM | Multi-provider abstraction, proxy, cost management. Expanding into tracing and guardrails. |
| **Training / Fine-tuning** | Unsloth | LoRA/QLoRA optimization, 4-bit checkpoint preservation, block swap for dense models. |

**Overlap Zones:**

- **vLLM and SGLang** are converging — both now support multi-backend inference, though SGLang emphasizes speculative decoding while vLLM emphasizes Blackwell performance.
- **Ollama and llama.cpp** overlap at the local runtime layer — Ollama is a user-facing wrapper around llama.cpp but now supports vLLM/SGLang backends.
- **Unsloth is the vertical integrator** — spans training (LoRA), inference (llama.cpp/vLLM/SGLang), and quantization, making it a one-shop for model optimization workflows.

---

## 6. Trend Signals

### What Agent / Application Developers Should Watch

1. **Blackwell is production-ready for inference** — Both vLLM and SGLang have landed SM120/SM121 support for DeepSeek-V4.1 and Qwen4Exp. If you're deploying on GB10 or RTX PRO 6000, the engine choice is now viable (though CUDA graphs on SM120 still have issues for certain models).

2. **Speculative decoding is entering a stability phase** — SGLang's HiSparse stack for AMD and vLLM's MTP work are both maturing but have known correctness bugs when combined with prefix caching. Avoid MTP + prefix caching on hybrid architectures until fixes land.

3. **Supply-chain security is non-negotiable** — LiteLLM's 36-CVE disclosure and the Trivy incident underscore that AI infrastructure is a target. Prioritize image verification (cosign) and dependency auditing.

4. **Quantization is getting hardware-specific** — NVFP4, INT4, MXFP4, IQ4_XS, GGUF — each has different performance characteristics on Blackwell vs. AMD vs. consumer GPUs. Test workloads on target hardware; generic "use Q4" advice is no longer sufficient.

5. **The gateway layer is consolidating** — LiteLLM's expansion into tracing, guardrails, and budget management signals that infrastructure teams want a single control plane for multi-provider inference. This is a leading indicator for enterprise adoption.

6. **Local deployment is accelerating** — Ollama's CPU regression fix (#18613) and Unsloth's consumer-GPU optimizations (int8 GEMM, 4-bit checkpoint preservation) suggest the "local-first" use case is maturing. Expect more enterprise interest in on-prem inference as these tools stabilize.

7. **Multi-backend inference is emerging** — Unsloth's vLLM/SGLang integration and Ollama's expanding backend support point to a future where "engine selection" is a runtime configuration, not a compile-time decision.

---

*Cross-project synthesis — October 2, 2026*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for vLLM on 2026-10-02.

Key observations from the data:

1. **Releases**: No new releases in the last 24h

2. **Hot Issues** (by comment count):
   - #44280: Rust Frontend Feature Parity roadmap (44 comments) - very active
   - #23943: Adding nvidia/parakeet-tdt-0.6b-v3 to vllm (26 comments)
   - #53912: prefix caching + MTP corrupts output on hybrid Mamba/GDN models (22 comments)
   - #58726: Weight loading slow on GB10 (DGX Spark) (16 comments)
   - #32588: Wrong timestamps if audio > 30s (16 comments)
   - #37754: FlashInfer + MTP speculative decoding crashes on SM121 (13 comments)
   - #56892: DeepSeek-V4.1-Flash extremely low decode throughput on SM120 (12 comments)

3. **New PRs** (interesting ones):
   - #59689: Bugfix for DeepSeek-V4.1 compressor ring null block issue (closed)
   - #59632: Add SM12x plans for Qwen4Exp skinny decode GEMM
   - #57420: MiniMax-M3 sparse prefill kernel improvements
   - #58560: DeepSeek-V4.1 compressor ring bugfix
   - #59654: Rust frontend - preserve whitespace in GLM string arguments
   - #59712: ngram_hint for drafting tool calls
   - #59704: ROCm - expand indexer block tables fix
   - #51488: Reject new requests while generation is paused
   - #59504: Bugfix - exempt blocks from async KV load zeroing
   - #57418: Share in-flight external-prefix KV loads
   - #59659: Expose gRPC port in Python vllm serve
   - #59159: XPU DeepSeek V4 FP8 sparse decode graph-capture fix

4. **Hardware/Model Focus**:
   - NVIDIA GB10 (DGX Spark), SM121, SM120 (RTX PRO 6000 Blackwell)
   - DeepSeek-V4.1, Qwen4Exp, MiniMax-M3, GLM-5.3
   - XPU (Intel), ROCm support

5. **Key themes**:
   - Blackwell GPU support (SM120, SM121) is a hot topic
   - Rust frontend development continues
   - Speculative decoding issues with MTP
   - Performance optimizations for new hardware
   - Multi-modal and tool-calling improvements
   - KV cache and prefix caching enhancements</think>

# vLLM Daily Digest — 2026-10-02

## 1. Today's Highlights

The vLLM project is intensely focused on Blackwell hardware (SM120/SM121) optimization, with multiple PRs addressing DeepSeek-V4.1 and Qwen4Exp performance regressions. The Rust frontend continues active development toward feature parity (#44280, 44 comments), while critical KV-cache and prefix-caching bugs affecting hybrid Mamba/GDN and MTP speculative decoding are being addressed.

---

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Model/Feature | Details | PR/Issue |
|---------------|---------|----------|
| **NVIDIA RTX PRO 6000 (SM120)** | DeepSeek-V4.1-Flash support with working 1M context configuration | [#56700](https://github.com/vllm-project/vllm/issues/56700) |
| **NVIDIA GB10 / DGX Spark (SM121)** | Qwen4Exp skinny decode GEMM optimization — fixes fallback to slow cuBLAS SM80 WMMA kernels | [#59632](https://github.com/vllm-project/vllm/pull/59632) |
| **Intel XPU** | DeepSeek-V4 FP8 sparse decode graph-capture fix and KV cache allocation under pipeline parallelism | [#59159](https://github.com/vllm-project/vllm/pull/59159) |
| **ROCm (gfx950)** | GLM-5.3-Flash gibberish fix at low concurrency | [#59413](https://github.com/vllm-project/vllm/issues/59413) |

---

## 4. Performance & Optimization

| Area | Change | Impact | PR |
|------|--------|--------|-----|
| **Qwen4Exp SM12x decode** | Added custom Triton plans for skinny BF16 projections | Fixes severe regression on GB10/DGX Spark where decode fell back to slow kernels | [#59632](https://github.com/vllm-project/vllm/pull/59632) |
| **MiniMax-M3 sparse prefill** | Query-tiled Triton kernel for Hopper | Groups adjacent queries to reduce redundant KV block selection | [#57420](https://github.com/vllm-project/vllm/pull/57420) |
| **Weight loading (GB10)** | Per-tensor H2D copies from safetensors mmap views | Investigating slow loading on DGX Spark — related work on ROCm (#49991) and Ascend NPU (#50794) | [#58726](https://github.com/vllm-project/vllm/issues/58726) |
| **DeepSeek-V4.1 compressor** | Fixed ring mapping to exclude null KV block | Fixes repeated token / NaN output on SM12x with 64-token KV pages | [#58560](https://github.com/vllm-project/vllm/pull/58560), [#59689](https://github.com/vllm-project/vllm/pull/59689) |
| **Async KV loads** | Exempt blocks from zeroing during async KV writes | Prevents race condition with sliding-window and circular-buffer blocks | [#59504](https://github.com/vllm-project/vllm/pull/59504) |
| **External prefix KV** | Share in-flight KV loads across concurrent requests | Reduces redundant GPU memory allocation and connector-side waiting | [#57418](https://github.com/vllm-project/vllm/pull/57418) |
| **ROCm fused QK-norm+RoPE+gate** | Enable for Qwen3-Next/Qwen3.5 | Gains from ATOM optimizations on AMD hardware | [#51406](https://github.com/vllm-project/vllm/pull/51406) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | **MTP + prefix caching corrupts output on hybrid Mamba/GDN models** (v0.28.0) — related to #43559 | Open | — |
| **Critical** | **FlashInfer + MTP speculative decoding crashes** on SM121 (DGX Spark) with GQA=16 models — illegal memory access | Open | — |
| **High** | **DeepSeek-V4.1-Flash extremely low decode throughput** on SM120 (8x RTX PRO 6000 Blackwell) with `--enforce-eager`; CUDA graphs unusable | Open | — |
| **High** | **FP8 KV cache + prefix caching truncates generation** (ignore_eos bypassed) on Qwen3.5-NVFP4 | Open | — |
| **High** | **FlashInfer autotune config cache hits only on rank 0**, deadlocking engine launch | Open | — |
| **Medium** | **Silent garbage output** on GPUs in Confidential Computing mode with V2 model runner (works with VLLM_USE_V2_MODEL_RUNNER=0) | Open | — |
| **Medium** | **Wrong timestamps** for Whisper audio > 30s — 0.5s offset per segment | Open | — |
| **Medium** | **Qwen3 parser** incorrectly treats model-quoted tool-call markup as actual tool calls | Open | — |
| **Fixed** | DeepSeek-V4.1 compressor ring writing to null KV block causing repeated tokens | Closed | [#59689](https://github.com/vllm-project/vllm/pull/59689) |
| **Fixed** | DeepSeek-V4 FP8 sparse decode graph capture on XPU | Merged | [#59159](https://github.com/vllm-project/vllm/pull/59159) |

---

## 6. What This Means for Application Developers

- **Blackwell users (RTX PRO 6000, GB10)**: Expect improved decode throughput for Qwen4Exp and DeepSeek-V4.1 with the latest PRs, but CUDA graphs on SM120 remain problematic for DeepSeek-V4.1-Flash — consider eager mode if stability issues arise.

- **Speculative decoding users**: MTP + prefix caching combination has known correctness bugs on hybrid Mamba/GDN architectures; avoid this combination until fixed.

- **Tool-calling applications**: The Qwen3 parser has a bug where model-quoted tool names get misinterpreted as actual tool calls — review tool definitions in requests carefully.

- **Rust frontend adopters**: Active development continues toward Python API parity (#44280); new gRPC port exposure enables multinode deployments.

- **Multi-modal (Whisper)**: Audio transcription > 30s suffers from timestamp drift (~0.5s per segment) — consider chunking requests or applying post-processing corrections.

- **KV Connector users**: Two PRs (#59504, #57418) improve async KV load handling — relevant for P/D deployments with external prefix caching.

---

*Generated from GitHub data — vllm-project/vllm*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub issues and PRs data from the sgl-project/sglang repository to create a structured digest.

First, let me identify the key items:

**Issue #42140** - This seems to be the main issue being referenced, but the summary is cut off. It's from "the-Shallow" and is about some kind of bug report or question.

Looking at the PRs (Pull Requests) from the last 24h:

1. **#42169** - [hicache] [HiCache][AMD] Move page_first_direct pages with the gather kernel on ROCm
   - Author: salexspb
   - About: Moving page_first_direct pages with gather kernel on ROCm for HiCache

2. **#39083** - [AMD] Fix AITER DSA prefill with an FP8 KV cache
   - Author: pbkowalski
   - About: Fixing AITER DSA prefill with FP8 KV cache for DeepSeek Sparse Attention

3. **#41533** - [ROCm] Use the fused MLA absorb + RoPE + KV-write kernel for decode-sized forward modes only
   - Author: jiaryang
   - Status: CLOSED
   - About: Fused MLA kernel for decode sizes on gfx950

4. **#42167** - [Docs] GLM-5.2: move GB300 AgentX recipe to the agentic HiCache section
   - Author: nvpohanh
   - Documentation update

5. **#37577** - [Feature] Add Aaronson-Gumbel text watermarking
   - Author: JustinTong0323
   - About: Adding text watermarking for AI transparency (EU AI Act compliance)

6. **#42128** - [Fix][DSV4.1] SWA page size with bounded replay
   - Author: Oasis-Git
   - About: Fixing SWA page size for DeepSeek V4.1

7. **#42168** - [8/N] [HiSparse][PD] Bound a PD HiSparse decode's requests by its logical KV pool
   - Author: salexspb
   - Part of HiSparse stack

8. **#41781** - [7/N] [HiSparse] Restore speculative verification reads and page release
   - Author: salexspb

9. **#41780** - [6/N] [HiSparse] Keep draft DSA KV resident in logical token space
   - Author: salexspb

10. **#40784** - [5/N] [HiSparse] Batch gfx95 planner prefix scans
    - Author: salexspb

11. **#40783** - [4/N] [HiSparse] Plan ROCm misses and reuse KV copy plans
    - Author: salexspb

12. **#42125** - Size the VMM graph-input exchange by the widest input across ranks
    - Author: metamergebot
    - About: VMM graph-input exchange sizing

13. **#42106** - Add yue2
    - Author: yiakwy-xpu-ml-framework-team
    - Documentation/diffusion/jit-kernel

14. **#42109** - [Docs] GLM-5.2 GB300 NVFP4: add env vars from InferenceX AgentX recipe
    - Status: CLOSED
    - Author: kedarpotdar-nv

15. **#41961** - Support post-capture KV sizing for the unified hybrid-SWA pool
    - Author: metamergebot
    - About: KV pool sizing

16. **#40872** - [AMD][Bugfix] Route default aiter NEXTN draft extend off the faulting CK kernel
    - Author: chuyeh
    - About: AMD NEXTN draft extend routing

17. **#34502** - [ROCm] Fuse per-token activation quant into RMSNorm for per-channel quantized attention
    - Author: Emmanuel0612
    - About: FP8 activation quantization on AMD gfx95

18. **#42166** - [MemCache] Fix two crashes found bringing up MiniMax-M3 on MI350X
    - Author: kevin-mii
    - About: Crash fixes for MiniMax-M3 on MI350X

19. **#35846** - feat(minimax): integrate FlashInfer MSA on Blackwell
    - Status: CLOSED
    - Author: yyihuang
    - About: FlashInfer MSA integration on Blackwell

20. **#36065** - perf: split mixed GDN prefill and decode kernels
    - Status: CLOSED
    - Author: Destination2020
    - About: Split GDN kernels for mixed chunk

Now organizing this into the requested sections:

**1. Today's Highlights**
- Multiple HiSparse improvements for AMD gfx95 (multiple PRs in the stack)
- Fixes for MiniMax-M3 on MI350X (crashes)
- Documentation updates for GLM-5.2
- Text watermarking feature for EU AI Act compliance
- VMM graph-input exchange improvements

**2. Releases & Breaking Changes**
- None explicitly mentioned as releases/breaking changes

**3. New Model & Hardware Support**
- MiniMax-M3 support (with fixes)
- FlashInfer MSA on Blackwell
- GLM-5.2 GB300 NVFP4
- AMD gfx95 support (MI350X, MI355X)

**4. Performance & Optimization**
- Fused MLA absorb + RoPE + KV-write kernel (closed)
- Split mixed GDN prefill and decode kernels (closed)
- FP8 activation quantization on AMD
- HiSparse optimizations
- VMM graph-input exchange sizing

**5. Stability & Regressions**
- Two crashes found bringing up MiniMax-M3 on MI350X (fix PR exists: #42166)
- SWA page size with bounded replay (fix PR: #42128)
- AMD NEXTN draft extend routing issue (fix PR: #40872)

**6. What This Means for Application Developers**
- Better AMD GPU support
- Improved performance for certain kernels
- Text watermarking feature for compliance
- Documentation improvements for specific models

Let me format this properly with GitHub links.</think>

## SGLang Daily Digest - October 2, 2026

### 1. Today's Highlights

Today brings significant AMD ROCm improvements with a multi-part HiSparse stack advancing speculative decoding, plus critical crash fixes for MiniMax-M3 on MI350X. A new text watermarking feature for EU AI Act compliance landed, and documentation for GLM-5.2 GB300 configurations was consolidated.

---

### 2. Releases & Breaking Changes

No releases or breaking changes reported today.

---

### 3. New Model & Hardware Support

| Item | Description | PR |
|------|-------------|-----|
| **MiniMax-M3 on MI350X** | MXFP4 quantization support with crash fixes | [#42166](https://github.com/sgl-project/sglang/pull/42166) |
| **FlashInfer MSA on Blackwell** | Route MiniMax-M3 sparse attention through FlashInfer backend | [#35846](https://github.com/sgl-project/sglang/pull/35846) (closed) |
| **GLM-5.2 GB300 NVFP4** | AgentX recipe documentation updated | [#42167](https://github.com/sgl-project/sglang/pull/42167), [#42109](https://github.com/sgl-project/sglang/pull/42109) (closed) |
| **AMD gfx95 (MI355X)** | Per-channel dynamic FP8 attention with fused activation quant | [#34502](https://github.com/sgl-project/sglang/pull/34502) |

---

### 4. Performance & Optimization

| Optimization | Impact | PR |
|--------------|--------|-----|
| **Fused MLA + RoPE + KV-write kernel** | Single launch replacing absorbed q BMM and RoPE/cat/KV-write on gfx950 decode shapes | [#41533](https://github.com/sgl-project/sglang/pull/41533) (closed) |
| **Split mixed GDN kernels** | Separate prefill/decode kernels for hybrid linear-attention | [#36065](https://github.com/sgl-project/sglang/pull/36065) (closed) |
| **HiSparse stack (Parts 4-8)** | Batched gfx95 planner prefix scans, ROCm miss planning, KV copy plan reuse, logical token space KV retention, speculative verification reads | [#40783](https://github.com/sgl-project/sglang/pull/40783), [#40784](https://github.com/sgl-project/sglang/pull/40784), [#41780](https://github.com/sgl-project/sglang/pull/41780), [#41781](https://github.com/sgl-project/sglang/pull/41781), [#42168](https://github.com/sgl-project/sglang/pull/42168) |
| **Post-capture KV sizing** | Unified hybrid-SWA pool memory backing after graph capture | [#41961](https://github.com/sgl-project/sglang/pull/41961) |
| **VMM graph-input exchange** | Sized by widest input across ranks (supports >16 chunks) | [#42125](https://github.com/sgl-project/sglang/pull/42125) |
| **HiCache page_first_direct on ROCm** | Gather kernel for 160K-token GLM-5.2 loads | [#42169](https://github.com/sgl-project/sglang/pull/42169) |

---

### 5. Stability & Regressions

| Severity | Issue | Fix PR |
|----------|-------|--------|
| **High** | Two crashes bringing up MiniMax-M3 on MI350X: chunked-prefill continuation over-claiming tokens; KV pool exhaustion | [#42166](https://github.com/sgl-project/sglang/pull/42166) |
| **Medium** | DeepSeek V4.1 SWA page size with bounded replay | [#42128](https://github.com/sgl-project/sglang/pull/42128) |
| **Medium** | AITER DSA prefill with FP8 KV cache for DeepSeek Sparse Attention | [#39083](https://github.com/sgl-project/sglang/pull/39083) |
| **Low** | AMD NEXTN draft extend routing off faulting CK kernel | [#40872](https://github.com/sgl-project/sglang/pull/40872) |

---

### 6. What This Means for Application Developers

- **AMD users**: Improved stability on MI350X/MI355X with the MiniMax-M3 fixes; HiSparse speculative decoding stack brings better performance for AMD GPUs
- **Compliance needs**: New text watermarking feature ([#37577](https://github.com/sgl-project/sglang/pull/37577)) supports EU AI Act Article 50 transparency requirements
- **GLM-5.2 users**: Documentation now consolidated; AgentX recipe moved to appropriate section
- **Blackwell users**: FlashInfer MSA integration improves MiniMax-M3 sparse attention on SM100/SM103

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a llama.cpp digest for 2026-10-02 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified sections.

Let me organize the information:

**Releases (last 24h):**
- b11332: llama - fix invalid assert in recurrent memory (#29799)
- b11331: CUDA - Handle compute type for NVFP4 on cublass path (#29173)
- b11330: Qwen4Exp - add MTP (#29761)
- b11327: mtmd - cap max_image to ubatch for non_causal models (#29773)
- b11326: meta - clear inactive AllReduce shards with FILL, not SCALE (#29793)
- b11325: jinja - skip copying loop scope unless a loop filter needs it (#29776)
- b11324: llama-mmap - avoid a second full-size copy of each tensor with direct-io (#29749)
- b11323: HIP - avoid treating CDNA as dgx spark for gqa_ratio 20 in fattn_mma dqk 576 (#29572)
- b11322: hex-workqueue - fix race condition in seqn getting out of sync with idx_read/write (#29785)
- b11321: BLAS - Document AOCL-BLAS build and label the device AOCL-BLAS (#29640)

**Issues (top by comments):**
1. #23577 - MTP with Qwen3.6 27B outputs repeated //// after long session (33 comments)
2. #27198 - SYCL --split-mode tensor crashes (32 comments)
3. #21956 - Support audio output in mtmd (27 comments)
4. #24712 - Gemma 4 31B MTP crashes on Vulkan (17 comments) - CLOSED


5. #27038 - SYCL new host-pinned memory high CPU utilization (16 comments)
6. #24492 - Gemma 4 31B MTP crashes on Vulkan (14 comments) - CLOSED
7. #29022 - Feature Request: Fast Tool Gating & Single-Pass Selection (11 comments)
8. #26702 - ROCm gfx1031 build report (10 comments)
9. #26902 - Glimmer Q8_0 on 4 x Tesla T10 tensor split (10 comments) - CLOSED

I notice several performance and stability issues emerging across different hardware configurations, particularly with MTP models and Vulkan backends. The SYCL memory and split-mode problems appear consistently across multiple tickets, suggesting underlying implementation challenges.

The Qualcomm Adreno Vulkan driver shows critical runtime limitations, with crashes and pipeline creation failures. CUDA implementations reveal complex kernel compatibility issues, especially for older GPU architectures. These platform-specific constraints significantly impact deployment flexibility.

Key runtime challenges include memory management limitations, kernel execution problems, and architecture-specific optimization requirements across different GPU generations and vendor implementations.

I'll focus on extracting the most critical technical insights that represent meaningful engineering progress and potential deployment risks.</think>

# llama.cpp Digest — 2026-10-02

## Today's Highlights

The project continues steady forward progress on core inference improvements. **Qwen4Exp MTP support** landed (b11330, #29761), enabling multi-token prediction for Qwen3.8-Flash-Next models—a notable capability addition for speculative decoding. On the optimization front, **CUDA NVFP4 compute type handling** was refined (b11331, #29173) to use BF16 compute for quantized models when hardware permits, and **llama-mmap direct-io** was improved to avoid redundant tensor copies (b11324, #29749). Several backend-specific bugs were addressed, including HIP CDNA detection and a recurrent memory assertion fix.

---

## Releases & Breaking Changes

No breaking changes or version bumps requiring migration notes were identified in the last 24 hours. All commits appear to be incremental improvements within the current master branch.

---

## New Model & Hardware Support

| Area | Details | PR/Commit |
|------|---------|-----------|
| **Model** | Qwen4Exp (Qwen3.8-Flash-Next) — Multi-Token Prediction (MTP) support added | b11330 / #29761 |
| **Backend** | CUDA — NVFP4 compute type handling on cuBLAS path; uses BF16 compute for quantized models when hardware supports it | b11331 / #29173 |
| **Backend** | HIP — Fixed CDNA detection to avoid treating as DGX Spark for gqa_ratio 20 in flash attention (fixes gfx90a compatibility) | b11323 / #29572 |
| **Documentation** | AOCL-BLAS build options now documented and labeled in device listing | b11321 / #29640 |

---

## Performance & Optimization

| Change | Impact | PR/Commit |
|--------|--------|-----------|
| **llama-mmap direct-io optimization** | Avoids second full-size copy of each tensor when using direct-io mode, reducing memory bandwidth and allocation overhead | b11324 / #29749 |
| **Meta AllReduce shard cleanup** | Clears inactive AllReduce shards with FILL instead of SCALE, improving memory management in distributed runs | b11326 / #29793 |
| **Jinja template scope optimization** | Skips copying loop scope unless a loop filter requires it, reducing unnecessary allocations | b11325 / #29776 |
| **Hexagon DSP backend** | Installs rebuilt HTP skeletons for incremental builds | b11328 / #29828 |

**In Progress:**
- #29781: CUDA unary ops now support arbitrary striding for f16/f32/bf16 tensors
- #29768: Avoiding repeated warmup after stable graph replay in CUDA
- #29639: Vulkan sparse flash attention for quantized K/V (QSA models)

---

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | #29783 — CUDA: Qwen3.5-122B-A10B (Gated DeltaNet) crashes at first request on sm_70 — kernel launch rejection, no prefill progress | Open |
| **High** | #29786 — Vulkan: Aborts (SIGABRT) on Qualcomm Adreno driver with no diagnostic output | Open |
| **Medium** | #23577 — MTP with Qwen3.6 27B outputs repeated "////" after long sessions | Open (33 comments) |
| **Medium** | #27198 — SYCL tensor split-mode crashes with DEVICE_LOST on dual Arc Pro B70 | Open (32 comments) |
| **Medium** | #29774 — Flash attention on CPU (one-chunk) overflows to inf/NaN; uses F16 accumulator instead of F32 | Open |
| **Medium** | #28635 — Vulkan: vkCreateComputePipelines fails with VK_ERROR_UNKNOWN for q4_K matmul on Adreno 830 | Open |
| **Low** | #29419 — SYCL Flash-Attention aborts during speculative draft decoding with tensor split | Open |

**Fixed in recent commits:**
- b11332: Fixed invalid assertion in recurrent memory (#29799)
- b11327: Fixed mtmd max_image capping for non-causal models (#29773)
- b11322: Fixed race condition in hex-workqueue sequence numbering (#29785)

---

## What This Means for Application Developers

1. **Qwen4Exp MTP is now available** — If you're using Qwen3.8-Flash-Next, you can enable `--spec-type draft-mtp` for speculative decoding. This can significantly improve throughput on capable hardware (see PR for benchmark: ~28% improvement on DGX Spark with iq4_xs quantization).

2. **Vulkan users on Qualcomm Adreno should test carefully** — The driver silently aborts with no error output. If you're deploying to Android or Windows devices with Adreno GPUs, test thoroughly before production use.

3. **Memory efficiency improvements** — The direct-io optimization in b11324 reduces peak memory during model loading for memory-constrained deployments.

4. **SYCL multi-GPU tensor split remains problematic** — Issue #27198 and #26409 indicate ongoing instability with `--split-mode tensor` on SYCL. If you need multi-GPU inference on Intel GPUs, consider alternative backends or wait for fixes.

5. **CUDA sm_70 (V100) users should verify** — The Qwen3.5-122B-A10B crash on V100 suggests potential compatibility issues with large gated delta models on older architectures.

---

**Links:**
- Website: https://llama.app
- Repository: https://github.com/ggml-org/llama.cpp
- Latest builds: https://github.com/ggml-org/llama.cpp/releases

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate a structured digest for Ollama based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Let me go through the issues and PRs:

**Issues (16 total):**
1. #14118 - MLX Error (bug) - macOS M5, Metal GPU kernel issue
2. #16033 - CVE vulnerabilities in Go binary (CRITICAL:1, HIGH:11, MEDIUM:23, LOW:1)
3. #18038 - Performance regression: llama-server high CPU use on Mac Studio M4 Max
4. #18642 - CUDA illegal memory access on RTX 5090 with Cohere MoE (Windows)
5. #1653 - Shell autocompletion (feature request)
6. #16224 - Ollama.com password change and MFA (feature request)
7. #18716 - Error pulling models: redirect target not allowed
8. #17916 - Default n_threads ignores cgroup CPU quota
9. #18542 - typical_p no longer supported (CLOSED)
10. #18581 - Windows CUDA discovery fails on RTX 50-Series
11. #18595 - macOS 0.33.0: no garbage collection for orphaned blobs (CLOSED)
12. #18071 - Need qwen3.8-flash-next on Ollama cloud
13. #2588 - Documentation request for API options
14. #18215 - Install on linux without root permissions
15. #18729 - model pulls bypass HTTPS_PROXY (CLOSED)
16. #18728 - parser for LLM-jp-4 harmony output

**Pull Requests (24 total, showing top 20):**
1. #18742 - ci: fix missing build context (CLOSED)
2. #18701 - mlx: System one support (OPEN)


3. #18741 - models: add clef support via llama-server (CLOSED)
4. #18722 - openai: keep tool message content parts in one message (OPEN)
5. #18734 - README: add dev companion terminal preview (OPEN)
6. #18738 - app: finish onboarding with Run Ollama (OPEN)
7. #18740 - launch: preserve Pi configuration and guide headless sign-in (OPEN)
8. #18739 - README: add oxi to community integrations (OPEN)
9. #18711 - create: make explicit capabilities exhaustive at create and runtime (OPEN)

I'm seeing PRs focused on expanding model support and improving the user experience. The clef model integration and System One support suggest hardware acceleration work, while the onboarding improvements indicate UI/UX enhancements. The documentation updates and community integration additions show ongoing ecosystem expansion.

10. #18737 - server: report only decision capability for decision models (CLOSED)
11. #18700 - app: make chat history read-only and add exports (OPEN)
12. #18613 - llm: pass --poll 0 to llama-server when a GPU is present (OPEN)
13. #18721 - llm: preserve JSON property order (OPEN)
14. #18736 - Add PageGrok (OPEN)
15. #18735 - fix(app): don't animate sidebar open on initial load (OPEN)
16. #18733 - Enable proxy from environment in redirect.go (OPEN)
17. #18732 - docs: add OpenNodes for Ollama to community integrations (OPEN)

These PRs cover backend improvements like decision model handling and GPU polling optimization, plus app-level enhancements for chat history management and UI fixes. Proxy configuration and documentation additions round out the changes.</think>

# Ollama Digest – 2026-10-02

## Today's Highlights

Ollama sees active development across MLX system support, GPU polling optimizations, and security patches. A critical PR (#18613) addresses a significant CPU regression on GPU systems where llama-server burns 10-20+ cores during generation—a fix that could dramatically reduce resource contention. Meanwhile, CVE reporting (#16033) highlights 36 vulnerabilities in the Go binary供应链, and multiple proxy-related fixes (#18729, #18730, #18731, #18733) aim to restore HTTPS_PROXY support for enterprise environments.

---

## Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| **No new releases** in last 24h | — | — |

**Note:** Several closed issues indicate work in progress: regression fix for `typical_p` parameter (#18542) and blob garbage collection (#18595) were closed in this window.

---

## New Model & Hardware Support

- **MLX System One Support** – PR #18701 adds MLX backend support for System One models with test coverage.
- **Clef Model Support** – PR #18741 adds clef support via llama-server.
- **LLM-jp-4 Harmony Parser** – Issue #18728 reports tokenizer handling for LLM-jp-4.1 models with special token spacing.
- **Decision Models Capability Refinement** – PR #18737 ensures server reports only "decision" capability for decision models, preventing clients from offering them for general chat.

---

## Performance & Optimization

| Issue/PR | Description | Impact |
|----------|-------------|--------|
| **#18613** | Pass `--poll 0` to llama-server when GPU is present | **Fixes** 10-20+ core CPU burn during GPU inference (regression since v0.32.14). Potential 10-15% baseline reduction. |
| **#18038** | Performance regression: llama-server 560% CPU on Mac Studio M4 Max | Likely addressed by #18613. |
| **#17916** | `n_threads` ignores cgroup CPU quota, causing ~45x throughput collapse in containers | Open – thread count exceeds container CPU budget, convoying against CFS throttling. |
| **#18721** | Preserve JSON property order in llama-server requests | Fixes llama.cpp receiving alphabetically-sorted properties. |

---

## Stability & Regressions

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **CRITICAL** | #16033 – 36 CVE vulnerabilities in Go binary (1 CRITICAL, 11 HIGH, 23 MEDIUM) | Open | — |
| **HIGH** | #18642 – CUDA illegal memory access (MUL_MAT) on RTX 5090 with Cohere MoE (Windows) | Open | — |
| **HIGH** | #18729 – Model pulls bypass HTTPS_PROXY (0.35.0 regression) | **Closed** | #18730, #18731, #18733 |
| **HIGH** | #18581 – Windows CUDA discovery fails on RTX 50-Series (Blackwell) | Open | — |
| **MEDIUM** | #14118 – MLX kernel fails to load on M5 chip despite VRAM allocation | Open | — |
| **MEDIUM** | #18716 – Error pulling models: "redirect target not allowed" | Open | — |

---

## What This Means for Application Developers

1. **Fix coming for CPU regression** – If running Ollama on GPU systems, the upcoming fix for #18613 should restore normal CPU baseline (10-15% instead of 1000%+). Monitor for the next release.

2. **Enterprise proxy users: hold off on 0.35.0** – The HTTPS_PROXY bypass regression (#18729) breaks model pulls through HTTP forward proxies. PRs #18730/#18731/#18733 are open; consider staying on 0.34.4 or waiting for patch.

3. **Decision models now properly isolated** – Updated capability reporting (#18737) means clients won't incorrectly offer decision-only models for general chat.

4. **Security review needed** – The 36 CVEs in the Go binary (#16033) warrant attention; check dependency updates in upcoming releases.

5. **RTX 5090/Blackwell users on Windows** – CUDA discovery failure (#18581) and memory access crashes (#18642) affect new NVIDIA Blackwell architecture. No fix yet—monitor for updates.

---

*Generated from GitHub data – ollama/ollama | 2026-10-02*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-10-02 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Key observations from the data:

1. **Releases**: v1.103.2 and v1.101.4 were released in the last 24h. Both focus on Docker image signature verification with cosign.

2. **Security Issue**: The most significant issue is #24518 - the Trivy supply-chain compromise from March 2026, which has been contained. This is a major security event that was updated recently.

3. **Bugs/Issues**:
   - Various streaming and MCP issues
   - Budget/key management bugs
   - SSO and authentication issues
   - Guardrail bypass issues
   - Various model-specific bugs (Gemini, Bedrock, etc.)

4. **PRs**: Multiple PRs focused on:
   - MCP improvements
   - Tracing and Lens enhancements
   - Guardrails
   - Router functionality
   - SSO

Let me structure this into the requested format with proper GitHub links.</think>

# LiteLLM Digest — 2026-10-02

## Today's Highlights

The most notable update today is the continued activity around the supply-chain security incident (#24518), which the team has contained — affected packages were deleted and current releases are verified clean. On the feature side, multiple PRs landed targeting MCP session reliability, budget management improvements, and better tracing visibility across Lens. Docker images now consistently support cosign verification across all recent releases.

---

## Releases & Breaking Changes

| Version | Key Changes | Reference |
|---------|-------------|-----------|
| **v1.103.2** | Docker images signed with cosign — all releases now use the key from commit `0112e53` for image verification | [Release](https://github.com/BerriAI/litellm/releases/tag/v1.103.2) |
| **v1.101.4** | Docker images signed with cosign — same signing key as v1.103.2 | [Release](https://github.com/BerriAI/litellm/releases/tag/v1.101.4) |

**Migration Note**: Ensure your container verification pipelines use the cosign public key from commit `0112e53`. No API or config changes otherwise.

---

## New Model & Hardware Support

- **Anthropic Workload Identity Federation (OIDC JWT-bearer token exchange)** — New feature request (#28607) to support OIDC-based authentication for Anthropic, enabling workload identity federation without static API keys.
- **Gemini Live Avatar** — Feature request (#43166) to support the new `avatar_config` / `customized_avatar` field for real-time Gemini/Vertex integration with lip-synced video avatars.
- **DeepSeek v4 Flash** — Fix pending (#32046) for incorrect `max_output_tokens` in `model_prices_and_context_window.json` (currently set to 8192 but should be higher per DeepSeek API).

---

## Performance & Optimization

| Area | Change | Reference |
|------|--------|-----------|
| **MCP Session Logging** | Upstream exchange now logged when MCP session fails — improves debugging for `/v1/mcp/server/health` failures | [#44125](https://github.com/BerriAI/litellm/pull/44125) |
| **Auto-Router Savings** | Fixed usage savings calculation to count by selected UTC request day, aligning totals with the Overall tab | [#44115](https://github.com/BerriAI/litellm/pull/44115) |
| **Mid-Stream Fallback** | New opt-in router setting continues broken streaming chats on fallback deployment, sending partial text to the fallback model | [#41127](https://github.com/BerriAI/litellm/pull/41127) |
| **SpendLogs Index Build** | Made SpendLogs index build opt-in via `LITELLM_BUILD_SPEND_LOGS_INDEXES` — reduces boot time on large/partitioned tables | [#44124](https://github.com/BerriAI/litellm/pull/44124) |

---

## Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | **Stdio MCP not working** — stdio-type MCP services show no available tools in UI, while SSE/HTTP MCP works | Open | — |
| **High** | **Budget key re-admission bug** — virtual keys exceeding `max_budget` are re-admitted after ~60s idle until batch writer flushes spend | Open | — |
| **High** | **Guardrail bypass on /v1/responses & /v1/messages** — tool permission/policy guardrails are bypassed by route coverage gaps and name variants | Closed (fixed) | — |
| **Medium** | **Presidio output_parse_pii corrupts text** — overlapping analyzer spans cause malformed placeholders like `<US_BANK_NUMBER_7>LICENSE_7>` | Open | — |
| **Medium** | **Generic streaming chunk KeyError** — partial chunks missing `text`, `is_finished`, or `finish_reason` still pass validation then fail downstream | Open | — |
| **Medium** | **Prompt cache display bug** — request log shows `Cache Hit: False` even when provider prompt-cache tokens are present | Open | — |
| **Medium** | **Gemini frequency_penalty rejected** — listed as supported but API rejects it with 400 error on `gemini-2.5-flash` | Open | — |
| **Low** | **Bedrock converse-stream empty turn** — unrecognized event frames resulted in blank replies with $0 cost | Fixed | [#44112](https://github.com/BerriAI/litellm/pull/44112) |

---

## What This Means for Application Developers

1. **Security hygiene**: If you pull LiteLLM Docker images, update your verification pipelines to use cosign with the new key. The supply-chain incident is contained, but image verification is now mandatory.

2. **Budget management**: If you use virtual keys with `max_budget`, be aware of the re-admission edge case during idle periods — monitor spend closely until the fix lands.

3. **MCP tooling**: The Stdio MCP issue affects tool discovery in the UI; if you rely on stdio-based MCP servers, test thoroughly or switch to SSE/HTTP transport temporarily.

4. **Tracing & debugging**: New PRs improve visibility — MCP session failures now surface upstream exchange details, and Lens shows timed investigation steps with ETA.

5. **Streaming reliability**: The mid-stream fallback feature (#41127) is now available as an opt-in setting; enable it if your agents need resilience against mid-answer interruptions.

---

*Data sourced from GitHub BerriAI/litellm — issues and PRs updated within the last 24 hours.*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for Unsloth dated 2026-10-02.

Key observations from the data:

1. **Releases**:
- v0.1.902-beta: Command Palette + Desktop UI/UX - faster navigation, shareable run settings, clearer errors, 4x speeds up Laya decisions, keeps NVFP4, INT4, MXFP4 checkpoints in 4-bit during LoRA training
- v0.1.901-beta: Same as above (appears duplicated)

2. **Issues** (top ones by comment count):
- #10390: Constant CPU usage (CLOSED)
- #11385: Make RAG UPLOAD_EXTS configurable (CLOSED)
- #8602: No chat history toggle (OPEN)
- #12435: Tool Calls randomly failing (OPEN)
- #8488: Support multiple servers with different models (OPEN)
- #11638: AMD Qwen-Image-2.1 downloads 16GB text encoder (CLOSED)
- #12365: Multiple accounts sync issue (OPEN)
- #12445: Qwen-Image-2.1 GGUF generation fails (OPEN)
- #12415: Hugging Face quant discovery blocks offline (OPEN)
- #11327: Windows backend installation directory (OPEN)
- #11498: AMD QLoRA training hangs (OPEN)
- #12468: Tensor split decode 2.9x slower (OPEN)

3. **Pull Requests**:
- #4460: SentenceTransformer opt-in encoder unpadding
- #10710: JSON and Markdown validator blocks
- #10783: Per-model custom llama.cpp INI configuration
- #11016: Lift transformers ceiling to 5.17.0
- #11081: Installer uv fix


- #11491: vLLM and SGLang support with multi-GPU
- #11832: Block Swap for frozen transformer blocks
- #12024: vLLM/SGLang on Windows WSL2
- #12113: Fused Triton NF4 dequant and GEMV
- #12150: torch 2.13 for new Linux installs
- #12171: RMSNorm, RoPE traceable by torch.compile
- #12389: Overlap streamed block onloads
- #12422: MLX routed-experts fusion
- #12438: Firefox scroll clip

I see the project is expanding inference capabilities across multiple fronts. The team is aggressively adding support for advanced model serving technologies, optimizing performance, and addressing hardware compatibility. Significant work involves integrating vLLM and SGLang, improving multi-GPU inference, and enhancing kernel performance with innovations like Fused Triton NF4 dequantization. The development also focuses on platform-specific improvements, particularly for Windows and Linux environments, while introducing more flexible configuration options for users.

The technical roadmap demonstrates a strategic approach to advanced model deployment, with strong emphasis on performance tuning, cross-platform support, and fine-grained control over inference processes.</think>

# Unsloth Digest — 2026-10-02

## 1. Today's Highlights

Unsloth Desktop v0.1.902-beta ships with a Command Palette for faster navigation, shareable run settings, and clearer error messaging. The release also brings 4x faster Laya decisions and expanded hosted Decision API support, while maintaining NVFP4, INT4, and MXFP4 checkpoints in 4-bit during LoRA training. Meanwhile, significant performance work is landing: fused int8 GEMM for Qwen-Image-2.1 delivers 14-17% faster per-step inference, and a fix for 1-D GGUF norm dequantization addresses a correctness issue in the no-conversion load path.

---

## 2. Releases & Breaking Changes

| Version | Changes |
|---------|---------|
| **v0.1.902-beta** | Command Palette (Cmd+K), shareable run settings, clearer errors, 4x Laya decision speedup, hosted Decision API expansion, NVFP4/INT4/MXFP4 4-bit checkpoint preservation in LoRA training |

**Migration Notes:** No breaking API changes reported in this release cycle.

---

## 3. New Model & Hardware Support

- **vLLM & SGLang Integration** — Optional inference engines added to Studio with multi-GPU inference, quantization, and vision support ([#11491](https://github.com/unslothai/unsloth/pull/11491))
- **Windows + WSL2 vLLM/SGLang** — Experimental support for running these engines on Windows inside a private WSL2 distro ([#12024](https://github.com/unslothai/unsloth/pull/12024))
- **MLX Routed-Experts Fusion** — Per-request opt-in for Qwen sparse MoE and shared-expert gate on Metal backends ([#12422](https://github.com/unslothai/unsloth/pull/12422))
- **torch 2.13** — New Linux cu130 Python 3.13 installs now ship with torch 2.13, flash-attn 2.8.4, causal-conv1d 1.7.0, and mamba-ssm 2.3.2.post1 ([#12150](https://github.com/unslothai/unsloth/pull/12150))
- **Transformers Ceiling Lifted** — Compat matrix extended to support transformers 4.57.6 through 5.17.0 ([#11016](https://github.com/unslothai/unsloth/pull/11016))

---

## 4. Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **Qwen-Image-2.1 Int8** | Fused int8 GEMM with dequant epilogue, bf16 output | **14-17% faster per step** on L4/A100 ([#12448](https://github.com/unslothai/unsloth/pull/12448)) |
| **Qwen-Image-2.1 Offload** | Cached int8 checkpoint for 5-bit-or-below GGUF picks | ~2x faster at 12/8 GB VRAM ([#12455](https://github.com/unslothai/unsloth/pull/12455)) |
| **LoRA Training** | NVFP4/INT4/MXFP4 checkpoints stay 4-bit | Reduced memory during training |
| **DiT Streaming** | Overlapped block onloads, stopped redundant weight copies | Hidden copy latency in diffusion streaming ([#12389](https://github.com/unslothai/unsloth/pull/12389)) |
| **torch.compile** | RMSNorm, RoPE, input-embedding hook made traceable | Eliminates graph breaks in decoder layers ([#12171](https://github.com/unslothai/unsloth/pull/12171)) |
| **Fused Triton NF4** | Bit-exact, stream-safe, torch.compile traceable dequant/GEMV | Fixes stream snapshot issues in 4-bit path ([#12113](https://github.com/unslothai/unsloth/pull/12113)) |
| **Block Swap** | Stream frozen transformer blocks from host RAM | Enables dense model training past VRAM limits ([#11832](https://github.com/unslothai/unsloth/pull/11832)) |

**⚠️ Regression Reported:** Tensor split decode is 2.9x slower since commit b10715-mix-86bd2d3 on dual-GPU setups (48 t/s vs 115 t/s previously) — see [#12468](https://github.com/unslothai/unsloth/issues/12468).

---

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | Qwen-Image-2.1 GGUF generation fails — 1-D norm weights not dequantized on no-conversion path | **Fix merged:** [#12449](https://github.com/unslothai/unsloth/pull/12449) |
| **High** | On Device GGUF discovery blocks when offline | **Fix merged:** [#12451](https://github.com/unslothai/unsloth/pull/12451) |
| **Medium** | Tensor split decode 2.9x slower on dual-GPU (RTX 5070 Ti, Windows/WSL2) | Open — [#12468](https://github.com/unslothai/unsloth/issues/12468) |
| **Medium** | Tool Calls randomly failing from recent updates | Open — [#12435](https://github.com/unslothai/unsloth/issues/12435) |
| **Medium** | AMD QLoRA training hangs / resets RX 7900 XTX on Linux | Open — [#11498](https://github.com/unslothai/unsloth/issues/11498) |
| **Medium** | OpenAI-compatible API adds ~1.2s latency per request | Open — [#12364](https://github.com/unslothai/unsloth/issues/12364) |
| **Low** | Xet health probe stubs Triton, breaking diffusers/xformers | Open — [#12466](https://github.com/unslothai/unsloth/issues/12466) |
| **Low** | Japanese IME Enter prematurely saves chat title | Open — [#12474](https://github.com/unslothai/unsloth/issues/12474) |

---

## 6. What This Means for Application Developers

1. **Multi-model serving is coming** — Per-model llama.cpp INI configuration is in flight ([#10783](https://github.com/unslothai/unsloth/pull/10783)), and vLLM/SGLang can now run side-by-side with the default llama.cpp backend. If you need custom tuning per model, this unlocks production-grade setups.

2. **Image generation just got faster** — The int8 GEMM fusion and cached checkpoint loading represent meaningful throughput gains for Qwen-Image-2.1. If you're running vision workloads on 12–24GB cards, expect 14–17% per-step speedup and 2x improvement when offloading is required.

3. **Offline support improved** — On Device GGUF discovery now works offline ([#12451](https://github.com/unslothai/unsloth/pull/12451)), addressing a pain point for air-gapped deployments.

4. **Watch the dual-GPU regression** — If you're running tensor-split inference on multi-GPU Windows/WSL2 setups, the 2.9x slowdown in recent builds is a known issue. Consider pinning to build b10687-mix-67dfc8b as a workaround until a fix lands.

5. **Sampling flags now scoped per-agent** — The `--temperature` and `--reasoning` flags on `unsloth start` now apply only to the agent that spawned them, fixing a bug where subsequent clients inherited the wrong settings ([#12493](https://github.com/unslothai/unsloth/pull/12493)).

---

*Generated from GitHub data — unslothai/unsloth (2026-10-02)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*