# AI Infrastructure Digest 2026-10-08

> Generated: 2026-10-08 02:13 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to create a cross-project comparison report covering vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me organize the data from each digest and create a comprehensive comparison.

Let me structure this:

1. **Ecosystem Overview** - 3-5 sentences on the overall AI infrastructure landscape
2. **Activity Comparison** - Table with Issues, PRs, Release status
3. **Model Support Race** - Which projects support which new models
4. **Performance Frontier** - Where optimization efforts are concentrated
5. **Layer Positioning** - How projects differ by layer
6. **Trend Signals** - Industry trends and what to watch

Let me compile the data:

**vLLM (2026-10-08)**:
- Releases: None in last 24h
- Issues: Multiple performance regressions (GB10 ~16%, H100 ~3.3x, SM12x ~15%, RDNA4 5-24%)
- PRs: CPU cgroup headroom, Kimi-K3 Cake FlashInfer, ShortConv drafter state, hybrid GDN prefix-cache + MTP, ROCm sleep-mode cuMem, batch upload 2xx handling
- Key models: Qwen3.8-27B NVFP4 (prefix caching bug), Kimi-K3, DeepSeek-V4

**SGLang (2026-10-08)**:
- Releases: None in last 24h
- Issues: Hybrid-SWA + radix cache livelock, DFLASH/DSPARK OOM, GLM-5.3-Flash crashes, GLM-5.3-Flash-NVFP4 logprobs drift, DeepSeek-V4 FP8 memory
- PRs: Apple Silicon redesign (RFC), Kimi-K3 DCP on NPU, DeepSeek V4.1 optimizations, long prompt encoding parallelization


- Key models: Apple Silicon, DeepSeek V4.1, Kimi-K3, GLM-5.3-Flash, Clef decision models

**llama.cpp (2026-10-08)**:
- Releases: 10 releases in last 24h (b11468-b11481)
- Issues: Qwen3.8 flash MTP assert, OpenVINO crashes, Blackwell CUDA crash, Vulkan VAE garbling
- PRs: Cohere2 vision, GLM5-Next MTP, MoE GPU expert cache, Metal optimizations, MUSA support
- Key models: Cohere2 vision, GLM5-Next, various quantization support

**Ollama (2026-10-08)**:
- Releases: v0.40.1
- Issues: MLX crashes (regression from 0.35.0), Windows model pull failures, clef model errors
- PRs: Saina Helm, LLM-jp-4 harmony, Gemma4 renderer fix, embedding load optimization
- Key models: Saina Helm, LLM-jp-4, Gemma4

**LiteLLM (2026-10-08)**:
- Releases: v1.104.1 (stable), v1.105.0-rc.2, v1.106.0-dev.1
- Issues: Enterprise feature errors, GPT-5 thinking display, streaming KeyError
- PRs: AES-256-GCM encryption, Microsoft 365 Copilot, Databricks ai_decide, input_audio billing, retry-after handling
- Key models: Microsoft 365 Copilot, Databricks ai_decide

**Unsloth (2026-10-08)**:
- Releases: v0.1.904-beta
- Issues: Qwen Image 2.1 memory issues, Bonsai model loading failures, CPU spinning
- PRs: Decision model training, ComfyUI support, MoE inference optimization, llama-server embeddings
- Key models: Decision models, ComfyUI models

Now I'll build out the comparison sections with this data.</think>

# Cross-Project Comparison: AI Inference Stack — 2026-10-08

## 1. Ecosystem Overview

Today's activity reflects a **maturing inference stack** where projects are differentiating by deployment layer and hardware target. vLLM and SGLang push the frontier on Blackwell/Grace Blackwell GPU performance while battling regression bugs; llama.cpp expands quantization support across architectures including MUSA and Hexagon; Ollama targets ease-of-use but struggles with MLX regression; LiteLLM strengthens its gateway position with encryption hardening and multi-provider aggregation; Unsloth democratizes fine-tuning with decision model training. The concurrent focus on prefix caching correctness (vLLM/SGLang), encryption defaults (LiteLLM), and training accessibility (Unsloth) signals a landscape maturing toward production-hardened serving rather than proof-of-concept speed.

---

## 2. Activity Comparison

| Project | Open Issues | Recent PRs | Releases (24h) |
|---------|-------------|------------|----------------|
| **vLLM** | 8 tracked regressions | 10+ landed/active | None |
| **SGLang** | 9 critical/medium | 7+ in progress | None |
| **llama.cpp** | 10+ | 20+ | **10 releases** (b11468–b11481) |
| **Ollama** | 7 | 5+ | **v0.40.1** |
| **LiteLLM** | 8 (3 fixed today) | 15+ | **v1.104.1** (stable), v1.105.0-rc.2 |
| **Unsloth** | 17 | 10+ | **v0.1.904-beta** |

**Observations:**
- **llama.cpp** leads release cadence (10 tags in 24h) — rapid quantization and kernel iteration
- **vLLM/SGLang** show high regression load — Blackwell/AMD ROCm bring new bug surfaces
- **LiteLLM** shows strongest issue closure rate — 3 issues fixed today

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek V4 / V4.1** | ✓ (FP8 paged MQA regression) | ✓ (mHC TP, prefill opt) | — | — | — | — |
| **Qwen 3.8 (27B NVFP4)** | ✓ (prefix cache bug) | — | — | — | — | — |
| **Kimi-K3** | ✓ (Cake FlashInfer opt-in) | ✓ (DCP on NPU) | — | — | — | — |
| **GLM-5.3-Flash** | — | ✓ (crashes on startup) | — | — | — | — |
| **GLM5-Next MTP** | — | — | ✓ (b11474) | — | — | — |
| **Cohere2 Vision** | — | — | ✓ (b11481) | — | — | — |
| **Clef Decision** | — | ✓ (PR #42721) | — | ✓ (Saina Helm) | — | ✓ (decision training) |
| **Gemma 4** | — | — | ✓ (fallback) | ✓ (renderer fix) | — | — |
| **Microsoft 365 Copilot** | — | — | — | — | ✓ (new) | — |
| **Databricks ai_decide** | — | — | — | — | ✓ (new) | — |
| **Apple Silicon (MLX)** | — | ✓ (redesign RFC) | — | ✓ (regression) | — | — |
| **AMD gfx95/gfx1201** | ✓ (FP8, RDNA4 kernel) | ✓ (batch invariance) | ✓ (gfx95 FP8 opt) | — | — | ✓ (ROCm issue) |

**Race Assessment:**
- **SGLang** leads on frontier GPU models (DeepSeek V4.1, Kimi-K3 NPU, GLM-5.3-Flash)
- **llama.cpp** leads on hardware breadth (MUSA, Hexagon, Cohere2, Metal IQ types)
- **LiteLLM** leads on provider breadth (Microsoft 365, Databricks, multi-gateway)
- **Unsloth** leads on training democratization (decision models from any base)

---

## 4. Performance Frontier

| Optimization Area | Projects Active | Key Focus |
|------------------|-----------------|-----------|
| **KV Cache / Prefix Caching** | vLLM, SGLang | Fixing DFlash2/DSpark corruption on Blackwell; hybrid-SWA radix cache livelocks |
| **MoE Expert Management** | vLLM, llama.cpp, Unsloth | GPU cache for host-resident experts (llama.cpp); ubatch-size 2048 for RAM-spill (Unsloth) |
| **Quantization** | llama.cpp, vLLM | RDNA4 FP8 kernel selection; Metal IQ/BF16 MMA; int4 validation (Unsloth) |
| **Batching / Scheduling** | SGLang, vLLM | ROCm batch invariance; scheduler stalls under load (vLLM) |
| **Embedding / Inference** | Unsloth, LiteLLM | llama-server fallback = 25x speedup (Unsloth); usage breakdown by status (LiteLLM) |
| **Long Context** | SGLang | Parallel prompt encoding (200k tokens async); diffusion FDFO overlap |
| **Prefill Optimization** | SGLang | DeepSeek V4.1 mHC TP, fused q_norm_rope; CUDA GDN state columns (llama.cpp) |
| **Encryption / Security** | LiteLLM | AES-256-GCM default; np pickle prompts (Unsloth) |

**Concentration Point:** The **Blackwell / Grace Blackwell** platform (GB10, GB200, RTX PRO 5000) is the hottest optimization target — both vLLM and SGLang have critical correctness bugs (prefix caching, DFLASH pool sizing) that suggest the new architecture exposes unfinished kernel paths.

---

## 5. Layer Positioning

| Layer | Projects | Positioning |
|-------|----------|-------------|
| **Training / Fine-tuning** | **Unsloth** | End-user fine-tuning (decision models, LoRA, QLoRA) |
| **Local Runtime** | **llama.cpp**, **Ollama** | CPU/GPU/Apple Silicon local inference; llama.cpp = maximal hardware reach, Ollama = frictionless UX |
| **Serving Engine** | **vLLM**, **SGLang** | High-throughput multi-GPU serving; vLLM = PagedAttention originator, SGLang = radical spec decoding (EAGLE/MTP/DSpark) |
| **Gateway / Aggregation** | **LiteLLM** | Multi-provider proxy; encryption, retries, auth, cost controls |
| **Hybrid** | **Ollama** (local + cloud), **LiteLLM** (multi-provider) | Both span runtime + gateway, but in opposite directions |

**Strategic Distinctness:**

- **vLLM** and **SGLang** compete head-to-head on GPU serving performance, but SGLang pulls ahead on speculative decoding innovation (EAGLE/MTP/DSpark stacked) while vLLM maintains PagedAttention lineage
- **llama.cpp** owns the "run anywhere" layer — from mobile to MUSA to Hexagon — but does not compete on throughput with vLLM
- **Ollama** targets developer simplicity over performance; recent regressions (MLX, Windows) suggest maintenance strain
- **LiteLLM** owns the gateway/proxy layer and is the only project hardening encryption defaults (AES-256-GCM)
- **Unsloth** occupies a unique training niche — no direct competitor in this set for end-user fine-tuning with decision model output

---

## 6. Trend Signals

### Signals for Infrastructure Engineers

1. **Blackwell is the new Maxwell** — Both vLLM and SGLang have correctness bugs on Blackwell that didn't exist on Ampere/Hopper. Expect 3-6 months of kernel hardening before stability matches prior architectures.

2. **Speculative decoding goes mainstream** — SGLang's stacked options (EAGLE, MTP, DSpark, ShortConv) and vLLM's MTP support indicate the industry is betting on draft-based latency reduction. If latency matters for your workload, evaluate these paths.

3. **Encryption is no longer optional** — LiteLLM's AES-256-GCM default and Unsloth's pickle prompts signal a shift toward security-by-default in multi-tenant serving. Budget for this if you're building shared infrastructure.

4. **MoE offloading gets systematic** — llama.cpp's GPU cache for host experts and Unsloth's ubatch-size tuning suggest MoE models (DeepSeek-V3, Mixtral, Qwen3-MoE) are becoming deployable on memory-constrained GPUs through intelligent layer spilling.

5. **Decision models emerge as a category** — Unsloth's training support, SGLang's Clef integration, and LiteLLM's Databricks ai_decide all point to structured decision-making (ranking, routing, classification) as a distinct workload from chat completion.

### What Agent / Application Developers Should Watch

| Signal | Action |
|--------|--------|
| **Prefix caching regressions on Blackwell** | Test cache hit/miss paths thoroughly; consider fallback to v0.29.0 for Qwen3.8 NVFP4 |
| **MLX regression in Ollama** | Avoid 0.40.x on Apple Silicon; pin to 0.35.1 |
| **LiteLLM input_audio billing fix** | Test `/v1/responses` with audio — token counts should drop significantly |
| **Unsloth decision model training** | Evaluate for agent routing tasks; 30%→80% accuracy gains are significant |
| **SGLang long-prompt encoding** | 200k+ token contexts now async — expect improved TTFT for RAG |
| **llama.cpp Metal IQ type support** | Run IQ2/IQ3 on Apple Silicon with GPU acceleration for the first time |

### Bottom Line

The inference stack is **specializing by layer** while **converging on optimization vectors** (MoE, prefix caching, quantization). vLLM and SGLang fight for GPU serving dominance; llama.cpp defends the run-anywhere crown; LiteLLM壁垒 the gateway; Unsloth owns training. The next quarter will be defined by Blackwell stability convergence and decision model productionization.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to generate a vLLM digest for 2026-10-08 based on the provided GitHub data. Let me analyze the key information:

**Releases**: None in the last 24h

**Key Issues to highlight**:
1. #60174 - DFlash2/DSpark + prefix caching corrupt output after cache hit on Qwen3.8-27B NVFP4 - HIGH priority bug
2. #56105 - Watermarking hardening tracking issue
3. #57149 - ROCm AMD Qwen3.8-2.4T-A95B gfx950 / MI355X Performance Optimization
4. #53130 - Scheduler stops admitting requests under load
5. #59770 - Nemotron-3.5-Lightning NVFP4 decode ~16% slower on GB10 since v0.29.0 - performance regression
6. #57680 - Decode throughput drops ~3.3x from 0.26.0 to 0.29.0 on H100
7. #58624 - MoE decode ~15% slower on SM12x since #56876
8. #57838 - RowWiseTorchFP8ScaledMMLinearKernel selected on RDNA4 costs 5-24% decode

**Key PRs to highlight**:
1. #60520 - [Bugfix][CPU] Respect cgroup headroom on NUMA nodes
2. #60470 - [Model][Attention] Opt-in Cake FlashInfer routes for Kimi-K3
3. #59600 - [Bugfix][Spec Decode] Restore ShortConv drafter state in MRV2
4. #60507 - [Bugfix][Frontend] Accept successful 2xx responses for batch output uploads
5. #60098 - [Bugfix] Use FusedMoEWithLoRA for shared MoE LoRAs on 3D models


6. #52244 - [Bugfix][V1] Restore hybrid GDN prefix-cache hits under MTP spec decoding
7. #60517 - Remove torch.compile-based sequence parallelism and AsyncTP (cleanup)
8. #59962 - [Bugfix][RecoverSSM] Correct aligned state indices at exact block boundaries
9. #60367 - [ROCm][Bugfix] Map sleep-mode cuMem memory for the host
10. #59340 - [Perf][Humming] Skip redundant MoE input copy before w13 GEMM

I notice several performance optimizations and bug fixes across different hardware platforms. The improvements focus on enhancing caching mechanisms, reducing memory overhead, and addressing hardware-specific issues. Notably, there are targeted fixes for NVIDIA, AMD, and emerging hardware architectures, indicating a comprehensive approach to system-level optimizations.</think>

# vLLM Daily Digest — 2026-10-08

## 1. Today's Highlights

Today's development activity centers on performance regression investigations across NVIDIA Blackwell/Grace Blackwell and AMD ROCm platforms, along with several bugfixes targeting scheduler stability and model-specific correctness issues. Notably, a significant prefix caching bug affecting Qwen3.8-27B NVFP4 on Blackwell hardware has emerged, while multiple PRs address performance regressions introduced since v0.29.0.

---

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Description | PR/Issue |
|------|-------------|----------|
| **Kimi-K3 Cake FlashInfer Integration** | Opt-in `VLLM_CAKE_ROUTES` flag enables FlashInfer Cake kernels for Kimi-K3 KDA and MLA decode paths | [#60470](https://github.com/vllm-project/vllm/pull/60470) |
| **Gemma4 Sequence Classification** | New model support request for Gemma4ForSequenceClassification (non-vocab-sized output head) | [#43726](https://github.com/vllm-project/vllm/issues/43726) |
| **AMD RDNA4 (gfx1201) Kernel Fix** | Fix for incorrect FP8 kernel selection causing 5-24% decode overhead on Radeon AI PRO R9700 | [#57838](https://github.com/vllm-project/vllm/issues/57838) |

---

## 4. Performance & Optimization

### Landed / In Review

| Optimization | Impact | PR |
|--------------|--------|-----|
| **MoE input copy elimination** | Skip redundant w13 GEMM input copy in Humming kernel | [#59340](https://github.com/vllm-project/vllm/pull/59340) |
| **ROCm batch invariance** | Enable batch-invariant inference on ROCm via `VLLM_BATCH_INVARIANT=1` | [#52231](https://github.com/vllm-project/vllm/pull/52231) |
| **DeepSeek-V4 DBO** | Enable prefill dual-batch-overlap on ROCm for DeepSeek-V4 DP deployments | [#57773](https://github.com/vllm-project/vllm/pull/57773) |
| **Qwen4Exp workspace slicing** | Slice PLE workspace to actual token count on ROCm | [#58325](https://github.com/vllm-project/vllm/pull/58325) |
| **MTP reduced draft vocabulary** | 25-29% decode speedup via reduced draft vocabulary for MTP drafters | [#58578](https://github.com/vllm-project/vllm/issues/58578) |

### Active Regression Issues

| Regression | Details | Issue |
|------------|---------|-------|
| **Nemotron-3.5-Lightning NVFP4** | ~16% slower decode on DGX Spark (GB10/SM121) since v0.29.0 | [#59770](https://github.com/vllm-project/vllm/issues/59770) |
| **Qwen3.6-35B-A3B-FP8** | ~3.3x decode throughput drop from 0.26.0 to 0.29.0 on H100 | [#57680](https://github.com/vllm-project/vllm/issues/57680) |
| **MoE on SM12x** | ~15% slower decode since DeepGEMM alignment change (#56876) | [#58624](https://github.com/vllm-project/vllm/issues/58624) |
| **ROCm RDNA4 FP8** | 5-24% decode overhead from incorrect kernel selection | [#57838](https://github.com/vllm-project/vllm/issues/57838) |

---

## 5. Stability & Regressions

### Critical Bugs

| Bug | Severity | Status | Fix PR |
|-----|----------|--------|--------|
| **Prefix cache corruption on Qwen3.8-27B NVFP4 (Blackwell)** — DFlash2/DSpark + prefix caching produces corrupt output after cache hit on compressed-tensors; works on v0.29.0 and FP8/MTP | **High** | Open | — |
| **Scheduler stalls under load** — Engine reports healthy but stops admitting requests while deferred backlog grows | **High** | Open | — |
| **CUDA IMA (exit 0) in hybrid GDN + MTP** — Silent illegal memory access on RTX 3090 with async scheduling | **High** | Open | — |
| **Qwen2.5-Reranker /score endpoint hang** — Process hangs with specific data patterns | **Medium** | Closed | — |

### Bugfix PRs Merging/Reviewing

| Fix | Scope | PR |
|-----|-------|-----|
| **CPU cgroup headroom** | Respect cgroup memory limits on NUMA nodes for CPU backend | [#60520](https://github.com/vllm-project/vllm/pull/60520) |
| **Hybrid GDN prefix-cache + MTP** | Restore prefix-cache hits under MTP speculative decoding | [#52244](https://github.com/vllm-project/vllm/pull/52244) |
| **ShortConv drafter state** | Restore ShortConv history between speculative rounds in MRV2 | [#59600](https://github.com/vllm-project/vllm/pull/59600) |
| **RecoverSSM boundary indexing** | Fix aligned state indices at exact Mamba block boundaries | [#59962](https://github.com/vllm-project/vllm/pull/59962) |
| **Shared MoE LoRAs on 3D models** | Fix FusedMoEWithLoRA selection for shared MoE LoRAs | [#60098](https://github.com/vllm-project/vllm/pull/60098) |
| **ROCm sleep-mode cuMem** | Map sleep-mode memory for host to fix FP8 checkpoint crashes | [#60367](https://github.com/vllm-project/vllm/pull/60367) |
| **Batch upload 2xx handling** | Accept successful 2xx responses for batch output uploads | [#60507](https://github.com/vllm-project/vllm/pull/60507) |

### Deprecations

| Change | Details | PR |
|--------|---------|-----|
| **torch.compile SP & AsyncTP removal** | Removed SequenceParallelismPass and AsyncTPPass; not supported in MRV2, reducing torch.compile reliance | [#60517](https://github.com/vllm-project/vllm/pull/60517) |

---

## 6. What This Means for Application Developers

1. **Blackwell prefix caching caution**: If serving Qwen3.8-27B NVFP4 on Blackwell (RTX PRO 5000, GB200, GB10) with prefix caching enabled, be aware of potential output corruption on cache hits. Consider staying on v0.29.0 until the DFlash2/DSpark fix lands.

2. **GB10 performance regression**: If running NVFP4 models on DGX Spark (GB10), the ~16% decode slowdown since v0.29.0 remains unfixed. Evaluate v0.28.x if latency is critical.

3. **Scheduler health check gaps**: The scheduler may report healthy while the deferred backlog grows. Monitor queue depth metrics externally rather than relying solely on engine health status.

4. **ROCm batch invariance**: AMD ROCm users can now enable `VLLM_BATCH_INVARIANT=1` for more predictable batching behavior across different batch sizes.

5. **Tool calling streaming**: Truncated tool-call streams now properly close unterminated arguments, improving robustness for agents using streaming responses with `max_tokens` or `stop` conditions.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to generate a structured SGLang digest for 2026-10-08 based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Let me go through the key items:

**Today's Highlights:**
- There's significant activity around CI/flaky tests tracking
- Multiple DeepSeek V4.1 optimizations in progress
- Apple Silicon serving redesign proposal
- Several bugs related to hybrid-SWA, radix cache, speculative decoding

**Releases & Breaking Changes:**
- No releases in last 24h

**New Model & Hardware Support:**
- Apple Silicon redesign (roadmap)
- DeepSeek V4.1 optimization
- Kimi-K3 DCP with shared compact communication on NPU
- GLM-5.3-Flash NVFP4 support
- B12X NVFP4 W4A16 MoE GEMM on SM120
- Clef and Clef-Flash decision models support
- MiniMax-H3 multimodal diffusion issues

**Performance & Optimization:**
- DeepSeek V4.1 optimization (mHC TP optimization, prefill optimizations)
- Parallelize long chat prompt encoding
- Diffusion LLM FDFO overlap scheduling
- GLM DSA NextN draft shared-expert fusion
- AMD gfx95 FP8 scale relayout elimination

**Stability & Regressions:**
- Multiple bugs reported:
  - Hybrid-SWA + radix cache admission livelock
  - DFLASH/DSPARK draft KV pool budget issue
  - GLM-5.3-Flash crashes on startup
  - GLM-5.3-Flash-NVFP4 logprobs drift
  - DeepSeek-V4 FP8 paged MQA logits issue
  - EAGLE/MTP same-checkpoint redundant copies
  - NIXL backend crashes
  - PP + EAGLE/MTP spec decoding crashes
  - Kimi-K3 hangs

**What This Means for Application Developers:**
- Multiple model-specific bugs to be aware of
- Ongoing optimizations for popular models
- CI improvements in progress

Now I'll structure this into the requested format.</think>

# SGLang Digest — 2026-10-08

## Today's Highlights

The SGLang project continues its rapid development with significant focus on DeepSeek V4.1 optimization and Apple Silicon serving redesign. Multiple correctness bugs affecting production deployments—including Hybrid-SWA radix cache livelocks and GLM-5.3-Flash NVFP4 issues—remain under active investigation. The CI infrastructure tracking issue has accumulated 41 comments, reflecting ongoing investment in test reliability.

## Releases & Breaking Changes

No new releases in the last 24 hours.

## New Model & Hardware Support

- **Apple Silicon Serving Redesign** — RFC proposal (#32321) for a Torch-owned SRT path with exported whole-model MLX region, targeting improved Apple Silicon support through Torch/MLX interoperability.
- **Kimi-K3 DCP on NPU** — PR #40825 introduces decode context parallelism for Kimi-K3 on Ascend NPU with shared compact communication, including DSPARK speculative decoding support.
- **Clef Decision Models** — PR #42721 adds support for Cloudflare's Clef and Clef-Flash decision models on `/v1/systemone`, built on Qwen3.5/Qwen3.8 checkpoints with joint schema heads.
- **DeepSeek V4.1** — Roadmap issue (#42170) tracking optimization work including mHC TP optimization and prefill optimizations.

## Performance & Optimization

- **DeepSeek V4.1 Prefill Optimizations** — mHC code cleanup and `q_rope_store` folding into `fused_q_norm_rope` in progress (#41589, #42245).
- **Long Chat Prompt Encoding Parallelization** — PR #41259 moves tokenization off the critical path for agentic context lengths; encoding a 200k-token prompt dropped from 240ms to async background processing.
- **AMD gfx95 FP8 Optimization** — PR #41030 eliminates remaining FP8 scale relayout copies by using native row-major scales in block-FP8 producers.
- **GLM DSA NextN Draft Architecture** — PR #41258 fixes shared-expert fusion by letting GLM-5 draft declare its own architecture instead of inheriting DeepSeekV3.
- **Diffusion LLM FDFO Overlap Scheduling** — PR #40756 drafts support for overlap scheduling to eliminate GPU idle time between denoise steps.

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | Hybrid-SWA + radix cache admission livelock (#41579) — SWA prefix lock pins finished request's untrimmed last chunk, causing scheduler to stop admitting requests | Open |
| **High** | DFLASH/DSPARK draft KV pool uses `tp_size` instead of `attn_tp_size` (#38202) — causes OOM under DP attention in Kimi-K3 | Open |
| **High** | GLM-5.3-Flash crashes on startup with flashinfer_trtllm backend (#36711) — IndexError in logical_to_all_physical | Open |
| **Medium** | GLM-5.3-Flash-NVFP4 logprobs drift vs v0.5.20 on SM100 (#41609) — suspected KDA fusion gate regression from Sep 18-21 | Open |
| **Medium** | DeepSeek-V4 on SM120: FP8 paged MQA logits flag disables C4 indexer chunk planner (#42146) — +3.3–3.8 GiB at 128k memory | Open |
| **Medium** | EAGLE/MTP redundant embed_tokens/lm_head copies cause startup OOM (#42510) | Open |
| **Medium** | NIXL backend crashes with TypeError when `SGLANG_DISAGG_STAGING_BUFFER=1` (#42684) | Open |
| **Medium** | Kimi-K3 cookbook image hangs at first TP16 decode step (#39568) — on 4 nodes × 4 GB200 | Open |
| **Low** | `/update_weights_from_disk` API parameters ignored (#42544) — is_async, keep_pause, token_step have no effect | Open |
| **Low** | FlashInfer autotune cache discarded every boot under MoE EP>1 (#40320) — re-tuning occurs on every start | Open |

**CI Infrastructure**: Issue #42752 tracks flaky tests and CI failures with 41 comments; #17050 reports 1 broken and 4 flaky tests in scheduled CI.

## What This Means for Application Developers

- **Production deployments using Hybrid-SWA models** should monitor for scheduler livelocks when using radix caching with tight SWA pool sizes.
- **GLM-5.3-Flash NVFP4 users on SM100/SM120** may encounter logprobs drift; pinning to v0.5.20 or waiting for regression fixes is advised.
- **Kimi-K3 multi-node deployments** (TP16 across GB200 NVL72) should be on the latest nightly to address decode hangs.
- **DeepSeek V4 users on Blackwell** should be aware of the +3.3–3.8 GiB memory overhead when using FP8 paged MQA logits.
- The ongoing DeepSeek V4.1 optimization work (prefill, mHC TP) should yield meaningful throughput improvements in the coming releases.
- Long prompt encoding is becoming non-blocking, which will improve TTFT for agentic workloads with 100k+ token contexts.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data for llama.cpp and create a structured digest. I need to extract the key information and organize it according to the specified sections.

Let me go through the data:

**Releases (last 24h):**
1. b11481 - mtmd: add cohere2 vision support (#30062)
2. b11480 - llama : add a GPU cache for MoE experts kept in host memory (#29887)
3. b11476 - metal : few-row MMA mat-mul for remaining src0 types (#30065)
4. b11475 - metal : fix MUL_MAT+ADD fusion (#30100)
5. b11474 - feat: add GLM5Next MTP, optimize (#29928)
6. b11472 - sampling : use greedy selection for eligible temperature-zero chains (#29797)
7. b11471 - vocab : add plamo fim tokens (#30090)
8. b11469 - musa: use the tile lightning indexer kernel (#30080)
9. b11468 - vendor : update cpp-httplib to 0.60.0 (#30081)
10. b11467 - imatrix : include clocale for std::setlocale (#30079)

**Issues (top ones by comments):**
1. #29811 - Qwen 3.8 flash with MTP startup assert (18 comments)
2. #24415 - can't load gemma-4-12B with OpenVINO (13 comments)
3. #24943 - Vulkan: VAE garbles images (12 comments, closed)
4. #21547 - Gemma4 fails with NotImplemented: map (11 comments)
5. #28734 - qwen4exp CUDA: decode slows linearly with context (10 comments, closed)


6. #24429 - mtmd video input hangs on Windows (8 comments)
7. #25060 - Blackwell GGML-CUDA SOFT_MAX Crash (8 comments)
8. #26116 - allow llama serve -hf to use llama-server in router mode (8 comments)
9. #28726 - OpenVINO backend crashes with STATUS_ILLEGAL_INSTRUCTION (8 comments)
10. #27638 - Vulkan/ANV Flash Attention fallback issues (8 comments)

**Pull Requests (top ones):**
1. #30087 - [ggml, CUDA] ggml-cuda: assign two GDN state columns per warp
2. #30130 - [mtmd

] mtmd: cap audio length and read in chunks
3. #29696 - [ggml, SYCL] sycl: wide stores and 256-thread groups for q4_K/q5_K
4. #30126 - [ggml, merge ready, Hexagon] hexagon: enable alloc_buffer_n
5. #30128 - [devops, ggml, OpenCL] hexagon: Fix snapdragon/QDC CI infra
6. #29889 - [ggml, SYCL] [SYCL]: fix memory errors
7. #29050 - [ggml, CUDA] CUDA/HIP: matrix-core lightning indexer for CDNA2
8. #29609 - [ggml, CUDA] ggml-cuda: sanitize post-bias NaNs in MoE selection
9. #30121 - [ggml, Hexagon] hexagon: Q6_K weight dequant speedup
10. #30114 - [documentation, model, server,

I'm seeing a mix of platform-specific fixes across Windows, Vulkan, and OpenVINO backends, along with optimization work on CUDA and Hexagon hardware. The recent PRs focus on memory management, kernel optimizations, and infrastructure improvements for various accelerator platforms.

Now I'll organize this into a structured digest format.</think>

# llama.cpp Digest — 2026-10-08

## 1. Today's Highlights

The llama.cpp project continues its rapid cadence with major GPU memory optimizations for MoE models and expanded quantization support. The standout addition is a **GPU cache for MoE experts kept in host memory** (#29887), enabling efficient handling of large expert ensembles. Apple Metal also received significant kernel improvements, extending few-row MMA support to additional quantization types, while a new security fix caps audio length processing to prevent memory allocation attacks.

## 2. Releases & Breaking Changes

- **b11468**: Updated `cpp-httplib` to 0.60.0 — may affect HTTP client behavior in server deployments
- **b11471**: Added Plamo FIM tokens to vocab — tokenization changes for Plamo models
- No breaking API changes reported in this cycle

## 3. New Model & Hardware Support

| Feature | PR/Commit | Details |
|---------|-----------|---------|
| Cohere2 Vision | #30062 (b11481) | New vision model support via mtmd |
| GLM5-Next MTP | #29928 (b11474) | Multi-token prediction head added |
| MUSA accelerator | #30080 (b11469) | Tile lightning indexer kernel |
| Metal BF16/IQ types | #30065 (b11476) | Extended MMA mat-mul to BF16, Q1_0, Q2_0, MXFP4, Q2_K, Q3_K, TQ2_0, IQ types |
| LiquidAI d1-omni-600M | #30114 | Decision model with audio/image/text inputs |

## 4. Performance & Optimization

### Landed This Cycle

- **MoE GPU Expert Cache** (#29887, b11480): Cache for MoE experts kept in host memory, reduces memory transfers for large expert ensembles
- **Metal MUL_MAT+ADD Fusion Fix** (#30100, b11475): Corrects fusion when residual is itself a MUL_MAT
- **Sampling Greedy Selection** (#29797, b11472): Uses greedy selection for temperature-zero chains, improving deterministic output
- **Hexagon Q6_K Speedup** (#30121): Weight dequantization optimization
- **MUSA Lightning Indexer** (#30080): New tile-based kernel for MUSA architecture
- **SYCL q4_K/q5_K Optimization** (#29696): Wide stores and 256-thread groups

### In Progress

- **CUDA GDN State Columns** (#30087): Assigns two GDN state columns per warp, targeting instruction-issue bound kernels (RTX 4090 shows 39% issue rate)
- **CUDA MFMA Lightning Indexer** (#29050): ROCm matrix-core path for CDNA2 (gfx90a)
- **Multi-GPU MoE Cache** (#30112): Extends expert caching across multiple GPUs (benchmarks on 2×RTX 4090s show significant gains)
- **OpenCL Flash Attention** (#26430): Widens decode FA to head sizes 64-512, GQA 2-16

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Qwen3.8-Flash-Next MTP startup assert (#29811) | Open | — |
| **High** | OpenVINO crashes: STATUS_ILLEGAL_INSTRUCTION (#28726) | Open | — |
| **High** | Blackwell GGML-CUDA SOFT_MAX crash (#25060) | Open | — |
| **Medium** | Vulkan: VAE image garbling with low VRAM (#24943) | Closed | — |
| **Medium** | mtmd: Audio file DoS via malicious header (#30130) | Open | *Just filed* |
| **Medium** | Vulkan qwen4exp image multimodality broken (#29093) | Open | — |
| **Low** | Tool-call "call" name crash (#29967) | Closed | — |

## 6. What This Means for Application Developers

**For inference infrastructure engineers:**
- The MoE expert cache (#29887) significantly reduces memory pressure for dense MoE models like Qwen3.8 — expect improved throughput on memory-constrained GPU setups
- Metal users benefit from expanded quantization type support — BF16 and IQ types now use optimized MMA kernels
- The audio length cap (#30130) is a security fix: update server deployments to prevent DoS via malformed audio files

**For agent/app builders:**
- Greedy sampling for temperature-zero chains (#29797) now produces deterministic outputs — useful for reproducible tool-use sequences
- New router mode for `llama serve -hf` (#26116) enables automatic model download and caching — simplifies multi-model deployments
- Grammar support now includes multi-token matching (#30117) — enables more expressive output constraints

**Key URLs:**
- Release artifacts: https://github.com/ggml-org/llama.cpp/releases
- Official site: https://llama.app
- Issue tracker: https://github.com/ggml-org/llama.cpp/issues

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze this GitHub data about Ollama and create a structured digest for 2026-10-08.

Key observations from the data:

1. **Latest Release**: v0.40.1 - just released with:
   - Proxy cloud usage and balance APIs
   - Fix for clef head reads past 2GiB on Windows
   - Removed account step from CLI onboarding

2. **Issues to highlight**:
   - Multiple MLX-related issues (regression from 0.35.0, thread limits, quantization problems)
   - Windows-specific issues (model unusable after migration, path traversal)
   - Model pull errors (redirect issues, DNS resolution failures)
   - Gemma4 renderer issues (tool parameters dropped)
   - Various bugs with different models

3. **Pull Requests**:
   - Many bug fixes
   - Documentation improvements
   - Community integration additions
   - MLX improvements

Let me structure this into the required sections:

1. Today's Highlights
2. Releases & Breaking Changes
3. New Model & Hardware Support
4. Performance & Optimization
5. Stability & Regressions
6. What This Means for Application Developers</think>

# Ollama Digest — 2026-10-08

## Today's Highlights

Ollama v0.40.1 landed with a Windows fix for large model files (clef head reads past 2GiB) and proxy support for cloud usage APIs. However, the 0.40.x series is accumulating regression reports — particularly around MLX (Apple Silicon) where thread limits and quantization mismatches are causing failures, and Windows symlink handling after the migration. Users on 0.35.x may want to hold unless they need the newest features.

---

## Releases & Breaking Changes

| Version | Changes | Link |
|---------|---------|------|
| **v0.40.1** | Server: proxy cloud usage and balance APIs. llama: fix clef head reads past 2GiB on Windows. CLI: removed account step from onboarding. | [Release](https://github.com/ollama/ollama/releases/tag/v0.40.1) |

**Migration Notes:**
- Windows symlink handling changed in 0.40.0 — existing manifests may need lazy repair ([#18852](https://github.com/ollama/ollama/pull/18852), merged). Users hitting "untrusted mount point" errors should upgrade to v0.40.1.
- HTTP proxy users behind corporate firewalls: model pulls fail with "redirect target not allowed" in 0.35+ — no fix yet ([#18831](https://github.com/ollama/ollama/issues/18831)).

---

## New Model & Hardware Support

- **Saina Helm** decision model encoding added — PR [#18857](https://github.com/ollama/ollama/pull/18857) (open)
- **LLM-jp-4** harmony output parser now handles special tokens with trailing spaces — issue [#18728](https://github.com/ollama/ollama/issues/18728) (open)
- **Gemma 4** GGUF renderer: fixed size threshold detection (11.9B vs 12B) — issue [#18824](https://github.com/ollama/ollama/issues/18824) (open)
- **MLX mixed-precision import**: per-layer quantization overrides currently ignored — issue [#18789](https://github.com/ollama/ollama/issues/18789) (open)
- **FreeBSD** build fix merged for `Statfs` space math — PR [#18848](https://github.com/ollama/ollama/pull/18848)

---

## Performance & Optimization

| Area | Status | Details |
|------|--------|---------|
| **Embedding load** | In progress | Reuse llama-server HTTP connections for `/api/embed` to reduce overhead — PR [#18397](https://github.com/ollama/ollama/pull/18397) |
| **MLX quantization** | Regressed | Quantized decision models slower than bf16 at prefill on M5 Pro — issue [#18833](https://github.com/ollama/ollama/issues/18833) (open) |
| **Claude Code context** | In progress | Set `CLAUDE_CODE_MAX_CONTEXT_TOKENS` to model's actual context length to reduce compaction — PR [#18855](https://github.com/ollama/ollama/pull/18855) |
| **Token repeat detector** | In progress | Only feed content-carrying events to avoid false positives — PR [#17360](https://github.com/ollama/ollama/pull/17360) |
| **MLX CUDA routing** | Merged | Fast quantized matmul on CUDA compute capability 10.0+ — PR [#16894](https://github.com/ollama/ollama/pull/16894) |

---

## Stability & Regressions

**Critical (actively breaking production):**

| Issue | Severity | Status |
|-------|----------|--------|
| MLX runner panic with `qwen3.6:35b-mlx` in 0.40.x — regression from 0.35.0 | Critical | [#18856](https://github.com/ollama/ollama/issues/18856) (open) |
| MLX thread limit error: "Maximum threads per threadgroup is 896 but requested 1024" on M4 | Critical | [#18846](https://github.com/ollama/ollama/issues/18846) (open, downgrade to 0.35.1 works) |
| `/api/chat` HTTP 500 with `qwen3.8:27b` on Windows — "unexpected end of JSON input" | High | [#18840](https://github.com/ollama/ollama/issues/18840), fix in PR [#18849](https://github.com/ollama/ollama/pull/18849) |
| Model pull fails behind HTTP proxy since 0.35 — "redirect target not allowed" | High | [#18831](https://github.com/ollama/ollama/issues/18831) (open) |

**Moderate:**

- `clef-flash` fails on `/v1/systemone` with "non-finite logit" (CPU/GPU) — [#18769](https://github.com/ollama/ollama/issues/18769), [#18836](https://github.com/ollama/ollama/issues/18836) (closed — likely related to above)
- Gemma4 renderer drops tool parameters named `description`, `type`, `properties`, `required`, `nullable` — [#18468](https://github.com/ollama/ollama/issues/18468) (open)
- `mistral-medium-3.5:128b` unusable on M4 Mac (127GB RAM, 1 word/min) — [#18770](https://github.com/ollama/ollama/issues/18770) (open)
- Duplicate model entries after GGUF migration on macOS — [#18830](https://github.com/ollama/ollama/issues/18830) (open)

---

## What This Means for Application Developers

1. **If you're on Apple Silicon with MLX**: Avoid 0.40.x for now. Several issues are causing panics and thread limit crashes — particularly with larger models. Downgrade to 0.35.1 or wait for 0.40.1+ patches.

2. **If you're using Windows**: The 0.40.1 update fixes the symlink manifest issue. If you're on 0.40.0 and models are failing, upgrade.

3. **If you're behind a corporate proxy**: Model pulls are currently broken in 0.35+. Track [#18831](https://github.com/ollama/ollama/issues/18831) for a fix.

4. **If you're building agents with tool calling**: Watch [#18468](https://github.com/ollama/ollama/issues/18468) — gemma4 models may silently drop certain parameter names from tool definitions.

5. **If you're using `/api/embed` at scale**: The connection reuse improvement in PR [#18397](https://github.com/ollama/ollama/pull/18397) should reduce latency under sustained embedding workloads — will land in a future release.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data for LiteLLM and create a structured digest.

First, let me identify the key items:

**Releases:**
- v1.106.0-dev.1 (dev release)
- v1.105.0-rc.2 (release candidate)
- v1.104.1 (stable)
- v1.103.4, v1.102.3, v1.101.5, v1.100.5

All releases include Docker image signing with cosign.

**Top Issues:**
1. #13419 - OpenAI gpt-5 thinking outputs not showing with OpenWebUI (51 comments)
2. #15230 - Enterprise feature error when updating virtual keys (39 comments)
3. #7275 - Azure AI models with services.ai.azure.com URL (32 comments)
4. #31263 - Rust Migration announcement (28 comments) - this is a big one
5. #44154 - Background health check attribution bug (8 comments, closed)
6. #44182 - Team ID not verified on JWT (8 comments, closed)
7. #43487 - Partial generic streaming chunk accepted then KeyError (7 comments)
8. #44979 - tool_result.is_error dropped in Anthropic→OpenAI translation (5 comments)
9. #32489 - openai/chat_completions/* not working on /chat/completions (5 comments)
10. #44555 - Feature: budget based on monthly token usage per team (5 comments)

**Top PRs:**
1. #44433 - Keep idle responses websockets open until configurable session limit
2. #45230 - Simplify Lens deployment and first trace setup


3. #45224 - Map input_audio blocks in chat-to-Responses bridge
4. #45249 - SCIM group delete optimization
5. #44957 - MCP gateway OAuth consent scope
6. #45227 - Honor per-request fallbacks on mid-stream fallback
7. #42934 - Default at-rest encryption to AES-256-GCM
8. #45244 - Break down failed gateway requests by HTTP status code
9. #45147 - Keep tool_calls finish_reason when streaming with response_format
10. #45135 - Consolidate Python tests for Rust

I'm seeing active development across multiple fronts. The team is focused on infrastructure improvements—websocket handling, encryption hardening, and better error tracking. There are also meaningful enhancements to fallback mechanisms and OAuth scoping, plus ongoing Rust migration testing.

On the provider side, I'm noticing broader LLM support with Databricks ai_decide integration and Microsoft 365 Copilot connectivity. Performance work includes context cache billing for Vertex AI and retry logic that respects provider retry-after headers. The input_audio block mapping fix is particularly important for the Responses API. Security-wise, they're moving to AES-256-GCM encryption and improving token validation. There's also a notable Rust migration underway that could fundamentally change the gateway's architecture.</think>

# LiteLLM Digest — 2026-10-08

## 1. Today's Highlights

LiteLLM advances its infrastructure hardening with AES-256-GCM encryption as the new default and makes PyNaCl optional, while the Rust migration initiative gains momentum with consolidated test coverage. Key fixes landed for streaming response handling, including input_audio block mapping in the chat-to-Responses bridge and proper finish_reason tracking for Anthropic tool calls. The team also introduced Microsoft 365 Copilot as a new provider with OAuth token exchange support.

---

## 2. Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| [v1.106.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-dev.1) | Dev | Development build |
| [v1.105.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-rc.2) | RC | Release candidate |
| [v1.104.1](https://github.com/BerriAI/litellm/releases/tag/v1.104.1) | Stable | Latest stable |
| [v1.103.4](https://github.com/BerriAI/litellm/releases/tag/v1.103.4) | Stable | Prior stable |

**All Docker images now signed with cosign** — same key since commit `0112e53`. Verify with:
```bash
cosign verify BerriAI/litellm:<tag>
```

**Breaking:** At-rest encryption now defaults to **AES-256-GCM with HKDF v3** ([#42934](https://github.com/BerriAI/litellm/pull/42934)). Legacy deployments without PyNaCl will receive actionable errors instead of silent plaintext returns. Review `litellm_settings.yaml` encryption config.

---

## 3. New Model & Hardware Support

| Addition | Details |
|----------|---------|
| **Microsoft 365 Copilot** | New provider with OAuth token exchange for Graph Copilot Chat API ([#45158](https://github.com/BerriAI/litellm/pull/45158)) |
| **Databricks ai_decide** | Added as `/v1/decisions` provider and auto-router decider ([#45200](https://github.com/BerriAI/litellm/pull/45200)) |
| **GitHub Copilot per-user OAuth** | Per-user GitHub OAuth connections for Copilot credentials ([#45241](https://github.com/BerriAI/litellm/pull/45241)) |

---

## 4. Performance & Optimization

| Area | Change | PR |
|------|--------|-----|
| **WebSocket idle timeout** | Removed 30s first-frame timeout on `/v1/responses` and `/responses` WebSockets; added configurable session limit ([#44433](https://github.com/BerriAI/litellm/pull/44433)) | #44433 |
| **Context cache billing** | Vertex AI explicit context cache storage now billed per token-hour ([#45019](https://github.com/BerriAI/litellm/pull/45019)) | #45019 |
| **Retry behavior** | Honored provider `retry-after` and `retry-after-ms` headers in completion retries, capped at 60s ([#45247](https://github.com/BerriAI/litellm/pull/45247), [#45234](https://github.com/BerriAI/litellm/pull/45234)) | #45247, #45234 |
| **Input token billing** | Fixed `input_audio` blocks being billed as text (113K tokens for 64-char question) — now properly mapped ([#45224](https://github.com/BerriAI/litellm/pull/45224)) | #45224 |
| **Usage breakdown** | Failed gateway requests now segmented by HTTP status code (4xx vs 5xx) via `/gateway/daily/activity` ([#45244](https://github.com/BerriAI/litellm/pull/45244)) | #45244 |
| **SCIM performance** | Group deletion now bulk-deletes via single DB call instead of per-member round trips ([#45249](https://github.com/BerriAI/litellm/pull/45249)) | #45249 |

---

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | **#15230** — Enterprise feature error triggered when updating virtual keys without using enterprise features (39 comments) | Open |
| **High** | **#13419** — OpenAI GPT-5 thinking outputs not displayed via OpenWebUI (51 comments) | Open |
| **Medium** | **#43487** — Partial generic streaming chunks accepted then raise KeyError on missing `text`/`is_finished` fields | Open |
| **Medium** | **#44979** — `tool_result.is_error` dropped when translating Anthropic → OpenAI tool messages | Open |
| **Medium** | **#44154** — Background health check results incorrectly attributed to all deployments sharing same `litellm_params.model` | Fixed (#44154) |
| **Medium** | **#44182** — Team ID not verified on JWT auth | Fixed (#44182) |
| **Low** | **#44555** — Feature request: budget based on monthly token usage per team (not just spend-based) | Open |

---

## 6. What This Means for Application Developers

1. **Security hardening in progress** — If you rely on LiteLLM's encryption, verify your setup handles the AES-256-GCM default. The migration path is now explicit rather than silent.

2. **Responses API parity improving** — The input_audio block mapping fix ([#45224](https://github.com/BerriAI/litellm/pull/45224)) resolves significant token billing inflated errors. If you use `/v1/responses` with audio inputs, test thoroughly.

3. **Better observability** — Failed request breakdown by HTTP status code ([#45244](https://github.com/BerriAI/litellm/pull/45244)) helps distinguish client errors (4xx) from upstream/provider failures (5xx).

4. **Multi-tenant budgets** — The monthly token-based budget feature ([#44555](https://github.com/BerriAI/litellm/issues/44555)) addresses a common request for quota enforcement independent of model pricing.

5. **Rust gateway on horizon** — The Rust migration ([#31263](https://github.com/BerriAI/litellm/issues/31263)) targets sub-1ms overhead. Early beta signup available; monitor for test coverage and performance benchmarks in coming releases.

6. **Webhook/retries** — Provider `retry-after` headers are now respected. If you hit rate limits, LiteLLM will back off appropriately rather than hammer the upstream.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to generate a structured digest for Unsloth based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Looking at the data:

1. **Latest Releases**: v0.1.904-beta - Train your own Decision model, with decision accuracy going from 30% to 80%. Also includes native ComfyUI models, diffusion improvements, and a better Browser in Desktop.

2. **Issues**: 17 total items
   - Memory issues with Qwen Image 2.1 Q4_K_M on M5 Max
   - Long-context chat lag
   - Toolcalls disable option (CLOSED)
   - TTS reads markdown formatting (CLOSED)
   - Spell check in desktop (Feature request)
   - Models not loading after latest update
   - Dictation microphone access (CLOSED)
   - Training run duplication feature request
   - Uninstall file issue (CLOSED)
   - Bonsai models not loading
   - CPU spinning at 95% idle
   - MXC probe fails on MS Store Python
   - VAE tiling on MPS (float64 weights)
   - int4 loader validation issue
   - AMD ROCm torch replacement issue
   - UI z-index collision (CLOSED)
   - CI/CD complaint (CLOSED)

3. **Pull Requests**: 151 items, showing top 20
   - Various Studio fixes (download cards, vision datasets, security fixes)
   - Qwen3.6 thinking controls
   - Qwen3.5 tool call fixes
   - Embedding model improvements
   - Browser panel improvements
   - Settings UI fixes
   - Video attachment handling
   - Whisper-server security
   - Dropdown glow performance
   - MacOS download fixes
   - Linked folder indexing
   - Yahoo search parsing
   - MoE expert handling improvements

Now let me structure this into the requested format:

**1. Today's Highlights**


The release introduces decision model training capabilities, achieving significant accuracy improvements from 30% to 80%. The Studio platform continues expanding its functionality with enhanced browser features and UI refinements, while several critical fixes address performance and compatibility issues.

**2. Releases & Breaking Changes**
v0.1.904-beta marks a substantial update focused on decision model training capabilities. Native ComfyUI model support and diffusion workflow enhancements round out the release, with improved browser interaction in the Desktop application.

**3. New Model & Hardware Support**
Decision model training now enables transformation of text or vision LLMs into Jev-style models. Apple Silicon receives ongoing optimization, though VAE tiling on MPS currently exhibits float64 weight challenges. AMD ROCm users encounter installation complexities with the current AMD package configuration.

**4. Performance & Optimization**
MoE expert memory management sees meaningful progress, particularly with ubatch-size expansion to 2048 when experts overflow to RAM, alongside automatic cache sizing. Embedding model performance shows substantial gains through llama-server integration, achieving approximately 129 chunks/s compared to prior baselines.

**5. Stability & Regressions**
Critical issues requiring immediate attention include Qwen Image 2.1 Q4_K_M failing on M5 Max systems, persistent long-context chat lag, and Bonsai model loading failures. High-priority items encompass CPU spinning at 95% during idle states on v0.1.903-beta, int4 quantization validation gaps, and MS Store Python path complications.

**6. What This Means for Application Developers**
Decision model training unlocks specialized workflow capabilities. Enhanced embedding model support via llama-server delivers meaningful performance improvements. Security enhancements address numpy pickle loading and whisper-server exposure. Browser panel and video handling refinements, combined with MacOS download functionality, strengthen the platform's overall user experience.</think>

# Unsloth Digest — 2026-10-08

## 1. Today's Highlights

Unsloth released **v0.1.904-beta**, introducing the ability to train custom decision models that convert any text or vision LLM into a Jev-style decision model, with reported accuracy improvements from 30% to 80%. The update also adds native ComfyUI model support, diffusion improvements, and an enhanced browser in Desktop. Meanwhile, the Studio team landed multiple PRs addressing Qwen3.6 thinking controls, MoE expert memory handling, and embedding model performance via llama-server.

- Release: https://github.com/unslothai/unsloth/releases/tag/v0.1.904-beta

## 2. Releases & Breaking Changes

| Version | Change Type | Description |
|---------|-------------|-------------|
| **v0.1.904-beta** | New Feature | Decision model training — convert any text/vision LLM into a Jev-style decision model (30%→80% accuracy). Includes native ComfyUI models, diffusion improvements, and better Browser in Desktop. |
| | Security Fix | `np.load(..., allow_pickle=True)` now prompts for confirmation in Auto mode before loading potentially unsafe pickles. |

**No breaking API changes** reported in this release cycle.

## 3. New Model & Hardware Support

- **Decision Models**: Any text or vision LLM can now be fine-tuned as a decision model directly from Unsloth, with built-in support for testing, exporting, and serving.
- **AMD ROCm**: The `unsloth[amd]` package still incorrectly replaces ROCm torch with CUDA torch from PyPI despite the torch ceiling bump to `<2.15.0` — ongoing issue (#12947).
- **Apple MPS**: Image generation with VAE tiling builds float64 weights on MPS, causing failures (#12935).
- **Qwen Models**: Qwen3.6 now supports Thinking/Preserve thinking toggles in Studio; Qwen3.5 safetensors and MLX tool call arguments are now preserved correctly.

## 4. Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **MoE Inference** | `--ubatch-size 2048` when MoE experts spill to RAM (#12950) | Higher throughput for partially offloaded MoE models |
| **MoE Cache** | `--moe-cache-mib auto` for GPU cache sizing of spilled experts (#12951) | Automatic VRAM allocation optimization |
| **Embedding Models** | llama-server fallback for EmbeddingGemma when sentence-transformers fails (#13005, #13006) | ~129 chunks/s vs ~5 chunks/s CPU baseline — **~25x speedup** |
| **Studio Dropdowns** | Static dark dropdown glow instead of per-menu measurement (#13004) | Eliminates double-freeze on dark mode menu open |
| **Vision Training** | Support for datasets with partial missing images (#12991) | Enables training on datasets like ScienceQA (57/100 rows text-only) |

## 5. Stability & Regressions

### Critical (No Fix PR Yet)
- **Qwen Image 2.1 Q4_K_M** fails on M5 Max 48GB — memory limitations (#11792)
- **Bonsai models** fail to load entirely (#11259) — ternary/1bit PrismML models
- **CPU spinning** at 95% across all cores on v0.1.903-beta at idle (#12942) — `OPENBLAS_NUM_THREADS=1` has no effect

### High Priority (Fixes In Progress)
- **MXC probe** fails with `ReadGrantError` on MS Store Python (#12941) — Windows App Container isolation issue
- **int4 loader** doesn't validate `group_size` against actual `weight_scale` shape (#12955) — risk of silent quantization corruption
- **AMD pip install** replaces ROCm torch with CUDA torch (#12947) — ROCm users affected

### Medium Priority (UI/UX)
- Long-context chat lag on Windows 10 21h1 (#12552)
- Models not loading after latest update (#12842)
- TTS reads markdown formatting (e.g., "asterisk asterisk") (#12547)

## 6. What This Means for Application Developers

1. **Decision models are now accessible**: If your agent needs to make structured decisions (ranking, routing, classification), you can now train custom decision models in Unsloth rather than prompting general LLMs — potentially a significant latency/cost win.

2. **Embedding performance on NVIDIA/AMD**: The llama-server fallback for embedding models delivers ~25x throughput improvement. If you're using RAG with `unsloth/embeddinggemma-2`, expect dramatically faster indexing on discrete GPUs.

3. **Security hardening**: numpy pickle loading now prompts for confirmation — a welcome change for multi-user Studio deployments, though ensure your workflows account for this if you auto-load pickled datasets.

4. **MacOS parity improving**: Right-click downloads now work on macOS for images/videos, and video attachments open in the browser panel with a built-in player — tighter desktop experience.

5. **Watch for MoE offloading**: If you run Mixtral, DeepSeek-V2, or similar MoE models with partial VRAM, the new `--ubatch-size 2048` and `--moe-cache-mib auto` flags should improve inference throughput — no code changes needed, handled automatically by Studio.

6. **Avoid v0.1.903-beta for CPU-heavy workflows**: The idle CPU spin issue (#12942) on Windows with Ryzen 9 suggests waiting for v0.1.904-beta if CPU resources are constrained.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*