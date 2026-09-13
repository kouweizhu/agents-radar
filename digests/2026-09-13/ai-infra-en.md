# AI Infrastructure Digest 2026-09-13

> Generated: 2026-09-13 00:13 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

**Cross-Project AI Infrastructure Ecosystem Report — 2026-09-13**

---

### **1. Ecosystem Overview**  
The AI inference ecosystem in Q3 2026 is characterized by intense hardware-agnostic optimization pressure, with Blackwell (SM120/121), ROCm MI355X, and Intel Arc emerging as critical new frontiers. vLLM and SGLang dominate high-throughput model serving, while llama.cpp and Ollama lead in local, quantized inference — all racing to stabilize next-gen MoE and Flash attention kernels. LiteLLM’s proxy layer has become the de facto routing glue for multi-provider agent workflows, but its correctness gaps are exposing systemic fragility in streaming and cost tracking. Meanwhile, Unsloth bridges fine-tuning and deployment, revealing a growing convergence between training optimization and inference efficiency.

---

### **2. Activity Comparison**

| Project       | Open Issues (24h) | Open PRs | Recent Releases | Release Status                     |
|---------------|-------------------|----------|------------------|------------------------------------|
| **vLLM**      | 18                | 22       | None             | v0.29.1 imminent (critical fixes)  |
| **SGLang**    | 26                | 342      | None             | v0.5.15 pinned; major PR backlog   |
| **llama.cpp** | 12                | 15       | None             | Build-tagged (b10933); no semver   |
| **Ollama**    | 15                | 11       | None             | 0.34.0 unstable; 0.33.x recommended|
| **LiteLLM**   | 30+               | 12       | v1.84.0 (regressive) | Avoid v1.84.0; v1.83.x stable    |
| **Unsloth**   | 15                | 72       | None             | Major CI/UX fixes in review        |

*Note: SGLang’s 342 PRs reflect deep architectural refactoring; LiteLLM’s issue count reflects proxy-layer fragility across 5+ providers.*

---

### **3. Model Support Race**

| Project       | New Model Support                                                                 | New Hardware Support                                  | Leader Status                     |
|---------------|-----------------------------------------------------------------------------------|-------------------------------------------------------|-----------------------------------|
| **vLLM**      | DeepSeek-V4.1-Flash, GLM-5.3-Flash (critical fixes)                               | NVIDIA GB10 (SM121), H20 (SM90), AMD MI355X           | ✅ **Front-runner in MoE/Flash**  |
| **SGLang**    | DeepSeek-V4.1 FP8/MoE, Qwen3.5 VL, GLM-4.7/5                                      | NVIDIA Blackwell (SM120/121), AMD gfx942/950, Apple MLX | ✅ **Broadest hardware coverage** |
| **llama.cpp** | ELMOD 2.7B (German), Qwen3-Coder (Jinja dot-notation)                             | NVIDIA Blackwell (sm_120), Intel Arc A770, ROCm GCN   | ✅ **Best 4-bit/quantization**    |
| **Ollama**    | Gemma 4, Qwen 3.8 (multimodal tooling)                                            | AMD Strix Halo, Jetson Orin Nano, hybrid graphics     | ⚠️ **Edge deployment leader**     |
| **LiteLLM**   | 34 new models (Gemini Live, DeepSeek, Tencent TokenHub)                           | None (cloud proxy only)                               | ✅ **Model routing authority**    |
| **Unsloth**   | Qwen3.5-9B LoRA, DeepSeek V4.1 Flash GGUF (requested)                             | AMD ROCm (RDNA2–4, CDNA), B200                        | ✅ **Training-to-inference bridge** |

**Leader**: **SGLang** leads in *breadth* of model/hardware support; **vLLM** leads in *depth* of MoE/Flash optimization; **llama.cpp** leads in *quantization reliability* on new GPUs.

---

### **4. Performance Frontier**

Optimization efforts are heavily concentrated in four domains:

| Domain               | Leading Project(s)                     | Key Advances                                                                 |
|----------------------|----------------------------------------|------------------------------------------------------------------------------|
| **KV Cache**         | vLLM, SGLang                           | HiSparse cache sharing (vLLM), unified radix cache with auxiliary pools (SGLang), FP8 KV storage (SGLang, vLLM) |
| **Speculative Decoding** | vLLM                                 | DFlash2 under active optimization — but **net slowdown at >100k context** (vLLM #54691) |
| **Quantization**     | llama.cpp, vLLM                        | IQ quants fallback on Blackwell (llama.cpp), NVFP4/Marlin W4A8-FP8 corruption fixes (vLLM) |
| **Distributed Serving** | vLLM, SGLang                         | TP reduce-scatter on SM100/103 (vLLM), CUDA graph capture fixes for MoE (SGLang) |
| **Kernels**          | SGLang, vLLM                           | DeepGEMM (SGLang), Triton/FlashInfer composite (vLLM), MSA backend (SGLang) |

**Dominant trend**: **KV cache efficiency** and **MoE-aware kernel fusion** are the primary throughput levers — with quantization stability becoming a production gatekeeper.

---

### **5. Layer Positioning**

| Project       | Primary Layer               | Role & Differentiation                                                                 |
|---------------|-----------------------------|----------------------------------------------------------------------------------------|
| **vLLM**      | High-throughput Serving     | Enterprise-grade inference engine; optimized for batched, long-context, MoE serving on datacenter GPUs. |
| **SGLang**    | High-performance Serving    | Low-latency, kernel-level optimization for Blackwell/ROCm; targets agent workloads with speculative decoding. |
| **llama.cpp** | Local Runtime (Edge)        | Lightweight, quantized inference on CPU/GPU; dominant for on-device, offline, and embedded deployments. |
| **Ollama**    | Local Runtime + CLI         | Developer-first model packaging and local serving; strong UX for prototyping, weak in production scaling. |
| **LiteLLM**   | Inference Gateway / Proxy   | Unified API layer for 15+ providers; critical for multi-model agent orchestration, but brittle under load. |
| **Unsloth**   | Fine-tuning → Inference     | Training optimization (LoRA, SFT) with direct integration to llama.cpp and Studio inference; bridges training and deployment. |

**Strategic insight**: vLLM and SGLang compete for the *datacenter serving layer*; llama.cpp and Ollama dominate the *edge/local layer*; LiteLLM is the *orchestration glue*; Unsloth is the *training-to-inference pipeline enabler*.

---

### **6. Trend Signals**

**Extracted Industry Trends**:

1. **Blackwell is the new A100** — All major projects (vLLM, SGLang, llama.cpp) are scrambling to fix silent corruption and underutilization on SM120/121. **Production deployments on Blackwell remain risky until late Q4 2026**.
2. **MoE offloading is production-ready** — vLLM’s LFRU eviction and SGLang’s DeepGEMM buffer control indicate MoE serving is maturing beyond research.
3. **Quantization is the new bottleneck** — NVFP4, Marlin W4A8-FP8, and IQ quants are failing on new architectures. **FP8 KV cache is the next frontier** — SGLang and vLLM are leading.
4. **Agent workflows are breaking** — Tool call deduplication (Unsloth), streaming reasoning loss (LiteLLM), JSON parsing (Ollama), and context truncation (Ollama/vLLM) reveal systemic fragility in multi-turn agent pipelines.
5. **CI/CD instability is endemic** — SGLang (342 PRs), Unsloth (72 PRs), and LiteLLM (30+ issues) show that rapid feature velocity is outpacing correctness. **Pin versions, monitor PRs, avoid bleeding-edge releases**.

**Recommendations for Developers**:

- ✅ **Use vLLM v0.28.0** for production MoE serving on A100/A800; **avoid GB10/H20** until v0.29.1.
- ✅ **Use llama.cpp b10929** on Blackwell/Edge with `GGML_CUDA_DISABLE_GRAPHS=1` and `GGML_CUDA_FA_ALL_QUANTS=ON`.
- ✅ **Use Ollama 0.33.x** for local multimodal agents — avoid 0.34.0 until tool-call fixes merge.
- ✅ **Avoid LiteLLM v1.84.0** — use v1.83.x and avoid `openai/` prefixes for self-hosted models.
- ✅ **Monitor PRs**:  
  - vLLM: #56461 (GB10 block size), #56389 (H20 crash)  
  - SGLang: #39193 (FP8 GEMM), #39216 (crash on disconnect)  
  - Ollama: #17894 (tool call context), #18400 (JSON keys)  
  - Unsloth: #10839 (tool dedup), #10835 (security bypass)

> **Final Insight**: The infrastructure stack is becoming *more fragmented* in capabilities but *more convergent* in priorities — **KV efficiency, quantization stability, and agent correctness** are now the universal KPIs. Choose your layer wisely, pin your versions, and treat speculative decoding as a beta feature until Q4.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest — 2026-09-13**

---

### **1. Today's Highlights**  
vLLM’s ecosystem is rapidly evolving around DeepSeek-V4.1-Flash and GLM-5.3-Flash deployments, with critical fixes and optimizations landing for SM120/SM121 (GB10), ROCm (MI355X), and speculative decoding. The most urgent issues include memory corruption on GB10, Triton kernel crashes under high concurrency on H20, and prefix-cache failures in DFlash2 — all with active PRs under review. Meanwhile, batch invariance and MoE offloading are maturing as core infrastructure pillars.

---

### **2. Releases & Breaking Changes**  
No new releases or breaking API/config changes were published in the last 24 hours.

---

### **3. New Model & Hardware Support**  
- **DeepSeek-V4.1-Flash**: Now under active support for **NVIDIA GB10 (SM121)** and **H20 (SM90)**, with multiple PRs addressing cache block mismatches (#56461), Triton memory access faults (#56389), and quantization corruption (#49546).  
- **ROCm (MI355X)**: Performance tracking and CI stabilization for DeepSeek-V4.1-Flash on AMD GPUs (#56506, #50922); deprecation of DinD for MI250 test groups (#56162).  
- **GLM-5.3-Flash**: Critical bug reported for repeated-token degeneration in multi-turn agentic use (#56605); de-JITification work underway (#55348).  
- **Quantization**: NVFP4 weight scale detection improved with NaN sentinel (#52501); Marlin W4A8-FP8 corruption on GB10 confirmed (#49546).  
- **MoE**: Incremental expert offloading with LFRU eviction and async pipeline (#38256); DeepSelect TopK integration for DSA sparse indexer (#56464).

🔗 [DeepSeek-V4.1-Flash GB10 issue #56461](https://github.com/vllm-project/vllm/issues/56461)  
🔗 [ROCm perf tracking #56506](https://github.com/vllm-project/vllm/issues/56506)  
🔗 [NVFP4 sentinel fix #52501](https://github.com/vllm-project/vllm/pull/52501)  
🔗 [DeepSelect TopK integration #56464](https://github.com/vllm-project/vllm/pull/56464)

---

### **4. Performance & Optimization**  
- **Prefix Cache Reuse**: DFlash2 suffers **zero prefix-cache reuse** on 1.04M prompts due to KV block alignment mismatch (#54094); fix in progress via PR #54381.  
- **Speculative Decoding**: DFlash2 becomes a **net slowdown at 185k context** (71 → 16 tok/s) on Qwen3.5 due to full KV re-scans per draft cycle (#54691).  
- **Throughput**: Triton/FlashInfer composite for multimodal prefix attention reduces **TTFT by 34.5%** under fixed 5 req/s load (#56305).  
- **KV Cache**: HiSparse host cache now shared across TP ranks via mmap (#56629), reducing memory duplication.  
- **TopK**: DeepSelect integration targets **>2x speedup** over existing TopK kernels in DSA sparse indexer path (#56464).  
- **Reduce-Scatter**: New low-SM backend for SM100/SM103 improves TP2/4/8 reduce-scatter efficiency using `multimem.ld_reduce` (#55072).

🔗 [DFlash2 TTFT gain #56305](https://github.com/vllm-project/vllm/pull/56305)  
🔗 [DeepSelect TopK #56464](https://github.com/vllm-project/vllm/pull/56464)  
🔗 [HiSparse cache sharing #56629](https://github.com/vllm-project/vllm/pull/56629)

---

### **5. Stability & Regressions**  
Ranked by severity (critical → high):

1. **CRITICAL**: `dsv4_topk` Triton kernel crashes with **illegal memory access** on H20 when `max_num_seqs > 256` (#56389) — mitigated by lowering config, fix pending.  
2. **CRITICAL**: DeepSeek-V4.1-Flash **fails to serve on GB10 (SM121)** due to 32 vs 64 block size mismatch in SWA cache indexer (#56461) — active PR #54381.  
3. **HIGH**: **Deterministic output corruption** on exact-retrieval tasks at 1-in-4 prompt lengths with DeepSeek-V4-Flash-0731 (#55927) — reproducible on hosted providers.  
4. **HIGH**: GLM-5.3-Flash degenerates into **repeated-token "word salad"** in multi-turn agentic workflows (#56605) — no fix yet.  
5. **HIGH**: **Batch invariance broken** when sequence parallelism is enabled (#56370) — affects deterministic inference guarantees.  
6. **HIGH**: **Watermarking compatibility** and quality regression monitoring missing (#56105) — tracking issue open.  

Fixes in progress:  
- #56621 (KV offload store submission)  
- #56610 (ROCm elastic EP deadlock)  
- #56645 (PCP/DCP shard exposure)  
- #56323 (DFlash JIT migration)

🔗 [H20 Triton crash #56389](https://github.com/vllm-project/vllm/issues/56389)  
🔗 [GB10 block mismatch #56461](https://github.com/vllm-project/vllm/issues/56461)  
🔗 [Output corruption #55927](https://github.com/vllm-project/vllm/issues/55927)  
🔗 [Batch invariance break #56370](https://github.com/vllm-project/vllm/issues/56370)

---

### **6. What This Means for Application Developers**  
- **Avoid H20 with `max_num_seqs > 256`** until #56389 is resolved — use lower concurrency or disable DFlash2 until patched.  
- **Do not deploy DeepSeek-V4.1-Flash on GB10 systems** yet — cache block size mismatch causes silent failures (#56461). Monitor for v0.29.1+ releases.  
- **Speculative decoding is risky beyond 100k context** on hybrid GDN models like Qwen3.5 — disable DFlash2 for long-context agents.  
- **Structured output + DFlash2 + xgrammar is broken** — deterministic FSM failures occur (#53777); consider disabling spec decode for JSON output tasks.  
- **ROCm deployments** are now production-grade for MI355X — CI is stabilized and performance tracking is live (#56506).  
- **For deterministic inference**: Disable sequence parallelism if using `VLLM_BATCH_INVARIANT=1` (#56370) — this is a known regression.  
- **Monitor watermarking and quantization output** — NVFP4 and Marlin W4A8-FP8 are still unstable on GB10 (#49546).

> **Recommendation**: Hold off on deploying DeepSeek-V4.1-Flash or GLM-5.3-Flash in production environments until vLLM v0.29.1 is released. Use v0.28.0 with conservative `max_num_seqs`, disable speculative decoding for long-context or structured-output tasks, and prefer SM80 (A100/A800) over SM90/SM121 until further stability patches land.

🔗 [vLLM v0.29.x tracking](https://github.com/vllm-project/vllm/releases)  
🔗 [Production guidance for DeepSeek-V4.1](https://github.com/vllm-project/vllm/issues/56461)  
🔗 [Spec decode pitfalls](https://github.com/vllm-project/vllm/issues/54691)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest — 2026-09-13**

---

### **Today's Highlights**  
SGLang’s CI pipeline remains under intense scrutiny with 26 new issues filed in 24 hours, dominated by critical correctness bugs in DeepSeek-V4.1’s FP8/MoE kernels and Blackwell (SM121) hardware compatibility. Simultaneously, a wave of PRs targets performance hardening for emerging architectures (AMD gfx942/950, Apple MLX, NVIDIA Blackwell), with 342 open PRs reflecting active development across inference, quantization, and distributed serving layers.  

---

### **Releases & Breaking Changes**  
*No new releases or breaking API/config changes were tagged in the last 24 hours.*  

---

### **New Model & Hardware Support**  
- **Blackwell (SM120/121)**: Full integration progress with multiple PRs:  
  - `vibecuda` MSA backend support (#39233)  
  - DeepGEMM MoE buffer sizing fixed for SM121 (#39223)  
  - FP8 `wo_a` GEMM correctness patch under review (#39193)  
  - CUDA graph capture fixes for DSV4.1 + Engram (#39173)  
- **AMD ROCm**:  
  - DSA projection fusion decoupled from CUDA postprocessing on gfx942 (#39243)  
  - FP8 unified KV cache enabled on gfx950 (#37413)  
  - Unified Triton MoE router now supported on ROCm (#38328)  
- **Apple MLX**:  
  - Headless trunk detection fixed for Qwen3.5 VL models (#39242)  
  - Mamba grid attributes initialized to prevent crash on prefix match (#39238)  
- **NPU**: Host memory cache management added for DeepSeek-V4 (#37382)  
- **Quantization**: FP4 KV-cache storage for DeepSeek-V4.1 C1/C2 on Hopper proposed (#38902)  

---

### **Performance & Optimization**  
- **Latency**:  
  - TRT-LLM MLA backend reuses fused FP8 KV/Q prep in target verify, eliminating redundant launches (#39232)  
  - DeepSeek-V4 decode padding removed on SM120/121 → **0.5% decode step reduction** (#39235)  
- **Memory**:  
  - Unified Radix Cache now supports hybrid prefix restoration with auxiliary pool awareness (#39147)  
  - MegaMoE buffer allocation optimized to respect SM budget limits (#39223)  
- **Throughput**:  
  - Vectorized JointThreshold decoding enabled on CUDA to replace serial Python path (#34122)  
  - ReplaySSM ring-write fused into KDA chain-verify kernel (#36821)  
- **Kernel**:  
  - FlashInfer now correctly rejects SM89 without cubin (#38980)  
  - `deep_gemm` CUDA graph capture failures addressed via dependency fixes (#39241)  

---

### **Stability & Regressions**  
*Ranked by severity — all critical unless noted.*  

1. **🔥 Critical (Correctness)**:  
   - DeepSeek-V4.1 FP8 `wo_a` GEMM returns **~25% wrong outputs silently** on SM121 when `DEEPGEMM_SCALE_UE8M0=false` (#39193)  
   - Quantized DFlash2 draft yields **~0% acceptance** with no error (#39087)  
   - `--moe-runner-backend deep_gemm` fails during CUDA graph capture on SM121 after 4m weight load (#39226)  
   - Client disconnect crashes entire engine due to uncaught `asyncio.CancelledError` (#39216)  

2. **🚨 High (Regresions)**:  
   - Unified-cache default flip regresses long-prefix decode throughput on Spark/Thor (#36131)  
   - PP8 disaggregated prefill has **~30s TTFT floor** on Kimi-K3 (#34815)  
   - FP8 KV-cache decode slowed by unfused K/V quantization overhead (#30815)  

3. **⚠️ Medium (Stability)**:  
   - CI pipeline: 4 broken, 10 flaky tests tracked (#17050)  
   - MiniMax H3 GGUF fails to load Conv3D patch embedding (#38904)  
   - SWA branching incorrectly attaches Mamba checkpoint to earlier prefix (#38815)  

*Fix PRs exist for all critical issues except #39193 and #39087 — both under active review.*  

---

### **What This Means for Application Developers**  
- **Avoid Blackwell + FP8 MoE in production** until #39193 and #39226 are merged — outputs are silently corrupted.  
- **Use `--enable-response-store=false`** unless you need audit trails — unbounded memory growth in PD deployments (#39122).  
- **For Apple Silicon users**: Qwen3.5 VL and Mamba hybrid models now boot — but require `--mamba-radix-cache-strategy no_buffer` only if you patch #39238.  
- **AMD users**: gfx942/gfx950 FP8 support is now viable — verify `--attn-cp-size` and enable unified Triton router (#38328).  
- **CI/CD pipelines**: Performance failures are now terminal in diffusion CI — ensure E2E metrics are emitted (#39206).  
- **Tool call parsing**: GLM-4.7/5 JSON Schema union types are now preserved across streaming/non-streaming paths (#39136) — critical for agent reliability.  

> **Recommendation**: Pin to `v0.5.15` for production until #39193 and #39216 are resolved. Monitor #17050 for CI stability trends.  

🔗 **Key Issues**:  
- [#39193](https://github.com/sgl-project/sglang/issues/39193) — FP8 GEMM correctness  
- [#39216](https://github.com/sgl-project/sglang/issues/39216) — Engine crash on client disconnect  
- [#39226](https://github.com/sgl-project/sglang/issues/39226) — DeepGEMM CUDA graph failure  
- [#17050](https://github.com/sgl-project/sglang/issues/17050) — CI health tracker  

🔗 **Key PRs**:  
- [#39241](https://github.com/sgl-project/sglang/pull/39241) — DeepGEMM dependency fix  
- [#39232](https://github.com/sgl-project/sglang/pull/39232) — FP8 KV reuse in MLA  
- [#39233](https://github.com/sgl-project/sglang/pull/39233) — VibeCUDA on Blackwell  
- [#39243](https://github.com/sgl-project/sglang/pull/39243) — AMD DSA decoupling

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest — 2026-09-13**

---

### **Today's Highlights**  
Today’s updates focus on critical stability fixes for CUDA and Vulkan backends, enhanced Jinja template parsing for tool calling models, and foundational work to support next-gen hardware like NVIDIA Blackwell (sm_120) and Intel Arc Battlemage. The most impactful changes address silent performance cliffs in 4-bit KV cache handling and GPU memory leaks in continuous batching, directly affecting production inference reliability.

---

### **Releases & Breaking Changes**  
No formal releases were tagged in the last 24h. However, build behavior changed significantly:  
- `b10933` adds Jinja dot-notation support for integer literals (`{1: 'Bob'}.1`), enabling better compatibility with Qwen3-Coder and similar tool-calling models.  
- `b10932` disables timestamp embedding in Clang PCH to fix cache invalidation during CI/CD rebuilds — a non-breaking but critical devflow improvement.  
- `b10931` introduces UI cache support for the web interface, improving UX consistency across reloads.  
➡️ *No API-breaking changes; all updates are additive or fix-oriented.*  
🔗 [PR #28817](https://github.com/ggml-org/llama.cpp/pull/28817) | [PR #28816](https://github.com/ggml-org/llama.cpp/pull/28816) | [PR #28802](https://github.com/ggml-org/llama.cpp/pull/28802)

---

### **New Model & Hardware Support**  
- **Models**: Added support for **ELMOD 2.7B** (German GPTNeoX variant with custom tokenizer) via PR #28818.  
- **Hardware**:  
  - **CUDA (Blackwell)**: PR #28823 forces cuBLAS fallback for IQ quants (IQ1_S, IQ3_XXS, etc.) on sm_120, fixing silent corruption in Unsloth Dynamic Quant models (#21371).  
  - **Vulkan (Intel Arc)**: PR #28822 adds IQ3_S MMQ kernels for Intel Arc A770, improving quantized performance on previously unsupported backends.  
  - **ROCm**: PR #27841 adds GCN-specific config table for HIP backend, improving AMD GPU compatibility.  
- **Quantization**: IQ quants now have explicit fallback paths on Blackwell — a major step toward reliable 4-bit deployment on next-gen GPUs.  
🔗 [PR #28818](https://github.com/ggml-org/llama.cpp/pull/28818) | [PR #28823](https://github.com/ggml-org/llama.cpp/pull/28823) | [PR #28822](https://github.com/ggml-org/llama.cpp/pull/28822) | [PR #27841](https://github.com/ggml-org/llama.cpp/pull/27841)

---

### **Performance & Optimization**  
- **CUDA**: PR #28633 proposes making `GGML_CUDA_FA_ALL_QUANTS=ON` the default to prevent silent 30x prefill slowdowns when using 4-bit KV caches — a critical optimization for cost-sensitive deployments.  
- **Vulkan**: PR #28752 reports a severe prompt processing regression on RDNA3 after b10780; investigation ongoing.  
- **Kernel Improvements**:  
  - Added `kernel_gemm_noshuffle_q4_k_f32_32b_trans_ila_a8_bin` for OpenCL (PR #28677), improving quantized GEMM on Qualcomm APUs.  
  - PR #28821 adds contiguous_rows unary kernel support in CUDA, enabling more flexible tensor layouts.  
- **Memory**: PR #28751 eliminates unnecessary scheduler re-reservation on `causal_attn` toggles, reducing overhead in recurrent architectures.  
🔗 [PR #28633](https://github.com/ggml-org/llama.cpp/pull/28633) | [PR #28677](https://github.com/ggml-org/llama.cpp/pull/28677) | [PR #28821](https://github.com/ggml-org/llama.cpp/pull/28821) | [PR #28751](https://github.com/ggml-org/llama.cpp/pull/28751)

---

### **Stability & Regressions**  
**Critical (Immediate Action Required)**  
- **#28196**: Qwen35 on RTX 5090 (sm_120) decodes at only 76% of roofline bandwidth — severe underutilization.  
- **#27330**: CUDA graphs hang RTX 5090 laptops (RC watchdog/Xid 8); `GGML_CUDA_DISABLE_GRAPHS=1` is required workaround.  
- **#28404**: Dual GPU server processes crash at `ggml-cuda.cu:107` due to CUDA graph reuse — confirmed on Windows/RTX 5060 Ti.  
- **#28813**: OOM crashes with `-np 3` on multi-GPU systems — likely memory leak in scheduler or KV cache management.  

**High (Production Risk)**  
- **#28752**: Severe prompt slowdown on Vulkan/RDNA3 after b10780 — regression under active investigation.  
- **#28633**: Silent 30x prefill slowdown with 4-bit KV cache — no warning, no log, just performance collapse.  
- **#26220**: RDNA4 prompt processing regressed 2x after rocWMMA removal — native MMA kernel is suboptimal.  

**Fixes In Progress**  
- PR #28823 addresses IQ quant corruption on Blackwell.  
- PR #27530 and #27943 fix K/V state cleanup and serialization leaks after failed restores.  
🔗 [Issue #28196](https://github.com/ggml-org/llama.cpp/issues/28196) | [Issue #27330](https://github.com/ggml-org/llama.cpp/issues/27330) | [Issue #28404](https://github.com/ggml-org/llama.cpp/issues/28404) | [Issue #28813](https://github.com/ggml-org/llama.cpp/issues/28813) | [Issue #28752](https://github.com/ggml-org/llama.cpp/issues/28752) | [Issue #28633](https://github.com/ggml-org/llama.cpp/issues/28633)

---

### **What This Means for Application Developers**  
- **Deploying on Blackwell (RTX 5090/5080)**: Use `GGML_CUDA_DISABLE_GRAPHS=1` today to avoid hangs. Enable `GGML_CUDA_FA_ALL_QUANTS=ON` to prevent 30x prefill slowdowns. Wait for PR #28823 to land for stable IQ quant support.  
- **Tool Calling (Qwen3, Ling 3.0)**: Jinja dot-notation integer support (b10933) enables seamless parsing of `{1: 'Bob'}.1`-style tool outputs — ensure your frontend expects this format.  
- **Multi-GPU & Continuous Batching**: Avoid `-np 3` or higher on mixed GPU setups until #28813 is resolved. Use single-process-per-GPU with explicit `--gpu-layers` instead.  
- **Vulkan Users (AMD/Intel)**: Monitor for prompt slowdowns post-b10780. Intel users gain IQ3_S support soon — consider upgrading drivers.  
- **Build & CI**: If using Clang + PCH, update to b10932+ to avoid cache invalidation loops.  

> **Recommendation**: Pin to `b10929` or earlier if deploying critical production systems on CUDA/Blackwell. Monitor PRs #28823 and #28633 for imminent fixes. Use `--log-json` (PR #28586) for structured logging to detect silent failures.

🔗 [llama.app](https://llama.app) | [GitHub Repo](https://github.com/ggml-org/llama.cpp)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest — 2026-09-13**

---

### **Today's Highlights**  
Ollama’s latest activity is dominated by critical stability and correctness fixes for multimodal and tool-using models, particularly around Qwen 3.8, Gemma 4, and structured output parsing. A surge of PRs addresses long-standing issues in chat truncation, tool-call streaming, and GPU memory management, with multiple fixes now in review for imminent release.

---

### **Releases & Breaking Changes**  
No new releases in the past 24 hours.  
**Note**: `ollama create --quantize` now leaves unreferenced F16 blobs in `~/.ollama/models/blobs` (#18416), which may cause disk bloat — workaround: manually clean blobs after quantization.  
Also, the built-in agent has been removed in PR #18393, reverting CLI to the classic chat interface.

---

### **New Model & Hardware Support**  
- **New Model Support**: `Hy4` (Tencent) model request opened (#18287); no official support yet.  
- **Hardware**:  
  - ROCm backend on AMD Strix Halo (gfx1151) now confirmed to leak KV state across requests (#17847).  
  - Linux hybrid graphics (Intel iGPU + RTX 4080) triggers `llama-server SIGABRT` during device selection (#18412).  
  - Jetson Orin Nano 8GB fails to load Gemma 4 E4B multimodal due to OOM from projector (#18396).  
- **Quantization**: `--quantize` from safetensors no longer cleans up unquantized F16 blobs (#18416) — a regression.

---

### **Performance & Optimization**  
- **Memory**:  
  - `/api/embed` under sustained load exhausts loopback ports on Windows due to disabled HTTP keep-alive (#18392).  
  - PR #18407 preserves imported GGUF blobs post-validation, avoiding redundant 50GB+ tensor copies.  
- **Throughput**:  
  - PR #18399 introduces `OLLAMA_CONTEXT_SHIFT` to reject over-long prompts instead of silently truncating — improves reliability for batch pipelines.  
- **Latency**:  
  - PR #18413 ensures reasoning completes before emitting `web_search` tool calls, preventing broken Codex replay workflows.

---

### **Stability & Regressions**  
*Ranked by severity and impact*:

1. **Critical**: Qwen 3.8 tool loops fail with `500: no user query found in messages` (#17778) — **fixed in PR #17894**.  
2. **Critical**: ROCm KV state bleed between requests on Strix Halo (#17847) — no PR yet; affects multi-turn inference reliability.  
3. **High**: Gemma 4 tool calls with space-containing keys (e.g., `"Basic LLM Chain"`) fail JSON parsing (#18400, #18398) — **two PRs open**.  
4. **High**: Jetson Orin Nano OOMs on Gemma 4 E4B multimodal projector (#18396) — no fix yet; blocks edge multimodal deployment.  
5. **High**: `ollama create --quantize` leaks unreferenced F16 blobs (#18416) — **regression in 0.34.0**.  
6. **Medium**: Windows PowerShell window flashes on app launch (#18415); harmless but UX-degrading.  
7. **Medium**: Silent truncation of chat history with no user notification (#14259) — **PR #17894 partially addresses this**.

---

### **What This Means for Application Developers**  
- **Agents & Tool Use**: If you rely on Qwen 3.8 or Gemma 4 with tool calling, **do not deploy in production until PRs #17894, #18400, and #18413 are merged** — tool call ordering, key parsing, and context truncation are currently broken.  
- **Embedding Pipelines**: On Windows, batch `/api/embed` calls risk port exhaustion — implement connection pooling or retry logic with backoff (#18392).  
- **Edge Deployment**: Jetson Orin Nano users must avoid multimodal Gemma 4 variants until memory projector fixes land (#18396).  
- **Model Management**: Clean `~/.ollama/models/blobs/` manually after quantization to avoid disk bloat (#18416).  
- **Future-Proofing**: `OLLAMA_CONTEXT_SHIFT` (PR #18399) will soon allow you to enforce strict prompt length limits — prepare to handle 400 errors instead of silent truncations.  

**Action Items**:  
- Monitor PRs #17894, #18400, #18413 for merge — these resolve core agent-breaking bugs.  
- Avoid Ollama 0.34.0 for production multimodal or tool-using workflows until fixes are released.  
- Consider pinning to 0.33.x if stability is critical.

🔗 [PR #17894](https://github.com/ollama/ollama/pull/17894) | [PR #18400](https://github.com/ollama/ollama/pull/18400) | [PR #18413](https://github.com/ollama/ollama/pull/18413) | [Issue #18416](https://github.com/ollama/ollama/issues/18416)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest — 2026-09-13**

---

### **Today's Highlights**  
Today’s activity is dominated by critical fixes in proxy routing, cost tracking, and Anthropic/Vertex AI interoperability, with 30+ new issues filed — primarily around streaming reasoning loss, budget enforcement bugs, and misconfigured OpenAI-compatible model routing. Notably, PR #40923 enforces OAuth admission for delegated MCP routes, while PR #40919 syncs pricing for 278 models across 5 providers, addressing long-standing drift in cost visibility.

---

### **Releases & Breaking Changes**  
No new releases in the last 24 hours. No API or config-breaking changes reported. However, v1.84.0 remains a known source of regressions: Vertex AI health status remains incorrectly flagged as “Unhealthy” (#28206), and OpenAI-prefixed self-hosted models silently break multimodal via `/v1/messages` routing (#40780).

---

### **New Model & Hardware Support**  
- **New models added**: 34 new models synced via PR #40919 across Anthropic, Google Gemini, OpenAI, Mistral, and Cohere — including newly listed Gemini Live variants and DeepSeek models (#30430).  
- **Provider support**: Tencent TokenHub now appears in the UI model dropdown (#40924).  
- No new hardware or quantization format support reported.

---

### **Performance & Optimization**  
- **Latency reduction**: PR #40923 eliminates redundant anonymous MCP traffic, reducing upstream round-trips for delegated tool calls.  
- **Caching efficiency**: PR #40627 fixes overbilling of cached audio tokens by correctly applying cache-read rates, improving cost accuracy for real-time audio workflows.  
- **Logging overhead**: PR #40912 caps noisy Redis timeout logs during bursts, reducing log volume by >90% in high-throughput deployments.  
- *No measurable throughput or kernel-level optimizations reported.*

---

### **Stability & Regressions**  
**Critical (High Severity)**  
- **#40887**: Streaming responses lose reasoning progress — breaks agent introspection and caching. *No fix PR yet.*  
- **#40780**: `openai/`-prefixed models route `/v1/messages` to Responses API, silently dropping multimodal input. *Critical for self-hosted vLLM/TGI users.*  
- **#23741**: Anthropic 400 errors due to `vector_store_ids` being passed — breaks Claude 3.5 tool use with vector stores. *High impact for RAG agents.*  
- **#40851**: `session_id` in spend logs is overwritten, breaking multi-request session grouping.  

**High Severity**  
- **#40649**: Admin UI persists derived pricing, causing Azure spend to report as $0.  
- **#40050**: False budget exceeded errors on Claude Code — triggers 429s despite actual spend being under limit.  
- **#40890**: `/v1/messages` passthrough drops adaptive thinking metadata — breaks Anthropic-native reasoning workflows.  

**Fixes in Progress**  
- PR #40922 resolves team callback silencing and GCS flush failures.  
- PR #40915 fixes Gemini Live session billing (internal copy of #37075).  
- PR #40923 enforces OAuth admission for MCP delegation.  

*Total critical bugs: 5 | Fix PRs: 4 (partial coverage)*

---

### **What This Means for Application Developers**  
- **Avoid `openai/` prefix for self-hosted models** — it triggers broken `/v1/messages` routing. Use direct provider names (e.g., `vllm/`, `sglang/`) instead.  
- **Agent reasoning workflows are fragile** — streaming responses from Anthropic/Vertex models may lose `reasoning_items` and `reasoning_text`. Monitor logs for missing context.  
- **Cost tracking is unreliable** — budget enforcement is broken for Claude Code, OCR pricing ignores deployment overrides, and session IDs are lost. Audit spend logs manually until PRs land.  
- **MCP tool calls are now authenticated** — if you use delegated MCP routes, ensure OAuth admission is configured (PR #40923).  
- **Update model pricing** — 34 new models are now supported; run `litellm --update-models` to sync.  

> *Recommendation*: Hold off on upgrading to v1.84.0+ until fixes for #28206, #40780, and #23741 are merged. Use v1.83.x for production agent deployments requiring Anthropic or Vertex AI tool use.

---

**Relevant Links**  
- [Anthropic vector_store_ids bug](https://github.com/BerriAI/litellm/issues/23741)  
- [OpenAI-prefixed model multimodal break](https://github.com/BerriAI/litellm/issues/40780)  
- [Streaming reasoning loss](https://github.com/BerriAI/litellm/issues/40887)  
- [Pricing sync PR](https://github.com/BerriAI/litellm/pull/40919)  
- [MCP OAuth admission fix](https://github.com/BerriAI/litellm/pull/40923)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest — 2026-09-13**

---

### **1. Today's Highlights**  
Unsloth’s engineering team is aggressively resolving critical stability and UX regressions in the Desktop and Studio interfaces, with 72 PRs updated in 24 hours — including fixes for model download failures, MCP deduplication bugs, and GPU backend misconfigurations. A flurry of high-impact PRs has landed to unblock mainline CI, restore ROCm support, and improve inference observability, signaling a major stabilization push ahead of a planned release cycle.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, **breaking changes are actively being mitigated**:  
- PR #10825 restores TRL patches on GPU hosts by removing `UNSLOTH_ALLOW_CPU=1` from Docker images, fixing Trainer initialization failures.  
- PR #10740 addresses TRL 0.20+ incompatibilities by removing deprecated kwargs (`max_seq_length`, `tokenizer`) from Studio training flows.  
- PR #10837 updates proxy logic for Azure/OpenAI gateways to use `max_completion_tokens` instead of `max_tokens`, aligning with newer API expectations.  

👉 *Migration note:* Users on TRL 0.20+ or Azure gateways must update to latest `unsloth` to avoid training or inference failures.

---

### **3. New Model & Hardware Support**  
- **New Model Support**:  
  - Requested support for **DeepSeek V4.1 Flash GGUF** (#10838) — actively under review.  
  - **Qwen3.5-9B LoRA** training performance validated on B200 (#10744).  
  - **Qwen 3.8 Flash Next (Q5_K_XL)** model download failure due to missing `hf_xet` dependency (#10840) — now flagged for inclusion.  
- **Hardware & Backend**:  
  - **AMD ROCm support** added via new Docker image for RDNA2–RDNA4 and CDNA (#10820), enabling training on Instinct MI300X and similar.  
  - **Windows ROCm** now explicitly capped at `accelerate < 1.15` due to `torch.distributed.tensor` incompatibility (#10819).  
  - **GGUF + llama.cpp** gains live progress tracking in Studio API monitor (#10834).  

---

### **4. Performance & Optimization**  
- **Qwen3.5-9B LoRA SFT** on NVIDIA B200 saw **22% throughput improvement** (0.85s → 0.66s per step) via CPU-side overhead reduction (#10744).  
- **Studio inference latency** visibility improved with real-time `Prompt processing · N%` and `Token generation` phase indicators (#10834).  
- **Model loading** now supports “Download only” mode for image models without automatic load, reducing memory pressure (#10789).  
- **Text encoder precision** controls exposed for image models (FP8, INT8, NVFP4) (#10788), enabling fine-grained memory/performance tuning.  

---

### **5. Stability & Regressions**  
*Top 5 Critical Issues Reported Today (all open, no fixes merged yet):*  

1. **🚨 MCP Deduplication Breaks Tool Calls** — Systematic truncation of legitimate repeated tool calls (e.g., compile commands) (#10839, #10379). *High impact on agent workflows.*  
2. **🚨 AppImage Missing `hf_xet`** — Prevents downloading large GGUF models (e.g., Qwen 3.8 Flash Next) (#10840).  
3. **🚨 Safety Bypass via “Full Access” Tool Permissions** — Allows `rm`, `reboot` commands to bypass sandbox (#10835). *Critical security flaw.*  
4. **🚨 Studio Crash on New Chat** — `tapClientLookup: Index 1 out of bounds` causes frequent desktop crashes (#10288).  
5. **🚨 ROCm Training Broken on Windows** — `accelerate 1.15` breaks due to missing CUDA backend symbols (#10819).  

*Fixes in Progress:*  
- PR #10836 resolves false `ALL_COLUMNS_DROPPED` warnings in data recipes (#10738).  
- PR #10832 fixes CI breakage on `main` caused by stale assertions, unblocking 25+ PRs.  
- PR #10825 and #10819 directly address Docker and ROCm regressions.  

---

### **6. What This Means for Application Developers**  
- **Agents & Tool Use**: If your app relies on repeated tool calls (e.g., code generation, batch API calls), **disable deduplication** via #10379 once available — otherwise, your agent will silently fail.  
- **Deployment**: Use **Docker images with GPU support** — avoid `unsloth:latest` until #10825 is merged. For AMD users, switch to the new ROCm image (#10820).  
- **Inference Observability**: Studio now shows real-time prompt/token phases — critical for debugging latency in production gateways (#10834).  
- **Security**: **Never trust “Full Access”** tool permissions in production — a patch is pending (#10835). Consider implementing external sandboxing.  
- **Model Management**: New “Reveal in Folder” and “Delete” actions for local models (#10833) simplify CI/CD integration and local model hygiene.  

> 🔧 *Pro Tip:* Install `hf_xet` manually if using AppImage: `pip install hf_xet` — or switch to native install to avoid download failures (#10840).

---

**Relevant Links**:  
- [PR #10832: Fix main CI breakage](https://github.com/unslothai/unsloth/pull/10832)  
- [PR #10825: Restore TRL patches on GPU](https://github.com/unslothai/unsloth/pull/10825)  
- [PR #10820: Add ROCm Docker image](https://github.com/unslothai/unsloth/pull/10820)  
- [Issue #10839: MCP truncation](https://github.com/unslothai/unsloth/issues/10839)  
- [Issue #10840: Missing hf_xet in AppImage](https://github.com/unslothai/unsloth/issues/10840)  
- [PR #10834: Inference phase monitoring](https://github.com/unslothai/unsloth/pull/10834)  
- [Issue #10379: Disable tool deduplication](https://github.com/unslothai/unsloth/issues/10379)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*