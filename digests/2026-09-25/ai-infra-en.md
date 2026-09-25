# AI Infrastructure Digest 2026-09-25

> Generated: 2026-09-25 00:44 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to create a cross-project comparison report covering vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth based on the daily digests I already created. Let me compile the key information from each digest and create a structured comparison.

Let me organize the information:

**Activity Summary (from digests):**

| Project | Issues | PRs | Releases (24h) |
|---------|--------|-----|----------------|
| vLLM | ~20+ issues, top by comments (95 for batch-invariant) | ~15+ PRs | None |
| SGLang | ~15 issues | ~15 PRs | None |
| llama.cpp | 11 issues, 1 release | 21 PRs | 1 (b11173-b11171-b11170 etc, v0.25.3) |
| Ollama | ~11 issues | ~21 PRs | None |
| LiteLLM | ~10 issues, 484 comments on #361 | ~15 PRs | None |
| Unsloth | 39 issues | 199 PRs | None |

**Model Support:**
- vLLM: ViT CUDA Graph, INT8 KV cache, GLM 5.3, DeepSeek-V4, Qwen3-VL-Embedding
- SGLang: Lark grammars, CausalLM setwise scoring, Quark Qwen3.5 MTP, AMD GDN
- llama.cpp: GraniteForCausalLM (MLX), Gemma4 (MLX), Hexagon NPU, Windows Arm64
- Ollama: GraniteForCausalLM MLX, System One models
- LiteLLM: Sail provider, Fireworks DeepSeek V4.1, Gemini pricing
- Unsloth: vLLM/SGLang inference, AMD Ryzen AI NPU, Kimi-K3 MXFP4, Qwen-Image-2.1


- vLLM and SGLang are prioritizing Blackwell batch-invariant kernels and MoE optimizations, while llama.cpp focuses on Metal/CUDA/Vulkan kernel improvements. Ollama and LiteLLM concentrate on API and proxy enhancements, whereas Unsloth is advancing NVFP4 and FlashInfer integration alongside multi-backend inference capabilities.

- Across the stack, performance work spans quantization strategies (KV cache, NVFP4), batching improvements (EPLB, live scheduler), distributed serving (tensor parallelism, expert parallelism), and kernel-level optimizations across Metal, CUDA, and Vulkan backends.

- These projects occupy distinct layers in the serving architecture: vLLM and SGLang function as inference serving engines, llama.cpp and Ollama handle local runtime execution, LiteLLM provides gateway and proxy capabilities, and Unsloth manages training and fine-tuning workflows.

- Emerging patterns suggest multimodal inference is gaining momentum with ViT and Qwen-Image models, while Blackwell batch-invariant kernels are becoming standard across GPU vendors. AMD ROCm support continues expanding with Unsloth and llama.cpp both investing heavily. Quantization strategies are evolving toward INT8 KV cache and MXFP4 approaches. Multi-backend inference with vLLM/SGLang options is gaining traction, and the layer between training and serving is blurring as Unsloth integrates serving capabilities.</think>

# Cross-Project Comparison — AI Infrastructure Digest

## 1. Ecosystem Overview

Today's activity reflects a maturing AI infrastructure stack where boundaries between layers are increasingly fluid. **vLLM** and **SGLang** compete as high-performance serving engines targeting Kubernetes and enterprise deployments; **llama.cpp** and **Ollama** target local/first-party inference with varying tradeoffs between portability and optimization; **LiteLLM** abstracts these backends behind a unified gateway; and **Unsloth** bridges training with serving. The common thread: optimization for Blackwell/RTX 50 (batch-invariant kernels), expanding AMD ROCm coverage, and deepening multimodal (ViT, Qwen-Image) support—indicating the ecosystem is preparing for next-gen GPU hardware and vision-language workloads at scale.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Key Discussion Threads |
|---------|--------------|-----------|----------------|------------------------|
| **vLLM** | ~20+ (top: #27433 with 95 comments on batch-invariant) | ~15+ | None | Batch-invariant matmul for Blackwell, Mamba2 state saves, ROCm GEMM optimization |
| **SGLang** | ~15 | ~15 | None | DeepSeek FFN refactor stack, diffusion TP=2 regression, overlap scheduler penalties bug |
| **llama.cpp** | 11 | 21 | **1** (v0.25.3) | Speculative decoding divergence, Qwen3.8 long-context throughput collapse, Vulkan regression |
| **Ollama** | ~11 | 21 | None | macOS GUI 60s failure, RTX 50 CUDA detection, MLX memory leak |
| **LiteLLM** | ~10 (top: #26672 with 19 on budget bypass) | ~15 | None | Streaming service_tier fix, Prometheus redirect issue, per-customer RPM bypass |
| **Unsloth** | 39 | 199 | None | AMD ROCm crashes, Qwen-Image-2.1 VAE hangs, vLLM/SGLang backend integration |

**Observation**: Unsloth leads by PR volume (199), reflecting its role as a multi-backend aggregator. llama.cpp is the only project with a release today (v0.25.3). vLLM drives the most community discussion by comment volume.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4/V4.1** | ✅ Flash, DeepGEMM MegaMoE, Blackwell kernels | ✅ FFN refactor, scatter-mode planning | — | — | — | — |
| **Qwen-Image-2.1** | — | — | — | — | — | ✅ GGUF pipeline, int8 Hadamard, VAE fix |
| **Qwen3-VL** | ⚠️ Embedding mismatch (closed) | — | — | — | — | — |
| **Gemma 4** | — | — | ✅ MLX expert loading, sparse-MoE quantization | — | — | — |
| **GLM-5.3 Flash** | ✅ Tracking | ✅ Asymmetric P/D TP bug | — | — | — | — |
| **GraniteForCausalLM** | — | — | — | ✅ MLX support | — | — |
| **Kimi-K3** | — | — | — | — | — | ✅ MXFP4 training |
| **ViT (Vision Transformer)** | ✅ RFC (CUDA graphs) | — | — | — | — | ✅ NVFP4 policies |
| **System One** | — | — | — | ✅ API | ✅ Scoring API | — |
| **Lark Grammars** | — | ✅ XGrammar support | — | — | — | — |

**Leader**: **vLLM** leads in enterprise model coverage (DeepSeek, GLM, ViT); **Unsloth** leads in experimental/emerging models (Kimi-K3, Qwen-Image, AMD NPU).

---

## 4. Performance Frontier

| Optimization Area | Projects Driving It | Key Work Today |
|-------------------|---------------------|----------------|
| **Batch-Invariant Kernels** | vLLM | TP=2/4/8 shapes for sm_120 (Blackwell/RTX 50) |
| **MoE / Expert Parallelism** | vLLM, SGLang | Deferred FFN finalize per-layer contract; scatter-mode planning |
| **Quantization (KV Cache, Weights)** | vLLM, Unsloth, llama.cpp | INT8 KV (vLLM #33480), NVFP4 per-layer policies (Unsloth), Q8_0 dot fix (llama.cpp) |
| **Mamba / SSM State** | vLLM | Batch prefill SSM state saves; spec-decode block tables fix |
| **Metal / GPU Kernels** | llama.cpp, Unsloth | Sparse FA (llama.cpp), FlashInfer + VAE compile (Unsloth) |
| **ROCm / AMD** | vLLM, llama.cpp, Unsloth | ROCm GEMM copy elimination (vllm), Intel FA (llama.cpp), Ryzen AI NPU (Unsloth) |
| **Streaming / Scheduling** | vLLM, LiteLLM | Live scheduler knobs; service_tier propagation |
| **Multi-Backend Serving** | Unsloth | vLLM/SGLang as optional backends |

**Frontier concentration**: The highest-leverage work is in **batch-invariant kernels for Blackwell** (unlocks new hardware), **MoE optimization** (DeepSeek-class models), and **multi-backend unification** (Unsloth's vLLM/SGLang integration). These are infrastructure-level bets, not model-specific tuning.

---

## 5. Layer Positioning

| Layer | Primary Projects | What They Own |
|-------|------------------|---------------|
| **Training / Fine-tuning** | **Unsloth** | CUDA graph training, LoRA/QLoRA, NVFP4 training, model export |
| **Local Runtime** | **llama.cpp**, **Ollama** | CPU/GPU/Metal/Vulkan inference, GGUF export, embedded serving |
| **Serving Engine** | **vLLM**, **SGLang** | PagedAttention, prefix caching, speculative decoding, multi-GPU TP/EP |
| **Gateway / Abstraction** | **LiteLLM** | Multi-provider proxy, rate limiting, budget enforcement, cost tracking |
| **Multi-Backend Aggregator** | **Unsloth** | Trains → exports → serves via vLLM/SGLang/llama.cpp |

**Overlap zones**: Unsloth is the only project with a foot in both training and serving layers. vLLM and SGLang are converging on similar feature sets (batching, caching, quantization) but diverge in scheduler design. LiteLLM sits above all serving engines as a consumption layer.

---

## 6. Trend Signals

### What Infrastructure Engineers Should Watch

1. **Blackwell Batch-Invariant is the Near-Term Unlock**
   - vLLM's work on TP>1 shapes for sm_120 directly enables RTX 50 and B200 deployments at scale.
   - SGLang's DeepSeek FFN refactor supports scatter-mode EP—prerequisite for multi-node MoE serving.
   - **Action**: If deploying on Blackwell hardware, monitor vLLM releases for batch-invariant kernel availability.

2. **AMD ROCm is No Longer Experimental**
   - vLLM (69 fewer copies/decode), llama.cpp (Intel FA kernel), and Unsloth (Ryzen AI NPU, ROCm 10) all investing heavily.
   - **Action**: If cost-sensitive or in HPC environments, begin testing AMD paths. The "works on NVIDIA" assumption is narrowing.

3. **Quantization is Fragmenting**
   - vLLM pushes INT8 KV cache, Unsloth pushes NVFP4, llama.cpp pushes Q8_0 fixes, LiteLLM tracks Quark MXFP4.
   - Each quantization format has different accuracy/performance tradeoffs and hardware requirements.
   - **Action**: Establish benchmark suites per quantization path; don't assume FP8 equivalence.

4. **Multi-Backend Inference is Arriving**
   - Unsloth now offers vLLM and SGLang as optional backends alongside its native engine.
   - LiteLLM already abstracts 100+ providers.
   - **Action**: Design your inference layer to be backend-agnostic; expect portability requirements to grow.

5. **Multimodal is Crossing the Chasm**
   - ViT CUDA graphs (vLLM), Qwen-Image-2.1 pipeline (Unsloth), Gemma4 vision (llama.cpp), DeepSeek-V4-Flash-Vision (vLLM).
   - **Action**: If building vision-language agents, the stack is ready. Monitor for VAE decode stability issues (Unsloth #11636).

6. **The Gateway Layer is Maturing**
   - LiteLLM's streaming fixes, budget enforcement, and Prometheus export signal that ops-grade concerns are being addressed.
   - **Action**: If running multi-tenant LLM infrastructure, evaluate LiteLLM for standardization—not just as a shim, but as control plane.

---

*Compiled from daily digests — 2026-09-25*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze this GitHub data for vLLM and create a structured digest for 2026-09-25.

Key observations from the data:

1. **Latest Releases**: None in the last 24h

2. **Top Issues by Comment Count**:
- #27433: Batch Invariant Feature and Performance Optimization - 95 comments, good first issue
- #38175: RFC: Support ViT Full CUDA Graph (Tracker) - 35 comments, multi-modality
- #56868: GLM-5.3-Flash long-decode degeneration bug - 30 comments
- #11905: Feature: Support Multiple Tasks Per Model - 27 comments (CLOSED)
- #26946: RFC: Enable libtorch-ABI-stable vLLM cuda wheels - 21 comments
- #33480: Feature: Add INT8 Support for KV Cache Quantization - 21 comments

3. **Notable PRs**:
- #58495: Add TP=2/4/8 per-rank shapes to sm_120 batch-invariant matmul table
- #55506: Fix Mamba spec-decode block tables by request slot bug
- #49371: Batch Mamba2 prefill SSM state saves
- #58566: ROCm: Cut 69 wasted contiguous copies per decode step
- #58635: MoE deferred finalize per-layer contract
- #55528: Align packed block strides for V3.2 sparse MLA

4. **Performance work**:
- Batch invariant optimizations for Blackwell/RTX 50
- Mamba2 SSM state save optimizations
- ROCm GEMM optimizations
- DeepSeek-V4 kernel coverage for SM 12.x

5. **Bugs**:
- GLM-5.3-Flash decode degeneration


- Prefix caching + MTP corrupts output on hybrid Mamba/GDN models
- AsyncScheduler num_output_placeholders underflow
- Qwen3-VL-Embedding produces different embeddings

Now let me structure this into the required format:</think>

# vLLM Daily Digest — 2026-09-25

## 1. Today's Highlights

The vLLM project is advancing on multiple fronts: batch-invariant kernel coverage for Blackwell/RTX 50 series is expanding with new tensor-parallel shapes, while the community continues addressing model-specific bugs including GLM-5.3-Flash decode degeneration and Mamba hybrid model prefix caching issues. ROCm optimizations are landing aggressively, including a fix that eliminates 69 wasted contiguous copies per decode step on AMD hardware.

---

## 2. Releases & Breaking Changes

No releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Description | Link |
|------|-------------|------|
| **ViT Full CUDA Graph** | RFC tracking support for Vision Transformer CUDA graphs in multimodal models (Qwen3-VL, GLM-V, Kimi K2.5) | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| **INT8 KV Cache Quantization** | Feature request to add INT8 support beyond current FP8-only KV cache quantization | [#33480](https://github.com/vllm-project/vllm/issues/33480) |
| **GLM 5.3 Performance** | Tracking optimization work for GLM-5.3 architecture (extends GLM-5.2 `glm_moe_dsa` base) | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **ROCm MI355X Qwen3.8-2.4T** | Performance optimization plan for AMD MI355X with Qwen3.8-2.4T-A95B (MXFP4) | [#57149](https://github.com/vllm-project/vllm/issues/57149) |

---

## 4. Performance & Optimization

| Category | Details | Link |
|----------|---------|------|
| **Blackwell/RTX 50 Batch-Invariant** | Added TP=2/4/8 per-rank shapes to `sm_120` batch-invariant matmul tuning table, enabling proper batch-invariant kernels beyond TP=1 | [#58495](https://github.com/vllm-project/vllm/pull/58495) |
| **Mamba2 State Management** | Batch Mamba2 prefill SSM state saves, removing GPU↔CPU syncs from the prefill path | [#49371](https://github.com/vllm-project/vllm/pull/49371) |
| **ROCm GEMM** | Eliminated 69 wasted contiguous copies per decode step from the skinny GEMM path | [#58566](https://github.com/vllm-project/vllm/pull/58566) |
| **MoE Deferred Finalize** | Refactors MoE finalize as per-layer contract, enabling modular path support for expert parallelism | [#58635](https://github.com/vllm-project/vllm/pull/58635) |
| **DeepSeek-V4 Blackwell Gaps** | Tracking kernel coverage gaps for DeepSeek-V4-Flash on consumer Blackwell (RTX 50 / GB10) via DeepGEMM | [#41063](https://github.com/vllm-project/vllm/issues/41063) |
| **EPLB Batching** | Added contention-aware expert migration batching to reduce NIC/inference contention during async expert parallelism | [#52641](https://github.com/vllm-project/vllm/pull/52641) |
| **Live Scheduler Knobs** | PR adds dev route for runtime KV pool reinit and live scheduler knob updates without process restart | [#55018](https://github.com/vllm-project/vllm/pull/55018) |

---

## 5. Stability & Regressions

| Severity | Issue | Details | Status |
|----------|-------|---------|--------|
| **High** | GLM-5.3-Flash long-decode degeneration | W4A16 quantized GLM-5.3-Flash exhibits output degeneration after accumulated reasoning decode; affects production deployments on B300 | Open — [#56868](https://github.com/vllm-project/vllm/issues/56868) |
| **High** | Prefix caching + MTP hybrid Mamba/GDN | Output corruption on hybrid Mamba/GDN models with prefix caching enabled in v0.28.0; previously reported in #43559 but unfixed | Open — [#53912](https://github.com/vllm-project/vllm/issues/53912) |
| **High** | AsyncScheduler num_output_placeholders underflow | Regression from v0.24.0 causing underflow with chunked prefill + concurrency; affects Qwen3.6-35B-A3B-FP8 | Open — [#57562](https://github.com/vllm-project/vllm/issues/57562) |
| **Medium** | Mamba spec-decode block tables indexing bug | Fixes PP + MTP + prefix caching causing 14-33% request degeneration into constant-token loops | PR open — [#55506](https://github.com/vllm-project/vllm/pull/55506) |
| **Medium** | DeepSeek-V4.1-Flash Triton IMA | CUDA illegal memory access in `dsv4_topk` MoE routing kernel under high concurrency on H20; mitigated by `max_num_seqs=256` | Open — [#56389](https://github.com/vllm-project/vllm/issues/56389) |
| **Medium** | FP8 block-scaled weights on sm120 | DeepGEMM "Unknown SF transformation" on RTX 5090 during `process_weights_after_loading` | Open — [#51884](https://github.com/vllm-project/vllm/issues/51884) |
| **Low** | Qwen3-VL-Embedding mismatch | Produces different embeddings than official qwen_vl_utils implementation | Closed — [#33204](https://github.com/vllm-project/vllm/issues/33204) |

---

## 6. What This Means for Application Developers

- **Blackwell/RTX 50 users**: Batch-invariant kernels now work correctly with tensor parallelism > 1, improving throughput on newer NVIDIA hardware.
- **GLM-5.3-Flash users**: Beware the long-decode degeneration bug; if serving quantized GLM models with extended reasoning, monitor outputs for repetition/degeneration.
- **Hybrid Mamba models**: Prefix caching with MTP is currently unreliable; consider disabling prefix caching for these architectures until the fix lands.
- **AMD ROCm users**: Significant decode-path optimizations landed; expect reduced memory bandwidth pressure on MI300/MI350 series.
- **Production operators**: The incoming live scheduler knob PR will enable tuning concurrency caps and token budgets without model reloads—valuable for handling traffic spikes.
- **Multi-modal developers**: ViT CUDA graph support is under active development; this will improve prefill throughput for vision-language models.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to create a structured English digest from the GitHub issues and pull requests data provided. Let me analyze the content and extract the most relevant information for each section.

Let me go through the issues and PRs:

**Issues:**
1. #40959 - Bug with Mooncake DFlash draft KV transfer with asymmetric P/D TP on GLM-5.3-Flash
2. #40865 - RFC about tail-replay for Mamba/GDN state (CLOSED)
3. #40441 - Feature request for decode-phase max_seq_len
4. #34419 - Security tracking issue
5. #41038 - Mooncake DFlash draft KV transfer fails with asymmetric P/D TP
6. #41192 - Diffusion Qwen-Image-2.1 TP=2 output corrupted
7. #39909 - DeepSeek-V4.1 encoder reasoning-effort budgets bug (CLOSED)
8. #41152 - AMD aiter unified attention bug with Gemma 2/3
9. #41151 - Perf issue with padded decode CUDA-graph slots
10. #41148 - Feature: Incremental chat-prompt processing
11. #41129 - Feature: Configurable retention for request log files
12. #41126 - Diffusion warmup configurable
13. #41124 - Penalties use stale history under overlap scheduler

**Pull Requests:**
1. #41165 - Linear-attention models carry mamba radix-cache leaves
2. #41191 - Build prepare_mlp and layout moves from named steps
3. #41074 - Fix fused shared-expert LoRA weights
4. #41201 - Per-rank prefill dispatch bound for model package
5. #37661 - Extend set_internal_state to hot scheduler knobs


6. #39064 - Keep quantization for mixed Quark Qwen3.5 MTP checkpoints
7. #39296 - Fuse native FP8 shared expert into DeepGEMM MegaMoE
8. #39380 - Support Lark grammars with XGrammar
9. #41188 - Setwise scoring for CausalLM
10. #40986 - Stream sampling masks as per-request arrays
11. #41196 - Deferred FFN all-reduce
12. #41195 - Fix deferred FFN sum counting
13. #41199 - Take a layer's last-layer fact from scatter-mode plan

I'm seeing several key themes emerging from these PRs. The DeepSeek-related work is substantial - there are fixes around FFN sum counting, scatter-mode planning, and native FP8 expert integration. Performance optimization appears as a recurring focus with the CUDA-graph slots issue and per-rank prefill dispatch bounds. I'm also noticing model support expansions through Lark grammar support and quantization handling improvements.

The infrastructure side has meaningful enhancements too - set_internal_state is becoming more flexible, there are LoRA weight fixes, and CausalLM gets setwise scoring support. A few concerns are emerging: TP=2 output corruption on diffusion models, AMD compatibility issues with Gemma, and the penalties bug that needs addressing.</think>

# SGLang Daily Digest — September 25, 2026

## 1. Today's Highlights

Several high-impact PRs landed today focused on DeepSeek-V4 model refactoring and FFN all-reduce optimizations (#41191-#41200), along with a new feature for configurable request log retention (#41129). A notable correctness bug was identified: diffusion Qwen-Image-2.1 produces corrupted output with TP=2, while a regression in penalty calculations under the overlap scheduler (#41124) causes frequency/presence penalties to use stale history.

## 2. Releases & Breaking Changes

No new releases today.

## 3. New Model & Hardware Support

- **Lark Grammar Support**: XGrammar 0.2.7 now accepts Lark syntax through the established grammar API ([#39380](https://github.com/sgl-project/sglang/pull/39380))
- **Setwise Scoring for CausalLM**: Extended token pool primitive to generative models ([#41188](https://github.com/sgl-project/sglang/pull/41188))
- **Mixed Quark Quantization**: Fixed MTP checkpoint loading for amd/Qwen3.8-2.4T-A95B-Quark-MXFP4 ([#39064](https://github.com/sgl-project/sglang/pull/39064))
- **AMD GDN Prefill**: New FlyDSL GDN prefill backend for AMD gfx95 ([#39595](https://github.com/sgl-project/sglang/pull/39595))

## 4. Performance & Optimization

- **DeepSeek FFN Refactor Stack**: Multiple PRs (#41193-#41200) refactor FFN all-reduce handling—carrying deferred reductions through layers, fixing double-counting in replicated TP1 shared expert with dense reduce_scatterv, and enabling scatter-mode planning
- **Decode CUDA-Graph Regression**: Padded decode slots on triton backend show context-length-dependent overhead (27.7 → 35.9 ms/token at 30K context, batch size 5) ([#41151](https://github.com/sgl-project/sglang/issues/41151))
- **LoRA Kernel Fix**: Fixed fused shared-expert LoRA loading and prevented expert ID aliasing ([#41074](https://github.com/sgl-project/sglang/pull/41074))
- **DeepGEMM MegaMoE**: Native FP8 shared expert fusion for DeepSeek-V4 ([#39296](https://github.com/sgl-project/sglang/pull/39296))

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | Diffusion Qwen-Image-2.1 TP=2 output corrupted with dense chroma speckle (single-GPU clean) | Open ([#41192](https://github.com/sgl-project/sglang/issues/41192)) |
| **High** | Penalties use one-step stale history under overlap scheduler (`output[:i-1]` vs `output[:i]`) | Open ([#41124](https://github.com/sgl-project/sglang/issues/41124)) |
| **Medium** | AMD aiter unified attention: Gemma 2/3 batched generations run away (GSM8K 0.57 vs 0.83 on triton) | Open ([#41152](https://github.com/sgl-project/sglang/issues/41152)) |
| **Medium** | Mooncake DFlash draft KV transfer fails with asymmetric P/D TP on GLM-5.3-Flash | Open ([#41038](https://github.com/sgl-project/sglang/issues/41038)) |
| **Low** | Decode graph width pinned to `--context-length` rather than actual max_seq_len | Open ([#40441](https://github.com/sgl-project/sglang/issues/40441)) |

## 6. What This Means for Application Developers

- **Prompt Processing**: A new feature request (#41148) proposes incremental chat-prompt processing to avoid re-tokenizing full history on each turn—relevant for long-running multi-turn chat applications
- **Log Management**: Request log retention is now configurable (#41129), simplifying long-lived deployment disk management
- **Scheduler Control**: `set_internal_state` now exposes hot scheduler knobs (#37661), enabling runtime tuning of concurrency, queue limits, and prefill budgets
- **Attention Backends**: If using AMD ROCm with Gemma 2/3, avoid `SGLANG_USE_AITER_UNIFIED_ATTN=1` for batched generation due to correctness issues; the triton backend is currently required
- **TP=2 Diffusion**: Avoid TP=2 deployment for diffusion models until #41192 is resolved; single-GPU or TP>2 configurations work correctly

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a llama.cpp digest for 2026-09-25 based on the provided GitHub data. Let me analyze the information and create a structured digest following the specified sections.

Let me go through the data:

**Releases (last 24h):**
- b11173: Metal fix for graph capture and empty graphs
- b11172: Metal optimize sparse FA + clean-up
- b11171: sync with ggml (version bumped to 0.25.3)
- b11170: Hexagon: handle multi-sequence in concat_2d
- b11169: llama-grammar: fix numeric truncation for token_id parsing
- b11168: hexagon: dynamic quantizer improvements
- b11167: hexagon: support I32 CPY and CONT
- b11166: cuda: add F16 kernel support for CONV_2D_DW
- b11165: test: flush status
- b11163: llama: add llama_batch_ext

**Issues (top by comments):**
1. #25618: Speculative decoding bug with quantized targets - 26 comments
2. #27623: Qwen3.8-27B decode throughput collapse at long context - 17 comments
3. #17583: AMD GPU multi-GPU segfault - 16 comments (CLOSED)
4. #28752: Vulkan prompt processing speed drop - 14 comments
5. #28211: HIP/ROCm wrong logits - 11 comments

**PRs:**
- #29403: audio: fix mel preprocessor in LFM2 audio
- #29357: Vulkan Intel FA kernel for prefill
- #29060: server embeddings return HTTP 400 for invalid requests
- #29052: ci: add Hexagon NPU backend build for Windows Arm64


- #28725: SYCL graph record and replay
- #29291: server strip stray media markers
- #29385: batch: migrate speculative, mtmd and server to batch_ext
- #29400: convert: preserve already-stacked NVFP4 MoE experts
- #27851: ggml-cpu: tiled mul_mat for k-quants
- #29356: Q8_0 dot product fix for int8 min
- #29401: opencl: add Q5_K bin kernel
- #29280: vulkan: reuse descriptor sets
- #28554: server: pass id_slot through Anthropic conversion

I see several interesting developments across different hardware backends. The Vulkan implementation is getting descriptor set optimizations, while SYCL is adding graph recording capabilities. The OpenCL backend now supports Q5_K bin kernels, and there's work on improving server-side handling of embeddings and Anthropic conversions. The batch extension migration and CPU-level matrix multiplication improvements suggest continued performance optimization across the stack.

For quantization, there's a critical fix in Q8_0 dot product calculations for minimum integer values, alongside AVX-512 optimizations for Q4_K. Hexagon support is expanding with multi-sequence handling and dynamic quantizer enhancements, particularly for I32 operations.

Performance gains are notable: Metal's sparse flash attention shows substantial improvements, CUDA's RMS_NORM and SCALE operations are being fused, and there's a 3-7x speedup in CPU matrix multiplication through VNNI. A significant regression in CUDA sparse flash attention was identified and resolved between specific build versions. Correctness issues persist across speculative decoding, Vulkan, and ROCm implementations, with some multi-GPU and Windows-specific problems still being addressed.</think>

# llama.cpp Digest — 2026-09-25

## Today's Highlights

The project continues its rapid pace with multiple backend optimizations and core library improvements. Key highlights include a significant GGML sync (v0.25.3), Metal sparse flash attention optimizations, and ongoing work on the new `llama_batch_ext` API. The community is actively addressing performance regressions in CUDA sparse attention and correctness issues in speculative decoding with quantized targets.

## Releases & Breaking Changes

- **b11171**: GGML sync — version bumped to **v0.25.3**, includes ubsan fix for `ggml_graph_nbytes` ([ggml#1644](https://github.com/ggml-org/ggml/pull/1644))
- **b11163**: `llama_batch_ext` API added — new extended batch structure for improved batch handling; migration in progress ([PR #29385](https://github.com/ggml-org/llama.cpp/pull/29385))

## New Model & Hardware Support

- **Hexagon NPU**: Multi-sequence handling in `concat_2d` ([b11170](https://github.com/ggml-org/llama.cpp/commit/b11170))
- **Hexagon NPU**: Dynamic quantizer improvements — fixes Q8_0 accuracy issue, uses DMA for all dynamic quant paths ([b11168](https://github.com/ggml-org/llama.cpp/commit/b11168))
- **Hexagon NPU**: I32 CPY and CONT operations supported ([b11167](https://github.com/ggml-org/llama.cpp/commit/b11167))
- **CUDA**: F16 kernel support for `CONV_2D_DW` depthwise convolution ([b11166](https://github.com/ggml-org/llama.cpp/commit/b11166))
- **Windows Arm64**: Hexagon NPU backend CI build added ([PR #29052](https://github.com/ggml-org/llama.cpp/pull/29052))

## Performance & Optimization

- **Metal**: Sparse flash attention optimized via shared memory caching — benchmark on DeepSeek-V4-Flash-Vision-Exp shows significant gains ([PR #29377](https://github.com/ggml-org/llama.cpp/pull/29377))
- **CUDA**: RMS_NORM + SCALE fused into single kernel — fixes ~4% prefill regression from #28068 ([PR #29393](https://github.com/ggml-org/llama.cpp/pull/29393))
- **CPU (ggml-cpu)**: Tiled mul_mat for k-quants — 3-7x faster using VNNI with minimal complexity ([PR #27851](https://github.com/ggml-org/llama.cpp/pull/27851))
- **CPU (ggml-cpu)**: AVX-512 VNNI+VBMI path for Q4_K repack GEMM using `vpdpbusd` ([PR #29397](https://github.com/ggml-org/llama.cpp/pull/29397))
- **Vulkan**: Intel FA kernel for prefill — collaborative work with Intel to improve prefill performance ([PR #29357](https://github.com/ggml-org/llama.cpp/pull/29357))
- **Vulkan**: Reuse descriptor sets when bindings are constant — reduces overhead for graph recording ([PR #29280](https://github.com/ggml-org/llama.cpp/pull/29280))
- **Vulkan**: Optional device keepalive for investigating memory eviction issues ([PR #29267](https://github.com/ggml-org/llama.cpp/pull/29267))
- **OpenCL**: Q5_K bin kernels for Adreno (GEMM + GEMV) ([PR #29401](https://github.com/ggml-org/llama.cpp/pull/29401))

**Regression fixed**: CUDA sparse FA decode 1.6x slower (b11047→b11062) — now resolved ([Issue #29281](https://github.com/ggml-org/llama.cpp/issues/29281))

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | Speculative decoding produces different output vs vanilla on quantized targets (Q4_K_M) — greedy sampling diverges | Open — [Issue #25618](https://github.com/ggml-org/llama.cpp/issues/25618) |
| **High** | Qwen3.8-27B decode throughput collapses ~25x at context >80K | Open — [Issue #27623](https://github.com/ggml-org/llama.cpp/issues/27623) |
| **Medium** | Vulkan prompt processing speed drops severely after b10780 (RDNA3) | Open — [Issue #28752](https://github.com/ggml-org/llama.cpp/issues/28752) |
| **Medium** | HIP/ROCm wrong logits on gfx1151 for prompts longer than n_ubatch | Open — [Issue #28211](https://github.com/ggml-org/llama.cpp/issues/28211) |
| **Medium** | Unified-KV causes 42-54% prompt processing drop on second long request | Open — [Issue #28495](https://github.com/ggml-org/llama.cpp/issues/28495) |

**Fixed**: Multi-GPU segfault on AMD ROCm ([Issue #17583](https://github.com/ggml-org/llama.cpp/issues/17583) — closed)

## What This Means for Application Developers

1. **Batch API migration**: The new `llama_batch_ext` is landing — expect API changes if you manage batching manually. The server and speculative decoding paths are migrating ([PR #29385](https://github.com/ggml-org/llama.cpp/pull/29385)).

2. **Quantization correctness**: If using speculative decoding with Q4/Q5 quantization, be aware of potential output divergence under greedy sampling — avoid production use of quantized draft models until #25618 is resolved.

3. **Long-context workloads**: Qwen3.8-27B and similar hybrid architectures show significant decode throughput degradation at >80K context. If deploying long-context models, monitor for throughput cliffs.

4. **Metal/Vulkan users**: Recent optimizations improve prefill performance. Update builds to benefit from Intel FA kernels (Vulkan) and sparse FA improvements (Metal).

5. **CPU inference**: New AVX-512 VNNI+VBMI kernels significantly improve Q4_K performance on modern Intel CPUs — ensure your build includes these instructions.

6. **Server embeddings**: Invalid embedding requests now return HTTP 400 instead of 500 — simplifies error handling in production deployments ([PR #29060](https://github.com/ggml-org/llama.cpp/pull/29060)).

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate a structured digest for Ollama based on the provided GitHub data. Let me analyze the information and organize it into the requested sections.

Looking at the data:

1. **Latest Releases**: None in the last 24h

2. **Latest Issues** (11 total):
- #18368: macOS GUI silent failure after 60 seconds
- #18505: MLX nvfp4 request stalls
- #17099: 0.31.2 regression - vision model memory inflation
- #18390: Gemma4 tool-call parser issue with spaces in keys
- #18616: Mimo-v2.6 models needed (CLOSED)
- #18620: MLX runner memory leak on tool calls
- #18581: Windows CUDA discovery fails on RTX 50-Series (Blackwell)
- #18594: System 1 Models request
- #18632: qwen3.8 think parameter silently defaults
- #18628: macOS app move prompt issue (OPEN)
- #18621: macOS update icon/menu sync (CLOSED)

3. **Pull Requests** (21 total, showing 20):
- #17654: Windows-on-Arm CPU optimization
- #18631: MLX Gemma4 expert loading fix
- #16590: Manifest list support
- #18630: Termalime integration
- #17972: GraniteForCausalLM support in MLX
- #18629: App bundle subdirectory fix
- #18627: API deprecate typical_p (CLOSED)
- #17976: Gemma4 quantization fix (CLOSED)
- #18614: MLX Nemotron bugs/fixes
- #18626: App cloud-setting tests (CLOSED)
- #18598: Settings model discovery defer (CLOSED)


- #18602: Web searches per response increase
- #18623: AMD GPU Windows docs
- #18625: MLX pull stall fixes
- #18624: Qwen3.5 tool call parsing
- #18092: API docs 401/403 status codes
- #18622: macOS update menu sync (CLOSED)
- #18606: System One scoring API
- #18619: Vestige integration (CLOSED)
- #18618: AGNT desktop integration

Now I'll organize this into the requested sections:

1. **Today's Highlights** - Key developments include a critical macOS GUI bug causing silent failures after 60 seconds, Windows CUDA issues on Blackwell architecture, MLX memory leaks during tool calls, and several MLX backend improvements including Nemotron fixes and Granite model support. Additionally, the web search limit has been increased to 10 per response.

2. **Releases & Breaking Changes** - No new releases in the last 24 hours, though the typical_p parameter is now deprecated.

3. **New Model & Hardware Support** - GraniteForCausalLM models are now supported in MLX, Gemma4 MoE experts use the mlx-lm switch_glu layout, and expanded AMD GPU documentation covers Windows.

4. **Performance & Optimization** - Windows-on-Arm processors are being optimized, gemma4 sparse-MoE expert banks are being quantized uniformly, and several MLX improvements address Nemotron bugs with global scales, pull stall retries, and Qwen3.5 tool call parsing.

5. **Stability & Regressions** - Critical issues include macOS GUI silent failures after 60 seconds on M4 Pro MacBooks, MLX nvfp4 model stalling under sustained single-slot load, a 0.31.2 regression causing vision model memory inflation (7x slower generation), tool-call memory leaks in MLX runners, and Windows CUDA discovery failures on RTX 50-Series Blackwell. Gemma4 tool call parser issues with spaces and qwen3.8 think parameter defaults remain problematic.

6. **What This Means for Application Developers** - Key takeaways involve the new System One scoring API, increased web search limits to 10 per response, macOS update menu synchronization improvements, and proper 401/403 error handling now documented in the API.</think>

# Ollama Digest — 2026-09-25

## 1. Today's Highlights

The Ollama project shows active MLX backend development and bug fixes today. Critical issues include a **macOS GUI silent failure** after 60 seconds on long document processing (M4 Pro, Sequoia 15.7.9) and **Windows CUDA discovery failures** on NVIDIA RTX 50-Series Blackwell architecture. On the positive side, the team merged improvements for **GraniteForCausalLM MLX support**, **Gemma4 MoE expert loading**, and a new **System One scoring API**.

---

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours.
- **Deprecation**: `typical_p` parameter in the API now logs a warning instead of rejecting the request ([#18627](https://github.com/ollama/ollama/pull/18627)).

---

## 3. New Model & Hardware Support

| Feature | Description | PR/Issue |
|---------|-------------|----------|
| **GraniteForCausalLM** | Dense model architecture support added to MLX backend (Granite 4.1/4.2 models) | [#17972](https://github.com/ollama/ollama/pull/17972) |
| **Gemma4 MoE Experts** | MLX runner now loads Gemma4 experts in `mlx-lm` switch_GLU layout, fixing import failures | [#18631](https://github.com/ollama/ollama/pull/18631) |
| **AMD GPU (Windows)** | Docs expanded to include gfx1030, gfx1100–gfx1102, gfx1150–gfx1151, gfx1200–gfx1201 for Windows ROCm | [#18623](https://github.com/ollama/ollama/pull/18623) |
| **System 1 Models** | Feature request filed for Kev and Laya models — not yet implemented | [#18594](https://github.com/ollama/ollama/issues/18594) |

---

## 4. Performance & Optimization

| Area | Change | Details |
|------|--------|---------|
| **Windows-on-Arm CPU** | Compiler optimization | Sets `GGML_CPU_ARM_ARCH` to enable dot-product/matrix instructions instead of baseline armv8-a | [#17654](https://github.com/ollama/ollama/pull/17654) |
| **Gemma4 quantization** | Fixed bloated packages | Sparse-MoE expert banks now skip sensitive-projection rule, preventing mixed formats across layers | [#17976](https://github.com/ollama/ollama/pull/17976) |
| **MLX Nemotron** | Bug fixes + global scales | Layer name aliases retained, layer-count inference fixed, MTP quantization stabilized, per-expert F32 scales supported | [#18614](https://github.com/ollama/ollama/pull/18614) |
| **MLX pull stalls** | Recovery fix | Download stalls can now recover; watchdog can interrupt stalled transfers | [#18625](https://github.com/ollama/ollama/pull/18625) |
| **Qwen3.5 parsing** | Tool call fix | Tool calls can now open before the thinking channel is fully closed | [#18624](https://github.com/ollama/ollama/pull/18624) |
| **Web searches** | Rate limit increase | Per-response limit raised from 3 to 10 for Responses and Anthropic | [#18602](https://github.com/ollama/ollama/pull/18602) |

---

## 5. Stability & Regressions

| Severity | Issue | Impact | Status |
|----------|-------|--------|--------|
| **High** | **macOS GUI silent failure** — Chat processing fails after 60.0s with no notification on M4 Pro MacBooks (Ollama 0.34.0, Sequoia 15.7.9) | Users lose long-running requests without feedback | Open — [#18368](https://github.com/ollama/ollama/issues/18368) |
| **High** | **Windows CUDA discovery** — RTX 50-Series (Blackwell) with Driver 616.92 reports 0 B VRAM, falls back to CPU | No GPU acceleration on Blackwell hardware | Open — [#18581](https://github.com/ollama/ollama/issues/18581) |
| **High** | **MLX nvfp4 stall** — Request stalls at `processed=total-1` under sustained single-slot load; only SIGTERM recovers | Sustained parallel workloads hang intermittently | Open — [#18505](https://github.com/ollama/ollama/issues/18505) |
| **High** | **MLX memory leak** — Tool calls leak ~0.43 GiB per request outside prefix-cache budget (qwen3.6:27b-mlx) | Progressive memory bloat in long sessions | Open — [#18620](https://github.com/ollama/ollama/issues/18620) |
| **Medium** | **0.31.2 regression** — Vision model memory estimate inflated ~1.2 GiB, causing 7x slowdown (33.8 → 4.7 tok/s on gemma4:31b) | Significant throughput drop after auto-update | Open — [#17099](https://github.com/ollama/ollama/issues/17099) |
| **Medium** | **Gemma4 tool-call parser** — Object keys with spaces left unquoted; call dropped silently | Tool calls with spaced parameters fail | Open — [#18390](https://github.com/ollama/ollama/issues/18390) |
| **Medium** | **qwen3.8 think parameter** — Values like `"high"` silently run default `"medium"` instead of failing or mapping | Inconsistent thinking control | Open — [#18632](https://github.com/ollama/ollama/issues/18632) |

---

## 6. What This Means for Application Developers

1. **macOS users running long documents** — Be aware that requests exceeding ~60 seconds may fail silently in the GUI. Consider using CLI or API polling to detect failures.

2. **Windows + RTX 50-series users** — GPU acceleration is currently unavailable. Monitor for a fix or use CPU inference as a fallback.

3. **MLX users with tool-calling workflows** — The ~0.43 GiB per-request leak means long-running agent sessions will accumulate memory. Consider restarting the service periodically or watch for the fix.

4. **Building agents on qwen3.8** — The `think` parameter silently defaults to `"medium"` for undocumented values. Use the documented set: `[false, "low", "medium", "xhigh"]` or `"xhigh"` as a string for maximum thinking.

5. **New API capability** — The new `POST /v1/systemone` endpoint provides structured decision-making with Nimble models — useful for agent routing logic.

6. **API error handling** — 401 (auth required) and 403 (access disabled) are now documented. Update error handling if you rely on these codes.

---

*Generated from GitHub data — ollama/ollama | 2026-09-25*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-09-25 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

## Latest Releases
- None in the last 24h

## Latest Issues (top 30 by comment count)
- #361 [CLOSED] 🎅 I WISH LITELLM HAD... - 484 comments - wishlist
- #26672 [OPEN] [bug, proxy] Budget enforcement bypassed in v1.82.3 - 19 comments
- #26169 [OPEN] [bug, stale] Helm charts outdated dependencies - 12 comments
- #39057 [OPEN] Design intent: on cache hits, spend is zeroed but token columns replay - 12 comments
- #20499 [OPEN] [bug, proxy, stale] No invite mails sent on user creation - 11 comments
- #23998 [OPEN] [bug, llm translation, ui-dashboard] Unable to re-edit Model LiteLLM Params - 9 comments
- #42172 [OPEN] [llm translation, claude code] anthropic/<model> with third-party api_base - 8 comments
- #39713 [OPEN] [bug, proxy] Per-customer RPM limits stop applying once virtual key is cached - 8 comments
- #42477 [OPEN] [bug] MCP oauth2/authorization_code token exchange fails - 8 comments
- #38535 [OPEN] [llm translation, claude code] Router policy knob `treat_finish_reason_as_failure` - 7 comments

## Latest Pull Requests
- #43087 [OPEN] fix(bedrock): map Anthropic batch row params the way real time does
- #42870 [OPEN] fix(streaming): keep the served service_tier on streamed chunks and spend rows


- #43075 [OPEN] fix(vertex_ai): surface the Gemma container's own error inside a 200 :predict response
- #43049 [OPEN] fix(proxy): authorize key model aliases the same way as team aliases
- #43095 [OPEN] feat(router): add status-code policy for order fallbacks
- #42843 [OPEN] refactor(types): declare litellm-owned kwargs as typed objects
- #43079 [OPEN] fix(vertex_ai): stop advertising OpenAI platform-only params on Gemma and Llama routes
- #41807 [OPEN] feat(proxy): enforce tpm_limit

I'm seeing several pull requests focused on bug fixes across different providers and proxy functionality. There are particularly active issues around model routing, error handling for Vertex AI, and access control. The maintainers appear to be addressing stability concerns with streaming responses and improving how model aliases are authorized.

Several new capabilities are being introduced, including support for Sail as an OpenAI-compatible provider, enhanced Prometheus metrics handling without redirects, and improved spend tracking with daily tag retention policies. There's also work on email notifications for budget alerts and updates to the UI showing traffic sources with model spend breakdowns. New cost mapping rows are being added for Fireworks and DeepSeek models, along with Gemini pricing synchronization.</think>

# LiteLLM Digest — 2026-09-25

## 1. Today's Highlights

The project continues its rapid iteration cycle with multiple PRs addressing provider-specific quirks and proxy reliability. Key themes today include: (1) a critical fix for streaming `service_tier` propagation that ensures accurate billing, (2) new Anthropic OAuth token tracking in spend logs for auditability, and (3) several bug fixes around budget enforcement and rate limiting that had bypass vulnerabilities.

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours.
- **Potential Breaking**: The Vertex AI fix ([#43079](https://github.com/BerriAI/litellm/pull/43079)) removes OpenAI-only parameters from Gemma/Llama routes — if existing deployments rely on these parameters being forwarded, they may need adjustment.

## 3. New Model & Hardware Support

- **Sail provider added** — PR [#42840](https://github.com/BerriAI/litellm/pull/42840) registers Sail as a new OpenAI-compatible provider with 12 models, supporting chat, streaming, responses, and Anthropic messages with completion window tier pricing.
- **Fireworks DeepSeek V4.1 Flash (US-only)** — Cost map rows added in [#43097](https://github.com/BerriAI/litellm/pull/43097).
- **Gemini pricing sync** — PR [#43091](https://github.com/BerriAI/litellm/pull/43091) updates Gemini priority, flex, and video token prices from the official pricing page.

## 4. Performance & Optimization

- **Streaming `service_tier` fix** — PR [#42870](https://github.com/BerriAI/litellm/pull/42870) preserves the served `service_tier` on streamed chunks and spend rows, fixing silent billing inaccuracies.
- **Prometheus `/metrics` fix** — PR [#30082](https://github.com/BerriAI/litellm/pull/30082) eliminates the trailing-slash 307 redirect that caused silent metric loss with scrapers not following redirects.
- **Type system refactor** — PR [#42843](https://github.com/BerriAI/litellm/pull/42843) converts hand-kept string lists of LiteLLM kwargs into typed objects, reducing the risk of parameter leakage to providers.

## 5. Stability & Regressions

| Severity | Issue | PR/Fix |
|----------|-------|--------|
| **High** | Budget enforcement bypassed for key/user `max_budget` in v1.82.3 | [#26672](https://github.com/BerriAI/litellm/issues/26672) — Open, 19 comments |
| **High** | Per-customer RPM limits stop applying once virtual key is cached | [#39713](https://github.com/BerriAI/litellm/issues/39713) — Open, 8 comments |
| **Medium** | MCP oauth2 token exchange fails with generic error even when upstream returns valid token | [#42477](https://github.com/BerriAI/litellm/issues/42477) — Open, 8 comments |
| **Medium** | Budget reset job silently zeroes spend forever when `budget_duration=null` with stale `budget_reset_at` | [#39370](https://github.com/BerriAI/litellm/issues/39370) — Open |
| **Medium** | Vertex AI Gemma container errors masked as 200 responses | [#43075](https://github.com/BerriAI/litellm/pull/43075) — Open |
| **Low** | Helm charts have outdated Redis/PostgreSQL dependencies causing startup regressions | [#26169](https://github.com/BerriAI/litellm/issues/26169) — Open |

**Positive closure**: Several stale issues closed today including Cloudflare Workers AI API error ([#24065](https://github.com/BerriAI/litellm/issues/24065)), version endpoint feature ([#24109](https://github.com/BerriAI/litellm/issues/24109)), and session revocation security issue ([#35665](https://github.com/BerriAI/litellm/issues/35665)).

## 6. What This Means for Application Developers

- **If you use streaming**: The `service_tier` fix ensures billed amounts match actual usage — review your spend logs for any past discrepancies.
- **If you use Anthropic with third-party proxies**: Bug [#42172](https://github.com/BerriAI/litellm/issues/42172) reports OAuth token confusion when using custom `api_base`; may affect deployments using Claude Code with forwarded credentials.
- **If you use team member budgets**: PR [#42665](https://github.com/BerriAI/litellm/pull/42665) adds email alerts at configured budget percentages — enables proactive notification before hard caps hit.
- **If you use tag-based rate limits**: TPM/RPM limits on tags are now enforced at request time ([#41807](https://github.com/BerriAI/litellm/pull/41807)); verify your configurations.
- **If you route through Vertex Model Garden**: The Claude Code → Gemma path now correctly rejects unsupported parameters ([#43079](https://github.com/BerriAI/litellm/pull/43079)), reducing unexplained 400 errors.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the GitHub data for Unsloth and create a structured digest for 2026-09-25.

Looking at the data:

1. **Releases**: None in the last 24h
2. **Issues**: 39 total, showing 30 by comment count. Let me identify key themes:
   - AMD GPU issues dominate (RX 5700XT recognition, ROCm 10, VRAM issues, iGPU problems)
   - Qwen-image-2.1 issues (manual steps, asset downloads, VAE decode hangs)
   - UI issues (Live Monitor occlusion, window clicks, thinking UI stuttering)
   - RAG embedding model GPU toggle
   - Benchmark page feature request
   - GGUF export issues
   - vLLM support requests
   - Various bugs

3. **Pull Requests**: 199 items, showing top 20. Key themes:
   - NVFP4 per-layer policies and flashinfer backend
   - VAE decode compilation for DiT families
   - vLLM and SGLang support
   - AMD Ryzen AI NPU support (XDNA 2)
   - Kimi-K3 MXFP4 training
   - Qwen-Image-2.1 int8 Hadamard rotation
   - Various fixes and optimizations
   - Video auto precision

Let me organize this into the requested sections:

1. **Today's Highlights**
2. **Releases & Breaking Changes** (none)
3. **New Model & Hardware Support**
4. **Performance & Optimization**
5. **Stability & Regressions**
6. **What This Means for Application Developers**

I'll structure this professionally for infrastructure engineers.</think>

# Unsloth Digest — 2026-09-25

## 1. Today's Highlights

The Unsloth team is advancing multi-backend inference capabilities: PR #11491 introduces opt-in **vLLM and SGLang support** with multi-GPU inference, quantization, and vision. On the AMD front, ROCm 10 compatibility is actively being addressed with requests for broader card support (#9932) and fixes for ROCm 7.14 detection issues (#10657). The Qwen-Image-2.1 pipeline is receiving significant hardening, with fixes for double-download behavior (#11637), VAE decode hangs on AMD (#11636), and int8 accuracy improvements via Hadamard rotation (#11835).

---

## 2. Releases & Breaking Changes

No releases detected in the last 24 hours.

---

## 3. New Model & Hardware Support

| Area | Item | Details | PR/Issue |
|------|------|---------|----------|
| **Inference Engine** | vLLM & SGLang | Optional backends with multi-GPU, quantization, text/image chat, concurrent API support | #11491 |
| **Hardware** | AMD Ryzen AI NPU | Chat via Lemonade + FastFlowLM on XDNA 2 (Strix Halo/Point), Windows & Linux | #11743 |
| **Hardware** | AMD ROCm 10 | Request for ROCm 7.14 + version selector support | #9932 |
| **Model** | Kimi-K3 | MXFP4 expert training with packed experts, on-the-fly dequantization | #11750 |
| **Model** | Qwen-Image-2.1 | GGUF pipeline now validates FP8 checkpoint repos before download | #11829 |

---

## 4. Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **NVFP4 Image DiT** | Per-layer NVFP4 policies + FlashInfer `mm_fp4` backend (#10730, #10731) | Faster image generation on NVIDIA B200 |
| **FlashInfer Install** | On-demand installation for NVFP4 without moving torch (#11730) | User-friendly opt-in for faster path |
| **VAE Decode** | Compilation from NVFP4 time budget pass (#10889) | Reduced decode latency |
| **Qwen-Image-2.1 Int8** | Hadamard rotation to match bf16 accuracy (#11835) | LPIPS improved from 0.066 to acceptable range |
| **Compile Cache** | Stopped rewrites on warm start, bounded disk use (#11874) | Faster startup, reduced disk I/O |
| **Model Scanning** | Stopped rescanning every folder on missing model requests (#11872) | 17-second scan avoided per request |
| **Video Precision** | Auto precision now keeps resident bf16 DiT when it fits (#11831) | Avoids unnecessary quantization |
| **Flash Attention Build** | Parallel ccache jobs for flash-attn wheel (#11812) | Reduces 6-8hr build to feasible time |

---

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **Critical** | AMD: ROCm gfx103X/gfx110X/gfx908/gfx90a stuck on torch 2.10.0+rocm7.13.0, `import unsloth` crashes via `_grouped_mm` access violation | #11814 — Open |
| **Critical** | AMD: GGUF export splits model onto unsupported iGPU, fails with "invalid kernel file" | #11870 — Open |
| **High** | Qwen-Image-2.1: VAE decode hangs 10-23 minutes on AMD ROCm, driver reset/crash | #11636 — Open |
| **High** | RX 5700XT (RDNA1) not recognized in Unsloth Desktop | #8529 — Open, 12 comments |
| **Medium** | Qwen-Image-2.1: Downloads GGUF (4.2GB), then re-downloads 19GB "Required assets" on Run | #11637 — Open |
| **Medium** | AMD iGPU reports overinflated VRAM | #8942 — Open |
| **Medium** | Export to GGUF fails due to read-only HF cache permissions | #11785 — Open |
| **Medium** | UI: Bottom strip of maximized window ignores clicks (Windows) | #11734 — Closed |
| **Low** | Thinking UI text rendering stutters at 30/60 FPS | #11778 — Open |
| **Low** | Stream down incomplete-link appears in streaming responses | #11848 — Open |

---

## 6. What This Means for Application Developers

**For those building on Unsloth Studio:**
- **Multi-backend inference is arriving**: vLLM and SGLang will be available as drop-in alternatives to the default engine, supporting multi-GPU setups and quantization—useful if you need specific serving characteristics or CUDA graph optimization.
- **AMD NPU support is a stepping stone**: Chat on Ryzen AI NPUs via FastFlowLM suggests Unsloth is expanding beyond discrete GPUs toward integrated AI hardware.
- **Qwen-Image-2.1 is stabilizing**: The double-download issue (#11637) and VAE decode hangs (#11636) are known; if you're using this model, monitor for upcoming fixes.
- **Watch ROCm compatibility**: If you're on AMD ROCm 7.14, the installer still defaults to PyTorch 2.11 with ROCm 7.2 (#10657). Consider manual environment checks until fixed.

**For infrastructure engineers:**
- The compile-cache optimizations (#11874) reduce warm-start latency—relevant for serverless or ephemeral inference setups.
- Model folder scanning optimization (#11872) cuts 17s per request when using OpenAI auto-switch with missing models—significant for high-throughput API gateways.

---

*Data sourced from github.com/unslothai/unsloth — Issue #8529 through #11873, PR #6297 through #11874*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*