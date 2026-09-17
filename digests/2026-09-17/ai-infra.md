# AI 基础设施日报 2026-09-17

> 生成时间: 2026-09-17 00:50 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire report into Chinese. Let me go through it carefully and translate it while preserving the exact structure, formatting, and technical terms.

I need to:
1. Translate all the content into Chinese
2. Keep all Markdown structure (headings, tables, horizontal rules, etc.)
3. Keep technical terms, code references, issue numbers, project names as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate section by section.</think>

# AI 基础设施生态系统报告 — 2026 年 9 月 17 日

---

## 1. 生态系统概览

AI 推理服务基础设施层正经历多维度的快速成熟：Blackwell（SM120）架构支持在 vLLM 和 SGLang 中趋于稳定，而 llama.cpp 通过 MTP + CUDA graph 融合推进本地推理的边界。网关层（LiteLLM）持续扩展多云能力，新增 AWS 和 Azure 集成。与此同时，微调工具（Unsloth）面临越来越大压力，需要与云端推理 API 对齐，因为企业正在将部署流水线标准化。云端推理引擎与本地运行时的界限正在收窄，驱动因素是跨部署场景的功能一致性需求。

---

## 2. 活跃度对比

| 项目 | 活跃 Issue 数 | 24h 内合并 PR | 24h 内发布 | 主要关注领域 |
|------|---------------|---------------|------------|---------------|
| **vLLM** | ~17 个 | 20+ | 0 | Blackwell/SM120 修复、DeepSeek V4.1、GDN 内核 |
| **SGLang** | 高（312 条评论在追踪器上） | 20 | 0 | DeepSeek V4.1 vision、ROCm GLM-5、权重缓存守护进程 |
| **llama.cpp** | ~10 个 | 11 | **11** | Vulkan 变通方案、MTP+CUDA graph、Hexagon K-Quant |
| **Ollama** | ~12 个 | 8 | 0 | MLX 内存、Windows 清理、工具调用修复 |
| **LiteLLM** | ~11 个 | 12+ | 2（dev+rc） | Redis bug、AWS Transcribe、限流器修复 |
| **Unsloth** | ~10 个 | 4+ | 1 | Windows-ARM64、Docker 修复、SSRF 安全修复 |

**关键观察**：llama.cpp 发布速度领先（11 次发布），反映了其作为高频维护项目的角色。SGLang 和 vLLM 的 PR 活动最活跃，表明正处于大力功能开发阶段。LiteLLM 的双版本发布（dev + rc）预示 v1.102 稳定版即将发布。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-------------|------|--------|-----------|--------|----------|
| **DeepSeek-V4.1-Flash** | ✅（SM120）| ✅（vision）| — | — | — |
| **DeepSeek-V4.1 Cloud** | — | — | — | ⚠️（推理不匹配）| — |
| **Qwen3.8-Flash-Next** | ✅（部分）| ✅ | — | — | — |
| **Qwen3.6-27B** | — | — | ⚠️（上下文回归）| ✅ | — |
| **GLM-5.2** | ✅ | ✅（ROCm）| — | — | — |
| **GLM-5.3** | — | ✅（Zero-RoPE）| — | — | — |
| **Gemma 4** | ✅ | ✅ | ⚠️（MTP 崩溃）| ✅ | — |
| **MiniMax M3** | ✅ | ✅ | — | — | — |
| **Kimi-K3/DSpark** | ✅（验证器）| ✅ | — | — | — |
| **Mistral Small 4** | — | — | — | 📋（已请求）| — |
| **HrmTextForCausalLM** | — | — | ✅ | — | — |

**竞赛态势**：SGLang 和 vLLM 在前沿模型支持上并驾齐驱，双方均优先支持 DeepSeek-V4.1 和 Qwen3 系列。llama.cpp 通过 K-Quant 和 Hexagon 扩展保持广度。Ollama 在前沿模型上落后，但在本地部署的易用性上领先。

---

## 4. 性能前沿

| 优化领域 | 领先项目 | 关键进展 |
|----------|----------|----------|
| **KV Cache** | vLLM | 元数据 GET 方法恢复（#56925）、DCP 槽位映射修复（#57260）|
| **Batching** | vLLM | GDN 前缀缓存 MTP 下 bug 修复（#52244）、批次不变性 SP 下仍有问题（#56370）|
| **量化** | llama.cpp | Hexagon 上 K-Quant Q4_K/Q6_K、IQ3_S Blackwell 修复待处理|
| **分布式推理** | vLLM + SGLang | PCP 数据并行（#57075）、DeepGEMM 预热在性能分析前（#57258）|
| **内核融合** | SGLang | Qwen3-Next AITER 融合 GDN（4 内核 → 1）、GLM-5.2 ROCm DSA（12 → 4）|
| **投机解码** | vLLM | Mamba 每请求独立缓冲区（#57261）、DSpark 验证器紧凑后缀|
| **本地推理** | llama.cpp | MTP + CUDA graph 已启用（#28549）、RPC 图缓存失效|
| **MLX/CUDA 内存** | Ollama | 预算使用空闲 GPU 内存 95%（#18481）、加载进度 + 停滞检测|

**前沿评估**：vLLM 在生产推理优化（KV cache、分布式）上领先。SGLang 在内核级 ROCm 性能上领先。llama.cpp 在本地/边缘场景推进最快。Ollama 和 Unsloth 专注于开发者体验而非原始性能。

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────────────────┐
│  网关 / 抽象层                                                   │
│  ┌──────────────┐                                              │
│  │ LiteLLM      │  多云代理、密钥管理、                         │
│  │              │  可观测性、限流                               │
│  └──────────────┘                                              │
├─────────────────────────────────────────────────────────────────┤
│  云原生推理引擎                                                  │
│  ┌──────────────┐  ┌──────────────┐                            │
│  │ vLLM         │  │ SGLang       │  生产推理、                 │
│  │              │  │              │  投机解码、                 │
│  │              │  │              │  张量并行                    │
│  └──────────────┘  └──────────────┘                            │
├─────────────────────────────────────────────────────────────────┤
│  本地 / 桌面运行时                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ llama.cpp    │  │ Ollama       │  │ Unsloth      │          │
│  │              │  │              │  │              │          │
│  │              │  │              │  │（训练）      │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
```

**定位分析**：

- **LiteLLM** 占据独特的网关/抽象层位置——它编排对任何后端（vLLM、Ollama、OpenAI、Anthropic、Bedrock）的调用，提供统一语义。没有直接竞争对手挑战这一位置。

- **vLLM vs SGLang**：两者都瞄准生产云端推理。vLLM 在企业采用和 Blackwell 领先上更有优势；SGLang 在 ROCm 优化和权重缓存守护进程的超低延迟上略胜。差距很小。

- **llama.cpp vs Ollama**：两者都服务于本地推理但理念不同。llama.cpp 是库优先方案（最大灵活性、量化深度）；Ollama 是应用优先方案（零配置、开箱即用）。Unsloth 作为微调层位于两者相邻位置。

---

## 6. 趋势信号

### 基础设施工程师应关注什么

| 信号 | 证据 | 影响 |
|------|------|------|
| **Blackwell（SM120）已可投入生产** | vLLM DeepSeek-V4.1 SM120 修复、CUDA graph 捕获 | 配备 B200/B300 硬件的组织现在可以部署前沿模型到生产环境 |
| **ROCm 正在与 CUDA 拉齐** | SGLang GLM-5.2 12→4 内核缩减、llama.cpp Hexagon K-Quant | AMD GPU 用户应测试 ROCm 后端；成本/性能差距在缩小 |
| **投机解码正在走向成熟** | vLLM Mamba 每请求独立缓冲区、llama.cpp MTP+CUDA graph | 符合条件的模型预期获得 2-3 倍吞吐量提升；注意确定性 bug（Qwen3.8 #54521）|
| **多云抽象正在整合** | LiteLLM AWS Transcribe、Microsoft Foundry A2A、Redis Enterprise 问题 | 网关模式正在胜出；跨供应商统一 API 减少供应商锁定 |
| **本地 + 云端一致性压力** | Unsloth Docker 持久化问题、Ollama macOS/Windows 工作 | 开发者在本地和_prod_ 期望相同行为；工具必须桥接这个差距 |
| **安全加固加速** | LiteLLM SSRF 修复、SafeUnpickler 白名单、Unsloth SSRF | 基础设施项目优先减少攻击面——检查你的版本 |
| **限流 bug 广泛存在** | LiteLLM 双重计数、vLLM 批次不变性 | 生产部署应在负载下测试限流行为；不要信任配置值 |

### Agent / 应用开发者建议

1. **如果部署到 Blackwell 硬件**：vLLM 是生产环境部署 DeepSeek/Qwen 模型最安全的选择。如果使用 AMD ROCm，测试 SGLang。

2. **如果构建多租户服务**：LiteLLM 的限流器 bug（#34140）意味着在你修复之前，限流会是配置值的两倍。考虑实现客户端侧 enforcement。

3. **如果使用工具调用**：关注 Ollama 的 MiniCPM5 修复（#18499）和 LiteLLM 的流式工具调用回归（#30053）——两者都影响 Agent 可靠性。

4. **如果进行本地部署的微调**：Unsloth 在 Qwen3.8 和预量化模型上的检查点问题表明，在生产发布前用实际推理进行测试。

5. **如果在生产中使用 Redis**：LiteLLM 的 CROSSSLOT 问题（#30065）与 Azure Redis Enterprise 是已知失败模式；验证你的 Redis 配置匹配你的部署拓扑。

---

*跨项目综合整理：vLLM、SGLang、llama.cpp、Ollama、LiteLLM、Unsloth — 2026 年 9 月 17 日*

---

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English digest into Simplified Chinese, following the detailed translation guidelines provided. Let me carefully translate each section while:

1. Preserving all Markdown structure exactly (headings, tables, lists, etc.)
2. Keeping URLs, issue/PR numbers, code identifiers as-is
3. Using natural technical Chinese, not literal translation
4. Translating the content while maintaining the newsletter voice
5. Using Chinese punctuation throughout

Let me go through section by section:

---

# vLLM 摘要 — 2026-09-17

## 今日要点

vLLM 项目今日继续在多个方向保持活跃开发。关键修复已合入，解决了 DeepSeek-V4.1-Flash 在 Blackwell (SM120) 架构上Serving时的稀疏 MLA 页表几何和 CUDA Graph 捕获问题。LMCache 的安全修复将缓存标识符绑定到媒体哈希、缓存盐和 LoRA 参数，以防止跨媒体缓存冲突。V1 引擎现在支持可选的停滞阶段诊断功能，通过 `VLLM_ENGINE_ITERATION_TIMEOUT_S` 大幅提升生产环境调试能力。

---

## 版本发布与重大变更

过去 24 小时内无版本发布。

---

## 新模型与硬件支持

- **DeepSeek-V4.1-Flash + DSpark**: SM120 稀疏 MLA 预填充支持现已包含正确的页表几何处理，以及多流执行时 CUDA Graph 捕获的回退方案 ([#57028](https://github.com/vllm-project/vllm/pull/57028))
- **Kimi-K3 DSpark**: 合成验证器后缀现已精简 — 在生成全部 6 个真实草稿令牌时，执行 4 个目标行而非 7 个（K=6/golden AL=3.75）([#57048](https://github.com/vllm-project/vllm/pull/57048))


- **GLM MoE**: 支持 PCP 数据并行的序列并行 ([#57075](https://github.com/vllm-project/vllm/pull/57075))
- **ModernBERT LoRA**: 功能已关闭 — 暂不支持池化/编码器模型的 LoRa 支持 ([#57002](https://github.com/vllm-project/vllm/issues/57002))

---

## 性能与优化

- **DeepSeek MegaMoE**: FlashInfer CuteDSL 集成正在进行中，旨在加速大批量预填充 ([#54049](https://github.com/vllm-

project/vllm/pull/54049))
- **MiniMax M3**: 融合的 decode top-k 合并将内核启动次数从 3 次降至 2 次 ([#56149](https://github.com/vllm-project/vllm/pull/56149))
- **DeepGEMM 预热**: 移至内存分析之前，防止启动时的 OOM — 预热形状可能超出前向传播的内存需求 ([#57258](https://github.com/vllm-project/vllm/pull/57258))
- **Hybrid Mamba spec-dec**: 显存预留现改为每个运行中的请求独立进行，而非按 KV 并发槽位，提升内存效率 ([#57261](https://github.com/vllm-project/vllm/pull/57261))
- **Fused-MoE 权重加载**: Dense H2D 传输现保持连续性，修复 ModelOpt Llama-4 检查点加载时间（68秒–495秒 → 显著缩短）([#47580](https://github.com/vllm-project/vllm/pull/47580))
- **Mooncake P2P**: 新增多模态嵌入重用的跨编码器缓存 ([#56242](https://github.com/vllm-project/vllm/pull/56242))
- **预填充令牌评分**: 现支持每行候选 ID（`SamplingParams.prompt_logprob_token_ids`）([#56984](https://github.com/vllm-project/vllm/pull/56984))
- **DCP 槽位映射**: 本地化现仅应用于上下文并行的 KV 缓存组，修复错误的转换 ([#57260](https://github.com/vllm-project/vllm/pull/57260))

---

## 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | **Qwen3.8-Flash-Next 非确定性贪心解码**: 当上下文超过 `indexer_budget`（QSA 边界）时，相同请求产生不同输出。影响 persistent_topk 预填充。 | 开放 — 48 条评论 ([#54521](https://github.com/vllm-project/vllm/issues/54521)) |
| **高** | **批处理不变性在 SP/async TP 下被破坏**: `VLLM_BATCH_INVARIANT=1` + `enable_sp` 产生错误结果。 | 开放 — 17 条评论 ([#56370](https://github.com/vllm-project/vllm/issues/56370)) |
| **高** | **DeepSeek-V4.1 + DSpark 非法内存访问**: SM120 稀疏 MLA 预填充在长提示上崩溃。 | 开放 — 6 条评论 ([#56771](https://github.com/vllm-project/vllm/issues/56771)) |
| **高** | **XPU MoE 权重卸载 OOM**: Intel XPU 上 CPU 卸载的 MoE 模型在 `process_weights_after_loading` 期间 OOM。 | PR 存在 — [#57215](https://github.com/vllm-project/vllm/pull/57215) |
| **中** | **GDN_ATTN 批处理不变性模式**: Qwen3.5/Qwen3.6 GDN 模型不支持 `VLLM_BATCH_INVARIANT=1`。 | 功能请求 — 7 条评论 ([#48613](https://github.com/vllm-project/vllm/issues/48613)) |
| **中** | **Qwen3.6-27B-FP8 + llmcache**: 混合 KV 缓存管理器在 v0.19.1 上禁用错误。 | 开放 — 11 条评论 ([#42911](https://github.com/vllm-project/vllm/issues/42911)) |
| **中** | **SM100 CUDA Graph 回放**: 在 B200/B300 (sm_100) 上禁用 torch.compile 时贪心输出改变。 | 开放 — 6 条评论 ([#55238](https://github.com/vllm-project/vllm/issues/55238)) |
| **中** | **DeepSeek MTP spec-dec**: `paged_mqa_logits` 内核在 `next_n=3` 时断言，将推测令牌上限限制为 1。 | 开放 — 7 条评论 ([#55238](https://github.com/vllm-project/vllm/issues/55238)) |
| **低** | **DiffusionGemma 结构化生成**: Jev 类有界令牌生成的新核心支持 ([#57250](https://github.com/vllm-project/vllm/pull/57250)) |

---

## 这对应用开发者的意义

1. **Blackwell (SM120) 用户**: 如果运行 DeepSeek-V4.1-Flash 配合投机解码，请确保使用最新 nightly — 关键的页表几何和 CUDA Graph 修复已在 [#57028](https://github.com/vllm-project/vllm/pull/57028) 中合入。

2. **生产调试**: 启用 `VLLM_ENGINE_ITERATION_TIMEOUT_S` 以在引擎阶段停滞时获取诊断转储 — 对诊断生产环境中的调度器/KV 缓存死锁至关重要 ([#49628](https://github.com/vllm-project/vllm/pull/49628))。

3. **序列并行用户**: 在 [#56370](https://github.com/vllm-project/vllm/issues/56370) 解决前，避免在启用 SP/async TP 时使用 `VLLM_BATCH_INVARIANT=1` — 正确性 bug 会静默产生错误输出。

4. **Intel XPU + MoE**: 如果在大规模 MoE 模型中使用 CPU 卸载，加载后权重处理阶段的 OOM 问题已在 [#57215](https://github.com/vllm-project/vllm/pull/57215) 中修复。

5. **缓存完整性**: 使用 LMCache 连接器时，[#56643](https://github.com/vllm-project/vllm/pull/56643) 中的安全修复可防止不同媒体间的缓存污染 — 建议更新。

6. **Qwen3.8-Flash-Next 用户**: `indexer_budget` 以上的贪心解码非确定性是已知问题 — 在 [#54521](https://github.com/vllm-project/vllm/issues/54521) 解决前，考虑使用 `temperature > 0` 或采样。

---

I need to verify the Markdown formatting is correct and ensure consistency in both Chinese and English technical terms throughout.</think>

# vLLM 摘要 — 2026-09-17

## 今日要点

vLLM 项目今日继续在多个方向保持活跃开发。关键修复已合入，解决了 DeepSeek-V4.1-Flash 在 Blackwell (SM120) 架构上 Serving 时的稀疏 MLA 页表几何和 CUDA Graph 捕获问题。LMCache 的安全修复将缓存标识符绑定到媒体哈希、缓存盐和 LoRA 参数，以防止跨媒体缓存冲突。V1 引擎现在支持可选的停滞阶段诊断功能，通过 `VLLM_ENGINE_ITERATION_TIMEOUT_S` 大幅提升生产环境调试能力。

---

## 版本发布与重大变更

过去 24 小时内无版本发布。

---

## 新模型与硬件支持

- **DeepSeek-V4.1-Flash + DSpark**: SM120 稀疏 MLA 预填充支持现已包含正确的页表几何处理，以及多流执行时 CUDA Graph 捕获的回退方案 ([#57028](https://github.com/vllm-project/vllm/pull/57028))
- **Kimi-K3 DSpark**: 合成验证器后缀现已精简 — 在生成全部 6 个真实草稿令牌时，执行 4 个目标行而非 7 个（K=6/golden AL=3.75）([#57048](https://github.com/vllm-project/vllm/pull/57048))
- **GLM MoE**: 支持 PCP 数据并行的序列并行 ([#57075](https://github.com/vllm-project/vllm/pull/57075))
- **ModernBERT LoRA**: 功能已关闭 — 暂不支持池化/编码器模型的 LoRa 支持 ([#57002](https://github.com/vllm-project/vllm/issues/57002))

---

## 性能与优化

- **DeepSeek MegaMoE**: FlashInfer CuteDSL 集成正在进行中，旨在加速大批量预填充 ([#54049](https://github.com/vllm-project/vllm/pull/54049))
- **MiniMax M3**: 融合的 decode top-k 合并将内核启动次数从 3 次降至 2 次 ([#56149](https://github.com/vllm-project/vllm/pull/56149))
- **DeepGEMM 预热**: 移至内存分析之前，防止启动时的 OOM — 预热形状可能超出前向传播的内存需求 ([#57258](https://github.com/vllm-project/vllm/pull/57258))
- **Hybrid Mamba spec-dec**: 显存预留现改为每个运行中的请求独立进行，而非按 KV 并发槽位，提升内存效率 ([#57261](https://github.com/vllm-project/vllm/pull/57261))
- **Fused-MoE 权重加载**: Dense H2D 传输现保持连续性，修复 ModelOpt Llama-4 检查点加载时间（68秒–495秒 → 显著缩短）([#47580](https://github.com/vllm-project/vllm/pull/47580))
- **Mooncake P2P**: 新增多模态嵌入重用的跨编码器缓存 ([#56242](https://github.com/vllm-project/vllm/pull/56242))
- **预填充令牌评分**: 现支持每行候选 ID（`SamplingParams.prompt_logprob_token_ids`）([#56984](https://github.com/vllm-project/vllm/pull/56984))
- **DCP 槽位映射**: 本地化现仅应用于上下文并行的 KV 缓存组，修复错误的转换 ([#57260](https://github.com/vllm-project/vllm/pull/57260))

---

## 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | **Qwen3.8-Flash-Next 非确定性贪心解码**: 当上下文超过 `indexer_budget`（QSA 边界）时，相同请求产生不同输出。影响 persistent_topk 预填充。 | 开放 — 48 条评论 ([#54521](https://github.com/vllm-project/vllm/issues/54521)) |
| **高** | **批处理不变性在 SP/async TP 下被破坏**: `VLLM_BATCH_INVARIANT=1` + `enable_sp` 产生错误结果。 | 开放 — 17 条评论 ([#56370](https://github.com/vllm-project/vllm/issues/56370)) |
| **高** | **DeepSeek-V4.1 + DSpark 非法内存访问**: SM120 稀疏 MLA 预填充在长提示上崩溃。 | 开放 — 6 条评论 ([#56771](https://github.com/vllm-project/vllm/issues/56771)) |
| **高** | **XPU MoE 权重卸载 OOM**: Intel XPU 上 CPU 卸载的 MoE 模型在 `process_weights_after_loading` 期间 OOM。 | PR 存在 — [#57215](https://github.com/vllm-project/vllm/pull/57215) |
| **中** | **GDN_ATTN 批处理不变性模式**: Qwen3.5/Qwen3.6 GDN 模型不支持 `VLLM_BATCH_INVARIANT=1`。 | 功能请求 — 7 条评论 ([#48613](https://github.com/vllm-project/vllm/issues/48613)) |
| **中** | **Qwen3.6-27B-FP8 + llmcache**: 混合 KV 缓存管理器在 v0.19.1 上禁用错误。 | 开放 — 11 条评论 ([#42911](https://github.com/vllm-project/vllm/issues/42911)) |
| **中** | **SM100 CUDA Graph 回放**: 在 B200/B300 (sm_100) 上禁用 torch.compile 时贪心输出改变。 | 开放 — 6 条评论 ([#55238](https://github.com/vllm-project/vllm/issues/55238)) |
| **中** | **DeepSeek MTP spec-dec**: `paged_mqa_logits` 内核在 `next_n=3` 时断言，将推测令牌上限限制为 1。 | 开放 — 7 条评论 ([#43457](https://github.com/vllm-project/vllm/issues/43457)) |
| **低** | **DiffusionGemma 结构化生成**: Jev 类有界令牌生成的新核心支持 ([#57250](https://github.com/vllm-project/vllm/pull/57250)) |

---

## 这对应用开发者的意义

1. **Blackwell (SM120) 用户**: 如果运行 DeepSeek-V4.1-Flash 配合投机解码，请确保使用最新 nightly — 关键的页表几何和 CUDA Graph 修复已在 [#57028](https://github.com/vllm-project/vllm/pull/57028) 中合入。

2. **生产调试**: 启用 `VLLM_ENGINE_ITERATION_TIMEOUT_S` 以在引擎阶段停滞时获取诊断转储 — 对诊断生产环境中的调度器/KV 缓存死锁至关重要 ([#49628](https://github.com/vllm-project/vllm/pull/49628))。

3. **序列并行用户**: 在 [#56370](https://github.com/vllm-project/vllm/issues/56370) 解决前，避免在启用 SP/async TP 时使用 `VLLM_BATCH_INVARIANT=1` — 正确性 bug 会静默产生错误输出。

4. **Intel XPU + MoE**: 如果在大规模 MoE 模型中使用 CPU 卸载，加载后权重处理阶段的 OOM 问题已在 [#57215](https://github.com/vllm-project/vllm/pull/57215) 中修复。

5. **缓存完整性**: 使用 LMCache 连接器时，[#56643](https://github.com/vllm-project/vllm/pull/56643) 中的安全修复可防止不同媒体间的缓存污染 — 建议更新。

6. **Qwen3.8-Flash-Next 用户**: `indexer_budget` 以上的贪心解码非确定性是已知问题 — 在 [#54521](https://github.com/vllm-project/vllm/issues/54521) 解决前，考虑使用 `temperature > 0` 或采样。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest into Chinese. I need to translate the content while following the strict rules:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, issue/PR references as-is
- Keep technical terms in English
- Use natural technical Chinese register

Let me translate this digest:</think>

# SGLang 速报 — 2026-09-17

## 今日要闻

开发持续推进：DeepSeek V4.1 集成正在进行中，包括视觉塔和聊天编码支持（PR #39668、#39666、#39665），同时 GLM-5.2 的 ROCm 内核优化也在推进中，为 gfx950 添加了融合四内核 DSA 解码路径（PR #38583）。CUDA 崩溃追踪器（#26340）依然保持高活跃度，共 312 条评论，表明 GPU 稳定性工作仍在持续进行。

## 版本发布与破坏性变更

过去 24 小时内无新版本发布。

## 新模型与硬件支持

- **DeepSeek V4.1**：多个 PR 添加视觉塔、图像预处理、聊天编码、工具解析和 Engram 模块支持——详见 PR #39668、#39666、#39665、#38798
- **SenseNova-U1 / U1.5**：新建追踪 issue #37742 用于上游支持
- **T-Head PPU (ZW810/ZW810E/ZW-M890P)**：新建路线图 issue #37519 规划一级支持
- **MXFP8 x BF16 MegaMOE**：PR #35459 添加混合精度 MoE 支持
- **Qwen MoE → DeepGEMM**：PR #38080 将 Qwen MoE 模块接入 DeepGEMM MegaMoE，支持 MXFP4/NVFP4 专家

## 性能优化

- **Qwen3-Next GDN Prefill 内核**：PR #39873 将 AITER 的融合四内核链合并为单内核，消除大量中间张量往返
- **ROCm GLM-5.2 DSA Indexer**：PR #38583 为 gfx950 将解码路径从 12 个内核减少到 4 个（对 78 层 DSA + MTP 草稿至关重要）
- **权重缓存守护进程**：第一阶段已在 #27139 合入，将 Qwen3-235B FP8 权重加载从约 306–327 秒减少到 <1 秒——继续在 #33522 追踪
- **引擎响应等待**：PR #39486 消除不存在 HTTP 请求对象时不必要的 asyncio.wait_for 超时
- **Triton 投机验证**：PR #39859 使用运行时 token 宽度进行精确的奖励 token 处理
- **AMD GLM-5.3 Zero-RoPE MHA**：PR #39338 为 ROCm 上的 norope 层启用全注意力 prefill
- **MiniMax-M3 Decode Top-K**：PR #36560 添加 wave64 直方图选择实现

## 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | #26340 CUDA 崩溃追踪器 — 来自 pr-test.yml 的自动收集事件，312 条评论 | 开放 |
| **高** | #22511 GLM-5.2 2×H100 健康检查失败 — 解码器超时 | 开放，27 条评论 |
| **高** | #30209 GLM-5.2 FP4 + EAGLE 非法内存访问，位于 flashinfer_trtllm bf16 批处理 GEMM | 开放 |
| **中** | #37633 QSA extend forward CUDA 非法内存访问，8 个并发请求时触发（Qwen3.8-Flash-Next-FP8，H20 TP8） | 开放 |
| **中** | #34920 Kimi K3 解码崩溃，PD 分离 + DCP + DSPARK | 开放 |
| **中** | #34676 Hybrid Mamba prefill 分配失败会杀死调度器而非重新入队 | 开放 |
| **中** | #39400 未认证 PUT /route 允许路由投毒 — 安全问题 | 开放 |
| **已修复** | #39692 索引器缓存卸载对 GLM-5.3-Flash 失效 | 已关闭 |
| **已修复** | #39661 基准测试工具现在记录 flushed_cache 状态 | 开放（PR） |
| **已修复** | #39858 SafeUnpickler 限制为精确名称白名单 — 安全加固 | 开放（PR） |

## 这对应用开发者意味着什么

1. **DeepSeek V4.1 即将进入主线** — 视觉和工具使用能力即将推出，预计本月内发布新版本
2. **AMD ROCm 支持日趋成熟** — GLM-5.2/5.3 优化持续合入；如果你是 gfx950 或 MI355X 用户，现在是测试的好时机
3. **基准测试更可复现了** — PR #39661 修复了缓存状态记录，本地运行将与 CI 结果一致
4. **安全加固** — SafeUnpickler 现在使用白名单；如果你序列化自定义对象，升级后请验证它们是否仍然有效
5. **关注 CUDA 崩溃追踪器** — 4 个月内 312 条评论表明调查正在进行；如果你遇到随机 CUDA 错误，检查是否有相关条目

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the GitHub digest about llama.cpp from English to Chinese. Let me translate the entire content while:
1. Keeping all the Markdown structure (headings, tables, lists, etc.)
2. Keeping URLs, issue numbers, code identifiers as-is
3. Using natural technical Chinese appropriate for a developer newsletter
4. Preserving all the content while making it read naturally in Chinese

Let me translate section by section:</think>

# llama.cpp 动态 — 2026-09-17

## 1. 今日要闻

项目在过去 24 小时内发布了 11 个版本，后端优化涵盖 Vulkan、CUDA 和 Hexagon。主要工作包括：为 MTP draft 模型启用 CUDA 图、修复 Gemma 4 和 Qwen3.5 融合 QKV 的张量并行问题，以及为 Hexagon 后端添加 K-Quant 支持（Q4_K、Q6_K）。多个关键问题已修复，但 Vulkan 性能回退和 SYCL 稳定性问题仍在跟进中。

---

## 2. 版本更新与破坏性变更

| 版本 | 变更 | PR |
|---------|--------|-----|
| **b11010** | Vulkan: 修复 NVIDIA 驱动 argsort_large.comp 着色器的兼容性问题 | [#28975](https://github.com/ggml-org/llama.cpp/pull/28975) |
| **b11009** | TP: 修复 Gemma 4 和 Qwen3.5 融合 QKV 的分块状态与粒度问题 | [#28965](https://github.com/ggml-org/llama.cpp/pull/28965) |
| **b11007** | CUDA: 为 MTP draft 模型启用 CUDA Graph | [#28549](https://github.com/ggml-org/llama.cpp/pull/28549) |
| **b11000** | RPC: 释放缓冲区时清除缓存的计算图 | [#24292](https://github.com/ggml-org/llama.cpp/pull/24292) |

**迁移提示:** RPC 修复 (#24292) 可能影响依赖动态缓冲区生命周期中计算图缓存行为的应用。

---

## 3. 新模型与硬件支持

- **Hexagon 后端**: 添加 Q4_K 和 Q6_K 的 K-Quant 支持 ([#28994](https://github.com/ggml-org/llama.cpp/pull/28994))
- **新模型**: 支持 HrmTextForCausalLM (DFM Mimir 1B) — 在同一 token 流上交替运行两个 transformer 堆栈（low, high）([#27625](https://github.com/ggml-org/llama.cpp/pull/27625))
- **Vulkan**: 添加零值 RoPE 探测处理，防止 Gemma 4 意外回退到 CPU ([#28995](https://github.com/ggml-org/llama.cpp/pull/28995))
- **Spacemit**: 修复 int16 转置函数错误 ([#25161](https://github.com/ggml-org/llama.cpp/pull/25161))
- **IM2Col**: 优化 CUDA/HIP 访问模式 ([#28013](https://github.com/ggml-org/llama.cpp/pull/28013))

---

## 4. 性能与优化

| 领域 | 详情 | PR/Issue |
|------|--------|----------|
| **MTP + CUDA Graph** | 为多 token 预测 draft 启用 CUDA Graph — 降低推测解码开销 | [#28549](https://github.com/ggml-org/llama.cpp/pull/28549) |
| **张量并行** | 修复 Gemma 4（n_embd=5376 但 Q=8192）和 Qwen3.5 融合 QKV 的分块状态计算 | [#28965](https://github.com/ggml-org/llama.cpp/pull/28965) |
| **Vulkan** | 解决 NVIDIA argsort 着色器 bug — 修复偶发的 ARGSORT 失败 | [#28975](https://github.com/ggml-org/llama.cpp/pull/28975) |
| **RPC** | 修复缓冲区释放时的计算图缓存失效问题 — 提升分布式场景可靠性 | [#24292](https://github.com/ggml-org/llama.cpp/pull/24292) |
| **统一 KV** | 调整自动适配时的最大上下文长度计算 | [#28849](https://github.com/ggml-org/llama.cpp/issues/28849) |
| **OpenCL** | 为非 MoE 模型添加 Q6_K GEMM 内核，并为 Adreno 提供匹配的 GEMV | [#28678](https://github.com/ggml-org/llama.cpp/pull/28678) |
| **CUDA MMQ** | 通过分离 MMA 和加载瓦片优化 RDNA 3.5 MMQ 流水线 | [#28714](https://github.com/ggml-org/llama.cpp/pull/28714) |

**性能问题 — 回退:** Vulkan 在 RDNA3 上自 b10780 后出现严重提示处理速度下降 ([#28752](https://github.com/ggml-org/llama.cpp/issues/28752)) — 正在调查中。

---

## 5. 稳定性与回退问题

### 严重 / 高优先级

| 问题 | 后端 | 状态 | 修复进度 |
|-----|---------|--------|----------|
| Vulkan 在 Intel Arc Pro B70 上 MoE 模型崩溃 (Qwen3.6-35B-A3B-MTP) | Vulkan | 待确认 | 未确定 |
| SYCL DFlash2 draft 在双 Arc Pro B70 上触发 GPU 驱动 TDR 重置 | SYCL | 进行中 | — |
| Gemma 4 使用 MTP 时崩溃 | CUDA | 进行中 | — |
| Qwen3.8-27B 在上下文 >80K 时解码吞吐量下降约 25 倍 | CUDA | 进行中 | — |

### 中等优先级

| 问题 | 后端 | 状态 |
|-----|---------|--------|
| SYCL 启用 ngram-mod 时出现极端 scratchpad 分配（2GB+）| SYCL | [#28860](https://github.com/ggml-org/llama.cpp/issues/28860) |
| Intel Arc 140V Vulkan 在 GPU 分层时输出乱码，取决于批处理设置 | Vulkan | [#28648](https://github.com/ggml-org/llama.cpp/issues/28648) |
| IQ3_S 在 RTX 5060TI (Blackwell) 上输出乱码 | CUDA | [#28581](https://github.com/ggml-org/llama.cpp/issues/28581) |
| MTP 在多 GPU 分层时导致提示处理速度减半 | CUDA | [#27428](https://github.com/ggml-org/llama.cpp/issues/27428) |
| Qwen3.8-Flash-Next: `--split-mode tensor` 在 CUDA 上中止，显示 SPLIT_AXIS_UNKNOWN (2x RTX 5090) | CUDA | [#27964](https://github.com/ggml-org/llama.cpp/issues/27964) |

### 正在处理中的 PR

- [#28474](https://github.com/ggml-org/llama.cpp/pull/28474): 为 llama-quantize 添加 `--no-fallback` 选项 — 可选择显式失败而非静默回退
- [#28967](https://github.com/ggml-org/llama.cpp/pull/28967): 添加 NCCL 支持用于张量并行 (CUDA 后端)
- [#26167](https://github.com/ggml-org/llama.cpp/pull/26167): 调度器 sanitizer 用于竞态检测

---

## 6. 对应用开发者的影响

1. **如果使用 NVIDIA 的 Vulkan**: argsort 着色器兼容性问题修复 (#28975) 应能提升稳定性。若使用 AMD RDNA3，需留意回退问题 (#28752) — 部署前建议进行测试。

2. **如果使用 Gemma 4 或 Qwen3.5 配合张量并行**: 融合 QKV 分块修复 (#28965) 解决了之前的正确性问题；请确保使用 b11009 或更高版本。

3. **如果使用 CUDA 配合 MTP/推测解码**: CUDA Graph 启用 (#28549) 可能提升 draft 模型吞吐量 — 建议对工作负载进行基准测试。

4. **如果使用 SYCL**: Intel Arc GPU 上存在多个活跃问题 — 双 GPU 配合 DFlash2 的配置不稳定。建议在修复发布前使用其他后端。

5. **如果使用长上下文 (>80K)**: Qwen3.8-27B 出现严重解码性能下降 — 这似乎与模型/架构特定相关，建议测试具体的模型场景。

6. **量化**: `--no-fallback` PR (#28474) 提供了对静默量化回退的控制；若需要严格量化，请关注合并进度。

---

*基于 github.com/ggml-org/llama.cpp 数据生成 — 数据周期: 2026-09-17*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest from English to Chinese, following specific rules:

1. Output ONLY the translation - no preamble, explanation, or markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code, issue/PR references as-is
4. Use natural technical Chinese register (like a Chinese developer newsletter)
5. Don't translate project names, repository slugs, usernames, version tags, file paths, API/config identifiers

Let me translate this carefully while preserving the structure and technical accuracy.</think>

# Ollama 速报 — 2026-09-17

## 1. 今日要闻

开发工作多点推进：Windows 孤岛进程修复 (#18500) 已合并，MiniCPM5 工具调用解析问题已有修复 PR (#18499)，MLX 内存管理改进 (#18481) 有望防止 CUDA 加载时的 OOM。多个稳定性问题仍在处理中，尤其是 Vulkan 后端和特定硬件上的模型加载问题。

## 2. 版本更新与破坏性变更

过去 24 小时内无新版本发布。

## 3. 新模型与硬件支持

- **Mistral Small 4**: 功能请求已开启，欲将其加入官方 Ollama 模型库 (#15142) — 为 Mistral Small 3.2 的完全开源继任者
- **Nemotron H MLX Vision**: PR #17714 为 MLX 后端实现了 RADIO 视觉编码器和投影器

## 4. 性能与优化

| PR/Issue | 描述 | 状态 |
|----------|------|------|
| #18500 | **Windows 孤岛进程修复** — 将 runner 进程分配给单个 Windows Job Object，使用 `JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE`，确保退出时干净终止 llama-server 和 MLX 子进程 | 进行中 |
| #18481 | **MLX CUDA 内存预算** — 分配器现在使用驱动报告空闲内存的 95%，防止无限加载导致加载过程中 OOM | 进行中 |
| #17834 | **MLX 加载进度报告** — 实现失速检测，避免取消超时默认值的慢速/长模型加载 | 进行中 |
| #16085 | **MLX 预热** — 在模型加载后运行合成 BOS/EOS 预填充 + 解码以填充编译缓存，再处理首个真实请求 | 进行中 |
| #18479 | **思考模型单次结构化输出** — 消除双重生成方法，避免二次预填充和内容边界丢失 | 进行中 |
| #18038 | **性能回退** — llama-server 在 M4 Max 上生成 token 时 CPU 占用约 560%（此前更低）；调查进行中 | 进行中 |

## 5. 稳定性与回退问题

### 高优先级

| Issue | 严重程度 | 描述 | 修复 PR |
|-------|----------|------|---------|
| #18483 | **高** | MiniCPM5-2B 原生工具调用无法解析 — 解码时 XML token 被剥离，留下碎片化内容 | #18499 (进行中) |
| #17778 | **高** | Qwen 3.8 在工具循环流式聊天时返回 500 错误 "no user query found in messages"（205k 上下文） | — |
| #18486 | **高** | llama3.2-vision 加载失败："unknown model architecture: 'mllama'" | — |
| #18396 | **高** | Jetson Orin Nano 8GB 使用 Gemma 4 E4B OOM（`--load-mode dio`），相同配置不使用 DIO 时正常 | — |

### 中优先级

| Issue | 严重程度 | 描述 |
|-------|----------|------|
| #18468 | **中** | gemma4 渲染器丢失名为 `description`、`type`、`properties`、`required` 或 `nullable` 的工具参数 |
| #17870 | **中** | gfx1151 (Strix Halo) 上 Vulkan — 长提示预填充时计算环看门狗超时；存在 `num_batch=128` 变通方案 |
| #18482 | **中** | Vulkan iGPU (Intel Iris Xe) 启动时未被检测 — total_vram 0B 持续直到重启 |
| #18494 | **中** | qwen3-vl:8b-instruct 在 Vulkan AMD RX 6750 XT 上多模型加载后崩溃 (0xc0000005)（Windows 0.34.1） |
| #18038 | **中** | 性能回退：llama-server 在 M4 Max 上 CPU 560% |

### 较低优先级 / 功能请求

- #18490 — 请求恢复内置 agent 作为可选 CLI 选项（在 PR #18393 中被移除）
- #18491 — Claude Desktop 连接切换到匿名账户而非使用已登录会话
- #16060 — 电话验证拒绝非美国号码（德国）— 阻止付费套餐注册
- #18484 — deepseek-v4.1-flash:cloud 默认推理级别 "high" 不在支持列表 ["none", "medium"] 中
- #18487 — 功能请求：Docker 容器间共享 GPU 协调的外部资源锁

## 6. 这对应用开发者意味着什么

1. **Windows 用户**：即将发布的修复 (#18500) 将解决 Ollama 退出后残留的 llama-server 进程 — 合并后值得更新。

2. **MiniCPM5 用户**：原生工具调用解析的修复正在等待中 (#18499)；如果使用该模型的工具调用，请关注合并动态。

3. **MLX/CUDA 用户**：内存管理改进 (#18481) 应减少多模型加载时的 OOM 崩溃 — 预期行为更稳定。

4. **思考模型的结构化输出**：单次实现 (#18479) 将降低延迟，消除使用 grammar/JSON 模式时的边界内容丢失。

5. **已知变通方案**：
   - Vulkan Strix Halo 用户：使用 `num_batch=128` 避免计算环超时 (#17870)
   - Qwen 3.8 大上下文：工具循环问题仍未解决；如遇到 205k 上下文，考虑分块提示

6. **模型加载**：llama3.2-vision 加载失败 (#18486) 表明可能存在 manifest/架构问题 — 在解决前避免重新拉取。

---

*基于 GitHub 数据生成 — ollama/ollama (2026-09-17)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate this LiteLLM digest into Chinese. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate while maintaining the structure:

The digest has:
- Heading "LiteLLM Digest — 2026-09-17"
- 6 sections with content
- Tables
- Lists
- Links in various places

Let me translate section by section:

**1. Today's Highlights**
- About the new features and bug fixes

**2. Releases & Breaking Changes**
- About version releases

**3. New Model & Hardware Support**
- New model and hardware support

**4. Performance & Optimization**
- Performance and optimization

**5. Stability & Regressions**
- Stability and regressions

**6. What This Means for Application Developers**
- What this means for application developers

Let me translate each part:

---

# LiteLLM 每日简报 — 2026-09-17

## 1. 今日要闻

LiteLLM 团队本周发布了一大批基础设施层面的更新，重点关注稳定性与多云弹性。亮点功能包括：Amazon Transcribe SigV4 透传路由、Microsoft Foundry A2A 代理发现（支持 Entra ID 认证），以及团队成员在无预算分配时的消费追踪优化。Bug 修复方面值得注意的是：影响 Azure Redis Enterprise 部署的 Redis CROSSSLOT 错误、v3 限流器重复计数 bug，以及代理的 OpenTelemetry 集成修复——现在可正确将 Langfuse 用户上下文传递到追踪跨度中。

---

## 2. 发布与重大变更

| 版本 | 类型 | 备注 |
|---------|------|-------|
| [v1.103.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.103.0-dev.1) | 开发版 | Docker 镜像使用 cosign 签名（密钥来自提交 `0112e53`） |
| [v1.102.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.102.0-rc.2) | 发布候选 | 相同的 cosign 签名验证流程 |

本次迭代未引入重大变更。所有 Docker 镜像均采用 cosign 进行签名验证。

---

## 3. 新模型与硬件支持

- **vLLM Realtime API**：特性需求 [#23102](https://github.com/BerriAI/litellm/issues/23102) 正在跟踪 vLLM `/v1/realtime` 端点的支持情况，可通过临时配置方案绕过。
- **Amazon Transcribe**：PR [#41515](https://github.com/BerriAI/litellm/pull/41515) 新增 SigV4 透传路由（`POST /transcribe/{Operation}` 和 `POST /transcribe`），支持在 LiteLLM 虚拟密钥后调用 AWS Transcribe。
- **Microsoft Foundry A2A**：PR [#41511](https://github.com/BerriAI/litellm/pull/41511) 实现 Foundry 代理可达，支持 Entra ID 身份验证和版本化代理卡片发现。
- **Mistral 批量 API + OCR**：特性需求 [#29914](https://github.com/BerriAI/litellm/issues/29914) 提出批量支持 Mistral OCR 端点。

---

## 4. 性能与优化

- **日志优化**（PR [#40934](https://github.com/BerriAI/litellm/pull/40934)）：通过在单次扫描中对每条记录应用正则表达式并折叠 base64 负载，减少了日志记录处理的系统开销。
- **Rust 桥接重构**（PR [#41479](https://github.com/BerriAI/litellm/pull/41479)）：引入声明式路由目录和共享运行时选择，减少散布在各个调用点的临时降级方案。
- **独立帧解码 crate**（PR [#41500](https://github.com/BerriAI/litellm/pull/41500)）：为 Rust 调用方提供独立的 AWS EventStream 和 SSE 帧解码器，保留帧元数据、负载、错误和分片信息。

---

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 详情 |
|-------|----------|---------|---------|
| [#34140](https://github.com/BerriAI/litellm/issues/34140)：v3 限流器对团队单模型限额重复计数 | **高** | 待处理 | 团队级别单模型 RPM/TPM 限流实际仅为配置值的一半。设置 `N` 的限额，约 `N/2` 请求后即触发 429。 |
| [#30065](https://github.com/BerriAI/litellm/issues/30065)：Azure Redis Enterprise 上的 Redis CROSSSLOT 错误 | **高** | 待处理 | `_group_keys_by_hash_tag()` 仅对 OSS-Cluster Redis 按哈希槽分组，导致 Azure Redis Enterprise（非集群模式）报 CROSSSLOT 错误。 |
| [#41344](https://github.com/BerriAI/litellm/issues/41344)：零预算绕过导致无限消费泄露 | **中** | 已关闭 | 零成本预算绕过基于请求的模型组做决策，但降级可能路由到收费部署，导致无限消费泄露。 |
| [#36759](https://github.com/BerriAI/litellm/issues/36759)：OpenTelemetry `gen_ai.system` 在指标路径中仍为 'None' | **中** | 已关闭 | PR #26713 仅修复了 span 属性调用点，指标/事件路径仍收到 `None`。 |
| [#30053](https://github.com/BerriAI/litellm/issues/30053)：流式 fast_path 破坏工具调用连续性（v1.87.0） | **中** | 已关闭 | `async_streaming_data_generator` 中的 `fast_path` 导致客户端在工具调用往返后收到原始 XML 而非文本。 |
| [#8328](https://github.com/BerriAI/litellm/issues/8328)：密钥别名在所有用户间不唯一 | **中** | 待处理 | 密钥别名应按用户区分，而非全局；当前用户无法使用相同的别名。 |
| [#27852](https://github.com/BerriAI/litellm/issues/27852)：多 worker 下的幽灵模型 | **中** | 待处理 | 使用 Redis Pub/Sub 同步时，删除的模型未从其他 worker 本地缓存中清除。 |

---

## 6. 这对应用开发者意味着什么

1. **多云部署**：如果在 Azure Redis Enterprise 上以多 worker 模式运行 LiteLLM 代理，需注意 CROSSSLOT 问题（[#30065](https://github.com/BerriAI/litellm/issues/30065)）。在修复发布前，考虑切换到 Redis 集群模式或监控 429 错误。

2. **限流**：团队单模型限流当前按配置值的一半执行（[#34140](https://github.com/BerriAI/litellm/issues/34140)）。若在团队元数据中使用 `model_rpm_limit` 或 `model_tpm_limit`，请将配置值设为实际所需的两倍，直至问题修复。

3. **流式工具调用**：依赖 Claude 模型通过 Bedrock 进行工具调用连续流式输出时，fast_path 优化（v1.87.0+）可能导致客户端收到格式错误的 XML 而非文本。修复待发布。

4. **Amazon Transcribe**：新增透传路由支持使用 LiteLLM 虚拟密钥调用 AWS Transcribe，适合构建多租户音频转录服务。

5. **管理后台**：非管理员用户无法创建 API 密钥，因 UI/API 不匹配（[#20962](https://github.com/BerriAI/litellm/issues/20962)）。如工作流依赖内部用户创建密钥，需提前规划或关注修复进展。

6. **可观测性**：OpenTelemetry 追踪现在正确传播 Langfuse 用户、会话和标签上下文（[#41140](https://github.com/BerriAI/litellm/pull/41140)）。使用 Langfuse 进行 LLM 可观测性时，追踪保真度得到提升。</think>

# LiteLLM 每日简报 — 2026-09-17

## 1. 今日要闻

LiteLLM 团队本周发布了一大批基础设施层面的更新，重点关注稳定性与多云弹性。亮点功能包括：Amazon Transcribe SigV4 透传路由、Microsoft Foundry A2A 代理发现（支持 Entra ID 认证），以及团队成员在无预算分配时的消费追踪优化。Bug 修复方面值得注意的是：影响 Azure Redis Enterprise 部署的 Redis CROSSSLOT 错误、v3 限流器重复计数 bug，以及代理的 OpenTelemetry 集成修复——现在可正确将 Langfuse 用户上下文传递到追踪跨度中。

---

## 2. 发布与重大变更

| 版本 | 类型 | 备注 |
|---------|------|-------|
| [v1.103.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.103.0-dev.1) | 开发版 | Docker 镜像使用 cosign 签名（密钥来自提交 `0112e53`） |
| [v1.102.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.102.0-rc.2) | 发布候选 | 相同的 cosign 签名验证流程 |

本次迭代未引入重大变更。所有 Docker 镜像均采用 cosign 进行签名验证。

---

## 3. 新模型与硬件支持

- **vLLM Realtime API**：特性需求 [#23102](https://github.com/BerriAI/litellm/issues/23102) 正在跟踪 vLLM `/v1/realtime` 端点的支持情况，可通过临时配置方案绕过。
- **Amazon Transcribe**：PR [#41515](https://github.com/BerriAI/litellm/pull/41515) 新增 SigV4 透传路由（`POST /transcribe/{Operation}` 和 `POST /transcribe`），支持在 LiteLLM 虚拟密钥后调用 AWS Transcribe。
- **Microsoft Foundry A2A**：PR [#41511](https://github.com/BerriAI/litellm/pull/41511) 实现 Foundry 代理可达，支持 Entra ID 身份验证和版本化代理卡片发现。
- **Mistral 批量 API + OCR**：特性需求 [#29914](https://github.com/BerriAI/litellm/issues/29914) 提出批量支持 Mistral OCR 端点。

---

## 4. 性能与优化

- **日志优化**（PR [#40934](https://github.com/BerriAI/litellm/pull/40934)）：通过在单次扫描中对每条记录应用正则表达式并折叠 base64 负载，减少了日志记录处理的系统开销。之前，向 `/v1/ocr` 上传多页 PDF 时生成约 8 MB 日志行，在 0.5 CPU 下阻塞事件循环约 11 秒——现已从 v1.98.0 的约 5.5 秒进一步降低。
- **Rust 桥接重构**（PR [#41479](https://github.com/BerriAI/litellm/pull/41479)）：引入声明式路由目录和共享运行时选择，减少散布在各个调用点的临时降级方案。
- **独立帧解码 crate**（PR [#41500](https://github.com/BerriAI/litellm/pull/41500)）：为 Rust 调用方提供独立的 AWS EventStream 和 SSE 帧解码器，保留帧元数据、负载、错误和分片信息。

---

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 详情 |
|-------|----------|---------|---------|
| [#34140](https://github.com/BerriAI/litellm/issues/34140)：v3 限流器对团队单模型限额重复计数 | **高** | 待处理 | 团队级别单模型 RPM/TPM 限流实际仅为配置值的一半。设置 `N` 的限额，约 `N/2` 请求后即触发 429。 |
| [#30065](https://github.com/BerriAI/litellm/issues/30065)：Azure Redis Enterprise 上的 Redis CROSSSLOT 错误 | **高** | 待处理 | `_group_keys_by_hash_tag()` 仅对 OSS-Cluster Redis 按哈希槽分组，导致 Azure Redis Enterprise（非集群模式）报 CROSSSLOT 错误。 |
| [#41344](https://github.com/BerriAI/litellm/issues/41344)：零预算绕过导致无限消费泄露 | **中** | 已关闭 | 零成本预算绕过基于请求的模型组做决策，但降级可能路由到收费部署，导致无限消费泄露。 |
| [#36759](https://github.com/BerriAI/litellm/issues/36759)：OpenTelemetry `gen_ai.system` 在指标路径中仍为 'None' | **中** | 已关闭 | PR #26713 仅修复了 span 属性调用点，指标/事件路径仍收到 `None`。 |
| [#30053](https://github.com/BerriAI/litellm/issues/30053)：流式 fast_path 破坏工具调用连续性（v1.87.0） | **中** | 已关闭 | `async_streaming_data_generator` 中的 `fast_path` 导致客户端在工具调用往返后收到原始 XML 而非文本。 |
| [#8328](https://github.com/BerriAI/litellm/issues/8328)：密钥别名在所有用户间不唯一 | **中** | 待处理 | 密钥别名应按用户区分，而非全局；当前用户无法使用相同的别名。 |
| [#27852](https://github.com/BerriAI/litellm/issues/27852)：多 worker 下的幽灵模型 | **中** | 待处理 | 使用 Redis Pub/Sub 同步时，删除的模型未从其他 worker 本地缓存中清除。 |

---

## 6. 这对应用开发者意味着什么

1. **多云部署**：如果在 Azure Redis Enterprise 上以多 worker 模式运行 LiteLLM 代理，需注意 CROSSSLOT 问题（[#30065](https://github.com/BerriAI/litellm/issues/30065)）。在修复发布前，考虑切换到 Redis 集群模式或监控 429 错误。

2. **限流**：团队单模型限流当前按配置值的一半执行（[#34140](https://github.com/BerriAI/litellm/issues/34140)）。若在团队元数据中使用 `model_rpm_limit` 或 `model_tpm_limit`，请将配置值设为实际所需的两倍，直至问题修复。

3. **流式工具调用**：依赖 Claude 模型通过 Bedrock 进行工具调用连续流式输出时，fast_path 优化（v1.87.0+）可能导致客户端收到格式错误的 XML 而非文本。修复待发布。

4. **Amazon Transcribe**：新增透传路由支持使用 LiteLLM 虚拟密钥调用 AWS Transcribe，适合构建多租户音频转录服务。

5. **管理后台**：非管理员用户无法创建 API 密钥，因 UI/API 不匹配（[#20962](https://github.com/BerriAI/litellm/issues/20962)）。如工作流依赖内部用户创建密钥，需提前规划或关注修复进展。

6. **可观测性**：OpenTelemetry 追踪现在正确传播 Langfuse 用户、会话和标签上下文（[#41140](https://github.com/BerriAI/litellm/pull/41140)）。使用 Langfuse 进行 LLM 可观测性时，追踪保真度得到提升。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest into Chinese. Let me analyze the content and translate it while:

1. Preserving all Markdown structure exactly
2. Keeping all technical identifiers, URLs, issue numbers, etc. as-is
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Not adding any preamble, explanation, or markdown fences

Let me go through section by section:

## Today's Highlights

Need to translate the main points but keep technical terms. "Windows ARM64 binaries" should probably stay as is or be "Windows ARM64 二进制文件". "unsloth deploy" is a command, should stay. "runtime metrics" is technical, keep.

## Releases & Breaking Changes

Table - translate the description but keep the links column as-is.

## New Model & Hardware Support

Table - translate status and notes. Keep model names, issue numbers.

## Performance & Optimization

Table - translate area, status, details.

## Stability & Regressions

Table - translate severity, issue, status, fix PR.

## What This Means for Application Developers

List items - translate the content while keeping technical terms.

Let me translate now:</think>

# Unsloth 速报 — 2026-09-17

## 今日要点

Unsloth 在过去 24 小时内发布了 Windows ARM64 二进制文件，进一步拓展了桌面端部署选项。项目修复了多个稳定性问题，包括远程图片处理中的关键 SSRF 漏洞、Docker 代理健康检查失败，以及 Windows 安装程序的边缘用例问题。云端部署功能（`unsloth deploy`）和运行时指标基础设施仍在持续开发中。

---

## 版本发布与重大变更

| 项目 | 描述 | 链接 |
|------|-------------|-------|
| **Windows-ARM64 二进制文件** | 新增版本，提供 Windows 设备原生 ARM64 支持 | [Release](https://github.com/unslothai/unsloth/releases) |

---

## 新模型与硬件支持

| 项目 | 状态 | 备注 |
|------|--------|-------|
| **AMD RX 5700XT 识别** | Bug | Unsloth Desktop 中无法识别；正在调查中 (#8529) |
| **ROCm 7.14 检测** | Bug | 安装程序错误地安装了 PyTorch 2.11 + ROCm 7.2，而非 7.14 (#10657) |
| **Qwen3.8-27B Checkpoint 缺陷** | 已知问题 | GatedDeltaNet 投影加载时无 `quant_state`；需要重新生成 (#10276) |
| **Windows 预量化 bnb-4bit** | Bug | Checkpoint 加载后 `quant_state=None`，前向传播报形状错误 (#10017) |

---

## 性能与优化

| 领域 | 状态 | 详情 |
|------|--------|---------|
| **内存占用** | 回归问题 | 自上次 llama.cpp 更新后内存持续增长 (#10921) |
| **Qwen3.5/3.6 GGUF 导出** | Bug | 截断末尾 `ssm_conv1d.weight` 张量的最后几层 (#6071) |
| **vLLM 风格指标** | 进行中 | PR #4238 正在添加可选的运行时指标，支持 Prometheus 导出 |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|-----------|
| **高** | Docker：模型在会话间未持久化 | Open | — |
| **高** | Qwen2.5-VL 流式处理导致视觉编码器 `RuntimeError` | Closed | — |
| **高** | 远程图片处理中的 SSRF 漏洞 | PR Open | #11160 |
| **中** | Windows 安装程序因非致命错误失败 | Open | — |
| **中** | 未检测到 ROCm 7.14；安装了错误的 PyTorch 版本 | Open | — |
| **中** | Full finetune 意外需要梯度 | Open | — |
| **低** | 代理环境下 Docker 健康检查失败 | PR Open | #11157 |
| **低** | `standardize_sharegpt` 重复提示报错 | Closed | — |

---

## 对应用开发者的意义

1. **Docker 用户**：模型持久化需要在 `/workspace/work` 之外显式配置卷挂载；请确保挂载配置覆盖实际的模型存储位置，避免容器重启时数据丢失 (#10923)。

2. **Windows ARM64 用户**：新增原生二进制文件；但现有 x86_64 Windows 安装可能遇到看似致命但实际可忽略的安装程序错误 (#9804, #11012)。

3. **Ollama 集成**：外部 Ollama 连接未暴露 reasoning/thinking 控制选项；目前暂无解决方案 (#9649)。

4. **生产推理**：SSRF 修复 (#11160) 解决了本地 GGUF 模型服务远程图片时的安全问题——合并后请及时更新。

5. **多 GPU 环境**：GPU 优先级排序功能请求仍在 Open 状态 (#9333)；目前需手动选择。

6. **微调工作流**：Token 添加 + 适配器保存/加载存在已知问题 (#1343)；生产环境建议使用完整模型导出而非仅保存适配器。

---

*数据来源：GitHub — unslothai/unsloth*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*