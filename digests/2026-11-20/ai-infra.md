# AI 基础设施日报 2026-11-20

> 生成时间: 2026-11-20 03:41 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to preserve all formatting (tables, headings, lists, etc.) while translating the content into natural technical Chinese. Let me go through this section by section.

Key things to remember:
- Preserve all Markdown structure
- Keep project names, PR numbers, version tags, URLs as-is
- Use natural technical Chinese register
- Output only the translation

Let me translate this carefully, section by section.
</think>


# AI 基础设施生态系统动态 — 跨项目对比

## 2026-11-20

---

## 1. 生态系统总览

2026-11-20 的 AI 推理基础设施生态呈现出成熟但仍在快速演进的状态。两个主流开源推理服务引擎 — **vLLM** 和 **SGLang** — 都在深化硬件厂商锁定规避（AMD ROCm、Intel XPU、NPU/Ascend），其中 vLLM 在 MI3XX 系列 ROCm 性能方面领先，SGLang 在 Ascend NPU 适配方面更具优势。**llama.cpp** 继续服务于底层、硬件无关的细分场景，发布了 BF16 ROPE 并扩展到新的 DSP 硬件，**Ollama** 则面向开发者体验和 Apple Silicon 的 MLX 后端，**LiteLLM** 提供多云网关抽象层。五个项目的共同主线是 **投机解码走向成熟**（DFlash、MTP、DSpark）、**量化精度专项优化**（MXFP6、Q4NX、ModelOpt INT8），以及在网关/代理层向 **Rust 原生热路径** 迁移以削减 Python 开销的趋势。

---

## 2. 活跃度对比

| 项目 | 活跃 Issue | 活跃 PR | 24h Release | 主要活跃主题 |
|---------|--------------|-----------|-----------|------------------------|
| **vLLM** | 17（热点追踪） | ~8 个活跃 PR | 无 | ROCm 性能调优、DiffKV、MXFP6 量化、RL 权重热重载 |
| **SGLang** | ~14（CUDA coredump 386 条评论） | 15+ | 无 | DFlash 4-PR 系列、NPU 调度器修复、HiCache 预取 |
| **llama.cpp** | ~12 个 open | ~12 | 10 个 commit（b12547–b12556） | BF16 ROPE、OpenCL GQA、Vulkan Q2_K、SenseNova Loop |
| **Ollama** | 14 | 15 | 无 | MLX 显存并行、对话持久化、Hy4 MLX 移植 |
| **LiteLLM** | ~12 | ~8 | v1.112.0-dev.1、v1.111.0-rc.2、v1.110.1 stable、LTS v1.108.12 | Rust 原生限速、Kafka 日志、新模型价格表 |

**解读：** llama.cpp 的原始 commit 吞吐量最高但无正式 Release tag，表明其采用高频 patch 驱动模式。LiteLLM 是唯一活跃打 tag 的项目。SGLang 头部 Issue 的评论量最大，说明其社区活跃度最高。vLLM 的活动涉及面最广，RFC 线程将影响未来多年的技术路线。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM |
|---------------------|------|--------|-----------|--------|---------|
| **Qwen3.8 / Qwen4Exp** | ✅ 活跃优化中 | — | ✅ 推理 + MTP 修复 | ✅ Prompt 缓存 bug | — |
| **Kimi K3 / K3.1** | — | ✅ NPU + DSpark | — | — | ✅ K3.1 Pro via Inference APIs |
| **Tencent Hy4** | ✅ 配方已添加 | — | — | ✅ MLX 移植 + DFly2 草稿 | — |
| **DeepSeek-V4** | — | ✅ RFC 已开启 | — | — | — |
| **SenseNova Loop** | — | — | ✅ 完整支持 | — | — |
| **MiniMax-M3 / M3.1** | — | — | ✅ 融合稀疏掩码 | ⚠️ 工具调用解析 bug | ✅ M3.1 Flash |
| **Nemotron 3.5 Super VL** | — | — | — | — | ✅ via Inference APIs |
| **Gemma 4（多模态）** | — | ✅ Pooling + 工具流式 | — | — | — |
| **Spark2.5 DSpark** | — | — | ✅ 转换 + 推理 | — | — |
| **FLUX.3 / LTX-2 / LTX-2.5** | — | — | — | ✅ LoRA 微调 | — |
| **Intel XPU 模型** | ⚠️ DFlash2 float16 退化 | — | — | — | — |
| **AMD gfx950 MI355X** | ✅ 性能工作流 | — | — | ✅ NPU 支持 | — |

**广度冠军：** LiteLLM（通过 Inference APIs 实现最快多供应商模型覆盖）
**深度冠军：** vLLM（Qwen4Exp SM100 split-K、SM80 索引器、ROCm gfx950 工作流）
**最专精：** llama.cpp（SenseNova Loop、RISC-V Mamba-2、Qualcomm Hexagon DSP）

---

## 4. 性能前沿

### KV 缓存与显存管理

| 项目 | 重点方向 | 状态 |
|---------|-----------|--------|
| vLLM | DiffKV — 按 tensor 身份感知的 KV 视图缓存，消除每次调用的视图派生开销 | PR #66963 已合并 |
| vLLM | KV 卸载 DRAM 水位线上调至 0.99/0.97 | PR #67944 已合并 |
| vLLM | 远程 READ 进行中时 KV block release 的竞态条件 | Bug #61229 open |
| SGLang | HiCache L3 预取在 CP（attn_cp_size=8）下永不完成 | Bug #51608 open |
| SGLang | 混合窗口 DFlash KV 存储与上下文边界尾部处理 | PR #51693 |
| llama.cpp | MoE 缓存图节点预留（graph_max_nodes 预算修复） | PR #32636 open |
| Ollama | 按层 KV 缓存大小分配（使用实际 head_count_kv） | PR #19327 已合并 |

### 批处理与调度

| 项目 | 重点方向 | 状态 |
|---------|-----------|--------|
| SGLang | EPLB 基于 scatter 的首次匹配分发 | PR #51346 已合并 |
| SGLang | 跨非对称布局的 DFlash TP 传输 | PR #51698 |
| LiteLLM | Rust 原生虚拟 key 限速（rpm/tpm/tpd/max_parallel） | PR #52839 已合并 |
| LiteLLM | 优先级路由与原生容量共享 | PR #53015 已合并 |
| Ollama | MLX 基于显存的并行度选择 | PR #19785 已合并 |
| SGLang | NPU 调度器显存泄漏修复 | PR #51679 已合并 |

### 量化与算子

| 项目 | 重点方向 | 状态 |
|---------|-----------|--------|
| vLLM | MXFP6 算子门控与 MXFP4 路径统一 | PR #66077 已合并 |
| vLLM | ModelOpt INT8 量化（Marlin via Fast Start） | PR #68176 已合并 |
| llama.cpp | OpenCL DP4a int8 KQ 矩阵乘法 | Commit b12555 |
| llama.cpp | Vulkan Q2_K 整数缩放因子提取 | PR #32628 已合并 |
| llama.cpp | BF16 → ROPE/SET_ROWS（CPU + CUDA） | Commit b12554 |
| llama.cpp | OpenCL GQA head 折叠用于投机验证 | PR #32631 已合并 |
| SGLang | Humming MoE grid 溢出修复（大 batch） | PR #51702 已合并 |

### 分布式服务

| 项目 | 重点方向 | 状态 |
|---------|-----------|--------|
| vLLM | RL 训练直接权重热重载 RFC（17+ 模型族） | RFC #54477 open |
| vLLM | Eager 模式序列并行与 GEMM 重叠 | RFC #61626 open |
| vLLM | Adaptive spin grace + WAITPKG 用于 shm_broadcast | RFC #52916 open |
| SGLang | PD 分解路线图 2026 Q4 | Issue #43699 进行中 |
| SGLang | MLA 模型的非对称 TP P/D 部署 | RFC #39963 open |
| LiteLLM | Kafka 原生请求日志 | PR #52855 已合并 |

**集中度信号：** KV 缓存优化和投机解码是跨项目最活跃的两个主题。每个项目都在至少其中一个领域有进行中或近期关闭的工作，确认它们是 2026 年吞吐量的主要杠杆。

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────────────────┐
│  网关 / 路由层                                                   │
│  LiteLLM — 多供应商抽象，虚拟 key 管理                           │
│  （Rust 原生限速，优先级路由，Kafka 日志）                        │
├─────────────────────────────────────────────────────────────────┤
│  本地运行时 / 开发者体验                                          │
│  Ollama — 单机开箱即用，MLX/Metal，Studio UI                     │
│  Unsloth — 微调工作室，Diffusion LoRA 训练                       │
│  （Ollama 和 Unsloth 均占据"本地 + 易用"生态位）                  │
├─────────────────────────────────────────────────────────────────┤
│  推理引擎 / 服务运行时                                            │
│  vLLM — 生产级多卡服务，PagedAttention                          │
│  SGLang — 调度器优先设计，投机解码发力                            │
│  llama.cpp — 便携式底层运行时，全后端，无服务端                   │
│  （vLLM 与 SGLang 直接竞争；llama.cpp 主打嵌入式场景）            │
├─────────────────────────────────────────────────────────────────┤
│  训练 / 微调层                                                   │
│  Unsloth — LoRA/QLoRA 微调工作室，Diffusion 训练                 │
│  vLLM — RL 权重热重载 RFC（基础设施也服务于训练）                 │
│  （Unsloth 是唯一的专职微调项目）                                 │
└─────────────────────────────────────────────────────────────────┘
```

**核心差异点：**

- **vLLM vs SGLang：** 两者均定位为生产推理引擎，但 vLLM 在 CUDA 算子优化和量化集成方面更具深度，SGLang 则在调度器灵活性（EPLB、PD 分解、NPU Ascend 对齐）上领先。SGLang 架构上更可组合；vLLM 在 GPU 后端垂直整合程度更高。

- **llama.cpp vs 其他：** 作为唯一同时覆盖 RISC-V、Qualcomm DSP、SYCL、WebGPU、Vulkan、Metal、ROCm、CUDA 等异构硬件的项目，且不含服务端组件，是边缘和嵌入式推理的事实标准。

- **Ollama vs Unsloth：** 两者均面向本地开发者体验，但路径不同：Ollama 是推理运行时和 API 服务端，Unsloth 是微调工作室，推理为辅。交集有限；Unsloth 推理功能在增长，存在收敛风险。

- **LiteLLM vs 自建代理：** LiteLLM 占据多云网关层，与自建代理和托管服务直接竞争。向 Rust 迁移热路径表明其在向生产级性能迈进，而不仅仅是做 API 统一。

---

## 6. 趋势信号

### 1. 投机解码进入生产阶段
四个项目并行推进投机解码基础设施：
- **vLLM：** DiffKV、MTP 修复、RL 权重热重载
- **SGLang：** 4-PR DFlash 系列（类型化 KV 传输、非对称 TP、草稿共享、CUDA Graphs）
- **llama.cpp：** DFlash2 中止修复、Spark2.5 DSpark 支持
- **Ollama：** Hy4 DFly2 草稿推理（MLX）

实现路径的多样性（DFlash vs MTP vs DSpark vs DFly2）表明社区尚未收敛到统一的投机解码原语。应用开发者应针对具体模型评估接受率，而非假设某一种方案具有普适优势。

### 2. AMD ROCm 已不再是实验性支持
vLLM 的 MI355X（gfx950）和 MI350X（gfx942）工作流，以及 Unsloth 的 AMD NPU FastFlowLM 签名支持，表明 AMD GPU 适配已越过"实验性"门槛进入"主动优化"阶段。持有 AMD 硬件的基础设施团队应开始评估 vLLM + ROCm 的成本敏感型部署方案。

### 3. Rust 正在渗透 Python 基础设施
LiteLLM 将限速和路由迁移到 Rust（PR #52839、#52813、#53015），llama.cpp 持续维护其底层 C/C++ 代码库，为后续 Python 中心的 AI 基础设施项目将热路径下沉到 Rust 或 C++ 奠定了先例。预计 2026 年这一趋势将加速。

### 4. 多后端 NPU 正在崛起
SGLang 的 Kimi K3.1 Ascend NPU 适配和 Unsloth 的 AMD NPU 支持表明，推理基础设施不再仅依赖 CUDA。面向消费级硬件（Qualcomm NPU、AMD XDNA、Intel NPU）的应用开发者应关注这些后端的正式生产就绪状态。

### 5. 量化格式正在快速分化
MXFP6（vLLM）、Q4NX（Unsloth）、ModelOpt INT8（vLLM）和 AWQ key 名称修复（vLLM）共同说明：量化正在精度格式、硬件目标和算子实现三个维度上碎片化。运维方应按模型族标准化单一量化路径，而非混用多种格式。

### 6. Prompt 缓存正确性问题广泛存在
Ollama 的精确匹配缓存、SGLang 近乎为零的云端缓存命中率，以及 vLLM 在 block 边界前缀缓存处的 NaN logit 问题，共同指向：缓存一致性是静默正确性 bug 的常见根源。依赖 prompt 缓存的应用应增加缓存命中率检测和输出验证的监控。

### 7. LiteLLM LTS track 趋于稳定
当前 LTS 为 v1.108.12，最新 stable 为 v1.110.1，需要稳定性的团队应锁定 LTS 镜像。LTS 与 latest stable 之间相差两个 minor 版本 — 升级成本可控，但仍存在风险。

---

**智能体和应用开发者应关注的事项：**

| 信号 | 行动建议 | 时间节点 |
|--------|-----------|----------|
| 跨非对称 TP 的 DFlash KV 传输（SGLang #51698） | 评估异构集群投机解码 TP 灵活性 | 1–2 个版本 |
| AMD MI355X 性能工作流（vLLM #59575） | 开始在 AMD 上基准测试 Qwen3.8 MoE；对比 TCO vs H100 | 2–3 个版本 |
| Rust 原生限速（LiteLLM #52839） | 若吞吐量受限时重新评估 LiteLLM vs 自建代理 | 即刻 |
| Ollama MLX 对话持久化（#19745） | 发布后为 Apple Silicon 多轮智能体升级 | 下个版本 |
| MiniMax-M3.1 工具调用解析 bug（Unsloth #18481） | 避免使用 Unsloth 处理 MiniMax-M3.1 工具调用场景 | 修复发布前 |
| 预算强制超支（LiteLLM #50125） | 增加 +25% 预算缓冲或密切监控实际消费 | 修复发布前 |
| vLLM RL 权重热重载 RFC（#54477） | 跟踪 RL 训练流水线效率改进进展 | RFC → 实现落地 |

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Preserve all Markdown structure (headings, tables, lists, etc.)
2. Keep URLs, numbers, dates, issue/PR references, code spans, file paths verbatim
3. Keep project names, repository slugs, usernames, version tags as-is
4. Use natural technical Chinese, not literal word-for-word
5. Output ONLY the translation, no preamble or explanation

Let me translate section by section carefully, maintaining the technical register.

Key terms I need to handle consistently:
- vLLM - keep as-is
- ROCm - keep as-is
- MXFP6, MXFP4, MXFP4 - keep as-is
- SM100, SM80, SM60 - keep as-is
- A100, H100, H800 - keep as-is
- Qwen3.8, Qwen4Exp - keep as-is
- FlashAttention - keep as-is
- Triton - keep as-is
- CUDA - keep as-is
- KV cache - keep as-is or translate contextually
- prefix caching - 保持英文或译为"前缀缓存"
- speculative decoding - 推测解码
- MoE - 专家混合
- dtype - 保持英文
- TP (tensor parallelism) - 张量并行
- DP (data parallelism) - 数据并行
- RL (reinforcement learning) - 强化学习
- WNA16 - 保持英文
- AWQ - 保持英文
- DFlash2, DSpark - 保持英文
- GEMM - 保持英文
- ZMQ - 保持英文
- gfx950, gfx942 - 保持英文
- MI355X, MI350X - 保持英文
- GDN - 保持英文


- UMBP - 保持英文
- NixlConnector - 保持英文
- CUTLASS - 保持英文
- RDT - 保持英文
- WAITPKG - 保持英文
- MonolithicKernel / MonoKernel - 保持英文

Now I'll proceed with the translation, working through each section methodically to ensure technical accuracy and natural Chinese phrasing.
</think>


# vLLM 每日简报 — 2026-11-20

## 1. 今日要点

vLLM 项目在 AMD ROCm 优化（MI355X / MI350X）方向持续发力，同步推进 MI355X 性能追踪专项、针对 gfx950 和 gfx942 架构的专用解码内核改造。在量化方面，MXFP6 内核激活统一化正在推进，同时一项 DiffKV 优化提案有望消除每次 attention 调用时冗余的 KV 缓存视图推导逻辑。

## 2. 版本发布与破坏性变更

**最近 24 小时内无新版本发布。** 未检测到明确的版本号更新或变更日志条目。

## 3. 新模型与硬件支持

| 模型 / 架构 | 支持状态 | 说明 |
|---|---|---|
| **Qwen4Exp (Qwen3.8)** | 优化进行中 | SM100 稀疏注意力已合入 Split-K 启动配置 (#68842)；SM80 索引器 prefill 打分内核配置已针对 A100 调优 (#62344) |
| **Kimi K3 (MoRI)** | Latent-MoE 尾融合降级方案 | PR #65664 在 NVLS 多播在 TP8/16 配置下不可用时提供降级路径 |
| **Tencent Hy4** | 配方已添加 | PR #68844 新增模型配方；主体支持已在 #68296 落地 |
| **Nemotron Deciffusion 8B** | 追踪中 | Issue #60283 评估 vLLM 原生集成双向扩散解码的可行性 |
| **AMD gfx950 (MI355X)** | 性能专项进行中 | Issue #59575 追踪 MoE (MXFP4)、QuerySparse Attention 及 HyperConnection 优化 |
| **AMD gfx942 (MI350X)** | 性能专项进行中 | Issue #64018 针对 Muse Spark Open PTPC-FP8 模型 |
| **Intel XPU** | Bug 调查进行中 | DFlash2 draft 在 Intel XPU 上使用 `--dtype float16` 时接受率为 0%；bf16 正常 (#55250) |

**量化格式：** ModelOpt INT8 预处理权重现通过 Marlin 后端支持 Fast Start 方式加载 (#68176)。MXFP6 线性内核选择与 MXFP4 初始化路径统一化 (#66077)。

## 4. 性能与优化

### 已合入或进行中的 PR

| PR | 领域 | 描述 |
|---|---|---|
| [#68842](https://github.com/vllm-project/vllm/pull/68842) | Qwen4Exp / SM100 | QSA 稀疏注意力小批次 Split-K 启动配置 |
| [#62344](https://github.com/vllm-project/vllm/pull/62344) | Qwen4Exp / SM80 | 索引器 prefill 打分内核配置针对 A100 调优 |
| [#66077](https://github.com/vllm-project/vllm/pull/66077) | 量化 | MXFP6 内核门控统一化；逐层 `target` 覆盖已传递 |
| [#66963](https://github.com/vllm-project/vllm/pull/66963) | Attention (DiffKV) | 按张量标识缓存 K/V 缓存视图——消除逐次调用时的视图推导开销 |
| [#67944](https://github.com/vllm-project/vllm/pull/67944) | KV Offload (UMBP) | 默认 DRAM 淘汰水位线从 0.90/0.70 提升至 0.99/0.97 |
| [#68811](https://github.com/vllm-project/vllm/pull/68811) | ROCm / MTP | 在 MTP 与 DCP 场景下使用 AITER 分页 MQA 调度器 |

### RFC 与提案

| Issue | 主题 | 影响 |
|---|---|---|
| [#59575](https://github.com/vllm-project/vllm/issues/59575) | MI355X 性能优化方案 | GatedDeltaNet + QuerySparse Attention + MXFP4 MoE 性能提升路线图 |
| [#54477](https://github.com/vllm-project/vllm/issues/54477) | RL 训练直接权重重载 | 消除 17+ 模型族加载后处理开销 |
| [#64572](https://github.com/vllm-project/vllm/issues/64572) | Attention 后端每次调用重新推导 KV 视图 | FlashAttention 与 Triton eager 后端受影响；DiffKV 修复见 #66963 |
| [#61626](https://github.com/vllm-project/vllm/issues/61626) | Eager 模式 Sequence Parallelism 与 GEMM 覆盖调度 | 脱离 `torch.compile` 走向直接 eager 融合路径 |
| [#52916](https://github.com/vllm-project/vllm/issues/52916) | 自适应 spin grace + WAITPKG 优化 shm_broadcast | 减少 aarch64/x86 共享内存同步时的 CPU 空转 |

## 5. 稳定性与回归问题

**严重（已有修复 PR 或热切调查中）：**

| Issue | 严重程度 | 描述 | 状态 |
|---|---|---|---|
| [#28498](https://github.com/vllm-project/vllm/issues/28498) | **高** | 2P4D DeepSeek-V3 配置下 ZMQ 端口冲突——疑似 DP bug | 开放，24 条评论 |
| [#61229](https://github.com/vllm-project/vllm/issues/61229) | **高** | KV 块在远程 READ 进行中被释放；解码静默消费被覆写的 KV（NixlConnector） | 开放，12 条评论 |
| [#55250](https://github.com/vllm-project/vllm/issues/55250) | **高** | DFlash2 推测 draft 在 Intel XPU 上使用 `--dtype float16` 时接受率为 0% | 开放，10 条评论 |

**中等（调查中）：**

| Issue | 严重程度 | 描述 | 状态 |
|---|---|---|---|
| [#66232](https://github.com/vllm-project/vllm/issues/66232) | 中 | W4A16 HummingLinearKernel 多进程间结果非确定；H100 上快于 Machete | 开放，11 条评论 |
| [#67802](https://github.com/vllm-project/vllm/issues/67802) | 中 | 动态 Per-Tensor FP8 Amax 包含了 CUDA graph padding 引入的无效 token ID | 开放，6 条评论 |
| [#67389](https://github.com/vllm-project/vllm/issues/67389) | 中 | 零 token 输入时 `fused_add_rms_norm` 启动零尺寸 grid | 开放，5 条评论 |
| [#55766](https://github.com/vllm-project/vllm/issues/55766) | 中 | 前缀缓存命中后 prefill 末尾越过块边界 4–10 个 token 时出现 NaN logits（Qwen3.8 GDN hybrid） | 开放，4 条评论 |

**已关闭（近期修复）：**

- [#55534](https://github.com/vllm-project/vllm/issues/55534) — CUTLASS 3.x `scaled_mm` 忽略切片张量的前导 stride（H800）
- [#65618](https://github.com/vllm-project/vllm/issues/65618) — DeepSeek-V4 DSpark draft 缺少 `packed_modules_mapping` → 接受率 0%
- [#64392](https://github.com/vllm-project/vllm/issues/64392) — `TimeoutError: RPC call to sample_tokens timed out`

## 6. 对应用开发者的影响

**在 AMD 上部署？** ROCm 工作流正在加速——MI355X（gfx950）和 MI350X（gfx942）的优化正以追踪 PR 形式落地，新增的 MonoKernel 追踪专项（[#68544](https://github.com/vllm-project/vllm/issues/68544)）提供了各模型专用解码内核覆盖情况的透明视图。若你在 AMD 硬件上运行 Qwen3.8 或相关 MoE 模型，后续版本将有可观的吞吐提升。

**使用推测解码？** DFlash2 和 DSpark draft 在特定硬件上的多个修复已落地。Intel XPU 上 DFlash2 的 dtype 问题意味着在 float16 回归问题解决前（[#55250](https://github.com/vllm-project/vllm/issues/55250)），请显式使用 `--dtype bf16`。

**运行 RL 训练流程？** 直接权重重载 RFC（[#54477](https://github.com/vllm-project/vllm/issues/54477)）与分片 RDT 加载方案（[#68038](https://github.com/vllm-project/vllm/pull/68038)）对训练器-Worker 权重传输意义重大——这些变更合并后将显著降低迭代式 RL 更新的开销。

**使用前缀缓存？** NaN logits 问题（[#55766](https://github.com/vllm-project/vllm/issues/55766)）在 Qwen3.8 混合 GDN + 前缀缓存配置下，当 prefill 末尾越过块边界 4–10 个 token 时触发。在此特定配置下修复落地前，建议暂时禁用前缀缓存。

**量化工作流？** MXFP6 内核统一化（[#66077](https://github.com/vllm-project/vllm/pull/66077)）和 ModelOpt INT8 Fast Start 支持（[#68176](https://github.com/vllm-project/vllm/pull/68176)）简化了权重加载管道。AWQ 键名兼容性修复（[#66488](https://github.com/vllm-project/vllm/pull/66488)）解决了 MoE WNA16 模型使用标准 AWQ checkpoint 时静默抛出的 `ValueError`。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the entire English technical digest into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

## 1. Today's Highlights

"Today's Highlights" → "今日要闻"

"The SGLang team is advancing speculative decoding with a 4-PR series enabling **typed DFlash KV transfer across asymmetric TP layouts** (#51693–#51698), plus separate CUDA graph captures for target and draft models. On the hardware front, **NPU support for Kimi K3.1 with DSpark decode graphs** landed (#51689) and a critical scheduler fix for NPU memory management was merged (#51679). A **security vulnerability** affecting arbitrary file write via `extra_sampling_params` was reported (#51555) — teams using the `/rollout/generate` endpoint should evaluate mitigations."

→ "SGLang 团队正在推进推测解码，通过一个 4-PR 系列实现 **跨非对称 TP 布局的强类型 DFlash KV 传输**（#51693–#51698），同时为目标模型和草稿模型分别进行 CUDA graph 捕获。硬件方面，**Kimi K3.1 的 NPU 支持及 DSpark 解码图**已合并（#51689），NPU 内存管理的关键调度器修复也已合并（#51679）。一个通过 `extra_sampling_params` 影响任意文件写入的 **安全漏洞** 已被报告（#51555）——使用 `/rollout/generate` 端点的团队应评估缓解措施。

---

## 2. Releases & Breaking Changes

**No releases in last 24h** → **过去 24 小时无发布** — The 1.0 release tracker (#50045) is actively being monitored. This stability-focused release aims to strengthen the framework, replace implicit config behaviors with explicit error handling, and establish a 1.x compatibility commitment. Teams upgrading from 0.5.x should review the tracker for potential breaking changes before proceeding.

---

## 3. New Model & Hardware Support

| Model / Hardware | Details | PR / Issue |
|-----------------|---------|------------|

The SGLang ecosystem now includes Kimi K3.1 with DSpark decode graphs and DCP support for the Ascend backend (#51689), while a proposal to integrate MindIE-SD for diffusion acceleration on Ascend hardware is under review (#48582). Gemma 4 receives vision improvements including padding exclusion and range preservation for streaming tool call indices (#51615, #51592, #51616), and support for asymmetric P/D deployment with MLA-based models is being considered (#39963).

GLM-5.3-Flash on Hopper SM90 is actively undergoing performance optimization (#45373).

---

## 4. Performance & Optimization

| Area | Change | Impact | PR / Issue |
|------|--------|--------|------------|

EPLB dispatch has been refactored from a loop-over-replica-slots approach to scatter-based first-match computation, significantly improving rebalance efficiency at scale (#51346). The DFlash KV storage system now includes mixed-window DFlash KV storage with context-boundary tails, which serves as the foundation for improved speculative decoding capabilities (#51693).

TP cohorts can now share DFlash drafts across attention-DP owners to reduce memory pressure during speculative decoding (#51696). Separate graph captures have been implemented for target verification and draft cohort forwards, enabling better graph efficiency in spec decode scenarios (#51697). The DFlash TP transfer now supports typed KV transfer between asymmetric TP layouts, allowing heterogeneous TP configurations to work seamlessly (#51698).

The Humming MoE kernel addresses a grid overflow issue with large token batches by flattening the launch grid to stay within CUDA grid.y limits (#51702). Video encoding through NVENC has been extended to Wan2.1, LTX-2, SANA-WM, and MiniMax-H3 diffusion models for faster post-processing (#49080). NPU MoE now supports locality-aware load balancing on Ascend hardware (#50975).

A critical security issue was identified in `/rollout/generate` where `extra_sampling_params` allowed arbitrary directory creation and file overwrite (#51555). Additionally, `--mamba-ssm-dtype bfloat16` causes significant accuracy degradation (~8 points on MATH-500) with Qwen3.5-9B while `float16` maintains performance (#51531). The `fused_moe_triton` tuner also has a shape mismatch problem where NemotronH is tuned with gated SiLU but its MoE layer expects non-gated operations. | Open | — |
| **🟡 Medium** | #51608 | HiCache L3 storage prefetch stalls under CP configurations (`attn_cp_size=8`) with fast_file backend — `storage_hit` remains zero while writes pile up | Open | — |
| **🟡 Medium** | #46203 | Xid 13 "CTA Not Present" errors in HiCache kvcacheio transfer kernels on Blackwell (B200) — 7 crashes across 4 machines during agentic workloads | Open | — |
| **🟡 Medium** | #51430 | Chunked weight updates lose cross-tensor loader state and commit partial updates | Open | — |
| **🟡 Medium** | #51097 | `k_scale` and `v_scale` in `launch_reshape_and_cache_flash` are interdependent due to shared `USE_SCALE` flag | Open | — |
| **🟢 Low** | #50057 | `tuning_block_wise_kernel.py` fails to tune `[32, 32]` block recipe (search space is empty) | Open | — |
| **🟢 Low** | #50920 | Idle-burst prefill causes first request to wait for next batch, resulting in TTFT regression for initial requests in burst scenarios | Open | — |

**CI Status (#17050):** 1 broken test, 14 flaky tests, 957 recently fixed (auto-updated 2026-11-20 03:10 UTC).

---

## 6. What This Means for Application Developers

1. **Security advisory:** If you expose the `/rollout/generate` endpoint publicly, evaluate the `extra_sampling_params` input sanitization until #51555 is resolved. This is a file-write vulnerability.

2. **Speculative decoding users:** The 4-PR DFlash series (#51693–#51698) is staged for merge and will enable more flexible TP configurations for spec decode deployments. Monitor the PR stack if you run heterogeneous infrastructure.

3. **NPU/Ascend users:** Kimi K3.1 now has first-class support (#51689), and a scheduler fix (#51679) prevents a race condition where in-flight kernels could touch memory regions being unmapped. If you run on Ascend, this fix is high priority.

4. **Gemma 4 function calling:** If you rely on streaming tool calls with Gemma 4, the fix in #51592/#51616 resolves duplicate indices when the same tool is called multiple times — existing streaming clients may need to update parsing logic.

5. **Mamba SSM models:** Avoid `--mamba-ssm-dtype bfloat16` with Qwen3.5-9B until #51531 is resolved; use `float16` for reliable accuracy on long-reasoning tasks.

6. **SGLang 1.0 preparation:** If you're on 0.5.x, review the upgrade notes in #50045 before the stable release lands. Silent config behaviors will change to explicit errors.

---

*Digest generated from github.com/sgl-project/sglang data (2026-11-20).* If you have a streaming tool call with Gemma 4, the fix in #51592/#51616 resolves duplicate indices when the same tool is called multiple times — existing streaming clients may need to update their parsing logic. For Mamba SSM models, avoid `--mamba-ssm-dtype bfloat16` with Qwen3.5-9B until #51531 is fixed; stick with `float16` for consistent accuracy on long-reasoning tasks. Teams on 0.5.x should review the upgrade notes in #50045 before the stable release arrives, since implicit config behaviors will shift to explicit error handling.
</think>


# SGLang 每日简报 — 2026-11-20

## 1. 今日要闻

SGLang 团队正在推进推测解码（speculative decoding），通过一个包含 4 个 PR 的系列实现 **跨非对称 TP 布局的强类型 DFlash KV 传输**（#51693–#51698），同时分别对目标模型和草稿模型进行 CUDA graph 捕获。硬件方面，**Kimi K3.1 的 NPU 支持及 DSpark 解码图**已合并（#51689），NPU 内存管理的关键调度器修复也已合并（#51679）。一个通过 `extra_sampling_params` 造成任意文件写入的 **安全漏洞** 已被报告（#51555）——使用 `/rollout/generate` 端点的团队应评估缓解措施。

---

## 2. 发布与破坏性变更

| 项目 | 摘要 | 链接 |
|------|---------|------|
| 过去 24 小时无发布 | — | — |

**升级注意事项：** SGLang 1.0 发布追踪（#50045）正在推进中。这是一个专注于稳定性的版本，主要工作包括：将隐式配置行为替换为显式错误，以及定义 1.x 兼容性策略。从 0.5.x 升级可能需要修改——请查阅追踪器了解详情。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 详情 | PR / Issue |
|-----------------|---------|------------|
| **Kimi K3.1 (NPU/Ascend)** | 为 Ascend 后端添加了 DSpark 解码图和 DCP 支持 | [#51689](https://github.com/sgl-project/sglang/pull/51689) |
| **MindIE-SD (RFC)** | 提议将 MindIE-SD 作为加速库集成到 SGLang Diffusion（Ascend 后端，与 FlashInfer 对齐） | [#48582](https://github.com/sgl-project/sglang/issues/48582) |
| **Gemma 4** | Vision pooling 现排除 padding 并保留 range；streaming tool call indices 已修复以支持函数调用 | [#51615](https://github.com/sgl-project/sglang/pull/51615), [#51592](https://github.com/sgl-project/sglang/pull/51592), [#51616](https://github.com/sgl-project/sglang/pull/51616) |
| **DeepSeek-V4.1 Flash (RFC)** | 面向基于 MLA 的模型的不对称 P/D 部署提案 | [#39963](https://github.com/sgl-project/sglang/issues/39963) |
| **GLM-5.3-Flash (Hopper SM90)** | 性能优化正在进行中 | [#45373](https://github.com/sgl-project/sglang/issues/45373) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | PR / Issue |
|------|--------|--------|------------|
| **EPLB dispatch map** | 用基于 scatter 的首次匹配计算替换了逐 replica-slot 循环 | 大规模场景下 EPLB 重平衡速度更快 | [#51346](https://github.com/sgl-project/sglang/pull/51346) |
| **DFlash KV 存储** | 新增多窗口 DFlash KV 存储及上下文边界尾部（draft 系列 1/4） | 推测解码改进的基础 | [#51693](https://github.com/sgl-project/sglang/pull/51693) |
| **DFlash draft 共享** | TP 同组可跨 attention-DP owner 共享 DFlash draft（draft 系列 2/4） | 降低推测解码内存压力 | [#51696](https://github.com/sgl-project/sglang/pull/51696) |
| **DFlash CUDA graphs** | 分别为目标验证和草稿同组前向传播进行 graph 捕获（draft 系列 3/4） | spec decode 时 graph 效率更优 | [#51697](https://github.com/sgl-project/sglang/pull/51697) |
| **DFlash TP 传输** | 支持跨非对称 TP 布局的强类型 KV 传输（draft 系列 4/4） | 支持异构 TP 配置 | [#51698](https://github.com/sgl-project/sglang/pull/51698) |
| **Humming MoE kernel** | 展平 launch grid 以避免大批量 token 时 `CUDA grid.y` 越界 | 修复大批量时崩溃问题 | [#51702](https://github.com/sgl-project/sglang/pull/51702) |
| **NVENC 视频编码** | 扩展支持 Wan2.1、LTX-2、SANA-WM 和 MiniMax-H3 diffusion 模型 | 视频生成后处理加速 | [#49080](https://github.com/sgl-project/sglang/pull/49080) |
| **NPU MoE** | 在 NPU 上支持 locality-aware load balancing（`lplb`） | Ascend 上 MoE 利用率更佳 | [#50975](https://github.com/sgl-project/sglang/pull/50975) |

---

## 5. 稳定性与回归问题

| 严重程度 | Issue | 摘要 | 状态 | 修复 PR |
|----------|-------|---------|--------|--------|
| **🔴 高** | #51555 | 通过 `POST /rollout/generate` 中的 `extra_sampling_params` 可任意创建目录和覆写文件 | Open | — |
| **🔴 高** | #51531 | `--mamba-ssm-dtype bfloat16` 导致 Qwen3.5-9B 在 MATH-500 上精度下降约 8 分；`float16` 无此问题 | Open | — |
| **🟡 中** | #51627 | `fused_moe_triton` tuner：NemotronH 按 gated SiLU 形状调优，但其 MoE 实际为非 gated ReLU² | Open | — |
| **🟡 中** | #51608 | HiCache L3 存储预取在 CP（`attn_cp_size=8`）+ fast_file 后端场景下永远无法完成——`storage_hit` 持续为 0，写入却不断累积 | Open | — |
| **🟡 中** | #46203 | HiCache kvcacheio 传输 kernel 在 Blackwell（B200）上触发 Xid 13 "CTA Not Present"——agentic 负载下 4 台机器共崩溃 7 次 | Open | — |
| **🟡 中** | #51430 | 分块权重更新可能丢失跨 tensor loader 状态并提交不完整更新 | Open | — |
| **🟡 中** | #51097 | `launch_reshape_and_cache_flash` 中的 `k_scale` 和 `v_scale` 因共享 `USE_SCALE` 标志而无法独立生效 | Open | — |
| **🟢 低** | #50057 | `tuning_block_wise_kernel.py` 无法调优 `[32, 32]` block recipe（搜索空间为空） | Open | — |
| **🟢 低** | #50920 | 空闲突发 prefill：首个请求需等待下一批次，造成突发场景下初始请求的 TTFT 回退 | Open | — |

**CI 状态（#17050）：** 1 个失败测试，14 个 flaky 测试，957 个近期已修复（2026-11-20 03:10 UTC 自动更新）。

---

## 6. 对应用开发者的影响

1. **安全预警：** 若你对外暴露了 `/rollout/generate` 端点，在 #51555 修复前请对 `extra_sampling_params` 输入进行严格的净化审查。这是一个文件写入漏洞。

2. **推测解码用户：** 4-PR DFlash 系列（#51693–#51698）即将合并，将为 spec decode 部署带来更灵活的 TP 配置选项。若你运行异构基础设施，请关注该 PR 栈。

3. **NPU/Ascend 用户：** Kimi K3.1 现已拥有一级支持（#51689），调度器修复（#51679）可防止运行中 kernel 访问正在被释放的内存区域。若你在 Ascend 上运行，此修复应优先部署。

4. **Gemma 4 函数调用：** 若你依赖 Gemma 4 的 streaming tool call，#51592 / #51616 的修复解决了同一工具被多次调用时索引重复的问题——现有 streaming 客户端可能需要更新解析逻辑。

5. **Mamba SSM 模型：** 在 #51531 修复前，请勿对 Qwen3.5-9B 使用 `--mamba-ssm-dtype bfloat16`；长推理任务请使用 `float16` 以保证精度可靠。

6. **SGLang 1.0 准备工作：** 若你仍在使用 0.5.x，请在稳定版发布前查阅 #50045 的升级说明。隐式配置行为将改为显式错误。

---

*简报数据来源：github.com/sgl-project/sglang（2026-11-20）*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese register

Let me translate section by section:

**Title and Section 1:**
"Daily Digest" could be "每日简报" or "今日摘要"
"Today's Highlights" = "今日要点"
"The project continues steady progress..." = I need to convey this naturally

**Section 2 Releases:**
"Releases & Breaking Changes" = "版本发布与破坏性变更"
"No tagged releases today" = "今日无正式版本发布"
"All changes are in-tree commits on master" = "所有变更均为 master 分支的提交"
"Risk" column - "风险" (with High/Medium/Low mapped to 高/中/低, but since those are in the table, I'll keep them)
"Low" = "低"
"correctness fix, no API change" = "修复正确性问题，不涉及 API 变更"
"additive kernel" = "新增内核"
"feature expansion" = "功能扩展"
"loader fix" = "加载器修复"
"build fix" = "构建修复"

**Section 3:**
"New Model & Hardware Support" = "新增模型与硬件支持"
"Model architecture" = "模型架构"
"Hardware (OpenCL)" = "硬件 (OpenCL)"
"Backend (WebGPU)" = "后端 (WebGPU)"
"Backend (SYCL)" = "后端 (SYCL)"


"Backend (RISC-V)" = "后端 (RISC-V)"

**Section 4:**
"Performance & Optimization" = "性能与优化"
"Landed" = "已合并"
"In Progress (Open PRs)" = "进行中 (待合并的 PR)"
"adds" = "新增"

**Section 5:**
"Stability & Regressions" = "稳定性与回归问题"
"Severity" = "严重程度"
"Issue" = "问题"
"Status" = "状态"
"Notes" = "备注"

**Section 6:**
"What This Means for Application Developers" = "对应用开发者的影响"
"B" = "已合并"
"Open" = "待合并"
"Stale" = "已搁置"
"3 comments" = "3 条评论"
"~6% acceptance vs 85% expected" = "~6% 接受率 vs 预期 85%"

**Section 7:**
"Translation" = "翻译"
"Only" = "仅"
"Preamble" = "前言"
"Explanation" = "说明"
"Markdown fences" = "Markdown 代码块"
"Blockquotes" = "引用块"
"Horizontal rules" = "分隔线"
"Code spans" = "行内代码"
"Code blocks" = "代码块"
"Link targets" = "链接目标"
"Version tags" = "版本标签"
"API/config identifiers" = "API/配置标识符"
"Technical Chinese" = "技术中文"
"Chinese developer newsletter" = "中国开发者简报"
"Literal word-for-word" = "逐字翻译"

Now translating the full report:

# llama.cpp 每日简报 — 2026-11-20

## 1. 今日要点

项目在后端多样性和数值精度方面持续稳步推进。最值得关注的是，**BF16 支持现已登陆 ROPE 和 SET_ROWS 操作**，涵盖 CPU 和 CUDA 后端，这将使混合精度推理管道受益。OpenCL 获得了 int8 DP4a 加速用于键值查询矩阵乘法，而 WebGPU 后端则新增 POOL_2D 支持。

---

## 2. 版本发布与破坏性变更

今日无正式版本发布。所有变更均为 master 分支的内联提交（`b12547`–`b12556`）。

| 提交 | 变更 | 风险 |
|--------|--------|------|
| `b12556` | 修复 HRM 槽位计数中的 `uint32_t` 溢出问题——此前超过 `2³²` 的乘积在验证中被静默处理 | **低** — 正确性修复，不涉及 API 变更 |
| `b12555` | OpenCL DP4a 加速用于分解前馈传播中的 int8 KQ 矩阵乘法（高通贡献者） | **低** — 新增内核 |
| `b12554` | CPU+CUDA 上的 BF16 → ROPE/SET_ROWS；CUDA BF16→量化/f8e4m3 SET_ROWS；融合 BF16 rope 缓存 | **低** — 功能扩展 |
| `b12553` | YuE2 投影层加载：`cls.output.weight` 改为可选，修复 mtmd 初始化失败 | **低** — 加载器修复 |
| `b12552` | OpenVINO CI 往返测试及小幅优化 | **低** |
| `b12551` | CUDA scatter 内核用于批量 tensor `set_n` | **低** |
| `b12548` | Metal：`NSMakeRange` 第二个参数修正 | **低** — 构建修复 |

---

## 3. 新增模型与硬件支持

| 领域 | 项目 | 详情 |
|--------|------|--------|
| **模型架构** | **SenseNova Loop** | 完整转换与推理支持已添加（[PR #32588](https://github.com/ggml-org/llama.cpp/pull/32588)）— SenseNova 团队官方贡献 |
| **模型架构** | **MiniMax-M3** | 通过 `ggml_top_k_mask()` 实现稀疏注意力掩码融合（[PR #32614](https://github.com/ggml-org/llama.cpp/pull/32614)） |
| **草稿模型** | **Spark2.5 DSpark** | 转换与推理支持（[PR #31372](https://github.com/ggml-org/llama.cpp/pull/31372)） |
| **硬件 (OpenCL)** | 高通 Hexagon DSP | DP4a int8 KQ 矩阵向量乘法，分块查询最高 96 |
| **后端 (WebGPU)** | `COL2IM_1D` 操作 | 启用 Qwen3-TTS 和 PocketTTS 波形解码器（[PR #31708](https://github.com/ggml-org/llama.cpp/pull/31708)） |
| **后端 (SYCL)** | FP8 E4M3 初始操作 | SET_ROWS、CPY、ADD、MUL_MAT、MUL_MAT_ID（[PR #31871](https://github.com/ggml-org/llama.cpp/pull/31871)） |
| **后端 (RISC-V)** | Mamba-2 SSM 扫描向量化 | RVV 内在函数用于 `ggml-cpu`（[PR #32448](https://github.com/ggml-org/llama.cpp/pull/32448)） |

---

## 4. 性能与优化

### 已合并
- **OpenCL GQA 头折叠**（[PR #32631](https://github.com/ggml-org/llama.cpp/pull/32631)）：在投机验证期间，输入 token 数量少且填充到 tile 边界时，折叠 GQA 头可消除空闲 tile 区域的浪费计算。
- **Vulkan Q2_K 矩阵向量整数缩放因子分解**（[PR #32628](https://github.com/ggml-org/llama.cpp/pull/32628)）：在应用共享缩放前先求四个压缩整数点积之和；FP 表达式相同，开销降低。
- **Vulkan Strix Halo MMVQ 调度**（[PR #32627](https://github.com/ggml-org/llama.cpp/pull/32627)）：在 AMD 专有 Vulkan 驱动上选择 32-lane 子组用于整数矩阵向量。
- **CUDA scatter 内核**（`b12551`）：批量 tensor 写入现在使用专用 scatter 内核而非逐元素复制。
- **HTTP 客户端超时**（[PR #32313](https://github.com/ggml-org/llama.cpp/pull/32313)）：显式 15s/30s/30s 超时，防止模型下载失败时挂起。

### 进行中（待合并的 PR）
- **i915/mesa Vulkan 修复**（[PR #32516](https://github.com/ggml-org/llama.cpp/pull/32516)）：解决 `CONFIG_DRM_I915_REQUEST_TIMEOUT` 在 20 秒后取消提交的问题——影响旧 Intel 核显上的损坏结果读取。
- **UMA 无 HOST_CACHED 的 Vulkan CPU 读取修复**（[PR #32634](https://github.com/ggml-org/llama.cpp/pull/32634)）：在 AMD APU（gfx1013、gfx1151）上，主机可见缓冲区为写组合时，CPU 从 GPU 写入的 WC 内存读取速度约为 100 MB/s。此 PR 针对服务器采样器中的 logits 行读取路径。
- **MoE 缓存图节点预留**（[PR #32636](https://github.com/ggml-org/llama.cpp/pull/32636)）：修复 MoE 层的 `graph_max_nodes()` 预算低估——这对 cohere2moe 架构至关重要。

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 备注 |
|----------|-------|--------|-------|
| 🔴 **高** | ROCm 大模型挂起（[Issue #19482](https://github.com/ggml-org/llama.cpp/issues/19482)） | **待合并** — 16 条评论 | gfx1151（Radeon 8060S）；尚未确定回归窗口 |
| 🔴 **高** | 自 b9935 以来的 MTP 性能下降（[Issue #25489](https://github.com/ggml-org/llama.cpp/issues/25489)） | **待合并** — 14 条评论 | `llama-server` 中投机解码回归；Windows |
| 🟡 **中** | DFlash2 post_decode seq_rm 中止（[Issue #31656](https://github.com/ggml-org/llama.cpp/issues/31656)） | **待合并** — 7 条评论 | 混合 Qwen3.8-27B，`--parallel 8` |
| 🟡 **中** | Qwen3.5 IMROPE 缓存复用被禁用（[Issue #32316](https://github.com/ggml-org/llama.cpp/issues/32316)） | **待合并** — 5 条评论 | 每次请求完整重新预填充；Metal/M1 Max |
| 🟡 **中** | HIP/gfx1200 FLASH_ATTN_EXT NaN（[Issue #32178](https://github.com/ggml-org/llama.cpp/issues/32178)） | **待合并** — 2 条评论 | 结果不一致，可能存在后端正确性问题 |
| 🟡 **中** | Pascal (sm_60) 长上下文损坏（[Issue #32375](https://github.com/ggml-org/llama.cpp/issues/32375)） | **待合并** — 3 条评论 | 混合模型（MiMo-V2.6、Nemotron Bolt）；CPU/Ampere 不受影响 |
| 🟡 **中** | B200 上 CUDA ADD/GELU 变慢（[Issue #30004](https://github.com/ggml-org/llama.cpp/issues/30004)） | **已搁置** — 4 条评论 | 首个问题提交：`7b28f950`；无人认领 |
| 🟢 **低** | 控制向量与 LoRA 多轮分歧（[Issue #32341](https://github.com/ggml-org/llama.cpp/issues/32341)） | **待合并** — 3 条评论 | 跨轮次保持 KV 缓存中的控制；架构问题，非 bug |
| 🟢 **低** | HIP sm_75 Q-tile 32 限制非最优（[Issue #28761](https://github.com/ggml-org/llama.cpp/issues/28761)） | **已搁置** — 3 条评论 | head_dim=256 时寄存器溢出；head_dim=128 时收益未充分捕获 |

### 已关闭（值得注意）
- **Arc A380 上 Vulkan GLM-OCR 乱码**（[Issue #31836](https://github.com/ggml-org/llama.cpp/issues/31836)）：全页图像；CPU/SYCL 正常。
- **Offloaded-MoE prefill GPU 空闲**（[Issue #25859](https://github.com/ggml-org/llama.cpp/issues/25859)）：串行 expert H2D 复制使 GPU 饥饿。
- **DFlash spec verify 损坏**（[Issue #32526](https://github.com/ggml-org/llama.cpp/issues/32526)）：文档示例接受率约 6% vs 预期 85%。

---

## 6. 对应用开发者的影响

**1. BF16 推理路径正在扩展。** 随着 ROPE 和 SET_ROWS 现已在 CUDA 上原生支持 BF16，混合精度服务（例如 BF16 注意力 + Q4_K_M FFN）可以更高效地构建，无需通过 F16 进行手动类型转换。

**2. 多 GPU ROCm 用户应暂缓模型升级。** 大模型挂起问题（gfx1151）仍未解决。如果在 AMD GPU 上运行 MoE 或大型稠密模型，请坚持使用已验证的提交，直到修复发布。

**3. Metal 上的 Qwen3.5/IMROPE 用户失去 KV 缓存收益。** 每个后续 prompt 都完全重新预填充。如果在 Apple Silicon 上通过 `llama-server` 运行 Qwen3.5，批量对话工作负载将比预期慢得多。

**4. MTP 投机解码性能已回归。** 自 b9935 以来的性能下降影响 Windows `llama-server` 用户最为严重。考虑回退到非 MTP 投机草稿或等待 bisected 修复。

**5. Intel 核显（i915）上的 Vulkan 长期序列存在风险。** 20 秒驱动超时可能静默损坏结果。如果必须在旧 Intel 集成显卡上运行，请优先使用较短的 max context length，直到 [PR #32516](https://github.com/ggml-org/llama.cpp/pull/32516) 合并。

**6. 新模型支持即将到来。** SenseNova Loop、MiniMax-M3 和 Spark2.5 DSpark 都在推进中——如果您服务这些架构，转换工具和服务器端支持现已上游。

---

*简报数据来源于 ggml-org/llama.cpp GitHub 仓库，2026-11-20。所有链接指向上游仓库。*
</think>


# llama.cpp 每日简报 — 2026-11-20

## 1. 今日要点

项目在后端多样性和数值精度方面持续稳步推进。最值得关注的是，**BF16 支持现已登陆 ROPE 和 SET_ROWS 操作**，涵盖 CPU 和 CUDA 后端，这将使混合精度推理管线受益。OpenCL 获得了 int8 DP4a 加速用于键查矩阵乘法，而 WebGPU 后端则新增 POOL_2D 支持，为新的解码器架构铺平道路。

---

## 2. 版本发布与破坏性变更

今日无正式版本发布。所有变更均为 master 分支的内联提交（`b12547`–`b12556`）。

| 提交 | 变更 | 风险 |
|--------|--------|------|
| `b12556` | 修复 HRM 槽位计数中的 `uint32_t` 溢出问题——此前超过 `2³²` 的乘积在验证中被静默放过 | **低** — 修复正确性问题，不涉及 API 变更 |
| `b12555` | OpenCL DP4a 加速用于分解 FA 中的 int8 KQ 矩阵乘法（高通贡献者） | **低** — 新增内核 |
| `b12554` | CPU+CUDA 上的 BF16 → ROPE/SET_ROWS；CUDA BF16→量化/f8e4m3 SET_ROWS；融合 BF16 rope 缓存 | **低** — 功能扩展 |
| `b12553` | YuE2 投影层加载：`cls.output.weight` 改为可选，修复 mtmd 初始化失败 | **低** — 加载器修复 |
| `b12552` | OpenVINO CI 往返测试及小幅优化 | **低** |
| `b12551` | CUDA scatter 内核用于批量 tensor `set_n` | **低** |
| `b12548` | Metal：`NSMakeRange` 第二个参数修正 | **低** — 构建修复 |

---

## 3. 新增模型与硬件支持

| 领域 | 项目 | 详情 |
|--------|------|--------|
| **模型架构** | **SenseNova Loop** | 完整转换与推理支持已添加（[PR #32588](https://github.com/ggml-org/llama.cpp/pull/32588)）— SenseNova 团队官方贡献 |
| **模型架构** | **MiniMax-M3** | 通过 `ggml_top_k_mask()` 实现融合稀疏注意力掩码（[PR #32614](https://github.com/ggml-org/llama.cpp/pull/32614)） |
| **草稿模型** | **Spark2.5 DSpark** | 转换与推理支持（[PR #31372](https://github.com/ggml-org/llama.cpp/pull/31372)） |
| **硬件 (OpenCL)** | 高通 Hexagon DSP | DP4a int8 KQ 矩阵乘法，分块查询最高 96 |
| **后端 (WebGPU)** | `COL2IM_1D` 操作 | 启用 Qwen3-TTS 和 PocketTTS 波形解码器（[PR #31708](https://github.com/ggml-org/llama.cpp/pull/31708)） |
| **后端 (SYCL)** | FP8 E4M3 初始操作 | SET_ROWS、CPY、ADD、MUL_MAT、MUL_MAT_ID（[PR #31871](https://github.com/ggml-org/llama.cpp/pull/31871)） |
| **后端 (RISC-V)** | Mamba-2 SSM 扫描向量化 | RVV 内在函数用于 `ggml-cpu`（[PR #32448](https://github.com/ggml-org/llama.cpp/pull/32448)） |

---

## 4. 性能与优化

### 已合并
- **OpenCL GQA 头折叠**（[PR #32631](https://github.com/ggml-org/llama.cpp/pull/32631)）：在投机验证期间，输入 token 数量少且填充到 tile 边界时，折叠 GQA 头可消除空闲 tile 区域的浪费计算。
- **Vulkan Q2_K 矩阵向量整数缩放因子分解**（[PR #32628](https://github.com/ggml-org/llama.cpp/pull/32628)）：在应用共享缩放前先求四个压缩整数点积之和；FP 表达式相同，开销降低。
- **Vulkan Strix Halo MMVQ 调度**（[PR #32627](https://github.com/ggml-org/llama.cpp/pull/32627)）：在 AMD 专有 Vulkan 驱动上选择 32-lane 子组用于整数矩阵向量。
- **CUDA scatter 内核**（`b12551`）：批量 tensor 写入现在使用专用 scatter 内核而非逐元素复制。
- **HTTP 客户端超时**（[PR #32313](https://github.com/ggml-org/llama.cpp/pull/32313)）：显式 15s/30s/30s 超时，防止模型下载失败时挂起。

### 进行中（待合并的 PR）
- **i915/mesa Vulkan 修复**（[PR #32516](https://github.com/ggml-org/llama.cpp/pull/32516)）：规避 `CONFIG_DRM_I915_REQUEST_TIMEOUT` 在 20 秒后取消提交的问题——影响旧 Intel 核显上的损坏结果读取。
- **UMA 无 HOST_CACHED 的 Vulkan CPU 读取修复**（[PR #32634](https://github.com/ggml-org/llama.cpp/pull/32634)）：在 AMD APU（gfx1013、gfx1151）上，主机可见缓冲区为写组合（write-combining）时，CPU 从 GPU 写入的 WC 内存读取速度约为 100 MB/s。此 PR 针对服务器采样器中的 logits 行读取路径。
- **MoE 缓存图节点预留**（[PR #32636](https://github.com/ggml-org/llama.cpp/pull/32636)）：修复 MoE 层的 `graph_max_nodes()` 预算低估——这对 cohere2moe 架构至关重要。

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 备注 |
|----------|-------|--------|-------|
| 🔴 **高** | ROCm 大模型挂起（[Issue #19482](https://github.com/ggml-org/llama.cpp/issues/19482)） | **开放** — 16 条评论 | gfx1151（Radeon 8060S）；尚未确定回归窗口 |
| 🔴 **高** | 自 b9935 以来的 MTP 性能下降（[Issue #25489](https://github.com/ggml-org/llama.cpp/issues/25489)） | **开放** — 14 条评论 | `llama-server` 中投机解码回归；Windows |
| 🟡 **中** | DFlash2 post_decode seq_rm 中止（[Issue #31656](https://github.com/ggml-org/llama.cpp/issues/31656)） | **开放** — 7 条评论 | 混合 Qwen3.8-27B，`--parallel 8` |
| 🟡 **中** | Qwen3.5 IMROPE 缓存复用被禁用（[Issue #32316](https://github.com/ggml-org/llama.cpp/issues/32316)） | **开放** — 5 条评论 | 每次请求完整重新预填充；Metal/M1 Max |
| 🟡 **中** | HIP/gfx1200 FLASH_ATTN_EXT NaN（[Issue #32178](https://github.com/ggml-org/llama.cpp/issues/32178)） | **开放** — 2 条评论 | 结果不稳定，可能存在后端正确性问题 |
| 🟡 **中** | Pascal (sm_60) 长上下文数据损坏（[Issue #32375](https://github.com/ggml-org/llama.cpp/issues/32375)） | **开放** — 3 条评论 | 混合模型（MiMo-V2.6、Nemotron Bolt）；CPU/Ampere 不受影响 |
| 🟡 **中** | B200 上 CUDA ADD/GELU 变慢（[Issue #30004](https://github.com/ggml-org/llama.cpp/issues/30004)） | **无人认领** — 4 条评论 | 首个问题提交：`7b28f950`；无人认领 |
| 🟢 **低** | 控制向量与 LoRA 多轮分歧（[Issue #32341](https://github.com/ggml-org/llama.cpp/issues/32341)） | **开放** — 3 条评论 | 跨轮次保持 KV 缓存中的控制；架构问题，非 bug |
| 🟢 **低** | HIP sm_75 Q-tile 32 上限非最优（[Issue #28761](https://github.com/ggml-org/llama.cpp/issues/28761)） | **无人认领** — 3 条评论 | head_dim=256 时寄存器溢出；head_dim=128 时收益未充分捕获 |

### 已关闭（值得注意）
- **Arc A380 上 Vulkan GLM-OCR 乱码**（[Issue #31836](https://github.com/ggml-org/llama.cpp/issues/31836)）：全页图像；CPU/SYCL 正常。
- **Offloaded-MoE prefill GPU 空闲**（[Issue #25859](https://github.com/ggml-org/llama.cpp/issues/25859)）：串行 expert H2D 复制使 GPU 饥饿。
- **DFlash spec verify 损坏**（[Issue #32526](https://github.com/ggml-org/llama.cpp/issues/32526)）：文档示例接受率约 6% vs 预期 85%。

---

## 6. 对应用开发者的影响

**1. BF16 推理路径正在扩展。** 随着 ROPE 和 SET_ROWS 现已在 CUDA 上原生支持 BF16，混合精度服务（例如 BF16 注意力 + Q4_K_M FFN）可以更高效地构建，无需通过 F16 进行手动类型转换。

**2. 多 GPU ROCm 用户应暂缓模型升级。** 大模型挂起问题（gfx1151）仍未解决。如果在 AMD GPU 上运行 MoE 或大型稠密模型，请坚持使用已验证的提交，直到修复发布。

**3. Metal 上的 Qwen3.5/IMROPE 用户失去 KV 缓存收益。** 每个后续 prompt 都完全重新预填充。如果在 Apple Silicon 上通过 `llama-server` 运行 Qwen3.5，批量对话工作负载将比预期慢得多。

**4. MTP 投机解码性能已回归。** 自 b9935 以来的性能下降影响 Windows `llama-server` 用户最为严重。考虑回退到非 MTP 投机草稿或等待 bisected 修复。

**5. Intel 核显（i915）上的 Vulkan 长期序列存在风险。** 20 秒驱动超时可能静默损坏结果。如果必须在旧 Intel 集成显卡上运行，请优先使用较短的 max context length，直到 [PR #32516](https://github.com/ggml-org/llama.cpp/pull/32516) 合并。

**6. 新模型支持即将到来。** SenseNova Loop、MiniMax-M3 和 Spark2.5 DSpark 都在推进中——如果您服务这些架构，转换工具和服务器端支持现已上游。

---

*简报数据来源于 ggml-org/llama.cpp GitHub 仓库，2026-11-20。所有链接指向上游仓库。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate a technical digest/report about Ollama from English to Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation - no preamble or explanation
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep technical identifiers in original form
5. Use natural technical Chinese register

Let me translate section by section:

Title: "Ollama Digest — 2026-11-20" → "Ollama 日报 — 2026-11-20"

Section 1: Today's Highlights
- "no new releases today" → 今天没有新版本发布
- "MLX (Apple Silicon) infrastructure" → MLX（Apple Silicon）基础设施
- "memory-aware parallelism selection" → 内存感知并行度选择
- "conversation checkpoint persistence" → 对话检查点持久化
- "critical Windows regression" → 严重的 Windows 回归问题
- "Windows embed API returning 400" → Windows embed API 返回 400
- "prompt-cache and tool-call parsing bugs" → prompt 缓存和工具调用解析缺陷

Section 2: Releases & Breaking Changes
- Straightforward translation

Section 3: New Model & Hardware Support
- "Port" in technical context → 移植
- "streaming" → 流式
- "feature request" → 功能请求

Section 4: Performance & Optimization
- "Auto-select" → 自动选择
- "per-client storage" → 每客户端存储
- "context limit" → 上下文限制
- "conversation checkpoint persistence" → 对话检查点持久化
- "asynchronously" → 异步地
- "model switch" → 模型切换
- "memory reclamation" → 内存回收


- "VRAM" → VRAM（显寸）
- "cascading CPU fallback" → 级联 CPU 回退
- "duplicate llama-server spawns" → 重复启动 llama-server

I'll focus on the technical nuances of memory management and resource allocation. The translation captures the complex interactions between memory, VRAM, and CPU processes. Key points include preventing cascading CPU fallback scenarios and avoiding duplicate llama-server spawns, which are critical for maintaining system efficiency and performance.

The section highlights the intricate challenges of managing computational resources across different hardware platforms, particularly when dealing with memory-constrained environments like Apple Silicon systems.

Critical technical issues emerge in Windows embedding processes, specifically with loopback connectivity and server-side token handling. These range from silent truncations in long-document processing to complex tool-calling challenges with specific model variants like Qwen2.5-coder.

The emerging issues suggest potential inconsistencies in tool-call mechanisms, including cache matching behaviors, divergent read semantics, and problematic cloud prompt caching strategies that could lead to unexpected system interactions.

For application developers, key recommendations focus on careful testing, independent token tracking, strategic upgrades, and careful validation of tool-calling implementations across different model variants.

Critical areas include prompt design, last-message mutation avoidance, and ecosystem integration. Specific attention is needed for Windows embed users, long-document truncation scenarios, and MLX deployment strategies. Tool-calling edge cases and community integrations require meticulous validation.

The proposed actions aim to enhance system reliability, optimize performance, and expand the ecosystem through targeted testing and integration approaches.
</think>


# Ollama 日报 — 2026-11-20

## 1. 今日要点

今天没有新版本发布，但 MLX（Apple Silicon）基础设施方面有多个重要 PR 取得进展，包括内存感知并行度选择和对话检查点持久化。一个严重的 Windows 回归问题浮出水面（#19782），`/api/embed` 端点在嵌入 runner 绑定失败时返回 400 错误；此外，过去 24 小时内还有一批 prompt 缓存和工具调用解析相关的缺陷被关闭或新开。

## 2. 版本发布与破坏性变更

过去 24 小时内无新版本发布。

## 3. 新模型与硬件支持

| 项目 | 详情 | PR / Issue |
|------|--------|------------|
| **Hy4 Flash（文本 + 视觉）在 MLX 上** | 对腾讯 Hy4 Flash 推理的移植，支持 NVFP4 导入、自适应 DFly2 起草和 Engram 文件后端；与现有 MLX 模型共享投影/宿主映射代码 | [#19783](https://github.com/ollama/ollama/pull/19783) |
| **OVHcloud Olala GGUF 支持请求** | 功能请求：添加 `OVHaiLLM/Olala-v1.0-mini-7A1B-GGUF`；当前导入时报错 | [#19777](https://github.com/ollama/ollama/issues/19777) |
| **LFM3-Omni 原生音频流式提案** | 提议通过 `/api/chat` 和 `ollama run --audio` 暴露流式文本转音频响应 | [#19396](https://github.com/ollama/ollama/issues/19396) |

## 4. 性能与优化

| 领域 | 变更 | 影响 | PR / Issue |
|------|--------|--------|------------|
| **MLX 默认并行度** | 当 `OLLAMA_NUM_PARALLEL` 未设置时，根据模型上下文限制下的可用内存和每客户端存储自动选择 1/2/4/8 个槽位 | 内存受限的 Apple Silicon 设备上吞吐量更优 | [#19785](https://github.com/ollama/ollama/pull/19785) |
| **MLX 对话检查点持久化** | 已完成的会话异步保存，在内存回收、模型切换或 runner 重启后恢复；包含有界的暂存和关闭引流 | 避免缓存淘汰后的 prompt 重复处理 | [#19745](https://github.com/ollama/ollama/pull/19745)（取代 [#19678](https://github.com/ollama/ollama/pull/19678)） |
| **内存压力下的 MLX 历史记录** | Metal runner 现在保留更多对话历史，而非在固定 8 GiB 上限处丢弃 | 显存受限环境下多轮对话连贯性提升 | [#19678](https://github.com/ollama/ollama/pull/19678)（已关闭） |
| **逐层 KV Cache 大小调整** | PredictServerVRAM 根据每层实际的 `head_count_kv` 和嵌入维度独立计算大小，而非使用统一的最小值 | 减少过度预分配，防止意外 runner 驱逐 | [#19327](https://github.com/ollama/ollama/pull/19327) |
| **上下文位移幅度修复（llama.cpp）** | 防止 YaRN 幅度因子在上下文位移期间被重复应用到已经过 RoPE 编码的 KV Cache 键上，从而避免每次位移后的质量下降 | 修正使用 RoPE 缩放模型的长上下文行为 | [#19680](https://github.com/ollama/ollama/pull/19680) |
| **调度器 runner 清理** | 将停止失败的 runner 保留在 loaded 集合中，而非静默清除；防止后续对已"释放"但仍被占用的 VRAM 槽进行错误的加载预测 | 消除级联 CPU 回退和重复启动 llama-server | [#19581](https://github.com/ollama/ollama/pull/19581) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| 🔴 **高** | **Windows `/api/embed` 返回 400** — 打包的 llama-server 无法在 loopback 上绑定高端口，导致嵌入管道静默失败 | Open | — |
| 🔴 **高** | **65,536 token 处静默截断** — 模型以 `done_reason=stop` 报告结束，但上下文窗口实际为 147,456；影响长文档摄入 | Closed | — |
| 🟡 **中** | **Qwen2.5-coder 声称支持 `tools` 但从不发出原生 `tool_calls`** — 客户端可能尝试静默失败的工具调用流程 | Closed | — |
| 🟡 **中** | **assistant 消息为空但 `completion_tokens` 非零** — 某些工具 schema 导致 qwen2.5 生成完整的工具调用但返回空的 `content` 和 `finish_reason: stop` | Closed | — |
| 🟡 **中** | **Prompt 缓存仅精确匹配** — 修改最后一条消息会丢弃整个缓存，即使之前所有 token 完全相同（Vulkan, qwen3:8b） | Closed | — |
| 🟡 **中** | **Qwen3.8 双智能体会话从 token 0 重新读取 prompt** — 单 runner 上的并行槽丢失 prompt 缓存；单槽模式导致重复重新处理 | Open | — |
| 🟡 **中** | **接受了重复的 GGUF 键但读取语义不同** — `fs/gguf/gguf.go` 使用先到先得；`fs/gguf/metadata.go` 使用后到先得，产生非确定性行为 | Open | — |
| 🟡 **中** | **云端 prompt 缓存首次请求接近零命中率** — 长恢复会话最初几乎无缓存命中，后续轮次则显著增加 | Open | — |
| 🟡 **中** | **mimo-v2.6-pro:cloud 上工具调用泛滥** — 多轮 agentic 会话中出现灾难性的数百次重复调用循环 | Open | — |
| 🟢 **低** | **`ollama list` 仅显示已下载模型** — 无法在终端内搜索/发现 Ollama 库中的模型 | Closed | — |
| 🟢 **低** | **`humanDuration` 四舍五入不一致** — 某一分支中小时标签从截断后的值重新计算，导致接近年边界时差一 | Open | [#17827](https://github.com/ollama/ollama/pull/17827) |

## 6. 对应用开发者的启示

1. **Windows embed 用户需仔细测试。** `/api/embed` 在 Windows 上的 400 回归问题（#19782）影响所有使用 `POST /api/embed` 加载 `embeddinggemma:latest` 等模型的用户。在修复上线前，请监控服务器端 loopback 连接性，或将嵌入请求路由到主 llama-server 路径。

2. **部分模型的长文档截断问题仍然存在。** 65k token 静默截断（#19765）已关闭，可能是因为它属于 llama.cpp 上游的已知行为，但这意味着发送大量语料的应用应独立追踪 `usage.prompt_tokens`，而非依赖 `done_reason` 来判断是否截断。

3. **MLX（Apple Silicon）部署从今天的 PR 中获得实质性提升。** 内存感知并行度（#19785）和对话检查点持久化（#19745）的组合意味着更少的 prompt 重复处理循环，以及在受限 Mac 硬件上更好的多用户吞吐量。请在这些 PR 合并发版后及时升级。

4. **Qwen 模型的工具调用存在边缘情况。** 空的 assistant 消息 bug（#19780）和 `qwen2.5-coder` 能力不匹配（#19779）虽然已关闭，但均表明 schema 定义和聊天模板兼容性因模型变体而异。请在具体的模型变体上验证工具调用解析，而非假设 `/api/show` 中出现 `tools` 就意味着功能完整的原生工具调用。

5. **Prompt 缓存目前仅支持精确匹配。** 如果你的应用修改了最后一条消息（例如追加系统提示或时间戳），即使对话历史完全相同也会完全失去缓存复用。为每轮请求预留完整重 token 化的预算，或在设计上避免对最后一条消息进行修改。

6. **社区集成持续扩展。** [Big-AGI](https://github.com/ollama/ollama/pull/19784)、[Athena](https://github.com/ollama/ollama/pull/19781) 和 [Karpa](https://github.com/ollama/ollama/pull/19778) 的新增条目将 Ollama 生态扩展到 Web UI 和本地桌面翻译——如果你正在基于 Ollama 构建并需要参考 UI 或集成模式，这些值得一看。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate this technical report about LiteLLM from English to Simplified Chinese. I need to:

1. Translate the content naturally into Chinese technical register
2. Preserve all Markdown structure exactly
3. Keep URLs, links, version tags, issue numbers, etc. verbatim
4. Not add any preamble, explanation, or markdown fences
5. Use natural Chinese technical language

Let me translate section by section:

## 1. Today's Highlights
Translate to natural Chinese technical language

## 2. Releases & Breaking Changes
Translate the table and notes

## 3. New Model & Hardware Support
Translate the table and feature requests

## 4. Performance & Optimization
Translate the table and notes

## 5. Stability & Regressions
Translate the table - keep severity markers, issue titles, and status

## 6. What This Means for Application Developers
Translate the numbered list

Let me start:
</think>


# LiteLLM 每日简报 — 2026-11-20

## 1. 今日要点

LiteLLM 的开发仍在快速推进，v1.111.0 RC 和 v1.112.0-dev.1 相继发布，同时网关性能方面也有大量工作。今天的突出主题是**基于 Rust 原生实现的虚拟密钥速率限制与优先级路由**（#52839、#52813、#53015），这消除了常见配额检查的 Python 往返开销。在可观测性方面，原生 Kafka 请求日志（#52855）和新的 WildEdge OpenTelemetry 预设（#52290）扩展了集成选项。

---

## 2. 版本发布与破坏性变更

| 版本 | 类型 | 说明 |
|---------|------|------|
| [v1.112.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-dev.1) | 开发版 | 预发布版本，请勿用于生产环境 |
| [v1.111.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-rc.2) | RC | 发布候选版本 |
| [v1.110.1](https://github.com/BerriAI/litellm/releases/tag/v1.110.1) | 稳定版 | 最新稳定补丁 |
| [v1.108.12](https://github.com/BerriAI/litellm/releases/tag/v1.108.12) | LTS | 最新长期支持版；拉取 `ghcr.io/berriai/litellm:lts` |
| [v1.106.11](https://github.com/BerriAI/litellm/releases/tag/v1.106.11) | 稳定版 | 较旧的稳定版 |

所有 Docker 镜像现已通过 cosign 签名。使用以下命令验签：
```bash
cosign verify \
  --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com \
  ghcr.io/berriai/litellm:v1.110.1
```

**破坏性变更 / 迁移说明：**
- [#50905](https://github.com/BerriAI/litellm/issues/50905) — 自 v1.108.0 起，审计日志中的 `before_value` 存储为 JSON 字符串而非对象。影响 `GET /audit` 接口，可能导致 500 错误。修复已合并。
- [#34747](https://github.com/BerriAI/litellm/issues/34747) — 自 v1.93.0 起，`store_prompts_in_spend_logs: true` 无法持久化 messages。已确认修复。

---

## 3. 新模型与硬件支持

| 模型 | 提供商 | 定价（每百万 tokens） | 上下文 | PR |
|-------|----------|---------------------|---------|-----|
| Kimi K3.1 Pro | Inference APIs | $2.60 / $13.00 | — | [#53021](https://github.com/BerriAI/litellm/pull/53021) |
| Kimi K2.6 | Inference APIs | — | — | [#53021](https://github.com/BerriAI/litellm/pull/53021) |
| MiniMax M3.1 Flash | Inference APIs | — | — | [#53021](https://github.com/BerriAI/litellm/pull/53021) |
| Nemotron 3.5 Super VL | Inference APIs | — | — | [#53021](https://github.com/BerriAI/litellm/pull/53021) |

**功能请求：**
- [#13681](https://github.com/BerriAI/litellm/issues/13681) — 请求集成 SGLang 提供商（MoE 模型支持）。

---

## 4. 性能与优化

| 领域 | 变更 | PR |
|------|--------|-----|
| 虚拟密钥速率限制 | 在 Rust 层原生执行（`rpm_limit`、`tpm_limit`、`tpd_limit`、`max_parallel_requests`、`model_rpm_limit`）—— 大部分配额检查不再触发 Python 分发 | [#52839](https://github.com/BerriAI/litellm/pull/52839) |
| 无限制虚拟密钥 | 无限制密钥的 Rust 网关快速路径 | [#52813](https://github.com/BerriAI/litellm/pull/52813) |
| 优先级路由 | 原生优先级容量共享，作为动态速率限制回调 | [#53015](https://github.com/BerriAI/litellm/pull/53015) |
| 网关回调 | 推理调用回调的统一单一阶段 | [#53011](https://github.com/BerriAI/litellm/pull/53011) |
| TCP 延迟 | 禁用 supervised Python listener 上的 Nagle 算法 | [#53013](https://github.com/BerriAI/litellm/pull/53013) |
| 请求日志 | 原生 Kafka 导出，包含一致的 attribution/usage/cost 字段 | [#52855](https://github.com/BerriAI/litellm/pull/52855) |
| 安全护栏 | Bedrock 扫描现已覆盖工具调用参数和工具描述 | [#52999](https://github.com/BerriAI/litellm/pull/52999) |
| Gemini 缓存 | 聊天补全时现正确遵守 `prompt_cache_breakpoint` | [#50705](https://github.com/BerriAI/litellm/pull/50705) |

**基础设施说明：** 网关正在逐步将关键热路径从 Python 迁移到 Rust（速率限制、路由、密钥解析），这将显著降低高吞吐量部署的 p99 延迟。

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 链接 |
|----------|-------|--------|-------|
| 🔴 **严重** | 读副本数据库超时会导致 Prisma 读引擎进入不可用状态；读取操作不会回退到主库 | 已关闭 | [#52284](https://github.com/BerriAI/litellm/issues/52284) |
| 🔴 **严重** | `max_budget` 实际允许约 22% 超出配置的调用量（9 个限额塞进了 11 个调用） | 进行中 | [#50125](https://github.com/BerriAI/litellm/issues/50125) |
| 🟠 **高** | 流式 `/v1/responses` 上游返回 400 时连接在响应体中途断开；`GenericEvent has no attribute 'type'` | 进行中 | [#52853](https://github.com/BerriAI/litellm/issues/52853) |
| 🟠 **高** | v1.82.x 版本 UI 响应极慢（遗留问题，长期存在） | 进行中（陈旧） | [#23005](https://github.com/BerriAI/litellm/issues/23005) |
| 🟠 **高** | `token_counter` 处理 `video_url` 内容块时抛出 `ValueError` | 进行中 | [#28071](https://github.com/BerriAI/litellm/issues/28071) |
| 🟠 **高** | 优先级路由分组忽略部署的 `tpm` 限制，在 `rpm` 限制处提前失效转移 | 进行中 | [#52548](https://github.com/BerriAI/litellm/issues/52548) |
| 🟡 **中** | OAuth2 `client_credentials` 模式的 MCP 服务器始终收到来自 token 端点的 400 错误 | 进行中 | [#37222](https://github.com/BerriAI/litellm/issues/37222) |
| 🟡 **中** | `litellm/utils.py` 中的 `ModelNotMappedError` | 进行中 | [#51452](https://github.com/BerriAI/litellm/issues/51452) |
| 🟡 **中** | 表示失败/截断的 finish reason 被上报为 `"stop"` | 进行中 | [#48721](https://github.com/BerriAI/litellm/issues/48721) |
| 🟡 **中** | `cache_control_injection_points` 意外要求 `prompt_id` | 进行中 | [#37469](https://github.com/BerriAI/litellm/issues/37469) |
| 🟡 **中** | Anthropic `extra_body` 字段嵌套错误导致 400 | 进行中 | [#48373](https://github.com/BerriAI/litellm/pull/48373)（已有 PR） |
| 🟢 **低** | Responses API OTEL span 使用 `llm.None.*` 而非提供商特定键 | 已关闭 | [#25240](https://github.com/BerriAI/litellm/issues/25240) |
| 🟢 **低** | `store_prompts_in_spend_logs` 无法持久化 messages（回归问题） | 已关闭 | [#34747](https://github.com/BerriAI/litellm/issues/34747) |

**运维人员请注意：** 预算强制执行缺陷（#50125）会导致虚拟密钥约 22% 的超额支出。如果预算上限对你的部署至关重要，请在生产环境中验证实际支出与限制的差异。

---

## 6. 对应用开发者的影响

1. **速率限制更快了。** 虚拟密钥限制的 Rust 原生执行意味着在受限密钥上调用 `/chat/completions` 不再需要为每个请求触发 Python 回调。高并发场景下 p50/p99 延迟预期将有所降低。

2. **预算上限可能偏松。** 如果你在虚拟密钥上使用 `max_budget` 进行成本控制，当前的实现在约 22% 的范围内允许超额调用。请监控支出并考虑留出缓冲，或等待修复发布。

3. **Kafka 现已是一等公民的日志目标。** 无需自定义集成，启用原生 Kafka 请求日志即可对整个集群进行集中的用量和成本分析。

4. **工具调用内容现在可被扫描。** 如果使用 Bedrock 安全护栏进行内容审核，现可选择性地扫描工具调用参数和工具描述——而不仅仅是消息文本和工具结果。

5. **留意流式传输 bug。** 如果你在使用流式 `/v1/responses` 时上游返回 400，连接会静默断开。客户端将看到 socket 重置而非 JSON 错误。临时方案：在客户端添加重试逻辑并降级到非流式模式。

6. **数据库读副本存在风险。** 当前行为在超时后会使读副本进入不可用状态。如果你在使用 `DATABASE_URL_READ_REPLICA`，建议暂时避免使用或实现外部健康检查。

7. **Inference APIs 上新增模型支持。** Kimi K3.1 Pro 及相关模型现已加入价格表。如果你通过 Inference APIs 路由，这些模型现已可用。

---

*简报数据来源于 2026-11-20 的 GitHub 数据 [BerriAI/litellm](https://github.com/BerriAI/litellm)。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this technical report into Simplified Chinese. Let me carefully translate it while following all the rules:

1. Output ONLY the translation, no preamble
2. Preserve all Markdown structure
3. Keep URLs, link targets, code spans, numbers, dates verbatim
4. Keep project names, repo slugs, usernames, version tags, file paths in original form
5. Keep issue/PR references as-is
6. Use natural technical Chinese register

Let me translate section by section:

Title: "Unsloth Digest — 2026-11-20" → "Unsloth 日报 — 2026-11-20"

Let me go through it carefully...
</think>


# Unsloth 日报 — 2026-11-20

## 1. 今日要点

Unsloth v0.1.920-beta 发布，带来了扩展的 **AMD NPU 支持**，现已支持 Q4NX 模型转换，并为所有 NPU 兼容模型提供运行时状态可见性。同时新增 **LTX-2.5** 和 **MOSS-Image LoRA 训练**、NVIDIA **Cosmos3 FP8 视频**推理，以及定时代理任务功能。与此同时，团队合并了多项针对 FLUX.3 INT8 冷启动时间和检查点预算的扩散训练优化。

## 2. 版本发布与破坏性变更

| 版本 | 主要变更 |
|------|---------|
| **v0.1.920-beta** | AMD NPU：Q4NX 模型转换 + 运行时状态；LTX-2.5 与 MOSS-Image LoRA 训练；NVIDIA Cosmos3 FP8 视频；支持聊天回复的定时任务 |

今日无破坏性 API 变更报告。

## 3. 新模型与硬件支持

| 类别 | 新增内容 | 说明 |
|------|---------|------|
| **训练目标** | LTX-2.5, MOSS-Image | 新增 LoRA 微调流水线 |
| **视频推理** | NVIDIA Cosmos3 FP8 | 新增定时任务视频模式 |
| **NPU 后端** | AMD RyzenAI ONNX 运行时 | 当 FastFlowLM 被 Smart App Control 阻止时的备用路径 ([#18555](https://github.com/unslothai/unsloth/pull/18555)) |
| **NPU 后端** | AMD 签名版 FastFlowLM 1.0.13 | 带 Authenticode 签名的二进制文件，用于通过 Windows Smart App Control ([#18553](https://github.com/unslothai/unsloth/pull/18553), [#18554](https://github.com/unslothai/unsloth/pull/18554)) |
| **纯 CPU 推理** | FLUX.2 VAE CPU 解码 via sd.cpp | 无 GPU 时在 CPU 上解码潜在向量 ([#18521](https://github.com/unslothai/unsloth/pull/18521)) |
| **GPU 推理** | sd.cpp 按 GPU 系列分发的 CUDA 包 | 将大体积包拆分；131–139 MiB vs 341 MiB ([#18491](https://github.com/unslothai/unsloth/pull/18491)) |

以下功能请求仍在开放中：**旧款 AMD XDNA NPU（Ryzen AI 100/200 系列）** 支持 ([#18501](https://github.com/unslothai/unsloth/issues/18501)) 和 **Colibri 引擎**流式推理后端 ([#17928](https://github.com/unslothai/unsloth/issues/17928))。

## 4. 性能与优化

### 扩散模型训练

| 领域 | 变更 | 影响 |
|------|------|------|
| FLUX.3 INT8 冷启动 | 在权重读取期间预编译 int8 内核 | 冷启动加载时间 **减少 2.6 至 2.9 秒** ([#18455](https://github.com/unslothai/unsloth/pull/18455)) |
| FLUX.3 INT8 重启 | 每个进程对 CUTLASS 库做一次哈希 | 重启时间 **减少 3.2 秒** ([#18463](https://github.com/unslothai/unsloth/pull/18463)) |
| SDXL / H3 检查点 | 基于预算的检查点策略（不再每块检查点）；OOM 后降级；缓存 fp8 反向权重 | 大批次训练时降低内存开销 ([#18518](https://github.com/unslothai/unsloth/pull/18518)) |
| 条件缓存持久化 | MiniMax-H3 视频和图像训练器默认启用 | 消除冗余的 VAE/标题重计算 ([#18519](https://github.com/unslothai/unsloth/pull/18519)) |
| 视频 VAE 分块解码 | 预分配输出缓冲区，替代 `torch.cat` | 解码期间减少内存碎片 ([#18506](https://github.com/unslothai/unsloth/pull/18506)) |
| Probe 预热 RNG | 使用专用生成器而非默认 CUDA RNG | 加载后采样结果可复现 ([#18457](https://github.com/unslothai/unsloth/pull/18457)) |

### LoRA 与微调

- **LoRA 初始化 RNG 保护**：`get_peft_model` 不再在每次初始化时重置全局 RNG；避免顺序训练流水线中的可复现性问题 ([#14328](https://github.com/unslothai/unsloth/pull/14328))。
- **DeepSpeed ZeRO-1/2**：ZeRO-1/2 下现已正确禁用智能梯度卸载，避免冲突 ([#12731](https://github.com/unslothai/unsloth/pull/12731))。

### 模型服务

- **内存标签实时性**：在 Hub 中打开 GGUF 模型时，现在获取实时内存读数，而非过时的缓存值 ([#16889](https://github.com/unslothai/unsloth/pull/16889))。
- **Mac GGUF 评分**：仅 GGUF 的 Mac 现在根据 Metal VRAM 而非空闲 RAM 的一半来评估模型，避免了误报 "Does not fit" 标签 ([#18552](https://github.com/unslothai/unsloth/pull/18552))。

## 5. 稳定性与回归问题

| 严重性 | 问题 | 状态 | 修复 PR |
|--------|------|------|---------|
| 🔴 高 | MiniMax-M3.1 工具调用解析失败，暴露原始协议 token 并中断代理执行 ([#18481](https://github.com/unslothai/unsloth/issues/18481)) | 开放中 | — |
| 🔴 高 | Studio：Qwen 混合模型配合 MCP 工具后，每轮对话都重复处理完整提示词 ([#17015](https://github.com/unslothai/unsloth/issues/17015)) | 开放中（8 条评论） | — |
| 🟡 中 | Llama.cpp CUDA 升级导致 Qwen3.8 27B 吞吐量下降：60 t/s → 38 t/s ([#17728](https://github.com/unslothai/unsloth/issues/17728)) | 已关闭 | 调查中 |
| 🟡 中 | AMD GPU 监控在 Windows ROCm 下显示 0% 利用率（Ryzen AI Max+ 395, gfx1151）([#18005](https://github.com/unslothai/unsloth/issues/18005)) | 已关闭 | 进行中 |
| 🟡 中 | Llama.cpp b12340 破坏了 MTP（多模态张量并行）([#17733](https://github.com/unslothai/unsloth/issues/17733)) | 已关闭 | 调查中 |
| 🟡 中 | 用户级安装后提示 `uv` 未找到错误，且消息不会自动清除 ([#18492](https://github.com/unslothai/unsloth/issues/18492)) | 已关闭 | 修复已合并 |
| 🟢 低 | v0.1.919-beta 中模型选择器 UI 过于拥挤；用户请求恢复选项 ([#18321](https://github.com/unslothai/unsloth/issues/18321)) | 开放中 | — |
| 🟢 低 | Wayland：计算机使用开关灰显；需要 X11 会话 ([#18221](https://github.com/unslothai/unsloth/issues/18221)) | 已关闭 | 不会修复（平台限制） |

其他仍在开放中的已知问题：
- 混合 NVIDIA+AMD 主机上 AMD 显卡被忽略 ([#12248](https://github.com/unslothai/unsloth/issues/12248))
- Ryzen 8700G 与 Radeon 780M 统一内存加载不正确 ([#18001](https://github.com/unslothai/unsloth/issues/18001))

## 6. 对应用开发者的影响

1. **AMD NPU 部署可行性提升**：FastFlowLM 1.0.13 签名版与 RyzenAI ONNX 备用路径的上线，意味着 Unsloth Studio 现已能应对 Windows Smart App Control 限制。面向 AMD NPU 硬件部署时，建议以 v0.1.920-beta 为基准。

2. **扩散 LoRA 训练速度显著提升**：FLUX.3 INT8 冷启动和重启优化合计节省约 6 秒，意味着图像/视频微调工作流的迭代周期大幅缩短。

3. **警惕 Qwen 混合模型 + 工具调用回归**：Qwen3.8 27B GGUF 配合 MCP 工具目录时，全提示词重复处理 bug ([#17015](https://github.com/unslothai/unsloth/issues/17015)) 会极大增加 token 消耗。在该问题解决前，生产环境的工具代理应避免使用 Qwen3.8 27B GGUF。

4. **Mac GGUF 用户需重新评估模型适配**： [#18552](https://github.com/unslothai/unsloth/pull/18552) 中的修复纠正了小 GGUF 在 Metal 上的误判。之前被拒绝的模型现在可能可以正常加载。

5. **定时代理任务已可用**：v0.1.920-beta 的定时聊天回复功能支持在 Studio 内部原生触发定时代理工作流——适用于监控管道或周期性报表代理场景。

6. **网络沙箱功能上线**：PR [#18548](https://github.com/unslothai/unsloth/pull/18548) 引入了针对 Web 工具、Python 和终端的逐安装网络允许/阻止列表。构建多租户或受限环境时，无需额外防火墙规则即可获得内置的执行层控制。

---

*数据来源于 2026-11-20 github.com/unslothai/unsloth 活动记录。所有 GitHub 链接均指向仓库根目录。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*