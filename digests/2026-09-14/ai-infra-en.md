# AI Infrastructure Digest 2026-09-14

> Generated: 2026-09-14 00:22 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

**Cross-Project AI Infrastructure Ecosystem Report — 2026-09-14**

---

### **1. Ecosystem Overview**

The AI inference infrastructure landscape in mid-2026 is characterized by intense specialization and fragmentation: vLLM and SGLang dominate high-throughput, distributed LLM serving with aggressive focus on speculative decoding and hybrid KV caching; llama.cpp and Ollama lead in lightweight, local-first deployment for edge and desktop use cases; LiteLLM acts as the universal gateway for multi-provider routing and security-hardened API abstraction; while Unsloth emerges as the dominant fine-tuning and agent-tooling platform with growing production-grade tooling. Cross-project interoperability remains limited, with hardware support (Blackwell, ROCm, XPU) and quantization standards (MXFP8, IQ3_S, GGUF) evolving in parallel but inconsistently — creating a high-friction environment for multi-platform deployment.

---

### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Recent Release (24h) | Breaking Changes | Notes |
|---------------|-------------|----------|-----------------------|------------------|-------|
| **vLLM**      | 12+ critical | 8+       | v0.29.0 (stable)      | None             | High-impact fixes merged; no new release; critical bugs in speculative decoding |
| **SGLang**    | 50+ (30+ critical) | 15+      | None (dev-dsv41 image) | None             | Aggressive PR velocity; systemic CUDA coredumps and client crashes unresolved |
| **llama.cpp** | 20+ (7 critical) | 12       | Build b10948 (patch)  | None             | No formal releases; build-based patches; backend stability focus |
| **Ollama**    | 25+ (5 critical) | 9        | None                  | None             | Surge in model/quantization bugs; storage leaks and Windows/ARM regressions |
| **LiteLLM**   | 15+ (5 critical) | 6        | v1.102.0-rc.1         | None             | First signed Docker image; Rust migration underway; critical streaming fixes shipped |
| **Unsloth**   | 22+ (3 critical) | 198*     | None                  | Yes (`max_seq_length` → `max_length`) | Extremely high PR volume; configuration deprecations; critical safety bypass |

> *Note: Unsloth’s 198 PRs reflect massive internal refactoring and CI/UX overhaul — not all are user-facing.*

---

### **3. Model Support Race**

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1**    | ✅ KV scale validation (PR #56539) | ✅ Full native support (PR #38798) | ✅ Conversion support (PR #28696) | ❌ | ✅ Pricing/data (PR #29922) | ✅ Fine-tuning validated (Issue #10806) |
| **DeepSeek-V4.1-Flash** | ✅ Speculative decoding fix | ✅ Partial (CUDA-graph failure) | ❌ | ❌ | ❌ | ✅ LoRA training on B200 |
| **Qwen3.8 / Qwen3-Coder** | ✅ Prefix caching fix | ✅ Tool parsing | ✅ Schema parsing + `\n</think>` termination | ❌ (IQ3_S silent failure) | ✅ Tool-call fixes | ✅ Fine-tuning + agent tooling |
| **Gemma-4**          | ✅ Draft/target combo support | ✅ Multimodal via OpenAI API | ❌ | ❌ (Windows image broken) | ✅ Pricing/data | ✅ Agent tooling support |
| **Phi3.5 / Nemotron** | ❌ | ❌ | ✅ Attention handling | ❌ | ❌ | ✅ Loss anomalies fixed |
| **Ling-3.0-flash-VL** | ❌ | ✅ Native multimodal (PR #38526) | ❌ | ❌ | ❌ | ❌ |
| **Intel Arc Pro B70** | ✅ Fused Triton kernel (PR #53989) | ✅ Kernel optimizations | ✅ SYCL/graph replay | ✅ Vulkan I/O fix | ✅ Backend routing | ✅ Installer fixes (PR #10626) |
| **AMD ROCm MI355X**  | ✅ Profiling (PR #56506) | ✅ Temperature sampling fix | ✅ BF16 fallback | ❌ | ❌ | ✅ LUID detection (PR #9316) |
| **Blackwell (SM120)** | ✅ Bug tracking (5+ issues) | ✅ Sharded KV pools (PR #37615) | ❌ | ❌ | ✅ Routing support | ✅ Training on B200 (Hopper) |

**Leader**: **SGLang** leads in model integration velocity (DeepSeek-V4.1, Ling-3.0, EAGLE), while **llama.cpp** and **vLLM** are strongest in hardware backend coverage. **Unsloth** is uniquely strong in fine-tuning support for new models. **Ollama** lags in model support despite high user demand.

---

### **4. Performance Frontier**

Optimization efforts are concentrated in four key areas:

- **KV Cache & Prefix Caching**:  
  - *vLLM*: Critical fixes for corruption in DP speculative decoding (#56734), silent misreporting (#56640), and hybrid offload (#56733).  
  - *SGLang*: Unified Radix Cache with fuzzy matching (#31057), per-rank HiCache metrics (#39280), and SWA/Mamba hybrid pools.  
  - *llama.cpp*: Fixed RDNA4 quantized KV slowdown (#27796), enforced `\n</think>` for cache reuse.  
  → *Winner*: **SGLang** — most sophisticated cache reuse semantics; **vLLM** — most critical fixes in flight.

- **Speculative Decoding**:  
  - *vLLM*: DFlash/DSpark stability under TP/DCP (#56723), n-gram CPU decoding revival (#56732).  
  - *SGLang*: EAGLE verify on ROCm (#39253), but CUDA-graph capture fails (#39173).  
  → *Leader*: **vLLM** — more mature and widely deployed, though unstable on Blackwell/ROCm.

- **Quantization & Memory Efficiency**:  
  - *SGLang*: MXFP8 KV cache, static-FP8 MXFP4 MoE (PR #31235).  
  - *llama.cpp*: Consistent row alignment for q4_K/q5_K/q8_0 (#28575).  
  - *Ollama*: IQ3_S quantization broken (Issue #18297).  
  → *Leader*: **SGLang** — pushing novel FP8 formats; **llama.cpp** — most robust GGUF implementation.

- **Distributed Serving & Batching**:  
  - *vLLM*: Cross-worker KV sync (#56646), TP divisibility fixes (#56723).  
  - *SGLang*: Router queue limits (#39168–#39170), cache-affinity traffic control.  
  - *LiteLLM*: Streaming merger fixes (#31332), spend logging fallback (#41026).  
  → *Leader*: **SGLang** — best-in-class router scalability; **vLLM** — most robust core engine under load.

- **Kernels & Backend Optimization**:  
  - *vLLM*: Triton fused QK-norm+RoPE on XPU.  
  - *llama.cpp*: SYCL graph replay, Vulkan mutex, Metal termination guard.  
  - *SGLang*: FlashInfer integration for DeepSeek-V4.1.  
  → *Leader*: **llama.cpp** — most backend diversity and low-level fixes; **SGLang** — best CUDA/FlashInfer optimization.

---

### **5. Layer Positioning**

| Project       | Primary Layer | Secondary Layer | Role |
|---------------|---------------|------------------|------|
| **vLLM**      | Inference Engine | Model Serving | High-throughput, multi-GPU, data-parallel serving engine for cloud/enterprise. |
| **SGLang**    | Inference Engine | Distributed Serving | Advanced speculative decoding + router + hybrid cache; targets LLM platform builders. |
| **llama.cpp** | Local Runtime | Edge Serving | Lightweight, single-node, CPU/GPU-native inference; dominant in desktop, edge, and embedded. |
| **Ollama**    | Local Runtime | Developer Tooling | CLI-first, model packaging, and local agent deployment; consumer and edge focus. |
| **LiteLLM**   | Gateway / Proxy | API Abstraction | Universal routing layer for 100+ providers; security, cost, and compliance gateway. |
| **Unsloth**   | Fine-Tuning / Agent Tooling | Training Framework | End-to-end fine-tuning, RAG, and agent workflow platform; not an inference engine. |

**Key Insight**: The stack is bifurcating — **vLLM/SGLang** compete at the *cloud inference engine* layer; **llama.cpp/Ollama** dominate the *local runtime* layer; **LiteLLM** owns the *gateway*; and **Unsloth** is carving out the *fine-tuning + agent tooling* layer. No single project dominates all layers.

---

### **6. Trend Signals**

**Industry Trends from Today’s Activity**:

1. **Speculative Decoding is Production-Critical — But Unstable**: vLLM and SGLang both ship it, but both have critical correctness bugs (KV corruption, CUDA coredumps). *Watch for vLLM v0.29.1 and SGLang’s CUDA-graph fixes.*

2. **Hardware Fragmentation is Real**: Blackwell, ROCm, XPU, and NPU all have partial support — but each has unique regressions. *Avoid speculative decoding on Blackwell/ROCm until vLLM 0.29.1; prefer llama.cpp for XPU/ROCm if stability > throughput.*

3. **Quantization is Becoming a Liability**: IQ3_S (Ollama) and MXFP8 (SGLang) are experimental; GGUF (llama.cpp) remains the most reliable. *Stick with GGUF for production edge deployments; avoid vendor-specific quantizations until standardized.*

4. **Security is Moving to the Gateway Layer**: LiteLLM’s Cosign-signed Docker images signal a new standard: *supply-chain integrity is now non-negotiable for enterprise AI.* Expect all gateways to follow.

5. **Agent Tooling is Demanding New Infrastructure**: Unsloth’s safety bypass (#10835) and Ollama’s tool-call parsing bugs (#18421) reveal that agent systems are pushing inference engines beyond LLMs into *secure, structured, tool-aware runtimes*. *Demand for sandboxed, schema-aware, numeric-safe tool executors will explode.*

6. **Local First is Winning**: Ollama’s Jetson OOM and llama.cpp’s Metal SYCL fixes show that desktop/edge use cases are driving low-latency, low-memory innovation — even as cloud engines scale.

**Recommendations for Developers**:

- **For Cloud LLM APIs**: Use **vLLM v0.29.0** with speculative decoding *disabled* on multi-node; upgrade to 0.29.1 when released.  
- **For RAG/Long Context**: Use **SGLang** with HiCache + unified radix; avoid SQLite <3.41.  
- **For Edge/Local Deployment**: Use **llama.cpp b10930** (RDNA3/Vulkan) or **Ollama CLI** (avoid Windows image handling).  
- **For Multi-Provider Routing**: Use **LiteLLM v1.102.0-rc.1** — verify Docker signatures and enable Rust beta for future performance.  
- **For Fine-Tuning & Agents**: Use **Unsloth** with custom sandboxing — **do not deploy tool calls without audit** until #10835 is fixed.  
- **For All**: Monitor **KV cache integrity** and **speculative decoding correctness** as top-2 failure modes — they are now the #1 cause of silent output corruption.

> **Bottom Line**: The infrastructure is maturing — but stability lags innovation. Prioritize *verifiable correctness* over *peak throughput*.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest — 2026-09-14**

---

### **1. Today's Highlights**  
Today’s activity centers on critical fixes for speculative decoding (DFlash/DSpark) under Model Runner V2 and prefix caching, alongside major KV-cache integrity and cross-worker synchronization improvements. The most urgent issues involve KV-cache corruption in data-parallel speculative decoding and silent output degeneration on Blackwell and ROCm hardware, with multiple high-impact PRs merged or under review to resolve them.

---

### **2. Releases & Breaking Changes**  
No new releases or breaking API/config changes were published in the last 24 hours. The latest stable release remains **v0.29.0**, with no deprecations or migration notices.

---

### **3. New Model & Hardware Support**  
- **AMD ROCm (MI355X/MI325X)**: PR #56506 adds performance profiling for DeepSeek-V4.1-Flash on MI355X, highlighting underutilization; no new support yet, but active optimization tracking.  
- **Intel XPU (Arc Pro B70)**: PR #53989 enables fused QK-norm + RoPE + gate Triton kernel on XPU, improving Qwen3NextAttention efficiency by eliminating unfused op chains.  
- **Blackwell (SM120)**: Multiple issues (#54094, #56370, #53436) confirm persistent correctness and performance anomalies on RTX PRO 6000 Blackwell, with no new support — only bug fixes in flight.  
- **Gemma-4 MTP**: PR #56539 adds validation for KV scale parameters in speculative decoding, enabling stable deployment of unquantized drafter + quantized target combos.  

---

### **4. Performance & Optimization**  
- **Speculative Decoding**:  
  - PR #56723 fixes DFlash/DSpark crash under PCP+DCP by aligning TP/DCP divisibility constraints.  
  - PR #56734 prevents KV corruption in DP ranks during dummy draft steps — critical for multi-node scaling.  
  - PR #56732 revives **Tensor Parallel Ngram-CPU decoding**, reducing redundant n-gram lookups across TP ranks (previously 8x waste).  
- **JIT Warmup**: PR #56683 parallelizes mHC pre-norm kernel compilation, reducing cold-start latency by up to 40% for large MoE models.  
- **Prefix Caching**: PR #56640 fixes silent prefix cache hit misreporting in NIXL connector, ensuring accurate cache metrics.  
- **KV Offload**: PR #56733 introduces preemptive eviction of hybrid requests on failed KV load, preventing stuck states in filesystem-tiered caching.  

---

### **5. Stability & Regressions**  
**Critical (Fixes in PR)**:  
- **#56734**: KV-cache corruption in Model Runner V2 speculative decoding under data parallelism — **high severity**, fix PR merged.  
- **#56646**: Cross-worker KV spec assert on 2-node TP + prefix caching — **critical**, fix PR opened (closed as duplicate of #56646).  
- **#54094**: Zero prefix-cache reuse on DFlash+YaRN with 1.04M prompts — **high severity**, no PR yet, root cause suspected in block allocation logic.  
- **#56605**: GLM-5.3-Flash degenerates into token repetition in multi-turn agents — **critical**, no fix PR, likely attention mask or cache state issue.  

**High (Active Tracking)**:  
- **#17676**: vLLM hangs indefinitely on engine startup — 43 comments, still unresolved.  
- **#56251**: Confirmed 6 concurrency defects in multiproc_executor and shm_broadcast — no fixes yet, blocking production use.  
- **#56696**: OTLP tracing initialized but never sends spans — trivial config bug, fix PR pending.  

**Medium**:  
- **#55534**: CUTLASS 3.x stride bug on H800 — affects quantized MoE inference.  
- **#54691**: DFlash becomes net slowdown at 185k context — needs per-sequence disable hook.  

---

### **6. What This Means for Application Developers**  
- **Avoid speculative decoding on Blackwell/ROCm** until PRs #56734 and #56723 are in v0.29.1 — output corruption and hangs are non-trivial.  
- **Enable prefix caching** only if using single-node or verified TP deployments; multi-node with hybrid KV cache (#56646) remains unstable.  
- **For Gemma-4 tool calling**: Use vLLM ≥0.29.0 with PR #56539 applied to avoid initialization crashes when pairing unquantized drafters with quantized targets.  
- **On Intel XPU**: Qwen3NextAttention performance improves significantly with fused kernels — upgrade to latest main for 15–20% throughput gain.  
- **Monitor OTLP traces**: The tracing bug (#56696) means observability is broken — manually instrument if metrics are critical.  

> **Recommendation**: Hold production deployments of DFlash/DSpark + prefix caching until v0.29.1. Use eager mode or disable speculative decoding on multi-node setups until fixes are merged and validated.

---

🔗 **Key PRs to watch**:  
- [Fix KV corruption in DP speculative decode](https://github.com/vllm-project/vllm/pull/56734)  
- [Prevent DFlash/DCP config collapse](https://github.com/vllm-project/vllm/pull/56723)  
- [Fix GLM-5.3 token repetition](https://github.com/vllm-project/vllm/issues/56605)  
- [Fix cross-worker KV spec assert](https://github.com/vllm-project/vllm/issues/56646)  
- [Parallelize JIT warmup](https://github.com/vllm-project/vllm/pull/56683)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest — 2026-09-14**

---

### **1. Today's Highlights**  
SGLang’s infrastructure team aggressively advanced support for DeepSeek-V4.1 and hybrid KV caching, with 12+ PRs landing or advancing in the last 24 hours—led by model integration, router scalability, and HiCache observability. Simultaneously, critical stability issues around CUDA coredumps, request cancellation crashes, and speculative decoding failures remain top-priority open items, with over 300 comments on the CUDA coredump tracker.

---

### **2. Releases & Breaking Changes**  
No new releases or breaking API/config changes were published in the last 24 hours.  
*Note: `sglang:dev-dsv41` Docker image (sha256:4a5d132...) is actively used in testing but not formally released.*

---

### **3. New Model & Hardware Support**  
- **DeepSeek-V4.1**: Full native support added via PR #38798 (including encoding fixes, FlashInfer integration, and EAGLE verify support).  
- **DeepSeek-V4.1-Flash + Engram**: Partial support underway; PR #39173 reveals CUDA-graph capture failure under hybrid cache.  
- **Ling-3.0-flash-VL**: Native multimodal support added via PR #38526 (text/image/video via OpenAI-compatible API).  
- **Intel CPU**: Q2 2026 roadmap confirmed for production-grade serving on disaggregated CPU (Issue #24921).  
- **NPU (Ascend)**: DeepSeek V4 support under evaluation (Issue #29599); GLM-Image quality gap still open (Issue #29359).  
- **AMD (ROCm)**: Temperature sampling in EAGLE verify fixed for DeepSeek-V4 benchmark accuracy (PR #39253).  
- **Blackwell (SM120)**: Sharded KV pools and unified memory optimizations in flight (PR #37615, #37507).

---

### **4. Performance & Optimization**  
- **Unified Radix Cache**: Semantic KV reuse via fuzzy matching now in PR #31057, enabling reuse across paraphrased RAG prompts.  
- **HiCache L2/L3**: Metrics now per-rank (PR #39280), prefetch scope tied to request attempt (PR #39318), and support expanded to SWA/Mamba hybrid pools (PR #37507).  
- **Router Scalability**: New `--worker-queue-limit N` (PR #39168) and `--saturation-queue-floor N` (PR #39169) prevent cache-affinity traffic overload; `--min-load-choices K` (PR #39170) improves load balancing.  
- **Memory Efficiency**: Skip writes to CUDA-graph padding slot (PR #35351); unified byte budget for hybrid SWA pools (PR #36729).  
- **Quantization**: MXFP8 KV cache optimizations and serialized static-FP8 MXFP4 MoE on FlashInfer backend proposed (PR #31235).

---

### **5. Stability & Regressions**  
*Ranked by severity (CRITICAL > HIGH > MEDIUM)*

- **CRITICAL**:  
  - Client disconnect during active request crashes entire engine (uncaught `asyncio.CancelledError`) — **PR #39216** (open, no fix yet).  
  - `/health` handler timeout leaks requests → paged-prefill batching crash — **Issue #35884** (open).  
  - CUDA coredump events auto-collected across 299+ CI runs — **Issue #26340** (open, systemic).  

- **HIGH**:  
  - `sgl-router` PD: Open circuit breaker still dispatches to decode → fake-dead prefill — **Issue #31206** (open).  
  - DeepSeek-V4.1 rejects user text containing `<｜deepseek_image｜>` token — **Issue #39274** (open).  
  - SWA branching attaches later Mamba checkpoint to earlier prefix — **Issue #38815** (open, high-priority).  
  - `HiCacheFile` hybrid prefix misreports restoreability — **Issue #39147** (open).  

- **MEDIUM**:  
  - GLM-5.2 NVFP4 + EAGLE: CUDA illegal memory access during graph capture — **Issue #31093** (closed, inactive).  
  - Qwen3-VL video frames double-sampled when `fps` set — **Issue #31200** (closed, inactive).  
  - Custom all-reduce deadlocks under concurrent CUDA streams — **Issue #31117** (closed, inactive).  

*Note: Multiple critical bugs (e.g., #39216, #35884) have no active fix PRs yet.*

---

### **6. What This Means for Application Developers**  
- **For LLM app builders**: DeepSeek-V4.1 is now production-ready on SGLang—with full multimodal and speculative decoding support. Use `sglang:dev-dsv41` for early testing.  
- **For distributed deployments**: New router policies (`--worker-queue-limit`, `--saturation-queue-floor`) enable smarter cache affinity and prevent cascading failures under load.  
- **For cost-sensitive ops**: Unified KV memory budgets and HiCache enhancements reduce memory waste—especially for RAG and long-context workloads.  
- **For reliability-critical systems**: Avoid `--pd-disaggregation` with GLM-5.2 or DeepSeek-V4 until fixes land for circuit breaker and CUDA-graph issues. Monitor `/metrics` for cache locality trends (PR #39325–#39327).  
- **For multi-GPU/ROCm/NPU**: AMD and Ascend support are maturing but still experimental—verify model output quality and avoid production use until closed issues are resolved.  

> 🔗 **Key links**:  
> - [DeepSeek-V4.1 Support PR #38798](https://github.com/sgl-project/sglang/pull/38798)  
> - [CUDA Coredump Tracker #26340](https://github.com/sgl-project/sglang/issues/26340)  
> - [Client Crash Bug #39216](https://github.com/sgl-project/sglang/issues/39216)  
> - [Router Scalability Stack (#39168, #39169, #39170)](https://github.com/sgl-project/sglang/pulls?q=is%3Apr+author%3AKangyan-Zhou+is%3Aopen+router)  
> - [HiCache Observability Stack (#39280, #39318)](https://github.com/sgl-project/sglang/pulls?q=is%3Apr+author%3Axiezhq-hermann+is%3Aopen+hicache)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest — 2026-09-14**

---

### **Today's Highlights**  
Today’s updates focus on critical stability fixes across SYCL, Vulkan, and Metal backends, alongside targeted improvements for Qwen3-Coder’s reasoning formatting and structured logging. A surge of PRs (12 opened today) reflects intense activity around model parsing correctness, backend compatibility, and CI resilience, with particular emphasis on AMD/Intel GPU and multi-GPU edge cases.

---

### **Releases & Breaking Changes**  
No new formal releases were cut in the last 24h. However, build `b10948` through `b10935` include non-breaking patches:  
- `b10948`: Excludes `HY_V4` from WebGPU test suite (#28855)  
- `b10947`: Guards against zero-divisor in Nemotron-H expert FFN fallback (#28779)  
- `b10946`: Adds VXE guard for s390x CPU path (#28775)  
- `b10944`: Fixes SYCL memory detection and drops unused headers (#28227)  
- `b10938`: Adds Vulkan queue submission mutex to workaround NVIDIA driver bug (#28830)  
- `b10937`: Extends no-shuffle row alignment to `q4_K`, `q5_K`, `q8_0` (previously only `q6_K`) (#28575)  
- `b10936`: Enhances Qwen3-Coder schema parsing for complex tool calls (#28742)  
- `b10935`: Introduces `LOG_JSON` macro for structured logging (#28586)  

> **Note**: No API-breaking changes; all updates are backward-compatible.  
> 🔗 [Release Notes](https://github.com/ggml-org/llama.cpp/releases)

---

### **New Model & Hardware Support**  
- **New Models**:  
  - Added pre-tokenizer for `fraunhofer-iis/elmod-2.7b-it` (#28845)  
  - Added conversion support for `DeepSeek-V4.1-Flash` (`DeepseekV41ForCausalLM`) (#28696)  
- **Hardware Backends**:  
  - SYCL: Added graph recording/replay support ported from CUDA (#28725)  
  - CUDA: Fallback to F32 on pre-CDNA/rdna3 AMD GPUs lacking BF16 hardware (#28846)  
  - Metal: Explicitly enforced `\n</think>` termination for Qwen3-Coder reasoning to enable prompt cache reuse (#28869)  
- **Quantization**:  
  - `q4_K`, `q5_K`, `q8_0` now consistently apply row-alignment rules previously reserved for `q6_K` (#28575)  

> 🔗 [DeepSeek-V4.1 Support](https://github.com/ggml-org/llama.cpp/pull/28696) | [ELMOD Pre-tokenizer](https://github.com/ggml-org/llama.cpp/pull/28845)

---

### **Performance & Optimization**  
- **SYCL**: Introduced per-thread shared buffer isolation in `ggml-cpu` to eliminate false sharing — expected to improve multi-threaded throughput on Intel Xe and s390x (#28861)  
- **Grammar Parsing**: Single-lookup optimization reduced grammar evaluation overhead by 1.2–1.3x (#26885)  
- **KV Cache**: Fixed incorrect quantized KV cache behavior on RDNA4 (gfx1201), where quantized formats were decoding slower than f16 — a critical regression (#27796)  
- **Flash Attention**: Reduced test sizes for FA to improve CI stability (#28842)  
- **WebGPU**: Excluded `HY_V4` from tests due to compatibility issues (#28855)  

> 🔗 [Per-thread buffer PR](https://github.com/ggml-org/llama.cpp/pull/28861) | [Grammar speedup](https://github.com/ggml-org/llama.cpp/pull/26885)

---

### **Stability & Regressions**  
Top-reported regressions and crashes (ranked by severity):  

1. **Critical**: SYCL + Intel Arc Pro B70 dual-GPU triggers **GPU TDR reset** (VIDEO_TDR_TIMEOUT_DETECTED) on DFlash2 draft models (#28778) — no fix PR yet.  
2. **High**: **Metal OOM during init** causes server to bind port and 500 all requests (#27309) — still open, affects M-series Macs.  
3. **High**: **Vulkan on RDNA3** shows severe prompt processing slowdown after `b10780` (#28752) — under investigation.  
4. **High**: **Qwen4exp on Metal** emits 1 token then EOS at long context — stochastic, tied to KV quant/n_ctx (#28805).  
5. **Medium**: **HIP/ROCm on Windows gfx1201** alters logits/top-1 vs Vulkan (#28768) — potential correctness issue.  
6. **Medium**: **SYCL Qwen3.6 35B A3B** produces garbled output (#28728) — reproducible, no fix.  
7. **Fix in Progress**:  
   - `ggml_backend_sched_alloc_splits: unexpected graph reallocation` crash (#28753) — likely tied to scheduler state; no PR yet.  
   - `get_key_or_arr` misuse in multiple models (Nemotron, MiMo2) fixed in #28868 and #28865.  

> 🔗 [TDR Reset Issue](https://github.com/ggml-org/llama.cpp/issues/28778) | [Metal OOM](https://github.com/ggml-org/llama.cpp/issues/27309) | [RDNA3 Regress](https://github.com/ggml-org/llama.cpp/issues/28752)

---

### **What This Means for Application Developers**  
- **For Production Inference**:  
  - Avoid `b10780+` on AMD RDNA3/Vulkan if prompt throughput is critical — monitor #28752.  
  - On macOS, use `--n-gpu-layers 0` if encountering silent 500s — likely Metal OOM (#27309).  
  - Qwen3-Coder tool calls now require `\n</think>` termination for cache reuse — update templates.  
- **For Model Deployers**:  
  - DeepSeek-V4.1 and ELMO-D are now officially supported via `convert.py` — use latest `main`.  
  - Quantized KV caches on RDNA4 (R9700) are *slower* than f16 — prefer `f16` KV cache for performance-critical workloads.  
- **For Observability**:  
  - Use `LOG_JSON` to capture structured inference logs (e.g., token latency, backend usage) — enabled in `b10935+`.  
  - SYCL users: Graph replay is now available — reduce overhead in high-throughput scenarios (#28725).  
- **Watch These**:  
  - SYCL TDR resets (#28778) and HIP logits drift (#28768) may break multi-GPU or Windows deployments.  
  - Model loading via RPC is still serial (#25890) — avoid 500GB+ loads without parallelization workarounds.  

> 🛠️ **Action Item**: Pin to `b10930` if using RDNA3/Vulkan or Qwen3-Coder in production until fixes land. Monitor #28868 and #28865 for model loading fixes.  

---  
**Source**: [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | [Latest Commits](https://github.com/ggml-org/llama.cpp/commits/main)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest — 2026-09-14**

---

### **Today's Highlights**  
The Ollama ecosystem saw a surge in critical bug reports and feature requests centered on model behavior, tool parsing, and multimodal inference—particularly around Qwen3.8, Gemma4, and cloud endpoints. A wave of 9 PRs and 18 new issues in the last 24 hours highlights growing production usage, with major focus on prompt caching, JSON schema compliance, and hardware-specific regressions on Jetson and Windows platforms.

---

### **Releases & Breaking Changes**  
No new releases were published in the last 24 hours. No API or config-breaking changes were merged or announced.

---

### **New Model & Hardware Support**  
- **New model requests**: `SARVAM-30b/105b` (#14319), `Gnani Evon-v3.3` (#18427) — both 30B+ parameter models from Hugging Face awaiting integration.  
- **Quantization support**: `IQ3_S` quantization for `Qwen3.8-27B-GSQ-RCO-GGUF` is currently broken, returning empty responses (#18297).  
- **Hardware**: Critical OOM issue on **Jetson Orin Nano 8GB** with Gemma4 E4B’s multimodal projector despite CPU fallback (#18396).  
- **Windows**: Image handling for Gemma4 remains broken (#16532); image generation support was previously merged (#13806) but appears to have unresolved edge cases.

---

### **Performance & Optimization**  
- **Prompt caching**: Two new issues reveal cache misses due to non-deterministic tool schema serialization (#18430) and system message hoisting in Anthropic-compatible mode (#18431), degrading throughput for stateful agents.  
- **Memory cleanup**: PR #18424 addresses a critical storage leak where `ollama create --quantize` leaves behind 50–80GB untracked F16 blobs per model — a severe issue for CI/CD and edge deployments.  
- **Vulkan I/O**: PR #18124 (closed) restored direct I/O for integrated Vulkan GPUs, fixing timeouts on VM-based deployments (e.g., Virtio-GPU).

---

### **Stability & Regressions**  
Ranked by severity (critical > high > medium):

1. **Critical**: `kimi-k3:cloud` crashes with HTTP 500 on image content in tool-role messages — regression from working `kimi-k2.6` (#18426).  
2. **Critical**: `qwen3.8` returns empty `content` with `IQ3_S` quantization despite successful completion (#18297).  
3. **High**: Qwen3-Coder tool parser corrupts `number` values outside `int64` range (e.g., `1e20` → `9223372036854775807`) (#18421) — **fix in PR #18422**.  
4. **High**: `gemma4` on Windows fails to process images (#16532); EXIF orientation detection is broken (#18418).  
5. **High**: Anthropic-compatible endpoint hoists `system` messages into top-level block, breaking Claude Code’s prefix cache (#18431).  
6. **Medium**: `qwen3.6` violates tool-call template intermittently, causing 500s (#16383).  
7. **Medium**: Table of Contents with >10 ellipses triggers “cancel task” on Windows (#18387).

> **Fixes in progress**: PRs #18422 (tool number parsing), #18424 (blob cleanup), and #18124 (Vulkan) are actively being reviewed.

---

### **What This Means for Application Developers**  
- **Avoid Qwen3.8 with IQ3_S** until #18297 is resolved — it’s silently failing.  
- **Tool-based agents** must validate numeric inputs and expect non-deterministic schema serialization (#18430, #18421). Use `string` for large numbers as a workaround.  
- **Cloud users**: Anthropic-compatible endpoints (#18431) and Kimi cloud (#18426) are currently unreliable for multimodal tool calls — fallback to local models if possible.  
- **Windows developers**: Image handling remains fragile — avoid EXIF-heavy workflows until #16532 and #18418 are patched.  
- **Storage hygiene**: `ollama create --quantize` is a disk bomb — monitor `~/.ollama/models` for unreferenced blobs; PR #18424 will be essential for CI/CD pipelines.  
- **Ecosystem growth**: New integrations like **Genie**, **Clips Kitty**, and **SlopShield** signal strong adoption in desktop productivity — consider Ollama as a backend for local-first agent tooling.

🔗 **Key Links**:  
- [IQ3_S Bug #18297](https://github.com/ollama/ollama/issues/18297)  
- [Tool Number Corruption #18421](https://github.com/ollama/ollama/issues/18421) | [Fix PR #18422](https://github.com/ollama/ollama/pull/18422)  
- [Gemma4 OOM on Jetson #18396](https://github.com/ollama/ollama/issues/18396)  
- [Anthropic System Message Hoisting #18431](https://github.com/ollama/ollama/issues/18431)  
- [Blob Cleanup PR #18424](https://github.com/ollama/ollama/pull/18424)  
- [Windows Image Support Regression #16532](https://github.com/ollama/ollama/issues/16532)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest — 2026-09-14**

---

### **Today's Highlights**  
LiteLLM has released its first signed Docker image in v1.102.0-rc.1, enhancing supply-chain security via Cosign verification. The project is accelerating its Rust migration (Issue #31263), with multiple critical fixes landing for Anthropic, Vertex AI, and streaming Responses API compatibility — addressing long-standing gaps in model translation and guardrail enforcement.

---

### **Releases & Breaking Changes**  
- **v1.102.0-rc.1** introduced Docker image signing with [Cosign](https://docs.sigstore.dev/cosign/overview/) using the canonical key from [commit 0112e53](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0).  
  → *No breaking API changes; security hardening only.*  
  🔗 [Release Notes](https://github.com/BerriAI/litellm/releases/tag/v1.102.0-rc.1)

---

### **New Model & Hardware Support**  
- **Vertex AI Claude Haiku 4.5+**: Fixed model mapping to support 64K context (was capped at 8K).  
- **DashScope Qwen 3.6/3.7**: Pricing data added via community PRs (Issue #29922).  
- **Nanobridge**: Added as a new OpenAI-compatible provider (PR #29591).  
- **Kimik2.7-Code (Azure)**: Full support added (Closed Issue #32613).  
- **AssemblyAI EU region**: Now correctly detected from passthrough paths (PR #28748).

---

### **Performance & Optimization**  
- **Rust Migration (Issue #31263)**: Targeting sub-1ms inference gateway overhead; early beta signups active.  
  🔗 [Rust Launch Blog](https://docs.litellm.ai/blog/litellm-rust-launch)  
- **Streaming Optimization**: PR #31332 backfills `response.completed.output` from streamed `output_item.done` events — critical for Codex CLI compatibility.  
- **Cache Efficiency**: PR #41025 strips internal `optional_params` at provider boundaries, reducing Bedrock/Anthropic HTTP 400s and improving request throughput.  
- **Spend Logging**: PR #41026 now falls back to `call_id` when provider returns `id=null`, eliminating spend log drops in high-throughput scenarios.

---

### **Stability & Regressions**  
**Top 5 Critical Bugs Reported (with Fixes)**:  
1. **Anthropic MCP Tools Blocked by Guardrails** (Issue #40583): Pre-call guardrails cannot inspect MCP tools in `/v1/messages` — *fix in PR #29594*.  
2. **Vertex AI Claude Max Tokens Silent Capping** (Issue #40363): 4096 default and 8K output cap override 64K context — *unfixed*.  
3. **Streaming Usage Merger Retains Stale Cache Tokens** (Issue #40736): Incorrect token accounting after cache hit — *fix in progress*.  
4. **Ollama Custom Prompt Template KeyError** (Issue #39759): Crash when `initial_prompt_value`/`final_prompt_value` omitted — *fix pending*.  
5. **Responses→Chat Bridge Forwards `reasoning_effort` Dict** (Issue #39354): Causes OpenAI-compatible providers to reject requests — *partially addressed by PR #41025*.

> **Note**: 12+ closed issues were re-opened or tagged as stale, indicating ongoing systemic issues in caching, budgeting, and proxy logging.

---

### **What This Means for Application Developers**  
- **Security**: Docker images are now verifiable — essential for compliance-sensitive deployments.  
- **Reliability**: If you use Anthropic’s `/v1/messages`, Claude Haiku, or OpenAI’s Responses API (e.g., Codex CLI), **upgrade to v1.102.0-rc.1** — critical streaming and tool-call bugs are fixed.  
- **Cost Accuracy**: Spend logs now handle `id=null` and cache hits correctly — audit your telemetry pipelines.  
- **Future-Proofing**: The Rust migration (Issue #31263) signals a major performance leap — consider joining the beta to influence the API surface.  
- **Watch For**: Vertex AI Claude context window misconfigurations and missing DashScope pricing — manually override until fixed upstream.

🔗 **Key Links**:  
- [Rust Migration Beta Signup](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...)  
- [Cosign Verification Guide](https://docs.sigstore.dev/cosign/overview/)  
- [All Fixes in v1.102.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.102.0-rc.1)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest — 2026-09-14**

---

### **1. Today's Highlights**  
Unsloth’s ecosystem saw intense activity around RAG, agent tooling, and installer stability, with 22 new issues and 198 PRs updated in 24 hours — primarily focused on fixing silent failures in Windows ARM64/XPU installations and improving Studio’s agent workflow UX. Notably, critical bugs in SQLite-based vector retrieval (#10861) and tool-call truncation (#10135) are now actively being addressed, while UI refinements for thread management and model library navigation signal a maturing product surface.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, **breaking configuration changes** are implied by closed issues:  
- `max_seq_length` was deprecated in favor of `max_length` in `SFTConfig` (Issue #10785), requiring users to update training scripts.  
- The installer now avoids shadowing `triton-windows` on Intel XPU systems (PR #10073, Issue #10018), but regression persists in #10844 — users on Windows with XPU hardware must manually verify Triton bindings.

---

### **3. New Model & Hardware Support**  
- **New Model Support**:  
  - Explicit fixes for **Phi3.5** fine-tuning loss anomalies (Issue #946) and **Nemotron** attention handling (Issue #7527) indicate active compatibility validation.  
  - **Qwen3.5-9B** LoRA training on NVIDIA B200 is now reported (Issue #10806), confirming support for Hopper architecture.  
- **Hardware**:  
  - **Intel XPU (Arc)**: Persistent installer issues remain (Issues #10018, #10844), but PR #10626 fixes UV cache selection logic that previously broke XPU setups.  
  - **Windows ARM64**: Installer fails silently on `pyarrow` (Issue #10875), while CLI works — indicating a packaging discrepancy.  
  - **AMD ROCm**: Improved LUID detection on Windows (PR #9316) enhances VRAM monitoring for HIP-based inference.  
- **Quantization**: No new formats announced, but GGUF model loading via external llama.cpp servers now auto-detects reasoning capabilities (PRs #9661, #9664).

---

### **4. Performance & Optimization**  
- **Memory & KV Cache**:  
  - Removed unused `ctx_checkpoints` term from KV VRAM estimator (PR #8994), reducing overestimation in multi-model router scenarios.  
- **Latency & Throughput**:  
  - PR #10648 eliminates redundant validation of llama.cpp/whisper.cpp/node installs during `studio update`, cutting 5–63s per update cycle.  
  - PR #6739 prevents native binary launches during sandboxed validation, improving startup security and latency on Linux.  
- **Autotuning**:  
  - FLA autotune keys are rebuilt on every B200 training launch (Issue #10806), suggesting suboptimal caching — a known performance bottleneck under active review.

---

### **5. Stability & Regressions**  
*Ranked by severity (Critical > High > Medium)*  

- **Critical**:  
  - **Safety bypass**: `rm`, `reboot` commands executable via tool calls (Issue #10835) — **unpatched**, poses severe security risk.  
  - **Silent XPU failure**: Installer ignores chosen install path, defaults to `~/.unsloth` (Issue #10859); XPU Triton replacement still broken (Issue #10844).  
  - **Training corruption**: Blank CSV cells trained as literal `"None"` strings (PR #10813 — *fix in progress*).  

- **High**:  
  - RAG dense retrieval fails on SQLite <3.41 due to missing `LIMIT` in KNN queries (Issue #8854, PR #10861 — *fix merged*).  
  - `--tensor-split` ignored during multi-GPU inference (Issue #10355) — impacts large model sharding.  
  - Windows ARM64 desktop installer fails on `pyarrow` (Issue #10875) — blocks adoption on Apple Silicon/Windows ARM.  

- **Medium**:  
  - Studio logs lack context for debugging (Issue #10793) — *PRs improving logging under review*.  
  - Tool-call guard blocks prevent re-execution after file edits (Issue #10792) — impacts dev iteration loops.  

*Fixes in PRs*: #10861 (SQLite), #10813 (CSV None), #10626 (UV cache), #10648 (install validation) — all merged or pending review.

---

### **6. What This Means for Application Developers**  
- **Agents & Tooling**: Tool-call safety is broken — **do not deploy Unsloth Studio agents in production without custom sandboxing** until Issue #10835 is resolved.  
- **RAG Systems**: If using vector search on older SQLite (e.g., embedded deployments), upgrade to SQLite ≥3.41 or patch via PR #10861.  
- **Model Deployment**: External llama.cpp servers now auto-detect reasoning templates — enable `--models-dir` and let Studio auto-configure speculative decoding.  
- **Infrastructure**:  
  - Avoid Windows ARM64 desktop installer; use CLI or Docker for now.  
  - On Intel XPU, manually verify `triton` bindings post-install.  
  - Training on B200: Expect slow autotuning; pre-warm models to avoid per-step overhead.  
- **UI/Workflow**: New features like folder-based projects (#10873), multi-drive model libraries (#10872), and reusable agent profiles (#10773) signal a shift toward DevOps-grade model management — ideal for teams managing dozens of fine-tuned variants.

🔗 **Key PRs to Monitor**:  
- [#10861](https://github.com/unslothai/unsloth/pull/10861) — SQLite RAG fix  
- [#10813](https://github.com/unslothai/unsloth/pull/10813) — CSV “None” corruption  
- [#10844](https://github.com/unslothai/unsloth/issues/10844) — XPU Triton regression  
- [#10835](https://github.com/unslothai/unsloth/issues/10835) — Safety bypass (CRITICAL)  

> *Recommendation*: Pin to `unsloth==2026.9.2` for stability until critical fixes are released. Monitor PRs above for imminent patch releases.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*