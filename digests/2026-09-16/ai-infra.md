# AI 基础设施日报 2026-09-16

> 生成时间: 2026-09-16 09:27 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# Cross-Project Comparison Report — AI Infrastructure Ecosystem
**Digest date: 2026-09-16 | Projects: vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth**

---

## 1. Ecosystem Overview

Today's landscape is defined by a **DeepSeek-V4.x integration race** on the serving-engine tier, a **broad backend diversification push** away from NVIDIA-only, and a **convergence on speculative decoding as the primary correctness hazard**. Both major engines shipped no releases but have active model-integration branches (SGLang explicitly recommends pinning a commit rather than the branch tip for DSV4.1), while llama.cpp shipped ten consecutive builds concentrated on non-CUDA backends. Across all six projects, the dominant failure class is **silent wrongness rather than crashes** — fluent-but-incorrect MTP output, dropped bootstrap routing fields, bypassed budgets, and 200-OK responses for truncated embeddings. Gateway and fine-tuning tiers saw no releases today; their activity is hardening rather than feature velocity.

---

## 2. Activity Comparison

| Project | Layer | Issues cited (24h digest) | PRs cited (24h digest) | Release status | Notes |
|---|---|---|---|---|---|
| **vLLM** | Serving engine | ~24 (incl. 1 RFC, 1 closed) | ~17 | **None** | 1 closed roadmap (#44280); 15+ open high-severity reports |
| **SGLang** | Serving engine | ~21 (incl. 3 closed) | ~17 | **None** | 5 broken / 46 flaky CI; pinned-commit guidance for DSV4.1 |
| **llama.cpp** | Local runtime | ~15 | ~28 | **10 builds** (b10988–b10997) | Highest release cadence; backend-segmented fixes |
| **Ollama** | Local runtime | ~17 (incl. 3 closed) | ~12 | **v0.34.2-rc0** (pre-release) | llama.cpp bump only; no upstream unification |
| **LiteLLM** | Gateway | ~19 | ~15 | **v1.103.0-dev.1** (dev) | Enforcement-bug cluster; no stable release |
| **Unsloth** | Fine-tuning | ~7 | ~14 | **None** | `main` CI was red and blocking all PRs (#11091) |

> **Methodology caveat:** counts reflect distinct GitHub items *referenced in the supplied 24h digests*, not repo-wide totals. Issue/PR labels reflect digest categorization (fix PRs filed under stability still counted as PRs). Only llama.cpp and Ollama published any artifact in the window; LiteLLM and Ollama artifacts are pre-release/dev tags unsuitable for production.

**Read:** vLLM and SGLang carry the highest *open risk density* (~20 open items each). llama.cpp carries the highest *throughput* with the lowest per-item risk. Unsloth's low issue count reflects a narrower surface, not necessarily better health — its `main` branch was unusable for CI for part of the window.

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---|---|---|---|---|---|
| **DeepSeek-V4 / V4.1** | ROCm MXFP4 indexing (gfx950, opt-in) | **Full integration push** (CUDA + gfx950 + Ascend NPU) | — | — | — |
| **Qwen3.8-Flash-Next / Qwen4Exp** | FP8 KV cache on QSA sparse attention | Fused QKV+BA GEMMs for Qwen3.5 GDN | `hc_pre` hyperconnection ops (PR closed) | — | Metal context fix |
| **Qwen3.5 / hybrid GDN** | Prefix-cache hits under MTP spec decode | Fused quantized `in_proj_qkvz`/`in_proj_ba` | TP fused-QKV split state | GPTQ loading gap | MTP config export fix |
| **GLM-5.3-Flash** | Long-decode degeneration on B300 (open) | MXFP4 NextN draft loading + MTP (MI355X) | — | — | — |
| **Gemma 4** | — | — | TP fused-QKV split state | Tool-call parser extension | OOM at BS=1 on 96 GB (open) |
| **Qwen3-ASR / multimodal** | ViT encoder CUDA graphs; audio preprocessing parity | — | — | — | — |
| **NVFP4 / MXFP4 formats** | MXFP4 paged indexing (AMD) | MXFP4 NextN drafts (AMD) | **NVFP4 W4A8 on Blackwell** | MLX mxfp8 models | — |
| **Non-CUDA backends** | ROCm (AITER) | **AMD gfx950, Ascend NPU, Intel XPU** | **Vulkan, Hexagon, OpenCL, SYCL, Metal, ROCm** | Vulkan (iGPU, unstable) | ROCm Strix Halo |
| **Non-transformer serving** | — | SenseNova-U1, dLLM block-diffusion roadmap | — | — | — |

**Who is ahead:**
- **SGLang leads on DSV4.1 depth and backend breadth** — the only project with concurrent CUDA + gfx950 + Ascend paths for a single new model family, plus the only dLLM/diffusion serving roadmap.
- **vLLM leads on attention/KV-cache architecture innovation** — FP8-on-QSA KV and AITER MXFP4 paged indexing are novel, but both are *opt-in* today, so feature support ≠ feature parity.
- **llama.cpp leads on quantization-format and edge-backend coverage** — the only project shipping NVFP4 W4A8 for Blackwell and int8 coopmat1 across 11 quant formats on Vulkan.
- **Ollama and Unsloth are consumers, not originators** — Ollama is a llama.cpp wrapper plus Studio UX; Unsloth targets training/merge correctness for the same model families.

**Convergence signal:** Qwen4Exp/hyperconnection ops, hybrid Mamba/GDN, and MTP appear in *all four* serving/runtime projects. Backend-specific correctness for these architectures is now the differentiator, not model support itself.

---

## 4. Performance Frontier

| Optimization axis | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---|---|---|---|---|---|
| **KV cache & offload** | fp8_e4m3 KV on QSA; CPU offload eviction counter (#53893); scratch-group skip (#57145); filesystem-tier integrity RFC (#54363) | HiCache on DSV4 FP8; Mooncake local/RDMA Engram backend; `write_through` durability bug | `--no-kv-offload` EOS bug (Vulkan); 4-bit KV silent CPU fallback | — | GGUF context-size formula alignment |
| **Batching / scheduling** | Rust frontend (call_id lookup, bounded pre-model work); warmup-kernel EPLB contamination fix | Overlap-scheduler fault fix (#39780); Hopper SBO deprecated | UMA ring-buffer scheduler; server auto-fit context | Cancelled-prefill runner wedge (Vulkan) | — |
| **Quantization kernels** | AITER Triton GEMM routing for untuned fp8 block-scale; Marlin MXFP4 | Grouped top-k JIT (ROCm); fused quantized GDN GEMMs | **3–7× CPU k-quant tiled mul_mat (VNNI)**; Vulkan IQ4_XS MMQ/MMV; int8 coopmat1 | Metal MTP sampling disabled | — |
| **Distributed serving** | PP/spec-decode offload pool sizing; batch invariance broken with SP + async TP | PD disaggregation (Qwen4-Exp fix landed); EP scatter fault; Mooncake RDMA | ROCm AllReduce enabled; TP fused-QKV split state | — | — |
| **Kernel fusion** | ViT encoder CUDA graphs; fused mHC on AMD | Fused mHC sublayer boundary (decode critical path) | Hexagon DMA/HVX contiguous copies; Metal NaN fix | — | — |
| **Restart / weight load** | — | **306–327s → <1s weight load (Qwen3-235B FP8)** | `llama-bench --version` for baseline reproducibility | — | — |

**Where the effort concentrates:** KV-cache **tiering** (GPU→CPU→filesystem/remote) and **kernel specialization per backend** are the two dominant themes. vLLM invests in cache-tier correctness and routing; SGLang in fused kernels and host-cache backends; llama.cpp in hand-written kernels for every non-CUDA target.

**Single biggest number today:** SGLang's Weight Cache Daemon — **~5 minutes of weight load reduced to under 1 second** on Qwen3-235B FP8. This reframes canary deploys and failure remediation for large FP8 models and is the most decision-relevant datapoint in the window.

**Caveat:** PR #27851's 3–7× CPU mul_mat claim is unmerged; SGLang's ~4% NVFP4 decode regression from `tiny_gemm` (#38628) shows quantization-kernel generalization carries real risk.

---

## 5. Layer Positioning

| Layer | Project | Scope & Today's Signal |
|---|---|---|
| **Production serving engine** | vLLM, SGLang | Multi-GPU/PD-disaggregated, high-throughput, PagedAttention-class KV management. Both are adding **Rust frontends**, encroaching on the gateway layer. Risk profile: highest (SM100/SM120 divergence, batch-invariance breakage, illegal memory access). |
| **Local / edge runtime** | llama.cpp | Single-binary, broadest hardware matrix (CPU/Vulkan/Metal/ROCm/SYCL/Hexagon/OpenCL). Now has an OpenAI-compatible server, `/metrics`, tool-calling, and auto-fit context — increasingly a *small-scale serving engine*, not just a CLI. |
| **Local runtime + product shell** | Ollama | llama.cpp + MLX + cloud passthrough behind a CLI/GUI, modelfiles, and a `/api` surface. Its value is packaging, model management, and reasoning-level metadata — its risk is inheriting llama.cpp backend bugs plus its own renderer/template gaps. |
| **LLM gateway / control plane** | LiteLLM | Provider translation, budget/rate-limit enforcement, spend tracking, fallbacks, OTel. Today's activity is almost entirely *governance correctness* — budget bypass, half-enforced rate limits, orphaned async tasks. |
| **Fine-tuning / adaptation** | Unsloth | LoRA/full-FT, MoE expert targeting, merge/export correctness, plus a Studio shell for local inference and GGUF sizing. Sits *upstream* of the serving engines and is a producer of the checkpoints they serve. |

**Boundary blurring to note:**
1. **Engine ↔ gateway:** vLLM's Rust frontend roadmap *closed* today (#44280); SGLang's Rust frontend already drops PD bootstrap fields (#39412). If engines own the HTTP surface, LiteLLM's differentiation shifts to governance and multi-provider policy.
2. **Runtime ↔ engine:** llama.cpp's `llama-server` and Ollama's server both expose OpenAI-compatible APIs with tool-calling and metrics, competing with vLLM/SGLang at small-to-mid scale.
3. **Training ↔ serving:** Unsloth's merged-checkpoint bugs (#11042 MTP config) manifest as *serving* failures in vLLM/llama.cpp — the layers share failure modes even when they don't share code.

---

## 6. Trend Signals

**1. Silent correctness failures have overtaken crashes as the primary risk class.**
- SGLang: AMD MI355X GLM-5.3-Flash MTP produces fluent output at **2.00% GSM8K vs. 98% with MTP off** (#39778/#39779).
- vLLM: `tool_choice='none'` silently deletes tool-call-shaped content (#55080); Intel Arc W4A16 degenerates to endless token-0 with HTTP 200 (#53480).
- LiteLLM: zero-cost budget bypass leaks spend through paid fallbacks (#41344); embeddings returned 200 OK for truncated text (#17543).
- Ollama: partial cloud streams reported as successful completion (#18475).
→ **Watch:** correctness telemetry (grammar/tool-call validation, output-quality canaries), not just error rates and latency.

**2. Speculative decoding is not production-safe on hybrid and quantized models — across three independent codebases.**
- vLLM: crash (#56736), device-side assert (#56443), output corruption (#53912) — all hybrid Mamba/GDN + spec decode.
- SGLang: GLM-5.2 NVFP4 + EAGLE illegal memory access on B200/B300 (#30209); ROCm MTP miscompute.
- llama.cpp: greedy divergence on quantized targets (#25618, 24 comments, unfixed).
- Ollama: Metal MTP backend sampling disabled defensively (#17980).
→ **Watch:** pin per model family; validate greedy parity against a non-speculative baseline before enabling.

**3. Non-NVIDIA backend expansion is now table stakes — and validation is per-backend.**
AMD gfx950 (MI350X/MI355X) appears in vLLM and SGLang; Ascend NPU only in SGLang; Intel XPU in vLLM and SGLang; Vulkan RDNA3/3.5/4, Hexagon, OpenCL, SYCL only in llama.cpp. Every one of those paths has at least one open correctness issue today.
→ **Watch:** do not assume CUDA parity; budget for per-backend regression suites.

**4. Rust frontends are shipping before their semantics are complete.**
vLLM closed its parity roadmap; SGLang's Rust endpoint silently drops `bootstrap_host`/`bootstrap_port`/`bootstrap_room`, misrouting PD traffic with no error signal.
→ **Watch:** if you're testing Rust frontends, add explicit assertions on routing fields and structured-output/grammar behavior (vLLM is reworking these in #55269).

**5. Restart cost is becoming a first-class metric.**
SGLang's Weight Cache Daemon (<1s vs. ~5 min), vLLM's offload-pool sizing PRs, and llama.cpp's auto-fit context all target *reconfiguration latency* rather than steady-state throughput.
→ **Watch:** this enables aggressive canary/rollback policies and scale-to-zero patterns previously impractical for 200B+ FP8 models.

**6. Agentic and tool-calling fidelity is the new competitive surface.**
Ollama drops Gemma 4 tool params named `description`/`type`/`required` (#18468) and hides MCP tools with dots or >41 chars (Unsloth #11051); LiteLLM mistranslates schemas for Bedrock/Dashscope/Gemini (#24158, #30280, #38223); vLLM is fixing whitespace parity and namespace tool-name budgets (#57137, #57147); SGLang's OpenAI tool-schema conformance diverges on `strict`/`defer_loading` (#39599).
→ **Watch:** normalize and validate tool schemas at your gateway edge; treat provider-side "connected" status as unverified.

**7. Governance/enforcement is where gateways now compete — and where they're currently weakest.**
LiteLLM's open enforcement bugs (project budgets never tracked #33871, concurrent end-user budget bypass #40095, team per-model limits enforced at ~half #34140) mean **policy surfaces cannot be trusted for cost control today**. Notably, observability is improving faster than enforcement (OTel trace-ID unification #41386, W3C `traceparent` propagation #40669, provider-accurate streaming token totals #41388).
→ **Watch:** add an independent spend/usage reconciliation job; don't treat configured budgets as authoritative.

**8. Hybrid Mamba/GDN architectures are the highest-risk adoption area.**
vLLM (#53912, #56736, #56443), SGLang (unified_cache MAMBA pruning #33713, GPTQ `in_proj_ba` loading #38854), llama.cpp (#28902 M-RoPE OOB), and Unsloth (bounded context checkpoints #11073) all report distinct hybrid-model failures in a single day.
→ **Watch:** for long-context agentic workloads on hybrid models, monitor cache-hit rates and host-RAM growth, not just output quality.

### Recommended Actions for Infrastructure Decision-Makers

| Priority | Action |
|---|---|
| **Immediate** | Validate speculative decoding off (or greedy-parity-tested) for any hybrid/quantized model in production. |
| **Immediate** | Pin serving images per model family and per backend; avoid branch tips — SGLang explicitly recommends a pinned commit for DSV4.1. |
| **This week** | Audit gateway budget topology (free-model → paid-fallback pairs, project-level budgets) and reconcile spend independently. |
| **This week** | Verify PD-disaggregation routing if using Rust frontends; add assertions on bootstrap fields. |
| **This quarter** | Track SGLang's Weight Cache Daemon for restart economics; re-evaluate canary and rollback SLAs accordingly. |
| **This quarter** | Build per-backend regression suites (ROCm, Ascend, XPU, Vulkan) rather than assuming CUDA parity. |

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-09-16

## 1. Today's Highlights

No new releases in the last 24 hours, but the [Rust frontend feature-parity roadmap](https://github.com/vllm-project/vllm/issues/44280) closed after 42 comments, signaling that the `VLLM_USE_RUST_FRONTEND=1` API server is converging on Python-frontend equivalence. Activity is dominated by correctness work on hybrid Mamba/GDN models, spec decoding, and KV-cache offload tiers, plus a burst of ROCm/DeepSeek-V4 performance PRs. On the risk side, several high-severity reports (batch invariance under SP/async TP, spec-decode crashes with hybrid models, DGX Spark unified-memory failures) remain open without merged fixes.

## 2. Releases & Breaking Changes

- **No releases published in the last 24h.**
- Pending CLI/config surface changes worth tracking: [PR #55702](https://github.com/vllm-project/vllm/pull/55702) restores advertised comma-separated `--collect-detailed-traces model,worker` values that currently fail Pydantic validation; [PR #52370](https://github.com/vllm-project/vllm/pull/52370) makes optional `Literal` flags accept the `None` sentinel they advertise.
- The long-running [RFC #25700](https://github.com/vllm-project/vllm/issues/25700) ("Limit the use of envvars in vLLM") continues to accumulate support, targeting migration of attention backend, all2all backend, and KV-cache layout controls from envvars to first-class configs — expect future config-driven migration for deployments relying on `VLLM_*` knobs.

## 3. New Model & Hardware Support

- **Qwen3.8-Flash-Next (Qwen4Exp):** [PR #55557](https://github.com/vllm-project/vllm/pull/55557) adds `fp8_e4m3` main KV cache on the QSA sparse-attention path via `--kv-cache-dtype fp8`; QSA indexer side caches and GDN state remain bf16.
- **DeepSeek V4 on ROCm:** [PR #56834](https://github.com/vllm-project/vllm/pull/56834) adds opt-in AITER FlyDSL paged MXFP4 indexing for gfx950 (`--attention-config '{"indexer_kv_dtype":"mxfp4"}'`), with FP8 default and graceful fallback when AITER lacks stride-capable FP4 scorer APIs.
- **Multimodal encoder CUDA graphs:** [PR #56922](https://github.com/vllm-project/vllm/pull/56922) enables ViT encoder graph capture for encoder-only ModelRunnerV2 instances (previously no-op'd by `MMEncoderModelRunner.capture_model`).
- **Qwen3-ASR:** [PR #57146](https://github.com/vllm-project/vllm/pull/57146) fixes audio preprocessing parity (hop-length padding/`WhisperFeatureExtractor` forcing) so token counts match the checkpoint's native HF processor.
- **JIT elimination:** [Issue #49349](https://github.com/vllm-project/vllm/issues/49349) tracks zero runtime JIT compilation, with DeepSeek V4 model-level de-JITification items still open.
- Multiple open XPU/DGX Spark (SM121) gaps — see Stability below.

## 4. Performance & Optimization

- **MoE expert offloading (RFC in progress):** [Issue #38256](https://github.com/vllm-project/vllm/issues/38256) proposes CPU-pinned expert weights with a fixed-size GPU cache, LFRU eviction and cross-layer prediction to reduce misses; [PR #37190](https://github.com/vllm-project/vllm/pull/37190) is open.
- **DeepSeek-V4.1-Flash on AMD MI355X:** [Issue #56506](https://github.com/vllm-project/vllm/issues/56506) reports headroom left on 8× MI355X (TP4, MXFP4 MoE + DSpark MTP) — at concurrency 1, 35.89 output tok/s total (8.97 tok/s/GPU), TTFT p50 0.898s; higher-concurrency rows show the scaling gap being targeted.
- **ROCm GEMM routing:** [PR #56812](https://github.com/vllm-project/vllm/pull/56812) routes untuned fp8 block-scale GEMMs to AITER Triton at large M, avoiding AITER's single default CK instance when a shape is absent from its tuning table.
- **Speculative decoding cache efficiency:** [PR #52244](https://github.com/vllm-project/vllm/pull/52244) restores hybrid GDN prefix-cache hits under MTP spec decoding (previously prompts with lengths that are multiples of the hash unit got zero hits) — measured on Qwen3.5-122B-A10B.
- **Frontend work bounding:** [PR #51892](https://github.com/vllm-project/vllm/pull/51892) replaces per-output linear scans with per-request `call_id` lookup and cursor-based completed-stream replay, capping pre-model request work for Responses API.
- **Observability/counters:** [PR #53893](https://github.com/vllm-project/vllm/pull/53893) adds `vllm:kv_offload_cpu_evictions_total`; [PR #56716](https://github.com/vllm-project/vllm/pull/56716) stops warmup kernels from polluting EPLB expert load statistics (which skewed rebalance decisions on elastic EP).

## 5. Stability & Regressions

Ranked by severity; fix PRs noted where they exist.

1. **Batch invariance broken with SP/async TP** — [Issue #56370](https://github.com/vllm-project/vllm/issues/56370): `VLLM_BATCH_INVARIANT=1` + `pass_config.enable_sp` produces non-invariant outputs on 4× RTX PRO 6000 Blackwell (sm_120); reproduced on v0.29.0 wheel. No fix PR referenced.
2. **Hybrid Mamba/GDN + spec decoding crash** — [Issue #56736](https://github.com/vllm-project/vllm/issues/56736): Xid 31 in the align-mamba path (fault address below CUDA segment) with Qwen3.8-27B AWQ (48 GDN + 16 attention layers) and a DFlash draft; CMP 170HX cluster.
3. **DeepSeek-V4.1-Flash DSpark assert on SM90** — [Issue #56443](https://github.com/vllm-project/vllm/issues/56443): CUDA device-side assert in `map_draft_to_target` at draft warmup on H200 with Marlin MXFP4 MoE.
4. **Prefix caching + MTP output corruption on hybrid Mamba/GDN** — [Issue #53912](https://github.com/vllm-project/vllm/issues/53912): still corrupts output in v0.28.0; prior #43559 was closed but not actually fixed. Related fix attempt: [PR #52244](https://github.com/vllm-project/vllm/pull/52244).
5. **SM120 long-run instability** — [Issue #52225](https://github.com/vllm-project/vllm/issues/52225): recurring Xid 13 warp errors (misaligned/illegal instruction/out-of-range register) under multi-hour load with Nemotron-3.5-Lightning NVFP4 + Marlin MoE + hybrid Mamba.
6. **Silent Intel Arc Pro B70 corruption** — [Issue #53480](https://github.com/vllm-project/vllm/issues/53480): W4A16 27B, head_dim 256 degenerates to endless token-0 output under sustained concurrent decode, HTTP 200 with no error.
7. **GLM-5.3-Flash long-decode degeneration** — [Issue #56868](https://github.com/vllm-project/vllm/issues/56868): W4A16 checkpoint on B300, accumulated reasoning decode degrades output.
8. **DGX Spark (GB10, unified memory) memory failures** — [Issue #56824](https://github.com/vllm-project/vllm/issues/56824) host-memory collapse with `NV_ERR_NO_MEMORY` at startup despite ~22 GiB `MemAvailable`; [Issue #50011](https://github.com/vllm-project/vllm/issues/50011) `wake_up` natively kills EngineCore on sleep level 1 exit; [Issue #56457](https://github.com/vllm-project/vllm/issues/56457) Qwen4Exp QSA indexer per-chunk logits buffers growing with `max_seq_len` → allocator bloat/OOM during long prefill.
9. **Scheduler deadlock** — [Issue #45414](https://github.com/vllm-project/vllm/issues/45414): deadlock without a KV-cache connector on `vllm/vllm-openai:v0.21.0`.
10. **sm100-only greedy divergence** — [Issue #55238](https://github.com/vllm-project/vllm/issues/55238): CUDA graph replay changes greedy output for gemma-4-26B-A4B-it on compute capability 10.x (B200/B300) only; H200/A100/sm_120 are bit-identical.
11. **Tool-calling correctness** — [Issue #55080](https://github.com/vllm-project/vllm/issues/55080): `tool_choice='none'` silently deletes tool-call-shaped content; fix in [PR #57137](https://github.com/vllm-project/vllm/pull/57137) (streaming/non-streaming whitespace parity at tool-call boundaries, fixes #49412).
12. **Hopper spec-decode cap** — [Issue #43457](https://github.com/vllm-project/vllm/issues/43457): `paged_mqa_logits` asserts on `next_n=3`, capping `num_speculative_tokens` at 1 during `profile_cudagraph_memory` on H200/sm_90a.
13. **KV/offload correctness** — [Issue #54363](https://github.com/vllm-project/vllm/issues/54363) RFC: filesystem KV offload tier has no integrity verification and unbounded I/O liveness; [PR #52921](https://github.com/vllm-project/vllm/pull/52921) aligns CPU offload pool sizing across PP/spec-decode workers; [PR #57145](https://github.com/vllm-project/vllm/pull/57145) skips scratch groups in `OffloadingConnector` (addresses #54831).
14. **Legacy llmcache failure** — [Issue #42911](https://github.com/vllm-project/vllm/issues/42911): v0.19.1 + llmcache + Qwen3.6-27B-FP8 fails hybrid KV cache spec conversion.
15. **XPU offload gaps** — [Issue #57008](https://github.com/vllm-project/vllm/issues/57008): `--cpu-offload-gb` (UVA) does not reduce peak device memory for compressed-tensors WNA16 MoE; [Issue #50269](https://github.com/vllm-project/vllm/issues/50269) host memory not released after load; [Issue #53119](https://github.com/vllm-project/vllm/issues/53119) multi-card + MTP issues on Qwen3.6-35B-A3B int4 AutoRound.

## 6. What This Means for Application Developers

- **Rust frontend is close to parity but still experimental.** If you run the OpenAI-compatible server at scale, begin evaluating `VLLM_USE_RUST_FRONTEND=1` in staging now; the closed roadmap ([#44280](https://github.com/vllm-project/vllm/issues/44280)) means feature gaps are shrinking, and grammar/structured-output interfaces are being reworked in [PR #55269](https://github.com/vllm-project/vllm/pull/55269).
- **Avoid speculative decoding on hybrid Mamba/GDN models in production for now.** Three separate reports (#56736 crash, #56443 assert, #53912 corruption) hit that combination, with only partial fixes in flight. Pin known-good versions per model family rather than tracking `main`.
- **Blackwell (SM100/SM120) and DGX Spark GB10 unified memory need validation before rollout** — greedy-output divergence, long-run Xid errors, and host-memory failures are all open.
- **Tool-calling and Responses API edge cases are actively being hardened.** Long namespace tool names are now budget-checked ([PR #57147](https://github.com/vllm-project/vllm/pull/57147)), frontend request work is bounded against oversized payloads ([PR #51892](https://github.com/vllm-project/vllm/pull/51892)), and streaming/whitespace parity for tool calls is fixed ([PR #57137](https://github.com/vllm-project/vllm/pull/57137)) — test these paths if you rely on strict output fidelity.
- **KV offload tiers are maturing but auditable-correctness is still catching up.** CPU eviction metrics and scratch-group skipping land now, while the filesystem tier's lack of checksums and I/O timeouts ([#54363](https://github.com/vllm-project/vllm/issues/54363)) means don't treat disk offload as durable or safe for correctness-critical context reuse yet.
- **Long-context + prefix caching on new architectures can silently regress hit rates or corrupt output.** Monitor cache-hit metrics and enable batch-invariance checks only on backends currently known safe (SP/async TP combination is broken per [#56370](https://github.com/vllm-project/vllm/issues/56370)).
- **ROCm/DeepSeek V4 performance is an active investment area** — MXFP4 paged indexing and AITER Triton GEMM routing are opt-in today; AMD MI355X numbers are still leaving headroom, so expect tuning knobs (`indexer_kv_dtype`, attention configs) to matter for cost-per-token.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-09-16

## 1. Today's Highlights

Activity is dominated by the **DeepSeek-V4.1 (`dsv4.1`) integration push**, with new AMD MI350X (gfx950) enablement, fused mHC kernels, and Mooncake Engram backend work landing in parallel. On the reliability side, several **illegal-memory-access bugs remain open** under overlap scheduling and EAGLE/FP4 paths, while an AMD-specific MTP defect on GLM-5.3-Flash produces fluent but arithmetically wrong output (2.00% GSM8K vs 98% with MTP off). Infra-wise, the **Fast Engine Recovery / Weight Cache Daemon roadmap** reports weight-load time dropping from ~306–327s to <1s on Qwen3-235B FP8, and scheduled CI is at 5 broken / 46 flaky tests.

## 2. Releases & Breaking Changes

- **No new releases in the last 24h.**
- **Deprecation:** RFC to deprecate the Hopper SBO (single batch overlap) feature was closed — cited as too costly to maintain across branch merges; maintainers should expect removal signaling for Hopper-specific overlap configs. [#25664](https://github.com/sgl-project/sglang/issues/25664)
- **Keyword/behavior note:** `python -m sglang.bench_serving` (deprecated alias retained) does not control or record radix-cache state, so CI and user-copied commands may run different cache protocols than intended. [#39651](https://github.com/sgl-project/sglang/issues/39651)
- **Rust frontend parity gap:** PD bootstrap fields (`bootstrap_host`, `bootstrap_port`, `bootstrap_room`) are silently dropped on Rust OpenAI endpoints during lowering to `GenerateRequest` — no error, just lost PD routing. [#39412](https://github.com/sgl-project/sglang/issues/39412)

## 3. New Model & Hardware Support

- **DeepSeek-V4.1:** Remaining model + runtime integration PR open; maintainers explicitly recommend pinning the image commit `da64c5cbb8cf6bfd39be19da43573fdfd484c43a` rather than the branch, which is mid-refactor. [#38798](https://github.com/sgl-project/sglang/pull/38798)
- **AMD MI350X (gfx950):** DeepSeek-V4.1-Flash support with HIP JIT kernels + Triton for mHC, FP4 indexing, routing, quantization, and gfx950 dense GEMMs. [#39186](https://github.com/sgl-project/sglang/pull/39186)
- **AMD ROCm (MI355X):** GLM-5.3-Flash MXFP4 NextN draft-layer loading fix and MTP enablement. [#39779](https://github.com/sgl-project/sglang/pull/39779), [#39778](https://github.com/sgl-project/sglang/pull/39778)
- **AMD:** HiCache enabled on DeepSeek-V4 FP8 unified attention. [#37778](https://github.com/sgl-project/sglang/pull/37778)
- **AMD:** Fused quantized `in_proj_qkvz` + `in_proj_ba` GEMMs for Qwen3.5 GDN layers (same quantization scheme). [#33068](https://github.com/sgl-project/sglang/pull/33068)
- **Ascend NPU:** DSpark compact verify-window work for the DSV4 backend, and returning indexer top-k results to the host. [#38440](https://github.com/sgl-project/sglang/pull/38440), [#39060](https://github.com/sgl-project/sglang/pull/39060)
- **Intel XPU:** DeepSeek-V2-Lite-Chat-FP8 GSM8K e2e accuracy test added; NGRAM speculative decoding support in progress. [#39781](https://github.com/sgl-project/sglang/pull/39781), [#31362](https://github.com/sgl-project/sglang/pull/31362)
- **Diffusion / CPU:** AMX optimization re-land for CPU platform after prior revert due to CI breakage. [#30719](https://github.com/sgl-project/sglang/pull/30719)
- **Tracks:** SenseNova-U1/U1.5 feature & performance tracking opened; new dLLM (block-diffusion) serving roadmap continues work from #14199. [#37742](https://github.com/sgl-project/sglang/issues/37742), [#39499](https://github.com/sgl-project/sglang/issues/39499)

## 4. Performance & Optimization

- **Fast engine recovery (headline number):** Phase 1 of the Weight Cache Daemon landed in #27139 — a per-rank daemon holds post-quantized weights and serves them over CUDA IPC, cutting weight load from **~306–327s to <1s** on Qwen3-235B FP8. Roadmap covers remaining phases. [#33522](https://github.com/sgl-project/sglang/issues/33522)
- **DeepSeek-V4.1 decode path:** Fused mHC sublayer boundary kernel collapses `mhc_post_split_h` + `hc_combine_norm` into one kernel on the decode critical path. [#39397](https://github.com/sgl-project/sglang/pull/39397)
- **DeepSeek-V4.1 medium batches:** Reduced mHC boundary, communication, indexer quantization, and speculative metadata overhead at concurrency 32/64 (192/384 verify rows). [#39704](https://github.com/sgl-project/sglang/pull/39704)
- **DeepSeek-V4.1 prefill memory:** Row-chunk logits + tail-only candidate masks bound the dense prefill indexer transient, addressing OOM under `--chunked-prefill-size 16384` with 705K-token prompts on 4×GB300. [#39187](https://github.com/sgl-project/sglang/pull/39187)
- **DeepSeek-V4.1 host cache:** Mooncake local/RDMA Engram backend with CUDA Graph support added. [#39205](https://github.com/sgl-project/sglang/pull/39205)
- **ROCm grouped top-k:** Removes an extra `bf16 → fp32` cast kernel on the routing bias per MoE layer when `SGLANG_OPT_USE_JIT_KERNEL_GROUPED_TOPK=1`. [#39775](https://github.com/sgl-project/sglang/pull/39775)
- **Known regression:** `tiny_gemm` (PR #34693) causes a reproducible **~4% DeepSeek-R1 NVFP4 decode regression on Blackwell** vs the dedicated `dsv3_router_gemm` path; a straight revert is discouraged. [#38628](https://github.com/sgl-project/sglang/issues/38628)

## 5. Stability & Regressions

Ranked by severity (crash/correctness first):

1. **Illegal memory access, overlap scheduler — fix PR open today.** Online-compress prefill plan kernel and EP scatter kernel both fault intermittently under production-shaped load. PR #39780 addresses both. [#39780](https://github.com/sgl-project/sglang/pull/39780)
2. **GLM-5.2 NVFP4 + EAGLE crash on B200/B300.** `torch.AcceleratorError: CUDA error: illegal memory access` in the flashinfer_trtllm bf16 batched-GEMM nextn draft MoE; triton nextn default is currently HIP-gated after #30137. [#30209](https://github.com/sgl-project/sglang/issues/30209)
3. **QSA extend forward illegal memory access (H20, TP8, Qwen3.8-Flash-Next-FP8).** Suppressed by `CUDA_LAUNCH_BLOCKING=1` and `--disable-overlap-schedule`; root cause still unconfirmed as of 2026-09-15. [#37633](https://github.com/sgl-project/sglang/issues/37633)
4. **AMD MI355X GLM-5.3-Flash MTP is functionally broken.** Fluent output but only **2.00% GSM8K vs 98%** with MTP off; draft acceptance 1.33/6. Fix PRs #39778 (MTP) and #39779 (MXFP4 draft load) are open. [#39778](https://github.com/sgl-project/sglang/pull/39778), [#39779](https://github.com/sgl-project/sglang/pull/39779)
5. **HiCache `write_through` durability bug.** First-seen prefixes can be evicted from L1/L2 before KV is fully persisted to Mooncake Store; prefix replay then misses. [#39444](https://github.com/sgl-project/sglang/issues/39444)
6. **Indexer cache offload missed for GLM-5.3-Flash.** Open bug filed today; part of the GLM-5.3-Flash tracking list. [#39692](https://github.com/sgl-project/sglang/issues/39692), [#37524](https://github.com/sgl-project/sglang/issues/37524)
7. **`unified_cache` MAMBA component nodes pruned, not downgraded.** Device eviction drops hybrid-KDA nodes from the radix tree entirely, so H→D loadback is never attempted and requests report `cached_tokens=0`. [#33713](https://github.com/sgl-project/sglang/issues/33713)
8. **Qwen3.5 hybrid (GDN) GPTQ checkpoint loading.** `linear_attn.in_proj_ba` is built quantized while the checkpoint stores bf16 `in_proj_a/b` → 96× "not found in params_dict" then `gptq_marlin_repack` fails at `size_n=96`. [#38854](https://github.com/sgl-project/sglang/issues/38854)
9. **Rust frontend PD bootstrap params silently dropped** (detailed in §2). [#39412](https://github.com/sgl-project/sglang/issues/39412)
10. **GLM-5.3-Flash vision misclassification.** A single JPEG data URL is identified as an unrelated bird on 8×H20. [#38821](https://github.com/sgl-project/sglang/issues/38821)
11. **OpenAI tool-schema conformance.** Field order and omission semantics for `strict` / `defer_loading` don't match OpenAI. [#39599](https://github.com/sgl-project/sglang/issues/39599)
12. **CI health:** Scheduled `main` CI at **5 broken, 46 flaky, 986 recently fixed** as of 2026-09-16 08:15 UTC. [Tracking #17050](https://github.com/sgl-project/sglang/issues/17050)
13. **CI noise source:** CUDA coredump tracker continues auto-collecting from `pr-test.yml` — 312 comments, the highest-traffic issue in the tracker. [#26340](https://github.com/sgl-project/sglang/issues/26340)

**Resolved since yesterday:** Qwen4-Exp / Qwen3.8-Flash-Next PD disaggregation (decode-side PLE state pool never sized) is resolved on main via the Qwen4 staging squash #36651. [#39624](https://github.com/sgl-project/sglang/issues/39624) Also closed: speculative decode `max_new_tokens` cap masking in-budget stop strings [#31599](https://github.com/sgl-project/sglang/issues/31599), and streaming detokenization character duplication across UTF-8 recovery steps [#31598](https://github.com/sgl-project/sglang/issues/31598).

## 6. What This Means for Application Developers

- **Stop-sequence and streaming correctness fixes landed on main** (#31599, #31598). If you pinned a build from mid-July to work around duplicated characters or tokens leaking past stop strings under speculative decoding, you can move forward.
- **Avoid MTP on GLM-5.3-Flash over ROCm for now.** The failure is silent — output reads fluently but the model is wrong. Disable speculative decoding until #39778 merges. Similarly, GLM-5.2 NVFP4 + EAGLE on Blackwell is unsafe (#30209).
- **If you use PD disaggregation through the Rust OpenAI frontend, verify your routing.** Bootstrap fields are dropped without error (#39412), which can route requests to the wrong prefill worker with no failure signal.
- **Don't trust cache-hit numbers from `bench_serving` runs.** The tool neither sets nor records radix cache state, so your reproduction of a CI benchmark may exercise a different cache protocol (#39651). For hybrid-Mamba models, expect cold misses on evicted prefixes until #33713 is fixed.
- **Restart/rollout economics are improving sharply.** The Weight Cache Daemon path (<1s vs ~5 minutes of weight load on Qwen3-235B FP8) makes fast engine recovery viable for canary deploys and failure remediation — worth tracking for anyone running large FP8 models with frequent restarts.
- **DeepSeek-V4.1 is coming, but not from the branch tip.** Note the pinned commit guidance in #38798; AMD MI350X/MI355X and Ascend NPU support are being built up in parallel, so validate on your target backend rather than assuming parity with CUDA.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

qwen3-coder 的推理预算结束，b10997 HIP MoE ncols_opt RDNA3.5。

没有破坏性变更？可能只有聊天/推理模板变更和 llama-bench --version 是增量式变更。迁移说明：实际上没有。或许可以提一下聊天模板变更（b10996）会影响 Qwen3-Coder 的输出格式——不是 API 破坏性变更。

新模型与硬件支持：
- HIP：将 MoE ncols_opt tile 启发式拓宽到 RDNA3.5（b10997）
- HIP：为 ROCm 启用 AllReduce（b10989）
- hexagon：连续快速路径 + hvx_copy_uu（b10991），连续 src/dst 的 DMA（b10990）
- opencl：面向投机解码/MTP，按 batch size 选择 MoE expert matmul（b10988）
- Vulkan：面向 RDNA3/RDNA4 的 int8 coopmat1 matmul（PR #27952）——支持 q4_0、q4_1、q5_0、q5_1、q8_0、q3_k、q4_k、q5_k、q6_k、mxfp4、nvfp4、iq4_nl
- Metal NaN 修复（b10994）
- Vulkan NV argsort 规避方案（PR #28975）
- PR #28901 qwen4exp hc ops（已关闭）
- PR #28965 面向 gemma4、qwen35 的 TP fused QKV split state
- PR #28985 SYCL 移除缓慢的 oneDNN reference matmul/fattn
- PR #28937 CPU 在

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-09-16

## 1. Today's Highlights
Ollama shipped **v0.34.2-rc0** (a llama.cpp bump) while the server-side work coalesced around structured outputs on thinking models: PR #18479 lands a single-pass grammar application that eliminates the cancel-and-restart prefill. On the hardware front, Vulkan iGPU users are hitting two distinct failure modes (startup detection and runner wedge), and MTP speculative decoding on Metal gets a backend-sampling disable.

## 2. Releases & Breaking Changes
- **v0.34.2-rc0** released; changelog is "llama.cpp updates" only. [compare v0.34.1...v0.34.2-rc0](https://github.com/ollama/ollama/compare/v0.34.1...v0.34.2-rc0)
- **`typical_p` sampling parameter removed** — client requests now return HTTP 400, breaking ollama-python v0.6.2 users who pass it explicitly. [#18480](https://github.com/ollama/ollama/issues/18480)
- **Manifest-list storage groundwork** (PR #16590) adds runner/digest selection across show/list/copy/remove/pull/push, preparing to drop the llama-server compatibility patch — expect tag semantics changes for multi-runner tags. [#16590](https://github.com/ollama/ollama/pull/16590)
- **llama.cpp bump to b10969** moved the compat patch into libllama with exported symbols, resolving duplicate-symbol collisions between `libllama` and `libmtmd`. [#18446](https://github.com/ollama/ollama/pull/18446)

## 3. New Model & Hardware Support
- **Gemma 4 tool-call parsing** extended for positional `BEGIN_ARG`/`END_ARG` blocks and malformed channel markers. [#18471](https://github.com/ollama/ollama/pull/18471)
- **Thinking-level metadata** now exposed via `/api/show` and `ollama show` (supported + default reasoning levels), consumed by Codex CLI and desktop config. [#18473](https://github.com/ollama/ollama/pull/18473)
- **Metal/MTP**: draft backend sampling disabled on Metal only; CUDA/Vulkan/CPU behavior preserved. [#17980](https://github.com/ollama/ollama/pull/17980)
- **MLX CUDA**: shared runtime libs deduplicated into the `cuda_v13` payload. [#17956](https://github.com/ollama/ollama/pull/17956)
- **Vulkan iGPU detection** is unreliable — Intel Iris Xe reports `total_vram 0 B` until restart. [#18482](https://github.com/ollama/ollama/issues/18482)
- **MiniCPM5-2B** native XML tool calls never parse into `tool_calls`. [#18483](https://github.com/ollama/ollama/issues/18483)

## 4. Performance & Optimization
- **Structured outputs on thinking models now single-pass** (PR #18479): the old path ran an unconstrained generation, cancelled it, then re-rendered the prompt under the grammar — costing a second prefill, dropping the boundary chunk, and requiring a harmony prompt hack. Supersedes the duplicate/closed #18478 and complements the MLX-specific fix #18459. [#18479](https://github.com/ollama/ollama/pull/18479)
- **CUDA/Metal memory budgeting**: `mlx: budget GPU memory for CUDA devices` installs an allocator budget at 95% of driver-reported free memory, since the recommended-working-set query is Metal-only and CUDA loads previously ran unbounded until mid-load OOM, triggering eviction retry loops. [#18481](https://github.com/ollama/ollama/pull/18481)
- **CPU regression under investigation**: `llama-server` consuming ~560% CPU on an M4 Max 128 GB during token generation. [#18038](https://github.com/ollama/ollama/issues/18038)
- **Claude Desktop "Apps" integration** reports ~50s latency per message across models (gemma4:e4b, llama3.1:8b). [#18474](https://github.com/ollama/ollama/issues/18474)

## 5. Stability & Regressions
Ranked by severity:

1. **Vulkan iGPU runner wedge** — after a cancelled large prefill, `llama-server` parks in `drm_syncobj_array_wait_timeout`; no output, no logs, CPU idle, while the server still reports the model as loaded. Requires backend restart. No fix PR yet. [#18477](https://github.com/ollama/ollama/issues/18477)
2. **Vulkan iGPU not detected at startup** — every model falls back to CPU for the process lifetime; restart fixes it. [#18482](https://github.com/ollama/ollama/issues/18482)
3. **macOS GUI silent failure** — chat processing dies after ~6k tokens with no notification (M4 Pro, 128k context, gemma4:31b-mlx / qwen3.8:27b-mxfp8). [#18368](https://github.com/ollama/ollama/issues/18368)
4. **HTTP 500 "no user query found in messages"** during qwen3.8 chat streaming with tool loops at 205k context. [#17778](https://github.com/ollama/ollama/issues/17778)
5. **Jetson Orin Nano 8GB OOM** on Gemma 4 E4B with `--load-mode dio` (multimodal projector exhausts unified memory); regression since v0.32.2 affecting e2b/e4b even at ctx 16000. [#18396](https://github.com/ollama/ollama/issues/18396), [#17787](https://github.com/ollama/ollama/issues/17787)
6. **Gemma 4 concurrent decode loses EOS** — gemma4:26b hits `length` at `num_predict` under dual concurrent generation, while qwen3.8-27b is 3/3 clean on the same harness. [#18442](https://github.com/ollama/ollama/issues/18442)
7. **Gemma 4 renderer drops tool parameters** named `description`, `type`, `properties`, `required`, `nullable`. [#18468](https://github.com/ollama/ollama/issues/18468)
8. **Intermittent "model not found"** — `getExistingName` fails to track canonicalized name parts; fix PR open. [#18438](https://github.com/ollama/ollama/pull/18438)
9. **Cloud stream failures swallowed** — partial upstream responses reported as successful completion; fix propagates via `http.ErrAbortHandler`. [#18475](https://github.com/ollama/ollama/pull/18475)
10. **Reasoning-level catalog inconsistency** — `deepseek-v4.1-flash:cloud` defaults to `high`, which is absent from its `supported_reasoning_levels: ["none","medium"]`; clients applying the default blindly will send an unsupported effort. [#18484](https://github.com/ollama/ollama/issues/18484)
11. **`ollama launch claude` context mismatch** — 1M-context cloud models launched with a 200K window; a 262K model is labeled 1M. [#18463](https://github.com/ollama/ollama/issues/18463)
12. **Embedding truncation was silent** — `/api/embed` discarded the truncation flag and returned 200 OK for embeddings computed on different text; warning now added. [#17543](https://github.com/ollama/ollama/pull/17543)

Resolved today: `#11691` (OpenAI SDK structured output with gpt-oss:20b) and `#10538` (structured outputs for reasoning/thinking mode) both closed — the latter directly matches the single-pass work above.

## 6. What This Means for Application Developers
- **Structured output + reasoning is finally viable in one pass.** If you were avoiding `format` on thinking models due to doubled prefill cost or boundary chunk loss, re-test on the next build; the MLX-specific stray-token leak is also patched (#18459).
- **Audit your sampling params.** `typical_p` is a hard 400 now — clients that pass a full sampling payload will break. Centralize default params server-side.
- **Don't ship tool schemas with reserved-looking parameter names** (`type`, `properties`, `description`, `required`, `nullable`) on Gemma 4; the renderer silently drops them, producing partial tool calls with no error.
- **Reasoning-level handling needs a guard.** Read `supported_reasoning_levels` from `/api/show` (now exposed, #18473) and clamp the default rather than trusting `default_reasoning_level` — the DeepSeek cloud catalog currently ships an out-of-range default.
- **Vulkan iGPU is not production-ready for long-running servers.** Both the startup-detection and post-cancel wedge issues require a process restart as the only recovery; prefer CUDA/Metal or add a supervisor health-check that restarts on stalled generations.
- **Check `/api/ps` memory reporting for draft models.** Issue #17951 (closed) noted a 4.4 GB Gemma 4 MTP draft model reported as 315 MB — if your scheduler sizes memory from that value, speculative decoding can oversubscribe.
- **Cloud proxy reliability improved**: aborted upstream streams will now surface as errors instead of silent truncation, so add retry logic on non-200 rather than assuming stream end = complete output.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 摘要 — 2026-09-16

## 1. 今日亮点
一大批与限额执行相关的 bug 主导了今日动态：三个独立 issue 显示预算和速率限制要么被绕过，要么只按一半值生效，其中两个的修复 PR 已经合入（#41379、#37789）。在工程侧，代理的聚合用量查询正在重构，以避免在高 key 数量下发生 OOM/超时（#41293），同时正在修复 OTel/W3C trace-context 在 passthrough 路由中的传播（#40669、#41386）。本窗口内唯一的发布是开发预发布版 v1.103.0-dev.1。

## 2. 发布与破坏性变更
- **v1.103.0-dev.1** — 开发预发布版，除 Docker 镜像签名外没有 changelog。所有 LiteLLM Docker 镜像均使用 [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 中引入的项目密钥通过 cosign 签名。此快照中未记录破坏性 API/config 变更；请将 `-dev` 标签视为非生产用途。（源数据中未提供发布 URL。）
- 下文回归的相关版本边界：**v1.100.0** 是 `hosted_vllm/*` 开始从重放的 assistant 轮次中丢弃 `reasoning_content` 的阈值版本（[#41392](https://github.com/BerriAI/litellm/issues/41392)）。

## 3

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Digest — 2026-09-16

## 1. Today's Highlights

No releases shipped in the last 24h; activity is concentrated in a large Studio hardening wave plus core training fixes. Two training-side PRs stand out: MoE LoRA now targets unfused expert parameters instead of silently dropping gate/up weights ([#11014](https://github.com/unslothai/unsloth/pull/11014)), and Qwen3.5 full-finetune exports no longer declare MTP layers that don't exist in the weights ([#11042](https://github.com/unslothai/unsloth/pull/11042)). A red test on `main` was fixed ([#11091](https://github.com/unslothai/unsloth/pull/11091)) after it was failing the `Repo tests (CPU, studio)` job for every open PR.

## 2. Releases & Breaking Changes

**None.** No new versions, and no merged config/API migrations. Two in-flight installers PRs would change environment assumptions if merged:
- [#11024](https://github.com/unslothai/unsloth/pull/11024) — `install.ps1` will hard-require an x64 Python on Windows on ARM (previously warned and continued, then died building pyarrow from source) and will respect an active conda environment instead of writing PATH blindly.
- [#11023](https://github.com/unslothai/unsloth/pull/11023) — diagnoses torch/triton/transformers version skew at `import unsloth` time rather than failing later inside transformers.

## 3. New Model & Hardware Support

- **MoE architectures:** LoRA now resolves all unfused 3D expert parameters (`gate_proj`, `up_proj`, `down_proj`), not just `experts.down_proj` — previously gate/up experts were excluded from `target_parameters` and never trained ([#11014](https://github.com/unslothai/unsloth/pull/11014)).
- **Qwen3.5 MTP:** `save_pretrained_merged` output no longer leaves `text_config.mtp_num_hidden_layers = 1` in `config.json` when no `mtp.*` tensors exist, which broke serving runtimes that read the declaration ([#11042](https://github.com/unslothai/unsloth/pull/11042)).
- **Metal / macOS:** Studio stops charging CPU-mapped input embeddings against the Metal context budget, which was capping Qwen3.8-Flash-Next at 8,192 tokens on a 128 GB MacBook ([#11060](https://github.com/unslothai/unsloth/pull/11060)).
- **Hybrid recurrent models:** Qwen3.8-27B context checkpoints are now bounded so host RAM does not grow unbounded during long agentic sessions ([#11073](https://github.com/unslothai/unsloth/pull/11073)).
- **ROCm (Strix Halo):** Issue [#6276](https://github.com/unslothai/unsloth/issues/6276) (closed) documents `SIGSEGV` in the bundled `libhsa-runtime64.so.1.21.0` on bare-metal `gfx1151`; system ROCm works. Worth tracking if you ship ROCm prebuilts.
- **Downloads >50 GB:** Studio now falls back to Xet when HTTPS exceeds `MAX_HTTP_DOWNLOAD_SIZE`, instead of emitting a misleading "install `hf_xet`" error ([#11061](https://github.com/unslothai/unsloth/pull/11061)).

## 4. Performance & Optimization

- **GGUF memory estimation:** Studio's formula is being aligned with the buffers `llama-server` actually allocates, correcting both over- and under-estimation that drove context-length decisions ([#11043](https://github.com/unslothai/unsloth/pull/11043)).
- **Metal context:** Concrete win — 8,192 → ~30k tokens on 128 GB MacBooks for Qwen3.8-Flash-Next, matching what `llama-server` achieved at 69 GB ([#11060](https://github.com/unslothai/unsloth/pull/11060), 2026-09-16 update).
- **Host RAM stability:** Context checkpoint pool bounded on hybrid recurrent models; Studio's memory panel previously reported none of the growth ([#11073](https://github.com/unslothai/unsloth/pull/11073)).
- **Cache latency:** Local HF cache discovery no longer requires a live `/auth-check` round trip to huggingface.co before every read ([#11026](https://github.com/unslothai/unsloth/pull/11026)).
- **Windows process cleanup:** Unloading a model now reaps the full `llama-server` tree, preventing stale mappings and pidfile corruption on relaunch ([#11022](https://github.com/unslothai/unsloth/pull/11022)).

## 5. Stability & Regressions

Ranked by severity:

1. **CI red on `main`** — `tests/studio/test_pwsh_calls_use_the_shared_runner.py` was failing and taking down the `Repo tests (CPU, studio)` job for *every* open PR. Fix: [#11091](https://github.com/unslothai/unsloth/pull/11091) (closed/landed).
2. **Training run lost on container stop** — `docker stop` sends SIGTERM, and the `unsloth studio` command only handled Ctrl+C, so a fine-tune at step 9 died with no checkpoint. Fix PR: [#11044](https://github.com/unslothai/unsloth/pull/11044).
3. **Qwen3.5 + GRPO rotary embedding mismatch** — `apply_rotary_pos_emb` size mismatch with TRL `GRPOTrainer` (unsloth 2026.3.3, trl 0.24.0); issue closed, confirm on current version ([#4801](https://github.com/unslothai/unsloth/issues/4801)).
4. **Qwen3.5 9B never reaches first step / Gemma 4 26B A4B OOM at batch size 1 on 96 GB** — unresolved training-side; issue closed with no linked fix ([#7203](https://github.com/unslothai/unsloth/issues/7203)).
5. **Infinite loop fine-tuning Qwen3** with unsloth-2025.7.1+ — closed as "fixed, pending confirmation," 28 comments, highest-traffic thread today ([#3211](https://github.com/unslothai/unsloth/issues/3211)).
6. **LoRA save failure** — `# of LoRAs = 128 does not match # of saved modules = 0` (RTX 5080, Windows) ([#4294](https://github.com/unslothai/unsloth/issues/4294)).
7. **MCP tools silently hidden** — tool names containing a dot (e.g. `catalog.get-catalog-entity`) or exceeding 41 chars never reach the model, while Settings still reports "Connected (6 tools)." Fix PR: [#11051](https://github.com/unslothai/unsloth/pull/11051).
8. **Tokenizer load from local cache** — `FastModel.from_pretrained` fails to resolve tokenizer/processor on a cached model; documented workaround is a manual edit to `tokenization_utils_base.py` ([#3647](https://github.com/unslothai/unsloth/issues/3647), [#3646](https://github.com/unslothai/unsloth/issues/3646)).
9. **Windows unload leak** — fixed by [#11022](https://github.com/unslothai/unsloth/pull/11022); **SSH hard-block** in Studio tools relaxed to an approved-server allowlist ([#10642](https://github.com/unslothai/unsloth/pull/10642)).

## 6. What This Means for Application Developers

- **Pin your stack and read import-time diagnostics.** With no release and several version-skew reports (torch/triton/transformers), the practical advice is to keep the torch–transformers–trl triple consistent; [#11023](https://github.com/unslothai/unsloth/pull/11023) exists precisely because the failure currently surfaces from the wrong layer.
- **MoE fine-tuners should re-check LoRA coverage.** If you trained a MoE model with separate expert parameters before [#11014](https://github.com/unslothai/unsloth/pull/11014), gate/up experts likely were never adapted — retraining is required for correct behavior.
- **Qwen3.5 merges must be validated end-to-end.** Verify `config.json` against the safetensors index before deploying to vLLM/llama.cpp; the MTP mismatch in [#11042](https://github.com/unslothai/unsloth/pull/11042) produces a checkpoint that reads as valid but fails at serve time.
- **Studio deployments get materially more predictable.** Bounded host RAM on long sessions, Xet fallback for large models, and corrected GGUF context sizing all reduce the "works in the demo, dies overnight" class of failures.
- **Datacenter runs need checkpoint-on-SIGTERM.** Until [#11044](https://github.com/unslothai/unsloth/pull/11044) lands, avoid `docker stop` mid-training or script your own checkpoint flush.
- **Agent builders: audit MCP tool naming.** Tools with dots or long names currently fail silently, and the UI reports them as connected ([#11051](https://github.com/unslothai/unsloth/pull/11051)).

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*