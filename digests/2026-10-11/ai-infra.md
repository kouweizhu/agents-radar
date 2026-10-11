# AI 基础设施日报 2026-10-11

> 生成时间: 2026-10-11 01:12 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the cross-project comparison report into Chinese. I need to translate the content while:
1. Keeping all Markdown structure exactly (headings, tables, lists, etc.)
2. Preserving all technical identifiers, URLs, code, numbers as-is
3. Using natural technical Chinese register
4. Translating the narrative portions

Let me go through and translate section by section while maintaining the structure.</think>

# 跨项目对比报告 — AI 基础设施生态

## 1. 生态概览

2026-10-11 的 AI 推理与服务生态呈现出清晰的垂直分层格局。**vLLM 和 SGLang** 在高性能生产服务层展开竞争，双方都在处理 Blackwell GPU 优化以及前缀缓存和 CUDA 图相关的正确性 bug。**llama.cpp** 持续拓展从本地推理到服务器部署的边界，新增模型支持并优化内存管理。**LiteLLM** 扮演网关/抽象层角色，在扩展 provider 覆盖范围的同时处理路由复杂性。**Unsloth** 占据训练/微调细分领域，解决 padding mask 正确性和 DoRA 适配器兼容性问题。**Ollama** 仍然专注于开发者体验和本地部署的 API 兼容性。

---

## 2. 活动对比

| 项目 | Issue（开放） | PR（合并/活跃） | Release（24h） |
|---------|---------------|---------------------|----------------|
| **vLLM** | 20+ 活跃中（前缀缓存、DeepSeek 回归、Blackwell） | 10+ 已合并/活跃 | 无 |
| **SGLang** | 8+（DSpark CUDA Graph、AMD、混合模型） | 7+（diffusion、PD、调度器） | 无 |
| **llama.cpp** | 8+（assert、回归、Vulkan） | 6+（MiniCPM、MoE 内核、内存） | 1 个服务器修复 |
| **LiteLLM** | 15+（路由、成本、SDK 限制） | 9+（MiniMax、Tencent、Decisions） | 无 |
| **Ollama** | 3 个开放（tool call、空参数、流式） | 3 个开放（API 兼容性） | 无 |
| **Unsloth** | 6+（回归、OOM、滚动） | 7+（padding、DoRA、Studio） | 无 |

**观察**：llama.cpp 是唯一有 Release 的项目（修复了服务器槽位处理问题）。vLLM 和 SGLang 的 PR 提交频率最高，反映出生生产服务开发的活跃度。LiteLLM 在 provider 扩展方面领先。Unsloth 的 PR 集中在正确性修复而非新功能。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|---------|---------|
| **DeepSeek V4.1** | — | ✓（MI355X 解码） | ✓（审核中） | — | — |
| **MiniCPM-V 4.7** | — | — | ✓（已合并） | — | — |
| **Gemma4（序列分类）** | ✓（请求中） | — | — | — | — |
| **Qwen3-TTS** | — | — | — | — | ✓（请求中） |
| **GLM5-next** | — | — | ✓（审核中） | — | — |
| **Microsoft Decision 1** | — | — | — | ✓（请求中） | — |
| **MiniMax Messages API** | — | — | — | ✓（Rust 实现） | — |
| **Tencent Messages API** | — | — | — | ✓（Rust 实现） | — |
| **GigaChat 3.5（432B MoE）** | — | — | ✓（审核中） | — | — |
| **Moore Threads MUSA** | — | ✓（路线图） | — | — | — |

**胜出**：**llama.cpp** 在新增模型数量上领先（5+ 个审核中/进行中），但 **LiteLLM** 在 provider/API 覆盖扩展方面领先，新增了两个 Rust 原生实现。

---

## 4. 性能前沿

| 优化领域 | vLLM | SGLang | llama.cpp | LiteLLM | Unsloth |
|-------------------|------|--------|-----------|---------|---------|
| **KV 缓存 / 前缀缓存** | 长度感知的块选择、损坏修复 | 调度器节流、HiCache | — | — | — |
| **批处理 / 调度** | — | PD 分解、预取准入 | — | 路由器异步修复 | — |
| **量化** | NVFP4、FP8 | W4A16（Qwen） | MXFP4（SYCL）、Q4/Q6（OpenCL） | — | — |
| **分布式服务** | — | DSpark 修复、TP/PP | 流水线并行（MoE） | — | — |
| **内核 / 后端** | FA4 稀疏 MLA（Blackwell） | — | OpenCL/SYCL MoE 内核 | — | 融合 LoRA（DoRA 跳过） |
| **内存** | — | — | `--reclaim-mmap-source`（RSS 降低 30-40%） | — | — |
| **训练 / 微调** | — | — | — | — | Padding mask、DoRA 正确性 |

**前沿领袖**：**vLLM** 在 Blackwell GPU 优化前沿占据领先地位，支持 Flash Attention 4 稀疏 MLA 解码。**llama.cpp** 在本地部署的内存优化方面领先。**SGLang** 在分解服务（PD）改进方面领先。

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────────────────┐
│  网关 / 抽象层                                                   │
│  ┌─────────────┐  ┌─────────────┐                               │
│  │  LiteLLM    │  │   Ollama    │  ← API 兼容性、                │
│  │  (路由、    │  │  (本地      │    多 LLM 抽象、               │
│  │  多提供商)  │  │  运行时)    │    简易部署                    │
│  └─────────────┘  └─────────────┘                               │
├─────────────────────────────────────────────────────────────────┤
│  生产服务层（Kubernetes、数据中心）                              │
│  ┌─────────────┐  ┌─────────────┐                               │
│  │   vLLM      │  │  SGLang     │  ← 高吞吐服务、               │
│  │ (PyTorch,   │  │ (PagedAttn, │    前缀缓存、                 │
│  │  PagedAttn) │  │  Radix)     │    投机解码                   │
│  └─────────────┘  └─────────────┘                               │
├─────────────────────────────────────────────────────────────────┤
│  本地 / 边缘运行时                                               │
│  ┌─────────────┐                                               │
│  │ llama.cpp   │  ← 跨平台 CPU/GPU、                           │
│  │ (gguf,      │    最小依赖、                                 │
│  │  server)   │    最广硬件支持                                │
│  └─────────────┘                                               │
├─────────────────────────────────────────────────────────────────┤
│  训练 / 微调层                                                   │
│  ┌─────────────┐                                               │
│  │  Unsloth    │  ← LoRA/DQRA 微调、                          │
│  │ (TRTL,      │    QLoRA 优化、                               │
│  │  4-bit)     │    Studio IDE                                 │
│  └─────────────┘                                               │
└─────────────────────────────────────────────────────────────────┘
```

**关键差异化**：

- **vLLM/SGLang**：在生产 LLM 服务领域直接竞争，功能高度重叠（前缀缓存、投机解码、PagedAttention 变体）。SGLang 以 PD 分解为差异化点；vLLM 以 Blackwell 领先地位为差异化点。
- **LiteLLM**：水平聚合器——不直接服务模型，但为所有后端提供统一 API 表层。
- **llama.cpp**：通过 `llama-server` 桥接本地和服务器场景，与 Ollama 在运行时层竞争但硬件支持更广。
- **Unsloth**：非重叠——唯一专注于训练/微调而非推理服务的项目。

---

## 6. 趋势信号

### 应用开发者应关注什么

| 趋势 | 证据 | 影响 |
|-------|----------|--------------|
| **Blackwell（SM100）采用加速** | vLLM FA4 稀疏 MLA、SGLang GB300 测试修复 | 新推理硬件进入生产；测试你的工作负载 |
| **前缀缓存正确性危机** | vLLM：DFlash2 损坏、SGLang：radix LRU 背离 | 多项目同时出现缓存正确性 bug——生产环境中验证缓存行为 |
| **AMD/ROCm 正在获得同等地位** | SGLang MI355X 解码、llama.cpp OpenCL MoE | AMD GPU 成为生产可行方案；减少对 NVIDIA 的依赖 |
| **MoE 模型推动专用内核** | llama.cpp MXFP4/OpenCL MoE、vLLM DeepSeek 支持 | 混合专家模型需要内核特定优化；通用路径性能不佳 |
| **LiteLLM SDK 约束摩擦** | openai<3.0.0 固定导致无法共存 | 网关层依赖管理脆弱；可能迫使 fork 或使用自定义版本 |
| **量化下的训练正确性** | Unsloth DoRA + 融合 LoRA 冲突 | 量化 + 适配器组合存在微妙交互 bug；充分测试 |
| **Diffusion torch.compile 成熟度** | SGLang 为 Qwen2.1、Cosmos3、Z 保留图 | torch.compile 在 diffusion 场景变得可行；性能差距缩小 |

### 基础设施决策

1. **Blackwell 新部署**：vLLM 的 Blackwell 支持最成熟。需要 PD 分解功能时测试 SGLang。

2. **AMD GPU 部署**：llama.cpp 和 SGLang 正在投资 ROCm 支持。vLLM 的 AMD 故事不那么突出。

3. **多提供商聚合**：LiteLLM 仍是标准，但注意依赖冲突。需要 OpenAI >=3.0.0 时考虑直接使用 provider SDK。

4. **本地/离线推理**：llama.cpp 提供最广硬件覆盖。Ollama 入门更容易但定制化空间较小。

5. **量化微调**：Unsloth 是明确选择，但验证 DoRA + 量化组合对你的特定模型是否有效。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English vLLM Daily Digest into Simplified Chinese, following specific rules. Let me carefully translate this while preserving the exact Markdown structure, technical terms, URLs, issue numbers, and maintaining the proper technical register.

Key things to preserve exactly:
- Markdown structure (headings, tables, lists)
- URLs and links
- Issue/PR references (#12345)
- Version numbers (v0.29.0, v0.30.0, v0.31)
- Hardware names (Blackwell, GB300, GB10, SM121, DGX Spark, RDNA4, gfx950, MI355X)
- Model names (Qwen3.8-27B, Nemotron-3.5-Lightning, DeepSeek-V4, Gemma4, MiniMax-M2)
- Technical terms (prefix caching, CUDA graphs, FA4, sparse MLA, etc.)
- Emoji (🔴)
- Column alignment in tables

Let me translate:</think>

# vLLM 每日简报 — 2026-10-11

## 1. 今日焦点

今日主要围绕 Blackwell GPU 优化和稳定性修复展开。关键 PR 已合入，实现了 Blackwell (SM100 系列) 上的 Flash Attention 4 稀疏 MLA decode 支持，并修复了 GB300 硬件上的内核测试问题。多个影响 DeepSeek 变体和前缀缓存的正确性 bug 已得到解决，同时 Blackwell 和 AMD RDNA4 GPU 上的性能回退问题仍在积极调查中。

## 2. 版本发布与破坏性变更

过去 24 小时内无版本发布。

## 3. 新模型与硬件支持

- **Blackwell GPU 支持 (SM100 系列)**：FA4 稀疏 MQA decode 现已通过 `FLASH_ATTN_MLA_SPARSE_FA4` 启用 — 适用于 Blackwell 的 CuTe DSL 内核，支持 BF16 KV 缓存。亦支持混合 HiSparse 批次 decode 行。 [#55866](https://github.com/vllm-project/vllm/pull/55866)

- **Gemma4 序列分类**：功能请求已开放，支持非词汇表大小的输出头。 [#43726](https://github.com/vllm-project/vllm/issues/43726)

## 4. 性能与优化

| 领域 | 变更 | PR/Issue |
|------|------|----------|
| **DSv4.1 Decode** | decode indexer 中引入长度感知的候选块选择 — 避免对完整 `[rows, max_model_len]` 宽度进行评分 | [#61039](https://github.com/vllm-project/vllm/pull/61039) |
| **GDN Mixed Steps** | 减少 eager prefill 路径中的 host op 调用 — 输出位一致，无内核/数值变更 | [#61034](https://github.com/vllm-project/vllm/pull/61034) |
| **Blackwell 内核测试** | 修复 SM10.3 (GB300) 上的四个测试侧 bug — 仅测试代码，无产品代码变更 | [#59910](https://github.com/vllm-project/vllm/pull/59910) |
| **模型检查点** | 通过现有 RAM 保护的 safetensors 路径自动预取 VirtioFS 检查点 | [#51339](https://github.com/vllm-project/vllm/pull/51339) |

### 活跃的性能调查

- **Nemotron-3.5-Lightning NVFP4**：自 v0.29.0 以来在 DGX Spark (GB10/SM121) 上 decode 性能下降约 16% — v0.30.0 和夜间构建均无法恢复。 [#59770](https://github.com/vllm-project/vllm/issues/59770)
- **AMD RDNA4 (gfx1201)**：错误选择了 `RowWiseTorchFP8ScaledMMLinearKernel`，导致 decode 减速 5-24%。 [#57838](https://github.com/vllm-project/vllm/issues/57838)
- **Qwen3.8-2.4T on MI355X (gfx950)**：AMD ROCm 性能优化追踪中 — 堆叠 PR 正在推进。 [#57149](https://github.com/vllm-project/vllm/issues/57149)

## 5. 稳定性与回退

### 严重（积极调查）

| 严重程度 | 问题 | 详情 |
|----------|------|------|
| 🔴 **高** | 前缀缓存损坏 | DFlash2/DSpark + 前缀缓存在 Qwen3.8-27B NVFP4 (compressed-tensors) 的缓存命中后产生损坏输出 — 影响 v0.30/0.31，v0.29 和 FP8 目标正常工作。 [#60174](https://github.com/vllm-project/vllm/issues/60174) |
| 🔴 **高** | DeepSeek-V4.1 NaN | CUDA graph 在 SM120/121 上产生 NaN — 虚拟捕获批次毒害了空 KV 块。 [#57156](https://github.com/vllm-project/vllm/issues/57156) |
| 🔴 **高** | 非确定性输出 | DeepSeek-V4-Flash 在 temperature=0 时产生非确定性输出，并发越高问题越明显。 [#53257](https://github.com/vllm-project/vllm/issues/53257) |

### 中等（修复 PR 推进中）

| 问题 | 修复 | PR |
|------|------|-----|
| Qwen3-VL 中 per-video 缓存选项复用 | 多模态 bugfix | [#55203](https://github.com/vllm-project/vllm/pull/55203) |
| tool call 后 prose 保留 | 解析器修复 | [#55199](https://github.com/vllm-project/vllm/pull/55199) |
| 抢占后 V1 pooling 状态未清除 | pooling bugfix | [#55192](https://github.com/vllm-project/vllm/pull/55192) |
| MiniMax-M2 TP=4 时 batch invariance 失效 | 跳过 DeepSeek 融合的 A GEMM | [#61036](https://github.com/vllm-project/vllm/pull/61036) |
| WNA16 MoE dispatch 时 batch invariance 失效 | 保留旧 dispatch | [#61038](https://github.com/vllm-project/vllm/pull/61038) |
| 重启间 greedy 输出变化 | q/k-norm + RoPE 基于时序的内核配置 | [#58899](https://github.com/vllm-project/vllm/issues/58899) |

### 低（功能请求）

- Per-request 前缀缓存未命中归因（prompt 分支 vs. 驱逐）。 [#60044](https://github.com/vllm-project/vllm/issues/60044)
- 运行时零 JIT 编译特性追踪。 [#49349](https://github.com/vllm-project/vllm/issues/49349)

## 6. 这对应用开发者意味着什么

1. **如果在 Blackwell GPU 上提供服务**：FA4 稀疏 MLA 后端现已支持 decode 工作负载。监控 BF16 KV 缓存配置下的任何异常行为。

2. **如果使用前缀缓存配合 speculative decoding**：Qwen3.8-27B NVFP4 上的 DFlash2/DSpark bug 可能导致静默输出损坏。建议暂时使用 v0.29.0 或 FP8 量化，直到修复上线。

3. **如果使用 DeepSeek-V4 系列**：SM120/121 上的 CUDA graph 用户应注意 NaN 输出问题；v0.27.1 似乎稳定。temperature=0 的确定性问题在各个版本间持续存在。

4. **如果使用 MiniMax-M2 模型且 TP=4**：batch invariance 模式（`VLLM_BATCH_INVARIANT=1`）目前破坏确定性 — 修复正在推进中。

5. **如果使用 pooling 端点**：抢占处理和截断验证的 bugfix 已合入 — 建议更新以获取这些修复。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all headings, body text, and table content
2. Keep all technical identifiers, URLs, issue/PR numbers, code snippets, and config variables in their original English form
3. Maintain the exact Markdown structure including tables, lists, bold text, etc.
4. Use natural technical Chinese register

Let me translate this carefully, maintaining the structure and technical accuracy.</think>

# SGLang Digest — 2026-10-11

## 1. 今日要闻

SGLang 贡献者修复了多个影响 DeepSeek-V4-Pro-DSpark 在 TP8 配置下运行的关键 DSpark CUDA Graph 正确性问题，包括跨 TP 规划不一致以及图捕获期间的非法内存访问。diffusion 团队为 Qwen-Image-2.1、Cosmos3 和 Z-Image 模型解决了多个 torch.compile 图保留问题，解决了与 eager 模式相比的性能回退。

---

## 2. 版本发布与重大变更

过去 24 小时内无版本发布。

---

## 3. 新模型与硬件支持

| 功能 | 描述 | PR/Issue |
|------|------|----------|
| **摩尔线程 MUSA GPU** | 摩尔线程（MUSA）GPU 一级支持路线图 — 追踪 Issue #16565，已有 14 个 👍 | [#16565](https://github.com/sgl-project/sglang/issues/16565) |
| **DeepSeek-V4.1 on MI355X (gfx950)** | AMD MI355X 上 DeepSeek-V4.1-Flash 的可选单路解码 FFN 启动方式，通过 `SGLANG_ROCM_MONO_DECODE=1` 启用 — 需要 TP2 或 TP4，且无 DP/EP | [#43497](https://github.com/sgl-project/sglang/pull/43497) |

---

## 4. 性能优化

| 领域 | 变更 | 详情 |
|------|------|------|
| **调度器** | 前缀等待节流现改用前向计数而非wall time | 防止 radix-tree LRU 在多 rank 间产生分歧 — 修复 `test_unified_radix_cache` 失败 | [#43512](https://github.com/sgl-project/sglang/pull/43512) |
| **PD 分解** | 解码恢复结果合并到 MIN-reduced KV poll 中 | 从 #38704 提取 bug 修复，无需额外的 per-request gloo all-reduce | [#43562](https://github.com/sgl-project/sglang/pull/43562) |
| **Diffusion torch.compile** | Qwen-Image-2.1: 保留 Ulysses 整图 | 消除注意力层中 32 个图断点；eager 2.78s → 编译后目标 | [#43586](https://github.com/sgl-project/sglang/pull/43586) |
| **Diffusion torch.compile** | Cosmos3: 保留融合内核于图中 | 降低每 4 步内核数（2264 → 3344）；1.43s → 目标 0.93s | [#43577](https://github.com/sgl-project/sglang/pull/43577) |
| **Diffusion torch.compile** | Z-Image: 跳过 inductor 多内核选择 | 修复预热 inductor FX-graph 缓存后服务器再次启动时的崩溃/卡死 | [#43601](https://github.com/sgl-project/sglang/pull/43601) |
| **HiCache** | 存储工作器现可从后端异常中恢复 | 防止 Mooncake/文件读取的 `IOError`/`ValueError` 导致预取 IO 线程退出 | [#43550](https://github.com/sgl-project/sglang/pull/43550) |
| **采样器** | 仅对 top_k 前导列排序 | 避免每次解码步骤对完整词汇表排序 | [#43346](https://github.com/sgl-project/sglang/pull/43346) |
| **预填充准入** | 为 `ignore_eos` 请求预留剩余 token | 修复固定长度请求在前缀缓存下的 token 预算低估 | [#43564](https://github.com/sgl-project/sglang/pull/43564) |

---

## 5. 稳定性与回退问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **Critical** | DSpark 紧凑目标验证 CUDA Graph 时序敏感的 TP8 非法内存访问 | **已关闭** — PR #31195 修复跨 TP 规划不一致 | [#31023](https://github.com/sgl-project/sglang/issues/31023) |
| **Critical** | DSpark 大型解码 CUDA-Graph 捕获在 TP8 上的非确定性非法内存访问 (v0.16) | **已关闭** — DeepSeek-V4-Pro-DSpark 在 B300/B30Z 上服务器启动失败 | [#33356](https://github.com/sgl-project/sglang/issues/33356) |
| **High** | AMD gfx942 block-FP8 GEMM 精度问题 | **Open** — AITER CK blockscale GEMM 产生错误结果 | [#43526](https://github.com/sgl-project/sglang/issues/43526) |
| **High** | `--enable-deterministic-inference` 无法使 hybrid Mamba2 (granite-4.0-h) 批次无关 | **Open** — 仍然破坏批处理保证 | [#43413](https://github.com/sgl-project/sglang/issues/43413) |
| **Medium** | `--enable-unified-memory` 在 hybrid-SWA 模型上导致调度器崩溃 | **Open** — `alloc_token_slots` 抛出 "Out of memory" | [#42653](https://github.com/sgl-project/sglang/issues/42653) |
| **Medium** | Qwen3.8-27B W4A16 compressed-tensors 服务质量下降 | **Open** — wikitext PPL 9.98 vs vLLM 6.05（相同 checkpoint）| [#42917](https://github.com/sgl-project/sglang/issues/42917) |
| **Medium** | 中止请求时 CUDA VMM 多模态传输 slice 泄漏 | **Open** — 前向执行前中止的排队请求从不确认 VMM 传输 slice | [#43402](https://github.com/sgl-project/sglang/issues/43402) |
| **Low** | PD bootstrap 参数在 rust 前端被静默丢弃 | **已关闭** — 修复待处理 `/v1/chat/completions` PD 字段 | [#39412](https://github.com/sgl-project/sglang/issues/39412) |
| **CI** | 追踪：1 个broken，4 个 flaky 测试 | 最后更新 2026-10-10 UTC | [#17050](https://github.com/sgl-project/sglang/issues/17050) |

---

## 6. 这对应用开发者意味着什么

1. **TP8 上的 DSpark 用户**：如果运行 DeepSeek-V4-Pro-DSpark，关键的 CUDA Graph bug（Issue #31023、#33356）现已修复 —— 建议更新到最新 nightly 版本以解决图捕获期间的非法内存访问崩溃。

2. **Diffusion 模型用户**：如果在使用 Qwen-Image-2.1、Cosmos3 或 Z-Image 的 `--enable-torch-compile`，最新的 PR 显著减少了图断点，使性能更接近 eager 模式。Z-Image 用户应注意后续服务器启动不再崩溃。

3. **前缀缓存用户**：调度器修复（#43512）确保多节点部署中跨 rank 的 LRU 驱逐顺序一致 — 这提高了缓存命中率。

4. **AMD MI355X 用户**：DeepSeek-V4.1-Flash 现可通过 `SGLANG_ROCM_MONO_DECODE=1` 启用实验性单路解码路径（需要 TP2/TP4，且无 DP/EP）。

5. **待观测的已知问题**：AMD gfx942 block-FP8 精度问题（#43526）和 hybrid Mamba2 确定性推理问题（#43413）仍未修复 — 在修复前避免在生产环境中使用这些配置。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this llama.cpp digest into Chinese, following specific rules about translation. Let me analyze the content and translate it appropriately while:

1. Keeping all markdown structure exactly
2. Preserving URLs, issue numbers, code, etc.
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Not adding any preamble or explanation
5. Not using markdown fences around the output

Let me go through and translate:

## Today's Highlights
- This should become "今日要闻" or "今日重点"

## Releases & Breaking Changes
- "发布与重大变更"

## New Model & Hardware Support
- "新模型与硬件支持"

## Performance & Optimization
- "性能与优化"

## Stability & Regressions
- "稳定性与回归问题"

## What This Means for Application Developers
- "对应用开发者的意义"

Let me translate the full content:</think>

# llama.cpp 动态 — 2026-10-11

## 今日要闻

llama.cpp 项目继续保持快速迭代节奏，新增了多项模型支持并优化了后端性能。**MiniCPM-V 4.7** 支持已合并（commit b11551），同时服务器修复了提示词缓存 busy slot 处理的问题（b11552 / PR #30295）。OpenCL 和 SYCL 后端均收到了 MoE 内核改进，多个新模型集成正在审核中。

---

## 发布与重大变更

| Commit | 描述 | 链接 |
|--------|------|------|
| b11552 | **Server**：修复 busy slot 处理 — 当请求 pinning 一个 busy id_slot 时，不再在延迟前运行 prompt cache 更新，避免 RAM cache 中有更好匹配时的缓存损坏 | [PR #30295](https://github.com/ggml-org/llama.cpp/pull/30295) |
| b11550 | **cmake(s390x)**：为不支持的编译器禁用 z17 目标 | [Commit](https://github.com/ggml-org/llama.cpp/commit/b11550) |

根据 changelog issue（#9289、#9291）本期无重大 API 变更。

---

## 新模型与硬件支持

| 模型/架构 | 类型 | 状态 | PR / Commit |
|-----------|------|------|-------------|
| **MiniCPM-V 4.7** | VLM | 已合并 | [b11551](https://github.com/ggml-org/llama.cpp/commit/b11551) |
| **DeepSeek V4.1** | LLM (MoE) | 审核中 | [PR #28696](https://github.com/ggml-org/llama.cpp/pull/28696) |
| **GLM5-next** | LLM | 审核中 — 支持speculative decoding的输入层embedding | [PR #30268](https://github.com/ggml-org/llama.cpp/pull/30268) |
| **Prism Bonsai 2 27B** | LLM | 审核中 | [PR #29600](https://github.com/ggml-org/llama.cpp/pull/29600) |
| **GigaChat 3.5**（432B/28B MoE）| LLM | 审核中 | [PR #25342](https://github.com/ggml-org/llama.cpp/pull/25342) |
| **Hexagon DSP** | 后端 | Q1_0 量化支持已添加 | [PR #30122](https://github.com/ggml-org/llama.cpp/pull/30122) |

---

## 性能与优化

| 领域 | 变更 | 影响 |
|------|------|------|
| **OpenCL MoE** | 新 bin 内核：`kernel_gemm_moe_q4_k_q8_1_dp4a_bin`、`kernel_gemm_moe_q6_k_q8_1_dp4a_bin` | [b11541](https://github.com/ggml-org/llama.cpp/commit/b11541) |
| **SYCL MXFP4 MoE** | 算术解码与权重重排加速 | [b11540](https://github.com/ggml-org/llama.cpp/commit/b11540) |
| **Vulkan coopmat1** | 在 int8 矩阵乘法中将 A 预取 clamp 到 `end_k` — 修复 #29342 | [PR #30283](https://github.com/ggml-org/llama.cpp/pull/30283) |
| **OpenCL FA** | 为 gemma-4 启用 dk=512（gqa=4/8），优化 gpt-oss-20b 的 dk=64 | [PR #30266](https://github.com/ggml-org/llama.cpp/pull/30266) |
| **内存** | 新增 `--reclaim-mmap-source` 参数：Qwen3-30B-A3B 节省 13 GiB（37%），DeepSeek-V2-Lite 节省 5.4 GiB（34%），Llama-3.2-3B 节省 1.4 GiB（38%）| [PR #24156](https://github.com/ggml-org/llama.cpp/pull/24156) |
| **流水线并行** | MoE experts 位于 host RAM 时现在支持流水线并行 | [PR #29963](https://github.com/ggml-org/llama.cpp/pull/29963) |

---

## 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 备注 |
|------|----------|------|------|
| **Qwen 3.8 Flash + MTP** — 启动时断言失败 | **高** | 开放 | [#29811](https://github.com/ggml-org/llama.cpp/issues/29811) — 20 条评论 |
| **llama-server 长时间对话后 "bad allocation" 崩溃** | **高** | 开放 | [#30091](https://github.com/ggml-org/llama.cpp/issues/30091) — HIP 后端，Ryzen 9700X + RX 9070 |
| **Vulkan prompt 处理在 RDNA1（gfx1010）上回归约 45%** | **中** | 开放 | [#30039](https://github.com/ggml-org/llama.cpp/issues/30039) — Qwen3.5-9B hybrid 模型 |
| **DFlash speculative decoding 在 `--split-mode tensor` 下失败** | **中** | 开放 | [#27833](https://github.com/ggml-org/llama.cpp/issues/27833) — Meta() 缓冲区中共享 output.weight |
| **RDNA3（ROCm/HIP）上 Qwen 3.5 9B 的 FA prefill 结果不确定** | **中** | 开放 | [#30175](https://github.com/ggml-org/llama.cpp/issues/30175) — 多模态请求 |
| **Qwen4exp 在 SM110（Jetson Thor）上 >8 层 GPU 运行时输出乱码** | **中** | 开放 | [#27763](https://github.com/ggml-org/llama.cpp/issues/27763) |
| **CUDA 并发批处理时 `ggml_cuda_op_rms_norm_fused` 报错 "invalid configuration argument"** | **中** | 开放 | [#27911](https://github.com/ggml-org/llama.cpp/issues/27911) — sm_70，qwen4_exp |
| **RAM prompt cache 串台** — 不相关的对话内容被恢复到新 slot | **低** | 开放 | [#27148](https://github.com/ggml-org/llama.cpp/issues/27148) |

---

## 对应用开发者的意义

1. **服务器部署受益于 busy-slot 修复** — 如果在 pinned slot 上使用 prompt cache，此前的行为可能在并发负载下导致缓存损坏。此修复确保延迟的请求不会干扰同一 slot 上正在进行的生成。

2. **内存效率提升** — 新增的 `--realloc-mmap-source` 参数（仅 Linux，默认关闭）可将大型模型的 RSS 减少 30–40%。在内存受限环境中可考虑启用，但应避免与 `--mlock` 一起使用。

3. **新模型选项即将到来** — MiniCPM-V 4.7 VLM 支持现已可用。DeepSeek V4.1 和 GigaChat 3.5（432B MoE）正在审核中 — 预计在下一版本周期内正式支持。

4. **注意旧款 AMD GPU 上的 Vulkan 回归** — 若在 RDNA1（RX 5000 系列）上部署，需注意约 45% 的 prompt 处理性能回归。修复可能即将推出。

5. **HIP 上长时间服务器会话可能遇到 "bad allocation" 崩溃** — 若在 AMD GPU 上使用 HIP，请在长时间会话中监控内存使用情况。

---

*本动态基于 2026-10-11 的 GitHub 数据生成*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Chinese. Let me analyze the requirements carefully:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, links, issue numbers, project names, API identifiers in original form
4. Use natural technical Chinese, like a Chinese developer newsletter

Let me translate section by section:

---

## Ollama 项目更新简报

**日期：** 2026-10-10

---

### 1. 今日要闻

本次提交了 3 个 PR，主要涉及 API 兼容性和用户体验改进。最重要的改动是修复了空参数工具调用的问题（#18913），解决了回放包含助手工具调用的对话历史时的阻塞问题。此外，流式响应格式与 OpenAI 对齐（#18914）确保了各端点的一致性。

---

### 2. 发布与破坏性变更

*今日无发布或破坏性变更报告。*

---

### 3. 新模型与硬件支持

*今日无新模型或硬件支持公告。*

---

### 4. 性能与优化

*今日无性能或优化工作报道。*

---

### 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **中** | 当 `function.arguments` 为空字符串时，`/v1/chat/completions` 回放请求返回 HTTP 400 错误 | [PR #18913](https://github.com/ollama/ollama/pull/18913) — 已开启 |
| **低** | `/v1/completions` 流式响应中 `created` 时间戳在各 chunk 间不一致 | [PR #18914](https://github.com/ollama/ollama/pull/18914) — 已开启 |
| **低** | CLI/API 列表显示时显示冗余的 `:latest` 标签 | [PR #18915](https://github.com/ollama/ollama/pull/18915) — 已开启 |

---

### 6. 这对应用开发者意味着什么

- **工具调用回放修复：** 回放包含助手工具调用的对话历史时，当 `function.arguments` 为空字符串的应用将不再收到 HTTP 400 错误。这对使用持久化对话上下文的代理应用尤为重要。

- **流式响应一致性：** 使用 `/v1/completions` 流式响应的开发者可以期待各 chunk 间的 `created` 时间戳保持一致，与 `/v1/chat/completions` 和 OpenAI API 的行为对齐。

- **更清晰的模型列表：** `DisplayShortest()` 改动将使 `/api/tags`、`ollama list`、`ollama ps` 和 `/v1/models` 的输出显示 `llama3.1` 而非 `llama3.1:latest`，提升可读性。输入解析保持不变 — `model:latest` 仍然是有效的输入。</think>

## Ollama 项目更新简报

**日期：** 2026-10-10

---

### 1. 今日要闻

本次提交了 3 个 PR，主要涉及 API 兼容性和用户体验改进。最重要的改动是修复了空参数工具调用的问题（#18913），解决了回放包含助手工具调用的对话历史时的阻塞问题。此外，流式响应格式与 OpenAI 对齐（#18914）确保了各端点的一致性。

---

### 2. 发布与破坏性变更

*今日无发布或破坏性变更报告。*

---

### 3. 新模型与硬件支持

*今日无新模型或硬件支持公告。*

---

### 4. 性能与优化

*今日无性能或优化工作报道。*

---

### 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **中** | 当 `function.arguments` 为空字符串时，`/v1/chat/completions` 回放请求返回 HTTP 400 错误 | [PR #18913](https://github.com/ollama/ollama/pull/18913) — Open |
| **低** | `/v1/completions` 流式响应中 `created` 时间戳在各 chunk 间不一致 | [PR #18914](https://github.com/ollama/ollama/pull/18914) — Open |
| **低** | CLI/API 列表显示时显示冗余的 `:latest` 标签 | [PR #18915](https://github.com/ollama/ollama/pull/18915) — Open |

---

### 6. 这对应用开发者意味着什么

- **工具调用回放修复：** 回放包含助手工具调用的对话历史时，当 `function.arguments` 为空字符串的应用将不再收到 HTTP 400 错误。这对使用持久化对话上下文的代理应用尤为重要。

- **流式响应一致性：** 使用 `/v1/completions` 流式响应的开发者可以期待各 chunk 间的 `created` 时间戳保持一致，与 `/v1/chat/completions` 和 OpenAI API 的行为对齐。

- **更清晰的模型列表：** `DisplayShortest()` 改动将使 `/api/tags`、`ollama list`、`/v1/models` 和 `ollama ps` 的输出显示 `llama3.1` 而非 `llama3.1:latest`，提升可读性。输入解析保持不变 — `model:latest` 仍然是有效的输入。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest into Chinese. Let me go through the rules:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate the content:

Title: LiteLLM 每日简报 — 2026-10-11

Today's Highlights -> 今日要闻
Today's activity centers on -> 今日活动主要集中于
with new feature work on -> 并有新的功能开发
Notably -> 值得注意的是
Several critical routing and cost calculation bugs are being addressed, alongside expanded provider support for MiniMax and Tencent Messages APIs.

Several critical routing and cost calculation bugs are being addressed -> 多个关键的路由和成本计算问题正在修复中
alongside expanded provider support -> 同时扩展了提供商支持

Releases & Breaking Changes -> 发布与重大变更

New Model & Hardware Support -> 新模型与硬件支持

Performance & Optimization -> 性能与优化

Stability & Regressions -> 稳定性与回归问题

What This Means for Application Developers -> 这对应用开发者意味着什么

Let me translate the full content:</think>

# LiteLLM 每日简报 — 2026-10-11

## 今日要闻

今日活动主要集中于 LLM 翻译和代理路由的 bug 修复，同时有 Decisions 模型支持的新功能开发和安全加固。值得注意的是，openai SDK 版本约束问题（#40317）仍然是需要 openai≥3.0.0 的用户的痛点。多个关键的路由和成本计算问题正在修复中，同时扩展了 MiniMax 和 Tencent Messages API 的提供商支持。

---

## 发布与重大变更

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **OpenAI SDK 约束未变更** | `pyproject.toml` 中的 `openai>=2.20.0,<3.0.0` 限制在 v1.100.0 中仍然存在，阻止与需要 openai≥3.0.0 的包共同安装 | [#40317](https://github.com/BerriAI/litellm/issues/40317) |
| **LiteLLM v1.92.0 FastAPI 依赖** | 基础 SDK 包在调用 `completion(..., tools=[...])` 时抛出 `ModuleNotFoundError: No module named 'fastapi'` — 需要可选安装 FastAPI | [#32993](https://github.com/BerriAI/litellm/issues/32993) |

---

## 新模型与硬件支持

| 模型/提供商 | 类型 | 状态 |
|---------------|------|--------|
| **Microsoft Decision 1** | 新模型支持 | 功能请求: [#45807](https://github.com/BerriAI/litellm/issues/45807) |
| **MiniMax Messages API** | 原生 Rust 实现 | PR 已合并: [#45896](https://github.com/BerriAI/litellm/pull/45896) |
| **Tencent Messages API** | 原生 Rust 实现 | PR 已合并: [#45899](https://github.com/BerriAI/litellm/pull/45899) |
| **DeepSeek V4 Flash Responses API** | 原生支持请求 | 功能请求: [#35648](https://github.com/BerriAI/litellm/issues/35648) |
| **Vertex AI 上的 Claude 模型（batch）** | 批量创建修复进行中 | 进行中: [#45671](https://github.com/BerriAI/litellm/issues/45671) |

---

## 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **Mistral 引用** | 修复截断问题 — 现在保留所有 content-list 块而非仅保留最后一个文本块 | 修复流式/非流式调用中引用的静默数据丢失 | [#45818](https://github.com/BerriAI/litellm/pull/45818) |
| **Responses API 桥接** | 停止丢弃 reasoning items 和 url_citation 注解 | 在桥接响应中保留推理追踪和引用 | [#45812](https://github.com/BerriAI/litellm/pull/45812) |
| **基于成本的路由** | 修复同步 Router 方法在健康部署上仍报 `RouterRateLimitError` 的问题 | 解阻生产环境中使用基于成本路由的部署 | [#45718](https://github.com/BerriAI/litellm/issues/45718) |
| **xAI 批处理结果** | 通过在批处理创建时命名输出文件来修复批处理文件查找 404 问题 | 减少不必要的 Files API 调用 | [#45559](https://github.com/BerriAI/litellm/pull/45559) |
| **refresh_model_info 轮询** | 每 5 分钟轮询 `/v1/models` 且无法关闭 — 保持无服务器端点持续计费 | serverless 部署的潜在成本问题 | [#42657](https://github.com/BerriAI/litellm/issues/42657) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | **Router 异步完成不触发 CustomLogger 回调** — `Router.acompletion()` 静默跳过日志钩子 | 进行中: [#8842](https://github.com/BerriAI/litellm/issues/8842) (26 条评论, 14 👍) |
| **高** | **虚假的 BudgetExceededError** — 预算计算在非 Redis 模式下将 `max_budget + recent_spend` 相加，在持续负载下约 2 分钟自愈 | 进行中: [#36926](https://github.com/BerriAI/litellm/issues/36926) (6 条评论) |
| **中** | **ElevenLabs 模型成本计算失败** — LiteLLM 代理未正确计算成本 | 进行中: [#18058](https://github.com/BerriAI/litellm/issues/18058) (10 条评论) |
| **中** | **小米 MiMo 模型: `output_config` 参数失败** — Claude Code 报错 | 进行中: [#24549](https://github.com/BerriAI/litellm/issues/24549) (10 条评论) |
| **中** | **MCP HTTP 代理不转发 `mcp-session-id`** — 有状态服务器中工具无法加载 | 已关闭: [#25128](https://github.com/BerriAI/litellm/issues/25128) |
| **中** | **OpenTelemetry 流式追踪缺失** — 应用提前停止读取时无 span | 进行中: [#45736](https://github.com/BerriAI/litellm/issues/45736) |
| **中** | **Realtime 代理重复 response.create** — 导致 `conversation_already_has_active_response` 错误 | 已关闭: [#31726](https://github.com/BerriAI/litellm/issues/31726) |
| **低** | **Token 报告聚合** — 缓存命中零花费但回放原始 token 列，聚合依据不明确 | 设计问题: [#39057](https://github.com/BerriAI/litellm/issues/39057) (20 条评论) |

---

## 这对应用开发者意味着什么

1. **CustomLogger 用户**: 如果你在 `Router.acompletion()` 中使用自定义日志钩子，请注意回调当前未被触发 — 这是一个影响可观测性的已知回归问题。

2. **基于成本的路由用户**: 当前版本中 `routing_strategy: "cost-based-routing"` 选项会破坏所有同步 Router 方法。请在生产环境中避免使用，或关注 [#45718](https://github.com/BerriAI/litellm/issues/45718) 中的修复。

3. **预算监控**: 在持续负载下，你可能会看到虚假的 `BudgetExceededError` 错误，随后自行恢复。这是计算问题，并非实际预算超支。

4. **OpenAI SDK 版本**: 如果你需要 `openai>=3.0.0`（例如其他依赖项），请注意 LiteLLM 当前限制为 `<3.0.0`。社区有此需求（[#37907](https://github.com/BerriAI/litellm/issues/37907)、[#43853](https://github.com/BerriAI/litellm/issues/43853)），但暂无解决时间表。

5. **Mistral 引用**: 如果你在使用 Mistral 的引用功能，截断 bug 正在修复中 — 关注修复上线。

6. **新提供商支持**: MiniMax 和 Tencent Messages API 支持已在 Rust 中实现，扩展了多模型部署的提供商矩阵。

---

*基于 GitHub 数据生成 — BerriAI/litellm*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this English digest into Chinese, following specific rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
- Issue/PR references like #12345 and their link text stay as-is
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this while maintaining all the structure and technical terms.</think>

# Unsloth 速报 — 2026-10-11

## 今日要点

开发持续推进多条战线：Studio UI 针对长对话的性能优化正在进行中；Llama/Qwen3 注意力路径的填充掩码（padding mask）正确性修复已合并多项；整个代码库的注释大规模重构（缩减 59-65%）预示着新功能工作前的清理。过去 24 小时内无新版本发布。

---

## 版本发布与重大变更

| 项目 | 状态 | 详情 |
|------|--------|---------|
| 无 | — | 过去 24 小时内无版本发布 |

---

## 新模型与硬件支持

| 模型 / 硬件 | 类型 | 备注 |
|------------------|------|-------|
| Qwen3-TTS | 功能请求 | 请求添加微调支持（[#3951](https://github.com/unslothai/unsloth/issues/3951)） |
| Intel GPU | 文档请求 | 需要手动 pin 安装的文档（[#12836](https://github.com/unslothai/unsloth/issues/12836)） |
| ROCm 7.14 | Bug | 2x R9700 上微调失败，原因是 PyTorch 版本不匹配（[#10657](https://github.com/unslothai/unsloth/issues/10657)） |

---

## 性能与优化

| PR | 状态 | 描述 |
|----|--------|-------------|
| [#13256](https://github.com/unslothai/unsloth/pull/13256) | OPEN | 在 Llama 和 Qwen3 缓存注意力中正确处理填充掩码 — 修复从左填充提示词生成时文本发散的问题 |
| [#13154](https://github.com/unslothai/unsloth/pull/13154) | OPEN | 为左填充无标签训练保留填充掩码 — 修复 [#3705](https://github.com/unslothai/unsloth/issues/3705) |
| [#13254](https://github.com/unslothai/unsloth/pull/13254) | OPEN | 检测到 DoRA 适配器时跳过融合 LoRA 内核 — 防止静默的训练/输出损坏 |
| [#13255](https://github.com/unslothai/unsloth/pull/13255) | OPEN | 性能/滚动性能 — 修复长对话中展开思考、代码块和 LaTeX 导致的 UI 冻结问题 |
| [#10770](https://github.com/unslothai/unsloth/pull/10770) | OPEN | 显式发出 `--split-mode layer` 用于手动多 GPU 分配 — 修复张量分割行为歧义 |
| [#13240](https://github.com/unslothai/unsloth/pull/13240) | OPEN | Studio：推荐 Hub 筛选器 — 在支持 FP8/NVFP4 的 GPU 上显示对应版本，其他情况显示所有 GGUF |

**注意：** 张量分割解码出现性能回退 — 双 RTX 5070 Ti 上自 `b10715-mix-86bd2d3` 起慢 2.9 倍（[#12468](https://github.com/unslothai/unsloth/issues/12468)）。

---

## 稳定性与回归

| Issue | 严重程度 | 状态 | 修复 |
|-------|----------|--------|-----|
| [#3921](https://github.com/unslothai/unsloth/issues/3921) — PRO RTX6000 上 Triton 非法内存访问 | 高 | CLOSED | — |
| [#12468](https://github.com/unslothai/unsloth/issues/12468) — 张量分割解码慢 2.9 倍 | 高 | CLOSED | 回退引入于 b10715-mix |
| [#7449](https://github.com/unslothai/unsloth/issues/7449) — AMD Strix Halo：权重在 RAM 而非 VRAM | 高 | CLOSED | — |
| [#3411](https://github.com/unslothai/unsloth/issues/3411) — 183GB VRAM B200 上 GPT OSS 120b OOM | 中 | CLOSED | 4k 上下文时 KV 缓存问题 |
| [#12942](https://github.com/unslothai/unsloth/issues/12942) — 后端 Python 空闲时 95% CPU（v0.1.903-beta） | 中 | OPEN | OPENBLAS_NUM_THREADS=1 无效 |
| [#9037](https://github.com/unslothai/unsloth/issues/9037) — 长对话重新加载后完整预填充 | 中 | OPEN | 仅在空闲自动卸载时保存分片 KV |

---

## 对应用开发者的意义

1. **填充掩码正确性** — 如果你正在进行左填充推理（多轮聊天中常见），请注意之前的版本产生了不一致的输出。[#13256](https://github.com/unslothai/unsloth/pull/13256) 和 [#13154](https://github.com/unslothai/unsloth/pull/13154) 中的修复解决了这个问题。请测试现有工作流。

2. **DoRA + 融合 LoRA** — 如果使用 DoRA 适配器，请确保你的训练运行没有静默损坏。融合 LoRA 路径忽略了 DoRA 的幅值向量（[#13254](https://github.com/unslothai/unsloth/pull/13254)）。

3. **Studio 滚动性能** — 包含代码/LaTeX 的长对话正在优化中。如果你之前因为长会话而避免使用 Unsloth Studio，修复正在进行中。

4. **多 GPU 张量分割** — [#10770](https://github.com/unslothai/unsloth/pull/10770) 中的显式 `--split-mode layer` 消除了手动 GPU 分配配置中的歧义。

5. **Dependabot 活跃** — Python 依赖项正在频繁更新（[#13252](https://github.com/unslothai/unsloth/pull/13252)、[#13064](https://github.com/unslothai/unsloth/pull/13064)）。请监控固定环境中的传递依赖冲突。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*