# AI 基础设施日报 2026-11-24

> 生成时间: 2026-11-24 06:18 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me go through it carefully and translate it while following all the rules.

Key things to remember:
- Output ONLY the translation, no preamble or explanation
- Preserve all Markdown structure exactly
- Keep technical terms, project names, URLs, code references in original form
- Use natural technical Chinese register

Let me translate section by section carefully.
</think>


# AI 推理生态日报 — 2026-11-24
## 跨项目对比报告

---

## 1. 生态概览

2026-11-24 的 AI 推理生态呈现**多轴加速分化**格局：各项目同时应对新架构浪潮——混合 GDN 模型（Qwen4-Exp、DeepSeek-V4、Inkling 2）、多种投机解码变体（DFly、DFLASH、EAGLE、MTP）以及多模态扩展——的同时，也在为生产级可靠性打补丁。**研究级推理服务引擎**（vLLM、SGLang）与**便携/消费级运行时**（llama.cpp、Ollama、Unsloth）之间的分野依然清晰，但边界正在模糊：llama.cpp 已支持 KV-cache 量化与 CUDA Graphs，SGLang 也在向 Rust 前端对齐。最具影响力的结构性趋势是 **PD 分离**（SGLang）和 **AsyncPP** 进入多阶段就绪状态——这意味着下一轮基础设施优化将发生在 prefill 和 decode 节点之间的网络层，而非单一 GPU 进程内部。

---

## 2. 活跃度对比

| 项目 | 活跃 Issues | 活跃 PRs | 24 h 内 Release | 发布节奏 |
|---------|-----------------|--------------|-----------------|---------------|
| **vLLM** | ~105 | ~500 | **0** | Nightly builds；无 tagged release |
| **SGLang** | ~38 | ~70 | **0** | SGLang 1.0（稳定性版本推进中） |
| **llama.cpp** | ~50 | ~30 | **~10 条 commits**（含 b12668–b12670） | 滚动发布；无正式 semver 标签 |
| **Ollama** | ~20 | ~15 | **1 个 RC**（v0.40.18-rc0） | 语义化版本；补丁级发布节奏 |
| **Unsloth** | ~30 | ~303 | **1 个 beta**（v0.1.923-beta） | 语义化版本；beta 通道 |
| **LiteLLM** | ~15 | ~10 | **3 个 patches**（v1.108.16、1.109.4、1.110.3） | 语义化版本；LTS 分支 |

**观察：**
- **vLLM** 以绝对优势领先活跃 PR 量，约为第二名的 5 倍，反映其庞大的维护者基数和极广的硬件覆盖（CUDA、ROCm、XPU、Metal、Vulkan、CPU）。
- **Unsloth** 的 303 个活跃 PR 反映了其作为微调平台的项目属性——其中大部分是 CI/构建配置类 PR，而非推理内核变更。
- **SGLang** 和 **llama.cpp** 是仅有的两个发布结构化升级指南的项目（SGLang 1.0 说明、llama.cpp 每条 commit 的 changelog）。这对于管理升级风险的生产环境运维人员意义重大。
- **LiteLLM** 24 小时内三个 patch 发布，反映了网关层的高速度模式：响应上游 provider 变更快，单次 patch 回归面积极小。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth | LiteLLM |
|----------------------|------|--------|-----------|--------|---------|---------|
| **Qwen4-Exp / Qwen3.8-Flash-Next** | ✅ TP 规划（B200） | ✅ GDN fusion | — | — | — | ✅（上游） |
| **Hy4 / Hy4-Flash** | ✅ ROCm MI355X | ✅ DFly + Hunyuan-4-Flash | — | — | — | — |
| **Inkling 2 / Inkling 2 Mini** | — | ✅ query chunking | ✅ 上游 | ✅ GGUF | ✅ 1.9× 加速 | — |
| **DeepSeek-V4-Pro** | ⚠️ TP 卡死 bug | — | — | — | — | — |
| **DeepSeek-V4.1** | ⚠️ 内存回退 | — | — | — | — | — |
| **Kimi K3.1** | — | ✅ Ascend NPU + DFLASH | — | — | — | — |
| **Gemma 4** | — | ✅ breakable CUDA graph | — | — | — | ✅（上游） |
| **Krea 2 Turbo** | — | — | — | — | ✅ INT8 attention | — |
| **SenseNova Loop** | — | — | ✅ 多后端 | — | — | — |
| **Qwen-Image-Flash / FastWan** | — | — | — | — | ✅ 新增 | — |
| **Mamba2 模型** | — | ⚠️ 编译卡死 | — | — | — | — |
| **LTX-2.5** | — | — | — | — | ✅ fp16 fallback | — |
| **llava-next-video / video VL** | ✅ FA2 video 支持 | — | — | ✅ Qwen-VL 修复 | — | ✅（上游） |

**分类赢家：**
- **新模型覆盖广度：** vLLM 以最宽的 CUDA/ROCm 模型覆盖领先，但 SGLang 在投机解码多样性上正在快速追赶。
- **ROCm / AMD：** SGLang 与 vLLM 并驾齐驱，双方同时在 MI355X 和 gfx950 优化上发力。
- **本地/移动端运行时：** llama.cpp 以绝对优势领先，Vulkan Android、Hexagon DSP、Metal BF16 在同一天全部落地。
- **NPU 多样性：** SGLang 是唯一在结构化投机解码上支持 Ascend NPU 的项目。
- **网关 / 多 provider：** LiteLLM 是唯一跨全 provider 路由的项目；其他项目专注单 vendor 优化。

---

## 4. 性能前沿

各项目的优化工作集中在五个方向：

### 4.1 KV-Cache 与前缀缓存
- **vLLM：** 混合前缀缓存改进中；V1 scheduler 下 1.0–1.8 秒重新入队卡顿问题正在处理。
- **SGLang：** DP prefill 合并器（coalescer），缓解 MoE 在数据并行注意力下的负载不均。
- **llama.cpp：** MLX 运行时暂不支持 KV-cache 量化（Ollama issue）。
- **Ollama：** Prefill 缓存持久化（`OLLAMA_PREFILL_CACHE=1`）开发中。

### 4.2 投机解码
这是今天最热的优化方向：
| 项目 | 架构 | 收益 |
|---------|-------------|------|
| vLLM | HY4 Flash LatentMoE TP all-reduces fusion | **+5.74%** 吞吐，**-3.42%** TPOT |
| vLLM | gfx950 MTP verify kernel（MI355X） | 新内核路径 |
| SGLang | Hunyuan-4-Flash DFly | Block 投机解码 |
| SGLang | Kimi K3.1 DFLASH（Ascend NPU） | NPU 首发支持 |
| llama.cpp | Inkling 2 Mini NVFP4 反量化 | V100 prefill 修复 |
| Ollama | Inkling 2 MLX Metal 内核 | 1.9× 解码加速 |

### 4.3 量化
- **llama.cpp：** 按文件大小/bpw 目标自动选择最优量化类型（b12669）—— pareto 优化器重构。
- **vLLM：** Marlin → Humming 替换 RFC（#65560）一旦落地，将整合 NVIDIA 上 8+ 种量化格式。
- **Unsloth：** Krea 2 INT8 attention（+5–8% 吞吐）。
- **Ollama：** 16 GB 模型上 MLX KV-cache 量化暂不支持。

### 4.4 内核融合
- **SGLang：** Qwen3.5 GDN RMSNormGated + sigmoid_mul 融合（FP8 blockwise）。
- **SGLang：** SM90 JIT temperature softmax 用于采样元数据路径。
- **Unsloth：** 多 GPU CFG 副本在接收前先行内存计数。
- **llama.cpp：** Metal BF16 src1 MUL_MAT（填补了 Apple Silicon 上约 1.5 年的空白）。

### 4.5 分布式服务
- **SGLang：** AsyncPP 1/9 已合入（pickle 前先复制 output logprobs）；PD 分离（forward 结束时发送 KV，而非结果 ring）。
- **vLLM：** Rust 前端编译隔离（#69383）；目标在下一个版本中默认启用。
- **LiteLLM：** Kafka 请求日志复制，支持多区域审计追踪。

**性能前沿总结：** 当下最高吞吐收益集中在**投机解码内核路径**（5–10% 量级，硬件相关）。ROI 最高的结构性变化是 SGLang 的 **PD 分离**，将 prefill 成本摊销到流水线各阶段。llama.cpp 的量化自动选择是对开发者体验最友好的改进。

---

## 5. 层级定位

| 层级 | 项目 | 范围 |
|-------|----------|-------|
| **训练 / 微调** | **Unsloth**（主业）、SGLang 部分（GRPO/AsyncGRPO） | LoRA/QLoRA 训练、RLHF、视觉微调 |
| **本地 / 嵌入式运行时** | **llama.cpp**（便携）、**Ollama**（消费体验）、**Unsloth**（微调+运行） | 跨平台 GGUF 服务、Metal/Vulkan/Hexagon 后端、单节点 |
| **推理服务引擎** | **vLLM**（NVIDIA 优先）、**SGLang**（调度器优先） | 多卡 TP/PP、前缀缓存、投机解码、分布式 |
| **网关 / 代理** | **LiteLLM** | 多 provider 路由、预算管理、认证、可观测性 |
| **云抽象层** | **LiteLLM**（主业） | 100+ provider 一致性、成本管控、合规 |

**交叉重叠区域：**
- vLLM 和 SGLang 正在收敛：双方均支持投机解码、MoE、多模态和分布式服务。差异化在于**调度器**（chunked-prefill vs. continuous-batching 变体）和 **Rust 前端**（vLLM）vs. **Python 优先**（SGLang）。
- llama.cpp 和 Ollama 正在分化：llama.cpp 追求极致性能（Metal BF16、Vulkan Android、Hexagon），Ollama 追求用户体验（Docker、自动更新、GGUF 拉取）。Ollama 如今有了自己的 MLX runner，不再总是委托给 llama.cpp。
- Unsloth 正在向上扩张：此前定位为微调工作室，现在在本地推理质量上与 Ollama 正面竞争（Inkling 2 Mini 1.9× 加速）。

---

## 6. 趋势信号

### 信号 1：混合 GDN 模型爆发正在压测每一个后端
Qwen4-Exp、DeepSeek-V4、Hunyuan-4-Flash、Inkling 2 和 SenseNova Loop 均采用相同模式：GDN（GatedDeltaNet）层与标准注意力层交替堆叠。这造成了**后端碎片化**，因为：
- FA2/FlashMLA 风格的内核不覆盖 GDN 激活路径。
- 每个项目必须为 GDN 添加专门的融合内核（SGLang 的 RMSNormGated fusion、llama.cpp 的 Inkling NVFP4 反量化修复）。
- V100 及更旧架构将无法使用优化路径（vLLM 和 llama.cpp 均已出现 V100 GDN 回退 issue）。

**关注：** 社区是否会在 2026 年 Q1 前就 GDN 内核抽象达成共识，还是继续以碎片化的 per-model patch 方式演进。

### 信号 2：投机解码多样性正超越标准化速度
当前有五种不同的 SD 变体在各项目中活跃：**DFly**（SGLang + vLLM）、**DFLASH**（SGLang）、**EAGLE**（vLLM + SGLang）、**MTP**（vLLM）和 **Block Speculative**（llama.cpp）。每种在命中率曲线、硬件需求和集成复杂度上各不相同。目前没有任何项目发布过跨这些变体的系统性对比基准矩阵。

**关注：** vLLM 的 Marlin→Humming RFC（#65560）是否会扩展为投机解码调度抽象，还是每种 SD 变体都需要专属内核支持。

### 信号 3：PD 分离标志着大规模单进程服务时代的终结
SGLang 的 AsyncPP（1/9 已合入）和 PD 分离工作标志着一个架构转折：prefill 和 decode 工作负载即将在不同的硬件池上运行，通过网络互联。这是从云厂商（SageMaker、Vertex AI endpoints）向开源迁移的云原生模式。

**关注：** SGLang 何时交付完整 AsyncPP 流水线，vLLM 的应对将是下一个关键转折点。若 vLLM 推出等效方案，到 2026 年中，多节点分离式服务将成为默认生产模式。

### 信号 4：Apple Silicon MLX 已成为一级后端
Ollama（v0.40.18-rc0）、Unsloth（v0.1.923-beta）和 llama.cpp（Metal BF16 MUL_MAT）在同一天各自发布了 Apple Silicon 改进。MLX 生态已不再是实验性项目——它是拥有正式发布通道的目标平台，已在 M4 Pro 和 Mac Studio 上有了生产用户。

**关注：** MLX 上 KV-cache 量化缺口（Ollama issue #19857）是 24 GB Apple Silicon 设备上长上下文 Agent 工作负载的主要障碍。追踪该问题何时解决，因为直接决定了消费者级 Mac 硬件上本地 LLM Agent 的可用性。

### 信号 5：LiteLLM 网关正在成为基础设施
快速的补丁节奏（24 h 内 3 个 release）、Kafka 日志复制和 Realtime 会话的 TPM 强制执行，表明 LiteLLM 正从开发者便利工具成熟为企业级路由基础设施。曾运行自定义 API 聚合器的团队正在迁移到 LiteLLM 代理。

**关注：** ChatGPT 订阅绑定变更（#53744）和 per-deployment Databricks OAuth M2M（#50675）表明 LiteLLM 正在扩展到多租户企业模式。若此趋势延续，LiteLLM 将从开发者库变成采购依赖项。

### 信号 6：安全攻击面在扩大
三个项目在同一天发布了安全加固：
- Ollama：无界 blob 创建漏洞修复（v0.40.16+），Windows 网络路径防护。
- Unsloth：Data Recipe 和 Export Worker 加固。
- llama.cpp：Metal BF16 内核安全修复。

随着这些运行时获得企业级采用，攻击面（工具链中的 prompt 注入、模型权重篡改、CUDA Graph 漏洞利用）也在增长。预计 2026 年 Q1 将迎来一波安全加固 PR 潮。

---

*本跨项目日报综合自 vLLM、SGLang、llama.cpp、Ollama、Unsloth 及 LiteLLM，数据采集时间 2026-11-24。所有项目内链接均对应各项目 GitHub 仓库。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate an English technical report about vLLM into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Keep issue/PR references and their link text as-is
6. Use natural technical Chinese register - not literal word-for-word

Let me translate this carefully section by section.

Title: vLLM Daily Digest — 2026-11-24
→ vLLM 每日简报 — 2026-11-24

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
→ 对应用开发者的启示

Let me translate the full content now.
</think>


# vLLM 每日简报 — 2026-11-24

## 1. 今日要闻

vLLM 项目近期在硬件特定性能优化方面非常活跃，多个重要 PR 聚焦于 AMD MI355X ROCm 支持和 NVIDIA Hopper/Blackwell CUDA Graph 修复。一个重要的 RFC 提议通过在所有 NVIDIA 架构上用更强大的 Humming 库替换遗留的 Marlin 内核，来统一量化技术栈，实现 8+ 种量化格式的整合支持。社区同时也在处理关于投机解码卡死和 Blackwell 硬件上 CUDA Graph 捕获失败的关键 Bug。

---

## 2. 发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| 无新版本 | 过去 24 小时内无标签发布 | — |

---

## 3. 新模型与硬件支持

| 类别 | 项目 | 详情 | 链接 |
|----------|------|---------|------|
| **ROCm / AMD** | Hy4 & Hy4-Flash 支持 | ROCm 支持腾讯 Hy4 模型，在 MI355X 上使用 DFly 投机解码 | [PR #68839](https://github.com/vllm-project/vllm/pull/68839) |
| **ROCm / AMD** | gfx950 MTP verify 内核 | MI355X DSA indexer 新增 gluon 分页 MQA logits 内核 | [PR #68596](https://github.com/vllm-project/vllm/pull/68596) |
| **ROCm** | ROCm gfx1250 → torch 2.12 | 清理遗留 torch 版本门控；净删除 1,230 行代码 | [PR #69572](https://github.com/vllm-project/vllm/pull/69572) |
| **Intel XPU** | 单适配器 LoRA dense GEMM | 使用 dense GEMM 替代 per-token BGMV 进行 prefill batch 的 XPU 优化 | [PR #66752](https://github.com/vllm-project/vllm/pull/66752) |
| **Intel XPU** | W8A16 FP8 内核修复 | 展平 XPU W8A16 FP8 linear 内核中的 N-D 输入 | [PR #68308](https://github.com/vllm-project/vllm/pull/68308) |
| **NVIDIA Hopper** | FlashInfer CuTe-DSL MoE | SM90 上使用 FlashInfer 融合 MoE 内核的新非量化 MoE 后端 | [PR #66749](https://github.com/vllm-project/vllm/pull/66749) |
| **NVIDIA** | Qwen4-Exp 瘦长 GEMM 方案 | B200 上 Qwen3.8-Flash-Next 的 SM100 TP=2 和 TP=8 优化 GEMM 方案 | [PR #69529](https://github.com/vllm-project/vllm/pull/69529) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | 链接 |
|------|--------|--------|------|
| **HY4 Flash LatentMoE** | 通过 `reduce_commutative` 融合 TP all-reduces | 吞吐量提升最高 **5.74%**；TP8 8×H200 TPOT 降低最高 **3.42%** | [PR #68469](https://github.com/vllm-project/vllm/pull/68469) |
| **NVIDIA SM90** | HYV4/V4-Flash 原生小 head FlashMLA 内核 | 扩展调度至模型特定覆盖，HY4 Flash 继承使用 | [PR #68321](https://github.com/vllm-project/vllm/pull/68321) |
| **Bugfix** | block-FP8 Triton GEMM 中 64 位行偏移 | 修复当 `M * K` 或 `M * N` 超过 2³¹ 时的溢出问题 | [PR #66200](https://github.com/vllm-project/vllm/pull/66200) |
| **Spec Decode** | 修复 FA2 GPU 上的自适应验证启动 | 解决 SM8x/SM12x 权重加载后的拒绝问题 | [PR #62154](https://github.com/vllm-project/vllm/pull/62154) |
| **多模态** | 音频入队时重放 Whisper 解码器 CUDA graphs | 调度器接受新音频时允许完整 CUDA graph 重放 | [PR #69552](https://github.com/vllm-project/vllm/pull/69552) |
| **Rust Frontend** | 前端环境变量排除在编译因素之外 | `VLLM_USE_RUST_FRONTEND` 不再使 torch.compile 缓存失效 | [PR #69383](https://github.com/vllm-project/vllm/pull/69383) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 描述 | 状态 | 链接 |
|----------|-------|-------------|--------|------|
| **高** | DeepSeek-V4-Pro TP Worker 卡死 | TP=8 + MTP 投机解码时 RPC 超时导致 `EngineDeadError` | Open | [Issue #41530](https://github.com/vllm-project/vllm/issues/41530) |
| **高** | RTX PRO 6000 Blackwell CUDA graph Xid 31 | SM120 CUDA MPS 下 Qwen3.6-27B-FP8 + LoRA CUDA graph 捕获时非法内存访问 | Open | [Issue #67488](https://github.com/vllm-project/vllm/issues/67488) |
| **高** | DeepSeek-V4.1 内存回归 | H100 上 11.12 到 11.18 nightly 之间每卡增加约 12.5 GiB | Closed（修复进行中） | [Issue #68647](https://github.com/vllm-project/vllm/issues/68647) |
| **中** | vGPU CPU KV offload 崩溃 | NVIDIA vGPU 上单有效描述符时 `cuMemcpyBatchAsync` 故障 | Open | [Issue #61052](https://github.com/vllm-project/vllm/issues/61052) |
| **中** | XPU DFlash2 接受率 0% | `--dtype float16` 时投机 draft 接受率为 0%（bf16 正常） | Open | [Issue #55250](https://github.com/vllm-project/vllm/issues/55250) |
| **中** | EAGLE/MTP block drop 未针对 ≥3 attention 组测试 | 混合模型（DeepSeek-V4-Flash + DSpark）前缀缓存 bug | Open | [Issue #51771](https://github.com/vllm-project/vllm/issues/51771) |
| **低** | Omnilingual ASR 启动失败 | `padding_mask` 留在 CPU 但被转发到 Transformers 后端的 `get_audio_features` | Open | [Issue #69320](https://github.com/vllm-project/vllm/issues/69320) |

---

## 6. 对应用开发者的启示

**AMD ROCm 部署者：** Hy4 Flash 模型现已支持 MI355X 上的 DFly 投机解码。如果你在 AMD 硬件上运行 Qwen3.8-Flash-Next，新的 gfx950 logits 内核将带来更优的 MTP 验证吞吐量。

**NVIDIA Blackwell 用户：** RTX PRO 6000 Blackwell 上 LoRA + CUDA graph 捕获的 Bug（Xid 31）较为严重——在问题解决前请避免在 SM120 上使用 LoRA 适配器。Block-FP8 Triton GEMM 中的 64 位行偏移修复解决了大 batch 场景下的整数溢出问题。

**Rust Frontend 进展：** Rust 前端持续成熟（[PR #69383](https://github.com/vllm-project/vllm/pull/69383)），编译缓存隔离现已正常工作。团队计划在后续版本中将 Rust 作为 `vllm serve` 的默认实现（[Issue #68784](https://github.com/vllm-project/vllm/issues/68784)）。

**量化路线图：** 用 Humming 替换 Marlin 的 RFC（[Issue #65560](https://github.com/vllm-project/vllm/issues/65560)）预示着量化后端将走向统一。如果你正在使用 INT4/INT8 GPTQ/AWX 或 MXFP 格式，请关注此议题以获取迁移指南。

**生产级前缀缓存：** V1 调度器中已完成 async KV 拉取的 1.0–1.8 秒重入队延迟（[Issue #62532](https://github.com/vllm-project/vllm/issues/62532)）会影响使用分层 offload 或远程 KV 连接器的部署——可考虑采用提议的队首重新准入优化方案。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the technical report from English to Simplified Chinese. I need to:

1. Translate the content while preserving all formatting (headings, tables, lists, etc.)
2. Keep URLs, issue numbers, project names, version tags, etc. in their original form
3. Use natural technical Chinese register
4. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

## 1. Today's Highlights
The key translation points:
- "Today" → 今天
- "push toward" → 推进
- "stability release" → 稳定版发布
- "tracked in" → 追踪于 / 在...追踪
- "highest-visibility item" → 最受关注的事项
- "production-scale serving" → 生产级服务部署
- "on the performance side" → 在性能方面
- "are landing rapidly" → 快速落地

## 2. Releases & Breaking Changes
- "No new releases today" → 今日无新版本发布
- "SGLang 1.0 is in-progress" → SGLang 1.0 正在开发中
- "Action item" → 行动项
- "should begin reviewing" → 应开始查阅

## 3. New Model & Hardware Support
- "New model recipe" → 新模型配方
- "on two Tesla T4 GPUs" → 在两张 Tesla T4 GPU 上
- "NPU support" → NPU 支持
- "Enables block-speculative decoding" → 启用块级投机解码
- "for the first time" → 首次
- "Speculative decoding" → 投机解码
- "CPU kernel" → CPU 内核


- "Quantization" → 量化

## 4. Performance & Optimization
- "Landed & In Review" → 已合并 & 审核中
- "Optimization" → 优化
- "Metric" → 指标
- "Reduced fallback" → 减少回退
- "Fixes last-block" → 修复末块

## 5. Stability & Regressions
- "CI Status" → CI 状态
- "broken" → 失败
- "flaky" → 不稳定
- "recently fixed" → 最近修复
- "maintenance mode" → 维护模式
- "active" → 开启中

## 6. What This Means for Application Developers
- "Immediate Action Items" → 立即行动项
- "Monitor" → 监控
- "cold-start latency" → 冷启动延迟
- "upcoming changes" → 即将到来的变化
- "budget for" → 纳入规划
- "preparation now" → 现在就开始准备

Let me now write out the full translation:
</think>


# SGLang 日报 — 2026-11-24

## 1. 今日要点

SGLang 项目正稳步推进 **SGLang 1.0 稳定版发布**（在 [#50045](https://github.com/sgl-project/sglang/issues/50045) 中追踪），团队正在加固现有功能，并为从 0.5.x 升级做准备。**2026 年 Q4 消歧义 Prefill-Decode 分离路线图**（#43699，27 条评论）仍是关注度最高的事项，体现了项目对生产级服务部署的重视。在性能方面，AMD ROCm 优化正在快速落地——gfx1250 MLA 解码延迟通过原地 RMSNorm 读取降低约 78%，而 NVIDIA 则通过 Qwen3.5 FP8 GatedDeltaNet 融合和 SM90 JIT 采样获得了收益。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 | 链接 |
|------|---------|------|
| **今日无新版本发布** | SGLang 1.0 正在开发中；版本追踪显示从 0.5.x 升级**可能需要改动**——请参阅 [#50045](https://github.com/sgl-project/sglang/issues/50045) 的升级说明部分 | [#50045](https://github.com/sgl-project/sglang/issues/50045) |

**行动项：** 仍在使用 0.5.x 的团队应开始查阅 SGLang 1.0 升级指南，评估迁移工作量，以便在稳定版发布前做好准备。

---

## 3. 新模型与硬件支持

| 类别 | 项目 | 说明 | 链接 |
|----------|------|-------|------|
| **新模型配方** | **Gemma 4 12B IT** 在两张 Tesla T4 GPU 上 | FP16，TP=2；文档基于 SGLang 0.5.19 + CUDA 12.9 | [#52725](https://github.com/sgl-project/sglang/pull/52725) |
| **NPU 支持** | **Kimi K3.1 + DFLASH 投机解码** 在 Ascend 上 | 首次在 Ascend NPU 硬件上启用块级投机解码 | [#52518](https://github.com/sgl-project/sglang/pull/52518) |
| **投机解码** | **Hunyuan-4-Flash DFly** 支持 | 块投机解码器打包在 Hy4-Flash checkpoint 中（`model.dfly_layers.*`） | [#51938](https://github.com/sgl-project/sglang/pull/51938) |
| **CPU 内核** | **Conv1D 内核** 用于 Intel CPU | 新增 `sgl-kernel` 路径，适用于纯 CPU 部署 | [#47017](https://github.com/sgl-project/sglang/pull/47017) |
| **量化** | **Qwen3.5 FP8** GDN RMSNormGated + sigmoid_mul 融合 | 混合模型块级 `[128, 128]` FP8（30 层 GatedDeltaNet + 10 层全注意力） | [#52047](https://github.com/sgl-project/sglang/pull/52047) |

---

## 4. 性能与优化

### AMD ROCm — 已合并与审核中

| PR | 优化 | 指标 | 链接 |
|----|-------------|--------|------|
| #49347 | gfx1250 MLA 解码：原地融合 qkv_a RMSNorm 读取，一次 Triton 启动 | **TPOT 提升 4.0%**（9.41 → 9.03 ms），TP8 8k/1k 并发 | [#49347](https://github.com/sgl-project/sglang/pull/49347) |
| #48154 | gfx1250：采用 gfx950 aiter RoPE、 RMSNorm、 MLA KV-row 路径 | 减少对 `forward_native`（torch gather/repeat）的回退 | [#48154](https://github.com/sgl-project/sglang/pull/48154) |
| #52629 | gfx950：启用 AITER 的 FlyDSL `fp8_mqa_logits` 内核处理 FP8 index keys | 修复行数不为 4 倍数时末块的完整 key 扫描问题 | [#52629](https://github.com/sgl-project/sglang/pull/52629) |
| #49883 | gfx942：默认启用 `unified_attention` 上的 EAGLE target verify | 改善较新 AMD 芯片上 EAGLE 投机解码路径 | [#49883](https://github.com/sgl-project/sglang/pull/49883) |

### NVIDIA CUDA — 已合并与审核中

| PR | 优化 | 指标 | 链接 |
|----|-------------|--------|------|
| #52047 | Qwen3.5 GDN：融合 RMSNormGated + attention sigmoid_mul，配合块级 FP8 量化 | 减少每层内核启动次数；30B-A3B-FP8 受益 | [#52047](https://github.com/sgl-project/sglang/pull/52047) |
| #52404 | Gemma 4 多模态：启用可中断 prefill CUDA graph | 修复图像输入的 graph 路径；改善 prefill 效率 | [#52404](https://github.com/sgl-project/sglang/pull/52404) |
| #50061 | SM90：启用 JIT temperature softmax 和融合 draft proposal | 采样元数据路径的内核融合（2026 Q4 路线图项目） | [#50061](https://github.com/sgl-project/sglang/pull/50061) |
| #51831 | XPU：GDN 中避免 prefill projection 拷贝 | 降低 Intel XPU 的内存带宽开销 | [#51831](https://github.com/sgl-project/sglang/pull/51831) |

### 调度器与内存 — 审核中

| PR | 优化 | 链接 |
|----|-------------|------|
| #51265 | **DP prefill 合并模式**：持有 prefill 直到所有 rank 都有任务 + 有足够 token 填满 chunk；减少 MoE 在 DP attention 下的负载不均衡 | [#51265](https://github.com/sgl-project/sglang/pull/51265) |
| #50954 | 按路径的 Mamba 状态：限制 host 拷贝次数，防止 HiCache + 流水线并行下 host Mamba 池耗尽 | [#50954](https://github.com/sgl-project/sglang/pull/50954) |
| #52196 | **AsyncPP 1/9**：在 pickle 序列化前将输出消息的 logprob 行拷贝到 host；为全异步 PP prefill 阶段打基础 | [#52196](https://github.com/sgl-project/sglang/pull/52196) |
| #50958 | PD 分离：在 forward 结束时即发送各 PP 阶段的最后一个 KV chunk，而非等待结果环回传 | [#50958](https://github.com/sgl-project/sglang/pull/50958) |

---

## 5. 稳定性与回归问题

> **CI 状态（2026-11-24 05:54 UTC）：** 5 个失败 · 23 个不稳定 · 937 个近期修复  
> CI 维护模式**已开启**（[#21065](https://github.com/sgl-project/sglang/issues/21065)）。普通 PR 的 CI 运行已暂停；核心维护者在处理基础设施问题。

### 高优先级

| # | 问题 | 影响 | 状态 | 链接 |
|---|-----|--------|--------|------|
| **51628** | Mamba2 `_chunk_scan_fwd_kernel` 在服务期间编译，导致 NemotronH 首次大批量 prefill 停顿（每 rank 约 1.45s，每 rank 重复 2–3 次） | 冷启动延迟峰值；请求超时 | **待处理** | [#51628](https://github.com/sgl-project/sglang/issues/51628) |
| **51188** | Diffusion：host 锁页内存预算 OOM 导致 MiniMax-H3 被杀（24 GB GPU + 32 GB host）；服务器仍报告就绪并返回 503 | 隐性降级；健康检查报告错误 | **待处理** | [#51188](https://github.com/sgl-project/sglang/issues/51188) |
| **51990** | 双流 MoE 块在一个 CUDA stream 上读取 MoE 输入，同时 in-place Triton runner 在另一个 stream 上覆写 | 数据损坏 / 输出错误 | **待处理** | [#51990](https://github.com/sgl-project/sglang/issues/51990) |
| **50780** | `fused_hc_mix` 在从不同 CUDA stream 重复调用时可能挂起 | 并发请求模式下推理挂起 | **待处理** | [#50780](https://github.com/sgl-project/sglang/issues/50780) |

### 中优先级

| # | 问题 | 链接 |
|---|-----|------|
| **52423** | `radix_eviction_policy=priority` 忽略 `--schedule-low-priority-values-first`，优先驱逐最高优先级前缀 | [#52423](https://github.com/sgl-project/sglang/issues/52423) |
| **52612** | Kimi-K3：marker 字符串如 `<\|close\|>response<` 被从答案中剥离，而非仅移除框架标记 | [#52612](https://github.com/sgl-project/sglang/issues/52612) |
| **52575** | `sgl-kv-indexer` 前缀查询在整个扫描期间持有单一 RwLock 读锁，导致 apply 饥饿 | [#52575](https://github.com/sgl-project/sglang/issues/52575) |
| **52483** | `--max-running-requests 0` 或负值被静默 clamp 为 1 | [#52483](https://github.com/sgl-project/sglang/issues/52483) |
| **52518** | Kimi K3.1 DFLASH 投机解码此前仅支持 CUDA；现正在扩展至 Ascend | [#52518](https://github.com/sgl-project/sglang/pull/52518) |

### 值得关注的已修复问题

| # | 修复 | 链接 |
|---|-----|------|
| **40360** | 缓存请求终态化与 `cache_finished_req` 绑定；中止的 LMCache 会话不再泄露 | [#40360](https://github.com/sgl-project/sglang/issues/40360) |
| **40144** | DFLASH draft 布局现已有校验；anchor-first checkpoint 不再静默偏移所有位置 | [#40144](https://github.com/sgl-project/sglang/issues/40144) |
| **51752** | DSpark 模拟接受不再从 rejection 残差中抽取 stop-row 奖励 | [#51752](https://github.com/sgl-project/sglang/pull/51752) |

---

## 6. 对应用开发者的意义

### 立即行动项

1. **监控 Mamba2 冷启动延迟。** 如果运行 NemotronH 模型，在编译修复落地前，预计新鲜启动时会有约 1.45–4.35s 的停顿。请考虑在初始化期间运行预热脚本或进行预编译。

2. **检查 diffusion 服务的资源规格。** MiniMax-H3 在 24 GB GPU + 32 GB host 上可能出现 host 锁页内存 OOM。在 [#51188](https://github.com/sgl-project/sglang/issues/51188) 解决前，请分配更多 host 内存或降低并发。

3. **审查 `--max-running-requests` 配置。** 设为 0 不会禁用该限制（会被静默 clamp 为 1）。如果需要硬上限，请使用正数值。

### 即将到来的变更需纳入规划

4. **SGLang 1.0 迁移（现在就开始准备）。** 1.0 版本对静默配置变更会报明确错误。在从 0.5.x 升级前，请审计启动参数和 chat template kwargs——尤其是带有 `reasoning_effort` 的 `--default-chat-template-kwargs`（见 [#38104](https://github.com/sgl-project/sglang/issues/38104)）。

5. **AMD ROCm 用户：升级路径正在加速。** gfx1250 和 gfx942 路径现已与 gfx950 共享优化内核。如果在 AMD MI300/MI350 系列上运行 DeepSeek-V3 / MoE 模型，[#49347](https://github.com/sgl-project/sglang/pull/49347) 带来的 4% TPOT 提升在规模化时非常可观。

6. **数据并行多节点路由。** 新增的 per-node HTTP 前端配合 `X-Data-Parallel-Rank`（[#47657](https://github.com/sgl-project/sglang/issues/47657)）使外部路由器（如 llm-d）可以将请求路由到特定 DP rank。如果你运营多节点推理集群，这简化了负载均衡，无需自定义路由器胶水层。

7. **AsyncPP 正在落地（1/9 已合并）。** 多级流水线并行 prefill 将实现全异步——减少流水线气泡。使用 PP 的团队应追踪 [#52196](https://github.com/sgl-project/sglang/pull/52196) 及其依赖 PR，在生产环境启用前进行基准测试验证。

---

*日报结束。数据来源：github.com/sgl-project/sglang，数据截至 2026-11-24。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this technical report about llama.cpp from English to Simplified Chinese. I need to:

1. Translate all the text while preserving the Markdown structure
2. Keep URLs, code, numbers, dates, issue/PR references as-is
3. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in original form
4. Use natural technical Chinese register
5. Output ONLY the translation, no preamble or explanation

Let me go through section by section and translate:

**Title:** llama.cpp Digest — 2026-11-24
→ llama.cpp 技术速报 — 2026-11-24

**Section 1: Today's Highlights**
- "llama.cpp landed a significant quantization pipeline overhaul" → llama.cpp 完成了一次重大的量化流程重构
- "auto-select optimal quant-type selection feature" → 自动选择最优量化类型的特性
- "allowing users to target a desired file size or bits-per-weight" → 允许用户设定目标文件大小或每权重位数
- "On the Metal backend" → 在 Metal 后端
- "BF16 src1 support for MUL_MAT operations" → BF16 src1 对 MUL_MAT 操作的支持
- "closes a long-standing gap" → 填补了长期存在的空白
- "Vulkan backend received its third AMD shader compiler optimization" → Vulkan 后端获得了第三轮 AMD 着色器编译器优化
- "Active stability issues include" → 活跃的稳定性问题包括
- "V100 prefill regression" → V100 预填充性能回退
- "CUDA illegal memory access with speculative decoding" → CUDA 非法内存访问（在投机解码场景下）
 
I'll carefully translate the key commit details, focusing on precise technical language and maintaining the original formatting.

The latest update introduces a quantization optimization strategy, enabling automatic selection of optimal quant types based on file size or bits-per-weight targets. This represents a significant refinement in model compression techniques, allowing more flexible and intelligent quantization approaches.

The server-side changes mandate a description field for shell command execution, enhancing metadata clarity and operational transparency.

Hardware-specific enhancements include Metal backend's introduction of BF16 and F32 source operations for matrix multiplication, addressing previous compatibility limitations. The Flash Attention mechanism receives bias handling improvements across CUDA, ROCm, and Vulkan platforms, potentially improving computational efficiency.

The compilation process is transitioning to include Kleidiai vendor files, expanding the project's dependency ecosystem and integration capabilities.

Notably, ROLL operations now extend support to WebGPU environments, reflecting broader cross-platform compatibility efforts.

New model and hardware integrations emerge, including SenseNova Loop, Inkling 2, and Qwen4-Exp implementations. Hexagon backend introduces integer HMX support for Q4_0 matrix operations, while Vulkan gains Android and Termux platform support.

Performance optimizations target query chunking, dequantization speed, and shared memory handling, with ongoing shader compiler improvements for AMD platforms and SYCL ROLL operations.

A critical stability issue involving CUDA illegal memory access is identified in a specific Gemma 4 configuration, requiring immediate investigation and resolution.

Additional performance regressions are noted across V100 prefill operations and speculative decoding scenarios, alongside an open HIP MI300X softmax computation bug and Vulkan memory buffer complications.

Medium-severity problems include SYCL floating-point computation anomalies, potential HIP segmentation faults, and specific hardware matrix multiplication inconsistencies across different GPU architectures.

Critical actions involve validating quantization selection, closely monitoring CUDA V100 performance, assessing Metal BF16 inference capabilities, and comprehensively reviewing speculative decoding configurations for hybrid GDN models.

Data originates from the official llama.cpp GitHub repository as of late November 2026, utilizing standardized issue tracking notation for comprehensive reference and documentation.

Technical translation focuses on precision and contextual accuracy, particularly in quantum computing and hardware interface domains. Key terminology like "quantization pipeline overhaul" requires nuanced Chinese rendering to maintain technical integrity.

The translation strategy prioritizes clarity while preserving the original technical complexity, ensuring that specialized terms are rendered with equivalent precision in the target language.
</think>


# llama.cpp 技术速报 — 2026-11-24

## 1. 今日要点

llama.cpp 完成了一次重大的量化流程重构，新增了自动选择最优量化类型的特性（PR #15550，提交 b12669），允许用户设定目标文件大小或每权重位数，系统会自动找到最优的量化组合。在 Metal 后端，MUL_MAT 操作的 BF16 src1 支持（b12668）填补了长期存在的功能空白。Vulkan 后端则获得了第三轮 AMD 着色器编译器优化（PR #32919）。当前需要关注的稳定性问题包括 V100 混合 GDN 模型的预填充性能回退，以及投机解码场景下的 CUDA 非法内存访问问题。

---

## 2. 提交与变更

| 提交 | 描述 | 影响 |
|------|------|------|
| **b12669** | **量化：自动选择最优量化类型以达成文件/bpw 目标** — 重构了帕累托优化逻辑并进行了凸化处理，当未发现改进时提前退出搜索 | ⚠️ 行为变更：量化工具链现以算法方式自动选择量化类型，而非使用默认值 |
| **b12667** | Server：`exec_shell_command` 的 schema 现要求 `description` 参数排在首位 | 低：用于展示工具帮助信息的客户端应更新以显示新字段 |
| **b12670** | Flash Attention：为 CUDA/ROCm/Vulkan 重构了 bias 压缩处理（Vulkan 路径已从本 PR 中移除） | 后端特定，无 API 变更 |

本时段未发布二进制版本标签（如 `v1.x.x`）。

---

## 3. 新模型与硬件支持

| PR / 提交 | 模型 / 硬件 | 后端 | 备注 |
|-----------|-------------|------|------|
| **#32588** | **SenseNova Loop** — 来自 SenseNova 团队的官方贡献 | 全后端（多后端） | 完整模型支持已合并 |
| **#32883** | **Inkling 2**：子 ubatch 注意力的查询分块 | CUDA | 降低 MoE 缓存压力；见下方基准测试 |
| **#32884** | **Qwen4-Exp**：查询分块 | CUDA | 与 Inkling 2 共用实现 |
| **b12668** | Metal：MUL_MAT 和 MUL_MAT_ID 支持 BF16/F32 src1 | Apple Metal | 关闭 issue #30973；tensor API 现支持 `GGML_PREC_BF16` |
| **#29740** | Hexagon：Q4_0 matmul 和 FA 预填充的整数 HMX，支持无 FP16 HMX 的 v73 SoC（如骁龙 7 Gen 4） | Hexagon DSP | 使仅支持 HMX 的硬件（如此前会产生乱码的设备）上运行模型成为可能 |
| **#32261** | Termux / 原生 Android 驱动的 Vulkan 支持 | Vulkan | 结构上与 Hexagon 后端类似；已新增文档 |

---

## 4. 性能与优化

### 已合并的 PR

| PR | 领域 | 优化内容 | 报告的影响 |
|----|------|----------|-------------|
| **#32875** | CUDA | NVFP4 反量化提速 | 解决了 V100 上 Inkling 2 Mini 的提示词处理性能问题 |
| **#32919** | Vulkan | AMD 着色器编译器 int8 MMQ 性能差距缩小 — 第三部分：仅加载的 A 预取 | 延续 #32395 系列 |
| **#32177** | CUDA | 当 ids 超过共享内存大小时，将 mul_mat_id ids 紧凑分块 | 修复了 ubatch 超过 25344 tokens 时触发的 `GGML_ASSERT(nbytes_shared <= smpbo)` 断言失败 |
| **#32921** | CUDA | 将 MMQ stream-K 列块作为最外层遍历 | 降低寄存器压力；PR 开放中 |
| **#31799** | SYCL | ROLL 算子处理带置换的源张量 | test-backend-ops 现可通过两种 ROLL 场景 |
| **#31736** | CPU (ARM SVE) | `ggml_gemv_q5_K_8x8_q8_K` 的 256 位 SVE + i8mm 实现 | Q5_K 重打包在 SVE 硬件上的向量化路径 |

### 查询分块基准测试（Inkling 2，PR #32883）

| UBatch | MoE 缓存 (MiB) | CUDA 计算 (MiB) | 预热 PP (t/s) | 预热 TG (t/s) | 解码命中率 |
|--------|----------------|-----------------|---------------|---------------|------------|
| 4096   | 17700           | 5046               | 1258.7        | 35.53         | 83.47%     |

*注：查询分块以降低解码命中率为代价换取大上下文 MoE 模型显著的内存占用减少。*

---

## 5. 稳定性与回退

按严重程度和上游可见性排序：

### 🔴 严重 / 高优先级

| # | 问题 | 平台 | 状态 | 修复 PR |
|---|------|------|------|----------|
| **#32900** | **CUDA 在 SET_ROWS 中非法内存访问** — SWA 上下文检查点失效后，Gemma 4 E4B + q8_0 KV + draft-mtp | CUDA (Linux) | **开放** | — |
| **#32245** | **[回退] v1.0 相比 v0.8 在 V100 (sm_70) 上预填充性能显著下降** | CUDA (V100) | 开放，趋于停滞 | — |
| **#32810** | 混合（GDN）模型在 V100 (sm_70) 上的预填充回退 — Volta FATTN 配置将 nbatch_V2 减半 | CUDA (V100) | 开放 | — |
| **#32776** | 投机解码在 Qwen3.5 混合（GDN）上比非混合对照组慢约 2.2–2.4 倍 | CUDA | 开放 | — |
| **#32852** | HIP MI300X：SOFT_MAX 在宽行上丢失部分和；高位词表 ID 从未被采样到 | HIP (MI300X) | 开放 | — |

### 🟡 中等

| # | 问题 | 平台 | 状态 | 修复 PR |
|---|------|------|------|----------|
| **#30892** | SYCL F16 在 dense Qwen3.8-27B Q4_K_M 上输出 NaN；关闭融合 GEMM 后恢复正常 | SYCL (Arc Pro B70) | 开放 | — |
| **#32630** | 升级 hip-runtime-amd 至 10.1-2.1 后段错误 | HIP (RX 9070 XT) | 开放 | — |
| **#31111** | MUL_MAT 结果错误，gfx1200 HIP/ROCm，f16 确定性 | HIP (gfx1200) | 开放 | — |
| **#32858** | Vulkan：q6_K token_embd 在 AMD GCN/Polaris 上静默回退到 CPU buffer | Vulkan (AMD) | 开放 | — |
| **#32048** | Server slot 擦除未清理 `--cache-ram` 提示词缓存 | llama-server | 开放 | — |

### 🟢 已关闭（值得注意）

| # | 问题 | 结论 |
|---|------|------|
| **#25904** | OpenVINO NPU：在 Intel Core Ultra 7 255H 上 SIGSEGV/WeightlessCacheAttribute | **已关闭**（2026-11-24） |
| **#32818** | Inkling tool-call 语法在 thinking 关闭时崩溃 | **已关闭** |
| **#32844** | test-quant-type-selection 因张量重组失败 | **已关闭** |

---

## 6. 对应用开发者的意义

### 量化流程

新的自动量化选择（b12669）是本次对 API 影响最大的变更。针对特定模型大小进行部署的团队（如 4 GB 部署预算）现在可以指定每权重位数目标，系统会自动获得数值上最优的量化组合，而无需手动挑选。请评估现有量化脚本是否需要迁移到新的帕累托优化器。

### Metal BF16

随着 b12668 的合并，Apple Silicon 开发者现在可以直接将 BF16 激活值传入 Metal 上的 MUL_MAT，无需通过 FP32 反量化。如果你在 macOS 上运行 Gemma 4 或其他 BF16 激活模型，请谨慎测试推理质量——该变更使此前不可用的 `GGML_PREC_BF16` 行为现在可以在 tensor API 上启用。

### Android 上的 Vulkan

Termux/Android Vulkan 支持（PR #32261）开辟了在没有专有驱动的设备上进行移动端部署的可能性。如果你的移动端用户使用 Vulkan 推理管线，请交叉测试。

### 投机解码不稳定

两个并发问题（#32776、#32810）影响了 NVIDIA V100 和混合 GDN 模型上的投机解码。如果你在线上环境中依赖 draft-model 解码，建议暂时回退到 b12602 或更早版本，等待问题解决。

### OpenVINO NPU

NPU SIGSEGV 问题（#25904）已于今日关闭——如果你使用的是 Intel Core Ultra 硬件，升级到最新构建版本现在更加安全。

### 行动项
1. **测试** 新的量化自动选择功能，如果你负责模型转换管线的话。
2. **监控** V100 CUDA 用户的预填充性能回退；对于受影响的工作负载，考虑锁定到 v1.0 之前的版本。
3. **验证** Apple Silicon 上 Gemma 4 的 Metal BF16 推理质量。
4. **审查** 混合 GDN 模型的投机解码配置——当前构建版本可能存在回退。

---

*数据来源：2026-11-24 的 github.com/ggml-org/llama.cpp。所有 issue/PR 链接按上游仓库的规范使用 `#` 标记。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate an English technical report/digest about the Ollama GitHub project into Simplified Chinese. Let me go through the content carefully and translate it while following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, version tags, issue numbers, etc. verbatim
4. Use natural technical Chinese - not word-for-word

Let me translate section by section:

Title: "Ollama Digest — 2026-11-24" → "Ollama 动态 — 2026-11-24"

"Today's Highlights" → "今日要闻"

"The Ollama project shipped v0.40.18-rc0 with optimized Metal kernels for Inkling 2 models and MLX tensor sharing improvements. Meanwhile, the community is actively addressing a major performance regression in v0.40.17 on Apple Silicon M4 Pro, and several critical bugs around VRAM overconsumption on specific model configurations and CUDA VMM exhaustion on Jetson AGX Orin remain open."

Ollama 项目发布了 v0.40.18-rc0，带有针对 Inkling 2 模型的优化 Metal 内核和 MLX 张量共享改进。与此同时，社区正在积极处理 v0.40.17 在 Apple Silicon M4 Pro 上的重大性能回退问题，以及几个围绕特定模型配置下 VRAM 过度消耗和 Jetson AGX Orin 上 CUDA VMM 耗尽的严重 bug 仍未解决。

"Releases & Breaking Changes" → "版本发布与重大变更"

"New Model & Hardware Support" → "新模型与硬件支持"

"Performance & Optimization" → "性能与优化"

"Stability & Regressions" → "稳定性与回归问题"

"What This Means for Application Developers" → "对应用开发者的影响"

Let me continue with the full translation...
</think>


# Ollama 动态 — 2026-11-24

## 今日要闻

Ollama 项目发布了 v0.40.18-rc0，带有针对 Inkling 2 模型的优化 Metal 内核和 MLX 张量共享改进。与此同时，社区正在积极处理 v0.40.17 在 Apple Silicon M4 Pro 上的重大性能回退问题，以及若干围绕特定模型配置下 VRAM 过度消耗和 Jetson AGX Orin 上 CUDA VMM 耗尽的严重 bug 仍未解决。

---

## 版本发布与重大变更

| 项目 | 描述 | 链接 |
|------|-------------|-------|
| **v0.40.18-rc0** | v0.40.18 的 RC 标签 — 包含 MLX Metal 优化并将 llama.cpp 版本升级至 b12651 | [PR #19808](https://github.com/ollama/ollama/pull/19808) · [PR #19805](https://github.com/ollama/ollama/pull/19805) · [PR #19865](https://github.com/ollama/ollama/pull/19865) |
| **llama.cpp 版本升级** | pinned revision 从 `b12257` → `b12651`（Inkling 2 GGUF 相关为 b12653） | [PR #19865](https://github.com/ollama/ollama/pull/19865) · [PR #19861](https://github.com/ollama/ollama/pull/19861) |
| **JetPack 5 停止支持** | 移除 `GGML_CUDA_NO_VMM=ON`；JetPack 5 支持终止 | [PR #19865](https://github.com/ollama/ollama/pull/19865) |

---

## 新模型与硬件支持

- **Inkling 2 Mini GGUF** — 上游 llama.cpp 支持已合并（`inkling2` 和 `inkling2_loop` 架构，以及 `inkling2v` projector），并为 Apple Silicon 提供了自定义 Metal decode/prefill/draft 内核。 | [PR #19843](https://github.com/ollama/ollama/pull/19843) · [PR #19826](https://github.com/ollama/ollama/pull/19826)
- **Qwen3-VL 图像嵌入修复** — 修正了 deepstack 视觉特征中 `llama_model_n_embd_inp` 的使用方式，修复了视觉请求的嵌入宽度问题。 | [PR #16274](https://github.com/ollama/ollama/pull/16274)（参考：[Issue #16264](https://github.com/ollama/ollama/issues/16264)）

---

## 性能与优化

| 类别 | 详情 | 状态 |
|----------|---------|--------|
| **MLX Metal 内核** | 融合 Inkling 残差混合、NVFP4/MXFP8 expert gather 与 SwiGLU、融合循环控制器、相对位置分离注意力、短卷积 | 已在 v0.40.18-rc0 中合并（[PR #19808](https://github.com/ollama/ollama/pull/19808)） |
| **MLX 张量辅助函数** | 跨 MLX 架构共享的张量工具和模型设置 | 已合并（[PR #19805](https://github.com/ollama/ollama/pull/19805)） |
| **KV-cache 量化** | `OLLAMA_KV_CACHE_TYPE` 当前被 MLX runner 忽略 — KV cache 始终以 16 位保存，导致在 24 GB Mac 上运行 16K 上下文的 `qwen3.8:27b-mlx` 时 OOM | **待解决**（[#19857](https://github.com/ollama/ollama/issues/19857)） |
| **MLX 前缀缓存** | 硬编码 8 GiB 预算在 32 GB Apple Silicon 上运行 agent 工作负载时导致大量交换 — 属于设计预期，非泄漏 | 已分类（[#18131](https://github.com/ollama/ollama/issues/18131)） |
| **预填充缓存持久化** | 实验性 `OLLAMA_PREFILL_CACHE=1`，可在 runner 重载后保留预填充状态，无需重新计算 prompt | 进行中（[PR #17953](https://github.com/ollama/ollama/pull/17953)） |
| **v0.40.17 性能回退** | M4 Pro MLX Qwen 3.8 27b 上出现严重吞吐量回退；正在调查中 | **待解决**（[#19866](https://github.com/ollama/ollama/issues/19866)） |
| **空闲内存监视器** | 在 6-GPU 主机上 3 秒截止期限经常超时 → 陈旧 VRAM 和虚假驱逐 | **待解决**（[#19279](https://github.com/ollama/ollama/issues/19279)） |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 临时解决方案 / 修复路径 |
|----------|-------|----------------------|
| 🔴 **严重** | **VRAM 峰值**：`qwen3.8:27b-mtp_q8` 从 v0.40.2 起消耗 127 GiB 而非 51 GiB（版本差异导致的回归） | 回滚到之前版本；尚无修复 PR（[#19833](https://github.com/ollama/ollama/issues/19833)） |
| 🔴 **严重** | **Jetson AGX Orin CUDA OOM**：每次图像请求都因 `cuMemAddressReserve` VMM 池耗尽而崩溃 — 请求添加 `GGML_CUDA_NO_VMM=ON` 构建标志 | **待解决** — 等待维护者响应（[#19815](https://github.com/ollama/ollama/issues/19815)） |
| 🔴 **严重** | **拉取恢复功能损坏**：在拉取超过 1 小时后重启 `ollama serve` 会导致"找不到文件"错误或重试时摘要不匹配 | **待解决**（[#19337](https://github.com/ollama/ollama/issues/19337)） |
| 🟡 **高** | **v0.40.17 MLX 回归**：M4 Pro 性能大幅下降；`OLLAMA_KEEP_ALIVE` 报告为 8 小时 | 正在调查（[#19866](https://github.com/ollama/ollama/issues/19866)） |
| 🟡 **高** | **v0.40.15 → 0.40.17 后 OOM**：之前可加载的模型现在 OOM（影响范围不明） | **待解决**（[#19851](https://github.com/ollama/ollama/issues/19851)） |
| 🟡 **高** | **工具输出静默丢弃**：当 `/api/chat` 中无 `tools` 字段时，内置解析器仍会解析 call 形输出，然后在非流式模式下将其丢弃 → `content: ""` | 修复 PR 审核中（[PR #19855](https://github.com/ollama/ollama/pull/19855) 参考：[#19854](https://github.com/ollama/ollama/issues/19854)） |
| 🟡 **高** | **工具 `strict` 字段丢失**：函数级键（`strict` 等）在解码/编码往返时被静默丢弃 | 修复 PR 审核中（[PR #19853](https://github.com/ollama/ollama/pull/19853) 参考：[#19852](https://github.com/ollama/ollama/issues/19852)） |
| 🟡 **高** | **Ollama Cloud token 缓存**：报告 0 个缓存 token，尽管缓存实际处于活跃状态 | **待解决**（[#15758](https://github.com/ollama/ollama/issues/15758)） |
| 🟢 **中** | **模板中的旧版 Response 导致 panic**：模板内 `if…else` 中的 `.Response` 导致 HTTP 500 空指针 panic | 修复 PR 已合并（[PR #19860](https://github.com/ollama/ollama/pull/19860) 参考：[#19859](https://github.com/ollama/ollama/issues/19859)） |
| 🟢 **中** | **无界 blob 创建**：`Content-Length` 未做校验，可能导致无界内存分配 | 在 v0.40.16+ 中已修复（[#19856](https://github.com/ollama/ollama/issues/19856)） |
| 🟢 **中** | **AMD RX 5500 SIGBUS**：Vulkan 后端在 Navi 14（gfx1010）上崩溃 — 已关闭，状态不明 | 如仍受影响请进一步调查（[#19589](https://github.com/ollama/ollama/issues/19589)） |

---

## 对应用开发者的影响

1. **Apple Silicon 用户**：注意 v0.40.17 的性能回退问题（[#19866](https://github.com/ollama/ollama/issues/19866)）——建议暂时停留在 v0.40.16 或更早版本直至问题修复。KV-cache 量化限制（[#19857](https://github.com/ollama/ollama/issues/19857)）意味着在 24 GB 机器上运行大上下文 MLX 工作负载时目前仍不稳定。

2. **Jetson Orin 部署者**：图像输入会导致 runner 因 VMM 耗尽而崩溃 —— 在修复或构建标志合并之前，请避免在 JetPack 6 上使用视觉模型（[#19815](https://github.com/ollama/ollama/issues/19815)）。

3. **使用工具调用的 Agent 构建者**：两个相关 bug 影响工具输出处理。当请求**未声明任何工具**时，模型输出可能被静默丢弃（[#19854](https://github.com/ollama/ollama/issues/19854)）。此外，OpenAI 风格的函数模式 `strict` 强制执行会被丢弃（[#19852](https://github.com/ollama/ollama/issues/19852)）。相关修复 PR 正在审核中；请确认您的 agent 框架是否依赖这些行为。

4. **多-GPU Linux 运维者**：空闲内存监视器的截止期限对 6-GPU 主机过于激进，导致虚假的 VRAM 陈旧和模型驱逐（[#19279](https://github.com/ollama/ollama/issues/19279)）。请监控 `llama-server GPU discovery watchdog timed out` 警告信息。

5. **长时间拉取/恢复工作流**：如果您正在构建长时间运行的模型拉取管道，请避免在拉取中途（尤其是超过 1 小时后）重启 Ollama 服务 —— 恢复功能目前存在问题（[#19337](https://github.com/ollama/ollama/issues/19337)）。

6. **Windows 服务部署**：当前安装程序将 Ollama 注册为用户登录项，用户登出后服务即停止。存在一个功能请求，希望将 Ollama 改为正式的 Windows 系统服务（[#19862](https://github.com/ollama/ollama/issues/19862)）—— 尚无时间表。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate an English technical report about LiteLLM into Simplified Chinese. Let me analyze the content and translate it while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, version tags, issue references, code, numbers as-is
4. Use natural technical Chinese register

Let me translate section by section:

**Title:** LiteLLM Digest — 2026-11-24
→ LiteLLM 摘要 — 2026-11-24

**Section 1: Today's Highlights**
- "LiteLLM shipped three patch releases" → "LiteLLM 发布了三个补丁版本"
- "adopting keyless cosign verification" → "均采用 keyless cosign 验证"
- "operators on older signed images should pull the latest tag" → "使用旧签名镜像的运维人员应拉取最新 tag"
- "A major new feature proposal" → "一项重大新功能提案"
- "would allow a single budget entry to span a model family or cross-vendor cost tier" → "允许单个预算条目跨越模型族或跨供应商计费层级"
- "applied per-principal" → "按主体分配"
- "the most-discussed issue of the day" → "当天讨论热度最高的问题"
- "A Kafka-based request-log replication feature" → "基于 Kafka 的请求日志复制功能"
- "entered review" → "进入 review 阶段"
- "alongside a fix that routes Ollama model-info lookups to the caller's own api_base" → "同时一个修复让 Ollama 的 model-info 查询路由到调用者自身的 api_base"
 
I'll continue translating the release details, focusing on the migration note about the keyless verification change. The note highlights a critical transition from a raw key verification method to an OIDC-based approach, recommending immediate action for operators using the old verification method. This represents a significant security update in the LiteLLM release process.

The content suggests a potential breaking change for ChatGPT deployment configurations, indicating that systems using non-existent credentials will now receive an HTTP 401 error instead of falling back to host login. This implies a more strict authentication mechanism that requires careful administrative review of configuration parameters before system upgrades.

The new Databricks deployment specification introduces per-deployment OAuth M2M authentication, mandating a `client_id` / `client_secret` credential pair for each `litellm_params` entry. This change enhances security by requiring explicit authentication for each deployment.

The support section lists various providers and their current implementation statuses, with details indicating ongoing fixes and improvements for different model and hardware configurations.

A bug report highlights a specific issue with a Vertex AI model where strict JSON schema response formatting fails, potentially falling back to an unforced JSON tool instead of using native structured outputs. The investigation reveals discrepancies in model-map entries for different model variants.

Another potential bug is identified with Bedrock's `tool_choice="any"` functionality, where the current implementation incorrectly rejects this valid API option, suggesting a need for proper mapping and validation.

The performance section reveals significant progress in tool schema optimization, particularly for Claude on Bedrock. A critical issue was discovered with large schema representations causing extreme token inflation, which has now been addressed by intelligently preserving and binding `$defs` for Claude while using inline binding for other models.

The current focus is on OpenTelemetry (OTel) v2 metric export, highlighting a hardcoded 5-second export interval that potentially overrides custom configuration, creating unnecessary overhead. Despite the issue being recognized, no corrective pull request has been submitted yet.

Ongoing improvements include enforcing token-per-minute (TPM) limits in realtime sessions, ensuring fair resource allocation and preventing potential abuse. A critical startup crash related to PostgreSQL encoding has been resolved, improving system stability.

A significant security vulnerability was addressed in guardrail mechanisms, where masked content could be reconstructed through token metadata. The fix strategically clears token identifiers and log probabilities, preventing potential information leakage.

The stability section highlights multiple high and medium severity issues, with several fixes already merged. Notable challenges include potential crashes with Pydantic and async cache control, as well as proxy stability problems with specific configuration scenarios.

Key concerns involve API limits, budget reporting accuracy, and potential data inconsistencies. Some issues remain open, particularly around streaming usage tracking and whitespace handling, requiring careful monitoring and potential future resolution.

Critical recommendations focus on immediate security and deployment improvements. Operators must update their image verification processes, carefully audit existing configurations, and ensure precise budget management across different service models. Specific attention is needed for realtime session configurations and structured output handling to prevent potential system disruptions.

Emerging priorities include addressing model information routing challenges, implementing security patches for guardrail mechanisms, and maintaining robust system integrity across deployment environments.
</think>


# LiteLLM 摘要 — 2026-11-24

## 1. 今日要闻

LiteLLM 一口气发布了三个补丁版本（v1.108.16、v1.109.4、v1.110.3），全部切换到了 keyless cosign 验证；仍在使用旧签名镜像的运维人员请立即拉取最新 tag。一项重大新功能提案（#53946）提议支持按主体为模型族或跨供应商计费层级设置统一预算——该提案以 23 条评论成为当天讨论热度最高的问题。PR 侧，基于 Kafka 的请求日志复制功能（#54061）进入 review 阶段，同时一个修复让 Ollama 的 model-info 查询路由到调用者自身的 api_base 而非默认端点（#53830）。

---

## 2. 版本发布与 Breaking Changes

| 版本 | 镜像 Tag | 说明 |
|---------|-----|-------|
| **v1.110.3** | `ghcr.io/berriai/litellm:v1.110.3` | Keyless cosign 验证，请拉取最新版本 |
| **v1.109.4** | `ghcr.io/berriai/litellm:v1.109.4` | Keyless cosign 验证 |
| **v1.108.16** | `ghcr.io/berriai/litellm:v1.108.16` | Keyless cosign 验证（LTS 分支） |

**迁移提示：** 从 v1.108.10 起，发布镜像改用 keyless OIDC 验证，不再使用 `cosign.pub` 公钥方式。使用旧验证方式的运维人员请立即更新 `cosign verify` 命令（参见版本说明中的示例代码）。追踪此切换的 issue #52837 已关闭确认。

**即将 Breaking（PR #53744）：** `chatgpt/` 部署中若引用了不存在的凭证，现将返回 HTTP 401 而非回退到 host 登录。管理员应在升级前审查所有 `litellm_params` 中的 ChatGPT 订阅配置。

**即将 Breaking（PR #50675）：** Databricks 部署现在要求每个 `litellm_params` 条目配置 `client_id` / `client_secret` 对，以实现按部署独立进行 OAuth M2M 认证。

---

## 3. 新模型与硬件支持

| 供应商 / 模型 | 状态 | 详情 |
|-----------------|---------|---------|
| **NVIDIA NIM** — `logprobs` / `top_logprobs` | 修复已合并（#54008，#54043 回退至 LTS） | LiteLLM 向支持 log probability 的 NIM 模型请求 logprobs 时曾返回 HTTP 400。修复后正确向上游转发参数，现已在 `main` 和 `lts/1.108.x` 两个分支上线。 |
| **Ollama** — model-info 查询 | 修复已合并（#53830） | 查询现在路由到调用者的 `api_base` 并携带其 API key，解决了默认 Ollama 地址不可达时触发超时的问题。 |
| **Claude Haiku 5.5 via Vertex** | Bug 已上报（#53478） | `vertex_ai/claude-haiku-5-5` 配合 `response_format: {type: "json_schema", strict: true}` 使用时，会静默回退到非强制 JSON tool 而非使用原生结构化输出。模型映射条目缺少 `supports_native_structured_output` 标记；直接使用 `claude-haiku-5-5`（非 Vertex）则无此问题。 |
| **Gemini 图像模型** — `n > 1` | Bug 已上报（#53119，已关闭） | `n > 1` 作为 Vertex `candidateCount` 转发给图像模型会导致 `400 INVALID_ARGUMENT`。现已修复。 |
| **Bedrock — `tool_choice="any"`** | Bug 已上报（#37980） | LiteLLM 直接拒绝 `"any"`，但 Bedrock Converse API 原生支持该参数（映射为 `{any: {}}`）。应与 `"required"` 采用相同的映射逻辑。 |
| **Databricks** — 按部署独立 OAuth M2M | 功能 PR（#50675） | `litellm_params` 新增 `client_id` / `client_secret` 支持，实现按 workspace 独立的服务主体认证。 |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|---------|
| **Bedrock 工具 schema `$defs` 去重** | PR #51137 | 工具 schema 中包含共享 `$defs` 时，所有 `$ref` 引用都被内联展开，极端情况下可将 ~2.7 KB 的请求体膨胀至约 5 M tokens。Claude on Bedrock 原生支持 `$defs`，因此现在为 Claude 保留 `$defs` 并按需内联绑定，其他模型继续使用内联。 |
| **OTel v2 指标导出** | Issue #38052 | `PeriodicExportingMetricReader` 硬编码了 5 秒导出间隔，忽略 `OTEL_METRIC_EXPORT_INTERVAL` 环境变量。在累计直方图场景下，无论实际流量大小，每分钟都会重传全部序列 12 次。尚无修复 PR。 |
| **Realtime 会话 TPM 限制执行** | PR #53689 | Realtime 会话现在在每轮调用时计入 key、team、tag、agent 和 deployment 的 TPM 限制。超出每分钟配额后会拒绝请求，并在重置窗口后恢复。 |
| **PostgreSQL `SQL_ASCII` 编码** | Bug #52247（已关闭） | 数据库编码为 `SQL_ASCII` 时，proxy 在启动阶段创建请求日志索引的 `find_blockers` 中抛出 `ValueError` 导致崩溃。现已修复。 |
| **Guardrail token 信息泄漏** | PR #53758 | 当 guardrail 在非流式响应中屏蔽某个词时，原始 token ID 和 logprobs 被保留，可能被用于重建被屏蔽的文本。现两字段在发生屏蔽/重写时均已清空。 |

---

## 5. 稳定性与回归问题

| 严重性 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|---------|
| 🔴 **高** | **Pydantic `Message` + 异步 cache_control 崩溃** | 主分支 `rc/1.112.0` 上开放 | [#54085](https://github.com/BerriAI/litellm/pull/54085)（#54055 的 backport） |
| 🔴 **高** | **当 `litellm_settings: {}` 且 worker 数 ≥2 时 proxy 崩溃** | 开放 | [#54081](https://github.com/BerriAI/litellm/pull/54081) |
| 🔴 **高** | **watsonx 流式响应中 `usage` 被静默丢弃** — 预算统计偏低 | 开放 [#46059](https://github.com/BerriAI/litellm/issues/46059) | — |
| 🟡 **中** | **Anthropic 拒绝纯空白 system message** | 开放 [#28706](https://github.com/BerriAI/litellm/issues/28706) | — |
| 🟡 **中** | **Gemini/Vertex 工具映射中对布尔子 schema 抛出 `TypeError: argument of type 'bool' is not iterable`** | 开放 [#53684](https://github.com/BerriAI/litellm/issues/53684) | — |
| 🟡 **中** | **Componentized 网关忽略 YAML 中的 pool timeout 配置** | 开放 [#33021](https://github.com/BerriAI/litellm/issues/33021) | — |
| 🟡 **中** | **多窗口预算重置后缓存 spend 未清理**（数据库提交后残留） | 开放 [#36941](https://github.com/BerriAI/litellm/issues/36941) | — |
| 🟡 **中** | **本地非 Prisma flush 失败后 spend-log 批次丢失** | 开放 [#33873](https://github.com/BerriAI/litellm/issues/33873) | — |
| 🟡 **中** | **Responses-to-Chat 流式响应将结构化推理项延迟至完成时才输出** | 开放 [#40887](https://github.com/BerriAI/litellm/issues/40887) | — |
| 🟢 **低** | **`/metrics` 端点错误地发出重定向** | 已关闭 [#33676](https://github.com/BerriAI/litellm/issues/33676) | — |
| 🟢 **低** | **`/v1/audio/transcriptions` 对 `response_format=text` 返回 `Content-Type: application/json`** | 已关闭 [#31457](https://github.com/BerriAI/litellm/issues/31457) | — |

---

## 6. 对应用开发者的影响

1. **检查并更新 cosign 验证流程。** 如果你的镜像签名校验脚本仍在使用 `cosign.pub` 公钥方式，请立即切换到版本说明中的 OIDC 命令——v1.108.16+、v1.109.4+ 及后续版本的镜像将不再通过旧方式验证，且不会报错。

2. **审查所有 chatgpt/ 部署的凭证配置。** #53744 这项 breaking change 意味着引用了不存在凭证的 `chatgpt/` 部署将直接 401 而非回退。升级前务必逐条核对 `litellm_params`，防止上线后收到大量认证失败告警。

3. **预算管控正在收紧。** Realtime 会话现已按轮次执行 TPM 限制（#53689），spend-log 写入也在加固防丢机制（#33873、#36941）。如果你运行长时间 agentic 语音会话，请重新确认 key/team 的预算阈值是否合理——在密集语音使用场景下可能会观察到更多的 429。

4. **多租户或使用自定义端点的 Ollama 用户请尽快升级。** Model-info 查询现已尊重 per-call 的 `api_base`，不再因为默认 Ollama 地址不可达而触发约 10 秒超时。

5. **在 Vertex AI 上使用 Haiku 5.5 结构化输出的用户请留意。** 静默回退到非强制 JSON tool（#53478）意味着结构化输出的保证可能不成立。在该模型变体的修复或 workaround 就绪前，不建议用于生产环境。

6. **Guardrail 用户请立即打补丁。** 若你使用的是近期的 release 版本，#53758 披露的非流式响应中 token-ID/logprob 泄漏问题意味着被屏蔽的内容在理论上可被重建。修复已在 PR #53758。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve all Markdown structure exactly
3. Keep all URLs, code spans, numbers, dates verbatim
4. Keep all project names, slugs, usernames, version tags, file paths, API/config identifiers as-is
5. Use natural technical Chinese register

Let me translate section by section:

## 1. Today's Highlights

English: Unsloth Studio shipped **v0.1.923-beta**, delivering **Inkling 2 Mini with 1.9x faster inference** across all GPUs alongside faster GRPO/AsyncGRPO training. A major multi-quantization loading fix landed (#19169), and Krea 2 received INT8 attention kernel improvements yielding 5–8% throughput gains. Several security hardening PRs closed, including Windows network-path protection and export worker isolation fixes.

Chinese: Unsloth Studio 发布 **v0.1.923-beta**，在所有 GPU 上实现 **Inkling 2 Mini 1.9 倍推理加速**，同时改进了 GRPO/AsyncGRPO 训练速度。重大修复 #19169 解决了多量化加载问题，Krea 2 的 INT8 注意力内核优化带来 5–8% 的吞吐提升。多个安全加固 PR 合并，包括 Windows 网络路径保护和导出工作进程隔离修复。

## 2. Releases & Breaking Changes

Table - need to translate headers and content while keeping version numbers, IDs as-is

## 3. New Model & Hardware Support

Table - translate descriptions, keep model names, IDs as-is

## 4. Performance & Optimization

Table - translate, keep PR numbers, gains

## 5. Stability & Regressions

Section with Critical, Medium, Low tables

## 6. What This Means for Application Developers

Table with takeaways


Now I'll translate the full document while maintaining all formatting and technical accuracy.
</think>


# Unsloth 技术简报 — 2026-11-24

## 1. 今日要闻

Unsloth Studio 发布 **v0.1.923-beta**，在所有 GPU 上实现 **Inkling 2 Mini 1.9 倍推理加速**，同时优化了 GRPO/AsyncGRPO 训练速度。重大修复 #19169 解决了多量化加载问题，Krea 2 的 INT8 注意力内核优化带来 5–8% 的吞吐提升。多个安全加固 PR 合并，包括 Windows 网络路径保护和导出工作进程隔离修复。

---

## 2. 版本更新与重大变更

| 版本 | 变更摘要 |
|---------|----------------|
| **v0.1.923-beta** | Inkling 2 Mini 解码速度提升 1.9 倍；RTX Spark 优化；GRPO 和 AsyncGRPO 训练加速；新增 Qwen-Image-Flash 和 FastWan 模型支持；设置页面新增知识库；支持音频、字幕和图像翻译 |

- **GGUF 多量化加载修复**：在同一仓库中切换到另一量化版本时，若显存允许，两个模型将同时保持加载状态（#19169，关闭 #19072）。
- **mlx-vlm 升级**至 0.8.1，Apple Silicon MLX 用户请注意更新（#19216）。
- **transformers 上限提升**至 <5.18（#17847，关闭）—— 解锁了视觉微调场景下 `trl.SFTConfig(assistant_only_loss=True)` 的使用。

---

## 3. 新模型与硬件支持

| 模型 / 后端 | 详情 |
|-----------------|--------|
| **Inkling 2 Mini** | 可在 8–12 GB 显存 GPU 上运行；现已提供 GGUF 变体 |
| **Qwen-Image-Flash** | 新增支持 |
| **FastWan** | 新增支持 |
| **Krea 2 Turbo** | 支持 INT8 注意力内核（Studio 默认：1024 px，8 步） |
| **LTX-2.5** | 在仅支持 fp16 的显卡（T4、V100）上优雅降级，而非内存溢出崩溃（#19187） |
| **AMD ROCm** | 从 Studio UI 启动 llama-server 时崩溃——问题已报告（#18948）；修复进行中 |

---

## 4. 性能与优化

| PR | 领域 | 收益 |
|----|------|------|
| #19208 | Krea 2 INT8 注意力 | L4 **+5.1%**，RTX PRO 6000 **+8.1%** |
| #19209 | 多 GPU CFG 副本内存统计 | 通过在接纳副卡前预先计算激活值来避免 OOM |
| #19213 | CUDA Graph 内存安全 | 修复 MiniMax-H3 视频文本行和 AdaLN 缓冲区的释放后使用问题 |
| #19200 | 安全加固 | 前端现在在解析前拒绝 Windows UNC 路径（避免触发意外的 SMB 认证） |

**训练优化**：v0.1.923-beta 中 GRPO 和 AsyncGRPO 训练吞吐显著提升。

---

## 5. 稳定性与回归问题

### 严重
| 问题 | 描述 | 状态 |
|-------|-------------|--------|
| #19137 | Inkling 2 Mini GPU 卸载功能**回归**：v0.1.923-beta 后从 40 tokens/s 降至 12 tokens/s | 待处理 |
| #19013 | Inkling-2-Mini-GGUF 在 Tesla V100S（sm_70）+ 旧版 CUDA 12 环境下输出 **NaN**（"!!!!"） | 待处理 |
| #18757 | 最新 Unsloth Studio Docker 中无法加载 Inkling-2-Mini-GGUF | 待处理 |

### 中等
| 问题 | 描述 | 状态 |
|-------|-------------|--------|
| #19072 | 无法同时加载两个同名父模型 | 由 #19169 修复 |
| #18948 | ROCm 环境下从 Studio UI 启动 llama-server 崩溃 | 待处理 |
| #18001 | Ryzen 8700G 和 Radeon 780M 统一内存加载计算错误 | 已关闭 |

### 轻微 / 功能请求
- #18666、#18723、#18674 — 翻译模式语言覆盖扩展（苗语、阿姆哈拉语）。
- #17998 — 请求新增独立的 RAG 数据库管理标签页。
- #19131 — 人声分离功能请求。

---

## 6. 对应用开发者的影响

| 要点 | 详情 |
|----------|--------|
| **建议升级** | v0.1.923-beta 提供迄今为止最快的 Inkling 2 Mini 推理性能；在目标 GPU 上部署并基准测试。 |
| **多模型并发** | GGUF 多量化加载修复（#19169）支持在同一会话中 A/B 测试不同量化级别——便于评估质量与延迟的权衡。 |
| **Apple Silicon** | MLX 升级至 0.8.1 修复了 `video_timing=` 在提示缓存中的处理问题；使用 VLMPromptCacheSession 的用户请更新。 |
| **V100 / 旧版 CUDA 用户** | 在 #19013 修复前，避免在 Tesla V100S 上使用 Inkling-2-Mini GGUF；CPU 回退正常工作。 |
| **Windows UNC 路径** | 前端现在在 DNS 解析前拦截 `\\server\share` 路径——企业环境更安全，但请验证任何假设解析必然发生的路径处理代码。 |
| **多 GPU 工作负载** | CFG 副本内存统计修复（#19209）减少了扩散任务中的静默 OOM；可用时尽快升级。 |
| **AMD ROCm** | 当前 ROCm + Studio 集成仍有瑕疵（#18948）；使用混合 GPU 设备的开发者请关注该问题。 |

---

*简报基于过去 24 小时内 30 个 issue 和 303 个 PR 汇总。相关链接：[Unsloth 仓库](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*