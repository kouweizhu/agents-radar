# AI 基础设施日报 2026-11-06

> 生成时间: 2026-11-06 02:46 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate it accurately while maintaining the Markdown structure, tables, and technical terminology. The translation should be natural for Chinese developers, not a literal word-for-word rendering.

Let me translate this carefully, maintaining all formatting and structure.
</think>


# AI 基础设施生态文摘 — 2026-11-06

## 1. 生态概览

当前 AI 推理基础设施层呈现三条清晰且正在融合的演进路线：**服务引擎**（vLLM、SGLang）在生产级 LLM  workloads 上争夺每美元吞吐量，**本地运行时**（llama.cpp、Ollama、Unsloth）面向边缘场景和开发者体验，**网关/代理**（LiteLLM）抽象多供应商异构性。今日动态折射出一个快速成熟的领域——量化已在各引擎间成为标配功能，而差异化前沿已转向**多后端硬件支持**（AMD ROCm、Intel XPU、Ascend NPU、Apple MLX、Blackwell SM120）、**分离式 prefill/decode 服务**以及**原生结构化输出强制执行**。训练到推理的 gap 也在收窄，Unsloth 和 vLLM 均在发布热权重重载能力，支持 RL 训练循环。

---

## 2. 活跃度对比

| 项目 | Issues（开放中） | PRs（活跃中） | Releases（24h） | CI/基础设施健康度 |
|---------|--------------|--------------|----------------|------------------------ |
| **vLLM** | ~114 | ~500 | 无 | Rust 前端（#44280）54 条评论；mypy CI 29 条评论 |
| **SGLang** | ~27 | ~50 | 无 | 活跃：CI 维护模式（#21065）重新开启；Flaky CI 追踪（#42752）177 条评论 |
| **llama.cpp** | ~20 | ~10 | **10 次提交**（b12130–b12142）| 健康；高频小版本发布节奏 |
| **Ollama** | ~34 | ~5 | 无 | 稳定；置顶 issue 为 Intel Arc GPU 支持（96 👍） |
| **LiteLLM** | ~30 | ~10 | **v1.108.1**（cosign 签名）| 健康；S3 bucket 白名单强制执行 |
| **Unsloth** | ~27 | ~10 | 无 | 回归问题活跃：长对话 UI 卡顿（#16603）、下载恢复（#16810）|

**结论：** llama.cpp 以高频小版本发布节奏领先提交量；vLLM 以 PR 量和架构范围领先；SGLang 在交付新后端的同时处理 CI 技术债。

---

## 3. 模型支持竞赛

### 按模型家族

| 模型家族 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1** | ✅ 活跃开发（块大小修复、排列索引、流水线分区）| ✅ Prefill 性能追踪（#33422）| — | — | 通过 OpenRouter/Azure | — |
| **Qwen3.8 / Qwen3-Next** | ✅ ROCm 优化（#57149），Flash-Next（#59575）| ✅ DFlash MoE 草稿（#48763），GLM-5 decode（#46486）| ✅ xing4_0 模型（#31589）| ✅ MLX NVFP4 精调（#18078）| ✅ 通过 OpenRouter | — |
| **GLM-5.3 / GLM-5** | ✅ ROCm 性能（#64874）| ✅ Ascend 全量支持（#43305），decode MLA 链（#46486）| — | — | 通过 Bedrock | — |
| **Kimi-K3** | — | ✅ Ascend CP 全序列（#46285）| — | — | — | ✅（diffusion pipeline）|
| **Muse-Spark-Open-DFlash2** | — | ✅ Blackwell TP4 DFlash MoE（#48763，#48785）| — | — | — | — |
| **Gemma 4** | ✅ int8_per_token_head KV 损坏（#50702）| ✅ EAGLE/MTP KV 池（#29857）| ✅ MTP CUDA IMA（#31077）| ✅ Gemma4 字符串参数 bug（#19549）| ✅ 通过 Vertex/Azure | ✅ |
| **Lumina-Image-2.0** | — | — | — | — | — | ✅ int8 激活驻留（#16808）|
| **Hindsight 决策模型** | — | — | — | ✅ 新格式支持（#19555）| — | — |
| **xing4_0** | — | — | ✅ 全架构 + 转换（#31589）| — | — | — |

### 哪家领先

- **架构覆盖最广：** vLLM（MoE、Blackwell、ROCm 最深入）
- **新模型响应最快：** llama.cpp（小版本发布节奏、GGUF 管线）
- **多后端覆盖最佳：** SGLang（CUDA、ROCm、Ascend NPU、Apple MLX、Intel XPU 同步推进）
- **开发者体验最佳：** Ollama（一键安装、MLX 原生支持）
- **企业供应商抽象最佳：** LiteLLM（40+ 供应商、提示缓存亲和性）

---

## 4. 性能前沿

优化工作集中在五个不同方向：

### KV Cache 与内存管理

| 项目 | 重点 | 详情 |
|---------|-------|--------|
| **vLLM** | 前缀缓存（Mamba 混合 bug），KV offload 重入队卡顿消除 | 混合 Mamba 前缀缓存跌至 0%（#45238）；V1 调度器在异步拉取完成时卡顿 1.0–1.8s（#62532）|
| **SGLang** | EAGLE/MTP KV 池 VRAM 空闲（Qwen3.6-27B NVFP4 上约 50 GB 未使用）（#29857）；DFlash 滑动窗口 KV | 将全滑动窗口 DFLASH 草稿 KV 保留在目标 SWA 槽位 |
| **llama.cpp** | MoE 缓存 LRFU 混合（decode 提升 6–7%，专家上传减少 8%）（#31233）；移除 llama-mmap MAP_POPULATE | 启动延迟改善；更智能的专家逐出策略 |
| **Unsloth** | Lumina-Image-2.0 int8 激活驻留；MiniMax-H3 内存页 compaction 与主机预留对比 | 防止 L4 16 GB 上 OOM-killer |

### 量化与 Kernel

| 项目 | 重点 | 详情 |
|---------|-------|--------|
| **vLLM** | MXFP4 MoE oracle（#37753）；8×B200 上 NVFP4 prefill 差距（#44806）；FlashInfer GDN prefill 缓存 | Qwen3.5/3.8/3-Next：每层从 4–5 个 kernel 减少到 1 个 |
| **llama.cpp** | Blackwell W4A8 MXFP4（#31747）；IQ4_NL Vulkan MMQ scalar（#31764）| sm_100 上首个 W4A8，通过 mxf8f6f4 MMA 指令 |
| **SGLang** | 按字节数路由 DSA prefill（#48505）；LiteTopK prefill 索引器（#47469）| 在 MI355X 上将 DCP prefill 路由到更便宜的自有 vs. 聚合路径 |
| **Unsloth** | sm_100 上 NVFP4 diffusion 配 W4A16 自动步保护（#16759）| 首尾步骤使用 FlashInfer 反量化到 bf16 |

### 批处理与调度

| 项目 | 重点 | 详情 |
|---------|-------|--------|
| **vLLM** | 陈旧权重上 Level-2 sleep 请求（#65326）；EngineCore 对 abort 请求的断言（#43226）| 调度器在 sleep/wake 和异步 KV 场景下的正确性 |
| **SGLang** | sgl-router PD 开路断路器分发到 decode（#31206）| 客户端超时后永久假死 prefill |
| **LiteLLM** | /v1/responses 的提示缓存亲和性（现已与 chat/messages 行为一致）；调用方超时边界重试 | 缓存命中率提升；无限等待消除 |

### 分布式服务

| 项目 | 重点 | 详情 |
|---------|-------|--------|
| **vLLM** | MooncakeConnector P/D 分离（#60523）；CUDA copy engine 上 PP 传输（#65896）；DeepSeek-V4.1 流水线分区（#63106）| RDMA/TCP/Ascend 可插拔传输；Blackwell 零 SM copy |
| **SGLang** | MooncakeConnector RDMA 内存区域注册（#48206）；A2A 前 MLA up-projection（#64994）| all-to-all 从每头 514 减少到 130 个 bf16 值 |
| **llama.cpp** | 分离式 prefill/decode 路线图开启（#21266）| 早期规划阶段 |

### 后端特定 Kernel

| 项目 | 后端 | 重点 |
|---------|--------|-------|
| **SGLang** | AMD ROCm | 融合 prefill QK-norm + RoPE（5 个 kernel → 1 个 JIT kernel）（#47052）|
| **llama.cpp** | Metal | bf16×bf16 矩阵乘，32 ≤ K < 64（#30982）|
| **llama.cpp** | Vulkan | 3 个 Adreno 修复：rms_norm 循环次数（#30824）、子组运算（#30826）、8 位打包/解包（#30821）|
| **SGLang** | Qualcomm DSA | LiteTopK prefill 索引器（#47469）|

---

## 5. 分层定位

```
┌─────────────────────────────────────────────────────────────────┐
│  GATEWAY / PROXY                                                │
│  LiteLLM ── 多供应商抽象、成本管理、流式正确性、提示缓存          │
│  定位：HTTP 垫片层，自身不承载推理引擎                            │
├─────────────────────────────────────────────────────────────────┤
│  SERVING ENGINES（生产级）                                       │
│  vLLM ───── PagedAttention、MoE、分离式 P/D、Blackwell、ROCm    │
│  SGLang ─── Radix 调度、DFlash、多后端（NPU/MLX）支持            │
│  定位：完整推理循环、调度器、CUDA/ROCm kernel                    │
├─────────────────────────────────────────────────────────────────┤
│  LOCAL RUNTIMES（开发者 / 边缘场景）                             │
│  llama.cpp ── CPU/GPU/Metal/Vulkan/WebGPU、GGUF、量化            │
│  Ollama ─── 单二进制 UX、MLX 原生、多模态                        │
│  Unsloth ─── 微调 + 推理、多后端、diffusion                     │
│  定位：本地运行、硬件覆盖广、自托管                                │
└─────────────────────────────────────────────────────────────────┘
```

| 层级 | 项目 | 差异化特征 |
|-------|----------|-----------------|
| **Gateway** | LiteLLM | 供应商多样性、成本标记、流式正确性、提示缓存亲和性 |
| **服务引擎** | vLLM、SGLang | PagedAttention/radix 调度、MoE kernel、分离式服务、Blackwell/ROCm |
| **本地运行时** | llama.cpp | 覆盖最广（7 个后端）、GGUF 标准、小版本发布节奏 |
| **本地运行时** | Ollama | 体验最佳、单二进制、MLX 一等公民 |
| **训练 + 推理** | Unsloth | 微调与推理统一、diffusion pipeline、多后端 |

**主要交叉区域：**
- Ollama 将 llama.cpp 作为计算层，但叠加了 UX、模型管理和 API 体验
- vLLM 和 SGLang 在同一部署目标（Blackwell、ROCm、MoE）上正面竞争
- Unsloth 是本批次中唯一同时覆盖训练和推理的项目
- LiteLLM 的流式正确性 bug（SSE keepalive 吞噬失败、reasoning 内容丢失、usage 顺序错乱）提醒我们：网关层承载着超出简单 HTTP 转发的语义职责

---

## 6. 趋势信号

### 给基础设施工程师

1. **Rust 前端迁移已在两大服务引擎中启动。** vLLM（#44280，54 条评论）和 SGLang（#32321，17 条评论）都在将关键路径迁移到 Rust。依赖 Python 可脚本化服务端行为的团队应规划好未来的 API 层变更。

2. **Blackwell（SM120）已是第一类目标，但仍有 gap。** vLLM 在 SM120 上存在 DSv4.1 块大小回归（#59203），SGLang 存在 prefill 性能差距（#33422），llama.cpp 刚发布 W4A8 MXFP4（#31747）。Blackwell 软件栈仍在成熟期。

3. **分离式 prefill/decode 正在走向生产。** vLLM（MooncakeConnector #60523、PP 传输 #65896）和 llama.cpp（路线图 #21266）都在大力投入 P/D 分离架构。这是下一代推理集群的架构方向；评估多区域或多设备服务的团队应密切关注这些进展。

4. **AMD ROCm 不再是二等公民。** vLLM 的 MI355X/gfx950 工作（#57149）、SGLang 的融合 prefill QK-norm+RoPE（#47052）以及 llama.cpp 持续的 Vulkan/Adreno 修复表明 AMD ROCm 已具备关键体量。持有 AMD GPU 集群的组织应认真评估 ROCm 的对等性。

5. **多后端服务已是基本要求。** SGLang 现在并行追踪 CUDA、ROCm、Ascend NPU、Apple MLX 和 Intel XPU。vLLM 在 NPU/MLX 上落后但在 Blackwell 上领先。各供应商"独立后端"的年代正在结束。

### 给应用 / Agent 开发者

1. **流式正确性在网关层仍不可靠。** LiteLLM 至少有三条活跃的流式正确性 bug（SSE keepalive 吞掉失败 #49711、reasoning 内容丢失 #48238、usage 块顺序 #50156）。基于流式构建的应用应实现客户端验证，避免将业务逻辑耦合到流中期的假设。

2. **结构化输出正从强制 JSON 工具走向原生支持。** vLLM（guided decoding）、SGLang（grammar sampling）和 LiteLLM（Bedrock 原生 #50221）都在推进一等 JSON schema 强制执行。这能将 agentic 流水线的延迟降低 20–40% 并提升可靠性。

3. **投机解码活跃但脆弱。** SGLang 存在草稿接受率衰减 bug（#37326），llama.cpp 存在量化目标分歧 bug（#25618），vLLM 的 EAGLE/MTP KV 池在 Qwen3.6-27B 上浪费约 50 GB。使用投机解码的应用应在自身特定 workload 上基准测试接受率，并准备好 fallback 路径。

4. **RL 训练热权重重载接近生产就绪。** vLLM 的直接权重重载（#54477、#64352、#66002）现已覆盖 17 个模型家族并拒绝已知静默路径。这使得 RLHF 循环无需完整引擎重启——这对构建自定义微调流水线的团队是重要的能力。

5. **Ollama 中多模态 + 并行请求组合仍是问题。**（#4165）。修复前，任何同时使用视觉模型和并发请求的流水线都会静默丢失图片。这是 agentic 工作流中的常见模式；通过将多模态请求串行化来规避。

### 给技术决策者

1. **vLLM 和 SGLang 能力集正在收敛。** 两者都在发布 MoE kernel、Blackwell 支持、分离式服务和 Rust 前端。差异化在于执行质量（性能、稳定性）和后端多样性。对于新部署，应根据具体硬件和模型组合对两者进行评估。

2. **llama.cpp 仍是本地、可移植推理的标准。** 其 7 后端策略（CUDA、HIP、Metal、Vulkan、WebGPU、CPU、WASM）和 GGUF 格式赋予它本批次最广的覆盖范围。如果产品需要在异构客户端硬件上运行，llama.cpp（通过 Ollama 或直接使用）是最稳妥的选择。

3. **LiteLLM 代理层增加价值但携带语义风险。** 跨供应商的流式正确性 bug 和 S3 bucket 白名单强制执行（#47496）表明：LiteLLM 作为抽象层，其引入的行为变更可能不易察觉。升级 LiteLLM 版本时应预留额外的 QA 时间。

4. **Unsloth 的微调 + 推理统一是独特的。** 本批次中没有任何其他项目同时覆盖训练和推理。对于构建自定义模型的组织，Unsloth 集成的流水线减少了训练和部署阶段之间的交接摩擦。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to follow the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate this carefully, maintaining the structure and using natural Chinese technical register.

Let me go through section by section:

# vLLM Project Digest — 2026-11-06
→
# vLLM 项目日报 — 2026-11-06

## 1. Today's Highlights
→
## 1. 今日要点

The vLLM project is seeing intense activity around DeepSeek-V4.1 and Qwen3.8 model support, with multiple critical bug fixes landing across quantization, MoE kernels, and KV cache management. The Rust frontend roadmap (#44280, 54 comments) continues to gain traction, while the direct weight reload infrastructure (#54477, #64352, #66002) is maturing toward becoming the default loading path. AMD ROCm optimizations for Qwen3.8 variants on MI355X/gfx950 are progressing across a dedicated tracking issue (#57149).
→
vLLM 项目近期围绕 DeepSeek-V4.1 和 Qwen3.8 模型支持展开了密集的工作，量化、MoE 内核和 KV 缓存管理方面均有多个关键 bug 修复合入。Rust 前端路线图（#44280，54 条评论）持续推进，直接权重热重载基础设施（#54477、#64352、#66002）正趋于成熟，即将作为默认加载路径。AMD ROCm 上 Qwen3.8 变体在 MI355X/gfx950 上的优化也在专用追踪 issue（#57149）中稳步推进。

---

## 2. Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| **No new releases** | No tagged releases in the last 24 hours. The project remains on v0.32.x nightly builds. | — |

**Migration Notes:**
- **DeepSeek-V4.1 block size regression (Fixed):** Issue #59203 (CLOSED) tracked a critical regression where block sizes 64 and 128 failed on SM120 Blackwell hardware. A fix is being tracked in #60762; operators running DSv4.1 on RTX PRO 6000 Blackwell Server Edition should monitor that PR.
- **Level-2 sleep request handling (PR #65326):** Fixes a correctness bug where requests queued during level-2 sleep would execute on stale (discarded) weights upon wake-up before `reload_weights` completes. Any deployment using sleep/wake cycles should prioritize this fix.

---

## 3. New Model & Hardware Support

| Model / Hardware | Status | Details | Link |
|-----------------|--------|---------|------|
| **DeepSeek-V4.1** | Active development | Arbitrary pipeline stage partitions landing via PR #63106; permutation index bug fixed in PR #66010 | [#63106](https://github.com/vllm-project/vllm/pull/63106), [#66010](https://github.com/vllm-project/vllm/pull/66010) |
| **Qwen4Exp / Qwen3.8-Flash-Next** | Bug under investigation | Single prefill >262K tokens triggers CUDA illegal memory access on v0.32.0 (works on v0.31.1) | [#62383](https://github.com/vllm-project/vllm/issues/62383) |
| **Qwen3.8-2.4T (AMD gfx950 / MI355X)** | Performance optimization | ROCm optimization plan active; MXFP4 MoE support in progress | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **NVIDIA Nemotron 3.5 ASR Streaming** | Feature request open | 600M-param multilingual streaming ASR; requests native vLLM integration | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **MiniMax M3** | CP indexer landed | PR #61929 adds M3 indexer context parallelism for prefill/decode on NVLink TP2/TP4 | [#61929](https://github.com/vllm-project/vllm/pull/61929) |
| **XPU / Intel GPU** | Active CI/infra work | PR #64818 switches XPU distributed backend from xccl to xccl2 | [#64818](https://github.com/vllm-project/vllm/pull/64818) |
| **SM120 (Blackwell)** | Partial support | `enable_adaptive_verification` is gated to SM90/SM100 only; SM120 support gap tracked in #63343 | [#63343](https://github.com/vllm-project/vllm/issues/63343) |

**Architecture & Quantization:**
- `AutoWeightsLoader` composite model loading is being expanded (#15697) to cover all model families, improving multi-modal backbone reuse.
- MXFP4 quantization for Qwen3.8 on AMD is actively optimized.
- NVFP4 and MXFP8 MoE kernel paths are stable; MXFP4 MoE oracle is in progress (#37753).

---

## 4. Performance & Optimization

### Landed / Merging

| Optimization | Scope | Impact | Link |
|-------------|-------|--------|------|
| **FlashInfer GDN prefill state caching** | Qwen3.5/3.8, Qwen3-Next | Eliminates 4–5 gather/mask/cast/scatter kernels per layer when prefill rows are fresh or fully cached | [#64498](https://github.com/vllm-project/vllm/pull/64498) |
| **Tokenizer pool shallow copy** | Tokenizer initialization | Copies only the Rust `_tokenizer` backend instead of full `deepcopy`, reducing pool initialization overhead | [#65674](https://github.com/vllm-project/vllm/pull/65674) |
| **Attention scratch reservation across slots** | HiSparse / workspace management | Prevents locked-workspace growth when a microbatch slot was not exercised during warmup | [#61584](https://github.com/vllm-project/vllm/pull/61584) |
| **MoE expert padding reset on direct reload** | Weight reload path | Ensures post-load processing reruns over same bytes as cold start, eliminating silent errors | [#64352](https://github.com/vllm-project/vllm/pull/64352) |
| **TRT-LLM MoE DP padding rows removal** | Blackwell block-FP8 / MXFP8 | Removes redundant padding routing overhead under data parallelism | [#65972](https://github.com/vllm-project/vllm/pull/65972) |
| **DCP MLA up-projection before A2A** | Kimi-K3 DCP | Reduces all-to-all payload from 514 to 130 bf16 values per head (K=512, 128 groups) | [#64994](https://github.com/vllm-project/vllm/pull/64994) |

### In Progress

| Optimization | Hardware | Details | Link |
|-------------|----------|---------|------|
| **Weight loading on GB10 (DGX Spark)** | NVIDIA GB10 / SM121 | Per-tensor H2D copies from safetensors mmap views are slow; related work to #49991 (ROCm) and #50794 (Ascend) | [#58726](https://github.com/vllm-project/vllm/issues/58726) |
| **Qwen3.5 397B NVFP4 prefill gap** | 8× B200 | 6× performance gap between mixed prefill-decode and decode-only steps; nsys profile collected | [#44806](https://github.com/vllm-project/vllm/issues/44806) |
| **MiniMax-M2.7 TP4+EP throughput regression** | Multi-node | Regression across v0.29–v0.32 on expert-parallel workloads | [#63705](https://github.com/vllm-project/vllm/issues/63705) |
| **PP transport on CUDA copy engines** | NVLink-only | Zero-SM copy to remove pipeline parallelism contention; opt-in for Blackwell | [#65896](https://github.com/vllm-project/vllm/pull/65896) |

### RFC & Design

| RFC | Topic | Link |
|-----|-------|------|
| **BYOG (Bring Your Own GPU)** | Reproducible evals/benchmarks for PRs, addressing reviewer evidence bottlenecks | [#61698](https://github.com/vllm-project/vllm/issues/61698) |
| **Direct Weight Reload for RL Training** | Enables weight hot-reload without full restart; now validates 17 flagship families | [#54477](https://github.com/vllm-project/vllm/issues/54477) |
| **V1 Scheduler KV Offload re-queueing stall** | 1.0–1.8s stall elimination for completed async KV pulls via front-of-queue re-admission | [#62532](https://github.com/vllm-project/vllm/issues/62532) |
| **MooncakeConnector improvements** | P/D disaggregation KV direct-transfer; pluggable transports (RDMA/TCP/Ascend) | [#60523](https://github.com/vllm-project/vllm/issues/60523) |
| **Q4 2026 Roadmap** | Full SIG breakdown for Q4 2026 | [#61024](https://github.com/vllm-project/vllm/issues/61024) |

---

## 5. Stability & Regressions

### Critical (Correctness / Crash)

| Bug | Severity | Description | Fix PR | Link |
|-----|----------|-------------|--------|------|
| **DSv4.1 block size failure** | 🔴 Critical | Block sizes 64/128 crash on SM120 Blackwell RTX PRO 6000; fixed in #60762 | #60762 | [#59203](https://github.com/vllm-project/vllm/issues/59203) |
| **Qwen4Exp >262K prefill crash** | 🔴 Critical | Single prefill crossing native boundary causes CUDA illegal memory access in v0.32.0 (OK on v0.31.1) | — | [#62383](https://github.com/vllm-project/vllm/issues/62383) |
| **DeepSeek-V4.1 permutation indices in weights pool** | 🔴 Critical | Level-2 sleep discards weights pool; permutation indices become zero, making every row a copy of row 0 | #66010 | [#66010](https://github.com/vllm-project/vllm/pull/66010) |
| **Level-2 sleep request on stale weights** | 🔴 Critical | `wake_up()` resumes scheduling before `reload_weights`; request runs on discarded weights | #65326 | [#65326](https://github.com/vllm-project/vllm/pull/65326) |
| **FlashInfer JIT crash without nvcc** | 🟠 High | Engine startup crashes when nvcc is not discoverable; no fallback to native sampler | — | [#49497](https://github.com/vllm-project/vllm/issues/49497) |
| **EngineCore assertion on aborted request** | 🟠 High | `req_id in self.requests` assertion fails when async KV connector reports finished transfer for freed request | — | [#43226](https://github.com/vllm-project/vllm/issues/43226) |

### High (Performance / Corruption)

| Bug | Severity | Description | Link |
|-----|----------|-------------|------|
| **Mamba hybrid prefix caching → 0%** | 🟠 High | `mamba_cache_mode="align"` retains only the last block boundary checkpoint; prefix cache drops to 0% | [#45238](https://github.com/vllm-project/vllm/issues/45238) |
| **int8_per_token_head KV corruption at 100% pool** | 🟠 High | KV pool pinned at 100% causes output corruption on Gemma-4 hybrid (Triton backend) | — | [#50702](https://github.com/vllm-project/vllm/issues/50702) |
| **Qwen3.5-9B + dynamic LoRA NaN output** | 🟠 High | Long sequences produce NaN ("!" tokens); attributed to Punica Triton kernel bug | — | [#52568](https://github.com/vllm-project/vllm/issues/52568) |
| **Whisper timestamps drift >30s audio** | 🟡 Medium | Segment-level timestamps offset by ~0.5s per segment for long audio | — | [#32588](https://github.com/vllm-project/vllm/issues/32588) |
| **ROCm AITER FA skips 1-token prompts** | 🟡 Medium | Flash attention variable-length function skips prompts with `seqlen_q <= 1`; fix in #65722 | #65722 | [#65722](https://github.com/vllm-project/vllm/pull/65722) |
| **NixlConnector KV blocks released while READ in flight** | 🟡 Medium | Decode silently consumes overwritten KV when blocks are released during remote READ | — | [#61229](https://github.com/vllm-project/vllm/issues/61229) |
| **KDA chunked-scan OOM** | 🟡 Medium | Gated-delta-rule buffers scale with `--max-num-batched-tokens` but are outside memory profiling | — | [#54775](https://github.com/vllm-project/vllm/issues/54775) |

### Medium (ROCm / AMD-Specific)

| Bug | Hardware | Description | Link |
|-----|----------|-------------|------|
| **GLM-5.3-Flash "Workspace is locked"** | ROCm / gfx950 | AssertionError in `rocm_fp8_paged_mqa_logits` under high decode concurrency | — | [#64874](https://github.com/vllm-project/vllm/issues/64874) |
| **RoPE + KV-cache fusion unreachable on ROCm** | ROCm / AITER | Fusion cannot be enabled; silently reset due to graph split | — | [#57900](https://github.com/vllm-project/vllm/pull/57900) |
| **RTLD_GLOBAL libtorch_cpu.so conflict** | ROCm | HSA profiling tools conflict with RTLD_GLOBAL promotion; fix in #64752 | #64752 | [#64752](https://github.com/vllm-project/vllm/pull/64752) |

---

## 6. What This Means for Application Developers

### Immediate Action Items

1. **Deployments on RTX PRO 6000 Blackwell (SM120):** The DSv4.1 block size regression (#59203) is fixed via #60762. Monitor for the fix to land in the next nightly or patch release before running DSv4.1 on this hardware.

2. **Deployments using Qwen4Exp with long prompts:** If your prompts can exceed 262K tokens, hold at v0.31.1 until #62383 is resolved. This is a CUDA illegal memory access that will crash the engine.

3. **RL training / weight hot-reload use cases:** The direct weight reload infrastructure (#54477, #64352, #66002) is approaching production readiness. It now refuses known-silent paths that would previously produce wrong results. Review the opt-in model list in #66002 and plan migration from cold-start loading.

4. **Systems using level-2 sleep/wake cycles:** Prioritize updating to include PR #65326 once merged. Requests queued during sleep were silently producing incorrect outputs upon wake-up.

### Coming Changes to Plan For

- **Rust frontend (#44280):** The Rust-based API server process (`VLLM_USE_RUST_FRONTEND=1`) is moving toward feature parity. Expect eventual migration from the Python server; begin internal testing in non-production environments.

- **Composite model loading (#15697):** `AutoWeightsLoader` improvements will make it easier to run multi-modal models with custom backbone configurations. Test your custom model compositions when this lands.

- **Q4 2026 roadmap (#61024):** Review the SIG breakdowns for upcoming priorities in KV offloading, scheduler improvements, and ROCm support. This informs 6–12 month planning for infrastructure investments.

- **BYOG benchmarks (#61698):** Performance regression evidence will become standardized. Performance regression evidence will become standardized. Teams submitting PRs will be expected to provide reproducible eval data; plan to instrument your own benchmarking if you contribute upstream.

### Stable Paths for Production

The following configurations are actively maintained and well-tested:
- **CUDA / H100 / H200 / B200** with FlashAttention, block-FP8, and standard AWQ/GPTQ quantization
- **MoE inference** (DeepSeek-V2/V3, Qwen-MoE) with expert parallel and tensor parallel
- **Prefix caching** for standard attention models (non-hybrid Mamba)
- **Speculative decoding** with narrower draft vocabularies (fixed in #61152)

### Watch List

- **MiniMax-M2.7 TP4+EP regression (#63705):** Throughput degradation across v0.29–v0.32. If you run MiniMax models with expert parallelism, benchmark against v0.28 or earlier and file your data on the issue.
- **DCP / Kimi-K3 context parallelism (#64994):** Active optimization for MLA-based decode; all-to-all payload reduction is significant for large-batch, long-sequence inference.
- **MooncakeConnector (#60523):** If you run P/D disaggregation on non-CUDA platforms (e.g., Ascend NPUs), the pluggable transport work is the primary path for production readiness.</think>



</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all English text to Simplified Chinese
2. Preserve all Markdown structure exactly
3. Keep URLs, code spans, numbers, dates, issue/PR references verbatim
4. Keep technical terms, project names, repository slugs in original form
5. Use natural technical Chinese register

Let me go through this carefully section by section.

**Title and date:**
"SGLang Daily Digest — 2026-11-06" → "SGLang 每日简报 — 2026-11-06"

**Section 1: Today's Highlights**
- CI infrastructure → CI 基础设施
- flaky-test tracker → 随机失败测试跟踪
- CI Maintenance Mode → CI 维护模式
- Apple Silicon → Apple Silicon
- roadmap PR → 路线图 PR
- No new releases → 无新版本

**Section 2: Releases & Breaking Changes**
- Breaking Changes → 破坏性变更
- Migration note → 迁移注意事项

**Section 3: New Model & Hardware Support**
Table content needs careful translation. Let me translate the technical terms naturally.

- Backend → 后端
- Full support → 完整支持
- Feature request → 功能请求
- good first issue → 适合新手的 issue
- Roadmap → 路线图

**Section 4: Performance & Optimization**
- Kernel & JIT work → 内核与 JIT 优化
- recently merged → 近期已合并
- under review → 审核中
- Reported performance gaps → 报告的性能问题
- investigation ongoing → 调查中

**Section 5: Stability & Regressions**
- Severity → 严重程度
- Flaky CI → CI 不稳定
- circuit breaker → 断路器
- KV-cache → KV 缓存


- Inactive / resolved → 已不活跃 / 已解决

**Section 6: What This Means for Application Developers**
- production readiness → 生产就绪
- first-class priority → 首要优先级
- downstream extensions → 下游扩展
- memory headroom → 内存余量

Let me translate the full document now, maintaining natural Chinese technical register.
</think>


## SGLang 每日简报 — 2026-11-06

---

### 1. 今日要点

CI 基础设施持续承压：专用于随机失败测试的跟踪 issue（#42752）已累计 **177 条评论**，CI 维护模式 issue（#21065）昨日重新激活，表明团队正在积极管理基础设施健康状况。功能层面，Apple Silicon 服务架构重构正在推进（路线图 PR #36164），且一个大规模内部重构——将 `utils/common.py` 拆分为按主题划分的模块——以 PR #48781 合并上线，牵涉近所有子系统。过去 24 小时内未发布新版本。

---

### 2. 版本发布与破坏性变更

| 项目 | 详情 | 链接 |
|------|------|------|
| **无新版本** | 过去 24 小时内无标签版本发布。 | — |

> **迁移注意事项：** PR #48781（"将 `utils/common.py` 拆分为按主题划分的模块"）是一项大型内部重构。任何直接导入 `sglang.srt.utils.common` 的下游代码，都需要更新为新的子模块路径（`device`、`serialization`、`process`、`process_group`、`triton_utils`、`log_utils`）。拉取 main 分支前请先关注 CI 状态。

---

### 3. 新模型与硬件支持

| 模型 / 架构 | 后端 | 说明 | PR / Issue |
|-------------|------|------|------------|
| **GLM-5.3-Flash** | Ascend A3/A5（NPU） | 完整支持正在落地；华为工程师参与协作 | #43305 |
| **Kimi-K3** | Ascend NPU | Prefill 上下文并行（完整序列 CP）在 Ascend 上已启用 | #46285 |
| **Muse-Spark-Open-DFlash2** | Blackwell / GB300 TP4 | DFlash MoE FFN draft 服务；滑动窗口 KV 优化 | #48763, #48785 |
| **Qwen3 VL** | bitsandbytes 量化 | 功能请求已开启；已标记为 `good first issue` | #2729 |
| **Apple Silicon（MLX）** | Metal（Apple GPU） | 路线图重构：Torch 侧 SRT 路径，导出 whole-model MLX 区域；实现 PR #36164 | #32321 |
| **Intel XPU** | iGPU + SSD 层 | RFC：Lookahead Expert Scheduling（LES）+ 单卡 MoE 通过 paged-experts 卸载 | #46520 |

---

### 4. 性能与优化

**内核与 JIT 优化（近期已合并或审核中）：**

| 优化方向 | 改动内容 | 平台 | 参考 |
|---------|---------|------|------|
| **Prefill QK-norm + RoPE 融合** | 将每层 5 次内核启动融合为一次 JIT 内核 | AMD ROCm（Qwen3） | #47052 |
| **DSA prefill 按 wire 字节数路由** | 将 DCP prefill 路由至成本更低的自有路径或聚集路径 | AMD MI355X（gfx950） | #48505 |
| **GLM-5 decode MLA 链** | 在 gfx950 上作为 Gluon 内核运行（每层减少 3 个内核） | AMD MI355X | #46486 |
| **HiCache TMA copy 内核** | 为统一布局添加 TMA copy | Blackwell | #48786 |
| **LiteTopK prefill indexer** | 为 SM100 上的 DSA（FP8）和 DeepSeek-V4.1（FP4）提供可选 top-k | NVIDIA SM100 | #47469 |
| **Host hugepage 预分配** | 为 host 内存池添加 hugepage 分配模式 | 全平台 | #27267 |
| **MiniMax-H3 参考帧 / 关键帧缓存** | 按图像缓存参考图和关键帧 | Diffusion pipeline | #48122 |
| **DFlash 滑动窗口 KV** | 将 all-swindow DFLASH draft KV 保存在 target 的 SWA 槽位上 | Blackwell GB300 TP4 | #48785 |

**报告的性能差距（开放中）：**

- **DeepSeek-V4 在 SM120 上**（4× RTX PRO 6000，TP=4）：Prefill 约 2–7K tok/s，而 vLLm/marlin 在相同硬件上报告约 12.5K——调查进行中（#33422）。
- **GLM-5.3-Flash 在 Hopper（SM90）上**：性能跟踪 issue 开放中（#45373），属于 Q4 内核路线图。

---

### 5. 稳定性与回归问题

按严重程度和活跃度排序：

| 严重程度 | Issue | 摘要 | 修复 PR？ |
|----------|-------|------|----------|
| 🔴 **高** | #42752 — CI 不稳定 / 基础设施故障 | 177 条评论的跟踪帖；`PR Test Base/Extra` 在 NVIDIA 硬件上不可靠。与 #17050 互补。 | 变通方案：`/sglang-pr-babysit` Claude workflow |
| 🔴 **高** | #31206 — sgl-router PD open 断路器将请求分发至 decode | disaggregation 模式下客户端超时后永久 fake-dead prefill | 暂无 |
| 🔴 **高** | #48749 — FP8 KV 缓存 scale 被忽略 | GLM-4.5、Llama 4、Qwen3-MoE、GPT-OSS、HunYuan、HY3、K-EXAONE、LFM2 的 attention 在构建时缺少 `quant_config` | 暂无 |
| 🟡 **中** | #48411 — Xeon SPR 在 KV 分配时 OOM | CI 中 `sglang-spr08/18/19` 收到 SIGKILL；socket0 KV 分配 | 暂无 |
| 🟡 **中** | #29857 — EAGLE/MTP + 混合 GDN 导致约 50 GB VRAM 闲置 | KV pool profiler 限制的容量远低于空闲 VRAM（Qwen3.6-27B NVFP4） | 暂无 |
| 🟡 **中** | #37326 — NEXTN/MTP draft 接受率随运行时间衰减至约 0 | Qwen3.8-Flash-Next 投机解码退化；重启后恢复 | 暂无 |
| 🟡 **中** | #48206 — Mooncake RDMA 内存区域注册失败 | 8×H20 runner PD 测试中 `Memory region not registered by any active device(s)'` | 暂无 |
| 🟡 **中** | #48557 — `/v1/responses` 流式返回 HTTP 200 + `failed`（超出上下文长度） | 与 `/v1/chat/completions` 行为不一致（后者返回 HTTP 400） | 暂无 |
| 🟢 **低** | #48635 — `QwenImagePipelineConfig` 缺少 `sample_sigmas` 属性 | 配置属性小缺口 | 暂无 |
| 🟢 **低** | #38029 — EAGLE DSA draft 后端在 FP8 MHA 前缀读取中缺少 KVIndexTranslator | 在 main（`55509b3f`）上仍存在 | 暂无 |

**已不活跃 / 已解决（供参考）：**

- #21065 — CI 维护模式重新开放；CI 健康状况正在被积极管理。
- #33185 — DeepSeek-V4 `reasoning_effort` 映射差一层（修复进行中）。
- #36906 — GLM-5.3-Flash 流水线并行 `KeyError: 'residual'`（已关闭，不活跃）。
- #38143 — MiniMax-M3 W4A16 在 Triton MiniMaxSparse 路径上全零输出（v0.5.18 中仍存在）。

---

### 6. 对应用开发者的启示

| 领域 | 建议 |
|------|------|
| **Apple Silicon 支持接近生产就绪。** 重构（#32321）将 SGLang 导向 Torch/MLX 互操作路径，并导出 whole-model MLX 区域。面向 M 系列 Mac 做推理的团队应密切关注 PR #36164。 |
| **Intel XPU 和 Ascend NPU 正在获得一等 MoE 待遇。** Intel XPU 的 paged-experts 扩展（#46520）以及 Ascend GLM-5.3（#43305）/ Kimi-K3（#46285）的工作表明，多后端 MoE 服务是首要优先级。 |
| **CI 不稳定性可能延迟合并。** 活跃的 CI 维护模式意味着 PR 审查周期比平时更长。上游贡献需预留额外时间。 |
| **关注 `utils/common.py` 重构（#48781），如果你的项目有下游扩展。** 从旧模块路径的导入将中断。这是一次性的迁移，但能改善模块化结构。 |
| **Blackwell 上的投机解码内存管理正在收紧。** DFlash 滑动窗口 KV 优化（#48785）显著降低了 GB300 TP4 上 draft pool 的规模；如果你运行投机解码，这将改善有效的内存余量。 |
| **量化用户（FP8/FP4）应关注 #48749。** FP8 KV 缓存 scale 因子被静默忽略，涉及多个主流架构；在修复前结果可能在数值上不正确。 |

---

*本简报基于 2026-11-06 github.com/sgl-project/sglang 活动数据生成。所有 issue/PR 链接均使用 `sgl-project/sglang` 仓库命名空间。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the entire llama.cpp daily digest from English into Simplified Chinese. I need to:

1. Translate all headings, paragraphs, and list items
2. Preserve the Markdown structure exactly
3. Keep all URLs, issue/PR references, file paths, technical terms as-is
4. Use natural technical Chinese suitable for a developer newsletter
5. Output ONLY the translation with no additional commentary

Let me go through the content section by section:

## Today's Highlights - 今日要闻

## Releases & Breaking Changes - 发布与破坏性变更

## New Model & Hardware Support - 新模型与硬件支持

## Performance & Optimization - 性能与优化

## Stability & Regressions - 稳定性与回归

### Critical - 严重

### High - 高

### Medium - 中

### Notable Active Discussions - 值得关注的活跃讨论

## What This Means for Application Developers - 对应用开发者的影响

Let me translate carefully, maintaining the technical register and natural Chinese phrasing.
</think>


# llama.cpp 每日简报 — 2026-11-06

## 今日要闻

llama.cpp 项目今日聚焦于后端改进，Vulkan 迎来了首个 IQ4_NL 标量 MMQ 实现，CUDA 则在 Blackwell 架构上新增了 W4A8 MXFP4 支持。服务器组件新增了兼容 OpenAI 的 `/v1/audio/speech` 端点，而 Metal 则优化了 bf16 矩阵乘法在内积维度较小场景下的性能曲线。

---

## 发布与破坏性变更

| Commit | 描述 | 链接 |
|--------|------|------|
| b12141 | **llama-server: 引用计数式检查点** — 以 `shared_ptr` 列表替代深拷贝式快照保存，降低插槽保存/恢复时的内存开销 | [#30137](https://github.com/ggml-org/llama.cpp/pull/30137) |
| b12142 | **Vulkan: FA 反量化 K+V f16 scratch 校验修复** — 修复了在特定量化配置下使用 Flash Attention 时触发的断言失败 | [#30487](https://github.com/ggml-org/llama.cpp/pull/30487) / [#30048](https://github.com/ggml-org/llama.cpp/issues/30048) |
| b12137 | **Server: 拒绝格式错误的 session 更新** — 防止非对象格式的实时 session 载荷导致的未捕获异常使服务器终止 | [#31714](https://github.com/ggml-org/llama.cpp/pull/31714) |
| b12132–b12130 | **路径规范化清理** — 在 common、server 和 RPC 模块中以 `generic_string()` 替代 `u8path()`，统一跨平台行为 | [#31681](https://github.com/ggml-org/llama.cpp/pull/31681), [#31682](https://github.com/ggml-org/llama.cpp/pull/31682), [#31684](https://github.com/ggml-org/llama.cpp/pull/31684) |

---

## 新模型与硬件支持

- **xing4_0 模型** — 完整架构支持上线（注册、张量加载、HF→GGUF 转换、mHC/MLA/MoE/MTP 推理图） | [#31589](https://github.com/ggml-org/llama.cpp/pull/31589)
- **Blackwell W4A8 MXFP4** — CUDA 路径使用 `mxf8f6f4` MMA 指令（`m16n8k32`），适配第四代 Blackwell 硬件 | [#31747](https://github.com/ggml-org/llama.cpp/pull/31747)
- **Vulkan IQ4_NL** — 针对不支持协作矩阵的 GPU 实现标量 MMQ（整数点积）矩阵乘法 | [#31764](https://github.com/ggml-org/llama.cpp/pull/31764)
- **YaRN `truncate=false`** — ggml 现支持 YaRN 频率插值中的非整数边界舍入 | [#30206](https://github.com/ggml-org/llama.cpp/pull/30206)
- **WebGPU MEAN 操作** — 为量化模型在 WebGPU 上运行提供 `ggml-opt` 正确性保障 | [#31591](https://github.com/ggml-org/llama.cpp/pull/31591)
- **WebGPU COUNT_EQUAL** — 支持 Token 计数无需回退到 CPU | [#31578](https://github.com/ggml-org/llama.cpp/pull/31578)

---

## 性能与优化

| 领域 | 变更 | 影响 | PR |
|------|------|------|-----|
| **llama-server** | 引用计数式检查点列表 | 降低插槽保存/恢复时的内存开销；适合长时间运行的多 session 部署 | [#30137](https://github.com/ggml-org/llama.cpp/pull/30137) |
| **Metal** | `bf16 × bf16` 矩阵乘法内核，支持 32 ≤ K < 64 | 填补 Apple Silicon 在中间隐藏维度上的性能曲线缺口 | [#30982](https://github.com/ggml-org/llama.cpp/pull/30982) |
| **MoE 缓存** | LRFU/MQ 类混合策略（`ClassLRU`） | QFN 上 decode 提升 +6%，GLM 上 +7%；专家上传减少 8% | [#31233](https://github.com/ggml-org/llama.cpp/pull/31233) |
| **CUDA Top-K** | 基数排序对并列选择实现确定性排序 | 多次运行间采样行为可复现 | [#31084](https://github.com/ggml-org/llama.cpp/pull/31084) |
| **Vulkan** | `rms_norm` 运行时循环计数（Qualcomm Adreno 修复） | 修复 Adreno GPU 上循环展开变体的编译错误 | [#30824](https://github.com/ggml-org/llama.cpp/pull/30824) |
| **Vulkan** | Qualcomm 驱动禁用子组算术 | 修复部分和归约计算错误 | [#30826](https://github.com/ggml-org/llama.cpp/pull/30826) |
| **Vulkan** | 8 位向量打包/解包变通方案（Qualcomm） | Adreno X1–X2 系列正确性修复 | [#30821](https://github.com/ggml-org/llama.cpp/pull/30821) |
| **llama-mmap** | Linux 上移除 `MAP_POPULATE` | 消除阻塞式内存预填充；大模型启动更快 | [#28055](https://github.com/ggml-org/llama.cpp/pull/28055) |

---

## 稳定性与回归

### 严重

- **ARM CPU F16 溢出** — 在不具备 SVE 的 ARM 架构上，F16 算术运算以 F16 精度累积，产生 `inf` 值。M4 Max 上可复现。严重程度：正确性；影响所有使用 F16 模型的非 SVE ARM 硬件 | [#31734](https://github.com/ggml-org/llama.cpp/issues/31734)

### 高

- **Intel Arc Pro B70 上 Vulkan KHR_coopmat 非确定性结果** — 协作矩阵路径对相同输入每次调用返回不同结果（BERT 风格决策模型，F16/Q8_0）。受影响平台：Mesa ANV 26.2.5 on BMG G31 | [#31560](https://github.com/ggml-org/llama.cpp/issues/31560)
- **FreeBSD Vulkan 编译错误** — `ggml-vulkan-comm.cpp:370` 在 FreeBSD 上编译失败（缺少头文件/宏定义） | [#31541](https://github.com/ggml-org/llama.cpp/issues/31541)

### 中

- **量化目标上投机解码输出分歧** — 当目标模型量化时（Q4_K_M），投机解码的贪婪输出与普通运行不同。bf16 目标模型上**无法**复现。持续调查中，38 条评论 | [#25618](https://github.com/ggml-org/llama.cpp/issues/25618)
- **MTP CUDA 非法内存访问** — 带 draft-mtp 的 Gemma 4 31B 在 KV 缓存回滚/检查点恢复后触发 `CUDA_ERROR_ILLEGAL_ADDRESS`。禁用 MTP 时不崩溃 | [#31077](https://github.com/ggml-org/llama.cpp/issues/31077)
- **Qwen 3.8 flash + MTP 启动断言** — AMD HIP（Radeon AI PRO R9700，ROCm 10.1）上在 `ubatch->embd_state` 处断言失败 | [#30698](https://github.com/ggml-org/llama.cpp/issues/30698)
- **Gemma 4 多模态 + MTP 中止** — 启动时使用 `--mmproj` 和 MTP（`-md`）在 `ubatch->embd_state` 处 `GGML_ASSERT` | [#30698](https://github.com/ggml-org/llama.cpp/issues/30698)

### 值得关注的活跃讨论

- **分离式 prefill/decode** — 路线图项目（35 条评论），计划将提示处理拆分为独立的 prefill 和 decode 设备，类似于生产级推理集群架构 | [#21266](https://github.com/ggml-org/llama.cpp/issues/21266)
- **mtmd 中的音频输出** — 规划已关闭；正在设计将音频生成集成到多模态流水线中 | [#21956](https://github.com/ggml-org/llama.cpp/issues/21956)
- **MoE 专家 H2D 停顿** — 卸载式 MoE 的 prefill 阶段因串行专家传输使 GPU 处于空闲状态；1× RTX 3060 12 GB 性能分析结果 | [#25859](https://github.com/ggml-org/llama.cpp/issues/25859)
- **Server 僵死** — 长时间运行的服务器在 decode 中途卡住；`/health` 保持响应但 `/slots` 挂起，需要 SIGKILL | [#27388](https://github.com/ggml-org/llama.cpp/issues/27388)

---

## 对应用开发者的影响

1. **使用插槽检查点的部署可立即受益。** 引用计数式检查点重构（b12141）降低了使用上下文保存/恢复的应用的内存压力——这是 Agent 工作流和多轮对话中的常见模式。

2. **Blackwell 用户现已可使用 W4A8 MXFP4。** 如果您有 NVIDIA B200 或更新硬件，新 CUDA W4A8 路径（#31747）应该能为第四代 Blackwell 张量核心上的 MXFP4 量化模型带来可观的吞吐量提升。

3. **建议 Qualcomm Adreno 用户更新。** 三项 Vulkan 正确性修复针对 Adreno 编译问题上线（#30824、#30826、#30821）。如果您在配备 Snapdragon X 系列的 Windows ARM 设备上运行 llama.cpp，应从当前 master 分支重新编译。

4. **兼容 OpenAI 的音频端点即将到来。** PR #31763 为 llama-server 添加了 `/v1/audio/speech` 端点。一旦 CI 中有小型的 TTS fixture，该功能即可使 llama.cpp 作为兼容 OpenAI 的音频端点直接使用。

5. **在 ARM 上使用自定义模型时注意 F16 溢出。** ARM CPU F16 累积 bug（#31734）影响在非 SVE ARM 硬件上输出 F16 激活的模型。如果您使用在 Apple M 系列 Mac 上运行量化模型并触发 F16 路径，值得关注此问题。

6. **MoE 模型运维者：可尝试新的 LRFU 缓存策略。** `ClassLRU` MoE 缓存（#31233）显示出可观的收益（+6–7%）且专家传输更少。如果尚未切换到默认 SLRU 策略，可考虑在 MoE 模型上使用 `--moe-auto` 测试。

---

*数据来源：github.com/ggml-org/llama.cpp — 2026-11-06*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate an English technical report/digest about Ollama GitHub data into Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly
3. Keep URLs, issue/PR references, version numbers, file paths as-is
4. Use natural technical Chinese register

Let me go through this systematically:

---

# Ollama Digest — 2026-11-06

→ # Ollama 每日简报 — 2026-11-06

## 1. Today's Highlights

→ ## 1. 今日要闻

The Ollama community merged two critical bug fixes... 

Let me translate carefully, maintaining the technical register and natural Chinese expression.

---

## 2. Releases & Breaking Changes

→ ## 2. 版本发布与破坏性变更

No new releases in the last 24 hours.
→ 过去 24 小时内无新版本发布。

| Change | Detail | PR/Issue |
|--------|--------|----------|
→ | 变更 | 详情 | PR / Issue |

OpenAI compat `/v1/models` → OpenAI 兼容 `/v1/models`
Responses API truncation → Responses API 截断处理
MLX runner stop sequences → MLX runner 停止序列
Bare `ollama` invocation → 直接执行 `ollama`

---

## 3. New Model & Hardware Support

→ ## 3. 新模型与硬件支持

| Model / Architecture | Change | Status |
→ | 模型 / 架构 | 变更 | 状态 |

Hardware notes: → 硬件说明

---

## 4. Performance & Optimization

→ ## 4. 性能与优化

---

## 5. Stability & Regressions

→ ## 5. 稳定性与回归问题

Critical → 🔴 严重
High → 🟠 高
Medium → 🟡 中等


Now I'll translate the specific issues mentioned. For the Ollama community's two critical bug fixes: the OpenAI compatibility layer now correctly returns an empty array instead of null for `/v1/models` when no models are installed, and the MLX runner now respects request stop sequences instead of ignoring them. On the hardware side, a new Vulkan crash affecting AMD Renoir integrated graphics has appeared, while Intel Arc GPU support remains the top community request with strong engagement.

The Responses API also now properly forwards the `truncation` option from OpenAI response requests through to the chat handler. MLX generation cache cleanup on shutdown is now handled correctly to prevent memory leaks on macOS, and syntax highlighting has been optimized to load on first code-block use rather than when Settings opens, removing a multi-second delay from profiling. A performance regression of 25–30% throughput degradation across all models versus v0.40.1 is being investigated. On the new model front, support for the Hindsight decision model has been added with a new `hindsight-decision-v1` format for the Qwen decision system.

For hardware, the Qwen3.5 0.8B model is missing a Q4_K_M quantization variant, while the Qwen3.8 Flash Next model uses NVFP4 quantization with QSA projections and non-expert MTP paths retained in BF16. Intel Arc GPU support remains the top-voted feature request with 96 votes, and Intel Arrow Lake's Vulkan backend generates garbage output on models of 3B parameters or larger.
</think>


# Ollama 每日简报 — 2026-11-06

## 1. 今日要闻

Ollama 社区在过去 24 小时内合并了两个关键修复：OpenAI 兼容层在无模型安装时，`/v1/models` 现在返回空数组而非 `null`（[#19539](https://github.com/ollama/ollama/pull/19539)）；MLX runner 现在能够正确尊重请求的停止序列，而非将其忽略（[#19552](https://github.com/ollama/ollama/pull/19552)）。硬件方面，AMD Renoir 集成显卡上出现了新的 Vulkan 崩溃问题（[#19558](https://github.com/ollama/ollama/issues/19558)），而呼声极高的 Intel Arc GPU 支持请求今日再度引发热议，获得 96 票支持。

---

## 2. 版本发布与破坏性变更

过去 24 小时内无新版本发布。

| 变更 | 详情 | PR / Issue |
|--------|--------|----------|
| OpenAI 兼容 `/v1/models` | 无模型安装时现在返回 `{"object":"list","data":[]}` 而非 `{"data":null}` | [#19539](https://github.com/ollama/ollama/pull/19539)（已合并） |
| Responses API 截断处理 | `truncation` 选项现在能够正确从 OpenAI responses 请求转发至 chat handler | [#19501](https://github.com/ollama/ollama/pull/19501)（已合并） |
| MLX runner 停止序列 | 解码循环现在会尊重 `Options.Stop`，在所有配置的停止序列中最早匹配处截断 | [#19552](https://github.com/ollama/ollama/pull/19552)（已合并） |
| 直接执行 `ollama` | 非交互式会话中现在打印帮助信息，而非尝试打开 TUI（之前可能导致挂起） | [#19557](https://github.com/ollama/ollama/pull/19557) |

---

## 3. 新模型与硬件支持

| 模型 / 架构 | 变更 | 状态 |
|----------------------|--------|--------|
| **Hindsight decision model**（`hs-decide-1-flash`）| 新增 `hindsight-decision-v1` Qwen decision 格式，用于 Hindsight 智能体记忆系统 | [#19555](https://github.com/ollama/ollama/pull/19555)（open） |
| **Qwen3.5 0.8B Q4_K_M** | 申请为 0.8B 变体添加缺失的 `q4_K_M` 量化版本（目前仅更大的 Qwen3.5 规格可用） | [#19436](https://github.com/ollama/ollama/issues/19436)（open） |
| **Qwen3.8 Flash Next（125B）** | NVFP4 量化方案优化落地：QSA 投影和非专家 MTP 路径保留为 BF16；其余可量化权重采用 MXFP8，以避免长序列生成时的质量下降 | [#18078](https://github.com/ollama/ollama/pull/18078)（open） |
| **KailA 架构** | 建议在 llama.cpp 兼容层中增加对 `kail` GGUF 架构的支持 | [#18922](https://github.com/ollama/ollama/issues/18922)（已关闭，暂无进展） |

**硬件说明：**

- Intel Arc GPU 支持仍是票数最高的功能请求（96 票 👍，76 条评论）—— 目前尚未解决。（[#1590](https://github.com/ollama/ollama/issues/1590)）
- Intel Arrow Lake（ARL）Vulkan 后端在 ≥3B 模型上产生乱码输出（[#13964](https://github.com/ollama/ollama/issues/13964)）—— 仍为 open 状态。

---

## 4. 性能与优化

| 领域 | 详情 | 链接 |
|------|--------|------|
| **MLX Qwen3.8 Flash Next** | 新的量化策略（QSA/MTP 采用 BF16，密集权重采用 MXFP8）取代了全覆盖 NVFP4；已发布 `125b-a6b-nvfp4` 和 `125b-mlx` 两个变体 | [#18078](https://github.com/ollama/ollama/pull/18078) |
| **MLX 生成缓存** | 关闭时现在正确处理生成前缀缓存的释放，避免 macOS 上的内存泄漏 | [#19550](https://github.com/ollama/ollama/pull/19550)（已合并） |
| **App 启动** | 语法高亮改为在首次遇到代码块时初始化，而非在打开设置时加载；消除 profiling 阶段数秒延迟 | [#19559](https://github.com/ollama/ollama/pull/19559)（open） |
| **性能回归** | 回归报告：相比 v0.40.1，所有模型的吞吐量下降 25–30% —— 调查进行中 | [#18968](https://github.com/ollama/ollama/issues/18968)（open） |

---

## 5. 稳定性与回归问题

**严重 — 崩溃 / 数据丢失：**

| 严重程度 | 问题 | 环境 | 链接 |
|----------|-------|-------------|------|
| 🔴 **严重** | Vulkan 后端：`llama-server` 在 AMD Renoir 集成显卡（Ryzen 7 4700U，Vega gfx90c）上加载模型时崩溃（`0xe06d7363`） | v0.40.14 及 v0.40.15-rc2，所有模型 | [#19558](https://github.com/ollama/ollama/issues/19558) |
| 🔴 **严重** | `OLLAMA_NUM_PARALLEL` + 多模态模型 → `failed processing images` / 生成冻结 | 任何多模态模型（llava、moondream 等） | [#4165](https://github.com/ollama/ollama/issues/4165) |
| 🔴 **严重** | Responses API 在 truncation 被禁用时仍静默截断超长输入 | v0.40.13–0.40.14，Bonsai 27B | [#19492](https://github.com/ollama/ollama/issues/19492)（已关闭，修复方案待确认） |

**高 — 正确性缺陷：**

| 严重程度 | 问题 | 链接 |
|----------|-------|------|
| 🟠 **高** | Qwen2.5-Coder 和 Qwen3 在 v0.40.13 上的原生工具调用失败 | [#19524](https://github.com/ollama/ollama/issues/19524) |
| 🟠 **高** | Gemma 4 字符串参数缺少左引号定界符时被静默丢弃（工具调用丢失） | [#19549](https://github.com/ollama/ollama/issues/19549) |
| 🟠 **高** | `qwen3.8:27b-mlx` 仅在 content 为空时输出 `tool_calls`（free-text 后接工具 = 无工具调用） | [#19353](https://github.com/ollama/ollama/issues/19353)（已关闭） |
| 🟠 **高** | `qwen2.5vl:3b` 视觉推理在视觉编码器运行于 NVIDIA GPU 时返回 HTTP 500 | [#19483](https://github.com/ollama/ollama/issues/19483)（已关闭） |

**中等 — 回归 / 体验问题：**

| 严重程度 | 问题 | 链接 |
|----------|-------|------|
| 🟡 **中等** | macOS App 在自更新时请求管理员权限以修改 `/Applications/Ollama.app` 所有权 | [#19472](https://github.com/ollama/ollama/issues/19472) |
| 🟡 **中等** | Windows 版 Ollama 在推理期间不阻止系统休眠 | [#4072](https://github.com/ollama/ollama/issues/4072) |
| 🟡 **中等** | 系统提示词在启用推理的长时间对话中逐渐"失效" | [#19356](https://github.com/ollama/ollama/issues/19356) |

---

## 6. 对应用开发者的影响

1. **OpenAI SDK 兼容性更紧密。** 如果你使用验证 `data` 字段为数组类型的 OpenAI 兼容客户端，在连接无模型的 Ollama 实例时应用将不再崩溃。请在包含 [#19539](https://github.com/ollama/ollama/pull/19539) 的版本发布后尽快升级。

2. **MLX runner 现在正确处理停止序列。** 如果你依赖提前停止机制（例如函数调用智能体、结构化输出管道），之前的 MLX 版本会忽略停止序列。请确保在包含已合并修复（[#19552](https://github.com/ollama/ollama/pull/19552)）的 ≥0.40.15 版本上使用。

3. **多模态 + 并行请求存在问题。** 使用 `llava`、`moondream` 或其他视觉模型时，请勿设置 `OLLAMA_NUM_PARALLEL > 1`（[#4165](https://github.com/ollama/ollama/issues/4165)）。这是一个正确性缺陷，会导致静默的图像处理失败。

4. **留意静默截断问题。** Responses API 在 `truncation` 被禁用时仍会静默截断超长输入。如果你使用 `/v1/responses` 端点，请验证应用的截断行为是否符合预期。

5. **Qwen3 模型的工具调用仍不稳定。** Qwen2.5-Coder/Qwen3 上的原生工具调用失败，以及 MLX 特定的"content 在前则无 tool_calls"问题表明，基于工具调用的智能体管道应包含 fallback/错误处理逻辑，以应对响应中缺少 `tool_calls` 的情况。

6. **AMD Renoir 集成显卡用户应暂时避免使用 v0.40.14 和 v0.40.15-rc2**，直至崩溃问题（[#19558](https://github.com/ollama/ollama/issues/19558)）修复。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. I need to follow the rules:
1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code, version tags, etc. verbatim
4. Use natural technical Chinese, not literal word-for-word
5. Don't translate project names, repository slugs, version numbers, etc.

Let me translate this carefully section by section.

Title: "LiteLLM Digest — 2026-11-06" → "LiteLLM 每日简报 — 2026-11-06"

Section 1: Today's Highlights
- Translate naturally while preserving meaning
- Keep technical terms like "cosign-based Docker image signing" but use Chinese context
- "supply-chain security" → 供应链安全
- "LLM translation layer" → LLM 翻译层
- "streaming correctness" → 流式传输正确性
- "SSE keepalive" → SSE keepalive (keep the term)
- "reasoning content propagation" → 推理内容传播
- "usage chunk ordering" → usage chunk 顺序
- "prompt caching affinity" → 提示缓存亲和性
- "caller timeouts" → 调用方超时
- "structured output" → 结构化输出
- "native structured output" → 原生结构化输出
- "20–40% cost reductions" → 节省 20–40% 成本

Section 2: Releases & Breaking Changes
- "Docker images now signed with cosign" → Docker 镜像现使用 cosign 签名
- "verify with" → 验证方式
- "S3 bucket allowlisting" → S3 存储桶白名单
- "Clients must now send a bucket the admin explicitly listed" → 客户端现在必须传递管理员已在白名单中列出的存储桶


- "Migration note" → 迁移注意事项
- "if you use Bedrock batch uploads via the Python SDK" → 如使用 Python SDK 进行 Bedrock 批量上传
- "affect" → 影响

Section 3: New Model & Hardware Support
- "native JSON schema output" → 原生 JSON Schema 输出
- "thinking modes" → 思考模式
- "Codex model catalog" → Codex 模型目录
- "per-release model catalog" → 按版本发布的模型目录
- "Model Hub pricing display" → Model Hub 价格展示
- "OpenRouter video fields" → OpenRouter 视频字段
- "first-class support" → 一级支持
- "first/last frames" → 首帧/尾帧
- "reference images" → 参考图像
- "aspect ratio" → 宽高比
- "ModelScope image generation" → ModelScope 图像生成
- "Async task polling" → 异步任务轮询
- "TTS streaming" → TTS 流式传输
- "streams audio chunks as they arrive" → 流式传输音频分块
- "time-to-first-audio" → 首发音频时间

Section 4: Performance & Optimization
- "prompt caching affinity" → 提示缓存亲和性
- "stay pinned to" → 保持在
- "cache misses" → 缓存未命中
- "Retry timeout bounding" → 重试超时限制
- "caller's timeout now bounds retries" → 调用方超时现在限制重试
- "backoff sleeps" → 退避等待
- "Retry-After headers" → Retry-After 响应头
- "OpenAI SDK timeout header" → OpenAI SDK 超时响应头
- "deadline" → 截止时间
- "indefinite waits" → 无限期等待
- "Prometheus overhead metric" → Prometheus 开销指标
- "per-chunk proxy work" → 每个分块的代理工作
- "stream handoff" → 流式传输交接
- "latency attribution" → 延迟归因
- "Terraform budget refresh" → Terraform 预算刷新
- "per-model tag budgets" → 按模型标签的预算
- "stale budget state" → 过时的预算状态
- "native output on supported Bedrock models" → 支持的 Bedrock 模型上的原生输出
- "forced-JSON tool fallback" → 强制 JSON 工具回退
- "cost and latency win" → 成本和延迟双赢
- "Async input callbacks" → 异步输入回调
- "properly awaited" → 正确等待
- "consistent callback behavior" → 一致的回调行为
- "Token counter" → Token 计数器
- "input_audio content blocks" → input_audio 内容块
- "trim_messages" → trim_messages 函数

Section 5: Stability & Regressions
- "Ranked by severity" → 按严重程度排序
- "⬆ = fix PR exists" → ⬆ = 修复 PR 已存在
- "SSE keepalive ping commits" → SSE keepalive ping 提交
- "later upstream failure can no longer be raised" → 后续上游故障无法再被抛出
- "potentially confusing clients" → 可能让客户端困惑
- "extra empty assistant choice" → 额外的空助手选择项
- "finish_reason: stop" → finish_reason: stop
- "real usage chunk" → 实际的 usage 分块
- "Stream cut" → 流截断
- "finish_reason" → finish_reason
- "include_usage" → include_usage
- "logged as success" → 记录为成功
- "locally counted usage" → 本地计算的 usage
- "cached_tokens lost" → cached_tokens 丢失
- "temperature still reported as supported" → 仍报告 temperature 受支持
- "rejects it" → 但实际被拒绝
- "JSON-defined openai-like providers" → JSON 定义的类 OpenAI 提供商
- "lose tools" → 丢失工具
- "not in catalog" → 不在目录中
- "regression" → 回归
- "drops reasoning_content" → 丢弃 reasoning_content
- "extra tool calls" → 额外工具调用
- "usage" → usage
- "MCP stateful session cap bucketed by API key" → MCP 有状态会话限制按 API key 分桶
- "shared keys collapse all users into one 100-session limit" → 共享 key 导致所有用户共享一个 100 会话限制
- "drops encrypted reasoning" → 丢弃加密推理
- "never replayed between tool calls" → 工具调用之间不再重放
- "upstream failures silently swallowed" → 上游故障被静默吞没
- "falling back to forced JSON tool" → 回退到强制 JSON 工具
- "fallback to forced JSON tool in some thinking modes" → 在某些思考模式下回退到强制 JSON 工具
- "Ignoring client-passed S3 bucket" → 忽略客户端传递的 S3 存储桶
- "env var ignored" → 环境变量被忽略
- "re-fetches deployment_url on every LLM call" → 每次 LLM 调用都重新获取 deployment_url
- "overhead" → 开销
- "re-parsing query strings" → 重新解析查询字符串
- "breaks S3/SigV4 presigned image URLs" → 破坏 S3/SigV4 预签名图片 URL
- "CLA link" → CLA 链接
- "Bad credentials" → 凭证错误

Section 6: What This Means for Application Developers
- "Immediate action items" → 立即行动项
- "Verify Docker image signatures" → 验证 Docker 镜像签名
- "if you pull berriai/litellm images" → 如果你拉取 berriai/litellm 镜像
- "Update your CI/CD to run cosign verify" → 更新 CI/CD 以运行 cosign verify
- "Check S3 bucket usage" → 检查 S3 存储桶使用情况
- "Bedrock batch uploads" → Bedrock 批量上传
- "Unlisted buckets will start failing" → 未列入白名单的存储桶将开始失败
- "affect" → 影响
- "Run grep to find affected call sites" → 运行 grep 查找受影响的调用点
- "Upgrade if you use OpenRouter streaming" → 如使用 OpenRouter 流式传输请升级
- "prompt caching" → 提示缓存
- "extra empty choice emission" → 额外的空选择项发射
- "cache affinity bugs" → 缓存亲和性 bug
- "downstream token-counting or cost-allocation errors" → 下游 token 计数或成本分配错误
- "If you run Claude Code or similar multi-turn agents behind LiteLLM" → 如在 LiteLLM 后运行 Claude Code 或类似的多轮智能体
- "tool-result propagation" → 工具结果传播
- "drops is_error flag" → 丢弃 is_error 标志
- "drops mid-conversation tool_addition blocks" → 丢弃对话中段的 tool_addition 块
- "loses tool reference results" → 丢失工具引用结果
- "tracked but unfixed" → 已跟踪但未修复
- "consider workarounds" → 考虑临时方案
- "If you use TTS" → 如使用 TTS
- "enable streaming" → 启用流式传输
- "reduce time-to-first-audio" → 减少首发音频时间
- "long clips" → 长音频片段
- "If you use Vertex Model Garden streaming" → 如使用 Vertex Model Garden 流式传输
- "reasoning content deltas" → 推理内容增量
- "silently dropped" → 被静默丢弃
- "use non-streaming for now" → 暂时使用非流式
- "track #48238" → 关注 #48238
- "If you use SAP GenAI Hub" → 如使用 SAP GenAI Hub
- "incurs overhead from two blocking HTTP GETs" → 产生两次阻塞 HTTP GET 的开销
- "no workaround available yet" → 暂无临时方案
- "If you use custom_ui_auth" → 如使用 custom_ui_auth
- "corporate SSO backends" → 企业 SSO 后端

Let me write this out carefully in natural technical Chinese.
</think>


# LiteLLM 每日简报 — 2026-11-06

## 1. 今日要闻

LiteLLM v1.108.1 随 cosign Docker 镜像签名功能发布，以提升供应链安全性。社区正在积极修复 LLM 翻译层的各类 bug——尤其是流式传输正确性方面（SSE keepalive 处理、推理内容传播、usage chunk 顺序）；同时新 PR 改进了 `/v1/responses` 的提示缓存亲和性、在重试边界强制执行调用方超时，并为更多 Bedrock 模型（Opus 5.5、Fable 5.1、Sonnet 5、Haiku 5.5）添加了原生结构化输出支持，预计可节省 20–40% 成本。

---

## 2. 版本更新与破坏性变更

| 版本 | 变更 | 说明 |
|---------|--------|-------|
| **v1.108.1** | Docker 镜像现使用 cosign 签名 | 密钥在 commit `e82a3c6` 中引入；验证方式：`cosign verify --key https://...`（见 commit `e82a3c646908ba0a6ee0beddc4310d7a6cac4065`） |
| **PR #47496** *（与 #47601 合并）* | S3 存储桶白名单 | 客户端现在必须传递管理员已在白名单中列出的存储桶；现有客户端传递任意 `s3_bucket_name` 将收到 4xx 响应 |

**迁移注意事项：** 如使用 Python SDK 进行 Bedrock 批量上传，请确保 `s3_bucket_name` 已列入代理配置的允许列表或通过环境变量传递——传递未列入白名单的存储桶现在将被拒绝。

---

## 3. 新模型与硬件支持

| 领域 | 详情 | PR / Issue |
|------|--------|------------|
| **Bedrock 结构化输出** | 在 Opus 5.5、Fable 5.1、Sonnet 5、Haiku 5.5 的所有思考模式下支持原生 JSON Schema 输出 | [#50221](https://github.com/BerriAI/litellm/pull/50221) |
| **Codex 模型目录** | 代理现在从 GitHub 拉取 Codex 按版本发布的模型目录，而非使用静态列表 | [#50318](https://github.com/BerriAI/litellm/pull/50318) |
| **Model Hub 价格展示** | 现在显示完整的按部署粒度的价格（cached tokens、long prompt、flex、priority、batch、大小区间） | [#50145](https://github.com/BerriAI/litellm/pull/50145) |
| **OpenRouter 视频字段** | `/v1/videos` 全面支持首帧/尾帧、参考图像、时长、宽高比、音频、随机种子 | [#50319](https://github.com/BerriAI/litellm/pull/50319) |
| **ModelScope 图像生成** | 图像生成/编辑的异步任务轮询现已修复（此前存在问题） | [#48558](https://github.com/BerriAI/litellm/pull/48558) |
| **TTS 流式传输** | `/v1/audio/speech` 现支持流式传输音频分块；来自 ElevenLabs 等提供商的长音频片段可提前约 0.65 秒开始播放 | [#46222](https://github.com/BerriAI/litellm/pull/46222) |

---

## 4. 性能与优化

| 类别 | 变更内容 | 影响 |
|----------|--------------|--------|
| **提示缓存亲和性** | `/v1/responses` 请求现保持绑定在持有缓存提示的部署上（与 chat/messages 行为一致） | 消除重复请求时的缓存未命中 |
| **重试超时限制** | 调用方超时现约束重试次数、退避等待时长和 `Retry-After` 头；OpenAI SDK 超时头作为截止时间被遵守 | 避免上游缓慢时无限期等待 |
| **Prometheus 开销指标** | 流式请求现正确记录每个分块的代理工作量至 `litellm_overhead_latency_metric`，而非在流交接时仅测量一次 | 延迟归因准确化 |
| **Terraform 预算刷新** | 按模型标签的预算现从代理端实时刷新 | 防止预算状态过期 |
| **Bedrock 结构化输出** | 支持的 Bedrock 模型上的原生输出比强制 JSON 工具回退节省 20–40% 成本，速度相当或更快 | 结构化输出的成本与延迟双赢 |
| **异步输入回调** | 异步输入回调现正确等待后再执行提供商调用（此前为空操作） | `acompletion`/`aembedding` 的回调行为一致性 |
| **Token 计数器** | `input_audio` 内容块现被正确计数而非抛出 500 错误 | `POST /utils/token_counter` 和 `trim_messages` 现支持音频消息 |

---

## 5. 稳定性与回归问题

*（按严重程度排序；⬆ = 存在修复 PR）*

| 严重程度 | Issue | 描述 | 状态 |
|----------|-------|-------------|--------|
| 🔴 高 | **#49711** | SSE keepalive ping 将响应提交为 200，后续上游故障无法再被抛出——只能写入 body，可能导致客户端困惑 | OPEN |
| 🔴 高 | **#50156** | OpenRouter 流式传输在 `finish_reason: "stop"` 后的真实 usage chunk 之前额外发出一个空助手选择项（v1.108.0） | OPEN |
| 🔴 高 | **#47332** | 在 `finish_reason` 之后、`include_usage` chunk 之前截断流会被记录为成功，本地计算的 usage 会丢失 cached_tokens | CLOSED |
| 🟠 中 | **#26444** | `temperature` 仍被报告为 Claude Opus 4.7 支持的参数，但 Anthropic 实际会拒绝 | CLOSED |
| 🟠 中 | **#48145** | JSON 定义的类 OpenAI 提供商在模型不在目录中时会丢失 tools（从 v1.81 → v1.106 的回归） | OPEN |
| 🟠 中 | **#48238** | Vertex Model Garden 流式传输会丢弃 `reasoning_content`、额外工具调用和 usage | OPEN |
| 🟠 中 | **#35383** | MCP 有状态会话限制按 API key 分桶——共享 key 导致所有用户共享一个 100 会话限制 | OPEN |
| 🟠 中 | **#49046** | `chatgpt/` 提供商在 `/v1/messages` 上丢弃加密推理；工具调用之间不再重放 | OPEN |
| 🟠 中 | **#49711** | `sse_keepalive_ping_interval_seconds` + Anthropic `/v1/messages`：首次 ping 后上游故障被静默吞没 | OPEN |
| 🟠 中 | **#50221** ⬆ | Bedrock 结构化输出在某些思考模式下回退到强制 JSON 工具（此 PR 已修复） | PR 已合并 |
| 🟠 中 | **#47601** ⬆ | Bedrock SDK 文件调用忽略客户端传递的 S3 存储桶（#47496 之后才安全） | PR 已合并 |
| 🟡 低 | **#50248** | `COHERE_API_BASE` 环境变量被忽略（rerank 端点正常） | OPEN |
| 🟡 低 | **#47096** | SAP GenAI Hub 每次 LLM 调用都重新获取 `deployment_url`（约 870 ms 开销） | OPEN |
| 🟡 低 | **#47837** | HTTPHandler 重新解析查询字符串导致 S3/SigV4 预签名图片 URL 失效（403） | OPEN |
| 🟡 低 | **#49585** | CONTRIBUTING.md 中的 CLA 链接返回"Bad credentials" | CLOSED |

---

## 6. 对应用开发者的影响

**立即行动项：**

1. **验证 Docker 镜像签名** — 如拉取 `berriai/litellm` 镜像，请在部署前更新 CI/CD 以运行 `cosign verify` 验证新密钥。

2. **检查 S3 存储桶使用情况** — 如使用 Python SDK 进行 Bedrock 批量上传，下次代理升级后未列入白名单的存储桶将开始报错。在集成测试中运行 `grep -r "s3_bucket_name\|s3_output_bucket_name" .` 以定位受影响的调用点。

3. **如使用 OpenRouter 流式传输或带提示缓存的 `/v1/responses`，请升级** — 额外的空选择项发射和缓存亲和性 bug 可能导致下游 token 计数或成本分配错误。

4. **如在 LiteLLM 后运行 Claude Code 或类似多轮智能体** — 多个 bug 影响工具结果传播（#49359 丢弃 `is_error` 标志、#47531 丢弃对话中段的 `tool_addition` 块、#36557 丢失工具引用结果）。这些 issue 已跟踪但尚未修复，考虑临时方案或关注相关 PR。

5. **如使用 TTS** — 在 `/v1/audio/speech` 上启用流式传输（`stream=True`），长音频片段可提前约 0.65 秒开始播放。

6. **如使用 Vertex Model Garden 流式推理模型** — 推理内容增量在 v1.108.x 中被静默丢弃；暂时使用非流式或关注 #48238。

7. **如使用 SAP GenAI Hub** — 每次 LLM 调用目前因两次阻塞 HTTP GET 产生约 870 ms 开销。已跟踪于 #47096，暂无临时方案。

8. **如使用 `custom_ui_auth`** — 此功能现已可用（#34076，刚合并）——适用于将 LiteLLM UI 与企业 SSO 后端集成的场景。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese. I need to translate it accurately while maintaining the structure, technical terminology, and natural Chinese technical register. Let me work through this systematically.

Key points to remember:
- Output ONLY the translation, no preamble
- Preserve all Markdown structure
- Keep technical terms, URLs, issue numbers, etc. as-is
- Use natural technical Chinese, not literal translation
- Maintain the professional tone of a Chinese developer newsletter

Let me translate section by section:

**Title:**
# Unsloth Digest — 2026-11-06
→ # Unsloth 速报 — 2026-11-06

**Section 1: Today's Highlights**
The Unsloth team continues shipping performance and stability fixes across Studio's diffusion pipeline and multi-backend inference stack. Three PRs landed that eliminate redundant host syncs and improve memory residency on constrained GPUs (#16763, #16808, #16849), while a batch of UI and UX regressions surfaced—including a notable long-chat lag regression affecting both web and desktop (#16603). The transformers 5.23 compatibility issue is flagged and tracked (#16667).

→ Unsloth 团队持续为 Studio 的 diffusion 流水线及多后端推理引擎推送性能与稳定性修复。三个 PR 已合并，消除了冗余的 host 同步并改善了受限 GPU 的显存驻留 (#16763, #16808, #16849)；同时一批 UI/UX 回归问题浮出水面——其中影响较大的是波及 web 和桌面版的长时间对话卡顿回归 (#16603)。transformers 5.23 兼容性问题已标记并进入跟踪 (#16667)。

**Section 2: Releases & Breaking Changes**
No releases in the last 24 hours.

| Item | Details | Link |
|------|---------|------|
| **transformers 5.23 compatibility** | Gradient checkpointing API renamed to activation checkpointing; old names deprecated. 

`Trainer` now reads only new names. Audited at `f5adb36642`. | [#16667](https://github.com/unslothai/unsloth/issues/16667) |
| **Homebrew cask unavailable** | `brew install --cask unsloth` fails — the cask was never published despite being mentioned in docs. | [#16672](https://github.com/unslothai/unsloth/issues/16672) (closed) |

→ 过去 24 小时内无版本发布。

| 项目 | 详情 | 链接 |
|------|---------|------|
| **transformers 5.23 兼容性** | Gradient checkpointing API 已重命名为 activation checkpointing；旧 API 名称已弃用。`Trainer` 现仅读取新 API 名称。已在 `f5adb36642` 处完成审查。 | [#16667](https://github.com/unslothai/unsloth/issues/16667) |
| **Homebrew cask 不可用** | `brew install --cask unsloth` 命令失败——尽管文档中有提及，但该 cask 实际上从未发布。 | [#16672](https://github.com/unslothai/unsloth/issues/16672)（已关闭） |

**Section 3: New Model & Hardware Support**

| Component | Change | Link |
|-----------|--------|------|
| **Lumina-Image-2.0** | Added to `_MEASURED_IMAGE_ACTIVATION_MIB`; int8 activations now stay resident on 16–24 GB cards (~3% per render overhead measured). | [#16808](https://github.com/unslothai/unsloth/pull/16808) |
| **sm_100-class cards (B200, GB200, B300)** | NVFP4 diffusion now uses W4A16 `auto` step-protection by default; first and last steps protected via FlashInfer dequant-to-bf16 path. | [#16759](https://github.com/unslothai/unsloth/pull/16759) |
| **Integrated GPUs (e.g., RTX Spark N1X)** | Memory-map oversized GGUF loads and read lookup tables from disk instead of allocating in VRAM. | [#16857](https://github.com/unslothai/unsloth/pull/16857) |
| **MLX backend (macOS)** | Fixed tool-call healing for GLM, MiniMax, Kimi, DeepSeek, Seed-OSS models on in-process route. | [#16824](https://github.com/unslothai/unsloth/pull/16824) |

→ **模型与硬件支持新增**

| 组件 | 变更 | 链接 |
|-----------|--------|------|
| **Lumina-Image-2.0** | 已加入 `_MEASURED_IMAGE_ACTIVATION_MIB`；int8 激活值现在可正常驻留在 16–24 GB 显存的显卡上（单次渲染约增加 3% 开销）。 | [#16808](https://github.com/unslothai/unsloth/pull/16808) |
| **sm_100 系列显卡 (B200, GB200, B300)** | NVFP4 diffusion 现在默认采用 W4A16 `auto` 步长保护；首尾步通过 FlashInfer 反量化至 bf16 路径进行保护。 | [#16759](https://github.com/unslothai/unsloth/pull/16759) |
| **集成显卡 (如 RTX Spark N1X)** | 超大 GGUF 文件通过内存映射加载，查找表直接从磁盘读取而非分配至 VRAM。 | [#16857](https://github.com/unslothai/unsloth/pull/16857) |
| **MLX 后端 (macOS)** | 修复了 in-process 路由下 GLM、MiniMax、Kimi、DeepSeek、Seed-OSS 模型的 tool-call 修复机制。 | [#16824](https://github.com/unslothai/unsloth/pull/16824) |

**Section 4: Performance & Optimization**

| Area | Change | Impact | Link |
|------|--------|--------|------|
| **Diffusion training host syncs** | Eliminated per-micro-step host synchronizations; one decode per cached image; streamed int8 base load. | Faster training loop, same losses & updates | [#16763](https://github.com/unslothai/unsloth/pull/16763) (closed) |
| **Lumina-Image-2.0 activation pricing** | Added measured activation table; eliminates flat 8 GiB overestimate. | L4 22.5 GB: was 43 MiB over budget → now fits resident | [#16808](https://github.com/unslothai/unsloth/pull/16808) |
| **MiniMax-H3 16 GiB L4** | Slab compaction now priced against host reserve; prevents OOM-killer kills. | Stable render on 24 GB L4 with 53 GiB host | [#16849](https://github.com/unslothai/unsloth/pull/16849) |
| **Video memory planner** | Count forward headroom before keeping whole-module offload; prevents bare OOM on first forward. | More accurate offload decisions | [#16805](https://github.com/unslothai/unsloth/pull/16805) |
| **RAG ingestion** | `_embed_all` processes one document at a time; `_EMBED_BATCH` only batches within a document. Small-file corpora run entirely on batch-of-1 path. | ~99 ms/chunk (batch-of-1) vs 2.07 ms/batch | [#16715](https://github.com/unslothai/unsloth/issues/16715) |
| **Pipeline parallel on CPU** | Chunked cross entropy now runs on last stage; prevents silent `[rows, vocab]` full materialization. | Correct cross-entropy under `UNSLOTH_PP_SIZE` | [#16846](https://github.com/unslothai/unsloth/pull/16846) |
| **CPU backend context parallelism** | Context parallel now explicitly engages or refuses instead of silently falling back to DDP. | No silent behavior change on CPU-only hosts | [#16802](https://github.com/unslothai/unsloth/pull/16802) (closed) |
| **Long-chat UI (Linux)** | Offscreen completed messages parked behind placeholders while retaining React state. | Reduces WebKitGTK style/layout stall | [#16854](https://github.com/unslothai/unsloth/pull/16854) |
| **Floating browser window** | Can now be dragged anywhere, floats per chat, resizes to full chat height. | More flexible in-chat browsing | [#16859](https://github.com/unslothai/unsloth/pull/16859) |

→ **性能与优化**

| 领域 | 变更 | 影响 | 链接 |
|------|--------|--------|------|
| **Diffusion training host 同步** | 消除每 micro-step 的 host 同步；每张缓存图片仅解码一次；int8 base 改为流式加载。 | 训练循环更快，loss 与更新结果不变 | [#16763](https://github.com/unslothai/unsloth/pull/16763)（已关闭） |
| **Lumina-Image-2.0 激活值定价** | 新增实测激活值表；消除一刀切的 8 GiB 高估。 | L4 22.5 GB：原超预算 43 MiB → 现可正常驻留 | [#16808](https://github.com/unslothai/unsloth/pull/16808) |
| **MiniMax-H3 16 GiB L4** | Slab 压缩现基于 host 预留空间定价；防止 OOM-killer 触发。 | 53 GiB host 环境下 24 GB L4 可稳定渲染 | [#16849](https://github.com/unslothai/unsloth/pull/16849) |
| **显存规划器** | 在决定保留整模块 offload 前先计算 forward 冗余空间；防止首次 forward 时直接 OOM。 | Offload 决策更精准 | [#16805](https://github.com/unslothai/unsloth/pull/16805) |
| **RAG 摄入** | `_embed_all` 逐文档处理；`_EMBED_BATCH` 仅在同一文档内做批。 小文件语料完全走 batch-of-1 路径。 | ~99 ms/chunk (batch-of-1) vs 2.07 ms/批 | [#16715](https://github.com/unslothai/unsloth/issues/16715) |
| **CPU 流水线并行** | 分块 cross entropy 现于末 stage 执行；避免 `[rows, vocab]` 全量物化。 | `UNSLOTH_PP_SIZE` 下 cross entropy 计算正确 | [#16846](https://github.com/unslothai/unsloth/pull/16846) |
| **CPU 后端 context 并行** | Context 并行现明确启用或拒绝，不再静默回退到 DDP。 | CPU only 环境下行为不再静默变化 | [#16802](https://github.com/unslothai/unsloth/pull/16802)（已关闭） |
| **长对话 UI (Linux)** | 离屏已完成消息以占位符形式保留，同时维持 React 状态。 | 减少 WebKitGTK 样式/布局阻塞 | [#16854](https://github.com/unslothai/unsloth/pull/16854) |
| **浮动浏览器窗口** | 现在可自由拖拽，按对话独立浮动，调整高度至满对话高度。 | 边聊边浏览更灵活 | [#16859](https://github.com/unslothai/unsloth/pull/16859) |

**Section 5: Stability & Regressions**

Ranked by user impact:

| Severity | Issue | Status | Notes | Link |
|----------|-------|--------|-------|------|
| 🔴 High | **Long conversations cause UI lag** (web + desktop) | Open | Regression introduced recently; affects both platforms | [#16603](https://github.com/unslothai/unsloth/issues/16603) |
| 🔴 High | **Image generation falls back to CPU** on Windows 11 RTX 3060 | Open | Text gen correctly uses GPU; image gen does not | [#16803](https://github.com/unslothai/unsloth/issues/16803) |
| 🔴 High | **Unsloth crash** on Windows 11 RTX 4060 Ti (v0.1.915-beta) | Open | Full crash, no details in summary | [#16816](https://github.com/unslothai/unsloth/issues/16816) |
| 🔴 High | **Download never resumes** (Windows, any version in last 2 months) | Open | Interruption leaves download in failed state | [#16810](https://github.com/unslothai/unsloth/issues/16810) |
| 🟡 Medium | **`search_conversation` tool disappeared** (3rd recurrence) | Open | Affects desktop + web | [#16706](https://github.com/unslothai/unsloth/issues/16706) |
| 🟡 Medium | **Glass theme background blur** applied incorrectly | Open | Entire background blurs instead of targeted panels | [#16820](https://github.com/unslothai/unsloth/issues/16820) |
| 🟡 Medium | **Background wallpaper hidden** in active chats | Open | CSS specificity conflict; fix included in PR | [#16736](https://github.com/unslothai/unsloth/issues/16736) |
| 🟡 Medium | **Fine-tuning jobs list drops cancelled queued job** when newer job starts | Closed | Race condition in job list state | [#16632](https://github.com/unslothai/unsloth/issues/16632) (closed) |
| 🟡 Medium | **Multi-LoRA pagination skips job** when batch starts out of order | Open | Affects pagination cursor stability | [#16720](https://github.com/unslothai/unsloth/issues/16720) |
| 🟡 Medium | **Multi-LoRA batch invalidates public cursor** during fine-tuning list request | Open | Concurrent batch start can shift pagination | [#16719](https://github.com/unslothai/unsloth/issues/16719) |
| 🟢 Low | **AppImage UI lag** (Slackware64 GLib/AppIndicator symbol error) | Closed | Platform-specific loader issue | [#16605](https://github.com/unslothai/unsloth/issues/16605) (closed) |
| 🟢 Low | **Homebrew install broken** | Closed | Documentation mismatch | [#16672](https://github.com/unslothai/unsloth/issues/16672) (closed) |

→ **稳定性与回归问题**

按用户影响排序：

| 严重程度 | 问题 | 状态 | 备注 | 链接 |
|----------|-------|--------|-------|------|
| 🔴 高 | **长对话导致 UI 卡顿**（web + 桌面） | Open | 近期引入的回归问题；影响两个平台 | [#16603](https://github.com/unslothai/unsloth/issues/16603) |
| 🔴 高 | **Windows 11 RTX 3060 上图像生成回退到 CPU** | Open | 文本生成正确使用 GPU；图像生成未使用 | [#16803](https://github.com/unslothai/unsloth/issues/16803) |
| 🔴 高 | **Unsloth 崩溃**（Windows 11 RTX 4060 Ti，v0.1.915-beta） | Open | 完全崩溃，摘要中无详情 | [#16816](https://github.com/unslothai/unsloth/issues/16816) |
| 🔴 高 | **下载无法续传**（Windows，任意近两个月版本） | Open | 中断后下载进入失败状态 | [#16810](https://github.com/unslothai/unsloth/issues/16810) |
| 🟡 中 | **`search_conversation` 工具消失**（第 3 次出现） | Open | 影响桌面版和 web 版 | [#16706](https://github.com/unslothai/unsloth/issues/16706) |
| 🟡 中 | **Glass 主题背景模糊效果应用错误** | Open | 整个背景模糊而非目标面板 | [#16820](https://github.com/unslothai/unsloth/issues/16820) |
| 🟡 中 | **活跃对话中背景壁纸被隐藏** | Open | CSS 选择器优先级冲突；PR 中已包含修复 | [#16736](https://github.com/unslothai/unsloth/issues/16736) |
| 🟡 中 | **Fine-tuning 任务列表在新任务启动时丢弃已取消的排队任务** | Closed | 任务列表状态竞争条件 | [#16632](https://github.com/unslothai/unsloth/issues/16632)（已关闭） |
| 🟡 中 | **Multi-LoRA 分页在乱序启动批任务时跳过任务** | Open | 影响分页游标稳定性 | [#16720](https://github.com/unslothai/unsloth/issues/16720) |
| 🟡 中 | **Multi-LoRA 批处理在 fine-tuning 列表请求期间使公开游标失效** | Open | 并发启动批处理可能导致分页偏移 | [#16719](https://github.com/unslothai/unsloth/issues/16719) |
| 🟢 低 | **AppImage UI 卡顿**（Slackware64 GLib/AppIndicator 符号错误） | Closed | 平台相关加载器问题 | [#16605](https://github.com/unslothai/unsloth/issues/16605)（已关闭） |
| 🟢 低 | **Homebrew 安装失败** | Closed | 文档与实际不一致 | [#16672](https://github.com/unslothai/unsloth/issues/16672)（已关闭） |

**Section 6: What This Means for Application Developers**

1. **Watch for UI responsiveness** in sessions with 100+ messages—the long-chat regression (#16603) is active and affects both web and desktop. Consider monitoring chat length or batching resets if you expose Unsloth via API.

2. **Windows GPU users** with NVIDIA cards may see image generation silently falling back to CPU (#16803). If your pipeline relies on image generation, test explicitly that the GPU path is engaged on first use.

3. **RAG ingestion is significantly slower** for small-file corpora (#16715). If you pre-index documents, batch them into fewer, larger files rather than many small ones to avoid the per-document batch-of-1 penalty (~50× slower than true batching).

4. **transformers 5.23 is breaking** if you pin to latest Hugging Face. Gradient checkpointing behavior changes at init; test your fine-tuning workloads after upgrading. The Unsloth Zoo compatibility audit is in progress (#16667).

5. **Multi-LoRA batch jobs** have two tracked pagination edge cases (#16719, #16720). If you poll the fine-tuning jobs list programmatically, be aware that concurrent batch starts can shift cursors or skip entries until fixed.

6. **The floating browser window** is now more flexible (#16859). If you build UI shells around Studio, the browser panel can now overlay the chat composer—useful for agentic workflows that interleave browsing and chat.

→ **对应用开发者的启示**

1. **关注 100+ 消息会话的 UI 响应**——长时间对话回归 (#16603) 当前处于活跃状态，影响 web 和桌面双端。若你通过 API 对外暴露 Unsloth，可考虑监控对话长度或在达到阈值时触发重置。

2. **Windows NVIDIA GPU 用户**可能发现图像生成静默回退到 CPU (#16803)。若你的 pipeline 依赖图像生成，请在首次使用时显式测试 GPU 路径是否启用。

3. **小文件语料的 RAG 摄入显著更慢** (#16715)。预索引文档时，应将大量小文件合并为少量大文件，以避免逐文档 batch-of-1 的性能惩罚（相比真正的批处理慢约 50 倍）。

4. **transformers 5.23 存在破坏性变更**。若你锁定在最新 Hugging Face 版本，梯度检查点在初始化时行为发生变化；升级后需测试你的 fine-tuning 工作流。Unsloth Zoo 兼容性审计正在进行中 (#16667)。

5. **Multi-LoRA 批处理任务存在两个已跟踪的分页边界问题** (#16719, #16720)。若你通过程序轮询 fine-tuning 任务列表，需注意在修复前并发启动批处理可能导致游标偏移或条目丢失。

6. **浮动浏览器窗口现已更加灵活** (#16859)。若你在 Studio 基础上构建 UI shell，浏览器面板现在可叠加在对话输入框上方——适用于边浏览边聊的 agentic 工作流。

This completes the full translation.
</think>


# Unsloth 速报 — 2026-11-06

## 1. 今日要点

Unsloth 团队持续为 Studio 的 diffusion 流水线及多后端推理引擎推送性能与稳定性修复。三个 PR 已合并，消除了冗余的 host 同步并改善了受限 GPU 的显存驻留 (#16763, #16808, #16849)；同时一批 UI/UX 回归问题浮出水面——其中影响较大的是波及 web 和桌面版的长时间对话卡顿回归 (#16603)。transformers 5.23 兼容性问题已标记并进入跟踪 (#16667)。

---

## 2. 版本发布与破坏性变更

过去 24 小时内无版本发布。

| 项目 | 详情 | 链接 |
|------|---------|------|
| **transformers 5.23 兼容性** | Gradient checkpointing API 已重命名为 activation checkpointing；旧 API 名称已弃用。`Trainer` 现仅读取新 API 名称。已在 `f5adb36642` 处完成审查。 | [#16667](https://github.com/unslothai/unsloth/issues/16667) |
| **Homebrew cask 不可用** | `brew install --cask unsloth` 命令失败——尽管文档中有提及，但该 cask 实际上从未发布。 | [#16672](https://github.com/unslothai/unsloth/issues/16672) (closed) |

---

## 3. 新模型与硬件支持

| 组件 | 变更 | 链接 |
|-----------|--------|------|
| **Lumina-Image-2.0** | 已加入 `_MEASURED_IMAGE_ACTIVATION_MIB`；int8 激活值现在可正常驻留在 16–24 GB 显存的显卡上（单次渲染约增加 3% 开销）。 | [#16808](https://github.com/unslothai/unsloth/pull/16808) |
| **sm_100 系列显卡 (B200, GB200, B300)** | NVFP4 diffusion 现在默认采用 W4A16 `auto` 步长保护；首尾步通过 FlashInfer 反量化至 bf16 路径进行保护。 | [#16759](https://github.com/unslothai/unsloth/pull/16759) |
| **集成显卡 (如 RTX Spark N1X)** | 超大 GGUF 文件通过内存映射加载，查找表直接从磁盘读取而非分配至 VRAM。 | [#16857](https://github.com/unslothai/unsloth/pull/16857) |
| **MLX 后端 (macOS)** | 修复了 in-process 路由下 GLM、MiniMax、Kimi、DeepSeek、Seed-OSS 模型的 tool-call 修复机制。 | [#16824](https://github.com/unslothai/unsloth/pull/16824) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | 链接 |
|------|--------|--------|------|
| **Diffusion training host 同步** | 消除每 micro-step 的 host 同步；每张缓存图片仅解码一次；int8 base 改为流式加载。 | 训练循环更快，loss 与更新结果不变 | [#16763](https://github.com/unslothai/unsloth/pull/16763) (closed) |
| **Lumina-Image-2.0 激活值定价** | 新增实测激活值表；消除一刀切的 8 GiB 高估。 | L4 22.5 GB：原超预算 43 MiB → 现可正常驻留 | [#16808](https://github.com/unslothai/unsloth/pull/16808) |
| **MiniMax-H3 16 GiB L4** | Slab 压缩现基于 host 预留空间定价；防止 OOM-killer 触发。 | 53 GiB host 环境下 24 GB L4 可稳定渲染 | [#16849](https://github.com/unslothai/unsloth/pull/16849) |
| **显存规划器** | 在决定保留整模块 offload 前先计算 forward 冗余空间；防止首次 forward 时直接 OOM。 | Offload 决策更精准 | [#16805](https://github.com/unslothai/unsloth/pull/16805) |
| **RAG 摄入** | `_embed_all` 逐文档处理；`_EMBED_BATCH` 仅在同一文档内做批。小文件语料完全走 batch-of-1 路径。 | ~99 ms/chunk (batch-of-1) vs 2.07 ms/批 | [#16715](https://github.com/unslothai/unsloth/issues/16715) |
| **CPU 流水线并行** | 分块 cross entropy 现于末 stage 执行；避免 `[rows, vocab]` 全量物化。 | `UNSLOTH_PP_SIZE` 下 cross entropy 计算正确 | [#16846](https://github.com/unslothai/unsloth/pull/16846) |
| **CPU 后端 context 并行** | Context 并行现明确启用或拒绝，不再静默回退到 DDP。 | CPU only 环境下行为不再静默变化 | [#16802](https://github.com/unslothai/unsloth/pull/16802) (closed) |
| **长对话 UI (Linux)** | 离屏已完成消息以占位符形式保留，同时维持 React 状态。 | 减少 WebKitGTK 样式/布局阻塞 | [#16854](https://github.com/unslothai/unsloth/pull/16854) |
| **浮动浏览器窗口** | 现在可自由拖拽，按对话独立浮动，调整高度至满对话高度。 | 边聊边浏览更灵活 | [#16859](https://github.com/unslothai/unsloth/pull/16859) |

---

## 5. 稳定性与回归问题

按用户影响排序：

| 严重程度 | 问题 | 状态 | 备注 | 链接 |
|----------|-------|--------|-------|------|
| 🔴 高 | **长对话导致 UI 卡顿**（web + 桌面） | Open | 近期引入的回归问题；影响两个平台 | [#16603](https://github.com/unslothai/unsloth/issues/16603) |
| 🔴 高 | **Windows 11 RTX 3060 上图像生成回退到 CPU** | Open | 文本生成正确使用 GPU；图像生成未使用 | [#16803](https://github.com/unslothai/unsloth/issues/16803) |
| 🔴 高 | **Unsloth 崩溃**（Windows 11 RTX 4060 Ti，v0.1.915-beta） | Open | 完全崩溃，摘要中无详情 | [#16816](https://github.com/unslothai/unsloth/issues/16816) |
| 🔴 高 | **下载无法续传**（Windows，任意近两个月版本） | Open | 中断后下载进入失败状态 | [#16810](https://github.com/unslothai/unsloth/issues/16810) |
| 🟡 中 | **`search_conversation` 工具消失**（第 3 次出现） | Open | 影响桌面版和 web 版 | [#16706](https://github.com/unslothai/unsloth/issues/16706) |
| 🟡 中 | **Glass 主题背景模糊效果应用错误** | Open | 整个背景模糊而非目标面板 | [#16820](https://github.com/unslothai/unsloth/issues/16820) |
| 🟡 中 | **活跃对话中背景壁纸被隐藏** | Open | CSS 选择器优先级冲突；PR 中已包含修复 | [#16736](https://github.com/unslothai/unsloth/issues/16736) |
| 🟡 中 | **Fine-tuning 任务列表在新任务启动时丢弃已取消的排队任务** | Closed | 任务列表状态竞争条件 | [#16632](https://github.com/unslothai/unsloth/issues/16632) (closed) |
| 🟡 中 | **Multi-LoRA 分页在乱序启动批任务时跳过任务** | Open | 影响分页游标稳定性 | [#16720](https://github.com/unslothai/unsloth/issues/16720) |
| 🟡 中 | **Multi-LoRA 批处理在 fine-tuning 列表请求期间使公开游标失效** | Open | 并发启动批处理可能导致分页偏移 | [#16719](https://github.com/unslothai/unsloth/issues/16719) |
| 🟢 低 | **AppImage UI 卡顿**（Slackware64 GLib/AppIndicator 符号错误） | Closed | 平台相关加载器问题 | [#16605](https://github.com/unslothai/unsloth/issues/16605) (closed) |
| 🟢 低 | **Homebrew 安装失败** | Closed | 文档与实际不一致 | [#16672](https://github.com/unslothai/unsloth/issues/16672) (closed) |

---

## 6. 对应用开发者的启示

1. **关注 100+ 消息会话的 UI 响应**——长时间对话回归 (#16603) 当前处于活跃状态，影响 web 和桌面双端。若你通过 API 对外暴露 Unsloth，可考虑监控对话长度或在达到阈值时触发重置。

2. **Windows NVIDIA GPU 用户**可能发现图像生成静默回退到 CPU (#16803)。若你的 pipeline 依赖图像生成，请在首次使用时显式测试 GPU 路径是否启用。

3. **小文件语料的 RAG 摄入显著更慢** (#16715)。预索引文档时，应将大量小文件合并为少量大文件，以避免逐文档 batch-of-1 的性能惩罚（相比真正的批处理慢约 50 倍）。

4. **transformers 5.23 存在破坏性变更**。若你锁定在最新 Hugging Face 版本，梯度检查点在初始化时行为发生变化；升级后需测试你的 fine-tuning 工作流。Unsloth Zoo 兼容性审计正在进行中 (#16667)。

5. **Multi-LoRA 批处理任务存在两个已跟踪的分页边界问题** (#16719, #16720)。若你通过程序轮询 fine-tuning 任务列表，需注意在修复前并发启动批处理可能导致游标偏移或条目丢失。

6. **浮动浏览器窗口现已更加灵活** (#16859)。若你在 Studio 基础上构建 UI shell，浏览器面板现在可叠加在对话输入框上方——适用于边浏览边聊的 agentic 工作流。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*