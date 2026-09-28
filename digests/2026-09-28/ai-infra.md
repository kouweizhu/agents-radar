# AI 基础设施日报 2026-09-28

> 生成时间: 2026-09-28 01:06 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the provided English article into Chinese. I need to:

1. Translate the entire article into Simplified Chinese
2. Keep all Markdown structure exactly as-is (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
3. Keep URLs, code references, issue/PR numbers, project names, repository slugs, version tags, file paths in their original English form
4. Use natural technical Chinese register (like a Chinese developer newsletter)
5. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section while preserving all formatting:

**Title**: Cross-Project Comparison: AI Infrastructure Landscape — 2026-09-28

**Ecosystem Overview** - translate normally
**Activity Comparison** - translate the table headers and content
**Model Support Race** - translate table
**Performance Frontier** - translate table
**Layer Positioning** - translate table
**Trend Signals** - translate sections

Key terms to keep in English:
- Project names (vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth)
- Issue/PR numbers (#53463, etc.)
- URLs
- Technical terms that are commonly used in English in Chinese technical context
- Model names (Qwen4Exp, DeepSeek-V4.1, etc.)
- Release tags (b11223→b11213, prebuilt-wheels-cu13)
- API terms (KV cache, tensor-parallel, LoRA, etc. - can translate but keep as technical terms)

Let me do the translation:</think>

# 跨项目对比：AI 基础设施版图 — 2026-09-28

## 生态概览

今天的活动反映了 AI 推理栈在各层面的快速演进。**量化与内核融合**是性能优化的重点（vLLM、SGLang、llama.cpp、Unsloth），而 **Rust 网关**正在成为生产路由的架构基础（LiteLLM、Ollama）。本地运行时层（llama.cpp、Ollama）正在消费者硬件上积极追赶云端服务水准，Vulkan GDN 调优和 Intel GPU 支持就是明证。与此同时，**训练与推理融合**持续推进——Unsloth 推动 block-FP8 训练加速，LiteLLM 为智能体工作流扩展成本追踪。整体趋势是：一个碎片化但日益成熟的生态系统，推理引擎（vLLM/SGLang）、本地运行时（llama.cpp/Ollama）、网关（LiteLLM）和训练工具（Unsloth）都在竞相支持同样的前沿模型，并配备越来越复杂的优化手段。

---

## 活跃度对比

| 项目 | 新 Issue（24h） | 新 PR（24h） | Release（24h） |
|---------|------------------|---------------|----------------|
| **vLLM** | 10+ | 10+ | 0 |
| **SGLang** | ~26 | ~20 | 0 |
| **llama.cpp** | 15 | ~20 | **11**（b11223→b11213） |
| **Ollama** | 15 | ~15 | 0 |
| **LiteLLM** | 10 | ~10 | 0 |
| **Unsloth** | 26 | ~10 | **1**（prebuilt-wheels-cu13） |

**观察：**

- **llama.cpp** 发布节奏最快，11 个 commit；项目保持稳定的后端修复和模型支持更新
- **SGLang** 和 **Unsloth** 的 Issue 量最高，说明功能开发和用户参与活跃
- **vLLM** 和 **LiteLLM** 的 Issue/PR 比平衡，表明代码审查和贡献流程健康

---

## 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|-----------|--------|---------|---------|
| **GLM-5.3-Flash（320B）** | — | — | ✅ | — | — | — |
| **DeepSeek-V4.1** | — | ✅（AMD gfx950） | — | ❌（图像 bug） | — | — |
| **Qwen4Exp（NVFP4）** | ✅ | — | — | — | — | — |
| **Qwen3 / Qwen3-VL 排序模型** | — | — | ✅（RANK pooling） | — | — | — |
| **SANA-Video 2.0** | — | ✅ | — | — | — | — |
| **Cohere Command A+（Azure）** | — | — | — | — | ✅ | — |
| **Mamba-2 / Mamba SSM** | ⚠️（SM121 崩溃） | — | — | — | — | ✅（cu13 wheels） |
| **Gemma 4** | — | — | — | ✅ | — | — |
| **ModelScope 集成** | — | — | — | — | — | ✅ |

**领先者：**

- **多模态视频**：**SGLang** 领先，支持 SANA-Video 2.0
- **消费者 GPU 量化推理**：**vLLM**（NVFP4）、**Unsloth**（block-FP8）
- **本地/CPU 推理**：**llama.cpp** 保持广度，Vulkan GDN 和新架构支持丰富
- **云网关路由**：**LiteLLM** 新增 Tsubasa，扩展 provider 矩阵

---

## 性能前沿

优化工作集中在五个方向，遍布整个生态：

| 方向 | 活跃项目 | 关键工作 |
|------|-----------------|----------|
| **内核融合（GDN/MoE）** | vLLM, SGLang, llama.cpp | 融合 GDN 解码路径（#53463）、Qwen3.5 6 路投影（#41457）、Vulkan GDN Intel 调优 |
| **量化（FP8/NVFP4/NF4）** | vLLM, Unsloth | Block-FP8 训练提速 4-15 倍（#12027）、rowwise FP8 缩放轴修复、NVFP4 Qwen4Exp PLE |
| **调度器 / 批处理** | vLLM, SGLang | 队列管理重构（#58947）、KV 持有 / 延迟等待集合 |
| **推理/思考预算** | Ollama, LiteLLM | Token 预算上限（#17566）、流结束处理 |
| **分布式服务** | vLLM, SGLang, LiteLLM | 多节点 all-reduce、异步 TP、MCP 网关 |

**最具影响力的单点变更**：Unsloth 的 block-FP8 LoRA 训练修复（#12027）实现 4-15 倍提速——这对现代 GPU 上的微调工作流是突破性进展。

---

## 层定位

| 层级 | 项目 | 主要角色 |
|-------|----------|--------------|
| **服务引擎** | **vLLM**、**SGLang** | 高吞吐云端推理、tensor 并行多卡、KV 缓存管理 |
| **本地运行时** | **llama.cpp**、**Ollama** | 消费者硬件推理、无 GPU 回退、可移植二进制 |
| **网关 / 路由** | **LiteLLM** | 多 provider 回退、成本追踪、虚拟密钥认证、API 标准化 |
| **训练 / 微调** | **Unsloth** | LoRA/LoRA+ 训练、block-FP8 量化、Apple Silicon MLX |

**关键差异：**

- **vLLM vs SGLang**：都瞄准云端推理；SGLang 在视觉（SANA-Video）和 AMD 支持上略占优势，vLLM 在 Blackwell（GB200/GB300）和调度器复杂度上领先
- **llama.cpp vs Ollama**：llama.cpp 是面向开发者的库/CLI 工具；Ollama 是面向终端用户的产品，提供 Studio UI 和一键部署
- **LiteLLM 作为聚合层**：位于所有推理引擎之上，提供统一的 API 用于成本控制和跨 provider 回退

---

## 趋势信号

### 已落地（今日发布）

1. **量化是推理成本的主要杠杆** — block-FP8 训练、NVFP4 嵌入、FBGEMM 回退都瞄准 2-15 倍效率提升
2. **Rust 网关是新架构默认选择** — LiteLLM 和 Ollama 都在大力投资 Rust 路由层（认证、虚拟密钥、生命周期追踪）
3. **消费者 GPU 推理正在缩小与云端的差距** — Vulkan GDN 调优（llama.cpp）、Intel XPU 支持（vLLM）、AMD gfx950（SGLang）在千元级硬件上提供有竞争力的性能

### 需要关注

| 信号 | 影响 |
|-----------|--------------|
| **DGX Spark（GB10）正确性 bug** — 前缀缓存 + MTP 损坏、引擎 OOM、Mamba-2 崩溃 | DGX Spark 采用可能放缓直到 v0.28.x 稳定；生产环境考虑云端替代方案 |
| **Ollama 流式 token 丢失 bug**（#41236） | 影响实时应用；关注补丁 |
| **LiteLLM 路由空响应 bug**（#43165） | 回退路径静默失败 — 生产路由的关键风险 |
| **Unsloth block-FP8 → 4-bit 检查点转换** | 开启新的微调 + 推理流水线；预计社区将广泛采用 |
| **LiteLLM 中的 MCP 网关** | 工具调用标准化走向统一 MCP 协议 |

### 智能体 / 应用开发者建议

- **在 LiteLLM #43165 修复前不要依赖回退路由** — 验证主路径健康状态
- **DGX Spark 尚未达到生产就绪状态** — vLLM 环境下等待稳定修复
- **如果需要 block-FP8 效率，考虑使用 Unsloth 进行微调**（H100/B200）
- **关注 thinking token 预算机制** — Ollama 和 LiteLLM 都在实现单请求上限，这将成为智能体循环中成本控制的标准配置

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest from English to Chinese. I need to:
1. Keep all Markdown structure exactly as-is
2. Keep all URLs, code references, issue/PR numbers, etc. in their original form
3. Translate the content naturally into technical Chinese

Let me go through each section:

1. Title and date - translate to Chinese
2. Today's Highlights - translate the summary
3. Releases & Breaking Changes - translate
4. New Model & Hardware Support - translate the table
5. Performance & Optimization - translate the table
6. Stability & Regressions - translate the table
7. What This Means for Application Developers - translate the numbered points
8. Footer - translate

Let me do this carefully, maintaining the exact structure.</think>

# vLLM 每日简报 — 2026-09-28

## 今日要点

vLLM 项目正在积极推进内核优化工作，包括融合 GDN 解码路径和调度器队列改进。Rust 前端继续向功能对齐迈进，同时多个影响 DGX Spark (GB10) 硬件和混合 Mamba/GDN 模型的正确性 bug 仍在积极调查中。过去 24 小时内无新版本发布。

---

## 版本发布与重大变更

- **暂无** — 过去 24 小时内未检测到新版本发布。

---

## 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **Vulkan 支持** | 添加 Vulkan 后端以弥补与 llama.cpp 在通用硬件上的功能差距 | [#21182](https://github.com/vllm-project/vllm/issues/21182) |
| **packed NVFP4 Qwen4Exp PLE** | 支持 `local-inference-lab/Qwen3.8-Flash-Next-NVFP4` 在 1× DGX Spark 上运行，无需 CPU/磁盘 PLE 卸载 | [#56273](https://github.com/vllm-project/vllm/pull/56273) |
| **ROCm QK-norm+RoPE+gate 内核** | 为 AMD GPU 上的 Qwen3-Next/Qwen3.5 启用融合的 QK-norm+RoPE+gate Triton 内核 | [#51406](https://github.com/vllm-project/vllm/pull/51406) |
| **XPU Graph 默认启用** | Intel XPU Graph 现已默认启用（PyTorch XPU 2.14+） | [#51600](https://github.com/vllm-project/vllm/pull/51600) |

---

## 性能与优化

| 领域 | 变更 | 影响 | PR/Issue |
|------|--------|--------|----------|
| **GDN 解码内核** | 将非_specular GDN 解码路由到融合 CUDA 内核，而非分离的 Triton 算子 | 消除每个 GDN 层的逐层开销 | [#53463](https://github.com/vllm-project/vllm/pull/53463) |
| **Qwen3.5 GDN 融合** | 将 `in_proj_ba` 融合为 6 路 `MergedColumnParallelLinear`（适用于 Qwen3.5 非 LoRA 路径） | 用 1 个融合内核替换 2 个独立投影 | [#41457](https://github.com/vllm-project/vllm/pull/41457) |
| **KimiViT RoPE 融合** | 将逐层 QK RoPE 融合为单个原地内核（适用于 Kimi-K3） | **29 倍加速**（256 tokens，1 张 224×224 图片 @ GB300：225.3µs → 7.6µs） | [#58651](https://github.com/vllm-project/vllm/pull/58651) |
| **调度器队列** | 重构 `skipped_waiting` 队列 → `kv_holding_waiting` + `deferred_waiting` 集合 | 更好地调度持有 KV 块的请求的公平性 | [#58947](https://github.com/vllm-project/vllm/pull/58947) |
| **MiniMax-M3-NVFP4** | #48929 正确性修复后的首批数据：EAGLE3 在 8× B200 上实现 2.1–2.3 倍解码 | 100 万字真实文章信封基准测试 | [#51494](https://github.com/vllm-project/vllm/issues/51494) |
| **固定 Token Prefill 打分** | 新增 `SamplingParams.prompt_logprob_token_ids` 和 `prompt_logprob_start`，用于 OPD / top-k 蒸馏 | 请求级 prefill logprob 打分 | [#54335](https://github.com/vllm-project/vllm/pull/54335) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 |
|----------|-------|--------|-----|
| **高** | **GLM-5.3-Flash 长解码退化** — 累积推理解码后（W4A16 量化，B300） | 进行中 | — |
| **高** | **Prefix caching + MTP 破坏输出** — v0.28.0 中混合 Mamba/GDN 模型输出损坏 — 源自 #43559 的回归 | 进行中 | — |
| **高** | **DGX Spark (GB10) 引擎启动 OOM** — 统一内存下报 NV_ERR_NO_MEMORY，而 MemAvailable 显示约 22 GiB | 进行中 | — |
| **中** | **批处理不变性损坏** — 配合序列并行 / 异步 TP（`VLLM_BATCH_INVARIANT=1` + `enable_sp`） | **已关闭** | #56370 |
| **中** | **Mamba-2 Triton 内核崩溃** — SM121 (DGX Spark) 上非法指令崩溃，不设置 `CUDA_LAUNCH_BLOCKING=1` 则无法复现 | 进行中 | — |
| **中** | **Qwen4Exp QSA indexer** — 每个 chunk 的 logits 缓冲区随 max_seq_len 增长，导致长 prefill 时 OOM/卡死（GB10） | 进行中 | — |
| **中** | **Qwen3.8 + DSpark + streaming json_schema** — XGrammar 同步失败，HTTP 200 响应中发出 25 万个尾随空格 | 进行中 | — |
| **低** | **SM89 以下 FP8 Triton MoE** — 现产生清晰错误而非晦涩的编译崩溃 | **已修复** | [#54287](https://github.com/vllm-project/vllm/pull/54287) |
| **低** | **mamba_ssm_cache_dtype** 验证 — 在 EngineCore 崩溃前拒绝不兼容的 dtype | **已修复** | [#54123](https://github.com/vllm-project/vllm/pull/54123) |
| **低** | **GDN FlashInfer fp32 qkv 转换** — 修复 `dtype=torch.float32` 时 GDN 线性注意力内核预热崩溃 | **已修复** | [#51373](https://github.com/vllm-project/vllm/pull/51373) |

---

## 这对应用开发者的意义

1. **DGX Spark (GB10) 用户**：多个正确性问题仍在待解决中 — 包括 MTP refix caching、长 prefill 卡死和引擎启动 OOM。建议使用 v0.28.x 稳定版，直至相关修复合入 main 分支。

2. **Qwen3.5 / Qwen4Exp 用户**：内核融合工作持续推进以提升吞吐量。融合 GDN 解码内核 (#53463) 和 6 路投影 (#41457) 将降低每层的解码延迟。

3. **RL / LoRA 工作流**：多个 RFC 讨论了权重重载正确性 (#48312)、睡眠/唤醒崩溃 (#48310) 和 LoRA 适配器生命周期 (#48297)。这些仍处于设计阶段。

4. **监控改进**：V1 引擎新增看门狗机制 (#55700)，可在卡顿时自动捕获堆栈跟踪 — 有助于生产环境部署。

5. **工具调用修复**：修复了非流式聊天补全中 `n > 1` 时的解析器状态泄漏 (#58939) 和每轮工具调用的推理 token 计数 (#58927)。

---

*来自 github.com/vllm-project/vllm — 2026-09-28*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest into Simplified Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, preserving all structure and technical terms while making it read naturally in Chinese.

Key terms to keep in English:
- SGLang (project name)
- T2V, TI2V (model types)
- POC, EP, TP (technical abbreviations)
- Prometheus, Prometheus gauge
- CUDA, GPU, AMD, XPU, Cambricon, MLU, Intel
- H200, NVL, RTX, MI350X, gfx950
- Marlin (model name)
- DSpark, DeepSeek-V4.1
- vLLM
- HiCache, KDA, FlashInfer
- Asyncio
- RFC
- CI

Let me translate now:</think>

# SGLang 速报 — 2026-09-28

## 今日要闻

SGLang 项目持续多线推进：新增 SANA-Video 2.0、DeepSeek-V4.1（AMD）等模型支持，持续改进基础设施，并修复了流式输出和投机解码相关 bug。社区也在处理一个高关注度的 CUDA 崩溃追踪问题（已有 320+ 条讨论）。过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

- **SANA-Video 2.0**：新增对 `Efficient-Lodel-Video_2.0_5B_720p` T2V 和 TI2V 变体的原生 diffusion 支持 — 见 [PR #41492](https://github.com/sgl-project/sglang/pull/41492)，关闭 [Issue #41490](https://github.com/sgl-project/sglang/issues/41490)

- **AMD gfx950 部署 DeepSeek-V4.1**：MI350X 系列的适配 PR 现已推进 — [PR #41308](https://github.com/sgl-project/sglang/pull/41308) 为 gfx950 带来了 DSpark 支持

- **Cambricon MLU 后端**：POC 原型为 SRT 新增了 MLU 国产后端，已在 Qwen3-8B 上验证 — [PR #26898](https://github.com/sgl-project/sglang/pull/26898)

- **XPU 压缩张量支持**：复用 torch int4pack 路径实现 W4A16 量化 — [PR #40828](https://github.com/sgl-project/sglang/pull/40828)

---

## 性能与优化

- **Fused MoE Down-Projection**：Qwen3.8-Flash-Next FP8 在 H200 NVL（TP2+EP2）上的新 Triton 配置 — [PR #39153](https://github.com/sgl-project/sglang/pull/39153)

- **KV Cache 使用率指标**：新增 Prometheus gauge `kv_cache_usage_perc` — [PR #34714](https://github.com/sgl-project/sglang/pull/34714) 补齐了与 vLLM 长期存在的功能差距

- **FlashInfer Checkpoint 集成**：KDA prefill checkpoint 现已支持 radix 前缀缓存 — [PR #41400](https://github.com/sgl-project/sglang/pull/41400)

- **HiCache Decode Offload 修复**：回退前等待 decode offload 完成以避免数据竞争 — [PR #30899](https://github.com/sgl-project/sglang/pull/30899)

- **DeepSeek-V4.1 性能疑问**：社区反馈 4× RTX PRO 6000 上 prefill 约 2-7K tok/s，而 vLLM/marlin 报告约 12.5K — [Issue #33422](https://github.com/sgl-project/sglang/issues/33422) 寻求调优指导

---

## 稳定性与回退

- **流式输出丢 token**：解token器状态在请求中途被驱逐导致静默丢失最多 5 个 token — [Issue #41236](https://github.com/sgl-project/sglang/issues/41236)（严重级别）

- **客户端断连导致崩溃**：未捕获的 `asyncio.CancelledError` 崩溃整个引擎 — [Issue #39216](https://github.com/sgl-project/sglang/issues/39216)（严重级别）

- **DSpark + TP Grammar 死锁**：带 grammar 约束的请求与其他任意请求同批次会导致 GPU 死锁 — [Issue #41449](https://github.com/sgl-project/sglang/issues/41449)

- **DisallowedTokensLogitsProcessor 崩溃**：两个并发请求使用不同 token_ids 时服务器崩溃 — [Issue #41471](https://github.com/sgl-project/sglang/issues/41471)

- **Abort Request 前缀匹配 bug**：`/abort_request` 使用前缀 rid 会中止所有匹配请求 — [Issue #41474](https://github.com/sgl-project/sglang/issues/41474)

- **多节点自定义 All-Reduce 回退**：Llama-4 TP8 在 GB300 上因 custom all-reduce v2 被拒导致约 19% 性能回退 — [Issue #36429](https://github.com/sgl-project/sglang/issues/36429)

- **CUDA 崩溃追踪**：CI 已记录 320+ 事件 — [Issue #26340](https://github.com/sgl-project/sglang/issues/26340)

---

## 这对应用开发者的意义

1. **如果你部署 DeepSeek-V4.1**：AMD gfx950 支持现已可用；关注 [PR #41308](https://github.com/sgl-project/sglang/pull/41308) 的生产就绪状态

2. **如果你使用流式输出**：Token 丢失 bug（[#41236](https://github.com/sgl-project/sglang/issues/41236)）影响高并发场景；修复前考虑减少并发状态或分批处理

3. **如果你使用投机解码**：TP 下的 grammar 约束投机解码可能死锁（[#41449](https://github.com/sgl-project/sglang/issues/41449)）；当前请避免这种组合

4. **如果你需要 KV cache 监控**：新增的 `kv_cache_usage_perc` gauge 提供与 vLLM 相同能力 — 可用后即可升级

5. **如果你使用 XPU**：W4A16 量化现已支持 — [PR #40828](https://github.com/sgl-project/sglang/pull/40828) 开启了压缩张量工作流

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this English llama.cpp digest into Chinese. I need to:

1. Translate the content into Simplified Chinese
2. Keep all Markdown structure exactly as-is
3. Keep URLs, issue numbers, code identifiers as-is
4. Use natural technical Chinese register (like a Chinese developer newsletter)
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate while preserving the structure:

- Headings
- Tables (with alignment)
- Lists
- Bold/italic
- Horizontal rules
- URLs
- Issue/PR references

I'll go through section by section:

## Today's Highlights -> 今日要闻

The project continues heavy backend optimization work... -> 项目继续进行大量的后端优化工作...

Let me translate this fully now:</think>

# llama.cpp 动态 — 2026-09-28

## 今日要闻

项目继续进行大量的后端优化工作，包括多项针对性修复：Vulkan GDN 内核针对 Intel GPU 进行了调优，CUDA roll 操作现已支持非连续张量，AVX512-FP16 浮点溢出问题得到修复。值得注意的是，服务器端新增了对 Qwen3/Qwen3-VL 因果重排序模型的 RANK 池化批处理分割支持，RPC 后端也获得了可配置的调试日志级别。同时，GLM-5.3-Flash（320B 混合文本-视觉模型）支持已合并。

---

## 版本发布与重大变更

| 提交 | 描述 | PR |
|------|------|-----|
| b11223 | Server：支持因果 LLM 重排序器（Qwen3、Qwen3-VL）的 RANK 池化批处理分割 | [#28876](https://github.com/ggml-org/llama.cpp/pull/28876) |
| b11222 | Common：消除参数解析的副作用；无条件注册 --rpc | [#29537](https://github.com/ggml-org/llama.cpp/pull/29537) |
| b11221 | Common：`string_split<T>` 遇到无效值时抛出异常而非静默失败 | [#29518](https://github.com/ggml-org/llama.cpp/pull/29518) |
| b11212 | Common：grammar 缺少 llguidance 时抛出异常而非中止程序 | [#29516](https://github.com/ggml-org/llama.cpp/pull/29516) |

**暂无重大变更报告** — 均为增量式改进或内部行为调整。

---

## 新模型与硬件支持

- **GLM-5.3-Flash** — 320B 混合模型，支持文本和视觉；包含 34 层 KDA 线性和 11 层 DSA，采用 mHC 和 DeLight 架构。详见 PR [#27773](https://github.com/ggml-org/llama.cpp/pull/27773)。
- **Qwen3 与 Qwen3-VL 重排序器** — 现已支持 RANK 池化批处理分割，可高效运行因果 LLM 驱动的重排序推理。
- **IBM zDNN 后端** — 已加入 CI 构建流程（测试暂未启用）。PR [#29541](https://github.com/ggml-org/llama.cpp/pull/29541)。

---

## 性能优化

| 领域 | 变更 | 影响 |
|------|------|------|
| **Vulkan GDN** | Intel GPU 内核调优 | RTX 3090 提升约 6.3%（ubatch 2048/4096） |
| **CUDA Roll** | 使用字节步长处理非连续张量 | 支持非连续数据上的 roll 操作；修复了 test-backend-ops |
| **AVX512-FP16** | f16 点积在 f32 中累加 | 修复溢出；确保开启/关闭 AVX512-FP16 时 logits 一致 |
| **SYCL FWHT** | 支持 1024、2048、4096、8192 分块宽度的内核 | [#29243](https://github.com/ggml-org/llama.cpp/pull/29243) |
| **CUDA FlashAttention** | 针对 40–112 头维度的 FP16 tile 配置调优 | [#26289](https://github.com/ggml-org/llama.cpp/pull/26289) |
| **HIP fattn-mma** | 在 cdna 架构上启用 dkq > 256 的大批次场景 | [#28907](https://github.com/ggml-org/llama.cpp/pull/28907) |
| **Vulkan argsort** | 修复 Adreno GPU 的内核选择逻辑 | [#29469](https://github.com/ggml-org/llama.cpp/pull/29469) |
| **RPC Debug** | `GGML_RPC_DEBUG` 改为日志级别（0–3） | [#29544](https://github.com/ggml-org/llama.cpp/pull/29544) |

---

## 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 备注 |
|------|----------|------|------|
| [#29104](https://github.com/ggml-org/llama.cpp/issues/29104) — server 在被 VictoriaMetrics 抓取 /metrics 时静默停止 | 高 | 待处理 | CUDA + Windows；10 条评论 |
| [#27428](https://github.com/ggml-org/llama.cpp/issues/27428) — draft-mtp 在多 GPU 层分割时使提示处理减半 | 高 | 待处理 | 单 GPU 正常；CUDA 环境 |
| [#19466](https://github.com/ggml-org/llama.cpp/issues/19466) — 视觉模型的 KV 缓存保存失败 | 中 | 已关闭 | 41 条评论；2026-09-27 重新打开 |
| [#29499](https://github.com/ggml-org/llama.cpp/issues/29499) — aarch64 Jetson Orin NX 在 b9016 重构后挂起 | 中 | 待处理 | L4T 36.4.7 |
| [#29494](https://github.com/ggml-org/llama.cpp/issues/29494) — repeat_last_n / dry_penalty_last_n 无界限，导致 OOM | 中 | 待处理 | Server 分配了数 GB 的零缓冲区 |
| [#29473](https://github.com/ggml-org/llama.cpp/issues/29473) — Snapdragon 7 Gen 4 上的 ggml-hexagon：HMX MUL_MAT 返回 inf | 中 | 待处理 | HTP v73 |

**已合并的修复：**

- [#29476](https://github.com/ggml-org/llama.cpp/pull/29476) — Vulkan GDN 内核调优（Intel 性能提升）
- [#29542](https://github.com/ggml-org/llama.cpp/pull/29542) — Windows 静态测试构建：修复未初始化的计时器

---

## 对应用开发者的意义

1. **重排序工作负载** — Qwen3/Qwen3-VL 重排序器现支持批处理推理，可显著提升检索增强生成流水线的吞吐量。

2. **量化路线图** — IQ2_NL 和 IQ3_NL 类型正在推进审核流程（PR #27983、#27325、#27324、#27322），目标是改善非 256 元素超分块边界对齐的张量质量。

3. **Intel Vulkan 用户** — GDN 内核修复在集成显卡上提供了可观的性能提升（约 6%）。

4. **RPC 调试** — 新的日志级别（`GGML_RPC_DEBUG=1/2/3`）使分布式推理问题的诊断更加便捷。

5. **视觉模型** — 请注意多模态模型的 KV 缓存保存/恢复仍存在问题（#19466）；在问题修复前，请勿依赖 `/slots/{id}/action=save` 来保存视觉模型的上下文。

---

*数据来源：github.com/ggml-org/llama.cpp — 2026-09-28 数据汇总*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Chinese, maintaining the exact Markdown structure while using natural technical Chinese (the register of a Chinese developer newsletter). Let me carefully go through and translate each section.

Key points:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, issue/PR references, code, numbers, dates as-is
4. Use natural technical Chinese

Let me translate section by section:</think>

# Ollama 速报 — 2026-09-28

## 今日要点

过去 24 小时内无新版本发布。Issue 队列显示多个高影响力的稳定性问题：RTX 5090 上 Cohere MoE 模型出现**关键 CUDA 非法内存访问**、缓存命中时 llama-server **卡死**导致后续请求全部挂起，以及 deepseek-v4.1-flash **静默丢弃图片输入**的缺陷。另一方面，多项解析器和 API 改进已合并，包括新的 **System One 评分 API**、**token 预算限制 thinking**，以及 Qwen3/Gemma4 工具调用处理修复。

---

## 版本发布与破坏性变更

| 状态 | 项目 | 详情 |
|------|------|------|
| — | **过去 24 小时无发布** | — |

---

## 新模型与硬件支持

| 组件 | 更新 | PR/Issue |
|------|------|----------|
| MLX | 功能请求：**MLX 共享模型权重实现并发推理** — 在 Apple Silicon 上支持大模型并发运行 | [#18669](https://github.com/ollama/ollama/issues/18669) |

---

## 性能与优化

| 领域 | 变更 | 影响 | PR/Issue |
|------|------|------|----------|
| VRAM 预测 | **在 PredictServerVRAM 中同步 GraphSize KV 统计** — 修复近期更新中 Qwen 模型加载问题 | 提升 GGML→llama-server 迁移时的调度器精度 | [#17615](https://github.com/ollama/ollama/pull/17615) |
| API | **新增 System One 评分 API** — `POST /v1/systemone` 使用本地 Nimble 和 Tev 模型进行结构化决策 | 评分/分类任务的新端点 | [#18606](https://github.com/ollama/ollama/pull/18606) |
| Thinking | **通过 token 预算限制 thinking** — 支持按请求或按模型控制，防止无限推理循环 | 防止上下文耗尽；减少 token 浪费 | [#17566](https://github.com/ollama/ollama/pull/17566) |
| Thinking | **在行尾而非单词中间结束已耗尽的推理预算** | 推理预算耗尽时输出更干净 | [#18212](https://github.com/ollama/ollama/pull/18212) |
| 工具调用 | **Qwen3.5: 工具调用可在 thinking 通道关闭前开启** — 解析器重叠修复 | 修复流式输出中的畸形工具调用 | [#18624](https://github.com/ollama/ollama/pull/18624) |
| 工具调用 | **Glimmer: 关闭 thinking 时在消息头结束自由文本** | 修复 `think: false` 时首个 JSON 字段丢失问题 | [#18687](https://github.com/ollama/ollama/pull/18687) |
| 工具调用 | **丢弃不匹配的 thinking 关闭标签** (Gemma4) | 防止标签泄漏到输出 | [#18288](https://github.com/ollama/ollama/pull/18288) |
| 工具调用 | **Gemma4: 恢复缺失闭合花括号的已完成工具调用** | 更优雅地处理截断的工具调用 | [#17565](https://github.com/ollama/ollama/pull/17565) |
| 工具调用 | **Qwen3-Coder: 容忍缺失关闭标签，停止重写参数值** | 长时间 agentic 任务中更健壮 | [#17914](https://github.com/ollama/ollama/pull/17914) |
| 工具调用 | **在 Responses API 中保留命名空间工具标识** | 使 Codex 能正确路由到对应的 MCP 工具 | [#16263](https://github.com/ollama/ollama/pull/16263) |
| 解析器 | **工具调用开启标签在块边界丢失** — DeepSeek3、Cogito、LFM2 解析器 | 解析器状态相关故障 | [#18681](https://github.com/ollama/ollama/issues/18681) |
| 解析器 | **Olmo3: 终端块中的工具调用绕过解析** | 工具调用被静默丢弃或作为内容发出 | [#18676](https://github.com/ollama/ollama/issues/18676) |
| MLX (Linux) | **mlxrunner 链接 libdl** — 修复 glibc <2.34 上的构建问题（如 Debian 11） | 老旧 Linux 系统上构建成功 | [#17567](https://github.com/ollama/ollama/pull/17567) |
| 调度器 | **当两个 tag 共享一个 blob 但需要不同的 runner 标志时重新加载** | Modelfile 变体的正确行为 | [#18289](https://github.com/ollama/ollama/pull/18289) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 影响 | 修复 PR？ |
|----------|------|------|----------|
| **严重** | **RTX 5090 上 Cohere MoE 架构的 CUDA 非法内存访问 (MUL_MAT)** — Windows 11 | llama-server 以 `0xc0000409` 崩溃 | — |
| **高** | **缓存完全命中时 llama-server 卡死** — Linux 上的 CUDA (RTX 5060 Ti, v0.34.4) | 该模型的所有后续请求挂起直到卸载 | — |
| **高** | **deepseek-v4.1-flash 静默丢弃所有图片输入** — 报告 `vision` 能力但忽略图片 | 用户收到"看不到图片"的回复而无错误提示 | — |
| **高** | **llama-server 在使用 `OLLAMA_KV_CACHE_TYPE=q8_0` 时崩溃转储** — GPT-OSS | 服务崩溃；此前在 #11685 中已修复但在 commit 19e6796 中代码被删除 | — |
| **中** | **Intel UHD 0x4626 未被 Vulkan 后端检测到** — Windows, Ollama 0.34.4 | 英特尔集成显卡无 GPU 加速 | — |
| **中** | **OLLAMA_GPU_OVERHEAD 被 llama-server 后端忽略** — 通过 `--fit` 进行层放置 | 未保留 VRAM；模型可能 OOM | — |
| **中** | **Anthropic-compat: system-role 消息被提升到系统块** — 破坏前缀缓存效果 | 前缀缓存对 Claude Code 工作流无效 | — |
| **中** | **typical_p 参数不再受支持** — 导致 SillyTavern 1.18.0 等无法省略该参数的客户端崩溃 | API 与现有客户端不兼容 | [#18542](https://github.com/ollama/ollama/issues/18542) |
| **中** | **Cloud API: 信用卡消费模式迁移后未暴露信用额度** | 用户无法查看真实消费情况 | — |
| **中** | **MLX nvfp4 模型在内存压力下极慢** — MacOS (qwen3.6:27b-nvfp4, qwen3.5:27b-coding-nvfp4) | 简单提示词约需 2 分钟（v0.20.0 回归） | — |
| **低** | **账单: 账户卡在 Stripe 循环中** — 未支付发票自动重试，客服无响应 | 阻止用户使用 Cloud 或升级 | — |

---

## 这对应用开发者意味着什么

1. **避免在 RTX 5090 (Windows) 上使用 Cohere MoE** — 已知 CUDA 内存访问 bug 导致崩溃；考虑使用其他 GPU 或等待修复。

2. **注意 CUDA/Linux 上的缓存命中卡死问题** — 如果看到缓存完全命中后请求挂起无响应，可能需要卸载/重新加载模型（影响 v0.34.4）。

3. **视觉模型可能静默失败** — deepseek-v4.1-flash 报告视觉能力但实际丢弃图片；请验证图片输入是否真正被处理。

4. **规划 thinking token 预算** — 新的按请求/按模型 token 预算功能可防止无限推理循环（对 Gemma 4 和 agentic 工作流很有用）。

5. **API 注意: typical_p 已移除** — 如果使用 SillyTavern 等发送 `typical_p` 的客户端可能会出问题；更新客户端或服务端。

6. **社区集成扩展** — 新增集成：Arynwood MCP（Linux 桌面版）、AI Novel Writer、since-cutoff CLI。

7. **Linux MLX 构建现已可用** — 修复了老旧 glibc 版本上的链接问题；Linux 上的 MLX 推理更易用了。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the digest into Chinese. I need to:
1. Translate the content while preserving the Markdown structure
2. Keep URLs, issue numbers, code identifiers as-is
3. Use natural technical Chinese register
4. Preserve formatting like tables, lists, headings

Let me go through and translate:

Title: "LiteLLM Digest — 2026-09-28" → "LiteLLM 要闻 — 2026-09-28"

"Today's Highlights" → "今日要点"

"TheLiteLLM project continues active Rust gateway development" → "LiteLLM 项目持续推进 Rust 网关开发"

I need to translate the entire piece while keeping all the formatting intact. Let me work through this carefully.</think>

# LiteLLM 要闻 — 2026-09-28

## 今日要点

LiteLLM 项目持续活跃推进 Rust 网关开发，新增多项架构优化。与此同时，多个影响回退路由和成本追踪的关键 bug 仍在积极讨论中。最紧迫的问题是路由器 bug 导致成功回退后返回 null 响应体，可能在生产环境中造成静默故障。

---

## 发布与重大变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **Tsubasa provider** | 新增 provider，支持路由和仪表板发现 | [#43502](https://github.com/BerriAI/litellm/pull/43502) |
| **Cohere Command A+ in Azure** | 新增 Azure 模型支持 | [#32628](https://github.com/BerriAI/litellm/issues/32628) (已关闭) |
| **Mistral Document AI OCR / Mistral 3.5 Medium** | 新增 Azure 模型支持 | [#32637](https://github.com/BerriAI/litellm/issues/32637) (已关闭) |
| **Vertex AI mREP** | 多区域端点支持现已可用 | [#23766](https://github.com/BerriAI/litellm/issues/23766) (已关闭) |

---

## 性能与优化

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **Rust: 原生 Python 推理 opt-in** | 新增 `python-bridge` 路由，支持 chat completions、responses 和 inference | [#43465](https://github.com/BerriAI/litellm/pull/43465) |
| **Rust: 结构化路由生命周期追踪** | 新增诊断模块，覆盖 audio transcription、chat、messages、OCR、responses、websocket 路径 | [#43466](https://github.com/BerriAI/litellm/pull/43466) |
| **Sail: 按调用方 completion_window 计费** | Chat 请求现根据 `metadata.completion_window`（`asap`/`balanced`/`flex`）计费 | [#43477](https://github.com/BerriAI/litellm/pull/43477) |
| **流式传输: 提前失败日志** | 首个字节前就失败的 text completion 流现正确记录 | [#43505](https://github.com/BerriAI/litellm/pull/43405) |
| **Responses API: 保留签名 thinking** | 流式 thinking 文本不再重复 | [#40673](https://github.com/BerriAI/litellm/pull/40673) |
| **DashScope 图像参数** | `watermark` 和 `negative_prompt` 现正确传递至顶层 | [#43208](https://github.com/BerriAI/litellm/pull/43208) |

---

## 稳定性与回归问题

### 严重

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#43165](https://github.com/BerriAI/litellm/issues/43165) | **路由器回退返回 null 响应体** — 主请求超时（非流式）后成功回退时，返回 HTTP 200 但 `null` 而非实际完成内容 | 进行中 — 15 条评论 |
| [#42161](https://github.com/BerriAI/litellm/issues/42161) | **流式请求计费为 0** — 当 `provider_response_model` 是价格映射中缺失的 slug（如旧的 Anthropic build）时 | 进行中 — 7 条评论 |
| [#41295](https://github.com/BerriAI/litellm/issues/41295) | **虚拟密钥模型白名单绕过** — Azure 直通路由上存在权限漏洞，任何经过认证的虚拟密钥都可调用范围外的 Azure 部署 | 进行中 — 2 条评论 |

### 高优先级

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#43157](https://github.com/BerriAI/litellm/issues/43157) | `sanitize_input_schema_for_anthropic` 丢弃根级 `anyOf`/`$ref` union 工具定义，导致 Pydantic 生成的 schema 失效 | 进行中 — 7 条评论 |
| [#38674](https://github.com/BerriAI/litellm/issues/38674) | **Token 用量记录为 0** — Responses API WebSocket 模式（`_aresponses_websocket`）无法追踪，Agent CLI 流量成本统计失效 | 进行中 — 2 条评论 |
| [#43214](https://github.com/BerriAI/litellm/issues/43214) | `RouterBudgetLimiting` 将 `max_budget=0` 视为无限制而非阻止所有支出 | 进行中 — 3 条评论 |
| [#43010](https://github.com/BerriAI/litellm/issues/43010) | `/v1/responses` 流式传输使用 Anthropic 时，reasoning `encrypted_content` 中的 thinking 文本重复 | 进行中 — 2 条评论 |

### 中等 / 已修复

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#33323](https://github.com/BerriAI/litellm/issues/33323) | `max_budget_limiter` 在用户支出查询异常时开放（fail open） | 已关闭 |
| [#30731](https://github.com/BerriAI/litellm/issues/30731) | LLM-as-a-judge guardrail 异常开放 — 缺少 `overall_score` 时默认 100（通过） | 已关闭 |
| [#23990](https://github.com/BerriAI/litellm/issues/23990) | OTEL 回调从不报告 reasoning/cache 令牌拆分 | 已关闭 |

---

## 对应用开发者的影响

1. **回退行为不可靠** — 若你使用 LiteLLM 路由器的回退逻辑处理非流式请求，请注意超时可能返回 `null` 响应。在 #43165 修复前，请仔细监控下游日志。

2. **成本追踪缺口** — 多个问题（#42161、#38674）导致有效请求计费为 $0。若你使用流式传输或旧版模型构建，你的成本日志可能存在少计。

3. **新 Rust 网关特性** — 实验性 Rust 后端正在增加认证/授权分离、虚拟密钥存储、MCP 网关支持和 UI 登录功能。这些尚未生产就绪，但指明了未来架构方向。

4. **Provider 集成** — Tsubasa 现已可用作新 provider。若你在政府区域使用 OCI GenAI，端点解析现正常工作（#43180）。

5. **Schema 处理** — 由 Pydantic `Union` 生成的 Anthropic 工具 schema 可能因 sanitize 剥离 `anyOf` 而失效。当前如使用 Anthropic 工具，请考虑扁平化 schema。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this Unsloth digest into Chinese, following very specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully:

## Today's Highlights

Unsloth shipped significant infrastructure updates today: prebuilt CUDA 13 wheels for Flash-Attention 2.8.4, Causal-Conv1D 1.7.0, and Mamba-SSM 2.3.2 on Python 3.13 with PyTorch 2.13/2.14 support, plus torch ceiling raised to `<2.15.0`. On the Studio side, multiple PRs landed improving multi-model serving, terminal tool stability, and macOS IME compatibility. A notable performance fix addresses 4-15x slowdowns in block-FP8 LoRA training on modern GPUs.

- "shipped" = 发布
- "infrastructure updates" = 基础设施更新
- "prebuilt wheels" = 预构建 wheel 包
- "multi-model serving" = 多模型服务
- "terminal tool stability" = 终端工具稳定性
- "macOS IME compatibility" = macOS 输入法兼容性
- "notable" = 值得注意的是
- "performance fix" = 性能修复

## Releases & Breaking Changes

- **prebuilt-wheels-cu13** — New Linux x86_64 CUDA 13 wheels for flash-attn 2.8.4, causal-conv1d 1.7.0, and mamba-ssm 2.3.2.post1, built for PyTorch 2.13 and 2.14 on Python 3.13. 

This release introduces new CUDA 13 wheels optimized for the latest deep learning frameworks. The packages include updated versions of flash-attn, causal-conv1d, and mamba-ssm, all compiled for Python 3.13 with support for PyTorch 2.13 and 2.14, targeting the Linux x86_64 architecture. I notice the release introduces Python 3.13 support for torch 2.13 in Linux cu130 Studio installations. There are two key additions: ModelScope integration allowing Chinese model mirror usage, and Gigatoken tokenizer backend support. The release also includes performance improvements with block-FP8 LoRA training speedup addressing a significant regression issue.

The block-FP8 LoRA training previously experienced dramatic slowdowns across different GPU models, with performance degradation ranging from 3.7 to 14.9 times compared to bf16 baseline. Specific GPU impacts include RTX PRO 6000 showing 8.9x slowdown, L4 experiencing 14.9x slowdown, and H100 demonstrating 7.9x slowdown.

Performance improvements involve strategic fixes: running FP8 linears more efficiently, correcting scale axis calculations, enabling 4-bit NF4 fallback for block-FP8, and enhancing MLX memory estimation for Apple Silicon.

Developers should prioritize updating to the latest version to leverage the significant training speed enhancements, particularly those working with block-FP8 checkpoints. The upgrade addresses critical performance bottlenecks across multiple GPU architectures.

The update resolves several platform-specific issues, including Mac OS Pinyin IME compatibility, terminal command processing, and modern GPU FP8 row handling. These fixes ensure more stable and reliable performance across different hardware configurations.

For users in restricted regions, the new ModelScope integration provides a crucial workaround for accessing Hugging Face models. Developers can now simultaneously serve multiple models, enhancing flexibility in inference and deployment scenarios.

The core issue involves significant memory consumption during fine-tuning, with VRAM usage exceeding documented expectations. Multiple critical and medium-severity bugs impact terminal tools, model interactions, and system stability, including microphone access limitations and potential infinite loop scenarios.</think>

# Unsloth 动态 — 2026-09-28

## 今日要点

Unsloth 今日发布了重要的基础设施更新：针对 CUDA 13 的预构建 wheel 包，支持 Flash-Attention 2.8.4、Causal-Conv1D 1.7.0 和 Mamba-SSM 2.3.2，适配 Python 3.13 与 PyTorch 2.13/2.14，同时将 torch 版本上限提升至 `<2.15.0`。在 Studio 方面，多个 PR 上线，改进了多模型服务、终端工具稳定性以及 macOS 输入法兼容性。值得注意的是，一个性能修复解决了现代 GPU 上 block-FP8 LoRA 训练速度下降 4-15 倍的问题。

## 发布与重大变更

- **prebuilt-wheels-cu13** — 新增 Linux x86_64 CUDA 13 wheel 包，适用于 flash-attn 2.8.4、causal-conv1d 1.7.0 和 mamba-ssm 2.3.2.post1，为 Python 3.13 编译，支持 PyTorch 2.13 和 2.14。（[Release](https://github.com/unslothai/unsloth/releases)）

- **Torch 版本上限提升至 `<2.15.0`** — PR #12152 将 PyTorch 版本上限从 `<2.13.0` 提升至 `<2.15.0`，在 Linux cu130 Python 3.13 安装中启用 torch 2.13。（[#12152](https://github.com/unslothai/unsloth/pull/12152)）

- **Pip extras 支持 torch 2.13/2.14** — PR #12151 新增 Core pip extras（`cu126onlytorch2130`、`cu130onlytorch2130` 等），并更新了自动安装辅助工具。（[#12151](https://github.com/unslothai/unsloth/pull/12151)）

- **Studio torch 2.13 推送** — PR #12150 将 torch 2.13 部署到新的 Linux cu130 Python 3.13 Studio 安装环境，同时保留现有安装。（[#12150](https://github.com/unslothai/unsloth/pull/12150)）

## 新模型与硬件支持

- **ModelScope 集成** — 问题 #11529 已解决；中国模型镜像（ModelScope）现已支持，用于替代被封锁地区的 Hugging Face 访问。（[#11529](https://github.com/unslothai/unsloth/issues/11529)，[PR #11761](https://github.com/unslothai/unsloth/pull/11761)）

- **Gigatoken tokenizer 后端** — 功能请求 #12072 提议支持 Gigatoken 作为高吞吐量 tokenizer，具备 HF 兼容接口。（[#12072](https://github.com/unslothai/unsloth/issues/12072)）

- **FBGEMM 回退机制支持 rowwise FP8** — PR #12098 为没有对应内核的 GPU（RTX PRO 6000 / RTX 5090，sm120）添加了 FBGEMM rowwise FP8 回退方案。（[#12098](https://github.com/unslothai/unsloth/pull/12098)）

- **多模型服务** — PR #11591 启用 Studio 多模型同时加载功能，提供「保持其他模型加载」开关。（[#11591](https://github.com/unslothai/unsloth/pull/11591)）

## 性能与优化

- **Block-FP8 LoRA 训练加速** — PR #12027 修复了一个重大性能回归问题：block-FP8 LoRA 训练曾比 bf16 慢 4-15 倍（RTX PRO 6000：8.9 倍，L4：14.9 倍，H100：7.9 倍，B200：3.7-6.5 倍）。该修复通过 8 个 warp 处理 128 行 GEMM 瓦片来激进执行 FP8 线性运算。（[#12027](https://github.comunslothai/unsloth/pull/12027)）

- **Rowwise FP8 scale 轴修正** — PR #11799 修正了 fused LoRA 反向传播中 rowwise FP8 scale 沿错误轴应用的静默错误。（[#11799](https://github.com/unslothai/unsloth/pull/11799)）

- **Block-FP8 转换为 4-bit** — PR #12146 支持在显式传入 `load_in_4bit=True` 时将 block-FP8 检查点以 4-bit NF4 格式加载。（[#12146](https://github.com/unslothai/unsloth/pull/12146)）

- **MLX 内存规划** — PR #10287 为 Apple Silicon MLX 添加内存估算到「加载模型」面板。（[#10287](https://github.com/unslothai/unsloth/pull/10287)）

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | #4504: 微调实际显存占用远高于文档宣传值，导致大模型 OOM | 开放 — 22 条评论 |
| **高** | #12084: 终端工具在处理 `VAR=$VAR` 自引用赋值时硬冻结（预分发扫描中无限递归） | 开放 |
| **中** | #12048: 工具调用在超过最大时长后永久卡在「运行中」状态 | 开放 — 修复进行中 |
| **中** | #12137: macOS 拼音输入法阻止回车键发送消息 | 开放 — 修复 PR #12138 |
| **中** | #11953: dense-quant 探测在每个 GPU 上固定 CUDA 上下文（空闲时约 360 MB） | 已关闭 |
| **中** | #12009: `unsloth start opencode` 忽略 max_tokens 参数，始终限制在 8192 tokens | 开放 — 修复 PR #12111 |
| **低** | #12140: Bitdefender 误报 Windows 安装包 | 开放 |
| **低** | #12058: 有效的 MCP 图片偶发「无效 base64 值」错误 | 开放 |

## 这对应用开发者的意义

1. **如果你使用 block-FP8 检查点**：请尽快升级 — PR #12027 带来了大规模训练加速（L4 上最高 15 倍）。同时关注 PR #12146 新增的 4-bit 回退功能，用于混合量化工作流。

2. **如果你在 macOS 上运行 Studio**：拼音输入法 bug（#12137）已在 PR #12138 中修复；回车键行为将恢复正常。

3. **如果你使用终端工具**：PR #12087 修复了凭证扫描卡顿问题；包含 shell 变量扩展的终端命令不再面临无限阻塞风险。

4. **如果你面向现代 GPU（RTX PRO 6000/5090）**：Rowwise FP8 现可通过 PR #12098 优雅回退，而非直接崩溃。

5. **如果你需要中国模型源**：ModelScope 已集成（#11529），解决了受限地区用户的 HF 访问问题。

6. **如果你需要多模型推理**：Studio 现支持同时服务多个模型（#11591）— 适用于 A/B 测试或集成工作流。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*