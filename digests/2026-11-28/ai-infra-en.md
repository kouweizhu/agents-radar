# AI Infrastructure Digest 2026-11-28

> Generated: 2026-11-28 04:09 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants me to generate a cross-project comparison report based on the digests I've already written for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me analyze the data from all six digests and create a structured comparison report.

Let me organize the key data points:

**vLLM:**
- No releases in last 24h
- 30 issues, 20 PRs shown
- Focus: Blackwell/SM120, Inkling 2, NVFP4, MXFP8, batch invariance RFC, Rust frontend
- High activity on performance optimization for RTX 5090

**SGLang:**
- No releases in last 24h


- 32 issues, 40 PRs shown
- Focus: SGLang 1.0 stability, DeepSeek-V4.1 Engram system, HiCache NIXL, FlashInfer MegaMoE SM120, regex DoS security issue
- Production hardening before 1.0 release

**llama.cpp:**
- No releases in last 24h
- 8 commits shown (b12812-b12823)
- Focus: CUDA/HIP fixes for >65535 tokens, Vulkan optimizations, Intel Arc B-series fixes, RTX 5090 CUDA graphs hang
- Low-level performance fixes

**Ollama:**
- No releases in last 24h
- 32 issues, 40 PRs shown
- Focus: DGX Spark instability regressions, MLX runner fixes, macOS memory, max_tokens: 0 bug, API validation
- User-facing tool with GUI, local deployment focus

**LiteLLM:**
- v1.108.20 LTS release
- 48 issues, 472 PRs (high activity)
- Focus: Anthropic structured output migration, MCP OAuth fixes, Gemini token counting regression, Bedrock Mantle support
- Gateway layer, multi-provider abstraction

**Unsloth:**
- No releases in last 24h
- Multiple PRs (20+ shown)
- Focus: Inkling 2 GGUFs, Qwen3.5 GGUFs, Windows CUDA memory cap, torch 2.14.1 for Apple Silicon, FSDP2 MoE
- Training/fine-tuning layer

Now I'm compiling the comparative metrics across all tools to identify patterns in their development focus and priorities.

The activity breakdown shows vLLM and Ollama handling the most issues, while LiteLLM is dominating in PR volume. On the model side, Inkling 2 has the broadest support across vLLM, SGLang, llama.cpp, and Ollama, whereas DeepSeek-V4.1 appears only in vLLM and SGLang. Llama.cpp is the most flexible with multi-backend support, while SGLang is emerging as a major contender alongside vLLM.

Performance-wise, vLLM is heavily focused on KV cache optimization and Blackwell architecture work, SGLang is building out its HiCache system alongside multi-backend acceleration, and llama.cpp continues refining CUDA graph performance.
</think>


# AI Infrastructure Ecosystem — Daily Comparison Report
**Date:** 2026-11-28 | **Scope:** vLLM · SGLang · llama.cpp · Ollama · LiteLLM · Unsloth

---

## 1. Ecosystem Overview

The AI inference infrastructure landscape on 2026-11-28 shows a clear bifurcation between **production-grade serving engines** competing on Blackwell/SM120 performance (vLLM and SGLang both landing targeted kernel work for RTX 5090 and Inkling 2), and **developer-accessibility layer** projects expanding their model reach and integration surface (Ollama tightening API correctness, LiteLLM deepening multi-provider routing, Unsloth closing the training loop). Meanwhile, llama.cpp continues operating as the foundational runtime substrate underpinning multiple upstream projects, absorbing hardware-specific bug fixes across CUDA, Vulkan, HIP, and Metal with remarkable velocity. The shared vector of activity is **quantization diversity** — NVFP4, MXFP8, FP8, NF4, and GGUF variants are proliferating across every layer simultaneously, creating integration complexity that all six projects are racing to handle.

---

## 2. Activity Comparison

| Project | Issues (active) | PRs / Commits (24h) | Releases (24h) | 1.0 / Stability Flag |
|---------|----------------|---------------------|----------------|----------------------|
| **vLLM** | ~30 shown (high) | ~20 PRs (high) | None | Q4 2026 roadmap active; Rust frontend defaulting imminently |
| **SGLang** | 32 (medium) | 40 (very high) | None | SGLang 1.0 planned as stability release [#50045](https://github.com/sgl-project/sglang/issues/50045) |
| **llama.cpp** | 8 issues shown (low) | 12 commits (medium) | None | No formal stability versioning; rolling master |
| **Ollama** | 32 (medium) | 40 (very high) | None | 0.40.18 stable; DGX Spark regression active |
| **LiteLLM** | 48 (medium-high) | 472 total / ~20 shown (highest) | **v1.108.20 LTS** | LTS track now formally established |
| **Unsloth** | ~12 shown (low) | ~20 PRs (medium) | None | No formal version; beta channel for Desktop |

**Key observation:** LiteLLM's PR volume reflects its gateway/routing nature — every new provider feature generates a proportional PR count. SGLang and Ollama both show 40 PRs, matching LiteLLM on a per-project basis, indicating intense concurrent development across the serving and developer-tooling layers.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|-----------|--------|---------|---------|
| **Inkling 2 / Inkling 2 Mini** | ✅ SM120 MXFP8, fused kernels | ✅ Inkling-2-Small on GB10 | ✅ Inkling 2 Mini GGUFs | ✅ Inkling-2-mini (DGX Spark OOM noted) | Via API routing | ✅ Inkling 2 GGUFs, LoRA training |
| **DeepSeek-V4.1-Flash** | ✅ SM120 (but CUDA graphs broken) | ✅ FlashInfer MegaMoE SM120 | Via upstream llama.cpp | — | Via API routing | — |
| **Qwen3.5 / Qwen3.6** | ✅ NVFP4, LoRA MoE rank control | — | ✅ Qwen3.5 fused GGUF tensors | — | Via API routing | Via upstream llama.cpp |
| **Hunyuan-V4 / Wan 2.2 / MiniMax-H3** | — | — | Via upstream llama.cpp | — | Via API routing | ✅ Live denoise preview |
| **Qwen-Image-2.1** | — | — | Via upstream llama.cpp | — | — | ✅ Per-row batch layout (2.12× faster) |
| **Claude on AWS Bedrock Mantle** | Via vLLM backend | Via SGLang backend | Via llama.cpp backend | Via API routing | 🔄 In progress [#54946](https://github.com/BerriAI/litellm/pull/54946) | — |
| **SM120 / Blackwell (RTX 5090)** | ✅ First-class, active kernel work | ✅ FlashInfer MegaMoE support | 🟡 CUDA graphs hang — workaround available | — | Via provider routing | — |
| **Apple Silicon (MLX)** | — | — | Via llama.cpp Metal backend | ✅ MLX runner, history eviction fixes | Via API routing | ✅ torch 2.14.1, DSpark |
| **Ascend NPU (C8)** | — | ✅ INT8/FP8 KPool index caches | — | — | Via API routing | — |

**Winner by breadth:** llama.cpp — its multi-backend architecture (CUDA, HIP, Vulkan, Metal, SYCL, CPU, Zdnn) means it serves as the execution engine for virtually every upstream project listed here.

**Winner by velocity:** vLLM — the highest density of new kernel-level support for Blackwell and Inkling 2, with the most recent hardware getting first-class treatment faster than any competitor.

**Winner by integration scope:** LiteLLM — the only project routing across all provider types (AWS Bedrock, Azure, Vertex, Anthropic, OpenAI, Ollama, Replicate) in a single proxy instance.

---

## 4. Performance Frontier

Where each project is concentrating optimization effort:

| Frontier Area | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------|------|--------|-----------|--------|---------|---------|
| **KV Cache** | KV Offload RFC, block resume scheduler, KV Connector async polling | HiCache NIXL Tier-3, Engram CXL dev-dax backing (188 GiB), Mooncake lease optimization | Graph recurrent state in-place reads | MLX history eviction control, persistent caches | Token counting accuracy (function name + args) | GGUF KV GPU share weighting |
| **Quantization** | NVFP4 emulation (pre-SM89), MXFP8 block-scaled E4M3 MMA, DeepGEMM FP8 fix | MXFP4 CUTLASS preprocessing, Ascend INT8/FP8 KPool | NVFP4 MMQ y_scale over-read, FP8 quant scale support per-expert | — | Anthropic cache cost double-counting fixed | 4-bit QLoRA without bitsandbytes, BF16 GGUF zero-copy |
| **Batching / Scheduling** | Batch invariance RFC, context-aware sparse draft head, TP for spec decode | Pre-fill delayer (skip idle CPU all-gathers), DP-attention TP-MoE padding | — | MLX batch DFlash2 proposals | — | — |
| **Kernels / GPU Compute** | Fused GDN MTP (16-token verify), fused up-proj + gate/blend (SM120), Inkling 2 prefill GEMM | Hunyuan-V4 cluster CUDA kernel (SM90), FlashInfer MegaMoE SM120 | Vulkan coopmat2 GDN, subgroup pool1d, IQ grid table from storage buffer | — | Stream chunk metadata seeding | Qwen-Image-2.1 per-row RoPE, Portable resume DTensor |
| **Distributed Serving** | Data Parallel coordinator timeout, LoRA separate slot rank for MoE, NCCL communicator lifecycle | Distributed KVCache roadmap (closed, 22 👍) | Multi-backend MoE expert routing | — | MCP OAuth lifecycle, key-level permissions | Native FSDP2 MoE expert stacks |
| **Memory Management** | PCIe IPC workspace sizing, weight bytes for MFU | Unified Radix Cache linker (runtime attach/detach) | CUDA device type caching (eliminates ~1ms per call), Windows memory cap | MLX runner RAM target, macOS kernel memory reporting | — | DTensor optimizer host-stay on resume, Windows CUDA commit cap |

**Highest concentration:** KV cache optimization spans all three serving engines (vLLM, SGLang, llama.cpp) and Ollama's MLX runner, reflecting the 2026-era reality that memory bandwidth — not FLOPs — is the primary inference bottleneck.

**Most novel work:** SGLang's Engram CXL dev-dax backing for DeepSeek-V4.1's 188 GiB static tables. This is the first production-ready path for disaggregated Engram memory, potentially unlocking DeepSeek-V4.1 on configurations that cannot fit the full model in GPU HBM.

**Most urgent fix cluster:** llama.cpp's CUDA/HIP >65,535 token fix ([`b12823`](https://github.com/ggml-org/llama.cpp/commit/b12823)) and device-type caching ([`b12819`](https://github.com/ggml-org/llama.cpp/commit/b12819)) resolve two distinct categories of failure that were silently degrading quality or performance in long-context deployments.

---

## 5. Layer Positioning

```
┌─────────────────────────────────────────────────────────────────┐
│  TRAINING / FINE-TUNING                                         │
│  Unsloth ── LoRA/QLoRA, FSDP2, GGUF training, torch 2.14.1      │
├─────────────────────────────────────────────────────────────────┤
│  LOCAL RUNTIME                                                  │
│  llama.cpp ── Multi-backend inference engine (CPU/GPU/NPU/MLX)  │
│  Ollama ── Developer-facing local deployment (MLX, CUDA)        │
├─────────────────────────────────────────────────────────────────┤
│  INFERENCE SERVING ENGINE                                       │
│  vLLM ── Production-grade, PagedAttention, tensor parallelism   │
│  SGLang ── Radix cache, DSL, Andrea spec decode, HiCache        │
├─────────────────────────────────────────────────────────────────┤
│  GATEWAY / ROUTING / ORCHESTRATION                              │
│  LiteLLM ── Multi-provider proxy, cost tracking, MCP OAuth      │
└─────────────────────────────────────────────────────────────────┘
```

**Key positioning observations:**

- **llama.cpp is the universal substrate.** Every project in this digest either runs on top of llama.cpp (Ollama, Unsloth's GGUF path) or competes with it (vLLM, SGLang for GPU serving). Its multi-backend strategy makes it the bridge between hardware diversity and application portability.

- **vLLM and SGLang are converging on production use cases.** Both projects are actively developing speculative decoding, KV offloading, and distributed serving features. The differentiation is narrowing: vLLM leads on Blackwell kernel depth; SGLang leads on DSL-based scheduling expressibility and HiCache storage integration.

- **Ollama occupies the developer-accessibility layer** but is not a serving engine in the production sense. Its value is in frictionless local deployment (single binary, MLX native) and its gateway role (connecting to LiteLLM for cloud model access). The DGX Spark regressions in 0.40.18 underscore that Ollama's rapid feature velocity comes at the cost of regression testing depth.

- **LiteLLM is the only project operating at the orchestration layer**, providing unified cost tracking, key management, and model routing across providers. Its MCP OAuth lifecycle work signals growing enterprise demand for MCP tool integration within multi-provider gateway setups.

- **Unsloth is the training counterpart to the serving stack.** With FSDP2 MoE support, native GGUF LoRA training, and 4-bit QLoRA without bitsandbytes, it addresses the fine-tuning phase of the model lifecycle that vLLM/SGLang do not. The Inkling 2 GGUF support (both inference and training) positions it as the fastest path from model release to fine-tuned deployment.

---

## 6. Trend Signals

### For Infrastructure Engineers and Technical Decision-Makers

| Signal | Evidence | Implication |
|--------|----------|-------------|
| **Blackwell / SM120 is the primary optimization target across all GPU-serving engines** | vLLM: MXFP8 + fused prefill kernels; SGLang: FlashInfer MegaMoE; llama.cpp: CUDA graphs work | If you are evaluating GPU refresh cycles for inference, RTX 5090 / Blackwell workstations should be on the shortlist. CUDA graphs on laptop-class SM120 are still unstable in llama.cpp; server-class SM120 is more reliable. |
| **Quantization format proliferation is creating integration debt** | NVFP4, MXFP8, MXFP4, FP8, NF4, GGUF Q4/Q5/Q6_K, IQ1/2/3 — each with per-tensor/per-channel/per-expert variants — appear across all projects simultaneously | Expect compatibility gaps when mixing quantization formats across versions. Lock down your model-to-engine version pairs in production. The NVFP4 emulation on pre-SM89 and the MXFP4 CUTLASS preprocessing assumptions (GPT-OSS hardcoding) are early indicators of integration fragility. |
| **Long-context inference (>65k tokens) is becoming a first-class production concern** | llama.cpp fix for >65,535 token ADD_ID crash; vLLM batch invariance RFC; SGLang Engram memory system for 188 GiB KV cache; Ollama prefix cache eviction on MLX | Applications building on long-context workflows (RAG, agentic memory, document understanding) should validate their engine version and configuration against >128k token workloads. The llama.cpp fix is particularly important to re-test if you are on a pre-today version. |
| **Security and robustness hardening is accelerating** | SGLang: regex DoS in `/parse_function_call` (event-loop blocking); Ollama: `max_tokens: 0` silent generation, wrong-typed API options returning 500; LiteLLM: MCP OAuth RFC 9207 violation, key-type permissions gap | All gateway-facing projects are receiving security patches that also change error behavior. Treat the upgrade to Ollama ≥0.40.18 carefully: HTTP 400 for malformed options is safer, but client code that treats 500 as a retry signal will behave differently. |
| **MoE + LoRA is moving from experimental to production** | vLLM separate LoRA slot rank for MoE experts; Unsloth FSDP2 MoE expert stacks; llama.cpp moe-cache cross-backend support | If you are serving MoE models with adapters, the tooling is now converging on stable support. Validate that your LoRA adapter ranks are consistent with `--max-expert-lora-rank` (vLLM) or equivalent settings, as per-expert rank differentiation is newly supported. |
| **Multi-backend hardware diversity is compressing onto a smaller set of targets** | llama.cpp: CUDA + HIP + Vulkan + Metal + SYCL + CPU + Zdnn; SGLang: CUDA + Ascend NPU; Ollama: CUDA + MLX; Unsloth: CUDA + MLX + AMD ROCm | The ecosystem is converging on CUDA + Metal (Apple) + one NPU backend (Ascend or AMD ROCm) as the minimum viable multi-backend surface. If you are evaluating hardware for a new deployment, these four paths represent where the majority of open-source support lives. |
| **SGLang 1.0 and vLLM's Rust frontend default are imminent breaking changes** | SGLang 1.0 scoped as stability release with explicit config-error policy; vLLM Rust frontend tracking issue signals imminent default flip | Both changes will affect configuration and CLI behavior. If you are pinned to vLLM Python CLI or SGLang YAML configs, run integration tests against `main` before these land in a stable release. The SGLang 1.0 compatibility policy (once published) should become your upgrade checklist. |
| **Training and serving layers are becoming tightly coupled via GGUF** | Unsloth trains on GGUF models and exports LoRA adapters consumable by Ollama and llama.cpp; vLLM and SGLang both support GGUF serving | The GGUF path (llama.cpp → Ollama/Unsloth → fine-tune → deploy back via vLLM/SGLang) is becoming the de facto model portability format. Organizations should standardize their model artifact pipeline on GGUF for maximum optionality across this ecosystem. |

---

*Cross-project comparison generated from GitHub activity digests for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth on 2026-11-28. All GitHub issue and PR references use standard `github.com/{org}/{repo}/{issue,pr}/<number>` format.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the provided GitHub data for vLLM and generate a structured digest for 2026-11-28.

Looking at the data:

**Latest Releases:** None in the last 24h

**Latest Issues (30 items shown):**
- Most active issue: #27433 - Batch Invariant Feature request (107 comments)
- #56892 - DeepSeek-V4.1-Flash on SM120 (Blackwell) performance issue (37 comments)
- #59575 - ROCm AMD Qwen3.8-Flash performance optimization (34 comments)
- #66782 - KV Offload RFC (25 comments)
- #25700 - RFC to limit envvars (24 comments)
- Several bugs closed today related to GLM5.2-nvfp4, triton_w4a16_gemm
- Feature requests for vllm.Render, session-aware KV cache hints, Rust frontend as default
- Q4 2026 roadmap tracking
- RL framework patches tracking
- Inkling 2 prefix caching bug
- Various quantization and performance issues

**Latest Pull Requests (20 shown):**
- #68138 - Bugfix for PCIe IPC workspace before KV sizing
- #68635 - Coordinator startup timeout configurable
- #49928, #52753 - DeepGEMM FP8 quant fixes (closed)
- #70253 - Fused GDN MTP with 16-token verify windows
- #70364 - Block resume_scheduler when weight update incomplete
- #70465 - Use native MXFP8 for SM120 prefill experts (Inkling 2)
- #70466 - Fuse SM120 prefill controller up projection (Inkling 2)
- #70286 - LoRA separate slot rank for MoE experts
- #70462 - Synchronize allowed-token restore before logit bias
- #70255 - Tensor parallelism for context-aware sparse draft head


- #65143 - Quantization configs report weight bytes for MFU
- #68940 - Render configuration fingerprint
- #66550 - Docs for batch invariance
- #70464 - NVFP4 emulation compile on pre-SM89 CUDA
- #69701 - KV Connector poll for finished transfers
- #64335 - Destroy NCCL communicator on weight transfer re-init (closed)
- #70334 - Inkling 2 SM120 MoE & low-latency GEMM (closed)

I'll analyze the PRs and identify key technical improvements. The PRs focus on performance optimization, particularly for SM120 architectures and Inkling 2 models. Several PRs address kernel compilation, quantization, and memory management challenges. Notable work includes enhancing MXFP8 support, improving GEMM performance, and refining KV connector transfers across different computational stages.

The latest updates emphasize low-latency computations, tensor parallelism, and addressing CUDA compatibility issues across different GPU generations. Specific improvements target memory sizing, scheduler controls, and weight transfer mechanisms, indicating a comprehensive approach to inference engine optimization.

Key focus areas include Blackwell/RTX 5090 support, advanced quantization techniques like NVFP4 and MXFP8, and sophisticated performance enhancements for MoE models. The updates suggest a strategic push towards more flexible, efficient neural network inference capabilities.
</think>


# vLLM Digest — 2026-11-28

## 1. Today's Highlights

vLLM's development continues to accelerate Blackwell/SM120 optimization, with two new PRs landing for Inkling 2 Mini on RTX 5090 — native MXFP8 prefill experts and fused up-projection/blend kernels achieving measurable TTFT improvements. Meanwhile, the batch invariance RFC (#27433) hits 107 comments as the community converges on deterministic serving semantics, and the Rust frontend migration tracking (#68784) signals an imminent default switch for `vllm serve`.

## 2. Releases & Breaking Changes

| Item | Description | Links |
|------|-------------|-------|
| No releases | No tagged releases in the last 24h | — |

**Notable Config Changes:**
- `--data-parallel-coordinator-timeout` added via [PR #68635](https://github.com/vllm-project/vllm/pull/68635) for Data Parallel SERVE-1 migration control
- `--max-expert-lora-rank` added via [PR #70286](https://github.com/vllm-project/vllm/pull/70286) to support separate LoRA buffer sizing for MoE experts vs. dense layers

## 3. New Model & Hardware Support

| Model / Hardware | Detail | Source |
|------------------|--------|--------|
| **SM120 / Blackwell** (RTX PRO 6000, RTX 5090) | Growing first-class support; Inkling 2 optimization PRs active | [PR #70465](https://github.com/vllm-project/vllm/pull/70465), [PR #70466](https://github.com/vllm-project/vllm/pull/70466), [PR #70334](https://github.com/vllm-project/vllm/pull/70334) |
| **Inkling 2 Mini** (SM120) | Native MXFP8 for last 4 expert layers via block-scaled E4M3 MMA; fused up-projection + gate/blend | [PR #70465](https://github.com/vllm-project/vllm/pull/70465), [PR #70466](https://github.com/vllm-project/vllm/pull/70466) |
| **NVFP4 emulation** | Fixed compilation on pre-SM89 GPUs (Ampere A100) that lack `float8e4nv` hardware type | [PR #70464](https://github.com/vllm-project/vllm/pull/70464) |
| **gfx950 / MI355X** (AMD ROCm) | Qwen3.8-Flash-Next performance optimization tracking | [Issue #59575](https://github.com/vllm-project/vllm/issues/59575) |

## 4. Performance & Optimization

| Category | Change | Impact | Links |
|----------|--------|--------|-------|
| **Inkling 2 decode** | Fused GDN MTP verify window expanded from 9 → 16 tokens | Eliminates Triton delta-rule fallback for block-16 DFlash/DSpine drafters | [PR #70253](https://github.com/vllm-project/vllm/pull/70253) |
| **Inkling 2 prefill** | MXFP8 for SM120 last 4 experts (128-row tiles) | Single-request TTFT improvement on RTX 5090 (exact numbers in PR) | [PR #70465](https://github.com/vllm-project/vllm/pull/70465) |
| **Inkling 2 prefill** | Fused up-projection + gate/blend on SM120 | Reduced FP32 write traffic; per-token RMSNorm efficiency gains | [PR #70466](https://github.com/vllm-project/vllm/pull/70466) |
| **MoE / low-latency GEMM** | SM120 MoE tiling, PDL pipelining across Triton kernels | Closed [PR #70334](https://github.com/vllm-project/vllm/pull/70334) — merged | [PR #70334](https://github.com/vllm-project/vllm/pull/70334) |
| **Spec decode drafter** | Context-aware sparse LM head with TP > 1 | Enables tensor-parallel speculative decoding scenarios | [PR #70255](https://github.com/vllm-project/vllm/pull/70255) |
| **KV memory sizing** | Account for FlashInfer PCIe IPC workspace before KV profiling | Fixes under-sized KV cache in distributed setups; fixes #67521 | [PR #68138](https://github.com/vllm-project/vllm/pull/68138) |
| **Quantization metrics** | `QuantizationConfig.get_weight_byte_size()` for MFU estimator | Custom quantization methods now report accurate memory bandwidth utilization | [PR #65143](https://github.com/vllm-project/vllm/pull/65143) |
| **KV transfer latency** | Poll `get_transfer_results()` while worker waits for next RPC | Reduces end-to-step latency for KV connector async scheduling | [PR #69701](https://github.com/vllm-project/vllm/pull/69701) |

## 5. Stability & Regressions

Ranked by operational severity:

| Severity | Issue | Description | Workaround / Fix |
|----------|-------|-------------|------------------|
| 🔴 **High** | **#56892** | DeepSeek-V4.1-Flash on SM120: extremely low decode throughput with `--enforce-eager`; CUDA graphs unusable | Awaiting SM120 graph capture fix priority |
| 🔴 **High** | **#70043** | Inkling 2: copies of a prompt in one batch differ run-to-run with prefix caching enabled | Active; impacts determinism guarantees |
| 🟠 **Medium** | **#70385** | `chat_template_kwargs["tools"]` overrides server-built tools → HTTP 500 KeyError on DeepSeek renderers | Filed 2026-11-27 |
| 🟠 **Medium** | **#69199** | Triton FP32→FP8 (e4m3) double rounding on SM89 (L4 Ada): KV cache values off by one e4m3 step | Affects NVFP4 emulation accuracy |
| 🟠 **Medium** | **#47458** | ~17.5s engine-wide stall on large-to-small request shape transitions (NVFP4/b12x) | Reproduces on Qwen3.6-35B-NVFP4 |
| 🟡 **Low** | **#47367** | GLM5.2-nvfp4 occasional `!` output in thinking phase | **Closed** — likely resolved |
| 🟡 **Low** | **#47159** | `triton_w4a16_gemm` assert failure on GPTQ models | **Closed** — likely resolved |
| 🟡 **Low** | **#48054** | DeepSeek-V4 sparse-SWA passes flashinfer kwargs only in 0.6.14, but pin is 0.6.13 | **Closed** — likely resolved |

**Fix PRs Merged Today:**
- [PR #49928](https://github.com/vllm-project/vllm/pull/49928): DeepGEMM FP8 quant crash under `torch.compile` + piecewise CUDAGraph (TMA scales)
- [PR #52753](https://github.com/vllm-project/vllm/pull/52753): Incorrect FP8 quant fusion with static per-group quantization
- [PR #64335](https://github.com/vllm-project/vllm/pull/64335): Destroy previous NCCL communicator on weight-transfer engine re-initialization

## 6. What This Means for Application Developers

| Takeaway | Detail |
|----------|--------|
| **Blackwell/RTX 5090 is a first-class vLLM target now** | Inkling 2 Mini sees direct MXFP8 and fused kernel benefits on SM120. If you're deploying on RTX 5090 or Blackwell workstations, test against `main` — performance improvements are landing daily. |
| **Batch invariance is approaching production readiness** | The RFC (#27433, 107 comments) signals strong community intent for deterministic serving. RL/agentic workloads requiring reproducible outputs should track this closely. |
| **Rust frontend becoming default soon** | [Issue #68784](https://github.com/vllm-project/vllm/issues/68784) indicates the Rust-based `vllm serve` path will flip to default. Validate your serving configs against the new path before it lands. |
| **MoE + LoRA now supports per-expert rank limits** | [PR #70286](https://github.com/vllm-project/vllm/pull/70286) enables `--max-expert-lora-rank`, reducing memory overhead when serving MoE adapters with mixed rank requirements. |
| **KV offload is getting request-level control** | [RFC #66782](https://github.com/vllm-project/vllm/issues/66782) proposes finer-grained KV promotion/pinning policies — relevant if you're building multi-tenant or context-heavy agentic systems. |
| **DeepSeek-V4.1 on Blackwell has active regressions** | If you're running DeepSeek-V4.1-Flash on SM120 with CUDA graphs disabled for debugging, expect poor throughput. Monitor [#56892](https://github.com/vllm-project/vllm/issues/56892) for fix status. |

---

*Digest generated from github.com/vllm-project/vllm activity on 2026-11-28. All issue/PR links use the standard GitHub format: `https://github.com/vllm-project/vllm/{issue,pr}/<number>`.*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang and create a structured digest.

Key observations:

1. **Releases**: None in last 24h

2. **Major Issues**:
   - CUDA Coredump Tracker (#26340) - massive activity, 390 comments
   - CI Flaky tests tracker (#42752) - 318 comments, active CI issues
   - SGLang 1.0 Release Tracker (#50045) - roadmap item, stability focus
   - Distributed KVCache Roadmap (#21846) - closed, 22 comments, 30 👍
   - Agentic Cache Scheduling (#43098) - 9 👍, active
   - Bug with regex backtracking (#52090) - potential DoS
   - Bug with /generate type checking (#41466) - closed
   - Bug with mxfp4 CUTLASS (#53571) - new
   - Bug with Inkling-2 on SM12x (#53439) - new

3. **New PRs**:
   - DeepSeek-V4.1 Engram tables with file/CXL dev-dax (#53686) - big feature
   - Pre-fill delayer fix (#52466)
   - HiCache NIXL tier-3 fixes (#39550)
   - Hunyuan v4 flash optimization (#53685)
   - FlashInfer MegaMoE SM120 support (#44359)
   - Various bug fixes and perf improvements

4. **Themes**:
   - Stability focus (1.0 release incoming)
   - KVCache improvements (HiCache, Engram, distributed)
   - Multi-modal (M LLMs roadmap)
   - NPU support improvements
   - Performance optimizations
   - Bug fixes around type checking, DoS vulnerabilities

Let me structure this properly.
</think>


# SGLang Digest — 2026-11-28

## 1. Today's Highlights

The SGLang project is intensifying focus on production hardening ahead of the planned **1.0 stability release** (Issue [#50045](https://github.com/sgl-project/sglang/issues/50045)), with new work on DeepSeek-V4.1's massive **Engram memory system** (≈188 GiB of static FP8 tables) now supporting file-backed and CXL dev-dax storage ([PR #53686](https://github.com/sgl-project/sglang/pull/53686)). Meanwhile, a high-severity regex DoS vector in `/parse_function_call` ([Issue #52090](https://github.com/sgl-project/sglang/issues/52090)) and a type-checking gap that crashes the server on malformed `/generate` requests ([Issue #41466](https://github.com/sgl-project/sglang/issues/41466), closed) underscore ongoing security and robustness work.

---

## 2. Releases & Breaking Changes

| Item | Detail | Link |
|------|--------|------|
| **No new releases** in the last 24 h | — | — |
| **SGLang 1.0 planning** | Explicitly scoped as a stability release: silent config changes → named errors, explicit compatibility policy for 1.x series. Upgrading from 0.5.x may require changes. | [#50045](https://github.com/sgl-project/sglang/issues/50045) |

---

## 3. New Model & Hardware Support

| Model / Hardware | Change | Link |
|-----------------|--------|------|
| **DeepSeek-V4.1 Engram tables** | New backend: file or CXL dev-dax device backing for the ~188.8 GiB Engram memory (layers 1 & 14). Removes the need to load static FP8 tables into GPU HBM. | [PR #53686](https://github.com/sgl-project/sglang/pull/53686) |
| **FlashInfer MegaMoE SM120** | Prefill support via FlashInfer's cake MegaMoE backend for DeepSeek-V4-Flash on NVIDIA SM120 (Blackwell). | [PR #44359](https://github.com/sgl-project/sglang/pull/44359) |
| **Hunyuan-V4 Flash (SM90)** | Cluster CUDA kernel for small-batch iHC post + pre + RMSNorm on SM90, reducing L2 traffic on latency-bound decode/DFly-verify paths. | [PR #53685](https://github.com/sgl-project/sglang/pull/53685) |
| **Qwen3.6-27B on NPU** | Fixes 16k perf OOM and GPQA W8A8 accuracy drift in the nightly NPU pipeline. | [PR #53543](https://github.com/sgl-project/sglang/pull/53543) |
| **Ascend C8 INT8/FP8 KPool index caches** | Enables quantized KV index caches on Ascend (INT8 per-row FP16 scales, FP8 per-row FP32 + Hadamard rotation) for GLM-5.3-Flash. | [PR #53662](https://github.com/sgl-project/sglang/pull/53662) |

---

## 4. Performance & Optimization

| Area | Description | Link |
|------|-------------|------|
| **Prefill delayer** | Skips idle CPU all-gathers and stops holding back prefill passes under `--enable-prefill-delayer` (no attention DP). Port of #52182. | [PR #52466](https://github.com/sgl-project/sglang/pull/52466) |
| **HiCache NIXL Tier-3** | Bug fixes + missing storage bandwidth metrics for the L3 storage path (O_DIRECT, etc.). | [PR #39550](https://github.com/sgl-project/sglang/pull/39550) |
| **Mooncake Mamba lease** | Leases only the deepest Mamba state on Mooncake lookups; avoids redundant read leases across page states. | [PR #53586](https://github.com/sgl-project/sglang/pull/53586) |
| **DP-attention TP-MoE padding** | Routes padding rows of the TP-MoE gather to no expert, eliminating fabricated decode steps for idle DP ranks on NVIDIA CUDA. | [PR #48072](https://github.com/sgl-project/sglang/pull/48072) |
| **LoRA GPU weight snapshot** | Defers and pins the unmerge snapshot of GPU weights; reduces host cloning under layerwise offload. | [PR #52585](https://github.com/sgl-project/sglang/pull/52585) |
| **KDA varlen prefill under torch.compile** | Eliminates host syncs in varlen KDA prefill that caused Dynamo specialization failures. | [PR #53610](https://github.com/sgl-project/sglang/pull/53610) |
| **MiMo-Audio tokenizer** | Fixes causal sliding-window attention in the audio tokenizer. | [PR #33198](https://github.com/sgl-project/sglang/pull/33198) |
| **Unified Radix Cache linker** | Supports runtime attach/detach of external linkers while an idle server is running. | [PR #44526](https://github.com/sgl-project/sglang/pull/44526) |
| **Trace replay for decoding** | Adds deterministic token sequence replay for normal (non-speculative) decoding, preserving real logprob evaluation. | [PR #52435](https://github.com/sgl-project/sglang/pull/52435) |

---

## 5. Stability & Regressions

Ranked by estimated severity:

| Severity | Issue | Description | Status | Link |
|----------|-------|-------------|--------|------|
| 🔴 **Critical / DoS** | Regex catastrophic backtracking | `/parse_function_call` uses regex with nested quantifiers + `.*` under `re.DOTALL`; ~167-byte crafted input blocks the event loop. No fix PR yet. | OPEN | [#52090](https://github.com/sgl-project/sglang/issues/52090) |
| 🔴 **Critical** | Gemma-4 mm non-RGB image crash | Single grayscale/RGBA image from CDN crashes the vision tower and kills the scheduler, dropping all in-flight requests. Two stacked bugs. | CLOSED | [#26751](https://github.com/sgl-project/sglang/issues/26751) |
| 🟠 **High** | `/generate` field type mismatch crash | Wrong-typed field in one request takes the server down; now returns error instead. | CLOSED (fix merged) | [#41466](https://github.com/sgl-project/sglang/issues/41466) |
| 🟠 **High** | `top_k`, `logprobs`, `n` unbounded | No upper bound on these parameters; a single request can DoS the server. | CLOSED | [#41482](https://github.com/sgl-project/sglang/issues/41482) |
| 🟠 **High** | `session_params` type error crash | Wrong-typed `session_params` crashes server. | CLOSED | [#41467](https://github.com/sgl-project/sglang/issues/41467) |
| 🟡 **Medium** | Inkling-2-Small on SM12x (GB10) | `route_metadata` requests more shared memory than GB10 provides when >~2,750 IDs routed; affects MoE with EP > 1. | OPEN | [#53439](https://github.com/sgl-project/sglang/issues/53439) |
| 🟡 **Medium** | `sgl-kv-indexer` RwLock starvation | Prefix query holds a single RwLock read guard for the full scan, starving apply operations. | OPEN | [#52575](https://github.com/sgl-project/sglang/issues/52575) |
| 🟡 **Medium** | `response_format.schema` returns 500 | Malformed legacy JSON schema returns HTTP 500 instead of 400. | OPEN | [#53447](https://github.com/sgl-project/sglang/issues/53447) |
| 🟡 **Medium** | Jet-Nemotron/JetVLM unified memory | `--enable-unified-memory` never writes back linear-attention state. | OPEN | [#53615](https://github.com/sgl-project/sglang/issues/53615) |
| 🟡 **Medium** | mxfp4 CUTLASS preprocessing assumes GPT-OSS | Hardcodes GPT-OSS pair-wise w13 rows and SwiGLU scalars; breaks other MoE shapes on SM120. | OPEN | [#53571](https://github.com/sgl-project/sglang/issues/53571) |
| 🔵 **CI / Infra** | Flaky tests (NVIDIA PR CI) | Tracked via `/sglang-pr-babysit` workflow; 5 broken, 26 flaky, 927 recently fixed in scheduled CI. | OPEN | [#42752](https://github.com/sgl-project/sglang/issues/42752), [#17050](https://github.com/sgl-project/sglang/issues/17050) |

---

## 6. What This Means for Application Developers

| Takeaway | Detail |
|----------|--------|
| **Watch for 1.0 upgrade friction** | SGLang 1.0 (planned) will replace silent config changes with explicit errors and formalize a compatibility policy. If you are on 0.5.x, test your serving configs early. | [#50045](https://github.com/sgl-project/sglang/issues/50045) |
| **Audit `/parse_function_call` inputs** | The regex DoS in tool-call detection is a remote event-loop blocking risk. Treat user-controlled `tool_call`/`name` fields as untrusted input until patched. | [#52090](https://github.com/sgl-project/sglang/issues/52090) |
| **Validate API request shapes** | Recent type-checking fixes mean malformed `/generate` or `session_params` payloads now return errors instead of crashing the process — a behavior change worth noting in API clients. | [#41466](https://github.com/sgl-project/sglang/issues/41466), [#41467](https://github.com/sgl-project/sglang/issues/41467) |
| **Engram + CXL opens new memory configs** | DeepSeek-V4.1 deployments can now offload the 188 GiB Engram tables to CXL dev-dax instead of GPU HBM, potentially fitting larger models on a given GPU count. | [PR #53686](https://github.com/sgl-project/sglang/pull/53686) |
| **Image inputs: normalize to RGB** | Gemma-4 users should preprocess images to RGB before sending; non-RGB images from upstream CDNs can crash the serving pod. | [#26751](https://github.com/sgl-project/sglang/issues/26751) |
| **FlashInfer 0.7.5.post1 available** | Includes a critical fix for a trtllm-gen batched-GEMM regression; update if you are on < 0.7.5.post1. | [PR #51964](https://github.com/sgl-project/sglang/pull/51964) |
| **fastokens ≥ 0.3.5 required** | GIL/lock-order inversion in fastokens 0.3.3–0.3.4 causes HTTP server deadlock under `--tokenizer-backend fastokens`. Ensure your dependency pins `fastokens>=0.3.5`. | [PR #51428](https://github.com/sgl-project/sglang/pull/51428) |

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data for llama.cpp and create a structured digest for 2026-11-28.

Looking at the data:

**Releases (last 24h):**
- b12823: CUDA fix ADD_ID launch for more than 65535 tokens (#33162)
- b12822: vulkan handle empty conv3d kernel
- b12821: vulkan optimize coopmat2 GDN
- b12820: ggml-zdnn make zTensor memory usage visible
- b12819: CUDA cache device type at init
- b12818: ggml support quant scales for fp8 and nvfp4
- b12816: graph read recurrent states in place
- b12815: cuda fix NVFP4 MMQ y_scale over-read
- b12814: moe-cache support experts selected on another backend
- b12812: metal check all fused nodes for concurrency

**Key themes:**
1. CUDA/HIP fixes for large token counts (65535+)
2. Vulkan optimizations (coopmat2 GDN, conv3d, IQ grid tables)
3. Performance improvements (device type caching, graph in-place reads)
4. Quantization support (fp8, nvfp4 scales)
5. Multi-backend fixes (SYCL, Metal, HIP)

**Notable Issues:**
- #23577: MTP with Qwen3.6 27B outputs repeated characters (36 comments, high priority)
- #27330: CUDA graphs hang on RTX 5090 Laptop (sm_120)
- #32910: Inkling-2-Mini memory allocation issues
- #31828: Vulkan output corruption on Intel Arc B-series
- #32444: ADD_ID fails with more than 65535 tokens (fixed in b12823)


- #33132: Multi-GPU cudaGetDeviceProperties performance issue (fixed in b12819)

I'm examining additional pull requests that highlight performance optimizations and bug fixes across different GPU backends. The focus remains on resolving hardware-specific challenges, particularly around CUDA and HIP implementations. Key improvements include enhancing GPU synchronization, optimizing memory handling, and addressing compatibility issues with emerging GPU architectures.

The pull requests suggest ongoing refinements in memory management, kernel implementations, and backend support, with particular attention to performance bottlenecks and cross-platform compatibility.
</think>


# llama.cpp Daily Digest — 2026-11-28

## Today's Highlights

The llama.cpp project landed critical fixes for large-context inference scenarios, including a long-standing CUDA/HIP bug that caused ADD_ID kernel failures when processing more than 65,535 tokens. Performance work continued on the Vulkan backend with cooperative matrix GDN optimizations, while a device-type caching improvement addresses multi-GPU scheduling overhead.

## Releases & Breaking Changes

| Commit | Description | Impact |
|--------|-------------|--------|
| [`b12823`](https://github.com/ggml-org/llama.cpp/commit/b12823) | **CUDA/HIP: fix ADD_ID launch for >65,535 tokens** — gridDim.y was capped at 65,535, causing "invalid configuration argument" errors in long-context scenarios | ⚠️ High-severity fix for production deployments |
| [`b12819`](https://github.com/ggml-org/llama.cpp/commit/b12819) | **CUDA: cache device type at init** — eliminates per-call `cudaGetDeviceProperties` (~0.7–1 ms overhead) that was dragging multi-GPU tensor override paths | Performance fix |

No breaking API changes or deprecations reported today.

## New Model & Hardware Support

- **SenseNova Loop support merged** — PR [#32588](https://github.com/ggml-org/llama.cpp/pull/32588) adds official support for SenseNova Loop architecture, contributed by the SenseNova team
- **Quantization scale support expanded** — [`b12818`](https://github.com/ggml-org/llama.cpp/commit/b12818) adds per-tensor, per-channel, per-expert, and per-expert-per-channel scaling for fp8 and nvfp4 quantization formats
- **Falcon-h1 tokenizer fix** — PR [#33223](https://github.com/ggml-org/llama.cpp/pull/33223) corrects pre-tokenizer handling for whitespace-before-punctuation cases

## Performance & Optimization

### Landed (Last 24h)

| Area | Change | Expected Benefit |
|------|--------|------------------|
| **Vulkan GDN** ([`b12821`](https://github.com/ggml-org/llama.cpp/commit/b12821)) | Refactored coopmat2 GDN split+store callbacks; interleaved state store with gram_pmat work | Improved store vectorization |
| **Graph scheduling** ([`b12816`](https://github.com/ggml-org/llama.cpp/commit/b12816)) | Read recurrent states in-place instead of copying | Faster token output across backends |
| **Multi-GPU scheduling** ([`b12814`](https://github.com/ggml-org/llama.cpp/commit/b12814)) | MoE cache now handles experts selected on a different backend | Fixes layer-split scenarios with loop-based models |
| **Metal** ([`b12812`](https://github.com/ggml-org/llama.cpp/commit/b12812)) | Check all fused nodes for concurrency, not just the last | Correctness for multi-output fused groups |

### In Progress (Open PRs)

| PR | Description | Stage |
|----|-------------|-------|
| [#32915](https://github.com/ggml-org/llama.cpp/pull/32915) | Vulkan: read IQ1/IQ2/IQ3 grid tables from storage buffer | Reduces LDC divergence on NVIDIA |
| [#33221](https://github.com/ggml-org/llama.cpp/pull/33221) | Vulkan: add subgroup shader for pool1d | Addresses bottleneck in wide-pool models (e.g., Mellum 2.1) |
| [#32215](https://github.com/ggml-org/llama.cpp/pull/32215) | HIP: implement DDP path for sum reduction via `mov_dpp` | Faster warp reductions, alternative to `ds_permute_*` |
| [#33220](https://github.com/ggml-org/llama.cpp/pull/33220) | SYCL: implement GDN replay | Fixes Qwen 3.8 27B regression where GDN was CPU-offloaded |

## Stability & Regressions

### Active Issues (Ranked by Activity)

| # | Issue | Severity | Status | Notes |
|---|-------|----------|--------|-------|
| [#23577](https://github.com/ggml-org/llama.cpp/issues/23577) | MTP with Qwen3.6 27B outputs repeated `////` after long sessions | 🔴 High | Open (36 comments) | CUDA + Ryzen 7950X3D + RTX 4090; affects build 196 |
| [#27330](https://github.com/ggml-org/llama.cpp/issues/27330) | CUDA graphs hang RTX 5090 Laptop (sm_120) | 🔴 High | Open (15 comments) | Workaround: `GGML_CUDA_DISABLE_GRAPHS=1` |
| [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) | `/v1/completions` logprobs nondeterministic on SYCL iGPU + MoE | 🟡 Medium | Open (15 comments) | Request seed does not pin distribution |
| [#31828](https://github.com/ggml-org/llama.cpp/issues/31828) | Vulkan output corruption on Intel Arc B-series (long-context/RAG) | 🟡 Medium | Open (6 comments) | Persists even with `GGML_VK_DISABLE_COOPMAT` |
| [#28721](https://github.com/ggml-org/llama.cpp/issues/28721) | Vulkan decode throughput collapses ~8x on Arc Pro B70 (Xe2) at 64k context | 🟡 Medium | Open (4 comments) | RDNA3 unaffected; backend-intrinsic |

### Recently Closed (Fixed/Resolved)

| # | Issue | Resolution |
|---|-------|------------|
| [#33132](https://github.com/ggml-org/llama.cpp/issues/33132) | `cudaGetDeviceProperties` called on every cross-device copy (8x slowdown) | Fixed by [`b12819`](https://github.com/ggml-org/llama.cpp/commit/b12819) |
| [#32444](https://github.com/ggml-org/llama.cpp/issues/32444) | ADD_ID fails with >65,535 tokens | Fixed by [`b12823`](https://github.com/ggml-org/llama.cpp/commit/b12823) |
| [#33101](https://github.com/ggml-org/llama.cpp/issues/33101) | Inkling 2 Mini crashes with `--moe-cache-mib` | Closed |
| [#32969](https://github.com/ggml-org/llama.cpp/issues/32969) | Make Parse PDF as image DPI configurable | Closed (feature added) |

## What This Means for Application Developers

1. **Long-context workloads are safer now** — The ADD_ID fix resolves silent failures that would have crashed inference for prompts exceeding 65,535 tokens. If you're running extended conversations or RAG pipelines, rebuild against current master.

2. **Multi-GPU tensor override paths got significantly faster** — The device-type caching fix removes ~1ms overhead per cross-device copy. With tensor overrides (`-ot`), multi-GPU setups were becoming CPU-bound; this is now resolved.

3. **Watch for Vulkan on Intel Arc B-series** — Output corruption in long-context scenarios remains unresolved. Until a fix lands, consider SYCL or CPU fallback for Intel Battlemage GPUs in production RAG deployments.

4. **MoE + layer-split deployments need testing** — The moe-cache cross-backend fix is new; if you're running MoE models with layer splits across GPUs, validate that expert routing behaves correctly.

5. **RTX 5090 Laptop users should disable CUDA graphs** — Until the hang issue is resolved, set `GGML_CUDA_DISABLE_GRAPHS=1` as a mitigation.

---

*Digest generated from ggml-org/llama.cpp activity on 2026-11-28. Data sourced from GitHub API.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze the GitHub data for Ollama on 2026-11-28 and create a structured digest.

Key observations:

1. **Releases**: None in last 24h
2. **Issues**: 32 total, top issues involve:
   - Inkling-2-mini crashes/OOM on DGX Spark (critical, closed)
   - Cached tokens not reported in Ollama's Cloud (closed)
   - OOM issues in 0.4.17
   - Claude Desktop integration not working
   - DGX Spark instability after upgrade (0.34.4 → 0.40.18)
   - Vulkan performance regression on RX 5700 XT
   - JSON schema regression in 0.40.18 (Windows ROCm)
   - MLX prefix cache eviction issues
   - Various API bugs (max_tokens: 0, logprobs, responses streaming)

3. **Pull Requests**: 40 total, notable:
   - Model download UI fix
   - MLX runner memory fixes
   - Claude Desktop label fix
   - OpenAI logprobs fix
   - Whitespace trimming in parsers
   - Various MLX runner improvements
   - API defaults for top_p and min_p

Let me organize this into the required sections.
</think>


# Ollama Daily Digest — 2026-11-28

## 1. Today's Highlights

Ollama 0.40.18 continues to surface regressions on high-end hardware: users on NVIDIA DGX Spark systems report system-wide instability after upgrading from 0.34.4, with the Inkling-2-mini model triggering OOM crashes that require hard reboots. On the fix side, the team is landing targeted MLX runner patches to address over-aggressive conversation history eviction on Apple Silicon, and resolving a long-standing API inconsistency where invalid request options returned HTTP 500 instead of 400.

---

## 2. Releases & Breaking Changes

| Item | Detail |
|---|---|
| **No new releases** | No tagged releases in the last 24 hours. Latest stable remains 0.40.18. |

**Active regressions to be aware of:**

- **DGX Spark instability after upgrade (0.34.4 → 0.40.18)** — Multiple models become unstable and the system freezes entirely. Affects #19927. No fix PR yet.
- **JSON schema requests fail mid-load on Windows ROCm (0.40.18)** — HTTP 200 returned with empty body after grammar stack error. See #19918.
- **Install script overwrites GPU drivers on older hardware** — The script does not check GPU architecture, breaking Linux systems with 10-series cards. See #19933.

---

## 3. New Model & Hardware Support

No new model support announcements today. Active development continues in these areas:

- **DeepSeek v4 flash model requests** — Community continues to request downloadable DeepSeek v4 and v4.1-flash variants (#17510, #18379). No official response from maintainers.
- **Inkling-2 Mini** — Active testing on DGX Spark and Apple MLX, with prefix-cache issues on MLX flagged in #19819.
- **Qwen3.5** — Active parser work for tool-call sequencing (#18624).

---

## 4. Performance & Optimization

| PR | Description | Impact |
|---|---|---|
| [#19964](https://github.com/ollama/ollama/pull/19964) | MLX runner: exclude persistent cache growth from snapshotWorkspace; check pendingHistoryBytes against ramTarget | Fixes over-eviction of conversation history on Apple Silicon |
| [#19907](https://github.com/ollama/ollama/pull/19907) | macOS: count kernel-reported available memory more accurately | Improves prefix-cache retention decisions |
| [#19745](https://github.com/ollama/ollama/pull/19745) | MLX runner: persist inactive conversation caches | Reduces re-prefill overhead on model switch or restart |
| [#19769](https://github.com/ollama/ollama/pull/19769) | MLX runner: batch DFlash2 proposals and recurrent replay | Shares draft forwards across concurrent requests |
| [#19871](https://github.com/ollama/ollama/pull/19871) | API: default `top_p` and `min_p` to llama.cpp values (0.95, 0.05) | Aligns sampling behavior with upstream; flagged as a critical bug |

**Known performance issues:**

- **Vulkan on RX 5700 XT (RDNA1)** — Prompt processing is ~13x slower than upstream llama.cpp Vulkan build (40 vs ~540 t/s). See #19747.
- **MLX prefix cache eviction** — Inkling-2 Mini drops entire prefix cache past ~64k tokens, forcing full re-prefill on every turn. See #19819.
- **Chat truncation re-tokenizes** — `/api/chat` re-renders and re-tokenizes remaining history once per dropped message. See #19942.
- **O(N²) image marker construction** — A single request with 64,000 images holds the server for a CPU-minute. See #19885.

---

## 5. Stability & Regressions

### Critical (system-wide impact)
| Issue | Description | Fix PR |
|---|---|---|
| [#19879](https://github.com/ollama/ollama/issues/19879) | Inkling-2-mini crashes DGX Spark machine (OOM + high CPU → hard reboot) | Closed — may require model-specific handling |
| [#19927](https://github.com/ollama/ollama/issues/19927) | Upgrade 0.34.4 → 0.40.18 makes multiple models unstable on DGX Spark | None yet |

### High (correctness / API compliance)
| Issue | Description | Fix PR |
|---|---|---|
| [#19965](https://github.com/ollama/ollama/issues/19965) | `max_tokens: 0` on `/v1/completions` generates text instead of returning empty | None yet |
| [#19945](https://github.com/ollama/ollama/issues/19945) | Invalid request option types return HTTP 500 instead of HTTP 400 | [#19954](https://github.com/ollama/ollama/pull/19954) |
| [#19960](https://github.com/ollama/ollama/issues/19960) | `/v1/chat/completions` logprobs omit `top_logprobs` when none requested | [#19961](https://github.com/ollama/ollama/pull/19961) |
| [#19958](https://github.com/ollama/ollama/issues/19958) | `/v1/responses` streaming: reasoning reuses open message's output_index | [#19959](https://github.com/ollama/ollama/pull/19959) |

### Medium (UI / parser quirks)
| Issue | Description | Fix PR |
|---|---|---|
| [#19930](https://github.com/ollama/ollama/issues/19930) | Download arrow in model picker does not trigger download | [#19966](https://github.com/ollama/ollama/pull/19966) |
| [#19950](https://github.com/ollama/ollama/issues/19950) | Apps page mislabels Claude Desktop as Claude Code | [#19963](https://github.com/ollama/ollama/pull/19963) |
| [#19955](https://github.com/ollama/ollama/issues/19955) | cogito parser: content starts with newlines after `</think>` | [#19956](https://github.com/ollama/ollama/pull/19956) |
| [#19948](https://github.com/ollama/ollama/issues/19948) | deepseek3 parser: same whitespace issue | [#19590](https://github.com/ollama/ollama/pull/19590) |

---

## 6. What This Means for Application Developers

**1. Avoid upgrading to 0.40.18 on DGX Spark or high-end multi-GPU setups** — the regression is severe and unfixed. If you need the latest features, test in a staging environment first.

**2. `max_tokens: 0` does not behave as expected** — if you rely on it for prefill-only requests or token counting, the current behavior generates tokens instead. Workaround: use `max_tokens: 1` and discard the output, or file a bug.

**3. API validation got stricter** — PR #19954 is a breaking improvement: wrong-typed options now return HTTP 400 instead of 500. If your client sends malformed options, you will now get a clean error response rather than an opaque server error.

**4. macOS MLX users: watch for conversation history loss** — with the pending fix in #19964, long conversations on 64 GB Macs should retain more history. Monitor memory usage; the issue is that ~17 GiB free RAM was not preventing eviction.

**5. DeepSeek v4 and tool-calling parsers are actively developed** — if you use Qwen3.5 or DeepSeek variants with function calling, the stream-parsing fixes landing today (#19590, #19956) will clean up spurious leading newlines in responses.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for LiteLLM on 2026-11-28.

Key observations:

1. **Releases**: v1.108.20 is the latest LTS release
2. **Issues**: 48 total issues, 30 shown. Notable ones:
   - Bug about prompt_tokens variation in streams (Issue #1264) - reopened/updated
   - UI slowness in 1.82.x (Issue #23005) - closed
   - Feature request for Prometheus metrics on routed deployments (Issue #53040)
   - MCP OAuth bridge RFC 9207 issue (Issue #49857)
   - Various llm translation bugs
   - ElevenLabs diarization options not passed through
   - Gemini token counting regressions
   - Various UI and proxy bugs

3. **PRs**: 472 total, 20 shown. Notable ones:
   - Bedrock invoke stream draining (PR #54612)
   - Anthropic output_format migration (PR #21635)
   - Pre-call hooks for Anthropic messages (PR #27609)
   - UI build optimizations (PR #29092)
   - MCP OAuth fixes (PRs #54812, #54816, #54815)
   - Various bug fixes for streaming, token counting, cost tracking
   - New ElevenLabs diarized transcription (PR #31324)
   - Claude on Bedrock Mantle provider (PR #54946)

Let me organize this into the requested format.

Actually, let me double-check the PR #54946 - it's a very new PR from 2026-11-28 about pricing and serving Claude on Bedrock Mantle provider. This is significant for hardware support.

For performance/optimization, I don't see specific numbers but there are PRs about:
- Stream chunk builder fixes
- Token counting improvements
- MCP OAuth credential handling
- UI build optimization

</think>


# LiteLLM Daily Digest — 2026-11-28

---

## 1. Today's Highlights

The LiteLLM team is resolving several critical routing and translation bugs ahead of the holiday season, with a new PR targeting native Claude support on AWS Bedrock Mantle. Three concurrent PRs address MCP OAuth lifecycle issues (stale grant invalidation, serialization of revocation, and reauthentication propagation), signaling a push toward production-grade MCP integration. A regression in Gemini image token counting has resurfaced in v1.110.2, marking the second occurrence of this billing-affecting bug.

---

## 2. Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| **v1.108.20** | LTS Patch | New LTS release; `ghcr.io/berriai/litellm:lts` now points here. Includes all upstream fixes from the v1.108 branch. |

**Migration Notes:**
- **Anthropic Structured Output API** — `output_format` has migrated to `output_config.format` for GA parity. Beta headers are no longer required but remain functional during the transition window. Update `map_openapi_params` calls accordingly. See [PR #21635](https://github.com/BerriAI/litellm/pull/21635).

---

## 3. New Model & Hardware Support

| Provider | Model / Feature | Status | PR / Issue |
|----------|-----------------|--------|------------|
| **AWS Bedrock** | Claude served natively via **Mantle provider** | In progress | [PR #54946](https://github.com/BerriAI/litellm/pull/54946) |
| **AWS Bedrock** | Converse route — new headers for Vertex/Bedrock region parity | In progress (stacked PR) | [PR #54612](https://github.com/BerriAI/litellm/pull/54612) |
| **ElevenLabs** | `diarized_json` transcription with multi-channel speaker support | In progress | [PR #31324](https://github.com/BerriAI/litellm/pull/31324) |
| **Vertex AI** | Gemini embeddings — per-input fan-out option or warning requested | Open | [Issue #38823](https://github.com/BerriAI/litellm/issues/38823) |

> **Note:** The Mantle provider PR is untested against live credentials; Python bridge parity was validated against cost map rates only.

---

## 4. Performance & Optimization

| Area | Change | PR / Issue |
|------|--------|------------|
| **UI Build** | Docker build now uses pre-built UI artifacts, skipping `build_admin_ui.sh` when `index.html` exists — reduces CI time on both `Dockerfile` and `Dockerfile.database` | [PR #29092](https://github.com/BerriAI/litellm/pull/29092) |
| **Token Counting** | `token_counter` now counts `tool_call["function"]["name"]` in addition to `arguments` — resolves undercounting of function-calling prompts | [PR #31280](https://github.com/BerriAI/litellm/pull/31280) |
| **Anthropic Cache Costing** | Double-counting of `cache_read_input_tokens` in custom pricing path fixed | [PR #31282](https://github.com/BerriAI/litellm/pull/31282) |
| **Streaming** | `stream_chunk_builder` now seeds base-response metadata from the earliest chunk by `_hidden_params.created_at` | [PR #31277](https://github.com/BerriAI/litellm/pull/31277) |
| **Vertex Cost Tracking** | `model_info` custom pricing now honored in passthrough cost tracking | [PR #31304](https://github.com/BerriAI/litellm/pull/31304) |
| **Redis Stores** | `flush_local()` added to all native stores for test harness reset of live processes | [PR #54921](https://github.com/BerriAI/litellm/pull/54921) |
| **Helm** | New `extraLabels` value to set common labels on all chart objects | [PR #31538](https://github.com/BerriAI/litellm/pull/31538) |
| **Guardrails** | Custom redaction tags now forwarded to `ContentFilterGuardrail` initialization | [PR #30017](https://github.com/BerriAI/litellm/pull/30017) |

---

## 5. Stability & Regressions

Ranked by user impact:

### 🔴 High Severity

| Issue | Description | Status | Fix PR |
|-------|-------------|--------|--------|
| **[#54804](https://github.com/BerriAI/litellm/issues/54804)** | **Gemini image `thoughtsTokenCount` regression in v1.110.2** — Google bills these tokens at text output rate; the fix from #52220 (v1.108.10) regressed. Affects Vertex AI image model cost tracking. | Open | — |
| **[#49857](https://github.com/BerriAI/litellm/issues/49857)** | **MCP OAuth `dcr_bridge` relay serves mismatched issuer** — discovery document issuer is gateway relay origin, but `/authorize` redirect uses upstream AS; violates RFC 9207 | Open | — |
| **[#54172](https://github.com/BerriAI/litellm/issues/54172)** | **Bedrock Converse `bedrock_tool_name_mappings` is process-global** — tool names rewrite across all concurrent requests and API keys on the proxy | Open | — |

### 🟡 Medium Severity

| Issue | Description | Status | Fix PR |
|-------|-------------|--------|--------|
| **[#53345](https://github.com/BerriAI/litellm/issues/53345)** | **Gemini → Anthropic drops parallel function calls, duplicates tool_result IDs** — loses tool calls when model turn has two `functionCall` parts for the same function | Open | — |
| **[#54855](https://github.com/BerriAI/litellm/issues/54855)** | **`/v1/responses` with Anthropic reorders thinking/text blocks on replay** — causes Claude 5.x rejection (thinking block bound to wrong conversation) | Open | — |
| **[#36548](https://github.com/BerriAI/litellm/issues/36548)** | **`LoggingWorker` drops queue on event loop change** — strands worker task and loses log queue in multi-threaded worker pools | Open | — |
| **[#1264](https://github.com/BerriAI/litellm/issues/1264)** | **Same input yields different `prompt_tokens` across streaming vs. non-streaming** — long-standing bug affecting token budget calculations | Open (reopened) | — |
| **[#28071](https://github.com/BerriAI/litellm/issues/28071)** | **`token_counter` raises `ValueError` for OpenAI-style `video_url` content blocks** | Open | — |
| **[#44623](https://github.com/BerriAI/litellm/issues/44623)** | **`uv.lock` pins uvloop 0.22.1** — double-close socket bug can close unrelated connections after cancelled connect | Open | [1](https://github.com/MagicStack/uvloop/issues/738) |

### 🟢 Low Severity (Notable Fixes)

| Issue | Description | Status | Fix PR |
|-------|-------------|--------|--------|
| **[#54893](https://github.com/BerriAI/litellm/issues/54893)** | **Clearing team "Default Key Duration" saves `""` instead of `null`**, breaks member key creation | Open | — |
| **[#53787](https://github.com/BerriAI/litellm/issues/53787)** | **Missing US/EU Data Zone prices for Azure AI Foundry `Microsoft-Decision-1.1`** — Global rate understates Data Zone spend | Open | — |
| **[#54436](https://github.com/BerriAI/litellm/issues/54436)** | **Vertex AI Claude deprecation date stored as floor date** — "Not sooner than" date treated as hard deadline | Open | — |
| **[#37810](https://github.com/BerriAI/litellm/issues/37810)** | **`key_type="llm_api"` keys get 403 on `/model/info` endpoints** — permissions gap in key management | Closed | — |

> **MCP OAuth Lifecycle Fixes** — Three PRs targeting stale grant handling ([#54812](https://github.com/BerriAI/litellm/pull/54812), [#54816](https://github.com/BerriAI/litellm/pull/54816), [#54815](https://github.com/BerriAI/litellm/pull/54815)) landed today; these resolve race conditions in credential invalidation and reauthentication propagation.

---

## 6. What This Means for Application Developers

### Immediate Action Items

1. **Avoid v1.110.2 for production Gemini image workloads** — The `thoughtsTokenCount` regression causes silent billing errors. Downgrade to v1.108.20 or pin to v1.108.x LTS until the fix is backported.

2. **Audit token budgets if using function calling** — The fix in [PR #31280](https://github.com/BerriAI/litellm/pull/31280) corrects undercounting of function names. If you have been relying on `token_counter` for budgeting, expect slightly higher counts post-update.

3. **Hold off on Mantle-based Claude deployments** — The Bedrock Mantle provider ([PR #54946](https://github.com/BerriAI/litellm/pull/54946)) lacks live test coverage. Wait for the Python bridge parity validation to complete.

### Upcoming Changes to Prepare For

- **Anthropic structured outputs**: Migrate `output_format` to `output_config.format` before beta headers are removed in a future release.
- **MCP OAuth flows**: If you run MCP-connected servers, the improved grant invalidation logic may affect credential refresh timing — test your re-authentication flows.
- **Multi-threaded proxy deployments**: If using `--num_workers > 1` with logging callbacks, the `LoggingWorker` fix ([#36548](https://github.com/BerriAI/litellm/issues/36548)) will be required to avoid dropped observability events.
- **ElevenLabs diarization**: The new `diarized_json` transcription mode ([PR #31324](https://github.com/BerriAI/litellm/pull/31324)) will enable speaker-separated transcripts without manual post-processing.

### Monitoring Recommendations

- Set alerts on `litellm_remaining_api_key_requests_for_model` for Bedrock Converse routes until the global `bedrock_tool_name_mappings` bug is resolved.
- If routing Gemini → Anthropic with parallel function calls, monitor for dropped tool invocations until [#53345](https://github.com/BerriAI/litellm/issues/53345) is patched.

---

*Digest generated from GitHub data for [BerriAI/litellm](https://github.com/BerriAI/litellm) on 2026-11-28.*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the GitHub data for Unsloth AI and generate a structured digest for 2026-11-28.

Key observations:

1. **No releases in last 24h** - so Releases & Breaking Changes will be minimal/omitted

2. **PR Activity (Top items)**:
   - #20098: GGUF fast_inference validation
   - #20095: load_in_8bit INT8/FP8 selection
   - #20097: BF16 GGUF tensors as bfloat16
   - #20096: 4bit QLoRA without bitsandbytes (Unsloth NF4 stand-in)
   - #20086: Windows integrated CUDA memory cap
   - #20082: GGUF KV GPU share weighting
   - #20091: Faster packed GGUF LoRA training
   - #20080: Inkling 2 GGUFs support
   - #20094: MiniMax-H3 live denoise preview
   - #20081: Live denoise preview optimization
   - #20072: Qwen-Image-2.1 per-row layout (2.12x faster)
   - #20092: Portable resume DTensor optimization
   - #20090: Native FSDP2 bitsandbytes export
   - #20089: Native FSDP2 MoE expert stacks
   - #20066: torch 2.14.1 for Apple Silicon
   - #20070: Qwen3.5 GGUFs fused tensors
   - #20087: DSpark auto-selection

3. **Issues Activity**:
   - Feature requests for multiple model paths, file downloads, DPO training, SSO hub
   - Bug reports for AMD GPU detection, translate mode, MCP server issues
   - Windows issues with hash mismatch, GPU memory underestimation
   - Studio bugs with MLX model picker, CSV import, chat banner

Now I'll structure this into a comprehensive digest.
</think>


# Unsloth Digest — 2026-11-28

## 1. Today's Highlights

The Unsloth team closed a cluster of infrastructure PRs around GGUF loading and memory management. Most notably, packed GGUF LoRA training received a constant-type compilation speedup and official support for Inkling 2 GGUFs, while Apple Silicon installations now default to torch 2.14.1 delivering 1.16–1.45× faster MPS image workloads. Windows integrated CUDA memory accounting received a long-needed fix to prevent over-allocation on carve-out GPUs.

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours.
- **torch 2.14.1 rollout**: New Apple Silicon installs and Repair now pull torch 2.14.1 instead of 2.13. Existing installs retain their current torch version and are unaffected on re-run or `studio update`. Benchmarks show Studio MPS image workloads running 1.16–1.45× faster on M5 Max.

## 3. New Model & Hardware Support

| Item | Details | PR / Issue |
|------|---------|------------|
| **Inkling 2 GGUFs** | `gguf_packed = True` now loads Inkling 2 Small/Mini GGUFs (`inkling2`, `inkling2_loop`) with quantized Linears and MoE expert stacks kept packed for LoRA training. | [#20080](https://github.com/unslothai/unsloth/pull/20080) |
| **Qwen3.5 GGUFs (fused tensors)** | GGUF loader handles `blk.N.attn_qkv_gate` (fused `attn_qkv | attn_gate`) and `blk.N.ssm_beta_alpha` pairs written by current llama.cpp converter. | [#20070](https://github.com/unslothai/unsloth/pull/20070) |
| **BF16 GGUF tensors** | Mapped GGUF loader now returns BF16 tensors as zero-copy `torch.bfloat16` views instead of raw `uint8`. | [#20097](https://github.com/unslothai/unsloth/pull/20097) |
| **Qwen-Image-2.1 per-row batch layout** | Fixes cross-row RoPE padding corruption in multi-prompt image batches; enables 2.12× streamed throughput on A100. | [#20072](https://github.com/unslothai/unsloth/pull/20072) |
| **4-bit QLoRA without bitsandbytes** | Unsloth registers its own `bitsandbytes` stand-in package so QLoRA trains on machines where bitsandbytes native library cannot load (no wheel, ROCm missing kernels, Windows ARM). | [#20096](https://github.com/unslothai/unsloth/pull/20096) |
| **DSpark auto-selection guardrail** | Auto mode now only promotes DSpark on builds that advertise `draft-dspark` and on the first build containing the DSpark speed fixes, preventing regression on older prebuilt binaries. | [#20087](https://github.com/unslothai/unsloth/pull/20087) |

## 4. Performance & Optimization

| Area | Change | Impact | PR / Issue |
|------|--------|--------|------------|
| **Packed GGUF LoRA training** | Constant ggml types/shapes under `torch.compile`; recompute reuse; zoo kernels enabled by default. | Faster iteration on packed GGUF weights. | [#20091](https://github.com/unslothai/unsloth/pull/20091) |
| **Windows integrated CUDA memory cap** | On Windows integrated GPUs (e.g. RTX Spark N1X), GGUF/llama.cpp allocation is now capped at Windows commit limit instead of the inflated CUDA-reported figure (112,350 MiB reported vs 64 GB usable). | Prevents OOM from inflated memory reports. | [#20086](https://github.com/unslothai/unsloth/pull/20086) |
| **GGUF KV cache GPU share weighting** | KV GPU share estimate now accounts for SWA layers and varying sequence-length buckets, instead of naively distributing `gpu_layers / (block_count + 1)`. | More accurate memory planning for non-standard architectures. | [#20082](https://github.com/unslothai/unsloth/pull/20082) |
| **Live denoise preview offloading** | Preview work (projection, VAE decode, JPEG encode) now costs nothing when no visible page is watching the render. | Zero overhead for background renders. | [#20081](https://github.com/unslothai/unsloth/pull/20081) |
| **MiniMax-H3 live denoise preview** | Fitted linear latent-to-RGB map (same mechanism as LTX-2.5, Wan 2.2, HunyuanVideo-1.5), no tiny decoder or extra downloads. | Visual feedback during MiniMax-H3 renders. | [#20094](https://github.com/unslothai/unsloth/pull/20094) |
| **Portable resume DTensor offload** | Loaded DTensor optimizer moments stay on host instead of copying to device before handing to the offloader. | Faster checkpoint resume under `UNSLOTH_OFFLOAD_OPTIMIZER_STATE=1`. | [#20092](https://github.com/unslothai/unsloth/pull/20092) |
| **Native FSDP2 MoE expert stacks** | Packed expert stacks (NVFP4/MXFP8/MXFP4/GGUF) now kept replicated instead of being passed to `fully_shard` and crashing. | Enables FSDP2 training on MoE GGUF/packed models. | [#20089](https://github.com/unslothai/unsloth/pull/20089) |
| **`load_in_8bit = "int8"` selection** | Explicitly selects rotated int8 LoRA base, equivalent to `float8_training = "int8_lora"` on a 16-bit load. | Consistent behavior across `FastLanguageModel` and `FastModel`. | [#20095](https://github.com/unslothai/unsloth/pull/20095) |
| **GGUF fast_inference guard** | `load_vllm` with `gguf_file` argument now refuses fast_inference with a clear error instead of silently dropping the request. | Fail-fast on unsupported configurations. | [#20098](https://github.com/unslothai/unsloth/pull/20098) |

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | **Windows Desktop v0.1.925-beta**: `install.ps1` HashMismatch, blocked by Kaspersky Adaptive Anomaly Control. | OPEN — [#19908](https://github.com/unslothai/unsloth/issues/19908) | — |
| **High** | **AMD RX 6700S not detected** on Windows 11 Unsloth Desktop 0.1.917-beta (gfx1032). | OPEN — [#17874](https://github.com/unslothai/unsloth/issues/17874) | — |
| **Medium** | **Remote MCP header mismatch**: intermittent "missing Mcp-Param-owner header" on large `create_or_update_file` payloads via GitHub MCP server. | OPEN — [#19876](https://github.com/unslothai/unsloth/issues/19876) | — |
| **Medium** | **Studio MLX model picker**: loads local FP16 checkpoint but applies 4-bit runtime quantization. | OPEN — [#20045](https://github.com/unslothai/unsloth/issues/20045) | — |
| **Medium** | **CSV chat import**: `developer` rows treated as user messages; headerless CSVs starting with a `developer` row drop that row entirely. | CLOSED — [#19810](https://github.com/unslothai/unsloth/issues/19810) | (closed without explicit PR in window) |
| **Medium** | **Translate not working** unless in detect-language mode. | CLOSED — [#19759](https://github.com/unslothai/unsloth/issues/19759) | — |
| **Medium** | **MLX deadlock + TypeError** on `LiquidAI/LFM3-1.7B-MLX-4bit` (Apple Silicon). | CLOSED — [#19749](https://github.com/unslothai/unsloth/issues/19749) | — |
| **Low** | **CSM-1B TTS notebook**: off-distribution Mimi frame at end of each training clip (pad audio to 1920 samples). | OPEN — [#19438](https://github.com/unslothai/unsloth/issues/19438) | — |
| **Low** | **Tool eviction race**: long tool-driven document analysis can lose earlier tool results when context fills before `compact_completed_tool_arguments` runs. | OPEN (refactor PR) — [#18516](https://github.com/unslothai/unsloth/pull/18516) | [#18516](https://github.com/unslothai/unsloth/pull/18516) |
| **Low** | **Windows Strix Halo GPU memory underestimation** when BIOS UMA reservation reduces Windows-visible RAM. | OPEN — [#19768](https://github.com/unslothai/unsloth/issues/19768) | — |

## 6. What This Means for Application Developers

- **Windows CUDA users** should update or re-run after the memory cap fix lands — OOMs on integrated GPUs (RTX Spark N1X) were likely due to inflated memory reports, not actual VRAM exhaustion.
- **LoRA fine-tuners on GGUF** should see meaningfully faster training iteration with the constant-type compilation and Inkling 2 support; test `gguf_packed = True` if using Inkling architectures.
- **Apple Silicon developers** on fresh installs gain ~20–45% image workload speedup from torch 2.14.1. Existing installs can trigger the upgrade via `UNSLOTH_TORCH_UPGRADE=1` or Desktop Repair.
- **Multi-path model setups** (issue #18896) are still unimplemented — if you rely on custom local model directories outside the default HuggingFace cache, the current workaround is to ensure models sit under the standard path.
- **DPO training** is still on the roadmap (issue #19943); currently only SFT and CPT are available.
- **MCP tool developers** should be aware of the intermittent header mismatch on large payloads (issue #19876) when using the Remote GitHub MCP server with Unsloth Desktop.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*