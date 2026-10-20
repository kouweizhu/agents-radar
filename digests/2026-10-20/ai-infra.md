# AI 基础设施日报 2026-10-20

> 生成时间: 2026-10-20 01:12 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire report into Simplified Chinese, following the detailed rules provided. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all formatting and technical terms:

Title: 跨项目对比报告 — 2026-10-20

Section 1: 生态系统概览
Section 2: 活动对比
Section 3: 模型支持竞赛
Section 4: 性能前沿
Section 5: 层级定位
Section 6: 趋势信号

Let me go through each section:</think>

# 跨项目对比报告 — 2026-10-20

---

## 1. 生态系统概览

今日的 AI 推理基础设施正围绕不同操作层级快速细分。**vLLM** 和 **SGLang** 在高吞吐量分布式推理层竞争，vLLM 侧重 KV 缓存卸载的多层级架构，SGLang 则推进分层缓存（HiCache）并支持多后端。**llama.cpp** 保持其作为便携式 CPU/GPU 运行时的地位，持续扩展后端多样性（SYCL、OpenCL、Vulkan、Metal），并新增多节点张量并行。**Ollama** 专注开发者体验和本地部署，辅以云端模型桥接。**LiteLLM** 则居于统一网关层，处理多提供商路由和成本核算。与此同时，**Unsloth** 占据微调层，通过先进的梯度和内存技术优化训练吞吐量。这种碎片化反映了专业化趋势：推理、运行时、网关和训练正在成为不同的产品类别。

---

## 2. 活动对比

| 项目 | Issue（24h） | PR（24h） | 发布（24h） | 值得关注的状态 |
|------|-------------|-----------|-------------|----------------|
| **vLLM** | 10（2 critical） | 9 | 0 | V1 死锁问题正在积极处理中 |
| **SGLang** | 7 | 7 | 1（v0.5.22） | 重要版本 — 950 个 PR，245 位贡献者 |
| **llama.cpp** | 9（2 critical） | 7 | 13 commits | 后端优化活跃 |
| **Ollama** | 11（4 critical） | 13 | 0 | 硬件兼容性问题危机 |
| **LiteLLM** | 12+ | 12+ | 0 | 流式输出/成本核算修复中 |
| **Unsloth** | 6 | 12 | 1（v0.1.909-beta） | 训练 UI 全面改版 + FLUX.3 |

---

## 3. 模型支持竞赛

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-----------|------|--------|-----------|--------|---------|
| **DeepSeek-V4.1 Flash** | — | — | — | — | ✅（552B/16B） |
| **Qwen4Exp** | — | — | ✅（proto） | — | — |
| **Nemotron 3.5 ASR** | ✅ | — | — | ✅ | — |
| **FLUX.3 Image** | — | — | — | — | ✅ |
| **Clef / PPLX-Decider** | — | ✅ | — | — | — |
| **SenseNova U1** | — | — | ✅ | — | — |
| **H2O-Lightning-4B** | — | — | ✅ | — | — |
| **Apple Foundation** | — | — | — | 🔲（申请中） | — |
| **Hopper（NVIDIA）** | ✅ ViT | — | — | — | — |

**领先者**：本期模型覆盖最广的是 **llama.cpp** 和 **Unsloth** — llama.cpp 新增 SenseNova、H2O 和 Qwen4Exp；Unsloth 新增 DeepSeek-V4.1 Flash 和 FLUX.3。**vLLM** 在硬件特定优化方面领先（Hopper ViT 的 FA4、ROCm MI355X）。

---

## 4. 性能前沿

| 优化方向 | 活跃项目 | 重点关注 |
|----------|-----------|-----------|
| **KV 缓存卸载** | vLLM、SGLang | Valkey 二级存储（vLLM）、HiCache 批处理（SGLang） |
| **量化** | vLLM、llama.cpp | RDNA3 上的 W4A8 MXFP4（vLLM）、MoE 静默损坏修复（llama.cpp） |
| **注意力内核** | vLLM、llama.cpp、SGLang | Hopper ViT 的 FA4（vLLM）、OpenCL DP4A GEMM（llama.cpp）、DSA 索引器（SGLang） |
| **流式输出开销** | LiteLLM | Pydantic 往返消除、使用量块对齐 |
| **训练显存** | Unsloth | PrefixGrouper、交叉熵掩码、块编译 |
| **分布式推理** | vLLM、SGLang、llama.cpp | P/D 分解（vLLM）、NCCL TP（llama.cpp）、NIXL（SGLang） |

**最活跃领域**：KV 缓存管理和注意力内核 — 两者都是大规模部署的显存带宽瓶颈。

---

## 5. 层级定位

| 层级 | 项目 | 定位 |
|------|------|------|
| **微调 / 训练** | Unsloth | 专注训练优化器；FSDP2 多 GPU alpha |
| **本地运行时** | llama.cpp、Ollama | llama.cpp = 便携引擎；Ollama = UX 封装 + 云桥接 |
| **分布式推理引擎** | vLLM、SGLang | vLLM = 显存中心；SGLang = HiCache + 工具调用 |
| **网关 / 代理** | LiteLLM | 多云路由、成本核算、认证 |

**差异化洞察**：vLLM 和 SGLang 正在解决相似问题（P/D 分解、分层缓存），但切入点不同 — vLLM 从显存角度出发，SGLang 从延迟/吞吐量角度出发。llama.cpp 占据独特位置，是唯一覆盖全部硬件层级（CPU、iGPU、dGPU、NPU、Hexagon）且无需服务器编排层的项目。

---

## 6. 趋势信号

### Agent/应用开发者应关注

1. **P/D 分解正在成为标准** — vLLM（#60523）和 SGLang（NIXL）都在大力投入预填充/解码分离。预计在 2-3 个季度内，长上下文 Agent 的基础设施将转向 P/D 架构。

2. **KV 缓存成为新内存层级** — Valkey 二级存储（vLLM）和多层级 HiCache（SGLang）表明，仅靠 GPU 显存无法支撑规模化部署。在多租户部署中应规划分层 KV 存储。

3. **结构化输出仍不稳定** — 多个项目（LiteLLM、Ollama、SGLang）在工具调用方面存在空内容数组和 token 计数的 bug。如果你的 Agent 依赖函数调用，请同时验证 LiteLLM 代理和直连提供商路径。

4. **消费级 GPU 不稳定是风险** — RTX 5090、RTX 5060 Ti（Ollama/llama.cpp）以及 AMD ROCm 回退问题表明，NVIDIA 最前沿的 Blackwell 和 RDNA3.5 尚未进入生产稳定期。预算规划应考虑较老代际的 GPU 或 CPU 回退方案。

5. **训练正在变得更容易上手** — Unsloth 的 DPO/ORPO/GRPO UI 和奖励库降低了偏好调优模型的门槛。预计更多 Agent 将纳入微调后的推理模型。

6. **网关层正在通过 LiteLLM 整合** — LiteLLM 的流式输出修复和 Hopper 支持表明，它正在成为多云部署的事实标准代理层。其 token 计数和缓存定价的精确性工作将对成本敏感型应用产生影响。

---

*跨项目数据汇总来源：vLLM、SGLang、llama.cpp、Ollama、LiteLLM、Unsloth — 2026-10-20*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM digest into Chinese. I need to:
1. Translate the content into Chinese
2. Keep all the technical terms, project names, URLs, issue numbers, etc. as-is
3. Keep the Markdown structure exactly as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through and translate this carefully while maintaining the structure.</think>

# vLLM Digest — 2026-10-20

## 今日要闻

vLLM 项目近期在 KV 缓存卸载、多模态 ViT 优化和 P/D 分离（Prefill/Decode Disaggregation）改进方面都有活跃开发。发现一个关键的 V1 引擎死锁问题，影响 fp8 + 前缀缓存 + Qwen3.5 组合的负载，正在积极调查处理。面向 Kimi-K3 的 ROCm 优化和 Hopper ViT 注意力机制现已支持 FA4 长序列处理。

---

## 版本发布与破坏性变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

| 项目 | 描述 | 参考 |
|------|-------------|-----------|
| **NVIDIA Nemotron 3.5 ASR Streaming** | 功能请求：支持 `nemotron-3.5-asr-streaming-0.6b`，这是一个 6 亿参数的多语言流式 ASR 模型，采用 OpenMDW-1.1 许可证 | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **ViT Full CUDA Graph RFC** | RFC 追踪：实现多模态模型中视觉 Transformer 编码器的完整 CUDA Graph 支持（Qwen3-VL、Qwen3.5、GLM-V、Kimi K2.5） | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| **ROCm Beam 1.0 + DFlash2** | Reflection 的 Beam 1.0（501B）首发 ROCm 支持，配合 DFlash2 draft 使用 | [#62057](https://github.com/vllm-project/vllm/pull/62057) |
| **W4A8 MXFP4 on RDNA3/3.5** | RDNA3/RDNA3.5（gfx11）解码的新可选 MXFP4 线性核，使用 `v_dot4_i32_iu8` 指令 | [#60413](https://github.com/vllm-project/vllm/pull/60413) |
| **Kimi-K3 MI355X 专用解码** | ROCm 性能优化，针对 TP8 的 MLA 序言（M1a）和尾声（M1b）进行 asm MLA attention 优化，支持 DCP1/DCP8 | [#61435](https://github.com/vllm-project/vllm/pull/61435) |

---

## 性能与优化

| 项目 | 描述 | 参考 |
|------|-------------|-----------|
| **Hopper ViT 使用 FA4** | 在 Hopper 上使用 FA4 的 SM90 内核处理 ViT 注意力，条件为 `head_size=80` 且 `max_seqlen >= 8192`；窗口注意力仍使用 FA3 | [#61705](https://github.com/vllm-project/vllm/pull/61705) |
| **Logprobs auxoutput** | 通过辅助输出路径输出生成 token 的 logprobs，避免前缀缓存请求的重复计算 | [#61953](https://github.com/vllm-project/vllm/pull/61953) |
| **DSpark draft token 计数修复** | 修复 DP 和自适应验证下 DSpark draft token 计数膨胀问题 | [#61807](https://github.com/vllm-project/vllm/pull/61807) |
| **SM100 批次不变性修复** | 在 Triton 统一注意力中保留批次不变性，排除 SM100 系列大 head 调优中的批次不变执行 | [#60531](https://github.com/vllm-project/vllm/pull/60531) |
| **多模态 compile-cache 修复** | 在模型 compile-cache 哈希中包含多模态限制，防止切换视觉功能时出现编译错误 | [#54642](https://github.com/vllm-project/vllm/pull/54642) |
| **MooncakeConnector 改进 RFC** | 改进 MooncakeConnector P/D 分离 KV 直连的 RFC，支持可插拔传输层（RDMA/TCP/Ascend） | [#60523](https://github.com/vllm-project/vllm/issues/60523) |
| **Valkey 二级缓存** | 新的 KV 缓存卸载层，使用 valkey-glide 和 valkey-large-object（RDMA over efa-direct） | [#62580](https://github.com/vllm-project/vllm/pull/62580) |
| **TP 无感知 KV 卸载** | 追踪项：支持不同 TP 规模的兼容引擎共享卸载后的 KV | [#61886](https://github.com/vllm-project/vllm/issues/61886) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 描述 | 参考 |
|----------|-------|-------------|-----------|
| **🔴 严重** | **V1 引擎死锁** | V1 引擎在并发负载下（fp8 + 前缀缓存 + Qwen3.5）发生核心死锁 — 37 条评论 | [#37729](https://github.com/vllm-project/vllm/issues/37729) |
| **🔴 严重** | **跨请求污染** | P/D 分离的 NIXL 部署中偶发其他请求的内容泄露，启用自动前缀缓存时出现 | [#61160](https://github.com/vllm-project/vllm/issues/61160) |
| **🔴 严重** | **Qwen4Exp 边界崩溃** | 单个 prefill 超过 262,144 token 边界时崩溃，v0.32.0/nightly 上出现 CUDA 非法内存访问（v0.31.1 上正常） | [#62383](https://github.com/vllm-project/vllm/issues/62383) |
| **🟠 高** | **Nemotron 回归** | 自 v0.29.0 以来在 DGX Spark（GB10/SM121）上解码慢约 16%，未使用投机解码 | [#59770](https://github.com/vllm-project/vllm/issues/59770) |
| **🟠 高** | **Qwen3.8 prefill 饥饿** | 长 prefill 工作负载在 2 节点 DGX Spark TP2 上周期性地使活跃解码饥饿 3-7 分钟 | [#54919](https://github.com/vllm-project/vllm/issues/54919) |
| **🟠 高** | **结构化输出回归** | 自 #45424 以来结构化输出的解码吞吐量下降约 2 倍，#49919 未修复 | [#62442](https://github.com/vllm-project/vllm/issues/62442) |
| **🟠 高** | **DeepSeek-V4.1 on SM120** | 无法在 SM120（RTX PRO 6000 Blackwell）上运行 — 缺少 page_block_size=32 的 FlashInfer 稀疏-MLA 解码内核实例化 | [#59203](https://github.com/vllm-project/vllm/issues/59203) |
| **🟡 中** | **XGrammar 偶发终止** | V2 DFlash 概率 draft 和 block 拒绝时偶发 XGrammar 请求终止 | [#61383](https://github.com/vllm-project/vllm/issues/61383) |
| **🟡 中** | **GLM-5.3 GB200 NIXL 性能** | 描述符提交开销（每节点 91k–112k 个描述符）成为 P/D 分离中 fabric 带宽的主要瓶颈 | [#55434](https://github.com/vllm-project/vllm/issues/55434) |
| **🟡 中** | **MTP vocab OOM** | MTP draft 分配第二个完整 vocab embedding，导致 27B INT4 target OOM，而基线可以运行 | [#53887](https://github.com/vllm-project/vllm/issues/53887) |

---

## 这对应用开发者意味着什么

1. **避免 V1 引擎 + Qwen3.5 + fp8 + 前缀缓存的组合** — 如果同时使用这些特性并有并发请求，预计会出现死锁，直到 #37729 解决。建议禁用前缀缓存或回退到 V0 引擎。

2. **结构化输出吞吐量减半** — 如果使用结构化输出（XGrammar），自 v0.30.x 以来解码吞吐量下降约 50%。跟踪 #42442 获取修复进度。

3. **KV 卸载正在支持多层级** — 新的 valkey 二级缓存（#62580）和 TP 无感知 KV 共享（#61886）即将推出，这将改善多租户部署的内存效率。

4. **Hopper 多模态推理加速** — Hopper 上的长序列 ViT 推理现已使用 FA4，为视觉语言模型提供更好的吞吐量。

5. **注意 P/D 分离中的前缀缓存污染** — 如果在 NIXL P/D 分离部署中使用自动前缀缓存，可能出现跨请求污染（#61160）；暂时禁用前缀缓存作为解决方案。

6. **ROCm 的 Kimi-K3 和 Beam 收益** — ROCm 用户受益于 Kimi-K3 和 Beam 1.0（配合 DFlash2）的新专用解码路径。

---

*基于 GitHub 数据生成 — vllm-project/vllm | 2026-10-20*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest into Chinese while preserving all formatting, links, numbers, code references, etc. I need to:

1. Translate all the content into Chinese
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep all URLs, issue numbers, project names, version tags, etc. as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through each section:

## 1. Today's Highlights
- SGLang v0.5.22 has been released
- 950 PRs from 245 contributors
- Active work on HiCache
- Addressing stability issues (CUDA coredump tracker, flaky CI)

## 2. Releases & Breaking Changes
- v0.5.22 released
- No breaking changes
- But unified memory pool now supports mxfp8 KV cache

## 3. New Model & Hardware Support
- Table of models and hardware

## 4. Performance & Optimization
- Various performance improvements

## 5. Stability & Regressions
- Various issues with severity levels

## 6. What This Means for Application Developers
- Practical takeaways

Now let me translate this into natural technical Chinese:</think>

# SGLang 要闻 — 2026-10-20

## 1. 今日焦点

SGLang **v0.5.22** 已正式发布，这是 **245 位贡献者提交 950 个 PR** 的重大版本更新，反映出项目持续快速迭代的活力。目前社区正积极推进层级缓存（HiCache）的改进工作，涉及写穿批处理、DSA 索引器主机池和 Mamba 槽位状态处理等多个 PR。与此同时，稳定性问题也在持续跟进中，包括备受关注的 CUDA 核心转储追踪（#26340，348 条评论）和不稳定的 CI 基础设施（#42752）。

## 2. 版本发布与重大变更

- **v0.5.22 发布** — 涵盖约 950 个 PR、245 位贡献者的重大版本。包含新模型的首日支持、注意力后端性能优化以及基础设施改进。

- 本次发布周期未标注明确的重大变更，但统一内存池现已支持 `mxfp8` KV 缓存（#42396）—— 此前的版本会启动成功但在运行时抛出 `AttributeError` 导致崩溃。

## 3. 新模型与硬件支持

| 模型 | 类型 | 文档 |
|-------|----------|---------------|
| **Clef / Clef Flash** | LLM / VLM | [Cookbook](https://docs.sglader.io/cookbook/autoregressive/Cloudflare/clef) |
| **PPLX-Decider v1 / v1.1** | LLM / VLM | [Cookbook](https://docs.sglang.io/cookbook/a) |

**硬件进展：**
- **NVIDIA RTX PRO 6000 (SM120)** — GLM-5.3-Flash 现已支持该硬件；FA4 注意力后端在混合扩展重塑时存在已知崩溃问题（变通方案：使用 Triton 后端）（#42012）
- **AMD ROCm** — 持续优化 Qwen3.8-Flash-Next 在 gfx950 / MI355X 上的性能（#44304）
- **Intel XPU** — 修复填充图像 vision 批次对齐问题，涉及 `cu_seqlens`（#44670）
- **NPU** — DeepSeek-V4 解码压缩元数据融合正在开发中（#40673）

## 4. 性能与优化

- **HiCache 写穿批处理**（#40363）：KV 备份现已在请求完成路径外排队和批处理，减少调度器线程争用
- **DSA 索引器主机池**（#45019）：直接从缓冲区信息构建，消除了冗余读取
- **统一内存池分配**（#45222）：释放页面现从各子池末端优先分配，提升内存局部性
- **KV 释放批处理**（#43600）：将同一批次内结束请求的 KV 释放批量处理 — 在 GB300 上每个请求节省约 1.3ms（调度器 CPU 密集型修复）
- **DeepSeek-V4 NPU 元数据融合**（#40673）：将解码压缩元数据更新融合到单个 Triton 内核中
- **DSPARK 接受恢复**（#45270）：通过加速重复输出处理，修复周期性输出接受失败问题

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 |
|-------|----------|--------|
| **#26340** — CUDA 核心转储追踪器 | 🔴 严重 | 开启中 — 348 条评论；自动收集 PR 测试运行中的核心转储 |
| **#42752** — 不稳定测试 / CI 基础设施 | 🟠 高 | 开启中 — 92 条评论；通过 `/sglang-pr-babysit` Claude Code 工作流追踪 |
| **#27194** — MoE 内核静默输出损坏 | 🟠 高 | 开启中 — `SGLANG_MORI_NUM_MAX_DISPATCH_TOKENS_PER_RANK` 在低并发时导致 GSM8K=0 而无报错 |
| **#42012** — GLM-5.3-Flash SM120 崩溃 | 🟠 高 | 开启中 — FA4 在混合扩展时崩溃；Triton 后端可正常工作 |
| **#44835** — `pause_generation` 导致服务器挂起 | 🟡 中等 | 开启中 — 挂起直到看门狗杀死 |
| **#45235** — qwen3_coder tool_choice 缺陷 | 🟡 中等 | 开启中 — 非严格工具获取了编造参数 |
| **#43526** — AMD gfx942 块级 FP8 精度 | 🟡 中等 | 开启中 — CK 块缩放 GEMM 精度问题 |

**已关闭的正面进展：**
- #32607 — Kimi K3 首日支持已完成
- #34112 — Chunked-prefill 取消泄漏已修复

## 6. 这对应用开发者意味着什么

- **新模型选择**：Clef 和 PPLX-Decider 现已获得 SGLang 原生支持 — 考虑用于视觉语言工作负载
- **内存效率**：如果使用统一内存池配合 FP8 量化，请确认部署包含 mxfp8 修复（#42396） — 此前的版本会在运行时崩溃
- **AMD 部署**：Qwen3.8-Flash-Next 在 MI355X 上的性能优化正在进行中；预计下一个补丁版本会有改善
- **代理工作负载**：HiCache 改进（#45205、#42490）直接惠及具有长共享前缀的工作负载 — 监控 TTFT 降低情况
- **生产监控**：CUDA 核心转储追踪（#26340）表明 GPU 稳定性工作仍在进行中；如遇崩溃，请在开新 issue 前先检查是否已有相关报告

**建议所有用户升级到 v0.5.22**，特别是使用 AMD ROCm 或统一内存池配置的用户。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp digest from English to Chinese (Simplified Chinese). I need to follow the rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter.

Let me translate while preserving all formatting:</think>

# llama.cpp digest — 2026-10-20

## 1. 今日要闻

本版本周期主要聚焦于**后端优化与新模型支持**。亮点包括：SYCL 和 OpenCL 量化矩阵乘法优化、实验性 P2P 服务器访问、Hexagon v85 支持，以及 NCCL 多节点张量并行的初步集成。Qwen-VL 图像预处理现与 transformers 对齐，修复了长期存在的视觉差异问题。

---

## 2. 版本更新与破坏性变更

| 提交 | 描述 | 备注 |
|--------|-------------|-------|
| [`b11744`](https://github.com/ggml-org/llama.cpp/commit/b11744) | **server: 新增 `--connect`，支持 LAN 外 P2P 访问** | 实验性功能；通过 `--connect-code` 直接连接服务器。隧道未激活时不显示。 |
| [`b11742`](https://github.com/ggml-org/llama.cpp/commit/b11742) | **hybrid dna tokenizer 修复** | 支持 Carbon-14B HybridDNA tokenizer 及 N-padded 尾 token；去除 `<dna>` 标签内空白。 |

本周期**未报告破坏性 API 变更**。

---

## 3. 新模型与硬件支持

- **SenseNova U1** — 新增文本/图像/文本+图像生成支持。 [#28919](https://github.com/ggml-org/llama.cpp/pull/28919)
- **H2O-Lightning-4B** — 决策模型，提供校准概率，端点为 `/v1/systemone`。 [#30361](https://github.com/ggml-org/llama.cpp/pull/30361)
- **Qwen4Exp** — 原型 QSA 选择（无需 kq_mask）；4K-8K ubatch 下 32GB VRAM 实测 48-55 tok/s 解码。 [#30815](https://github.com/ggml-org/llama.cpp/pull/30815)
- **Hexagon v85** — 架构上限从 v81 提升至 v85；新增 `build_htp_skel(v85)` 构建目标。 [#30842](https://github.com/ggml-org/llama.cpp/pull/30842)
- **WASI + WebGPU** — 为 WASI 构建添加 CI 和文档。 [#30754](https://github.com/ggml-org/llama.cpp/pull/30754)

---

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **OpenCL** | q4_0、q4_k、q6_k 的 Cooperative-K DP4A GEMM | 提升离散 GPU 吞吐量。 [#30741](https://github.com/ggml-org/llama.cpp/pull/30741) |
| **OpenCL** | i32 的 get_rows；i32/f32 的 cpy | 扩展 dtype 支持。 [#30756](https://github.com/ggml-org/llama.cpp/pull/30756) |
| **SYCL** | 修复量化权重重排后的 get_rows | 修复 b9128-b9159 之间的回归问题。 [#30430](https://github.com/ggml-org/llama.cpp/pull/30430) |
| **Vulkan** | 大头尺寸下标量 Flash Attention 上限 8 行 | 防止寄存器溢出至 scratch（X1-85 上每次调用 264 字节）。 [#30829](https://github.com/ggml-org/llama.cpp/pull/30829) |
| **Metal** | 大矩阵输出偏移使用 64 位运算 | 防止超出有符号 32 位范围。 [#30072](https://github.com/ggml-org/llama.cpp/pull/30072) |
| **Metal** | 新增 9 experts/token 的 MoE 内核变体 | 支持 Nemotron 3.5 Bolt。 [#30699](https://github.com/ggml-org/llama.cpp/pull/30699) |
| **NCCL (多节点 TP)** | 分离进程中 CUDA 集合通信的后端接口 | 启用多节点张量并行。 [#28967](https://github.com/ggml-org/llama.cpp/pull/28967) |

---

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 详情 |
|-------|----------|--------|---------|
| **[#27623](https://github.com/ggml-org/llama.cpp/issues/27623)** | 高 | OPEN | Qwen3.8-27B hybrid：上下文 >80K token 时解码吞吐量下降约 25 倍。提示处理不受影响。RTX 4080 SUPER 16GB。 |
| **[#27910](https://github.com/ggml-org/llama.cpp/issues/27910)** | 高 | OPEN | CUDA 在 Qwen3.8-27B Q6_K 上推理导致 RTX 5090 **显示器黑屏** 并整机重置，需重启。 |
| **[#30697](https://github.com/ggml-org/llama.cpp/issues/30697)** | 中 | OPEN | `--moe-cache-mib` 在 Vulkan 上加载时崩溃（RX 6900 XT，Windows）。 |
| **[#28860](https://github.com/ggml-org/llama.cpp/issues/28860)** | 中 | OPEN | SYCL 启用 ngram-mod 时分配极大 scratchpad（2GB+）。 |
| **[#29798](https://github.com/ggml-org/llama.cpp/issues/29798)** | 中 | OPEN | OpenCL `set_tensor` 对 q8_0 视图的写入被丢弃；使用 q8_0 KV cache 恢复序列状态时 cache 为空。 |
| **[#30794](https://github.com/ggml-org/llama.cpp/issues/30794)** | 中 | OPEN | RPC：2 个 RPC worker 长提示后 DeepSeek V4 退化为重复 token。 |
| **[#24168](https://github.com/ggml-org/llama.cpp/issues/24168)** | 中 | CLOSED | SYCL hybrid 模型输出乱码 — b9128-b9159 之间的回归。 |
| **[#27579](https://github.com/ggml-org/llama.cpp/issues/27579)** | 中 | CLOSED | HIP/ROCm gfx1151 输出损坏，Vulkan 正确。 |

---

## 6. 这对应用开发者的意义

1. **服务器 P2P 访问已实验性可用** — 运行分布式 llama-server 的团队可测试 `--connect` 实现无 LAN 环境访问；生产环境仍建议使用隧道模式，直至该功能成熟。

2. **关注 Qwen3.8-27B 解码性能悬崖** — Serving 混合增量模型且长上下文（>80K）时，预期约 25 倍吞吐量下降。考虑使用提示缓存或拆分为短会话。

3. **NCCL 多节点张量并行即将到来** — PR #28967 为真正的多节点张量并行奠定了基础。基础设施团队应关注未来 CUDA 构建中通过 NCCL 启用该功能。

4. **OpenCL q8_0 KV cache 回归** — 使用 q8_0 量化进行状态恢复的应用在部署前应充分测试；该 bug 可能静默损坏 cache 恢复。

5. **新增决策模型端点** — H2O-Lightning-4B 现原生支持 `/v1/systemone`；适用于需要校准概率输出而不依赖 Python 封装的智能体。

6. **Adreno GPU 上 Vulkan 改善** — 大头尺寸下 Flash Attention 现已受限；高通硬件的移动/边缘部署使用更安全。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Chinese. I need to:
1. Translate all the content into Chinese
2. Keep the Markdown structure exactly as-is
3. Keep URLs, issue numbers, code references, etc. in their original form
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through each section and translate it carefully.</think>

# Ollama 速报 — 2026年10月20日

## 1. 今日焦点

Ollama 项目正在处理 NVIDIA 最新 GPU（RTX 5090、RTX 5060 Ti Blackwell）的关键硬件兼容性问题，同时持续扩展 MLX/Apple Silicon 能力。值得注意的是，团队正在积极改进 OpenAI 兼容性，解决了工具调用和云模型集成的相关问题，但仍有多个 Windows 特定崩溃和回归问题有待调查。

---

## 2. 版本发布与重大变更

- **过去24小时内无新版本发布。**

---

## 3. 新模型与硬件支持

| 类别 | 详情 | 参考 |
|------|------|------|
| **功能请求** | 原生支持 Apple Foundation Models（macOS） | [#19116](https://github.com/ollama/ollama/issues/19116) |
| **MLX** | 新增 DFlash2 块草稿扩展支持 | [#19149](https://github.com/ollama/ollama/pull/19149) |
| **MLX** | Qwen3 运行时应用 YaRN rope 缩放（修复检查点兼容性） | [#19134](https://github.com/ollama/ollama/pull/19134) |
| **MLX** | 修复 Qwen3.5 视觉补丁嵌入通道处理 | [#19127](https://github.com/ollama/ollama/issues/19127) |
| **MLX** | 融合线性注意力内核现在接受 float16 激活 | [#19126](https://github.com/ollama/ollama/issues/19126) |

---

## 4. 性能与优化

| 领域 | 变更 | 参考 |
|------|------|------|
| **云集成** | `ollama ls --cloud` 获取公开模型目录，无需拉取 | [#19153](https://github.com/ollama/ollama/pull/19153) |
| **Claude Code** | 启动时使用云模型上下文长度（避免 200k 回退） | [#19119](https://github.com/ollama/ollama/pull/19119) |
| **远程推理** | 客户端断开时服务器现在会取消上游推理 | [#19144](https://github.com/ollama/ollama/pull/19144) |
| **内存** | Runner 模型查找改用原子指针，消除 refMu 竞争 | [#19070](https://github.com/ollama/ollama/pull/19070) |
| **工具调用** | 流式响应中推理先于客户端工具调用完成 | [#19146](https://github.com/ollama/ollama/pull/19146) |
| **CLI** | `ollama create` 输出打包默认值和差异的提示 | [#19094](https://github.com/ollama/ollama/pull/19094) |

---

## 5. 稳定性与回归问题

### 严重（崩溃/数据丢失）

| 问题 | 描述 | 状态 |
|------|------|------|
| **CUDA 崩溃（RTX 5090）** | Cohere MoE 架构上出现非法内存访问（MUL_MAT） | [#18642](https://github.com/ollama/ollama/issues/18642) — *进行中，16条评论* |
| **RTX 5060 Ti Blackwell** | flash-attention MMA 内核中 CUDA "共享对象初始化失败" | [#19122](https://github.com/ollama/ollama/issues/19122) — *进行中* |
| **ROCm 回归** | Radeon Pro W5700（gfx1010）上 `GGML_ASSERT(max_blocks_per_sm > 0)` | [#19075](https://github.com/ollama/ollama/issues/19075) — *进行中* |
| **Nemotron-3.5-bolt** | Apple Silicon 上提示词超过42个字符时崩溃 | [#19138](https://github.com/ollama/ollama/issues/19138) — *已关闭* |
| **Token 解码** | "python" token 解码为空字符串，前导空格丢失（lfm2:24b） | [#18785](https://github.com/ollama/ollama/issues/18785) — *进行中* |

### 高优先级（功能受损）

| 问题 | 描述 | 状态 |
|------|------|------|
| **/api/chat 工具定义** | 注入空工具定义；模型回复 `{"name": ""}` | [#19040](https://github.com/ollama/ollama/issues/19040) — *进行中* |
| **工具调用 + 空内容** | 带有 `content: []` 的助手消息丢失 tool_calls | [#19151](https://github.com/ollama/ollama/issues/19151) — *进行中*（PR: [#19152](https://github.com/ollama/ollama/pull/19152)） |
| **Windows 连接重置** | 大提示词下 `/api/chat` 约15秒后重置 | [#19139](https://github.com/ollama/ollama/issues/19139) — *进行中* |
| **Vulkan AMD** | Radeon Pro 5700 XT 上 GPT-OSS 20B 返回空响应 | [#19060](https://github.com/ollama/ollama/issues/19060) — *进行中* |
| **上下文长度** | `OLLAMA_CONTEXT_LENGTH` 在 `/api/show` 或 `/api/tags` 中未生效 | [#18995](https://github.com/ollama/ollama/issues/18995) — *进行中* |

### 中等（用户体验/边缘情况）

| 问题 | 描述 | 状态 |
|------|------|------|
| **桌面应用** | Windows 上服务器静默失败；手动 `ollama serve` 可用 | [#18061](https://github.com/ollama/ollama/issues/18061) — *进行中* |
| **内存泄漏** | 桌面应用中上下文菜单标签 C 字符串从未释放 | [#19029](https://github.com/ollama/ollama/issues/19029) — *进行中* |
| **云 API** | 约 10.7 MiB 编码请求时返回 HTTP 413 | [#19155](https://github.com/ollama/ollama/issues/19155) — *进行中* |

---

## 6. 对应用开发者的意义

1. **使用最新 NVIDIA 硬件的 Windows 用户**（RTX 5090、RTX 5060 Ti）应预期不稳定；在 CUDA 内存访问问题解决前，考虑使用 CPU 回退或旧代 GPU。

2. **工具调用实现**应进行验证——多个问题影响 `/api/chat` 路径，而 `/v1/chat/completions` 可能正常工作。

3. **MLX 用户**受益于 YaRN 支持和 DFlash2 改进；Qwen3/Qwen3.5 系列的模型检查点兼容性已改善。

4. **云模型集成**正在扩展：新版 `ollama ls --cloud` 支持无需拉取的发现功能，Claude Code 集成现在正确使用云模型上下文。

5. **安全提示**：应用层安全功能请求（[#19045](https://github.com/ollama/ollama/issues/19045)）仍在进行中。如需将 Ollama 暴露到网络接口，请考虑防火墙规则或反向代理认证。

6. **模型创建**：现在可通过 Modelfile 显式设置空系统提示，影响基础模型继承提示词的方式（[#18990](https://github.com/ollama/ollama/pull/18990)）。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English digest into Chinese, following the specific rules provided. Let me translate while:

1. Only outputting the translation - no preamble, no explanation, no markdown fences
2. Preserving all Markdown structure exactly (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
3. Keeping URLs, numbers, dates, code, project names, issue/PR references verbatim
4. Using natural technical Chinese register - like a Chinese developer newsletter, not literal word-for-word

Let me go through and translate this carefully:

# LiteLLM Daily Digest — 2026-10-20

## Today's Highlights

The LiteLLM project is addressing several high-impact issues around streaming token handling, cost accounting accuracy, and Azure token management. Notable new provider support includes Hopper inference, while multiple PRs are refactoring the chat execution path to improve maintainability and reduce hook duplication. A critical bug affects RAM usage in Kubernetes deployments, and several token counting edge cases have surfaced.

---

## Releases & Breaking Changes

No new releases in the last 24 hours.

**Active PRs introducing potential breaking changes:**

- **[fix(streaming)!: send include_usage chunk with empty choices](https://github.com/BerriAI/litellm/pull/47109)** — Aligns with OpenAI's `choices: []` format; strict clients like LangChain.js may have been double-counting usage.

- **[fix(azure)!: keep Entra token fetches off event loop](https://github.com/BerriAI/litellm/pull/47417)** — Route compaction now uses `/v1` endpoints; removes per-request token fetches.

- **[fix(responses)!: count input tokens the way inference sends the request](https://github.com/BerriAI/litellm/pull/47363)** — Resolves token count mismatches causing 400s when tools are present.
  
- **[fix(secret_managers)!: resolve oidc/file and oidc/env refs per request](https://github.com/BerriAI/litellm/pull/47341)** — Admin-configured api_keys with OIDC references now resolve per request for proper rotation.

---

## New Model & Hardware Support

- **[feat(providers): add Hopper inference support](https://github.com/BerriAI/litellm/pull/47465)** — New `hopper/` provider prefix with `HOPPER_API_KEY`. Adds pricing for Gemma 4 and DeepSeek V4.1 Flash models.

- **[feat(dashscope): add separate explicit and implicit cache pricing](https://github.com/BerriAI/litellm/pull/45567)** — DashScope bills explicit cache hits at 10% of input vs. 20% for implicit; LiteLLM now tracks provider's `cache_type` correctly.

---

## Performance & Optimization

- **[perf(streaming): cut per-chunk pydantic round trips](https://github.com/BerriAI/litellm/pull/47030)** — Reduces overhead on OpenAI-compatible streams by dumping only non-OpenAI keys and building deltas once.

- **[refactor(native): move execute_chat and chat planner out of main.py](https://github.com/BerriAI/litellm/pull/46995)** — Code organization improvement; native callers no longer import from restricted `litellm.main`.

- **[refactor: call execute_chat from Messages to chat bridge](https://github.com/BerriAI/litellm/pull/46820)** — Eliminates double `@client` pass execution, reducing deployment hook fires from 2× to 1× per request.

---

## Stability & Regressions

| Severity | Issue | Status | PR/Fix |
|----------|-------|--------|--------|
| **High** | **[Heavy RAM usage over time — pods crash](https://github.com/BerriAI/litellm/issues/27954)** | OPEN | No fix PR yet |
| **High** | **[Client-cancelled requests show $0 spend](https://github.com/BerriAI/litellm/pull/47436)** | OPEN | Fix in progress |
| **Medium** | **[token_counter rejects image detail "original"](https://github.com/BerriAI/litellm/issues/47327)** | OPEN | — |
| **Medium** | **[tpm_limit never refills with in-memory cache](https://github.com/BerriAI/litellm/issues/47340)** | OPEN | — |
| **Medium** | **[num_retries permanently None after any exception](https://github.com/BerriAI/litellm/issues/33272)** | OPEN | — |
| **Low** | **[ModuleNotFoundError: No module named 'mcp'](https://github.com/BerriAI/litellm/issues/46045)** | OPEN | — |
| **Low** | **[Stream cut loses cached_tokens](https://github.com/BerriAI/litellm/issues/47332)** | OPEN | — |
| **Low** | **[Spend logs dropped for providers returning id:null](https://github.com/BerriAI/litellm/issues/39749)** | OPEN | — |

---

## What This Means for Application Developers

1. **Token accounting changes**: If you're using `include_usage: true` with streaming, the response format now matches OpenAI's `choices: []`. Review client code that parses usage chunks.

2. **Budget handling improvements**: Users can now clear their own `max_budget` via `/key/update` with `"max_budget": null` — a regression test confirms this works.

3. **Azure Entra token performance**: If using OIDC/Azure deployments, expect reduced latency on burst traffic — tokens are now fetched once per burst and reused.

4. **Hopper support**: New provider option for Gemma 4 and DeepSeek V4.1 Flash inference — check [PR #47465](https://github.com/BerriAI/litellm/pull/47465) for configuration details.

5. **Monitor the RAM issue**: If running LiteLLM on Kubernetes, the memory leak reported in [#27954](https://github.com/BerriAI/litellm/issues/27954) may affect long-running deployments; consider pod restart policies until resolved.

6. **Image handling edge case**: The new `"original"` image detail value from OpenAI causes pre-call token checks to skip (logs ERROR); avoid using this detail mode for now in proxy contexts with strict validation.</think>

# LiteLLM 每日简报 — 2026-10-20

## 今日要点

LiteLLM 项目正在处理几个高影响力的议题：流式传输 token 处理、成本核算准确性，以及 Azure Token 管理。值得注意的新提供商支持包括 Hopper 推理，同时多个 PR 正在重构聊天执行路径以提高可维护性并减少 Hook 重复执行。一个关键 bug 影响 Kubernetes 部署的内存使用，还出现了几个 Token 计数的边缘情况。

---

## 发布与破坏性变更

过去 24 小时内无新版本发布。

**正在引入潜在破坏性变更的活跃 PR：**

- **[fix(streaming)!: send include_usage chunk with empty choices](https://github.com/BerriAI/litellm/pull/47109)** — 与 OpenAI 的 `choices: []` 格式对齐；严格的客户端（如 LangChain.js）可能曾重复计算使用量。

- **[fix(azure)!: keep Entra token fetches off event loop](https://github.com/BerriAI/litellm/pull/47417)** — 路由压缩现使用 `/v1` 端点；移除每次请求的 Token 获取。

- **[fix(responses)!: count input tokens the way inference sends the request](https://github.com/BerriAI/litellm/pull/47363)** — 解决工具存在时导致 400 错误的 Token 计数不匹配问题。

- **[fix(secret_managers)!: resolve oidc/file and oidc/env refs per request](https://github.com/BerriAI/litellm/pull/47341)** — 管理员配置的 api_key 中的 OIDC 引用现改为每次请求解析，以支持正确的轮换。

---

## 新模型与硬件支持

- **[feat(providers): add Hopper inference support](https://github.com/BerriAI/litellm/pull/47465)** — 新增 `hopper/` 提供商前缀，需设置 `HOPPER_API_KEY`。新增 Gemma 4 和 DeepSeek V4.1 Flash 模型的定价。

- **[feat(dashscope): add separate explicit and implicit cache pricing](https://github.com/BerriAI/litellm/pull/45567)** — DashScope 对显式缓存命中按输入的 10% 计费，隐式缓存则按 20%；LiteLLM 现正确追踪提供商的 `cache_type`。

---

## 性能优化

- **[perf(streaming): cut per-chunk pydantic round trips](https://github.com/BerriAI/litellm/pull/47030)** — 通过仅转储非 OpenAI 键并一次性构建 delta，减少 OpenAI 兼容流上的开销。

- **[refactor(native): move execute_chat and chat planner out of main.py](https://github.com/BerriAI/litellm/pull/46995)** — 代码组织改进；原生调用者不再从受限的 `litellm.main` 导入。

- **[refactor: call execute_chat from Messages to chat bridge](https://github.com/BerriAI/litellm/pull/46820)** — 消除重复的 `@client` 传递执行，将部署 Hook 触发次数从每请求 2 次降至 1 次。

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | PR/修复 |
|----------|------|------|---------|
| **高** | **[长时间运行内存占用过高 — Pod 崩溃](https://github.com/BerriAI/litellm/issues/27954)** | 待处理 | 暂无修复 PR |
| **高** | **[客户端取消的请求显示 $0 花费](https://github.com/BerriAI/litellm/pull/47436)** | 待处理 | 修复进行中 |
| **中** | **[token_counter 拒绝图片 detail 为 "original"](https://github.com/BerriAI/litellm/issues/47327)** | 待处理 | — |
| **中** | **[tpm_limit 使用内存缓存时从不重置](https://github.com/BerriAI/litellm/issues/47340)** | 待处理 | — |
| **中** | **[num_retries 任何异常后永久为 None](https://github.com/BerriAI/litellm/issues/33272)** | 待处理 | — |
| **低** | **[ModuleNotFoundError: No module named 'mcp'](https://github.com/BerriAI/litellm/issues/46045)** | 待处理 | — |
| **低** | **[Stream 中断丢失 cached_tokens](https://github.com/BerriAI/litellm/issues/47332)** | 待处理 | — |
| **低** | **[提供商返回 id:null 时丢弃 Spend 日志](https://github.com/BerriAI/litellm/issues/39749)** | 待处理 | — |

---

## 这对应用开发者意味着什么

1. **Token 核算变更**：如果在使用流式传输时启用 `include_usage: true`，响应格式现与 OpenAI 的 `choices: []` 一致。请检查客户端代码中解析使用量块的逻辑。

2. **预算处理改进**：用户现可通过 `/key/update` 传入 `"max_budget": null` 来清除自己的 `max_budget` — 回归测试确认此功能正常。

3. **Azure Entra Token 性能**：如果使用 OIDC/Azure 部署，突发流量时延迟将降低 — Token 现改为每批次获取一次并复用。

4. **Hopper 支持**：Gemma 4 和 DeepSeek V4.1 Flash 推理的新提供商选项 — 请参阅 [PR #47465](https://github.com/BerriAI/litellm/pull/47465) 了解配置详情。

5. **关注内存问题**：如果在 Kubernetes 上运行 LiteLLM，[#27954](https://github.com/BerriAI/litellm/issues/27954) 报告中提到的内存泄漏可能影响长时间运行的部署；在修复前请考虑设置 Pod 重启策略。

6. **图片处理边缘情况**：OpenAI 新的 `"original"` 图片 detail 值会导致预调用 Token 检查跳过（记录 ERROR）；目前在具有严格验证的代理上下文中请避免使用此 detail 模式。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this GitHub digest into Simplified Chinese, following specific rules:
- Output ONLY the translation, no preamble
- Preserve Markdown structure exactly
- Keep technical terms, URLs, numbers, issue/PR references as-is
- Use natural technical Chinese register

Let me translate this carefully while maintaining all formatting and technical accuracy.</think>

# Unsloth 要闻 — 2026年10月20日

## 今日要闻

Unsloth 发布 **v0.1.909-beta**，带来 DeepSeek-V4.1-Flash-1017（552B/16B 活跃参数，约125GB显存）和 FLUX.3 图像生成功能，现已支持在聊天中直接发送图片和视频。多 GPU 训练进入 alpha 阶段，支持 FSDP2，一键 MCP 配置简化了编码智能体的集成。训练界面正在进行重大改版，新增 DPO/ORPO/GRPO 训练和规则奖励库支持。

---

## 版本发布与重大变更

| 版本 | 关键变更 | 链接 |
|------|----------|------|
| v0.1.909-beta | DeepSeek-V4.1-Flash-1017, FLUX.3 Image Klein, 聊天图片/视频, FSDP2 多 GPU (alpha), 一键 MCP 配置 | [Release](https://github.com/unslothai/unsloth/releases) |

**迁移说明：**
- FSDP2 需要在 `torchrun` 下设置 `UNSLOTH_FSDP2=1` — 目前为 alpha 阶段，不建议用于生产训练。
- 块编译（Block compile，`UNSLOTH_BLOCK_COMPILE=1` 自 2026.10.6 起）在分布式运行中存在检查点重计算 bug — 请临时设置 `UNSLOTH_BLOCK_COMPILE=0` 作为解决方案（[#14063](https://github.com/unslothai/unsloth/issues/14063)）。

---

## 新模型与硬件支持

- **DeepSeek-V4.1-Flash-1017**：总计 552B 参数，16B 活跃参数 — 可在约 125GB 显存本地运行
- **FLUX.3 Image Klein**：图像生成模型现已支持本地运行
- **多 GPU FSDP2（alpha）**：原生 Unsloth FSDP2 封装，每 decoder block 使用 `fully_shard`，支持 MixedPrecisionPolicy — 兼容 LoRA、QLoRA 和全参数微调（[#14273](https://github.com/unslothai/unsloth/pull/14273)）
- **MCP 服务器资源**：模型现可通过 `resources/list` 读取 MCP 服务器资源（文件、文档），不仅仅是调用工具（[#14243](https://github.com/unslothai/unsloth/pull/14243)）

---

## 性能优化

| PR | 变更内容 | 影响 |
|----|----------|------|
| [#14297](https://github.com/unslothai/unsloth/pull/14297) | PrefixGrouper: 通过 CPU slice 实现多组段标签，单次 GPU 传输 | 替代 3×G 次小设备分配，改为 2 次 host→device 拷贝 |
| [#14296](https://github.com/unslothai/unsloth/pull/14296) | Packing: 原地填充 `packed_block_mask` 和 SDPA mask | 替代每段中间分配，改用 `triu_`/`tril_` 操作 |
| [#14295](https://github.com/unslothai/unsloth/pull/14295) | Cross entropy: 对掩码行（`label == -100`）跳过 logits 加载和 exp 计算 | 对忽略 token 跳过 `[VOCAB_SIZE]` 加载 + `exp`；防止 NaN/Inf 污染 |
| [#14219](https://github.com/unslothai/unsloth/pull/14219) | Packed SDPA: 每行分割一次，跳过单次运行的 `torch.cat` | 等长段实现零拷贝视图 |
| [#14218](https://github.com/unslothai/unsloth/pull/14218) | RoPE: 在 `Fast_RoPE_Embedding_QK` 反向传播中保持 BSHD 布局 | 调用方的 transpose+reshape 变为零拷贝视图 |
| [#14103](https://github.com/unslothai/unsloth/pull/14103) | 梯度检查点重计算时跳过未使用的 `down_proj` | 消除反向传播中浪费的 `act(e,g)` + `down_proj` |

---

## 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 说明 |
|------|----------|------|------|
| [#14063](https://github.com/unslothai/unsloth/issues/14063)：块编译在分布式运行中破坏检查点重计算 | **高** | 进行中 | 使用 `UNSLOTH_BLOCK_COMPILE=0` 临时方案；影响 FSDP2/分布式训练 |
| [#7371](https://github.com/unslothai/unsloth/issues/7371)：AMD Strix Halo + ROCm 性能回退 | 中 | 已关闭 | b10079 版本回归调查中 |
| [#12845](https://github.com/unslothai/unsloth/issues/12845)：AppImage 在 Arch/GNOME/Wayland 下窗口调整大小问题 | 中 | 已关闭 | 已在近期版本修复 |
| [#14052](https://github.com/unslothai/unsloth/issues/14052)：AMD audio runtime 未安装 | 低 | 已关闭 | 运行 `unsloth studio update` 安装 |
| [#14055](https://github.com/unslothai/unsloth/issues/14055)：macOS v0.1.908-beta 上 `scrollbarGutter` 错误 | 低 | 已关闭 | 桌面端 JS 错误 |
| [#14221](https://github.com/unslothai/unsloth/issues/14221)：Model Hub 筛选器回归 | 低 | 进行中 | 筛选功能异常 |

---

## 对应用开发者的意义

1. **多模态聊天已就绪**：v0.1.909-beta 支持在聊天中直接发送图片和视频 — 无需外部预处理即可构建支持视觉的智能体。

2. **训练界面重大升级**：PR [#12601](https://github.com/unslothai/unsloth/pull/12601) 新增 DPO、ORPO、GRPO 训练及规则奖励库。结合 [#14074](https://github.com/unslothai/unsloth/pull/14074)（可编辑奖励、分数解释），构建偏好微调模型变得更加便捷。

3. **MCP 集成简化**：一键 MCP 配置以及模型读取 MCP 服务器资源的能力（[#14243](https://github.com/unslothai/unsloth/pull/14243)）降低了构建需要访问本地工具和文件的编码智能体的门槛。

4. **FSDP2 仍为 alpha**：通过原生 FSDP2 的多 GPU 训练需要手动启用（`UNSLOTH_FSDP2=1`）。生产环境暂勿使用 — 块编译检查点 bug（[#14063](https://github.com/unslothai/unsloth/issues/14063)）会影响分布式运行。

5. **桌面应用改进**：语音模式增强（[#14084](https://github.com/unslothai/unsloth/pull/14084)）、本地主机浏览器面板访问（[#14290](https://github.com/unslothai/unsloth/pull/14290)）以及技能导出/导入（[#14181](https://github.com/unslothai/unsloth/pull/14181)）让本地开发更加顺畅。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*