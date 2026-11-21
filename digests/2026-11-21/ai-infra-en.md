# AI Infrastructure Digest 2026-11-21

> Generated: 2026-11-21 03:24 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

<think>The user wants a cross-project comparison report synthesizing all five digests (vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth) into a unified analysis. Let me create a comprehensive, well-structured report following the requested format.

Let me analyze the data from all six digests:

**vLLM:**
- Issues: 21 notable issues discussed
- PRs: ~25+ notable PRs
- Releases: 0 in last 24h
- New models: Inkling 2 Mini, MiniCPM5-15B-A2.5B
- Hardware: RTX PRO 6000 Blackwell (SM120) early support, Intel XPU, AMD MI325X/MI355X


- Key themes: MTP speculative decoding, Kitty KV quantization, RL training

**SGLang:**
- Issues: ~14 tracked
- PRs: 16+
- Releases: 0
- New models: MLA caching opt-in for external models
- Hardware: AMD/ROCm fixes, MLU GQA/MLA support, Apple Silicon MoE
- Key themes: PD disaggregation, HiCache, FlashStates

**llama.cpp:**
- Releases: b12600 (build release)
- Issues: ~14 tracked
- PRs: 16+
- Key themes: Performance and stability improvements across multiple architectures
- New models: Inkling 2 Mini, Qwen3-ASR, Gemma4, Drama3 voice cloning
- Hardware: Intel Arc Alchemist Vulkan, AMD RDNA1
- Key themes: Speculative decoding fixes, Blackwell regression

**Ollama:**
- PRs: 26
- Issues: 13
- Releases: 0
- New models: Inkling 2 Mini (MLX), Qwen 3.8
- Hardware: Apple Silicon M4 Pro
- Key themes: VRAM accounting fix, MLX improvements

**LiteLLM:**
- Releases: v1.111.0-rc.3, v1.110.2, v1.109.3, v1.108.14 (LTS)
- Issues: ~25 tracked
- PRs: ~20+
- Key themes: ElevenLabs cost fix, OAuth regression, Gemini Live Avatar
- Key themes: Gateway/proxy improvements

**Unsloth:**
- Releases: v0.1.922-beta, v0.1.921-beta
- PRs: ~12
- Issues: 25 tracked
- New models: Inkling 2 Mini, DaisyRose-27B
- Hardware: AMD RDNA4, Apple Silicon
- Key themes: GRPO optimization, fine-tuning

Now I'm organizing these into a cohesive report structure that shows how the different projects relate to each other.
</think>


# AI Inference Infrastructure — Cross-Project Daily Digest
## 2026-11-21 | Ecosystem Comparison Report

---

## 1. Ecosystem Overview

Today's digest confirms the inference infrastructure ecosystem is in a rapid maturation phase: multi-vendor hardware support is expanding (NVIDIA Blackwell SM120, AMD RDNA4/Navi4, Intel Arc Alchemist, Apple M4 Pro, MLU), quantization formats are proliferating (Kitty 2-bit KV, MXFP4, NF4), and the serving layer is bifurcating between low-latency single-node engines (llama.cpp, Ollama) and high-throughput disaggregated clusters (vLLM, SGLang). The fine-tuning layer (Unsloth) and the gateway/proxy layer (LiteLLM) are both seeing significant correctness and stability work, which indicates the stack is being hardened for production multi-tenant deployments. Notably, Inkling 2 Mini shipped support across four projects in a single day — the fastest cross-ecosystem model adoption in recent memory.

---

## 2. Activity Comparison

| Project | Notable Issues (24 h) | PRs (24 h) | Releases (24 h) | Community Signal |
|---------|----------------------|------------|-----------------|-----------------|
| **vLLM** | 21 (incl. 3 critical) | ~25 | 0 | High churn; MTP stability crisis ongoing |
| **SGLang** | ~14 (incl. 1 security, 3 correctness) | ~16 | 0 | PD disaggregation roadmap progressing |
| **llama.cpp** | ~14 (incl. 2 critical) | ~16 | 1 build (b12600) | Active multi-backend stabilization |
| **Ollama** | 13 (incl. 2 critical) | 26 | 0 | Highest PR velocity; UX and MLX hardening |
| **LiteLLM** | ~25 (incl. 1 regression) | ~20 | 5 (1 RC + 4 stable) | Active release cadence; gateway reliability focus |
| **Unsloth** | 25 (incl. 2 high) | ~12 | 2 beta | Moderate activity; fine-tuning correctness focus |

**Takeaway:** Ollama leads in raw PR throughput, vLLM leads in critical open issues, and LiteLLM leads in release cadence. Unsloth and SGLang are quieter but ship targeted, high-impact changes.

---

## 3. Model Support Race

| Model | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------|------|--------|-----------|--------|---------|---------|
| **Inkling 2 Mini** | ✅ (PR #69028) | — | ✅ (b12600) | ✅ (MLX, PR #19799) | — | ✅ (v0.1.922-beta) |
| **Qwen3.8-27B (MXFP4 MoE)** | ✅ (ROCm opt) | — | — | ✅ (MLX, reported bug) | — | — |
| **MiniCPM5-15B-A2.5B** | ✅ (PR #68748) | — | — | — | — | — |
| **Qwen3-ASR** | — | — | ✅ (b12597) | — | — | — |
| **Gemma 4** | — | — | ✅ (b12588) | ✅ (reported bug) | — | — |
| **DeepSeek-V4 / V4.1 Flash** | ✅ (multiple) | — | — | — | — | — |
| **Kimi K3** | — | ✅ (PR #51900) | — | — | — | — |
| **Drama3 voice cloning** | — | — | ✅ (Fish S2 codec) | — | — | — |
| **DaisyRose-27B** | — | — | — | — | — | 🔲 (requested) |
| **MLU (GQA/MLA)** | — | ✅ (PR #49214) | — | — | — | — |

**Race winner — Inkling 2 Mini:** Four projects shipped support within 24 hours. llama.cpp had the first build release (b12600, morning), Ollama followed with MLX support, vLLM landed a PR in the afternoon, and Unsloth shipped in v0.1.922-beta. This is the fastest cross-ecosystem adoption cycle observed in this digest period.

**SGLang differentiates on Kimi K3** with shared-expert side-stream ordering fixes for MoE, while **vLLM dominates DeepSeek-V4 support** with the deepest speculative decoding and MLA optimization investment.

---

## 4. Performance Frontier

### 4.1 KV Cache & Quantization

| Project | Focus | Details |
|---------|-------|---------|
| **vLLM** | 2-bit Kitty KV quantization | PR #68945: dynamic precision boosting — selected key channels to 4-bit, rest to 2-bit; new `--kv-cache-dtype kitty` flag |
| **vLLM** | DiffKV view caching | PR #66963: cache K/V cache views per tensor, eliminating per-call re-derivation that stalled Triton and eager backends |
| **SGLang** | Unified-radix-cache lease renewal | PR #51683: renew external store leases on device-cache hits, preventing stale lease edge cases under CP |
| **SGLang** | HiCache L3 prefetch | Bug #51608: prefetch deadlocks under `attn_cp_size=8` with fast_file; open |
| **llama.cpp** | Native q8_0 KV in flash-attn | PR #30792: CUDA tile kernel now handles q8_0 KV with GQA head reuse |
| **llama.cpp** | Kitty KV quantization | Not yet — the 2-bit work is vLLM-first |

**Frontier leader:** vLLM. The Kitty KV quantization is the most aggressive memory-reduction technique in the ecosystem, targeting >50% KV memory reduction. SGLang's HiCache work is comparable but is currently blocked by a deadlock regression.

### 4.2 Speculative Decoding & MTP

| Project | Status | Details |
|---------|--------|---------|
| **vLLM** | ⚠️ Critical regressions | #40756: illegal memory access on long sequences (Qwen3.6-27B-FP8, 46 comments); #41530: TP Worker hang → EngineDeadError on DeepSeek-V4-Pro |
| **llama.cpp** | ⚠️ Critical regression | #27428: MTP draft halves prefill speed on multi-GPU tensor-split mode; single GPU unaffected |
| **vLLM** | Fixes in flight | #64878: MTP DP synchronization fix; #69065: fused 16-bit GDN decode kernel |
| **llama.cpp** | Kernel work | #62004: ReplaySSM for Gated DeltaNet (different SD variant) |

**Frontier leader:** Both vLLM and llama.cpp are investing heavily but both have active regressions. vLLM has more diversity in speculative decoding modes (MTP, DSpark, EAGLE, DiffKV). llama.cpp's ReplaySSM targets a different architecture family (recurrent state models vs transformer MTP).

### 4.3 Kernel Optimization

| Project | Target | Impact |
|---------|--------|--------|
| **vLLM** | FlashInfer norm fusion | +batch invariance correctness; affects all BF16/FP16 FlashInfer users |
| **SGLang** | Triton MoE on H100 | **5–8× slower than flashinfer_cutlass** — known regression, no fix yet |
| **llama.cpp (SYCL)** | Fused ADD+RMS_NORM+MUL | +3.4% decode throughput on Qwen3.8-27B Q3_K_P |
| **llama.cpp** | Metal CPU polling reduction | ~50% CPU reduction on M1 Pro without OpenMP; significant power savings |
| **Unsloth** | GRPO redundant forward elimination | Direct wall-clock reduction for iterative GRPO with `num_iterations > 1` |
| **Ollama** | MLX auto-parallelism | Automatic 1/2/4/8 slot selection on Apple Silicon based on available memory |

### 4.4 Distributed Serving

| Project | Area | Details |
|---------|------|---------|
| **SGLang** | PD disaggregation | Q4 2026 roadmap (#43699); V1 Scheduler re-queueing stall RFC (#62532) |
| **SGLang** | DSpark adaptive verification | PR #51303: tracker for adaptive verification scheduling |
| **vLLM** | RL training integration | Load-plan work (#69071, #69074, #69075) for checkpoint reloading mid-training |
| **vLLM** | Disaggregated Frontend RFC | #34407: long-term architectural direction |
| **Ollama** | Runner resurrection deadlock | PR #19794: concurrent requests can resurrect expiring runners, causing silent hangs |

---

## 5. Layer Positioning

```
┌─────────────────────────────────────────────────────────────────────┐
│  APPLICATION / AGENT LAYER                                          │
│  (e.g., CrewAI, LangChain, custom agents)                           │
└──────────────────────────┬──────────────────────────────────────────┘
                           │ OpenAI-compatible API / MCP / WebRTC
┌──────────────────────────▼──────────────────────────────────────────┐
│  GATEWAY / PROXY LAYER          ← LiteLLM                           │
│  (multi-provider routing, auth, observability, rate limiting)        │
│  Today's focus: OAuth regression (#53185), JWT audience support,    │
│  Gemini Live Avatar, ElevenLabs cost fix, Lens tracing controls      │
└──────────────────────────┬──────────────────────────────────────────┘
                           │ OpenAI-compatible API / custom protocol
┌──────────────────────────▼──────────────────────────────────────────┐
│  SERVING ENGINE LAYER           ← vLLM, SGLang                      │
│  (high-throughput inference, distributed serving, speculative decode)│
│  Today's focus: Blackwell SM120 early support, PD disaggregation,   │
│  speculative decoding stability, HiCache, FlashStates, RL training  │
└──────────────────────────┬──────────────────────────────────────────┘
                           │ Local IPC / gRPC / custom protocol
┌──────────────────────────▼──────────────────────────────────────────┐
│  LOCAL / EDGE RUNTIME LAYER    ← llama.cpp, Ollama                  │
│  (single-node, cross-platform, consumer GPU, CLI-first)              │
│  Today's focus: Inkling 2 Mini, Blackwell CUDA regression, MLX       │
│  hardening, VRAM accounting fix, streaming correctness               │
└──────────────────────────┬──────────────────────────────────────────┘
                           │ Python / CLI / API
┌──────────────────────────▼──────────────────────────────────────────┐
│  FINE-TUNING LAYER            ← Unsloth                             │
│  (SFT, GRPO, QLoRA, DPO on consumer/single-node GPUs)               │
│  Today's focus: GRPO forward-pass elimination, LoRA FFN correctness, │
│  automatic max_seq_length, Translate encoding detection              │
└─────────────────────────────────────────────────────────────────────┘
```

### Quick Positioning Summary

| Layer | Primary Project(s) | Competitive Differentiator | Today's Heat |
|-------|-------------------|---------------------------|--------------|
| **Gateway** | LiteLLM | Provider breadth, cost control, Lens observability | OAuth regression; Gemini Live Avatar |
| **Serving Engine** | vLLM, SGLang | Throughput, multi-node, speculative decode | MTP stability crisis; Blackwell early support |
| **Local Runtime** | llama.cpp, Ollama | Portability, zero-dependency, consumer GPU | VRAM accounting fix; Inkling 2 Mini race |
| **Fine-tuning** | Unsloth | Single-GPU QLoRA speed, GRPO efficiency | GRPO redundant forward elimination |

**Note on SGLang vs vLLM:** Both occupy the serving engine layer but with different design philosophies. vLLM prioritizes maximum single-engine throughput and PagedAttention memory efficiency; SGLang prioritizes frontend disaggregation, RadixCache sharing, and richer multi-model scheduling. They are increasingly converging (both support PD disaggregation, both support speculative decoding), but SGLang's Python-first codebase offers faster feature iteration while vLLM's C++ PagedAttention backend offers lower per-request overhead.

---

## 6. Trend Signals

### 6.1 Hardware Fragmentation Is Accelerating

Five distinct hardware architectures are actively developed in today's digests:

- **NVIDIA Blackwell (SM120):** Both vLLM and llama.cpp are shipping early support; llama.cpp has a known ADD/GELU regression on B200 that needs bisection.
- **AMD RDNA4 (gfx1200):** Unsloth has QLoRA kernel crashes; llama.cpp has FlashAttention 4× slowdown; SGLang has fbtriton kernels in progress.
- **Intel Arc Alchemist (Xe1):** llama.cpp re-enabled Vulkan coopmat kernels; Ollama has GPU underutilization on M4 Pro (non-Intel but similar pattern).
- **Apple M4 Pro (MLX):** Ollama and Unsloth both ship MLX support; llama.cpp ships Metal norm fixes; Unsloth adds video restyling.
- **MLU (Huawei):** SGLang landed GQA and MLA attention support.

**Implication:** Teams managing multi-GPU clusters will increasingly need to validate inference stacks per hardware generation. Abstraction layers (LiteLLM, vLLM's backend abstraction) reduce but don't eliminate this burden.

### 6.2 Speculative Decoding Is Maturing But Fragile

Three critical regressions across vLLM and llama.cpp in a single day indicates speculative decoding is not yet production-stable across all model families. The MTP illegal memory access on long sequences (vLLM #40756, 46 comments) is the most concerning signal — it has been open for over 7 months.

**Implication:** Do not deploy speculative decoding in production without thorough load testing on your specific model, batch size, and sequence length distribution. Monitor for silent output corruption (vLLM #52531: CUDA graph silently corrupts Kimi-K3 output) and EngineDeadError (vLLM #41530).

### 6.3 The Inkling 2 Mini Moment

Inkling 2 Mini reached four projects in 24 hours — a cross-ecosystem adoption speed record. This model (26.4B, 16GB footprint) is emerging as a new benchmark for reasoning-model accessibility. The speed of adoption reflects:

1. The model is well-documented with GGUF/GGML and HuggingFace formats from day one.
2. The model fits in a single consumer GPU, making llama.cpp and Ollama natural first adopters.
3. The model's looped architecture is novel enough to generate interest from vLLM and Unsloth for training experiments.

**Implication:** Model release strategy (format availability, quantization support, architecture documentation) directly determines ecosystem adoption speed. Teams building inference infrastructure should prepare onboarding pipelines for novel architectures (looped, recurrent, hybrid) before release.

### 6.4 KV Cache Innovation Is the Next Performance Frontier

The convergence of three independent efforts — vLLM's Kitty 2-bit quantization, SGLang's HiCache unified memory, and llama.cpp's native q8_0 KV in flash-attention — signals that KV cache compression is the next major throughput lever. Current PagedAttention handles KV cache memory management; the next frontier is reducing the memory footprint per token.

**Implication:** For long-context applications (>32K tokens), evaluating KV cache quantization (vLLM's approach) or hierarchical caching (SGLang's HiCache) will yield the largest latency and throughput improvements in 2027.

### 6.5 Gateway Reliability Is Catching Up to Serving Reliability

LiteLLM's high-velocity release cadence (5 releases in 24 h, including an LTS patch) and active regression tracking suggests the gateway/proxy layer is being production-hardened after years of feature-first development. The OAuth query parameter regression (#53185) is the type of subtle breakage that accumulates in proxy layers with many provider integrations.

**Implication:** If you run LiteLLM as a multi-tenant gateway, subscribe to the release feed and maintain a staged rollout discipline. The OAuth regression (v1.110.1) demonstrates that even patch releases can introduce subtle behavioral changes.

### 6.6 Fine-Tuning Is Getting Cheaper and Faster

Unsloth's GRPO optimization eliminates a redundant forward pass for multi-iteration runs. Combined with the token budget split optimization (#18720), fine-tuning workflows that were previously the domain of multi-GPU A100/H100 clusters are now viable on consumer hardware.

**Implication:** Expect a wave of agentic fine-tuning experiments in Q1 2027 as smaller teams gain access to GRPO training on single RTX 4090 or M4 Max configurations. This will drive demand for inference infrastructure that handles fine-tuned adapters (LoRA, QLoRA, DoRA) at scale.

---

## Action Items for Infrastructure Engineers

| Priority | Action | Project(s) | Deadline |
|----------|--------|------------|----------|
| 🔴 **Now** | Disable speculative decoding for Qwen3.6-27B-FP8 and DeepSeek-V4-Pro until #40756/#41530 are resolved | vLLM | Immediate |
| 🔴 **Now** | Do not upgrade LiteLLM past v1.109.3 if you use OAuth browser flows with `client_id` query params | LiteLLM | Immediate |
| 🔴 **Now** | Upgrade Ollama to latest; the VRAM accounting fix (#19632) affects all multi-model deployments | Ollama | This week |
| 🟠 **Soon** | Monitor llama.cpp Blackwell (sm_120) deployments for ADD/GELU regressions; pin to b12591 or earlier | llama.cpp | Within 2 weeks |
| 🟠 **Soon** | Evaluate vLLM Kitty KV quantization (PR #68945) for long-context workloads; join the PR review | vLLM | Within 2 weeks |
| 🟡 **Watch** | Track SGLang HiCache L3 prefetch fix (#51608) before deploying CP-based deployments | SGLang | Within 4 weeks |
| 🟡 **Watch** | Unsloth automatic max_seq_length detection (#18236) will change fine-tuning defaults | Unsloth | Within 4 weeks |
| 🟡 **Watch** | LiteLLM Gemini Live Avatar (#43166) will add multimodal realtime support | LiteLLM | Within 6 weeks |
| 🟢 **Plan** | Start evaluating Blackwell SM120 as primary inference target for H2 2027 deployments | All serving engines | Q1 2027 |

---

*Cross-project digest synthesized from vLLM, SGLang, llama.cpp, Ollama, LiteLLM, and Unsloth activity on 2026-11-21.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me analyze the provided GitHub data for vLLM project and generate a structured digest for 2026-11-21.

Key observations from the data:

1. **Releases**: None in the last 24h

2. **Notable Issues (high comment count)**:
   - #40756: MTP speculative decoding crash with illegal memory access on long sequences (Qwen3.6-27B-FP8) - 46 comments
   - #56892: DeepSeek-V4.1-Flash on SM120 (RTX PRO 6000 Blackwell) performance issues - 35 comments
   - #49569: Feature request to enable mypy in tests directory - 31 comments
   - #59575: ROCm AMD Qwen3.8-Flash-Next performance optimization - 29 comments
   - #25700: RFC on limiting envvars in vLLM - 22 comments
   - #54363: RFC on data integrity for filesystem KV offload tier - 22 comments
   - #51758: Upgrade vLLM 0.26.0 to 0.27.0 deepseek v4 flash error - 21 comments
   - #41530: TP Worker hang causes EngineDeadError - 21 comments
   - #61698: RFC on BYOG reproducible evals for PRs - 20 comments
   - #54477: RFC on Direct Weight Reload for RL Training - 17 comments
   - #51303: DSpark Adaptive Verification Tracker - 16 comments
   - #64572: Performance issue with Triton attention backend re-deriving KV cache views - 14 comments
   - #57406: GLM 5.3 Performance Optimization - 13 comments
   - #64018: ROCm AMD Muse Spark Performance Optimization - 13 comments
   - #66101: Spec Decode NVFP4 draft LM-head validation - 12 comments
   - #58147: Qwen3 parser tool-call markup bug - 12 comments
   - #34407: Disaggregated Frontend RFC - 11 comments
   - #52434: ParallelLMHead AttributeError - 10 comments
   - #66344: RFC on word-level timestamps for speech models - 9 comments
   - #62532: V1 Scheduler KV Offload re-queueing stall RFC - 9 comments
   - #67652: Feature request for vllm.Render derender - 9 comments

3. **Notable PRs (last 24h)**:
   - #68600: Bug fix for FlashInfer norm fusion to handle batch invariance
   - #68945: Introducing 2-bit Kitty KV quantization with dynamic precision boosting
   - #69065: Faster fused CUDA MTP decode kernels for 16-bit recurrent state
   - #62004: ReplaySSM for caching SSM inputs to accelerate Gated DeltaNet
   - #62631: XPU LoRA support for MXFP4 MoE
   - #68108: XPU bug fix for sliding-window block size handling
   - #63660: XPU CI genai_perf integration
   - #62255: Mooncake KV connector refactor
   - #61974: MooncakePullConnector for decode-side reads
   - #68971: XPU test skip updates
   - #69073: Multimodal bug fix for unreadable embedding payloads
   - #69075: RL Model Loader load plan with trace detach as view
   - #69074: RL Model Loader load plan with label each write
   - #69071: RL Model Loader load plan refit cases
   - #66963: Cache DiffKV K/V cache views per tensor
   - #49898: Reject whitespace-only bad_words in SamplingParams
   - #69028: Inkling 2 Mini model support
   - #68826: Multimodal GC optimization
   - #68748: MiniCPM5-15B-A2.5B support
   - #64878: MTP query lengths preservation in idle DP batches

Key themes emerging: Blackwell GPU support, MTP speculative decoding improvements, RL training workflows, KV cache optimizations, and expanded model support.

Multiple RFCs are circulating—limiting environment variables, data integrity in KV offload, Bring-Your-Own-GPU benchmarks, Direct Weight Reload mechanisms, speech timestamps, V1 Scheduler offload handling, and tool response formatting. Several performance bottlenecks are under discussion, including attention backend inefficiencies with KV cache view re-derivation, ROCm AMD optimization paths, and FlashInfer batch invariance concerns.
</think>


# vLLM Daily Digest — 2026-11-21

## 1. Today's Highlights

The vLLM community is tackling critical speculative decoding stability: a long-standing MTP crash with illegal memory access on long sequences (#40756, 46 comments) remains open alongside a new PR (#64878) fixing DP synchronization failures in MTP with adaptive verification. On the performance side, a new 2-bit Kitty KV quantization PR (#68945) enters WIP, promising aggressive memory reduction through dynamic precision boosting, while the ReplaySSM kernel (#62004) advances caching for faster Gated DeltaNet decode.

## 2. Releases & Breaking Changes

No releases in the last 24 hours.

## 3. New Model & Hardware Support

| Model / Hardware | Details | Links |
|-----------------|---------|-------|
| **Inkling 2 Mini** | New model integration (`Inkling2LoopForConditionalGeneration`) with variable-loop research checkpoint | [#69028](https://github.com/vllm-project/vllm/pull/69028) |
| **MiniCPM5-15B-A2.5B** | Native support added with BF16 serving, compressed-tensors INT4 W4A16, and DSpark speculative decoding | [#68748](https://github.com/vllm-project/vllm/pull/68748) |
| **NVIDIA RTX PRO 6000 Blackwell (SM120)** | Early support investigation underway; current driver (590.48.01) shows extremely low decode throughput with `--enforce-eager` and CUDA graphs are unusable | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **Intel XPU** | LoRA support via MXFP4 MoE XpuFusedMoe hooks landed; sliding-window block size bug fixed | [#62631](https://github.com/vllm-project/vllm/pull/62631), [#68108](https://github.com/vllm-project/vllm/pull/68108) |
| **AMD gfx950 / MI355X** | Qwen3.8-Flash-Next performance optimization plan (MXFP4 MoE, QuerySparse Attention) | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **AMD gfx942 / MI325X** | Muse Spark Open PTPC-FP8 optimization tracker | [#64018](https://github.com/vllm-project/vllm/issues/64018) |

## 4. Performance & Optimization

### Landed / In Review (PRs)

| PR | Area | Description | Links |
|----|------|-------------|-------|
| **#68945** | Quantization | **2-bit Kitty KV quantization** with dynamic precision boosting (selected key channels to 4-bit); new `--kv-cache-dtype kitty` flag | [PR #68945](https://github.com/vllm-project/vllm/pull/68945) |
| **#62004** | Kernel | **ReplaySSM**: cache SSM inputs for faster Gated DeltaNet standard decode; supersedes #48792 | [PR #62004](https://github.com/vllm-project/vllm/pull/62004) |
| **#69065** | Kernel | **Fused GDN MTP decode kernel for 16-bit** (BF16/FP16) recurrent state; existing kernel was warp-shuffle bound at 16-bit precision | [PR #69065](https://github.com/vllm-project/vllm/pull/69065) |
| **#66963** | Attention | **Cache DiffKV K/V views per tensor**; removes repeated view derivation on every eager attention call (implements slice of #64572) | [PR #66963](https://github.com/vllm-project/vllm/pull/66963) |
| **#68600** | Attention | **FlashInfer norm fusion batch invariance**; fixes incorrect switch between fused/explicit all-reduce + norm based on batch size | [PR #68600](https://github.com/vllm-project/vllm/pull/68600) |
| **#68826** | Multimodal | **Keep cached receiver-cache items out of Python GC**; eliminates >1s gen-2 collection pauses when LRU mm processor cache fills | [PR #68826](https://github.com/vllm-project/vllm/pull/68826) |

### Active RFCs & Issues (Performance)

| Issue | Area | Summary | Links |
|-------|------|---------|-------|
| **#64572** | Attention | Triton and eager backends re-derive K/V cache views on every call; PR #66963 addresses DiffKV slice | [#64572](https://github.com/vllm-project/vllm/issues/64572) |
| **#51454** | MLA / DP | DP8 vs TP8 for single-KV-head MLA: 7.7× KV, 3.4× faster 1M TTFT at c=8 on DeepSeek-V4-Flash-0731 (8× B200) | [#51454](https://github.com/vllm-project/vllm/issues/51454) |
| **#57406** | GLM | GLM 5.3 performance optimization tracking (same `glm_moe_dsa` base as 5.2) | [#57406](https://github.com/vllm-project/vllm/issues/57406) |

## 5. Stability & Regressions

### Critical (High Severity)

| Issue | Severity | Description | Links |
|-------|----------|-------------|-------|
| **#40756** | 🔴 Critical | **MTP speculative decoding crash** with illegal memory access on long sequences (Qwen3.6-27B-FP8, v0.19.1); 46 comments, open since April 2026 | [#40756](https://github.com/vllm-project/vllm/issues/40756) |
| **#41530** | 🔴 Critical | **TP Worker hang → EngineDeadError** (RPC sample_tokens timeout); DeepSeek-V4-Pro, TP=8, MTP speculative decoding | [#41530](https://github.com/vllm-project/vllm/issues/41530) |
| **#53887** | 🟠 High | **MTP draft OOM**: allocates second full vocab embedding, OOMing a 27B INT4 target that baseline fits (RTX 3090 24GB) | [#53887](https://github.com/vllm-project/vllm/issues/53887) |
| **#52531** | 🟠 High | **Kimi-K3 CUDA graph silently corrupts output** at batch=1; three distinct failure modes across cudagraph modes | [#52531](https://github.com/vllm-project/vllm/issues/52531) |

### Medium Severity

| Issue | Description | Links |
|-------|-------------|-------|
| **#51758** | Upgrade v0.26.0 → 0.27.0: DeepSeek V4 Flash error | [#51758](https://github.com/vllm-project/vllm/issues/51758) |
| **#52434** | `AttributeError: 'ParallelLMHead' object has no attribute 'output_size_per_partition'` (ARM64) | [#52434](https://github.com/vllm-project/vllm/issues/52434) |
| **#52300** | `ImportError: libcudart.so.13` on CUDA 12.6 + vLLM 0.21.0 | [#52300](https://github.com/vllm-project/vllm/issues/52300) |
| **#58147** | Qwen3 parser incorrectly converts tool-call markup to real tool calls | [#58147](https://github.com/vllm-project/vllm/issues/58147) |
| **#69073** | Multimodal: malformed embedding payloads leaking as HTTP 500 → fixed to 400 | [PR #69073](https://github.com/vllm-project/vllm/pull/69073) |

### Notable RFCs Affecting Architecture

| RFC | Topic | Links |
|-----|-------|-------|
| **#25700** | Limit envvars in vLLM; envvars equivalent to global variables, should become configs | [#25700](https://github.com/vllm-project/vllm/issues/25700) |
| **#54363** | Data integrity and I/O liveness for filesystem KV offload tier | [#54363](https://github.com/vllm-project/vllm/issues/54363) |
| **#61698** | Bring-Your-Own-GPU (BYOG) reproducible evals/benchmarks for PRs | [#61698](https://github.com/vllm-project/vllm/issues/61698) |
| **#54477** | Direct Weight Reload for RL Training (revised after 17-family validation) | [#54477](https://github.com/vllm-project/vllm/issues/54477) |
| **#62532** | V1 Scheduler: eliminate 1.0–1.8s re-queuing stall for completed async KV pulls | [#62532](https://github.com/vllm-project/vllm/issues/62532) |

## 6. What This Means for Application Developers

**Near-term considerations:**

- **Speculative decoding users**: The MTP crash (#40756) on long sequences is a known risk with Qwen3.6-27B-FP8; monitor for `EngineDeadError` if using DeepSeek-V4-Pro with MTP on TP=8. PR #64878 addresses a related DP synchronization issue and should land soon.

- **Blackwell (SM120) adopters**: v0.28.0+ Docker images show severely degraded throughput with `--enforce-eager`; CUDA graph capture is broken. Do not use eager mode for production workloads on RTX PRO 6000 Blackwell until the graph capture fix is prioritized.

- **Multimodal applications**: The GC pause fix (#68826) significantly improves engine responsiveness when processing audio/video/image inputs; upgrading when landed will reduce tail latencies.

- **RL training integrators**: The load-plan RL work (#69071, #69074, #69075) improves checkpoint loading correctness for RL families; relevant if running training loops that reload model weights.

- **Intel XPU users**: LoRA support for MXFP4 MoE is now functional (#62631); sliding-window block size is now honored correctly (#68108).

**Standards for production deployments:** The RFC on envvars (#25700) signals future config migrations; avoid building automation that depends on undocumented environment variables.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>Let me analyze this GitHub data for SGLang and generate a structured digest for 2026-11-21.

Key observations from the data:

**Releases:**
- No releases in the last 24h

**Issues to highlight:**
1. #26340 - CUDA Coredump Tracker (387 comments) - ongoing tracking
2. #42752 - CI Flaky tests tracker (227 comments)
3. #43699 - PD Disaggregation Roadmap Q4 2026 (26 comments)
4. #17050 - CI Test Failures and Fixes (15 comments)
5. #50920 - Idle-burst prefill issue (6 comments)
6. #51531 - Mamba SSM dtype bfloat16 bug (4 comments) - MATH-500 quality regression
7. #51608 - HiCache L3 storage prefetch bug under CP (3 comments)
8. #50700 - FlashStates hybrid cache management roadmap (3 comments)
9. #48460 - Triton next_power_of_2 override bug (3 comments)
10. #51701 - SSRF vulnerability in multimodal endpoints (3 comments)
11. #51733 - HiCache unified memory RFC for GB10/DGX Spark (2 comments)
12. #51628 - Mamba2 kernel compilation during serving (2 comments)
13. #51901 - Hybrid cache checkpoint bug (2 comments)
14. #51626 - Triton MoE 5-8x slower than flashinfer_cutlass (2 comments)

**PRs to highlight:**
1. #51900 - Kimi K3 shared expert side-stream ordering
2. #48746 - MLA caching opt-in for external models
3. #51683 - Unified-radix-cache external store lease renewal


4. #52000 - CI metrics JSON recording
5. #51982 - Triton 3.9 quant-videogen import fix
6. #51999 - LTX-2.3 cond pass block reuse optimization
7. #44651 - FLUX.3 nightlies replacement
8. #51977 - Megakernel Kimi K3 DSpark restoration
9. #51997 - Hy4 iHC fused path test coverage
10. #51998 - AMD tlx llvm_cl_opts fix
11. #51303 - AMD fbtriton kernel support continues
12. #51962 - Diffusion media URL handling
13. #48866 - DeepSeek-V4 ROCm identity prefill optimization
14. #51402 - Flashinfer platform capability
15. #51523 - AMD CI 73 more CUDA tests
16. #51728 - Weight cache load-diff format
17. #49214 - MLU attention GQA/MLA support
18. #51730 - Load-diff snapshot serving
19. #51502 - Scheduler external store optimization

I'm noticing several key infrastructure and optimization trends emerging. Flashinfer platform capabilities are expanding, with AMD CI tests expanding CUDA test coverage. The weight cache system is getting more sophisticated with load-diff format improvements and snapshot serving capabilities. There's also notable work on MLU attention mechanisms and scheduler optimizations for external stores.

Performance and optimization work appears concentrated on MoE backends, kernel compilation strategies, and memory management techniques like HiCache and hybrid cache systems. The DeepSeek-V4 work on ROCm suggests growing platform diversity.

Several critical issues are emerging, including SSRF vulnerabilities in multimodal endpoints, CUDA coredumps, and CI flaky test challenges. Performance degradation with Mamba SSM dtype and MoE backend compatibility issues are also surfacing. These findings point to ongoing refinement of the SGLang runtime infrastructure across different hardware platforms.
</think>


# SGLang Daily Digest — 2026-11-21

## 1. Today's Highlights

SGLang continues intensive work on PD disaggregation infrastructure with a Q4 2026 roadmap (#43699) and new unified-radix-cache optimizations. Three correctness bugs demand attention: an SSRF vulnerability in multimodal video endpoints (#51701), a ~8-point MATH-500 regression when using `--mamba-ssm-dtype bfloat16` (#51531), and a HiCache L3 storage prefetch deadlock under CP (#51608). Performance work targets Triton MoE (5–8× slower vs flashinfer_cutlass on H100), Mamba2 kernel compilation stalling, and DeepSeek-V4 ROCm identity prefill batching.

---

## 2. Releases & Breaking Changes

**No releases in the last 24 hours.** The project remains on the `main` branch cadence.

*Track via:* [#17050 CI Test Failures Tracker](https://github.com/sgl-project/sglang/issues/17050)

---

## 3. New Model & Hardware Support

| Category | Details | PR/Issue |
|----------|---------|----------|
| **MLA Caching** | External models can now opt into MLA caching via `use_mla: true` in HF text config | [#48746](https://github.com/sgl-project/sglang/pull/48746) |
| **AMD / ROCm** | `llvm_cl_opts` fix for ROCm Triton 3.8 compatibility | [#51998](https://github.com/sgl-project/sglang/pull/51998) |
| **AMD / Muse Spark** | fbtriton gfx950 kernels (qk_norm_rope_kv_cache, rmsnorm_gate, paged_attention_decode) behind opt-in switches | [#51303](https://github.com/sgl-project/sglang/pull/51303) |
| **MLU** | GQA and MLA attention support landed | [#49214](https://github.com/sgl-project/sglang/pull/49214) |
| **Apple Silicon** | MoE performance optimization effort ongoing (subissue of #19137) | [#22283](https://github.com/sgl-project/sglang/issues/22283) |
| **GB10 / DGX Spark** | RFC for HiCache sizing under unified memory architecture | [#51733](https://github.com/sgl-project/sglang/issues/51733) |

---

## 4. Performance & Optimization

### Landed / In Review

| Area | Change | Impact | PR |
|------|--------|--------|----|
| **Kimi K3 MoE** | Order shared-expert side-stream frees on current CUDA stream | Fixes async resource leak under `_sbo_shared_overlap` | [#51900](https://github.com/sgl-project/sglang/pull/51900) |
| **DeepSeek-V4 / ROCm** | Batch identity prefill writes into single GPU op | Reduces launch count; improves ROCm throughput | [#48866](https://github.com/sgl-project/sglang/pull/48866) |
| **Scheduler** | Skip external store probes when ranking waiting queue | Reduces latency under unified-radix-cache | [#51502](https://github.com/sgl-project/sglang/pull/51502) |
| **Unified Radix Cache** | Renew external store leases on device-cache hits | Fixes stale lease edge case | [#51683](https://github.com/sgl-project/sglang/pull/51683) |
| **LTX-2.3 Diffusion** | Reuse cond pass prefix blocks for STG perturbed pass | Eliminates redundant compute in blocks 0–27 | [#51999](https://github.com/sgl-project/sglang/pull/51999) |

### Known Issues

| Area | Issue | Severity |
|------|-------|----------|
| **Triton MoE on H100** | 5–8× slower than `flashinfer_cutlass` (3.1→19.8 ms step at batch 16; 5.7→41.3 ms at batch 128, Nemotron 3 Nano FP8 TP8) | **High** — workaround: use default flashinfer_cutlass backend |
| **Mamba2 JIT Compilation** | `_chunk_scan_fwd_kernel` compiles during serving, stalling first large prefills (~1.45 s per rank) | **Medium** — pre-compilation requested |
| **Idle-Burst Prefill** | First request TTFT degraded ~t_next_batch due to consecutive-prefill overlap scheduling | **Medium** — affects burst scenarios |
| **Triton Global Override** | `sglang/srt/utils/common.py` replaces `triton.next_power_of_2` on import, breaking third-party Triton kernels | **Medium** — library-level side effect |

---

## 5. Stability & Regressions

| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| **Critical (Security)** | SSRF via unvalidated URLs in `/v1/videos` (video_path, input_reference/image_path, control_path) | **Open** | [#51701](https://github.com/sgl-project/sglang/issues/51701) |
| **High (Correctness)** | `--mamba-ssm-dtype bfloat16` causes ~8-point regression on MATH-500 with Qwen3.5-9B; `float16` is unaffected | **Open** | [#51531](https://github.com/sgl-project/sglang/issues/51531) |
| **High (Correctness)** | HiCache L3 storage prefetch never completes under CP (attn_cp_size=8) with fast_file; requests admitted only after full retry cap | **Open** | [#51608](https://github.com/sgl-project/sglang/issues/51608) |
| **High (Correctness)** | Hybrid models at `--hybrid-cache-checkpoints-level 2`: identical repeat restores 0 tokens when prior decode crossed a Mamba tracking boundary | **Open** | [#51901](https://github.com/sgl-project/sglang/issues/51901) |
| **Medium (Stability)** | CUDA Xid 13 "CTA Not Present" in HiCache kvcacheio transfer kernels on Blackwell (B200) — 7 crashes across 4 machines | **Open** | [#46203](https://github.com/sgl-project/sglang/issues/46203) |
| **Medium (Correctness)** | HiCache write-back: 128 KiB batch path passes unregistered host VAs to `cudaMemcpyBatchAsync` on Blackwell | **Open** | [#40232](https://github.com/sgl-project/sglang/issues/40232) |
| **CI** | Flaky tests and infrastructure failures tracked in #42752 (227 comments); 0 broken, 10 flaky, 965 recently fixed (as of 2026-11-21) | **Ongoing** | [#42752](https://github.com/sgl-project/sglang/issues/42752), [#17050](https://github.com/sgl-project/sglang/issues/17050) |

---

## 6. What This Means for Application Developers

1. **Security first:** If you expose SGLang's multimodal video API externally, the SSRF vulnerability (#51701) requires immediate mitigation or patch once available. Do not rely on client-supplied URLs for video/reference paths without validation.

2. **Mamba dtype workaround:** If running Qwen3.5 or similar models with Mamba layers and experiencing quality degradation, avoid `--mamba-ssm-dtype bfloat16` until #51531 is resolved; `float16` preserves accuracy.

3. **MoE backend selection:** On H100/H200, the default `flashinfer_cutlass` MoE backend significantly outperforms Triton. Only switch to `--moe-runner-backend triton` if flashinfer is unavailable for your quantization format.

4. **HiCache + CP caution:** If using context parallelism (`attn_cp_size > 1`) with HiCache's L3 storage backend, current builds may deadlock on prefetch — monitor for `storage_hit stays 0` behavior and consider disabling fast_file until #51608 is fixed.

5. **Free-threaded Python:** Support for CPython 3.14t (PEP 703, nogil) is being explored (#22889); production use requires tracking upstream ecosystem compatibility.

6. **FlashStates on the horizon:** The FlashStates hybrid cache management proposal (#50700) aims to improve agentic workloads on hybrid attention/recurrent models — monitor for design feedback opportunities if you run such workloads.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to generate a llama.cpp digest for 2026-11-21 based on the GitHub data provided. Let me analyze the data and structure it according to the requested format.

Let me break down the key information:

**Releases (last 24h):**
- b12600: Inkling 2 Mini model support (loop graph, is_varloop attribute, new naming scheme)
- b12599: HIP/RDNA1 MMVQ parameter table
- b12597: Qwen3-ASR conversion fix (language output in thinking block)
- b12596: Metal norm chain fix (fused MUL/ADD)
- b12591: GGML major version bump reminders + deprecate ggml_ftype
- b12590: MTMD drama3 voice cloning (Fish S2 codec)
- b12589: Vulkan COL2IM_1D support
- b12588: Gemma4 optimized prompt processing for multi-seq queries
- b12584: TTS forward -t to mtmd context
- b12580: Server MCP proxy private URLs option

**Key PRs:**
- #32694: Inkling 2 Mini model support (closed)
- #32695: Inkling 2 Mini looped architecture (open)
- #32704: Inkling2 loop re-share loop slots after scale pass
- #32706: Vulkan enable coopmat on Intel Alchemist dGPU
- #32705: Fix heap OOB write in HRM-text loader
- #32697: MTMD fix qwen3a audio tail
- #31753: SYCL fused ADD, RMS_NORM, MUL + vectorize rms norm (+3.4% improvement)
- #30792: CUDA native q8_0 KV in flash-attn tile kernel
- #32574: ggml-backend generic fallback in tensor memset
- #32378: Context prevent excessive CPU polling without OpenMP (50% CPU reduction)


- #32669: Auto-apply .scale tensors + fix correctness

**Critical Issues:**
Several performance and stability problems are emerging. A critical prefill slowdown on RTX 5090 with Inkling-2-Mini is actively being investigated. Speculative decoding shows a 2x slowdown when using tensor splitting across multiple GPUs. Blackwell systems are experiencing slower CUDA operations on ADD/GELU kernels. V100 is also showing significant prefill performance degradation. Additional issues span CUDA memory access violations and RPC connection management problems that need resolution.

**Architectural Support:**
The framework now supports Inkling 2 Mini and its looped variant, Qwen3-ASR with thinking block functionality, and Gemma4 multi-sequence optimizations.

**Performance Gains:**
SYCL operations show measurable improvements—fused operations provide 3.4% speedup, while non-OpenMP builds reduce CPU overhead by 50%. Vulkan cooperative matrix operations on Intel Arc Alchemist are being enabled through kernel optimization.
</think>


# llama.cpp Digest — 2026-11-21

## Today's Highlights

The project shipped major support for **Inkling 2 Mini** (b12600), including a looped architecture variant and metadata-driven model building. Meanwhile, stability work continues on multi-backend issues: a critical performance regression with MTP on multi-GPU tensor splits (#27428) and prefill degradation on Blackwell (sm_120) are under active investigation.

---

## Releases & Breaking Changes

| Build | Change | Notes |
|-------|--------|-------|
| **b12600** | Inkling 2 Mini model support | Loop graph, `is_varloop` attribute, separate `model_type`; also see PR #32694 |
| **b12597** | Qwen3-ASR conversion fix | "language ..." output now correctly placed inside thinking block (PR #32571) |
| **b12591** | GGML major version bump reminders | `ggml_ftype` deprecated; migration notes in PR #32647 |
| **b12580** | Server MCP proxy hardening | New `--ui-mcp-proxy-allow-private-urls` flag (default off) — security-relevant if exposing MCP tools |

**No semver releases with binaries** — Issue #32623 flags that v1.0.0 and later semver tags lack release artifacts. Workaround: use the build hash releases (b125xx series) for now.

---

## New Model & Hardware Support

| Model / Arch | Backend | Details |
|--------------|---------|---------|
| **Inkling 2 Mini** (thinkingmachines/Inkling-2-Mini) | CUDA / Metal / CPU / Vulkan | Looped architecture support landed in b12600; looped slot re-sharing fix in PR #32704 |
| **Qwen3-ASR** | Conversion pipeline | Chat template now read from bundled `models/templates` (PR #32571) |
| **Gemma4** | All backends | Optimized prompt processing for multi-sequence queries (b12588, PR #32342) |
| **Drama3 voice cloning** (via Fish S2 codec) | MTMD pipeline | Codec encoder integration complete (b12590) |
| **Intel Arc Alchemist (Xe1)** | Vulkan | Cooperative matrix (`coopmat`) kernels re-enabled after register spill fixes (PR #32706) |
| **AMD RDNA1** | HIP | Explicit MMVQ parameter table for 1-warp-per-block mode (b12599, PR #32389) |

---

## Performance & Optimization

| Optimization | Backend | Impact | PR / Commit |
|--------------|---------|--------|-------------|
| Fused ADD + RMS_NORM + MUL + vectorized RMS norm | **SYCL** | +3.4% throughput on Qwen3.8-27B Q3_K_P (decode) | #31753 |
| Reduce CPU polling without OpenMP | **Metal / CPU** | ~50% CPU time reduction on M1 Pro; 5× lower power draw | #32378 |
| Vulkan COL2IM_1D misalignment handling | **Vulkan** | Fixes correctness issues on Intel Arc with non-64B-aligned tensors | #32673 |
| Metal norm chain operand flexibility | **Metal** | Correctness fix allowing either operand in fused MUL/ADD | #32300 |
| Native q8_0 KV in flash-attn tile kernel | **CUDA** | Improves KV reuse across GQA heads; targets `-fa on` + quantized cache | #30792 |
| Improve Grouped XMX GEMM (avoid SLM staging) | **SYCL** | Reduces memory traffic for Intel GPU GEMM; depends on #30156 | #31428 |
| `.scale` tensor auto-application in MoE FFN | **Core** | Correctness fix; wires NVFP4/Nemotron-H-style scale tensors | #32669 |

---

## Stability & Regressions

> Ranked by severity and user impact. "🔴 Critical" requires immediate action; "🟡 Medium" has workarounds or fix PRs in progress.

| Severity | Issue | Description | Workaround / Status |
|----------|-------|-------------|---------------------|
| 🔴 **Critical** | #32707 | Inkling 2 Mini (IQ4_NL) prefill is "abominably slow" and crashes on RTX 5090 | Reported today; no fix yet |
| 🔴 **Critical** | #27428 | MTP draft halves prompt processing speed on multi-GPU layer split; single GPU unaffected | Bug unconfirmed; reproducible on CUDA + tensor split mode |
| 🟡 **Medium** | #30004 | CUDA ADD/GELU regression on B200 (sm_120) since PDL commit | Bisected to commit 7b28f950; fix PR in progress |
| 🟡 **Medium** | #32245 | ~50% prefill regression on V100 (sm_70) comparing v1.0.0 to v0.8.0 | Investigating; likely CUDA kernel schedule change |
| 🟡 **Medium** | #30782 | MTP broken after upgrade with SYCL/Intel Arc Pro B70 | Build b12580+ may address; needs verification |
| 🟡 **Medium** | #32630 | SIGSEGV after upgrading hip-runtime-amd to 10.1-2.1 | Affects ROCm/HIP; segmentation fault at inference start |
| 🟠 **Low** | #27845 | Memory leak with `-sm tensor` on dual Intel B70 SYCL backend | Stable release (b10665) affected |
| 🟠 **Low** | #29581 | llama-server SIGTERM during shutdown calls `exit()` from signal handler | Can deadlock in glibc `free()`; affects Vulkan + RPC |
| 🟠 **Low** | #30838 | ROCm/RDNA4 (gfx1201) FlashAttention 4× slower with head_size=512 vs 256 | Affects Gemma 4 global layers |
| 🟠 **Low** | #32689 | Qwen3a audio tail has extra padding tokens | Fixed in PR #32697 |

**Correctness fix landed today:**
- PR #32705: Heap out-of-bounds write in HRM-Text loader — wrapped slot-count check prevents integer overflow during metadata validation.

---

## What This Means for Application Developers

1. **Inkling 2 Mini is now production-ready for local inference.** If you're serving reasoning models with looped architectures, update to b12600. Note the `--reasoning-preserve` default interaction with templates that drop past reasoning (fixed in #32688).

2. **SYCL users on Intel GPUs get a free speedup.** The fused kernel + RMS norm vectorization in #31753 requires no config changes—just rebuild. If you run Qwen3.8B-class models, expect ~3% faster decode.

3. **Metal CPU polling is dramatically reduced.** If you're running llama-server on Apple Silicon without OpenMP, power consumption during idle inference sessions drops significantly. This is a pure backend improvement requiring no application changes.

4. **Avoid `-sm tensor` + multi-GPU with speculative decoding.** Until #27428 is resolved, using `--split-mode tensor` with MTP on multi-GPU setups halves prefill throughput. Use layer or row splitting instead, or run on single GPU.

5. **MCP proxy is now opt-in for private URLs.** If you rely on internal MCP servers, add `--ui-mcp-proxy-allow-private-urls`. The default is now secure-by-default.

6. **Upgrade to b12591+ for GGML deprecation warnings.** The `ggml_ftype` deprecation signals upcoming changes to GGUF ftype metadata handling—audit your GGUF generation tooling if you produce custom quantizations.

---

*Digest generated from ggml-org/llama.cpp activity on 2026-11-21.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>Let me analyze this GitHub data for Ollama and generate a structured digest for 2026-11-21.

Let me organize the key information:

**Releases:** None in last 24h

**Key Issues (13 total):**
- VRAM estimation feature request (#9774) - Updated 2026-11-20
- MLX runner GPU utilization bug on M4 Pro (#18754) - Updated 2026-11-21
- Windows GPU discovery console flash (#18954) - Updated 2026-11-20
- Tensor weight not found for custom model (#19733) - CLOSED 2026-11-20
- OLLAMA_KEEP_ALIVE too short (#19624) - CLOSED 2026-11-21
- Qwen 3.8 system message template bug (#19762) - Updated 2026-11-20
- Gemma4 follow-up repeated unused50 (#18359) - Updated 2026-11-20
- Ollama won't run on Alpine Linux (#19800) - Updated 2026-11-20
- /v1/chat/completions stream ending bug (#19792) - Updated 2026-11-20
- Intel Mac macOS 12/13 interest (#19308) - Updated 2026-11-20
- Cloud beam empty content bug (#19804) - Updated 2026-11-20
- GPU energy reporting feature (#19789) - Updated 2026-11-20
- Linux installer sha256 verification (#19787) - Updated 2026-11-20

**Key PRs (26 total, top highlights):**
- MLX runner inkling follow-up (#19806) - CLOSED


- Refactoring MLX tensor helpers to improve code organization (#19805)
- Adding support for Inkling 2 Mini model (#19799) - CLOSED
- Critical VRAM accounting and GPU splitting fix (#19632)
- Enhanced install script error handling (#15010) - CLOSED
- Implementing preview channel installation support (#19801) - CLOSED
- Maintaining MLX conversation cache state across sessions (#19745)
- Fixing API tool argument order preservation (#19802)
- Addressing Pi catalog test timeout instability (#19742) - CLOSED
- Integrating Pi with Ollama plugin ecosystem (#19798)

I'm seeing several critical infrastructure improvements emerging from these PRs. The VRAM accounting fix and GPU splitting changes appear particularly significant for performance optimization. The MLX runner enhancements, especially the tensor helper refactoring and conversation cache persistence, suggest deeper investment in Apple Silicon support. The preview channel support and install script improvements indicate ongoing refinement of deployment and distribution mechanisms.

The new model support, particularly for Inkling 2 Mini and the expanded quantization strategies, points to expanding multimodal and efficiency capabilities. The MLX default parallelism mechanism looks strategic for memory-constrained environments.

The most critical fixes address cloud reliability - the beam empty content issue and runner resurrection prevention - which directly impact production stability. The 429 rate limiting approach suggests a mature approach to resource management.

The developer-facing implications are substantial: improved GPU resource utilization, more robust tool interactions, clearer error signaling, and more flexible installation channels.
</think>


# Ollama Digest — 2026-11-21

## 1. Today's Highlights

Ollama's 26 pull requests landed today focus heavily on MLX runner hardening and backend reliability. The most impactful change is **PR #19632**, which fixes critical VRAM accounting bugs causing incorrect model eviction and GPU splitting across CUDA, Metal, and other backends. Simultaneously, multiple PRs address streaming robustness for OpenAI-compatible endpoints, with new SSE error frame handling (**PR #19795**) and mid-stream error propagation (**PR #19797**) both targeting the `/v1/chat/completions` path.

---

## 2. Releases & Breaking Changes

**No new releases** in the last 24 hours.

| Change | Detail | PR/Issue |
|---|---|---|
| Preview channel support | `install.sh` and `install.ps1` now accept `OLLAMA_CHANNEL=preview`; `OLLAMA_VERSION` retains precedence | [#19801](https://github.com/ollama/ollama/pull/19801) |
| Install script no longer falsely reports success on sudo failure | Root cause: the `EXIT` trap unconditionally called the success message; now gated on actual command exit codes | [#15010](https://github.com/ollama/ollama/pull/15010) |

> **Migration note:** If you have automation wrapping the install script, audit any post-install checks that relied on the (incorrect) "Install complete" output — the script now only emits this on a successful install.

---

## 3. New Model & Hardware Support

| Model / Architecture | Backend | Notes | PR/Issue |
|---|---|---|---|
| **Inkling 2 Mini** | MLX (Apple Silicon) | Added as a new supported model in the MLX runner | [#19799](https://github.com/ollama/ollama/pull/19799), [#19806](https://github.com/ollama/ollama/pull/19806) |
| **Qwen 3.8** (`qwen3.8:27b-mxfp8`) | MLX (M4 Pro) | Bug reported: runner not using full GPU — see §5 | [#18754](https://github.com/ollama/ollama/issues/18754) |
| **Gemma 4** (`gemma4:12b`) | Native API | Follow-up emits repeated `<unused50>` frames and HTTP 200 EOF without `done: true` — see §5 | [#18359](https://github.com/ollama/ollama/issues/18359) |

No new quantization formats or CUDA/ROCm kernel changes in the last 24 hours.

---

## 4. Performance & Optimization

| Area | Change | Impact | PR/Issue |
|---|---|---|---|
| **VRAM accounting & GPU splitting** | Fixed incorrect VRAM estimation causing models to be evicted prematurely, refused to load, or spread across GPUs unnecessarily | Affects CUDA, Metal, and all other backends; addresses issues #19463, #18679, #18349, #16599 | [#19632](https://github.com/ollama/ollama/pull/19632) |
| **MLX default parallelism** | Now selects 1, 2, 4, or 8 slots based on available memory and estimated per-client storage at the model's context limit | Automatic tuning for M-series chips; explicit `OLLAMA_NUM_PARALLEL` settings are preserved | [#19785](https://github.com/ollama/ollama/pull/19785) |
| **MLX tensor helper consolidation** | Moves duplicated `SupportsGatherQMM`, `TensorAny`, `FreeTensorKeys`, `StackAndClone`, and `TransposeExpertWeightForGatherQMM` into shared helpers | Reduces code duplication across MoE architectures; easier maintenance | [#19805](https://github.com/ollama/ollama/pull/19805) |
| **MLX conversation cache persistence** | Completed conversation checkpoints are saved asynchronously and restored after memory reclamation, model switching, or runner restart | Reduces re-computation on context switches for Apple Silicon users | [#19745](https://github.com/ollama/ollama/pull/19745) |
| **Runner slot timeout → HTTP 429** | Waits for an execution slot are now limited to five minutes in MLX and llama-server; after timeout or queue full, server returns `429` | Gives clients a clear retry signal instead of indefinite hangs | [#19796](https://github.com/ollama/ollama/pull/19796) |

---

## 5. Stability & Regressions

**Severity order (highest first):**

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| 🔴 **Critical — Cloud regression** | `POST /api/chat` on Ollama Cloud `beam` model returns empty content and no `tool_calls` on any request with a tools array (since ~2026-11-20) | **OPEN** — [#19804](https://github.com/ollama/ollama/issues/19804) | — |
| 🔴 **Critical — Runner resurrection deadlock** | Concurrent requests can resurrect expiring runners, causing the server to go quiet on `/api/generate` | **OPEN** — [#19794](https://github.com/ollama/ollama/pull/19794) | (same PR) |
| 🟠 **High — Alpine Linux breakage** | `ollama` fails to start with `fcntl64: symbol not found` | **OPEN** — [#19800](https://github.com/ollama/ollama/issues/19800) | — |
| 🟠 **High — MLX GPU underutilization** | M4 Pro 48 GB reports low GPU usage for `qwen3.8:27b-mxfp8`; working in 0.35.1-rc2 but regressed in 0.40.0 | **OPEN** — [#18754](https://github.com/ollama/ollama/issues/18754) | — |
| 🟠 **High — Windows GPU probe console flash** | Short-lived black console windows appear during GPU discovery when `ollama serve` runs as a background native process | **OPEN** — [#18954](https://github.com/ollama/ollama/issues/18954) | — |
| 🟡 **Medium — OpenAI stream truncation** | `/v1/chat/completions` silently ends the stream without `finish_reason` or `[DONE]` when the glimmer parser raises mid-generation | **OPEN** — [#19792](https://github.com/ollama/ollama/issues/19792) | [#19795](https://github.com/ollama/ollama/pull/19795), [#19797](https://github.com/ollama/ollama/pull/19797) |
| 🟡 **Medium — Gemma4 malformed tool calls** | `gemma4:12b` often leaves list brackets unclosed in tool call arguments, causing the parser to log failures | **OPEN** — [#18359](https://github.com/ollama/ollama/issues/18359) | [#19274](https://github.com/ollama/ollama/pull/19274) (fix PR) |
| 🟡 **Medium — Incomplete stream reporting** | Server can close HTTP 200 with valid NDJSON chunks before `done: true`; Go client returns `nil`, so callers mistake partial for complete answers | **OPEN** — [#19791](https://github.com/ollama/ollama/pull/19791) | (same PR) |
| 🟡 **Medium — Qwen 3.8 template misordering** | Renderer moves all system messages to the start of the prompt for Qwen 3.8, but Ollama never actually uses the template | **OPEN** — [#19762](https://github.com/ollama/ollama/issues/19762) | — |
| 🟢 **Low — OLLAMA_KEEP_ALIVE default** | Default of 300 s (5 min) is too short for chat-mode usage patterns | **CLOSED** (won't fix / deferred) — [#19624](https://github.com/ollama/ollama/issues/19624) | — |
| 🟢 **Low — Linux installer sha256 verification** | `scripts/install.sh` never verifies downloaded `.tar.zst` against `sha256sum.txt` | **OPEN** — [#19787](https://github.com/ollama/ollama/issues/19787) | — |
| 🟢 **Low — GPU energy per response** | Feature request to expose GPU energy consumption in API metrics | **OPEN** — [#19789](https://github.com/ollama/ollama/issues/19789) | — |
| 🟢 **Low — macOS 12/13 Intel build** | Community build for Intel Macs stuck on macOS 12/13 | **OPEN** (community interest) — [#19308](https://github.com/ollama/ollama/issues/19308) | — |

---

## 6. What This Means for Application Developers

**Immediate action items:**

1. **If you run on Metal (Apple Silicon):** The MLX runner changes are significant. Monitor your parallelism behavior after upgrading — `OLLAMA_NUM_PARALLEL` now auto-tunes, which could increase throughput but also change memory pressure profiles. If you run Qwen 3.8 on M4 Pro, the GPU underutilization bug (**#18754**) may be affecting your throughput numbers.

2. **If you proxy through the OpenAI compatibility layer:** Two PRs fix silent stream truncation bugs. **PR #19795** adds proper SSE error frames and `[DONE]` markers on mid-stream errors, and **PR #19797** propagates streaming errors through the middleware. After upgrading, you should see consistent `finish_reason` values instead of truncated responses appearing as complete.

3. **If you use tool-calling with cloud models:** The `beam` model regression (**#19804**) means any tool array in requests will silently return empty content. Avoid the `beam` model for tool-use workloads until this is patched, or implement explicit empty-content checks.

4. **If you run on Windows with GPU acceleration:** The console flash during GPU discovery (**#18954**) is cosmetic but could be alarming to end users in kiosk or automated environments.

5. **If you build CI/CD around `ollama` installs:** Update your install script checks — the fix in **PR #15010** means the output now correctly reflects failure cases. Existing scripts that grep for "Install complete" to detect success will now get accurate signals (but only on the new install script version).

6. **If you manage long-running inference workloads:** The runner slot timeout returning HTTP 429 (**PR #19796**) means your retry logic should handle `429` in addition to `503`. Five minutes is the new boundary before the server gives up waiting for an execution slot.

7. **If you rely on multi-turn conversation state:** The MLX cache persistence (**PR #19745**) means conversation state now survives runner restarts on Apple Silicon. Audit whether your application state management accounts for this — it may reduce unnecessary re-computation but could also affect how you handle state reset.

---

*Digest generated from github.com/ollama/ollama — 26 PRs, 13 issues, 0 releases in the 24h window ending 2026-11-21.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>Let me analyze the GitHub data for LiteLLM and create a structured digest for 2026-11-21.

Let me organize the key information:

**Releases:**
- v1.111.0-rc.3 (release candidate)
- v1.110.2
- v1.109.3
- v1.108.14 (LTS)
- v1.108.13 (LTS)
- v1.106.12

**Key Issues (Updated in last 24h):**
- #18058 [CLOSED] - Cost calculation bug for ElevenLabs (12 comments)
- #8304 [CLOSED] - Static type checking issues (10 comments)
- #53185 [OPEN] - OAuth client_id query parameter rejected (5 comments)
- #43166 [OPEN] - Gemini Live Avatar feature request (5 comments)
- #39322 [OPEN] - least-busy routing bug (5 comments)
- #31613 [OPEN] - Realtime health check SSL bug for ws:// (4 comments)
- #37853 [OPEN] - Private ingress mode for GCP Terraform (4 comments)
- #49680 [CLOSED] - prisma_migration ImportError bug (4 comments)
- #51445 [CLOSED] - /v1/responses budget reservation bug (3 comments)
- #36066 [CLOSED] - Realtime API credential resolution bug (3 comments)
- #28636 [OPEN] - ElevenLabs STT diarization options (3 comments)
- #30300 [CLOSED] - 400 error on image generation from OpenWeb UI (3 comments)
- #28989 [CLOSED] - Gemini image generation safety blocks (3 comments)
- #33272 [OPEN] - litellm.num_retries global permanently None (3 comments)


- #52247 [OPEN] - SQL_ASCII encoding crash (3 comments)
- #51824 [CLOSED] - UTF-16 surrogates in HTTP bodies (3 comments)
- #44538 [CLOSED] - /v1/audio/transcriptions usage logging (2 comments)
- #48401 [OPEN] - Streaming drops OpenRouter reasoning chunks (2 comments)
- #36997 [CLOSED] - Admin UI JWT cookie security (2 comments)
- #37028 [CLOSED] - Gemini system_instruction naming (2 comments)
- #37810 [OPEN] - llm_api

I notice additional issues spanning security vulnerabilities, protocol handling problems, and integration bugs. The list includes SQL encoding complications, HTTP body parsing challenges, streaming response handling, and authentication-related concerns across different AI service providers.

I'll focus on the most impactful pull requests from the latest development cycle. These include dashboard API type regeneration, UI lens updates, team tracing controls, and fixes for JWT authentication. Notably, there's work on handling malformed Gemini Vertex AI responses and supporting Live Avatar features on Vertex AI realtime.

The PRs demonstrate ongoing refinements in API type management, authentication mechanisms, and provider-specific response handling. Key themes include improving error resilience, enhancing security, and expanding cross-platform compatibility.

Proposed features and refactoring efforts are targeting message configuration standardization and Bedrock structured output selection. These initiatives aim to streamline integration and improve flexibility for developers working with language model APIs.

The development landscape shows active progress in Rust integration, with OpenSSL adoption for FIPS builds and WebRTC serving capabilities. Notably, there's a strong emphasis on tracing and observability through Lens, which now supports more granular gateway tracing and key team controls.

A critical regression involves ElevenLabs cost calculation issues that have been resolved in version 1.111.0-rc.3, demonstrating ongoing commitment to accurate service billing.

Security and configuration challenges persist, including OAuth parameter handling for GET requests, potential SSL compatibility problems with WebSocket connections, and JWT authentication complexities. The num_retries global setting remains a concern, potentially disrupting retry mechanisms.

The release introduces targeted fixes for Vertex AI malformed responses, enhanced JWT authentication with audience and public key URL support, and expanded platform integrations like Gemini Live Avatar on Vertex AI. Significant UI improvements include dashboard API type regeneration and lens updates to version 0.2.0.

The project continues advancing with key and team tracing controls, plus refined messages configuration architecture for more robust message handling.
</think>


# LiteLLM Digest — 2026-11-21

## 1. Today's Highlights

LiteLLM shipped a **release candidate v1.111.0-rc.3** alongside stable patch v1.110.2 and v1.109.3, closing a long-standing ElevenLabs cost-calculation bug (#18058) that silently miscounted spend. On the open-issues front, a **regression in v1.110.1 broke OAuth GET requests** carrying `client_id` as a query parameter (#53185), which will affect browser-based MCP integrations. Meanwhile, the team is actively shipping new capabilities: **Gemini Live Avatar** is now in flight for both OpenAI-compatible and Vertex AI realtime paths (PR #53270, Issue #43166), and the **Lens observability layer** is gaining per-key/per-team tracing controls and richer trace shapes (PR #53191, PR #53285).

---

## 2. Releases & Breaking Changes

| Version | Type | Notes |
|---------|------|-------|
| **v1.111.0-rc.3** | RC | Cosign-signed image at `ghcr.io/berriai/litellm:v1.111.0-rc.3` |
| **v1.110.2** | Stable patch | Cosign-signed; likely contains #18058 fix |
| **v1.109.3** | Stable patch | Cosign-signed |
| **v1.108.14** | LTS | Tagged `lts`; pull `ghcr.io/berriai/litellm:lts` for latest LTS |
| **v1.108.13** | LTS | Previous LTS tag |
| **v1.106.12** | Stable | Cosign-signed |

**Migration note:** The `lts` tag always tracks the newest LTS patch — operators using it do **not** need to change their image reference to pick up v1.108.14.

---

## 3. New Model & Hardware Support

| Area | Detail | PR / Issue |
|------|--------|------------|
| **Gemini Live Avatar** | `avatar_config` / `customized_avatar` support landing for both OpenAI-compatible Gemini realtime (`bidiGenerateContent`) and Vertex AI realtime. | [#43166][#43166], [#53270][pr-53270] |
| **GPT-Live over WebRTC** | Sideband attach for WebRTC-based GPT-Live sessions with correct billing from a proxy sideband. | [#53282][pr-53282] |
| **Rust bridge FIPS** | The Rust HTTP client in the Rust bridge now uses OpenSSL instead of `rustls+ring`, enabling FIPS-compliant deployments. | [#53104][pr-53104] |

No new base-model support or quantization format additions were flagged in the 24 h window.

---

## 4. Performance & Optimization

| Category | Detail | PR / Issue |
|----------|--------|------------|
| **Vertex AI malformed-reply retry** | Vertex / AI Studio Gemini now correctly surfaces malformed replies (200 OK but no output) as errors, triggering retries and fallbacks instead of silently returning empty responses while billing tokens. | [#53231][pr-53231] |
| **Response cache + OTel interaction** | Fixed a regression where enabling `enable_caching_on_provider_specific_optional_params` under OpenTelemetry caused the exact-match cache to never hit. | [#49311][#49311] (closed) |
| **Bedrock structured output** | Bedrock Claude models now auto-select native structured output from a single by-default flag, removing the old opt-in switching logic and falling back to JSON tool only when Bedrock rejects the schema. | [#50492][pr-50492] |
| **Rust `zip` dep** | Bumped embedded zip crate from 2.4.2 → 9.0.5 (includes mode fix). | [#51354][pr-51354] |
| **Messages config refactor (ongoing)** | Stacked PRs are splitting `BaseMessagesConfig` into endpoint, auth, dialect, and reply parts, enabling a single request-building pipeline that native-output retry can reuse — expected to improve correctness and maintainability across 20+ providers. | [#53199][pr-53199], [#53203][pr-53203], [#53204][pr-53204] |

---

## 5. Stability & Regressions

### High Severity

| # | Issue | Summary | Status |
|---|-------|---------|--------|
| **#53185** | OAuth `client_id` in query string rejected | GET requests to pass-through routes with `client_id` as a query param now return 401 after upgrading to v1.110.1, breaking browser OAuth for MCP servers. | **OPEN** — no fix PR yet |
| **#33272** | `litellm.num_retries` permanently set to `None` | Any exception in a direct `litellm.completion()` call permanently clobbers the module-level retry global, disabling retries process-wide for all subsequent calls. | **OPEN** — no fix PR yet |

### Medium Severity

| # | Issue | Summary | Status |
|---|-------|---------|--------|
| **#31613** | Realtime health check sets `ssl=` on `ws://` connections | Self-hosted vLLM `/v1/realtime` WebSocket endpoints fail health checks because LiteLLM adds an incompatible `ssl=` param to non-TLS URLs. | **OPEN** |
| **#52247** | `SQL_ASCII` DB encoding crashes proxy at startup | Proxy exits with `ValueError: invalid literal for int() with base 10: "b'8192'"` in `find_blockers` when the PostgreSQL encoding is `SQL_ASCII`. | **OPEN** |
| **#50127** | Blocked requests stored in plain text in spend logs | With `store_prompts_in_spend_logs: true`, a `pre_call` guardrail block stores the triggering prompt (potentially containing secrets/PII) in plain text in `LiteLLM_SpendLogs`. | **OPEN** |
| **#39322** | Least-busy routing starves deployments | Response-cache hits drift the routing counter negative; ties always pick the first worker; counter is not shared across workers. | **OPEN** — linked to #25323 |

### Recently Closed (regressions fixed or acknowledged)

| # | Issue | Summary | Status |
|---|-------|---------|--------|
| **#18058** | ElevenLabs cost calculation broken | Fixed in v1.111.0-rc.3 / v1.110.2. |
| **#49680** | `prisma_migration --skip_server_startup` ImportError | Prisma migration script now guards the `psycopg` import; fixed. |
| **#51824** | Lone UTF-16 surrogates crash HTTP handler | Raw Python strings with isolated surrogates no longer cause `UnicodeEncodeError` before dispatch. |
| **#28989** | Gemini image generation silently drops safety `finishReason` | Safety-blocked generations now raise an appropriate error instead of returning an empty response. |
| **#49311** | Exact-match cache never hits with OTel + provider-specific params | Fixed. |

---

## 6. What This Means for Application Developers

1. **If you use ElevenLabs via LiteLLM proxy** — upgrade to v1.110.2 or v1.111.0-rc.3. Previous versions systematically underreported spend for ElevenLabs models.

2. **If you run v1.110.1+ and use OAuth browser flows** — `client_id` passed as a query parameter on GET requests to pass-through routes will now 401. Either move the parameter to a POST body or wait for a patch.

3. **If you rely on retry logic** — avoid calling `litellm.completion()` directly in the same process where you also call it via the proxy SDK; the module-level `num_retries` global bug can silently disable retries after the first exception.

4. **If you use the LiteLLM proxy with a `SQL_ASCII` PostgreSQL database** — do not upgrade until v1.109.x or apply a workaround; the proxy will crash on startup.

5. **If you use Vertex AI Gemini with structured outputs** — the Bedrock-style refactor (#50492) should improve reliability, but test against large schemas before promoting to production.

6. **If you need Gemini Live Avatar** — both OpenAI-compatible and Vertex AI realtime paths are actively being built; track [#43166][#43166] and [#53270][pr-53270] for availability.

7. **If you use LiteLLM's Lens observability** — the new per-key and per-team tracing controls (PR #53191) will let you scope traces without granting broader permissions, improving multi-tenant debuggability.

---

## Quick Links

- **Releases:** https://github.com/BerriAI/litellm/releases
- **Issues:** https://github.com/BerriAI/litellm/issues
- **PRs:** https://github.com/BerriAI/litellm/pulls
- **Docker (latest):** `ghcr.io/berriai/litellm:latest`
- **Docker (LTS):** `ghcr.io/berriai/litellm:lts`

---

[#18058]: https://github.com/BerriAI/litellm/issues/18058
[#8304]: https://github.com/BerriAI/litellm/issues/8304
[#53185]: https://github.com/BerriAI/litellm/issues/53185
[#43166]: https://github.com/BerriAI/litellm/issues/43166
[#39322]: https://github.com/BerriAI/litellm/issues/39322
[#31613]: https://github.com/BerriAI/litellm/issues/31613
[#37853]: https://github.com/BerriAI/litellm/issues/37853
[#49680]: https://github.com/BerriAI/litellm/issues/49680
[#51445]: https://github.com/BerriAI/litellm/issues/51445
[#36066]: https://github.com/BerriAI/litellm/issues/36066
[#28636]: https://github.com/BerriAI/litellm/issues/28636
[#30300]: https://github.com/BerriAI/litellm/issues/30300
[#28989]: https://github.com/BerriAI/litellm/issues/28989
[#33272]: https://github.com/BerriAI/litellm/issues/33272
[#52247]: https://github.com/BerriAI/litellm/issues/52247
[#51824]: https://github.com/BerriAI/litellm/issues/51824
[#44538]: https://github.com/BerriAI/litellm/issues/44538
[#48401]: https://github.com/BerriAI/litellm/issues/48401
[#36997]: https://github.com/BerriAI/litellm/issues/36997
[#37028]: https://github.com/BerriAI/litellm/issues/37028
[#37810]: https://github.com/BerriAI/litellm/issues/37810
[#37857]: https://github.com/BerriAI/litellm/issues/37857
[#53079]: https://github.com/BerriAI/litellm/issues/53079
[#50127]: https://github.com/BerriAI/litellm/issues/50127
[#34914]: https://github.com/BerriAI/litellm/issues/34914
[#48362]: https://github.com/BerriAI/litellm/issues/48362
[#46059]: https://github.com/BerriAI/litellm/issues/46059
[#49311]: https://github.com/BerriAI/litellm/issues/49311
[#46454]: https://github.com/BerriAI/litellm/issues/46454
[#52251]: https://github.com/BerriAI/litellm/issues/52251

[pr-53289]: https://github.com/BerriAI/litellm/pull/53289
[pr-53281]: https://github.com/BerriAI/litellm/pull/53281
[pr-53191]: https://github.com/BerriAI/litellm/pull/53191
[pr-51354]: https://github.com/BerriAI/litellm/pull/51354
[pr-53288]: https://github.com/BerriAI/litellm/pull/53288
[pr-53231]: https://github.com/BerriAI/litellm/pull/53231
[pr-53270]: https://github.com/BerriAI/litellm/pull/53270
[pr-21750]: https://github.com/BerriAI/litellm/pull/21750
[pr-53199]: https://github.com/BerriAI/litellm/pull/53199
[pr-53203]: https://github.com/BerriAI/litellm/pull/53203
[pr-53204]: https://github.com/BerriAI/litellm/pull/53204
[pr-50492]: https://github.com/BerriAI/litellm/pull/50492
[pr-49899]: https://github.com/BerriAI/litellm/pull/49899
[pr-49896]: https://github.com/BerriAI/litellm/pull/49896
[pr-53104]: https://github.com/BerriAI/litellm/pull/53104
[pr-53237]: https://github.com/BerriAI/litellm/pull/53237
[pr-53282]: https://github.com/BerriAI/litellm/pull/53282
[pr-53285]: https://github.com/BerriAI/litellm/pull/53285
[pr-52791]: https://github.com/BerriAI/litellm/pull/52791
[pr-53286]: https://github.com/BerriAI/litellm/pull/53286

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>Let me analyze the provided GitHub data for the Unsloth project and generate a structured digest for 2026-11-21.

Key data points to extract:

**Releases (last 24h):**
- v0.1.922-beta: Inkling Mini + Bug fixes
- v0.1.921-beta: Bug Fixes + Faster images + Inkling Mini + faster MCP chats

**Key features from releases:**
- Inkling 2 Mini model (26.4B, runs on 16GB RAM)
- Faster image generation on small GPUs
- Video restyling on Apple Silicon Macs
- Faster MCP tool chats (no longer reprocess whole conversation)

**Latest Issues (25 items, last 24h):**
Important ones:
1. #17015 [CLOSED] - Studio: repeated full prompt processing with Qwen hybrid model after tool use
2. #18690 [CLOSED] - Inkling fails to load on 32GB DDR5 laptop
3. #17605 [CLOSED] - mmap regression forcing despite --load-mode none
4. #18001 [CLOSED] - Incorrect loading into unified memory on Ryzen 8700G & Radeon 780M
5. #18563 [OPEN] - v0.1.920-beta crashes on model load
6. #18321 [OPEN] - Model Picker UI cramped feature request
7. #15597 [OPEN] - Unsloth Translate: Dedicated Offline Translation Mode
8. #18236 [OPEN] - Automatic max_seq_length setter
9. #18465 [OPEN] - Support DaisyRose-27B
10. #18403 [OPEN] - QLoRA on gfx1200 (RX 9060 XT, RDNA4) aborts with HIP error
11. #18699 [OPEN] - Malware script warning on Mac update


12. #18622 [OPEN] - Dual RX 6700 XT ROCm crash

Emerging development threads include UI refinement, performance optimization, and expanding model compatibility. The team is addressing memory management, platform-specific challenges, and user interface improvements across multiple hardware configurations.

Key focus areas involve fine-tuning model selection, translation capabilities, and resolving platform-specific technical constraints. Notably, the development team is enhancing support for advanced GPU architectures and exploring more efficient model integration strategies.

Prominent initiatives target automatic sequence length configuration, improved model loading mechanisms, and expanding multi-modal translation capabilities. The team is systematically addressing complex technical challenges across different hardware environments.

Specific development efforts include resolving ROCm compatibility issues, refining model picker interfaces, and implementing more robust translation features for edge case scenarios like Hmong language support.

Key technical improvements target cross-platform compatibility, memory management, and enhancing user experience across different hardware configurations. Notably, the team is addressing nuanced challenges in AMD GPU environments, particularly around NPU and GPU performance optimizations.

The latest pull requests demonstrate a comprehensive approach to fixing computational edge cases, with a focus on robust error handling and maintaining consistent performance across diverse system architectures.
</think>


# Unsloth Digest — 2026-11-21

## 1. Today's Highlights

Unsloth released v0.1.922-beta with the new **Inkling 2 Mini** (26.4B, 16GB RAM footprint), bringing faster image generation for small GPUs and video restyling to Apple Silicon. Meanwhile, the team merged a critical GRPO optimization that eliminates a redundant forward pass when `num_iterations > 1`, and shipped encoding-aware file loading for the Translate module. Several regressions from the 0.1.917–0.1.920 window are now marked closed, but an open crash-on-load issue on v0.1.920-beta warrants attention.

---

## 2. Releases & Breaking Changes

| Version | Key Changes |
|---------|-------------|
| **v0.1.922-beta** | Inkling 2 Mini support; faster/lighter image generation on small GPUs; video restyling on Apple Silicon; MCP tool chats no longer reprocess full conversation on every message |
| **v0.1.921-beta** | Bug fixes; faster image generation; Inkling Mini integration; faster MCP chat handling |

**Migration Notes:**
- No API changes reported. Users on 0.1.920-beta encountering crashes should upgrade to 0.1.922-beta.
- Inkling 2 Mini is now the default for new installations targeting 16GB single-GPU setups.

**Reference:** [Release v0.1.922-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.922) · [v0.1.921-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.921)

---

## 3. New Model & Hardware Support

| Model / Hardware | Details |
|------------------|---------|
| **Inkling 2 Mini** | 26.4B MoE-style model; runs on 16GB RAM with standard quantization. Fine-tuning support confirmed per [#18691](https://github.com/unslothai/unsloth/issues/18691). |
| **DaisyRose-27B** | Feature request filed for agentic coding use cases; see [#18465](https://github.com/unslothai/unsloth/issues/18465). |
| **AMD Strix Halo (Ryzen AI Max+ 395)** | PR [#17538](https://github.com/unslothai/unsloth/pull/17538) adds runtime guidance steering users toward the faster GPU path over the NPU on Strix Halo devices. |
| **RDNA4 (RX 9060 XT / gfx1200)** | Experimental support in-progress; see stability section for known HIP kernel issues. |
| **Apple Silicon** | Video restyling pipeline now available on M-series Macs. |
| **Kokoro-82M TTS** | Audio preview samples feature requested for built-in voices; see [#18251](https://github.com/unslothai/unsloth/issues/18251). |

---

## 4. Performance & Optimization

**Landmark PRs merged / in-review today:**

- **GRPO `num_iterations > 1` optimization** — PR [#18675](https://github.com/unslothai/unsloth/pull/18675) (CLOSED) eliminates a redundant no-grad forward pass over the generation batch. Previously, `pi_old` was scored in a separate pass, then re-scored on the first micro-batch loss pass; the two forwards were not bit-equal due to PrefixGrouper/sequence packing differences. This is a direct training throughput win for iterative GRPO users.

- **Token budget split optimization** — PR [#18720](https://github.com/unslothai/unsloth/pull/18720) (OPEN) preserves packed-length tuples on the host side when splitting micro-batches under `UNSLOTH_TOKEN_BUDGET`, avoiding device-side `.tolist()` calls and redundant tensor copies.

- **Fused CE for unmerged `lm_head` LoRA** — PR [#18719](https://github.com/unslothai/unsloth/pull/18719) (OPEN) ensures gradient flow through an unmerged adapter on `lm_head` by passing the base weight and bias correctly to the fused cross-entropy kernel during SFT.

- **Ebook loader fixes** — PRs [#18716](https://github.com/unslothai/unsloth/pull/18716) and [#18715](https://github.com/unslothai/unsloth/pull/18715) prevent page-break artifacts and soft-hyphen fragmentation from corrupting training tokens in EPUB-sourced data.

- **Translate encoding detection** — PR [#18701](https://github.com/unslothai/unsloth/pull/18701) replaces hardcoded UTF-8 with a server-side encoding detector, fixing garbled text from Windows ANSI, Shift-JIS, and UTF-16 files.

**Active optimization work:**

- **Tensor-parallel checkpoint validation** — PR [#18718](https://github.com/unslothai/unsloth/pull/18718) guards against silent adapter corruption when resuming a TP/PP checkpoint under a mismatched `UNSLOTH_MOE_LORA_B_LAYOUT`.

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | v0.1.920-beta crashes on model load | [OPEN #18563](https://github.com/unslothai/unsloth/issues/18563) | — |
| **High** | QLoRA on RDNA4 (RX 9060 XT) aborts with `HIP error: illegal memory access` in three fused kernels | [OPEN #18403](https://github.com/unslothai/unsloth/issues/18403) | — |
| **Medium** | Inkling 2 Mini fails to load on 32 GB DDR5 laptops despite CPU+GPU offload | [CLOSED #18690](https://github.com/unslothai/unsloth/issues/18690) | Fixed in v0.1.922-beta |
| **Medium** | 0.1.917 forced `mmap` despite `--load-mode none`, causing RAM/SSD thrashing | [CLOSED #17605](https://github.com/unslothai/unsloth/issues/17605) | Resolved |
| **Medium** | Incorrect unified-memory loading on Ryzen 8700G / Radeon 780M | [CLOSED #18001](https://github.com/unslothai/unsloth/issues/18001) | Resolved |
| **Medium** | Dual RX 6700 XT ROCm crash | [OPEN #18622](https://github.com/unslothai/unsloth/issues/18622) | — |
| **Low** | macOS "script contains malware" false positive during update | [OPEN #18699](https://github.com/unslothai/unsloth/issues/18699) | — |
| **Low** | Managed accounts cannot load models from subfolder repos | [OPEN #18647](https://github.com/unslothai/unsloth/issues/18647) | — |

**Notable closed issues:**
- Studio prompt reprocessing bug with Qwen hybrid model + MCP tools ([#17015](https://github.com/unslothai/unsloth/issues/17015)) — resolved, directly improving MCP chat responsiveness.

---

## 6. What This Means for Application Developers

1. **If you're running iterative GRPO fine-tuning**, upgrade or cherry-pick PR [#18675](https://github.com/unslothai/unsloth/pull/18675). The redundant forward pass removal is a direct wall-clock time reduction for multi-iteration runs.

2. **On AMD RDNA4 hardware (RX 9060 XT)**, avoid QLoRA training until [#18403](https://github.com/unslothai/unsloth/issues/18403) is resolved — fused kernel crashes are non-recoverable. Standard PyTorch/PEFT SDPA is a workaround at lower throughput.

3. **For multi-account Studio deployments**, subfolder repo loading is broken for managed accounts ([#18647](https://github.com/unslothai/unsloth/issues/18647)). As a temporary measure, flatten model directories or use the owner account for those loads.

4. **If you handle non-English or legacy-encoded text**, the Translate module now correctly auto-detects encoding ([#18701](https://github.com/unslothai/unsloth/pull/18701)). Re-test any import pipelines that previously required manual UTF-8 normalization.

5. **For agentic/MCP workloads**, the MCP chat reprocessing fix from [#17015](https://github.com/unslothai/unsloth/issues/17015) (now in stable) significantly reduces per-turn latency on Qwen hybrid models with large tool catalogs.

6. **Upcoming:** Automatic `max_seq_length` detection for fine-tuning ([#18236](https://github.com/unslothai/unsloth/issues/18236)) will eliminate a manual token-count step — monitor that PR.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*