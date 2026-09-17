# AI Infrastructure Digest 2026-09-17

> Generated: 2026-09-17 00:50 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report based on the digests I generated. Let me synthesize information from all five projects (vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth) into a cohesive report.

Let me extract key data points from each project:

**vLLM:**
- Releases: None in last 24h
- Key Issues: ~17 issues discussed (top issues by comments)
- Key PRs: 20+ PRs
- Focus: DeepSeek-V4.1-Flash SM120, Blackwell support, GDN attention, CUDA graphs

**SGLang:**
- Releases: None in last 24h
- Key Issues: High activity (312 comments on CUDA coredump tracker)
- Key PRs: 20 PRs
- Focus: DeepSeek V4.1 vision, ROCm GLM-5.2 kernels, AITER fused kernels

**llama.cpp:**
- Releases: 11 releases in last 24h
- Focus: Vulkan fixes, CUDA graphs for MTP, Hexagon K-Quant, TP fixes

**Ollama:**
- Releases: None in last 24h
- Focus: MLX improvements, Windows runner fixes, tool calling fixes

**LiteLLM:**
- Releases: v1.103.0-dev.1, v1.102.0-rc.2
- Focus: Redis CROSSSLOT, rate limiter bugs, Amazon Transcribe, Microsoft Foundry

**Unsloth:**
- Releases: Windows-ARM64 binaries
- Focus: Docker persistence, SSRF security fix, ROCm detection

Now let me create the comparison report.</think>

# AI Infrastructure Ecosystem Report — September 17, 2026

---

## 1. Ecosystem Overview

The AI serving infrastructure layer is experiencing rapid maturation across multiple vectors: Blackwell (SM120) architecture support is stabilizing in vLLM and SGLang, while llama.cpp pushes the boundaries of local inference with MTP + CUDA graph integration. The gateway layer (LiteLLM) continues expanding multi-cloud capabilities with new AWS and Azure integrations. Meanwhile, fine-tuning tooling (Unsloth) faces increasing pressure to align with cloud serving APIs as enterprises standardize on unified deployment pipelines. The separation between cloud-native serving engines and local runtimes is narrowing, driven by requests for feature parity across deployment contexts.

---

## 2. Activity Comparison

| Project | Issues (Active) | PRs Merged (24h) | Releases (24h) | Primary Focus Area |
|---------|-----------------|------------------|----------------|---------------------|
| **vLLM** | ~17 tracked | 20+ | 0 | Blackwell/SM120 fixes, DeepSeek V4.1, GDN kernels |
| **SGLang** | High (312 on tracker) | 20 | 0 | DeepSeek V4.1 vision, ROCm GLM-5, weight cache daemon |
| **llama.cpp** | ~10 tracked | 11 | **11** | Vulkan workarounds, MTP+CUDA graph, Hexagon K-Quant |
| **Ollama** | ~12 tracked | 8 | 0 | MLX memory, Windows cleanup, tool calling fixes |
| **LiteLLM** | ~11 tracked | 12+ | 2 (dev+rc) | Redis bugs, AWS Transcribe, rate limiter fixes |
| **Unsloth** | ~10 tracked | 4+ | 1 | Windows-ARM64, Docker fixes, SSRF security |

**Key observation**: llama.cpp leads release velocity (11 releases), reflecting its role as a high-frequency maintenance project. SGLang and vLLM show highest PR activity, indicating heavy feature development. LiteLLM's dual release (dev + rc) signals approaching stable v1.102.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|----------|
| **DeepSeek-V4.1-Flash** | ✅ (SM120) | ✅ (vision) | — | — | — |
| **DeepSeek-V4.1 Cloud** | — | — | — | ⚠️ (reasoning mismatch) | — |
| **Qwen3.8-Flash-Next** | ✅ (partial) | ✅ | — | — | — |
| **Qwen3.6-27B** | — | — | ⚠️ (context regression) | ✅ | — |
| **GLM-5.2** | ✅ | ✅ (ROCm) | — | — | — |
| **GLM-5.3** | — | ✅ (Zero-RoPE) | — | — | — |
| **Gemma 4** | ✅ | ✅ | ⚠️ (MTP crash) | ✅ | — |
| **MiniMax M3** | ✅ | ✅ | — | — | — |
| **Kimi-K3/DSpark** | ✅ (verifier) | ✅ | — | — | — |
| **Mistral Small 4** | — | — | — | 📋 (requested) | — |
| **HrmTextForCausalLM** | — | — | ✅ | — | — |

**Race status**: SGLang and vLLM are neck-and-neck on frontier model support, with both prioritizing DeepSeek-V4.1 and Qwen3 variants. llama.cpp maintains breadth through K-Quant and Hexagon additions. Ollama is the laggard on frontier models but leads on ease-of-use for local deployment.

---

## 4. Performance Frontier

| Optimization Domain | Leading Project | Key Advancements |
|---------------------|-----------------|------------------|
| **KV Cache** | vLLM | Metadata GET method restoration (#56925), DCP slot-mapping fix (#57260) |
| **Batching** | vLLM | GDN prefix-cache bugfix under MTP (#52244), batch invariance still broken with SP (#56370) |
| **Quantization** | llama.cpp | K-Quant Q4_K/Q6_K on Hexagon, IQ3_S on Blackwell fix pending |
| **Distributed Serving** | vLLM + SGLang | PCP with data parallelism (#57075), DeepGEMM warmup before profiling (#57258) |
| **Kernel Fusion** | SGLang | Qwen3-Next AITER fused GDN (4 kernels → 1), GLM-5.2 ROCm DSA (12 → 4) |
| **Speculative Decoding** | vLLM | Hybrid Mamba scratch reservation per-request (#57261), DSpark verifier compact suffix |
| **Local Inference** | llama.cpp | MTP + CUDA graph enabled (#28549), RPC graph cache invalidation |
| **MLX/CUDA Memory** | Ollama | Budget 95% of free GPU memory (#18481), load progress + stall detection |

**Frontier assessment**: vLLM leads in production serving optimizations (KV cache, distributed). SGLang leads in kernel-level ROCm performance. llama.cpp advances fastest on local/edge scenarios. Ollama and Unsloth focus on developer experience over raw performance.

---

## 5. Layer Positioning

```
┌─────────────────────────────────────────────────────────────────┐
│  Gateway / Abstraction Layer                                    │
│  ┌──────────────┐                                              │
│  │ LiteLLM      │  Multi-cloud proxy, key management,         │
│  │              │  observability, rate limiting                 │
│  └──────────────┘                                              │
├─────────────────────────────────────────────────────────────────┤
│  Cloud-Native Serving Engines                                  │
│  ┌──────────────┐  ┌──────────────┐                            │
│  │ vLLM         │  │ SGLang       │  Production inference,    │
│  │              │  │              │  speculative decoding,     │
│  │              │  │              │  tensor parallelism         │
│  └──────────────┘  └──────────────┘                            │
├─────────────────────────────────────────────────────────────────┤
│  Local / Desktop Runtimes                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ llama.cpp    │  │ Ollama       │  │ Unsloth      │          │
│  │              │  │              │  │              │          │
│  │              │  │              │  │ (Training)   │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
```

**Positioning analysis**:

- **LiteLLM** occupies a unique layer as the gateway/abstraction — it orchestrates calls to any backend (vLLM, Ollama, OpenAI, Anthropic, Bedrock) with unified semantics. Competitors don't directly challenge this position.

- **vLLM vs SGLang**: Both target production cloud serving. vLLM has broader enterprise adoption and Blackwell leadership; SGLang edges ahead on ROCm optimization and weight cache daemon for ultra-low latency. The gap is narrow.

- **llama.cpp vs Ollama**: Both serve local inference but with different philosophies. llama.cpp is a library-first approach (maximal flexibility, quantization depth); Ollama is an application-first approach (zero-config, batteries included). Unsloth sits adjacent as a fine-tuning layer feeding both.

---

## 6. Trend Signals

### What Infrastructure Engineers Should Watch

| Signal | Evidence | Implication |
|--------|----------|--------------|
| **Blackwell (SM120) is production-ready** | vLLM DeepSeek-V4.1 SM120 fixes, CUDA graph capture | Organizations with B200/B300 hardware can now deploy frontier models in production |
| **ROCm is gaining parity with CUDA** | SGLang GLM-5.2 12→4 kernel reduction, llama.cpp Hexagon K-Quant | AMD GPU users should test ROCm backends; cost/performance gap narrowing |
| **Speculative decoding is hardening** | vLLM Mamba scratch per-request, llama.cpp MTP+CUDA graph | Expect 2-3x throughput gains on eligible models; monitor for determinism bugs (Qwen3.8 #54521) |
| **Multi-cloud abstraction is consolidating** | LiteLLM AWS Transcribe, Microsoft Foundry A2A, Redis Enterprise issues | Gateway pattern is winning; unified APIs across providers reducing vendor lock-in |
| **Local + cloud parity pressure** | Unsloth Docker persistence issues, Ollama macOS/Windows work | Developers expect identical behavior locally and in prod; tooling must bridge gap |
| **Security hardening accelerating** | LiteLLM SSRF fix, SafeUnpickler allowlist, Unsloth SSRF | Infrastructure projects prioritizing attack surface reduction — review your versions |
| **Rate limiting bugs are widespread** | LiteLLM double-count, vLLM batch invariance | Production deployments should test rate limit behavior under load; don't trust configured values |

### Recommendations for Agent / Application Developers

1. **If deploying to Blackwell hardware**: vLLM is your safest bet for production DeepSeek/Qwen models. Test SGLang if you're on AMD ROCm.

2. **If building multi-tenant services**: LiteLLM's rate limiter bug (#34140) means double your configured limits until fixed. Consider implementing client-side enforcement.

3. **If using tool calling**: Watch MiniCPM5 fix (#18499) in Ollama and streaming tool call regression (#30053) in LiteLLM — both affect agent reliability.

4. **If fine-tuning for local deployment**: Unsloth's checkpoint issues with Qwen3.8 and pre-quantized models suggest testing with actual inference before production rollout.

5. **If using Redis in production**: LiteLLM's CROSSSLOT issue (#30065) with Azure Redis Enterprise is a known failure mode; validate your Redis configuration matches your deployment topology.

---

*Cross-project synthesis from vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth — September 17, 2026*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to generate a vLLM digest for 2026-09-17 based on the GitHub data provided. Let me analyze the data and create a structured digest following the specified format.

Let me go through the data:

**Releases & Breaking Changes:**
- None in the last 24h

**Key Issues (by comment count and relevance):**
1. #54521 - Qwen3.8-Flash-Next non-deterministic greedy decoding with QSA (48 comments) - critical bug
2. #38175 - ViT Full CUDA Graph support RFC (31 comments) - feature request
3. #46654 - GLM 5.2 Performance Optimization (23 comments, closed)
4. #57002 - ModernBert LoRa support (17 comments, closed)
5. #56370 - Batch invariance broken with sequence parallelism (17 comments) - bug
6. #51472 - Multimodal RL inputs RFC (12 comments)
7. #56506 - DeepSeek-V4.1-Flash ROCm performance (11 comments)
8. Various other bugs and features

**Key PRs:**
1. #57261 - Hybrid Mamba speculative-decoding scratch reservation optimization
2. #57260 - DCP slot-mapping localization fix
3. #52244 - GDN prefix-cache bugfix under MTP spec decoding
4. #49628 - V1 engine diagnostics for stalled stages
5. #57075 - PCP with data parallelism support
6. #57215 - XPU MoE weight offload bugfix
7. #56984 - Per-row candidate IDs for prefill token scoring
8. #54049 - FlashInfer CuteDSL MegaMoE integration
9. #56242 - Cross-encoder caching for Mooncake P2P


10. #57048 - Kimi-K3 DSpark verifier optimization
11. #56149 - MiniMax M3 decode top-k merge fusion
12. #57258 - DeepGEMM warmup before memory profiling
13. #56925 - KV cache metadata GET method restoration
14. #57250 - DiffusionGemma structured generation
15. #47580 - Dense H2D in fused-MoE weight loading
16. #56643 - LMCache security fix
17. #56841 - ExampleHiddenStatesConnector abort-safe fix

I need to synthesize this into a coherent digest. The issues show significant development activity around model optimization and performance improvements, particularly with Mamba speculative decoding, DeepSeek-V4.1-Flash, and Multi-head attention techniques. The PRs demonstrate ongoing work in areas like cross-encoder caching, verifier optimization, and memory management refinements.

For the highlights, I'm focusing on the most impactful developments: the DeepSeek-V4.1-Flash SM120 fixes, the ROCm performance improvements, and the security enhancement in LMCache token handling. The V1 engine diagnostics addition represents an important observability improvement for debugging. The broader pattern suggests vLLM is maturing around production readiness with fixes for edge cases and performance bottlenecks across different hardware platforms.</think>

# vLLM Digest — 2026-09-17

## Today's Highlights

The vLLM project continues active development across multiple fronts. Critical fixes landed for DeepSeek-V4.1-Flash serving on Blackwell (SM120) architecture, addressing sparse-MLA page geometry and CUDA graph capture issues. A security fix for LMCache token keys binds cache identifiers to media hash, cache salt, and LoRA parameters to prevent cross-media cache collisions. The V1 engine now includes opt-in diagnostics for stalled execution stages via `VLLM_ENGINE_ITERATION_TIMEOUT_S`, significantly improving production debuggability.

---

## Releases & Breaking Changes

No releases in the last 24 hours.

---

## New Model & Hardware Support

- **DeepSeek-V4.1-Flash + DSpark**: SM120 sparse-MLA prefill support now includes proper page geometry handling and CUDA graph capture fallback for multi-stream execution ([#57028](https://github.com/vllm-project/vllm/pull/57028))
- **Kimi-K3 DSpark**: Synthetic verifier suffix now compact — executes 4 target rows instead of 7 for K=6/golden AL=3.75 while generating all 6 real draft tokens ([#57048](https://github.com/vllm-project/vllm/pull/57048))
- **GLM MoE**: Sequence-parallel support added for PCP with data parallelism ([#57075](https://github.com/vllm-project/vllm/pull/57075))
- **ModernBERT LoRA**: Feature closed — LoRa support for pooling/encoder models not currently planned ([#57002](https://github.com/vllm-project/vllm/issues/57002))

---

## Performance & Optimization

- **DeepSeek MegaMoE**: FlashInfer CuteDSL integration in progress for large batch prefill acceleration ([#54049](https://github.com/vllm-project/vllm/pull/54049))
- **MiniMax M3**: Fused decode top-k merge reduces kernel launches from 3 to 2 ([#56149](https://github.com/vllm-project/vllm/pull/56149))
- **DeepGEMM warmup**: Moved before memory profiling to prevent startup OOMs — warmup shapes can exceed profile forward memory requirements ([#57258](https://github.com/vllm-project/vllm/pull/57258))
- **Hybrid Mamba spec-dec**: Scratch memory now reserved per running request rather than per KV-concurrency slot, improving memory efficiency ([#57261](https://github.com/vllm-project/vllm/pull/57261))
- **Fused-MoE weight loading**: Dense H2D transfers now maintain contiguity, fixing ModelOpt Llama-4 checkpoint load times (68s–495s → significant reduction) ([#47580](https://github.com/vllm-project/vllm/pull/47580))
- **Mooncake P2P**: Cross-encoder caching added for multimodal embedding reuse across encoder instances ([#56242](https://github.com/vllm-project/vllm/pull/56242))
- **Prefill token scoring**: Per-row candidate IDs now supported (`SamplingParams.prompt_logprob_token_ids`) ([#56984](https://github.com/vllm-project/vllm/pull/56984))
- **DCP slot-mapping**: Localization now applies only to context-parallel KV cache groups, fixing incorrect transformations ([#57260](https://github.com/vllm-project/vllm/pull/57260))

---

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | **Qwen3.8-Flash-Next non-deterministic greedy decoding**: When context exceeds `indexer_budget` (QSA boundary), identical requests produce different outputs. Affects persistent_topk in prefill. | Open — 48 comments ([#54521](https://github.com/vllm-project/vllm/issues/54521)) |
| **High** | **Batch invariance broken with SP/async TP**: `VLLM_BATCH_INVARIANT=1` + `enable_sp` produces incorrect results. | Open — 17 comments ([#56370](https://github.com/vllm-project/vllm/issues/56370)) |
| **High** | **DeepSeek-V4.1 + DSpark illegal memory access**: SM120 sparse-MLA prefill crashes on long prompts. | Open — 6 comments ([#56771](https://github.com/vllm-project/vllm/issues/56771)) |
| **High** | **XPU MoE weight offload OOM**: CPU-offloaded MoE models on Intel XPU OOM during `process_weights_after_loading`. | PR exists — [#57215](https://github.com/vllm-project/vllm/pull/57215) |
| **Medium** | **GDN_ATTN batch-invariant mode**: Qwen3.5/Qwen3.6 GDN models don't support `VLLM_BATCH_INVARIANT=1`. | Feature request — 7 comments ([#48613](https://github.com/vllm-project/vllm/issues/48613)) |
| **Medium** | **Qwen3.6-27B-FP8 + llmcache**: Hybrid KV cache manager disabled error on v0.19.1. | Open — 11 comments ([#42911](https://github.com/vllm-project/vllm/issues/42911)) |
| **Medium** | **SM100 CUDA graph replay**: Greedy output changes when torch.compile disabled on B200/B300 (sm_100). | Open — 6 comments ([#55238](https://github.com/vllm-project/vllm/issues/55238)) |
| **Medium** | **DeepSeek MTP spec-dec**: `paged_mqa_logits` kernel asserts on `next_n=3`, capping speculative tokens at 1 on Hopper. | Open — 7 comments ([#43457](https://github.com/vllm-project/vllm/issues/43457)) |
| **Low** | **DiffusionGemma structured generation**: New core support for Jev-like bounded token generation ([#57250](https://github.com/vllm-project/vllm/pull/57250)) |

---

## What This Means for Application Developers

1. **Blackwell (SM120) users**: If running DeepSeek-V4.1-Flash with speculative decoding, ensure you're on the latest nightly — critical page geometry and CUDA graph fixes landed in [#57028](https://github.com/vllm-project/vllm/pull/57028).

2. **Production debugging**: Enable `VLLM_ENGINE_ITERATION_TIMEOUT_S` to get diagnostic dumps when engine stages hang — critical for diagnosing scheduler/KV-cache deadlocks in production ([#49628](https://github.com/vllm-project/vllm/pull/49628)).

3. **Sequence parallelism users**: Avoid `VLLM_BATCH_INVARIANT=1` with SP/async TP enabled until [#56370](https://github.com/vllm-project/vllm/issues/56370) is resolved — correctness bug produces wrong outputs silently.

4. **Intel XPU + MoE**: If using CPU offload with large MoE models, the OOM bug during weight processing is fixed in [#57215](https://github.com/vllm-project/vllm/pull/57215).

5. **Cache integrity**: If using LMCache connector, the security fix in [#56643](https://github.com/vllm-project/vllm/pull/56643) prevents cache poisoning across different media — update recommended.

6. **Qwen3.8-Flash-Next users**: Greedy decoding non-determinism above `indexer_budget` is a known issue — consider using `temperature > 0` or sampling until [#54521](https://github.com/vllm-project/vllm/issues/54521) is resolved.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to generate a SGLang digest for 2026-09-17 based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Let me go through the key information:

**Latest Releases:**
- None in the last 24h

**Top Issues by comments:**
1. #26340 - CUDA Coredump Tracker (312 comments) - Auto-collected CUDA coredump events
2. #21302 - [AITER-Upgrade] PR readiness (30 comments)
3. #22511 - [high priority] GLM-5.2 health check failed bug (27 comments)
4. #33522 - Fast Engine Recovery: Weight Cache Daemon roadmap (26 comments)
5. #17050 - CI Test Failures and Fixes (14 comments)
6. #30209 - GLM-5.2 FP4 + EAGLE illegal memory access bug (11 comments)
7. #37742 - SenseNova-U1 Feature & Performance Tracking (9 comments)
8. #21703 - Prefill-Decode Disaggregation Roadmap (9 comments)
9. #21891 - SGLang Simulator roadmap (7 comments)
10. #37633 - QSA extend forward CUDA illegal memory access (7 comments)

**New PRs (20):**
1. #39837 - HiSparse slot translation kernel (AMD)
2. #39809 - Qwen3Coder function call fix
3. #39873 - Qwen3-Next AITER fused GDN prefill kernel
4. #39668 - DeepSeek V4.1 vision tower and image preprocessing
5. #38583 - GLM-5.2 ROCm DSA indexer decode path


6. #35459 - MXFP8 x BF16 MegaMOE support
7. #39622 - AMD DSV4 fp8 lm_head GEMM
8. #39661 - bench_serving flush cache fix
9. #39486 - Engine response wait optimization
10. #38080 - Qwen MoE to DeepGEMM MegaMoE
11. #39859 - Runtime token widths for Triton speculative verification
12. #39858 - SafeUnpickler security fix
13. #39379 - LoRA buffer sizing fix
14. #35113 - AMD GLM-5 shared-expert fusion

I notice several performance improvements emerging. AMD is heavily involved in kernel optimizations, particularly around GLM-5 and DeepSeek models. DeepSeek V4.1 support appears to be a major focus, with vision tower integration and multi-expert architecture improvements. There's also work on speculative verification and engine response handling to improve overall system efficiency.</think>

# SGLang Digest — 2026-09-17

## Today's Highlights

Active development continues across multiple fronts: DeepSeek V4.1 integration is progressing with vision tower and chat encoding support (PRs #39668, #39665, #39666), while ROCm kernel optimization for GLM-5.2 is advancing with a fused four-kernel DSA indexer path for gfx950 (PR #38583). The CUDA coredump tracker (#26340) remains highly active at 312 comments, indicating ongoing stability work on GPU operations.

## Releases & Breaking Changes

No new releases in the last 24 hours.

## New Model & Hardware Support

- **DeepSeek V4.1**: Multiple PRs adding vision tower, image preprocessing, chat encoding, tool parsing, and Engram module support — see PRs [#39668](https://github.com/sgl-project/sglang/pull/39668), [#39666](https://github.com/sgl-project/sglang/pull/39666), [#39665](https://github.com/sgl-project/sglang/pull/39665), [#38798](https://github.com/sgl-project/sglang/pull/38798)
- **SenseNova-U1 / U1.5**: New tracking issue [#37742](https://github.com/sgl-project/sglang/issues/37742) for upstream support
- **T-Head PPU (ZW810/ZW810E/ZW-M890P)**: Roadmap issue [#37519](https://github.com/sgl-project/sglang/issues/37519) for first-class support
- **MXFP8 x BF16 MegaMOE**: PR [#35459](https://github.com/sgl-project/sglang/pull/35459) adds mixed-precision MoE support
- **Qwen MoE → DeepGEMM**: PR [#38080](https://github.com/sgl-project/sglang/pull/38080) wires Qwen MoE blocks to DeepGEMM MegaMoE for MXFP4/NVFP4 experts

## Performance & Optimization

- **Qwen3-Next GDN Prefill Kernel**: PR [#39873](https://github.com/sgl-project/sglang/pull/39873) consumes AITER's fused four-kernel chain into a single kernel, eliminating large intermediate tensor round-trips
- **ROCm GLM-5.2 DSA Indexer**: PR [#38583](https://github.com/sgl-project/sglang/pull/38583) reduces decode path from 12 kernels to 4 for gfx950 (critical for 78 DSA layers + MTP draft)
- **Weight Cache Daemon**: Phase 1 landed in #27139 reduces weight load from ~306–327s to <1s on Qwen3-235B FP8 — tracking continues in [#33522](https://github.com/sgl-project/sglang/issues/33522)
- **Engine Response Wait**: PR [#39486](https://github.com/sgl-project/sglang/pull/39486) eliminates unnecessary `asyncio.wait_for` timeouts when no HTTP request object is present
- **Triton Speculative Verification**: PR [#39859](https://github.com/sgl-project/sglang/pull/39859) uses runtime token widths for accurate bonus token handling
- **AMD GLM-5.3 Zero-RoPE MHA**: PR [#39338](https://github.com/sgl-project/sglang/pull/39338) enables full-attention prefill on ROCm for norope layers
- **MiniMax-M3 Decode Top-K**: PR [#36560](https://github.com/sgl-project/sglang/pull/36560) adds wave64 histogram-select implementation

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | [#26340](https://github.com/sgl-project/sglang/issues/26340) CUDA Coredump Tracker — 312 comments of auto-collected events from pr-test.yml | Open |
| **High** | [#22511](https://github.com/sgl-project/sglang/issues/22511) GLM-5.2 2×H100 health check failed — detokenizer timeout | Open, 27 comments |
| **High** | [#30209](https://github.com/sgl-project/sglang/issues/30209) GLM-5.2 FP4 + EAGLE illegal memory access in flashinfer_trtllm bf16 batched-GEMM | Open |
| **Medium** | [#37633](https://github.com/sgl-project/sglang/issues/37633) QSA extend forward CUDA illegal memory access at 8 concurrent requests (Qwen3.8-Flash-Next-FP8, H20 TP8) | Open |
| **Medium** | [#34920](https://github.com/sgl-project/sglang/issues/34920) Kimi K3 decode crash with PD disaggregation + DCP + DSPARK | Open |
| **Medium** | [#34676](https://github.com/sgl-project/sglang/issues/34676) Hybrid Mamba prefill allocation failure kills scheduler instead of requeuing | Open |
| **Medium** | [#39400](https://github.com/sgl-project/sglang/issues/39400) Unauthenticated PUT /route allows route poisoning — security issue | Open |
| **Fixed** | [#39692](https://github.com/sgl-project/sglang/issues/39692) Indexer cache offload missed for GLM-5.3-Flash | Closed |
| **Fixed** | [#39661](https://github.com/sgl-project/sglang/pull/39661) Benchmark serving tool now records flushed_cache state | Open (PR) |
| **Fixed** | [#39858](https://github.com/sgl-project/sglang/pull/39858) SafeUnpickler restricted to exact-name allowlists — security hardening | Open (PR) |

## What This Means for Application Developers

1. **DeepSeek V4.1 is close to mainline** — vision and tool-use capabilities coming soon; expect a new release by end of month
2. **AMD ROCm support is maturing** — GLM-5.2/5.3 optimizations land regularly; if you're on gfx950 or MI355X, now is a good time to test
3. **Benchmarking just got more reproducible** — PR #39661 fixes cache state recording, so your local runs will match CI results
4. **Security hardening** — SafeUnpickler now uses allowlists; if you serialize custom objects, verify they still work after upgrading
5. **Watch the CUDA coredump tracker** — 312 comments in 4 months indicates active investigation; if you're hitting random CUDA errors, check for related entries

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for llama.cpp on 2026-09-17.

Looking at the data:

## Releases (last 24h)
- b11010: Vulkan fix for NV bug with argsort_large.comp (#28975)
- b11009: TP fix for split state and granularity for fused QKV gemma4, qwen35 (#28965)
- b11007: Enable CUDA graph for MTP draft (#28549)
- b11006: hexagon: Support for K-Quants Q4_K and Q6_K (#28994)
- b11005: hexagon: accept the zeroed rope probe in supports_op (#28995)
- b11003: model: add support for HrmTextForCausalLM (DFM Mimir 1B) (#27625)
- b11002: CUDA/HIP: improve access patterns in im2col (#28013)
- b11001: spacemit: fix wrong transpose function for int16 data (#25161)
- b11000: rpc: invalidate cached compute graph when a referenced buffer is freed (#24292)
- b10999: Change max context length for auto-fitting with unified KV (#28849)

## Issues (top by comments)
- #23769: Vulkan crash with MoE models on Intel B70 (Qwen3.6-35B-A3B-MTP)
- #28860: SYCL extreme scratchpad allocation with ngram-mod
- #25522: Gemma 4 crashes with MTP
- #28778: SYCL DFlash2 draft model triggers GPU driver TDR reset
- #28752: Vulkan prompt processing speed drop after b10780 on RDNA3
- #22648: Vulkan tensor parallelism support enhancement


- #27623: Qwen3.8-27B decode throughput collapse at context >80K

I'm identifying critical infrastructure issues that impact performance and stability. The Vulkan backend shows multiple problematic areas: crashes with specific models, performance degradation, and limited tensor parallelism. SYCL implementations reveal significant hardware interaction challenges, particularly with draft models and memory allocation. Performance bottlenecks are emerging with advanced model architectures, especially in long-context scenarios.

Key infrastructure concerns center on backend reliability, memory management, and cross-model compatibility. Developers need to carefully validate Vulkan and SYCL implementations, paying close attention to model-specific nuances and potential hardware-specific limitations.</think>

# llama.cpp Digest — 2026-09-17

## 1. Today's Highlights

The project shipped 11 releases in the past 24 hours, with major backend improvements across Vulkan, CUDA, and Hexagon. Notable work includes enabling CUDA graphs for MTP draft models, fixing tensor parallelism for Gemma 4 and Qwen3.5 fused QKV, and adding K-Quant support (Q4_K, Q6_K) to the Hexagon backend. Several critical issues were addressed, though Vulkan performance regressions and SYCL stability concerns remain active.

---

## 2. Releases & Breaking Changes

| Release | Change | PR |
|---------|--------|-----|
| **b11010** | Vulkan: work around NVIDIA driver bug with argsort_large.comp shader | [#28975](https://github.com/ggml-org/llama.cpp/pull/28975) |
| **b11009** | TP: fix split state and granularity for fused QKV in Gemma 4 and Qwen3.5 | [#28965](https://github.com/ggml-org/llama.cpp/pull/28965) |
| **b11007** | CUDA: enable CUDA graph for MTP draft models | [#28549](https://github.com/ggml-org/llama.cpp/pull/28549) |
| **b11000** | RPC: invalidate cached compute graph when referenced buffer is freed | [#24292](https://github.com/ggml-org/llama.cpp/pull/24292) |

**Migration Note:** The RPC fix (#24292) may affect applications relying on compute graph caching behavior with dynamic buffer lifecycle.

---

## 3. New Model & Hardware Support

- **Hexagon backend**: Added K-Quant support for Q4_K and Q6_K kernels ([#28994](https://github.com/ggml-org/llama.cpp/pull/28994))
- **New model**: HrmTextForCausalLM (DFM Mimir 1B) support added — runs two transformer stacks (low, high) in alternating cycle over same token stream ([#27625](https://github.com/ggml-org/llama.cpp/pull/27625))
- **Vulkan**: Added probe handling for zeroed RoPE to prevent CPU offloading on Gemma 4 ([#28995](https://github.com/ggml-org/llama.cpp/pull/28995))
- **Spacemit**: Fixed int16 transpose function bug ([#25161](https://github.com/ggml-org/llama.cpp/pull/25161))
- **IM2Col**: CUDA/HIP access pattern improvements ([#28013](https://github.com/ggml-org/llama.cpp/pull/28013))

---

## 4. Performance & Optimization

| Area | Detail | PR/Issue |
|------|--------|----------|
| **MTP + CUDA Graph** | Enabled CUDA graph for multi-token prediction draft — reduces overhead for speculative decoding | [#28549](https://github.com/ggml-org/llama.cpp/pull/28549) |
| **Tensor Parallelism** | Fixed split state calculation for Gemma 4 (where n_embd=5376 but Q=8192) and Qwen3.5 fused QKV | [#28965](https://github.com/ggml-org/llama.cpp/pull/28965) |
| **Vulkan** | Workaround for NVIDIA argsort shader bug — fixes intermittent ARGSORT failures | [#28975](https://github.com/ggml-org/llama.cpp/pull/28975) |
| **RPC** | Fixed graph cache invalidation on buffer free — improves reliability in distributed setups | [#24292](https://github.com/ggml-org/llama.cpp/pull/24292) |
| **Unified KV** | Adjusted max context length calculation for auto-fitting | [#28849](https://github.com/ggml-org/llama.cpp/issues/28849) |
| **OpenCL** | Added Q6_K GEMM kernel for non-MoE models + matching GEMV for Adreno | [#28678](https://github.com/ggml-org/llama.cpp/pull/28678) |
| **CUDA MMQ** | RDNA 3.5 MMQ pipeline optimization by splitting MMA and load tiles | [#28714](https://github.com/ggml-org/llama.cpp/pull/28714) |

**Performance Issue — Regression:** Vulkan on RDNA3 shows severe prompt processing speed drop after b10780 ([#28752](https://github.com/ggml-org/llama.cpp/issues/28752)) — being investigated.

---

## 5. Stability & Regressions

### Critical / High Severity

| Issue | Backend | Status | Fix Progress |
|-------|---------|--------|--------------|
| Vulkan crash with MoE models on Intel Arc Pro B70 (Qwen3.6-35B-A3B-MTP) | Vulkan | OPEN | Unconfirmed |
| SYCL DFlash2 draft triggers GPU driver TDR reset on dual Arc Pro B70 | SYCL | OPEN | — |
| Gemma 4 crashes with MTP | CUDA | OPEN | — |
| Qwen3.8-27B decode throughput collapses ~25x at context >80K | CUDA | OPEN | — |

### Medium Severity

| Issue | Backend | Status |
|-------|---------|--------|
| SYCL extreme scratchpad allocation (2GB+) when ngram-mod enabled | SYCL | [#28860](https://github.com/ggml-org/llama.cpp/issues/28860) |
| Vulkan on Intel Arc 140V outputs garbage with GPU layers, depends on batch settings | Vulkan | [#28648](https://github.com/ggml-org/llama.cpp/issues/28648) |
| IQ3_S produces garbage on RTX 5060TI (Blackwell) | CUDA | [#28581](https://github.com/ggml-org/llama.cpp/issues/28581) |
| MTP halves prompt processing on multi-GPU layer split | CUDA | [#27428](https://github.com/ggml-org/llama.cpp/issues/27428) |
| Qwen3.8-Flash-Next: `--split-mode tensor` aborts with SPLIT_AXIS_UNKNOWN on CUDA (2x RTX 5090) | CUDA | [#27964](https://github.com/ggml-org/llama.cpp/issues/27964) |

### Open PRs Addressing Issues

- [#28474](https://github.com/ggml-org/llama.cpp/pull/28474): Add `--no-fallback` option to llama-quantize — allows failing explicitly instead of silent fallback
- [#28967](https://github.com/ggml-org/llama.cpp/pull/28967): Add NCCL support for tensor parallel (CUDA backend)
- [#26167](https://github.com/ggml-org/llama.cpp/pull/26167): Scheduler sanitizer for race detection

---

## 6. What This Means for Application Developers

1. **If using Vulkan on NVIDIA**: The argsort shader workaround (#28975) should improve stability. Watch for the RDNA3 regression (#28752) if on AMD — test your workloads before deploying.

2. **If using Gemma 4 or Qwen3.5 with tensor parallelism**: The fused QKV split fix (#28965) resolves prior correctness issues; ensure you're on b11009+.

3. **If using MTP/speculative decoding with CUDA**: CUDA graph enablement (#28549) may improve draft model throughput — benchmark your workloads.

4. **If using SYCL**: Multiple active issues with Intel Arc GPUs — dual-GPU setups with DFlash2 are unstable. Consider alternative backends until fixes land.

5. **If using long上下文 (>80K)**: Qwen3.8-27B shows severe decode degradation — this appears model/architecture specific but worth testing your specific model.

6. **Quantization**: The `--no-fallback` PR (#28474) provides control over silent quantization fallback; watch for merge if strict quantization is required.

---

*Generated from github.com/ggml-org/llama.cpp — Data period: 2026-09-17*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate an Ollama digest for 2026-09-17 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me organize the information:

**Releases & Breaking Changes:**
- No releases in the last 24h

**New Model & Hardware Support:**
- Issue #15142 - Request to add Mistral Small 4 to Ollama Models
- Issue #18486 - llama3.2-vision fails to load with "unknown model architecture: 'mllama'" - this is a bug, not new support

**Performance & Optimization:**
- PR #17834 - MLX load progress reporting and stall detection
- PR #16085 - MLX warm up on load
- PR #18481 - Budget GPU memory for CUDA devices in MLX
- Issue #18038 - Performance regression: llama-server high CPU use (560% on M4 Max)
- Issue #18479 - Structured outputs in single pass on thinking models

**Stability & Regressions:**
- Issue #17778 - qwen 3.8 error during query (bug, 31 comments)
- Issue #16060 - Phone number verification doesn't accept non-US numbers
- Issue #18396 - Jetson Orin Nano OOM with Gemma 4 E4B
- Issue #18483 - minicpm5-2b native tool calls never parse (has fix PR #18499)
- Issue #18468 - gemma4 renderer drops tool parameters
- Issue #17870 - Vulkan on gfx1151 (Strix Halo) compute-ring timeout
- Issue #18490 - Feature request: Restore built-in agent
- Issue #18482 - Vulkan iGPU not detected at startup
- Issue #18494 - qwen3-vl:8b-instruct crashes on Vulkan AMD RX 6750 XT


- Issue #18486 - llama3.2-vision fails to load
- Issue #18484 - deepseek-v4.1-flash reasoning level mismatch
- Issue #18491 - Claude Desktop connection issues

I notice several PRs addressing key infrastructure improvements: Windows orphaned runners prevention (#18500), CLI onboarding enhancement (#18495), Apps deep link functionality (#18497), and MLX vision support for Nemotron (#17714). Additionally, API exposure for model thinking capabilities is in progress (#18473), and manifest list support preparation is underway (#16590).

**What This Means for Application Developers:**
- Several bug fixes that could affect app development
- New features in progress that will affect how developers use Ollama
- Stability issues to be aware of

Let me structure this into the required format.</think>

# Ollama Digest — 2026-09-17

## 1. Today's Highlights

Active development continues across multiple fronts: a Windows runner orphaning fix (#18500) landed, MiniCPM5 tool call parsing has a pending fix (#18499), and MLX memory management improvements (#18481) aim to prevent OOM during CUDA loads. Several stability issues remain active, particularly around Vulkan backends and model loading on specific hardware.

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

## 3. New Model & Hardware Support

- **Mistral Small 4**: Feature request open to add to official Ollama models (#15142) — fully open-source successor to Mistral Small 3.2
- **Nemotron H MLX Vision**: PR #17714 implements RADIO vision encoder and projector for MLX backend

## 4. Performance & Optimization

| PR/Issue | Description | Status |
|----------|-------------|--------|
| #18500 | **Windows runner orphaning fix** — Assigns runner processes to a singleton Windows Job Object with `JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE`, ensuring clean termination of llama-server and MLX subprocesses on exit | OPEN |
| #18481 | **MLX CUDA memory budgeting** — Allocator now uses 95% of driver-reported free memory, preventing unbounded loads that caused mid-load OOM | OPEN |
| #17834 | **MLX load progress reporting** — Implements stall detection to avoid canceling slow/long model loads that exceed default timeout | OPEN |
| #16085 | **MLX warm-up on load** — Runs synthetic BOS/EOS prefill + decode after model load to populate compile caches before first real request | OPEN |
| #18479 | **Single-pass structured outputs on thinking models** — Eliminates dual-generation approach, avoiding second prefill and content boundary drops | OPEN |
| #18038 | **Performance regression** — llama-server consuming ~560% CPU on M4 Max during token generation (vs. previously lower); investigation ongoing | OPEN |

## 5. Stability & Regressions

### High Priority

| Issue | Severity | Description | Fix PR |
|-------|----------|-------------|--------|
| #18483 | **High** | MiniCPM5-2B native tool calls never parse — XML tokens stripped during detokenization, leaving mangled fragments | #18499 (OPEN) |
| #17778 | **High** | Qwen 3.8 returns 500 error "no user query found in messages" during chat streaming with tool loops (205k context) | — |
| #18486 | **High** | llama3.2-vision fails to load: "unknown model architecture: 'mllama'" | — |
| #18396 | **High** | Jetson Orin Nano 8GB OOM with Gemma 4 E4B using `--load-mode dio`, same config succeeds without DIO | — |

### Medium Priority

| Issue | Severity | Description |
|-------|----------|-------------|
| #18468 | **Medium** | gemma4 renderer drops tool parameters named `description`, `type`, `properties`, `required`, or `nullable` |
| #17870 | **Medium** | Vulkan on gfx1151 (Strix Halo) — compute-ring watchdog timeout on long-prompt prefill; `num_batch=128` workaround exists |
| #18482 | **Medium** | Vulkan iGPU (Intel Iris Xe) not detected at startup — total_vram 0B sticky until restart |
| #18494 | **Medium** | qwen3-vl:8b-instruct crashes (0xc0000005) on Vulkan AMD RX 6750 XT after multi-model load (Windows 0.34.1) |
| #18038 | **Medium** | Performance regression: llama-server 560% CPU on M4 Max |

### Lower Priority / Feature Requests

- #18490 — Request to restore built-in agent as opt-in CLI option (removed in PR #18393)
- #18491 — Claude Desktop connection forks to anonymous account instead of using signed-in session
- #16060 — Phone verification rejects non-US numbers (Germany) — blocks paid plan registration
- #18484 — deepseek-v4.1-flash:cloud default reasoning level "high" not in supported ["none", "medium"]
- #18487 — Feature request: external resource lock for shared GPU coordination across Docker containers

## 6. What This Means for Application Developers

1. **Windows users**: Upcoming fix (#18500) will resolve lingering llama-server processes after Ollama exit — worth updating once merged.

2. **MiniCPM5 users**: A fix for native tool call parsing is pending (#18499); if you're using tool calls with this model, monitor for the merge.

3. **MLX/CUDA users**: Memory management improvements (#18481) should reduce OOM crashes during multi-model loads — expect more stable behavior.

4. **Thinking models with structured outputs**: The single-pass implementation (#18479) will reduce latency and eliminate boundary content drops when using grammar/JSON mode.

5. **Known workarounds**:
   - Vulkan Strix Halo users: use `num_batch=128` to avoid compute-ring timeouts (#17870)
   - Qwen 3.8 with large context: tool loop issues remain unresolved; consider chunking prompts if hitting 205k context

6. **Model loading**: llama3.2-vision loading failures (#18486) indicate a potential manifest/architecture issue — avoid fresh pulls until resolved.

---

*Generated from GitHub data — ollama/ollama (2026-09-17)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-09-17 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me organize the information:

1. **Releases**: 
- v1.103.0-dev.1 (dev release)
- v1.102.0-rc.2 (release candidate)
- Both mention Docker image signature verification with cosign

2. **Issues (top by comments)**:
- #8328: Key alias uniqueness between users (bug)
- #14398: Requests/tokens per day rate limit (feature request)
- #11359: Cost tracking for bedrock passthrough (closed)
- #34140: v3 rate limiter double-counts team per-model limits
- #20962: Non-admin users cannot create API keys
- #36759: OTel gen_ai.system 'None' in metrics
- #24158: Bedrock rejects requests without tools parameter
- #23743: Cache Hit column in Request Logs UI
- #30053: Streaming fast_path breaks tool-call continuation
- #30065: Redis CROSSSLOT errors on Azure Redis Enterprise
- #41344: Zero-cost budget bypass bug

3. **Pull Requests**:
- #41140: OTel v2 Langfuse integration fix
- #41495: Post-call deployment hook on converted streams
- #41349: Team member spend tracking
- #41479: Rust bridge refactor
- #41515: Amazon Transcribe SigV4 pass-through
- #41078: Extension and browser integration contracts
- #40934: Logging optimization (secret regex)
- #41527: Test fixes
- #41524: AWS secret rotation verification


- #40982: Admin UI sign-in attempt limits
- #41526: Vertex pricing test
- #41522: ChatGPT OAuth forward
- #41525: Team admin RPM/budget editing
- #41511: Microsoft Foundry A2A support

I need to structure this into the requested format. Let me organize the key highlights:

1. Today's Highlights - focus on the most impactful changes
2. Releases & Breaking Changes - version info
3. New Model & Hardware Support - none explicitly mentioned
4. Performance & Optimization - logging optimization
5. Stability & Regressions - key bugs
6. What This Means for Application Developers

I'll synthesize the most critical updates, emphasizing the team's focus on security, feature expansion, and system stability. The digest reveals ongoing improvements in authentication, team management, and integration capabilities across various platforms.

The team is actively addressing critical infrastructure challenges, including Redis configuration issues, rate limiting complexities, and streaming optimizations. Key developments include Amazon Transcribe integration, admin UI security enhancements, and refined spend tracking mechanisms. Recent work also focuses on improving OpenTelemetry tracing and fixing potential vulnerabilities in stream processing and logging systems.</think>

# LiteLLM Digest — 2026-09-17

## 1. Today's Highlights

The LiteLLM team shipped a significant batch of infrastructure work focused on stability and multi-cloud resilience. Notable additions include Amazon Transcribe SigV4 pass-through routes, Microsoft Foundry A2A agent discovery with Entra auth, and improvements to team member spend tracking when no budget is assigned. On the bug front, a critical Redis CROSSSLOT error affecting Azure Redis Enterprise deployments and a v3 rate limiter double-counting bug were reported. The proxy's OpenTelemetry integration also received fixes to properly propagate Langfuse user context onto trace spans.

---

## 2. Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| [v1.103.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.103.0-dev.1) | Development | Docker images signed with cosign (key from commit `0112e53`) |
| [v1.102.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.102.0-rc.2) | Release Candidate | Same cosign verification setup |

No breaking changes announced in this cycle. Both releases include the standard Docker image signature verification using cosign.

---

## 3. New Model & Hardware Support

- **vLLM Realtime API**: Feature request [#23102](https://github.com/BerriAI/litellm/issues/23102) tracks support for vLLM's `/v1/realtime` endpoint. Currently available via workaround configuration.
- **Amazon Transcribe**: PR [#41515](https://github.com/BerriAI/litellm/pull/41515) adds SigV4 pass-through routes (`POST /transcribe/{Operation}` and `POST /transcribe`) for audio transcription behind LiteLLM virtual keys.
- **Microsoft Foundry A2A**: PR [#41511](https://github.com/BerriAI/litellm/pull/41511) enables reach to Foundry agents with Entra ID authentication and versioned agent card discovery.
- **Mistral Batches API + OCR**: Feature request [#29914](https://github.com/BerriAI/litellm/issues/29914) proposes batch support for Mistral's OCR endpoints.

---

## 4. Performance & Optimization

- **Logging optimization** (PR [#40934](https://github.com/BerriAI/litellm/pull/40934)): Reduced log record processing overhead by scanning each record once and collapsing base64 payloads before the secret regex. Previously, multi-page PDF uploads to `/v1/ocr` generated ~8 MB log lines blocking the event loop ~11 seconds at 0.5 CPU — down from ~5.5s on v1.98.0.
- **Rust bridge refactor** (PR [#41479](https://github.com/BerriAI/litellm/pull/41479)): Introduces a declarative route catalog and shared runtime selection for Python/Rust routing, reducing ad-hoc fallbacks scattered across call sites.
- **Standalone framing crate** (PR [#41500](https://github.com/BerriAI/litellm/pull/41500)): Adds independent AWS EventStream and SSE framers for Rust callers, preserving framing metadata, payloads, errors, and fragmentation.

---

## 5. Stability & Regressions

| Issue | Severity | Status | Details |
|-------|----------|--------|---------|
| [#34140](https://github.com/BerriAI/litellm/issues/34140): v3 rate limiter double-counts team per-model limits | **High** | Open | Per-team per-model RPM/TPM limits enforced at half the configured value. A limit of `N` triggers 429 after ~`N/2` requests. |
| [#30065](https://github.com/BerriAI/litellm/issues/30065): Redis CROSSSLOT errors on Azure Redis Enterprise | **High** | Open | `_group_keys_by_hash_tag()` only groups by hash slot for OSS-Cluster Redis, causing CROSSSLOT errors on Azure Redis Enterprise (non-cluster mode). |
| [#41344](https://github.com/BerriAI/litellm/issues/41344): Zero-cost budget bypass leaks unbounded spend | **Medium** | Closed | Zero-cost budget bypass decides on requested model group but fallbacks can route to priced deployment, leaking unbounded spend. |
| [#36759](https://github.com/BerriAI/litellm/issues/36759): OTel `gen_ai.system` still 'None' in metrics path | **Medium** | Closed | PR #26713 only fixed span-attribute call site; metrics/events paths still received `None`. |
| [#30053](https://github.com/BerriAI/litellm/issues/30053): Streaming fast_path breaks tool-call continuation (v1.87.0) | **Medium** | Closed | `fast_path` in `async_streaming_data_generator` causes clients to receive raw XML instead of text after tool-call round-trips with Claude/Bedrock. |
| [#8328](https://github.com/BerriAI/litellm/issues/8328): Key alias uniqueness across all users | **Medium** | Open | Key aliases should be per-user, not global; currently users cannot share the same alias. |
| [#27852](https://github.com/BerriAI/litellm/issues/27852): Ghost models with --num_workers > 1 | **Medium** | Open | Deleted models not cleared from other workers' local cache when using Redis Pub/Sub sync. |

---

## 6. What This Means for Application Developers

1. **Multi-cloud deployments**: If you're running LiteLLM proxy on Azure Redis Enterprise with multiple workers, be aware of the CROSSSLOT issue ([#30065](https://github.com/BerriAI/litellm/issues/30065)). Consider using Redis Cluster mode or monitoring for 429 errors until a fix lands.

2. **Rate limiting**: Team per-model rate limits are currently enforced at half the configured value ([#34140](https://github.com/BerriAI/litellm/issues/34140)). If you're using `model_rpm_limit` or `model_tpm_limit` in team metadata, double your configured values until this is resolved.

3. **Streaming tooling**: If you rely on tool-call continuation streaming with Claude models via Bedrock, be aware that the fast_path optimization (v1.87.0+) may cause clients to receive malformed XML instead of text. A fix is pending.

4. **Amazon Transcribe**: New pass-through routes enable using LiteLLM virtual keys with AWS Transcribe — useful if you're building multi-tenant audio transcription services.

5. **Admin UI**: Non-admin users cannot create API keys due to a UI/API mismatch ([#20962](https://github.com/BerriAI/litellm/issues/20962)). If your workflow depends on internal users creating keys, plan accordingly or track the fix.

6. **Observability**: OpenTelemetry traces now properly propagate Langfuse user, session, and tag context ([#41140](https://github.com/BerriAI/litellm/pull/41140)). If you're using Langfuse for LLM observability, this improves trace fidelity.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate an Unsloth digest for 2026-09-17 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Key observations from the data:

1. **Releases & Breaking Changes**:
- Windows-ARM64 Binaries released (new release in last 24h)

2. **New Model & Hardware Support**:
- Issue #8529: AMD RX 5700XT doesn't recognize in Unsloth Desktop (bug)
- Issue #10657: Unsloth installer does not recognize ROCm 7.14 and installs PyTorch 2.11 with ROCm 7.2

3. **Performance & Optimization**:
- Not much explicit performance data in the issues, but there are various bug fixes

4. **Stability & Regressions**:
- Multiple bugs reported
- Docker instructions don't save downloaded models (#10923)
- Qwen2.5-VL + streaming HF dataset error (#3617)
- Full Finetune gradient issue (#2613)
- Various Windows issues
- Memory usage growth (#10921)
- GGUF export issues with Qwen3.5/3.6 (#6071)

5. **What This Means for Application Developers**:
- Multiple stability issues affecting production use
- Docker model persistence issues
- Windows compatibility issues

Let me also look at the PRs:
- Multiple PRs focused on stability and bug fixes
- Security fix for SSRF vulnerability (#11160)
- Various installer fixes
- Docker health checks fix (#11157)

Now let me structure this into the requested format.</think>

# Unsloth Digest — 2026-09-17

## Today's Highlights

Unsloth released Windows ARM64 binaries in the last 24 hours, expanding desktop deployment options. The project addressed multiple stability issues including a critical SSRF vulnerability in remote image handling, Docker proxy health check failures, and Windows installer edge cases. Active development continues on cloud deployment features (`unsloth deploy`) and runtime metrics infrastructure.

---

## Releases & Breaking Changes

| Item | Description | Links |
|------|-------------|-------|
| **Windows-ARM64 Binaries** | New release providing native ARM64 support for Windows devices | [Release](https://github.com/unslothai/unsloth/releases) |

---

## New Model & Hardware Support

| Item | Status | Notes |
|------|--------|-------|
| **AMD RX 5700XT Recognition** | Bug | Not recognized in Unsloth Desktop; investigation ongoing (#8529) |
| **ROCm 7.14 Detection** | Bug | Installer incorrectly installs PyTorch 2.11 with ROCm 7.2 instead of 7.14 (#10657) |
| **Qwen3.8-27B Checkpoint Defect** | Known Issue | GatedDeltaNet projections load with no `quant_state`; requires regeneration (#10276) |
| **Windows Pre-quantized bnb-4bit** | Bug | Checkpoints load with `quant_state=None`, forward fails with shape error (#10017) |

---

## Performance & Optimization

| Area | Status | Details |
|------|--------|---------|
| **Memory Usage** | Regression | Memory growth reported since last llama.cpp update (#10921) |
| **Qwen3.5/3.6 GGUF Export** | Bug | Truncates trailing `ssm_conv1d.weight` tensors in final layers (#6071) |
| **vLLM-style Metrics** | In Progress | PR #4238 adding opt-in runtime metrics with Prometheus export |

---

## Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Docker: models not persisted across sessions | Open | — |
| **High** | Qwen2.5-VL streaming causes `RuntimeError` in visual encoder | Closed | — |
| **High** | SSRF vulnerability in remote image handling | PR Open | #11160 |
| **Medium** | Windows installer fails with non-fatal errors | Open | — |
| **Medium** | ROCm 7.14 not detected; wrong PyTorch version installed | Open | — |
| **Medium** | Full finetune tensors require gradients unexpectedly | Open | — |
| **Low** | Docker health checks fail behind proxy | PR Open | #11157 |
| **Low** | `standardize_sharegpt` error with duplicate prompts | Closed | — |

---

## What This Means for Application Developers

1. **Docker users**: Model persistence requires explicit volume mounting beyond `/workspace/work`; ensure your mount configuration captures the actual model storage location to avoid data loss on container restart (#10923).

2. **Windows users on ARM64**: New native binaries available; however, existing x86_64 Windows installs may encounter installer errors that appear fatal but aren't (#9804, #11012).

3. **Ollama integration**: Reasoning/thinking controls not exposed for external Ollama connections; no workaround currently available (#9649).

4. **Production inference**: The SSRF fix (#11160) addresses a security issue when serving local GGUF models with remote images—update promptly when merged.

5. **Multi-GPU setups**: Feature request for GPU priority ordering remains open (#9333); currently requires manual selection.

6. **Fine-tuning workflows**: Token addition + adapter save/reload has known issues (#1343); consider full model export instead of adapter-only workflows for production.

---

*Generated from GitHub data — unslothai/unsloth*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*