# AI Infrastructure Digest 2026-10-04

> Generated: 2026-10-04 01:57 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report covering vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. I need to synthesize information from all the digests I generated and create a cohesive analysis.

Let me organize this systematically:

1. **Ecosystem Overview** - Brief landscape description
2. **Activity Comparison** - Table with issues, PRs, releases
3. **Model Support Race** - Who supports what
4. **Performance Frontier** - Where optimization efforts concentrate
5. **Layer Positioning** - How projects differ by layer
6. **Trend Signals** - Industry trends and what to watch

I'll need to compile data from all the digests:

**vLLM:**
- No releases in 24h
- Issues: many (top by comments)
- PRs: many (top ones listed)
- Models: DeepSeek V4.1, Qwen3, MiniMax-M3, GLM-5.3-Flash
- Hardware: AMD MI35x, NVIDIA SM120/SM121

**SGLang:**
- No releases in 24h
- Issues: 40 total
- PRs: 294 total
- Models: DeepSeek V4.1, GLM-5.3-Flash, MiniMax-M3, Qwen4Exp
- Hardware: AMD MI35x, NVIDIA SM120/SM121

**llama.cpp:**
- Multiple releases (b11372-b11382)
- Issues: many
- PRs: many
- Models: GLM5Next MTP, Qwen4Exp MTP, Kolibri 1
- Hardware: OpenVINO, WebGPU, Vulkan, CUDA


- Ollama: Several recent releases (v1.105.0-rc.1, v1.104.0, v1.103.3) with 9 issues and 30 PRs, focusing on Kolibri 1 and SystemOne across Apple Silicon and Windows. LiteLLM shows the highest activity with 3 releases and numerous issues and PRs addressing budget accounting, trace handling, and tool loop functionality. Unsloth has no recent releases but carries the most critical workload with 17 issues and several PRs targeting performance regression, SageAttention integration, and diffusion checkpoint support.</think>

# Cross-Project Ecosystem Report — October 4, 2026

---

## 1. Ecosystem Overview

Today's AI infrastructure landscape reflects a maturing stack with clear separation between inference serving (vLLM, SGLang), local/desktop runtimes (llama.cpp, Ollama, Unsloth), gateway/observability (LiteLLM), and fine-tuning (Unsloth). The dominant themes across all six projects are **speculative decoding correctness**, **quantization reliability** (especially Marlin and NVFP4), **multi-vendor hardware support** (AMD MI35x, NVIDIA SM120/SM121, Intel OpenVINO), and **agentic workflow tooling**. Budget enforcement bugs in LiteLLM and performance regressions in Unsloth indicate that production hardening remains an ongoing challenge even as throughput improvements accelerate.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Key Focus Areas |
|---------|-------------|-----------|----------------|-----------------|
| **vLLM** | ~10 trending | ~15 trending | 0 | Speculative decoding, V2 runner, Marlin quantization |
| **SGLang** | 40 | 294 | 0 | DeepSeek V4, AMD MI35x, diffusion |
| **llama.cpp** | ~8 trending | ~15 trending | 7 (commits b11372–b11382) | GPU caching, WebGPU, OpenVINO 2026.4.1 |
| **LiteLLM** | 9 | 30 | 3 (v1.103.3, v1.104.0, v1.105.0-rc.1) | Budget accounting, Lens observability, tool loops |
| **Ollama** | 9 | 20 | 0 | MLX (Kolibri 1, SystemOne), Windows fixes |
| **Unsloth** | 17 | ~20+ | 0 | SageAttention 2, diffusion, tensor split regression |

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **DeepSeek V4 / V4.1** | ✅ Flash / MoE | ✅ Flash / MoE / PCP | — | — | — |
| **Qwen3.8 / Qwen4Exp** | ✅ MTP | — | ✅ MTP | — | — |
| **Qwen3.5 MoE** | ✅ | ✅ | ✅ (OpenVINO) | — | — |
| **MiniMax-M3 / M4** | ✅ | ✅ AITER FP8 | — | — | — |
| **GLM-5.3 / GLM5Next** | — | ✅ (Triton workaround) | — | — | — |
| **Kolibri 1** | — | — | — | ✅ MLX | — |
| **SystemOne** | — | — | — | ✅ MLX | — |
| **Gemma 4** | — | — | — | ✅ | — |
| **LTX-2 Diffusion** | — | ✅ | — | — | ✅ |
| **Flux.3** | — | ✅ FP8 | — | — | — |

**Leader:** SGLang and vLLM are tied for broadest model coverage in the server space. llama.cpp leads in desktop/embedded model variety. Ollama leads in Apple Silicon-native models.

---

## 4. Performance Frontier

| Optimization Domain | Projects Leading | Key Work |
|---------------------|-----------------|----------|
| **KV Cache / Prefix Caching** | vLLM, SGLang | Hybrid GDN + MTP hit restoration (vLLM #52244), SWA bounded replay skip (#59197) |
| **Speculative Decoding** | vLLM, SGLang | Priority scheduling, dynamic batch sizing — both have active correctness regressions |
| **Quantization** | vLLM, llama.cpp, SGLang | Marlin int8-activation (vLLM #48926/#59895), NVFP4 KV bug (SGLang #42369), pre-quantized safetensors (Unsloth #12645) |
| **Distributed / Multi-GPU** | vLLM, SGLang | DP×TP×CP attention (SGLang #42038), tensor split (Unsloth — regression #12468) |
| **Attention Kernels** | Unsloth, llama.cpp, SGLang | SageAttention 2 (Unsloth #12654), FlashAttention 4 (Unsloth), AITER (SGLang), OpenVINO 2026.4.1 |
| **Memory Management** | vLLM, llama.cpp | CUDA graph pool release (#59160), GPU cache for host MoE experts (#29887) |
| **Agentic Tool Loops** | LiteLLM, Ollama | `run_tool_loop` helper (LiteLLM #44381), multi-turn sandbox integration (Ollama) |

---

## 5. Layer Positioning

| Layer | Primary Projects | Description |
|-------|-------------------|-------------|
| **Training / Fine-tuning** | **Unsloth** | LoRA/QLoRA fine-tuning with KTO, ORPO, diffusion support |
| **Local Desktop Runtime** | **llama.cpp**, **Ollama** | llama.cpp: portable, no-runtime inference; Ollama: turnkey macOS/Windows experience |
| **Local / Mobile Inference** | **llama.cpp** (WebGPU, Vulkan, Metal) | Cross-platform GPU backends |
| **Gateway / Proxy** | **LiteLLM** | Unified OpenAI-compatible API, key management, budget enforcement, observability (Lens) |
| **High-Performance Serving** | **vLLM**, **SGLang** | vLLM: production-grade PagedAttention, V2 runner; SGLang: radical throughput, RadixAttention, speculation |
| **Agent Orchestration** | **LiteLLM**, **Ollama** | Tool loop helpers, streaming tool calls, structured output |

**Clearest differentiation:** vLLM and SGLang occupy the high-throughput serving layer with overlapping but distinct philosophies (vLLM = conservative stability, SGLang = aggressive optimization). LiteLLM sits above them as a gateway/orchestration layer. Unsloth operates below inference as a training accelerator.

---

## 6. Trend Signals

### What Agent / Application Developers Should Watch

1. **Speculative decoding is not production-ready yet** — Both vLLM (#49548, #25618) and llama.cpp (#27572) have correctness bugs in speculative decoding paths. Teams betting on draft acceleration should expect fixes in the next 2–4 weeks.

2. **Quantization correctness gaps are closing but not closed** — Marlin int8-activation bugs (vLLM) and NVFP4 KV corruption (SGLang) affect production deployments. Avoid these quantization modes until fixes land.

3. **Agentic tool orchestration is becoming first-class** — LiteLLM's `run_tool_loop` and Ollama's structured tool support signals a shift from simple chat completions to multi-turn agentic workflows as a core feature.

4. **AMD MI35x/gfx950 support is accelerating** — Both SGLang and vLLM are actively landing AMD optimizations (AITER FP8, PCP, fusion kernels). This is the most active non-NVIDIA hardware effort.

5. **Unsloth's automatic step skip is a paradigm shift** — Per-model cache configuration based on layer depth suggests inference compilers are getting smarter about static-vs-dynamic cache decisions.

6. **Budget enforcement bugs in LiteLLM** — The stale spend and race condition issues (#27735, #43732) indicate that multi-tenant proxy cost controls need hardening before heavy production use.

7. **Observability is moving into serving** — LiteLLM's Lens and trace pagination work suggests infrastructure teams want unified debugging across gateway and upstream providers.

---

*Cross-compiled from individual project digests — October 4, 2026*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to generate a vLLM digest for 2026-10-04 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases:** None in the last 24h

**Top Issues by comments:**
1. #40004 - Priority scheduling preemption feature request (21 comments)
2. #49548 - Dynamic speculative decoding performance collapse (14 comments)
3. #53670 - EAGLE/MTP prefix-cache last-block drop causing recompute (12 comments)
4. #37753 - MoE Oracles unification (11 comments)
5. #48633 - NixlPushMode roadmap (9 comments)
6. #53488 - prompt_logprobs corruption with MTP (9 comments)
7. #37035 - cudaErrorIllegalAddress in gdn_attn.py (8 comments)
8. #58774 - Native span pooling RFC (7 comments)
9. #59566 - Speculative decoding test consolidation (7 comments)
10. #46796 - DeepSeek-V4-Flash fails on B300 (6 comments)

**New PRs (top ones):**
1. #59895 - Bugfix for Marlin int8-activation group scales
2. #48926 - Bugfix for Marlin W4A8 signed scale corruption
3. #59794 - ROCm AITER bump to 0.1.24.post1
4. #59908 - V2: Send token ids as int32 arrays
5. #52780 - MoE NVFP4 fallback for simulated routing
6. #52244 - Restore hybrid GDN prefix-cache hits under MTP
7. #51406 - ROCm fused QK-norm+RoPE+gate for Qwen3


8. #54061 - CUDA graph profiling for V2
9. #47933 - Preserve abort finish_reason
10. #59197 - Skip SWA bounded replay for KV loads

Now I'll organize this into the requested sections:

1. **Today's Highlights**
2. **Releases & Breaking Changes** - None
3. **New Model & Hardware Support**
4. **Performance & Optimization**
5. **Stability & Regressions**
6. **What This Means for Application Developers**

Let me craft this carefully with the information available.</think>

# vLLM Daily Digest — 2026-10-04

## Today's Highlights

The vLLM project addresses critical correctness and performance issues as speculation and quantization features mature. A notable Marlin quantization bug affecting negative group scales is being fixed across two PRs (#59895, #48926), while performance regressions in dynamic speculative decoding (#49548) and prefix caching under MTP (#53670) are under active investigation. The V2 model runner continues to see optimizations, including int32 token array transmission (#59908) and CUDA graph pool release on sleep (#59160, now merged).

---

## Releases & Breaking Changes

- **No new releases** in the last 24 hours.

---

## New Model & Hardware Support

- **ROCm AITER bump to 0.1.24.post1** — PR #59794 brings updated AMD Infinity Architecture support for ROCm deployments.

- **Fused QK-norm+RoPE+gate kernel enabled on ROCm** — PR #51406 enables the Triton-based fused kernel for Qwen3-Next/Qwen3.5 on AMD GPUs, previously CUDA-only.

- **CUDA graph pool offload on ROCm** — PR #59523 extends the `sleep_mode_offload_cudagraph` feature to ROCm, previously NVIDIA-only.

---

## Performance & Optimization

- **V2 runner: int32 token arrays** — PR #59908 sends new request token IDs as int32 arrays instead of Python lists, eliminating per-element CPU bottleneck for long prompts.

- **CUDA graph profiling for V2 runner** — PR #54061 extends capture profiling to the V2 model runner and encoder path, enabling performance analysis for newer architectures.

- **KV sizing accounts for graph memory** — PR #57865 reserves memory retained by CUDA graph setup before KV cache sizing, preserving forward-pass headroom even when optional graph reservation is disabled.

- **SWA bounded replay skip for KV loads** — PR #59197 eliminates recomputation of the last 128 prompt tokens on DeepSeek-V4.1 by skipping sliding-window-replay for requests carrying their own KV.

- **Performance regression: dynamic speculative decoding** — Issue #49548 reports ~14% single-stream degradation and catastrophic throughput collapse at batch-size thresholds on Qwen3.5-122B MTP (k=2) when using `num_speculative_tokens_per_batch_size`.

- **Performance regression: NVFP4 decode on GB10** — Issue #59770 reports ~16% slower decode on Nemotron-3.5-Lightning NVFP4 (DGX Spark / SM121) since v0.29.0.

---

## Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | Marlin int8-activation reads negative group scales as unsigned, corrupting output | Open | #59895, #48926 |
| **Critical** | `prompt_logprobs` silently corrupted with MTP speculative decoding on Qwen3.5 | Open | — |
| **High** | Prefix-cache last-block drop causes ~1,648-token recompute per hit, 30–40% batch throughput loss | Open | #52244 (WIP) |
| **High** | LoRA adapters with PEFT rank_pattern/alpha_pattern served with wrong scaling | Open | — |
| **High** | Multimodal chat drops all images when `chat_template_kwargs` is present | Open | — |
| **Medium** | DeepSeek-V4.1 logprob shift between nightlies affecting tool/structured output | Open | — |
| **Medium** | Hybrid GDN + MoE produces non-deterministic logprobs across identical batches | Open | — |
| **Medium** | Fast Start WeightCacheKey hashes only safetensors headers, risking weight aliasing | Open | — |
| **Low** | vLLM rejects requests when `max_tokens` exceeds context instead of clamping | Open | — |
| **Low** | DeepSeek-R1 streaming reasoning deltas not detokenized (byte-level BPE) | Open | — |

---

## What This Means for Application Developers

1. **Quantization users on Marlin**: If using W4A8 with int8 activations (`VLLM_MARLIN_INPUT_DTYPE=int8`) on checkpoints with negative group scales, expect incorrect outputs. The fix is pending #48926 and #59895 — avoid production use until landed.

2. **Speculative decoding operators**: The dynamic `num_speculative_tokens_per_batch_size` feature shows severe throughput collapse under concurrency; stick to static speculative decoding or batch sizes below the threshold until #49548 is resolved.

3. **Prefix caching + MTP**: If using hybrid GDN with MTP speculative decoding, prefix-cache hits are not being realized — #52244 is being prepared to restore this.

4. **DeepSeek tool-calling**: Logprob shifts between recent nightlies affect deterministic output; pin to a specific nightly if reproducibility matters.

5. **Responses API streaming**: A recent fix (#59859) ensures consistent item IDs in final responses; clients relying on stable IDs should update after v0.30.0.

6. **Production deployments**: The merged CUDA graph pool release (#59160) reduces memory overhead during sleep mode — consider enabling `sleep_mode_offload_cudagraph` for large MoE deployments.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang and create a structured digest for 2026-10-04.

Looking at the data:

**Releases**: None in the last 24h

**Issues (40 total, top 30 by comment count)**:
1. #17050 - CI Test Failures tracking (14 comments) - tracking issue
2. #33636 - DeepSeek V4 Perf Tracking (8 comments)
3. #30093 - MLX chained decode issues (7 comments) - closed/inactive
4. #39684 - sgl-deep-gemm SM90 weight-scale transform bug (5 comments)
5. #42012 - GLM-5.3-Flash on SM120 crash (4 comments)
6. #30570 - DSA attention backend RuntimeError (3 comments) - closed/inactive
7. #33207 - DeepseekV4ConfigAlias unrecognized (3 comments) - closed/inactive
8. #42369 - NVFP4 KV cache corruption bug (3 comments)
9. #42085 - --bf16-gemm-backend gemv not working (3 comments)
10. #41743 - --enable-return-routed-experts returns all-zero (3 comments)
... and more

**PRs (294 total)**: Let me identify the key ones:
- #42038 - DP x TP x CP for attention with interleave CP
- #40884 - DFlash draft layers spec
- #39923 - AMD DSV4 PCP with fp8 unified_kv on gfx950
- #41296 - docs sync
- #42106 - Add yue2
- #42121 - Fix H3 INT8 load in ComfyUI
- #41476 - AMD DeepSeek-V4.1-Flash MI35x test


- #41708 - AMD AITER FP8 for MiniMax-M3
- #41931 - AMD aiter GEMM for DeepSeek-V4
- #38397 - MiniCPM4.1 SparDA prefetch
- #41671 - Flux3 FP8 quantization with Triton
- #42332 - Diffusion scheduler port fix
- #42439 - AMD DCP verify prefix on MLA ASM
- #41707 - AMD AITER ASM for MiniMax-M3
- #42428 - Move pressure signals from legacy policies

I'm seeing significant momentum in AMD optimizations, particularly around MiniMax-M3 integration with AITER components, DeepSeek-V4 enhancements, and diffusion model support. The test coverage is expanding with new MI35x validations, while infrastructure work continues on memory management and scheduler improvements.

For the digest, I should highlight the performance wins for DeepSeek V4 and MiniMax-M3 on AMD hardware, call out the critical NVFP4 KV cache bug as a high-priority fix, and note the new SM120 support for GLM-5.3-Flash. The MLX decoder issue from issue #30093 is already marked inactive, so I can skip that. Several of these PRs are landing concrete optimizations worth calling out directly.</think>

# SGLang Digest — 2026-10-04

## 1. Today's Highlights

SGLang continues heavy investment in DeepSeek V4 and AMD hardware optimization. The most notable developments include a **critical NVFP4 KV cache corruption bug** affecting long-context serving on SM120, ongoing performance work for DeepSeek V4 on NVIDIA hardware, and multiple AMD GPU optimizations landed or in progress. The CI pipeline shows 1 broken + 8 flaky tests against 1136 recently fixed tests.

## 2. Releases & Breaking Changes

No releases in the last 24 hours.

## 3. New Model & Hardware Support

| Model/Architecture | Hardware | Status |
|---|---|---|
| DeepSeek V4.1 | NVIDIA (SM90/SM10X) | Perf tracking in progress — TRT-LLM DSv4 attention integrated, FlashInfer MLA enabled ([#33636](https://github.com/sgl-project/sglang/issues/33636)) |
| GLM-5.3-Flash | NVIDIA SM120 (RTX PRO 6000) | FA4 attention crashes on hybrid extend; Triton backend works ([#42012](https://github.com/sgl-project/sglang/issues/42012)) |
| DeepSeek-V4.1-Flash | AMD MI35x | Accuracy test added to CI ([#41476](https://github.com/sgl-project/sglang/pull/41476)) |
| MiniMax-M3 | AMD gfx950 | AITER FP8 ASM prefill enabled for HD128 attention ([#41707](https://github.com/sgl-project/sglang/pull/41707)); AITER FP8 index cache selection enabled ([#41708](https://github.com/sgl-project/sglang/pull/41708)) |
| Qwen4Exp (Qwen3.8-Flash-Next) | NVIDIA DGX Spark (SM121) | Performance profiling — QSA/PLE/GDN kernels dominate decode step time ([#36796](https://github.com/sgl-project/sglang/issues/36796)) |

## 4. Performance & Optimization

| Area | Change | Impact |
|---|---|---|
| **DeepSeek V4 AMD** | PCP with fp8 unified_kv enabled on gfx950 ([#39923](https://github.com/sgl-project/sglang/pull/39923)) | Enables prefill CP with unified KV layout on AMD MI35x |
| **MiniMax-M3** | Fused QK norm + RoPE + cache writes with AITER ([#35357](https://github.com/sgl-project/sglang/pull/35357)) | Reduces separate kernel launches for sparse attention layers |
| **MiniMax-M3** | Small-batch MoE expert-count gate for sort + FP8 block-scale kernel ([#41982](https://github.com/sgl-project/sglang/pull/41982)) | Improves low-concurrency throughput on MI355X |
| **FLUX.3 diffusion** | Fused rowwise FP8 quantization with Triton ([#41671](https://github.com/sgl-project/sglang/pull/41671)) | Faster diffusion linear layers |
| **HiCache prefetch** | MiniCPM4.1 SparDA host-resident prefetch ([#38397](https://github.com/sgl-project/sglang/pull/38397)) | Better KV staging for sparse models |
| **Router GEMM** | FP32 output for deterministic inference on DeepSeek V3/V4 ([#34758](https://github.com/sgl-project/sglang/issues/34758)) | Reproducible expert routing |
| **File-backed PLE** | Concurrent host reads for cold rows ([#42392](https://github.com/sgl-project/sglang/issues/42392)) | 6.8× lower cold-prefill TTFT on GB10 |

## 5. Stability & Regressions

| Severity | Issue | Status |
|---|---|---|
| **Critical** | **NVFP4 KV cache silently corrupts long-context output** — checkpoint's fp8-calibrated k/v_scale incorrectly used as NVFP4 global scale ([#42369](https://github.com/sgl-project/sglang/issues/42369)) | Open, no PR yet |
| **High** | **GLM-5.3-Flash on SM120 crashes** — FA4 attention backend fails at CUDA-graph capture on hybrid extend ([#42012](https://github.com/sgl-project/sglang/issues/42012)) | Open; Triton is workaround |
| **High** | **sgl-deep-gemm 0.2.0 SM90 weight-scale transform** returns non-owning alias ([#39684](https://github.com/sgl-project/sglang/issues/39684)) | Open |
| **Medium** | **--bf16-gemm-backend gemv** accepted but never used for unquantized linear layers ([#42085](https://github.com/sgl-project/sglang/issues/42085)) | Open |
| **Medium** | **--enable-return-routed-experts** returns all-zero routings on triton-kernels / flashinfer top-k paths ([#41743](https://github.com/sgl-project/sglang/issues/41743)) | Open |
| **Medium** | **Diffusion server port collision** — scheduler port guessing can cause silent cross-server GPU hijacking ([#42332](https://github.com/sgl-project/sglang/pull/42332)) | PR open |
| **Low** | EXIF orientation never applied for VLM image decoding ([#33464](https://github.com/sgl-project/sglang/issues/33464)) | Open |

**CI Status** ([#17050](https://github.com/sgl-project/sglang/issues/17050)): 1 broken, 8 flaky, 1136 recently fixed.

## 6. What This Means for Application Developers

1. **NVFP4 KV users**: If you serve NVFP4-quantized checkpoints (e.g., unsloth NVFP4 quants) with `--kv-cache-dtype nvfp4`, **do not use long-context serving** until the fix lands — the KV cache silently produces corrupted outputs.

2. **SM120 (RTX PRO 6000) users**: GLM-5.3-Flash currently only works with the Triton attention backend. Use `SGLANG_ATTN_BACKEND=triton` as a workaround.

3. **AMD MI35x users**: DeepSeek-V4.1-Flash now has CI coverage; AITER-based FP8 optimizations for MiniMax-M3 are maturing — expect better throughput on gfx950 hardware.

4. **Deterministic inference**: DeepSeek V3/V4 routers now correctly output FP32 for reproducible expert routing — enable deterministic mode if reproducibility matters for your evaluation pipelines.

5. **Diffusion serving**: The scheduler port collision bug can cause silent cross-contamination if you run multiple diffusion servers — ensure unique port allocation or wait for the fix.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data and generate a structured digest for llama.cpp on 2026-10-04.

First, let me identify the key items:

**Releases (last 24h):**
- b11382: webgpu: add f16 support to fill/set_rows (#29897)
- b11381: mtmd : fix deprecated strdup warning on Windows (#29863)
- b11380: vendor : update cpp-httplib to 0.59.0 (#29886)
- b11379: server : fix laya abort by limiting n_batch to n_ubatch (#29903)
- b11378: common : add common_is_tty() helper and fix deprecated warnings on Windows (#29860)
- b11377: chat : honor json_schema in Ling 3.0 parser (#29813)
- b11376: ci: fix flaky ADD_ADD f16 by using the fused ADD tolerance (#29904)
- b11375: graph: gather the recurrent states once so the reserve covers every split (#29856)
- b11374: ggml-openvino: update to 2026.4.1, optimize performance, expand ops, improve device listing (#29852)
- b11372: qwen4exp : halve the indexer score memory (#29825)

**Top Issues:**
- #25618: Speculative decoding bug with quantized targets (29 comments)
- #29811: Assert at startup with Qwen 3.8 flash with MTP (16 comments)
- #27572: Draft acceptance collapses to 0.0 under -np N with multi-ubatch batches (13 comments)
- #27579: HIP/ROCm backend produces corrupted output on gfx1151 (12 comments)


- #28290: unpack8() corrupts MAT_MUL + CPY on Qualcomm Snapdragon X Elite (9 comments)
- #28734: qwen4exp CUDA decode slows linearly with context (8 comments)
- #29655: Unstable Tool Calling for Gemma 4 Models (7 comments)

**Key PRs:**
- #29887: llama : add a GPU cache for MoE experts kept in host memory
- #29483: webgpu: add MMVQ support for Q1_0/Q5_0/Q5_1/Q3_K/Q5_K/Q6_K/MXFP4
- #28540: mediagen : LTX-2 image generation capabilities

I'm tracking several critical performance and compatibility issues. The Qualcomm Snapdragon and CUDA decoding problems suggest ongoing optimization challenges, while the tool calling instability could impact model reliability. The new media generation and MoE caching features indicate continued expansion of the project's capabilities.</think>

# llama.cpp Digest — 2026-10-04

## 1. Today's Highlights

The project sees continued backend optimizations this cycle, with a major OpenVINO backend update (2026.4.1) bringing Qwen3.5 MoE performance improvements and expanded operator support. A critical server fix addresses abort issues when `n_batch` exceeds `n_ubatch`, and WebGPU gains f16 support for fill/set_rows operations. Multiple speculative decoding and quantization-related correctness issues remain active.

## 2. Releases & Breaking Changes

| Commit | Change | Notes |
|--------|--------|-------|
| [b11380](https://github.com/ggml-org/llama.cpp/commit/b11380) | vendor: update cpp-httplib to 0.59.0 | HTTP library upgrade |
| [b11379](https://github.com/ggml-org/llama.cpp/commit/b11379) | server: fix abort by limiting n_batch to n_ubatch | Fixes #29902 |

No breaking API changes reported. Server users with custom batch configurations should verify behavior after the n_batch limiting change.

## 3. New Model & Hardware Support

- **GLM5Next MTP**: New PR [#29928](https://github.com/ggml-org/llama.cpp/pull/29928) implements MTP support and graph optimization for GLM5Next models.
- **Qwen4Exp MTP**: Merged in [#29761](https://github.com/ggml-org/llama.cpp/pull/29761) — adds Multi-Token Prediction for Qwen3.8-Flash-Next.
- **OpenVINO Backend**: Updated to 2026.4.1 with Qwen3.5 MoE support, expanded operators, and improved device listing ([#29852](https://github.com/ggml-org/llama.cpp/pull/29852), commit b11374).
- **WebGPU**: f16 support added for fill/set_rows operations ([#29897](https://github.com/ggml-org/llama.cpp/pull/29897), b11382).
- **WebGPU MMVQ**: Extended quantization support for Q1_0/Q5_0/Q5_1/Q3_K/Q5_K/Q6_K/MXFP4 ([#29483](https://github.com/ggml-org/llama.cpp/pull/29483)).

## 4. Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **MoE Inference** | GPU cache for host-resident MoE experts with LRU caching ([#29887](https://github.com/ggml-org/llama.cpp/pull/29887)) | Faster inference for models with large expert pools; bypasses full offload for small batches (≤32 tokens) |
| **Qwen4Exp Memory** | Halved indexer score memory usage (b11372, #29825) | Reduced memory footprint for long-context workloads |
| **OpenVINO** | Backend update to 2026.4.1 with performance optimizations (#29852) | Improved throughput for Intel NPU/iGPU deployments |
| **WebGPU Quant** | MMVQ support for additional formats (#29483) | V100 TG speed improvements (see PR for per-format numbers) |
| **CUDA Q2_K** | VGPR spill reduction ([#29910](https://github.com/ggml-org/llama.cpp/pull/29910)) | Better AMD GPU performance |
| **Graph Optimization** | Gather recurrent states once for reserve sizing (b11375, #29856) | More efficient memory allocation for recurrent models |
| **tinyBLAS** | BF16/FP16/FP32 K-tail support on x86 ([#29806](https://github.com/ggml-org/llama.cpp/pull/29806)) | Removes fallback to generic CPU path for non-aligned K dimensions |
| **Vulkan** | Split matmul dispatch to respect maxComputeWorkGroupCount ([#29533](https://github.com/ggml-org/llama.cpp/pull/29533)) | Fixes asserts on large matrix dimensions |

## 5. Stability & Regressions

### High Priority
| Issue | Description | Status |
|-------|-------------|--------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | Speculative decoding produces divergent output on **quantized targets** (Q4_K_M) vs bf16; affects draft-mtp and draft-dspark | Open — 29 comments |
| [#29811](https://github.com/ggml-org/llama.cpp/issues/29811) | Assert at startup running Qwen 3.8 Flash with MTP | Open — 16 comments |
| [#27572](https://github.com/ggml-org/llama.cpp/issues/27572) | Draft acceptance collapses to 0.0 under `-np N` with multi-ubatch batches — async device→host copy race | Open — 13 comments |
| [#27579](https://github.com/ggml-org/llama.cpp/issues/27579) | HIP/ROCm corrupted output on gfx1151 (Strix Halo); Vulkan works correctly | Open — 12 comments |

### Medium Priority
- [#28734](https://github.com/ggml-org/llama.cpp/issues/28734): qwen4exp CUDA decode slows linearly with context
- [#28290](https://github.com/ggml-org/llama.cpp/issues/28290): unpack8() corrupts MAT_MUL + CPY on Qualcomm Snapdragon X Elite
- [#29655](https://github.com/ggml-org/llama.cpp/issues/29655): Unstable tool calling for Gemma 4 during multi-line streaming

### Fixes In Progress
- [#29924](https://github.com/ggml-org/llama.cpp/pull/29924): Fixes n-gram drafts rejected at temp > 0 after truncation
- [#29910](https://github.com/ggml-org/llama.cpp/pull/29910): CUDA Q2_K VGPR spill reduction

## 6. What This Means for Application Developers

1. **Server deployments**: The n_batch limiting fix ([b11379](https://github.com/ggml-org/llama.cpp/commit/b11379)) resolves a startup abort — update if using custom batch configurations.

2. **Quantized inference**: If using speculative decoding with quantized targets (Q4_K_M, etc.), be aware of potential output divergence from non-speculative runs ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618)). Consider using bf16 targets for deterministic output.

3. **Intel NPU users**: The OpenVINO 2026.4.1 update brings Qwen3.5 MoE support and improved device enumeration — test to verify NPU detection if previously experiencing issues.

4. **MoE model users**: The new GPU cache for host experts ([#29887](https://github.com/ggml-org/llama.cpp/pull/29887)) should improve latency for small-batch MoE inference — monitor memory usage patterns.

5. **Windows builds**: Deprecated warnings on Windows are being addressed ([b11378](https://github.com/ggml-org/llama.cpp/commit/b11378), [b11381](https://github.com/ggml-org/llama.cpp/commit/b11381)) — future builds will be cleaner.

6. **WebGPU users**: f16 fill/set_rows support resolves CI failures with GLM5 models when Flash Attention is enabled.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate a structured Ollama digest for 2026-10-04 based on the provided GitHub data. Let me analyze the data and organize it into the requested sections.

Let me go through the data:

**Latest Releases**: None in last 24h

**Latest Issues** (9 total):
1. #11798 - Feature Request: Add Audio Input Support for Multimodal Models (40 👍)
2. #18769 - clef-flash decision model fails on /v1/systemone (2 👍)
3. #18766 - think:"low"/"medium"/"high" ignored for Qwen3.8 GGUF
4. #17050 - [CLOSED] Qwen3.5:35b-mlx performance issues on macOS
5. #18775 - [bug] /api/generate accepts trailing non-JSON data
6. #18770 - [bug] mistral-medium-3.5:128b memory issues on M4 Mac
7. #18717 - Structured outputs: JSON schema property order lost
8. #18774 - [bug] Gemma4 JSON schema format not enforced with think:true
9. #18772 - [bug] device index incremented for filtered pseudo-devices

**Pull Requests** (30 total, showing 20):
1. #18781 - transfer: consume direct blob responses without refetching
2. #18779 - mlx: match publisher tokenizer semantics
3. #18780 - mlx: add Kolibri 1 support
4. #18776 - [CLOSED] mlx: Decision model improvements
5. #18050 - README: update Msty link to msty.ai
6. #18778 - Reject trailing garbage after JSON in /api/generate
7. #15876 - [CLOSED] server: cancel pull on client disconnect


8. #18777 - llama: fix clef head reads past 2GiB on windows
9. #18701 - [CLOSED] mlx: System one support
10. #18773 - discover: keep GPU indexes aligned when skipping pseudo-devices
11. #18755 - [CLOSED] mlx: separate decision preparation and readout
12. #18761 - llama.cpp: version update
13. #18189 - docs: add Windows installation troubleshooting
14. #18648 - [CLOSED] x/transfer: propagate disk-full write errors
15. #18771 - server: encode colons in host for manifest paths
16. #18768 - decision: accept structured System One
17. #18722 - openai: keep tool message content parts in one message
18. #18767 - openai: match complete tool result groups by call ID
19. #18281 - llm: send assistant thinking to the chat template
20. #17567 - x/mlxrunner/mlx: link against libdl on linux

Now I'll organize this into the requested sections.</think>

# Ollama Digest — 2026-10-04

## 1. Today's Highlights

MLX backend continues to see heavy investment with tokenizer fixes, Kolibri 1 support, and SystemOne model improvements all landing. A critical bug in `/api/generate` allowing trailing non-JSON data has a fix PR open. Windows receives two notable fixes: Clef head reads past 2GiB and colon encoding in registry host paths.

---

## 2. Releases & Breaking Changes

| Item | Details |
|------|---------|
| **No new releases** | No tags published in the last 24h |

---

## 3. New Model & Hardware Support

| Feature | Description | PR/Issue |
|---------|-------------|----------|
| **Kolibri 1 MLX support** | Added native Metal backend support for Kolibri 1 model architecture | [#18780](https://github.com/ollama/ollama/pull/18780) |
| **SystemOne MLX support** | Enables decision models using Strands architecture on Apple Silicon | [#18701](https://github.com/ollama/ollama/pull/18701) (merged) |
| **Strands Decider** | New decision preparation and readout pipeline separating forward pass logic | [#18755](https://github.com/ollama/ollama/pull/18755) (merged) |
| **Structured SystemOne criteria** | Accepts string, object, and array criteria descriptions for choice/noul/score questions | [#18768](https://github.com/ollama/ollama/pull/18768) |
| **Decision model MLX improvements** | Overflow rejection, warm latency tuning (~5ms saved on M5) | [#18776](https://github.com/ollama/ollama/pull/18776) (merged) |

---

## 4. Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **MLX tokenizer semantics** | Fixed token-ID mismatches from dropped pretokenizer stages, Unicode/whitespace approximation, and BPE merge ranking | Correctness for models with complex tokenization |
| **MLX warm latency** | Tuned route flow — saves ~5ms on M5 hardware | Faster first-token time for decision models |
| **Transfer efficiency** | Avoid refetching blobs when registry serves direct 200 responses | Reduced bandwidth on model pulls |
| **llama.cpp update** | Version bump from `b11232` to `b11351` | Ongoing upstream improvements | [#18761](https://github.com/ollama/ollama/pull/18761) |

---

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | `/api/generate` accepts trailing non-JSON data after valid request body — potential parsing ambiguity | Fix PR open: [#18778](https://github.com/ollama/ollama/pull/18778) |
| **High** | Clef head reads past 2GiB on Windows — `/v1/systemone` fails with "non-finite logit" or "cannot open model" | Fix PR: [#18777](https://github.com/ollama/ollama/pull/18777) |
| **Medium** | Device index incremented for filtered pseudo-devices — causes incorrect GPU ordinals | Fix PR: [#18773](https://github.com/ollama/ollama/pull/18773) |
| **Medium** | Qwen3.8 GGUF `think: "low"/"medium"/"high"` ignored — always uses template default | Open: [#18766](https://github.com/ollama/ollama/issues/18766) |
| **Medium** | JSON schema property order lost on native llama-server chat path (regression of #7978) | Open: [#18717](https://github.com/ollama/ollama/issues/18717) |
| **Medium** | Gemma4: JSON schema format not enforced when `think:true` answers directly without reasoning | Open: [#18774](https://github.com/ollama/ollama/issues/18774) |
| **Low** | `localhost:3000` registry host creates invalid path on Windows (colon in directory name) | Fix PR: [#18771](https://github.com/ollama/ollama/pull/18771) |
| **Info** | macOS M4 128GB cannot run mistral-medium-3.5:128b — memory exhaustion | Open: [#18770](https://github.com/ollama/ollama/issues/18770) |

---

## 6. What This Means for Application Developers

- **Avoid trailing garbage in `/api/generate`** — The fix for trailing non-JSON data will return HTTP 400. Ensure your clients send clean JSON bodies.
- **Windows registry users**: Model pulls from hosts with colons (e.g., `localhost:3000`) will now work correctly.
- **SystemOne decision models** — If using Clef on Windows, the 2GiB read fix should resolve the `/v1/systemone` failures.
- **Tool message handling** — OpenAI-compatible endpoints now correctly preserve tool message content as a single unit, fixing attribution issues with parallel tool calls.
- **Thinking in chat templates** — Assistant thinking content is now passed through to the chat template, enabling proper context in multi-turn conversations.
- **MLX on Linux** — Build linkage issue with `libdl` on older glibc (pre-2.34) resolved in [#17567](https://github.com/ollama/ollama/pull/17567).

---

*Generated from GitHub data — ollama/ollama @ 2026-10-04*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-10-04 based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me organize the key information:

## Releases
- v1.105.0-rc.1 - release candidate
- v1.104.0 - stable release
- v1.103.3 - stable release

All releases include Docker image signing with cosign.

## Issues (Open) - Key ones
1. #39057 - Design intent: cache hits zero spend but token columns replay original usage
2. #27735 - Virtual key BudgetExceededError uses stale spend
3. #43732 - Key over max_budget admitted again after 60s idle
4. #32357 - /v1/messages adapter mis-encodes reasoning models
5. #43652 - Support aggregate shared-wallet budget fallback to economy models
6. #44154 - Background health check results attributed to every deployment sharing same model
7. #44336 - vertex_ai/agent_engine silently drops image/file/audio content parts
8. #42111 - /v1/audio/speech fails for OpenRouter

## Closed Issues
- #28607 - Anthropic Workload Identity Federation support
- #29912 - Internal-user max_budget blocks zero-cost models
- #38515 - Zero-cost models blocked once user's personal max_budget exhausted
- #43010 - /v1/responses streaming doubles thinking text
- #41357 - Proxy leaks SlackAlerting.periodic_flush task
- #35097 - required-AND tag routing via & prefix
- #34799 - model_prices_and_context_window.json replicate model key typo
- #32226 - MCP UTF-8 truncation bug


- #38076 - import litellm fails on Python 3.10

## Pull Requests
Notable PRs:
- #44469 - fix(proxy): keep parsed key when custom key header absent
- #44476 - fix(lens): keep preview setup usable before coordinated releases
- #40673 - fix(responses): preserve replay data across reasoning phases
- #44381 - feat(sdk): add run_tool_loop and arun_tool_loop helpers
- #44474 - fix(websearch): preserve Anthropic allowed_domains and blocked_domains
- #44473 - feat(ui): share trace drawer

Now I'll organize this into the requested format.</think>

# LiteLLM Digest — 2026-10-04

## Today's Highlights

The LiteLLM project continues its rapid cadence with three new releases (v1.105.0-rc.1, v1.104.0, v1.103.3), all now featuring Docker image signature verification via cosign. Several significant budget and accounting bugs affecting virtual keys have surfaced, including a stale spend issue causing false `BudgetExceededError` rejections and a race condition allowing budget-exhausted keys back after 60s idle. The SDK is gaining `run_tool_loop` helpers for multi-turn tool execution, while the Lens observability UI is seeing substantial investment in pagination and trace handling.

---

## Releases & Breaking Changes

| Version | Notes |
|---------|-------|
| [v1.105.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-rc.1) | Release candidate |
| [v1.104.0](https://github.com/BerriAI/litellm/releases/tag/v1.104.0) | Stable release |
| [v1.103.3](https://github.com/BerriAI/litellm/releases/tag/v1.103.3) | Stable release |

**All LiteLLM Docker images are now signed with cosign** — the same key introduced in commit `0112e53`. Users should verify images before pulling:

```bash
cosign verify ghcr.io/berriai/litellm:latest
```

---

## New Model & Hardware Support

No new model or hardware support entries detected in the 24h window.

---

## Performance & Optimization

| Area | Change | PR |
|------|--------|-----|
| **SDK Tool Execution** | New `litellm.run_tool_loop()` and `litellm.arun_tool_loop()` helpers for multi-turn agentic workflows | [#44381](https://github.com/BerriAI/litellm/pull/44381) |
| **Trace Pagination** | Shared signed pagination for trace list/detail reads; storage-independent trace reads | [#44452](https://github.com/BerriAI/litellm/pull/44452), [#44422](https://github.com/BerriAI/litellm/pull/44422) |
| **Catalog Paging** | Portable catalog pagination preserving upstream continuation across gateway replicas | [#44446](https://github.com/BerriAI/litellm/pull/44446) |
| **Lens Observability** | Live investigation tracking; worker connection guidance; trace drawer as reusable SidePanel | [#44472](https://github.com/BerriAI/litellm/pull/44472), [#44475](https://github.com/BerriAI/litellm/pull/44475), [#44473](https://github.com/BerriAI/litellm/pull/44473) |

---

## Stability & Regressions

### High Severity

| Issue | Description | Status |
|-------|-------------|--------|
| [#27735](https://github.com/BerriAI/litellm/issues/27735) | Virtual key `BudgetExceededError` uses stale spend while `/key/info` shows spend below `max_budget` — requests incorrectly rejected | OPEN (12 comments) |
| [#43732](https://github.com/BerriAI/litellm/issues/43732) | Key over `max_budget` admitted again after ~60s idle until batch writer flushes spend to DB | OPEN (5 comments) |
| [#39057](https://github.com/BerriAI/litellm/issues/39057) | Cache hits zero `spend` but token columns replay original usage — ambiguous aggregation basis for token reports | OPEN (14 comments) |
| [#44336](https://github.com/BerriAI/litellm/issues/44336) | `vertex_ai/agent_engine` silently drops image/file/audio content parts, returns HTTP 200 with fabricated answer | OPEN (3 comments) |

### Medium Severity

| Issue | Description | Status |
|-------|-------------|--------|
| [#32357](https://github.com/BerriAI/litellm/issues/32357) | `/v1/messages` adapter mis-encodes reasoning models — `thinking_delta` streamed inside text block → empty content in Anthropic SDK | OPEN (5 comments) |
| [#42111](https://github.com/BerriAI/litellm/issues/42111) | `/v1/audio/speech` fails for OpenRouter: "Unable to map custom llm provider=openrouter" | OPEN (3 comments) |
| [#44154](https://github.com/BerriAI/litellm/issues/44154) | Background health check results attributed to every deployment sharing same `litellm_params.model` | OPEN (3 comments) |
| [#41357](https://github.com/BerriAI/litellm/issues/41357) | Proxy leaks one `SlackAlerting.periodic_flush` task every 30s when `alerting` set — grows until restart | CLOSED |

### Low Severity / Fixed

| Issue | Description | Status |
|-------|-------------|--------|
| [#29912](https://github.com/BerriAI/litellm/issues/29912) | Internal-user `max_budget` blocks zero-cost models — `_PROXY_MaxBudgetLimiter` ignores `skip_budget_checks` | CLOSED |
| [#38515](https://github.com/BerriAI/litellm/issues/38515) | Zero-cost models blocked once user's personal `max_budget` exhausted | CLOSED |
| [#38076](https://github.com/BerriAI/litellm/issues/38076) | `import litellm` fails on Python 3.10 — `NotRequired` imported from stdlib without fallback | CLOSED |

---

## What This Means for Application Developers

1. **Budget enforcement has race conditions** — If you rely on virtual key budgets, be aware that keys may temporarily slip through after idle periods (#43732) or show stale spend figures (#27735). This is critical for production cost control.

2. **Response caching skews token reports** — Cache hits record zero spend but replay original token counts (#39057). Your spend dashboards may double-count tokens if you're aggregating across `spend_logs`.

3. **New SDK helpers for agentic apps** — `run_tool_loop()` and `arun_tool_loop()` (#44381) simplify multi-turn tool execution. Consider migrating hand-rolled loops to these helpers.

4. **OpenRouter TTS route broken** — Avoid `/v1/audio/speech` with OpenRouter providers until [#42111] is fixed.

5. **Python 3.10 compatibility** — If you're on 3.10, upgrade to a newer patch; `import litellm` fails on 3.10 due to missing `NotRequired` in stdlib.

6. **Docker image verification available** — Production deployments should verify container signatures:

   ```bash
   cosign verify ghcr.io/berriai/litellm:v1.104.0
   ```

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze this GitHub data for Unsloth and create a structured digest for 2026-10-04.

First, let me go through the key items:

**Latest Releases (last 24h):**
- None

**Key Issues (17 total):**

1. **#12468** - Tensor split decode up to 2.9x slower since b10715-mix-86bd2d3 (possibly max_cuda_graphs = 64). Affects 2x RTX 5070 Ti, Windows/WSL2/Linux. 48 t/s vs 115 t/s before.

2. **#12372** - Studio pages mmproj-F16.gguf from disk during generation — severe t/s regression. Extra args shadow-stripped and --mlock rejected. CLOSED

3. **#12533** - Unsloth Studio minor bug with Context Length meter (upper right corner). OPEN

4. **#12415** - Desktop: Hugging Face quant discovery blocks loading On Device models offline. OPEN

5. **#12547** - Desktop: System TTS reads out markdown formatting (asterisk asterisk, etc). OPEN

6. **#10983** - Studio: durable chat runs persist image_url/video_url data URI past media gate. CLOSED

7. **#12466** - Studio backend: Xet health probe stubs out Triton process-wide, breaking diffusers/xformers. OPEN

8. **#12473** - Sandbox nul file breaks tools on Windows. OPEN

9. **#12534** - Feature: Add Code tool for vision capable LLM to automatically import image. CLOSED

10. **#12554** - Bug: Problem saving and loading text-only variant of VLM (Gemma 3). OPEN

11. **#12638** - Web search fails: primp h2_client connection reset on v0.1.902-beta. 

12. **#12626** - tool_choice="none" can leave streamed tool calls without terminal event. OPEN

13. **#12625** - Feature: Add count for automatic compactions to Context Length meter. OPEN

14. **#12624** - Feature: Context Length meter update when tool call hands control to sandbox. OPEN

15. **#12623** - UI/UX Bug: Live Monitor widget overlaps with background download status popover. OPEN

16. **#12594** - Feature: Add RLM feature for model self-training loops via API. OPEN

17. **#12592** - Bug: Stop generating buttons freeze. OPEN

Continuing through the PR list, I see #12602 introduces the Clone page with audio inputs and saved voices, while #11668 adds turn numbering and a pinned turn navigator to chat. UI refinements are coming via #12655 with toast styling improvements and #12654 bringing SageAttention 2 with FlashAttention 4. There's also work on handling refused tool calls properly and voice mode reconstruction, plus fixes addressing multi-model refactor guards and GPU compatibility without bfloat16 support. SageAttention and FlashAttention 4 should work without failures or rendering issues, and diffusion training is being added to MCP tools alongside API training information. Reading pre-quantized diffusion checkpoints from safetensors is now supported, along with a per-model automatic step skip feature. I should prioritize reporting on the tensor split decode performance regression as a critical issue, note that SageAttention 2 is now available in the Studio, and highlight the new audio workflow features.</think>

# Unsloth Digest — 2026-10-04

## 1. Today's Highlights

A significant **performance regression** affects multi-GPU tensor split deployments: builds since `b10715-mix-86bd2d3` show up to **2.9x slower decode** (48 t/s vs 115 t/s on RTX 5070 Ti setups). Meanwhile, the Studio backend is gaining SageAttention 2 integration and a new per-model automatic step skip feature promising **1.44x–1.81x inference speedups** across five tested models.

## 2. Releases & Breaking Changes

| Version | Change | Link |
|---------|--------|------|
| — | No releases in last 24h | — |

---

## 3. New Model & Hardware Support

| Area | Details | Link |
|------|---------|------|
| **Quantization** | Pre-quantized diffusion checkpoints now read from safetensors on torchao 0.17, 0.18 and main — removes dependency on exact pickle class paths | [#12645](https://github.com/unslothai/unsloth/pull/12645) |
| **GPU Support** | GPUs without bfloat16 (RX 5000/6000, T4, V100) now load outlier-prone models (Gemma, gpt-oss, Qwen3.5) in float32 instead of silently failing | [#11533](https://github.com/unslothai/unsloth/pull/11533) |
| **Audio Models** | HTDemucs, HTDemucs 6-stem, BS-RoFormer, and Mel-Band RoFormer GGUFs now load into the audio workspace | [#12610](https://github.com/unslothai/unsloth/pull/12610) |
| **Attention Kernels** | SageAttention 2 loads on-demand from Kernels Hub; FlashAttention 4 dependencies install on fresh Studio | [#12654](https://github.com/unslothai/unsloth/pull/12654) |

---

## 4. Performance & Optimization

| Component | Change | Impact |
|-----------|--------|--------|
| **Per-model automatic step skip** | New feature — uses `transformer_cache=static` by default for models with ≥20 default steps (previously only on `speed_mode=max`) | **1.44x–1.81x** inference speedup on five models; MiniMax-H3 sees up to max gain on `speed_mode=max` |
| **SageAttention kernel handling** | Probe + per-call guard ensures explicit `attention_backend="sage"` never fails, slows down, or renders noise | Reliability fix for B200, T4, and other cards without Sage kernels |
| **LTX-2 compile reproducibility** | Pinned inductor reduction configs so renders match across servers | Deterministic outputs for LTX-2.3 |
| **Vulkan GPU selection** | Fill discrete GPU before shared-memory iGPU in mixed-pin scenarios | Better VRAM utilization on mixed iGPU/dGPU systems |

---

## 5. Stability & Regressions

### Critical

| Issue | Severity | Status | Link |
|-------|----------|--------|------|
| **Tensor split decode 2.9x slower** — regression since `b10715-mix-86bd2d3`, possibly `max_cuda_graphs=64` | **Critical** | Open | [#12468](https://github.com/unslothai/unsloth/issues/12468) |
| **Xet health probe stubs out Triton** — breaks diffusers/xformers with `'function' object has no attribute 'fn'` | **Critical** | Open | [#12466](https://github.com/unslothai/unsloth/issues/12466) |
| **Stop generating buttons freeze** — generation continues after model unload, chat freezes | **Critical** | Open | [#12592](https://github.com/unslothai/unsloth/issues/12592) |

### High

| Issue | Severity | Status | Link |
|-------|----------|--------|------|
| **Hugging Face quant discovery blocks offline model loading** — On Device tab fails without internet | High | Open | [#12415](https://github.com/unslothai/unsloth/issues/12415) |
| **Web search fails** — `h2_client` connection reset on v0.1.902-beta | High | Open | [#12638](https://github.com/unslothai/unsloth/issues/12638) |
| **Sandbox `nul` file breaks tools on Windows** — reserved device name causes terminal/Python tool failures | High | Open | [#12473](https://github.com/unslothai/unsloth/issues/12473) |

### Medium

| Issue | Severity | Status | Link |
|-------|----------|--------|------|
| **Context Length meter** — missing update on tool call handoff; missing automatic compaction count | Medium | Open | [#12624](https://github.com/unslothai/unsloth/issues/12624), [#12625](https://github.com/unslothai/unsloth/issues/12625) |
| **Live Monitor z-index collision** — overlaps with download status popover | Medium | Open | [#12623](https://github.com/unslothai/unsloth/issues/12623) |
| **TTS reads markdown formatting** — "asterisk asterisk" read aloud | Medium | Open | [#12547](https://github.com/unslothai/unsloth/issues/12547) |
| **tool_choice="none" leaves orphaned tool calls** — streamed tool calls lack terminal event | Medium | Open | [#12626](https://github.com/unslothai/unsloth/issues/12626) |

---

## 6. What This Means for Application Developers

- **If you run multi-GPU tensor-split inference**: Hold off on builds after `b10715-mix-86bd2d3`; revert to `b10687-mix-67dfc8b` or use official `ggml-org` builds until the regression is fixed.

- **If you use SageAttention or FlashAttention 4 explicitly**: The kernel guard fixes in [#12641](https://github.com/unslothai/unsloth/pull/12641) and [#12654](https://github.com/unslothai/unsloth/pull/12654) should make these backends reliable — expect fewer silent fallbacks or generation failures.

- **If you target older GPUs (T4, V100, RX 5000/6000)**: Float32 loading for outlier-prone models is now automatic — no more silent accuracy loss.

- **If you build audio apps**: The new Speak/Music/Transcribe split and HTDemucs/stem support expand production-ready audio workflows.

- **If you use managed runtimes (AMD NPU, OpenVINO)**: The fix in [#12266](https://github.com/unslothai/unsloth/pull/12266) prevents abandoned streams from blocking the model — expect faster request turnaround after client disconnects.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*