# AI 基础设施日报 2026-11-14

> 生成时间: 2026-11-14 02:38 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. I need to translate all the text while preserving:
- The Markdown structure (headings, tables, lists, etc.)
- URLs, code references, project names, version numbers
- Issue/PR numbers
- Technical terminology in natural Chinese

Let me translate section by section carefully, maintaining the exact structure.

Key terms to translate consistently:
- Speculative decoding → 推测解码
- KV cache → KV缓存
- Blackwell (SM120) → Blackwell (SM120)
- llama.cpp → llama.cpp
- vLLM → vLLM
- SGLang → SGLang
- Ollama → Ollama
- LiteLLM → LiteLLM
- Unsloth → Unsloth
- prefill → 前置填充
- decode → 解码
- throughput → 吞吐量
- latency → 延迟
- quantization → 量化
- fine-tuning → 微调
- ROCm → ROCm
- distributed serving → 分布式服务
- multimodal → 多模态
- gradient checkpointing → 梯度检查点
- batching → 批处理
- scheduling → 调度
- kernel → 内核
- hot path → 热路径
- benchmark → 基准测试
- backend → 后端
- gateway → 网关
- proxy → 代理
- router → 路由器
- prefix caching → 前缀缓存
- llama.cpp v1.0.0 → llama.cpp v1.0.0
- etc.

Let me translate carefully, making sure the Chinese reads naturally for a Chinese developer newsletter audience.
</think>


# AI推理基础设施——跨项目动态摘要
**报告日期：** 2026-11-14
**覆盖项目：** vLLM · SGLang · llama.cpp · Ollama · LiteLLM · Unsloth

---

## 1. 生态全景

AI推理基础设施栈正处于活跃的整合阶段。两个主要向量正在汇聚：**架构多样化**（Blackwell SM120、AMD MI355X gfx950、高通 Hexagon、Intel NPU、寒武纪 MLU）催生了后端工作的爆发式增长，同时**推测解码和KV缓存优化**仍是降低延迟和提升吞吐量的主要手段。llama.cpp 的 v1.0.0 版本标志着这一广泛使用的本地运行时迎来了首个主要版本分水岭，而 vLLM 和 SGLang 都在向统一内存架构和 Rust 原生热路径靠拢。LiteLLM 的 Rust 回调移植工作表明，即便是代理/网关层也不再是性能工程的禁区。综合效应：研究引擎与生产基础设施之间的壁垒正在全栈各层快速收窄。

---

## 2. 活跃度对比

| 项目 | Issues（活跃/总数） | PRs（活跃/总数） | Releases（24h） | 主要语言 |
|---------|----------------------|--------------------|----------------|-----------------|
| **vLLM** | ~30 shown / ~300+ | 24 shown | None | Python + CUDA C++ |
| **SGLang** | ~30 shown / ~200+ | 24 shown | None | Python + CUDA C++ |
| **llama.cpp** | 48 shown / ~2,000+ | 143 shown | **v1.0.0** | C/CUDA/OpenCL/Vulkan |
| **Ollama** | 7 shown / ~150+ | 17 shown | None | Go + CUDA/Metal/Vulkan |
| **LiteLLM** | ~20 shown / ~500+ | 24 shown | v1.108.8 (LTS) + v1.111.0-dev.2 | Python + Redis/Postgres |
| **Unsloth** | 18 shown / ~100+ | 184 shown | 0.1.917 beta (pkg 2026.11.4) | Python + Triton |

**观察：**

- **llama.cpp** 和 **Unsloth** 在 PR 数量上领先——llama.cpp 源于其广泛的后端覆盖，Unsloth 则在训练内核工作的同时保持着快速的 Studio UX 迭代节奏。
- **vLLM** 和 **SGLang** 的活跃度相当，反映出两者在生产推理引擎赛道上的真实双雄格局。
- **LiteLLM** 和 **Ollama** 数量虽低但影响力大：LiteLLM 触及每一个提供商，Ollama 触及每一个终端用户。
- **vLLM 和 SGLang 过去24小时均无 release**——两个项目都在重大版本发布前进入功能冻结或回归修复阶段。

---

## 3. 模型支持竞赛

### 当日新增模型 / 架构支持

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash** | ✅ (SM120 broken) | ✅ (prefill perf gap) | — | ✅ MLX | — | — |
| **DeepSeek-V4-Flash (SM8x)** | 🔴 Blocked (#50576) | — | — | — | — | — |
| **Qwen3.8 / Qwen3.5-coder** | ✅ | ✅ | — | ✅ | — | — |
| **Kimi K3 (Azure Foundry)** | — | — | — | — | ✅ | — |
| **Granite4Vision** | — | — | ✅ | — | — | — |
| **Zaya1 8B** | — | — | ✅ | — | — | — |
| **Vispark Vision models** | — | — | — | — | ✅ | — |
| **Muse Spark Open** | ✅ (AMD gfx942) | — | — | — | — | — |
| **GLM-5.3-Flash (NVFP4)** | — | 🔴 NaN bug | — | — | — | — |
| **MiniMax-H3 / H3-Image** | — | ✅ | — | — | — | ✅ INT8 kernel |
| **FLUX.3 klein** | — | — | — | — | — | ✅ INT8 kernel |
| **YuE2** | — | — | — | — | — | ✅ |
| **Ovis-Image 7B** | — | ✅ | — | — | — | — |

### 硬件平台覆盖

| 平台 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------|------|--------|-----------|--------|---------|---------|
| **NVIDIA Blackwell (SM120)** | 🔴 Blocked | 🔴 Blocked | — | — | — | — |
| **NVIDIA Ampere (SM8x)** | 🔴 Blocked | ✅ | ✅ | — | — | — |
| **NVIDIA Hopper (SM90)** | ✅ | ✅ | ✅ | — | — | — |
| **AMD MI355X (gfx950)** | ✅ Active optimization | ✅ | — | — | — | — |
| **AMD RDNA3.5 (gfx1151)** | — | ✅ | — | — | — | ✅ INT8 kernel |
| **AMD RDNA3 (gfx1100)** | 🔴 RCCL bug | ✅ | — | — | — | — |
| **Apple Silicon (MLX)** | — | — | — | ✅ DeepSeek V4.1 Flash | — | — |
| **Qualcomm Hexagon** | — | — | ✅ SSM_SCAN + IQ2/NVFP4 | — | — | — |
| **Intel NPU** | — | ✅ Roadmap | — | — | — | — |
| **寒武纪 MLU** | — | ✅ Roadmap | — | — | — | — |

**结论：** vLLM 和 SGLang 在 AMD MI355X 优化上并驾齐驱。llama.cpp 在硬件多样性上领先（Hexagon、Pascal、RDNA1、RDNA2、RDNA3 当日均有涉及）。**Blackwell (SM120) 是所有项目的最大短板**——vLLM 和 SGLang 均有处于活跃修复状态的关键 SM120 阻塞问题，尚未解决。

---

## 4. 性能前沿

### 优化工作集中领域

| 优化方向 | 涉及项目 | 核心工作 |
|-------------------|-----------------|----------|
| **推测解码** | vLLM, SGLang | DFlash/DSpark (vLLM)、HiCache 混合 GDN、FLy 熵门控延迟验证 (SGLang)、top-k/top-p 截断、EAGLE 块丢弃移除 |
| **KV缓存架构** | vLLM, SGLang | 统一内存 (SGLang)、大页 KV 分配器 (vLLM)、前瞻哈希前缀缓存 (vLLM)、请求级前置填充进度追踪 |
| **量化内核** | vLLM, llama.cpp | Humming 替代方案 (vLLM #65560)、bitsandbytes/GGUF 插件迁移 (vLLM #39583)、BF16 RMS_NORM (llama.cpp)、AMD 上 MXFP8 (vLLM) |
| **分布式KV** | vLLM, SGLang | NVLink/RDMA 上的分布式 engram 池 (vLLM)、请求级晋升的 KV 卸载、PCP rank 同步 |
| **AMD ROCm 内核** | vLLM, SGLang, Unsloth | MLA 融合、MXFP4/MXFP8 GEMM 调优、FlyDSL 内核、残差流 TP 分片 |
| **Rust 热路径移植** | LiteLLM | 预算预留、Prometheus 指标、S3 日志、并行请求限流、动态速率限制器 |
| **批处理与调度** | vLLM, SGLang | 前缀缓存预留 (SGLang)、TP4 并发-1 解码 (vLLM)、批次丢弃时 top-k 重新推导 |
| **扩散/图像生成** | SGLang, Unsloth | Ovis-Image 原生支持 (SGLang)、DiT 的 INT8 注意力 (Unsloth)、SiLU 查表优化 (SGLang)、VAE 分块 (SGLang) |
| **显存核算** | Ollama, LiteLLM | 自动 num_ctx 适配显存 (Ollama)、VRAM 分片修复 (Ollama)、MFU 权重字节 API (vLLM) |

**性能差距分析：**

- **Blackwell bs=1 解码** 在 SGLang 中比 bs=2 慢约 12 ms，原因是 `_w8a8_block_fp8_matmul` 中 CUDA graph 形状不匹配——这一微基准差距预计将快速弥合。
- **SM120 上 DeepSeek-V4 前置填充** SGLang 实现为 2–7K tok/s，而相同硬件下 vLLM/marlin 报告约 12.5K——表明存在 SGLang 特有的内核或内存布局问题。
- **llama.cpp v1.0.0** 将推测解码（NextN/specu）提升至生产就绪状态——这是一年前尚不可用的本地推理延迟优化手段。
- **LiteLLM 的 Rust 回调** 是本摘要中性能风险最高的工作——尚未发布基准测试，但其目标是消除日志/指标路径上的 Python GIL 竞争。

---

## 5. 层级定位

六个项目在技术栈中占据不同但日趋重叠的位置：

```
┌─────────────────────────────────────────────────────────────────┐
│  GATEWAY / ROUTING LAYER                                        │
│  LiteLLM ─ 多提供者代理，成本管理，可观测性                      │
└─────────────────────────────────┬───────────────────────────────┘
                                  │ OpenAI 兼容 API
┌─────────────────────────────────┴───────────────────────────────┐
│  SERVING ENGINE LAYER (生产级推理)                               │
│  vLLM ─ KV缓存引擎，推测解码，分布式服务                          │
│  SGLang ─ 路由器 + 调度器，多模态，RLHF，HiCache                  │
└─────────────────────────────────┬───────────────────────────────┘
                                  │ 模型加载，协议服务
┌─────────────────────────────────┴───────────────────────────────┐
│  LOCAL RUNTIME LAYER (开发者 / 终端用户)                         │
│  Ollama ─ 零配置本地推理，Metal/Vulkan/CUDA                      │
│  llama.cpp ─ 跨平台量化推理，全后端支持                           │
└─────────────────────────────────┬───────────────────────────────┘
                                  │ 训练梯度
┌─────────────────────────────────┴───────────────────────────────┐
│  FINE-TUNING / TRAINING LAYER                                   │
│  Unsloth ─ 训练内核，INT8 / 梯度检查点                           │
└─────────────────────────────────────────────────────────────────┘
```

**关键重叠与博弈：**

| 重叠领域 | 涉及项目 | 动态 |
|---------|----------|----------|
| Serving 引擎 | vLLM vs SGLang | 直接竞争，功能重叠；HiCache vs EAGLE，路由器 vs 代理 |
| 本地推理 | llama.cpp vs Ollama | llama.cpp 是运行时引擎；Ollama 为其封装了用户体验和分发能力 |
| 量化 API | vLLM vs llama.cpp | 两者均暴露量化配置；vLLM 新增的 `get_weight_byte_size()` API 与 llama.cpp 的按类型布局报告机制对标 |
| 推测解码 | vLLM vs llama.cpp | 两者均在推进 spec decode 生产化；llama.cpp 方案更简洁（NextN），vLLM 更复杂（DSpark/MTP） |
| AMD 支持 | vLLM vs SGLang vs Unsloth | 三者均在 AMD ROCm 上积极投入——从纯 NVIDIA 优化转向的显著信号 |

---

## 6. 趋势信号

### 从今日动态中提炼的行业趋势

**1. Blackwell (SM120) 是整个生态系统的关键缺口。**
vLLM 和 SGLang 均存在功能性 Blackwell 问题，阻塞生产环境使用。llama.cpp 尚未以 Blackwell 为目标。这是当前最大的基础设施缺口——预计三个引擎将在未来 4–8 周内完成 SM120 支持的收敛。

**2. AMD MI355X / gfx950 已不再是次要目标。**
今日跨 vLLM、SGLang 和 Unsloth 的 ROCm 专项 PR 数量——MXFP8 GEMM、MLA 融合、残差流 TP 分片、FlyDSL 内核——表明 AMD 数据中心 GPU 栈已升级为一级优化目标。持有 MI300/MI350 部署的组织预计将在 2026 年 Q1 获得显著的性能提升。

**3. Rust 正在渗透每一层，包括网关层。**
LiteLLM 的 Rust 回调移植（Prometheus、S3、预算、速率限制器）标志着新阶段：即便是 Python 中心的代理基础设施也在将热路径迁移至 Rust。这与 vLLM 早先的 CUDA 到 Rust 迁移如出一辙，揭示了 Python 日益成为编译性能代码之上编排层的事实。

**4. 推测解码正在成为基础设施标配。**
vLLM（DSpark、EAGLE、MTP）、SGLang（HiCache、FLy）和 llama.cpp（NextN/specu）均保有活跃的推测解码工作。各方案的多样性（基于树 vs 基于链、硬件相关、熵门控）表明该功能仍在快速演进——运维人员应预期 API 和配置表面将进一步扩展。

**5. 统一内存架构正在成为下一代 KV 缓存范式。**
SGLang 的统一内存提案和 vLLM 的大页 KV 分配器均旨在用动态自适应 GPU 内存分配替代固定大小的 KV 分区。这将以更深层的与服务引擎和内存分配器的耦合为代价，换取运维配置的简化。

**6. 量化后端正在整合。**
vLLM 的 Humming 替代方案 RFC（#65560）和 bitsandbytes/GGUF 插件驱逐提案（#39583）表明"每种量化格式都驻留内核树内"的时代正在终结。下游项目和运维方应提前准备迁移路径。

**7. 本地推理正在成熟为产品层。**
Ollama 对 DeepSeek V4.1 Flash MLX 的支持、Claude Desktop CLI 集成以及自动显存适配，使其日益具备作为应用运行时的可行性，而不仅仅是开发者工具。"本地推理"与"生产推理"之间的差距在中规模部署场景下正在快速收窄。

### Agent / 应用开发者应关注的事项

| 关注事项 | 重要性 | 时间线 |
|------------|---------------|----------|
| **Blackwell SM120 修复** | 释放下一代消费级 GPU 推理能力用于 Agent 场景 | 4–8 周 |
| **SGLang v1.0 就绪状态** | 将定义路由配置的 1.x 兼容性保证 | 2–4 周 |
| **llama.cpp v1.0 迁移** | 旧公共 API 已移除；下游库需同步更新 | 即刻 |
| **LiteLLM Rust 回调稳定版** | 将决定高吞吐代理部署能否彻底摆脱 Python GIL | 2–4 个版本 |
| **vLLM Humming 迁移** | 自定义量化集成需同步迁移路径 | 1–2 个月 |
| **统一内存 (SGLang)** | 简化多模型部署的内存配置 | 1–2 个月 |
| **AMD gfx1151 (Strix Halo) 支持** | 释放下一代 AMD APU 笔记本上的高效本地推理能力 | 活跃中，4–6 周 |

---

*本跨项目动态摘要基于 2026-11-14 GitHub 活动汇总编制。原始数据来源于 vLLM、SGLang、llama.cpp、Ollama、LiteLLM 及 Unsloth 公开代码库。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the technical report from English to Simplified Chinese. I need to:
1. Translate all the English text to Simplified Chinese
2. Preserve all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, issue/PR references, code, numbers, dates as-is
4. Use natural technical Chinese register
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section.
</think>


# vLLM 项目简报 — 2026-11-14

## 1. 今日要点

vLLM 社区正全力推进 Blackwell（SM120）和 AMD MI355X 的支持工作，多个 PR 和 Issue 都在针对 DeepSeek-V4.1-Flash 和 Qwen3.8 在新架构上的性能表现进行优化。一项重要的 RFC（#65560）提议用更全面的 Humming 库替换遗留的 Marlin 量化内核，覆盖所有 NVIDIA GPU；与此同时，另一项 RFC（#39583）则建议将 bitsandbytes 和 GGUF 迁出代码库作为树外插件，以减轻维护负担。在稳定性方面，FP8 KV 缓存在 Qwen-VL 模型上静默损坏输出的正确性 Bug 仍未修复，负载均衡器在长时间运行的部署中持续出现退化。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 |
|------|---------|
| **过去 24 小时内无新版本发布**。 | — |

---

## 3. 新模型与硬件支持

| 类别 | 项目 | 链接 |
|----------|------|------|
| **SM120（Blackwell）** | DeepSeek-V4.1-Flash 在启用 `--enforce-eager` 时解码吞吐**极低**；CUDA Graph 目前无法使用。社区正在呼吁优先修复 SM120 的图捕获问题。 | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **SM8x（Ampere A100/A800）** | DeepSeek-V4-Flash 和 DeepSeek-V4-Flash-0731 检查点目前**无法在 Ampere 硬件上运行**。围绕启用 SM8x 支持的讨论非常活跃（130 条评论）。 | [#50576](https://github.com/vllm-project/vllm/issues/50576) |
| **AMD gfx950 / MI355X** | 多项追踪中的优化工作正在落地，针对 DeepSeek-V4.1-Flash、Qwen3.8-2.4T、Qwen3.8-Flash-Next 和 Muse Spark Open，使用 AITER 调优的 FlyDSL 内核、MXFP8 激活量化和残差流 TP 分片。 | [#67377](https://github.com/vllm-project/vllm/pull/67377)、[#66587](https://github.com/vllm-project/vllm/issues/66587)、[#57149](https://github.com/vllm-project/vllm/issues/57149)、[#59575](https://github.com/vllm-project/vllm/issues/59575)、[#63085](https://github.com/vllm-project/vllm/pull/63085) |
| **ROCm / RDNA3** | Bug 报告：RCCL 在 gfx1100（RDNA3）上以 TP=2 启动时失败。 | [#38587](https://github.com/vllm-project/vllm/issues/38587) |
| **GH200 节点** | 在 NVIDIA GH200 超算节点（CUDA 13.1、离线计算节点）上安装失败。 | [#41373](https://github.com/vllm-project/vllm/issues/41373) |

---

## 4. 性能与优化

| 领域 | 描述 | PR / Issue |
|------|-------------|------------|
| **DeepSeek-V4.1-Flash TP4 并发=1** | 新 PR 在 GB300 上优化了延迟敏感型解码路径，配合 DSpark 投机解码。 | [#64364](https://github.com/vllm-project/vllm/pull/64364) |
| **DeepSeek-V4.1-Flash on MI355X（gfx950）** | MXFP8 密集 GEMM 和 `wo_a` 现已使用 AITER 调优的 FlyDSL 内核，将分块缩放 MXFP8 从 21–31% 峰值提升至 MXFP8 峰值。 | [#67377](https://github.com/vllm-project/vllm/pull/67377) |
| **Muse Spark Open（gfx942）** | PTPC-FP8 优化方案正在 AMD ROCm 上推进。 | [#64018](https://github.com/vllm-project/vllm/issues/64018) |
| **Muse Spark Open 残差流** | 将完整残差流按 TP 排名分片到 ROCm 上，消除注意力层和 MoE 集合通信之间每排名上的冗余计算。 | [#63085](https://github.com/vllm-project/vllm/pull/63085) |
| **DSpark 编译缓存** | Bug 修复：`SpeculativeConfig.compute_hash()` 现已包含投机深度，防止不同深度运行 DFlash/DSpark 之间错误共享缓存。 | [#53292](https://github.com/vllm-project/vllm/pull/53292) |
| **Spec Decode top-k/top-p 截断** | PR 将加载时掩码扩展到包含活跃 `top_k` 的行，在目标 logit 验证阶段更早应用截断。 | [#66534](https://github.com/vllm-project/vllm/pull/66534) |
| **EAGLE block dropping 移除** | 重构移除了遗留的 EAGLE block dropping 机制，改用 lookahead 哈希，前缀缓存和所有树内 KV 连接器现已统一使用该机制。 | [#66234](https://github.com/vllm-project/vllm/pull/66234) |
| **Engram pool NVLink/RDMA** | 新增 `vllm/distributed/engram_pool/` 将只读查找表通过 NVLink 或 RDMA 分片到多个引擎，改善分布式推理。 | [#67539](https://github.com/vllm-project/vllm/pull/67539) |
| **在线量化直接重载** | 支持直接重载在线量化层，共享冷启动 PWAL 路径。 | [#67576](https://github.com/vllm-project/vllm/pull/67576) |
| **MFU / MBU 估算器** | 新增 `QuantizationConfig.get_weight_byte_size()` API，允许树外量化方法自行上报内存布局以实现精确的 MFU 计算。 | [#65143](https://github.com/vllm-project/vllm/pull/65143) |
| **Prefill 进度上报** | 功能新增 gRPC 上的逐请求 prefill 进度上报，使路由器部署中的精确按请求计费成为可能。 | [#63160](https://github.com/vllm-project/vllm/pull/63160) |
| **GPU 时序进入 iteration 指标** | 可选的 CUDA event 粒度 GPU 耗时追踪已加入 iteration 日志。 | [#61690](https://github.com/vllm-project/vllm/pull/61690) |

---

## 5. 稳定性与回归

| 严重性 | Bug | 状态 | 修复 PR |
|----------|-----|--------|--------|
| **🔴 严重** | `kv_cache_dtype="fp8_e5m2"` 在 Qwen2-VL 和 Qwen2.5-VL 默认缩放下**静默损坏输出**。 | 开放中（9 条评论） | — |
| **🔴 严重** | 负载均衡器在 48–72 小时长响应推理后无法沿数据并行轴分配样本。 | 开放中（6 条评论） | — |
| **🔴 严重** | MTP 投机解码在强制拒绝场景下，于 Qwen3.8-27B（GDN 混合）在 K≥5、n≥8、L≥192 时与仅目标行为发散。 | 开放中（8 条评论） | — |
| **🟡 中等** | DeepSeek-V4 在 CUDA graph 下并发相同输入时输出乱码。 | 开放中（6 条评论） | — |
| **🟡 中等** | CPU spec decode `expand_kernel` shim 丢弃输出——非贪心解码将未初始化内存作为 temperature/top_k/top_p 消费。 | **已关闭** | [#55005](https://github.com/vllm-project/vllm/issues/55005) |
| **🟡 中等** | Muse Spark RL loader 在稀疏更新时对未修改的 patched 路由元素重复应用 `output_multiplier`。 | 开放中 | [#67582](https://github.com/vllm-project/vllm/pull/67582) |
| **🟡 中等** | `MoeWNA16Config` 拒绝 AWQ 键名（`w_bit`/`q_group_size`），仅接受 GPTQ 键——抛出 `ValueError`。 | 开放中 | [#66488](https://github.com/vllm-project/vllm/pull/66488) |
| **🟡 中等** | FlashInfer 单侧 workspace 在引擎 teardown 时未释放，导致资源泄漏。 | 开放中 | [#63874](https://github.com/vllm-project/vllm/pull/63874) |

---

## 6. 对应用开发者的影响

### 可操作的建议

1. **Blackwell（SM120）部署**：DeepSeek-V4.1-Flash 在 RTX PRO 6000 Blackwell 上禁用 CUDA Graph 时解码吞吐极低。如果当前需要 Blackwell 支持，请关注 [#56892](https://github.com/vllm-project/vllm/issues/56892) 的图捕获修复进度，并将 Ampere 或 Hopper 作为更稳定的生产目标。

2. **Qwen-VL 上的 FP8 KV 缓存**：如果使用 `--kv-cache-dtype fp8_e5m2` 运行 Qwen2-VL 或 Qwen2.5-VL，**输出可能静默错误**。请避免此组合直到 Bug 修复。关注 [#41343](https://github.com/vllm-project/vllm/issues/41343)。

3. **长时间运行的负载均衡部署**：负载均衡器在 48–72 小时后的退化意味着应在生产推理集群上实现健康检查重启机制，或密切监控 token 分布漂移。参见 [#40279](https://github.com/vllm-project/vllm/issues/40279)。

4. **量化路径演进**：Humming 替换 RFC（#65560）和 bitsandbytes/GGUF 插件迁移（#39583）表明量化后端正在整合。如果维护自定义量化集成，现在正是与新的 `QuantizationConfig.get_weight_byte_size()` API 对齐的时机。

5. **AMD ROCm 用户**：MI355X（gfx950）的大量优化正在快速落地——特别是 DeepSeek-V4.1-Flash 和 Qwen3.8。如果使用 AMD 硬件，这些变更将实质性改善吞吐；请关注 [#66587](https://github.com/vllm-project/vllm/issues/66587) 和 [#57149](https://github.com/vllm-project/vllm/issues/57149) 下堆积的 PR。

6. **投机解码**：DFlash/DSpark 编译缓存隔离现已修复（#53292）。如果使用变深度投机解码，请确保使用包含此修复的构建版本，以避免错误的 CUDA Graph 形状被缓存。

7. **前缀缓存**：EAGLE block-dropping 移除（#66234）收紧了前缀缓存语义——请验证使用长共享脚手架的 RAG/Agent 工作负载是否仍能如预期受益，因为 lookahead 哈希路径现已主导行为。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate the entire content while:
1. Preserving the Markdown structure exactly
2. Keeping URLs, numbers, issue/PR references as-is
3. Keeping technical terms, project names, repository slugs, file paths, config identifiers in their original form
4. Using natural technical Chinese - not literal word-for-word

Let me translate section by section:

**Title**: SGLang Digest — 2026-11-14

**Section 1: Today's Highlights**
- SGLang 1.0 approaches → SGLang 1.0 即将发布
- Unified Memory → Unified Memory（统一内存）
- RTX 50-series "Blackwell" (SM120) → RTX 50 系列 "Blackwell"（SM120）
- HiCache bug on hybrid GDN models → HiCache 混编 GDN 模型 bug
- host-tier hits drop to zero → host 层命中率降至零

**Section 2: Releases & Breaking Changes**
- SGLang 1.0 Release Tracker → SGLang 1.0 发版追踪
- 1.0 is positioned as a stability release → 1.0 定位为稳定性版本
- silent config changes with explicit errors → 将静默配置变更改为显式报错
- 1.x compatibility policy → 1.x 兼容性策略
- Upgrading from 0.5.x may require changes → 从 0.5.x 升级可能需要改动代码

**Section 3: New Model & Hardware Support**
- RTX 50-series (SM120/Blackwell) → RTX 50 系列（SM120/Blackwell）
- Cannot run any model out-of-the-box → 无法开箱即用地运行任何模型


- CUDA 13 wheel install produces non-functional binary → CUDA 13 wheel 安装后生成的是不可用的二进制文件

For the AMD ROCm section, I need to handle the technical terms carefully. The key points are the Kimi-K2.5 MXFP4 MLA value projection fusion work, the fp8-Q asm verification query in the fused Q/cache launch, and the aiter DSpark MHA draft on non-causal unified_attention.

The DCP MLA verify at aiter also has native head support, along with entropy-gated deferred verification for draft-model speculative decoding (FLy). On the NPU side, P0 RLHF lifecycle coverage is complete with memory release/resume, pause/continue, and weight refit capabilities. The Q4 2026 roadmap covers multimodal support for models and serving features, while the Cambricon MLU backend support is also in the roadmap phase.

For video multimodal processing, the max_frames and max_tokens_per_frame parameters are now being passed to multimodal processors. Ovis-Image 7B is being integrated as native text-to-image support via Diffusers, and VAE tiling is being fixed for Sana models in the AutoencoderDC implementation. MiniMax-H3 AdaLN cache stats are also exposed in performance dumps.

In the performance section, there's a notable issue with DeepSeek-V4 prefill performance on SM120 using 4× RTX PRO 6000 with tensor parallelism of 4. The performance is around 2–7K tokens per second, which falls significantly short compared to vLLM/marlin achieving approximately 12.5K tokens per second on the same hardware configuration. Additionally, DeepSeek-V4.1's decode step at batch size 1 takes roughly 12 ms longer than batch size 2, suggesting potential optimization opportunities in the model's inference pipeline. The Unified Memory Architecture consolidates KV cache, sliding-window KV cache, and recurrent state into a single GPU memory arena, eliminating fixed partitions and enabling dynamic capacity adaptation. HiCache Mamba's host pool can now be independently controlled via the `--hicache-mamba-size-gb` flag, while the scheduler's `--prefill-cache-reserve` parameter reserves KV/state slots for cached prefixes to prevent prefix cache collapse under multi-turn agent traffic. Diffusion operations replace runtime SiLU with precomputed lookup tables on sm_10x architecture.

The top-k sampling flags are re-derived when batch sizes drop to avoid stale path selection, and an extension point for causal Conv1D enables out-of-tree dispatch without modifying module globals at runtime. Prompt and cache accounting have been aligned across Chat, Completions, Responses, and Messages APIs. An optional `toktier` backend using exact incremental tokenization with chunk-parallel CPU processing is proposed for tokenizer optimization. AdaLN cache statistics are now exposed in performance dumps for MiniMax-H3, distinguishing between device hits, host restores, and cache builds. NPU end-to-end tests cover memory, pause/continue, and weight refit lifecycle operations. The RTX 50-series (SM120) remains completely non-functional with CUDA 13 wheels, while a critical HiCache bug in hybrid GDN mode causes host Mamba pool exhaustion and host-tier hits to drop to zero.

The scheduler's `session_held_tokens` walk triggers a double-free or corruption error that hangs the server permanently. FP8 block-quantized checkpoints on SM86 produce incorrect tokens with the overlap scheduler but work correctly without it, affecting RTX 3090. GLM-5.3-Flash NVFP4 logits become NaN after certain decode steps where batch size transitions trigger CUDA-graph resizing. The sgl-router endpoint returns 400 errors when requests include inline `role="system"`.

Performance degrades significantly on Intel XPU with chunk prefill running 2.6× slower since a recent change. The FlashInfer autotune cache gets discarded on every boot when per-rank MoE GEMM shapes differ, requiring re-tuning. HiCache triggers "CTA Not Present" errors on Blackwell B200 GPUs across multiple instances under agentic workloads. CUDA coredumps are being auto-collected from PR tests with extensive tracking, while CI shows 1 broken and 4 flaky tests among recent fixes. AMD GPU PR tests are also failing.

For developers, there are critical blockers to address: RTX 50-series users should avoid the current CUDA 13 wheels since they're incompatible with Blackwell consumer GPUs, and multi-turn agentic workloads need the new `--prefill-cache-reserve` flag to prevent prefix cache collapse during long sessions. GLM-5.3-Flash NVFP4 combined with speculative decoding risks NaN outputs, so that combination should be avoided.

On the optimization side, MoE models running with expert parallelism greater than 1 incur a startup penalty as the FlashInfer autotune cache rebuilds each boot, and DeepSeek-V4.1 decode performance at batch size 1 lags about 12 milliseconds behind batch size 2. The SGLang 1.0 release will introduce breaking changes to config handling—silent misconfigurations will become explicit errors—while Unified Memory will eventually simplify the `--mem_fraction_static` tuning process for KV and state management. AMD ROCm users should monitor the aiter backend and MLA kernel improvements for Kimi-K2.5 and K3 workloads on MI300/MI350 hardware.

Video multimodal support is maturing with new per-video tokenization controls available, making it worth evaluating for relevant use cases. I should also update the README to reflect these capabilities.
</think>


# SGLang 日报 — 2026-11-14

## 1. 今日要点

随着 SGLang 1.0 临近，社区正在对代码库进行稳定性加固——一个全新的 **Unified Memory**（统一内存）路线图 issue 正在推进将 KV、滑动窗口 KV 和循环状态统一到单一 GPU 内存池的工作。在稳定性方面，RTX 50 系列"Blackwell"（SM120）仍然**完全无法运行**，CUDA 13 wheel 安装后即无法工作；同时一个关键的 HiCache 混编 GDN bug 导致当工作集超过约 3 个长前缀后，host 层命中率降至零。性能方面的工作集中在 AMD ROCm（MLA 融合、aiter 后端优化）和 DeepSeek-V4.1 内核覆盖上。

---

## 2. 发版与破坏性变更

| 变更 | 详情 | 参考 |
|------|------|------|
| **SGLang 1.0 发版追踪** | 1.0 定位为稳定性发版；将把静默配置变更改为显式报错，并定义 1.x 兼容性策略。从 0.5.x 升级可能需要改动代码。 | [#50045](https://github.com/sgl-project/sglang/issues/50045) |
| NPU Router GEMM fp32（已关闭） | Router GEMM 现在在 NPU 上始终返回 fp32——此前返回 bf16。 | [#34861](https://github.com/sgl-project/sglang/issues/34861) |
| Kimi-K2.5 Vision Grad Mode（已关闭） | 修复了 vision projection 在调用方 grad mode 下运行而非强制推理模式的问题。 | [#49964](https://github.com/sgl-project/sglang/pull/49964) |

**过去 24 小时内无官方发版。**

---

## 3. 新模型与硬件支持

| 领域 | 项目 | 状态 | 参考 |
|------|------|------|------|
| **RTX 50 系列（SM120/Blackwell）** | **无法开箱即用地运行任何模型**，CUDA 13 wheel 安装后生成的是不可用二进制 | 🔴 损坏 | [#49209](https://github.com/sgl-project/sglang/issues/49209) |
| AMD ROCm | Kimi-K2.5 MXFP4 MLA value projection 融合已落地 | ✅ 进行中 | [#33873](https://github.com/sgl-project/sglang/pull/33873) |
| AMD ROCm | Kimi-K3 fp8-Q asm 在 fused Q/cache launch 中的验证查询 | ✅ 进行中 | [#48878](https://github.com/sgl-project/sglang/pull/48878) |
| AMD ROCm | aiter DSpark MHA draft，作用于非因果 unified_attention | ✅ 进行中 | [#47437](https://github.com/sgl-project/sglang/pull/47437) |
| AMD ROCm | DCP MLA verify at aiter 的 native head 支持 | ✅ 进行中 | [#47591](https://github.com/sgl-project/sglang/pull/47591) |
| AMD ROCm | FLy 的熵门控延迟验证，用于 draft-model 投机解码 | ✅ 进行中 | [#50238](https://github.com/sgl-project/sglang/pull/50238) |
| NPU（Ascend） | P0 RLHF 生命周期覆盖率已补充（内存释放/恢复、pause/continue、weight refit） | ✅ 已合入 | [#49289](https://github.com/sgl-project/sglang/pull/49289) |
| NPU（Ascend） | 2026 Q4 多模态路线图（模型支持与 serving 特性） | 🟡 路线图 | [#43519](https://github.com/sgl-project/sglang/issues/43519) |
| 寒武纪 MLU | 后端支持路线图 | 🟡 路线图 | [#45615](https://github.com/sgl-project/sglang/issues/45615) |
| 多模态（视频） | 视频 item 的 `max_frames` 和 `max_tokens_per_frame` 现已透传给多模态处理器 | ✅ 进行中 | [#50407](https://github.com/sgl-project/sglang/pull/50407) |
| 扩散模型（图像） | Ovis-Image 7B 原生 text-to-image 支持，通过 Diffusers 实现 | ✅ 进行中 | [#43152](https://github.com/sgl-project/sglang/pull/43152) |
| 扩散模型 | Sana 模型的 VAE tiling 修复（AutoencoderDC） | ✅ 进行中 | [#34514](https://github.com/sgl-project/sglang/pull/34514) |
| 扩散模型 | MiniMax-H3 AdaLN cache 统计信息已暴露在 perf dump 中 | ✅ 进行中 | [#43220](https://github.com/sgl-project/sglang/pull/43220) |

---

## 4. 性能与优化

### DeepSeek-V4 / V4.1
| 问题 | 现象 | 参考 |
|------|------|------|
| **DeepSeek-V4 prefill on SM120**（4× RTX PRO 6000，TP=4） | 约 2–7K tok/s，而 vLLM/marlin 在同硬件下报约 12.5K | [#33422](https://github.com/sgl-project/sglang/issues/33422) |
| **DeepSeek-V4.1 decode step at bs=1** | 比 bs=2 慢约 12 ms；`_w8a8_block_fp8_matmul` 在 bs-1 CUDA graph 中每次调用慢约 1.7 倍 | [#49900](https://github.com/sgl-project/sglang/issues/49900) |
| SM90 attention for packed FP4 Main KV | DeepSeek-V4.1 SM90 内核工作第 2/N 部分 | [#43852](https://github.com/sgl-project/sglang/pull/43852) |

### 内存与缓存
| 优化 | 影响 | 参考 |
|------|------|------|
| **Unified Memory Architecture** | 将 KV、滑动窗口 KV、循环状态统一到单一 GPU 内存池——消除固定分区，动态适配容量 | [#49944](https://github.com/sgl-project/sglang/issues/49944) |
| HiCache Mamba host pool 大小可配置 | 新增 `--hicache-mamba-size-gb` flag，将 HiCache Mamba host pool 与 KV host pool 解耦独立控制 | [#47867](https://github.com/sgl-project/sglang/pull/47867) |
| Scheduler 为缓存前缀预留 KV/state slot | 新增 `--prefill-cache-reserve`，在多轮 agent 流量场景下为缓存前缀保留 KV/state slot，防止 prefix cache 崩溃 | [#50213](https://github.com/sgl-project/sglang/pull/50213) |

### 内核与调度
| 优化 | 详情 | 参考 |
|------|------|------|
| Diffusion SiLU table lookup | 在 sm_10x 上用预计算表替代运行时 SiLU；目标场景为 MiniMax-H3 T2VA（1344×768，124 frames） | [#50390](https://github.com/sgl-project/sglang/pull/50390) |
| Sampling top-k re-derivation | 当 running batch 退出某些 row 时重新推导 top-k flag，避免选择过期路径 | [#50400](https://github.com/sgl-project/sglang/pull/50400) |
| Out-of-tree Conv1D dispatch | 为 causal Conv1D 提供扩展点，无需在运行时替换 module globals | [#38751](https://github.com/sgl-project/sglang/pull/38751) |
| Prompt/cache accounting 对齐 | 在 Chat、Completions、Responses 和 Messages API 间统一用量报告 | [#46091](https://github.com/sgl-project/sglang/pull/46091) |
| Tokenizer backend RFC | 提出可选的 `toktier` backend，用 exact incremental + chunk-parallel CPU tokenization | [#44374](https://github.com/sgl-project/sglang/issues/44374) |

### API 与可观测性
| 变更 | 描述 | 参考 |
|------|------|------|
| KV/state slot reserve | 防止多轮对话中 prefix cache 崩溃 | [#50213](https://github.com/sgl-project/sglang/pull/50213) |
| AdaLN cache stats | MiniMax-H3：device hits、host restores、builds 现可区分 | [#43220](https://github.com/sgl-project/sglang/pull/43220) |
| RLHF P0 覆盖率 | NPU 端到端测试覆盖内存、pause/continue、weight refit 生命周期 | [#49289](https://github.com/sgl-project/sglang/pull/49289) |

---

## 5. 稳定性与回归

### 🔴 严重（RTX 50 系列 / SM120）
| Bug | 影响 | 参考 |
|-----|------|------|
| **SM120（RTX 50 系列）无法运行任何模型** | CUDA 13 wheel 安装后生成不可用二进制，无开箱即用体验 | [#49209](https://github.com/sgl-project/sglang/issues/49209) |

### 🔴 严重（正确性）
| Bug | 影响 | 参考 |
|-----|------|------|
| **HiCache 混编 GDN：host 层命中率 → 零** | 当被驱逐工作集超过约 3 个长前缀时；KV 留在 host 而 Mamba host pool 已耗尽 | [#45400](https://github.com/sgl-project/sglang/issues/45400) |
| **Scheduler `double free or corruption`** | `session_held_tokens` 遍历触发 abort；server 永久挂起；idle-loop 断言时触发 | [#42508](https://github.com/sgl-project/sglang/issues/42508) |
| **SM86 上 FP8 block 量化 checkpoint 错误 token**（FP8 Marlin） | overlap scheduler 下间歇性产生错误 token；去掉则正常；影响 RTX 3090 | [#45000](https://github.com/sgl-project/sglang/issues/45000) |
| **GLM-5.3-Flash NVFP4 NaN logits**（EAGLE） | 在某个 decode step 之后（其 batch 被 padding 到下一个 CUDA-graph size，即 bs-9 → bs-10 时）锁死为 NaN，后续所有请求均受影响 | [#49881](https://github.com/sgl-project/sglang/issues/49881) |
| **sgl-router `/v1/messages` → 400** | 包含 inline `role="system"` 的请求返回 400 错误 | [#50348](https://github.com/sgl-project/sglang/issues/50348) |

### 🟠 高（性能 / 内存）
| Bug | 影响 | 参考 |
|-----|------|------|
| **FlashInfer autotune cache 在 MoE EP>1 时被丢弃** | 每台机器启动时 cache 被丢弃，因为 per-rank MoE GEMM shape 不同；fused-MoE tactic 每次从头重新调优 | [#40320](https://github.com/sgl-project/sglang/issues/40320) |
| **HiCache Xid 13 "CTA Not Present"** on Blackwell B200 | agentic 负载下 4 台机器 / 7 GPU 实例共崩溃 7 次；kvcacheio transfer kernels | [#46203](https://github.com/sgl-project/sglang/issues/46203) |
| **Intel XPU：GDN chunk prefill 慢 2.6 倍** | 自 #47944 起；K ≠ V 时 `recompute_w_u` 输出错误 | [#50249](https://github.com/sgl-project/sglang/issues/50249) |

### CI / 基础设施
| 问题 | 状态 | 参考 |
|------|------|------|
| **CUDA coredump tracker** | 自动收集自 pr-test.yml 的事件；361 条评论 | [#26340](https://github.com/sgl-project/sglang/issues/26340) |
| **CI 测试失败与修复追踪** | 1 broken，4 flaky，917 recently fixed | [#17050](https://github.com/sgl-project/sglang/issues/17050) |
| **AMD PR test 失败** | `test_torch_compile_moe.py::TestTorchCompileMoe.setUpClass` | [#45847](https://github.com/sgl-project/sglang/issues/45847) |
| **AITER upgrade gfx1250** | MI45x 验证待完成；无自动化 Scout CI | [#47562](https://github.com/sgl-project/sglang/issues/47562) |

### 最近关闭（不活跃/已修复）
| Bug | 处理结果 | 参考 |
|-----|----------|------|
| NPU Router GEMM fp32 | 已修复——router 现返回 fp32 | [#34861](https://github.com/sgl-project/sglang/issues/34861) |
| GLM-5.3 disagg decode + dp-attention + spec decode 崩溃 | 已关闭（不活跃） | [#39072](https://github.com/sgl-project/sglang/issues/39072) |
| Marlin atomicAdd K-slice reduction（死代码 `if not True:` guard） | 已关闭（不活跃） | [#39455](https://github.com/sgl-project/sglang/issues/39455) |
| ROCm MEM profiling 在 `_dump_snapshot` 中导致 TP server 崩溃 | 已关闭（不活跃） | [#39442](https://github.com/sgl-project/sglang/issues/39442) |
| 通过 orphan `bootstrap_room` 注入导致无界内存增长 | 已关闭（不活跃） | [#39428](https://github.com/sgl-project/sglang/issues/39428) |
| 混合格 chunk 导致混编 GDN 上 Mamba radix cache 损坏 | 已关闭（不活跃） | [#39342](https://github.com/sgl-project/sglang/issues/39342) |

---

## 6. 对应用开发者的影响

### 立即行动项

1. **暂避 RTX 50 系列（SM120）。** CUDA 13 wheel 在 Blackwell 消费级 GPU 上不可用。请关注 [#49209](https://github.com/sgl-project/sglang/issues/49209) 等待解决。如需 Blackwell，数据中心的 B200 受另一个 HiCache bug 影响（[#45400](https://github.com/sgl-project/sglang/issues/45400)）。

2. **多轮 agent 工作负载面临 prefix cache 崩溃风险。** 新增的 `--prefill-cache-reserve` flag（[#50213](https://github.com/sgl-project/sglang/pull/50213)）直接解决这个问题。在 GLM-5.3 或类似模型上运行 coding agent 或长会话时考虑启用。

3. **GLM-5.3-Flash NVFP4 + 投机解码 = NaN 风险。** EAGLE 投机解码器在特定 batch-size 切换后会锁死 NaN logits。请在该模型/量化组合上避免使用投机解码，直至 [#49881](https://github.com/sgl-project/sglang/issues/49881) 解决。

4. **MoE 模型开启 expert parallelism（EP > 1）会有启动开销。** FlashInfer autotune cache 每次启动时被丢弃（[#40320](https://github.com/sgl-project/sglang/issues/40320)）。这是当前已知行为，已在关注中。

5. **DeepSeek-V4.1 在 batch size 1 时 decode 比 batch size 2 慢约 12 ms。** 如果单流工作负载对单个 token 延迟敏感，考虑 batching 或关注 [#49900](https://github.com/sgl-project/sglang/issues/49900)。

### 即将变更——值得提前规划

- **SGLang 1.0** 将引入破坏性配置变更（静默配置错误将变为显式报错）。升级前请阅读 [#50045](https://github.com/sgl-project/sglang/issues/50045) 中的升级说明。
- **Unified Memory** 最终将消除分别调优 KV 和 state 的 `--mem_fraction_static` 的需求。建议尽早测试该特性分支。
- **AMD ROCm** 用户受益于持续的 aiter 后端和 MLA 内核工作。如果在 MI300/MI350 上运行 Kimi-K2.5 或 Kimi-K3，[#33873](https://github.com/sgl-project/sglang/pull/33873) 和 [#48878](https://github.com/sgl-project/sglang/pull/48878) 的性能改进值得评估。
- **视频多模态**支持日趋成熟——新增的 per-video `max_frames` 和 `max_tokens_per_frame` 控件（[#50407](https://github.com/sgl-project/sglang/pull/50407)）让开发者对视频 token 预算有了细粒度控制。

---

*本日报基于 [sgl-project/sglang](https://github.com/sgl-project/sglang) 的 GitHub 数据生成 — 2026-11-14*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese. Let me go through the content carefully and translate it while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, links, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

---

# llama.cpp Digest — 2026-11-14

## 1. 今日要点

项目发布 **v1.0.0** 版本，达成重要里程碑——移除了已废弃的公共 API，并提升了推测解码（NextN/specu）功能。后端优化全面展开，覆盖 CUDA/HIP、Vulkan 和 Metal，修复了 Metal 中的整数溢出问题，RMS_NORM 新增 BF16 支持。

---

## 2. 版本发布与破坏性变更

| 版本 | 变更 | 说明 |
|------|------|------|
| **v1.0.0** | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/v1.0.0) | 移除已废弃的公共 API；提升 NextN/specu 功能。详见[博客文章](https://huggingface.co/blog/ggml-org/llama-cpp-v1)。 |

> **迁移提示**：使用旧版公共 API 的项目，请在升级前迁移至 v1 API。详见博客文章中的迁移指南。

---

## 3. 新模型与硬件支持

| 类别 | 项目 | PR/Commit | 状态 |
|------|------|-----------|------|
| **新模型** | Zaya1 8B (Zyphra) | [#32071](https://github.com/ggml-org/llama.cpp/pull/32071) | 开放，待审核 |


| **新模型** | Granite4VisionForConditionalGeneration | [#32237](https://github.com/ggml-org/llama.cpp/pull/32237) | 开放 |
| **Hexagon 算子** | SSM_SCAN 运算支持 | [b12374](https://github.com/ggml-org/llama.cpp/commit/b12374) | 已合入 |
| **Hexagon 量化** | IQ2_XXS 和 NVFP4 权重 | [#31954](https://github

.com/ggml-org/llama.cpp/pull/31954) | 开放，待合入 |
| **HIP/GPU** | AMD gfx1013 (BC250) 作为 RDNA1 | [#32236](https://github.com/ggml-org/llama.cpp/pull/32236) | 开放 |
| **HIP/GPU** | RDNA3.5 few-row MMQ 配合 WMMA | [#32224](https://github.com/ggml-org/llama.cpp/pull/32224) | 开放 |

## 4. 性能与优化

### 已合入（最近 24 小时）

| 组件 | 变更 | 影响 |
|------|------|------|
| **CUDA/HIP** | 调优 GCN MMQ 配置 | [b12370](https://github.com/ggml-org/llama.cpp/commit/b12370) |
| **Hexagon** | 优化 buffer stacking (mmap) 减少 IOVA 碎片 | [b12368](https://github.com/ggml-org/llama.cpp/commit/b12368) |
| **CUDA** | 为非原生构建添加 SM103 SASS 支持 | [b12367](https://github.com/ggml-org/llama.cpp/commit/b12367) |
| **GGML (CPU/CUDA)** | RMS_NORM 支持 BF16 | [b12366](https://github.com/ggml-org/llama.cpp/commit/b12366) |
| **Vulkan** | TOP_K_MASK 算子 | [b12365](https://github.com/ggml-org/llama.cpp/commit/b12365) |
| **Vulkan** | 可选 device keepalive 防止驱动超时 | [b12363](https://github.com/ggml-org/llama.cpp/commit/b12363) |

### 开放中的 PR

| 组件 | 变更 | PR | 说明 |
|------|------|-----|------|
| **CUDA** | 在所有 Pascal GPU 上禁用量化 matvec 融合 | [#32239](https://github.com/ggml-org/llama.cpp/pull/32239) | 修复错误的 CC 检查 |
| **CUDA** | MMVF warp reduction 中避免并发共享内存写入 | [#32235](https://github.com/ggml-org/llama.cpp/pull/32235) | 修复数据竞争 |
| **HIP** | 使用 DPP 指令实现 sum reduction 的 DDP 路径 | [#32215](https://github.com/ggml-org/llama.cpp/pull/32215) | 比 LDS bridge 更快 |
| **HIP** | AMD GCN + MMQ 配置的 Stream-K 算法调优 | [#30022](https://github.com/ggml-org/llama.cpp/pull/30022) | PR 中有 benchmark |
| **OpenCL** | Adreno X1 的 Q4_K GEMM kernel | [#30948](https://github.com/ggml-org/llama.cpp/pull/30948) | 待合入 |
| **Jinja** | 减少模板渲染开销 | [#32023](https://github.com/ggml-org/llama.cpp/pull/32023) | 属于 #32002 优化工作 |

## 5. 稳定性与回归

### 已合入的关键修复

| 问题 | 修复 | PR |
|------|------|-----|
| **Metal**: `mul_mv` 目标偏移的 32 位整数溢出导致输出切片未写入 | 将偏移运算提升至 `uint64_t` | [#32221](https://github.com/ggml-org/llama.cpp/pull/32221) |

### 活跃中的问题（按严重程度）

| 严重程度 | 问题 | 后端 | 状态 |
|----------|------|------|------|
| **高** | Vulkan: Intel Arc A380 上 GLM-OCR 视觉编码器在处理全页图像时输出乱码 | Vulkan | [开放 #31836](https://github.com/ggml-org/llama.cpp/issues/31836) |
| **高** | HIP/gfx1151: SOLVE_TRI 在 Strix Halo 上以 `hipErrorInvalidImage` 中止 | HIP | [开放 #27557](https://github.com/ggml-org/llama.cpp/issues/27557) |
| **中** | Vulkan: `ggml_vk_wait_for_fence` 在驱动不报告设备丢失时无限循环 | Vulkan | [开放 #29926](https://github.com/ggml-org/llama.cpp/issues/29926) |
| **中** | Vulkan: Radeon 680M 上随机出现全 NaN logits | Vulkan | [开放 #31509](https://github.com/ggml-org/llama.cpp/issues/31509) |
| **中** | iGPU: CPU 驻留层通过 Vulkan 主机缓冲区占用设备内存 | Vulkan | [开放 #31538](https://github.com/ggml-org/llama.cpp/issues/31538) |
| **低** | Hexagon: Snapdragon 8 Gen 2 上 4B+ 参数时 `dspqueue_read` 失败 | Hexagon | [开放 #26123](https://github.com/ggml-org/llama.cpp/issues/26123) |

### 最近关闭（长期无响应/问题未确认）

| 问题 | 摘要 | 说明 |
|------|------|------|
| [#27845](https://github.com/ggml-org/llama.cpp/issues/27845) | 双 Intel B70 SYCL 上使用 `-sm tensor` 可能内存泄漏 | 因长期无响应关闭 |
| [#29623](https://github.com/ggml-org/llama.cpp/issues/29623) | AMD Radeon AI PRO R9700 上 Vulkan ErrorDeviceLost | 因长期无响应关闭 |
| [#28234](https://github.com/ggml-org/llama.cpp/issues/28234) | Termux 上 Vulkan shader 优化失败 | 因长期无响应关闭 |
| [#27783](https://github.com/ggml-org/llama.cpp/issues/27783) | `unicode_regex_split_stl` 中的 SIGSEGV — GPT-4o tokenizer 递归 | ~26k 字符输入时可能导致栈溢出 |

---

## 6. 这对应用开发者意味着什么

### 关键要点

1. **升级到 v1.0.0**：如果仍在使用旧版本，API 清理虽然移除了技术债务，但需先查阅[迁移指南](https://huggingface.co/blog/ggml-org/llama-cpp-v1)——已废弃的 API 已全部移除。

2. **推测解码已提升**：使用 `--spec-draft-p-min` 时请注意，工具现在会在与概率草案采样一起使用时发出警告，因为该场景下的接受率计算存在问题。

3. **Metal 批推理用户**：`mul_mv` 溢出修复解决了大批量输出时的正确性问题，如受影响请立即更新。

4. **AMD Vulkan 稳定性**：device keepalive 功能有助于防止驱动超时，通过 `GGML_VULKAN_DEVICE_KEEPALIVE` 环境变量进行调优。

5. **Hexagon 后端持续成熟**：SSM_SCAN 支持和新量化格式（IQ2_XXS、NVFP4）扩展了高通硬件上的状态空间模型支持。

6. **CUDA/ROCm Pascal 用户**：量化 matvec 融合现已正确禁用。

### 值得关注的活跃 PR

| PR | 描述 | 潜在影响 |
|----|------|----------|
| [#31489](https://github.com/ggml-org/llama.cpp/pull/31489) | Server daemon 模式 + `.sock` 控制端点 | 生产部署改进 |
| [#30267](https://github.com/ggml-org/llama.cpp/pull/30267) | 遵守 cgroup CPU 配额以确定默认线程数 | 改善容器化部署 |
| [#32240](https://github.com/ggml-org/llama.cpp/pull/32240) | SWA 层使用独立 KV cache 类型 | 滑动窗口注意力模型的内存优化 |

---

*摘要基于 [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) 生成 — 2026-11-14*
</think>


# llama.cpp 动态速报 — 2026-11-14

## 1. 今日要点

项目发布 **v1.0.0** 版本，达成重要里程碑——移除了已废弃的公共 API，并提升了推测解码（NextN/specu）功能。后端优化全面展开，覆盖 CUDA/HIP、Vulkan 和 Metal，修复了 Metal 中的整数溢出问题，RMS_NORM 新增 BF16 支持。

---

## 2. 版本发布与破坏性变更

| 版本 | 变更 | 说明 |
|------|------|------|
| **v1.0.0** | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/v1.0.0) | 移除已废弃的公共 API；提升 NextN/specu 功能。详见[博客文章](https://huggingface.co/blog/ggml-org/llama-cpp-v1)。 |

> **迁移提示**：使用旧版公共 API 的项目，请在升级前迁移至 v1 API。详见博客文章中的迁移指南。

---

## 3. 新模型与硬件支持

| 类别 | 项目 | PR/Commit | 状态 |
|------|------|-----------|------|
| **新模型** | Zaya1 8B (Zyphra) | [#32071](https://github.com/ggml-org/llama.cpp/pull/32071) | 开放，待审核 |
| **新模型** | Granite4VisionForConditionalGeneration | [#32237](https://github.com/ggml-org/llama.cpp/pull/32237) | 开放 |
| **Hexagon 算子** | SSM_SCAN 运算支持 | [b12374](https://github.com/ggml-org/llama.cpp/commit/b12374) | 已合入 |
| **Hexagon 量化** | IQ2_XXS 和 NVFP4 权重 | [#31954](https://github.com/ggml-org/llama.cpp/pull/31954) | 开放，待合入 |
| **HIP/GPU** | AMD gfx1013 (BC250) 作为 RDNA1 | [#32236](https://github.com/ggml-org/llama.cpp/pull/32236) | 开放 |
| **HIP/GPU** | RDNA3.5 few-row MMQ 配合 WMMA | [#32224](https://github.com/ggml-org/llama.cpp/pull/32224) | 开放 |

---

## 4. 性能与优化

### 已合入（最近 24 小时）

| 组件 | 变更 | 影响 |
|------|------|------|
| **CUDA/HIP** | 调优 GCN MMQ 配置 | [b12370](https://github.com/ggml-org/llama.cpp/commit/b12370) |
| **Hexagon** | 优化 buffer stacking (mmap) 减少 IOVA 碎片化 | [b12368](https://github.com/ggml-org/llama.cpp/commit/b12368) |
| **CUDA** | 为非原生构建添加 SM103 SASS 支持 | [b12367](https://github.com/ggml-org/llama.cpp/commit/b12367) |
| **GGML (CPU/CUDA)** | RMS_NORM 支持 BF16 | [b12366](https://github.com/ggml-org/llama.cpp/commit/b12366) |
| **Vulkan** | TOP_K_MASK 算子 | [b12365](https://github.com/ggml-org/llama.cpp/commit/b12365) |
| **Vulkan** | 可选 device keepalive 防止驱动超时 | [b12363](https://github.com/ggml-org/llama.cpp/commit/b12363) |

### 开放中的 PR

| 组件 | 变更 | PR | 说明 |
|------|------|-----|------|
| **CUDA** | 在所有 Pascal GPU 上禁用量化 matvec 融合 | [#32239](https://github.com/ggml-org/llama.cpp/pull/32239) | 修复错误的 CC 检查 |
| **CUDA** | MMVF warp reduction 中避免并发共享内存写入 | [#32235](https://github.com/ggml-org/llama.cpp/pull/32235) | 修复数据竞争 |
| **HIP** | 使用 DPP 指令实现 sum reduction 的 DDP 路径 | [#32215](https://github.com/ggml-org/llama.cpp/pull/32215) | 比 LDS bridge 更快 |
| **HIP** | AMD GCN + MMQ 配置的 Stream-K 算法调优 | [#30022](https://github.com/ggml-org/llama.cpp/pull/30022) | PR 中有 benchmark |
| **OpenCL** | Adreno X1 的 Q4_K GEMM kernel | [#30948](https://github.com/ggml-org/llama.cpp/pull/30948) | 待合入 |
| **Jinja** | 减少模板渲染开销 | [#32023](https://github.com/ggml-org/llama.cpp/pull/32023) | 属于 #32002 优化工作 |

---

## 5. 稳定性与回归

### 已合入的关键修复

| 问题 | 修复 | PR |
|------|------|-----|
| **Metal**: `mul_mv` 目标偏移的 32 位整数溢出导致输出切片未写入 | 将偏移运算提升至 `uint64_t` | [#32221](https://github.com/ggml-org/llama.cpp/pull/32221) |

### 活跃中的问题（按严重程度）

| 严重程度 | 问题 | 后端 | 状态 |
|----------|------|------|------|
| **高** | Vulkan: Intel Arc A380 上 GLM-OCR 视觉编码器在处理全页图像时输出乱码 | Vulkan | [开放 #31836](https://github.com/ggml-org/llama.cpp/issues/31836) |
| **高** | HIP/gfx1151: SOLVE_TRI 在 Strix Halo 上以 `hipErrorInvalidImage` 中止 | HIP | [开放 #27557](https://github.com/ggml-org/llama.cpp/issues/27557) |
| **中** | Vulkan: `ggml_vk_wait_for_fence` 在驱动不报告设备丢失时无限循环 | Vulkan | [开放 #29926](https://github.com/ggml-org/llama.cpp/issues/29926) |
| **中** | Vulkan: Radeon 680M 上随机出现全 NaN logits | Vulkan | [开放 #31509](https://github.com/ggml-org/llama.cpp/issues/31509) |
| **中** | iGPU: CPU 驻留层通过 Vulkan 主机缓冲区占用设备内存 | Vulkan | [开放 #31538](https://github.com/ggml-org/llama.cpp/issues/31538) |
| **低** | Hexagon: Snapdragon 8 Gen 2 上 4B+ 参数时 `dspqueue_read` 失败 | Hexagon | [开放 #26123](https://github.com/ggml-org/llama.cpp/issues/26123) |

### 最近关闭（长期无响应/问题未确认）

| 问题 | 摘要 | 说明 |
|------|------|------|
| [#27845](https://github.com/ggml-org/llama.cpp/issues/27845) | 双 Intel B70 SYCL 上使用 `-sm tensor` 可能内存泄漏 | 因长期无响应关闭 |
| [#29623](https://github.com/ggml-org/llama.cpp/issues/29623) | AMD Radeon AI PRO R9700 上 Vulkan ErrorDeviceLost | 因长期无响应关闭 |
| [#28234](https://github.com/ggml-org/llama.cpp/issues/28234) | Termux 上 Vulkan shader 优化失败 | 因长期无响应关闭 |
| [#27783](https://github.com/ggml-org/llama.cpp/issues/27783) | `unicode_regex_split_stl` 中的 SIGSEGV — GPT-4o tokenizer 递归 | ~26k 字符输入时可能导致栈溢出 |

---

## 6. 这对应用开发者意味着什么

### 关键要点

1. **升级到 v1.0.0**：如果仍在使用旧版本，API 清理虽然移除了技术债务，但需先查阅[迁移指南](https://huggingface.co/blog/ggml-org/llama-cpp-v1)——已废弃的 API 已全部移除。

2. **推测解码已提升地位**：使用 `--spec-draft-p-min` 时请注意，工具现在会在与概率草案采样一起使用时发出警告，因为该场景下的接受率计算存在错误（[b12364](https://github.com/ggml-org/llama.cpp/commit/b12364)）。

3. **Metal 批推理用户**：`mul_mv` 溢出修复（[#32221](https://github.com/ggml-org/llama.cpp/pull/32221)）解决了大批量输出时的正确性问题，如受影响请立即更新。

4. **AMD Vulkan 稳定性**：device keepalive 功能（[b12363](https://github.com/ggml-org/llama.cpp/commit/b12363)）有助于防止驱动超时，通过设置 `GGML_VULKAN_DEVICE_KEEPALIVE` 环境变量调优。

5. **Hexagon 后端持续成熟**：SSM_SCAN 支持和新量化格式（IQ2_XXS、NVFP4）扩展了高通硬件上的状态空间模型支持。

6. **CUDA/ROCm Pascal 用户**：量化 matvec 融合现已正确禁用在所有 Pascal GPU 上（[#32239](https://github.com/ggml-org/llama.cpp/pull/32239)）。

### 值得关注的活跃 PR

| PR | 描述 | 潜在影响 |
|----|------|----------|
| [#31489](https://github.com/ggml-org/llama.cpp/pull/31489) | Server daemon 模式 + `.sock` 控制端点 | 生产部署改进 |
| [#30267](https://github.com/ggml-org/llama.cpp/pull/30267) | 遵守 cgroup CPU 配额以确定默认线程数 | 改善容器化部署 |
| [#32240](https://github.com/ggml-org/llama.cpp/pull/32240) | SWA 层使用独立 KV cache 类型 | 滑动窗口注意力模型的内存优化 |

---

*摘要基于 [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) 生成 — 2026-11-14*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the GitHub digest from English to Simplified Chinese. I need to preserve the Markdown structure exactly while translating the content into natural technical Chinese.

Let me translate section by section:

1. Title: "Ollama Digest — 2026-11-14" - Keep as is or translate context appropriately
2. Section 1: Today's Highlights
3. Section 2: Releases & Breaking Changes
4. Section 3: New Model & Hardware Support
5. Section 4: Performance & Optimization
6. Section 5: Stability & Regressions
7. Section 6: What This Means for Application Developers

Key terms to translate consistently:
- "Highlights" → 要点/今日要点
- "Releases & Breaking Changes" → 发布与重大变更
- "New Model & Hardware Support" → 新模型与硬件支持
- "Performance & Optimization" → 性能与优化
- "Stability & Regressions" → 稳定性与回归问题
- "What This Means for Application Developers" → 对应用开发者的启示

I need to use natural technical Chinese register. Let me translate the content carefully, preserving all markdown formatting, URLs, numbers, etc.
</think>


# Ollama 日报 — 2026-11-14

## 1. 今日要点

Ollama 社区正在积极解决推理可靠性问题，涵盖 VRAM 核算、解析器正确性和 API 边界情况。一项重要 PR 落地——根据 GPU VRAM 预算自动调整 `num_ctx`；同时新增 MLX 对 DeepSeek V4.1 Flash 的支持，为 Apple Silicon 带来混合精度检查点能力。

---

## 2. 发布与重大变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| 无新版本发布 | 过去 24 小时内无版本发布 | — |

---

## 3. 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **DeepSeek V4.1 Flash (MLX)** | 支持 MXFP4/MXFP8 混合精度检查点，含主机端张量压缩、稀疏注意力、视觉模态、批量解码及对话/工具渲染 | [#19667](https://github.com/ollama/ollama/pull/19667) |
| **MLX-C + XGrammar 兼容性** | CMake 构建基础设施，允许打包者独立提供 MLX-C 和 XGrammar 二进制文件 | [#19688](https://github.com/ollama/ollama/pull/19688) |
| **Claude Desktop CLI 启动** | macOS 新增 `ollama launch claude-desktop` 子命令，支持 `--config` 标志 | [#19691](https://github.com/ollama/ollama/pull/19691) |
| **Wirken 集成** | Agent 网关已加入 `ollama launch` | [#18989](https://github.com/ollama/ollama/pull/18989) |
| **社区集成：SelectTranslate** | 浏览器扩展，使用本地 Ollama 模型进行网页翻译 | [#19695](https://github.com/ollama/ollama/pull/19695) |
| **社区集成：Recordist** | 会议录制工具，搭配本地 Ollama 驱动的笔记引擎 | [#19690](https://github.com/ollama/ollama/pull/19690) |

---

## 4. 性能与优化

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **按 VRAM 预算自动设置 `num_ctx`** | 新增能力：根据可用 GPU 显存自动设置上下文窗口大小，避免 VRAM 溢出和回退到 CPU | [#13619](https://github.com/ollama/ollama/pull/13619) |
| **VRAM 核算与 GPU 分配修复** | 修复四个相关问题（#19463、#18679、#18349、#16599），解决模型错误驱逐、加载被拒、以及不必要的 GPU 分散分配 | [#19632](https://github.com/ollama/ollama/pull/19632) |
| **`/compact` 遇 HTTP 413 时重试** | 重试时丢弃图片和旧历史记录项，使含截图的 Codex 长会话也能执行压缩 | [#19266](https://github.com/ollama/ollama/pull/19266) |
| **保留未建模的工具 schema 关键字** | 修复通过 API 传递的工具参数 schema 中 `default`、`minimum`、`maximum` 等字段丢失问题 | [#19686](https://github.com/ollama/ollama/pull/19686) |
| **处理 `keep_alive` int64 溢出** | 超长持续时间现 clamp 到最大值，而非溢出为负数 | [#18181](https://github.com/ollama/ollama/pull/18181) |
| **`/v1/completions` 返回 `logprobs`** | 向 OpenAI 兼容客户端暴露计算得到的对数概率 | [#19692](https://github.com/ollama/ollama/pull/19692) |
| **正确处理显式空 `SYSTEM ""`** | `SYSTEM` 设为空字符串时现在会清空基础模型的系统提示词，而非被忽略 | [#18990](https://github.com/ollama/ollama/pull/18990) |

---

## 5. 稳定性与回归问题

| 严重性 | 问题 | 描述 | 链接 |
|----------|-------|-------------|------|
| **🔴 高** | Windows `/api/chat` 长提示词 500 错误 | 提示词 ≥70k 字符时间歇性 HTTP 500 "chat prompt error"（延迟约 19s，`wsarecv reset`）；疑似 runner client keep-alive 问题 | [#19696](https://github.com/ollama/ollama/issues/19696) |
| **🔴 高** | qwen3.5/qwen3-coder 解析器数据损坏 | 工具调用参数损坏或调用丢失，取决于内容长度和流分块方式 | [#19694](https://github.com/ollama/ollama/issues/19694) |
| **🟠 中** | mimo-v2.6-pro:cloud 工具调用风暴 | 多轮 agent 会话中出现灾难性 flooding（数百个重复调用） | [#19672](https://github.com/ollama/ollama/issues/19672) |
| **🟠 中** | AMD Radeon 780M Vulkan 回归** | `Ollama >=0.32.10` 在 AMD 780M Vulkan 后端上报 `Not enough memory for command submission` | [#17748](https://github.com/ollama/ollama/issues/17748) *（已关闭）* |
| **🟡 低** | CUDA `unspecified launch failure` | 特定硬件上 CUDA 错误导致模型执行失败；存在 CPU-only 回退方案 | [#9247](https://github.com/ollama/ollama/issues/9247) *（已关闭）* |

**解析器空白符修复已合并：** PR [#19689](https://github.com/ollama/ollama/pull/19689) 丢弃了 `</think>` 后以独立流块到达的尾部空白符，修复了 DeepSeek3 和 Olmo3-Think 解析器中的双换行问题。

---

## 6. 对应用开发者的启示

- **Windows 长提示词用户**：在 #19696 修复前，避免向 `/api/chat` 发送 >70k 字符的提示词；遇到 500 错误时重试可作为临时方案。
- **工具调用流水线**：检查工具 schema 字段——`default`、`minimum`、`maximum` 现已正确保留（#19686），可能改变验证行为。
- **显存受限环境**：即将到来的自动 `num_ctx` 功能（#13619）将消除上下文大小调整的猜测；合并后请测试。
- **Apple Silicon 用户**：DeepSeek V4.1 Flash 混合精度现已原生支持 MLX（#19667），提升了 M 系列芯片本地推理的可行性。
- **Agent 会话场景**：若使用 `mimo-v2.6-pro:cloud`，请监控工具调用循环；建议提示词工程或换用其他模型，直到上游问题查明。
- **定价透明度**：云端用户可能需要关注 #17489 以了解缓存输入计费与数据保留的区别。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all text content while preserving the Markdown structure exactly
2. Keep URLs, version tags, issue/PR numbers, code, etc. as-is
3. Use natural technical Chinese appropriate for a developer newsletter
4. Output ONLY the translation, no preamble or explanation
5. Preserve formatting: tables, lists, headings, code blocks, etc.

Let me translate section by section:

**Section 1: Today's Highlights**
- "The LiteLLM team is aggressively pushing Rust callback ports across the proxy's hot paths: budgets, Prometheus metrics, S3 logging, parallel request limiting, and dynamic rate limiting are all landing as opt-in `LITELLM_NATIVE_*` features stacked on the new `CustomLoggerV2` contract."

This should be translated naturally. "hot paths" could be 热点路径 or 关键路径. "landing" here means being merged/rolled out.

Let me translate carefully, maintaining the technical register of a Chinese developer newsletter.
</think>


# LiteLLM 每日简报 — 2026-11-14

## 1. 今日要点

LiteLLM 团队正大力推进 Rust 回调在代理热点路径上的落地：预算管理、Prometheus 指标、S3 日志、并发请求限流和动态速率限制均将作为可选的 `LITELLM_NATIVE_*` 特性上线，基于新的 `CustomLoggerV2` 契约构建。在 Azure 侧，两个小型但关键的修复解决了 Foundry 项目 Responses 路径的问题（路径重复 + 多余的 `api-version` 参数），均已 backport 到 LTS 分支。与此同时，一个高流量的 Gemini 问题正在上报生产环境中的间歇性 503 和连接中断。

---

## 2. 版本发布与破坏性变更

| 版本 | 类型 | 说明 |
|---------|------|-------|
| `v1.111.0-dev.2` | 开发版 | Cosign 签名镜像；关键提交 `e82a3c6` |
| `v1.111.0-dev.1` | 开发版 | Cosign 签名镜像 |
| `v1.108.8` | **LTS** | 新 LTS 基线；拉取 `ghcr.io/berriai/litellm:lts` |
| `v1.106.10` | 稳定版 | 早期稳定版；cosign 签名 |

当前三个活跃的 Docker 镜像均已使用 `e82a3c6` cosign 密钥签名。验证方式：
```bash
cosign verify \
  --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c6/cosign.pub \
  ghcr.io/berriai/litellm:v1.108.8
```

**破坏性变更（已合并）：** PR #48846 将图片通过 `state` 数组发送至 Perplexity 和 OpenRouter 决策模型。使用 `drop_params` 的调用方在处理图片请求时可能出现行为变化。

---

## 3. 新模型与硬件支持

| 提供商 | 新增内容 | PR / Issue |
|----------|----------|------------|
| **Vispark** | 新提供商，支持 Vision Small / Medium / Large 模型；自动重塑请求以满足 Vispark 600 token 最低计费 | [#41192](https://github.com/BerriAI/litellm/pull/41192) |
| **Azure Foundry — Kimi K3** | `reasoning_effort` 和 `reasoning_content` 参数现已正确转发 | [#51747](https://github.com/BerriAI/litellm/pull/51747) |
| **Perplexity & OpenRouter 决策模型** | `/v1/decisions` 和 `/v1/systemone` 接口的 `state` 数组现已支持图片 | [#48846](https://github.com/BerriAI/litellm/pull/48846) |
| **自定义 LLM + Gemini 原生路由** | 通过 `custom_provider_map` 注册的自定义提供商现在可提供原生 `generateContent`；支持在单一 group 内混用真实 Gemini 和自定义端点 | [#51083](https://github.com/BerriAI/litellm/pull/51083) |
| **Soniox STT** | `stt-async-v6` 和 `stt-rt-v6` 已加入成本映射；v5 模型将于 12 月 15 日停用 | [#50934](https://github.com/BerriAI/litellm/issues/50934) |

---

## 4. 性能与优化

**Rust 回调迁移（均为可选特性，需通过 feature flag 启用）：**

| Feature Flag | 组件 | 状态 |
|--------------|-----------|--------|
| `LITELLM_NATIVE_BUDGETS` | 预算预占（`pre_call` 阶段） | Draft — [#51535](https://github.com/BerriAI/litellm/pull/51535) |
| `LITELLM_NATIVE_PROMETHEUS` | Prometheus 指标日志 | Draft — [#51541](https://github.com/BerriAI/litellm/pull/51541) |
| `LITELLM_NATIVE_S3_V2` | S3 v2 日志 | Draft — [#51539](https://github.com/BerriAI/litellm/pull/51539) |
| `LITELLM_NATIVE_PARALLEL_REQUEST_LIMITER` | 并发请求限流器 v3 | Draft — [#51537](https://github.com/BerriAI/litellm/pull/51537) |
| `LITELLM_NATIVE_DYNAMIC_RATE_LIMITER_V3` | 动态速率限制器 v3 | Draft — [#51540](https://github.com/BerriAI/litellm/pull/51540) |

以上五项均基于已合并的 `CustomLoggerV2` 契约构建（[#51526](https://github.com/BerriAI/litellm/pull/51526)）。目前尚无生产环境数据披露；draft 状态尚未在真实代理上完成测试。

**控制面架构（早期阶段）：** PR #51762 引入了基于 Redis Stream + Postgres 的运行时数据面和角色写入机制——适用于多区域或多租户部署场景。

---

## 5. 稳定性与回归问题

### 🔴 高危

| Issue | 描述 | 临时方案 | 修复 PR |
|-------|-------------|------------|--------|
| [#50434](https://github.com/BerriAI/litellm/issues/50434) | Gemini 请求间歇性返回 **503 / APIConnectionError**（服务端在响应中途断开连接） | 带退避的指数重试 | — |
| [#50029](https://github.com/BerriAI/litellm/issues/50029) | **粘性会话失效** — Router 始终路由至不同端点，无法维持会话亲和性 | 无 | — |

### 🟡 中危

| Issue | 描述 | 修复 PR |
|-------|-------------|--------|
| [#51456](https://github.com/BerriAI/litellm/issues/51456) | Bedrock Llama 原生流式响应 **丢失 `prompt_token_count`** → prompt 用量被记为零 | — |
| [#51452](https://github.com/BerriAI/litellm/issues/51452) | `litellm/router.py` 中抛出 `ModelNotMappedError` | — |
| [#51389](https://github.com/BerriAI/litellm/issues/51389) | 共享 YAML `model_info` 锚点导致 **跨模型元数据污染** 及计费金额计算错误 | — |
| [#51352](https://github.com/BerriAI/litellm/issues/51352) | `cost-map-guard` CI 任务在仓库迁移后仍调用旧路径 → main 分支 CI 失败 | — |
| [#43002](https://github.com/BerriAI/litellm/issues/43002) | 临时性 DB 错误导致 tool-usage 批量写入和自动路由 drain 的 **永久性数据丢失** | — |

### 🟢 低危 / 已修复

| Issue | 描述 | 修复 PR |
|-------|-------------|--------|
| [#30774](https://github.com/BerriAI/litellm/pull/30774) | 内部 `optional_params` 泄露至 provider 请求体（Bedrock、Titan embeddings） | 已合并 |
| [#51767](https://github.com/BerriAI/litellm/pull/51767) | Azure Foundry `/openai/v1` Responses 路径拒绝 `api-version` 参数 → 404 | 已合并（backport 至 1.108.x: [#51769](https://github.com/BerriAI/litellm/pull/51769)） |
| [#51760](https://github.com/BerriAI/litellm/pull/51760) | Azure 流式中断错误向客户端暴露完整 Python traceback 和文件路径 | 已合并 |
| [#51284](https://github.com/BerriAI/litellm/pull/51284) | `/v1/messages/count_tokens` 在 Anthropic/Azure AI 接收格式错误 messages 时返回 500 而非 400 | 已合并 |
| [#51766](https://github.com/BerriAI/litellm/pull/51766) | Responses API 在上游发送 `incomplete` 时错误地将流式消息标记为 `completed` | 已合并 |
| [#50214](https://github.com/BerriAI/litellm/pull/50214) | Guardrail 拦截的请求体泄露至消费日志（安全风险） | Open |
| [#36997](https://github.com/BerriAI/litellm/issues/36997) | Admin UI 会话 cookie 为 **非 HttpOnly JWT**，携带真实代理密钥（XSS 风险） | — |
| [#37041](https://github.com/BerriAI/litellm/issues/37041) | Ollama `get_runtime_model_info` 忽略自定义 `api_base`，回退至 `localhost:11434` → 每次调用静默超时约 8 秒 | — |

---

## 6. 对应用开发者的影响

**如果你的基础设施使用 Azure Foundry 端点，请升级到 `v1.108.8`。** 这两个 404/路径重复 bug 已在 main 分支修复并 backport 到 LTS 分支——当前 LTS 版本下指向 Foundry 项目 `/openai/v1` URL 的部署存在故障。

**Rust 回调在日志/指标路径上已接近生产就绪。** 如果你在高请求量场景下运行 LiteLLM，并依赖 Prometheus 指标、S3 计费日志或并发请求限制，请关注堆叠中的 PR（#51535–#51541）。这些虽然处于 draft 状态，但基于已合并的契约构建，预计在未来 1–2 个 minor 版本中将完成生产切换。

**Gemini 用户：实现带 jitter 的重试逻辑。** [#50434](https://github.com/BerriAI/litellm/issues/50434) 中的 503/连接中断模式暗示上游不稳定——在补丁上线前，重试包装器可以缓解问题。

**审计你的 Admin UI cookie 处理。** 非 HttpOnly JWT 问题（[#36997](https://github.com/BerriAI/litellm/issues/36997)）意味着代理主机上任何 XSS 都可能窃取管理员会话令牌。如果你的代理暴露在公网，请避免在不可信环境下浏览 Admin UI，直至该问题被修复。

**决策模型调用方：请测试 Perplexity/OpenRouter 的图片输入。** PR #48846 改变了图片传递方式——如果你之前曾向这些提供商发送图片，请验证输出结果；`drop_params` 行为可能已发生变化。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate an English technical digest/report about Unsloth AI GitHub data into Simplified Chinese. Let me carefully translate this following the rules provided:

1. Output ONLY the translation
2. Preserve Markdown structure exactly
3. Keep URLs, link targets, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

**Title**: Unsloth Digest — 2026-11-14 → Unsloth 技术速报 — 2026-11-14

**Section 1**: Today's Highlights
- "shipped" → 发布了
- "INT8 attention kernel for diffusion DiTs" → INT8 注意力核函数，用于 Diffusion DiT 模型
- "covering" → 覆盖
- "alongside a wave of" → 同时还带来了一波
- "UX and stability fixes" → UX 和稳定性修复
- "project management" → 项目管理
- "Docker deployment" → Docker 部署
- "regression" → 回归问题
- "continues to surface" → 持续出现
- "ignoring" → 被忽略
- "forcing mmap" → 强制使用 mmap
- "inflating" → 导致膨胀
- "on the hardware side" → 在硬件侧
- "hitting" → 遇到
- "stride assertion failures" → 步长断言失败
- "flash attention backward path" → Flash Attention 反向传播路径

**Section 2**: Releases & Breaking Changes
- "No new stable releases" → 过去 24 小时内无新的稳定版发布


- "bundled version range" → 捆绑版本范围

I'll focus on translating technical terms and maintaining the newsletter's professional, technical tone. The key is to preserve the precise technical language while making it accessible to Chinese-speaking developers.

The translation will emphasize clarity and accuracy, ensuring that technical nuances are correctly conveyed. I'll carefully map each English term to its most appropriate Chinese technical equivalent, maintaining the original document's structure and intent.

When encountering potential translation challenges, I'll prioritize technical precision over literal word-for-word conversion, selecting terms that best capture the original meaning in a professional context.
</think>


# Unsloth 技术速报 — 2026-11-14

## 1. 今日要点

Unsloth 发布了面向 Diffusion DiT 模型的重要 INT8 注意力核函数，支持 NVIDIA sm75–sm120 和 AMD gfx1151 (Strix Halo)，同时还带来了一波 Studio 项目管理、PDF 导出和 Docker 部署相关的 UX 与稳定性修复。0.1.917 beta 中的一个回归问题仍在持续影响用户： `--load-mode none` 参数被忽略，系统强制使用 mmap，导致内存和 SSD 占用大幅膨胀。在硬件侧，ROCm 7.14 / MI300X (gfx942) 在 Flash Attention 反向传播路径上遭遇步长断言失败。

---

## 2. 版本发布与破坏性变更

| 组件 | 变更 | 备注 |
|-----------|--------|--------|
| **Unsloth Desktop** | v0.1.917 beta (package 2026.11.4) | 存在回归问题 — 见 §5 |
| **llama.cpp** | 捆绑版本范围 b12319–b12353 | Windows RTX 5090 更新后 GPU 推理故障 (#17663, 修复在 #17675) |
| **audio.cpp** | v0.9.4-unsloth.1 | Docker 更新路径已修复 (#17647) |
| **Pillow** | 升级 12.3.0 → 13.0.0 | (#17676) |

**过去 24 小时内无新的稳定版发布。**

---

## 3. 新模型与硬件支持

| 平台 | 新增内容 | 相关 Issue / PR |
|----------|----------|------------|
| **NVIDIA (sm75–sm120)** | Diffusion DiT 专用 INT8 注意力核函数（支持 MiniMax-H3/H3-Image、FLUX.3 klein、视频 DiT） | [#17718](https://github.com/unslothai/unsloth/pull/17718) |
| **AMD gfx1151 (Strix Halo)** | 相同 INT8 核函数 — Windows 和 Linux 均支持 | [#17718](https://github.com/unslothai/unsloth/pull/17718) |
| **ROCm 7.14 / MI300X (gfx942)** | `_scaled_dot_product_flash_attention_backward` 步长断言失败 — 目前回退至 MATH 内核 | [#17548](https://github.com/unslothai/unsloth/issues/17548) |
| **自定义 HuggingFace 目录** | 现在可在"选择模型"界面中加载自定义目录下的可快照 | [#17673](https://github.com/unslothai/unsloth/pull/17673) |

---

## 4. 性能与优化

| 领域 | 详情 | 参考 |
|------|--------|-----------|
| **INT8 注意力（Diffusion DiT）** | Q·K^T 在经过 16 点 Hadamard 旋转后以 INT8 运算；图像和视频 pipeline 均支持 | [#17718](https://github.com/unslothai/unsloth/pull/17718) |
| **LinuxMint + Intel B70** | 最小化 GUI 窗口后吞吐量提升约 **3 倍**（10 tok/s → ~30 tok/s）；表明 GUI 可见时存在渲染/轮询瓶颈 | [#17722](https://github.com/unslothai/unsloth/issues/17722) |
| **Windows RTX 5090 (CUDA 捆绑包)** | llama-server 在引擎更新后运行在 CPU 上；`ggml-cuda.dll` 存在但缺少 CUDA runtime；修复方案将 `uv` 检测逻辑合并到 wheel 安装步骤中 | [#17675](https://github.com/unslothai/unsloth/pull/17675) |
| **慢速网络连接** | Release notes 抓取现已兼容 <6 Mbit/s 链路 | [#17670](https://github.com/unslothai/unsloth/pull/17670) |
| **Docker audio.cpp 更新** | 通过处理分层文件系统链接解决了跨设备 `os.replace` 失败问题 | [#17647](https://github.com/unslothai/unsloth/pull/17647) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| 🔴 **高** | mmap 被强制启用，尽管指定了 `--load-mode none` → Windows AMD Ryzen AI Max+ 395 内存/SSD 占用过高 | OPEN | — |
| 🔴 **高** | Windows RTX 5090 Laptop 引擎更新后 GPU 空闲；仅"Repair installation"可恢复 GPU 推理 | OPEN | [#17675](https://github.com/unslothai/unsloth/pull/17675) |
| 🔴 **高** | ROCm 7.14 / MI300X (gfx942) Flash Attention 反向传播步长断言失败 — MATH 回退已启用 | OPEN | — |
| 🟡 **中** | YuE2 启用 Instrumental 时仍会生成人声（条件逻辑错误） | OPEN | — |
| 🟡 **中** | Studio Transcribe 处理长音频时失败 — `max_tokens` 从未发送 | OPEN | — |
| 🟡 **中** | Mobile (Cloudflare) 聊天更新未在 Desktop 嵌入式 WebView 中同步 | OPEN | — |
| 🟡 **中** | pip install 泄漏到 Studio 自带的 Python 环境中（Ubuntu 24.04） | OPEN | [#17626](https://github.com/unslothai/unsloth/pull/17626) |
| 🟢 **低** | 合并 CSV 导出后重新导入时多条聊天被合并为一条 | OPEN | [#17656](https://github.com/unslothai/unsloth/pull/17656) |
| 🟢 **低** | Web UI 导入聊天文件选择器不显示 Markdown 导出 | OPEN | [#17652](https://github.com/unslothai/unsloth/pull/17652) |
| 🟢 **低** | "Show release notes" 按钮始终失败 | OPEN | [#17670](https://github.com/unslothai/unsloth/pull/17670) |

---

## 6. 对应用开发者的启示

| 要点 | 详情 |
|----------|--------|
| **在 0.1.917 beta 中验证 load-mode 设置** | 如果您在内存受限环境中依赖 `--load-mode none`，当前 beta 版本会忽略该参数。建议回退到 0.1.916 或关注 [#17605](https://github.com/unslothai/unsloth/issues/17605) 的修复进度。 |
| **INT8 diffusion 支持解锁高效图像/视频生成** | 使用 MiniMax-H3、FLUX.3 klein 或视频 DiT 的应用现在可以在现代 NVIDIA (sm75+) 和 AMD Strix Halo 硬件上利用 INT8 注意力，降低显存压力。 |
| **Windows CUDA 用户：避免手动更新 llama.cpp** | 在 #17675 合并之前，Windows 上的应用内引擎更新可能静默破坏 GPU 推理。受影响时使用"Repair installation"临时方案。 |
| **MI300X 用户：预期训练速度下降** | ROCm 7.14 / gfx942 上的 Flash Attention 反向传播回退到 MATH 会降低训练吞吐量。关注 [#17548](https://github.com/unslothai/unsloth/issues/17548) 获取内核修复。 |
| **Docker 部署：audio.cpp 更新现已安全** | #17647 已解决跨设备链接问题；您现在可以在 Docker 中安全更新 audio.cpp 而不会触发 `os.replace` 失败。 |
| **慢速网络下的 Studio 用户：release notes 现可正常加载** | "Show release notes" 按钮已修复，可兼容 ~6 Mbit/s 以下的连接。 |
| **导出/导入工作流：CSV 现在保持聊天边界** | 合并 CSV 导出在 #17656 后将重新导入为独立聊天；如果您依赖合并导出，请测试现有 pipeline。 |

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*