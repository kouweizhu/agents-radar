# AI Infrastructure Digest 2026-10-17

> Generated: 2026-10-17 00:44 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report for the AI infrastructure projects covered in today's digests: vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me compile this based on the information provided in each digest.

Let me organize this systematically:

**1. Ecosystem Overview**
- Need 3-5 sentences on the overall AI infrastructure landscape

**2. Activity Comparison**
- Need a table comparing issues, PRs, and releases

**3. Model Support Race**
- Compare which projects support which new models

**4. Performance Frontier**
- Where optimization efforts are concentrated

**5. Layer Positioning**
- How each project differs by layer

**6. Trend Signals**
- Industry trends and what to watch

Let me go through each digest to extract the relevant data:

**vLLM:**
- Issues: 95 (top 30 by comment count)
- PRs: 500 (top 20 by comment count)
- Releases: 0 in last 24h
- New models: ROCm gfx950/MI355X (Qwen3.8), NVIDIA Nemotron 3.5 ASR Streaming, Nemotron-H Lightning NVFP4
- Performance: FlashAttention KV-cache rebuild, Qwen3-Next fused kernel, model loader checkpoint eviction, diffusion CPU reads

**SGLang:**
- Issues: Many (tracking CUDA coredumps, PD disaggregation, DeepSeek-V4.1)
- PRs: Many (native tensor output, MuseSpark, Rust/grpc API, DSv41 engram, Qwen VL token-space)
- Releases: None in last 24h
- New models: DeepSeek-V4.1 Flash on RTX PRO 6000, GLM-5.3-Flash SM120, Qwen VL, MuseSpark multimodal


- Performance: High, including native tensor output, prefill scoring, decoder bounded replay, Qwen3.5 norm fusion, HiCache analysis

**llama.cpp:**
- Issues: ~50+ (Vulkan regressions, SYCL issues)
- PRs: Many (hexagon q2_0, slice-model, Qwen3 bidirectional, beam model, KV cache optimization)
- Releases: Multiple (b11702 OpenCL MxFP4, b11701 Beam, b11700 Granite Switch, etc.)
- New models: Beam (Reflection), Granite Switch Decision, Mellum2.1 MTP, Adreno X1 OpenCL
- Performance: Robust across KV cache merging, ngram caching, AVX2 optimization

**Ollama:**
- Issues: 23
- PRs: Several
- Releases: v0.40.6 (GGUF q2_0, Windows runner orphan fix, Clef cloud launch)
- New models: PPLX Decider v1.1 MLX, LLM-jp-4.1, Gemma 4 max_soft_tokens, EmbeddingGemma-2
- Performance: Model loading refactor, registry transfer fix, speculative drafting

**LiteLLM:**
- Issues: ~20+
- PRs: ~30+ 
- Releases: v1.107.0-dev.3, Docker cosign signing
- New models: Bed Haiku/Sonnet 5.5 structured output, Bedrock Fable 5, Azure AI Microsoft-Decision-1 Entra ID
- Performance: CLI startup optimization

, streaming handler

**Unsloth:**
- Issues: 16
- PRs: 176
- Releases: None
- New models: FLUX.3 Image Klein, video model components
- Performance: Wheel download optimization, GPU UUID fix, knowledge base chunking

The landscape spans model serving, local inference, gateway APIs, and fine-tuning tools. Each platform targets different deployment scenarios and optimization requirements.</think>

# AI Infrastructure Ecosystem Comparison — 2026-10-17

## 1. Ecosystem Overview

The AI inference stack is consolidating around three dominant patterns: full-featured serving engines (vLLM, SGLang) competing on throughput and features for cloud deployments; lightweight local runtimes (llama.cpp, Ollama) racing toward mobile and edge viability; and gateway/abstraction layers (LiteLLM) solving multi-provider orchestration. Meanwhile, fine-tuning tooling (Unsloth) is expanding from supervised training into DPO/ORPO/GRPO preference learning. Today's activity reflects this bifurcation: SGLang and vLLM push Blackwell (SM120) and MI355X hardware limits, while llama.cpp and Ollama broaden mobile GPU support (Adreno X1, MLX). The net effect is an ecosystem maturing toward production-grade reliability — but with significant regression surface area across Flash Attention, KV offloading, and structured output pipelines.

---

## 2. Activity Comparison

| Project | Issues (active) | PRs (recent) | Releases (24h) | Key Hotspots |
|---------|-----------------|--------------|----------------|--------------|
| **vLLM** | 95 | 500 | 0 | ROCm MI355X, NVFP4 batching, KV offloading |
| **SGLang** | ~60 | ~200 | 0 | DeepSeek-V4.1, PD disaggregation, HiCache |
| **llama.cpp** | ~50 | ~100 | 7 | OpenCL MxFP4, Beam/Granite, Hexagon q2_0 |
| **Ollama** | 23 | ~15 | 1 (v0.40.6) | Windows orphans, Cloud 503, Gemma 4 |
| **LiteLLM** | ~20 | ~30 | 1 (v1.107.0-dev.3) | Bedrock structured output, spend logs |
| **Unsloth** | 16 | 176 | 0 | Multi-instance linking, FLUX.3, DPO/GRPO |

**Observations:**

- **Unsloth** leads PR volume (176) despite low issue count — heavy feature development on multi-instance infrastructure and training pipelines.
- **vLLM + SGLang** dominate issue volume, reflecting production hardening challenges at scale.
- **llama.cpp** shipped 7 commits — highest release velocity today, focused on mobile/edge kernel work.
- **Ollama** remains the smallest surface area but has critical production bugs (503 errors, spend-log drops).

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1 Flash** | ✅ | ✅ (RTX PRO 6000) | — | — | — | — |
| **Qwen3.8 Flash-Next** | ✅ (ROCm MXFP4) | ✅ | — | — | — | — |
| **Nemotron-H Lightning NVFP4** | ✅ | — | — | — | — | — |
| **Nemotron 3.5 ASR Streaming** | ✅ | — | — | — | — | — |
| **GLM-5.3 Flash** | — | ✅ (SM120 workaround) | — | — | — | — |
| **Beam (Reflection)** | — | — | ✅ | — | — | — |
| **Granite Switch Decision** | — | — | ✅ | — | — | — |
| **PPLX Decider v1.1** | — | — | — | ✅ (MLX) | — | — |
| **Gemma 4** | — | — | — | ✅ (max_soft_tokens) | — | — |
| **Bedrock Haiku 5.5** | — | — | — | — | ✅ | — |
| **Bedrock Sonnet 5.5** | — | — | — | — | ✅ | — |
| **FLUX.3 Image Klein** | — | — | — | — | — | ✅ |
| **MuseSpark** | — | ✅ | — | — | — | — |

**Who's ahead:**

- **Cloud/HPC serving**: vLLM and SGLang lead on DeepSeek and Qwen3 — the models driving production LLM traffic.
- **Mobile/Edge**: llama.cpp leads on Adreno X1 and Hexagon; Ollama leads on MLX integration.
- **Enterprise gateway**: LiteLLM dominates Bedrock structured output coverage.
- **Fine-tuning**: Unsloth uniquely offers DPO/ORPO/GRPO with preference learning.

---

## 4. Performance Frontier

| Optimization Area | Projects Active | Key Work Items |
|------------------|-----------------|-----------------|
| **KV cache / offloading** | vLLM, SGLang, llama.cpp | vLLM: FlashAttention view rebuild caching (~21µs/layer); SGLang: host-tier HiCache hit-length overhead (44-66% loss at 80% hit rate); llama.cpp: KV merge optimization |
| **Quantization** | vLLM, llama.cpp, LiteLLM | llama.cpp: IQ2_NL/IQ3_NL, Hexagon q2_0/q1_0; vLLM: MXFP4 on MI355X; LiteLLM: custom_cost_per_token double-billing fix |
| **Batching** | vLLM, SGLang | vLLM: NVFP4 batch-invariant serving; SGLang: prefill scoring optimization |
| **Kernel fusion** | vLLM, SGLang, llama.cpp | vLLM: QK-norm+RoPE+gate fused kernel (ROCm); llama.cpp: ngram cache read-by-reference; SGLang: DSv4.1 engram fusion |
| **Streaming / SSE** | LiteLLM, Ollama | LiteLLM: header withholding regression (v1.105.0+); Ollama: thinking display fix |
| **CLI / startup** | LiteLLM, Unsloth | LiteLLM: SDK-less CLI (~4.6s saved); Unsloth: wheel download halving |

**Frontier leaders:**

- **Throughput under long context**: SGLang's HiCache analysis is the most rigorous — exposes 44-66% throughput loss at high hit rates, a finding most teams would rather not publish.
- **Mobile GPU**: llama.cpp's OpenCL MxFP4 kernel for Adreno X1 is the only mobile-optimized MoE kernel shipping today.
- **CLI performance**: LiteLLM's SDK-less startup proves that Python-based CLIs can match shell-script latency.

---

## 5. Layer Positioning

| Layer | Projects | Primary Role |
|-------|----------|--------------|
| **Serving engine (remote)** | vLLM, SGLang | GPU-optimized inference servers with KV offloading, prefix caching, speculative decoding. Target: cloud/cluster deployments. |
| **Local runtime** | llama.cpp, Ollama | CPU/GPU/Apple Silicon inference runtimes. llama.cpp: cross-platform; Ollama: developer-friendly UX. Target: edge, laptops, on-prem. |
| **Gateway / proxy** | LiteLLM | Multi-provider abstraction, cost logging, retries, auth. Target: engineering teams standardizing on one SDK across providers. |
| **Fine-tuning / training** | Unsloth | LoRA/QLoRA fine-tuning, now expanding to DPO/ORPO/GRPO preference learning, multi-instance serving. Target: fine-tuners, RLHF workflows. |

**Competitive dynamics:**

- **vLLM vs SGLang**: Converging on features (PD disaggregation, prefix caching, speculative decoding). Differentiation now at scheduler aggressiveness and ROCm investment.
- **llama.cpp vs Ollama**: llama.cpp is the engine; Ollama is the productized wrapper. Today's Ollama bugs (Cloud 503, spend-log drops) would be backend bugs in llama.cpp.
- **LiteLLM vs vLLM**: Not directly competitive — LiteLLM can route to vLLM as a backend. However, LiteLLM's proxy-layer bugs (spend-log drops, audit-log fire-and-forget) create data integrity risks that vLLM's native logging avoids.
- **Unsloth vs others**: Unique position — the only project combining fine-tuning with multi-instance serving infrastructure. The `/v1/models` unification via `@name/model` syntax is a compelling deployment pattern.

---

## 6. Trend Signals

### What Agent / Application Developers Should Watch

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Hardware fragmentation intensifies** | gfx950/MI355X (ROCm), RTX PRO 6000 (PCIe), Adreno X1 (OpenCL), MLX, Hexagon — 6 new backends in one day | Test on target hardware before production; don't assume CUDA = fast |
| **Structured output is becoming reliable** | LiteLLM Bedrock Haiku/Sonnet 5.5 fixes; vLLM XGrammar + DFlash (regression exists but investment clear) | Agentic tool-calling is viable on more models; still needs fallbacks for edge cases |
| **KV offloading is the next scalability lever** | vLLM TP-agnostic offloading tracker, SGLang HiCache host-tier work | Multi-tenant deployments will offload more aggressively; monitor hit rates |
| **Preference learning goes mainstream** | Unsloth DPO/ORPO/GRPO, LiteLLM spend-log improvements | RLHF pipelines are no longer research-only; infrastructure for preference data is maturing |
| **Observability is catching up** | LiteLLM async logging fix, vLLM tool-calling metrics, Unsloth multi-instance linking | Debugging production agents is getting easier; demand metrics from your inference provider |
| **Windows is still second-class** | Ollama runner orphans fixed, Unsloth wheel download hangs, LiteLLM proxy env vars | If you deploy to Windows, test extensively — CI coverage gaps exist |
| **Regression velocity is high** | 4 critical bugs across 3 projects (DeepSeek-V4.1 crash, GLM-5.3 gibberish, Ollama 503, LiteLLM spend-log drops) | Don't upgrade serving infrastructure without staging validation; subscribe to security/performance release notes |

### Bottom Line

The inference ecosystem is bifurcating into **cloud-scale serving** (vLLM, SGLang) and **local/edge runtimes** (llama.cpp, Ollama), with **gateway** (LiteLLM) and **fine-tuning** (Unsloth) as orthogonal layers. Today's activity shows all three tracks advancing aggressively. For infrastructure engineers: **validate your hardware backend explicitly**, **stage upgrades before production**, and **demand structured output fallbacks** for agentic tool use. The regression surface is non-trivial, but the feature velocity is also unmatched.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze this GitHub data and create a structured digest for vLLM project.

The data is from 2026-10-17, showing:
1. No releases in the last 24h
2. 95 issues (top 30 by comment count)
3. 500 PRs (top 20 by comment count)

Let me categorize the key items:

**Releases & Breaking Changes:**
- None in last 24h

**New Model & Hardware Support:**
- ROCm/AMD: gfx950 / MI355X optimization (Qwen3.8-2.4T-A95B, Qwen3.8-Flash-Next)
- NVIDIA Nemotron 3.5 ASR Streaming support
- NVIDIA Nemotron-H Lightning NVFP4 batch-invariant serving

**Performance & Optimization:**
- FlashAttention rebuilds KV-cache views on every call (~21 µs CPU/layer issue)
- Qwen3-Next fused QK-norm+RoPE+gate Triton kernel
- Model loader checkpoint eviction for large safetensors
- DiffusionGemma single-pass CPU reads

**Stability & Regressions:**
- DeepSeek-V4.1-Flash + DSpark illegal memory access (SM120 sparse-MLA)
- XGrammar request termination with V2 DFlash
- GLM-5.3-Flash gibberish at low concurrency (ROCm)
- GLM-5.2-FP8 + prefix caching returns empty content
- Triton kernel JIT compilation during inference
- Various scheduler/prefix caching bugs
- NixlConnector KV blocks released while READ in flight

**New Features:**
- Request cancellation API endpoints
- Tool-calling inference tracing and metrics
- TP-agnostic KV offloading


- API surface attribution for metrics/traces

I'll synthesize the key infrastructure insights from the vLLM development landscape. The project is focusing on cross-platform optimization, particularly for AMD and NVIDIA GPUs, with significant work on performance, stability, and developer experience. Key themes include addressing hardware-specific challenges, improving memory management, and enhancing observability for inference workloads.</think>

# vLLM Daily Digest — 2026-10-17

## Today's Highlights

The vLLM project continues active development across ROCm/AMD GPU optimization, KV offloading, and observability. Notably, a Q4 2026 roadmap issue has been posted for community review, and several correctness bugs affecting DeepSeek-V4.1 and GLM models require attention. The model loader now supports checkpoint eviction to handle safetensors files larger than RAM.

---

## Releases & Breaking Changes

No new releases in the last 24 hours.

---

## New Model & Hardware Support

| Area | Details | Reference |
|------|---------|-----------|
| **ROCm/AMD** | gfx950 / MI355X performance optimization tracking for Qwen3.8-2.4T-A95B (MXFP4) and Qwen3.8-Flash-Next | [#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **NVIDIA** | Nemotron-H Lightning NVFP4 batch-invariant serving (aligned with training) under `VLLM_BATCH_INVARIANT=1` | [#62017](https://github.com/vllm-project/vllm/pull/62017) |
| **NVIDIA** | Nemotron 3.5 ASR Streaming (streaming ASR model) support | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **ROCm** | AITER enabled by default on CDNA3+ (MI300 series) | [#62092](https://github.com/vllm-project/vllm/pull/62092) |

---

## Performance & Optimization

| Category | Details | Impact | Reference |
|----------|---------|--------|-----------|
| **KV Cache** | FlashAttention backend rebuilds KV-cache views every call (~21 µs CPU/layer) | TTFT regression since #44455; caching could yield 12-16% TTFT improvement | [#59534](https://github.com/vllm-project/vllm/issues/59534) |
| **Model Loader** | Safetensors checkpoint eviction when file exceeds 90% RAM | Prevents OOM during large model loading | [#62110](https://github.com/vllm-project/vllm/pull/62110) |
| **CPU Inference** | DiffusionGemma one-step reads in single forward pass | Reduced CPU backend overhead | [#61480](https://github.com/vllm-project/vllm/pull/61480) |
| **ROCm Kernel** | Fused QK-norm+RoPE+gate Triton kernel for Qwen3-Next/Qwen3.5 | Enabled on ROCm | [#51406](https://github.com/vllm-project/vllm/pull/51406) |
| **KV Offloading** | TP-agnostic KV offloading tracker (canonical sharing across different TP sizes) | In progress; help wanted | [#61886](https://github.com/vllm-project/vllm/issues/61886) |

---

## Stability & Regressions

| Severity | Issue | Impact | Status |
|----------|-------|--------|--------|
| **High** | DeepSeek-V4.1-Flash + DSpark speculative decoding — illegal memory access in SM120 sparse-MLA prefill on long prompts | Crash during spec decode | Open; [#56771](https://github.com/vllm-project/vllm/issues/56771) |
| **High** | XGrammar request termination with V2 DFlash probabilistic drafting and block rejection | Intermittent structured output failures | Open; [#61383](https://github.com/vllm-project/vllm/issues/61383) |
| **High** | NIXLConnector: KV blocks released while remote READ in flight, decode silently consumes overwritten KV | Data corruption in P/D mode | Fix merged; [#61549](https://github.com/vllm-project/vllm/pull/61549) |
| **Medium** | GLM-5.3-Flash gibberish at low concurrency (ROCm) | Incorrect output | Open; [#59413](https://github.com/vllm-project/vllm/issues/59413) |
| **Medium** | GLM-5.2-FP8 + prefix caching + FP8 KV returns empty content on repeated prompts | Silent data corruption | Open; [#60494](https://github.com/vllm-project/vllm/issues/60494) |
| **Medium** | Mamba2 chunk scan kernel writes NaN on Hopper (sm90) with certain autotune configs | Incorrect model output | Fix merged; [#61718](https://github.com/vllm-project/vllm/pull/61718) |
| **Medium** | Triton kernel JIT compilation during inference | Unexpected latency spikes | Open; [#43009](https://github.com/vllm-project/vllm/issues/43009) |
| **Low** | LoRA silently no-ops for wrapper models with LM mounted under `language_model` | LoRA not applied | Open; [#48019](https://github.com/vllm-project/vllm/issues/48019) |

---

## What This Means for Application Developers

1. **Deployment considerations**: If using ROCm on MI300 series, AITER is now enabled by default—ensure your workloads benefit; explicit `VLLM_ROCM_USE_AITER=0` can revert if needed.

2. **KV offloading**: The TP-agnostic KV offloading work is progressing; this will enable heterogeneous cluster serving where different TP sizes share offloaded KV—a major step for multi-tenant deployments.

3. **Structured output**: XGrammar + DFlash integration has intermittent issues—consider fallbacks or testing thoroughly before production deployment.

4. **Observability gains**: New tool-calling metrics and API surface attribution are landing, improving debugging for agentic workloads.

5. **Large checkpoint loading**: The safetensors eviction fix helps when loading huge models on memory-constrained nodes—worth upgrading once available.

6. **Q4 roadmap**: The Q4 2026 roadmap is up for review—community input on priorities is welcome.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang and create a structured digest for 2026-10-17.

Looking at the data:

1. **Releases** - None in the last 24h

2. **Key Issues** - Let me identify the most important ones:
   - #26340: CUDA Coredump Tracker (340 comments - lots of activity)
   - #21788: Prefill Context Parallelism Roadmap Q4 - important roadmap item
   - #40877: DeepSeek-V4.1-Flash on 8x RTX PRO 6000 - production field report
   - #42012: GLM-5.3-Flash on SM120 - attention backend crash
   - #43699: PD Disaggregation Roadmap Q4
   - #36669: GLM-5.3-Flash thinking output bug
   - #43949: RFC Monokernel framework
   - #42170: DeepSeek V4.1 Optimization roadmap
   - #43412: Speculative decoding crashes with non-greedy
   - #44479: CI runner out of disk
   - #44810: DeepSeek-V4 BF16 checkpoint routing bug
   - #44735: HiCache host-tier hit bug
   - #44656: HiCache throughput loss analysis

3. **Key PRs**:
   - #42248: Native tensor output and prefill scoring optimizations
   - #44666: MuseSpark runtime and multimodal support
   - #42118: Rust/grpc API additions
   - #43405: DSv41 Engram table backends
   - #43963: Token-space strategy for Qwen VL
   - #43964: Enable token-space processing at startup
   - #43422: Shared media processor mixin
   - #44089: AMD fix for match_cutedsl_decode
   - #35055: AMD MoE router fix
   - #44812: Fuse GemmaRMSNorm with FP8/NVFP4 input quant
   - #44403: Enable decoder bounded replay by default
   - #44823: Scheduler fix for chunked prefill

Now I'll organize this into the requested sections.</think>

# SGLang Digest — 2026-10-17

## 1. Today's Highlights

SGLang continues advancing DeepSeek V4.1 optimization and Blackwell (SM120) support. The Q4 roadmap for Prefill Context Parallelism (#21788) and PD Disaggregation (#43699) are taking shape, while multiple correctness bugs affecting RTX PRO 6000 deployments and HiCache host-tier caching require attention. The monokernel framework RFC (#43949) proposes a vendor-neutral kernel architecture.

---

## 2. Releases & Breaking Changes

No releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Details | PR/Issue |
|------|---------|----------|
| **DeepSeek-V4.1 Flash** | Field report on 8× RTX PRO 6000 (SM120, 96GB PCIe) — working config documented | #40877 |
| **GLM-5.3-Flash on SM120** | fa4 attention crashes at CUDA-graph capture; triton backend is workaround | #42012 |
| **Qwen VL Models** | Token-space strategy added for Qwen2-VL through Qwen3-Omni | #43963, #43964 |
| **MuseSpark** | New multimodal runtime and tests added | #44666 |
| **AMD ROCm** | kda: match_cutedsl_decode rejected on ROCm, parity tests skipped | #44089 |

---

## 4. Performance & Optimization

| Optimization | Description | PR/Issue |
|--------------|-------------|----------|
| **Native tensor output + prefill scoring** | Major perf work in progress | #42248 |
| **DSv4.1 decoder bounded replay** | Enabled by default for standalone CUDA | #44403 |
| **Qwen3.5 FP8/NVFP4 norm fusion** | Fuse GemmaRMSNorm with input quant | #44812 |
| **DeepSeek V4.1 prefills** | mHC SP + engram fusion pending; q_rope_store fused into fused_q_norm_rope | #42170 |
| **HiCache throughput analysis** | Long-context MLA shows 44.6%–66.6% throughput loss at 80% hit rate due to hit-length-dependent overhead | #44656 |

---

## 5. Stability & Regressions

### Critical

| Issue | Description | Severity |
|-------|-------------|----------|
| **#26340** | CUDA coredump tracker — high volume of auto-collected events from CI | High (CI) |
| **#43412** | Speculative decoding crashes on first non-greedy request — flashinfer verify-sampling op JIT fails (bundled cccl vs pip cu13) | Critical |
| **#44479** | Runner 5090-vast-no-0 out of disk — all CI jobs fail | Critical (CI) |
| **#44810** | DeepSeek-V4 BF16 checkpoint routed to MXFP4 expert path, fails in fused MoE | Critical |

### High

| Issue | Description | Status |
|-------|-------------|--------|
| **#42012** | GLM-5.3-Flash SM120: fa4 crashes at hybrid extend reshape | Open |
| **#44735** | HiCache host-tier hit on hybrid GDN (Qwen3.8-Flash-Next) returns wrong output | Open |
| **#36669** | GLM-5.3-Flash thinking output degenerates into repeated '!' under multi-tool agentic prompts | Open |
| **#44794** | AMD: select_experts casts fp32 MoE correction bias to bf16, causing routing issues | Open |

### Medium

| Issue | Description | Status |
|-------|-------------|--------|
| **#38452** | UnifiedRadixCache: L3 storage never consulted after host-tier eviction | Open |
| **#44641** | Client-declared mm_hashes causes wrong-image KV reuse and cross-tenant disclosure | Open |
| **#44790** | HiCache host pool sizing documentation added | PR pending |

---

## 6. What This Means for Application Developers

1. **Blackwell (SM120) deployments**: GLM-5.3-Flash has a known fa4 backend crash — use the triton backend as a workaround. DeepSeek-V4.1-Flash is production-ready on 8× RTX PRO 6000 PCIe with documented configurations.

2. **Speculative decoding**: If using pip-installed SGLang (no system CUDA toolkit), avoid non-greedy sampling — it triggers a JIT failure that kills the process. Greedy decoding works.

3. **HiCache users**: Be aware of significant throughput degradation (up to 66% at 80% hit rate) in long-context MLA workloads. The host-tier caching has a correctness bug for hybrid GDN models — avoid or monitor closely.

4. **Qwen VL integration**: Token-space processing is now enabled by default for Qwen VL models, enabling better parity with HuggingFace and supporting RL/multi-turn workflows.

5. **AMD ROCm**: The MoE routing path now preserves fp32 precision; ensure you have the latest ROCm stack if running DeepSeek-V2-family models.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data for llama.cpp and create a structured digest for 2026-10-17.

First, let me identify the key releases and commits:

**Releases (last 24h):**
- b11702: OpenCL MxFP4 MoE bin kernel for Adreno X1 devices
- b11701: Beam (Reflection) model support
- b11700: Granite Switch Decision support
- b11699: HTTP_PROXY/HTTPS_PROXY env vars support
- b11696: Hexagon HMX FA sinks fix
- b11695: MTP support for Mellum2.1
- b11693: SYCL memory fixes
- b11690: Ngram cache optimization
- b11688: AVX2 optimization
- b11687: ggml-cpu s309x repack

**Key Issues (by severity):**
1. #24066 - Vulkan performance drop on RX 6600 (45 comments)
2. #25436 - DeepSeek V4 garbled output on Strix Halo with ROCm (30 comments, closed)
3. #21956 - Audio output in mtmd planning (28 comments)
4. #26399 - GGML_OP_TOP_K falls back to CPU on HIP/ROCm (21 comments, closed)
5. #27063 - SYCL completely broken on A770 (19 comments, closed)
6. #27038 - SYCL high CPU utilization (17 comments, closed)
7. #28752 - Vulkan prompt processing speed drop (16 comments)
8. #27638 - Vulkan Flash Attention fallback to SCALAR (15 comments)

**Key PRs:**
- #30627: Hexagon q2_0 quant support


- #30677: slice-model tool
- #30607: Qwen3 bidirectional attention
- #30122: Hexagon Q1_0 support
- #30691: OpenCL MxFP4 MoE (closed)
- #30670: Beam model support (closed)
- #30694: KV cache optimization

I'm noticing several performance and compatibility improvements across different hardware platforms. The digest highlights OpenCL kernel optimizations for Adreno X1, Hexagon quantization enhancements, and critical bug fixes in Vulkan and SYCL backends. Model support continues to expand with Beam and Granite Switch Decision, while HTTP proxy and KV cache improvements indicate ongoing infrastructure refinements.

The digest aims to provide a concise technical overview for infrastructure engineers, focusing on practical implementation details and cross-platform compatibility.</think>

# llama.cpp Digest — 2026-10-17

## 1. Today's Highlights

The project continues expanding hardware optimization for mobile and accelerated computing, with OpenCL kernels now supporting MxFP4 MoE on Adreno X1 devices. Model architecture support is broadening with Beam (Reflection) and Granite Switch Decision additions, while HTTP proxy environment variables are now honored—improving enterprise deployment compatibility. Performance work on KV cache merging and ngram caching shows ongoing focus on latency reduction.

---

## 2. Releases & Breaking Changes

- **b11702** — OpenCL: Add MxFP4 MoE bin kernel for Adreno X1 devices  
  https://github.com/ggml-org/llama.cpp/commit/b11702

- **b11701** — model: add Beam (Reflection)  
  https://github.com/ggml-org/llama.cpp/commit/b11701

- **b11700** — model: Granite Switch Decision  
  https://github.com/ggml-org/llama.cpp/commit/b11700

- **b11699** — common: honor HTTP_PROXY/HTTPS_PROXY env vars in http client  
  https://github.com/ggml-org/llama.cpp/commit/b11699

- **b11696** — hexagon: correct HMX FA sinks  
  https://github.com/ggml-org/llama.cpp/commit/b11696

- **b11695** — model: MTP support for Mellum2.1  
  https://github.com/ggml-org/llama.cpp/commit/b11695

*No breaking API changes reported.*

---

## 3. New Model & Hardware Support

- **Beam (Reflection)** — New model architecture support via converter, model graph, and chat parser for `Beam-1.0-501B-A23B`  
  https://github.com/ggml-org/llama.cpp/pull/30670

- **Granite Switch Decision** — Added decision.chat template supporting decision models with chat capability  
  https://github.com/ggml-org/llama.cpp/pull/30693

- **Mellum2.1** — Multi-Token Prediction (MTP) support added  
  https://github.com/ggml-org/llama.cpp/commit/b11695

- **Adreno X1 (OpenCL)** — New MxFP4 MoE kernel optimized for this mobile GPU  
  https://github.com/ggml-org/llama.cpp/pull/30691

- **Qwen3 embedding models** — Bidirectional attention and `dense_2` output projection support  
  https://github.com/ggml-org/llama.cpp/pull/30607

---

## 4. Performance & Optimization

| Commit/PR | Area | Change |
|-----------|------|--------|
| b11690 | ngram cache | Read parts by reference instead of copying — reduces memory churn during inference |
| b11688 | CPU/AVX2 | Reduce tiled accumulators together — improved vectorization |
| #30694 | KV cache | Merge nearby KV ranges when reading state into host memory — addresses slow prompt cache saves for idle slots |

**In progress:**
- #29181 — CUDA grouped experts top-k fusion (reclaims most performance lost by grouping experts)
- #30627 — Hexagon q2_0 quantization support via HVX/HMX
- #30122 — Hexagon Q1_0 support via native HVX operations

---

## 5. Stability & Regressions

| Issue | Backend | Severity | Status |
|-------|---------|----------|--------|
| [#24066](https://github.com/ggml-org/llama.cpp/issues/24066) | Vulkan | **High** — Performance regression on RX 6600 | Open, 45 comments |
| [#28752](https://github.com/ggml-org/llama.cpp/issues/28752) | Vulkan/RDNA3 | **High** — Severe prompt processing slowdown after b10780 | Open, 16 comments |
| [#27638](https://github.com/ggml-org/llama.cpp/issues/27638) | Vulkan/ANV | **Medium** — Flash Attention falls back to SCALAR, causing O(N²) degradation | Open, 15 comments |
| [#27063](https://github.com/ggml-org/llama.cpp/issues/27063) | SYCL | **High** — Completely broken on Intel A770 | Closed |
| [#27038](https://github.com/ggml-org/llama.cpp/issues/27038) | SYCL | **Medium** — High CPU utilization with large allocations | Closed |
| [#30610](https://github.com/ggml-org/llama.cpp/issues/30610) | Metal | **High** — Nemotron 3.5 Bolt 74B-A9B segfault in ggml_metal_op_mul_mat_id | Open, 5 comments |

*Note: Several issues flagged as "stale" — may need maintainer triage.*

---

## 6. What This Means for Application Developers

1. **Enterprise deployments** — The HTTP_PROXY/HTTPS_PROXY support (b11699) fixes silent download failures in proxied environments—ensure your deployment scripts respect standard environment variables when using `-hf` or similar flags.

2. **Mobile GPU inference** — Adreno X1 users (e.g., Snapdragon X Elite) gain optimized MoE kernels; if you're targeting Windows on ARM or mobile SoCs, the b11702 release improves Mix-of-Experts model throughput.

3. **Vulkan users on AMD RDNA3** — Issue #28752 reports significant prompt processing regressions. If you're running recent builds on RX 6600/6700 series, monitor for throughput degradation; a fix may be pending.

4. **New model architectures** — Beam (Reflection) and Granite Switch Decision support landed; if you're evaluating these models for agentic workflows, the GGUF conversion pipeline is now available.

5. **Quantization roadmap** — Multiple PRs advancing IQ2_NL/IQ3_NL quantization types (#27983, #27325) and Hexagon q2_0/q1_0 support (#30627, #30122) indicate continued investment in aggressive quantization for edge/mobile deployment.

6. **Server UI** — PR #30681 adds "Show tool call in progress" setting, improving agentic tool-use UX in llama-server.

---

*Digest generated from ggml-org/llama.cpp activity on 2026-10-17.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to create an Ollama digest for 2026-10-17 based on the provided GitHub data. Let me analyze the information and structure it according to the requested sections.

Let me go through the data:

**Releases (last 24h):**
- v0.40.6-rc1 → v0.40.6
- Changes:
  - win: prevent orphaned runners (#18500)
  - gguf: add q2_0 tensor and file types (#18967)
  - Launch clef in Ollama's cloud (new model/service)

**Issues (23 total):**
Key issues:
1. #15419 - Ollama Cloud 503 errors (OPEN) - production reliability
2. #15626 - Expose max_soft_tokens for Gemma 4 (CLOSED) - feature request
3. #18716 - Error pulling models: redirect target not allowed (CLOSED)
4. #18728 - LLM-jp-4 parser harmony output with space (OPEN)
5. #18842 - Error pulling models: max retries exceeded (OPEN)
6. #18817 - unsupported tensor size overflows for GSQ-RCO quantized Qwen3.8-Flash-Next (OPEN)
7. #19002 - Text Classifier models slower on 0.40.4 (CLOSED)
8. #19060 - GPT-OSS 20B empty response on AMD Radeon Pro 5700 XT via Vulkan (OPEN)
9. #18954 - Windows GPU discovery console windows flash (OPEN)
10. #18061 - Windows desktop app fails to launch built-in server (OPEN)
11. #18921 - ollama list returns empty on NTFS mount (OPEN)
12. #18971 - embeddinggemma-2 MLX badge missing (CLOSED)
13. #18609 - glm-ocr token repeat limit reached (OPEN)
14. #19006 - A100 PCIe bus loss during Qwen35 (OPEN)


15. #19067 - Auto-start without permission (OPEN)
16. #19057 - nemotron-3.5-bolt Metal kernel not found (OPEN)
17. #19043 - websearch disabled in random models (CLOSED)
18. #18164 - Claude Desktop toggle not available on Windows (OPEN)
19. #18480 - typical_p no longer supported (OPEN)
20. #19045 - Optional application-layer security (OPEN)
21. #19062 - D1 vision repeated HTTP 500 (OPEN)
22. #19044 - gemma4 with think:false empty message (CLOSED)

I'm seeing a pattern of Windows-specific problems, particularly around auto-start behavior, desktop app functionality, and model compatibility. Several issues involve GPU and Vulkan backends, while others point to API or security enhancements. The mix of open and closed tickets suggests active development with some fixes already deployed.

The pull requests reveal ongoing work across multiple fronts: MLX hardware support, documentation updates, registry handling improvements, and parser refinements. There's particular attention to edge cases like empty system prompts, model grouping for cloud usage tracking, and maintaining compatibility across different model architectures. Security and monitoring features are also being addressed through new integrations and middleware options.</think>

# Ollama Digest — 2026-10-17

## Today's Highlights

The v0.40.6 release ships with GGUF Q2_0 tensor support, Windows runner orphan prevention, and the new Clef model in Ollama Cloud. Critical regressions surface: Text Classifier models show measurable slowdown on 0.40.4+, while Ollama Cloud is experiencing frequent 503 errors affecting production workloads. The community continues expanding hardware support with MLX-backed PPLX Decider v1.1 and improved NVIDIA/AMD GPU compatibility.

---

## Releases & Breaking Changes

| Version | Changes | PR |
|---------|---------|-----|
| **v0.40.6** | GGUF: added Q2_0 tensor and file types | [#18967](https://github.com/ollama/ollama/pull/18967) |
| | Windows: prevent orphaned runners | [#18500](https://github.com/ollama/ollama/pull/18500) |
| | Launch Clef in Ollama's cloud | [#18700](https://github.com/ollama/ollama/pull/18700) |

**Migration Note:** The `typical_p` parameter now returns HTTP 400 from the Python API — this was deprecated in favor of alternative sampling controls ([#18480](https://github.com/ollama/ollama/issues/18480)).

---

## New Model & Hardware Support

- **PPLX Decider v1.1** — MLX support added with noncausal attention, image handling, and System One prompt encoding ([#19072](https://github.com/ollama/ollama/pull/19072))
- **LLM-jp-4.1** — Parser added for harmony output with space after special tokens ([#18728](https://github.com/ollama/ollama/issues/18728))
- **Gemma 4** — `max_soft_tokens` (image token budget) now exposed as runtime parameter ([#15626](https://github.com/ollama/ollama/issues/15626))
- **EmbeddingGemma-2** — MLX badges now correctly displayed on ollama.com library tags ([#18971](https://github.com/ollama/ollama/issues/18971))

---

## Performance & Optimization

| Area | Status | Details |
|------|--------|---------|
| **Model loading** | In progress | Atomic pointer refactor eliminates cache-miss race conditions in concurrent warm model lookups ([#19070](https://github.com/ollama/ollama/pull/19070)) |
| **Registry transfers** | Fixed | Proxy support for redirect targets — resolves intermittent pull failures ([#19065](https://github.com/ollama/ollama/pull/19065), fixes [#18716](https://github.com/ollama/ollama/issues/18716)) |
| **Thinking display** | Fixed | `requestAnimationFrame` prevents bottom-line cutoff in streaming thought panels ([#13137](https://github.com/ollama/ollama/pull/13137)) |
| **Speculative drafting** | Improved | `llama-server` now auto-detects draft speculative type, reducing manual `--spec-type` configuration ([#19064](https://github.com/ollama/ollama/pull/19064)) |

**⚠️ Regression:** Text Classifier models (nimble, clef-flash, tev1) show slower response times on v0.40.4+ — users on v0.40.3 reported measurably faster inference ([#19002](https://github.com/ollama/ollama/issues/19002)).

---

## Stability & Regressions

### Critical (Production Impact)
| Issue | Severity | Status | Fix |
|-------|----------|--------|-----|
| **Ollama Cloud 503 errors** — frequent service unavailable on cloud models | 🔴 Critical | OPEN | — |
| **A100 PCIe bus loss** during Qwen3.5 warm-up/inference on 0.34.4/0.35.0 | 🔴 Critical | OPEN | — |
| **GLM-OCR token repeat limit** — HTTP 500 on 0.34.1+ for requests that succeeded on 0.34.0 | 🔴 Critical | OPEN | — |

### High
| Issue | Severity | Status | Fix |
|-------|----------|--------|-----|
| **Qwen3.8-Flash-Next (GSQ-RCO)** — "unsupported tensor size overflows" on import | 🔴 High | OPEN | — |
| **GPT-OSS 20B** — empty response on AMD Radeon Pro 5700 XT via Vulkan (CPU works) | 🔴 High | OPEN | — |
| **Nemotron-3.5-bolt** — Metal kernel not found crashes runner on tool calls | 🔴 High | OPEN | — |
| **D1 vision** — repeated HTTP 500 with memory-slot/KV-cache errors | 🔴 High | OPEN | — |

### Medium
| Issue | Severity | Status | Fix |
|-------|----------|--------|-----|
| **Windows NTFS mount** — `ollama list` returns empty | 🟡 Medium | OPEN | — |
| **Windows GPU discovery** — console windows flash during GPU probe | 🟡 Medium | OPEN | — |
| **Claude Desktop toggle** — missing on Windows | 🟡 Medium | OPEN | — |
| **Gemma4 + think:false** — returns empty message after tool result | 🟡 Medium | CLOSED | — |

---

## What This Means for Application Developers

1. **Avoid v0.40.4+ for Text Classifier workloads** — if inference latency is critical, stick to v0.40.3 until the slowdown regression is addressed.

2. **Ollama Cloud reliability caveat** — production agents relying on cloud models should implement retry logic with exponential backoff; consider local fallback models during the 503 spate.

3. **Windows deployment changes** — runner orphan prevention in v0.40.6 improves long-running server stability; GPU discovery console flashing is a UI polish item still open.

4. **New model capabilities** — Gemma 4's `max_soft_tokens` enables fine-grained vision token budgeting; test multimodal prompts with higher budgets if your use case needs detail.

5. **Security hardening opportunity** — new optional application-layer security middleware enables IP allowlists, per-route policies, and automatic ban logic for exposed servers ([#19045](https://github.com/ollama/ollama/issues/19045)).

6. **Registry issues mostly resolved** — proxy-aware redirects in v0.40.6 fix the "redirect target not allowed" errors that plagued model pulls behind corporate proxies.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-10-17 based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases:**
- v1.107.0-dev.3 released
- Docker images now signed with cosign

**Issues (showing active bugs/features):**
1. #361 - Wishlist ticket (closed, 487 comments)
2. #26343 - Python 3.14 support (enhancement, closed)
3. #43487 - Partial generic streaming chunk KeyError bug (open)
4. #35563 - Provider response ID collision in spend logs (open)
5. #45411 - Claude Code per-turn-control filtered for Bedrock (closed)
6. #41544 - Bedrock audio transcription fails (open)
7. #12997 - SDK Client metadata not sent (closed)
8. #25628 - langfuse_otel logs raw upstream model name (open)
9. #25861 - FIPS compliance feature request (open)
10. #39564 - /user/update 400s on blocked param (open)
11. #36016 - Bedrock GPT-5.6 context mismatch (closed)
12. #40260 - OpenAI/Azure clean stream EOF reported as success (open)
13. #46403 - SpendLogs rows dropped with reused response IDs (closed)
14. #45033 - Azure Responses API bypasses router (open)
15. #40006 - custom_cost_per_token bills Anthropic cache-read twice (open)
16. #33572 - StandardLoggingPayload.model inconsistency (open)
17. #33873 - spend-log batches dropped on DB write failure (open)


18. #36937 - PR checks pass without migration (open)
19. #46659 - GZipBufferedResponseMiddleware withholds headers (open)
20. #40404 - Router fallback not triggered on stream abnormal end (closed)

**Pull Requests:**
- #46257 - feat(router): opt in to non-chat deployment filtering
- #45874 - fix(guardrails): preserve Bedrock Converse redactions
- #47013 - fix(responses): run pre_call guardrails on Responses WebSocket
- #46954 - feat(cli): sign in through browser on 401
- #47021 - fix

(vector-stores): keep proxy context out of provider metadata
- #46836 - fix(anthropic): answer 400 for malformed tool_result
- #46307 - fix(bedrock): stream Converse passthrough frames through guardrails
- #43227 - fix(streaming): skip pydantic model_* attributes
- #47020 - test(integration): expect fallback on bridged stream
- #47019 - fix(logging): keep async request's logging payload
- #46524 - fix(bedrock): scan Claude invoke-with-response-stream output
- #46803 - perf(cli): start lite without initializing SDK
- #46709 - fix(proxy): unset DB environment variables by revision
- #46870 - fix(bedrock): use native structured output on Haiku 5.5
- #45854 - fix(utils): trim_messages return_response_tokens
- #46990 - fix(count_tokens): answer 400 for Vertex partner models
- #46262 - fix(streaming_handler): coerce list delta content to text
- #46263 - fix(router): stop Mantle deployment from rewriting Responses row
- #46044 - fix(logging): stop spend metadata merge from walking dict
- #46539 - feat(azure-ai): support Entra ID auth for Microsoft-Decision-1

I'm identifying the most significant updates to highlight. The CLI performance improvement in #46803 is notable—LiteLLM now launches without SDK initialization, which should speed up startup considerably. Breaking changes are also worth noting, particularly around Bedrock Converse redactions and guardrail behavior.

Several fixes address critical issues: vector stores now exclude proxy context from provider metadata, middleware headers are properly forwarded for SSE responses, and database environment variables can be unset via revision. On the provider side, there's progress with native structured output for Haiku 5.5 and Fable 5, plus Entra ID authentication support for Azure AI's Microsoft-Decision-1 model.

The streaming layer needs attention—list delta content must be coerced to text, and the router shouldn't allow Mantle deployments to override the Responses routing row. For logging, I need to prevent the spend metadata merge from iterating over a dictionary that's actively being written to, and ensure async request payloads persist even when sync threads run late.</think>

# LiteLLM Digest — 2026-10-17

## Today's Highlights

LiteLLM v1.107.0-dev.3 rolls out with cosign-signed Docker images for supply-chain security. The CLI receives a major performance boost (starts without initializing the full SDK), while several Bedrock fixes land — notably native structured output support for Claude Haiku 5.5 and Sonnet 5.5, plus guardrail passthrough streaming. Active bugs include a regression where SSE response headers are withheld until the first chunk (v1.105.0+), and spend-log rows silently dropping when providers reuse response IDs.

---

## Releases & Breaking Changes

| Item | Description | Links |
|------|-------------|-------|
| **v1.107.0-dev.3** | New development release | [Release](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-dev.3) |
| **Docker signing** | All images now cosign-signed (key from commit `0112e53`) | [Docs](https://docs.sigstore.dev/cosign/overview/) |
| **Guardrail behavior change** | Bedrock Converse redactions now preserved; tool-only scans honored (`!`) | [#45874](https://github.com/BerriAI/litellm/pull/45874) |
| **Anthropic `/v1/messages` validation** | Returns 400 (not 500) for malformed `tool_result` text | [#46836](https://github.com/BerriAI/litellm/pull/46836) |
| **Mantle deployment fix** | `chat` or `responses` pin no longer rewrites shared routing row (`!`) | [#46263](https://github.com/BerriAI/litellm/pull/46263) |

---

## New Model & Hardware Support

| Model / Backend | Details |
|-----------------|---------|
| **Bedrock Haiku 5.5** | Native structured output support (adaptive thinking on JSON schema calls restored) |
| **Bedrock Sonnet 5.5** | Native structured output support |
| **Bedrock Fable 5** | Fixed JSON schema 400 errors |
| **Bedrock Sonnet 4.6** | Fixed schema 400s for `minimum`, nullable objects |
| **Azure AI Microsoft-Decision-1** | Entra ID auth support added | [#46539](https://github.com/BerriAI/litellm/pull/46539) |

---

## Performance & Optimization

| Change | Impact | PR |
|--------|--------|-----|
| **CLI startup** | `lite` now starts without initializing the full litellm SDK (~3,300 modules, ~4.6s saved on 1 vCPU) | [#46803](https://github.com/BerriAI/litellm/pull/46803) |
| **trim_messages fix** | `return_response_tokens` now always returns correct tuple | [#45854](https://github.com/BerriAI/litellm/pull/45854) |
| **Streaming handler** | List delta content coerced to text (prevents TypeError, prevents chunk dropping) | [#46262](https://github.com/BerriAI/litellm/pull/46262) |
| **Router filtering** | Non-chat deployment filtering now opt-in via `model_info.enforce_supported_endpoints` | [#46257](https://github.com/BerriAI/litellm/pull/46257) |

---

## Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | **SSE response headers withheld until first chunk** — MCP `tools/call` streams wait 15s for first event | Open | — |
| **High** | **SpendLogs rows dropped** when providers reuse response IDs (Ollama: `chatcmpl-<0..999>`) | Closed | — |
| **High** | **Audit-log writes fire-and-forget** — dropped on worker shutdown even after 200 response | Open | — |
| **Medium** | **Budget reset stalls** on large `LiteLLM_EndUserTable` (millions of rows, 30s timeout loop) | Open | — |
| **Medium** | **Prometheus gauges missing** — async requests with `cache: true` lose rate-limit metrics | Open | [#47019](https://github.com/BerriAI/litellm/pull/47019) |
| **Medium** | **Router fallback not triggered** on abnormal stream end (cut/stalled/malformed chunk) | Closed | — |
| **Low** | **Usage page crashes** on large/multi-page datasets ("Cannot read properties of undefined") | Open | — |

**Other notable bugs:**
- `custom_cost_per_token` bills Anthropic cache-read tokens twice ([#40006](https://github.com/BerriAI/litellm/issues/40006))
- Azure Responses API bypasses router, goes to `api.openai.com` directly ([#45033](https://github.com/BerriAI/litellm/issues/45033))
- `/user/update` returns 400 on documented `blocked` param ([#39564](https://github.com/BerriAI/litellm/issues/39564))

---

## What This Means for Application Developers

1. **If you run LiteLLM in production**: Upgrade to pull the signed Docker images. Verify with `cosign verify` — see the linked docs.

2. **If you use Bedrock models**: The structured output fixes resolve long-standing 400 errors on JSON schema requests for Haiku 5.5, Fable 5, and Sonnet 4.6. Guardrail passthrough now streams properly.

3. **If you use the CLI**: Expect dramatically faster startup times, especially on small VMs — the full SDK no longer loads on every command.

4. **If you track spend**: Be aware that Ollama deployments may silently lose spend-log records due to response ID reuse. Monitor your billing closely until the fix lands.

5. **If you use streaming with guardrails**: The middleware header regression (#46659) impacts MCP tool calls — responses won't start until the upstream produces data or the 15s keepalive fires.

6. **If you build on Azure AI with Entra ID**: Microsoft-Decision-1 now supports token-based auth, enabling consistent identity management across Azure models.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze this GitHub data to create a structured digest for Unsloth dated 2026-10-17.

Let me organize the key information:

**Releases:**
- None in last 24h

**Issues (16 total):**
Let me categorize them:
- Bugs: #10738 (Data Recipe bug), #10306 (PocketPal autoload), #13985 (browser access), #13629 (mouse clicks Mac), #14038 (HF not responding), #13926 (lost models), #14032 (no managed desktop backend), #14031 (OOB install), #14035 (keyboard shortcuts), #14010 (survey - not technical), #14037 (long-term memory feature), #14012 (auxiliary models feature), #14039, #13997 (theme popup), #13955 (tasks/todo features)

**PRs (176 total, showing top 20):**
Key ones:
- #14043: Studio keeps llama.cpp and vLLM default system prompt
- #12094: Colab GPU launch feature (new feature, >3000 lines)
- #14029: Browser panel follows system proxy
- #12601: DPO, ORPO, GRPO training (new feature)
- #14051: Download prebuilt kernel wheels once (addresses Windows update hang)
- #14046: Claude web search limits
- #14047: Push to Hub with HF CLI login
- #14044: Chat files stay in Library after moving to project
- #13933: FLUX.3 Image Klein support (new model support)
- #14008: Fetch every image component from unsloth repos
- #14003: Fetch every video component from unsloth repos
- #14000: Video families default to hosted quantized text encoder
- #12092: Link other Unsloth instances (new feature)


- #5217: Neuron activation capture feature
- #14020: Automatic GPU placement
- #14045: Knowledge base chunks fit embedding model limit

I notice several critical bug fixes and feature enhancements. The proxy support for browser panels and kernel wheel downloads address key user experience issues. New training methods like DPO and ORPO expand Unsloth's capabilities, while the link feature for Colab GPUs enables more flexible deployment. These updates suggest continued focus on improving usability and expanding functionality.</think>

# Unsloth Digest — 2026-10-17

## 1. Today's Highlights

Unsloth continues advancing its multi-instance infrastructure with a significant PR (#12092) enabling linking of remote Unsloth Studio instances for unified model serving via `@name/model` syntax. Meanwhile, bug fixes are being addressed including a Windows update hang related to prebuilt wheel downloads (#14051), and various desktop UI issues affecting Mac OS Golden Gate and keyboard layouts.

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours
- No breaking API changes flagged

## 3. New Model & Hardware Support

- **FLUX.3 Image Klein** (base and distilled variants) now supported with INT8/FP8/GGUF quantization — PR #13933 addresses modular Diffusers block loading for black-forest-labs/flux-3-image-klein
- **Video model components** now fetched entirely from Unsloth mirrors instead of vendor repos — PRs #14003 (video) and #14008 (image) eliminate ComfyUI repack dependencies
- **Hosted quantized text encoders** now default for video families — PR #14000 switches from dense encoders to pre-quantized hosted variants

## 4. Performance & Optimization

- **Prebuilt wheel download optimization** — PR #14051 halves download size for kernel wheels, addressing Windows update hangs on slow connections
- **Automatic GPU placement** now remains inert on ordinary hosts (single GPU, Apple Silicon, CPU, ROCm) — PR #14020 reverts behavior changes that inadvertently affected non-MIG hosts (fixes regression from #13928)
- **Knowledge base chunking** now respects embedding model input limits — PR #14045 prevents silent truncation when models like sentence-transformers/all-MiniLM-L6-v2 (256 tokens) are selected
- **GPU UUID mask parsing** fixed for hosts without MIG — PR #14017 corrects whole-GPU UUID resolution under `CUDA_DEVICE_ORDER=FAST_DEVICE_ORDER`

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Windows update hangs on prebuilt wheel download | OPEN | #14051 |
| **Medium** | Desktop browser cannot access (screenshot attached) | OPEN | — |
| **Medium** | Integrated browser mouse clicks unresponsive on Mac OS Golden Gate | OPEN | — |
| **Medium** | Lost models after update — custom directory not scanned | CLOSED | — |
| **Low** | Theme popup ignores chosen theme (night vs system light) | OPEN | — |
| **Low** | Keyboard shortcuts UI mismatches alternative keyboard layouts | OPEN | — |
| **Low** | Hugging Face dropdown fails when HF not responding | OPEN | — |

**Notable regressions fixed:**
- GPU UUID mask resolution on non-MIG hosts — PR #14017
- Auto GPU placement behavior on single-GPU/Apple Silicon hosts — PR #14020

## 6. What This Means for Application Developers

- **Multi-instance deployments** are becoming first-class: PR #12092 enables linking remote Colab/LAN instances with unified `/v1/models` API — useful for aggregating distributed GPU resources
- **Training expands** beyond SFT: PR #12601 introduces DPO, ORPO, and GRPO training with a rule reward library — enabling preference-based and reinforcement learning workflows
- **Hub exports** now work with CLI login without requiring stored tokens — PR #14047 fixes the export flow
- **System proxy support** added for browser panel on macOS/Windows/Linux — PR #14029 enables corporate network compatibility
- **Memory/proxy fixes** improve reliability: kernel wheel downloads now resumable, and proxy environments respected

---

**Key PRs for infrastructure engineers:**
- Multi-instance linking: #12092, #12093, #12094
- Training expansions: #12601
- Desktop stability: #14051, #14020, #14017, #14029
- Model loading: #13933, #14000, #14008, #14003

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*