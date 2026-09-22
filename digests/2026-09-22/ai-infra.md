# AI 基础设施日报 2026-09-22

> 生成时间: 2026-09-22 01:04 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the English report into Chinese, following specific rules. Let me translate it while:
1. Keeping all Markdown structure exactly (headings, tables, lists, etc.)
2. Keeping all identifiers, URLs, PR numbers, etc. as-is
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. NOT wrapping the output in markdown fences
5. Outputting ONLY the translation

Let me go through each section:

1. Ecosystem Overview - translate naturally
2. Activity Comparison - translate table content, keep numbers/identifiers
3. Model Support Race - translate table content, keep model names
4. Performance Frontier - translate
5. Layer Positioning - translate
6. Trend Signals - translate bullets, keep identifiers

Let me do this carefully.</think>

# 跨项目对比报告 — AI 基础设施生态系统概览

---

## 1. 生态系统概览

当今的 AI 基础设施格局呈现出清晰的层级专业化特征。**vLLM 和 SGLang** 在高性能推理服务层持续竞争，双方都在竞相支持 Blackwell (SM120) 硬件和先进的量化格式 (nvfp4、MXFP8、MXFP4)。**llama.cpp** 保持其通用运行时的地位，现已从本地/移动端推理拓展到 GPU 驻留 MoE 缓存和 Vulkan 优化。与此同时，**Ollama** 通过清单处理改进简化了部署，**LiteLLM** 则提供了网关/编排层，支持 PII 掩码和优先级路由。**Unsloth** 占据微调层，解决显存优化和视觉模型训练问题。整体信号：生态系统正在向异构硬件支持（Intel XPU、AMD ROCm、Apple Silicon、Imagination PowerVR）和 Agent 工作负载（思考块、工具调用、KV 缓存感知）成熟。

---

## 2. 活动对比

| 项目 | Issue (24h) | PR 合并/进行中 | Release (24h) | 主要关注领域 |
|------|-------------|----------------|---------------|--------------|
| **vLLM** | 14 (6 严重) | 10+ 已合并, 8+ 进行中 | 无 | 推理引擎、Blackwell KV 缓存、PD 拆链 |
| **SGLang** | 10 (3 高) | 7+ 已合并, 5+ 进行中 | 无 | 推理引擎、流水线并行、Agent 感知缓存 |
| **llama.cpp** | 9 (2 严重) | 12+ 已合并, 8+ 进行中 | 3 个破坏性变更 | 本地/移动端运行时、Vulkan、MoE 缓存 |
| **Ollama** | 2 (1 中) | 6 已合并, 1 个重大重构 | 无 | 简化部署、清单处理 |
| **LiteLLM** | 10 (4 高) | 10+ 已合并, 3+ 进行中 | 无 | 网关/编排、定价、PII 掩码 |
| **Unsloth** | 20 (3 高) | 20+ 进行中 | 无 | 微调、视觉模型、显存优化 |

**观察：** vLLM 和 SGLang 展现出最高的推理服务层活动量，而 Unsloth 在训练/微调层领先。LiteLLM 主导网关层工作。

---

## 3. 模型支持竞争

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-------------|------|--------|-----------|--------|----------|
| **Blackwell SM120 (nvfp4 KV)** | 🔥 进行中 (#49011) | 跟踪中 (#37813) | — | — | — |
| **Qwen3-Omni** | — | — | — | — | ✅ 已添加 (#11467) |
| **GLM-5.3-Flash** | 🔥 Bug 修复 (#56868, #56605) | 🔥 跟踪中 (#37105) | — | — | — |
| **DeepSeek V4.1 MXFP8** | ✅ Fusion 已合并 (#57428) | — | — | — | — |
| **Ling 3.0 VL** | — | — | ✅ 已添加 (#29151) | — | — |
| **SenseNova-U1** | — | 🔥 路线图 (#37742) | — | — | — |
| **Phi-4-reasoning-vision** | — | — | — | — | ✅ 已修复 (#11469) |
| **Muse-Glimmer** | — | — | — | — | 🔥 Bug (#11434) |
| **Kimi K3 (MI355X)** | ✅ GEMM-RS Fusion | ✅ CI/测试工作 | — | — | — |

**谁领先：**  
- **Blackwell / SM120：** vLLM 领先，正在积极推进 KV 缓存接线；SGLang 跟踪中。
- **GLM-5.x：** vLLM 和 SGLang 都有活跃的 bug；llama.cpp 通过标准 MLA 支持。
- **视觉-语言：** llama.cpp 添加了 Ling 3.0 VL；Unsloth 修复了 Phi-4-reasoning-vision。
- **MoE 优化：** llama.cpp 领先实现了 GPU 驻留 LRU 缓存；vLLM 类似工作正在进行中。

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 关键工作 |
|----------|----------|----------|
| **KV 缓存 / 量化** | vLLM, SGLang, llama.cpp | nvfp4 (SM120)、MXFP8 Fusion、GPU 驻留 MoE 缓存、缓存感知准入 |
| **批处理 / 调度** | vLLM, SGLang | DP 外预填充调度、可中断 CUDA 图、基数缓存淘汰批处理 |
| **内核融合** | vLLM, llama.cpp | MXFP8 GEMM+RS Fusion、ROCm AITER Fusion、Vulkan F32 一次加载 2 个 |
| **分布式推理** | vLLM, SGLang | PD 拆链扩展、流水线并行路线图、P/D KV 传输计量 |
| **显存管理** | llama.cpp, Unsloth | 移除 MAP_POPULATE、--no-mmap-prefetch、跳过冗余 TRL kbit 准备 |
| **流式输出** | LiteLLM, llama.cpp | 流式 PII 掩码、Redis 语义缓存修复 |

**前沿集中度：** 最高价值的工作集中在 KV 缓存创新（Blackwell nvfp4、MXFP8、GPU 驻留 MoE 缓存）和分布式推理（PD 拆链、流水线并行）。这些直接影响长上下文和多租户部署的吞吐量和延迟。

---

## 5. 层级定位

| 层级 | 主要项目 | 角色 |
|------|----------|------|
| **网关 / 编排** | LiteLLM | API 代理、成本追踪、PII 掩码、多供应商路由 |
| **推理引擎** | vLLM, SGLang | 高吞吐 LLM 推理、KV 缓存管理、PD 拆链 |
| **本地运行时** | llama.cpp | 跨平台推理、移动端/Vulkan、轻量部署 |
| **简化部署** | Ollama | 单二进制分发、清单管理、易用性 |
| **微调 / 训练** | Unsloth | 显存高效训练、视觉微调、GGUF 导出 |

**关键差异：**  
- **vLLM vs SGLang：** 双方都瞄准高性能推理服务；vLLM 在 Blackwell 硬件上领先，SGLang 在流水线并行路线图和 Agent 感知 KV 缓存上领先。SGLang 与 Radix (LMCache) 的集成更紧密。
- **llama.cpp vs Ollama：** llama.cpp 是引擎；Ollama 包装它以简化使用。Ollama 的清单工作支持多运行时共存。
- **LiteLLM vs 全局：** LiteLLM 位于所有后端之上，提供统一 API、可观测性和跨后端的成本控制。

---

## 6. 趋势信号

### Agent / 应用开发者应关注

1. **Blackwell (SM120) 支持即将推出** — vLLM 和 SGLang 都在积极推进 `nvfp4` KV 缓存。预计在 RTX 5090 / PRO 6000 上数周内即可实现 200K+ 上下文窗口。Blackwell 硬件发布后，请在您的长上下文 Agent 工作流中进行测试。

2. **Agent 感知 KV 缓存即将到来** — SGLang 的 RFC (#24656) 和 vLLM 的缓存感知准入排序标志着从通用批处理向工作流感知缓存的转变。拥有重复上下文（检索、工具、历史）的 Agent 将显著受益。

3. **思考 Token 现已成为一等公民** — Ollama 修复了推理预算终止 (#18212) 和思考到聊天模板传播 (#18281)。显示模型推理的应用应验证现在是否收到完整的思考输出。

4. **PII 掩码覆盖流式输出** — LiteLLM 的流式 PII 掩码 (#42351) 现已可用。如果您正在构建带 Guardrail 的面向用户应用，这填补了一个重要的数据泄露漏洞。

5. **移动端推理正在变得认真** — llama.cpp 的 Hexagon HMX 内核在 Galaxy S26/25/24 上实现了 1.5-3 倍的提示处理提速。结合 Vulkan 修复，移动端 Agent 可以期待更好的设备端性能。

6. **警惕 MTP 回归** — Unsloth 的 Qwen3 MTP 崩溃和 llama.cpp 的图构建问题表明 Multi-Token Prediction 仍不稳定。在下一个 llama.cpp 版本稳定之前，生产环境中避免使用 MTP 启用的模型。

7. **量化格式持续碎片化** — nvfp4、MXFP8、MXFP4、IQ3、Q5_K — 量化格式的激增使基准测试复杂化。在集成商跟进之前，生产环境坚持使用经过充分测试的组合（W4A16、FP8 KV）。

8. **ROCm / AMD 正在改善但仍不稳定** — MI355X 支持正在推进，但 Imagination PowerVR (Pixel 11 Pro) 崩溃，Strix Halo 出现回归。生产部署 AMD 之前请彻底测试。

---

*基于 2026-09-22 日期的项目摘要综合整理。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate this vLLM Project Digest from English to Chinese. I need to:
1. Preserve all Markdown structure exactly (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
2. Keep URLs, numbers, dates, issue/PR references (#12345) verbatim
3. Keep technical terms like vLLM, SM100, SM120, CUDA, ROCm, HBM, GEMM, MXFP8, etc. in their original form
4. Use natural technical Chinese register - like a Chinese developer newsletter
5. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate this carefully while maintaining the structure.</think>

# vLLM 项目简报 — 2026-09-22

## 1. 今日要点

vLLM 项目多个方向均有活跃开发：DeepSeek-V4.1 MXFP8 GEMM 融合（序列并行 reduce-scatter 在 SM100 上）已合入，同时多项 ROCm CI 改进正在推进 AMD GPU 覆盖，包括新的 MI355 Kimi-K3 测试。社区持续解决模型相关问题，尤其是 GLM-5.3-Flash 在长解码场景下的退化为重复 token 的问题。

---

## 2. 版本发布与重大变更

过去 24 小时内无版本发布。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 描述 | PR/Issue |
|------------------|-------------|----------|
| **NVIDIA RTX 5090 (SM120)** | `nvfp4` KV 缓存支持的功能请求 — Flashinfer 已提供内核，vLLM 接入进行中。原型演示显示在 5090 上可达 245K ctx。 | [#49011](https://github.com/vllm-project/vllm/issues/49011) |
| **AMD MI355X (gfx950)** | Qwen3.8-2.4T-A95B 配合 MXFP4 量化的性能优化追踪。 | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **Intel XPU** | 双 Intel Arc Pro B70 (Battlemage) 上 TP=2 错误调查进行中 — 导致 GP 故障和 xe BCS 引擎重置。 | [#41663](https://github.com/vllm-project/vllm/issues/41663) |
| **GLM-5.3-Flash + DFlash2** | 块式扩散草稿模型在投机解码中的支持已合入。 | [#56983](https://github.com/vllm-project/vllm/pull/56983) |

---

## 4. 性能与优化

### 已合入 / 可用
- **DeepSeek-V4.1 MXFP8 融合**: PR #57428 在 SM100 上将 `wo_b` GEMM 与序列并行 reduce-scatter 融合，减少每层两个内核 + 一次 HBM 往返。建立在 Kimi-K3 GEMM-RS 内核工作之上。
- **可中断 CUDA Graphs 默认启用**: PR #57586 在 `VLLM_BATCH_INVARIANT` 下默认启用批不变的持久化 Triton 矩阵乘法，允许调优的 matmul 配置看到运行时 M 维度。
- **GLM Sparse MLA 开销优化**: PR #57458 减少 FlashInfer NoPE MLA 注意力中 query 打包和稀疏索引准备的开销。
- **缓存感知准入排序**: PR #54625 添加请求准入逻辑，优先处理前缀已存在于 KV 缓存中的请求（在向前看窗口内）。
- **持久化 TopK 内核**: PR #55122 引入确定性 `persistent_topk` 内核（QSA / 稀疏索引块选择），比精确 topk 变通方案更快。
- **DP 外调度预填充**: PR #54627 将 `prefill_schedule_interval` 扩展到数据并行之外，适用于单机场景。

### 进行中
- **KV 传输指标**: PR #58004 添加待定 P/D 传输中固定 KV 缓存的指标 — 可用于监控慢速/卡顿解码器持有的预填充缓存。
- **RL Sleep 保留冻结权重**: PR #57891 添加 `--sleep-preserve-parameter-names` 以在 2 级 sleep 周期之间保留冻结权重。

---

## 5. 稳定性与回归

### 严重
| Issue | 描述 | 状态 |
|-------|-------------|--------|
| **GLM-5.3-Flash 退化** | 长解码在累计推理后产生重复 token（"词沙拉"），或 ROCm 上 ≥4-5k token 提示的静默检索损坏。两个相关 bug（#56868, #56605）。 | Open |
| **DeepSeek-V3.2 / GLM-5.x DSA 解码损坏** | ROCm/MI300X 上带 CUDA graphs 的 P/D 分解产生退化的重复 token 垃圾（`locklocklock…`）用于远程预填充请求。 | [#57064](https://github.com/vllm-project/vllm/issues/57064) |
| **Qwen3.8-Flash-Next 解码饥饿** | 长预填充工作负载在 2 节点 DGX Spark TP2 上定期饿死活跃解码 3-7 分钟。 | [#54919](https://github.com/vllm-project/vllm/issues/54919) |

### 中等
| Issue | 描述 | 修复 PR |
|-------|-------------|--------|
| **MTP 工具调用回归** | Qwen3.6-27B 工具调用在启用 MTP 时在 Responses API 上失败。 | Open — [#46249](https://github.com/vllm-project/vllm/issues/46249) |
| **Sleep 模式 HBM 泄漏** | `--enable-sleep-mode` 在使用 `--mm-encoder-tp-mode data` 的模型中泄漏 GPU HBM。 | Open — [#47654](https://github.com/vllm-project/vllm/issues/47654) |
| **图片 pad token 误识别** | 用户编写的文本 `<|image_pad|>` 被误识别为图片占位符，导致图片绑定不匹配。 | [#57740](https://github.com/vllm-project/vllm/issues/57740) |
| **DFlash Qwen3.5 4B 性能** | DFlash 在 H100 上性能低于预期。 | [#49730](https://github.com/vllm-project/vllm/issues/49730) |

### 已修复合入
- **Engram /dev/shm 回退**: PR #57914 防范 `/dev/shm` 不存在时的 `FileNotFoundError`。
- **Spec Decode ngram_gpu 编译缓存**: PR #54905 隔离 V1 ngram 内核的 torch.compile 缓存命名空间，避免与 backbone 模型冲突。
- **MTP 草稿 KV 缓存注解**: PR #55390 修复混合注意力 + Mamba MTP 模型缺少草稿组注解的问题。

---

## 6. 这对应用开发者的意义

1. **Agent / 工具调用用户**: Qwen3.6-27B + MTP 工具调用回归（#46249）值得关注 — 如使用带 MTP 的投机解码，请在生产部署前全面测试工具调用。

2. **长上下文工作负载**: ROCm 上上下文长度 >4-5k token 的 GLM-5.3 用户应注意静默输出损坏（#52109, #57064）。根本原因涉及 P/D 分解中 CUDA graphs 下的 DSA sparse-MLA 解码。

3. **NVIDIA Blackwell 用户**: `nvfp4` KV 缓存功能正在积极接入（#49011）— SM120 硬件的重大上下文长度改进（245K ctx）即将到来。

4. **多轮对话**: OpenAI Response API 的多轮对话支持（#33089）正在进行中，与使用 `/v1/responses` 的 agent 相关。

5. **内存受限部署**: 带多模态编码器的 sleep 模式用户应注意 HBM 泄漏（#47654）— 修复尚未合入。

6. **分解式服务**: 新的 KV 传输指标（#58004）将帮助调试 P/D 部署中的预填充器/解码器卡顿 — 预计可观测性将很快改善。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest into Simplified Chinese, following the specific rules provided. Let me go through each rule and apply them carefully:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, link targets, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate section by section, being careful to:
- Keep the heading structure (# ## ###)
- Keep tables with proper alignment
- Keep lists (bulleted and numbered)
- Keep links like [#11857](link)
- Keep all technical identifiers as-is
- Use natural Chinese technical writing style

Let me start:

# SGLang 今日简报 — 2026-09-22

## 1. 今日要点

SGLang 项目在多个基础设施方向持续推进。目前最活跃的开发方向包括流水线并行路线图 (#11857)、PD 分解优化 (#21703)，以及 Apple Silicon 优化工作。CI 稳定性仍是重点关注领域，当前有 3 个 broken 测试和 10 个 flaky 测试待处理 (#17050)。项目还在推进 agent 感知 KV 缓存设计 (#24656) 和自由线程 Python 3.14t 支持 (#22889)，体现了对现代 Python 并发和 agent 工作负载的持续投入。

## 2. 版本更新与重大变更

过去 24 小时内无版本发布。

## 3. 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|------|------|
| **SenseNova-U1** | SenseNova-U1/U1.5 支持的功能与性能跟踪 | [#37742](https://github.com/sgl-project/sglang/issues/37742) |
| **GLM-5.3-Flash on SM120** | RTX PRO 6000 (Blackwell) 支持跟踪，TP2、W4A16、FP8 KV | [#37813](https://github.com/sgl-project/sglang/issues/37813), [#37105](https://github.com/sgl-project/sglang/issues/37105) |
| **Apple Silicon MoE** | Apple Silicon 上 MoE 模型的专项优化工作 | [#22283](https://github.com/sgl-project/sglang/issues/22283) |
| **自由线程 Python** | CPython 3.14t (nogil) 支持的 RFC | [#22889](https://github.com/sgl-project/sglang/issues/22889) |
| **GLM-5.2 on MI355X** | AMD ROCm 上 GLM-5.2 的 MXFP4 dense experts 和 MoE/MLA 启动修复 | [#40189](https://github.com/sgl-project/sglang/pull/40189) |
| **AMD DSA 后端** | GLM-5.3-Flash 非 2048 top-k 宽度支持 | [#39340](https://github.com/sgl-project/sglang/pull/39340) |

## 4. 性能与优化

| 领域 | 状态 | 详情 | 链接 |
|------|------|------|------|
| **流水线并行** | 路线图进行中 | 长上下文预填充 + PD 分解已完成；吞吐量优化进行中 | [#11857](https://github.com/sgl-project/sglang/issues/11857) |
| **PD 分解** | 路线图进行中 | 扩展与新模型和并行策略的兼容性 | [#21703](https://github.com/sgl-project/sglang/issues/21703) |
| **SGLang 模拟器** | RFC 进行中 | TTFT/TPOT 优化的性能调优模拟 | [#21891](https://github.com/sgl-project/sglang/issues/21891) |
| **dLLM 服务** | 路线图进行中 | 使用共享组件的块扩散服务 | [#39499](https://github.com/sgl-project/sglang/issues/39499) |
| **Kimi K3 CUDA Graph** | 已修复 | B300 上 Stream 爆炸从 96 降至 4 个目标流 | [#40640](https://github.com/sgl-project/sglang/pull/40640) |
| **Radix Cache** | 优化已落地 | 批量逐出合并为每个 KV 组件一次 drain | [#36370](https://github.com/sgl-project/sglang/pull/36370) |
| **LMCache 集成** | 进行中 | 统一 radix cache 与外部 KV-cache 后端 | [#38652](https://github.com/sgl-project/sglang/pull/38652) |
| **ROCm AITER Fusion** | 修复已落地 | AMD 上 GLM 模型的 allreduce 融合 | [#39790](https://github.com/sgl-project/sglang/pull/39790) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | Flashinfer 后端在 Blackwell GPU 上不支持 | 待解决 | — |
| **高** | Abort 清理钩子顺序问题导致会话泄漏 | 待解决 | — |
| **中** | `/v1/loads` 在流水线并行下低估运行中请求数 | 已关闭 | — |
| **中** | GLM-5.3-Flash on RTX PRO 6000: DSA 后端阻塞 | 待解决 | — |
| **中** | HiCache 分阶段回写: 128 KiB 批次路径fault | 待解决 | — |
| **低** | DFLASH draft 布局未验证导致静默偏移 | 待解决 | — |
| **CI** | XPU NIXL 分解测试禁用（UCX 构建缺失）| 修复已合并 | [#40540](https://github.com/sgl-project/sglang/pull/40540) |

## 6. 这对应用开发者的意义

- **长上下文工作负载受益**：流水线并行和 PD 分解路线图正在推进，针对 100万+ token 上下文的 TTFT 优化。
- **Agent 工作负载**：Agent 感知 KV 缓存第一阶段 RFC (#24656) 预示着多步骤应用中工作流感知缓存的新功能即将推出。
- **Python 3.14t 支持**：如果需要无 GIL 争用的高吞吐量服务，自由线程 Python  effort (#22889) 可能解锁新的部署模式。
- **AMD/Apple Silicon 收益**：ROCm 和 Metal 后端的持续内核优化扩展了 NVIDIA 之外的可行硬件选项。
- **测试改进**： Diffusion 和多模态测试基础设施现共享 pytest 启动器 (#40652)，提升了多模态部署的 CI 可靠性。
- **模型生态**：DeepSeek V3/V3.1/V3.2 系列重构 (#16255) 已完成，GLM-5.x 和 SenseNova-U1 支持正在扩展。

*数据来源：GitHub — sgl-project/sglang*</think>

# SGLang 今日简报 — 2026-09-22

## 1. 今日要点

SGLang 项目在多个基础设施方向持续推进。目前最活跃的开发方向包括流水线并行路线图 (#11857)、PD 分解优化 (#21703)，以及 Apple Silicon 优化工作。CI 稳定性仍是重点关注领域，当前有 3 个 broken 测试和 10 个 flaky 测试待处理 (#17050)。项目还在推进 agent 感知 KV 缓存设计 (#24656) 和自由线程 Python 3.14t 支持 (#22889)，体现了对现代 Python 并发和 agent 工作负载的持续投入。

---

## 2. 版本更新与重大变更

过去 24 小时内无版本发布。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|------|------|
| **SenseNova-U1** | SenseNova-U1/U1.5 支持的功能与性能跟踪 | [#37742](https://github.com/sgl-project/sglang/issues/37742) |
| **GLM-5.3-Flash on SM120** | RTX PRO 6000 (Blackwell) 支持跟踪，TP2、W4A16、FP8 KV | [#37813](https://github.com/sgl-project/sglang/issues/37813), [#37105](https://github.com/sgl-project/sglang/issues/37105) |
| **Apple Silicon MoE** | Apple Silicon 上 MoE 模型的专项优化工作 | [#22283](https://github.com/sgl-project/sglang/issues/22283) |
| **自由线程 Python** | CPython 3.14t (nogil) 支持的 RFC | [#22889](https://github.com/sgl-project/sglang/issues/22889) |
| **GLM-5.2 on MI355X** | AMD ROCm 上 GLM-5.2 的 MXFP4 dense experts 和 MoE/MLA 启动修复 | [#40189](https://github.com/sgl-project/sglang/pull/40189) |
| **AMD DSA 后端** | GLM-5.3-Flash 非 2048 top-k 宽度支持 | [#39340](https://github.com/sgl-project/sglang/pull/39340) |

---

## 4. 性能与优化

| 领域 | 状态 | 详情 | 链接 |
|------|------|------|------|
| **流水线并行** | 路线图进行中 | 长上下文预填充 + PD 分解已完成；吞吐量优化进行中 | [#11857](https://github.com/sgl-project/sglang/issues/11857) |
| **PD 分解** | 路线图进行中 | 扩展与新模型和并行策略的兼容性 | [#21703](https://github.com/sgl-project/sglang/issues/21703) |
| **SGLang 模拟器** | RFC 进行中 | TTFT/TPOT 优化的性能调优模拟 | [#21891](https://github.com/sgl-project/sglang/issues/21891) |
| **dLLM 服务** | 路线图进行中 | 使用共享组件的块扩散服务 | [#39499](https://github.com/sgl-project/sglang/issues/39499) |
| **Kimi K3 CUDA Graph** | 已修复 | B300 上 Stream 爆炸从 96 降至 4 个目标流 | [#40640](https://github.com/sgl-project/sglang/pull/40640) |
| **Radix Cache** | 优化已落地 | 批量逐出合并为每个 KV 组件一次 drain | [#36370](https://github.com/sgl-project/sglang/pull/36370) |
| **LMCache 集成** | 进行中 | 统一 radix cache 与外部 KV-cache 后端 | [#38652](https://github.com/sgl-project/sglang/pull/38652) |
| **ROCm AITER Fusion** | 修复已落地 | AMD 上 GLM 模型的 allreduce 融合 | [#39790](https://github.com/sgl-project/sglang/pull/39790) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | Flashinfer 后端在 Blackwell GPU 上不支持 | 待解决 | — |
| **高** | Abort 清理钩子顺序问题导致会话泄漏 | 待解决 | — |
| **中** | `/v1/loads` 在流水线并行下低估运行中请求数 | 已关闭 | — |
| **中** | GLM-5.3-Flash on RTX PRO 6000: DSA 后端阻塞 | 待解决 | — |
| **中** | HiCache 分阶段回写: 128 KiB 批次路径 fault | 待解决 | — |
| **低** | DFLASH draft 布局未验证导致静默偏移 | 待解决 | — |
| **CI** | XPU NIXL 分解测试禁用（UCX 构建缺失）| 修复已合并 | [#40540](https://github.com/sgl-project/sglang/pull/40540) |

---

## 6. 这对应用开发者的意义

- **长上下文工作负载受益**：流水线并行和 PD 分解路线图正在推进，针对 100万+ token 上下文的 TTFT 优化。
- **Agent 工作负载**：Agent 感知 KV 缓存第一阶段 RFC (#24656) 预示着多步骤应用中工作流感知缓存的新功能即将推出。
- **Python 3.14t 支持**：如果需要无 GIL 争用的高吞吐量服务，自由线程 Python effort (#22889) 可能解锁新的部署模式。
- **AMD/Apple Silicon 收益**：ROCm 和 Metal 后端的持续内核优化扩展了 NVIDIA 之外的可行硬件选项。
- **测试改进**：Diffusion 和多模态测试基础设施现共享 pytest 启动器 (#40652)，提升了多模态部署的 CI 可靠性。
- **模型生态**：DeepSeek V3/V3.1/V3.2 系列重构 (#16255) 已完成，GLM-5.x 和 SenseNova-U1 支持正在扩展。

---

*数据来源：GitHub — sgl-project/sglang*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp digest into Chinese. Let me carefully translate this while preserving:
- The Markdown structure exactly (headings, tables, lists, etc.)
- URLs, link targets, code spans, numbers, dates
- Project names, repository slags, usernames, version tags, file paths
- Issue/PR references like #12345 and their link text
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate section by section:

## 1. Today's Highlights

今天的主要工作包括：Vulkan 后端针对 Intel GPU 的 F32 矩阵加载优化，针对移动端（Galaxy S26/25/24）提供 1.5-3 倍提示词处理性能提升的 HMX 内核 GATED_DELTA_NET，以及在 GPU 驻留缓存方面取得的进展。在问题修复方面，有三个关键问题影响生产部署：Pixel 11 Pro（Tensor G6）上的 Vulkan 驱动崩溃，使用 Prometheus 风格指标采集时服务器静默挂起，以及 /props 中的 media_marker 泄露导致引用对话永久无法分词。

## 2. Releases & Breaking Changes

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| HIP_VERSION 升级 | 最低 HIP_VERSION 要求提高，以避免 ROCm 6.2 中缺少 `__hip_fp8_e4m3` | [#29231](https://github.com/ggml-org/llama.cpp/pull/29231) |
| 移除 MAP_POPULATE | Linux 不再使用 `MAP_POPULATE`（阻塞调用，强制立即完全加载） | [#28055](https://github.com/ggml-org/llama.cpp/pull/28055) |


| --no-mmap-prefetch 参数 | 新增 CLI 选项以跳过 `MADV_WILLNEED` 预取（macOS 上会阻塞，对超过 50% RAM 的模型有问题） | [#29250](https://github.com/ggml-org/llama.cpp/pull/29250) |

## 3. New Model & Hardware Support

| Model/Architecture | Type | PR/Issue |
|--------------------|------|----------|
| Ling 3.0 VL (BailingMoeV3VL) | Vision-language model (124B total / 5.1B active, hybrid KDA + gated MLA, 512-expert MoE) | [#29151](https://github.com/ggml-org/llama.cpp/pull/29151) |
| "sophia" pre-tokenizer | New vocab type for byte-level BPE without regex pre-splitting | [#29211](https://github.com/ggml-org/llama.cpp/pull/29211) |
| Imagination PowerVR C-Series | Vulkan backend (VK_DRIVER_ID_IMAGINATION_PROPRIETARY, Pixel 11 Pro, Tensor G6) — **crashes GPU firmware** | [#28214](https://github.com/ggml-org/llama.cpp/issues/28214) |
| Hexagon HMX | New GATED_DELTA_NET kernel delivers 1.5-3X prompt processing speedup on Galaxy S26/25/24 | [#29199](https://github.com/ggml-org/llama.cpp/pull/29199) |

## 4. Performance & Optimization

Optimized Vulkan F32 loading to handle F32 A matrix in pairs when 2-aligned, specifically fixing Intel GPU compatibility. GPU-resident MoE caching reduces host RAM bandwidth bottlenecks by caching offloaded expert weights. Physical cores are now used for --threads instead of logical cores, correcting hyper-threading overcounting. RVV GEMM/GEMV support expanded to VLENs 128-1024 with additional quantization formats Q5_K and MXFP4. SYCL graph replay implemented as a port from CUDA. OpenCL fusion includes QK RMSNorm + RoPE, K/V scaling, and V materialization for Adreno 830.

## 5. Stability & Regressions

Pixel 11 Pro experiences GPU firmware crashes with Imagination PowerVR C-Series Vulkan backend on Pixel 11 Pro/Tensor G6 devices, causing silent server halt when /metrics is scraped by VictoriaMetrics. /props leaks randomized media_markers that permanently break tokenization when quoted in conversations. /v1/models incorrectly serializes vocab_type as boolean true instead of integer enum. Mobile WebUI displays 10% higher TG compared to desktop. WebUI fails to upload audio ogg files. PEG→GBNF until() stops mid-delimiter, breaking Gemma 4 tool calls with tool_choice: required. This affects metrics endpoint users—scraping /metrics with Prometheus/VictoriaMetrics silently stops response generation.

Multimodal model users risk permanent tokenization failure by quoting /props content in conversations. Mobile Vulkan users should avoid production multimodal workloads on Pixel 11 Pro/Tensor G6 until Imagination driver issues resolve. Thread configuration now uses physical cores by default instead of logical—explicitly set --threads if you relied on the old behavior. Large model macOS users should apply --no-mmap-prefetch to prevent blocking during loads exceeding ~50% RAM. SYCL/CUDA graph users have ported graph record/replay to SYCL but need thorough testing since memory reordering behavior differs.</think>

# llama.cpp 速报 — 2026 年 9 月 22 日

## 1. 今日要闻

后端优化取得显著进展：Vulkan 针对 Intel GPU 优化了 F32 矩阵加载效率，全新 HMX 内核 GATED_DELTA_NET 为移动端（Galaxy S26/25/24）带来 1.5-3 倍的提示词处理性能提升，GPU 驻留 LRU 缓存减轻了 MoE 专家权重的主机端带宽瓶颈。问题修复方面，三个关键问题影响生产部署：Pixel 11 Pro（Tensor G6）上的 Vulkan 驱动崩溃、使用 Prometheus/VictoriaMetrics 风格指标采集时服务器静默挂起，以及 /props 中 media_marker 泄露导致引用的对话永久无法分词。

---

## 2. 发布与破坏性变更

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| HIP_VERSION 升级 | 最低 HIP_VERSION 要求提高，以避免 ROCm 6.2 中缺少 `__hip_fp8_e4m3` | [#29231](https://github.com/ggml-org/llama.cpp/pull/29231) |
| 移除 MAP_POPULATE | Linux 不再使用 `MAP_POPULATE`（阻塞调用，强制立即完全加载） | [#28055](https://github.com/ggml-org/llama.cpp/pull/28055) |
| --no-mmap-prefetch 参数 | 新增 CLI 选项以跳过 `MADV_WILLNEED` 预取（macOS 上会阻塞，对超过 50% RAM 的模型有问题） | [#29250](https://github.com/ggml-org/llama.cpp/pull/29250) |

---

## 3. 新模型与硬件支持

| 模型/架构 | 类型 | PR/Issue |
|--------------------|------|----------|
| Ling 3.0 VL (BailingMoeV3VL) | 视觉语言模型（总计 124B / 活跃 5.1B，混合 KDA + 门控 MLA，512 专家 MoE） | [#29151](https://github.com/ggml-org/llama.cpp/pull/29151) |
| "sophia" 预分词器 | 新型词表类型，字节级 BPE 无需正则预分割 | [#29211](https://github.com/ggml-org/llama.cpp/pull/29211) |
| Imagination PowerVR C-Series | Vulkan 后端（VK_DRIVER_ID_IMAGINATION_PROPRIETARY，Pixel 11 Pro，Tensor G6）— **GPU 固件崩溃** | [#28214](https://github.com/ggml-org/llama.cpp/issues/28214) |
| Hexagon HMX | 全新 GATED_DELTA_NET 内核（Galaxy S26/25/24 上提示词处理提升 1.5-3 倍） | [#29199](https://github.com/ggml-org/llama.cpp/pull/29199) |

---

## 4. 性能优化

| 优化 | 详情 | PR |
|--------------|---------|-----|
| Vulkan F32 加载 | 当 F32 A 矩阵 2 对齐时一次加载 2 个（修复 Intel GPU） | [#29254](https://github.com/ggml-org/llama.cpp/pull/29254) |
| GPU 驻留 MoE 缓存 | 主机端卸载专家权重的 LRU 缓存 — 减轻主机端 RAM 带宽瓶颈 | [#27861](https://github.com/ggml-org/llama.cpp/pull/27861) |
| --threads 物理核心 | 使用 `common_cpu_get_num_physical_cores()` 替代逻辑核心计数（修复超线程过计问题） | [#23932](https://ggml-org/llama.cpp/pull/23932) |
| RVV GEMM/GEMV | 扩展重打包内核至 VLEN 128-1024，新增 Q5_K 和 MXFP4 | [#20723](https://github.com/ggml-org/llama.cpp/pull/20723) |
| SYCL 图重放 | CUDA 图记录/重放功能移植至 SYCL | [#28725](https://github.com/ggml-org/llama.cpp/pull/28725) |
| OpenCL 融合 | 融合 QK RMSNorm + RoPE、K/V 缩放、Adreno 830 上的 V 物化 | [#28446](https://github.com/ggml-org/llama.cpp/pull/28446) |
| Muse Glimmer 修复 | 首个非推理步骤轮次的工具调用解析器错误 | [#29242](https://github.com/ggml-org/llama.cpp/pull/29242) |

---

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **严重** | Imagination PowerVR C 系列 Vulkan 后端在 Pixel 11 Pro（Tensor G6，subgroupSize 128）上导致 GPU 固件崩溃 | 待处理 | — |
| **严重** | 服务器在 VictoriaMetrics 采集 `/metrics` 时静默停止处理 | 待处理 | — |
| **高** | `/props` 泄露随机化的 `media_marker` — 在对话中引用将永久破坏分词（400 "Failed to tokenize prompt"） | 已关闭 | — |
| **中** | `/v1/models` 将 `vocab_type` 序列化为布尔值 `true` 而非整数枚举 | 待处理 | — |
| **中** | WebUI 在移动端显示的 TG 比桌面端高 10% | 待处理 | — |
| **低** | WebUI 无法上传音频 ogg 文件 | 待处理 | — |
| **低** | PEG→GBNF `until()` 可能在分隔符中间停止，导致 `tool_choice: required` 时 Gemma 4 工具调用无约束 | 已关闭 | — |

---

## 6. 这对应用开发者的意义

1. **指标端点用户**：如果您使用 Prometheus/VictoriaMetrics 采集 `/metrics`，服务器可能会静默停止生成响应——请避免使用或监控此回归。

2. **多模态模型用户**：避免在对话中引用 `/props` 响应中的内容——暴露的 `media_marker` 将永久破坏分词。

3. **移动端 Vulkan 用户**：Pixel 11 Pro / Tensor G6 设备目前不稳定；在 Imagination 驱动问题解决前，请避免生产环境的多模态工作负载。

4. **线程配置**：`--threads -1` 默认值现正确使用物理核心而非逻辑核心——在超线程系统上行为会有变化；若您之前依赖旧行为，请显式设置 `--threads`。

5. **大型模型 macOS 用户**：对超过约 50% RAM 的模型使用新的 `--no-mmap-prefetch` 标志可避免加载时阻塞。

6. **SYCL/CUDA 图用户**：SYCL 现支持图记录/重放（从 CUDA 移植）；由于内存重排行为不同，请彻底测试。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama Daily Digest into Simplified Chinese while preserving the exact Markdown structure. Let me translate carefully:

Key points:
1. Keep all headings, tables, lists, etc. exactly as-is
2. Keep URLs, PR numbers, code references as-is
3. Use natural technical Chinese register
4. No preamble or explanation - just the translation

Let me go through each section:

## 1. Today's Highlights

应该翻译为:
## 今日要点

## 2. Releases & Breaking Changes

应该翻译为:
## 发布与重大变更

## 3. New Model & Hardware Support

应该翻译为:
## 新模型与硬件支持

## 4. Performance & Optimization

应该翻译为:
## 性能与优化

## 5. Stability & Regressions

应该翻译为:
## 稳定性与回归问题

## 6. What This Means for Application Developers

应该翻译为:
## 这对应用开发者意味着什么

Now let me translate the content of each section:

1. Today's Highlights:
- The most significant update today is a pair of fixes addressing reasoning block handling: PR #18212 ensures reasoning budgets terminate at line boundaries rather than mid-word, and PR #18281 properly propagates assistant thinking content to chat templates. Together, these resolve long-standing issues with how structured thinking output is presented to users. Meanwhile, PR #16590 introduces foundational changes to manifest list handling that will enable multi-runner coexistence under a single tag.

今日最值得关注的是一组修复推理块处理的更新：PR #18212 确保推理预算在行边界而非单词中部耗尽，PR #18281 正确将助手思考内容传播到聊天模板。这两个修复共同解决了结构化思考输出如何呈现给用户的长期问题。与此同时，PR #16590 引入了清单列表处理的基础性变更，支持在单一标签下共存多个 runner。

2. Releases & Breaking Changes:


- PR #16590 implements manifest-list storage, allowing runner-specific manifests to coexist under one tag while maintaining existing v1 tags as downgrade anchors. Commands like show/list/copy/remove/pull/push now understand runner and digest selection and transfer referenced child manifests and layers. This prepares for eventual removal of the legacy compatibility patch; users relying on old manifest behavior should test against this change.

该 PR 引入了 manifest-list 存储机制，支持在单一标签下共存 runner 特定的 manifest，同时保留现有的 v1 标签作为降级锚点。show/list/copy/remove/pull/push 等命令现已支持 runner 和摘要选择，并传输引用的子 manifest 和层。这为最终移除遗留兼容性补丁奠定了基础，依赖旧 manifest 行为的用户应针对此变更进行测试。

No new model or hardware support announcements in today's PRs.

当日 PR 中未宣布新的模型或硬件支持。

No explicit performance or optimization work landed or in progress in today's PRs.

当日 PR 中未明确提及已落地或进行中的性能或优化工作。

A medium-priority issue in PR #18212 addresses how reasoning budgets terminate when exhausted. The sampler previously forced end sequences mid-UTF-8 codepoint, causing thinking blocks to be truncated mid-word. The fix ensures termination occurs at line boundaries for cleaner output.

PR #18212 解决推理预算耗尽时的处理方式。之前采样器在 UTF-8 编码点中间强制结束序列，导致思考块在单词中部被截断。现在在行边界终止，输出更清晰。

Medium priority - PR #18281 handles sending assistant thinking to the chat template. The llamaServerChatMessage component was missing the thinking field in its outbound message construction, despite the field being parsed from the API and surviving through MessageFromAPI into llm.Message. This caused thinking content to be silently dropped from chat template rendering. A fix PR is in progress.

PR #18281 涉及向聊天模板发送助手思考内容。llamaServerChatMessage 的出站消息构建中缺少 thinking 字段，尽管该字段已从 API 解析并通过 MessageFromAPI 传递到 llm.Message。这导致思考内容在聊天模板渲染中被静默丢弃。修复 PR 已在进行中。

Medium priority - PR #17563 addresses stopping the false assumption that repetitive payloads indicate runaway behavior. The detector incorrectly flagged certain legitimate repetitive payloads (like coding agents generating repeated strings) as runaways, and also fixes a related reporting bug. A fix PR is in progress.

PR #17563 停止假设重复载荷是失控行为。检测器错误地将某些合法的重复载荷（如编码代理生成的重复字符串）标记为失控，并修复了相关报告问题。修复 PR 已在进行中。

For application developers, these changes mean cleaner reasoning output: with PR #18212, apps displaying model reasoning will no longer show truncated mid-word thinking blocks when budgets expire—output will terminate cleanly at line breaks. PR #18281 ensures thinking blocks are properly routed through chat templates, allowing applications to access the data they need.

对于应用开发者而言，这些变更意味着更清晰的推理输出：PR #18212 确保显示模型推理的应用在预算耗尽时不再显示截断的单词中思考块，输出将在行边界干净终止。PR #18281 确保思考块正确传递到聊天模板，应用可以访问所需数据。

Fewer false runaway detections: PR #17563 reduces false positives in repetitive payload detection, preventing premature termination of valid generation in coding scenarios.

更少的错误失控检测：PR #17563 减少了重复载荷检测中的误报，防止在编码场景中提前终止有效生成。

Watch for manifest behavior changes: PR #16590 signals upcoming changes to multi-architecture and multi-runner image management. Test any automation relying on manifest listing or copy operations.

注意清单行为变更：PR #16590 预示着多架构和多 runner 镜像管理的即将变更。测试任何依赖清单列表或复制操作的自动化流程。</think>

# Ollama 每日简报

## 1. 今日要点

今日最受关注的是一组修复推理块处理的更新：PR [#18212](https://github.com/ollama/ollama/pull/18212) 确保推理预算在行边界而非单词中部耗尽，PR [#18281](https://github.com/ollama/ollama/pull/18281) 正确将助手思考内容传播到聊天模板。这两个修复共同解决了结构化思考输出如何呈现给用户的长期问题。与此同时，PR [#16590](https://github.com/ollama/ollama/pull/16590) 引入了清单列表处理的基础性变更，支持在单一标签下共存多个 runner。

## 2. 发布与重大变更

- **PR #16590** — `llama-server: prepare to remove compatibility patch with manifest list support`  
  引入了 manifest-list 存储，支持在单一标签下共存 runner 特定的 manifest，同时保留现有的 v1 标签作为降级锚点。show/list/copy/remove/pull/push 等命令现已支持 runner 和 digest 选择，并传输引用的子 manifest 和层。这为最终移除遗留兼容性补丁奠定了基础，依赖旧 manifest 行为的用户应针对此变更进行测试。

## 3. 新模型与硬件支持

*今日 PR 中未宣布新的模型或硬件支持。*

## 4. 性能与优化

*今日 PR 中未明确提及已落地或进行中的性能或优化工作。*

## 5. 稳定性与回归问题

- **中等** — **PR #18212** — `llama: end a spent reasoning budget at a line, not mid-word`  
  当推理预算耗尽时，采样器强制在 UTF-8 编码点中间插入结束序列，导致思考块被截断在单词中部。现在改为在行边界终止，输出更清晰。修复 PR 已存在。

- **中等** — **PR #18281** — `llm: send assistant thinking to the chat template`  
  `llamaServerChatMessage` 在构建出站消息时缺少 `thinking` 字段，尽管该字段已从 API 解析并通过 `MessageFromAPI` 传递到 `llm.Message`。这导致思考内容在聊天模板渲染中被静默丢弃。修复 PR 已存在。

- **中等** — **PR #17563** — `llm: stop guessing that a repetitive payload is a runaway`  
  检测器错误地将某些合法的重复载荷（如编码代理生成的重复字符串）标记为失控。同时修复了相关的报告 bug。修复 PR 已存在。

## 6. 这对应用开发者意味着什么

- **更清晰的推理输出**：有了 PR #18212，显示模型推理的应用在预算耗尽时不再显示截断在单词中部的思考块——输出将在行边界处干净终止。

- **思考内容现在可见**：PR #18281 确保当模型输出思考/推理块时，这些内容会被正确传递到聊天模板。依赖思考输出的应用（如用于推理透明度、代理调试或用户体验的场景）现在将收到预期数据。

- **更少的误报失控检测**：PR #17563 减少了重复载荷检测中的误报，避免了某些编码场景下合法生成的提前终止。

- **关注 manifest 行为变化**：PR #16590 仍在进行中，但预示着多架构和多 runner 镜像管理的即将变更。任何依赖 manifest 列表或复制操作的自动化工具都需要测试。

---

规则：
- 仅输出翻译内容。无前言、无解释、无 Markdown 格式包裹整个输出。
- 完全保留 Markdown 结构：标题、表格（包括列对齐行）、列表、块引用、粗体/斜体、分隔线、emoji。
- 保留 URL、链接目标、代码片段、代码块、数字和日期原文。
- 保留项目名称、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符的原样——不翻译它们。
- PR 引用如 #12345 及其链接文本保持原样。
- 使用自然的技术中文_REGISTER——而非逐字直译。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the digest into Chinese, following specific rules. Let me translate the content while preserving the structure exactly, using natural technical Chinese register.

Let me go through each section:

1. **Today's Highlights** - Today's key developments
2. **Releases & Breaking Changes** - 发布与重大变更
3. **New Model & Hardware Support** - 新模型与硬件支持
4. **Performance & Optimization** - 性能与优化
5. **Stability & Regressions** - 稳定性与回归问题
6. **What This Means for Application Developers** - 这对应用开发者意味着什么

I need to:
- Preserve all Markdown structure exactly
- Keep tables with alignment
- Keep URLs, issue numbers, code as-is
- Use natural technical Chinese
- No preamble or explanation
- No markdown fences around the output

Let me translate carefully:</think>

# LiteLLM 每日简报 — 2026-09-22

## 1. 今日要点

今天主要围绕 **Bug 修复** 和 **新功能** 展开工作，特别是在 **PII 流式输出脱敏**、**路由增强** 和 **价格同步** 方面。一个值得关注的新功能是支持可选的匿名使用遥测，便于了解开源部署情况。多个预算相关的 Bug 已关闭，路由器正在新增优先级路由策略。

---

## 2. 发布与重大变更

- **近期无新版本发布**。

---

## 3. 新模型与硬件支持

| PR | 说明 | 链接 |
|---|---|---|
| #42381 | 同步 OpenRouter 2 个模型的价格（`openrouter/~z-ai/glm-latest` 价格调整） | [#42381](https://github.com/BerriAI/litellm/pull/42381) |
| #42334 | 新增 `fal-ai/flux-lora-depth`（图像编辑控制）和 `fal-ai/moondream3-preview/query`（视觉问答） | [#42334](https://github.com/BerriAI/litellm/pull/42334) |
| #42301 | 为 `openrouter/typesafe/jev-1.13` 定价，并支持 OpenRouter decisions 直通 | [#42301](https://github.com/BerriAI/litellm/pull/42301) |

---

## 4. 性能与优化

| PR | 说明 | 链接 |
|---|---|---|
| #42379 | 修复 Redis 语义缓存阈值类型问题（`f64` 导致 `0.8` 无法匹配），恢复 Qdrant 批量写入 | [#42379](https://github.com/BerriAI/litellm/pull/42379) |
| #42336 | 改进 Fal AI 非标准图像尺寸的计费逻辑——按最近像素行数计费 | [#42336](https://github.com/BerriAI/litellm/pull/42336) |
| #42257 | 为 DeepSeek V4 模型保留原生 reasoning effort 参数 | [#42257](https://github.com/BerriAI/litellm/pull/42257) |

---

## 5. 稳定性与回归问题

### 高优先级（开放中）

| Issue | 说明 | 链接 |
|---|---|---|
| #42172 | **OAuth Token 泄露**：使用第三方 `api_base` 调用 `anthropic/<model>` 时，客户端的 Claude 订阅 OAuth Token 会泄露到上游，而非使用部署配置的 `api_key` | [#42172](https://github.com/BerriAI/litellm/issues/42172) |
| #38358 | **`request_timeout` 从不生效**——流式请求在收到首字节后静默时，请求会无限挂起 | [#38358](https://github.com/BerriAI/litellm/issues/38358) |
| #30139 | LiteLLM Bedrock 直通模式在几次请求后失败——缺少 model 属性，h11 Content-Length 错误 | [#30139](https://github.com/BerriAI/litellm/issues/30139) |
| #41782 | Nebius 提供商费用计算错误 10 倍（报告约 250$，实际约 2500$） | [#41782](https://github.com/BerriAI/litellm/issues/41782) |
| #42104 | 会话中追加 `system` 消息会破坏 Gemini/Vertex 提示缓存——每轮都显示 `cache_read_input_tokens: 0` | [#42104](https://github.com/BerriAI/litellm/issues/42104) |

### 已修复 / 已关闭

| Issue | 说明 | 链接 |
|---|---|---|
| #42005 | Responses→Chat 桥接在多轮重放时丢失原生 tool calls，reasoning 内容泄漏为 assistant 文本 | [#42005](https://github.com/BerriAI/litellm/issues/42005) |
| #41344 | 零预算漏洞：免费模型有付费后备时，可绕过预算限制产生无限费用 | [#41344](https://github.com/BerriAI/litellm/issues/41344) |
| #17993 | 时长解析 Bug——大数值因天数轮转导致解析失败 | [#17993](https://github.com/BerriAI/litellm/issues/17993) |
| #42351 / #42335 | Presidio PII 脱敏现支持流式 `/v1/messages` 输出 | [#42351](https://github.com/BerriAI/litellm/pull/42351) |

---

## 6. 这对应用开发者意味着什么

1. **流式 PII 脱敏已修复** — 如果你在使用 `/v1/messages` 流式输出时启用了 Presidio 守护，卡号和其他 PII 现在会被正确脱敏。之前存在严重的数据泄露风险。

2. **预算绕过漏洞已关闭** — 具有付费后备的免费层部署之前可以通过漏洞产生无限费用。如果你使用了零预算配置，请在修复后验证你的设置。

3. **新增遥测选项** — 设置 `LITELLM_TELEMETRY=true` 可启用可选的匿名使用报告，帮助项目了解开源部署模式。

4. **即将推出优先级路由** — 正在新增分组级优先级路由策略，允许在组内按顺序使用后备模型，而不影响直接请求。

5. **Claude Code 直通问题** — 如果你通过 LiteLLM 使用自定义 `api_base` 调用 Claude Code，你的 OAuth Token 可能会泄露到上游提供商。这是一个待修复的安全问题。

6. **超时行为变更** — 如果你依赖 `request_timeout` 处理流式请求，请注意：当上游接受连接但从不发送数据时，超时不会触发——这会导致请求挂起。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the digest into Chinese. I need to:
1. Translate all the content into Chinese
2. Keep all Markdown structure exactly as-is
3. Keep URLs, issue numbers, code references, etc. unchanged
4. Use natural technical Chinese, like a Chinese developer newsletter

Let me translate section by section:

## Today's Highlights
今天的重要更新

Two critical MTP-related crashes are affecting Qwen3.8-Flash-Next and Qwen3 models on RTX 5080/4090 GPUs with the latest llama.cpp builds, indicating potential graph construction issues with the MTP (Multi-Token Prediction) architecture. The Unsloth Studio team is actively merging UI improvements including contrast slider enhancements, spacing scaling, and a 256KB tool-result cap to improve robustness.

两个关键的MTP相关崩溃正在影响RTX 5080/4090 GPU上使用最新llama.cpp构建的Qwen3.8-Flash-Next和Qwen3模型，表明MTP（多token预测）架构可能存在图构建问题。Unsloth Studio团队正在积极合并UI改进，包括对比度滑块增强、间距缩放和256KB工具结果上限，以提高稳定性。

---

## Releases & Breaking Changes
发布与重大变更

No releases detected in the last 24 hours.
过去24小时内未检测到任何发布。

---

## New Model & Hardware Support
新模型与硬件支持

- **Qwen3-Omni-30B-A3B** — PR #11467 resolves auto-class recognition for omni checkpoints, enabling loading of this multimodal model. ([#11467](https://github.com/unslothai/unsloth/pull/11467))

- **Qwen3-Omni-30B-A3B** — PR #11467解决了omni检查点的自动类识别问题，使该多模态模型能够正常加载。

- **Phi-4-reasoning-vision-15B** — PR #11469 restores Transformers 4.x image processing re-exports required by this model's remote code. ([#11469](https://github.com/unslothai/unsloth/pull/11469))

- **Phi-4-reasoning-vision-15B** — PR #11469恢复了该模型远程代码所需的Transformers 4.x图像处理重导出。

- **Muse-Glimmer vision fine-tuning** — Issue #11434 reports a data-dependent compilation failure in `get_vision_pixel_shuffle_index` when frames > 1. ([#11434](https://github.com/unslothai/unsloth/issues/11434))

- **Muse-Glimmer视觉微调** — Issue #11434报告了在frames > 1时`get_vision_pixel_shuffle_index`中出现的数据相关编译失败。

- **Intel Arc Pro B60 (dual)** — Issue #11453 reports `ErrorDeviceLost` mid-generation on Vulkan backend, causing chat lock requiring eject/reload. ([#11453](https://github.com/unslothai/unsloth/issues/11453))

- **Intel Arc Pro B60 (双卡)** — Issue #11453报告Vulkan后端在中

间生成时出现`ErrorDeviceLost`，导致聊天锁定需要弹出/重新加载。

- **AMD Strix Halo (Radeon 8060S)** — Issue #7371 documents performance regression with ROCm 7.13 and prebuilt b10079 on Windows bare-metal. ([#7371](https://github.com/unslothai/unsloth/issues/7371))

- **AMD Strix Halo (Radeon 8060S)** — Issue #7371记录了ROCm 7.13和预构建b10079在Windows裸机上的性能回归。

- **NVIDIA RTX 5070 Ti (sm_120/Blackwell)** — Issue #11349 reports the bundled llama.cpp (b11030-mix) generates 5-6x slower than official ggml-org CUDA 12 build. ([#11349](https://github.com/unslothai/unsloth/issues/11349))

- **NVIDIA RTX 5070 Ti (sm_120/Blackwell)** — Issue #11349报告捆绑的llama.cpp (b11030-mix)生成速度比官方ggml-org CUDA 12构建慢5-6倍。

---

## Performance & Optimization
性能与优化

- **Skip redundant TRL kbit prep** — PR #11494 eliminates ~5 GiB unnecessary memory allocation during trainer construction by skipping TRL's `prepare_peft_model` call when Unsloth has already prepared the model. ([#11494](https://github.com/unslothai/unsloth/pull/11494))

- **跳过冗余TRL kbit准备** — PR #11494通过在Unsloth已准备好模型时跳过TRL的`prepare_peft_model`调用，在训练器构建过程中消除了约5 GiB不必要的内存分配。

- **Live PyTorch streams for bitsandbytes** — PR #10745 addresses the cached-stream discrepancy by using PyTorch's current accelerator stream for direct bitsandbytes native dequantization and GEMV/GEMM calls. ([#10745](https://github.com/unslothai/unsloth/pull/10745))

- **bitsandbytes的实时PyTorch流** — PR #10745通过使用PyTorch当前的加速器流进行直接的bitsandbytes原生反量化和GEMV/GEMM调用来解决缓存流差异问题。

- **UI contrast slider reaches surfaces** — PR #11459 expands contrast remapping beyond borders and muted text to cards, menus, buttons, and control fills. ([#11459](https://github.com/unslothai/unsloth/pull/11459))

- **UI对比度滑块覆盖更多表面** — PR #11459将对比度重映射从边框和弱化文本扩展到卡片、菜单、按钮和控制填充。

- **Spacing scales with UI font size** — PR #11458 ensures padding, gaps, margins, and row heights adapt when users adjust font size from 12px to 20px. ([#11458](https://github.com/unslothai/unsloth/pull/11458))

- **间距随UI字体大小缩放** — PR #11458确保当用户将字体大小从12px调整到20px时，内边距、间距、边距和行高能够自适应。

- **Streaming code fence highlighting** — PR #11423 fixes the lag reported in #10769 without sacrificing syntax highlighting, reportedly improving from 29 fps to 59 fps on 140K-character streams. ([#11423](https://github.com/unslothai/unsloth/pull/11423))

- **流式代码围栏高亮** — PR #11423修复了#10769中报告的延迟问题，同时保留了语法高亮功能，据报道在140K字符流上从29 fps提升到59 fps。

- **Tool-result text capped at 256KB** — PR #11430 introduces a hard cap preventing oversized results from reaching the model when context-window pricing is absent. ([#11430](https://github.com/unslothai/unsloth/pull/11430))

- **工具结果文本上限256KB** — PR #11430引入了硬上限，防止当上下文窗口定价缺失时超大型结果到达模型。

- **ROCm torch floor to BNB compatibility** — PR #10277 ensures automatic ROCm PyTorch selection aligns with bitsandbytes ROCm 6.4+ requirements on Linux x86_64 AMD. ([#10277](https://github.com/unslothai/unsloth/pull/10277))

- **ROCm torch与BNB兼容性对齐** — PR #10277确保自动ROCm PyTorch选择与Linux x86_64 AMD上的bitsandbytes ROCm 6.4+要求保持一致。

---

## Stability & Regressions
稳定性与回归

**High Severity** 严重程度高

- **Qwen3.8-Flash-Next MTP abort** — Issue #11143: Model aborts at load with `nextn.hc_head_norm still [hc_dim]` after rebase on b10995-mix-3e83366. 14 comments, 2 👍. ([#11143](https://github.com/unslothai/unsloth/issues/11143))

- **Qwen3.8-Flash-Next MTP中止** — Issue #11143: 模型在b10995-mix-3e83366上重新base后加载时中止，提示`nextn.hc_head_norm still [hc_dim]`。14条评论，2个赞。

- **MTP drafter GGML_ASSERT crash** — Issue #11219: Crashes with `GGML_ASSERT(ggml_can_repeat(b, a))` during graph build on b11007-mix, RTX 5080. ([#11219](https://github.com/unslothai/unsloth/issues/11219))

- **MTP drafter GGML_ASSERT崩溃** — Issue #11219: 在b11007-mix、RTX 5080上图构建时崩溃，提示`GGML_ASSERT(ggml_can_repeat(b, a))`。

**Medium Severity** 中等严重程度

- **Gemma 4 26B QAT memory usage** — Issue #11435: Model consumes >15 GB RAM with llama.cpp-b11067 on a 16 GB RAM system. ([#11435](https://github.com/unslothai/unsloth/issues/11435))

- **Gemma 4 26B QAT内存使用** — Issue #11435: 在16 GB内存系统上，llama.cpp-b11067的模型消耗超过15 GB RAM。

- **Dual Intel Arc B60 Vulkan timeout** — Issue #11453: Mid-generation `ErrorDeviceLost` requires eject/reload. ([#11453](https://github.com/unslothai/unsloth/issues/11453))

- **双Intel Arc B60 Vulkan超时** — Issue #11453: 中间生成时`ErrorDeviceLost`需要弹出/重新加载。

- **Large codeblocks lag** — Issue #10769: Desktop interface experiences significant lag with large codeblocks on RTX 4090. PR #11423 addresses this. ([#10769](https://github.com/unslothai/unsloth/issues/10769))

- **大代码块延迟** — Issue #10769: 在RTX 4090上桌面界面处理大代码块时出现明显延迟。PR #11423解决了此问题。

**Low Severity** 低严重程度

- **API Keys copy button** — Issue #11387: Copy button copies trimmed prompt version instead of full prompt. ([#11387](https://github.com/unslothai/unsloth/issues/11387))

- **API密钥复制按钮** — Issue #11387: 复制按钮复制的是剪裁后的提示词版本而不是完整提示词。

- **Studio not returning all models** — Issue #11393: Model query returns incomplete list on CMP 170HX. ([#11393](https://github.com/unslothai/unsloth/issues/11393))

- **Studio未返回所有模型** — Issue #11393: 在CMP 170HX上模型查询返回不完整的列表。

---

## What This Means for Application Developers
这对应用开发者意味着什么

1. **MTP model users on Blackwell GPUs** — Avoid Qwen3.8-Flash-Next and Qwen3 models with MTP enabled on RTX 5080/4090 until the graph construction assertion is resolved. Consider using non-MTP variants or waiting for the next llama.cpp build.

1. **Blackwell GPU上的MTP模型用户** — 在图构建断言解决之前，避免在RTX 5080/4090上使用启用MTP的Qwen3.8-Flash-Next和Qwen3模型。考虑使用非MTP变体或等待下一个llama.cpp构建。

2. **Memory-constrained deployments** — The PR #11494 optimization reduces trainer OOM risk by ~5 GiB for 27B+ models. If you were hitting memory limits during training initialization, upgrading to the next release should help.

2. **内存受限的部署** — PR #11494优化为27B+模型减少了约5 GiB的训练器OOM风险。如果在训练初始化时遇到内存限制，升级到下一个版本应该会有所帮助。

3. **Tool-heavy agents** — The 256KB tool-result cap (PR #11430) may truncate long tool outputs. Design your tools to return concise results, or implement chunking if you need to pass large data to models.

3. **重工具代理** — 256KB工具结果上限（PR #11430）可能会截断长工具输出。设计您的工具返回简洁结果，或者如果需要向模型传递大量数据，则实施分块。

4. **RTX 5070 Ti users** — The bundled llama.cpp shows significant slowdown. Consider using the official ggml-org CUDA 12 build for inference until the performance regression is addressed.

4. **RTX 5070 Ti用户** — 捆绑的llama.cpp显示明显减速。在性能回归解决之前，考虑使用官方ggml-org CUDA 12构建进行推理。

5. **Vision fine-tuning** — Muse-Glimmer training currently fails with dynamic frames. If you're using this architecture, hold off on training or monitor for a fix.

5. **视觉微调** — Muse-Glimmer训练目前在使用动态帧时失败。如果您使用此架构，请暂停训练或关注修复。

6. **Multi-GPU users** — Studio now surfaces more detail about layer/KV splits (issues #11474, #11475), but per-GPU memory allocation preview is still missing. Plan for iterative testing when using heterogeneous GPU setups.

6. **多GPU用户** — Studio现在展示了更多关于层/KV分割的细节（issues #11474, #11475），但每GPU内存分配预览仍然缺失。在使用异构GPU设置时，请计划进行迭代测试。</think>

# Unsloth 动态 — 2026-09-22

## 今天的重要更新

两个关键的MTP相关崩溃正在影响RTX 5080/4090 GPU上使用最新llama.cpp构建的Qwen3.8-Flash-Next和Qwen3模型，表明MTP（多token预测）架构可能存在图构建问题。Unsloth Studio团队正在积极合并UI改进，包括对比度滑块增强、间距缩放和256KB工具结果上限，以提高稳定性。

---

## 发布与重大变更

过去24小时内未检测到任何发布。

---

## 新模型与硬件支持

- **Qwen3-Omni-30B-A3B** — PR #11467解决了omni检查点的自动类识别问题，使该多模态模型能够正常加载。 ([#11467](https://github.com/unslothai/unsloth/pull/11467))

- **Phi-4-reasoning-vision-15B** — PR #11469恢复了该模型远程代码所需的Transformers 4.x图像处理重导出。 ([#11469](https://github.com/unslothai/unsloth/pull/11469))

- **Muse-Glimmer视觉微调** — Issue #11434报告了在frames > 1时`get_vision_pixel_shuffle_index`中出现的数据相关编译失败。 ([#11434](https://github.com/unslothai/unsloth/issues/11434))

- **Intel Arc Pro B60 (双卡)** — Issue #11453报告Vulkan后端在中间生成时出现`ErrorDeviceLost`，导致聊天锁定需要弹出/重新加载。 ([#11453](https://github.com/unslothai/unsloth/issues/11453))

- **AMD Strix Halo (Radeon 8060S)** — Issue #7371记录了ROCm 7.13和预构建b10079在Windows裸机上的性能回归。 ([#7371](https://github.com/unslothai/unsloth/issues/7371))

- **NVIDIA RTX 5070 Ti (sm_120/Blackwell)** — Issue #11349报告捆绑的llama.cpp (b11030-mix)生成速度比官方ggml-org CUDA 12构建慢5-6倍。 ([#11349](https://github.com/unslothai/unsloth/issues/11349))

---

## 性能与优化

- **跳过冗余TRL kbit准备** — PR #11494通过在Unsloth已准备好模型时跳过TRL的`prepare_peft_model`调用，在训练器构建过程中消除了约5 GiB不必要的内存分配。 ([#11494](https://github.com/unslothai/unsloth/pull/11494))

- **bitsandbytes的实时PyTorch流** — PR #10745通过使用PyTorch当前的加速器流进行直接的bitsandbytes原生反量化和GEMV/GEMM调用来解决缓存流差异问题。 ([#10745](https://github.com/unslothai/unsloth/pull/10745))

- **UI对比度滑块覆盖更多表面** — PR #11459将对比度重映射从边框和弱化文本扩展到卡片、菜单、按钮和控制填充。 ([#11459](https://github.com/unslothai/unsloth/pull/11459))

- **间距随UI字体大小缩放** — PR #11458确保当用户将字体大小从12px调整到20px时，内边距、间距、边距和行高能够自适应。 ([#11458](https://github.com/unslothai/unsloth/pull/11458))

- **流式代码围栏高亮** — PR #11423修复了#10769中报告的延迟问题，同时保留了语法高亮功能，据报道在140K字符流上从29 fps提升到59 fps。 ([#11423](https://github.com/unslothai/unsloth/pull/11423))

- **工具结果文本上限256KB** — PR #11430引入了硬上限，防止当上下文窗口定价缺失时超大型结果到达模型。 ([#11430](https://github.com/unslothai/unsloth/pull/11430))

- **ROCm torch与BNB兼容性对齐** — PR #10277确保自动ROCm PyTorch选择与Linux x86_64 AMD上的bitsandbytes ROCm 6.4+要求保持一致。 ([#10277](https://github.com/unslothai/unsloth/pull/10277))

---

## 稳定性与回归

**高严重程度**

- **Qwen3.8-Flash-Next MTP中止** — Issue #11143: 模型在b10995-mix-3e83366上重新base后加载时中止，提示`nextn.hc_head_norm still [hc_dim]`。14条评论，2个赞。 ([#11143](https://github.com/unslothai/unsloth/issues/11143))

- **MTP drafter GGML_ASSERT崩溃** — Issue #11219: 在b11007-mix、RTX 5080上图构建时崩溃，提示`GGML_ASSERT(ggml_can_repeat(b, a))`。 ([#11219](https://github.com/unslothai/unsloth/issues/11219))

**中等严重程度**

- **Gemma 4 26B QAT内存使用** — Issue #11435: 在16 GB内存系统上，llama.cpp-b11067的模型消耗超过15 GB RAM。 ([#11435](https://github.com/unslothai/unsloth/issues/11435))

- **双Intel Arc B60 Vulkan超时** — Issue #11453: 中间生成时`ErrorDeviceLost`需要弹出/重新加载。 ([#11453](https://github.com/unslothai/unsloth/issues/11453))

- **大代码块延迟** — Issue #10769: 在RTX 4090上桌面界面处理大代码块时出现明显延迟。PR #11423解决了此问题。 ([#10769](https://github.com/unslothai/unsloth/issues/10769))

**低严重程度**

- **API密钥复制按钮** — Issue #11387: 复制按钮复制的是剪裁后的提示词版本而不是完整提示词。 ([#11387](https://github.com/unslothai/unsloth/issues/11387))

- **Studio未返回所有模型** — Issue #11393: 在CMP 170HX上模型查询返回不完整的列表。 ([#11393](https://github.com/unslothai/unsloth/issues/11393))

---

## 这对应用开发者意味着什么

1. **Blackwell GPU上的MTP模型用户** — 在图构建断言解决之前，避免在RTX 5080/4090上使用启用MTP的Qwen3.8-Flash-Next和Qwen3模型。考虑使用非MTP变体或等待下一个llama.cpp构建。

2. **内存受限的部署** — PR #11494优化为27B+模型减少了约5 GiB的训练器OOM风险。如果在训练初始化时遇到内存限制，升级到下一个版本应该会有所帮助。

3. **重工具代理** — 256KB工具结果上限（PR #11430）可能会截断长工具输出。设计您的工具返回简洁结果，或者如果需要向模型传递大量数据，则实施分块。

4. **RTX 5070 Ti用户** — 捆绑的llama.cpp显示明显减速。在性能回归解决之前，考虑使用官方ggml-org CUDA 12构建进行推理。

5. **视觉微调** — Muse-Glimmer训练目前在使用动态帧时失败。如果您使用此架构，请暂停训练或关注修复。

6. **多GPU用户** — Studio现在展示了更多关于层/KV分割的细节（issues #11474, #11475），但每GPU内存分配预览仍然缺失。在使用异构GPU设置时，请计划进行迭代测试。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*