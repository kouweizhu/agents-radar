# AI 基础设施日报 2026-10-31

> 生成时间: 2026-10-31 01:46 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this entire report to Chinese, preserving the exact markdown structure including tables, headings, lists, etc. I need to use natural technical Chinese (the register of a Chinese developer newsletter) while keeping all code, numbers, URLs, project names, and identifiers in their original form.

Let me translate this carefully:

## 1. Ecosystem Overview

The AI inference stack is fragmenting into distinct layers with overlapping ambitions. **vLLM** and **SGLang** compete directly as GPU serving engines with SGLang gaining ground on multi-backend support (AMD ROCm, Ascend NPU); **llama.cpp** owns the local/CPU edge with cross-platform reach; **Ollama** abstracts the local experience for consumers; **LiteLLM** operates as a gateway aggregating 100+ providers; and **Unsloth** owns fine-tuning at the bottom of the stack. Today's activity reveals convergence: every project is optimizing for cold-start latency, multi-modal support, and hardware diversification beyond NVIDIA.

AI 推理栈正在碎片化为不同的层级，各层级之间存在重叠的雄心。**vLLM** 和 **SGLang** 直接竞争作为 GPU 服务引擎，SGLang 在多后端支持（AMD ROCm、Ascend NPU）方面逐渐占据优势；**llama.cpp** 在本地/CPU 边缘领域拥有跨平台覆盖；**Ollama** 为消费者抽象了本地体验；**LiteLLM** 作为网关聚合了 100 多家提供商；**Unsloth** 在栈底拥有微调能力。当下的活动显示了收敛态势：每个项目都在优化冷启动延迟、多模态支持以及 NVIDIA 以外的硬件多样化。


I'll continue translating the ecosystem overview, maintaining the technical Chinese register and preserving the technical details while adapting the language naturally.

The inference stack is fragmenting into specialized layers, with multiple projects racing to support multi-modal capabilities and reduce cold-start latency. Different projects are competing across various hardware platforms, from GPU serving engines to local runtimes and API gateways, creating an increasingly complex but interconnected ecosystem.

Today's activity reveals convergence, with each project optimizing for similar goals: faster model inference, multi-backend compatibility, and reducing initial response times across different hardware environments.

The table reveals intense development activity, with SGLang and llama.cpp leading in release frequency. Ollama shows the highest pull request volume, indicating significant internal development efforts. The landscape suggests rapid iteration and competition among these AI inference projects.

SGLang demonstrates remarkable multi-backend diversity across NVIDIA, AMD, and Ascend platforms. VLLM focuses on production-grade multi-modal capabilities through advanced CUDA Graph techniques. Unsloth excels in fine-tuning specialized model support, while Ollema prioritizes user-friendly local inference experiences.

The performance optimization landscape highlights innovative approaches to key technical challenges. Teams are exploring sophisticated methods for KV cache management, cold start reduction, and advanced quantization strategies across various GPU and accelerator platforms.

Emerging trends point toward production-ready multi-modal capabilities, with significant advancements in inference speed, kernel optimization, and hardware platform diversity. The ecosystem is rapidly maturing, offering developers increasingly sophisticated tools for AI model deployment and inference.</think>

# 跨项目生态对比报告 — 2026-10-31

## 1. 生态概览

AI 推理栈正在碎片化为不同的层级，各层级之间存在重叠的雄心。**vLLM** 和 **SGLang** 直接竞争作为 GPU 服务引擎，SGLang 在多后端支持（AMD ROCm、Ascend NPU）方面逐渐占据优势；**llama.cpp** 在本地/CPU 边缘领域拥有跨平台覆盖；**Ollama** 为消费者抽象了本地体验；**LiteLLM** 作为网关聚合了 100 多家提供商；**Unsloth** 在栈底拥有微调能力。当下的活动显示了收敛态势：每个项目都在优化冷启动延迟、多模态支持以及 NVIDIA 以外的硬件多样化。

---

## 2. 活动对比

| 项目 | Issue (24h) | PR (24h) | Release (24h) |
|---------|-------------|-----------|-----------------|
| **vLLM** | ~15 个 issue | ~15 个 PR | 0 |
| **SGLang** | ~10 个 issue | ~15 个 PR | **10** |
| **llama.cpp** | ~9 个 issue | ~15 个 PR | **10** |
| **Ollama** | ~13 个 issue | ~46 个 PR | 0 |
| **LiteLLM** | ~20 个 issue | ~20 个 PR | **1** |
| **Unsloth** | ~10 个 issue | ~12 个 PR | **1** |

**观察：** SGLang 和 llama.cpp 的发布速度约为每天 10 次，反映出激进的迭代节奏。Ollama 的 PR 数量（46 个）表明内部开发工作量巨大。LiteLLM 和 Unsloth 维持较慢、更稳定的发布节奏，适合作为生产级代理/训练工具的定位。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|---------|
| **DeepSeek V4 / V4.1 Flash** | ✓ (fp8_ds_mla) | ✓ | — | — | ✓ (GGUF) |
| **Qwen3-VL (多模态)** | ✓ (ViT CUDA Graph RFC) | ✓ | — | — | — |
| **Gemma 4** | — | ✓ | — | ✓ (已修复) | — |
| **Gemma 3n** | — | — | — | — | ✓ (音频 VLM) |
| **Kimi K2.5 / K3** | — | ✓ (DCP、FlashInfer) | — | — | — |
| **GLM-5.x** | ✓ | — | — | — | — |
| **Meta Model API** | — | — | — | — | ✓ (UI) |
| **LFM3-Omni** | — | — | — | ✓ | — |
| **T-Head PPU (SAIL)** | — | ✓ (路线图) | — | — | — |
| **AMD gfx950 / MI355X** | ✓ | ✓ | — | — | — |
| **Apple MLX** | — | — | — | ✓ | — |
| **Ascend NPU** | — | ✓ | — | — | — |

**领先者分析：** SGLang 在多后端多样性（NVIDIA、AMD ROCm、Ascend NPU）方面领先。vLLM 在多模态生产特性（ViT CUDA Graph）方面领先。Unsloth 在微调专用模型支持方面领先。Ollama 在消费者/本地易用性方面配合 MLX 领先。

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 关键工作 |
|------------------|-----------------|----------|
| **KV Cache** | vLLM、llama.cpp、SGLang | 分层 sizing（Unsloth）、GPU 旋转常量（llama.cpp）、class-LRU/MoE cache（llama.cpp） |
| **冷启动 / JIT** | vLLM、SGLang、llama.cpp | 零 JIT 运行时（vLLM #49349）、JIT_DEEPGEMM_FAST_WARMUP（SGLang）、JIT 预热消除 |
| **量化** | vLLM、llama.cpp、SGLang | fp8_ds_mla（vLLM）、OpenCL q2_0（llama.cpp）、MXFP4 MoE（SGLang AMD） |
| **批处理** | vLLM、SGLang、LiteLLM | 优先级调度（vLLM）、持久化计量器（LiteLLM）、动态批处理 |
| **分布式** | vLLM、SGLang | CUDA checkpoint/restore（vLLM）、NPU DCP（SGLang）、流水线并行修复 |
| **Kernel** | llama.cpp、SGLang | 融合 QK-norm+RoPE（SGLang ROCm）、Cake softmax SM100（SGLang）、批量张量拷贝（llama.cpp） |

**前沿评估：** vLLM 和 SGLang 在 GPU 服务优化方面并驾齐驱。llama.cpp 在本地/CPU kernel 多样性方面领先。LiteLLM 在代理级吞吐量优化（bounded persistence、WebSocket 计量）方面领先。

---

## 5. 层级定位

| 层级 | 项目 | 描述 |
|-------|----------|-------------|
| **训练 / 微调** | **Unsloth** | LoRA/GGUF 微调、融合 kernel 精度、CPU 训练 |
| **本地运行时** | **llama.cpp**、**Ollama** | llama.cpp = 底层本地引擎；Ollama = 消费者友好封装 |
| **GPU 服务引擎** | **vLLM**、**SGLang** | GPU 集群生产推理；SGLang = 多后端，vLLM = CUDA 优先 |
| **API 网关 / 代理** | **LiteLLM** | 多提供商聚合、成本控制、认证、重试 |

**融合注意：** Ollama 正在向上渗透到服务引擎领域（MLX 内存预分配、分层 KV sizing）。vLLM 正在向下渗透（直接重载权重用于 RL 训练）。层级边界正在模糊。

---

## 6. 趋势信号

### Agent 开发者应关注什么

1. **vLLM 多模态进入生产阶段** — ViT CUDA Graph RFC 表明 vLLM 正从实验阶段走向生产级多模态。如果你在构建带视觉的 agent，vLLM 是 2027 年的稳妥选择。

2. **JIT 消除引发冷启动革命** — vLLM 和 SGLang 都在推理过程中消除 kernel 编译。这消除了尾延迟峰值。曾遭受 5-10 倍冷启动惩罚的部署将看到亚秒级响应能力。

3. **AMD ROCm 不再是二等公民** — SGLang 单日内完成了融合 QK-norm+RoPE、MoE 路由 through aiter、MI355X 优化。如果你一直在等待 AMD GPU 可用性，生态已经就绪。

4. **Apple Silicon MLX 走向成熟** — Ollama 修复了内存预分配；Unsloth 支持微调。作为推理/开发设备的 Mac 现在可用于生产工作负载。

5. **网关可靠性正在改善** — LiteLLM 的 bounded transactional persistence 和 WebSocket 计量修复了长期存在的可靠性问题。如果你通过 LiteLLM 路由，422 锁定竞态条件现已修复。

6. **安全浮出水面** — vLLM 的 `/invocations` 认证绕过提醒我们：基础设施层有安全攻击面。检查你的 API 暴露情况。

### 基础设施决策点

| 决策 | 建议 |
|----------|-----------------|
| **GPU 集群服务** | vLLM（CUDA 优先）或 SGLang（多后端） |
| **本地 / 边缘推理** | llama.cpp 或 Ollama |
| **多提供商聚合** | LiteLLM |
| **微调** | Unsloth |
| **多模态生产** | 等待 vLLM ViT CUDA Graph（v0.5+）或现在使用 SGLang |
| **AMD GPU 部署** | SGLang — 更好的 ROCm 兼容性 |

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Project Digest to Simplified Chinese. I need to follow the rules:
- Output ONLY the translation
- Preserve the Markdown structure exactly (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
- Keep URLs, numbers, dates, issue/PR references verbatim
- Use natural technical Chinese register

Let me translate while preserving the structure and using appropriate Chinese technical terminology.</think>

# vLLM 项目简报 — 2026-10-31

## 1. 今日焦点

vLLM 项目正在推进多模态和分布式推理能力。一个重要的 RFC（#38175，48 条评论）提议为多模态大语言模型（Qwen3-VL、GLM-V、Kimi K2.5）中的 Vision Transformer 支持完整的 CUDA Graph，以满足生产环境的服务需求。与此同时，CUDA _checkpoint/Restore_ 工作（#34303，旨在实现近零冷启动）受到关注，共有 33 条评论和 19 个 👍。性能优化工作持续进行，一个 MoE top-k 优化 PR（#62912）针对 SM80+ GPU，_fp8_ds_mla_ 支持也在 Ampere 上为 Triton MLA 落地（#64783）。

---

## 2. 版本发布与破坏性变更

过去 24 小时内未发布新版本。

---

## 3. 新模型与硬件支持

| 功能 | 描述 | 链接 |
|------|------|------|
| **ViT 完整 CUDA Graph** | RFC 追踪器：为多模态 LLM（Qwen3-VL、Qwen3.5、GLM-V、Kimi K2.5）中的 Vision Transformer 支持完整 CUDA Graph | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| **Triton MLA 中的 fp8_ds_mla** | 在 CUDA SM80+（Ampere，包括 A100）上新增可选的 _fp8_ds_mla_ 解码支持 — DeepSeek FP8 缓存的软件反量化路径 | [#64783](https://github.com/vllm-project/vllm/pull/64783) |
| **AMD ROCm gfx950/MI355X** | AMD MI355X 上 Qwen3.8-Flash-Next 的性能优化追踪，使用 MXFP4 MoE | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **NoPE 稀疏 MLA FP8 KV** | ROCm 缺陷修复：AMD GPU 上无 rope（NoPE）稀疏 MLA 的 FP8 KV 缓存支持 | [#57134](https://github.com/vllm-project/vllm/pull/57134) |

---

## 4. 性能与优化

| 领域 | 工作项 | 详情 |
|------|--------|------|
| **MoE 门控** | Top-k warp 级优化 | PR #62912：使用 _redux.sync_ 选择整 warp 的 top-k 行，将选择保留在寄存器中（SM80+）。每轮选择使用 5 级 shuffle 蝴蝶网络，包含 3 次依赖 shuffle。 |
| **JIT 消除** | 运行时零 JIT | Issue #49349 追踪共享 JIT 预热基础设施；基础 PR #47451、#49315、#50174 已完成。DeepSeek V4 去 JIT 化正在进行中（#49627）。 |
| **冷启动** | CUDA 检查点/恢复 | Issue #34303：通过 CUDA 检查点/恢复实现近零冷启动，用于多模型服务和模型切换场景 — 目标是 v1 引擎。 |
| **RL 训练** | 直接权重重载 | PR #64336：将检查点张量直接写入活动模型，避免每层重载时重复复制层。 |
| **前端** | 自定义工具输入流式处理 | PR #64674：增量解码流式输入的自定义工具，而不是对完整累积输入重新运行 _partial_json_parser_。 |
| **启动基准测试** | 测试改进 | PR #63502：流式输出基准测试结果并为 _test_bench_startup_ 添加超时设置，提升可调试性。 |

---

## 5. 稳定性与回归问题

| 严重程度 | Issue | 概述 |
|----------|-------|------|
| **🔴 安全** | #64391 | 默认启用的 `/invocations` 端点绕过 API 密钥认证 — 允许未经身份验证的 SageMaker 兼容调用。 |
| **🔴 正确性** | #63170 | GLM-5.x（DSA）在流水线并行下重用层时，阶段开始时会读取过时的 top-k 索引。 |
| **🔴 正确性** | #44734 | NVIDIA Qwen3.6-35B-A3B-NVFP4 + MTP 在夜间构建上出现 CUDA 设备端断言错误。 |
| **🟠 崩溃** | #48043 | ROCm Triton _kernel_paged_attention_2d_ 在 gfx950（MI350X）长上下文解码时出现非法内存访问（_hipErrorLaunchFailure_）。 |
| **🟠 崩溃** | #43009 | Triton 内核在推理期间进行 JIT 编译导致运行时失败。 |
| **🟠 缺陷** | #46453 | 混合 Mamba + KV 连接器：每组前缀命中分歧和 vLLM 引擎崩溃。 |
| **🟡 缺陷** | #43750 | XPU _compressed-tensors_ WNA16 MoE 选择器忽略 XPU 平台，在 Marlin 路径上崩溃。 |
| **🟡 缺陷** | #59907 | 优先级调度可能取消在同一调度周期内已调度的请求（编码器缓存未命中、前缀命中）。 |

**已合并/待处理修复：**
- PR #64575（已关闭）：前端按类型拒绝 Anthropic 定义的工具（`/v1/messages`）
- PR #57134（开放）：ROCm NoPE 稀疏 MLA 的 FP8 KV 缓存 — 已合并至验证分支
- PR #41596（开放）：ROCm GCN 架构检测中的循环导入修复

---

## 6. 这对应用开发者意味着什么

1. **多模态服务是重点。** ViT CUDA Graph RFC 表明 vLLM 致力于生产级多模态推理。预计在即将发布的版本中，Qwen3-VL 等模型的预填充吞吐量将得到改善。

2. **冷启动延迟仍是关注点。** CUDA 检查点/恢复工作（#34303）直接解决多租户和多模型服务场景。如果您频繁切换模型，这将显著减少冷启动时间。

3. **JIT 预热正在被消除。** 零 JIT 计划（#49349）旨在消除推理期间的内核编译。这减少了尾延迟峰值 — 对实时应用至关重要。

4. **安全提示：** 如果您公开暴露 vLLM 的 OpenAI 兼容 API，请检查您的身份验证配置。`/invocations` 端点绕过问题（#64391）应通过禁用或添加显式身份验证来解决。

5. **ROCm/AMD 用户：** gfx950/MI355X 优化和分布式推理 CI（#48117）的开发持续进行。如果您使用 AMD GPU，期待即将发布的版本中的改进。

6. **结构化输出 / 工具调用：** 围绕工具调用解析和验证仍有多个缺陷未修复（#55152、#58147、#42031）。如果您依赖函数调用，请使用最新夜间版本进行全面测试。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the English digest into Simplified Chinese, following the strict rules provided. Let me go through each section and translate it naturally while preserving the exact structure.

I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, issue/PR references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

**Title**: # SGLang Digest — 2026-10-31
→ # SGLang 速报 — 2026-10-31

**Today's Highlights**:
The SGLang project is advancing multi-backend support with significant performance optimizations landing across NVIDIA, AMD ROCm, and Ascend NPU. The most active issue tracks persistent CI flakiness (159 comments), while a notable new feature enables adaptive KV load decision-making based on measured costs rather than static heuristics.

SGLang 项目正在推进多后端支持，NVIDIA、AMD ROCm 和 Ascend NPU 上大量性能优化正在落地。最活跃的 Issue 追踪的是持续存在的 CI 不稳定问题（159 条评论），而一个值得关注的新功能实现了基于实测成本而非静态启发式的自适应 KV 加载决策。

**GitHub:** [sgl-project/sglang](https://github.com/sgl-project/sglang)
→ **GitHub：** [sgl-project/sglang](https://github.com/sgl-project/sglang)

---

## Releases & Breaking Changes

| Change | Description | PR/Issue |
|--------|-------------|----------|
| **FlashInfer 0.7.2 → 0.7.2.post1** | Dependency bump; fixes runtime version check | [#46926](https://github.com/sgl-project/sglang/pull/46926) |


| **SIGTERM drain parity** | rust-server now drains on SIGTERM like Python server | [#47489](https://github.com/sgl-project/sglang/pull/47489) |

| 变更 | 描述 | PR/Issue |
|--------|-------------|----------|
| **FlashInfer 0.7.2 → 0.7.2.post1** | 依赖升级；修复运行时版本检查 | [#46926](https://github.com/sgl-project/sglang/pull/46926) |
| **SIGTERM drain 一致性** | rust-server 现支持 SIGTERM 优雅关闭，与 Python server 行为一致 | [#47489](https://github.com/sgl-project/sglang/pull/47489) |

---

## New Model & Hardware Support

The project continues expanding its hardware and model compatibility. T-Head PPU support is actively being developed with plans for SAIL integration across the 810, 810E, and M890P platforms. AMD RDNA3 and RDNA4 graphics processors are in the CI and upstreaming phase, targeting the MI355X and MI45x series. Kimi-K3 NPU DCP integration is underway, with decode context parallelism being implemented for the Ascend platform.

Additionally, Qwen3.8-Flash-Next optimization is focused on gfx950 and MI355X architectures, while Gemma-4's per-layer attention mechanism is being developed to handle the 50-layer sliding-window and 10-layer full-attention configuration. 50 层滑动窗口 + 10 层全注意力层的混合配置需要后端路由支持。

| 变更 | 描述 | PR/Issue |
|--------|-------------|----------|
| **FlashInfer 0.7.2 → 0.7.2.post1** | 依赖升级；修复运行时版本检查 | [#46926](https://github.com/sgl-project/sglang/pull/46926) |
| **SIGTERM drain 一致性** | rust-server 现支持 SIGTERM 优雅关闭，与 Python server 行为一致 | [#47489](https://github.com/sgl-project/sglang/pull/47489) |

---

## 新模型与硬件支持

| 组件 | 状态 | 详情 | 参考 |
|-----------|----------|--------|-----------|
| **T-Head PPU (SAIL)** | 路线图进行中 | 计划支持 Zhenwu 810/810E/M890P 一等公民地位 | [#37519](https://github.com/sgl-project/sglang/issues/37519) |
| **AMD RDNA3/RDNA4 (gfx1100/gfx1201)** | CI/上游化进行中 | MI355X 优化追踪中；gfx1250 (MI45x) PR 就绪 | [#46900](https://github.com/sgl-project/sglang/issues/46900), [#47562](https://github.com/sgl-project/sglang/issues/47562) |
| **Kimi-K3 NPU DCP** | 进行中 | 在 Ascend 上实现 DCP 共享紧凑通信的解码上下文并行 | [#40825](https://github.com/sgl-project/sglang/pull/40825) |
| **Qwen3.8-Flash-Next** | 优化重点 | gfx950 / MI355X 性能追踪 | [#44304](https://github.com/sgl-project/sglang/issues/44304) |
| **Gemma-4 每层注意力** | 进行中 | 50 层滑动窗口注意力机制开发中 | [#44399](https://github.com/sgl-project/sglang/pull/44399) |

---

## 性能与优化

### 已合并 / 审查中

| 优化 | 后端 | 影响 | PR |
|--------------|---------|--------|-----|
| **SM100 上的 Cake softmax** | NVIDIA | 将 FlashInfer 0.7.1 快速路径扩展到 SM103 之外 | [#44168](https://github.com/sgl-project/sglang/pull/44168) |
| **Triton 张量描述符** | NVIDIA | 减少 extend-attention 内核中的指针计算开销 | [#46041](https://github.com/sgl-project/sglang/pull/46041) |
| **FlashInfer AllReduce Fusion** | NVIDIA | 为 Kimi-K3 自动启用（此前仅支持 Kimi-K2.5） | [#47306](https://github.com/sgl-project/sglang/pull/47306) |
| **JIT QK-norm + RoPE 融合** | AMD ROCm | 将每层 5 次内核launch减少为 1 次融合launch | [#47052](https://github.com/sgl-project/sglang/pull/47052) |
| **ROCm 上融合 QK-norm** | AMD ROCm | 移除拷贝，将 2 次 RMSNorm launch 替换为 1 次 | [#39071](https://github.com/sgl-project/sglang/pull/39071) |
| **512 专家 MoE 路由** | AMD ROCm | 通过 aiter topk_gating 为 Qwen3.8 路由 | [#40708](https://github.com/sgl-project/sglang/pull/40708) |
| **JIT_DEEPGEMM_FAST_WARMUP** | NVIDIA | 预热速度提升 3-5 倍（30分钟降至 3分钟以内），chunked-prefill 16384 场景无运行时衰退 | [#47397](https://github.com/sgl-project/sglang/issues/47397) |
| **外部 KV 加载成本分析** | 全平台 | 支持重计算与加载间的自适应决策 | [#47518](https://github.com/sgl-project/sglang/pull/47518) |

---

## 稳定性与回退

### 严重

| Issue | 严重程度 | 状态 | 详情 |
|-------|----------|--------|---------|
| **CI 不稳定** | 高 | 进行中 | 追踪 PR 测试中的不稳定因素；已积累 159 条评论 | [#42752](https://github.com/sgl-project/sglang/issues/42752) |
| **GLM-5.3-Flash SM120 崩溃** | 高 | 进行中 | FA4 attention 后端在 CUDA-graph 捕获时崩溃；triton 是唯一可行方案 | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **DSV4.1 + DSPARK OOM** | 高 | 进行中 | 持续最大批次解码时 CUDA 缓存分配器耗尽 GPU 内存；KV 池仅占用 29% | [#43486](https://github.com/sgl-project/sglang/issues/43486) |
| **Blackwell Xid 13** | 高 | 进行中 | B200 上 HiCache kvcacheio 内核出现"CTA Not Present"错误；4 台机器共崩溃 7 次 | [#46203](https://github.com/sgl-project/sglang/issues/46203) |

### 中等 / 修复中

| Issue | 状态 | 修复 PR |
|-------|--------|--------|
| SGLANG_SIMULATE_ACC_LEN 使 detokenization 退化为 O(n²) | 已关闭（不活跃） | — |
| 调度器在 Mamba 驱逐时阻塞 | 已关闭（不活跃） | — |
| MiniMax-M3 tool-call 解析器 oneOf 处理 | 已关闭（不活跃） | — |
| /v1/responses 丢弃 prompt_cache_key | 已关闭（不活跃） | — |
| Rust-server /internal/peer 中继 bug | 进行中 | — |
| Rust-server gather_server_endpoints 广播 loopback | 进行中 | — |
| Diffusion Nomas KV 预算忽略释放的缓存 | 进行中 | [#47515](https://github.com/sgl-project/sglang/issues/47515) |

---

## 对应用开发者的意义

1. **多后端推理能力正在成熟** — AMD ROCm 优化（QK-norm 融合、MoE 路由）正在快速合并；在 MI300X/MI355X 上部署时，下一个版本可能有明显的吞吐量提升。

2. **NPU 支持正在扩展** — Kimi-K3 DCP 在 Ascend NPU 上支持 DSPARK 投机解码，表明 SGLang 正在成为非 NVIDIA 加速器的可行后端。

3. **冷启动改进** — `SGLANG_JIT_DEEPGEMM_FAST_WARMUP` 标志现在显示预热速度提升 3-5 倍，且在典型 prefill 长度下无运行时衰退；对延迟敏感型部署值得测试。

4. **关注 CI 相关延迟** — 活跃的不稳定测试追踪表明夜间构建可能存在潜在不稳定；生产环境考虑锁定特定发布标签（如 `v0.5.20`）。

5. **Blackwell (B200) 存在已知问题** — 智能体工作负载下的 Xid 13 崩溃对高可用部署构成担忧；需持续关注 NVIDIA 驱动更新。</think>



</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp digest into Chinese. Let me go through the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while preserving the structure:

Title: # llama.cpp Digest — 2026-10-31
→ # llama.cpp 动态 — 2026年10月31日

Section 1: Today's Highlights
→ 今日要闻

Section 2: Releases & Breaking Changes
→ 发布与破坏性变更

Section 3: New Model & Hardware Support
→ 新模型与硬件支持

Section 4: Performance & Optimization
→ 性能与优化

Section 5: Stability & Regressions
→ 稳定性与回归问题

Section 6: What This Means for Application Developers
→ 这对应用开发者意味着什么

Links section needs to be translated but keeping the URLs and text as-is except for translation.

Let me translate the full content:</think>

# llama.cpp 动态 — 2026年10月31日

## 1. 今日要闻

项目保持高速迭代，**24小时内发布10个版本**，包括OpenCL量化支持的重要更新（q2_0）以及KV缓存优化——将旋转常量保留在GPU上。新增了GGML批量张量拷贝API（#30881），有望提升上下文I/O性能。维护团队还在清理技术债务——删除了已弃用的`fs_path_to_utf8()`函数和Windows argv重构代码。

---

## 2. 发布与破坏性变更

| 版本 | 变更 | PR |
|------|------|-----|
| **b12014** | 放弃Windows argv重构；UTF-8清单现在原生处理（修复#26416） | [#31417](https://github.com/ggml-org/llama.cpp/pull/31417) |
| **b12012** | 更新`cpp-httplib`vendor依赖至0.64.0 | [#31400](https://github.com/ggml-org/llama.cpp/pull/31400) |
| **b12004** | 推理预算强制现在在prompt中的结束标签处正确结束 | [#31374](https://github.com/ggml-org/llama.cpp/pull/31374) |

*无破坏性API变更。*

---

## 3. 新模型与硬件支持

- **OpenCL q2_0量化**：初始支持已合并（#31340），为OpenCL后端量化增加了Q2_0支持。
- **Clover模型**：为DiffuSpace的Clover-35B-A3B-Preview添加了GGUF转换、加载和混合注意力支持（#31306）。
- **Granite NVFP4**：修复了llama_model_granite的权重缩放附加问题（#31449，修复#31448）。
- **TMDL Inkling**：架构支持已合并（#25731），包括Flash Attention带状注意力内核。
- **Hexagon DMA**：修复了v75+设备上stride大于24位的传输问题（#31442）。

---

## 4. 性能与优化

- **KV缓存旋转常量**：现在保留在GPU上，而不是每步都拷贝回CPU（#31073）。
- **批量张量拷贝API**：新的GGML级别API，用于高效上下文I/O（#30881）。
- **Gemma4图优化**：通过在KV共享层之前丢弃未使用的prompt token，在E2B和E3B上实现了大幅预填充加速（#31356）。
- **MoE缓存**：新的LRFU/MQ类混合缓存和ClassLRU实现——在QFN上测量解码提升+6%，在GLM上比SLRU提升+7%（#31233）。
- **Hexagon CPY/CONT**：使用DMA → VTCM路径加速转换操作（#30132）。
- **SYCL量化KV**：为解码和小预填充的flash_attn_tile添加了原生量化KV支持（#31234）。
- **WASM Relaxed SIMD**：增强了点积函数（#19590）。

---

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 说明 |
|------|----------|------|------|
| **#24015**：CUDA断言失败`GGML_ASSERT(src_ss[0].axis != GGML_BACKEND_SPLIT_AXIS_0)` | **高** | 开放 | 多GPU（4x3090）分割推理；12条评论 |
| **#30869**：AMD CDNA2（gfx90a）编译失败 | **高** | 开放 | HIP后端；9条评论 |
| **#31068**：SYCL MoE prompt处理在Arc Pro B70上慢28–35% | **中** | 开放 | 11783 → 11851版本间的回归 |
| **#31064**：SYCL在oneAPI 2026.2.0上段错误 | **中** | 开放 | 5条评论 |
| **#28648**：Intel Arc 140V（Windows）上Vulkan输出乱码 | **中** | 已关闭/陈旧 | 受Windows Vulkan版本影响 |
| **#10982**：Apple Silicon上Vulkan vs Metal性能差距 | **研究** | 开放 | Asahi Linux驱动开发者正在调查；58条评论 |

*注意：多个标记为"陈旧"的问题仍在收到更新。*

---

## 6. 这对应用开发者意味着什么

1. **Windows用户**：升级到b12014+以避免潜在的argv编码问题；UTF-8清单方式更加健壮。
2. **OpenCL用户**：Q2_0量化现已可用——适用于内存受限的GPU部署场景。
3. **服务器部署**：Token ID现在在流式/非流式模式间正确保留（#31244），修复了生产环境中的细微确定性问题。
4. **多GPU CUDA用户**：#24015仍处于活跃状态，影响4x3090设置——如需运行大批量推理请密切关注该问题。
5. **ARM/Android（Hexagon）**：DMA修复和CPY优化改进了基于DSP的推理；在骁龙7 Gen 4上关注吞吐量提升。
6. **MoE模型用户**：新缓存实现提供了可测量的解码改进；考虑启用`llama_moe_cache`的自动模式。

---

**链接**: [发布](https://github.com/ggml-org/llama.cpp/releases) · [问题](https://github.com/ggml-org/llama.cpp/issues) · [PR](https://github.com/ggml-org/llama.cpp/pulls) · [官网](https://llama.app)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Simplified Chinese, following the strict rules provided. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - not literal word-for-word, but the register of a Chinese developer newsletter

Let me translate section by section:

## 1. Today's Highlights

Today's highlights should translate to something like "今日要闻" or "今日焦点"

Let me go through the entire document:

---

# Ollama Digest — 2026-10-31

# Ollama 动态 — 2026年10月31日

## 1. Today's Highlights

## 1. 今日要闻

A mix of bug fixes and new feature work landed today. The most impactful items are an MLX memory pre-flight fix that addresses scheduler eviction issues on Apple Silicon, a pending fix for dropped Anthropic thinking blocks, and several notable bug reports including a Windows 11 TCP state issue and Qwen3.5 returning thinking-only responses. No new releases in the last 24 hours.

今日修复了多个 bug 并推进了新功能开发。最值得关注的是：MLX 内存预检修复（解决 Apple Silicon 上的调度器驱逐问题）、待合并的 Anthropic thinking blocks 丢失修复，以及若干重要问题报告——包括 Windows 11 TCP 状态问题和 Qwen3.5 只返回 thinking 内容的问题。过去 24 小时内无新版本发布。

## 2. Releases & Breaking Changes

## 2. 版本发布与重大变更

- **No new releases** in the last 24 hours

- **过去 24 小时内无新版本发布**
 
## 3. New Model & Hardware Support

## 3. 新模型与硬件支持

Several PRs expand model compatibility and system support. AutoTrust decision models for MLX now integrate through creation, prompt encoding, and API routing. Intel Mac users on macOS 12 (Monterey) receive best-effort support, particularly for 2015 iMacs capped at 12.7.6. MLX decision models can handle longer state and schema inputs with bounded total prompt expansion before runner loading, maintaining existing GGUF limits and returning 413 for oversized requests.

多个 PR 扩展了模型兼容性和系统支持。AutoTrust decision models 现已通过创建、提示编码和 API 路由集成到 MLX 中。macOS 12 (Monterey) 的 Intel Mac 用户获得最佳效果支持，特别是 2015 款 iMac 上限为 12.7.6 的情况。MLX decision models 支持更长的状态和模式输入，同时在加载运行器前限制总提示扩展，保持现有 GGUF 限制并对过大请求返回 413。

## 4. Performance & Optimization

## 4. 性能与优化

I need to continue translating the next section about performance and optimization, focusing on maintaining the technical register while preserving the markdown structure and technical details. 性能和优化方面取得了显著进展。MLX 内存预检修复解决了调度器在 Apple Silicon 上的静态权重预订问题，使 MLX 加载与 llama-server 的内存估算保持一致。分层 KV 缓存大小调整提高了模型层间差异的准确性，减少了过度预订和不必要的驱逐。Claude Code 输出令牌限制从 32k 提升至 128k，解决了思维密集型模型的截断问题。

MLX 运行器新增了重复限制支持，当检测到 101 个连续相同令牌时生成中止。禁用推测解码的切换功能允许对 MLX 推测解码进行准确的基准测试比较。

稳定性方面出现多个严重问题。Windows 11 26H2 中，本地 TCP 表为 Ollama 环回 endpoint 返回非 LISTEN 状态，可能导致连接失败。云端 `/v1/chat/completions` 自 10 月 16 日起返回无 HTTP 响应，已排队请求等待 5 分钟后收到 429。

Qwen3.5 4B 在长对话且 `num_ctx` 较高（65536）时仅返回 thinking 内容。中等严重级别问题包括 Anthropic `/v1/messages` 中只有最后一个 thinking 块被保留导致早期块丢失、Gemma4 在 Windows 11 上返回 500 错误，以及 Claude Code 自动压缩失败导致上下文压缩未触发。

低严重级别问题涉及 `ollama ls` 在交互式终端中耗时 5 秒、Blob 上传失败后仍保存数据导致磁盘空间浪费、Modelfile 文档与实际行为不一致（参数名和消息角色区分大小写），以及 CRLF 格式 Modelfile 中的行尾符处理。

对于 MLX 模型用户，即将推出的 PR #19419 应能改善多模型加载时的意外驱逐问题。Anthropic 兼容端点的 thinking 块回归问题会导致多轮对话中早期的 thinking 内容被静默丢弃。Windows 11 26H2 部署者需注意 TCP 状态检测可能存在可靠性问题。

使用 Qwen3.5 配合高上下文窗口时，模型可能在长对话中仅返回 thinking 内容，需考虑变通方案或等待修复。Claude Code 用户现在可以处理更长的推理过程，因为输出令牌限制已提升至 128k。

大规模部署中 OpenAI 兼容 API 的响应 ID 唯一性问题也已解决。</think>

# Ollama 动态 — 2026年10月31日

## 1. 今日要闻

今日修复了多个 bug 并推进了新功能开发。最值得关注的是：MLX 内存预检修复（解决 Apple Silicon 上的调度器驱逐问题）、待合并的 Anthropic thinking blocks 丢失修复，以及若干重要问题报告——包括 Windows 11 TCP 状态问题和 Qwen3.5 只返回 thinking 内容的问题。过去 24 小时内无新版本发布。

## 2. 版本发布与重大变更

- **过去 24 小时内无新版本发布**

## 3. 新模型与硬件支持

- **MLX 的 AutoTrust decision 模型** — PR #19399 引入了对 AutoTrust 文本和视觉模型的支持，涵盖创建、提示编码和 API 路由。测试候选：`./ollama pull dhiltgen/autotrust-jev`  
  <https://github.com/ollama/ollama/pull/19399>

- **Intel Mac macOS 12 (Monterey) 支持** — PR #19413 为运行在 macOS 12.x 上的 Intel Mac（如被锁定在 12.7.6 的 2015 款 iMac）添加了尽力而为的支持。桌面应用和 CLI 现在尝试在 Monterey 上运行；较新 macOS 版本的默认设置保持不变。  
  <https://github.com/ollama/ollama/pull/19413>

- **MLX decision 模型的长 System One 请求** — PR #19408 允许更长的状态和 schema 输入到 MLX decision 模型，同时在加载 runner 前限制总提示展开。保留现有 GGUF 限制，对过大请求返回 413。  
  <https://github.com/ollama/ollama/pull/19408>

## 4. 性能与优化

- **MLX 内存预检修复** — PR #19419（开放中）修复了 #19417：MLX 模型当前跳过调度器的内存预检，仅按静态权重预订，导致不必要的驱逐。该修复使 MLX 加载与 llama-server 的内存估算方式一致。  
  <https://github.com/ollama/ollama/pull/19419> · <https://github.com/ollama/ollama/issues/19417>

- **逐层 KV 缓存大小调整** — PR #19327 采用逐层预测 KV 缓存大小而非均匀分配。这提高了对各层差异较大的模型的估算精度，减少过度预订和不必要的驱逐。  
  <https://github.com/ollama/ollama/pull/19327>

- **Claude Code 输出令牌上限提升** — PR #19410（已合并）将 Claude Code 连接的 最大输出令牌从 32k 提升到 128k，解决了思维密集型模型的截断问题。  
  <https://github.com/ollama/ollama/pull/19410>

- **MLX 令牌重复限制** — PR #19398（已合并）为 MLXRunner 添加了重复限制支持：出现 101 个相同令牌后，生成中止并返回 `prediction aborted, token repeat limit reached`。  
  <https://github.com/ollama/ollama/pull/19398>

- **MLX 推测解码开关** — PR #19391 添加了 `draft_num_predict=0` 支持，可在每个请求级别禁用推测解码，从而实现准确的 MLX 推测解码基准测试。  
  <https://github.com/ollama/ollama/pull/19391>

## 5. 稳定性与回归问题

**高严重级别：**

| 问题 | 描述 | 状态 |
|-------|-------------|--------|
| [#19418](https://github.com/ollama/ollama/issues/19418) | Windows 11 26H2：本地 TCP 表为 Ollama loopback endpoint 返回非 LISTEN 状态 — 可能在特定 Windows 配置下导致连接失败 | 开放中，2 条评论 |
| [#19111](https://github.com/ollama/ollama/issues/19111) | 云端 `/v1/chat/completions` 返回无 HTTP 响应；排队请求等待 5 分钟后收到 429 — 自 2026-10-16 起影响 Pro 套餐用户 | 开放中，6 条评论 |
| [#18916](https://github.com/ollama/ollama/issues/18916) | Qwen3.5 4B 在高 `num_ctx` (65536) 的长对话中仅返回 thinking 内容（无 content/tool call） | 开放中，3 条评论 |

**中严重级别：**

| 问题 | 描述 | 状态 |
|-------|-------------|--------|
| [#19415](https://github.com/ollama/ollama/issues/19415) | Anthropic `/v1/messages`：仅保留最后一个 thinking 块，早期块被静默丢弃 | 开放中，1 条评论 — **PR #19416 已修复此问题** |
| [#19420](https://github.com/ollama/ollama/issues/19420) | 全新安装：Gemma4 在 Windows 11 上返回 500 Internal Server Error | 开放中，1 条评论 |
| [#19249](https://github.com/ollama/ollama/issues/19249) | Claude Code 自动压缩失败，提示 "deepseek-v4.1-flash:1017-cloud" — 上下文压缩未触发 | 开放中，4 条评论 |
| [#19403](https://github.com/ollama/ollama/issues/19403) | Cogito 配合 `think: true` + tools：渲染器在提示末尾保留 `<think>`，但解析器期望不同 | 开放中，1 条评论 |

**低严重级别 / 文档类：**

| 问题 | 描述 | 状态 |
|-------|-------------|--------|
| [#15597](https://github.com/ollama/ollama/issues/15597) | `ollama ls` 在交互式终端中耗时 5 秒（stdout 上的 pselect6 超时）— 管道输出时约 14ms 完成 | 开放中，3 条评论 |
| [#19414](https://github.com/ollama/ollama/issues/19414) | Blob 上传 digest 不匹配（400）时仍保存上传数据到磁盘，导致孤立文件 | 开放中 |
| [#19405](https://github.com/ollama/ollama/issues/19405) | Modelfile 文档声称不区分大小写，但参数名和消息角色实际区分大小写 | 开放中 |
| [#19404](https://github.com/ollama/ollama/issues/19404) | CRLF 格式的 Modelfile 在三引号值内保留 `\r` | 开放中 |

## 6. 这对应用开发者意味着什么

- **如果你在 Apple Silicon 上运行 MLX 模型**：待合并的 PR #19419 应该能减少加载多个模型时不必要的 runner 驱逐。PR #19327 的逐层 KV 缓存大小调整进一步提升了内存估算精度。

- **如果你使用 Anthropic 兼容端点**：thinking block 回归问题（#19415）会导致多轮对话中早期的 thinking 内容被静默丢弃。PR #19416 是修复方案；请关注合并进度。

- **如果你在 Windows 11 26H2 上部署**：存在一个开放问题（#19418），TCP 状态检测可能不可靠；如果遇到本地 Ollama endpoint 连接问题，可能是此原因导致。

- **如果你使用高上下文窗口的 Qwen3.5**：问题 #18916 显示模型在 64K 上下文的长对话中仅返回 thinking 内容——请考虑变通方案或等待修复。

- **如果你将 Claude Code 与 Ollama 配合使用**：输出令牌限制已提升至 128k（PR #19410），因此长推理过程不再会被截断。

- **如果你基于 OpenAI 兼容 API 构建应用**：PR #19401 使响应 ID 在所有端点上唯一（此前 chat/completions 的 ID 限制为 999 个不同值），这对于大规模追踪响应的客户端很重要。

---

Rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate this LiteLLM digest from English to Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep project names, repository slugs, version tags in original form
5. Use natural technical Chinese - register of a Chinese developer newsletter

Let me translate this carefully, maintaining the structure and tone.</think>

# LiteLLM 动态 — 2026-10-31

## 今日要闻

LiteLLM 项目在本周显著提升了流式输出的可靠性并改进了路由基础设施。一个破坏性变更现在会在流结束但没有 finish reason 时正确失败（防止客户端将截断的响应视为完整），而持续的 Rust 路由迁移继续推进核心提取和架构文档工作。同时修复了多个成本计算 bug，包括一个关键修复——在密钥更新期间处理进行中请求时的预算窗口支出计算问题。

---

## 版本发布与破坏性变更

| 版本 | 变更 | 链接 |
|---------|--------|-------|
| **v1.109.0-dev.2** | Docker 镜像现使用 cosign 签名（密钥来自 commit `e82a3c6`） | [Release](https://github.com/BerriAI/litellm/releases/tag/v1.109.0-dev.2) |
| **[#47665](https://github.com/BerriAI/litellm/pull/47665)** | **破坏性变更**: 没有 finish reason 的流现将以错误失败，而非合成 "stop" — 客户端、日志和响应缓存现将正确识别截断的响应 | PR |
| **[#47676](https://github.com/BerriAI/litellm/pull/47676)** | 修复冷 Spend 计数器 bug：计数器现提升至缓存支出而非累加，防止计数器变冷后多个请求到达时出现 422 锁定 | PR |

---

## 新模型与硬件支持

| 提供商/模型 | 新增支持 | 备注 |
|----------------|---------------|-------|
| **Hostinger Router** | 新增为 OpenAI 兼容提供商 | 支持聊天补全、responses、messages 和 embedding；价格来自 Hostinger 公开目录 [#44863](https://github.com/BerriAI/litellm/pull/44863) |
| **Meta Model API** | 新增至 UI Dashboard 提供商下拉菜单 | 修复 "Add Model" UI 中缺少的提供商 [#36164](https://github.com/BerriAI/litellm/issues/36164) |
| **Nano-Gpt** | 新增至 UI Dashboard 提供商列表 | 文档中有但 UI 中缺失 [#34499](https://github.com/BerriAI/litellm/issues/34499) |
| **DeepSeek V4** | `reasoning_effort` ("high"/"max") 现传递至 API | 之前被剥离为 `thinking: {"type": "enabled"}` [#27439](https://github.com/BerriAI/litellm/issues/27439) |

---

## 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **Router** | Rust 路由核心已添加，位于 `LITELLM_RUST` 标志后 | 从 Rust 核心提供 completions、messages、embeddings 和 responses 路由；不支持的配置回退至 Python 核心 [#49120](https://github.com/BerriAI/litellm/pull/49120) |
| **Accounting** | 有界的事务性使用持久化 | 临时数据库故障期间接受的批次保留容量预留；仅在 event 和 delivery 行提交后才完成确认 [#49190](https://github.com/BerriAI/litellm/pull/49190) |
| **Durable Meter** | 可选的持久化使用捕获 | 有界缓冲带提交确认；跨请求类型保留使用量、价格输入和归属 [#49133](https://github.com/BerriAI/litellm/pull/49133) |
| **WebSocket Billing** | WebSocket 直通中继的可选计量 | 对上游从不报告使用量的路由启用计费 — 在会话结束时测量客户端文本帧并记录成本 [#49281](https://github.com/BerriAI/litellm/pull/49281) |
| **FIPS Mode** | `LITELLM_FIPS_MODE` 启动门禁 | 除非运行 FIPS 加密，否则代理拒绝启动；修复了股票和红帽 Python 的探测 [#48600](https://github.com/BerriAI/litellm/pull/48600) |
| **Tracing** | 模型列表请求使用调用者的 traceparent 追踪 | 改进下游调试的可观测性 [#49368](https://github.com/BerriAI/litellm/pull/49368) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | [#49179](/BerriAI/litellm/issues/49179): 进行中请求期间调用 `/key/update` 会将该请求的成本从预算窗口支出中丢弃 | OPEN | — |
| **高** | [#39057](/BerriAI/litellm/issues/39057): 缓存命中时 `spend` 为零但 token 列回放原始使用量 — token 报告汇总不正确 | OPEN | — |
| **中** | [#36168](/BerriAI/litellm/issues/36168): 当最终 chunk 有非空 `choices` 数组时流式传输丢弃上游 `usage` — cached_tokens 丢失，成本按全输入费率计费 | OPEN | — |
| **中** | [#34031](/BerriAI/litellm/issues/34031): 代理摄入无界的上游错误响应体 → 事件循环停滞 / RSS 暴涨（~114 MB） | CLOSED | — |
| **中** | [#49213](/BerriAI/litellm/issues/49213): API keys 表在 49 条目处截断（实际有 99 个密钥） | CLOSED | — |
| **低** | [#45546](/BerriAI/litellm/issues/45546): Mistral `reasoning_content` 被丢弃而非作为 thinking chunk 发送 | CLOSED | — |
| **低** | [#45536](/BerriAI/litellm/issues/45536): Perplexity search 丢弃 `search_recency_filter`、`date`、`language`、`mode` 参数 | CLOSED | — |
| **低** | [#43012](/BerriAI/litellm/issues/43012): Anthropic `model_context_window_exceeded` 映射为 `"stop"` 而非正确的 finish reason | CLOSED | — |

---

## 这对应用开发者意味着什么

1. **流式响应现更可靠**: 如果 provider 流提前终止而没有 finish reason，LiteLLM 将返回错误而非静默截断。请更新您的客户端以优雅处理不完整的流——这可防止生产环境中的数据丢失。

2. **预算跟踪改进**: 冷 Spend 计数器修复（[#47676](https://github.com/BerriAI/litellm/pull/47676)）解决了一个竞态条件，当计数器变冷后多个请求同时到达时，原本在预算内的用户可能被 422 错误锁定。

3. **FIPS 合规性更明确**: 如果需要 FIPS 加密，请在启动时设置 `LITELLM_FIPS_MODE=true` — 如果运行时不支持，代理现将拒绝启动。

4. **WebSocket 计费可用**: 如果您使用 WebSocket 直通且 provider 不报告使用量，现可根据客户端文本帧计量会话（[#49281](https://github.com/BerriAI/litellm/pull/49281)）。

5. **重试行为扩展**: SDK Decisions 和 async Messages 调用现 SDK 层遵守 `num_retries`，Messages 在转换为 Chat 或 Responses 时保留一次重试预算（[#49292](https://github.com/BerriAI/litellm/pull/49292)）。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the digest about Unsloth into Simplified Chinese, following specific rules. Let me go through the content carefully:

1. Keep all Markdown structure exactly as-is
2. Keep URLs, numbers, dates, issue/PR references (#numbers)
3. Keep project names, version tags, technical terms
4. Use natural technical Chinese - register of a Chinese developer newsletter
5. Output ONLY the translation, no explanation, no markdown fences

Let me translate section by section:

## 1. Today's Highlights

The v0.1.913-beta release delivers UI/UX customization (custom backgrounds), performance improvements for Linux apps and Qwen-Image generation under limited VRAM, and faster app update times. DeepSeek-V4.1-Flash-1017 GGUFs are now available in Unsloth's Dynamic v3.1 format. Meanwhile, two critical regression bugs affecting isolated installs (UNSLOTH_STUDIO_HOME) are flagged as incident-level, requiring immediate attention.

v0.1.913-beta 版本带来 UI/UX 自定义功能（自定义背景）、Linux 应用和 Qwen-Image 生成在显存受限时的性能优化，以及更快的应用更新时间。DeepSeek-V4.1-Flash-1017 GGUF 现已以 Unsloth Dynamic v3.1 格式提供。同时，两个影响独立安装（UNSLOTH_STUDIO_HOME）的关键回归 bug 被标记为事故级别，需要立即处理。

## 2. Releases & Breaking Changes

## 2. 版本与破坏性变更

| Version | Changes | Link |
|---------|---------|------|
| **v0.1.913-beta** | UI/UX 自定义（自定义背景）、更快的应用更新、Linux 应用和 Qwen-Image 生成在显存受限时提速、DeepSeek-V4.1-Flash-1017 GGUF（Dynamic v3.1） | [Release](https://github.com/unslothai/unsloth/releases) |

## 3. New Model & Hardware Support

## 3. 新模型与硬件支持

- **DeepSeek-V4.1-Flash-1017**: 现已在 Unsloth Dynamic v3.1 GGUF 中提供 — 预览版已上线。

DeepSeek-V4.1-Flash-1017 已作为 Unsloth Dynamic v3.1 GGUF 提供预览版本。该版本引入 UI/UX 自定义功能，包括自定义背景，同时改进了 Linux 应用和 Qwen-Image 生成在显存受限时的性能表现，并加快了应用更新速度。

针对 LFM3-Omni 的多个问题已修复，包括视频输入、safetensors 加载和 MLX 显示问题。Dolphin Venice Edition 的 MLX 渲染问题也已解决，现在其 UI 显示与其他应用保持一致。

性能优化方面包括 LoRA 融合精度改进，通过在基础 GEMM 内部添加秩-r 项来防止小更新被舍入误差消除；Gemma 3 生成现已路由至非灵活注意力路径以提高吞吐量。

Linux 应用和 Qwen-Image 生成在显存受限时获得速度提升，应用更新延迟也相应减少。MoE + offload_layers 中的崩溃问题已修复，现在可以正确读取被驱逐的专家权重。分词器兼容性也得到改进，保存 tokenizer_class 而不是 TokenizersBackend，以支持跨版本加载。

此外，针对训练截断进行了优化，从保存的分词器中移除训练 padding/truncation 设置，从而解决了 vLLM 中 OCR 提示失败的问题。

在稳定性方面，存在一个关键问题：UNSLOTH_STUDIO_HOME 的隔离安装会静默覆盖基础 venv，这会破坏多租户配置。Windows + AMD 平台上 llama-server 在加载 GGUF 后仍保留约 16GB 提交电荷，即使选择了"不保留系统 RAM"选项也会耗尽提交限制。

MLX 内存估算器对 24GB Mac 上可加载的模型报告了 69.7 GiB 的内存占用。Linux 桌面版上的拼写检查功能出现故障，上下文在返回长对话时无法压缩，导致对话无法继续，视频附件因 CSP 阻止数据 URL 获取而无法在内置应用中打开。

多实例部署应避免新的独立安装直到修复完成。fine-tune 工作流方面，跨平台兼容性改进使得在 vLLM 0.17 和旧版 transformers 堆栈中能正确加载 Unsloth 保存的 fine-tune。显存受限场景下，Linux 应用和 Qwen-Image 生成的性能优化直接惠及桌面用户。

结合 MoE + offload_layers 修复，更大的专家模型现已能在显存受限的设备上运行。音频 VLM 训练方面，Gemma 3n、Gemma 4、LFM3-Omni 等模型的音频+图像混合数据集现在能正确训练两种模态。CPU 训练支持扩展了 CI/CD 和本地原型选项。需要注意 UNSLOTH_STUDIO_HOME 回归问题会影响多实例部署，应在修复前避免新的独立安装。

GitHub 数据显示 2026-10-31 的版本包含重要改进，但存在需要关注的稳定性问题。

表格需要保持原有格式，包括 Markdown 表格的列对齐标记。

我需要在标题行和分隔行之间保持所有内容不变，确保 URL 链接保持完整，将所有技术术语转换为自然的技术中文表达，同时保留项目名称和版本号。</think>

# Unsloth 要闻 — 2026-10-31

## 1. 今日焦点

v0.1.913-beta 版本带来 UI/UX 自定义功能（自定义背景）、Linux 应用和 Qwen-Image 生成在显存受限时的性能优化，以及更快的应用更新时间。DeepSeek-V4.1-Flash-1017 GGUF 现已以 Unsloth Dynamic v3.1 格式提供。与此同时，两个影响独立安装（UNSLOTH_STUDIO_HOME）的关键回归 bug 被标记为事故级别，需要立即处理。

---

## 2. 版本与破坏性变更

| 版本 | 变更 | 链接 |
|------|------|------|
| **v0.1.913-beta** | UI/UX 自定义（自定义背景）、更快的应用更新、Linux 应用和 Qwen-Image 生成在显存受限时的性能优化、DeepSeek-V4.1-Flash-1017 GGUF（Dynamic v3.1） | [Release](https://github.com/unslothai/unsloth/releases) |

---

## 3. 新模型与硬件支持

- **DeepSeek-V4.1-Flash-1017**：现已在 Unsloth Dynamic v3.1 GGUF 中提供 — 预览版已上线。([docs](https://unsloth.ai/docs/models/deepseek-v4.1-flash))
- **LFM3-Omni**：多项修复已合并 — 视频输入（[#16065](https://github.com/unslothai/unsloth/issues/16065)）、safetensors 加载（[#16054](https://github.com/unslothai/unsloth/issues/16054)）、MLX 显示（[#15832](https://github.com/unslothai/unsloth/issues/15832)）
- **Dolphin Venice Edition（MLX）**：Bug 已修复 — UI 渲染现与其他应用保持一致。([#15858](https://github.com/unslothai/unsloth/issues/15858))

---

## 4. 性能与优化

| 领域 | 变更 | PR |
|------|------|-----|
| **融合 LoRA 精度** | 内核现已在基础 GEMM 内部添加秩-r 项，以防止小更新被舍入误差消除 | [#16071](https://github.com/unslothai/unsloth/pull/16071) |
| **Gemma 3 生成** | 路由至非 flex_attention 路径而非灵活注意力回退，以获得更高吞吐量 | [#16041](https://github.com/unslothai/unsloth/pull/16041) |
| **Linux 应用与 Qwen-Image 生成** | 显存受限时提速 | v0.1.913-beta |
| **应用更新时间** | 降低更新延迟 | v0.1.913-beta |
| **MoE + offload_layers** | 修复 `get_peft_model` 崩溃 — 驱逐的专家权重现在可正确读取 | [#15159](https://github.com/unslothai/unsloth/pull/15159) |
| **分词器兼容性** | 保存 `tokenizer_class` 而非 `TokenizersBackend`，实现跨版本加载（transformers 5.2→5.5） | [#16104](https://github.com/unslothai/unsloth/pull/16104) |
| **训练截断** | 从保存的分词器中移除训练 padding/truncation — 修复 vLLM 中的 OCR 提示失败 | [#16102](https://github.com/unslothai/unsloth/pull/16102) |

---

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **Critical** | UNSLOTH_STUDIO_HOME 独立安装静默覆盖基础 venv — 破坏多租户部署 | Open | — |
| **Critical** | 同一回归 — 重复报告 | Open | — |
| **High** | Windows + AMD：llama-server 加载 GGUF 后保留约 16 GB 提交内存，即使启用"不保留系统 RAM" — 提交限制耗尽 | Closed | — |
| **High** | MLX 内存估算器对 24GB Mac 上可加载的模型报告 69.7 GiB | Closed | — |
| **Medium** | Linux 桌面版拼写检查失效（v0.1.913-beta） | Open | — |
| **Medium** | 返回长对话时上下文不压缩 — 导致对话无法继续 | Closed | — |
| **Medium** | 内置应用中无法打开视频附件 — CSP 阻止 data URL 获取 | Open | — |
| **Low** | Gallery → "在文件夹中显示"在 Linux 上无响应 | Open | — |

---

## 6. 这对应用开发者的意义

1. **Fine-tuning 工作流** — PR [#16102](https://github.com/unslothai/unsloth/pull/16102) 和 [#16104](https://github.com/unslothai/unsloth/pull/16104) 改善了跨平台兼容性：在 vLLM 0.17 和旧版 transformers 堆栈中现在可以正确加载 Unsloth 保存的 fine-tune。如果您正在将 fine-tune 导出到其他环境进行推理，请升级以获取这些修复。

2. **显存受限场景** — v0.1.913-beta 对 Linux 应用和 Qwen-Image 生成在显存受限时的优化直接惠及使用消费级 GPU 的桌面用户。结合 MoE + offload_layers 修复（[#15159](https://github.com/unslothai/unsloth/pull/15159)），更大的专家模型现已可以在显存受限的设备上运行。

3. **音频 VLM 训练** — PR [#16124](https://github.com/unslothai/unsloth/pull/16124) 修复了一个静默数据泄露：混合音频+图像数据集现在可以正确训练音频 VLM（Gemma 3n、Gemma 4、LFM3-Omni）的两种模态。如果您一直在使用这些模型，请验证您的数据集。

4. **CPU 训练** — PR [#16175](https://github.com/unslothai/unsloth/pull/16175) 实现了无 GPU 主机上的 CPU 训练，扩展了 CI/CD 和本地原型选项。

5. **注意** — 关键回归（[#16186](https://github.com/unslothai/unsloth/issues/16186)）会影响多实例部署。在修复发布之前，请避免进行新的独立安装。

---

*数据来源：GitHub — unslothai/unsloth（2026-10-31）*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*