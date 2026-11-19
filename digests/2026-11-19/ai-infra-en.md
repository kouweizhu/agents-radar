# AI Infrastructure Digest 2026-11-19

> Generated: 2026-11-19 03:48 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report based on all the digests I just generated for vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth. Let me analyze the data from each project and create a comprehensive comparison report.

Let me review the key metrics from each project:

**vLLM:**
- Issues: Top 30 by comment count shown
- PRs: Top 20 by comment count shown
- Releases: None in last 24h
- Activity: Very high - 63 comments on Rust frontend RFC

**SGLang:**
- Issues: Multiple active issues
- PRs: Multiple active PRs


- Releases: None in last 24h
- Activity: High ROCm optimization focus

**llama.cpp:**
- Releases: 10 commits in last 24h
- Activity: High backend diversification (OpenVINO, CUDA, Vulkan, OpenCL, SYCL, WASM, Metal)

**Ollama:**
- Releases: None in last 24h
- Activity: CVE reported, various fixes

**LiteLLM:**
- Releases: v1.109.2 with Docker cosign verification
- Activity: Database read-replica issues, routing fixes

**Unsloth:**
- No recent releases but strong PR momentum, with focus on diffusion training and multi-GPU optimization

Now I'm looking at the quantitative metrics across all six projects—llama.cpp has the most activity with 10 recent commits, while vLLM shows the most discussion engagement through comments. I need to organize this data into a comparison report that highlights the key differences in release cadence, activity levels, and technical focus areas.
</think>


# AI Infrastructure Ecosystem — Cross-Project Comparison Report
**Date: 2026-11-19 | Audience: Infrastructure Engineers & Technical Decision-Makers**

---

## 1. Ecosystem Overview

The AI inference infrastructure layer is undergoing simultaneous fragmentation and consolidation. Six major open-source projects are actively competing and complementing each other across serving engines, local runtimes, LLM gateways, and fine-tuning frameworks. Today's activity reflects a field converging on three shared obsessions: **ROCm/AMD GPU optimization** (vLLM, SGLang, Unsloth all targeting new MI300 and MI355X hardware), **speculative and recurrent decoding** (DFlash, ngram, MTP across multiple projects), and **quantization diversity** (MXFP4, NVFP4, FP8, W4A16, Q4_K variants proliferating). The ecosystem is maturing from "will it run?" to "which configuration gives the best throughput-per-dollar?" — with an increasingly sharp split between cloud-scale serving engines (vLLM, SGLang) and local/edge runtimes (llama.cpp, Ollama).

---

## 2. Activity Comparison

| Project | Releases (24h) | Notable PRs | Notable Issues | Community Signal |
|---------|---------------|------------|----------------|-----------------|
| **vLLM** | 0 | 20+ | 30 (top 30 by comments) | 🔥 Rust frontend RFC at 63 comments; intense AMD focus |
| **SGLang** | 0 | 8 | 6 open bugs | 🔥 SGLang 1.0 release tracker active; ROCm GLM optimization stacked |
| **llama.cpp** | **10 commits** | 5 | 10 (top issues) | High backend diversification; 8 distinct backend targets |
| **Ollama** | 0 | 9 | 10+ | ⚠️ CVE reported (unconfirmed severity); Metal runner active |
| **LiteLLM** | **v1.109.2** | 7 | 6 (critical/high) | DB read-replica deadlock; Rust JWT auth landing |
| **Unsloth** | 0 | 9 | 4 | Diffusion training expands to non-bf16; gfx1200 QLoRA broken |

**Observation:** llama.cpp is the most release-intensive project by commit volume; LiteLLM and vLLM lead in governance maturity (signed releases, structured RFC processes). The absence of any vLLM or SGLang releases in 24 hours does not indicate stagnation — both have large stacked PRs waiting for CI.

---

## 3. Model Support Race

### Who Supports What — Today's State

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|---------|
| **Qwen3.8** (MoE, MTP) | ✅ ROCm perf | ✅ AMD ROCm active | ✅ MTP broken (#23577) | ✅ Tool calls in-progress fix | — |
| **DeepSeek-V4.1-Flash** | ✅ ROCm B300 DEP | ✅ NPU + Mooncake PD | ✅ RPC broken (#30794) | — | — |
| **GLM-5.3-Flash** | ✅ ROCm MI355X | ✅ **3 stacked PRs** | — | — | — |
| **Muse Spark (NVFP4)** | ✅ PR #64552 | — | — | — | — |
| **DSpark (DFlash drafts)** | — | — | ✅ Log-SNR conditioning | — | — |
| **FLUX.1 / FLUX.2-klein** | — | — | — | — | ✅ AdaLN −28% per step |
| **Wan 2.2 5B** | — | — | — | — | ✅ Non-bf16 training |
| **HunyuanImage 2.1** | — | — | — | — | ✅ Distilled support fixed |
| **VoxCPM2** | — | — | ✅ Multi-modal MTMD | — | — |
| **Kyutai Hibiki (TTS)** | — | — | ✅ Full-duplex server | — | — |
| **BerryLM (hybrid MoE)** | — | — | ✅ Architecture support | — | — |
| **Decision models (d1-2B)** | — | — | — | ✅ Batch sizing fixed | — |

### Winner by Category
- **Cloud-scale MoE / long context:** **vLLM and SGLang** — both targeting MI355X, both with pipeline parallelism and distributed serving
- **Local LLM inference diversity:** **llama.cpp** — 8 backends (CUDA, HIP, Vulkan, OpenCL, SYCL, Metal, WASM, OpenVINO); no competitor comes close
- **Local LLM ease-of-use:** **Ollama** — single-binary deployment, broadest non-technical audience
- **Fine-tuning speed:** **Unsloth** — unmatched for LoRA/DiT training on consumer GPUs; now extending to diffusion and TTS

---

## 4. Performance Frontier

Today's optimization effort is concentrated in five distinct zones:

### KV Cache & Memory
| Project | Focus |
|---------|-------|
| **vLLM** | KV offload with request-level promotions (RFC), large-page allocator (RFC), prefix caching for hybrid Mamba models, DiffKV prefill tiling (3× speedup) |
| **SGLang** | External cache linker with Mooncake direct integration, weight cache IPC for speculative targets |
| **llama.cpp** | Vulkan RT Core-assisted KV page filtering, OpenCL adjustable KV scratch padding |
| **Unsloth** | Text encoder streaming for 8 GB cards (82.7s → 36.7s) |

### Quantization
| Project | Focus |
|---------|-------|
| **vLLM** | MXFP8 (W8A16 misrouted to W8A8 — bug), NVFP4 on B300/MI355X, W4A16 HummingLinearKernel non-determinism, FP8 ROCm Triton backend |
| **llama.cpp** | Fused KV dequant for q8_0/q4_0/f8_e4m3 in CUDA flash-attention, dp4a path for KQ matmul in OpenCL |
| **Unsloth** | LoRA on INT8/FP8 builds (bug fixed) |

### Speculative & Recurrent Decoding
| Project | Focus |
|---------|-------|
| **vLLM** | ngram spec decode + structured outputs bug (high severity), RL training direct weight reload |
| **SGLang** | dLLM multi-row mixed scheduling, DFlash2 on Metal (batched proposals + state reconstruction) |
| **llama.cpp** | DFlash spec broken on Qwen3-4B, MTP repeated token on Qwen3.6-27B after long sessions |
| **Ollama** | Per-request speculative decoding metrics (acceptance rate surfaced in API) |

### Distributed Serving
| Project | Focus |
|---------|-------|
| **vLLM** | Pipeline parallelism chunking, bounded retryable NCCL weight updates, per-field tensor layouts for PP transport |
| **SGLang** | dLLM disaggregated prefill/decode, Mooncake PD transfer for NPU, mixed prefill+decode scheduling |
| **LiteLLM** | Rust JWT auth + model restamping for gateway-level disaggregation |

### Kernel Optimization
| Project | Focus |
|---------|-------|
| **llama.cpp** | fastdiv integer division in conv2d (CUDA), SYCL comm_exchange_fast V2 (scales with allreduce frequency), OpenVINO expanded NPU/GPU coverage |
| **vLLM** | DeepGEMM native MQA logits for HY4 Flash, GDN Triton/FLA prefill (Hopper H20 correctness bug), HiSparse page reclamation |
| **SGLang** | Breakable prefill graphs for HIP KDA on gfx950, single FlyDSL kernel for KDA MTP verify |

---

## 5. Layer Positioning

```
┌─────────────────────────────────────────────────────────────────┐
│                    APPLICATION / AGENT LAYER                     │
│         (prompt engineering, structured outputs, tools)          │
└────────────────┬────────────────────────────────────────────────┘
                 │  LiteLLM (gateway, routing, budget, auth)
┌────────────────▼────────────────────────────────────────────────┐
│                  SERVING / GATEWAY LAYER                         │
│  vLLM ────────────────── SGLang ─────────────────── LiteLLM     │
│  (cloud-scale        (cloud-scale         (multi-provider       │
│   inference engine)   inference engine)     routing gateway)    │
│                                                                 │
│  Mooncake ──── distributed KV ──── disaggregated prefill/decode │
└────────────────┬────────────────────────────────────────────────┘
                 │  llama.cpp (local), Ollama (local)
┌────────────────▼────────────────────────────────────────────────┐
│                    LOCAL / EDGE RUNTIME LAYER                    │
│  llama.cpp ─────────────────────────────── Ollama                │
│  (8 backends, full control,            (single-binary,          │
│   portable, research-grade)             consumer-friendly)      │
└────────────────┬────────────────────────────────────────────────┘
                 │  Unsloth (fine-tuning)
┌────────────────▼────────────────────────────────────────────────┐
│                  TRAINING / FINE-TUNING LAYER                    │
│  Unsloth (LoRA/DiT, consumer GPU, diffusion, TTS fine-tuning)   │
└─────────────────────────────────────────────────────────────────┘
```

**Key differentiators by layer:**

- **Serving engines (vLLM vs SGLang):** vLLM leads in RFC-driven architectural proposals and Rust frontend investment; SGLang leads in scheduler innovation (dLLM, mixed prefill/decode rounds) and NPU backend work. Both are converging on similar performance targets with different implementation philosophies.

- **Gateway (LiteLLM):** Positioned as the multi-cloud abstraction layer, not competing on raw inference speed but on routing intelligence, budget enforcement, and observability. The Rust JWT auth and model restamping work signals a shift toward gateway-level disaggregation (prefill gateway + serving engine).

- **Local runtimes (llama.cpp vs Ollama):** llama.cpp is the engine; Ollama is the product. llama.cpp ships 10 commits/day across 8 backends and owns the research-to-deployment pipeline. Ollama owns the consumer developer experience. The CVE reported in Ollama today highlights the surface area difference: Ollama's Go binary exposes a broader attack surface than llama.cpp's C/CUDA core.

- **Fine-tuning (Unsloth):** Positioned at the intersection of training and inference, uniquely able to optimize both sides for consumer hardware. The diffusion training expansion (FLUX, Wan, HunyuanImage) represents a strategic pivot from language-only to multimodal fine-tuning.

---

## 6. Trend Signals

### 🔴 Security Surface Expanding
The CVE reported against Ollama's Go binary (#19771) is the second security signal this cycle, following vLLM's Confidential Computing garbage output bug (#57224). As inference infrastructure becomes network-adjacent (gateways, agent frameworks), attack surface is growing faster than security hardening. **Watch:** CVE disclosure timeline; expect coordinated hardening across all gateway and serving projects.

### 🔴 ROCm AMD Is Now a First-Class Target
Three projects (vLLM, SGLang, Unsloth) are actively optimizing for MI355X (gfx950) and B300 simultaneously. This is not experimental — it's coordinated infrastructure investment driven by AMD's datacenter roadmap. **Implication:** By mid-2027, expect ROCm parity with CUDA for most inference workloads. Teams locked to NVIDIA-only should begin ROCm evaluation now.

### 🟠 Speculative Decoding Is Breaking in Production
ngram spec decode with structured outputs (vLLM), MTP repeated tokens (llama.cpp), DFlash spec regression (llama.cpp), and DFlash2 on Metal (Ollama) — all have active correctness bugs today. Speculative decoding is being deployed faster than it is being hardened. **Implication:** Do not use speculative decoding with structured output requirements or long-session applications until these are resolved.

### 🟠 Rust Frontend Convergence
Both vLLM and LiteLLM are investing in Rust-native paths (vLLM: Rust frontend feature parity at 63 comments; LiteLLM: Rust repository for JWT/auth). This reflects the inference industry's move toward Rust for performance-critical paths while keeping Python for ergonomics. **Watch:** When vLLM's Rust frontend reaches parity, expect a significant performance envelope improvement for high-concurrency scenarios.

### 🟡 Diffusion Training Is a New Battleground
Unsloth's expansion into FLUX, Wan 2.2, and HunyuanImage fine-tuning — with AdaLN precomputation delivering 28% per-step speedup — marks diffusion as the next competitive frontier beyond language models. vLLM's recent `vllm.Render` features (derender, completions) suggest serving-layer interest as well.

### 🟡 Multi-GPU and Disaggregation Maturing
SGLang's dLLM multi-row mixed scheduling, vLLM's per-field tensor layouts for PP, and LiteLLM's model restamping all point toward a future where inference pipelines are disaggregated across specialized components (prefill gateway, decode engine, KV store). The Mooncake integration in both vLLM and SGLang for native distributed KV transfer is the most concrete signal of this architectural direction.

### What Agent & Application Developers Should Watch

| Signal | Timeline | Action |
|--------|----------|--------|
| Ollama CVE disclosure | Days | Audit network exposure; prepare upgrade path |
| ROCm MI355X parity | 2–4 months | Begin AMD ROCm testing for non-critical workloads |
| Speculative decoding correctness bugs | 2–6 weeks | Avoid for structured outputs / long sessions |
| vLLM Rust frontend parity | 1–2 quarters | Monitor; potential performance inflection |
| SGLang 1.0 release | 1–2 quarters | Track migration requirements from 0.x |
| Diffusion fine-tuning on consumer GPU | Now | Unsloth viable for FLUX/Wan fine-tuning; test today |
| LiteLLM DB read-replica deadlock | Days | Monitor fix PR; add external watchdog to proxy |
| Multi-GPU diffusion (Unsloth) | Now | Test CFG replica placement on dual-GPU setups |

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the provided GitHub data for vLLM and generate a structured digest for 2026-11-19.

Looking at the data:

**Latest Releases**: None in last 24h

**Latest Issues (top 30 by comment count)**:
1. #44280 - Rust Frontend Feature Parity roadmap (63 comments) - very active
2. #57149 - ROCm AMD Qwen3.8-2.4T-A95B gfx950/MI355X performance (37 comments)
3. #49569 - Enable mypy in tests directory (30 comments)
4. #59575 - ROCm AMD Qwen3.8-Flash-Next gfx950/MI355X performance (27 comments)
5. #66782 - KV Offload request-level promotions RFC (18 comments)
6. #54477 - Direct Weight Reload for RL Training RFC (17 comments)
7. #45238 - Hybrid-model prefix caching bug (13 comments)
8. #57406 - GLM 5.3 performance optimization (13 comments)
9. #52916 - Adaptive spin grace for shm_broadcast (12 comments)
10. #49694 - Ngram spec decode + structured outputs bug (12 comments)
11. #64018 - ROCm AMD Muse Spark performance (11 comments)
12. #65545 - Lifecycle hooks for endpoint plugins (10 comments)
13. #41373 - Installation on GH200 nodes (10 comments) - CLOSED
14. #57224 - Silent garbage output in Confidential Computing (10 comments) - CLOSED
15. #66232 - W4A16 HummingLinearKernel non-determinism bug (8 comments)
16. #64401 - Large-page KV cache allocator RFC (8 comments)
17. #61095 - DiffKV prefill tiling perf improvement (7 comments)


18. #67674 - Prefix caching performance issue with Triton/FLA GDN (7 comments)
19. #64374 - Bounded retryable NCCL weight updates RFC (6 comments)
20. #55152 - Guidance backend tool-calling bug (6 comments) - CLOSED
21. #66858 - Tools + response_format RFC (6 comments)
22. #67909 - CPU offloading cache lifecycle metrics RFC (6 comments)
23. #65359 - FlashInfer PcieIpcAllGatherWorkspace integration (5 comments)
24. #67802 - Dynamic FP8 Amax staleness bug (5 comments)
25. #67652 - vllm.Render derender feature (5 comments)
26. #50127 - Shared Context Parallelism RFC (5 comments)
27. #65193 - MXFP8 kernel selection bug (5 comments) - CLOSED
28. #53421 - KV Hint Envelope RFC (5 comments)
29. #65385 - GDN Triton/FLA prefill wrong results on Hopper (4 comments) - CLOSED
30. #65503 - vllm.Render completions feature (4 comments)

**Latest Pull Requests (top 20 by comment count)**:
1. #61091 - ROCm FP8 Triton linear backend (ROCm, Perf)
2. #67350 - Per-field tensor layouts for pipeline transport (PP, MRV2)
3. #68568 - ROCm CI retarget to MI300 queue
4. #68366 - DeepSeek-V4.1-Flash decode optimization for B300
5. #68531 - OOM explanation improvement
6. #68317 - OpenCUA multimodal processor kwargs bugfix
7. #68547 - Tool call cut off by max_output_tokens bugfix
8. #63521 - ORCA header format logging fix
9. #68254 - Turn off extensible KV cache for Unlimited-OCR-2
10. #68567 - Mooncake KV Connector native array API
11. #64552 - Muse Spark NVFP4 quantization
12. #68467 - Breakable CUDA graphs for MXFP4
13. #68566 - Cap nvidia-cudnn-frontend below 1.33
14. #68364 - Native DeepGEMM MQA logits for HY4 Flash
15. #68565 - Rust frontend metadata-only input capability
16. #68560 - Chunk lone long prefill under PP
17. #68072 - ROCm MoRIIO heterogeneous-TP NVFP4 KV fix
18. #67185 - HiSparse page reclamation fix
19. #66342 - Compressed tensors regex rewrite on load
20. #67475 - Preserve lanes when packing narrow int quantized weights

Several key themes emerge from the recent activity. ROCm and AMD GPU support is a major focus, with multiple PRs addressing performance optimizations and bug fixes for MI300 and B300 configurations. There's significant work on quantization approaches including NVFP4 and MXFP4, along with tensor parallelism improvements for pipeline transport. The Mooncake KV connector integration continues, while Rust frontend development progresses with metadata handling improvements.

Frontend stability is being addressed through various bug fixes around tool calls, multimodal processing, and ORCA format handling. Performance work includes prefix caching refinements, DiffKV prefill tiling, and DeepSeek-V4.1 Flash optimizations. Several critical bugs have been identified and fixed, including OOM issues and Confidential Computing problems. The community is actively RFC-ing architectural changes around KV offloading, large-page allocation, and RL training weight reloading.
</think>


# vLLM Daily Digest — 2026-11-19

## 1. Today's Highlights

The vLLM project is seeing intense activity around ROCm/AMD GPU optimization with multiple stacked PRs targeting MI355X (gfx950) and B300 hardware, alongside continued Rust frontend parity work now at 63 comments. A critical dependency version conflict emerged: `nvidia-cudnn-frontend` 1.33.0 breaks FlashInfer 0.7.4's cuDNN path, requiring an immediate version cap. Several correctness bugs affecting Confidential Computing, GDN prefill on Hopper, and ngram speculative decoding with structured outputs remain open.

---

## 2. Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| **Dependency Pin Required** | `nvidia-cudnn-frontend` >=1.33.0 breaks FlashInfer 0.7.4. PR #68566 caps it at `<1.33` until FlashInfer update lands. | [#68566](https://github.com/vllm-project/vllm/pull/68566) |

**No new releases** were published in the last 24 hours.

---

## 3. New Model & Hardware Support

| Category | Details | Link |
|----------|---------|------|
| **ROCm MI355X** | gfx950 optimization roadmap active for Qwen3.8-2.4T-A95B (Quark-MXFP4) and Qwen3.8-Flash-Next (GatedDeltaNet, QuerySparse Attention, MXFP4 MoE). | [#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **ROCm B300** | DeepSeek-V4.1-Flash specialized decode for DEP2/4/8 on B300 with data/expert parallelism. | [#68366](https://github.com/vllm-project/vllm/pull/68366) |
| **Muse Spark NVFP4** | Online `nvfp4_per_token` quantization of BF16 routed experts via ModelOpt checkpoint. | [#64552](https://github.com/vllm-project/vllm/pull/64552) |
| **GLM-5.3** | Performance optimization tracking for `glm_moe_dsa` architecture. | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **Unlimited-OCR-2** | Multimodal model now requires extensible KV cache to be disabled. | [#68254](https://github.com/vllm-project/vllm/pull/68254) |

---

## 4. Performance & Optimization

| Area | Change | Impact | Link |
|------|--------|--------|------|
| **ROCm FP8** | Native per-token FP8 Triton linear backend with RDNA4 (gfx1201) tuning. | Enables dynamic per-token activation scales on AMD. | [#61091](https://github.com/vllm-project/vllm/pull/61091) |
| **DiffKV Prefill** | BLOCK_M=128 + KV tile 64 on SM80 (non-FA3/FA4). | **3.0× speedup** on 200K-context chunks. | [#61095](https://github.com/vllm-project/vllm/issues/61095) |
| **DeepSeek-V4.1-Flash** | Specialized decode for B300 DEP2/4/8 (TP=1, shared MoE experts). | Optimized for MI300 deployments. | [#68366](https://github.com/vllm-project/vllm/pull/68366) |
| **MXFP4 CUDA Graphs** | Breakable CUDA graphs now enabled for MXFP4 quantized models. | Fixes runtime-M tile lookup freeze. | [#68467](https://github.com/vllm-project/vllm/pull/68467) |
| **FlashInfer TP Gathers** | Wire `PcieIpcAllGatherWorkspace` into `CudaCommunicator.all_gather`. | Reduces latency for small TP all-gathers (DeepSeek-V4.1-Flash). | [#65359](https://github.com/vllm-project/vllm/issues/65359) |
| **HY4 Flash DeepGEMM** | Native 16-head DeepGEMM MQA logits path. | Kernel-level optimization. | [#68364](https://github.com/vllm-project/vllm/pull/68364) |
| **Pipeline PP Chunking** | Chunk lone long prefill under pipeline parallelism. | Prevents single request from monopolizing all stages. | [#68560](https://github.com/vllm-project/vllm/pull/68560) |
| **Large-Page KV Allocator** | Draft RFC: one KV cache group per spec for large-page support. | Future memory efficiency gain. | [#64401](https://github.com/vllm-project/vllm/issues/64401) |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| 🔴 **High** | **GDN Triton/FLA prefill wrong/non-deterministic on Hopper (H20)** — `chunk_scaled_dot_kkt_fwd` autotune configs with BK < K and num_warps >= 4 are broken (Triton 3.6). | CLOSED | [#65385](https://github.com/vllm-project/vllm/issues/65385) |
| 🔴 **High** | **Confidential Computing silent garbage output** — V2 model runner's UVA views of pinned host memory are stale under CC. Workaround: `VLLM_USE_V2_MODEL_RUNNER=0`. | CLOSED | [#57224](https://github.com/vllm-project/vllm/issues/57224) |
| 🔴 **High** | **ngram spec decode + xgrammar + async scheduling** — verifier accepts grammar-illegal draft tokens → FSM errors, HTTP 500s, silent truncation under concurrency. | OPEN | [#49694](https://github.com/vllm-project/vllm/issues/49694) |
| 🟡 **Medium** | **W4A16 HummingLinearKernel non-deterministic across processes** on H100 (sm_90). Faster than default Machete but produces inconsistent results. | OPEN | [#66232](https://github.com/vllm-project/vllm/issues/66232) |
| 🟡 **Medium** | **Dynamic FP8 Amax includes stale token IDs from CUDA-Graph padding**. | OPEN | [#67802](https://github.com/vllm-project/vllm/issues/67802) |
| 🟡 **Medium** | **MXFP8 kernel ignores activation scheme** — weight-only (W8A16) checkpoints silently run W8A8. | CLOSED | [#65193](https://github.com/vllm-project/vllm/issues/65193) |
| 🟡 **Medium** | **Hybrid-model prefix caching drops to 0%** when Mamba checkpoint lands in request-unique tokens. | OPEN | [#45238](https://github.com/vllm-project/vllm/issues/45238) |
| 🟢 **Low** | **OpenCUA multimodal processor ignores kwargs** (`min_pixels`, `max_pixels`, `size`) from request. | PR #68317 | [#68317](https://github.com/vllm-project/vllm/pull/68317) |
| 🟢 **Low** | **Tool calls cut off by max_output_tokens** run on truncated input, then next turn reports `completed`. | PR #68547 | [#68547](https://github.com/vllm-project/vllm/pull/68547) |

---

## 6. What This Means for Application Developers

| Takeaway | Details |
|----------|---------|
| **Verify FlashInfer compatibility** | If using FlashInfer 0.7.4, ensure `nvidia-cudnn-frontend < 1.33`. Upgrade FlashInfer once support for 1.33+ is released. |
| **Avoid Confidential Computing + V2 runner** | Set `VLLM_USE_V2_MODEL_RUNNER=0` until #57224 fix lands. |
| **Hybrid Mamba models: prefix cache caveats** | Prefix caching silently drops to 0% for Mamba checkpoint boundaries. Monitor cache hit rates for hybrid models. |
| **Ngram spec decode + structured outputs: avoid concurrency** | Under concurrent requests, xgrammar verification fails silently. Consider disabling ngram speculation for structured output workloads until #49694 resolves. |
| **ROCm users: MI355X optimization active** | Significant performance improvements incoming for AMD MI355X (gfx950); track stacked PRs in #57149/#59575. |
| **Rust frontend nearing parity** | Rust frontend (`VLLM_USE_RUST_FRONTEND=1`) feature parity RFC at 63 comments — production adoption still experimental. |
| **MoRCIIO heterogeneous TP + NVFP4: fixed** | PR #68072 fixes heterogeneous-TP WRITE of NVFP4 KV pages for ROCm users. |

---

*Digest generated from vllm-project/vllm GitHub activity on 2026-11-19. All issue/PR links reference the main repository.*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the GitHub data for SGLang on 2026-11-19 to create a structured digest.

Key observations:

1. **Releases**: None in last 24h
2. **Major issues**: 
   - #26340: CUDA Coredump Tracker (382 comments) - very active
   - #42752: Flaky tests CI tracker (215 comments)
   - #50045: SGLang 1.0 Release Tracker (13 comments)
   - #49944: Unified Memory Roadmap (10 comments)
   - #49055: Rust server stack performance follow-ups

3. **New PRs in last 24h**:
   - AMD GPU optimizations for GLM-5.3-Flash (multiple PRs)
   - DeepSeek image chat routing by prefix cache
   - Scheduler fix for total_tokens load balancing
   - Diffusion model fixes (Krea-2, Wan2.1)
   - NPU workflow improvements
   - dLLM scheduler improvements
   - Various memory/CI fixes

4. **Bugs reported**:
   - macOS CPU device failure
   - Pre-fill batching issue
   - Multiple kernel bugs (scale parameters, sliding window)
   - Mooncake zero-copy read acceptance bug
   - Various AMD-specific issues

5. **Roadmap items**:
   - SGLang 1.0 stability release
   - Unified Memory development
   - Diffusion roadmap Q4
   - MLLM roadmap

Let me structure this into the requested format.
</think>


# SGLang Daily Digest — 2026-11-19

## 1. Today's Highlights

SGLang continues heavy investment in AMD ROCm optimization, with three new PRs targeting GLM-5.3-Flash on MI355X/MI300X. The SGLang 1.0 release tracker is gaining traction, signaling the project's shift toward stability hardening and compatibility guarantees. A critical scheduler bug affecting chunked prefill load balancing was identified and a fix is pending review.

---

## 2. Releases & Breaking Changes

**No releases in the last 24 hours.** However, the SGLang 1.0 release tracker (#50045) is active and represents the upcoming stability release. Expected changes include:

- Replacement of silent configuration changes with explicit errors
- Defined compatibility policy for the 1.x series
- Potential migration notes for upgrades from 0.5.x

🔗 https://github.com/sgl-project/sglang/issues/50045

---

## 3. New Model & Hardware Support

### AMD ROCm — GLM-5.3-Flash Optimizations
Three new PRs targeting MI355X (gfx950) and MI300X/MI325X (gfx942):

| PR | Focus | Hardware |
|----|-------|----------|
| [#48875](https://github.com/sgl-project/sglang/pull/48875) | Breakable prefill graphs for cached-prefix extends with HIP KDA | gfx950 |
| [#51126](https://github.com/sgl-project/sglang/pull/51126) | Single FlyDSL kernel for KDA MTP verify | gfx950 |
| [#51408](https://github.com/sgl-project/sglang/pull/51408) | FP8 v-absorb restoration + fused RoPE/KV-write for DSA | gfx942 |

### NPU Support
- PR [#51004](https://github.com/sgl-project/sglang/pull/51004): Added NPU release model data workflow for DeepSeek-V4-Flash with Mooncake PD transfer

---

## 4. Performance & Optimization

### Scheduler Improvements
**[#50088](https://github.com/sgl-project/sglang/pull/50088) — Fix total_tokens load balancing for chunked prefill**
- **Issue**: `--load-balance-method total_tokens` was not counting the unprefilled portion of chunked requests in `num_total_tokens`
- **Impact**: Incorrect routing decisions when chunked prefill is active

### dLLM Scheduler
Two PRs advancing disaggregated LLM scheduling:
- [#33190](https://github.com/sgl-project/sglang/pull/33190): Run multiple denoise forwards per scheduled FDFO round
- [#33196](https://github.com/sgl-project/sglang/pull/33196): Schedule prefill and decode rows into one mixed round

### Memory & Caching
- [#50789](https://github.com/sgl-project/sglang/pull/50789): Weight Cache now uses IPC only for speculative target model (reduces unnecessary IPC overhead for draft runners)
- [#49127](https://github.com/sgl-project/sglang/pull/49127): External cache linker metrics exposed for unified-radix-cache (Mooncake direct linker)

### Diffusion Performance
- [#51383](https://github.com/sgl-project/sglang/pull/51383): RFC for cold start reduction from 80s to ~20s for diffusion models (MiniMax-H3 target)

### Benchmarking
- [#51422](https://github.com/sgl-project/sglang/pull/51422): Fixed `sglang-bench` connection reuse under high concurrency

---

## 5. Stability & Regressions

### Critical Bugs

| Issue | Severity | Status | Summary |
|-------|----------|--------|---------|
| [#50915](https://github.com/sgl-project/sglang/issues/50915) | **High** | Open | macOS `--device cpu` crashes with RuntimeError in `get_cpu_ids_by_node` |
| [#51097](https://github.com/sgl-project/sglang/issues/51097) | **High** | Open | `k_scale` and `v_scale` in `launch_reshape_and_cache_flash` don't work independently |
| [#51096](https://github.com/sgl-project/sglang/issues/51096) | **High** | Open | `extend_attention_fwd_unified` reads wrong tree-mask bits on sliding-window layers |
| [#50920](https://github.com/sgl-project/sglang/issues/50920) | **Medium** | Open | Idle-burst prefill: first request waits for next batch (consecutive prefill overlap issue) |
| [#51106](https://github.com/sgl-project/sglang/issues/51106) | **Medium** | Open | `fused_hc_head` produces wrong results when `hc_mult` is not power of 2 |

### AMD-Specific Issues

| Issue | Severity | Status | Summary |
|-------|----------|--------|---------|
| [#51278](https://github.com/sgl-project/sglang/issues/51278) | **High** | Open | DeepSeek-V2-Lite MLA decode degrades with FP8 KV cache on MI355X when `SGLANG_AITER_MLA_PERSIST=0` |
| [#50130](https://github.com/sgl-project/sglang/issues/50130) | **Medium** | Open | Mooncake zero-copy reads accepted as full cache hits despite incomplete transfer |

### Infrastructure

- **CUDA Coredump Tracker**: Issue [#26340](https://github.com/sgl-project/sglang/issues/26340) continues accumulating coredumps from PR tests (382 comments)
- **Flaky Tests**: Issue [#42752](https://github.com/sgl-project/sglang/issues/42752) tracks CI failures with 215 comments; AMD test failures in [#45847](https://github.com/sgl-project/sglang/issues/45847)

---

## 6. What This Means for Application Developers

### Immediate Actions
1. **macOS CPU users**: Avoid `--device cpu` on macOS until [#50915](https://github.com/sgl-project/sglang/issues/50915) is resolved
2. **AMD ROCm users**: If using GLM-5.3-Flash on MI300X/MI325X, the pending PR [#51408](https://github.com/sgl-project/sglang/pull/51408) should significantly improve MLA decode performance once merged

### Planning Considerations
1. **SGLang 1.0 migration**: Teams on 0.5.x should monitor [#50045](https://github.com/sgl-project/sglang/issues/50045) for upgrade requirements and compatibility policy details
2. **Chunked prefill users**: If using `--load-balance-method total_tokens`, watch for [#50088](https://github.com/sgl-project/sglang/pull/50088) merge to avoid routing imbalance
3. **DeepSeek image chats**: Prefix cache routing coming in [#48937](https://github.com/sgl-project/sglang/pull/48937) will improve multi-turn image conversations

### Monitoring Recommendations
- Enable metrics for external cache linker if using Mooncake integration (fixes invisibility issue per [#49127](https://github.com/sgl-project/sglang/pull/49127))
- For diffusion workloads, the cold-start optimization RFC ([#51383](https://github.com/sgl-project/sglang/issues/51383)) suggests near-term improvements for Krea-2 and Wan2.1

---

*Digest generated from SGLang GitHub activity on 2026-11-19. All links reference github.com/sgl-project/sglang.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>Let me analyze this GitHub data for llama.cpp and create a structured digest for 2026-11-19.

Key items to extract:

**Releases (last 24h):**
1. b12531 - mtmd: support voxcpm2 (#32443)
2. b12530 - ggml: WASM Relaxed SIMD Enhancement (#19590)
3. b12529 - llama: fix sticky NaN in recurrent state (#31913)
4. b12528 - server: fix sleep state for v1/realtime (#32567)
5. b12527 - model: limite: reject mudd configs that index past mudd_tap_idx on load (#32562)
6. b12521 - webgpu: fix CI allow FA mask broadcast over Q batch (#32535)
7. b12503 - ggml-openvino: expand model support, optimize NPU/GPU and memory usage (#32172)
8. b12502 - CUDA: use MMQ for MoE on V100 (#32504)
9. b12500 - cuda: decode conv2d patch indices with fastdiv (#32492)
10. b12499 - vulkan: run rms_norm with runtime loop count on Qualcomm (#30824)

**Top Issues:**
1. #23577 - MTP with Qwen3.6 27B outputs repeated //// after long session (35 comments, open)
2. #24822 - Server: improve progress reporting (11 comments, closed)
3. #26116 - allow llama serve -hf to use llama-server in router mode (11 comments, open)
4. #32160 - Feature Request: ternary weights with 1024-wide Hadamard rotation (10 comments, open)
5. #30301 - [SYCL] RMS_NORM fails at launch on Arc Pro B60 (9 comments, open)


6. #26609 - CUDA illegal memory access in flash-attn with Qwen3.6-35B MoE (9 comments, closed)
7. #29526 - Vulkan backend: A770 long-running decode degradation (7 comments, closed)
8. #30794 - RPC: DeepSeek V4 output degenerates with two RPC workers (6 comments, open)
9. #32370 - Vulkan on i915: multi-ubatch prompt processing corrupts (6 comments, open)
10. #28863 - ROCm/gfx1100: Qwen3.8

-27B Q4_K_XL batch-1 tensor-split decode only 1.31x (5 comments, closed)

Continuing the issue tracking, I'm seeing several performance and compatibility problems across different hardware platforms. The CUDA memory access issue with Qwen3.6-35B MoE appears to be resolved, while Vulkan backend shows degradation on A770 during extended decode operations. RPC configuration with DeepSeek V4 and Vulkan prompt processing on i915 remain problematic, and there's a notable performance limitation with ROCm on the Qwen3.8 model where batch decoding achieves only marginal speedup.

Moving into the next set of issues, the focus shifts toward backend-specific challenges and feature requests. SYCL compilation fails for RMS normalization with OpenCL tensor operations dropping writes, while Vulkan multi-GPU configurations experience slowdown after initial requests. HIP and CUDA implementations have overflow and memory allocation problems, with one critical issue involving infinite spinning during address reservation. The DFlash specification appears incomplete in the documentation examples.

Additional concerns include high CPU consumption during GPU model execution, cache reuse failures for IMROPE models, and flash attention inefficiencies with quantized KV cache. OpenCL now supports KV scratch padding adjustments, CUDA enables fused KV dequantization, and OpenCL further adds dp4a support for KQ matrix multiplication in decomposed FA. Model support expands with BerryLM integration and Kyutai Hibiki real-time duplex capabilities.

New hardware and model support includes VoxCPM2, Inflect v3 TTS models, Qualcomm Hexagon with HMX and automatic f32 to f16 lowering, and Vulkan with RT Core-assisted KV filtering. WebGPU receives a 2D indexing fix for copy kernels, SYCL introduces comm_exchange_fast V2 with Intel leak stopgap and nsm Xe2/B70 fixes, and CUDA addresses fastdiv potential overflow issues before right shifting. DFlash draft models now support dspark GIDD log-SNR conditioning.
</think>


# llama.cpp Digest — 2026-11-19

## Today's Highlights

The 24-hour window saw substantial backend diversification with a new OpenVINO optimization pass (b12503), continued CUDA MoE tuning via mixed-materialization queues on legacy V100 hardware (b12502), and the landing of a critical fix for sticky NaN propagation in recurrent state (b12529). Multi-modal/text support also expanded with VoxCPM2 and Inflect v3 TTS model conversions merged, while the WebAssembly backend gains relaxed SIMD coverage for Q3_K/Q6_K quantizations.

---

## Releases & Breaking Changes

| Commit | Change | Notes |
|--------|--------|-------|
| **b12531** | `mtmd: support voxcpm2` (#32443) | VoxCPM2 multimodal model added to supported conversion pipeline |
| **b12530** | `ggml: WASM Relaxed SIMD Enhancement` (#19590) | Extends relaxed SIMD dot-product kernels; adds Q3_K/Q6_K support for WebAssembly |
| **b12529** | `llama: fix sticky NaN in recurrent state` (#31913) | Fixes garbling of subsequent requests when recurrent state holds NaN; closed #29830 |
| **b12528** | `server: fix sleep state for v1/realtime` (#32567) | Resolved server crash when a sleeping slot receives a `/v1/realtime` client connection (closed #32541) |
| **b12527** | `model: limite: reject mudd configs that index past mudd_tap_idx` (#32562) | Adds bounds validation at model load time for MUPD configurations |
| **b12521** | `webgpu: allow FA mask broadcast over Q batch` (#32535) | Fixes CI failure; corrects blk_batch_count handling in get_alloc_size |
| **b12503** | `ggml-openvino: expand model support, optimize NPU/GPU and memory` (#32172) | Improved SWA mask detection; memory footprint reduction for Intel NPU/GPU paths |
| **b12502** | `CUDA: use MMQ for MoE on V100` (#32504) | Enables mixed-materialization queues for MoE layers on older Volta hardware |
| **b12500** | `cuda: decode conv2d patch indices with fastdiv` (#32503) | Replaces three integer divisions per tile row with fastdiv; benefits implicit GEMM conv2d kernel |
| **b12499** | `vulkan: run rms_norm with runtime loop count on Qualcomm` (#30824) | Workaround for Qualcomm GPU compatibility; runtime loop unroll control |

**Migration note:** The NaN fix in b12529 may alter behavior for workloads that were silently producing corrupted output. Applications relying on NaN state persistence should verify expected outputs after upgrading.

---

## New Model & Hardware Support

### Models
| Model | Type | PR / Commit | Notes |
|-------|------|-------------|-------|
| **VoxCPM2** | Multimodal MTMD | #32443 (b12531) | Full support added |
| **BerryLM** (18.29B, 3.19B active, 40 layers: 30 KDA linear + 10 gated full-attention) | Hybrid MoE | #30234 | Architecture support landed |
| **Kyutai Hibiki** (1B, 2B BF16) | Full-duplex voice I/O | #32491 | Realtime duplex server support added |
| **Inflect v3** (Mini, Micro, Atom) | TTS | #32581 | Three TTS model variants supported |
| **DSpark draft models** with log-SNR conditioning | Speculative decoding | #30657 | Adds log_snr_conditioning key and four projection tensors |

### Hardware & Backends
| Backend | Change | PR / Commit |
|---------|--------|-------------|
| **OpenVINO** (Intel NPU/GPU) | Expanded model coverage + memory optimizations | #32172 (b12503) |
| **CUDA / V100** | MMQ path enabled for MoE | #32504 (b12502) |
| **Qualcomm (Vulkan)** | Runtime loop count for rms_norm | #30824 (b12499) |
| **Hexagon (Qualcomm DSP)** | `int-hmx` support + automatic f32→f16 lowering | #32582 |
| **WebAssembly** | Q3_K/Q6_K relaxed SIMD kernels | #19590 (b12530) |

---

## Performance & Optimization

| Area | Optimization | Details | PR / Commit |
|------|-------------|---------|-------------|
| **CUDA conv2d** | fastdiv integer division | 3 divisions/tile-row replaced by fastdiv in implicit GEMM kernel | #32492 (b12500) |
| **CUDA MoE (V100)** | MMQ materialization | Mixed-materialization queue for expert routing on older Volta | #32504 (b12502) |
| **CUDA flash-attention** | Fused KV dequant (q8_0/q4_0/f8_e4m3) | Eliminates separate dequant pass; materializes K/V as f16 in scratch | #31802 |
| **OpenCL decomposed FA** | dp4a path for KQ matmul | Adds dot-product-4 accumulate kernel path | #32577 |
| **OpenCL FA** | Adjustable KV scratch padding | Row-pitch tuning for improved cache behavior | #32522 |
| **SYCL** | `comm_exchange_fast()` V2 | Increases tensor parallel t/s and transformer t/s; scales with allreduce frequency | #32058 |
| **SYCL** | Intel leak stopgap + nsm Xe2/B70 fix | Memory leak workaround pending Intel oneAPI fix | #32058 |
| **Vulkan** | RT Core-assisted KV page filtering | Compute pass reads per-page KV summaries; ray queries skip irrelevant pages | #32558 |
| **CUDA fastdiv** | Overflow fix in `hi + n` | Widens `hi` before addition to preserve carry past 32-bit boundary | #32575 |

---

## Stability & Regressions

### High Severity (active, unconfirmed or open)

| Issue | Description | Backend | Severity | Link |
|-------|-------------|---------|----------|------|
| **#23577** | MTP with Qwen3.6 27B outputs repeated `////` after long session | CUDA | 🔴 High | [#23577](https://github.com/ggml-org/llama.cpp/issues/23577) |
| **#32370** | Vulkan on i915: multi-ubatch prompt processing corrupts with >20s queued GPU work | Vulkan / i915 | 🔴 High | [#32370](https://github.com/ggml-org/llama.cpp/issues/32370) |
| **#30794** | RPC: DeepSeek V4 degenerates to repeated token after long prompt with two workers | RPC | 🔴 High | [#30794](https://github.com/ggml-org/llama.cpp/issues/30794) |
| **#29526** | A770 Vulkan: empty EOS replies after ~7–8h continuous decode | Vulkan / Arc A770 | 🟠 Medium | [#29526](https://github.com/ggml-org/llama.cpp/issues/29526) — closed, may need reopening |

### Medium Severity (confirmed or regression-tracking)

| Issue | Description | Backend | Notes |
|-------|-------------|---------|-------|
| **#29858** | High CPU use when model runs entirely on GPU — regression from b10423 | All GPU | Bisected to commit a94d563ed; confirmed regression |
| **#32316** | Cache reuse disabled for IMROPE models (Qwen3.5); full re-prefill every request | Metal | — |
| **#29798** | OpenCL `set_tensor` drops writes to q8_0 views; KV cache restore yields empty cache | OpenCL | Affects Android Snapdragon 8 Elite |
| **#29371** | CUDA flash attention inefficiency with quantized KV cache; worsens with context length | CUDA | — |
| **#32526** | DFlash spec broken on Qwen3-4B + DFlash-b16: ~6% acceptance vs expected 85% | Server | Closed, likely pre-existing |

### Fixed / Closed Today

| Issue | Resolution | Link |
|-------|-----------|------|
| #32541 — server crash on `/v1/realtime` with sleeping slot | Fixed in b12528 (#32567) | [#32541](https://github.com/ggml-org/llama.cpp/issues/32541) |
| #29830 — recurrent state not cleared on NaN, garbling future requests | Fixed in b12529 (#31913) | [#29830](https://github.com/ggml-org/llama.cpp/issues/29830) |
| #26609 — CUDA illegal memory access with Qwen3.6-35B MoE flash-attn | Closed (stale) | [#26609](https://github.com/ggml-org/llama.cpp/issues/26609) |

---

## What This Means for Application Developers

1. **Server-side users on Intel NPU/GPU** should see reduced memory pressure and broader model compatibility after pulling b12503. This is particularly relevant for OEM deployments relying on OpenVINO rather than CUDA.

2. **MoE model operators on V100 or legacy Volta hardware** can now use MMQ-backed inference (b12502), unlocking MoE architectures on数据中心 where Ampere+ is unavailable.

3. **Applications using speculative decoding with DSpark drafts**: log-SNR-conditioned drafts were silently failing tensor-count checks and disabling speculation. Upgrade to pick up #30657.

4. **Realtime voice applications**: Kyutai Hibiki full-duplex support (#32491) and expanded TTS model coverage (#32581) make llama.cpp increasingly viable as a local voice agent backend.

5. **Long-running inference services** should monitor for the Arc A770 degradation issue (#29526). If running Vulkan on Intel Arc, consider periodic server restarts or watch for the fix.

6. **Qwen3.6-27B MTP users** should track #23577 — the repeated token bug after extended sessions remains open with no identified fix commit yet.

7. **WebAssembly deployments** gain Q3_K/Q6_K support via relaxed SIMD, improving quantization flexibility for browser-based inference.

---

*Generated from ggml-org/llama.cpp activity log, 2026-11-19. All linked issues and PRs are live at https://github.com/ggml-org/llama.cpp.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze the GitHub data for Ollama on 2026-11-19 and generate a structured digest.

Let me organize the key findings:

**Releases:** None in the last 24h

**Key Issues:**
1. CVE vulnerabilities reported in ollama gobinary (#19771) - HIGH severity
2. Silent truncation at 65,536 tokens (#19765) - closed, bug
3. macOS qwen3.8:27b memory pressure issue (#19757)
4. Vulkan on RX 5700 XT 13x slower than upstream (#19747)
5. Qwen3.8 tool call issues (#18530) - tool call silently lost
6. Parallel tool_calls feature request (#9156)
7. Dark mode for ollama.com feature request (#1645)
8. Various Qwen3.8 issues (context shift, system messages, etc.)
9. Duplicate GGUF keys issue (#19768) - PR #19770 fixes this
10. VRAM accounting issues (#19632) - PR open
11. Decision model batch sizing (#19740, #19743, #19760)

**Key PRs:**
1. #19772 - report length stops when tool call arguments incomplete
2. #19770 - reject duplicate GGUF metadata keys
3. #19632 - Fix VRAM accounting and GPU splitting
4. #19752 - render numbered lists without cutting off
5. #19368 - per-request speculative decoding metrics
6. #19769 - mlxrunner batch DFlash2 proposals
7. #19678 - mlxrunner adapt saved history to memory pressure
8. #19748 - share one runner across shift settings (closed)
9. #19764 - accept qwen3-coder tool calls missing opener
10. #19680 - keep context shift amplitude-neutral
11. #19743/#19760 - size whole-prompt batches for decision models


12. **Today's Highlights:** Several critical fixes landed, including duplicate GGUF key rejection and VRAM accounting improvements. The community integration space is growing with Meta-Capp and Coati additions. A major security concern emerged with CVE vulnerabilities flagged in the gobinary, though the parallel tool_calls feature remains a gap. On the performance side, Vulkan shows significant slowdowns on AMD RDNA1 hardware, while Metal runner optimizations are progressing for Apple Silicon.

Key fixes address truncation issues in Qwen3.8 and decision model batch sizing, with speculative decoding metrics and context shift behavior also being refined. The runner sharing optimization for shift settings appears stable, and mlxrunner improvements are underway to handle batch proposals and memory-aware history management.
</think>


# Ollama Digest — 2026-11-19

---

## 1. Today's Highlights

Ollama received a high-priority CVE report (#19771) against its Go binary today — severity unconfirmed but flagged immediately by the community. On the fix side, two correctness PRs landed that close long-standing rough edges: duplicate GGUF metadata keys are now rejected at parse time (#19770), and decision-model batch sizing has been split into two complementary PRs (#19743, #19760) that eliminate the misleading "context length" errors for models like `d1-2B`. Meanwhile, the Metal runner continues to see active optimization work targeting DFlash2 batching and memory-adaptive history retention.

---

## 2. Releases & Breaking Changes

No releases in the last 24 hours.

| Item | Detail | Link |
|---|---|---|
| **GGUF key uniqueness enforcement** | PR #19770 introduces strict rejection of duplicate metadata keys at read time. Currently `File.KeyValue` is first-wins while `ReadFileMetadata` is last-wins — this divergence is now eliminated. | [#19770](https://github.com/ollama/ollama/pull/19770) |
| **Runner sharing across `shift` settings** | PR #19748 (closed) fixes issue #18950: requests with different `shift` values no longer trigger model reload when alternating between `shift: false` and the default. Llama-server now launches with context-shift support whenever the model supports it. | [#19748](https://github.com/ollama/ollama/pull/19748) |

---

## 3. New Model & Hardware Support

No new model or hardware support announcements today. Existing active work streams:

| Category | Status | Details |
|---|---|---|
| **Qwen3.8 tool-call parser** | In progress | PR #19764 makes the parser accept `qwen3-coder` output that omits the `<tool_call>` opener when the model writes a reasoning sentence before the call. Fixes #18530. | [#19764](https://github.com/ollama/ollama/pull/19764) |
| **Parallel tool calls** | Open feature request | #9156 requests `parallel_tool_calls` support — currently not implemented. | [#9156](https://github.com/ollama/ollama/issues/9156) |
| **Decision models (`d1-2B`)** | Fixes landed | Two PRs resolve non-causal decision-model batch sizing: #19743 and #19760 target the ubatch/physical-batch mismatch causing >512-token failures with misleading error messages. | [#19743](https://github.com/ollama/ollama/pull/19743), [#19760](https://github.com/ollama/ollama/pull/19760) |

---

## 4. Performance & Optimization

### Landed / Merged
| PR | Area | Summary |
|---|---|---|
| #19748 | Scheduler | Single runner now shared across `shift` settings, eliminating per-request reloads when clients alternate shift modes. |
| #19755 | UI / Thinking | Numbered list markers in the live Thinking box are no longer clipped at two digits (prose-sm padding fix + overflow handling). |
| #19746 | CI / Speech | Removed race-detector dependency on socket buffering and large conversion work for speech slow-reader coverage tests. |

### Active Development
| PR | Area | Summary |
|---|---|---|
| #19632 | VRAM / Multi-GPU | Fixes critical VRAM accounting bugs causing incorrect model eviction, load refusal, and unnecessary GPU spreading. Addresses issues #19463, #18679, #18349, #16599. | [#19632](https://github.com/ollama/ollama/pull/19632) |
| #19368 | Speculative Decoding | Per-request speculative decoding metrics: drafted/accepted token counts and acceptance rates reported in API responses and `ollama run --verbose`. | [#19368](https://github.com/ollama/ollama/pull/19368) |
| #19769 | Metal / MLX Runner | Batches DFlash2 draft proposals and reconstructs accepted recurrent states in one batch for longer drafts; short drafts retain direct state capture to avoid replay overhead. | [#19769](https://github.com/ollama/ollama/pull/19769) |
| #19678 | Metal / MLX Runner | Memory-adaptive conversation history: the fixed 8 GiB allowance is no longer rigidly divided, letting Metal runners retain more history when memory is available. | [#19678](https://github.com/ollama/ollama/pull/19678) |
| #19680 | Context Shift / RoPE | Fixes YaRN amplitude factor being multiplied into already-rope'd KV cache keys on every shift, degrading context-shift quality over time. | [#19680](https://github.com/ollama/ollama/pull/19680) |

### Performance Issues Under Investigation
| Issue | Severity | Detail |
|---|---|---|
| **Vulkan on AMD RDNA1 (RX 5700 XT)** | Medium | Prompt processing ~13× slower than upstream llama.cpp Vulkan build (~40 vs ~540 t/s); generation ~17% slower. Filed as #19747. | [#19747](https://github.com/ollama/ollama/issues/19747) |
| **Model load speed on fast storage** | Medium | Models load at 1–3 GB/s even from 14+ GB/s mdadm arrays (#9720, closed but unresolved). | [#9720](https://github.com/ollama/ollama/issues/9720) |

---

## 5. Stability & Regressions

| # | Severity | Description | Status | Fix PR |
|---|---|---|---|---|
| **#19771** | 🔴 HIGH (CVE) | High-severity CVE vulnerabilities reported in the Ollama Go binary. No details public yet; community is tracking. | Open, fresh | — |
| **#19765** | 🟡 Medium | Silent truncation at 65,536 tokens: API returns `done_reason=stop` with no indication of truncation despite a 147,456-token context window. | Closed | — |
| **#19757** | 🟡 Medium | macOS M6 24 GB: `qwen3.8:27b` with 16k context causes `llama-server` to exceed its memory plan by ~3 GiB, triggering critical system memory pressure within ~30 seconds of load. | Open | — |
| **#19747** | 🟡 Medium | Vulkan on RX 5700 XT (RDNA1/gfx1010) shows 13× slower prompt processing vs upstream llama.cpp Vulkan. | Open | — |
| **#19767** | 🟡 Medium | Qwen3.8 on single slot: two agent sessions re-read every prompt from token 0; parallel slots lose part of the prompt cache. | Open | — |
| **#19762** | 🟢 Low | Qwen 3.8 moves all system messages to the start because of a template error, but Ollama never actually uses the template — a logic mismatch. | Open | — |
| **#19759** | 🟢 Low | Feature request: opt-in fail on model load instead of retrying with CPU projector offload, so developers can detect unexpected GPU memory budgets. | Open | — |

---

## 6. What This Means for Application Developers

**Security:** Monitor issue #19771 closely. If you are serving Ollama in a network-exposed or multi-tenant configuration, treat this as a priority upgrade candidate once details are disclosed.

**Reliability improvements landed today:**
- If your agents use `qwen3-coder` and rely on tool calls preceded by reasoning text, PR #19764 should eliminate the silent tool-call drops you may have been seeing.
- If you operate multi-GPU setups, PR #19632 (pending merge) will fix the spurious model eviction and GPU-sprawl behavior that can destabilize production slots.
- If you are benchmarking speculative decoding, PR #19368 now surfaces acceptance rate and drafted/accepted token counts in API responses.

**Known rough edges to work around:**
- **Metal memory on Apple Silicon:** `qwen3.8:27b` can exceed memory plans on 24 GB Macs. If you hit memory pressure, reduce `OLLAMA_CONTEXT_LENGTH` or switch to a smaller quant.
- **Long context truncation:** The silent truncation at 65,536 tokens (#19765) means you should independently track output token counts against your expected context budget — do not rely solely on `done_reason`.
- **Vulkan AMD users:** If you are on RDNA1 (RX 5700 series), expect significantly lower prompt throughput than upstream llama.cpp until #19747 is resolved.

**Community integrations added today:**
- **Meta-Capp** — desktop PDF learning companion using Ollama (Gemma 4 default). PRs #19766 (browser) and #19761 (desktop). | [#19766](https://github.com/ollama/ollama/pull/19766) | [#19761](https://github.com/ollama/ollama/pull/19761)
- **Coati** — Chrome side panel that lets an Ollama model read and search the current page. PR #19763. | [#19763](https://github.com/ollama/ollama/pull/19763)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the provided GitHub data for LiteLLM and create a structured digest.

Key observations:

1. **Releases**: v1.109.2 released with Docker image signature verification
2. **Issues**: 96 total issues, many about bugs in routing, streaming, database connections, MCP, etc.
3. **PRs**: 500 items, various fixes and features

Let me categorize the information:

**Releases & Breaking Changes:**
- v1.109.2 with cosign verification for Docker images

**New Model & Hardware Support:**
- Not explicitly mentioned in the data

**Performance & Optimization:**
- PR #37313: fix for reading stream from parsed params
- PR #52756: Rust repository writes for JWT auth (performance optimization)
- PR #52509: router refactor for better routing

**Stability & Regressions:**
- Issue #52284: Database read replica reconnect timeout issue (critical)
- Issue #21312: Failed requests not counting towards RPM limits
- Issue #45348: Parallel tool-call arguments dropped when streaming
- Issue #52548: Priority routing groups ignore tpm limits
- Issue #49680: prisma_migration ImportError crash
- Issue #49930: Health probes cause context eviction
- Issue #52558: Lens worker aborts on SIGTERM

**Features:**
- PR #52290: Add WildEdge as OpenTelemetry v2 observability preset
- PR #50330: FIPS 140-3 proxy image
- PR #52682: Customer portal budget editors unification
- PR #52428: Model restamping in rust gateway

Let me structure this properly.
</think>


# LiteLLM Daily Digest — 2026-11-19

## Today's Highlights

LiteLLM v1.109.2 ships with verified Docker images via cosign, addressing supply-chain security concerns for production deployments. The community is actively resolving several critical correctness issues: a database read-replica failover bug that permanently deadlocks reads (Issue #52284), and a priority routing regression where TPM limits are ignored under `usage-based-routing-v2` (Issue #52548). On the features front, a Rust-native JWT auth layer and model restamping are landing as part of ongoing infrastructure hardening.

---

## Releases & Breaking Changes

| Version | Change | Impact |
|---------|--------|--------|
| **v1.109.2** | Docker images now signed with cosign; verification command added to release notes | **Low** — additive security, no API changes |

**Verification command:**
```bash
cosign verify \
  --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com \
  ghcr.io/berriai/litellm:v1.109.2
```

No API or configuration schema changes reported today.

---

## New Model & Hardware Support

No new model or hardware support announced today.

---

## Performance & Optimization

| PR | Area | Description |
|----|------|-------------|
| [#52756](https://github.com/BerriAI/litellm/pull/52756) | **Auth / DB** | Rust repository layer for JWT user provisioning, key mappings, and agent auth — eliminates Python→Prisma overhead for native JWT hosts |
| [#52509](https://github.com/BerriAI/litellm/pull/52509) | **Router Core** | Refactors router to pass host context per-request instead of holding a single global host — enables per-request state without lifetime leakage |
| [#52510](https://github.com/BerriAI/litellm/pull/52510) | **Router** | Fixes fallback behavior so rerouted requests respect the routed group's fallbacks regardless of which deployment failed |
| [#37313](https://github.com/BerriAI/litellm/pull/37313) | **Streaming** | Fixes `get_api_base` to read `stream` from parsed params rather than the raw dict, preventing silent misrouting on streaming calls |
| [#37489](https://github.com/BerriAI/litellm/pull/37489) | **Budgeting** | Preserves timezone offsets when resetting multi-window budgets; previously non-UTC windows drifted early or late |
| [#37943](https://github.com/BerriAI/litellm/pull/37943) | **Streaming** | Handles raw SSE frames appearing alongside parsed chunks, preventing 500 errors from post-call guardrails |
| [#51533](https://github.com/BerriAI/litellm/pull/51533) | **Bedrock** | Preserves llama token counts and `stop_reason` on native Bedrock streams; corrects undercounted spend logs |

---

## Stability & Regressions

### 🔴 Critical

| Issue | Description | Workaround |
|-------|-------------|------------|
| [#52284](https://github.com/BerriAI/litellm/issues/52284) | Read replica reconnect timeout leaves Prisma reader dead permanently; reads never fall back to writer and proxy never self-heals | None — restart required; fix not yet merged |
| [#49680](https://github.com/BerriAI/litellm/issues/49680) | `prisma_migration --skip_server_startup` crashes with `ImportError` when `psycopg` cannot load `libpq` — unguarded import in `ensure_request_log_indexes` | Ensure `libpq` is installed in the container; fix PR not yet merged |

### 🟠 High

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#21312](https://github.com/BerriAI/litellm/issues/21312) | Failed requests (non-2xx) not counted toward RPM limits for virtual keys | Open |
| [#52548](https://github.com/BerriAI/litellm/issues/52548) | Priority routing groups ignore deployment `tpm` limits and fail over early on `rpm` under `usage-based-routing-v2` | Open |
| [#49930](https://github.com/BerriAI/litellm/issues/49930) | Health probes evict context on long-context models (262K tokens); appears at high concurrency | Open |
| [#52558](https://github.com/BerriAI/litellm/issues/52558) | Lens worker aborts active analysis claims on `SIGTERM`; interrupts in-flight claims during Kubernetes replica drain | Open |

### 🟡 Medium

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#45348](https://github.com/BerriAI/litellm/issues/45348) | Parallel tool-call arguments dropped when streaming `/v1/messages` for `chatgpt` (Codex) provider — `input_json_delta` events missing | Open |
| [#50070](https://github.com/BerriAI/litellm/issues/50070) | `/v1/messages` to Vertex Claude sends `messages` before `system`/`tools`, causing prompt cache misses on tool-loop rounds | Open |
| [#47076](https://github.com/BerriAI/litellm/issues/47076) | Helm migration Job OOMKilled at 1Gi since v1.105.x — `prisma generate` runs after migrations in non-root image | Open |
| [#51790](https://github.com/BerriAI/litellm/pull/51790) | Vertex Gemini batch files with `json_schema` row cause other rows to fail with `response_mime_type must be set` | **Merged** (backport at [#52725](https://github.com/BerriAI/litellm/pull/52725)) |

### Closed (Notable Fixes)

| Issue | Description |
|-------|-------------|
| [#49411](https://github.com/BerriAI/litellm/issues/49411) | `voyage/` embeddings now honor `VOYAGE_API_BASE` env var |
| [#45605](https://github.com/BerriAI/litellm/issues/45605) | `custom_auth` now correctly runs budget checks on custom-auth requests |
| [#52456](https://github.com/BerriAI/litellm/issues/52456) | LiteLLM no longer silently relabels out-of-order OpenAI Decisions answers |

---

## What This Means for Application Developers

1. **Database HA concern:** Teams using read replicas (`DATABASE_URL_READ_REPLICA`) should monitor for the deadlock condition described in [#52284](https://github.com/BerriAI/litellm/issues/52284). Until a fix lands, consider setting a reconnect jitter or external watchdog to restart the proxy if all reads begin failing.

2. **Budget enforcement gaps:** Virtual-key RPM limits are not enforced for failed requests ([#21312](https://github.com/BerriAI/litellm/issues/21312)). If you rely on LiteLLM's built-in rate limiting for cost control, be aware that a misconfigured upstream returning 4xx/5xx will not decrement the counter.

3. **Streaming tool calls on Codex:** Applications using the `chatgpt` provider with streaming `/v1/messages` will receive empty tool arguments — avoid streaming for multi-tool Codex calls or wait for [#45348](https://github.com/BerriAI/litellm/issues/45348) to be resolved.

4. **Long-context health probes:** If you're running models with 200K+ context windows behind LiteLLM, health probe calls may evict working context. Consider adjusting probe intervals or routing health checks through a separate lightweight endpoint.

5. **New observability option:** WildEdge has been proposed as an OpenTelemetry v2 preset ([#52290](https://github.com/BerriAI/litellm/issues/52290)). If adopted, teams using WildEdge for trace ingestion can enable it via a single config toggle.

6. **Upgrade path:** v1.109.2 is a safe upgrade for most deployments; the cosign verification is additive and does not change runtime behavior. Monitor the above critical issues if you operate read replicas or run Prisma migrations in memory-constrained Helm environments.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze this GitHub data for Unsloth AI and create a structured digest for 2026-11-19.

Looking at the data:

1. **Releases**: None in the last 24h
2. **Issues**: 29 total, mix of open and closed
3. **Pull Requests**: 260 total, showing top 20

Let me organize this into the required sections:

**Today's Highlights**
- Studio multi-GPU improvements with automatic placement for guided models
- Diffusion training now supports non-bf16 GPUs (T4)
- MiniMax-H3-Image text encoder optimization for 8GB cards
- Various bug fixes for UI, API, and computer use features

**Releases & Breaking Changes**
- No new releases today

**New Model & Hardware Support**
- ROCm/gfx1200 (RX 9060 XT, RDNA4) - QLoRA issues reported
- gfx1151 - hybrid linear-attention packing
- gfx1151 Strix Halo APU memory planning issues
- AMD mixed GPU setups still problematic
- FLUX.2-klein, Z-Image, Wan 2.2 5B training support
- HunyuanImage 2.1 distilled support
- MiniMax-H3-Image optimization

**Performance & Optimization**
- AdaLN modulation precomputation for FLUX.1 (-28% per step)
- MiniMax-H3-Image text encoder streaming (82.7s to 36.7s)
- Multi-GPU CFG replica placement optimization
- Model size/params display option
- Scheduled tasks preserving system prompts

**Stability & Regressions**
- QLoRA HIP error on gfx1200 (critical)
- fast_qk_norm_rope broadcast bug
- KV cache invalidation issue
- GPU not used after driver upgrade


- JSON eval scoring issues
- Scrolling lag reported
- ROCm memory planning issues

I'll focus on the critical technical challenges that developers need to address. The most pressing issues involve memory management, GPU compatibility, and performance bottlenecks across different hardware configurations. Key problems include memory planning errors on AMD platforms, ROCm integration challenges, and potential regressions in GPU utilization. Performance optimizations show promise with text encoder streaming and AdaLN modulation techniques, but significant stability work remains.
</think>


# Unsloth Digest — 2026-11-19

## 1. Today's Highlights

Unsloth Studio shipped significant multi-GPU and diffusion training improvements: automatic placement now intelligently routes guided diffusion models to a CFG replica when faster than layer splits, and DiT LoRA training now runs on non-bf16 GPUs like T4. Text encoder streaming for MiniMax-H3-Image reduced new-prompt render time from 82.7s to 36.7s on 8 GB cards. Meanwhile, a critical QLoRA kernel crash on AMD RDNA4 (gfx1200) and a fast_qk_norm_rope broadcasting bug require attention.

## 2. Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| No new releases | No version bumps in the last 24 hours | — |

## 3. New Model & Hardware Support

| Model / Hardware | Support Status | Details | Link |
|------------------|----------------|---------|------|
| **FLUX.2-klein, Z-Image, Wan 2.2 5B** | Added | DiT LoRA training enabled on non-bf16 GPUs (T4, sm75) with fp16 + loss scaling | [#18355](https://github.com/unslothai/unsloth/pull/18355) |
| **HunyuanImage 2.1 distilled** | Fixed | Now runs publisher's steps/guidance (was using base model's) | [#18280](https://github.com/unslothai/unsloth/pull/18280) |
| **MiniMax-H3-Image** | Optimized | Text encoder pinning + streaming for 8 GB VRAM cards | [#18417](https://github.com/unslothai/unsloth/pull/18417) |
| **gfx1200 (RX 9060 XT, RDNA4)** | Broken | QLoRA aborts with `HIP error: illegal memory access` in fused kernels; no SDPA kernel exists | [#18403](https://github.com/unslothai/unsloth/issues/18403) |
| **gfx1151 / Strix Halo APU** | Mixed | Hybrid linear-attention packing passes exactness but no net speedup; `--fit on` misplans memory | [#17738](https://github.com/unslothai/unsloth/issues/17738), [#18316](https://github.com/unslothai/unsloth/issues/18316) |
| **AMD mixed NVIDIA+AMD hosts** | Broken | Studio ignores AMD card; cannot use both simultaneously (RTX 3080+7900, RTX 4090+7900) | [#12248](https://github.com/unslothai/unsloth/issues/12248) |

## 4. Performance & Optimization

| Optimization | Impact | Details | PR |
|--------------|--------|---------|-----|
| **AdaLN modulation precomputation** | **−28% per step, FLUX.1** | Precompute once per request; modulation weights moved off GPU | [#18342](https://github.com/unslothai/unsloth/pull/18342) |
| **MiniMax-H3-Image text encoder streaming** | **82.7s → 36.7s** | Pin host layers, stream rest pageable; bit-identical output | [#18417](https://github.com/unslothai/unsloth/pull/18417) |
| **Multi-GPU CFG replica placement** | Faster guided diffusion | Automatic placement picks one card + CFG replica when denoiser fits second card | [#18421](https://github.com/unslothai/unsloth/pull/18421) |
| **Model size/params in picker** | UX improvement | Opt-in setting to show parameter counts on composer rows | [#18067](https://github.com/unslothai/unsloth/pull/18067) |
| **Long raw-text packing** | Fixes silent data loss | Previously truncated at context length; now trains every token | [#18408](https://github.com/unslothai/unsloth/pull/18408) |
| **LoRA on INT8/FP8 builds** | Bugfix | LoRA adapters now accepted on quantized builds | [#18420](https://github.com/unslothai/unsloth/pull/18420) |

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR | Link |
|----------|-------|--------|--------|------|
| 🔴 **Critical** | QLoRA crashes on gfx1200 (RX 9060 XT) with `HIP error: illegal memory access` in three fused kernels | Open | — | [#18403](https://github.com/unslothai/unsloth/issues/18403) |
| 🔴 **Critical** | `fast_qk_norm_rope` fallback reads out-of-bounds due to wrong position_ids shape `[1, seq_len]` not broadcast to `[batch, seq_len]` | Closed | — | [#18160](https://github.com/unslothai/unsloth/issues/18160) |
| 🔴 **Critical** | Unsloth fails to use GPU after driver 620.70.06 upgrade (CUDA 13.5); reports "unavailable vRAM" | Closed | — | [#18218](https://github.com/unslothai/unsloth/issues/18218) |
| 🟠 **High** | KV cache invalidation after ~8 computer use calls; `MAX_TOTAL_MODEL_IMAGES = 8` hardcoded | Closed | — | [#18231](https://github.com/unslothai/unsloth/issues/18231) |
| 🟠 **High** | `unsloth eval` mis-scores JSON array strings: individual elements scored correct, full array scores zero | Closed | — | [#18246](https://github.com/unslothai/unsloth/issues/18246) |
| 🟠 **High** | `--fit on` on Strix Halo APU plans ~52 GiB device memory despite 64 GB available; system RAM balloon to 57 GB | Open | — | [#18316](https://github.com/unslothai/unsloth/issues/18316) |
| 🟡 **Medium** | Scroll lag/choppiness in chat; delay then jump | Closed | — | [#18259](https://github.com/unslothai/unsloth/issues/18259) |
| 🟡 **Medium** | Scheduled tasks ignore chat System prompt | Open | [#18411](https://github.com/unslothai/unsloth/pull/18411) | [#18411](https://github.com/unslothai/unsloth/issues/18411) |

## 6. What This Means for Application Developers

| Takeaway | Action |
|----------|--------|
| **AMD RDNA4 users: avoid QLoRA** | The gfx1200 (RX 9060 XT) crashes in three fused kernels; if you need QLoRA on AMD today, stick to RDNA3 or wait for a kernel fix. Track [#18403](https://github.com/unslothai/unsloth/issues/18403). |
| **Long-document fine-tuning: update now** | Raw text datasets were silently dropping tokens beyond context length during packing. Re-run any affected training jobs with the fix in [#18408](https://github.com/unslothai/unsloth/pull/18408). |
| **FLUX.1 inference is 28% faster** | AdaLN precomputation landed; if you run FLUX.1, update to pick up the per-step speedup with no output changes. |
| **Multi-GPU diffusion users: test CFG replica** | Automatic placement now uses a CFG replica for guided models when faster. Verify your throughput on dual-GPU setups improves. |
| **Scheduled tasks: verify System prompt** | Replies from scheduled tasks no longer inherit the chat's System prompt; this is fixed in [#18411](https://github.com/unslothai/unsloth/pull/18411) but not yet merged. |
| **JSON eval results may be wrong** | If you use `unsloth eval` on datasets with JSON arrays in answer columns, scores were inverted; re-evaluate after confirming the fix. |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*