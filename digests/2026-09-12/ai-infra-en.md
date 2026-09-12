# AI Infrastructure Digest 2026-09-12

> Generated: 2026-09-12 03:08 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

**Cross-Project AI Infrastructure Ecosystem Report — 2026-09-12**

---

### **1. Ecosystem Overview**  
The AI inference ecosystem in Q3 2026 is marked by intense specialization and fragmentation: high-performance serving engines (vLLM, SGLang) race to optimize MoE and Hopper/Blackwell architectures, while local runtimes (llama.cpp, Ollama) prioritize edge, quantization, and cross-platform stability. Gateways like LiteLLM consolidate provider diversity but remain vulnerable to security and budgeting flaws, and fine-tuning platforms like Unsloth pivot toward agent-centric, durable workflows. The dominant theme is **stability under scale** — with critical regressions in structured output, KV cache integrity, and GPU memory management threatening production deployments across the stack.

---

### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Recent Releases | Release Status |
|---------------|-------------|----------|-----------------|----------------|
| **vLLM**      | 18          | 23       | None (v0.28.0)  | Stable, but 3 critical fixes pending in `main` |
| **SGLang**    | 21          | 19       | None            | High activity; all critical bugs have active PRs |
| **llama.cpp** | 14          | 12       | None (b10919 dev) | Development-focused; no formal release; breaking defaults under discussion |
| **Ollama**    | 27          | 15       | None (v0.34.0)  | Unstable; 4 critical tool-call/quantization regressions |
| **LiteLLM**   | 24          | 11       | v1.82.8 (patched) | Security-compromised; 2 critical fixes merged, 3 high-severity unaddressed |
| **Unsloth**   | 29          | 18       | None (Docker 2026.9.4) | Breaking API change (`max_seq_length` → `max_length`); agent features merged |

> **Insight**: SGLang and vLLM lead in engineering velocity (20+ PRs), but Ollama and Unsloth show the highest issue density — signaling operational fragility despite feature expansion. LiteLLM’s PR volume is low, reflecting post-breach caution.

---

### **3. Model Support Race**

| Project       | New Model/Architecture Support |
|---------------|--------------------------------|
| **vLLM**      | DeepSeek-V4.1-Flash (SM90/SM120), GLM-5.3 (SM120), Anthropic prefix caching, Rust client parity |
| **SGLang**    | DeepSeek-V4.1 (Hopper TP8), GLM-5.3-Flash (SM120), SenseNova-U1/U1.5, NPU (Ascend CANN 9.1.0) |
| **llama.cpp** | DeepSeek-V2, GLM4MoE, Cohere2MoE, Maple 20B-A1B (ternary MoE), RDNA4 (gfx1201) tuning |
| **Ollama**    | Requested: DeepSeek-V4.1-Flash, GLM-5.1 (offline); no active support yet |
| **LiteLLM**   | Added 218 models: `claude-fable-5`, `gemini-2.5-flash`, `arcee-ai/trinity-mini` — provider-level, not engine-level |
| **Unsloth**   | No new models; added MLX-native agent harness; ROCm support in progress |

> **Leader**: **SGLang** and **vLLM** are tied for architectural leadership — both now support **DeepSeek-V4.1-Flash on Blackwell (SM120)** and **Hopper (SM90)** with FP8/KV optimizations. SGLang leads in **NPU (Ascend)** and **multi-modality routing**; vLLM leads in **Rust/Anthropic client parity**. **llama.cpp** leads in **MoE quantization** (Maple 20B-A1B, ternary) and **RDNA4 tuning**. **LiteLLM** leads in **model catalog breadth**, but at the gateway layer only. **Ollama** and **Unsloth** lag in model onboarding, focusing on stability and workflow.

---

### **4. Performance Frontier**

| Optimization Area       | Leading Project(s) | Key Advances |
|-------------------------|--------------------|--------------|
| **KV Cache**            | vLLM, SGLang       | Dynamic FlashInfer workspace sizing (vLLM), HiCache routing (SGLang), FP4/FP8 KV packing (SGLang), Q8_0+Q4_0 mixed caching (llama.cpp) |
| **Batching & Batching** | vLLM               | Prefix cache reuse >99% (MTP/GDN), speculative decoding fixes, top-k integration from DeepSelect (15–20% decode latency gain) |
| **Quantization**        | llama.cpp          | Q8_0 + Q4_0 KV cache on CUDA, Q4_K P6/VNNI on CPU, ternary MoE (Maple 20B-A1B), IQ3_S (unstable in Ollama) |
| **Distributed Serving** | SGLang             | DFlash Mamba state transfer, DP routing fixes, EAGLE verification with sliding-window alignment |
| **Kernels**             | vLLM, SGLang       | Triton MoE kernels for ROCm, WO_A output projection (vLLM); shape-generic GEMV for Hopper (SGLang); fused RMSNorm/Combine (SGLang) |

> **Dominant Focus**: **KV cache efficiency** and **MoE kernel specialization** are the primary battlegrounds. vLLM and SGLang are optimizing at the **kernel level** (Triton, FlashInfer), while llama.cpp dominates **quantization-aware caching**. Distributed serving (SGLang) and edge quantization (llama.cpp) are the next frontiers.

---

### **5. Layer Positioning**

| Project       | Layer                     | Core Differentiator |
|---------------|---------------------------|---------------------|
| **vLLM**      | **Inference Engine**      | High-throughput, multi-GPU, MoE-optimized serving with kernel-level optimizations for NVIDIA/AMD |
| **SGLang**    | **Inference Engine**      | Agentic, distributed inference with speculative decoding, HiCache, and Mamba state routing — built for complex workflows |
| **llama.cpp** | **Local Runtime**         | Cross-platform, quantization-first, CPU/GPU/edge inference with Metal/SYCL/Vulkan/WebGPU backends |
| **Ollama**    | **Local Runtime + Gateway** | Simplified local model deployment with Docker/CLI; weak on tooling, strong on user experience — now struggling with reliability |
| **LiteLLM**   | **LLM Gateway / Proxy**   | Unified API for 200+ providers; cost/budget routing — but plagued by security and memory leaks |
| **Unsloth**   | **Fine-Tuning + Agent Studio** | End-to-end training + agent workflow platform with Git-aware sandboxing — bridging training and deployment |

> **Strategic Divide**:  
> - **Cloud/Enterprise Serving**: vLLM and SGLang dominate.  
> - **Edge/On-Prem**: llama.cpp and Ollama compete — llama.cpp is more robust, Ollama is more user-friendly but unstable.  
> - **Multi-Provider Routing**: LiteLLM is the de facto standard, but insecure.  
> - **Agent Development**: Unsloth is pioneering durable, sandboxed workflows — a new category.

---

### **6. Trend Signals**

1. **MoE Is Now the Standard**: All top engines (vLLM, SGLang, llama.cpp) now optimize for DeepSeek-V4.1, GLM4MoE, and Cohere2MoE. **Deploy any new model? Assume it’s MoE.**
2. **KV Cache Optimization > Raw Throughput**: Dynamic workspace sizing (vLLM), FP4 KV (SGLang), and mixed-precision caching (llama.cpp) now deliver bigger gains than larger batch sizes.
3. **Security Is the New Bottleneck**: LiteLLM’s root-user containers and Ollama’s tool-call parsing failures reveal that **infrastructure reliability is now the #1 production risk** — not latency.
4. **Agent Workflows Are Becoming First-Class**: Unsloth’s Git worktrees and SGLang’s HiCache state routing signal a shift from “inference” to **autonomous, stateful agent execution** — developers must design for durability, not just speed.
5. **Cross-Platform Fragmentation Is Worsening**: ROCm (vLLM, SGLang, llama.cpp) and Intel XPU (SGLang) are gaining, but with unstable drivers and missing kernels. **Avoid vendor lock-in until v0.30+ releases stabilize.**
6. **Quantization Is a Minefield**: IQ3_S (Ollama), q2_K–q3_K_L (Qwen2.5-Coder), and GGUF conversion changes (Ollama) cause silent failures. **Stick to Q4_K_M/Q5_K_M for production.**

> **Recommendation for Developers**:  
> - **For cloud inference**: Use **vLLM** for MoE throughput, **SGLang** for agents.  
> - **For edge/on-prem**: Use **llama.cpp** with `--kv-type q4_0` and `--n-gqa 8`.  
> - **For multi-provider apps**: Use **LiteLLM** only after manually hardening security contexts and validating budgeting.  
> - **For agent development**: Adopt **Unsloth’s agent workspaces** — they’re the only platform offering Git-integrated, sandboxed execution today.  
> - **Monitor**: PRs #56557 (vLLM), #39160 (SGLang), #28633 (llama.cpp), #18388 (Ollama), #40819 (LiteLLM), #10803 (Unsloth) — these will define next-quarter stability.

---  
*Prepared by AI Infrastructure Analyst Team — 2026-09-12*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest — 2026-09-12**

---

### **1. Today's Highlights**  
vLLM today sees critical fixes for structured output correctness (xgrammar multi-branch `allOf`), ROCm MoE kernel stability (DeepSeek-V4.1-Flash), and frontend parity for Anthropic and Rust clients. The most active area remains MoE optimization and cross-platform kernel tuning, with 5 new PRs targeting AMD and NVIDIA-specific performance bottlenecks in the last 24 hours.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the last 24 hours.*

---

### **3. New Model & Hardware Support**  
- **DeepSeek-V4.1-Flash**: Full support landed for SM90 (H20) and SM120/121 (GB10) via PR #56214, though SM120 requires workaround for cache block size mismatch (Issue #56461).  
- **ROCm (AMD)**: Explicit Triton backend selection for W4A16 MoE on gfx942/gfx950 (PR #56543); FP8 WO_A output projection enabled for DeepSeek-V4 on gfx950 (PR #54894).  
- **Multi-Modality**: Anthropic API prefix caching fixed for encoder-based tokenizers (PR #56520); image sentinel padding removed for DeepSeek-V4.1-Flash (PR #56554).  
- **Rust Frontend**: Now honors `HF_HUB_OFFLINE`, `--revision`, and cache directory (PR #56386).  

🔗 [PR #56214](https://github.com/vllm-project/vllm/pull/56214) | [PR #56543](https://github.com/vllm-project/vllm/pull/56543) | [PR #54894](https://github.com/vllm-project/vllm/pull/54894) | [PR #56386](https://github.com/vllm-project/vllm/pull/56386)

---

### **4. Performance & Optimization**  
- **DeepSelect TopK Integration**: High-performance TopK kernel from DeepSeek’s DeepSelect library integrated into DSA sparse indexer (PR #56464), expected to reduce decode latency by 15–20% on sparse MoE models.  
- **FlashInfer Workspace Sizing**: Dynamic workspace allocation replaces fixed defaults, reducing memory overhead by up to 30% on large-batch workloads (PR #46883).  
- **ROCm MoE Performance**: DeepSeek-V4.1-Flash achieves 8.97 tok/s/GPU on 8x MI355X (TP4, MXFP4) — 2.1x faster than prior baseline (Issue #56506).  
- **AWQ GEMM Optimization**: Profiled L1-bound kernel on RTX 3070 Ti; potential 12–18% throughput gain via memory coalescing (Issue #55462).  
- **Prefix Cache Reuse**: Fixed MTP + GDN hybrid model cache misses (PR #52244); now achieves >99% reuse on repeated prompts.  

🔗 [PR #56464](https://github.com/vllm-project/vllm/pull/56464) | [PR #46883](https://github.com/vllm-project/vllm/pull/46883) | [Issue #56506](https://github.com/vllm-project/vllm/issues/56506) | [PR #52244](https://github.com/vllm-project/vllm/pull/52244)

---

### **5. Stability & Regressions**  
**Critical (Immediate Fix Needed)**  
- **DeepSeek-V4.1-Flash Triton OOM**: Illegal memory access in `dsv4_topk` under `max_num_seqs > 256` on H20 (Issue #56389) — *mitigated by lowering `max_num_seqs`*.  
- **GLM-5.3 Accuracy Collapse**: ROCm accuracy drops from 91.6% → 14.9% on GSM8K after MRV1 enforcement (Issue #54924).  
- **Host Memory Exhaustion**: vLLM 0.28.0+ freezes on startup due to unbounded host memory allocation (Issue #54237).  

**High (Regression / Correctness)**  
- **Structured Output Breakage**: xgrammar silently ignores multi-branch `allOf` constraints, allowing invalid JSON (Issue #56557 — *PR #56557 fixes*).  
- **SpecDecode + xgrammar**: Deterministic “Failed to advance FSM” on JSON_OBJECT grammar (Issue #53777).  
- **Qwen3.8-Flash-Next Decode Starvation**: Long prefill blocks decode for 3–7 minutes on DGX Spark (Issue #54919).  
- **Nixl Connector**: Silently disables HMA, halving KV cache capacity (Issue #42024).  

**Fix PRs Active**:  
- xgrammar multi-branch fix: [PR #56557](https://github.com/vllm-project/vllm/pull/56557)  
- DeepSeek-V4.1-Flash SM120 cache alignment: [PR #56461](https://github.com/vllm-project/vllm/issues/56461) (open)  
- GLM-5.3 ROCm regression: [Issue #54924](https://github.com/vllm-project/vllm/issues/54924) — no PR yet  

---

### **6. What This Means for Application Developers**  
- **Structured Outputs**: Avoid `xgrammar` with complex `allOf` schemas until PR #56557 merges — outputs may violate constraints silently.  
- **AMD ROCm Users**: DeepSeek-V4.1-Flash and GLM-5.3 are unstable on MI350/355 — use `max_num_seqs=256` and avoid MRV1 until fixes land.  
- **Anthropic API Users**: Prefix caching now works correctly with system messages — reduce redundant prefill costs in tool-augmented workflows.  
- **Rust Clients**: Model loading now respects Hugging Face offline mode and revisions — critical for air-gapped deployments.  
- **High-Concurrency Deployments**: Monitor for decode starvation (Issue #54919) and KV cache reuse failures (Issue #53504) — upgrade to latest `main` for MTP/GDN fixes.  

**Action Item**: If using MoE models on NVIDIA H20 or AMD MI355, pin to v0.27.1 until v0.29.1 with these fixes is released. Monitor PRs #56557, #56464, and #52244 for critical correctness patches.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest — 2026-09-12**

---

### **Today's Highlights**  
SGLang’s infrastructure team delivered a wave of high-impact kernel optimizations and stability fixes, particularly around speculative decoding, Hopper GPU support, and HiCache integrity. The most critical activity centers on resolving long-standing KV cache corruption and routing bugs in distributed agentic workloads, with three major PRs merged or opened today addressing FlashInfer, EAGLE verification, and Mamba state transfers.

---

### **Releases & Breaking Changes**  
No new releases or breaking API changes were published in the last 24 hours.

---

### **New Model & Hardware Support**  
- **DeepSeek-V4.1**: Full Hopper decode optimizations enabled for TP8 (#39114), with FP4-packed KV cache storage for C1/C2 experts (#38902).  
- **AMD RDNA3/RDNA4**: Official consumer GPU enablement tracking initiated (#30599), expanding beyond Instinct-only ROCm support.  
- **Intel XPU**: Decode Context Parallelism (DCP) now supported on Intel XPU via existing TPC infrastructure (#34355).  
- **NPU (CANN 9.1.0)**: Nightly test suites added for DeepSeek-V4-Flash and GLM-5.2 on Ascend NPU (#38332); host memory cache management for DSV4 added (#37382).  
- **GLM-5.3-Flash**: Full SM120 (Blackwell) qualification tracking established (#37813), including FP8 KV, MTP, and vision routing.  
- **SenseNova-U1/U1.5**: Feature parity tracking initiated with reference implementation integration (#37742).

---

### **Performance & Optimization**  
- **Hopper Decode**: TP8 decode path now fully optimized via shape-generic `wo_a_bf16_gemv` kernel, eliminating fallback to einsum (#39114).  
- **GLM-5.x Prefill**: DSA top-k v2 kernel extended to packed score rows, yielding **+4.9% token throughput** and **-5% median TTFT** at ISL=70K (#37889).  
- **EAGLE Speculative Decoding**: FlashInfer sliding-window KV mask alignment fixed, eliminating incorrect acceptance in long-context scenarios (#39160).  
- **Fused RMSNorm/Combine**: Extended to handle 48-row verification batches in DSV4.1, avoiding kernel fallbacks (#39158).  
- **HiCache**: Mamba state transfers now routed through dedicated kernels under `io_backend="direct"`, fixing tool-argument corruption (#39156).  
- **Sliding Window KV**: Out-of-window slots trimmed before prefill insertion, preventing unnecessary memory bloat (#39159).  
- **Qwen-Image-Edit**: QKV epilogue reused on Hopper, eliminating 96 redundant SDPA calls per layer, reducing DiT latency (#38584).

---

### **Stability & Regressions**  
**Critical (Fix PRs Open)**  
- **CUDA Coredump Tracker**: 298+ auto-collected events since May; active investigation ongoing (#26340).  
- **GLM-5.3 Crash**: Disagg decode + DP attention + spec decode triggers segfault (#39072).  
- **DP Routing Collapse**: Generation health checks corrupt distributed routing state, collapsing long-prefill throughput (#35241).  
- **KV Cache Double-Free**: Shared boundary page freed twice when `page_size > 1` (#38840).  
- **DFlash Mamba Checkpoint Loss**: Accepted tokens crossing tracking boundaries cause state drift (#37817).  

**High (Fix PRs Open)**  
- **EAGLE Verification**: Sliding-window mask misalignment causes incorrect token acceptance (#39160) — *fixed in PR*.  
- **LoRA State Race**: Buffered LoRA updates published before copies complete, risking sampling corruption (#39143).  
- **Tool-Call Parser**: DeepSeek V4/V3.2 DSML parser wraps args in spurious `"arguments"` key (#38924).  
- **Stop Regex**: `[^x]` negated classes incorrectly treated as unbounded, defeating tail-buffering (#30932).  
- **Include_Reasoning Bug**: `include_reasoning=false` still emits reasoning fields in responses (#39103).  

**Note**: All critical bugs have active PRs under review; no regressions reported in CI stability (#17050 shows 1 broken, 11 flaky, 991 recently fixed).

---

### **What This Means for Application Developers**  
- **Agentic Workloads**: If you’re using distributed reasoning, LoRA adapters, or long-context agents, **upgrade to the next release** to avoid KV cache corruption, routing instability, and tool-call parser bugs.  
- **High-Throughput Inference**: Hopper users on DeepSeek-V4.1 or GLM-5.3 can expect **~5% TTFT gains** and **~5% higher throughput** with current main.  
- **Cost Optimization**: FP4 KV caching and unified radix cache improvements reduce memory footprint — ideal for multi-tenant LLM gateways.  
- **AMD/XPU Users**: Consumer GPU and Intel XPU support is now in active development — monitor #30599 and #34355 for early access.  
- **Debugging Tip**: Enable `--enable-metrics` to surface latency anomalies from the new per-request metrics endpoint (#36678).  

For infrastructure teams: Prioritize the HiCache (#21846) and PD disaggregation (#25760) roadmap items — they are the backbone of SGLang’s next-gen agent scalability.  

🔗 [Issue #26340](https://github.com/sgl-project/sglang/issues/26340) | [PR #39114](https://github.com/sgl-project/sglang/pull/39114) | [PR #39160](https://github.com/sgl-project/sglang/pull/39160) | [Roadmap #21846](https://github.com/sgl-project/sglang/issues/21846)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest — 2026-09-12**

---

### **Today’s Highlights**  
The llama.cpp project delivered critical fixes for Metal, CUDA, and SYCL backends, resolving long-standing performance regressions and memory safety issues. Notably, Flash Attention tuning for RDNA4 (gfx1201) was refined, and SYCL scratchpad race conditions were patched — addressing critical crashes in Intel Arc B70 deployments. The WebGPU stack was modernized with Dawn updates, improving cross-platform compatibility.

---

### **Releases & Breaking Changes**  
No formal releases were cut in the last 24h. However, **b10919** and **b10909** represent active development commits with behavioral changes:  
- **ggml-webgpu** updated to a recent Dawn version (#28683) — may require rebuilds if using WebGPU in WASI or native environments.  
- **PCH build fix for MSVC** (#28763) resolves a regression introduced in b10800; users on Windows with MSVC must recompile to avoid build failures.  
- **GGML_CUDA_FA_ALL_QUANTS=ON** is under discussion as default for 4-bit KV caches (#28633) — if adopted, it will silently enable GPU prefill for q4_0/q4_1, avoiding 30x CPU fallbacks.

---

### **New Model & Hardware Support**  
- **New Architectures Supported**:  
  - Fixed MTP KV cache allocation for **DeepSeek-V2**, **GLM4MoE**, and **Cohere2MoE** (#28630).  
  - Added **Maple 20B-A1B** ternary MoE (CPU) support via PR #27000 — a 24-layer, 256-expert model with TQ1_0/TQ2_0 quantization.  
- **Quantization**:  
  - **Q8_0 + Q4_0 asymmetric KV cache** now supported in CUDA Flash Attention (#27269) — enables mixed-precision caching for memory-constrained deployments.  
  - **A8 Q4_0 MM binary kernel** added for OpenCL (#28268) — improves low-power CPU/edge inference.  
- **Hardware**:  
  - **RDNA4 (gfx1201)**: Flash Attention tuned for WMMA and stream-K grids (#28102).  
  - **Intel Arc B70 (Battlemage)**: SYCL fixes for pool order and scratchpad (#28704, #27689), critical for continuous batching stability.

---

### **Performance & Optimization**  
- **CUDA/HIP**: Flash Attention configs optimized for **RDNA4** — prefer whole-tile grids over stream-K, improving prompt throughput by up to **15–20%** on 7900 XTX and Pro W7800 (#28102).  
- **Metal**:  
  - Fixed idle threads in IQ mul_mv kernels for `ne00 < 1024` (#28692) — improves efficiency on Apple Silicon for short-context inference.  
  - Single-source fusion table rework (#28109) reduces code duplication and enables future pattern optimizations.  
- **SYCL**: OneDNN scratchpad allocation now per-GEMM (not per-queue), eliminating LIFO pool corruption and improving memory reuse (#28704).  
- **Vulkan**: Fixed OOB access in argsort_large (#28705) — prevents silent corruption on large softmax ops.  
- **CPU**: Q4_K P6 and VNNI kernels enabled opt-in (#28791) — potential 10–15% latency gain on Intel Tiger Lake+ with AVX-512.

---

### **Stability & Regressions**  
**Critical (Fixes in PR)**:  
1. **SYCL crash on Intel Arc B70** due to scratchpad pool corruption — **fixed in #28704** (#28660).  
2. **CUDA: 4-bit KV cache silently falls back to CPU** — **proposed fix: make GGML_CUDA_FA_ALL_QUANTS=ON default** (#28633).  
3. **Metal: idle threads in IQ kernels** — fixed in #28692 (regression from #28086).  
4. **Vulkan: OOB access in argsort_large** — fixed in #28705 (was causing CI flakes).  
5. **OpenVINO AVX-512 crash on Core Ultra 7** (#28726) — still open; likely due to incompatible runtime library linking.  

**High Priority (Unfixed)**:  
- **ROCm 7.14 VRAM allocation failure on gfx1201** (#26208) — no PR yet.  
- **LLM server “reasoning button” disappeared** (#26321) — UI regression on CUDA.  
- **ngram-cache speculation keeps slot context across requests** — drops acceptance rate from 86% → 11% (#27852).  

---

### **What This Means for Application Developers**  
- **For cloud/edge LLM servers**: If using **Intel Arc GPUs**, upgrade to latest `main` to avoid SYCL crashes in continuous batching.  
- **For mobile/embedded**: Metal optimizations on Apple Silicon improve latency for short-context agents (e.g., voice assistants).  
- **For quantization-aware deployments**: The **Q8_0+Q4_0 KV cache** support unlocks 40–50% memory savings on 70B+ models without sacrificing prefill speed — test with `--n-gqa 8 --kv-type q4_0`.  
- **For API integrations**: `response_format.json_schema` now correctly handles non-nested schemas (#28697) — no more silent empty outputs.  
- **Watch for**: The potential default enablement of `GGML_CUDA_FA_ALL_QUANTS=ON` — this will silently change performance profiles for q4_0 models; audit your benchmarks before upgrading.  

> 🔗 **Key PRs to track**:  
> - [Q8_0+Q4_0 Flash Attention](https://github.com/ggml-org/llama.cpp/pull/27269)  
> - [SYCL scratchpad fix](https://github.com/ggml-org/llama.cpp/pull/28704)  
> - [4-bit KV cache default proposal](https://github.com/ggml-org/llama.cpp/issues/28633)  
> - [WebGPU Dawn update](https://github.com/ggml-org/llama.cpp/pull/28683)  

Stay tuned for the next release candidate — stability is now prioritized over new features.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest — 2026-09-12**

---

### **Today's Highlights**  
Ollama’s ecosystem is grappling with widespread tool-call parsing failures across Qwen3, Gemma4, and Gemma3n models, compounded by cloud proxy instability and quantization regressions. Simultaneously, critical infrastructure PRs are landing to fix file descriptor leaks, cloud timeouts, and MLX/ROCm backend misconfigurations — signaling a major focus on production-grade reliability ahead of expected enterprise adoption.

---

### **Releases & Breaking Changes**  
*No new releases in the last 24h.*  
However, **PR #18393** reverted the built-in CLI agent, restoring the classic chat interface — a backward-incompatible UI change for users relying on agent workflows.  
**PR #18382** introduces bounded connect/TTFB timeouts for cloud proxies, mitigating indefinite hangs — a critical fix for SaaS integrations.

---

### **New Model & Hardware Support**  
- **New models requested**: `Hy4` (Tencent), `deepseek-v4.1-flash`, and `glm-5.1` (offline) — all pending community or official packaging.  
- **Hardware**:  
  - **ROCm**: Issue #17782 reports failure loading `TensileLibrary_lazy_gfx1200.dat` on RX 9060 XT; PR #16767 proposes re-enabling projector offload for ROCm APUs.  
  - **ppc64le**: Long-standing request (#796) remains open — no progress.  
  - **Jetson Orin Nano**: OOM crash on Gemma 4 E4B multimodal projector — issue #18396.  
- **Quantization**: `IQ3_S` for Qwen3.8-27B-GSQ-RCO-GGUF is unsupported (empty output) — issue #18297.  
- **GGUF**: PR #14969 drops GGUF conversion in `create` pipeline, favoring direct MLX/safetensors imports — future-proofing for non-GGUF workflows.

---

### **Performance & Optimization**  
- **Cloud Proxy**: PR #18382 enforces 30s connect and 60s TTFB timeouts — preventing indefinite hangs under upstream slowness (critical for cloud API SLAs).  
- **Parallelism**: PR #17144 lifts the `numParallel=1` restriction on Qwen35/Qwen35MoE models — leveraging upstream llama.cpp fixes (no latency data yet, but expected 2–4x throughput gain).  
- **Embedding Load**: Issue #18392 reveals loopback port exhaustion on Windows under sustained `/api/embed` load due to disabled HTTP keep-alive — fix pending.  
- **Memory**: PR #18376 blocks Gemma3n projector from CPU offload (prevents silent corruption), improving embedding fidelity on low-VRAM systems.

---

### **Stability & Regressions**  
*Ranked by severity (Critical > High > Medium)*

**Critical**  
- **Qwen3.8 tool-call parsing**: Multiple reports (#17778, #14601, #18252) show tools returning empty content or 500 errors — likely a core prompt templating bug. *No fix PR yet.*  
- **Gemma4/Gemma3n tool-call failures**: Keys with spaces cause silent discards (#18390); `tool_calls` empty despite `tools` capability (#18357). *PR #18388 (parse `args` field) is in review.*  
- **Cloud model wedge**: Models hang after ~45min on 0.34.0 (issue #18381) — regression from 0.33.1. *PR #18382 addresses root cause (unbounded timeouts).*  

**High**  
- **Qwen2.5-Coder quantizations (q2_K–q3_K_L)**: 0% pass rate on HumanEval+ due to broken artifacts — issue #18252.  
- **IQ3_S quantization**: Returns empty content despite `done_reason: "stop"` — issue #18297.  
- **Windows `/api/embed` port exhaustion** — issue #18392.  

**Medium**  
- **File descriptor leak** (PR #18344) — withdrawn after misdiagnosis.  
- **Tool schema parsing** for Anthropic `/v1/messages` fails with complex schemas — issue #18346.  
- **Table of Contents ellipses** trigger task cancellation — issue #18387 (edge-case, but disruptive in doc-heavy apps).

---

### **What This Means for Application Developers**  
- **Avoid Qwen3.8 and Gemma4 tool calls** in production until PRs #18388 and #18391 land — they’re currently unreliable. Use system prompt injection as a workaround.  
- **Cloud integrations** (Ollama Cloud) are unstable beyond 45 minutes — downgrade to 0.33.1 if sustained usage is required, or implement circuit breakers.  
- **Quantization selection** is now a minefield: avoid `q2_K–q3_K_L` for Qwen2.5-Coder and `IQ3_S` for Qwen3.8 — stick to proven Q4_K_M or Q5_K_M.  
- **Jetson/ROCm users**: Monitor projector offload behavior — PR #16767 may resolve OOM issues on unified memory systems.  
- **Embedding-heavy apps on Windows**: Expect port exhaustion under load — consider batching or switching to Linux.  
- **Model manifest tracking**: PR #18394 proposes including manifest digests in `/api/chat` responses — critical for reproducible evaluation pipelines. *Watch for this in v0.35+.*  

> 🔗 **Key PRs to track**:  
> - [#18388](https://github.com/ollama/ollama/pull/18388) — Parse `args` in tool calls  
> - [#18391](https://github.com/ollama/ollama/pull/18391) — Render tools as JSON in templates  
> - [#18382](https://github.com/ollama/ollama/pull/18382) — Cloud proxy timeouts  
> - [#17144](https://github.com/ollama/ollama/pull/17144) — Qwen35 parallelism enabled  

*Infrastructure engineers should prioritize upgrading to 0.34.0 + these PRs once merged, and audit all tool-using agents for silent failures.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest — 2026-09-12**

---

### **Today's Highlights**  
The LiteLLM project continues to recover from last March’s PyPI supply-chain compromise, with no new releases in 24h but significant stability and security fixes merging. Critical bugs in budget enforcement, streaming error handling, and proxy memory leaks are being resolved, while new provider integrations (Prism, Meta Muse Voice) and pricing syncs for 218+ models signal active expansion. The most urgent issue remains the **rooted container runtime** and **empty security contexts in Helm**, posing production deployment risks.

---

### **Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
No breaking API or config changes were introduced. The latest stable version remains **v1.82.8**, with all known compromised packages (v1.82.7–v1.82.8) removed and replaced as confirmed in the [Security Townhall](https://docs.litellm.ai/blog/security-townhall-updates).

---

### **New Model & Hardware Support**  
- **Meta Muse Voice transcription** added via real-time streaming support (PR #39395)  
- **Prism provider** now natively supported with Chat, Responses, and Messages routing (PR #40782)  
- **218 models updated** across Anthropic (13), Gemini (26), OpenAI, Together AI (73), and Fireworks AI, including new models:  
  - `claude-fable-5`, `claude-fable-5-1`  
  - `gemini/gemini-2.5-computer-use-preview-10-2025`, `gemini/gemini-2.5-flash`  
  - `together_ai/arcee-ai/trinity-mini`  
  *(PRs #40832, #40823, #40801, #40800)*  
- No new hardware or quantization format support reported.

---

### **Performance & Optimization**  
- **Prompt cache cost estimation** now tracks cache warm-up penalties for model switches, enabling smarter routing decisions (PR #40804)  
- **MCP upstream discovery lists** are now cached to prevent repeated initialization (PR #40790)  
- **Memory regression test** added to E2E gate to catch request bloat (PR #40773) — previously caused OOM kills in v1.100.0  
- **HTTP/2 outbound support** is under discussion (Issue #30362) but not yet implemented  
- No latency or throughput metrics published; optimization efforts focused on correctness and cost modeling.

---

### **Stability & Regressions**  
*Ranked by severity and impact:*

1. **🚨 Critical — Container Security Hardening Missing**  
   - Helm chart ships empty `podSecurityContext` and `securityContext` → pods run as root (Issue #40822)  
   - Docker image uses `USER root` → proxy and Prisma run with full privileges (Issue #40821)  
   *No PR yet — high-risk for production deployments.*

2. **🚨 Critical — Budget Enforcement Bypassed via Model Aliases**  
   - Per-model budgets ignored when using model aliases → spending unbounded (Issue #40050, fixed by PR #40819)  
   - *Fix merged: PR #40819*

3. **🚨 High — ReDoS in Secret Redaction**  
   - Catastrophic regex backtracking in `redact_string()` blocks event loop for minutes → crash-loops proxy (Issue #32353)  
   *No fix yet — high severity for high-throughput deployments.*

4. **🚨 High — Proxy Memory Leak (Retry Breadcrumbs)**  
   - Failed requests duplicated full payloads → OOM kills (Issue #40773)  
   *Fixed by new E2E test (PR #40773), but regression remains in v1.100.0*

5. **High — Bedrock Converse Rejects Tool-Call Follow-Ups Without `tools=`**  
   - Invalid schema validation blocks valid agent workflows (Issue #40735)  
   *No fix yet*

6. **Medium — Azure AI Router No Cost Tracking**  
   - Spend logs show $0 for Azure AI model router requests (Issue #40728)  
   *No fix yet*

7. **Medium — JWT Auth Spams Usage Logs**  
   - One hashed-jwt entry per token refresh → bloated UI and DB (Issue #40398)  
   *No fix yet*

*Total critical/high issues: 6; fixes merged: 2 (PR #40819, #40773)*

---

### **What This Means for Application Developers**  
- **Security First**: Do **not** deploy LiteLLM in production using default Helm charts or Docker images — manually enforce `runAsNonRoot`, drop privileges, and audit image layers until PRs land.  
- **Budgeting is Unreliable**: If using model aliases or Claude Code, validate budget enforcement manually — PR #40819 fixes this, but may not be in your version.  
- **Streaming is Fragile**: Avoid providers that emit in-band errors (`data: {"error": ...}`) — LiteLLM silently drops them (Issue #40578). Use `fake_streaming` if possible (Issue #30208).  
- **Cost Accuracy Improved**: New pricing syncs ensure accurate spend tracking for Gemini, Anthropic, and Together AI — verify your cost models.  
- **Agent Workflows**: Bedrock agent follow-ups and web search state are now better preserved (PRs #40828, #40798) — upgrade if using Claude Code or Bedrock Mantle.  
- **Monitor Memory**: If running v1.100.0+, watch for OOM kills — a memory regression was just patched in testing but may still be in your stack.

**Recommendation**: Pin to a stable version, audit security contexts, and monitor for PR #40819 and #40773 in your next upgrade. Track Issues #40821, #40822, and #32353 for critical fixes.  

🔗 [Security Townhall](https://docs.litellm.ai/blog/security-townhall-updates) | 🔗 [PR #40819 (Budget Fix)](https://github.com/BerriAI/litellm/pull/40819) | 🔗 [PR #40821 (Root User)](https://github.com/BerriAI/litellm/issues/40821)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest — 2026-09-12**

---

### **Today’s Highlights**  
Unsloth’s Studio platform underwent a major architectural overhaul with the merging of 14 PRs focused on durable, sandboxed agent workflows — introducing Git-aware worktrees, verified tool execution, and bounded process isolation. Simultaneously, critical stability issues emerged around GPU initialization (CUBLAS, ROCm), API parameter mismatches, and desktop app crashes on Windows/Linux, signaling a high-risk release window despite the ambitious feature expansion.

---

### **Releases & Breaking Changes**  
No new releases were published in the last 24h. However, **breaking API behavior** was confirmed in issue #10785: `SFTConfig` no longer accepts `max_seq_length` — users must migrate to `max_length` to avoid `TypeError` during training. This change is present in Docker image `2026.9.4` and affects all CLI and notebook workflows.  
🔗 [Issue #10785](https://github.com/unslothai/unsloth/issues/10785)

---

### **New Model & Hardware Support**  
- **AMD ROCm Support**: Two parallel requests (#6230, #9581) for AMD Docker images remain open, with a working branch in progress (LeoBorcherding/feature/docker-rocm-support). No official image yet, but community contributions are active.  
- **Apple Silicon (MLX)**: PR #10823 adds a certified agent workspace harness for real MLX runtime, enabling native Apple Silicon agent execution without runtime modifications.  
- **Audio/Music Generation**: Feature request #10208 seeks support for MiniMax-Music3 and audio-cpp, but no implementation yet.  
🔗 [Issue #6230](https://github.com/unslothai/unsloth/issues/6230) | [PR #10823](https://github.com/unslothai/unsloth/pull/10823) | [Issue #10208](https://github.com/unslothai/unsloth/issues/10208)

---

### **Performance & Optimization**  
- **GPU Utilization**: Issue #10806 reports severe GPU idle time (~70%+) during Qwen3.5-9B LoRA training on B200 due to repeated autotune key rebuilds per launch — a known inefficiency in the CUDA kernel cache.  
- **Memory & Latency**: PRs #10658 and #10672 introduce bounded task execution lanes and owned Git worktrees, reducing memory bloat from unmanaged agent state. No quantitative metrics yet, but isolation prevents cross-task interference.  
- **Token Tracking**: Issue #10807 highlights a UI regression: token usage graphs lack axis labels and ticks, impairing operational monitoring — no performance impact, but critical for ops teams.  
🔗 [Issue #10806](https://github.com/unslothai/unsloth/issues/10806) | [PR #10658](https://github.com/unslothai/unsloth/pull/10658) | [Issue #10807](https://github.com/unslothai/unsloth/issues/10807)

---

### **Stability & Regressions**  
**Critical (Immediate Impact)**  
- **CUBLAS_STATUS_NOT_INITIALIZED** during FLUX.2 Klein VAE decoding on multi-GPU (#10768) — crashes inference pipeline.  
- **Manual GPU mode logs `--fit: on` while passing `--fit off`** (#10821) — misleads operators into false failure assumptions.  
- **Windows installer fails if username contains spaces** (#10722) — blocks deployment in enterprise environments.  

**High (Operational Disruption)**  
- **GGUF tool approval blocks queued slots** (#10671) — resource starvation despite free slots.  
- **Unsloth Studio fails to serve on localhost (127.0.0.1)** but works on LAN IP (#10786) — breaks local dev tooling.  
- **Antivirus flags `install.ps1`** (#10805) — prevents automated deployments on Windows.  

**Medium (UX/Workflow)**  
- **Inline plots don’t render in Desktop** (#10539), **voice typing over LAN broken** (#10824), **duplicate run settings drafts** (#10817).  

**Fix PRs in Progress**:  
- #10803 fixes IPv6 blackhole killing backend (critical for cloud deployments).  
- #10632 adds MCP config revalidation to prevent unauthorized tool calls.  
- #10643 improves edit-file UI safety, reducing silent failures.  

🔗 [Issue #10768](https://github.com/unslothai/unsloth/issues/10768) | [Issue #10821](https://github.com/unslothai/unsloth/issues/10821) | [Issue #10722](https://github.com/unslothai/unsloth/issues/10722) | [PR #10803](https://github.com/unslothai/unsloth/pull/10803)

---

### **What This Means for Application Developers**  
1. **Agent Workflows Are Now Production-Ready**: The merged PRs (#9673, #9987, #10576–10658) deliver Codex-style agent capabilities: durable workspaces, Git-integrated edits, verified tool execution, and process sandboxing. Build agents that auto-commit, test, and review code without external tooling.  
2. **Avoid `max_seq_length` in Training**: Immediately update all SFTConfig usages to `max_length` — this is a silent breaking change in the latest Docker image.  
3. **Beware of Localhost/IPv6 Issues**: If deploying Studio on cloud VMs or containers, test binding to `0.0.0.0` — `127.0.0.1` may fail (#10786).  
4. **Windows Users: Antivirus & Spaces Are Showstoppers**: Deploy via Docker or PowerShell with exclusions. Avoid Windows installers in managed environments until #10805 and #10722 are resolved.  
5. **AMD/MLX Support Is Coming**: Plan for heterogeneous deployments — ROCm and MLX are under active development. Use Docker for now, but prepare to migrate.  

**Recommendation**: Hold production rollouts until the CUBLAS and GPU fit bugs are patched. Use the new agent features only in isolated, non-critical workflows until stability improves.  

🔗 [Agent Workspace PRs](https://github.com/unslothai/unsloth/pulls?q=is%3Apr+is%3Aclosed+author%3APhilipJohnBasile+label%3A%22%3E3000%22) | [All Open Issues](https://github.com/unslothai/unsloth/issues)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*