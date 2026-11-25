# AI 基础设施日报 2026-11-25

> 生成时间: 2026-11-25 05:00 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the English technical report into Simplified Chinese, following specific rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences around the whole output
- Preserve the Markdown structure exactly
- Keep URLs, project names, version tags, issue/PR references, numbers, dates verbatim
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the technical accuracy and natural Chinese flow.

Let me go through it section by section:

**Title and date:**
# AI 基础设施生态系统 — 跨项目对比报告
**Digest Date: 2026-11-25**

**Section 1: Ecosystem Overview**
翻译生态系统概述，保持技术术语准确

Let me translate each section carefully now.
</think>


# AI 基础设施生态系统 — 跨项目对比报告
**Digest Date: 2026-11-25**

---

## 1. 生态系统总览

AI 推理基础设施生态系统正处于**多层次收敛成熟**阶段。vLLM 和 SGLang 都在推进 1.0/1.x 稳定性版本，标志着服务引擎层已度过实验期——API 变动减少，更注重可靠性保障。与此同时，llama.cpp 持续扩展其异构硬件支持范围（ARMv8.0、SVE、Hexagon HMX、Intel Vulkan），巩固其作为非 NVIDIA 环境首选本地运行时的地位。LiteLLM 作为多 Provider 网关层，日前已落地 OAuth2 支持和按部署粒度的代理路由。Unsloth 则定位于训练/微调层，在 Studio 中新增了多 GPU 并行能力，同时扩大了对 Inkling 2 Mini 等新架构的推理支持。纵观五个项目，** Agent 服务能力**（可编程 KV 缓存、工具调用、结构化输出、前缀缓存）是最主要的功能驱动方向，体现了整个行业从单纯对话补全向长程多轮 Agent 工作流演进的大趋势。

---

## 2. 活跃度对比

| 项目 | Issues（open） | PRs（open） | Release（24h） | 亮点 |
|---------|--------------|------------|----------------|---------|
| **vLLM** | 117 | ~500 | 0 | 积压最多；RFC 流程最活跃 |
| **SGLang** | ~40 | ~50 | 0 | 1.0 release 推进中；Rust API 栈已合入 |
| **llama.cpp** | ~20 | ~30 | 0（稳定版 v1.0.0） | 体量最精简；无版本号变更但合入 9 个 commits |
| **LiteLLM** | ~30 | ~30 | 5（1.112.0-rc.1 + 3 个稳定版 + LTS） | 发布频率最高；RC 迭代周期活跃 |
| **Unsloth** | ~20 | ~20 | 1（v0.1.924-beta） | Inkling 2 Mini 支持 + 多 GPU Studio 同步上线 |

**观察：**
- **vLLM** 积压量最大，与其作为众多下游项目参考推理引擎的角色一致。
- **SGLang** 和 **llama.cpp** 积压量相当，但迭代模式差异明显——SGLang 倾向于整块集成大型特性栈（Rust API、Spec Decode），而 llama.cpp 以高频率推送定向内核优化。
- **LiteLLM** 发布节奏最快，RC → Stable → LTS 在数天内完成轮转，这与其作为网关层、高优先级的回归风险有关。
- **Unsloth** 是唯一一个聚焦训练/微调的项目，体量小意味着定位更专注（消费级 GPU 上的 LoRA/QLoRA）。

---

## 3. 模型支持竞速

| 模型 / 架构 | vLLM | SGLang | llama.cpp | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|---------|---------|
| **Inkling 2 / Inkling 2 Mini** | 🔶（XPU 工作进行中） | 🔶（MI35x 后端） | ✅（Inkling 2 Mini，v0.1.924） | — | ✅（v0.1.924，微调） |
| **GLM-5.3 / GLM-5.2** | 🔶（性能 follow-up） | 🔶（Flash-Next） | — | — | — |
| **Qwen3-ASR** | 🔶（Ourk Fourier 2B） | ✅（HuggingFace 格式） | — | — | — |
| **Qwen3.5 / Qwen3.8** | 🔶（性能优化） | 🔶（Flash-Next） | — | ✅（通过 API 路由） | — |
| **Hy4（腾讯）** | — | — | ✅（v0.1.924） | — | — |
| **LingBot / Ling-3.2** | — | 🔶（Video MoE，图像条件化） | — | — | — |
| **LTX-2.5（视频）** | — | — | — | — | ✅（6 GiB 起，之前为 8 GiB） |
| **Gemma 4** | — | — | — | ✅（JSON Schema 修复待合入） | — |
| **Cohere 系列（thinking tokens）** | — | — | — | 🔶（flush 修复中） | — |
| **MiniMax-H3 / H3** | — | 🔶（图像↔视频切换） | ✅（via llama.cpp） | — | ✅（视频生成） |
| **Mooncake EP / Expert Parallel** | ✅（all-to-all 后端） | ✅（transfer sharding） | — | — | — |

**排行榜速览：**
- **近 24 小时新架构最多：** vLLM 与 SGLang 并列（均涉及 Inkling 2、GLM-5.3、Mooncake EP）
- **异构覆盖最广：** llama.cpp（Hy4、Inkling 2 Mini、LTX-2.5、MiniMax-H3 全部覆盖非 NVIDIA 后端）
- **新架构微调首发：** Unsloth（Inkling 2 Mini 微调为首家；本列表中无其他项目涉足微调）
- **网关路由覆盖最全：** LiteLLM（通过 API 覆盖所有 Provider；模型支持取决于上游 Vendor）

---

## 4. 性能前沿

五个项目的优化工作围绕五个方向展开，各有侧重：

### KV 缓存与内存管理
- **vLLM** 在此领域投入最大，三条 RFC 并行推进（#57103、#37003、#66782），分别针对可编程 KV 策略、上下文感知保留和请求级分层卸载。这是当前投入最密集的方向。
- **llama.cpp** 上线了按 size 划分的 CUDA Graph arenas，用于解码批次优化。
- **SGLang** 文档化了 NPU prefill delayer 调参旋钮，在前缀缓存场景下 TPOT 提升约 30%。
- **Unsloth** 改进了 GGUF 放置重试逻辑，减少 host-RAM 溢出的概率。

### 量化与算子融合
- **vLLM** 面临最高风险的变更：RFC #65560 拟将整个 Marlin 内核体系替换为 Humming，涉及 INT4/INT8/FP8/MXFP4/MXFP6 在 dense 层和 MoE 层上的全部实现——一次历时数月的迁移。
- **llama.cpp** 合入了 CUDA RMSNorm 融合（ RMS_NORM + MUL + MROPE/IMROPE）、CUDA MMQ stream-k 列tile外层调度，以及 SYCL NVFP4 MoE 优化。
- **SGLang** 将 `silu_and_mul_clamp` 融合进 MoE 的 FP8 per-token-group 量化路径（`swiglu_limit`）。
- **llama.cpp** 新增 custom op API（#33000），允许按后端注册内核而无需重复算子定义。

### 分布式与专家并行
- **vLLM** 集成 Mooncake EP all-to-all 后端，用于 MoE 模型的专家并行通信。
- **SGLang** 按 bootstrap room 对 Mooncake transfer 做分片，避免 attention TP>1 时的单队列瓶颈。
- **Unsloth** 在 Studio 中引入多 GPU 训练后端（DDP、FSDP2、TP、PP、CP、EP）。

### 投机解码
- **vLLM** 存在一个关键 bug：DFlash 在 TP>1 时接受率急剧下降（#66387）。ModelOpt NVFP4 draft 在 SM120 上也因 CUDA Graphs 而卡死。
- **llama.cpp** 通过 C API（#27788）对外暴露多序列投机解码和 MTP，使绑定作者能够构建高级采样策略。
- **SGLang** 修复了 DFlash 内存问题（验证 page-table、custom-mask、KV-materialize workspace），现已支持 262K 上下文（block_size=16）。

### 后端多样性
- **llama.cpp** 在非 NVIDIA 硬件方向领先：ARMv8.0 CPU 内核、SVE q5 内核、ggml-hexagon 2.0（含 HMX integer 模式）、Vulkan IQ 网格表、OpenVINO KV 解码改进，以及 SYCL 后端工作。
- **vLLM** 和 **SGLang** 均在推进 Intel XPU 支持（Spec decode UT 通过、Inkling 2 集成）。
- **Unsloth** 修复了 AMD ROCm bf16 检测和 Strix Halo mmap carve-out 问题。

---

## 5. 层次定位

五个项目在技术栈中各有明确位置，且边界正在逐步重叠：

```
┌─────────────────────────────────────────────────────┐
│  APPLICATION / AGENT LAYER                          │
│  （Unsloth Studio、SGLang 前端、LiteLLM UI）         │
├─────────────────────────────────────────────────────┤
│  GATEWAY / ROUTING LAYER                            │  ← LiteLLM
│  （多 Provider、虚拟密钥、消费追踪、                  │
│   OAuth2、按部署粒度路由）                           │
├─────────────────────────────────────────────────────┤
│  SERVING ENGINE LAYER                               │  ← vLLM、SGLang
│  （KV 缓存、批处理、投机解码、                       │
│   多 GPU 并行、量化、RL 支持）                       │
├─────────────────────────────────────────────────────┤
│  LOCAL RUNTIME LAYER                                │  ← llama.cpp
│  （异构后端、CPU/移动端、                            │
│   custom ops、GGUF 导出、C API）                     │
├─────────────────────────────────────────────────────┤
│  TRAINING / FINE-TUNING LAYER                       │  ← Unsloth
│  （LoRA/QLoRA、多 GPU 并行、                        │
│   GGUF 导出、视频生成）                              │
└─────────────────────────────────────────────────────┘
```

**核心差异：**
- **vLLM vs. SGLang**：同属服务引擎层。vLLM 更保守、流程驱动（RFC 流程、更宽泛的硬件路线图）。SGLang 更激进于集成（Rust API 栈、NPU perf 旋钮、FlashInfer graph capture、Mooncake EP）。
- **llama.cpp vs. vLLM/SGLang**：llama.cpp 是本地运行时，不做分布式服务管理。其优势在于能在笔记本、手机和非 NVIDIA 硬件上运行。vLLM/SGLang 是数据中心推理服务器。
- **LiteLLM**：网关/代理层，置于任何引擎之前（包括 llama.cpp 服务的模型）。其价值在于统一 API 抽象、消费追踪和多 Provider 路由——本身不参与推理。
- **Unsloth**：唯一聚焦训练/微调的项目。近期向多 GPU 并行和 GGUF 导出的延伸模糊了与 serving 的边界，但其核心价值主张仍是梯度计算而非推理。

---

## 6. 趋势信号

### 🔴 基础设施工程师 — 紧急

| 信号 | 项目 | 影响 |
|--------|----------|-------------|
| **MCP 网关回归问题** | LiteLLM | v1.108.0+ 版本在 `tools/list` 上阻塞 18–50 秒。若通过 LiteLLM 在 Open WebUI 中使用 MCP，请停留在 v1.107.x 直到 #50065 修复上线。 |
| **DFlash 投机解码在 TP>1 时失败** | vLLM | 多 GPU vLLM 部署中投机解码不可靠。在 #66387 修复前，避免在 TP>1 场景使用 DFlash。 |
| **速率限制下 Redis 连接泄漏** | LiteLLM | 同步 `Router.completion` 在 rpm/tpm 限制下每次调用泄漏一个 Redis 连接。请在受影响部署上监控 Redis 连接数。 |
| **llama.cpp CUDA 13 portable 版无运行时** | llama.cpp | 静默回退到 CPU。若使用 portable 构建，请在运行时检查 CUDA 可用性。 |

### 🟠 技术决策者 — 近期需关注

| 信号 | 项目 | 影响 |
|--------|----------|-------------|
| **Humming 替换 Marlin** | vLLM | vLLM 历史上最大规模的量化变更已处于 RFC 阶段。使用 INT4/INT8 GPTQ/AWQ、FP8、MXFP 格式的团队应开始影响评估。预计时间线：2027 年 Q1。 |
| **SGLang 1.0 发布** | SGLang | 1.0 稳定性版本可能引入 0.5.x 的 breaking change。请锁定 API 预期或预留迁移时间。 |
| **Agent KV 缓存 API 即将落地** | vLLM | 三条 RFC 并行推进，意味着多轮 Agent 的 KV hint API 近在眼前。构建长上下文 Agent 系统的团队需要提前调整架构规划。 |
| **Intel XPU 逐步可用** | vLLM、SGLang、llama.cpp | Spec decode UT 通过（vLLM）、Inkling 2 集成（SGLang）、Vulkan 改进（llama.cpp）。Intel Arc GPU 有望在 2027 年中成为可信的部署目标。 |
| **Unsloth 多 GPU 训练进入 Studio** | Unsloth | 多 GPU 微调现已对非 ML 工程师可用（通过 Studio）。这大幅降低了 LoRA 定制化的门槛。 |

### 🟡 应用 / Agent 开发者 — 中期参考

| 信号 | 项目 | 影响 |
|--------|----------|-------------|
| **按部署粒度的上游代理路由** | LiteLLM | 多区域 LLM 部署现在可以通过区域代理实现按部署粒度路由，无需修改全局 `HTTP_PROXY`。对全球分布式 Agent 场景有直接价值。 |
| **多序列投机解码 C API** | llama.cpp | 绑定作者（LM Studio、ollama 等）无需内部 API 依赖即可暴露投机解码功能。预计各 llama.cpp 运行时将陆续提供此能力。 |
| **SVE 和 ARMv8.0 CPU 内核** | llama.cpp | ARMv8.0（无 dotprod）和 SVE 硬件上的移动端和边缘推理现已针对 Q4_0/Q8_0 优化。对端侧 AI 应用有直接意义。 |
| **按后端的 custom ops API** | llama.cpp | 支持按后端优化内核而无需算子重复定义。当前仅 CPU 端实现，但为未来 CUDA/HIP/Metal 内核优化铺平了道路，抽象层保持干净。 |
| **Mooncake EP 集成** | vLLM、SGLang | Mooncake 上的专家并行 MoE 通信正在两个引擎中收敛。运行大型 MoE 模型（DeepSeek-V4.1 级别）的团队应评估其在多节点扩展中的价值。 |

---

*跨项目对比报告数据来源为日频摘要 — 2026-11-25。各项目摘要独立采自对应 GitHub 仓库。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the technical digest from English to Simplified Chinese. I need to:

1. Translate the content while maintaining the exact Markdown structure
2. Keep all technical identifiers, URLs, issue numbers, project names as-is
3. Use natural technical Chinese register
4. Output ONLY the translation, no preamble or explanation
5. No markdown fences around the output

Let me translate section by section carefully.

Key terms to be consistent with:
- vLLM - keep as-is
- RFC - keep as-is (it's widely used in Chinese tech communities)
- TP (tensor parallel) - keep as-is or use 張量並行
- SM120, SM12x - keep as-is
- Marlin/Humming - keep as-is (these are code/project names)
- DFlash - keep as-is
- KV Cache - KV 缓存
- MoE - MoE (keep as-is, widely used)
- CUDA graph - CUDA 图
- FP8/MXFP8 etc - keep as-is
- GPU/CPU - keep as-is
- Prefill/speculative decoding - 预填充/投机解码
- PR/issue - PR/Issue (keep as-is in Chinese tech context)
- ROCm - ROCm
- Intel XPU - Intel XPU
- Inkling 2 - Inkling 2
- e4m3 - keep as-is
- safetensors - keep as-is

Let me translate carefully:

Title: vLLM Daily Digest — 2026-11-25
→ vLLM 每日简报 — 2026-11-25

Section 1: Today's Highlights
→ 今日要点

Section 2: Releases & Breaking Changes
→ 发布与破坏性变更

Section 3: New Model & Hardware Support
→ 新模型与硬件支持


Section 4: Performance & Optimization
→ 性能与优化

Section 5: Stability & Regressions
→ 稳定性与回归问题

Section 6: What This Means for Application Developers
→ 应用开发者须知

Now I'll work through the detailed translations of each section, maintaining the technical accuracy and natural Chinese phrasing.
</think>


# vLLM 每日简报 — 2026-11-25

## 1. 今日要点

过去 24 小时内没有新版本发布，但 vLLM 项目在多个方向上取得进展：一项重要的 RFC 提议在新 **Humming** 内核栈上全面替换遗留的 Marlin 量化内核（覆盖所有 NVIDIA 架构，#65560），与此同时，一个影响 **DFlash 投机解码在张量并行 > 1 时崩溃**（#66387）的严重 bug 正在排查中。硬件方面，**Intel XPU 支持日趋成熟**，spec-decoding 单元测试已落地（#69653），Inkling 2 集成工作也在推进（#69712）。

---

## 2. 发布与破坏性变更

| 项目 | 详情 | 链接 |
|------|------|------|
| 无新版本 | 过去 24 小时内无发布 | — |

---

## 3. 新模型与硬件支持

| 类别 | 项目 | 状态 | 链接 |
|------|------|------|------|
| **量化** | RFC：用 **Humming** 内核替换 Marlin — 覆盖 INT4/INT8 GPTQ/AWQ、FP8、MXFP8、MXFP4、NVFP4、MXFP6 及激活函数，支持 dense 层和 MoE 层 | RFC 进行中 | [#65560](https://github.com/vllm-project/vllm/issues/65560) |
| **量化** | RFC：新增顶层 `--lm-head-config` 以支持 draft/verify LM head 的每架构默认配置 | RFC 进行中 | [#68711](https://github.com/vllm-project/vllm/issues/68711) |
| **硬件** | Intel **XPU** — spec decode 单元测试已启用（25 + 99 + 26 测试用例通过） | PR 已合并 | [#69653](https://github.com/vllm-project/vllm/pull/69653) |
| **硬件** | **Inkling 2 on Intel XPU**（Arc Pro B60/B70）— 共享 `inkling2/common/` 实现及 PR 系列 | 积极开发中 | [#69712](https://github.com/vllm-project/vllm/issues/69712) |
| **硬件** | ROCm **AITER MXFP8 Linear 内核** for CDNA4 (gfx950) | PR 进行中 | [#64089](https://github.com/vllm-project/vllm/pull/64089) |
| **硬件** | ROCm **MI350P** (gfx950, 128 CUs) 单卡解码 via k-pass 任务分解 | Feature PR 进行中 | [#63340](https://github.com/vllm-project/vllm/issues/63340) |
| **模型** | **Oruk Fourier 2B** — 部署配方已添加（2.04B speech-to-text fine-tune，基于 Qwen3-ASR-1.7B） | PR 进行中 | [#69804](https://github.com/vllm-project/vllm/pull/69804) |
| **模型** | **GLM-5.3** 性能优化后续（与 GLM-5.2 相同的 `glm_moe_dsa` 基础实现） | 持续进行中 | [#57406](https://github.com/vllm-project/vllm/issues/57406) |

---

## 4. 性能与优化

| 领域 | 变更 | 详情 | 链接 |
|------|------|------|------|
| **KV 缓存** | RFC：请求级 KV 提升机制，支持 pin-until-load 语义 | 提升分层 KV offload 可靠性 | [#66782](https://github.com/vllm-project/vllm/issues/66782) |
| **KV 缓存** | RFC：可编程 KV 缓存，agentic serving 场景可组合策略 | .provider-neutral 抽象层 | [#57103](https://github.com/vllm-project/vllm/issues/57103) |
| **KV 缓存** | RFC：上下文感知 KV 缓存保留 API（优先级驱逐策略） | >90% 的 agent token 为重复使用的前缀 | [#37003](https://github.com/vllm-project/vllm/issues/37003) |
| **Prefill 调度** | 跨 DP 的 prefill hold 机制，基于代价决策 | MoE 模型在 DP + EP 配置下 | [#66927](https://github.com/vllm-project/vllm/pull/66927) |
| **Prefill 调度** | 无数据并行的 prefill hold | 扩展至单节点场景 | [#68899](https://github.com/vllm-project/vllm/pull/68899) |
| **张量并行** | 将 FlashInfer 的 `PcieIpcAllGatherWorkspace` 接入 `CudaCommunicator.all_gather` | 针对延迟敏感的 TP gather（如 DeepSeek-V4.1） | [#65359](https://github.com/vllm-project/vllm/issues/65359) |
| **MoE** | 将 SM100 Triton fallback 阈值提升至 32 tokens（TritonOrCutlasExperts） | 从原始 8-token 阈值重新调优 | [#66562](https://github.com/vllm-project/vllm/pull/66562) |
| **MoE** | **Mooncake EP** all-to-all 后端集成 | Expert 并行通信 | [#58375](https://github.com/vllm-project/vllm/pull/58375) |
| **Spec Decoding** | FP8 DSpark draft via speculative config（ROCm/Muse Spark） | 带宽优化思路 | [#67340](https://github.com/vllm-project/vllm/pull/67340) |
| **Inkling2** | 适用于 SM12x 低 M 投影的可选 e4m3 解码权重 | 解码阶段 ≤16 行时权重减半 | [#69802](https://github.com/vllm-project/vllm/pull/69802) |
| **模型加载器** | 可选的 GPU staging 模式接入 safetensors 加载器（`--model-loader-extra-config '{"gpu_staging": true}'`） | 直接将 tensor 读取到 GPU | [#69803](https://github.com/vllm-project/vllm/pull/69803) |
| **ROCm/FP8** | Muse Spark FP8 dense linears 基于调优内核（online fp8_per_channel） | 两个 PR 叠加 | [#67381](https://github.com/vllm-project/vllm/pull/67381) |
| **渲染** | Rust Render 配置指纹机制，用于稳定的 token ID 对比 | 承接 #65503 的下游工作 | [#68940](https://github.com/vllm-project/vllm/pull/68940) |

---

## 5. 稳定性与回归问题

| 严重级别 | 问题 | 描述 | 状态/解决方案 |
|----------|-------|-------------|---------------------|
| **🔴 Critical** | #66387 | **DFlash 在 TP > 1 时接受率崩溃** — TP1 正常，TP>1 时 XiaomiMiMo/MiMo-V2.6-Flash-MOPD 失败 | 影响 v0.33.0 及 nightly 版本 |
| **🔴 Critical** | #52540 | **ModelOpt NVFP4 on SM120（RTX PRO 6000 Blackwell）** 在持续负载下死机或卡死，启用 CUDA graphs 时必现 | 在 v0.26.0 + nightly 可复现 |
| **🔴 Critical** | #69137 | **KV transfer scheduler 崩溃** — `_update_from_kv_xfer_finished` 无条件释放 block；使用 LMCacheMPConnector 可稳定触发断言 | 活跃 bug |
| **🟡 High** | #38696 | **Qwen3.5 结构化输出** 使用 `json_schema` 时输出乱码空格 | vLLM nightly（2026-03-27 起） |
| **🟡 High** | #69137 | 请求 abort 后进行中的 KV 传输未取消 | 活跃 bug |
| **🟡 High** | #52150 | **GLM-5.2-FP8 on ROCm** — GPU 空闲后首次请求输出乱码；分段 CUDA graph 冷启动回放破坏 prefill | 临时方案：`cudagraph_mode=FULL_DECODE_ONLY` |
| **🟡 High** | #51986 | **MNNVL allreduce** 仅 IB 多节点场景下 workspace 初始化挂起 30s 并泄漏 GPU 内存 | 已修复（PR 待查） |
| **🟡 High** | #69320 | **Transformers backend: OmniASR** 启动失败 — `padding_mask` 保留在 CPU 但传入 `get_audio_features` | 已修复 |
| **🟢 Medium** | #68870 | CUDA graph capture 时 `execute_model` 的输入/输出形状不匹配 | 由 [#69795](https://github.com/vllm-project/vllm/pull/69795) 修复 |

---

## 6. 应用开发者须知

| 要点 | 说明 |
|----------|--------|
| **量化方案即将迁移** | Humming 替换 Marlin 是一项重大变更——如果你使用 INT4/INT8 GPTQ/AWQ、FP8 或 MXFP 格式，请持续关注 #65560。变更将影响 dense 模型和 MoE 模型的 serving 流程。 |
| **投机解码在多卡场景下仍不稳定** | DFlash 和 NVFP4 draft LM-head 校验在 TP>1 时存在已知问题。在修复上线前，投机解码场景建议使用 TP1。 |
| **Agentic serving 是当前设计重点** | 多项 RFC（#57103、#37003、#53421、#52113）正在收敛至可编程 KV 缓存语义。如果你正在构建多轮 agent 场景，KV hint API 的第一方支持即将到来。 |
| **Intel XPU 正成为可用选项** | Spec decode UTs 通过 + Inkling 2 集成意味着 Intel Arc GPU 有望在 2027 年成为可信的部署目标。 |
| **模型加载现可绕过 CPU** | safetensors 加载器新增的 GPU staging 选项（`gpu_staging: true`）可在高带宽系统上显著降低权重加载延迟。 |
| **ROCm 质量持续改善** | AMD 的周度 Kimi Vendor Verifier CI（#66699）和 AITER v0.1.30 升级（#69442）预示着更好的 AMD 稳定性保障。 |

---

*简报数据来源：github.com/vllm-project/vllm — 2026-11-25*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese. I need to:

1. Output ONLY the translation, no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code spans, project names, issue references verbatim
4. Use natural technical Chinese register

Let me translate section by section:

Title: "SGLang Daily Digest — 2026-11-25"
→ SGLang 每日摘要 — 2026-11-25

## 1. Today's Highlights

SGLang 开发在多个方向上持续活跃。1.0 发布追踪器（#50045）正在加速推进，hardening 工作正在进行，而 Rust API 栈（#49748）已合入，合并后的修复在 #51333 中追踪。MoE 内核（FP8 的 silu_and_mul 融合）、DFlash 内存修复等方面的重要性能优化正在落地，新的 AMD MI35x 后端也在开发中。

## 2. Releases & Breaking Changes

Table translation...

Let me proceed carefully through each section.

For the table headers:
| Item | Details | Links |
→ | 项目 | 详情 | 链接 |

| Category | Item | Status | Links |
→ | 类别 | 项目 | 状态 | 链接 |

For "No new releases" - in Chinese tech context, this could be "近 24 小时内无新版本发布"

For "SGLang 1.0 In Progress" - "SGLang 1.0 正在进行中"

Let me continue with the rest... I'll translate the entire document now, maintaining the technical Chinese register and preserving all formatting, links, and numbers.
</think>


# SGLang 每日摘要 — 2026-11-25

---

## 1. 今日要点

SGLang 开发在多个方向上持续活跃。1.0 发布追踪器（#50045）正在加速推进，hardening 工作正在进行，而 Rust API 栈（#49748）已合入，合并后的修复在 #51333 中追踪。MoE 内核（FP8 的 silu_and_mul 融合）、DFlash 内存修复等方面的重要性能优化正在落地，新的 AMD MI35x 后端也在开发中。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 | 链接 |
|------|--------|-------|
| **近 24 小时内无新版本发布** | — | — |
| **SGLang 1.0 正在进行中** | 1.0 是一个稳定性版本，聚焦于 hardening 工作，将静默的配置变更替换为显式报错，并定义了 1.x 兼容性策略。从 0.5.x 升级可能需要改动。 | [#50045](https://github.com/sgl-project/sglang/issues/50045) |
| **Rust API 栈已合入** | 15 个 PR 的 Rust API 栈（#49734–#49748）已合入。合入后的修复和共享 API 设计在 #51333 中追踪。 | [#51333](https://github.com/sgl-project/sglang/issues/51333) |

---

## 3. 新模型与硬件支持

| 类别 | 项目 | 状态 | 链接 |
|----------|------|--------|-------|
| **AMD GPU** | Inkling-2-Small MI35x 支持（附带配套内核 PR #52726、#52727、#52728） | PR 开放中 | [#50187](https://github.com/sgl-project/sglang/pull/50187) |
| **Diffusion** | LingBot-Video MoE：图像条件化、T2I 及 refinement 支持 | PR 开放中 | [#32848](https://github.com/sgl-project/sglang/pull/32848) |
| **ASR** | Qwen3-ASR 原生 HuggingFace checkpoint 格式支持 | PR 开放中 | [#53010](https://github.com/sgl-project/sglang/pull/53010) |
| **NPU** | Ascend 异步 EPLB：与 HCCL P2P 异步执行 stage expert 迁移 | PR 开放中 | [#50784](https://github.com/sgl-project/sglang/pull/50784) |
| **Multimodal** | 通过 NIXL 或 ZMQ 分级传输 multimodal embeddings，为 encoder/PD  disaggregation 做准备 | PR 开放中 | [#51754](https://github.com/sgl-project/sglang/pull/51754) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | 链接 |
|--------|--------|--------|-------|
| **MoE / FP8** | 在 Triton block-FP8 MoE 中将 `silu_and_mul_clamp` 融合到 `per_token_group_quant` | 消除中间 BF16 缓冲区，适用于带有 `swiglu_limit` 的模型（如 GLM-5.3-Flash） | [#53013](https://github.com/sgl-project/sglang/pull/53013) |
| **内核** | 在 `silu_mul_clamp_kernel` 中为小 `out_dim`（如 256）每 CTA 打包多行 | 提升小宽度 MoE/MLP 层的 GPU 利用率 | [#53011](https://github.com/sgl-project/sglang/pull/53011) |
| **DFlash** | 避免 verify 页表、custom-mask 和 KV-materialize workspace 中的长上下文 OOM | 支持 block_size=16 下 262K 上下文 | [#51762](https://github.com/sgl-project/sglang/pull/51762) |
| **FLUX.2** | 在 packed QK 融合中移除静态架构和 head-count 门控 | 解锁非精确架构匹配的融合内核 | [#51857](https://github.com/sgl-project/sglang/pull/51857) |
| **Mooncake** | 按 bootstrap 空间分片 Mooncake 传输 | 防止 attention TP>1 时的单队列瓶颈 | [#42163](https://github.com/sgl-project/sglang/pull/42163) |
| **FlashInfer** | 在 CUDA graphs 下重放 ragged verify | 修复 `SGLANG_RAGGED_VERIFY_MODE=compact` 时的 capture 失败 | [#53012](https://github.com/sgl-project/sglang/pull/53012) |
| **NPU 性能** | 文档化 `SGLANG_SCHEDULER_DECREASE_PREFILL_IDLE` / `SGLANG_PREFILL_DELAYER_MAX_DELAY_PASSES` | 128K prefix-cache 负载下 TPOT 降低 30% | [#50447](https://github.com/sgl-project/sglang/issues/50447) |

---

## 5. 稳定性与回归问题

| 严重级别 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **Critical** | `--max-running-requests 0` 或负值被静默 clamp 为 1 | 开放中 | — |
| **High** | HiCache + hybrid SSM/Mamba：`cudaHostRegister` 失败导致实例崩溃；错误路径抛出 TypeError 掩盖真实原因 | 已关闭 | — |
| **High** | Prefill 输入 logprobs 在批次成员回退/结束时从错误的请求提供 | 已关闭（非活跃） | — |
| **Medium** | MoE mxfp8 在消费级 Blackwell 上错误选择了 `trtllm-gen` runner | PR 开放中 | [#47904](https://github.com/sgl-project/sglang/pull/47904) |
| **Medium** | AMD gfx12 自定义 all-reduce relaxed start 标志导致 PCIe 上错误的对 rank 敏感求和 | 开放中 | [#49657](https://github.com/sgl-project/sglang/issues/49657) |
| **Medium** | `KvMetrics.data_parallel_rank` 始终为 0；Prometheus series 缺少 `dp_rank` 标签 | 开放中 | [#47409](https://github.com/sgl-project/sglang/issues/47409) |
| **Medium** | XPU 在 Sysman 内存查询不可用时回退到 core API | PR 开放中 | [#52060](https://github.com/sgl-project/sglang/pull/52060) |
| **Low** | 24 字节的 `stop_regex` 模式导致 MemoryError 使 scheduler 崩溃 | 开放中 | [#52041](https://github.com/sgl-project/sglang/issues/52041) |
| **Low** | `logit_bias` 报错信息语法错误（"must has" → "must have"） | PR 开放中 | [#53016](https://github.com/sgl-project/sglang/pull/53016) |

**CI 状态**（#17050）：截至 2026-11-25 04:42 UTC，3 个 broken，23 个 flaky，925 个近期已修复。

---

## 6. 对应用开发者的影响

| 要点 | 详情 |
|----------|---------|
| **关注 1.0 破坏性变更** | 即将发布的 1.0 稳定性版本可能需要从 0.5.x 进行迁移工作。请在 #50045 中关注升级说明。 |
| **Rust API 已可用于生产** | 15 个 PR 的 Rust API 栈已合入；合并后问题在 #51333 中追踪。 |
| **GLM-5.3-Flash 缺陷已基本修复** | 缺陷追踪 issue #37524 显示大部分追踪的问题已修复；部署前请使用最新版本验证。 |
| **NPU 用户：可获得 30% TPOT 提升** | 新的 prefill delayer 参数已文档化，适用于 prefix-cache 负载——对检索增强场景意义重大。 |
| **注意 `--max-running-requests` 边界情况** | 设置为 0 或负值时行为不符合预期，在修复落地前请避免使用。 |
| **Intel XPU 改进** | WSL2 GPU-PV 场景的回退路径防止了在不支持 Sysman 配置时的启动崩溃。 |
| **Diffusion 用例持续扩展** | MiniMax-H3 在消费级 GPU 上的图像↔视频切换已列入 Q4 路线图。 |

---

*摘要结束。数据来源为 github.com/sgl-project/sglang，截至 2026-11-25。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the content to natural Simplified Chinese
2. Keep all Markdown structure (headings, tables, lists, code blocks, etc.)
3. Keep URLs, code references, issue numbers, etc. as-is
4. Use technical Chinese register appropriate for a developer newsletter
5. Output only the translation, no preamble or explanation
6. No markdown fences around the whole output

Let me translate section by section:

**1. Today's Highlights** - Straightforward translation
**2. Releases & Breaking Changes** - Table translation
**3. New Model & Hardware Support** - Bulleted list with links
**4. Performance & Optimization** - Table translation
**5. Stability & Regressions** - Tables and lists
**6. What This Means for Application Developers** - Numbered list

Let me do this carefully, maintaining the technical accuracy while making it read naturally in Chinese.
</think>


# llama.cpp 每日简报 — 2026-11-25

## 1. 今日要点

本日项目继续深耕后端多样化和推理效率。值得注意的进展包括：**自定义算子 API** 支持逐后端内核实现正式合并（#33000）、**OpenVINO 后端** 获得 KV 缓存解码优化（#33002），以及**多序列投机解码与 MTP** 正式公开 C API（#27788），下游绑定作者可借此构建高级采样策略。硬件方面，**ARMv8.0 CPU Q4_0/Q8_0 内核**（#32142）和 **SVE 优化的 q5_0/q5_1 内核**（#30867）表明对非 NVIDIA 推理路径的投入正在加码。

---

## 2. 版本发布与破坏性变更

| Commit | 变更内容 | 影响范围 |
|--------|--------|--------|
| [`b12716`](https://github.com/ggml-org/llama.cpp/commit/b12716) | cmake: 从源码树引入 `llguidance` 头文件 | **构建修复**，针对 Cargo 1.100 变更工件目录结构 |
| [`b12707`](https://github.com/ggml-org/llama.cpp/commit/b12707) | context: 无 OpenMP 时防止 CPU 过度轮询 | Metal 及无 OpenMP 的 CPU 推理延迟/稳定性改善 |
| [`b12706`](https://github.com/ggml-org/llama.cpp/commit/b12706) | metal: 仅对短行预分配 top-k scratch | 内存调优——`ncols > 128` 时走 radix 路径，适用于 M5/M2 Ultra |

**本日无新版本标签**发布。`1.0.0` 稳定版仍为当前基准。

---

## 3. 新模型与硬件支持

- **Hy4（腾讯 Hy_v4_flash，220B / 12B 激活）** — 通过 [#32960](https://github.com/ggml-org/llama.cpp/pull/32960) 添加。运行于现有 `llama_kv_cache_dsa_iswa` 缓存，与 dots3note 相同。
- **Inkling 2 Mini** — `mix()` 加权求和改用 scores 作为 `src0`，降低逐 token 矩阵向量开销（[#32855](https://github.com/ggml-org/llama.cpp/pull/32855)，合入 b12701）。
- **ARMv8.0（64位，无 dotprod 扩展）** — 针对缺少 dotprod 扩展的目标平台优化 Q4_0/Q8_0 CPU 内核（[#32142](https://github.com/ggml-org/llama.cpp/pull/32142)，合入 b12711）。
- **SVE（Scalable Vector Extension）** — q5_0 和 q5_1 点积内核（[#30867](https://github.com/ggml-org/llama.cpp/pull/30867)，合入 b12709）。
- **CUDA MUL_MAT / MUL_MAT_ID 支持 BF16 src1** — 无需解量化至 cuBLAS 即可直接读取 BF16 激活；进行中（[#32533](https://github.com/ggml-org/llama.cpp/pull/32533)）。
- **gguf-set-metadata 布尔元数据解析** — 此前被静默忽略；已在 [#32794](https://github.com/ggml-org/llama.cpp/pull/32794) 修复。

---

## 4. 性能与优化

| 领域 | Commit / PR | 详情 |
|------|-------------|---------|
| **CUDA RMSNorm 融合** | [#32500](https://github.com/ggml-org/llama.cpp/pull/32500)（b12703） | 融合 RMS_NORM + MUL + MROPE/IMROPE；`ncols ≤ 256` 时使用 64 线程块处理多 token |
| **CUDA MMQ stream-k** | [#32921](https://github.com/ggml-org/llama.cpp/pull/32921) | 列块外层遍历，提升 DRAM 读复用 |
| **SYCL NVFP4 MoE** | [#32981](https://github.com/ggml-org/llama.cpp/pull/32981) | 消除逐 scale 的 `sycl::pow()` 调用；替换低效的 E2M1 解码查表 |
| **CUDA/HIP flash attention** | [#32930](https://github.com/ggml-org/llama.cpp/pull/32930) | 启用 MMA FA 内核进行无 mask（非因果）注意力计算，面向 RDNA 架构，目标是视觉编码器 |
| **CUDA q4_0/q8_0 KV 在 flash_attn_tile 中** | [#31234](https://github.com/ggml-org/llama.cpp/pull/31234) | 原生 KV 缓存类型在加载时瓦片内解量化 |
| **Vulkan IQ 网格查找表** | [#32915](https://github.com/ggml-org/llama.cpp/pull/32915) | 将 IQ1/IQ2/IQ3 常量数组移至存储缓冲区，消除 NVIDIA 上的 LDC 发散问题 |
| **按尺寸划分的 CUDA Graph 内存池** | [#31156](https://github.com/ggml-org/llama.cpp/pull/31156) | 解码/投机验证批次保留各自的图捕获，而非每次尺寸变化时重新捕获 |
| **OpenVINO KV 解码** | [#33002](https://github.com/ggml-org/llama.cpp/pull/33002) | 更细粒度的 KV 长度对齐策略，提升 GPU 解码性能 |
| **ggml-hexagon 2.0** | [#32582](https://github.com/ggml-org/llama.cpp/pull/32582) | HMX 整数模式（w8a8、w8a16）配合动态量化；自动 f32→f16 降级 |
| **Inkling 2 图优化** | [#32948](https://github.com/ggml-org/llama.cpp/pull/32948) | `mix()` 重构以避免逐块 CONCAT + 重新归一化；算子更少，结果位级一致 |

---

## 5. 稳定性与回归

### 严重 / 高优先级

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#24015](https://github.com/ggml-org/llama.cpp/issues/24015) | **Eval bug**: 多头分割路径触发 `GGML_ASSERT(src_ss[0].axis != GGML_BACKEND_SPLIT_AXIS_0)` | Open — 修复 PR [#32983](https://github.com/ggml-org/llama.cpp/pull/32983) 今日合入（b12709） |
| [#32810](https://github.com/ggml-org/llama.cpp/issues/32810) | **Prefill 回归**：GDN 混合模型在 V100（sm_70）上 FATTN 配置导致 `nbatch_V2` 相比 0.4.1 减半 | Open |
| [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) | `/v1/completions` 在 SYCL iGPU + MoE 上 logprobs 不确定；seed 无法锁定分布 | Open |
| [#31560](https://github.com/ggml-org/llama.cpp/issues/31560) | Vulkan KHR_coopmat 在 Intel Arc Pro B70（BMG G31）上产生错误/不确定结果 | Open |

### 中等优先级

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#32776](https://github.com/ggml-org/llama.cpp/issues/32776) | 混合 Qwen3.5（Gated DeltaNet）投机解码慢约 2.2–2.4 倍，CUDA 后端 | Open |
| [#28111](https://github.com/ggml-org/llama.cpp/issues/28111) | CUDA `mul_mat` 在 SM120 上 `n=5,8` 时对 IQ 量化不支持批次一致性——影响投机解码无损性 | Open |
| [#32918](https://github.com/ggml-org/llama.cpp/issues/32918) | `convert_hf_to_gguf.py` 报告 Qwen 3.8 27B 有 770 个 tensor，应为 866 个 | Open |
| [#30301](https://github.com/ggml-org/llama.cpp/issues/30301) | SYCL: `rms_norm_f32_sycl` 在 Arc Pro B60 上报 `UR_RESULT_ERROR_UNSUPPORTED_FEATURE` | Open |
| [#28721](https://github.com/ggml-org/llama.cpp/issues/28721) | Vulkan 长上下文解码在 Intel Arc Pro B70（Xe2）上性能崩溃约 8 倍；SYCL 降级仅约 2.4 倍 | Open |

### 本日关闭的重要问题

- **#29022** — 通过 Prefill Logit Slicing 实现快速工具门控（增强功能，标记关闭）
- **#17107** — 磁盘 KV 缓存持久化功能请求（标记关闭）
- **#27788** — 多序列投机解码与 MTP 公开 C API（已合并）

---

## 6. 对应用开发者的意义

1. **投机解码的可用性正在提升。** 多序列投机解码与 MTP 的公开 C API（[#27788](https://github.com/ggml-org/llama.cpp/pull/27788)）意味着绑定作者（llama.cpp 绑定、LM Studio 等）无需依赖内部 API 即可暴露这些特性。如使用 CUDA/HIP，请对接受率敏感的负载进行测试。

2. **V100 上混合 MoE 模型存在 prefill 回归。** 在 Volta 硬件上运行 Qwen3.5 类混合（GDN + 全注意力）模型时，当前 `1.0` 系列相比 `0.4.1` 的 prefill 吞吐会显著下降。请关注 [#32810](https://github.com/ggml-org/llama.cpp/issues/32810) 获取修复进展。

3. **SYCL + MoE 的 logprobs 具有不确定性。** 依赖 Intel iGPU SYCL 后端 `/v1/completions` 可复现 `logprobs` 的应用应注意——`seed` 字段目前无法锁定概率分布。请关注 [#31206](https://github.com/ggml-org/llama.cpp/issues/31206)。

4. **Intel Arc Pro B70 Vulkan 存在正确性问题。** 任何使用合作矩阵的 F16/Q8_0 工作负载（包括 Decision 模型）可能返回错误结果。同硬件的 SYCL 后端不受此问题影响。请关注 [#31560](https://github.com/ggml-org/llama.cpp/issues/31560)。

5. **逐后端自定义算子 API 正式登场。** 新的 `ggml_custom_op` 结构支持逐后端内核实现（[#33000](https://github.com/ggml-org/llama.cpp/pull/33000)），可实现后端特定优化而无需重复算子定义。目前仅支持 CPU；其他后端将陆续跟进。

6. **Apple Silicon Metal 性能调优。** top-k scratch 预分配策略调整（[#32706](https://github.com/ggml-org/llama.cpp/pull/32706)）使较长序列倾向于使用 radix 路径，预计将改善 M5/M2 Ultra 解码密集型工作负载的内存利用率。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate a GitHub digest for Ollama from English to Simplified Chinese. I need to:

1. Output ONLY the translation, no preamble
2. Preserve all Markdown structure exactly
3. Keep URLs, numbers, dates, code, version tags, etc. verbatim
4. Use natural technical Chinese suitable for a Chinese developer newsletter

Let me translate section by section carefully.

**Title**: Ollama Digest — 2026-11-25
→ Ollama 速报 — 2026-11-25

**Today's Highlights section**:
- MLX runner stability → MLX runner 稳定性
- unbounded cache growth → 无限增长的缓存
- goroutine leaks → goroutine 泄漏
- dedicated performance optimizations → 专门的性能优化
- short conversation histories → 短对话历史
- VRAM accounting overhaul → VRAM 计量重写
- GPU allocation bugs → GPU 分配 bug

Let me do a full translation now.
</think>


# Ollama 速报 — 2026-11-25

## 今日要点

Ollama 项目近期在 MLX runner 稳定性和新模型架构支持方面表现活跃。面向 macOS MLX 工作负载的关键内存管理修复正在推进中（包括 goroutine 泄漏修复和无限制缓存增长问题），同时 inkling2 架构针对短对话历史进行了专门的性能优化。VRAM 计量重写正在通过 PR #19632 推进，有望解决多个已报告的 GPU 分配 bug。

## 版本发布与破坏性变更

**过去 24 小时内无新版本发布。**

仍需关注的历史版本迁移说明：
- **v0.40.17** 引入了 macOS M4 Pro MLX 上的性能回退（见 issue #19866）；Apple Silicon 用户可考虑降级至 v0.40.16 或更早版本，直至修复发布。

## 新模型与硬件支持

| 类别 | 详情 | 参考链接 |
|----------|---------|------------|
| **Inkling-2 架构** | PR #19881 针对短历史对话优化，使用 Metal 分组注意力核；草案提案和对话快照也获得了专门的性能改进 | [#19881](https://github.com/ollama/ollama/pull/19881) |
| **Gemma 4 工具调用** | PR #19890 修复了工具参数中单引号列表项的格式化问题，适用于 `gemma4:26b-a4b-it-qat` 等模型 | [#19890](https://github.com/ollama/ollama/pull/19890) |
| **Intel 集显 Vulkan** | PR #19568 为 Intel 集显启用 Vulkan 作为默认后端（Ultra 系列第 1 代及以上，驱动 32.0.101.9150 及以上，16 GB+ 内存，仅集显） | [#19568](https://github.com/ollama/ollama/pull/19568) |
| **Cohere thinking tokens** | PR #19875 在流结束但尚未遇到 `<|END_THINKING|>` 标签时刷新缓冲的 thinking 内容 | [#19875](https://github.com/ollama/ollama/pull/19875) |

仍在开放中的功能请求：
- **GPU 硬件 API 端点** — issue #3822 请求一个专用的 `/api/devices` 端点来暴露检测到的 GPU/CPU 和内存信息；PR #19880（已关闭，未合并）部分解决了这一问题
- **模型名称长度限制** — issue #18274 报告 80 字符限制导致部分 HuggingFace 长文件名无法导入；暂无 PR

## 性能与优化

### 已合并 / 审核中

| PR | 描述 | 影响 |
|----|-------------|--------|
| [#19881](https://github.com/ollama/ollama/pull/19881) | inkling2：历史 <1024 keys 使用 Metal 分组注意力，消除密集掩码 | 减少短对话场景下 FP32 精度扩展开销 |
| [#19632](https://github.com/ollama/ollama/pull/19632) | llm/server：修复 VRAM 计量和 GPU 分片 | 解决 #19463、#18679、#18349、#16599 — 防止错误的驱逐和跨 GPU 不必要的分散调度 |
| [#17027](https://github.com/ollama/ollama/pull/17027) | 刷新 OpenAI 兼容的 SSE 流式响应 | 修复 Chatbox/OpenWebUI 中的 UI 卡顿（issue #15329） |
| [#19848](https://github.com/ollama/ollama/pull/19848) | 将 cgroup 内存有限 headroom 限制在宿主机内存范围内 | 防止内存准入时的无符号整数下溢 |
| [#19334](https://github.com/ollama/ollama/pull/19334)（已关闭） | 修复多模态模型的 Embedding 中媒体顺序问题（Gemma 4） | 媒体标记现在正确交错插入，而非追加在末尾 |

### 报告的问题

| Issue | 严重程度 | 详情 |
|-------|----------|---------|
| [#19866](https://github.com/ollama/ollama/issues/19866) | **高** | v0.40.17 在 M4 Pro MLX 上运行 Qwen 3.8 27b 出现性能回退；`OLLAMA_KEEP_ALIVE` 异常显示 8 小时 |
| [#19891](https://github.com/ollama/ollama/issues/19891) | **高** | MLX 前缀缓存快照被换出但从不回收；每个不同 prompt 增长约 0.6 GiB（Mac Studio M5 Ultra，256 GB） |
| [#19886](https://github.com/ollama/ollama/issues/19886) | **高** | MLX 保存的历史在 13 分钟内从 23 GB 增长到 70 GB（64 GB Mac）；触发 37 GB swap 膨胀 |
| [#19885](https://github.com/ollama/ollama/issues/19885) | **中** | 图像标记构建使用 O(N²) 字符串操作；64k 张空图像让服务端 CPU 耗时一分钟 |

## 稳定性与回退

| Issue | 严重程度 | 状态 | 修复 PR |
|-------|----------|--------|--------|
| [#17131](https://github.com/ollama/ollama/issues/17131) — 客户端断开连接时 goroutine 和信号量泄漏 | **严重** | 开放中 | [#17881](https://github.com/ollama/ollama/pull/17881) |
| [#17251](https://github.com/ollama/ollama/issues/17251) — `ollama ps` 报告的 VRAM 与 `rocm-smi` 不符 | **高** | 开放中 | （部分通过 [#19632](https://github.com/ollama/ollama/pull/19632)） |
| [#19879](https://github.com/ollama/ollama/issues/19879) — Inkling-2-mini OOM 导致 DGX Spark 崩溃 | **严重** | 已关闭（未合并修复） | — |
| [#19888](https://github.com/ollama/ollama/issues/19888) — inkling2 张量查找失败（`blk.24.attn_q.weight`） | **高** | 开放中 | — |
| [#19877](https://github.com/ollama/ollama/issues/19877) — Olmo3 未解码 `\u003c` 转义序列 | **中** | 开放中 | [#19878](https://github.com/ollama/ollama/pull/19878) |
| [#19866](https://github.com/ollama/ollama/issues/19866) — v0.40.17 MLX 性能回退 | **高** | 开放中 | — |
| [#18274](https://github.com/ollama/ollama/issues/18274) — 模型名称 80 字符限制 | **中** | 开放中 | — |

## 对应用开发者的影响

1. **macOS MLX 用户在 v0.40.17 下请密切关注内存使用** — #19886 和 #19891 的组合表明 MLX runner 存在活跃的内存泄漏。对于 Apple Silicon 上的生产环境部署，建议将 `OLLAMA_KEEP_ALIVE` 设置为较短窗口，或在修复发布前定期重启服务。

2. **流式端点消费者：测试重连逻辑** — 针对 #17131 的 goroutine 泄漏修复（PR #17881）将改变被丢弃请求的清理方式。应用应验证其能从容处理流中途断连的场景。

3. **多模态 Embedding 用户** — 如果使用 Gemma 4 或类似的交错式视觉-语言模型，已关闭的 PR #19334 表明媒体顺序此前存在问题。请验证你的 Embedding 结果反映了正确的图文关联。

4. **Windows 上的 Intel 集显用户** — Vulkan 现在对符合条件的 Intel 集显（PR #19568）开箱即用为默认后端，无需手动配置即可提升推理性能。

5. **以 Ollama 作为 OpenAI 兼容后端的 UI 应用** — PR #17027 解决了 Chatbox 和 OpenWebUI 中的流式卡顿。一旦新版本可用请及时更新。

6. **Inkling-2 用户** — #19888 中的张量维度错误影响 `thinkingmachines/Inkling-2-Mini` 在 v0.40.18 上的加载；请避免该组合或关注修复进展。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate an English technical report into Simplified Chinese. Let me translate this carefully, maintaining all the structure and technical accuracy while converting to natural Chinese technical language.
</think>


# LiteLLM 每日简报 — 2026-11-25

## 1. 今日要闻

v1.112.0-rc.1 发布候选版正式出炉，同时发布了三个稳定版补丁（v1.109.5、v1.110.4、v1.111.0），LTS 维护线仍定格在 v1.108.17。两个悬置已久的功能提案宣告完结——OAuth2 自定义 provider 支持（#12367）和密钥轮转（#12448）均已关闭。一个自 v1.108.0 引入的严重回归问题仍在持续：经由网关的 MCP `tools/list` 在客户端发送 `notifications/initialized` 且使用 2026 年前协议版本时会阻塞 18–50 秒（#50065），该问题已在 Open WebUI 的 `mcp` SDK 上得到复现确认。

---

## 2. 版本发布与重大变更

| 版本 | 类型 | 说明 |
|---------|------|-------|
| [v1.112.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-rc.1) | 发布候选版 | `ghcr.io/berriai/litellm:v1.112.0-rc.1` |
| [v1.111.0](https://github.com/BerriAI/litellm/releases/tag/v1.111.0) | 稳定版 | `ghcr.io/berriai/litellm:v1.111.0` |
| [v1.110.4](https://github.com/BerriAI/litellm/releases/tag/v1.110.4) | 稳定版 | `ghcr.io/berriai/litellm:v1.110.4` |
| [v1.109.5](https://github.com/BerriAI/litellm/releases/tag/v1.109.5) | 稳定版 | `ghcr.io/berriai/litellm:v1.109.5` |
| [v1.108.17](https://github.com/BerriAI/litellm/releases/tag/v1.108.17) | LTS（稳定版） | `ghcr.io/berriai/litellm:lts` 指向此版本 |

**LTS 迁移注意事项：** 若你使用 `lts` 镜像标签且尚未升至 v1.108.17，请重新拉取该标签以获取最新 LTS 补丁。per-deployment `deferred_tools` 功能（#54183）已通过 [#54213](https://github.com/BerriAI/litellm/pull/54213) backport 至 1.108 分支，因此 Claude Code 的 tool-search tool-caching 现已可在非 Anthropic 模型上于 LTS 版本中使用。

**近期 LTS/1.108.x 的 backport 活动：** 多项主线路修复正在被 cherry-pick：
- [#54230](https://github.com/BerriAI/litellm/pull/54230) — 剥离 gemma-4 不接受的 JSON Schema 关键字（Bedrock Mantle）
- [#54180](https://github.com/BerriAI/litellm/pull/54180) — 在 `drop_params` 下剥离 Bedrock 不接受的安全参数
- [#54213](https://github.com/BerriAI/litellm/pull/54213) — per-deployment `deferred_tools` 处理逻辑
- [#53768](https://github.com/BerriAI/litellm/pull/53768) — 在 chat completions 桥接层拒绝无法解析的 `previous_response_id`

---

## 3. 新模型与硬件支持

今日无新模型家族或硬件后端发布。以下 PR 表明相关支持正在推进中：

- **[#52515](https://github.com/BerriAI/litellm/pull/52515) `feat(proxy)`：per-deployment 上游代理路由** — 管理员现可在 **Models + Endpoints > Upstream Proxies** 下注册命名上游代理，允许某一 deployment 绕过全局 `HTTP_PROXY` 配置，通过自有区域代理路由流量。这解决了不同区域提供商速度/可达性差异导致的延迟和可用性问题。**状态：OPEN，2026-11-18。**

- **[#54214](https://github.com/BerriAI/litellm/pull/54214) `fix(bedrock_mantle)`：剥离 gemma-4 不接受的 JSON Schema 关键字** — Bedrock Mantle gemma-4 模型会拒绝 Claude Code 内置工具发送的特定 JSON Schema 关键字（如 `contains`、`pattern`、`const`）。代理现已在转发前从 tool schema 和 response schema 中清除这些关键字。**状态：OPEN，2026-11-24。** 已 backport 至 LTS：#54230。

---

## 4. 性能与优化

| Issue / PR | 影响 | 详情 |
|---|---|---|
| [#50065](https://github.com/BerriAI/litellm/issues/50065) **[回归问题]** | **严重 — 每次阻塞最高 50 秒** | 通过 `/mcp/` 的 MCP `tools/list` 在遗留订阅监听器收到 `notifications/initialized`（2026 年前协议版本）时阻塞 18–50 秒。影响 v1.108.0，与 Open WebUI 配合使用时会触发。目前尚无修复 PR。 |
| [#37041](https://github.com/BerriAI/litellm/issues/37041) `[已关闭]` | 每次补全增加约 8 秒延迟 | Ollama `get_runtime_model_info` 忽略请求中的 `api_base`，回退到 `localhost:11434`，每次补全调用增加约 4 秒 TCP 连接超时 × 2。现已关闭。 |
| [#38052](https://github.com/BerriAI/litellm/issues/38052) `[OPEN]` | 不论负载高低均每分钟重新上报指标 12 次 | OTel v2 `build_metric_reader` 硬编码 `export_interval_millis=5000`，忽略 `OTEL_METRIC_EXPORT_INTERVAL`。累积直方图每 5 秒重传全部序列。尚无修复 PR。 |
| [#48589](https://github.com/BerriAI/litellm/issues/48589) `[OPEN]` | 连接池耗尽 | 使用 Redis 后端 Router 且 deployment 配置了 rpm/tpm 限制时，`Sync Router.completion` 每次调用会新建一个 Redis 连接和一个异步 Redis 客户端，且两者均不关闭。每次调用向 Redis 增加一条 TCP 连接且永不清理。修复尚未合入。 |
| [#54171](https://github.com/BerriAI/litellm/pull/54171) `fix(router)` | 路由不均衡 | 最小负载路由策略以调用方名称而非 deployment 所在组来计数，导致 Router 误判负载，将请求堆积到已高负载的 deployment 上。**状态：OPEN。** |

---

## 5. 稳定性与回归问题

**按严重程度排序：**

| # | 严重级别 | 问题 | 状态 | 修复 PR |
|---|---|---|---|---|
| 1 | 🔴 严重 | v1.108.0 升级后 MCP `tools/list` 阻塞 18–50 秒（#50065） | OPEN | — |
| 2 | 🔴 严重 | rpm/tpm 限速配置下 Redis 连接泄漏（#48589） | OPEN | — |
| 3 | 🟠 高危 | 失败请求未计入 RPM 限制（#21312） | OPEN | — |
| 4 | 🟠 高危 | 启用模型速率限制后 TPM 对流式请求从未真正执行（#41610） | CLOSED | — |
| 5 | 🟠 高危 | Azure AI 模型超出上下文窗口限制，尽管使用了默认参数（#53716） | OPEN | — |
| 6 | 🟡 中等 | 冷启动用户计费计数器过度递增，导致用户提前耗尽预算（#47062） | CLOSED | — |
| 7 | 🟡 中等 | 护栏拦截的流被记录为成功或零费用（#54238） | OPEN | 修复 PR 已存在 |
| 8 | 🟡 中等 | `PUT /v1/mcp/server` 在 `delegate_auth_to_upstream=true` 时静默清空 OAuth2 配置（#37258） | CLOSED | — |
| 9 | 🟡 中等 | `/toolset/{name}/mcp tools/list` 在目录授权刷新后丢失 URL 作用域（#47856） | CLOSED | — |
| 10 | 🟢 低 | OTel 指标导出间隔硬编码，忽略环境变量（#38052） | OPEN | — |

**今日已关闭的回归问题：**
- **#30118**：升级至 v1.88.x 后，在 nginx 反向代理后端时 UI 登录重定向到内部 Docker IP——已解决。
- **#37041**：Ollama 回退到 `localhost:11434` 导致每次补全增加约 8 秒延迟——已解决。
- **#41610**：启用 `optional_pre_call_checks: ["enforce_model_rate_limits"]` 后流式请求的 TPM 限速检查漏洞——已关闭。
- **#47062**：冷启动用户计费计数器被全量余额过度递增——已关闭。

---

## 6. 对应用开发者的影响

1. **如果你通过 LiteLLM Proxy 走 MCP 协议且使用 Open WebUI 或任何采用 2026 年前 MCP 协议的客户端：** 请暂缓在 v1.108.0 上部署，直至 #50065 修复发布。每次 `tools/list` 调用阻塞 18–50 秒是 v1.108.0 引入的生产级阻断性回归。

2. **如果你使用 Redis 后端 Router 且配置了 rpm 或 tpm 限制：** 避免在紧密循环中使用同步 `Router.completion`——每次调用都会泄漏一个 Redis 连接。请监控 Redis 连接数，或在 #48589 合入前考虑异步路径或连接池方案。

3. **如果你通过 Bedrock Mantle gemma-4 路由 Claude Code：** 工具调用目前因 gemma-4 拒绝特定 JSON Schema 关键字而返回 400 错误。请关注 [#54214](https://github.com/BerriAI/litellm/pull/54214) 的修复进度。

4. **如果你使用虚拟密钥（virtual keys）并设置了 RPM 限制：** 失败请求（4xx/5xx）目前不会被计入密钥的限速计数（#21312）。这意味着配置错误的客户端可能静默突破预期的吞吐量限制。尚无修复方案——建议手动监控密钥用量。

5. **如果你需要 per-region 上游代理路由：** [#52515](https://github.com/BerriAI/litellm/pull/52515) 新增了 per-deployment 的命名上游代理注册功能。如果你有多区域 LLM 部署，其中某个区域到你的代理延迟更高或存在阻断，该功能将允许在不改动全局 `HTTP_PROXY` 配置的情况下为不同 deployment 单独设置代理。

6. **如果你为终端用户追踪用量：** 冷启动计费计数器 bug（#47062）已关闭。如果你曾在代理重启后遇到用户意外提前耗尽预算的情况，这可能就是根本原因。

7. **如果你在生产环境使用 LTS 镜像标签：** 请拉取 `ghcr.io/berriai/litellm:lts` 以获取 v1.108.17，该版本现已通过 backport 获得 per-deployment `deferred_tools` 支持和 gemma-4 schema 修复。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese while following the rules. Let me translate this carefully, maintaining the structure and using natural Chinese technical language.

Key considerations:
1. Keep all markdown structure
2. Keep URLs, code references, version numbers as-is
3. Use natural Chinese technical register
4. Preserve tables, lists, formatting
5. Output only the translation

Let me work through this section by section.
</think>


# Unsloth Digest — 2026-11-25

---

## 1. 今日要闻

Unsloth **v0.1.924-beta** 正式发布，带来了 Inkling 2 Mini 原生微调支持，通过 LoRA/QLoRA 可实现 1.8–3.1× 加速并降低 50% VRAM 占用。一项重要的新功能 PR（[#19378](https://github.com/unslothai/unsloth/pull/19378)）为 Studio 引入了完整的多 GPU 训练后端（DDP、FSDP2、TP、PP、CP、EP），同时多个稳定性相关的 PR 修复了 AMD ROCm bf16 检测、PyTorch 2.10/2.11 管道并行预热以及视频生成时的 CUDA 资源泄漏问题。

---

## 2. 版本发布与破坏性变更

| 版本 | 概要 | 链接 |
|---------|---------|------|
| **v0.1.924-beta** | Inkling 2 Mini 微调（LoRA/QLoRA）、管道/张量/上下文并行、导出至 GGUF 或合并 16 位格式；性能修复 | [Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.924-beta) |

**迁移注意事项：**
- 从本地文件夹基础模型导出的预量化 Inkling 2 Mini LoRA 现已能正确合并（[#19403](https://github.com/unslothai/unsloth/pull/19403)）。
- `FastLanguageModel.from_pretrained` 现优先使用显式传入的 `quantization_config`，而非预量化名称重映射（[#19404](https://github.com/unslothai/unsloth/pull/19404)）。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 详情 | 链接 |
|-----------------|---------|------|
| **Inkling 2 Mini 1.8B** | 完整 LoRA/QLoRA 微调、GGUF 导出、多 GPU 并行（张量/管道/上下文） | [#19403](https://github.com/unslothai/unsloth/pull/19403) |
| **Ling-3.2-air（多模态）** | 功能请求已开启；定位对标 Qwen3.8-Flash-Next | [#19298](https://github.com/unslothai/unsloth/issues/19298) |
| **AMD Strix Halo / ROCm 7.13** | 跟进修复显存 carve-out 后 host-shortfall mmap 问题（[#18805](https://github.com/unslothai/unsloth/issues/18805)）；ROCm bf16 检测逻辑现正确忽略 gfx10 集成显卡（[#19340](https://github.com/unslothai/unsloth/issues/19340)） | [PR #17607](https://github.com/unslothai/unsloth/pull/17607) |
| **Intel Arc 140V（Vulkan）** | 发现 Inkling-2-mini 输出生成 bug（[#19239](https://github.com/unslothai/unsloth/issues/19239)） | — |
| **LTX-2.5 视频模型** | 768×512 片段渲染现可在 6 GiB 显存显卡上运行（原最低要求 8 GiB） | [#19377](https://github.com/unslothai/unsloth/pull/19377) |

---

## 4. 性能与优化

| 领域 | 变更 | 数据 | 链接 |
|------|--------|---------|------|
| **Inkling 2 Mini 微调** | LoRA/QLoRA 训练吞吐 | **1.8–3.1× 加速**，**VRAM 降低 50%** | [Release notes](https://github.com/unslothai/unsloth/releases/tag/v0.1.924-beta) |
| **多 GPU 训练** | Studio 后端：DDP、FSDP2、TP、PP、CP、EP，自动选择默认配置 | 训练任务现已自动分摊至所有 GPU，不再受单卡层叠限制 | [#19378](https://github.com/unslothai/unsloth/pull/19378) |
| **管道并行** | 修复 pp=1 时 PyTorch 2.10/2.11 的循环调度（gloo 自 P2P 预热） | 解决 `RuntimeError` in `gloo/transport/tcp/pair.cc` | [#19406](https://github.com/unslothai/unsloth/pull/19406) |
| **GGUF 分片重试** | `--fit on` 重试逻辑现使用全部可用 GPU，不再收窄候选集 | 避免不必要的宿主机内存溢出 | [#19402](https://github.com/unslothai/unsloth/pull/19402) |
| **LTX-2.5 显存优化** | 更精简的连接器、VAE 编码器驻留策略、采样步数计费模型 | 最低显存需求降至 **6 GiB**（原 8 GiB） | [#19377](https://github.com/unslothai/unsloth/pull/19377) |
| **Hub safetensors 读取** | 并发获取分片元数据用于组件大小估算 | 消除大型仓库的顺序往返延迟 | [#19381](https://github.com/unslothai/unsloth/pull/19381) |
| **Ollama Modelfile 查找** | 基础模型查找现大小写不敏感 | `Unsloth/Llama-3.2-3B` 现可正确解析 | [#19407](https://github.com/unslothai/unsloth/pull/19407) |

---

## 5. 稳定性与回归问题

| 严重级别 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| 🔴 **Critical** | MiniMax-H3 二次视频生成时报 CUDA resource already mapped 错误 | Open | — |
| 🔴 **Critical** | AMD RX 7900 GRE（ROCm 7.13）运行 Inkling 2 Mini 时 VRAM OOM | Open | — |
| 🔴 **Critical** | CUDA 13 便携版 llama.cpp 未携带 CUDA 运行时 → 静默回退至 CPU | Open | — |
| 🟠 **High** | 内存泄漏：每次使用 Unsloth 后 Drive C 丢失 200–400 MB | Open（7 条评论） | — |
| 🟠 **High** | NVIDIA+AMD 混插主机完全忽略 AMD 显卡 | Open | — |
| 🟠 **High** | Inkling-2-Mini 在 Windows 上报 "Failed to process regex"（`std::regex error_stack`） | Open | — |
| 🟠 **High** | 本地工具循环以零 token 结果预算下发调用 | Open | — |
| 🟡 **Medium** | `@skill` 内容仅在提及轮次追加 → 第二轮起 prompt 缓存未命中 | Open | — |
| 🟡 **Medium** | SentencePiece 分词器在流式换行后丢失缩进空格 | Open | [#19405](https://github.com/unslothai/unsloth/pull/19405) |
| 🟡 **Medium** | Gemma 4 string 类型工具参数未按训练后的调用语法渲染 | Open | — |
| 🟢 **Low** | 桌面应用聊天横幅为空 | Open | — |

**今日合并的修复：**
- 修复 gfx10 集成显卡存在时 AMD bf16 检测异常（[#19340](https://github.com/unslothai/unsloth/issues/19340)）
- Studio API 格式测试现验证编辑后的格式而非保存后的格式（[#19364](https://github.com/unslothai/unsloth/pull/19364)）
- 修复 Docker/systemd 环境下 llama-server 日志中 `~` 路径字面量问题（[#19359](https://github.com/unslothai/unsloth/pull/19359)）
- 现已支持本地 FastFlowLM 运行时配置（[#19401](https://github.com/unslothai/unsloth/pull/19401)）

---

## 6. 对应用开发者的影响

1. **Inkling 2 Mini 已可用于生产微调** — v0.1.924-beta 使 LoRA/QLoRA 训练达到 1.8–3.1× 加速且 VRAM 降低 50%。GGUF 和合并 16 位导出路径现已可靠；但仍需关注 AMD RDNA4（RX 7900 GRE）上的 VRAM OOM 边界情况以及 Windows NVIDIA 环境下的 regex 错误。

2. **多 GPU 训练正式登陆 Studio** — [#19378](https://github.com/unslothai/unsloth/pull/19378) 中的 DDP/FSDP2/TP/PP/CP/EP 新后端意味着 Studio 训练不再受单卡层叠的硬性上限约束。预期自动默认值会选择合理的策略，但请根据自身 workload 特征进行验证。

3. **AMD ROCm 用户：请升级至最新 beta** — bf16 检测回归和 Strix Halo mmap 问题已在当前发布周期内修复。NVIDIA+AMD 混插主机的已知限制仍未解决（[#12248](https://github.com/unslothai/unsloth/issues/12248)）。

4. **受限显存环境下的视频生成** — LTX-2.5 在 768×512 分辨率下现可在 6 GiB 显存运行。拥有 8 GiB 及以上显存的场景行为不受影响。

5. **工具调用体验提升** — 代码块中的工具调用示例现已在聊天历史中保留（[#19367](https://github.com/unslothai/unsloth/pull/19367)），llama-server 错误信息现可在透传路由上正确暴露（[#19357](https://github.com/unslothai/unsloth/pull/19357)）。这对在 Unsloth Studio 之上构建 Agent 管道的开发者尤为重要。

6. **Docker/systemd 部署：修复日志路径** — 若通过 `~` 前缀设置 `UNSLOTH_STUDIO_HOME`，日志曾被写入字面量 `~` 目录。部署前请拉取 [#19359](https://github.com/unslothai/unsloth/pull/19359)。

---

*数据来源：[unslothai/unsloth](https://github.com/unslothai/unsloth) GitHub 仓库 — 2026-11-25*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*