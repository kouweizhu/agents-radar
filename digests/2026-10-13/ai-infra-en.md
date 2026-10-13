# AI Infrastructure Digest 2026-10-13

> Generated: 2026-10-13 03:08 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report comparing the digest reports I generated for vLLM, SGLang, llama.cpp, Ollama, and LiteLLM. Let me analyze all the information from those digests and create a comprehensive comparison.

Let me organize the key data points:

**vLLM:**
- No releases in last 24h
- 8 issues mentioned (DeepSeek-V4-Flash SM8x, CUDA graphs, Triton bugs, etc.)
- Key PRs: DeepSeek-V4 C128 compressor fix, Mamba kernel optimization (6x speedup), DeepGEMM update, defer mode for long prefills, per-forward NVFP4 MoE, Clef-Flash support
- Models: DeepSeek-V4-Flash, DeepSeek-V4.1-Flash, Clef-Flash
- Bugs: CUDA graph deadlock with LoRA, DeepSeek-V4.1 Triton illegal memory access, V1 multiprocess freeze

**SGLang:**
- No releases
- Top issues: DeepSeek V4 roadmap, Flaky tests/CI, Prefill CP, SGLang dLLM
- PRs: LoRA stack (21-part series), EAGLE spec-decode optimization, heterogeneous TP for hybrid SWA, FlashInfer startup tuning
- Models: MiniCPM-V 4.7, GLM-5.3-Flash, DeepSeek V4.1
- Bugs: Flaky CI, speculative decoding crash, runtime role switch crash, GLM-5.3 repetition loops

**llama.cpp:**
- No releases in last 24h (but recent commits)
- Issues: Speculative decoding diverges on quantized targets, draft-mtp halves prompt processing on multi-GPU, Vulkan Flash Attention fallback, CUDA graphs hang on RTX 5090
- Commits: VLLM Decision 2/D3 support, Metal kernel fix, Vulkan FMA packing, Intel Arc Pro B65 support, Hexagon optimization, multi-node TP via NCCL


- Models: VLLM Decision 2, D3, Prism ternary GGUF
- Bugs: Speculative decoding divergence, multi-GPU MTP slowdown, Vulkan fallback, RTX 5090 CUDA graphs hang

**Ollama:**
- v0.40.4-rc0 released
- Issues: Performance regression 25-30%, MLX threadgroup panic, JSON format + tool calls, Windows GPU detection, RTX 5090 CUDA crash
- PRs: llama.cpp updates, decision models, Prism ternary GGUF, Cohere MoE
- Models: K2 Horizon (feature request), decision models

Ollama shows a notable performance regression and platform-specific issues with MLX and CUDA. The release includes support for decision models and initial work on ternary quantization, though K2 Horizon remains in progress.

**LiteLLM:**
- No releases
- Issues: Redis SSL crash in v1.93.0, Proxy-admin JWT bypass, Bedrock audio transcription, Streaming 500s, SSE error codes
- PRs: Anthropic 503→529 fix, batch JSONL, W3C traceresponse, Prometheus multiprocess fix
- Models: GPT-6 cost parity, Claude 5 cost parity, Bedrock Converse
- Bugs: Redis SSL (critical), JWT bypass (critical), Bedrock audio 400

LiteLLM faces critical infrastructure challenges with Redis connectivity and security vulnerabilities. The project adds cost verification for GPT-6 and Claude 5 on Bedrock, though audio transcription remains problematic and SSE error handling needs improvement.

Comparing ecosystem activity: vLLM leads with 10+ active PRs, followed by SGLang's 8 PRs. Ollama has a pending release candidate, while LiteLLM shows 4 PRs and llama.cpp has 6-7 recent commits. Open issues range from 15-20 across projects, with releases sparse—only Ollama issued a recent RC.

On model support, vLLM and SGLang both prioritize DeepSeek-V4 variants and flash attention, while llama.cpp expands to VLLM Decision 2, D3, and Prism models. Ollama pushes decision models and K2 Horizon, and LiteLLM covers GPT-6, Claude 5, and Bedrock Converse.

Performance optimization spans multiple vectors: vLLM targets the Mamba kernel at 6x speed and introduces DeepSeek-V4 C128 compression plus per-forward NVFP4 MoE; SGLang delivers a 21-part LoRA stack with NVFP4 MoE and EAGLE spec-decode gains; llama.cpp applies Vulkan FMA and RMS norm with AMX Q4_K at 13% improvement; Ollama is addressing a 25-30% regression; LiteLLM resolves MCP cancellation and Prometheus multiprocess challenges.

Infrastructure positioning reveals distinct layers: vLLM and SGLang operate as high-performance distributed serving engines with prefilling disaggregation, while llama.cpp runs locally on consumer hardware and mobile with GGUF/MLX backends.

Ollama occupies local serving with a streamlined UI, LiteLLM functions as a gateway providing unified API access and cost controls, and Unsloth handles fine-tuning and training with-LoRA and Studio capabilities. Several technical shifts are becoming apparent—prefill-decode separation is advancing in vLLM and SGLang for production scaling, DeepSeek models are seeing aggressive optimization efforts across the ecosystem, and NVFP4 quantization is gaining significant momentum on Blackwell hardware.

The reliability challenges span multiple dimensions: SGLang grapples with flaky tests and CI instability, while Ollama shows performance regressions. Quantized model speculative decoding is breaking in llama.cpp, and Redis caching is failing in LiteLLM. Agentic workflows are expanding with Browser Use in Unsloth and SGLang's MCP cancellation work, parallel to position-independent KV cache reuse. Multi-node tensor parallelism is materializing in llama.cpp and vLLM, LoRA is advancing through SGLang's 21-part stack, and long-prefill handling appears in vLLM with defer mode.</think>

# Cross-Project Comparison Report: AI Infrastructure Digest

## 1. Ecosystem Overview

The AI infrastructure landscape on 2026-10-13 shows clear stratification between high-performance distributed serving (vLLM, SGLang), local-first runtimes (llama.cpp, Ollama), gateway/orchestration layers (LiteLLM), and training/fine-tuning stacks (Unsloth). The headline theme across all five projects is **optimization under quantization and multi-node scale** — from SGLang's 21-part LoRA stack to vLLM's per-forward NVFP4 MoE selection. Simultaneously, stability issues are surfacing: CUDA graph deadlocks, Redis SSL regressions, and MLX threadgroup panics indicate that the rapid pace of feature work is creating fragility at the edges. The DeepSeek V4 family is emerging as the shared focal point for optimization across serving engines.

---

## 2. Activity Comparison

| Project | Issues (Active) | PRs (24h) | Releases (24h) |
|---------|----------------|-----------|----------------|
| **vLLM** | 8 tracked (5 bugs, 3 feature) | 10+ | None |
| **SGLang** | 7 tracked (4 bugs, 3 feature) | 8 | None |
| **llama.cpp** | 6 tracked (4 bugs, 2 feature) | 6 commits | None |
| **Ollama** | 9 tracked (6 bugs, 3 feature) | 5 | v0.40.4-rc0 |
| **LiteLLM** | 10 tracked (7 bugs, 3 feature) | 4 | None |

**Observations:**

- **Release cadence**: Only Ollama shipped a release candidate. The other projects are in heavy internal development cycles.
- **Issue volume**: LiteLLM and Ollama carry the highest bug burden, reflecting their broader user bases and multi-backend complexity.
- **PR velocity**: vLLM and SGLang lead in merged/in-progress PRs, indicating aggressive feature development.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM |
|---------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4-Flash** | ✅ (SM8x blocked) | ✅ | — | — | — |
| **DeepSeek-V4.1-Flash** | ✅ (H20 bug) | ✅ | — | — | — |
| **Clef-Flash** | ✅ New | — | — | — | — |
| **GLM-5.3-Flash** | — | ✅ | — | — | — |
| **MiniCPM-V 4.7** | — | ✅ | — | ✅ (Cookbook) | — |
| **LTX-2.5** | — | — | — | ✅ (FP8/int8) | — |
| **VLLM Decision 2** | — | — | ✅ New | — | — |
| **VLLM D3** | — | — | ✅ New | — | — |
| **Cohere MoE** | — | — | ✅ Parser fix | — | — |
| **K2 Horizon** | — | — | — | 🛠 Request | — |
| **Ling 3.0** | — | — | — | 🛠 Request | — |
| **GPT-6 (Azure)** | — | — | — | — | ✅ Cost parity |
| **Claude 5 (Bedrock)** | — | — | — | — | ✅ Cost parity |

**Who is ahead:**

- **vLLM + SGLang** are tied on DeepSeek-V4 optimization, the highest-priority model family this cycle.
- **llama.cpp** leads on novel GGUF architectures (Decision 2, D3, Prism ternary).
- **LiteLLM** uniquely owns the cost-parity verification layer for GPT-6/Claude 5 across Azure/Bedrock — a gateway-layer concern others don't address.
- **Ollama** and **Unsloth** focus on end-user workflows (image generation, browser agents) rather than raw model support races.

---

## 4. Performance Frontier

| Optimization Domain | vLLM | SGLang | llama.cpp | Ollama | LiteLLM |
|--------------------|------|--------|-----------|--------|---------|
| **KV cache / context** | DeepSeek C128 compressor fix; defer mode for long prefills | FlashInfer NVFP4 KV (~1.7-1.8x slower regression) | — | Prompt cache timing fix | — |
| **Quantization (NVFP4/W4A16)** | Per-forward MoE W4A4/W4A16 selection | LoRA stack: NVFP4 MoE, CuTeDSL FP8 | AMX Q4_K (+13% decode) | — | — |
| **Kernel fusion** | Mamba: 7→1 kernel, 6x speedup | EAGLE KV indexing parallelization | Vulkan FMA packing; RMS norm subgroup | — | — |
| **LoRA / fine-tuning** | — | 21-part stack: Triton/CuTeDSL/B200/GB300 | — | — | — |
| **Batching / scheduling** | Heterogeneous TP for hybrid SWA | — | — | — | MCP cancellation |
| **Distributed / multi-node** | — | — | NCCL multi-node TP | — | — |
| **Speculative decoding** | — | EAGLE optimization | — | — | — |
| **Memory management** | — | — | KV padding to 256 for no-cache attention | VRAM prediction fix | Prometheus multiprocess |

**Where the money is:**

- **Kernel fusion** is the hottest area in vLLM and llama.cpp — the 6x Mamba speedup and Vulkan FMA work show significant headroom remains.
- **Quantization** continues to dominate in SGLang (LoRA stack) and vLLM (NVFP4 MoE), but FlashInfer NVFP4 is regressing on Blackwell — a risk for production deployments.
- **Distributed serving** is advancing quietly: llama.cpp's NCCL multi-node TP and vLLM's heterogeneous TP for hybrid SWA signal readiness for larger cluster deployments.

---

## 5. Layer Positioning

| Layer | Projects | Primary Role |
|-------|----------|--------------|
| **High-performance distributed serving** | vLLM, SGLang | Production-grade inference at scale; prefilling disaggregation; TP/CP; KV cache sharing |
| **Local runtime / GGUF** | llama.cpp | CPU/GPU/Mobile/Edge inference; GGUF format; consumer hardware focus |
| **Local serving / CLI** | Ollama | Simplified local serving; macOS/Windows native; Studio UI |
| **Gateway / orchestration** | LiteLLM | Unified API proxy; multi-provider routing; cost controls; telemetry |
| **Training / fine-tuning** | Unsloth | LoRA fine-tuning; quantized training; Studio; browser agents |

**Key differentiators:**

- **vLLM vs SGLang**: Both target production serving, but SGLang is pulling ahead on speculative decoding integration and agentic tool-use (MCP), while vLLM leads on kernel-level optimization depth.
- **llama.cpp vs Ollama**: llama.cpp is the runtime engine; Ollama wraps it with UX and distribution. Ollama's recent performance regression (25-30%) is a concern — likely an upstream llama.cpp integration issue.
- **LiteLLM occupies a unique niche** as the only gateway-layer project — no direct competitor in this set for unified multi-provider API routing and cost management.

---

## 6. Trend Signals

### What's accelerating

1. **Prefill-decode disaggregation** — vLLM and SGLang are both advancing this for large-scale deployment. SGLang targets Q4 roadmap expansion. Infrastructure engineers should plan for disaggregated deployments by Q1 2027.

2. **DeepSeek V4 optimization** — Three projects (vLLM, SGLang, llama.cpp) are actively optimizing this model family. If you're deploying DeepSeek, expect vLLM/SGLang to stabilize first; llama.cpp follows in GGUF.

3. **NVFP4 on Blackwell** — SGLang's LoRA stack and vLLM's per-forward selection are betting heavily on NVFP4. Watch for the FlashInfer regression (1.7-1.8x slower) to be resolved.

4. **Browser / agent tooling** — Unsloth's Browser Use and SGLang's MCP cancellation work signal that **agentic inference** is moving from experiment to product. Agent developers should track these APIs.

5. **Multi-node tensor parallelism** — llama.cpp's NCCL work and vLLM's heterogeneous TP suggest the ecosystem is preparing for **cluster-scale local inference** — relevant for on-prem AI infrastructure teams.

### What to watch

| Risk | Projects | Impact |
|------|----------|--------|
| **CUDA graph deadlocks** | vLLM | LoRA + TP deployments affected; disables CUDA graphs as workaround |
| **Redis SSL regression** | LiteLLM v1.93.0 | Caching/budget counters broken; avoid upgrading |
| **MLX threadgroup panics** | Ollama | Qwen3.8/Gemma4 on M1/M2 Max; blocks Apple Silicon production |
| **Speculative decoding divergence** | llama.cpp | Quantized targets produce different outputs; needs verification |
| **Performance regression** | Ollama | 25-30% throughput drop in v0.40.x vs 0.40.1; stay on older versions |
| **Flaky CI / tests** | SGLang | PR reliability affected; expect delayed reviews |

### For agent/application developers

- **Don't mix JSON format + tool calls** in Ollama — currently incompatible.
- **Use v0.40.1 or wait** for Ollama performance fix before deploying.
- **Monitor DeepSeek-V4.1 on H20** — set `max_num_seqs=256` to avoid Triton crash.
- **Gateway users**: LiteLLM's cost-parity work means billing for GPT-6/Claude 5 should now be predictable across Azure/Bedrock.
- **Local model runners**: llama.cpp's Decision 2 and D3 support opens GGUF options for decision-making workflows.

---

*Cross-project analysis compiled from individual project digests — 2026-10-13*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze this GitHub data for vLLM and create a structured digest for 2026-10-13.

Key observations:

1. **No releases in last 24 hours**

2. **Top Issues by comments:**
   - #50576: DeepSeek-V4-Flash SM8x (Ampere A100/A800) support - 109 comments - HIGH PRIORITY
   - #32335: Extract KV-Cache update from all attention backends - 56 comments
   - #41530: TP Worker hang causes EngineDeadError with DeepSeek-V4-Pro - 16 comments - BUG
   - #56389: DeepSeek-V4.1-Flash Triton illegal memory access under high concurrency on H20 - 12 comments - BUG
   - #60845: CUDA graphs deadlock with fully-sharded fused-MoE LoRA across TP ranks - 9 comments - BUG

3. **Notable PRs:**
   - #50283: Add --enable-nan-fault-tolerance for NaN detection
   - #61308: Add Clef-Flash support (new model)
   - #59709: DeepSeek-V4 C128 compressor fix for CUDA graphs
   - #58737: Mamba kernel optimization - 7 kernels -> 1, 6x speedup
   - #61080: Add defer mode for long prefills
   - #61149: Bump DeepGEMM to latest release
   - #54617: Per-forward NVFP4 W4A4/W4A16 selection for MoE

4. **Performance items:**
   - DeepSeek-V4.1-Flash NVFP4 KV cache is ~1.7-1.8x slower than FP8 on SM120 (#50416)
   - ROCm AMD optimizations for Qwen3.8-2.4T-A95B and Qwen3.8-Flash-Next on MI355X
   - The mamba kernel fusion achieves a 6x speedup, while DFlash draft-input padding optimization saves up to 35.8us per step. DeepSeek-V4 C128 compression issues in CUDA graphs and a deadlock affecting fully-sharded fused-MoE LoRA across tensor parallelism ranks are flagged as bugs requiring attention.
   - The DeepSeek-V4.1-Flash Triton kernel encounters illegal memory access when max_num_seqs exceeds 256 on H20. Additionally, there's a sporadic 0.7-2 second freeze occurring once per generate batch in the V1 multiprocess engine, and PD disaggregation/KV transfer support for hybrid SSM/GDN models is now available.

Several new features are worth noting: Clef-Flash has been added, DeepSeek-V4-Flash now supports SM8x (Ampere), the --enable-nan-fault-tolerance flag is operational, there's a defer mode option for handling long prefills, and DeepGEMM has been updated to the 26/09/30 release.</think>

# vLLM Digest — 2026-10-13

## 1. Today's Highlights

The vLLM project is seeing active development across multiple fronts. The highest-profile issue remains **DeepSeek-V4-Flash SM8x (Ampere) support** with 109 comments, indicating strong community demand for Ampere compatibility. Kernel optimizations are landing — notably a **6x Mamba kernel speedup** by fusing 7 kernels into 1. Meanwhile, several correctness bugs affecting production deployments (CUDA graph deadlocks, Triton illegal memory access) are being tracked.

## 2. Releases & Breaking Changes

- **No new releases in the last 24 hours**

- **Upcoming breaking change**: PR #60043 removes `mamba_cache_mode="all"` and deprecates `--mamba-cache-mode`, which now has no effect. Users should remove this flag from their configurations.  
  https://github.com/vllm-project/vllm/pull/60043

## 3. New Model & Hardware Support

| Model / Hardware | Status | Notes |
|-----------------|--------|-------|
| **Clef-Flash** | Added | PR #61308 adds native support via `/v1/systemone`, reusing Qwen3.5 backbone and joint schema head.  
| **DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731** | In progress | SM8x (Ampere A100/A800) support requested — currently blocked on SM90+. Issue #50576 tracking.  
| **DeepSeek-V4.1-Flash** | Bug | Triton `dsv4_topk` MoE routing kernel crashes on H20 with `max_num_seqs > 256` — mitigated by lowering the limit.  
| **GLM-5.3-Flash** | Optimization | Missing sparse-MLA attention path on Ada (RTX 4090); FP8 checkpoint works. Issue #54059.  
| **Qwen3.8-27B (Hybrid)** | Bug | `--mamba-block-size` has no effect after `mamba_cache_mode="all"` removal. Issue #60838.  

**ROCm/AMD**: Active optimization tracks for Qwen3.8-2.4T-A95B and Qwen3.8-Flash-Next on MI355X (gfx950). Issue #57149 and #59575.

## 4. Performance & Optimization

- **Mamba kernel fusion** (PR #58737): Fused 7 kernels into 1 Triton kernel for block-table gather — **6x speedup** on all shapes. Scope: isolated kernel benchmark, not end-to-end throughput.  
  https://github.com/vllm-project/vllm/pull/58737

- **DFlash draft-input padding** (PR #58633): Parallelized DFlash draft-input padding, saving **up to 35.8 µs/step** from one workgroup.  
  https://github.com/vllm-project/vllm/pull/58633

- **DeepSeek-V4 C128 compression** (PR #59709): Fixed compressor skip being incorrectly baked into CUDA graphs on Model Runner V2, fixing decode logprobs drift from prefill.  
  https://github.com/vllm-project/vllm/pull/59709

- **DeepGEMM update** (PR #61149): Bumped to 26/09/30 release with adapted sparse indexer for DSv4/DSv4.1.  
  https://github.com/vllm-project/vllm/pull/61149

- **Long prefill defer mode** (PR #61080): New `--long-prefill-token-threshold-defer` flag (off by default) allows long prefills to take turns instead of being capped, improving fairness under high load.  
  https://github.com/vllm-project/vllm/pull/61080

- **Per-forward NVFP4 MoE** (PR #54617): Dynamic W4A4/W4A16 selection per forward on SM120/SM121 based on token count — switches precision without extra weight copies.  
  https://github.com/vllm-project/vllm/pull/54617

- **Regression**: FlashInfer NVFP4 KV cache causal prefill is **~1.7–1.8x slower** than FP8 on Blackwell (SM120). Issue #50416.  
  https://github.com/vllm-project/vllm/issues/50416

## 5. Stability & Regressions

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| **High** | #60845 | CUDA graphs deadlock with fully-sharded fused-MoE LoRA across TP ranks (Qwen3.5-compatible 35B-A3B MoE, TP=2/4). Reproduces intermittently under concurrent traffic. | Open |
| **High** | #41530 | TP worker hang causes `EngineDeadError` — RPC timeout on DeepSeek-V4-Pro with TP=8, MTP speculative decoding. | Open |
| **Medium** | #56389 | Triton `dsv4_topk` illegal memory access on H20 (SM90) under high concurrency when `max_num_seqs > 256`. Mitigated by setting `max_num_seqs=256`. | Open |
| **Medium** | #48229 | V1 multiprocess engine: sporadic 0.7–2s frozen engine step once per generate batch (absent with `VLLM_ENABLE_V1_MULTIPROCESSING=0`). | Open |
| **Medium** | #49829 | `HIT_PENDING` KV cache lookup has no deadline — stalled write can defer requests until client timeout. | Open |
| **Low** | #60838 | `--mamba-block-size` flag has no effect in any valid configuration. | Open |

## 6. What This Means for Application Developers

- **If you run DeepSeek-V4 models on Ampere (A100/A800)**: You're currently blocked — watch #50576 for progress. Consider using H100/H200 or waiting for SM8x support.

- **If you use LoRA with tensor parallelism**: Avoid `--fully-sharded-loras` with CUDA graphs until #60845 is resolved — the system can deadlock under load.

- **If you run DeepSeek-V4.1-Flash on H20**: Set `max_num_seqs=256` to avoid the Triton MoE kernel crash under high concurrency.

- **If you serve hybrid Mamba models**: Remove `--mamba-cache-mode` from your startup flags — it's now a no-op and will warn.

- **If you need NaN detection**: PR #50283 adds `--enable-nan-fault-tolerance` for production safety — consider enabling it if you serve untrusted or generated model weights.

- **If you serve long prefill workloads**: The new `--long-prefill-token-threshold-defer` mode can improve fairness vs. strictly capping — worth testing for batch serving scenarios.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for SGLang on 2026-10-13.

Key observations from the data:

1. **Releases**: No releases in the last 24 hours

2. **Top Issues by Activity**:
- #23602: DeepSeek V4 Roadmap (CLOSED) - 75 comments - W4A16 support on Hopper, Marlin implementation
- #42752: Flaky tests and CI infrastructure - 49 comments - Tracking CI issues
- #21788: Prefill Context Parallelism (2026 Q3) - 22 comments - Roadmap item, mostly completed
- #39499: SGLang dLLM Serving - 19 comments - Diffusion LLMs roadmap
- #27574: Programmatic KV Cache for Agentic Workloads - 18 comments - RFC, CLOSED
- #30928: Position-Independent KV Cache Reuse - 13 comments - RFC, CLOSED

3. **New PRs** (top 20 by activity):
- Multiple PRs around DeepSeek V4.1 optimization
- LoRA stack (21 parts) - significant feature
- Prefill-Decode disaggregation
- XPU backend support
- GLM-5.3-Flash support
- NPU improvements
- MiniCPM-V 4.7 cookbook

4. **Key themes**:
- DeepSeek V4.1 optimization in progress
- LoRA stack (21-part PR series) - significant
- Prefill-Decode disaggregation roadmap Q4
- Multi-modal VLM work
- NPU/XPU backend improvements
- Speculative decoding fixes
- Diffusion serving

Let me structure this into the required format.</think>

# SGLang Digest — 2026-10-13

## 1. Today's Highlights

SGLang continues its Q4 push on prefilling disaggregation and DeepSeek V4.1 optimization, while a massive 21-part LoRA stack PR series (parts 14-21) reaches the finish line for NVFP4 MoE and CuTeDSL support. The community is also tracking a flaky CI issue affecting PR test runs and has opened RFCs on monokernel frameworks for persistent decoder-layer execution.

## 2. Releases & Breaking Changes

*No releases detected in the last 24 hours.*

## 3. New Model & Hardware Support

- **MiniCPM-V 4.7** — New cookbook added; support landing via `lmsysorg/sglang:dev-minicpm-v-4.7` ([PR #43829](https://github.com/sgl-project/sglang/pull/43829))
- **GLM-5.3-Flash** — Prefill CP + decode/TP colocated support with DFlash2/MTP ([PR #43972](https://github.com/sgl-project/sglang/pull/43972))
- **DeepSeek V4.1** — Encoder-replay SWA pool sizing for DSpark draft stages ([PR #43502](https://github.com/sgl-project/sglang/pull/43502)); small-batch decode fusions now run at TP2 ([PR #43838](https://github.com/sgl-project/sglang/pull/43838))
- **XPU Full Prefill Graph** — Full backend support for prefill capture/replay on Intel XPU ([PR #30980](https://github.com/sgl-project/sglang/pull/30980))
- **NPU Prefill Context Parallelism** — Fixed for generic (non-DSA) Ascend attention backend ([PR #41564](https://github.com/sgl-project/sglang/pull/41564))

## 4. Performance & Optimization

- **LoRA Stack (Parts 14-21)** — Shipped: NVFP4 MoE LoRA on Marlin vendor, CuTeDSL FP8 tile tables for B200/GB300/H200, Triton FP8 MoE LoRA, CuTeDSL BF16 grouped GEMMs with SM90/SM100 support, packed MoE schedules ([PRs #42881–#42888](https://github.com/sgl-project/sglang/pulls?q=is%3Apr+42881..42888))
- **EAGLE Spec-Decode KV Indexing** — Parallelized over token blocks for long-context (90k–170k KV tokens) to reduce per-step overhead ([PR #42803](https://github.com/sgl-project/sglang/pull/42803))
- **Heterogeneous TP for Hybrid SWA** — Enables prefill TP1 + decode TP4 for non-MLA sliding-window models ([PR #40909](https://github.com/sgl-project/sglang/pull/40909))
- **FlashInfer Startup Tuning** — Now includes default tactic (`-1`) in candidate selection for faster profiling ([PR #43927](https://github.com/sgl-project/sglang/pull/43927))

## 5. Stability & Regressions

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| **High** | Flaky tests / CI infrastructure failures | [Open #42752](https://github.com/sgl-project/sglang/issues/42752) | 49 comments; tracked during PR babysitting |
| **High** | Speculative decoding crash on non-greedy requests (FlashInfer JIT fails) | [Open #43412](https://github.com/sgl-project/sglang/issues/43412) | Bundled CCCL vs pip cu13 toolkit conflict |
| **Medium** | Runtime role switch crash (decode → prefill → decode) | [Open #43557](https://github.com/sgl-project/sglang/issues/43557) | Illegal memory access with `--enable-pd-role-switch` |
| **Medium** | GLM-5.3 + DFLASH speculative decoding repetition loops | [Open #40843](https://github.com/sgl-project/sglang/issues/40843) | Severe output degeneration |
| **Medium** | DSV4.1 compact_attention_hip import failure on gfx950 | [Closed #43765](https://github.com/sgl-project/sglang/issues/43765) | aiter module removed |

## 6. What This Means for Application Developers

- **Agent/RAG workloads**: Position-independent KV cache reuse RFCs (#30928, #27574) closed — programmatic KV cache for agentic inference is advancing; expect improved prefix-sharing across variable-offset contexts in coming quarters
- **LoRA fine-tuning**: The complete 21-part LoRA runtime stack enables NVFP4 MoE LoRA on Blackwell and FP8 on H200; if you're deploying LoRA on recent NVIDIA hardware, the new Marlin and Triton vendors should improve throughput
- **Multi-modal**: Token-space processing for VLMs is now enabled at startup with parity testing ([PR #43964](https://github.com/sgl-project/sglang/pull/43964)) — Qwen VLM users can test the new path
- **Serving at scale**: Prefill-decode disaggregation is now the default for large-scale deployments; Q4 roadmap (#43699) targets expanded model family support and speculative decoding integration
- **Benchmarking**: Note that `--request-rate` in bench_serving is falling behind schedule ([issue #43930](https://github.com/sgl-project/sglang/issues/43930)) — reported achieved rates may be below target; this is a known issue

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data for llama.cpp and create a structured digest for 2026-10-13.

Let me go through the key information:

## Latest Releases (commits in last 24h)
- b11577: model: fix vllm d3 multi seq case (#30408)
- b11576: graph: pad the KV dimension of the no-cache attention to 256 (#30416)
- b11575: metal: fix metal tensor kernel_mul_mm error for large tensor (#28748)
- b11574: hexagon: optimize CPY/CONCAT — round 3, short-rows edition (#30341)
- b11573: vulkan: pack FMA for f16 accumulation, no dot product op (#29877)
- b11572: model: support vllm d3 models (#30383)
- b11571: model: support vllm decision 2 model (#30378)
- b11570: tests : link each test against only the libraries it uses (#30299)
- b11569: metal : fix mul_mat_id with duplicate ids (#30373)
- b11567: llama : report compute graph reallocations during inference (#30329)

## Key Issues (top ones with most comments)
- #19466: KV cache saving doesn't work for vision-enabled models (CLOSED, 46 comments)
- #15012: Qwen3-Coder Tool Call Parser (CLOSED, 43 comments)
- #25618: Speculative decoding diverges on quantized targets (OPEN, 30 comments)
- #27428: draft-mtp halves prompt processing on multi-GPU (OPEN, 26 comments)
- #29949: MoE expert cache with GPU-resident LRU feature request (OPEN, 13 comments)


- #27638: Vulkan/ANV Flash Attention fallback issues (OPEN, 11 comments)
- #27330: CUDA graphs hang on RTX 5090 Laptop (OPEN, 10 comments)

## Pull Requests
- #28967: Add nccl support for multi-node tensor parallelism (big one!)
- #29910: ggml-cuda: fix a mountain of VGPR spills on Q2_K
- #30431: vulkan: Define the shader count for Intel Arc Pro B65
- #29882: vulkan: rms norm optimization using subgroup reductions
- #30430: sycl

I notice several performance and backend-specific issues emerging. Vulkan and CUDA backends are showing interesting optimization opportunities, with particular attention needed to fallback mechanisms and memory management. The multi-node tensor parallelism support in PR #28967 appears to be a significant architectural enhancement for distributed computing scenarios.</think>

# llama.cpp Digest — 2026-10-13

## 1. Today's Highlights

The project continues expanding VLLM model compatibility with VLLM Decision 2 and D3 model support landing, alongside a critical Metal kernel fix for large tensor operations. Notable infrastructure work includes Vulkan FMA packing optimizations and Intel Arc Pro B65 shader definitions. The community is actively investigating speculative decoding correctness issues on quantized targets.

## 2. Releases & Breaking Changes

No new releases tagged in the last 24 hours. The following commits represent breaking/internal API changes:

- **b11567**: Added optional `ggml_backend_sched_realloc_callback` for reporting compute graph buffer reallocations during inference — enables diagnostic tooling for memory management issues. [[GitHub](https://github.com/ggml-org/llama.cpp/commit/b11567)]

- **b11570**: Test linking refactored — `llama_build()` and `llama_build_and_test()` now accept a `LINK` keyword to declare library dependencies, reducing build overhead for ggml-only tests. [[GitHub](https://github.com/ggml-org/llama.cpp/commit/b11570)]

## 3. New Model & Hardware Support

- **VLLM Decision 2 & D3 Models**: Commits b11571 and b11572 add support for VLLM Decision 2 and D3 model architectures. [[#30378](https://github.com/ggml-org/llama.cpp/pull/30378)] [[#30383](https://github.com/ggml-org/llama.cpp/pull/30383)]

- **Intel Arc Pro B65**: PR #30431 defines shader counts for the Intel Arc Pro B65 (BMG G31 chip). [[#30431](https://github.com/ggml-org/llama.cpp/pull/30431)]

- **Hexagon Q1_0 Support**: PR #30122 adds native Q1_0 quantization support for the Hexagon backend via HVX. [[#30122](https://github.com/ggml-org/llama.cpp/pull/30122)]

## 4. Performance & Optimization

- **Vulkan FMA Packing**: Commit b11573 implements packed FMA for f16 accumulation without dot product operations, improving efficiency on AMD/Intel GPUs. [[#29877](https://github.com/ggml-org/llama.cpp/pull/29877)]

- **Vulkan RMS Norm**: PR #29882 replaces workgroup reductions with two-stage subgroup reductions, showing measurable gains on Intel B70 Arc Pro, Nvidia RTX 4060 Ti, and AMD 7900 XT. [[#29882](https://github.com/ggml-org/llama.cpp/pull/29882)]

- **CUDA Q2_K VGPR Spills**: PR #29910 addresses massive VGPR spills on Q2_K quantization for AMD GPUs (gfx906/MI50), improving memory efficiency. [[#29910](https://github.com/ggml-org/llama.cpp/pull/29910)]

- **AMX Q4_K Decode**: PR #30429 implements a faster AMX Q4_K decode path for CPUs, achieving +13% throughput by walking groups across columns. [[#30429](https://github.com/ggml-org/llama.cpp/pull/30429)]

- **No-Cache Attention KV Padding**: Commit b11576 pads the KV dimension to 256 for no-cache attention paths, resolving CUDA kernel failures with head size 512. [[#30416](https://github.com/ggml-org/llama.cpp/pull/30416)]

- **Hexagon CPY/CONCAT Optimization**: Commit b11574 introduces threaded DMA/HVX gather-row helpers for short-row operations, reducing DMA-latency bound scenarios. [[#30341](https://github.com/ggml-org/llama.cpp/pull/30341)]

- **Multi-Node Tensor Parallelism**: PR #28967 implements NCCL-based collective operations for multi-node tensor parallelism via RPC server. [[#28967](https://github.com/ggml-org/llama.cpp/pull/28967)]

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Speculative decoding diverges from vanilla on quantized targets (Q4_K_M) | OPEN [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | — |
| **High** | draft-mtp halves prompt processing on multi-GPU layer split | OPEN [#27428](https://github.com/ggml-org/llama.cpp/issues/27428) | — |
| **Medium** | Vulkan Flash Attention fallback to SCALAR causes O(N²) degradation | OPEN [#27638](https://github.com/ggml-org/llama.cpp/issues/27638) | — |
| **Medium** | CUDA graphs hang on RTX 5090 Laptop (sm_120) — `GGML_CUDA_DISABLE_GRAPHS=1` workaround | OPEN [#27330](https://github.com/ggml-org/llama.cpp/issues/27330) | — |
| **Medium** | MUL_MAT_ID loses rows when expert id appears more than once in token row | OPEN [#29821](https://github.com/ggml-org/llama.cpp/issues/29821) | — |
| **Fixed** | Metal tensor kernel_mul_mm error for large tensor | Merged [#28748](https://github.com/ggml-org/llama.cpp/pull/28748) | ✅ |
| **Fixed** | Metal mul_mat_id crashes with duplicate IDs | Merged [#30373](https://github.com/ggml-org/llama.cpp/pull/30373) | ✅ |

## 6. What This Means for Application Developers

- **Vision model users**: KV cache saving still has issues with vision-enabled models per issue #19466 — consider this limitation when building retrieval-augmented workflows.

- **Quantized model inference**: If using speculative decoding with Q4_K_M or similar quantized targets, be aware of potential output divergence from non-speculative runs (issue #25618).

- **Multi-GPU deployment**: Multi-GPU layer-split deployments with MTP draft models may experience ~50% prompt processing slowdown (issue #27428); single-GPU setups are unaffected.

- **Vulkan users**: The FMA packing and RMS norm optimizations should improve throughput on AMD and Intel GPUs; monitor for regressions on the Flash Attention fallback path.

- **Memory-constrained inference**: The new compute graph reallocation callback (b11567) enables better observability into memory usage patterns — consider integrating this for production monitoring.

- **Apple Silicon**: The Metal kernel fix for large tensor operations (b11575) resolves crashes on certain model configurations; update to latest if encountering Metal errors.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to generate an Ollama digest for 2026-10-13 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me go through the data:

**Releases:**
- v0.40.4-rc0: v0.40.4 - with changes to llama.cpp, server manifest reuse, and MLX

**Issues (28 total, showing key ones):**
- #2519: Windows defender false positive (CLOSED)
- #18796: Bug - fails to run on 2nd 'ollama run' (OPEN)
- #12362: Bug - JSON reply schema ignored by Cloud model (OPEN)
- #18642: Bug - CUDA illegal memory access on RTX 5090 (OPEN)
- #13388: Closed - Deepseek R1 system messages (CLOSED)
- #18507: Closed - Windows tray app issue (CLOSED)
- #18870: Closed - manifests-v2 bug (CLOSED)
- #18846: Closed - MLX Maximum threads error (CLOSED)
- #18698: Feature request - K2 Horizon models (OPEN)
- #18557: OPEN - Vulkan/AMD RX 6800 XT access violation
- #18944: Bug - Models can't use tool-calls when format is set to json (OPEN)
- #18950: Bug - Scheduler reloads model when shift differs (OPEN)
- #18853: Bug - Cloud model 500 error with large images (OPEN)
- #18421: Bug - Qwen3-Coder tool parser number arguments (OPEN)
- #18712: Bug - Windows auto-update ggml-cuda.dll issue (OPEN)
- #18952: Feature request - Systemprompt KV cache warm-up (OPEN)


- #18856: Closed - MLX runner panic (CLOSED)
- #18954: Bug - Windows GPU discovery console windows (OPEN)
- #18921: Bug - ollama list empty on NTFS mount point (OPEN)
- #18521: Closed - Prism ternary GGUF support (CLOSED)
- #18968: Bug - Ollama performs 25-30% worse (OPEN)
- #18958: Feature request - size issue (OPEN)
- #18620: Closed - MLX tool call memory leak (CLOSED)
- #18885: Bug - MLX runner panic (OPEN)

I'm tracking performance regressions and compatibility issues. The MLX backend continues to have runner panics and memory management problems, while Windows environments show multiple issues with GPU discovery and mount points. Performance degradation of 25-30% in the latest version is concerning, and there are ongoing feature requests around model architecture support and system optimization.</think>

# Ollama Digest — 2026-10-13

## Today's Highlights

Ollama shipped **v0.40.4-rc0** with llama.cpp updates for decision models and EmbeddingGemma 2, plus server-side manifest caching improvements. The community reported a notable **25-30% performance regression** across all models in v0.40.x compared to v0.40.1, while MLX continues to face threadgroup allocation panics on Apple Silicon with larger attention head dimensions.

---

## Releases & Breaking Changes

| Version | Change | Links |
|---------|--------|-------|
| **v0.40.4-rc0** | llama.cpp updated to b11521 for decision models and EmbeddingGemma 2; server now reuses verified manifests and loaded models in inference routes | [PR #18917](https://github.com/ollama/ollama/pull/18917), [PR #18947](https://github.com/ollama/ollama/pull/18947) |

**Migration notes:** None critical this cycle.

---

## New Model & Hardware Support

- **K2 Horizon models** — Feature request for MBZUAI IFM architecture ("k2-horizon"), sizes 0.9B–36B MoE (GGUF support requested) | [#18698](https://github.com/ollama/ollama/issues/18698)
- **Prism ternary GGUFs** — Import support added for PQ2_0 / PTQ1_0 quantization (type 142/143) | [#18521](https://github.com/ollama/ollama/issues/18521) (CLOSED)
- **Decision models** — CLI now supports decision model execution via `ollama run` | [PR #18962](https://github.com/ollama/ollama/pull/18962)
- **Cohere MoE architecture** — Parser now processes Cohere block markers in order | [PR #18965](https://github.com/ollama/ollama/pull/18965)

---

## Performance & Optimization

| Area | Detail | Links |
|------|--------|-------|
| **Performance regression** | v0.40.x delivers 25–30% lower tokens/second vs v0.40.1 across all models | [#18968](https://github.com/ollama/ollama/issues/18968) |
| **Prompt cache timing fix** | `PromptEvalDuration` now rates by evaluated tokens only, fixing inflated prompt_per_second on warm cache | [PR #18964](https://github.com/ollama/ollama/pull/18964) |
| **VRAM prediction fix** | GraphSize KV accounting mirrored in `PredictServerVRAM` to resolve Qwen loading issues | [PR #17615](https://github.com/ollama/ollama/pull/17615) |
| **KV cache warm-up** | Feature request for systemprompt KV pre-warming to reduce first-response latency | [#18952](https://github.com/ollama/ollama/issues/18952) |
| **MLX memory leak** | Tool calls leak ~0.43 GiB outside prefix-cache budget (0.34.x) | [#18620](https://github.com/ollama/ollama/issues/18620) |

---

## Stability & Regressions

### Critical
| Issue | Description | Status |
|-------|-------------|--------|
| **RTX 5090 CUDA crash** | Illegal memory access (MUL_MAT) on Cohere MoE architecture, Windows | [#18642](https://github.com/ollama/ollama/issues/18642) |
| **Vulkan/AMD RX 6800 XT** | Access violation (0xc0000005) loading any model on Vulkan backend | [#18557](https://github.com/ollama/ollama/issues/18557) |
| **Windows GPU detection failure** | Auto-update leaves `ggml-cuda.dll` as `.tmp`, causing 0 B VRAM / CPU fallback | [#18712](https://github.com/ollama/ollama/issues/18712) |

### High
| Issue | Description | Status |
|-------|-------------|--------|
| **MLX threadgroup panic** | Maximum threads exceeded (896 vs 960/1024) on M1/M2 Max with Qwen3.8/Gemma4 | [#18846](https://github.com/ollama/ollama/issues/18846), [#18940](https://github.com/ollama/ollama/issues/18940), [#18966](https://github.com/ollama/ollama/issues/18966), [#18885](https://github.com/ollama/ollama/issues/18885) |
| **JSON format + tool calls** | Models unable to use tool-calls when `format: "json"` is set | [#18944](https://github.com/ollama/ollama/issues/18944) |
| **2nd ollama run hangs** | Stuck with no output on Raspberry Pi 5 / Debian 13 | [#18796](https://github.com/ollama/ollama/issues/18796) |

### Medium
| Issue | Description | Status |
|-------|-------------|--------|
| **Scheduler reload on shift** | Model reloads when request `shift` differs from loaded runner | [#18950](https://github.com/ollama/ollama/issues/18950) |
| **Qwen3-Coder number parsing** | Tool parser corrupts number arguments outside int64 range (e.g., `1e20`) | [#18421](https://github.com/ollama/ollama/issues/18421) |
| **Windows NTFS mount** | `ollama list` returns empty when model path crosses volume mount point | [#18921](https://github.com/ollama/ollama/issues/18921) — fix in [PR #18949](https://github.com/ollama/ollama/pull/18949) |
| **Windows console flash** | GPU discovery subprocesses flash console windows | [#18954](https://github.com/ollama/ollama/issues/18954) |

### Low / Resolved
- **MLX runner panic** with `qwen3.6:35b-mlx` — regression from 0.35.0 | [#18856](https://github.com/ollama/ollama/issues/18856) (CLOSED)
- **EmbeddingGemma 2** 500 error with small `num_ctx` — fixed in [PR #18973](https://github.com/ollama/ollama/pull/18973)
- **MLX decision model** JSON state scoring — fixed in [PR #18974](https://github.com/ollama/ollama/pull/18974)

---

## What This Means for Application Developers

1. **Avoid v0.40.x for production throughput** — The 25-30% performance drop is significant. If stability is prioritized, stick with v0.40.1 or evaluate the fix in upcoming releases.

2. **MLX users on Apple Silicon: watch your head dimensions** — Models with `head_dim = 256` (Qwen3.8, Gemma4) trigger threadgroup panics on M1/M2 Max. Consider downgrading to 0.35.x or waiting for a fix.

3. **Tool calls + JSON format are incompatible** — If your workflow requires both structured JSON output and function calling, you'll need a workaround (e.g., parse JSON from unconstrained output, or skip the `format: "json"` flag).

4. **Windows GPU detection fragile after auto-update** — If Ollama suddenly falls back to CPU, check for leftover `.tmp` CUDA DLLs in the install directory.

5. **New in 0.40.4-rc**: Manifest caching should improve cold-start latency on repeated model loads.

---

*Generated from GitHub data — ollama/ollama @ 2026-10-13*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-10-13 based on the provided GitHub data. Let me analyze the data and create a structured digest with the following sections:

1. Today's Highlights
2. Releases & Breaking Changes
3. New Model & Hardware Support
4. Performance & Optimization
5. Stability & Regressions
6. What This Means for Application Developers

Let me analyze the issues and PRs:

**Latest Releases:** None in the last 24h

**Notable Issues:**

1. #15861 - Feature request for Vector Store API routes - needs list/delete vector store files endpoints
2. #34614 - Redis cache fails with SSL error in v1.93.0 - TypeError with ssl_check_hostname
3. #24483 - Minimax API error with Authorization header
4. #44869 - Complexity router replaces max_tokens with tier ceiling instead of clamping
5. #45944 - A2AConfig silently drops temperature, max_tokens and top_p
6. #41544 - Bedrock audio transcription fails with HTTP 400 validation error
7. #25611 - Feature request to run proxy as CLI tool without containers
8. #26081 - Pass-through endpoint registry grows unbounded causing CPU 100%
9. #29407 - Feature to bump OpenTelemetry SDK from 1.28.0 to 1.40
10. #30725 - Bedrock pass-through endpoint sometimes doesn't send cost
11. #38663 - Fix for Gemini 3 models temperature injection
12. #45411 - Claude Code per-turn-control filtered for bedrock
13. #31284 - SSE error codes outside HTTP range silently dropped
14. #33074 - Budget_fallbacks column missing in v1.92


15. #45991 - Gemini tool-use prompt tokens added but not billed
16. #41226 - Proxy-admin JWT bypasses personal max_budget
17. #45333 - Gemini 3 always injects temperature=1.0
18. #30081 - Deployment custom pricing ignored after model-cost-map reload

**Notable PRs:**

1. #46063 - Fix Anthropic 503 as 529 overloaded_error
2. #41691 - Store batch JSONL line items in callbacks
3. #42079 - Return W3C traceresponse header on traced responses
4. #45600 - Anthropic safeguard with classifier

I notice several critical financial and security issues emerging. The project is addressing billing complexities with Gemini tool prompts and custom pricing, while also tackling significant security vulnerabilities in JWT authentication and error handling. OpenTelemetry SDK updates and performance optimizations for pass-through endpoints are also in progress, indicating a focus on improving overall system reliability and monitoring capabilities.

The latest developments suggest ongoing refinements in error management, cost tracking, and system responsiveness across various AI model integrations.</think>

# LiteLLM Digest — 2026-10-13

## Today's Highlights

The LiteLLM project is seeing significant activity around billing accuracy fixes and cost parity testing. Multiple PRs address context cache token billing for Gemini/Vertex and add comprehensive cost verification for GPT-6 and Claude 5 models across different API bridges. Meanwhile, the community continues to surface issues with Redis SSL configuration in v1.93.0 and parameter handling inconsistencies across LLM providers.

---

## Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| No releases | No new releases in the last 24 hours | — |

---

## New Model & Hardware Support

| Model/Feature | Details | Link |
|---------------|---------|------|
| AWS Bedrock autodiscovery | Feature proposed to enable automatic discovery of Bedrock models without manual configuration | [#43568](https://github.com/BerriAI/litellm/issues/43568) |
| Azure GPT-6 cost parity | Added cost verification test cases for `/v1/messages` → Responses bridge across all tier 1 GPT-6 models | [#46139](https://github.com/BerriAI/litellm/pull/46139), [#46143](https://github.com/BerriAI/litellm/pull/46143) |
| Claude 5 /v1/responses bridge | Added 6 cost parity test pairs for Claude 5 models through Responses API bridge | [#46140](https://github.com/BerriAI/litellm/pull/46140) |
| Bedrock Converse Claude 5 | Added 7 cost parity test cases for Bedrock Converse route | [#46141](https://github.com/BerriAI/litellm/pull/46141) |

---

## Performance & Optimization

| Area | Change | Link |
|------|--------|------|
| **MCP cancellation** | PR adds prompt progress forwarding and upstream work cancellation handling | [#46134](https://github.com/BerriAI/litellm/pull/46134) |
| **Prometheus multiprocess** | Fix ensures each proxy boot gets its own `PROMETHEUS_MULTIPROC_DIR` to prevent counter loss when multiple proxies share a host | [#42660](https://github.com/BerriAI/litellm/pull/42660) |
| **Redis cache** | **REGRESSION**: v1.93.0 fails with `TypeError: AbstractConnection.__init__() got an unexpected keyword argument 'ssl_check_hostname'` — Redis caching and budget counters broken | [#34614](https://github.com/BerriAI/litellm/issues/34614) |
| **Pass-through registry** | CPU climbs to 100% when using pass-through endpoints with `store_model_in_db: true` — registry grows unbounded | [#26081](https://github.com/BerriAI/litellm/issues/26081) |
| **Websearch slot leak** | Streaming `/v1/messages` requests with `web_search` tool permanently consume one `max_parallel_requests` slot — never released after agentic loop | [#46093](https://github.com/BerriAI/litellm/issues/46093) |

---

## Stability & Regressions

### Critical

| Issue | Severity | Status | Link |
|-------|----------|--------|------|
| Redis cache broken in v1.93.0 (SSL hostname error) | 🔴 Critical | Open | [#34614](https://github.com/BerriAI/litellm/issues/34614) |
| Proxy-admin JWT bypasses personal `max_budget` | 🔴 Critical | Closed (fix pending) | [#41226](https://github.com/BerriAI/litellm/issues/41226) |

### High

| Issue | Severity | Status | Link |
|-------|----------|--------|------|
| Bedrock audio transcription fails HTTP 400 (system message incompatible with audio blocks) | 🟠 High | Open | [#41544](https://github.com/BerriAI/litellm/issues/41544) |
| Streaming 500s with NoneType error when backend omits `choices[].index` | 🟠 High | Open | [#46047](https://github.com/BerriAI/litellm/issues/46047) |
| SSE error codes outside HTTP range (100-599) silently dropped — router fallback never triggers | 🟠 High | Open | [#31284](https://github.com/BerriAI/litellm/issues/31284) |

### Medium

| Issue | Severity | Status | Link |
|-------|----------|--------|------|
| A2AConfig silently drops `temperature`, `max_tokens`, `top_p` | 🟡 Medium | Open | [#45944](https://github.com/BerriAI/litellm/issues/45944) |
| Gemini tool-use prompt tokens added to `prompt_tokens` but not billed | 🟡 Medium | Closed | [#45991](https://github.com/BerriAI/litellm/issues/45991) |
| Gemini 3 models always inject `temperature=1.0` — conflicts with Google's upcoming model restrictions | 🟡 Medium | Closed (fix pending) | [#45333](https://github.com/BerriAI/litellm/issues/45333), [#38663](https://github.com/BerriAI/litellm/issues/38663) |
| Custom deployment pricing ignored after model-cost-map reload | 🟡 Medium | Open | [#30081](https://github.com/BerriAI/litellm/issues/30081) |
| Claude Code `per-turn-control` filtered for Bedrock but Bedrock supports it | 🟡 Medium | Open | [#45411](https://github.com/BerriAI/litellm/issues/45411) |

---

## What This Means for Application Developers

1. **Billing accuracy is improving**: The team is actively adding cost parity tests for GPT-6 and Claude 5 across all API bridges. If you use `/v1/responses` or `/v1/messages` endpoints with Azure or Bedrock, billing should become more predictable.

2. **Avoid v1.93.0 for Redis caching**: If you rely on Redis for caching or budget counters, stay on an earlier version until the SSL hostname error is resolved.

3. **Watch your Bedrock audio use**: Audio transcription through Bedrock is currently broken with a 400 validation error when system messages are present. Consider avoiding system messages in audio transcription calls until fixed.

4. **Complexity router behavior change**: The router now replaces (rather than clamps) the caller's `max_tokens` with the tier ceiling. If you depend on exact token limits, verify your configuration.

5. **Test flakiness**: The MCP tool search test fails ~25% of runs on `main`. CI runs involving this test may be unreliable.

6. **OpenTelemetry upgrade pending**: A PR is in progress to bump OpenTelemetry SDK from 1.28.0 to 1.40, which should resolve dependency conflicts for users with newer observability stacks.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the provided GitHub data for Unsloth and create a structured digest for 2026-10-13.

Key observations:

1. **Latest Releases**: v0.1.906-beta with Browser Use + Qwen-Image-2.1-Turbo
   - Browser use: Models can now use browser - open pages, read, click, type, scroll
   - Qwen-Image-2.1-Turbo: Images in just 8 steps
   - Text-diffusion LLM training
   - Faster MoE GGUFs
   - Speculative decoding on M

2. **Issues** - Top issues by comment count:
   - #3071: UNSLOTH_RETURN_LOGITS env var bug (22 comments) - CLOSED
   - #2937: OOM on Qwen2.5 72B 4bit with 32k context (7 comments) - CLOSED
   - #12845: Desktop AppImage window resize problem (6 comments) - OPEN
   - #8532: Ling 3.0 support request (6 comments) - OPEN
   - #8488: Multiple servers with different models (5 comments) - CLOSED
   - #6958: LoftQ training bug (5 comments) - CLOSED
   - #8594: macOS text encoding errors (5 comments) - CLOSED
   - #5919: Custom architecture fine-tuning (5 comments) - CLOSED
   - #2963: vllm_process failed to load (5 comments) - CLOSED

3. **Pull Requests** - Many Studio-related PRs:
   - #13505: Browser agent can click at point, move mouse, drag
   - #13517: Audio model selector fixes
   - #13489: Stop dropping page text after menu
   - #13516: LTX-2.5 fp8/int8 loads from hosted pre-quantized
   - #13514: Transcribe loaded state fix
   - #13518: Library cards UI improvements
   - #13519: Audio.cpp umbrella models
   - #13515: Audio.cpp partial downloads fix
   - #13486: HuggingFace login token handling
   - #13435: --models-dir flag for local models
   - #6987: Kaggle notebook support
   - #13488: Docker UNSLOTH_STUDIO_KEEP_LEGACY fix
   - #13507: LM Studio, Ollama local models support
   - #13500: LTX-2.5 VAE fixture
   - #13502: Chat compaction divider
   - #13509: Library card hover improvements
   - #13493: Composer file support
   - #13438: vLLM device cache release fix
   - #13497: llama.cpp updates card

Now I'll organize this into the requested sections.</think>

# Unsloth Digest — 2026-10-13

## 1. Today's Highlights

The v0.1.906-beta release introduces **Browser Use**, enabling models to autonomously navigate the web — opening pages, reading content, clicking, typing, and scrolling. Alongside this, **Qwen-Image-2.1-Turbo** arrives, generating images in just 8 steps. The Studio UI continues rapid iteration with fixes for audio model selectors, local model management (LM Studio, Ollama), and improved chat compaction UX.

---

## 2. Releases & Breaking Changes

| Version | Key Changes |
|---------|-------------|
| **v0.1.906-beta** | Browser Use for autonomous web navigation; Qwen-Image-2.1-Turbo (8-step image generation); text-diffusion LLM training; faster MoE GGUFs; speculative decoding on M-series Macs |

**Note:** No breaking changes or migration flags reported in the last 24h.

---

## 3. New Model & Hardware Support

| Model / Hardware | Details |
|------------------|---------|
| **Qwen-Image-2.1-Turbo** | Added to Unsloth — 8-step image generation |
| **LTX-2.5 (fp8/int8)** | Now loads from pre-quantized hosted DiT (`unsloth/LTX-2.5-FP8`) instead of quantizing 38GB bf16 at load time |
| **Ling 3.0** | Feature request filed for Studio support — [#8532](https://github.com/unslothai/unsloth/issues/8532) |
| **audio-cpp umbrella models** | Now visible in On Device audio pages (e.g., Qwen3-TTS-12Hz-0.6B-Base-GGUF) — fixed in [#13519](https://github.com/unslothai/unsloth/pull/13519) |
| **M-series Macs** | Speculative decoding now supported |

---

## 4. Performance & Optimization

| Area | Change |
|------|--------|
| **LTX-2.5 loading** | Pre-quantized DiT loads avoid on-the-fly 38GB bf16 quantization — significant startup latency reduction |
| **Browser agent** | New `browser_click` at x/y coordinates, mouse movement, drag, and JS execution — extends beyond element-ref-only actions — [#13505](https://github.com/unslothai/unsloth/pull/13505) |
| **vLLM resume/teardown** | Fixed device cache release on NPU/XPU (previously silently no-op off CUDA) — [#13438](https://github.com/unslothai/unsloth/pull/13438) |
| **Composer** | Now accepts README-style files, dotfiles, Office templates, and media — [#13493](https://github.com/unslothai/unsloth/pull/13493) |

---

## 5. Stability & Regressions

| Issue | Severity | Status |
|-------|----------|--------|
| **#3071**: `UNSLOTH_RETURN_LOGITS` env var resets to "0" during training | **High** — blocks custom metric validation on Gemma 3 | CLOSED (fixed pending confirmation) |
| **#2937**: OOM on Qwen2.5 72B 4bit @ 32k context | **High** — works at 24k but fails at 32k despite claimed 80k+ support | CLOSED |
| **#12845**: Desktop AppImage window resize broken on Arch/GNOME/Wayland | **Medium** — UI usability issue | OPEN |
| **#13473**: Drag & drop stopped working in Desktop | **Medium** — UX regression | OPEN |
| **#13328**: Diffusion GGUF misclassified as text-generation, hidden from Images page | **Low** — UI misrouting | CLOSED |
| **#2760**: PY_SSIZE_T_CLEAN macro error on RTX 5090 (Blackwell) | **Medium** — compatibility with new hardware | CLOSED |

---

## 6. What This Means for Application Developers

- **Browser automation** is now a first-class feature — agents can interact with live web pages directly from Studio, enabling end-to-end web workflows without external tooling.
- **LTX-2.5** quantization improvements mean faster cold starts for video generation pipelines — consider pre-quantized variants for production deployments.
- **Local model management** expands: Studio now handles LM Studio, Ollama, and custom folders with full reveal/delete actions — useful for multi-tenant or air-gapped environments.
- **Token handling fix** — passing `token=` to `from_pretrained` no longer clobbers the saved HuggingFace login, preserving push permissions for gated repos.
- **Docker flag** — `UNSLOTH_STUDIO_KEEP_LEGACY=0` now works through `docker/run.sh` for clean container migrations.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*