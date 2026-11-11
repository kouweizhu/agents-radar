# AI 基础设施日报 2026-11-11

> 生成时间: 2026-11-11 02:10 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate an English technical report about AI infrastructure projects into Simplified Chinese. I need to:

1. Translate all the text content while keeping the markdown structure intact
2. Keep all technical identifiers, URLs, issue numbers, version tags, etc. as-is
3. Use natural technical Chinese register
4. Preserve all formatting: tables, headings, lists, etc.
5. Output ONLY the translation, no preamble or explanation

Let me carefully translate this report section by section.
</think>


# AI 基础设施生态系统 — 跨项目摘要
**日期：2026-11-11**

---

## 1. 生态系统概览

今日五大主流开源 AI 推理项目的活动表明，基础设施领域正在走向成熟但演进速度丝毫未减。**vLLM** 和 **SGLang** 正在向相同的优化目标收敛——AMD ROCm MI355X (gfx950) 上的 Qwen3.8、DeepSeek V4.1 和 GLM-5.3——这表明两个项目正在争夺同一批生产部署用户，同时保持着截然不同的架构理念。**llama.cpp** 继续扮演着最低公倍数运行时的角色，在 CUDA 和 ROCm 内核层面持续打磨，但没有正式的发布节奏，而 **Ollama** 则面向 Apple Silicon 和集成 GPU 用户，提供精致的本地体验层。**LiteLLM** 遭遇了关键的供应链攻击事件，凸显了通过代理层路由时的安全暴露面；生产环境应默认使用 v1.108.5 LTS 标签。纵观所有项目，当下的主导主题是 **投机解码正确性**、**多级 KV 缓存层级** 和 **AMD GPU 同等支持**——目前这三项均未彻底解决。

---

## 2. 活动对比

| 项目 | Issues（活跃） | PRs（总计 / 周期） | Releases（24h 内） | 待处理积压 |
|---------|-----------------|----------------------|----------------|-----------------|
| **vLLM** | 摘要中约 20 条 | 约 47 个 PR（12+ 在 review/已合并） | 无 | 1 个开放的安全/RCE 级问题；1 个严重的 DFlash TP>1 bug；V0 → V1 迁移阻断项 |
| **SGLang** | 约 20 条；#42752 有 192 条评论 | 约 15 个重要 PR | 无 | SM90 decode 回归（33–45% 每步）；CI 基础设施不稳定；GLM-5.3-Flash SM120 崩溃 |
| **llama.cpp** | 约 8 个 open issues | 24h 内 10 个 commits | 无（滚动发布） | 投机解码量化目标正确性；XDNA 后端仍未完成 |
| **Ollama** | 约 14 条追踪 | 约 47 个 PR | **v0.40.17 stable** | Windows RTX 5090 工具调用断连；MLX KV 缓存累积问题已修复 |
| **LiteLLM** | 约 15 个 open | 约 20 个重要 PR | v1.110.0-rc.1、v1.109.0 stable、v1.108.5 LTS | **v1.107.0 被植入后门**（供应链事件）；per-customer RPM 限制回归 bug |
| **Unsloth** | 约 15 条追踪 | 共约 232 个（20 个重要） | 无 | 管理员密码泄漏；shell 命令绕过；Qwen 混合完整 prompt 重复处理 |

**要点：** Ollama 是唯一发布正式版本的项目。SGLang 的社区参与度按评论量计算最高（CI 追踪帖有 192 条评论），而 LiteLLM 的供应链事件是所有项目中影响最严重的单个安全事件。

---

## 3. 模型支持竞赛

最新前沿模型的支持竞赛在 vLLM、SGLang 和 Ollama 之间形成三方角力，llama.cpp 在架构支持上落后，但在硬件覆盖广度上领先。

| 模型 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-------|------|--------|-----------|--------|---------|
| **Qwen3.8 / Flash-Next** | ✅ 积极优化中（MI355X、SM107） | ❌ 未提及 | ❌ | ❌ | ❌ |
| **GLM-5.3** | ✅ FlashInfer GEMM + 量化 | ⚠️ fa4 后端 SM120 崩溃 | ❌ | ❌ | ❌ |
| **DeepSeek V4 / V4.1** | ✅ Sparse MLA FP8 KV-cache（ROCm） | ✅ Blackwell decode 优化 | ❌ | ❌ | ❌ |
| **Kimi K3.1 / K3.1 Pro** | ✅ 大型多分裂 PR（ROCm DCP、P/D） | ❌ | ✅ Vision 支持已合并 | ❌ | ❌ |
| **Muse Spark** | ✅ DSpark draft norms fusion | ❌ | ❌ | ❌ | ❌ |
| **Nemotron 3.5 Bolt** | ❌ | ❌ | ❌ | ✅ MLX per-layer expert routing | ❌ |
| **Phi4Flash** | ⚠️ V0 即将被移除；需迁移至 V1 | ❌ | ❌ | ❌ | ❌ |
| **MiniMax-H3-Image** | ❌ | ❌ | ❌ | ❌ | ✅ 文生图 + 参考图编辑 |
| **Kimi K3.1 Vision (mtmd)** | ❌ | ❌ | ✅ 多模态支持 | ❌ | ❌ |
| **Decision models (D1, Kev)** | ❌ | ❌ | ❌ | ✅ `/v1/systemone` 协议格式 | ❌ |

**领先者：** vLLM 在前沿模型覆盖上领先，尤其是 dense/MoE 模型（Qwen3.8、DeepSeek V4、GLM-5.3）。SGLang 排名第二，但受 SM120 和 fa4 兼容性问题困扰。Ollama 凭借 MLX 在 Apple Silicon 特定模型上领先。llama.cpp 架构覆盖最广，但对最新前沿模型原生支持最少。

---

## 4. 性能前沿

今日的优化工作集中在五个领域，KV 缓存架构和分布式服务收到最多并行投入。

### KV 缓存与多级存储
**vLLM** 是 KV 缓存创新的明确领导者：带数据完整性校验的文件系统卸载 RFC（[#54363](https://github.com/vllm-project/vllm/issues/54363)）、TP 无感知卸载（[#61886](https://github.com/vllm-project/vllm/issues/61886)）以及 RL 训练的直接权重重载（[#54477](https://github.com/vllm-project/vllm/issues/54477)）。**SGLang** 的 HiCache + Mooncake L3 统一方案（PR #49696、#46499、#46248）在架构上相似，但与 SRT 调度器集成更紧密。**Ollama** 修复了一个关键的 MLX KV 缓存泄漏问题——累积量与请求数而非上下文大小成正比。

### 投机解码 / DSpark
**vLLM** 和 **SGLang** 都在这里大力投入。vLLM 有 Muse Spark DSpark（PR #66764，−4.4% TPOT），而 SGLang 有 DeepSeek-V4.1 Blackwell 优化（PR #48456）和 EAGLE verify 中的注意力锚点（PR #47513）。然而，**vLLM 存在一个严重的未决 bug**：DFlash 在 TP>1 时接受率崩溃（[#66387](https://github.com/vllm-project/vllm/issues/66387)），这削弱了投机解码的生产部署可靠性。llama.cpp 也有一个量化目标投机解码的正确性问题（[#25618](https://github.com/ggml-org/llama.cpp/issues/25618)）。

### 量化路由
**vLLM** 的批不变式 GPTQ 路由通过 Hummingbird 实现（PR #66838），消除了每次调用时的权重解包/重新缩放开销——这是本周期最重要的量化效率提升。**SGLang** 有一个开放回归：JSON 定义的类 OpenAI provider 会丢失工具配置，除非模型在 catalog 中。

### 内核级优化
| 项目 | 内核工作 |
|---------|-------------|
| **vLLM** | FlashInfer warp split-K BF16 GEMM（SM107）、通过 AITER FlyDSL 实现 MXFP8（MI355X）、exact top-p cutoff CUDA 算子（SM90/Blackwell） |
| **SGLang** | Sparse MLA prefill 优化（SM100）、HiSparse swap-in planner prefix-scan 修复 |
| **llama.cpp** | MMA flash-attention 中 fused q8_0/q4_0 KV dequant；CUDA graph 复用时兼容跳过 |
| **Unsloth** | vLLM/SGLang 工具请求 `max_tokens` 修复 |

### 分布式服务
**SGLang** 的跨 DP prefill 延迟策略（PR #65655）防止了 MoE 数据并行 ranks 间的队首阻塞。**vLLM** 的 Mooncake 异构 TP 支持（PR #53078，需 rebase）解决了混合 GDN/Mamba 模型的调度问题——这是 DeepSeek-V4 部署的关键缺口。

---

## 5. 层级定位

每个项目在推理技术栈中占据独特位置，vLLM ↔ SGLang 之间的重叠最小。

```
┌─────────────────────────────────────────────────────────┐
│                    LiteLLM (Gateway)                     │  ← API 代理、多 provider 路由、费用核算、authZ
├─────────────────────────────────────────────────────────┤
│  Ollama（本地运行时）  │  Unsloth（微调/本地）             │  ← 面向终端用户、opinionated UX、MLX 后端、Studio UI
├─────────────────────────────────────────────────────────┤
│            vLLM  │  SGLang（服务引擎）                    │  ← 生产推理服务、KV 缓存、分布式服务、投机解码
├─────────────────────────────────────────────────────────┤
│               llama.cpp（运行时 / 底层）                  │  ← 量化推理、GGUF、硬件后端（CUDA/ROCm/Vulkan/SYCL/CANN）
└─────────────────────────────────────────────────────────┘
```

| 层级 | 项目 | 特点 |
|-------|----------|-----------------|
| **Gateway / 代理** | LiteLLM | 多 provider 抽象、费用追踪、authZ、自定义 LLM providers、guardrails |
| **本地 / 终端用户运行时** | Ollama、Unsloth | 一键部署、opinionated UX、MLX（Ollama）或训练导向（Unsloth）、无需 API 一致性 |
| **生产服务引擎** | vLLM、SGLang | 调度器、KV 缓存管理、投机解码、P/D 分解、多 GPU |
| **底层运行时** | llama.cpp | GGUF 量化、广泛的硬件后端、无内置调度器、可嵌入式 |

**重叠区域：** vLLM 和 SGLang 都瞄准带 KV 缓存和分布式服务的生产推理。区别在于 SGLang 的 SRT 调度器与前端（聊天 UI、Web 服务）集成更紧密，而 vLLM 更接近纯推理后端。Ollama *可以* 使用 vLLM 作为后端，但定位在不同的技术层级。

---

## 6. 趋势信号

### 1. AMD ROCm MI355X (gfx950) 现已晋升为一等公民
多个项目同时在为 MI355X 堆叠 PR：vLLM 有 MXFP8 GEMMs（PR #65479）、sparse MLA FP8 KV-cache（PR #66036）以及 Qwen3.8/Qwen3.8-Flash-Next 优化跟踪（#57149、#59575）。SGLang 有 DeepSeek-V4.1 gfx950 专用的追踪 issue（issue #49327）。ROCm CI  parity 工作（issue #38693，已关闭）表明 AMD 不再是二等公民。**基础设施工程师应评估 MI355X 用于成本敏感型生产工作负载**——硬件已就绪，软件支持正在收敛，与 NVIDIA H100 的价格差距可观。

### 2. 投机解码在大规模生产中仍未就绪
尽管投入巨大，每个项目都有未决的正确性问题：vLLM 的 DFlash 在 TP>1 时崩溃（#66387）、llama.cpp 的量化目标投机解码发散（#25618）、SGLang 在 Blackwell 上有 33–45% 的 decode 回归（#49336），以及 Unsloth 报告 UD 3.1 + Qwen3.8-Flash-Next MTP heads 时接受率下降约 20 个百分点。**计划在生产中部署投机解码的团队应预留额外的验证工作量并保持回退路径。**

### 3. 供应链安全是真实的生产运营风险
LiteLLM 的 v1.107.0 被植入后门——通过 PyPI 分发的凭据窃取 + RCE 加载器——是所有五个项目中影响最严重的单个事件。它证明即便是成熟的代理层也是攻击目标。**所有使用 LiteLLM 的团队应立即回滚到 `lts` Docker 镜像 tag**，并监控是否存在任何来自 2026 年 10 月中旬的 `latest` 拉取。更广泛地说，这一事件支持对所有推理层容器进行 cosign 验证，而不仅仅是 LiteLLM。

### 4. 多级 KV 缓存架构正在成为标准
vLLM 的文件系统卸载 RFC（#54363）、SGLang 的 HiCache + Mooncake L3 统一（#49696、#46499）以及 Ollama 针对 Vulkan 集成 GPU 的 mmap 支持，都指向同一个结论：**KV 缓存淘汰和分层现在是顶级系统设计考量**。随着上下文窗口向 1M token 推进，多模态输入（视频、图片）加剧内存压力，那些率先妥善解决此问题的项目将赢得生产部署。

### 5. vLLM 的 V0 → V1 迁移造成临时支持空档
vLLM 宣布 V0 将"很快"被弃用，使得 Phi4Flash 等模型（issue #23957）悬而未决。**依赖 vLLM V0 的应用开发者应立即启动迁移测试**，因为对使用 V0 特定适配（Mamba 层、自定义 attention 后端）的自定义模型架构而言，迁移将非轻而易举。

### 6. Apple Silicon (MLX) 正在加速成为一等推理目标
Ollama 的 MLX 后端现已支持并发生成、视频输入、决策模型以及带 per-layer expert routing 的 Nemotron 3.5 Bolt。MLX KV 缓存 bug 修复（issue #17875）标志着生产级成熟度。**面向 MacBook Pro / Mac Studio 部署的团队，Ollama + MLX 如今是集成度最高的堆栈**，在开发者体验上领先于 llama.cpp 的 Metal 后端。

### 7. 结构化输出回归在各引擎中均未得到解决
vLLM 结构化输出的约 2 倍 decode 回归（#62442）和 SGLang 的 stop-string 处理 bug（#41372）都影响 agentic pipeline。**对于构建工具调用或 JSON 输出工作流的应用程序开发者来说，这是影响最大的回归。** 所有项目都没有给出修复时间表。

---

*本摘要基于 2026-11-11 github.com 上 vllm-project/vllm、sgl-project/sglang、ggml-org/llama.cpp、BerriAI/litellm、unslothai/unsloth 及 ollama/ollama 的活动数据整理。所有时间均为 UTC。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the entire vLLM Daily Digest into Simplified Chinese. I need to:

1. Translate all headings, body text, and descriptions
2. Preserve all Markdown structure (tables, lists, headings, etc.)
3. Keep URLs, issue numbers, code spans, project names, and version tags as-is
4. Use natural technical Chinese appropriate for a developer newsletter
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through section by section and translate it carefully.

Title: "vLLM Daily Digest — 2026-11-11" → "vLLM 每日简报 — 2026-11-11"

Then the highlights section, releases, new model/hardware support tables, performance sections, etc.

Key terms to translate consistently:
- "Breaking Changes" → "破坏性变更"
- "Highlights" → "今日要点"
- "Releases" → "版本发布"
- "New Model & Hardware Support" → "新模型与硬件支持"
- "Performance & Optimization" → "性能与优化"
- "Stability & Regressions" → "稳定性与回退问题"
- "Critical Bugs" → "关键缺陷"
- "Land" → "合入"
- "Open" → "开放中"
- "Closed" → "已关闭"
- "Severity" → "严重程度"
- "Description" → "描述"

I need to be careful with technical terms that are commonly used in Chinese tech communities:
- "throughput" → "吞吐量"
- "latency" → "延迟"
- "regression" → "回退/性能回退"
- "kernel" → "内核/算子"
- "backward compatibility" → "向后兼容"
- "deployment" → "部署"


- "configuration" → "配置"
- "optimization" → "优化"

Now I'll proceed with the full translation, maintaining the markdown structure and ensuring natural Chinese technical language throughout.
</think>


# vLLM 每日简报 — 2026-11-11

## 今日要点

本周期 vLLM 社区重点聚焦 AMD ROCm 优化，相关 PR 覆盖 MI355X（gfx950）上的 Qwen3.8、DeepSeek V4.1 和 MiniMax-M3.1 模型。同时，影响张量并行度 > 1 时 DFlash 投机解码接受率崩溃的关键缺陷正在积极修复中，项目正在试点用 Rust 正则引擎替换 Python 的 `regex` crate 以处理响应解析。

---

## 版本发布与破坏性变更

过去 24 小时内无新版本发布。以下弃用/移除事项处于活跃状态：

| 事项 | 描述 | Issue/PR |
|------|-------------|----------|
| V0 即将移除 | V0 将在"非常近期"被弃用；Phi4Flash 模型支持必须迁移到 V1 才能保留 | [#23957](https://github.com/vllm-project/vllm/issues/23957) |

---

## 新模型与硬件支持

### 模型
| 模型 | 支持状态 | 备注 |
|-------|---------------|-------|
| **GLM-5.3** | 性能工作进行中 | 与 5.2 相同的 `glm_moe_dsa` 架构；针对 SM107 FlashInfer GEMM 的额外优化 PR 正在推进 | [#65706](https://github.com/vllm-project/vllm/pull/65706), [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **Kimi K3.1 Pro** | 大型多拆 PR 审核中 | 第 5/6 部分推进中（ROCm DCP、P/D 打包混合缓存、indexer top-k）；第 1–4 部分已合入 | [#65685](https://github.com/vllm-project/vllm/pull/65685) |
| **DeepSeek V4 / V4.1** | ROCm FP8 KV 缓存支持 Sparse MLA | 通过 AITER sparse MLA kernel 在 gfx950 上启用逐张量 FP8 KV 缓存（`--kv-cache-dtype fp8_e4m3`） | [#66036](https://github.com/vllm-project/vllm/pull/66036) |
| **Muse Spark** | NVIDIA DSpark 草稿归一化融合 | 在 SM100 上融合草稿归一化与马尔可夫采样尾部；TPOT 降低 4.4% | [#66764](https://github.com/vllm-project/vllm/pull/66764) |
| **Phi4Flash** | 需要 V1 移植 | V0 即将被弃用；需要自定义 Mamba 层适配 | [#23957](https://github.com/vllm-project/vllm/issues/23957) |
| **SigLIP2** | Bugfix 已合入 | 聊天模板之前错误使用 Gemma 而非 SigLIP 的模板；现已修复以确保嵌入一致 | [#66624](https://github.com/vllm-project/vllm/pull/66624) |

### 硬件与后端
| 平台 | 更新 | 详情 |
|----------|--------|---------|
| **AMD MI355X (gfx950)** | MXFP8 线性层通过 AITER FlyDSL | 新的 `AiterFlyDSLMxfp8LinearKernel` 用于调优后的 (N,K) 形状；其他情况回退到 Triton | [#65479](https://github.com/vllm-project/vllm/pull/65479) |
| **AMD MI350X (gfx942)** | Muse Spark 性能优化 | FP8 PTPC 调优 GEMM 表条目 | [#64018](https://github.com/vllm-project/vllm/issues/64018) |
| **NVIDIA SM107** | GLM 低延迟 GEMM 表扩展 | FlashInfer warp split-K BF16 + vLLM `ll_bf16` GEMM 与 CuTe skinny GEMM 并列加入 | [#65706](https://github.com/vllm-project/vllm/pull/65706) |
| **Intel XPU** | CI 加固 | 未安装 `lmcache` 时跳过 `LMCacheMPConnector` 测试；额外在 TP=2 分布式关闭任务中跳过 | [#66924](https://github.com/vllm-project/vllm/pull/66924), [#66568](https://github.com/vllm-project/vllm/pull/66568) |
| **Rust 正则引擎** | RFC 进行中 | 提议从 Python `regex` crate 切换到 `regex-lite` 或 `regress` 用于响应解析（当前 crate 不支持后顾断言） | [#65959](https://github.com/vllm-project/vllm/issues/65959) |

---

## 性能与优化

### 已合入 / 审核中
| 领域 | 变更 | 影响 | PR/Issue |
|------|--------|--------|----------|
| **SM107 上 GLM-5.3** | 新增 FlashInfer warp split-K BF16 GEMM 和 `ll_bf16` GEMM 到低延迟表 | 改善投影层延迟 | [#65706](https://github.com/vllm-project/vllm/pull/65706) |
| **SM100 上 Muse Spark DSpark** | 融合草稿归一化与马尔可夫采样尾部 | TPOT 降低 4.4%（自适应批次） | [#66764](https://github.com/vllm-project/vllm/pull/66764) |
| **Batch-invariant GPTQ Linear** | 选中时通过 Hummingbird 路由 | 消除每次调用完整的权重解压/重新缩放开销 | [#66838](https://github.com/vllm-project/vllm/pull/66838) |
| **TP8 上 DSv4.1 Mono** | 调优 K1 注意力路径 | 改善 TP8 配置下的注意力接缝和前端 | [#64152](https://github.com/vllm-project/vllm/pull/64152)（已关闭） |
| **Top-p 截断 CUDA 算子** | 新 `topp_cutoffs_lse` 内核（SM90, Blackwell） | 单次 launch 精确 top-p 截断并保留 LSE；为未来采样改进铺路 | [#65101](https://github.com/vllm-project/vllm/pull/65101) |
| **跨 DP prefill 延迟器** | 新 `--prefill-schedule-policy delayer` | 跨 MoE 数据并行 rank 对齐 prefill 决策；防止队头阻塞 | [#65655](https://github.com/vllm-project/vllm/pull/65655) |

### 正在调查的问题
| Issue | 严重程度 | 描述 |
|-------|----------|-------------|
| [#57149](https://github.com/vllm-project/vllm/issues/57149) | 高 | MI355X 上 Qwen3.8-2.4T：针对 amd/Qwen3.8-2.4T-A95B-Quark-MXFP4 的堆叠 ROCm 优化 PR |
| [#59575](https://github.com/vllm-project/vllm/issues/59575) | 高 | MI355X 上 Qwen3.8-Flash-Next：针对 `qwen4_exp`（GatedDeltaNet、QuerySparse Attention、MXFP4 MoE）的类似堆叠 PR 计划 |
| [#63705](https://github.com/vllm-project/vllm/issues/63705) | 中 | MiniMax-M2.7 在 TP4+EP 下相比早期版本吞吐量回退 |
| [#65569](https://github.com/vllm-project/vllm/issues/65569) | 中 | Batch-invariant 模式下某些 Linear 层被错误路由到 Triton（即使 cuBLAS 是 batch-invariant 的；cuBLAS 路由提案已撤回，因为 cuBLAS 并非普遍支持 batch-invariant） |
| [#64572](https://github.com/vllm-project/vllm/issues/64572) | 中 | Triton/eager 注意力后端每次调用重新派生 K/V 缓存视图（与 #59534 中 FlashAttention 的根本原因相同） |
| [#62442](https://github.com/vllm-project/vllm/issues/62442) | 中 | 自 #45424 以来结构化输出 decode 吞吐量约 2x 回退；#49919 未修复 |

---

## 稳定性与回退问题

### 关键缺陷
| 缺陷 | 严重程度 | 状态 | 修复 PR |
|-----|----------|--------|--------|
| **TP>1 时 DFlash 接受率崩溃** — DFlash 草稿器（XiaomiMiMo/MiMo-V2.6-Flash-MOPD）在 TP>1 时失败，TP1 正常 | **高** | 开放中，积极调查 | 暂无 |
| **ModelOpt Llama-4 检查点加载需 5+ 分钟** 从 CPU 页面缓存加载；根本原因在 state dict hack 加载逻辑 | **高** | 已关闭（曾以 25 条评论开放） | 数据中未追踪 |

### 已合入的重要修复
| 缺陷 | 描述 | PR |
|-----|-------------|-----|
| **FlashInfer 单侧 workspace 在 teardown 时泄漏** | `FlashInferNVLinkOneSidedManager.destroy()` 现正确释放其 communicator | [#63874](https://github.com/vllm-project/vllm/pull/63874) |
| **NIXL P/D 分离推送停滞** | `NIXL_ERR_REMOTE_DISCONNECT` 时重新握手 peer；推送时提前停止 block 释放 | [#66795](https://github.com/vllm-project/vllm/pull/66795) |
| **ECMooncakeConnector 编码器重置时本地缓存过期** | `reset_encoder_cache` 时现在清除本地缓存，避免服务过期嵌入 | [#66846](https://github.com/vllm-project/vllm/pull/66846) |
| **DSpark 自适应决策未跨 TP rank 同步** | AMD/NVIDIA/XPU 上 DeepSeek-V4 DSpark 同步修复 | [#62769](https://github.com/vllm-project/vllm/pull/62769)（已关闭） |
| **DeepSeek-V4 DSpark 缺失 `packed_modules_mapping`** | 导致模型加载失败；影响 AMD、NVIDIA、XPU | [#65647](https://github.com/vllm-project/vllm/pull/65647) |
| **SigLIP2 嵌入不一致** | 使用了 Gemma 聊天模板而非 SigLIP 的；已修复 | [#66624](https://github.com/vllm-project/vllm/pull/66624) |

### 开放中的问题
| Issue | 严重程度 | 描述 |
|-------|----------|-------------|
| [#66387](https://github.com/vllm-project/vllm/issues/66387) | **高** | TP>1 时 DFlash 接受率崩溃（MiMo-V2.6-Flash-MOPD，TP1 正常） |
| [#28498](https://github.com/vllm-project/vllm/issues/28498) | 中 | 2P4D DeepSeek-V3 配置下 ZMQ 端口冲突 socket 缺陷 |
| [#40279](https://github.com/vllm-project/vllm/issues/40279) | 中 | 长响应场景下 48–72 小时后负载均衡器无法跨数据并行轴分配样本 |
| [#54383](https://github.com/vllm-project/vllm/issues/54383) | 低-中 | 首次启动使用特定 `(max-num-batched-tokens, max-num-seqs)` shape 时的 KV 缓存比后续相同启动小约 5% |

---

## 对应用开发者的意义

1. **如果你在 AMD MI355X/MI350X 上运行**：Qwen3.8、DeepSeek V4.1 和 MiniMax-M3.1 的主动优化工作意味着即将到来的每日构建将带来可观的吞吐量提升。关注 [#57149](https://github.com/vllm-project/vllm/issues/57149) 和 [#59575](https://github.com/vllm-project/vllm/issues/59575) 追踪 PR 合入情况。

2. **如果你在 NVIDIA 上使用 GLM-5.3 或 Muse Spark**：SM107 低延迟 GEMM 表和 DSpark 草稿融合工作应该会改善 decode 延迟。这些改进正在审核中；预计在未来 1–2 个周版本中发布。

3. **如果你使用结构化输出生成**：`apply_grammar_bitmask` 分阶段改造以来的约 2x decode 回退（[#62442](https://github.com/vllm-project/vllm/issues/62442)）仍未修复。如果你受到影响，最佳路径是在该 issue 上提供基准数据并参与讨论。

4. **如果你在 TP>1 时使用 DFlash/MiMo 投机解码**：在 [#66387](https://github.com/vllm-project/vllm/issues/66387) 解决之前，避免 XiaomiMiMo/MiMo-V2.6-Flash-MOPD 的 TP>1 配置。TP1 已确认正常。

5. **如果你通过 Mooncake 或 NIXL 运行 P/D 分离的 vLLM**：[#66795](https://github.com/vllm-project/vllm/pull/66795)、[#66846](https://github.com/vllm-project/vllm/pull/66846) 和 [#53078](https://github.com/vllm-project/vllm/pull/53078)（混合 GDN/Mamba 模型的异构 TP 支持）中合入的 bugfix 在持续负载下提升了可靠性。异构 TP 修复标记为 `needs-rebase`；请持续关注合并状态。

6. **如果你使用 V0 引擎**：迁移到 V1 刻不容缓——团队已声明 V0 将很快被弃用。像 Phi4Flash 这样尚未移植的模型将变为不可用。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the English technical digest about SGLang into Simplified Chinese. I need to:
1. Translate the content naturally into Chinese technical language
2. Preserve all Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, code references, version tags as-is
4. Use natural technical Chinese register

Let me translate section by section while maintaining the structure.

Key terms to translate consistently:
- "Digest" → 文摘/速报
- "Releases" → 版本发布
- "Highlights" → 今日要点
- "Breaking Changes" → 重大变更
- "Model & Hardware Support" → 新模型与硬件支持
- "Performance & Optimization" → 性能与优化
- "Stability & Regressions" → 稳定性与回退问题
- "Critical/High/Medium" severity labels
- Technical terms like "decode", "prefill", "CUDA-graph", "attention backend", "kernel", etc.

Let me work through this carefully, preserving all formatting.
</think>


# SGLang 每日文摘 — 2026-11-11

## 1. 今日要点

CI 基础设施问题持续占据社区关注焦点，issue #42752 已积累 192 条评论，讨论 NVIDIA PR 测试基础包/附加包中的不稳定性测试。量化改造路线图（#15194）已关闭，敲定了基于 scheme 的压缩方案（compressed_tensors、quark）与非 scheme 方案（modelslim、AWQ）的重构计划。SM90 解码性能回退（v0.5.22 → v0.5.23，单步耗时增加 33–45%，#49336）已有报告。

---

## 2. 版本发布与重大变更

| 项目 | 说明 | 链接 |
|------|------|------|
| **暂无新版本** | 过去 24 小时内无版本发布 | — |

**值得关注的里程碑：** Issue #15194（量化改造路线图）已关闭，各压缩后端 scheme 结构标准化方案已达成共识。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 详情 | 状态 | 链接 |
|------------|------|------|------|
| **Qwen4-Exp** | HiCache 统一 Engram 存储集成已提交 | PR #46248 开放中 | [PR #46248](https://github.com/sgl-project/sglang/pull/46248) |
| **GLM-5.3-Flash** | SM120（RTX PRO 6000）— fa4 attention 后端在 CUDA-graph 捕获时崩溃；triton 后端可作临时方案 | Issue #42012 开放中 | [Issue #42012](https://github.com/sgl-project/sglang/issues/42012) |
| **GLM-4.7-Flash** | W4A16 compressed-tensors 问题：packed layers 中缺失 `kv_b_proj.weight` | Issue #49369 开放中 | [Issue #49369](https://github.com/sgl-project/sglang/issues/49369) |
| **DeepSeek-V4.1-Flash** | AMD gfx950 / MI355X 优化跟踪中 | Issue #49327 开放中 | [Issue #49327](https://github.com/sgl-project/sglang/issues/49327) |
| **Qwen4-Exp PLE** | BF16 n-gram 分片被错误地以单位 scale 强转为 FP8 | Issue #49493 开放中 | [Issue #49493](https://github.com/sgl-project/sglang/issues/49493) |
| **AMD RDNA3/RDNA4** | gfx1100/gfx1201 CI 及上游纳入计划 | Issue #46900 开放中 | [Issue #46900](https://github.com/sgl-project/sglang/issues/46900) |
| **SM120 支持** | 按路线图 #19637 持续推进内核覆盖工作 | 跟踪中 | [Issue #37813](https://github.com/sgl-project/sglang/issues/37813) |

---

## 4. 性能与优化

### 已合入 / 评审中

| PR | 优化内容 | 范围 | 链接 |
|----|---------|------|------|
| **#49696** | 将 SSD 中的 KV 数据预取至存储层 DRAM（队列等待期间，UnifiedL3） | Mooncake, HiCache | [PR #49696](https://github.com/sgl-project/sglang/pull/49696) |
| **#48456** | DeepSeek-V4.1：Blackwell 解码批次中 BF16x3 格式的 side-stream mHC 混合 | NVIDIA, Blackwell | [PR #48456](https://github.com/sgl-project/sglang/pull/48456) |
| **#49677** | 调度器：请求列表仅通过 `move` 及 retirer 修改 | 核心调度器 | [PR #49677](https://github.com/sgl-project/sglang/pull/49677) |
| **#49631** | 在获取共享内存文件锁前对编码加载进行快照 | 核心 SRT | [PR #49631](https://github.com/sgl-project/sglang/pull/49631) |
| **#48891** | SM100：小 head 稀疏 MLA prefill 优化 | NVIDIA, SM100 | [PR #48891](https://github.com/sgl-project/sglang/pull/48891) |
| **#47513** | split-KV EAGLE verify kernel 中的 attention sinks | Triton 后端 | [PR #47513](https://github.com/sgl-project/sglang/pull/47513) |
| **#49576** | Diffusion：O(1) 条件缓存淘汰，支持配置条目上限 | Diffusion | [PR #49576](https://github.com/sgl-project/sglang/pull/49576) |
| **#49666** | HiCache：使 buffer 回填的归属权检查在入队时不阻塞 GPU | HiCache | [PR #49666](https://github.com/sgl-project/sglang/pull/49666) |
| **#43360** | AMD：Quark MXFP4 dense GEMM 可选后端 via `--fp4-gemm-backend aiter|triton` | AMD ROCm | [PR #43360](https://github.com/sgl-project/sglang/pull/43360) |
| **#38243** | HiSparse：修复 swap_in_block_size < 512 时 swap-in 规划器 prefix-scan 损坏问题 | JIT 内核 | [PR #38243](https://github.com/sgl-project/sglang/pull/38243) |

### 报告的性能差距

| Issue | 现象 | 硬件 | 链接 |
|-------|------|------|------|
| **#33422** | DeepSeek-V4 prefill 约 2–7K tok/s，低于 vLLM/marlin 报告的约 12.5K | 4× RTX PRO 6000, TP=4 | [Issue #33422](https://github.com/sgl-project/sglang/issues/33422) |
| **#47481** | HiCache + Mooncake 在 L2/L3 容量压力下可复现缓存命中率下降 | 多级缓存 | [Issue #47481](https://github.com/sgl-project/sglang/issues/47481) |

---

## 5. 稳定性与回退问题

### 严重 / 高优先级

| 严重度 | Issue | 描述 | 修复 PR |
|--------|-------|------|---------|
| 🔴 **严重** | #49336 | SM90 解码回退 v0.5.22 → v0.5.23：并发 12（8K–64K）时单步耗时 **+33–45%**；`use_deep_select_decode` 对 Hopper 产生了额外接受开销 | 暂无 |
| 🔴 **严重** | #42012 | GLM-5.3-Flash on SM120：fa4 attention 后端在 CUDA-graph 捕获时崩溃（hybrid extend reshape）— **仅 triton 后端可作为临时方案** | 暂无 |
| 🟠 **高** | #49519 | rust-server：`/generate` 文本 prompt 在 tokenizer 使用 `add_bos_token` 时缺失 BOS | 暂无 |
| 🟠 **高** | #41372 | `Req.decoded_text` 从未被写入 → 停止字符串后备逻辑死掉 + 淘汰重初始化时 DecodeStatus seed 为空 | 暂无 |
| 🟠 **高** | #48791 | 推理解析器在首个 `</think>` 处截断；CoT 中引号内闭合标签导致 `reasoning_content` 截断并泄漏至输出 | 暂无 |
| 🟡 **中** | #49340 | JIT 内核在共享头文件变更后冷缓存时 B200 超时（48–61 分钟 vs 60 分钟限制） | 暂无 |
| 🟡 **中** | #49369 | GLM-4.7-Flash W4A16：packed layers 中缺失 `kv_b_proj.weight` 导致 MLA 后加载失败 | 暂无 |
| 🟡 **中** | #49493 | Qwen4-Exp PLE：BF16 n-gram 分片以单位 scale 强转为 FP8 | 暂无 |

### 基础设施

| Issue | 描述 | 链接 |
|-------|------|------|
| **#42752** | NVIDIA PR Test Base/Extra 运行中持续出现的不稳定测试 / CI 基础设施故障（192 条评论） | [Issue #42752](https://github.com/sgl-project/sglang/issues/42752) |

---

## 6. 对应用开发者的影响

**需要立即关注的事项：**

- **如果你在使用 Blackwell（SM90）运行 DeepSeek-V4.1-Flash + DSpark**：请停留在 v0.5.22；v0.5.23 的回退问题在生产并发量下会使单步解码延迟增加约 35–45%。
- **如果你在 RTX PRO 6000（SM120）上使用 GLM-5.3-Flash**：请强制使用 Triton attention 后端（`--attention-backend triton`），因为 fa4 在 hybrid extend 配合 CUDA-graph 捕获时会崩溃。
- **如果你使用 rust-server `/generate` 端点**：存在一个 BOS token bug，当 tokenizer 设置 `add_bos_token=True` 时响应可能缺少必需的序列起始标记。

**值得关注的新能力：**

- **HiCache + Mooncake 统一 L3**：PR #49696 和 #46499 引入了可配置的 SSD 层预取和 Mooncake 存储后端；长前缀的多轮工作负载预期将获得更优的缓存利用率。
- **Qwen4-Exp 统一 Engram 存储**：PR #46248 为 Qwen4-Exp 启用了 HiCache 后端支持；建议在 Qwen4-Exp 部署场景中测试前缀缓存效果。
- **cuDNN attention 后端**：Issue #2272 追踪社区长期呼吁的 cuDNN 路径实现，欢迎贡献者参与。

**持续关注事项：**

- CI 跟踪 issue #42752 已积累 192 条评论，表明自动化测试仍存在不稳定性；如果你在提 PR，预计测试时间和偶发的伪失败会增加，可能需要重新触发 CI。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this technical report about llama.cpp from English to Simplified Chinese. I need to:

1. Translate all the text content to Simplified Chinese
2. Preserve all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, link targets, code spans, numbers, dates, issue references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese register
6. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

**Title:** llama.cpp Digest — 2026-11-11
"llama.cpp 每日简报 — 2026-11-11"

**Today's Highlights:**
"今日要闻"

**First paragraph:**
The past 24 hours brought significant backend optimization work, particularly for CUDA memory management and SYCL concurrency. Most notably, a long-standing speculative decoding divergence issue with quantized targets has resurfaced with 40 comments, highlighting potential correctness concerns for production deployments. New vision model support for Kimi K3.1 landed alongside continued refinements to the mtmd pipeline.

过去 24 小时主要聚焦于后端优化工作，尤其是 CUDA 内存管理和 SYCL 并发方面的改进。最值得关注的是，一个长期存在的量化目标分歧问题在投机解码中再次浮出水面，收到了 40 条评论，凸显出生产环境中可能存在的正确性问题。同时，Kimi K3.1 视觉模型支持正式落地，mtmd 管线也持续完善中。

**Releases & Breaking Changes:**
"版本发布与重大变更"

"No formal version tags were cut in this period. However, two changes carry breaking implications:"
本周期未发布正式版本标签。但有两项变更可能产生影响：


I'll continue translating the content, focusing on the technical details and maintaining the precise technical Chinese register. The key points involve hardware memory modifications and potential system implications.

The modifications focus on CUDA memory pool strategies, specifically reducing virtual memory management allocation from 16 to 8 gigabytes on GPUs with combined memory architecture. This adjustment includes implementing robust out-of-memory handling mechanisms. Additionally, a CUDA graph and stream state refactoring aims to improve build performance, ensuring no API changes while streamlining backend operations.

**Migration note:**
**迁移注意：** If your application depends on CUDA virtual memory reservation methods, it is crucial to validate workload stability after system updates. This proactive verification will help prevent potential runtime complications and ensure smooth integration with the new memory management approach.

**Model and Hardware Support:**
**新增模型与硬件支持：**

The system introduces novel vision and audio capabilities, including Kimi K3.1 Vision with comprehensive multimodal support and ZONOS3-Mini TTS model integration. However, users should note the original model ships with a proprietary GGML runtime that is incompatible with the current implementation.

Additionally, the Plamo2 recurrent cache modification resolves tensor lookup complexities by preventing tensor renaming operations, which previously caused potential identification challenges during computational processes.

**Performance Optimization:**
**性能与优化：**

Multiple backend optimizations target specific hardware platforms. The SYCL enhancement reduces thread locking overhead, while CUDA's fused quantization approach eliminates redundant computational passes. HIP/ROCm backend demonstrates improved test compatibility, with successful test suite completion and memory optimization strategies for subcontext workloads.

CUDA graph reuse improvements, CANN Ascend 910B3 correctness fixes, and diagnostic capabilities round out the latest performance enhancements across different computational architectures.

Key ongoing developments include Vulkan flash-attention optimizations for generalized query attention and NUMA weight replication strategies, with current work in progress targeting performance and memory efficiency improvements.

Critical stability concerns emerge around speculative decoding, particularly with quantized models and large language models like Llama-3.1-405B, which currently show potential segfault risks and memory allocation challenges across different hardware platforms.

These stability issues suggest potential compatibility and memory management challenges that require careful monitoring and targeted debugging efforts.

The SYCL performance degradation on dual Arc Pro B60 configurations indicates significant optimization needs, especially with layer-splitting strategies that currently introduce substantial computational overhead.

A potential hardcoded configuration in `auto_fgdn` prevents proper execution of fused GDN probes, while llama-server validation gaps expose potential security vulnerabilities in header processing.

Upcoming developments for developers include cautionary notes around quantized and speculative decoding approaches, highlighting the need for careful model selection and memory management strategies.

Specifically, CUDA memory allocation modifications could trigger out-of-memory scenarios for large models on combined-memory GPU configurations, requiring proactive memory monitoring and optimization. ROCm 6.3+ improvements promise enhanced backend test reliability, while new multimodal model support emerges through Kimi K3.1 architecture integration. SYCL concurrency enhancements will likely deliver performance gains for Intel Arc and Data Center GPU deployments.

Translating the document title and highlights, the report captures recent technical developments with precision. Key modifications include CUDA memory management adjustments, backend performance optimizations, and strategic model support expansions across vision and audio domains.

The release section emphasizes no new formal version tags emerged, though significant changes suggest potential system-level modifications. Backend teams have focused on CUDA memory optimization and SYCL concurrency improvements, with a particular emphasis on resolving speculative decoding challenges in quantized target configurations.

The migration guidance highlights critical configuration changes: CUDA VMM pool reservation size has been halved, potentially impacting large model performance on specific GPU architectures like RTX 4090, with explicit out-of-memory handling protocols now integrated.

Internal infrastructure modifications involve restructuring CUDA graph and stream state management, strategically relocating core components from `common.cuh` to `ggml-cuda.cu`. While these changes optimize build efficiency, they do not alter the external application programming interface, ensuring minimal disruption for existing implementations.

The developer communication emphasizes careful validation of workload stability post-update, recognizing potential implications for applications relying on precise CUDA virtual memory reservation strategies.

New hardware and model support expand platform capabilities, introducing specialized vision processing for Kimi's K3.1 architecture. The multimodal support includes refined projector machine learning pipeline configurations and preprocessor enhancements for K2.5 and K3.1 model variants. A novel text-to-speech model integration highlights platform compatibility considerations, specifically noting runtime implementation differences.

The Plamo2 recurrent cache optimization represents a critical tensor management refinement. By preventing tensor renaming during cache operations, the modification resolves potential tensor lookup challenges, ensuring more robust and predictable computational behavior across model inference scenarios.

Performance analysis indicates no immediate quantization format or backend target expansions, signaling a period of infrastructure consolidation and optimization rather than broad feature development.

Optimization efforts span multiple hardware platforms, targeting computational efficiency and memory utilization. Key improvements include thread-local device ID caching to reduce synchronization overhead, intelligent dequantization strategies in CUDA flash attention kernels, and strategic BLAS workspace allocation to minimize per-call memory fragmentation.

Specific achievements include ROCm compatibility resolution, subcontext memory management enhancements, and targeted compatibility optimization for CUDA graph reuse patterns, collectively representing a comprehensive approach to computational performance refinement.

The Ascend 910B3 architecture receives critical attention through flash attention NaN mitigation, implementing precise attention mask propagation techniques. Additionally, CUDA buffer pool debugging capabilities now provide enhanced diagnostic visibility for scratch memory allocation tracking.

Ongoing research explores NUMA mirror replication strategies and Vulkan-based flash attention optimizations, targeting complex multi-head attention configurations with sophisticated row tile transformations across varying generalized query attention ratios.

Critical stability challenges emerge around speculative decoding quantization, particularly with advanced models like Q4_K_M, highlighting potential inference consistency risks that demand immediate resolution.

Severe system integrity concerns persist with large-scale model deployments, specifically segfault vulnerabilities in massive parameter models across heterogeneous computational environments, signaling fundamental architectural synchronization challenges.

The investigation reveals interconnected memory management and concurrency issues spanning multiple hardware acceleration platforms, suggesting systemic optimization requirements that transcend individual hardware ecosystem constraints.

Emerging hardware-specific challenges include NUMA topology complexities and SYCL thread synchronization limitations that fundamentally impact computational efficiency, demanding comprehensive architectural refinement strategies.

Diagnostic observations highlight persistent configuration constraints and validation gaps, particularly around audio processing pipelines and server-side request handling mechanisms that introduce potential systemic vulnerabilities.

The systematic review underscores the critical need for holistic performance engineering, emphasizing cross-platform compatibility and robust memory allocation strategies to mitigate computational resource fragmentation.

Key recommendations focus on cautious deployment of quantized model configurations, with particular emphasis on maintaining bf16 target references during speculative decoding scenarios to ensure inference reliability and model accuracy.

Proactive memory monitoring becomes paramount, especially on combined-memory GPU environments, to preempt potential out-of-memory conditions during large model inference workflows. ROCm 6.3+ platforms offer promising backend test compatibility improvements through targeted BLAS workspace optimizations.

Developers integrating Kimi K3.1 vision architectures should validate current implementation stability, while Intel Arc and Data Center GPU users can anticipate significant per-inference latency reductions from SYCL concurrency enhancements.

Table cell alignment verification remains critical, with "Details" header requiring consistent vertical centering to maintain precise formatting standards across documentation. 跨硬件平台优化持续推进，涵盖内存管理、并发性能提升。CUDA 虚拟内存池预留策略调整，VMM 池大小从 16 GB 减半至 8 GB，并引入内存分配失败自动重试机制。代码重构涉及 CUDA 图和流状态迁移，旨在改善构建性能。

内部重构通过将状态管理模块化，提升系统整体架构清晰度。模型支持方面，引入 Kimi K3.1 视觉模型，新增 ZONOS3-Mini TTS 模型，并完善 Plamo2 循环缓存张量处理机制。

性能优化聚焦 GPU 资源高效利用。SYCL 通过线程本地缓存设备 ID 减少锁竞争，CUDA 实现 q8_0/q4_0 融合去量化，HIP/ROCm 优化 BLAS 工作区分配，显著降低内存碎片化风险。

ROCm 6.3+ 系统性能显著提升，测试覆盖率达 24/24 个操作符。针对 Ascend 910B3 架构的注意力机制进行精细调整，确保计算精度和稳定性。

Vulkan 和 NUMA 相关优化持续推进，探索 NUMA 镜像和 Vulkan 闪光注意力等前沿技术。重点关注分层模式下的性能和可扩展性问题。 内存管理问题持续威胁系统稳定性。HIP 平台和 CUDA 图优化凸显了硬件兼容性和资源调度的复杂性。关键风险包括内存分配异常、跨平台性能瓶颈和潜在的内存泄漏。特别是在 NUMA 架构和 GPU 协同计算场景中，系统可靠性面临严峻挑战。

投机解码和内存池配置调整增加了系统潜在的不稳定性风险。需要在 bf16 目标模型验证、CUDA 内存预留和 HIP/ROCm 后端测试中保持高度警惕。

新模型和并发优化为多模态推理和 GPU 利用率带来显著改进。Intel Arc 平台性能提升尤为突出，值得开发者重点关注。

继续检查表格格式和行对齐问题。当前表格结构存在行长度不一致和列间距不统一的情况，需要精细调整以确保整体美观性。

特别是最后一行注释位置需要调整，保持与前一行列间距一致。行长度和注释对齐是关键优化点。
</think>


# llama.cpp 每日简报 — 2026-11-11

## 今日要闻

过去 24 小时主要聚焦于后端优化工作，尤其是 CUDA 内存管理和 SYCL 并发方面的改进。最值得关注的是，一个长期存在的量化目标分歧问题在投机解码中再次浮出水面，收到了 40 条评论，凸显出生产环境中可能存在的正确性问题。同时，Kimi K3.1 视觉模型支持正式落地，mtmd 管线也持续完善中。

---

## 版本发布与重大变更

本周期未发布正式版本标签。但有两项变更可能产生影响：

| Commit | 变更 | 影响 |
|--------|--------|--------|
| [#31837](https://github.com/ggml-org/llama.cpp/pull/31837)（由 b12263 引入） | **CUDA VMM 池预留大小减半**，合并内存 GPU 从 16 GB 降至 8 GB，并增加了 `cuMemAddressReserve` 失败时的自动重试机制 | 在 RTX 4090 等显存受限的 GPU 上运行超大模型时可能触发 OOM；现已添加显式 OOM 处理 |
| [#32001](https://github.com/ggml-org/llama.cpp/pull/32001) | CUDA 图/流状态从 `common.cuh` 移至 `ggml-cuda.cu` | 内部重构；编译时间将缩短，无 API 变更 |

**迁移注意：** 如果你的应用依赖 CUDA 虚拟内存预留模式，请在更新后验证工作负载的稳定性。

---

## 新增模型与硬件支持

| 项目 | 详情 |
|------|---------|
| **Kimi K3.1 Vision**（b12259，[#31980](https://github.com/ggml-org/llama.cpp/pull/31980)） | 新增对 Kimi K3.1 视觉架构的多模态支持，包括投影器 MLP 及 K2.5 和 K3.1 变体的预处理器修复 |
| **ZONOS3-Mini TTS**（[#32020](https://github.com/ggml-org/llama.cpp/pull/32020)） | 新增 TTS 模型集成；注意原模型附带自定义 GGML 运行时，**与此版本不兼容** |
| **Plamo2 循环缓存**（b12255，[#31984](https://github.com/ggml-org/llama.cpp/pull/31984)） | 停止对循环缓存张量进行重命名，解决了潜在的张量查找问题 |

本期无新增量化格式或后端目标。

---

## 性能与优化

### 已合入

| PR | 领域 | 描述 | 效果 |
|----|------|-------------|---------------|
| [#32013](https://github.com/ggml-org/llama.cpp/pull/32013) | SYCL | 在 `set_main_device()` 中使用线程本地缓存的设备 ID，以避免每次图计算时的互斥锁竞争 | 降低 SYCL 工作负载延迟 |
| [#31802](https://github.com/ggml-org/llama.cpp/pull/31802) | CUDA | 将 q8_0/q4_0 KV 去量化融合到 MMA flash-attention 内核中 | 消除独立的去量化步骤；节省内存带宽 |
| [#31838](https://github.com/ggml-org/llama.cpp/pull/31838) | HIP/ROCm | 固定分配 32 MB 的 BLAS 工作区，初始化时一次性分配而非每次调用重新分配 | ROCm `test-backend-ops -o SOLVE_TRI` 现已通过 24/24（之前因 `HSA_STATUS_ERROR_MEMORY_FAULT` 而中止） |
| [#31945](https://github.com/ggml-org/llama.cpp/pull/31945) | mtmd | 在子上下文之间共享计算缓冲区 | 减少多子上下文工作负载的内存碎片 |
| [#32004](https://github.com/ggml-org/llama.cpp/pull/32004) | CUDA | 复用图时跳过兼容性检查 | 重复图模式调度更快 |
| [#31590](https://github.com/ggml-org/llama.cpp/pull/31590) | CANN（昇腾） | 通过正确传递 `attention_mask` 修复 flash attention NaN 问题 | 昇腾 910B3 正确性修复 |
| [#31919](https://github.com/ggml-org/llama.cpp/pull/31919) | CUDA | 调试缓冲区池（`GGML_CUDA_POOL_DEBUG=1`）用于追踪临时内存分配 | 诊断能力，非生产用途 |

### 进行中

| PR | 领域 | 描述 |
|----|------|-------------|
| [#30190](https://github.com/ggml-org/llama.cpp/pull/30190) | Vulkan | 将验证 token 和 GQA head 折叠为一行 flash-attention 瓦片（WIP；支持 GQA ratio 2–8） |
| [#16000](https://github.com/ggml-org/llama.cpp/pull/16000) | NUMA | `--numa mirror` 选项，用于在 NUMA 节点间复制模型权重 |

---

## 稳定性与回归问题

按评论数量排序（作为社区关注度的参考）：

| Issue | 严重性 | 状态 | 概述 | 修复 PR？ |
|-------|----------|--------|---------|---------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | **高** | OPEN | 目标模型量化（Q4_K_M）时，投机解码输出与普通推理结果不一致；bf16 目标模型无此问题 | 暂无 |
| [#9949](https://github.com/ggml-org/llama.cpp/issues/9949) | **严重** | OPEN | Llama-3.1-405B + 8B 草稿模型运行时崩溃（405B 在 CPU，8B 在 GPU） | 暂无 |
| [#30091](https://github.com/ggml-org/llama.cpp/issues/30091) | 中 | OPEN | llama-server 在长对话中因"bad allocation"崩溃（HIP 后端，RX 9070） | 暂无 |
| [#31510](https://github.com/ggml-org/llama.cpp/issues/31510) | 中 | OPEN | SYCL 双 Arc Pro B60 配合 `--cpu-moe --split-mode layer` 比单卡慢 100–1000 倍 | 暂无 |
| [#31987](https://github.com/ggml-org/llama.cpp/issues/31987) | 低 | OPEN | `auto_fgdn` 硬编码为 false，融合 GDN probe 从未执行 | 暂无 |
| [#31979](https://github.com/ggml-org/llama.cpp/issues/31979) | 低 | OPEN | llama-server 未验证 Content-Type 请求头 | 暂无 |

**注：** XDNA 后端功能请求（[#21725](https://github.com/ggml-org/llama.cpp/issues/21725)，39 👍）仍处于开放状态，持续收集社区关注。

---

## 对应用开发者的建议

1. **量化 + 投机解码 = 谨慎行事。** 如果你在生产环境中使用草稿模型投机解码，请暂时避免量化目标模型，直至 [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) 解决。使用 bf16 目标模型运行参考验证。

2. **CUDA 内存余量减少。** 合并内存 GPU 上 VMM 池预留从 16 GB 降至 8 GB 可能导致超大模型 OOM。若你已在最近一天更新，请密切监控内存使用情况。

3. **HIP/ROCm 问题已修复。** 若你使用 ROCm 6.3+，BLAS 工作区修复（[#31838](https://github.com/ggml-org/llama.cpp/pull/31838)）应能解决之前失败的 backend 测试。升级后请重新运行测试套件。

4. **新多模态模型。** Kimi K3.1 vision 支持已落地；若你在提供多模态服务，这是 mtmd 管线新支持的基础架构。

5. **SYCL 并发改进。** 缓存设备 ID 修复（[#32013](https://github.com/ggml-org/llama.cpp/pull/32013)）已可合并，在 Intel Arc / 数据中心 GPU 部署上应能降低每次推理的延迟。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me go through the entire text and translate it while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code, issue/PR references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese register

Let me translate section by section:

**Title:**
Ollama Infrastructure Digest — 2026-11-11
Ollama 基础设施周刊 — 2026-11-11

**Today's Highlights:**
Ollama v0.40.17 正式版发布，带来针对集成显卡的 Vulkan 内存优化和增强的 CLI 重启处理。本周社区在多模态能力方面持续发力——MLX 后端现已支持通过 `/api/chat` 和 `/api/generate` 传入视频输入，投机解码获得按请求维度的遥测数据。本期共修复三个重要问题：MLX KV-cache 泄漏、AMD Radeon 780M Vulkan 回归、版本标识输出异常。

**Releases & Breaking Changes:**
This section has a table with links. I need to translate the content but keep links, version numbers, etc. as-is.

**New Model & Hardware Support:**
This section has a table.

**Performance & Optimization:**
This section has sub-sections.

**Stability & Regressions:**
This section has a table with severity indicators.

**What This Means for Application Developers:**
This section has numbered list items.

**Footer:**
Let me translate this now, maintaining all the formatting, links, and technical terms exactly.
</think>


# Ollama 基础设施周刊 — 2026-11-11

## 本期要点

Ollama v0.40.17 正式版发布，带来针对集成显卡的 Vulkan 内存优化和增强的 CLI 重启处理。社区本周在多模态能力方面持续发力——MLX 后端现已支持通过 `/api/chat` 和 `/api/generate` 传入视频输入，投机解码获得按请求维度的遥测数据。本期共修复三个重要问题（MLX KV-cache 泄漏、AMD Radeon 780M Vulkan 回归、版本标识输出异常）。

---

## 版本发布与破坏性变更

| 版本 | 变更概要 | 链接 |
|---------|----------------|------|
| **v0.40.17** (stable) | 候选版转正式版。关键变更：ChatGPT CLI graceful restart（[PR #19583](https://github.com/ollama/ollama/pull/19583)）、OpenCode 启动器的 thinking 元数据（[PR #19409](https://github.com/ollama/ollama/pull/19409)）、为 Vulkan 集成显卡启用 mmap（[dhilt](https://github.com/ollama/ollama/commits?author=dhilt)） | [Release](https://github.com/ollama/ollama/releases/tag/v0.40.17) |
| — | `ollama -v`/`--version` 在无服务运行时不再误发 "could not connect" 警告 | [[#19613](https://github.com/ollama/ollama/issues/19613)] |
| — | `OLLAMA_KEEP_ALIVE` 默认值仍为 300s；尽管用户请求调整（[#19624](https://github.com/ollama/ollama/issues/19624)），本次未做变更 | — |

**本期未检测到破坏性 API 变更。**

---

## 新模型与硬件支持

| 类别 | 新增内容 | 状态 |
|----------|----------|--------|
| **MLX 后端** | 视频输入（MP4/MOV）可通过现有 images 字段传入，适用于 LFM3-VL、LFM3-Omni、Qwen3.5/3.6 模型 | [[#19348](https://github.com/ollama/ollama/pull/19348)] |
| **MLX 后端** | Decision models 通过 `/v1/systemone` 线协议支持（D1、Laya、Kev、vllm-d3、H2O Lightning） | [[#19639](https://github.com/ollama/ollama/issues/19639)] |
| **MLX 后端** | Nemotron 3.5 Bolt 74B-A9B，支持逐层专家路由和 DFlash 投机解码 | [[#19229](https://github.com/ollama/ollama/pull/19229)] |
| **GGUF 变体** | 新增 `gguf` runner 别名与 `llama.cpp` 并列；`ollama show` 按格式展示变体 | [[#19644](https://github.com/ollama/ollama/pull/19644)] |
| **视频能力** | 支持视频输入的模型在 `/api/show` capabilities 中暴露 `"video"` 字段 | [[#19348](https://github.com/ollama/ollama/pull/19348)] |

**依赖升级：** llama.cpp `b12177 → b12257` [[#19646](https://github.com/ollama/ollama/pull/19646)]；MLX `54a7051 → fc344c9`；MLX-C `57731b0 → a26f2d5` [[#19647](https://github.com/ollama/ollama/pull/19647)]

---

## 性能与优化

### 已合入
- **Vulkan mmap 覆盖集成显卡**：通过内存映射权重替代复制，降低 iGPU（如 Intel Iris Xe、AMD Radeon 780M）上的显存压力。
- **MLX 并发生成**：`OLLAMA_NUM_PARALLEL` 现对 MLX 模型生效；请求间共享投影/前馈计算，同时保持独立的注意力缓存 [[#19197](https://github.com/ollama/ollama/pull/19197)]。
- **投机解码指标**：`/api/chat` 响应和 `ollama run --verbose` 现报告草稿/接受 token 数及接受率 [[#19368](https://github.com/ollama/ollama/pull/19368)]。
- **MLX 加载进度与卡死检测**：防止 Apple Silicon 上慢速模型加载被误取消 [[#17834](https://github.com/ollama/ollama/pull/17834)]。

### 进行中
- **性能分析工具**：`bench.go` 现可通过 `-runner host:port` 或 `-spawn` 直连 runner，支持 GPU profiler 集成 [[#16611](https://github.com/ollama/ollama/pull/16611)]。
- **MLX 草稿开关**：`draft_num_predict=0` 允许基准测试隔离基础模型延迟 [[#19391](https://github.com/ollama/ollama/pull/19391)]。
- **OpenAI `max_completion_tokens` 尊重**：chat completions 中正确遵守该参数，限制可见 token 与推理 token 之和 [[#19168](https://github.com/ollama/ollama/pull/19168)]。
- **Prompt 扩展边界**：MLX decision models 现对超长 prompt 强制截断至 413，并附带回归测试 [[#19408](https://github.com/ollama/ollama/pull/19408)]。

---

## 稳定性与回归

| 严重度 | 问题 | 处理状态 |
|----------|-------|------------|
| 🔴 **高** | **Windows RTX 5090 tool calling 时 runner 断连**：Muse Glimmer 30B 和 Qwen3-Coder-N 调用 `/tokenize` 时返回 HTTP 500 | 待修复 [[#19439](https://github.com/ollama/ollama/issues/19439)]；尚无 fix PR |
| 🔴 **高** | **qwen3next 第 2 层缺少 projections**（`attn_qkv/attn_gate`），导致启动时 500 | 已修复 [[#15372](https://github.com/ollama/ollama/issues/15372)]（已关闭）|
| 🟡 **中** | **MLX KV-cache 累积**：随请求数（而非上下文大小）单调增长，直到重启才释放 | 已修复 [[#17875](https://github.com/ollama/ollama/issues/17875)] |
| 🟡 **中** | **AMD Radeon 780M Vulkan 回归** ≥0.32.10：大模型上触发 `ErrorDeviceLost` | 已修复 [[#17748](https://github.com/ollama/ollama/issues/17748)] |
| 🟡 **中** | **Intel Iris Xe Vulkan OOM**：qwen2.5:14b 从 0.32.6 升级到 0.33.3 后回归 | 已修复 [[#18531](https://github.com/ollama/ollama/issues/18531)] |
| 🟡 **中** | **Cloud `/api/chat` 约 32 MiB 时返回 400**：未文档化的 payload 上限 | 待修复 [[#19597](https://github.com/ollama/ollama/issues/19597)] |
| 🟢 **低** | **DNS64/NAT64 下 `ollama pull hf.co` 失败**：CDN 返回 NAT64 地址被判定为非公网 IP 而拒绝 | 待修复 [[#19345](https://github.com/ollama/ollama/issues/19345)] |

---

## 对应用开发者的影响

1. **升级至 v0.40.17**：如果在集成显卡（Vulkan）上运行，mmap 变更能显著降低 qwen2.5:14b 等模型在 Intel/AMD iGPU 上的显存占用。

2. **MLX 并发已可用于生产**：`OLLAMA_NUM_PARALLEL` 现已正常工作，配合进度上报机制，Apple Silicon 部署无需自定义 workaround 即可处理并发请求。

3. **视频多模态已上线**：构建支持视频摄入的 RAG 或 Agent 时，[LFM3-VL、LFM3-Omni、Qwen3.5/3.6] 系列现支持通过现有 images 字段传入视频片段。发送视频 payload 前请通过 `/api/show` 的 capabilities 确认包含 `"video"`。

4. **投机解码现已可观测**：应用可将草稿/接受 token 数暴露给用户；仅提供接受率在变深草稿场景下具有误导性。

5. **Decision models 进入生态**：`/v1/systemone` 格式支持（D1、Kev 等）标志着 Ollama 从文本生成向结构化决策智能体扩展。

6. **Windows 用户注意**：使用 RTX 5090 进行 tool calling 工作负载时，runner 断连问题（[#19439](https://github.com/ollama/ollama/issues/19439)）尚未修复——在问题解决前建议回退至 CPU 或其他 GPU。

7. **Cloud payload 上限提醒**：向 Ollama Cloud 发送大图像请求时请控制 payload 在 32 MiB 以下；目前尚无分块上传 API。

---

*本周刊基于 github.com/ollama/ollama 于 2026-11-11 的活动整理。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, version tags, issue references as-is
4. Use natural technical Chinese register
5. Don't translate project names, repository slugs, usernames, file paths, API identifiers

Let me translate this carefully while maintaining the technical Chinese register and preserving all formatting.

Key terminology I should use consistently:
- LiteLLM (keep as-is)
- Release Candidate → 发布候选版本 / RC
- LTS → 长期支持版本
- breaking change → 破坏性变更
- FIPS → FIPS（保持）
- PyPI → PyPI（保持）
- Docker → Docker（保持）
- credential stealer → 凭据窃取器
- RCE (Remote Code Execution) → 远程代码执行
- supply-chain attack → 供应链攻击
- cipher → 加密套件
- key exchange → 密钥交换
- Claude → Claude（保持）
- Anthropic → Anthropic（保持）
- Bedrock → Bedrock（保持）
- Vertex AI → Vertex AI（保持）
- OpenAI → OpenAI（保持）
- MCP → MCP（保持）
- Prometheus → Prometheus（保持）
- FastAPI → FastAPI（保持）
- Kubernetes → Kubernetes（保持）
- RPM limits → RPM 限制
- TPM token window → TPM token 窗口
- spend logs → 消费日志
- chargeback → 成本分摊
- KB (knowledge base) → 知识库
- embeddings → 向量嵌入
- reasoning content → 推理内容
- guardrail → 防护栏
- deployment → 部署
- cooldown → 冷却期
- metrics → 指标
- provider → 提供商
- endpoint → 端点

需要用中文思维自然表达，避免逐字翻译，用逗号分隔的短句或断句来替代冗长的英文表达。
</think>


# LiteLLM 技术周报 — 2026年11月11日

## 今日要点

LiteLLM **v1.110.0-rc.1** 正式发布，带来了 **FIPS 合规 TLS 加固**——从出站加密套件中移除 RSA 密钥交换和 ChaCha20。消费计量方面新增修复，确保后台响应在结算时由进程内完成计费。社区持续修复流式响应正确性缺陷，包括通过 Anthropic `/v1/messages` 适配器路由时 OpenAI `reasoning_content` 丢失的回归问题。

---

## 版本与破坏性变更

| 版本 | 类型 | 说明 |
|---------|------|------|
| **v1.110.0-rc.1** | 发布候选版本 | 最新 RC；Docker 镜像经 cosign 签名（公钥：`e82a3c6`） |
| **v1.109.0** | 稳定版 | cosign 签名验证 |
| **v1.108.5** | **长期支持版** | 最新 LTS 标签（`lts` 镜像标签指向此版本） |
| v1.104.9 / v1.103.11 | 维护版本 | cosign 签名验证；无新功能 |

**⚠️ 安全告警 — 篡改版 v1.107.0（PyPI 已下架，Docker 已撤回）：**
Issue [#47826](https://github.com/BerriAI/litellm/issues/47826) 记录了一起供应链攻击事件：PyPI 上的 v1.107.0 含有 `cook.pth` 凭据窃取器和 `sitecustomize` 远程代码执行载荷，构建自伪装成 `Berri-AI/litellm` 的仓库。PyPI 已移除该包，所有受影响镜像（`latest`、`main-latest`、`main-stable`）均已撤回。**若你在 2026年10月18日至21日期间拉取了 `latest` 镜像，请立即轮换所有凭据。** 当前 `main-stable` 和 `latest` 标签已回溯至安全版本。

**破坏性变更 — FIPS TLS 加密套件：**
PR [#50671](https://github.com/BerriAI/litellm/pull/50671)（`fix(tls)!`）在 FIPS 模式下移除出站加密套件中的 RSA 密钥交换和 ChaCha20。2024 年已正式废弃 FIPS 场景下的 RSA 密钥传输。FIPS 环境运营商升级前应验证上游端点支持新版加密套件协商。

---

## 新模型与硬件支持

| 提供商 | 新增功能 | PR / Issue |
|----------|----------|------------|
| **Bedrock** | 支持以图搜图式知识库检索；多模态嵌入模型返回匹配图片而非报错或回退到文本检索 | [#51063](https://github.com/BerriAI/litellm/pull/51063) |
| **Bedrock** | Claude 5.x 前置填充修复：最后一条用户消息为空时发送占位符以避免 400 错误 | [#50701](https://github.com/BerriAI/litellm/pull/50701) |
| **Vertex AI** | 请求打标：附加调用方密钥、团队、组织和项目信息作为 Cloud Billing 标签 | [#50732](https://github.com/BerriAI/litellm/pull/50732) |
| **Tripo** | 原生代理路由（区分中国区与全球区凭证）及异步额度计费 | [#50839](https://github.com/BerriAI/litellm/pull/50839) |
| **Qoder Cloud** | 新增 Interactions API 集成：异步文本、流式输出、会话续接 | [#50041](https://github.com/BerriAI/litellm/pull/50041) |
| **ChatGPT / Codex** | `/v1/messages` 流式接口现可保留工具调用之间的加密推理内容 | [#49046](https://github.com/BerriAI/litellm/issues/49046)（已修复） |

---

## 性能与优化

| 领域 | 变更内容 | 影响 | PR / Issue |
|------|--------|--------|------------|
| **消费计量** | 消费计量器 Sidecar 开启时，后台响应结算现在由进程内完成计费；消除穿透读取导致的孤立消费记录 | 账单准确性修复 | [#50957](https://github.com/BerriAI/litellm/pull/50957) |
| **Router — Responses 降级** | 流式降级现同时计费失败主节点的请求成本（提示词 + 已流转 Token）和降级节点的消费 | 消费日志正确性修复 | [#51002](https://github.com/BerriAI/litellm/pull/51002) |
| **流式输出 — Responses API** | 响应流现在在上游终止事件处结束，而非等待连接关闭 | 减少 Claude Code 等客户端等待上游关闭的延迟（最高 30 秒） | [#51033](https://github.com/BerriAI/litellm/pull/51033) |
| **MCP 鉴权** | `tools/list` 鉴权现在通过缓存读取策略；策略哈希未变化时消除热路径数据库读取 | 多团队用户延迟降低 | [#50075](https://github.com/BerriAI/litellm/pull/50075) |
| **Router — 批处理上传** | 托管批处理上传现可路由至 Azure 批处理部署，即使同模型组的 Chat 部署优先级更低 | 修复路由优先级倒置 | [#50971](https://github.com/BerriAI/litellm/pull/50971) |
| **缓存命中** | `finish_reason`（如 Anthropic `end_turn`）现于缓存命中时保留；此前经 `convert_to_model_response_object` 重建会重新规范化 | 推理模型缓存响应正确性修复 | [#50035](https://github.com/BerriAI/litellm/pull/50035) |

---

## 稳定性与回归问题

| 严重级别 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **🔴 严重（安全）** | v1.107.0 被篡改：`cook.pth` 凭据窃取器 + `sitecustomize` 远程代码执行 | **已修复** — PyPI / Docker 已撤回 | — |
| **🟠 高** | 虚拟密钥缓存后，按客户 RPM 限制停止生效 | 2026-11-10 已关闭 | — |
| **🟠 高** | 内存缓存下 TPM Token 窗口永不重置；耗尽后密钥无限期锁定 | 待处理 | — |
| **🟡 中** | JSON 定义的 OpenAI 类提供商，若模型不在目录中则丢失 tools（v1.106 回归） | 待处理 | — |
| **🟡 中** | Anthropic `/v1/messages` 适配器误编码推理模型：`thinking_delta` 被封装进文本块 | 已关闭 | — |
| **🟡 中** | 防护栏 `custom_code` 无法感知或拦截经 Anthropic `/v1/messages` 发送的 MCP tools | 已关闭 | — |
| **🟡 中** | OTel `gen_ai.response.model` 填充模型组别名而非实际模型名 | 待处理 | [#51029](https://github.com/BerriAI/litellm/issues/51029) |
| **🟡 中** | Prometheus `litellm_deployment_state` 指标在冷却恢复后卡在 2 | 待处理 | [#50157](https://github.com/BerriAI/litellm/pull/50157) |
| **🟡 中** | `uv tool update litellm` 后 LiteLLM Proxy 启动失败——FastAPI `get_flat_dependant` 不兼容 | 已关闭 | — |
| **🟢 低** | `reasoning_effort: "none"` 省略 thinking 配置而非在默认启用的 Claude 模型上禁用 | 已关闭 | — |
| **🟢 低** | `token_counter` 拒绝图片 detail `"original"`，导致预检报错并跳过上下文窗口检查 | 待处理 | [#47327](https://github.com/BerriAI/litellm/issues/47327) |

---

## 对应用开发者的影响

1. **立即检查 Docker / PyPI 依赖。** 若 `latest` 标签在 2026年10月18日至21日间解析到 v1.107.0，请将环境视为已沦陷并轮换所有密钥。使用安全镜像重新部署：`ghcr.io/berriai/litellm:lts` 以获得稳定 LTS 基线。

2. **FIPS 环境：** v1.110 TLS 加密套件变更为破坏性变更——仅支持 RSA 密钥交换的上游端点将在握手阶段失败。升级前测试各上游提供商兼容性。

3. **账单准确性提升** — 后台响应和流式降级场景下的消费数据现已完整；依赖 `LiteLLM_SpendLogs` 做成本分摊的系统此前会静默丢失部分成本记录。

4. **Bedrock 以图搜知识库** 现为正式功能：多模态嵌入模型支撑的知识库现支持图片载荷检索并返回匹配图片。

5. **Anthropic `/v1/messages` 推理保真度：** OpenAI 兼容推理模型（GLM、DeepSeek-R1 经 vLLM / SGLang 路由）`reasoning_content` 丢失的回归问题已关闭。若你通过 Anthropic 适配器路由此类模型，请验证客户端（如 Claude Code）现已能正确接收流式推理内容。

6. **MCP 工具鉴权** 现更好地支持多团队用户扩展：策略缓存消除了 `tools/list` 调用时每个请求的数据库读取，避免了跨多团队用户场景下的超时问题。

7. **Vertex 计费标签** 链路现已打通：启用新标签配置后可在 Vertex 流量上实现按团队成本归属，适用于在 LiteLLM 后运行 Vertex 且有内部成本分摊需求的组织。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese - not literal word-for-word

Let me translate this carefully:

Title: Unsloth Digest — 2026-11-11
→ Unsloth Digest — 2026年11月11日

Section 1: Today's Highlights
→ 今日要闻

Key terms to translate consistently:
- release → 发布
- breaking changes → 破坏性变更
- security fix → 安全修复
- bypass → 绕过
- regression → 回归问题
- backend → 后端
- frontend → 前端
- hotfix → 热修复
- patch → 补丁
- pipeline → 管线
- context window → 上下文窗口
- throughput → 吞吐量
- tool call → 工具调用
- speculative decoding → 推测解码
- gradient accumulation → 梯度累积
- MoE (Mixture of Experts) → MoE (混合专家模型)
- acceptance rate → 接受率

Let me translate section by section:

"Today, Unsloth Studio landed several high-impact security and UX patches: a critical fix prevents the seeded admin password from leaking through reverse proxies (#17454), and a shell-command approval bypass affecting map(), executor.submit(), and Thread targets was closed (#17456). Meanwhile, MiniMax-H3-Image support landed for text-to-image and reference-based editing workflows (#17453), and a vLLM/SGLang tool-request regression that caused spurious context_length_exceeded errors was resolved (#17426)."
 
I'm focusing on translating the technical terminology accurately. The key challenge is maintaining the precise meaning while adapting to Chinese technical language. Specific technical terms like "hotfix", "pipeline", and "context window" require careful translation to ensure technical accuracy.

The translation captures the critical security and functionality improvements in the latest Unsloth Studio update. Key fixes include preventing admin password leakage, closing shell command approval vulnerabilities, and adding new model support. These patches represent significant progress in addressing both security and user experience challenges.

The updates span multiple critical areas: release management, model support, performance optimization, and system stability. Specific improvements include fixing token processing errors, enhancing context management, and resolving GPU compatibility issues.

Security improvements focus on robust protection for proxy setups and shell command interactions. The development introduces MiniMax-H3-Image integration, expands Model Hub search capabilities, and refines context management approaches for Ollama connections.

I noticed there were no new releases in the past 24 hours, with the stable diffusion prebuilt component synchronized to a newer fork commit, maintaining version consistency across 36 fork updates.

Key model and hardware developments include the addition of MiniMax-H3-Image to the Studio Images page, supporting advanced text-to-image generation with up to 16 reference images. A new primary web search engine from Yandex was integrated, addressing potential throttling issues with existing search providers. Hardware compatibility challenges persist, with specific GPU and graphics processing unit limitations noted for ROCm and Intel Arc platforms.

Performance enhancements focus on resolving tool request processing complexities in large language model serving frameworks. Critical fixes address token limit management, preventing potential context overflow errors during complex interactions. The updates aim to improve reliability and prevent unexpected API response failures.

Context management has been refined through intelligent compaction strategies. The Ollama integration now dynamically adapts to actual model context windows, implementing more precise truncation mechanisms to maintain conversation coherence.

Additional improvements target user interface and export challenges. Text rendering in PDFs now supports complex writing systems, while background process handling in language models receives targeted optimization. The current focus involves addressing auxiliary loss divergence in mixture-of-expert models running on CPU infrastructure.

The new version introduces enhanced MiniMax-H3-Image integration for multimodal workflows, expanding creative and analytical capabilities across different model architectures. Ongoing development aims to streamline context management and expand search functionality within the Model Hub.

Critical security vulnerabilities have been addressed, including a reverse-proxy admin password leak and shell command approval bypass that could compromise system integrity when exposed through various proxy configurations.

Developers should immediately verify their Studio version includes the latest security fixes, particularly addressing unexpected context length errors during tool-enabled requests.

Long chat histories on Ollama connections previously risked silent message dropping due to window size mismatches. The new update introduces an explicit "Context compacted" divider to highlight truncation.

Multimodal capabilities expand with MiniMax-H3-Image becoming a first-class Studio feature, enabling sophisticated generation and reference-based editing workflows.

For CPU-based MoE model training, developers must currently set gradient accumulation to 1 to prevent non-deterministic results until the underlying issue is fully resolved.

Users of speculative decoding with UD 3.1 and Qwen3.8-Flash-Next should anticipate approximately a 20-point acceptance rate reduction on Ryzen AI Max+ 395, suggesting potential reversion to UD 3.0 GGUFs or waiting for updated 3.1-matched multi-task processing heads. The translation continues the technical documentation, focusing on model hardware compatibility and performance details. A specific graphics card, the RX 6700 XT, is experiencing critical startup and processing issues across different operating systems and driver configurations. The graphics processor passes initial checks but encounters severe stability problems when attempting computational operations.

Subsequent entries detail software upgrade challenges, network configuration problems, and interface rendering anomalies across different platforms, suggesting systemic integration and compatibility testing requirements for the current development branch.
</think>


# Unsloth Digest — 2026年11月11日

## 1. 今日要闻

Unsloth Studio 今日上线了多个高影响力的安全和用户体验补丁：一个关键修复防止了种子管理密码通过反向代理泄露（[#17454](https://github.com/unslothai/unsloth/pull/17454)），同时关闭了一个影响 `map()`、`executor.submit()` 和 `Thread` 目标的 shell 命令审批绕过漏洞（[#17456](https://github.com/unslothai/unsloth/pull/17456)）。此外，MiniMax-H3-Image 支持已上线，用于文生图和基于参考图的编辑工作流（[#17453](https://github.com/unslothai/unsloth/pull/17453)），并且修复了一个导致虚假 `context_length_exceeded` 错误的 vLLM/SGLang 工具请求回归问题（[#17426](https://github.com/unslothai/unsloth/pull/17426)）。

## 2. 发布与破坏性变更

**过去 24 小时内无新发布。** Studio 的 stable-diffusion.cpp 预编译文件已同步到更新的 fork 提交（`master-982-0518b34-ueb0e729`，领先于上一版本 36 个 fork 提交），但仍保持同一主版本标签（[#17459](https://github.com/unslothai/unsloth/pull/17459)）。

## 3. 新增模型与硬件支持

| 模型 / 硬件 | 详情 | PR / Issue |
|---|---|---|
| **MiniMax-H3-Image** (`MiniMaxAI/MiniMax-H3-Image`) | 已加入 Studio Images 页面：支持文生图生成以及使用提示词中 `<Picture N>` token 对 1–16 张参考图进行编辑。管线来源为 diffusers。 | [#17453](https://github.com/unslothai/unsloth/pull/17453) |
| **Yandex** | 新增为主层级搜索引擎，在 DuckDuckGo 之前尝试（后者目前因反爬虫响应而被限流）。 | [#17447](https://github.com/unslothai/unsloth/pull/17447) |
| **ROCm / gfx1031 (RX 6700 XT)** | **已知问题：** GPU 在启动检查时识别为"RDNA 2"，但在首次 GPU 操作时 PyTorch 发生段错误。影响 Debian 13 上使用树内 amdgpu 驱动的 unsloth-rocm Docker 环境。 | [#17147](https://github.com/unslothai/unsloth/issues/17147) |
| **Intel Arc 140V** | 图像生成模型无法在该 GPU 上加载。 | [#17137](https://github.com/unslothai/unsloth/issues/17137) |

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|---|---|---|
| **vLLM / SGLang 工具请求** | 修复了 `max_tokens` 未计入工具调用开销的问题——此前当提示词本身符合上下文窗口限制时仍会触发虚假的 `400 context_length_exceeded` 错误。 | [#17426](https://github.com/unslothai/unsloth/pull/17426) |
| **Ollama 上下文压缩** | Studio 现读取 Ollama 已加载模型的实际上下文窗口，并在截断处插入"Context compacted"分隔符，而非静默丢弃早期对话轮次。此前 4,096 token 的默认窗口会静默截断标记为 40,960 token 的聊天记录。 | [#17457](https://github.com/unslothai/unsloth/pull/17457) |
| **OpenAI 工具调用渲染** | 修复了在 OpenAI Responses 连接中，思考摘要 + 工具调用后工具卡片下出现多余 `</think>` token 的问题。 | [#17455](https://github.com/unslothai/unsloth/pull/17455) |
| **PDF 导出** | 长而不带空白的文本（泰语句子、代码行、长 token 等）现在可正确换行，不再被截断。 | [#17425](https://github.com/unslothai/unsloth/pull/17425) |
| **MoE CPU 后端** | **已知问题：** 使用 `UNSLOTH_FORCE_CPU=1` 时，带有 MoE 模型和梯度累积 > 1 的管线并行会产生各进程间路由辅助 loss 发散的问题。回归测试命令：`UNSLOTH_FORCE_CPU=1 python -m pytest tests/test_parallel_cp_compose...` | [#17054](https://github.com/unslothai/unsloth/issues/17054) |
| **Qwen3.8-Flash-Next MTP 草稿头** | UD 3.1 GGUFs 配合当前 MTP 草稿头在 Ryzen AI Max+ 395 生产温度下接受率约为 74% → 56–66%。 | [#17402](https://github.com/unslothai/unsloth/issues/17402) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| **🔴 高** | **Qwen 混合模型重复全量处理提示词** — 使用 MCP 工具目录和 65K token 上下文的工具调用后，每轮都重新处理完整提示词，吞吐量严重下降。4 条评论。 | [Open #17015](https://github.com/unslothai/unsloth/issues/17015) | — |
| **🔴 高** | **通过反向代理泄露管理密码** — 同主机反向代理仅添加 `X-Forwarded-Proto`/`Via`/`X-Forwarded-Port` 时被识别为本地浏览器，导致种子管理密码暴露给远程设备。 | 已修复 | [#17454](https://github.com/unslothai/unsloth/pull/17454) |
| **🔴 高** | **Shell 命令审批绕过** — 通过 `map()`、`executor.submit()`、`functools.partial` 或 `Thread` 目标执行的 `os.system('rm -rf x')` 在"仅本人审批"模式下未经提示直接运行。 | 已修复 | [#17456](https://github.com/unslothai/unsloth/pull/17456) |
| **🟡 中** | **ROCm RX 6700 XT 段错误** — 启动检查通过后 PyTorch 在首次 GPU 操作时崩溃。 | Open #17147 | — |
| **🟡 中** | **Windows 11 桌面应用升级报错**。 | [Closed #17375](https://github.com/unslothai/unsloth/issues/17375) | — |
| **🟡 中** | **LAN 地址绑定失败** — Manjaro KDE 桌面应用无法使用 LAN IP 绑定网络桥接。 | [Closed #17017](https://github.com/unslothai/unsloth/issues/17017) | — |
| **🟡 中** | **Glass 主题界面错乱** — 启用 glass 主题时点击模型卡片会产生布局错乱。 | [Closed #17417](https://github.com/unslothai/unsloth/issues/17417) | — |
| **🟡 中** | **"重生成标题"功能复制了上一条用户消息** 而非生成标题。 | [Closed #17332](https://github.com/unslothai/unsloth/issues/17332) | — |
| **🟡 中** | **工作目录中创建了 NUL 文件** — 某些场景下保存时会出现 `NULL` 文件。 | [Closed #16991](https://github.com/unslothai/unsloth/issues/16991) | — |
| **🟡 中** | **HTML 转 Markdown 转换器问题** — 裸 `&` 错误添加了 `;`，畸形的 `&#` 留下原始 HTML，转义代码块泄露。 | [Closed #17199](https://github.com/unslothai/unsloth/issues/17199) | — |
| **🟢 低** | **模型大小在 Model Hub 和 Model Picker 中显示不一致** — Windows 11 上"On device"标签页与下拉列表中的数值不匹配。 | [Closed #17074](https://github.com/unslothai/unsloth/issues/17074) | — |
| **🟢 低** | **Glass 材质设置重复暴露** — 外观标签页中出现两次，且标签名和选项集不同。 | [Closed #17162](https://github.com/unslothai/unsloth/issues/17162) | — |

## 6. 对应用开发者的意义

**安全态势：** 反向代理管理密码泄露和 shell 命令审批绕过问题均属高危。若你在任何反向代理（包括 Cloudflare Tunnel）后运行 Studio，请立即升级以拉取 [#17454](https://github.com/unslothai/unsloth/pull/17454) 和 [#17456](https://github.com/unslothai/unsloth/pull/17456)。前者专门影响同主机代理设置 `X-Forwarded-Proto`/`Via`/`X-Forwarded-Port`/`X-Forwarded-Server` 的场景。

**vLLM / SGLang 工具调用：** 如果你一直在工具启用的请求上看到无法解释的 `context_length_exceeded` 错误（尽管提示词本身符合上下文窗口），这是 `max_tokens` 未调整工具调用开销导致的 bug（[#17426](https://github.com/unslothai/unsloth/pull/17426)）。请确认你的 Studio 版本包含此修复。

**Ollama 上下文管理：** Ollama 连接上的长对话可能因窗口大小不匹配而静默丢弃早期轮次。Studio 现在通过"Context compacted"分隔符显式呈现这一情况（[#17457](https://github.com/unslothai/unsloth/pull/17457)）。

**多模态扩展：** MiniMax-H3-Image 现在是 Studio 中的一等公民，支持生成和基于参考图的迭代编辑，使其适用于结合图像生成和迭代精炼的管线。

**CPU 上的 MoE：** 若你在 CPU 上使用管线并行和梯度累积 > 1 运行 MoE 模型，训练结果将不可预期。此为活跃问题（[#17054](https://github.com/unslothai/unsloth/issues/17054)），在解决前应使用梯度累积 = 1 作为临时方案。

**UD 3.1 + Qwen3.8-Flash-Next MTP 草稿头：** 使用此组合进行推测解码的生产用户应注意 Ryzen AI Max+ 395 上约 20 点的接受率下降（[#17402](https://github.com/unslothai/unsloth/issues/17402)）。考虑回退到 UD 3.0 GGUFs 或等待 3.1 匹配的 MTP 草稿头。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*