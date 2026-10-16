# AI 基础设施日报 2026-10-16

> 生成时间: 2026-10-16 00:40 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the cross-project comparison report to Chinese. Let me analyze what I need to do:

1. Translate ONLY the content - no preamble, no explanation
2. Preserve all Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

## 1. Ecosystem Overview
"Today's activity reflects a converging inference stack" - 今天的活动反映了推理栈的融合趋势

"low-latency optimization for frontier MoE models" - 前沿MoE模型的低延迟优化

"multi-vendor GPU support" - 多厂商GPU支持

"speculative decoding techniques" - 投机解码技术

## 2. Activity Comparison table
Translate the headers and content, keeping project names, numbers, and identifiers in original form

## 3. Model Support Race table
Same approach

## 4. Performance Frontier
"latent-space MoE & speculative decoding" - 潜空间MoE与投机解码
"KV Cache & Prefix Caching" - KV缓存与前缀缓存
"Multi-Vendor GPU Kernels" - 多厂商GPU内核
"Quantization" - 量化

## 5. Layer Positioning table
"Serving Engine" - 服务引擎
"Local Runtime" - 本地运行时
"Gateway / Proxy" - 网关/代理
"Fine-tuning / Training" - 微调/训练
"Embedded / CLI" - 嵌入式/CLI

## 6. Trend Signals
Convert to Chinese while preserving structure and technical terms


I'll proceed with translating the full report systematically, maintaining technical precision and Markdown formatting.</think>

# AI 基础设施简报 — 跨项目报告 2026-10-16

---

## 1. 生态系统概览

今天的活动反映了**推理栈的融合趋势**，覆盖五个层级：服务引擎（vLLM、SGLang、llama.cpp）、本地运行时（Ollama）、网关/代理（LiteLLM）和微调工具链（Unsloth）。核心主题是**前沿MoE模型的低延迟优化** — DeepSeek V4.1-Flash 和 Muse Spark Open 在所有服务引擎的路线图中都占据主导地位。同时，**多厂商GPU支持**（NVIDIA Blackwell、AMD ROCm、Apple Metal）正在加速推进，每个项目都在落地针对不同厂商的内核优化。v0.7.0 llama.cpp 版本发布和 LiteLLM 的 Docker 签名推送表明生态系统正在向生产级可靠性成熟演进，而投机解码技术（LiliCorr、DSpark、DSPatch）正成为延迟优化的下一个前沿领域。

---

## 2. 活动对比

| 项目 | Issue（过去24h） | PR（过去24h） | 版本发布 |
|---------|------------------|----------------|----------|
| **vLLM** | ~10（关键：共享内存超时、前缀缓存污染） | ~10（FA2 attention、DeepSeek低延迟解码、迭代指标） | 无 |
| **SGLang** | ~10（GLM-5.3 DFLASH bug、PD预填充+HiCache竞态） | ~14（AMD FP8融合、NIXL打包、CUDA图修复） | 无 |
| **llama.cpp** | ~5（Vulkan prompt崩溃、RTX 5090回归） | ~12（MoE缓存、Q2_0 GGUF、Hexagon张量重打包） | **v0.7.0**（重大） |
| **Ollama** | ~26（GLM-5.3-flash失败、Windows托盘循环、API工具定义） | ~41（Windows修复、llama.cpp b11669升级、64KB GGUF对齐） | 无 |
| **LiteLLM** | ~10（预算绕过、Ollama支出下降、GPT-5.4空响应） | ~10（CLI启动、token计数、重试行为、负载测试套件） | v1.107.0-dev.2, v1.106.0-rc.4 |
| **Unsloth** | ~10（Windows沙箱、ROCm崩溃、hub过滤器） | ~15（GRPO修复、MoE去量化、多GPU自动加载、FLUX.3） | v0.1.908-beta |

**观察：**
- **llama.cpp** 的版本发布（v0.7.0）影响最大，包含 LiliCorr 投机解码和 MoE 主机缓存。
- **LiteLLM** 和 **Unsloth** 都发布了签名/正式版本。
- **Ollama** 的 Issue 量最高，反映其更广泛的用户基础和 Windows/多平台问题面。
- **SGLang** 的 PR 数量领先，主要由 AMD ROCm 和 NIXL 传输优化驱动。

---

## 3. 模型支持竞赛

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|------------|--------|---------|---------|
| **Muse Spark Open**（潜空间MoE，256个专家） | ✅ | ✅ | ✅ | — | — | ✅ |
| **DeepSeek V4.1-Flash** | ✅（低延迟解码） | ✅ | ✅ | ✅（现场报告） | ✅ | — |
| **GLM-5.3** | — | ✅（DSpark bug） | — | ✅（失败） | — | — |
| **Nemotron 3.5** | — | — | — | — | ✅ | ✅（24GB Bolt） |
| **FLUX.3 图像** | — | — | — | — | — | ✅（INT8/FP8/GGUF） |
| **Qwen3-Next/Qwen3.5**（AMD） | ✅（ROCm融合内核） | — | — | — | — | — |
| **Step-5-Preview**（ROCm） | — | ✅ | — | — | — | — |
| **Q2_0 GGUF** | — | — | ✅ | ✅ | — | — |
| **Gemma4**（ROCm + CPU卸载） | — | — | — | ✅（段错误） | — | — |

**赢家：vLLM + SGLang + Unsloth** 共享最广的多模态/MoE覆盖。LiteLLM 在 API 兼容性覆盖上领先，但不在模型架构支持上。llama.cpp 是唯一支持 LiliCorr 投机解码的项目。

---

## 4. 性能前沿

优化工作集中在四个方向：

**1. 潜空间MoE与投机解码**
- **llama.cpp**：LiliCorr 投机解码 + `--moe-cache-mib`（主机缓存 MoE 专家，解码速度提升最高 2.2 倍）
- **vLLM**：DSpark 草稿模型 + DeepSeek-V4.1-Flash 在 GB300 上的融合马尔可夫循环
- **SGLang**：DSPARK 投机解码 + 低延迟解码路径

**2. KV缓存与前缀缓存**
- **vLLM**：Dynamo 工作负载快照 + GPU 计时（迭代指标）
- **SGLang**：HiCache 存储预取超时绑定，PD预填充+HiCache回载竞态修复
- **Unsloth**：并行聊天的 KV 抢占
- **llama.cpp**：64KB DMA 页对齐 + O(1) token span 查找

**3. 多厂商GPU内核**
- **vLLM**：FA2 短查询 attention 优化长缓存上下文（SM8x）
- **SGLang**：AMD FP8 GEMM 融合用于 gfx950（每次投影节省约 13µs）
- **llama.cpp**：AMD Vulkan 交错 f16 KV 复制优化
- **Unsloth**：ROCm flash attention 时序探测（自动选择）

**4. 量化**
- **llama.cpp / Ollama**：Q2_0 GGUF（张量类型 42）
- **Unsloth**：MoE 选择性去量化用于 4 比特专家（修正内存统计）
- **vLLM**：MoE 前向自定义算子 stride 验证

---

## 5. 层级定位

| 层级 | 项目 | 角色 |
|-------|----------|------|
| **服务引擎** | **vLLM**, **SGLang**, **llama.cpp** | 底层推理运行时、KV缓存管理、CUDA图执行、张量并行 |
| **本地运行时** | **Ollama** | 端用户本地部署、模型下载/拉取、桌面/服务器集成 |
| **网关/代理** | **LiteLLM** | 多后端路由、限速、预算强制、成本日志记录、OpenAI兼容代理 |
| **微调/训练** | **Unsloth** | LoRA/QLoRA微调、GRPO训练、量化、多GPU编排 |
| **嵌入式/CLI** | **llama.cpp**（亦通过 `llama-cli` 提供服务） | 独立二进制、无Python依赖、GGUF模型使用 |

**关键差异：**
- **vLLM** 和 **SGLang** 在 PagedAttention、前缀缓存和投机解码上直接竞争 — vLLM 在迭代指标可观测性上领先；SGLang 在 NIXL 传输和 AMD 集成上领先。
- **llama.cpp** 作为服务引擎和嵌入式库占据独特位置 — 其 GGUF 格式被 Ollama 和 LiteLLM 消费。
- **Ollama** 为终端用户抽象了 llama.cpp + vLLM，以易用性换取性能调优空间。
- **LiteLLM** 与推理引擎正交 — 它跨引擎路由，提供统一 API 表面和成本管理。
- **Unsloth** 是该集合中唯一的训练层项目 — 其 GRPO 修复和 MoE 量化通过 GGUF 导出流向下游推理。

---

## 6. 趋势信号

### 基础设施工程师应关注什么

| 信号 | 含义 |
|--------|-------------|
| **投机解码走向主流** | LiliCorr（llama.cpp）、DSpark（vLLM/SGLang）和 DSPatch 是竞争方案。预期延迟提升 1.5–2 倍，但实现复杂度和内存开销增加。关注正确性 bug（SGLang 的 GLM-5.3 重复问题）。 |
| **多厂商GPU支持加速** | AMD ROCm、Apple Metal 和 NVIDIA Blackwell（SM120）都在积极优化。如果你是平台无关的，优先选择有活跃厂商后端的引擎（vLLM、SGLang、Unsloth）。 |
| **MoE效率是主要优化目标** | llama.cpp 的 `--moe-cache-mib` 和 vLLM 的 DeepSeek 低延迟解码都针对 MoE 解码吞吐。运行 Mixtral、Qwen3-MoE 或 Muse Spark 时这些优化很重要。 |
| **前缀缓存正确性问题** | vLLM 的跨请求污染和 SGLang 的 PD+HiCache 竞态表明前缀缓存在分解式服务中很脆弱。在修复落地前，生产部署应禁用 `--enable-prefix-caching`。 |
| **LiteLLM 预算强制不可靠** | Issue #26672 显示 max_budget 可被绕过。使用 LiteLLM 进行速率/成本控制时，添加应用层支出告警。 |
| **Windows 仍是二等公民** | Ollama 的托盘循环、Unsloth 的沙箱问题和 llama.cpp 的 RTX 5090 回归都在 Windows 上暴露。如果 Windows 是硬性要求，生产前充分测试。 |
| **Agent/工具使用流式传输脆弱** | Ollama 的 `/api/chat` 空工具定义和 llama.cpp 的 chunk 边界工具调用解析表明流式传输边界情况。端到端测试 agent 工作流。 |

### Agent / 应用开发者应关注什么

- **Agent 模型选择**：Muse Spark Open 正在被广泛支持 — 适合多模态 agent。GLM-5.3 有已知的 DFLASH bug — 生产推理 agent 在修复前避免使用。
- **量化格式收敛**：Q2_0 GGUF 现已被 llama.cpp、Ollama 和 LiteLLM 支持 — 支持一致的量化模型部署。
- **微调与推理差距**：Unsloth 的 GRPO 修复对训练奖励模型的人很重要 — 确保训练权重与推理保持同步。
- **网关可靠性**：LiteLLM 的 Ollama 后端支出日志下降意味着计费可能少报 — 与上游提供商日志对账。

---

*基于 2026-10-16 GitHub 数据的跨项目综合分析。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English vLLM daily digest into Simplified Chinese, following specific rules:

1. Output ONLY the translation - no preamble, explanation, or markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate this carefully while maintaining the structure and technical accuracy.</think>

# vLLM 每日简报 — 2026-10-16

## 1. 今日要闻

今日重点关注大规模推理的性能优化，特别是 DeepSeek-V4.1-Flash 在 GB300 上的低延迟解码路径以及 AMD ROCm GPU 优化。报告了多个影响前缀缓存、LoRA 应用和 MoE 后端的正确性问题。过去 24 小时内无新版本发布。

---

## 2. 版本发布与破坏性变更

**过去 24 小时内无新版本发布**。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **Muse Spark Open** | 新模型支持，包含投机解码、量化及工具调用 | [#61879](https://github.com/vllm-project/vllm/pull/61879) |
| **Step-5-Preview on ROCm** | AMD 后端支持 stepfun-ai/Step-5-Preview (SM90/SM103)，含 Triton 内核用于压缩稀疏注意力 | [#61837](https://github.com/vllm-project/vllm/pull/61837) |
| **NVIDIA Nemotron 3.5 ASR Streaming** | 6 亿参数多语言流式 ASR 模型支持的功能请求 | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **Phi4Flash in V1** | 将 Phi4Flash 从 V0 移植到 V1 引擎的功能请求 | [#23957](https://github.com/vllm-project/vllm/issues/23957) |
| **GLM-5.3 性能** | GLM 5.3 架构的持续优化工作 | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **Kimi K3 性能** | 主动性能优化方向（已合并 5 个 PR，1 个待处理） | [#50587](https://github.com/vllm-project/vllm/issues/50587) |

---

## 4. 性能与优化

### 已合并 / 进行中

| 优化 | 详情 | PR |
|--------------|---------|-----|
| **FA2 短查询注意力** | 在 SM8x (A100, A10, L4, RTX 30/40) 上针对长缓存上下文的短查询优化注意力 | [#61784](https://github.com/vllm-project/vllm/pull/61784) |
| **DeepSeek-V4.1-Flash 低延迟解码** | DSpark draft 模型，带融合马尔可夫循环和 GB300 的后向 CUDA 图 | [#61869](https://github.com/vllm-project/vllm/pull/61869) |
| **NVIDIA 低延迟解码 DSv4.1** | GB300 上 DeepSeek-V4.1-Flash 的可选低批量解码路径（TP4，DSpark） | [#61868](https://github.com/vllm-project/vllm/pull/61868) |
| **迭代指标增强** | 工作负载快照和可选 GPU 计时，用于 Dynamo 性能建模 | [#61691](https://github.com/vllm-project/vllm/pull/61691), [#61690](https://github.com/vllm-project/vllm/pull/61690) |
| **融合 QK-norm+RoPE+gate (ROCm)** | AMD GPU 上 Qwen3-Next/Qwen3.5 的 Triton 内核 | [#51406](https://github.com/vllm-project/vllm/pull/51406) |
| **PP 路由专家捕获** | MRv2 中 R3 路由专家的流水线并行支持 | [#61897](https://github.com/vllm-project/vllm/pull/61897) |

### 报告的性能回退

| 问题 | 影响 | 详情 |
|-------|-----------|---------|
| **MoE 解码在 SM12x 上慢约 15%** | 回退 | 自 #56876 以来（DeepGEMM 连续布局对齐从 64 改为 128） | [#58624](https://github.com/vllm-project/vllm/issues/58624) |
| **ModelOpt Llama-4 检查点加载** | 加载需 5+ 分钟 | 即使从 CPU 页面缓存加载也不例外；根本原因在 state dict 加载逻辑 | [#31624](https://github.com/vllm-project/vllm/issues/31624) |
| **FlashInfer MoE OOM** | Blackwell (16GB) | 在 `profile_run` 内部分配的工作空间导致 RTX 5070 Ti OOM | [#49476](https://github.com/vllm-project/vllm/issues/49476) |

---

## 5. 稳定性与回退

### 高严重程度

| 问题 | 严重程度 | 状态 | 修复 PR |
|-------|----------|--------|-----------|
| **共享内存广播块超时** | 高 | 待处理 | — |
| **跨请求上下文污染** | 高 | 待处理 | — |
| **混合 GDN + MTP k=3 中的静默 CUDA IMA** | 高 | 待处理 | — |

### 中等严重程度

| 问题 | 详情 | 参考 |
|-------|-----------|-----------|
| **LoRA 在 MLA kv_b_proj 上静默未应用** | 解码通过吸收绕过；prefill 使用过期引用 | [#48974](https://github.com/vllm-project/vllm/issues/48974) |
| **Text PEFT LoRA 静默无效** | 对于在 `language_model` 下挂载 LM 的包装器模型 | [#48019](https://github.com/vllm-project/vllm/issues/48019) |
| **MoE forward 垃圾输出** | `torch.compile` + FlashInfer 后端下的 Nemotron-3-Nano-30B-A3B-NVFP4 | [#61749](https://github.com/vllm-project/vllm/pull/61749)（已修复） |
| **混合 GDN 前缀缓存未命中** | Qwen3.5-122B-A10B 上的 MTP spec 解码 | [#52244](https://github.com/vllm-project/vllm/pull/52244) |
| **DFlash2 滑动窗口 NaN** | ROCm 前缀注意力，混合目标模型 | [#53628](https://github.com/vllm-project/vllm/pull/53628) |
| **Mamba2 chunk scan 在 sm90 上 NaN** | 自动调优器在 Hopper 上选择有问题的配置 | [#61718](https://github.com/vllm-project/vllm/pull/61718)（已修复） |
| **Ray 流水线 100% CPU** | 使用 Ray 分布式流水线并行时每个节点都出现 | [#21231](https://github.com/vllm-project/vllm/issues/21231) |
| **Embedding 死锁** | 同一请求中截断输入跟随短输入（CUDA 构建） | [#55427](https://github.com/vllm-project/vllm/issues/55427)（已关闭） |

---

## 6. 这对应用开发者意味着什么

1. **AMD GPU 部署**：Qwen3.8-2.4T 和 Flash-Next 型号在 MI355X/gfx950 上的 ROCm 优化正在积极进行中。如果您正在运行 AMD 硬件，预期会有持续改进，但请注意监控回退情况。

2. **DeepSeek-V4.1-Flash 用户**：GB300 上使用 DSpark 投机解码的新低延迟解码路径可显著改善延迟。可通过 `decode_backend=low_latency` 主动启用。

3. **前缀缓存注意事项**：如果您在 prefill/decode 分解中使用自动前缀缓存，请注意跨请求污染问题（[#61160](https://github.com/vllm-project/vllm/issues/61160)）。在修复前可使用 `--no-enable-prefix-caching` 作为临时方案。

4. **LoRA/PEFT 用户**：某些模型架构（MLA 模型、 wrapper 模型）可能会发生静默失败。请在生产环境中彻底测试适配器。

5. **使用 `allowed_token_ids` 的束搜索**：如果您使用这个 OpenAI 兼容参数，请注意它现在正在 [#47630](https://github.com/vllm-project/vllm/pull/47630) 中修复。

6. **SM12x MoE 用户**：存在约 15% 的解码性能回退。请监控工作负载，并在关键场景下考虑固定到旧版 DeepGEMM。

---

*基于 GitHub 数据生成 — vllm-project/vllm*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest from English to Chinese. I need to translate only the content, keeping all the Markdown structure, URLs, code references, issue numbers, etc. as-is. The translation should read naturally in Chinese, like a developer newsletter.

Let me go through and translate each section:

1. Today's Highlights - needs to convey the key themes
2. Releases & Breaking Changes - straightforward
3. New Model & Hardware Support - table translation, keep links
4. Performance & Optimization - table with technical details
5. Stability & Regressions - table with severity, issue, status
6. What This Means for Application Developers - numbered list with technical context

I need to be careful with:
- Technical terms that are commonly used in Chinese (CUDA, FP8, GEMM, etc. - keep in English)
- API names, function names, project names
- Issue/PR numbers and links
- Markdown formatting

Let me translate section by section:</think>

# SGLang 速报 — 2026-10-16

## 1. 今日要闻

SGLang 项目正在推进多供应商 GPU 支持和推理优化。AMD 贡献者在 gfx950 上完成了 FP8 GEMM 性能优化，同时团队修复了 Qwen3-VL 深栈媒体预填充的 CUDA Graph 问题。CI 基础设施持续受到关注，设有专门的易失测试追踪器，Python 3.10 弃用 PR 也在推进中。

---

## 2. 发布与重大变更

- **过去 24 小时内无新版本发布**。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **DeepSeek-V4.1-Flash on SM120** | 8× RTX PRO 6000（96GB，仅 PCIe，无 NVLink）生产环境报告 — 包含工作拓扑和实测吞吐 | [#40877](https://github.com/sgl-project/sglang/issues/40877) |
| **GLM-5.3-Flash on SM120** | FA4 attention 后端在 hybrid extend 上崩溃；Triton 是唯一可用的路径 | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **AMD MI355X (gfx950)** | 激活值量化融合进 small-M FP8 block-scale GEMM — 每次投影减少约 13 µs 解码延迟 | [#42229](https://github.com/sgl-project/sglang/pull/42229) |

---

## 4. 性能与优化

| 领域 | 变更 | 详情 |
|------|--------|---------|
| **AMD FP8 GEMM** | 激活值量化融合 | 在 gfx950 上将激活值量化融合进 block-scale GEMM，消除独立 kernel；低并发时每个 dense FP8 投影节省约 4 µs |
| **统一内存** | 预热压缩 & 页信封复制 | 启动时预热压缩；按页 ID 复制完整页信封 — 减少服务期间首次使用的延迟 |
| **NIXL 传输** | TP 异构 KV 打包 | Muse Spark Open 工作负载的新打包方案 |
| **CUDA Graphs** | 深栈媒体预填充 | 保持深栈媒体预填充 eager 以避免 Qwen3-VL 图像/视频回放问题 |
| **HiCache** | 存储预取超时绑定 | 从首次阻塞 admission poll 开始计时而非操作启动 — 防止重试间无限等待 |
| **Diffusion 运行时** | GC 延迟 | 导入运行时时延迟完整 GC — 减少 diffusion scheduler 的启动时间 |
| **MTP Verify Kernel** | SM90 支持扩展 | CuTe DSL KDA verify kernel 现支持 Hopper (SM90) |
| **JSON Schema 验证** | jsonschema-rs 采纳 | 替换纯 Python 验证器；18 工具 agent 请求每次节省约 12ms |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | **GLM-5.3 + DFLASH**：推理/输出时严重重复和退化循环 | 待解决 — [#40843](https://github.com/sgl-project/sglang/issues/40843) |
| **高** | **DeepSeek-V4.1 + DSPARK**：无界 SparsePrefillWorkspace 分配导致 TP 组 OOM 崩溃 | 待解决 — [#41076](https://github.com/sgl-project/sglang/issues/41076) |
| **高** | **PD 预填充 + HiCache**：提前发送的缓存前缀在 HiCache 回载完成前传输 KV — 解码时使用过期 KV | 待解决 — [#44070](https://github.com/sgl-project/sglang/issues/44070) |
| **中** | **请求期间客户端断开**：未捕获的 `asyncio.CancelledError` 导致整个引擎崩溃 | 待解决 — [#39216](https://github.com/sgl-project/sglang/issues/39216) |
| **中** | **GLM-5.3 thinking 输出**：多工具 agent 提示下退化为重复的 '!' | 待解决 — [#36669](https://github.com/sgl-project/sglang/issues/36669) |
| **中** | **NIXL PD 中止**：使默认传输工作线程在健康非终止句柄上等待 | 待解决 — [#44369](https://github.com/sgl-project/sglang/issues/44369) |
| **中** | **WeightChecker reset_tensors**：用随机值填充 `MRotaryEmbedding.axis_map` | 待解决 — [#44501](https://github.com/sgl-project/sglang/issues/44501) |
| **低** | **流式客户端断开**：僵尸请求解码到 max_tokens 并刷屏日志 | 修复中 — [#36333](https://github.com/sgl-project/sglang/issues/36333) |

---

## 6. 这对应用开发者意味着什么

- **Python 3.10 即将弃用**：项目正将剩余 CUDA 构建路径迁移到 Python 3.11+（[#44393](https://github.com/sgl-project/sglang/pull/44393)）。请确保你的部署环境使用 Python ≥3.11。

- **GLM-5.3 用户**：使用 DFLASH 投机解码时，生产环境中会遇到重复 bug — 建议禁用 DFLASH 或在修复发布前使用其他模型。

- **多模态（Qwen3-VL）用户**：深栈预填充的 CUDA Graph 修复（[#44607](https://github.com/sgl-project/sglang/pull/44607)）修正了图像/视频回放损坏问题 — 合并后请更新。

- **Agent/JSON 工具用户**：使用 18 工具时 schema 验证现在每次请求快约 12ms（[#43274](https://github.com/sgl-project/sglang/pull/43274)）。

- **AMD MI355X 用户**：新的 FP8 GEMM 优化在低并发时提供了显著的单次投影延迟改善。

- **RTX PRO 6000 (SM120) 用户**：DeepSeek-V4.1-Flash 生产配置现已记录（[#40877](https://github.com/sgl-project/sglang/issues/40877) — 对仅 PCIe 拓扑环境是很好的参考）。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this English digest about llama.cpp into Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form - do not translate them
5. Use natural technical Chinese - register of a Chinese developer newsletter

Let me translate this while keeping all the technical terms, links, and identifiers in their original English form where appropriate (like model names, PR numbers, config parameters).

Let me go through each section:

## 1. Today's Highlights

**llama.cpp v0.7.0 已发布**，引入了 LiliCorr 投机解码、GLM5-Next 的 MTP 支持，以及用于在主机内存中缓存 MoE 专家的新 GPU 缓存（`--moe-cache-mib`），当专家卸载到主机时，可实现最高 **2.2 倍** 的解码吞吐量提升。该版本还增加了对 Muse Spark Open（具有 256 个专家的多模态 MoE 架构）、K2 Horizon 模型以及其他几种架构的支持。

## 2. Releases & Breaking Changes

| Version | Key Changes |
|---------|-------------|
| **v0.7.0** (b11669) | LiliCorr speculative decoding; MTP for GLM5-Next; `--moe-cache-mib` for host-cached MoE experts; new models: K2 Horizon, Muse Spark Open, Prism; Metal BF16 flash attention kernel |
| **b11671** | Sync with ggml upstream |

**Migration notes:** The version bump to 0.7.0 includes changes to model loading for newer Granite Switch checkpoints (see PR #30621 for conversion fix).

需要将 model loading 改为"模型加载"，checkpoints 改为"检查点"，migration notes 改为"迁移说明"，version bump 改为"版本升级"。

## 3. New Model & Hardware Support

- **Muse Spark Open** — 潜在空间 MoE 模型，包含 256 个专家，维度为 4096，残差流维度达 8192，采用 top-8 sigmoid 路由机制
- **maion-coder** — 新增模型架构支持
- **K2 Horizon** — Dense 架构已集成
- **MoE 8x22B** — 支持大规模稀疏专家混合模型
- **Qwen4exp** — 控制向量功能已连接（`build_cvec` 和 `l_out` 回调）
- **Metal BF16** — 适用于 Apple Silicon 的 Flash attention 内核变体
- **Hexagon 后端** — Q1_0 量化支持已添加

## 4. Performance & Optimization

MoE 解码性能通过 `--moe-cache-mib` 获得显著提升，当专家卸载到主机时解码吞吐量提高最多 2.2 倍。`--moe-cache-topk` 参数可限制主机缓存层的活跃专家数量，从而降低 PCIe 主机到设备传输开销。Vulkan/AMD 优化通过 strided f16 KV copy 改进内存通道利用率，多线程场景中的并发首次设备初始化问题已解决。服务器改进包括仅保存可恢复槽状态以减少不必要的 I/O 操作，以及处理无嵌入情况的非空图以解决嵌入专用图的分配问题。

## 5. Stability & Regressions

CUDA 在 RTX 5090 上的解码性能相比 Ada 低约 10%，Windows/Ollama 上的 MTP 速度约为 1.7 倍。Vulkan 在 Strix Halo 上当 ubatch 超过 128 时长上下文提示处理崩溃，Metal 在 Nemotron 3.5 Bolt 74B-A9B 上因 ggml_metal_op_mul_mat_id 导致段错误。

Draft-MTP 在多 GPU 分层分解时使提示处理减半，Vulkan 上多设备加 CPU MoE 配置性能下降，llama-server 存在通过缓存提示耗尽 VRAM 的潜在 DoS 风险。Convert 工具中较新 Granite Switch 检查点的 block_count 不匹配问题已修复。

## 6. What This Means for Application Developers

For MoE inference, enabling the `--moe-cache-mib` flag significantly improves decode throughput when using models like Mixtral or Qwen3-MoE with experts offloaded to host memory. Multimodal capabilities continue to expand with Muse Spark Open supporting another vision and audio model, while the MTMD audio streaming API enables real-time processing. Server enhancements include slot state save/restore that now filters to restorable states, reducing wasted I/O, and embedding endpoints supporting the `dimensions` parameter for Matryoshka-style truncated embeddings.

Two areas warrant attention: RTX 5090 users on Windows should watch the CUDA decode regression, and Vulkan users on AMD Strix Halo should avoid ubatch sizes above 128 for long-context tasks. Upcoming features in progress include the realtime transcription WebSocket API and HF Hub model discovery UI for the server.

Formatting the table with Chinese translations while preserving technical specifications: Model loading changes for newer Granite Switch checkpoints are documented in PR #30621. New model and hardware support covers Muse Spark Open's latent space MoE with 256 experts across 4096 dimensions, residual streams at 8192, and top-8 sigmoid routing, along with maion-coder architecture support, K2 Horizon dense and MoVA variants, Qwen4exp control vector integration through `build_cvec` and `l_out` callbacks, and Metal BF16 flash attention kernel variants for Apple Silicon.

Performance optimizations include the `--moe-cache-mib` GPU cache for host-memory experts delivering up to 2.2x decode speedup when experts are offloaded, `--moe-cache-topk` for capping active experts on host-cached layers to reduce PCIe transfer overhead, Vulkan/AMD strided f16 KV copy for improved memory channel utilization, and concurrent first-device init fixes.

Stability and regression issues are tracked across multiple backends: CUDA decode regression on RTX 5090, Vulkan long context prompt processing collapse on Strix Halo, Metal segfaults on Nemotron 3.5, draft-MTP halving prompt processing efficiency on multi-GPU layer splits, Vulkan MoE slowdown with multi-device and CPU configurations, llama-server VRAM exhaustion risks via cache-prompt, and Granite Switch block_count mismatches in newer checkpoints.</think>

# llama.cpp 动态 — 2026-10-16

## 1. 今日要闻

**llama.cpp v0.7.0 已正式发布**，引入了 LiliCorr 投机解码、GLM5-Next 的 MTP 支持，以及用于在主机内存中缓存 MoE 专家的新 GPU 缓存（`--moe-cache-mib`）。当专家被卸载到主机时，解码吞吐量可提升最高 **2.2 倍**。该版本还新增了对 Muse Spark Open（具有 256 个专家的多模态潜在空间 MoE 架构）、K2 Horizon 模型以及多种其他架构的支持。

## 2. 版本更新与破坏性变更

| 版本 | 关键变更 |
|------|----------|
| **v0.7.0** (b11669) | LiliCorr 投机解码；GLM5-Next 的 MTP；`--moe-cache-mib` 主机缓存 MoE 专家；新模型：K2 Horizon、Muse Spark Open、Prism；Metal BF16 Flash Attention 内核 |
| **b11671** | 与 ggml 上游同步 |

**迁移说明：** 版本升级到 0.7.0 包含了针对较新 Granite Switch 检查点的模型加载变更（详见 PR #30621 的转换修复）。

## 3. 新模型与硬件支持

- **Muse Spark Open** — 潜在空间 MoE，256 个专家，维度 4096，残差流维度 8192，top-8 sigmoid 路由（[#30616](https://github.com/ggml-org/llama.cpp/pull/30616)）
- **maion-coder** — 新增模型架构支持（[#29778](https://github.com/ggml-org/llama.cpp/pull/29778)）
- **K2 Horizon** — Dense 和 MoVA 变体已添加
- **Qwen4exp** — 控制向量支持已接入（`build_cvec` 和 `l_out` 回调）（[#30589](https://github.com/ggml-org/llama.cpp/pull/30589)）
- **Metal BF16** — Apple Silicon 的 Flash Attention 内核变体（[#30491](https://github.com/ggml-org/llama.cpp/pull/30491)）
- **Hexagon 后端** — Q1_0 量化支持已添加（[#30122](https://github.com/ggml-org/llama.cpp/pull/30122)）

## 4. 性能优化

| 领域 | 变更 | 影响 |
|------|------|------|
| **MoE 解码** | `--moe-cache-mib` 主机内存专家 GPU 缓存 | 专家卸载时最高 **2.2 倍** 吞吐量提升（[#29887](https://github.com/ggml-org/llama.cpp/issues/29887)） |
| **MoE** | `--moe-cache-topk` 限制主机缓存层的活跃专家数 | 减少 PCIe H2D 传输开销（[#30593](https://github.com/ggml-org/llama.cpp/pull/30593)） |
| **Vulkan/AMD** | 跨步 f16 KV 拷贝优化 | 提升 AMD GPU 内存通道利用率（[#27703](https://github.com/ggml-org/llama.cpp/pull/27703)） |
| **Vulkan** | 并发首设备初始化修复 | 解决了多线程场景下的崩溃问题（[#29766](https://github.com/ggml-org/llama.cpp/pull/29766)） |
| **Server** | 提示缓存仅保存可恢复的槽状态 | 减少不必要的 I/O（[#30498](https://github.com/ggml-org/llama.cpp/pull/30498)） |
| **Graph** | 无嵌入时的非空图处理 | 修复了仅嵌入图的分配问题（[#30522](https://github.com/ggml-org/llama.cpp/pull/30522)） |

**进行中：** Hexagon 张量重打包重构，以改进权重处理（[#30635](https://github.com/ggml-org/llama.cpp/pull/30635)）

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | CUDA：RTX 5090（sm_120）解码达 76% 峰速而 Ada 为 86%；MTP 在 Windows/Ollama 上慢约 1.7 倍 | 待解决（[#28196](https://github.com/ggml-org/llama.cpp/issues/28196)） |
| **高** | Vulkan：Strix Halo 长上下文提示处理在 ubatch>128 时崩溃；"设备丢失"错误 | 待解决（[#30364](https://github.com/ggml-org/llama.cpp/issues/30364)） |
| **高** | Metal：Nemotron 3.5 Bolt 74B-A9B 在 `ggml_metal_op_mul_mat_id` 中段错误 | 待解决（[#30610](https://github.com/ggml-org/llama.cpp/issues/30610)） |
| **中** | Draft-MTP 在多 GPU 分层时减半提示处理效率 | 待解决（[#27428](https://github.com/ggml-org/llama.cpp/issues/27428)） |
| **中** | Vulkan：多设备 + CPU MoE 在 #29741 后变慢 | 待解决（[#30547](https://github.com/ggml-org/llama.cpp/issues/30547)） |
| **中** | llama-server：通过缓存提示可导致 VRAM 耗尽 DoS | 待解决（[#30577](https://github.com/ggml-org/llama.cpp/issues/30577)） |
| **低** | Convert：较新 Granite Switch 检查点的 block_count 不匹配 | 已修复（[#30621](https://github.com/ggml-org/llama.cpp/pull/30621)） |

## 6. 对应用开发者的意义

- **MoE 推理大幅提速**：如果您正在运行 Mixtral/Qwen3-MoE 等模型且专家被卸载到主机，启用 `--moe-cache-mib` 可获得显著的解码吞吐量提升。
- **多模态支持持续扩展**：Muse Spark Open 新增了一个 vision+audio 模型；MTMD 音频流 API（#30629）可实现实时音频处理用例。
- **Server 改进**：槽状态保存/恢复现在仅过滤可恢复状态，减少了不必要的 I/O；嵌入端点现支持 `dimensions` 参数，可用于 Matryoshka 风格的截断嵌入。
- **注意回归问题**：Windows 上的 RTX 5090 用户应关注 CUDA 解码回归；AMD Strix Halo 的 Vulkan 用户应避免在长上下文任务中使用 >128 的 ubatch 大小。
- **即将推出**：实时转录 WebSocket API 正在开发中（[#30636](https://github.com/ggml-org/llama.cpp/pull/30636)）；Server 的 HF Hub 模型发现 UI（[#29584](https://github.com/ggml-org/llama.cpp/pull/29584)）。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest from English to Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully:

---

# Ollama Digest — 2026-10-16

## 1. 今日要闻

发行版方面比较平静——没有新版本发布——但多方面开发工作都很活跃。主要事项：llama.cpp 升级到 b11669 带来了 Q2_0 GGUF 支持，若干 Windows 特定问题正在修复中（孤儿 runner、托盘应用循环），seroval 库有一个新的安全通报。0.40.4 中文本分类器模型的性能回退正在调查中。

## 2. 版本发布与重大变更

- **过去 24 小时内无新版本**
- llama.cpp 从 b11521 升级到 b11669（PR #19032）——带来 Q2_0 GGUF 支持并修复了 MiniCPM-V 4.7 投影仪加载问题

## 3. 新模型与硬件支持

| 模型 / 硬件 | 状态 | PR / Issue |
|------------------|--------|------------|
| **MiniCPM-V 4.7**（CLIP 投影仪）| 已修复 Windows 加载问题 | PR #19024（llama.cpp b11551）|


| **Q2_0 GGUF 格式**| 现已支持（张量类型 42，文件类型 41）——Prism ML 的 Bonfire 需要此支持 | PR #18967 |
| **GGUF v4**| 64KB DMA 页面对齐 + O(1) token span seek | PR #19037 |
| **Cohere MoE 架构**| 正在调查 RTX 5090（Windows）上的 CUDA 非法内存访问问题 | Issue #18642 |
| **gemma4 with CPU offload**| ROCm：当专家卸载到 CPU 时崩溃；`GGML_CUDA_DISABLE_GRAPHS=1` 变通方案 | Issue #19015 |

The performance issues center on thread scheduling within cgroup CPU limits, causing significant throughput degradation in constrained environments. Text classifier models appear to have regressed in version 0.40.4 compared to the previous release. The MLX engine remains single-threaded and lacks concurrent request handling. API logging now captures dropped or unrecognized fields at the Info level through the OpenAI-compatible endpoints.

Several critical bugs are affecting stability: generation failures with glm-5.3-flash reach 5-8%, A100 GPUs experience PCIe bus errors during inference, and the Windows tray app creates a tight loop when port 11434 is occupied. The /api/chat endpoint renders empty tool definitions while the /v1 route functions properly, Go API loses precision in tool call arguments, SOCKS proxy support is broken in 0.40.4, and a memory leak exists in the desktop app's context menu handling. A security issue involves seroval's fromJSON() type confusion vulnerability. Partial model download cleanup has been resolved, and MiniCPM-V 4.7 now works on Windows.

For application developers, Windows users should launch the tray app first to prevent the fork bomb issue if running `ollama serve` manually. The native `/api/chat` endpoint may not deliver complete tool definitions, so the `/v1` OpenAI-compatible route serves as a reliable alternative. Containerized deployments using Kubernetes or cgroups should explicitly configure `OMP_NUM_THREADS` or `n_threads` to prevent the 45x throughput drop. The model registry continues experiencing issues with Cloudflare R1 storage, and GGUF v4 alignment improvements are planned.</think>

# Ollama Digest — 2026-10-16

## 1. 今日要闻

发行版方面比较平静——没有新版本发布——但多方面开发工作都很活跃。主要事项：llama.cpp 升级到 b11669 带来了 Q2_0 GGUF 支持，若干 Windows 特定问题正在修复中（孤儿 runner、托盘应用循环），seroval 库有一个新的安全通报。0.40.4 中文本分类器模型的性能回退正在调查中。

## 2. 版本发布与重大变更

- **过去 24 小时内无新版本**
- llama.cpp 从 b11521 升级到 b11669（PR #19032）——带来 Q2_0 GGUF 支持并修复了 MiniCPM-V 4.7 投影仪加载问题

## 3. 新模型与硬件支持

| 模型 / 硬件 | 状态 | PR / Issue |
|------------------|--------|------------|
| **MiniCPM-V 4.7**（CLIP 投影仪）| 已修复 Windows 加载问题 | PR #19024（llama.cpp b11551）|
| **Q2_0 GGUF 格式**| 现已支持（张量类型 42，文件类型 41）——Prism ML 的 Bonfire 需要此支持 | PR #18967 |
| **GGUF v4**| 64KB DMA 页面对齐 + O(1) token span seek | PR #19037 |
| **Cohere MoE 架构**| 正在调查 RTX 5090（Windows）上的 CUDA 非法内存访问问题 | Issue #18642 |
| **gemma4 配合 CPU 卸载**| ROCm：专家卸载到 CPU 时 segfault；`GGML_CUDA_DISABLE_GRAPHS=1` 变通方案 | Issue #19015 |

## 4. 性能与优化

| 领域 | 详情 | 参考 |
|------|--------|-----------|
| **线程调度**| `n_threads` 忽略 cgroup CPU 配额 → 容器内 CPU 受限时吞吐量暴跌 45 倍 | Issue #17916 |
| **文本分类器延迟**| 疑似 0.40.4 回退——模型（nimble、clef-flash、tev1）比 0.40.3 慢 | Issue #19002 |
| **MLX 引擎**| 仍为单线程；并发请求支持待定 | Issue #17280 |
| **API 日志**| OpenAI 兼容端点现以 Info 级别记录丢弃/无法识别的字段 | PR #19038 |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高**| **大规模生成失败（5-8%）** — `glm-5.3-flash:cloud` 在集群 829 中出现全零数据 | Issue #18980（22 条评论）|
| **高**| **A100 PCIe 总线丢失** — Qwen3.5 预热/推理期间（0.34.4、0.35.0） | Issue #19006 |
| **中**| **Windows 托盘应用紧密循环启动 `ollama serve`**（约 1/秒），当端口 11434 已被占用时 | Issue #19013 |
| **中**| **`/api/chat` 渲染空工具定义** — 工具名回显为 `""` / `{{ <nil> <nil> [] {}}}`；`/v1` 路由正常工作 | Issue #19040 |
| **中**| **Go API 丢失工具调用参数中的数值精度** | Issue #18942，PR #18941 |
| **中**| **SOCKS 代理回退** — `ollama pull` 在 0.40.4 中使用代理失效，0.34.4 中正常 | Issue #19035 |
| **低**| **内存泄漏** — 桌面应用上下文菜单 C 字符串从未释放 | Issue #19029 |
| **信息**| **安全**：seroval `fromJSON()` 类型混淆（1.5.3 前）| Issue #19034 |

**已修复：**
- 部分模型下载清理现已正常工作（Issue #1599 已关闭）
- MiniCPM-V 4.7 Windows 加载问题已修复

## 6. 这对应用开发者意味着什么

1. **Windows 用户**：托盘应用循环 bug（#19013）是已知问题——如果你手动运行 `ollama serve`，先启动托盘应用以避免 fork 炸弹。

2. **工具调用应用**：如果你在原生 `/api/chat` 端点使用工具，请验证工具定义是否完整到达。`/v1` OpenAI 兼容路由不受影响（#19040）。

3. **容器化部署**：如果你在 Kubernetes/cgroup 受限容器中运行 Ollama，注意 cgroup 线程数 bug（#17916）——显式设置 `OMP_NUM_THREADS` 或 `n_threads` 以避免 45 倍减速。

4. **模型拉取**：Cloudflare R2 重定向错误（#18716、#18842）和 SOCKS 代理故障（#19035）表明模型注册表持续存在问题——考虑重试逻辑或代理配置调整。

5. **即将推出**：GGUF v4 对齐改进（#19037）将在支持的系统上通过零拷贝 mmap 实现更快的模型检查。

---

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest from English to Chinese. Let me carefully translate this while following all the rules specified:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me go through and translate this:

# LiteLLM Digest — 2026-10-16

## 1. Today's Highlights

两个新版本已发布（v1.107.0-dev.2 和 v1.106.0-rc.4），均通过 cosign 实现 Docker 镜像签名验证。社区正在积极调试预算强制执行绕过和内存泄漏问题，同时团队继续推进跨应用身份验证（ID-JAG、SAML 断言）和原生 Responses API 改进。

---

## 2. Releases & Breaking Changes

| Version | Notes |
|---------|-------|
| [v1.107.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-dev.2) | Dev release; Docker images cosigned |
| [v1.106.0-rc.4](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-rc.4) | Release candidate; Docker images cosigned |

**All LiteLLM Docker images are now signed with cosign** — verify with the key from commit `0112e53`.

翻译：


所有 LiteLLM Docker 镜像现已通过 cosign 签名 — 可使用 commit 0112e53 中的密钥进行验证。

## 3. New Model & Hardware Support

过去 24 小时内没有新的模型或硬件支持公告。

## 4. Performance & Optimization

| PR | Description | Impact |
|----|-------------|--------|
| [#46803](https://github.com/BerriAI/litellm/pull/46803) | `perf(cli)`: start `lite` without initializing the full litellm SDK | CLI 启动时间从 1.5–4s 缩短至约 0.1s，小型虚拟机节省约 20s |

我正在处理 LiteLLM 相关的翻译任务，需要确保准确传达技术细节的同时保持中文表达的流畅性。

这个 PR 优化了 CLI 启动性能，通过跳过完整的 litellm SDK 初始化实现了显著的启动加速。

另一个重要改进是引入了可配置的 token 计数策略，支持按请求设置 token 计数方式和备用模型，解决了 Bedrock Haiku 5.5 / Sonnet 5.5 的兼容性问题。

在重试机制方面，现在能够正确处理 Retry-After 响应头，并加入指数退避和抖动策略，避免在 401 错误时无意义地重复请求。网关负载测试工具也得到增强，支持 Docker 构建参数调优和 TCP_NODELAY 选项。

构建时间从约 13 分钟优化至 5 分钟左右，同时提供了完整的延迟分析工具包。

关于稳定性和回归问题，我发现 v1.82.3 版本中存在高优先级的预算强制执行漏洞，可能导致 max_budget 超限后仍被突破。Kubernetes 集群中的内存泄漏问题也很严重，会持续消耗直到达到最大容量。

gpt-image 计费则忽略了欧盟数据驻留溢价和部署级别的 output_cost_per_image_token 设置。SGLang 后端在处理 openai/ 前缀的自托管模型时，多模态功能会被静默丢弃。

此外还有两个中等优先级的问题需要关注：认证失败时会写入日志导致表文件膨胀，以及 Ollama 后端的请求日志存在 10-46% 的丢失率。底层问题包括流媒体超时机制失效和某些推理模型的流式响应处理不完整。

对于应用开发者来说，预算限制的可靠性存在问题——如果依赖 max_budget 进行密钥或用户配额管理，在 #26672 修复前应避免使用 v1.82.3 版本。

Ollama 的支出追踪功能也出现故障，大量请求可能被静默丢弃，需要在生产环境中进行验证或等待后续修复。CLI 启动性能已得到改善，而重试逻辑现在能够正确处理 Retry-After 响应头。Docker 镜像验证现已可用，建议使用 cosign 工具来确保镜像供应链的安全性。最后需要注意的是，/v1/messages 端点上的某些配置可能存在兼容性问题。

在使用 GLM/DeepSeek-R1 与 Anthropic SDK 配合时，流式响应可能会返回空内容，需要在部署前进行充分测试。</think>

# LiteLLM 每日简报 — 2026-10-16

## 1. 今日要闻

两个新版本已发布（`v1.107.0-dev.2` 和 `v1.106.0-rc.4`），均通过 cosign 实现 Docker 镜像签名验证。社区正在积极调试预算强制执行绕过和内存泄漏问题，同时团队继续推进跨应用身份验证（ID-JAG、SAML 断言）和原生 Responses API 改进。

---

## 2. 版本发布与破坏性变更

| 版本 | 说明 |
|------|------|
| [v1.107.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-dev.2) | 开发版；Docker 镜像已通过 cosign 签名 |
| [v1.106.0-rc.4](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-rc.4) | 发布候选版；Docker 镜像已通过 cosign 签名 |

**所有 LiteLLM Docker 镜像现已通过 cosign 签名** — 可使用 commit `0112e53` 中的密钥进行验证。

---

## 3. 新模型与硬件支持

过去 24 小时内没有新的模型或硬件支持公告。

---

## 4. 性能与优化

| PR | 描述 | 影响 |
|----|------|------|
| [#46803](https://github.com/BerriAI/litellm/pull/46803) | `perf(cli)`：启动 `lite` 时不初始化完整的 litellm SDK | CLI 启动时间从 1.5–4s 降至约 0.1s，小型虚拟机节省约 20s |
| [#46777](https://github.com/BerriAI/litellm/pull/46777) | `feat(count_tokens)`：新增 `token_count_framing` 和 `token_count_fallback_model` 配置，支持在响应中返回计数来源 | 支持按请求定制 token 计数策略；修复 Bedrock Haiku 5.5 / Sonnet 5.5 的 404 问题 |
| [#46730](https://github.com/BerriAI/litellm/pull/46730) | `fix(retries)`：尊重 `Retry-After` 响应头，应用指数退避加抖动，过滤瞬态错误 | 重试不再在 <0.2ms 内触发；401 错误不再重试 |
| [#46806](https://github.com/BerriAI/litellm/pull/46806) | `feat(gateway)`：负载测试工具包、Docker 构建参数、`TCP_NODELAY` 客户代理支持 | 构建时间约 5 分钟（快速）对比约 13 分钟（LTO）；提供延迟测试工具 |

---

## 5. 稳定性与回归问题

| Issue | 严重程度 | 状态 | 说明 |
|-------|----------|------|------|
| [#26672](https://github.com/BerriAI/litellm/issues/26672) — v1.82.3 中 `max_budget` / `user.max_budget` 预算强制执行被绕过 | **高** | 开启 | 支出超出 max_budget 后未被拦截；尚无修复 PR |
| [#27954](https://github.com/BerriAI/litellm/issues/27954) — 内存使用量随时间快速增长，Pod 崩溃 | **高** | 开启 | 在 Kubernetes 上内存持续增长至上限；疑似内存泄漏 |
| [#25429](https://github.com/BerriAI/litellm/issues/25429) — `chatgpt/gpt-5.4` 返回空响应，`completion()` 桥接失败 | **高** | 已关闭 | SDK 在 Responses API 上的问题；已修复 |
| [#14004](https://github.com/BerriAI/litellm/issues/14004) — API 在预算超支时仍阻止免费（无成本）模型 | **中** | 已关闭 | 已修复 |
| [#46407](https://github.com/BerriAI/litellm/issues/46407) — `gpt-image` 计费忽略欧盟数据驻留溢价和部署级 `output_cost_per_image_token` | **中** | 开启 | 两个计费边界情况 |
| [#42689](https://github.com/BerriAI/litellm/issues/42689) — 未认证客户端可控制 SpendLog 表大小 | **中** | 开启 | 每次认证失败都会写入记录；由调用方决定表增长 |
| [#46403](https://github.com/BerriAI/litellm/issues/46403) — 当提供商复用响应 ID（Ollama）时 SpendLogs 行被静默丢弃 | **中** | 开启 | Ollama 后端 10–46% 的请求丢失 |
| [#38358](https://github.com/BerriAI/litellm/issues/38358) — 上游从第一个字节开始沉默时 `request_timeout` 永不触发 | **低** | 开启 | 流式超时未强制执行 |
| [#40780](https://github.com/BerriAI/litellm/issues/40780) — 带 `openai/` 前缀的自托管模型通过 `/v1/messages` → Responses API 时静默破坏多模态功能 | **中** | 开启 | vLLM、SGLang、llama.cpp 后端的多模态被静默丢弃 |

---

## 6. 这对应用开发者意味着什么

1. **预算强制执行不可靠** — 如果你依赖 `max_budget` 进行 key/user 限制，在 #26672 修复前请避免使用 v1.82.3。考虑在应用层添加支出告警。

2. **Ollama 支出追踪失效** — 约一半的 Ollama 后端请求日志可能被静默丢弃。如果需要精确的使用计费，请验证你的计费管道或等待 #46403。

3. **CLI 现在启动很快** — `lite` 命令的启动时间从秒级降至亚秒级；非常适合交互式 kubectl 别名和快速代理重启。

4. **重试行为已改进** — `litellm.completion(..., num_retries=N)` 现在会尊重 `Retry-After` 响应头并应用退避。不可恢复的 401 不会触发循环。

5. **Docker 镜像验证可用** — 如果你从 registry 拉取 LiteLLM 镜像，可使用 cosign 验证签名以确保供应链安全：
   ```bash
   cosign verify --key cosign.pub ghcr.io/berriai/litellm:<tag>
   ```

6. **推理模型流式传输脆弱** — 如果通过 `/v1/messages` 配合 Anthropic SDK 使用 GLM/DeepSeek-R1，流式增量可能产生空内容（#32357）。在生产前务必充分测试。

---

*基于 2026-10-16 的 GitHub 数据生成。随着 issue 演变可能会有变化。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the English digest into Chinese while preserving the exact Markdown structure, URLs, code references, numbers, etc. Let me carefully translate this following the rules provided.

Let me go through each section:

1. **Today's Highlights** - Translate naturally
2. **Releases & Breaking Changes** - Table, keep version numbers
3. **New Model & Hardware Support** - Table, keep model names
4. **Performance & Optimization** - Table, keep technical terms
5. **Stability & Regressions** - Table with status
6. **What This Means for Application Developers** - Technical content

Key terms to keep in English:
- Version numbers (v0.1.908-beta, TRL v0.28, etc.)
- Model names (NVIDIA Nemotron 3.5, Meta Muse Spark Open, FLUX.3, etc.)
- Technical terms like GRPO, MoE, KV cache, flash attention, ROCm, MIG
- Commands like --preempt-ram, UNSLOTH_DEBUG_DISTRIBUTED
- Code elements like #12345, PR #12345

Let me translate:</think>

# Unsloth 速报 — 2026-10-16

## 1. 今日要闻

Unsloth 发布 **v0.1.908-beta**，新增 **NVIDIA Nemotron 3.5** 和 **Meta Muse Spark Open** 模型支持，同时带来了 text-diffusion 大模型、DeepSpeed 训练以及针对编码代理的 prompt 缓存优化。多项 PR 已合并，进一步完善了多 GPU 处理、ROCm/Strix APU 兼容性以及 Studio UI 稳定性，为下一个稳定版发布做准备。

---

## 2. 版本发布与重大变更

| 版本 | 关键变更 | 链接 |
|------|----------|------|
| **v0.1.908-beta** | 新增 NVIDIA Nemotron 3.5 + Meta Muse Spark Open 支持；text-diffusion 大模型；DeepSpeed 训练；针对编码代理优化了 prompt 缓存 | [Release](https://github.com/unslothai/unsloth/releases) |

**安全基线更新：** `unsloth-zoo 2026.10.6` 和 `transformers 5.20.0` 扫描结果已审查 — 两个新上游版本将之前已审查的发现移出了基线范围。（[PR #13949](https://github.com/unslothai/unsloth/pull/13949)）

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 详情 | 链接 |
|-------------|------|------|
| **NVIDIA Nemotron 3.5** | Studio 与 Python API 新增模型系列支持 | [指南](https://unsloth.ai/docs/models/nemotron) |
| **NVIDIA Nemotron 3.5 Bolt** | 支持 24 GB 显存运行 | [指南](https://unsloth.ai/docs/models/nemotron) |
| **Meta Muse Spark Open** | 新开源权重模型支持 | [Release](https://github.com/unslothai/unsloth/releases) |
| **FLUX.3 Image Klein** | Distilled 与 base 变体支持 INT8 / FP8 / GGUF 量化 | [PR #13933](https://github.com/unslothai/unsloth/pull/13933) |
| **老模型修复** | Llama-3.1-Tulu-3-8B/70B、SOLAR-10.7B-v1.0、OpenThinker-7B、Hermes-3-Llama-3.1-405B、Pixtral-12B-Base 现已正确以 4bit 加载 | [PR #13941](https://github.com/unslothai/unsloth/pull/13941) |
| **AMD Strix APU** | 改进 torch 路由 — 存在独立 GPU 时自动回退；gfx1153 现改为警告而非静默失败 | [PR #13931](https://github.com/unslothai/unsloth/pull/13931) |

---

## 4. 性能与优化

| 领域 | 变更 | 链接 |
|------|------|------|
| **GRPO 训练** | 修复 TRL vLLM 权重同步问题：TRL < 0.28 时除非 `fast_inference` 共享权重，否则解决训练卡死问题 | [PR #13911](https://github.com/unslothai/unsloth/pull/13911) |
| **MoE 量化** | 新增 `UNSLOTH_MOE_SELECTIVE_DEQUANT` 选项：4-bit MoE 专家保留在编译块外部，确保显存统计准确 | [PR #13946](https://github.com/unslothai/unsloth/pull/13946) |
| **多 GPU 自动加载** | 自动加载图片/视频现选择空闲最多的 GPU；GPU 选择依据各卡能力 | [PR #13928](https://github.com/unslothai/unsloth/pull/13928) |
| **NVIDIA MIG** | Studio 现尊重 MIG UUID 掩码，按切片而非整卡计算大小 | [PR #13927](https://github.com/unslothai/unsloth/pull/13927) |
| **ROCm Flash Attention** | 计时探测替代硬编码模型表 — flash_attn 根据模型 shape 自动选择 | [PR #13792](https://github.com/unslothai/unsloth/pull/13792) |
| **bfloat16/Compile** | 从*每个可见* NVIDIA GPU 决策 bfloat16 支持、torch.compile 和 TMA 选项，而非仅设备 0 | [PR #13923](https://github.com/unslothai/unsloth/pull/13923) |
| **KV 缓存** | KV 抢占使并行聊天共享同一缓存 — 降低多用户部署的显存占用 | [PR #10301](https://github.com/unslothai/unsloth/pull/10301) |
| **聊天滚动** | 默认禁用代码行窗口化 — 修复代码渲染时的滚动条卡顿 | [PR #13919](https://github.com/unslothai/unsloth/pull/13919) |
| **Prefilter** | 新增 `unsloth doctor --gpus` 用于多 GPU 预检，新增 `UNSLOTH_DEBUG_DISTRIBUTED` | [PR #13884](https://github.com/unslothai/unsloth/pull/13884) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 |
|----------|------|------|------|
| **高** | Windows MXC Sandbox 失败，指示不明确 | [Open #13656](https://github.com/unslothai/unsloth/issues/13656) | — |
| **高** | ROCm 预编译二进制在 hipStreamCreateWithFlags 时报"显存不足"崩溃 — 源码编译正常 | [Closed #12205](https://github.com/unslothai/unsloth/issues/12205) | 暂用源码编译作为变通方案 |
| **中** | 图片扩散在编辑时导致 CUBLAS 错误（Qwen-Image-2.1） | [Closed #13638](https://github.com/unslothai/unsloth/issues/13638) | — |
| **中** | ComfyUI 模型错误触发完整下载 | [Closed #8950](https://github.com/unslothai/unsloth/issues/8950) | — |
| **中** | Hub 筛选器"仅显示符合容量的模型"展示了超出显存的 safetensors 模型 | [Open #13945](https://github.com/unslothai/unsloth/pull/13945) | PR 已开放 |
| **低** | 模型 Hub 筛选器未按预期工作 | [Closed #13613](https://github.com/unslothai/unsloth/issues/13613) | — |

---

## 6. 这对应用开发者意味着什么

- **多 GPU 推理**更加健壮：自动加载现在选择最空闲的 GPU，MIG 卡也按正确大小计算 — 适用于共享 GPU 资源池的部署场景。
- **GRPO 微调**稳定性提升：TRL < 0.28 版本的用户在升级后请测试训练脚本。
- **FLUX.3 Image** 支持为 Studio 带来图像生成能力，支持 INT8/FP8/GGUF 量化 — 可实现更低显存的图像工作流。
- **KV 抢占**降低多用户聊天部署的显存开销 — 在 llama-server 中考虑启用 `--preempt-ram` 用于并行聊天场景。
- **新 CLI 工具** `unsloth doctor --gpus` 帮助在生产环境前诊断多 GPU peer-copy 和集体卡死问题。
- **Windows 用户**：沙盒安全修复（[PR #13942](https://github.com/unslothai/unsloth/pull/13942)）现对写入沙盒外的任意命令弹出权限提示 — 请为用户权限对话框做好准备。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*