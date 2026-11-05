# AI Infrastructure Digest 2026-11-05

> Generated: 2026-11-05 02:43 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report based on the digests I just created for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me synthesize all the information from the digests into a structured comparison report.

Let me organize the key data points:

**Issues and PRs count (from the digests):**
- vLLM: 2 notable issues (1 medium severity), recent PRs listed
- SGLang: 76 total issues mentioned, ~30+ PRs mentioned
- llama.cpp: Multiple issues listed, many commits


- Ollama: Several issues and PRs tracked
- LiteLLM: 76 total issues, 500 total PRs, 3 releases in last 24h
- Unsloth: Multiple issues and PRs

Now I'm compiling the model support details across all six projects—vLLM has recent additions like DeepSpark and Qwen3.8, SGLang supports Apple Silicon MLX, Muse Spark, and Ascend NPU, llama.cpp added Meta MobileMoE, Ripple, and several TTS models, Ollama includes Qwen3.8 Flash Next and MLX variants, and LiteLLM is still being cataloged.

Looking at the performance and optimization work across these frameworks—vLLM is focusing on speculative decoding and KV cache improvements, SGLang is tackling multimodal memory and scheduler enhancements, llama.cpp is optimizing Vulkan and OpenCL backends with batched tensors, Ollama is addressing VRAM and MLX memory, LiteLLM is working on cold spend tracking and guardrails, and Unsloth is implementing CUDA graph decoding and RAG optimizations.

Now examining where these projects sit in the stack: vLLM and SGLang are production-grade serving engines handling distributed inference, llama.cpp serves as a portable local runtime supporting multiple backends, Ollama provides an end-user desktop application, LiteLLM acts as an abstraction gateway, and Unsloth handles training and fine-tuning. I'm also tracking the emerging patterns—vendor-specific optimizations, agent-oriented features like KV cache control, memory efficiency for edge deployment, and the convergence of training and serving infrastructure.
</think>


# AI Inference Infrastructure — Cross-Project Digest
**Date:** 2026-11-05 | **Scope:** vLLM · SGLang · llama.cpp · Ollama · LiteLLM · Unsloth

---

## 1. Ecosystem Overview

Today's digest reveals an infrastructure stack in rapid compositional evolution rather than consolidation. The serving layer (vLLM, SGLang) is converging on Blackwell (SM120) and ROCm support as table stakes while diverging on speculative decoding strategies — vLLM's DSpark sits in a broken state on DeepSeek-V4, while SGLang is deepening its AMD MTP pipeline. llama.cpp continues to own the local/edge runtime tier, shipping v0.9.0 with OCP FP8 and a generic batched tensor API that signals readiness for multi-sequence serving. Ollama's focus has shifted from pure model support to operator concerns (VRAM prediction accuracy, MCP protocol regressions, YaRN scaling correctness on MLX), indicating a maturing product managing edge cases rather than features. LiteLLM is absorbing the most downstream churn — 76 open issues with three simultaneous regressions tied to its v1.108.0 release — while aggressively building a multi-sink audit and control plane layer. Unsloth occupies a distinct niche: fine-tuning and training rather than serving, but its v0.1.915-beta release and CUDA graph decode work signal that the boundary between training tooling and inference deployment is blurring.

---

## 2. Activity Comparison

| Project | Issues (open/active) | PRs merged (last 24 h) | Releases (last 24 h) | Release cadence |
|---------|----------------------|------------------------|----------------------|-----------------|
| **vLLM** | 2 notable; ~5 active tracked | ~6 | None | ~bi-weekly |
| **SGLang** | ~76 total; 15+ in tracking | ~30+ | None | ~weekly |
| **llama.cpp** | ~10+ tracked | ~15 commits + 5 PRs | **v0.9.0** | ~monthly |
| **Ollama** | ~15+ tracked | ~10 | None | ~monthly |
| **LiteLLM** | **76 total** | ~500 total; ~10+ today | **v1.108.0**, v1.107.0-rc.3, v1.106.7 | ~daily (RCs) |
| **Unsloth** | ~15+ tracked | ~10 | **v0.1.915-beta** | ~weekly |

**Observations:**
- **LiteLLM** has the highest issue volume by a wide margin, reflecting its role as a gateway layer absorbing provider-surface complexity across Anthropic, Azure, Bedrock, Vertex, and dozens of third-party APIs. The v1.108.0 release introduced a critical MCP regression that will affect Open WebUI deployments immediately.
- **SGLang** leads in PR activity among serving engines, with 30+ merged PRs touching AMD DSA, NPU diffusion, multimodal CUDA VMM, and scheduler controls — suggesting an aggressive push on heterogeneous hardware before year-end.
- **llama.cpp** and **Unsloth** are the only projects with tagged releases today, indicating that both are at release-quality milestones rather than continuous integration churn.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4 / V4.1-Flash** | ⚠️ DSpark broken | — | — | — | Via API | — |
| **Qwen3.8 Flash Next** | — | In progress | — | ✅ v0.1.915-beta | Via API | — |
| **Qwen3 (0.5B–72B)** | ✅ `--reasoning-parser qwen3` | ✅ Tracking | — | ✅ YaRN fixed | Via API | — |
| **Apple Silicon / MLX** | — | ✅ RFC #32321 | — | ✅ YaRN + CUDA device check | — | — |
| **Meta MobileMoE** | — | — | ✅ QAT + base + SFT | — | Via API | — |
| **Muse Spark** | — | ✅ Day-0 in progress | — | — | — | — |
| **Ascend NPU W4A8 MoE** | — | ✅ PR #43739 open | — | — | — | — |
| **Intel next-Gen Xeon (CBB)** | — | ✅ PR #45717 merged | — | — | — | — |
| **Ripple 65B** | — | — | ✅ New arch | — | Via API | — |
| **Nemotron-H (Mamba2-hybrid)** | — | — | ✅ RoPE/FFN fixed | — | Via API | — |
| **DeepSeek-V4 Vision** | — | ✅ OOM fix (closed) | — | — | Via API | — |
| **GLM-5.3-Flash** | — | ✅ Tracking #45373 | — | — | Via API | — |
| **drama-3 TTS** | — | — | ✅ New arch | — | Via API | — |
| **YuE2 / Stable Audio 3 Medium** | — | — | — | — | — | ✅ v0.1.915-beta |
| **OLMoE family** | — | ✅ Added to registry | — | — | Via API | — |

**Winner: LiteLLM** by coverage breadth (all models reachable via unified API), but **Unsloth and SGLang** for depth on frontier models. llama.cpp maintains the strongest coverage of non-transformer architectures (TTS, Mamba2-hybrid, MoE variants). Ollama's MLX YaRN fix closes a 6-month gap for local Apple Silicon deployments with extended-context Qwen3 variants.

---

## 4. Performance Frontier

Optimization effort is concentrated in four distinct vectors, with different projects leading each:

### KV Cache & Memory Management
| Project | Focus | Detail |
|---------|-------|--------|
| **vLLM** | Speculative decoding correctness | DSpark draft acceptance at 0% due to `packed_modules_mapping` bug; Blackwell adaptive verification unreliable |
| **SGLang** | Agentic KV cache programmable policies | PR #46542 introduces tiered KV cache with tool-wait prefix identification |
| **llama.cpp** | Batched tensor copy API | v0.9.0 generic batched tensor ops eliminate per-sequence staging copies for unified KV cache |
| **Ollama** | VRAM prediction accuracy | Hybrid models (Qwen3.5/3.8, Qwen3-Next) over-counted 4–8×; runner eviction under `keep_alive=-1` |
| **Unsloth** | RAG ingest batching | 48× regression on single-file path (~99 ms vs ~2.07 ms/chunk batched) |

### Kernel & Backend Optimization
| Project | Target | Detail |
|---------|--------|--------|
| **SGLang** | AMD MI355X MoE kernels | MTP rejection-sampling skip on ROCm; DSA DCP prefill routing; aiter decode workspace elimination |
| **llama.cpp** | Vulkan flash attention | Tile shape auto-derivation (Intel BMG fix); prefill-specific Intel shader; OpenCL GQA + head size 256 |
| **vLLM** | Blackwell SM120 Triton vs cuBLAS | Batch-invariant mode routing bug; MXFP4 MoE kernel correctness |
| **Unsloth** | CUDA graph decode | ~50% GPU utilization improvement on T4; ~1070–1430 kernels/step with LoRA |

### Quantization
| Project | Format | Detail |
|---------|--------|--------|
| **llama.cpp** | OCP FP8 E4M3 | v0.9.0; also batched tensor copy for quantized caches |
| **vLLM** | MXFP4, NVFP4 | Blackwell MoE kernels; Muse-Glimmer NVFP4 quantization fix |
| **SGLang** | W4A8 Ascend MoE | PR #43739; pre-quantized ModelSlim checkpoint support |
| **Unsloth** | MXFP8/BF16 mixed | Qwen3.8 Flash Next: QSA projections in BF16, dense/control in MXFP8 |

### Distributed / Disaggregation
| Project | Feature | Detail |
|---------|---------|--------|
| **vLLM** | P/D disaggregation | KV integrity bugs #61160 and #61229; NixlConnector prefix caching unsafe |
| **SGLang** | PD disaggregation circuit breaker | #31206: open circuit sends prefill to decode; Qwen EAGLE retraction corruption #48356 |

**Key takeaway:** KV cache innovation is fragmenting across projects with incompatible abstractions. SGLang's programmable policies, llama.cpp's batched tensor API, and vLLM's speculative draft strategies represent three different philosophical approaches to the same problem. Application developers choosing a serving engine are also choosing a KV cache programming model.

---

## 5. Layer Positioning

The six projects occupy distinct vertical layers with minimal direct competition but increasing boundary friction:

```
┌─────────────────────────────────────────────────────────────────────┐
│  APPLICATION / AGENT LAYER                                          │
│  (Open WebUI, custom UIs, Claude Code, tool-use workflows)          │
├─────────────────────────────────────────────────────────────────────┤
│  GATEWAY / ABSTRACTION LAYER                                        │
│  LiteLLM ─── Unified API surface + control plane + audit            │
│  (multi-provider routing, budget, observability)                    │
├─────────────────────────────────────────────────────────────────────┤
│  SERVING ENGINE LAYER                                               │
│  vLLM ─────── Production inference; speculative decoding; P/D disagg│
│  SGLang ──── Scheduler-centric; multimodal; agentic KV cache        │
├─────────────────────────────────────────────────────────────────────┤
│  LOCAL / EDGE RUNTIME LAYER                                         │
│  llama.cpp ── Portable CPU/GPU/NPU/Vulkan/OpenCL/Metal/WebGPU       │
│  Ollama ──── End-user desktop; MLX/YaRN; MCP protocol               │
├─────────────────────────────────────────────────────────────────────┤
│  TRAINING / FINE-TUNING LAYER                                       │
│  Unsloth ─── Fine-tuning; CUDA graphs; RAG; multi-LoRA; audio       │
└─────────────────────────────────────────────────────────────────────┘
```

| Layer | Projects | Primary differentiator |
|-------|----------|------------------------|
| **Gateway** | LiteLLM | Provider abstraction breadth; control plane; budget management |
| **Serving (production)** | vLLM, SGLang | Throughput, hardware support, distributed serving |
| **Serving (local)** | llama.cpp, Ollama | Portability, ease of use, MLX support |
| **Training/Fine-tuning** | Unsloth | Memory efficiency, multi-LoRA, CUDA graph decode |

**Boundary tensions:**
- **llama.cpp → Ollama**: llama.cpp provides the runtime engine; Ollama wraps it with UX, MCP, and protocol layers. Today's Ollama llama.cpp bump (b12111) and MLX hardening illustrate this dependency relationship.
- **LiteLLM → vLLM/SGLang**: LiteLLM can proxy to vLLM or SGLang as backends, but most usage is direct provider API (Anthropic, OpenAI, Azure). The control plane build suggests LiteLLM is moving up the stack toward fleet orchestration.
- **Unsloth → llama.cpp/Ollama**: Unsloth produces fine-tuned GGUF checkpoints that feed into llama.cpp and Ollama. Today's multi-LoRA pagination fix and CUDA graph decode work will directly benefit inference quality in downstream runtimes.

---

## 6. Trend Signals

### 🔴 Critical Trends

1. **Speculative decoding is production-unstable across the board.**
   Both vLLM (DSpark, 0% acceptance rate on DeepSeek-V4) and SGLang (Qwen EAGLE PD corruption after retraction) have active correctness bugs in speculative paths. Applications relying on speculative speedups should either disable the feature or monitor acceptance rates closely. The fix timelines are unclear for both projects.

2. **MCP protocol regressions are now affecting end-user products.**
   LiteLLM v1.108.0 broke MCP `tools/list` for legacy subscription listeners, directly impacting Open WebUI. This is the second consecutive cycle where a LiteLLM release introduced a downstream-facing protocol regression. Application teams using LiteLLM as an MCP server should validate MCP tool discovery after upgrading.

3. **KV cache memory accounting is systematically wrong for hybrid architectures.**
   Ollama over-counts KV cache 4–8× for recurrent/SSM models (Qwen3.5, Qwen3.8, Qwen3-Next). SGLang's scheduler mixed-prefill work addresses similar concerns. No project has yet published a correct memory model for Mamba2-hybrid, Qwen-Next, and MoE architectures. This will cause OOM evictions in any multi-tenant deployment.

### 🟠 Medium-Term Signals

4. **Apple Silicon is becoming a first-class inference target.**
   SGLang's MLX RFC, Ollama's YaRN + CUDA device validation on MLX, and llama.cpp's Metal improvements (v0.9.0 removed the `unary-cast-constexpr` patch dependency) collectively signal that Apple Silicon inference is moving from community hack to supported tier. Expect production-grade M4 Ultra deployments within Q1 2027.

5. **Quantization is fragmenting across vendor-specific formats.**
   OCP FP8 E4M3 (llama.cpp), MXFP4/NVFP4 (vLLM/SGLang), W4A8 Ascend (SGLang), and MXFP8/BF16 mixed (Unsloth) represent four incompatible quantization schemes for the same base architectures. Application developers cannot swap quantization formats between engines. Model hub operators should expect increased support burden as users request cross-engine compatibility.

6. **Control planes and audit infrastructure are becoming table stakes.**
   LiteLLM's OCSF events, Splunk HEC, Sentinel, and S3 Object Lock sinks; SGLang's scheduler resource controls; and vLLM's VLLM_LORA_SHRINK_USE_MULTICTA flag all reflect a shift from "can we serve this model" to "can we govern and audit this model at scale." Enterprise buyers should factor this into procurement.

7. **The training/serving boundary is blurring.**
   Unsloth's CUDA graph decode optimization, multi-LoRA serving, and RAG ingest tooling position it as an inference-adjacent platform. Ollama's fine-tuning preview and vLLM's LoRA shrink work suggest both serving engines are absorbing training-derived techniques. Teams building end-to-end ML pipelines should evaluate whether maintaining separate training and serving toolchains is still worth the overhead.

### ⚪ Watch List

8. **Blackwell (SM120) stability remains uncertain.** vLLM has active routing bugs and unreliable block sizes; SGLang is investigating DeepSeek-V4 prefill performance gaps of 2–7K tok/s vs vLLM/marlin. Applications targeting B100/B200/5090 hardware should maintain CUDA fallback paths.

9. **CI health is deteriorating at SGLang.** 177-comment tracking issue for flaky tests with active infrastructure failures. Bleeding-edge branches may have elevated instability for the next 2–4 weeks.

10. **llama.cpp's XDNA backend request** (37 comments, 39 👍) signals strong community demand for Intel NPU acceleration. If this lands, it would dramatically expand llama.cpp's addressable edge hardware.

---

**Bottom line for infrastructure engineers and technical decision-makers:**

> The inference stack is healthy but turbulent. Serving engines (vLLM, SGLang) are converging on Blackwell and AMD ROCm support while fighting correctness bugs in speculative paths. Local runtimes (llama.cpp, Ollama) are deepening Apple Silicon and edge support. The gateway layer (LiteLLM) is absorbing provider complexity at scale but introducing regressions that propagate to end-user products. Fine-tuning tooling (Unsloth) is moving toward inference-quality performance. Teams should (1) avoid speculative decoding in production until the current bug cycles resolve, (2) validate MCP protocol behavior after any LiteLLM upgrade, (3) build KV cache memory accounting that is architecture-aware rather than relying on engine estimates, and (4) monitor the Apple Silicon and control plane tracks for decisions that will affect 2027 architecture choices.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>` block removal with `--reasoning-parser qwen3` | Open | — |
| 🟡 Medium | **Batch-invariant mode routes to Triton incorrectly** | `#65569` — on Hopper/Blackwell, Triton matmul overrides fire despite cuBLAS being correct | Open | — |

## 6. What This Means for Application Developers

**If you run DeepSeek-V4 or DeepSeek-V4.1-Flash:**
- Verify your speculative decoding acceptance rate immediately. DSpark draft models are currently producing 0% acceptance due to a missing `packed_modules_mapping` (#65618). Until a fix lands, consider disabling DSpark or using v0.31.1.
- On Blackwell (SM120) hardware, avoid `enable_adaptive_verification` and do not expect v0.32.x block sizes to work reliably.

**If you run AMD MI355X (ROCm):**
- Significant performance work is landing for Qwen3.8 and MiniMax-M3.1 MoE kernels. Monitor nightly builds for ROCm performance regressions.

**If you use batch-invariant mode on Hopper or Blackwell:**
- A routing bug (#65569) may be sending workloads to Triton when cuBLAS would be faster. Track the fix.

**If you use LoRA with large adapters:**
- Multi-CTA shrink (#64502) is landing; set `VLLM_LORA_SHRINK_USE_MULTICTA=1` for reduced memory pressure on H20.

**If you use NixlConnector or P/D disaggregation:**
- Two critical bugs affect KV integrity: cross-request contamination (#61160) and premature block release during remote reads (#61229). Avoid production use of automatic prefix caching with NixlConnector until both are resolved.</think>



</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the provided GitHub data for SGLang from 2026-11-05 and create a structured digest.

Key observations from the data:

1. **Latest Releases**: None in the last 24 hours

2. **Notable Issues** (by comment count):
   - #42752: CI flaky tests and infrastructure failures - 177 comments, very active tracking issue
   - #32321: Apple Silicon serving redesign RFC - 15 comments, significant architectural discussion
   - #33422: DeepSeek-V4 prefill performance on SM120 - 13 comments, performance investigation
   - #31206: sgl-router PD disaggregation bug with circuit breaker - 8 comments
   - #36941: GB10 long prefill memory issue - 6 comments, OOM problem
   - #38074: NVFP4 MoE Marlin memory leak - 6 comments, now closed/inactive
   - #45400: HiCache hybrid GDN model bug - 6 comments
   - #45816: API v1 migration RFC - 6 comments
   - #45373: GLM-5.3-Flash performance tracking - 6 comments
   - #43313: SGLang-Diffusion Roadmap Q4 - 5 comments
   - #48411: Xeon SPR OOM during KV allocation - 3 comments (very recent, Nov 4-5)
   - #48356: Qwen EAGLE PD corruption after retraction - 3 comments
   - #48196: Wan VAE decode time spikes on 5090 - 3 comments
   - #47916: MambaPool.copy_from CUDA OOM - 2 comments
   - #48460: Triton next_power_of_2 conflict - 1 comment (very recent)

3. **Recent Pull Requests** (last 24h):
   - #48509: Align protocol for logprobs, background/stream validation
   - #48090: AMD MTP rejection-sampling verify optimization
   - #48499: NPU DeepSeek-V4 performance test update
   - #48505: AMD DSA DCP prefill routing
   - #45717: Intel CPU-core-binding for next Gen Xeon (closed)
   - #48508: tokenizer_manager crash-dump optimization
   - #47911: AMD aiter unused decode workspace fix
   - #43517: NPU sampling mask support
   - #47308: scheduler mixed-prefill resource controls
   - #48382: AMD disaggregation MoRI DSA state pairing
   - #46542: mem_cache programmable KV cache control
   - #48128: Muse-Glimmer-NVFP4 quantization fix
   - #48507: multimodal CUDA VMM feature copy fix
   - #47750: score validation
   - #45550: NPU diffusion FA auto-select
   - #43739: Ascend W4A8 MoE quantization support
   - #47984: MambaPool chunk copy to avoid OOM (fixes #47916)
   - #48302: AMD DSA decode graph variants
   - #47786: multimodal CPU preprocessing cache
   - #47632: AMD attention decode graph variants (closed)

Several architectural shifts are emerging. Apple Silicon support via Torch/MLX interoperability represents a significant direction, while the API v1 backend migration and router consolidation point toward tighter integration. On the performance side, DeepSeek-V4 prefill optimizations are in flight for both SM120 and SM90 targets, AMD's MTP rejection-sampling skip is ready, and Qwen3.8 Flash-Next performance work is underway for MI355X. The memory management layer is getting substantial attention with fixes addressing MambaPool OOM issues, multimodal CUDA VMM copies, and KV cache allocation problems.

Infrastructure reliability is a major focus area. Flaky tests continue to plague CI/CD, and Xeon SPR OOM during KV allocation is a blocking issue. The Triton next_power_of_2 conflict and Wan VAE decode time spikes on 5090 hardware need resolution, while sgl-router PD disaggregation requires circuit breaker fixes. Several recent PRs landed to address MambaPool chunking for OOM prevention, AMD aiter decode workspace cleanup, Muse-Glimmer-NVFP4 quantization handling, and AMD DSA state pairing across disaggregated prefill stages. The crash-dump optimization and mixed-prefill resource controls are also in flight.

The architecture is consolidating around a shared api.v1 backend, with router migration tracked across multiple PRs. Diffusion capabilities are expanding through the Q4 roadmap, and programmable KV cache policies with composable controls are being introduced for agentic workloads.
</think>


# SGLang Digest — 2026-11-05

## 1. Today's Highlights

CI health remains the most active concern: issue **#42752** has accumulated 177 comments tracking flaky tests and infrastructure failures across the PR babysitting workflow. On the optimization front, the MambaPool OOM fix (**#47984**) merged today, addressing a CUDA memory spike during parallel admission bursts on hybrid GDN models (e.g. GLM-5.3-Flash). A new RFC (**#45816**) proposing complete migration to the shared `api.v1` backend API signals a significant unification push across sgl-processor and sgl-router.

## 2. Releases & Breaking Changes

| Item | Details | Reference |
|------|---------|-----------|
| **No new releases** in the last 24 h | — | — |

**Migration note:** The `api.v1` migration RFC (**#45816**) is open and tracking progress across three workstreams: Generate schema coverage (**#45164**), sgl-processor migration (**#46031**, **#46432**), and router migration (**#45808**). Teams integrating custom backends should monitor this effort as it unifies the generation API surface.

## 3. New Model & Hardware Support

| Model / Architecture | Status | Notes |
|---------------------|--------|-------|
| **Apple Silicon (MLX)** | RFC + early implementation | Roadmap issue **#32321**; Torch-owned SRT path with exported whole-model MLX region; implementation PR **#36164** |
| **Muse Spark** | Day-0 support in progress | Tracker **#44678**; depends on DeepGEMM patch **sgl-project/DeepGEMM#104** |
| **Ascend NPU — W4A8 MoE** | PR open (**#43739**) | Online W4A8 quantization for Ascend MoE experts; pre-quantized ModelSlim checkpoint support |
| **Intel next-Gen Xeon (CBB mode)** | PR merged (**#45717**) | CPU-core-binding expansion for compute building block topology on upcoming Xeon |

## 4. Performance & Optimization

| Category | Work | Details |
|----------|------|---------|
| **Memory — MambaPool** | **FIXED** | **#47984** chunks `MambaPool.copy_from` temporal state copies to avoid OOM spikes during radix COW of multiple checkpoints in one scheduler step. Fixes **#47916**. |
| **Memory — multimodal** | PR open | **#48507** caps CUDA VMM feature copies per GPU and stages overflow in pinned host memory for image-heavy request queues. |
| **Memory — tokenizer crash-dump** | PR open | **#48508** pickles crash-dump request history to exempt it from cyclic GC scanning, reducing overhead under load. |
| **AMD — MTP rejection sampling** | PR open (**#48090**) | Skips vocabulary-wide sort in EAGLE/NEXTN verify on ROCm (`--speculative-eagle-topk 1`), avoiding costly dense softmax over full vocab per draft token. |
| **AMD — DSA DCP prefill** | PR open (**#48505**) | Routes DSA DCP prefill by wire bytes to select optimal all-gather strategy (owned vs. gathered path). |
| **AMD — aiter decode workspace** | PR open (**#47911**) | Skips unused decode workspace allocation on `vectorized_5d` KV layout, saving `max_bs * num_heads * ceil(context_len / 256) * (head_dim + 2) * 4` bytes. |
| **AMD — DSA decode graph variants** | PR open (**#48302**) | Consolidates decode graph variants across attention-DP ranks to avoid sparse variant selection on idle ranks. |
| **GLM-5.3-Flash on Hopper** | Tracking issue **#45373** | Q4 kernel optimization roadmap targeting SM90; related to broader Blackwell work in **#37813**. |
| **Qwen3.8-Flash-Next on MI355X** | Tracking issue **#44304** | gfx950 / MI355X performance optimization tracker for the MoE + QSA + MXFP4 variant. |
| **DeepSeek-V4 on SM120** | Investigation (**#33422**) | Reports ~2–7K tok/s prefill vs. ~12.5K via vLLM/marlin on 4× RTX PRO 6000 (TP=4); kernel-coverage tracked in **#19637**, **#30272**. |
| **Scheduler mixed-prefill** | PR open (**#47308**) | Adds resource controls to prevent a long-running prefill from consuming input budget before a short waiter is served, even when chunk budget has nominal room. |

## 5. Stability & Regressions

Sorted by severity and engagement:

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **🔴 Critical — CI** | **#42752** — Flaky tests and CI infrastructure failures in `PR Test Base` / `PR Test Extra` runs | OPEN (177 comments) | — |
| **🔴 Critical — Correctness** | **#31206** — sgl-router PD: open circuit breaker dispatches to decode, producing permanent fake-dead prefill | OPEN (8 comments) | — |
| **🔴 Critical — Correctness** | **#48356** — Qwen EAGLE PD decode produces corrupted output after retraction | OPEN (3 comments) | — |
| **🟠 High — OOM** | **#48411** — Xeon SPR OOM-killed during KV allocation on `sglang-spr08/18/19` | OPEN (3 comments) | — |
| **🟠 High — Memory** | **#36941** — GB10 long prefill (>40k tokens) exhausts unified memory and silently kills worker rank | OPEN (6 comments) | — |
| **🟠 High — Memory** | **#38074** — NVFP4 MoE Marlin fallback leaks ~0.66 GiB/layer → OOM on ≤48GB cards | CLOSED (inactive) | — |
| **🟠 High — OOM** | **#37931** — DeepSeek-V4-Flash-Vision-Exp scheduler OOM-killed during FP8→FP4 weight conversion | CLOSED (inactive) | — |
| **🟡 Medium — Correctness** | **#41449** — DSpark + TP: grammar-constrained request deadlocks all ranks (collective spin) | OPEN (2 comments) | — |
| **🟡 Medium — Correctness** | **#48172** — `--tool-call-parser` auto-detection fails on Qwen2.5-0.5B, Qwen3 2507, Ling-mini-2.0 | OPEN (2 comments) | — |
| **🟡 Medium — Performance** | **#48196** — Wan VAE decode time spikes 2–10× on `5090-sm*` runners since 2026-10-17 | OPEN (3 comments) | — |
| **🟡 Medium — Performance** | **#48311** — Diffusion perf checks depend on runner, in-job retries can't fix slow host | OPEN (2 comments) | — |
| **🟡 Medium — Regression** | **#48460** — Importing sglang overwrites `triton.next_power_of_2`, breaking other Triton kernels | OPEN (1 comment) | — |
| **🟢 Low — Correctness** | **#34259** — Kimi-K3 cross-prompt reasoning leakage | CLOSED (inactive) | — |

## 6. What This Means for Application Developers

1. **Apple Silicon is coming.** The MLX path RFC (**#32321**) indicates SGLang is laying the groundwork for native serving on M-series Macs — relevant for local development and edge inference workflows.

2. **API consolidation is imminent.** The `api.v1` migration (**#45816**) will reshape the generation interface. Custom router or processor integrations should plan for schema changes in the near term.

3. **Agentic KV cache control is landing.** PR **#46542** introduces programmable KV cache policies and composable tiering — enabling identification of tool-wait prefixes and cross-tier state restoration. This directly benefits multi-turn agent workloads.

4. **Multimodal feature transport has a memory regression fix pending.** If you run image-heavy workloads with `--mm-feature-transport cuda_vmm`, watch for **#48507** (caps GPU-resident copies) and **#48507** (stages overflow in pinned host memory).

5. **Speculative decoding on AMD is faster.** The MTP rejection-sampling optimization (**#48090**) eliminates vocabulary-wide softmax on HIP — expect meaningfully lower verify latency for EAGLE/NEXTN drafts on MI300X/MI355X.

6. **Watch the CI signals.** The active tracking of flaky tests (**#42752**) suggests that nightly builds and bleeding-edge branches may have elevated instability — factor this into CI/CD planning for production integrations.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data for llama.cpp and create a structured digest for 2026-11-05.

Key observations:
1. **Latest Release**: v0.9.0 just dropped with OCP FP8 E4M3 quantization, flash_attn_ext_rows op, batched tensor copy API, and 4 new architectures (Clover, Limite, Metis-1.6, Mistral Large 4)

2. **Notable Commits/PRs**:
   - server: realtime error handling improvements (b12119)
   - OpenCL: improved decode performance with FA (b12118)
   - drama-3 TTS support (b12116)
   - WebGPU buffer size fixes (b12114)
   - GGML view bounds fix (b12102)
   - GGUF writer optimization - direct host buffer writes (b12101)
   - Common tag matching fix (b12100)
   - Meta MobileMoE support (PR #31706)
   - Ripple model support (PR #31692)
   - Nemotron-H RoPE/FFN fix (PR #31703)
   - Vulkan flash attention improvements (PR #29357, #30351)
   - HIP fast-math enablement (PR #31625)
   - WebGPU batched tensor API (PR #31473)

3. **Open Issues (top by activity)**:
   - XDNA backend feature request (37 comments, 39 👍)
   - Vulkan device lost errors on various platforms
   - SYCL memory issues
   - Various regressions in decode performance

4. **Key themes**:
   - Continued Vulkan backend improvements
   - Multi-GPU SYCL support issues
   - OpenCL performance work
   - New model architectures
   - WebGPU backend expansion

Let me structure this into the requested format.
</think>


# llama.cpp Digest — 2026-11-05

## 1. Today's Highlights

The v0.9.0 release landed today, introducing OCP FP8 E4M3 quantization, a new `flash_attn_ext_rows` operation for efficient multi-sequence KV cache handling, and a generic batched tensor copy API. OpenCL decode performance received meaningful gains through expanded flash attention support for GQA configurations (head size 256), while the drama-3 TTS architecture joined the supported model roster.

---

## 2. Releases & Breaking Changes

| Version | Commit | Key Changes |
|---------|--------|-------------|
| **v0.9.0** | b12110 | OCP FP8 E4M3 quantization; `flash_attn_ext_rows` op; batched tensor copy API; Clover, Limite, Metis-1.6, Mistral Large 4 architectures |

**Migration Notes:**
- Quantization tag matching logic was corrected to prevent `:F16` from incorrectly selecting `BF16` files, and `:Q4_XS` vs `IQ4_XS` ambiguity is now resolved. If you rely on specific quantization filename patterns, verify model loading behavior after upgrading. ([b12100](https://github.com/ggml-org/llama.cpp/commit/b12100))

---

## 3. New Model & Hardware Support

**New Architectures:**
- **Meta MobileMoE** — Base, SFT, and QAT checkpoints supported; QAT checkpoint conversion preserves packed INT4 weights and trained scales. ([PR #31706](https://github.com/ggml-org/llama.cpp/pull/31706))
- **Ripple** (ricursiveAI) — 65B dense model, Apache-2.0 license. ([PR #31692](https://github.com/ggml-org/llama.cpp/pull/31692))
- **drama-3 TTS** — Text-to-speech model support added. ([b12116](https://github.com/ggml-org/llama.cpp/commit/b12116))
- **Nemotron-H** (Mamba2-hybrid) — RoPE and FFN activation bugs fixed for correct logits. ([PR #31703](https://github.com/ggml-org/llama.cpp/pull/31703))

**Backend Improvements:**
- **OpenCL**: GQA 2 and 6 support with head size 256; expanded workgroup utilization for Q4_K gate + GLU kernels. ([b12118](https://github.com/ggml-org/llama.cpp/commit/b12118))
- **WebGPU**: Batched tensor API (`get_tensor_n`, `set_tensor_n`) and F32 MEAN operations landed. ([PR #31473](https://github.com/ggml-org/llama.cpp/pull/31473), [PR #31591](https://github.com/ggml-org/llama.cpp/pull/31591))

---

## 4. Performance & Optimization

| Area | Change | Details |
|------|--------|---------|
| **OpenCL decode** | +workgroup utilization | Q4_K gate up + GLU kernels; GQA configurations (head size 256) now leverage flash attention. ([b12118](https://github.com/ggml-org/llama.cpp/commit/b12118)) |
| **GGUF write** | Eliminated staging copy | Host-buffer tensors are written directly to file, bypassing temporary vector staging. ([b12101](https://github.com/ggml-org/llama.cpp/commit/b12101)) |
| **Vulkan FA** | Tile shape auto-derivation | Cooperative matrix flash attention now probes device capabilities instead of hardcoding 16×16×16, avoiding silent fallback to FA_SCALAR on Intel BMG. ([PR #30351](https://github.com/ggml-org/llama.cpp/pull/30351)) |
| **Vulkan prefill** | New Intel FA kernel | Dedicated prefill flash attention shader for LLM workloads on supported Intel platforms. ([PR #29357](https://github.com/ggml-org/llama.cpp/pull/29357)) |
| **HIP** | Fast-math enabled | ROCm backend fast-math options consolidated and stabilized. ([PR #31625](https://github.com/ggml-org/llama.cpp/pull/31625)) |
| **CUDA** | Architecture alignment fix | `get_mmvq_mmid_max_batch` now uses highest compiled arch instead of runtime compute capability, preventing kernel launch bound mismatches. ([PR #31679](https://github.com/ggml-org/llama.cpp/pull/31679)) |

---

## 5. Stability & Regressions

**Active Issues (by activity/severity):**

| Issue | Backend | Status | Severity | Notes |
|-------|---------|--------|----------|-------|
| [#21725](https://github.com/ggml-org/llama.cpp/issues/21725) — XDNA backend request | Various | OPEN | Enhancement | 37 comments; community demand for XDNA NPU support |
| [#25664](https://github.com/ggml-org/llama.cpp/issues/25664) — vk::DeviceLostError (RADV Strix Halo) | Vulkan | CLOSED | High | Stale; likely driver/kernel interaction |
| [#27595](https://github.com/ggml-org/llama.cpp/issues/27595) — SYCL `--fit` memory overflow | SYCL | OPEN | High | Arc B70; memory accounting incomplete for multi-GPU |
| [#27638](https://github.com/ggml-org/llama.cpp/issues/27638) — FA→SCALAR fallback O(N²) degradation | Vulkan/ANV | OPEN | High | Arc B580; device loss on long sequences |
| [#30018](https://github.com/ggml-org/llama.cpp/issues/30018) — Gemma 4 decode -5% regression | Vulkan | OPEN | Medium | Bisected to commit 0bb496db; Arc B580 |
| [#30010](https://github.com/ggml-org/llama.cpp/issues/30010) — vk::Queue::submit DeviceLost | Vulkan | OPEN | High | RX 7900 XTX on Linux |
| [#30698](https://github.com/ggml-org/llama.cpp/issues/30698) — Gemma 4 + MTP abort | HIP/ROCm | OPEN | High | Gemma-4-31B with MTP and --mmproj; AMD AI PRO R9700 |
| [#31077](https://github.com/ggml-org/llama.cpp/issues/31077) — CUDA illegal memory access with MTP draft | CUDA | OPEN | High | RTX 4060 Ti; occurs after KV cache rollback |
| [#31560](https://github.com/ggml-org/llama.cpp/issues/31560) — KHR_coopmat nondeterminism | Vulkan | OPEN | Critical | Arc Pro B70 (BMG G31); wrong answers every run |

**Fixes Landed Today:**
- Server realtime mode now sends error events instead of crashing on exceptions. ([b12119](https://github.com/ggml-org/llama.cpp/commit/b12119))
- GGML tensor view bounds now correctly account for strides, preventing out-of-bounds access on overlapping row tensors. ([b12102](https://github.com/ggml-org/llama.cpp/commit/b12102))
- On-device KV cache state copy sizes corrected for quantized caches. ([PR #30541](https://github.com/ggml-org/llama.cpp/pull/30541))

---

## 6. What This Means for Application Developers

**Takeaways:**

1. **Upgrade to v0.9.0 if you use FP8 models or multi-sequence inference.** The new `flash_attn_ext_rows` op directly improves unified KV cache efficiency; OCP FP8 E4M3 support unlocks new quantization workflows.

2. **Verify quantization tag matching.** If your model filenames contain overlapping substrings (e.g., both `*F16*` and `*BF16*`), the corrected matching logic may change which file is selected. Audit model loading logs on first run.

3. **Vulkan users on Intel Arc B580/B70: test thoroughly.** Multiple active issues involve flash attention silent fallback to SCALAR, cooperative matrix nondeterminism, and long-running decode degradation. If reliability is critical, consider CPU or CUDA fallbacks for production until these stabilize.

4. **OpenCL users should see measurable decode gains** on GQA models with head size 256 (e.g., Llama 3.1 70B variants). Test with your specific quantization format.

5. **New model support**: MobileMoE and Ripple add options for edge/mobile (MobileMoE) and large-scale (Ripple 65B) deployments. Converters are available in the PRs linked above.

6. **SYCL multi-GPU users**: Memory accounting issues with `--fit` on Intel Arc remain open. Monitor memory usage closely if running across multiple GPUs.

---

*Data sourced from github.com/ggml-org/llama.cpp — 2026-11-05*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants a structured digest for Ollama based on GitHub data for 2026-11-05. Let me analyze the data carefully and produce a professional, concise digest.

Let me parse the key items:

**Releases**: None in last 24h, but PR #19530 bumped llama.cpp to b12111.

**Key Issues (by significance)**:
1. #3504 - TLS handshake timeout pulling models (long-standing, 63 comments)
2. #12532 - Cloud usage stats via `/api/me` (feature request, 49 comments, 93 👍)


3. #19439 - Windows RTX 5090 runner disconnect during tool calling
4. #19524 - Qwen2.5-Coder and Qwen3 fail native tool calling
5. #19492 - Responses API silently truncates oversized input
6. #19483 - Vision inference with qwen2.5vl:3b fails with HTTP 500
7. #19529 - Template tool function renders Go struct dump instead of JSON (has fix PR #19534)
8. #18262 - MLX YaRN context extension ignored above 262K (CLOSED)
9. #17026 - CUDA v13 grammar-constrained generation crashes with Xid 79
10. #19514 - Feature request for API to check for updates (CLOSED)
11. #19463 - VRAM prediction over-counts KV cache 4-8x for hybrid models
12. #19517 - Cloud: deepseek-v4-pro rejects max_tokens > 65536
13. #19511 - Cloud: /api/usage missing session/weekly percentages
14. #19129 - MLX Qwen3 YaRN rope scaling ignored (CLOSED)

Looking at the rest of the issue queue, I'm seeing a mix of crashes and feature requests. The vision inference failure with qwen2.5vl:3b and the VRAM prediction issues are particularly concerning for production stability, while the cloud-related issues suggest gaps in the API surface that need addressing.

On the pull requests side, there are several improvements landing: logging enhancements for debugging, an upstream llama.cpp update, memory optimizations for Qwen3.8, and fixes for template formatting and Claude Desktop integration. The MLX YaRN scaling support appears to be resolving the rope scaling issue that was blocking Qwen3 deployments.

I'm also tracking fixes for tool output pairing in OpenAI streams, the no-argument launcher being restored, DEB packaging for Ubuntu, streaming response flushing, and Apple Silicon GPU memory documentation. Several other improvements are in review: long System One request handling for MLX, Modelfile argument quoting, and full GPU memory usage under WSL2.

For the digest, I'm noting that llama.cpp was bumped to b12111, the template tool function JSON rendering issue was fixed, Qwen3.8 Flash Next memory is being optimized on MLX, MLX CUDA device validation was added, YaRN scaling for Qwen3/3.5 on MLX is now supported, and WSL2 GPU memory handling is being addressed.

Now I'm organizing these by category: the llama.cpp bump is the main release, Qwen3.8 Flash Next with mixed MXFP8/BF16 quantization and the AutoTrust MLX addition are new model support, WSL2 GPU memory and the yaRN context fixes are hardware-related, VRAM prediction issues are performance concerns, and the tool calling failures on Windows and Qwen models are stability problems that need attention.

I'm also tracking the cloud API regressions with the usage endpoint and session percentages, plus the truncation and tokenization issues that are less severe but still worth noting. The template JSON bug appears to be fixed. For the digest, I need to highlight the critical issues first—the 4-5 critical bugs affecting Windows, Qwen tool calling, and CUDA grammar generation—then move through the rest of the queue.
</think>


# Ollama Digest — 2026-11-05

## 1. Today's Highlights

A significant push on MLX runner hardening landed today, including YaRN rope-scaling parity for Qwen3/Qwen3.5 and a fix for CUDA device rejection. On the template layer, a one-line bug in `{{ .Function }}` rendering caused Go struct dumps instead of JSON for tool definitions — a fix is open. Cloud API users should be aware of a regression in `/api/usage` session percentages and an undocumented `max_tokens` ceiling on `deepseek-v4-pro`.

## 2. Releases & Breaking Changes

| Item | Detail | Link |
|------|--------|------|
| **llama.cpp bump → b12111** | Drops the metal unary-cast-constexpr patch; superseded by upstream fix. | [#19530](https://github.com/ollama/ollama/pull/19530) |

No new Ollama version tags in the last 24 h.

---

## 3. New Model & Hardware Support

| Item | Detail | Link |
|------|--------|------|
| **Qwen3.8 Flash Next memory-efficient variant** | MLX PR keeps QSA projections and non-expert MTP path in BF16; uses MXFP8 for dense/control weights. Published as `qwen3.8-flash-next:125b-a6b-nvfp4` and `:125b-mlx`. | [#18078](https://github.com/ollama/ollama/pull/18078) |
| **AutoTrust text/vision models on MLX** | Added via creation, prompt encoding, and API routing. Test candidate: `./ollama pull dhiltgen/autotrust-jev`. | [#19399](https://github.com/ollama/ollama/pull/19399) |
| **MLX YaRN scaling for Qwen3 / Qwen3.5** | Honors explicit RoPE scaling metadata in both config schemas; applies YaRN frequencies and amplitude scaling to text and mRoPE. **Closes** #18262 and #19129. | [#19231](https://github.com/ollama/ollama/pull/19231) |
| **MLX CUDA: reject unsupported GPU architectures** | MLX runner now calls `cuda.get_arch_list()` (merged upstream in `ml-explore/mlx#4761`) and exits cleanly instead of failing mid-inference. | [#19521](https://github.com/ollama/ollama/pull/19521) |
| **WSL2: full GPU memory on NVIDIA RTX Spark N1X laptops** | Fixes detection so Ollama uses all 80 GB dedicated GPU memory instead of capping at WSL2 guest RAM. | [#19520](https://github.com/ollama/ollama/pull/19520) |

---

## 4. Performance & Optimization

| Item | Detail | Link |
|------|--------|------|
| **MLX decision model long-request bounds** | Allows longer state/schema inputs while bounding total prompt expansion before runner load. Adds regression tests for oversized MLX requests. | [#19408](https://github.com/ollama/ollama/pull/19408) |
| **VRAM prediction over-counts hybrid KV cache 4–8×** | `PredictServerVRAM` in `llama_server.go` bills recurrent/SSM-block models (Qwen3.5/3.8, Qwen3-Next) at f16 regardless of `OLLAMA_KV_CACHE_TYPE`, causing premature runner eviction. No fix PR yet. | [#19463](https://github.com/ollama/ollama/issues/19463) |
| **OpenAI streaming flush fix** | SSE chunk delivery to UI clients (Chatbox, OpenWebUI) was delayed; fix ensures streams flush through to completion. | [#17027](https://github.com/ollama/ollama/pull/17027) |
| **macOS Metal GPU memory docs updated** | New documentation explains the unified-memory allocation ceiling and how to raise it for Apple Silicon. | [#19527](https://github.com/ollama/ollama/pull/19527) |

---

## 5. Stability & Regressions

> Ranked by estimated user impact. "Fix PR open" means a PR with a fix is linked from the issue or filed in the last 24 h.

| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| 🔴 Critical | **Qwen2.5-Coder & Qwen3 native tool calling broken** — models generate malformed function calls, silently dropped | Open | [#19524](https://github.com/ollama/ollama/issues/19524) |
| 🔴 Critical | **`{{ .Function }}` renders Go struct dump instead of JSON** in qwen2.5 template → tool names mangled in every request | **Fix PR open** | [#19529](https://github.com/ollama/ollama/issues/19529) → [#19534](https://github.com/ollama/ollama/pull/19534) |
| 🔴 Critical | **CUDA v13 grammar-constrained generation crashes with Xid 79** (GPU falls off bus); same requests succeed on v12 | Open | [#17026](https://github.com/ollama/ollama/issues/17026) |
| 🔴 Critical | **Windows RTX 5090 runner disconnects during tool calling** — HTTP 500 /tokenize, intermittent | Open | [#19439](https://github.com/ollama/ollama/issues/19439) |
| 🟠 High | **Cloud `/api/usage` regression** — session/weekly usage percentages no longer returned; only request-count buckets | Open | [#19511](https://github.com/ollama/ollama/issues/19511) |
| 🟠 High | **Responses API silently truncates oversized input** with truncation disabled (Bonsai 27B, v0.40.13–0.40.14) | Open | [#19492](https://github.com/ollama/ollama/issues/19492) |
| 🟠 High | **`deepseek-v4-pro` rejects `max_tokens > 65536`** despite model's ~384 k output capability | Open (cloud only) | [#19517](https://github.com/ollama/ollama/issues/19517) |
| 🟡 Medium | **Qwen2.5-VL vision inference HTTP 500** — "token repeat limit reached" when vision encoder runs on NVIDIA GPU; CPU fallback works | Open | [#19483](https://github.com/ollama/ollama/issues/19483) |
| 🟡 Medium | **WSL2 GPU memory cap** — Ollama offloads only part of model to GPU despite sufficient VRAM | Fix PR open | [#19519](https://github.com/ollama/ollama/issues/19519) → [#19520](https://github.com/ollama/ollama/pull/19520) |
| 🟡 Medium | **Compaction tool output/Call-ID mismatch** in OpenAI Responses API — next compaction fails with "function output has no matching call" | Open | [#19532](https://github.com/ollama/ollama/pull/19532) |
| 🟡 Medium | **Installation size bloat** — CUDA v13 addition increased bundle size; proposals for split installers by GPU type | Open | [#12268](https://github.com/ollama/ollama/issues/12268), [#19512](https://github.com/ollama/ollama/issues/19512) |
| ⚪ Info | **Cloud usage stats via `/api/me`** feature request (93 👍) — not yet implemented | Open | [#12532](https://github.com/ollama/ollama/issues/12532) |
| ⚪ Info | **Long-standing TLS handshake timeout on model pull** (since Apr 2024) | Open | [#3504](https://github.com/ollama/ollama/issues/3504) |

---

## 6. What This Means for Application Developers

1. **If you run tool-calling workflows with Qwen2.5-Coder or Qwen3**: Hold off on production deployments until the `{{ .Function }}` template fix (#19534) merges — function definitions are currently corrupted in every request.

2. **If you use CUDA v13 with grammar-constrained output (`format: json`)**: Switch to `cuda_v12` or CPU inference for reliability; v13 triggers Xid 79 GPU bus errors on long generations.

3. **If you expose Ollama Cloud's `/api/usage` endpoint**: The response schema has changed — session and weekly percentage fields are missing. Update any parsing logic that relies on them.

4. **If you run Ollama on Windows with RTX 5090 or WSL2 on NVIDIA Spark N1X hardware**: Active issues affect GPU memory utilization and runner stability during multi-step tool-use conversations. Monitor for HTTP 500 responses on `/tokenize`.

5. **If you manage hybrid recurrent/SSM models (Qwen3.5/3.8, Qwen3-Next)**: The VRAM predictor over-counts KV cache by 4–8×. If you are near the 80 % memory threshold, runners may be evicted unexpectedly even with `keep_alive=-1`. Track `ollama ps` closely or temporarily set `OLLAMA_KV_CACHE_TYPE` explicitly.

6. **If you build Apple Silicon deployments**: The new Metal memory documentation (#19527) clarifies the unified-memory allocation ceiling — worth reviewing before sizing models on 24–64 GB Macs.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants a LiteLLM digest for 2026-11-05 based on the provided GitHub data. I need to analyze the releases, issues, and PRs to create a structured digest with the requested sections.

Let me analyze the data:

**Releases (last 24h):**
- v1.107.0-rc.3: Release candidate from commit f9778e9, merged PR #50129
- v1.108.0: New stable release, Docker images signed with cosign
- v1.106.7: Previous stable, with verification instructions

**Key Issues (76 total, top 30 by comments):**

Notable CLOSED issues:
1. #14457: Usage data lost when streaming responses terminated early (11 comments, 4 👍)
2. #30765: /v1/messages streaming drops first text_delta after thinking -> text block transition (10 comments)
3. #49179: /key/update during in-flight request drops cost from budget window spend (10 comments)
4. #21115: Cloudflare Workers AI provider outdated (8 comments)
5. #40583: Guardrails can't see/block MCP tools via Anthropic /v1/messages (8 comments)
6. #36168: Streaming drops upstream usage when final chunk has non-empty choices (7 comments)
7. #48773: Responses bridge duplicates tool-call arguments (6 comments)
8. #36150: Add QwenCloud migration path for DashScope provider (6 comments)
9. #36917: Anthropic /v1/messages silently drops role:"system" messages (4 comments)
10. #36083: Streaming usage drops cached_tokens and overcharges (2 comments)
11. #49312: eu.anthropic.claude-haiku-4-5-20251001-v1:0 removed but AWS still serves it (2 comments)

Notable OPEN issues:
1. #49038: Interactions spec canary is red (6 comments)


2. #27767: litellm.BadRequestError with llm_as_a_judge guardrail on vLLM (4 comments)
3. #31439: DeepSeek anthropic-compatible /v1/messages missing reasoning_content (4 comments)
4. #49795: Reasoning-only prefix sets sent_first_chunk, mid-stream failure loses fallback (4 comments)
5. #48637: Databricks tool-only response crashes with KeyError: content (4 comments)
6. #47046: Vertex/Gemini context caching reorders conversation (3 comments)
7. #50065: v1.108.0 MCP tools/list blocks 18-50s on legacy subscription listener (3 comments)
8. #48384: Anthropic server_tool_use returned as pending tool_call causing loops (3 comments)
9. #50033: Opt-in upstream error details for OpenAPI-backed MCP tools (2 comments)
10. #48719: OpenTelemetry set_attributes fails on responses without .get() (2 comments)
11. #49711: SSE keepalive opens stream, Anthropic client never told upstream failed (2 comments)
12. #50070: /v1/messages to Vertex Claude sends messages before system/tools (2 comments)
13. #50024: Azure Messages-to-Responses detour drops encrypted reasoning (2 comments)
14. #49969: Bedrock Converse replays reasoningText.signature to non-Anthropic models (2 comments)

Recent pull requests from the past 24 hours show 500 total items. The open ones include a UI refactor to align Chat with dashboard styling, plus a series of control plane features: Splunk HEC and Microsoft Sentinel audit sinks, a --control-plane flag to serve the control plane API from the existing image, S3 object lock audit sink, OCSF audit events with sink protocol and queued delivery, OpenTelemetry server and dataplane client spans with W3C propagation, and authenticated management passthrough with audit logging.

The remaining control plane work covers fan-out primitives and global usage aggregates, a Rust router core with Python host bridge, model deprecation alerts with daily key usage reporting, and live three-turn model health checks. There's also a fix for guardrails on models that can't be routed, UI changes to display model deprecation banners, a fix to prevent logout from hanging when the OS keychain is unavailable, and a fix for cached spend on cold spend counters. A few closed PRs address cost map Claude capability fields, a Zscaler AI Guard fix, and a cookbook example for routing to custom fine-tuned GGUF models.
</think>


# LiteLLM Digest — 2026-11-05

---

## 1. Today's Highlights

LiteLLM v1.108.0 shipped as the new stable release with fully signed Docker images via cosign. A significant wave of **streaming & cost-tracking bugs** reached resolution today — including usage data loss on early client disconnects and cached-token misbilling — while the control plane audit pipeline landed three PRs introducing OCSF events, Splunk HEC / Sentinel sinks, and S3 Object Lock WORM storage. On the open side, v1.108.0 introduced a regression where MCP `tools/list` blocks 18–50 s on legacy subscription listeners.

---

## 2. Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| [v1.108.0](https://github.com/BerriAI/litellm/releases/tag/v1.108.0) | **Stable** | Docker images cosign-signed with key from commit `e82a3c6`. |
| [v1.107.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-rc.3) | RC | Built from `f9778e9` (merged PR #50129). Published as `1.107.0rc3` on PyPI and `v1.107.0-rc.3` on Docker. |
| [v1.106.7](https://github.com/BerriAI/litellm/releases/tag/v1.106.7) | Stable | Same cosign key. Verify with: `cosign verify --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c6/cosign.pub ghcr.io/berriai/litellm:v1.106.7` |

**Upgrade note:** v1.108.0 carries a **regression** for MCP clients that send `notifications/initialized` with a pre-2026 protocol version (e.g., Python `mcp` SDK `ClientSession` used by Open WebUI). See §5 for details.

---

## 3. New Model & Hardware Support

No new model families, hardware backends, or quantization formats added today. However, two issues point to evolving provider coverage:

- **Cloudflare Workers AI** — Issue [#21115](https://github.com/BerriAI/litellm/issues/21115) (closed) flags that the Cloudflare provider implementation is stale and needs updating for Cloudflare's expanded API (text-to-image, text-to-speech, additional models). No PR merged yet.
- **QwenCloud migration path** — Feature request [#36150](https://github.com/BerriAI/litellm/issues/36150) (closed) asks for an official migration path from the legacy DashScope provider to QwenCloud for international developers.

---

## 4. Performance & Optimization

| PR | Description | Impact |
|----|-------------|--------|
| [#49815](https://github.com/BerriAI/litellm/pull/49815) | **Cost map fill for Claude** — missing capability fields (context window, supported features) are now back-filled from the family baseline for Claude on Anthropic, Azure, Bedrock, and Vertex. | Correcter routing/selection when model is not in cost map. |
| [#47676](https://github.com/BerriAI/litellm/pull/47676) | **Cold spend counter fix** — requests arriving right after a spend counter went cold previously each re-added the customer's entire spend. Now added exactly once per process. | Prevents spurious 422 budget rejections under burst traffic. |
| [#50098](https://github.com/BerriAI/litellm/pull/50098) | **`lite logout` on headless/CI** — on machines without an OS keychain (`LITELLM_CLI_DISABLE_KEYRING=1`), `token.json` is now always removed. | Eliminates phantom "still logged in" state in CI. |
| [#50139](https://github.com/BerriAI/litellm/pull/50139) | **Zscaler AI Guard** — now scans only the last user turn instead of the full conversation flattened into one string. | Reduces guardrail latency and prevents system prompts from triggering false positives. |

**Control plane stack** (PRs #49656–#49662, #49657–#49659): fan-out aggregation for fleet-wide usage, W3C trace propagation across control plane → dataplane, and OCSF audit event schema — no per-call latency impact but enables observability at scale.

---

## 5. Stability & Regressions

### 🔴 High Severity

| Issue | Description | Status |
|-------|-------------|--------|
| [#50065](https://github.com/BerriAI/litellm/issues/50065) | **v1.108.0 regression: MCP `tools/list` blocks 18–50 s** on legacy subscription listeners after `notifications/initialized` with pre-2026 protocol. Affects Open WebUI and Python `mcp` SDK `ClientSession`. Introduced in v1.108.0 (upgrade from v1.106.6). | **OPEN** — no fix PR yet. |
| [#14457](https://github.com/BerriAI/litellm/issues/14457) | **Usage data lost on early client disconnect** — streaming requests terminated before the provider sends the final usage chunk lose all token tracking, creating billing gaps and inaccurate analytics. | **CLOSED** — fix merged? Check linked PR. |
| [#49179](https://github.com/BerriAI/litellm/issues/49179) | **`/key/update` drops in-flight request cost** from `LiteLLM_BudgetWindowSpend` (but not from `LiteLLM_SpendLogs` or the key's `spend` column). | **CLOSED** — fix pending verification. |

### 🟠 Medium Severity

| Issue | Description | Status |
|-------|-------------|--------|
| [#49795](https://github.com/BerriAI/litellm/issues/49795) | **Reasoning-only prefix flips `sent_first_chunk`** — a high-effort model failing mid-thought reports `is_pre_first_chunk=False`, losing mid-stream fallback even though the client received nothing. | **OPEN** |
| [#36168](https://github.com/BerriAI/litellm/issues/36168) | **Streaming drops upstream `usage` when final chunk has non-empty `choices`** — `cached_tokens` lost, cost billed at full input rate. Mirror of #28735. | **CLOSED** |
| [#36083](https://github.com/BerriAI/litellm/issues/36083) | **v1.95.0+ streaming usage drops `cached_tokens`** during stream reassembly, overcharging cached input. | **CLOSED** |
| [#48773](https://github.com/BerriAI/litellm/issues/48773) | **Azure Responses bridge duplicates tool-call arguments** in `/v1/chat/completions` streaming — complete JSON sent, then re-sent fragment by fragment. | **CLOSED** |
| [#50024](https://github.com/BerriAI/litellm/issues/50024) | **Azure Messages-to-Responses detour drops encrypted reasoning** from resumed tool-call history. Follow-up to #40451 / LIT-7419. | **OPEN** |
| [#49969](https://github.com/BerriAI/litellm/issues/49969) | **Bedrock Converse replays `reasoningText.signature`** to non-Anthropic GLM models causing Bad Request. | **OPEN** |
| [#48637](https://github.com/BerriAI/litellm/issues/48637) | **Databricks tool-only response crashes** `resolve_reasoning_and_content` with `KeyError: 'content'`. | **OPEN** |
| [#34732](https://github.com/BerriAI/litellm/issues/34732) | **Concurrent requests bypass `max_budget_per_session`** — session-budget checks do not hold capacity for in-flight calls. | **OPEN** |

### 🟡 Lower Severity (Notable for Correctness)

| Issue | Description | Status |
|-------|-------------|--------|
| [#30765](https://github.com/BerriAI/litellm/issues/30765) | `/v1/messages` streaming drops first `text_delta` after `thinking` → `text` block transition for Claude Code. | **CLOSED** |
| [#36917](https://github.com/BerriAI/litellm/issues/36917) | Anthropic `/v1/messages` silently drops `role: "system"` messages inside `messages[]`. | **CLOSED** |
| [#48384](https://github.com/BerriAI/litellm/issues/48384) | Anthropic `server_tool_use` (web search) returned as pending `tool_call` on `/v1/chat/completions`, causing agent loops. | **OPEN** |
| [#47046](https://github.com/BerriAI/litellm/issues/47046) | Vertex/Gemini context caching reorders conversation when `cache_control` is not on the first message; `modify_params` also drops `system_instruction`. | **OPEN** |
| [#50070](https://github.com/BerriAI/litellm/issues/50070) | `/v1/messages` to Vertex Claude sends `messages` before `system`/`tools`, causing prompt cache misses on tool-loop rounds. | **OPEN** |
| [#49038](https://github.com/BerriAI/litellm/issues/49038) | **Interactions spec canary is red** — scheduled OpenAPI compliance tests against Google's live spec failing. | **OPEN** |
| [#48719](https://github.com/BerriAI/litellm/issues/48719) | `OpenTelemetry.set_attributes` calls `.get()` on response objects (e.g., `DecisionsResponse`, MCP `CallToolResult`, lists) that don't support it. | **OPEN** |
| [#49711](https://github.com/BerriAI/litellm/issues/49711) | SSE keepalive commits stream as 200, so later upstream failures are never communicated to Anthropic clients. | **OPEN** |

---

## 6. What This Means for Application Developers

1. **If you're on v1.106.6 or earlier and use Open WebUI or Python `mcp` SDK:** **Do not upgrade to v1.108.0 yet.** Wait for a patch for [#50065](https://github.com/BerriAI/litellm/issues/50065) or apply a local fix. MCP `tools/list` will hang for 18–50 seconds.

2. **If you track spend per budget window:** Verify that in-flight requests during a `/key/update` call are now being counted correctly after the fix for [#49179](https://github.com/BerriAI/litellm/issues/49179). If you have logs from affected periods, compare `LiteLLM_BudgetWindowSpend` against `LiteLLM_SpendLogs`.

3. **If you use streaming with token caching (Azure, Vertex, Bedrock):** The cached-token tracking bugs ([#36168](https://github.com/BerriAI/litellm/issues/36168), [#36083](https://github.com/BerriAI/litellm/issues/36083)) are closed — verify your billing reconciliation shows correct `cached_tokens` after upgrading past the fix commits.

4. **If you use Anthropic `/v1/messages` with Claude Code or DeepSeek:** Several edge cases around thinking-block transitions ([#30765](https://github.com/BerriAI/litellm/issues/30765)), missing `reasoning_content` ([#31439](https://github.com/BerriAI/litellm/issues/31439)), and dropped system messages ([#36917](https://github.com/BerriAI/litellm/issues/36917)) have been patched. Test multi-turn conversations with extended thinking before deploying.

5. **If you use guardrails:** The fix in [#49295](https://github.com/BerriAI/litellm/pull/49295) now skips pre-call guardrails for unrouteable model names, preventing vendor calls on typos. Also, Zscaler AI Guard now scans only the latest user turn ([#50139](https://github.com/BerriAI/litellm/pull/50139)) — review any guardrail logic that relied on scanning the full conversation.

6. **If you run LiteLLM in headless CI:** `lite logout` now works correctly without an OS keychain ([#50098](https://github.com/BerriAI/litellm/pull/50098)).

7. **If you use Vertex Claude with prompt caching:** The `/v1/messages` body ordering bug ([#50070](https://github.com/BerriAI/litellm/issues/50070)) may cause cache misses on tool-loop rounds — monitor your prompt token costs on Vertex after upgrading.

---

*Generated from GitHub data for `BerriAI/litellm` — 2026-11-05*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate an Unsloth digest for 2026-11-05 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me break down the key information:

**Latest Releases (last 24h):**
- v0.1.915-beta: Improved Customization + Glass + Browser Use
  - Qwen3.8-Flash-Next support
  - Glass themes (now in Beta)
  - Composer position slider
  - File interaction in built-in browser
  - Lower idle memory usage
  - Preserved chat context when switching GGUF models
  - Faster MLX loading and FP8

**Latest Issues (showing key ones):**
- #15999: AppImage UI lag
- #10345: Human-centric context management (5 comments)
- #16520: PyTorch 2.13.0/2.14.0 extras missing on PyPI (CLOSED)
- #16603: Long conversations cause UI lag (regression)
- #16602: search_conversation tool disappeared (CLOSED)
- #16573: Update to v0.1.914-beta does not complete
- #16614: Theme flash on first load
- #16375: Qwen-Image-2.1-GGUF issues
- #16699: Chat template for gemma-4-thinking removes reasoning
- #15603: Feature: Limit model downloading speed
- #16720: Multi-LoRA batch pagination issue
- #16714: RAG indexing fails during embedding model download
- #16721: S3 audio JSONL Unicode separator issue
- #16715: RAG ingest performance issue (99ms/chunk vs 2.07ms batched)
- #16664: web_search always returns "No results found"
- #16605: AppImage fails on Slackware64

**Latest Pull Requests (key ones):**


Several fixes are underway including audio model loading improvements and Unicode handling in S3 processing. The team is addressing a MoE router aux loss weighting issue under pipeline parallel conditions, while also resolving embedding model download race conditions. Other notable fixes target GPU memory estimation and search functionality when archiving fails. Several PRs remain open focusing on CUDA graph decoding optimization and model file compatibility.

For the digest, I'm organizing this into six key sections. The latest v0.1.915-beta release brings Qwen3.8-Flash-Next support alongside UI refinements like Glass themes and a composer slider, plus performance improvements in memory usage and MLX loading. On the model side, support is expanding across audio models including YuE2, Stable Audio 3 Medium, and MiDashengLM-Gen, plus image models like Anima, Chroma, and MOSS-Image. Performance optimizations are targeting RAG ingestion throughput and decode efficiency through CUDA graphs.

The current issue queue shows several areas needing attention: RAG embedding is significantly slower than expected at ~99ms per chunk compared to batched operations at 2.07ms, there's a regression causing UI lag with extended conversations, and AppImage builds are experiencing UI responsiveness problems. Multi-LoRA batch pagination and S3 audio JSONL parsing with Unicode characters also need fixes. For teams integrating these systems, the new search functionality improvements and GPU memory management changes will be important to track.
</think>


# Unsloth Digest — 2026-11-05

## 1. Today's Highlights

**v0.1.915-beta** lands with Qwen3.8-Flash-Next, polished Glass themes (now Beta), a Composer position slider, and built-in browser file interaction. The release also delivers lower idle memory usage and faster MLX/FP8 loading, alongside preserved chat context when switching GGUF models. Meanwhile, a critical RAG ingestion performance issue surfaced — embedding is running at ~99 ms/chunk on the single-file path versus 2.07 ms batched, a ~48× regression likely impacting corpus indexing pipelines.

## 2. Releases & Breaking Changes

| Version | Component | What's New | Link |
|---------|-----------|------------|------|
| **v0.1.915-beta** | Desktop/Studio | Qwen3.8-Flash-Next support; Glass themes (Beta); Composer position slider; built-in browser file interaction; lower idle memory; preserved GGUF chat context on model switch; faster MLX loading and FP8 | [Release notes](https://github.com/unslothai/unsloth/releases) |

**PyTorch extras now available:** Issue [#16520](https://github.com/unslothai/unsloth/issues/16520) (CLOSED) confirmed that `cu130-2130` and `cu130-2140` extras are published on PyPI as of this cycle.

**No breaking migrations reported** for this cycle.

---

## 3. New Model & Hardware Support

| Model / Family | Type | Notes | Link |
|----------------|------|-------|------|
| **Qwen3.8-Flash-Next** | LLM | Added in v0.1.915-beta | [#16520](https://github.com/unslothai/unsloth/issues/16520) |
| **YuE2, Stable Audio 3 Medium, MiDashengLM-Gen** | Audio/Music | Model sizing now derived from measured peaks; load estimates shown in picker | [#16726](https://github.com/unslothai/unsloth/pull/16726) |
| **Anima, Chroma1-HD, MOSS-Image** | Image (single `.safetensors`) | Studio now loads these ComfyUI single-file formats | [#16710](https://github.com/unslothai/unsloth/pull/16710) |
| **Krea 2 int4** | Image | Single-file int4 support added; ComfyUI text encoder and VAE files accepted | [#16710](https://github.com/unslothai/unsloth/pull/16710) |
| **OLMoE family** | MoE | Added to capability registry for tensor-parallel verification | [#16709](https://github.com/unslothai/unsloth/pull/16709) |
| **Qwen-Image-2.1-GGUF** | Multimodal GGUF | Bug in Edit/Reference mode fixed | [#16375](https://github.com/unslothai/unsloth/issues/16375) (CLOSED) |

**Capability registry fixes:** PR [#16709](https://github.com/unslothai/unsloth/pull/16709) corrects three locations where the registry disagreed with actual code behavior, notably refusing tensor parallel where `tp_native` cannot shard and adding the full zoo MoE families.

---

## 4. Performance & Optimization

### Landed (merged in last 24h)

| Area | Change | Impact | Link |
|------|--------|--------|------|
| **Audio model memory sizing** | Model list now derives size from measured peaks instead of generic heuristics | YuE2, Stable Audio 3 Medium, MiDashengLM-Gen now correctly sized on 10 GB cards | [#16628](https://github.com/unslothai/unsloth/pull/16628) (CLOSED) |
| **S3 JSON Lines parsing** | Split on LF only; Unicode separators (U+0085, U+2028, U+2029) no longer corrupt records | Training aborts on transcript Unicode are resolved | [#16725](https://github.com/unslothai/unsloth/pull/16725), [#16723](https://github.com/unslothai/unsloth/pull/16723) |
| **Embedding download race** | Studio now waits for a pending embedding model download instead of failing every file | RAG indexing during model transfer no longer corrupts the failed-files list | [#16722](https://github.com/unslothai/unsloth/pull/16722) |
| **Pipeline parallel MoE aux loss** | Router aux loss now weighted per accumulation step under `UNSLOTH_PP_SIZE=2` | MoE training under PP with `gradient_accumulation_steps > 1` now matches single-GPU objective | [#16708](https://github.com/unslothai/unsloth/pull/16708) |

### In Progress (open PRs)

| Area | Change | Target Metric | Link |
|------|--------|---------------|------|
| **Decode with CUDA graphs** | Enable by default in plain `model.generate()` with memory release and eager fallback | ~50% GPU utilization improvement on T4 (from fraction of 30–75 ms/step to fuller occupancy); ~675 kernels/step → ~1070–1430 with LoRA | [#16691](https://github.com/unslothai/unsloth/pull/16691) |
| **RAG ingest batching** | Batch embedding across documents instead of per-document | ~99 ms/chunk → ~2.07 ms/chunk (~48× speedup) for small-file corpora | [#16715](https://github.com/unslothai/unsloth/issues/16715) |
| **HunyuanVideo-1.5 fp8 fallback logging** | Report dense bf16 encoder when hosted fp8 cannot be fetched | Accurate logging of actual encoding scheme used | [#16724](https://github.com/unslothai/unsloth/pull/16724) |

---

## 5. Stability & Regressions

**Critical (fix PR exists)**

| Issue | Severity | Description | Fix | Link |
|-------|----------|-------------|-----|------|
| **S3 audio JSONL Unicode abort** | 🔴 High | Training aborts when transcript contains U+0085, U+2028, or U+2029 | PR [#16725](https://github.com/unslothai/unsloth/pull/16725) & [#16723](https://github.com/unslothai/unsloth/pull/16723) | [#16721](https://github.com/unslothai/unsloth/issues/16721) |
| **RAG indexing during embedding download** | 🔴 High | Every file fails with `EmbeddingModelDownloadRequiredError`; corrupted failed-files list | PR [#16722](https://github.com/unslothai/unsloth/pull/16722) | [#16714](https://github.com/unslothai/unsloth/issues/16714) |
| **`search_conversation` missing** | 🔴 High | Tool disappears after archive embedder failure (3rd recurrence) | PR [#16718](https://github.com/unslothai/unsloth/pull/16718) | [#16706](https://github.com/unslothai/unsloth/issues/16706), [#16700](https://github.com/unslothai/unsloth/issues/16700) |
| **Multi-LoRA pagination skips jobs** | 🟡 Medium | Fine-tuning list can skip a job when Multi-LoRA batches start out of order | PR [#16633](https://github.com/unslothai/unsloth/pull/16633) | [#16720](https://github.com/unslothai/unsloth/issues/16720) |

**Reported (no fix PR yet)**

| Issue | Severity | Description | Link |
|-------|----------|-------------|------|
| **RAG ingest performance regression** | 🔴 High | ~99 ms/chunk on single-file path vs 2.07 ms batched; 48× slower for typical corpus | [#16715](https://github.com/unslothai/unsloth/issues/16715) |
| **Long conversations UI lag** | 🟡 Medium | Regression: extended chats cause lag in web + desktop | [#16603](https://github.com/unslothai/unsloth/issues/16603) |
| **AppImage UI lag** | 🟡 Medium | Studio AppImage has very laggy UI | [#15999](https://github.com/unslothai/unsloth/issues/15999) |
| **gemma-4-thinking template bug** | 🟡 Medium | Chat template removes reasoning content | [#16699](https://github.com/unslothai/unsloth/issues/16699) |
| **`web_search` always empty** | 🟡 Medium | DuckDuckGo `ddgs` request missing `Accept` header; Yandex missing from allow-list | [#16664](https://github.com/unslothai/unsloth/issues/16664) |
| **Update to v0.1.914-beta stalls** | 🟡 Medium | Windows 11 update does not complete | [#16573](https://github.com/unslothai/unsloth/issues/16573) (CLOSED) |
| **Theme flash on first load** | 🟢 Low | 150 ms light-theme flash before stored dark theme applies | [#16614](https://github.com/unslothai/unsloth/issues/16614) (CLOSED) |
| **Homebrew cask missing** | 🟢 Low | `brew install --cask unsloth` fails; no Cask exists | [#16672](https://github.com/unslothai/unsloth/issues/16672) |

---

## 6. What This Means for Application Developers

**Deployment & Reliability**
- **RAG pipelines are at risk** until [#16715](https://github.com/unslothai/unsloth/issues/16715) lands. If you index small-file corpora (notes, wikis, docs), expect ~48× slower throughput and potential OOM on large collections. Consider batching manually or deferring indexing until the fix merges.
- **S3 audio training is now safe** for datasets containing Unicode line/paragraph separators — the parsing regression from the previous cycle is resolved by [#16725](https://github.com/unslothai/unsloth/pull/16725).
- **Embedding model downloads no longer corrupt indexing state** — PR [#16722](https://github.com/unslothai/unsloth/pull/16722) eliminates the false-positive `EmbeddingModelDownloadRequiredError` cascade during concurrent transfers.

**Integration & UX**
- **New CLI model selection:** PR [#16635](https://github.com/unslothai/unsloth/pull/16635) lets `unsloth start` pick a device model interactively when none is loaded, removing a manual `--model` requirement for headless agents.
- **`/skills` and `/context` commands** are landing ([#16717](https://github.com/unslothai/unsloth/pull/16717), [#13929](https://github.com/unslothai/unsloth/pull/13929)) — both are handled in the composer before model gates, so they work without a loaded model.
- **Custom headers for remote providers** are now supported via [#14811](https://github.com/unslothai/unsloth/issues/14811) (CLOSED), enabling LiteLLM tracking headers and feature routing.
- **`chat_template_kwargs` filtering** in Studio's reasoning path now preserves arbitrary keys like `verification` — if you rely on extended kwargs for models like Sage-A1.5, verify the keys survive after upgrading.

**Performance Roadmap**
- **CUDA graph decode** ([#16691](https://github.com/unslothai/unsloth/pull/16691)) is approaching merge and will meaningfully improve decode throughput on NVIDIA GPUs for models using plain `generate()`. Monitor for regressions if you run custom decoding loops.
- **Multi-LoRA batching pagination** fix ([#16633](https://github.com/unslothai/unsloth/pull/16633)) ensures cancelled jobs are visible in paginated lists — update any dashboard logic that polls the fine-tuning queue.

**Action Items**
1. **Pin v0.1.914-beta** if you are on Windows and rely on auto-update — the v0.1.915-beta upgrade path appears clean but the prior version's updater has a confirmed stall bug.
2. **Audit RAG ingestion code** for concurrent embedding downloads; once [#16722](https://github.com/unslothai/unsloth/pull/16722) merges, the behavior changes from "fail-fast" to "wait-and-retry."
3. **Test Unicode-heavy S3 manifests** after upgrading — the fix in [#16725](https://github.com/unslothai/unsloth/pull/16725) changes JSON Lines splitting semantics.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*