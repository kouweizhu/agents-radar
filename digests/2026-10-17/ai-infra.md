# AI 基础设施日报 2026-10-17

> 生成时间: 2026-10-17 00:44 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this English report into Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, code, numbers, project names, etc. as-is
4. Use natural technical Chinese register - like a Chinese developer newsletter

Let me translate this carefully while maintaining the exact structure and technical accuracy.

Key terms to translate consistently:
- "ecosystem" → 生态系统
- "infrastructure" → 基础设施
- "serving engine" → 服务引擎
- "runtime" → 运行时
- "gateway" → 网关
- "fine-tuning" → 微调
- "deployment" → 部署
- "throughput" → 吞吐量
- "KV cache/offloading" → KV缓存/卸载
- "quantization" → 量化
- "batching" → 批处理
- "kernel fusion" → 核函数融合
- "regression" → 回归问题/回退
- "agentic" → Agent（保持英文）
- "tool-calling" → 工具调用

Let me translate the entire report now.</think>

# AI 基础设施生态系统对比 — 2026-10-17

## 1. 生态系统概览

AI推理栈正在围绕三大主导模式收敛：全功能服务引擎（vLLM、SGLang）在云端部署中竞争吞吐量和特性；轻量级本地运行时（llama.cpp、Ollama）竞相实现移动端和边缘端可用性；网关/抽象层（LiteLLM）解决多供应商编排问题。与此同时，微调工具链（Unsloth）正从监督学习扩展到DPO/ORTO/GRPO偏好学习领域。今日活动反映了这种分化：SGLang和vLLM推动Blackwell（SM120）和MI355X硬件极限，而llama.cpp和Ollama拓展移动端GPU支持（Adreno X1、MLX）。最终效果是生态系统向生产级可靠性成熟——但在Flash Attention、KV卸载和结构化输出管线上存在显著的回归风险面。

---

## 2. 活动对比

| 项目 | 活跃Issue | 近期PR | 24小时内Release | 热点领域 |
|---------|-----------------|--------------|----------------|--------------|
| **vLLM** | 95 | 500 | 0 | ROCm MI355X、NVFP4批处理、KV卸载 |
| **SGLang** | ~60 | ~200 | 0 | DeepSeek-V4.1、PD分离、HiCache |
| **llama.cpp** | ~50 | ~100 | 7 | OpenCL MxFP4、Beam/Granite、Hexagon q2_0 |
| **Ollama** | 23 | ~15 | 1 (v0.40.6) | Windows孤儿进程、云端503、Gemma 4 |
| **LiteLLM** | ~20 | ~30 | 1 (v1.107.0-dev.3) | Bedrock结构化输出、费用日志 |
| **Unsloth** | 16 | 176 | 0 | 多实例链接、FLUX.3、DPO/GRPO |

**观察：**

- **Unsloth** PR数量领先（176），尽管Issue数量最少——在多实例基础设施和训练管线上进行大量特性开发。
- **vLLM + SGLang** Issue数量占主导，反映规模化生产 hardening 挑战。
- **llama.cpp** 今日提交7个Commit——发布速度最高，聚焦移动端/边缘端内核工作。
- **Ollama** 保持最小的表面面积，但存在关键生产bug（503错误、费用日志丢失）。

---

## 3. 模型支持竞速

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1 Flash** | ✅ | ✅ (RTX PRO 6000) | — | — | — | — |
| **Qwen3.8 Flash-Next** | ✅ (ROCm MXFP4) | ✅ | — | — | — | — |
| **Nemotron-H Lightning NVFP4** | ✅ | — | — | — | — | — |
| **Nemotron 3.5 ASR Streaming** | ✅ | — | — | — | — | — |
| **GLM-5.3 Flash** | — | ✅ (SM120 workaround) | — | — | — | — |
| **Beam (Reflection)** | — | — | ✅ | — | — | — |
| **Granite Switch Decision** | — | — | ✅ | — | — | — |
| **PPLX Decider v1.1** | — | — | — | ✅ (MLX) | — | — |
| **Gemma 4** | — | — | — | ✅ (max_soft_tokens) | — | — |
| **Bedrock Haiku 5.5** | — | — | — | — | ✅ | — |
| **Bedrock Sonnet 5.5** | — | — | — | — | ✅ | — |
| **FLUX.3 Image Klein** | — | — | — | — | — | ✅ |
| **MuseSpark** | — | ✅ | — | — | — | — |

**领先者：**

- **云端/HPC服务**：vLLM和SGLang在DeepSeek和Qwen3上领先——这些模型驱动着生产级LLM流量。
- **移动端/边缘端**：llama.cpp在Adreno X1和Hexagon上领先；Ollama在MLX集成上领先。
- **企业网关**：LiteLLM在Bedrock结构化输出覆盖上占主导。
- **微调**：Unsloth独树一帜，提供DPO/ORTO/GRPO偏好学习。

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 关键工作项 |
|------------------|-----------------|-----------------|
| **KV缓存/卸载** | vLLM、SGLang、llama.cpp | vLLM：FlashAttention视图重建缓存（~21µs/层）；SGLang：主机层HiCache命中长度开销（80%命中率达44-66%损失）；llama.cpp：KV合并优化 |
| **量化** | vLLM、llama.cpp、LiteLLM | llama.cpp：IQ2_NL/IQ3_NL、Hexagon q2_0/q1_0；vLLM：MI355X上MXFP4；LiteLLM：custom_cost_per_token双重计费修复 |
| **批处理** | vLLM、SGLang | vLLM：NVFP4批不变服务；SGLang：预填充评分优化 |
| **核函数融合** | vLLM、SGLang、llama.cpp | vLLM：QK-norm+RoPE+gate融合内核（ROCm）；llama.cpp：ngram缓存引用读取；SGLang：DSv4.1词元融合 |
| **流式输出/SSE** | LiteLLM、Ollama | LiteLLM：请求头保留回归（v1.105.0+）；Ollama：思考内容显示修复 |
| **CLI/启动** | LiteLLM、Unsloth | LiteLLM：无SDK CLI（~4.6s节省）；Unsloth：轮子下载减半 |

**前沿领导者：**

- **长上下文吞吐量**：SGLang的HiCache分析最严谨——揭示了高命中率达44-66%吞吐量损失的发现，这是大多数团队不愿公开的。
- **移动端GPU**：llama.cpp的Adreno X1 OpenCL MxFP4内核是当前唯一流片的移动端优化MoE内核。
- **CLI性能**：LiteLLM的无SDK启动证明了基于Python的CLI可以达到shell脚本的延迟水平。

---

## 5. 层级定位

| 层级 | 项目 | 主要角色 |
|-------|----------|--------------|
| **服务引擎（远程）** | vLLM、SGLang | GPU优化推理服务器，具备KV卸载、前缀缓存、投机解码。目标：云端/集群部署。 |
| **本地运行时** | llama.cpp、Ollama | CPU/GPU/Apple Silicon推理运行时。llama.cpp：跨平台；Ollama：开发者友好UX。目标：边缘、笔记本、端部署。 |
| **网关/代理** | LiteLLM | 多供应商抽象、成本日志、重试、认证。目标：工程团队跨供应商标准化单一SDK。 |
| **微调/训练** | Unsloth | LoRA/QLoRA微调，现扩展到DPO/ORTO/GRPO偏好学习、多实例服务。目标：微调工程师、RLHF工作流。 |

**竞争动态：**

- **vLLM vs SGLang**：特性趋同（PD分离、前缀缓存、投机解码）。差异现在体现在调度激进程度和ROCm投入上。
- **llama.cpp vs Ollama**：llama.cpp是引擎；Ollama是产品化封装。今日Ollama的bug（云端503、费用日志丢失）在llama.cpp中会是后端bug。
- **LiteLLM vs vLLM**：非直接竞争——LiteLLM可以将流量路由到vLLM作为后端。然而，LiteLLM的代理层bug（费用日志丢失、审计日志fire-and-forget）创造的数据完整性风险是vLLM原生日志可避免的。
- **Unsloth vs 其他**：独特定位——唯一结合微调与多实例服务基础设施的项目。通过 `@name/model` 语法的 `/v1/models` 统一是引人注目的部署模式。

---

## 6. 趋势信号

### Agent/应用开发者应关注什么

| 趋势 | 证据 | 影响 |
|-------|----------|--------------|
| **硬件碎片化加剧** | gfx950/MI355X (ROCm)、RTX PRO 6000 (PCIe)、Adreno X1 (OpenCL)、MLX、Hexagon——6个新后端单日出现 | 在目标硬件上测试后再生产；别假设CUDA等于快 |
| **结构化输出正在变得可靠** | LiteLLM Bedrock Haiku/Sonnet 5.5修复；vLLM XGrammar + DFlash（存在回归但投入明确） | Agent工具调用在更多模型上可行；边缘情况仍需降级方案 |
| **KV卸载是下一个可扩展性杠杆** | vLLM TP无关卸载追踪器、SGLang主机层HiCache工作 | 多租户部署将更激进地卸载；监控命中 |
| **偏好学习走向主流** | Unsloth DPO/ORTO/GRPO、LiteLLM费用日志改进 | RLHF流水线不再是纯研究；偏好数据基础设施正在成熟 |
| **可观测性正在跟上** | LiteLLM异步日志修复、vLLM工具调用指标、Unsloth多实例链接 | 生产Agent调试越来越容易；从推理供应商处要求指标 |
| **Windows仍是二等公民** | Ollama运行器孤儿进程修复、Unsloth轮子下载卡顿、LiteLLM代理环境变量 | 如果部署到Windows，充分测试——CI覆盖存在缺口 |
| **回归速度很高** | 3个项目4个关键bug（DeepSeek-V4.1崩溃、GLM-5.3乱码、Ollama 503、LiteLLM费用日志丢失） | 生产环境升级服务基础设施前进行staging验证；订阅安全/性能发布说明 |

### 结论

推理生态系统正分化为**云端规模化服务**（vLLM、SGLang）和**本地/边缘运行时**（llama.cpp、Ollama），辅以**网关**（LiteLLM）和**微调**（Unsloth）作为正交层。今日活动显示所有三条路线都在激进推进。对于基础设施工程师：**明确验证你的硬件后端**、**生产前staging升级**、**为Agent工具使用要求结构化输出降级方案**。回归表面不小，但特性迭代速度也前所未有。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the provided English vLLM Daily Digest into Chinese. I need to:
1. Keep all Markdown structure (headings, tables, lists, etc.)
2. Keep URLs, issue/PR numbers, code identifiers as-is
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

**Today's Highlights** - 今日要闻

**Releases & Breaking Changes** - 版本发布与重大变更

**New Model & Hardware Support** - 新模型与硬件支持

**Performance & Optimization** - 性能优化

**Stability & Regressions** - 稳定性与回归问题

**What This Means for Application Developers** - 对应用开发者的影响

Let me translate the full content:</think>

# vLLM 每日简报 — 2026-10-17

## 今日要闻

vLLM 项目在 ROCm/AMD GPU 优化、KV 卸载和可观测性方面持续活跃开发。值得注意的是，Q4 2026 路线图 issue 已发布供社区审阅，同时多个影响 DeepSeek-V4.1 和 GLM 模型正确性的 bug 需要关注。模型加载器现在支持 checkpoint 驱逐功能，以处理大于内存的 safetensors 文件。

---

## 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

| 领域 | 详情 | 参考 |
|------|---------|-----------|
| **ROCm/AMD** | gfx950 / MI355X 性能优化跟踪：Qwen3.8-2.4T-A95B (MXFP4) 和 Qwen3.8-Flash-Next | [#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **NVIDIA** | Nemotron-H Lightning NVFP4 批次无关服务（与训练对齐），需启用 `VLLM_BATCH_INVARIANT=1` | [#62017](https://github.com/vllm-project/vllm/pull/62017) |
| **NVIDIA** | Nemotron 3.5 ASR Streaming（流式 ASR 模型）支持 | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **ROCm** | AITER 在 CDNA3+（MI300 系列）上默认启用 | [#62092](https://github.com/vllm-project/vllm/pull/62092) |

---

## 性能优化

| 类别 | 详情 | 影响 | 参考 |
|----------|---------|--------|-----------|
| **KV Cache** | FlashAttention 后端每次调用重建 KV-cache 视图（每层约 21 µs CPU） | 自 #44455 以来的 TTFT 回归；缓存可带来 12-16% TTFT 提升 | [#59534](https://github.com/vllm-project/vllm/issues/59534) |
| **模型加载器** | 当 safetensors 文件超过 90% 内存时自动驱逐 | 防止大模型加载时 OOM | [#62110](https://github.com/vllm-project/vllm/pull/62110) |
| **CPU 推理** | DiffusionGemma 单次前向读取 | 降低 CPU 后端开销 | [#61480](https://github.com/vllm-project/vllm/pull/61480) |
| **ROCm Kernel** | Qwen3-Next/Qwen3.5 融合 QK-norm+RoPE+gate Triton kernel | 在 ROCm 上启用 | [#51406](https://github.com/vllm-project/vllm/pull/51406) |
| **KV 卸载** | TP 无关的 KV 卸载跟踪器（不同 TP 大小间共享） | 进行中；需要帮助 | [#61886](https://github.com/vllm-project/vllm/issues/61886) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 影响 | 状态 |
|----------|-------|--------|-----------|
| **高** | DeepSeek-V4.1-Flash + DSpark 投机解码 — 长 prompt 上 SM120 sparse-MLA prefill 非法内存访问 | 投机解码时崩溃 | 待处理；[#56771](https://github.com/vllm-project/vllm/issues/56771) |
| **高** | XGrammar 请求终止时 V2 DFlash 概率草稿和块拒绝 | 间歇性结构化输出失败 | 待处理；[#61383](https://github.com/vllm-project/vllm/issues/61383) |
| **高** | NIXLConnector：远程 READ 进行中时释放 KV 块，解码静默消费被覆盖的 KV | 数据损坏（P/D 模式） | 修复已合并；[#61549](https://github.com/vllm-project/vllm/pull/61549) |
| **中** | GLM-5.3-Flash 低并发下输出乱码（ROCm） | 输出错误 | 待处理；[#59413](https://github.com/vllm-project/vllm/issues/59413) |
| **中** | GLM-5.2-FP8 + 前缀缓存 + FP8 KV 重复 prompt 返回空内容 | 静默数据损坏 | 待处理；[#60494](https://github.com/vllm-project/vllm/issues/60494) |
| **中** | Mamba2 chunk scan kernel 在 Hopper (sm90) 特定 autotune 配置下写入 NaN | 输出错误 | 修复已合并；[#61718](https://github.com/vllm-project/vllm/pull/61718) |
| **中** | Triton kernel 在推理期间 JIT 编译 | 延迟意外飙升 | 待处理；[#43009](https://github.com/vllm-project/vllm/issues/43009) |
| **低** | `language_model` 下挂载 LM 的 wrapper 模型 LoRA 静默无效 | LoRA 未生效 | 待处理；[#48019](https://github.com/vllm-project/vllm/issues/48019) |

---

## 对应用开发者的影响

1. **部署注意事项**：如果在 MI300 系列上使用 ROCm，AITER 现已默认启用——请确认你的工作负载受益；可使用 `VLLM_ROCM_USE_AITER=0` 回退。

2. **KV 卸载**：TP 无关的 KV 卸载工作正在进行中；这将支持不同 TP 大小间共享卸载 KV 的异构集群服务——这是多租户部署的重要一步。

3. **结构化输出**：XGrammar + DFlash 集成存在间歇性问题——生产部署前请考虑降级或充分测试。

4. **可观测性提升**：新的工具调用指标和 API 表层归因即将引入，将改善代理工作负载的调试。

5. **大 checkpoint 加载**：safetensors 驱逐修复有助于在内存受限节点上加载大型模型——发布后值得升级。

6. **Q4 路线图**：Q4 2026 路线图正在审阅中——欢迎社区反馈优先级意见。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest from English to Chinese (Simplified Chinese), preserving the exact Markdown structure including tables, headings, lists, and formatting. I need to output ONLY the translation with no preamble, no explanation, and no markdown fences around the whole output.

Let me translate this carefully, keeping:
- All headings
- All tables (including alignment rows)
- All lists (bulleted and numbered)
- Bold/italic formatting
- URLs and links
- Issue/PR references like #12345
- Code spans, file paths, etc.
- Numbers and dates

I'll use natural technical Chinese, the register of a Chinese developer newsletter.</think>

# SGLang 速报 — 2026-10-17

## 1. 今日要点

SGLang 持续推进 DeepSeek V4.1 优化和 Blackwell（SM120）支持。Q4 路线图中的 Prefill Context Parallelism（#21788）和 PD Disaggregation（#43699）正在成型，同时多个影响 RTX PRO 6000 部署和 HiCache 主机层缓存的正确性 bug 需要关注。Monokernel 框架 RFC（#43949）提出了一个厂商中立的内核架构。

---

## 2. 发布与破坏性变更

过去 24 小时内无发布。

---

## 3. 新模型与硬件支持

| 项目 | 详情 | PR/Issue |
|------|---------|----------|
| **DeepSeek-V4.1 Flash** | 8× RTX PRO 6000（SM120，96GB PCIe）现场报告 — 已记录可用配置 | #40877 |
| **SM120 上的 GLM-5.3-Flash** | fa4 注意力在 CUDA-graph 捕获时崩溃；triton 后端可作为临时方案 | #42012 |
| **Qwen VL 系列模型** | Qwen2-VL 到 Qwen3-Omni 的 token-space 策略已添加 | #43963, #43964 |
| **MuseSpark** | 新增多模态运行时和测试 | #44666 |
| **AMD ROCm** | kda: match_cutedsl_decode 在 ROCm 上被拒绝，parity 测试跳过 | #44089 |

---

## 4. 性能与优化

| 优化 | 描述 | PR/Issue |
|--------------|-------------|----------|
| **原生 tensor 输出 + prefill 评分** | 重大性能工作进行中 | #42248 |
| **DSv4.1 decoder bounded replay** | 独立 CUDA 默认启用 | #44403 |
| **Qwen3.5 FP8/NVFP4 归一化融合** | 将 GemmaRMSNorm 与输入量化融合 | #44812 |
| **DeepSeek V4.1 前置填充** | mHC SP + engram 融合待完成；q_rope_store 融入 fused_q_norm_rope | #42170 |
| **HiCache 吞吐量分析** | 长上下文 MLA 在 80% 命中率达到 44.6%–66.6% 吞吐量下降，原因是命中长度依赖的开销 | #44656 |

---

## 5. 稳定性与回归

### 严重

| Issue | 描述 | 严重程度 |
|-------|-------------|----------|
| **#26340** | CUDA coredump 追踪器 — CI 收集大量自动事件 | 高（CI）|
| **#43412** | 投机解码在首次非贪婪请求时崩溃 — flashinfer verify-sampling op JIT 失败（bundled cccl vs pip cu13）| 严重 |
| **#44479** | Runner 5090-vast-no-0 磁盘空间耗尽 — 所有 CI 任务失败 | 严重（CI）|
| **#44810** | DeepSeek-V4 BF16 checkpoint 被路由到 MXFP4 expert 路径，在 fused MoE 中失败 | 严重 |

### 高

| Issue | 描述 | 状态 |
|-------|-------------|----------|
| **#42012** | SM120 上的 GLM-5.3-Flash：fa4 在 hybrid extend reshape 时崩溃 | 待处理 |
| **#44735** | HiCache 主机层命中 hybrid GDN（Qwen3.8-Flash-Next）返回错误输出 | 待处理 |
| **#36669** | GLM-5.3-Flash thinking 输出在多工具 agentic 提示下退化为重复的 '!' | 待处理 |
| **#44794** | AMD：select_experts 将 fp32 MoE 修正偏置转换为 bf16，导致路由问题 | 待处理 |

### 中

| Issue | 描述 | 状态 |
|-------|-------------|----------|
| **#38452** | UnifiedRadixCache：L3 存储在主机层驱逐后永不查询 | 待处理 |
| **#44641** | 客户端声明的 mm_hashes 导致错误的图像 KV 重用和跨租户泄露 | 待处理 |
| **#44790** | HiCache 主机池 sizing 文档已添加 | PR 待审 |

---

## 6. 这对应用开发者意味着什么

1. **Blackwell（SM120）部署**：GLM-5.3-Flash 存在已知的 fa4 后端崩溃问题 — 使用 triton 后端作为临时方案。DeepSeek-V4.1-Flash 在 8× RTX PRO 6000 PCIe 上已可投产，已记录配置详情。

2. **投机解码**：如果使用 pip 安装的 SGLang（无系统 CUDA 工具包），请避免非贪婪采样 — 它会触发 JIT 失败导致进程崩溃。贪婪解码正常工作。

3. **HiCache 用户**：注意长上下文 MLA 工作负载中显著的吞吐量下降（80% 命中率时高达 66%）。主机层缓存在 hybrid GDN 模型上存在正确性 bug — 请避免使用或密切监控。

4. **Qwen VL 集成**：Token-space 处理现已默认启用，更好地兼容 HuggingFace 并支持 RL/多轮工作流程。

5. **AMD ROCm**：MoE 路由路径现在保留 fp32 精度；如果运行 DeepSeek-V2 系列模型，请确保使用最新的 ROCm 栈。

---

规则：
- 仅输出翻译内容。不需要前言、解释，或在整篇输出外包裹 markdown 代码块。
- 完全保留 Markdown 结构：标题、表格（包括对齐行）、列表、块引用、粗体/斜体、水平线、emoji。
- 保留 URL、链接目标、代码片段、代码块、数字和日期的原文。
- 保留项目名、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符的原样 — 不翻译它们。
- Issue/PR 引用如 #12345 及其链接文本保持不变。
- 使用自然的技术中文，即中文开发者通讯的语体风格 — 而非逐字直译。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English digest into Chinese (Simplified Chinese, as indicated by the context). I need to:

1. Translate the text while keeping all technical terms, code references, URLs, PR/issue numbers in their original form
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Use natural technical Chinese, the register of a Chinese developer newsletter
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through the content and translate it:

## 1. Today's Highlights

The project continues expanding hardware optimization for mobile and accelerated computing, with OpenCL kernels now supporting MxFP4 MoE on Adreno X1 devices. Model architecture support is broadening with Beam (Reflection) and Granite Switch Decision additions, while HTTP proxy environment variables are now honored—improving enterprise deployment compatibility. Performance work on KV cache merging and ngram caching shows ongoing focus on latency reduction.

Translation:
## 今日要闻

项目持续扩展移动和加速计算的硬件优化，OpenCL 内核现已支持 Adreno X1 设备上的 MxFP4 MoE。模型架构支持不断拓展，新增 Beam (Reflection) 和 Granite Switch Decision，同时现在会读取 HTTP 代理环境变量——提升了企业部署的兼容性。KV 缓存合并和 ngram 缓存的性能工作表明项目持续关注延迟优化。

---

## 2. Releases & Breaking Changes

- **b11702** — OpenCL: Add MxFP4 MoE bin kernel for Adreno X1 devices  
  https://github.com/ggml-org/llama.cpp/commit/b11702

- **b11701** — model: add Beam (Reflection)  
  https://github.com/ggml-org/llama.cpp/commit/b11701
  
我将继续翻译剩余部分，关注保持技术文档的精确性和专业性。每一部分都需要准确传达原始信息，同时确保语言自然流畅。

- **b11700** — model: Granite Switch Decision  
  https://github.com/ggml-org/llama.cpp/commit/b11700

- **b11699** — common: honor HTTP_PROXY/HTTPS_PROXY env vars in http client  
  https://github.com/ggml-org/llama.cpp/commit/b11699

- **b11696** — hexagon: correct HMX FA sinks  
  https://github.com/ggml-org/llama.cpp/commit/b11696

- **b11695** — model: MTP support for Mellum2.1  
  https://github.com/ggml-org/llama.cpp/commit/b11695

*No breaking API changes reported.*

我将重点关注技术实现的细节，确保每个项目的技术细节准确传达。

未报告破坏性 API 变更。

## 3. 新模型与硬件支持

- **Beam (Reflection)** — 通过转换器、模型图和聊天解析器新增模型架构支持，适用于 `Beam-1.0-501B-A23B`  
  https://github.com/ggml-org/llama.cpp/pull/30670

- **Granite Switch Decision** — 添加 decision.chat 模板，支持具有聊天功能的决策模型  
  https://github.com/ggml-org/llama.cpp/pull/30693

- **Mellum2.1** — 新增多令牌预测 (MTP) 支持  
  https://github.com/ggml-org/llama.cpp/commit/b11695

- **Adreno X1 (OpenCL)** — 针对此移动 GPU 的新型 MxFP4 MoE 内核优化  
  https://github.com/ggml-org/llama.cpp/pull/30691

- **Qwen3 embedding models** — 支持双向注意力机制和 `dense_2` 输出投影  
  https://github.com/ggml-org/llama.cpp/pull/30607

## 4. 性能与优化

| Commit/PR | 领域 | 变更内容 |
|-----------|------|----------|
| b11690 | ngram 缓存 | 引入零拷贝读取机制，减少推理过程中的内存开销 |
| b11688 | CPU/AVX2 | 优化平铺累加器协同计算，提升向量化效率 |
| #30694 | KV 缓存 | 读取状态时合并相邻 KV 范围，改善空闲槽位缓存保存速度 |

**进行中：**
- #29181 — CUDA 分组专家 top-k 融合（通过专家分组恢复大部分性能）
- #30627 — 通过 HVX/HMX 支持 Hexagon q2_0 量化
- #30122 — 通过本机 HVX 操作支持 Hexagon Q1_0

## 5. 稳定性与回归

| 问题 | 后端 | 严重程度 | 状态 |
|-------|

--------|----------|----------|
| [#24066](https://github.com/ggml-org/llama.cpp/issues/24066) | Vulkan | **高** — RX 6600 性能下降 | 开放中，45 条评论 |
| [#28752](https://github.com/ggml-org/llama.cpp/issues/28752) | Vulkan/RDNA3 | **高** — b10780 后严重提示处理减速 | 开放中，16 条评论 |
| [#27638](https://github.com/ggml-org/llama.cpp/issues/27638) | Vulkan/ANV | **中** — Flash Attention 退回到 SCALAR，导致 O(N²) 性能下降 | 开放中，15 条评论 |
| [#27063](https://github.com/ggml-org/llama.cpp/issues/27063) | SYCL | **高** — 在

我正在追踪多个严重的后端性能问题。SYCL 和 Vulkan 存在关键性能回归，影响不同硬件平台的系统稳定性。这些问题需要立即调查和优化，以提高整体性能。

一些项目已被标记为过时，可能需要维护者介入处理。特别值得注意的是 Metal 相关的 #30610 问题，这是一个关键的细分问题。

在企业部署场景中，HTTP_PROXY 环境变量支持解决了代理环境中的潜在下载失败问题。对于移动 GPU 用户，特别是 Adreno X1 设备，现有的 MoE 内核优化显著提升了模型吞吐量。

AMD RDNA3 系列 Vulkan 用户面临严重性能问题，尤其是 RX 6600/6700 系列。新的模型架构如 Beam 和 Granite Switch 决策支持现已可用。量化路线图显示了对边缘和移动部署的持续投资。

团队正在开发高级量化技术，包括 IQ2_NL/IQ3_NL 和 Hexagon q2_0/q1_0 支持。服务器 UI 改进将增强代理工具调用体验。

每日摘要来自 2026 年 10 月 17 日的 ggml-org/llama.cpp 活动。

我注意到几个性能问题需要注意：
1. 企业部署中 HTTP_PROXY 支持解决了代理环境下载失败问题
2. Adreno X1 设备用户（Snapdragon X Elite）的 Mix-of-Experts 模型性能得到提升
3. Vulkan 用户在 AMD RDNA3 上可能存在显著提示处理性能下降

这些问题涉及不同硬件平台和部署场景，需要进一步调查和优化。

新的模型架构如 Beam (Reflection) 和 Granite Switch Decision 已可用。量化路线图显示了对边缘和移动部署的重大投资，包括 IQ2_NL/IQ3_NL 和 Hexagon 支持。

服务器 UI 增加了"显示进行中的工具调用"设置，显著改善了代理工具使用体验。摘要基于 2026-10-17 的 ggml-org/llama.cpp 活动。

我注意到一个细节需要调整：项目描述应使用"项目"而非"项目"，以保持一致的技术文档风格。</think>

# llama.cpp 动态 — 2026-10-17

## 1. 今日要闻

项目持续扩展移动和加速计算的硬件优化，OpenCL 内核现已支持 Adreno X1 设备上的 MxFP4 MoE。模型架构支持不断拓展，新增 Beam (Reflection) 和 Granite Switch Decision，同时现在会读取 HTTP 代理环境变量——提升了企业部署的兼容性。KV 缓存合并和 ngram 缓存的性能工作表明项目持续关注延迟优化。

---

## 2. 版本发布与破坏性变更

- **b11702** — OpenCL: 为 Adreno X1 设备添加 MxFP4 MoE bin 内核  
  https://github.com/ggml-org/llama.cpp/commit/b11702

- **b11701** — model: 添加 Beam (Reflection)  
  https://github.com/ggml-org/llama.cpp/commit/b11701

- **b11700** — model: Granite Switch Decision  
  https://github.com/ggml-org/llama.cpp/commit/b11700

- **b11699** — common: 在 http 客户端中支持 HTTP_PROXY/HTTPS_PROXY 环境变量  
  https://github.com/ggml-org/llama.cpp/commit/b11699

- **b11696** — hexagon: 修复 HMX FA sinks  
  https://github.com/ggml-org/llama.cpp/commit/b11696

- **b11695** — model: Mellum2.1 的 MTP 支持  
  https://github.com/ggml-org/llama.cpp/commit/b11695

*未报告破坏性 API 变更。*

---

## 3. 新模型与硬件支持

- **Beam (Reflection)** — 通过转换器、模型图和聊天解析器新增模型架构支持，适用于 `Beam-1.0-501B-A23B`  
  https://github.com/ggml-org/llama.cpp/pull/30670

- **Granite Switch Decision** — 添加 decision.chat 模板，支持具有聊天功能的决策模型  
  https://github.com/ggml-org/llama.cpp/pull/30693

- **Mellum2.1** — 新增多令牌预测 (MTP) 支持  
  https://github.com/ggml-org/llama.cpp/commit/b11695

- **Adreno X1 (OpenCL)** — 针对此移动 GPU 的新型 MxFP4 MoE 内核优化  
  https://github.com/ggml-org/llama.cpp/pull/30691

- **Qwen3 embedding models** — 支持双向注意力机制和 `dense_2` 输出投影  
  https://github.com/ggml-org/llama.cpp/pull/30607

---

## 4. 性能与优化

| Commit/PR | 领域 | 变更内容 |
|-----------|------|----------|
| b11690 | ngram 缓存 | 改为引用读取而非复制——降低推理时的内存开销 |
| b11688 | CPU/AVX2 | 减少平铺累加器的合并操作——改进向量化 |
| #30694 | KV 缓存 | 读取状态时合并相邻 KV 范围——解决空闲槽位缓存保存慢的问题 |

**进行中：**
- #29181 — CUDA 分组专家 top-k 融合（通过专家分组恢复大部分性能）
- #30627 — Hexagon q2_0 量化支持 via HVX/HMX
- #30122 — Hexagon Q1_0 支持 via 本机 HVX 操作

---

## 5. 稳定性与回归

| Issue | 后端 | 严重程度 | 状态 |
|-------|---------|----------|----------|
| [#24066](https://github.com/ggml-org/llama.cpp/issues/24066) | Vulkan | **高** — RX 6600 性能下降 | 开放中，45 条评论 |
| [#28752](https://github.com/ggml-org/llama.cpp/issues/28752) | Vulkan/RDNA3 | **高** — b10780 后严重提示处理减速 | 开放中，16 条评论 |
| [#27638](https://github.com/ggml-org/llama.cpp/issues/27638) | Vulkan/ANV | **中** — Flash Attention 退回到 SCALAR，导致 O(N²) 退化 | 开放中，15 条评论 |
| [#27063](https://github.com/ggml-org/llama.cpp/issues/27063) | SYCL | **高** — 在 Intel A770 上完全不可用 | 已关闭 |
| [#27038](https://github.com/ggml-org/llama.cpp/issues/27038) | SYCL | **中** — 大内存分配时 CPU 占用高 | 已关闭 |
| [#30610](https://github.com/ggml-org/llama.cpp/issues/30610) | Metal | **高** — Nemotron 3.5 Bolt 74B-A9B 在 ggml_metal_op_mul_mat_id 中段错误 | 开放中，5 条评论 |

*注意：多个 issue 被标记为"stale"——可能需要维护者处理。*

---

## 6. 应用开发者需要关注的事项

1. **企业部署** — b11699 的 HTTP_PROXY/HTTPS_PROXY 支持修复了代理环境下的静默下载失败——使用 `-hf` 等参数时确保你的部署脚本正确设置标准环境变量。

2. **移动 GPU 推理** — Adreno X1 用户（如骁龙 X Elite）获得了优化的 MoE 内核；如果你的目标设备是 Windows on ARM 或移动 SoC，b11702 提升了 MoE 模型的吞吐量。

3. **AMD RDNA3 上的 Vulkan 用户** — Issue #28752 报告了严重的提示处理回退。如果你在 RX 6600/6700 系列上运行最新版本，需留意吞吐量下降；修复可能在准备中。

4. **新模型架构** — Beam (Reflection) 和 Granite Switch Decision 支持已可用；如果你的工作流需要评估这些模型，GGUF 转换管道现已可用。

5. **量化路线图** — 多个 PR 推进 IQ2_NL/IQ3_NL 量化类型（#27983、#27325）和 Hexagon q2_0/q1_0 支持（#30627、#30122），表明项目持续投资边缘/移动部署的激进量化方案。

6. **服务端 UI** — PR #30681 新增"显示进行中的工具调用"设置，改进了 llama-server 中智能体工具使用的用户体验。

---

*本文档基于 2026-10-17 当日 ggml-org/llama.cpp 的活动整理。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Simplified Chinese. I need to:
1. Translate all the content
2. Keep the Markdown structure exactly
3. Keep URLs, code references, issue numbers, etc. as-is
4. Use natural technical Chinese register

Let me go through it section by section:

**Title:** Ollama Digest — 2026-10-17 → Ollama 摘要 — 2026年10月17日

**Today's Highlights:** 今日要闻

**Release notes content:** needs translation

Let me translate this properly:

---

# Ollama 摘要 — 2026年10月17日

## 今日要闻

v0.40.6 版本带来了 GGUF Q2_0 张量支持、Windows 运行器孤立防护，以及 Ollama Cloud 中新的 Clef 模型。关键回归问题显现：Text Classifier 模型在 0.40.4+ 版本上出现明显减速，而 Ollama Cloud 则频繁出现 503 错误，影响生产环境工作负载。社区持续扩展硬件支持，PPLX Decider v1.1 现已支持 MLX，NVIDIA/AMD GPU 兼容性也有改进。

---

## 版本发布与破坏性变更

| 版本 | 变更 | PR |
|------|------|-----|
| **v0.40.6** | GGUF：新增 Q2_0 张量和文件类型 | [#18967](https://github.com/ollama/ollama/pull/18967) |
| | Windows：防止运行器孤立 | [#18500](https://github.com/ollama/ollama/pull/18500) |
| | 在 Ollama 云端上线 Clef | [#18700](https://github.com/ollama/ollama/pull/18700) |

**迁移注意：** `typical_p` 参数现已在 Python API 中返回 HTTP 400 — 该参数已被废弃，改用替代采样控制方式（[#18480](https://github.com/ollama/ollama/issues/18480)）。

---

## 新模型与硬件支持

- **PPLX Decider v1.1** — 新增 MLX 支持，配备非因果注意力、图像处理和 System One 提示编码功能（[#19072](https://github.com/ollama/ollama/pull/19072)）
- **LLM-jp-4.1** — 新增解析器处理特殊标记后的空格和谐输出（

[#18728](https://github.com/ollama/ollama/issues/18728)）
- **Gemma 4** — `max_soft_tokens`（图像标记预算）现作为运行时参数暴露（[#15626](https://github.com/ollama/ollama/issues/15626)）
- **EmbeddingGemma-2** — MLX 徽章现已在 ollama.com 库标签上正确显示（[#18971](https://github.com/ollama/ollama/issues/18971)）

---

## 性能与优化

| 领域 | 状态 | 详情 |
|------|------|------|
| **模型加载** | 进行中 | 原子指针重构消除并发预热模型查找中的缓存未命中竞态条件（[#19070](https://github.com/ollama/ollama/pull/19070)） |
| **

注册表传输** | 已修复 | 重定向目标的代理支持 — 解决间歇性拉取失败问题（[#19065](https://github.com/ollama/ollama/pull/19065)，修复 [#18716](https://github.com/ollama/ollama/issues/18716)） |
| **思考显示** | 已修复 | `requestAnimationFrame` 防止流式思考面板底线截断（[#13137](https://github.com/ollama/ollama/pull/13137)） |
| **猜测起草** | 改进 | `llama-server` 现自动检测猜测类型，减少手动 `--spec-type` 配置（[#19064](https://github.com/ollama/ollama/pull/19064)） |

**⚠️ 回归问题：** Text Classifier 模型（nimble、clef-flash、tev1）在 v0.40.4+ 上响应变慢 — v0.40.3 用户报告推理速度明显更快（[#19002](https://github.com/ollama/ollama/issues/19002)）。

---

## 稳定性与回归问题

### 严重（生产影响）
| 问题 | 严重程度 | 状态 | 修复 |
|------|----------|------|------|
| **Ollama Cloud 503 错误** — 云模型频繁出现服务不可用 | 🔴 严重 | OPEN | — |
| **A100 PCIe 总线掉线** — Qwen3.5 预热/推理期间（在 0.34.4/0.35.0 上） | 🔴 严重 | OPEN | — |
| **GLM-OCR 标记重复限制** — 0.34.1+ 上 HTTP 500（0.34.0 上成功） | 🔴 严重 | OPEN | — |

### 高
| 问题 | 严重程度 | 状态 | 修复 |
|------|----------|------|------|
| **Qwen3.8-Flash-Next (GSQ-RCO)** — 导入时"不支持的张量大小溢出" | 🔴 高 | OPEN | — |
| **GPT-OSS 20B** — AMD Radeon Pro 5700 XT 上通过 Vulkan 返回空响应（CPU 正常） | 🔴 高 | OPEN | — |
| **Nemotron-3.5-bolt** — 工具调用时 Metal 内核未找到导致运行器崩溃 | 🔴 高 | OPEN | — |
| **D1 vision** — 重复 HTTP 500，内存槽/KV 缓存错误 | 🔴 高 | OPEN | — |

### 中
| 问题 | 严重程度 | 状态 | 修复 |
|------|----------|------|------|
| **Windows NTFS 挂载** — `ollama list` 返回空 | 🟡 中 | OPEN | — |
| **Windows GPU 发现** — GPU 探测期间控制台窗口闪烁 | 🟡 中 | OPEN | — |
| **Claude Desktop 开关** — Windows 上缺失 | 🟡 中 | OPEN | — |
| **Gemma4 + think:false** — 工具结果后返回空消息 | 🟡 中 | CLOSED | — |

---

## 这对应用开发者意味着什么

1. **避免在 Text Classifier 工作负载上使用 v0.40.4+** — 如果推理延迟至关重要，请坚持使用 v0.40.3，直到减速回归问题得到解决。

2. **Ollama Cloud 可靠性注意事项** — 依赖云模型的生产代理应实现指数退避重试逻辑；考虑在 503 高峰期间使用本地备用模型。

3. **Windows 部署变更** — v0.40.6 中的运行器孤立防护改善了长期运行服务器的稳定性；GPU 发现控制台闪烁仍是待解决的 UI 优化项目。

4. **新模型功能** — Gemma 4 的 `max_soft_tokens` 支持精细的视觉标记预算控制；需要细节的使用场景可使用更高预算测试多模态提示。

5. **安全加固机会** — 新的可选应用层安全中间件为暴露的服务器启用 IP 允许列表、每路由策略和自动封禁逻辑（[#19045](https://github.com/ollama/ollama/issues/19045)）。

6. **注册表问题基本已解决** — v0.40.6 中的代理感知重定向修复了企业代理环境下困扰模型拉取的"重定向目标不允许"错误。

---</think>

# Ollama 摘要 — 2026年10月17日

## 今日要闻

v0.40.6 版本带来了 GGUF Q2_0 张量支持、Windows 运行器孤立防护，以及 Ollama Cloud 中新的 Clef 模型。关键回归问题显现：Text Classifier 模型在 0.40.4+ 版本上出现明显减速，而 Ollama Cloud 则频繁出现 503 错误，影响生产环境工作负载。社区持续扩展硬件支持，PPLX Decider v1.1 现已支持 MLX，NVIDIA/AMD GPU 兼容性也有改进。

---

## 版本发布与破坏性变更

| 版本 | 变更 | PR |
|------|------|-----|
| **v0.40.6** | GGUF：新增 Q2_0 张量和文件类型 | [#18967](https://github.com/ollama/ollama/pull/18967) |
| | Windows：防止运行器孤立 | [#18500](https://github.com/ollama/ollama/pull/18500) |
| | 在 Ollama 云端上线 Clef | [#18700](https://github.com/ollama/ollama/pull/18700) |

**迁移注意：** `typical_p` 参数现已在 Python API 中返回 HTTP 400 — 该参数已被废弃，改用替代采样控制方式（[#18480](https://github.com/ollama/ollama/issues/18480)）。

---

## 新模型与硬件支持

- **PPLX Decider v1.1** — 新增 MLX 支持，配备非因果注意力、图像处理和 System One 提示编码功能（[#19072](https://github.com/ollama/ollama/pull/19072)）
- **LLM-jp-4.1** — 新增解析器处理特殊标记后的空格和谐输出（[#18728](https://github.com/ollama/ollama/issues/18728)）
- **Gemma 4** — `max_soft_tokens`（图像标记预算）现作为运行时参数暴露（[#15626](https://github.com/ollama/ollama/issues/15626)）
- **EmbeddingGemma-2** — MLX 徽章现已在 ollama.com 库标签上正确显示（[#18971](https://github.com/ollama/ollama/issues/18971)）

---

## 性能与优化

| 领域 | 状态 | 详情 |
|------|------|------|
| **模型加载** | 进行中 | 原子指针重构消除并发预热模型查找中的缓存未命中竞态条件（[#19070](https://github.com/ollama/ollama/pull/19070)） |
| **Registry 传输** | 已修复 | 重定向目标的代理支持 — 解决间歇性拉取失败问题（[#19065](https://github.com/ollama/ollama/pull/19065)，修复 [#18716](https://github.com/ollama/ollama/issues/18716)） |
| **思考显示** | 已修复 | `requestAnimationFrame` 防止流式思考面板底线截断（[#13137](https://github.com/ollama/ollama/pull/13137)） |
| **猜测起草** | 改进 | `llama-server` 现自动检测猜测类型，减少手动 `--spec-type` 配置（[#19064](https://github.com/ollama/ollama/pull/19064)） |

**⚠️ 回归问题：** Text Classifier 模型（nimble、clef-flash、tev1）在 v0.40.4+ 上响应变慢 — v0.40.3 用户报告推理速度明显更快（[#19002](https://github.com/ollama/ollama/issues/19002)）。

---

## 稳定性与回归问题

### 严重（生产影响）
| 问题 | 严重程度 | 状态 | 修复 |
|------|----------|------|------|
| **Ollama Cloud 503 错误** — 云模型频繁出现服务不可用 | 🔴 严重 | OPEN | — |
| **A100 PCIe 总线掉线** — Qwen3.5 预热/推理期间（在 0.34.4/0.35.0 上） | 🔴 严重 | OPEN | — |
| **GLM-OCR 标记重复限制** — 0.34.1+ 上 HTTP 500（0.34.0 上成功） | 🔴 严重 | OPEN | — |

### 高
| 问题 | 严重程度 | 状态 | 修复 |
|------|----------|------|------|
| **Qwen3.8-Flash-Next (GSQ-RCO)** — 导入时"不支持的张量大小溢出" | 🔴 高 | OPEN | — |
| **GPT-OSS 20B** — AMD Radeon Pro 5700 XT 上通过 Vulkan 返回空响应（CPU 正常） | 🔴 高 | OPEN | — |
| **Nemotron-3.5-bolt** — 工具调用时 Metal 内核未找到导致运行器崩溃 | 🔴 高 | OPEN | — |
| **D1 vision** — 重复 HTTP 500，内存槽/KV 缓存错误 | 🔴 高 | OPEN | — |

### 中
| 问题 | 严重程度 | 状态 | 修复 |
|------|----------|------|------|
| **Windows NTFS 挂载** — `ollama list` 返回空 | 🟡 中 | OPEN | — |
| **Windows GPU 发现** — GPU 探测期间控制台窗口闪烁 | 🟡 中 | OPEN | — |
| **Claude Desktop 开关** — Windows 上缺失 | 🟡 中 | OPEN | — |
| **Gemma4 + think:false** — 工具结果后返回空消息 | 🟡 中 | CLOSED | — |

---

## 这对应用开发者意味着什么

1. **避免在 Text Classifier 工作负载上使用 v0.40.4+** — 如果推理延迟至关重要，请坚持使用 v0.40.3，直到减速回归问题得到解决。

2. **Ollama Cloud 可靠性注意事项** — 依赖云模型的生产代理应实现指数退避重试逻辑；考虑在 503 高峰期间使用本地备用模型。

3. **Windows 部署变更** — v0.40.6 中的运行器孤立防护改善了长期运行服务器的稳定性；GPU 发现控制台闪烁仍是待解决的 UI 优化项目。

4. **新模型功能** — Gemma 4 的 `max_soft_tokens` 支持精细的视觉标记预算控制；需要细节的使用场景可使用更高预算测试多模态提示。

5. **安全加固机会** — 新的可选应用层安全中间件为暴露的服务器启用 IP 允许列表、每路由策略和自动封禁逻辑（[#19045](https://github.com/ollama/ollama/issues/19045)）。

6. **Registry 问题基本已解决** — v0.40.6 中的代理感知重定向修复了企业代理环境下困扰模型拉取的"重定向目标不允许"错误。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest into Chinese, following specific rules. Let me carefully translate this while preserving all the formatting, links, and technical terms.

Key points:
1. Output ONLY the translation, no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, dates, issue/PR references as-is
4. Use natural technical Chinese, not literal translation

Let me translate section by section:

## Releases & Breaking Changes
- Breaking Changes -> 破坏性变更
- supply-chain security -> 供应链安全

## New Model & Hardware Support
- Hardware Support -> 硬件支持 (or keep as is since it's about model support)

## Performance & Optimization
- Optimization -> 优化

## Stability & Regressions
- Stability & Regressions -> 稳定性与回归问题

## What This Means for Application Developers
- Application Developers -> 应用开发者

Let me go through the whole thing:</think>

# LiteLLM 动态 — 2026-10-17

## 今日要点

LiteLLM v1.107.0-dev.3 发布，集成了 cosign 签名的 Docker 镜像，强化供应链安全。CLI 获得重大性能提升（启动时不再初始化完整 SDK），多个 Bedrock 修复上线——尤其是 Claude Haiku 5.5 和 Sonnet 5.5 的原生结构化输出支持，以及 guardrail 穿透流式处理。活跃的 bug 包括 SSE 响应头在首个 chunk 发出前被扣留的回归问题（v1.105.0+），以及提供商复用 response ID 导致 spend-log 行丢失的问题。

---

## 发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|------|------|
| **v1.107.0-dev.3** | 新开发版本 | [Release](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-dev.3) |
| **Docker 签名** | 所有镜像现已完成 cosign 签名（密钥来自 commit `0112e53`） | [Docs](https://docs.sigstore.dev/cosign/overview/) |
| **Guardrail 行为变更** | Bedrock Converse 脱敏内容现已被保留；仅工具扫描（`!`）将被遵循 | [#45874](https://github.com/BerriAI/litellm/pull/45874) |
| **Anthropic `/v1/messages` 验证** | 对格式错误的 `tool_result` 文本返回 400（而非 500） | [#46836](https://github.com/BerriAI/litellm/pull/46836) |
| **Mantle 部署修复** | `chat` 或 `responses` 固定不再重写共享路由行（`!`） | [#46263](https://github.com/BerriAI/litellm/pull/46263) |

---

## 新模型与后端支持

| 模型 / 后端 | 详情 |
|-------------|------|
| **Bedrock Haiku 5.5** | 原生结构化输出支持（JSON schema 调用时自适应思考已恢复） |
| **Bedrock Sonnet 5.5** | 原生结构化输出支持 |
| **Bedrock Fable 5** | 修复 JSON schema 400 错误 |
| **Bedrock Sonnet 4.6** | 修复 `minimum`、可空对象的 schema 400 |
| **Azure AI Microsoft-Decision-1** | 新增 Entra ID 认证支持 | [#46539](https://github.com/BerriAI/litellm/pull/46539) |

---

## 性能与优化

| 变更 | 影响 | PR |
|------|------|-----|
| **CLI 启动** | `lite` 现在启动时不再初始化完整 litellm SDK（~3,300 个模块，1 vCPU 上约省 4.6 秒） | [#46803](https://github.com/BerriAI/litellm/pull/46803) |
| **trim_messages 修复** | `return_response_tokens` 现始终返回正确元组 | [#45854](https://github.com/BerriAI/litellm/pull/45854) |
| **流式处理 handler** | 列表类型的 delta content 强制转为文本（防止 TypeError，防止 chunk 丢失） | [#46262](https://github.com/BerriAI/litellm/pull/46262) |
| **路由过滤** | 非 chat 部署过滤现可通过 `model_info.enforce_supported_endpoints` 选入 | [#46257](https://github.com/BerriAI/litellm/pull/46257) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | **SSE 响应头在首个 chunk 发出前被扣留** — MCP `tools/call` 流式调用等待 15 秒才收到首个事件 | 进行中 | — |
| **高** | **SpendLogs 行丢失** — 提供商复用 response ID 时（Ollama: `chatcmpl-<0..999>`） | 已关闭 | — |
| **高** | **审计日志写入 fire-and-forget** — 即使返回 200 后 worker 关闭仍会丢失 | 进行中 | — |
| **中** | **预算重置阻塞** — 大规模 `LiteLLM_EndUserTable`（百万行，30 秒超时循环） | 进行中 | — |
| **中** | **Prometheus 指标缺失** — 带 `cache: true` 的异步请求丢失 rate-limit 指标 | 进行中 | [#47019](https://github.com/BerriAI/litellm/pull/47019) |
| **中** | **路由回退未触发** — 异常流结束时（截断/卡顿/畸形 chunk） | 已关闭 | — |
| **低** | **使用量页面崩溃** — 大型/多页数据集（"Cannot read properties of undefined"） | 进行中 | — |

**其他 notable bug：**
- `custom_cost_per_token` 对 Anthropic cache-read tokens 计费两次（[#40006](https://github.com/BerriAI/litellm/issues/40006)）
- Azure Responses API 绕过路由，直接访问 `api.openai.com`（[#45033](https://github.com/BerriAI/litellm/issues/45033)）
- `/user/update` 对文档中的 `blocked` 参数返回 400（[#39564](https://github.com/BerriAI/litellm/issues/39564)）

---

## 这对应用开发者意味着什么

1. **如果你在生产环境运行 LiteLLM**：升级以获取签名 Docker 镜像。使用 `cosign verify` 验证——参见链接文档。

2. **如果你使用 Bedrock 模型**：结构化输出修复解决了 Haiku 5.5、Fable 5 和 Sonnet 4.6 上 JSON schema 请求的长期 400 错误。Guardrail 穿透现可正常流式传输。

3. **如果你使用 CLI**：启动时间将显著缩短，尤其是在小规格 VM 上——完整 SDK 不再每次命令都加载。

4. **如果你追踪支出**：注意 Ollama 部署可能因 response ID 复用而静默丢失 spend-log 记录。在修复上线前密切监控你的账单。

5. **如果你在流式场景下使用 guardrails**：中间件响应头回归（#46659）影响 MCP tool 调用——响应在 upstream 产生数据或 15 秒 keepalive 触发前不会开始。

6. **如果你在 Azure AI 上基于 Entra ID 构建**：Microsoft-Decision-1 现支持基于 token 的认证，可在 Azure 模型间实现一致的 identity 管理。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest into Chinese (Simplified Chinese based on the context). Let me translate the content while preserving the exact Markdown structure and following all the rules specified.

I need to:
1. Keep all Markdown structure (headings, tables, lists, etc.)
2. Keep URLs, issue numbers, PR numbers, code spans, file paths, etc. as-is
3. Translate into natural technical Chinese (the register of a Chinese developer newsletter)
4. Not add any preamble or explanation
5. Not use markdown fences around the output</think>

# Unsloth 速报 — 2026-10-17

## 1. 今日焦点

Unsloth 持续推进多实例基础设施，其中一项重要 PR (#12092) 实现了远程 Unsloth Studio 实例的链接，可通过 `@name/model` 语法进行统一模型服务。与此同时，桌面端 bug 修复正在进行中，包括 Windows 更新时预编译 wheel 下载卡顿问题 (#14051)，以及 Mac OS Golden Gate 和键盘布局相关的多个 UI 问题。

## 2. 发布与重大变更

- **过去 24 小时内无新版本**
- 无重大 API 变更

## 3. 新模型与硬件支持

- **FLUX.3 Image Klein**（基础版和蒸馏版）现已支持 INT8/FP8/GGUF 量化 — PR #13933 解决了 black-forest-labs/flux-3-image-klein 的模块化 Diffusers 块加载问题
- **视频模型组件**现在完全从 Unsloth 镜像获取而非供应商仓库 — PR #14003（视频）和 #14008（图像）消除了 ComfyUI 重新打包依赖
- **视频系列默认使用托管量化文本编码器** — PR #14000 从密集编码器切换为预量化托管变体

## 4. 性能与优化

- **预编译 wheel 下载优化** — PR #14051 将内核 wheel 下载大小减半，解决了慢速连接下 Windows 更新卡顿的问题
- **自动 GPU 放置**现在在普通主机上保持静默行为（单 GPU、Apple Silicon、CPU、ROCm）— PR #14020 回滚了意外影响非 MIG 主机的行为变更（修复了 #13928 引入的回归）
- **知识库分块**现在遵守嵌入模型的输入限制 — PR #14045 防止在使用 sentence-transformers/all-MiniLM-L6-v2 等模型（256 tokens）时发生静默截断
- **GPU UUID 掩码解析**针对无 MIG 的主机修复 — PR #14017 修正了 `CUDA_DEVICE_ORDER=FAST_DEVICE_ORDER` 下全 GPU UUID 解析问题

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | Windows 更新时预编译 wheel 下载卡顿 | OPEN | #14051 |
| **中** | 桌面浏览器无法访问（附截图） | OPEN | — |
| **中** | Mac OS Golden Gate 下集成浏览器鼠标点击无响应 | OPEN | — |
| **中** | 更新后丢失模型 — 自定义目录未被扫描 | CLOSED | — |
| **低** | 主题弹窗忽略所选主题（夜间/系统浅色） | OPEN | — |
| **低** | 键盘快捷键 UI 与替代键盘布局不匹配 | OPEN | — |
| **低** | Hugging Face 下拉菜单在 HF 无响应时失败 | OPEN | — |

**已修复的回归问题：**
- 非 MIG 主机的 GPU UUID 掩码解析 — PR #14017
- 单 GPU/Apple Silicon 主机的自动 GPU 放置行为 — PR #14020

## 6. 这对应用开发者的意义

- **多实例部署**正在成为一等公民：PR #12092 支持链接远程 Colab/LAN 实例，提供统一的 `/v1/models` API — 适用于聚合分布式 GPU 资源
- **训练扩展**超越 SFT：PR #12601 引入 DPO、ORPO 和 GRPO 训练，并附带规则奖励库 — 支持基于偏好和强化学习的工作流
- **Hub 导出**现在支持 CLI 登录，无需存储令牌 — PR #14047 修复了导出流程
- **系统代理支持**为浏览器面板添加 — PR #14029 支持企业网络兼容性
- **内存/代理修复**提高可靠性：内核 wheel 下载现在可恢复，代理环境被正确识别

---

**基础设施工程师需关注的重点 PR：**
- 多实例链接：#12092、#12093、#12094
- 训练扩展：#12601
- 桌面稳定性：#14051、#14020、#14017、#14029
- 模型加载：#13933、#14000、#14008、#14003

---

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*