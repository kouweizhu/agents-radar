# AI 基础设施日报 2026-11-19

> 生成时间: 2026-11-19 03:48 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to translate all the text while preserving the Markdown structure exactly, keeping all code, numbers, URLs, project names, issue/PR references, etc. as-is. I should use natural technical Chinese, appropriate for a Chinese developer newsletter.

Let me go through the document section by section and translate it.

Key terms I need to handle properly:
- "vLLM", "SGLang", "llama.cpp", "Ollama", "LiteLLM", "Unsloth" - keep as-is
- "MXFP4", "NVFP4", "FP8", "W4A16", "Q4_K" - keep as-is
- "ROCm", "CUDA", "HIP", "Vulkan", "OpenCL", "SYCL", "WASM", "Metal" - keep as-is
- "MI300", "MI355X", "gfx950", "gfx1200" - keep as-is
- "B300" - keep as-is
- Project-specific terms like "MTP", "DFlash", "ngram", "dLLM", "Mooncake" - keep as-is
- Issue/PR numbers like "#23577" - keep as-is
- Version tags like "v1.109.2" - keep as-is
- URLs - keep as-is

Let me translate carefully with proper technical Chinese terminology:

- "Cross-Project Comparison Report" → "跨项目对比报告"
- "Infrastructure Engineers" → "基础设施工程师"
- "Ecosystem Overview" → "生态概览"
- "simultaneous fragmentation and consolidation" → "同时呈现碎片化与整合趋势"


- "cloud-scale" → "云级" or keep as "cloud-scale" for technical accuracy
- "local/edge runtimes" → "本地/边缘运行时"
- "throughput-per-dollar" → "每美元吞吐量"
- "quantization diversity" → "量化多样性"
- "Activity Comparison" → "活跃度对比"
- "Notable PRs" → "值得关注的 PR"
- "Notable Issues" → "值得关注的 Issue"
- "Community Signal" → "社区信号"
- "RFC" → keep as "RFC" (Request for Comments is widely used in Chinese)
- "⚠️" and "🔥" → keep as-is

Now I'll go through the document systematically, translating each section while maintaining the structure and formatting.
</think>


# AI 基础设施生态圈 — 跨项目对比报告
**日期：2026-11-19 | 受众：基础设施工程师与技术决策者**

---

## 1. 生态概览

AI 推理基础设施层正在同时经历碎片化与整合。六个主流开源项目在 serving 引擎、本地运行时、LLM 网关和微调框架上积极竞争又互为补充。当日的活动反映出整个领域正围绕三个共同焦点收敛：**ROCm/AMD GPU 优化**（vLLM、SGLang、Unsloth 均瞄向新的 MI300 和 MI355X 硬件）、**投机解码与循环解码**（DFlash、ngram、MTP 在多个项目中推进）以及**量化多样性**（MXFP4、NVFP4、FP8、W4A16、Q4_K 变体激增）。整个生态正从"能不能跑？"走向"哪个配置能实现最佳每美元吞吐量？"——并且在云级 serving 引擎（vLLM、SGLang）和本地/边缘运行时（llama.cpp、Ollama）之间出现了越来越清晰的分叉。

---

## 2. 活跃度对比

| 项目 | 发布（24h） | 值得关注 PR | 值得关注 Issue | 社区信号 |
|---------|---------------|------------|-----------------|-----------------|
| **vLLM** | 0 | 20+ | 30（按评论数前 30） | 🔥 Rust 前端 RFC 评论数达 63 条；AMD 相关工作密集 |
| **SGLang** | 0 | 8 | 6 个 open bugs | 🔥 SGLang 1.0 release 追踪活跃；ROCm GLM 优化 PR 已堆叠 |
| **llama.cpp** | **10 条 commits** | 5 | 10（top issues） | 高后端多样化；8 个独立后端目标 |
| **Ollama** | 0 | 9 | 10+ | ⚠️ CVE 已报告（严重程度未确认）；Metal runner 活跃 |
| **LiteLLM** | **v1.109.2** | 7 | 6（critical/high） | 数据库只读副本死锁；路由修复 |
| **Unsloth** | 0 | 9 | 4 | 扩散模型训练扩展至非 bf16；gfx1200 QLoRA 损坏 |

**观察：** llama.cpp 以 commit 数量论是发布最密集的项目；LiteLLM 和 vLLM 在治理成熟度上领先（签名发布、RFC 流程规范）。vLLM 和 SGLang 过去 24 小时无发布并不代表停滞——两者均有大量 PR 在等待 CI 通过。

---

## 3. 模型支持竞赛

### 各项目当前支持情况

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|---------|
| **Qwen3.8**（MoE，MTP） | ✅ ROCm 性能 | ✅ AMD ROCm 活跃 | ✅ MTP 损坏（#23577） | ✅ Tool calls 修复进行中 | — |
| **DeepSeek-V4.1-Flash** | ✅ ROCm B300 DEP | ✅ NPU + Mooncake PD | ✅ RPC 损坏（#30794） | — | — |
| **GLM-5.3-Flash** | ✅ ROCm MI355X | ✅ **3 个堆叠 PR** | — | — | — |
| **Muse Spark（NVFP4）** | ✅ PR #64552 | — | — | — | — |
| **DSpark（DFlash drafts）** | — | — | ✅ Log-SNR conditioning | — | — |
| **FLUX.1 / FLUX.2-klein** | — | — | — | — | ✅ AdaLN 步耗时降低 28% |
| **Wan 2.2 5B** | — | — | — | — | ✅ 非 bf16 训练 |
| **HunyuanImage 2.1** | — | — | — | — | ✅ Distilled 支持已修复 |
| **VoxCPM2** | — | — | ✅ 多模态 MTMD | — | — |
| **Kyutai Hibiki（TTS）** | — | — | ✅ 全双工服务端 | — | — |
| **BerryLM（混合 MoE）** | — | — | ✅ 架构支持 | — | — |
| **决策模型（d1-2B）** | — | — | — | ✅ Batch sizing 已修复 | — |

### 各分类冠军
- **云级 MoE / 长上下文：** **vLLM 和 SGLang** — 两者均瞄向 MI355X，均支持流水线并行和分布式 serving
- **本地 LLM 推理多样性：** **llama.cpp** — 8 个后端（CUDA、HIP、Vulkan、OpenCL、SYCL、Metal、WASM、OpenVINO）；无出其右者
- **本地 LLM 易用性：** **Ollama** — 单二进制部署，面向最广泛的非技术用户群体
- **微调速度：** **Unsloth** — 在消费级 GPU 上做 LoRA/DiT 训练无出其右；现已扩展至扩散模型和 TTS

---

## 4. 性能前沿

当日的优化工作集中在五个不同方向：

### KV Cache 与内存
| 项目 | 重点 |
|---------|-------|
| **vLLM** | KV 卸载与请求级提升（RFC）、大页分配器（RFC）、混合 Mamba 模型前缀缓存、DiffKV prefill 平铺（3 倍加速） |
| **SGLang** | 外部缓存链接器，集成 Mooncake direct，speculative 目标权重缓存 IPC |
| **llama.cpp** | Vulkan RT Core 辅助 KV 页面过滤、OpenCL 可调 KV scratch 填充 |
| **Unsloth** | 8 GB 显存文本编码器流式处理（82.7s → 36.7s） |

### 量化
| 项目 | 重点 |
|---------|-------|
| **vLLM** | MXFP8（W8A16 误路由至 W8A8 — bug）、B300/MI355X 上 NVFP4、W4A16 HummingLinearKernel 非确定性、FP8 ROCm Triton 后端 |
| **llama.cpp** | CUDA flash-attention 中 q8_0/q4_0/f8_e4m3 融合 KV 反量化、OpenCL KQ matmul 的 dp4a 路径 |
| **Unsloth** | INT8/FP8 构建上 LoRA（bug 已修复） |

### 投机解码与循环解码
| 项目 | 重点 |
|---------|-------|
| **vLLM** | ngram spec decode + 结构化输出 bug（高严重级别）、RL 训练直连权重重载 |
| **SGLang** | dLLM 多行混合调度、Metal 上的 DFlash2（批量提案 + 状态重建） |
| **llama.cpp** | Qwen3-4B 上 DFlash spec 损坏、Qwen3.6-27B 长会话后 MTP 重复 token |
| **Ollama** | 逐请求 speculative decoding 指标（接受率已在 API 中暴露） |

### 分布式 Serving
| 项目 | 重点 |
|---------|-------|
| **vLLM** | 流水线并行分块、有界可重试 NCCL 权重更新、PP 传输逐字段张量布局 |
| **SGLang** | dLLM 分解 prefill/decode、NPU Mooncake PD 传输、混合 prefill+decode 调度 |
| **LiteLLM** | Rust JWT 认证 + 模型 restamping 实现网关层分解 |

### 内核优化
| 项目 | 重点 |
|---------|-------|
| **llama.cpp** | CUDA conv2d 中 fastdiv 整数除法、SYCL comm_exchange_fast V2（随 allreduce 频率扩展）、OpenVINO 扩展 NPU/GPU 覆盖 |
| **vLLM** | HY4 Flash 的 DeepGEMM 原生 MQA logits、GDN Triton/FLA prefill（Hopper H20 正确性 bug）、HiSparse 页面回收 |
| **SGLang** | gfx950 HIP KDA 可中断 prefill 图、单 FlyDSL 内核处理 KDA MTP 验证 |

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────────────────┐
│                       应用 / Agent 层                            │
│              （prompt 工程、结构化输出、工具调用）                  │
└────────────────┬────────────────────────────────────────────────┘
                 │  LiteLLM（网关、路由、预算、认证）
┌────────────────▼────────────────────────────────────────────────┐
│                     Serving / 网关层                             │
│  vLLM ────────────────── SGLang ─────────────────── LiteLLM     │
│  （云级                （云级               （多提供者              │
│   推理引擎）             推理引擎）             路由网关）           │
│                                                                 │
│  Mooncake ──── 分布式 KV ──── 分解式 prefill/decode             │
└────────────────┬────────────────────────────────────────────────┘
                 │  llama.cpp（本地）、Ollama（本地）
┌────────────────▼────────────────────────────────────────────────┐
│                     本地 / 边缘运行时层                           │
│  llama.cpp ─────────────────────────────── Ollama               │
│  （8 个后端，完全可控，                  （单二进制，              │
│   便携，研究级）                          面向消费者友好）          │
└────────────────┬────────────────────────────────────────────────┘
                 │  Unsloth（微调）
┌────────────────▼────────────────────────────────────────────────┐
│                    训练 / 微调层                                 │
│  Unsloth（LoRA/DiT，消费级 GPU，扩散模型、TTS 微调）              │
└─────────────────────────────────────────────────────────────────┘
```

**各层级关键差异：**

- **Serving 引擎（vLLM vs SGLang）：** vLLM 在 RFC 驱动的架构提案和 Rust 前端投入上领先；SGLang 在调度器创新（dLLM、混合 prefill/decode 轮次）和 NPU 后端工作上领先。两者正以不同的实现哲学趋同于相似的性能目标。

- **网关（LiteLLM）：** 定位为多云抽象层，不在原始推理速度上竞争，而在路由智能、预算管控和可观测性上发力。Rust JWT 认证和模型 restamping 工作表明正朝着网关层分解（prefill 网关 + serving 引擎）的方向演进。

- **本地运行时（llama.cpp vs Ollama）：** llama.cpp 是引擎；Ollama 是产品。llama.cpp 每天 10 条 commits 覆盖 8 个后端，拥有从研究到部署的完整管道。Ollama 拥有消费者开发者体验。今日报告的 CVE 突出了两者的攻击面差异：Ollama 的 Go 二进制文件暴露了比 llama.cpp 的 C/CUDA 核心更大的攻击面。

- **微调（Unsloth）：** 定位在训练与推理的交叉点，在消费级硬件上对两端都能优化。扩散模型训练扩展（FLUX、Wan、HunyuanImage）和 AdaLN 预计算带来的 28% 步耗时降低，代表了从纯语言模型向多模态微调的战略转型。

---

## 6. 趋势信号

### 🔴 安全暴露面正在扩大
Ollama Go 二进制文件上的 CVE（#19771）是本轮第二个安全信号，前一个是 vLLM 的机密计算垃圾输出 bug（#57224）。随着推理基础设施走向网络化（网关、agent 框架），攻击面增长速度超过安全加固。**关注：** CVE 披露时间线；预期所有网关和 serving 项目将协调加强安全。

### 🔴 ROCm AMD 已成为一等公民
三个项目（vLLM、SGLang、Unsloth）正在同时为 MI355X（gfx950）和 B300 做优化。这不是实验性工作——这是由 AMD 数据中心路线图驱动的协调性基础设施投入。**影响：** 预计到 2027 年中，大多数推理工作负载将在 ROCm 上实现与 CUDA 同等的性能。固守 NVIDIA 单一路线的团队应从现在开始评估 ROCm。

### 🟠 投机解码在生产环境中出现故障
ngram spec decode + 结构化输出（vLLM）、MTP 重复 token（llama.cpp）、DFlash spec 回归（llama.cpp）、Metal 上的 DFlash2（Ollama）——均存在活跃的正确性 bug。投机解码的部署速度快于其加固速度。**影响：** 在这些问题解决之前，请勿将投机解码用于结构化输出需求或长会话应用。

### 🟠 Rust 前端趋于收敛
vLLM 和 LiteLLM 都在投资 Rust 原生路径（vLLM：Rust 前端功能等价进度，评论数达 63 条；LiteLLM：JWT/认证 Rust 仓库）。这反映了推理行业将 Rust 引入性能关键路径，同时保留 Python 保持人体工学的趋势。**关注：** 当 vLLM 的 Rust 前端达到功能等价时，预期高并发场景将出现显著的性能包络提升。

### 🟡 扩散模型微调成为新战场
Unsloth 扩展至 FLUX、Wan 2.2 和 HunyuanImage 微调——AdaLN 预计算带来 28% 步耗时降低——标志着扩散模型成为语言模型之外新的竞争前沿。vLLM 近期 `vllm.Render` 特性（derender、completions）表明 serving 层也有意介入。

### 🟡 多 GPU 和分解式架构日趋成熟
SGLang 的 dLLM 多行混合调度、vLLM 的 PP 传输逐字段张量布局以及 LiteLLM 的模型 restamping，都指向推理管道分解为专业化组件（prefill 网关、decode 引擎、KV 存储）的未来。vLLM 和 SGLang 对 Mooncake 原生分布式 KV 传输的集成是这一架构方向最具体的信号。

### Agent 和应用开发者应关注的事项

| 信号 | 时间线 | 行动建议 |
|--------|----------|----------|
| Ollama CVE 披露 | 数天内 | 审查网络暴露面；准备升级路径 |
| ROCm MI355X 等效 | 2–4 个月 | 对非关键工作负载开始 AMD ROCm 测试 |
| 投机解码正确性 bug | 2–6 周 | 结构化输出 / 长会话场景避免使用 |
| vLLM Rust 前端功能等价 | 1–2 个季度 | 跟踪进展；可能带来性能拐点 |
| SGLang 1.0 发布 | 1–2 个季度 | 跟踪从 0.x 迁移需求 |
| 消费级 GPU 扩散模型微调 | 现在 | Unsloth 已可用于 FLUX/Wan 微调；今日即可测试 |
| LiteLLM 数据库只读副本死锁 | 数天内 | 跟踪修复 PR；在代理层增加外部 watchdog |
| 多 GPU 扩散（Unsloth） | 现在 | 在双 GPU 配置上测试 CFG 副本放置 |

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all English text to Simplified Chinese
2. Keep all markdown structure intact
3. Keep URLs, numbers, issue/PR references, code names, config variables as-is
4. Use natural technical Chinese register
5. Output only the translation, no preamble or explanation

Let me translate section by section carefully.

The content is about vLLM project's daily digest for 2026-11-19. It covers releases, new model/hardware support, performance optimizations, stability issues, and what it means for developers.

Let me translate this carefully:

Title: vLLM Daily Digest — 2026-11-19

Section 1: Today's Highlights
Section 2: Releases & Breaking Changes
Section 3: New Model & Hardware Support
Section 4: Performance & Optimization
Section 5: Stability & Regressions
Section 6: What This Means for Application Developers

I need to maintain the technical accuracy and use proper Chinese technical terminology.
</think>


# vLLM 每日简报 — 2026-11-19

## 1. 今日要点

vLLM 项目近期在 ROCm/AMD GPU 优化方面异常活跃，多个 PR 堆叠上线以针对 MI355X（gfx950）和 B300 硬件。与此同时，Rust 前端的对齐工作持续推进，目前评论数已达 63 条。一个关键依赖版本冲突浮出水面：`nvidia-cudnn-frontend` 1.33.0 与 FlashInfer 0.7.4 的 cuDNN 路径不兼容，需要立即锁定版本上限。多个正确性缺陷仍待解决，包括 Confidential Computing、Hopper 上的 GDN prefill 以及 ngram 推测解码配合结构化输出的问题。

---

## 2. 版本发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **依赖版本锁定** | `nvidia-cudnn-frontend` >=1.33.0 会破坏 FlashInfer 0.7.4。PR #68566 将其上限锁定为 `<1.33`，直至 FlashInfer 更新上线。 | [#68566](https://github.com/vllm-project/vllm/pull/68566) |

**过去 24 小时内无新版本发布。**

---

## 3. 新模型与硬件支持

| 类别 | 详情 | 链接 |
|----------|---------|------|
| **ROCm MI355X** | gfx950 优化路线图已激活，针对 Qwen3.8-2.4T-A95B（Quark-MXFP4）和 Qwen3.8-Flash-Next（GatedDeltaNet、QuerySparse Attention、MXFP4 MoE）。 | [#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **ROCm B300** | 针对 B300 上 DEP2/4/8 的 DeepSeek-V4.1-Flash 专用解码实现，数据并行与专家并行。 | [#68366](https://github.com/vllm-project/vllm/pull/68366) |
| **Muse Spark NVFP4** | 通过 ModelOpt checkpoint 对 BF16 路由专家执行在线 `nvfp4_per_token` 量化。 | [#64552](https://github.com/vllm-project/vllm/pull/64552) |
| **GLM-5.3** | 针对 `glm_moe_dsa` 架构的性能优化跟踪。 | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **Unlimited-OCR-2** | 多模态模型现已需要禁用可扩展 KV 缓存。 | [#68254](https://github.com/vllm-project/vllm/pull/68254) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | 链接 |
|------|--------|--------|------|
| **ROCm FP8** | 原生 per-token FP8 Triton 线性算子后端，包含 RDNA4（gfx1201）调优。 | 在 AMD 上启用动态 per-token 激活缩放。 | [#61091](https://github.com/vllm-project/vllm/pull/61091) |
| **DiffKV Prefill** | BLOCK_M=128 + KV tile 64，适配 SM80（非 FA3/FA4）。 | **200K 上下文块提速 3.0 倍。** | [#61095](https://github.com/vllm-project/vllm/issues/61095) |
| **DeepSeek-V4.1-Flash** | 针对 B300 DEP2/4/8 的专用解码（TP=1，共享 MoE 专家）。 | 面向 MI300 部署优化。 | [#68366](https://github.com/vllm-project/vllm/pull/68366) |
| **MXFP4 CUDA Graphs** | 断点式 CUDA Graph 现已为 MXFP4 量化模型启用。 | 修复运行时 M tile 查询冻结问题。 | [#68467](https://github.com/vllm-project/vllm/pull/68467) |
| **FlashInfer TP Gathers** | 将 `PcieIpcAllGatherWorkspace` 接入 `CudaCommunicator.all_gather`。 | 降低小型 TP all-gather 延迟（DeepSeek-V4.1-Flash）。 | [#65359](https://github.com/vllm-project/vllm/issues/65359) |
| **HY4 Flash DeepGEMM** | 原生 16-head DeepGEMM MQA logits 路径。 | 内核级优化。 | [#68364](https://github.com/vllm-project/vllm/pull/68364) |
| **Pipeline PP Chunking** | 在流水线并行下拆分独立的超长 prefill 块。 | 防止单个请求独占所有流水线阶段。 | [#68560](https://github.com/vllm-project/vllm/pull/68560) |
| **大页 KV 分配器** | RFC 草案：每个 spec 对应一个 KV 缓存组以支持大页。 | 未来内存效率提升。 | [#64401](https://github.com/vllm-project/vllm/issues/64401) |

---

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 | 链接 |
|----------|-------|--------|------|
| 🔴 **高** | **Hopper（H20）上 GDN Triton/FLA prefill 结果错误/非确定性** — `chunk_scaled_dot_kkt_fwd` 自动调优配置中 BK < K 且 num_warps >= 4 时出错（Triton 3.6）。 | CLOSED | [#65385](https://github.com/vllm-project/vllm/issues/65385) |
| 🔴 **高** | **Confidential Computing 静默输出垃圾数据** — V2 模型运行器对 pinned host memory 的 UVA 视图在 CC 下存在过期数据。临时方案：`VLLM_USE_V2_MODEL_RUNNER=0`。 | CLOSED | [#57224](https://github.com/vllm-project/vllm/issues/57224) |
| 🔴 **高** | **ngram spec decode + xgrammar + 异步调度** — 校验器接受语法非法的草稿 token → FSM 错误、HTTP 500、并发情况下静默截断。 | OPEN | [#49694](https://github.com/vllm-project/vllm/issues/49694) |
| 🟡 **中** | **W4A16 HummingLinearKernel 跨进程非确定性** H100（sm_90）。比默认 Machete 更快但结果不一致。 | OPEN | [#66232](https://github.com/vllm-project/vllm/issues/66232) |
| 🟡 **中** | **动态 FP8 Amax 包含 CUDA-Graph padding 中的过期 token ID**。 | OPEN | [#67802](https://github.com/vllm-project/vllm/issues/67802) |
| 🟡 **中** | **MXFP8 kernel 忽略激活方案** — weight-only（W8A16）checkpoint 静默执行为 W8A8。 | CLOSED | [#65193](https://github.com/vllm-project/vllm/issues/65193) |
| 🟡 **中** | **混合模型前缀缓存命中率降为 0%** 当 Mamba checkpoint 落在请求独有 token 边界时。 | OPEN | [#45238](https://github.com/vllm-project/vllm/issues/45238) |
| 🟢 **低** | **OpenCUA 多模态处理器忽略 kwargs**（`min_pixels`、`max_pixels`、`size`）来自请求参数。 | PR #68317 | [#68317](https://github.com/vllm-project/vllm/pull/68317) |
| 🟢 **低** | **Tool 调用被 max_output_tokens 截断** 后在截断输入上执行，下一轮却报告 `completed`。 | PR #68547 | [#68547](https://github.com/vllm-project/vllm/pull/68547) |

---

## 6. 对应用开发者的启示

| 建议 | 详情 |
|----------|---------|
| **确认 FlashInfer 兼容性** | 若使用 FlashInfer 0.7.4，请确保 `nvidia-cudnn-frontend < 1.33`。FlashInfer 更新至支持 1.33+ 后尽快升级。 |
| **Confidential Computing 场景避免 V2 runner** | 在 #57224 修复上线前，设置 `VLLM_USE_V2_MODEL_RUNNER=0`。 |
| **混合 Mamba 模型的_PREFIX CACHE 注意项** | Mamba checkpoint 边界处前缀缓存静默降为 0%。监控混合模型的缓存命中率。 |
| **Ngram spec decode + 结构化输出：避免并发** | 并发请求下 xgrammar 校验静默失败。结构化输出工作负载建议禁用 ngram 推测，直至 #49694 解决。 |
| **ROCm 用户：MI355X 优化正在进行** | AMD MI355X（gfx950）性能改进即将大批量上线；追踪 #57149/#59575 中的堆叠 PR。 |
| **Rust 前端即将达成功能对齐** | Rust 前端（`VLLM_USE_RUST_FRONTEND=1`）功能对齐 RFC 评论数达 63 条——生产环境使用仍为实验性。 |
| **MoRCIIO 异构 TP + NVFP4：已修复** | PR #68072 修复了 ROCm 上异构-TP WRITE NVFP4 KV 页面的问题。 |

---

*简报基于 vllm-project/vllm GitHub 2026-11-19 的活动数据生成。所有 issue/PR 链接均指向主仓库。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate an English technical report about SGLang's daily digest into Simplified Chinese. I need to:

1. Translate the content while maintaining all markdown structure
2. Keep technical terms, URLs, issue numbers, etc. in their original form
3. Use natural technical Chinese register
4. Output only the translation, no preamble or explanation

Let me go through the document carefully and translate it section by section.

Key terms to handle:
- SGLang - keep as-is
- GitHub issue/PR numbers - keep as-is
- URLs - keep as-is
- Technical terms like "prefill", "decode", "scheduler", "kernel" - these are commonly used in Chinese technical contexts
- Model names like "GLM-5.3-Flash", "DeepSeek", "Krea-2", "Wan2.1" - keep as-is
- Hardware names like "MI355X", "MI300X", "ROCm" - keep as-is
- Config options like `--load-balance-method total_tokens` - keep as-is

Let me translate section by section:

## 1. Today's Highlights
"Today's Highlights" → "今日要闻"

## 2. Releases & Breaking Changes
"Releases & Breaking Changes" → "版本发布与重大变更"

## 3. New Model & Hardware Support
"New Model & Hardware Support" → "新增模型与硬件支持"

## 4. Performance & Optimization
"Performance & Optimization" → "性能与优化"

## 5. Stability & Regressions
"Stability & Regressions" → "稳定性与回归问题"

## 6. What This Means for Application Developers
"What This Means for Application Developers" → "对应用开发者的影响"

Let me also translate the content within each section naturally.

"daily digest" → "每日简报"


I'll continue translating the remaining content, focusing on maintaining the technical precision and natural flow of the Chinese text.
</think>


# SGLang 每日简报 — 2026-11-19

## 1. 今日要闻

SGLang 继续加大对 AMD ROCm 优化的投入，针对 MI355X/MI300X 上的 GLM-5.3-Flash 推出了三项新 PR。SGLang 1.0 发布追踪帖正在推进，标志着项目重心转向稳定性打磨与兼容性保障。一个影响分块 prefill 负载均衡的调度器关键 bug 已定位，修复 PR 正在等待 review。

---

## 2. 版本发布与重大变更

**过去 24 小时内无版本发布。** 不过，SGLang 1.0 发布追踪帖（#50045）已正式启动，代表即将到来的稳定版发布。预计变更包括：

- 静默的配置变更行为改为显式报错
- 1.x 系列的兼容性策略明确定义
- 从 0.5.x 升级的潜在迁移说明

🔗 https://github.com/sgl-project/sglang/issues/50045

---

## 3. 新增模型与硬件支持

### AMD ROCm — GLM-5.3-Flash 优化
三个针对 MI355X（gfx950）和 MI300X/MI325X（gfx942）的新 PR：

| PR | 重点 | 硬件 |
|----|-------|----------|
| [#48875](https://github.com/sgl-project/sglang/pull/48875) | 为带缓存前缀扩展的可拆分 prefill 图生成 HIP KDA 内核 | gfx950 |
| [#51126](https://github.com/sgl-project/sglang/pull/51126) | KDA MTP 验证的单条 FlyDSL 内核 | gfx950 |
| [#51408](https://github.com/sgl-project/sglang/pull/51408) | FP8 v-absorb 恢复 + DSA 融合 RoPE/KV-write | gfx942 |

### NPU 支持
- PR [#51004](https://github.com/sgl-project/sglang/pull/51004)：新增 DeepSeek-V4-Flash 的 NPU release model data 工作流，支持 Mooncake PD 传输

---

## 4. 性能与优化

### 调度器改进
**[#50088](https://github.com/sgl-project/sglang/pull/50088) — 修复分块 prefill 的 total_tokens 负载均衡**
- **问题**：`--load-balance-method total_tokens` 在计算 `num_total_tokens` 时未计入分块请求中未完成 prefill 的部分
- **影响**：启用分块 prefill 时路由决策错误

### dLLM 调度器
两条 PR 推进 disaggregated LLM 调度：
- [#33190](https://github.com/sgl-project/sglang/pull/33190)：在每个调度的 FDFO 轮次中运行多个 denoise forward
- [#33196](https://github.com/sgl-project/sglang/pull/33196)：将 prefill 行和 decode 行调度到同一个混合轮次

### 内存与缓存
- [#50789](https://github.com/sgl-project/sglang/pull/50789)：Weight Cache 现在仅对 speculative target model 使用 IPC（减少 draft runner 不必要的 IPC 开销）
- [#49127](https://github.com/sgl-project/sglang/pull/49127)：外部缓存链接器指标现已暴露，支持 unified-radix-cache（Mooncake direct linker）

### Diffusion 性能
- [#51383](https://github.com/sgl-project/sglang/pull/51383)：Diffusion 模型冷启动从 80s 降至约 20s 的 RFC（MiniMax-H3 目标）

### 基准测试
- [#51422](https://github.com/sgl-project/sglang/pull/51422)：修复高并发下 `sglang-bench` 的连接复用问题

---

## 5. 稳定性与回归问题

### 关键 Bug

| Issue | 严重程度 | 状态 | 概要 |
|-------|----------|--------|---------|
| [#50915](https://github.com/sgl-project/sglang/issues/50915) | **高** | 开放 | macOS `--device cpu` 在 `get_cpu_ids_by_node` 处抛出 RuntimeError |
| [#51097](https://github.com/sgl-project/sglang/issues/51097) | **高** | 开放 | `launch_reshape_and_cache_flash` 中 `k_scale` 和 `v_scale` 无法独立生效 |
| [#51096](https://github.com/sgl-project/sglang/issues/51096) | **高** | 开放 | `extend_attention_fwd_unified` 在滑动窗口层读取了错误的 tree-mask 位 |
| [#50920](https://github.com/sgl-project/sglang/issues/50920) | **中** | 开放 | Idle-burst prefill：首个请求需等待下一批次（连续 prefill 重叠问题） |
| [#51106](https://github.com/sgl-project/sglang/issues/51106) | **中** | 开放 | `fused_hc_head` 在 `hc_mult` 不为 2 的幂时产生错误结果 |

### AMD 专属问题

| Issue | 严重程度 | 状态 | 概要 |
|-------|----------|--------|---------|
| [#51278](https://github.com/sgl-project/sglang/issues/51278) | **高** | 开放 | MI355X 上 FP8 KV 缓存下 DeepSeek-V2-Lite MLA decode 退化，`SGLANG_AITER_MLA_PERSIST=0` 时 |
| [#50130](https://github.com/sgl-project/sglang/issues/50130) | **中** | 开放 | Mooncake 零拷贝读取被误判为完整缓存命中，实际传输尚未完成 |

### 基础设施

- **CUDA Coredump 追踪帖**：Issue [#26340](https://github.com/sgl-project/sglang/issues/26340) 持续累积 PR 测试产生的 coredump（382 条评论）
- **Flaky Tests**：Issue [#42752](https://github.com/sgl-project/sglang/issues/42752) 追踪 CI 失败，共 215 条评论；AMD 测试失败见 [#45847](https://github.com/sgl-project/sglang/issues/45847)

---

## 6. 对应用开发者的影响

### 立即行动
1. **macOS CPU 用户**：在 [#50915](https://github.com/sgl-project/sglang/issues/50915) 修复前，避免在 macOS 上使用 `--device cpu`
2. **AMD ROCm 用户**：若在 MI300X/MI325X 上使用 GLM-5.3-Flash，待 PR [#51408](https://github.com/sgl-project/sglang/pull/51408) 合并后 MLA decode 性能预计显著提升

### 规划建议
1. **SGLang 1.0 迁移**：0.5.x 版本用户应关注 [#50045](https://github.com/sgl-project/sglang/issues/50045) 以获取升级要求和兼容性策略详情
2. **分块 prefill 用户**：若使用 `--load-balance-method total_tokens`，请关注 [#50088](https://github.com/sgl-project/sglang/pull/50088) 的合并进展，避免路由不均衡
3. **DeepSeek 多轮图片对话**：PR [#48937](https://github.com/sgl-project/sglang/pull/48937) 将带来基于 prefix cache 的路由优化，提升多轮图片对话体验

### 监控建议
- 若使用 Mooncake 集成，请为 external cache linker 开启指标（[#49127](https://github.com/sgl-project/sglang/pull/49127) 修复了此前指标不可见的问题）
- 对于 diffusion 负载，冷启动优化 RFC（[#51383](https://github.com/sgl-project/sglang/issues/51383)）预示 Krea-2 和 Wan2.1 的短期性能改进

---

*本简报基于 2026-11-19 SGLang GitHub 活动数据生成。所有链接指向 github.com/sgl-project/sglang。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the text content into Simplified Chinese
2. Preserve all Markdown structure exactly
3. Keep URLs, code, numbers, dates, issue references as-is
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

Title: llama.cpp Digest — 2026-11-19 → llama.cpp 每日简报 — 2026-11-19

## Today's Highlights → 今日要闻

The 24-hour window saw substantial backend diversification with a new OpenVINO optimization pass (b12503), continued CUDA MoE tuning via mixed-materialization queues on legacy V100 hardware (b12502), and the landing of a critical fix for sticky NaN propagation in recurrent state (b12529). Multi-modal/text support also expanded with VoxCPM2 and Inflect v3 TTS model conversions merged, while the WebAssembly backend gains relaxed SIMD coverage for Q3_K/Q6_K quantizations.

过去 24 小时，后端多样化持续推进：OpenVINO 优化通道（b12503）首次登场，CUDA MoE 继续在老旧 V100 硬件上通过混合实例化队列（b12502）调优，还有关键的递归状态 NaN 传播修复（b12529）终于落地。多模态/文本支持也迎来扩展，VoxCPM2 和 Inflect v3 TTS 模型转换合并进入主干，WebAssembly 后端新增 Q3_K/Q6_K 量化类型的 relaxed SIMD 支持。


---

## Releases & Breaking Changes → 发布与重大变更

| Commit | Change | Notes |
|--------|--------|-------|
| **b12531** | `mtmd: support voxcpm2` (#32443) | VoxCPM2 multimodal model added to supported conversion pipeline |
| **b12530** | `ggml: WASM Relaxed SIMD Enhancement` (#19590) | Extends relaxed SIMD dot-product kernels; adds Q3_K/Q6_K support for WebAssembly |
| **b12529** | `llama: fix sticky NaN in recurrent state` (#31913) | Fixes garbling of subsequent requests when recurrent state holds NaN; closed #29830 |
| **b12528** | `server: fix sleep state for v1/realtime` (#32567) | Resolved server crash when a sleeping slot receives a `/v1/realtime` client connection (closed #32541) |
| **b12527** | `model: limite: reject mudd configs that index past mudd_tap_idx` (#32562) | Adds bounds validation at model load time for MUPD configurations |
| **b12521** | `webgpu: allow FA mask broadcast over Q batch` (#32535) | Fixes CI failure; corrects blk_batch_count handling in get_alloc_size |
| **b12503** | `ggml-openvino: expand model support, optimize NPU/GPU and memory` (#32172) | Improved SWA mask detection; memory footprint reduction for Intel NPU/GPU paths |
| **b12502** | `CUDA: use MMQ for MoE on V100` (#32504) | Enables mixed-materialization queues for MoE layers on older Volta hardware |
| **b12500** | `cuda: decode conv2d patch indices with fastdiv` (#32503) | Replaces three integer divisions per tile row with fastdiv; benefits implicit GEMM conv2d kernel |
| **b12499** | `vulkan: run rms_norm with runtime loop count on Qualcomm` (#30824) | Workaround for Qualcomm GPU compatibility; runtime loop unroll control |

The recent commits address several critical improvements across different backends. Key changes include NaN handling fixes for recurrent models, bounds checking for configuration parameters, and backend-specific optimizations like OpenVINO model expansion and CUDA mixed-materialization queue support for MoE architectures on legacy hardware.

**Migration note:** The NaN fix in b12529 may alter behavior for workloads that were silently producing corrupted output. Applications relying on NaN state persistence should verify expected outputs after upgrading.

The NaN correction in b12529 could impact workloads that were inadvertently generating flawed results. Teams should test their systems after updating to confirm output integrity remains consistent.

---

## New Model & Hardware Support → 新增模型与硬件支持

### Models → 模型
| Model | Type | PR / Commit | Notes |
|-------|------|-------------|-------|
| **VoxCPM2** | Multimodal MTMD | #32443 (b12531) | Full support added |
| **BerryLM** (18.29B, 3.19B active, 40 layers: 30 KDA linear + 10 gated full-attention) | Hybrid MoE | #30234 | Architecture support landed |
| **Kyutai Hibiki** (1B, 2B BF16) | Full-duplex voice I/O | #32491 | Realtime duplex server support added |
| **Inflect v3** (Mini, Micro, Atom) | TTS | #32581 | Three TTS model variants supported |
| **DSpark draft models** with log-SNR conditioning | Speculative decoding | #30657 | Adds log_snr_conditioning key and four projection tensors |

### Hardware & Backends → 硬件与后端
| Backend | Change | PR / Commit |
|---------|--------|-------------|
| **OpenVINO** (Intel NPU/GPU) | Expanded model coverage + memory optimizations | #32172 (b12503) |
| **CUDA / V100** | MMQ path enabled for MoE | #32504 (b12502) |
| **Qualcomm (Vulkan)** | Runtime loop count for rms_norm | #30824 (b12499) |
| **Hexagon (Qualcomm DSP)** | `int-hmx` support + automatic f32→f16 lowering | #32582 |
| **WebAssembly** | Q3_K/Q6_K relaxed SIMD kernels | #19590 (b12530) |

---

## Performance & Optimization → 性能与优化

| Area | Optimization | Details | PR / Commit |
|------|-------------|---------|-------------|
| **CUDA conv2d** | fastdiv integer division | 3 divisions/tile-row replaced by fastdiv in implicit GEMM kernel | #32492 (b12500) |
| **CUDA MoE (V100)** | MMQ materialization | Mixed-materialization queue for expert routing on older Volta | #32504 (b12502) |
| **CUDA flash-attention** | Fused KV dequant (q8_0/q4_0/f8_e4m3) | Eliminates separate dequant pass; materializes K/V as f16 in scratch | #31802 |
| **OpenCL decomposed FA** | dp4a path for KQ matmul | Adds dot-product-4 accumulate kernel path | #32577 |
| **OpenCL FA** | Adjustable KV scratch padding | Row-pitch tuning for improved cache behavior | #32522 |
| **SYCL** | `comm_exchange_fast()` V2 | Increases tensor parallel t/s and transformer t/s; scales with allreduce frequency | #32058 |
| **SYCL** | Intel leak stopgap + nsm Xe2/B70 fix | Memory leak workaround pending Intel oneAPI fix | #32058 |
| **Vulkan** | RT Core-assisted KV page filtering | Compute pass reads per-page KV summaries; ray queries skip irrelevant pages | #32558 |
| **CUDA fastdiv** | Overflow fix in `hi + n` | Widens `hi` before addition to preserve carry past 32-bit boundary | #32575 |

---

## Stability & Regressions → 稳定性与回归

### High Severity (active, unconfirmed or open) → 高优先级（活跃、未确认或开放状态）

| Issue | Description | Backend | Severity | Link |
|-------|-------------|---------|----------|------|
| **#23577** | MTP with Qwen3.6 27B outputs repeated `////` after long session | CUDA | 🔴 High | [#23577](https://github.com/ggml-org/llama.cpp/issues/23577) |
| **#32370** | Vulkan on i915: multi-ubatch prompt processing corrupts with >20s queued GPU work | Vulkan / i915 | 🔴 High | [#32370](https://github.com/ggml-org/llama.cpp/issues/32370) |
| **#30794** | RPC: DeepSeek V4 degenerates to repeated token after long prompt with two workers | RPC | 🔴 High | [#30794](https://github.com/ggml-org/llama.cpp/issues/30794) |
| **#29526** | A770 Vulkan: empty EOS replies after ~7–8h continuous decode | Vulkan / Arc A770 | 🟠 Medium | [#29526](https://github.com/ggml-org/llama.cpp/issues/29526) — closed, may need reopening |

### Medium Severity (confirmed or regression-tracking) → 中优先级（已确认或回归跟踪中）

| Issue | Description | Backend | Notes |
|-------|-------------|---------|-------|
| **#29858** | High CPU use when model runs entirely on GPU — regression from b10423 | All GPU | Bisected to commit a94d563ed; confirmed regression |
| **#32316** | Cache reuse disabled for IMROPE models (Qwen3.5); full re-prefill every request | Metal | — |
| **#29798** | OpenCL `set_tensor` drops writes to q8_0 views; KV cache restore yields empty cache | OpenCL | Affects Android Snapdragon 8 Elite |
| **#29371** | CUDA flash attention inefficiency with quantized KV cache; worsens with context length | CUDA | — |
| **#32526** | DFlash spec broken on Qwen3-4B + DFlash-b16: ~6% acceptance vs expected 85% | Server | Closed, likely pre-existing |

### Fixed / Closed Today → 今日修复/关闭

| Issue | Resolution | Link |
|-------|-----------|------|
| #32541 — server crash on `/v1/realtime` with sleeping slot | Fixed in b12528 (#32567) | [#32541](https://github.com/ggml-org/llama.cpp/issues/32541) |
| #29830 — recurrent state not cleared on NaN, garbling future requests | Fixed in b12529 (#31913) | [#29830](https://github.com/ggml-org/llama.cpp/issues/29830) |
| #26609 — CUDA illegal memory access with Qwen3.6-35B MoE flash-attn | Closed (stale) | [#26609](https://github.com/ggml-org/llama.cpp/issues/26609) |

---

## What This Means for Application Developers → 对应用开发者的影响

1. **Server-side users on Intel NPU/GPU** should see reduced memory pressure and broader model compatibility after pulling b12503. This is particularly relevant for OEM deployments relying on OpenVINO rather than CUDA.

2. **MoE model operators on V100 or legacy Volta hardware** can now use MMQ-backed inference (b12502), unlocking MoE architectures on数据中心 where Ampere+ is unavailable.

3. **Applications using speculative decoding with DSpark drafts**: log-SNR-conditioned drafts were silently failing tensor-count checks and disabling speculation. Upgrade to pick up #30657.

4. **Realtime voice applications**: Kyutai Hibiki full-duplex support (#32491) and expanded TTS model coverage (#32581) make llama.cpp increasingly viable as a local voice agent backend.

5. **Long-running inference services** should monitor for the Arc A770 degradation issue (#29526). If running Vulkan on Intel Arc, consider periodic server restarts or watch for the fix.

6. **Qwen3.6-27B MTP users** should track #23577 — the repeated token bug after extended sessions remains open with no identified fix commit yet.

7. **WebAssembly deployments** gain Q3_K/Q6_K support via relaxed SIMD, improving quantization flexibility for browser-based inference.

---

*Generated from ggml-org/llama.cpp activity log, 2026-11-19. All linked issues and PRs are live at https://github.com/ggml-org/llama.cpp.*</think>



</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate an English technical report (Ollama Digest for 2026-11-19) into Simplified Chinese. Let me translate this carefully, preserving the structure and technical accuracy while making it read naturally in Chinese.

Key things to remember:
- Output ONLY the translation, no preamble or explanation
- Preserve all Markdown structure
- Keep URLs, references, code names as-is
- Use natural technical Chinese
- Maintain the tone of a Chinese developer newsletter

Let me translate section by section.
</think>


# Ollama Digest — 2026-11-19

---

## 1. 今日要点

Ollama 今天收到了针对其 Go 二进制文件的高优先级 CVE 报告（#19771）——严重程度尚未确认，但已被社区立即标记。在修复方面，两个正确性相关的 PR 今天合入，消除了长期存在的痛点：重复的 GGUF 元数据键现在在解析阶段就会被拒绝（#19770），而决策模型的批大小调整则拆分成了两个互补的 PR（#19743、#19760），解决了 `d1-2B` 等模型报出的误导性"上下文长度"错误。与此同时，Metal Runner 持续活跃优化中，针对 DFlash2 批处理和内存自适应历史保留进行改进。

---

## 2. 版本发布与破坏性变更

过去 24 小时内无版本发布。

| 条目 | 详情 | 链接 |
|---|---|---|
| **GGUF 键唯一性强制校验** | PR #19770 在读取时严格拒绝重复的元数据键。目前 `File.KeyValue` 采用先到先得策略，而 `ReadFileMetadata` 是后者覆盖前者——这一分歧现已消除。 | [#19770](https://github.com/ollama/ollama/pull/19770) |
| **跨 `shift` 设置的 Runner 共享** | PR #19748（已关闭）修复 issue #18950：当客户端在 `shift: false` 和默认值之间交替时，拥有不同 `shift` 值的请求不再触发模型重载。只要模型支持上下文位移，llama-server 现已携带上下文位移支持启动。 | [#19748](https://github.com/ollama/ollama/pull/19748) |

---

## 3. 新模型与硬件支持

今日无新模型或硬件支持公告。现有活跃工作流：

| 类别 | 状态 | 详情 |
|---|---|---|
| **Qwen3.8 工具调用解析器** | 进行中 | PR #19764 使解析器能够接受 `qwen3-coder` 在推理语句后才输出调用、且未写 `<tool_call>` 开头的输出。修复了 #18530。 | [#19764](https://github.com/ollama/ollama/pull/19764) |
| **并行工具调用** | 开放中的功能请求 | #9156 请求 `parallel_tool_calls` 支持——目前尚未实现。 | [#9156](https://github.com/ollama/ollama/issues/9156) |
| **决策模型（`d1-2B`）** | 修复已合入 | 两个 PR 解决了非因果决策模型的批大小问题：#19743 和 #19760 针对导致 >512 token 请求失败且报错信息具有误导性的 ubatch/物理批不匹配问题。 | [#19743](https://github.com/ollama/ollama/pull/19743), [#19760](https://github.com/ollama/ollama/pull/19760) |

---

## 4. 性能与优化

### 已合入 / 已合并
| PR | 领域 | 概要 |
|---|---|---|
| #19748 | 调度器 | 单个 Runner 现可跨 `shift` 设置共享，消除了客户端交替位移模式时每次请求都触发重载的问题。 |
| #19755 | UI / Thinking | Thinking 实时展示框中的有序列表序号不再在两位数时被截断（prose-sm 内边距修复 + overflow 处理）。 |
| #19746 | CI / Speech | 移除语音慢读器覆盖测试中对套接字缓冲和大转换任务的竞态检测依赖。 |

### 活跃开发中
| PR | 领域 | 概要 |
|---|---|---|
| #19632 | VRAM / 多 GPU | 修复导致模型错误驱逐、加载拒绝和不必要 GPU 分散的关键 VRAM 统计缺陷。涵盖 issue #19463、#18679、#18349、#16599。 | [#19632](https://github.com/ollama/ollama/pull/19632) |
| #19368 | 投机解码 | 投机解码的逐请求指标：API 响应和 `ollama run --verbose` 中报告草稿/接受 token 数及接受率。 | [#19368](https://github.com/ollama/ollama/pull/19368) |
| #19769 | Metal / MLX Runner | 将 DFlash2 草稿提案批量处理，在一次批处理中重建已接受的循环状态；短草稿保留直接状态捕获以避免重放开销。 | [#19769](https://github.com/ollama/ollama/pull/19769) |
| #19678 | Metal / MLX Runner | 内存自适应的对话历史：固定 8 GiB 配额不再刚性切分，允许 Metal Runner 在内存充裕时保留更多历史。 | [#19678](https://github.com/ollama/ollama/pull/19678) |
| #19680 | 上下文位移 / RoPE | 修复 YaRN 振幅因子在每次位移时被重复乘入已应用 RoPE 的 KV 缓存键，导致上下文位移质量随时间退化的问题。 | [#19680](https://github.com/ollama/ollama/pull/19680) |

### 性能问题调查中
| Issue | 严重程度 | 详情 |
|---|---|---|
| **AMD RDNA1（RX 5700 XT）上的 Vulkan** | 中 | Prompt 处理比上游 llama.cpp Vulkan 构建慢约 13 倍（~40 vs ~540 t/s）；生成阶段慢约 17%。归档为 #19747。 | [#19747](https://github.com/ollama/ollama/issues/19747) |
| **高速存储上的模型加载速度** | 中 | 即使在 14+ GB/s 的 mdadm 阵列上，模型加载速度也仅 1–3 GB/s（#9720，已关闭但未解决）。 | [#9720](https://github.com/ollama/ollama/issues/9720) |

---

## 5. 稳定性与回退问题

| # | 严重程度 | 描述 | 状态 | 修复 PR |
|---|---|---|---|---|
| **#19771** | 🔴 高（CVE） | Go 二进制文件中报告了高危 CVE 漏洞。详情尚未公开；社区正在追踪。 | 开放中，新提交 | — |
| **#19765** | 🟡 中 | 65,536 token 处静默截断：API 返回 `done_reason=stop`，但尽管上下文窗口为 147,456 token，仍无截断提示。 | 已关闭 | — |
| **#19757** | 🟡 中 | macOS M6 24 GB：`qwen3.8:27b` 在 16k 上下文下导致 `llama-server` 超出其内存配额约 3 GiB，加载后约 30 秒内触发系统内存严重压力。 | 开放中 | — |
| **#19747** | 🟡 中 | RX 5700 XT（RDNA1/gfx1010）上 Vulkan Prompt 处理比上游 llama.cpp Vulkan 慢 13 倍。 | 开放中 | — |
| **#19767** | 🟡 中 | 单槽位 Qwen3.8：两个 agent 会话每次都从 token 0 重新读取所有 prompt；并行槽位丢失部分 prompt 缓存。 | 开放中 | — |
| **#19762** | 🟢 低 | Qwen 3.8 因模板错误将所有系统消息移至开头，但 Ollama 实际上从不使用该模板——逻辑不匹配。 | 开放中 | — |
| **#19759** | 🟢 低 | 功能请求：模型加载失败时可选直接报错而非重试（关闭 CPU 投影卸载），以便开发者检测意外的 GPU 内存预算。 | 开放中 | — |

---

## 6. 对应用开发者的影响

**安全性：** 密切关注 #19771。一旦详情披露，如你在网络暴露或多租户环境中运行 Ollama，请将此视为优先升级候选。

**今日合入的可靠性改进：**
- 如果你的 agent 使用 `qwen3-coder` 且依赖先写推理再跟工具调用的模式，PR #19764 应能消除此前可能出现的静默工具调用丢失问题。
- 如果你在多 GPU 环境中运行，PR #19632（待合并）将修复导致生产槽位不稳定的虚假模型驱逐和 GPU 分散行为。
- 如果你在基准测试投机解码，PR #19368 现已在 API 响应中暴露接受率和草稿/接受 token 计数。

**已知痛点及应对方案：**
- **Apple Silicon 上的 Metal 内存：** `qwen3.8:27b` 可能在 24 GB Mac 上超出内存配额。如遇内存压力，请降低 `OLLAMA_CONTEXT_LENGTH` 或切换至更小的量化版本。
- **长上下文截断：** #19765 中的静默截断意味着你应独立跟踪输出 token 数与预期上下文预算的对比——不要仅依赖 `done_reason`。
- **AMD Vulkan 用户：** 如果你使用 RDNA1（RX 5700 系列），在 #19747 解决前，Prompt 吞吐量将明显低于上游 llama.cpp。

**今日新增的社区集成：**
- **Meta-Capp** — 使用 Ollama 的桌面 PDF 学习助手（默认使用 Gemma 4）。PR #19766（浏览器版）和 #19761（桌面版）。 | [#19766](https://github.com/ollama/ollama/pull/19766) | [#19761](https://github.com/ollama/ollama/pull/19761)
- **Coati** — Chrome 侧边栏，允许 Ollama 模型阅读和搜索当前页面。PR #19763。 | [#19763](https://github.com/ollama/ollama/pull/19763)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate an English technical report about LiteLLM into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering

Let me translate this carefully, maintaining the technical register and natural Chinese expression.

Key terms to consider:
- LiteLLM - keep as-is
- Docker image - Docker 镜像
- cosign - keep as-is (it's a tool name)
- PR (Pull Request) - PR
- Issues - Issue
- routing - 路由
- streaming - 流式传输 or 流式
- database - 数据库
- read replica - 读副本
- RPM limits - RPM 限制
- TPM limits - TPM 限制
- breaking changes - 破坏性变更
- fallback - 降级/回退
- deploy/deployment - 部署
- health probes - 健康检查探针
- context eviction - 上下文驱逐
- tool calls - 工具调用
- embeddings - 向量嵌入
- Helm - Helm (keep as-is)
- Prisma - Prisma (keep as-is)
- budget - 预算/额度
- rate limiting - 限流
- observability - 可观测性
- OpenTelemetry - OpenTelemetry (keep as-is)


- Kubernetes - Kubernetes (keep as-is)
- Replica drain - 副本排空
- Batch files - 批处理文件
- prompt cache - 提示缓存
- cost control - 成本控制

I'll continue translating the technical terms, focusing on maintaining the precise technical language while ensuring natural Chinese expression. The goal is to preserve the nuanced technical meaning while making it accessible to Chinese-speaking developers.
</think>


# LiteLLM 每日简报 — 2026-11-19

## 今日要点

LiteLLM v1.109.2 通过 cosign 对 Docker 镜像进行了签名验证，解决了生产环境中供应链安全方面的顾虑。社区正在积极修复多个关键正确性问题：数据库读副本故障转移 bug 导致读取永久死锁（Issue #52284），以及优先级路由在 `usage-based-routing-v2` 下忽略 TPM 限制的回归问题（Issue #52548）。新功能方面，Rust 原生 JWT 认证层和模型重标记（model restamping）正在作为基础设施强化的一部分落地。

---

## 版本发布与破坏性变更

| 版本 | 变更 | 影响 |
|---------|--------|--------|
| **v1.109.2** | Docker 镜像现通过 cosign 签名；发布说明中新增验证命令 | **低** — 安全性增强，无 API 变更 |

**验证命令：**
```bash
cosign verify \
  --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com \
  ghcr.io/berriai/litellm:v1.109.2
```

今日无 API 或配置 schema 变更报告。

---

## 新模型与硬件支持

今日无新模型或硬件支持公告。

---

## 性能与优化

| PR | 领域 | 描述 |
|----|------|-------------|
| [#52756](https://github.com/BerriAI/litellm/pull/52756) | **认证 / 数据库** | JWT 用户配置、密钥映射及代理认证的 Rust 仓库层 — 消除了 Python→Prisma 在原生 JWT 主机上的额外开销 |
| [#52509](https://github.com/BerriAI/litellm/pull/52509) | **路由器核心** | 重构路由器，按请求传递主机上下文而非持有单一全局主机 — 支持请求级状态而不产生生命周期泄漏 |
| [#52510](https://github.com/BerriAI/litellm/pull/52510) | **路由器** | 修复降级行为，使重路由请求无论哪个部署失败都能遵循路由组的降级配置 |
| [#37313](https://github.com/BerriAI/litellm/pull/37313) | **流式传输** | 修复 `get_api_base`，从解析后的参数中读取 `stream` 而非原始字典，避免流式调用静默路由错误 |
| [#37489](https://github.com/BerriAI/litellm/pull/37489) | **额度控制** | 重置多窗口预算时保留时区偏移量；此前非 UTC 窗口会出现提前或延迟漂移 |
| [#37943](https://github.com/BerriAI/litellm/pull/37943) | **流式传输** | 处理与解析后块并存的原始 SSE 帧，防止后置防护栏返回 500 错误 |
| [#51533](https://github.com/BerriAI/litellm/pull/51533) | **Bedrock** | 保留原生 Bedrock 流上的 llama token 计数值和 `stop_reason`；修正计费日志中的低估问题 |

---

## 稳定性与回归问题

### 🔴 严重

| Issue | 描述 | 临时解决方案 |
|-------|-------------|---------------|
| [#52284](https://github.com/BerriAI/litellm/issues/52284) | 读副本重连超时导致 Prisma 读取器永久死锁；读取永远不会降级到主库，代理也不会自愈 | 无 — 需重启；修复 PR 尚未合并 |
| [#49680](https://github.com/BerriAI/litellm/issues/49680) | `prisma_migration --skip_server_startup` 在 `psycopg` 无法加载 `libpq` 时因 `ImportError` 崩溃 — `ensure_request_log_indexes` 中的导入未做保护 | 确保容器中安装了 `libpq`；修复 PR 尚未合并 |

### 🟠 高

| Issue | 描述 | 修复 PR |
|-------|-------------|--------|
| [#21312](https://github.com/BerriAI/litellm/issues/21312) | 失败请求（非 2xx）不计入虚拟密钥的 RPM 限制 | 待处理 |
| [#52548](https://github.com/BerriAI/litellm/issues/52548) | 优先级路由组在 `usage-based-routing-v2` 下忽略部署的 `tpm` 限制，且在 `rpm` 条件下提前降级 | 待处理 |
| [#49930](https://github.com/BerriAI/litellm/issues/49930) | 健康检查探针在大上下文模型（262K tokens）上驱逐上下文；在高并发时出现 | 待处理 |
| [#52558](https://github.com/BerriAI/litellm/issues/52558) | Lens worker 在收到 `SIGTERM` 时中止活动中的分析声明；在 Kubernetes 副本排空期间中断进行中的声明 | 待处理 |

### 🟡 中

| Issue | 描述 | 修复 PR |
|-------|-------------|--------|
| [#45348](https://github.com/BerriAI/litellm/issues/45348) | 使用流式 `/v1/messages` 调用 `chatgpt`（Codex）provider 时并行工具调用参数丢失 — 缺少 `input_json_delta` 事件 | 待处理 |
| [#50070](https://github.com/BerriAI/litellm/issues/50070) | 向 Vertex Claude 发送的 `/v1/messages` 在 `system`/`tools` 之前发送 `messages`，导致工具循环轮次中提示缓存未命中 | 待处理 |
| [#47076](https://github.com/BerriAI/litellm/issues/47076) | Helm 迁移 Job 自 v1.105.x 起在 1Gi 内存限制下 OOMKilled — `prisma generate` 在非 root 镜像中迁移后运行 | 待处理 |
| [#51790](https://github.com/BerriAI/litellm/pull/51790) | 带 `json_schema` 行的 Vertex Gemini 批处理文件导致其他行以 `response_mime_type must be set` 错误失败 | **已合并**（回退至 [#52725](https://github.com/BerriAI/litellm/pull/52725)） |

### 已关闭（重要修复）

| Issue | 描述 |
|-------|-------------|
| [#49411](https://github.com/BerriAI/litellm/issues/49411) | `voyage/` 向量嵌入现在正确遵循 `VOYAGE_API_BASE` 环境变量 |
| [#45605](https://github.com/BerriAI/litellm/issues/45605) | `custom_auth` 现对 custom-auth 请求正确执行额度检查 |
| [#52456](https://github.com/BerriAI/litellm/issues/52456) | LiteLLM 不再静默重新标记乱序的 OpenAI Decisions 答案 |

---

## 对应用开发者的影响

1. **数据库高可用隐患：** 使用读副本（`DATABASE_URL_READ_REPLICA`）的团队应监控 [#52284](https://github.com/BerriAI/litellm/issues/52284) 中描述的死锁情况。在修复上线前，考虑设置重连抖动或外部看门狗，当所有读取开始失败时自动重启代理。

2. **额度执行缺口：** 失败请求不计入虚拟密钥的 RPM 限制（[#21312](https://github.com/BerriAI/litellm/issues/21312)）。如果你的成本控制依赖 LiteLLM 内置的限流机制，请注意：当上游返回 4xx/5xx 时不会扣减计数。

3. **Codex 流式工具调用：** 使用 `chatgpt` provider 且流式调用 `/v1/messages` 的应用将收到空的工具参数 — 避免在多工具 Codex 调用中使用流式传输，或等待 [#45348](https://github.com/BerriAI/litellm/issues/45348) 解决。

4. **大上下文健康检查：** 如果你在 LiteLLM 后端运行 200K+ 上下文窗口的模型，健康检查调用可能驱逐工作中的上下文。考虑调整探针间隔或通过单独的轻量级端点路由健康检查。

5. **新的可观测性选项：** WildEdge 已作为 OpenTelemetry v2 预设被提出（[#52290](https://github.com/BerriAI/litellm/issues/52290)）。如果被采纳，使用 WildEdge 进行链路接入的团队可通过单个配置开关启用。

6. **升级路径：** v1.109.2 对大多数部署来说是安全升级；cosign 验证是新增功能，不改变运行时行为。如果你使用读副本或在内存受限的 Helm 环境中运行 Prisma 迁移，请关注上述严重问题。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate a technical report about Unsloth AI from English to Simplified Chinese. I need to:

1. Translate the content while maintaining the exact markdown structure (headings, tables, lists, etc.)
2. Use natural technical Chinese suitable for a Chinese developer newsletter
3. Keep all URLs, code spans, issue numbers, project names, etc. in their original form
4. Preserve all formatting including emojis, bold text, horizontal rules

Let me work through this section by section:

## 1. Today's Highlights
- Studio multi-GPU improvements → Studio 多 GPU 改进
- automatic placement → 自动放置
- guided models → 引导模型
- Diffusion training → Diffusion 训练
- non-bf16 GPUs → 非 bf16 GPU
- MiniMax-H3-Image text encoder optimization → MiniMax-H3-Image 文本编码器优化
- 8GB cards → 8 GB 显存卡
- critical QLoRA kernel crash → 关键 QLoRA 内核崩溃
- AMD RDNA4 (gfx1200) → AMD RDNA4 (gfx1200)
- fast_qk_norm_rope broadcasting bug → fast_qk_norm_rope 广播 bug

## 2. Releases & Breaking Changes
- No new releases → 无新版本发布
- No version bumps in the last 24 hours → 过去 24 小时内无版本更新

## 3. New Model & Hardware Support
Let me translate the table...

## 4. Performance & Optimization
Translate the optimization descriptions...

## 5. Stability & Regressions
Translate severity levels and issue descriptions...

## 6. What This Means for Application Developers
Translate takeaways and actions...

Let me be careful about:


- Technical terms like QLoRA, LoRA, KV cache, CUDA, GPU, VRAM (keep them in English or use established Chinese equivalents)
- Product names like Unsloth, Studio, FLUX.1, MiniMax-H3-Image (keep as-is)
- "Open" vs "Closed" for issue status (use Chinese like "待处理" or "已关闭")
- Emoji meanings: 🔴 Critical = 严重, 🟠 High = 高, 🟡 Medium = 中

Now I'll render the full translation.
</think>


# Unsloth 技术速报 — 2026-11-19

## 1. 今日要闻

Unsloth Studio 推送了重要的多 GPU 和 Diffusion 训练改进：自动放置功能现在能智能地将引导型 Diffusion 模型路由到 CFG 副本（比层拆分更快时），DiT LoRA 训练现已支持非 bf16 GPU（如 T4）。MiniMax-H3-Image 的文本编码器流式处理将 8 GB 显存卡上新提示词的渲染时间从 82.7 秒缩短至 36.7 秒。同时，AMD RDNA4（gfx1200）上的关键 QLoRA 内核崩溃和 fast_qk_norm_rope 广播 bug 需要关注。

## 2. 版本发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| 无新版本发布 | 过去 24 小时内无版本更新 | — |

## 3. 新模型与硬件支持

| 模型 / 硬件 | 支持状态 | 详情 | 链接 |
|------------------|----------------|---------|------|
| **FLUX.2-klein, Z-Image, Wan 2.2 5B** | 已支持 | 在非 bf16 GPU（T4, sm75）上启用 DiT LoRA 训练，支持 fp16 + loss scaling | [#18355](https://github.com/unslothai/unsloth/pull/18355) |
| **HunyuanImage 2.1 distilled** | 已修复 | 现在使用发布版的 steps/guidance（之前用的是 base 模型的值） | [#18280](https://github.com/unslothai/unsloth/pull/18280) |
| **MiniMax-H3-Image** | 已优化 | 文本编码器固定 + 流式处理，适配 8 GB 显存卡 | [#18417](https://github.com/unslothai/unsloth/pull/18417) |
| **gfx1200 (RX 9060 XT, RDNA4)** | 损坏 | QLoRA 在融合内核中以 `HIP error: illegal memory access` 中止；无 SDPA 内核 | [#18403](https://github.com/unslothai/unsloth/issues/18403) |
| **gfx1151 / Strix Halo APU** | 混合状态 | 混合线性注意力打包通过精确性测试但无净加速；`--fit on` 内存规划错误 | [#17738](https://github.com/unslothai/unsloth/issues/17738), [#18316](https://github.com/unslothai/unsloth/issues/18316) |
| **AMD 混搭 NVIDIA+AMD 主机** | 损坏 | Studio 忽略 AMD 显卡；无法同时使用（RTX 3080+7900, RTX 4090+7900） | [#12248](https://github.com/unslothai/unsloth/issues/12248) |

## 4. 性能与优化

| 优化项 | 影响 | 详情 | PR |
|--------------|--------|---------|-----|
| **AdaLN 调制预计算** | **每步 −28%，FLUX.1** | 每次请求预计算一次；调制权重移出 GPU | [#18342](https://github.com/unslothai/unsloth/pull/18342) |
| **MiniMax-H3-Image 文本编码器流式处理** | **82.7s → 36.7s** | 固定 host 端层，其余 pageable 流式加载；输出位精确相同 | [#18417](https://github.com/unslothai/unsloth/pull/18417) |
| **多 GPU CFG 副本放置** | 引导 Diffusion 加速 | 当去噪器能放入第二张卡时，自动选择单卡 + CFG 副本方案 | [#18421](https://github.com/unslothai/unsloth/pull/18421) |
| **模型大小/参数量显示** | 体验改进 | 可选设置，在合成器行显示参数量 | [#18067](https://github.com/unslothai/unsloth/pull/18067) |
| **长 raw-text 打包** | 修复数据静默丢失 | 之前在上下文长度处截断；现在训练每个 token | [#18408](https://github.com/unslothai/unsloth/pull/18408) |
| **INT8/FP8 构建上的 LoRA** | Bug 修复 | 量化构建现在接受 LoRA 适配器 | [#18420](https://github.com/unslothai/unsloth/pull/18420) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR | 链接 |
|----------|-------|--------|--------|------|
| 🔴 **严重** | QLoRA 在 gfx1200（RX 9060 XT）上崩溃，融合内核中报 `HIP error: illegal memory access` | 待处理 | — | [#18403](https://github.com/unslothai/unsloth/issues/18403) |
| 🔴 **严重** | `fast_qk_norm_rope` 回退因 position_ids 形状 `[1, seq_len]` 未广播到 `[batch, seq_len]` 导致越界读取 | 已关闭 | — | [#18160](https://github.com/unslothai/unsloth/issues/18160) |
| 🔴 **严重** | 驱动 620.70.06 升级（CUDA 13.5）后 Unsloth 无法使用 GPU；报告"可用 vRAM 为零" | 已关闭 | — | [#18218](https://github.com/unslothai/unsloth/issues/18218) |
| 🟠 **高** | 约 8 次 computer use 调用后 KV 缓存失效；`MAX_TOTAL_MODEL_IMAGES = 8` 硬编码 | 已关闭 | — | [#18231](https://github.com/unslothai/unsloth/issues/18231) |
| 🟠 **高** | `unsloth eval` 对 JSON 数组字符串评分错误：单个元素得分正确，整体数组零分 | 已关闭 | — | [#18246](https://github.com/unslothai/unsloth/issues/18246) |
| 🟠 **高** | Strix Halo APU 上 `--fit on` 规划约 52 GiB 设备显存，尽管可用 64 GB；系统 RAM 膨胀至 57 GB | 待处理 | — | [#18316](https://github.com/unslothai/unsloth/issues/18316) |
| 🟡 **中** | 聊天界面滚动卡顿；延迟后跳跃 | 已关闭 | — | [#18259](https://github.com/unslothai/unsloth/issues/18259) |
| 🟡 **中** | 定时任务忽略聊天的 System prompt | 待处理 | [#18411](https://github.com/unslothai/unsloth/pull/18411) | [#18411](https://github.com/unslothai/unsloth/issues/18411) |

## 6. 对应用开发者的影响

| 要点 | 行动项 |
|----------|--------|
| **AMD RDNA4 用户：避免使用 QLoRA** | gfx1200（RX 9060 XT）在三个融合内核中崩溃；如果今天需要在 AMD 上使用 QLoRA，请使用 RDNA3 或等待内核修复。关注 [#18403](https://github.com/unslothai/unsloth/issues/18403)。 |
| **长文档微调：立即更新** | Raw text 数据集在打包时静默丢弃超出上下文长度的 token。使用 [#18408](https://github.com/unslothai/unsloth/pull/18408) 修复后重新运行受影响的训练任务。 |
| **FLUX.1 推理速度提升 28%** | AdaLN 预计算已合并；如果运行 FLUX.1，更新版本即可在不改变输出的前提下获得每步加速。 |
| **多 GPU Diffusion 用户：测试 CFG 副本** | 自动放置现在对引导模型使用 CFG 副本。验证双 GPU 设置吞吐量是否提升。 |
| **定时任务：确认 System prompt** | 定时任务的回复不再继承聊天的 System prompt；[#18411](https://github.com/unslothai/unsloth/pull/18411) 中已修复但尚未合并。 |
| **JSON eval 结果可能错误** | 如果在答案列包含 JSON 数组的数据集上使用 `unsloth eval`，分数会反转；确认修复后重新评估。 |

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*