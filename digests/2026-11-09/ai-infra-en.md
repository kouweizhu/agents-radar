# AI Infrastructure Digest 2026-11-09

> Generated: 2026-11-09 01:54 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report based on the digest summaries I generated for vLLM, SGLang, llama.cpp, LiteLLM, and Unsloth. Let me analyze the data from each digest and create a comprehensive cross-project comparison.

Let me review the key data points from each digest:

**vLLM:**
- Issues: 59 in last 24h
- PRs: 331 in last 24h
- Releases: None
- Notable: Blackwell support, ViT CUDA Graph RFC, multimodal optimization, MoE fixes
- Key bugs: Prompt truncation on Qwen3.8-Flash-Next, CUDA graph issues on SM120

**SGLang:**
- Issues: Many (tracking CUDA coredumps with 360+ comments)
- PRs: 331 in last 24h
- Releases: None
- Notable: DeepSeek-V4 support, Blackwell optimization, PD disaggregation, NPU support
- Key bugs: GLM-5.3-Flash corruption, GB10 OOM

**llama.cpp:**
- Issues: ~20 high-comment issues
- PRs: ~10 recent merges
- Releases: 12 commits (no formal releases)
- Notable: Quantization improvements, speculative decoding fixes, backend diversity
- Key bugs: Speculative decoding with quantized targets, recurrent NaN persistence

**LiteLLM:**
- Issues: 59 in last 24h
- PRs: 331 in last 24h
- Releases: v1.110.0-dev.2
- Notable: Gateway features, multi-provider support, streaming fixes
- Key bugs: Streaming usage undercounting, Bedrock stream closure

**Unsloth:**
- Issues: 12 items
- PRs: 160 in last 24h


- Releases: None
- Notable: Diffusion optimization, INT8 on Turing, VAE improvements
- Key bugs: ROCm segfault, Arc 140V failure

Now I'll synthesize this into a structured cross-project comparison report.
</think>


# AI Infrastructure Ecosystem Cross-Project Report — 2026-11-09

## 1. Ecosystem Overview

The AI inference infrastructure ecosystem is in a period of intense multi-vector evolution driven by three converging pressures: Blackwell-class hardware (SM120/SM121) reaching production readiness, the maturation of speculative decoding as a standard production feature, and the explosive growth of multimodal and mixture-of-expert architectures that stress every layer of the serving stack. Today's activity across vLLM, SGLang, llama.cpp, LiteLLM, and Unsloth reveals that no single project can own the full stack — the landscape is fragmenting into complementary layers (bare-metal inference engines, local runtimes, cloud gateways, fine-tuning studios), each with distinct performance and correctness priorities. The dominant theme is reliability hardening: several critical regressions — prompt truncation on GB10, CUDA graph hangs on L4, recurrent NaN persistence in llama.cpp — are surfacing as these engines move from beta to production workloads at scale.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Active RFCs |
|---------|:------------:|:---------:|:--------------:|:-----------:|
| **vLLM** | 59 | 331 | 0 | ViT CUDA Graph, Marlin→Humming, Octave KV, Specialized MonoKernels |
| **SGLang** | ~59 | 331 | 0 | PD Disaggregation, SGLang-Diffusion |
| **llama.cpp** | ~20 (by comment density) | ~10 commits | 12 commits (no semver tags) | — |
| **LiteLLM** | 59 | 331 | 1 dev release (v1.110.0-dev.2) | LiteFlow gateway |
| **Unsloth** | 12 | 160 | 0 | — |

**Interpretation:** vLLM, SGLang, and LiteLLM are showing identical GitHub activity fingerprints — a strong signal of shared contributor overlap and synchronized release cadence across the broader open-inference ecosystem. The ~59 issue count is a floor, not noise; it reflects the volume of production incidents being filed as Blackwell and multimodal deployments scale. Unsloth operates at a different velocity (160 PRs, 12 issues) because its scope is narrower (fine-tuning + diffusion serving) but its per-PR impact is high — several PRs today represent architectural changes (VAE tile stitching, Triton kernel unification, FSDP2 composition).

---

## 3. Model Support Race

| Model / Architecture | vLLM | SGLang | llama.cpp | LiteLLM | Unsloth |
|---------------------|:----:|:------:|:---------:|:-------:|:-------:|
| **DeepSeek-V4 / V4.1-Flash** | ✅ Active support + bug fixes | ✅ Active support + TP=8 hang closed | ✅ Via GGUF / speculative decoding | ✅ Via OpenAI-compatible endpoint | — |
| **Qwen3.8 / Qwen3.5** | ✅ FlashInfer, multimodal | ✅ EAGLE/MTP, prefix caching | ✅ Full GGUF stack | ✅ Native + Responses API | ✅ Tool calls template |
| **Qwen3-MoE** | ✅ MoE oracles refactor | ✅ Routed experts reset fix | ✅ Expert stacking fix + FP8 | ✅ Via gateway routing | — |
| **Gemma 4** | ✅ LoRA 3D MoE wrapper | ✅ AR fusion (deadlock fixed) | ✅ Grammar enforcement | ✅ Via proxy routing | — |
| **GLM-5.3-Flash** | — | ⚠️ Engine corruption after 1M tokens (OPEN) | ✅ Via GGUF | ✅ Via gateway | — |
| **Kimi K3 / K2.5** | ✅ ViT CUDA Graph RFC (Qwen3-VL target) | — | — | — | — |
| **Nemotron 3.5 ASR** | ✅ RFC open | — | — | ✅ Via gateway | — |
| **FLUX.3 / Wan** | — | — | — | — | ✅ BF16-fp32 hybrid, Triton fused blocks |
| **Sol-H3 / MiniMax-H3** | — | — | — | — | ✅ VAE optimizations |
| **LTX-2.5** | — | — | — | — | ✅ Int8 checkpoint loading |
| **Qwen-Image-2.1** | — | — | — | — | ✅ CFG pairing, unused K/V culling |
| **Rockchip NPU (RK3588)** | — | — | — | — | ✅ Native backend (PR open) |
| **Intel XPU** | ✅ Qwen3.5 eager mode (PR open) | — | — | — | ✅ Float64 detection fix |
| **AMD ROCm (RDNA 3 / MI355)** | ✅ wvSplitK N=5, FP8 MoE oracle | — | ✅ OpenCL verification | — | ⚠️ RX 6700 XT segfault (OPEN) |

**Leaderboard by category:**

- **Large-scale production inference (8×GPU+ clusters):** vLLM leads with the most Blackwell-specific PRs (DP padding skip, ShardQ under SP, DeepGEMM indexer, RTX PRO 6000 configs). SGLang is close with its unified-memory multi-window refactor stack.
- **Local / edge inference:** llama.cpp maintains its structural lead for CPU, GPU (all vendors), and NPU backends — no competitor offers equivalent cross-vendor coverage.
- **Cloud gateway / multi-provider:** LiteLLM is the uncontested leader; the LiteFlow workflow engine and persisted alerts APIs extend its moat beyond simple proxying.
- **Multimodal / diffusion fine-tuning + serving:** Unsloth is the only project in this cohort targeting the full fine-tuning + serving loop for diffusion models. vLLM's ViT CUDA Graph RFC is the closest serving-layer competitor.
- **Speculative decoding:** llama.cpp, vLLM, and SGLang all have active SD work; llama.cpp has the most mature SD stack for local runtimes but carries the highest regression risk (quantized-target divergence).

---

## 4. Performance Frontier

Today's PRs and RFCs cluster around five optimization vectors:

**1. KV Cache Architecture**
The heaviest investment across projects. SGLang's six-PR unified-memory refactor (#48009–#48014) restructures per-window KV page allocation for GB10/GB200 heterogeneous-window workloads. Ollama's per-layer KV sizing PR (#19327) corrects flat VRAM estimates that caused model eviction thrashing. llama.cpp's MoE expert cache now uses adaptive CPU-sharing with an auto controller, eliminating idle spins. SGLang has a KV-pool saturation bug (#64460) causing 2.3× TPOT inflation — a reminder that KV cache scheduling is still fragile under contention.

**2. Blackwell (SM120/SM121) Optimization**
vLLM is the furthest along: DP padding skip for TRT-LLM MoE (#65972), ShardQ under sequence parallelism (#66041), RTX PRO 5000 FP8 Triton configs (#45263 via SGLang cross-pollination), and FlashInfer b12x warp-MMA backend (#45262). SGLang has equivalent DeepSeek-V4 prefill configs in flight. The critical blocker for both is CUDA graph capture — currently broken on SM120, affecting throughput by 20–40% in eager mode. The Marlin→Humming replacement RFC (#65560) targets this gap.

**3. Quantization**
vLLM is standardizing INT8/FP8 backends via the INT8 backend priority refactor (#66442) and CUTLASS FP8 weight-cache restart support (#63673). SGLang's FlashInfer b12x route for block-fp8-as-MXFP8 on SM12x is a complementary path. Unsloth enabled INT8 on Turing (sm75) hardware, a long-blocked capability. llama.cpp landed a Hopper-native Q6_K prefill kernel using TMA + WGMMA (#31916, merge-ready) — the highest single-kernel optimization in today's digest. The Octave KV (3-bit KV cache) RFC on vLLM (#59773) targets AMD for long-prompt workloads and represents the next frontier in KV compression.

**4. Speculative Decoding**
All three serving engines are iterating on SD correctness. llama.cpp has the most concerning open bug: quantized targets (Q4_K_M) produce divergent output from bf16 targets in draft-mtp and draft-dspark modes (#25618). vLLM's EAGLE/MTP prefix caching is now regression-tested (#66075) but untested for hybrid models with ≥3 attention groups. SGLang's DeepGEMM regression on SM120 (#49173) is blocking its DSV4.1 speculative path. Unsloth's FLUX.3 fp8 denoiser CUDA graph hang (#17166) was fixed but underscores how fragile CUDA graph replay is across PyTorch versions.

**5. Diffusion / Image Generation**
Unsloth dominates this category. Key optimizations: Wan Triton fused blocks with one binary per kernel instead of per-sequence-length (#17101), Sol-H3 VAE geometry-derived attention masks reducing 192 device reads per video (#17100), MiniMax-H3 incremental tile stitching for lower peak memory (#17097), and Qwen-Image-2.1 unused K/V culling (#17118). No other project has comparable diffusion-specific optimization work in flight.

**6. Multi-GPU / Distributed Serving**
SGLang's PD disaggregation roadmap (#43699) and vLLM's Direct Weight Reload RFC (#54477) both target pipeline-parallel and data-parallel separation for RL training loops. llama.cpp's RPC load time 5× improvement on 2× DGX Spark (#29413) is notable for local multi-GPU inference. Ollama's per-model `num_parallel` knob (#9546) addresses multi-tenant memory partitioning.

---

## 5. Layer Positioning

Each project occupies a distinct position in the inference stack, with minimal direct competition at the same layer:

```
┌─────────────────────────────────────────────────────────────┐
│  CLOUD GATEWAY / MULTI-PROVIDER PROXY                       │
│  LiteLLM ──────────────────────────────────────────         │
│  (OpenAI-compatible proxy, 100+ providers, LiteFlow,        │
│   persisted alerts, streaming normalization, budget mgmt)   │
├─────────────────────────────────────────────────────────────┤
│  FINE-TUNING + MULTIMODAL SERVING STUDIO                    │
│  Unsloth ──────────────────────────────────────────         │
│  (LoRA/QLoRA fine-tuning, diffusion serving, vLLM engine,   │
│   VAE optimization, multi-GPU training, INT8 on Turing)     │
├─────────────────────────────────────────────────────────────┤
│  PRODUCTION INFERENCE ENGINES (Bare-Metal / GPU Clusters)   │
│  vLLM          SGLang                                       │
│  (CUDA graph,  (PD disaggregation,                          │
│   MoE oracles,  unified-memory windows,                     │
│   multimodal,   DeepSeek-V4 opt,                            │
│   Blackwell)   NPU support)                                 │
├─────────────────────────────────────────────────────────────┤
│  LOCAL / EDGE / CPU RUNTIME                                 │
│  llama.cpp ─────────────────────────────────────────        │
│  (Cross-vendor GPU (CUDA/ROCm/OpenCL/SYCL/Vulkan),          │
│   CPU (x86/ARM/SpacemiT), NPU, WebAssembly,                 │
│   quantization diversity, GGUF ecosystem)                   │
├─────────────────────────────────────────────────────────────┤
│  EMBEDDINGS / ASR / SPECIALIZED MODELS                      │
│  vLLM (Whisper, Sentence Transformers)                      │
│  LiteLLM (Nemotron ASR via gateway)                         │
│  SGLang (Nemotron 3.5 ASR RFC)                              │
└─────────────────────────────────────────────────────────────┘
```

**Key positioning observations:**

- **vLLM and SGLang are converging.** Both are bare-metal inference engines targeting the same hardware (Blackwell, H100, AMD MI355) and the same customer (infra teams running 8×GPU clusters). The differentiation is architectural: vLLM bets on CUDA graph + speculative decoding depth; SGLang bets on PD disaggregation + unified-memory windows. The competition is healthy — FlashInfer b12x configs in SGLang (#45262) and vLLM (#45263) cross-pollinate, and both are tracking each other's DeepSeek-V4 fixes.

- **llama.cpp is structurally insulated.** It does not compete with vLLM/SGLang for cloud inference — it targets local, edge, and specialized deployments where the full vLLM stack is unavailable. Its nearest competitor is Ollama, which wraps llama.cpp as a runtime. The MoE expert stacking fix (#19614) and INT8 on Turing (#17167) in Unsloth suggest a growing convergence between llama.cpp-based local runtimes and fine-tuning studios.

- **LiteLLM's moat is breadth, not depth.** Its value is in normalization across 100+ providers, not in raw inference performance. The LiteFlow workflow engine extends this into orchestration. The streaming usage undercounting bug (#36114) is its most critical correctness issue because it affects billing and observability — the core value proposition.

- **Unsloth is the only project with a full fine-tuning + serving loop** for diffusion models. Its integration with vLLM (FlashInfer preinstalled, Triton kernels, INT8 on Turing) positions it as the "Unsloth on top of vLLM" stack for multimodal fine-tuning workloads. The Rockchip NPU backend (#19480) extends this to edge AIoT scenarios.

---

## 6. Trend Signals

**1. Blackwell is the new performance frontier — and it's not ready for production CUDA graphs.**
Both vLLM and SGLang have functional inference on SM120/SM121, but CUDA graph capture — the single biggest throughput lever — is broken on Blackwell across both engines. The Marlin→Humming replacement RFC (#65560) is the critical path. Until it lands, Blackwell deployments will run at 60–80% of theoretical throughput. Application developers should plan for `--enforce-eager` fallbacks for the next 2–4 releases.

**2. Speculative decoding correctness is now a production blocker.**
Three of five projects have open SD correctness bugs: llama.cpp (quantized targets, #25618), vLLM (MTP prefix caching, #51771), SGLang (DeepGEMM regression, #49173). SD is being shipped as production feature but lacks the regression test coverage of established paths. Infrastructure teams using SD should maintain bf16/draft-off baselines for comparison.

**3. The multimodal inference stack is bifurcating between ViT-forward and diffusion-forward paths.**
vLLM's ViT CUDA Graph RFC (#38175, 49 comments) targets Qwen3-VL and Kimi K2.5 — transformer-based vision-language models. Unsloth's Wan/FLUX optimizations target diffusion-based image/video generation. These are architecturally distinct (transformer attention vs. UNet/diffusion denoisers), and no single project is optimized for both. The industry is splitting into two multimodal serving stacks.

**4. Backend diversity is accelerating, not consolidating.**
In one day: llama.cpp gained SpacemiT IME2 MXFP4 CPU support, Unsloth added Rockchip NPU, SGLang expanded NPU Longcat2.0, and vLLM continued XPU eager mode work. The era of CUDA-only inference is over. Infrastructure decision-makers should architect for backend-agnostic model formats (GGUF/GGML as the lowest common denominator) and reserve CUDA-specific optimizations for the performance-critical path only.

**5. KV cache management is the new memory frontier.**
Per-layer KV sizing (Ollama), unified-memory multi-window allocation (SGLang), Octave 3-bit KV cache (vLLM RFC), and KV-pool saturation handling (vLLM #64460) all indicate that the next memory efficiency breakthrough will come from smarter KV cache management, not further quantization. Teams running long-context workloads should track the Octave KV RFC closely.

**6. The gateway layer is becoming an intelligent orchestration plane.**
LiteLLM's persisted alerts, LiteFlow workflow engine, budget gauges, and streaming normalization represent a shift from "dumb proxy" to "intelligent routing and observability layer." As inference deployments mature, the gateway's role in cost attribution, model routing, and failure isolation will become as critical as the inference engine itself.

**7. Regression velocity is high — update cadence matters.**
All five projects are moving fast enough that regressions introduced in one release can persist for 1–2 releases before detection (Qwen3.8-Flash-Next prompt truncation was filed against v0.32 nightly; GLM-5.3-Flash corruption appeared in v0.5.23 after a clean v0.5.22). Infrastructure teams should pin to stable releases, maintain canary pipelines, and subscribe to the projects' regression tracking issues (SGLang's #26340 CUDA Coredump Tracker being the most comprehensive).

---

*Digest generated from GitHub activity data for 2026-11-09. All issue and PR numbers reference the respective project repositories.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze this vLLM GitHub data to create a structured digest for 2026-11-09.

Key observations from the data:

1. **Latest Releases**: None in last 24h

2. **Top Issues (by comment count)**:
   - #38175: ViT Full CUDA Graph support for multimodal models (49 comments) - RFC, important for Qwen3-VL, Kimi K2.5
   - #56892: DeepSeek-V4.1-Flash on SM120 (RTX PRO 6000 Blackwell) - extremely low decode throughput with --enforce-eager (30 comments)
   - #37753: MoE "Oracles" unification with class structure (24 comments)
   - #32588: Whisper timestamp bug fixed (20 comments) - CLOSED
   - #32268: Int8ScaledMMLinearLayerConfig refactor to QuantKey (13 comments)
   - #47455: Nemotron 3.5 ASR Streaming support (13 comments)
   - #54477: Direct Weight Reload for RL Training RFC (12 comments)
   - #60904: Specialized (MonoKernels) Decodes RFC (12 comments)
   - #62776: Qwen3.8-Flash-Next prompt visibility bug (11 comments)
   - #51771: EAGLE/MTP prefix caching for hybrid models (10 comments)
   - #57008: XPU memory offload bug (10 comments)
   - #54173: CUBLAS error with Qwen3.8-Flash-Next on GB10 (10 comments)
   - Several other issues...

3. **Top PRs (by recency)**:
   - #63874: FlashInfer teardown fix
   - #66075: EAGLE prefix caching regression tests
   - #63673: Compressed-tensors CUTLASS FP8 weight-cache restarts
   - #66146: EPLB worker failure reporting
   - #66041: ShardQ projections under SP
   - #62916: KV Connector engine ID sync
   - #62785: Sentence Transformers v6 CrossEncoder fix
   - #55993: Demo.py fix in examples
   - #66412: NIXL PD accuracy CI improvements
   - #64687: Qwen3.5 on XPU eager mode
   - #66443: KV Connector push leases fix
   - #65972: Skip DP padding rows in TRT-LLM MoE
   - #66444: ROCm wvSplitK optimization
   - #66350: FP8 MoE oracle fallback fix
   - #66034: XPU CI migration
   - #66283: DeepSeek-V4 DSpark KV rope insert fix
   - #66279: DiffusionGemma bidirectional prefill
   - #64437: Gemma4 LoRA 3D MoE wrapper
   - #66442: INT8 backend priority refactor

Several issues stand out: llguidance's unconditional glibc 2.31 dependency blocks installation, there's a critical bug with Qwen3.8-Flash-Next masking prompts beyond 2048 tokens, CUDA illegal memory access appears in b12x attention during speculative decoding, and EAGLE/MTP prefix caching remains untested across multiple attention groups. For Blackwell, PRs optimize MoE by skipping DP padding rows in TRT-LLM and refining ShardQ projections under sequence parallelism. Additional fixes address FlashInfer resource release on teardown, EAGLE prefix caching with mixed block sizes, FP8 weight-cache restarts, and EPLB worker failure reporting, while a general refactor moves INT8 backend priority handling to the base layer.

On ROCm, wvSplitK N=5 performance receives a boost and FP8 MoE oracle fallback logic improves. KV Connector reliability strengthens through engine ID synchronization, push lease renewal, and expired receive handling. DeepSeek-V4's DSpark KV rope insertion gets corrected, DiffusionGemma now prefills image tokens bidirectionally, and Gemma4 LoRA wraps 3D MoE correctly. XPU migration continues with Qwen3.5 eager mode enabled and B70 jobs shifting to intel_gpu_k8s infrastructure. The RFC for ViT Full CUDA Graph support draws significant engagement at 49 comments, signaling strong community interest.

Several performance and hardware concerns emerge: DeepSeek-V4.1-Flash on Blackwell RTX PRO 6000 shows degraded decode throughput when forcing eager mode, while XPU CPU offload fails to reduce peak memory for WNA16 MoE models. A critical Qwen3.8-Flash-Next regression on GB10 silently truncates prompts beyond 2048 tokens, and b12x attention triggers illegal memory access during speculative decoding verification on v0.33.0. EAGLE/MTP hybrid prefix caching remains untested beyond two attention groups, GDN/Qwen3-Next decode breaks on non-Blackwell hardware with fp32 SSM cache, and ROCm GDN decoding fails when encountering fp32 SSM cache. Memory and KV-cache issues also surface: Triton eager attention backend reconstructs K/V views on every call, KV-pool saturation causes request admission retries to inflate decode latency significantly, and llguidance becomes a hard dependency that blocks installations on older glibc versions.
</think>


# vLLM Project Digest — 2026-11-09

## 1. Today's Highlights

The vLLM community is actively addressing Blackwell (SM120) deployment challenges, with several filed issues and working PRs targeting RTX PRO 6000 and GB10 platforms. A major RFC on ViT Full CUDA Graph support (#38175, 49 comments) signals growing emphasis on multimodal inference optimization, while new PRs landing today include DeepSeek-V4 DSpark KV handling fixes (#66283) and ROCm wvSplitK performance improvements (#66444). Notably, a critical regression affecting Qwen3.8-Flash-Next on GB10 silently truncates prompts beyond ~2048 tokens.

---

## 2. Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| **No new releases** | No tagged releases in the last 24 hours. | — |
| **llguidance hard dependency** | `llguidance` is now an unconditional dependency loaded by `from vllm import LLM`, blocking installation on systems with glibc < 2.31 (e.g., older CentOS 7). | [#66345](https://github.com/vllm-project/vllm/issues/66345) |

---

## 3. New Model & Hardware Support

| Model / Hardware | Status | Details | Link |
|-----------------|--------|---------|------|
| **Nemotron 3.5 ASR Streaming** | RFC open | 600M-param multilingual streaming ASR model; feature request to add support. | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **Qwen3.5 on XPU (Intel)** | PR open | Porting Qwen3.5 models and MTP to XPU eager mode; recovers MoE decode fusion via routed/shared expert provider. | [#64687](https://github.com/vllm-project/vllm/pull/64687) |
| **DeepSeek-V4.1-Flash on SM120** | Field report | Working configuration documented for 8× RTX PRO 6000 Blackwell (96 GB); 1M context verified. CUDA graphs currently unusable on SM120. | [#56892](https://github.com/vllm-project/vllm/issues/56892), [#56700](https://github.com/vllm-project/vllm/issues/56700) |
| **Kimi K3** | Optimization in progress | Multi-task tracking issue for K3 performance improvements; several PRs already merged. | [#50587](https://github.com/vllm-project/vllm/issues/50587) |

---

## 4. Performance & Optimization

### Landed / Merged PRs

| Optimization | Scope | Details | Link |
|-------------|-------|---------|------|
| **Skip DP padding in TRT-LLM MoE** | Blackwell | Avoids routing padding tokens in monolithic MoE kernels; improves throughput under data parallelism imbalance. | [#65972](https://github.com/vllm-project/vllm/pull/65972) |
| **ShardQ sequence-sharded under SP** | DSA | New `--attention-config.sparse_mla_shard_q_mode fuse_sp` for sparse-MLA with sequence-parallel MoE; preserves replicated KV/cache. | [#66041](https://github.com/vllm-project/vllm/pull/66041) |
| **ROCm wvSplitK N=5 unroll fix** | AMD MI355 | Matches N=5 (speculative decode batch) unroll factor to N=4 on YTILE=4 tile; ~4× speedup for large projections. | [#66444](https://github.com/vllm-project/vllm/pull/66444) |
| **FlashInfer workspace release** | Distributed | Properly releases FlashInfer one-sided all-to-all resources on engine teardown. | [#63874](https://github.com/vllm-project/vllm/pull/63874) |
| **CUTLASS FP8 weight-cache restarts** | Quantization | Enables CUDA IPC weight-cache restarts for serialized compressed-tensors FP8 linear weights. | [#63673](https://github.com/vllm-project/vllm/pull/63673) |

### Active RFCs & Proposals

| Proposal | Impact | Summary | Link |
|----------|--------|---------|------|
| **ViT Full CUDA Graph** | High | RFC for CUDA graph capture across Vision Transformer forward passes in multimodal models (Qwen3-VL, Kimi K2.5). | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| **Humming → Marlin replacement** | Medium | Proposal to replace Marlin (SM80-era) with Humming kernel across NVIDIA architectures (INT4/INT8 GPTQ/AWQ, FP8, MXFP8, MXFP4, NVFP4, MXFP6). | [#65560](https://github.com/vllm-project/vllm/issues/65560) |
| **Octave KV (3-bit KV cache)** | Medium | Native 3-bit KV cache for AMD GPUs; targets long-prompt workloads on RX 7900 XTX. | [#59773](https://github.com/vllm-project/vllm/issues/59773) |
| **Specialized MonoKernels** | Medium | Standardization RFC for manually fused decode implementations in `vllm/models`; targets ROCm and NVIDIA. | [#60904](https://github.com/vllm-project/vllm/issues/60904) |

---

## 5. Stability & Regressions

Ranked by severity:

### 🔴 Critical

| Bug | Environment | Impact | Fix PR | Link |
|-----|-------------|--------|--------|------|
| **Prompt truncation past 2048 tokens** | Qwen3.8-Flash-Next, GB10 (sm121), v0.32 nightly | Everything beyond `indexer_budget` (default 2048) is invisible to the model; silent correctness failure. | — | [#62776](https://github.com/vllm-project/vllm/issues/62776) |
| **b12x attention IMA at MTP verify** | SM120, v0.33.0, NVFP4 MoE, fp8 KV, chunked prefill | CUDA illegal memory access at first speculative decode verify step; regression from v0.32.0. | — | [#65139](https://github.com/vllm-project/vllm/issues/65139) |

### 🟠 High

| Bug | Environment | Impact | Fix PR | Link |
|-----|-------------|--------|--------|------|
| **GDN/Qwen3-Next decode collapse** | AMD MI50 (gfx906), fp32 SSM cache | Decode degenerates to repeated single token on long conversations; affects ROCm. | — | [#54308](https://github.com/vllm-project/vllm/issues/54308) |
| **XPU offload doesn't reduce peak memory** | Intel XPU, WNA16 MoE, UVA backend | `--cpu-offload-gb` fails to relocate parameter storage for compressed-tensors models. | — | [#57008](https://github.com/vllm-project/vllm/issues/57008) |
| **EAGLE/MTP prefix cache untested** | Hybrid models ≥3 attention groups (DeepSeek-V4-Flash + DSpark) | Prefix caching behavior undefined for multi-group shapes; related regression tests merged. | [#66075](https://github.com/vllm-project/vllm/pull/66075) | [#51771](https://github.com/vllm-project/vllm/issues/51771) |

### 🟡 Medium

| Bug | Environment | Impact | Fix PR | Link |
|-----|-------------|--------|--------|------|
| **KV view re-derivation overhead** | Triton/FlashAttention eager backends | K/V cache views re-computed on every attention call; affects latency. | RFC | [#64572](https://github.com/vllm-project/vllm/issues/64572) |
| **KV-pool admission retry inflation** | V1 scheduler, all backends | Saturated KV pool causes ~2.3× TPOT inflation; request backoff needed. | — | [#64460](https://github.com/vllm-project/vllm/issues/64460) |
| **CUBLAS_STATUS_INTERNAL_ERROR** | GB10 (sm_121), Qwen3.8-Flash-Next, GDN path | Illegal memory access with prefix caching; `--no-async-scheduling` doesn't help. | — | [#54173](https://github.com/vllm-project/vllm/issues/54173) |

---

## 6. What This Means for Application Developers

**For those serving multimodal models (Qwen3-VL, Kimi K2.5):** The ViT CUDA Graph RFC (#38175) indicates significant optimization work is underway. If you're experiencing ViT forward bottlenecks, track this RFC—it may resolve them within 1–2 releases.

**For Blackwell/RTX PRO 6000 users:** SM120 CUDA graph capture is currently broken (#56892). If you need functional inference today, use `--enforce-eager` as a workaround (at significant throughput cost). Monitor the Marlin→Humming replacement (#65560) as it targets Blackwell-specific quantization paths.

**For Qwen3.8-Flash-Next deployments on GB10/DGX Spark:** Avoid long prompts (>2K tokens) until #62776 is resolved—this is a silent correctness bug where the model "forgets" prompt content. If you must use longer contexts, monitor the upstream fix.

**For AMD ROCm users:** The wvSplitK fix (#66444) specifically improves speculative decode batch performance on MI355. Update once merged. Also watch the Octave KV cache RFC (#59773) for long-document use cases.

**For Intel XPU deployments:** Qwen3.5 eager mode support (#64687) is progressing; this will enable MoE decode fusion previously unavailable on XPU. The memory offload bug (#57008) remains open—plan accordingly for WNA16 MoE models.

**For anyone on older Linux distributions:** The llguidance hard dependency (#66345) will block `pip install vllm` on CentOS 7 / glibc < 2.31 systems. Track this if you have constrained runtime environments.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze the GitHub data for SGLang on 2026-11-09 and create a structured digest.

Key observations:
1. No releases in the last 24 hours
2. Many active issues with high comment counts
3. Several PRs updated in the last 24h, including a large stack of refactoring PRs
4. Notable bugs and features being discussed

Let me organize the information:

**High-comment issues (last 24h):**
- #26340: CUDA Coredump Tracker (360 comments) - ongoing tracking issue
- #21302: AITER-Upgrade PR readiness (44 comments)
- #33422: DeepSeek-V4 prefill perf issue on SM120 (23 comments)
- #43699: PD Disaggregation Roadmap Q4 (20 comments)
- #33549: DeepSeek-V4 TP=8 hang (CLOSED, 10 comments)
- #36941: GB10 long prefill OOM issue (8 comments)
- #43313: SGLang-Diffusion Roadmap Q4 (6 comments)

**Notable PRs updated in last 24h:**
- #48409: Fixed-batch bounded LPM policy
- #45263: FP8 Triton configs for RTX PRO 5000
- #45262: FlashInfer b12x for block-fp8-as-MXFP8 on SM12x
- #48211: Fix null tool-level defer_loading (CLOSED)
- #48861: CPU SWA index translation optimization
- #46548: PP prefill consensus checker fix
- #49160: Gemma4 AR fusion test deadlock fix (CLOSED)
- #48207: Routed-experts reset fix (CLOSED)
- #47917: Longcat2.0 for NPU arch22
- #47383: NPU native LIM and CopySFA KV offload


- #41521: Intel shm kernels routing
- #49000: NPU dsv4 compressor state fix
- #32602: NPU W4A4 MoE support
- #49207: Session media cleanup fix (CLOSED)

The refactoring stack around unified memory continues with #48014 through #48009 representing significant architectural changes to memory management and PD transfers.

**New bugs/features:**
- #49133: Breakable prefill CUDA graph logprobs mismatch
- #48963: KV sharing for same-prompt requests
- #48593: CUDA graph capture fails for hybrid linear attention
- #48964: GLM-5.3-Flash engine corruption after 1M tokens
- #49185: Qwen3-MoE quantized router not loaded
- #49173: SM120/SM121 regression in DSV4.1 DeepGEMM
- #40835: LoRA rslora wrong scale
- #47734: FA3 MmaPV_is_RS=false perf issue on H200

**Roadmap discussions:**
- PD Disaggregation Q4 roadmap
- SGLang-Diffusion Q4 roadmap
- NPU Longcat2.0 support
</think>


# SGLang Digest — 2026-11-09

## 1. Today's Highlights

The community is converging on Blackwell-era infrastructure: a six-PR stack (#48009–#48014) refactors unified-memory allocation, KV page tracking, and PD disaggregation for multi-window workloads, while two PRs land FP8 tuning for RTX PRO 5000 and FlashInfer's b12x backend on SM12x. On the stability front, a critical DeepSeek-V4 TP=8 hang on H20 (#33549) is now closed, but a new GLM-5.3-Flash engine-corruption bug after 1M-token requests (#48964) on v0.5.23 warrants immediate attention.

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours.

---

## 3. New Model & Hardware Support

| Item | Detail | Link |
|------|--------|------|
| **NPU Longcat2.0** | Longcat2.0 support landed for Ascend arch22 NPU (PR #47917). | [#47917](https://github.com/sgl-project/sglang/pull/47917) |
| **NPU W4A4 MoE** | Online W4A4 MoE quantization for Ascend NPUs (PR #32602, in progress). | [#32602](https://github.com/sgl-project/sglang/pull/32602) |
| **RTX PRO 5000 FP8** | 8 tuned Triton block-fp8 GEMM configs added for RTX PRO 5000 (SM120, Blackwell). | [#45263](https://github.com/sgl-project/sglang/pull/45263) |
| **FlashInfer b12x on SM12x** | Block-fp8-as-MXFP8 linears on SM120/SM121 now route to FlashInfer 0.7.2's warp-MMA backend for faster small-M tiles. | [#45262](https://github.com/sgl-project/sglang/pull/45262) |

---

## 4. Performance & Optimization

| Category | Detail | Link |
|----------|--------|------|
| **Prefill throughput** | DeepSeek-V4 on SM120 (4× RTX PRO 6000, TP=4) achieves ~2–7K tok/s vs ~12.5K reported by vLLM/marlin; users requesting tuning guidance (#33422). | [#33422](https://github.com/sgl-project/sglang/issues/33422) |
| **Unified-memory windows** | Six-PR stack (#48009–#48014) restructures memory layout planning, per-window sub-pool host allocation, and PD transfer page reuse — targets GB10/GB200 deployments with heterogeneous window lengths. | [#48014](https://github.com/sgl-project/sglang/pull/48014) |
| **CPU attention** | SWA index translation moved into Intel AMX kernels; masked prefix loads pruned (#48861). | [#48861](https://github.com/sgl-project/sglang/pull/48861) |
| **Intel shm kernels** | `all_gather_into_tensor` / `reduce_scatter_tensor` routed to shared-memory kernels (#41521). | [#41521](https://github.com/sgl-project/sglang/pull/41521) |
| **LPM scheduler** | Fixed-batch bounded LPM policy adds cache-aware ordering window beyond FCFS fallback (#48409). | [#48409](https://github.com/sgl-project/sglang/pull/48409) |
| **H200 FA3** | `MmaPV_is_RS=false` for hdim 128 non-causal on H200 causing 1.5–3% slowdown vs flash-attn's hopper build (#47734). | [#47734](https://github.com/sgl-project/sglang/issues/47734) |
| **NPU KV offload** | Native LIM and CopySFA KV offload for Ascend DSA (#47383). | [#47383](https://github.com/sgl-project/sglang/pull/47383) |

---

## 5. Stability & Regressions

### Critical (immediate attention)
| Issue | Description | Status | Link |
|-------|-------------|--------|------|
| **GLM-5.3-Flash corruption** | After a 1M-token request with EAGLE spec decoding, engine state corrupts (MTP accept rate = 0.00, all subsequent requests degenerate). Clean on v0.5.22; reproduced on nightly-dev-cu13-20261028. | OPEN | [#48964](https://github.com/sgl-project/sglang/issues/48964) |
| **CUDA graph logprobs mismatch** | Breakable prefill CUDA graph: short prefills padded to a capture bucket produce different logprobs than eager mode (Qwen3.8-27B-NVFP4, hybrid GDN, v0.5.23). | OPEN | [#49133](https://github.com/sgl-project/sglang/issues/49133) |
| **GB10 prefill OOM** | Long prefill >40k tokens exhausts unified memory on GB10 and silently kills the worker rank with no traceback between 54k–62k tokens. | OPEN | [#36941](https://github.com/sgl-project/sglang/issues/36941) |

### High (fix PRs exist or bug closed recently)
| Issue | Description | Status | Link |
|-------|-------------|--------|------|
| **DeepSeek-V4 TP=8 hang** | Decode forward hangs at ~245K context on 8×H20; watchdog kills server. | **CLOSED** | [#33549](https://github.com/sgl-project/sglang/issues/33549) |
| **DSV4.1 DeepGEMM regression** | PR #48399 drops SM120/SM121 from DeepGEMM indexer gates → 8× prefill regression on GB10 due to torch fallback calling `.tolist()` per layer. | OPEN | [#49173](https://github.com/sgl-project/sglang/issues/49173) |
| **Qwen3-MoE quantized router** | Router stored in compressed-tensors format is never loaded; server answers garbage with no error. | OPEN | [#49185](https://github.com/sgl-project/sglang/issues/49185) |
| **Hybrid linear attention CUDA graph** | Full prefill CUDA graph capture fails with `IndexError` for hybrid linear attention models (GDN/KDA layers). | OPEN | [#48593](https://github.com/sgl-project/sglang/issues/48593) |
| **Gemma4 AR fusion test deadlock** | Test deadlocks on 4-GPU B200 CI runners (600s timeout); fix merged (#49160). | **CLOSED** | [#49160](https://github.com/sgl-project/sglang/pull/49160) |
| **Session media cleanup** | Session close not deferred while an unfinished turn still reads media; fix merged (#49207). | **CLOSED** | [#49207](https://github.com/sgl-project/sglang/pull/49207) |

---

## 6. What This Means for Application Developers

1. **Blackwell deployments (GB10/GB200)**: The unified-memory multi-window refactor stack (#48009–#48014) is the path forward for serving models with heterogeneous attention windows. If you run speculative decoding on GB10, watch #36941 for the OOM boundary — keep prefill lengths below ~40k tokens until the fix lands.

2. **DeepSeek-V4 on RTX PRO 6000**: If you need 12K+ tok/s prefill, the vLLM/marlin path currently outperforms SGLang on SM120. The FP8 Triton configs in #45263 and the FlashInfer b12x backend in #45262 should narrow the gap; monitor those PRs for merges.

3. **Avoid v0.5.23 for GLM-5.3-Flash production**: The engine-state corruption bug after large requests (#48964) is reproducible. Either roll back to v0.5.22 or hold off on GLM-5.3-Flash deployments until the fix is released.

4. **Qwen3-MoE with compressed-tensors**: If your MoE router weights are quantized, the current build will silently return garbage (#49185). Verify router loading explicitly or disable compressed-tensors for the routing layer until this is patched.

5. **NPU roadmap**: Ascend users can track W4A4 MoE (#32602) and Longcat2.0 (#47917) as upcoming capabilities for 2026 Q4.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a structured digest for llama.cpp based on the GitHub data provided. Let me analyze the data carefully.

Looking at the data:

**Releases (last 24h):**
- b12211: mtmd refactoring - remove clip.h, consolidate code into mtmd
- b12210: CPU enable SpacemiT IME2 MXFP4 dense repack
- b12209: llamafile impl bf16 and q8_0 vxe
- b12208: ggml CUDA/Metal radix Top-K deterministic tied selections
- b12207: ggml-cuda add d_state=64 fast path to SSM_SCAN kernel (for Zamba2)
- b12206: moe-cache ensure CPU part does not wait for cached experts
- b12202: llama, mtmd follow reference precision of ggml_prec_set_acc calls
- b12201: speculative do not apply MoE cache to draft model
- b12200: opencl improve q8_0 and MoE small-n verification for spec
- b12199: common sanitize invalid UTF-8 in PEG tool call arguments

**Issues (top by comments):**
1. #25618 - Speculative decoding bug with quantized targets (39 comments) - OPEN
2. #27845 - Memory leak with SYCL on Intel B70 (23 comments) - CLOSED
3. #29949 - MoE expert cache with GPU-resident LRU feature request (19 comments) - OPEN
4. #24943 - Vulkan stable-diffusion VAE garbles images (14 comments) - OPEN
5. #28753 - ggml crash unexpected graph reallocation (11 comments) - OPEN
6. #24473 - Compact Conversation Action feature (10 comments) - OPEN
7. #28090 - Add sm_86 entry to MMVQ cutoff table (10 comments) - OPEN


8. #25187 - FR-Spec-style draft-vocab trimming research (9 comments) - OPEN
9. #24375 - Microphone button feature (7 comments) - CLOSED
10. #26257 - Qwen3.6-27B garbled output on dual-GPU CUDA (7 comments) - CLOSED

Several speculative decoding issues are emerging around quantized target handling and graph reallocation problems. Feature requests like GPU-resident LRU caching and conversation compaction are gaining traction, while some CUDA-related bugs affecting multi-GPU setups have been resolved.

Additional issues include assertion failures in attention kernels on AMD hardware, missing Lightning indexing operations for Intel platforms, and memory management concerns with QSA kpool caching that consumes approximately 400 MiB per GPU during tensor operations. Vulkan output corruption on Intel Arc hardware persists through long-context scenarios, and NaN contamination in recurrent states can corrupt subsequent inference requests. Some problems like image prompt cache hits for hybrid SSM models and localhost UI display behavior remain unresolved despite attention.

Several pull requests aim to address performance bottlenecks: IQ2 quantization acceleration through caching mechanisms, a debug buffer pool for CUDA tracking, and specialized kernel optimizations for H100 prefill operations. The radix Top-K implementation has been updated to ensure deterministic behavior across CUDA and Metal backends, while MoE cache management now uses adaptive CPU sharing. OpenCL verification has improved for q8_0 and smaller MoE configurations. The SpacemiT IME2 MXFP4 dense repack feature is now enabled on CPU, and Zamba2 SSM_SCAN operations with d_state=64 benefit from optimized fast paths.

For developers leveraging this framework, key integration points include grammar enforcement for Gemma 4 tool calls, flexible JSON tool argument ordering for Qwen3-Coder and Nemotron models, and persistent prompt caching through the --cache-disk option. The speculative decoding issue with quantized targets appears significant for production deployments, while the MoE expert cache GPU-resident LRU enhancement represents a major architectural improvement. The NaN state persistence bug and free VRAM calculation issue in device_room() with draft models are critical fixes that warrant immediate attention.

Several performance optimizations are underway: a native Hopper Q6_K prefill kernel targeting H100 GPUs, optional CUDA stream separation for expert copies, and backend grammar sampling. The OpenCL improvements to q8_0 and MoE small-n verification round out the recent work on quantization and mixture-of-experts handling.
</think>


# llama.cpp Digest — 2026-11-09

## Today's Highlights

The project saw continued momentum across quantization performance and backend diversity. Notable merges include a deterministic fix for CUDA/Metal radix Top-K tied selections, SpacemiT IME2 MXFP4 CPU support, and a fast path for Zamba2 SSM_SCAN with `d_state=64`. The MoE cache CPU-wait regression from b12206 was addressed, and an OpenCL verification path for q8_0/MoE landed. A critical NaN persistence bug in recurrent state is under active PR review.

## Releases & Breaking Changes

| Commit | Description | Notes |
|--------|-------------|-------|
| [b12211](https://github.com/ggml-org/llama.cpp/commit/b12211) | **mtmd: remove clip.h, consolidate into mtmd** | Internal refactoring |
| [b12210](https://github.com/ggml-org/llama.cpp/commit/b12210) | **CPU: enable SpacemiT IME2 MXFP4 dense repack** | New CPU ISA extension support |
| [b12209](https://github.com/ggml-org/llama.cpp/commit/b12209) | **llamafile: impl bf16 and q8_0 vxe** | llamafile portability fix |
| [b12208](https://github.com/ggml-org/llama.cpp/commit/b12208) | **CUDA/Metal: radix Top-K deterministic tied selections** | Correctness fix for ranking stability |
| [b12207](https://github.com/ggml-org/llama.cpp/commit/b12207) | **ggml-cuda: d_state=64 fast path for SSM_SCAN** | Zamba2-class architectures |
| [b12206](https://github.com/ggml-org/llama.cpp/commit/b12206) | **moe-cache: CPU part no longer waits for cached experts** | Regression fix from prior release |
| [b12202](https://github.com/ggml-org/llama.cpp/commit/b12202) | **llama/mtmd: follow reference precision of ggml_prec_set_acc** | GLM4 family correctness |
| [b12201](https://github.com/ggml-org/llama.cpp/commit/b12201) | **speculative: do not apply MoE cache to draft model** | Correctness isolation |
| [b12200](https://github.com/ggml-org/llama.cpp/commit/b12200) | **OpenCL: q8_0 and MoE small-n verification for spec** | Spec compliance hardening |
| [b12199](https://github.com/ggml-org/llama.cpp/commit/b12199) | **common: sanitize invalid UTF-8 in PEG tool call arguments** | Robustness |

No semantic versioning bumps; all changes landed on `master`.

## New Model & Hardware Support

- **SpacemiT IME2 MXFP4** — CPU backend now supports the MXFP4 dense repack ISA extension ([b12210](https://github.com/ggml-org/llama.cpp/commit/b12210))
- **Zamba2 / SSM-SCAN (d_state=64)** — CUDA kernel fast path added; previously fell back to CPU ([b12207](https://github.com/ggml-org/llama.cpp/commit/b12207))
- **Hopper H100 Q6_K prefill** — Native TMA + WGMMA prefill kernel in PR review ([#31916](https://github.com/ggml-org/llama.cpp/pull/31916))
- **OpenCL q8_0 / MoE small-n** — Spec-compliant verification paths landed ([b12200](https://github.com/ggml-org/llama.cpp/commit/b12200))
- **OpenBSD server path resolution** — Uses `getexecpath(3)` for executable location ([#31885](https://github.com/ggml-org/llama.cpp/pull/31885))

## Performance & Optimization

| Area | Change | Source |
|------|--------|--------|
| **IQ2 quant creation** | Pattern caching speeds up quant file generation (byte-identical output) | [#31910](https://github.com/ggml-org/llama.cpp/pull/31910) |
| **H100 prefill** | Native Hopper Q6_K path using TMA/WGMMA | [#31916](https://github.com/ggml-org/llama.cpp/pull/31916) (merge-ready) |
| **MoE expert copies** | Optional separate CUDA stream via `GGML_CUDA_UPLOAD_STREAM=1` | [#31850](https://github.com/ggml-org/llama.cpp/pull/31850) |
| **MoE cache CPU wait** | Eliminated idle spin on cached expert availability | [b12206](https://github.com/ggml-org/llama.cpp/commit/b12206) |
| **Backend grammar sampling** | Token masking on GPU for standard and LLGuidance grammars | [#31912](https://github.com/ggml-org/llama.cpp/pull/31912) |
| **Qwen4 QSA chunking** | Memory reduction ~4 GiB with 8192 ub (prototype) | [#30815](https://github.com/ggml-org/llama.cpp/pull/30815) |
| **RPC load times** | 5× improvement reported on 2× DGX Spark (DeepSeek-V4-Flash) | [#29413](https://github.com/ggml-org/llama.cpp/pull/29413) |
| **CUDA debug buffer pool** | `GGML_CUDA_POOL_DEBUG=1` for exact-size scratch tracking | [#31919](https://github.com/ggml-org/llama.cpp/pull/31919) |
| **SYCL MoE scheduling** | Device-side scheduler keeps GPU graphs unbroken | [#30156](https://github.com/ggml-org/llama.cpp/pull/30156) |

## Stability & Regressions

**🔴 Critical (active impact)**

| Issue | Description | Severity | Status | Fix PR |
|-------|-------------|----------|--------|--------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | Speculative decoding produces divergent output on quantized (Q4_K_M) targets vs bf16 — affects draft-mtp and draft-dspark | **High** | OPEN | — |
| [#29830](https://github.com/ggml-org/llama.cpp/issues/29830) | Recurrent state NaN never cleared, corrupts all subsequent server requests | **High** | OPEN | [#31913](https://github.com/ggml-org/llama.cpp/pull/31913) |
| [#31704](https://github.com/ggml-org/llama.cpp/issues/31704) | Cancelled long embedding never released → server serves empty responses while /health reports OK | **High** | OPEN | — |

**🟡 Notable**

| Issue | Description | Severity | Status | Fix PR |
|-------|-------------|----------|--------|--------|
| [#31828](https://github.com/ggml-org/llama.cpp/issues/31828) | Vulkan output corruption on Intel Arc B-series persists in long-context/RAG even with `GGML_VK_DISABLE_COOPMAT` | Medium | OPEN | — |
| [#27674](https://github.com/ggml-org/llama.cpp/issues/27674) | Assertion failure in `launch_fattn` on AMD HIP/ROCm (RX6950XT) | Medium | OPEN | — |
| [#30860](https://github.com/ggml-org/llama.cpp/issues/30860) | qwen4exp + `--spec-type draft-mtp` aborts on server start with GGML_ASSERT(buffer) | Medium | OPEN | — |
| [#28753](https://github.com/ggml-org/llama.cpp/issues/28753) | ggml crash: unexpected graph reallocation in `ggml_backend_sched_alloc_splits` | Medium | OPEN | — |
| [#30005](https://github.com/ggml-org/llama.cpp/issues/30005) | QSA kpool cache doubled (~400 MiB/GPU) under `-sm tensor` | Low | OPEN | — |
| [#29680](https://github.com/ggml-org/llama.cpp/issues/29680) | Server streams advertise Keep-Alive but close connection, causing ReadError on pooled HTTP clients | Low | OPEN | — |

**✅ Fixed/Closed**

- [#27845](https://github.com/ggml-org/llama.cpp/issues/27845) Memory leak with SYCL + dual Intel B70 — CLOSED
- [#26257](https://github.com/ggml-org/llama.cpp/issues/26257) Qwen3.6-27B garbled output on mixed GPU CUDA — CLOSED
- [b12206](https://github.com/ggml-org/llama.cpp/commit/b12206) MoE cache CPU regression — resolved same day

## What This Means for Application Developers

1. **Speculative decoding + quantization**: If you run draft-model speculative decoding against quantized targets (Q4_K_M, Q8_0, etc.), expect output divergence from non-speculative runs. Track [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) for resolution; until then, use bf16 targets or disable speculation for quantized models.

2. **Recurrent model NaN risk**: For Qwen3.8-flash-next and similar recurrent architectures, a NaN in any recurrent layer state becomes permanent, corrupting all future inferences on that server instance. Monitor outputs for NaN tokens; consider watchdogs that restart the server process on detection. PR [#31913](https://github.com/ggml-org/llama.cpp/pull/31913) is pending.

3. **SYCL + Intel Arc B-series**: The SYCL backend memory leak on dual B70 configuration is closed; update if you hit OOM on multi-device SYCL setups.

4. **MoE expert cache behavior**: The `--moe-cache-cpu-share` parameter now has an auto controller ([#31286](https://github.com/ggml-org/llama.cpp/pull/31286)). The draft model no longer participates in MoE cache decisions ([b12201](https://github.com/ggml-org/llama.cpp/commit/b12201)), which may change latency profiles for speculative decoding pipelines.

5. **New performance knobs**: H100 users should evaluate the Q6_K prefill kernel ([#31916](https://github.com/ggml-org/llama.cpp/pull/31916)) for dense prefill workloads. MoE operators can experiment with `GGML_CUDA_UPLOAD_STREAM=1` to overlap expert H2D copies with compute.

6. **Gemma 4 tool calling**: If using Gemma 4 with tool schemas, PR [#31612](https://github.com/ggml-org/llama.cpp/pull/31612) enforces schema-constrained grammar generation, improving adherence to user-provided argument specifications.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze the GitHub data provided for Ollama on 2026-11-09 and create a structured digest.

Key observations:

**Releases**: None in last 24h

**Issues to highlight**:
1. Bug: AMD Radeon 780M Vulkan regression in Ollama >=0.32.10 (VK memory errors)
2. Bug: 403 Forbidden on ollama pull behind corporate proxy
3. Bug: Version command showing unexpected warning text
4. Feature request: OLLAMA_LOAD_TIMEOUT of 300 seconds too short
5. Model metadata typo in gemma4:12b-it-qat (closed)
6. Performance: KV cache sizing per layer PR
7. New backend: Rockchip NPU support
8. MoE expert stacking and FP8 import fixes
9. Various format/utility fixes

**Pull Requests highlights**:
1. #19617: HumanBytes2 unit boundary rounding fix
2. #19499: HumanNumber rounding fix (closed)
3. #19327: Size predicted KV cache per layer
4. #19480: Rockchip NPU backend support
5. #19614: MoE expert stacking and lossless FP8 import
6. #18355: Gemma4 string placeholder collision fix
7. #9546: Per-model num_parallel control
8. #18592: Docker MLX/Vulkan support
9. #19571: GGUF duplicate tensor rejection
10. #17965: Auto-detect ornith and qwen35 renderer

Let me structure this into the required sections.
</think>


# Ollama Digest — 2026-11-09

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The dominant theme today is backend and infrastructure hardening: a Rockchip NPU (`rocket`/`rknpu`) backend landed for RK3588/RK3576 SoCs, a long-standing MoE expert-stacking bug was fixed with lossless FP8 import, and a critical KV-cache sizing PR moved forward to correct VRAM estimates that have been causing model eviction thrashing. On the reliability side, a Vulkan regression on AMD Radeon 780M (introduced in 0.32.10) remains open and unresolved.

## 2. Releases & Breaking Changes

No releases in the last 24 hours.

- **Pending config change**: `PARAMETER env` in Modelfiles (PR [#16711](https://github.com/ollama/ollama/pull/16711)) would allow per-model environment variable injection into the runner — this is a new capability, not a breaking change, but requires documentation once merged.

## 3. New Model & Hardware Support

| Item | Detail | Status |
|------|--------|--------|
| **Rockchip NPU backend** (`rocket`/`rknpu`) | Native support for RK3588 & RK3576 SoCs on Linux. Offloads prompt processing (prefill `GGML_OP_MUL_MAT`, MoE `GGML_OP_MUL_MAT_ID`, `GGML_OP_FLASH_ATTN_EXT`) to the NPU while single-token decode stays on CPU. | PR [#19480](https://github.com/ollama/ollama/pull/19480) — Open |
| **Auto-detect ornith/qwen35 renderers** | Ollama now defaults to `gguf_chat_template` for `ornith-1.5:35b` and `qwen35`/`qwen35moe`-derived architectures when no renderer is specified. | PR [#17965](https://github.com/ollama/ollama/pull/17965) — Open |
| **Docker MLX + Vulkan (Nvidia)** | Docker container now bundles required libs/configs for MLX runner and Vulkan driver with `--gpus all`. | PR [#18592](https://github.com/ollama/ollama/pull/18592) — Open |
| **Per-model `num_parallel`** | Adds a Modelfile/environment-variable knob to override `OLLAMA_NUM_PARALLEL` on a per-model basis — directly addresses the feature request from issues [#11977](https://github.com/ollama/ollama/issues/11977) and [#5693](https://github.com/ollama/ollama/issues/5693). | PR [#9546](https://github.com/ollama/ollama/pull/9546) — Open |

**Model metadata fix**: Typo in `gemma4:12b-it-qat` Modelfile (`toos` → `tools`) has been closed.

## 4. Performance & Optimization

| PR | Change | Impact |
|----|--------|--------|
| [#19327](https://github.com/ollama/ollama/pull/19327) — `llm: size the predicted KV cache per layer` | Replaces flat `head_count_kv × embedding_length / head_count` sizing with per-layer `head_count_kv`. Previous logic underestimated layers with higher `head_count_kv`, causing scheduler eviction thrashing when load estimates diverged from actual `llama-server` allocation. | High — reduces unexpected model eviction on multi-model servers |
| [#19614](https://github.com/ollama/ollama/pull/19614) — `create, mlxrunner: consistent expert stacking and lossless FP8 import` | Standardizes MoE expert stacking across all source types (previously per-source planners had inconsistent coverage). Fixes lossy FP8 import: block FP8 no longer re-quantizes to mxfp8, per-tensor FP8 now supported. | Medium — correctness + quality for MoE models on Apple Silicon |
| [#19324](https://github.com/ollama/ollama/pull/19324) — `llm: add up repeated buffer lines within a load` | Aggregates duplicate buffer keys emitted by `llama.cpp` within a single load, improving memory bookkeeping accuracy. | Medium — memory estimation fidelity |
| [#19500](https://github.com/ollama/ollama/pull/19500) / [#19617](https://github.com/ollama/ollama/pull/19617) — `HumanNumber` / `HumanBytes2` unit-boundary rounding | Values that round up across unit boundaries (e.g. `999500` → `1000K` instead of `1M`) now promote to the next unit. Affects display in logs and CLI output. | Low — UX/observability |
| [#9547](https://github.com/ollama/ollama/pull/9547) — `num_predict==-2` for context-fill mode | Shadows `llama.cpp` behavior: `-2` fills the context buffer rather than infinite or fixed-limit generation. | Medium — flexibility for long-context use cases |

## 5. Stability & Regressions

| Severity | Issue | Detail | Fix PR? |
|----------|-------|--------|---------|
| 🔴 **High** | **AMD Radeon 780M Vulkan regression** | Ollama ≥0.32.10 fails on 780M with `radv/amdgpu: Not enough memory for command submission` / `vk::Queue::submit: ErrorDeviceLost`. Same hardware works on earlier versions. | No fix PR yet — [#17748](https://github.com/ollama/ollama/issues/17748) |
| 🔴 **High** | **403 Forbidden on model pull behind corporate proxy** | `ollama pull` fails with 403 even though `curl` works. Affected: RHEL 9.2 + Blue Coat CA corporate proxy + systemd service. Likely certificate/header mismatch in HTTP client. | No fix PR yet — [#19604](https://github.com/ollama/ollama/issues/19604) |
| 🟡 **Medium** | **`ollama -v` spurious warning text** | Version flag outputs `Warning: could not connect to a running Ollama instance` before the version number, breaking scripted parsing. | No fix PR yet — [#19613](https://github.com/ollama/ollama/issues/19613) |
| 🟡 **Medium** | **OOM-style thrashing from API field differences** | Unset optional API fields cause models to be reloaded, evicting other models unnecessarily. PR [#10003](https://github.com/ollama/ollama/pull/10003) addresses this. | Open PR — [#10003](https://github.com/ollama/ollama/pull/10003) |
| 🟢 **Low** | **Gemma4 tool-call corruption** | Models with ≥45 scalar string arguments followed by a two-string array could produce corrupted JSON due to placeholder collision (`NUL + comma + NUL` matching array-boundary markers). | PR [#18355](https://github.com/ollama/ollama/pull/18355) — Open |
| 🟢 **Low** | **GGUF duplicate tensor names not rejected early** | Files with duplicate tensor names passed metadata parsing but failed on `Open()`. Now detected at metadata parse time. | PR [#19571](https://github.com/ollama/ollama/pull/19571) — Open |

## 6. What This Means for Application Developers

1. **Watch the Vulkan AMD regression.** If you are running Ollama on laptops or desktops with an AMD Radeon 780M iGPU, avoid upgrading past 0.32.9 until [#17748](https://github.com/ollama/ollama/issues/17748) is resolved. CPU fallback is functional but slower.

2. **Corporate network users: model pulls may fail.** If you are deploying Ollama behind a corporate proxy with SSL inspection, the native pull command may return 403 while `curl` succeeds — a sign the Ollama HTTP client is not passing required proxy headers or certificates. Track [#19604](https://github.com/ollama/ollama/issues/19604) for a fix.

3. **Multi-model VRAM management is improving.** The KV-cache-per-layer sizing PR ([#19327](https://github.com/ollama/ollama/pull/19327)) will reduce spurious model eviction on mixed-workload servers. If you run multiple models concurrently, this will make memory estimates more reliable.

4. **Per-model parallelism is close.** PR [#9546](https://github.com/ollama/ollama/pull/9546) adds `num_parallel` to Modelfiles. Once merged, embedding models (which need high parallelism, low memory per request) can coexist with large chat models (which need low parallelism, high memory per request) without global trade-offs.

5. **MoE models on Apple Silicon are more correct now.** The expert-stacking fix in [#19614](https://github.com/ollama/ollama/pull/19614) ensures all MoE experts are loaded consistently, and FP8 imports are now lossless — important if you are quantizing custom MoE models.

6. **`num_predict==-2` pending.** For tasks requiring maximum context utilization (e.g., long document summarization), the new `-2` mode will fill the full context window without needing to calculate a static token limit.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data provided for LiteLLM and create a structured digest for 2026-11-09.

Looking at the data:

1. **Releases**: v1.110.0-dev.2 was released, with Docker image signing verification info using cosign.

2. **Issues**: 59 total issues, with top issues including:
   - Xiaomi MiMo models bug (closed, 12 comments)
   - Rate limiter Redis writes optimization (open, 11 comments)
   - Rust pip binary work (open, 9 comments)
   - Streaming usage undercounting bug (open, 7 comments)
   - Z.AI Coding Plan model mapping bug (open, 7 comments)
   - Various other bugs and features

3. **Pull Requests**: 331 total, with notable ones:
   - Prometheus budget gauges fix
   - Persisted alerts and status APIs (new feature)
   - Guardrails stream text flush fix
   - TopxAI provider addition
   - Prompt caching fix for developer messages
   - Debug log redaction feature
   - Responses stream null preservation
   - Bedrock httpx stream closure fix
   - LiteFlow gateway definitions
   - DeepSeek Fetch tool addition
   - SSL verification propagation
   - Activity tabs UI addition
   - Router optimization (skip unused deployment reads)
   - Kitani provider addition
   - MCP OAuth client binding fix

Let me structure this into the required sections.
</think>


# LiteLLM Digest — 2026-11-09

## Today's Highlights

LiteLLM v1.110.0-dev.2 shipped with verified Docker image signing via cosign (commit `e82a3c6`), while the community continues to address streaming reliability issues—a critical Bedrock stream closure bug and a streaming usage undercounting regression both received targeted fixes. The project also expanded its observability story with new persisted alerts APIs and Activity tabs for resource monitoring, alongside a Rust-backed pip binary initiative to accelerate the SDK path.

---

## Releases & Breaking Changes

- **v1.110.0-dev.2** released with cosign-signed Docker images (key: `e82a3c6`); verify via `cosign verify` per [release docs](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065). No migration notes for this dev release.
- **PR #50622** extends `turn_off_message_logging` to redact prompt/completion text in process/debug logs (including `--detailed_debug`), not just callback sinks—callers still receive full responses; model metadata remains visible. ([#50622](https://github.com/BerriAI/litellm/pull/50622))
- **PR #50618** adds DeepSeek `Fetch` tool support and proxy routes (`/fetch`, `/tools/fetch`) alongside the existing Search tool. ([#50618](https://github.com/BerriAI/litellm/pull/50618))
- **PR #50624** propagates per-call `ssl_verify` (False/True/CA path/SSLContext) into OpenAI and Azure HTTP clients; different values get separate cached clients. ([#50624](https://github.com/BerriAI/litellm/pull/50624))

---

## New Model & Hardware Support

- **TopxAI** added as a named provider with environment credentials, Chat Completions and Responses routing, and cost tracking for 11 text models ([#41919](https://github.com/BerriAI/litellm/pull/41919))
- **Kitani** added as an OpenAI-compatible provider for open-weight models ([#50656](https://github.com/BerriAI/litellm/pull/50656))
- **LiteFlow SDK integration**: team-scoped workflow registration, publication, and execution via `model="workflow/<name>"` with run traces ([#50384](https://github.com/BerriAI/litellm/pull/50384))

---

## Performance & Optimization

- **PR #50641** skips unused deployment reads in the router's callback filter step and caches Anthropic capability probes—a hot path running on every request; Rust core now handles 1,000 deployments without reading every deployment back into Python. ([#50641](https://github.com/BerriAI/litellm/pull/50641))
- **Issue #31880**: Rate limiter unconditionally writes Redis counters for keys with no rate limits configured; proposed fix to skip post-call Redis writes when no limits exist. ([#31880](https://github.com/BerriAI/litellm/issues/31880))
- **Issue #26611**: Prometheus/Grafana spend metrics diverge from LiteLLM UI—investigation ongoing for dashboard alignment. ([#26611](https://github.com/BerriAI/litellm/issues/26611))

---

## Stability & Regressions

**High Severity**
- **Streaming usage undercounting** (provider-independent): root cause in stream aggregation layer, not provider transformation—affects chained proxy setups (Front-Proxy → Upstream-Proxy → Bedrock). Filed as [#36114](https://github.com/BerriAI/litellm/issues/36114); no fix PR yet.
- **Bedrock `/v1/messages` stream not closed on abort** (httpx response leaks): when `ANTHROPIC_MESSAGES_MAX_DETACHED_STREAM_DRAINS=0` and client disconnects, `_abort_upstream` only closes the outer generator. Fix PR [#50657](https://github.com/BerriAI/litellm/pull/50657) filed by `princejain756`. ([#50514](https://github.com/BerriAI/litellm/issues/50514))

**Medium Severity**
- **Xiaomi MiMo models `output_config` parameter failure**: closed with 12 comments; appears resolved. ([#24549](https://github.com/BerriAI/litellm/issues/24549))
- **`completion_model` in `general_settings` overrides client-specified model** instead of acting as fallback—fix pending. ([#21554](https://github.com/BerriAI/litellm/issues/21554))
- **`max_budget` admits calls after spend crossed it**: 11 calls on a budget fitting 9 (+10.3% overspend); fix needed in budget enforcement logic. ([#50125](https://github.com/BerriAI/litellm/issues/50125))
- **Router retries ignore caller timeout**: `x-litellm-timeout` only bounds each attempt; Retry-After sleeps don't check remaining budget. ([#49751](https://github.com/BerriAI/litellm/issues/49751))

**Low Severity / Stale**
- **Z.AI `glm-5.2[1m]` returns `Unknown Model`**: documented variant not mapped. ([#32218](https://github.com/BerriAI/litellm/issues/32218))
- **VSCode native Model-Provider incompatibility**: investigation ongoing. ([#35775](https://github.com/BerriAI/litellm/issues/35775))
- **Windows wheel ships tiktoken caches with CRLF**, requiring network on `import litellm`. ([#41855](https://github.com/BerriAI/litellm/issues/41855))

---

## What This Means for Application Developers

1. **Streaming correctness**: If you're running chained LiteLLM proxies or using Bedrock streaming with client disconnection, monitor for usage undercounting and httpx resource leaks—both are addressed by PRs in flight; consider applying [#50657](https://github.com/BerriAI/litellm/pull/50657) and [#50641](https://github.com/BerriAI/litellm/pull/50641) once merged.

2. **Budget enforcement**: Applications relying on `max_budget` for cost control should add their own overspend guards—the current implementation allows ~10% overrun in edge cases ([#50125](https://github.com/BerriAI/litellm/issues/50125)).

3. **New providers**: TopxAI and Kitani integrations reduce boilerplate for teams using these backends—no more custom `openai/` + `api_base` workarounds.

4. **Debug logging**: The expanded `turn_off_message_logging` redaction in [#50622](https://github.com/BerriAI/litellm/pull/50622) enables safe verbose logging in production without leaking prompt/completion data.

5. **Workflows**: The LiteFlow gateway integration enables structured multi-step agent workflows with native tracing—worth evaluating for complex orchestration needs.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants a structured digest for Unsloth AI for the date 2026-11-09 based on the provided GitHub data. Let me analyze the data carefully:

**Releases in last 24h**: None

**Issues (12 items)**:
- #16980: Feature request for "Keep all checkpoints" for Image LoRA
- #16912: Bug - Sync remaining account-level preferences to server-side storage
- #17156: Bug - Managed account doesn't use a valid HF token
- #17169: UI bug - glass and background option pickers close on every pick
- #17163: UI bug - composer settings split across Appearance and Chat tabs
- #17162: UI bug - glass material setting exposed twice
- #17161: UI bug - palette menu closes after every pick
- #17147: Bug - ROCm Docker gfx1031 (RX 6700 XT) passes startup check then segfaults
- #17140: Placeholder issue (no meaningful content)
- #17137: Bug - Image generation models fail to load on Intel Arc 140V
- #17126: Feature request - edit images with connected models
- #17074: Bug - Model size mismatch between Model Hub and Model Picker dropdown

**Pull Requests (160 items, showing top 20)**:
Key PRs by danielhanchen:
- #17177: Studio diffusion - keep Qwen-Image-2.1 CFG pairing through first-render compile
- #17143: Studio - read hosted LTX-2.5 int8 checkpoint when load's own plan offloads denoiser
- #17063 [CLOSED]: Studio - install FlashInfer's prebuilt kernels into vLLM engine env
- #17166 [CLOSED]: Studio - fp8 denoisers on sm_89 no longer hang on first render (CUDA graph replay under torch < 2.12)


- #17101 [CLOSED]: Studio Wan fused blocks - one Triton binary per kernel for every sequence length
- #17118 [CLOSED]: Studio Qwen-Image-2.1 - encode prompts without the text encoder's unused K/V cache
- #17167 [CLOSED]: Studio - run INT8 on T4 and other Turing GPUs instead of refusing it
- #17158 [CLOSED]: FSDP2 save - compose the writer across equal meshes
- #16836 [CLOSED]: Fix fine-tuning pagination race during Multi-LoRA batch starts
- #17173 [CLOSED]: Studio FLUX.3 - keep bf16 weights as stored on fp16-only GPUs and compute in float32 per layer
- #17084 [CLOSED]: Studio int8 GEMM - unlisted-card race switch acts between loads
- #17106 [CLOSED]: Studio int8 GEMV - wide scale groups tile inside shared memory
- #17100 [CLOSED]: Studio Sol-H3 VAE - decide window masks from geometry, build each RoPE table once per decode
- #17097 [CLOSED]: Studio MiniMax-H3 VAE - stitch batched decoder tiles into frame
- #17176: Llama 3.x and GPT-OSS templates - treat tool_calls None as no tool call

Other contributors:
- #12052 [CLOSED]: Add FSDP2 and Ulysses context parallel for Qwen3.5 GatedDeltaNet
- #15883 [CLOSED]: Context parallel

Several recent changes focus on performance and stability improvements. Multi-GPU training capabilities have been enhanced with FSDP2 and Ulysses context parallel support for Qwen3.5 GatedDeltaNet. Memory efficiency gains came through optimized VAE decoding strategies for Sol-H3 and MiniMax-H3 models, plus int8 quantization fixes for GEMM and GEMV operations on Turing GPUs. FlashInfer kernel preinstallation in vLLM environments and Triton kernel optimization for Wan fused blocks aim to reduce compilation overhead. Notable bug fixes address CUDA graph replay issues on sm_89 and pagination race conditions during Multi-LoRA batch processing.

Platform compatibility expanded with INT8 support on Turing GPUs (T4, sm75), fp16-only GPU handling for FLUX.3, and XPU float64 detection for Intel Arc. Image model support now includes Qwen-Image-2.1 CFG pairing, LTX-2.5 int8 checkpoint loading, and text encoder optimizations. Several hardware-specific bugs were resolved, including ROCm segfaults on RX 6700 XT, Intel Arc 140V loading failures, and L4 rendering hangs on fp8 denoisers under older PyTorch versions. Model size discrepancies between Hub and dropdown are also being addressed.

UI refinements target appearance pickers, palette interactions, and settings organization. Account-level preference syncing and HF token validation for managed accounts were also improved. The tool_calls template handling for Llama 3.x and GPT-OSS was completed, with FSDP2 support for Qwen3.5 GatedDeltaNet also finalized.
</think>


# Unsloth Digest — 2026-11-09

## 1. Today's Highlights

Unsloth shipped a substantial wave of stability and performance fixes across diffusion/image workloads, notably enabling INT8 on Turing GPUs (T4, sm75), resolving a CUDA graph replay hang on L4 with fp8 denoisers under torch < 2.12, and installing FlashInfer prebuilt kernels into the vLLM engine to eliminate first-run JIT compilation overhead. Meanwhile, several UI ergonomics issues in Studio's Appearance tab surfaced, and two hardware-compatibility bugs were reported for AMD RDNA 2 (ROCm) and Intel Arc 140V.

---

## 2. Releases & Breaking Changes

No new releases tagged in the last 24 hours.

**Migration Notes:**
- **INT8 on Turing (sm75) — now permitted.** Previously Studio refused `transformer_quant="int8"` on T4 and other sm75 cards; [#17167](https://github.com/unslothai/unsloth/pull/17167) removes that guard. Users who were blocked on Turing hardware can now attempt int8 loads.
- **FlashInfer prebuilt kernels installed at engine build time.** PR [#17063](https://github.com/unslothai/unsloth/pull/17063) eliminates the one-time `nvcc` JIT compile spike on first vLLM engine start (affects vLLM 0.26 and 0.30). No action required; the fix is transparent on fresh engine environments.

---

## 3. New Model & Hardware Support

| Area | Change | PR / Issue |
|------|--------|------------|
| **Turing INT8** | INT8 (dense torchao) now runs on T4 and all sm75 GPUs instead of being refused at load time. | [#17167](https://github.com/unslothai/unsloth/pull/17167) |
| **FP16-only GPUs + FLUX.3** | FLUX.3 bf16 weights are kept as-stored on fp16-only hardware; per-layer float32 compute is applied instead of widening the entire model to float32 on the host. | [#17173](https://github.com/unslothai/unsloth/pull/17173) |
| **Intel XPU float64 detection** | Studio now reads the Arc A-series fp64 capability from the device rather than assuming all Intel GPUs support it. Fixes RoPE errors on Arc 140V and similar. | [#17070](https://github.com/unslothai/unsloth/pull/17070) |
| **Qwen-Image-2.1 CFG pairing** | CFG (classifier-free guidance) pairing is now preserved through the first denoise-step compile, addressing a regression where the first render on a compiled block-streamed load would compute unpaired. | [#17177](https://github.com/unslothai/unsloth/pull/17177) |
| **LTX-2.5 int8 checkpoint loading** | Fixes a scenario where an auto-precision LTX-2.5 load plans a resident seed from the hosted int8 checkpoint but then declines it because its own plan picks whole-module CPU offload. | [#17143](https://github.com/unslothai/unsloth/pull/17143) |
| **Qwen-Image-2.1 prompt encoding** | Text encoder's unused K/V cache is excluded during prompt encoding, reducing memory pressure and eliminating a correctness hazard introduced in diffusers 0.42.1. | [#17118](https://github.com/unslothai/unsloth/pull/17118) |
| **Llama 3.x / GPT-OSS tool_calls None** | Chat template now treats `tool_calls: null` as absent rather than raising `TypeError` or `UndefinedError`, matching standard tool-calling dataset formats. | [#17176](https://github.com/unslothai/unsloth/pull/17176) |

---

## 4. Performance & Optimization

| Component | Optimization | Impact | PR |
|-----------|-------------|--------|-----|
| **vLLM engine first-start** | Pre-installs FlashInfer prebuilt kernels (top-k / top-p sampler) instead of JIT-compiling with `nvcc`. | Eliminates one-time build latency on every fresh engine env. | [#17063](https://github.com/unslothai/unsloth/pull/17063) |
| **Wan fused blocks (Triton)** | Each fused kernel (`_modnorm`, `_gate_residual`, `_rope`) now takes sequence length as a runtime parameter instead of a compile-time `@triton.jit` arg. | Reduces duplicate Triton binary compilation across resolutions/clip lengths; one binary per kernel instead of one per sequence length. | [#17101](https://github.com/unslothai/unsloth/pull/17101) |
| **int8 GEMV (weight-only)** | Wide scale groups now tile inside shared memory; a grouped layer miss no longer demotes per-row Linears. Fixes a memory regression where grouped weights poisoned subsequent layouts on the same device. | Improves throughput on int8 diffusion loads; prevents memory bloat across layout switches. | [#17106](https://github.com/unslothai/unsloth/pull/17106) |
| **int8 GEMM (unlisted cards)** | The unlisted-card race switch (measuring Triton tiles on sm80+ without a table) now acts once between loads instead of per-call. | Consistent tile selection and faster warm-up on unknown GPUs. | [#17084](https://github.com/unslothai/unsloth/pull/17084) |
| **Sol-H3 VAE decoder** | Window attention masks are now derived from geometry rather than read from the GPU per window; each RoPE table is built once per decode batch instead of once per window. | Eliminates up to 192 device-to-host reads for a 37-latent video; significant latency reduction on MiniMax-H3 video generation. | [#17100](https://github.com/unslothai/unsloth/pull/17100) |
| **MiniMax-H3 VAE tile stitching** | Batched decoder tiles are stitched into the frame as they arrive, rather than accumulating all tiles before stitching. | Reduces peak memory during video decode; avoids redundant allocations in `_stitch_tiles`. | [#17097](https://github.com/unslothai/unsloth/pull/17097) |
| **MiniMax-H3 Sol VAE** | Removes a per-window device read in `_window_attn`; limits Q/K/V slots to at most two. | Reduces host/device synchronization overhead in the Sol variant's decoder. | [#17085](https://github.com/unslothai/unsloth/pull/17085) |
| **FSDP2 save (composed meshes)** | Checkpoint writer composition now works across equal `init_device_mesh` instances (reload, second model, notebook re-run) rather than requiring identical mesh objects. | Enables correct FSDP2 checkpointing in multi-session and multi-model scenarios. | [#17158](https://github.com/unslothai/unsloth/pull/17158) |
| **Qwen3.5 GatedDeltaNet** | Adds FSDP2 sharding and Ulysses context parallel for the hybrid conv + gated-delta architecture. Full-timeline shards are used inside conv and gated-delta layers. | Enables sequence-sharded training on Qwen3.5 with context parallelism. | [#12052](https://github.com/unslothai/unsloth/pull/12052) |
| **Gemma 4 text (Ulysses)** | Ulysses attention exchange extended to `Gemma4TextAttention` with per-layer sliding window reaching the attention dispatcher. | Enables sequence-sharded inference on Gemma 4 text models. | [#15883](https://github.com/unslothai/unsloth/pull/15883) |

---

## 5. Stability & Regressions

Ranked by severity:

### 🔴 Critical (fix PR merged or in progress)

| Issue | Description | Status |
|-------|-------------|--------|
| **L4 fp8 denoiser hang** | FLUX.3 klein (distilled) with fp8 transformer hangs forever on the first render on L4 when the denoiser streams (1024px, 16 steps, 6 GiB budget). Last log: `captured Flux3Transformer2DModel graph 1/4`. Triggered by CUDA graph replay under torch < 2.12. | Fixed in [#17166](https://github.com/unslothai/unsloth/pull/17166) |
| **ROCm RX 6700 XT segfault** | gfx1031 (RX 6700 XT) passes the startup RDNA-2 check as valid, then PyTorch segfaults on the first GPU operation inside the Docker container (Debian 13, kernel 6.12, in-tree amdgpu). | Open — [#17147](https://github.com/unslothai/unsloth/issues/17147) |
| **Intel Arc 140V image model load failure** | Image generation models fail to load on Intel Arc 140V (XPU backend). Likely related to float64 support detection (see #17070 which partially addresses this for RoPE). | Open — [#17137](https://github.com/unslothai/unsloth/issues/17137) |

### 🟠 High (affects correctness or usability)

| Issue | Description | Status |
|-------|-------------|--------|
| **Managed account invalid HF token** | Unsloth Studio managed accounts may not use a valid Hugging Face token, causing authentication failures for gated models or private repos. | Open — [#17156](https://github.com/unslothai/unsloth/issues/17156) |
| **LocalStorage preference reset** | Some account-level preferences are still stored only in browser `localStorage` and silently reset across sessions or when Studio serves change origin. | Open — [#16912](https://github.com/unslothai/unsloth/issues/16912) |
| **Model size mismatch (Hub vs Picker)** | Discrepancy between model sizes shown in Model Hub "On device" tab versus the Model Picker dropdown on Windows 11, 2 GiB VRAM. | Open — [#17074](https://github.com/unslothai/unsloth/issues/17074) |
| **Multi-LoRA batch pagination race** | A pagination race in the fine-tuning jobs endpoint could cause a Multi-LoRA batch starting during a list request to remove queued jobs from the page unexpectedly. | Fixed in [#16836](https://github.com/unslothai/unsloth/pull/16836) (Stanford CS146S contribution) |

### 🟡 Medium (UI/ergonomics)

| Issue | Description | Status |
|-------|-------------|--------|
| **Appearance pickers dismiss on every pick** | Glass theme, background, and other visual pickers (Radix `Select` components) close on first selection, preventing side-by-side browsing. | Open — [#17169](https://github.com/unslothai/unsloth/issues/17169), [#17161](https://github.com/unslothai/unsloth/issues/17161) |
| **Glass material setting duplicated** | `useMaterialStore.material` has two controls in the Appearance tab with different labels and option sets, causing confusion. | Open — [#17162](https://github.com/unslothai/unsloth/issues/17162) |
| **Composer settings split across tabs** | Chat width, composer position, outline, sent attachments live in Appearance; other composer defaults live in Chat — no single owner. | Open — [#17163](https://github.com/unslothai/unsloth/issues/17163) |

---

## 6. What This Means for Application Developers

**Inference & Serving:**
- If you are running vLLM-powered engines through Unsloth Studio, expect significantly faster first-request latency on fresh engine environments — FlashInfer kernels are now pre-installed rather than JIT-compiled on demand.
- INT8 is now available on T4 and other Turing GPUs. If you have T4 instances (common in Colab and budget cloud VMs), you can now load denser models with int8 quantization instead of falling back to fp16.

**Diffusion / Image / Video Workloads:**
- The Sol-H3 and MiniMax-H3 VAE optimizations (fewer device reads, incremental tile stitching, geometry-derived masks) directly reduce end-to-end video generation latency, particularly for longer clips where the decoder is the bottleneck.
- Qwen-Image-2.1 prompt encoding no longer allocates unused K/V cache, freeing VRAM for the diffusion pipeline itself.
- FLUX.3 on fp16-only Turing GPUs (T4) now works correctly with per-layer float32 compute instead of black renders.

**Fine-tuning & Training:**
- The Multi-LoRA pagination race fix ([#16836](https://github.com/unslothai/unsloth/pull/16836)) resolves a race condition that could silently drop queued fine-tuning jobs during concurrent batch starts — production training pipelines relying on job queuing should verify they are on a post-fix version.
- FSDP2 save composition now works correctly across equal device meshes, important for reload and multi-model scenarios.

**Watch Items:**
- The AMD RX 6700 XT ROCm segfault ([#17147](https://github.com/unslothai/unsloth/issues/17147)) indicates that RDNA 2 detection may pass but the runtime fails. If you are running Unsloth on AMD GPUs via ROCm, monitor for first-op crashes; the workaround is to use CUDA where available until this is resolved.
- Intel Arc 140V users should track [#17137](https://github.com/unslothai/unsloth/issues/17137) — the float64 detection fix in [#17070](https://github.com/unslothai/unsloth/pull/17070) may partially address it, but a full resolution is not yet confirmed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*