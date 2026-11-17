# AI 基础设施日报 2026-11-17

> 生成时间: 2026-11-17 04:44 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the technical report from English to Simplified Chinese. Let me go through it carefully and translate it while preserving all formatting, tables, code elements, and technical terms. I need to output only the translation with no preamble or explanation.

Let me translate section by section, maintaining the structure and using natural technical Chinese.
</think>


# AI 基础设施生态系统 — 跨项目日报

## 2026-11-17

---

## 1. 生态系统概览

五个追踪项目今天的活动反映出一个基础设施生态系统正处于三个同步转型阶段：**硬件多元化**（Blackwell SM120、AMD MI355X、Intel NPU、Ascend NPU、RISC-V Vector、Android Vulkan），**性能层深化**（可扩展 KV 缓存、排序融合 MoE 内核、FP8 行填充融合、优雅的 CUDA OOM 处理），以及**控制面重写**（SGLang 的 15-PR Rust API 堆栈、LiteLLM 的 Rust 认证/回调管道、llama.cpp 的 Web UI 重构）。综合来看，2026-11-17 释放了一个信号：开源推理服务引擎与闭源替代方案之间的性能差距正在缩小——但运维团队的配置复杂度负担正在加重，因为硬件后端 × 量化方案 × 调度策略的组合数量增长已超过文档更新的速度。

---

## 2. 活动量对比

| 项目 | 活跃 Issue 数 | 今日合并 PR 数 | 今日开放 PR 数 | 24 小时内发布 | 仓库地址 |
|---------|----------------|--------------------|-------------------|----------------|------------|
| **vLLM** | ~24 | ~18 | ~12 | **v0.34.0** | vllm-project/vllm |
| **SGLang** | ~17 | ~12 | ~15 | 无 | sgl-project/sglang |
| **llama.cpp** | ~12 | ~10 | ~8 | 无（仅提交记录） | ggml-org/llama.cpp |
| **Ollama** | ~15 | ~5 | ~14 | 无 | ollama/ollama |
| **LiteLLM** | ~14 | ~12 | ~12 | **v1.108.10** | BerriAI/litellm |

**观察：**

- **vLLM** 以今日提交吞吐量领先，主要驱动力是 v0.34.0 发布以及同步进行的 AMD ROCm 稳定性加固工作。该版本汇集了 412 位贡献者的 1,061 次提交——标志着广泛的上游参与。
- **SGLang** 虽无发布版本，但相对其项目规模拥有最大的开放 PR 数量，反映了 Rust 控制 API 迁移堆栈（15 个 PR）及 SGLang 1.0 稳定性加固工作。
- **llama.cpp** 独特之处在于其活动分布在**硬件后端**（Android Vulkan、AMD RDNA、CDNA、RISC-V Vector、OpenCL Adreno、XPU）而非模型家族——该项目向异构设备目标的扩展速度超过此处任何其他引擎。
- **Ollama** 是唯一一个在 MLX（Apple Silicon）优化上有显著投入的项目，确立了其作为 Apple 部署首选本地推理路径的地位。
- **LiteLLM** 是网关/代理层；其发布节奏和 PR 数量衡量的是**集成速度**而非推理吞吐量，其 Rust 加速路线表明即便是纯软件层也在向无 GIL 执行路径演进。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM |
|---------------------|------|--------|-----------|--------|---------|
| **Mistral Large 4** | ✅ v0.34.0 | — | — | — | 经代理 |
| **MiniMax-M3.1-Flash** | ✅ v0.34.0 | — | — | — | 经代理 |
| **Nemotron-3.5-Transcribe** | ✅ v0.34.0 | — | — | — | 经代理 |
| **DeepSeek-V4.1-Flash** | 🚧 SM120 性能下降 | 🚧 SM120 仅 Triton 后端 | — | — | 经代理 |
| **GLM-5.3-Flash** | — | ✅ Ascend A3/A5 | — | — | 经代理 |
| **Qwen3.8-Flash-Next** | — | ✅ NPU（QSA、MTP） | — | — | 经代理 |
| **Qwen3.8-2.4T-A95B** | 🚧 gfx950 优化中 | 🚧 gfx950 优化中 | — | — | 经代理 |
| **MiniCPM5 MoE** | — | — | ✅ GGUF | — | 经代理 |
| **Kokoro-82M TTS** | — | — | ✅ mtmd | — | 经代理 |
| **fish-audio s2** | — | — | ✅ mtmd | — | 经代理 |
| **RAON-1-mini** | — | — | ✅ HF→GGUF | — | 经代理 |
| **D3.1 nano (MLX)** | — | — | — | ✅ MLX | 经代理 |
| **PPLX Decider v1.3** | — | — | — | ✅ MLX | 经代理 |
| **GPT-5.6 变体** | — | — | — | — | ✅ 成本图谱 |
| **Claude Opus 5.5（Databricks）** | — | — | — | — | ✅ |
| **Snowflake Cortex** | — | — | — | — | ✅ 流式中止修复 |

**覆盖广度冠军：** LiteLLM ——按照设计，它代理以上所有模型。不存在竞争。

**服务引擎覆盖冠军：** vLLM（单次发布新增 10 个模型家族；单周期新增模型数最高）。

**异构硬件深度冠军：** llama.cpp ——唯一在同一天同步推进 Android Vulkan、AMD RDNA/CDNA、RISC-V Vector、OpenCL Adreno、XPU 和 MUSA 支持的项目。

**新兴加速器支持冠军：** SGLang（Ascend NPU + RDNA3/4 CI + RISC-V Vector 后端需求）。

**重点关注：** DeepSeek-V4.1-Flash 在 SM120（Blackwell/RTX PRO 6000）上的性能下降同时影响 vLLM 和 SGLang。根本原因似乎是 FlashAttention 路径中的 CUDA 图捕获失败，SGLang 的变通方案（Triton 后端）已经找到，但 vLLM 的追踪 Issue 仍未关闭。面向 Blackwell 生产部署 DeepSeek 推理的团队应将此视为阻塞性问题。

---

## 4. 性能前沿

各项目的优化工作集中在五个方向，按今日活跃度排序：

### 4.1 KV 缓存智能化

| 项目 | 方案 | 阶段 |
|---------|---------|-------|
| **vLLM** | 可扩展 KV 缓存 —— 预热后从实际空闲内存自动调整大小，取代静态估算 | **默认开启**（v0.34.0） |
| **vLLM** | KVPP（分层分片 MLA + NCCL 广播预取） | 可选开启 |
| **vLLM** | KV Offload 请求级提升 | RFC / 进行中 |
| **SGLang** | HiSparse 预加载 —— 单次全层 launch 将完整 KV 载入设备缓冲区 | 已合入 |
| **SGLang** | Octave KV（AMD 上 3 位 KV 缓存） | RFC 阶段 |

**结论：** vLLM 显著领先，可扩展 KV 缓存默认开启。SGLang 的 HiSparse 工作有增益但范围更窄。

### 4.2 MoE / Expert 路由内核

| 项目 | 优化 | 效果 |
|---------|-------------|--------|
| **vLLM** | 排序融合 MoE —— 当 `num_tokens * top_k * 4 <= num_experts` 时跳过 `moe_align_block_size` | 解码速度提升 12–19%（HBM GPU，M=2..4） |
| **vLLM** | ROCm 上的 MXFP4 MoE —— 仅对被路由到的不同 experts 做反量化，融合 Triton gather+dq | 任意批次下每请求开销降低 |
| **vLLM** | 统一 MoE "Oracles" 类结构 | 长期可维护性 |
| **SGLang** | 融合 MoE tuner 回归修复（未调优批次大小） | 正确性 + 吞吐 |
| **llama.cpp** | CUDA F32 mmid 路径（strided experts） | MoE 路由精度与速度双提升 |
| **llama.cpp** | IQ3_S SoA —— SYCL MoE 上慢 8 倍（记录为负面结果） | 正确性备注 |

**结论：** vLLM 在 MoE 内核路径成熟度上领先；llama.cpp 的 F32 mmid 是近期新增。排序融合路径是本轮最突出的进展。

### 4.3 量化

| 项目 | 格式 | 说明 |
|---------|--------|-------|
| **vLLM** | NVFP4 draft LM-head 验证 | 早期阶段 |
| **llama.cpp** | PTQ1_0 —— 三值量化，group-128，1.75 位/权重 | 硬件论文（ACL 2026） |
| **llama.cpp** | STQ1_0 —— Sherry 稀疏三值量化，ARM NEON vec_dot | 学术成果集成 |
| **llama.cpp** | AWQ MoE 配置现已接受 W4A16 键名 | 兼容性 |
| **SGLang** | FP8 行填充融合 —— 消除两个冗余 kernel launch | 后端无关 |

**结论：** llama.cpp 在量化多样性上占主导（三值、稀疏三值、FP4、AWQ、IQ、GGUF）。vLLM 的 NVFP4 工作处于早期但表明了超低精度 draft 模型的意图。

### 4.4 分布式 / 多加速器服务

| 项目 | 焦点 | 状态 |
|---------|-------|--------|
| **vLLM** | Model Runner v1→v2 迁移（MoE 进行中） | 活跃开发 |
| **SGLang** | 张量并行 MLA 工作负载的 KVPP | 可选开启 |
| **vLLM** | 增量 MoE Expert Offloading | RFC |
| **SGLang** | Stream-K GEMM FP16 NaN bug（精确零结果） | **未关闭 — 高严重性** |
| **Ollama** | VRAM 核算和 GPU 分片修复 | 开放 PR |

**结论：** vLLM 拥有最结构化的分布式服务路线图。SGLang 的 Stream-K NaN bug 是正确性问题，在批量稀疏工作负载生产使用前应予解决。

### 4.5 优雅降级与可观测性

| 项目 | 优化 | 意义 |
|---------|-------------|-------------|
| **llama.cpp** | CUDA VMM 池在 OOM 时返回 `ALLOC_FAILED` 而非中止进程 | 消除内存压力下的进程死亡 |
| **SGLang** | GC 插桩：`freeze_gc`、`gc_object_counts` | 长时间运行服务器的可观测性 |
| **Ollama** | 每个请求的 token 指标日志（`~/.ollama/logs/metrics.jsonl`） | 计费与成本归因 |
| **LiteLLM** | 未配置限速时跳过限速器 Redis 写入 | 高吞吐下消除无效 I/O |
| **LiteLLM** | Bedrock 流式中止立即关闭连接 | 超时时防止约 1,500 token 泄漏 |

**结论：** LiteLLM 和 llama.cpp 在生产运营加固上领先。vLLM 今日重点在性能而非运营完善。

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────────────────────────┐
│  应用层                                                                 │
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────────────┐            │
│  │ LiteLLM     │  │ SGLang      │  │ Ollama Studio        │            │
│  │ （网关）     │  │ （Rust API） │  │ （Web UI）            │            │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬───────────┘            │
│         │                │                     │                        │
│  ┌──────▼────────────────▼─────────────────────▼───────────┐            │
│  │  SGLang    vLLM        llama.cpp      Ollama Runtime     │            │
│  │  服务引擎   引擎         本地运行时      （本地 + MLX）     │            │
│  │  (Python+  (PyTorch)    （纯 C++）      （Rust + Go）      │            │
│  │   Rust)                                                     │            │
│  └────────────────────┬────────────────────────────────────┘            │
│                       │                                                  │
│         硬件抽象层（CUDA / HIP / ROCm / Vulkan /                         │
│         Metal / SYCL / CANN / OpenCL / NPU / RISC-V Vector）            │
└─────────────────────────────────────────────────────────────────────────┘
         │
         ▼
    训练 / 微调层
    （Unsloth — LoRA/QLoRA/DORA/LongLoRA，不在今日服务栈范围内）
```

| 层级 | 项目 | 目标用户 |
|-------|----------|-------------|
| **LLM 网关 / 代理** | LiteLLM | 平台工程师、多提供商路由、成本管理 |
| **生产推理服务引擎** | vLLM、SGLang | Kubernetes 集群、高吞吐推理 API、多卡 TP/EP |
| **本地推理运行时** | llama.cpp、Ollama | 边缘侧、移动端、开发者笔记本、嵌入式、隐私约束场景 |
| **微调** | Unsloth | ML 工程师、领域适配、LoRA/QLoRA 工作流 |
| **Web UI / 开发者工具** | Ollama Studio、llama.cpp Llama Chat | 非技术用户、快速原型验证 |

**关键洞察：** 各层级正在边界处融合。SGLang 的 Rust API 迁移将其推向类网关的控制面。Ollama 的 MLX 内存管理和 LiteLLM 的 Rust 加速认证/回调都表明即便是"简单"工具也在追求生产级性能。llama.cpp 的 Web UI 重构（`ui/apps/chat`）将其定位为消费者应用层，而不仅仅是后端库。生态系统的演进方向是**统一的多层技术栈**——单一团队可以横跨本地原型（llama.cpp）→ 托管服务（vLLM/SGLang）→ 生产路由（LiteLLM），且工具链保持一致。

---

## 6. 趋势信号

### 6.1 Blackwell SM120 是新的"已知未知"

vLLM 和 SGLang 都有关于 SM120（RTX PRO 6000 / Blackwell）在高关注度模型（DeepSeek-V4.1-Flash、GLM-5.3-Flash）上解码吞吐问题的开放追踪。两个项目均发现混合 extend 操作的 CUDA 图捕获路径存在问题，已有变通方案（SGLang 的 Triton 后端；vLLM 部分修复）。这是当前生态系统中风险最高的硬件缺口。**基础设施团队应假定 Blackwell CUDA 图支持在 MoE/Flash 模型上尚不具备生产稳定性，并据此规划。**

### 6.2 Rust 正在吞噬控制面

SGLang（15-PR Rust API 堆栈）、LiteLLM（Rust 认证 SQLx 连接池、Rust 回调 crate）和 llama.cpp 的 Web UI 重构（面向 `ui/lib` 构建）都在独立选择 Rust 作为性能关键路径。这与重写推理内核无关——而是要在**服务编排层**（认证、限速、回调分发、API 路由）消除 Python GIL 竞争。实际影响：集成这些工具的团队需要具备 Rust 工具链的使用经验。

### 6.3 AMD ROCm 差距正在缩小——但复杂度在上升

针对 AMD MI355X（gfx950）的五个活跃优化追踪、两个针对 RDNA3/4 的、CDNA GDN MMA 内核，以及 Ollama 和 SGLang 中的 CANN（Ascend NPU）支持，均处于活跃状态。开源 AMD 后端故事正在快速改善，但 (GPU 架构) × (量化方案) × (内核后端) 的组合爆炸正在制造一个难以穷尽验证的支持矩阵。**运行 AMD 的团队应针对自身使用的特定模型 + 量化组合投资建设自己的基准测试框架。**

### 6.4 音频/多模态正在成为一等公民

llama.cpp 通过 mtmd 子系统集成 Kokoro TTS、fish-audio s2 和 tiny-voca——结合 vLLM 的 ViT CUDA 图工作和 SGLang 的 Kimi-K3/GLM-V 多模态支持，释放出一个信号：多模态推理（图像、视频、音频、语音）不再是外挂功能，而是主要开发轴线。**构建语音或视频管道的 Agent 应密切关注这些项目在多模态方向的汇合进展。**

### 6.5 量化多样性正在爆发

两个项目在一天内涉及六种量化格式（NVFP4、PTQ1_0、STQ1_0、AWQ MoE、IQ3_S、GGUF），表明生态系统正在积极探索精度/比特率的权衡空间。Sherry/STQ1_0（ACL 2026 学术论文）在 llama.cpp 主线发布后数天内即被集成这一事实，揭示了一个新模式：量化方法从研究到生产的周期正在急剧缩短。**应用开发者应重新评估其量化选择——最优格式可能在过去 30 天内已经改变。**

### 6.6 优雅降级是一等需求

llama.cpp 的 CUDA VMM OOM 修复（进程在内存压力下存活）、LiteLLM 的 Bedrock 流式中止（超时时不泄漏 token）以及 SGLang 的 GC 插桩，都反映了一个转变：从"优化 happy path"到"为生产对抗条件优化"。这是一个成熟度信号：这些项目正从研究原型走向生产基础设施。**在评估推理引擎时，故障模式的质量（干净报错 vs. 进程死亡 vs. 静默数据损坏）应与基准测试吞吐量受到同等重视。**

---

*跨项目日报，汇总自 vLLM、SGLang、llama.cpp、Ollama 和 LiteLLM GitHub 活动 —— 2026-11-17*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate a technical report (vLLM Project Digest) from English to Simplified Chinese. Let me analyze the content carefully and translate it while following all the rules provided.

Key rules:
1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form.
5. Issue/PR references like #12345 and their link text stay as-is.
6. Use natural technical Chinese, the register of a Chinese developer newsletter.

Let me translate section by section:

Title: vLLM Project Digest — 2026-11-17

Section 1: Today's Highlights
- v0.34.0 lands → v0.34.0 发布
- 1,061 commits from 412 contributors (120 new) → 保持不变
- 10 new model families → 新增 10 个模型家族
- extensible KV cache enabled by default → 可扩展 KV 缓存默认启用
- auto-sizes the KV cache from memory free after warmup → 在预热后根据实际空闲内存自动调整 KV 缓存大小
- ROCm/AMD GPU performance work dominates → ROCm/AMD GPU 性能优化工作占据主导
- five active optimization trackers → 5 个活跃的优化追踪帖
- MI355X (gfx950) → 保持
- Rust frontend feature-parity roadmap → Rust 前端功能对等路线图
- 62 comments → 保持
- Blackwell SM120 decode-throughput problems → Blackwell SM120 解码吞吐问题


- DeepSeek-V4.1-Flash → 保持

I'll translate the table headers, focusing on maintaining the technical precision and consistency. The table structure requires careful translation of each column name to ensure clarity and accuracy in the Simplified Chinese context.

For the new section, I'll translate the content while preserving the original structure and technical details. The translation needs to capture the essence of the v0.34.0 release, emphasizing the new model families, memory optimization, and technical improvements.

The translation highlights key advancements: 10 new model integrations, dynamic memory allocation strategy, and significant contributor engagement. I'll ensure technical terminology remains precise while conveying the substantive updates in this release.

The Chinese translation captures the technical nuances, emphasizing the default-enabled extensible KV cache mechanism that automatically calibrates memory allocation post-initialization. The 412 contributors represent substantial community collaboration, with 120 new participants joining the project's development.

The section details emerging focus areas, particularly noting Rust frontend feature parity and Blackwell SM120 decode-throughput challenges, signaling ongoing technical refinement and architectural improvements.

Performance optimization work dominates the discussion, with multiple optimization trackers targeting advanced GPU architectures like MI355X and gfx950. These tracking mechanisms aim to systematically address performance bottlenecks across different hardware platforms.

The translation highlights critical technical issues, including DeepSeek-V4.1-Flash's decode throughput problems on SM120 and a proposed solution involving PR #65527, demonstrating a proactive approach to resolving complex technical challenges.

Emerging hardware support is expanding, with new model families and advanced GPU architectures like ViT, multimodal CUDA Graph, SM120, and AMD gfx950/MI355X being integrated, signaling ongoing technological innovation in computational platforms.
</think>


# vLLM 项目摘要 — 2026-11-17

## 1. 今日要闻

v0.34.0 正式发布，带来 **1,061 次提交 / 412 位贡献者**，新增 10 个模型家族（Mistral Large 4、MiniMax-M3.1-Flash、Nemotron-3.5-Transcribe 等），且 **可扩展 KV 缓存默认启用** — vLLM 现在在预热后自动根据实际空闲内存调整 KV 缓存大小。在 issue 侧，ROCm/AMD GPU 性能优化工作占据主导地位，共有 5 个活跃的优化追踪帖聚焦 MI355X（gfx950）及其他 AMD 加速卡。Rust 前端功能对等路线图持续引发最多社区讨论（62 条评论），而 DeepSeek-V4.1-Flash 在 Blackwell SM120 上的解码吞吐问题已成为新的优先事项。

---

## 2. 版本发布与破坏性变更

| 版本 | 变更概要 | 参考 |
|------|---------|------|
| **v0.34.0** | 发布。1,061 次提交 / 412 位贡献者（120 位新加入）。新增 10 个模型。可扩展 KV 缓存 **默认启用** — 在预热后测量实际可用内存，据此确定 KV 缓存大小，而非依赖静态分配估算。 | [v0.34.0](https://github.com/vllm-project/vllm/releases/tag/v0.34.0) |
| — | **模型运行器 v1 → v2 迁移** 正在进行中（稠密模型优先，MoE 模型随后）。使用自定义模型运行器的用户应关注迁移路径，并在 `Qwen3-0.6B` / `facebook/opt-125m` 上测试。 | [#41286](https://github.com/vllm-project/vllm/issues/41286) |
| — | **Rust 前端**（`VLLM_USE_RUST_FRONTEND=1`）仍为实验性功能；与 Python API server 的功能对等性在专门路线图 issue 中追踪。 | [#44280](https://github.com/vllm-project/vllm/issues/44280) |

*过去 24 小时内无重大 API 破坏性变更。*

---

## 3. 新模型与硬件支持

| 类别 | 新增/更新 | 备注 |
|------|----------|------|
| **新增模型家族（10 个）** | Mistral Large 4、MiniMax-M3.1-Flash、Nemotron-3.5-Transcribe 及另外 7 个 | v0.34.0 |
| **ViT / 多模态 CUDA Graph** | ViT 完整 CUDA Graph 支持的 RFC 进行中（与 Qwen3-VL、Kimi K2.5、GLM-V、LFM3-VL 相关） | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| **LFM3-VL** | 为 `Lfm3VlForConditionalGeneration`（图像 + 视频）添加 `SupportsEncoderCudaGraph` | [#67976](https://github.com/vllm-project/vllm/pull/67976) |
| **Ling VL MTP** | 修复量化配置 bug（因层名映射错误导致 draft logits 为 NaN / 接受率为零） | [#68087](https://github.com/vllm-project/vllm/pull/68087) |
| **Pixtral（HF）** | Bugfix：现在正确遵守 `mm_processor_kwargs` 中的 processor size 覆盖参数 | [#67904](https://github.com/vllm-project/vllm/pull/67904) |
| **SM120（Blackwell / RTX PRO 6000）** | DeepSeek-V4.1-Flash 解码吞吐问题已提交；SM120 已接入展平的 device-query-lens 路径 | [#56892](https://github.com/vllm-project/vllm/issues/56892), [#65527](https://github.com/vllm-project/vllm/pull/65527) |
| **AMD gfx950 / MI355X** | 活跃的优化追踪帖：Qwen3.8-2.4T-A95B、Qwen3.8-Flash-Next、DeepSeek-V4.1-Flash、Muse Spark Open | [#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575), [#66587](https://github.com/vllm-project/vllm/issues/66587), [#64018](https://github.com/vllm-project/vllm/issues/64018) |
| **ROCm CDNA4 / Kimi-K3** | 在 gluon KDA prefill 路径上集成 AITER FlashKDA（chunk_kimi_delta_attn） | [#68085](https://github.com/vllm-project/vllm/pull/68085) |
| **AWQ MoE** | `MoeWNA16Config` 现在同时接受 AWQ 格式的键名（`w_bit` / `q_group_size`）和 GPTQ 格式的键名 | [#66488](https://github.com/vllm-project/vllm/pull/66488) |
| **XPU（Intel）** | 跳过冗余的 LoRA TP4 测试；更新失效的 mm_lora 默认测试 | [#67243](https://github.com/vllm-project/vllm/pull/67243), [#67188](https://github.com/vllm-project/vllm/pull/67188) |

---

## 4. 性能与优化

| 领域 | 详情 | 影响/数据 | 参考 |
|------|------|----------|------|
| **可扩展 KV 缓存** | 默认启用；vLLM 在预热后测量实际空闲内存，据此确定 KV 缓存大小 | 开箱即用更好的内存利用率 | [v0.34.0](https://github.com/vllm-project/vllm/releases/tag/v0.34.0) |
| **MoE 融合内核（集成 GPU）** | 多 token batch 场景使用排序后的 fused MoE 路径；当 `num_tokens * top_k * 4 <= global_num_experts` 时绕过 `moe_align_block_size` | 在 A100/H100/B200 上 M=2..4 时解码提速约 12–19% | [#64163](https://github.com/vllm-project/vllm/pull/64163) |
| **ROCm 上的 MXFP4 MoE** | 仅对去重后的路由专家进行反量化；Triton fused gather + 反量化，无需 host 同步 | 在任意 batch size 下降低 AMD 卡开销 | [#68086](https://github.com/vllm-project/vllm/pull/68086) |
| **SM90 稀疏 MLA** | 分块行规划防止大 step 时 FlashInfer planner 工作列表溢出 | 大型 MLA 配置稳定性修复 | [#58260](https://github.com/vllm-project/vllm/pull/58260) |
| **Blackwell SM120** | 修复 `enable_adaptive_verification` 启动失败问题（配置/CUDA Graph 验证时的 ValueError） | 解锁 DeepSeek-V4.1-Flash 在 RTX PRO 6000 上运行 | [#65527](https://github.com/vllm-project/vllm/pull/65527) |
| **PR 周转时间** | P50 构建时间从 73.2 分钟降至 **53.9 分钟**（P90：95.3 分钟） | CI 中位提速约 26% | [#66411](https://github.com/vllm-project/vllm/issues/66411) |
| **KVPP（层分片 MLA）** | NCCL 广播 MLA KV 缓存 + 预取；可选启用 `--enable-kvpp` | 降低 TP 负载中 KV 物化的开销 | [#59059](https://github.com/vllm-project/vllm/pull/59059) |
| **Octave KV（3-bit）** | AMD GPU 原生 3-bit KV 缓存 RFC；面向 RX 7900 XTX 上的长 prompt 工作负载 | 提案阶段；预计后续 PR | [#59773](https://github.com/vllm-project/vllm/issues/59773) |

---

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **🔴 高** | **SM120（RTX PRO 6000）上的 DeepSeek-V4.1-Flash**：使用 `--enforce-eager` 时解码吞吐极低；CUDA Graph 因捕获失败而不可用 | Open — 紧急，请优先处理 | [#65527](https://github.com/vllm-project/vllm/pull/65527)（部分） |
| **🔴 高** | **Qwen/Qwen3.5-27B 批推理** 极慢 / 无法工作（根因调查中） | Open | — |
| **🟡 中** | **Ling VL MTP**：因量化配置层名映射 bug 导致 draft logits 为 NaN + 接受率为零 | 修复已合并 | [#68087](https://github.com/vllm-project/vllm/pull/68087) |
| **🟡 中** | **W4A16 HummingLinearKernel**：在 H100（sm_90）上多进程间结果不确定；快于默认 Machete 实现 | Open | — |
| **🟡 中** | **ROCm FlexAttention paged-mask**：gfx950 上 BF16 输出与连续 FlexAttention 相差 1 ULP | Open | — |
| **🟡 中** | **LoRA 场景下的 Prefix Cache 损坏**：同名 LoRA 但不同 ID 导致损坏 | Closed | — |
| **🟡 中** | **ROCM_ATTN**：RDNA 架构上 head size ≥96 且 KV block size ≠16 时注意力结果错误/GPU 故障；MHA head size 192/256 同上 | Closed（ROCm 10.2 修复路径） | — |
| **🟢 低** | **XPU 测试**：跳过 Intel Arc Pro B50 上的冗余 LoRA TP4 测试和单侧 all2all 测试 | 修复已合并 | [#67243](https://github.com/vllm-project/vllm/pull/67243), [#68052](https://github.com/vllm-project/vllm/pull/68052) |
| **🟢 低** | **torch.compile QuantFP8**：在 H100/RTX5090 上比 CUDA 更慢（需用 torch 2.10/2.11 重新测试） | 待重新测试 | [#25094](https://github.com/vllm-project/vllm/issues/25094) |

---

## 6. 对应用开发者的启示

| 要点 | 详情 |
|------|------|
| **升级到 v0.34.0** | 默认启用的可扩展 KV 缓存很可能在不更改配置的情况下提升你的有效 batch 吞吐 — 升级后请重新测量，尤其是在内存受限的部署场景下。 |
| **关注 Blackwell/SM120 支持** | 如果你在 RTX PRO 6000 或其他 SM120 硬件上部署，PR [#65527](https://github.com/vllm-project/vllm/pull/65527) 中的 graph-capture 修复对于 DeepSeek-V4.1-Flash 是必需的。底层解码吞吐问题（[#56892](https://github.com/vllm-project/vllm/issues/56892)）仍未解决 — 请审慎评估 `--enforce-eager` 的取舍。 |
| **MoE 推理更快了** | PR [#64163](https://github.com/vllm-project/vllm/pull/64163) 中的排序 fused MoE 路径为 HBM GPU 上的 MoE 模型在 M=2..4 时带来 12–19% 的解码提速 — 升级即可受益，无需额外操作。 |
| **Rust 前端尚未可用于生产** | 如果你正在评估 Rust API server（`VLLM_USE_RUST_FRONTEND=1`），请注意功能对等性追踪（[#44280](https://github.com/vllm-project/vllm/issues/44280)）显示仍有差距。生产环境请继续使用 Python 前端。 |
| **模型运行器 v2 迁移即将到来** | v1→v2 迁移正在进行中；如果你有自定义模型运行器，现在开始在 `Qwen3-0.6B` / `facebook/opt-125m` 上测试。 |
| **多模态工具链持续改进** | 说话人分离 JSON 流式转录（[#65779](https://github.com/vllm-project/vllm/pull/65779)) 和语音模型的词级时间戳（[#66344](https://github.com/vllm-project/vllm/issues/66344)) 正在推进 — 构建转录流水线的 agent 开发者请关注这些。 |
| **AMD ROCm 用户：请关注 AMD CI** | 多个 AMD 专项 PR 正在积极合并；如果你在 MI355X 或 gfx950 上运行，请关注优化追踪帖以获取即将到来的吞吐提升，并使用 nightly ROCm 镜像测试是否有回归。 |

---

*摘要基于 vllm-project/vllm GitHub 数据生成 · 2026-11-17*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate an English technical report into Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, links, numbers, dates verbatim
4. Keep project names, slugs, version tags, file paths in original form
5. Keep issue/PR references as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

# SGLang Digest — 2026-11-17

## 1. Today's Highlights

SGLang's Rust server control-API migration continues to advance, with a 15-PR stack landing new routes for Ollama compatibility, OpenAI schema parity, and `/v1/responses` support. Performance work this cycle includes FP8 row-padding fusion to eliminate kernel launches and HiSparse device-buffer preloading optimizations for prefill-decode disaggregation. The project is actively hardening for a 1.0 stability release, with the roadmap now tracking required upgrade notes from 0.5.x.

SGLang 的 Rust 服务端 control-API 迁移持续推进，15-PR 规模的重构栈正在落地新的路由：兼容 Ollama、OpenAI schema 对齐，以及 `/v1/responses` 支持。本周期的性能工作包括 FP8 行填充融合（消除冗余 kernel 启动）和 HiSparse 设备缓冲区预加载优化（服务于预填充-解码分离架构）。项目正在积极为 1.0 稳定版发布进行加固，路线图现已纳入从 0.5.x 升级所需的变更说明。

## 2. Releases & Breaking Changes

| Item | Description |
|------|-------------|
| **No new releases** | No releases tagged in the last 24 hours. |


| **SGLang 1.0 Roadmap** | 1.0 版本被定义为稳定性发布：静默配置变更将替换为显式报错，1.x 系列将建立兼容性策略。从 0.5.x 升级**可能需要变更**；详见 issue 中的升级说明。 | [#50045](https://github.com/sgl-project/sglang/issues/50045) |

## 3. New Model & Hardware Support

| Model / Hardware | Details | PR / Issue |
|------------------|---------|------------|
| **GLM-5.3-Flash → Ascend A3/A5** | DSA/KDA/NEXTN attention routed to Ascend backends; MLA preprocessing without RoPE; KDA gate layout adaptations. | [#43305](https://github.com/sgl-project/sglang/pull/43305) |

DSA/KDA/NEXTN attention 被路由至 Ascend 后端；MLA 预处理绕过 RoPE；KDA gate layout 适配。 | [#43305](https://github.com/sgl-project/sglang/pull/43305) |
| **GLM-5.3-Flash → SM120 (RTX PRO 6000)** | FA4 attention 在混合 extend 阶段出现 CUDA-graph 捕获崩溃；目前 **Triton 后端是唯一可行方案**。 | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **DeepSeek-V4.1-Flash → AMD MI355X (gfx950)** | 针对 TP4 文本/图像配置配合 DSpark 投机解码的性能优化追踪。 | [#49327](https://github.com/sgl-project/sglang/issues/49327) |
| **Qwen3.8-Flash-Next → NPU** | 启用 QSA（Qwen Sparse Attention）、图重放及 NEXTN/MTP 投机解码能力。 | [#37570](https://github.com/sgl-project/sglang/pull/37570) |
| **AMD RDNA3/RNDA4 (gfx1100/gfx1201)** | CI 及上游推进计划已启动；目标在全并行策略下达到生产级可靠性。 | [#46900](https://github.com/sgl-project/sglang/issues/46900) |
| **RISC-V Vector Extension (RVV) Attention** | 新增基于 RISC-V 向量扩展的 attention 后端特性需求，面向 RISC-V 向量扩展硬件。 | [#18072](https://github.com/sgl-project/sglang/issues/18072) |
| **Kimi-K3 128k 解码参数重调** | W4A8 32P（4 节点混合）的接受概率参数从 `12/12` 并发调整为 `6/6`；`repeat_rate` 调整为 `0.99`。 | [#48894](https://github.com/sgl-project/sglang/pull/48894) |

性能优化方面，FP8 量化通过融合行填充零值填充到分组量化 kernel 来减少冗余 kernel 启动次数，从而提升推理效率。HiSparse 预填充优化则通过一次性全层设备缓冲区加载替代 Python 循环，减少了序列请求的延迟。多项评分功能也在改进中。

标签对数概率回读和嵌入覆盖避免了主机同步，消除了调度器在逐点评分工作负载上的 GPU 饥饿周期。语法缓存通过限制编译语法 LRU 缓存大小来控制 RSS 增长，在 150k 词汇表规模下每个未见过的 `json_schema` 可节省 250-380 MB 内存。垃圾回收增加了冻结和循环垃圾检测功能，便于长时间运行服务器的可观测性。MUSA KVCache 则通过恢复原生融合存储并将通用缓存存储 API 路由至 MUSA，避免了图捕获期间的自动求导可见索引赋值。

SAIL 深度 GEMM 通过支持 T-HEAD SAIL 深度 GEMM 的 GEMM/MoE 后端，解锁了 T-HEAD SAIL 硬件上的 DeepSeek GEMM 路径。融合 MoE 调优器修复了调优批大小之间的回归问题，确保批大小落在调优条目之间时不再出现意外降级。

高严重性项目中，GLM-5.3-Flash 在 SM120 上因 CUDA-graph 混合扩展重塑导致 FA4 attention 崩溃，可通过 `--attention-backend triton` 规避。Intel XPU 的 GDN 块预填充自 #47944 后变慢 2.6 倍且 K ≠ V 时 recompute_w_u 输出错误。Humming FP16 Stream-K GEMM 在精确零结果时产生 NaN。WeightChecker.reset_tensors 存在非持久缓冲区 bug。

中等问题包括 HiCache + Mooncake 多轮对话中缓存命中率下降，L2/L3 容量压力大时从 87.4% 急剧下降。解码吞吐量在 bench_serving 和 Engine 日志间存在不一致。CUDA coredump tracker 事件量大。4 个测试断裂、17 个不稳定、918 个最近修复。DSPARK 非侵入式转储无法区分草稿模型和目标模型。

对于应用开发者，需要关注几个关键升级路径：SGLang 1.0 将静默配置改为显式报错，0.5.x 用户应提前查看升级说明；SM120 上的 GLM-5.3-Flash 需用 `--attention-backend triton` 规避 FA4 崩溃；Intel XPU 的 GDN 回归影响性能。

大规模约束生成中，grammar cache LRU bound 修复了长时运行 agent 的内存泄漏问题。Rust server 迁移正在进行，15-PR 栈逐步迁移路由并保持对等性验证。生产级评分已优化，host-sync 消除让 `/v1/score` 和 `enable_mis` 在高吞吐场景更可行。HiCache + Mooncake 用户需监控长对话中的前缀缓存命中率，因为 L2/L3 压力下可能出现可重现的下降。
</think>


# SGLang Digest — 2026-11-17

## 1. 今日要点

SGLang 的 Rust 服务端 control-API 迁移持续推进，15-PR 规模的重构栈正在落地新的路由：兼容 Ollama、OpenAI schema 对齐，以及 `/v1/responses` 支持。本周期的性能工作包括 FP8 行填充融合（消除冗余 kernel 启动）和 HiSparse 设备缓冲区预加载优化（服务于预填充-解码分离架构）。项目正在积极为 1.0 稳定版发布进行加固，路线图现已纳入从 0.5.x 升级所需的变更说明。

---

## 2. 版本与破坏性变更

| 项目 | 描述 |
|------|------|
| **无新版本** | 过去 24 小时无版本标签发布。 |
| **SGLang 1.0 路线图** | Issue [#50045](https://github.com/sgl-project/sglang/issues/50045) 将 1.0 定义为稳定性发布：静默配置变更将替换为显式报错，1.x 系列将建立兼容性策略。从 0.5.x 升级**可能需要变更**；详见 issue 中的升级说明。 |

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 详情 | PR / Issue |
|-------------|------|------------|
| **GLM-5.3-Flash → Ascend A3/A5** | DSA/KDA/NEXTN attention 路由至 Ascend 后端；MLA 预处理绕过 RoPE；KDA gate layout 适配。 | [#43305](https://github.com/sgl-project/sglang/pull/43305) |
| **GLM-5.3-Flash → SM120 (RTX PRO 6000)** | FA4 attention 在混合 extend 阶段 CUDA-graph 捕获崩溃；**Triton 后端是唯一可用路径**。 | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **DeepSeek-V4.1-Flash → AMD MI355X (gfx950)** | TP4 文本/图像性能优化追踪，含 DSpark 投机解码。 | [#49327](https://github.com/sgl-project/sglang/issues/49327) |
| **Qwen3.8-Flash-Next → NPU** | 启用 QSA（Qwen Sparse Attention）、图重放及 NEXTN/MTP 投机解码。 | [#37570](https://github.com/sgl-project/sglang/pull/37570) |
| **AMD RDNA3/RDNA4 (gfx1100/gfx1201)** | CI 及上游推进计划已开启；目标在全并行策略下达到生产级可靠性。 | [#46900](https://github.com/sgl-project/sglang/issues/46900) |
| **RISC-V Vector Extension (RVV) Attention** | 新增基于 RISC-V 向量扩展的 attention 后端特性需求。 | [#18072](https://github.com/sgl-project/sglang/issues/18072) |
| **Kimi-K3 128k 解码参数重调** | W4A8 32P（4 节点混合）接受概率参数从 `12/12` 并发调整为 `6/6`；`repeat_rate` 调整为 `0.99`。 | [#48894](https://github.com/sgl-project/sglang/pull/48894) |

---

## 4. 性能与优化

| 类别 | 变更 | 影响 | PR / Issue |
|------|------|------|------------|
| **FP8 量化** | 将行填充零值融合进 group 量化 kernel | 消除 block-FP8 推理步骤中两次冗余 kernel 启动 | [#41860](https://github.com/sgl-project/sglang/pull/41860) |
| **HiSparse PD 解码** | 一次性全层 all-launch 将完整 KV 预加载至设备缓冲区，替代 Python 循环 | 序列命中设备缓冲区时降低单请求延迟 | [#44446](https://github.com/sgl-project/sglang/pull/44446) |
| **多标签评分** | 避免 label-logprob 回读和 embed override 中的 host 同步 | 消除逐点评分工作负载下调度器的 GPU 饥饿周期 | [#49413](https://github.com/sgl-project/sglang/pull/49413) |
| **Grammar 缓存** | 按主机内存限制编译 grammar 的 LRU 缓存大小 | 阻止 RSS 增长（150k token 词表上每个未见过的 `json_schema` 可节省 250–380 MB） | [#45087](https://github.com/sgl-project/sglang/pull/45087) |
| **GC 插桩** | 新增 `freeze_gc`、`refreeze_gc`、`gc_object_counts`，用于空闲冻结和循环垃圾检测 | 提升长时运行服务器的可观测性 | [#50883](https://github.com/sgl-project/sglang/pull/50883) |
| **MUSA KVCache** | 恢复原生 fused store，在 MUSA 上将通用 cache-store API 路由至该实现 | 避免图捕获期间 autograd 可见的 indexed assignment | [#50916](https://github.com/sgl-project/sglang/pull/50916) |
| **SAIL / DeepGEMM** | 支持 T-HEAD SAIL DeepGEMM GEMM/MoE 后端（上游推进系列第 4/N 个） | 解锁 T-HEAD SAIL 硬件上的 DeepSeek GEMM 路径 | [#47588](https://github.com/sgl-project/sglang/pull/47588) |
| **Fused MoE Tuner** | 修复调优批大小之间未调优区间的回归问题 | 批大小落在调优条目之间时不再意外降级 | [#50761](https://github.com/sgl-project/sglang/issues/50761) |

---

## 5. 稳定性与回归

| 严重性 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| 🔴 **高** | [#42012](https://github.com/sgl-project/sglang/issues/42012) | SM120 上 GLM-5.3-Flash：FA4 attention 在 CUDA-graph 捕获时崩溃（混合 extend reshape）。**临时方案：** `--attention-backend triton`。 | Open |
| 🔴 **高** | [#50249](https://github.com/sgl-project/sglang/issues/50249) | Intel XPU：GDN chunk prefill **慢 2.6 倍**，且自 #47944 起 K ≠ V 时 `recompute_w_u` 输出错误。 | Open |
| 🔴 **高** | [#50521](https://github.com/sgl-project/sglang/issues/50521) | Humming FP16 Stream-K GEMM 精确零结果时产生 **NaN**。 | Open |
| 🔴 **高** | [#44501](https://github.com/sgl-project/sglang/issues/44501) | `WeightChecker.reset_tensors` 用随机值填充 `MRotaryEmbedding.axis_map`（自 #34446 的非持久化缓冲区 bug）。 | Open |
| 🟡 **中** | [#47481](https://github.com/sgl-project/sglang/issues/47481) | HiCache + Mooncake 多轮对话中缓存命中率出现可复现下降（87.4% → 急剧下降），发生于 L2/L3 容量压力期间。 | Open |
| 🟡 **中** | [#3050](https://github.com/sgl-project/sglang/issues/3050) | `bench_serving` 与 Engine 日志中的解码吞吐量数据不一致。 | Open |
| 🟡 **中** | [#26340](https://github.com/sgl-project/sglang/issues/26340) | CUDA coredump 追踪器 — 自动收集 `pr-test.yml` 事件。数量持续较高。 | Open（追踪中） |
| 🟡 **中** | [#42752](https://github.com/sgl-project/sglang/issues/42752) | 不稳定测试和 CI 基础设施故障正通过 `/sglang-pr-babysit` Claude Code 工作流持续关注。 | Open（追踪中） |
| 🟢 **低** | [#50087](https://github.com/sgl-project/sglang/issues/50087) | DSPARK 非侵入式转储无法区分草稿模型和目标模型（均标注为 `TARGET_VERIFY`）。 | Open |

**CI 健康状态：** Issue [#17050](https://github.com/sgl-project/sglang/issues/17050) 报告截至 2026-11-17 04:14 UTC 有 **4 个断裂、17 个不稳定、918 个近期已修复**的测试。

---

## 6. 应用开发者须知

### 可操作建议

1. **规划 SGLang 1.0 升级：** 1.0 版本将静默配置变更为显式报错。如果当前使用 0.5.x，请在升级前查阅 [#50045](https://github.com/sgl-project/sglang/issues/50045) 中的升级说明，以避免意外的行为变更。

2. **SM120 上的 GLM-5.3-Flash：** 避免使用 FA4 attention 后端。请使用 `--attention-backend triton` 启动，直到 [#42012](https://github.com/sgl-project/sglang/issues/42012) 中的 CUDA-graph 混合 extend 崩溃问题修复。

3. **Intel XPU 用户：** 自 #47944 引入的 GDN chunk prefill 回归会导致 2.6 倍性能下降且 K/V 不对称时输出错误。在修复落地前，请避免在 XPU 上使用 GDN 模型，或持续关注 [#50249](https://github.com/sgl-project/sglang/issues/50249)。

4. **大规模约束生成：** [#45087](https://github.com/sgl-project/sglang/pull/45087) 中的 grammar cache LRU 边界修复对使用每请求 JSON schema 的长时运行 agent 至关重要 — 内存增长现已受控。请拉取最新 main 分支或等待下一版本。

5. **Rust 服务端迁移进行中：** 15-PR 的 control-API 栈正逐步将路由迁移至 Rust 服务端（Ollama、OpenAI、`/v1/responses`）。早期使用者应在 stack 分支上测试；parity 校验仍在并行验证中。

6. **多标签评分已可用于生产：** [#49413](https://github.com/sgl-project/sglang/pull/49413) 中的 host-sync 消除使 `/v1/score` 和 `enable_mis` 在高吞吐评分场景下大幅提升可用性 — 特别是在批量输入的逐点分类任务上。

7. **HiCache + Mooncake 用户：** 在长时间多轮对话中监控前缀缓存命中率；L2/L3 压力下可复现的命中率下降（[#47481](https://github.com/sgl-project/sglang/issues/47481)）可能影响成本和吞吐量可预测性。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate all the text content while preserving the Markdown structure
2. Keep URLs, link targets, code spans, code blocks, numbers, dates as-is
3. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
4. Use natural technical Chinese register - not word-for-word

Let me translate section by section:

## 1. Today's Highlights

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

Let me work through this carefully.

"Daily Digest" → 每日简报
"Today's Highlights" → 今日要闻
"Releases & Breaking Changes" → 版本发布与breaking变更
"New Model & Hardware Support" → 新增模型与硬件支持
"Performance & Optimization" → 性能与优化
"Stability & Regressions" → 稳定性与回归问题
"What This Means for Application Developers" → 对应用开发者的影响

Let me translate the content properly now.
</think>


# llama.cpp 每日简报 — 2026-11-17

## 1. 今日要闻

今日项目集中推送了大量后端稳定性修复和音频/多模态功能。值得特别关注的是：RDNA3/Windows 上的 Vulkan flash attention 崩溃问题得到修复、全新的 Kokoro TTS 模型完成集成、Web UI 架构重组为独立的 Llama Chat 应用，为后续共享 UI 库铺路。性能方面，RDNA3_5 的 MMVQ 门控调优和 CUDA VMM 内存池 OOM 优雅处理是两个亮点。

---

## 2. 版本发布与 Breaking 变更

| Commit | 内容 | 影响 |
|--------|------|------|
| `b12451` | **Web UI 重构** — 移至 `ui/apps/chat` 目录并更名为"Llama Chat"，作为共享 `ui/lib` + 各应用独立布局的第一步 | UI 路径变更；依赖内部工具路径的下游集成可能需要同步更新 |
| `b12449` | `--tensor-split` / `--fit-target` 现支持最多 `llama_max_devices()` 个配置，不再有固定上限 | 配置格式放宽；现有用法无破坏性影响 |
| `b12443` | **Vulkan 修复** — 修复 Nvidia 上 fp32 flash attention 的共享内存溢出问题；当内存压力较高时禁用 staging | 正确性修复；内存受限的 Vulkan 场景下吞吐量可能受影响 |

以上均为 master 分支提交，截至本简报发布时尚无新 release tag。

---

## 3. 新增模型与硬件支持

| PR / Commit | 模型 / 硬件 | 说明 |
|-------------|------------|------|
| #32413 | **Kokoro-82M TTS**（音素驱动） | 完整 mtmd 集成；为后续音素型 TTS 模型树立了标杆 |
| #32427 | **tiny-voca**（轻量声码器） | Kokoro 配套组件；架构模式相似 |
| #32413 / #32330 | **fish-audio s2** | 通过 mtmd pipeline 新增声音克隆支持 |
| #32176 | **RAON-1-mini-preview**（KRAFTON） | HF → GGUF 转换及推理支持 |
| #32386 | **MiniCPM5 MoE** | 门控 GQA、路由/共享专家、兼容投机解码 |
| #32261 | **Android Vulkan**（Termux + 原生驱动） | ARM Android 上 Vulkan 后端的一等公民支持 |
| `b12442` | **HIP gfx1013 → RDNA1** | ROCm 侧 AMD GPU 支持进一步扩展 |
| `b12444` | **CDNA GDN MMA 内核**（HIP/CUDA） | 在 AMD CDNA 硬件上加速 Gated-Delta-Net |
| #29672 | **PTQ1_0 量化** | Ternary，group-128；1.75 比特/权重；保留精确 ternary 权重 |
| #22836 | **STQ1_0**（ACL 2026 — Sherry 量化） | 针对 ARM NEON vec_dot 的硬件高效稀疏 ternary |

---

## 4. 性能与优化

| 领域 | 变更 | 预期收益 |
|------|------|---------|
| **MMVQ / RDNA3_5** (`b12453`) | 调优 RDNA3_5 的 `ne11` 门控值 | 改善 AMD RDNA3 GPU 上的混合向量量化吞吐 |
| **Vulkan conv3d** (`b12445`) | 新增 `split_k` 支持，采用 256×128 coopmat2 shape | 多 tile 卷积负载下利用率提升 |
| **WebGPU Flash Attention** (`b12441`) | 修复 per-head mask 索引；广播 `head % mask->ne[2]` | 多头 mask 模式正确性与效率双提升 |
| **CUDA VMM-pool** (#32440) | `ggml-cuda` 在 mul_mat 期间内存池 OOM 时返回 `ALLOC_FAILED` 而非 abort | 消除内存压力下的进程崩溃；请求优雅失败 |
| **CUDA F32 mmid** (#31961) | 为 Q4_K/Q5_0/Q8_0 + stride experts 的 `MUL_MAT_ID` 新增 F32 激活路径 | 专家路由精度更优；MoE 解码更快 |
| **Mamba-2 SSM (RVV)** (#32448) | 使用 RISC-V Vector intrinsics 向量化 F32 `SSM_SCAN` | RVV 支持的 CPU 上大幅提速（替代标量回退路径） |
| **OpenCL Adreno X1** (#31002, #31003) | Adreno X1 优化 Q5_K 和 Q8_0 GEMM bin 内核 | Snapdragon X Elite 上非 MoE 推理加速 |
| **异步主机输入拷贝** (#30685) | 新增 `ggml_backend_dev_caps.async_host_input` 能力；`set_tensor_async` + 每 batch 一次同步而非逐张量同步 | 支持该能力的后端减少主机→设备拷贝开销 |

> **V100 回归注意：** Issue #32245 报告 v1.0.0 相比 v0.8.0 在 V100 (sm_70) 上预填充性能显著下降 — 正在调查中。

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| 🔴 **崩溃** | RDNA3/Windows 上 Vulkan FA 预填充在 `amdvlk64.dll` 中崩溃（`#32353`）— 由 #31323 flip-direct 路径引入 | 进行中；热点问题 | — |
| 🔴 **崩溃** | CUDA 内存池 OOM 导致提示词处理期间进程 abort（`#31974`）— `ggml_cuda_mul_mat_q → ggml_abort` | 已合并修复 | #32440 |
| 🟠 **正确性** | SYCL + MoE：`/v1/completions` logprobs 非确定性；请求 seed 无法固定分布（`#31206`） | 进行中 | — |
| 🟠 **正确性** | IQ3_S SoA 重排序在 SYCL MoE 下（Intel Arc A770）慢 **8 倍** — 通用路径被污染（`#32323`） | 进行中；已记录负面结果 | — |
| 🟠 **正确性** | IMROPE 模型（Qwen3.5）缓存复用被禁用，每次后续请求均全量重新预填充（`#32316`） | 进行中 | — |
| 🟠 **回归** | V100 (sm_70) 预填充吞吐在 v1.0.0 相比 v0.8.0 大幅下降（`#32245`） | 进行中 | — |
| 🟡 **性能** | HIP/gfx906 MoE 提示词处理自 #29948 起慢 15–50%（`#31599`） | 进行中 | — |
| 🟡 **性能** | CUDA IQ 量化 `mul_mat` 在 n=5,8 时对 SM120 不满足 batch 不变性 — 影响投机解码（`#28111`） | 进行中 | — |
| 🟡 **稳定性** | Metal：大上下文预填充期间偶发卡顿数分钟，qwen4exp（`#30726`） | 进行中 | — |

**今日关闭 5 个 issue：** dp4a 模拟特性请求（#24616，标记过期）、Gemma 4 tool-calling bug（#29655）、Vite 测试依赖构建问题（#29921）、`libllama` API changelog 追踪（#9289，已更新）、Docker tag 可预测性需求（#32246，功能已接受）。

---

## 6. 对应用开发者的影响

1. **音频 pipeline 日趋成熟。** Kokoro TTS 和 fish-audio s2 通过 mtmd 子系统完成集成，标志着 llama.cpp 正在成为真正的多模态推理中枢，而不仅仅是一个文本解码器。如果你正在构建语音增强型 agent，目前的集成度已接近生产可用。

2. **CUDA OOM 优雅处理现已强制执行。** 此前 CUDA VMM 分配失败会导致整个服务进程终止。#32440 合并后，请求将干净失败。如果你曾用复杂的预检内存检查来绕过这个问题，现在可以简化相关逻辑。

3. **Web UI 正在迁移。** 如果你嵌入或 fork 了 llama.cpp 的 Web UI，请将路径更新至 `ui/apps/chat`。这是迈向可共享 `ui/lib` 的第一步 — 后续还会有进一步的架构调整。

4. **Android Vulkan 已成为一等公民。** Termux + 原生 Android Vulkan 驱动现已开箱即用，移动端推理部署门槛大幅降低。

5. **关注 V100 性能回归。** 如果你在旧款 NVIDIA 硬件（sm_70 / V100）上运行，v1.0.0 中报告的预填充性能下降问题建议在上生产前进行测试验证。

6. **Ternary 量化持续推进。** PTQ1_0 和 STQ1_0（Sherry）都在向主线迈进。如果你正在探索超低比特推理，这两个格式在精度与内存占用的权衡上提供了新的选项。

---

*简报基于 ggml-org/llama.cpp GitHub 活动生成，时间：2026-11-17。链接指向原始 GitHub 页面。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the English text to Simplified Chinese
2. Keep all Markdown structure (headings, tables, lists, etc.) exactly as-is
3. Keep URLs, code, numbers, dates, issue/PR references, file paths, API/config identifiers in their original form
4. Use natural technical Chinese appropriate for a Chinese developer newsletter
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

## 1. 今日要点 (Today's Highlights)
- "Highlights" → 今日要点
- "hardware diversity" → 硬件多元化
- "CANN (Ascend NPU) build support" → CANN (昇腾 NPU) 构建支持
- "Intel NPU backend via OpenVINO" → 通过 OpenVINO 的 Intel NPU 后端
- "MLX runner" stays as-is
- "memory management" → 内存管理
- "speculative decoding" → 投机解码
- "GCC 15" stays
- "build regression" → 构建回归问题
- "multiline REPL bug" → 多行 REPL 缺陷
- "Ctrl+C behavior" → Ctrl+C 行为

## 2. Releases & Breaking Changes
- "Releases & Breaking Changes" → 版本发布与重大变更
- "tagged releases" → 正式发布的版本
- "Build regression" → 构建回归问题

## 3. New Model & Hardware Support
- "New Model & Hardware Support" → 新模型与硬件支持
- "Hardware Backends" → 硬件后端


- "Community Integrations" → 社区集成

## 4. Performance & Optimization
- "Performance & Optimization" → 性能与优化
- "Landed Improvements" → 已合并的改进
- "Active Development (Open PRs)" → 活跃开发中（开放 PR）

## 5. Stability & Regressions
- "Stability & Regressions" → 稳定性与回归问题
- "High Severity" → 高严重性
- "Medium Severity" → 中等严重性
- "Low Severity / Feature Requests" → 低严重性 / 功能请求

## 6. What This Means for Application Developers
- "What This Means for Application Developers" → 对应用开发者的影响
- "Immediate Action Items" → 立即行动项
- "Near-Term Opportunities" → 近期机遇
- "Long-Standing Requests to Track" → 长期跟踪的需求

The translation needs to maintain consistent technical terminology throughout. I'll preserve the overall structure while converting the English text to Chinese, ensuring all headings, lists, and sections align with the original document's organization.
</think>


# Ollama 项目简报 — 2026-11-17

## 1. 今日要点

Ollama 项目近期在硬件多样化方面进展显著，**CANN（昇腾 NPU）构建支持**新增了一个 PR，同时有功能请求希望增加**通过 OpenVINO 的 Intel NPU 后端**支持。MLX runner 方面，dhiltgen 的多个 PR 正在推进内存管理和投机解码能力。一个关键的 **GCC 15** 构建回归问题被报告，同时影响 Ctrl+C 行为的多行 REPL 缺陷已修复并合并。

---

## 2. 版本发布与重大变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| 无新版本发布 | 过去 24 小时内无正式发布的版本 | — |

**注意：** 使用 GCC 15 的用户应注意存在构建回归问题（见第 5 节）。项目当前仍基于 v0.40.x 稳定版。

---

## 3. 新模型与硬件支持

### 硬件后端

| 新增项 | 描述 | 状态 | 链接 |
|----------|-------------|--------|------|
| **CANN 后端（昇腾 NPU）** | 新增 `ggml-cann` 构建选项；支持设备发现并路由至 `llama-server` 以进行昇腾 NPU 推理 | **开放 PR** | [#19732](https://github.com/ollama/ollama/pull/19732) |
| **通过 OpenVINO 的 Intel NPU** | 功能请求：增加 Intel Core Ultra NPU 支持（如 Core Ultra 9 185H），目标是与 NVIDIA/AMD/Apple 相同的后端模式 | **开放 Issue** | [#19535](https://github.com/ollama/ollama/issues/19535) |
| **PPLX Decider v1.3 (MLX)** | 27B 检查点支持 Flash 和 v4 分块决策协议，适用于 choice、yes/no、score 和图片请求 | **开放 PR** | [#19734](https://github.com/ollama/ollama/pull/19734) |
| **D3.1 nano (MLX)** | D3.1 nano:2b 双向前缀评分支持 | **开放 PR** | [#19729](https://github.com/ollama/ollama/pull/19729) |

### 社区集成

- **Open Game Master** 已添加到 README — 一款桌游 DM 应用，支持本地 Ollama 模型（[#19728](https://github.com/ollama/ollama/pull/19728)）

---

## 4. 性能与优化

### 已合并的改进

| PR | 描述 | 影响 |
|----|-------------|--------|
| [#19731](https://github.com/ollama/ollama/pull/19731) | **多行 REPL 缺陷修复** — Ctrl+C/Ctrl+G 现在可正确退出多行模式，而非吞掉后续输入 | 正确性 |
| [#18397](https://github.com/ollama/ollama/pull/18397) | **`/api/embed` HTTP 连接复用** — 消除了每次嵌入请求的冗余健康检查 | 延迟/吞吐 |
| [#19725](https://github.com/ollama/ollama/pull/19725) | **Modelfile 导出往返保真度** — 导出 Modelfile 时保留边界制表符 | 正确性 |
| [#19724](https://github.com/ollama/ollama/pull/19724) | **OLLAMA_HOST 路径编码修复** — 带编码路径的代理部署场景现在正常工作 | 部署兼容性 |

### 活跃开发中（开放 PR）

| PR | 描述 | 详情 |
|----|-------------|---------|
| [#19677](https://github.com/ollama/ollama/pull/19677) | **MLX 跨繁忙请求槽的前缀复用** | 重叠对话的共享提示词处理 |
| [#19678](https://github.com/ollama/ollama/pull/19678) | **Metal 自适应保存历史保留** | 基于内存压力动态调整 8 GiB 分配 |
| [#19730](https://github.com/ollama/ollama/pull/19730) | **CUDA 集显内存压力自适应** | 面向 Linux/Windows 集成 CUDA GPU 的自适应历史保留 |
| [#19663](https://github.com/ollama/ollama/pull/19663) | **MLX 批量投机验证** | 在重叠请求间保持草稿生成活跃；有利于 MTP/DFlash 模型 |
| [#19391](https://github.com/ollama/ollama/pull/19391) | **投机解码开关** — `draft_num_predict=0` 用于基准测试 | 每次请求禁用草稿生成 |
| [#19632](https://github.com/ollama/ollama/pull/19632) | **显存核算和 GPU 分片修复** | 解决 issues #19463、#18679、#18349、#16599 |
| [#19723](https://github.com/ollama/ollama/pull/19723) | **每次请求的 Token 指标日志** | `OLLAMA_LOG_METRICS=1` → JSONL 输出至 `~/.ollama/logs/metrics.jsonl` |
| [#19705](https://github.com/ollama/ollama/pull/19705) | **Qwen 工具调用流式解析修复** | 在流式 Qwen3.5/Qwen3-Coder 工具调用中保留字面文本 |

---

## 5. 稳定性与回归问题

### 高严重性

| Issue | 描述 | 临时方案 | 修复 PR？ |
|-------|-------------|------------|---------|
| **#19714** | **GCC 15 构建失败** — `llama-mmap.h` 中缺少 `#include <cstdint>` 导致 `uint32_t` 错误；GCC 15.2.0 对标准合规性更严格 | 使用 GCC 14 或 Clang 直至修复完成 | — |
| **#19558** | **AMD Renoir 集显 (Ryzen 4700U, gfx90c) Vulkan 后端崩溃** — v0.40.14 和 v0.40.15-rc2 在模型加载时 `llama-server` 崩溃，NTSTATUS 0xe06d7363 | 禁用 Vulkan 后端；使用 CPU 或可用的 CUDA | — |
| **#19589** | **AMD RX 5500 (Navi 14, gfx1010) Vulkan SIGBUS** — `llama-server --list-devices` 以退出码 135 崩溃 | 禁用 Vulkan 后端 | — |
| **#19444** | **Windows ARM64 Gemma3 视觉超时** — 图片处理在 CPU 路径上无限挂起 | 无已知临时方案；影响多模态推理 | — |

### 中等严重性

| Issue | 描述 | 状态 | 链接 |
|-------|-------------|--------|------|
| **#19524** | **Qwen2.5-Coder/Qwen3 原生工具调用失败** — 工具调用产生无效输出或静默失败 | 修复 PR 存在 | [#19705](https://github.com/ollama/ollama/pull/19705) |
| **#19712** | **端口绑定冲突** — `bind: Une seule utilisation de chaque adresse de socket`（地址已被占用） | 确保无其他进程占用 11434 端口 | — |
| **#19716** | **云端计费回归** — 上个计费周期的使用数据在续费时被删除 | 无临时方案；影响付费用户 | — |
| **#19511** | **`/api/usage` 回归** — 不再返回会话/周使用百分比；仅返回请求计数 | Web UI 仍显示百分比；API 已降级 | — |
| **#19340** | **多行 REPL 吞键缺陷** — 在 `"""` 块中按 Ctrl+C 会话仍处于多行模式 | 已修复 | [#19731](https://github.com/ollama/ollama/pull/19731) |

### 低严重性 / 功能请求

| 项目 | 描述 | 链接 |
|------|-------------|------|
| #19733 | 模型加载时找不到张量 `blk.0.ssm_beta.weight` 错误 | [#19733](https://github.com/ollama/ollama/issues/19733) |
| #19464 | 功能请求：Unix 域套接字（IPC）支持，补充 TCP/IP | [#19464](https://github.com/ollama/ollama/issues/19464) |
| #19535 | 功能请求：通过 OpenVINO 的 Intel NPU 后端 | [#19535](https://github.com/ollama/ollama/issues/19535) |
| #2288 | 长期悬而未决的 flatpak/SNAP 请求（31 👍） | [#2288](https://github.com/ollama/ollama/issues/2288) |

---

## 6. 对应用开发者的影响

### 立即行动项

1. **构建时避免使用 GCC 15** — 从源码编译时，在 `llama-mmap.h` 的 `#include <cstdint>` 回归问题解决前，请使用 GCC 14 或 Clang（[#19714](https://github.com/ollama/ollama/issues/19714)）。

2. **为 Qwen 工具调用应用临时方案** — 如果使用 Qwen2.5-Coder 或 Qwen3 的原生工具调用，流式解析器修复正在等待合并（[#19705](https://github.com/ollama/ollama/pull/19705)）。在此之前，请在应用层验证工具调用输出。

3. **关注 MLX runner 内存变化** — 即将到来的自适应历史保留变更（[#19678](https://github.com/ollama/ollama/pull/19678)、[#19730](https://github.com/ollama/ollama/pull/19730)）将改变 Apple Silicon 和集成 CUDA GPU 上对话缓存使用的显存大小。这些 PR 合并后需测试工作负载。

### 近期机遇

4. **昇腾 NPU 支持即将到来** — CANN 后端 PR（[#19732](https://github.com/ollama/ollama/pull/19732)）将使 Ollama 运行在华为昇腾 NPU 上，拓展中国硬件生态。边缘部署团队应进行评估。

5. **每次请求的指标助力可观测性** — 可选的 token 指标日志（[#19723](https://github.com/ollama/ollama/pull/19723)）将通过 `OLLAMA_LOG_METRICS=1` 实现每次请求的详细推理成本跟踪。

6. **投机解码控制即将可用** — 不久后将能通过 `draft_num_predict=0` 禁用每次请求的草稿生成（[#19391](https://github.com/ollama/ollama/pull/19391)），适用于基准测试和需要确定性输出的场景。

7. **显存核算改进** — [#19632](https://github.com/ollama/ollama/pull/19632) 中的修复解决了多 GPU 设置下的模型驱逐和 GPU 分配问题；该版本发布后升级以获得更可预测的服务行为。

### 长期跟踪的需求

- **Flatpak/SNAP 打包**（[#2288](https://github.com/ollama/ollama/issues/2288)）— 31 个 👍；无进展。Linux 桌面用户可关注替代方案。
- **Intel NPU 支持**（[#19535](https://github.com/ollama/ollama/issues/19535)）— 与"AI PC"部署（配备 Core Ultra 处理器的设备）相关。

---

*简报生成日期：2026-11-17。数据来源：github.com/ollama/ollama。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to follow the rules carefully:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate this carefully, maintaining the structure and using proper technical Chinese terminology.

Let me go through section by section:

Title: "LiteLLM Digest — 2026-11-17" → "LiteLLM 每日简报 — 2026-11-17"

Section 1: Today's Highlights
- "supply-chain integrity checks" → 供应链完整性检查
- "Rust-acceleration push" → Rust 加速推进
- "gateway parameter translation" → 网关参数转换
- "backport candidates" → 回退候选
- "thinking blocks (signature preservation)" → 思考块（签名保留）
- "Gemini tool-call memory" → Gemini 工具调用记忆
- "exception misrouting" → 异常路由错误
- "stream abort leaks" → 流中断泄漏

Let me translate this carefully now.
</think>


# LiteLLM 每日简报 — 2026-11-17

## 1. 今日要闻

LiteLLM v1.108.10 正式发布，带来了**基于 cosign 的 Docker 镜像签名验证**功能，支持生产环境部署的供应链完整性检查。项目继续推进 Rust 加速计划——认证读取、并发请求限流和网关参数转换都在向原生 Rust 路径迁移，今日的 PR 均以 `lts/1.108.x` 分支为目标进行回退候选。Anthropic `/v1/messages` 思考块（签名保留）和 Gemini 工具调用记忆的关键正确性修复已落地，同时多个高频问题（Groq 401 异常路由错误、Bedrock 流中断泄漏、限流器 Redis 写入）已得到解决。

---

## 2. 版本发布与破坏性变更

| 变更 | 详情 |
|------|------|
| **v1.108.10 已发布** | Docker 镜像现通过 cosign 签名，采用 OIDC 关联的证书身份（`token.actions.githubusercontent.com`）。验证方式：`cosign verify --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main --certificate-oidc-issuer https://token.actions.githubusercontent.com ghcr.io/berriai/litellm:v1.108.10` |
| `completion_model` 回退语义已修正 | 此前会覆盖客户端指定的模型；现仅在无指定时正确作为回退方案。 | [#21554](https://github.com/BerriAI/litellm/issues/21554) |
| `COHERE_API_BASE` 现对嵌入模型生效 | Cohere 嵌入路径现已读取该环境变量（重排序功能此前已支持）。 | [#50248](https://github.com/BerriAI/litellm/issues/50248) |
| `/chat/completions` 端点现可强制用于 OpenAI 兼容服务器 | 模型前缀 `openai/resp__...` 不再强制路由至 Responses API。 | [#51547](https://github.com/BerriAI/litellm/issues/51547) |
| Groq 401 → `AuthenticationError` | 此前映射为 `BadRequestError`；现已修正类型。 | [#51994](https://github.com/BerriAI/litellm/issues/51994) |

---

## 3. 新模型与硬件支持

| 领域 | 更新内容 |
|------|----------|
| **Cursor CLI 订阅** | 新增代理功能，将 Cursor 原生 Agent 流通过 LiteLLM 转发。 | [#52205](https://github.com/BerriAI/litellm/pull/52205) |
| **Databricks Claude Opus 5.5** | 成本映射中声明了对话中系统提示支持。 | [#52214](https://github.com/BerriAI/litellm/pull/52214) |
| **GPT-5.6 变体**（`sol`、`luna`、`terra`） | `supports_max_reasoning_effort` 标志已在模型映射中修正。 | [#47884](https://github.com/BerriAI/litellm/issues/47884) |
| **GPT-5.5 / GPT-6 Azure** | `stop` 序列现已暴露（此前被拒绝为不支持）。 | [#28650](https://github.com/BerriAI/litellm/pull/28650) |
| **Snowflake Cortex** | 多项问题修复：流式工具调用保留、端点文档修正、OpenAI-/Anthropic 兼容路径处理改进。 | [#30762](https://github.com/BerriAI/litellm/issues/30762) |

---

## 4. 性能与优化

| 类别 | 详情 | PR/Issue |
|------|------|----------|
| **限流器 Redis 写入** | 对未配置限流的 key/user/team 跳过调用后 Redis 写入——消除高吞吐下的冗余 I/O。 | [#31880](https://github.com/BerriAI/litellm/issues/31880) |
| **Bedrock 流中止** | 已回退至 `lts/1.108.x`：中止客户端放弃的流式调用时，立即关闭 Bedrock 连接，而非继续读取约 1500 个 token（耗时约 30 秒）。 | [#52210](https://github.com/BerriAI/litellm/pull/52210) |
| **Rust 认证存储读取** | 虚拟 key、JWT 密钥映射和模型访问组现已通过 Rust SQLx 连接池读取（`RUST_RESERVED_CONNECTIONS` 从 0 调整为 2），减少 Python 数据库线程竞争。 | [#52173](https://github.com/BerriAI/litellm/pull/52173) |
| **Rust 并发请求限流器** | V3 限流器移植至 `CustomLoggerV2` Rust 回调包（`callbacks-parallel-request-limiter`），降低 GIL 开销。 | [#51537](https://github.com/BerriAI/litellm/pull/51537) |
| **GenericAPILogger 配置重载泄漏** | 重用缓存的日志实例；配置重载不再产生累积的后台刷新循环（修复空闲 CPU 攀升问题）。 | [#50879](https://github.com/BerriAI/litellm/pull/50879) |
| **Prompt Caching 回退** | 开发者消息现可在 Claude 上获得缓存积分；已回退至 `lts/1.108.x`。 | [#51852](https://github.com/BerriAI/litellm/pull/51852) |
| **Responses WebSocket 预算强制执行** | 拒绝调用时写入一条失败记录，包含准确的 timestamp/model group，而非仅记录首次拒绝。 | [#50731](https://github.com/BerriAI/litellm/pull/50731) |

---

## 5. 稳定性与回归问题

按严重程度和修复状态排序：

### 严重 / 高

| 问题 | 描述 | 状态 | 链接 |
|------|------|------|------|
| **MCPJWTSigner 覆盖服务器 `auth_value`** | 启用 `mcp_jwt_signer` 时，静态 bearer/token/basic 凭证会被替换为 JWT，导致需要密钥认证的 MCP 服务器返回 401。 | 已关闭 | [#47988](https://github.com/BerriAI/litellm/issues/47988) |
| **MCP 路由中的上下文状态泄漏** | 静态分析发现 `_mcp_active_toolset_id` 在异步流中断时跨请求泄漏。 | 已关闭 | [#30416](https://github.com/BerriAI/litellm/issues/30416) |
| **Gemini 间歇性 503 / APIConnectionError** | Gemini 请求高频失败，在服务不可用与连接断开之间交替。 | 进行中 | [#50434](https://github.com/BerriAI/litellm/issues/50434) |
| **Bedrock 加拿大推理配置丢失 `reasoning_effort`** | `output_config.effort` 在 `ca.*` Bedrock 部署上被静默忽略；`us.*` 正常。 | 已关闭（PR 待合并） | [#52110](https://github.com/BerriAI/litellm/issues/52110) |

### 中

| 问题 | 描述 | 状态 | 链接 |
|------|------|------|------|
| **`stream_chunk_builder` 对列表 `reasoning_content` 的 TypeError** | 推理模型流式输出结构化块列表（如 `[{"content": "", "signature": "..."}]`）时，chunk 构建器崩溃。 | 进行中 | [#50893](https://github.com/BerriAI/litellm/issues/50893) |
| **Vercel AI SDK 在工具调用步骤间丢失推理内容** | Anthropic `/v1/messages` 思考块未携带签名关闭，导致 DeepSeek/GLM 推理丢失。 | 修复 PR 进行中 | [#52117](https://https://github.com/BerriAI/litellm/pull/52117), [#52116](https://https://github.com/BerriAI/litellm/pull/52116) |
| **非 gemini 模型名导致 Gemini 工具调用记忆丢失** | 代理模型名缺少 "gemini" 子串导致 LiteLLM 丢弃思考签名。 | 修复 PR 进行中 | [#52212](https://github.com/BerriAI/litellm/pull/52212) |
| **`utils.py` 中的 `ModelNotMappedError`** | 自动上报；调查中。 | 进行中 | [#51452](https://github.com/BerriAI/litellm/issues/51452) |
| **密钥超消费限额后免费模型仍被阻止** | API key 超出消费上限后无法访问免费本地模型。 | 进行中 | [#52071](https://github.com/BerriAI/litellm/issues/52071) |
| **偶发 502 错误** | 连续数周持续出现零星 502；根本原因尚未确定。 | 进行中 | [#37168](https://github.com/BerriAI/litellm/issues/37168) |

### 低 / 已修复

| 问题 | 描述 | 状态 | 链接 |
|------|------|------|------|
| **ChatGPT Responses 流式传输丢失函数调用参数** | `response.function_call_arguments.done` 无增量更新导致工具调用参数丢失。 | 已关闭 | [#27144](https://github.com/BerriAI/litellm/issues/27144) |
| **`completion()` 使用 tools 时需要 `mcp` 模块** | 基础安装（无 `proxy` extra）传入 `tools=` 时抛出 `ModuleNotFoundError`。 | 已关闭 | [#50781](https://github.com/BerriAI/litellm/issues/50781) |
| **Helm  Charts Redis/PostgreSQL 依赖过时** | 依赖图表回归导致启动失败。 | 已关闭 | [#26169](https://github.com/BerriAI/litellm/issues/26169) |
| **Gemini 非流式内容过滤丢失拒绝原因** | `block_reason` 和 `native_finish_reason` 现已保留在 `provider_specific_fields` 中。 | 已修复 | [#51624](https://github.com/BerriAI/litellm/pull/51624), [#51614](https://github.com/BerriAI/litellm/pull/51614) |

---

## 6. 对应用开发者的影响

1. **如果在生产环境运行，请升级至 v1.108.10** — cosign 验证现已推荐作为基于容器部署的信任锚点。

2. **如果使用 Bedrock 流式传输并配置了超时/中止**，请回退 PR [#52210](https://github.com/BerriAI/litellm/pull/52210)，以避免 token 泄漏和长尾连接。这在大规模场景下是显著的成本和延迟问题。

3. **如果通过 Snowflake Cortex 路由** — [#30762](https://github.com/BerriAI/litellm/issues/30762) 中的工具调用流式传输和端点处理改进解决了长期以来的静默丢失问题；更新后请验证你的集成。

4. **对于带预算控制的多租户部署** — Groq 401 修复和免费模型消费限额 bug（[#52071](https://github.com/BerriAI/litellm/issues/52071)）均影响预算强制逻辑；升级后请检查你的消费防护栏。

5. **如果在技术栈中使用 Cursor CLI** — 支持正在 [#52205](https://github.com/BerriAI/litellm/pull/52205) 中落地；在依赖其进行 Agent 工作流之前，建议进行早期测试。

6. **关注 Rust 迁移的影响面** — 认证、请求限流和网关转换正在向 Rust 路径迁移。如果你有自定义回调或中间件，在拉取 LTS 回退链之前，务必在 `main` 分支上充分测试。

---

*简报数据来源：BerriAI/litellm GitHub — 2026-11-17*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate a technical report from English to Simplified Chinese. Let me carefully analyze the content and translate it while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Issue/PR references stay as-is
6. Use natural technical Chinese, like a Chinese developer newsletter

Let me translate section by section:

**Section 6: What This Means for Application Developers**

This is the heading, should translate to "这对应用开发者意味着什么" or "对应用开发者的影响"

**Computer Use & MCP:** The new computer use beta opens the door to building agents that interact with desktop applications (Unity, Unreal, Blender, Roblox). Early adopters should expect rough edges and test in sandboxed environments before production use.

- Computer Use & MCP → Computer Use 与 MCP
- "opens the door to" → 开启了...的大门/为...开辟了可能
- "interact with desktop applications" → 与桌面应用程序交互
- "Early adopters should expect rough edges" → 早期采用者需做好心理准备，可能会有一些磕绊
- "test in sandboxed environments" → 在沙箱环境中测试
- "before production use" → 再用于生产环境

Translation: "Computer Use 与 MCP：新的 computer use beta 为构建能与桌面应用程序（Unity、Unreal、Blender、Roblox）交互的智能体开辟了道路。早期采用者需做好心理准备，可能会有一些磕绊，建议先在沙箱环境中测试后再用于生产环境。"

**Multi-GPU training flexibility:** The `UNSLOTH_PARALLEL=auto` flag eliminates the need to hand-tune DDP vs. FSDP2. Teams running distributed training on mixed hardware (e.g., Kaggle T4s, custom racks) should set this env var and re-benchmark — early data suggests FSDP2 overhead is significant for models that fit per-GPU.
 
Tensor parallel serving introduces an innovative approach for budget-conscious GPU configurations. By offloading frozen embeddings to CPU, teams can now deploy Qwen3.8-27B 4-bit models on more affordable hardware like dual T4 GPUs. This strategy significantly reduces entry barriers for serving mid-sized mixture-of-experts models in performance-critical applications, making advanced AI infrastructure more accessible to smaller teams and projects.

The Studio UX has undergone substantial refinement, targeting core pain points in developer workflows. Key improvements include a redesigned model selection interface, persistent search query capabilities, and intelligent composer sizing. These enhancements directly address previous friction points in iterative development processes, particularly for teams building UIs atop the Unsloth Studio's API. Notably, the new dataset reuse and deletion features dramatically simplify asset management.

Critical watch items emerge from the v0.1.918-beta release. Two significant issues demand immediate attention: model loading regressions and llama.cpp Desktop crashes. Development teams should consider temporarily reverting to v0.1.917-beta until comprehensive fixes are implemented, ensuring production stability and minimizing potential workflow disruptions. 早期采用者应预见潜在的挑战，建议在沙盒环境中谨慎测试。混合硬件分布式训练的团队可利用 `UNSLOTH_PARALLEL=auto` 环境变量优化训练策略。不过初步数据表明，对于单GPU可容纳的模型，FSDP2 开销仍然相当显著，需要进一步评估和优化。

在张量并行服务领域，通过将冻结的嵌入层卸载到 CPU，为预算受限的 GPU 配置开辟了新的可能性。例如，Qwen3.8-27B 4-bit 模型现在可以在 2× T4（每块 16 GB）上运行，这一突破降低了中小型 MoE 风格模型的部署门槛，为延迟敏感型应用提供了更灵活的解决方案。

Studio 用户体验改进聚焦于减少迭代工作流中的摩擦。重新设计的模型选择器、搜索查询保留和组合器尺寸调整等细节优化，显著提升了开发者效率。针对基于 Unsloth Studio API 构建 UI 的团队，简化了资源管理流程。

重点关注版本回归风险：v0.1.918-beta 中的模型加载和 llama.cpp Desktop 崩溃问题可能会影响立即升级的用户，建议在修复版本发布前暂缓更新。 The new beta for computer use enables developers to create agents that interact with desktop applications like Unity, Unreal, Blender, and Roblox. Early adopters should be prepared for potential challenges and test in controlled environments before deploying in production settings.

For multi-GPU training, the `UNSLOTH_PARALLEL=auto` flag simplifies distributed training by automatically selecting between DDP and FSDP2. Teams using varied hardware configurations, such as Kaggle T4 instances or custom server racks, should set this environment variable and reassess their performance benchmarks. Initial findings indicate FSDP2 introduces notable computational overhead, particularly for models that can fit within a single GPU's memory.

Budget GPU tensor parallel serving becomes more accessible by offloading frozen embedding layers to CPU memory. This approach allows running models like Qwen3.8-27B 4-bit on more affordable dual T4 (16 GB each) configurations that previously would have required significantly more VRAM. Such optimizations lower the entry barrier for serving mid-sized mixture-of-experts models in latency-sensitive applications.

The Studio's user experience sees meaningful refinements, focusing on reducing friction in iterative development workflows. Enhancements include a redesigned model selection interface, persistent search query retention, and more thoughtful composer sizing options. These improvements particularly benefit teams building custom interfaces using the Unsloth Studio API, streamlining dataset management and resource handling.

Critical concerns emerge with the v0.1.918-beta release. Model loading and llama.cpp Desktop crashes present immediate challenges for users planning to upgrade. Development teams should carefully evaluate these regression risks and consider delaying the upgrade until comprehensive fixes are available, ensuring production stability and minimizing potential disruptions.
</think>


## 6. 这对应用开发者意味着什么

**Computer Use 与 MCP：** 新的 computer use beta 为构建能与桌面应用程序（Unity、Unreal、Blender、Roblox）交互的智能体开辟了道路。早期采用者需做好心理准备，可能会有一些磕绊，建议先在沙箱环境中测试后再用于生产环境。

**多 GPU 训练灵活性：** `UNSLOTH_PARALLEL=auto` 环境变量免去了手动调优 DDP 与 FSDP2 的麻烦。在混合硬件（如 Kaggle T4、自定义机架）上运行分布式训练的开发团队应设置此环境变量并重新基准测试——早期数据显示，对于能在单卡内存中容纳的模型，FSDP2 的开销相当可观。

**预算 GPU 的张量并行推理：** 将冻结的 embedding 卸载到 CPU，使得 Qwen3.8-27B 4-bit 可以在 2× T4（每卡 16 GB）上运行，而此前这需要更大的显存。这降低了在延迟敏感型应用中部署中等规模 MoE 风格模型的入门门槛。

**Studio 用户体验改进：** 重新设计的模型选择器、搜索关键词保留和 composer 尺寸调整，减少了迭代工作流中的阻力。如果你基于 Unsloth Studio 的 API 构建 UI，数据集复用和删除功能简化了资产管理。

**重点关注项：** v0.1.918-beta 的模型加载回归问题和 llama.cpp Desktop 崩溃可能会影响立即升级的用户——建议等待修复版本发布前继续使用 v0.1.917-beta。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*