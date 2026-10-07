# AI Infrastructure Digest 2026-10-07

> Generated: 2026-10-07 01:46 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to generate a cross-project comparison report for the AI infrastructure ecosystem based on the digest data I just created. Let me organize this into the requested sections:

1. **Ecosystem Overview** - 3-5 sentences on the overall AI infrastructure landscape
2. **Activity Comparison** - Table comparing Issues, PRs, and Release status
3. **Model Support Race** - Which projects support which new models
4. **Performance Frontier** - Where optimization efforts are concentrated
5. **Layer Positioning** - How projects differ by layer (serving engine, local runtime, gateway, training)
6. **Trend Signals** - Industry trends and what developers should watch

Let me synthesize the data from all four projects:

**vLLM:**
- Releases: None in last 24h
- Issues: Active (critical prefix caching bug with DFlash2/DSpark)
- PRs: Active (PyTorch 2.15.0 upgrade, ROCm optimizations)
- Models: GLM-5.3-Flash SM120, DeepSeek V4.1 ROCm, Qwen4Exp, MiniMax-M3

**SGLang:**
- Releases: None in last 24h
- Issues: Active (DeepSeek HiCache deadlock, hybrid-SWA livelock)
- PRs: Active (scheduler refactoring, DeepSeek V4.1 optimization)
- Models: GLM-5.3-Flash breakable CUDA graph, DeepSeek V4.1 PD decode

**llama.cpp:**
- Releases: 9 commits (K2 Horizon, PLaMo-3, CUDA BF16 for XIELU, etc.)
- Issues: Active (Qwen4exp CUDA slowdown, vision KV cache)
- PRs: Active (Vulkan density gate, GPU cache for MoE, CUDA fixes)


- Models: K2 Horizon, Maion-Coder, PLaMo-3, Cohere2 Vision

**Ollama:**
- Releases: None
- Issues: Active (MLX runner performance, clef-flash failure)
- PRs: Active (Gemma 4 renderer fix, multimodal embeddings)
- Models: K2 Horizon feature request, EmbeddingGemma2, multimodal embeddings

**LiteLLM:**
- Releases: None
- Issues: Active (GPT-5.4 empty responses, DeepSeek vision drop)
- PRs: Active (router cache, SDK dependencies)
- Models: Gemini 3.x

, Bedrock region support

**Unsloth:**
- Releases: v0.1.903-beta
- Issues: Medium activity (lag, multi-account sync)
- PRs: Active (Audio API, vision training fixes)
- Models: EmbeddingGemma 2, Audio API

I'm looking at the ecosystem layer by layer. vLLM and SGLang compete at the serving engine level with vLLM emphasizing stability while SGLang pushes scheduler innovation. llama.cpp handles local inference and edge deployment, Ollama provides an accessible local wrapper, LiteLLM acts as a gateway normalizing multiple providers, and Unsloth focuses on fine-tuning workflows. This reveals a fragmented but complementary stack.

The optimization race is particularly interesting—KV cache remains the pain point with vLLM and SGLang both chasing prefix caching bugs, while llama.cpp leads in kernel optimizations and quantization. Batching improvements are split between vLLM and SGLang's scheduler work, distributed serving gets attention from SGLang's helix parallelism and LiteLLM's router, and ROCm kernels are now active across multiple projects. Emerging patterns show vision multimodal as a major theme with ViT CUDA graph, EmbeddingGemma 2, and DeepSeek V4.1 support. Agentic workloads are driving features like speculative decoding and tool calling improvements, while performance on emerging hardware like Blackwell and AMD RDNA4 is becoming critical.</think>

# Cross-Project AI Infrastructure Digest — 2026-10-07

---

## 1. Ecosystem Overview

The AI inference stack is in a phase of rapid horizontal expansion. Today's activity shows a clear bifurcation: **serving engines** (vLLM, SGLang) are locked in a performance race around KV cache reliability and prefix caching correctness, while **local runtimes** (llama.cpp, Ollama) push model coverage across diverse hardware targets. Meanwhile, **gateways** (LiteLLM) consolidate multi-provider abstractions, and **fine-tuning** (Unsloth) expands into multimodal and voice workflows. The net effect: developers can now deploy the same model across cloud GPUs, Apple Silicon, AMD RDNA, and NPUs—but each layer has its own stability frontier.

---

## 2. Activity Comparison

| Project | Open Issues | Recent PRs | Releases (24h) | Status |
|---------|-------------|------------|----------------|--------|
| **vLLM** | 10+ (critical: prefix cache corruption) | 11 | 0 | High velocity; stability focus |
| **SGLang** | 9 (high: HiCache deadlock) | 10+ | 0 | High velocity; scheduler refactor |
| **llama.cpp** | 8 | 20+ | 9 commits | High velocity; model/hardware expansion |
| **Ollama** | 17 (MLX perf regressions) | 25 | 0 | Medium velocity; UX and MLX focus |
| **LiteLLM** | 10+ (GPT-5.4, DeepSeek vision) | 15+ | 0 | Medium velocity; gateway consolidation |
| **Unsloth** | 5 | 19 | 1 (v0.1.903-beta) | High velocity; Audio + multimodal push |

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **GLM-5.3-Flash** | ✅ (SM120 investigate) | ✅ (breakable CUDA graph) | — | — | — | — |
| **DeepSeek V4.1** | ✅ (ROCm decode) | ✅ (PD decode node) | — | — | — | — |
| **K2 Horizon** | — | — | ✅ (0.9B–36B MoVA) | 🔲 (request) | — | — |
| **Qwen4Exp / Qwen3-Next** | ✅ (ROCm fused kernel) | — | — | — | — | — |
| **EmbeddingGemma 2** | — | — | — | — | — | ✅ (multimodal) |
| **Maion-Coder** | — | — | ✅ | — | — | — |
| **PLaMo-3** | — | — | ✅ (tokenizer) | — | — | — |
| **Cohere2 Vision** | — | — | ✅ (MTMD) | — | — | — |
| **Gemma 4** | — | — | — | ✅ (renderer fix) | — | — |
| **Gemini 3.x** | — | — | — | — | ✅ (temp handling) | — |

**Leader**: llama.cpp leads in raw model coverage (6 new architectures this cycle). vLLM and SGLang tie on production-oriented model support for cloud GPUs.

---

## 4. Performance Frontier

| Optimization Area | Leading Project(s) | Key Work |
|------------------|-------------------|----------|
| **KV Cache / Prefix Caching** | vLLM 🔴, SGLang | vLLM: critical bugfix for DFlash2 corruption (#60174). SGLang: scheduler refactor with `prefix_len` tracking |
| **Quantization** | llama.cpp | q4_0/q5_0 V dequant fix on Blackwell; Vulkan density gate for MoE (+21–36% throughput) |
| **Kernel Fusion** | llama.cpp, vLLM | ROCm: Qwen3-Next fused QK-norm+RoPE+gate (vLLM). Vulkan: subgroup reductions for RMS Norm |
| **Distributed / DP** | SGLang | Helix parallelism roadmap; DeepSeek V4.1 PD decode node |
| **MLX / Apple Silicon** | Ollama | Performance regressions being debugged (~1 tok/s on Gemma 4 bf16) |
| **Memory Management** | llama.cpp | GPU cache for MoE experts (LRU, batch ≤32); OOM safeguard for MLX pulls |
| **CUDA Graphs** | vLLM | ViT Full CUDA Graph RFC (#38175) — multi-modality push |

**Hottest thread**: KV cache correctness. Both vLLM (#60174) and SGLang (#41579) have live corruption/livelock bugs affecting production prefix caching.

---

## 5. Layer Positioning

| Layer | Projects | Positioning |
|-------|----------|-------------|
| **Serving Engine** | **vLLM**, **SGLang** | vLLM = stability-first (PyTorch 2.15, strict types). SGLang = scheduler innovation (prefix_len, helix DP). Both target cloud GPUs. |
| **Local Runtime** | **llama.cpp** | Edge/embedded inference across CUDA/Vulkan/Metal/OpenCL/ROCm. No server—runs as library or via `llama-server`. |
| **Local UI + Runtime** | **Ollama** | Consumer wrapper around llama.cpp/llama-server. Homebrew-ready, embedded browser in Unsloth, MLX runner. |
| **Gateway / Proxy** | **LiteLLM** | Multi-provider normalization (OpenAI-compatible, 100+ backends). Router, cache, budget controls. |
| **Fine-tuning** | **Unsloth** | Studio UI + runtime for LoRA/QLoRA. Now expands to Audio API, vision dataset training, EmbeddingGemma. |

**Competitive lines**: vLLM ↔ SGLang (cloud serving). llama.cpp ↔ Ollama (local inference). LiteLLM ↔ vLLM (both do inference, different abstraction). Unsloth is orthogonal (training layer).

---

## 6. Trend Signals

### What Agent Developers Should Watch

1. **Prefix Caching is not yet production-ready** — Both major serving engines have live bugs. If your agent relies on prefix caching (e.g., system prompt reuse, RAG with shared context), validate on the specific engine version before production.

2. **Multi-modality is crossing the chasm** — ViT CUDA graphs in vLLM, EmbeddingGemma 2 in Unsloth, Cohere2 Vision in llama.cpp. Vision-Language Models are becoming first-class citizens across the stack.

3. **Agentic tool-calling bugs are widespread** — Gemma 4 validation failures (vLLM), qwen3_xml parser edge cases (vLLM), Minicpm5 tool call parsing (Ollama), MCP tool conversion (LiteLLM). If you're building agents with function calling, expect friction.

4. **Hardware fragmentation is accelerating** — Blackwell (sm_120), AMD RDNA4, Intel Gaudi, NPUs (Apple Neural Engine via MLX, NPU HiCache in SGLang). Each target has distinct kernel paths and bug surfaces.

5. **Speculative decoding is heating up** — Ollama's top feature request (68 👍), Unsloth's Decision API playground, SGLang's EAGLE fixes. Early-stage but actively worked on.

6. **Audio is emerging as the next frontier** — Unsloth Audio API, Ollama voice cloning path, llama.cpp GigaAM quantization selection. Voice agent pipelines are becoming easier to build end-to-end.

### Decision Points

| Scenario | Recommended Stack |
|----------|-------------------|
| **Cloud GPU inference** | vLLM (stability) or SGLang (throughput experiments) |
| **Apple Silicon local** | Ollama (ease) or llama.cpp (control) |
| **Multi-provider gateway** | LiteLLM |
| **Fine-tune + deploy** | Unsloth → vLLM/Ollama |
| **Edge / cross-platform** | llama.cpp (Vulkan covers most GPUs) |

---

*Cross-project synthesis from vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth — data for 2026-10-07.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the provided GitHub data to create a structured digest for vLLM on 2026-10-07.

Looking at the data:

**Releases:** None in the last 24h

**Key Issues (by comment count):**
1. #38175 - RFC: Support ViT Full CUDA Graph (Tracker) - 35 comments - multi-modality, kimi
2. #39072 - Bug: Gemma4 + PI coding agent validation failed - 28 comments
3. #25700 - RFC: Limit the use of envvars in vLLM - 20 comments
4. #49569 - Feature: Plan for enabling mypy in tests directory - 16 comments
5. #53963 - GLM-5.3-Flash no SM120 sparse-MLA path - 15 comments
6. #60174 - Bug: DFlash2/DSpark + prefix caching corrupt output - 12 comments (very recent, 2026-10-06)
7. #51679 - Bug: qwen3_xml tool parser consumes <|im_end|> - 12 comments
8. #45268 - Bug: EngineDeadError after L1 sleep/wake cycle - 12 comments
9. #45647 - Bug: nvidia/Kimi-K2.6-nvfp4 cannot find huggingface file - 10 comments
10. #59566 - Consolidate speculative decoding tests - 9 comments

**Key PRs (by activity):**
1. #60324 - Update PyTorch to 2.15.0, torchvision to 0.29.1, triton to 3.9.0
2. #52558 - Add general tensor dumper for Model Runner V2
3. #51406 - ROCm: Enable fused QK-norm+RoPE+gate Triton kernel for Qwen3-Next


4. #55993 - Fix ghost demo.py Usage in offline LLM examples
5. #58373 - Bugfix: Widen ep_gather output offset to int64
6. #46427 - rust: Add generative scoring route
7. #59875 - Bugfix: Release shared memory on NIXL setup failure
8. #60120 - Refactor: Remove dead code multiple places
9. #59668 - ROCm: Single-launch DSA decode candidate mask
10. #59330 - Bugfix: Stop P/D transfers short of the last prompt token
11. #60043 - Core: Remove leftovers of mamba_cache_mode=

I notice several pull requests focused on bug fixes and performance improvements across different components. The PyTorch version upgrade is significant, along with ROCm optimizations for Qwen3-Next and DeepSeek V4. There are targeted fixes for memory management, tensor operations, and model runner improvements. The issues range from tool parsing problems to CUDA graph support for vision transformers, indicating ongoing refinement of the vLLM project.

The most critical concerns involve potential data corruption in DFlash2/DSpark with prefix caching, and performance regressions in Nemotron-3.5-Lightning NVFP4 decode since v0.29.0. These require immediate investigation to prevent downstream issues.</think>

# vLLM Digest — 2026-10-07

## 1. Today's Highlights

The vLLM project is addressing critical stability issues in prefix caching with DFlash2/DSpark (Issue #60174), while also advancing multi-modality support with a new RFC for ViT Full CUDA Graph (#38175). A significant PyTorch upgrade to 2.15.0 is in progress (PR #60324), and ROCm optimizations continue with fused kernel support for Qwen3-Next and DeepSeek V4.1.

---

## 2. Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| **No new releases** | No releases published in the last 24 hours | — |

---

## 3. New Model & Hardware Support

| Model/Architecture | Details | Link |
|--------------------|---------|------|
| **GLM-5.3-Flash (glm5_next)** | Investigation ongoing for SM120 (RTX PRO 6000 Blackwell) support — three failure modes identified for rope-free sparse MLA | [#53963](https://github.com/vllm-project/vllm/issues/53963) |
| **DeepSeek-V4.1** | New ROCm decode candidate mask optimization: single-launch DSA kernel | [#59668](https://github.com/vllm-project/vllm/pull/59668) |
| **Qwen4Exp** | Fused PLE Triton kernels now ported to AMD/ROCm backend | [#60021](https://github.com/vllm-project/vllm/pull/60021) |
| **MiniMax-M3** | Fixed decode indexer shared-memory stage reuse | [#60194](https://github.com/vllm-project/vllm/pull/60194) |
| **AMD Zen CPU** | CI image build now enabled on AMD CI pipeline | [#60016](https://github.com/vllm-project/vllm/pull/60016) |

---

## 4. Performance & Optimization

| Area | Change | Impact | Link |
|------|--------|--------|------|
| **PyTorch upgrade** | Update to 2.15.0, torchvision 0.29.1, triton 3.9.0 (test channel) | Latest framework features and fixes | [#60324](https://github.com/vllm-project/vllm/pull/60324) |
| **DeepSeek V4.1 ROCm** | Single-launch DSA decode candidate mask | Reduced kernel count per layer | [#59668](https://github.com/vllm-project/vllm/pull/59668) |
| **Qwen3-Next ROCm** | Fused QK-norm+RoPE+gate Triton kernel enabled | Performance optimization on AMD | [#51406](https://github.com/vllm-project/vllm/pull/51406) |
| **P/D transfers** | Stop prefill/decode transfers short of last prompt token | Memory/layout correctness fix | [#59330](https://github.com/vllm-project/vllm/pull/59330) |
| **Model Runner V2** | General tensor dumper for debugging | Improved observability | [#52558](https://github.com/vllm-project/vllm/pull/52558) |
| **Spec Decode EAGLE** | Fixed multimodal embedding merge in Llama 4 and Mistral Large 3 drafters | Correctness fix for regression | [#57633](https://github.com/vllm-project/vllm/pull/57633) |

---

## 5. Stability & Regressions

### Critical

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| 🔴 **Critical** | [#60174](https://github.com/vllm-project/vllm/issues/60174) | **DFlash2/DSpark + prefix caching corrupt output** after cache hit on Qwen3.8-27B NVFP4 (compressed-tensors) on v0.30/0.31; v0.29 and FP8 target/MTP work fine | Open, 12 comments |
| 🔴 **Critical** | [#59770](https://github.com/vllm-project/vllm/issues/59770) | **Nemotron-3.5-Lightning NVFP4 decode ~16% slower** on DGX Spark (GB10/SM121) since v0.29.0 | Open, 6 comments |

### High

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| 🟠 **High** | [#39072](https://github.com/vllm-project/vllm/issues/39072) | **Gemma4 + PI coding agent**: Validation failed for tool "edit" — missing 'path' property | Open, 28 comments |
| 🟠 **High** | [#45268](https://github.com/vllm-project/vllm/issues/45268) | **EngineDeadError** after L1 sleep/wake cycle with `--kv-offloading-backend native + --enable-sleep-mode` | Open, 12 comments |
| 🟠 **High** | [#55080](https://github.com/vllm-project/vllm/issues/55080) | **tool_choice='none'** silently deletes tool-call-shaped content | Open, 9 comments |
| 🟠 **High** | [#53051](https://github.com/vllm-project/vllm/issues/53051) | **Prefill misdispatched** into spec-decode FULL cudagraph when prompt length == 1 + num_speculative_tokens — silent GDN state loss | Open, 7 comments |

### Medium

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| 🟡 **Medium** | [#51679](https://github.com/vllm-project/vllm/issues/51679) | **qwen3_xml tool parser** consumes `<|im_end|>` delimiter, merging reasoning into content | Open, 12 comments |
| 🟡 **Medium** | [#57423](https://github.com/vllm-project/vllm/issues/57423) | **FlashInfer autotune config cache** hits only on rank 0, deadlocking engine launch (closed) | Closed |

---

## 6. What This Means for Application Developers

**Immediate actions:**
- **Avoid prefix caching with DFlash2/DSpark** on Qwen3.8-27B NVFP4 until #60174 is resolved — corrupted outputs may go unnoticed in production.
- **Delay v0.30+ upgrades** for Nemotron-3.5-Lightning NVFP4 deployments on DGX Spark; the ~16% regression is significant.

**Coming improvements:**
- **Tool-calling reliability**: Fixes in flight for Gemma4 validation errors and the qwen3_xml parser edge cases.
- **New APIs**: Rust generative scoring route (PR #46427) closes an API parity gap.
- **Better debugging**: General tensor dumper for Model Runner V2 (PR #52558) aids troubleshooting.

**Long-term direction:**
- Multi-modality is a focus area — ViT Full CUDA Graph support tracked in RFC #38175 will significantly improve vision-language model throughput.
- ROCm optimizations continue to mature for AMD hardware with Qwen4Exp and DeepSeek V4.1 kernels.

---

*Generated from vllm-project/vllm activity on 2026-10-07*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the GitHub data for SGLang and create a structured digest.

Looking at the data:

**Releases & Breaking Changes:**
- No releases in the last 24h

**Key Issues (by activity):**
1. #26340 - CUDA Coredump Tracker (324 comments) - This is a tracking issue for CUDA coredumps
2. #29736 - Roadmap: Decode Context Parallelism & Helix Parallelism Q4 2026 (20 comments)
3. #17050 - CI Test Failures tracking (14 comments)
4. #42752 - Flaky tests tracker (13 comments)
5. #23705 - Adaptive Speculative Decoding Roadmap (11 comments)
6. #21065 - CI Maintenance Mode (11 comments, closed)
7. #33656 - DeepSeek-V4 bug with hierarchical cache (8 comments, closed)
8. #40877 - DeepSeek-V4.1-Flash field report on RTX PRO 6000 (6 comments)
9. #40843 - GLM-5.3 DFLASH speculative decoding bug (5 comments)
10. #41579 - Hybrid-SWA + radix cache livelock bug (5 comments)

**Key PRs:**
- #42845 - Enable breakable prefill CUDA graph by default for GLM-5.3-Flash
- #42844 - Inkling chat render/parse through tml-renderers
- #42846 - Keep request row across FDFO blocks
- #42824, #42825, #42822 - Scheduler changes with prefix_len
- #40177 - DeepSeek V4.1 PD decode node DP attention
- #36810 - Fix overlap scheduling for NVIDIA CC on Blackwell
- #42611 - Fix KDA beta sigmoid bit-identical to torch.sigmoid


- #42784 - Bump transformers to 5.19.0

I'm tracking several architectural improvements across prefix caching, DeepSeek optimization, and Blackwell performance. The transformer dependency update to 5.19.0 likely brings compatibility enhancements. Decoder enhancements include better CUDA graph handling for GLM models and refined scheduler logic for prefix management. Hardware-specific work addresses NVIDIA Confidential Computing on Blackwell and field validation on RTX PRO 6000 infrastructure. A critical fix addresses the KDA beta sigmoid computation to ensure numerical consistency.</think>

# SGLang Digest — 2026-10-07

## Today's Highlights

SGLang developers are driving forward with significant scheduler refactoring around prefix caching and state management (issues #42824, #42825, #42822), alongside active DeepSeek V4.1 optimization work and Blackwell performance improvements for NVIDIA Confidential Computing. CI infrastructure remains a focus with maintenance mode active and flaky test tracking in place.

## Releases & Breaking Changes

No new releases in the last 24 hours.

## New Model & Hardware Support

- **GLM-5.3-Flash**: Breakable prefill CUDA graph now enabled by default ([#42845](https://github.com/sgl-project/sglang/pull/42845))
- **DeepSeek-V4.1**: Active development on PD decode node DP attention support ([#40177](https://github.com/sgl-project/sglang/pull/40177))
- **RTX PRO 6000 (SM120)**: Field validation complete on 8× RTX PRO 6000 Blackwell Max-Q (PCIe-only, no NVLink) — working configurations and throughput measurements reported ([#40877](https://github.com/sgl-project/sglang/issues/40877))

## Performance & Optimization

- **DeepSeek V4.1 Optimization**: Ongoing work tracked in roadmap [#42170](https://github.com/sgl-project/sglang/issues/42170); mHC code cleanup complete, prefill optimizations landed
- **NVIDIA CC on Blackwell**: Fix for overlap scheduling when `cudaMemcpyAsync` is forced synchronous under Confidential Computing, which was serializing decode steps ([#36810](https://github.com/sgl-project/sglang/pull/36810))
- **KDA Kernel Fix**: Sigmoid implementation now bit-identical to `torch.sigmoid` ([#42611](https://github.com/sgl-project/sglang/pull/42611))
- **FLUX.2**: Eliminated unnecessary cat operation in output projection ([#41943](https://github.com/sgl-project/sglang/pull/41943))
- **Scheduler Refactoring**: Prefix tracking moved to `prefix_len` field, removing `Req.prefix_indices` and `extend_range` for cleaner prefix cache logic ([#42824](https://github.com/sgl-project/sglang/pull/42824), [#42825](https://github.com/sgl-project/sglang/pull/42825), [#42822](https://github.com/sgl-project/sglang/pull/42822))
- **FDFO Block Handling**: Request rows now persist across FDFO blocks to fix KV cache leak ([#42846](https://github.com/sgl-project/sglang/pull/42846))
- **Transformers Bump**: Dependency update to transformers 5.19.0 ([#42784](https://github.com/sgl-project/sglang/pull/42784))

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | DeepSeek-V4 + HiCache TP deadlock under concurrent long prefills — scheduler and detokenizer go silent, `/health` 503 | Open — [#42465](https://github.com/sgl-project/sglang/issues/42465) |
| **High** | Hybrid-SWA + radix cache admission livelock — GPU idle with waiting requests | Open — [#41579](https://github.com/sgl-project/sglang/issues/41579) |
| **Medium** | DeepSeek-V4-Pro decode ~5% slower at concurrency 1 on GB300 after #39704 | Open — [#42074](https://github.com/sgl-project/sglang/issues/42074) |
| **Medium** | GLM-5.3 with DFLASH: severe repetition and degenerate loops in reasoning output | Open — [#40843](https://github.com/sgl-project/sglang/issues/40843) |
| **Medium** | NPU HiCache crash in `MHATokenToKVPoolHost` with single-tensor device buffer | Open — [#42672](https://github.com/sgl-project/sglang/issues/42672) |
| **Low** | Page-split kernel wraps at ~3.67M tokens/rank on large SM120 KV pools (int32 overflow) | Closed — [#34025](https://github.com/sgl-project/sglang/issues/34025) |
| **Low** | `response_format` + tools on GLM-47: tool calls silently dropped | Open — [#42269](https://github.com/sgl-project/sglang/issues/42269) |

**CI Status**: Maintenance mode active ([#21065](https://github.com/sgl-project/sglang/issues/21065)); 2 broken, 9 flaky tests as of 2026-10-07 ([#17050](https://github.com/sgl-project/sglang/issues/17050))

## What This Means for Application Developers

1. **If you're serving DeepSeek-V4/V4.1**: Be aware of the HiCache deadlock issue under heavy prefills — avoid concurrent long prompts with `--enable-hierarchical-cache --hicache-write-policy write_through` until fixed. DeepSeek V4.1 optimizations are landing progressively.

2. **If you're using GLM-5.3-Flash**: You now get breakable prefill CUDA graphs by default, which should improve scheduling flexibility for variable-length inputs.

3. **If you're on Blackwell (GB300/B300) with NVIDIA CC**: The overlap scheduling fix should improve decode throughput significantly — test your workloads after the fix merges.

4. **If you're hitting prefix cache issues**: The scheduler refactoring (prefix_len, dropping prefix_indices) is a structural change that may affect edge cases; monitor for regressions.

5. **Watch**: The adaptive speculative decoding roadmap ([#23705](https://github.com/sgl-project/sglang/issues/23705)) is in progress — upcoming changes will handle variable acceptance patterns in agentic workloads better.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data from llama.cpp and create a structured digest. I'll organize the information into the requested sections.

Looking at the data:

**Releases (last 24h):**
- b11457: CUDA BF16 support for XIELU
- b11456: ggml-cuda per-thread stream for buffer-init padding memset
- b11455: PLaMo-3 tokenizer pre-segmentation
- b11454: K2 Horizon dense and MoVA support
- b11451: OpenCL fix OOB read in adreno xmem GEMM
- b11450: RPC add -sm tensor
- b11449: ggml fix CLAMP on non-contiguous views
- b11448: CUDA BF16/FP16 conversion to f32 chunking
- b11447: models support pplx-decider
- b11446: Metal fix excess threadgroup memory in quantized flash attention

**Issues (top by comments):**
- #19466: KV cache saving doesn't work for vision models (CLOSED, 45 comments)
- #25973: SYCL bad performance on newer oneAPI (CLOSED, 14 comments)
- #24415: can't load gemma-4-12B with OpenVINO (OPEN, 13 comments)
- #26484: ARM CPU decode bandwidth (CLOSED, 11 comments)
- #29424: K2 Horizon support (CLOSED, 11 comments)
- #24943: Vulkan VAE garbles images (CLOSED, 10 comments)
- #28734: Qwen4exp CUDA decode slowdown (OPEN, 9 comments)
- #16266: Metal crashes on macOS 12/13 (CLOSED, 9 comments)

**PRs (top):**
- #27332: Vulkan density gate for MUL_MAT_VEC_ID path


- #29887: GPU cache for MoE experts
- #30077: CUDA fix q4_0/q5_0 V dequantization on Blackwell
- #30076: mirror K/V tensors with empty shards
- #29977: hexagon 64-byte stride
- #27760: server report live generation throughput
- #29910: ggml-cuda fix VGPR spills on Q2_K
- #29778: Maion-Coder arch support
- #29185: OpenVINO Q1, Q2 quantization
- #30072: Metal large matrix output

Several performance improvements and model support updates are in progress. The Vulkan density gate optimization for MUL_MAT_VEC_ID is being developed, alongside GPU caching for MoE experts. Blackwell CUDA fixes for q4_0/q5_0 V dequantization are underway, with additional work on K/V tensor mirroring and hexagon optimizations. Server throughput reporting and Maion-Coder architecture support are also advancing, along with OpenVINO quantization work and Metal matrix handling improvements.</think>

# llama.cpp Digest — 2026-10-07

## 1. Today's Highlights

The llama.cpp project continues active development across CUDA, Vulkan, and Metal backends. Notable today: K2 Horizon model support landed (dense and MoVA variants), PLaMo-3 tokenizer pre-segmentation was added, and several backend-specific performance fixes shipped including CUDA Blackwell dequantization optimizations and Metal threadgroup memory fixes for quantized flash attention. The RPC system gained tensor support (`-sm tensor`), expanding distributed inference capabilities.

---

## 2. Releases & Breaking Changes

| Commit | Description | Impact |
|--------|-------------|--------|
| [b11455](https://github.com/ggml-org/llama.cpp/commit/b11455) | **PLaMo-3 tokenizer pre-segmentation** — Implements hard boundaries before `<|plamo:...|>` tokens and runs of 4+ identical characters before Unigram DP | New tokenizer behavior |
| [b11454](https://github.com/ggml-org/llama.cpp/commit/b11454) | **K2 Horizon dense and MoVA support** — Full GGUF conversion, loading, and compute graph for 0.9B/3.7B/7B/32B/36B MoVA variants | New model family |
| [b11450](https://github.com/ggml-org/llama.cpp/commit/b11450) | **RPC: add `-sm tensor`** — Allows tensor-split RPC mode, bumped major version | RPC protocol change |

---

## 3. New Model & Hardware Support

- **K2 Horizon** — Dense and MoVA variants now supported: 0.9B, 3.7B, 7B, 32B, 36B. Includes GGUF conversion code, hparams/tensor loading, and compute graph. See PR [#29535](https://github.com/ggml-org/llama.cpp/pull/29535).
- **PLaMo-3** — New tokenizer with pre-segmentation logic for special tokens and character runs.
- **Maion-Coder** — Architecture support added. See PR [#29778](https://github.com/ggml-org/llama.cpp/pull/29778).
- **Cohere2 Vision** — MTMD support added. See PR [#30062](https://github.com/ggml-org/llama.cpp/pull/30062).
- **CUDA BF16** — XIELU kernel now supports `nv_bfloat16`. See [#29955](https://github.com/ggml-org/llama.cpp/pull/29955).
- **GLM5Next MTP** — Multi-Token Prediction support implemented. See PR [#29928](https://github.com/ggml-org/llama.cpp/pull/29928).

---

## 4. Performance & Optimization

| PR/Commit | Area | Change | Metric |
|-----------|------|--------|--------|
| [#30077](https://github.com/ggml-org/llama.cpp/pull/30077) | CUDA Blackwell | Fix q4_0/q5_0 V dequantization — eliminates 128-336 byte stack frame on sm_120a/sm_100a/sm_101a with CUDA 12.8 | Kernel efficiency |
| [#29910](https://github.com/ggml-org/llama.cpp/pull/29910) | CUDA (Q2_K) | Fix massive VGPR spills by adjusting unroll strategy | AMD MI50 performance |
| [#27332](https://github.com/ggml-org/llama.cpp/pull/27332) | Vulkan MoE | Replace fixed 8-token cutoff with density gate — validated on gfx1151, RDNA3, gfx1013 | +36% at B=9, +27% at B=16, +21% at B=64 |
| [#29882](https://github.com/ggml-org/llama.cpp/pull/29882) | Vulkan RMS Norm | Subgroup reductions replace workgroup reduction | Intel B70, RTX 4060 Ti |
| [#29887](https://github.com/ggml-org/llama.cpp/pull/29887) | MoE | GPU cache for host-resident experts with LRU — only misses upload to GPU | Small batches ≤32 tokens |
| [#11446](https://github.com/ggml-org/llama.cpp/commit/b11446) | Metal | Fix excess threadgroup memory in quantized flash attention | Memory efficiency |
| [#29977](https://github.com/ggml-org/llama.cpp/pull/29977) | Hexagon | 64-byte stride for dccleaninva (was 128) | Cache coherency |

---

## 5. Stability & Regressions

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| [#19466](https://github.com/ggml-org/llama.cpp/issues/19466) | **High** | Closed | KV cache saving doesn't work for vision-enabled models — 45 comments, 7 👍 |
| [#28734](https://github.com/ggml-org/llama.cpp/issues/28734) | **High** | Open | Qwen4exp (Qwen3.8-Flash-Next) CUDA decode slows linearly with context length |
| [#29967](https://github.com/ggml-org/llama.cpp/issues/29967) | **Medium** | Open | Segfault when tool named "call" is called on llama-server |
| [#30004](https://github.com/ggml-org/llama.cpp/issues/30004) | **Medium** | Open | CUDA ADD/GELU slower on B200 since PDL commit — regression since 7b28f950 |
| [#29932](https://github.com/ggml-org/llama.cpp/issues/29932) | **Medium** | Open | Qwen4exp per_layer_token_embd CPU-pinned — Q8 model can't load on 2×96 GiB Vulkan+RPC |
| [#28282](https://github.com/ggml-org/llama.cpp/issues/28282) | **Medium** | Open | CUDA illegal memory access on GLM-5.3-Flash long prefill at -ub 2048 (Blackwell/sm_120) |
| [#24415](https://github.com/ggml-org/llama.cpp/issues/24415) | **Low** | Open | Cannot load gemma-4-12B with OpenVINO — 13 comments |

---

## 6. What This Means for Application Developers

- **New model options**: K2 Horizon (0.9B–36B) and Maion-Coder are now loadable. PLaMo-3 tokenizer support enables new Japanese/English models.
- **CUDA Blackwell users**: If running q4_0/q5_0 quantized models on B200/B100 (sm_120), the dequantization fix in [#30077](https://github.com/ggml-org/llama.cpp/pull/30077) should improve kernel efficiency — consider updating.
- **Vulkan/MoE workloads**: The density gate optimization provides 20–36% throughput gains for batched decode on AMD RDNA3/4. Update if serving MoE models.
- **Metal Mac users**: The quantized flash attention memory fix ([#11446](https://github.com/ggml-org/llama.cpp/commit/b11446)) should reduce crashes on memory-constrained Apple Silicon.
- **Server operators**: PR [#27760](https://github.com/ggml-org/llama.cpp/pull/27760) adds live generation throughput reporting to `/metrics` — useful for real-time monitoring.
- **Distributed inference**: RPC tensor-split mode (`-sm tensor`) enables finer-grained model parallelism for large models.

---

*Digest generated from github.com/ggml-org/llama.cpp — data for 2026-10-07*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze this GitHub data for Ollama and create a structured digest for 2026-10-07.

Let me go through the data:

## Latest Releases (last 24h)
- None

## Latest Issues (17 total)
Key issues to highlight:
1. #5800 - Feature request for speculative decoding (performance) - 65 comments, 68 👍
2. #18769 - clef-flash decision model fails on /v1/systemone - "Clef: non-finite logit" (CUDA) / "Clef: cannot open model" (CPU)
3. #18796 - Bug: fails to run on 2nd 'ollama run' - stuck with no output
4. #18815 - CLOSED - clef-flash HTTP 500 error on /v1/systemone
5. #18817 - Bug: "unsupported tensor size overflows" when importing GSQ-RCO quantized Qwen3.8-Flash-Next
6. #18125 - mlxrunner: num_ctx from Modelfile not enforced, causes Metal watchdog panic
7. #18716 - Error pulling models: "redirect target not allowed"
8. #18698 - Feature request: Support for K2 Horizon models
9. #18728 - LLM-jp-4 parser for harmony output with space after special tokens
10. #18754 - MLX runner not using full GPU (Mac / M4 Pro)
11. #18823 - MLX runner bf16 Gemma 4 decodes at ~1 tok/s on M2 Ultra
12. #18825 - Failed to pull embeddinggemma-2:740m on linux - requires MLX support
13. #10915 - "View Logs" doesn't work on Windows if username contains space


14. #18830 - ollama list shows duplicate model after local compat GGUF migration
15. #18824 - gemma4 12B GGUF gets small renderer without "12b" in name
16. #18821 - llama-server segfault in ggml_gallocr_alloc_graph during clip_encode

## Latest Pull Requests (25 total, showing top 20)
Key PRs:
1. #18829 [CLOSED] server: proxy cloud usage and balance APIs
2. #18828 [OPEN] docs: restructuring and adding sample project
3. #18804 [OPEN] open

I'm tracking several model and rendering issues alongside documentation work. The duplicate model problem and GGUF renderer misclassification are particularly noteworthy, along with a critical segfault in the clip_encode process. Documentation improvements are also underway.</think>

# Ollama Digest — 2026-10-07

## Today's Highlights

A mix of new feature work and bug fixes today. The team landed a fix for the Gemma 4 11.9B renderer misclassification and closed a PR for proxying cloud usage/balance APIs. However, several high-impact issues remain open: speculative decoding is still the most-upvoted feature request (68 👍), the MLX runner shows significant performance degradation on Apple Silicon for certain models (~1 tok/s), and duplicate model entries are appearing after the local compat GGUF migration.

---

## Releases & Breaking Changes

- **No new releases in the last 24 hours.**

---

## New Model & Hardware Support

| Item | Description | PR/Issue |
|------|-------------|----------|
| **K2 Horizon models** | Feature request for MBZUAI IFM's K2 Horizon family (0.9B–36B MoE), Apache 2.0 license | [#18698](https://github.com/ollama/ollama/issues/18698) |
| **LLM-jp-4 harmony format** | Parser support needed for spaces after special tokens in the harmony output format | [#18728](https://github.com/ollama/ollama/issues/18728) |
| **Gemma 4 renderer threshold** | Fixed 11.9B models being misclassified as "small" — threshold lowered from 12.0B to 11.5B | [#18827](https://github.com/ollama/ollama/pull/18827), [#18824](https://github.com/ollama/ollama/issues/18824) |
| **Multimodal embeddings** | EmbeddingGemma2Model architecture now implemented on MLX runner | [#18820](https://github.com/ollama/ollama/pull/18820) |
| **Qwen3.5 tool call parsing** | Parser now keeps tool calls when partial tag follows `<tool_call>` | [#18802](https://github.com/ollama/ollama/pull/18802) |
| **Ornith/Qwen35 auto-detection** | Auto-detect renderer and parser for ornith-1.5 and qwen35-based models | [#17965](https://github.com/ollama/ollama/pull/17965) |
| **Minicpm5-2b native tool calls** | Fixed native tool calls never parsing (root cause: special tokens stripped during detokenization) | [#18499](https://github.com/ollama/ollama/pull/18499) |

---

## Performance & Optimization

| Item | Details | PR/Issue |
|------|---------|----------|
| **Speculative decoding** | Long-standing feature request to add draft model support from llama.cpp — would massively speed up inference | [#5800](https://github.com/ollama/ollama/issues/5800) (65 comments, 68 👍) |
| **MLX runner: Gemma 4 bf16 degradation** | `gemma4:26b-mlx-bf16` and `gemma4:31b-mlx-bf16` decode at 0.8–1.6 tok/s on M2 Ultra (192 GB) — prompt processing normal, GPU idle ~96% of each step | [#18823](https://github.com/ollama/ollama/issues/18823) |
| **MLX runner: not using full GPU** | M4 Pro 48GB shows underutilization with Qwen 3.8 27B; regression vs 0.35.1-rc2 | [#18754](https://github.com/ollama/ollama/issues/18754) |
| **MLX runner: num_ctx not enforced** | `num_ctx` from Modelfile ignored, allowing prompts up to architecture max — causes Metal watchdog panic on long prefill | [#18125](https://github.com/ollama/ollama/issues/18125) |
| **Profiling support** | Enhanced bench.go to run against underlying runners (mlx/llama-server) directly for GPU tooling profiling | [#16611](https://github.com/ollama/ollama/pull/16611) |
| **Oversized pull rejection** | MLX-only implementation to block pulls of models too large to run by default (user can bypass with `--force`) | [#18243](https://github.com/ollama/ollama/pull/18243) |
| **Chat truncation fix** | Preserves most recent user message during truncation; fixes `500: no user query found` in multi-step tool loops | [#18697](https://github.com/ollama/ollama/pull/18697) |

---

## Stability & Regressions

| Severity | Issue | Details | PR/Fix |
|----------|-------|---------|--------|
| **High** | **clef-flash `/v1/systemone` failure** | HTTP 500 "Clef: non-finite logit" on first forward pass; same model works on `/v1/chat/completions`; 27B works on same machine | [#18769](https://github.com/ollama/ollama/issues/18769), [#18815](https://github.com/ollama/ollama/issues/18815) (CLOSED) |
| **High** | **llama-server segfault** | SIGSEGV in `ggml_gallocr_alloc_graph` during `clip_encode` for `qwen3-vl:8b` when another large model is loaded; CUDA "resource allocation failed" | [#18821](https://github.com/ollama/ollama/issues/18821) |
| **High** | **2nd 'ollama run' hangs** | RPi 5, Debian 13 — first run works, subsequent runs stuck with no output | [#18796](https://github.com/ollama/ollama/issues/18796) |
| **Medium** | **Duplicate model entries** | `ollama list` shows duplicate model + bogus `llamacpp:<sha>` tag after local compat GGUF migration (v0.40.0, macOS M5) | [#18830](https://github.com/ollama/ollama/issues/18830) |
| **Medium** | **Model pull redirect error** | `ollama pull` fails with "redirect target not allowed" — cloudflare R2 storage issue | [#18716](https://github.com/ollama/ollama/issues/18716) |
| **Medium** | **GSQ-RCO quantization import fails** | "unsupported tensor size overflows" when importing Qwen3.8-Flash-Next with GSQ-RCO quantization | [#18817](https://github.com/ollama/ollama/issues/18817) |
| **Low** | **embeddinggemma-2:740m pull on Linux** | Fails with "this model requires MLX support, but the MLX runtime is not available" — likely misdetection | [#18825](https://github.com/ollama/ollama/issues/18825) |
| **Low** | **Windows "View Logs" with spaces** | Opening logs fails if username contains a space — path quoting issue | [#10915](https://github.com/ollama/ollama/issues/10915), [#18818](https://github.com/ollama/ollama/pull/18818) |
| **Low** | **Disk-full errors during MLX pulls** | Write errors ignored during blob download, misleading progress; fixed in [#18813](https://github.com/ollama/ollama/pull/18813) | [#18644](https://github.com/ollama/ollama/issues/18644) |

---

## What This Means for Application Developers

1. **Watch the MLX runner** — If you're running on Apple Silicon with Gemma 4 bf16 or Qwen 3.8 models, expect significantly degraded token throughput (~1 tok/s in some configs). The root cause appears to be command-buffer submit bottlenecks, not GPU utilization. Consider using 4-bit MLX or GGUF builds for now.

2. **Avoid `/v1/systemone` with clef-flash** — The decision model consistently fails on that endpoint with non-finite logit errors. Use `/v1/chat/completions` as a workaround.

3. **Mind your model naming** — Gemma 4 models at ~11.9B parameters need "12b" in the name to get the large renderer. The recent fix ([#18827](https://github.com/ollama/ollama/pull/18827)) lowers the threshold but legacy models may still be misclassified.

4. **CLI onboarding streamlined** — The account step is now removed from CLI welcome screen, making `ollama launch` faster for new users.

5. **Cloud integration progress** — Usage and balance APIs are now proxied through the local server for signed-in accounts ([#18829](https://github.com/ollama/ollama/pull/18829) closed).

6. **Duplicate model entries post-migration** — If you pulled `embeddinggemma:latest` after a recent Ollama update, you may see duplicates in `ollama list`. A restart or model prune may be needed.

7. **OOM safeguard incoming** — The team is rolling out oversized-pull rejection for MLX models; this will prevent pulling models that can't run on available hardware.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to generate a LiteLLM digest for 2026-10-07 based on the GitHub data provided. Let me analyze the data and organize it according to the requested sections.

Looking at the data:

1. **Latest Releases**: None in the last 24h

2. **Latest Issues** (top 30 by comment count):
- #31263: Rust Migration - 27 comments - the main tracking issue
- #25429: Bug with chatgpt/gpt-5.4 empty responses - 22 comments
- #32281: MCP tool conversion bug - 8 comments
- #25260: Prisma query engine crashes on Windows - 8 comments
- #44154: Background health check attribution bug - 8 comments
- #28750: Feature for project-scoped budget limits - 7 comments (CLOSED)
- #20078: TTS voice parameter bug - 7 comments
- #44182: Team ID not verified on JWT - 6 comments
- #33456: SchemaSerializer error - 5 comments
- #38358: Request timeout never fires - 5 comments
- #23841: Anthropic /v1/messages bugs - 5 comments
- #32489: openai/chat_completions/* not working - 4 comments
- #44535: Anthropic response without usage - 4 comments
- #33021: Componentized startup misses YAML config - 4 comments
- #26807: Cached prompt tokens billed incorrectly - 4 comments (CLOSED)
- #44211: DeepSeek drops image content - 4 comments
- #44546: Speech provider called twice - 4 comments
- #37039: chatgpt/* non-streaming fails - 4 comments (CLOSED)
- #25951: Race condition in /team/member_add - 4 comments


- #16060: usage-based-routing-v2 bug - 3 comments
- #24769: MCP Registry Browserbase wrong npm name - 3 comments (CLOSED)
- #31887: Cache Control Injection breaks anthropic - 3 comments
- #32118: Feature for multiple API keys with rotation - 3 comments
- #38663: Gemini temperature injection fix - 3 comments
- #43491: Spend caches lose increments - 3 comments
- #36941: budget_limits reset timing - 3 comments
- #35563: Reused provider response IDs collision - 3 comments
- #35536: Security - Responses ID checks policy - 3 comments
- #35524: Budgeted requests skip reservation - 3 comments

Looking at the PRs, there are several open ones focused on router improvements: #44948 and #44960 both address cross-provider baseline cache handling, #44978 is a closed CI fix, and #44447 separates AWS and tokenizer dependencies. Additional work includes #44264 for OTel team overrides, #44669 on Rust types, and #38952 adding YAML OpenAPI support.

The remaining PRs cover pagination for MCP catalogs (#44446), SDK dependencies (#44606, #44340), and fixes for Bedrock region handling (#44152) and streaming tool arguments (#34287). There's also work on trace ID requirements (#44933), JSON validation (#43717), scheduler queue cleanup (#43061), and spend tracking tests (#44967).</think>

# LiteLLM Daily Digest — 2026-10-07

## Today's Highlights

The LiteLLM project continues active development across multiple fronts. The Rust migration effort (#31263) remains the highest-visibility initiative, now with 27 comments from early beta testers. Core infrastructure work includes SDK dependency separation (#44447, #44606) to enable a leaner core package, while several correctness bugs affecting GPT-5 translation, DeepSeek vision, and budget tracking require attention. No releases were cut in the last 24 hours.

---

## Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| No releases | None in last 24h | — |

---

## New Model & Hardware Support

| Model/Backend | Notes | Link |
|--------------|-------|------|
| Gemini 3.x temperature handling | Fix prevents default temperature injection when omitted (conflicts with Google's new defaults) | [#38663](https://github.com/BerriAI/litellm/issues/38663) |
| Bedrock region preservation | Fix maintains `region_name` and model ID on Invoke Claude responses for accurate cost calculation | [#44152](https://github.com/BerriAI/litellm/pull/44152) |
| Qwen3-TTS support | `/v1/audio/speech` endpoint fixes for voice parameter handling | [#20078](https://github.com/BerriAI/litellm/issues/20078) |

---

## Performance & Optimization

| Area | Change | Impact |
|------|--------|--------|
| **Router cache baseline** | Estimate cross-provider baseline cache history (#44948), preserve native baseline identity (#44960) | Improves cache hit rates across providers |
| **SDK dependencies** | Separate core AWS and tokenizer dependencies (#44447, #44606) | Leaner installation; core does not require AWS/HuggingFace packages |
| **MCP catalog pagination** | Portable catalog pagination for gateway listings (#44446) | Enables resumed listings across gateway replicas |
| **Scheduler queue** | Remove request queue entries once they stop waiting (#43061) | Fixes Redis-based prioritized requests failing with TypeError |

---

## Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | **GPT-5.4 empty responses** — `chatgpt/gpt-5.4` returns empty output on non-streaming, bridge fails with "Unknown items in responses API response" | Open [#25429](https://github.com/BerriAI/litellm/issues/25429) |
| **High** | **DeepSeek vision drop** — `role=tool` messages with image content silently dropped ( `_is_vision_forwardable_content` returns False for non-user roles) | Open [#44211](https://github.com/BerriAI/litellm/issues/44211) |
| **High** | **Budget race conditions** — Spend caches lose concurrent increments (#43491); `budget_limits` reset clears counters before commit (#36941) | Open [#43491](https://github.com/BerriAI/litellm/issues/43491), [#36941](https://github.com/BerriAI/litellm/issues/36941) |
| **Medium** | **Anthropic pass-through bugs** — Multiple issues in `/v1/messages` routing to OpenAI/Azure (#23841); missing usage object causes 500 errors (#44535) | Open [#23841](https://github.com/BerriAI/litellm/issues/23841), [#44535](https://github.com/BerriAI/litellm/issues/44535) |
| **Medium** | **Request timeout never fires** — `litellm_settings.request_timeout` doesn't trigger when upstream is silent from first byte | Open [#38358](https://github.com/BerriAI/litellm/issues/38358) |
| **Medium** | **MCP tool conversion bug** — Drops `function` wrapper key on `/v1/chat/completions`, causing 400 with hosted vLLM | Open [#32281](https://github.com/BerriAI/litellm/issues/32281) |
| **Low** | **JWT Team ID not verified** — Team ID from JWT not validated on auth | Open [#44182](https://github.com/BerriAI/litellm/issues/44182) |
| **Low** | **Windows Prisma crash** — Query engine crashes on first query (Python 3.12, LiteLLM 1.82+/1.83.0) | Open [#25260](https://github.com/BerriAI/litellm/issues/25260) |

---

## What This Means for Application Developers

1. **GPT-5 users**: Non-streaming completions with `chatgpt/gpt-5.4` are currently broken — avoid production use or pin to earlier LiteLLM versions until #25429 is resolved.

2. **Multi-provider deployments**: The router cache improvements (#44948, #44960) should improve cost efficiency when routing across providers; monitor for any regression in cache behavior.

3. **Vision workflows with DeepSeek**: If you're using DeepSeek with image inputs in tool messages, verify content is being passed — currently silently dropped (#44211).

4. **Budget enforcement**: Teams using spend limits should be aware of the concurrent increment bug (#43491) — consider temporary mitigations if precise budget enforcement is critical.

5. **Lean installations**: The ongoing SDK refactoring (#44447, #44606) will eventually allow installing LiteLLM core without AWS/HuggingFace dependencies; watch for the resulting package changes.

6. **MCP integrations**: YAML OpenAPI spec support landed (#38952) — better flexibility for custom MCP server definitions.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze this GitHub data and create a structured digest for Unsloth dated 2026-10-07.

First, let me identify key items:

## Latest Release
- v0.1.903-beta: New Browser + Voice Cloning
  - Browser inside Unsloth (files, web pages open beside chat)
  - EmbeddingGemma 2 - Google's new multimodal embedding model
  - New Audio pages

## Issues (by comment count)
1. #5156 - Homebrew Cask submission prep (CLOSED, 13 comments, 22 👍)
2. #6730 - MiCA support feature request (CLOSED, 6 comments)
3. #8600 - Desktop app resize bug (CLOSED, 4 comments)
4. #12836 - Intel GPU pin documentation request (OPEN, 4 comments)
5. #9117 - ModelScope integration request (CLOSED, 4 comments)
6. #12552 - Long-context chat lag (OPEN, 4 comments)
7. #12365 - Multi-account model sync issue (OPEN, 3 comments)
8. #12041 - Chinese model mirror request (CLOSED, 3 comments)
9. #11939 - Dictation microphone access (OPEN, 2 comments)
10. #12680 - ARM64 MacOS build bug (CLOSED, 2 comments)
11. #11822 - Server bind IP feature request (OPEN, 2 comments)
12. #11665 - Auto-scroll disable option (CLOSED, 2 comments)
13. #11614 - AMD RDNA1 tracking (CLOSED, 2 comments)
14. #12862 - Window resize on Linux (CLOSED, 1 comment)


15. #12845 - AppImage resize issue (CLOSED, 1 comment, 3 👍)
16. #12303 - Auto read-aloud feature (OPEN, 1 comment, 2 👍)
17. #12842 - Models not loading (OPEN, 1 comment)
18. #8873 - UUID-form CUDA_VISIBLE_DEVICES (CLOSED, 1 comment)
19. #8596 - Qwen3-VL-Embedding fine-tuning (CLOSED, 1 comment)

A few more issues worth noting: the AppImage resize problem on Linux with 3 👍 reactions, an auto read-aloud feature request with 2 👍, problems loading models after an update, and an interesting UUID-form CUDA_VISIBLE_DEVICES issue that was closed.

Recent PRs show active development across several areas: #12902 focuses on CPU asset selection for native builds, #12911 addresses shell variable formatting, #12912 implements citation links, #12821 adds an Audio API card, #12916 adds a Decision API playground, #12266 fixes stream handling for managed runtimes, #12909 preserves questions in vision dataset training, #12906 displays LAN addresses on the API page, and #12908 trains transparent images against white backgrounds.

Continuing through the PR list: #12910 converts prompt/completion lists to conversations, #12907 retains notebooks when executing URLs, #12900 enables GGUF quant selection for dictation, #12917 makes llama-fit-params executable on macOS, #12914 hides negative prompts for incompatible models, #12891 marks Audio as new in the sidebar, #12899 parallelizes shell tests and browser checks, #12915 applies requested max_seq_length to encoder embeddings, #12913 exports chat system prompts, #12904 corrects live monitor backgrounds in light mode, and #12903 updates frontend test rendering.

The release includes EmbeddingGemma 2 from Google as a multimodal embedding model, plus Audio pages for voice cloning functionality.

Performance work involves stopping managed runtimes when client streams disconnect, parallelizing CI to reduce build times, and fixing encoder embedding max_seq_length handling. On the stability side, several issues are resolved: macOS now properly executes llama-fit-params, AppImage window resizing works, and model loading problems from recent updates are patched. Open issues worth tracking include long-context chat lag, multi-account model synchronization gaps, and microphone access limitations in dictation.

For application developers, the new Audio API card provides ready-to-use endpoints for speaking, cloning, transcribing, and running audio workflows, while the Decision API now includes a playground for testing. Shell variable rendering has been corrected to preserve `$PATH` and similar variables as text rather than mathematical notation.</think>

# Unsloth Digest — 2026-10-07

## 1. Today's Highlights

Unsloth Studio v0.1.903-beta ships with an embedded browser for side-by-side file/webpage viewing alongside chat, plus Google's new **EmbeddingGemma 2** multimodal embedding model and new Audio pages for voice cloning workflows. Multiple PRs landed across Studio UI/UX, vision dataset training, and API improvements — including citation linking, LAN address display, and shell variable rendering fixes.

---

## 2. Releases & Breaking Changes

| Version | Changes | Links |
|---------|---------|-------|
| **v0.1.903-beta** | Embedded browser for files/webpages; EmbeddingGemma 2 support; new Audio pages | [Release](https://github.com/unslothai/unsloth/releases) |

No breaking changes or migration notes reported.

---

## 3. New Model & Hardware Support

- **EmbeddingGemma 2** — Google's new multimodal embedding model now supported. [Docs](https://unsloth.ai/docs/models/embeddinggemma-2)
- **GGUF dictation model quant selection** — Voice settings now lets users pick specific quantizations (with size info) for models like GigaAM that ship multiple variants. [#12900](https://github.com/unslothai/unsloth/pull/12900)
- **Audio API** — New Settings card with curl/Python/JS examples for Speak, Clone, Transcribe, and `/v1/audio/run` endpoints. [#12821](https://github.com/unslothai/unsloth/pull/12821)

---

## 4. Performance & Optimization

- **Managed runtime stream handling** — Fixed bug where dropping a streamed chat left the runtime generating abandoned replies and holding the model (30s wait on Intel Arc). [#12266](https://github.com/unslothai/unsloth/pull/12266)
- **CI parallelization** — Shell suites and Windows browser checks now run up to 4x in parallel, reducing step time from ~6m/9m to lower figures. [#12899](https://github.com/unslothai/unsloth/pull/12899)
- **Encoder embedding max_seq_length** — Fixed FastSentenceTransformer ignoring user-requested sequence length for BERT-style models; now respects `max_seq_length` at load time. [#12915](https://github.com/unslothai/unsloth/pull/12915)

---

## 5. Stability & Regressions

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | macOS prebuilt install leaves `llama-fit-params` non-executable → context drops to 8K | Fixed: [#12917](https://github.com/unslothai/unsloth/pull/12917) (PR open) |
| **High** | Models not loading after latest update | Open: [#12842](https://github.com/unslothai/unsloth/issues/12842) |
| **Medium** | Long-context chat lag on Windows 10 | Open: [#12552](https://github.com/unslothai/unsloth/issues/12552) |
| **Medium** | Multi-account LAN access — model sync fails for secondary users | Open: [#12365](https://github.com/unslothai/unsloth/issues/12365) |
| **Low** | Dictation cannot access microphone | Open: [#11939](https://github.com/unslothai/unsloth/issues/11939) |
| **Low** | ARM64 download shows macOS build instead of Linux | Closed: [#12680](https://github.com/unslothai/unsloth/issues/12680) |

---

## 6. What This Means for Application Developers

- **Audio workflows are now API-first** — The new Audio API card provides copy-ready curl, Python, and JS snippets; integrate voice cloning/synthesis without reverse-engineering the UI.
- **Decision API debugging** — A "Try it" button now lets you test Decision models directly from Settings → API, no manual request crafting needed. [#12916](https://github.com/unslothai/unsloth/pull/12916)
- **Chat exports now include system prompts** — Training data exports (JSONL, ShareGPT, CSV, etc.) now capture the chat's system prompt and project instructions, improving fine-tuning data quality. [#12913](https://github.com/unslothai/unsloth/pull/12913)
- **Vision dataset training fixed** — Columns like `problem`, `input`, or `Question` are now correctly preserved during training (previously only exact `question`/`query`/`prompt` names worked). [#12909](https://github.com/unslothai/unsloth/pull/12909)
- **Shell variable rendering** — `$PATH` and `$HOME` now render as text, not math italics — important for docs/tutorials using environment variables. [#12911](https://github.com/unslothai/unsloth/pull/12911)
- **LAN access usable from API page** — The API page now displays the LAN address (e.g., `http://192.168.x.x:port`) when LAN access is enabled, not just localhost. [#12906](https://github.com/unslothai/unsloth/pull/12906)

---

*Generated from GitHub data for 2026-10-07. Subject to updates as new issues/PRs surface.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*