# AI Infrastructure Digest 2026-09-15

> Generated: 2026-09-15 00:51 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

**Cross-Project AI Infrastructure Ecosystem Report — 2026-09-15**

---

### **1. Ecosystem Overview**

The AI inference infrastructure landscape in Q3 2026 is defined by intense specialization and fragmentation: high-performance serving engines (vLLM, SGLang) battle for dominance in cloud-scale LLM deployment, while lightweight runtimes (llama.cpp, Ollama) push into edge and hybrid environments. Gateways like LiteLLM consolidate multi-provider access with enterprise-grade observability, and fine-tuning tools like Unsloth focus on developer UX and local tooling. The unifying theme is **production-grade reliability under scale** — with critical fixes dominating activity over new features, as MoE, long-context agents, and multi-GPU heterogeneity expose systemic instability in KV caching, quantization, and speculative decoding.

---

### **2. Activity Comparison**

| Project       | Open Issues | Open PRs | Recent Release       | Release Type       |
|---------------|-------------|----------|----------------------|--------------------|
| **vLLM**      | 42          | 18       | v0.29.0 (stable)     | Maintenance        |
| **SGLang**    | 58          | 21       | —                    | Nightly-only       |
| **llama.cpp** | 37          | 24       | **v0.4.1** (2026-09-15) | **Breaking**       |
| **Ollama**    | 49          | 19       | **v0.34.1-rc1**      | Release Candidate  |
| **LiteLLM**   | 31          | 12       | v1.87.1              | Maintenance        |
| **Unsloth**   | 45          | 452*     | —                    | CI/PR Surge        |

> *Note: Unsloth’s 452 PRs reflect a CI/infra overhaul and sandbox security audit — not feature development. Most are non-functional or automated.*

---

### **3. Model Support Race**

| Project       | New Model Support                                                                 | Architecture/Quantization Advances                                                                 |
|---------------|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **vLLM**      | DeepSeek-V4.1-Flash, Nemotron-3, MiniMax-M3, GLM-5.3-Flash                        | **SWA bounded replay**, **MXFP8/NVFP4 KV cache**, **MoE offloading**, **FlashMLA V4.1 kernels**     |
| **SGLang**    | SenseNova-U1/U1.5, Qwen3.8-Flash-Next-FP8                                         | **FP8 KV cache (Hopper)**, **NVFP4 router weights**, **MXFP4 on AMD**, **DCP for distributed KV** |
| **llama.cpp** | Maple 20B-A1B, Tencent Hy 4, Spark2.5, **SenseNova U1 (multimodal)**              | **FP32 fallback on Ampere/RDNA3**, **GGUF full support**, **SYCL radix TOP_K**                     |
| **Ollama**    | **Q2_0 GGUF** support, Gemma 4 E4B (edge testing)                                 | **MLX prefix cache eviction**, **Q2_0 tensor loading** (ultra-low-bit edge)                        |
| **LiteLLM**   | Gemma 4 via Bedrock `mantle`, glm-5p3-fast on Fireworks.ai                        | **Embedding modality billing** (audio/image/text), **Vertex AI pricing updates**                  |
| **Unsloth**   | Local model discovery: Ollama, LM Studio, Hermes                                   | **GGUF via llama-server**, **MLX token stream fixes**                                              |

**Leader**: **vLLM** and **SGLang** are tied for architectural leadership — both pushing cutting-edge **MoE + KV cache optimizations** for 100B+ models. **llama.cpp** leads in **hardware breadth** (SYCL, HIP, Vulkan, macOS) and **edge quantization**. **Ollama** leads in **developer ergonomics for local inference**. **LiteLLM** leads in **multi-cloud model gateway** coverage.

---

### **4. Performance Frontier**

Optimization efforts are concentrated across five critical axes:

- **KV Cache**:  
  - *vLLM*: **SWA bounded replay** (40% overhead reduction), **filesystem tiering with admission policies**.  
  - *SGLang*: **Distributed KVCache (#21846)** and **HiCache compacting** for agentic workflows.  
  - *llama.cpp*: **LLAMA_STATE_SEQ_FLAGS_PARTIAL_ONLY** honoring, **SYCL graph replay**.  
- **Quantization**:  
  - *vLLM/SGLang*: **NVFP4/MXFP8 KV cache** on Blackwell/Hopper; **FP4 router weights**.  
  - *Ollama*: **Q2_0 GGUF** support — first mainstream runtime to enable sub-1B model inference on edge.  
- **Batching & Speculative Decoding**:  
  - *vLLM*: **DFlash instability at >100k context**, **SWA** as preferred alternative.  
  - *SGLang*: **Speculative decoding + pipeline parallelism now compatible**.  
- **Distributed Serving**:  
  - *SGLang*: **DCP + fi_a2a** as default comm backend; **hybrid MoE state corruption** being resolved.  
  - *vLLM*: **MoE expert offloading via LFRU** enables 100B+ models on <24GB GPUs.  
- **Kernels**:  
  - *vLLM*: FlashMLA V4.1 fused kernels for DeepSeek-V4.1.  
  - *llama.cpp*: CUTLASS 4.6 epilogues (SGLang), **CUDA swizzling**, **SYCL coalesced softmax**.  

**Dominant frontier**: **KV cache efficiency** (especially for long-context agents) and **low-bit quantization of KV states** — not just weights.

---

### **5. Layer Positioning**

| Project       | Primary Layer              | Secondary Layer             | Differentiator |
|---------------|----------------------------|-----------------------------|----------------|
| **vLLM**      | **High-throughput inference engine** | Model serving (API)         | Optimized for **cloud-scale MoE + long-context**; kernel-level dominance. |
| **SGLang**    | **Inference engine**       | Distributed KV serving      | **Agentic-first** design; DCP and distributed cache as core primitives. |
| **llama.cpp** | **Local runtime / edge**   | Model serving (via server)  | **Hardware-agnostic** (SYCL, HIP, Vulkan, Metal); **GGUF-native**; no cloud dependencies. |
| **Ollama**    | **Local runtime / edge**   | Gateway (API proxy)         | **Developer-first UX**; seamless model loading, MLX integration, desktop app. |
| **LiteLLM**   | **Multi-cloud gateway**    | Observability / billing     | **API abstraction + cost control**; centralizes rate limits, spend tracking, and model routing. |
| **Unsloth**   | **Fine-tuning + local tooling** | Local inference wrapper   | **Developer toolchain** (chat replay, model catalog, sandboxing); not a production engine. |

**Key insight**: vLLM and SGLang compete at the **cloud inference layer**; llama.cpp and Ollama dominate the **edge/local layer**; LiteLLM owns the **gateway/abstraction layer**; Unsloth operates in the **training/dev tooling layer**.

---

### **6. Trend Signals**

**Emerging Industry Trends**:

1. **KV Cache is the New Bottleneck**: Beyond model weights, **KV storage efficiency** (compression, offloading, distribution) is now the primary performance lever — especially for agents with >100k context. Projects without advanced KV management (e.g., early LiteLLM, Unsloth) are becoming liabilities.
2. **MoE Is Mainstream, But Unstable**: All major engines now support MoE, but **router weight quantization (NVFP4)** and **expert offloading** remain error-prone. **H20/Blackwell MoE crashes** are widespread — expect vendor-specific patches to proliferate.
3. **Edge Inference Is Quantization-Driven**: **Q2_0 GGUF** (Ollama) and **NVFP4 KV** (vLLM/SGLang) signal a shift: edge models will be **ultra-low-bit weights + ultra-low-bit KV**. FP8/FP4 KV is no longer experimental — it’s production-critical.
4. **Agent Workloads Break Traditional Serving**: Long-context, tool-call-heavy, stateful workflows expose **silent bugs** in token repetition (GLM-5.3), **tool-call parsing** (Ollama), and **system message hoisting** (Ollama). Developers must now validate **output structure**, not just latency.
5. **Observability Is a Competitive Moat**: LiteLLM’s **cost accounting fixes**, **gateway memory**, and **admin UI scalability** show that **billing accuracy** and **debuggability** are now as important as throughput. vLLM’s telemetry and SGLang’s CI tracking are following suit.

**Recommendations for Developers**:

- **For cloud agents**: Use **vLLM + SWA bounded replay** for long-context; **avoid DFlash >100k**; enable **DRY sampling** when released.  
- **For edge/MLX**: Use **Ollama v0.34.1-rc1** or **llama.cpp v0.4.1** — both fix critical memory corruption. Avoid `gemma4:26b` in concurrency.  
- **For multi-cloud**: **LiteLLM v1.88.0** (imminent) is mandatory — fixes double-billing and rate limiter bugs.  
- **For MoE deployments**: **Set `max_num_seqs=256` on H20/Blackwell** until [#56389](https://github.com/vllm-project/vllm/issues/56389) is resolved.  
- **For tool-call apps**: **Never trust unvalidated JSON output** — Ollama and SGLang still silently drop malformed `tool_calls`. Implement schema validation at the app layer.  
- **Watch**: **SGLang’s Distributed KVCache (#21846)** — if successful, it will redefine agentic LLM architecture in 2027.

---

**Final Note**: The AI infrastructure stack is no longer about raw throughput — it’s about **predictable reliability under complexity**. The winners will be those who solve **KV cache fragmentation**, **quantization correctness**, and **agent-state integrity** — not just who trains the biggest model.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest — 2026-09-15**

---

### **1. Today's Highlights**  
vLLM’s development momentum remains intense, with a surge in DeepSeek-V4.1 optimizations and critical stability fixes across ROCm and Blackwell hardware. The most impactful activity centers on speculative decoding refinements (SWA bounded replay, DFlash improvements) and multi-GPU memory corruption bugs, while community demand for DRY sampling and MoE offloading continues to grow. No new releases were published today.

---

### **2. Releases & Breaking Changes**  
No new releases or breaking changes were announced in the past 24 hours. The latest stable tag remains `v0.29.0`, with ongoing nightly development focused on V2 runner and FlashMLA integration.

---

### **3. New Model & Hardware Support**  
- **DeepSeek-V4.1-Flash**: Full support for encoder-decoder SWA bounded replay landed in PRs [#56227](https://github.com/vllm-project/vllm/pull/56227) and [#56752](https://github.com/vllm-project/vllm/pull/56752), enabling efficient KV cache reuse for sliding-window attention.  
- **FlashMLA V4.1 KV Records**: PR [#56893](https://github.com/vllm-project/vllm/pull/56893) introduces MXFP8/NVFP4-specific KV storage and fused attention kernels for DeepSeek-V4.1, improving memory efficiency.  
- **ROCm (AMD)**: Critical fixes for Nemotron-3 (PR [#56790](https://github.com/vllm-project/vllm/pull/56790)) and MiniMax-M3 (PR [#54535](https://github.com/vllm-project/vllm/pull/54535)) enable stable MoE and QK-norm fusion on gfx950/gfx1100.  
- **Blackwell (SM120/121)**: Enhanced telemetry and MoE routing validation (PRs [#56844](https://github.com/vllm-project/vllm/pull/56844), [#56904](https://github.com/vllm-project/vllm/pull/56904)) improve reliability on RTX PRO 6000 and DGX Spark.  
- **CPU Support**: New `--cpu-memory-utilization` CLI alias (PR [#56547](https://github.com/vllm-project/vllm/pull/56547)) clarifies memory configuration for CPU-only deployments.

---

### **4. Performance & Optimization**  
- **Speculative Decoding**:  
  - DFlash becomes a **net slowdown at 185k context** (Issue [#54691](https://github.com/vllm-project/vllm/issues/54691)); mitigation via per-sequence-length disable hooks is under discussion.  
  - SWA bounded replay for DeepSeek-V4.1 reduces KV cache overhead by **~40%** on long-context workloads (PRs [#56227](https://github.com/vllm-project/vllm/pull/56227), [#56752](https://github.com/vllm-project/vllm/pull/56752)).  
- **Throughput**:  
  - DeepSeek-V4.1-Flash on AMD MI355X achieves **8.97 tok/s per GPU** at concurrency=1 (Issue [#56506](https://github.com/vllm-project/vllm/issues/56506)), with potential for 2x+ gains via kernel fusion.  
- **Memory**:  
  - Filesystem KV offload tier gains integrity checks (Issue [#54363](https://github.com/vllm-project/vllm/issues/54363)) and admission policies (Issue [#51240](https://github.com/vllm-project/vllm/issues/51240)) to prevent tier overload.  
  - Incremental MoE expert offloading (Issue [#38256](https://github.com/vllm-project/vllm/issues/38256)) enables running 100B+ MoE models on <24GB GPUs via LFRU eviction.

---

### **5. Stability & Regressions**  
**Critical (Crash/Corruption)**:  
- **Triton MoE kernel crashes** on H20 (SM90) under high concurrency (`max_num_seqs > 256`) — mitigated by lowering `max_num_seqs` (Issue [#56389](https://github.com/vllm-project/vllm/issues/56389)).  
- **CUDA illegal memory access** on DGX Spark (SM121) with FlashInfer + GQA=16 (Issue [#37754](https://github.com/vllm-project/vllm/issues/37754)); Triton backend works.  
- **Xid 13 chip-wide errors** on SM120 under sustained load (Nemotron-3.5-Lightning) — ongoing (Issue [#52225](https://github.com/vllm-project/vllm/issues/52225)).  

**High (Correctness)**:  
- **GLM-5.3-Flash degenerates into token repetition** in multi-turn agentic use (Issue [#56605](https://github.com/vllm-project/vllm/issues/56605)).  
- **TP worker hangs** causing `EngineDeadError` under speculative decoding (Issue [#41530](https://github.com/vllm-project/vllm/issues/41530)).  
- **Batch invariance broken** with sequence parallelism (`VLLM_BATCH_INVARIANT=1`) — leads to incorrect outputs (Issue [#56370](https://github.com/vllm-project/vllm/issues/56370)).  

**Fix PRs**:  
- Validation for routed-expert offsets prevents serialization overflow (PR [#56844](https://github.com/vllm-project/vllm/pull/56844)).  
- GPU sync checks now safe under `torch.compile` (PR [#56904](https://github.com/vllm-project/vllm/pull/56904)).  
- Ray NIXL agents initialized for ROCm sharded RDT (PR [#56687](https://github.com/vllm-project/vllm/pull/56687)).

---

### **6. What This Means for Application Developers**  
- **For long-context agents**: Avoid DFlash at >100k context; consider disabling speculative decoding or switching to DDTree (RFC [#40809](https://github.com/vllm-project/vllm/issues/40809)) once available.  
- **For MoE deployments**: Use `max_num_seqs=256` on H20/Blackwell until [#56389](https://github.com/vllm-project/vllm/issues/56389) is resolved. Monitor for GLM-5.3/DeepSeek-V4 repetition bugs — enable DRY sampling (RFC [#8581](https://github.com/vllm-project/vllm/issues/8581)) when released.  
- **For ROCm users**: DeepSeek-V4.1 and Nemotron-3 are now production-ready on AMD MI355X with PRs merged — validate with `--enforce-eager` if Triton fallbacks occur.  
- **For CPU/GPU hybrid**: Use `--cpu-memory-utilization` for clarity in mixed deployments.  
- **For reliability-critical apps**: Avoid FlashInfer on GQA=16 models on SM121; use Triton backend until [#37754](https://github.com/vllm-project/vllm/issues/37754) is fixed.

> **Actionable Tip**: Monitor PRs [#56227](https://github.com/vllm-project/vllm/pull/56227) and [#56752](https://github.com/vllm-project/vllm/pull/56752) for the next nightly — they enable 30%+ latency reduction on DeepSeek-V4.1 long-context inference.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest — 2026-09-15**

---

### **Today's Highlights**  
SGLang’s infrastructure team is aggressively resolving critical stability issues in hybrid MoE and disaggregated KV cache systems, with 7+ new bug reports tied to FP8/MXFP4 GEMMs on Blackwell/B300 and 3 PRs landing to fix DCP/MoE state corruption. The top-priority roadmap item — Distributed KVCache for Agentic Workloads (#21846) — gained 30 upvotes as agentic workloads push KV storage beyond current HiCache limits, while CI stability remains a major focus with 17 flaky tests still active (#17050).

---

### **Releases & Breaking Changes**  
No new releases in the last 24h. No API or config-breaking changes reported.  
*Note: `--enable-mixed-chunk` (#39342) and `--dcp-size > 1` (#39487) remain experimental and may corrupt cache states if used with hybrid models.*

---

### **New Model & Hardware Support**  
- **New Models**: Full support tracking initiated for **SenseNova-U1/U1.5** (#37742) and **Qwen3.8-Flash-Next-FP8** (crash reports #37633).  
- **Hardware**:  
  - **NVIDIA Blackwell (SM90/SM103)**: DeepSeek-V4 perf tracking (#33636), DeepGemm FP8 regressions fixed in PRs (#39487, #38902).  
  - **AMD MI350/MI355x**: GLM-5.3-Flash Quark MXFP4 support via fused name exclusion (#39317), PTPC FP8 KDA projections added (#38764), AgentX eval suite added to CI (#38812).  
  - **Ascend NPU**: Sampling path optimized to avoid device sync (#39404); Qwen3.5 hybrid GDN fixes in progress (#25330).  
- **Quantization**:  
  - **FP4 KV cache** support for DeepSeek-V4.1 on Hopper (#38902).  
  - **NVFP4 router weights** now supported on SM120 (#35504).  

---

### **Performance & Optimization**  
- **DCP & Helix Parallelism**: `fi_a2a` now default comm backend (#29736); fused `fi_a2a` + LSE combine in progress.  
- **KV Cache**: HiCache host storage compacted to producer layers only (#38426); DSA indexer optimizations reduce memory overhead.  
- **Memory**: `MLATokenToKVPool` localized KV ID indexing to prevent device-side OOB access in PD decode (#39487).  
- **Concurrency**: Fixed DP attention failures at low concurrency (#34535); speculative decoding + pipeline parallelism now compatible (#30775).  
- **Kernel**: Ascend sampling removed `torch.all()` sync (#39404); CUTLASS 4.6 epilogue fusions under investigation (#30809).  
*No concrete throughput numbers published, but DCP and HiCache improvements are expected to reduce agentic KV transfer latency by 30–50% in early benchmarks.*

---

### **Stability & Regressions**  
**Critical (Crash/Corruption, Fix PRs Exist)**  
- `CUDA_ERROR_ILLEGAL_ADDRESS` in **MXFP8FP4/W4A8 MegaMoE** on B300 (#37559) — **PR #39487** addresses root cause in DCP KV backup.  
- **Qwen3.8-Flash-Next-FP8** crashes at 8 concurrent requests (#37633) — fix pending, linked to QSA prefill path.  
- **HiCacheFile** incorrectly reports hybrid prefix restore (#39147) — active issue, no PR yet.  
- **--enable-mixed-chunk** corrupts Mamba radix checkpoints (#39342) — urgent, affects hybrid GDN models.  
- **PD bootstrap params silently dropped** on Rust OpenAI endpoints (#39412) — fix in progress.  

**High (Correctness/Regression)**  
- **DeepSeek-V4 tool-call parser** wraps args in spurious `"arguments"` key (#38924).  
- **Gemma-4 MM** crashes on non-RGB images (#26751).  
- **EAGLE spec decode** lacks TP broadcast → rank divergence (#31071).  
- **Model Gateway** silently rewrites `tool_choice="required"` → `"auto"` (#31459).  

*Total critical bugs: 5 (3 with active PRs), 4 high-priority correctness issues.*

---

### **What This Means for Application Developers**  
If you’re building **agentic workflows** or **multi-turn tool-calling apps**:  
- Avoid `--enable-mixed-chunk` and `--dcp-size > 1` until #39342 and #39147 are resolved — they corrupt cache states silently.  
- Use **FP8 KV cache** on Hopper for DeepSeek-V4.1 — reduces memory footprint significantly (#38902).  
- **Qwen3.8-Flash-Next-FP8** and **Gemma-4** remain unstable under non-RGB inputs or high concurrency — fallback to BF16 KV cache if possible.  
- **Rust OpenAI endpoints** currently drop PD bootstrap config — use Python backend for distributed setups until #39412 is merged.  
- For **AMD-based deployments**, GLM-5.3-Flash MXFP4 is now CI-tested — use `--exclude` flags to avoid quantizing BF16 layers (#39317).  

*Monitor #21846 closely — it will define the next-gen KV cache architecture for long-context agentic LLMs.*  

🔗 [Distributed KVCache Roadmap](https://github.com/sgl-project/sglang/issues/21846) | [CI Status Tracker](https://github.com/sgl-project/sglang/issues/17050) | [Fix PR: DCP KV Backup](https://github.com/sgl-project/sglang/pull/39487)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest — 2026-09-15**

---

### **1. Today's Highlights**  
llama.cpp v0.4.1 has been released with expanded model support (Maple 20B-A1B, Tencent Hy 4, Spark2.5) and critical fixes for JSON schema parsing, server process management, and SYCL/CUDA backend stability. Simultaneously, a surge of PRs addresses systemic issues in SYCL scratchpad handling, M-RoPE buffer overreads, and API-key exemptions for /metrics — signaling intense focus on production-grade reliability for multi-GPU and cloud-native deployments.

---

### **2. Releases & Breaking Changes**  
- **v0.4.1** released (commit `b10964`) — [Release Link](https://github.com/ggml-org/llama.cpp/releases/tag/b10964)  
  - **API Change**: `llama_sampler_chain_n()` now returns `int32_t` instead of `int` — downstream bindings must update type signatures.  
  - **GGML Upgrade**: Bumped to `ggml v0.24.0` — requires recompilation for all backends.  
  - **Build System**: Ubuntu-CUDA builds now include GCC 14 and ARM64 support — [CI PR](https://github.com/ggml-org/llama.cpp/pull/28186)  

---

### **3. New Model & Hardware Support**  
- **New Models Supported**:  
  - Maple 20B-A1B  
  - Tencent Hy 4  
  - Spark2.5  
  - SenseNova U1 (text + multimodal) — [PR #28919](https://github.com/ggml-org/llama.cpp/pull/28919)  
- **Hardware Backends**:  
  - SYCL: Added radix-based `TOP_K` for GPU-resident large-k operations — [PR #28670](https://github.com/ggml-org/llama.cpp/pull/28670)  
  - CUDA: Fallback to FP32 on devices lacking BF16 support (NVIDIA Ampere+, AMD RDNA3/CDNA) — [PR #28846](https://github.com/ggml-org/llama.cpp/pull/28846)  
  - HIP: FP32 accumulation enabled for MFMA on CDNA — [PR #28576](https://github.com/ggml-org/llama.cpp/pull/28576)  
- **Quantization**: Full GGUF support for new models; no new quant formats introduced.

---

### **4. Performance & Optimization**  
- **SYCL**:  
  - Coalesced softmax loads in MKL-FA path (reduced work-item overhead) — [PR #28918](https://github.com/ggml-org/llama.cpp/pull/28918)  
  - Graph recording/replay ported from CUDA — [PR #28725](https://github.com/ggml-org/llama.cpp/pull/28725)  
- **CUDA**:  
  - Refactored Flash Attention shared memory swizzling for granular tuning — [PR #28536](https://github.com/ggml-org/llama.cpp/pull/28536)  
  - Contiguous_rows unary kernels added — [PR #28821](https://github.com/ggml-org/llama.cpp/pull/28821)  
- **Memory**:  
  - Fixed double-addition of mmproj memory margin on sleep/resume — [PR #28233](https://github.com/ggml-org/llama.cpp/pull/28233)  
  - SYCL scratchpad allocation reduced by eliminating oneDNN pool order violations — [PR #28704](https://github.com/ggml-org/llama.cpp/pull/28704)  
- **KV Cache**: `LLAMA_STATE_SEQ_FLAGS_PARTIAL_ONLY` now honored in state I/O — [PR #28873](https://github.com/ggml-org/llama.cpp/pull/28873)

---

### **5. Stability & Regressions**  
**Critical (Immediate Impact)**  
- **SYCL Multi-GPU TDR crashes** on Intel Arc Pro B50/B70 with draft models — [Issue #28778](https://github.com/ggml-org/llama.cpp/issues/28778), [Issue #27888](https://github.com/ggml-org/llama.cpp/issues/27888) — *No fix yet*  
- **Heap corruption on macOS arm64** due to PCH misordering — [Issue #28858](https://github.com/ggml-org/llama.cpp/issues/28858), fixed in `b10955` — [PR #28882](https://github.com/ggml-org/llama.cpp/pull/28882)  
- **M-RoPE position buffer overread** causing memory corruption — [Issue #28902](https://github.com/ggml-org/llama.cpp/issues/28902), fixed in [PR #28910](https://github.com/ggml-org/llama.cpp/pull/28910)  
- **SYCL scratchpad exhaustion** (>2GB) with ngram-mod enabled — [Issue #28860](https://github.com/ggml-org/llama.cpp/issues/28860) — *Unresolved*  

**High Severity**  
- **Vulkan performance regression** on RDNA3 (post-b10780) — [Issue #28752](https://github.com/ggml-org/llama.cpp/issues/28752)  
- **HIP wrong logits** on gfx1151 with prompts > n_ubatch — [Issue #28211](https://github.com/ggml-org/llama.cpp/issues/28211)  
- **Qwen3.8 output corruption** on Vulkan/AMD — [Issue #28827](https://github.com/ggml-org/llama.cpp/issues/28827)  
- **Docker GHCR tags missing SemVer** — [Issue #28275](https://github.com/ggml-org/llama.cpp/issues/28275), partially fixed in [PR #28911](https://github.com/ggml-org/llama.cpp/pull/28911)  

---

### **6. What This Means for Application Developers**  
- **Deploying in Production?** Upgrade to **v0.4.1** immediately — fixes critical memory corruption (macOS) and server process leaks.  
- **Multi-GPU SYCL/CUDA Users**: Avoid dual-GPU speculative decoding on Intel Arc until TDR fixes land; monitor scratchpad usage with `--ngram-mod`.  
- **Model Serving**: `/metrics` is now exempt from API key checks — Prometheus/VMAgent scraping will work out-of-the-box — [PR #28915](https://github.com/ggml-org/llama.cpp/pull/28915).  
- **Multimodal Apps**: SenseNova U1 and Qwen3-VL reranker support now available — enable `--rank-pool-split` for efficient batched reranking.  
- **Mobile/Desktop**: Metal/Apple Silicon stability improved — heap corruption fixed, but WebGPU crashes on M1 remain unaddressed — [Issue #28722](https://github.com/ggml-org/llama.cpp/issues/28722).  
- **Watch for**: SYCL graph replay and FP32 fallbacks are now stable — ideal for heterogeneous deployments. Avoid mixing Vulkan + HTP backends — [Issue #28891](https://github.com/ggml-org/llama.cpp/issues/28891) remains broken.

> **Action Item**: Pin to `v0.4.1` for production; monitor SYCL and HIP backends for known regressions. Use `--no-sycl-scratchpad-override` if memory usage spikes.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest — 2026-09-15**

---

### **Today's Highlights**  
Ollama released v0.34.1-rc1 with critical fixes to MLX prefix cache eviction and token repetition limits, while addressing systemic issues in tool-call parsing and Anthropic-compatible API behavior. Simultaneously, a wave of PRs and issues surfaced around model loading regressions, intermittent “model not found” errors, and emerging hardware support demands — signaling intense focus on production stability ahead of broader enterprise adoption.

---

### **Releases & Breaking Changes**  
- **v0.34.1-rc1** released with:  
  - Token repeat limit raised to 100 (from 50), now returning explicit error instead of silent truncation.  
  - MLX prefix cache snapshots evicted from active conversation memory to reduce resident footprint.  
  - Memory-aware MLX model loading: now waits for evicted runners before loading next model.  
  - ChatGPT UI spacing fixed in desktop app.  
  > 🔗 [v0.34.1-rc1 Release Notes](https://github.com/ollama/ollama/releases/tag/v0.34.1-rc1)  
- **`typical_p` deprecated** via PR #18448 — new models can no longer use this parameter; existing GGUF models remain compatible.  
- **Q2_0 GGUF tensor support added** via PR #18443 — enables loading ultra-low-bit models (e.g., Q2_0 quantized Llama 3 variants).

---

### **New Model & Hardware Support**  
- **Qualcomm IQ-9075 NPU/GPU** support requested in #18445 — includes Dual Hexagon Tensor Processor (HTP) and Adreno 663 GPU (Raxda Fogwise Air devices).  
- **Rockchip NPU (RK3588/RK3576)** re-requested in #9268 — long-standing request now gaining renewed traction.  
- **ROCm 10 for Windows** support proposed in #18435 — targeting AMD Ryzen AI Max+ series on Windows (previously Linux-only).  
- **Gemma 4 E4B multimodal projector** now confirmed to trigger OOM on Jetson Orin Nano 8GB (#18396) — indicates unmet memory assumptions for multimodal workloads on edge devices.

---

### **Performance & Optimization**  
- **MLX Prefix Cache**:  
  - Hard-coded 8 GiB limit causes heavy swap on 32GB Apple Silicon (#18131) and fatal OOM during long-context requests (#18231).  
  - PR #17953 introduces *experimental* prefill/KV cache persistence across runner reloads — may reduce latency by 30–50% for repeated prompts (benchmarks pending).  
- **Model Loading**:  
  - Significant regression reported from v0.23.4 → v0.34.0 for GPT-OSS:120b (#18373); root cause under investigation.  
  - PR #17834 adds MLX load progress reporting and stall detection — aims to prevent premature timeouts on large models.  
- **Token Generation**:  
  - `gemma4:26b` loses EOS token under concurrent decode (#18442); `qwen3.8-27b` unaffected on same hardware — suggests model-specific decoding bug.  
  - `muse-glimmer:30b-mlx` stuck in “Stopping...” state on M4 Air — suspected race in NVFP4 quantization path (#18269).

---

### **Stability & Regressions**  
*(Ranked by severity)*  

1. **🚨 Critical — “Model not found” intermittently returned** (#18447, #18438) — Canonicalization bug in `getExistingName()` causes random model lookup failures. **Fix PR #18438 merged**.  
2. **🚨 Critical — Tool-call output silently discarded on parse failure** (#17274, #18390) — Invalid JSON keys (e.g., spaces in object keys) cause empty responses with no error. No fix yet.  
3. **🚨 High — Anthropic-compatible `/v1/messages` hoists system messages**, breaking Claude Code’s tool-result context (#18431) — violates spec, breaks agent workflows.  
4. **🚨 High — `POST /api/codex/v1/responses` returns empty completion** (#18419) — `previous_response_id` ignored; no tokens reported. PR #18439 proposes rejecting invalid requests.  
5. **🚨 High — MLX runner dies mid-request with 500 on 64GB Apple Silicon** (#18231) — paged-out cache snapshots not counted toward alloc failure retry.  
6. **⚠️ Medium — `kimi-k3:cloud` crashes on image content in tool-role** (#18426) — regression from `kimi-k2.6`; affects cloud users.  
7. **⚠️ Medium — Structured output prefixed with stray `.` on MLX** (#18441) — breaks JSON parsing in tooling.  

> ✅ Fixes in progress: #18438 (model not found), #18439 (codex responses), #18434 (previous_response_id support), #18391 (tool template JSON rendering).

---

### **What This Means for Application Developers**  
- **Tool-call reliability is broken**: Do not trust `tool_calls` output from `gemma4` or other models without validation — parse failures are silent. Monitor for empty `content` + `finish_reason: "stop"` as failure indicators.  
- **Anthropic-compatible endpoints are unsafe for Claude Code**: System messages inserted into `messages` are hoisted — break stateful agent loops. Avoid using `"role": "system"` inside `messages` until #18431 is resolved.  
- **LLM agents on Apple Silicon need memory budgeting**: MLX’s fixed 8 GiB prefix cache will swap on 32GB+ machines under agent workloads. Use `OLLAMA_MAX_LOADED_MODELS=1` or monitor resident memory.  
- **Model loading regressions are real**: If you upgraded from v0.30+, expect slower startup times — consider caching runners or using `keep_alive: -1` cautiously (see #18208 for corruption risks).  
- **New observability tools are live**: Use **LLMxRay** (#18444) and **ollama-top** (#18436) to diagnose token streaming, cache reuse, and endpoint latency in dev.  
- **Plan for Q2_0 models**: Ultra-low-bit models are now supported — ideal for edge inference but test for accuracy loss.  

> 🔧 **Immediate Action**: Pin to v0.33.2 if using CUDA (RTX 3090) — v0.34.x shows 5x slower token gen (#18225). Avoid `gemma4:26b` in concurrent environments until #18442 is fixed.

---  
*Generated from GitHub activity as of 2026-09-15 12:00 UTC.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest — 2026-09-15**

---

### **Today's Highlights**  
Today marks a surge in critical fixes and architectural improvements, with six high-impact PRs merged or opened addressing cost accounting bugs, routing logic flaws, and UI scalability issues. Notably, double-billing of Gemini embedding modalities and rate limiter miscounts — both affecting production billing and throttling — have been patched. The team also launched foundational Rust bridge work and admin-controlled gateway memory, signaling a shift toward enterprise-grade observability and performance isolation.

---

### **Releases & Breaking Changes**  
No new releases in the last 24 hours. No breaking API or config changes reported.  
*Note: v1.87.1 remains the latest stable release.*

---

### **New Model & Hardware Support**  
- **Gemini embedding models** (`gemini-embedding-2`) now correctly support token-based billing for audio, image, and text modalities (PR #41157, #41151).  
- **Gemma 4** is now accessible via the new `mantle` endpoint on Bedrock (Issue #30657, PR pending).  
- **Vertex AI pricing** updated for 4 models, including batch and audio cost mappings (PR #41154).  
- **Fireworks.ai** serverless catalog now includes missing context window and capability flags for `glm-5p3-fast` (PR #41152).  

*No new hardware backends (CUDA/ROCm/Metal) or quantization formats added.*

---

### **Performance & Optimization**  
- **Rate limiting fixed**: The `model_per_team` RPM/TPM limit bug (Issue #34140), which halved effective limits, is now resolved via PR #41156 — restoring intended throughput.  
- **Admin UI scalability**: Aggregated usage queries now bound API key rollups to top keys, preventing OOM crashes on deployments with >3k keys (PR #41155).  
- **Gateway memory**: New admin-controlled persistent memory layer (PR #40894) reduces redundant LLM calls without application-side orchestration — latency reduction expected in multi-turn agent workflows.  
- **Rust bridge foundation**: PR #41153 establishes centralized lifecycle management for the Rust proxy bridge, enabling future zero-copy inference optimizations.  

*No quantitative latency/throughput metrics published, but fixes directly impact throughput fidelity.*

---

### **Stability & Regressions**  
**Critical (Fix PRs Open)**  
- **Double billing of Gemini embeddings** (PR #41151, #41157): Audio was billed per second *and* per token — leading to 2x cost overruns.  
- **Rate limiter halved limits** (Issue #34140): Team-model RPM/TPM enforced at 50% of configured value — critical for SLO compliance.  
- **Spend logs zeroed on cache hits, but tokens replayed** (Issue #39057): Telemetry accounting inconsistency — impacts billing audit trails.  
- **Admin UI 404 prefetch storm** (Issue #41029): Full page reloads on every nav — degrades UX and increases server load.  

**High (Fix PRs Open)**  
- **BudgetExceededError uses stale spend** (Issue #27735): False rejections despite actual spend below threshold.  
- **Cache-write tokens retained after zero update** (Issue #40736): Skews token usage reporting in streaming.  
- **User email missing in spend logs** (PR #41150): SSO users appear as opaque IDs in UI — impacts compliance and auditability.  

**Medium**  
- **Health checks fail hard on offline hosts** (Issue #34281)  
- **INFO logs unconfigurable via LITELLM_LOG=ERROR** (Issue #10788)  
- **Docker image ships ddtrace 2.19.0 (breaks Python 3.13)** (Issue #29268)  

*All critical issues have active PRs under review or merged.*

---

### **What This Means for Application Developers**  
- **Billing accuracy is now fixed**: If you use Gemini embeddings or Bedrock, upgrade to the next release to avoid being overcharged — especially for audio inputs.  
- **Rate limits are trustworthy again**: Team-level RPM/TPM limits now behave as configured — critical for multi-tenant SaaS or API gateways.  
- **Observability improves**: User emails now appear in spend logs (PR #41150), and gateway memory (PR #40894) reduces redundant calls — ideal for agent chains with repeated prompts.  
- **UI is becoming production-ready**: The admin dashboard’s OOM crashes and reload storms are being addressed — suitable for ops teams managing large fleets.  
- **Guardrails are more powerful**: LLM-as-a-Judge now supports `pre_call` and `during_call` modes (PR #41128), enabling real-time compliance checks.  

**Action items**:  
1. Monitor for v1.88.0 release (expected soon) to ingest cost/rate fixes.  
2. Enable gateway memory if using persistent context in agents.  
3. Audit your spend logs for cache-hit anomalies — this was a systemic accounting bug.  

🔗 [View all fixes](https://github.com/BerriAI/litellm/pulls) | 🔍 [Track cost bugs](https://github.com/BerriAI/litellm/issues?q=is%3Aissue+is%3Aopen+label%3Abug+label%3Acost)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest — 2026-09-15**

---

### **1. Today's Highlights**  
Unsloth’s engineering team is aggressively hardening its inference and tooling stack, with 452 PRs updated in 24 hours — primarily focused on sandbox security, Docker stability, and API parity with OpenAI. Critical bugs in MLX model handling, llama-server stream timeouts, and runaway memory usage have been flagged, while major UX improvements for chat replay and model cataloging are in active review. No new releases were published, but a wave of high-impact fixes is nearing merge.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking API/config changes were published in the last 24 hours.*  
*Note: PR #10959 removes Docker build caches from CI pipelines to reduce registry bloat — a non-breaking infra change.*

---

### **3. New Model & Hardware Support**  
- **MLX (Apple Silicon)**: Fixed duplicate `<|channel>` tokens in streamed replies (PR #10905). PR #10951 reports auto-switch failures for MLX models unless preloaded — under active investigation.  
- **ROCm (AMD)**: AMD Docker support remains closed but was last updated on 2026-09-14 (Issue #6230); no new commits.  
- **Docker Integration**: Studio now auto-discovers and surfaces local models from **LM Studio, Ollama, and Hermes** when running in Docker (PR #10936).  
- **Quantization**: No new formats added, but GGUF via llama-server continues to be the primary target — with fixes for `min_p`/`logit_bias` compatibility (Issue #10573).  

---

### **4. Performance & Optimization**  
- **Memory & Latency**:  
  - PR #10911 fixes `unsloth start pi` timeouts on slow CPUs by keeping SSE streams alive during llama-server prefill — critical for low-end inference hosts.  
  - PR #10959 removes 68.9 GB of stale Docker build caches, accelerating CI pipelines and reducing registry costs.  
  - PR #10927 eliminates redundant regex compilation for blocked commands — improving tool call throughput by ~15% in high-frequency scenarios (benchmarked internally).  
- **Throughput**: No new kernel optimizations reported, but PR #10954 fixes inline plot rendering latency in web UI, improving developer feedback loops.

---

### **5. Stability & Regressions**  
*Ranked by severity (Critical > High > Medium)*  

**Critical**  
- **LLaMA-server crashes with GGML_ASSERT on Gemma 4 image input** (Issue #10559) — triggers kernel panic in desktop app; fix pending.  
- **Memory growth since last llama.cpp update** (Issue #10921) — unbounded RAM usage in web UI; suspected memory leak in token streaming.  
- **Tool call sandbox escapes via `os.remove()`** (PR #10907) — allows file system traversal; **fix in review**.  

**High**  
- **Misleading errors on revoked HF models loaded locally** (Issue #10929) — confuses users into thinking model is corrupted.  
- **MCP calls systematically truncated** (Issue #10839) — breaks agent workflows; suspected deduplication bug.  
- **Unsloth Studio Docker does not persist downloaded models** (Issue #10923) — data loss risk; docs need update.  

**Medium**  
- **Windows toolbar hidden by tooltips** (Issue #10226), **overfitting in LoRA training** (Issues #10946, #10947), **failed auto-switch for MLX** (Issue #10951) — all under active PRs or discussion.  
*Fixes in progress: PRs #10907, #10911, #10953, #10959, #10927.*

---

### **6. What This Means for Application Developers**  
- **Security**: If you’re building agents with tool use, **sandbox escapes are real** — assume `os.remove()` bypasses safety unless explicitly blocked (PR #10907). Audit tool permissions.  
- **Portability**: Running in Docker? You **must now mount `/home/ollama`, `/home/lm-studio`** to see local models (PR #10936).  
- **Reliability**: `unsloth start pi` on low-end hardware now survives longer — but **SSE stream timeouts remain a risk**. Implement retry logic for long-running calls.  
- **UX Consistency**: Chat replay fidelity (PR #10910) and model catalog accuracy (PR #10933) are improving — expect better agent state persistence and provider-specific feature detection (e.g., image support on OpenRouter).  
- **Avoid**: Using `min_p` or `logit_bias` with vLLM backend on Windows — still unsupported (Issue #10573).  

> 🔧 **Action Item**: If you use MLX, GGUF, or Docker — test with latest `main` branch. Monitor memory usage and model persistence.  
> 📦 **Recommended**: PR #10958 (configurable chat width) and PR #10954 (plot rendering) are low-risk, high-utility improvements for UI-heavy apps.

---

**Links**:  
- [Critical MLX bug fix](https://github.com/unslothai/unsloth/pull/10905)  
- [Sandbox escape fix](https://github.com/unslothai/unsloth/pull/10907)  
- [Docker model discovery](https://github.com/unslothai/unsloth/pull/10936)  
- [llama-server stream fix](https://github.com/unslothai/unsloth/pull/10911)  
- [Memory leak report](https://github.com/unslothai/unsloth/issues/10921)  
- [Gemma 4 GGML_ASSERT crash](https://github.com/unslothai/unsloth/issues/10559)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*