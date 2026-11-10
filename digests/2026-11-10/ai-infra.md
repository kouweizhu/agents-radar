# AI 基础设施日报 2026-11-10

> 生成时间: 2026-11-10 04:16 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section carefully.

Title: AI Inference Infrastructure — Cross-Project Comparison Report
Date: 2026-11-10
Scope: vLLM · SGLang · llama.cpp · Ollama · LiteLLM · Unsloth

Let me work through this carefully, preserving all formatting.
</think>


# AI 推理基础设施——跨项目对比报告
**日期：** 2026-11-10 | **范围：** vLLM · SGLang · llama.cpp · Ollama · LiteLLM · Unsloth

---

## 1. 生态全景

推理基础设施领域正处于硬件驱动的高速迭代期。Blackwell 架构（SM120 / RTX 5090 / RTX PRO 6000）在所有项目中同时成为了"优化最深入"和"问题最多"的平台——带来了吞吐量下降、CUDA Graph 捕获失败以及静默数据损坏等问题，波及多个推理引擎。量化生态正在经历从 Marlin 到 Humming 的代际迁移，而本地运行时（llama.cpp、Ollama）则在推进多模态能力和平台特定优化（Apple Silicon、Elbrus E2K、AMD eGPU）。LiteLLM 的网关层持续吸收上游 Provider 的 API 变化，今日最大变化是 S3 原生 Bedrock 文档处理和按模型 TPM/RPM 配额。Unsloth 锚定于训练/微调层，通过其 Studio 产品实现推理协同优化，尤其在 FLUX.3 扩散模型的 ROCm 部署和 GGUF 重载时序方面。

---

## 2. 活跃度对比

| 项目 | 活跃 Issue（估算） | PR 合并 / 审核数（24h） | Release（24h） | 关键指标 |
|---------|------------------------|----------------------------|----------------|------------|
| **vLLM** | ~40+（以 SM120、MoE、AMD ROCm 为主） | ~11 个今日审核 | 无 | CUDA Graph 损坏、MoE Oracle 统一 |
| **SGLang** | ~30+ | ~16 | 无 | 安全 UAF 披露；SM90 decode 回归 |
| **llama.cpp** | ~20+ | ~9 个提交（b12229–b12242） | 9 个提交，未发版 | API 兼容性 / 音频端点扩展 |
| **Ollama** | ~20+ | ~12 | **v0.40.16** | VRAM 核算修复；MLX 并发生成 |
| **LiteLLM** | ~20+ | ~14 | **v1.108.4 LTS** | 按模型配额字段；流式优化 |
| **Unsloth** | ~19 | ~15 | 无 | ROCm 扩散；GGUF 重载时序 |

**备注：**

- SGLang 的高 Issue 量（flaky-tests 追踪项上有 191 条评论）反映了一个基础设施即代码团队在快速迭代的同时背负着 CI 技术债。
- llama.cpp 的 9 个提交代表一个轻量级的补丁日，聚焦于 API 兼容性而非重大重构。
- Ollama 和 LiteLLM 是今日仅有的正式发版项目，反映了二者更为审慎的版本节奏。
- vLLM 单 Issue 参与度最高（SM120 decode 上 31 条评论、MI355X 上 30 条），表明其生产部署覆盖面最广。

---

## 3. 模型支持竞速

### 今日新增模型支持

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1 Flash** | ✅ 已上线优化 | ✅ 已支持 | — | — | — | — |
| **Qwen3.8 / Flash-Next (Qwen4-Exp)** | ✅ 优化中 | ✅ FA4 SM90 FP8 KV | — | ✅ v0.40.16 内存优化 | — | — |
| **Kimi K3 / Qwen3 text encoder** | ✅ 功能请求 | ✅ RoPE kernel 优化 | — | — | — | — |
| **Gemma-4 (head_dim 256/512)** | — | ✅ FA4 SM90 FP8 e4m3 KV | ✅ 音频流 | — | — | — |
| **SANA-Video 2.0** | — | ✅ Breakable CUDA graphs | — | — | — | ✅ BF16 anchor attention |
| **FLUX.3 / flux.3 klein** | — | — | — | — | — | ✅ cuDNN 探测、joint block int8 |
| **Ripple Preview (65B)** | — | — | — | ✅ 已加入模型库 | — | — |
| **Nemotron 3.5 ASR Streaming** | ✅ 功能请求 | — | — | — | — | — |
| **GLM-5.3 Flash** | — | 🚫 fa4 在 SM120 上崩溃 | — | — | — | — |
| **Cambricon MLU** | — | ✅ 路线图已开启 | — | — | — | — |
| **SpacemiT RISC-V** | — | — | ✅ MXFP4 + Q4_1 分发 | — | — | — |
| **Elbrus E2K** | — | — | ✅ 9× prefill / 2.4× decode | — | — | — |
| **AMD MI355X (gfx950)** | ✅ 优化中 | ✅ ROCm 改进 | — | — | — | ✅ ROCm layer split + TunableOp |

### 各方领先领域

- **Blackwell SM120**：vLLM 以活跃的 DeepGEMM 动态 BLOCK_M 修复领先；SGLang 因 fa4 崩溃和 CUDA 13 wheel 不兼容而落后。
- **多模态音频**：llama.cpp 以 Gemma 4 音频流式推理、TTS 端点和 mtmd 重采样器领先。SGLang 在 FLUX.3 扩散方向落后。Ollama 无多模态推理管线。
- **AMD ROCm**：vLLM 和 Unsloth 最为活跃；SGLang 有 ROCm 基础设施；llama.cpp 有 gfx950 修复但无活跃的 MoE ROCm 路线图。
- **本地 / 边缘推理**：llama.cpp 在平台广度上领先（Hexagon DSP、SpacemiT、Elbrus E2K）；Ollama 在开发者体验和 macOS/Apple Silicon 上领先。

---

## 4. 性能前沿

### 优化力量分布（按项目今日参与度排序）

| 领域 | 活跃项目 | 今日关键工作 |
|--------|----------------|-----------------|
| **Blackwell SM120 / CUDA Graph 捕获** | vLLM, SGLang | vLLM：动态 DeepGEMM BLOCK_M；SGLang：FlashInfer 后备扩展；两项目均有活跃崩溃 |
| **MoE 吞吐** | vLLM, SGLang, llama.cpp | vLLM：Oracle 类统一；SGLang：NPU AllGather；llama.cpp：SYCL MoE 确定性修复 |
| **KV 缓存 / 前缀缓存** | vLLM, SGLang | vLLM：EAGLE/MTP 末块丢弃（30–40% 吞吐损失）；SGLang：HiCache + Mooncake L3 崩溃 |
| **量化（新代际）** | vLLM, Unsloth | vLLM：Humming 替代 Marlin（RFC）；Unsloth：NVFP4 checkpoint 路由修复；llama.cpp：SpacemiT 上 MXFP4 + IME2 |
| **投机解码** | vLLM, SGLang, Unsloth | vLLM：Spec-decode 接受率回归（#48137）；SGLang：DSpark 延迟草稿 KV 修复；Unsloth：投机吞吐 GGUF 重载时序 |
| **FlashAttention 变体** | vLLM, SGLang, llama.cpp | vLLM：Triton eager attention 冗余 view 重推导；SGLang：FA4 SM90 FP8 e4m3 KV；llama.cpp：CUDA row-faithful 可选优化 |
| **Apple Silicon（MLX/Metal）** | Ollama, Unsloth | Ollama：MLX 并发生成；Unsloth：GGUF 重载 VRAM 等待时序 |
| **AMD ROCm GPU 内核** | vLLM, SGLang, Unsloth, llama.cpp | vLLM：MI355X 性能计划；SGLang：gfx950 MLA decode 正确性（已修复）；Unsloth：ROCm TunableOp 状态恢复 |
| **分布式服务（P/D 分离）** | vLLM, SGLang | vLLM：MooncakeConnector RFC；SGLang：Elastic EP + Mooncake 弹性扩容 |
| **按模型速率限制** | LiteLLM | customers/budgets 上按模型 TPM/RPM 映射 |

### 跨项目显著趋同
三个项目今日独立地在 KV 缓存效率上发力（vLLM 的 EAGLE 前缀丢弃、SGLang 的 HiCache 崩溃、llama.cpp 的 row-faithful FlashAttention），表明随着上下文窗口向 1M token 量级增长，KV 缓存管理已成为全行业的共同瓶颈。

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────────────────────┐
│  训练 / 微调                                                         │
│  ─────────────────────────────────────────────────────────────────  │
│  Unsloth  ←────────  微调 + Studio 推理协同设计                       │
│              GGUF 重载调度、NVFP4 路由、FLUX.3 joint block            │
├─────────────────────────────────────────────────────────────────────┤
│  本地运行时                                                          │
│  ─────────────────────────────────────────────────────────────────  │
│  llama.cpp  ←───  库 / 嵌入式推理（无独立服务进程）                   │
│              硬件支持广度：Hexagon DSP、SpacemiT、Elbrus E2K、        │
│              SYCL、Metal、Vulkan、CUDA、ROCm、WebGPU                  │
│                                                                     │
│  Ollama  ←───────  面向开发者的本地服务 + 模型中心                     │
│              Apple Silicon MLX 并发、VRAM 核算修复、                  │
│              模型库内容运营（Ripple Preview）                         │
├─────────────────────────────────────────────────────────────────────┤
│  推理引擎 / 模型服务                                                  │
│  ─────────────────────────────────────────────────────────────────  │
│  vLLM  ←─────────  生产级高吞吐服务引擎                               │
│              Blackwell 损坏、Humming/Marlin 迁移、                   │
│              CuTe DSL AOT 缓存、EAGLE/MTP 前缀缓存 bug                │
│                                                                     │
│  SGLang  ←────────  Rust 加速服务 + 高级调度                          │
│              安全 UAF 披露、DSpark 投机解码、                         │
│              Rust 服务端技术栈、Elastic EP + Mooncake                 │
├─────────────────────────────────────────────────────────────────────┤
│  网关 / 编排                                                         │
│  ─────────────────────────────────────────────────────────────────  │
│  LiteLLM  ←───────  多 Provider 代理 + 成本/速率管理                   │
│              按模型 TPM/RPM 配额、S3→Bedrock、Vercel AI GW、          │
│              v3 速率限制边界情况、流式优化                            │
└─────────────────────────────────────────────────────────────────────┘
```

### 各层核心差异

| 层级 | 项目 | 差异化能力 | 今日风险点 |
|-------|---------|----------------------|-------------------|
| **训练/微调** | Unsloth | Studio 含 GGUF 重载调度、NVFP4 微调路由 | Linux GPU fallback 回归（#17235） |
| **本地运行时（库）** | llama.cpp | 平台广度、多模态音频管线、external PLE 加载 | SYCL MoE 非确定性 logprobs |
| **本地运行时（服务）** | Ollama | 开发者体验、模型中心、Apple Silicon MLX | Vulkan/AMD 30× prompt-cache 回归 |
| **推理引擎** | vLLM | 生产部署广度、Blackwell 优化领先 | SM120 CUDA Graph 损坏；EAGLE 前缀缓存 30–40% 损失 |
| **推理引擎** | SGLang | Rust 后端、DSpark 投机解码、Elastic EP | **UnifiedRadixCache 中存在安全 UAF** |
| **网关** | LiteLLM | 多 Provider 抽象、按模型配额、S3→Bedrock | v3 速率限制器重复计数和 TPM 计数器泄露 |

---

## 6. 趋势信号

### 🔴 关键信号（立即行动）

1. **Blackwell 在 vLLM 和 SGLang 上均不具备生产安全性。** vLLM SM120 上 CUDA Graph 捕获失败；SGLang fa4 attention 在 SM120 上崩溃；CUDA 13 wheel 不兼容导致 SGLang 所有模型在 RTX 50 系列消费级 Blackwell 上无法运行。若您正在评估 RTX 5090 或 RTX PRO 6000 用于生产推理，**请等待至 2027 年 Q1**，待两个项目的 Blackwell 路径稳定后再行部署。

2. **SGLang 存在未修复的 UnifiedRadaxCache Use-After-Free 漏洞。** 可能导致多租户场景下租户 KV 数据泄露。若您运行多租户 SGLang 部署，请在安全补丁发布前通过基础设施层面隔离租户。

3. **NVFP4 MoE 在 SM120 上静默产生空回复（vLLM）。** 这是一个静默数据丢失 bug——不抛异常，请求以 `finish_reason: "length"` 和 `content: null` 返回。在 #51525 修复前，请勿在 Blackwell 上部署 NVFP4 MoE 模型。

### 🟠 中期信号（未来 30–60 天）

4. **vLLM 全链路量化内核替换。** Humming 库替代 Marlin 是一项多架构变更，将影响所有 NVIDIA 量化路径（INT4/INT8 GPTQ/AWQ、NVFP4、MXFP4、MXFP8、MXFP6）。若您有自定义量化配置，请预留迁移时间。

5. **多项目投机解码可靠性问题。** vLLM 的 EAGLE/MTP 前缀缓存 bug 导致批处理吞吐损失 30–40%；SGLang 的 DSpark 延迟草稿 KV 正在破坏回滚机制；vLLM 的 spec-decode 接受率从某个 PR 下降了约 10.6%。若您的延迟敏感型工作负载依赖投机解码，请在任何升级后验证接受率。

6. **LiteLLM 按模型速率限制正式落地。** 全新的 `model_tpm_limit` 和 `model_rpm_limit` 字段支持多租户部署中不同模型使用不同节流策略——这是生产级 API 网关长期以来的核心需求。

### 🟡 中期信号（下一季度）

7. **ROCm MI355X 性能计划趋于成熟。** vLLM 和 SGLang 均有针对 AMD gfx950 的活跃堆积 PR 计划。这是 H 系列 NVIDIA GPU 在分离式服务规模场景下唯一可信的替代方案——请将 MI355X 收敛状态作为 AMD 优先基础设施策略的决策参考点。

8. **llama.cpp 多模态音频管线走向成熟。** 今日 Gemma 4 音频流式推理和 TTS 端点的加入，使 llama.cpp 从聚焦文本的本地运行时扩展为可行的边缘 TTS/STT 服务器。结合已有的视觉管线，llama.cpp 正在成为开放权重多模态运行时的标杆。

9. **SGLang Rust 后端成为生产标准。** 12 个 PR 的 Rust 服务端技术栈及非阻塞跟进表明持续投入。若您正在评估 SGLang 与 vLLM 在延迟敏感型工作负载上的选型，Rust 路径预计在 1–2 个版本内弥合差距。

10. **Ollama VRAM 核算走向完善。** VRAM 核算和 GPU 分片修复（PR #19632）解决多 GPU 部署中长期以来的故障根源。这使 Ollama 在多 GPU 本地服务场景中更具可行性，缩小了与 vLLM/SGLang 在单节点多 GPU 部署上的能力差距。

### 2026 年 Q1 战略观察清单

- **Blackwell CUDA Graph 稳定化**（vLLM #56892、SGLang #49209）——决定 RTX 5090 是否成为可用推理卡
- **SGLang 安全补丁**（#49361）——影响所有多租户部署
- **Humming/Marlin 迁移**（vLLM #65560）——该项目历史上最大规模的量化重构
- **llama.cpp SYCL MoE 确定性修复**（#31206）——解除 Intel Ponte Vecchio / Battlemage 上 logprob 依赖型评估工作负载的阻塞
- **SGLang v0.5.23 SM90 decode 回归**（#49336）——阻止 Hopper 部署升级；修复后将为 H100/H200/H20 用户释放吞吐收益

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the text content while preserving the Markdown structure
2. Keep all URLs, issue/PR references, version numbers, file paths, etc. in their original form
3. Use natural technical Chinese suitable for a Chinese developer newsletter
4. Output ONLY the translation with no preamble or explanation

Let me translate section by section, maintaining the structure.

Key terms to consider:
- vLLM - keep as-is
- decode throughput - 解码吞吐
- prefix-cache - 前缀缓存
- CUDA graphs - CUDA图
- speculative decoding - 投机解码
- MoE (Mixture of Experts) - MoE (混合专家)
- KV cache - KV缓存
- Blackwell - Blackwell
- ROCm - ROCm
- FlashInfer - FlashInfer
- Triton - Triton
- AWQ, GPTQ - keep as-is
- FP8, INT4, etc. - keep as-is
- Marlin - Marlin
- Humming - Humming
- EAGLE/MTP - EAGLE/MTP
- CuTe - CuTe
- MXFP4, MXFP8, etc. - keep as-is

Let me translate this carefully:

# vLLM Project Digest — 2026-11-10
# vLLM 项目摘要 — 2026年11月10日

## 1. Today's Highlights
## 1. 今日要点

Blackwell SM120 (RTX PRO 6000 / RTX 5090) dominates the day's activity, with two separate issues flagging critical throughput and correctness problems on the new architecture — one on DeepSeek-V4.1-Flash decode throughput under `--enforce-eager` ([#56892](https://github.com/vllm-project/vllm/issues/56892)), and one on NVFP4 MoE silently producing empty completions on SM_120 ([#51525](https://github.com/vllm-project/vllm/issues/51525)). Meanwhile, the community is actively scoping two long-running RFC threads: a proposal to replace the SM80-era Marlin quantization kernel with the more comprehensive Humming library across all NVIDIA architectures ([#65560](https://github.com/vllm-project/vllm/issues/65560)), and a standardized framework for specialized monokernel decode implementations ([#60904](https://github.com/vllm-project/vllm/issues/60904)).

Blackwell SM120 (RTX PRO 6000 / RTX 5090) 占据了今日活动的核心位置，两个独立的问题暴露了新架构上的严重吞吐量和正确性问题——一个涉及 DeepSeek-V4.1-Flash 在 `--enforce-eager` 模式下的解码吞吐量 ([#56892](https://github.com/vllm-project/vllm/issues/56892))，另一个涉及 NVFP4 MoE 在 SM_120 上静默产生空完成回复 ([#51525](https://github.com/vllm-project/vllm/issues/51525))。同时，社区正在积极推进两个长期运行的 RFC 讨论：一个是提议用更全面的 Humming 库替换 SM80 时代的 Marlin 量化内核，覆盖所有 NVIDIA 架构 ([#65560](https://github.com/vllm-project/vllm/issues/65560))，另一个是关于专门化单核解码实现的标准框架 ([#60904](https://github.com/vllm-project/vllm/issues/60904))。

## 2. Releases & Breaking Changes
## 2. 发布与破坏性变更

**No new releases in the last 24 hours.** The project continues on the `main` branch track.

**过去 24 小时内无新版本发布。** 项目继续沿 `main` 分支推进。

Migration-relevant changes in flight (not yet merged but reviewed today):
尚在推进中的迁移相关变更（尚未合并，今日已审核）：

- **AWQ key name acceptance** — `MoeWNA16Config` currently rejects standard AWQ checkpoint keys (`w_bit` / `q_group_size`) and only accepts GPTQ keys. Fix in review: [#66488](https://github.com/vllm-project/vllm/pull/66488).
- **AWQ 密钥名兼容性** — `MoeWNA16Config` 当前拒绝标准 AWQ checkpoint 中的密钥（`w_bit` / `q_group_size`），只接受 GPTQ 密钥。修复方案正在审核中：[#66488](https://github.com/vllm-project/vllm/pull/66488)。

- **Boolean env-var parsing unification** — [#66536](https://github.com/vllm-project/vllm/pull/66536) addresses inconsistent handling across the codebase.
- **布尔型环境变量解析统一** — [#66536](https://github.com/vllm-project/vllm/pull/66536) 解决了代码库中布尔值处理不一致的问题。

## 3. New Model & Hardware Support
## 3. 新模型与硬件支持

| Model / Hardware | Status | Tracking Issue/PR |
|---|---|---|
| **NVIDIA Nemotron 3.5 ASR Streaming** (`nemotron-3.5-asr-streaming-0.6b`) | Feature request open | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **DeepSeek-V4 / V4.1 Flash** — full optimization landing | Performance work landed, issue closed | [#45861](https://github.com/vllm-project/vllm/issues/45861) |
| **Kimi K3** — performance optimization program | Active, stacked PRs on main | [#50587](https://github.com/vllm-project/vllm/issues/50587) |
| **Qwen3.8-Flash-Next (Qwen4-Exp / K3 hybrid)** — full stack support | Optimization work in progress | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **AMD MI355X (gfx950)** — ROCm performance program | Active, multi-PR effort | [#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **SM120 (Blackwell / RTX PRO 6000, RTX 5090)** — CUDA graph capture | Buggy; fix in review for DeepGEMM BLOCK_M | [#63533](https://github.com/vllm-project/vllm/pull/63533) |
| **Responses API `/v1/responses/input_tokens`** | Feature request open | [#49533](https://github.com/vllm-project/vllm/issues/49533) |

| 模型 / 硬件 | 状态 | 跟踪 Issue/PR |
|---|---|---|
| **NVIDIA Nemotron 3.5 ASR 流式推理** (`nemotron-3.5-asr-streaming-0.6b`) | 功能请求已开启 | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **DeepSeek-V4 / V4.1 Flash** — 完整优化落地 | 性能优化已合并，问题已关闭 | [#45861](https://github.com/vllm-project/vllm/issues/45861) |
| **Kimi K3** — 性能优化项目 | 活跃中，主分支上堆叠多个 PR | [#50587](https://github.com/vllm-project/vllm/issues/50587) |
| **Qwen3.8-Flash-Next (Qwen4-Exp / K3 混合)** — 全栈支持 | 优化工作进行中 | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **AMD MI355X (gfx950)** — ROCm 性能优化项目 | 活跃中，多 PR 协同推进 | [#57149](https://github.com/vllm-project/vllm/issues/57149)，[#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **SM120 (Blackwell / RTX PRO 6000, RTX 5090)** — CUDA 图捕获 | 存在问题；DeepGEMM BLOCK_M 修复正在审核 | [#63533](https://github.com/vllm-project/vllm/pull/63533) |
| **Responses API `/v1/responses/input_tokens`** | 功能请求已开启 | [#49533](https://github.com/vllm-project/vllm/issues/49533) |

**Quantization formats in scope:**
**纳入考虑的量化格式：**
- NVFP4, MXFP4, MXFP8, MXFP6, FP8, INT4/INT8 GPTQ/AWQ — all covered by Humming proposal ([#65560](https://github.com/vllm-project/vllm/issues/65560)).
- NVFP4, MXFP4, MXFP8, MXFP6, FP8, INT4/INT8 GPTQ/AWQ — 均纳入 Humming 提案覆盖范围（[#65560](https://github.com/vllm-project/vllm/issues/65560)）。
- AWQ key name compatibility fix: [#66488](https://github.com/vllm-project/vllm/pull/66488).
- AWQ 密钥名兼容性修复：[#66488](https://github.com/vllm-project/vllm/pull/66488)。

## 4. Performance & Optimization
## 4. 性能与优化

### Landed or Merged (reviewed today)
### 已合并（今日审核）

| Optimization | Impact | PR |
|---|---|---|
| **SM120 DeepGEMM contiguous-grouped MoE — dynamic per-group BLOCK_M** | On SM120 (RTX 6000D), vendored DeepGEMM fixed BLOCK_M=128 regardless of token count. At decode (M often 1–6), this wastes most of each tile. Fix enables dynamic BLOCK_M. | [#63533](https://github.com/vllm-project/vllm/pull/63533) |
| **FlashInfer workspace cleanup on teardown** | Release FlashInfer one-sided all-to-all resources on communicator destruction instead of inheriting no-op. | [#63874](https://github.com/vllm-project/vllm/pull/63874) |
| **Benchmark warmup prefix-cache isolation** | Warmup requests were re-inserting into prefix cache, causing first measured request to be a cache hit. Fix gives each warmup a unique `cache_salt`. | [#66701](https://github.com/vllm-project/vllm/pull/66701), [#66707](https://github.com/vllm-project/vllm/pull/66707) |

| 优化项 | 影响 | PR |
|---|---|---|
| **SM120 DeepGEMM 连续分组 MoE — 按组动态 BLOCK_M** | 在 SM120 (RTX 6000D) 上， vendored DeepGEMM 将 BLOCK_M 固定为 128，与 token 数量无关。在解码场景（M 通常为 1–6）下，大部分 tile 被浪费。修复启用动态 BLOCK_M。 | [#63533](https://github.com/vllm-project/vllm/pull/63533) |
| **FlashInfer 工作区销毁清理** | 在通信器销毁时释放 FlashInfer 单侧 all-to-all 资源，而非继承为空操作。 | [#63874](https://github.com/vllm-project/vllm/pull/63874) |
| **Benchmark 预热前缀缓存隔离** | 预热请求会被重新插入前缀缓存，导致首次测量请求命中缓存。修复为每次预热分配唯一的 `cache_salt`。 | [#66701](https://github.com/vllm-project/vllm/pull/66701)，[#66707](https://github.com/vllm-project/vllm/pull/66707) |

### In Progress / Under Discussion
### 进行中 / 讨论中

| Optimization | Detail | Issue/PR |
|---|---|---|
| **Blackwell decode throughput (DeepSeek-V4.1-Flash, SM120)** | `--enforce-eager` yields extremely low decode throughput; CUDA graphs unusable on SM120. 31 comments, author requesting prioritization of graph capture fix. | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **FlashInfer workspace sizing at startup** | Reducing workspace from 394 → 32 MiB on RTX 4060 Laptop (SM89) recovered **21.27% more KV-cache capacity**. Under 4 concurrent requests, TPOT improved measurably. | [#63399](https://github.com/vllm-project/vllm/issues/63399) |
| **KV offload DMA/Triton threshold** | Current threshold constants tuned on H100 PCIe Gen5. Needs per-device profiling for other platforms. | [#57555](https://github.com/vllm-project/vllm/issues/57555) |
| **Triton/eager attention — redundant K/V cache view re-derivation** | Each attention call re-derives `kv_cache.transpose(1,2).split(...)` even though views depend only on tensor storage/shape/strides. Same class as #59534. | [#64572](https://github.com/vllm-project/vllm/issues/64572) |
| **EAGLE/MTP prefix-cache last-block drop** | On a hybrid Qwen3.8 GDN layout, the last block is dropped from prefix cache, causing **1,648-token recompute per hit** and **~30–40% batch throughput loss** on prefix-reusing speculative-decoding workloads. | [#53670](https://github.com/vllm-project/vllm/issues/53670) |
| **MiniMax-M2.7 throughput regression** | TP4 + EP regression confirmed across v0.29, v0.31, v0.32 vs. earlier versions. | [#63705](https://github.com/vllm-project/vllm/issues/63705) |
| **Spec-decode acceptance regression** | Two separable effects on DeepSeek-V4-Flash production deployment: #48137 costs ~10.6% spec-decode acceptance; #48660 shifts output distributions. | [#49927](https://github.com/vllm-project/vllm/issues/49927) |
| **MoE Oracle unification** | Proposal to unify fp8 / nvfp4 / mxfp8 / unquantized / mxfp4 MoE oracle functions into a class structure. | [#37753](https://github.com/vllm-project/vllm/issues/37753) |
| **CuTe DSL AOT kernel cache** | Opt-in AOT cache for CuTe DSL kernels, avoiding re-tracing on worker restart. Stacked on compile cache PR. | [#66623](https://github.com/vllm-project/vllm/pull/66623) |

| 优化项 | 详情 | Issue/PR |
|---|---|---|
| **Blackwell 解码吞吐量（DeepSeek-V4.1-Flash, SM120）** | `--enforce-eager` 导致极低的解码吞吐量；CUDA 图在 SM120 上不可用。31 条评论，作者请求优先修复图捕获。 | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **FlashInfer 工作区启动时大小** | 在 RTX 4060 Laptop (SM89) 上将工作区从 394 MB 降至 32 MB，恢复了 **21.27% 的额外 KV-cache 容量**。在 4 个并发请求下，TPOT 有可见改善。 | [#63399](https://github.com/vllm-project/vllm/issues/63399) |
| **KV offload DMA/Triton 阈值** | 当前阈值常数是在 H100 PCIe Gen5 上调优的，其他平台需要逐设备 profiling。 | [#57555](https://github.com/vllm-project/vllm/issues/57555) |
| **Triton/eager attention — 冗余的 K/V cache view 重复推导** | 每次 attention 调用都重新推导 `kv_cache.transpose(1,2).split(...)`，而实际上 view 只取决于 tensor 的 storage/shape/strides。与 #59534 同类问题。 | [#64572](https://github.com/vllm-project/vllm/issues/64572) |
| **EAGLE/MTP 前缀缓存末块丢失** | 在 Qwen3.8 GDN 混合布局上，末块被从前缀缓存中丢弃，导致每次命中需要 **1,648 个 token 的重新计算**，前缀复用的投机解码工作负载上 **批量吞吐量损失约 30–40%**。 | [#53670](https://github.com/vllm-project/vllm/issues/53670) |
| **MiniMax-M2.7 吞吐量回退** | 在 v0.29、v0.31、v0.32 中确认了 TP4 + EP 回退，较早期版本有明显下降。 | [#63705](https://github.com/vllm-project/vllm/issues/63705) |
| **Spec-decode acceptance 回退** | DeepSeek-V4-Flash 生产部署上有两个可分离的影响：#48137 使 acceptance 降低约 10.6%；#48660 改变了输出分布。 | [#49927](https://github.com/vllm-project/vllm/issues/49927) |
| **MoE Oracle 统一** | 提议将 fp8 / nvfp4 / mxfp8 / unquantized / mxfp4 MoE oracle 函数统一为类结构。 | [#37753](https://github.com/vllm-project/vllm/issues/37753) |
| **CuTe DSL AOT 内核缓存** | CuTe DSL 内核的可选 AOT 缓存，避免 worker 重启时重新 tracing。堆叠在 compile cache PR 上。 | [#66623](https://github.com/vllm-project/vllm/pull/66623) |

## 5. Stability & Regressions
## 5. 稳定性与回退

Ranked by severity and user impact:

按严重程度和用户影响排序：

| Severity | Issue | Detail | Fix PR |
|---|---|---|---|
| 🔴 **Correctness / Silent Data Loss** | **NVFP4 MoE empty completions on SM_120** ([#51525](https://github.com/vllm-project/vllm/issues/51525)) | With `--moe-backend cutlass` on RTX 5090 Laptop (SM_120), serving an NVFP4 MoE checkpoint silently returns `content: null` with `finish_reason: "length"` — no exception, full token budget consumed. | None filed yet |
| 🔴 **Correctness / Silent Output** | **ROCm MLA decode kernel returns uncorrelated output** ([#66141](https://github.com/vllm-project/vllm/issues/66141)) | On gfx950, `mla_decode_fwd` with fp8 Q + fp8 KV, `gqa_ratio=16`, `decode_qlen` 3–4 dispatches non-persistent kernel returning outputs **uncorrelated with reference** (cos_diff 0.84–0.90). **Closed** today; fix path likely confirmed. | Closed |
| 🔴 **Correctness / Precision** | **Qwen3.5 vision RoPE angle precision differs from HF** ([#66070](https://github.com/vllm-project/vllm/issues/66070)) | RoPE angle computation diverges from HuggingFace reference on A800-SXM4-80GB; mixed FP32 workaround produces results. | None filed yet |
| 🟠 **Correctness / Spec Decoding** | **MTP speculative decoding divergence** ([#63593](https://github.com/vllm-project/vllm/issues/63593)) | With forced-reject on Qwen3.8-27B GDN hybrid at K≥5, n≥8, L≥192, output diverges from target-only mode despite confident margins. | None filed yet |
| 🟠 **Correctness / Marlin MoE** | **Marlin MoE output depends on within-expert token ordering** ([#52525](https://github.com/vllm-project/vllm/issues/52525)) | Token ordering within a single expert's routing group affects output; violates expected invariance. | None filed yet |
| 🟡 **Performance / Throughput** | **DeepSeek-V4-Flash decode throughput regression on SM120** ([#56892](https://github.com/vllm-project/vllm/issues/56892)) | CUDA graphs unusable; `--enforce-eager` yields extremely low throughput on 8× RTX PRO 6000 Blackwell. | Fix PR not yet open; author requesting prioritization |
| 🟡 **Performance / Regression** | **Spec-decode acceptance drops ~10.6%** ([#49927](https://github.com/vllm-project/vllm/issues/49927)) | Isolated to PR #48137. | Awaiting review |
| 🟡 **Performance / Regression** | **MiniMax-M2.7 TP4+EP regression** ([#63705](https://github.com/vllm-project/vllm/issues/63705)) | Confirmed across three recent releases. | None filed yet |

| 严重程度 | 问题 | 详情 | 修复 PR |
|---|---|---|---|
| 🔴 **正确性 / 静默数据丢失** | **NVFP4 MoE 在 SM_120 上产生空完成** ([#51525](https://github.com/vllm-project/vllm/issues/51525)) | 在 RTX 5090 Laptop (SM_120) 上使用 `--moe-backend cutlass` 提供 NVFP4 MoE checkpoint 时，静默返回 `content: null` 及 `finish_reason: "length"` — 无异常，完整 token 预算被耗尽。 | 尚无 PR |
| 🔴 **正确性 / 静默输出** | **ROCm MLA 解码 kernel 返回不相关输出** ([#66141](https://github.com/vllm-project/vllm/issues/66141)) | 在 gfx950 上，`mla_decode_fwd` 使用 fp8 Q + fp8 KV，`gqa_ratio=16`，`decode_qlen` 为 3–4 时调度非持久化 kernel，返回与参考**完全不相关**的输出（cos_diff 0.84–0.90）。今日已 **Closed**；修复路径可能已确认。 | 已关闭 |
| 🔴 **正确性 / 精度** | **Qwen3.5 vision RoPE 角度精度与 HF 不同** ([#66070](https://github.com/vllm-project/vllm/issues/66070)) | 在 A800-SXM4-80GB 上 RoPE 角度计算与 HuggingFace 参考实现出现分歧；混合 FP32 workaround 可以产出结果。 | 尚无 PR |
| 🟠 **正确性 / 投机解码** | **MTP 投机解码结果分歧** ([#63593](https://github.com/vllm-project/vllm/issues/63593)) | 在 Qwen3.8-27B GDN 混合模型上使用 forced-reject（K≥5，n≥8，L≥192）时，即使置信度足够，输出仍与仅目标模式的结果产生分歧。 | 尚无 PR |
| 🟠 **正确性 / Marlin MoE** | **Marlin MoE 输出依赖 expert 内 token 顺序** ([#52525](https://github.com/vllm-project/vllm/issues/52525)) | 同一 expert 路由组内的 token 顺序影响输出；违反预期的置换不变性。 | 尚无 PR |
| 🟡 **性能 / 吞吐量** | **DeepSeek-V4-Flash 在 SM120 上解码吞吐量回退** ([#56892](https://github.com/vllm-project/vllm/issues/56892)) | CUDA 图不可用；`--enforce-eager` 在 8× RTX PRO 6000 Blackwell 上吞吐量极低。 | 修复 PR 尚未开启；作者请求优先处理 |
| 🟡 **性能 / 回退** | **Spec-decode acceptance 下降约 10.6%** ([#49927](https://github.com/vllm-project/vllm/issues/49927)) | 已定位到 PR #48137。 | 等待审核 |
| 🟡 **性能 / 回退** | **MiniMax-M2.7 TP4+EP 回退** ([#63705](https://github.com/vllm-project/vllm/issues/63705)) | 在最近三个版本中确认。 | 尚无 PR |

## 6. What This Means for Application Developers
## 6. 对应用开发者的实际影响

**If you are serving on Blackwell (RTX 5090 / RTX PRO 6000):**
**如果你在 Blackwell (RTX 5090 / RTX PRO 6000) 上提供服务：**
- Avoid `--enforce-eager` with DeepSeek-V4.1-Flash on SM120 — CUDA graph capture is broken and throughput is severely degraded. Track [#56892](https://github.com/vllm-project/vllm/issues/56892) for resolution.
- 在 SM120 上避免对 DeepSeek-V4.1-Flash 使用 `--enforce-eager` — CUDA 图捕获存在缺陷，吞吐量严重下降。请关注 [#56892](https://github.com/vllm-project/vllm/issues/56892) 以获取解决方案。

- NVFP4 MoE models on SM_120 with `--moe-backend cutlass` will silently produce empty completions — do not use that combination until [#51525](https://github.com/vllm-project/vllm/issues/51525) is resolved.
- 在 SM_120 上使用 `--moe-backend cutlass` 运行 NVFP4 MoE 模型会静默产生空完成 — 在 [#51525](https://github.com/vllm-project/vllm/issues/51525) 解决之前请勿使用该组合。

**If you use speculative decoding (EAGLE/MTP):**
**如果你使用投机解码（EAGLE/MTP）：**
- Prefix-reusing workloads on Qwen3.8 GDN hybrid models are experiencing 30–40% throughput loss due to a last-block drop in the prefix cache. See [#53670](https://github.com/vllm-project/vllm/issues/53670).
- 在 Qwen3.8 GDN 混合模型上使用前缀复用的工作负载，因前缀缓存末块丢失问题正遭受 30–40% 的吞吐量损失。参见 [#53670](https://github.com/vllm-project/vllm/issues/53670)。

**If you use the benchmark tool:**
**如果你使用 benchmark 工具：**
- Warmup requests were contaminating the prefix cache, making the first measured request artificially fast. The fix ([#66701](https://github.com/vllm-project/vllm/pull/66701), [#66707](https://github.com/vllm-project/vllm/pull/66707)) is reviewed today — expect more accurate benchmark numbers after the fix merges.
- 预热请求曾污染前缀缓存，导致首次测量请求人为地偏快。相关修复（[#66701](https://github.com/vllm-project/vllm/pull/66701)、[#66707](https://github.com/vllm-project/vllm/pull/66707)）今日已审核 — 修复合并后 benchmark 数据将更为准确。

**If you use KV offloading:**
**如果你使用 KV offloading：**
- The DMA/Triton threshold is tuned only for H100 PCIe Gen5; other devices may benefit from per-device profiling. Track [#57555](https://github.com/vllm-project/vllm/issues/57555).
- DMA/Triton 阈值目前仅针对 H100 PCIe Gen5 调优；其他设备可能需要逐设备 profiling 以获得更好效果。关注 [#57555](https://github.com/vllm-project/vllm/issues/57555)。

**If you use AMD ROCm:**
**如果你使用 AMD ROCm：**
- MI355X (gfx950) performance optimization is actively landing as stacked PRs — expect measurable gains in upcoming releases. The MLA decode correctness bug on gfx950 ([#66141](https://github.com/vllm-project/vllm/issues/66141)) is closed, suggesting a fix is available.
- MI355X (gfx950) 性能优化正以堆叠 PR 的形式积极落地 — 预计在后续版本中将获得可量化的性能提升。gfx950 上的 MLA 解码正确性 bug（[#66141](https://github.com/vllm-project/vllm/issues/66141)）已关闭，表明修复方案已可用。

**If you use RL training with weight reloading:**
**如果你使用带权重重载的 RL 训练：**
- The RFC on direct weight reload for RL training ([#54477](https://github.com/vllm-project/vllm/issues/54477)) has been revised and validated across 17 flagship families. If you have custom loaders, review the RFC carefully — the v1 approach caused silent MLA weight staleness.
- 直接权重重载 RL 训练 RFC（[#54477](https://github.com/vllm-project/vllm/issues/54477)）已修订，并在 17 个旗舰模型族上完成验证。如果你有自定义 loader，请仔细审阅 RFC — v1 方案曾导致静默的 MLA 权重陈旧问题。

**If you use Kimi K3 mode:**
**如果你使用 Kimi K3 模式：**
- A security fix requiring native XTML chat encoding ([#66257](https://github.com/vllm-project/vllm/pull/66257)) is reviewed today. If you are using a generic HuggingFace tokenizer with Jinja templating in K3 mode, verify your setup after this merges.
- 一个要求原生 XTML chat encoding 的安全修复（[#66257](https://github.com/vllm-project/vllm/pull/66257)）今日已审核。如果你在 K3 模式下使用通用 HuggingFace tokenizer 配合 Jinja 模板，请在合并后验证你的配置。</think>



</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all the text content to Simplified Chinese
2. Preserve the Markdown structure exactly (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Keep issue/PR references like #12345 and their link text as-is
6. Use natural technical Chinese - not a literal word-for-word translation

Let me translate section by section:

Title: "SGLang Daily Digest — 2026-11-10" → "SGLang 每日摘要 — 2026-11-10"

Let me go through each section carefully.

Actually, the user specified: "Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output."

So I should just output the translated content directly without any additional comments or fences.

Let me translate:

# SGLang Daily Digest — 2026-11-10
→
# SGLang 每日摘要 — 2026-11-10

## 1. Today's Highlights
→
## 1. 今日要闻

A critical security vulnerability was disclosed today: a Use-After-Free in SGLang's `UnifiedRadixCache` that can expose tenant KV data across requests (issue #49361). This requires immediate attention. Meanwhile, the SM120 (Blackwell) situation remains turbulent—GLM-5.3-Flash crashes on fa4 attention backend (#42012) and a new bug surfaces where the CUDA 13 wheel install prevents any model from running out-of-the-box on RTX 50-series consumer Blackwell (#49209). On the performance front, v0.5.22 → v0.5.23 introduces a 33–45% per-step decode regression on Hopper at concurrency 12 (#49336), and DeepSeek-V4 prefill throughput on 4× RTX PRO 6000 trails vLLM/marlin by 2–7× (#33422).
→
今日披露了一个严重的安全漏洞：SGLang 的 `UnifiedRadixCache` 存在 Use-After-Free 风险，可能导致跨请求的租户 KV 数据泄露（issue #49361），需要立即关注。与此同时，SM120（Blackwell）的状况依然混乱——GLM-5.3-Flash 在 fa4 attention 后端上崩溃（#42012），而一个新 bug 导致 CUDA 13 wheel 安装后任何模型都无法在 RTX 50 系列消费级 Blackwell 上开箱即用（#49209）。性能方面，v0.5.22 → v0.5.23 在 Hoppe 上的并发场景中出现了 33–45% 的 per-step decode 回归（#49336），同时 DeepSeek-V4 在 4× RTX PRO 6000 上的 prefill 吞吐量比 vLLM/marlin 低 2–7 倍（#33422）。

The next section covers recent releases with no updates in the past 24 hours, and warns about the decode regression when upgrading from v0.5.22 to v0.5.23 on Hopper (SM90)—users should wait for a fix before upgrading. A new table appears to be starting but is cut off. Blackwell consumer cards are currently non-functional with CUDA 13 wheels, requiring the Triton backend as a workaround until resolved. FlashInfer support for SM120 is being extended to cover additional prefill shapes, and SANA-Video 2.0 now supports breakable CUDA graphs with improved anchor attention on GB200.

Additional improvements include Mooncake Elastic EP integration, Qwen3 text encoder optimizations cutting encoding time from 70–95ms to around 25ms, and work toward Cambricon MLU backend support. AMD graphics cards are getting FlyDSL causal conv1d optimizations for Qwen3.5 and 3.8 on specific architectures.

Several critical security and correctness issues need attention: a use-after-free vulnerability in UnifiedRadixCache that could expose tenant KV data, breakable prefill CUDA graph logprobs problems on Qwen3.8-27B-NVFP4, and crashes with GLM-5.3-Flash on SM120 when using the fa4 attention backend.

Decode performance has regressed significantly on SM90 between versions 0.5.22 and 0.5.23, adding 33–45% per-step latency at concurrency 12. DeepSeek-V4 prefill performance on SM120 is lagging behind vLLM/marlin by 2–7× on RTX PRO 6000 hardware. SM120/SM121 support was dropped from DeepGEMM indexer in DSV4.1, causing 8× prefill regressions on GB10. HiCache buffer-only mode is also crashing when combined with Mooncake L3 cache.

The KV cache is failing because the scheduler admits chunked prefill requests it can't complete, leading to OOM crashes with zero evictable memory and all radix nodes locked. Qwen-VL is aborting requests when it encounters literal `"<image>"` strings in input. Mamba's radix cache is degrading valid prefix matches into zero hits after splits. CI infrastructure is experiencing 191 flaky tests across multiple runners, with Xeon SPR systems consistently hitting memory limits during KV allocation and diffusion performance checks varying based on execution environment.

The UnifiedRadixCache vulnerability is a critical data exposure risk for multi-tenant deployments—isolate tenants at the deployment level until patched. Blackwell (SM120) systems are currently broken with standard CUDA 13 wheels and fa4 attention backend crashes on GLM-5.3-Flash, so use the Triton backend as a workaround and wait for v0.5.24. The v0.5.23 decode regression on Hopper is also a blocker.

For new features, Gemma-4 now has FA4 SM90 FP8 e4m3 KV cache support available to test, SANA-Video 2.0 improvements are landing with breakable CUDA graphs and anchor attention optimizations, and the Rust server stack continues maturing with expected latency gains in upcoming releases.
</think>


# SGLang 每日摘要 — 2026-11-10

## 1. 今日要闻

今日披露了一个严重的安全漏洞：SGLang 的 `UnifiedRadixCache` 存在 Use-After-Free 风险，可能导致跨请求的租户 KV 数据泄露（issue #49361），需要立即关注。与此同时，SM120（Blackwell）的状况依然混乱——GLM-5.3-Flash 在 fa4 attention 后端上崩溃（#42012），而一个新 bug 导致 CUDA 13 wheel 安装后任何模型都无法在 RTX 50 系列消费级 Blackwell 上开箱即用（#49209）。性能方面，v0.5.22 → v0.5.23 在 Hopper 上引入了 33–45% 的 per-step decode 回归（#49336），而 DeepSeek-V4 在 4× RTX PRO 6000 上的 prefill 吞吐量比 vLLM/marlin 低 2–7 倍（#33422）。

---

## 2. 发版与破坏性变更

| 项目 | 详情 | 链接 |
|------|---------|------|
| **过去 24h 无新版本** | 发版流程暂无动静。 | — |

**迁移注意：** 在 Hopper (SM90) 上从 v0.5.22 升级到 v0.5.23 时，并发 12 下的 decode 会产生 33–45% 的回归（#49336）。建议等待修复版本再升级。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 变更 | 状态 | 链接 |
|-----------------|--------|--------|------|
| **Gemma-4 (head_dim 256/512)** | FA4 SM90 FP8 e4m3 KV cache 已合入——对 Gemma-4 全注意力层解锁了 `--kv-cache-dtype fp8_e4m3`，此前这些层被阻止使用 FP8。 | Open PR | [#46965](https://github.com/sgl-project/sglang/pull/46965) |
| **SM120 (RTX 50 系列 Blackwell 消费级)** | **已损坏** — CUDA 13 wheel 安装后无模型可开箱即用（#49209）。临时方案：使用 Triton attention 后端直到问题修复。 | Open issue | [#49209](https://github.com/sgl-project/sglang/issues/49209) |
| **SM120 FlashInfer 覆盖** | PR 将 SM120 FlashInfer fallback 扩展到 C++ dispatch 表中未实例化的 prefill shape，减少 Triton fallback 频率。 | Open PR | [#38969](https://github.com/sgl-project/sglang/pull/38969) |
| **SANA-Video 2.0** | Breakable CUDA graph 支持已合入（#41501）。BF16 anchor attention 优化降低了 GB200 上的编码开销（#49219）。 | Open PRs | [#41501](https://github.com/sgl-project/sglang/pull/41501), [#49219](https://github.com/sgl-project/sglang/pull/49219) |
| **Mooncake Elastic EP** | 与 Mooncake elastic Buffer 的 Elastic EP 扩容集成（#47859）。 | Open PR | [#47859](https://github.com/sgl-project/sglang/pull/47859) |
| **Qwen3 text encoder RoPE** | 单个 FlashInfer kernel 替换了原来 host-bound 的多 kernel RoPE 路径，在 FLUX.2-klein 请求上编码时间从 70–95 ms 降至约 25 ms（#49448）。 | Open PR | [#49448](https://github.com/sgl-project/sglang/pull/49448) |
| **Cambricon MLU 后端** | 开启 MLU（华为）后端支持的路线图 issue（#45615）。 | Roadmap | [#45615](https://github.com/sgl-project/sglang/issues/45615) |
| **AMD gfx1250 (MI45x)** | AITER upgrade 就绪状态跟踪（#47562）。Qwen3.5/3.8 在 gfx950 上的 FlyDSL causal conv1d prefill opt-in（#41879）。 | Open PRs | [#47562](https://github.com/sgl-project/sglang/issues/47562), [#41879](https://github.com/sgl-project/sglang/pull/41879) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | 链接 |
|------|--------|--------|------|
| **DSpark deferred draft KV** | 修复确保 draft KV 仅在为 carried 请求写入，防止回滚场景下的数据损坏（#49436）。 | 正确性 + 稳定性 | [#49436](https://github.com/sgl-project/sglang/pull/49436) |
| **DeepSeek block-FP8 weight_scale** | 重映射堆叠 gate_up 参数的 block-FP8 weight_scale 以对齐 Quark checkpoint 约定（#49450）。 | 模型加载正确性 | [#49450](https://github.com/sgl-project/sglang/pull/49450) |
| **NPU Ascend MoE** | 优化 AllGather 分发/合并：复用 DP/CP token 元数据，遵守 MXFP8 低延迟 dtype，按本地 expert 范围路由（#49277）。 | NPU 吞吐 | [#49277](https://github.com/sgl-project/sglang/pull/49277) |
| **Qwen3.8-27B prefill** | FA4 SM90 FP8 KV cache 支持解封了 Gemma-4，并可能使 Qwen3.8 滑动窗口层受益（#46965）。 | Prefill 吞吐 | [#46965](https://github.com/sgl-project/sglang/pull/46965) |
| **AMD MI350X 确定性模式** | 分段 split-K bf16 matmul 降低 decode GEMM 开销（#45599，已关闭）。 | AMD decode 性能 | [#45599](https://github.com/sgl-project/sglang/pull/45599) |
| **DSpark int8 Markov walk** | Hopper 上 bs ≤ 64 的 fused int8 kernel（#42855）。 | 投机解码吞吐 | [#42855](https://github.com/sgl-project/sglang/pull/42855) |
| **SM120 上 DeepSeek-V4 prefill** | 性能跟踪：4× RTX PRO 6000 硬件上约 2–7K tok/s vs vLLM/marlin 报告的约 12.5K（#33422）。 | 已知差距 | [#33422](https://github.com/sgl-project/sglang/issues/33422) |
| **Rust server stack 后续跟进** | 12-PR Rust server stack 的非阻塞性能后续跟进（#49055）。 | 延迟 | [#49055](https://github.com/sgl-project/sglang/issues/49055) |

---

## 5. 稳定性与回归

### 🔴 严重（安全 / 数据完整性）

| 问题 | 严重程度 | 详情 | 状态 | 链接 |
|-------|----------|---------|--------|------|
| **UnifiedRadixCache 中的 Use-After-Free** | **严重** | 可能导致租户 KV 数据泄露至其他请求。尚无修复 PR。 | Open | [#49361](https://github.com/sgl-project/sglang/issues/49361) |
| **Breakable prefill CUDA graph logprobs** | **高** | 填充到捕获 bucket 的短 prefill 在 Qwen3.8-27B-NVFP4、hybrid GDN、v0.5.23 下产生与 eager 模式不同的 logprobs。 | Open | [#49133](https://github.com/sgl-project/sglang/issues/49133) |

### 🟠 高（正确性 / 崩溃）

| 问题 | 严重程度 | 详情 | 状态 | 链接 |
|-------|----------|---------|--------|------|
| **GLM-5.3-Flash SM120 上 fa4 崩溃** | **高** | fa4 attention 后端在 CUDA-graph 捕获时崩溃（hybrid extend reshape）。Triton 是目前唯一可用的后端。 | Open | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **SM90 decode 回归 v0.5.22→v0.5.23** | **高** | 并发 12 下 per-step decode 时间增加 33–45%。`use_deep_select_decode` 在 Hopper 上也带来额外回归。 | Open | [#49336](https://github.com/sgl-project/sglang/issues/49336) |
| **DSV4.1 DeepGEMM indexer 移除 SM120/SM121** | **高** | #48399 引入了严格的 `is_sm(10)` 检查，破坏了 SM120/SM121。GB10 上产生 8× prefill 回归（torch fallback 每层调用 `.tolist()`）。 | Open | [#49173](https://github.com/sgl-project/sglang/issues/49173) |
| **HiCache buffer_only + Mooncake L3 崩溃** | **中高** | Scheduler 接纳了一个无法完成的 chunked prefill，随后因 "Prefill out of memory" 崩溃（evictable=0，所有 radix node 锁定）。出现在 GLM-5.3 W4AFP8 的 8× H200 上。 | Open | [#45989](https://github.com/sgl-project/sglang/issues/45989) |
| **Qwen-VL 字面 `"<image>"` 导致请求中止** | **中** | 当字面字符串出现在消息文本中时报 500 错误 "Mismatch: More IMAGE tokens found than corresponding data provided"。 | Open | [#43979](https://github.com/sgl-project/sglang/issues/43979) |
| **Mamba radix cache 前缀命中退化** | **中** | `MambaRadixCache` 可能在 split 后将结构上有效的前缀匹配降级为实际 0 命中。 | 已关闭（不活跃） | [#22935](https://github.com/sgl-project/sglang/issues/22935) |

### 🟡 中（CI / 基础设施）

| 问题 | 详情 | 链接 |
|-------|---------|------|
| **Flaky tests / CI 基础设施故障** | 191 条评论——通过 `/sglang-pr-babysit` Claude workflow 追踪 `PR Test Base` / `PR Test Extra` 失败（#42752）。 | [#42752](https://github.com/sgl-project/sglang/issues/42752) |
| **Xeon SPR 上 KV 分配时 OOM** | sglang-spr08/18/19 在 KV 分配期间持续被 SIGKILL（#48411）。 | [#48411](https://github.com/sgl-project/sglang/issues/48411) |
| **Diffusion perf checks 依赖 runner** | Diffusion perf checks 的通过/失败取决于落在哪个 runner 上（#48311）。 | [#48311](https://github.com/sgl-project/sglang/issues/48311) |

---

## 6. 对应用开发者的影响

**安全优先：** 如果你运行多租户工作负载，`UnifiedRadixCache` 中的 Use-After-Free（#49361）是数据泄露风险。关注安全补丁或安全公告发布。在补丁发布前，考虑在部署层面隔离租户。

**Blackwell (SM120) 谨慎使用：** 消费级 RTX 50 系列 Blackwell 目前使用标准 CUDA 13 wheel 已损坏（#49209），且 fa4 attention 后端在 GLM-5.3-Flash 上崩溃（#42012）。临时方案使用 Triton 后端（`--attention-backend triton`）。对于生产级 Blackwell 部署，等待 v0.5.24 或更高版本。

**v0.5.23 decode 回归：** 如果你在 Hopper（H100/H200/H20）上依赖 decode 延迟，避免升级到 v0.5.23，直到 SM90 decode 回归（#49336）被修复。每步增加 33–45% 的延迟会严重影响交互式场景。

**Gemma-4 FP8 KV 现已可用：** 如果你运行 Gemma-4，新的 FA4 SM90 FP8 e4m3 KV cache 支持（#46965）为 10 个全注意力层开启了内存高效服务。在 Hopper 上用 `--kv-cache-dtype fp8_e4m3` 测试。

**SANA-Video 2.0 改进中：** Breakable CUDA graphs（#41501）和 BF16 anchor attention（#49219）正在合入。如果你服务图像/视频生成，这些改动会降低 warmup 开销和编码延迟。

**Rust server stack 日趋成熟：** Rust server stack 12-PR 的非阻塞后续跟进（#49055）表明对 Rust 后端持续投入。预期在后续版本中获得延迟改进。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English technical digest about llama.cpp into Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve all Markdown structure exactly
3. Keep URLs, code spans, numbers, dates, project names, issue/PR references verbatim
4. Use natural technical Chinese register

Let me go through section by section:

**Title and intro:**
- "llama.cpp Daily Digest — 2026-11-10" → "llama.cpp 每日摘要 — 2026-11-10"
- "Today's Highlights" → "今日要闻"
- "The llama.cpp project shipped significant API parity work today..." → Translate naturally

Let me work through this carefully, maintaining the technical register and all formatting.
</think>


# llama.cpp 每日摘要 — 2026-11-10

## 今日要闻

llama.cpp 项目今日在 API 兼容性方面取得了重要进展，服务器新增了原生 `/v1/audio/speech` 端点支持，Responses API 的 JSON Schema 处理也得到改善。多模态（mtmd）管线新增了 Gemma 4 音频流支持，后端特定优化覆盖了 Metal（AMD eGPU wave64 支持）、Vulkan（窄矩阵乘法优化）和 SpacemiT RISC-V。Hexagon DSP FastRPC 句柄生命周期的关键 bug 已修复。

---

## 发布与变更说明

| Commit | 变更 | 说明 |
|--------|--------|-------|
| `b12238` | **新增：`/v1/audio/speech` 端点** | 完整的 OAI 兼容 TTS 端点；修复了 WAV 写入器与 PCM 的舍入差异（见 PR #31763） |
| `b12240` | Responses API JSON Schema → completions 格式转换 | 允许 `/v1/responses` 中的 `text.format.json_schema` 输出 `/v1/completions` 风格的响应（PR #26145） |
| `b12242` | Chat 语法：禁用 lazy grammar 当 `response_format` 与 tools 同时激活时 | 修复了工具调用时结构化输出的回归问题（PR #31956） |
| `b12239` | Realtime API 改用 `common_chat_input` | 统一 realtime slot 处理逻辑与标准 chat 路径（PR #31978） |
| `b12241` | **Hexagon：修复 64-bit FastRPC 句柄关闭时的截断问题** | 修复 DSP 上的句柄泄漏/损坏问题（#30952） |
| `b12229` | `response_format json_schema` 现支持顶层 schema | 不再要求嵌套的 `json_schema` 包装器（PR #28697） |

**未发布新版本。** 所有变更均为 `master` 分支上的内部提交。

---

## 新模型与硬件支持

| 领域 | 详情 | PR |
|------|--------|-----|
| **多模态 / 音频** | 通过 mtmd 管线支持 Gemma 4 输入音频流 | #31965 |
| **多模态 / 音频** | 新增 `mtmd_helper_resampler` 工具，用于灵活的音频预处理 | #31964 |
| **硬件 — Metal** | AMD eGPU（wave64，如 RX 580/Polaris）的 simdgroup 宽度感知内核；此前仅假设 wave32 | #31994 |
| **硬件 — Hexagon** | Qualcomm DSP 后端新增 `SSM_SCAN` 算子支持 | #31921 |
| **硬件 — RISC-V (SpacemiT)** | `GGML_OP_GATED_DELTA_NET` 路由至 SpacemiT RVV 内核 | #31897 |
| **硬件 — SpacemiT** | 启用 MXFP4 密集重打包与 IME2 加速 | #31776 |
| **硬件 — SpacemiT** | Q4_1 32×256 重打包分发至 IME2 HP 路径 | #31929 |
| **硬件 — Elbrus (E2K)** | Elbrus 后端现路由至 x86 SIMD 路径 — 报告在 Qwen3-8B 上 **prefill 提速 9 倍，token 生成提速 2.4 倍** | #31989 |
| **硬件 — CUDA/ROCm** | AMD GPU GCN MMQ 配置重新调优 | #30021 |
| **量化** | 支持外部 PLE（Parameter-Level.Expert）文件加载；`--ple` 现为 `--shard` 的别名 | #31185 |
| **WebGPU** | 新增 `PAD_REFLECT_1D` 和 `COL2IM_1D` 算子支持 | #31877, #31708 |

---

## 性能与优化

| 后端 | 变更 | 详情 |
|---------|--------|---------|
| **Vulkan** | 窄 N 矩阵乘法优化 | 新增针对 N ≤ 32 调优的 `coopmat1`/`coopmat2` tile 配置（#31990） |
| **Vulkan** | Intel FlashAttention 内核用于 prefill | 面向 Intel 平台 prefill 性能的协作优化（#29357） |
| **CUDA** | 行一致的 FlashAttention 分发（可选启用） | 新增 `GGML_CUDA_FATTN_ROW_FAITHFUL` 环境变量，解决 Ada/Blackwell 上 KV-cache 归约不一致问题（#31992） |
| **SYCL** | oneDNN GEMM 中 Q4_0 权重按 u4 读取 | 避免完整的 f16 转换；示例：B580, m=14336, n=64, k=4096: **1,224 µs**（更快）；通过 `GGML_SYCL_Q4_0_U4_GEMM` 环境变量开关控制（#31993） |
| **GGML-RPC** | 不可达端点时优雅降级 | 防止 RPC 节点断网时的 SIGABRT 崩溃（#30415） |
| **Llama (模型)** | 通过图构建探测融合 top-k mask | 修复 DeepSeek-V4.1 + Vulkan RPC 在 `-fa on` 时输出乱码问题（#31505） |
| **OpenVINO** | FILL 算子用于原地缓存清零；修复 sticky NaN | PR #31913 变更的前置依赖（#31977） |

---

## 稳定性与回归

| 严重度 | 问题 | 状态 | 修复 |
|----------|-------|--------|-----|
| 🔴 **高** | `/v1/chat/completions` 调用时 KV cache 截断 | OPEN — 50 条评论 | 暂无修复 PR；见 #11970 |
| 🔴 **高** | SYCL MoE logprobs 非确定性；seed 不生效 | OPEN — 7 条评论 | 暂无修复 PR；见 #31206 |
| 🟠 **中** | `ggml_backend_sched_alloc_splits`：意外图重分配崩溃 | OPEN — 11 条评论 | 暂无修复 PR；见 #28753 |
| 🟠 **中** | Vulkan：`mul_mat_vec_q4_k_f32_f32` 在 Adreno 830 上失败（驱动问题） | OPEN — 4 条评论 | 定位至 shaderc/NDK SPIR-V 生成不匹配；见 #28635 |
| 🟠 **中** | AMD Windows 上 VRAM 释放计算错误导致溢出至共享内存 | OPEN — 4 条评论 | 见 #30250 |
| 🟡 **低** | HIP/ROCm eval bug：gfx1151 (Strix Halo) 长 prompt logits 错误 | CLOSED — 13 条评论 | 可能已解决 |
| 🟡 **低** | Vulkan 编译在无 `GL_KHR_cooperative_matrix` 时失败 | CLOSED — 7 条评论 | 已解决 |
| 🟡 **低** | 投机解码 temp=0 在 Qwen3.5 MoE 上破坏输出确定性 | OPEN — 5 条评论 | 后端无关问题；见 #31472 |

**已关闭的重要 issue：** #22413 (SYCL 性能问题), #10732 (json_schema 结构化输出), #31189 (Qwen4Exp assert), #28448 (稀疏 MoE 内存损坏)。

---

## 应用开发者需要关注的事项

1. **音频能力部署现获得第一方支持。** 新的 `/v1/audio/speech` 端点和 Gemma 4 音频流支持使 llama.cpp 成为无需外部 TTS 服务的统一多模态服务器方案。

2. **结构化输出 + 工具调用的可靠性提升。** 当 `response_format` 与 tools 组合使用时，lazy grammar 此前被错误应用，导致静默输出损坏。如果你在 JSON Schema 约束下使用函数调用，请更新至 `b12242` 或更高版本。

3. **Metal 上的 AMD eGPU 用户需要打补丁。** 如果你通过 eGPU 在 AMD RX 580/Polaris 上运行，simdgroup 宽度不匹配会破坏归约和注意力计算。请拉取 `#31994`。

4. **SYCL + MoE 用户：logprobs 不可靠。** 如果你依赖 SYCL MoE 模型的 `logprobs`，即使设置了固定 seed，结果也是非确定性的。请关注 #31206 的进展。

5. **Elbrus (E2K) 用户获得显著提速。** 路由至 x86 SIMD 路径后，Qwen3-8B 的 prefill 提速约 9 倍，decode 提速 2.4 倍。如果你在 E2K 硬件上运行，这是必拉的更新。

6. **AMD GCN 上的 CUDA/ROCm：重新基准测试 MMQ 工作负载。** PR #30021 重新调优了量化配置。预计在 RDNA 时代 AMD GPU 上会有可观的吞吐变化。

7. **关注 Hexagon/Qualcomm 部署。** FastRPC 句柄截断修复（#30952）影响长时间运行的 DSP 推理会话；请更新以防止句柄耗尽。

---

*本摘要基于 2026-11-10 的 GitHub 数据生成，来源：`ggml-org/llama.cpp`。上述所有 PR 和 issue 均已附链接。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the entire technical digest from English to Simplified Chinese, following the rules provided. I need to:

1. Output ONLY the translation - no preamble or explanation
2. Preserve all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, code spans, numbers, dates, version tags, issue/PR numbers verbatim
4. Keep project names, repository slugs, usernames, file paths, API/config identifiers in original form
5. Use natural technical Chinese, like a Chinese developer newsletter
6. No markdown fences around the output

Let me translate section by section:

## 1. Today's Highlights

"Today's Highlights" → 今日要闻

"Ripple Preview, a 65B agentic coding model from Ricursive Intelligence" → Ripple Preview，一款来自 Ricursive Intelligence 的 650 亿参数自主编程模型

"now available on the library" → 现已加入模型库

"The release also includes a ~27 GiB memory reduction for Qwen3.8 Flash Next on Apple silicon" → 该版本还包括 Qwen3.8 Flash Next 在 Apple Silicon 上的内存占用降低约 27 GiB

"Meanwhile, a critical PR landed that fixes chronic VRAM accounting and GPU splitting bugs that caused models to be incorrectly evicted or unnecessarily spread across GPUs." → 同时，一个关键 PR 已合并，修复了 VRAM 核算和 GPU 分配方面的长期问题，这些问题会导致模型被错误驱逐或在 GPU 间不必要的分散部署。

## 2. Releases & Breaking Changes

"Releases & Breaking Changes" → 版本发布与变更

"New model library entry" → 新增模型库条目

"Apple Silicon memory optimization" → Apple Silicon 内存优化


"No breaking API or config changes in this release window." → 本次发布窗口无破坏性 API 或配置变更。

## 3. New Model & Hardware Support

"New Model & Hardware Support" → 新模型与硬件支持

"65B dense model from Ricursive Intelligence" → Ricursive Intelligence 的 650 亿参数稠密模型

"optimized for agentic coding workflows" → 专为自主编程工作流优化

"Ripple Preview — 65B dense model from Ricursive Intelligence, optimized for agentic coding workflows. Pull with `ollama run ripple-preview`." → Ripple Preview — Ricursive Intelligence 的 650 亿参数稠密模型，专为自主编程工作流优化。使用 `ollama run ripple-preview` 拉取。

## 4. Performance & Optimization

"Performance & Optimization" → 性能与优化

"VRAM Accounting Fixes" → VRAM 核算修复

"Fixes incorrect VRAM prediction, GPU overhead reservation, and unnecessary model splitting across GPUs." → 修复了 VRAM 预测错误、GPU 开销预留以及不必要的跨 GPU 模型拆分问题。

"Resolves issues #19463, #18679, #18349, and #16599." → 解决了 #19463、#18679、#18349 和 #16599。

"MLX Concurrent Generation" → MLX 并发生成

"Allows MLX models to serve multiple simultaneous requests via `OLLAMA_NUM_PARALLEL`." → 允许 MLX 模型通过 `OLLAMA_NUM_PARALLEL` 处理多个并发请求。

"Ready requests share projection and feed-forward work." → 就绪请求共享投影和前馈计算。

"Default remains single-request; higher parallelism requires additional memory per active request." → 默认仍为单请求模式；更高的并行度需要为每个活跃请求分配额外内存。

"Apple Silicon Memory" → Apple Silicon 内存

"Qwen3.8 Flash Next now uses ~27 GiB less memory on Apple silicon compared to prior release." → Qwen3.8 Flash Next 相比上一版本在 Apple Silicon 上内存占用减少约 27 GiB。

"Vulkan/AMD Regressed" → Vulkan/AMD 性能回退

"AMD Radeon RX 6600 XT (Mesa RADV) shows ~30× generation throughput collapse on second identical request with prompt cache enabled in 0.40.8." → AMD Radeon RX 6600 XT (Mesa RADV) 在 0.40.8 中启用 prompt cache 时，第二个相同请求的生成吞吐量下降约 30 倍。

"Under investigation." → 调查中。

## 5. Stability & Regressions

"Stability & Regressions" → 稳定性与回归问题

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 High | **VRAM accounting causing model eviction/splitting** — Models incorrectly evicted, refused to load, or split across GPUs. | **Fixed** | [PR #19632](https://github.com/ollama/ollama/pull/19632) |
| 🔴 High | **Vulkan/AMD ~30× performance collapse** with prompt cache on second identical request (RX 6600 XT, Ubuntu 24.04, 0.40.8). | Open | — |
| 🟡 Medium | **Incorrect VRAM reporting** — `ollama ps` shows ~23 GB vs actual ROCm allocation when using `mtp-accelerator` model. | Open | — |
| 🟡 Medium | **`ollama -v` spurious warnings** — Version flag outputs warning text instead of clean version number. | Closed | — |
| 🟡 Medium | **Windows updater crash** — Panic when >512 processes running (`EnumProcesses` byte-count vs count mismatch). | Open | [PR #19625](https://github.com/ollama/ollama/pull/19625) |
| 🟢 Low | **Qwen3.5 4B thinking-only responses** — Returns only `message.thinking` with no content or tool calls in long conversations. | Open | — |
| 🟢 Low | **Gemma4 `think: false` empty reply** — Empty thought block not closed after tool response. | Open | — |

Severity levels range from critical issues affecting core functionality down to minor problems. Several high-severity items like VRAM accounting and Vulkan performance have been resolved, while others remain under investigation. Medium-priority bugs involve incorrect resource reporting and system crashes under specific conditions, with some already closed and others addressed through pull requests. Low-severity issues primarily affect model output quality and response handling in edge cases.

VRAM headroom has been restored through accounting fixes, which should eliminate model loading failures and unexpected evictions on multi-GPU systems. Multi-GPU efficiency improves as models consolidate rather than splitting across devices, reducing PCIe overhead and inter-GPU latency. Qwen3.8 Flash Next's ~27 GiB memory reduction lowers hardware requirements, allowing re-evaluation of current allocations. The concurrent MLX generation feature is being finalized, so testing `OLLAMA_NUM_PARALLEL > 1` on Apple Silicon with caution around memory usage is recommended. For constrained-memory hosts, explicit session management or workload pacing should replace `OLLAMA_NUM_PARALLEL=1` due to serialization limitations. Vulkan regressions on AMD GPUs running prompt-cached workloads represent a significant performance issue to monitor before upgrading.
</think>


# Ollama 每日简报 — 2026-11-10

## 1. 今日要闻

Ollama v0.40.16 正式发布，带来了 **Ripple Preview**，这是一款来自 Ricursive Intelligence 的 650 亿参数自主编程模型，现已加入模型库。同时本次发布还包括 Qwen3.8 Flash Next 在 Apple Silicon 上内存占用降低约 27 GiB 的优化。此外，一个关键 PR 已合并上线，修复了 VRAM 核算和 GPU 分配方面的顽疾——这些问题会导致模型被错误驱逐或在多 GPU 间不必要的分散部署。

## 2. 版本发布与变更

| 版本 | 说明 |
|------|------|
| **v0.40.16** | 新增模型库条目：`ripple-preview`；Qwen3.8 Flash Next 在 Apple Silicon 上的内存优化 |

本次发布窗口无破坏性 API 或配置变更。

## 3. 新模型与硬件支持

- **Ripple Preview** — 来自 Ricursive Intelligence 的 650 亿参数稠密模型，专为自主编程工作流优化。使用 `ollama run ripple-preview` 拉取。 [ollama/ollama](https://ollama.com/library/ripple-preview)

## 4. 性能与优化

| 主题 | 详情 | PR / Issue |
|------|------|------------|
| **VRAM 核算修复** | 修复了 VRAM 预测错误、GPU 开销预留以及不必要的跨 GPU 模型拆分问题。解决了 #19463、#18679、#18349 和 #16599。 | [PR #19632](https://github.com/ollama/ollama/pull/19632) |
| **MLX 并发生成** | 允许 MLX 模型通过 `OLLAMA_NUM_PARALLEL` 处理多个并发请求。就绪请求共享投影层和前馈计算。默认仍为单请求模式；更高并行度需要为每个活跃请求分配额外内存。 | [PR #19197](https://github.com/ollama/ollama/pull/19197) |
| **Apple Silicon 内存** | Qwen3.8 Flash Next 相比上一版本在 Apple Silicon 上内存占用减少约 27 GiB。 | [v0.40.16 变更日志](https://github.com/ollama/ollama/releases/tag/v0.40.16) |
| **Vulkan/AMD 性能回退** | AMD Radeon RX 6600 XT（Mesa RADV）在 0.40.8 中启用 prompt cache 时，对相同请求的第二次推理生成吞吐量下降约 30 倍。调查中。 | [Issue #19201](https://github.com/ollama/ollama/issues/19201) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|----------|
| 🔴 高 | **VRAM 核算导致模型驱逐/跨 GPU 拆分** — 模型被错误驱逐、拒绝加载或拆分到多个 GPU 上。 | **已修复** | [PR #19632](https://github.com/ollama/ollama/pull/19632) |
| 🔴 高 | **Vulkan/AMD 生成吞吐量下降约 30 倍** — 启用 prompt cache 后对相同请求第二次推理时性能骤降（RX 6600 XT，Ubuntu 24.04，0.40.8）。 | 待解决 | — |
| 🟡 中 | **VRAM 占用显示不准确** — 使用 `mtp-accelerator` 模型时 `ollama ps` 显示约 23 GB，而实际 ROCm 分配更多。 | 待解决 | — |
| 🟡 中 | **`ollama -v` 输出冗余警告信息** — 版本标志输出了警告文本而非干净的版本号。 | 已关闭 | — |
| 🟡 中 | **Windows 更新器崩溃** — 进程数超过 512 时 panic（`EnumProcesses` 的字节数与计数参数不匹配）。 | 待解决 | [PR #19625](https://github.com/ollama/ollama/pull/19625) |
| 🟢 低 | **Qwen3.5 4B 仅返回思考内容** — 长对话中仅返回 `message.thinking`，无实际内容或工具调用。 | 待解决 | — |
| 🟢 低 | **Gemma4 `think: false` 返回空回复** — 工具响应后空的思考块未正确关闭。 | 待解决 | — |

## 6. 对应用开发者的影响

- **VRAM 可用空间恢复** — 如果你一直在多 GPU 环境下与模型加载失败或意外驱逐问题搏斗，PR #19632 中的 VRAM 核算修复应该能解决这些问题。升级后在工作负载中验证确认。
- **多 GPU 效率提升** — 此前不必要拆分到多个 GPU 的模型现在应能聚合到更少设备上，从而节省 PCIe 带宽并减少跨 GPU 协调开销。
- **Apple Silicon 成本下降** — Qwen3.8 Flash Next 的内存占用降低了约 27 GiB，实际上降低了对硬件配置的要求；如果之前为此模型分配了过多资源，请重新评估你的配置。
- **MLX 并行预览** — 并发 MLX 生成工作（PR #19197）正在落地；如果在 Apple Silicon 上运行 Ollama，请谨慎测试 `OLLAMA_NUM_PARALLEL > 1`，注意观察内存压力。
- **内存受限主机避免使用 `OLLAMA_NUM_PARALLEL=1`** — Issue #19262 确认该配置不能实现会话序列化；建议改用显式会话管理或工作负载限流。
- **关注 Vulkan 回归问题** — 如果你在 Linux 上使用 AMD GPU 且有 prompt cache 工作负载，在升级前请密切关注相同请求第二次推理时的 30 倍性能下降问题。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate an English technical report about LiteLLM into Simplified Chinese. I need to:

1. Translate all the text content into Simplified Chinese
2. Preserve the Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, version tags, issue numbers, etc. as-is
4. Use natural technical Chinese register
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

**Section 1: Today's Highlights**
- "ships today" - 今日发布
- "enhanced security verification via Cosign" - 通过 Cosign 增强了安全验证
- "addressing rate-limiting edge cases" - 修复速率限制的边缘情况
- "per-model TPM/RPM budgets" - 按模型 TPM/RPM 的配额
- "improvements to streaming" - 流式传输优化

**Section 2: Releases & Breaking Changes**
- "long-term support release" - 长期支持版本
- "image integrity checks" - 镜像完整性校验
- "RAG ingest now returns managed file IDs" - RAG 摄取引入现在返回托管文件 ID
- "Standalone Rust gateway" - 独立版 Rust 网关
- "fills model capabilities from bundled cost map" - 从捆绑的成本映射表中填充模型能力
- "Boot warning for empty model defaults" - 空模型默认配置启动警告

**Section 3: New Model & Hardware Support**
- "S3 URIs now accepted directly" - 现在可以直接接受 S3 URI
- "zero-cost spend tracking" - 零成本支出追踪
- "shutdown date recorded" - 记录停服日期


- "custom-named deployments" - 自定义名称的部署
- "base_model tokenizer" - base_model 分词器
- "TTS calls now respect" - TTS 调用现在遵循

**Section 4: Performance & Optimization**
- "Reuses upstream chunk choice objects" - 重用上游的 chunk choice 对象
- "Token counting now happens before next turn is admitted" - 令牌计数现在在下一个轮次被接受前进行
- "Prompt-only requests now forwarded to provider count API" - 纯提示请求现

在转发到提供商计数 API
- "Finer-grained rate control" - 更细粒度的速率控制
- "custom request metadata keys" - 自定义请求元数据键

**Section 5: Stability & Regressions**
- "double-counts" - 双重计数
- "counter leakage" - 计数器泄漏
- "outlives its window" - 超出其时间窗口
- "In-memory TPM never refills" - 内存 TPM 永不重填
- "token window does not roll" - 令牌窗口不滚动
- "JSON-RPC id field stripped" - JSON-RPC id 字段被剥离
- "breaks JSON-RPC 2.0 compliance" - 违反 JSON-RPC 2.0 规范
- "Cost tracking broken" - 成本追踪失效
- "mandatory" - 必填
- "causes 400" - 引发 400 错误
- "Extra inputs not permitted" - 不允许额外输入
- "PI I unmasking missing" - PII 脱敏缺失
- "doesn't throw error" - 不抛出错误
- "ships tiktoken caches with CRLF" - 附带 CRLF 格式的 tiktoken 缓存
- "requires network on import" - 导入时需要网络

**Section 6: What This Means for Application Developers**
- "Monitor for" - 关注
- "prematurely" - 过早地
- "one-time budget" - 一次性配额
- "rolling window" - 滚动窗口
- "multi-tenant scenarios" - 多租户场景
- "high-throughput" - 高吞吐量
- "lower CPU utilization" - 更低的 CPU 占用
</think>


# LiteLLM 每日简报 — 2026-11-10

## 1. 今日要点

LiteLLM v1.108.4 LTS 今日发布，通过 Cosign 增强了镜像完整性校验。社区正在积极修复 v3 限速器中的速率限制边缘情况（双重计数、429 响应下计数器泄漏），同时新增了按模型 TPM/RPM 配额、S3 原生 Bedrock 文档处理以及跨 15+ 提供商的流式传输性能优化等功能。

## 2. 版本发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **v1.108.4 LTS** | 新的长期支持版本；`ghcr.io/berriai/litellm:lts` 已指向此版本。增加了镜像完整性校验的 Cosign 验证说明。 | [Release](https://github.com/BerriAI/litellm/releases/tag/v1.108.4) |
| **`fix(proxy)!`** | RAG 摄取引入现在返回托管文件 ID；向量存储文件路由使用团队凭证 | [#50459](https://github.com/BerriAI/litellm/pull/50459) |
| **`fix(gateway)!`** | 独立版 Rust 网关现从捆绑的成本映射表中填充模型能力（修复了 Claude Opus 5.5 和 Claude Code on Sonnet 4.6 的快速模式问题） | [#50780](https://github.com/BerriAI/litellm/pull/50780) |
| **空模型默认配置启动警告** | 仍在使用已废弃的空模型列表行为的密钥/团队将在代理启动时记录警告，为 LiteLLM 2.0.0 移除该默认行为做准备 | [#50720](https://github.com/BerriAI/litellm/pull/50720) |

## 3. 新模型与硬件支持

| 提供商 | 新增内容 | 说明 |
|----------|----------|-------|
| **AWS Bedrock** | Converse API 现在支持直接传入 S3 URI 作为图片、PDF 和视频源 | [#50577](https://github.com/BerriAI/litellm/pull/50577) |
| **Together AI** | `together_ai/elorian-labs/glimpse-1.0` 已加入成本映射表（修复零成本支出追踪问题） | [#50830](https://github.com/BerriAI/litellm/pull/50830) |
| **OpenAI** | 已记录 GPT Image 2 停服日期（2026-11-10）；定价不变 | [#50829](https://github.com/BerriAI/litellm/pull/50829) |
| **Vercel AI Gateway** | 新增为 Decisions 提供商；已解决 400 错误问题，支出现在可正确上报 | [#50642](https://github.com/BerriAI/litellm/pull/50642) |
| **Azure AI Foundry** | 自定义名称的部署现在使用其 `base_model` 分词器进行精确的令牌计数 | [#50734](https://github.com/BerriAI/litellm/pull/50734) |
| **Google (Gemini/Vertex)** | TTS 调用现在遵循部署的 `api_base` 和超时设置 | [#50803](https://github.com/BerriAI/litellm/pull/50803) |

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **全提供商流式传输** | 重用上游 chunk choice 对象而非每个 token 重建 | 降低 DeepSeek、Mistral、xAI、Fireworks、Groq、vLLM、Anthropic、Gemini、Vertex、Bedrock、Ollama、OpenRouter 的 CPU 开销 | [#50786](https://github.com/BerriAI/litellm/pull/50786) |
| **Responses WebSocket** | 令牌计数现在在下一个轮次被接受前进行 | 修复基于 TPM 限额的用量路由下 429 延迟/滞后问题 | [#50730](https://github.com/BerriAI/litellm/pull/50730) |
| **令牌计数** | 纯提示请求现在转发到提供商计数 API（Anthropic、Azure AI、OpenAI、Bedrock） | 相比本地估算提高了准确性 | [#50783](https://github.com/BerriAI/litellm/pull/50783) |
| **按模型预算** | 客户/预算新增 `model_tpm_limit` 和 `model_rpm_limit` 字段 | 在聚合限额外实现更细粒度的速率控制 | [#50797](https://github.com/BerriAI/litellm/pull/50797) |
| **OTel v2** | 团队/密钥现可添加自定义请求元数据键到追踪 | 减少环境变量变更和代理重启需求 | [#50813](https://github.com/BerriAI/litellm/pull/50813) |

## 5. 稳定性与回归问题

| 严重级别 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | **v3 限速器对按模型团队限额双重计数** — `model_per_team` 有效 RPM/TPM 为配置值的一半 | 已关闭 | — |
| **高** | **上游返回 429 后 TPM 计数器超出其时间窗口** — 密钥/团队在低于 `tpm_limit` 时被拒绝 | 待处理 | — |
| **高** | **内存 TPM 永不重填** — 令牌窗口不滚动，仅在 `/key/update` 时重置 | 待处理 | — |
| **中** | **`pass_through_endpoints` 剥离了 JSON-RPC `id` 字段**（违反 JSON-RPC 2.0 规范） | 待处理 | — |
| **中** | **当 `custom_llm_provider=anthropic` 但定价行位于其他提供商下时成本追踪失效** | 已关闭 | — |
| **中** | **`/v1/audio/speech` 对 Qwen3-TTS 调用失败** — `voice` 参数为必填，自定义参数被剥离 | 待处理 | — |
| **中** | **Anthropic `vector_store_ids` 引发 400 错误** — 不允许额外输入 | 待处理 | — |
| **中** | **Presidio PII 脱敏在 `tool_calls[].function.arguments` 中缺失** | 待处理 | — |
| **低** | **使用重复密钥生成密钥时不抛出错误** | 待处理 | — |
| **低** | **Windows 轮子附带 CRLF 格式的 tiktoken 缓存** — 导入时需要网络 | 待处理 | — |

## 6. 对应用开发者的意义

**如果你在生产环境中运行 LiteLLM 代理：**
- 如果你使用的是启用了 `LITELLM_TPM_TOKEN_RESERVATION_ENABLED=true` 的 Redis v3 限速器，请关注 TPM 计数器泄漏问题 — 在上游返回 429 后，配额可能过早触发。
- 如果使用内存缓存（无 Redis），请注意按密钥的 TPM 限额是一次性配额，而非滚动窗口。
- 客户上的新按模型预算字段（`model_tpm_limit`/`model_rpm_limit`）支持多租户场景下需要按模型限速的场景。

**如果你通过 SDK 或网关集成：**
- Bedrock 现已原生支持 S3 URI 处理文档和媒体 — 无需预先转换为 base64。
- 全提供商的流式传输性能改进惠及所有用户；高吞吐量代理部署可预期更低的 CPU 占用。
- Vercel AI Gateway 用户现在可以通过 LiteLLM 路由而不必担心 400 错误。

**如果你正在迁移到 LiteLLM 2.0.0：**
- 运行一次测试启动，看看有多少密钥/团队仍依赖空的 `model_list` 默认配置 — 升级后这些将失去"全部模型"的访问权限。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate an English technical digest about Unsloth AI into Simplified Chinese. I need to:

1. Translate all the content naturally into Chinese
2. Keep all Markdown structure intact
3. Keep URLs, code references, issue numbers, etc. in their original form
4. Use natural technical Chinese register
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through this carefully and translate it section by section.

Key terminology to be consistent with:
- Unsloth - keep as-is (品牌名)
- Studio - keep as-is
- PR/Pull Request - PR 或 拉取请求
- Issues - 工单
- GPU - GPU (keep)
- CPU - CPU (keep)
- VRAM - VRAM (keep)
- CUDA - CUDA (keep)
- ROCm - ROCm (keep)
- GGUF - GGUF (keep)
- FLUX.3 - FLUX.3 (keep)
- int8/INT8 - INT8 (keep)
- Q8_0 - Q8_0 (keep)
- safetensors - safetensors (keep)
- CUDA - CUDA (keep)
- RTX 3060 - RTX 3060 (keep)
- AppControl - AppControl (keep)
- uv - uv (keep)
- CPython - CPython (keep)
- sd-server - sd-server (keep)
- llama-server - llama-server (keep)
- Python - Python (keep)
- Linux - Linux (keep)
- Windows - Windows (keep)
- macOS - macOS (keep)
- Ubuntu - Ubuntu (keep)
- Manjaro - Manjaro (keep)
- KDE - KDE (keep)
- ESLint - ESLint (keep)
- Backend - 后端
- Frontend - 前端


- 修复/修复程序/补丁 - fix/fixes/fixing
- 回归 - regression
- 高危/严重 - High Severity
- 中危 - Medium Severity  
- 低危 - Low Severity
- 吞吐量 - throughput
- 内存溢出/OOM - OOM (Out of Memory)
- 后端 - backend
- 基础设施 - infrastructure
- 内核 - kernel
- 管道/流程 - pipeline
- 调度 - scheduling
- 检测 - detection

Now I'll translate section by section, maintaining the natural flow of a Chinese technical digest while preserving all Markdown formatting and keeping technical terms in their original form.

The first section covers Unsloth Studio's backend infrastructure updates, which include critical improvements to Windows Python recovery, ROCm diffusion pipeline state management, and GGUF reload timing. The team is simultaneously addressing multi-platform GPU detection issues affecting both Linux and Windows environments, alongside refining user experience elements in Settings and chat export functionality.

The second section notes that no releases were published in the past 24 hours, though PR #17330 addresses Windows Python recovery scenarios where Application Control blocks uv's managed Python interpreter.

Instead of failing silently, the system now falls back to a PSF-signed interpreter while preserving policy-block evidence. PR #17008 introduces a new ESLint rule that enforces canonical zero values over zero-pixel declarations in CSS variable fallbacks across 92 source files. For new model and hardware support, FLUX.3's strided cuDNN attention now probes every card in layer splits rather than just the primary one, with secondary card probe failures triggering automatic fallback to stock processors.

On pre-Blackwell GPUs, fine-tuned NVFP4 checkpoints like flux-2-klein-4b-my-finetune-nvfp4.safetensors are no longer incorrectly swapped for official INT8 bases since the routing logic now distinguishes between fine-tuned and official base names. ROCm layer splits apply SDPA kernel guards only after the split is placed and only to cards actually involved, avoiding unnecessary overhead during fallback single-card operations.

For performance, FLUX.3's joint block int8 ConvRot quantization now shares modulated-input computation across Q/K/V and MLP inputs under the span forward, covering all 28 of 33 joint blocks in flux.3 klein. Image renders refused by sd-server due to VRAM constraints on Windows with 8 GB cards automatically retry at half the VRAM budget using Q8_0 GGUF loads. GGUF model reloads wait until the stopped llama-server's VRAM is confirmed free before fitting new models, preventing partial CPU placement that degrades speculative decoding throughput.

ROCm diffusion pipeline unload now restores torch.cuda.tunable state to prevent out-of-scope GEMMs from consulting the diffusion solution table afterward. Long-chat gate blocks on CPU and paint-length metrics with per-area ceilings of 3–3.5× now enforced at 200-turn chat depth. Pickle twin verification applies the #17061 rule where unverified .pt cache entries no longer demote a hosted safetensors twin.

sd.cpp block-split logic only emits --auto-fit off when the binary's --auto-fit accepts on|off values, while builds with bare boolean --auto-fit retain the existing one-card --backend pin. For stability, image generation falls back to CPU/RAM on Windows 11 with RTX 3060 affecting fresh installs, though text generation uses the GPU correctly—likely a regression in CUDA backend initialization. Linux systems are being forced to use CPU instead of GPU as a recent regression, and Hermes launcher credential provisioning has YAML credential parsing issues on Ubuntu 26.04.1 LTS with the 8× accelerator backend.

Medium-severity issues include beta update failures in the desktop application, video upload blocking for custom OpenAI-compatible connections in the web UI, and incorrect title generation logic. Lower-priority bugs involve LAN address binding failures to network bridges on Manjaro KDE, managed account folder browsers returning 403 errors, attachment parsing false-positives where file content matching attachment-note regex triggers false detections, and nuisance files being written to project directories.

For application developers, Windows GPU detection causes image generation to silently fall back to CPU, creating 10–50× slowdowns on mid-range GPUs like the RTX 3060. Linux GPU fallback is a recent regression forcing CPU inference even when CUDA is available, directly impacting throughput-sensitive pipelines. GGUF VRAM reload timing is another area of concern.

Prior to the fix, speculative decoding could degrade 2–5× when model reloads landed partially on CPU while VRAM sat free. Windows Python policy blocks prevent runtime discovery on fresh installs with strict AppControl policies, though PR #17330 introduces a graceful fallback to PSF-signed interpreter. FLUX.3 multi-GPU layer splits now validate all cards with cuDNN attention probes—secondary card failures safely fall back to prevent silent quality degradation. Long-chat memory gates were previously unthrottled, allowing chat-length-driven memory growth up to 2.5× at 200 turns.

The memory gate now blocks at a 3–3.5× ceiling, providing more predictable memory bounds and reducing OOM kills for extended conversation loops. Image batch rendering on constrained VRAM automatically retries renders at half budget, improving success rates for Q8_0 GGUF image models without API changes. Upcoming UX improvements include model hub labels and rename functionality for multi-model workflows, custom templates for Image-LoRA training to reduce repetitive hyperparameter entry, and batch chat creation for video segmentation workflows.
</think>


# Unsloth 每日简报 — 2026-11-10

## 1. 今日要闻

Unsloth Studio 后端基础设施今日迎来重要加固，涉及 Windows Python 恢复机制、ROCm 扩散管道状态管理以及 GGUF 重新加载时序等多个关键模块。与此同时，团队正在积极处理多平台 GPU 检测缺陷（Linux 强制使用 CPU、Windows 图片生成回退至内存），同时推进设置面板和对话导出模块的体验优化工作。

## 2. 版本发布与破坏性变更

过去 24 小时内无新版本发布。

- **#17330** — *Windows Python 恢复机制*：当 Windows 应用程序控制策略拦截 uv 托管的 Python 时，Unsloth 现已保留策略拦截证据，并优雅降级至 PSF 签名解释器，而非静默失败。([PR #17330](https://github.com/unslothai/unsloth/pull/17330))
- **#17008** — 前端 ESLint 规则新增：`local/no-px-zero-fallback` 要求 CSS 变量回退值中统一使用 `0` 而非 `0px`，现已覆盖 92 个源文件。([PR #17008](https://github.com/unslothai/unsloth/pull/17008))

## 3. 新模型与硬件支持

- **#17341** — FLUX.3 跨步 cuDNN 注意力机制现已对**每一张**参与层分裂的显卡进行探测，而非仅探测主卡。副卡探测失败后将统一回退至标准处理器。([PR #17341](https://github.com/unslothai/unsloth/pull/17341))
- **#17343** — Blackwell 之前的 GPU 不再将微调 NVFP4 权重（如 `flux-2-klein-4b-my-finetune-nvfp4.safetensors`）错误替换为官方 INT8 基座模型。路由逻辑现已能够区分微调权重与官方基座模型的文件命名。([PR #17343](https://github.com/unslothai/unsloth/pull/17343))
- **#17347** — ROCm 层分裂逻辑：SDPA 内核防护现仅在分裂完成放置且仅针对实际使用的显卡应用，避免了对单卡回退加载场景施加不必要的防护开销。([PR #17347](https://github.com/unslothai/unsloth/pull/17347))

## 4. 性能与优化

- **#17337**（已合并）— FLUX.3 联合块 INT8 ConvRot 量化现已通过跨度前向机制在 Q/K/V 与 MLP 输入之间共享调制输入计算，覆盖 flux.3 klein 全部 33 个联合块中的 28 个。([PR #17337](https://github.com/unslothai/unsloth/pull/17337))
- **#17339** — sd-server 因 VRAM 不足而拒绝的图片渲染请求（如 8 GB 显存的 Windows 设备）现已自动以减半的显存预算重试，目标是 `Q8_0` GGUF 加载。([PR #17339](https://github.com/unslothai/unsloth/pull/17339))
- **#17345** — GGUF 模型重新加载现等待被停止的 llama-server 显存确认释放后再拟合新模型，防止部分权重错误落入 CPU 导致投机解码吞吐量下降 2–5 倍。([PR #17345](https://github.com/unslothai/unsloth/pull/17345))
- **#17340** — ROCm 扩散管道卸载现恢复 `torch.cuda.tunable` 状态，防止后续无关 GEMM 调用错误查询扩散算子调优表。([PR #17340](https://github.com/unslothai/unsloth/pull/17340))
- **#17336**（已合并）— 长对话内存门控现对 CPU 利用率和绘制长度指标施加阻塞机制（此前仅为上报），200 轮对话深度下单区域上限 3–3.5 倍现已强制生效。([PR #17336](https://github.com/unslothai/unsloth/pull/17336))
- **#17342** — Pickle 孪生验证现应用 `#17061` 规则：未经验证的 `.pt` 缓存条目不再降级同目录下的 `safetensors` 孪生文件，由 `UNSLOTH_REUSE_CACHED_PICKLE_WEIGHTS` 和 `UNSLOTH_PREQUANT_PREFER_SAFETENSORS` 环境变量控制。([PR #17342](https://github.com/unslothai/unsloth/pull/17342))
- **#17346** — sd.cpp 分块逻辑现仅在二进制文件的 `--auto-fit` 参数接受 `on|off` 取值时才输出 `--auto-fit off`；对于仅有布尔型 `--auto-fit` 参数的构建则保留既有的单卡 `--backend` 固定策略。([PR #17346](https://github.com/unslothai/unsloth/pull/17346))

## 5. 稳定性与回归问题

**高危**

- **【缺陷】Windows 11 RTX 3060 图片生成回退至 CPU/内存** — 影响全新安装环境；文本生成正常调用 GPU。macOS M1 Pro 上不可复现。([Issue #16803](https://github.com/unslothai/unsloth/issues/16803))
- **【缺陷】Linux 强制使用 CPU 而非 GPU** — 2026-11-09 观测到；疑似 GPU 检测逻辑或 Transformers 层选择机制回归。([Issue #17235](https://github.com/unslothai/unsloth/issues/17235))
- **【缺陷】Hermes 启动器 YAML 凭证配置中 API Key 解析不正确** — 影响 Ubuntu 26.04.1 LTS + 8× 加速器后端配置。([Issue #17315](https://github.com/unslothai/unsloth/issues/17315))

**中危**

- **【缺陷】Beta 更新失败** — Manjaro KDE 环境下桌面应用更新机制失效。([Issue #16897](https://github.com/unslothai/unsloth/issues/16897))
- **【缺陷】自定义 OpenAI 兼容连接视频上传被拦截** — 影响 macOS 上的 Studio Web UI。([Issue #17295](https://github.com/unslothai/unsloth/issues/17295))
- **【缺陷】重新生成标题仅复制上一条消息片段** — 标题生成逻辑缺陷。([Issue #17332](https://github.com/unslothai/unsloth/issues/17332))

**低危 / 体验类**

- **【缺陷】LAN 地址无法绑定至网络桥接** — Manjaro KDE 桌面应用无法绑定至 LAN 桥接地址。([Issue #17017](https://github.com/unslothai/unsloth/issues/17017))
- **【缺陷】托管账户自定义文件夹浏览器返回 403** — 托管账户无法打开自定义文件夹浏览器；安装所有者账号不受影响。([Issue #17292](https://github.com/unslothai/unsloth/issues/17292))
- **【缺陷】对话附件解析误报** — 文件内容若匹配附件备注正则模式则触发错误的第二个附件检测。([Issue #16913](https://github.com/unslothai/unsloth/issues/16913))
- **【缺陷】工作目录中出现 nul 文件** — 项目目录下被写入 NUL 文件。([Issue #16991](https://github.com/unslothai/unsloth/issues/16991))

## 6. 对应用开发者的影响

| 关注点 | 影响范围 | 应对建议 |
|---|---|---|
| **Windows GPU 检测** | 图片生成工作负载可能静默回退至 CPU，在 RTX 3060 等中端 GPU 上导致 10–50 倍的性能下降。 | 监控 CPU 单设备部署日志；等待针对 CUDA 后端初始化路径的修复。 |
| **Linux GPU 回退** | 新近回归问题，即使 CUDA 可用也强制使用 CPU 推理；直接影响对吞吐量敏感的处理流程。 | 关注 [Issue #17235](https://github.com/unslothai/unsloth/issues/17235) 的热修复时间表。 |
| **GGUF VRAM 重新加载时序** | 修复前，若模型重新加载时显存尚未完全释放导致部分权重落入 CPU，投机解码性能将下降 2–5 倍。 | [PR #17345](https://github.com/unslothai/unsloth/pull/17345) 后重新加载调度应趋于稳定；持续监控 `llama-server` 显存指标。 |
| **Windows Python 策略拦截** | 严格 AppControl 策略环境（如企业 BYOD 设备）上的全新 Windows 安装可能出现运行时发现失败。 | [PR #17330](https://github.com/unslothai/unsloth/pull/17330) 引入了向 PSF 签名解释器的优雅降级；若 uv 被拦截，请确保 PATH 中存在兼容的 CPython。 |
| **FLUX.3 多卡层分裂** | cuDNN 注意力探测现已验证所有参与显卡；副卡失败时安全回退，避免静默质量劣化。 | 无需操作；在 ROCm 多卡环境中验证 `diffusion_flux3_attn.install` 日志是否显示成功的多卡探测。 |
| **长对话内存门控** | 此前，200 轮对话时驱动的内存增长（2.5 倍）未受节流；现已强制限制在 3–3.5 倍上限。 | 若运行超长对话循环（>150 轮），预期内存边界更加可预期，OOM 终止将减少。 |
| **受限显存图片批量渲染** | 8 GB 显存的 GPU 现已自动以减半预算重试渲染，`Q8_0` GGUF 图片模型成功率提升。 | 无 API 变更；重试过程透明；关注 sd-server 日志中的 `VRAM under budget` 条目。 |

**即将推出的体验改进（需提前规划）：**

- 模型管理（标签、重命名、备注）功能（[Issue #15038](https://github.com/unslothai/unsloth/issues/15038)）将改善多模型工作流组织能力。
- Image-LoRA 训练自定义模板（[Issue #16979](https://github.com/unslothai/unsloth/issues/16979)）将减少重复的超参数配置操作。
- 批量创建对话功能（[Issue #17333](https://github.com/unslothai/unsloth/issues/17333)）将简化长视频分段处理工作流。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*